/* service-worker.js - v3.0.0 */
const VERSION = '3.0.0';
const CACHE_NAME = `sr-cache-v${VERSION}`;
const RUNTIME_CACHE = `sr-runtime-v${VERSION}`;

// Critical resources that should be cached immediately
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/styles.min.css',
  '/profile-pic.webp',
  '/profile-pic.jpg',
  '/offline.html',
  '/manifest.webmanifest',
  '/favicon.ico'
];

// Cache duration settings (in seconds)
const CACHE_DURATION = {
  html: 3600,        // 1 hour
  css: 86400,        // 1 day
  js: 86400,         // 1 day
  images: 604800,    // 1 week
  fonts: 2592000,    // 30 days
  external: 86400    // 1 day for external resources
};

// Install event - cache critical resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching critical resources');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting())
      .catch(err => console.error('Failed to cache:', err))
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            return cacheName.startsWith('sr-') && 
                   cacheName !== CACHE_NAME && 
                   cacheName !== RUNTIME_CACHE;
          })
          .map(cacheName => {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// Helper function to determine cache strategy based on request
function getCacheStrategy(request) {
  const url = new URL(request.url);
  const destination = request.destination;
  
  // Navigation requests - network first with offline fallback
  if (request.mode === 'navigate') {
    return 'network-first';
  }
  
  // Images - cache first
  if (destination === 'image' || /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(url.pathname)) {
    return 'cache-first';
  }
  
  // CSS and JS - stale while revalidate
  if (destination === 'style' || destination === 'script' || 
      /\.(css|js)$/i.test(url.pathname)) {
    return 'stale-while-revalidate';
  }
  
  // Fonts - cache first with long expiration
  if (destination === 'font' || /\.(woff|woff2|ttf|otf)$/i.test(url.pathname)) {
    return 'cache-first';
  }
  
  // External resources - stale while revalidate
  if (!url.hostname.includes(self.location.hostname)) {
    return 'stale-while-revalidate';
  }
  
  // Default - network first
  return 'network-first';
}

// Network first strategy with timeout and proper 404 handling
async function networkFirst(request, timeout = 3000) {
  const cache = await caches.open(RUNTIME_CACHE);
  
  try {
    const networkPromise = fetch(request);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Network timeout')), timeout)
    );
    
    const response = await Promise.race([networkPromise, timeoutPromise]);
    
    // Check if response is successful (2xx status)
    if (response && response.ok) {
      // Clone the response before caching
      cache.put(request, response.clone());
      return response;
    }
    
    // Handle 404 and other error responses for navigation requests
    if (request.mode === 'navigate' && response && (response.status === 404 || response.status >= 400)) {
      console.log(`Navigation request failed with status ${response.status}, showing offline page`);
      const offlineResponse = await cache.match('/offline.html');
      if (offlineResponse) {
        // Return offline page with original status to maintain proper error handling
        return new Response(offlineResponse.body, {
          status: response.status,
          statusText: response.statusText,
          headers: offlineResponse.headers
        });
      }
    }
    
    // Return the response even if it's not ok (let the browser handle it)
    return response;
  } catch (error) {
    console.log('Network request failed, trying cache fallback:', error.message);
    
    // Try cache fallback
    const cached = await cache.match(request);
    if (cached) {
      console.log('Returning cached response');
      return cached;
    }
    
    // Final fallback for navigation requests - show offline page
    if (request.mode === 'navigate') {
      console.log('Navigation request failed, showing offline page');
      const offlineResponse = await cache.match('/offline.html');
      if (offlineResponse) {
        // Return offline page with 503 status for network errors
        return new Response(offlineResponse.body, {
          status: 503,
          statusText: 'Service Unavailable',
          headers: offlineResponse.headers
        });
      }
    }
    
    // For non-navigation requests, throw the error
    throw error;
  }
}

// Cache first strategy
async function cacheFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    // Update cache in background
    fetch(request).then(response => {
      if (response && response.ok) {
        cache.put(request, response);
      }
    }).catch(() => {});
    
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    // Return a fallback response for images
    if (request.destination === 'image') {
      return new Response('', { status: 404, statusText: 'Not Found' });
    }
    throw error;
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  
  const networkPromise = fetch(request)
    .then(response => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);
  
  return cached || networkPromise || new Response('', { 
    status: 503, 
    statusText: 'Service Unavailable' 
  });
}

// Fetch event handler with enhanced error handling
self.addEventListener('fetch', event => {
  // Skip non-HTTP(S) requests
  if (!event.request.url.startsWith('http')) {
    return;
  }
  
  const strategy = getCacheStrategy(event.request);
  
  // Handle fetch with proper error catching
  event.respondWith(
    (async () => {
      try {
        switch (strategy) {
          case 'network-first':
            return await networkFirst(event.request);
            
          case 'cache-first':
            return await cacheFirst(event.request);
            
          case 'stale-while-revalidate':
            return await staleWhileRevalidate(event.request);
            
          default:
            const response = await fetch(event.request);
            
            // Handle 404s for navigation requests
            if (event.request.mode === 'navigate' && response.status === 404) {
              const cache = await caches.open(RUNTIME_CACHE);
              const offlineResponse = await cache.match('/offline.html');
              if (offlineResponse) {
                return new Response(offlineResponse.body, {
                  status: 404,
                  statusText: 'Not Found',
                  headers: offlineResponse.headers
                });
              }
            }
            
            return response;
        }
      } catch (error) {
        console.error('Fetch handler error:', error);
        
        // For navigation requests, always try to show offline page on error
        if (event.request.mode === 'navigate') {
          const cache = await caches.open(RUNTIME_CACHE);
          const offlineResponse = await cache.match('/offline.html');
          if (offlineResponse) {
            return new Response(offlineResponse.body, {
              status: 503,
              statusText: 'Service Unavailable',
              headers: offlineResponse.headers
            });
          }
        }
        
        // Return a basic error response
        return new Response('Network error occurred', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      }
    })()
  );
});

// Background sync for offline form submissions (if needed in future)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncForms());
  }
});

async function syncForms() {
  // Placeholder for future form sync functionality
  console.log('Background sync triggered');
}

// Message handler for cache management
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }).then(() => {
        event.ports[0].postMessage({ cleared: true });
      })
    );
  }
});