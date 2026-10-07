(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const Nc="182",Zs={ROTATE:0,DOLLY:1,PAN:2},Ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bp=0,yh=1,Ep=2,jr=1,gf=2,zo=3,Ci=0,fn=1,yn=2,Ti=0,Ks=1,Mh=2,Sh=3,wh=4,Tp=5,rs=100,Ap=101,Cp=102,Rp=103,Pp=104,zp=200,Lp=201,Dp=202,Ip=203,Fl=204,Ul=205,Np=206,Fp=207,Up=208,Op=209,Bp=210,kp=211,Hp=212,Vp=213,Gp=214,Ol=0,Bl=1,kl=2,no=3,Hl=4,Vl=5,Gl=6,Wl=7,xf=0,Wp=1,Xp=2,ri=0,vf=1,_f=2,yf=3,Fc=4,Mf=5,Sf=6,wf=7,bh="attached",qp="detached",bf=300,fs=301,io=302,Xl=303,ql=304,fa=306,Ri=1e3,Yn=1001,Yl=1002,$e=1003,Yp=1004,er=1005,De=1006,Sa=1007,jn=1008,Mn=1009,Ef=1010,Tf=1011,Bo=1012,Uc=1013,li=1014,Un=1015,ci=1016,Oc=1017,Bc=1018,ko=1020,Af=35902,Cf=35899,Rf=1021,Pf=1022,Ze=1023,Pi=1026,hs=1027,kc=1028,Hc=1029,so=1030,Vc=1031,Gc=1033,$r=33776,Zr=33777,Kr=33778,Jr=33779,jl=35840,$l=35841,Zl=35842,Kl=35843,Jl=36196,Ql=37492,tc=37496,ec=37488,nc=37489,ic=37490,sc=37491,oc=37808,rc=37809,ac=37810,lc=37811,cc=37812,hc=37813,uc=37814,dc=37815,fc=37816,pc=37817,mc=37818,gc=37819,xc=37820,vc=37821,_c=36492,yc=36494,Mc=36495,Sc=36283,wc=36284,bc=36285,Ec=36286,jp=3200,zf=0,$p=1,si="",nn="srgb",Xi="srgb-linear",na="linear",le="srgb",ys=7680,Eh=519,Zp=512,Kp=513,Jp=514,Wc=515,Qp=516,tm=517,Xc=518,em=519,Th=35044,Ah="300 es",oi=2e3,ia=2001;function Lf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function sa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nm(){const s=sa("canvas");return s.style.display="block",s}const Ch={};function Rh(...s){const t="THREE."+s.shift();console.log(t,...s)}function Lt(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Qt(...s){const t="THREE."+s.shift();console.error(t,...s)}function Ho(...s){const t=s.join(" ");t in Ch||(Ch[t]=!0,Lt(...s))}function im(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}class gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const Io=Math.PI/180,Vo=180/Math.PI;function xs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[s&255]+Je[s>>8&255]+Je[s>>16&255]+Je[s>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function kt(s,t,e){return Math.max(t,Math.min(e,s))}function qc(s,t){return(s%t+t)%t}function sm(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function om(s,t,e){return s!==t?(e-s)/(t-s):0}function No(s,t,e){return(1-e)*s+e*t}function rm(s,t,e,n){return No(s,t,1-Math.exp(-e*n))}function am(s,t=1){return t-Math.abs(qc(s,t*2)-t)}function lm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function cm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function hm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function um(s,t){return s+Math.random()*(t-s)}function dm(s){return s*(.5-Math.random())}function fm(s){s!==void 0&&(Ph=s);let t=Ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pm(s){return s*Io}function mm(s){return s*Vo}function gm(s){return(s&s-1)===0&&s!==0}function xm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _m(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),d=o((t-n)/2),u=r((t-n)/2),f=o((n-t)/2),m=r((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:Lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function hn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Yt={DEG2RAD:Io,RAD2DEG:Vo,generateUUID:xs,clamp:kt,euclideanModulo:qc,mapLinear:sm,inverseLerp:om,lerp:No,damp:rm,pingpong:am,smoothstep:lm,smootherstep:cm,randInt:hm,randFloat:um,randFloatSpread:dm,seededRandom:fm,degToRad:pm,radToDeg:mm,isPowerOfTwo:gm,ceilPowerOfTwo:xm,floorPowerOfTwo:vm,setQuaternionFromProperEuler:_m,normalize:hn,denormalize:qs};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Le=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=o[r+0],f=o[r+1],m=o[r+2],x=o[r+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a>=1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(d!==x||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*x;g<0&&(u=-u,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);p=Math.sin(p*v)/y,a=Math.sin(a*v)/y,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+x*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+x*a;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=o[r],u=o[r+1],f=o[r+2],m=o[r+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(o/2),u=l(n/2),f=l(i/2),m=l(o/2);switch(r){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),h=2*(a*e-o*i),d=2*(o*n-r*e);return this.x=e+l*c+r*d-a*h,this.y=n+l*h+a*c-o*d,this.z=i+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new D,zh=new Le;class Ot{constructor(t,e,n,i,o,r,a,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c)}set(t,e,n,i,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],y=i[4],M=i[7],b=i[2],T=i[5],C=i[8];return o[0]=r*x+a*v+l*b,o[3]=r*g+a*y+l*T,o[6]=r*p+a*M+l*C,o[1]=c*x+h*v+d*b,o[4]=c*g+h*y+d*T,o[7]=c*p+h*M+d*C,o[2]=u*x+f*v+m*b,o[5]=u*g+f*y+m*T,o[8]=u*p+f*M+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,u=a*l-h*o,f=c*o-r*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*r)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*o-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new Ot,Lh=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ym(){const s={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===le&&(i.r=Ai(i.r),i.g=Ai(i.g),i.b=Ai(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===le&&(i.r=Js(i.r),i.g=Js(i.g),i.b=Js(i.b))),i},workingToColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},colorSpaceToWorking:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?na:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,o){return Ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,o)},toWorkingColorSpace:function(i,o){return Ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Xi]:{primaries:t,whitePoint:n,transfer:na,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:le,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),s}const Zt=ym();function Ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class Mm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ms===void 0&&(Ms=sa("canvas")),Ms.width=t.width,Ms.height=t.height;const i=Ms.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ms}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Ai(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sm=0;class Yc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Ea(i[r].image)):o.push(Ea(i[r]))}else o=Ea(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ea(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Mm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}let wm=0;const Ta=new D;class on extends gs{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=Yn,i=Yn,o=De,r=jn,a=Ze,l=Mn,c=on.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=xs(),this.name="",this.source=new Yc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ta).x}get height(){return this.source.getSize(Ta).y}get depth(){return this.source.getSize(Ta).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=bf;on.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(f+1)/2,b=(p+1)/2,T=(h+u)/4,C=(d+x)/4,z=(m+g)/4;return y>M&&y>b?y<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(y),i=T/n,o=C/n):M>b?M<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(M),n=T/i,o=z/i):b<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(b),n=C/o,i=z/o),this.set(n,i,o,e),this}let v=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bm extends gs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:n.depth},o=new on(i);this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Yc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends bm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Df extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Em extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Bn):Bn.fromBufferAttribute(o,r),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lo),ir.subVectors(this.max,lo),Ss.subVectors(t.a,lo),ws.subVectors(t.b,lo),bs.subVectors(t.c,lo),zi.subVectors(ws,Ss),Li.subVectors(bs,ws),Zi.subVectors(Ss,bs);let e=[0,-zi.z,zi.y,0,-Li.z,Li.y,0,-Zi.z,Zi.y,zi.z,0,-zi.x,Li.z,0,-Li.x,Zi.z,0,-Zi.x,-zi.y,zi.x,0,-Li.y,Li.x,0,-Zi.y,Zi.x,0];return!Aa(e,Ss,ws,bs,ir)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,Ss,ws,bs,ir))?!1:(sr.crossVectors(zi,Li),e=[sr.x,sr.y,sr.z],Aa(e,Ss,ws,bs,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const di=[new D,new D,new D,new D,new D,new D,new D,new D],Bn=new D,nr=new qi,Ss=new D,ws=new D,bs=new D,zi=new D,Li=new D,Zi=new D,lo=new D,ir=new D,sr=new D,Ki=new D;function Aa(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Ki.fromArray(s,o);const a=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Tm=new qi,co=new D,Ca=new D;class vs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tm.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;co.subVectors(t,this.center);const e=co.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(co,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(co.copy(t.center).add(Ca)),this.expandByPoint(co.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fi=new D,Ra=new D,or=new D,Di=new D,Pa=new D,rr=new D,za=new D;let jc=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ra.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(Ra);const o=t.distanceTo(e)*.5,r=-this.direction.dot(or),a=Di.dot(this.direction),l=-Di.dot(or),c=Di.lengthSq(),h=Math.abs(1-r*r);let d,u,f,m;if(h>0)if(d=r*l-a,u=r*a-l,m=o*h,d>=0)if(u>=-m)if(u<=m){const x=1/h;d*=x,u*=x,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-o,-l),o),f=u*(u+2*l)+c):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ra).addScaledVector(or,u),f}intersectSphere(t,e){fi.subVectors(t.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,i,o){Pa.subVectors(e,t),rr.subVectors(n,t),za.crossVectors(Pa,rr);let r=this.direction.dot(za),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Di.subVectors(this.origin,t);const l=a*this.direction.dot(rr.crossVectors(Di,rr));if(l<0)return null;const c=a*this.direction.dot(Pa.cross(Di));if(c<0||l+c>r)return null;const h=-a*Di.dot(za);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Gt{constructor(t,e,n,i,o,r,a,l,c,h,d,u,f,m,x,g){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c,h,d,u,f,m,x,g)}set(t,e,n,i,o,r,a,l,c,h,d,u,f,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Es.setFromMatrixColumn(t,0).length(),o=1/Es.setFromMatrixColumn(t,1).length(),r=1/Es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const u=r*h,f=r*d,m=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*a,e[4]=-r*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*h,e[9]=x-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,f=r*d,m=a*h,x=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,f=r*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){const u=r*l,f=r*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=r*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Am,t,Cm)}lookAt(t,e,n){const i=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ii.crossVectors(n,Tn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ii.crossVectors(n,Tn)),Ii.normalize(),ar.crossVectors(Tn,Ii),i[0]=Ii.x,i[4]=ar.x,i[8]=Tn.x,i[1]=Ii.y,i[5]=ar.y,i[9]=Tn.y,i[2]=Ii.z,i[6]=ar.z,i[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],y=n[7],M=n[11],b=n[15],T=i[0],C=i[4],z=i[8],_=i[12],w=i[1],R=i[5],I=i[9],L=i[13],O=i[2],U=i[6],N=i[10],V=i[14],W=i[3],Z=i[7],tt=i[11],st=i[15];return o[0]=r*T+a*w+l*O+c*W,o[4]=r*C+a*R+l*U+c*Z,o[8]=r*z+a*I+l*N+c*tt,o[12]=r*_+a*L+l*V+c*st,o[1]=h*T+d*w+u*O+f*W,o[5]=h*C+d*R+u*U+f*Z,o[9]=h*z+d*I+u*N+f*tt,o[13]=h*_+d*L+u*V+f*st,o[2]=m*T+x*w+g*O+p*W,o[6]=m*C+x*R+g*U+p*Z,o[10]=m*z+x*I+g*N+p*tt,o[14]=m*_+x*L+g*V+p*st,o[3]=v*T+y*w+M*O+b*W,o[7]=v*C+y*R+M*U+b*Z,o[11]=v*z+y*I+M*N+b*tt,o[15]=v*_+y*L+M*V+b*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],v=l*f-c*u,y=a*f-c*d,M=a*u-l*d,b=r*f-c*h,T=r*u-l*h,C=r*d-a*h;return e*(x*v-g*y+p*M)-n*(m*v-g*b+p*T)+i*(m*y-x*b+p*C)-o*(m*M-x*T+g*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],v=d*g*c-x*u*c+x*l*f-a*g*f-d*l*p+a*u*p,y=m*u*c-h*g*c-m*l*f+r*g*f+h*l*p-r*u*p,M=h*x*c-m*d*c+m*a*f-r*x*f-h*a*p+r*d*p,b=m*d*l-h*x*l-m*a*u+r*x*u+h*a*g-r*d*g,T=e*v+n*y+i*M+o*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=v*C,t[1]=(x*u*o-d*g*o-x*i*f+n*g*f+d*i*p-n*u*p)*C,t[2]=(a*g*o-x*l*o+x*i*c-n*g*c-a*i*p+n*l*p)*C,t[3]=(d*l*o-a*u*o-d*i*c+n*u*c+a*i*f-n*l*f)*C,t[4]=y*C,t[5]=(h*g*o-m*u*o+m*i*f-e*g*f-h*i*p+e*u*p)*C,t[6]=(m*l*o-r*g*o-m*i*c+e*g*c+r*i*p-e*l*p)*C,t[7]=(r*u*o-h*l*o+h*i*c-e*u*c-r*i*f+e*l*f)*C,t[8]=M*C,t[9]=(m*d*o-h*x*o-m*n*f+e*x*f+h*n*p-e*d*p)*C,t[10]=(r*x*o-m*a*o+m*n*c-e*x*c-r*n*p+e*a*p)*C,t[11]=(h*a*o-r*d*o-h*n*c+e*d*c+r*n*f-e*a*f)*C,t[12]=b*C,t[13]=(h*x*i-m*d*i+m*n*u-e*x*u-h*n*g+e*d*g)*C,t[14]=(m*a*i-r*x*i-m*n*l+e*x*l+r*n*g-e*a*g)*C,t[15]=(r*d*i-h*a*i+h*n*l-e*d*l-r*n*u+e*a*u)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,u=o*c,f=o*h,m=o*d,x=r*h,g=r*d,p=a*d,v=l*c,y=l*h,M=l*d,b=n.x,T=n.y,C=n.z;return i[0]=(1-(x+p))*b,i[1]=(f+M)*b,i[2]=(m-y)*b,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(u+p))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(m+y)*C,i[9]=(g-v)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let o=Es.set(i[0],i[1],i[2]).length();const r=Es.set(i[4],i[5],i[6]).length(),a=Es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),kn.copy(this);const c=1/o,h=1/r,d=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,e.setFromRotationMatrix(kn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=oi,l=!1){const c=this.elements,h=2*o/(e-t),d=2*o/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,x;if(l)m=o/(r-o),x=r*o/(r-o);else if(a===oi)m=-(r+o)/(r-o),x=-2*r*o/(r-o);else if(a===ia)m=-r/(r-o),x=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=oi,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let m,x;if(l)m=1/(r-o),x=r/(r-o);else if(a===oi)m=-2/(r-o),x=-(r+o)/(r-o);else if(a===ia)m=-1/(r-o),x=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Es=new D,kn=new Gt,Am=new D(0,0,0),Cm=new D(1,1,1),Ii=new D,ar=new D,Tn=new D,Ih=new Gt,Nh=new Le;class Be{constructor(t=0,e=0,n=0,i=Be.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Be.DEFAULT_ORDER="XYZ";class If{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rm=0;const Fh=new D,Ts=new Le,pi=new Gt,lr=new D,ho=new D,Pm=new D,zm=new Le,Uh=new D(1,0,0),Oh=new D(0,1,0),Bh=new D(0,0,1),kh={type:"added"},Lm={type:"removed"},As={type:"childadded",child:null},La={type:"childremoved",child:null};class Re extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new D,e=new Be,n=new Le,i=new D(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Ot}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new If,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Oh,t)}rotateZ(t){return this.rotateOnAxis(Bh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Oh,t)}translateZ(t){return this.translateOnAxis(Bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(ho,lr,this.up):pi.lookAt(lr,ho,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),Ts.setFromRotationMatrix(pi),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kh),As.child=t,this.dispatchEvent(As),As.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lm),La.child=t,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kh),As.child=t,this.dispatchEvent(As),As.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,t,Pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,zm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Re.DEFAULT_UP=new D(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new D,mi=new D,Da=new D,gi=new D,Cs=new D,Rs=new D,Hh=new D,Ia=new D,Na=new D,Fa=new D,Ua=new ce,Oa=new ce,Ba=new ce;class Xn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Hn.subVectors(t,e),i.cross(Hn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Hn.subVectors(i,e),mi.subVectors(n,e),Da.subVectors(t,e);const r=Hn.dot(Hn),a=Hn.dot(mi),l=Hn.dot(Da),c=mi.dot(mi),h=mi.dot(Da),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,m=(r*h-a*l)*u;return o.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,i,o,r,a,l){return this.getBarycoord(t,e,n,i,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,gi.x),l.addScaledVector(r,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(t,e,n,i,o,r){return Ua.setScalar(0),Oa.setScalar(0),Ba.setScalar(0),Ua.fromBufferAttribute(t,e),Oa.fromBufferAttribute(t,n),Ba.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Ua,o.x),r.addScaledVector(Oa,o.y),r.addScaledVector(Ba,o.z),r}static isFrontFacing(t,e,n,i){return Hn.subVectors(n,e),mi.subVectors(t,e),Hn.cross(mi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Hn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;Cs.subVectors(i,n),Rs.subVectors(o,n),Ia.subVectors(t,n);const l=Cs.dot(Ia),c=Rs.dot(Ia);if(l<=0&&c<=0)return e.copy(n);Na.subVectors(t,i);const h=Cs.dot(Na),d=Rs.dot(Na);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Cs,r);Fa.subVectors(t,o);const f=Cs.dot(Fa),m=Rs.dot(Fa);if(m>=0&&f<=m)return e.copy(o);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Rs,a);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Hh.subVectors(o,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Hh,a);const p=1/(g+x+u);return r=x*p,a=u*p,e.copy(n).addScaledVector(Cs,r).addScaledVector(Rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},cr={h:0,s:0,l:0};function ka(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=qc(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ka(r,o,t+1/3),this.g=ka(r,o,t),this.b=ka(r,o,t-1/3)}return Zt.colorSpaceToWorking(this,i),this}setStyle(t,e=nn){function n(o){o!==void 0&&parseFloat(o)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=Nf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Zt.workingToColorSpace(Qe.copy(this),t),Math.round(kt(Qe.r*255,0,255))*65536+Math.round(kt(Qe.g*255,0,255))*256+Math.round(kt(Qe.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Qe.copy(this),e);const n=Qe.r,i=Qe.g,o=Qe.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-n)/d+2;break;case o:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=nn){Zt.workingToColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,i=Qe.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(cr);const n=No(Ni.h,cr.h,e),i=No(Ni.s,cr.s,e),o=No(Ni.l,cr.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new zt;zt.NAMES=Nf;let Dm=0,qo=class extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=Ks,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Ul,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Yo extends qo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new D,hr=new pt;let Im=0;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Im++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),i=hn(i,this.array),o=hn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Th&&(t.usage=this.usage),t}}class $c extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ff extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nm=0;const Ln=new Gt,Ha=new Re,Ps=new D,An=new qi,uo=new qi,Ye=new D;class Ie extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lf(t)?Ff:$c)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Ot().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];An.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(An.min,uo.min),An.expandByPoint(Ye),Ye.addVectors(An.max,uo.max),An.expandByPoint(Ye)):(An.expandByPoint(uo.min),An.expandByPoint(uo.max))}An.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Ye.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ye.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(t,c),Ye.add(Ps)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<n.count;z++)a[z]=new D,l[z]=new D;const c=new D,h=new D,d=new D,u=new pt,f=new pt,m=new pt,x=new D,g=new D;function p(z,_,w){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,_),d.fromBufferAttribute(n,w),u.fromBufferAttribute(o,z),f.fromBufferAttribute(o,_),m.fromBufferAttribute(o,w),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(R),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(R),a[z].add(x),a[_].add(x),a[w].add(x),l[z].add(g),l[_].add(g),l[w].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let z=0,_=v.length;z<_;++z){const w=v[z],R=w.start,I=w.count;for(let L=R,O=R+I;L<O;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new D,M=new D,b=new D,T=new D;function C(z){b.fromBufferAttribute(i,z),T.copy(b);const _=a[z];y.copy(_),y.sub(b.multiplyScalar(b.dot(_))).normalize(),M.crossVectors(T,_);const R=M.dot(l[z])<0?-1:1;r.setXYZW(z,y.x,y.y,y.z,R)}for(let z=0,_=v.length;z<_;++z){const w=v[z],R=w.start,I=w.count;for(let L=R,O=R+I;L<O;L+=3)C(t.getX(L+0)),C(t.getX(L+1)),C(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new D,o=new D,r=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Ge(u,h,d)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],d=o[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new Gt,Ji=new jc,ur=new vs,Gh=new D,dr=new D,fr=new D,pr=new D,Va=new D,mr=new D,Wh=new D,gr=new D;class jt extends Re{constructor(t=new Ie,e=new Yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){mr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],d=o[l];h!==0&&(Va.fromBufferAttribute(d,t),r?mr.addScaledVector(Va,h):mr.addScaledVector(Va.sub(e),h))}e.add(mr)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(o),Ji.copy(t.ray).recast(t.near),!(ur.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(ur,Gh)===null||Ji.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Vh.copy(o).invert(),Ji.copy(t.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=r[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,b=y;M<b;M+=3){const T=a.getX(M),C=a.getX(M+1),z=a.getX(M+2);i=xr(this,p,t,n,c,h,d,T,C,z),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),M=a.getX(g+2);i=xr(this,r,t,n,c,h,d,v,y,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=r[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=v,b=y;M<b;M+=3){const T=M,C=M+1,z=M+2;i=xr(this,p,t,n,c,h,d,T,C,z),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const v=g,y=g+1,M=g+2;i=xr(this,r,t,n,c,h,d,v,y,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Fm(s,t,e,n,i,o,r,a){let l;if(t.side===fn?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,t.side===Ci,a),l===null)return null;gr.copy(a),gr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(gr);return c<e.near||c>e.far?null:{distance:c,point:gr.clone(),object:s}}function xr(s,t,e,n,i,o,r,a,l,c){s.getVertexPosition(a,dr),s.getVertexPosition(l,fr),s.getVertexPosition(c,pr);const h=Fm(s,t,e,n,dr,fr,pr,Wh);if(h){const d=new D;Xn.getBarycoord(Wh,dr,fr,pr,d),i&&(h.uv=Xn.getInterpolatedAttribute(i,a,l,c,d,new pt)),o&&(h.uv1=Xn.getInterpolatedAttribute(o,a,l,c,d,new pt)),r&&(h.normal=Xn.getInterpolatedAttribute(r,a,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};Xn.getNormal(dr,fr,pr,u.normal),h.face=u,h.barycoord=d}return h}class rn extends Ie{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,o,4),m("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2));function m(x,g,p,v,y,M,b,T,C,z,_){const w=M/C,R=b/z,I=M/2,L=b/2,O=T/2,U=C+1,N=z+1;let V=0,W=0;const Z=new D;for(let tt=0;tt<N;tt++){const st=tt*R-L;for(let ot=0;ot<U;ot++){const Nt=ot*w-I;Z[x]=Nt*v,Z[g]=st*y,Z[p]=O,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[g]=0,Z[p]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(ot/C),d.push(1-tt/z),V+=1}}for(let tt=0;tt<z;tt++)for(let st=0;st<C;st++){const ot=u+st+U*tt,Nt=u+st+U*(tt+1),he=u+(st+1)+U*(tt+1),se=u+(st+1)+U*tt;l.push(ot,Nt,se),l.push(Nt,he,se),W+=6}a.addGroup(f,W,_),f+=W,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function oo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function un(s){const t={};for(let e=0;e<s.length;e++){const n=oo(s[e]);for(const i in n)t[i]=n[i]}return t}function Um(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Uf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Of={clone:oo,merge:un};var Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends qo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oo(t.uniforms),this.uniformsGroups=Um(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bf extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new D,Xh=new pt,qh=new pt;class Fn extends Bf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Xh,qh),e.subVectors(qh,Xh)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Io*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zs=-90,Ls=1;class kf extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fn(zs,Ls,t,e);i.layers=this.layers,this.add(i);const o=new Fn(zs,Ls,t,e);o.layers=this.layers,this.add(o);const r=new Fn(zs,Ls,t,e);r.layers=this.layers,this.add(r);const a=new Fn(zs,Ls,t,e);a.layers=this.layers,this.add(a);const l=new Fn(zs,Ls,t,e);l.layers=this.layers,this.add(l);const c=new Fn(zs,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Hf extends on{constructor(t=[],e=fs,n,i,o,r,a,l,c,h){super(t,e,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zc extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Hf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new rn(5,5,5),o=new On({name:"CubemapFromEquirect",uniforms:oo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Ti});o.uniforms.tEquirect.value=e;const r=new jt(i,o),a=e.minFilter;return e.minFilter===jn&&(e.minFilter=De),new kf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}class be extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const km={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(km)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Kc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new Kc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vf extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Be,this.environmentIntensity=1,this.environmentRotation=new Be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Yh=new D,jh=new ce,$h=new ce,Hm=new D,Zh=new Gt,vr=new D,Wa=new vs,Kh=new Gt,Xa=new jc;class Vm extends jt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bh,this.bindMatrix=new Gt,this.bindMatrixInverse=new Gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new qi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,vr),this.boundingBox.expandByPoint(vr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,vr),this.boundingSphere.expandByPoint(vr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(i),t.ray.intersectsSphere(Wa)!==!1&&(Kh.copy(i).invert(),Xa.copy(t.ray).applyMatrix4(Kh),!(this.boundingBox!==null&&Xa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Xa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ce,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Lt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;jh.fromBufferAttribute(i.attributes.skinIndex,t),$h.fromBufferAttribute(i.attributes.skinWeight,t),Yh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const r=$h.getComponent(o);if(r!==0){const a=jh.getComponent(o);Zh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Hm.copy(Yh).applyMatrix4(Zh),r)}}return e.applyMatrix4(this.bindMatrixInverse)}}class vn extends Re{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hi extends on{constructor(t=null,e=1,n=1,i,o,r,a,l,c=$e,h=$e,d,u){super(null,r,a,l,c,h,i,o,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jh=new Gt,Gm=new Gt;class Jc{constructor(t=[],e=[]){this.uuid=xs(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Lt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Gt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Gt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let o=0,r=t.length;o<r;o++){const a=t[o]?t[o].matrixWorld:Gm;Jh.multiplyMatrices(a,e[o]),Jh.toArray(n,o*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Jc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new hi(e,t,t,Ze,Un);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const o=t.bones[n];let r=e[o];r===void 0&&(Lt("Skeleton: No bone found with UUID:",o),r=new vn),this.bones.push(r),this.boneInverses.push(new Gt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,o=e.length;i<o;i++){const r=e[i];t.bones.push(r.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Qh extends Ge{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ds=new Gt,tu=new Gt,_r=[],eu=new qi,Wm=new Gt,fo=new jt,po=new vs;class nu extends jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),eu.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(eu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),po.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(po)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(n),t.ray.intersectsSphere(po)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,Ds),tu.multiplyMatrices(n,Ds),fo.matrixWorld=tu,fo.raycast(t,_r);for(let r=0,a=_r.length;r<a;r++){const l=_r[r];l.instanceId=o,l.object=this,e.push(l)}_r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new hi(new Float32Array(i*this.count),i,this.count,kc,Un));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qa=new D,Xm=new D,qm=new Ot;class ki{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=qa.subVectors(n,e).cross(Xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qm.getNormalMatrix(t),i=this.coplanarPoint(qa).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new vs,Ym=new pt(.5,.5),yr=new D;class Qc{constructor(t=new ki,e=new ki,n=new ki,i=new ki,o=new ki,r=new ki){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi,n=!1){const i=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],h=o[4],d=o[5],u=o[6],f=o[7],m=o[8],x=o[9],g=o[10],p=o[11],v=o[12],y=o[13],M=o[14],b=o[15];if(i[0].setComponents(c-r,f-h,p-m,b-v).normalize(),i[1].setComponents(c+r,f+h,p+m,b+v).normalize(),i[2].setComponents(c+a,f+d,p+x,b+y).normalize(),i[3].setComponents(c-a,f-d,p-x,b-y).normalize(),n)i[4].setComponents(l,u,g,M).normalize(),i[5].setComponents(c-l,f-u,p-g,b-M).normalize();else if(i[4].setComponents(c-l,f-u,p-g,b-M).normalize(),e===oi)i[5].setComponents(c+l,f+u,p+g,b+M).normalize();else if(e===ia)i[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){Qi.center.set(0,0,0);const e=Ym.distanceTo(t.center);return Qi.radius=.7071067811865476+e,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(yr.x=i.normal.x>0?t.max.x:t.min.x,yr.y=i.normal.y>0?t.max.y:t.min.y,yr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jm extends on{constructor(t,e,n,i,o,r,a,l,c){super(t,e,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Go extends on{constructor(t,e,n=li,i,o,r,a=$e,l=$e,c,h=Pi,d=1){if(h!==Pi&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $m extends Go{constructor(t,e=li,n=fs,i,o,r=$e,a=$e,l,c=Pi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,o,r,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Gf extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ps extends Ie{constructor(t=1,e=1,n=4,i=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:o},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),o=Math.max(1,Math.floor(o));const r=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,m=n*2+o,x=i+1,g=new D,p=new D;for(let v=0;v<=m;v++){let y=0,M=0,b=0,T=0;if(v<=n){const _=v/n,w=_*Math.PI/2;M=-h-t*Math.cos(w),b=t*Math.sin(w),T=-t*Math.cos(w),y=_*d}else if(v<=n+o){const _=(v-n)/o;M=-h+_*e,b=t,T=0,y=d+_*u}else{const _=(v-n-o)/n,w=_*Math.PI/2;M=h+t*Math.sin(w),b=t*Math.cos(w),T=t*Math.sin(w),y=d+u+_*d}const C=Math.max(0,Math.min(1,y/f));let z=0;v===0?z=.5/i:v===m&&(z=-.5/i);for(let _=0;_<=i;_++){const w=_/i,R=w*Math.PI*2,I=Math.sin(R),L=Math.cos(R);p.x=-b*L,p.y=M,p.z=b*I,a.push(p.x,p.y,p.z),g.set(-b*L,T,b*I),g.normalize(),l.push(g.x,g.y,g.z),c.push(w+z,C)}if(v>0){const _=(v-1)*x;for(let w=0;w<i;w++){const R=_+w,I=_+w+1,L=v*x+w,O=v*x+w+1;r.push(R,I,L),r.push(I,O,L)}}}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Rn extends Ie{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],d=[],u=[],f=[];let m=0;const x=[],g=n/2;let p=0;v(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function v(){const M=new D,b=new D;let T=0;const C=(e-t)/n;for(let z=0;z<=o;z++){const _=[],w=z/o,R=w*(e-t)+t;for(let I=0;I<=i;I++){const L=I/i,O=L*l+a,U=Math.sin(O),N=Math.cos(O);b.x=R*U,b.y=-w*n+g,b.z=R*N,d.push(b.x,b.y,b.z),M.set(U,C,N).normalize(),u.push(M.x,M.y,M.z),f.push(L,1-w),_.push(m++)}x.push(_)}for(let z=0;z<i;z++)for(let _=0;_<o;_++){const w=x[_][z],R=x[_+1][z],I=x[_+1][z+1],L=x[_][z+1];(t>0||_!==0)&&(h.push(w,R,L),T+=3),(e>0||_!==o-1)&&(h.push(R,I,L),T+=3)}c.addGroup(p,T,0),p+=T}function y(M){const b=m,T=new pt,C=new D;let z=0;const _=M===!0?t:e,w=M===!0?1:-1;for(let I=1;I<=i;I++)d.push(0,g*w,0),u.push(0,w,0),f.push(.5,.5),m++;const R=m;for(let I=0;I<=i;I++){const O=I/i*l+a,U=Math.cos(O),N=Math.sin(O);C.x=_*N,C.y=g*w,C.z=_*U,d.push(C.x,C.y,C.z),u.push(0,w,0),T.x=U*.5+.5,T.y=N*.5*w+.5,f.push(T.x,T.y),m++}for(let I=0;I<i;I++){const L=b+I,O=R+I;M===!0?h.push(O,O+1,L):h.push(O+1,O,L),z+=3}c.addGroup(p,z,M===!0?1:2),p+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class th extends Rn{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new th(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qs extends Ie{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=kt(i,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,d=new D,u=new pt,f=new D,m=new D,x=new D;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=e;v++){const y=n+v*h*i,M=Math.sin(y),b=Math.cos(y);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*M,d.y=t[T].y,d.z=t[T].x*b,r.push(d.x,d.y,d.z),u.x=v/e,u.y=T/(t.length-1),a.push(u.x,u.y);const C=l[3*T+0]*M,z=l[3*T+1],_=l[3*T+0]*b;c.push(C,z,_)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const M=y+v*t.length,b=M,T=M+t.length,C=M+t.length+1,z=M+1;o.push(b,T,z),o.push(C,z,T)}this.setIndex(o),this.setAttribute("position",new ne(r,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.points,t.segments,t.phiStart,t.phiLength)}}class jo extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const v=p*u-r;for(let y=0;y<c;y++){const M=y*d-o;m.push(M,-v,0),x.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,M=v+c*(p+1),b=v+1+c*(p+1),T=v+1+c*p;f.push(y,M,T),f.push(M,b,T)}this.setIndex(f),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.widthSegments,t.heightSegments)}}class eh extends Ie{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new D,m=new pt;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const p=o+g/n*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let x=0;x<i;x++){const g=x*(n+1);for(let p=0;p<n;p++){const v=p+g,y=v,M=v+n+1,b=v+n+2,T=v+1;a.push(y,M,T),a.push(M,b,T)}}this.setIndex(a),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class dn extends Ie{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new D,u=new D,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let M=0;p===0&&r===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let b=0;b<=e;b++){const T=b/e;d.x=-t*Math.cos(i+T*o)*Math.sin(r+y*a),d.y=t*Math.cos(r+y*a),d.z=t*Math.sin(i+T*o)*Math.sin(r+y*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(T+M,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=h[p][v+1],M=h[p][v],b=h[p+1][v],T=h[p+1][v+1];(p!==0||r>0)&&f.push(y,M,T),(p!==n-1||l<Math.PI)&&f.push(M,b,T)}this.setIndex(f),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $o extends Ie{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const x=m/i*o,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(x),d.y=(t+e*Math.cos(g))*Math.sin(x),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;r.push(x,g,v),r.push(g,p,v)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zm extends On{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class an extends qo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class to extends an{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Km extends qo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jm extends qo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Wf extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Qm extends Wf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ya=new Gt,iu=new D,su=new D;class t0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(iu),su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(su),e.updateMatrixWorld(),Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class nh extends Bf{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class e0 extends t0{constructor(){super(new nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class n0 extends Wf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new e0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class i0 extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ou{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class s0 extends gs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Lt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ru(s,t,e,n){const i=o0(n);switch(e){case Rf:return s*t;case kc:return s*t/i.components*i.byteLength;case Hc:return s*t/i.components*i.byteLength;case so:return s*t*2/i.components*i.byteLength;case Vc:return s*t*2/i.components*i.byteLength;case Pf:return s*t*3/i.components*i.byteLength;case Ze:return s*t*4/i.components*i.byteLength;case Gc:return s*t*4/i.components*i.byteLength;case $r:case Zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Kr:case Jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $l:case Kl:return Math.max(s,16)*Math.max(t,8)/4;case jl:case Zl:return Math.max(s,8)*Math.max(t,8)/2;case Jl:case Ql:case ec:case nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tc:case ic:case sc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ac:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case lc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case cc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case hc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case uc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case dc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case fc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case pc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case mc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case gc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case xc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _c:case yc:case Mc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sc:case wc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case bc:case Ec:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function o0(s){switch(s){case Mn:case Ef:return{byteLength:1,components:1};case Bo:case Tf:case ci:return{byteLength:2,components:1};case Oc:case Bc:return{byteLength:2,components:4};case li:case Uc:case Un:return{byteLength:4,components:1};case Af:case Cf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);function Xf(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function r0(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}var a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,y0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,P0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,L0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Q0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,og=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ex=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,px=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_x=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ex=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ax=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:a0,alphahash_pars_fragment:l0,alphamap_fragment:c0,alphamap_pars_fragment:h0,alphatest_fragment:u0,alphatest_pars_fragment:d0,aomap_fragment:f0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:x0,beginnormal_vertex:v0,bsdfs:_0,iridescence_fragment:y0,bumpmap_pars_fragment:M0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:b0,clipping_planes_vertex:E0,color_fragment:T0,color_pars_fragment:A0,color_pars_vertex:C0,color_vertex:R0,common:P0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:L0,displacementmap_pars_vertex:D0,displacementmap_vertex:I0,emissivemap_fragment:N0,emissivemap_pars_fragment:F0,colorspace_fragment:U0,colorspace_pars_fragment:O0,envmap_fragment:B0,envmap_common_pars_fragment:k0,envmap_pars_fragment:H0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:Q0,envmap_vertex:G0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:q0,fog_pars_fragment:Y0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:$0,lights_lambert_fragment:Z0,lights_lambert_pars_fragment:K0,lights_pars_begin:J0,lights_toon_fragment:tg,lights_toon_pars_fragment:eg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:sg,lights_physical_pars_fragment:og,lights_fragment_begin:rg,lights_fragment_maps:ag,lights_fragment_end:lg,logdepthbuf_fragment:cg,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:ug,logdepthbuf_vertex:dg,map_fragment:fg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:gg,metalnessmap_fragment:xg,metalnessmap_pars_fragment:vg,morphinstance_vertex:_g,morphcolor_vertex:yg,morphnormal_vertex:Mg,morphtarget_pars_vertex:Sg,morphtarget_vertex:wg,normal_fragment_begin:bg,normal_fragment_maps:Eg,normal_pars_fragment:Tg,normal_pars_vertex:Ag,normal_vertex:Cg,normalmap_pars_fragment:Rg,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:zg,clearcoat_pars_fragment:Lg,iridescence_pars_fragment:Dg,opaque_fragment:Ig,packing:Ng,premultiplied_alpha_fragment:Fg,project_vertex:Ug,dithering_fragment:Og,dithering_pars_fragment:Bg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Vg,shadowmap_pars_vertex:Gg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:qg,skinning_pars_vertex:Yg,skinning_vertex:jg,skinnormal_vertex:$g,specularmap_fragment:Zg,specularmap_pars_fragment:Kg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Qg,transmission_fragment:tx,transmission_pars_fragment:ex,uv_pars_fragment:nx,uv_pars_vertex:ix,uv_vertex:sx,worldpos_vertex:ox,background_vert:rx,background_frag:ax,backgroundCube_vert:lx,backgroundCube_frag:cx,cube_vert:hx,cube_frag:ux,depth_vert:dx,depth_frag:fx,distance_vert:px,distance_frag:mx,equirect_vert:gx,equirect_frag:xx,linedashed_vert:vx,linedashed_frag:_x,meshbasic_vert:yx,meshbasic_frag:Mx,meshlambert_vert:Sx,meshlambert_frag:wx,meshmatcap_vert:bx,meshmatcap_frag:Ex,meshnormal_vert:Tx,meshnormal_frag:Ax,meshphong_vert:Cx,meshphong_frag:Rx,meshphysical_vert:Px,meshphysical_frag:zx,meshtoon_vert:Lx,meshtoon_frag:Dx,points_vert:Ix,points_frag:Nx,shadow_vert:Fx,shadow_frag:Ux,sprite_vert:Ox,sprite_frag:Bx},ut={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ii={basic:{uniforms:un([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:un([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new zt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:un([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:un([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:un([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new zt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:un([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:un([ut.points,ut.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:un([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:un([ut.common,ut.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:un([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:un([ut.sprite,ut.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:un([ut.common,ut.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:un([ut.lights,ut.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};ii.physical={uniforms:un([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Mr={r:0,b:0,g:0},ts=new Be,kx=new Gt;function Hx(s,t,e,n,i,o,r){const a=new zt(0);let l=o===!0?0:1,c,h,d=null,u=0,f=null;function m(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function x(y){let M=!1;const b=m(y);b===null?p(a,l):b&&b.isColor&&(p(b,1),M=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,M){const b=m(M);b&&(b.isCubeTexture||b.mapping===fa)?(h===void 0&&(h=new jt(new rn(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:oo(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ts.copy(M.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kx.makeRotationFromEuler(ts)),h.material.toneMapped=Zt.getTransfer(b.colorSpace)!==le,(d!==b||u!==b.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new jt(new jo(2,2),new On({name:"BackgroundMaterial",uniforms:oo(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(b.colorSpace)!==le,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(Mr,Uf(s)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,M,r)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:g,dispose:v}}function Vx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let o=i,r=!1;function a(w,R,I,L,O){let U=!1;const N=d(L,I,R);o!==N&&(o=N,c(o.object)),U=f(w,L,I,O),U&&m(w,L,I,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,M(w,R,I,L),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function d(w,R,I){const L=I.wireframe===!0;let O=n[w.id];O===void 0&&(O={},n[w.id]=O);let U=O[R.id];U===void 0&&(U={},O[R.id]=U);let N=U[L];return N===void 0&&(N=u(l()),U[L]=N),N}function u(w){const R=[],I=[],L=[];for(let O=0;O<e;O++)R[O]=0,I[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:L,object:w,attributes:{},index:null}}function f(w,R,I,L){const O=o.attributes,U=R.attributes;let N=0;const V=I.getAttributes();for(const W in V)if(V[W].location>=0){const tt=O[W];let st=U[W];if(st===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(st=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(st=w.instanceColor)),tt===void 0||tt.attribute!==st||st&&tt.data!==st.data)return!0;N++}return o.attributesNum!==N||o.index!==L}function m(w,R,I,L){const O={},U=R.attributes;let N=0;const V=I.getAttributes();for(const W in V)if(V[W].location>=0){let tt=U[W];tt===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(tt=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(tt=w.instanceColor));const st={};st.attribute=tt,tt&&tt.data&&(st.data=tt.data),O[W]=st,N++}o.attributes=O,o.attributesNum=N,o.index=L}function x(){const w=o.newAttributes;for(let R=0,I=w.length;R<I;R++)w[R]=0}function g(w){p(w,0)}function p(w,R){const I=o.newAttributes,L=o.enabledAttributes,O=o.attributeDivisors;I[w]=1,L[w]===0&&(s.enableVertexAttribArray(w),L[w]=1),O[w]!==R&&(s.vertexAttribDivisor(w,R),O[w]=R)}function v(){const w=o.newAttributes,R=o.enabledAttributes;for(let I=0,L=R.length;I<L;I++)R[I]!==w[I]&&(s.disableVertexAttribArray(I),R[I]=0)}function y(w,R,I,L,O,U,N){N===!0?s.vertexAttribIPointer(w,R,I,O,U):s.vertexAttribPointer(w,R,I,L,O,U)}function M(w,R,I,L){x();const O=L.attributes,U=I.getAttributes(),N=R.defaultAttributeValues;for(const V in U){const W=U[V];if(W.location>=0){let Z=O[V];if(Z===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(Z=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(Z=w.instanceColor)),Z!==void 0){const tt=Z.normalized,st=Z.itemSize,ot=t.get(Z);if(ot===void 0)continue;const Nt=ot.buffer,he=ot.type,se=ot.bytesPerElement,$=he===s.INT||he===s.UNSIGNED_INT||Z.gpuType===Uc;if(Z.isInterleavedBufferAttribute){const Q=Z.data,xt=Q.stride,Ut=Z.offset;if(Q.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)p(W.location+wt,Q.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let wt=0;wt<W.locationSize;wt++)g(W.location+wt);s.bindBuffer(s.ARRAY_BUFFER,Nt);for(let wt=0;wt<W.locationSize;wt++)y(W.location+wt,st/W.locationSize,he,tt,xt*se,(Ut+st/W.locationSize*wt)*se,$)}else{if(Z.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)p(W.location+Q,Z.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Q=0;Q<W.locationSize;Q++)g(W.location+Q);s.bindBuffer(s.ARRAY_BUFFER,Nt);for(let Q=0;Q<W.locationSize;Q++)y(W.location+Q,st/W.locationSize,he,tt,st*se,st/W.locationSize*Q*se,$)}}else if(N!==void 0){const tt=N[V];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(W.location,tt);break;case 3:s.vertexAttrib3fv(W.location,tt);break;case 4:s.vertexAttrib4fv(W.location,tt);break;default:s.vertexAttrib1fv(W.location,tt)}}}}v()}function b(){z();for(const w in n){const R=n[w];for(const I in R){const L=R[I];for(const O in L)h(L[O].object),delete L[O];delete R[I]}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const R=n[w.id];for(const I in R){const L=R[I];for(const O in L)h(L[O].object),delete L[O];delete R[I]}delete n[w.id]}function C(w){for(const R in n){const I=n[R];if(I[w.id]===void 0)continue;const L=I[w.id];for(const O in L)h(L[O].object),delete L[O];delete I[w.id]}}function z(){_(),r=!0,o!==i&&(o=i,c(o.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:z,resetDefaultState:_,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Gx(s,t,e){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)r(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let m=0;for(let x=0;x<d;x++)m+=h[x]*u[x];e.update(m,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wx(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){return!(C!==Ze&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const z=C===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Mn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Un&&!z)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:b,samples:T}}function Xx(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new ki,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||o&&!g)o?h(null):c();else{const v=o?0:n,y=v*4;let M=p.clippingState||null;l.value=M,M=h(m,u,y,f);for(let b=0;b!==y;++b)M[b]=e[b];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,M=f;y!==x;++y,M+=4)r.copy(d[y]).applyMatrix4(v,a),r.normal.toArray(g,M),g[M+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function qx(s){let t=new WeakMap;function e(r,a){return a===Xl?r.mapping=fs:a===ql&&(r.mapping=io),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Xl||a===ql)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Zc(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Vi=4,au=[.125,.215,.35,.446,.526,.582],as=20,Yx=256,mo=new nh,lu=new zt;let ja=null,$a=0,Za=0,Ka=!1;const jx=new D;class Tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,o={}){const{size:r=256,position:a=jx}=o;ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ja,$a,Za),this._renderer.xr.enabled=Ka,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ja=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:ci,format:Ze,colorSpace:Xi,depthBuffer:!1},i=cu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$x(o)),this._blurMaterial=Kx(o,t,e),this._ggxMaterial=Zx(o,t,e)}return i}_compileMaterial(t){const e=new jt(new Ie,t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,n,i,o){const l=new Fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(lu),d.toneMapping=ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new rn,new Yo({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,p=!0):(g.color.copy(lu),p=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[y],o.y,o.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[y],o.z)):(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[y]));const b=this._cubeSize;Is(i,M*b,y>2?b:0,b,b),d.setRenderTarget(i),p&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===fs||t.mapping===io;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const o=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,mo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let o=1;o<i;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Vi?n-m+Vi:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Is(o,g,p,3*x,2*x),i.setRenderTarget(o),i.render(a,mo),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=m-n,Is(t,g,p,3*x,2*x),i.setRenderTarget(t),i.render(a,mo)}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*as-1),x=o/m,g=isFinite(o)?1+Math.floor(h*x):as;g>as&&Lt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${as}`);const p=[];let v=0;for(let C=0;C<as;++C){const z=C/x,_=Math.exp(-z*z/2);p.push(_),C===0?v+=_:C<g&&(v+=2*_)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;const M=this._sizeLods[i],b=3*M*(i>y-Vi?i-y+Vi:0),T=4*(this._cubeSize-M);Is(e,b,T,3*M,2*M),l.setRenderTarget(e),l.render(d,mo)}}function $x(s){const t=[],e=[],n=[];let i=s;const o=s-Vi+1+au.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>s-Vi?l=au[r-s+Vi-1]:r===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),y=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,z=T>2?0:-1,_=[C,z,0,C+2/3,z,0,C+2/3,z+1,0,C,z,0,C+2/3,z+1,0,C,z+1,0];v.set(_,x*m*T),y.set(u,g*m*T);const w=[T,T,T,T,T,T];M.set(w,p*m*T)}const b=new Ie;b.setAttribute("position",new Ge(v,x)),b.setAttribute("uv",new Ge(y,g)),b.setAttribute("faceIndex",new Ge(M,p)),n.push(new jt(b,null)),i>Vi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function cu(s,t,e){const n=new ai(s,t,e);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Zx(s,t,e){return new On({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Kx(s,t,e){const n=new Float32Array(as),i=new D(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hu(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function uu(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xl||l===ql,h=l===fs||l===io;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Tc(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Tc(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Qx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ho("WebGLRenderer: "+n+" extension not supported."),i}}}function tv(s,t,e,n){const i={},o=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",r),delete i[u.id];const f=o.get(u);f&&(t.remove(f),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,m=d.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let y=0,M=v.length;y<M;y+=3){const b=v[y+0],T=v[y+1],C=v[y+2];u.push(b,T,T,C,C,b)}}else if(m!==void 0){const v=m.array;x=m.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const b=y+0,T=y+1,C=y+2;u.push(b,T,T,C,C,b)}}else return;const g=new(Lf(u)?Ff:$c)(u,1);g.version=x;const p=o.get(d);p&&t.remove(p),o.set(d,g)}function h(d){const u=o.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function ev(s,t,e){let n;function i(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,f){s.drawElements(n,f,o,u*r),e.update(f,n,1)}function c(u,f,m){m!==0&&(s.drawElementsInstanced(n,f,o,u*r,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(u,f,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/r,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,u,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function nv(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:Qt("WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function iv(s,t,e){const n=new WeakMap,i=new ce;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let w=function(){z.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var f=w;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let b=a.attributes.position.count*M,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*T*4*d),z=new Df(C,b,T,d);z.type=Un,z.needsUpdate=!0;const _=M*4;for(let R=0;R<d;R++){const I=p[R],L=v[R],O=y[R],U=b*T*4*R;for(let N=0;N<I.count;N++){const V=N*_;m===!0&&(i.fromBufferAttribute(I,N),C[U+V+0]=i.x,C[U+V+1]=i.y,C[U+V+2]=i.z,C[U+V+3]=0),x===!0&&(i.fromBufferAttribute(L,N),C[U+V+4]=i.x,C[U+V+5]=i.y,C[U+V+6]=i.z,C[U+V+7]=0),g===!0&&(i.fromBufferAttribute(O,N),C[U+V+8]=i.x,C[U+V+9]=i.y,C[U+V+10]=i.z,C[U+V+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:z,size:new pt(b,T)},n.set(a,u),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:o}}function sv(s,t,e,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}const ov={[vf]:"LINEAR_TONE_MAPPING",[_f]:"REINHARD_TONE_MAPPING",[yf]:"CINEON_TONE_MAPPING",[Fc]:"ACES_FILMIC_TONE_MAPPING",[Sf]:"AGX_TONE_MAPPING",[wf]:"NEUTRAL_TONE_MAPPING",[Mf]:"CUSTOM_TONE_MAPPING"};function rv(s,t,e,n,i){const o=new ai(t,e,{type:s,depthBuffer:n,stencilBuffer:i}),r=new ai(t,e,{type:ci,depthBuffer:!1,stencilBuffer:!1}),a=new Ie;a.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ne([0,2,0,0,2,0],2));const l=new Zm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new jt(a,l),h=new nh(-1,1,1,-1,0,1);let d=null,u=null,f=!1,m,x=null,g=[],p=!1;this.setSize=function(v,y){o.setSize(v,y),r.setSize(v,y);for(let M=0;M<g.length;M++){const b=g[M];b.setSize&&b.setSize(v,y)}},this.setEffects=function(v){g=v,p=g.length>0&&g[0].isRenderPass===!0;const y=o.width,M=o.height;for(let b=0;b<g.length;b++){const T=g[b];T.setSize&&T.setSize(y,M)}},this.begin=function(v,y){if(f||v.toneMapping===ri&&g.length===0)return!1;if(x=y,y!==null){const M=y.width,b=y.height;(o.width!==M||o.height!==b)&&this.setSize(M,b)}return p===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=ri,!0},this.hasRenderPass=function(){return p},this.end=function(v,y){v.toneMapping=m,f=!0;let M=o,b=r;for(let T=0;T<g.length;T++){const C=g[T];if(C.enabled!==!1&&(C.render(v,b,M,y),C.needsSwap!==!1)){const z=M;M=b,b=z}}if(d!==v.outputColorSpace||u!==v.toneMapping){d=v.outputColorSpace,u=v.toneMapping,l.defines={},Zt.getTransfer(d)===le&&(l.defines.SRGB_TRANSFER="");const T=ov[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(x),v.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){o.dispose(),r.dispose(),a.dispose(),l.dispose()}}const qf=new on,Ac=new Go(1,1),Yf=new Df,jf=new Em,$f=new Hf,du=[],fu=[],pu=new Float32Array(16),mu=new Float32Array(9),gu=new Float32Array(4);function ro(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=du[i];if(o===void 0&&(o=new Float32Array(i),du[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function We(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ma(s,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function av(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function lv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2fv(this.addr,t),Xe(e,t)}}function cv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;s.uniform3fv(this.addr,t),Xe(e,t)}}function hv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4fv(this.addr,t),Xe(e,t)}}function uv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;gu.set(n),s.uniformMatrix2fv(this.addr,!1,gu),Xe(e,n)}}function dv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;mu.set(n),s.uniformMatrix3fv(this.addr,!1,mu),Xe(e,n)}}function fv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;pu.set(n),s.uniformMatrix4fv(this.addr,!1,pu),Xe(e,n)}}function pv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2iv(this.addr,t),Xe(e,t)}}function gv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;s.uniform3iv(this.addr,t),Xe(e,t)}}function xv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4iv(this.addr,t),Xe(e,t)}}function vv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function _v(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2uiv(this.addr,t),Xe(e,t)}}function yv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;s.uniform3uiv(this.addr,t),Xe(e,t)}}function Mv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4uiv(this.addr,t),Xe(e,t)}}function Sv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Ac.compareFunction=e.isReversedDepthBuffer()?Xc:Wc,o=Ac):o=qf,e.setTexture2D(t||o,i)}function wv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||jf,i)}function bv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$f,i)}function Ev(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Yf,i)}function Tv(s){switch(s){case 5126:return av;case 35664:return lv;case 35665:return cv;case 35666:return hv;case 35674:return uv;case 35675:return dv;case 35676:return fv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return gv;case 35669:case 35673:return xv;case 5125:return vv;case 36294:return _v;case 36295:return yv;case 36296:return Mv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Ev}}function Av(s,t){s.uniform1fv(this.addr,t)}function Cv(s,t){const e=ro(t,this.size,2);s.uniform2fv(this.addr,e)}function Rv(s,t){const e=ro(t,this.size,3);s.uniform3fv(this.addr,e)}function Pv(s,t){const e=ro(t,this.size,4);s.uniform4fv(this.addr,e)}function zv(s,t){const e=ro(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Lv(s,t){const e=ro(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Dv(s,t){const e=ro(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Iv(s,t){s.uniform1iv(this.addr,t)}function Nv(s,t){s.uniform2iv(this.addr,t)}function Fv(s,t){s.uniform3iv(this.addr,t)}function Uv(s,t){s.uniform4iv(this.addr,t)}function Ov(s,t){s.uniform1uiv(this.addr,t)}function Bv(s,t){s.uniform2uiv(this.addr,t)}function kv(s,t){s.uniform3uiv(this.addr,t)}function Hv(s,t){s.uniform4uiv(this.addr,t)}function Vv(s,t,e){const n=this.cache,i=t.length,o=ma(e,i);We(n,o)||(s.uniform1iv(this.addr,o),Xe(n,o));let r;this.type===s.SAMPLER_2D_SHADOW?r=Ac:r=qf;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||r,o[a])}function Gv(s,t,e){const n=this.cache,i=t.length,o=ma(e,i);We(n,o)||(s.uniform1iv(this.addr,o),Xe(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||jf,o[r])}function Wv(s,t,e){const n=this.cache,i=t.length,o=ma(e,i);We(n,o)||(s.uniform1iv(this.addr,o),Xe(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||$f,o[r])}function Xv(s,t,e){const n=this.cache,i=t.length,o=ma(e,i);We(n,o)||(s.uniform1iv(this.addr,o),Xe(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Yf,o[r])}function qv(s){switch(s){case 5126:return Av;case 35664:return Cv;case 35665:return Rv;case 35666:return Pv;case 35674:return zv;case 35675:return Lv;case 35676:return Dv;case 5124:case 35670:return Iv;case 35667:case 35671:return Nv;case 35668:case 35672:return Fv;case 35669:case 35673:return Uv;case 5125:return Ov;case 36294:return Bv;case 36295:return kv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}class Yv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tv(e.type)}}class jv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qv(e.type)}}class $v{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function xu(s,t){s.seq.push(t),s.map[t.id]=t}function Zv(s,t,e){const n=s.name,i=n.length;for(Ja.lastIndex=0;;){const o=Ja.exec(n),r=Ja.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){xu(e,c===void 0?new Yv(a,s,t):new jv(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new $v(a),xu(e,d)),e=d}}}class Qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);Zv(a,l,this)}const i=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):o.push(r);i.length>0&&(this.seq=i.concat(o))}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function vu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Kv=37297;let Jv=0;function Qv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const _u=new Ot;function t_(s){Zt._getMatrix(_u,Zt.workingColorSpace,s);const t=`mat3( ${_u.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case na:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function yu(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),o=(s.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+Qv(s.getShaderSource(t),a)}else return o}function e_(s,t){const e=t_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const n_={[vf]:"Linear",[_f]:"Reinhard",[yf]:"Cineon",[Fc]:"ACESFilmic",[Sf]:"AgX",[wf]:"Neutral",[Mf]:"Custom"};function i_(s,t){const e=n_[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sr=new D;function s_(){Zt.getLuminanceCoefficients(Sr);const s=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function r_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function a_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function Lo(s){return s!==""}function Mu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Su(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(s){return s.replace(l_,h_)}const c_=new Map;function h_(s,t){let e=Bt[t];if(e===void 0){const n=c_.get(t);if(n!==void 0)e=Bt[n],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cc(e)}const u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(s){return s.replace(u_,d_)}function d_(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function bu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const f_={[jr]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function p_(s){return f_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const m_={[fs]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[fa]:"ENVMAP_TYPE_CUBE_UV"};function g_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":m_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const x_={[io]:"ENVMAP_MODE_REFRACTION"};function v_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":x_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const __={[xf]:"ENVMAP_BLENDING_MULTIPLY",[Wp]:"ENVMAP_BLENDING_MIX",[Xp]:"ENVMAP_BLENDING_ADD"};function y_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":__[s.combine]||"ENVMAP_BLENDING_NONE"}function M_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function S_(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=p_(e),c=g_(e),h=v_(e),d=y_(e),u=M_(e),f=o_(e),m=r_(o),x=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Lo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Lo).join(`
`),p.length>0&&(p+=`
`)):(g=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),p=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Bt.tonemapping_pars_fragment:"",e.toneMapping!==ri?i_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,e_("linearToOutputTexel",e.outputColorSpace),s_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lo).join(`
`)),r=Cc(r),r=Mu(r,e),r=Su(r,e),a=Cc(a),a=Mu(a,e),a=Su(a,e),r=wu(r),a=wu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+r,M=v+p+a,b=vu(i,i.VERTEX_SHADER,y),T=vu(i,i.FRAGMENT_SHADER,M);i.attachShader(x,b),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(R){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(x)||"",L=i.getShaderInfoLog(b)||"",O=i.getShaderInfoLog(T)||"",U=I.trim(),N=L.trim(),V=O.trim();let W=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,b,T);else{const tt=yu(i,b,"vertex"),st=yu(i,T,"fragment");Qt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+tt+`
`+st)}else U!==""?Lt("WebGLProgram: Program Info Log:",U):(N===""||V==="")&&(Z=!1);Z&&(R.diagnostics={runnable:W,programLog:U,vertexShader:{log:N,prefix:g},fragmentShader:{log:V,prefix:p}})}i.deleteShader(b),i.deleteShader(T),z=new Qr(i,x),_=a_(i,x)}let z;this.getUniforms=function(){return z===void 0&&C(this),z};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(x,Kv)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}let w_=0;class b_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new E_(t),e.set(t,n)),n}}class E_{constructor(t){this.id=w_++,this.code=t,this.usedTimes=0}}function T_(s,t,e,n,i,o,r){const a=new If,l=new b_,c=new Set,h=[],d=new Map,u=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,w,R,I,L){const O=I.fog,U=L.geometry,N=_.isMeshStandardMaterial?I.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||N),W=V&&V.mapping===fa?V.image.height:null,Z=m[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Lt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const tt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,st=tt!==void 0?tt.length:0;let ot=0;U.morphAttributes.position!==void 0&&(ot=1),U.morphAttributes.normal!==void 0&&(ot=2),U.morphAttributes.color!==void 0&&(ot=3);let Nt,he,se,$;if(Z){const re=ii[Z];Nt=re.vertexShader,he=re.fragmentShader}else Nt=_.vertexShader,he=_.fragmentShader,l.update(_),se=l.getVertexShaderID(_),$=l.getFragmentShaderID(_);const Q=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),Ut=L.isInstancedMesh===!0,wt=L.isBatchedMesh===!0,Kt=!!_.map,qe=!!_.matcap,$t=!!V,oe=!!_.aoMap,fe=!!_.lightMap,Ht=!!_.bumpMap,Ne=!!_.normalMap,F=!!_.displacementMap,Fe=!!_.emissiveMap,ie=!!_.metalnessMap,me=!!_.roughnessMap,Et=_.anisotropy>0,P=_.clearcoat>0,S=_.dispersion>0,k=_.iridescence>0,j=_.sheen>0,J=_.transmission>0,Y=Et&&!!_.anisotropyMap,At=P&&!!_.clearcoatMap,at=P&&!!_.clearcoatNormalMap,bt=P&&!!_.clearcoatRoughnessMap,It=k&&!!_.iridescenceMap,nt=k&&!!_.iridescenceThicknessMap,ct=j&&!!_.sheenColorMap,yt=j&&!!_.sheenRoughnessMap,Tt=!!_.specularMap,lt=!!_.specularColorMap,Vt=!!_.specularIntensityMap,B=J&&!!_.transmissionMap,ft=J&&!!_.thicknessMap,it=!!_.gradientMap,mt=!!_.alphaMap,et=_.alphaTest>0,K=!!_.alphaHash,rt=!!_.extensions;let Ft=ri;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const ge={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Nt,fragmentShader:he,defines:_.defines,customVertexShaderID:se,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:wt,batchingColor:wt&&L._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&L.instanceColor!==null,instancingMorph:Ut&&L.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Xi,alphaToCoverage:!!_.alphaToCoverage,map:Kt,matcap:qe,envMap:$t,envMapMode:$t&&V.mapping,envMapCubeUVHeight:W,aoMap:oe,lightMap:fe,bumpMap:Ht,normalMap:Ne,displacementMap:F,emissiveMap:Fe,normalMapObjectSpace:Ne&&_.normalMapType===$p,normalMapTangentSpace:Ne&&_.normalMapType===zf,metalnessMap:ie,roughnessMap:me,anisotropy:Et,anisotropyMap:Y,clearcoat:P,clearcoatMap:At,clearcoatNormalMap:at,clearcoatRoughnessMap:bt,dispersion:S,iridescence:k,iridescenceMap:It,iridescenceThicknessMap:nt,sheen:j,sheenColorMap:ct,sheenRoughnessMap:yt,specularMap:Tt,specularColorMap:lt,specularIntensityMap:Vt,transmission:J,transmissionMap:B,thicknessMap:ft,gradientMap:it,opaque:_.transparent===!1&&_.blending===Ks&&_.alphaToCoverage===!1,alphaMap:mt,alphaTest:et,alphaHash:K,combine:_.combine,mapUv:Kt&&x(_.map.channel),aoMapUv:oe&&x(_.aoMap.channel),lightMapUv:fe&&x(_.lightMap.channel),bumpMapUv:Ht&&x(_.bumpMap.channel),normalMapUv:Ne&&x(_.normalMap.channel),displacementMapUv:F&&x(_.displacementMap.channel),emissiveMapUv:Fe&&x(_.emissiveMap.channel),metalnessMapUv:ie&&x(_.metalnessMap.channel),roughnessMapUv:me&&x(_.roughnessMap.channel),anisotropyMapUv:Y&&x(_.anisotropyMap.channel),clearcoatMapUv:At&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:at&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:yt&&x(_.sheenRoughnessMap.channel),specularMapUv:Tt&&x(_.specularMap.channel),specularColorMapUv:lt&&x(_.specularColorMap.channel),specularIntensityMapUv:Vt&&x(_.specularIntensityMap.channel),transmissionMapUv:B&&x(_.transmissionMap.channel),thicknessMapUv:ft&&x(_.thicknessMap.channel),alphaMapUv:mt&&x(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ne||Et),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Kt||mt),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:L.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Kt&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===le,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(_.emissiveMap.colorSpace)===le,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===yn,flipSided:_.side===fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function p(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)w.push(R),w.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(v(w,_),y(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function v(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){const w=m[_.type];let R;if(w){const I=ii[w];R=Of.clone(I.uniforms)}else R=_.uniforms;return R}function b(_,w){let R=d.get(w);return R!==void 0?++R.usedTimes:(R=new S_(s,w,_,o),h.push(R),d.set(w,R)),R}function T(_){if(--_.usedTimes===0){const w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),d.delete(_.cacheKey),_.destroy()}}function C(_){l.remove(_)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:z}}function A_(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function C_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Eu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Tu(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,f,m,x,g){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=x,p.group=g),t++,p}function a(d,u,f,m,x,g){const p=r(d,u,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,m,x,g){const p=r(d,u,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||C_),n.length>1&&n.sort(u||Eu),i.length>1&&i.sort(u||Eu)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:l,finish:h,sort:c}}function R_(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Tu,s.set(n,[r])):i>=o.length?(r=new Tu,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function P_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new zt};break;case"SpotLight":e={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function z_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let L_=0;function D_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function I_(s){const t=new P_,e=z_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,o=new Gt,r=new Gt;function a(c){let h=0,d=0,u=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,y=0,M=0,b=0,T=0,C=0;c.sort(D_);for(let _=0,w=c.length;_<w;_++){const R=c[_],I=R.color,L=R.intensity,O=R.distance;let U=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===so?U=R.shadow.map.texture:U=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=I.r*L,d+=I.g*L,u+=I.b*L;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],L);C++}else if(R.isDirectionalLight){const N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const V=R.shadow,W=e.get(R);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=N,f++}else if(R.isSpotLight){const N=t.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(I).multiplyScalar(L),N.distance=O,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[x]=N;const V=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,V.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[x]=V.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=U,M++}x++}else if(R.isRectAreaLight){const N=t.get(R);N.color.copy(I).multiplyScalar(L),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=N,g++}else if(R.isPointLight){const N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){const V=R.shadow,W=e.get(R);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,W.shadowCameraNear=V.camera.near,W.shadowCameraFar=V.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=R.shadow.matrix,y++}n.point[m]=N,m++}else if(R.isHemisphereLight){const N=t.get(R);N.skyColor.copy(R.color).multiplyScalar(L),N.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[p]=N,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const z=n.hash;(z.directionalLength!==f||z.pointLength!==m||z.spotLength!==x||z.rectAreaLength!==g||z.hemiLength!==p||z.numDirectionalShadows!==v||z.numPointShadows!==y||z.numSpotShadows!==M||z.numSpotMaps!==b||z.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,z.directionalLength=f,z.pointLength=m,z.spotLength=x,z.rectAreaLength=g,z.hemiLength=p,z.numDirectionalShadows=v,z.numPointShadows=y,z.numSpotShadows=M,z.numSpotMaps=b,z.numLightProbes=C,n.version=L_++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),d++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),r.identity(),o.copy(y.matrixWorld),o.premultiply(g),r.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Au(s){const t=new I_(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function N_(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new Au(s),t.set(i,[a])):o>=r.length?(a=new Au(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,O_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],B_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Cu=new Gt,go=new D,Qa=new D;function k_(s,t,e){let n=new Qc;const i=new pt,o=new pt,r=new ce,a=new Km,l=new Jm,c={},h=e.maxTextureSize,d={[Ci]:fn,[fn]:Ci,[yn]:yn},u=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:F_,fragmentShader:U_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ie;m.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new jt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jr;let p=this.type;this.render=function(T,C,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;T.type===gf&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=jr);const _=s.getRenderTarget(),w=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Ti),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const L=p!==this.type;L&&C.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(U=>U.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,U=T.length;O<U;O++){const N=T[O],V=N.shadow;if(V===void 0){Lt("WebGLShadowMap:",N,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const W=V.getFrameExtents();if(i.multiply(W),o.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/W.x),i.x=o.x*W.x,V.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/W.y),i.y=o.y*W.y,V.mapSize.y=o.y)),V.map===null||L===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===zo){if(N.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ai(i.x,i.y,{format:so,type:ci,minFilter:De,magFilter:De,generateMipmaps:!1}),V.map.texture.name=N.name+".shadowMap",V.map.depthTexture=new Go(i.x,i.y,Un),V.map.depthTexture.name=N.name+".shadowMapDepth",V.map.depthTexture.format=Pi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=$e,V.map.depthTexture.magFilter=$e}else{N.isPointLight?(V.map=new Zc(i.x),V.map.depthTexture=new $m(i.x,li)):(V.map=new ai(i.x,i.y),V.map.depthTexture=new Go(i.x,i.y,li)),V.map.depthTexture.name=N.name+".shadowMap",V.map.depthTexture.format=Pi;const tt=s.state.buffers.depth.getReversed();this.type===jr?(V.map.depthTexture.compareFunction=tt?Xc:Wc,V.map.depthTexture.minFilter=De,V.map.depthTexture.magFilter=De):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=$e,V.map.depthTexture.magFilter=$e)}V.camera.updateProjectionMatrix()}const Z=V.map.isWebGLCubeRenderTarget?6:1;for(let tt=0;tt<Z;tt++){if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,tt),s.clear();else{tt===0&&(s.setRenderTarget(V.map),s.clear());const st=V.getViewport(tt);r.set(o.x*st.x,o.y*st.y,o.x*st.z,o.y*st.w),I.viewport(r)}if(N.isPointLight){const st=V.camera,ot=V.matrix,Nt=N.distance||st.far;Nt!==st.far&&(st.far=Nt,st.updateProjectionMatrix()),go.setFromMatrixPosition(N.matrixWorld),st.position.copy(go),Qa.copy(st.position),Qa.add(O_[tt]),st.up.copy(B_[tt]),st.lookAt(Qa),st.updateMatrixWorld(),ot.makeTranslation(-go.x,-go.y,-go.z),Cu.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Cu,st.coordinateSystem,st.reversedDepth)}else V.updateMatrices(N);n=V.getFrustum(),M(C,z,V.camera,N,this.type)}V.isPointLightShadow!==!0&&this.type===zo&&v(V,z),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(_,w,R)};function v(T,C){const z=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ai(i.x,i.y,{format:so,type:ci})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,z,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,z,f,x,null)}function y(T,C,z,_){let w=null;const R=z.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)w=R;else if(w=z.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=w.uuid,L=C.uuid;let O=c[I];O===void 0&&(O={},c[I]=O);let U=O[L];U===void 0&&(U=w.clone(),O[L]=U,C.addEventListener("dispose",b)),w=U}if(w.visible=C.visible,w.wireframe=C.wireframe,_===zo?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:d[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const I=s.properties.get(w);I.light=z}return w}function M(T,C,z,_,w){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===zo)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld);const L=t.update(T),O=T.material;if(Array.isArray(O)){const U=L.groups;for(let N=0,V=U.length;N<V;N++){const W=U[N],Z=O[W.materialIndex];if(Z&&Z.visible){const tt=y(T,Z,_,w);T.onBeforeShadow(s,T,C,z,L,tt,W),s.renderBufferDirect(z,null,L,tt,T,W),T.onAfterShadow(s,T,C,z,L,tt,W)}}}else if(O.visible){const U=y(T,O,_,w);T.onBeforeShadow(s,T,C,z,L,U,null),s.renderBufferDirect(z,null,L,U,T,null),T.onAfterShadow(s,T,C,z,L,U,null)}}const I=T.children;for(let L=0,O=I.length;L<O;L++)M(I[L],C,z,_,w)}function b(T){T.target.removeEventListener("dispose",b);for(const z in c){const _=c[z],w=T.target.uuid;w in _&&(_[w].dispose(),delete _[w])}}}const H_={[Ol]:Bl,[kl]:Gl,[Hl]:Wl,[no]:Vl,[Bl]:Ol,[Gl]:kl,[Wl]:Hl,[Vl]:no};function V_(s,t){function e(){let B=!1;const ft=new ce;let it=null;const mt=new ce(0,0,0,0);return{setMask:function(et){it!==et&&!B&&(s.colorMask(et,et,et,et),it=et)},setLocked:function(et){B=et},setClear:function(et,K,rt,Ft,ge){ge===!0&&(et*=Ft,K*=Ft,rt*=Ft),ft.set(et,K,rt,Ft),mt.equals(ft)===!1&&(s.clearColor(et,K,rt,Ft),mt.copy(ft))},reset:function(){B=!1,it=null,mt.set(-1,0,0,0)}}}function n(){let B=!1,ft=!1,it=null,mt=null,et=null;return{setReversed:function(K){if(ft!==K){const rt=t.get("EXT_clip_control");K?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),ft=K;const Ft=et;et=null,this.setClear(Ft)}},getReversed:function(){return ft},setTest:function(K){K?Q(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(K){it!==K&&!B&&(s.depthMask(K),it=K)},setFunc:function(K){if(ft&&(K=H_[K]),mt!==K){switch(K){case Ol:s.depthFunc(s.NEVER);break;case Bl:s.depthFunc(s.ALWAYS);break;case kl:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case Hl:s.depthFunc(s.EQUAL);break;case Vl:s.depthFunc(s.GEQUAL);break;case Gl:s.depthFunc(s.GREATER);break;case Wl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=K}},setLocked:function(K){B=K},setClear:function(K){et!==K&&(ft&&(K=1-K),s.clearDepth(K),et=K)},reset:function(){B=!1,it=null,mt=null,et=null,ft=!1}}}function i(){let B=!1,ft=null,it=null,mt=null,et=null,K=null,rt=null,Ft=null,ge=null;return{setTest:function(re){B||(re?Q(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(re){ft!==re&&!B&&(s.stencilMask(re),ft=re)},setFunc:function(re,Zn,ui){(it!==re||mt!==Zn||et!==ui)&&(s.stencilFunc(re,Zn,ui),it=re,mt=Zn,et=ui)},setOp:function(re,Zn,ui){(K!==re||rt!==Zn||Ft!==ui)&&(s.stencilOp(re,Zn,ui),K=re,rt=Zn,Ft=ui)},setLocked:function(re){B=re},setClear:function(re){ge!==re&&(s.clearStencil(re),ge=re)},reset:function(){B=!1,ft=null,it=null,mt=null,et=null,K=null,rt=null,Ft=null,ge=null}}}const o=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,y=null,M=null,b=null,T=null,C=new zt(0,0,0),z=0,_=!1,w=null,R=null,I=null,L=null,O=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,V=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(W)[1]),N=V>=1):W.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),N=V>=2);let Z=null,tt={};const st=s.getParameter(s.SCISSOR_BOX),ot=s.getParameter(s.VIEWPORT),Nt=new ce().fromArray(st),he=new ce().fromArray(ot);function se(B,ft,it,mt){const et=new Uint8Array(4),K=s.createTexture();s.bindTexture(B,K),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<it;rt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,et):s.texImage2D(ft+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,et);return K}const $={};$[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),r.setFunc(no),Ht(!1),Ne(yh),Q(s.CULL_FACE),oe(Ti);function Q(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function xt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function Ut(B,ft){return d[B]!==ft?(s.bindFramebuffer(B,ft),d[B]=ft,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ft),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function wt(B,ft){let it=f,mt=!1;if(B){it=u.get(ft),it===void 0&&(it=[],u.set(ft,it));const et=B.textures;if(it.length!==et.length||it[0]!==s.COLOR_ATTACHMENT0){for(let K=0,rt=et.length;K<rt;K++)it[K]=s.COLOR_ATTACHMENT0+K;it.length=et.length,mt=!0}}else it[0]!==s.BACK&&(it[0]=s.BACK,mt=!0);mt&&s.drawBuffers(it)}function Kt(B){return m!==B?(s.useProgram(B),m=B,!0):!1}const qe={[rs]:s.FUNC_ADD,[Ap]:s.FUNC_SUBTRACT,[Cp]:s.FUNC_REVERSE_SUBTRACT};qe[Rp]=s.MIN,qe[Pp]=s.MAX;const $t={[zp]:s.ZERO,[Lp]:s.ONE,[Dp]:s.SRC_COLOR,[Fl]:s.SRC_ALPHA,[Bp]:s.SRC_ALPHA_SATURATE,[Up]:s.DST_COLOR,[Np]:s.DST_ALPHA,[Ip]:s.ONE_MINUS_SRC_COLOR,[Ul]:s.ONE_MINUS_SRC_ALPHA,[Op]:s.ONE_MINUS_DST_COLOR,[Fp]:s.ONE_MINUS_DST_ALPHA,[kp]:s.CONSTANT_COLOR,[Hp]:s.ONE_MINUS_CONSTANT_COLOR,[Vp]:s.CONSTANT_ALPHA,[Gp]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(B,ft,it,mt,et,K,rt,Ft,ge,re){if(B===Ti){x===!0&&(xt(s.BLEND),x=!1);return}if(x===!1&&(Q(s.BLEND),x=!0),B!==Tp){if(B!==g||re!==_){if((p!==rs||M!==rs)&&(s.blendEquation(s.FUNC_ADD),p=rs,M=rs),re)switch(B){case Ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mh:s.blendFunc(s.ONE,s.ONE);break;case Sh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Qt("WebGLState: Invalid blending: ",B);break}else switch(B){case Ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sh:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",B);break}v=null,y=null,b=null,T=null,C.set(0,0,0),z=0,g=B,_=re}return}et=et||ft,K=K||it,rt=rt||mt,(ft!==p||et!==M)&&(s.blendEquationSeparate(qe[ft],qe[et]),p=ft,M=et),(it!==v||mt!==y||K!==b||rt!==T)&&(s.blendFuncSeparate($t[it],$t[mt],$t[K],$t[rt]),v=it,y=mt,b=K,T=rt),(Ft.equals(C)===!1||ge!==z)&&(s.blendColor(Ft.r,Ft.g,Ft.b,ge),C.copy(Ft),z=ge),g=B,_=!1}function fe(B,ft){B.side===yn?xt(s.CULL_FACE):Q(s.CULL_FACE);let it=B.side===fn;ft&&(it=!it),Ht(it),B.blending===Ks&&B.transparent===!1?oe(Ti):oe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);const mt=B.stencilWrite;a.setTest(mt),mt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(B){w!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),w=B)}function Ne(B){B!==bp?(Q(s.CULL_FACE),B!==R&&(B===yh?s.cullFace(s.BACK):B===Ep?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),R=B}function F(B){B!==I&&(N&&s.lineWidth(B),I=B)}function Fe(B,ft,it){B?(Q(s.POLYGON_OFFSET_FILL),(L!==ft||O!==it)&&(s.polygonOffset(ft,it),L=ft,O=it)):xt(s.POLYGON_OFFSET_FILL)}function ie(B){B?Q(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function me(B){B===void 0&&(B=s.TEXTURE0+U-1),Z!==B&&(s.activeTexture(B),Z=B)}function Et(B,ft,it){it===void 0&&(Z===null?it=s.TEXTURE0+U-1:it=Z);let mt=tt[it];mt===void 0&&(mt={type:void 0,texture:void 0},tt[it]=mt),(mt.type!==B||mt.texture!==ft)&&(Z!==it&&(s.activeTexture(it),Z=it),s.bindTexture(B,ft||$[B]),mt.type=B,mt.texture=ft)}function P(){const B=tt[Z];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function j(){try{s.texSubImage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function J(){try{s.texSubImage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function At(){try{s.compressedTexSubImage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function at(){try{s.texStorage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function bt(){try{s.texStorage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function It(){try{s.texImage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function nt(){try{s.texImage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function ct(B){Nt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Nt.copy(B))}function yt(B){he.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),he.copy(B))}function Tt(B,ft){let it=c.get(ft);it===void 0&&(it=new WeakMap,c.set(ft,it));let mt=it.get(B);mt===void 0&&(mt=s.getUniformBlockIndex(ft,B.name),it.set(B,mt))}function lt(B,ft){const mt=c.get(ft).get(B);l.get(ft)!==mt&&(s.uniformBlockBinding(ft,mt,B.__bindingPointIndex),l.set(ft,mt))}function Vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Z=null,tt={},d={},u=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,y=null,M=null,b=null,T=null,C=new zt(0,0,0),z=0,_=!1,w=null,R=null,I=null,L=null,O=null,Nt.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:Q,disable:xt,bindFramebuffer:Ut,drawBuffers:wt,useProgram:Kt,setBlending:oe,setMaterial:fe,setFlipSided:Ht,setCullFace:Ne,setLineWidth:F,setPolygonOffset:Fe,setScissorTest:ie,activeTexture:me,bindTexture:Et,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:It,texImage3D:nt,updateUBOMapping:Tt,uniformBlockBinding:lt,texStorage2D:at,texStorage3D:bt,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:At,scissor:ct,viewport:yt,reset:Vt}}function G_(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,S){return f?new OffscreenCanvas(P,S):sa("canvas")}function x(P,S,k){let j=1;const J=Et(P);if((J.width>k||J.height>k)&&(j=k/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(j*J.width),At=Math.floor(j*J.height);d===void 0&&(d=m(Y,At));const at=S?m(Y,At):d;return at.width=Y,at.height=At,at.getContext("2d").drawImage(P,0,0,Y,At),Lt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+At+")."),at}else return"data"in P&&Lt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(P,S,k,j,J=!1){if(P!==null){if(s[P]!==void 0)return s[P];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=S;if(S===s.RED&&(k===s.FLOAT&&(Y=s.R32F),k===s.HALF_FLOAT&&(Y=s.R16F),k===s.UNSIGNED_BYTE&&(Y=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.R8UI),k===s.UNSIGNED_SHORT&&(Y=s.R16UI),k===s.UNSIGNED_INT&&(Y=s.R32UI),k===s.BYTE&&(Y=s.R8I),k===s.SHORT&&(Y=s.R16I),k===s.INT&&(Y=s.R32I)),S===s.RG&&(k===s.FLOAT&&(Y=s.RG32F),k===s.HALF_FLOAT&&(Y=s.RG16F),k===s.UNSIGNED_BYTE&&(Y=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RG8UI),k===s.UNSIGNED_SHORT&&(Y=s.RG16UI),k===s.UNSIGNED_INT&&(Y=s.RG32UI),k===s.BYTE&&(Y=s.RG8I),k===s.SHORT&&(Y=s.RG16I),k===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),k===s.UNSIGNED_INT&&(Y=s.RGB32UI),k===s.BYTE&&(Y=s.RGB8I),k===s.SHORT&&(Y=s.RGB16I),k===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),k===s.UNSIGNED_INT&&(Y=s.RGBA32UI),k===s.BYTE&&(Y=s.RGBA8I),k===s.SHORT&&(Y=s.RGBA16I),k===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),S===s.RGBA){const At=J?na:Zt.getTransfer(j);k===s.FLOAT&&(Y=s.RGBA32F),k===s.HALF_FLOAT&&(Y=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Y=At===le?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(P,S){let k;return P?S===null||S===li||S===ko?k=s.DEPTH24_STENCIL8:S===Un?k=s.DEPTH32F_STENCIL8:S===Bo&&(k=s.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===li||S===ko?k=s.DEPTH_COMPONENT24:S===Un?k=s.DEPTH_COMPONENT32F:S===Bo&&(k=s.DEPTH_COMPONENT16),k}function b(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==$e&&P.minFilter!==De?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){const S=P.target;S.removeEventListener("dispose",T),z(S),S.isVideoTexture&&h.delete(S)}function C(P){const S=P.target;S.removeEventListener("dispose",C),w(S)}function z(P){const S=n.get(P);if(S.__webglInit===void 0)return;const k=P.source,j=u.get(k);if(j){const J=j[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&_(P),Object.keys(j).length===0&&u.delete(k)}n.remove(P)}function _(P){const S=n.get(P);s.deleteTexture(S.__webglTexture);const k=P.source,j=u.get(k);delete j[S.__cacheKey],r.memory.textures--}function w(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let J=0;J<S.__webglFramebuffer[j].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[j][J]);else s.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)s.deleteFramebuffer(S.__webglFramebuffer[j]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=P.textures;for(let j=0,J=k.length;j<J;j++){const Y=n.get(k[j]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),r.memory.textures--),n.remove(k[j])}n.remove(P)}let R=0;function I(){R=0}function L(){const P=R;return P>=i.maxTextures&&Lt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),R+=1,P}function O(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function U(P,S){const k=n.get(P);if(P.isVideoTexture&&ie(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const j=P.image;if(j===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,P,S);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function N(P,S){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){$(k,P,S);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function V(P,S){const k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){$(k,P,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function W(P,S){const k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Q(k,P,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const Z={[Ri]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[Yl]:s.MIRRORED_REPEAT},tt={[$e]:s.NEAREST,[Yp]:s.NEAREST_MIPMAP_NEAREST,[er]:s.NEAREST_MIPMAP_LINEAR,[De]:s.LINEAR,[Sa]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},st={[Zp]:s.NEVER,[em]:s.ALWAYS,[Kp]:s.LESS,[Wc]:s.LEQUAL,[Jp]:s.EQUAL,[Xc]:s.GEQUAL,[Qp]:s.GREATER,[tm]:s.NOTEQUAL};function ot(P,S){if(S.type===Un&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===De||S.magFilter===Sa||S.magFilter===er||S.magFilter===jn||S.minFilter===De||S.minFilter===Sa||S.minFilter===er||S.minFilter===jn)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Z[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Z[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Z[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,tt[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,tt[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,st[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$e||S.minFilter!==er&&S.minFilter!==jn||S.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Nt(P,S){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",T));const j=S.source;let J=u.get(j);J===void 0&&(J={},u.set(j,J));const Y=O(S);if(Y!==P.__cacheKey){J[Y]===void 0&&(J[Y]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,k=!0),J[Y].usedTimes++;const At=J[P.__cacheKey];At!==void 0&&(J[P.__cacheKey].usedTimes--,At.usedTimes===0&&_(S)),P.__cacheKey=Y,P.__webglTexture=J[Y].texture}return k}function he(P,S,k){return Math.floor(Math.floor(P/k)/S)}function se(P,S,k,j){const Y=P.updateRanges;if(Y.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,k,j,S.data);else{Y.sort((nt,ct)=>nt.start-ct.start);let At=0;for(let nt=1;nt<Y.length;nt++){const ct=Y[At],yt=Y[nt],Tt=ct.start+ct.count,lt=he(yt.start,S.width,4),Vt=he(ct.start,S.width,4);yt.start<=Tt+1&&lt===Vt&&he(yt.start+yt.count-1,S.width,4)===lt?ct.count=Math.max(ct.count,yt.start+yt.count-ct.start):(++At,Y[At]=yt)}Y.length=At+1;const at=s.getParameter(s.UNPACK_ROW_LENGTH),bt=s.getParameter(s.UNPACK_SKIP_PIXELS),It=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let nt=0,ct=Y.length;nt<ct;nt++){const yt=Y[nt],Tt=Math.floor(yt.start/4),lt=Math.ceil(yt.count/4),Vt=Tt%S.width,B=Math.floor(Tt/S.width),ft=lt,it=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,B),e.texSubImage2D(s.TEXTURE_2D,0,Vt,B,ft,it,k,j,S.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,at),s.pixelStorei(s.UNPACK_SKIP_PIXELS,bt),s.pixelStorei(s.UNPACK_SKIP_ROWS,It)}}function $(P,S,k){let j=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=s.TEXTURE_3D);const J=Nt(P,S),Y=S.source;e.bindTexture(j,P.__webglTexture,s.TEXTURE0+k);const At=n.get(Y);if(Y.version!==At.__version||J===!0){e.activeTexture(s.TEXTURE0+k);const at=Zt.getPrimaries(Zt.workingColorSpace),bt=S.colorSpace===si?null:Zt.getPrimaries(S.colorSpace),It=S.colorSpace===si||at===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let nt=x(S.image,!1,i.maxTextureSize);nt=me(S,nt);const ct=o.convert(S.format,S.colorSpace),yt=o.convert(S.type);let Tt=y(S.internalFormat,ct,yt,S.colorSpace,S.isVideoTexture);ot(j,S);let lt;const Vt=S.mipmaps,B=S.isVideoTexture!==!0,ft=At.__version===void 0||J===!0,it=Y.dataReady,mt=b(S,nt);if(S.isDepthTexture)Tt=M(S.format===hs,S.type),ft&&(B?e.texStorage2D(s.TEXTURE_2D,1,Tt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Tt,nt.width,nt.height,0,ct,yt,null));else if(S.isDataTexture)if(Vt.length>0){B&&ft&&e.texStorage2D(s.TEXTURE_2D,mt,Tt,Vt[0].width,Vt[0].height);for(let et=0,K=Vt.length;et<K;et++)lt=Vt[et],B?it&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,lt.width,lt.height,ct,yt,lt.data):e.texImage2D(s.TEXTURE_2D,et,Tt,lt.width,lt.height,0,ct,yt,lt.data);S.generateMipmaps=!1}else B?(ft&&e.texStorage2D(s.TEXTURE_2D,mt,Tt,nt.width,nt.height),it&&se(S,nt,ct,yt)):e.texImage2D(s.TEXTURE_2D,0,Tt,nt.width,nt.height,0,ct,yt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){B&&ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Tt,Vt[0].width,Vt[0].height,nt.depth);for(let et=0,K=Vt.length;et<K;et++)if(lt=Vt[et],S.format!==Ze)if(ct!==null)if(B){if(it)if(S.layerUpdates.size>0){const rt=ru(lt.width,lt.height,S.format,S.type);for(const Ft of S.layerUpdates){const ge=lt.data.subarray(Ft*rt/lt.data.BYTES_PER_ELEMENT,(Ft+1)*rt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,Ft,lt.width,lt.height,1,ct,ge)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,lt.width,lt.height,nt.depth,ct,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,Tt,lt.width,lt.height,nt.depth,0,lt.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?it&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,lt.width,lt.height,nt.depth,ct,yt,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,Tt,lt.width,lt.height,nt.depth,0,ct,yt,lt.data)}else{B&&ft&&e.texStorage2D(s.TEXTURE_2D,mt,Tt,Vt[0].width,Vt[0].height);for(let et=0,K=Vt.length;et<K;et++)lt=Vt[et],S.format!==Ze?ct!==null?B?it&&e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,lt.width,lt.height,ct,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,et,Tt,lt.width,lt.height,0,lt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?it&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,lt.width,lt.height,ct,yt,lt.data):e.texImage2D(s.TEXTURE_2D,et,Tt,lt.width,lt.height,0,ct,yt,lt.data)}else if(S.isDataArrayTexture)if(B){if(ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Tt,nt.width,nt.height,nt.depth),it)if(S.layerUpdates.size>0){const et=ru(nt.width,nt.height,S.format,S.type);for(const K of S.layerUpdates){const rt=nt.data.subarray(K*et/nt.data.BYTES_PER_ELEMENT,(K+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,ct,yt,rt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ct,yt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,nt.width,nt.height,nt.depth,0,ct,yt,nt.data);else if(S.isData3DTexture)B?(ft&&e.texStorage3D(s.TEXTURE_3D,mt,Tt,nt.width,nt.height,nt.depth),it&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ct,yt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,nt.width,nt.height,nt.depth,0,ct,yt,nt.data);else if(S.isFramebufferTexture){if(ft)if(B)e.texStorage2D(s.TEXTURE_2D,mt,Tt,nt.width,nt.height);else{let et=nt.width,K=nt.height;for(let rt=0;rt<mt;rt++)e.texImage2D(s.TEXTURE_2D,rt,Tt,et,K,0,ct,yt,null),et>>=1,K>>=1}}else if(Vt.length>0){if(B&&ft){const et=Et(Vt[0]);e.texStorage2D(s.TEXTURE_2D,mt,Tt,et.width,et.height)}for(let et=0,K=Vt.length;et<K;et++)lt=Vt[et],B?it&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,ct,yt,lt):e.texImage2D(s.TEXTURE_2D,et,Tt,ct,yt,lt);S.generateMipmaps=!1}else if(B){if(ft){const et=Et(nt);e.texStorage2D(s.TEXTURE_2D,mt,Tt,et.width,et.height)}it&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,yt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Tt,ct,yt,nt);g(S)&&p(j),At.__version=Y.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Q(P,S,k){if(S.image.length!==6)return;const j=Nt(P,S),J=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+k);const Y=n.get(J);if(J.version!==Y.__version||j===!0){e.activeTexture(s.TEXTURE0+k);const At=Zt.getPrimaries(Zt.workingColorSpace),at=S.colorSpace===si?null:Zt.getPrimaries(S.colorSpace),bt=S.colorSpace===si||At===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const It=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,ct=[];for(let K=0;K<6;K++)!It&&!nt?ct[K]=x(S.image[K],!0,i.maxCubemapSize):ct[K]=nt?S.image[K].image:S.image[K],ct[K]=me(S,ct[K]);const yt=ct[0],Tt=o.convert(S.format,S.colorSpace),lt=o.convert(S.type),Vt=y(S.internalFormat,Tt,lt,S.colorSpace),B=S.isVideoTexture!==!0,ft=Y.__version===void 0||j===!0,it=J.dataReady;let mt=b(S,yt);ot(s.TEXTURE_CUBE_MAP,S);let et;if(It){B&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Vt,yt.width,yt.height);for(let K=0;K<6;K++){et=ct[K].mipmaps;for(let rt=0;rt<et.length;rt++){const Ft=et[rt];S.format!==Ze?Tt!==null?B?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt,0,0,Ft.width,Ft.height,Tt,Ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt,Vt,Ft.width,Ft.height,0,Ft.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt,0,0,Ft.width,Ft.height,Tt,lt,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt,Vt,Ft.width,Ft.height,0,Tt,lt,Ft.data)}}}else{if(et=S.mipmaps,B&&ft){et.length>0&&mt++;const K=Et(ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Vt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){B?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ct[K].width,ct[K].height,Tt,lt,ct[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,ct[K].width,ct[K].height,0,Tt,lt,ct[K].data);for(let rt=0;rt<et.length;rt++){const ge=et[rt].image[K].image;B?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt+1,0,0,ge.width,ge.height,Tt,lt,ge.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt+1,Vt,ge.width,ge.height,0,Tt,lt,ge.data)}}else{B?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Tt,lt,ct[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,Tt,lt,ct[K]);for(let rt=0;rt<et.length;rt++){const Ft=et[rt];B?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt+1,0,0,Tt,lt,Ft.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt+1,Vt,Tt,lt,Ft.image[K])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),Y.__version=J.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function xt(P,S,k,j,J,Y){const At=o.convert(k.format,k.colorSpace),at=o.convert(k.type),bt=y(k.internalFormat,At,at,k.colorSpace),It=n.get(S),nt=n.get(k);if(nt.__renderTarget=S,!It.__hasExternalTextures){const ct=Math.max(1,S.width>>Y),yt=Math.max(1,S.height>>Y);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,bt,ct,yt,S.depth,0,At,at,null):e.texImage2D(J,Y,bt,ct,yt,0,At,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Fe(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,J,nt.__webglTexture,0,F(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,J,nt.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(P,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){const j=S.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=M(S.stencilBuffer,J),At=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Fe(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,F(S),Y,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,F(S),Y,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Y,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,P)}else{const j=S.textures;for(let J=0;J<j.length;J++){const Y=j[J],At=o.convert(Y.format,Y.colorSpace),at=o.convert(Y.type),bt=y(Y.internalFormat,At,at,Y.colorSpace);Fe(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,F(S),bt,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,F(S),bt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,bt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(P,S,k){const j=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),ot(s.TEXTURE_CUBE_MAP,S.depthTexture);const It=o.convert(S.depthTexture.format),nt=o.convert(S.depthTexture.type);let ct;S.depthTexture.format===Pi?ct=s.DEPTH_COMPONENT24:S.depthTexture.format===hs&&(ct=s.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ct,S.width,S.height,0,It,nt,null)}}else U(S.depthTexture,0);const Y=J.__webglTexture,At=F(S),at=j?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,bt=S.depthTexture.format===hs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===Pi)Fe(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,bt,at,Y,0,At):s.framebufferTexture2D(s.FRAMEBUFFER,bt,at,Y,0);else if(S.depthTexture.format===hs)Fe(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,bt,at,Y,0,At):s.framebufferTexture2D(s.FRAMEBUFFER,bt,at,Y,0);else throw new Error("Unknown depthTexture format")}function Kt(P){const S=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=j}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let j=0;j<6;j++)wt(S.__webglFramebuffer[j],P,j);else{const j=P.texture.mipmaps;j&&j.length>0?wt(S.__webglFramebuffer[0],P,0):wt(S.__webglFramebuffer,P,0)}else if(k){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=s.createRenderbuffer(),Ut(S.__webglDepthbuffer[j],P,!1);else{const J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}else{const j=P.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Ut(S.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(P,S,k){const j=n.get(P);S!==void 0&&xt(j.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Kt(P)}function $t(P){const S=P.texture,k=n.get(P),j=n.get(S);P.addEventListener("dispose",C);const J=P.textures,Y=P.isWebGLCubeRenderTarget===!0,At=J.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=S.version,r.memory.textures++),Y){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let bt=0;bt<S.mipmaps.length;bt++)k.__webglFramebuffer[at][bt]=s.createFramebuffer()}else k.__webglFramebuffer[at]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)k.__webglFramebuffer[at]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(At)for(let at=0,bt=J.length;at<bt;at++){const It=n.get(J[at]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),r.memory.textures++)}if(P.samples>0&&Fe(P)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const bt=J[at];k.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const It=o.convert(bt.format,bt.colorSpace),nt=o.convert(bt.type),ct=y(bt.internalFormat,It,nt,bt.colorSpace,P.isXRRenderTarget===!0),yt=F(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,ct,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,k.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ut(k.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),ot(s.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let bt=0;bt<S.mipmaps.length;bt++)xt(k.__webglFramebuffer[at][bt],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt);else xt(k.__webglFramebuffer[at],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let at=0,bt=J.length;at<bt;at++){const It=J[at],nt=n.get(It);let ct=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ct=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,nt.__webglTexture),ot(ct,It),xt(k.__webglFramebuffer,P,It,s.COLOR_ATTACHMENT0+at,ct,0),g(It)&&p(ct)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),ot(at,S),S.mipmaps&&S.mipmaps.length>0)for(let bt=0;bt<S.mipmaps.length;bt++)xt(k.__webglFramebuffer[bt],P,S,s.COLOR_ATTACHMENT0,at,bt);else xt(k.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,at,0);g(S)&&p(at),e.unbindTexture()}P.depthBuffer&&Kt(P)}function oe(P){const S=P.textures;for(let k=0,j=S.length;k<j;k++){const J=S[k];if(g(J)){const Y=v(P),At=n.get(J).__webglTexture;e.bindTexture(Y,At),p(Y),e.unbindTexture()}}}const fe=[],Ht=[];function Ne(P){if(P.samples>0){if(Fe(P)===!1){const S=P.textures,k=P.width,j=P.height;let J=s.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(P),at=S.length>1;if(at)for(let It=0;It<S.length;It++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const bt=P.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let It=0;It<S.length;It++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[It]);const nt=n.get(S[It]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,k,j,0,0,k,j,J,s.NEAREST),l===!0&&(fe.length=0,Ht.length=0,fe.push(s.COLOR_ATTACHMENT0+It),P.depthBuffer&&P.resolveDepthBuffer===!1&&(fe.push(Y),Ht.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let It=0;It<S.length;It++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,At.__webglColorRenderbuffer[It]);const nt=n.get(S[It]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function F(P){return Math.min(i.maxSamples,P.samples)}function Fe(P){const S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ie(P){const S=r.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function me(P,S){const k=P.colorSpace,j=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Xi&&k!==si&&(Zt.getTransfer(k)===le?(j!==Ze||J!==Mn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",k)),S}function Et(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.setTexture2D=U,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=W,this.rebindTextures=qe,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function W_(s,t){function e(n,i=si){let o;const r=Zt.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===Oc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Af)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Cf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ef)return s.BYTE;if(n===Tf)return s.SHORT;if(n===Bo)return s.UNSIGNED_SHORT;if(n===Uc)return s.INT;if(n===li)return s.UNSIGNED_INT;if(n===Un)return s.FLOAT;if(n===ci)return s.HALF_FLOAT;if(n===Rf)return s.ALPHA;if(n===Pf)return s.RGB;if(n===Ze)return s.RGBA;if(n===Pi)return s.DEPTH_COMPONENT;if(n===hs)return s.DEPTH_STENCIL;if(n===kc)return s.RED;if(n===Hc)return s.RED_INTEGER;if(n===so)return s.RG;if(n===Vc)return s.RG_INTEGER;if(n===Gc)return s.RGBA_INTEGER;if(n===$r||n===Zr||n===Kr||n===Jr)if(r===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===$r)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===$r)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jl||n===$l||n===Zl||n===Kl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===jl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$l)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Jl||n===Ql)return r===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===tc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===ec)return o.COMPRESSED_R11_EAC;if(n===nc)return o.COMPRESSED_SIGNED_R11_EAC;if(n===ic)return o.COMPRESSED_RG11_EAC;if(n===sc)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oc||n===rc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===vc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===oc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vc)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_c||n===yc||n===Mc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===_c)return r===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sc||n===wc||n===bc||n===Ec)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Sc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ko?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const X_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Gf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new On({vertexShader:X_,fragmentShader:q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new jo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j_ extends gs{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",g=new Y_,p={},v=e.getContextAttributes();let y=null,M=null;const b=[],T=[],C=new pt;let z=null;const _=new Fn;_.viewport=new ce;const w=new Fn;w.viewport=new ce;const R=[_,w],I=new i0;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=b[$];return Q===void 0&&(Q=new Ga,b[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=b[$];return Q===void 0&&(Q=new Ga,b[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=b[$];return Q===void 0&&(Q=new Ga,b[$]=Q),Q.getHandSpace()};function U($){const Q=T.indexOf($.inputSource);if(Q===-1)return;const xt=b[Q];xt!==void 0&&(xt.update($.inputSource,$.frame,c||r),xt.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",V);for(let $=0;$<b.length;$++){const Q=T[$];Q!==null&&(T[$]=null,b[$].disconnect(Q))}L=null,O=null,g.reset();for(const $ in p)delete p[$];t.setRenderTarget(y),f=null,u=null,d=null,i=null,M=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(z),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",N),i.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ut=null,wt=null;v.depth&&(wt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=v.stencil?hs:Pi,Ut=v.stencil?ko:li);const Kt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:o};d=this.getBinding(),u=d.createProjectionLayer(Kt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new ai(u.textureWidth,u.textureHeight,{format:Ze,type:Mn,depthTexture:new Go(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const xt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ai(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V($){for(let Q=0;Q<$.removed.length;Q++){const xt=$.removed[Q],Ut=T.indexOf(xt);Ut>=0&&(T[Ut]=null,b[Ut].disconnect(xt))}for(let Q=0;Q<$.added.length;Q++){const xt=$.added[Q];let Ut=T.indexOf(xt);if(Ut===-1){for(let Kt=0;Kt<b.length;Kt++)if(Kt>=T.length){T.push(xt),Ut=Kt;break}else if(T[Kt]===null){T[Kt]=xt,Ut=Kt;break}if(Ut===-1)break}const wt=b[Ut];wt&&wt.connect(xt)}}const W=new D,Z=new D;function tt($,Q,xt){W.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);const Ut=W.distanceTo(Z),wt=Q.projectionMatrix.elements,Kt=xt.projectionMatrix.elements,qe=wt[14]/(wt[10]-1),$t=wt[14]/(wt[10]+1),oe=(wt[9]+1)/wt[5],fe=(wt[9]-1)/wt[5],Ht=(wt[8]-1)/wt[0],Ne=(Kt[8]+1)/Kt[0],F=qe*Ht,Fe=qe*Ne,ie=Ut/(-Ht+Ne),me=ie*-Ht;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(me),$.translateZ(ie),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),wt[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Et=qe+ie,P=$t+ie,S=F-me,k=Fe+(Ut-me),j=oe*$t/P*Et,J=fe*$t/P*Et;$.projectionMatrix.makePerspective(S,k,j,J,Et,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function st($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Q=$.near,xt=$.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),I.near=w.near=_.near=Q,I.far=w.far=_.far=xt,(L!==I.near||O!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),L=I.near,O=I.far),I.layers.mask=$.layers.mask|6,_.layers.mask=I.layers.mask&3,w.layers.mask=I.layers.mask&5;const Ut=$.parent,wt=I.cameras;st(I,Ut);for(let Kt=0;Kt<wt.length;Kt++)st(wt[Kt],Ut);wt.length===2?tt(I,_,w):I.projectionMatrix.copy(_.projectionMatrix),ot($,I,Ut)};function ot($,Q,xt){xt===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(xt.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function($){return p[$]};let Nt=null;function he($,Q){if(h=Q.getViewerPose(c||r),m=Q,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ut=!1;xt.length!==I.cameras.length&&(I.cameras.length=0,Ut=!0);for(let $t=0;$t<xt.length;$t++){const oe=xt[$t];let fe=null;if(f!==null)fe=f.getViewport(oe);else{const Ne=d.getViewSubImage(u,oe);fe=Ne.viewport,$t===0&&(t.setRenderTargetTextures(M,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(M))}let Ht=R[$t];Ht===void 0&&(Ht=new Fn,Ht.layers.enable($t),Ht.viewport=new ce,R[$t]=Ht),Ht.matrix.fromArray(oe.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(oe.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(fe.x,fe.y,fe.width,fe.height),$t===0&&(I.matrix.copy(Ht.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ut===!0&&I.cameras.push(Ht)}const wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const $t=d.getDepthInformation(xt[0]);$t&&$t.isValid&&$t.texture&&g.init($t,i.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let $t=0;$t<xt.length;$t++){const oe=xt[$t].camera;if(oe){let fe=p[oe];fe||(fe=new Gf,p[oe]=fe);const Ht=d.getCameraImage(oe);fe.sourceTexture=Ht}}}}for(let xt=0;xt<b.length;xt++){const Ut=T[xt],wt=b[xt];Ut!==null&&wt!==void 0&&wt.update(Ut,Q,c||r)}Nt&&Nt($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const se=new Xf;se.setAnimationLoop(he),this.setAnimationLoop=function($){Nt=$},this.dispose=function(){}}}const es=new Be,$_=new Gt;function Z_(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Uf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),d(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),x(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,M=v.envMapRotation;y&&(g.envMap.value=y,es.copy(M),es.x*=-1,es.y*=-1,es.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),g.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(es)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function K_(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const M=y.program;n.uniformBlockBinding(v,M)}function c(v,y){let M=i[v.id];M===void 0&&(m(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",g));const b=y.program;n.updateUBOMapping(v,b);const T=t.render.frame;o[v.id]!==T&&(u(v),o[v.id]=T)}function h(v){const y=d();v.__bindingPointIndex=y;const M=s.createBuffer(),b=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,M),M}function d(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],M=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,C=M.length;T<C;T++){const z=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,w=z.length;_<w;_++){const R=z[_];if(f(R,T,_,b)===!0){const I=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let U=0;U<L.length;U++){const N=L[U],V=x(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,I+O,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,O),O+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,M,b){const T=v.value,C=y+"_"+M;if(b[C]===void 0)return typeof T=="number"||typeof T=="boolean"?b[C]=T:b[C]=T.clone(),!0;{const z=b[C];if(typeof T=="number"||typeof T=="boolean"){if(z!==T)return b[C]=T,!0}else if(z.equals(T)===!1)return z.copy(T),!0}return!1}function m(v){const y=v.uniforms;let M=0;const b=16;for(let C=0,z=y.length;C<z;C++){const _=Array.isArray(y[C])?y[C]:[y[C]];for(let w=0,R=_.length;w<R;w++){const I=_[w],L=Array.isArray(I.value)?I.value:[I.value];for(let O=0,U=L.length;O<U;O++){const N=L[O],V=x(N),W=M%b,Z=W%V.boundary,tt=W+Z;M+=Z,tt!==0&&b-tt<V.storage&&(M+=b-tt),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=V.storage}}}const T=M%b;return T>0&&(M+=b-T),v.__size=M,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Lt("WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete o[y.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);r=[],i={},o={}}return{bind:l,update:c,dispose:p}}const J_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kn=null;function Q_(){return Kn===null&&(Kn=new hi(J_,16,16,so,ci),Kn.name="DFG_LUT",Kn.minFilter=De,Kn.magFilter=De,Kn.wrapS=Yn,Kn.wrapT=Yn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class ty{constructor(t={}){const{canvas:e=nm(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Mn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const x=f,g=new Set([Gc,Vc,Hc]),p=new Set([Mn,li,Bo,ko,Oc,Bc]),v=new Uint32Array(4),y=new Int32Array(4);let M=null,b=null;const T=[],C=[];let z=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let w=!1;this._outputColorSpace=nn;let R=0,I=0,L=null,O=-1,U=null;const N=new ce,V=new ce;let W=null;const Z=new zt(0);let tt=0,st=e.width,ot=e.height,Nt=1,he=null,se=null;const $=new ce(0,0,st,ot),Q=new ce(0,0,st,ot);let xt=!1;const Ut=new Qc;let wt=!1,Kt=!1;const qe=new Gt,$t=new D,oe=new ce,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function Ne(){return L===null?Nt:1}let F=n;function Fe(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nc}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",re,!1),F===null){const H="webgl2";if(F=Fe(H,A),F===null)throw Fe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Qt("WebGLRenderer: "+A.message),A}let ie,me,Et,P,S,k,j,J,Y,At,at,bt,It,nt,ct,yt,Tt,lt,Vt,B,ft,it,mt,et;function K(){ie=new Qx(F),ie.init(),it=new W_(F,ie),me=new Wx(F,ie,t,it),Et=new V_(F,ie),me.reversedDepthBuffer&&u&&Et.buffers.depth.setReversed(!0),P=new nv(F),S=new A_,k=new G_(F,ie,Et,S,me,it,P),j=new qx(_),J=new Jx(_),Y=new r0(F),mt=new Vx(F,Y),At=new tv(F,Y,P,mt),at=new sv(F,At,Y,P),Vt=new iv(F,me,k),yt=new Xx(S),bt=new T_(_,j,J,ie,me,mt,yt),It=new Z_(_,S),nt=new R_,ct=new N_(ie),lt=new Hx(_,j,J,Et,at,m,l),Tt=new k_(_,at,me),et=new K_(F,P,me,Et),B=new Gx(F,ie,P),ft=new ev(F,ie,P),P.programs=bt.programs,_.capabilities=me,_.extensions=ie,_.properties=S,_.renderLists=nt,_.shadowMap=Tt,_.state=Et,_.info=P}K(),x!==Mn&&(z=new rv(x,e.width,e.height,i,o));const rt=new j_(_,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(A){A!==void 0&&(Nt=A,this.setSize(st,ot,!1))},this.getSize=function(A){return A.set(st,ot)},this.setSize=function(A,H,q=!0){if(rt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}st=A,ot=H,e.width=Math.floor(A*Nt),e.height=Math.floor(H*Nt),q===!0&&(e.style.width=A+"px",e.style.height=H+"px"),z!==null&&z.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(st*Nt,ot*Nt).floor()},this.setDrawingBufferSize=function(A,H,q){st=A,ot=H,Nt=q,e.width=Math.floor(A*q),e.height=Math.floor(H*q),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(x===Mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,H,q,X){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,H,q,X),Et.viewport(N.copy($).multiplyScalar(Nt).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,H,q,X){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,H,q,X),Et.scissor(V.copy(Q).multiplyScalar(Nt).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(A){Et.setScissorTest(xt=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,q=!0){let X=0;if(A){let G=!1;if(L!==null){const ht=L.texture.format;G=g.has(ht)}if(G){const ht=L.texture.type,gt=p.has(ht),dt=lt.getClearColor(),vt=lt.getClearAlpha(),Ct=dt.r,Dt=dt.g,Rt=dt.b;gt?(v[0]=Ct,v[1]=Dt,v[2]=Rt,v[3]=vt,F.clearBufferuiv(F.COLOR,0,v)):(y[0]=Ct,y[1]=Dt,y[2]=Rt,y[3]=vt,F.clearBufferiv(F.COLOR,0,y))}else X|=F.COLOR_BUFFER_BIT}H&&(X|=F.DEPTH_BUFFER_BIT),q&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",re,!1),lt.dispose(),nt.dispose(),ct.dispose(),S.dispose(),j.dispose(),J.dispose(),at.dispose(),mt.dispose(),et.dispose(),bt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",fh),rt.removeEventListener("sessionend",ph),ji.stop()};function Ft(A){A.preventDefault(),Rh("WebGLRenderer: Context Lost."),w=!0}function ge(){Rh("WebGLRenderer: Context Restored."),w=!1;const A=P.autoReset,H=Tt.enabled,q=Tt.autoUpdate,X=Tt.needsUpdate,G=Tt.type;K(),P.autoReset=A,Tt.enabled=H,Tt.autoUpdate=q,Tt.needsUpdate=X,Tt.type=G}function re(A){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zn(A){const H=A.target;H.removeEventListener("dispose",Zn),ui(H)}function ui(A){gp(A),S.remove(A)}function gp(A){const H=S.get(A).programs;H!==void 0&&(H.forEach(function(q){bt.releaseProgram(q)}),A.isShaderMaterial&&bt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,q,X,G,ht){H===null&&(H=fe);const gt=G.isMesh&&G.matrixWorld.determinant()<0,dt=vp(A,H,q,X,G);Et.setMaterial(X,gt);let vt=q.index,Ct=1;if(X.wireframe===!0){if(vt=At.getWireframeAttribute(q),vt===void 0)return;Ct=2}const Dt=q.drawRange,Rt=q.attributes.position;let Wt=Dt.start*Ct,ue=(Dt.start+Dt.count)*Ct;ht!==null&&(Wt=Math.max(Wt,ht.start*Ct),ue=Math.min(ue,(ht.start+ht.count)*Ct)),vt!==null?(Wt=Math.max(Wt,0),ue=Math.min(ue,vt.count)):Rt!=null&&(Wt=Math.max(Wt,0),ue=Math.min(ue,Rt.count));const Te=ue-Wt;if(Te<0||Te===1/0)return;mt.setup(G,X,dt,q,vt);let Ae,pe=B;if(vt!==null&&(Ae=Y.get(vt),pe=ft,pe.setIndex(Ae)),G.isMesh)X.wireframe===!0?(Et.setLineWidth(X.wireframeLinewidth*Ne()),pe.setMode(F.LINES)):pe.setMode(F.TRIANGLES);else if(G.isLine){let Pt=X.linewidth;Pt===void 0&&(Pt=1),Et.setLineWidth(Pt*Ne()),G.isLineSegments?pe.setMode(F.LINES):G.isLineLoop?pe.setMode(F.LINE_LOOP):pe.setMode(F.LINE_STRIP)}else G.isPoints?pe.setMode(F.POINTS):G.isSprite&&pe.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ho("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))pe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Pt=G._multiDrawStarts,ae=G._multiDrawCounts,Jt=G._multiDrawCount,bn=vt?Y.get(vt).bytesPerElement:1,_s=S.get(X).currentProgram.getUniforms();for(let En=0;En<Jt;En++)_s.setValue(F,"_gl_DrawID",En),pe.render(Pt[En]/bn,ae[En])}else if(G.isInstancedMesh)pe.renderInstances(Wt,Te,G.count);else if(q.isInstancedBufferGeometry){const Pt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ae=Math.min(q.instanceCount,Pt);pe.renderInstances(Wt,Te,ae)}else pe.render(Wt,Te)};function dh(A,H,q){A.transparent===!0&&A.side===yn&&A.forceSinglePass===!1?(A.side=fn,A.needsUpdate=!0,tr(A,H,q),A.side=Ci,A.needsUpdate=!0,tr(A,H,q),A.side=yn):tr(A,H,q)}this.compile=function(A,H,q=null){q===null&&(q=A),b=ct.get(q),b.init(H),C.push(b),q.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),A!==q&&A.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights();const X=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ht=G.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){const dt=ht[gt];dh(dt,q,G),X.add(dt)}else dh(ht,q,G),X.add(ht)}),b=C.pop(),X},this.compileAsync=function(A,H,q=null){const X=this.compile(A,H,q);return new Promise(G=>{function ht(){if(X.forEach(function(gt){S.get(gt).currentProgram.isReady()&&X.delete(gt)}),X.size===0){G(A);return}setTimeout(ht,10)}ie.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let _a=null;function xp(A){_a&&_a(A)}function fh(){ji.stop()}function ph(){ji.start()}const ji=new Xf;ji.setAnimationLoop(xp),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(A){_a=A,rt.setAnimationLoop(A),A===null?ji.stop():ji.start()},rt.addEventListener("sessionstart",fh),rt.addEventListener("sessionend",ph),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const q=rt.enabled===!0&&rt.isPresenting===!0,X=z!==null&&(L===null||q)&&z.begin(_,L);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(H),H=rt.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,H,L),b=ct.get(A,C.length),b.init(H),C.push(b),qe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ut.setFromProjectionMatrix(qe,oi,H.reversedDepth),Kt=this.localClippingEnabled,wt=yt.init(this.clippingPlanes,Kt),M=nt.get(A,T.length),M.init(),T.push(M),rt.enabled===!0&&rt.isPresenting===!0){const gt=_.xr.getDepthSensingMesh();gt!==null&&ya(gt,H,-1/0,_.sortObjects)}ya(A,H,0,_.sortObjects),M.finish(),_.sortObjects===!0&&M.sort(he,se),Ht=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ht&&lt.addToRenderList(M,A),this.info.render.frame++,wt===!0&&yt.beginShadows();const G=b.state.shadowsArray;if(Tt.render(G,A,H),wt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&z.hasRenderPass())===!1){const gt=M.opaque,dt=M.transmissive;if(b.setupLights(),H.isArrayCamera){const vt=H.cameras;if(dt.length>0)for(let Ct=0,Dt=vt.length;Ct<Dt;Ct++){const Rt=vt[Ct];gh(gt,dt,A,Rt)}Ht&&lt.render(A);for(let Ct=0,Dt=vt.length;Ct<Dt;Ct++){const Rt=vt[Ct];mh(M,A,Rt,Rt.viewport)}}else dt.length>0&&gh(gt,dt,A,H),Ht&&lt.render(A),mh(M,A,H)}L!==null&&I===0&&(k.updateMultisampleRenderTarget(L),k.updateRenderTargetMipmap(L)),X&&z.end(_),A.isScene===!0&&A.onAfterRender(_,A,H),mt.resetDefaultState(),O=-1,U=null,C.pop(),C.length>0?(b=C[C.length-1],wt===!0&&yt.setGlobalState(_.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?M=T[T.length-1]:M=null};function ya(A,H,q,X){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ut.intersectsSprite(A)){X&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(qe);const gt=at.update(A),dt=A.material;dt.visible&&M.push(A,gt,dt,q,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ut.intersectsObject(A))){const gt=at.update(A),dt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),oe.copy(A.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),oe.copy(gt.boundingSphere.center)),oe.applyMatrix4(A.matrixWorld).applyMatrix4(qe)),Array.isArray(dt)){const vt=gt.groups;for(let Ct=0,Dt=vt.length;Ct<Dt;Ct++){const Rt=vt[Ct],Wt=dt[Rt.materialIndex];Wt&&Wt.visible&&M.push(A,gt,Wt,q,oe.z,Rt)}}else dt.visible&&M.push(A,gt,dt,q,oe.z,null)}}const ht=A.children;for(let gt=0,dt=ht.length;gt<dt;gt++)ya(ht[gt],H,q,X)}function mh(A,H,q,X){const{opaque:G,transmissive:ht,transparent:gt}=A;b.setupLightsView(q),wt===!0&&yt.setGlobalState(_.clippingPlanes,q),X&&Et.viewport(N.copy(X)),G.length>0&&Qo(G,H,q),ht.length>0&&Qo(ht,H,q),gt.length>0&&Qo(gt,H,q),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function gh(A,H,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[X.id]===void 0){const Wt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[X.id]=new ai(1,1,{generateMipmaps:!0,type:Wt?ci:Mn,minFilter:jn,samples:me.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const ht=b.state.transmissionRenderTarget[X.id],gt=X.viewport||N;ht.setSize(gt.z*_.transmissionResolutionScale,gt.w*_.transmissionResolutionScale);const dt=_.getRenderTarget(),vt=_.getActiveCubeFace(),Ct=_.getActiveMipmapLevel();_.setRenderTarget(ht),_.getClearColor(Z),tt=_.getClearAlpha(),tt<1&&_.setClearColor(16777215,.5),_.clear(),Ht&&lt.render(q);const Dt=_.toneMapping;_.toneMapping=ri;const Rt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),wt===!0&&yt.setGlobalState(_.clippingPlanes,X),Qo(A,q,X),k.updateMultisampleRenderTarget(ht),k.updateRenderTargetMipmap(ht),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let ue=0,Te=H.length;ue<Te;ue++){const Ae=H[ue],{object:pe,geometry:Pt,material:ae,group:Jt}=Ae;if(ae.side===yn&&pe.layers.test(X.layers)){const bn=ae.side;ae.side=fn,ae.needsUpdate=!0,xh(pe,q,X,Pt,ae,Jt),ae.side=bn,ae.needsUpdate=!0,Wt=!0}}Wt===!0&&(k.updateMultisampleRenderTarget(ht),k.updateRenderTargetMipmap(ht))}_.setRenderTarget(dt,vt,Ct),_.setClearColor(Z,tt),Rt!==void 0&&(X.viewport=Rt),_.toneMapping=Dt}function Qo(A,H,q){const X=H.isScene===!0?H.overrideMaterial:null;for(let G=0,ht=A.length;G<ht;G++){const gt=A[G],{object:dt,geometry:vt,group:Ct}=gt;let Dt=gt.material;Dt.allowOverride===!0&&X!==null&&(Dt=X),dt.layers.test(q.layers)&&xh(dt,H,q,vt,Dt,Ct)}}function xh(A,H,q,X,G,ht){A.onBeforeRender(_,H,q,X,G,ht),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(_,H,q,X,A,ht),G.transparent===!0&&G.side===yn&&G.forceSinglePass===!1?(G.side=fn,G.needsUpdate=!0,_.renderBufferDirect(q,H,X,G,A,ht),G.side=Ci,G.needsUpdate=!0,_.renderBufferDirect(q,H,X,G,A,ht),G.side=yn):_.renderBufferDirect(q,H,X,G,A,ht),A.onAfterRender(_,H,q,X,G,ht)}function tr(A,H,q){H.isScene!==!0&&(H=fe);const X=S.get(A),G=b.state.lights,ht=b.state.shadowsArray,gt=G.state.version,dt=bt.getParameters(A,G.state,ht,H,q),vt=bt.getProgramCacheKey(dt);let Ct=X.programs;X.environment=A.isMeshStandardMaterial?H.environment:null,X.fog=H.fog,X.envMap=(A.isMeshStandardMaterial?J:j).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ct===void 0&&(A.addEventListener("dispose",Zn),Ct=new Map,X.programs=Ct);let Dt=Ct.get(vt);if(Dt!==void 0){if(X.currentProgram===Dt&&X.lightsStateVersion===gt)return _h(A,dt),Dt}else dt.uniforms=bt.getUniforms(A),A.onBeforeCompile(dt,_),Dt=bt.acquireProgram(dt,vt),Ct.set(vt,Dt),X.uniforms=dt.uniforms;const Rt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Rt.clippingPlanes=yt.uniform),_h(A,dt),X.needsLights=yp(A),X.lightsStateVersion=gt,X.needsLights&&(Rt.ambientLightColor.value=G.state.ambient,Rt.lightProbe.value=G.state.probe,Rt.directionalLights.value=G.state.directional,Rt.directionalLightShadows.value=G.state.directionalShadow,Rt.spotLights.value=G.state.spot,Rt.spotLightShadows.value=G.state.spotShadow,Rt.rectAreaLights.value=G.state.rectArea,Rt.ltc_1.value=G.state.rectAreaLTC1,Rt.ltc_2.value=G.state.rectAreaLTC2,Rt.pointLights.value=G.state.point,Rt.pointLightShadows.value=G.state.pointShadow,Rt.hemisphereLights.value=G.state.hemi,Rt.directionalShadowMap.value=G.state.directionalShadowMap,Rt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Rt.spotShadowMap.value=G.state.spotShadowMap,Rt.spotLightMatrix.value=G.state.spotLightMatrix,Rt.spotLightMap.value=G.state.spotLightMap,Rt.pointShadowMap.value=G.state.pointShadowMap,Rt.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Dt,X.uniformsList=null,Dt}function vh(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Qr.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function _h(A,H){const q=S.get(A);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function vp(A,H,q,X,G){H.isScene!==!0&&(H=fe),k.resetTextureUnits();const ht=H.fog,gt=X.isMeshStandardMaterial?H.environment:null,dt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xi,vt=(X.isMeshStandardMaterial?J:j).get(X.envMap||gt),Ct=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Dt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Rt=!!q.morphAttributes.position,Wt=!!q.morphAttributes.normal,ue=!!q.morphAttributes.color;let Te=ri;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Te=_.toneMapping);const Ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pe=Ae!==void 0?Ae.length:0,Pt=S.get(X),ae=b.state.lights;if(wt===!0&&(Kt===!0||A!==U)){const ln=A===U&&X.id===O;yt.setState(X,A,ln)}let Jt=!1;X.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==ae.state.version||Pt.outputColorSpace!==dt||G.isBatchedMesh&&Pt.batching===!1||!G.isBatchedMesh&&Pt.batching===!0||G.isBatchedMesh&&Pt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Pt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Pt.instancing===!1||!G.isInstancedMesh&&Pt.instancing===!0||G.isSkinnedMesh&&Pt.skinning===!1||!G.isSkinnedMesh&&Pt.skinning===!0||G.isInstancedMesh&&Pt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pt.instancingMorph===!1&&G.morphTexture!==null||Pt.envMap!==vt||X.fog===!0&&Pt.fog!==ht||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==yt.numPlanes||Pt.numIntersection!==yt.numIntersection)||Pt.vertexAlphas!==Ct||Pt.vertexTangents!==Dt||Pt.morphTargets!==Rt||Pt.morphNormals!==Wt||Pt.morphColors!==ue||Pt.toneMapping!==Te||Pt.morphTargetsCount!==pe)&&(Jt=!0):(Jt=!0,Pt.__version=X.version);let bn=Pt.currentProgram;Jt===!0&&(bn=tr(X,H,G));let _s=!1,En=!1,ao=!1;const xe=bn.getUniforms(),pn=Pt.uniforms;if(Et.useProgram(bn.program)&&(_s=!0,En=!0,ao=!0),X.id!==O&&(O=X.id,En=!0),_s||U!==A){Et.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xe.setValue(F,"projectionMatrix",A.projectionMatrix),xe.setValue(F,"viewMatrix",A.matrixWorldInverse);const mn=xe.map.cameraPosition;mn!==void 0&&mn.setValue(F,$t.setFromMatrixPosition(A.matrixWorld)),me.logarithmicDepthBuffer&&xe.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,En=!0,ao=!0)}if(Pt.needsLights&&(ae.state.directionalShadowMap.length>0&&xe.setValue(F,"directionalShadowMap",ae.state.directionalShadowMap,k),ae.state.spotShadowMap.length>0&&xe.setValue(F,"spotShadowMap",ae.state.spotShadowMap,k),ae.state.pointShadowMap.length>0&&xe.setValue(F,"pointShadowMap",ae.state.pointShadowMap,k)),G.isSkinnedMesh){xe.setOptional(F,G,"bindMatrix"),xe.setOptional(F,G,"bindMatrixInverse");const ln=G.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),xe.setValue(F,"boneTexture",ln.boneTexture,k))}G.isBatchedMesh&&(xe.setOptional(F,G,"batchingTexture"),xe.setValue(F,"batchingTexture",G._matricesTexture,k),xe.setOptional(F,G,"batchingIdTexture"),xe.setValue(F,"batchingIdTexture",G._indirectTexture,k),xe.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&xe.setValue(F,"batchingColorTexture",G._colorsTexture,k));const zn=q.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Vt.update(G,q,bn),(En||Pt.receiveShadow!==G.receiveShadow)&&(Pt.receiveShadow=G.receiveShadow,xe.setValue(F,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(pn.envMap.value=vt,pn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&H.environment!==null&&(pn.envMapIntensity.value=H.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=Q_()),En&&(xe.setValue(F,"toneMappingExposure",_.toneMappingExposure),Pt.needsLights&&_p(pn,ao),ht&&X.fog===!0&&It.refreshFogUniforms(pn,ht),It.refreshMaterialUniforms(pn,X,Nt,ot,b.state.transmissionRenderTarget[A.id]),Qr.upload(F,vh(Pt),pn,k)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qr.upload(F,vh(Pt),pn,k),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(F,"center",G.center),xe.setValue(F,"modelViewMatrix",G.modelViewMatrix),xe.setValue(F,"normalMatrix",G.normalMatrix),xe.setValue(F,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ln=X.uniformsGroups;for(let mn=0,Ma=ln.length;mn<Ma;mn++){const $i=ln[mn];et.update($i,bn),et.bind($i,bn)}}return bn}function _p(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function yp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,H,q){const X=S.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),S.get(A.texture).__webglTexture=H,S.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const q=S.get(A);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const Mp=F.createFramebuffer();this.setRenderTarget=function(A,H=0,q=0){L=A,R=H,I=q;let X=null,G=!1,ht=!1;if(A){const dt=S.get(A);if(dt.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(F.FRAMEBUFFER,dt.__webglFramebuffer),N.copy(A.viewport),V.copy(A.scissor),W=A.scissorTest,Et.viewport(N),Et.scissor(V),Et.setScissorTest(W),O=-1;return}else if(dt.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(dt.__hasExternalTextures)k.rebindTextures(A,S.get(A.texture).__webglTexture,S.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Dt=A.depthTexture;if(dt.__boundDepthTexture!==Dt){if(Dt!==null&&S.has(Dt)&&(A.width!==Dt.image.width||A.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}const vt=A.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ht=!0);const Ct=S.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ct[H])?X=Ct[H][q]:X=Ct[H],G=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?X=S.get(A).__webglMultisampledFramebuffer:Array.isArray(Ct)?X=Ct[q]:X=Ct,N.copy(A.viewport),V.copy(A.scissor),W=A.scissorTest}else N.copy($).multiplyScalar(Nt).floor(),V.copy(Q).multiplyScalar(Nt).floor(),W=xt;if(q!==0&&(X=Mp),Et.bindFramebuffer(F.FRAMEBUFFER,X)&&Et.drawBuffers(A,X),Et.viewport(N),Et.scissor(V),Et.setScissorTest(W),G){const dt=S.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,dt.__webglTexture,q)}else if(ht){const dt=H;for(let vt=0;vt<A.textures.length;vt++){const Ct=S.get(A.textures[vt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+vt,Ct.__webglTexture,q,dt)}}else if(A!==null&&q!==0){const dt=S.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dt.__webglTexture,q)}O=-1},this.readRenderTargetPixels=function(A,H,q,X,G,ht,gt,dt=0){if(!(A&&A.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(vt=vt[gt]),vt){Et.bindFramebuffer(F.FRAMEBUFFER,vt);try{const Ct=A.textures[dt],Dt=Ct.format,Rt=Ct.type;if(!me.textureFormatReadable(Dt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Rt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-X&&q>=0&&q<=A.height-G&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+dt),F.readPixels(H,q,X,G,it.convert(Dt),it.convert(Rt),ht))}finally{const Ct=L!==null?S.get(L).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,H,q,X,G,ht,gt,dt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(vt=vt[gt]),vt)if(H>=0&&H<=A.width-X&&q>=0&&q<=A.height-G){Et.bindFramebuffer(F.FRAMEBUFFER,vt);const Ct=A.textures[dt],Dt=Ct.format,Rt=Ct.type;if(!me.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Wt),F.bufferData(F.PIXEL_PACK_BUFFER,ht.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+dt),F.readPixels(H,q,X,G,it.convert(Dt),it.convert(Rt),0);const ue=L!==null?S.get(L).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,ue);const Te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await im(F,Te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Wt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ht),F.deleteBuffer(Wt),F.deleteSync(Te),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,q=0){const X=Math.pow(2,-q),G=Math.floor(A.image.width*X),ht=Math.floor(A.image.height*X),gt=H!==null?H.x:0,dt=H!==null?H.y:0;k.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,gt,dt,G,ht),Et.unbindTexture()};const Sp=F.createFramebuffer(),wp=F.createFramebuffer();this.copyTextureToTexture=function(A,H,q=null,X=null,G=0,ht=null){ht===null&&(G!==0?(Ho("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=G,G=0):ht=0);let gt,dt,vt,Ct,Dt,Rt,Wt,ue,Te;const Ae=A.isCompressedTexture?A.mipmaps[ht]:A.image;if(q!==null)gt=q.max.x-q.min.x,dt=q.max.y-q.min.y,vt=q.isBox3?q.max.z-q.min.z:1,Ct=q.min.x,Dt=q.min.y,Rt=q.isBox3?q.min.z:0;else{const zn=Math.pow(2,-G);gt=Math.floor(Ae.width*zn),dt=Math.floor(Ae.height*zn),A.isDataArrayTexture?vt=Ae.depth:A.isData3DTexture?vt=Math.floor(Ae.depth*zn):vt=1,Ct=0,Dt=0,Rt=0}X!==null?(Wt=X.x,ue=X.y,Te=X.z):(Wt=0,ue=0,Te=0);const pe=it.convert(H.format),Pt=it.convert(H.type);let ae;H.isData3DTexture?(k.setTexture3D(H,0),ae=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(k.setTexture2DArray(H,0),ae=F.TEXTURE_2D_ARRAY):(k.setTexture2D(H,0),ae=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const Jt=F.getParameter(F.UNPACK_ROW_LENGTH),bn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),_s=F.getParameter(F.UNPACK_SKIP_PIXELS),En=F.getParameter(F.UNPACK_SKIP_ROWS),ao=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ct),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Rt);const xe=A.isDataArrayTexture||A.isData3DTexture,pn=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const zn=S.get(A),ln=S.get(H),mn=S.get(zn.__renderTarget),Ma=S.get(ln.__renderTarget);Et.bindFramebuffer(F.READ_FRAMEBUFFER,mn.__webglFramebuffer),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ma.__webglFramebuffer);for(let $i=0;$i<vt;$i++)xe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S.get(A).__webglTexture,G,Rt+$i),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S.get(H).__webglTexture,ht,Te+$i)),F.blitFramebuffer(Ct,Dt,gt,dt,Wt,ue,gt,dt,F.DEPTH_BUFFER_BIT,F.NEAREST);Et.bindFramebuffer(F.READ_FRAMEBUFFER,null),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||S.has(A)){const zn=S.get(A),ln=S.get(H);Et.bindFramebuffer(F.READ_FRAMEBUFFER,Sp),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,wp);for(let mn=0;mn<vt;mn++)xe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,zn.__webglTexture,G,Rt+mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zn.__webglTexture,G),pn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,ht,Te+mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,ht),G!==0?F.blitFramebuffer(Ct,Dt,gt,dt,Wt,ue,gt,dt,F.COLOR_BUFFER_BIT,F.NEAREST):pn?F.copyTexSubImage3D(ae,ht,Wt,ue,Te+mn,Ct,Dt,gt,dt):F.copyTexSubImage2D(ae,ht,Wt,ue,Ct,Dt,gt,dt);Et.bindFramebuffer(F.READ_FRAMEBUFFER,null),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else pn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(ae,ht,Wt,ue,Te,gt,dt,vt,pe,Pt,Ae.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(ae,ht,Wt,ue,Te,gt,dt,vt,pe,Ae.data):F.texSubImage3D(ae,ht,Wt,ue,Te,gt,dt,vt,pe,Pt,Ae):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ht,Wt,ue,gt,dt,pe,Pt,Ae.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ht,Wt,ue,Ae.width,Ae.height,pe,Ae.data):F.texSubImage2D(F.TEXTURE_2D,ht,Wt,ue,gt,dt,pe,Pt,Ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,Jt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_s),F.pixelStorei(F.UNPACK_SKIP_ROWS,En),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ao),ht===0&&H.generateMipmaps&&F.generateMipmap(ae),Et.unbindTexture()},this.initRenderTarget=function(A){S.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),Et.unbindTexture()},this.resetState=function(){R=0,I=0,L=null,Et.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class $n{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const n=this.elements,i=t.x,o=t.y,r=t.z;return e.x=n[0]*i+n[1]*o+n[2]*r,e.y=n[3]*i+n[4]*o+n[5]*r,e.z=n[6]*i+n[7]*o+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new $n);const n=this.elements,i=t.elements,o=e.elements,r=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],m=n[8],x=i[0],g=i[1],p=i[2],v=i[3],y=i[4],M=i[5],b=i[6],T=i[7],C=i[8];return o[0]=r*x+a*v+l*b,o[1]=r*g+a*y+l*T,o[2]=r*p+a*M+l*C,o[3]=c*x+h*v+d*b,o[4]=c*g+h*y+d*T,o[5]=c*p+h*M+d*C,o[6]=u*x+f*v+m*b,o[7]=u*g+f*y+m*T,o[8]=u*p+f*M+m*C,e}scale(t,e){e===void 0&&(e=new $n);const n=this.elements,i=e.elements;for(let o=0;o!==3;o++)i[3*o+0]=t.x*n[3*o+0],i[3*o+1]=t.y*n[3*o+1],i[3*o+2]=t.z*n[3*o+2];return e}solve(t,e){e===void 0&&(e=new E);const n=3,i=4,o=[];let r,a;for(r=0;r<n*i;r++)o.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)o[r+i*a]=this.elements[r+3*a];o[3]=t.x,o[7]=t.y,o[11]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(r=c-l,o[r+i*r]===0){for(a=r+1;a<c;a++)if(o[r+i*a]!==0){h=d;do u=d-h,o[u+i*r]+=o[u+i*a];while(--h);break}}if(o[r+i*r]!==0)for(a=r+1;a<c;a++){const f=o[r+i*a]/o[r+i*r];h=d;do u=d-h,o[u+i*a]=u<=r?0:o[u+i*a]-o[u+i*r]*f;while(--h)}}while(--l);if(e.z=o[2*i+3]/o[2*i+2],e.y=(o[1*i+3]-o[1*i+2]*e.z)/o[1*i+1],e.x=(o[0*i+3]-o[0*i+2]*e.z-o[0*i+1]*e.y)/o[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new $n);const e=3,n=6,i=ey;let o,r;for(o=0;o<3;o++)for(r=0;r<3;r++)i[o+n*r]=this.elements[o+3*r];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const h=n;let d;do{if(o=l-a,i[o+n*o]===0){for(r=o+1;r<l;r++)if(i[o+n*r]!==0){c=h;do d=h-c,i[d+n*o]+=i[d+n*r];while(--c);break}}if(i[o+n*o]!==0)for(r=o+1;r<l;r++){const u=i[o+n*r]/i[o+n*o];c=h;do d=h-c,i[d+n*r]=d<=o?0:i[d+n*r]-i[d+n*o]*u;while(--c)}}while(--a);o=2;do{r=o-1;do{const u=i[o+n*r]/i[o+n*o];c=n;do d=n-c,i[d+n*r]=i[d+n*r]-i[d+n*o]*u;while(--c)}while(r--)}while(--o);o=2;do{const u=1/i[o+n*o];c=n;do d=n-c,i[d+n*o]=i[d+n*o]*u;while(--c)}while(o--);o=2;do{r=2;do{if(d=i[e+r+n*o],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(o,r,d)}while(r--)}while(o--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,o=t.w,r=e+e,a=n+n,l=i+i,c=e*r,h=e*a,d=e*l,u=n*a,f=n*l,m=i*l,x=o*r,g=o*a,p=o*l,v=this.elements;return v[0]=1-(u+m),v[1]=h-p,v[2]=d+g,v[3]=h+p,v[4]=1-(c+m),v[5]=f-x,v[6]=d-g,v[7]=f+x,v[8]=1-(c+u),this}transpose(t){t===void 0&&(t=new $n);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const ey=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,o=t.z,r=this.x,a=this.y,l=this.z;return e.x=a*o-l*i,e.y=l*n-r*o,e.z=r*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new $n([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const o=1/i;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new E);const e=this.x,n=this.y,i=this.z;let o=Math.sqrt(e*e+n*n+i*i);return o>0?(o=1/o,t.x=e*o,t.y=n*o,t.z=i*o):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z;return Math.sqrt((o-e)*(o-e)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z;return(o-e)*(o-e)+(r-n)*(r-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new E);const n=this.x,i=this.y,o=this.z;return e.x=t*n,e.y=t*i,e.z=t*o,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new E),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=ny,o=1/n;i.set(this.x*o,this.y*o,this.z*o);const r=iy;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,o=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=o+(t.y-o)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Ru),Ru.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const ny=new E,iy=new E,Ru=new E;class Pn{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const o=this.lowerBound,r=this.upperBound,a=n;o.copy(t[0]),a&&a.vmult(o,o),r.copy(o);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Pu),c=Pu),c.x>r.x&&(r.x=c.x),c.x<o.x&&(o.x=c.x),c.y>r.y&&(r.y=c.y),c.y<o.y&&(o.y=c.y),c.z>r.z&&(r.z=c.z),c.z<o.z&&(o.z=c.z)}return e&&(e.vadd(o,o),e.vadd(r,r)),i&&(o.x-=i,o.y-=i,o.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Pn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,o=t.upperBound,r=i.x<=n.x&&n.x<=o.x||e.x<=o.x&&o.x<=n.x,a=i.y<=n.y&&n.y<=o.y||e.y<=o.y&&o.y<=n.y,l=i.z<=n.z&&n.z<=o.z||e.z<=o.z&&o.z<=n.z;return r&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,o=t.upperBound;return e.x<=i.x&&n.x>=o.x&&e.y<=i.y&&n.y>=o.y&&e.z<=i.z&&n.z>=o.z}getCorners(t,e,n,i,o,r,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),o.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=zu,i=n[0],o=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,o,r,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=zu,i=n[0],o=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,o,r,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,o=1/e.y,r=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*o,h=(this.upperBound.y-n.y)*o,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(m<0||f>m)}}const Pu=new E,zu=[new E,new E,new E,new E,new E,new E,new E,new E];class Lu{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const o=i;i=n,n=o}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:o}=e;if(o>i){const r=o;o=i,i=r}this.matrix[(i*(i+1)>>1)+o-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Zf{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,o=n.length;i<o;i++)n[i].call(this,t)}return this}}class ke{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=sy,i=oy;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ke);const n=this.x,i=this.y,o=this.z,r=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+r*a+i*c-o*l,e.y=i*h+r*l+o*a-n*c,e.z=o*h+r*c+n*l-i*a,e.w=r*h-n*a-i*l-o*c,e}inverse(t){t===void 0&&(t=new ke);const e=this.x,n=this.y,i=this.z,o=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+o*o);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new ke),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,o=t.z,r=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*o-l*i,d=c*i+l*n-r*o,u=c*o+r*i-a*n,f=-r*n-a*i-l*o;return e.x=h*c+f*-r+d*-l-u*-a,e.y=d*c+f*-a+u*-r-h*-l,e.z=u*c+f*-l+h*-a-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,o;const r=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=r*a+l*c;if(h>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,o=0),h<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,o=0),n===void 0){const d=r*r,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*r*l,1-2*u-2*f),i=Math.asin(2*h),o=Math.atan2(2*r*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=o}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const o=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*a+o*c*h,this.y=o*c*a-l*r*h,this.z=o*r*h+l*c*a,this.w=o*r*a-l*c*h):i==="YXZ"?(this.x=l*r*a+o*c*h,this.y=o*c*a-l*r*h,this.z=o*r*h-l*c*a,this.w=o*r*a+l*c*h):i==="ZXY"?(this.x=l*r*a-o*c*h,this.y=o*c*a+l*r*h,this.z=o*r*h+l*c*a,this.w=o*r*a-l*c*h):i==="ZYX"?(this.x=l*r*a-o*c*h,this.y=o*c*a+l*r*h,this.z=o*r*h-l*c*a,this.w=o*r*a+l*c*h):i==="YZX"?(this.x=l*r*a+o*c*h,this.y=o*c*a+l*r*h,this.z=o*r*h-l*c*a,this.w=o*r*a-l*c*h):i==="XZY"&&(this.x=l*r*a-o*c*h,this.y=o*c*a-l*r*h,this.z=o*r*h+l*c*a,this.w=o*r*a+l*c*h),this}clone(){return new ke(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new ke);const i=this.x,o=this.y,r=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,m,x,g;return f=i*l+o*c+r*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),m=Math.sin(u),x=Math.sin((1-e)*u)/m,g=Math.sin(e*u)/m):(x=1-e,g=e),n.x=x*i+g*l,n.y=x*o+g*c,n.z=x*r+g*h,n.w=x*a+g*d,n}integrate(t,e,n,i){i===void 0&&(i=new ke);const o=t.x*n.x,r=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(o*d+r*h-a*c),i.y+=u*(r*d+a*l-o*h),i.z+=u*(a*d+o*c-r*l),i.w+=u*(-o*l-r*c-a*h),i}}const sy=new E,oy=new E,ry={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Mt{constructor(t){t===void 0&&(t={}),this.id=Mt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Mt.idCounter=0;Mt.types=ry;class ee{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new ke,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ee.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ee.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),n.vsub(t,i),e.conjugate(Du),Du.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new E),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Du=new ke;class Fo extends Mt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:o,boundingSphereRadius:r}=t;super({type:Mt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new E;for(let o=0;o!==t.length;o++){const r=t[o],a=r.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[r[l]].vsub(e[r[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],o=this.vertices[n[1]],r=this.vertices[n[2]];Fo.computeNormal(i,o,r,e)}static computeNormal(t,e,n,i){const o=new E,r=new E;e.vsub(t,r),n.vsub(e,o),o.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,o,r,a,l,c){const h=new E;let d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),o.vmult(h,h);const x=h.dot(r);x>u&&(u=x,d=m)}const f=[];for(let m=0;m<n.faces[d].length;m++){const x=n.vertices[n.faces[d][m]],g=new E;g.copy(x),o.vmult(g,g),i.vadd(g,g),f.push(g)}d>=0&&this.clipFaceAgainstHull(r,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,o,r,a,l){const c=new E,h=new E,d=new E,u=new E,f=new E,m=new E;let x=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],c);const v=g.testSepAxis(c,t,e,n,i,o);if(v===!1)return!1;v<x&&(x=v,r.copy(c))}else{const p=a?a.length:g.faces.length;for(let v=0;v<p;v++){const y=a?a[v]:v;c.copy(g.faceNormals[y]),n.vmult(c,c);const M=g.testSepAxis(c,t,e,n,i,o);if(M===!1)return!1;M<x&&(x=M,r.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){o.vmult(t.uniqueAxes[p],h);const v=g.testSepAxis(h,t,e,n,i,o);if(v===!1)return!1;v<x&&(x=v,r.copy(h))}else{const p=l?l.length:t.faces.length;for(let v=0;v<p;v++){const y=l?l[v]:v;h.copy(t.faceNormals[y]),o.vmult(h,h);const M=g.testSepAxis(h,t,e,n,i,o);if(M===!1)return!1;M<x&&(x=M,r.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(o.vmult(t.uniqueEdges[v],f),u.cross(f,m),!m.almostZero()){m.normalize();const y=g.testSepAxis(m,t,e,n,i,o);if(y===!1)return!1;y<x&&(x=y,r.copy(m))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,o,r){const a=this;Fo.project(a,t,n,i,tl),Fo.project(e,t,o,r,el);const l=tl[0],c=tl[1],h=el[0],d=el[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new E,i=new E;this.computeLocalAABB(i,n);const o=n.x-i.x,r=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*o*2*o+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*o*2*o)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,o,r,a){const l=new E,c=new E,h=new E,d=new E,u=new E,f=new E,m=new E,x=new E,g=this,p=[],v=i,y=p;let M=-1,b=Number.MAX_VALUE;for(let w=0;w<g.faces.length;w++){l.copy(g.faceNormals[w]),n.vmult(l,l);const R=l.dot(t);R<b&&(b=R,M=w)}if(M<0)return;const T=g.faces[M];T.connectedFaces=[];for(let w=0;w<g.faces.length;w++)for(let R=0;R<g.faces[w].length;R++)T.indexOf(g.faces[w][R])!==-1&&w!==M&&T.connectedFaces.indexOf(w)===-1&&T.connectedFaces.push(w);const C=T.length;for(let w=0;w<C;w++){const R=g.vertices[T[w]],I=g.vertices[T[(w+1)%C]];R.vsub(I,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(R),n.vmult(f,f),e.vadd(f,f);const L=T.connectedFaces[w];m.copy(this.faceNormals[L]);const O=this.getPlaneConstantOfFace(L);x.copy(m),n.vmult(x,x);const U=O-x.dot(e);for(this.clipFaceAgainstPlane(v,y,x,U);v.length;)v.shift();for(;y.length;)v.push(y.shift())}m.copy(this.faceNormals[M]);const z=this.getPlaneConstantOfFace(M);x.copy(m),n.vmult(x,x);const _=z-x.dot(e);for(let w=0;w<v.length;w++){let R=x.dot(v[w])+_;if(R<=o&&(console.log(`clamped: depth=${R} to minDist=${o}`),R=o),R<=r){const I=v[w];if(R<=1e-6){const L={point:I,normal:x,depth:R};a.push(L)}}}}clipFaceAgainstPlane(t,e,n,i){let o,r;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];o=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],r=n.dot(c)+i,o<0)if(r<0){const d=new E;d.copy(c),e.push(d)}else{const d=new E;l.lerp(c,o/(o-r),d),e.push(d)}else if(r<0){const d=new E;l.lerp(c,o/(o-r),d),e.push(d),e.push(c)}l=c,o=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,i=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)e.vmult(n[o],i[o]),t.vadd(i[o],i[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const o=n[i];o.x<t.x?t.x=o.x:o.x>e.x&&(e.x=o.x),o.y<t.y?t.y=o.y:o.y>e.y&&(e.y=o.y),o.z<t.z?t.z=o.z:o.z>e.z&&(e.z=o.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const n=this.faceNormals,i=this.worldFaceNormals;for(let o=0;o!==e;o++)t.vmult(n[o],i[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const o=this.vertices;let r,a,l,c,h,d,u=new E;for(let f=0;f<o.length;f++){u.copy(o[f]),e.vmult(u,u),t.vadd(u,u);const m=u;(r===void 0||m.x<r)&&(r=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(r,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let o=0;o<n;o++){const r=i[o];e.vmult(r,r)}for(let o=0;o<this.faceNormals.length;o++){const r=this.faceNormals[o];e.vmult(r,r)}}if(t)for(let o=0;o<n;o++){const r=i[o];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,o=new E;this.getAveragePointLocal(o);for(let r=0;r<this.faces.length;r++){let a=i[r];const l=e[n[r][0]],c=new E;t.vsub(l,c);const h=a.dot(c),d=new E;o.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,o){const r=t.vertices.length,a=ay;let l=0,c=0;const h=ly,d=t.vertices;h.setZero(),ee.vectorToLocalFrame(n,i,e,a),ee.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<r;f++){const m=d[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}o[0]=l,o[1]=c}}const tl=[],el=[];new E;const ay=new E,ly=new E;class ga extends Mt{constructor(t){super({type:Mt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=E,o=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Fo({vertices:o,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),ga.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let o=0;o!==n.length;o++)e.vmult(n[o],n[o]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,o=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<o.length;r++)Ui.set(o[r][0],o[r][1],o[r][2]),e.vmult(Ui,Ui),t.vadd(Ui,Ui),n(Ui.x,Ui.y,Ui.z)}calculateWorldAABB(t,e,n,i){const o=this.halfExtents;Jn[0].set(o.x,o.y,o.z),Jn[1].set(-o.x,o.y,o.z),Jn[2].set(-o.x,-o.y,o.z),Jn[3].set(-o.x,-o.y,-o.z),Jn[4].set(o.x,-o.y,-o.z),Jn[5].set(o.x,o.y,-o.z),Jn[6].set(-o.x,o.y,-o.z),Jn[7].set(o.x,-o.y,o.z);const r=Jn[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const l=Jn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Ui=new E,Jn=[new E,new E,new E,new E,new E,new E,new E,new E],ih={DYNAMIC:1,STATIC:2,KINEMATIC:4},sh={AWAKE:0,SLEEPY:1,SLEEPING:2};class _t extends Zf{constructor(t){t===void 0&&(t={}),super(),this.id=_t.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?_t.STATIC:_t.DYNAMIC,typeof t.type==typeof _t.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=_t.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new ke,this.initQuaternion=new ke,this.previousQuaternion=new ke,this.interpolatedQuaternion=new ke,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new $n,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new $n,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Pn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=_t.AWAKE,this.wakeUpAfterNarrowphase=!1,t===_t.SLEEPING&&this.dispatchEvent(_t.wakeupEvent)}sleep(){this.sleepState=_t.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===_t.AWAKE&&n<i?(this.sleepState=_t.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(_t.sleepyEvent)):e===_t.SLEEPY&&n>i?this.wakeUp():e===_t.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(_t.sleepEvent))}}updateSolveMassProperties(){this.sleepState===_t.SLEEPING||this.type===_t.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new E,o=new ke;return e&&i.copy(e),n&&o.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let o=0;o!==n;o++){const r=t[o];r.updateBoundingSphereRadius();const a=e[o].length(),l=r.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,o=cy,r=hy,a=this.quaternion,l=this.aabb,c=uy;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],o),o.vadd(this.position,o),a.mult(n[h],r),d.calculateWorldAABB(o,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=dy,i=fy;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==_t.DYNAMIC)return;this.sleepState===_t.SLEEPING&&this.wakeUp();const n=py;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==_t.DYNAMIC)return;const n=my,i=gy;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===_t.DYNAMIC&&(this.sleepState===_t.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==_t.DYNAMIC)return;this.sleepState===_t.SLEEPING&&this.wakeUp();const n=e,i=xy;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const o=vy;n.cross(t,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==_t.DYNAMIC)return;const n=_y,i=yy;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=My;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ga.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===_t.DYNAMIC||this.type===_t.KINEMATIC)||this.sleepState===_t.SLEEPING)return;const i=this.velocity,o=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const m=d.elements,x=this.angularFactor,g=l.x*x.x,p=l.y*x.y,v=l.z*x.z;o.x+=t*(m[0]*g+m[1]*p+m[2]*v),o.y+=t*(m[3]*g+m[4]*p+m[5]*v),o.z+=t*(m[6]*g+m[7]*p+m[8]*v),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}_t.idCounter=0;_t.COLLIDE_EVENT_NAME="collide";_t.DYNAMIC=ih.DYNAMIC;_t.STATIC=ih.STATIC;_t.KINEMATIC=ih.KINEMATIC;_t.AWAKE=sh.AWAKE;_t.SLEEPY=sh.SLEEPY;_t.SLEEPING=sh.SLEEPING;_t.wakeupEvent={type:"wakeup"};_t.sleepyEvent={type:"sleepy"};_t.sleepEvent={type:"sleep"};const cy=new E,hy=new ke,uy=new Pn,dy=new $n,fy=new $n;new $n;const py=new E,my=new E,gy=new E,xy=new E,vy=new E,_y=new E,yy=new E,My=new E;class Kf{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&_t.STATIC)!==0||t.sleepState===_t.SLEEPING)&&((e.type&_t.STATIC)!==0||e.sleepState===_t.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const o=Sy;e.position.vsub(t.position,o);const r=(t.boundingRadius+e.boundingRadius)**2;o.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=wy,i=by,o=Ey,r=t.length;for(let a=0;a!==r;a++)i[a]=t[a],o[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){const l=i[a].id,c=o[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(o[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new E;t.position.vsub(e.position,n);const i=t.shapes[0],o=e.shapes[0];return Math.pow(i.boundingSphereRadius+o.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Sy=new E;new E;new ke;new E;const wy={keys:[]},by=[],Ey=[];new E;new E;new E;class Ty extends Kf{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,o=i.length;let r,a;for(let l=0;l!==o;l++)for(let c=0;c!==l;c++)r=i[l],a=i[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const o=t.bodies[i];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(e)&&n.push(o)}return n}}class oa{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,o,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=o,this.body=r,this.distance=a}}let Jf,Qf,tp,ep,np,ip,sp;const oh={CLOSEST:1,ANY:2,ALL:4};Jf=Mt.types.SPHERE;Qf=Mt.types.PLANE;tp=Mt.types.BOX;ep=Mt.types.CYLINDER;np=Mt.types.CONVEXPOLYHEDRON;ip=Mt.types.HEIGHTFIELD;sp=Mt.types.TRIMESH;class Oe{get[Jf](){return this._intersectSphere}get[Qf](){return this._intersectPlane}get[tp](){return this._intersectBox}get[ep](){return this._intersectConvex}get[np](){return this._intersectConvex}get[ip](){return this._intersectHeightfield}get[sp](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Oe.ANY,this.result=new oa,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Oe.ANY,this.result=e.result||new oa,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Iu),nl.length=0,t.broadphase.aabbQuery(t,Iu,nl),this.intersectBodies(nl),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=Ay,o=Cy;for(let r=0,a=t.shapes.length;r<a;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],o),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,o,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const o=this.from;if(Vy(o,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,o){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,o)}_intersectPlane(t,e,n,i,o){const r=this.from,a=this.to,l=this.direction,c=new E(0,0,1);e.vmult(c,c);const h=new E;r.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||r.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new E,x=new E,g=new E;r.vsub(n,m);const p=-c.dot(m)/f;l.scale(p,x),r.vadd(x,g),this.reportIntersection(c,g,o,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,o=this.from;e.x=Math.min(i.x,o.x),e.y=Math.min(i.y,o.y),e.z=Math.min(i.z,o.z),n.x=Math.max(i.x,o.x),n.y=Math.max(i.y,o.y),n.z=Math.max(i.z,o.z)}_intersectHeightfield(t,e,n,i,o){t.data,t.elementSize;const r=Ry;r.from.copy(this.from),r.to.copy(this.to),ee.pointToLocalFrame(n,e,r.from,r.from),ee.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const a=Py;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Pn;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let m=c;m<d;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(f,m,!1),ee.pointToWorldFrame(n,e,t.pillarOffset,wr),this._intersectConvex(t.pillarConvex,e,wr,i,o,Nu),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),ee.pointToWorldFrame(n,e,t.pillarOffset,wr),this._intersectConvex(t.pillarConvex,e,wr,i,o,Nu)}}}_intersectSphere(t,e,n,i,o){const r=this.from,a=this.to,l=t.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,u=h**2-4*c*d,f=zy,m=Ly;if(!(u<0))if(u===0)r.lerp(a,u,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,o,i,-1);else{const x=(-h-Math.sqrt(u))/(2*c),g=(-h+Math.sqrt(u))/(2*c);if(x>=0&&x<=1&&(r.lerp(a,x,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,o,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(r.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,o,i,-1))}}_intersectConvex(t,e,n,i,o,r){const a=Dy,l=Fu,c=r&&r.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,m=this.from,x=this.to,g=m.distanceTo(x),p=c?c.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<p;y++){const M=c?c[y]:y,b=h[M],T=u[M],C=e,z=n;l.copy(d[b[0]]),C.vmult(l,l),l.vadd(z,l),l.vsub(m,l),C.vmult(T,a);const _=f.dot(a);if(Math.abs(_)<this.precision)continue;const w=a.dot(l)/_;if(!(w<0)){f.scale(w,gn),gn.vadd(m,gn),Vn.copy(d[b[0]]),C.vmult(Vn,Vn),z.vadd(Vn,Vn);for(let R=1;!v.shouldStop&&R<b.length-1;R++){Qn.copy(d[b[R]]),ti.copy(d[b[R+1]]),C.vmult(Qn,Qn),C.vmult(ti,ti),z.vadd(Qn,Qn),z.vadd(ti,ti);const I=gn.distanceTo(m);!(Oe.pointInTriangle(gn,Vn,Qn,ti)||Oe.pointInTriangle(gn,Qn,Vn,ti))||I>g||this.reportIntersection(a,gn,o,i,M)}}}}_intersectTrimesh(t,e,n,i,o,r){const a=Iy,l=ky,c=Hy,h=Fu,d=Ny,u=Fy,f=Uy,m=By,x=Oy,g=t.indices;t.vertices;const p=this.from,v=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),ee.vectorToLocalFrame(n,e,y,d),ee.pointToLocalFrame(n,e,p,u),ee.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const M=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let b=0,T=l.length;!this.result.shouldStop&&b!==T;b++){const C=l[b];t.getNormal(C,a),t.getVertex(g[C*3],Vn),Vn.vsub(u,h);const z=d.dot(a),_=a.dot(h)/z;if(_<0)continue;d.scale(_,gn),gn.vadd(u,gn),t.getVertex(g[C*3+1],Qn),t.getVertex(g[C*3+2],ti);const w=gn.distanceSquared(u);!(Oe.pointInTriangle(gn,Qn,Vn,ti)||Oe.pointInTriangle(gn,Vn,Qn,ti))||w>M||(ee.vectorToWorldFrame(e,a,x),ee.pointToWorldFrame(n,e,gn,m),this.reportIntersection(x,m,o,i,C))}l.length=0}reportIntersection(t,e,n,i,o){const r=this.from,a=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case Oe.ALL:this.hasHit=!0,c.set(r,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Oe.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,i,l));break;case Oe.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ls),n.vsub(e,xo),t.vsub(e,il);const o=ls.dot(ls),r=ls.dot(xo),a=ls.dot(il),l=xo.dot(xo),c=xo.dot(il);let h,d;return(h=l*a-r*c)>=0&&(d=o*c-r*a)>=0&&h+d<o*l-r*r}}Oe.CLOSEST=oh.CLOSEST;Oe.ANY=oh.ANY;Oe.ALL=oh.ALL;const Iu=new Pn,nl=[],xo=new E,il=new E,Ay=new E,Cy=new ke,gn=new E,Vn=new E,Qn=new E,ti=new E;new E;new oa;const Nu={faceList:[0]},wr=new E,Ry=new Oe,Py=[],zy=new E,Ly=new E,Dy=new E;new E;new E;const Fu=new E,Iy=new E,Ny=new E,Fy=new E,Uy=new E,Oy=new E,By=new E;new Pn;const ky=[],Hy=new ee,ls=new E,br=new E;function Vy(s,t,e){e.vsub(s,ls);const n=ls.dot(t);return t.scale(n,br),br.vadd(s,br),e.distanceTo(br)}class js extends Kf{static checkBounds(t,e,n){let i,o;n===0?(i=t.position.x,o=e.position.x):n===1?(i=t.position.y,o=e.position.y):n===2&&(i=t.position.z,o=e.position.z);const r=t.boundingRadius,a=e.boundingRadius,l=i+r;return o-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.x<=i.aabb.lowerBound.x);o--)t[o+1]=t[o];t[o+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.y<=i.aabb.lowerBound.y);o--)t[o+1]=t[o];t[o+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.z<=i.aabb.lowerBound.z);o--)t[o+1]=t[o];t[o+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,o=i.length,r=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==o;a++){const c=i[a];for(l=a+1;l<o;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!js.checkBounds(c,h,r))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const o=t[i];o.aabbNeedsUpdate&&o.updateAABB()}e===0?js.insertionSortX(t):e===1?js.insertionSortY(t):e===2&&js.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,o=0,r=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const m=a[f],x=m.position.x;t+=x,e+=x*x;const g=m.position.y;n+=g,i+=g*g;const p=m.position.z;o+=p,r+=p*p}const h=e-t*t*c,d=i-n*n*c,u=r-o*o*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let o="x";i===1&&(o="y"),i===2&&(o="z");const r=this.axisList;e.lowerBound[o],e.upperBound[o];for(let a=0;a<r.length;a++){const l=r[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class Gy{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Uu{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Zo{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Zo.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Uu,this.jacobianElementB=new Uu,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,o=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*o*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),o=this.computeGq(),r=this.computeGiMf();return-o*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,o=n.position,r=i.position;return t.spatial.dot(o)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,o=n.velocity,r=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(o,a)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,o=n.vlambda,r=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(o,a)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,o=n.force,r=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return o.scale(c,Ou),a.scale(h,Bu),n.invInertiaWorldSolve.vmult(r,ku),i.invInertiaWorldSolve.vmult(l,Hu),t.multiplyVectors(Ou,ku)+e.multiplyVectors(Bu,Hu)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,o=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=o+r;return a.vmult(t.rotational,Er),c+=Er.dot(t.rotational),l.vmult(e.rotational,Er),c+=Er.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,o=this.bj,r=Wy;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),o.vlambda.addScaledVector(o.invMassSolve*t,n.spatial,o.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),o.invInertiaWorldSolve.vmult(n.rotational,r),o.wlambda.addScaledVector(t,r,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Zo.idCounter=0;const Ou=new E,Bu=new E,ku=new E,Hu=new E,Er=new E,Wy=new E;class Xy extends Zo{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,n=this.b,i=this.bi,o=this.bj,r=this.ri,a=this.rj,l=qy,c=Yy,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=o.velocity,f=o.angularVelocity;o.force,o.torque;const m=jy,x=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;r.cross(p,l),a.cross(p,c),p.negate(x.spatial),l.negate(x.rotational),g.spatial.copy(p),g.rotational.copy(c),m.copy(o.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(r,m);const v=p.dot(m),y=this.restitution+1,M=y*u.dot(p)-y*h.dot(p)+f.dot(c)-d.dot(l),b=this.computeGiMf();return-v*e-M*n-t*b}getImpactVelocityAlongNormal(){const t=$y,e=Zy,n=Ky,i=Jy,o=Qy;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,o),this.ni.dot(o)}}const qy=new E,Yy=new E,jy=new E,$y=new E,Zy=new E,Ky=new E,Jy=new E,Qy=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Vu extends Zo{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,o=t1,r=e1,a=this.t;n.cross(a,o),i.cross(a,r);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),o.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const t1=new E,e1=new E;class Ko{constructor(t,e,n){n=Gy.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ko.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Ko.idCounter=0;class Jo{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Jo.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Jo.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Oe;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Pn;new E;new Pn;new E;new E;new E;new E;new E;new E;new E;new Pn;new E;new ee;new Pn;class n1{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class i1 extends n1{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,o=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=e.bodies,c=l.length,h=t;let d,u,f,m,x,g;if(a!==0)for(let M=0;M!==c;M++)l[M].updateSolveMassProperties();const p=o1,v=r1,y=s1;p.length=a,v.length=a,y.length=a;for(let M=0;M!==a;M++){const b=r[M];y[M]=0,v[M]=b.computeB(h),p[M]=1/b.computeC()}if(a!==0){for(let T=0;T!==c;T++){const C=l[T],z=C.vlambda,_=C.wlambda;z.set(0,0,0),_.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let T=0;T!==a;T++){const C=r[T];d=v[T],u=p[T],g=y[T],x=C.computeGWlambda(),f=u*(d-x-C.eps*g),g+f<C.minForce?f=C.minForce-g:g+f>C.maxForce&&(f=C.maxForce-g),y[T]+=f,m+=f>0?f:-f,C.addToWlambda(f)}if(m*m<o)break}for(let T=0;T!==c;T++){const C=l[T],z=C.velocity,_=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),z.vadd(C.vlambda,z),C.wlambda.vmul(C.angularFactor,C.wlambda),_.vadd(C.wlambda,_)}let M=r.length;const b=1/h;for(;M--;)r[M].multiplier=y[M]*b}return n}}const s1=[],o1=[],r1=[];class a1{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class l1 extends a1{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const _e={sphereSphere:Mt.types.SPHERE,spherePlane:Mt.types.SPHERE|Mt.types.PLANE,boxBox:Mt.types.BOX|Mt.types.BOX,sphereBox:Mt.types.SPHERE|Mt.types.BOX,planeBox:Mt.types.PLANE|Mt.types.BOX,convexConvex:Mt.types.CONVEXPOLYHEDRON,sphereConvex:Mt.types.SPHERE|Mt.types.CONVEXPOLYHEDRON,planeConvex:Mt.types.PLANE|Mt.types.CONVEXPOLYHEDRON,boxConvex:Mt.types.BOX|Mt.types.CONVEXPOLYHEDRON,sphereHeightfield:Mt.types.SPHERE|Mt.types.HEIGHTFIELD,boxHeightfield:Mt.types.BOX|Mt.types.HEIGHTFIELD,convexHeightfield:Mt.types.CONVEXPOLYHEDRON|Mt.types.HEIGHTFIELD,sphereParticle:Mt.types.PARTICLE|Mt.types.SPHERE,planeParticle:Mt.types.PLANE|Mt.types.PARTICLE,boxParticle:Mt.types.BOX|Mt.types.PARTICLE,convexParticle:Mt.types.PARTICLE|Mt.types.CONVEXPOLYHEDRON,cylinderCylinder:Mt.types.CYLINDER,sphereCylinder:Mt.types.SPHERE|Mt.types.CYLINDER,planeCylinder:Mt.types.PLANE|Mt.types.CYLINDER,boxCylinder:Mt.types.BOX|Mt.types.CYLINDER,convexCylinder:Mt.types.CONVEXPOLYHEDRON|Mt.types.CYLINDER,heightfieldCylinder:Mt.types.HEIGHTFIELD|Mt.types.CYLINDER,particleCylinder:Mt.types.PARTICLE|Mt.types.CYLINDER,sphereTrimesh:Mt.types.SPHERE|Mt.types.TRIMESH,planeTrimesh:Mt.types.PLANE|Mt.types.TRIMESH};class c1{get[_e.sphereSphere](){return this.sphereSphere}get[_e.spherePlane](){return this.spherePlane}get[_e.boxBox](){return this.boxBox}get[_e.sphereBox](){return this.sphereBox}get[_e.planeBox](){return this.planeBox}get[_e.convexConvex](){return this.convexConvex}get[_e.sphereConvex](){return this.sphereConvex}get[_e.planeConvex](){return this.planeConvex}get[_e.boxConvex](){return this.boxConvex}get[_e.sphereHeightfield](){return this.sphereHeightfield}get[_e.boxHeightfield](){return this.boxHeightfield}get[_e.convexHeightfield](){return this.convexHeightfield}get[_e.sphereParticle](){return this.sphereParticle}get[_e.planeParticle](){return this.planeParticle}get[_e.boxParticle](){return this.boxParticle}get[_e.convexParticle](){return this.convexParticle}get[_e.cylinderCylinder](){return this.convexConvex}get[_e.sphereCylinder](){return this.sphereConvex}get[_e.planeCylinder](){return this.planeConvex}get[_e.boxCylinder](){return this.boxConvex}get[_e.convexCylinder](){return this.convexConvex}get[_e.heightfieldCylinder](){return this.heightfieldCylinder}get[_e.particleCylinder](){return this.particleCylinder}get[_e.sphereTrimesh](){return this.sphereTrimesh}get[_e.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l1,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,o,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Xy(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=o||n,a.sj=r||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,o=t.si,r=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=o.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,x=m.length?m.pop():new Vu(n,i,u*f),g=m.length?m.pop():new Vu(n,i,u*f);return x.bi=g.bi=n,x.bj=g.bj=i,x.minForce=g.minForce=-u*f,x.maxForce=g.maxForce=u*f,x.ri.copy(t.ri),x.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(x.t,g.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=g.enabled=t.enabled,e.push(x,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ns.setZero(),Ns.setZero(),Fs.setZero();const o=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==o?(ns.vadd(e.ni,ns),Ns.vadd(e.ri,Ns),Fs.vadd(e.rj,Fs)):(ns.vsub(e.ni,ns),Ns.vadd(e.rj,Ns),Fs.vadd(e.ri,Fs));const r=1/t;Ns.scale(r,n.ri),Fs.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ns.normalize(),ns.tangents(n.t,i.t)}getContacts(t,e,n,i,o,r,a){this.contactPointPool=o,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const l=d1,c=f1,h=h1,d=u1;for(let u=0,f=t.length;u!==f;u++){const m=t[u],x=e[u];let g=null;m.material&&x.material&&(g=n.getContactMaterial(m.material,x.material)||null);const p=m.type&_t.KINEMATIC&&x.type&_t.STATIC||m.type&_t.STATIC&&x.type&_t.KINEMATIC||m.type&_t.KINEMATIC&&x.type&_t.KINEMATIC;for(let v=0;v<m.shapes.length;v++){m.quaternion.mult(m.shapeOrientations[v],l),m.quaternion.vmult(m.shapeOffsets[v],h),h.vadd(m.position,h);const y=m.shapes[v];for(let M=0;M<x.shapes.length;M++){x.quaternion.mult(x.shapeOrientations[M],c),x.quaternion.vmult(x.shapeOffsets[M],d),d.vadd(x.position,d);const b=x.shapes[M];if(!(y.collisionFilterMask&b.collisionFilterGroup&&b.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+b.boundingSphereRadius)continue;let T=null;y.material&&b.material&&(T=n.getContactMaterial(y.material,b.material)||null),this.currentContactMaterial=T||g||n.defaultContactMaterial;const C=y.type|b.type,z=this[C];if(z){let _=!1;y.type<b.type?_=z.call(this,y,b,h,d,l,c,m,x,y,b,p):_=z.call(this,b,y,d,h,c,l,x,m,y,b,p),_&&p&&(n.shapeOverlapKeeper.set(y.id,b.id),n.bodyOverlapKeeper.set(m.id,x.id))}}}}}sphereSphere(t,e,n,i,o,r,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,o,r,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Tr),u.ni.scale(u.ni.dot(Tr),Gu),Tr.vsub(Gu,u.rj),-Tr.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,m=u.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(l.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,o,r,a,l,t,e,d)}sphereBox(t,e,n,i,o,r,a,l,c,h,d){const u=this.v3pool,f=B1;n.vsub(i,Ar),e.getSideNormals(f,r);const m=t.radius;let x=!1;const g=H1,p=V1,v=G1;let y=null,M=0,b=0,T=0,C=null;for(let N=0,V=f.length;N!==V&&x===!1;N++){const W=F1;W.copy(f[N]);const Z=W.length();W.normalize();const tt=Ar.dot(W);if(tt<Z+m&&tt>0){const st=U1,ot=O1;st.copy(f[(N+1)%3]),ot.copy(f[(N+2)%3]);const Nt=st.length(),he=ot.length();st.normalize(),ot.normalize();const se=Ar.dot(st),$=Ar.dot(ot);if(se<Nt&&se>-Nt&&$<he&&$>-he){const Q=Math.abs(tt-Z-m);if((C===null||Q<C)&&(C=Q,b=se,T=$,y=Z,g.copy(W),p.copy(st),v.copy(ot),M++,d))return!0}}}if(M){x=!0;const N=this.createContactEquation(a,l,t,e,c,h);g.scale(-m,N.ri),N.ni.copy(g),N.ni.negate(N.ni),g.scale(y,g),p.scale(b,p),g.vadd(p,g),v.scale(T,v),g.vadd(v,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let z=u.get();const _=k1;for(let N=0;N!==2&&!x;N++)for(let V=0;V!==2&&!x;V++)for(let W=0;W!==2&&!x;W++)if(z.set(0,0,0),N?z.vadd(f[0],z):z.vsub(f[0],z),V?z.vadd(f[1],z):z.vsub(f[1],z),W?z.vadd(f[2],z):z.vsub(f[2],z),i.vadd(z,_),_.vsub(n,_),_.lengthSquared()<m*m){if(d)return!0;x=!0;const Z=this.createContactEquation(a,l,t,e,c,h);Z.ri.copy(_),Z.ri.normalize(),Z.ni.copy(Z.ri),Z.ri.scale(m,Z.ri),Z.rj.copy(z),Z.ri.vadd(n,Z.ri),Z.ri.vsub(a.position,Z.ri),Z.rj.vadd(i,Z.rj),Z.rj.vsub(l.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}u.release(z),z=null;const w=u.get(),R=u.get(),I=u.get(),L=u.get(),O=u.get(),U=f.length;for(let N=0;N!==U&&!x;N++)for(let V=0;V!==U&&!x;V++)if(N%3!==V%3){f[V].cross(f[N],w),w.normalize(),f[N].vadd(f[V],R),I.copy(n),I.vsub(R,I),I.vsub(i,I);const W=I.dot(w);w.scale(W,L);let Z=0;for(;Z===N%3||Z===V%3;)Z++;O.copy(n),O.vsub(L,O),O.vsub(R,O),O.vsub(i,O);const tt=Math.abs(W),st=O.length();if(tt<f[Z].length()&&st<m){if(d)return!0;x=!0;const ot=this.createContactEquation(a,l,t,e,c,h);R.vadd(L,ot.rj),ot.rj.copy(ot.rj),O.negate(ot.ni),ot.ni.normalize(),ot.ri.copy(ot.rj),ot.ri.vadd(i,ot.ri),ot.ri.vsub(n,ot.ri),ot.ri.normalize(),ot.ri.scale(m,ot.ri),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),ot.rj.vadd(i,ot.rj),ot.rj.vsub(l.position,ot.rj),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}}u.release(w,R,I,L,O)}planeBox(t,e,n,i,o,r,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,o,r,a,l,t,e,d)}convexConvex(t,e,n,i,o,r,a,l,c,h,d,u,f){const m=sM;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,o,i,r,m,u,f)){const x=[],g=oM;t.clipAgainstHull(n,o,e,i,r,m,-100,100,x);let p=0;for(let v=0;v!==x.length;v++){if(d)return!0;const y=this.createContactEquation(a,l,t,e,c,h),M=y.ri,b=y.rj;m.negate(y.ni),x[v].normal.negate(g),g.scale(x[v].depth,g),x[v].point.vadd(g,M),b.copy(x[v].point),M.vsub(n,M),b.vsub(i,b),M.vadd(n,M),M.vsub(a.position,M),b.vadd(i,b),b.vsub(l.position,b),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,o,r,a,l,c,h,d){const u=this.v3pool;n.vsub(i,W1);const f=e.faceNormals,m=e.faces,x=e.vertices,g=t.radius;let p=!1;for(let v=0;v!==x.length;v++){const y=x[v],M=j1;r.vmult(y,M),i.vadd(M,M);const b=Y1;if(M.vsub(n,b),b.lengthSquared()<g*g){if(d)return!0;p=!0;const T=this.createContactEquation(a,l,t,e,c,h);T.ri.copy(b),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(g,T.ri),M.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let v=0,y=m.length;v!==y&&p===!1;v++){const M=f[v],b=m[v],T=$1;r.vmult(M,T);const C=Z1;r.vmult(x[b[0]],C),C.vadd(i,C);const z=K1;T.scale(-g,z),n.vadd(z,z);const _=J1;z.vsub(C,_);const w=_.dot(T),R=Q1;if(n.vsub(C,R),w<0&&R.dot(T)>0){const I=[];for(let L=0,O=b.length;L!==O;L++){const U=u.get();r.vmult(x[b[L]],U),i.vadd(U,U),I.push(U)}if(N1(I,T,n)){if(d)return!0;p=!0;const L=this.createContactEquation(a,l,t,e,c,h);T.scale(-g,L.ri),T.negate(L.ni);const O=u.get();T.scale(-w,O);const U=u.get();T.scale(-g,U),n.vsub(i,L.rj),L.rj.vadd(U,L.rj),L.rj.vadd(O,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(l.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),u.release(O),u.release(U),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let N=0,V=I.length;N!==V;N++)u.release(I[N]);return}else for(let L=0;L!==b.length;L++){const O=u.get(),U=u.get();r.vmult(x[b[(L+1)%b.length]],O),r.vmult(x[b[(L+2)%b.length]],U),i.vadd(O,O),i.vadd(U,U);const N=X1;U.vsub(O,N);const V=q1;N.unit(V);const W=u.get(),Z=u.get();n.vsub(O,Z);const tt=Z.dot(V);V.scale(tt,W),W.vadd(O,W);const st=u.get();if(W.vsub(n,st),tt>0&&tt*tt<N.lengthSquared()&&st.lengthSquared()<g*g){if(d)return!0;const ot=this.createContactEquation(a,l,t,e,c,h);W.vsub(i,ot.rj),W.vsub(n,ot.ni),ot.ni.normalize(),ot.ni.scale(g,ot.ri),ot.rj.vadd(i,ot.rj),ot.rj.vsub(l.position,ot.rj),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult);for(let Nt=0,he=I.length;Nt!==he;Nt++)u.release(I[Nt]);u.release(O),u.release(U),u.release(W),u.release(st),u.release(Z);return}u.release(O),u.release(U),u.release(W),u.release(st),u.release(Z)}for(let L=0,O=I.length;L!==O;L++)u.release(I[L])}}}planeConvex(t,e,n,i,o,r,a,l,c,h,d){const u=tM,f=eM;f.set(0,0,1),o.vmult(f,f);let m=0;const x=nM;for(let g=0;g!==e.vertices.length;g++)if(u.copy(e.vertices[g]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,x),f.dot(x)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h),y=iM;f.scale(f.dot(x),y),u.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(f),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,o,r,a,l,t,e,d)}sphereHeightfield(t,e,n,i,o,r,a,l,c,h,d){const u=e.data,f=t.radius,m=e.elementSize,x=xM,g=gM;ee.pointToLocalFrame(i,r,n,g);let p=Math.floor((g.x-f)/m)-1,v=Math.ceil((g.x+f)/m)+1,y=Math.floor((g.y-f)/m)-1,M=Math.ceil((g.y+f)/m)+1;if(v<0||M<0||p>u.length||y>u[0].length)return;p<0&&(p=0),v<0&&(v=0),y<0&&(y=0),M<0&&(M=0),p>=u.length&&(p=u.length-1),v>=u.length&&(v=u.length-1),M>=u[0].length&&(M=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const b=[];e.getRectMinMax(p,y,v,M,b);const T=b[0],C=b[1];if(g.z-f>C||g.z+f<T)return;const z=this.result;for(let _=p;_<v;_++)for(let w=y;w<M;w++){const R=z.length;let I=!1;if(e.getConvexTrianglePillar(_,w,!1),ee.pointToWorldFrame(i,r,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.sphereConvex(t,e.pillarConvex,n,x,o,r,a,l,t,e,d)),d&&I||(e.getConvexTrianglePillar(_,w,!0),ee.pointToWorldFrame(i,r,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.sphereConvex(t,e.pillarConvex,n,x,o,r,a,l,t,e,d)),d&&I))return!0;if(z.length-R>2)return}}boxHeightfield(t,e,n,i,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,o,r,a,l,t,e,d)}convexHeightfield(t,e,n,i,o,r,a,l,c,h,d){const u=e.data,f=e.elementSize,m=t.boundingSphereRadius,x=pM,g=mM,p=fM;ee.pointToLocalFrame(i,r,n,p);let v=Math.floor((p.x-m)/f)-1,y=Math.ceil((p.x+m)/f)+1,M=Math.floor((p.y-m)/f)-1,b=Math.ceil((p.y+m)/f)+1;if(y<0||b<0||v>u.length||M>u[0].length)return;v<0&&(v=0),y<0&&(y=0),M<0&&(M=0),b<0&&(b=0),v>=u.length&&(v=u.length-1),y>=u.length&&(y=u.length-1),b>=u[0].length&&(b=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const T=[];e.getRectMinMax(v,M,y,b,T);const C=T[0],z=T[1];if(!(p.z-m>z||p.z+m<C))for(let _=v;_<y;_++)for(let w=M;w<b;w++){let R=!1;if(e.getConvexTrianglePillar(_,w,!1),ee.pointToWorldFrame(i,r,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,x,o,r,a,l,null,null,d,g,null)),d&&R||(e.getConvexTrianglePillar(_,w,!0),ee.pointToWorldFrame(i,r,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,x,o,r,a,l,null,null,d,g,null)),d&&R))return!0}}sphereParticle(t,e,n,i,o,r,a,l,c,h,d){const u=cM;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const m=this.createContactEquation(l,a,e,t,c,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,o,r,a,l,c,h,d){const u=rM;u.set(0,0,1),a.quaternion.vmult(u,u);const f=aM;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(l,a,e,t,c,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);const g=lM;u.scale(u.dot(i),g),i.vsub(g,g),x.rj.copy(g),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,i,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,o,r,a,l,t,e,d)}convexParticle(t,e,n,i,o,r,a,l,c,h,d){let u=-1;const f=uM,m=dM;let x=null;const g=hM;if(g.copy(i),g.vsub(n,g),o.conjugate(Wu),Wu.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,o),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(o);for(let p=0,v=t.faces.length;p!==v;p++){const y=[t.worldVertices[t.faces[p][0]]],M=t.worldFaceNormals[p];i.vsub(y[0],Xu);const b=-M.dot(Xu);if(x===null||Math.abs(b)<Math.abs(x)){if(d)return!0;x=b,u=p,f.copy(M)}}if(u!==-1){const p=this.createContactEquation(l,a,e,t,c,h);f.scale(x,m),m.vadd(i,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,y=p.rj;v.vadd(i,v),v.vsub(l.position,v),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,o,r,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,r,o,l,a,c,h,d)}particleCylinder(t,e,n,i,o,r,a,l,c,h,d){return this.convexParticle(e,t,i,n,r,o,l,a,c,h,d)}sphereTrimesh(t,e,n,i,o,r,a,l,c,h,d){const u=M1,f=S1,m=w1,x=b1,g=E1,p=T1,v=P1,y=y1,M=v1,b=z1;ee.pointToLocalFrame(i,r,n,g);const T=t.radius;v.lowerBound.set(g.x-T,g.y-T,g.z-T),v.upperBound.set(g.x+T,g.y+T,g.z+T),e.getTrianglesInAABB(v,b);const C=_1,z=t.radius*t.radius;for(let L=0;L<b.length;L++)for(let O=0;O<3;O++)if(e.getVertex(e.indices[b[L]*3+O],C),C.vsub(g,M),M.lengthSquared()<=z){if(y.copy(C),ee.pointToWorldFrame(i,r,y,C),C.vsub(n,M),d)return!0;let U=this.createContactEquation(a,l,t,e,c,h);U.ni.copy(M),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(C),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let L=0;L<b.length;L++)for(let O=0;O<3;O++){e.getVertex(e.indices[b[L]*3+O],u),e.getVertex(e.indices[b[L]*3+(O+1)%3],f),f.vsub(u,m),g.vsub(f,p);const U=p.dot(m);g.vsub(u,p);let N=p.dot(m);if(N>0&&U<0&&(g.vsub(u,p),x.copy(m),x.normalize(),N=p.dot(x),x.scale(N,p),p.vadd(u,p),p.distanceTo(g)<t.radius)){if(d)return!0;const W=this.createContactEquation(a,l,t,e,c,h);p.vsub(g,W.ni),W.ni.normalize(),W.ni.scale(t.radius,W.ri),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),ee.pointToWorldFrame(i,r,p,p),p.vsub(l.position,W.rj),ee.vectorToWorldFrame(r,W.ni,W.ni),ee.vectorToWorldFrame(r,W.ri,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}const _=A1,w=C1,R=R1,I=x1;for(let L=0,O=b.length;L!==O;L++){e.getTriangleVertices(b[L],_,w,R),e.getNormal(b[L],I),g.vsub(_,p);let U=p.dot(I);if(I.scale(U,p),g.vsub(p,p),U=p.distanceTo(g),Oe.pointInTriangle(p,_,w,R)&&U<t.radius){if(d)return!0;let N=this.createContactEquation(a,l,t,e,c,h);p.vsub(g,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),ee.pointToWorldFrame(i,r,p,p),p.vsub(l.position,N.rj),ee.vectorToWorldFrame(r,N.ni,N.ni),ee.vectorToWorldFrame(r,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}b.length=0}planeTrimesh(t,e,n,i,o,r,a,l,c,h,d){const u=new E,f=p1;f.set(0,0,1),o.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);const x=new E;x.copy(u),ee.pointToWorldFrame(i,r,x,u);const g=m1;if(u.vsub(n,g),f.dot(g)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h);v.ni.copy(f);const y=g1;f.scale(g.dot(f),y),u.vsub(y,y),v.ri.copy(y),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ns=new E,Ns=new E,Fs=new E,h1=new E,u1=new E,d1=new ke,f1=new ke,p1=new E,m1=new E,g1=new E,x1=new E,v1=new E;new E;const _1=new E,y1=new E,M1=new E,S1=new E,w1=new E,b1=new E,E1=new E,T1=new E,A1=new E,C1=new E,R1=new E,P1=new Pn,z1=[],Tr=new E,Gu=new E,L1=new E,D1=new E,I1=new E;function N1(s,t,e){let n=null;const i=s.length;for(let o=0;o!==i;o++){const r=s[o],a=L1;s[(o+1)%i].vsub(r,a);const l=D1;a.cross(t,l);const c=I1;e.vsub(r,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Ar=new E,F1=new E,U1=new E,O1=new E,B1=[new E,new E,new E,new E,new E,new E],k1=new E,H1=new E,V1=new E,G1=new E,W1=new E,X1=new E,q1=new E,Y1=new E,j1=new E,$1=new E,Z1=new E,K1=new E,J1=new E,Q1=new E;new E;new E;const tM=new E,eM=new E,nM=new E,iM=new E,sM=new E,oM=new E,rM=new E,aM=new E,lM=new E,cM=new E,Wu=new ke,hM=new E;new E;const uM=new E,Xu=new E,dM=new E,fM=new E,pM=new E,mM=[0],gM=new E,xM=new E;class qu{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let o=0;for(;n>i[o];)o++;if(n!==i[o]){for(let r=i.length-1;r>=o;r--)i[r+1]=i[r];i[o]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,o=n.length,r=i.length;let a=0;for(let l=0;l<o;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Yu(t,h)}a=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Yu(e,h)}}}function Yu(s,t){s.push((t&4294901760)>>16,t&65535)}const sl=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`;class vM{constructor(){this.data={keys:[]}}get(t,e){const n=sl(t,e);return this.data[n]}set(t,e,n){const i=sl(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=sl(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class _M extends Zf{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Ty,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new i1,this.constraints=[],this.narrowphase=new c1(this),this.collisionMatrix=new Lu,this.collisionMatrixPrevious=new Lu,this.bodyOverlapKeeper=new qu,this.shapeOverlapKeeper=new qu,this.contactmaterials=[],this.contactMaterialTable=new vM,this.defaultMaterial=new Jo("default"),this.defaultContactMaterial=new Ko(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof oa?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Oe.ALL,n.from=t,n.to=e,n.callback=i,ol.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Oe.ANY,n.from=t,n.to=e,n.result=i,ol.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Oe.CLOSEST,n.from=t,n.to=e,n.result=i,ol.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof _t&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let o=0;o!==n.length;o++)n[o].index=o;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let o=0;o<i.length;o++){const r=i[o];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ve.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ve.now();let o=0;for(;this.accumulator>=t&&o<n&&(this.internalStep(t),this.accumulator-=t,o++,!(Ve.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=bM,i=EM,o=this.bodies.length,r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=_t.DYNAMIC;let u=-1/0;const f=this.constraints,m=wM;l.length();const x=l.x,g=l.y,p=l.z;let v=0;for(c&&(u=Ve.now()),v=0;v!==o;v++){const L=r[v];if(L.type===d){const O=L.force,U=L.mass;O.x+=U*x,O.y+=U*g,O.z+=U*p}}for(let L=0,O=this.subsystems.length;L!==O;L++)this.subsystems[L].update();c&&(u=Ve.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Ve.now()-u);let y=f.length;for(v=0;v!==y;v++){const L=f[v];if(!L.collideConnected)for(let O=n.length-1;O>=0;O-=1)(L.bodyA===n[O]&&L.bodyB===i[O]||L.bodyB===n[O]&&L.bodyA===i[O])&&(n.splice(O,1),i.splice(O,1))}this.collisionMatrixTick(),c&&(u=Ve.now());const M=SM,b=e.length;for(v=0;v!==b;v++)M.push(e[v]);e.length=0;const T=this.frictionEquations.length;for(v=0;v!==T;v++)m.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,m),c&&(h.narrowphase=Ve.now()-u),c&&(u=Ve.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const C=e.length;for(let L=0;L!==C;L++){const O=e[L],U=O.bi,N=O.bj,V=O.si,W=O.sj;let Z;if(U.material&&N.material?Z=this.getContactMaterial(U.material,N.material)||this.defaultContactMaterial:Z=this.defaultContactMaterial,Z.friction,U.material&&N.material&&(U.material.friction>=0&&N.material.friction>=0&&U.material.friction*N.material.friction,U.material.restitution>=0&&N.material.restitution>=0&&(O.restitution=U.material.restitution*N.material.restitution)),a.addEquation(O),U.allowSleep&&U.type===_t.DYNAMIC&&U.sleepState===_t.SLEEPING&&N.sleepState===_t.AWAKE&&N.type!==_t.STATIC){const tt=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),st=N.sleepSpeedLimit**2;tt>=st*2&&(U.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===_t.DYNAMIC&&N.sleepState===_t.SLEEPING&&U.sleepState===_t.AWAKE&&U.type!==_t.STATIC){const tt=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),st=U.sleepSpeedLimit**2;tt>=st*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,N,!0),this.collisionMatrixPrevious.get(U,N)||(vo.body=N,vo.contact=O,U.dispatchEvent(vo),vo.body=U,N.dispatchEvent(vo)),this.bodyOverlapKeeper.set(U.id,N.id),this.shapeOverlapKeeper.set(V.id,W.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Ve.now()-u,u=Ve.now()),v=0;v!==o;v++){const L=r[v];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(y=f.length,v=0;v!==y;v++){const L=f[v];L.update();for(let O=0,U=L.equations.length;O!==U;O++){const N=L.equations[O];a.addEquation(N)}}a.solve(t,this),c&&(h.solve=Ve.now()-u),a.removeAllEquations();const z=Math.pow;for(v=0;v!==o;v++){const L=r[v];if(L.type&d){const O=z(1-L.linearDamping,t),U=L.velocity;U.scale(O,U);const N=L.angularVelocity;if(N){const V=z(1-L.angularDamping,t);N.scale(V,N)}}}this.dispatchEvent(MM),c&&(u=Ve.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,R=this.quatNormalizeFast;for(v=0;v!==o;v++)r[v].integrate(t,w,R);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Ve.now()-u),this.stepnumber+=1,this.dispatchEvent(yM);let I=!0;if(this.allowSleep)for(I=!1,v=0;v!==o;v++){const L=r[v];L.sleepTick(this.time),L.sleepState!==_t.SLEEPING&&(I=!0)}this.hasActiveBodies=I}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(xi,vi),t){for(let o=0,r=xi.length;o<r;o+=2)_o.bodyA=this.getBodyById(xi[o]),_o.bodyB=this.getBodyById(xi[o+1]),this.dispatchEvent(_o);_o.bodyA=_o.bodyB=null}if(e){for(let o=0,r=vi.length;o<r;o+=2)yo.bodyA=this.getBodyById(vi[o]),yo.bodyB=this.getBodyById(vi[o+1]),this.dispatchEvent(yo);yo.bodyA=yo.bodyB=null}xi.length=vi.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(xi,vi),n){for(let o=0,r=xi.length;o<r;o+=2){const a=this.getShapeById(xi[o]),l=this.getShapeById(xi[o+1]);_i.shapeA=a,_i.shapeB=l,a&&(_i.bodyA=a.body),l&&(_i.bodyB=l.body),this.dispatchEvent(_i)}_i.bodyA=_i.bodyB=_i.shapeA=_i.shapeB=null}if(i){for(let o=0,r=vi.length;o<r;o+=2){const a=this.getShapeById(vi[o]),l=this.getShapeById(vi[o+1]);yi.shapeA=a,yi.shapeB=l,a&&(yi.bodyA=a.body),l&&(yi.bodyB=l.body),this.dispatchEvent(yi)}yi.bodyA=yi.bodyB=yi.shapeA=yi.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Pn;const ol=new Oe,Ve=globalThis.performance||{};if(!Ve.now){let s=Date.now();Ve.timing&&Ve.timing.navigationStart&&(s=Ve.timing.navigationStart),Ve.now=()=>Date.now()-s}new E;const yM={type:"postStep"},MM={type:"preStep"},vo={type:_t.COLLIDE_EVENT_NAME,body:null,contact:null},SM=[],wM=[],bM=[],EM=[],xi=[],vi=[],_o={type:"beginContact",bodyA:null,bodyB:null},yo={type:"endContact",bodyA:null,bodyB:null},_i={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},yi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},TM=9.81,AM=Math.PI*2,CM=[{angleDeg:0,wavelength:34,amplitude:.24,pinch:.8,phase:0},{angleDeg:22,wavelength:22,amplitude:.14,pinch:.9,phase:1.7},{angleDeg:-30,wavelength:14,amplitude:.09,pinch:1,phase:4.1},{angleDeg:50,wavelength:9,amplitude:.06,pinch:1,phase:2.6},{angleDeg:-65,wavelength:6,amplitude:.045,pinch:1,phase:5.3},{angleDeg:80,wavelength:4,amplitude:.03,pinch:1,phase:.9}];function RM(s){const t=Math.hypot(s.x,s.z),e=t>1e-6?s.x/t:0,n=t>1e-6?s.z/t:1,i=CM.map(({angleDeg:r,wavelength:a,amplitude:l,pinch:c,phase:h})=>{const d=r*Math.PI/180,u=Math.cos(d),f=Math.sin(d),m=AM/a,x=Math.sqrt(TM*m);return Object.freeze({direction:Object.freeze({x:e*u-n*f,z:e*f+n*u}),wavelength:a,amplitude:l,steepness:c*m*l,speed:x/m,k:m,omega:x,phase:h})}),o=i.reduce((r,a)=>r+a.steepness,0);if(o>=1)throw new Error(`Wave steepness sum ${o} would fold the surface`);return Object.freeze(i)}function Rc(s,t,e,n,i={}){let o=0,r=0,a=0,l=0,c=0,h=0,d=0,u=0;for(const p of s){const{direction:v,k:y,omega:M,amplitude:b,steepness:T,phase:C}=p,z=y*(v.x*t+v.z*e)-M*n+C,_=Math.sin(z),w=Math.cos(z),R=T/y*w;o+=v.x*R,r+=b*_,a+=v.z*R;const I=T*_;l+=I*v.x*v.x,c+=I*v.x*v.z,h+=I*v.z*v.z;const L=b*y*w;d+=L*v.x,u+=L*v.z}const f=-(d*(1-h)+c*u),m=(1-l)*(1-h)-c*c,x=-(u*(1-l)+d*c),g=Math.hypot(f,m,x);return i.x=o,i.y=r,i.z=a,i.nx=f/g,i.ny=m/g,i.nz=x/g,i}function cs(s,t,e,n,i=4){let o=t,r=e,a=0;for(let l=0;l<=i;l++){let c=0,h=0;a=0;for(const d of s){const{direction:u,k:f,omega:m,amplitude:x,steepness:g,phase:p}=d,v=f*(u.x*o+u.z*r)-m*n+p,y=g/f*Math.cos(v);c+=u.x*y,h+=u.z*y,a+=x*Math.sin(v)}o=t-c,r=e-h}return a}function Mi(s){return Number.isInteger(s)?s.toFixed(1):String(s)}function PM(s){const t=s.reduce((o,r)=>o+r.amplitude,0),e=s.reduce((o,r)=>o+r.steepness,0),n=s.map((o,r)=>[`const vec2 WAVE${r}_DIRECTION = vec2(${Mi(o.direction.x)}, ${Mi(o.direction.z)});`,`const float WAVE${r}_K = ${Mi(o.k)};`,`const float WAVE${r}_OMEGA = ${Mi(o.omega)};`,`const float WAVE${r}_AMPLITUDE = ${Mi(o.amplitude)};`,`const float WAVE${r}_STEEPNESS = ${Mi(o.steepness)};`,`const float WAVE${r}_PHASE = ${Mi(o.phase)};`].join(`
`)).join(`
`),i=s.map((o,r)=>`    gerstnerAccumulate(p, t, WAVE${r}_DIRECTION, WAVE${r}_K, WAVE${r}_OMEGA, WAVE${r}_AMPLITUDE, WAVE${r}_STEEPNESS, WAVE${r}_PHASE, displacement, sinTerms, cosTerms);`).join(`
`);return`
#define WAVE_COUNT ${s.length}
#define WAVE_AMPLITUDE_SUM ${Mi(t)}
#define WAVE_STEEPNESS_SUM ${Mi(e)}

${n}

void gerstnerAccumulate(vec2 p, float t, vec2 dir, float k, float omega, float amplitude, float steepness, float phase,
                        inout vec3 displacement, inout vec3 sinTerms, inout vec2 cosTerms) {
    float theta = k * dot(dir, p) - omega * t + phase;
    float s = sin(theta);
    float c = cos(theta);
    float horizontal = steepness / k * c;
    displacement += vec3(dir.x * horizontal, amplitude * s, dir.y * horizontal);
    sinTerms += steepness * s * vec3(dir.x * dir.x, dir.x * dir.y, dir.y * dir.y);
    cosTerms += amplitude * k * c * dir;
}

// p is the rest position (world x, z). Returns the displacement to add to
// (p.x, 0.0, p.y) and writes the unit surface normal.
vec3 gerstner(vec2 p, float t, out vec3 surfaceNormal) {
    vec3 displacement = vec3(0.0);
    vec3 sinTerms = vec3(0.0);
    vec2 cosTerms = vec2(0.0);
${i}
    float sinXX = sinTerms.x;
    float sinXZ = sinTerms.y;
    float sinZZ = sinTerms.z;
    surfaceNormal = normalize(vec3(
        -(cosTerms.x * (1.0 - sinZZ) + sinXZ * cosTerms.y),
        (1.0 - sinXX) * (1.0 - sinZZ) - sinXZ * sinXZ,
        -(cosTerms.y * (1.0 - sinXX) + cosTerms.x * sinXZ)
    ));
    return displacement;
}
`}const Mo=Math.PI/180,Pc={gommier:{id:"gommier",name:"Gommier",tagline:"A hollowed gum-tree dugout with planked sides: light, narrow and the quickest to capsize.",steeringLabel:"Hinged rudder, one barreur",hull:{length:7.5,beam:1.3,depth:.68,draft:.26,planking:.045,floor:.06,flare:.18,maxBeamAt:.44,sternBeam:.34,bowSheerRise:.42,sternSheerRise:.16,bowRocker:.4,sternRocker:.12,stemRake:.35,transomRake:.12,veeFore:.85,veeAft:.35,stations:75},thwarts:[2.3,1.2,-.5,-2.2],rig:{mastStation:1.2,mastHeight:6.4,mastRake:.05,mastRadius:[.065,.035],sail:{tack:[0,.95,-.07],throat:[0,5.7,-.07],peak:[0,6.25,-2.75],clew:[0,1.05,-3.05],spritHeel:[-.06,1.3,-.06],belly:.09}},livery:{hull:{paint:16040222,stripe:13771562,pinstripe:1789852,interior:4862242,wood:9067060},spar:12752227,pole:13214315,sail:{base:15986144,blocks:[{u:[0,1],v:[.06,.22],color:1681320},{u:[.1,.6],v:[.48,.68],color:15885370},{u:[.64,.92],v:[.48,.68],color:3054927},{u:[.1,.92],v:[.78,.84],color:13771562}]},kit:{shirt:2071893,shorts:16040222,cap:16184298}},physics:{mass:500,boxHalfExtents:[.5,.25,1.5],sailPower:5,lateralDamping:5e3,hullDrag:2},steering:{type:"rudder",rate:2.5,maxAngle:Math.PI/4,yawRateAtRest:.15,turnRadius:8,maxYawRate:.6,tillerLength:.85},crew:{poleLength:3,dresseurStations:[.75,.2,-.35,-.9,-1.45,-2,-2.55],sheetHand:{z:-1.18,lever:.22},helm:{z:-3.05,lever:.26},bailer:{z:1.8}},balance:{crewMass:85,heelForceScale:8.5,hullRollInertia:500,rollDamping:12e3,hullRightingArm:.25,capsizeAngle:38*Mo,targetHeel:10*Mo,slideSpeed:.7,reactionTime:.4,heelGain:14e3,heelRateGain:5e3,transferTime:.7,transferStagger:.15}},yole:{id:"yole",name:"Yole ronde",tagline:"The 10.5 m planked racer of the Tour des Yoles: huge sail, nine on the bwa dressé.",steeringLabel:"Steering paddle, patron + 2 aides",hull:{length:10.5,beam:1.9,depth:.86,draft:.38,planking:.03,floor:.07,flare:.32,maxBeamAt:.6,sternBeam:.2,bowSheerRise:.74,sternSheerRise:.06,bowRocker:.45,sternRocker:.18,stemRake:.9,transomRake:.1,veeFore:.9,veeAft:.75,stations:90},thwarts:[3.6,1.6,-.45,-2.4],rig:{mastStation:3,mastHeight:9,mastRake:-.07,mastRadius:[.09,.045],sail:{tack:[0,1.05,-.09],throat:[0,8.3,-.09],peak:[0,9.2,-5.6],clew:[0,1.25,-6.3],spritHeel:[-.08,1.15,-.08],belly:.1}},livery:{hull:{paint:2056127,stripe:16052714,pinstripe:16040222,interior:4008478,wood:10119742},spar:8176194,pole:13806964,sail:{base:2830134,blocks:[{u:[.2,.8],v:[.08,.17],color:15921906},{u:[.08,.92],v:[.28,.42],color:16765503},{u:[.08,.55],v:[.56,.74],color:2275552},{u:[.59,.92],v:[.56,.74],color:10146107},{u:[.08,.92],v:[.84,.88],color:14689835}]},kit:{shirt:14689835,shorts:16052714,cap:16184298}},physics:{mass:700,boxHalfExtents:[.75,.3,2.1],sailPower:8.5,lateralDamping:7e3,hullDrag:2},steering:{type:"paddle",rate:.55,maxAngle:.3,yawRateAtRest:.1,turnRadius:13,maxYawRate:.42,inboardLength:1.7,shaftLength:4.4,bladeLength:2,slope:20*Mo},crew:{poleLength:4,dresseurStations:[2.5,1.85,1.2,.55,-.1,-.75,-1.4,-2.05,-2.7],sheetHand:{z:-3.25,lever:.2},paddleAides:[.5,1.05],bailer:{z:3.75}},balance:{crewMass:85,heelForceScale:5,hullRollInertia:1400,rollDamping:2e4,hullRightingArm:.3,capsizeAngle:42*Mo,targetHeel:9*Mo,slideSpeed:.8,reactionTime:.4,heelGain:22e3,heelRateGain:8e3,transferTime:.7,transferStagger:.15}}};function zM({crew:s,steering:t}){const e=t.type==="rudder"?1:1+s.paddleAides.length;return{dresseurs:s.dresseurStations.length,steering:e,total:s.dresseurStations.length+e+2}}const Wo=[1,.935,.87,.83,.8,.72,.62,.52,.42,.32,.23,.15,.085,.035,.008,0],Do=Wo.concat(Wo.slice(0,-1).reverse()),LM=.87,ju={from:.8,to:.83},Sn={paint:0,stripe:1,pinstripe:2,interior:3,wood:4},DM=new D(0,1,0),$u=new D,Zu=new D,Ku=new D;function xa(s,t){const{length:e,beam:n,depth:i,maxBeamAt:o,sternBeam:r}=s,{lerp:a,smoothstep:l}=Yt,c=Math.max(0,(t-.5)/.5),h=Math.max(0,(.5-t)/.5),d=t>=o?1-Math.pow((t-o)/(1-o),2.2):r+(1-r)*(1-Math.pow((o-t)/o,2.4));return{z:a(-e/2+s.transomRake,e/2-s.stemRake,t),halfBeam:n/2*d,keel:s.bowRocker*Math.pow(Math.max(0,(t-.62)/.38),2)+s.sternRocker*Math.pow(Math.max(0,(.2-t)/.2),2),sheer:i+s.bowSheerRise*Math.pow(c,2.2)+s.sternSheerRise*Math.pow(h,2.5),vee:s.veeFore*l(t,.55,1)+s.veeAft*(1-l(t,0,.3)),rake:s.stemRake*l(t,.8,1)-s.transomRake*(1-l(t,0,.15))}}function Xo(s,t){const e=-s.length/2+s.transomRake,n=s.length-s.transomRake-s.stemRake;return xa(s,Yt.clamp((t-e)/n,0,1))}function IM(s){return Array.from({length:s.stations+1},(t,e)=>xa(s,e/s.stations))}function Wi(s,t,e,n,i=!1){const o=i?Math.max(0,t.halfBeam-s.planking):t.halfBeam,r=i?Math.min(t.keel+s.floor,t.sheer-.04):t.keel,a=(1-s.flare)*Math.sqrt(1-Math.pow(1-e,2.4))+s.flare*e,l=o*Yt.lerp(a,e,t.vee),c=r+(t.sheer-r)*e,h=(c-t.keel)/(t.sheer-t.keel);return new D(n*l,c,t.z+t.rake*h)}function NM(s,t,e){return Do.map((n,i)=>Wi(s,t,n,i<Wo.length?1:-1,e))}function op(s,t,e){let n=Wi(s,t,0,1,!0);for(let i=Wo.length-2;i>=0;i--){const o=Wi(s,t,Wo[i],1,!0);if(o.y>=e){const r=(e-n.y)/Math.max(o.y-n.y,1e-6);return Yt.lerp(n.x,o.x,r)}n=o}return n.x}function FM(s){const t=Math.min(Do[s],Do[s+1]),e=Math.max(Do[s],Do[s+1]);return t>=LM?Sn.stripe:t>=ju.from&&e<=ju.to?Sn.pinstripe:Sn.paint}function UM(s,t){const e=new rp,n=t[0],i=(r,a)=>NM(s,r,a),o=(r,a,l)=>Wi(s,r,1,a,l);return e.addGrid(t.map(r=>i(r,!1)),FM),e.addGrid(t.map(r=>i(r,!0)),()=>Sn.interior,!0),e.addGrid(t.map(r=>[o(r,1,!0),o(r,1,!1)]),()=>Sn.wood),e.addGrid(t.map(r=>[o(r,-1,!1),o(r,-1,!0)]),()=>Sn.wood),e.addFan(Wi(s,n,1,0),i(n,!1),Sn.paint),e.addFan(Wi(s,n,1,0,!0),i(n,!0),Sn.interior,!0),e.build()}function OM(s,t){const e=new rp;return e.addGrid(t.map(n=>[Wi(s,n,1,-1,!0),Wi(s,n,1,1,!0)]),()=>0),e.build()}function BM({tack:s,throat:t,peak:e,clew:n},i,o=16,r=20){const a=[],l=[],c=[],h=new D,d=new D,u=new D;for(let m=0;m<=r;m++){const x=m/r;h.lerpVectors(s,t,x),d.lerpVectors(n,e,x);const g=i*h.distanceTo(d)*(.75+.25*Math.sin(Math.PI*x));for(let p=0;p<=o;p++){const v=p/o;u.lerpVectors(h,d,v),u.x+=g*Math.sin(Math.PI*Math.pow(v,.85)),a.push(u.x,u.y,u.z),l.push(v,x)}}for(let m=0;m<r;m++)for(let x=0;x<o;x++){const g=m*(o+1)+x,p=g+1,v=g+o+1,y=v+1;c.push(g,p,v,p,y,v)}const f=new Ie;return f.setAttribute("position",new ne(a,3)),f.setAttribute("uv",new ne(l,2)),f.setIndex(c),f.computeVertexNormals(),f}function Ju(s,t,e,n,i){const o=new D().subVectors(t,s),r=new jt(new Rn(n,e,o.length(),12),i);return r.position.lerpVectors(s,t,.5),r.quaternion.setFromUnitVectors(DM,o.normalize()),r.castShadow=!0,r.receiveShadow=!0,r}class rp{constructor(){this.positions=[],this.batches=new Map}addVertex(t){return this.positions.push(t.x,t.y,t.z),this.positions.length/3-1}addTriangle(t,e,n,i){Zu.fromArray(this.positions,n*3).sub($u.fromArray(this.positions,e*3)),Ku.fromArray(this.positions,i*3).sub($u),!(Zu.cross(Ku).lengthSq()<1e-14)&&(this.batches.has(t)||this.batches.set(t,[]),this.batches.get(t).push(e,n,i))}addGrid(t,e,n=!1){const i=t.map(o=>o.map(r=>this.addVertex(r)));for(let o=0;o<i.length-1;o++)for(let r=0;r<i[o].length-1;r++){const a=e(r),l=i[o][r],c=i[o+1][r],h=i[o+1][r+1],d=i[o][r+1];n?(this.addTriangle(a,l,d,c),this.addTriangle(a,c,d,h)):(this.addTriangle(a,l,c,d),this.addTriangle(a,c,h,d))}}addFan(t,e,n,i=!1){const o=this.addVertex(t),r=e.map(a=>this.addVertex(a));for(let a=0;a<r.length-1;a++)i?this.addTriangle(n,o,r[a+1],r[a]):this.addTriangle(n,o,r[a],r[a+1])}build(){const t=new Ie;t.setAttribute("position",new ne(this.positions,3));const e=[];for(const[n,i]of[...this.batches].sort(([o],[r])=>o-r)){t.addGroup(e.length,i.length,n);for(const o of i)e.push(o)}return t.setIndex(e),t.computeVertexNormals(),t}}function Qu(s){const t=new zt(s);return .2126*t.r+.7152*t.g+.0722*t.b}const kM=256;function HM(s){const t={roughness:.42,clearcoat:.5,clearcoatRoughness:.3},e=[];return e[Sn.paint]=new to({color:s.paint,...t}),e[Sn.stripe]=new to({color:s.stripe,...t}),e[Sn.pinstripe]=new to({color:s.pinstripe,...t}),e[Sn.interior]=new an({color:s.interior,roughness:.85}),e[Sn.wood]=new an({color:s.wood,roughness:.7}),e}function VM({base:s,blocks:t}){const e=kM,n=new Uint8Array(e*e*4),i=new zt,o=(l,c,h,d,u)=>{i.setHex(l);const f=Math.round(i.r*255),m=Math.round(i.g*255),x=Math.round(i.b*255);for(let g=d;g<u;g++)for(let p=c;p<h;p++){const v=(g*e+p)*4;n[v]=f,n[v+1]=m,n[v+2]=x,n[v+3]=255}},r=l=>Math.round(Yt.clamp(l,0,1)*e);o(s,0,e,0,e);for(const l of t)o(l.color,r(l.u[0]),r(l.u[1]),r(l.v[0]),r(l.v[1]));const a=new hi(n,e,e,Ze);return a.colorSpace=nn,a.magFilter=De,a.minFilter=jn,a.generateMipmaps=!0,a.anisotropy=4,a.needsUpdate=!0,new an({map:a,roughness:.85,side:yn})}function GM(s){const{kit:t,hull:e}=s,n=Qu(t.shirt),i=Math.abs(n-Qu(t.shorts))>.15?t.shorts:16052714;return{shirt:t.shirt,shorts:t.shorts,cap:t.cap,panel:i,number:n>.35?1709071:16250094,collar:16183784,visor:1844272,bandana:e.pinstripe}}const WM=.32,td=.34,ed=.045,XM=.36,nd=.44;function qM(s,t,e){const n=xa(s,0),i=n.sheer-n.keel,o=new be;o.position.set(0,n.sheer+.02,n.z+n.rake-.03),o.rotation.x=-Math.atan2(s.transomRake,i);const r=new be;o.add(r);const a=i+WM,l=new jt(new rn(.035,a,td),e);l.position.set(0,.06-a/2,-td/2),r.add(l);const c=new jt(new rn(.05,.05,t.tillerLength),e);c.position.set(0,.1,t.tillerLength/2-.05),r.add(c);const h=new Re;return h.position.set(0,.12,t.tillerLength-.08),r.add(h),{group:o,yaw:r,tillerTip:h}}function YM(s,t,e,n){const i=xa(s,0),{inboardLength:o,shaftLength:r,bladeLength:a,slope:l}=t,c=new be;c.position.set(0,i.sheer+.04,i.z+i.rake);const h=new be;c.add(h);const d=new be;d.rotation.x=-l,h.add(d);const u=new Rn(ed,ed*.85,r,10);u.rotateX(Math.PI/2);const f=new jt(u,e);f.position.z=o-r/2,d.add(f);const m=new jt(new rn(.04,XM,a),e);m.position.z=o-r-a/2+.15,d.add(m);const x=new jt(new rn(nd,.05,.06),e);return x.position.z=o,d.add(x),{group:c,yaw:h,handle:id(d,o),grips:n.map(g=>id(d,g)),handleWidth:nd}}function id(s,t){const e=new Re;return e.position.z=t,s.add(e),e}const rl=9.81,So=.25,al=.5,jM=.3,$M=.3,ZM=.08,KM=1.2,JM=2,sd=1.6,QM=3,tS=.9,eS=.7,nS=1.5,iS=.3,sS=1.62,oS=1.3,rS=2.6,od=2.6,aS=2.5,Nn={sailing:"sailing",capsizing:"capsizing",capsized:"capsized",righting:"righting"};function Gi(s){return 2*s*s*(3-2*s)-1}function Cr(s,t,e){return s+Math.max(-e,Math.min(e,t-s))}class lS{constructor(t,e,n){this.config=t,this.layout=e,this.displacement=n,this.crewWeight=t.crewMass*rl,this.dresseurs=e.dresseurs.map((i,o)=>({...i,order:o,reach:0,blend:1,target:1})),this.others=e.others.map(i=>({...i,blend:1})),this.bailerJoin=0,this.capsizes=0,this.rightings=0,this.reset(1)}reset(t){this.heel=0,this.heelRate=0,this.windward=t,this.tackClock=1/0,this.state=Nn.sailing,this.stateTime=0,this.crewAboard=!0,this.crewRestored=!1,this.heelingMoment=0,this.perceivedMoment=0,this.crewMoment=0,this.netMoment=0,this.restoreCrew()}restoreCrew(){const t=this.windward>0?1:0;for(const e of this.dresseurs)e.blend=e.target=t,e.reach=e.maxReach*jM;for(const e of this.others)e.blend=t;this.bailerJoin=0}get isCapsized(){return this.state!==Nn.sailing}get leewardHeel(){return-this.windward*this.heel}get crewOut(){let t=0;for(const e of this.dresseurs)t+=Math.max(0,e.reach)/e.maxReach;return t/this.dresseurs.length}get maxCrewMoment(){let t=0;for(const e of this.dresseurs)t+=e.maxReach+So;for(const e of this.others)e.switchesSide&&(t+=e.lever);return this.crewWeight*t}get maxHullMoment(){return this.displacement*rl*this.config.hullRightingArm}dresseurX(t){const e=Math.max(0,Math.min(1,t.reach/al));return Gi(t.blend)*(t.reach+So*e)}otherX(t){if(!t.switchesSide)return t.lever;const e=t.bailer?t.lever*this.bailerJoin:t.lever;return Gi(t.blend)*e}hullMoment(t){const e=Math.max(-Math.PI/2,Math.min(Math.PI/2,t));return-this.displacement*rl*this.config.hullRightingArm*Math.sin(2*e)}step(t,{sideForce:e,windSide:n,hike:i}){const{config:o}=this;if(this.heelingMoment=e*o.heelForceScale*o.ceHeight*Math.cos(this.heel),this.perceivedMoment+=(this.heelingMoment-this.perceivedMoment)*(1-Math.exp(-t/o.reactionTime)),this.isCapsized){this.advanceCapsize(t);return}this.updateWindwardSide(n,t),this.moveCrewAcross(t),this.integrateRoll(t),Math.abs(this.heel)>o.capsizeAngle?this.startCapsize():this.autoBalance(t,i)}updateWindwardSide(t,e){this.tackClock+=e;const n=t>0?-1:1,i=this.heelingMoment*this.windward>ZM*this.maxCrewMoment;n!==this.windward&&(Math.abs(t)>$M||i)&&(this.windward=n,this.tackClock=0)}moveCrewAcross(t){const e=this.windward>0?1:0;for(const n of this.dresseurs)this.tackClock>=n.order*this.config.transferStagger&&(n.target=e),n.blend=Cr(n.blend,n.target,t/this.config.transferTime);for(const n of this.others)n.switchesSide&&(n.blend=Cr(n.blend,e,t/KM))}integrateRoll(t){const{config:e,crewWeight:n}=this,i=e.crewMass,o=Math.cos(this.heel),r=Math.sin(this.heel);let a=0,l=e.hullRollInertia;const c=(h,d)=>{a+=n*(h*o+d*r),l+=i*(h*h+d*d)};for(const h of this.dresseurs)c(this.dresseurX(h),h.height);for(const h of this.others)c(this.otherX(h),h.height);this.crewMoment=a,this.netMoment=this.heelingMoment+a+this.hullMoment(this.heel),this.heelRate+=(this.netMoment-e.rollDamping*this.heelRate)/l*t,this.heel+=this.heelRate*t}autoBalance(t,e){const{config:n,crewWeight:i}=this,o=this.windward,r=o>0?1:0,a=Math.cos(this.heel),l=Math.sin(this.heel),c=Math.min(1,Math.abs(this.perceivedMoment)/(.3*this.maxCrewMoment)),h=-o*n.targetHeel*c;let d=this.perceivedMoment+this.hullMoment(this.heel)+n.heelGain*(this.heel-h)+n.heelRateGain*this.heelRate,u=0;for(const p of this.dresseurs)p.blend===r?(u++,d+=i*p.height*l):d+=i*(this.dresseurX(p)*a+p.height*l);for(const p of this.others)d+=i*(this.otherX(p)*a+p.height*l);const f=u>0?-d/(o*u*i*Math.max(a,iS)):0,m=f>al+So?f-So:f/(1+So/al);for(const p of this.dresseurs){let v=Math.max(p.minReach,Math.min(p.maxReach,m)),y=n.slideSpeed;p.blend!==r?(v=0,y*=JM):e==="out"?(v=p.maxReach,y*=sd):e==="in"&&(v=p.minReach,y*=sd),v<p.reach&&(y*=QM),p.reach=Cr(p.reach,v,y*t)}const x=this.crewOut,g=e==="out"||x>tS||this.bailerJoin>.5&&x>eS;this.bailerJoin=Cr(this.bailerJoin,g&&e!=="in"?1:0,nS*t)}startCapsize(){this.state=Nn.capsizing,this.stateTime=0,this.capsizeFrom=this.heel,this.capsizeTo=Math.sign(this.heel)*sS,this.heelRate=0,this.capsizes++,this.crewAboard=!1,this.crewRestored=!1}advanceCapsize(t){this.stateTime+=t,this.heelRate=0;const e=n=>n*n*(3-2*n);switch(this.state){case Nn.capsizing:{const n=Math.min(1,this.stateTime/oS);this.heel=this.capsizeFrom+(this.capsizeTo-this.capsizeFrom)*n*n,n>=1&&this.enterState(Nn.capsized);break}case Nn.capsized:this.heel=this.capsizeTo,this.stateTime>=rS&&this.enterState(Nn.righting);break;case Nn.righting:{const n=Math.min(1,this.stateTime/od);this.heel=this.capsizeTo*(1-e(n)),n>=1&&(this.crewRestored||(this.heel=0,this.perceivedMoment=0,this.restoreCrew(),this.crewRestored=!0),(this.crewAboard||this.stateTime>=od+aS)&&(this.enterState(Nn.sailing),this.rightings++,this.crewRestored=!1));break}case Nn.sailing:break;default:throw new Error(`Unknown balance state: ${this.state}`)}}enterState(t){this.state=t,this.stateTime=0}}const rd=9.81,cS=.3,hS=1.7,uS=.3,dS=1.2,fS=1,pS=.4,mS=.9,gS=2.6,ad=3.5,xS=-2,ll=new D(0,1,0),Si=new D,Ee=new D,ye=new D,Dn=new D,qt=new D,Us=new D,Xt=new D,Gn=new D,Os=new D,Rr=new D,cl=new D,ld=new D,cd=new D,ei=new Le,hd=new Be,ud=new Gt,Pr={};function dd(){return{position:new D,quaternion:new Le,torso:new Be,torsoY:0,legs:[new Be,new Be],arms:[new Le,new Le],forearms:[new Le,new Le],shins:[new Be,new Be],feet:[new Be,new Be],head:new Be}}function fd(s,t){t.position.copy(s.root.position),t.quaternion.copy(s.root.quaternion),t.torso.copy(s.torso.rotation),t.torsoY=s.torso.position.y,s.legs.forEach((e,n)=>t.legs[n].copy(e.rotation)),s.arms.forEach((e,n)=>t.arms[n].copy(e.quaternion)),s.forearms.forEach((e,n)=>t.forearms[n].copy(e.quaternion)),s.shins.forEach((e,n)=>t.shins[n].copy(e.rotation)),s.feet.forEach((e,n)=>t.feet[n].copy(e.rotation)),t.head.copy(s.head.rotation)}function vS(s,t,e,n){const{lerp:i}=Yt;s.root.position.lerpVectors(t.position,e.position,n),s.root.quaternion.copy(t.quaternion).slerp(e.quaternion,n),s.torso.rotation.set(i(t.torso.x,e.torso.x,n),i(t.torso.y,e.torso.y,n),i(t.torso.z,e.torso.z,n)),s.torso.position.y=i(t.torsoY,e.torsoY,n),s.legs.forEach((o,r)=>{o.rotation.x=i(t.legs[r].x,e.legs[r].x,n),o.rotation.y=i(t.legs[r].y,e.legs[r].y,n),o.rotation.z=i(t.legs[r].z,e.legs[r].z,n)}),s.arms.forEach((o,r)=>o.quaternion.copy(t.arms[r]).slerp(e.arms[r],n)),s.forearms.forEach((o,r)=>o.quaternion.copy(t.forearms[r]).slerp(e.forearms[r],n)),s.shins.forEach((o,r)=>{o.rotation.x=i(t.shins[r].x,e.shins[r].x,n),o.rotation.y=i(t.shins[r].y,e.shins[r].y,n),o.rotation.z=i(t.shins[r].z,e.shins[r].z,n)}),s.feet.forEach((o,r)=>{o.rotation.x=i(t.feet[r].x,e.feet[r].x,n),o.rotation.y=i(t.feet[r].y,e.feet[r].y,n),o.rotation.z=i(t.feet[r].z,e.feet[r].z,n)}),s.head.rotation.set(i(t.head.x,e.head.x,n),i(t.head.y,e.head.y,n),i(t.head.z,e.head.z,n))}function pd(s,t){return{figure:s,phase:"aboard",releaseAt:0,airTime:0,boardElapsed:0,boardDelay:0,climbed:!1,flung:!1,waterSide:1,phaseShift:0,rand:0,rand2:0,rand3:0,velocity:new D,drift:new D,start:dd(),target:dd(),...t}}class _S{constructor(t,e){this.crew=t,this.scene=e,this.worldGroup=new be,this.worldGroup.name="crewOverboard",e.add(this.worldGroup),this.actors=new Map,this.splashes=[],this.seen=0,this.ringGeometry=null,this.dropGeometry=null,t.poles.forEach((n,i)=>{this.actors.set(n.figure,pd(n.figure,{kind:"dresseur",pole:n,poleIndex:i,z:n.z,index:i}))}),t.seats.forEach((n,i)=>{this.actors.set(n.figure,pd(n.figure,{kind:"seat",seat:n,seatIndex:i,z:n.z,index:t.poles.length+i}))})}update(t,e,n,i){this.balance=t,this.time=e,this.waves=i;const o=Number.isFinite(n)&&n>0?Math.min(n,.05):0;t.capsizes!==this.seen&&(this.seen=t.capsizes,this.arm(e)),t.state===Nn.sailing&&this.recallStrays();for(const r of this.actors.values())this.advance(r,o);this.fadeSplashes(o),this.report()}arm(t){const e=this.actors.size;let n=0;for(const i of this.actors.values())i.phase="waiting",i.climbed=!1,i.releaseAt=t+Math.random()*cS,i.rand=Math.random(),i.rand2=Math.random(),i.rand3=Math.random(),i.phaseShift=Math.random()*Math.PI*2,i.boardDelay=(e<=1?0:n/(e-1))*uS,i.boardElapsed=0,i.airTime=0,i.drift.set(0,0,0),n+=1}recallStrays(){let t=!1;for(const e of this.actors.values())e.phase!=="aboard"&&(t=!0);if(t){for(const e of this.actors.values()){const n=e.figure.root;n.parent!==this.crew.group&&this.crew.group.attach(n),e.phase="aboard",e.climbed=!1}this.clearSplashes()}}advance(t,e){switch(t.phase){case"aboard":this.pose(t);break;case"waiting":this.pose(t),this.time>=t.releaseAt&&(this.detach(t),this.stepFall(t,e));break;case"falling":this.stepFall(t,e);break;case"swimming":this.balance.crewRestored&&this.startBoard(t),t.phase==="boarding"?this.stepBoard(t,e):this.stepSwim(t,e);break;case"boarding":this.stepBoard(t,e);break;default:throw new Error(`Unknown overboard phase: ${t.phase}`)}t.kind==="seat"&&t.seat.role==="sheet"&&(this.crew.rope.visible=t.phase==="aboard"||t.phase==="waiting")}pose(t){const{balance:e,time:n}=this;t.kind==="dresseur"?this.crew.poseDresseur(t.pole,e.dresseurs[t.poleIndex]):this.crew.poseSeat(t.seat,e.others[t.seatIndex],e,n)}detach(t){const e=t.figure.root;this.worldGroup.attach(e),e.traverse(o=>{o.isMesh&&(o.renderOrder=xS)});const n=Math.sign(this.balance.capsizeTo)||Math.sign(this.balance.heel)||1,i=this.crewSide(t);t.waterSide=n,t.flung=i*n<-.45,this.launch(t),t.airTime=0,t.phase="falling"}crewSide(t){if(t.kind==="dresseur")return Gi(this.balance.dresseurs[t.poleIndex].blend);const e=t.seat;return e.role==="aide"?e.side:e.role==="patron"||e.role==="bailer"&&this.balance.bailerJoin<.5?0:Gi(this.balance.others[t.seatIndex].blend)}launch(t){const e=this.crew.visual.parent.quaternion;ye.set(t.waterSide,0,0).applyQuaternion(e),ye.y=0,ye.lengthSq()<1e-8&&ye.set(t.waterSide||1,0,0),ye.normalize(),qt.set(0,0,1).applyQuaternion(e),qt.y=0,qt.lengthSq()>1e-8?qt.normalize():qt.set(0,0,1);const{velocity:n}=t;t.flung&&t.index%2===1?(n.copy(ye).multiplyScalar(1.4+t.rand*.5),n.addScaledVector(qt,(t.index%4<2?1:-1)*(2.6+t.rand2*.7)),n.y=1.7+t.rand3*.5):t.flung?(n.copy(ye).multiplyScalar(3.8+t.rand*.8),n.addScaledVector(qt,(t.rand2-.5)*.8),n.y=2.3+t.rand3*.6):(n.copy(ye).multiplyScalar(.35+t.rand*.4),n.addScaledVector(qt,(t.rand2-.5)*.45),n.y=.15+t.rand3*.35)}stepFall(t,e){const n=t.figure.root;if(t.airTime+=e,t.velocity.y-=rd*e,n.position.addScaledVector(t.velocity,e),Gn.copy(n.position),this.separate(t,n.position)&&(Xt.subVectors(n.position,Gn),Xt.lengthSq()>1e-8)){Xt.normalize();const r=-t.velocity.dot(Xt);r>0&&t.velocity.addScaledVector(Xt,r)}this.avoidPoles(t,n.position),qt.set(t.velocity.x,0,t.velocity.z),qt.lengthSq()<1e-6&&qt.set(0,0,1),hd.set(0,Math.atan2(qt.x,qt.z),0),ei.setFromEuler(hd),n.quaternion.slerp(ei,1-Math.exp(-e*4)),this.poseFall(t);const i=this.heightAt(n.position.x,n.position.z),o=n.position.y<=i-this.chest(t)*.2;(o||t.airTime>hS||!Number.isFinite(n.position.y))&&(o||n.position.copy(this.swimTarget(t,cl)),this.enterWater(t))}enterWater(t){const e=t.figure.root;t.phase="swimming",t.drift.copy(t.velocity),t.drift.y=0,t.drift.length()>1.4&&t.drift.setLength(1.4),t.drift.multiplyScalar(.4);const n=Math.sin(this.time*2.3+t.phaseShift)*.04,i=this.swimTarget(t,cl);e.position.lerp(i,.55),this.keepAlongside(t,e.position),e.position.y=this.heightAt(e.position.x,e.position.z)-this.chest(t)+n,this.splash(e.position.x,e.position.z),this.faceWater(t,1),this.poseTread(t)}stepSwim(t,e){const n=t.figure.root,i=this.swimTarget(t,cl),o=this.balance.state===Nn.righting||this.balance.crewRestored;n.position.lerp(i,1-Math.exp(-e*(o?gS:mS))),t.drift.lengthSq()>1e-6&&(n.position.addScaledVector(t.drift,e),t.drift.multiplyScalar(Math.exp(-e*1.5))),Gn.subVectors(n.position,i),Gn.y=0,Gn.length()>ad&&(Gn.setLength(ad),n.position.x=i.x+Gn.x,n.position.z=i.z+Gn.z);const r=Math.sin(this.time*2.3+t.phaseShift)*.04;this.keepAlongside(t,n.position),n.position.y=this.heightAt(n.position.x,n.position.z)-this.chest(t)+r,this.faceWater(t,1-Math.exp(-e*5)),this.poseTread(t)}startBoard(t){t.phase="boarding",t.boardElapsed=-t.boardDelay,t.climbed=!1}stepBoard(t,e){if(t.boardElapsed+=e,t.boardElapsed<0){this.stepSwim(t,e);return}const n=t.figure.root;t.climbed||(this.crew.group.attach(n),fd(t.figure,t.start),t.climbed=!0),this.pose(t),fd(t.figure,t.target);const i=Yt.smoothstep(t.boardElapsed/dS,0,1);vS(t.figure,t.start,t.target,i),i>=1&&(t.phase="aboard",t.climbed=!1,this.pose(t))}swimTarget(t,e){this.centerWorld(Si),this.outward(t),Dn.set(0,0,t.z).applyQuaternion(ei),Dn.y=0;const n=this.lateralClearance(),i=Math.sin(this.time*.65+t.phaseShift)*.22;return ye.negate(),qt.set(-ye.z,0,ye.x),e.copy(Si).add(Dn).addScaledVector(ye,n),e.addScaledVector(qt,(t.index%3-1)*.22+i),e.y=this.heightAt(e.x,e.z)-this.chest(t),e}lateralClearance(){const t=Math.abs(this.balance.heel),{beam:e,depth:n}=this.crew.hull;return e*.5*Math.abs(Math.cos(t))+n*.55*Math.abs(Math.sin(t))+1.25}keepAlongside(t,e){this.centerWorld(Si),this.outward(t),ye.negate(),Dn.set(0,0,1).applyQuaternion(ei),Dn.y=0,Dn.lengthSq()<1e-6?Dn.set(0,0,1):Dn.normalize(),Gn.set(e.x-Si.x,0,e.z-Si.z);const n=Gn.dot(Dn);if(qt.copy(Dn).multiplyScalar(n),Math.abs(n)>this.crew.hull.length*.5+.25)return!1;const i=this.lateralClearance();return Gn.dot(ye)>=i?!1:(e.x=Si.x+qt.x+ye.x*i,e.z=Si.z+qt.z+ye.z*i,!0)}outward(t){const e=this.crew.visual.getWorldQuaternion(ei);return ye.set(t.waterSide,0,0).applyQuaternion(e),ye.y=0,ye.lengthSq()<.15&&(ye.set(0,1,0).applyQuaternion(e),ye.y=0),ye.lengthSq()<1e-6&&ye.set(t.waterSide||1,0,0),ye.normalize()}centerWorld(t){return t.set(0,this.crew.hull.draft,0),this.crew.visual.localToWorld(t)}chest(t){return pS*t.figure.root.scale.x}heightAt(t,e){return this.waves?cs(this.waves,t,e,this.time):0}normalAt(t,e,n){return this.waves?(Rc(this.waves,t,e,this.time,Pr),n.set(Pr.nx,Pr.ny,Pr.nz),(!Number.isFinite(n.y)||n.lengthSq()<1e-6)&&n.copy(ll),n.normalize()):n.copy(ll)}separate(t,e){const n=this.crew.visual;Ee.copy(e),n.worldToLocal(Ee);const i=this.crew.hull,o=i.length*.5+.2,r=Xo(i,Yt.clamp(Ee.z,-i.length*.5,i.length*.5)),a=r.halfBeam+.36,l=r.keel-.1,c=r.sheer+.4;if(Math.abs(Ee.x)>=a||Ee.y<=l||Ee.y>=c||Math.abs(Ee.z)>=o)return!1;const h=a-Math.abs(Ee.x),d=Math.min(Ee.y-l,c-Ee.y),u=o-Math.abs(Ee.z);let f,m;h<=d&&h<=u?(f="x",m=Math.sign(Ee.x)||t.waterSide||1,Ee.x=m*(a+.06)):u<=d?(f="z",m=Math.sign(Ee.z)||1,Ee.z=m*(o+.06)):(f="y",m=Ee.y-l<=c-Ee.y?-1:1,Ee.y=m>0?c+.06:l-.06);const x=e.y;return n.localToWorld(Ee),e.copy(Ee),Xt.set(f==="x"?m:0,f==="y"?m:0,f==="z"?m:0),Xt.applyQuaternion(n.quaternion),Math.abs(Xt.y)>.6&&(this.centerWorld(Os),Xt.set(e.x-Os.x,0,e.z-Os.z),Xt.y=0,Xt.lengthSq()<1e-4&&(Xt.set(t.waterSide||1,0,0).applyQuaternion(n.parent.quaternion),Xt.y=0),Xt.lengthSq()<1e-6&&Xt.set(1,0,0),Xt.normalize(),e.addScaledVector(Xt,i.beam*.35+.7)),e.y=x,!0}avoidPoles(t,e){const n=this.crew.poleLength*.5,i=.34;let o=!1;for(const r of this.crew.poles){r.mesh.getWorldPosition(Os),r.mesh.getWorldQuaternion(ei),Rr.set(-n,0,0).applyQuaternion(ei).add(Os),Dn.set(n,0,0).applyQuaternion(ei).add(Os),qt.subVectors(Dn,Rr);const a=qt.lengthSq(),l=a<1e-8?0:Yt.clamp(Ee.subVectors(e,Rr).dot(qt)/a,0,1);Ee.copy(Rr).addScaledVector(qt,l),Xt.subVectors(e,Ee),Xt.y=0;const c=Xt.length();c>=i||(c<1e-4?(Xt.set(t.waterSide||1,0,0).applyQuaternion(this.crew.visual.parent.quaternion),Xt.y=0,Xt.lengthSq()<1e-6&&Xt.set(1,0,0),Xt.setLength(i)):Xt.multiplyScalar((i-c)/c),e.add(Xt),o=!0)}return o}faceWater(t,e){const n=t.figure.root;this.centerWorld(Si),qt.subVectors(Si,n.position),qt.y=0,qt.lengthSq()<1e-4?qt.set(0,0,1):qt.normalize(),this.normalAt(n.position.x,n.position.z,Xt),qt.addScaledVector(Xt,-qt.dot(Xt)),qt.lengthSq()<1e-6&&qt.set(1,0,0).addScaledVector(Xt,-Xt.x),qt.normalize(),Us.crossVectors(Xt,qt),Us.lengthSq()<1e-6&&Us.set(1,0,0),Us.normalize(),qt.crossVectors(Us,Xt).normalize(),ud.makeBasis(Us,Xt,qt),ei.setFromRotationMatrix(ud),n.quaternion.slerp(ei,e)}poseFall(t){const e=this.time*11+t.phaseShift,{figure:n}=t;n.activity="fall",n.clock=this.time,n.heel=0,n.stroke=e,n.pose(.85+.25*Math.sin(e*.5),-.25+Math.sin(e)*.7,.35,[ld.set(-.2,-.05+.4*Math.sin(e),.22+.12*Math.cos(e)),cd.set(.2,-.02+.35*Math.cos(e),.2)])}poseTread(t){const e=this.time*5.2+t.phaseShift,n=Math.sin(e),{figure:i}=t;i.activity="swim",i.clock=this.time,i.heel=0,i.stroke=e,i.pose(.32,.15+.65*Math.sin(e+.4),.4,[ld.set(-.42,.05+.42*n,.28*Math.cos(e)),cd.set(.42,.05+.42*Math.sin(e+Math.PI),.28*Math.cos(e+Math.PI))])}splash(t,e){this.ringGeometry||(this.ringGeometry=new eh(.22,.85,20),this.ringGeometry.rotateX(-Math.PI/2),this.dropGeometry=new dn(.055,6,4));const n=new Yo({color:15202047,transparent:!0,opacity:.8,depthWrite:!1,side:yn}),i=new be;i.name="crewSplash";const o=new jt(this.ringGeometry,n);o.position.set(t,this.heightAt(t,e)+.07,e),o.renderOrder=2,i.add(o);const r=[];for(let a=0;a<4;a+=1){const l=new jt(this.dropGeometry,n),c=a/4*Math.PI*2+this.time;l.position.set(t,o.position.y+.12,e),l.userData.velocity=new D(Math.cos(c)*1.3,2.1+a%2*.5,Math.sin(c)*1.3),l.renderOrder=2,i.add(l),r.push(l)}this.worldGroup.add(i),this.splashes.push({group:i,ring:o,drops:r,material:n,x:t,z:e,age:0})}fadeSplashes(t){for(let e=this.splashes.length-1;e>=0;e-=1){const n=this.splashes[e];n.age+=t;const i=n.age/fS;if(i>=1){this.worldGroup.remove(n.group),n.material.dispose(),this.splashes.splice(e,1);continue}n.material.opacity=.9*(1-i);const o=this.heightAt(n.x,n.z);n.ring.position.y=o+.07,n.ring.scale.setScalar(1.05+1.5*i),this.normalAt(n.x,n.z,Xt),n.ring.quaternion.setFromUnitVectors(ll,Xt);for(const r of n.drops){const a=r.userData.velocity;a.y-=rd*t,r.position.addScaledVector(a,t),r.position.y<o+.05&&(r.position.y=o+.05,a.y<0&&(a.y*=-.25))}}this.splashes.length===0&&this.disposeSplashGeometry()}clearSplashes(){for(const t of this.splashes)this.worldGroup.remove(t.group),t.material.dispose();this.splashes.length=0}disposeSplashGeometry(){this.ringGeometry?.dispose(),this.ringGeometry=null,this.dropGeometry?.dispose(),this.dropGeometry=null}report(){let t=!0;for(const e of this.actors.values())e.phase!=="aboard"&&(t=!1);this.balance.crewAboard=t}dispose(){this.crew.visual.updateWorldMatrix(!0,!0),this.worldGroup.updateWorldMatrix(!0,!0);for(const t of this.actors.values()){const e=t.figure.root;e.parent&&e.parent!==this.crew.group&&this.crew.group.attach(e),t.phase="aboard"}this.clearSplashes(),this.disposeSplashGeometry(),this.worldGroup.traverse(t=>{if(t.isMesh){t.geometry?.dispose();for(const e of[t.material].flat())e?.dispose()}}),this.scene.remove(this.worldGroup)}}function yS(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,l=new Ie;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in o){const d=md(o[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let x=0;x<r[h].length;++x)f.push(r[h][x][u]);const m=md(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function md(s){let t,e,n,i=-1,o=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Ge(r,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){const x=h.getComponent(u,m);a.setComponent(u+d,m,x)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const ve={hips:0,torso:1,head:2,armL:3,foreL:4,armR:5,foreR:6,thighL:7,shinL:8,footL:9,thighR:10,shinR:11,footR:12},MS={shoulderY:.5,upperLen:.28,foreLen:.25,thighLen:.45,shinLen:.41,headPivotY:.57,headLift:.12},gd=[9260596,11037512,7027236,12880742,5582876,9855050],xd=[1445902,2758674,4007964,1051658,4861984],Ke=512,St={skin:[.04,.04],dark:[.4,.06],shorts:[.68,.1],cap:[.88,.1],hair:[.78,.88],jerseyF:[.02,.24,.48,.6],jerseyB:[.52,.24,.98,.6],face:[.02,.625,.5,.985]},SS=1.58,wS=1.16;function ap(s,t,e){const n=Math.atan2(s,e),i=Math.asin(Yt.clamp(t,-1,1));return[Yt.clamp(.5+n/SS,0,1),Yt.clamp(.5+i/wS,0,1)]}function zc(s){return{...MS,woman:s,shoulderX:s?.172:.205,hipX:s?.12:.1,chest:s?.9:1,hips:s?1.14:1,headRadius:s?.104:.112}}function rh(s,t){const e=s.getAttribute("position").count,n=new Uint16Array(e*4),i=new Float32Array(e*4);for(let o=0;o<e;o+=1)n[o*4]=t,i[o*4]=1;return s.setAttribute("skinIndex",new $c(n,4)),s.setAttribute("skinWeight",new ne(i,4)),s}function bS(s,t,e){const n=s.getAttribute("uv");for(let i=0;i<n.count;i+=1)n.setXY(i,t,e);return s}function Se(s,t,e,n){return bS(s,e,n),rh(s,t)}function ra(s,t,e){const n=new Rn(s,t,e,12);return n.translate(0,-e/2,0),n}function ah(s){const t=yS(s);if(!t)throw new Error("Crew geometry merge failed");for(const e of s)e.dispose();return t}function ES(s){const t=s.attributes.position,e=s.attributes.uv;for(let n=0;n<t.count;n+=1){const i=t.getX(n),o=t.getY(n),a=t.getZ(n)>=0?St.jerseyF:St.jerseyB,l=i<-.04?Yt.clamp((i+.26)/.22,0,1)*.28:.28+Yt.clamp((i+.04)/.32,0,1)*.72,c=Yt.clamp((o-0)/.58,.02,.98),h=a[0]+.06*(a[2]-a[0])+l*.88*(a[2]-a[0]),d=a[1]+.08*(a[3]-a[1])+c*.84*(a[3]-a[1]);e.setXY(n,h,d)}return s}function TS(s){const{chest:t,hips:e}=s,n=[new pt(.105*e,0),new pt(.132*e,.07),new pt(.112*(.65+.35*t),.15),new pt(.148*t,.26),new pt(.162*t,.36),new pt(.145*t,.44),new pt(.09,.5),new pt(.055,.55)],i=new Qs(n,16),o=a=>{const l=new dn(.082,12,8);return l.scale(1.2,.78,.95),l.translate(a*s.shoulderX*.7,s.shoulderY-.02,.01),l},r=ah([i,o(-1),o(1)]);return r.computeVertexNormals(),ES(r),rh(r,ve.torso)}function AS(s){const t=new Rn(.125*s.hips,.118*s.hips,.09,12);t.translate(0,.02,0);const e=i=>{const o=new Rn(.082*s.hips,.07,.2,10);return o.translate(i*s.hipX,-.09,0),o},n=ah([t,e(-1),e(1)]);return n.computeVertexNormals(),Se(n,ve.hips,St.shorts[0],St.shorts[1])}function CS(s){const t=[];for(const e of[-1,1]){const n=e<0?ve.armL:ve.armR,i=e<0?ve.foreL:ve.foreR,o=e*s.shoulderX,r=s.shoulderY,a=r-s.upperLen,l=a-s.foreLen,c=ra(.058,.046,s.upperLen+.04);c.translate(0,.02,0),c.translate(o,r,0),t.push(Se(c,n,.3,.42));const h=new dn(.048,10,8);h.translate(o,a,0),t.push(Se(h,n,St.skin[0],St.skin[1]));const d=ra(.046,.036,s.foreLen+.02);d.translate(0,.02,0),d.translate(o,a,0),t.push(Se(d,i,St.skin[0],St.skin[1]));const u=new ps(.026,.038,3,6);u.scale(1.4,1,.8),u.translate(o,l-.032,.008),t.push(Se(u,i,St.skin[0],St.skin[1]));const f=new ps(.012,.018,2,5);f.rotateZ(e*.8),f.translate(o+e*.03,l-.016,.016),t.push(Se(f,i,St.skin[0],St.skin[1]))}return t}function RS(s){const t=[];for(const e of[-1,1]){const n=e<0?ve.thighL:ve.thighR,i=e<0?ve.shinL:ve.shinR,o=e<0?ve.footL:ve.footR,r=e*s.hipX,a=-s.thighLen,l=a-s.shinLen,c=ra(.09,.062,s.thighLen+.04);c.translate(0,.015,0),c.translate(r,0,0),t.push(Se(c,n,St.skin[0],St.skin[1]));const h=new dn(.064,10,8);h.scale(1,.9,1.05),h.translate(r,a,.012),t.push(Se(h,n,St.skin[0],St.skin[1]));const d=ra(.048,.04,s.shinLen+.02);d.translate(0,.015,0),d.translate(r,a,0),t.push(Se(d,i,St.skin[0],St.skin[1]));const u=new dn(.046,8,6);u.scale(1.05,1.35,1.1),u.translate(r,a-s.shinLen*.42,.012),t.push(Se(u,i,St.skin[0],St.skin[1]));const f=new ps(.02,.08,2,5);f.rotateX(Math.PI/2),f.scale(1.2,.55,1),f.translate(r,l-.008,.045),t.push(Se(f,o,St.skin[0],St.skin[1]));const m=new dn(.018,6,4);m.scale(1.2,.5,.85),m.translate(r,l-.006,.095),t.push(Se(m,o,St.skin[0],St.skin[1]))}return t}function PS(s,t,e){const n=s.attributes.position,i=e*.94,o=e*1.06,r=e*.98;for(let a=0;a<n.count;a+=1){const l=n.getX(a),c=n.getY(a)-t,h=n.getZ(a),d=l/i,u=c/o,f=h/r;if(f<.5)continue;let m=0;const x=(d/.12)**2+((u+.05)/.2)**2;x<1&&(m+=(1-x)**2*.011);for(const g of[-1,1]){const p=((d-g*.32)/.16)**2+((u-.06)/.1)**2;p<1&&(m-=(1-p)**2*.008)}m!==0&&n.setXYZ(a,l+d*m,t+c+u*m,h+f*m)}s.computeVertexNormals()}function zS(s,t,e){const n=s.attributes.position,i=s.attributes.uv,o=e*.94,r=e*1.06,a=e*.98,[l,c,h,d]=St.face;for(let u=0;u<n.count;u+=1){const[f,m]=ap(n.getX(u)/o,(n.getY(u)-t)/r,n.getZ(u)/a);i.setXY(u,l+f*(h-l),c+m*(d-c))}return s}function LS(s,t){const e=[],n=t.headPivotY+t.headLift,i=t.headRadius,o=new dn(i,36,28);o.scale(.94,1.06,.98),o.translate(0,n,0),zS(o,n,i),PS(o,n,i),e.push(rh(o,ve.head));const r=new Rn(.046,.062,.09,10);r.translate(0,t.headPivotY-.005,0),e.push(Se(r,ve.torso,St.skin[0],St.skin[1]));for(const l of[-1,1]){const c=new dn(i*.28,8,6);c.scale(.45,1,.7),c.translate(l*i*.98,n-.005,0),e.push(Se(c,ve.head,St.skin[0],St.skin[1]))}const a=new dn(i*1.04,16,8,0,Math.PI*2,0,Math.PI*.32);if(a.translate(0,n+i*.16,-.01),e.push(Se(a,ve.head,St.hair[0],St.hair[1])),s.woman){const l=new dn(.036,8,6);l.translate(0,n-i*.05,-i*.98),e.push(Se(l,ve.head,St.hair[0],St.hair[1]));const c=new ps(.028,.16,3,6);c.rotateX(.7),c.translate(0,n-i*.62,-i*.9),e.push(Se(c,ve.head,St.hair[0],St.hair[1]))}if(s.beard){const l=new dn(i*.42,8,6);l.scale(1.05,.75,.55),l.translate(0,n-i*.62,i*.42),e.push(Se(l,ve.head,St.hair[0],St.hair[1]))}if(s.headwear==="cap"||s.headwear==="visor"){const l=s.headwear==="visor",c=new dn(i*1.02,16,8,0,Math.PI*2,0,Math.PI*.4);c.scale(1.02,.55,1.06),c.translate(0,n+i*.52,-.006),e.push(Se(c,ve.head,St.cap[0],St.cap[1]));const h=new rn(i*(l?1.25:.95),.012,i*(l?.9:.48));h.translate(0,n+i*.22,i*(l?.78:.58)),e.push(Se(h,ve.head,St.cap[0],St.cap[1]))}else if(s.headwear==="bandana"){const l=new $o(i*.94,.024,6,14);l.rotateX(Math.PI/2),l.translate(0,n+i*.12,.005),e.push(Se(l,ve.head,St.cap[0],St.cap[1]));const c=new dn(.022,6,5);c.translate(0,n+i*.05,-i*1.02),e.push(Se(c,ve.head,St.cap[0],St.cap[1]))}else if(s.headwear!=="none")throw new Error(`Unknown headwear: ${s.headwear}`);if(s.glasses){const l=new rn(i*.95,i*.1,i*.04);l.translate(0,n+i*.1,i*.96),e.push(Se(l,ve.head,St.dark[0],St.dark[1]));for(const c of[-1,1]){const h=new rn(i*.42,i*.3,i*.03);h.translate(c*i*.34,n+i*.08,i*.995),e.push(Se(h,ve.head,St.dark[0],St.dark[1]))}}return e}function DS(s,t){const e=ah([TS(t),AS(t),...CS(t),...RS(t),...LS(s,t)]);return e.computeBoundingSphere(),e.boundingSphere.radius*=1.6,e}function qn(s){return`#${s.toString(16).padStart(6,"0")}`}function vd(s,t){const e=new zt(s);return`rgba(${Math.round(e.r*255)}, ${Math.round(e.g*255)}, ${Math.round(e.b*255)}, ${t})`}function je(s,t,e){const n=new zt(s),i=new zt(t);return`#${n.lerp(i,e).getHexString()}`}function IS(s,t,e){const n=t[0]*Ke,i=(1-t[3])*Ke,o=(t[2]-t[0])*Ke,r=(t[3]-t[1])*Ke;return s.fillStyle=e,s.fillRect(n,i,o,r),{x:n,y:i,w:o,h:r}}function _d(s,t,e,n,{collar:i,number:o,numberColor:r,patron:a}){const{x:l,y:c,w:h,h:d}=IS(s,t,qn(e)),u=s.createLinearGradient(l,c,l,c+d);u.addColorStop(0,je(e,16777215,.16)),u.addColorStop(.4,qn(e)),u.addColorStop(1,je(e,0,.22)),s.fillStyle=u,s.fillRect(l,c,h,d),s.fillStyle=qn(n),s.fillRect(l,c,h*.26,d),s.fillStyle=a?qn(i):je(e,i,.55),s.fillRect(l,c,h,d*(a?.16:.07)),o!==void 0&&(s.fillStyle=qn(r),s.font=`700 ${Math.floor(d*.62)}px sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(String(o),l+h*.64,c+d*.56))}function zr(s,t,e,n){const i=.1*Ke;s.fillStyle=n,s.fillRect(t*Ke-i/2,(1-e)*Ke-i/2,i,i)}function wn(s,t){const e=Math.sqrt(Math.max(.04,1-s*s-t*t)),[n,i]=ap(s,t,e),[o,r,a,l]=St.face,c=o+n*(a-o),h=r+i*(l-r);return[c*Ke,(1-h)*Ke]}function we(s,t,e,n){const[i,o]=wn(s,t),[r,a]=wn(s+e,t+n);return Math.max(1.2,Math.hypot(r-i,a-o))}function aa(s,t,e,n,i,o,r){s.save(),s.translate(t,e),s.scale(n,i);const a=s.createRadialGradient(0,0,.08,0,0,1);a.addColorStop(0,vd(o,r)),a.addColorStop(1,vd(o,0)),s.fillStyle=a,s.beginPath(),s.arc(0,0,1,0,Math.PI*2),s.fill(),s.restore()}function ta(s,t,e,n,i,o,r){s.save(),s.globalCompositeOperation="multiply",s.translate(t,e),s.scale(n,i);const a=s.createRadialGradient(0,0,.05,0,0,1);a.addColorStop(0,je(16777215,o,r)),a.addColorStop(1,"#ffffff"),s.fillStyle=a,s.beginPath(),s.arc(0,0,1,0,Math.PI*2),s.fill(),s.restore()}function NS(s,t,e){s.beginPath(),s.moveTo(-t,e*.05),s.bezierCurveTo(-t*.45,-e*.95,t*.25,-e*1.15,t,-e*.02),s.bezierCurveTo(t*.4,e*.58,-t*.42,e*.5,-t,e*.05),s.closePath()}function FS(s,t,e){const n=e*.33,i=.06,[o,r]=wn(n,i),a=we(n,i,.125,0),l=we(n,i,0,.064),c=e*.16;ta(s,o,r+l*.2,we(n,i,.16,0),we(n,i,0,.09),4861992,.62),s.save(),s.translate(o,r),s.rotate(c),NS(s,a,l),s.fillStyle=je(t,15721688,.76),s.fill(),s.clip();const h=we(n,i,.062,0),d=we(n,i,0,.058),u=-e*a*.04;s.beginPath(),s.ellipse(u,l*.1,h,d,0,0,Math.PI*2),s.fillStyle=je(1051656,t,.1),s.fill(),s.lineWidth=Math.max(1,h*.14),s.strokeStyle=je(788486,t,.08),s.stroke(),s.beginPath(),s.ellipse(u,l*.1,h*.42,d*.42,0,0,Math.PI*2),s.fillStyle="#0c0908",s.fill(),s.beginPath(),s.ellipse(u-h*.28,l*.08-d*.32,h*.16,d*.16,0,0,Math.PI*2),s.fillStyle="rgba(255, 250, 244, 0.7)",s.fill(),s.restore(),s.save(),s.translate(o,r),s.rotate(c),s.beginPath(),s.moveTo(-a,l*.05),s.bezierCurveTo(-a*.45,-l*.95,a*.25,-l*1.15,a,-l*.02),s.bezierCurveTo(a*.35,-l*.28,-a*.4,-l*.22,-a,l*.05),s.fillStyle=je(t,2758676,.34),s.fill(),s.beginPath(),s.moveTo(-a*.92,l*.02),s.bezierCurveTo(-a*.4,-l*.72,a*.28,-l*.88,a*.92,0),s.strokeStyle=je(1313802,t,.12),s.lineWidth=Math.max(1.3,l*.32),s.lineCap="round",s.stroke(),s.restore()}function US(s,t,e,n){const i=wn(n*.14,.24),o=wn(n*.33,.3),r=wn(n*.5,.21),a=we(n*.33,.28,0,.02);s.save(),s.fillStyle=je(e,t,.28),s.globalAlpha=.9,s.beginPath(),s.moveTo(i[0],i[1]),s.quadraticCurveTo(o[0],o[1]-a,r[0],r[1]),s.quadraticCurveTo(o[0],o[1]+a*.55,i[0],i[1]+a*.35),s.fill(),s.restore()}function OS(s,t){const[e,n]=wn(0,0);aa(s,e,n,we(0,0,.034,0),we(0,0,0,.15),je(t,16774120,.7),.62);for(const l of[-1,1]){const[c,h]=wn(l*.055,-.04);ta(s,c,h,we(l*.055,-.04,.04,0),we(l*.055,-.04,0,.12),3810332,.55);const[d,u]=wn(l*.042,-.2);ta(s,d,u,we(l*.042,-.2,.03,0),we(l*.042,-.2,0,.018),1707018,.88)}const[i,o]=wn(0,-.15);aa(s,i,o,we(0,-.15,.04,0),we(0,-.15,0,.032),je(t,16773606,.55),.38);const[r,a]=wn(0,-.23);ta(s,r,a,we(0,-.23,.06,0),we(0,-.23,0,.022),4861992,.45)}function BS(s,t){const[e,n]=wn(0,-.36),i=we(0,-.36,.12,0),o=we(0,-.36,0,.03),r=we(0,-.36,0,.042);s.save(),s.translate(e,n),s.beginPath(),s.moveTo(-i,0),s.quadraticCurveTo(-i*.42,-o*.45,0,-o*.12),s.quadraticCurveTo(i*.42,-o*.45,i,0),s.quadraticCurveTo(0,o*.7,-i,0),s.fillStyle=je(t,5120542,.5),s.fill(),s.beginPath(),s.moveTo(-i*.9,o*.05),s.quadraticCurveTo(0,r*.2,i*.9,o*.05),s.quadraticCurveTo(0,r*1.05,-i*.9,o*.05),s.fillStyle=je(t,8010804,.32),s.fill(),s.globalAlpha=.4,s.beginPath(),s.ellipse(0,r*.48,i*.34,r*.32,0,0,Math.PI*2),s.fillStyle=je(t,16770776,.4),s.fill(),s.globalAlpha=1,s.beginPath(),s.moveTo(-i*.78,0),s.quadraticCurveTo(0,o*.12,i*.78,0),s.strokeStyle=je(t,1838090,.7),s.lineWidth=Math.max(1.2,o*.28),s.lineCap="round",s.stroke(),s.restore()}function kS(s,t,e){const[n,i,o,r]=St.face,a=n*Ke,l=(1-r)*Ke,c=(o-n)*Ke,h=(r-i)*Ke;s.fillStyle=qn(t),s.fillRect(a,l,c,h);const[d,u]=wn(0,.38);aa(s,d,u,we(0,.38,.16,0),we(0,.38,0,.1),je(t,16774378,.75),.26);for(const m of[-1,1]){const[x,g]=wn(m*.24,-.05);aa(s,x,g,we(m*.24,-.05,.1,0),we(m*.24,-.05,0,.07),je(t,10108980,.6),.14)}OS(s,t);for(const m of[-1,1])FS(s,t,m),US(s,t,e,m);BS(s,t);const f=4;s.fillStyle=qn(t),s.fillRect(a,l,c,f),s.fillRect(a,l+h-f,c,f),s.fillRect(a,l,f,h),s.fillRect(a+c-f,l,f,h)}function HS(s){const t=document.createElement("canvas");t.width=Ke,t.height=Ke;const e=t.getContext("2d");e.fillStyle=qn(s.skin),e.fillRect(0,0,Ke,Ke),zr(e,St.dark[0],St.dark[1],"#1a120e"),zr(e,St.shorts[0],St.shorts[1],qn(s.shorts)),zr(e,St.cap[0],St.cap[1],qn(s.cap)),zr(e,St.hair[0],St.hair[1],qn(s.hair)),kS(e,s.skin,s.hair),_d(e,St.jerseyF,s.shirt,s.panel,{collar:s.collar,patron:s.patron}),_d(e,St.jerseyB,s.shirt,s.panel,{collar:s.collar,patron:s.patron,number:s.number,numberColor:s.numberColor});const n=new jm(t);return n.colorSpace=nn,n.anisotropy=8,n}function VS(s){const t=GM(s),e=new Map;return{kit:t,proportions:zc,geometry(n){const i=`${n.woman?"w":"m"}-${n.headwear}-${n.glasses?"g":"n"}-${n.beard?"b":"s"}`;let o=e.get(i);return o||(o=DS(n,zc(n.woman)),e.set(i,o)),o},material(n){const i=n.headwear==="visor"?t.visor:n.headwear==="bandana"?t.bandana:t.cap,o=HS({skin:n.skin,hair:n.hair,shirt:t.shirt,shorts:t.shorts,panel:t.panel,collar:t.collar,numberColor:t.number,cap:i,number:n.number,patron:n.patron});return new to({map:o,roughness:.68,metalness:0,sheen:.22,sheenRoughness:.55,sheenColor:new zt(16761512)})}}}const GS=new D(1,0,0),Bs=new D,ks=new D,yd=new D,Lr=new D,Dr=new D,wo=new D,Md=new Gt,Ir=new Gt,Oi=new D,Hs=new D,Sd=new D;function WS(s,t,e,n,i,o){Bs.subVectors(e,s.position);let r=Bs.length();r<1e-5?Bs.set(0,-1,0):Bs.multiplyScalar(1/r);const a=Math.min(n+i-1e-4,Math.max(Math.abs(n-i)+.001,r)),l=Math.PI-Math.acos(Yt.clamp((n*n+i*i-a*a)/(2*n*i),-1,1)),c=Math.acos(Yt.clamp((a*a+n*n-i*i)/(2*a*n),-1,1));ks.crossVectors(Bs,o),ks.lengthSq()<1e-8&&ks.set(1,0,0),ks.normalize(),yd.copy(Bs).applyAxisAngle(ks,c),Dr.copy(yd).negate(),Lr.copy(ks),wo.crossVectors(Lr,Dr),!(wo.lengthSq()<1e-8)&&(wo.normalize(),Lr.crossVectors(Dr,wo).normalize(),Md.makeBasis(Lr,Dr,wo),s.quaternion.setFromRotationMatrix(Md),t.quaternion.setFromAxisAngle(GS,-l))}function XS(s,t){const e=s%5===2||s%5===4,n=t==="patron"||t==="helm";let i="cap";return n?i="visor":t==="bailer"||s%6===1?i="bandana":s%6===3&&(i="none"),{woman:e,headwear:i,glasses:n||s%9===5,beard:!e&&!n&&s%4===1,patron:n,number:s+1,skin:gd[s*3%gd.length],hair:xd[s%xd.length]}}class qS{constructor(t,e,n){const i=XS(e,n),o=zc(i.woman);this.proportions=o,this.phase=e*.73,this.activity="sit",this.clock=0,this.heel=0,this.stroke=0,this.lookSail=new D,this.lookAhead=new D,this.waveArm=-1,this.watchWind=!1,this.watchSide=1,this.hikeKnee=.8,this.root=new be,this.root.name="sailor",this.root.scale.setScalar(.94+e*37%11/100),this.hips=new vn,this.torso=new vn,this.head=new vn,this.arms=[new vn,new vn],this.forearms=[new vn,new vn],this.legs=[new vn,new vn],this.shins=[new vn,new vn],this.feet=[new vn,new vn],this.hips.add(this.torso),this.torso.add(this.head),this.head.position.set(0,o.headPivotY,0),this.arms.forEach((a,l)=>{const c=l===0?-1:1;this.torso.add(a),a.add(this.forearms[l]),a.position.set(c*o.shoulderX,o.shoulderY,0),this.forearms[l].position.set(0,-o.upperLen,0)}),this.legs.forEach((a,l)=>{const c=l===0?-1:1;this.hips.add(a),a.add(this.shins[l]),this.shins[l].add(this.feet[l]),a.position.set(c*o.hipX,0,0),this.shins[l].position.set(0,-o.thighLen,0),this.feet[l].position.set(0,-o.shinLen,0)});const r=[this.hips,this.torso,this.head,this.arms[0],this.forearms[0],this.arms[1],this.forearms[1],this.legs[0],this.shins[0],this.feet[0],this.legs[1],this.shins[1],this.feet[1]];if(r.length!==Object.keys(ve).length)throw new Error("Crew bone list does not match skin indices");this.mesh=new Vm(t.geometry(i),t.material(i)),this.mesh.castShadow=!0,this.mesh.frustumCulled=!1,this.mesh.add(this.hips),this.root.add(this.mesh),this.root.updateMatrixWorld(!0),this.mesh.bind(new Jc(r))}place(t,e,n,i){this.root.position.set(t,e,n),this.root.rotation.set(0,i,0)}pose(t,e,n,i){this.torso.position.y=0,this.torso.rotation.set(t,0,0),this.applyLife(),this.torso.updateMatrix(),Ir.copy(this.torso.matrix).invert();const{upperLen:o,foreLen:r}=this.proportions;this.arms.forEach((a,l)=>{const c=l===0?-1:1;Oi.copy(i[l]).applyMatrix4(Ir);const h=this.waveArm===l;Sd.set(c*(h?1.15:.55),h?.25:.12,h?.05:-1),WS(a,this.forearms[l],Oi,o,r,Sd)}),this.waveArm=-1,this.poseLegs(e,n)}poseLegs(t,e){const n=this.activity==="swim",i=this.activity==="fall";this.legs.forEach((o,r)=>{const a=(n?.65:i?1:0)*(r===0?1:-1)*Math.sin(this.stroke);o.rotation.set(-t+a,0,(r===0?-1:1)*e);const l=-o.rotation.x;let c;n?c=.7+.45*Math.sin(this.stroke+r*Math.PI):i?c=.45+.8*Math.abs(Math.sin(this.stroke+r)):this.activity==="hike"?c=this.hikeKnee??.8:l>.3?c=Math.min(1.4,.3+l*.8):c=.22+Math.max(0,-l)*.2,this.shins[r].rotation.set(c,0,0);let h=-.2;n?h=-.35+.45*Math.sin(this.stroke+r*Math.PI):i?h=-.5:l<-.25?h=-.4:l>.6?h=-.1:this.activity==="hike"?h=-.45:(this.activity==="stand"||this.activity==="carry")&&(h=-.12),this.feet[r].rotation.set(h,0,0)})}applyLife(){if(this.activity==="swim"||this.activity==="fall"){this.head.rotation.set(.18*Math.sin(this.stroke),.22*Math.sin(this.clock*.7+this.phase),.12*Math.sin(this.stroke*.6)),this.torso.position.y=.008*Math.sin(this.stroke*.5),this.torso.rotation.z=.06*Math.sin(this.stroke*.4);return}const t=Math.sin(this.clock*1.7+this.phase);this.torso.rotation.x+=.02*t,this.torso.position.y=.006*t,this.torso.rotation.z=Yt.clamp(this.heel,-.5,.5)*.28,this.aimHead()}aimHead(){const t=Math.sin(this.clock*.17+this.phase)>-.2?this.lookSail:this.lookAhead,{clamp:e}=Yt;if(t.lengthSq()<1e-4){this.head.rotation.set(this.activity==="hike"?-1.15:0,.12*Math.sin(this.clock*.3+this.phase),0);return}this.torso.updateMatrix(),Ir.copy(this.torso.matrix).invert(),Oi.copy(t).applyMatrix4(Ir).sub(this.head.position);const n=Math.atan2(Oi.x,Oi.z),i=Math.atan2(Oi.y,Math.hypot(Oi.x,Oi.z)),o=.04*Math.sin(this.clock*.45+this.phase);if(this.activity==="hike"){const r=this.watchWind?this.watchSide*.8:0;this.head.rotation.set(-.2,r+o,0);return}this.head.rotation.set(e(i,-.45,.55)*.5,e(n,-.9,.9)*.7+o,.03*Math.sin(this.clock*.3+this.phase))}toRoot(t,e){const{position:n,rotation:i,scale:o}=this.root;Hs.subVectors(t,n);const r=Math.sin(i.y),a=Math.cos(i.y);return e.set(Hs.x*a-Hs.z*r,Hs.y,Hs.x*r+Hs.z*a).divideScalar(o.x)}fromRoot(t,e){const{position:n,rotation:i,scale:o}=this.root,r=Math.sin(i.y),a=Math.cos(i.y),l=t.x*o.x,c=t.z*o.x;return e.set(l*a+c*r,t.y*o.x,-l*r+c*a).add(n)}}const la=.055,is=2.15,YS=8,wd=.2,bd=1.18,jS=.1,Ed=.14,$S=.06,ZS=.32,KS=.55,Td=.18,JS=.1,Ad=.18,QS=.75,tw=.82,ew=.2,hl=.86,ul=.3,Vs=.12,Cd=.012,nw=new D(0,1,0),Rd=new D,cn=new D,Gs=new D,wi=new D,In=new D,Bi=new D,ss=new D,Pd=new Gt;function zd(s,t){const e=new jt(s,t);return e.castShadow=!0,e}function iw(s){const t=Math.max(.2,s-la*2),e=new ps(la,t,3,16);return e.rotateZ(Math.PI/2),e}function sw(s){const n=new Uint8Array(36864),i=s>>16&255,o=s>>8&255,r=s&255;for(let l=0;l<192;l+=1){const c=.96+.05*Math.sin(l*.41)+.02*Math.sin(l*.11+1.1);for(let h=0;h<48;h+=1){const d=.97+.045*Math.sin(h/48*Math.PI*6+l*.018),u=c*d,f=(l*48+h)*4;n[f]=Math.max(0,Math.min(255,Math.round(i*u))),n[f+1]=Math.max(0,Math.min(255,Math.round(o*u))),n[f+2]=Math.max(0,Math.min(255,Math.round(r*u*.97))),n[f+3]=255}}const a=new hi(n,48,192,Ze);return a.colorSpace=nn,a.wrapS=Ri,a.wrapT=Ri,a.anisotropy=4,a.needsUpdate=!0,a}class ow{constructor(t,e,n,i){const{hull:o,crew:r,livery:a,steering:l}=t;this.visual=e,this.rig=n,this.hull=o,this.poleLength=r.poleLength,this.look=VS(a),this.wind=null,this.waveLeft=0,this.waveCooldown=0,this.gustPending=!1,this.callingGust=!1,this.gustAhead=null,this.poleGeometry=iw(r.poleLength),this.poleMaterial=new an({map:sw(a.pole),roughness:.62,metalness:0,envMapIntensity:.2}),this.ropeGeometry=new Rn(Cd,Cd,1,6),this.ropeMaterial=new an({color:15260864,roughness:.9}),this.group=new be,this.group.name="crew",e.add(this.group),this.time=0,this.heel=0,this.clewPoint=new D,this.aheadPoint=new D(0,1.6,8);let c=0;const h=m=>{const x=new qS(this.look,c++,m);return this.group.add(x.root),x};this.poles=r.dresseurStations.map(m=>{const x=Xo(o,m),g=x.sheer-Ed,p=op(o,x,g),v=x.halfBeam,y=Math.atan2(Ed+$S,p+v),M=zd(this.poleGeometry,this.poleMaterial);return this.group.add(M),{z:m,seatY:g,inner:p,outer:v,slope:y,mesh:M,floorY:x.keel+o.floor,reachLimit:this.poleLength*Math.cos(y)-p-KS,height:x.sheer+Vs-o.draft,figure:h("dresseur"),frame:{side:1,stand:0,poleX:0,poleY:g,slope:y}}}),this.seats=[];const d=(m,x,g)=>{const p=Xo(o,x),v={role:m,z:x,station:p,floorY:p.keel+o.floor,figure:h(m),...g};return this.seats.push(v),v},u=d("sheet",r.sheetHand.z,{lever:r.sheetHand.lever,switchesSide:!0});if(u.height=u.floorY+ul+Vs-o.draft,this.rope=zd(this.ropeGeometry,this.ropeMaterial),this.group.add(this.rope),l.type==="rudder"){const m=d("helm",r.helm.z,{lever:r.helm.lever,switchesSide:!0});m.height=m.station.sheer-.1+Vs-o.draft}else{const m=n.paddle.group.position.z+l.inboardLength+.4,x=d("patron",m,{lever:0,switchesSide:!1});x.height=x.floorY+hl+Vs-o.draft,r.paddleAides.forEach((g,p)=>{const v=p%2===0?1:-1,y=n.paddle.group.position.z+g*Math.cos(l.slope),M=d("aide",y,{side:v,grip:n.paddle.grips[p],switchesSide:!1});M.lever=v*(M.station.halfBeam-.04),M.height=M.station.sheer+.06+Vs-o.draft})}const f=d("bailer",r.bailer.z,{bailer:!0,switchesSide:!0});f.lever=f.station.halfBeam+.1,f.height=f.station.sheer+Vs-o.draft,this.count=c,this.layout={dresseurs:this.poles.map(({z:m,height:x,inner:g,reachLimit:p})=>({z:m,height:x,minReach:ew-g,maxReach:p})),others:this.seats.map(({role:m,lever:x,height:g,switchesSide:p,bailer:v})=>({role:m,lever:x,height:g,switchesSide:p,bailer:!!v}))},this.overboard=new _S(this,i)}dispose(){this.overboard.dispose()}update(t,e,n,i){this.time=Number.isFinite(e)?e:0,this.heel=t.heel,Pd.copy(this.visual.matrixWorld).invert(),this.markerInVisual(this.rig.clew,this.clewPoint),this.balance=t,this.poles.forEach((o,r)=>this.layoutPole(o,t.dresseurs[r])),this.considerGust(n),this.group.updateMatrixWorld(!0),this.overboard.update(t,Number.isFinite(e)?e:0,n,i)}poseSeat(t,e,n,i){switch(t.role){case"sheet":this.updateSheetHand(t,e);break;case"helm":this.updateBarreur(t,e);break;case"patron":this.updatePatron(t);break;case"aide":this.updateAide(t);break;case"bailer":this.updateBailer(t,e,n.bailerJoin,i);break;default:throw new Error(`Unknown crew role: ${t.role}`)}}prepare(t){t.clock=this.time,t.heel=this.heel,t.stroke=this.time,t.lookSail.copy(t.toRoot(this.clewPoint,Bi)),t.lookAhead.copy(t.toRoot(this.aheadPoint,ss))}markerInVisual(t,e){return t.getWorldPosition(e).applyMatrix4(Pd)}layoutPole(t,e){const n=t.frame,{slope:i,seatY:o,inner:r}=t;n.side=Gi(e.blend),n.stand=Math.sin(Math.PI*(n.side+1)/2),n.slope=i;const a=this.poleLength/2;n.poleX=n.side*(a*Math.cos(i)-r),n.poleY=o+a*Math.sin(i)*Math.abs(n.side)+n.stand*ZS,t.mesh.position.set(n.poleX,n.poleY,t.z),t.mesh.rotation.z=n.side*i}considerGust(t){const e=this.balance,n=this.poles[0],i=this.overboard.actors.get(n.figure),o=e.isCapsized||i?.phase!=="aboard",r=e.dresseurs[0],a=n.frame.stand>jS||Math.abs(r.blend-r.target)>.04;if(o){this.gustPending=!1,this.waveLeft=0,this.callingGust=!1;return}this.waveLeft>0&&!a?(this.waveLeft=Math.max(0,this.waveLeft-t),this.waveLeft===0&&(this.waveCooldown=YS)):this.waveLeft<=0&&this.waveCooldown>0&&(this.waveCooldown=Math.max(0,this.waveCooldown-t));const l=this.wind?.upcomingGust?.()??null;if(this.gustAhead=l,l&&this.waveLeft<=0){const c=this.wind.sample(this.wind.focusX,this.wind.focusZ),h=l.strength-c>=wd&&l.strength>=bd;(l.forced||h&&this.waveCooldown<=0)&&(this.gustPending=!0)}if(!a&&this.gustPending&&this.waveLeft<=0){const c=this.wind?this.wind.sample(this.wind.focusX,this.wind.focusZ):1;l&&(l.forced||l.strength-c>=wd&&l.strength>=bd)&&(l.forced||this.waveCooldown<=0)?(this.waveLeft=is,this.gustPending=!1):this.gustPending=!1}this.callingGust=this.waveLeft>0&&!a}poseDresseur(t,e){const{side:n,stand:i,poleX:o,poleY:r,slope:a}=t.frame,{figure:l}=t,{lerp:c,smoothstep:h}=Yt;if(t===this.poles[0]){l.restScale==null&&(l.restScale=l.root.scale.x);const _=is-this.waveLeft,w=this.callingGust?h(_,0,.22)*(1-h(_,is-.32,is)):0;l.root.scale.setScalar(c(l.restScale,Math.max(l.restScale,.96),w))}const d=l.root.scale.x,u=Math.tan(n*a),f=n*e.reach,m=r+(f-o)*u,x=Yt.smoothstep(e.reach,t.outer*.6,t.reachLimit),g=c(QS,tw,x),p=c(g,.12,i),v=Td*Math.cos(g)*d,y=Td*Math.sin(g)*d,M=m+la+JS*Math.sin(g)*d-.022,b=c(M-v,t.floorY+hl,i),T=c(t.z-y,t.z-.05,i);l.place(f,b,T,0);const C=(_,w)=>{const R=f+_,I=r+(R-o)*u+la+.012;return w.set(R,I,t.z),l.toRoot(w,w)};C(-Ad,wi),C(Ad,In),i>.01&&(Bi.set(-.16,.32,.22),ss.set(.16,.32,.22),wi.lerp(Bi,i),In.lerp(ss,i)),l.activity=i>.55?"carry":"hike",l.hikeKnee=c(1.25,.55,x),l.watchWind=t===this.poles[0]&&i<.4,l.watchSide=n,l.waveArm=-1;let z=p;t===this.poles[0]&&this.callingGust&&(z=this.poseWave(l,p)),this.prepare(l),l.pose(z,c(c(.45,.08,x),.15,i),.1,[wi,In])}poseWave(t,e){const n=is-this.waveLeft,{lerp:i,smoothstep:o,clamp:r}=Yt,a=o(n,0,.22)*(1-o(n,is-.32,is)),l=Math.sin(n*Math.PI*3)*a,c=i(e,Math.max(.28,e-.55),a),h=In.x,d=In.y,u=In.z;return t.root.updateMatrixWorld(!0),t.torso.rotation.set(c,0,r(this.heel,-.5,.5)*.28),t.torso.updateMatrixWorld(!0),t.arms[1].getWorldPosition(Gs),cn.set(0,0,1).transformDirection(this.visual.matrixWorld),cn.y=0,cn.lengthSq()>1e-6&&cn.normalize(),Bi.copy(Gs),Bi.y+=.52,Bi.addScaledVector(cn,l*.14),t.root.parent.worldToLocal(Bi),t.toRoot(Bi,ss),In.set(i(h,ss.x,a),i(d,ss.y,a),i(u,ss.z,a)),t.waveArm=1,c}updateSheetHand(t,e){this.rope.visible=!0;const n=Gi(e.blend),{figure:i}=t,o=this.markerInVisual(this.rig.clew,Gs),r=n*t.lever,a=Math.atan2(o.x-r,o.z-t.z);i.place(r,t.floorY+ul,t.z,a);const l=i.toRoot(o,cn).sub(Rd.set(0,.5,0)),c=Math.min(.48,l.length()),h=Rd.set(0,.5,0).addScaledVector(l.normalize(),c);i.activity="sit",this.prepare(i),i.pose(-.15,1.35,.15,[wi.copy(h).setX(h.x-.06),In.copy(h).setX(h.x+.06)]);const d=i.fromRoot(h,wi),u=cn.subVectors(o,d),f=u.length();this.rope.position.lerpVectors(d,o,.5),this.rope.quaternion.setFromUnitVectors(nw,u.normalize()),this.rope.scale.set(1,f,1)}updateBarreur(t,e){const n=Gi(e.blend),{figure:i}=t,o=this.markerInVisual(this.rig.rudder.tillerTip,Gs),r=n*t.lever;i.place(r,t.station.sheer-.1,t.z,.3*Math.atan2(o.x-r,o.z-t.z));const a=i.toRoot(o,wi),l=In.set(.18,.05,.32),c=n>0;c||(l.x=-l.x),i.activity="sit",this.prepare(i),i.pose(.15,1.25,.18,c?[a,l]:[l,a])}updatePatron(t){const{figure:e}=t,n=this.markerInVisual(this.rig.paddle.handle,Gs),i=this.rig.paddle.handleWidth/2-.04;e.place(n.x,t.floorY+hl,n.z+.4,Math.PI),cn.copy(n).setX(n.x+i);const o=e.toRoot(cn,wi);cn.copy(n).setX(n.x-i);const r=e.toRoot(cn,In);e.activity="stand",this.prepare(e),e.pose(.22,.05,.14,[o,r])}updateAide(t){const{figure:e,side:n}=t,i=this.markerInVisual(t.grip,Gs),o=n*(t.station.halfBeam-.04);e.place(o,t.station.sheer+.06,t.z,-n*Math.PI/2),cn.copy(i).setZ(i.z-.13);const r=e.toRoot(cn,wi);cn.copy(i).setZ(i.z+.13);const a=e.toRoot(cn,In);e.activity="sit",this.prepare(e),e.pose(.4,1.1,.16,r.x<a.x?[r,a]:[a,r])}updateBailer(t,e,n,i){const o=Gi(e.blend),{figure:r,station:a}=t,{lerp:l}=Yt;r.place(l(0,o*(a.halfBeam-.02),n),l(t.floorY+ul,a.sheer+.06,n),t.z,n*o*Math.PI/2);const c=.08*Math.sin(i*4.5),h=l(-.22+c,-.06,n),d=l(.42,.04,n),u=l(.12,.25,n);r.activity="bail",this.prepare(r),r.pose(l(.95,.45,n),l(1.5,.15,n),.2,[wi.set(-u,h,d),In.set(u,h,d)])}}const rw="Coast © OpenStreetMap contributors (ODbL). Relief: AWS Terrain Tiles (SRTM, ETOPO1), CC BY 4.0.",aw={east:"+X",north:"-Z",up:"+Y"},lw=30,cw=11,hw=4,uw=888,dw=1024,fw="north",pw={elevMin:-400,elevMax:1600,landChannel:"b"},mw={minX:-897.5889810110037,maxX:897.5889810110037,minZ:-1035.4400000000041,maxZ:1035.4399999999976},gw={lat0:14.629999999999999,lon0:-61.03,latMin:14.35,latMax:14.91,lonMin:-61.28,lonMax:-60.78,metersPerDegLat:110940,metersPerDegLon:107710.67772132045,horizontalScale:30},xw=JSON.parse('[[{"x":90.5,"z":180.5},{"x":97,"z":186.8},{"x":94.1,"z":198.6},{"x":105.9,"z":197.4},{"x":94.4,"z":208.8},{"x":86.9,"z":238},{"x":96.8,"z":238},{"x":100.9,"z":251},{"x":107.7,"z":233.9},{"x":116.1,"z":236.1},{"x":116.2,"z":223.2},{"x":126.8,"z":208.8},{"x":137.9,"z":203.1},{"x":141.6,"z":209.3},{"x":132.1,"z":216},{"x":137.3,"z":221.6},{"x":129.4,"z":229.5},{"x":137.1,"z":229.8},{"x":139.7,"z":237.8},{"x":127.6,"z":247},{"x":142.1,"z":243.9},{"x":160.1,"z":254.1},{"x":153.7,"z":265.9},{"x":141.8,"z":269.8},{"x":149,"z":268.7},{"x":157.2,"z":276.2},{"x":166.6,"z":267.5},{"x":176.9,"z":273.8},{"x":171.3,"z":280.1},{"x":191.3,"z":277.9},{"x":190.3,"z":288.3},{"x":165.6,"z":297.7},{"x":185.4,"z":308.1},{"x":166,"z":305.9},{"x":161.2,"z":314.9},{"x":154.2,"z":308.1},{"x":145.8,"z":314},{"x":154.5,"z":325},{"x":175.7,"z":313.7},{"x":185.5,"z":316.7},{"x":159.6,"z":339.4},{"x":163.9,"z":354.2},{"x":155,"z":343.5},{"x":144.2,"z":346.1},{"x":154,"z":354.5},{"x":143.7,"z":361.2},{"x":153.5,"z":365.9},{"x":153,"z":370.9},{"x":129.2,"z":364.8},{"x":124.6,"z":342.6},{"x":114.2,"z":349.3},{"x":118.3,"z":363.2},{"x":99.7,"z":358.9},{"x":83.7,"z":365.7},{"x":83.4,"z":354.6},{"x":67,"z":355.5},{"x":86.4,"z":335.6},{"x":79.4,"z":325.7},{"x":61.1,"z":342},{"x":63.6,"z":349.8},{"x":52.1,"z":351.5},{"x":44.5,"z":359.9},{"x":40.6,"z":357.8},{"x":48.3,"z":348.5},{"x":40.4,"z":335.2},{"x":34.2,"z":334.8},{"x":31.2,"z":341.4},{"x":23.3,"z":335.2},{"x":10.2,"z":351.5},{"x":8.4,"z":343.6},{"x":-6.5,"z":345},{"x":0,"z":330.1},{"x":-15.1,"z":325.2},{"x":-18.8,"z":332.8},{"x":-26.6,"z":333.8},{"x":-22.9,"z":326.5},{"x":-38.7,"z":327.5},{"x":-46.7,"z":309.5},{"x":-51.6,"z":309.2},{"x":-25.3,"z":295.5},{"x":-28.7,"z":272.5},{"x":-35.7,"z":271.6},{"x":-43.5,"z":281.5},{"x":-41.3,"z":293.7},{"x":-47.9,"z":285.6},{"x":-77,"z":291.4},{"x":-66.3,"z":261.8},{"x":-71.6,"z":260.3},{"x":-75.3,"z":269.7},{"x":-79.1,"z":250.5},{"x":-88.5,"z":273.7},{"x":-81.8,"z":279.6},{"x":-84.1,"z":286.3},{"x":-92.5,"z":293.9},{"x":-102,"z":289.9},{"x":-112.5,"z":293.7},{"x":-129.3,"z":331.1},{"x":-158.2,"z":329.9},{"x":-165.6,"z":323.9},{"x":-183,"z":344.6},{"x":-206.7,"z":353.7},{"x":-205.9,"z":362.2},{"x":-211.3,"z":365.3},{"x":-206.3,"z":379},{"x":-215.5,"z":376.2},{"x":-215,"z":386.9},{"x":-230.4,"z":389.1},{"x":-232.8,"z":402.6},{"x":-241.6,"z":411.9},{"x":-239.3,"z":429.9},{"x":-254.3,"z":448.2},{"x":-252.2,"z":454.2},{"x":-238.7,"z":456.9},{"x":-216.1,"z":451.7},{"x":-197.5,"z":463.5},{"x":-194.2,"z":485.5},{"x":-213.8,"z":488.8},{"x":-217,"z":506.7},{"x":-199.5,"z":514},{"x":-189,"z":510},{"x":-177.8,"z":520.6},{"x":-175.6,"z":556.2},{"x":-188.7,"z":567.9},{"x":-186,"z":590.3},{"x":-167.1,"z":600.7},{"x":-143.9,"z":596.8},{"x":-136.1,"z":604.3},{"x":-132.9,"z":628.2},{"x":-124.7,"z":638.6},{"x":-91.1,"z":651.1},{"x":-65.7,"z":633.6},{"x":-54.7,"z":591.7},{"x":-6,"z":564.3},{"x":40.4,"z":551.6},{"x":74.3,"z":583.1},{"x":87.2,"z":587.3},{"x":79.4,"z":578.9},{"x":87.6,"z":569.2},{"x":82,"z":565.4},{"x":84.9,"z":554.9},{"x":78.3,"z":552.5},{"x":82.8,"z":541.9},{"x":91.4,"z":557.1},{"x":83,"z":566.2},{"x":96.3,"z":558.8},{"x":111.4,"z":595.4},{"x":128.5,"z":596},{"x":139.4,"z":604.7},{"x":145.2,"z":598.8},{"x":143.2,"z":590.4},{"x":133.5,"z":592.3},{"x":124.9,"z":585.5},{"x":138.4,"z":588.5},{"x":144.2,"z":582.9},{"x":144.2,"z":572.6},{"x":136.2,"z":567.1},{"x":141.1,"z":554.4},{"x":136.3,"z":540.7},{"x":144.4,"z":554.1},{"x":142.7,"z":561.9},{"x":161.4,"z":580.9},{"x":162.6,"z":564.2},{"x":168.3,"z":561.5},{"x":160.6,"z":560.3},{"x":156.2,"z":550.6},{"x":166.7,"z":554.4},{"x":167.7,"z":543.6},{"x":160.8,"z":535.6},{"x":168.4,"z":525},{"x":168,"z":536.1},{"x":175.2,"z":542.2},{"x":183.2,"z":535.7},{"x":182.8,"z":551.2},{"x":193.8,"z":565},{"x":192.8,"z":578.3},{"x":185.1,"z":585.8},{"x":192.2,"z":594.9},{"x":202.3,"z":598.8},{"x":217.7,"z":590.1},{"x":210.2,"z":578.9},{"x":217.3,"z":572.1},{"x":215.4,"z":584.2},{"x":227.9,"z":579.6},{"x":216.8,"z":568.3},{"x":221.1,"z":561.2},{"x":235.2,"z":563.3},{"x":240.2,"z":587.4},{"x":246.3,"z":596.1},{"x":262.5,"z":600.7},{"x":264.4,"z":608.6},{"x":293.9,"z":601.9},{"x":312,"z":605.2},{"x":318.3,"z":614},{"x":337.5,"z":611.9},{"x":342.8,"z":619.2},{"x":390.7,"z":599.8},{"x":398.9,"z":601.5},{"x":404,"z":585.1},{"x":406.8,"z":598},{"x":425.6,"z":596.1},{"x":423.1,"z":614.7},{"x":428.4,"z":595.6},{"x":423.9,"z":627.2},{"x":432.7,"z":629.3},{"x":465.8,"z":659.3},{"x":464.9,"z":669.9},{"x":469.8,"z":673.5},{"x":493.2,"z":655.5},{"x":499.6,"z":633.2},{"x":507.5,"z":630.5},{"x":526.2,"z":606},{"x":530.3,"z":609.7},{"x":536.4,"z":600},{"x":545.1,"z":600.6},{"x":550.7,"z":585.7},{"x":565,"z":596.3},{"x":587.5,"z":588.7},{"x":596.5,"z":596.4},{"x":596,"z":603.7},{"x":609.9,"z":599.3},{"x":606.8,"z":608.4},{"x":612.5,"z":607.6},{"x":603.2,"z":617.5},{"x":603.4,"z":626.5},{"x":593.9,"z":625.4},{"x":582.5,"z":634.8},{"x":587.5,"z":639.4},{"x":592.3,"z":634.6},{"x":597.8,"z":639.5},{"x":608.1,"z":636.7},{"x":598.2,"z":667.1},{"x":591.1,"z":666.6},{"x":592.3,"z":652.6},{"x":584.4,"z":654.9},{"x":577.8,"z":643.7},{"x":567.2,"z":644.5},{"x":569,"z":635.1},{"x":559.8,"z":658.7},{"x":554.2,"z":659.2},{"x":564,"z":662},{"x":564.7,"z":673.3},{"x":552.7,"z":669.4},{"x":543.9,"z":677.3},{"x":524.6,"z":658.7},{"x":523,"z":674.8},{"x":538.9,"z":707.5},{"x":514.2,"z":754.8},{"x":490.4,"z":778.3},{"x":519,"z":799.4},{"x":519.4,"z":809.7},{"x":511.7,"z":811.8},{"x":522.2,"z":820.6},{"x":520.5,"z":829.8},{"x":550.8,"z":845.5},{"x":552.7,"z":854.5},{"x":546.6,"z":861},{"x":579.5,"z":870},{"x":590.2,"z":862},{"x":598.6,"z":861.7},{"x":598.5,"z":866.7},{"x":605.8,"z":861.2},{"x":611.1,"z":866.3},{"x":618,"z":857.5},{"x":624.9,"z":861.3},{"x":628.9,"z":834.3},{"x":660.4,"z":800.4},{"x":686.5,"z":810.7},{"x":688.9,"z":796.8},{"x":662.8,"z":791.5},{"x":670.6,"z":774.7},{"x":655.4,"z":778.3},{"x":656.6,"z":767.4},{"x":647.9,"z":770.1},{"x":650.7,"z":749.7},{"x":673.5,"z":750.8},{"x":680.7,"z":764.5},{"x":673.8,"z":763.7},{"x":679.2,"z":767.9},{"x":701.7,"z":762.4},{"x":698.3,"z":752.6},{"x":708.7,"z":740.8},{"x":702.6,"z":730.1},{"x":718.1,"z":718.2},{"x":729.2,"z":720.1},{"x":737.9,"z":702.1},{"x":744.7,"z":679.3},{"x":739.6,"z":659.7},{"x":747.1,"z":654.9},{"x":749.1,"z":643.7},{"x":760.5,"z":633.7},{"x":768.2,"z":635.3},{"x":770.4,"z":626.7},{"x":790.9,"z":628.4},{"x":775.1,"z":626.6},{"x":758.2,"z":602.2},{"x":759.6,"z":590.4},{"x":737.9,"z":586.8},{"x":748.5,"z":580.2},{"x":742.8,"z":571},{"x":746.5,"z":565.3},{"x":765.3,"z":574.8},{"x":756.6,"z":586.2},{"x":777,"z":577.7},{"x":788.7,"z":553},{"x":772.8,"z":530.6},{"x":770.2,"z":506.8},{"x":762.2,"z":506},{"x":761.8,"z":498.8},{"x":751.5,"z":506.8},{"x":743.8,"z":498.4},{"x":745.7,"z":470.3},{"x":739.5,"z":461.3},{"x":745.6,"z":441.5},{"x":741.5,"z":432.7},{"x":736,"z":425.7},{"x":718.6,"z":426.7},{"x":714.9,"z":430.6},{"x":732.3,"z":427.8},{"x":730.3,"z":432.8},{"x":703.4,"z":445.4},{"x":692.7,"z":433.1},{"x":699,"z":426},{"x":695.6,"z":419.6},{"x":706.6,"z":415.2},{"x":697.4,"z":408.3},{"x":699.7,"z":395.2},{"x":721.7,"z":376.9},{"x":734.9,"z":377.5},{"x":727.7,"z":361.2},{"x":705.5,"z":367.4},{"x":707.5,"z":360.4},{"x":693.4,"z":358.5},{"x":701.4,"z":339.9},{"x":716.3,"z":347},{"x":730.1,"z":343.3},{"x":721.2,"z":324.2},{"x":705.7,"z":308.9},{"x":701.5,"z":309.1},{"x":703.4,"z":313.9},{"x":695.7,"z":310.6},{"x":688,"z":295.3},{"x":696.8,"z":290.5},{"x":697.4,"z":271.8},{"x":704.8,"z":272.2},{"x":717.8,"z":257.9},{"x":719.4,"z":238.4},{"x":735.3,"z":228.9},{"x":716.1,"z":224.1},{"x":705.3,"z":230.8},{"x":709.6,"z":233.7},{"x":686.5,"z":251.4},{"x":689.2,"z":268.1},{"x":681.5,"z":260.8},{"x":658.8,"z":268.8},{"x":656,"z":256.5},{"x":675.6,"z":248.7},{"x":679.6,"z":233.9},{"x":653.3,"z":241.2},{"x":649.8,"z":235.9},{"x":672.3,"z":216.6},{"x":664.7,"z":215.7},{"x":656.8,"z":224},{"x":650.4,"z":219.7},{"x":641.1,"z":227.1},{"x":636,"z":209.9},{"x":627.8,"z":213.6},{"x":636.1,"z":206.6},{"x":635.7,"z":196.7},{"x":655.6,"z":198.2},{"x":674.4,"z":188.5},{"x":632.2,"z":186.6},{"x":641.2,"z":174.8},{"x":659.7,"z":176.8},{"x":661.6,"z":170.1},{"x":644.8,"z":164.3},{"x":652.6,"z":155.3},{"x":648.6,"z":146.4},{"x":642.4,"z":147.9},{"x":642,"z":127.6},{"x":635.2,"z":137.9},{"x":623.8,"z":140.9},{"x":619.6,"z":158.1},{"x":600.7,"z":148.8},{"x":591.9,"z":153},{"x":579.5,"z":142.2},{"x":581.5,"z":135.3},{"x":564.7,"z":124.8},{"x":567.5,"z":104.8},{"x":579.1,"z":110.6},{"x":581.9,"z":107},{"x":574.7,"z":87.9},{"x":551.4,"z":82.6},{"x":557.5,"z":74.8},{"x":537.4,"z":70.2},{"x":537.8,"z":64.6},{"x":551.5,"z":59.3},{"x":552.4,"z":51.9},{"x":577.8,"z":46.3},{"x":574.1,"z":39},{"x":556.6,"z":40},{"x":549.9,"z":30.8},{"x":536.8,"z":44.4},{"x":525.4,"z":37.9},{"x":515.2,"z":53.1},{"x":509.8,"z":29.1},{"x":503.5,"z":32.6},{"x":504.4,"z":39.7},{"x":472.1,"z":33.2},{"x":471,"z":25.9},{"x":480.8,"z":23.5},{"x":475.3,"z":7.6},{"x":469.6,"z":6.4},{"x":485.1,"z":6},{"x":485.4,"z":-5.9},{"x":499.1,"z":-4},{"x":494.6,"z":-14.4},{"x":498.7,"z":-22.8},{"x":481,"z":-17.9},{"x":488.8,"z":-25.8},{"x":485.2,"z":-33.7},{"x":490.6,"z":-39.9},{"x":507.4,"z":-41.7},{"x":502.9,"z":-49},{"x":491.3,"z":-40.5},{"x":482.3,"z":-41.3},{"x":466.9,"z":-57.4},{"x":442.2,"z":-59.5},{"x":446.4,"z":-68.2},{"x":460,"z":-72.4},{"x":453.8,"z":-81.9},{"x":459,"z":-87.5},{"x":465.8,"z":-79.5},{"x":471.4,"z":-90.5},{"x":472.8,"z":-72.2},{"x":479.1,"z":-68.1},{"x":482.6,"z":-83.5},{"x":487.3,"z":-74.3},{"x":496.9,"z":-79.1},{"x":501,"z":-74.2},{"x":504.8,"z":-97.8},{"x":517.9,"z":-84},{"x":517.9,"z":-110.2},{"x":527.3,"z":-106},{"x":528.7,"z":-130},{"x":501.5,"z":-131.6},{"x":495.6,"z":-118.3},{"x":498.9,"z":-109.3},{"x":488.8,"z":-106.8},{"x":485.1,"z":-115.4},{"x":469.7,"z":-115},{"x":477.5,"z":-130.3},{"x":465.2,"z":-129.4},{"x":461.4,"z":-119.3},{"x":452.8,"z":-126.6},{"x":454.9,"z":-133.4},{"x":445.1,"z":-135.5},{"x":445.4,"z":-119.8},{"x":439.2,"z":-124.1},{"x":434.7,"z":-120.2},{"x":425.3,"z":-133.1},{"x":409.6,"z":-124.3},{"x":408.6,"z":-116.1},{"x":395.5,"z":-104.7},{"x":395.6,"z":-90.4},{"x":389.3,"z":-95.5},{"x":369.2,"z":-84.7},{"x":359.8,"z":-87.7},{"x":348.4,"z":-102.6},{"x":340.6,"z":-128.6},{"x":325.8,"z":-130.3},{"x":312.6,"z":-146.9},{"x":312.9,"z":-157.1},{"x":329.2,"z":-166.2},{"x":335,"z":-194.4},{"x":345.5,"z":-195.4},{"x":359.5,"z":-179.5},{"x":378.9,"z":-179.1},{"x":361.6,"z":-197.2},{"x":367.6,"z":-213},{"x":375.2,"z":-218},{"x":392.9,"z":-213.1},{"x":399.8,"z":-225.6},{"x":420.3,"z":-228.1},{"x":425.3,"z":-213.2},{"x":436.3,"z":-225.5},{"x":440.9,"z":-242.3},{"x":460.8,"z":-242.1},{"x":458.8,"z":-249.4},{"x":464.8,"z":-254.6},{"x":454.8,"z":-257.8},{"x":462,"z":-269.1},{"x":436.3,"z":-258.5},{"x":435.6,"z":-253.3},{"x":434.7,"z":-259.3},{"x":415.8,"z":-269.8},{"x":412,"z":-279.2},{"x":420.8,"z":-284.8},{"x":411.6,"z":-294.9},{"x":418,"z":-318.3},{"x":410.4,"z":-313.8},{"x":402,"z":-317.2},{"x":392.1,"z":-295.9},{"x":367,"z":-285.8},{"x":349.3,"z":-287},{"x":346.7,"z":-303.9},{"x":364.7,"z":-315.3},{"x":362.7,"z":-327.5},{"x":376.5,"z":-338.8},{"x":356.7,"z":-339},{"x":349.5,"z":-318.5},{"x":343.2,"z":-316.2},{"x":328.7,"z":-323.4},{"x":324.2,"z":-338.5},{"x":308.4,"z":-342.9},{"x":302.2,"z":-358.8},{"x":308.9,"z":-383},{"x":336.1,"z":-377.4},{"x":332,"z":-386},{"x":317.8,"z":-388.5},{"x":306.9,"z":-399},{"x":311.9,"z":-418.5},{"x":321.5,"z":-417.6},{"x":334.1,"z":-443.5},{"x":354.8,"z":-441},{"x":374.2,"z":-446.7},{"x":395,"z":-431.4},{"x":408.2,"z":-431.4},{"x":423.8,"z":-421.4},{"x":430.3,"z":-389.5},{"x":437.8,"z":-387.1},{"x":457.2,"z":-396.1},{"x":464,"z":-386.3},{"x":476,"z":-388.9},{"x":483.1,"z":-382.4},{"x":482.7,"z":-396.2},{"x":499.5,"z":-389.7},{"x":494.4,"z":-400.1},{"x":500.8,"z":-405.9},{"x":497.6,"z":-410.6},{"x":469.7,"z":-419.5},{"x":476.1,"z":-431.5},{"x":487.2,"z":-428.3},{"x":482.6,"z":-431.7},{"x":484.8,"z":-439.7},{"x":500.4,"z":-435.5},{"x":507.5,"z":-451.8},{"x":501,"z":-467},{"x":478.3,"z":-475.5},{"x":479.8,"z":-488.2},{"x":490.5,"z":-486},{"x":490.2,"z":-497.9},{"x":499,"z":-504.8},{"x":516.5,"z":-500.7},{"x":524.7,"z":-509},{"x":530.4,"z":-504.4},{"x":531.8,"z":-485.8},{"x":543.3,"z":-473.6},{"x":547.5,"z":-478.1},{"x":564,"z":-474.6},{"x":569.9,"z":-481.4},{"x":558.9,"z":-486.9},{"x":551.8,"z":-503.8},{"x":557.6,"z":-503},{"x":555.3,"z":-507.9},{"x":564,"z":-513.8},{"x":557,"z":-516.2},{"x":564.5,"z":-525.4},{"x":549.4,"z":-531.2},{"x":557.8,"z":-535},{"x":530.4,"z":-546.5},{"x":519.8,"z":-541.3},{"x":517.8,"z":-555},{"x":509.7,"z":-555.4},{"x":493.8,"z":-538.6},{"x":494.7,"z":-530.8},{"x":475.8,"z":-518.2},{"x":461.2,"z":-516.7},{"x":460.7,"z":-508.5},{"x":453.4,"z":-504.1},{"x":438.2,"z":-501.7},{"x":432.9,"z":-514.4},{"x":432,"z":-503.4},{"x":420.9,"z":-502.9},{"x":426.3,"z":-499.3},{"x":423.9,"z":-490.1},{"x":395.4,"z":-475.4},{"x":384.1,"z":-476.5},{"x":376.4,"z":-493.1},{"x":370.8,"z":-488.1},{"x":351.6,"z":-490.7},{"x":347.1,"z":-484.2},{"x":342.2,"z":-487.6},{"x":339,"z":-478.2},{"x":316.6,"z":-468.2},{"x":304.5,"z":-470.9},{"x":303.6,"z":-460},{"x":279.1,"z":-438.2},{"x":271.8,"z":-399.7},{"x":259.1,"z":-393.4},{"x":241.9,"z":-403.7},{"x":238.7,"z":-426.3},{"x":245.8,"z":-436.6},{"x":236.9,"z":-434.9},{"x":225.1,"z":-451.4},{"x":224.9,"z":-461.7},{"x":230.5,"z":-462.2},{"x":222.8,"z":-482.9},{"x":201.3,"z":-495.2},{"x":199.4,"z":-511.1},{"x":185.2,"z":-513.8},{"x":168.5,"z":-534.7},{"x":172,"z":-539.2},{"x":184.5,"z":-537.7},{"x":180.7,"z":-547.3},{"x":176.4,"z":-545.2},{"x":175.1,"z":-551.8},{"x":153.5,"z":-546.8},{"x":140.7,"z":-563},{"x":140.7,"z":-576.5},{"x":130.8,"z":-574.9},{"x":118.1,"z":-583.2},{"x":112.2,"z":-605.6},{"x":92.8,"z":-620.8},{"x":88.7,"z":-634.2},{"x":98.1,"z":-641.1},{"x":94.3,"z":-647},{"x":102.3,"z":-655.3},{"x":100.3,"z":-662},{"x":82.4,"z":-659.8},{"x":78.8,"z":-663.9},{"x":85.8,"z":-671.6},{"x":66.9,"z":-654},{"x":50.1,"z":-656.6},{"x":33,"z":-675.2},{"x":31.9,"z":-693.6},{"x":37.1,"z":-697.2},{"x":30,"z":-698.7},{"x":27.5,"z":-710.6},{"x":18.9,"z":-708.8},{"x":18.5,"z":-715.8},{"x":-6.9,"z":-716},{"x":2.1,"z":-728.1},{"x":2.3,"z":-740.9},{"x":-28.9,"z":-742},{"x":-46.9,"z":-766},{"x":-70.5,"z":-750.4},{"x":-94.3,"z":-753.6},{"x":-113.8,"z":-766.1},{"x":-123.7,"z":-788.8},{"x":-146.9,"z":-789},{"x":-156.5,"z":-793.9},{"x":-155.9,"z":-799},{"x":-170.9,"z":-800.2},{"x":-189,"z":-822.2},{"x":-222.2,"z":-831.9},{"x":-244,"z":-861.9},{"x":-262.8,"z":-864.3},{"x":-273.1,"z":-875.3},{"x":-283.9,"z":-875.3},{"x":-302.2,"z":-889.3},{"x":-314.7,"z":-884.5},{"x":-346.2,"z":-902.9},{"x":-375.4,"z":-904.8},{"x":-391,"z":-915.6},{"x":-411.3,"z":-913},{"x":-424.4,"z":-919.8},{"x":-445,"z":-913.7},{"x":-485.8,"z":-914.6},{"x":-524.2,"z":-902.7},{"x":-542.9,"z":-906.2},{"x":-551.2,"z":-900.5},{"x":-541.6,"z":-903.8},{"x":-547.7,"z":-893.9},{"x":-565.9,"z":-881.5},{"x":-586.8,"z":-878.5},{"x":-594.1,"z":-866.7},{"x":-630.3,"z":-858.6},{"x":-643.6,"z":-849.1},{"x":-660.9,"z":-818.8},{"x":-660.8,"z":-808.4},{"x":-680.8,"z":-794.4},{"x":-678.2,"z":-786.2},{"x":-704.6,"z":-746.2},{"x":-704.4,"z":-733.4},{"x":-714.6,"z":-711.5},{"x":-714,"z":-672.3},{"x":-704.2,"z":-655.1},{"x":-708.1,"z":-636.6},{"x":-691.4,"z":-622.8},{"x":-680.8,"z":-592.2},{"x":-662.6,"z":-563.2},{"x":-628.1,"z":-553.2},{"x":-604,"z":-506.5},{"x":-558.1,"z":-471.7},{"x":-526.9,"z":-427.4},{"x":-527.6,"z":-396.9},{"x":-538.1,"z":-374.5},{"x":-554.6,"z":-286.2},{"x":-537.1,"z":-231.8},{"x":-494.3,"z":-167},{"x":-480.6,"z":-155.3},{"x":-470,"z":-126.5},{"x":-461.6,"z":-122.7},{"x":-455.6,"z":-98.5},{"x":-440.9,"z":-90.8},{"x":-439.3,"z":-73},{"x":-391.5,"z":-45.2},{"x":-391.1,"z":-27.8},{"x":-378.5,"z":-11.4},{"x":-360.5,"z":-12.4},{"x":-333.5,"z":3.5},{"x":-322.8,"z":-0.1},{"x":-290.5,"z":17},{"x":-290.7,"z":22.6},{"x":-266.4,"z":41.8},{"x":-266.6,"z":50.5},{"x":-246.8,"z":66.9},{"x":-238,"z":92.4},{"x":-223.2,"z":110.4},{"x":-219,"z":108.8},{"x":-222.9,"z":116.9},{"x":-142.2,"z":102.3},{"x":-132.9,"z":108.8},{"x":-129.8,"z":121.5},{"x":-125.2,"z":113},{"x":-129.5,"z":100.5},{"x":-126.4,"z":98},{"x":-124.4,"z":105.7},{"x":-111.4,"z":103.1},{"x":-112.9,"z":110.3},{"x":-102.7,"z":92.9},{"x":-99.3,"z":96.8},{"x":-111.3,"z":121.8},{"x":-109.6,"z":130.7},{"x":-99.3,"z":137.5},{"x":-101.7,"z":131},{"x":-91.2,"z":129.8},{"x":-79.9,"z":116.2},{"x":-66,"z":123.5},{"x":-67.5,"z":130.9},{"x":-74.6,"z":132.7},{"x":-71.6,"z":147.8},{"x":-57,"z":145.5},{"x":-58.2,"z":133.4},{"x":-45.7,"z":130.6},{"x":-46.5,"z":113.8},{"x":-23.1,"z":130.8},{"x":-37.4,"z":95.5},{"x":-33.5,"z":89.9},{"x":-26.2,"z":92.4},{"x":-22.9,"z":73.4},{"x":-14.8,"z":75.9},{"x":-15.5,"z":85.6},{"x":-3.8,"z":89},{"x":10.7,"z":78.3},{"x":12,"z":68.5},{"x":28.6,"z":49.8},{"x":38.3,"z":49.9},{"x":43.1,"z":58.4},{"x":60.6,"z":64},{"x":84.4,"z":43.9},{"x":84,"z":53.4},{"x":90.1,"z":51.7},{"x":81.2,"z":66.6},{"x":74,"z":63.9},{"x":80,"z":68.3},{"x":65.9,"z":102.2},{"x":28.5,"z":107.8},{"x":18.3,"z":115.9},{"x":77.7,"z":102.6},{"x":102.4,"z":104.6},{"x":84.8,"z":117.7},{"x":86,"z":130.6},{"x":79,"z":137.1},{"x":60.9,"z":140.2},{"x":56,"z":130.3},{"x":47.9,"z":136.5},{"x":59.7,"z":141},{"x":46.2,"z":136.9},{"x":55.6,"z":141.7},{"x":27.9,"z":146.5},{"x":22.4,"z":142.5},{"x":20.1,"z":165.9},{"x":24.3,"z":171.7},{"x":34.4,"z":172.1},{"x":35.5,"z":163},{"x":46.5,"z":156},{"x":73.8,"z":152.9},{"x":71.9,"z":164.1},{"x":65.4,"z":167.2},{"x":88.7,"z":179.1},{"x":90.5,"z":180.5}],[{"x":475.6,"z":-248.5},{"x":471.8,"z":-244},{"x":495,"z":-233},{"x":502.2,"z":-220.2},{"x":506.6,"z":-220.8},{"x":510.2,"z":-230.7},{"x":514.1,"z":-226.1},{"x":528.1,"z":-232.5},{"x":538.7,"z":-226.4},{"x":539.9,"z":-233.8},{"x":514,"z":-243.2},{"x":512,"z":-248.6},{"x":498,"z":-245.4},{"x":497.2,"z":-240.6},{"x":490.4,"z":-247.4},{"x":483.5,"z":-242.1},{"x":476.2,"z":-248.4},{"x":475.6,"z":-248.5}],[{"x":605.4,"z":77.3},{"x":603.2,"z":80.7},{"x":618.7,"z":76},{"x":622.9,"z":68.9},{"x":646.9,"z":74.1},{"x":638.5,"z":68.3},{"x":641.2,"z":59.2},{"x":637.4,"z":56.9},{"x":624.4,"z":64.2},{"x":619.4,"z":62.9},{"x":618.8,"z":69.3},{"x":605.5,"z":77.2},{"x":605.4,"z":77.3}],[{"x":82.6,"z":210},{"x":88.4,"z":203.4},{"x":92,"z":188.3},{"x":73,"z":182.5},{"x":85.1,"z":194.9},{"x":75.3,"z":202.9},{"x":82.9,"z":215},{"x":88.5,"z":215.4},{"x":87.8,"z":210.6},{"x":82.8,"z":210.6},{"x":82.6,"z":210}],[{"x":732.7,"z":728.9},{"x":730.4,"z":732.9},{"x":720.5,"z":731.8},{"x":717.1,"z":735.7},{"x":718.2,"z":740.8},{"x":728.1,"z":746.2},{"x":737.9,"z":735.8},{"x":732.8,"z":728.9},{"x":732.7,"z":728.9}],[{"x":659.1,"z":6.7},{"x":644.5,"z":18.2},{"x":650.9,"z":24},{"x":658.5,"z":22.1},{"x":661.9,"z":16.7},{"x":657,"z":14.2},{"x":659.1,"z":6.8},{"x":659.1,"z":6.7}],[{"x":732,"z":381.4},{"x":728.1,"z":383.1},{"x":730,"z":398.3},{"x":724.4,"z":396.5},{"x":728,"z":400.1},{"x":732.6,"z":400.3},{"x":732.7,"z":381.6},{"x":732,"z":381.4}],[{"x":36.7,"z":297.3},{"x":30.6,"z":299.2},{"x":28.6,"z":306.5},{"x":46.1,"z":304.7},{"x":50.2,"z":301.4},{"x":48.8,"z":295.7},{"x":37.3,"z":297.1},{"x":36.7,"z":297.3}],[{"x":510.6,"z":-17.9},{"x":502.8,"z":-14.2},{"x":509.1,"z":-0.2},{"x":521.1,"z":-7.1},{"x":512.5,"z":-10.9},{"x":510.2,"z":-16.5},{"x":510.6,"z":-17.9}],[{"x":238.5,"z":-530.7},{"x":233.5,"z":-532.1},{"x":238.2,"z":-522.5},{"x":242.8,"z":-523.9},{"x":239.4,"z":-530.1},{"x":238.5,"z":-530.7}],[{"x":429.3,"z":-208.1},{"x":426,"z":-201.7},{"x":433.9,"z":-204.8},{"x":433.4,"z":-212.7},{"x":430.1,"z":-209.8},{"x":429.3,"z":-208.1}],[{"x":523.2,"z":-223.3},{"x":524.7,"z":-209.2},{"x":528.8,"z":-205.9},{"x":530.6,"z":-209.3},{"x":523.8,"z":-222.6},{"x":523.2,"z":-223.3}],[{"x":698,"z":220.9},{"x":687.3,"z":233.7},{"x":699,"z":232},{"x":702.8,"z":223},{"x":698.4,"z":220.8},{"x":698,"z":220.9}],[{"x":-175.9,"z":320.6},{"x":-173.2,"z":316.2},{"x":-176.5,"z":313.6},{"x":-179.2,"z":317.7},{"x":-176,"z":320.7},{"x":-175.9,"z":320.6}],[{"x":-33.4,"z":686.1},{"x":-38.6,"z":690.2},{"x":-31.3,"z":695.5},{"x":-27.8,"z":687.5},{"x":-33.2,"z":686.1},{"x":-33.4,"z":686.1}],[{"x":586.3,"z":888.4},{"x":583.3,"z":877.6},{"x":578.6,"z":883.8},{"x":583.2,"z":892.2},{"x":586.3,"z":888.9},{"x":586.3,"z":888.4}],[{"x":29.9,"z":92.9},{"x":40.6,"z":99.9},{"x":33.1,"z":93.9},{"x":35.5,"z":86.6},{"x":30.1,"z":92.4},{"x":29.9,"z":92.9}],[{"x":153,"z":-586.2},{"x":140.7,"z":-583.3},{"x":149.5,"z":-579},{"x":152.9,"z":-586},{"x":153,"z":-586.2}],[{"x":350.2,"z":-371.1},{"x":347.6,"z":-375.2},{"x":344.2,"z":-372.9},{"x":349.9,"z":-371.1},{"x":350.2,"z":-371.1}],[{"x":558.5,"z":-541.4},{"x":552.8,"z":-540.8},{"x":553,"z":-537.9},{"x":558.4,"z":-541.2},{"x":558.5,"z":-541.4}],[{"x":542.3,"z":-469.7},{"x":537.6,"z":-471.2},{"x":540.7,"z":-465.9},{"x":543,"z":-469.6},{"x":542.3,"z":-469.7}],[{"x":460.1,"z":-210.7},{"x":466.5,"z":-203.6},{"x":470,"z":-210.8},{"x":460.4,"z":-210.8},{"x":460.1,"z":-210.7}],[{"x":530.9,"z":-150},{"x":525.3,"z":-152.1},{"x":526.9,"z":-145.7},{"x":531.4,"z":-149.6},{"x":530.9,"z":-150}],[{"x":635.3,"z":2.4},{"x":631.9,"z":14.2},{"x":638.7,"z":11.4},{"x":636.7,"z":3},{"x":635.3,"z":2.4}],[{"x":616.6,"z":29.3},{"x":593.5,"z":40.8},{"x":608,"z":42},{"x":616.7,"z":29.8},{"x":616.6,"z":29.3}],[{"x":592.4,"z":89.8},{"x":598.6,"z":91.5},{"x":599.2,"z":84.6},{"x":593,"z":88.9},{"x":592.4,"z":89.8}],[{"x":703.9,"z":810},{"x":710.4,"z":811.9},{"x":710.1,"z":808.2},{"x":704,"z":810},{"x":703.9,"z":810}],[{"x":716.9,"z":780.3},{"x":708.1,"z":790.3},{"x":712.7,"z":789.7},{"x":717,"z":780.5},{"x":716.9,"z":780.3}],[{"x":31.9,"z":73.4},{"x":29.8,"z":78.9},{"x":33.6,"z":77.3},{"x":32.3,"z":73.4},{"x":31.9,"z":73.4}],[{"x":234.9,"z":580.9},{"x":238.5,"z":582.6},{"x":238,"z":579.9},{"x":234.4,"z":580.4},{"x":234.9,"z":580.9}]]'),vw={peleeMetres:1330,highestMetres:1365,highest:{lat:14.809,lon:-61.166},tourKm:157.9,stageKm:40.4,origin:{x:0,z:0}},lp={attribution:rw,axes:aw,horizontalScale:lw,verticalScale:cw,bathymetryScale:hw,width:uw,height:dw,row0:fw,encoding:pw,bounds:mw,geo:gw,coast:xw,checks:vw},ca=lp;function va(s,t){const e=lp.geo;return{x:(t-e.lon0)*e.metersPerDegLon/e.horizontalScale,z:-(s-e.lat0)*e.metersPerDegLat/e.horizontalScale}}const dl={name:"Baie de Fort-de-France",lat:14.566,lon:-61.072,heading:Math.PI},_w=[{id:"diamant",name:"Pointe du Diamant",lat:14.432,lon:-61.055},{id:"salines",name:"Pointe des Salines",lat:14.385,lon:-60.875},{id:"vauclin",name:"Pointe du Vauclin",lat:14.555,lon:-60.805},{id:"caravelle",name:"Presqu'île de la Caravelle",lat:14.748,lon:-60.805},{id:"macouba",name:"Pointe du Macouba",lat:14.895,lon:-61.148},{id:"saint-pierre",name:"Saint-Pierre",lat:14.748,lon:-61.21},{id:"fort-de-france",name:"Fort-de-France",lat:14.59,lon:-61.07}],yw=[{id:"diamant",name:"Le Diamant",lat:14.432,lon:-61.055},{id:"sainte-anne",name:"Sainte-Anne",lat:14.415,lon:-60.82}],Mw=[{name:"Fort-de-France",lat:14.6055,lon:-61.0705},{name:"Le François",lat:14.6155,lon:-60.9035},{name:"Le Marin",lat:14.4725,lon:-60.8665},{name:"Sainte-Anne",lat:14.4365,lon:-60.881},{name:"Le Robert",lat:14.677,lon:-60.94},{name:"Saint-Pierre",lat:14.7435,lon:-61.1755},{name:"Trinité",lat:14.7375,lon:-60.9615},{name:"Le Diamant",lat:14.482,lon:-61.018},{name:"Sainte-Luce",lat:14.4685,lon:-60.921},{name:"Trois-Îlets",lat:14.5395,lon:-61.036}],Nr={name:"Rocher du Diamant",lat:14.4424,lon:-61.0378,height:176,radius:85},Sw=42;function cp(s){return s.map(t=>({...t,...va(t.lat,t.lon)}))}const ha={...dl,...va(dl.lat,dl.lon)},ww=cp(_w),bw=cp(yw),Ew=Mw.map(s=>({...s,...va(s.lat,s.lon)})),us={...Nr,...va(Nr.lat,Nr.lon),gameHeight:Nr.height/ca.verticalScale},Tw=-2,Aw=-1,Cw=.15,Rw=.8,Pw=10,zw=6,Lw=new D(0,1,0),Ld=new D(0,0,1),tn=new D,Fr=new D,fl=new D,pl=new D,Ur=new Le,Dd=new Le,Or=new Le,ml=new Le,Dw=new Be,Id=new D,Nd=new Le,Fd=new Le,ua=6,Iw=1.85,Nw=[13771562,1789852,15774761];function Fw(){const s=new be;return s.name="pennant",s.userData.ribbons=Nw.map(t=>{const e=new Float32Array((ua+1)*2*3),n=new Ie;n.setAttribute("position",new Ge(e,3));const i=[];for(let r=0;r<ua;r++){const a=r*2;i.push(a,a+1,a+2,a+1,a+3,a+2)}n.setIndex(i);const o=new jt(n,new Yo({color:t,side:yn}));return o.frustumCulled=!1,s.add(o),o}),s}function Uw(s,t,e,n){const i=s.geometry.attributes.position,o=.055-t*.012,r=6.2+Math.min(n,16)*.28,a=.045+.1*Math.min(n/12,1.5);for(let l=0;l<=ua;l++){const c=l/ua,h=.04+c*Iw,d=Math.sin(e*r+c*9+t*1.7),u=(t-1)*.01+d*a*c*c,f=(t-1)*.028-c*c*.16+Math.cos(e*(r*.73)+c*7+t)*a*.4*c*c,m=o*(1-c*.62);i.setXYZ(l*2,u-m,f,h),i.setXYZ(l*2+1,u+m,f,h)}i.needsUpdate=!0}const Lc=0,_n=new E(ha.x,Lc,ha.z),da=ha.heading,Ow=.9,Bw=3,Ud=.5,kw=2,Hw=.8,Vw=.7,Gw=2.5;class Ww{constructor(t,e,n=Pc.gommier){this.scene=t,this.world=e,this.config=n,this.type=n.id,this.rudderAngle=0,this.maxRudderAngle=n.steering.maxAngle,this.sailAngle=0,this.maxSailAngle=Math.PI/2.5,this.sailSheet=.5,this.sheetDump=0,this.hike=null,this.sailSideForce=0,this.windSide=0,this.apparentWindX=0,this.apparentWindZ=0,this.balanceSettled=!1,this.isMastBroken=!1,this.initVisuals(),this.initPhysics(),this.initBalance(),console.log(`🚢 Boat initialized - ${n.name}, ${this.crew.count} crew`)}initVisuals(){const{hull:t}=this.config;this.group=new be,this.visual=new be,this.visual.name="boatVisual",this.visual.userData.boatType=this.config.id,this.visual.position.y=-t.draft,this.group.add(this.visual),this.hullHalfLength=t.length/2,this.hullHalfWidth=t.beam/2,this.draft=t.draft,this.waves=null,this.ride={ready:!1,height:0,pitch:0,roll:0},this.buildHull(),this.buildRig(),this.buildSteering(),this.crew=new ow(this.config,this.visual,{clew:this.clew,rudder:this.rudder,paddle:this.paddle},this.scene),this.visual.traverse(e=>{e.isMesh&&(e.renderOrder=Tw)}),this.hullMask.renderOrder=Aw,this.scene.add(this.group)}buildHull(){const{hull:t,livery:e,thwarts:n}=this.config,i=IM(t),o=HM(e.hull);this.woodMaterial=o[Sn.wood],this.hull=new jt(UM(t,i),o),this.hull.castShadow=!0,this.hull.receiveShadow=!0,this.visual.add(this.hull),this.hullMask=new jt(OM(t,i),new Yo({colorWrite:!1,side:yn})),this.visual.add(this.hullMask);const r=new rn(1,.035,.24);for(const a of n){const l=Xo(t,a),c=l.sheer-.13,h=new jt(r,this.woodMaterial);h.scale.x=2*(op(t,l,c)+.015),h.position.set(0,c,l.z),h.castShadow=!0,h.receiveShadow=!0,this.visual.add(h)}}buildRig(){const{hull:t,rig:e,livery:n}=this.config,i=new an({color:n.spar,roughness:.6}),o=Xo(t,e.mastStation),r=Object.fromEntries(["tack","throat","peak","clew","spritHeel"].map(h=>[h,new D(...e.sail[h])]));this.sailPoints=r,this.mast=new be,this.mast.position.set(0,o.keel+t.floor,e.mastStation),this.mast.rotation.x=-e.mastRake,this.mast.add(Ju(new D(0,0,0),new D(0,e.mastHeight,0),e.mastRadius[0],e.mastRadius[1],i)),this.pennant=Fw(),this.pennant.position.set(0,e.mastHeight,0),this.mast.add(this.pennant),this.visual.add(this.mast),this.sail=new be,this.mast.add(this.sail),this.sailCloth=new be,this.sail.add(this.sailCloth);const a=VM(n.sail);a.shadowSide=Ci;const l=new jt(BM(r,e.sail.belly),a);l.castShadow=!0,l.receiveShadow=!1,l.userData.noReceiveShadow=!0,this.sailCloth.add(l);const c=r.peak.clone().setX(r.spritHeel.x);this.sailCloth.add(Ju(r.spritHeel,c,.04,.028,i)),this.clew=new Re,this.clew.position.copy(r.clew),this.sailCloth.add(this.clew)}buildSteering(){const{hull:t,steering:e,crew:n,livery:i}=this.config;switch(this.rudder=null,this.paddle=null,e.type){case"rudder":this.rudder=qM(t,e,this.woodMaterial),this.visual.add(this.rudder.group);break;case"paddle":{const o=new an({color:i.pole,roughness:.65});this.paddle=YM(t,e,o,n.paddleAides),this.visual.add(this.paddle.group);break}default:throw new Error(`Unknown steering type: ${e.type}`)}}initPhysics(){const{physics:t}=this.config;this.shape=new ga(new E(...t.boxHalfExtents)),this.body=new _t({mass:t.mass,position:_n.clone()}),this.body.addShape(this.shape),this.body.linearDamping=.1,this.body.angularDamping=0,this.body.quaternion.setFromAxisAngle(new E(0,1,0),da),this.aground=!1,this.shoreSafeX=_n.x,this.shoreSafeZ=_n.z,this.body.angularFactor.set(0,1,0),this.world.addBody(this.body),this.onPreStep=()=>this.applyForces(),this.world.addEventListener("preStep",this.onPreStep)}initBalance(){const{hull:t,rig:e,balance:n,physics:i}=this.config,o=["tack","throat","peak","clew"].map(c=>this.sailPoints[c].y),r=o.reduce((c,h)=>c+h,0)/o.length,a=this.mast.position.y+r*Math.cos(e.mastRake)-t.draft,l=i.mass+this.crew.count*n.crewMass;this.balance=new lS({...n,ceHeight:a},this.crew.layout,l),this.rightingsSeen=0}setWaves(t){this.waves=t,this.ride.ready=!1}get effectiveSheet(){return this.sailSheet+(1-this.sailSheet)*this.sheetDump}update(t,e,n,i){if(this.wind=n,this.handleInput(e,t),this.balance.rightings!==this.rightingsSeen&&(this.rightingsSeen=this.balance.rightings,this.sailSheet=Math.max(this.sailSheet,Vw)),this.group.position.copy(this.body.position),this.group.quaternion.copy(this.body.quaternion),this.updateVisuals(t,i),Math.random()<.02){const o=this.body.velocity,r=Math.sqrt(o.x*o.x+o.z*o.z);console.log(`🚤 Horizontal speed: ${(r*3.6).toFixed(1)} km/h, Vertical: ${(o.y*3.6).toFixed(1)} km/h`)}}updateVisuals(t,e){this.updateRide(t,e),this.updateSailVisual(),this.updateSteeringVisual(),this.updatePennant(e),this.group.updateMatrixWorld(!0),this.crew.update(this.balance,Number.isFinite(e)?e:0,t,this.waves)}updateRide(t,e){if(Or.setFromAxisAngle(Ld,-this.balance.heel),fl.set(0,this.draft,0),pl.copy(fl).sub(Fr.copy(fl).applyQuaternion(Or)),!this.waves||!Number.isFinite(e)){this.visual.quaternion.copy(Or),this.visual.position.set(0,-this.draft,0).add(pl),this.ride.ready=!1;return}const{x:n,z:i}=this.group.position;tn.set(0,0,1).applyQuaternion(this.group.quaternion),tn.y=0,tn.lengthSq()<1e-8&&tn.set(0,0,1),tn.normalize();const o=this.hullHalfLength*Rw,r=this.hullHalfWidth,a=tn.x*o,l=tn.z*o,c=tn.z*r,h=-tn.x*r,d=cs(this.waves,n,i,e),u=cs(this.waves,n+a,i+l,e),f=cs(this.waves,n-a,i-l,e),m=cs(this.waves,n+c,i+h,e),x=cs(this.waves,n-c,i-h,e),g=(d+u+f+m+x)/5,p=Math.atan2(u-f,2*o),v=Math.atan2(m-x,2*r),y=this.ride;if(y.ready&&t>0){const M=1-Math.exp(-t*Pw),b=1-Math.exp(-t*zw);y.height+=(g-y.height)*M,y.pitch+=(p-y.pitch)*b,y.roll+=(v-y.roll)*b}else y.height=g,y.pitch=p,y.roll=v,y.ready=!0;Ur.setFromAxisAngle(Lw,Math.atan2(tn.x,tn.z)),Dd.setFromEuler(Dw.set(-y.pitch,0,y.roll)),Ur.multiply(Dd),ml.copy(this.group.quaternion).invert(),this.visual.quaternion.copy(ml).multiply(Ur).multiply(Or),Fr.copy(pl).applyQuaternion(Ur),Fr.y+=y.height-this.draft-this.group.position.y,this.visual.position.copy(Fr.applyQuaternion(ml))}handleInput(t,e){if(!this.validatePhysicsState())return;const n=t.ArrowLeft||t.a||t.A?1:0,i=t.ArrowRight||t.d||t.D?1:0,r=(this.balance.isCapsized?0:n-i)*this.maxRudderAngle,a=this.config.steering.rate*e;this.rudderAngle+=Math.max(-a,Math.min(a,r-this.rudderAngle)),(t.ArrowUp||t.w||t.W)&&(this.sailSheet=Math.max(0,this.sailSheet-Ud*e)),(t.ArrowDown||t.s||t.S)&&(this.sailSheet=Math.min(1,this.sailSheet+Ud*e)),this.sheetDump=t[" "]?Math.min(1,this.sheetDump+kw*e):Math.max(0,this.sheetDump-Hw*e);const l=t.e||t.E,c=t.q||t.Q;this.hike=l&&!c?"out":c&&!l?"in":null}applyForces(){this.applyBuoyancy(),this.applyRudder(),this.sailSideForce=0,this.wind&&this.applySailingPhysics(this.wind),this.applyWaterResistance(),this.applyBalance(this.world.dt)}applyBalance(t){this.wind&&(this.balanceSettled||(this.balance.reset(this.windSide>0?-1:1),this.balanceSettled=!0),this.balance.step(t,{sideForce:this.sailSideForce,windSide:this.windSide,hike:this.hike}))}applyRudder(){const{yawRateAtRest:t,turnRadius:e,maxYawRate:n}=this.config.steering,i=this.body.vectorToLocalFrame(this.body.velocity).z,o=Math.max(-n,Math.min(n,t+i/e)),r=this.rudderAngle/this.maxRudderAngle*o,a=this.body.inertia.y*(r-this.body.angularVelocity.y)*Bw,l=this.body.vectorToWorldFrame(new E(0,a,0));this.body.applyTorque(l)}applyBuoyancy(){const{draft:t,depth:e}=this.config.hull,n=Math.min(Lc+t-this.body.position.y,e);if(n<=0)return;const o=-this.world.gravity.y*this.body.mass/t,r=2*Ow*Math.sqrt(o*this.body.mass),a=o*n-r*this.body.velocity.y;this.body.applyForce(new E(0,a,0))}applySailingPhysics(t){const e=new E(t.x,0,t.z),n=this.body.velocity,i=new E(e.x-n.x,e.y-n.y,e.z-n.z);if(this.apparentWindX=i.x,this.apparentWindZ=i.z,this.isMastBroken)return;const o=this.body.vectorToLocalFrame(i),r=o.length();if(r<.001||(this.windSide=o.x/r,this.balance.isCapsized))return;const a=this.effectiveSheet,l=Math.atan2(o.x,o.z),c=Math.PI-l>Math.PI?-Math.PI-l:Math.PI-l,h=a*this.maxSailAngle;this.sailAngle=Math.max(-h,Math.min(h,c));const d=1/r,u=new E(o.x*d,o.y*d,o.z*d),f=Math.sign(u.x*Math.cos(this.sailAngle)+u.z*Math.sin(this.sailAngle)),m=new E(f*Math.cos(this.sailAngle),0,f*Math.sin(this.sailAngle)),x=u.dot(m);let p=r*r*this.config.physics.sailPower*Math.abs(x)*(1.1-a*.5);const v=new E(0,0,1);u.dot(v)<-.8&&(p*=.01),this.sailSideForce=m.x*p;const M=p*Math.max(0,Math.cos(this.balance.heel)),b=new E(m.x*M,m.y*M,m.z*M),T=this.body.vectorToWorldFrame(b),C=this.clampForce(T,1e5),z=new E(0,1.5,0);this.body.applyForce(C,z),Math.abs(p)>15e4&&(this.isMastBroken=!0)}applyWaterResistance(){const{lateralDamping:t,hullDrag:e}=this.config.physics,n=this.body.vectorToLocalFrame(this.body.velocity),i=-n.x*t,o=new E(i,0,0);this.body.applyLocalForce(this.clampForce(o,5e4),new E(0,0,0));const r=-n.z*Math.abs(n.z)*e;if(this.body.applyLocalForce(new E(0,0,r),new E(0,0,0)),this.balance.isCapsized){const a=-this.body.mass*Gw;this.body.applyForce(new E(this.body.velocity.x*a,0,this.body.velocity.z*a))}}updateSailVisual(){this.sail.rotation.y=-this.sailAngle;const t=this.sailAngle>=0?1:-1;this.sailCloth.scale.x+=(t-this.sailCloth.scale.x)*Cw}updatePennant(t){const e=Number.isFinite(t)?t:0;let n=this.apparentWindX,i=this.apparentWindZ;n*n+i*i<1e-4&&this.wind&&(n=this.wind.x,i=this.wind.z);const o=Math.hypot(n,i);o>.001&&(this.mast.updateWorldMatrix(!0,!1),Id.set(n/o,0,i/o),Nd.setFromUnitVectors(Ld,Id),Fd.setFromRotationMatrix(this.mast.matrixWorld),this.pennant.quaternion.copy(Fd).invert().multiply(Nd));const r=this.pennant.userData.ribbons;for(let a=0;a<r.length;a++)Uw(r[a],a,e,o)}updateSteeringVisual(){const t=this.rudder??this.paddle;t.yaw.rotation.y=-this.rudderAngle}clampForce(t,e){const n=t.length();if(n>e){const i=e/n;return new E(t.x*i,t.y*i,t.z*i)}return t}validatePhysicsState(){const t=this.body.position,e=this.body.velocity,n=this.body.quaternion;return isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||isNaN(n.x)||isNaN(n.y)||isNaN(n.z)||isNaN(n.w)||!Number.isFinite(this.balance.heel)?(console.error("Corrupted physics state detected! Resetting boat..."),this.resetBoat(),!1):!0}resetBoat(){this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.body.position.copy(_n),this.body.quaternion.setFromAxisAngle(new E(0,1,0),da),this.aground=!1,this.shoreSafeX=_n.x,this.shoreSafeZ=_n.z,this.rudderAngle=0,this.sailSheet=.5,this.sheetDump=0,this.isMastBroken=!1,this.balanceSettled=!1,this.balance.reset(1),this.ride.ready=!1}teleport(t,e,n=null){this.body.position.x=t,this.body.position.z=e,this.body.position.y=Lc,this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),n!=null&&this.body.quaternion.setFromAxisAngle(new E(0,1,0),n),this.body.wakeUp(),this.group.position.copy(this.body.position),this.group.quaternion.copy(this.body.quaternion),this.aground=!1,this.shoreSafeX=t,this.shoreSafeZ=e}applyShoreConstraint(t){const e=this.body.position;tn.set(0,0,1).applyQuaternion(this.group.quaternion);const n=this.config.hull.length*.46,i=[[e.x,e.z],[e.x+tn.x*n,e.z+tn.z*n],[e.x-tn.x*n,e.z-tn.z*n]],o=(f,m)=>{const x=t.sample(f,m);return x.land?-1-x.height:x.depth-this.draft};let r=!1;for(const[f,m]of i)o(f,m)<0&&(r=!0);if(!r){this.aground=!1,this.shoreSafeX=e.x,this.shoreSafeZ=e.z;return}this.aground=!0;const a=4,l=(f,m)=>{const x=t.sample(f,m);return x.land?-8-x.height:x.depth},c=l(e.x+a,e.z)-l(e.x-a,e.z),h=l(e.x,e.z+a)-l(e.x,e.z-a),d=Math.hypot(c,h),u=this.body.velocity;if(d>.001){const f=c/d,m=h/d,x=-(u.x*f+u.z*m);x>0&&(u.x+=f*x,u.z+=m*x),u.x*=.96,u.z*=.96;let g=e.x,p=e.z;for(let v=0;v<24&&!(o(g,p)>=0);v++)g+=f*4,p+=m*4;o(g,p)<0&&(g=this.shoreSafeX,p=this.shoreSafeZ,u.x=0,u.z=0),e.x=g,e.z=p}else e.x=this.shoreSafeX,e.z=this.shoreSafeZ,u.x=0,u.z=0;this.body.wakeUp(),this.group.position.x=e.x,this.group.position.z=e.z}dispose(){this.world.removeEventListener("preStep",this.onPreStep),this.world.removeBody(this.body),this.crew.dispose(),this.scene.remove(this.group);const t=new Set,e=new Set;this.group.traverse(n=>{if(n.isMesh){t.add(n.geometry);for(const i of[n.material].flat())e.add(i)}});for(const n of t)n.dispose();for(const n of e)n.map?.dispose(),n.dispose()}}const en=10,bo=-Math.PI/2,Br=[.55,1.8],Od=[22,45],Bd=[.22,.4],Xw=[5,8],Ws=.3,Hi=8,kd=6,gl=6,qw=7,Yw=60,jw=130,$w=32,kr=75,Zw=32,hp=2.4;function Kw(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Cn([s,t],e){return s+(t-s)*e}function xl(s,t,e){const n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)}function Jw(){return{x:0,z:0,rx:1,rz:1,axisX:0,axisZ:1,amplitude:0,weight:0,age:0,life:0,grow:hp,pinned:!1,kind:"empty"}}function Dc(s,t,e){const n=t-s.x,i=e-s.z,o=n*s.axisX+i*s.axisZ,r=n*-s.axisZ+i*s.axisX,a=r*r/(s.rx*s.rx)+o*o/(s.rz*s.rz);if(a>=1)return 0;const l=1-a;return l*l}const Qw=.58,tb=3.4,eb=.4;function nb(s,t,e){const n=s.axisX*t+s.axisZ*e,i=-s.axisZ*t+s.axisX*e;return Math.hypot(s.rz*n,s.rx*i)}function ib(s,t,e,n,i){const o=(s.x-t)*n+(s.z-e)*i,r={...s,x:s.x-n*o,z:s.z-i*o};return Dc(r,t,e)}class sb{constructor({seed:t=Math.random()*2**32>>>0}={}){this.direction=new D(Math.sin(bo)*en,0,Math.cos(bo)*en),this.time=0,this.random=Kw(t),this.strength=1,this.override=null,this.focusX=0,this.focusZ=0,this.driftX=Math.sin(bo)*en,this.driftZ=Math.cos(bo)*en,this.blobs=Array.from({length:Hi},Jw),this.nextPuffAt=Cn(Od,this.random());for(let e=0;e<kd;e++)this.spawnAmbient(e,!0)}update(t,e){this.time+=t,e&&(this.focusX=e.x,this.focusZ=e.z);const n=bo+Math.sin(this.time*.1)*.1;this.driftX=Math.sin(n)*en,this.driftZ=Math.cos(n)*en,this.advance(t),this.strength=this.override??this.sample(this.focusX,this.focusZ);const i=en*this.strength;this.direction.x=Math.sin(n)*i,this.direction.z=Math.cos(n)*i}getVector(){return this.direction}get speed(){return en*this.strength}setOverride(t){this.override=t}triggerPuff(t=Bd[1],e=Xw[1]){const n=this.blobs[qw];this.place(n,{upwind:0,across:0,rx:42,rz:36,amplitude:t,life:Math.max(.5,e),grow:e*Ws,pinned:!0,kind:"forced",yaw:0}),n.age=0,n.weight=0}sample(t,e){let n=0;for(let i=0;i<Hi;i++){const o=this.blobs[i];o.weight!==0&&(n+=o.weight*Dc(o,t,e))}return Math.min(Br[1],Math.max(Br[0],1+n))}upcomingGust(t=tb){const e=this.focusX,n=this.focusZ,i=Math.hypot(this.driftX,this.driftZ)||en,o=this.driftX/i,r=this.driftZ/i;let a=0,l=null,c=!1;for(let d=0;d<Hi;d++){const u=this.blobs[d];if(u.kind==="empty"||u.amplitude<=0)continue;if(u.pinned){u.age<=u.life*Ws&&(c=!0,a=Math.max(a,u.amplitude),l=0);continue}if(Dc(u,e,n)>=.12)continue;const m=-((u.x-e)*o+(u.z-n)*r),x=nb(u,o,r)*Qw,g=(m-x)/i;if(g<1.5||g>t||u.age+g>=u.life)continue;const p=ib(u,e,n,o,r);if(p<eb)continue;const v=xl(0,u.grow,u.age+g);a+=u.amplitude*p*v,(l===null||g<l)&&(l=g)}return{strength:Math.min(Br[1],Math.max(Br[0],1+a)),eta:l,forced:c}}writeUniforms(t,e){for(let n=0;n<Hi;n++){const i=this.blobs[n];if(i.kind==="empty"||i.weight===0){t[n].set(0,0,1,1),e[n].set(0,1,0,0);continue}t[n].set(i.x,i.z,i.rx,i.rz),e[n].set(i.axisX,i.axisZ,i.weight,0)}}advance(t){const e=this.driftX/en,n=this.driftZ/en;for(let i=0;i<Hi;i++){const o=this.blobs[i];if(o.kind==="empty")continue;o.pinned?(o.x=this.focusX,o.z=this.focusZ):(o.x+=this.driftX*t,o.z+=this.driftZ*t),o.age+=t;const r=(o.x-this.focusX)*e+(o.z-this.focusZ)*n,a=!o.pinned&&r>kr;if(o.age>=o.life||a){i===gl&&(this.nextPuffAt=this.time+Cn(Od,this.random())),this.retire(o);continue}o.weight=o.amplitude*this.envelope(o,r)}for(let i=0;i<kd;i++)this.blobs[i].kind==="empty"&&this.spawnAmbient(i,!1);this.override==null&&this.maybePuff()}maybePuff(){if(this.time<this.nextPuffAt||this.blobs[gl].kind!=="empty")return;const t=this.blobs[gl];this.place(t,{upwind:Cn([80,130],this.random()),across:(this.random()*2-1)*14,rx:Cn([36,50],this.random()),rz:Cn([30,46],this.random()),amplitude:Cn(Bd,this.random()),life:42,grow:2.2,pinned:!1,kind:"puff"})}spawnAmbient(t,e){const n=this.random()<.75,i=n?Cn([36,50],this.random()):Cn([18,32],this.random()),o=n?Cn([30,46],this.random()):Cn([16,28],this.random()),r=n?Cn([.18,.36],this.random()):Cn([.2,.38],this.random()),a=Cn([Yw,jw],this.random());let l=a,c=0;if(e){const m=a+kr*.8,x=this.random()*m;l=a-x,c=x/en}const h=this.blobs[t];this.place(h,{upwind:l,across:(this.random()*2-1)*$w,rx:i,rz:o,amplitude:(this.random()<.48?1:-1)*r,life:50,grow:n?hp:1.8,pinned:!1,kind:"ambient"}),h.age=c;const d=this.driftX/en,u=this.driftZ/en,f=(h.x-this.focusX)*d+(h.z-this.focusZ)*u;h.weight=h.amplitude*this.envelope(h,f)}place(t,e){const n=this.driftX/en,i=this.driftZ/en,o=e.yaw??(this.random()-.5)*.55,r=Math.cos(o),a=Math.sin(o);t.axisX=n*r-i*a,t.axisZ=n*a+i*r,t.x=this.focusX-n*e.upwind+-i*e.across,t.z=this.focusZ-i*e.upwind+n*e.across,t.rx=e.rx,t.rz=e.rz,t.amplitude=e.amplitude,t.age=0,t.life=e.life,t.grow=e.grow,t.pinned=e.pinned,t.kind=e.kind,t.weight=e.pinned?0:e.amplitude*this.envelope(t,-e.upwind)}envelope(t,e){if(t.pinned){const o=t.age/t.life;if(o<=0||o>=1)return 0;const r=o<Ws?Math.sin(Math.PI/2*(o/Ws)):Math.cos(Math.PI/2*((o-Ws)/(1-Ws)));return r*r}const n=xl(0,t.grow,t.age),i=1-xl(kr-Zw,kr,e);return n*i}retire(t){t.kind="empty",t.weight=0,t.amplitude=0,t.pinned=!1,t.life=0}}const sn={radius:.6,bulge:.015,bottom:.1,shoulder:1.68,shoulderRadius:.32,band:{from:1.1,to:1.4},ballast:{top:.12,depth:.35,ringTube:.075},staff:{height:.95,radius:.017},flag:{width:.5,height:.32,curl:.035},segments:40},Uo=sn.shoulder+sn.shoulderRadius,ob=.18,rb=new D(0,1,0),Wn={},ab=new D,vl=new D;class lb{constructor(t,e="tour"){this.scene=t,this.buoys=[],this.flags=[],this.waves=null,this.parts=null,this.start=ha,this.radius=Sw,this.sources={tour:ww,stage:bw},this.ring=new jt(new $o(7,.22,8,28),new an({color:16769354,emissive:16756736,emissiveIntensity:.55,roughness:.4})),this.ring.rotation.x=Math.PI/2,this.scene.add(this.ring),this.setMode(e)}setMode(t){this.mode=t==="stage"?"stage":"tour",this.marks=this.sources[this.mode].map(e=>({...e})),this.markIndex=0,this.laps=0,this.finished=!1,this.rebuild()}fit(t){this.marks=this.marks.map(e=>({...e,...t.navigablePoint(e.x,e.z,1)})),this.rebuild()}rebuild(){for(const t of this.buoys)this.scene.remove(t);this.buoys=[],this.flags=[],this.parts=this.parts??ub();for(const t of this.marks){const{buoy:e,flag:n}=db(this.parts);e.position.set(t.x,0,t.z),this.scene.add(e),this.buoys.push(e),this.flags.push(n)}}setWaves(t){this.waves=t}update(t){if(!this.waves)return;this.buoys.forEach((n,i)=>{const{x:o,z:r}=this.marks[i];Rc(this.waves,o,r,t,Wn),n.position.set(o+Wn.x,Wn.y,r+Wn.z),n.quaternion.setFromUnitVectors(rb,ab.set(Wn.nx,Wn.ny,Wn.nz)),this.flags[i].rotation.y=ob*Math.sin(t*1.7+i*2.1)});const e=this.marks[this.markIndex];e&&(Rc(this.waves,e.x,e.z,t,Wn),this.ring.position.set(e.x+Wn.x,.35+Wn.y,e.z+Wn.z),this.ring.visible=!this.finished)}markBoat(t){if(this.finished)return;const e=this.marks[this.markIndex];e&&(Math.hypot(t.x-e.x,t.z-e.z)>this.radius||(this.markIndex+=1,!(this.markIndex<this.marks.length)&&(this.mode==="tour"?(this.laps+=1,this.markIndex=0):(this.markIndex=this.marks.length-1,this.finished=!0))))}hudState(t){const e=t.body.position;vl.set(0,0,1).applyQuaternion(t.group.quaternion);const n=this.marks[this.markIndex],i=n?Math.hypot(e.x-n.x,e.z-n.z):0;return{mode:this.mode,marks:this.marks,markIndex:this.markIndex,laps:this.laps,finished:this.finished,distance:i,progress:this.progress(e),boat:{x:e.x,z:e.z,heading:Math.atan2(vl.x,vl.z)},aground:t.aground===!0}}progress(t){const e=[this.start,...this.marks],n=[];let i=0;for(let l=1;l<e.length;l++){const c=Math.hypot(e[l].x-e[l-1].x,e[l].z-e[l-1].z);n.push(c),i+=c}if(i<=0)return 0;if(this.finished)return 1;let o=0;for(let l=0;l<this.markIndex;l++)o+=n[l];const r=n[this.markIndex]||1,a=Math.hypot(t.x-e[this.markIndex+1].x,t.z-e[this.markIndex+1].z);return o+=Math.min(r,Math.max(0,r-a)),Math.min(1,o/i)}}function cb(s){const t=(s-sn.bottom)/(sn.shoulder-sn.bottom);return sn.radius+sn.bulge*Math.sin(Math.PI*t)}function _l(s,t,e){const n=[];for(let i=0;i<=e;i++){const o=Yt.lerp(s,t,i/e);n.push(new pt(cb(o),o))}return n}function hb(s){const{radius:t,shoulder:e,shoulderRadius:n}=sn,i=[];for(let o=1;o<=s;o++){const r=o/s*Math.PI/2;i.push(new pt(t-n+n*Math.cos(r),e+n*Math.sin(r)))}return i.push(new pt(.12,Uo+.008),new pt(0,Uo+.012)),i}function ub(){const{band:s,ballast:t,staff:e,flag:n,segments:i}=sn,o=new to({color:16727040,emissive:16720384,emissiveIntensity:.1,roughness:.42,clearcoat:.6,clearcoatRoughness:.3}),r=new to({color:16053487,roughness:.45,clearcoat:.6,clearcoatRoughness:.3}),a=new an({color:2303789,roughness:.65}),l=new an({color:13225169,metalness:.85,roughness:.35}),c=new an({color:16765471,roughness:.8,side:yn}),h=new Qs([new pt(0,sn.bottom),..._l(sn.bottom,s.from,8)],i),d=new Qs(_l(s.from,s.to,3),i),u=new Qs([..._l(s.to,sn.shoulder,4),...hb(10)],i),f=new Rn(sn.radius+.02,sn.radius-.1,t.depth+t.top,i);f.translate(0,(t.top-t.depth)/2,0);const m=new $o(sn.radius,t.ringTube,12,i);m.rotateX(Math.PI/2),m.translate(0,t.top,0);const x=new Rn(.06,.09,.08,16);x.translate(0,Uo+.04,0);const g=new Rn(e.radius,e.radius,e.height,8);g.translate(0,Uo+e.height/2,0);const p=new jo(n.width,n.height,10,1),v=p.attributes.position;for(let y=0;y<v.count;y++){const M=v.getX(y)/n.width+.5;v.setXYZ(y,M*n.width,v.getY(y),n.curl*Math.sin(M*Math.PI*1.5)*M)}return p.computeVertexNormals(),{meshes:[[h,o],[d,r],[u,o],[f,a],[m,a],[x,a],[g,l]],flag:[p,c],flagHeight:Uo+e.height-n.height/2-.03}}function db(s){const t=new be;for(const[i,o]of s.meshes){const r=new jt(i,o);r.castShadow=!0,t.add(r)}const e=new be;e.position.set(0,s.flagHeight,0);const n=new jt(...s.flag);return n.position.x=sn.staff.radius,n.castShadow=!0,e.add(n),t.add(e),{buoy:t,flag:e}}const Hd={type:"change"},lh={type:"start"},up={type:"end"},Hr=new jc,Vd=new ki,fb=Math.cos(70*Yt.DEG2RAD),He=new D,xn=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yl=1e-6;class pb extends s0{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zs.ROTATE,MIDDLE:Zs.DOLLY,RIGHT:Zs.PAN},this.touches={ONE:Ys.ROTATE,TWO:Ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Le,this._lastTargetPosition=new D,this._quat=new Le().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ou,this._sphericalDelta=new ou,this._scale=1,this._panOffset=new D,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new D,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gb.bind(this),this._onPointerDown=mb.bind(this),this._onPointerUp=xb.bind(this),this._onContextMenu=bb.bind(this),this._onMouseWheel=yb.bind(this),this._onKeyDown=Mb.bind(this),this._onTouchStart=Sb.bind(this),this._onTouchMove=wb.bind(this),this._onMouseDown=vb.bind(this),this._onMouseMove=_b.bind(this),this._interceptControlDown=Eb.bind(this),this._interceptControlUp=Tb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hd),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=He.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Hr.origin.copy(this.object.position),Hr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hr.direction))<fb?this.object.lookAt(this.target):(Vd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hr.intersectPlane(Vd,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>yl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yl||this._lastTargetPosition.distanceToSquared(this.target)>yl?(this.dispatchEvent(Hd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;He.copy(i).sub(this.target);let o=He.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=i/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(i,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,o=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function mb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function gb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function xb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(up),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function vb(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=de.DOLLY;break;case Zs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=de.ROTATE}break;case Zs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(lh)}function _b(s){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function yb(s){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(s.preventDefault(),this.dispatchEvent(lh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(up))}function Mb(s){this.enabled!==!1&&this._handleKeyDown(s)}function Sb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=de.TOUCH_ROTATE;break;case Ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case Ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=de.TOUCH_DOLLY_PAN;break;case Ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(lh)}function wb(s){switch(this._trackPointer(s),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=de.NONE}}function bb(s){this.enabled!==!1&&s.preventDefault()}function Eb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ab=1.2,Gd=11,Wd=4.5,Ml=4,Xd=4200,Cb=6.7,qd=Yt.degToRad(84),Rb=Yt.degToRad(60),Pb=Yt.degToRad(6),zb=1.5,Yd=2,Lb=8,Db=150,Ib=.012,Nb=.15,Fb=48,Sl=new D(0,1,0),Vr=new D,Eo=new D,Ub=new D;class Ob{constructor(t,e,n){this.camera=t,this.waves=n,this.controls=new pb(t,e),this.controls.enablePan=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=Ml,this.controls.maxDistance=Xd,this.controls.zoomSpeed=Cb,this.controls.maxPolarAngle=qd,this.waterLift=0,this.groundHeight=null,this.lastTarget=new D,this.placed=!1,this.interacting=!1,this.idleTime=0,this.desiredRadius=Math.hypot(Gd,Wd),this.shownRadius=this.desiredRadius,this.radiusSynced=!1,this.zoomTouched=!1,this.controls._dollyIn=i=>{this.noteZoom(this.desiredRadius*i)},this.controls._dollyOut=i=>{this.noteZoom(this.desiredRadius/i)},this.controls.addEventListener("start",()=>{this.interacting=!0,this.idleTime=0}),this.controls.addEventListener("end",()=>{this.interacting=!1})}noteZoom(t){!Number.isFinite(t)||t<=0||(this.zoomTouched=!0,this.desiredRadius=Math.min(Xd,Math.max(Ml,t)))}update(t,e,n,i){const{camera:o,controls:r}=this,a=r.target;Vr.set(0,0,1).applyQuaternion(n).setY(0).normalize(),a.copy(e).addScaledVector(Sl,Ab),this.placed||(o.position.copy(a).addScaledVector(Vr,-Gd).addScaledVector(Sl,Wd),this.lastTarget.copy(a),this.placed=!0),o.position.y-=this.waterLift,o.position.add(Eo.subVectors(a,this.lastTarget)),this.lastTarget.copy(a),this.idleTime=this.interacting?0:this.idleTime+t;const l=Math.max(this.shownRadius,this.desiredRadius);this.idleTime>Lb&&l<Db&&this.swingAstern(t,a),this.easeRadius(t,a),this.applyPolarWindow(),r.update();const c=cs(this.waves,o.position.x,o.position.z,i)+zb;this.waterLift=Math.max(0,c-o.position.y),this.waterLift>0&&(o.position.y=c,o.lookAt(a)),this.keepOffTerrain(a)&&this.adoptClampedRadius(a),this.fitNearPlane(a)}easeRadius(t,e){const n=Ub.subVectors(this.camera.position,e),i=n.length();this.radiusSynced||(this.shownRadius=i,this.zoomTouched||(this.desiredRadius=i),this.radiusSynced=!0);const o=1-Math.exp(-8*t);this.shownRadius+=(this.desiredRadius-this.shownRadius)*o,Math.abs(this.desiredRadius-this.shownRadius)<.02&&(this.shownRadius=this.desiredRadius),i>1e-4&&this.camera.position.copy(e).addScaledVector(n.multiplyScalar(1/i),this.shownRadius)}applyPolarWindow(){const t=Yt.smoothstep(this.shownRadius,90,800);this.controls.minPolarAngle=Yt.lerp(Rb,Pb,t),this.controls.maxPolarAngle=qd}adoptClampedRadius(t){const e=this.camera.position.distanceTo(t);this.shownRadius=e,this.desiredRadius=Math.min(this.desiredRadius,e)}fitNearPlane(t){const e=Math.max(this.camera.position.distanceTo(t),Ml),n=Yt.clamp(e*Ib,Nb,Fb);Math.abs(this.camera.near-n)<.001||(this.camera.near=n,this.camera.updateProjectionMatrix())}setGround(t){this.groundHeight=t}keepOffTerrain(t){if(!this.groundHeight)return!1;const{camera:e}=this;let n=!1;for(let i=0;i<6;i++){const o=this.groundHeight(e.position.x,e.position.z);if(e.position.y>=o+Yd)return n;e.position.lerp(t,.4),n=!0;const r=this.groundHeight(e.position.x,e.position.z);Number.isFinite(r)&&(e.position.y=Math.max(e.position.y,r+Yd))}return n}swingAstern(t,e){const{position:n}=this.camera;Eo.subVectors(n,e);const i=Math.atan2(Eo.x,Eo.z),o=Math.atan2(-Vr.x,-Vr.z),a=Math.atan2(Math.sin(o-i),Math.cos(o-i))*(1-Math.exp(-.4*t));n.copy(e).add(Eo.applyAxisAngle(Sl,a))}}function Oo(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Bb(s){const t=s.requestFullscreen||s.webkitRequestFullscreen;return t?Promise.resolve(t.call(s)):Promise.reject(new Error("unsupported"))}function kb(){const s=document.exitFullscreen||document.webkitExitFullscreen;return s?Promise.resolve(s.call(document)):Promise.reject(new Error("unsupported"))}async function Hb(s=document.documentElement){const t=!Oo();try{t?await Bb(s):await kb()}catch{return{ok:!1,active:Oo()}}const e=Oo();return t&&!e?{ok:!1,active:!1}:{ok:!0,active:e}}function Vb(s){const t=()=>s(Oo());document.addEventListener("fullscreenchange",t),document.addEventListener("webkitfullscreenchange",t)}function Gb(s){const t=()=>{const e=document.body.getBoundingClientRect(),n=Math.round(e.width),i=Math.round(e.height);n>0&&i>0&&s(n,i)};window.addEventListener("resize",t),window.visualViewport?.addEventListener("resize",t),document.addEventListener("fullscreenchange",t),document.addEventListener("webkitfullscreenchange",t),t(),requestAnimationFrame(t)}const ch=180/Math.PI,Wb=40,Xb=.6,qb=.85,Yb=1.2,jb=.8,Ce={cx:100,cy:100,radius:86,needle:74},$b=[["← →","steer"],["↑ ↓","sheet in / out"],["Space","ease the sheet"],["E","crew hike out"],["Q","crew come in"],["M","boats"],["C","tour / stage"]],Zb=new D,Kb=new D,jd=new Le,$s={cx:60,cy:60};function $d(s,t){return[$s.cx+t*Math.sin(s),$s.cy-t*Math.cos(s)]}function Zd(s,t,e){return e.set(s.x,0,s.z),jd.copy(t.group.quaternion).invert(),e.applyQuaternion(jd),e}function Kd(s){const t=Math.hypot(s.x,s.z);if(t<1e-4)return 0;const e=-s.z/t;return Math.round(Math.acos(Math.max(-1,Math.min(1,e)))*ch)}function Jd(s){return-Math.atan2(-s.x,-s.z)*ch}function te(s,t,e,n){const i=document.createElement(s);return t&&(i.className=t),n!==void 0&&(i.textContent=n),e?.appendChild(i),i}function ze(s,t,e){const n=document.createElementNS("http://www.w3.org/2000/svg",s);for(const[i,o]of Object.entries(t))n.setAttribute(i,o);return e?.appendChild(n),n}function Qd(s,t){return[Ce.cx-t*Math.sin(s),Ce.cy-t*Math.cos(s)]}function tf(s){const t=ze("svg",{viewBox:"0 0 24 24",class:s==="enter"?"icon-enter":"icon-exit","aria-hidden":"true"}),e=s==="enter"?["M9 4H4v5","M15 4h5v5","M20 15v5h-5","M4 15v5h5"]:["M4 9h5V4","M15 4v5h5","M20 15h-5v5","M9 20v-5H4"];for(const n of e)ze("path",{d:n,fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round","stroke-linejoin":"round"},t);return t}function wl(s,t,e){const[n,i]=Qd(s,e),[o,r]=Qd(t,e),a=t<s?1:0;return`M ${n} ${i} A ${e} ${e} 0 0 ${a} ${o} ${r}`}class Jb{constructor({onMenu:t,onCourse:e}){this.root=te("div","hud",document.body),this.root.hidden=!0,this.ui=te("div",null,this.root),this.ui.id="ui",this.buildWindInstrument(),this.stats=te("div","hud-stats",this.ui),this.windLine=te("div","hud-wind-text",this.stats),this.callout=te("div","hud-callout",this.stats,"Risée !"),this.callout.hidden=!0,this.angles=te("div","hud-angles",this.stats),this.speed=te("div",null,this.stats),this.sheet=te("div",null,this.stats),this.crewLine=te("div","hud-crew",this.stats),this.crewLabel=te("span",null,this.crewLine),this.crewBar=te("span","hud-bar",this.crewLine),this.crewFill=te("span","hud-bar-fill",this.crewBar),this.mast=te("div","hud-alert",this.stats,"MAST BROKEN! (M to pick a fresh boat)"),this.buildHeelDial(),this.buildChart(e),this.buildHints(),this.banner=te("div","hud-banner",this.root),te("div","hud-banner-title",this.banner,"Dessalage !"),te("div","hud-banner-text",this.banner,"Capsized: the crew are righting her…"),this.actions=te("div","hud-actions",this.root),this.buildFullscreenButton(),this.menuButton=te("button","hud-menu-button",this.actions,"⛵ Boats (M)"),this.menuButton.type="button",this.menuButton.tabIndex=-1,this.menuButton.addEventListener("mousedown",n=>n.preventDefault()),this.menuButton.addEventListener("pointerdown",n=>{n.pointerType!=="mouse"&&n.preventDefault(),n.stopPropagation()}),this.menuButton.addEventListener("pointerup",n=>{if(n.pointerType==="mouse")return;n.preventDefault(),n.stopPropagation();const i=this.menuButton.getBoundingClientRect();if(!(n.clientX>=i.left&&n.clientX<=i.right&&n.clientY>=i.top&&n.clientY<=i.bottom))return;const r=a=>{a.preventDefault(),a.stopPropagation()};document.addEventListener("click",r,!0),window.setTimeout(()=>document.removeEventListener("click",r,!0),50),t()}),this.menuButton.addEventListener("click",t)}buildFullscreenButton(){this.fullscreenButton=te("button","hud-fullscreen",this.actions),this.fullscreenButton.type="button",this.fullscreenButton.tabIndex=-1,this.fullscreenButton.append(tf("enter"),tf("exit")),this.syncFullscreenButton(),this.fullscreenButton.addEventListener("mousedown",t=>t.preventDefault()),this.fullscreenButton.addEventListener("pointerdown",t=>{t.stopPropagation()}),this.fullscreenButton.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),this.onFullscreenClick()}),this.fullscreenHint=te("p","hud-fullscreen-hint",this.root,"Add to Home Screen for full screen"),this.fullscreenHint.hidden=!0,this.fullscreenHint.setAttribute("role","status"),Vb(()=>this.syncFullscreenButton())}syncFullscreenButton(){const t=Oo();this.fullscreenButton.classList.toggle("is-active",t),this.fullscreenButton.setAttribute("aria-pressed",t?"true":"false");const e=t?"Exit full screen":"Full screen";this.fullscreenButton.setAttribute("aria-label",e),this.fullscreenButton.title=e}async onFullscreenClick(){const t=await Hb();if(this.syncFullscreenButton(),t.ok){this.fullscreenHint.hidden=!0;return}this.showFullscreenHint()}showFullscreenHint(){this.fullscreenHint.hidden=!1,window.clearTimeout(this.fullscreenHintTimer),this.fullscreenHintTimer=window.setTimeout(()=>{this.fullscreenHint.hidden=!0},5e3)}buildWindInstrument(){this.windPanel=te("div","hud-wind",this.ui);const t=ze("svg",{viewBox:"0 0 120 120",class:"hud-wind-dial"},this.windPanel);ze("circle",{cx:60,cy:60,r:52,class:"wind-ring"},t),ze("circle",{cx:60,cy:60,r:34,class:"wind-ring wind-ring-inner"},t);for(let e=0;e<12;e++){const n=e%3===0,i=e/12*Math.PI*2,[o,r]=$d(i,n?40:46),[a,l]=$d(i,52);ze("line",{x1:a,y1:l,x2:o,y2:r,class:n?"wind-tick wind-tick-major":"wind-tick"},t)}ze("path",{d:"M60 34 L67 76 L60 69 L53 76 Z",class:"wind-hull"},t),ze("line",{x1:60,y1:42,x2:60,y2:66,class:"wind-mast"},t),this.trueWindMark=ze("g",{class:"wind-true"},t),ze("path",{d:"M60 5 L68 18 L60 14.5 L52 18 Z",class:"wind-true-arrow"},this.trueWindMark),this.appWindMark=ze("g",{class:"wind-app"},t),ze("line",{x1:60,y1:60,x2:60,y2:22,class:"wind-app-line"},this.appWindMark),ze("circle",{cx:60,cy:22,r:3.2,class:"wind-app-head"},this.appWindMark)}buildHeelDial(){this.heelPanel=te("div","hud-heel",this.root);const t=ze("svg",{viewBox:"0 0 200 112",class:"hud-heel-dial"},this.heelPanel);ze("path",{d:wl(Math.PI/2,-Math.PI/2,Ce.radius),class:"dial-track"},t),this.dangerArcs=[ze("path",{class:"dial-danger"},t),ze("path",{class:"dial-danger"},t)],this.needle=ze("g",{},t),ze("line",{x1:Ce.cx,y1:Ce.cy,x2:Ce.cx,y2:Ce.cy-Ce.needle,class:"dial-mast"},this.needle),ze("path",{d:`M ${Ce.cx-26} ${Ce.cy-6} L ${Ce.cx+26} ${Ce.cy-6} L ${Ce.cx+16} ${Ce.cy+6} L ${Ce.cx-16} ${Ce.cy+6} Z`,class:"dial-hull"},this.needle),this.heelText=ze("text",{x:Ce.cx,y:Ce.cy-30,class:"dial-text"},t),this.heelLabel=te("div","hud-heel-label",this.heelPanel)}buildHints(){this.hints=te("div","hud-hints",this.root);for(const[t,e]of $b){const n=te("div",null,this.hints);te("kbd",null,n,t),n.append(` ${e}`)}this.touchNote=te("div","hud-touch-note",this.stats,"Pads: steer, sheet, ease, hike."),this.coarseQuery=window.matchMedia("(pointer: coarse)"),this.coarse=this.coarseQuery.matches,this.coarseQuery.addEventListener("change",()=>{this.coarse=this.coarseQuery.matches,this.applyInputHints()}),this.applyInputHints()}applyInputHints(){this.hints.hidden=this.coarse,this.touchNote.hidden=!this.coarse,window.clearTimeout(this.touchNoteTimer),this.coarse&&(this.touchNoteTimer=window.setTimeout(()=>{this.touchNote.hidden=!0},4500))}setVisible(t){this.root.hidden=!t}setCapsizeAngle(t){const e=Math.PI/2;this.dangerArcs[0].setAttribute("d",wl(e,t,Ce.radius)),this.dangerArcs[1].setAttribute("d",wl(-t,-e,Ce.radius)),this.capsizeAngle=t}update(t,e,n){const{balance:i}=t,o=t.body.velocity;this.speed.textContent=`Speed: ${Math.round(Math.hypot(o.x,o.z)*3.6)} km/h`;const r=e.getVector(),a=Zd(r,t,Zb),c=t.apparentWindX*t.apparentWindX+t.apparentWindZ*t.apparentWindZ>1e-4?Zd({x:t.apparentWindX,z:t.apparentWindZ},t,Kb):a,h=Kd(a),d=Kd(c);this.trueWindMark.setAttribute("transform",`rotate(${Jd(a)} ${$s.cx} ${$s.cy})`),this.appWindMark.setAttribute("transform",`rotate(${Jd(c)} ${$s.cx} ${$s.cy})`);const u=d<Wb?' <span class="hud-warn">(IN IRONS)</span>':"";this.angles.innerHTML=`<span class="hud-twa">TWA ${h}°</span> <span class="hud-awa">AWA: ${d}°</span>${u}`,this.sheet.innerHTML=`Sail Sheet: ${Math.round(t.sailSheet*100)}%${t.sheetDump>.05?' <span class="hud-ease">easing</span>':""}`;const f=e.strength>=Yb?"PUFF":e.strength<=jb?"lull":"";this.windPanel.dataset.gust=f.toLowerCase(),this.windLine.innerHTML=`Wind: ${e.speed.toFixed(1)} m/s ×${e.strength.toFixed(2)}${f?` <span class="hud-gust hud-gust-${f.toLowerCase()}">${f}</span>`:""}`,this.callout.hidden=!t.crew?.callingGust;const m=Math.round(i.crewOut*100);this.crewLabel.textContent=`Crew out: ${m}%${t.hike==="out"?" (hiking)":t.hike==="in"?" (in)":""}`,this.crewFill.style.width=`${m}%`,this.mast.hidden=!t.isMastBroken,this.updateHeel(i),this.banner.classList.toggle("visible",i.isCapsized),n&&this.updateChart(n)}updateHeel(t){const e=t.heel*ch;this.needle.setAttribute("transform",`rotate(${-e} ${Ce.cx} ${Ce.cy})`),this.heelText.textContent=`${Math.round(Math.abs(e))}°`;const n=Math.abs(t.heel)/this.capsizeAngle,i=t.isCapsized||n>=qb?"danger":n>=Xb?"caution":"ok";this.heelPanel.dataset.level=i;const o=this.coarse?"Ease / Hike out":"Space / E",r=this.coarse?"Hike in":"Q";t.isCapsized?this.heelLabel.textContent="Over!":i==="danger"?this.heelLabel.textContent=t.leewardHeel>0?`Ease! (${o})`:`Too far out! (${r})`:this.heelLabel.textContent=`Heel ${t.leewardHeel>=0?"to leeward":"to windward"}`}buildChart(t){this.chart=null,this.chartPanel=te("div","hud-chart",this.root),this.chartCanvas=te("canvas",null,this.chartPanel),this.chartCanvas.width=256,this.chartCanvas.height=256,this.chartReadout=te("div","hud-chart-readout",this.chartPanel,"Tour"),this.chartButton=te("button","hud-chart-toggle",this.chartPanel,"Étape"),this.chartButton.type="button",this.chartButton.tabIndex=-1,this.chartButton.addEventListener("mousedown",e=>e.preventDefault()),this.chartButton.addEventListener("pointerdown",e=>e.stopPropagation()),this.chartButton.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),t?.()}),this.chartContext=this.chartCanvas.getContext("2d")}setChart(t){this.chart=t}chartPoint(t,e){const{minX:n,maxX:i,minZ:o,maxZ:r}=this.chart.bounds,a=12,l=256-a*2;return[a+(t-n)/(i-n)*l,a+(e-o)/(r-o)*l]}updateChart(t){if(!this.chart)return;const e=this.chartContext;e.clearRect(0,0,256,256),e.fillStyle="rgba(8, 36, 48, 0.35)",e.fillRect(0,0,256,256),e.beginPath();for(const p of this.chart.coast)p.forEach((v,y)=>{const[M,b]=this.chartPoint(v.x,v.z);y===0?e.moveTo(M,b):e.lineTo(M,b)}),e.closePath();e.fillStyle="#3c8f45",e.fill("evenodd"),e.strokeStyle="rgba(236, 220, 170, 0.95)",e.lineWidth=1.6,e.stroke();const[n,i]=this.chartPoint(this.chart.rock.x,this.chart.rock.z);e.fillStyle="#efe8dc",e.fillRect(n-2,i-2,4,4);for(let p=0;p<t.marks.length;p++){const v=t.marks[p],[y,M]=this.chartPoint(v.x,v.z),b=p===t.markIndex&&!t.finished;e.beginPath(),e.arc(y,M,b?5.5:3,0,Math.PI*2),e.fillStyle=b?"#ffe14a":"#ff7a3c",e.fill()}const[o,r]=this.chartPoint(t.boat.x,t.boat.z),a=t.boat.heading,l=Math.sin(a),c=Math.cos(a),h=Math.cos(a),d=-Math.sin(a);e.beginPath(),e.moveTo(o+l*9,r+c*9),e.lineTo(o-l*6+h*4.5,r-c*6+d*4.5),e.lineTo(o-l*6-h*4.5,r-c*6-d*4.5),e.closePath(),e.fillStyle=t.aground?"#ff4d3d":"#ffffff",e.fill();const u=t.distance>=1e3?`${(t.distance/1e3).toFixed(1)} km`:`${Math.round(t.distance)} m`,f=t.mode==="stage"?"Étape":"Tour",m=t.mode==="tour"?` ${t.laps+1}`:"",x=t.finished?" · arrivée":"",g=t.aground?" · échoué":"";this.chartReadout.textContent=`${f}${m} · ${u} · ${Math.round(t.progress*100)}%${x}${g}`,this.chartButton.textContent=t.mode==="stage"?"Tour":"Étape"}}const Qb=150,tE=230,ef=36,nf=28,Gr=new D,sf=new D,bl=new D,To=new D;function El(s,t,e){const n=document.createElement(s);return t&&(n.className=t),e?.appendChild(n),n}function eo(s,t,e){const n=document.createElementNS("http://www.w3.org/2000/svg",s);for(const[i,o]of Object.entries(t))n.setAttribute(i,o);return e?.appendChild(n),n}function eE(s){return`#${(s>>>0).toString(16).padStart(6,"0").slice(-6)}`}function Tl(s,t,e,n,i){sf.copy(s).applyMatrix4(t.matrixWorldInverse);const o=sf.z>-.5;bl.copy(s).project(t);const r=e*.5,a=n*.5;let l=(bl.x*.5+.5)*e,c=(-bl.y*.5+.5)*n;o&&(l=r-(l-r),c=a-(c-a));const h=r-i,d=a-i,u=l-r,f=c-a,m=Math.max(Math.abs(u)/h,Math.abs(f)/d,1);return{x:r+u/m,y:a+f/m}}function nE(){const s=document.querySelectorAll("#ui, .hud-chart, .hud-heel, .hud-hints, .hud-menu-button, .touch-btn"),t=[];for(const e of s){if(e.closest("[hidden]"))continue;const n=e.getBoundingClientRect();n.width<2||n.height<2||t.push(n)}return t}function of(s,t,e,n){const i=window.innerWidth*.5,o=window.innerHeight*.5;for(let r=0;r<24;r++){let a=!1;for(const d of e)if(s>=d.left-n&&s<=d.right+n&&t>=d.top-n&&t<=d.bottom+n){a=!0;break}if(!a)break;const l=i-s,c=o-t,h=Math.hypot(l,c)||1;s+=l/h*(n+8),t+=c/h*(n+8)}return{x:s,y:t}}function iE(){const s=eo("svg",{viewBox:"0 0 36 36",class:"overview-mark-icon"}),t=eo("circle",{cx:18,cy:18,r:11,fill:"none","stroke-width":2.6},s),e=eo("path",{d:"M18 2.5 L23.5 14 L18 11.2 L12.5 14 Z"},s);return{icon:s,ring:t,arrow:e}}function sE(){const s=eo("svg",{viewBox:"0 0 28 28",class:"overview-mark-icon"});return eo("circle",{cx:14,cy:14,r:8,fill:"none",stroke:"#ffe14a","stroke-width":2.4},s),eo("circle",{cx:14,cy:14,r:3.1,fill:"#ffe14a"},s),s}class oE{constructor(t){this.root=El("div","overview-marks"),t.prepend(this.root),this.root.setAttribute("aria-hidden","true"),this.boatMark=El("div","overview-mark overview-mark-boat",this.root),this.boatMark.hidden=!0;const e=iE();this.boatIcon=e.icon,this.boatRing=e.ring,this.boatArrow=e.arrow,this.boatMark.append(e.icon),this.nextMark=El("div","overview-mark overview-mark-next",this.root),this.nextMark.hidden=!0,this.nextMark.append(sE()),this.paint=null,this.arrowDeg=0}update(t,e,n,i,o){if(!e){this.boatMark.hidden=!0,this.nextMark.hidden=!0;return}const r=t.position.distanceTo(n),a=Yt.smoothstep(r,Qb,tE),l=a>.02;if(this.boatMark.hidden=!l,!l){this.nextMark.hidden=!0;return}const c=e.config?.livery?.hull?.paint;if(c!==this.paint){this.paint=c;const b=eE(c??16040222);this.boatRing.setAttribute("stroke",b),this.boatArrow.setAttribute("fill",b)}t.updateMatrixWorld();const h=window.innerWidth,d=window.innerHeight,u=nE();To.set(0,0,1).applyQuaternion(i).setY(0),To.lengthSq()<1e-6&&To.set(0,0,1),To.normalize(),Gr.copy(n).addScaledVector(To,40);const f=Tl(n,t,h,d,ef*.5+6),m=of(f.x,f.y,u,ef*.5+6),x=Tl(Gr,t,h,d,4),g=x.x-f.x,p=x.y-f.y;g*g+p*p>4&&(this.arrowDeg=Math.atan2(g,-p)*(180/Math.PI)),this.place(this.boatMark,m.x,m.y,a),this.boatIcon.style.transform=`rotate(${this.arrowDeg}deg)`;const v=o&&!o.finished?o.marks[o.markIndex]:null;if(this.nextMark.hidden=!v,!v)return;Gr.set(v.x,4,v.z);const y=Tl(Gr,t,h,d,nf*.5+6),M=of(y.x,y.y,u,nf*.5+8);this.place(this.nextMark,M.x,M.y,a)}place(t,e,n,i){t.hidden=!1,t.style.transform=`translate3d(${e}px, ${n}px, 0)`,t.style.opacity=i.toFixed(3)}}function Pe(s,t,e,n){const i=document.createElement(s);return t&&(i.className=t),n!==void 0&&(i.textContent=n),e?.appendChild(i),i}function Al(s){return`#${s.toString(16).padStart(6,"0")}`}function rE(s){const{hull:t,sail:e,kit:n}=s;return[t.paint,t.stripe,t.pinstripe,e.base,...e.blocks.map(i=>i.color),n.shirt]}class aE{constructor(t,{onSelect:e,onClose:n}){this.onSelect=e,this.onClose=n,this.types=Object.values(t),this.currentId=null,this.root=Pe("div","boat-menu",document.body);const i=Pe("div","boat-menu-panel",this.root);Pe("div","boat-menu-kicker",i,"Martinique · voile traditionnelle"),Pe("h1","boat-menu-title",i,"Yoles & Gommiers"),Pe("p","boat-menu-intro",i,"No trapezes: the crew lie out on wooden poles (bwa dressé) to hold the boat up. Keep her balanced, ease in the puffs, and don't dessaler."),Pe("p","boat-menu-credits",i,"Coast © OpenStreetMap contributors (ODbL). Relief: AWS Terrain Tiles (SRTM, ETOPO1), CC BY 4.0.");const o=Pe("div","boat-menu-cards",i);this.cards=this.types.map((a,l)=>this.buildCard(a,l,o));const r=Pe("div","boat-menu-footer",i);this.resumeButton=Pe("button","boat-menu-resume",r,"Resume (M / Esc)"),this.resumeButton.addEventListener("click",()=>this.onClose()),Pe("span","boat-menu-hint",r,"Press 1 or 2 to pick"),window.addEventListener("keydown",a=>this.onKeyDown(a))}buildCard(t,e,n){const i=zM(t),o=Pe("button",`boat-card boat-card-${t.id}`,n);o.style.setProperty("--card-accent",Al(t.livery.hull.paint)),o.style.setProperty("--card-stripe",Al(t.livery.hull.stripe)),Pe("span","boat-card-key",o,String(e+1)),Pe("span","boat-card-current",o,"Current boat"),Pe("h2","boat-card-name",o,t.name),Pe("p","boat-card-tagline",o,t.tagline);const r=Pe("dl","boat-card-stats",o),a=t.steering.type==="rudder"?"barreur":`patron + ${i.steering-1} aides`;for(const[c,h]of[["Length",`${t.hull.length} m`],["Crew",`${i.total}: ${i.dresseurs} dresseurs, sheet hand, ${a}, bailer`],["Steering",t.steeringLabel]])Pe("dt",null,r,c),Pe("dd",null,r,h);const l=Pe("div","boat-card-swatches",o);for(const c of rE(t.livery))Pe("span",null,l).style.background=Al(c);return Pe("span","boat-card-cta",o,"Sail her →"),o.addEventListener("click",()=>this.onSelect(t.id)),{id:t.id,card:o}}get isOpen(){return!this.root.hidden}show(t){this.currentId=t,this.root.hidden=!1,this.resumeButton.hidden=t===null;for(const{id:e,card:n}of this.cards)n.classList.toggle("is-current",e===t)}hide(){this.root.hidden=!0}onKeyDown(t){if(!this.isOpen||t.repeat)return;const e=Number(t.key)-1;Number.isInteger(e)&&this.types[e]?this.onSelect(this.types[e].id):t.key==="Escape"&&this.currentId!==null&&this.onClose()}}const ms=Object.freeze({name:"caribbean-day",sun:Object.freeze({elevationDeg:40,azimuthDeg:235,color:16773588,intensity:2.3}),sky:Object.freeze({turbidity:1.25,rayleigh:1.35,mieCoefficient:.01,mieDirectionalG:.88,zenith:1405128,horizon:10867951,sunDisk:6}),clouds:Object.freeze({coverage:.42,horizonCoverage:.55,base:560,thickness:480,scale:48e-5,density:.0048,shadow:7176854,lit:16776696,wispCoverage:.45,wispBase:1900,wispThickness:340,shadowStrength:.45,drift:1}),water:Object.freeze({deepColor:342620,scatterColor:1489330,shallowColor:4184527,foamColor:15924220}),fog:Object.freeze({color:10867951,density:18e-5}),hemisphere:Object.freeze({skyColor:9356527,groundColor:1331804,intensity:.55}),environmentIntensity:.6,exposure:.56}),rf=Object.freeze({name:"golden-afternoon",sun:Object.freeze({elevationDeg:18,azimuthDeg:252,color:16757082,intensity:2.15}),sky:Object.freeze({turbidity:2.6,rayleigh:.85,mieCoefficient:.022,mieDirectionalG:.8,zenith:2778264,horizon:15774858,sunDisk:11}),clouds:Object.freeze({coverage:.42,horizonCoverage:.6,base:640,thickness:460,scale:48e-5,density:.0044,shadow:9270380,lit:16769216,wispCoverage:.34,wispBase:2500,wispThickness:360,shadowStrength:.4,drift:1}),water:ms.water,fog:Object.freeze({color:15774858,density:ms.fog.density}),hemisphere:Object.freeze({skyColor:15778970,groundColor:4014136,intensity:.42}),environmentIntensity:.55,exposure:.55}),lE=Object.freeze({[ms.name]:ms,[rf.name]:rf});function dp({elevationDeg:s,azimuthDeg:t}){const e=s*Math.PI/180,n=t*Math.PI/180,i=Math.cos(e);return{x:i*Math.sin(n),y:Math.sin(e),z:i*Math.cos(n)}}function cE(s){return`
float waveFilter(float k, float footprint, float minSamples) {
    float samplesPerWavelength = 6.28318530718 / (k * footprint);
    return clamp((samplesPerWavelength - minSamples) / minSamples, 0.0, 1.0);
}

vec3 oceanWaves(vec2 p, float t, float footprint, float minSamples, out vec3 surfaceNormal, out float jacobian) {
    vec3 displacement = vec3(0.0);
    vec3 sinTerms = vec3(0.0);
    vec2 cosTerms = vec2(0.0);
    float f;
${Array.from({length:s},(e,n)=>[`    f = waveFilter(WAVE${n}_K, footprint, minSamples);`,`    gerstnerAccumulate(p, t, WAVE${n}_DIRECTION, WAVE${n}_K, WAVE${n}_OMEGA, WAVE${n}_AMPLITUDE * f, WAVE${n}_STEEPNESS * f, WAVE${n}_PHASE, displacement, sinTerms, cosTerms);`].join(`
`)).join(`
`)}
    float sinXX = sinTerms.x;
    float sinXZ = sinTerms.y;
    float sinZZ = sinTerms.z;
    jacobian = (1.0 - sinXX) * (1.0 - sinZZ) - sinXZ * sinXZ;
    surfaceNormal = normalize(vec3(
        -(cosTerms.x * (1.0 - sinZZ) + sinXZ * cosTerms.y),
        jacobian,
        -(cosTerms.y * (1.0 - sinXX) + cosTerms.x * sinXZ)
    ));
    return displacement;
}
`}const hE=s=>`
uniform float uTime;

attribute float vertexSpacing;

varying vec3 vWorldPosition;
varying vec2 vRestPosition;
varying float vWaveHeight;

#include <common>
#include <fog_pars_vertex>

${s}

void main() {
    vec2 rest = (modelMatrix * vec4(position, 1.0)).xz;

    vec3 surfaceNormal;
    float jacobian;
    vec3 displacement = oceanWaves(rest, uTime, vertexSpacing, 3.0, surfaceNormal, jacobian);
    vec3 world = vec3(rest.x, 0.0, rest.y) + displacement;

    vWorldPosition = world;
    vRestPosition = rest;
    vWaveHeight = displacement.y;

    vec4 mvPosition = viewMatrix * vec4(world, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    #include <fog_vertex>
}
`,uE=(s,t)=>`
uniform float uTime;

uniform vec3 uSunDirection;
// Linear sun color already multiplied by its intensity.
uniform vec3 uSunColor;

uniform vec3 uDeepColor;
uniform vec3 uScatterColor;
uniform vec3 uShallowColor;
uniform vec3 uFoamColor;
uniform float uScatterStrength;
uniform float uGlintStrength;
uniform float uDetailStrength;
uniform float uCrestFoam;
uniform float uFoamJacobian;

uniform samplerCube uSkyTexture;
uniform float uHasSkyTexture;
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;

uniform sampler2D uNoiseTexture;
uniform vec2 uWindDirection;
uniform vec4 uGustOrigin[${t}];
uniform vec4 uGustShape[${t}];

// Depth map: red channel times uDepthScale is the depth in meters; u runs along +X
// and v along +Z across uDepthBounds = (minX, minZ, maxX, maxZ). Deep outside.
uniform sampler2D uDepthMap;
uniform vec4 uDepthBounds;
uniform float uDepthScale;
uniform float uShallowDepth;

uniform vec2 uBoatPosition;
uniform vec2 uBoatForward;
uniform float uBoatSpeed;
uniform vec2 uHullHalfSize;
uniform float uWakeStrength;

// Vertical cloud column. Same field the sky marches: uv = worldXZ * scale - offset.
uniform sampler2D uCloudMap;
uniform float uCloudScale;
uniform vec2 uCloudOffset;
uniform float uCloudCoverage;
uniform float uCloudStrength;
uniform float uHasClouds;

varying vec3 vWorldPosition;
varying vec2 vRestPosition;
varying float vWaveHeight;

#include <common>
#include <fog_pars_fragment>

${s}

// tan(19.47 deg), the half-angle of a Kelvin wake.
const float KELVIN_TAN = 0.35355;

vec3 skyRadiance(vec3 direction, float lod) {
    if (uHasSkyTexture > 0.5) {
        return textureLod(uSkyTexture, direction, lod).rgb;
    }
    return mix(uSkyHorizon, uSkyZenith, sqrt(saturate(direction.y)));
}

// Direct sun only. Sky ambient stays full so the shadow reads as a cloud, not a tint.
float cloudColumn(vec2 worldXZ) {
    if (uHasClouds < 0.5) return 1.0;
    vec2 uv = worldXZ * uCloudScale - uCloudOffset;
    vec4 low = texture2D(uCloudMap, uv);
    vec4 high = texture2D(uCloudMap, uv * 1.9 + 0.17);
    float shape = low.r * 0.55 + low.g * 0.28 + high.b * 0.17;
    float d = smoothstep(1.0 - uCloudCoverage, 1.0 - uCloudCoverage + 0.1, shape);
    return mix(1.0, 1.0 - uCloudStrength, d);
}

float waterDepth(vec2 p) {
    vec2 uv = (p - uDepthBounds.xy) / (uDepthBounds.zw - uDepthBounds.xy);
    if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) {
        return uDepthScale;
    }
    return texture2D(uDepthMap, uv).r * uDepthScale;
}

// Signed gust weight. shape.xy is the along-wind axis, shape.z the signed amplitude
// (positive puff, negative lull). The falloff matches ellipseFalloff in Wind.js.
float gustBlob(vec2 p, vec4 origin, vec4 shape) {
    vec2 d = p - origin.xy;
    float along = d.x * shape.x + d.y * shape.y;
    float across = d.x * (-shape.y) + d.y * shape.x;
    vec2 radii = max(origin.zw, vec2(1.0));
    float r2 = (across * across) / (radii.x * radii.x) + (along * along) / (radii.y * radii.y);
    float fall = saturate(1.0 - r2);
    return shape.z * fall * fall;
}

float gustWeight(vec2 p) {
    float sum = 0.0;
    ${Array.from({length:t},(e,n)=>`sum += gustBlob(p, uGustOrigin[${n}], uGustShape[${n}]);`).join(`
    `)}
    return sum;
}

// Fraction of the surface covered by foam: mask 0 gives none, mask 1 covers almost
// everything, and the noise decides which patches go first.
float foamCoverage(float mask, float noise) {
    float threshold = 1.0 - saturate(mask);
    return smoothstep(threshold, threshold + 0.3, noise);
}

// x: foam, y: aerated water in the stern band, zw: height gradient of the Kelvin arm ridges.
vec4 boatWake(vec2 p, float breakup, float churn) {
    float strength = smoothstep(0.3, 2.5, uBoatSpeed) * uWakeStrength;
    if (strength <= 0.0) {
        return vec4(0.0);
    }

    vec2 right = vec2(uBoatForward.y, -uBoatForward.x);
    vec2 offset = p - uBoatPosition;
    float along = dot(offset, uBoatForward);
    float lateral = dot(offset, right);
    float side = abs(lateral);
    float halfLength = uHullHalfSize.x;
    float halfWidth = uHullHalfSize.y;
    float reach = saturate(uBoatSpeed / 8.0);

    // Two arms spreading from the bow at the Kelvin angle, widening as they age.
    float behindBow = halfLength - along;
    float armLength = mix(12.0, 90.0, reach);
    float armWidth = 0.2 + behindBow * 0.035;
    float armOffset = side - (behindBow * KELVIN_TAN + halfWidth * 0.5);
    float armProfile = exp(-(armOffset * armOffset) / (armWidth * armWidth));
    float armFade = step(0.0, behindBow) * (1.0 - smoothstep(armLength * 0.25, armLength, behindBow));
    float arm = armProfile * armFade;
    float armFoam = foamCoverage(arm * (1.0 - 0.6 * saturate(behindBow / armLength)), breakup);

    float ridgeHeight = 0.05 * armFade;
    float ridgeSlope = ridgeHeight * armProfile * (-2.0 * armOffset / (armWidth * armWidth));
    vec2 ridgeGradient = ridgeSlope * sign(lateral) * right;

    // Churned band behind the stern, breaking up with distance.
    float behindStern = -along - halfLength;
    float bandLength = mix(5.0, 45.0, reach);
    float bandHalfWidth = halfWidth * (0.9 + 0.08 * max(behindStern, 0.0));
    float band = (1.0 - smoothstep(bandHalfWidth * 0.5, bandHalfWidth, side))
        * smoothstep(-0.6, 0.4, behindStern)
        * (1.0 - smoothstep(bandLength * 0.2, bandLength, behindStern));
    float bandFoam = foamCoverage(band * (1.0 - 0.7 * saturate(behindStern / bandLength)), churn);

    // Foam where the hull meets the water, heaviest at the bow. The hull outline is an
    // ellipse; hullDistance approximates the distance to it in meters.
    vec2 local = vec2(along, lateral);
    vec2 radii = vec2(halfLength, halfWidth);
    float q = length(local / radii);
    float hullDistance = (q - 1.0) * q / max(length(local / (radii * radii)), 1e-4);
    float contactWidth = 0.15 + 0.35 * reach;
    float bowBias = mix(0.4, 1.0, smoothstep(-0.3, 0.9, along / halfLength));
    float contact = smoothstep(-0.3, 0.0, hullDistance) * (1.0 - smoothstep(0.0, contactWidth, hullDistance)) * bowBias;
    float contactFoam = foamCoverage(contact, 0.5 * (breakup + churn));

    float foam = strength * max(max(armFoam, bandFoam), contactFoam);
    return vec4(foam, strength * band, strength * ridgeGradient);
}

void main() {
    vec3 toSurface = vWorldPosition - cameraPosition;
    vec3 viewDir = normalize(toSurface);
    vec3 toCamera = -viewDir;

    vec2 p = vRestPosition;
    vec2 pixelFootprint = fwidth(p);
    float footprint = max(max(pixelFootprint.x, pixelFootprint.y), 1e-3);

    vec3 normal;
    float jacobian;
    oceanWaves(p, uTime, footprint, 2.0, normal, jacobian);

    // Wind-driven ripples from the noise texture's height gradient.
    vec2 drift = uWindDirection * uTime;
    vec2 windSide = vec2(-uWindDirection.y, uWindDirection.x);

    // Same blobs the boat samples. A few metres of noise keeps the edge from reading as an ellipse.
    vec3 patchNoise = texture2D(uNoiseTexture, p / 36.0 + drift * 0.004).rgb;
    float gust = gustWeight(p + (patchNoise.gb * 2.0 - 1.0) * 8.0);
    float puff = saturate(gust * 2.5);
    float lull = saturate(-gust * 2.8);
    float puffMask = saturate(puff * mix(0.62, 1.35, smoothstep(0.16, 0.72, patchNoise.r)));
    float lullMask = saturate(lull * mix(0.72, 1.0, 1.0 - patchNoise.r));

    vec2 rippleA = texture2D(uNoiseTexture, p / 21.0 + drift * 0.012).gb * 2.0 - 1.0;
    vec2 rippleB = texture2D(uNoiseTexture, p / 8.0 + drift * 0.025 + windSide * uTime * 0.008).gb * 2.0 - 1.0;
    vec2 rippleC = texture2D(uNoiseTexture, p / 3.1 + drift * 0.06 + windSide * uTime * 0.02).gb * 2.0 - 1.0;
    float rippleFade = 1.0 - smoothstep(0.05, 0.6, footprint);
    vec2 rippleGradient = (0.6 * rippleA + 0.4 * rippleB) * uDetailStrength * rippleFade;
    rippleGradient *= mix(1.0, 0.3, lullMask);
    rippleGradient += rippleC * uDetailStrength * 3.4 * puffMask * rippleFade;
    rippleGradient *= mix(1.0, 2.7, puffMask);

    float breakup = texture2D(uNoiseTexture, p / 13.0 + drift * 0.01).r;
    float churn = 0.5 * (
        texture2D(uNoiseTexture, p / 4.0 + windSide * uTime * 0.05).r +
        texture2D(uNoiseTexture, p / 5.3 - drift * 0.04 + vec2(0.37, 0.71)).r
    );

    vec4 wake = boatWake(p, breakup, churn);
    vec2 surfaceGradient = rippleGradient + wake.zw;
    normal = normalize(normal - vec3(surfaceGradient.x, 0.0, surfaceGradient.y));
    // From a few kilometres the resolved swell is a fine repeating shimmer.
    float farFlat = smoothstep(1.0, 5.0, footprint);
    normal = normalize(mix(normal, vec3(0.0, 1.0, 0.0), farFlat));

    vec3 sunDir = normalize(uSunDirection);
    float NdotV = max(dot(normal, toCamera), 1e-3);
    float NdotL = saturate(dot(normal, sunDir));
    float fresnel = 0.02 + 0.98 * pow(1.0 - NdotV, 5.0);

    vec3 reflected = reflect(viewDir, normal);
    reflected.y = abs(reflected.y);
    float reflectionLod = 1.0 + clamp(log2(1.0 + footprint * 4.0), 0.0, 3.0);
    vec3 skyReflection = skyRadiance(reflected, reflectionLod);

    vec2 viewFlat = normalize(viewDir.xz + vec2(1e-5));
    vec3 skyAmbient = 0.65 * skyRadiance(vec3(0.0, 1.0, 0.0), 6.0)
        + 0.35 * skyRadiance(normalize(vec3(viewFlat.x, 0.2, viewFlat.y)), 6.0);
    float sunHeight = saturate(sunDir.y);
    float cloudSun = cloudColumn(vWorldPosition.xz);
    vec3 sunIrradiance = uSunColor * sunHeight * cloudSun;

    // Water body: deep blue, tinted toward the scatter color in the troughs and where
    // the sun shines through crests toward the viewer.
    float crest = saturate(vWaveHeight / (2.0 * WAVE_AMPLITUDE_SUM) + 0.5);
    vec2 sunFlat = normalize(sunDir.xz + vec2(1e-5));
    float backLit = pow(saturate(dot(viewFlat, sunFlat)), 3.0) * crest;
    float trough = (1.0 - crest) * NdotV;
    float scatter = saturate(uScatterStrength * (0.5 * backLit + 0.35 * trough + 0.15 * NdotV * sunHeight));
    vec3 albedo = mix(uDeepColor, uScatterColor, scatter);

    float shallow = 1.0 - smoothstep(0.5, uShallowDepth, waterDepth(p));
    albedo = mix(albedo, uShallowColor, shallow);
    albedo = mix(albedo, uScatterColor, 0.35 * wake.y);
    // Pull shallows back toward deep blue as well, or the turquoise shelf hides the gust.
    albedo = mix(albedo, uDeepColor, puffMask * mix(0.78, 0.94, shallow));

    vec3 body = albedo * (sunIrradiance * RECIPROCAL_PI * mix(1.0, 0.72, puffMask) + skyAmbient);

    // Sun glint: a narrow path toward the sun. The old wide secondary lobe is gone,
    // and footprint only eases the highlight a little so distance stays a streak.
    // High-frequency ripple slopes break that streak into glitter; the contrast
    // falls with the pixel footprint (and with the noise mips) so it doesn't shimmer.
    vec3 halfVector = normalize(sunDir + toCamera);
    float sunFresnel = 0.02 + 0.98 * pow(1.0 - saturate(dot(halfVector, toCamera)), 5.0);
    vec2 glitterGrad = texture2D(uNoiseTexture, p / 1.7 + drift * 0.08).gb * 2.0 - 1.0;
    float glitterFade = 1.0 - smoothstep(0.05, 0.5, footprint);
    vec3 glintNormal = normalize(normal - vec3(glitterGrad.x, 0.0, glitterGrad.y) * 0.4 * glitterFade);
    float NdotH = saturate(dot(glintNormal, halfVector));
    float shininess = 5600.0 / (1.0 + footprint * 1.0);
    float lobe = pow(NdotH, shininess) * (shininess + 8.0) / (8.0 * PI);
    lobe = lobe / (1.0 + lobe * 0.06);
    float micro = texture2D(uNoiseTexture, p / 1.7 + drift * 0.08 + vec2(0.17, 0.41)).a;
    float sparkle = smoothstep(0.46, 0.84, micro);
    sparkle = mix(sparkle, 0.55, smoothstep(0.04, 0.38, footprint));
    vec3 glint = uSunColor * NdotL * sunFresnel * lobe * uGlintStrength * mix(0.16, 1.0, sparkle) * cloudSun;

    vec3 puffMirror = mix(skyReflection, uDeepColor, 0.9);
    vec3 mirror = mix(skyReflection, puffMirror, puffMask);
    float mirrorFresnel = mix(fresnel, fresnel * 0.22, puffMask);
    mirrorFresnel = mix(mirrorFresnel, min(0.94, fresnel + 0.07), lullMask * (1.0 - puffMask));
    vec3 color = mix(body, mirror, mirrorFresnel) + glint * mix(1.0, 0.06, puffMask);

    float crestMask = smoothstep(uFoamJacobian + 0.05, uFoamJacobian - 0.05, jacobian)
        * smoothstep(0.45, 0.75, crest) * uCrestFoam;
    float crestFoam = foamCoverage(crestMask, 0.6 * breakup + 0.4 * churn);
    float foam = saturate(max(crestFoam, wake.x));
    vec3 foamLight = uSunColor * NdotL * RECIPROCAL_PI * cloudSun + skyAmbient;
    color = mix(color, uFoamColor * foamLight, foam);

    // With a sky texture, fog toward the sky's own horizon before tone mapping so the
    // grid edge melts into the sky; without one, use scene.fog's color like three's
    // built-in materials do.
    #ifdef USE_FOG
        #ifdef FOG_EXP2
            float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
        #else
            float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
        #endif
        vec3 horizon = skyRadiance(normalize(vec3(viewFlat.x, 0.0, viewFlat.y)), 1.0);
        // The grid ends at 12 km. Altitude thins the scene fog, so the edge
        // dissolves on its own before it can read as a seam.
        float edgeFade = smoothstep(7000.0, 11400.0, length((vWorldPosition - cameraPosition).xz));
        color = mix(color, horizon, max(fogFactor * uHasSkyTexture, edgeFade));
    #endif

    gl_FragColor = vec4(color, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>

    #ifdef USE_FOG
        gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor * (1.0 - uHasSkyTexture));
    #endif
}
`;function dE(s,t=8){const e=`${PM(s)}
${cE(s.length)}`;if(!e.includes("void gerstnerAccumulate(")||!e.includes("WAVE0_K"))throw new Error("wavesGLSL no longer provides gerstnerAccumulate and WAVE<i>_* constants");return{vertexShader:hE(e),fragmentShader:uE(e,t)}}function fE(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function af(s){return s*s*(3-2*s)}function lf(s,t,e,n){const i=fE(n),o=new Float32Array(s*s);let r=1,a=0;for(let l=0;l<e;l++){const c=t<<l,h=new Float32Array(c*c);for(let u=0;u<h.length;u++)h[u]=i();const d=s/c;for(let u=0;u<s;u++){const f=u/d,m=Math.floor(f),x=af(f-m),g=m*c,p=(m+1)%c*c;for(let v=0;v<s;v++){const y=v/d,M=Math.floor(y),b=af(y-M),T=(M+1)%c,C=h[g+M],z=h[g+T],_=h[p+M],w=h[p+T],R=C+(z-C)*b,I=_+(w-_)*b;o[u*s+v]+=r*(R+(I-R)*x)}}a+=r,r*=.5}for(let l=0;l<o.length;l++)o[l]/=a;return o}function cf(s){let t=1/0,e=-1/0;for(const i of s)t=Math.min(t,i),e=Math.max(e,i);const n=e-t||1;for(let i=0;i<s.length;i++)s[i]=(s[i]-t)/n;return s}function Wr(s){return Math.max(0,Math.min(255,Math.round(s*255)))}function pE(s=256){const t=cf(lf(s,8,5,1337)),e=cf(lf(s,16,4,7331)),n=new Float32Array(s*s),i=new Float32Array(s*s);let o=1e-6;for(let l=0;l<s;l++){const c=(l+1)%s*s,h=(l-1+s)%s*s;for(let d=0;d<s;d++){const u=(d+1)%s,f=(d-1+s)%s,m=l*s+d;n[m]=(e[l*s+u]-e[l*s+f])*.5,i[m]=(e[c+d]-e[h+d])*.5,o=Math.max(o,Math.abs(n[m]),Math.abs(i[m]))}}const r=new Uint8Array(s*s*4);for(let l=0;l<s*s;l++)r[l*4]=Wr(t[l]),r[l*4+1]=Wr(.5+.5*(n[l]/o)),r[l*4+2]=Wr(.5+.5*(i[l]/o)),r[l*4+3]=Wr(e[l]);const a=new hi(r,s,s,Ze,Mn);return a.wrapS=Ri,a.wrapT=Ri,a.magFilter=De,a.minFilter=jn,a.generateMipmaps=!0,a.anisotropy=4,a.needsUpdate=!0,a}const hf=4,uf=.6;function mE({innerSpacing:s,innerHalfExtent:t,growth:e,halfExtent:n}){const i=[],o=Math.round(t/s);for(let l=1;l<=o;l++)i.push(l*s);let r=o*s,a=s;for(;r<n;)a*=e,r+=a,i.push(r);return[...i.map(l=>-l).reverse(),0,...i]}function gE(s){const t=mE(s),e=t.length,n=t.map((c,h)=>Math.max(h>0?c-t[h-1]:0,h<e-1?t[h+1]-c:0)),i=new Float32Array(e*e*3),o=new Float32Array(e*e);for(let c=0;c<e;c++)for(let h=0;h<e;h++){const d=c*e+h;i[d*3]=t[h],i[d*3+2]=t[c],o[d]=Math.max(n[h],n[c])}const r=new Uint32Array((e-1)*(e-1)*6);let a=0;for(let c=0;c<e-1;c++)for(let h=0;h<e-1;h++){const d=c*e+h,u=d+e,f=d+1,m=u+1;r[a++]=d,r[a++]=u,r[a++]=f,r[a++]=f,r[a++]=u,r[a++]=m}const l=new Ie;return l.setAttribute("position",new Ge(i,3)),l.setAttribute("vertexSpacing",new Ge(o,1)),l.setIndex(new Ge(r,1)),l}function xE(){const s=new hi(new Uint8Array([255,255,255,255]),1,1);return s.needsUpdate=!0,s}const Ao=new D;class vE{constructor({waves:t,preset:e=ms,sunDirection:n=null,skyTexture:i=null,grid:o={}}={}){if(!t||t.length===0)throw new Error("Ocean needs the wave set from createWaveSet");this.waves=t,this.preset=e,this.grid={innerSpacing:.5,innerHalfExtent:40,growth:1.045,halfExtent:1200,...o},this.noiseTexture=pE(),this.deepDepthTexture=xE();const r=n?new D().copy(n):new D().copy(dp(e.sun)),{water:a,hemisphere:l,fog:c,exposure:h}=e,d=1/h,u=t[0].direction;this.uniforms={...Of.clone(ut.fog),uTime:{value:0},uSunDirection:{value:r.normalize()},uSunColor:{value:new zt(e.sun.color).multiplyScalar(e.sun.intensity)},uDeepColor:{value:new zt(a.deepColor)},uScatterColor:{value:new zt(a.scatterColor)},uShallowColor:{value:new zt(a.shallowColor)},uFoamColor:{value:new zt(a.foamColor)},uScatterStrength:{value:.6},uGlintStrength:{value:1.5},uDetailStrength:{value:.12},uCrestFoam:{value:.8},uFoamJacobian:{value:.84},uSkyTexture:{value:null},uHasSkyTexture:{value:0},uSkyZenith:{value:new zt(l.skyColor).multiplyScalar(d)},uSkyHorizon:{value:new zt(c.color).multiplyScalar(d)},uNoiseTexture:{value:this.noiseTexture},uWindDirection:{value:new pt(u.x,u.z)},uGustOrigin:{value:Array.from({length:Hi},()=>new ce(0,0,1,1))},uGustShape:{value:Array.from({length:Hi},()=>new ce(0,1,0,0))},uDepthMap:{value:this.deepDepthTexture},uDepthBounds:{value:new ce(0,0,1,1)},uDepthScale:{value:100},uShallowDepth:{value:8},uBoatPosition:{value:new pt},uBoatForward:{value:new pt(0,1)},uBoatSpeed:{value:0},uHullHalfSize:{value:new pt(hf,uf)},uWakeStrength:{value:1},uCloudMap:{value:this.noiseTexture},uCloudScale:{value:48e-5},uCloudOffset:{value:new pt},uCloudCoverage:{value:.42},uCloudStrength:{value:.45},uHasClouds:{value:0}};const{vertexShader:f,fragmentShader:m}=dE(t,Hi);this.material=new On({name:"OceanMaterial",uniforms:this.uniforms,vertexShader:f,fragmentShader:m,fog:!0}),this.geometry=gE(this.grid),this.mesh=new jt(this.geometry,this.material),this.mesh.name="Ocean",this.mesh.frustumCulled=!1,this.setSkyTexture(i)}update(t,e,n){this.uniforms.uTime.value=t;const i=this.grid.innerSpacing;this.mesh.position.set(Math.round(e.position.x/i)*i,0,Math.round(e.position.z/i)*i),this.updateBoat(n)}updateBoat(t){const e=this.uniforms;if(!t||!t.group){e.uBoatSpeed.value=0;return}const n=t.group.position;e.uBoatPosition.value.set(n.x,n.z),Ao.set(0,0,1).applyQuaternion(t.group.quaternion);const i=Math.hypot(Ao.x,Ao.z);i>1e-4&&e.uBoatForward.value.set(Ao.x/i,Ao.z/i);const o=t.body&&t.body.velocity,r=o?Math.hypot(o.x,o.z):0;e.uBoatSpeed.value=Number.isFinite(r)?r:0,e.uHullHalfSize.value.set(t.hullHalfLength??hf,t.hullHalfWidth??uf)}setGustField(t){t.writeUniforms(this.uniforms.uGustOrigin.value,this.uniforms.uGustShape.value)}setCloudField(t){const e=this.uniforms;if(!t?.map){e.uHasClouds.value=0;return}e.uCloudMap.value=t.map,e.uCloudScale.value=t.scale,e.uCloudOffset.value.copy(t.offset),e.uCloudCoverage.value=t.coverage,e.uCloudStrength.value=t.strength??0,e.uHasClouds.value=1}setSunDirection(t){this.uniforms.uSunDirection.value.copy(t).normalize()}setSkyTexture(t){this.uniforms.uSkyTexture.value=t,this.uniforms.uHasSkyTexture.value=t?1:0}setDepthMap(t,{minX:e,minZ:n,maxX:i,maxZ:o,maxDepth:r=100,shallowDepth:a=8}={}){const l=this.uniforms;if(!t){l.uDepthMap.value=this.deepDepthTexture,l.uDepthBounds.value.set(0,0,1,1),l.uDepthScale.value=100;return}l.uDepthMap.value=t,l.uDepthBounds.value.set(e,n,i,o),l.uDepthScale.value=r,l.uShallowDepth.value=a}dispose(){this.geometry.dispose(),this.material.dispose(),this.noiseTexture.dispose(),this.deepDepthTexture.dispose()}}function fp(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function df(s){return s*s*(3-2*s)}function _E(s){let t=1/0,e=-1/0;for(const i of s)t=Math.min(t,i),e=Math.max(e,i);const n=e-t||1;for(let i=0;i<s.length;i++)s[i]=(s[i]-t)/n;return s}function Cl(s,t,e,n){const i=fp(n),o=new Float32Array(s*s);let r=1,a=0;for(let l=0;l<e;l++){const c=Math.min(s,t<<l),h=new Float32Array(c*c);for(let u=0;u<h.length;u++)h[u]=i();const d=s/c;for(let u=0;u<s;u++){const f=u/d,m=Math.floor(f)%c,x=df(f-Math.floor(f)),g=m*c,p=(m+1)%c*c;for(let v=0;v<s;v++){const y=v/d,M=Math.floor(y)%c,b=df(y-Math.floor(y)),T=(M+1)%c,C=h[g+M],z=h[g+T],_=h[p+M],w=h[p+T],R=C+(z-C)*b,I=_+(w-_)*b;o[u*s+v]+=r*(R+(I-R)*x)}}a+=r,r*=.5}for(let l=0;l<o.length;l++)o[l]/=a;return _E(o)}function yE(s,t,e){const n=fp(e),i=new Float32Array(t*t),o=new Float32Array(t*t);for(let c=0;c<t*t;c++)i[c]=n(),o[c]=n();const r=new Float32Array(s*s);let a=0;for(let c=0;c<s;c++){const h=c/s,d=Math.floor(h*t);for(let u=0;u<s;u++){const f=u/s,m=Math.floor(f*t);let x=1;for(let g=-1;g<=1;g++)for(let p=-1;p<=1;p++){const v=(m+p+t)%t,y=(d+g+t)%t,M=y*t+v;let b=f-(v+i[M])/t,T=h-(y+o[M])/t;b>.5?b-=1:b<-.5&&(b+=1),T>.5?T-=1:T<-.5&&(T+=1);const C=Math.hypot(b,T);C<x&&(x=C)}r[c*s+u]=x,x>a&&(a=x)}}const l=a||1;for(let c=0;c<r.length;c++)r[c]=1-r[c]/l;return r}function Xr(s){return Math.max(0,Math.min(255,Math.round(s*255)))}function ME(s=512){const t=Cl(s,3,5,12651857),e=yE(s,6,659918),n=Cl(s,16,4,334353),i=Cl(s,3,4,464277),o=new Uint8Array(s*s*4);for(let a=0;a<s*s;a++){const l=a*4;o[l]=Xr(t[a]),o[l+1]=Xr(e[a]),o[l+2]=Xr(n[a]),o[l+3]=Xr(i[a])}const r=new hi(o,s,s,Ze);return r.colorSpace=si,r.wrapS=Ri,r.wrapT=Ri,r.magFilter=De,r.minFilter=jn,r.generateMipmaps=!0,r.needsUpdate=!0,r}const SE=12,wE=3,bE=`
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position.z = gl_Position.w;
}
`,EE=`
#include <common>
uniform vec3 uSunDirection;
uniform vec3 uSunColor;
uniform float uSunDisk;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform float uTurbidity;
uniform float uRayleigh;
uniform float uMie;
uniform float uMieG;

uniform sampler2D uCloudNoise;
uniform vec2 uWindOffset;
uniform vec2 uWindDir;
uniform float uCloudScale;
uniform float uCoverage;
uniform float uHorizonCoverage;
uniform float uCloudBase;
uniform float uCloudThickness;
uniform float uCloudDensity;
uniform vec3 uCloudShadow;
uniform vec3 uCloudLit;
uniform float uWispCoverage;
uniform float uWispBase;
uniform float uWispThickness;
uniform mat4 uInvProjView;
uniform vec4 uViewport;

const int CUMULUS_STEPS = ${SE};
const int WISP_STEPS = ${wE};

// View elevation fades from the luminous horizon into the zenith. Turbidity only
// lifts the last few degrees toward haze, and the Mie lobe stays tight so the
// sun doesn't white out the whole dome.
vec3 atmosphere(vec3 rd, vec3 sunDir) {
    float up = saturate(rd.y);
    float mu = dot(rd, sunDir);
    float graded = pow(up, 0.52) * uRayleigh;
    vec3 color = mix(uHorizon, uZenith, saturate(graded));

    float whiten = pow(1.0 - up, 5.0) * max(uTurbidity - 1.15, 0.0) * 0.2;
    color = mix(color, mix(uHorizon, vec3(1.0), 0.28), saturate(whiten));

    float g = clamp(uMieG, 0.0, 0.95);
    float g2 = g * g;
    float phase = (1.0 - g2) / pow(1.0 + g2 - 2.0 * g * mu, 1.5);
    color += uSunColor * phase * uMie * saturate(rd.y * 5.0 + 0.2);

    float disk = smoothstep(0.99978, 0.99993, mu) * step(0.0, rd.y);
    color += uSunColor * disk * uSunDisk;

    if (rd.y < 0.0) {
        float drop = saturate(-rd.y * 1.5);
        // Above the cumulus the downward dome is only a gap past the ocean grid.
        // Keep it the horizon colour instead of the sea-level darkening.
        float aloft = smoothstep(250.0, 700.0, cameraPosition.y);
        color = uHorizon * (1.0 - drop * (1.0 - aloft));
    }
    return color;
}

float cloudShape(vec2 uv, float height, float lod) {
    vec2 shifted = uv;
    vec4 low = textureLod(uCloudNoise, shifted, lod);
    vec4 high = textureLod(uCloudNoise, shifted * 1.9 + 0.17, lod);
    return low.r * 0.55 + low.g * 0.28 + high.b * 0.17;
}

float cumulusDensity(vec3 pos, vec3 rd, float lod) {
    float height = clamp((pos.y - uCloudBase) / uCloudThickness, 0.0, 1.0);
    // Flat base: the slab is empty on its floor, and the top rounds off.
    float profile = smoothstep(0.0, 0.05, height) * smoothstep(1.0, 0.46, height);
    float cover = mix(uCoverage, uHorizonCoverage, smoothstep(0.42, 0.1, rd.y));
    vec2 uv = pos.xz * uCloudScale - uWindOffset;
    float shape = cloudShape(uv, height, lod);
    float threshold = 1.0 - cover * profile;
    return smoothstep(threshold, threshold + 0.1, shape) * profile;
}

float wispDensity(vec3 pos, float lod) {
    float height = clamp((pos.y - uWispBase) / uWispThickness, 0.0, 1.0);
    float profile = smoothstep(0.0, 0.35, height) * smoothstep(1.0, 0.2, height);
    vec2 along = vec2(dot(pos.xz, uWindDir), dot(pos.xz, vec2(-uWindDir.y, uWindDir.x)));
    vec2 uv = vec2(along.x * uCloudScale * 0.55, along.y * uCloudScale * 0.9) - uWindOffset * 0.35;
    float shape = textureLod(uCloudNoise, uv, lod).a;
    return smoothstep(1.0 - uWispCoverage * profile, 1.0, shape) * profile;
}

vec3 cloudLight(float height, float density, float mu, vec3 sunDir, vec3 sky) {
    float sunUp = saturate(sunDir.y);
    float light = mix(0.1, 1.0, smoothstep(0.0, 0.65, height));
    vec3 underside = mix(uCloudShadow, sky, 0.22);
    vec3 color = mix(underside, uCloudLit, light);
    float silver = pow(saturate(mu), mix(3.5, 9.0, sunUp)) * (1.0 - saturate(density * 1.6));
    color += uSunColor * silver * mix(1.15, 0.55, sunUp);
    return color;
}

void marchSlab(
    vec3 rd,
    vec3 sunDir,
    float mu,
    float base,
    float thickness,
    float densityScale,
    int steps,
    float wisps,
    float alphaScale,
    inout vec3 radiance,
    inout float transmittance
) {
    float originY = cameraPosition.y;
    float tEnter = (base - originY) / rd.y;
    float tExit = (base + thickness - originY) / rd.y;
    float t0 = max(min(tEnter, tExit), 0.0);
    float t1 = max(tEnter, tExit);
    if (t1 <= t0) return;

    float stepLen = (t1 - t0) / float(steps);
    float dither = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
    vec3 sky = mix(uHorizon, uZenith, 0.45);
    float limit = wisps > 0.5 ? float(WISP_STEPS) : float(CUMULUS_STEPS);
    // Automatic mip selection breaks inside the march and blurs every cloud.
    float horizonBand = smoothstep(0.012, 0.07, rd.y);

    for (int i = 0; i < CUMULUS_STEPS; i++) {
        if (float(i) >= limit || transmittance < 0.03) break;
        float t = t0 + (float(i) + dither * 0.85) * stepLen;
        float lod = clamp((t - 700.0) * 0.00055, 0.0, 4.5);
        vec3 pos = cameraPosition + rd * t;
        float density = wisps > 0.5 ? wispDensity(pos, lod) : cumulusDensity(pos, rd, lod);
        float aerial = exp(-t * 0.00012);
        float alpha = 1.0 - exp(-density * stepLen * densityScale);
        vec3 lit = wisps > 0.5
            ? mix(uZenith, vec3(0.9, 0.94, 0.98), 0.78)
            : cloudLight(clamp((pos.y - base) / thickness, 0.0, 1.0), density, mu, sunDir, sky);
        lit = mix(uHorizon, lit, aerial);
        alpha *= mix(0.3, 1.0, aerial);
        if (wisps < 0.5) alpha *= horizonBand;
        alpha *= alphaScale;
        radiance += transmittance * alpha * lit;
        transmittance *= 1.0 - alpha;
    }
}

// Straight up, the slab march turns into sheets. One column sample shows the
// flat bases instead: grey-blue underneath, brighter where the sun rims them.
void overheadDeck(vec3 rd, vec3 sunDir, float mu, float alphaScale, inout vec3 radiance, inout float transmittance) {
    float mid = uCloudBase + uCloudThickness * 0.2;
    float t = (mid - cameraPosition.y) / rd.y;
    if (t <= 0.0) return;
    vec2 uv = (cameraPosition + rd * t).xz * uCloudScale - uWindOffset;
    // Above ~40° the worley cells line up into soft vertical ridges. The broad
    // mass is blurred there so the zenith reads as flat cloud bases.
    float faceOn = smoothstep(0.48, 0.7, rd.y);
    float lod = mix(0.0, 1.35, faceOn);
    vec2 blur = vec2(0.0042) * faceOn;
    float mass = textureLod(uCloudNoise, uv, lod).r;
    mass += textureLod(uCloudNoise, uv + vec2(blur.x, blur.y), lod).r;
    mass += textureLod(uCloudNoise, uv + vec2(-blur.x, blur.y), lod).r;
    mass += textureLod(uCloudNoise, uv + vec2(blur.x, -blur.y), lod).r;
    mass += textureLod(uCloudNoise, uv + vec2(-blur.x, -blur.y), lod).r;
    mass *= 0.2;
    vec4 low = textureLod(uCloudNoise, uv, 0.0);
    vec4 high = textureLod(uCloudNoise, uv * 1.9 + 0.17, 0.0);
    float detailed = low.r * 0.55 + low.g * 0.28 + high.b * 0.17;
    float deck = smoothstep(1.0 - uCoverage, 1.0 - uCoverage + 0.1, detailed);
    float puff = smoothstep(0.56, 0.84, mass);
    float density = mix(deck, puff, faceOn);
    vec3 sky = mix(uHorizon, uZenith, 0.55);
    vec3 underside = mix(uCloudShadow, sky, 0.38);
    float silver = pow(saturate(mu), 5.0) * (1.0 - density);
    vec3 lit = mix(underside, uCloudLit, 0.18 + 0.2 * density) + uSunColor * silver * 0.85;
    float alpha = saturate(density * 0.95) * alphaScale;
    radiance += transmittance * alpha * lit;
    transmittance *= 1.0 - alpha;

    if (faceOn < 0.98) {
        float tw = (uWispBase + uWispThickness * 0.5 - cameraPosition.y) / rd.y;
        if (tw > 0.0) {
            float wisp = wispDensity(cameraPosition + rd * tw, 0.0);
            float wispAlpha = saturate(wisp * 0.65) * alphaScale * (1.0 - faceOn);
            vec3 wispColor = mix(uZenith, vec3(0.92, 0.95, 0.98), 0.82);
            radiance += transmittance * wispAlpha * wispColor;
            transmittance *= 1.0 - wispAlpha;
        }
    }
}

void main() {
    // The sky box triangles cross the camera, and perspective-correct
    // interpolation of a world position shears the clouds into streaks.
    vec2 ndc = (gl_FragCoord.xy - uViewport.xy) / uViewport.zw * 2.0 - 1.0;
    vec4 far = uInvProjView * vec4(ndc, 1.0, 1.0);
    vec3 rd = normalize(far.xyz / far.w - cameraPosition);
    vec3 sunDir = normalize(uSunDirection);
    float mu = dot(rd, sunDir);

    vec3 radiance = vec3(0.0);
    float transmittance = 1.0;
    float overhead = smoothstep(0.32, 0.5, rd.y);
    // The slab assumes the eye is under the cloud base. Fade it out through
    // ~300–500 m so an overview is sky colour, not a sheet of cloud bases.
    float cloudFade = 1.0 - smoothstep(uCloudBase * 0.55, uCloudBase * 0.88, cameraPosition.y);

    if (cloudFade > 0.004 && rd.y > 0.02 && overhead < 0.98) {
        float slabFade = (1.0 - overhead) * cloudFade;
        marchSlab(rd, sunDir, mu, uCloudBase, uCloudThickness, uCloudDensity, CUMULUS_STEPS, 0.0, slabFade, radiance, transmittance);
        if (rd.y > 0.16) {
            marchSlab(rd, sunDir, mu, uWispBase, uWispThickness, uCloudDensity * 0.35, WISP_STEPS, 1.0, slabFade, radiance, transmittance);
        }
    }
    if (cloudFade > 0.004 && overhead > 0.02) {
        overheadDeck(rd, sunDir, mu, overhead * cloudFade, radiance, transmittance);
    }

    radiance += atmosphere(rd, sunDir) * transmittance;
    gl_FragColor = vec4(radiance, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`,TE=1e4,Co=new pt;function ff(s){const t=s%1;return t<0?t+1:t}function Ro(s){return{value:new zt(s)}}class AE{constructor(t){this.noise=ME(),this.windOffset=new pt,this.sunDirection=new D,this.uniforms={uSunDirection:{value:this.sunDirection},uSunColor:Ro(16777215),uSunDisk:{value:8},uZenith:Ro(805526),uHorizon:Ro(12836848),uTurbidity:{value:1.6},uRayleigh:{value:1.15},uMie:{value:.008},uMieG:{value:.9},uCloudNoise:{value:this.noise},uWindOffset:{value:this.windOffset},uWindDir:{value:new pt(0,1)},uCloudScale:{value:32e-5},uCoverage:{value:.46},uHorizonCoverage:{value:.74},uCloudBase:{value:780},uCloudThickness:{value:460},uCloudDensity:{value:.0045},uCloudShadow:Ro(7241619),uCloudLit:Ro(16775152),uWispCoverage:{value:.22},uWispBase:{value:2400},uWispThickness:{value:380},uInvProjView:{value:new Gt},uViewport:{value:new ce(0,0,1,1)}},this.mesh=new jt(new rn(1,1,1),new On({name:"SeaSky",uniforms:this.uniforms,vertexShader:bE,fragmentShader:EE,side:fn,depthWrite:!1,depthTest:!0,precision:"highp"})),this.mesh.name="Sky",this.mesh.scale.setScalar(TE),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.mesh.onBeforeRender=(e,n,i)=>{this.uniforms.uInvProjView.value.multiplyMatrices(i.matrixWorld,i.projectionMatrixInverse),e.getCurrentViewport(this.uniforms.uViewport.value)},this.setPreset(t)}setPreset(t){const{sky:e,clouds:n,sun:i}=t,o=this.uniforms;return o.uZenith.value.set(e.zenith),o.uHorizon.value.set(e.horizon),o.uTurbidity.value=e.turbidity,o.uRayleigh.value=e.rayleigh,o.uMie.value=e.mieCoefficient,o.uMieG.value=e.mieDirectionalG,o.uSunDisk.value=e.sunDisk,o.uSunColor.value.set(i.color),o.uCoverage.value=n.coverage,o.uHorizonCoverage.value=n.horizonCoverage,o.uCloudBase.value=n.base,o.uCloudThickness.value=n.thickness,o.uCloudScale.value=n.scale,o.uCloudDensity.value=n.density,o.uCloudShadow.value.set(n.shadow),o.uCloudLit.value.set(n.lit),o.uWispCoverage.value=n.wispCoverage,o.uWispBase.value=n.wispBase,o.uWispThickness.value=n.wispThickness,this.coverage=n.coverage,this.horizonCoverage=n.horizonCoverage,this.shadowStrength=n.shadowStrength,this.drift=n.drift,this.setSun(i),this}setSun({elevationDeg:t,azimuthDeg:e}){return this.sunDirection.copy(dp({elevationDeg:t,azimuthDeg:e})),this.sunDirection}update(t,e){Co.set(e?.x??0,e?.z??0);const n=Co.length();n>1e-4&&this.uniforms.uWindDir.value.copy(Co).multiplyScalar(1/n);const i=this.uniforms.uCloudScale.value;this.windOffset.x=ff(this.windOffset.x+Co.x*t*this.drift*i),this.windOffset.y=ff(this.windOffset.y+Co.y*t*this.drift*i)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.noise.dispose()}}const CE=5,RE=128;class PE{constructor({preset:t=ms,scale:e=1e4}={}){this.preset=t,this.dome=new AE(t),this.sky=this.dome.mesh,this.sky.scale.setScalar(e),this.sunDirection=this.dome.sunDirection,this.anchor=new D,this.sinceBake=0,this.bakeInterval=CE,this.lastBakeMs=0,this.renderer=null,this.pmrem=null,this.envScene=null,this.envSky=null,this.cubeCamera=null,this.cubeTarget=null,this.environmentTarget=null,this.skyCubeTexture=null,this.environment=null,this.cloudField={map:this.dome.noise,scale:this.dome.uniforms.uCloudScale.value,offset:this.dome.windOffset,coverage:this.dome.coverage,horizonCoverage:this.dome.horizonCoverage,strength:this.dome.shadowStrength}}setSun({elevationDeg:t,azimuthDeg:e}){return this.dome.setSun({elevationDeg:t,azimuthDeg:e}),this.sunDirection}setPreset(t){return this.preset=t,this.dome.setPreset(t),this.syncCloudField(),this}syncCloudField(){const t=this.cloudField;t.scale=this.dome.uniforms.uCloudScale.value,t.coverage=this.dome.coverage,t.horizonCoverage=this.dome.horizonCoverage,t.strength=this.dome.shadowStrength}update(t,e,n){this.dome.update(t,e),n&&(this.anchor.copy(n),this.sky.position.x=n.x,this.sky.position.z=n.z),this.sinceBake+=t,this.renderer&&this.sinceBake>=this.bakeInterval&&this.refreshEnvironment()}buildEnvironment(t,{cubeSize:e=RE}={}){return this.disposeEnvironment(),this.renderer=t,this.cubeTarget=new Zc(e,{type:ci,generateMipmaps:!0,minFilter:jn,colorSpace:Xi}),this.cubeTarget.texture.colorSpace=Xi,this.envScene=new Vf,this.envSky=new jt(this.sky.geometry,this.sky.material),this.envSky.onBeforeRender=this.sky.onBeforeRender,this.envSky.scale.copy(this.sky.scale),this.envSky.frustumCulled=!1,this.envScene.add(this.envSky),this.cubeCamera=new kf(1,5e4,this.cubeTarget),this.pmrem=new Tc(t),this.refreshEnvironment(),this.environment}refreshEnvironment(){if(!this.renderer||!this.cubeCamera)return this.environment;const t=performance.now();return this.envSky.position.copy(this.sky.position),this.envSky.scale.copy(this.sky.scale),this.cubeCamera.position.copy(this.anchor),this.cubeCamera.update(this.renderer,this.envScene),this.environmentTarget=this.pmrem.fromCubemap(this.cubeTarget.texture,this.environmentTarget),this.skyCubeTexture=this.cubeTarget.texture,this.environment=this.environmentTarget.texture,this.sinceBake=0,this.lastBakeMs=performance.now()-t,this.environment}disposeEnvironment(){this.cubeTarget?.dispose(),this.environmentTarget?.dispose(),this.pmrem?.dispose(),this.cubeTarget=null,this.environmentTarget=null,this.pmrem=null,this.cubeCamera=null,this.envSky=null,this.envScene=null,this.skyCubeTexture=null,this.environment=null,this.renderer=null}dispose(){this.disposeEnvironment(),this.dome.dispose()}}const zE="/gommier/assets/height-DMFpI3xo.png",pf=2,LE=16,DE=4.5,IE=-1.2,bi=new Re;function NE(s){return s<0?0:s>1?1:s}function Ei(s,t,e){const n=NE((e-s)/(t-s));return n*n*(3-2*n)}function Me(s,t,e){return s+(t-s)*e}function FE(s){const t=Math.sin(s*127.1)*43758.5453;return t-Math.floor(t)}function Yi(s){const t=new zt(s);return[t.r,t.g,t.b]}const ea=Yi(14140556),Rl=Yi(6064184),Pl=Yi(3831348),zl=Yi(1534772),Ll=Yi(1869376),Xs=Yi(808748),Dl=Yi(5919564),Il=Yi(9275008);function UE(s,t,e,n){const i=Ei(.18,.55,e),o=(1-i)*(1-Ei(6,26,s));let r=Me(zl[0],Rl[0],o*.45),a=Me(zl[1],Rl[1],o*.45),l=Me(zl[2],Rl[2],o*.45);const c=(1-i)*(1-Ei(1.2,10,s))*.35;r=Me(r,Pl[0],c),a=Me(a,Pl[1],c),l=Me(l,Pl[2],c);const h=Ei(4,32,s);r=Me(r,Me(Ll[0],Xs[0],i),h),a=Me(a,Me(Ll[1],Xs[1],i),h),l=Me(l,Me(Ll[2],Xs[2],i),h);const d=i*Ei(2,18,s);r=Me(r,Xs[0],d*.55),a=Me(a,Xs[1],d*.55),l=Me(l,Xs[2],d*.55);const u=Ei(98,128,s);r=Me(r,Il[0],u),a=Me(a,Il[1],u),l=Me(l,Il[2],u);const f=Ei(.55,1.15,t)*(1-u*.45)*.7;r=Me(r,Dl[0],f),a=Me(a,Dl[1],f),l=Me(l,Dl[2],f);const m=(1-Ei(.3,1.45,s))*(1-Ei(.18,.62,t));r=Me(r,ea[0],m),a=Me(a,ea[1],m),l=Me(l,ea[2],m);const x=.94+.06*n;return[r*x,a*x,l*x]}function OE(s,t,e){const n=s+t-e,i=Math.abs(n-s),o=Math.abs(n-t),r=Math.abs(n-e);return i<=o&&i<=r?s:o<=r?t:e}async function BE(s){const t=new Blob([s]).stream().pipeThrough(new DecompressionStream("deflate"));return new Uint8Array(await new Response(t).arrayBuffer())}async function kE(s){const t=new Uint8Array(await(await fetch(s)).arrayBuffer()),e=new DataView(t.buffer,t.byteOffset,t.byteLength);let n=8,i=0,o=0,r=0;const a=[];for(;n<t.length;){const M=e.getUint32(n),b=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]),T=t.subarray(n+8,n+8+M);if(n+=12+M,b==="IHDR"){const C=new DataView(T.buffer,T.byteOffset,T.byteLength);i=C.getUint32(0),o=C.getUint32(4),r=T[9]}else if(b==="IDAT")a.push(T);else if(b==="IEND")break}let l=0;for(const M of a)l+=M.length;const c=new Uint8Array(l);let h=0;for(const M of a)c.set(M,h),h+=M.length;const d=await BE(c),u=r===6?4:3,f=i*u,{elevMin:m,elevMax:x}=ca.encoding,g=new Float32Array(i*o),p=new Uint8Array(i*o);let v=new Uint8Array(f),y=0;for(let M=0;M<o;M++){const b=d[y++],T=d.subarray(y,y+f);y+=f;const C=new Uint8Array(f);for(let z=0;z<f;z++){const _=z>=u?C[z-u]:0,w=v[z],R=z>=u?v[z-u]:0;let I=T[z];b===1?I=I+_&255:b===2?I=I+w&255:b===3?I=I+(_+w>>1)&255:b===4&&(I=I+OE(_,w,R)&255),C[z]=I}for(let z=0;z<i;z++){const _=z*u,w=M*i+z,R=C[_]<<8|C[_+1];g[w]=m+R/65535*(x-m),p[w]=C[_+2]>127?1:0}v=C}return{width:i,height:o,real:g,land:p}}function HE(s){let t=2166136261;for(let e=0;e<s.length;e++)t=Math.imul(t^s.charCodeAt(e),16777619);return t>>>0}function VE(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function GE(){const s=new an({color:12037795,emissive:6051406,emissiveIntensity:.45,roughness:.95,flatShading:!0}),t=new be;t.name="Rocher du Diamant";const e=us.gameHeight,n=[{radius:e*.28,tall:e,x:0,z:0,lean:.04,yaw:.5,sx:1.7,sz:.85},{radius:e*.14,tall:e*.78,x:3.6,z:1.4,lean:-.22,yaw:1.2,sx:1.1,sz:.75},{radius:e*.22,tall:e*.38,x:-.6,z:1.2,lean:.1,yaw:.3,sx:1.8,sz:1.2}];for(const i of n){const o=new jt(new th(i.radius,i.tall,5),s);o.position.set(i.x,i.tall*.42,i.z),o.scale.set(i.sx,1,i.sz),o.rotation.set(0,i.yaw,i.lean),t.add(o)}return t.position.set(us.x,0,us.z),t}class WE{constructor(t){this.scene=t,this.meta=ca,this.bounds=ca.bounds,this.maxDepth=LE,this.shallowDepth=DE,this.loaded=!1,this.group=new be,this.group.name="Martinique",t.add(this.group),this.cloudFallback=new hi(new Uint8Array([128,128,128,255]),1,1),this.cloudFallback.needsUpdate=!0,this.cloudUniforms={uCloudMap:{value:this.cloudFallback},uCloudScale:{value:48e-5},uCloudOffset:{value:new pt},uCloudCoverage:{value:.42},uCloudStrength:{value:0}},this.ready=this.build()}setCloudField(t){const e=this.cloudUniforms;!e||!t?.map||(e.uCloudMap.value=t.map,e.uCloudScale.value=t.scale,e.uCloudOffset.value.copy(t.offset),e.uCloudCoverage.value=t.coverage,e.uCloudStrength.value=t.strength??0)}installCloudShadow(t){const e=this.cloudUniforms;t.customProgramCacheKey=()=>"terrain-cloud-column",t.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCloudWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
vCloudWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uCloudMap;
uniform float uCloudScale;
uniform vec2 uCloudOffset;
uniform float uCloudCoverage;
uniform float uCloudStrength;
varying vec3 vCloudWorld;
float cloudColumnShade(vec3 world) {
    if (uCloudStrength <= 0.0) return 1.0;
    vec2 uv = world.xz * uCloudScale - uCloudOffset;
    vec4 low = texture2D(uCloudMap, uv);
    vec4 high = texture2D(uCloudMap, uv * 1.9 + 0.17);
    float shape = low.r * 0.55 + low.g * 0.28 + high.b * 0.17;
    float d = smoothstep(1.0 - uCloudCoverage, 1.0 - uCloudCoverage + 0.1, shape);
    return mix(1.0, 1.0 - uCloudStrength, d);
}
`).replace("#include <lights_fragment_begin>",`#include <lights_fragment_begin>
float cloudShade = cloudColumnShade(vCloudWorld);
reflectedLight.directDiffuse *= cloudShade;
reflectedLight.directSpecular *= cloudShade;
`)}}async build(){const t=await kE(zE);this.width=t.width,this.height=t.height,this.real=t.real,this.landMask=t.land,this.group.add(this.buildTerrain()),this.group.add(GE()),this.group.add(this.buildTowns()),this.depthTexture=this.buildDepthTexture(),this.loaded=!0}realAt(t,e){const{minX:n,maxX:i,minZ:o,maxZ:r}=this.bounds,a=(t-n)/(i-n),l=(e-o)/(r-o);if(a<0||l<0||a>1||l>1)return-400;const c=a*(this.width-1),h=l*(this.height-1),d=Math.floor(c),u=Math.floor(h),f=Math.min(this.width-1,d+1),m=Math.min(this.height-1,u+1),x=c-d,g=h-u,p=(v,y)=>this.real[y*this.width+v];return p(d,u)*(1-x)*(1-g)+p(f,u)*x*(1-g)+p(d,m)*(1-x)*g+p(f,m)*x*g}sample(t,e){const n=this.realAt(t,e),{verticalScale:i,bathymetryScale:o}=this.meta;return n>=0?{height:n/i,depth:0,land:!0}:{height:n/i,depth:-n/o,land:!1}}terrainHeight(t,e){const n=this.sample(t,e);return n.land?n.height:-1/0}navigablePoint(t,e,n=1){const i=(a,l)=>{const c=this.sample(a,l);return c.land?-30-c.height:c.depth};let o=t,r=e;if(i(o,r)>=n)return{x:o,z:r};for(let a=0;a<28;a++){const c=i(o+5,r)-i(o-5,r),h=i(o,r+5)-i(o,r-5),d=Math.hypot(c,h);if(d<.001||(o+=c/d*6,r+=h/d*6,i(o,r)>=n))break}return{x:o,z:r}}chart(){return{coast:this.meta.coast,bounds:this.bounds,rock:{x:us.x,z:us.z}}}buildTerrain(){const{width:t,height:e,bounds:n,meta:i}=this,{minX:o,maxX:r,minZ:a,maxZ:l}=n,c=Math.floor((t-1)/pf)+1,h=Math.floor((e-1)/pf)+1,d=new Float32Array(c*h*3),u=new Float32Array(c*h*3),f=new Float32Array(c*h),m=new Uint8Array(c*h),x=z=>Math.round(z*(t-1)/(c-1)),g=z=>Math.round(z*(e-1)/(h-1));for(let z=0;z<h;z++){const _=g(z),w=_/(e-1),R=a+(l-a)*w;for(let I=0;I<c;I++){const L=x(I),O=L/(t-1),U=o+(r-o)*O,N=_*t+L,V=this.real[N],W=this.landMask[N]===1&&V>=0;let Z=W?V/i.verticalScale:IE;W&&(U-us.x)**2+(R-us.z)**2<400&&Z>1.5&&(Z=1.2);const tt=z*c+I;f[tt]=Z,m[tt]=W?1:0,d[tt*3]=U,d[tt*3+1]=Z,d[tt*3+2]=R}}const p=(r-o)/(c-1),v=(l-a)/(h-1);for(let z=0;z<h;z++)for(let _=0;_<c;_++){const w=z*c+_,R=Math.max(0,_-1),I=Math.min(c-1,_+1),L=Math.max(0,z-1),O=Math.min(h-1,z+1),U=Math.hypot((f[z*c+I]-f[z*c+R])/((I-R)*p||1),(f[O*c+_]-f[L*c+_])/((O-L)*v||1)),N=1-z/(h-1),V=m[w]?UE(f[w],U,N,FE(w)):ea;u[w*3]=V[0],u[w*3+1]=V[1],u[w*3+2]=V[2]}const y=[];for(let z=0;z<h-1;z++)for(let _=0;_<c-1;_++){const w=z*c+_,R=w+c,I=w+1,L=R+1;!m[w]&&!m[R]&&!m[I]&&!m[L]||y.push(w,R,I,I,R,L)}const M=new Uint32Array(y),b=new Ie;b.setAttribute("position",new Ge(d,3)),b.setAttribute("color",new Ge(u,3)),b.setIndex(new Ge(M,1)),b.computeVertexNormals();const T=new an({vertexColors:!0,roughness:.92,metalness:0});this.terrainMaterial=T,this.installCloudShadow(T);const C=new jt(b,T);return C.name="MartiniqueTerrain",C.castShadow=!1,C.receiveShadow=!1,C}buildDepthTexture(){const{width:t,height:e,maxDepth:n,meta:i}=this,o=new Uint8Array(t*e*4);for(let a=0;a<t*e;a++){const l=this.real[a],c=l>=0?0:Math.min(n,-l/i.bathymetryScale);o[a*4]=Math.round(c/n*255),o[a*4+3]=255}const r=new hi(o,t,e,Ze);return r.colorSpace=si,r.wrapS=Yn,r.wrapT=Yn,r.minFilter=De,r.magFilter=De,r.generateMipmaps=!1,r.flipY=!1,r.needsUpdate=!0,r}buildTowns(){const t=new be;t.name="Towns";const e=[];for(const l of Ew){const c=this.findTownSite(l.x,l.z);if(!c)continue;const h=VE(HE(l.name)),d=l.name==="Fort-de-France"?26:15;for(let u=0;u<d;u++){const f=h()*Math.PI*2,m=Math.sqrt(h())*(l.name==="Fort-de-France"?18:12),x=c.x+Math.cos(f)*m,g=c.z+Math.sin(f)*m,p=this.sample(x,g);!p.land||p.height>16||e.push({x,z:g,y:p.height,w:1.1+h()*1.4,d:1.3+h()*1.6,h:1.3+h()*2.4,rot:h()*Math.PI,wall:h()>.85?14996144:16052714})}}if(e.length===0)return t;const n=new rn(1,1,1);n.translate(0,.5,0);const i=new rn(1,1,1);i.translate(0,.5,0);const o=new nu(n,new an({roughness:.85}),e.length),r=new nu(i,new an({color:11746092,roughness:.75}),e.length),a=new zt;for(let l=0;l<e.length;l++){const c=e[l];bi.position.set(c.x,c.y,c.z),bi.rotation.set(0,c.rot,0),bi.scale.set(c.w,c.h,c.d),bi.updateMatrix(),o.setMatrixAt(l,bi.matrix),o.setColorAt(l,a.setHex(c.wall)),bi.position.y=c.y+c.h,bi.scale.set(c.w*1.08,.28,c.d*1.08),bi.updateMatrix(),r.setMatrixAt(l,bi.matrix)}return o.castShadow=!1,o.receiveShadow=!1,r.castShadow=!1,r.receiveShadow=!1,t.add(o,r),t}findTownSite(t,e){const n=(i,o)=>{const r=this.sample(i,o);return r.land&&r.height>.3&&r.height<14};if(n(t,e))return{x:t,z:e};for(let i=8;i<=90;i+=8)for(let o=0;o<10;o++){const r=o/10*Math.PI*2,a=t+Math.cos(r)*i,l=e+Math.sin(r)*i;if(n(a,l))return{x:a,z:l}}return null}}const Nl=100,qr=16;class XE{constructor(t){this.physics=t,this.preset=ms,this.elapsed=0,this.boatPosition=new D,this.boat=null,this.spawnPosition=new D(_n.x,_n.y,_n.z),this.spawnHeading=new Le().setFromAxisAngle(new D(0,1,0),da),this.scene=new Vf,this.camera=new Fn(75,window.innerWidth/window.innerHeight,.15,24e3),this.renderer=new ty({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=gf,this.renderer.toneMapping=Fc,this.renderer.toneMappingExposure=this.preset.exposure,this.scene.environmentIntensity=this.preset.environmentIntensity,this.renderer.outputColorSpace=nn,document.body.appendChild(this.renderer.domElement),this.wind=new sb,this.waves=RM(this.wind.getVector()),this.cameraRig=new Ob(this.camera,this.renderer.domElement,this.waves),this.initEnvironment(),this.initLights();const e=new URLSearchParams(window.location.search).get("course")==="stage"?"stage":"tour";this.track=new lb(this.scene,e),this.track.setWaves(this.waves),this.hud=new Jb({onMenu:()=>this.openMenu(),onCourse:()=>this.toggleCourse()}),this.overviewMarks=new oE(this.hud.root),this.menu=new aE(Pc,{onSelect:n=>this.selectBoat(n),onClose:()=>this.closeMenu()}),this.island=new WE(this.scene),this.island.ready.then(()=>this.onIslandReady()),window.addEventListener("resize",()=>this.onWindowResize()),window.addEventListener("keydown",n=>this.onKeyDown(n)),this.openMenu()}onIslandReady(){const{island:t}=this,{minX:e,minZ:n,maxX:i,maxZ:o}=t.bounds;this.ocean.setDepthMap(t.depthTexture,{minX:e,minZ:n,maxX:i,maxZ:o,maxDepth:t.maxDepth,shallowDepth:t.shallowDepth}),this.track.fit(t),this.cameraRig.setGround((a,l)=>t.terrainHeight(a,l)),this.hud.setChart(t.chart());const r=t.navigablePoint(_n.x,_n.z,1);if(this.boat){const a=this.boat.body.position;Math.hypot(a.x-_n.x,a.z-_n.z)<5&&this.boat.teleport(r.x,r.z,da)}else this.spawnPosition.set(r.x,_n.y,r.z)}setCourse(t){return this.track.setMode(t),this.island.loaded&&this.track.fit(this.island),this.track.mode}toggleCourse(){return this.setCourse(this.track.mode==="tour"?"stage":"tour")}teleport(t,e,n=null){this.boat?.teleport(t,e,n)}get simulating(){return this.boat!==null&&!this.menu.isOpen}selectBoat(t){const e=Pc[t];if(!e)throw new Error(`Unknown boat type: ${t}`);this.boat?.dispose(),this.boat=new Ww(this.scene,this.physics.world,e),this.boat.crew.wind=this.wind,this.boat.setWaves(this.waves),this.boat.visual.traverse(n=>{n.isMesh&&n.castShadow&&!n.userData.noReceiveShadow&&(n.receiveShadow=!0)}),this.hud.setCapsizeAngle(e.balance.capsizeAngle),this.closeMenu()}openMenu(){this.menu.show(this.boat?.config.id??null),this.hud.setVisible(!1)}closeMenu(){this.boat&&(this.menu.hide(),this.hud.setVisible(!0))}onKeyDown(t){if(!t.repeat){if(t.key==="c"||t.key==="C"){this.menu.isOpen||this.toggleCourse();return}t.key!=="m"&&t.key!=="M"||(this.menu.isOpen?this.closeMenu():this.openMenu())}}initLights(){const{sun:t,hemisphere:e}=this.preset;this.hemisphereLight=new Qm(e.skyColor,e.groundColor,e.intensity),this.scene.add(this.hemisphereLight),this.sunLight=new n0(t.color,t.intensity),this.sunLight.castShadow=!0;const n=this.sunLight.shadow.camera;n.left=-qr,n.right=qr,n.top=qr,n.bottom=-qr,n.near=Nl-30,n.far=Nl+30,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.bias=-15e-5,this.sunLight.shadow.normalBias=.035,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.updateSun(this.boatPosition)}initEnvironment(){const{fog:t}=this.preset;this.scene.fog=new Kc(t.color,t.density),this.seaSky=new PE({preset:this.preset}),this.scene.add(this.seaSky.sky),this.scene.environment=this.seaSky.buildEnvironment(this.renderer),this.ocean=new vE({waves:this.waves,preset:this.preset,sunDirection:this.seaSky.sunDirection,skyTexture:this.seaSky.skyCubeTexture,grid:{halfExtent:12e3}}),this.ocean.mesh.castShadow=!1,this.ocean.mesh.receiveShadow=!1,this.scene.add(this.ocean.mesh)}setLookPreset(t){const e=lE[t];if(!e)throw new Error(`Unknown look preset: ${t}`);this.preset=e,this.renderer.toneMappingExposure=e.exposure,this.scene.environmentIntensity=e.environmentIntensity,this.scene.fog.color.set(e.fog.color);const{sun:n,hemisphere:i}=e;return this.hemisphereLight.color.set(i.skyColor),this.hemisphereLight.groundColor.set(i.groundColor),this.hemisphereLight.intensity=i.intensity,this.sunLight.color.set(n.color),this.sunLight.intensity=n.intensity,this.seaSky.setPreset(e),this.ocean.uniforms.uSunColor.value.set(n.color).multiplyScalar(n.intensity),this.ocean.setSunDirection(this.seaSky.sunDirection),this.scene.environment=this.seaSky.refreshEnvironment(),e.name}updateHaze(){const t=Yt.smoothstep(this.camera.position.y,40,520);this.scene.fog.density=this.preset.fog.density*Yt.lerp(1,.4,t)}updateSun(t){this.sunLight.target.position.copy(t),this.sunLight.position.copy(t).addScaledVector(this.seaSky.sunDirection,Nl),this.sunLight.target.updateMatrixWorld()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}update(t,e){if(this.elapsed+=t,this.simulating){this.wind.update(t,this.boat.body.position);const o=this.wind.getVector();this.boat.update(t,e,o,this.elapsed),this.island.loaded&&this.boat.applyShoreConstraint(this.island),this.track.markBoat(this.boat.body.position),this.hud.update(this.boat,this.wind,this.track.hudState(this.boat))}else this.boat?.updateVisuals(t,this.elapsed);const n=this.boat?this.boat.visual.getWorldPosition(this.boatPosition):this.spawnPosition,i=this.boat?this.boat.group.quaternion:this.spawnHeading;this.cameraRig.update(t,n,i,this.elapsed),this.updateHaze(),this.track.update(this.elapsed),this.overviewMarks.update(this.camera,this.boat,n,i,this.track),this.updateSun(n),this.ocean.setGustField(this.wind),this.ocean.update(this.elapsed,this.camera,this.boat),this.seaSky.update(t,this.wind.getVector(),this.camera.position),this.ocean.setCloudField(this.seaSky.cloudField),this.island.setCloudField(this.seaSky.cloudField)}render(){this.renderer.render(this.scene,this.camera)}}class qE{constructor(){this.world=new _M,this.world.gravity.set(0,-9.82,0),this.world.broadphase=new js(this.world),this.world.allowSleep=!0,this.defaultMaterial=new Jo("default");const t=new Ko(this.defaultMaterial,this.defaultMaterial,{friction:.1,restitution:.3});this.world.addContactMaterial(t)}update(t){try{this.world.step(1/60,t,3)}catch(e){throw console.error("💥 PHYSICS ENGINE CRASH 💥",e),e}}}const YE={port:"ArrowLeft",starboard:"ArrowRight",sheetIn:"ArrowUp",sheetOut:"ArrowDown",ease:" ",hikeOut:"e",hikeIn:"q"};function ni(s,t,e,n){const i=document.createElement(s);return t&&(i.className=t),n!==void 0&&(i.textContent=n),e?.appendChild(i),i}function Po(s,t,e){const n=document.createElementNS("http://www.w3.org/2000/svg",s);for(const[i,o]of Object.entries(t))n.setAttribute(i,o);return e?.appendChild(n),n}function jE(s){const t=Po("svg",{viewBox:"0 0 24 24",class:"touch-icon","aria-hidden":"true"});return s==="ease"?(Po("path",{d:"M3 14c3.2-.6 5-4.2 7.2-8.2",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round"},t),Po("path",{d:"M3 19c4.2-.8 6.4-3.6 9-7.4",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round"},t),Po("path",{d:"M11 13c2.2 2.6 4.6 3.8 10 3.8",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round"},t),t):(Po("polyline",{points:{left:"15 5 7 12 15 19",right:"9 5 17 12 9 19",up:"5 15 12 7 19 15",down:"5 9 12 17 19 9"}[s],fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round"},t),t)}function mf(s,t,e){const n=s.getBoundingClientRect();return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}function os({action:s,className:t,label:e,aria:n,icon:i,kicker:o}){const r=ni("button",`touch-btn${t?` ${t}`:""}`);return r.type="button",r.dataset.action=s,r.tabIndex=-1,r.draggable=!1,r.setAttribute("aria-label",n),r.setAttribute("aria-pressed","false"),i&&r.append(jE(i)),o&&ni("span","touch-kicker",r,o),ni("span","touch-label",r,e),r}class $E{constructor({onChange:t}){this.onChange=t,this.byPointer=new Map,this.counts=new Map,this.coarse=window.matchMedia("(pointer: coarse)"),this.menu=document.querySelector(".boat-menu"),this.root=ni("div","touch-pad"),this.root.hidden=!0,ni("p","touch-rotate",this.root,"Rotate your phone"),ni("div","touch-steer",this.root).append(os({action:"port",label:"Port",aria:"Port",icon:"left"}),os({action:"starboard",label:"Starboard",aria:"Starboard",icon:"right"}));const n=ni("div","touch-right",this.root),i=ni("div","touch-top-row",n);i.append(os({action:"ease",className:"touch-ease",label:"Ease",aria:"Ease the sheet",icon:"ease"})),ni("div","touch-hikes",i).append(os({action:"hikeOut",className:"touch-hike",label:"Out",aria:"Hike out",kicker:"Hike"}),os({action:"hikeIn",className:"touch-hike",label:"In",aria:"Hike in",kicker:"Hike"})),ni("div","touch-sheets",n).append(os({action:"sheetIn",label:"Sheet in",aria:"Sheet in",icon:"up"}),os({action:"sheetOut",label:"Sheet out",aria:"Sheet out",icon:"down"}));for(const a of this.root.querySelectorAll(".touch-btn"))this.bindButton(a);this.root.addEventListener("contextmenu",a=>a.preventDefault()),this.coarse.addEventListener("change",()=>this.syncVisibility()),this.menu&&(this.menuObserver=new MutationObserver(()=>this.syncVisibility()),this.menuObserver.observe(this.menu,{attributes:!0,attributeFilter:["hidden"]})),window.addEventListener("blur",()=>this.clearAll()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearAll()}),window.addEventListener("pointerup",a=>this.releasePointer(a.pointerId)),window.addEventListener("pointercancel",a=>this.releasePointer(a.pointerId)),this.syncVisibility(),document.body.append(this.root)}bindButton(t){t.addEventListener("pointerdown",e=>this.onPointerDown(e,t)),t.addEventListener("pointermove",e=>this.onPointerMove(e),{passive:!1}),t.addEventListener("pointerup",e=>this.releasePointer(e.pointerId)),t.addEventListener("pointercancel",e=>this.releasePointer(e.pointerId)),t.addEventListener("lostpointercapture",e=>this.releasePointer(e.pointerId)),t.addEventListener("pointerleave",e=>this.onPointerLeave(e,t)),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("selectstart",e=>e.preventDefault())}isHeld(t){return(this.counts.get(t)||0)>0}isMenuOpen(){return!!this.menu&&!this.menu.hidden}syncVisibility(){const t=this.coarse.matches&&!this.isMenuOpen();t||this.clearAll(),this.root.hidden=!t}onPointerDown(t,e){if(t.pointerType==="mouse"&&t.button!==0||this.byPointer.has(t.pointerId))return;t.preventDefault(),t.stopPropagation();const n=YE[e.dataset.action];this.byPointer.set(t.pointerId,{key:n,button:e}),this.counts.set(n,(this.counts.get(n)||0)+1),this.paint(e);try{e.setPointerCapture(t.pointerId)}catch{}this.onChange(n)}onPointerMove(t){const e=this.byPointer.get(t.pointerId);e&&(t.preventDefault(),mf(e.button,t.clientX,t.clientY)||this.releasePointer(t.pointerId))}onPointerLeave(t,e){this.byPointer.has(t.pointerId)&&(mf(e,t.clientX,t.clientY)||this.releasePointer(t.pointerId))}releasePointer(t){const e=this.byPointer.get(t);if(!e)return;this.byPointer.delete(t);const n=(this.counts.get(e.key)||1)-1;n>0?this.counts.set(e.key,n):this.counts.delete(e.key),this.paint(e.button);try{e.button.hasPointerCapture(t)&&e.button.releasePointerCapture(t)}catch{}this.onChange(e.key)}clearAll(){for(const t of[...this.byPointer.keys()])this.releasePointer(t)}paint(t){let e=!1;for(const n of this.byPointer.values())if(n.button===t){e=!0;break}t.classList.toggle("is-pressed",e),t.setAttribute("aria-pressed",e?"true":"false")}}const pp=new qE,ds=new XE(pp);window.__game=ds;Gb((s,t)=>{ds.camera.aspect=s/Math.max(t,1),ds.camera.updateProjectionMatrix(),ds.renderer.setSize(s,t)});const mp={},hh=new Set,ZE=new Set([" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]),KE=new $E({onChange(s){uh(s)}});function uh(s){mp[s]=hh.has(s)||KE.isHeld(s)}window.addEventListener("keydown",s=>{hh.add(s.key),uh(s.key),ZE.has(s.key)&&s.preventDefault()});window.addEventListener("keyup",s=>{hh.delete(s.key),uh(s.key)});let Yr=null;function Ic(s){try{if(Yr===null){Yr=s,requestAnimationFrame(Ic);return}const t=Math.min((s-Yr)/1e3,.05);Yr=s,ds.simulating&&pp.update(t),ds.update(t,mp),ds.render(),requestAnimationFrame(Ic)}catch(t){console.error("🔥 CRITICAL GAME LOOP ERROR 🔥",t)}}requestAnimationFrame(Ic);
