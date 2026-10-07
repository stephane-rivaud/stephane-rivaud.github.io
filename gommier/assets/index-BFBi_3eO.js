(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Tl="182",ps={ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ed=0,lc=1,Td=2,io=1,Ad=2,Vs=3,Si=0,$e=1,un=2,si=0,ms=1,cc=2,hc=3,uc=4,Rd=5,Ui=100,Cd=101,Pd=102,Ld=103,Dd=104,Id=200,Nd=201,Fd=202,Ud=203,Pa=204,La=205,Od=206,Bd=207,zd=208,kd=209,Hd=210,Vd=211,Gd=212,Wd=213,Xd=214,Da=0,Ia=1,Na=2,_s=3,Fa=4,Ua=5,Oa=6,Ba=7,xu=0,qd=1,Yd=2,kn=0,yu=1,Mu=2,Su=3,Al=4,bu=5,wu=6,Eu=7,Tu=300,Hi=301,vs=302,za=303,ka=304,vo=306,Js=1e3,ii=1001,Ha=1002,ze=1003,jd=1004,mr=1005,Oe=1006,Co=1007,On=1008,nn=1009,Au=1010,Ru=1011,Qs=1012,Rl=1013,Gn=1014,Bn=1015,Wn=1016,Cl=1017,Pl=1018,tr=1020,Cu=35902,Pu=35899,Lu=1021,Du=1022,dn=1023,oi=1026,ki=1027,Iu=1028,Ll=1029,xs=1030,Dl=1031,Il=1033,so=33776,ro=33777,oo=33778,ao=33779,Va=35840,Ga=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,ja=37496,$a=37488,Za=37489,Ka=37490,Ja=37491,Qa=37808,tl=37809,el=37810,nl=37811,il=37812,sl=37813,rl=37814,ol=37815,al=37816,ll=37817,cl=37818,hl=37819,ul=37820,dl=37821,fl=36492,pl=36494,ml=36495,gl=36283,_l=36284,vl=36285,xl=36286,$d=3200,Nu=0,Zd=1,vi="",en="srgb",ys="srgb-linear",uo="linear",ie="srgb",Wi=7680,dc=519,Kd=512,Jd=513,Qd=514,Nl=515,tf=516,ef=517,Fl=518,nf=519,fc=35044,pc="300 es",zn=2e3,fo=2001;function Fu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function po(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sf(){const r=po("canvas");return r.style.display="block",r}const mc={};function gc(...r){const t="THREE."+r.shift();console.log(t,...r)}function Dt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function $t(...r){const t="THREE."+r.shift();console.error(t,...r)}function er(...r){const t=r.join(" ");t in mc||(mc[t]=!0,Dt(...r))}function rf(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _c=1234567;const Xs=Math.PI/180,nr=180/Math.PI;function Ss(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[r&255]+ke[r>>8&255]+ke[r>>16&255]+ke[r>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function zt(r,t,e){return Math.max(t,Math.min(e,r))}function Ul(r,t){return(r%t+t)%t}function of(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function af(r,t,e){return r!==t?(e-r)/(t-r):0}function qs(r,t,e){return(1-e)*r+e*t}function lf(r,t,e,n){return qs(r,t,1-Math.exp(-e*n))}function cf(r,t=1){return t-Math.abs(Ul(r,t*2)-t)}function hf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function uf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function df(r,t){return r+Math.floor(Math.random()*(t-r+1))}function ff(r,t){return r+Math.random()*(t-r)}function pf(r){return r*(.5-Math.random())}function mf(r){r!==void 0&&(_c=r);let t=_c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gf(r){return r*Xs}function _f(r){return r*nr}function vf(r){return(r&r-1)===0&&r!==0}function xf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Mf(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:Dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ge={DEG2RAD:Xs,RAD2DEG:nr,generateUUID:Ss,clamp:zt,euclideanModulo:Ul,mapLinear:of,inverseLerp:af,lerp:qs,damp:lf,pingpong:cf,smoothstep:hf,smootherstep:uf,randInt:df,randFloat:ff,randFloatSpread:pf,seededRandom:mf,degToRad:gf,radToDeg:_f,isPowerOfTwo:vf,ceilPowerOfTwo:xf,floorPowerOfTwo:yf,setQuaternionFromProperEuler:Mf,normalize:qe,denormalize:hs};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let We=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a>=1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(d!==_||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*_;g<0&&(u=-u,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);p=Math.sin(p*v)/y,a=Math.sin(a*v)/y,l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+m*a,d=d*p+_*a;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Po.copy(this).projectOnVector(t),this.sub(Po)}reflect(t){return this.sub(Po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new D,vc=new We;class Ot{constructor(t,e,n,i,s,o,a,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],v=i[1],y=i[4],S=i[7],E=i[2],T=i[5],R=i[8];return s[0]=o*_+a*v+l*E,s[3]=o*g+a*y+l*T,s[6]=o*p+a*S+l*R,s[1]=c*_+h*v+d*E,s[4]=c*g+h*y+d*T,s[7]=c*p+h*S+d*R,s[2]=u*_+f*v+m*E,s[5]=u*g+f*y+m*T,s[8]=u*p+f*S+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lo.makeScale(t,e)),this}rotate(t){return this.premultiply(Lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new Ot,xc=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sf(){const r={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ie&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(i.r=gs(i.r),i.g=gs(i.g),i.b=gs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?uo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ys]:{primaries:t,whitePoint:n,transfer:uo,toXYZ:xc,fromXYZ:yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:xc,fromXYZ:yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),r}const qt=Sf();function ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xi;class bf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xi===void 0&&(Xi=po("canvas")),Xi.width=t.width,Xi.height=t.height;const i=Xi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Xi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=po("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wf=0;class Ol{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Do(i[o].image)):s.push(Do(i[o]))}else s=Do(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Do(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let Ef=0;const Io=new D;class Ze extends Vi{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=ii,i=ii,s=Oe,o=On,a=dn,l=nn,c=Ze.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Ss(),this.name="",this.source=new Ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Io).x}get height(){return this.source.getSize(Io).y}get depth(){return this.source.getSize(Io).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Js:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Js:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Tu;Ze.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,i=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,S=(f+1)/2,E=(p+1)/2,T=(h+u)/4,R=(d+_)/4,I=(m+g)/4;return y>S&&y>E?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=R/n):S>E?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=T/i,s=I/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=R/s,i=I/s),this.set(n,i,s,e),this}let v=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tf extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new Ze(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ol(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Tf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uu extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Af extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),_r.subVectors(this.max,Ts),qi.subVectors(t.a,Ts),Yi.subVectors(t.b,Ts),ji.subVectors(t.c,Ts),ai.subVectors(Yi,qi),li.subVectors(ji,Yi),Ei.subVectors(qi,ji);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ei.z,Ei.y,ai.z,0,-ai.x,li.z,0,-li.x,Ei.z,0,-Ei.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ei.y,Ei.x,0];return!No(e,qi,Yi,ji,_r)||(e=[1,0,0,0,1,0,0,0,1],!No(e,qi,Yi,ji,_r))?!1:(vr.crossVectors(ai,li),e=[vr.x,vr.y,vr.z],No(e,qi,Yi,ji,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qn=[new D,new D,new D,new D,new D,new D,new D,new D],Mn=new D,gr=new ar,qi=new D,Yi=new D,ji=new D,ai=new D,li=new D,Ei=new D,Ts=new D,_r=new D,vr=new D,Ti=new D;function No(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ti.fromArray(r,s);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Rf=new ar,As=new D,Fo=new D;class xo{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Fo)),this.expandByPoint(As.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Yn=new D,Uo=new D,xr=new D,ci=new D,Oo=new D,yr=new D,Bo=new D;let Bl=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Uo.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Uo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(xr),a=ci.dot(this.direction),l=-ci.dot(xr),c=ci.lengthSq(),h=Math.abs(1-o*o);let d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=s*h,d>=0)if(u>=-m)if(u<=m){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Uo).addScaledVector(xr,u),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,s){Oo.subVectors(e,t),yr.subVectors(n,t),Bo.crossVectors(Oo,yr);let o=this.direction.dot(Bo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);const l=a*this.direction.dot(yr.crossVectors(ci,yr));if(l<0)return null;const c=a*this.direction.dot(Oo.cross(ci));if(c<0||l+c>o)return null;const h=-a*ci.dot(Bo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class pe{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,g){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,g)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/$i.setFromMatrixColumn(t,0).length(),s=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cf,t,Pf)}lookAt(t,e,n){const i=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),hi.crossVectors(n,cn),hi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),hi.crossVectors(n,cn)),hi.normalize(),Mr.crossVectors(cn,hi),i[0]=hi.x,i[4]=Mr.x,i[8]=cn.x,i[1]=hi.y,i[5]=Mr.y,i[9]=cn.y,i[2]=hi.z,i[6]=Mr.z,i[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],y=n[7],S=n[11],E=n[15],T=i[0],R=i[4],I=i[8],M=i[12],w=i[1],L=i[5],O=i[9],P=i[13],B=i[2],U=i[6],N=i[10],V=i[14],X=i[3],K=i[7],nt=i[11],st=i[15];return s[0]=o*T+a*w+l*B+c*X,s[4]=o*R+a*L+l*U+c*K,s[8]=o*I+a*O+l*N+c*nt,s[12]=o*M+a*P+l*V+c*st,s[1]=h*T+d*w+u*B+f*X,s[5]=h*R+d*L+u*U+f*K,s[9]=h*I+d*O+u*N+f*nt,s[13]=h*M+d*P+u*V+f*st,s[2]=m*T+_*w+g*B+p*X,s[6]=m*R+_*L+g*U+p*K,s[10]=m*I+_*O+g*N+p*nt,s[14]=m*M+_*P+g*V+p*st,s[3]=v*T+y*w+S*B+E*X,s[7]=v*R+y*L+S*U+E*K,s[11]=v*I+y*O+S*N+E*nt,s[15]=v*M+y*P+S*V+E*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15],v=l*f-c*u,y=a*f-c*d,S=a*u-l*d,E=o*f-c*h,T=o*u-l*h,R=o*d-a*h;return e*(_*v-g*y+p*S)-n*(m*v-g*E+p*T)+i*(m*y-_*E+p*R)-s*(m*S-_*T+g*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=d*g*c-_*u*c+_*l*f-a*g*f-d*l*p+a*u*p,y=m*u*c-h*g*c-m*l*f+o*g*f+h*l*p-o*u*p,S=h*_*c-m*d*c+m*a*f-o*_*f-h*a*p+o*d*p,E=m*d*l-h*_*l-m*a*u+o*_*u+h*a*g-o*d*g,T=e*v+n*y+i*S+s*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=v*R,t[1]=(_*u*s-d*g*s-_*i*f+n*g*f+d*i*p-n*u*p)*R,t[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*R,t[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*R,t[4]=y*R,t[5]=(h*g*s-m*u*s+m*i*f-e*g*f-h*i*p+e*u*p)*R,t[6]=(m*l*s-o*g*s-m*i*c+e*g*c+o*i*p-e*l*p)*R,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*f+e*l*f)*R,t[8]=S*R,t[9]=(m*d*s-h*_*s-m*n*f+e*_*f+h*n*p-e*d*p)*R,t[10]=(o*_*s-m*a*s+m*n*c-e*_*c-o*n*p+e*a*p)*R,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*f-e*a*f)*R,t[12]=E*R,t[13]=(h*_*i-m*d*i+m*n*u-e*_*u-h*n*g+e*d*g)*R,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*g-e*a*g)*R,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,m=s*d,_=o*h,g=o*d,p=a*d,v=l*c,y=l*h,S=l*d,E=n.x,T=n.y,R=n.z;return i[0]=(1-(_+p))*E,i[1]=(f+S)*E,i[2]=(m-y)*E,i[3]=0,i[4]=(f-S)*T,i[5]=(1-(u+p))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(m+y)*R,i[9]=(g-v)*R,i[10]=(1-(u+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=$i.set(i[0],i[1],i[2]).length();const o=$i.set(i[4],i[5],i[6]).length(),a=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Sn.copy(this);const c=1/s,h=1/o,d=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=zn,l=!1){const c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===zn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fo)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=zn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===zn)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===fo)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $i=new D,Sn=new pe,Cf=new D(0,0,0),Pf=new D(1,1,1),hi=new D,Mr=new D,cn=new D,Mc=new pe,Sc=new We;class on{constructor(t=0,e=0,n=0,i=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Ou{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lf=0;const bc=new D,Zi=new We,jn=new pe,Sr=new D,Rs=new D,Df=new D,If=new We,wc=new D(1,0,0),Ec=new D(0,1,0),Tc=new D(0,0,1),Ac={type:"added"},Nf={type:"removed"},Ki={type:"childadded",child:null},zo={type:"childremoved",child:null};class Se extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new D,e=new on,n=new We,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new Ot}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(wc,t)}rotateY(t){return this.rotateOnAxis(Ec,t)}rotateZ(t){return this.rotateOnAxis(Tc,t)}translateOnAxis(t,e){return bc.copy(t).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wc,t)}translateY(t){return this.translateOnAxis(Ec,t)}translateZ(t){return this.translateOnAxis(Tc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Rs,Sr,this.up):jn.lookAt(Sr,Rs,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),Zi.setFromRotationMatrix(jn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ac),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nf),zo.child=t,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ac),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,If,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new D(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new D,$n=new D,ko=new D,Zn=new D,Ji=new D,Qi=new D,Rc=new D,Ho=new D,Vo=new D,Go=new D,Wo=new _e,Xo=new _e,qo=new _e;class An{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){bn.subVectors(i,e),$n.subVectors(n,e),ko.subVectors(t,e);const o=bn.dot(bn),a=bn.dot($n),l=bn.dot(ko),c=$n.dot($n),h=$n.dot(ko),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,n),qo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Wo,s.x),o.addScaledVector(Xo,s.y),o.addScaledVector(qo,s.z),o}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),$n.subVectors(t,e),bn.cross($n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),bn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return An.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Ji.subVectors(i,n),Qi.subVectors(s,n),Ho.subVectors(t,n);const l=Ji.dot(Ho),c=Qi.dot(Ho);if(l<=0&&c<=0)return e.copy(n);Vo.subVectors(t,i);const h=Ji.dot(Vo),d=Qi.dot(Vo);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ji,o);Go.subVectors(t,s);const f=Ji.dot(Go),m=Qi.dot(Go);if(m>=0&&f<=m)return e.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Qi,a);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Rc.subVectors(s,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Rc,a);const p=1/(g+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},br={h:0,s:0,l:0};function Yo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=Ul(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Yo(o,s,t+1/3),this.g=Yo(o,s,t),this.b=Yo(o,s,t-1/3)}return qt.colorSpaceToWorking(this,i),this}setStyle(t,e=en){function n(s){s!==void 0&&parseFloat(s)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const n=Bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return qt.workingToColorSpace(He.copy(this),t),Math.round(zt(He.r*255,0,255))*65536+Math.round(zt(He.g*255,0,255))*256+Math.round(zt(He.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(He.copy(this),e);const n=He.r,i=He.g,s=He.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=en){qt.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,i=He.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(br);const n=qs(ui.h,br.h,e),i=qs(ui.s,br.s,e),s=qs(ui.l,br.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Nt;Nt.NAMES=Bu;let Ff=0,bs=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=ms,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=La,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pa&&(n.blendSrc=this.blendSrc),this.blendDst!==La&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class lr extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new D,wr=new Tt;let Uf=0;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),i=qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),i=qe(i,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fc&&(t.usage=this.usage),t}}class zu extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ku extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Of=0;const mn=new pe,jo=new Se,ts=new D,hn=new ar,Cs=new ar,Ue=new D;class we extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fu(t)?ku:zu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return jo.lookAt(t),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(hn.min,Cs.min),hn.expandByPoint(Ue),Ue.addVectors(hn.max,Cs.max),hn.expandByPoint(Ue)):(hn.expandByPoint(Cs.min),hn.expandByPoint(Cs.max))}hn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ue.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(t,c),Ue.add(ts)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new D,l[I]=new D;const c=new D,h=new D,d=new D,u=new Tt,f=new Tt,m=new Tt,_=new D,g=new D;function p(I,M,w){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,w),u.fromBufferAttribute(s,I),f.fromBufferAttribute(s,M),m.fromBufferAttribute(s,w),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[I].add(_),a[M].add(_),a[w].add(_),l[I].add(g),l[M].add(g),l[w].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,M=v.length;I<M;++I){const w=v[I],L=w.start,O=w.count;for(let P=L,B=L+O;P<B;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const y=new D,S=new D,E=new D,T=new D;function R(I){E.fromBufferAttribute(i,I),T.copy(E);const M=a[I];y.copy(M),y.sub(E.multiplyScalar(E.dot(M))).normalize(),S.crossVectors(T,M);const L=S.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,L)}for(let I=0,M=v.length;I<M;++I){const w=v[I],L=w.start,O=w.count;for(let P=L,B=L+O;P<B;P+=3)R(t.getX(P+0)),R(t.getX(P+1)),R(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new rn(u,h,d)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new pe,Ai=new Bl,Er=new xo,Pc=new D,Tr=new D,Ar=new D,Rr=new D,$o=new D,Cr=new D,Lc=new D,Pr=new D;class ae extends Se{constructor(t=new we,e=new lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Cr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&($o.fromBufferAttribute(d,t),o?Cr.addScaledVector($o,h):Cr.addScaledVector($o.sub(e),h))}e.add(Cr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),Ai.copy(t.ray).recast(t.near),!(Er.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Er,Pc)===null||Ai.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Cc.copy(s).invert(),Ai.copy(t.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,E=y;S<E;S+=3){const T=a.getX(S),R=a.getX(S+1),I=a.getX(S+2);i=Lr(this,p,t,n,c,h,d,T,R,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),S=a.getX(g+2);i=Lr(this,o,t,n,c,h,d,v,y,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,E=y;S<E;S+=3){const T=S,R=S+1,I=S+2;i=Lr(this,p,t,n,c,h,d,T,R,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,y=g+1,S=g+2;i=Lr(this,o,t,n,c,h,d,v,y,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Bf(r,t,e,n,i,s,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Si,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Pr);return c<e.near||c>e.far?null:{distance:c,point:Pr.clone(),object:r}}function Lr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Tr),r.getVertexPosition(l,Ar),r.getVertexPosition(c,Rr);const h=Bf(r,t,e,n,Tr,Ar,Rr,Lc);if(h){const d=new D;An.getBarycoord(Lc,Tr,Ar,Rr,d),i&&(h.uv=An.getInterpolatedAttribute(i,a,l,c,d,new Tt)),s&&(h.uv1=An.getInterpolatedAttribute(s,a,l,c,d,new Tt)),o&&(h.normal=An.getInterpolatedAttribute(o,a,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};An.getNormal(Tr,Ar,Rr,u.normal),h.face=u,h.barycoord=d}return h}class xn extends we{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function m(_,g,p,v,y,S,E,T,R,I,M){const w=S/R,L=E/I,O=S/2,P=E/2,B=T/2,U=R+1,N=I+1;let V=0,X=0;const K=new D;for(let nt=0;nt<N;nt++){const st=nt*L-P;for(let rt=0;rt<U;rt++){const It=rt*w-O;K[_]=It*v,K[g]=st*y,K[p]=B,c.push(K.x,K.y,K.z),K[_]=0,K[g]=0,K[p]=T>0?1:-1,h.push(K.x,K.y,K.z),d.push(rt/R),d.push(1-nt/I),V+=1}}for(let nt=0;nt<I;nt++)for(let st=0;st<R;st++){const rt=u+st+U*nt,It=u+st+U*(nt+1),se=u+(st+1)+U*(nt+1),Qt=u+(st+1)+U*nt;l.push(rt,It,Qt),l.push(It,se,Qt),X+=6}a.addGroup(f,X,M),f+=X,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(r){const t={};for(let e=0;e<r.length;e++){const n=Ms(r[e]);for(const i in n)t[i]=n[i]}return t}function zf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Hu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const zl={clone:Ms,merge:Ye};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vu extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new D,Dc=new Tt,Ic=new Tt;class vn extends Vu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,Dc,Ic),e.subVectors(Ic,Dc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const es=-90,ns=1;class Gu extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new vn(es,ns,t,e);i.layers=this.layers,this.add(i);const s=new vn(es,ns,t,e);s.layers=this.layers,this.add(s);const o=new vn(es,ns,t,e);o.layers=this.layers,this.add(o);const a=new vn(es,ns,t,e);a.layers=this.layers,this.add(a);const l=new vn(es,ns,t,e);l.layers=this.layers,this.add(l);const c=new vn(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Wu extends Ze{constructor(t=[],e=Hi,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kl extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Wu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xn(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:si});s.uniforms.tEquirect.value=e;const o=new ae(i,s),a=e.minFilter;return e.minFilter===On&&(e.minFilter=Oe),new Gu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}class ve extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vf={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Hl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new Hl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xu extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yo extends Ze{constructor(t=null,e=1,n=1,i,s,o,a,l,c=ze,h=ze,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ko=new D,Gf=new D,Wf=new Ot;class mi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ko.subVectors(n,e).cross(Gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ko),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wf.getNormalMatrix(t),i=this.coplanarPoint(Ko).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new xo,Xf=new Tt(.5,.5),Dr=new D;class Vl{constructor(t=new mi,e=new mi,n=new mi,i=new mi,s=new mi,o=new mi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){const i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],v=s[12],y=s[13],S=s[14],E=s[15];if(i[0].setComponents(c-o,f-h,p-m,E-v).normalize(),i[1].setComponents(c+o,f+h,p+m,E+v).normalize(),i[2].setComponents(c+a,f+d,p+_,E+y).normalize(),i[3].setComponents(c-a,f-d,p-_,E-y).normalize(),n)i[4].setComponents(l,u,g,S).normalize(),i[5].setComponents(c-l,f-u,p-g,E-S).normalize();else if(i[4].setComponents(c-l,f-u,p-g,E-S).normalize(),e===zn)i[5].setComponents(c+l,f+u,p+g,E+S).normalize();else if(e===fo)i[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);const e=Xf.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Dr.x=i.normal.x>0?t.max.x:t.min.x,Dr.y=i.normal.y>0?t.max.y:t.min.y,Dr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qu extends bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const mo=new D,go=new D,Nc=new pe,Ps=new Bl,Ir=new xo,Jo=new D,Fc=new D;class qf extends Se{constructor(t=new we,e=new qu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)mo.fromBufferAttribute(e,i-1),go.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=mo.distanceTo(go);t.setAttribute("lineDistance",new Zt(n,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=s,t.ray.intersectsSphere(Ir)===!1)return;Nc.copy(i).invert(),Ps.copy(t.ray).applyMatrix4(Nc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=h.getX(_),v=h.getX(_+1),y=Nr(this,t,Ps,l,p,v,_);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=Nr(this,t,Ps,l,_,g,m-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=Nr(this,t,Ps,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Nr(this,t,Ps,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nr(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(mo.fromBufferAttribute(a,i),go.fromBufferAttribute(a,s),e.distanceSqToSegment(mo,go,Jo,Fc)>n)return;Jo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Jo);if(!(c<t.near||c>t.far))return{distance:c,point:Fc.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}class ir extends Ze{constructor(t,e,n=Gn,i,s,o,a=ze,l=ze,c,h=oi,d=1){if(h!==oi&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ol(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Yf extends ir{constructor(t,e=Gn,n=Hi,i,s,o=ze,a=ze,l,c=oi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Yu extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ds extends we{constructor(t=1,e=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,m=n*2+s,_=i+1,g=new D,p=new D;for(let v=0;v<=m;v++){let y=0,S=0,E=0,T=0;if(v<=n){const M=v/n,w=M*Math.PI/2;S=-h-t*Math.cos(w),E=t*Math.sin(w),T=-t*Math.cos(w),y=M*d}else if(v<=n+s){const M=(v-n)/s;S=-h+M*e,E=t,T=0,y=d+M*u}else{const M=(v-n-s)/n,w=M*Math.PI/2;S=h+t*Math.sin(w),E=t*Math.cos(w),T=t*Math.sin(w),y=d+u+M*d}const R=Math.max(0,Math.min(1,y/f));let I=0;v===0?I=.5/i:v===m&&(I=-.5/i);for(let M=0;M<=i;M++){const w=M/i,L=w*Math.PI*2,O=Math.sin(L),P=Math.cos(L);p.x=-E*P,p.y=S,p.z=E*O,a.push(p.x,p.y,p.z),g.set(-E*P,T,E*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(w+I,R)}if(v>0){const M=(v-1)*_;for(let w=0;w<i;w++){const L=M+w,O=M+w+1,P=v*_+w,B=v*_+w+1;o.push(L,O,P),o.push(O,B,P)}}}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Vn extends we{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let m=0;const _=[],g=n/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function v(){const S=new D,E=new D;let T=0;const R=(e-t)/n;for(let I=0;I<=s;I++){const M=[],w=I/s,L=w*(e-t)+t;for(let O=0;O<=i;O++){const P=O/i,B=P*l+a,U=Math.sin(B),N=Math.cos(B);E.x=L*U,E.y=-w*n+g,E.z=L*N,d.push(E.x,E.y,E.z),S.set(U,R,N).normalize(),u.push(S.x,S.y,S.z),f.push(P,1-w),M.push(m++)}_.push(M)}for(let I=0;I<i;I++)for(let M=0;M<s;M++){const w=_[M][I],L=_[M+1][I],O=_[M+1][I+1],P=_[M][I+1];(t>0||M!==0)&&(h.push(w,L,P),T+=3),(e>0||M!==s-1)&&(h.push(L,O,P),T+=3)}c.addGroup(p,T,0),p+=T}function y(S){const E=m,T=new Tt,R=new D;let I=0;const M=S===!0?t:e,w=S===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,g*w,0),u.push(0,w,0),f.push(.5,.5),m++;const L=m;for(let O=0;O<=i;O++){const B=O/i*l+a,U=Math.cos(B),N=Math.sin(B);R.x=M*N,R.y=g*w,R.z=M*U,d.push(R.x,R.y,R.z),u.push(0,w,0),T.x=U*.5+.5,T.y=N*.5*w+.5,f.push(T.x,T.y),m++}for(let O=0;O<i;O++){const P=E+O,B=L+O;S===!0?h.push(B,B+1,P):h.push(B+1,B,P),I+=3}c.addGroup(p,I,S===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gl extends Vn{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Gl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ys extends we{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=zt(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,d=new D,u=new Tt,f=new D,m=new D,_=new D;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){const y=n+v*h*i,S=Math.sin(y),E=Math.cos(y);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*S,d.y=t[T].y,d.z=t[T].x*E,o.push(d.x,d.y,d.z),u.x=v/e,u.y=T/(t.length-1),a.push(u.x,u.y);const R=l[3*T+0]*S,I=l[3*T+1],M=l[3*T+0]*E;c.push(R,I,M)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const S=y+v*t.length,E=S,T=S+t.length,R=S+t.length+1,I=S+1;s.push(E,T,I),s.push(R,I,T)}this.setIndex(s),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.points,t.segments,t.phiStart,t.phiLength)}}class cr extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*u-o;for(let y=0;y<c;y++){const S=y*d-s;m.push(S,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,S=v+c*(p+1),E=v+1+c*(p+1),T=v+1+c*p;f.push(y,S,T),f.push(S,E,T)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wl extends we{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new D,m=new Tt;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=s+g/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const v=p+g,y=v,S=v+n+1,E=v+n+2,T=v+1;a.push(y,S,T),a.push(S,E,T)}}this.setIndex(a),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class sr extends we{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new D,u=new D,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let E=0;E<=e;E++){const T=E/e;d.x=-t*Math.cos(i+T*s)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(i+T*s)*Math.sin(o+y*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(T+S,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=h[p][v+1],S=h[p][v],E=h[p+1][v],T=h[p+1][v+1];(p!==0||o>0)&&f.push(y,S,T),(p!==n-1||l<Math.PI)&&f.push(S,E,T)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xl extends we{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const _=m/i*s,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(_),d.y=(t+e*Math.cos(g))*Math.sin(_),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;o.push(_,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class jf extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class je extends bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class js extends je{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $f extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zf extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ju extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Kf extends ju{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Qo=new pe,Uc=new D,Oc=new D;class Jf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vl,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uc),Oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oc),e.updateMatrixWorld(),Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ql extends Vu{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qf extends Jf{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tp extends ju{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Qf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class ep extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Bc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const zc=new D;let Fr,ta;class np extends Se{constructor(t=new D(0,0,1),e=new D(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",Fr===void 0&&(Fr=new we,Fr.setAttribute("position",new Zt([0,0,0,0,1,0],3)),ta=new Gl(.5,1,5,1),ta.translate(0,-.5,0)),this.position.copy(e),this.line=new qf(Fr,new qu({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ae(ta,new lr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{zc.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(zc,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ip extends Vi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Dt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function kc(r,t,e,n){const i=sp(n);switch(e){case Lu:return r*t;case Iu:return r*t/i.components*i.byteLength;case Ll:return r*t/i.components*i.byteLength;case xs:return r*t*2/i.components*i.byteLength;case Dl:return r*t*2/i.components*i.byteLength;case Du:return r*t*3/i.components*i.byteLength;case dn:return r*t*4/i.components*i.byteLength;case Il:return r*t*4/i.components*i.byteLength;case so:case ro:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case oo:case ao:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Xa:return Math.max(r,16)*Math.max(t,8)/4;case Va:case Wa:return Math.max(r,8)*Math.max(t,8)/2;case qa:case Ya:case $a:case Za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ja:case Ka:case Ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ol:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case fl:case pl:case ml:return Math.ceil(r/4)*Math.ceil(t/4)*16;case gl:case _l:return Math.ceil(r/4)*Math.ceil(t/4)*8;case vl:case xl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sp(r){switch(r){case nn:case Au:return{byteLength:1,components:1};case Qs:case Ru:case Wn:return{byteLength:2,components:1};case Cl:case Pl:return{byteLength:2,components:4};case Gn:case Rl:case Bn:return{byteLength:4,components:1};case Cu:case Pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);function $u(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function rp(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
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
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dp=`#ifdef USE_AOMAP
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
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
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
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xp=`#ifdef USE_IRIDESCENCE
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
#endif`,yp=`#ifdef USE_BUMPMAP
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cp=`#define PI 3.141592653589793
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
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lp=`vec3 transformedNormal = objectNormal;
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
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
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
#endif`,sm=`uniform sampler2D dfgLUT;
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
}`,rm=`
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mm=`#if defined( USE_POINTS_UV )
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
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
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
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
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
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wm=`float getShadowMask() {
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
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`#include <common>
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
}`,d0=`#if DEPTH_PACKING == 3200
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
}`,f0=`#define DISTANCE
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
}`,p0=`#define DISTANCE
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
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
}`,v0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#define LAMBERT
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
}`,S0=`#define LAMBERT
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
}`,b0=`#define MATCAP
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
}`,w0=`#define MATCAP
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
}`,E0=`#define NORMAL
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
}`,T0=`#define NORMAL
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
}`,A0=`#define PHONG
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
}`,R0=`#define PHONG
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
}`,C0=`#define STANDARD
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
}`,P0=`#define STANDARD
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
}`,L0=`#define TOON
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
}`,D0=`#define TOON
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
}`,I0=`uniform float size;
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
}`,N0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,U0=`uniform vec3 color;
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
}`,O0=`uniform float rotation;
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
}`,B0=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:op,alphahash_pars_fragment:ap,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:hp,alphatest_pars_fragment:up,aomap_fragment:dp,aomap_pars_fragment:fp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:_p,bsdfs:vp,iridescence_fragment:xp,bumpmap_pars_fragment:yp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:wp,color_fragment:Ep,color_pars_fragment:Tp,color_pars_vertex:Ap,color_vertex:Rp,common:Cp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Dp,displacementmap_vertex:Ip,emissivemap_fragment:Np,emissivemap_pars_fragment:Fp,colorspace_fragment:Up,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:zp,envmap_pars_fragment:kp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:Jp,envmap_vertex:Vp,fog_vertex:Gp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:jp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Zp,lights_pars_begin:Kp,lights_toon_fragment:Qp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:om,lights_fragment_end:am,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:um,map_fragment:dm,map_pars_fragment:fm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:_m,morphinstance_vertex:vm,morphcolor_vertex:xm,morphnormal_vertex:ym,morphtarget_pars_vertex:Mm,morphtarget_vertex:Sm,normal_fragment_begin:bm,normal_fragment_maps:wm,normal_pars_fragment:Em,normal_pars_vertex:Tm,normal_vertex:Am,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Dm,opaque_fragment:Im,packing:Nm,premultiplied_alpha_fragment:Fm,project_vertex:Um,dithering_fragment:Om,dithering_pars_fragment:Bm,roughnessmap_fragment:zm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:qm,skinning_vertex:Ym,skinnormal_vertex:jm,specularmap_fragment:$m,specularmap_pars_fragment:Zm,tonemapping_fragment:Km,tonemapping_pars_fragment:Jm,transmission_fragment:Qm,transmission_pars_fragment:t0,uv_pars_fragment:e0,uv_pars_vertex:n0,uv_vertex:i0,worldpos_vertex:s0,background_vert:r0,background_frag:o0,backgroundCube_vert:a0,backgroundCube_frag:l0,cube_vert:c0,cube_frag:h0,depth_vert:u0,depth_frag:d0,distance_vert:f0,distance_frag:p0,equirect_vert:m0,equirect_frag:g0,linedashed_vert:_0,linedashed_frag:v0,meshbasic_vert:x0,meshbasic_frag:y0,meshlambert_vert:M0,meshlambert_frag:S0,meshmatcap_vert:b0,meshmatcap_frag:w0,meshnormal_vert:E0,meshnormal_frag:T0,meshphong_vert:A0,meshphong_frag:R0,meshphysical_vert:C0,meshphysical_frag:P0,meshtoon_vert:L0,meshtoon_frag:D0,points_vert:I0,points_frag:N0,shadow_vert:F0,shadow_frag:U0,sprite_vert:O0,sprite_frag:B0},ut={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Un={basic:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ye([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ye([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ye([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ye([ut.points,ut.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ye([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ye([ut.common,ut.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ye([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ye([ut.sprite,ut.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:Ye([ut.common,ut.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:Ye([ut.lights,ut.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Un.physical={uniforms:Ye([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Ur={r:0,b:0,g:0},Ci=new on,z0=new pe;function k0(r,t,e,n,i,s,o){const a=new Nt(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function m(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function _(y){let S=!1;const E=m(y);E===null?p(a,l):E&&E.isColor&&(p(E,1),S=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,S){const E=m(S);E&&(E.isCubeTexture||E.mapping===vo)?(h===void 0&&(h=new ae(new xn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ms(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ci.copy(S.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(Ci)),h.material.toneMapped=qt.getTransfer(E.colorSpace)!==ie,(d!==E||u!==E.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=E,u=E.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ae(new cr(2,2),new yn({name:"BackgroundMaterial",uniforms:Ms(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qt.getTransfer(E.colorSpace)!==ie,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||u!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=E,u=E.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(Ur,Hu(r)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,S,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:g,dispose:v}}function H0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(w,L,O,P,B){let U=!1;const N=d(P,O,L);s!==N&&(s=N,c(s.object)),U=f(w,P,O,B),U&&m(w,P,O,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,S(w,L,O,P),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(w){return r.bindVertexArray(w)}function h(w){return r.deleteVertexArray(w)}function d(w,L,O){const P=O.wireframe===!0;let B=n[w.id];B===void 0&&(B={},n[w.id]=B);let U=B[L.id];U===void 0&&(U={},B[L.id]=U);let N=U[P];return N===void 0&&(N=u(l()),U[P]=N),N}function u(w){const L=[],O=[],P=[];for(let B=0;B<e;B++)L[B]=0,O[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:P,object:w,attributes:{},index:null}}function f(w,L,O,P){const B=s.attributes,U=L.attributes;let N=0;const V=O.getAttributes();for(const X in V)if(V[X].location>=0){const nt=B[X];let st=U[X];if(st===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(st=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(st=w.instanceColor)),nt===void 0||nt.attribute!==st||st&&nt.data!==st.data)return!0;N++}return s.attributesNum!==N||s.index!==P}function m(w,L,O,P){const B={},U=L.attributes;let N=0;const V=O.getAttributes();for(const X in V)if(V[X].location>=0){let nt=U[X];nt===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(nt=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(nt=w.instanceColor));const st={};st.attribute=nt,nt&&nt.data&&(st.data=nt.data),B[X]=st,N++}s.attributes=B,s.attributesNum=N,s.index=P}function _(){const w=s.newAttributes;for(let L=0,O=w.length;L<O;L++)w[L]=0}function g(w){p(w,0)}function p(w,L){const O=s.newAttributes,P=s.enabledAttributes,B=s.attributeDivisors;O[w]=1,P[w]===0&&(r.enableVertexAttribArray(w),P[w]=1),B[w]!==L&&(r.vertexAttribDivisor(w,L),B[w]=L)}function v(){const w=s.newAttributes,L=s.enabledAttributes;for(let O=0,P=L.length;O<P;O++)L[O]!==w[O]&&(r.disableVertexAttribArray(O),L[O]=0)}function y(w,L,O,P,B,U,N){N===!0?r.vertexAttribIPointer(w,L,O,B,U):r.vertexAttribPointer(w,L,O,P,B,U)}function S(w,L,O,P){_();const B=P.attributes,U=O.getAttributes(),N=L.defaultAttributeValues;for(const V in U){const X=U[V];if(X.location>=0){let K=B[V];if(K===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(K=w.instanceColor)),K!==void 0){const nt=K.normalized,st=K.itemSize,rt=t.get(K);if(rt===void 0)continue;const It=rt.buffer,se=rt.type,Qt=rt.bytesPerElement,$=se===r.INT||se===r.UNSIGNED_INT||K.gpuType===Rl;if(K.isInterleavedBufferAttribute){const Q=K.data,gt=Q.stride,Ut=K.offset;if(Q.isInstancedInterleavedBuffer){for(let Mt=0;Mt<X.locationSize;Mt++)p(X.location+Mt,Q.meshPerAttribute);w.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Mt=0;Mt<X.locationSize;Mt++)g(X.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,It);for(let Mt=0;Mt<X.locationSize;Mt++)y(X.location+Mt,st/X.locationSize,se,nt,gt*Qt,(Ut+st/X.locationSize*Mt)*Qt,$)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q,K.meshPerAttribute);w.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<X.locationSize;Q++)g(X.location+Q);r.bindBuffer(r.ARRAY_BUFFER,It);for(let Q=0;Q<X.locationSize;Q++)y(X.location+Q,st/X.locationSize,se,nt,st*Qt,st/X.locationSize*Q*Qt,$)}}else if(N!==void 0){const nt=N[V];if(nt!==void 0)switch(nt.length){case 2:r.vertexAttrib2fv(X.location,nt);break;case 3:r.vertexAttrib3fv(X.location,nt);break;case 4:r.vertexAttrib4fv(X.location,nt);break;default:r.vertexAttrib1fv(X.location,nt)}}}}v()}function E(){I();for(const w in n){const L=n[w];for(const O in L){const P=L[O];for(const B in P)h(P[B].object),delete P[B];delete L[O]}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const O in L){const P=L[O];for(const B in P)h(P[B].object),delete P[B];delete L[O]}delete n[w.id]}function R(w){for(const L in n){const O=n[L];if(O[w.id]===void 0)continue;const P=O[w.id];for(const B in P)h(P[B].object),delete P[B];delete O[w.id]}}function I(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function V0(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(r.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_]*u[_];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==dn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==nn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bn&&!I)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,maxSamples:E,samples:T}}function W0(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new mi,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=r.get(d);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const v=s?0:n,y=v*4;let S=p.clippingState||null;l.value=S,S=h(m,u,y,f);for(let E=0;E!==y;++E)S[E]=e[E];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,S=f;y!==_;++y,S+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function X0(r){let t=new WeakMap;function e(o,a){return a===za?o.mapping=Hi:a===ka&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===za||a===ka)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kl(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const xi=4,Hc=[.125,.215,.35,.446,.526,.582],Oi=20,q0=256,Ls=new ql,Vc=new Nt;let ea=null,na=0,ia=0,sa=!1;const Y0=new D;class yl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=Y0}=s;ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,na,ia),this._renderer.xr.enabled=sa,t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Wn,format:dn,colorSpace:ys,depthBuffer:!1},i=Gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=j0(s)),this._blurMaterial=Z0(s,t,e),this._ggxMaterial=$0(s,t,e)}return i}_compileMaterial(t){const e=new ae(new we,t);this._renderer.compile(e,Ls)}_sceneToCubeUV(t,e,n,i,s){const l=new vn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Vc),d.toneMapping=kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new xn,new lr({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,p=!0):(g.color.copy(Vc),p=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const E=this._cubeSize;is(i,S*E,y>2?E:0,E,E),d.setRenderTarget(i),p&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Hi||t.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ls)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-xi?n-m+xi:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,is(s,g,p,3*_,2*_),i.setRenderTarget(s),i.render(a,Ls),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,is(t,g,p,3*_,2*_),i.setRenderTarget(t),i.render(a,Ls)}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&$t("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),_=s/m,g=isFinite(s)?1+Math.floor(h*_):Oi;g>Oi&&Dt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Oi}`);const p=[];let v=0;for(let R=0;R<Oi;++R){const I=R/_,M=Math.exp(-I*I/2);p.push(M),R===0?v+=M:R<g&&(v+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-n;const S=this._sizeLods[i],E=3*S*(i>y-xi?i-y+xi:0),T=4*(this._cubeSize-S);is(e,E,T,3*S,2*S),l.setRenderTarget(e),l.render(d,Ls)}}function j0(r){const t=[],e=[],n=[];let i=r;const s=r-xi+1+Hc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-xi?l=Hc[o-r+xi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),y=new Float32Array(g*m*f),S=new Float32Array(p*m*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,I=T>2?0:-1,M=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(M,_*m*T),y.set(u,g*m*T);const w=[T,T,T,T,T,T];S.set(w,p*m*T)}const E=new we;E.setAttribute("position",new rn(v,_)),E.setAttribute("uv",new rn(y,g)),E.setAttribute("faceIndex",new rn(S,p)),n.push(new ae(E,null)),i>xi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Gc(r,t,e){const n=new Hn(r,t,e);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function $0(r,t,e){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Z0(r,t,e){const n=new Float32Array(Oi),i=new D(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Wc(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Xc(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function K0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===za||l===ka,h=l===Hi||l===vs;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new yl(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new yl(r)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function J0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&er("WebGLRenderer: "+n+" extension not supported."),i}}}function Q0(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,m=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,S=v.length;y<S;y+=3){const E=v[y+0],T=v[y+1],R=v[y+2];u.push(E,T,T,R,R,E)}}else if(m!==void 0){const v=m.array;_=m.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const E=y+0,T=y+1,R=y+2;u.push(E,T,T,R,R,E)}}else return;const g=new(Fu(u)?ku:zu)(u,1);g.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,g)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function tg(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,u*o,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(u,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function eg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ng(r,t,e){const n=new WeakMap,i=new _e;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let w=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var f=w;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let E=a.attributes.position.count*S,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*T*4*d),I=new Uu(R,E,T,d);I.type=Bn,I.needsUpdate=!0;const M=S*4;for(let L=0;L<d;L++){const O=p[L],P=v[L],B=y[L],U=E*T*4*L;for(let N=0;N<O.count;N++){const V=N*M;m===!0&&(i.fromBufferAttribute(O,N),R[U+V+0]=i.x,R[U+V+1]=i.y,R[U+V+2]=i.z,R[U+V+3]=0),_===!0&&(i.fromBufferAttribute(P,N),R[U+V+4]=i.x,R[U+V+5]=i.y,R[U+V+6]=i.z,R[U+V+7]=0),g===!0&&(i.fromBufferAttribute(B,N),R[U+V+8]=i.x,R[U+V+9]=i.y,R[U+V+10]=i.z,R[U+V+11]=B.itemSize===4?i.w:1)}}u={count:d,texture:I,size:new Tt(E,T)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function ig(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const sg={[yu]:"LINEAR_TONE_MAPPING",[Mu]:"REINHARD_TONE_MAPPING",[Su]:"CINEON_TONE_MAPPING",[Al]:"ACES_FILMIC_TONE_MAPPING",[wu]:"AGX_TONE_MAPPING",[Eu]:"NEUTRAL_TONE_MAPPING",[bu]:"CUSTOM_TONE_MAPPING"};function rg(r,t,e,n,i){const s=new Hn(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),o=new Hn(t,e,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),a=new we;a.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const l=new jf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ae(a,l),h=new ql(-1,1,1,-1,0,1);let d=null,u=null,f=!1,m,_=null,g=[],p=!1;this.setSize=function(v,y){s.setSize(v,y),o.setSize(v,y);for(let S=0;S<g.length;S++){const E=g[S];E.setSize&&E.setSize(v,y)}},this.setEffects=function(v){g=v,p=g.length>0&&g[0].isRenderPass===!0;const y=s.width,S=s.height;for(let E=0;E<g.length;E++){const T=g[E];T.setSize&&T.setSize(y,S)}},this.begin=function(v,y){if(f||v.toneMapping===kn&&g.length===0)return!1;if(_=y,y!==null){const S=y.width,E=y.height;(s.width!==S||s.height!==E)&&this.setSize(S,E)}return p===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=kn,!0},this.hasRenderPass=function(){return p},this.end=function(v,y){v.toneMapping=m,f=!0;let S=s,E=o;for(let T=0;T<g.length;T++){const R=g[T];if(R.enabled!==!1&&(R.render(v,E,S,y),R.needsSwap!==!1)){const I=S;S=E,E=I}}if(d!==v.outputColorSpace||u!==v.toneMapping){d=v.outputColorSpace,u=v.toneMapping,l.defines={},qt.getTransfer(d)===ie&&(l.defines.SRGB_TRANSFER="");const T=sg[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(_),v.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Zu=new Ze,Ml=new ir(1,1),Ku=new Uu,Ju=new Af,Qu=new Wu,qc=[],Yc=[],jc=new Float32Array(16),$c=new Float32Array(9),Zc=new Float32Array(4);function ws(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=qc[i];if(s===void 0&&(s=new Float32Array(i),qc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ie(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ne(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function So(r,t){let e=Yc[t];e===void 0&&(e=new Int32Array(t),Yc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function og(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function ag(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2fv(this.addr,t),Ne(e,t)}}function lg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;r.uniform3fv(this.addr,t),Ne(e,t)}}function cg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4fv(this.addr,t),Ne(e,t)}}function hg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,n))return;Zc.set(n),r.uniformMatrix2fv(this.addr,!1,Zc),Ne(e,n)}}function ug(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,n))return;$c.set(n),r.uniformMatrix3fv(this.addr,!1,$c),Ne(e,n)}}function dg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,n))return;jc.set(n),r.uniformMatrix4fv(this.addr,!1,jc),Ne(e,n)}}function fg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function pg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2iv(this.addr,t),Ne(e,t)}}function mg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3iv(this.addr,t),Ne(e,t)}}function gg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4iv(this.addr,t),Ne(e,t)}}function _g(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function vg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2uiv(this.addr,t),Ne(e,t)}}function xg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3uiv(this.addr,t),Ne(e,t)}}function yg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4uiv(this.addr,t),Ne(e,t)}}function Mg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ml.compareFunction=e.isReversedDepthBuffer()?Fl:Nl,s=Ml):s=Zu,e.setTexture2D(t||s,i)}function Sg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ju,i)}function bg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Qu,i)}function wg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ku,i)}function Eg(r){switch(r){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return vg;case 36295:return xg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return wg}}function Tg(r,t){r.uniform1fv(this.addr,t)}function Ag(r,t){const e=ws(t,this.size,2);r.uniform2fv(this.addr,e)}function Rg(r,t){const e=ws(t,this.size,3);r.uniform3fv(this.addr,e)}function Cg(r,t){const e=ws(t,this.size,4);r.uniform4fv(this.addr,e)}function Pg(r,t){const e=ws(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Lg(r,t){const e=ws(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Dg(r,t){const e=ws(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ig(r,t){r.uniform1iv(this.addr,t)}function Ng(r,t){r.uniform2iv(this.addr,t)}function Fg(r,t){r.uniform3iv(this.addr,t)}function Ug(r,t){r.uniform4iv(this.addr,t)}function Og(r,t){r.uniform1uiv(this.addr,t)}function Bg(r,t){r.uniform2uiv(this.addr,t)}function zg(r,t){r.uniform3uiv(this.addr,t)}function kg(r,t){r.uniform4uiv(this.addr,t)}function Hg(r,t,e){const n=this.cache,i=t.length,s=So(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Ml:o=Zu;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function Vg(r,t,e){const n=this.cache,i=t.length,s=So(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ju,s[o])}function Gg(r,t,e){const n=this.cache,i=t.length,s=So(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Qu,s[o])}function Wg(r,t,e){const n=this.cache,i=t.length,s=So(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ku,s[o])}function Xg(r){switch(r){case 5126:return Tg;case 35664:return Ag;case 35665:return Rg;case 35666:return Cg;case 35674:return Pg;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ig;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return Ug;case 5125:return Og;case 36294:return Bg;case 36295:return zg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Wg}}class qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}}class Yg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xg(e.type)}}class jg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function Kc(r,t){r.seq.push(t),r.map[t.id]=t}function $g(r,t,e){const n=r.name,i=n.length;for(ra.lastIndex=0;;){const s=ra.exec(n),o=ra.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Kc(e,c===void 0?new qg(a,r,t):new Yg(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new jg(a),Kc(e,d)),e=d}}}class lo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);$g(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Jc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Zg=37297;let Kg=0;function Jg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Qc=new Ot;function Qg(r){qt._getMatrix(Qc,qt.workingColorSpace,r);const t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(r)){case uo:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function th(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Jg(r.getShaderSource(t),a)}else return s}function t_(r,t){const e=Qg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const e_={[yu]:"Linear",[Mu]:"Reinhard",[Su]:"Cineon",[Al]:"ACESFilmic",[wu]:"AgX",[Eu]:"Neutral",[bu]:"Custom"};function n_(r,t){const e=e_[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Or=new D;function i_(){qt.getLuminanceCoefficients(Or);const r=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function r_(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o_(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Gs(r){return r!==""}function eh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(r){return r.replace(a_,c_)}const l_=new Map;function c_(r,t){let e=Bt[t];if(e===void 0){const n=l_.get(t);if(n!==void 0)e=Bt[n],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sl(e)}const h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(r){return r.replace(h_,u_)}function u_(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function sh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const d_={[io]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function f_(r){return d_[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const p_={[Hi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE_UV"};function m_(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":p_[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const g_={[vs]:"ENVMAP_MODE_REFRACTION"};function __(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":g_[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const v_={[xu]:"ENVMAP_BLENDING_MULTIPLY",[qd]:"ENVMAP_BLENDING_MIX",[Yd]:"ENVMAP_BLENDING_ADD"};function x_(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":v_[r.combine]||"ENVMAP_BLENDING_NONE"}function y_(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function M_(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=f_(e),c=m_(e),h=__(e),d=x_(e),u=y_(e),f=s_(e),m=r_(s),_=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(g=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==kn?n_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,t_("linearToOutputTexel",e.outputColorSpace),i_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=Sl(o),o=eh(o,e),o=nh(o,e),a=Sl(a),a=eh(a,e),a=nh(a,e),o=ih(o),a=ih(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+o,S=v+p+a,E=Jc(i,i.VERTEX_SHADER,y),T=Jc(i,i.FRAGMENT_SHADER,S);i.attachShader(_,E),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(L){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",P=i.getShaderInfoLog(E)||"",B=i.getShaderInfoLog(T)||"",U=O.trim(),N=P.trim(),V=B.trim();let X=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,T);else{const nt=th(i,E,"vertex"),st=th(i,T,"fragment");$t("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+nt+`
`+st)}else U!==""?Dt("WebGLProgram: Program Info Log:",U):(N===""||V==="")&&(K=!1);K&&(L.diagnostics={runnable:X,programLog:U,vertexShader:{log:N,prefix:g},fragmentShader:{log:V,prefix:p}})}i.deleteShader(E),i.deleteShader(T),I=new lo(i,_),M=o_(i,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(_,Zg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let S_=0;class b_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new w_(t),e.set(t,n)),n}}class w_{constructor(t){this.id=S_++,this.code=t,this.usedTimes=0}}function E_(r,t,e,n,i,s,o){const a=new Ou,l=new b_,c=new Set,h=[],d=new Map,u=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,w,L,O,P){const B=O.fog,U=P.geometry,N=M.isMeshStandardMaterial?O.environment:null,V=(M.isMeshStandardMaterial?e:t).get(M.envMap||N),X=V&&V.mapping===vo?V.image.height:null,K=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&Dt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const nt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,st=nt!==void 0?nt.length:0;let rt=0;U.morphAttributes.position!==void 0&&(rt=1),U.morphAttributes.normal!==void 0&&(rt=2),U.morphAttributes.color!==void 0&&(rt=3);let It,se,Qt,$;if(K){const ee=Un[K];It=ee.vertexShader,se=ee.fragmentShader}else It=M.vertexShader,se=M.fragmentShader,l.update(M),Qt=l.getVertexShaderID(M),$=l.getFragmentShaderID(M);const Q=r.getRenderTarget(),gt=r.state.buffers.depth.getReversed(),Ut=P.isInstancedMesh===!0,Mt=P.isBatchedMesh===!0,Yt=!!M.map,Fe=!!M.matcap,Xt=!!V,te=!!M.aoMap,le=!!M.lightMap,kt=!!M.bumpMap,Ee=!!M.normalMap,F=!!M.displacementMap,Te=!!M.emissiveMap,Jt=!!M.metalnessMap,he=!!M.roughnessMap,bt=M.anisotropy>0,C=M.clearcoat>0,x=M.dispersion>0,k=M.iridescence>0,j=M.sheen>0,J=M.transmission>0,Y=bt&&!!M.anisotropyMap,Et=C&&!!M.clearcoatMap,at=C&&!!M.clearcoatNormalMap,St=C&&!!M.clearcoatRoughnessMap,Lt=k&&!!M.iridescenceMap,et=k&&!!M.iridescenceThicknessMap,ct=j&&!!M.sheenColorMap,xt=j&&!!M.sheenRoughnessMap,wt=!!M.specularMap,lt=!!M.specularColorMap,Ht=!!M.specularIntensityMap,z=J&&!!M.transmissionMap,ft=J&&!!M.thicknessMap,it=!!M.gradientMap,pt=!!M.alphaMap,tt=M.alphaTest>0,Z=!!M.alphaHash,ot=!!M.extensions;let Ft=kn;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ft=r.toneMapping);const ue={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:It,fragmentShader:se,defines:M.defines,customVertexShaderID:Qt,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Mt,batchingColor:Mt&&P._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&P.instanceColor!==null,instancingMorph:Ut&&P.morphTexture!==null,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ys,alphaToCoverage:!!M.alphaToCoverage,map:Yt,matcap:Fe,envMap:Xt,envMapMode:Xt&&V.mapping,envMapCubeUVHeight:X,aoMap:te,lightMap:le,bumpMap:kt,normalMap:Ee,displacementMap:F,emissiveMap:Te,normalMapObjectSpace:Ee&&M.normalMapType===Zd,normalMapTangentSpace:Ee&&M.normalMapType===Nu,metalnessMap:Jt,roughnessMap:he,anisotropy:bt,anisotropyMap:Y,clearcoat:C,clearcoatMap:Et,clearcoatNormalMap:at,clearcoatRoughnessMap:St,dispersion:x,iridescence:k,iridescenceMap:Lt,iridescenceThicknessMap:et,sheen:j,sheenColorMap:ct,sheenRoughnessMap:xt,specularMap:wt,specularColorMap:lt,specularIntensityMap:Ht,transmission:J,transmissionMap:z,thicknessMap:ft,gradientMap:it,opaque:M.transparent===!1&&M.blending===ms&&M.alphaToCoverage===!1,alphaMap:pt,alphaTest:tt,alphaHash:Z,combine:M.combine,mapUv:Yt&&_(M.map.channel),aoMapUv:te&&_(M.aoMap.channel),lightMapUv:le&&_(M.lightMap.channel),bumpMapUv:kt&&_(M.bumpMap.channel),normalMapUv:Ee&&_(M.normalMap.channel),displacementMapUv:F&&_(M.displacementMap.channel),emissiveMapUv:Te&&_(M.emissiveMap.channel),metalnessMapUv:Jt&&_(M.metalnessMap.channel),roughnessMapUv:he&&_(M.roughnessMap.channel),anisotropyMapUv:Y&&_(M.anisotropyMap.channel),clearcoatMapUv:Et&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(M.sheenRoughnessMap.channel),specularMapUv:wt&&_(M.specularMap.channel),specularColorMapUv:lt&&_(M.specularColorMap.channel),specularIntensityMapUv:Ht&&_(M.specularIntensityMap.channel),transmissionMapUv:z&&_(M.transmissionMap.channel),thicknessMapUv:ft&&_(M.thicknessMap.channel),alphaMapUv:pt&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ee||bt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Yt||pt),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:gt,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:rt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Yt&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===ie,decodeVideoTextureEmissive:Te&&M.emissiveMap.isVideoTexture===!0&&qt.getTransfer(M.emissiveMap.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===un,flipSided:M.side===$e,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ot&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&M.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ue.vertexUv1s=c.has(1),ue.vertexUv2s=c.has(2),ue.vertexUv3s=c.has(3),c.clear(),ue}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)w.push(L),w.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(v(w,M),y(w,M),w.push(r.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function y(M,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const w=m[M.type];let L;if(w){const O=Un[w];L=zl.clone(O.uniforms)}else L=M.uniforms;return L}function E(M,w){let L=d.get(w);return L!==void 0?++L.usedTimes:(L=new M_(r,w,M,s),h.push(L),d.set(w,L)),L}function T(M){if(--M.usedTimes===0){const w=h.indexOf(M);h[w]=h[h.length-1],h.pop(),d.delete(M.cacheKey),M.destroy()}}function R(M){l.remove(M)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:E,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:I}}function T_(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function A_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function rh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function oh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,m,_,g){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=_,p.group=g),t++,p}function a(d,u,f,m,_,g){const p=o(d,u,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,m,_,g){const p=o(d,u,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||A_),n.length>1&&n.sort(u||rh),i.length>1&&i.sort(u||rh)}function h(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function R_(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new oh,r.set(n,[o])):i>=s.length?(o=new oh,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function C_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Nt};break;case"SpotLight":e={position:new D,direction:new D,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function P_(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let L_=0;function D_(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function I_(r){const t=new C_,e=P_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new pe,o=new pe;function a(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,y=0,S=0,E=0,T=0,R=0;c.sort(D_);for(let M=0,w=c.length;M<w;M++){const L=c[M],O=L.color,P=L.intensity,B=L.distance;let U=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===xs?U=L.shadow.map.texture:U=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*P,d+=O.g*P,u+=O.b*P;else if(L.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(L.sh.coefficients[N],P);R++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,X=e.get(L);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=N,f++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(O).multiplyScalar(P),N.distance=B,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,n.spot[_]=N;const V=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,V.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=V.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=U,S++}_++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(O).multiplyScalar(P),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=N,g++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const V=L.shadow,X=e.get(L);X.shadowIntensity=V.intensity,X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,X.shadowCameraNear=V.camera.near,X.shadowCameraFar=V.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=L.shadow.matrix,y++}n.point[m]=N,m++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(P),N.groundColor.copy(L.groundColor).multiplyScalar(P),n.hemi[p]=N,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==S||I.numSpotMaps!==E||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=S,I.numSpotMaps=E,I.numLightProbes=R,n.version=L_++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),d++}else if(y.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function ah(r){const t=new I_(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function N_(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new ah(r),t.set(i,[a])):s>=o.length?(a=new ah(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const F_=`void main() {
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
}`,O_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],B_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],lh=new pe,Ds=new D,oa=new D;function z_(r,t,e){let n=new Vl;const i=new Tt,s=new Tt,o=new _e,a=new $f,l=new Zf,c={},h=e.maxTextureSize,d={[Si]:$e,[$e]:Si,[un]:un},u=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:F_,fragmentShader:U_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new we;m.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ae(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=io;let p=this.type;this.render=function(T,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;T.type===Ad&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=io);const M=r.getRenderTarget(),w=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),O=r.state;O.setBlending(si),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const P=p!==this.type;P&&R.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(U=>U.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,U=T.length;B<U;B++){const N=T[B],V=N.shadow;if(V===void 0){Dt("WebGLShadowMap:",N,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const X=V.getFrameExtents();if(i.multiply(X),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/X.x),i.x=s.x*X.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/X.y),i.y=s.y*X.y,V.mapSize.y=s.y)),V.map===null||P===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Vs){if(N.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Hn(i.x,i.y,{format:xs,type:Wn,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),V.map.texture.name=N.name+".shadowMap",V.map.depthTexture=new ir(i.x,i.y,Bn),V.map.depthTexture.name=N.name+".shadowMapDepth",V.map.depthTexture.format=oi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ze,V.map.depthTexture.magFilter=ze}else{N.isPointLight?(V.map=new kl(i.x),V.map.depthTexture=new Yf(i.x,Gn)):(V.map=new Hn(i.x,i.y),V.map.depthTexture=new ir(i.x,i.y,Gn)),V.map.depthTexture.name=N.name+".shadowMap",V.map.depthTexture.format=oi;const nt=r.state.buffers.depth.getReversed();this.type===io?(V.map.depthTexture.compareFunction=nt?Fl:Nl,V.map.depthTexture.minFilter=Oe,V.map.depthTexture.magFilter=Oe):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ze,V.map.depthTexture.magFilter=ze)}V.camera.updateProjectionMatrix()}const K=V.map.isWebGLCubeRenderTarget?6:1;for(let nt=0;nt<K;nt++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,nt),r.clear();else{nt===0&&(r.setRenderTarget(V.map),r.clear());const st=V.getViewport(nt);o.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),O.viewport(o)}if(N.isPointLight){const st=V.camera,rt=V.matrix,It=N.distance||st.far;It!==st.far&&(st.far=It,st.updateProjectionMatrix()),Ds.setFromMatrixPosition(N.matrixWorld),st.position.copy(Ds),oa.copy(st.position),oa.add(O_[nt]),st.up.copy(B_[nt]),st.lookAt(oa),st.updateMatrixWorld(),rt.makeTranslation(-Ds.x,-Ds.y,-Ds.z),lh.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),V._frustum.setFromProjectionMatrix(lh,st.coordinateSystem,st.reversedDepth)}else V.updateMatrices(N);n=V.getFrustum(),S(R,I,V.camera,N,this.type)}V.isPointLightShadow!==!0&&this.type===Vs&&v(V,I),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(M,w,L)};function v(T,R){const I=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hn(i.x,i.y,{format:xs,type:Wn})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(R,null,I,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(R,null,I,f,_,null)}function y(T,R,I,M){let w=null;const L=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)w=L;else if(w=I.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=w.uuid,P=R.uuid;let B=c[O];B===void 0&&(B={},c[O]=B);let U=B[P];U===void 0&&(U=w.clone(),B[P]=U,R.addEventListener("dispose",E)),w=U}if(w.visible=R.visible,w.wireframe=R.wireframe,M===Vs?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:d[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=r.properties.get(w);O.light=I}return w}function S(T,R,I,M,w){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Vs)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const P=t.update(T),B=T.material;if(Array.isArray(B)){const U=P.groups;for(let N=0,V=U.length;N<V;N++){const X=U[N],K=B[X.materialIndex];if(K&&K.visible){const nt=y(T,K,M,w);T.onBeforeShadow(r,T,R,I,P,nt,X),r.renderBufferDirect(I,null,P,nt,T,X),T.onAfterShadow(r,T,R,I,P,nt,X)}}}else if(B.visible){const U=y(T,B,M,w);T.onBeforeShadow(r,T,R,I,P,U,null),r.renderBufferDirect(I,null,P,U,T,null),T.onAfterShadow(r,T,R,I,P,U,null)}}const O=T.children;for(let P=0,B=O.length;P<B;P++)S(O[P],R,I,M,w)}function E(T){T.target.removeEventListener("dispose",E);for(const I in c){const M=c[I],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const k_={[Da]:Ia,[Na]:Oa,[Fa]:Ba,[_s]:Ua,[Ia]:Da,[Oa]:Na,[Ba]:Fa,[Ua]:_s};function H_(r,t){function e(){let z=!1;const ft=new _e;let it=null;const pt=new _e(0,0,0,0);return{setMask:function(tt){it!==tt&&!z&&(r.colorMask(tt,tt,tt,tt),it=tt)},setLocked:function(tt){z=tt},setClear:function(tt,Z,ot,Ft,ue){ue===!0&&(tt*=Ft,Z*=Ft,ot*=Ft),ft.set(tt,Z,ot,Ft),pt.equals(ft)===!1&&(r.clearColor(tt,Z,ot,Ft),pt.copy(ft))},reset:function(){z=!1,it=null,pt.set(-1,0,0,0)}}}function n(){let z=!1,ft=!1,it=null,pt=null,tt=null;return{setReversed:function(Z){if(ft!==Z){const ot=t.get("EXT_clip_control");Z?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),ft=Z;const Ft=tt;tt=null,this.setClear(Ft)}},getReversed:function(){return ft},setTest:function(Z){Z?Q(r.DEPTH_TEST):gt(r.DEPTH_TEST)},setMask:function(Z){it!==Z&&!z&&(r.depthMask(Z),it=Z)},setFunc:function(Z){if(ft&&(Z=k_[Z]),pt!==Z){switch(Z){case Da:r.depthFunc(r.NEVER);break;case Ia:r.depthFunc(r.ALWAYS);break;case Na:r.depthFunc(r.LESS);break;case _s:r.depthFunc(r.LEQUAL);break;case Fa:r.depthFunc(r.EQUAL);break;case Ua:r.depthFunc(r.GEQUAL);break;case Oa:r.depthFunc(r.GREATER);break;case Ba:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=Z}},setLocked:function(Z){z=Z},setClear:function(Z){tt!==Z&&(ft&&(Z=1-Z),r.clearDepth(Z),tt=Z)},reset:function(){z=!1,it=null,pt=null,tt=null,ft=!1}}}function i(){let z=!1,ft=null,it=null,pt=null,tt=null,Z=null,ot=null,Ft=null,ue=null;return{setTest:function(ee){z||(ee?Q(r.STENCIL_TEST):gt(r.STENCIL_TEST))},setMask:function(ee){ft!==ee&&!z&&(r.stencilMask(ee),ft=ee)},setFunc:function(ee,Cn,Xn){(it!==ee||pt!==Cn||tt!==Xn)&&(r.stencilFunc(ee,Cn,Xn),it=ee,pt=Cn,tt=Xn)},setOp:function(ee,Cn,Xn){(Z!==ee||ot!==Cn||Ft!==Xn)&&(r.stencilOp(ee,Cn,Xn),Z=ee,ot=Cn,Ft=Xn)},setLocked:function(ee){z=ee},setClear:function(ee){ue!==ee&&(r.clearStencil(ee),ue=ee)},reset:function(){z=!1,ft=null,it=null,pt=null,tt=null,Z=null,ot=null,Ft=null,ue=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,S=null,E=null,T=null,R=new Nt(0,0,0),I=0,M=!1,w=null,L=null,O=null,P=null,B=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,V=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=V>=1):X.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=V>=2);let K=null,nt={};const st=r.getParameter(r.SCISSOR_BOX),rt=r.getParameter(r.VIEWPORT),It=new _e().fromArray(st),se=new _e().fromArray(rt);function Qt(z,ft,it,pt){const tt=new Uint8Array(4),Z=r.createTexture();r.bindTexture(z,Z),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<it;ot++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(ft,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,tt):r.texImage2D(ft+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,tt);return Z}const $={};$[r.TEXTURE_2D]=Qt(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(r.DEPTH_TEST),o.setFunc(_s),kt(!1),Ee(lc),Q(r.CULL_FACE),te(si);function Q(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function gt(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function Ut(z,ft){return d[z]!==ft?(r.bindFramebuffer(z,ft),d[z]=ft,z===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ft),z===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ft),!0):!1}function Mt(z,ft){let it=f,pt=!1;if(z){it=u.get(ft),it===void 0&&(it=[],u.set(ft,it));const tt=z.textures;if(it.length!==tt.length||it[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,ot=tt.length;Z<ot;Z++)it[Z]=r.COLOR_ATTACHMENT0+Z;it.length=tt.length,pt=!0}}else it[0]!==r.BACK&&(it[0]=r.BACK,pt=!0);pt&&r.drawBuffers(it)}function Yt(z){return m!==z?(r.useProgram(z),m=z,!0):!1}const Fe={[Ui]:r.FUNC_ADD,[Cd]:r.FUNC_SUBTRACT,[Pd]:r.FUNC_REVERSE_SUBTRACT};Fe[Ld]=r.MIN,Fe[Dd]=r.MAX;const Xt={[Id]:r.ZERO,[Nd]:r.ONE,[Fd]:r.SRC_COLOR,[Pa]:r.SRC_ALPHA,[Hd]:r.SRC_ALPHA_SATURATE,[zd]:r.DST_COLOR,[Od]:r.DST_ALPHA,[Ud]:r.ONE_MINUS_SRC_COLOR,[La]:r.ONE_MINUS_SRC_ALPHA,[kd]:r.ONE_MINUS_DST_COLOR,[Bd]:r.ONE_MINUS_DST_ALPHA,[Vd]:r.CONSTANT_COLOR,[Gd]:r.ONE_MINUS_CONSTANT_COLOR,[Wd]:r.CONSTANT_ALPHA,[Xd]:r.ONE_MINUS_CONSTANT_ALPHA};function te(z,ft,it,pt,tt,Z,ot,Ft,ue,ee){if(z===si){_===!0&&(gt(r.BLEND),_=!1);return}if(_===!1&&(Q(r.BLEND),_=!0),z!==Rd){if(z!==g||ee!==M){if((p!==Ui||S!==Ui)&&(r.blendEquation(r.FUNC_ADD),p=Ui,S=Ui),ee)switch(z){case ms:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cc:r.blendFunc(r.ONE,r.ONE);break;case hc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case uc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:$t("WebGLState: Invalid blending: ",z);break}else switch(z){case ms:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case hc:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uc:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",z);break}v=null,y=null,E=null,T=null,R.set(0,0,0),I=0,g=z,M=ee}return}tt=tt||ft,Z=Z||it,ot=ot||pt,(ft!==p||tt!==S)&&(r.blendEquationSeparate(Fe[ft],Fe[tt]),p=ft,S=tt),(it!==v||pt!==y||Z!==E||ot!==T)&&(r.blendFuncSeparate(Xt[it],Xt[pt],Xt[Z],Xt[ot]),v=it,y=pt,E=Z,T=ot),(Ft.equals(R)===!1||ue!==I)&&(r.blendColor(Ft.r,Ft.g,Ft.b,ue),R.copy(Ft),I=ue),g=z,M=!1}function le(z,ft){z.side===un?gt(r.CULL_FACE):Q(r.CULL_FACE);let it=z.side===$e;ft&&(it=!it),kt(it),z.blending===ms&&z.transparent===!1?te(si):te(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const pt=z.stencilWrite;a.setTest(pt),pt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Te(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):gt(r.SAMPLE_ALPHA_TO_COVERAGE)}function kt(z){w!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),w=z)}function Ee(z){z!==Ed?(Q(r.CULL_FACE),z!==L&&(z===lc?r.cullFace(r.BACK):z===Td?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):gt(r.CULL_FACE),L=z}function F(z){z!==O&&(N&&r.lineWidth(z),O=z)}function Te(z,ft,it){z?(Q(r.POLYGON_OFFSET_FILL),(P!==ft||B!==it)&&(r.polygonOffset(ft,it),P=ft,B=it)):gt(r.POLYGON_OFFSET_FILL)}function Jt(z){z?Q(r.SCISSOR_TEST):gt(r.SCISSOR_TEST)}function he(z){z===void 0&&(z=r.TEXTURE0+U-1),K!==z&&(r.activeTexture(z),K=z)}function bt(z,ft,it){it===void 0&&(K===null?it=r.TEXTURE0+U-1:it=K);let pt=nt[it];pt===void 0&&(pt={type:void 0,texture:void 0},nt[it]=pt),(pt.type!==z||pt.texture!==ft)&&(K!==it&&(r.activeTexture(it),K=it),r.bindTexture(z,ft||$[z]),pt.type=z,pt.texture=ft)}function C(){const z=nt[K];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(z){$t("WebGLState:",z)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(z){$t("WebGLState:",z)}}function j(){try{r.texSubImage2D(...arguments)}catch(z){$t("WebGLState:",z)}}function J(){try{r.texSubImage3D(...arguments)}catch(z){$t("WebGLState:",z)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(z){$t("WebGLState:",z)}}function Et(){try{r.compressedTexSubImage3D(...arguments)}catch(z){$t("WebGLState:",z)}}function at(){try{r.texStorage2D(...arguments)}catch(z){$t("WebGLState:",z)}}function St(){try{r.texStorage3D(...arguments)}catch(z){$t("WebGLState:",z)}}function Lt(){try{r.texImage2D(...arguments)}catch(z){$t("WebGLState:",z)}}function et(){try{r.texImage3D(...arguments)}catch(z){$t("WebGLState:",z)}}function ct(z){It.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),It.copy(z))}function xt(z){se.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),se.copy(z))}function wt(z,ft){let it=c.get(ft);it===void 0&&(it=new WeakMap,c.set(ft,it));let pt=it.get(z);pt===void 0&&(pt=r.getUniformBlockIndex(ft,z.name),it.set(z,pt))}function lt(z,ft){const pt=c.get(ft).get(z);l.get(ft)!==pt&&(r.uniformBlockBinding(ft,pt,z.__bindingPointIndex),l.set(ft,pt))}function Ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},K=null,nt={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,S=null,E=null,T=null,R=new Nt(0,0,0),I=0,M=!1,w=null,L=null,O=null,P=null,B=null,It.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:gt,bindFramebuffer:Ut,drawBuffers:Mt,useProgram:Yt,setBlending:te,setMaterial:le,setFlipSided:kt,setCullFace:Ee,setLineWidth:F,setPolygonOffset:Te,setScissorTest:Jt,activeTexture:he,bindTexture:bt,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:Lt,texImage3D:et,updateUBOMapping:wt,uniformBlockBinding:lt,texStorage2D:at,texStorage3D:St,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:Et,scissor:ct,viewport:xt,reset:Ht}}function V_(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,x){return f?new OffscreenCanvas(C,x):po("canvas")}function _(C,x,k){let j=1;const J=bt(C);if((J.width>k||J.height>k)&&(j=k/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(j*J.width),Et=Math.floor(j*J.height);d===void 0&&(d=m(Y,Et));const at=x?m(Y,Et):d;return at.width=Y,at.height=Et,at.getContext("2d").drawImage(C,0,0,Y,Et),Dt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Et+")."),at}else return"data"in C&&Dt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,x,k,j,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=x;if(x===r.RED&&(k===r.FLOAT&&(Y=r.R32F),k===r.HALF_FLOAT&&(Y=r.R16F),k===r.UNSIGNED_BYTE&&(Y=r.R8)),x===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.R8UI),k===r.UNSIGNED_SHORT&&(Y=r.R16UI),k===r.UNSIGNED_INT&&(Y=r.R32UI),k===r.BYTE&&(Y=r.R8I),k===r.SHORT&&(Y=r.R16I),k===r.INT&&(Y=r.R32I)),x===r.RG&&(k===r.FLOAT&&(Y=r.RG32F),k===r.HALF_FLOAT&&(Y=r.RG16F),k===r.UNSIGNED_BYTE&&(Y=r.RG8)),x===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RG8UI),k===r.UNSIGNED_SHORT&&(Y=r.RG16UI),k===r.UNSIGNED_INT&&(Y=r.RG32UI),k===r.BYTE&&(Y=r.RG8I),k===r.SHORT&&(Y=r.RG16I),k===r.INT&&(Y=r.RG32I)),x===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),k===r.UNSIGNED_INT&&(Y=r.RGB32UI),k===r.BYTE&&(Y=r.RGB8I),k===r.SHORT&&(Y=r.RGB16I),k===r.INT&&(Y=r.RGB32I)),x===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),k===r.UNSIGNED_INT&&(Y=r.RGBA32UI),k===r.BYTE&&(Y=r.RGBA8I),k===r.SHORT&&(Y=r.RGBA16I),k===r.INT&&(Y=r.RGBA32I)),x===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),x===r.RGBA){const Et=J?uo:qt.getTransfer(j);k===r.FLOAT&&(Y=r.RGBA32F),k===r.HALF_FLOAT&&(Y=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Y=Et===ie?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function S(C,x){let k;return C?x===null||x===Gn||x===tr?k=r.DEPTH24_STENCIL8:x===Bn?k=r.DEPTH32F_STENCIL8:x===Qs&&(k=r.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gn||x===tr?k=r.DEPTH_COMPONENT24:x===Bn?k=r.DEPTH_COMPONENT32F:x===Qs&&(k=r.DEPTH_COMPONENT16),k}function E(C,x){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==ze&&C.minFilter!==Oe?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function T(C){const x=C.target;x.removeEventListener("dispose",T),I(x),x.isVideoTexture&&h.delete(x)}function R(C){const x=C.target;x.removeEventListener("dispose",R),w(x)}function I(C){const x=n.get(C);if(x.__webglInit===void 0)return;const k=C.source,j=u.get(k);if(j){const J=j[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(C),Object.keys(j).length===0&&u.delete(k)}n.remove(C)}function M(C){const x=n.get(C);r.deleteTexture(x.__webglTexture);const k=C.source,j=u.get(k);delete j[x.__cacheKey],o.memory.textures--}function w(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let J=0;J<x.__webglFramebuffer[j].length;J++)r.deleteFramebuffer(x.__webglFramebuffer[j][J]);else r.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)r.deleteFramebuffer(x.__webglFramebuffer[j]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=C.textures;for(let j=0,J=k.length;j<J;j++){const Y=n.get(k[j]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(C)}let L=0;function O(){L=0}function P(){const C=L;return C>=i.maxTextures&&Dt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function B(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function U(C,x){const k=n.get(C);if(C.isVideoTexture&&Jt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const j=C.image;if(j===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,C,x);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+x)}function N(C,x){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){$(k,C,x);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+x)}function V(C,x){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){$(k,C,x);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+x)}function X(C,x){const k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Q(k,C,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+x)}const K={[Js]:r.REPEAT,[ii]:r.CLAMP_TO_EDGE,[Ha]:r.MIRRORED_REPEAT},nt={[ze]:r.NEAREST,[jd]:r.NEAREST_MIPMAP_NEAREST,[mr]:r.NEAREST_MIPMAP_LINEAR,[Oe]:r.LINEAR,[Co]:r.LINEAR_MIPMAP_NEAREST,[On]:r.LINEAR_MIPMAP_LINEAR},st={[Kd]:r.NEVER,[nf]:r.ALWAYS,[Jd]:r.LESS,[Nl]:r.LEQUAL,[Qd]:r.EQUAL,[Fl]:r.GEQUAL,[tf]:r.GREATER,[ef]:r.NOTEQUAL};function rt(C,x){if(x.type===Bn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Oe||x.magFilter===Co||x.magFilter===mr||x.magFilter===On||x.minFilter===Oe||x.minFilter===Co||x.minFilter===mr||x.minFilter===On)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,K[x.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,K[x.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,K[x.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,nt[x.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,nt[x.minFilter]),x.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,st[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ze||x.minFilter!==mr&&x.minFilter!==On||x.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function It(C,x){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",T));const j=x.source;let J=u.get(j);J===void 0&&(J={},u.set(j,J));const Y=B(x);if(Y!==C.__cacheKey){J[Y]===void 0&&(J[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[Y].usedTimes++;const Et=J[C.__cacheKey];Et!==void 0&&(J[C.__cacheKey].usedTimes--,Et.usedTimes===0&&M(x)),C.__cacheKey=Y,C.__webglTexture=J[Y].texture}return k}function se(C,x,k){return Math.floor(Math.floor(C/k)/x)}function Qt(C,x,k,j){const Y=C.updateRanges;if(Y.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,k,j,x.data);else{Y.sort((et,ct)=>et.start-ct.start);let Et=0;for(let et=1;et<Y.length;et++){const ct=Y[Et],xt=Y[et],wt=ct.start+ct.count,lt=se(xt.start,x.width,4),Ht=se(ct.start,x.width,4);xt.start<=wt+1&&lt===Ht&&se(xt.start+xt.count-1,x.width,4)===lt?ct.count=Math.max(ct.count,xt.start+xt.count-ct.start):(++Et,Y[Et]=xt)}Y.length=Et+1;const at=r.getParameter(r.UNPACK_ROW_LENGTH),St=r.getParameter(r.UNPACK_SKIP_PIXELS),Lt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let et=0,ct=Y.length;et<ct;et++){const xt=Y[et],wt=Math.floor(xt.start/4),lt=Math.ceil(xt.count/4),Ht=wt%x.width,z=Math.floor(wt/x.width),ft=lt,it=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ht),r.pixelStorei(r.UNPACK_SKIP_ROWS,z),e.texSubImage2D(r.TEXTURE_2D,0,Ht,z,ft,it,k,j,x.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,at),r.pixelStorei(r.UNPACK_SKIP_PIXELS,St),r.pixelStorei(r.UNPACK_SKIP_ROWS,Lt)}}function $(C,x,k){let j=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=r.TEXTURE_3D);const J=It(C,x),Y=x.source;e.bindTexture(j,C.__webglTexture,r.TEXTURE0+k);const Et=n.get(Y);if(Y.version!==Et.__version||J===!0){e.activeTexture(r.TEXTURE0+k);const at=qt.getPrimaries(qt.workingColorSpace),St=x.colorSpace===vi?null:qt.getPrimaries(x.colorSpace),Lt=x.colorSpace===vi||at===St?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let et=_(x.image,!1,i.maxTextureSize);et=he(x,et);const ct=s.convert(x.format,x.colorSpace),xt=s.convert(x.type);let wt=y(x.internalFormat,ct,xt,x.colorSpace,x.isVideoTexture);rt(j,x);let lt;const Ht=x.mipmaps,z=x.isVideoTexture!==!0,ft=Et.__version===void 0||J===!0,it=Y.dataReady,pt=E(x,et);if(x.isDepthTexture)wt=S(x.format===ki,x.type),ft&&(z?e.texStorage2D(r.TEXTURE_2D,1,wt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,wt,et.width,et.height,0,ct,xt,null));else if(x.isDataTexture)if(Ht.length>0){z&&ft&&e.texStorage2D(r.TEXTURE_2D,pt,wt,Ht[0].width,Ht[0].height);for(let tt=0,Z=Ht.length;tt<Z;tt++)lt=Ht[tt],z?it&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,lt.width,lt.height,ct,xt,lt.data):e.texImage2D(r.TEXTURE_2D,tt,wt,lt.width,lt.height,0,ct,xt,lt.data);x.generateMipmaps=!1}else z?(ft&&e.texStorage2D(r.TEXTURE_2D,pt,wt,et.width,et.height),it&&Qt(x,et,ct,xt)):e.texImage2D(r.TEXTURE_2D,0,wt,et.width,et.height,0,ct,xt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){z&&ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,wt,Ht[0].width,Ht[0].height,et.depth);for(let tt=0,Z=Ht.length;tt<Z;tt++)if(lt=Ht[tt],x.format!==dn)if(ct!==null)if(z){if(it)if(x.layerUpdates.size>0){const ot=kc(lt.width,lt.height,x.format,x.type);for(const Ft of x.layerUpdates){const ue=lt.data.subarray(Ft*ot/lt.data.BYTES_PER_ELEMENT,(Ft+1)*ot/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,Ft,lt.width,lt.height,1,ct,ue)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,et.depth,ct,lt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,wt,lt.width,lt.height,et.depth,0,lt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?it&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,et.depth,ct,xt,lt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,wt,lt.width,lt.height,et.depth,0,ct,xt,lt.data)}else{z&&ft&&e.texStorage2D(r.TEXTURE_2D,pt,wt,Ht[0].width,Ht[0].height);for(let tt=0,Z=Ht.length;tt<Z;tt++)lt=Ht[tt],x.format!==dn?ct!==null?z?it&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,lt.width,lt.height,ct,lt.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,wt,lt.width,lt.height,0,lt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?it&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,lt.width,lt.height,ct,xt,lt.data):e.texImage2D(r.TEXTURE_2D,tt,wt,lt.width,lt.height,0,ct,xt,lt.data)}else if(x.isDataArrayTexture)if(z){if(ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,wt,et.width,et.height,et.depth),it)if(x.layerUpdates.size>0){const tt=kc(et.width,et.height,x.format,x.type);for(const Z of x.layerUpdates){const ot=et.data.subarray(Z*tt/et.data.BYTES_PER_ELEMENT,(Z+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,ct,xt,ot)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ct,xt,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,wt,et.width,et.height,et.depth,0,ct,xt,et.data);else if(x.isData3DTexture)z?(ft&&e.texStorage3D(r.TEXTURE_3D,pt,wt,et.width,et.height,et.depth),it&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ct,xt,et.data)):e.texImage3D(r.TEXTURE_3D,0,wt,et.width,et.height,et.depth,0,ct,xt,et.data);else if(x.isFramebufferTexture){if(ft)if(z)e.texStorage2D(r.TEXTURE_2D,pt,wt,et.width,et.height);else{let tt=et.width,Z=et.height;for(let ot=0;ot<pt;ot++)e.texImage2D(r.TEXTURE_2D,ot,wt,tt,Z,0,ct,xt,null),tt>>=1,Z>>=1}}else if(Ht.length>0){if(z&&ft){const tt=bt(Ht[0]);e.texStorage2D(r.TEXTURE_2D,pt,wt,tt.width,tt.height)}for(let tt=0,Z=Ht.length;tt<Z;tt++)lt=Ht[tt],z?it&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,ct,xt,lt):e.texImage2D(r.TEXTURE_2D,tt,wt,ct,xt,lt);x.generateMipmaps=!1}else if(z){if(ft){const tt=bt(et);e.texStorage2D(r.TEXTURE_2D,pt,wt,tt.width,tt.height)}it&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct,xt,et)}else e.texImage2D(r.TEXTURE_2D,0,wt,ct,xt,et);g(x)&&p(j),Et.__version=Y.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Q(C,x,k){if(x.image.length!==6)return;const j=It(C,x),J=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const Y=n.get(J);if(J.version!==Y.__version||j===!0){e.activeTexture(r.TEXTURE0+k);const Et=qt.getPrimaries(qt.workingColorSpace),at=x.colorSpace===vi?null:qt.getPrimaries(x.colorSpace),St=x.colorSpace===vi||Et===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Lt=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,ct=[];for(let Z=0;Z<6;Z++)!Lt&&!et?ct[Z]=_(x.image[Z],!0,i.maxCubemapSize):ct[Z]=et?x.image[Z].image:x.image[Z],ct[Z]=he(x,ct[Z]);const xt=ct[0],wt=s.convert(x.format,x.colorSpace),lt=s.convert(x.type),Ht=y(x.internalFormat,wt,lt,x.colorSpace),z=x.isVideoTexture!==!0,ft=Y.__version===void 0||j===!0,it=J.dataReady;let pt=E(x,xt);rt(r.TEXTURE_CUBE_MAP,x);let tt;if(Lt){z&&ft&&e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Ht,xt.width,xt.height);for(let Z=0;Z<6;Z++){tt=ct[Z].mipmaps;for(let ot=0;ot<tt.length;ot++){const Ft=tt[ot];x.format!==dn?wt!==null?z?it&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,Ft.width,Ft.height,wt,Ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Ht,Ft.width,Ft.height,0,Ft.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,0,0,Ft.width,Ft.height,wt,lt,Ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot,Ht,Ft.width,Ft.height,0,wt,lt,Ft.data)}}}else{if(tt=x.mipmaps,z&&ft){tt.length>0&&pt++;const Z=bt(ct[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Ht,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){z?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ct[Z].width,ct[Z].height,wt,lt,ct[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,ct[Z].width,ct[Z].height,0,wt,lt,ct[Z].data);for(let ot=0;ot<tt.length;ot++){const ue=tt[ot].image[Z].image;z?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,ue.width,ue.height,wt,lt,ue.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Ht,ue.width,ue.height,0,wt,lt,ue.data)}}else{z?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,wt,lt,ct[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ht,wt,lt,ct[Z]);for(let ot=0;ot<tt.length;ot++){const Ft=tt[ot];z?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,0,0,wt,lt,Ft.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ot+1,Ht,wt,lt,Ft.image[Z])}}}g(x)&&p(r.TEXTURE_CUBE_MAP),Y.__version=J.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function gt(C,x,k,j,J,Y){const Et=s.convert(k.format,k.colorSpace),at=s.convert(k.type),St=y(k.internalFormat,Et,at,k.colorSpace),Lt=n.get(x),et=n.get(k);if(et.__renderTarget=x,!Lt.__hasExternalTextures){const ct=Math.max(1,x.width>>Y),xt=Math.max(1,x.height>>Y);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,St,ct,xt,x.depth,0,Et,at,null):e.texImage2D(J,Y,St,ct,xt,0,Et,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Te(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,J,et.__webglTexture,0,F(x)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,J,et.__webglTexture,Y),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(C,x,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),x.depthBuffer){const j=x.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=S(x.stencilBuffer,J),Et=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Te(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(x),Y,x.width,x.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(x),Y,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Y,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,C)}else{const j=x.textures;for(let J=0;J<j.length;J++){const Y=j[J],Et=s.convert(Y.format,Y.colorSpace),at=s.convert(Y.type),St=y(Y.internalFormat,Et,at,Y.colorSpace);Te(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(x),St,x.width,x.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(x),St,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,St,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(C,x,k){const j=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),rt(r.TEXTURE_CUBE_MAP,x.depthTexture);const Lt=s.convert(x.depthTexture.format),et=s.convert(x.depthTexture.type);let ct;x.depthTexture.format===oi?ct=r.DEPTH_COMPONENT24:x.depthTexture.format===ki&&(ct=r.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ct,x.width,x.height,0,Lt,et,null)}}else U(x.depthTexture,0);const Y=J.__webglTexture,Et=F(x),at=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,St=x.depthTexture.format===ki?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===oi)Te(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,St,at,Y,0,Et):r.framebufferTexture2D(r.FRAMEBUFFER,St,at,Y,0);else if(x.depthTexture.format===ki)Te(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,St,at,Y,0,Et):r.framebufferTexture2D(r.FRAMEBUFFER,St,at,Y,0);else throw new Error("Unknown depthTexture format")}function Yt(C){const x=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=j}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let j=0;j<6;j++)Mt(x.__webglFramebuffer[j],C,j);else{const j=C.texture.mipmaps;j&&j.length>0?Mt(x.__webglFramebuffer[0],C,0):Mt(x.__webglFramebuffer,C,0)}else if(k){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=r.createRenderbuffer(),Ut(x.__webglDepthbuffer[j],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Y)}}else{const j=C.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ut(x.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Y)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(C,x,k){const j=n.get(C);x!==void 0&&gt(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Yt(C)}function Xt(C){const x=C.texture,k=n.get(C),j=n.get(x);C.addEventListener("dispose",R);const J=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=x.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let St=0;St<x.mipmaps.length;St++)k.__webglFramebuffer[at][St]=r.createFramebuffer()}else k.__webglFramebuffer[at]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)k.__webglFramebuffer[at]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Et)for(let at=0,St=J.length;at<St;at++){const Lt=n.get(J[at]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Te(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const St=J[at];k.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const Lt=s.convert(St.format,St.colorSpace),et=s.convert(St.type),ct=y(St.internalFormat,Lt,et,St.colorSpace,C.isXRRenderTarget===!0),xt=F(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,ct,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,k.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),rt(r.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)gt(k.__webglFramebuffer[at][St],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,St);else gt(k.__webglFramebuffer[at],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(x)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let at=0,St=J.length;at<St;at++){const Lt=J[at],et=n.get(Lt);let ct=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ct,et.__webglTexture),rt(ct,Lt),gt(k.__webglFramebuffer,C,Lt,r.COLOR_ATTACHMENT0+at,ct,0),g(Lt)&&p(ct)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),rt(at,x),x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)gt(k.__webglFramebuffer[St],C,x,r.COLOR_ATTACHMENT0,at,St);else gt(k.__webglFramebuffer,C,x,r.COLOR_ATTACHMENT0,at,0);g(x)&&p(at),e.unbindTexture()}C.depthBuffer&&Yt(C)}function te(C){const x=C.textures;for(let k=0,j=x.length;k<j;k++){const J=x[k];if(g(J)){const Y=v(C),Et=n.get(J).__webglTexture;e.bindTexture(Y,Et),p(Y),e.unbindTexture()}}}const le=[],kt=[];function Ee(C){if(C.samples>0){if(Te(C)===!1){const x=C.textures,k=C.width,j=C.height;let J=r.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=n.get(C),at=x.length>1;if(at)for(let Lt=0;Lt<x.length;Lt++)e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const St=C.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Lt=0;Lt<x.length;Lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Et.__webglColorRenderbuffer[Lt]);const et=n.get(x[Lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,k,j,0,0,k,j,J,r.NEAREST),l===!0&&(le.length=0,kt.length=0,le.push(r.COLOR_ATTACHMENT0+Lt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(le.push(Y),kt.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,kt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let Lt=0;Lt<x.length;Lt++){e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,Et.__webglColorRenderbuffer[Lt]);const et=n.get(x[Lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,et,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function F(C){return Math.min(i.maxSamples,C.samples)}function Te(C){const x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Jt(C){const x=o.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function he(C,x){const k=C.colorSpace,j=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==ys&&k!==vi&&(qt.getTransfer(k)===ie?(j!==dn||J!==nn)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",k)),x}function bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=Fe,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function G_(r,t){function e(n,i=vi){let s;const o=qt.getTransfer(i);if(n===nn)return r.UNSIGNED_BYTE;if(n===Cl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Cu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Pu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Au)return r.BYTE;if(n===Ru)return r.SHORT;if(n===Qs)return r.UNSIGNED_SHORT;if(n===Rl)return r.INT;if(n===Gn)return r.UNSIGNED_INT;if(n===Bn)return r.FLOAT;if(n===Wn)return r.HALF_FLOAT;if(n===Lu)return r.ALPHA;if(n===Du)return r.RGB;if(n===dn)return r.RGBA;if(n===oi)return r.DEPTH_COMPONENT;if(n===ki)return r.DEPTH_STENCIL;if(n===Iu)return r.RED;if(n===Ll)return r.RED_INTEGER;if(n===xs)return r.RG;if(n===Dl)return r.RG_INTEGER;if(n===Il)return r.RGBA_INTEGER;if(n===so||n===ro||n===oo||n===ao)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===so)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===so)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Ga||n===Wa||n===Xa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Va)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Ya||n===ja||n===$a||n===Za||n===Ka||n===Ja)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qa||n===Ya)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ja)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===$a)return s.COMPRESSED_R11_EAC;if(n===Za)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ka)return s.COMPRESSED_RG11_EAC;if(n===Ja)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fl||n===pl||n===ml)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===fl)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gl||n===_l||n===vl||n===xl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===gl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const W_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X_=`
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

}`;class q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Yu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:W_,fragmentShader:X_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y_ extends Vi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new q_,p={},v=e.getContextAttributes();let y=null,S=null;const E=[],T=[],R=new Tt;let I=null;const M=new vn;M.viewport=new _e;const w=new vn;w.viewport=new _e;const L=[M,w],O=new ep;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=E[$];return Q===void 0&&(Q=new Zo,E[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=E[$];return Q===void 0&&(Q=new Zo,E[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=E[$];return Q===void 0&&(Q=new Zo,E[$]=Q),Q.getHandSpace()};function U($){const Q=T.indexOf($.inputSource);if(Q===-1)return;const gt=E[Q];gt!==void 0&&(gt.update($.inputSource,$.frame,c||o),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",V);for(let $=0;$<E.length;$++){const Q=T[$];Q!==null&&(T[$]=null,E[$].disconnect(Q))}P=null,B=null,g.reset();for(const $ in p)delete p[$];t.setRenderTarget(y),f=null,u=null,d=null,i=null,S=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",N),i.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ut=null,Mt=null;v.depth&&(Mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=v.stencil?ki:oi,Ut=v.stencil?tr:Gn);const Yt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Yt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Hn(u.textureWidth,u.textureHeight,{format:dn,type:nn,depthTexture:new ir(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const gt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,gt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Hn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V($){for(let Q=0;Q<$.removed.length;Q++){const gt=$.removed[Q],Ut=T.indexOf(gt);Ut>=0&&(T[Ut]=null,E[Ut].disconnect(gt))}for(let Q=0;Q<$.added.length;Q++){const gt=$.added[Q];let Ut=T.indexOf(gt);if(Ut===-1){for(let Yt=0;Yt<E.length;Yt++)if(Yt>=T.length){T.push(gt),Ut=Yt;break}else if(T[Yt]===null){T[Yt]=gt,Ut=Yt;break}if(Ut===-1)break}const Mt=E[Ut];Mt&&Mt.connect(gt)}}const X=new D,K=new D;function nt($,Q,gt){X.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(gt.matrixWorld);const Ut=X.distanceTo(K),Mt=Q.projectionMatrix.elements,Yt=gt.projectionMatrix.elements,Fe=Mt[14]/(Mt[10]-1),Xt=Mt[14]/(Mt[10]+1),te=(Mt[9]+1)/Mt[5],le=(Mt[9]-1)/Mt[5],kt=(Mt[8]-1)/Mt[0],Ee=(Yt[8]+1)/Yt[0],F=Fe*kt,Te=Fe*Ee,Jt=Ut/(-kt+Ee),he=Jt*-kt;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(he),$.translateZ(Jt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Mt[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const bt=Fe+Jt,C=Xt+Jt,x=F-he,k=Te+(Ut-he),j=te*Xt/C*bt,J=le*Xt/C*bt;$.projectionMatrix.makePerspective(x,k,j,J,bt,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function st($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Q=$.near,gt=$.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),O.near=w.near=M.near=Q,O.far=w.far=M.far=gt,(P!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,B=O.far),O.layers.mask=$.layers.mask|6,M.layers.mask=O.layers.mask&3,w.layers.mask=O.layers.mask&5;const Ut=$.parent,Mt=O.cameras;st(O,Ut);for(let Yt=0;Yt<Mt.length;Yt++)st(Mt[Yt],Ut);Mt.length===2?nt(O,M,w):O.projectionMatrix.copy(M.projectionMatrix),rt($,O,Ut)};function rt($,Q,gt){gt===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=nr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function($){return p[$]};let It=null;function se($,Q){if(h=Q.getViewerPose(c||o),m=Q,h!==null){const gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Ut=!1;gt.length!==O.cameras.length&&(O.cameras.length=0,Ut=!0);for(let Xt=0;Xt<gt.length;Xt++){const te=gt[Xt];let le=null;if(f!==null)le=f.getViewport(te);else{const Ee=d.getViewSubImage(u,te);le=Ee.viewport,Xt===0&&(t.setRenderTargetTextures(S,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(S))}let kt=L[Xt];kt===void 0&&(kt=new vn,kt.layers.enable(Xt),kt.viewport=new _e,L[Xt]=kt),kt.matrix.fromArray(te.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(te.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(le.x,le.y,le.width,le.height),Xt===0&&(O.matrix.copy(kt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ut===!0&&O.cameras.push(kt)}const Mt=i.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Xt=d.getDepthInformation(gt[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,i.renderState)}if(Mt&&Mt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Xt=0;Xt<gt.length;Xt++){const te=gt[Xt].camera;if(te){let le=p[te];le||(le=new Yu,p[te]=le);const kt=d.getCameraImage(te);le.sourceTexture=kt}}}}for(let gt=0;gt<E.length;gt++){const Ut=T[gt],Mt=E[gt];Ut!==null&&Mt!==void 0&&Mt.update(Ut,Q,c||o)}It&&It($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const Qt=new $u;Qt.setAnimationLoop(se),this.setAnimationLoop=function($){It=$},this.dispose=function(){}}}const Pi=new on,j_=new pe;function $_(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Hu(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$e&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$e&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,S=v.envMapRotation;y&&(g.envMap.value=y,Pi.copy(S),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),g.envMapRotation.value.setFromMatrix4(j_.makeRotationFromEuler(Pi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Z_(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const S=y.program;n.uniformBlockBinding(v,S)}function c(v,y){let S=i[v.id];S===void 0&&(m(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",g));const E=y.program;n.updateUBOMapping(v,E);const T=t.render.frame;s[v.id]!==T&&(u(v),s[v.id]=T)}function h(v){const y=d();v.__bindingPointIndex=y;const S=r.createBuffer(),E=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,E,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],S=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let T=0,R=S.length;T<R;T++){const I=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,w=I.length;M<w;M++){const L=I[M];if(f(L,T,M,E)===!0){const O=L.__offset,P=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let U=0;U<P.length;U++){const N=P[U],V=_(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,O+B,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,B),B+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,S,E){const T=v.value,R=y+"_"+S;if(E[R]===void 0)return typeof T=="number"||typeof T=="boolean"?E[R]=T:E[R]=T.clone(),!0;{const I=E[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return E[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(v){const y=v.uniforms;let S=0;const E=16;for(let R=0,I=y.length;R<I;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,L=M.length;w<L;w++){const O=M[w],P=Array.isArray(O.value)?O.value:[O.value];for(let B=0,U=P.length;B<U;B++){const N=P[B],V=_(N),X=S%E,K=X%V.boundary,nt=X+K;S+=K,nt!==0&&E-nt<V.storage&&(S+=E-nt),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=V.storage}}}const T=S%E;return T>0&&(S+=E-T),v.__size=S,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Dt("WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}const K_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function J_(){return Pn===null&&(Pn=new yo(K_,16,16,xs,Wn),Pn.name="DFG_LUT",Pn.minFilter=Oe,Pn.magFilter=Oe,Pn.wrapS=ii,Pn.wrapT=ii,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class Q_{constructor(t={}){const{canvas:e=sf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=nn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=f,g=new Set([Il,Dl,Ll]),p=new Set([nn,Gn,Qs,tr,Cl,Pl]),v=new Uint32Array(4),y=new Int32Array(4);let S=null,E=null;const T=[],R=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=en;let L=0,O=0,P=null,B=-1,U=null;const N=new _e,V=new _e;let X=null;const K=new Nt(0);let nt=0,st=e.width,rt=e.height,It=1,se=null,Qt=null;const $=new _e(0,0,st,rt),Q=new _e(0,0,st,rt);let gt=!1;const Ut=new Vl;let Mt=!1,Yt=!1;const Fe=new pe,Xt=new D,te=new _e,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Ee(){return P===null?It:1}let F=n;function Te(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tl}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",ee,!1),F===null){const H="webgl2";if(F=Te(H,A),F===null)throw Te(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw $t("WebGLRenderer: "+A.message),A}let Jt,he,bt,C,x,k,j,J,Y,Et,at,St,Lt,et,ct,xt,wt,lt,Ht,z,ft,it,pt,tt;function Z(){Jt=new J0(F),Jt.init(),it=new G_(F,Jt),he=new G0(F,Jt,t,it),bt=new H_(F,Jt),he.reversedDepthBuffer&&u&&bt.buffers.depth.setReversed(!0),C=new eg(F),x=new T_,k=new V_(F,Jt,bt,x,he,it,C),j=new X0(M),J=new K0(M),Y=new rp(F),pt=new H0(F,Y),Et=new Q0(F,Y,C,pt),at=new ig(F,Et,Y,C),Ht=new ng(F,he,k),xt=new W0(x),St=new E_(M,j,J,Jt,he,pt,xt),Lt=new $_(M,x),et=new R_,ct=new N_(Jt),lt=new k0(M,j,J,bt,at,m,l),wt=new z_(M,at,he),tt=new Z_(F,C,he,bt),z=new V0(F,Jt,C),ft=new tg(F,Jt,C),C.programs=St.programs,M.capabilities=he,M.extensions=Jt,M.properties=x,M.renderLists=et,M.shadowMap=wt,M.state=bt,M.info=C}Z(),_!==nn&&(I=new rg(_,e.width,e.height,i,s));const ot=new Y_(M,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Jt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Jt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return It},this.setPixelRatio=function(A){A!==void 0&&(It=A,this.setSize(st,rt,!1))},this.getSize=function(A){return A.set(st,rt)},this.setSize=function(A,H,q=!0){if(ot.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}st=A,rt=H,e.width=Math.floor(A*It),e.height=Math.floor(H*It),q===!0&&(e.style.width=A+"px",e.style.height=H+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(st*It,rt*It).floor()},this.setDrawingBufferSize=function(A,H,q){st=A,rt=H,It=q,e.width=Math.floor(A*q),e.height=Math.floor(H*q),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(_===nn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,H,q,W){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,H,q,W),bt.viewport(N.copy($).multiplyScalar(It).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,H,q,W){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,H,q,W),bt.scissor(V.copy(Q).multiplyScalar(It).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(A){bt.setScissorTest(gt=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){Qt=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,q=!0){let W=0;if(A){let G=!1;if(P!==null){const ht=P.texture.format;G=g.has(ht)}if(G){const ht=P.texture.type,mt=p.has(ht),dt=lt.getClearColor(),_t=lt.getClearAlpha(),At=dt.r,Pt=dt.g,Rt=dt.b;mt?(v[0]=At,v[1]=Pt,v[2]=Rt,v[3]=_t,F.clearBufferuiv(F.COLOR,0,v)):(y[0]=At,y[1]=Pt,y[2]=Rt,y[3]=_t,F.clearBufferiv(F.COLOR,0,y))}else W|=F.COLOR_BUFFER_BIT}H&&(W|=F.DEPTH_BUFFER_BIT),q&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),lt.dispose(),et.dispose(),ct.dispose(),x.dispose(),j.dispose(),J.dispose(),at.dispose(),pt.dispose(),tt.dispose(),St.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",ec),ot.removeEventListener("sessionend",nc),bi.stop()};function Ft(A){A.preventDefault(),gc("WebGLRenderer: Context Lost."),w=!0}function ue(){gc("WebGLRenderer: Context Restored."),w=!1;const A=C.autoReset,H=wt.enabled,q=wt.autoUpdate,W=wt.needsUpdate,G=wt.type;Z(),C.autoReset=A,wt.enabled=H,wt.autoUpdate=q,wt.needsUpdate=W,wt.type=G}function ee(A){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Cn(A){const H=A.target;H.removeEventListener("dispose",Cn),Xn(H)}function Xn(A){_d(A),x.remove(A)}function _d(A){const H=x.get(A).programs;H!==void 0&&(H.forEach(function(q){St.releaseProgram(q)}),A.isShaderMaterial&&St.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,q,W,G,ht){H===null&&(H=le);const mt=G.isMesh&&G.matrixWorld.determinant()<0,dt=xd(A,H,q,W,G);bt.setMaterial(W,mt);let _t=q.index,At=1;if(W.wireframe===!0){if(_t=Et.getWireframeAttribute(q),_t===void 0)return;At=2}const Pt=q.drawRange,Rt=q.attributes.position;let Vt=Pt.start*At,re=(Pt.start+Pt.count)*At;ht!==null&&(Vt=Math.max(Vt,ht.start*At),re=Math.min(re,(ht.start+ht.count)*At)),_t!==null?(Vt=Math.max(Vt,0),re=Math.min(re,_t.count)):Rt!=null&&(Vt=Math.max(Vt,0),re=Math.min(re,Rt.count));const xe=re-Vt;if(xe<0||xe===1/0)return;pt.setup(G,W,dt,q,_t);let ye,ce=z;if(_t!==null&&(ye=Y.get(_t),ce=ft,ce.setIndex(ye)),G.isMesh)W.wireframe===!0?(bt.setLineWidth(W.wireframeLinewidth*Ee()),ce.setMode(F.LINES)):ce.setMode(F.TRIANGLES);else if(G.isLine){let Ct=W.linewidth;Ct===void 0&&(Ct=1),bt.setLineWidth(Ct*Ee()),G.isLineSegments?ce.setMode(F.LINES):G.isLineLoop?ce.setMode(F.LINE_LOOP):ce.setMode(F.LINE_STRIP)}else G.isPoints?ce.setMode(F.POINTS):G.isSprite&&ce.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)er("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))ce.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ct=G._multiDrawStarts,ne=G._multiDrawCounts,jt=G._multiDrawCount,an=_t?Y.get(_t).bytesPerElement:1,Gi=x.get(W).currentProgram.getUniforms();for(let ln=0;ln<jt;ln++)Gi.setValue(F,"_gl_DrawID",ln),ce.render(Ct[ln]/an,ne[ln])}else if(G.isInstancedMesh)ce.renderInstances(Vt,xe,G.count);else if(q.isInstancedBufferGeometry){const Ct=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ne=Math.min(q.instanceCount,Ct);ce.renderInstances(Vt,xe,ne)}else ce.render(Vt,xe)};function tc(A,H,q){A.transparent===!0&&A.side===un&&A.forceSinglePass===!1?(A.side=$e,A.needsUpdate=!0,pr(A,H,q),A.side=Si,A.needsUpdate=!0,pr(A,H,q),A.side=un):pr(A,H,q)}this.compile=function(A,H,q=null){q===null&&(q=A),E=ct.get(q),E.init(H),R.push(E),q.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),A!==q&&A.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();const W=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ht=G.material;if(ht)if(Array.isArray(ht))for(let mt=0;mt<ht.length;mt++){const dt=ht[mt];tc(dt,q,G),W.add(dt)}else tc(ht,q,G),W.add(ht)}),E=R.pop(),W},this.compileAsync=function(A,H,q=null){const W=this.compile(A,H,q);return new Promise(G=>{function ht(){if(W.forEach(function(mt){x.get(mt).currentProgram.isReady()&&W.delete(mt)}),W.size===0){G(A);return}setTimeout(ht,10)}Jt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let To=null;function vd(A){To&&To(A)}function ec(){bi.stop()}function nc(){bi.start()}const bi=new $u;bi.setAnimationLoop(vd),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){To=A,ot.setAnimationLoop(A),A===null?bi.stop():bi.start()},ot.addEventListener("sessionstart",ec),ot.addEventListener("sessionend",nc),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const q=ot.enabled===!0&&ot.isPresenting===!0,W=I!==null&&(P===null||q)&&I.begin(M,P);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(H),H=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,H,P),E=ct.get(A,R.length),E.init(H),R.push(E),Fe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ut.setFromProjectionMatrix(Fe,zn,H.reversedDepth),Yt=this.localClippingEnabled,Mt=xt.init(this.clippingPlanes,Yt),S=et.get(A,T.length),S.init(),T.push(S),ot.enabled===!0&&ot.isPresenting===!0){const mt=M.xr.getDepthSensingMesh();mt!==null&&Ao(mt,H,-1/0,M.sortObjects)}Ao(A,H,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(se,Qt),kt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,kt&&lt.addToRenderList(S,A),this.info.render.frame++,Mt===!0&&xt.beginShadows();const G=E.state.shadowsArray;if(wt.render(G,A,H),Mt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&I.hasRenderPass())===!1){const mt=S.opaque,dt=S.transmissive;if(E.setupLights(),H.isArrayCamera){const _t=H.cameras;if(dt.length>0)for(let At=0,Pt=_t.length;At<Pt;At++){const Rt=_t[At];sc(mt,dt,A,Rt)}kt&&lt.render(A);for(let At=0,Pt=_t.length;At<Pt;At++){const Rt=_t[At];ic(S,A,Rt,Rt.viewport)}}else dt.length>0&&sc(mt,dt,A,H),kt&&lt.render(A),ic(S,A,H)}P!==null&&O===0&&(k.updateMultisampleRenderTarget(P),k.updateRenderTargetMipmap(P)),W&&I.end(M),A.isScene===!0&&A.onAfterRender(M,A,H),pt.resetDefaultState(),B=-1,U=null,R.pop(),R.length>0?(E=R[R.length-1],Mt===!0&&xt.setGlobalState(M.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function Ao(A,H,q,W){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ut.intersectsSprite(A)){W&&te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Fe);const mt=at.update(A),dt=A.material;dt.visible&&S.push(A,mt,dt,q,te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ut.intersectsObject(A))){const mt=at.update(A),dt=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),te.copy(A.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),te.copy(mt.boundingSphere.center)),te.applyMatrix4(A.matrixWorld).applyMatrix4(Fe)),Array.isArray(dt)){const _t=mt.groups;for(let At=0,Pt=_t.length;At<Pt;At++){const Rt=_t[At],Vt=dt[Rt.materialIndex];Vt&&Vt.visible&&S.push(A,mt,Vt,q,te.z,Rt)}}else dt.visible&&S.push(A,mt,dt,q,te.z,null)}}const ht=A.children;for(let mt=0,dt=ht.length;mt<dt;mt++)Ao(ht[mt],H,q,W)}function ic(A,H,q,W){const{opaque:G,transmissive:ht,transparent:mt}=A;E.setupLightsView(q),Mt===!0&&xt.setGlobalState(M.clippingPlanes,q),W&&bt.viewport(N.copy(W)),G.length>0&&fr(G,H,q),ht.length>0&&fr(ht,H,q),mt.length>0&&fr(mt,H,q),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function sc(A,H,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const Vt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Hn(1,1,{generateMipmaps:!0,type:Vt?Wn:nn,minFilter:On,samples:he.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const ht=E.state.transmissionRenderTarget[W.id],mt=W.viewport||N;ht.setSize(mt.z*M.transmissionResolutionScale,mt.w*M.transmissionResolutionScale);const dt=M.getRenderTarget(),_t=M.getActiveCubeFace(),At=M.getActiveMipmapLevel();M.setRenderTarget(ht),M.getClearColor(K),nt=M.getClearAlpha(),nt<1&&M.setClearColor(16777215,.5),M.clear(),kt&&lt.render(q);const Pt=M.toneMapping;M.toneMapping=kn;const Rt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),Mt===!0&&xt.setGlobalState(M.clippingPlanes,W),fr(A,q,W),k.updateMultisampleRenderTarget(ht),k.updateRenderTargetMipmap(ht),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let re=0,xe=H.length;re<xe;re++){const ye=H[re],{object:ce,geometry:Ct,material:ne,group:jt}=ye;if(ne.side===un&&ce.layers.test(W.layers)){const an=ne.side;ne.side=$e,ne.needsUpdate=!0,rc(ce,q,W,Ct,ne,jt),ne.side=an,ne.needsUpdate=!0,Vt=!0}}Vt===!0&&(k.updateMultisampleRenderTarget(ht),k.updateRenderTargetMipmap(ht))}M.setRenderTarget(dt,_t,At),M.setClearColor(K,nt),Rt!==void 0&&(W.viewport=Rt),M.toneMapping=Pt}function fr(A,H,q){const W=H.isScene===!0?H.overrideMaterial:null;for(let G=0,ht=A.length;G<ht;G++){const mt=A[G],{object:dt,geometry:_t,group:At}=mt;let Pt=mt.material;Pt.allowOverride===!0&&W!==null&&(Pt=W),dt.layers.test(q.layers)&&rc(dt,H,q,_t,Pt,At)}}function rc(A,H,q,W,G,ht){A.onBeforeRender(M,H,q,W,G,ht),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(M,H,q,W,A,ht),G.transparent===!0&&G.side===un&&G.forceSinglePass===!1?(G.side=$e,G.needsUpdate=!0,M.renderBufferDirect(q,H,W,G,A,ht),G.side=Si,G.needsUpdate=!0,M.renderBufferDirect(q,H,W,G,A,ht),G.side=un):M.renderBufferDirect(q,H,W,G,A,ht),A.onAfterRender(M,H,q,W,G,ht)}function pr(A,H,q){H.isScene!==!0&&(H=le);const W=x.get(A),G=E.state.lights,ht=E.state.shadowsArray,mt=G.state.version,dt=St.getParameters(A,G.state,ht,H,q),_t=St.getProgramCacheKey(dt);let At=W.programs;W.environment=A.isMeshStandardMaterial?H.environment:null,W.fog=H.fog,W.envMap=(A.isMeshStandardMaterial?J:j).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,At===void 0&&(A.addEventListener("dispose",Cn),At=new Map,W.programs=At);let Pt=At.get(_t);if(Pt!==void 0){if(W.currentProgram===Pt&&W.lightsStateVersion===mt)return ac(A,dt),Pt}else dt.uniforms=St.getUniforms(A),A.onBeforeCompile(dt,M),Pt=St.acquireProgram(dt,_t),At.set(_t,Pt),W.uniforms=dt.uniforms;const Rt=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Rt.clippingPlanes=xt.uniform),ac(A,dt),W.needsLights=Md(A),W.lightsStateVersion=mt,W.needsLights&&(Rt.ambientLightColor.value=G.state.ambient,Rt.lightProbe.value=G.state.probe,Rt.directionalLights.value=G.state.directional,Rt.directionalLightShadows.value=G.state.directionalShadow,Rt.spotLights.value=G.state.spot,Rt.spotLightShadows.value=G.state.spotShadow,Rt.rectAreaLights.value=G.state.rectArea,Rt.ltc_1.value=G.state.rectAreaLTC1,Rt.ltc_2.value=G.state.rectAreaLTC2,Rt.pointLights.value=G.state.point,Rt.pointLightShadows.value=G.state.pointShadow,Rt.hemisphereLights.value=G.state.hemi,Rt.directionalShadowMap.value=G.state.directionalShadowMap,Rt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Rt.spotShadowMap.value=G.state.spotShadowMap,Rt.spotLightMatrix.value=G.state.spotLightMatrix,Rt.spotLightMap.value=G.state.spotLightMap,Rt.pointShadowMap.value=G.state.pointShadowMap,Rt.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Pt,W.uniformsList=null,Pt}function oc(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=lo.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function ac(A,H){const q=x.get(A);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function xd(A,H,q,W,G){H.isScene!==!0&&(H=le),k.resetTextureUnits();const ht=H.fog,mt=W.isMeshStandardMaterial?H.environment:null,dt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ys,_t=(W.isMeshStandardMaterial?J:j).get(W.envMap||mt),At=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Pt=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Rt=!!q.morphAttributes.position,Vt=!!q.morphAttributes.normal,re=!!q.morphAttributes.color;let xe=kn;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xe=M.toneMapping);const ye=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=ye!==void 0?ye.length:0,Ct=x.get(W),ne=E.state.lights;if(Mt===!0&&(Yt===!0||A!==U)){const Xe=A===U&&W.id===B;xt.setState(W,A,Xe)}let jt=!1;W.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ne.state.version||Ct.outputColorSpace!==dt||G.isBatchedMesh&&Ct.batching===!1||!G.isBatchedMesh&&Ct.batching===!0||G.isBatchedMesh&&Ct.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ct.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ct.instancing===!1||!G.isInstancedMesh&&Ct.instancing===!0||G.isSkinnedMesh&&Ct.skinning===!1||!G.isSkinnedMesh&&Ct.skinning===!0||G.isInstancedMesh&&Ct.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ct.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ct.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ct.instancingMorph===!1&&G.morphTexture!==null||Ct.envMap!==_t||W.fog===!0&&Ct.fog!==ht||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==xt.numPlanes||Ct.numIntersection!==xt.numIntersection)||Ct.vertexAlphas!==At||Ct.vertexTangents!==Pt||Ct.morphTargets!==Rt||Ct.morphNormals!==Vt||Ct.morphColors!==re||Ct.toneMapping!==xe||Ct.morphTargetsCount!==ce)&&(jt=!0):(jt=!0,Ct.__version=W.version);let an=Ct.currentProgram;jt===!0&&(an=pr(W,H,G));let Gi=!1,ln=!1,Es=!1;const de=an.getUniforms(),Ke=Ct.uniforms;if(bt.useProgram(an.program)&&(Gi=!0,ln=!0,Es=!0),W.id!==B&&(B=W.id,ln=!0),Gi||U!==A){bt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),de.setValue(F,"projectionMatrix",A.projectionMatrix),de.setValue(F,"viewMatrix",A.matrixWorldInverse);const Je=de.map.cameraPosition;Je!==void 0&&Je.setValue(F,Xt.setFromMatrixPosition(A.matrixWorld)),he.logarithmicDepthBuffer&&de.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&de.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,ln=!0,Es=!0)}if(Ct.needsLights&&(ne.state.directionalShadowMap.length>0&&de.setValue(F,"directionalShadowMap",ne.state.directionalShadowMap,k),ne.state.spotShadowMap.length>0&&de.setValue(F,"spotShadowMap",ne.state.spotShadowMap,k),ne.state.pointShadowMap.length>0&&de.setValue(F,"pointShadowMap",ne.state.pointShadowMap,k)),G.isSkinnedMesh){de.setOptional(F,G,"bindMatrix"),de.setOptional(F,G,"bindMatrixInverse");const Xe=G.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),de.setValue(F,"boneTexture",Xe.boneTexture,k))}G.isBatchedMesh&&(de.setOptional(F,G,"batchingTexture"),de.setValue(F,"batchingTexture",G._matricesTexture,k),de.setOptional(F,G,"batchingIdTexture"),de.setValue(F,"batchingIdTexture",G._indirectTexture,k),de.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&de.setValue(F,"batchingColorTexture",G._colorsTexture,k));const pn=q.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ht.update(G,q,an),(ln||Ct.receiveShadow!==G.receiveShadow)&&(Ct.receiveShadow=G.receiveShadow,de.setValue(F,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ke.envMap.value=_t,Ke.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&H.environment!==null&&(Ke.envMapIntensity.value=H.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=J_()),ln&&(de.setValue(F,"toneMappingExposure",M.toneMappingExposure),Ct.needsLights&&yd(Ke,Es),ht&&W.fog===!0&&Lt.refreshFogUniforms(Ke,ht),Lt.refreshMaterialUniforms(Ke,W,It,rt,E.state.transmissionRenderTarget[A.id]),lo.upload(F,oc(Ct),Ke,k)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(lo.upload(F,oc(Ct),Ke,k),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&de.setValue(F,"center",G.center),de.setValue(F,"modelViewMatrix",G.modelViewMatrix),de.setValue(F,"normalMatrix",G.normalMatrix),de.setValue(F,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Xe=W.uniformsGroups;for(let Je=0,Ro=Xe.length;Je<Ro;Je++){const wi=Xe[Je];tt.update(wi,an),tt.bind(wi,an)}}return an}function yd(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Md(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,H,q){const W=x.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),x.get(A.texture).__webglTexture=H,x.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const q=x.get(A);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const Sd=F.createFramebuffer();this.setRenderTarget=function(A,H=0,q=0){P=A,L=H,O=q;let W=null,G=!1,ht=!1;if(A){const dt=x.get(A);if(dt.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(F.FRAMEBUFFER,dt.__webglFramebuffer),N.copy(A.viewport),V.copy(A.scissor),X=A.scissorTest,bt.viewport(N),bt.scissor(V),bt.setScissorTest(X),B=-1;return}else if(dt.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(dt.__hasExternalTextures)k.rebindTextures(A,x.get(A.texture).__webglTexture,x.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Pt=A.depthTexture;if(dt.__boundDepthTexture!==Pt){if(Pt!==null&&x.has(Pt)&&(A.width!==Pt.image.width||A.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}const _t=A.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ht=!0);const At=x.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(At[H])?W=At[H][q]:W=At[H],G=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?W=x.get(A).__webglMultisampledFramebuffer:Array.isArray(At)?W=At[q]:W=At,N.copy(A.viewport),V.copy(A.scissor),X=A.scissorTest}else N.copy($).multiplyScalar(It).floor(),V.copy(Q).multiplyScalar(It).floor(),X=gt;if(q!==0&&(W=Sd),bt.bindFramebuffer(F.FRAMEBUFFER,W)&&bt.drawBuffers(A,W),bt.viewport(N),bt.scissor(V),bt.setScissorTest(X),G){const dt=x.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,dt.__webglTexture,q)}else if(ht){const dt=H;for(let _t=0;_t<A.textures.length;_t++){const At=x.get(A.textures[_t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+_t,At.__webglTexture,q,dt)}}else if(A!==null&&q!==0){const dt=x.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dt.__webglTexture,q)}B=-1},this.readRenderTargetPixels=function(A,H,q,W,G,ht,mt,dt=0){if(!(A&&A.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=x.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t){bt.bindFramebuffer(F.FRAMEBUFFER,_t);try{const At=A.textures[dt],Pt=At.format,Rt=At.type;if(!he.textureFormatReadable(Pt)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Rt)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-W&&q>=0&&q<=A.height-G&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+dt),F.readPixels(H,q,W,G,it.convert(Pt),it.convert(Rt),ht))}finally{const At=P!==null?x.get(P).__webglFramebuffer:null;bt.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(A,H,q,W,G,ht,mt,dt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=x.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t)if(H>=0&&H<=A.width-W&&q>=0&&q<=A.height-G){bt.bindFramebuffer(F.FRAMEBUFFER,_t);const At=A.textures[dt],Pt=At.format,Rt=At.type;if(!he.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Vt),F.bufferData(F.PIXEL_PACK_BUFFER,ht.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+dt),F.readPixels(H,q,W,G,it.convert(Pt),it.convert(Rt),0);const re=P!==null?x.get(P).__webglFramebuffer:null;bt.bindFramebuffer(F.FRAMEBUFFER,re);const xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await rf(F,xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ht),F.deleteBuffer(Vt),F.deleteSync(xe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,q=0){const W=Math.pow(2,-q),G=Math.floor(A.image.width*W),ht=Math.floor(A.image.height*W),mt=H!==null?H.x:0,dt=H!==null?H.y:0;k.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,mt,dt,G,ht),bt.unbindTexture()};const bd=F.createFramebuffer(),wd=F.createFramebuffer();this.copyTextureToTexture=function(A,H,q=null,W=null,G=0,ht=null){ht===null&&(G!==0?(er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=G,G=0):ht=0);let mt,dt,_t,At,Pt,Rt,Vt,re,xe;const ye=A.isCompressedTexture?A.mipmaps[ht]:A.image;if(q!==null)mt=q.max.x-q.min.x,dt=q.max.y-q.min.y,_t=q.isBox3?q.max.z-q.min.z:1,At=q.min.x,Pt=q.min.y,Rt=q.isBox3?q.min.z:0;else{const pn=Math.pow(2,-G);mt=Math.floor(ye.width*pn),dt=Math.floor(ye.height*pn),A.isDataArrayTexture?_t=ye.depth:A.isData3DTexture?_t=Math.floor(ye.depth*pn):_t=1,At=0,Pt=0,Rt=0}W!==null?(Vt=W.x,re=W.y,xe=W.z):(Vt=0,re=0,xe=0);const ce=it.convert(H.format),Ct=it.convert(H.type);let ne;H.isData3DTexture?(k.setTexture3D(H,0),ne=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(k.setTexture2DArray(H,0),ne=F.TEXTURE_2D_ARRAY):(k.setTexture2D(H,0),ne=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const jt=F.getParameter(F.UNPACK_ROW_LENGTH),an=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Gi=F.getParameter(F.UNPACK_SKIP_PIXELS),ln=F.getParameter(F.UNPACK_SKIP_ROWS),Es=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ye.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,At),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Rt);const de=A.isDataArrayTexture||A.isData3DTexture,Ke=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const pn=x.get(A),Xe=x.get(H),Je=x.get(pn.__renderTarget),Ro=x.get(Xe.__renderTarget);bt.bindFramebuffer(F.READ_FRAMEBUFFER,Je.__webglFramebuffer),bt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ro.__webglFramebuffer);for(let wi=0;wi<_t;wi++)de&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,x.get(A).__webglTexture,G,Rt+wi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,x.get(H).__webglTexture,ht,xe+wi)),F.blitFramebuffer(At,Pt,mt,dt,Vt,re,mt,dt,F.DEPTH_BUFFER_BIT,F.NEAREST);bt.bindFramebuffer(F.READ_FRAMEBUFFER,null),bt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||x.has(A)){const pn=x.get(A),Xe=x.get(H);bt.bindFramebuffer(F.READ_FRAMEBUFFER,bd),bt.bindFramebuffer(F.DRAW_FRAMEBUFFER,wd);for(let Je=0;Je<_t;Je++)de?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,G,Rt+Je):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,G),Ke?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xe.__webglTexture,ht,xe+Je):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xe.__webglTexture,ht),G!==0?F.blitFramebuffer(At,Pt,mt,dt,Vt,re,mt,dt,F.COLOR_BUFFER_BIT,F.NEAREST):Ke?F.copyTexSubImage3D(ne,ht,Vt,re,xe+Je,At,Pt,mt,dt):F.copyTexSubImage2D(ne,ht,Vt,re,At,Pt,mt,dt);bt.bindFramebuffer(F.READ_FRAMEBUFFER,null),bt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ke?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(ne,ht,Vt,re,xe,mt,dt,_t,ce,Ct,ye.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(ne,ht,Vt,re,xe,mt,dt,_t,ce,ye.data):F.texSubImage3D(ne,ht,Vt,re,xe,mt,dt,_t,ce,Ct,ye):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ht,Vt,re,mt,dt,ce,Ct,ye.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ht,Vt,re,ye.width,ye.height,ce,ye.data):F.texSubImage2D(F.TEXTURE_2D,ht,Vt,re,mt,dt,ce,Ct,ye);F.pixelStorei(F.UNPACK_ROW_LENGTH,jt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,an),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Gi),F.pixelStorei(F.UNPACK_SKIP_ROWS,ln),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Es),ht===0&&H.generateMipmaps&&F.generateMipmap(ne),bt.unbindTexture()},this.initRenderTarget=function(A){x.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),bt.unbindTexture()},this.resetState=function(){L=0,O=0,P=null,bt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class Rn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Rn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],m=n[8],_=i[0],g=i[1],p=i[2],v=i[3],y=i[4],S=i[5],E=i[6],T=i[7],R=i[8];return s[0]=o*_+a*v+l*E,s[1]=o*g+a*y+l*T,s[2]=o*p+a*S+l*R,s[3]=c*_+h*v+d*E,s[4]=c*g+h*y+d*T,s[5]=c*p+h*S+d*R,s[6]=u*_+f*v+m*E,s[7]=u*g+f*y+m*T,s[8]=u*p+f*S+m*R,e}scale(t,e){e===void 0&&(e=new Rn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new b);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3]=t.x,s[7]=t.y,s[11]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*f;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new Rn);const e=3,n=6,i=tv;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const h=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const u=i[s+n*o]/i[s+n*s];c=h;do d=h-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--c)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,m=i*l,_=s*o,g=s*a,p=s*l,v=this.elements;return v[0]=1-(u+m),v[1]=h-p,v[2]=d+g,v[3]=h+p,v[4]=1-(c+m),v[5]=f-_,v[6]=d-g,v[7]=f+_,v[8]=1-(c+u),this}transpose(t){t===void 0&&(t=new Rn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const tv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new b(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new b(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Rn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new b);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new b);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new b),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new b),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new b),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=ev,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=nv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(ch),ch.almostEquals(t,e)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const ev=new b,nv=new b,ch=new b;class fn{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,hh),c=hh),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new fn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=uh,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=uh,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(m<0||f>m)}}const hh=new b,uh=[new b,new b,new b,new b,new b,new b,new b,new b];class dh{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class td{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Pe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=iv,i=sv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Pe);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-s*l,e.y=i*h+o*l+s*a-n*c,e.z=s*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new Pe);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Pe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,d=c*i+l*n-o*s,u=c*s+o*i-a*n,f=-o*n-a*i-l*s;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new Pe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Pe);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,m,_,g;return f=i*l+s*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),m=Math.sin(u),_=Math.sin((1-e)*u)/m,g=Math.sin(e*u)/m):(_=1-e,g=e),n.x=_*i+g*l,n.y=_*s+g*c,n.z=_*o+g*h,n.w=_*a+g*d,n}integrate(t,e,n,i){i===void 0&&(i=new Pe);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*c),i.y+=u*(o*d+a*l-s*h),i.z+=u*(a*d+s*c-o*l),i.w+=u*(-s*l-o*c-a*h),i}}const iv=new b,sv=new b,rv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class yt{constructor(t){t===void 0&&(t={}),this.id=yt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}yt.idCounter=0;yt.types=rv;class Kt{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new Pe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Kt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Kt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),n.vsub(t,i),e.conjugate(fh),fh.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new b),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const fh=new Pe;class $s extends yt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:yt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new b;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];$s.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new b,o=new b;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const h=new b;let d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const _=h.dot(o);_>u&&(u=_,d=m)}const f=[];for(let m=0;m<n.faces[d].length;m++){const _=n.vertices[n.faces[d][m]],g=new b;g.copy(_),s.vmult(g,g),i.vadd(g,g),f.push(g)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new b,h=new b,d=new b,u=new b,f=new b,m=new b;let _=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],c);const v=g.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}else{const p=a?a.length:g.faces.length;for(let v=0;v<p;v++){const y=a?a[v]:v;c.copy(g.faceNormals[y]),n.vmult(c,c);const S=g.testSepAxis(c,t,e,n,i,s);if(S===!1)return!1;S<_&&(_=S,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);const v=g.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(h))}else{const p=l?l.length:t.faces.length;for(let v=0;v<p;v++){const y=l?l[v]:v;h.copy(t.faceNormals[y]),s.vmult(h,h);const S=g.testSepAxis(h,t,e,n,i,s);if(S===!1)return!1;S<_&&(_=S,o.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],f),u.cross(f,m),!m.almostZero()){m.normalize();const y=g.testSepAxis(m,t,e,n,i,s);if(y===!1)return!1;y<_&&(_=y,o.copy(m))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;$s.project(a,t,n,i,aa),$s.project(e,t,s,o,la);const l=aa[0],c=aa[1],h=la[0],d=la[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new b,i=new b;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new b,c=new b,h=new b,d=new b,u=new b,f=new b,m=new b,_=new b,g=this,p=[],v=i,y=p;let S=-1,E=Number.MAX_VALUE;for(let w=0;w<g.faces.length;w++){l.copy(g.faceNormals[w]),n.vmult(l,l);const L=l.dot(t);L<E&&(E=L,S=w)}if(S<0)return;const T=g.faces[S];T.connectedFaces=[];for(let w=0;w<g.faces.length;w++)for(let L=0;L<g.faces[w].length;L++)T.indexOf(g.faces[w][L])!==-1&&w!==S&&T.connectedFaces.indexOf(w)===-1&&T.connectedFaces.push(w);const R=T.length;for(let w=0;w<R;w++){const L=g.vertices[T[w]],O=g.vertices[T[(w+1)%R]];L.vsub(O,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[S]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(L),n.vmult(f,f),e.vadd(f,f);const P=T.connectedFaces[w];m.copy(this.faceNormals[P]);const B=this.getPlaneConstantOfFace(P);_.copy(m),n.vmult(_,_);const U=B-_.dot(e);for(this.clipFaceAgainstPlane(v,y,_,U);v.length;)v.shift();for(;y.length;)v.push(y.shift())}m.copy(this.faceNormals[S]);const I=this.getPlaneConstantOfFace(S);_.copy(m),n.vmult(_,_);const M=I-_.dot(e);for(let w=0;w<v.length;w++){let L=_.dot(v[w])+M;if(L<=s&&(console.log(`clamped: depth=${L} to minDist=${s}`),L=s),L<=o){const O=v[w];if(L<=1e-6){const P={point:O,normal:_,depth:L};a.push(P)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const d=new b;d.copy(c),e.push(d)}else{const d=new b;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new b;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,h,d,u=new b;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);const m=u;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new b;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new b;t.vsub(l,c);const h=a.dot(c),d=new b;s.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=ov;let l=0,c=0;const h=av,d=t.vertices;h.setZero(),Kt.vectorToLocalFrame(n,i,e,a),Kt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const m=d[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const aa=[],la=[];new b;const ov=new b,av=new b;class bo extends yt{constructor(t){super({type:yt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=b,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new $s({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),bo.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)fi.set(s[o][0],s[o][1],s[o][2]),e.vmult(fi,fi),t.vadd(fi,fi),n(fi.x,fi.y,fi.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;Ln[0].set(s.x,s.y,s.z),Ln[1].set(-s.x,s.y,s.z),Ln[2].set(-s.x,-s.y,s.z),Ln[3].set(-s.x,-s.y,-s.z),Ln[4].set(s.x,-s.y,-s.z),Ln[5].set(s.x,s.y,-s.z),Ln[6].set(-s.x,s.y,-s.z),Ln[7].set(s.x,-s.y,s.z);const o=Ln[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Ln[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const fi=new b,Ln=[new b,new b,new b,new b,new b,new b,new b,new b],Yl={DYNAMIC:1,STATIC:2,KINEMATIC:4},jl={AWAKE:0,SLEEPY:1,SLEEPING:2};class vt extends td{constructor(t){t===void 0&&(t={}),super(),this.id=vt.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?vt.STATIC:vt.DYNAMIC,typeof t.type==typeof vt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=vt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new Pe,this.initQuaternion=new Pe,this.previousQuaternion=new Pe,this.interpolatedQuaternion=new Pe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new Rn,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new Rn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new fn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=vt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===vt.SLEEPING&&this.dispatchEvent(vt.wakeupEvent)}sleep(){this.sleepState=vt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===vt.AWAKE&&n<i?(this.sleepState=vt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(vt.sleepyEvent)):e===vt.SLEEPY&&n>i?this.wakeUp():e===vt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(vt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===vt.SLEEPING||this.type===vt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new b,s=new Pe;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=lv,o=cv,a=this.quaternion,l=this.aabb,c=hv;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=uv,i=dv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==vt.DYNAMIC)return;this.sleepState===vt.SLEEPING&&this.wakeUp();const n=fv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==vt.DYNAMIC)return;const n=pv,i=mv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===vt.DYNAMIC&&(this.sleepState===vt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==vt.DYNAMIC)return;this.sleepState===vt.SLEEPING&&this.wakeUp();const n=e,i=gv;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=_v;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==vt.DYNAMIC)return;const n=vv,i=xv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=yv;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),bo.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===vt.DYNAMIC||this.type===vt.KINEMATIC)||this.sleepState===vt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const m=d.elements,_=this.angularFactor,g=l.x*_.x,p=l.y*_.y,v=l.z*_.z;s.x+=t*(m[0]*g+m[1]*p+m[2]*v),s.y+=t*(m[3]*g+m[4]*p+m[5]*v),s.z+=t*(m[6]*g+m[7]*p+m[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}vt.idCounter=0;vt.COLLIDE_EVENT_NAME="collide";vt.DYNAMIC=Yl.DYNAMIC;vt.STATIC=Yl.STATIC;vt.KINEMATIC=Yl.KINEMATIC;vt.AWAKE=jl.AWAKE;vt.SLEEPY=jl.SLEEPY;vt.SLEEPING=jl.SLEEPING;vt.wakeupEvent={type:"wakeup"};vt.sleepyEvent={type:"sleepy"};vt.sleepEvent={type:"sleep"};const lv=new b,cv=new Pe,hv=new fn,uv=new Rn,dv=new Rn;new Rn;const fv=new b,pv=new b,mv=new b,gv=new b,_v=new b,vv=new b,xv=new b,yv=new b;class ed{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&vt.STATIC)!==0||t.sleepState===vt.SLEEPING)&&((e.type&vt.STATIC)!==0||e.sleepState===vt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Mv;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Sv,i=bv,s=wv,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new b;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Mv=new b;new b;new Pe;new b;const Sv={keys:[]},bv=[],wv=[];new b;new b;new b;class Ev extends ed{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class _o{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let nd,id,sd,rd,od,ad,ld;const $l={CLOSEST:1,ANY:2,ALL:4};nd=yt.types.SPHERE;id=yt.types.PLANE;sd=yt.types.BOX;rd=yt.types.CYLINDER;od=yt.types.CONVEXPOLYHEDRON;ad=yt.types.HEIGHTFIELD;ld=yt.types.TRIMESH;class Ce{get[nd](){return this._intersectSphere}get[id](){return this._intersectPlane}get[sd](){return this._intersectBox}get[rd](){return this._intersectConvex}get[od](){return this._intersectConvex}get[ad](){return this._intersectHeightfield}get[ld](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ce.ANY,this.result=new _o,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ce.ANY,this.result=e.result||new _o,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ph),ca.length=0,t.broadphase.aabbQuery(t,ph,ca),this.intersectBodies(ca),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=Tv,s=Av;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Hv(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new b(0,0,1);e.vmult(c,c);const h=new b;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new b,_=new b,g=new b;o.vsub(n,m);const p=-c.dot(m)/f;l.scale(p,_),o.vadd(_,g),this.reportIntersection(c,g,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=Rv;o.from.copy(this.from),o.to.copy(this.to),Kt.pointToLocalFrame(n,e,o.from,o.from),Kt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Cv;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new fn;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let m=c;m<d;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,m,!1),Kt.pointToWorldFrame(n,e,t.pillarOffset,Br),this._intersectConvex(t.pillarConvex,e,Br,i,s,mh),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),Kt.pointToWorldFrame(n,e,t.pillarOffset,Br),this._intersectConvex(t.pillarConvex,e,Br,i,s,mh)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=Pv,m=Lv;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const _=(-h-Math.sqrt(u))/(2*c),g=(-h+Math.sqrt(u))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=Dv,l=gh,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,m=this.from,_=this.to,g=m.distanceTo(_),p=c?c.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<p;y++){const S=c?c[y]:y,E=h[S],T=u[S],R=e,I=n;l.copy(d[E[0]]),R.vmult(l,l),l.vadd(I,l),l.vsub(m,l),R.vmult(T,a);const M=f.dot(a);if(Math.abs(M)<this.precision)continue;const w=a.dot(l)/M;if(!(w<0)){f.scale(w,Qe),Qe.vadd(m,Qe),wn.copy(d[E[0]]),R.vmult(wn,wn),I.vadd(wn,wn);for(let L=1;!v.shouldStop&&L<E.length-1;L++){Dn.copy(d[E[L]]),In.copy(d[E[L+1]]),R.vmult(Dn,Dn),R.vmult(In,In),I.vadd(Dn,Dn),I.vadd(In,In);const O=Qe.distanceTo(m);!(Ce.pointInTriangle(Qe,wn,Dn,In)||Ce.pointInTriangle(Qe,Dn,wn,In))||O>g||this.reportIntersection(a,Qe,s,i,S)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=Iv,l=zv,c=kv,h=gh,d=Nv,u=Fv,f=Uv,m=Bv,_=Ov,g=t.indices;t.vertices;const p=this.from,v=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),Kt.vectorToLocalFrame(n,e,y,d),Kt.pointToLocalFrame(n,e,p,u),Kt.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const S=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let E=0,T=l.length;!this.result.shouldStop&&E!==T;E++){const R=l[E];t.getNormal(R,a),t.getVertex(g[R*3],wn),wn.vsub(u,h);const I=d.dot(a),M=a.dot(h)/I;if(M<0)continue;d.scale(M,Qe),Qe.vadd(u,Qe),t.getVertex(g[R*3+1],Dn),t.getVertex(g[R*3+2],In);const w=Qe.distanceSquared(u);!(Ce.pointInTriangle(Qe,Dn,wn,In)||Ce.pointInTriangle(Qe,wn,Dn,In))||w>S||(Kt.vectorToWorldFrame(e,a,_),Kt.pointToWorldFrame(n,e,Qe,m),this.reportIntersection(_,m,s,i,R))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Ce.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Ce.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case Ce.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Bi),n.vsub(e,Is),t.vsub(e,ha);const s=Bi.dot(Bi),o=Bi.dot(Is),a=Bi.dot(ha),l=Is.dot(Is),c=Is.dot(ha);let h,d;return(h=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&h+d<s*l-o*o}}Ce.CLOSEST=$l.CLOSEST;Ce.ANY=$l.ANY;Ce.ALL=$l.ALL;const ph=new fn,ca=[],Is=new b,ha=new b,Tv=new b,Av=new Pe,Qe=new b,wn=new b,Dn=new b,In=new b;new b;new _o;const mh={faceList:[0]},Br=new b,Rv=new Ce,Cv=[],Pv=new b,Lv=new b,Dv=new b;new b;new b;const gh=new b,Iv=new b,Nv=new b,Fv=new b,Uv=new b,Ov=new b,Bv=new b;new fn;const zv=[],kv=new Kt,Bi=new b,zr=new b;function Hv(r,t,e){e.vsub(r,Bi);const n=Bi.dot(t);return t.scale(n,zr),zr.vadd(r,zr),e.distanceTo(zr)}class fs extends ed{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=i+o;return s-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=i[a];for(l=a+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!fs.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?fs.insertionSortX(t):e===1?fs.insertionSortY(t):e===2&&fs.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const m=a[f],_=m.position.x;t+=_,e+=_*_;const g=m.position.y;n+=g,i+=g*g;const p=m.position.z;s+=p,o+=p*p}const h=e-t*t*c,d=i-n*n*c,u=o-s*s*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class Vv{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class _h{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class hr{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=hr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new _h,this.jacobianElementB=new _h,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,vh),a.scale(h,xh),n.invInertiaWorldSolve.vmult(o,yh),i.invInertiaWorldSolve.vmult(l,Mh),t.multiplyVectors(vh,yh)+e.multiplyVectors(xh,Mh)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,kr),c+=kr.dot(t.rotational),l.vmult(e.rotational,kr),c+=kr.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Gv;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}hr.idCounter=0;const vh=new b,xh=new b,yh=new b,Mh=new b,kr=new b,Gv=new b;class Wv extends hr{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=Xv,c=qv,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=Yv,_=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),g.spatial.copy(p),g.rotational.copy(c),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const v=p.dot(m),y=this.restitution+1,S=y*u.dot(p)-y*h.dot(p)+f.dot(c)-d.dot(l),E=this.computeGiMf();return-v*e-S*n-t*E}getImpactVelocityAlongNormal(){const t=jv,e=$v,n=Zv,i=Kv,s=Jv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Xv=new b,qv=new b,Yv=new b,jv=new b,$v=new b,Zv=new b,Kv=new b,Jv=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Sh extends hr{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Qv,o=tx,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const Qv=new b,tx=new b;class ur{constructor(t,e,n){n=Vv.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ur.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}ur.idCounter=0;class dr{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=dr.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}dr.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new Ce;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new fn;new b;new fn;new b;new b;new b;new b;new b;new b;new b;new fn;new b;new Kt;new fn;class ex{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class nx extends ex{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,f,m,_,g;if(a!==0)for(let S=0;S!==c;S++)l[S].updateSolveMassProperties();const p=sx,v=rx,y=ix;p.length=a,v.length=a,y.length=a;for(let S=0;S!==a;S++){const E=o[S];y[S]=0,v[S]=E.computeB(h),p[S]=1/E.computeC()}if(a!==0){for(let T=0;T!==c;T++){const R=l[T],I=R.vlambda,M=R.wlambda;I.set(0,0,0),M.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let T=0;T!==a;T++){const R=o[T];d=v[T],u=p[T],g=y[T],_=R.computeGWlambda(),f=u*(d-_-R.eps*g),g+f<R.minForce?f=R.minForce-g:g+f>R.maxForce&&(f=R.maxForce-g),y[T]+=f,m+=f>0?f:-f,R.addToWlambda(f)}if(m*m<s)break}for(let T=0;T!==c;T++){const R=l[T],I=R.velocity,M=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),I.vadd(R.vlambda,I),R.wlambda.vmul(R.angularFactor,R.wlambda),M.vadd(R.wlambda,M)}let S=o.length;const E=1/h;for(;S--;)o[S].multiplier=y[S]*E}return n}}const ix=[],sx=[],rx=[];class ox{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class ax extends ox{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const fe={sphereSphere:yt.types.SPHERE,spherePlane:yt.types.SPHERE|yt.types.PLANE,boxBox:yt.types.BOX|yt.types.BOX,sphereBox:yt.types.SPHERE|yt.types.BOX,planeBox:yt.types.PLANE|yt.types.BOX,convexConvex:yt.types.CONVEXPOLYHEDRON,sphereConvex:yt.types.SPHERE|yt.types.CONVEXPOLYHEDRON,planeConvex:yt.types.PLANE|yt.types.CONVEXPOLYHEDRON,boxConvex:yt.types.BOX|yt.types.CONVEXPOLYHEDRON,sphereHeightfield:yt.types.SPHERE|yt.types.HEIGHTFIELD,boxHeightfield:yt.types.BOX|yt.types.HEIGHTFIELD,convexHeightfield:yt.types.CONVEXPOLYHEDRON|yt.types.HEIGHTFIELD,sphereParticle:yt.types.PARTICLE|yt.types.SPHERE,planeParticle:yt.types.PLANE|yt.types.PARTICLE,boxParticle:yt.types.BOX|yt.types.PARTICLE,convexParticle:yt.types.PARTICLE|yt.types.CONVEXPOLYHEDRON,cylinderCylinder:yt.types.CYLINDER,sphereCylinder:yt.types.SPHERE|yt.types.CYLINDER,planeCylinder:yt.types.PLANE|yt.types.CYLINDER,boxCylinder:yt.types.BOX|yt.types.CYLINDER,convexCylinder:yt.types.CONVEXPOLYHEDRON|yt.types.CYLINDER,heightfieldCylinder:yt.types.HEIGHTFIELD|yt.types.CYLINDER,particleCylinder:yt.types.PARTICLE|yt.types.CYLINDER,sphereTrimesh:yt.types.SPHERE|yt.types.TRIMESH,planeTrimesh:yt.types.PLANE|yt.types.TRIMESH};class lx{get[fe.sphereSphere](){return this.sphereSphere}get[fe.spherePlane](){return this.spherePlane}get[fe.boxBox](){return this.boxBox}get[fe.sphereBox](){return this.sphereBox}get[fe.planeBox](){return this.planeBox}get[fe.convexConvex](){return this.convexConvex}get[fe.sphereConvex](){return this.sphereConvex}get[fe.planeConvex](){return this.planeConvex}get[fe.boxConvex](){return this.boxConvex}get[fe.sphereHeightfield](){return this.sphereHeightfield}get[fe.boxHeightfield](){return this.boxHeightfield}get[fe.convexHeightfield](){return this.convexHeightfield}get[fe.sphereParticle](){return this.sphereParticle}get[fe.planeParticle](){return this.planeParticle}get[fe.boxParticle](){return this.boxParticle}get[fe.convexParticle](){return this.convexParticle}get[fe.cylinderCylinder](){return this.convexConvex}get[fe.sphereCylinder](){return this.sphereConvex}get[fe.planeCylinder](){return this.planeConvex}get[fe.boxCylinder](){return this.boxConvex}get[fe.convexCylinder](){return this.convexConvex}get[fe.heightfieldCylinder](){return this.heightfieldCylinder}get[fe.particleCylinder](){return this.particleCylinder}get[fe.sphereTrimesh](){return this.sphereTrimesh}get[fe.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new ax,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Wv(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,_=m.length?m.pop():new Sh(n,i,u*f),g=m.length?m.pop():new Sh(n,i,u*f);return _.bi=g.bi=n,_.bj=g.bj=i,_.minForce=g.minForce=-u*f,_.maxForce=g.maxForce=u*f,_.ri.copy(t.ri),_.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(_.t,g.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=g.enabled=t.enabled,e.push(_,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Li.setZero(),ss.setZero(),rs.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Li.vadd(e.ni,Li),ss.vadd(e.ri,ss),rs.vadd(e.rj,rs)):(Li.vsub(e.ni,Li),ss.vadd(e.rj,ss),rs.vadd(e.ri,rs));const o=1/t;ss.scale(o,n.ri),rs.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Li.normalize(),Li.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=ux,c=dx,h=cx,d=hx;for(let u=0,f=t.length;u!==f;u++){const m=t[u],_=e[u];let g=null;m.material&&_.material&&(g=n.getContactMaterial(m.material,_.material)||null);const p=m.type&vt.KINEMATIC&&_.type&vt.STATIC||m.type&vt.STATIC&&_.type&vt.KINEMATIC||m.type&vt.KINEMATIC&&_.type&vt.KINEMATIC;for(let v=0;v<m.shapes.length;v++){m.quaternion.mult(m.shapeOrientations[v],l),m.quaternion.vmult(m.shapeOffsets[v],h),h.vadd(m.position,h);const y=m.shapes[v];for(let S=0;S<_.shapes.length;S++){_.quaternion.mult(_.shapeOrientations[S],c),_.quaternion.vmult(_.shapeOffsets[S],d),d.vadd(_.position,d);const E=_.shapes[S];if(!(y.collisionFilterMask&E.collisionFilterGroup&&E.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+E.boundingSphereRadius)continue;let T=null;y.material&&E.material&&(T=n.getContactMaterial(y.material,E.material)||null),this.currentContactMaterial=T||g||n.defaultContactMaterial;const R=y.type|E.type,I=this[R];if(I){let M=!1;y.type<E.type?M=I.call(this,y,E,h,d,l,c,m,_,y,E,p):M=I.call(this,E,y,d,h,c,l,_,m,y,E,p),M&&p&&(n.shapeOverlapKeeper.set(y.id,E.id),n.bodyOverlapKeeper.set(m.id,_.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Hr),u.ni.scale(u.ni.dot(Hr),bh),Hr.vsub(bh,u.rj),-Hr.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,m=u.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(l.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}sphereBox(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool,f=Bx;n.vsub(i,Vr),e.getSideNormals(f,o);const m=t.radius;let _=!1;const g=kx,p=Hx,v=Vx;let y=null,S=0,E=0,T=0,R=null;for(let N=0,V=f.length;N!==V&&_===!1;N++){const X=Fx;X.copy(f[N]);const K=X.length();X.normalize();const nt=Vr.dot(X);if(nt<K+m&&nt>0){const st=Ux,rt=Ox;st.copy(f[(N+1)%3]),rt.copy(f[(N+2)%3]);const It=st.length(),se=rt.length();st.normalize(),rt.normalize();const Qt=Vr.dot(st),$=Vr.dot(rt);if(Qt<It&&Qt>-It&&$<se&&$>-se){const Q=Math.abs(nt-K-m);if((R===null||Q<R)&&(R=Q,E=Qt,T=$,y=K,g.copy(X),p.copy(st),v.copy(rt),S++,d))return!0}}}if(S){_=!0;const N=this.createContactEquation(a,l,t,e,c,h);g.scale(-m,N.ri),N.ni.copy(g),N.ni.negate(N.ni),g.scale(y,g),p.scale(E,p),g.vadd(p,g),v.scale(T,v),g.vadd(v,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let I=u.get();const M=zx;for(let N=0;N!==2&&!_;N++)for(let V=0;V!==2&&!_;V++)for(let X=0;X!==2&&!_;X++)if(I.set(0,0,0),N?I.vadd(f[0],I):I.vsub(f[0],I),V?I.vadd(f[1],I):I.vsub(f[1],I),X?I.vadd(f[2],I):I.vsub(f[2],I),i.vadd(I,M),M.vsub(n,M),M.lengthSquared()<m*m){if(d)return!0;_=!0;const K=this.createContactEquation(a,l,t,e,c,h);K.ri.copy(M),K.ri.normalize(),K.ni.copy(K.ri),K.ri.scale(m,K.ri),K.rj.copy(I),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(l.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}u.release(I),I=null;const w=u.get(),L=u.get(),O=u.get(),P=u.get(),B=u.get(),U=f.length;for(let N=0;N!==U&&!_;N++)for(let V=0;V!==U&&!_;V++)if(N%3!==V%3){f[V].cross(f[N],w),w.normalize(),f[N].vadd(f[V],L),O.copy(n),O.vsub(L,O),O.vsub(i,O);const X=O.dot(w);w.scale(X,P);let K=0;for(;K===N%3||K===V%3;)K++;B.copy(n),B.vsub(P,B),B.vsub(L,B),B.vsub(i,B);const nt=Math.abs(X),st=B.length();if(nt<f[K].length()&&st<m){if(d)return!0;_=!0;const rt=this.createContactEquation(a,l,t,e,c,h);L.vadd(P,rt.rj),rt.rj.copy(rt.rj),B.negate(rt.ni),rt.ni.normalize(),rt.ri.copy(rt.rj),rt.ri.vadd(i,rt.ri),rt.ri.vsub(n,rt.ri),rt.ri.normalize(),rt.ri.scale(m,rt.ri),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),rt.rj.vadd(i,rt.rj),rt.rj.vsub(l.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}u.release(w,L,O,P,B)}planeBox(t,e,n,i,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}convexConvex(t,e,n,i,s,o,a,l,c,h,d,u,f){const m=iy;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,m,u,f)){const _=[],g=sy;t.clipAgainstHull(n,s,e,i,o,m,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(d)return!0;const y=this.createContactEquation(a,l,t,e,c,h),S=y.ri,E=y.rj;m.negate(y.ni),_[v].normal.negate(g),g.scale(_[v].depth,g),_[v].point.vadd(g,S),E.copy(_[v].point),S.vsub(n,S),E.vsub(i,E),S.vadd(n,S),S.vsub(a.position,S),E.vadd(i,E),E.vsub(l.position,E),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,Gx);const f=e.faceNormals,m=e.faces,_=e.vertices,g=t.radius;let p=!1;for(let v=0;v!==_.length;v++){const y=_[v],S=Yx;o.vmult(y,S),i.vadd(S,S);const E=qx;if(S.vsub(n,E),E.lengthSquared()<g*g){if(d)return!0;p=!0;const T=this.createContactEquation(a,l,t,e,c,h);T.ri.copy(E),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(g,T.ri),S.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let v=0,y=m.length;v!==y&&p===!1;v++){const S=f[v],E=m[v],T=jx;o.vmult(S,T);const R=$x;o.vmult(_[E[0]],R),R.vadd(i,R);const I=Zx;T.scale(-g,I),n.vadd(I,I);const M=Kx;I.vsub(R,M);const w=M.dot(T),L=Jx;if(n.vsub(R,L),w<0&&L.dot(T)>0){const O=[];for(let P=0,B=E.length;P!==B;P++){const U=u.get();o.vmult(_[E[P]],U),i.vadd(U,U),O.push(U)}if(Nx(O,T,n)){if(d)return!0;p=!0;const P=this.createContactEquation(a,l,t,e,c,h);T.scale(-g,P.ri),T.negate(P.ni);const B=u.get();T.scale(-w,B);const U=u.get();T.scale(-g,U),n.vsub(i,P.rj),P.rj.vadd(U,P.rj),P.rj.vadd(B,P.rj),P.rj.vadd(i,P.rj),P.rj.vsub(l.position,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),u.release(B),u.release(U),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let N=0,V=O.length;N!==V;N++)u.release(O[N]);return}else for(let P=0;P!==E.length;P++){const B=u.get(),U=u.get();o.vmult(_[E[(P+1)%E.length]],B),o.vmult(_[E[(P+2)%E.length]],U),i.vadd(B,B),i.vadd(U,U);const N=Wx;U.vsub(B,N);const V=Xx;N.unit(V);const X=u.get(),K=u.get();n.vsub(B,K);const nt=K.dot(V);V.scale(nt,X),X.vadd(B,X);const st=u.get();if(X.vsub(n,st),nt>0&&nt*nt<N.lengthSquared()&&st.lengthSquared()<g*g){if(d)return!0;const rt=this.createContactEquation(a,l,t,e,c,h);X.vsub(i,rt.rj),X.vsub(n,rt.ni),rt.ni.normalize(),rt.ni.scale(g,rt.ri),rt.rj.vadd(i,rt.rj),rt.rj.vsub(l.position,rt.rj),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(let It=0,se=O.length;It!==se;It++)u.release(O[It]);u.release(B),u.release(U),u.release(X),u.release(st),u.release(K);return}u.release(B),u.release(U),u.release(X),u.release(st),u.release(K)}for(let P=0,B=O.length;P!==B;P++)u.release(O[P])}}}planeConvex(t,e,n,i,s,o,a,l,c,h,d){const u=Qx,f=ty;f.set(0,0,1),s.vmult(f,f);let m=0;const _=ey;for(let g=0;g!==e.vertices.length;g++)if(u.copy(e.vertices[g]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,_),f.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h),y=ny;f.scale(f.dot(_),y),u.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(f),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,f=t.radius,m=e.elementSize,_=gy,g=my;Kt.pointToLocalFrame(i,o,n,g);let p=Math.floor((g.x-f)/m)-1,v=Math.ceil((g.x+f)/m)+1,y=Math.floor((g.y-f)/m)-1,S=Math.ceil((g.y+f)/m)+1;if(v<0||S<0||p>u.length||y>u[0].length)return;p<0&&(p=0),v<0&&(v=0),y<0&&(y=0),S<0&&(S=0),p>=u.length&&(p=u.length-1),v>=u.length&&(v=u.length-1),S>=u[0].length&&(S=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const E=[];e.getRectMinMax(p,y,v,S,E);const T=E[0],R=E[1];if(g.z-f>R||g.z+f<T)return;const I=this.result;for(let M=p;M<v;M++)for(let w=y;w<S;w++){const L=I.length;let O=!1;if(e.getConvexTrianglePillar(M,w,!1),Kt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,l,t,e,d)),d&&O||(e.getConvexTrianglePillar(M,w,!0),Kt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,l,t,e,d)),d&&O))return!0;if(I.length-L>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,f=e.elementSize,m=t.boundingSphereRadius,_=fy,g=py,p=dy;Kt.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-m)/f)-1,y=Math.ceil((p.x+m)/f)+1,S=Math.floor((p.y-m)/f)-1,E=Math.ceil((p.y+m)/f)+1;if(y<0||E<0||v>u.length||S>u[0].length)return;v<0&&(v=0),y<0&&(y=0),S<0&&(S=0),E<0&&(E=0),v>=u.length&&(v=u.length-1),y>=u.length&&(y=u.length-1),E>=u[0].length&&(E=u[0].length-1),S>=u[0].length&&(S=u[0].length-1);const T=[];e.getRectMinMax(v,S,y,E,T);const R=T[0],I=T[1];if(!(p.z-m>I||p.z+m<R))for(let M=v;M<y;M++)for(let w=S;w<E;w++){let L=!1;if(e.getConvexTrianglePillar(M,w,!1),Kt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,l,null,null,d,g,null)),d&&L||(e.getConvexTrianglePillar(M,w,!0),Kt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,l,null,null,d,g,null)),d&&L))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,h,d){const u=ly;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const m=this.createContactEquation(l,a,e,t,c,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,h,d){const u=ry;u.set(0,0,1),a.quaternion.vmult(u,u);const f=oy;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(l,a,e,t,c,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const g=ay;u.scale(u.dot(i),g),i.vsub(g,g),_.rj.copy(g),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexParticle(t,e,n,i,s,o,a,l,c,h,d){let u=-1;const f=hy,m=uy;let _=null;const g=cy;if(g.copy(i),g.vsub(n,g),s.conjugate(wh),wh.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,v=t.faces.length;p!==v;p++){const y=[t.worldVertices[t.faces[p][0]]],S=t.worldFaceNormals[p];i.vsub(y[0],Eh);const E=-S.dot(Eh);if(_===null||Math.abs(E)<Math.abs(_)){if(d)return!0;_=E,u=p,f.copy(S)}}if(u!==-1){const p=this.createContactEquation(l,a,e,t,c,h);f.scale(_,m),m.vadd(i,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,y=p.rj;v.vadd(i,v),v.vsub(l.position,v),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,h,d)}particleCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,s,l,a,c,h,d)}sphereTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=yx,f=Mx,m=Sx,_=bx,g=wx,p=Ex,v=Cx,y=xx,S=_x,E=Px;Kt.pointToLocalFrame(i,o,n,g);const T=t.radius;v.lowerBound.set(g.x-T,g.y-T,g.z-T),v.upperBound.set(g.x+T,g.y+T,g.z+T),e.getTrianglesInAABB(v,E);const R=vx,I=t.radius*t.radius;for(let P=0;P<E.length;P++)for(let B=0;B<3;B++)if(e.getVertex(e.indices[E[P]*3+B],R),R.vsub(g,S),S.lengthSquared()<=I){if(y.copy(R),Kt.pointToWorldFrame(i,o,y,R),R.vsub(n,S),d)return!0;let U=this.createContactEquation(a,l,t,e,c,h);U.ni.copy(S),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(R),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let P=0;P<E.length;P++)for(let B=0;B<3;B++){e.getVertex(e.indices[E[P]*3+B],u),e.getVertex(e.indices[E[P]*3+(B+1)%3],f),f.vsub(u,m),g.vsub(f,p);const U=p.dot(m);g.vsub(u,p);let N=p.dot(m);if(N>0&&U<0&&(g.vsub(u,p),_.copy(m),_.normalize(),N=p.dot(_),_.scale(N,p),p.vadd(u,p),p.distanceTo(g)<t.radius)){if(d)return!0;const X=this.createContactEquation(a,l,t,e,c,h);p.vsub(g,X.ni),X.ni.normalize(),X.ni.scale(t.radius,X.ri),X.ri.vadd(n,X.ri),X.ri.vsub(a.position,X.ri),Kt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,X.rj),Kt.vectorToWorldFrame(o,X.ni,X.ni),Kt.vectorToWorldFrame(o,X.ri,X.ri),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}}const M=Tx,w=Ax,L=Rx,O=gx;for(let P=0,B=E.length;P!==B;P++){e.getTriangleVertices(E[P],M,w,L),e.getNormal(E[P],O),g.vsub(M,p);let U=p.dot(O);if(O.scale(U,p),g.vsub(p,p),U=p.distanceTo(g),Ce.pointInTriangle(p,M,w,L)&&U<t.radius){if(d)return!0;let N=this.createContactEquation(a,l,t,e,c,h);p.vsub(g,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),Kt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,N.rj),Kt.vectorToWorldFrame(o,N.ni,N.ni),Kt.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}E.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=new b,f=fx;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);const _=new b;_.copy(u),Kt.pointToWorldFrame(i,o,_,u);const g=px;if(u.vsub(n,g),f.dot(g)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h);v.ni.copy(f);const y=mx;f.scale(g.dot(f),y),u.vsub(y,y),v.ri.copy(y),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Li=new b,ss=new b,rs=new b,cx=new b,hx=new b,ux=new Pe,dx=new Pe,fx=new b,px=new b,mx=new b,gx=new b,_x=new b;new b;const vx=new b,xx=new b,yx=new b,Mx=new b,Sx=new b,bx=new b,wx=new b,Ex=new b,Tx=new b,Ax=new b,Rx=new b,Cx=new fn,Px=[],Hr=new b,bh=new b,Lx=new b,Dx=new b,Ix=new b;function Nx(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Lx;r[(s+1)%i].vsub(o,a);const l=Dx;a.cross(t,l);const c=Ix;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Vr=new b,Fx=new b,Ux=new b,Ox=new b,Bx=[new b,new b,new b,new b,new b,new b],zx=new b,kx=new b,Hx=new b,Vx=new b,Gx=new b,Wx=new b,Xx=new b,qx=new b,Yx=new b,jx=new b,$x=new b,Zx=new b,Kx=new b,Jx=new b;new b;new b;const Qx=new b,ty=new b,ey=new b,ny=new b,iy=new b,sy=new b,ry=new b,oy=new b,ay=new b,ly=new b,wh=new Pe,cy=new b;new b;const hy=new b,Eh=new b,uy=new b,dy=new b,fy=new b,py=[0],my=new b,gy=new b;class Th{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Ah(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Ah(e,h)}}}function Ah(r,t){r.push((t&4294901760)>>16,t&65535)}const ua=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class _y{constructor(){this.data={keys:[]}}get(t,e){const n=ua(t,e);return this.data[n]}set(t,e,n){const i=ua(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=ua(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class vy extends td{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Ev,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new nx,this.constraints=[],this.narrowphase=new lx(this),this.collisionMatrix=new dh,this.collisionMatrixPrevious=new dh,this.bodyOverlapKeeper=new Th,this.shapeOverlapKeeper=new Th,this.contactmaterials=[],this.contactMaterialTable=new _y,this.defaultMaterial=new dr("default"),this.defaultContactMaterial=new ur(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof _o?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Ce.ALL,n.from=t,n.to=e,n.callback=i,da.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Ce.ANY,n.from=t,n.to=e,n.result=i,da.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Ce.CLOSEST,n.from=t,n.to=e,n.result=i,da.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof vt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=De.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=De.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(De.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=by,i=wy,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=vt.DYNAMIC;let u=-1/0;const f=this.constraints,m=Sy;l.length();const _=l.x,g=l.y,p=l.z;let v=0;for(c&&(u=De.now()),v=0;v!==s;v++){const P=o[v];if(P.type===d){const B=P.force,U=P.mass;B.x+=U*_,B.y+=U*g,B.z+=U*p}}for(let P=0,B=this.subsystems.length;P!==B;P++)this.subsystems[P].update();c&&(u=De.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=De.now()-u);let y=f.length;for(v=0;v!==y;v++){const P=f[v];if(!P.collideConnected)for(let B=n.length-1;B>=0;B-=1)(P.bodyA===n[B]&&P.bodyB===i[B]||P.bodyB===n[B]&&P.bodyA===i[B])&&(n.splice(B,1),i.splice(B,1))}this.collisionMatrixTick(),c&&(u=De.now());const S=My,E=e.length;for(v=0;v!==E;v++)S.push(e[v]);e.length=0;const T=this.frictionEquations.length;for(v=0;v!==T;v++)m.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,S,this.frictionEquations,m),c&&(h.narrowphase=De.now()-u),c&&(u=De.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const R=e.length;for(let P=0;P!==R;P++){const B=e[P],U=B.bi,N=B.bj,V=B.si,X=B.sj;let K;if(U.material&&N.material?K=this.getContactMaterial(U.material,N.material)||this.defaultContactMaterial:K=this.defaultContactMaterial,K.friction,U.material&&N.material&&(U.material.friction>=0&&N.material.friction>=0&&U.material.friction*N.material.friction,U.material.restitution>=0&&N.material.restitution>=0&&(B.restitution=U.material.restitution*N.material.restitution)),a.addEquation(B),U.allowSleep&&U.type===vt.DYNAMIC&&U.sleepState===vt.SLEEPING&&N.sleepState===vt.AWAKE&&N.type!==vt.STATIC){const nt=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),st=N.sleepSpeedLimit**2;nt>=st*2&&(U.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===vt.DYNAMIC&&N.sleepState===vt.SLEEPING&&U.sleepState===vt.AWAKE&&U.type!==vt.STATIC){const nt=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),st=U.sleepSpeedLimit**2;nt>=st*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,N,!0),this.collisionMatrixPrevious.get(U,N)||(Ns.body=N,Ns.contact=B,U.dispatchEvent(Ns),Ns.body=U,N.dispatchEvent(Ns)),this.bodyOverlapKeeper.set(U.id,N.id),this.shapeOverlapKeeper.set(V.id,X.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=De.now()-u,u=De.now()),v=0;v!==s;v++){const P=o[v];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(y=f.length,v=0;v!==y;v++){const P=f[v];P.update();for(let B=0,U=P.equations.length;B!==U;B++){const N=P.equations[B];a.addEquation(N)}}a.solve(t,this),c&&(h.solve=De.now()-u),a.removeAllEquations();const I=Math.pow;for(v=0;v!==s;v++){const P=o[v];if(P.type&d){const B=I(1-P.linearDamping,t),U=P.velocity;U.scale(B,U);const N=P.angularVelocity;if(N){const V=I(1-P.angularDamping,t);N.scale(V,N)}}}this.dispatchEvent(yy),c&&(u=De.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(t,w,L);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=De.now()-u),this.stepnumber+=1,this.dispatchEvent(xy);let O=!0;if(this.allowSleep)for(O=!1,v=0;v!==s;v++){const P=o[v];P.sleepTick(this.time),P.sleepState!==vt.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Kn,Jn),t){for(let s=0,o=Kn.length;s<o;s+=2)Fs.bodyA=this.getBodyById(Kn[s]),Fs.bodyB=this.getBodyById(Kn[s+1]),this.dispatchEvent(Fs);Fs.bodyA=Fs.bodyB=null}if(e){for(let s=0,o=Jn.length;s<o;s+=2)Us.bodyA=this.getBodyById(Jn[s]),Us.bodyB=this.getBodyById(Jn[s+1]),this.dispatchEvent(Us);Us.bodyA=Us.bodyB=null}Kn.length=Jn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Kn,Jn),n){for(let s=0,o=Kn.length;s<o;s+=2){const a=this.getShapeById(Kn[s]),l=this.getShapeById(Kn[s+1]);Qn.shapeA=a,Qn.shapeB=l,a&&(Qn.bodyA=a.body),l&&(Qn.bodyB=l.body),this.dispatchEvent(Qn)}Qn.bodyA=Qn.bodyB=Qn.shapeA=Qn.shapeB=null}if(i){for(let s=0,o=Jn.length;s<o;s+=2){const a=this.getShapeById(Jn[s]),l=this.getShapeById(Jn[s+1]);ti.shapeA=a,ti.shapeB=l,a&&(ti.bodyA=a.body),l&&(ti.bodyB=l.body),this.dispatchEvent(ti)}ti.bodyA=ti.bodyB=ti.shapeA=ti.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new fn;const da=new Ce,De=globalThis.performance||{};if(!De.now){let r=Date.now();De.timing&&De.timing.navigationStart&&(r=De.timing.navigationStart),De.now=()=>Date.now()-r}new b;const xy={type:"postStep"},yy={type:"preStep"},Ns={type:vt.COLLIDE_EVENT_NAME,body:null,contact:null},My=[],Sy=[],by=[],wy=[],Kn=[],Jn=[],Fs={type:"beginContact",bodyA:null,bodyB:null},Us={type:"endContact",bodyA:null,bodyB:null},Qn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ti={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ey=9.81,Ty=Math.PI*2,Ay=[{angleDeg:0,wavelength:34,amplitude:.24,pinch:.8,phase:0},{angleDeg:22,wavelength:22,amplitude:.14,pinch:.9,phase:1.7},{angleDeg:-30,wavelength:14,amplitude:.09,pinch:1,phase:4.1},{angleDeg:50,wavelength:9,amplitude:.06,pinch:1,phase:2.6},{angleDeg:-65,wavelength:6,amplitude:.045,pinch:1,phase:5.3},{angleDeg:80,wavelength:4,amplitude:.03,pinch:1,phase:.9}];function Ry(r){const t=Math.hypot(r.x,r.z),e=t>1e-6?r.x/t:0,n=t>1e-6?r.z/t:1,i=Ay.map(({angleDeg:o,wavelength:a,amplitude:l,pinch:c,phase:h})=>{const d=o*Math.PI/180,u=Math.cos(d),f=Math.sin(d),m=Ty/a,_=Math.sqrt(Ey*m);return Object.freeze({direction:Object.freeze({x:e*u-n*f,z:e*f+n*u}),wavelength:a,amplitude:l,steepness:c*m*l,speed:_/m,k:m,omega:_,phase:h})}),s=i.reduce((o,a)=>o+a.steepness,0);if(s>=1)throw new Error(`Wave steepness sum ${s} would fold the surface`);return Object.freeze(i)}function cd(r,t,e,n,i={}){let s=0,o=0,a=0,l=0,c=0,h=0,d=0,u=0;for(const p of r){const{direction:v,k:y,omega:S,amplitude:E,steepness:T,phase:R}=p,I=y*(v.x*t+v.z*e)-S*n+R,M=Math.sin(I),w=Math.cos(I),L=T/y*w;s+=v.x*L,o+=E*M,a+=v.z*L;const O=T*M;l+=O*v.x*v.x,c+=O*v.x*v.z,h+=O*v.z*v.z;const P=E*y*w;d+=P*v.x,u+=P*v.z}const f=-(d*(1-h)+c*u),m=(1-l)*(1-h)-c*c,_=-(u*(1-l)+d*c),g=Math.hypot(f,m,_);return i.x=s,i.y=o,i.z=a,i.nx=f/g,i.ny=m/g,i.nz=_/g,i}function zi(r,t,e,n,i=4){let s=t,o=e,a=0;for(let l=0;l<=i;l++){let c=0,h=0;a=0;for(const d of r){const{direction:u,k:f,omega:m,amplitude:_,steepness:g,phase:p}=d,v=f*(u.x*s+u.z*o)-m*n+p,y=g/f*Math.cos(v);c+=u.x*y,h+=u.z*y,a+=_*Math.sin(v)}s=t-c,o=e-h}return a}function ei(r){return Number.isInteger(r)?r.toFixed(1):String(r)}function Cy(r){const t=r.reduce((s,o)=>s+o.amplitude,0),e=r.reduce((s,o)=>s+o.steepness,0),n=r.map((s,o)=>[`const vec2 WAVE${o}_DIRECTION = vec2(${ei(s.direction.x)}, ${ei(s.direction.z)});`,`const float WAVE${o}_K = ${ei(s.k)};`,`const float WAVE${o}_OMEGA = ${ei(s.omega)};`,`const float WAVE${o}_AMPLITUDE = ${ei(s.amplitude)};`,`const float WAVE${o}_STEEPNESS = ${ei(s.steepness)};`,`const float WAVE${o}_PHASE = ${ei(s.phase)};`].join(`
`)).join(`
`),i=r.map((s,o)=>`    gerstnerAccumulate(p, t, WAVE${o}_DIRECTION, WAVE${o}_K, WAVE${o}_OMEGA, WAVE${o}_AMPLITUDE, WAVE${o}_STEEPNESS, WAVE${o}_PHASE, displacement, sinTerms, cosTerms);`).join(`
`);return`
#define WAVE_COUNT ${r.length}
#define WAVE_AMPLITUDE_SUM ${ei(t)}
#define WAVE_STEEPNESS_SUM ${ei(e)}

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
`}const Os=Math.PI/180,bl={gommier:{id:"gommier",name:"Gommier",tagline:"A hollowed gum-tree dugout with planked sides: light, narrow and the quickest to capsize.",steeringLabel:"Hinged rudder, one barreur",hull:{length:7.5,beam:1.3,depth:.68,draft:.26,planking:.045,floor:.06,flare:.18,maxBeamAt:.44,sternBeam:.34,bowSheerRise:.42,sternSheerRise:.16,bowRocker:.4,sternRocker:.12,stemRake:.35,transomRake:.12,veeFore:.85,veeAft:.35,stations:75},thwarts:[2.3,1.2,-.5,-2.2],rig:{mastStation:1.2,mastHeight:6.4,mastRake:.05,mastRadius:[.065,.035],sail:{tack:[0,.95,-.07],throat:[0,5.7,-.07],peak:[0,6.25,-2.75],clew:[0,1.05,-3.05],spritHeel:[-.06,1.3,-.06],belly:.09}},livery:{hull:{paint:16040222,stripe:13771562,pinstripe:1789852,interior:4862242,wood:9067060},spar:12752227,pole:13214315,sail:{base:15986144,blocks:[{u:[0,1],v:[.06,.22],color:1681320},{u:[.1,.6],v:[.48,.68],color:15885370},{u:[.64,.92],v:[.48,.68],color:3054927},{u:[.1,.92],v:[.78,.84],color:13771562}]},kit:{shirt:2071893,shorts:16040222,cap:16184298}},physics:{mass:500,boxHalfExtents:[.5,.25,1.5],sailPower:5,lateralDamping:5e3,hullDrag:2},steering:{type:"rudder",rate:2.5,maxAngle:Math.PI/4,yawRateAtRest:.15,turnRadius:8,maxYawRate:.6,tillerLength:.85},crew:{poleLength:3,dresseurStations:[.75,.2,-.35,-.9,-1.45,-2,-2.55],sheetHand:{z:-1.18,lever:.22},helm:{z:-3.05,lever:.26},bailer:{z:1.8}},balance:{crewMass:85,heelForceScale:8.5,hullRollInertia:500,rollDamping:12e3,hullRightingArm:.25,capsizeAngle:38*Os,targetHeel:10*Os,slideSpeed:.7,reactionTime:.4,heelGain:14e3,heelRateGain:5e3,transferTime:.7,transferStagger:.15}},yole:{id:"yole",name:"Yole ronde",tagline:"The 10.5 m planked racer of the Tour des Yoles: huge sail, nine on the bwa dressé.",steeringLabel:"Steering paddle, patron + 2 aides",hull:{length:10.5,beam:1.9,depth:.86,draft:.38,planking:.03,floor:.07,flare:.32,maxBeamAt:.6,sternBeam:.2,bowSheerRise:.74,sternSheerRise:.06,bowRocker:.45,sternRocker:.18,stemRake:.9,transomRake:.1,veeFore:.9,veeAft:.75,stations:90},thwarts:[3.6,1.6,-.45,-2.4],rig:{mastStation:3,mastHeight:9,mastRake:-.07,mastRadius:[.09,.045],sail:{tack:[0,1.05,-.09],throat:[0,8.3,-.09],peak:[0,9.2,-5.6],clew:[0,1.25,-6.3],spritHeel:[-.08,1.15,-.08],belly:.1}},livery:{hull:{paint:2056127,stripe:16052714,pinstripe:16040222,interior:4008478,wood:10119742},spar:8176194,pole:13806964,sail:{base:2830134,blocks:[{u:[.2,.8],v:[.08,.17],color:15921906},{u:[.08,.92],v:[.28,.42],color:16765503},{u:[.08,.55],v:[.56,.74],color:2275552},{u:[.59,.92],v:[.56,.74],color:10146107},{u:[.08,.92],v:[.84,.88],color:14689835}]},kit:{shirt:14689835,shorts:16052714,cap:16184298}},physics:{mass:700,boxHalfExtents:[.75,.3,2.1],sailPower:8.5,lateralDamping:7e3,hullDrag:2},steering:{type:"paddle",rate:.55,maxAngle:.3,yawRateAtRest:.1,turnRadius:13,maxYawRate:.42,inboardLength:1.7,shaftLength:4.4,bladeLength:2,slope:20*Os},crew:{poleLength:4,dresseurStations:[2.5,1.85,1.2,.55,-.1,-.75,-1.4,-2.05,-2.7],sheetHand:{z:-3.25,lever:.2},paddleAides:[.5,1.05],bailer:{z:3.75}},balance:{crewMass:85,heelForceScale:5,hullRollInertia:1400,rollDamping:2e4,hullRightingArm:.3,capsizeAngle:42*Os,targetHeel:9*Os,slideSpeed:.8,reactionTime:.4,heelGain:22e3,heelRateGain:8e3,transferTime:.7,transferStagger:.15}}};function Py({crew:r,steering:t}){const e=t.type==="rudder"?1:1+r.paddleAides.length;return{dresseurs:r.dresseurStations.length,steering:e,total:r.dresseurStations.length+e+2}}const rr=[1,.935,.87,.83,.8,.72,.62,.52,.42,.32,.23,.15,.085,.035,.008,0],Ws=rr.concat(rr.slice(0,-1).reverse()),Ly=.87,Rh={from:.8,to:.83},sn={paint:0,stripe:1,pinstripe:2,interior:3,wood:4},Dy=new D(0,1,0),Ch=new D,Ph=new D,Lh=new D;function wo(r,t){const{length:e,beam:n,depth:i,maxBeamAt:s,sternBeam:o}=r,{lerp:a,smoothstep:l}=Ge,c=Math.max(0,(t-.5)/.5),h=Math.max(0,(.5-t)/.5),d=t>=s?1-Math.pow((t-s)/(1-s),2.2):o+(1-o)*(1-Math.pow((s-t)/s,2.4));return{z:a(-e/2+r.transomRake,e/2-r.stemRake,t),halfBeam:n/2*d,keel:r.bowRocker*Math.pow(Math.max(0,(t-.62)/.38),2)+r.sternRocker*Math.pow(Math.max(0,(.2-t)/.2),2),sheer:i+r.bowSheerRise*Math.pow(c,2.2)+r.sternSheerRise*Math.pow(h,2.5),vee:r.veeFore*l(t,.55,1)+r.veeAft*(1-l(t,0,.3)),rake:r.stemRake*l(t,.8,1)-r.transomRake*(1-l(t,0,.15))}}function or(r,t){const e=-r.length/2+r.transomRake,n=r.length-r.transomRake-r.stemRake;return wo(r,Ge.clamp((t-e)/n,0,1))}function Iy(r){return Array.from({length:r.stations+1},(t,e)=>wo(r,e/r.stations))}function Mi(r,t,e,n,i=!1){const s=i?Math.max(0,t.halfBeam-r.planking):t.halfBeam,o=i?Math.min(t.keel+r.floor,t.sheer-.04):t.keel,a=(1-r.flare)*Math.sqrt(1-Math.pow(1-e,2.4))+r.flare*e,l=s*Ge.lerp(a,e,t.vee),c=o+(t.sheer-o)*e,h=(c-t.keel)/(t.sheer-t.keel);return new D(n*l,c,t.z+t.rake*h)}function Ny(r,t,e){return Ws.map((n,i)=>Mi(r,t,n,i<rr.length?1:-1,e))}function hd(r,t,e){let n=Mi(r,t,0,1,!0);for(let i=rr.length-2;i>=0;i--){const s=Mi(r,t,rr[i],1,!0);if(s.y>=e){const o=(e-n.y)/Math.max(s.y-n.y,1e-6);return Ge.lerp(n.x,s.x,o)}n=s}return n.x}function Fy(r){const t=Math.min(Ws[r],Ws[r+1]),e=Math.max(Ws[r],Ws[r+1]);return t>=Ly?sn.stripe:t>=Rh.from&&e<=Rh.to?sn.pinstripe:sn.paint}function Uy(r,t){const e=new ud,n=t[0],i=(o,a)=>Ny(r,o,a),s=(o,a,l)=>Mi(r,o,1,a,l);return e.addGrid(t.map(o=>i(o,!1)),Fy),e.addGrid(t.map(o=>i(o,!0)),()=>sn.interior,!0),e.addGrid(t.map(o=>[s(o,1,!0),s(o,1,!1)]),()=>sn.wood),e.addGrid(t.map(o=>[s(o,-1,!1),s(o,-1,!0)]),()=>sn.wood),e.addFan(Mi(r,n,1,0),i(n,!1),sn.paint),e.addFan(Mi(r,n,1,0,!0),i(n,!0),sn.interior,!0),e.build()}function Oy(r,t){const e=new ud;return e.addGrid(t.map(n=>[Mi(r,n,1,-1,!0),Mi(r,n,1,1,!0)]),()=>0),e.build()}function By({tack:r,throat:t,peak:e,clew:n},i,s=16,o=20){const a=[],l=[],c=[],h=new D,d=new D,u=new D;for(let m=0;m<=o;m++){const _=m/o;h.lerpVectors(r,t,_),d.lerpVectors(n,e,_);const g=i*h.distanceTo(d)*(.75+.25*Math.sin(Math.PI*_));for(let p=0;p<=s;p++){const v=p/s;u.lerpVectors(h,d,v),u.x+=g*Math.sin(Math.PI*Math.pow(v,.85)),a.push(u.x,u.y,u.z),l.push(v,_)}}for(let m=0;m<o;m++)for(let _=0;_<s;_++){const g=m*(s+1)+_,p=g+1,v=g+s+1,y=v+1;c.push(g,p,v,p,y,v)}const f=new we;return f.setAttribute("position",new Zt(a,3)),f.setAttribute("uv",new Zt(l,2)),f.setIndex(c),f.computeVertexNormals(),f}function Dh(r,t,e,n,i){const s=new D().subVectors(t,r),o=new ae(new Vn(n,e,s.length(),12),i);return o.position.lerpVectors(r,t,.5),o.quaternion.setFromUnitVectors(Dy,s.normalize()),o.castShadow=!0,o.receiveShadow=!0,o}class ud{constructor(){this.positions=[],this.batches=new Map}addVertex(t){return this.positions.push(t.x,t.y,t.z),this.positions.length/3-1}addTriangle(t,e,n,i){Ph.fromArray(this.positions,n*3).sub(Ch.fromArray(this.positions,e*3)),Lh.fromArray(this.positions,i*3).sub(Ch),!(Ph.cross(Lh).lengthSq()<1e-14)&&(this.batches.has(t)||this.batches.set(t,[]),this.batches.get(t).push(e,n,i))}addGrid(t,e,n=!1){const i=t.map(s=>s.map(o=>this.addVertex(o)));for(let s=0;s<i.length-1;s++)for(let o=0;o<i[s].length-1;o++){const a=e(o),l=i[s][o],c=i[s+1][o],h=i[s+1][o+1],d=i[s][o+1];n?(this.addTriangle(a,l,d,c),this.addTriangle(a,c,d,h)):(this.addTriangle(a,l,c,d),this.addTriangle(a,c,h,d))}}addFan(t,e,n,i=!1){const s=this.addVertex(t),o=e.map(a=>this.addVertex(a));for(let a=0;a<o.length-1;a++)i?this.addTriangle(n,s,o[a+1],o[a]):this.addTriangle(n,s,o[a],o[a+1])}build(){const t=new we;t.setAttribute("position",new Zt(this.positions,3));const e=[];for(const[n,i]of[...this.batches].sort(([s],[o])=>s-o)){t.addGroup(e.length,i.length,n);for(const s of i)e.push(s)}return t.setIndex(e),t.computeVertexNormals(),t}}const zy=256;function ky(r){const t={roughness:.42,clearcoat:.5,clearcoatRoughness:.3},e=[];return e[sn.paint]=new js({color:r.paint,...t}),e[sn.stripe]=new js({color:r.stripe,...t}),e[sn.pinstripe]=new js({color:r.pinstripe,...t}),e[sn.interior]=new je({color:r.interior,roughness:.85}),e[sn.wood]=new je({color:r.wood,roughness:.7}),e}function Hy({base:r,blocks:t}){const e=zy,n=new Uint8Array(e*e*4),i=new Nt,s=(l,c,h,d,u)=>{i.setHex(l);const f=Math.round(i.r*255),m=Math.round(i.g*255),_=Math.round(i.b*255);for(let g=d;g<u;g++)for(let p=c;p<h;p++){const v=(g*e+p)*4;n[v]=f,n[v+1]=m,n[v+2]=_,n[v+3]=255}},o=l=>Math.round(Ge.clamp(l,0,1)*e);s(r,0,e,0,e);for(const l of t)s(l.color,o(l.u[0]),o(l.u[1]),o(l.v[0]),o(l.v[1]));const a=new yo(n,e,e,dn);return a.colorSpace=en,a.magFilter=Oe,a.minFilter=On,a.generateMipmaps=!0,a.anisotropy=4,a.needsUpdate=!0,new je({map:a,roughness:.85,side:un})}const Vy=.32,Ih=.34,Nh=.045,Gy=.36,Fh=.44;function Wy(r,t,e){const n=wo(r,0),i=n.sheer-n.keel,s=new ve;s.position.set(0,n.sheer+.02,n.z+n.rake-.03),s.rotation.x=-Math.atan2(r.transomRake,i);const o=new ve;s.add(o);const a=i+Vy,l=new ae(new xn(.035,a,Ih),e);l.position.set(0,.06-a/2,-Ih/2),o.add(l);const c=new ae(new xn(.05,.05,t.tillerLength),e);c.position.set(0,.1,t.tillerLength/2-.05),o.add(c);const h=new Se;return h.position.set(0,.12,t.tillerLength-.08),o.add(h),{group:s,yaw:o,tillerTip:h}}function Xy(r,t,e,n){const i=wo(r,0),{inboardLength:s,shaftLength:o,bladeLength:a,slope:l}=t,c=new ve;c.position.set(0,i.sheer+.04,i.z+i.rake);const h=new ve;c.add(h);const d=new ve;d.rotation.x=-l,h.add(d);const u=new Vn(Nh,Nh*.85,o,10);u.rotateX(Math.PI/2);const f=new ae(u,e);f.position.z=s-o/2,d.add(f);const m=new ae(new xn(.04,Gy,a),e);m.position.z=s-o-a/2+.15,d.add(m);const _=new ae(new xn(Fh,.05,.06),e);return _.position.z=s,d.add(_),{group:c,yaw:h,handle:Uh(d,s),grips:n.map(g=>Uh(d,g)),handleWidth:Fh}}function Uh(r,t){const e=new Se;return e.position.z=t,r.add(e),e}function qy(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new we;let c=0;for(let h=0;h<r.length;++h){const d=r[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<r.length;++u){const f=r[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=r[u].attributes.position.count}l.setIndex(d)}for(const h in s){const d=Oh(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);const m=Oh(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Oh(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new rn(o,e,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){const _=h.getComponent(u,m);a.setComponent(u+d,m,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const fa=9.81,Bs=.25,pa=.5,Yy=.3,jy=.3,$y=.08,Zy=1.2,Ky=2,Bh=1.6,Jy=3,Qy=.9,tM=.7,eM=1.5,nM=.3,iM=1.62,sM=1.3,rM=2.6,zh=2.6,oM=2.5,_n={sailing:"sailing",capsizing:"capsizing",capsized:"capsized",righting:"righting"};function yi(r){return 2*r*r*(3-2*r)-1}function Gr(r,t,e){return r+Math.max(-e,Math.min(e,t-r))}class aM{constructor(t,e,n){this.config=t,this.layout=e,this.displacement=n,this.crewWeight=t.crewMass*fa,this.dresseurs=e.dresseurs.map((i,s)=>({...i,order:s,reach:0,blend:1,target:1})),this.others=e.others.map(i=>({...i,blend:1})),this.bailerJoin=0,this.capsizes=0,this.rightings=0,this.reset(1)}reset(t){this.heel=0,this.heelRate=0,this.windward=t,this.tackClock=1/0,this.state=_n.sailing,this.stateTime=0,this.crewAboard=!0,this.crewRestored=!1,this.heelingMoment=0,this.perceivedMoment=0,this.crewMoment=0,this.netMoment=0,this.restoreCrew()}restoreCrew(){const t=this.windward>0?1:0;for(const e of this.dresseurs)e.blend=e.target=t,e.reach=e.maxReach*Yy;for(const e of this.others)e.blend=t;this.bailerJoin=0}get isCapsized(){return this.state!==_n.sailing}get leewardHeel(){return-this.windward*this.heel}get crewOut(){let t=0;for(const e of this.dresseurs)t+=Math.max(0,e.reach)/e.maxReach;return t/this.dresseurs.length}get maxCrewMoment(){let t=0;for(const e of this.dresseurs)t+=e.maxReach+Bs;for(const e of this.others)e.switchesSide&&(t+=e.lever);return this.crewWeight*t}get maxHullMoment(){return this.displacement*fa*this.config.hullRightingArm}dresseurX(t){const e=Math.max(0,Math.min(1,t.reach/pa));return yi(t.blend)*(t.reach+Bs*e)}otherX(t){if(!t.switchesSide)return t.lever;const e=t.bailer?t.lever*this.bailerJoin:t.lever;return yi(t.blend)*e}hullMoment(t){const e=Math.max(-Math.PI/2,Math.min(Math.PI/2,t));return-this.displacement*fa*this.config.hullRightingArm*Math.sin(2*e)}step(t,{sideForce:e,windSide:n,hike:i}){const{config:s}=this;if(this.heelingMoment=e*s.heelForceScale*s.ceHeight*Math.cos(this.heel),this.perceivedMoment+=(this.heelingMoment-this.perceivedMoment)*(1-Math.exp(-t/s.reactionTime)),this.isCapsized){this.advanceCapsize(t);return}this.updateWindwardSide(n,t),this.moveCrewAcross(t),this.integrateRoll(t),Math.abs(this.heel)>s.capsizeAngle?this.startCapsize():this.autoBalance(t,i)}updateWindwardSide(t,e){this.tackClock+=e;const n=t>0?-1:1,i=this.heelingMoment*this.windward>$y*this.maxCrewMoment;n!==this.windward&&(Math.abs(t)>jy||i)&&(this.windward=n,this.tackClock=0)}moveCrewAcross(t){const e=this.windward>0?1:0;for(const n of this.dresseurs)this.tackClock>=n.order*this.config.transferStagger&&(n.target=e),n.blend=Gr(n.blend,n.target,t/this.config.transferTime);for(const n of this.others)n.switchesSide&&(n.blend=Gr(n.blend,e,t/Zy))}integrateRoll(t){const{config:e,crewWeight:n}=this,i=e.crewMass,s=Math.cos(this.heel),o=Math.sin(this.heel);let a=0,l=e.hullRollInertia;const c=(h,d)=>{a+=n*(h*s+d*o),l+=i*(h*h+d*d)};for(const h of this.dresseurs)c(this.dresseurX(h),h.height);for(const h of this.others)c(this.otherX(h),h.height);this.crewMoment=a,this.netMoment=this.heelingMoment+a+this.hullMoment(this.heel),this.heelRate+=(this.netMoment-e.rollDamping*this.heelRate)/l*t,this.heel+=this.heelRate*t}autoBalance(t,e){const{config:n,crewWeight:i}=this,s=this.windward,o=s>0?1:0,a=Math.cos(this.heel),l=Math.sin(this.heel),c=Math.min(1,Math.abs(this.perceivedMoment)/(.3*this.maxCrewMoment)),h=-s*n.targetHeel*c;let d=this.perceivedMoment+this.hullMoment(this.heel)+n.heelGain*(this.heel-h)+n.heelRateGain*this.heelRate,u=0;for(const p of this.dresseurs)p.blend===o?(u++,d+=i*p.height*l):d+=i*(this.dresseurX(p)*a+p.height*l);for(const p of this.others)d+=i*(this.otherX(p)*a+p.height*l);const f=u>0?-d/(s*u*i*Math.max(a,nM)):0,m=f>pa+Bs?f-Bs:f/(1+Bs/pa);for(const p of this.dresseurs){let v=Math.max(p.minReach,Math.min(p.maxReach,m)),y=n.slideSpeed;p.blend!==o?(v=0,y*=Ky):e==="out"?(v=p.maxReach,y*=Bh):e==="in"&&(v=p.minReach,y*=Bh),v<p.reach&&(y*=Jy),p.reach=Gr(p.reach,v,y*t)}const _=this.crewOut,g=e==="out"||_>Qy||this.bailerJoin>.5&&_>tM;this.bailerJoin=Gr(this.bailerJoin,g&&e!=="in"?1:0,eM*t)}startCapsize(){this.state=_n.capsizing,this.stateTime=0,this.capsizeFrom=this.heel,this.capsizeTo=Math.sign(this.heel)*iM,this.heelRate=0,this.capsizes++,this.crewAboard=!1,this.crewRestored=!1}advanceCapsize(t){this.stateTime+=t,this.heelRate=0;const e=n=>n*n*(3-2*n);switch(this.state){case _n.capsizing:{const n=Math.min(1,this.stateTime/sM);this.heel=this.capsizeFrom+(this.capsizeTo-this.capsizeFrom)*n*n,n>=1&&this.enterState(_n.capsized);break}case _n.capsized:this.heel=this.capsizeTo,this.stateTime>=rM&&this.enterState(_n.righting);break;case _n.righting:{const n=Math.min(1,this.stateTime/zh);this.heel=this.capsizeTo*(1-e(n)),n>=1&&(this.crewRestored||(this.heel=0,this.perceivedMoment=0,this.restoreCrew(),this.crewRestored=!0),(this.crewAboard||this.stateTime>=zh+oM)&&(this.enterState(_n.sailing),this.rightings++,this.crewRestored=!1));break}case _n.sailing:break;default:throw new Error(`Unknown balance state: ${this.state}`)}}enterState(t){this.state=t,this.stateTime=0}}const kh=9.81,lM=.3,cM=1.7,hM=.3,uM=1.2,dM=1,fM=.4,pM=.9,mM=2.6,Hh=3.5,gM=-2,ma=new D(0,1,0),ni=new D,ge=new D,me=new D,gn=new D,Wt=new D,os=new D,Gt=new D,En=new D,as=new D,Wr=new D,ga=new D,Vh=new D,Gh=new D,Nn=new We,Wh=new on,Xh=new pe,Xr={};function qh(){return{position:new D,quaternion:new We,lean:0,legs:[new on,new on],arms:[new We,new We]}}function Yh(r,t){t.position.copy(r.root.position),t.quaternion.copy(r.root.quaternion),t.lean=r.torso.rotation.x,r.legs.forEach((e,n)=>t.legs[n].copy(e.rotation)),r.arms.forEach((e,n)=>t.arms[n].copy(e.quaternion))}function _M(r,t,e,n){const{lerp:i}=Ge;r.root.position.lerpVectors(t.position,e.position,n),r.root.quaternion.copy(t.quaternion).slerp(e.quaternion,n),r.torso.rotation.set(i(t.lean,e.lean,n),0,0),r.legs.forEach((s,o)=>{s.rotation.x=i(t.legs[o].x,e.legs[o].x,n),s.rotation.y=i(t.legs[o].y,e.legs[o].y,n),s.rotation.z=i(t.legs[o].z,e.legs[o].z,n)}),r.arms.forEach((s,o)=>s.quaternion.copy(t.arms[o]).slerp(e.arms[o],n))}function jh(r,t){return{figure:r,phase:"aboard",releaseAt:0,airTime:0,boardElapsed:0,boardDelay:0,climbed:!1,flung:!1,waterSide:1,phaseShift:0,rand:0,rand2:0,rand3:0,velocity:new D,drift:new D,start:qh(),target:qh(),...t}}class vM{constructor(t,e){this.crew=t,this.scene=e,this.worldGroup=new ve,this.worldGroup.name="crewOverboard",e.add(this.worldGroup),this.actors=new Map,this.splashes=[],this.seen=0,this.ringGeometry=null,this.dropGeometry=null,t.poles.forEach((n,i)=>{this.actors.set(n.figure,jh(n.figure,{kind:"dresseur",pole:n,poleIndex:i,z:n.z,index:i}))}),t.seats.forEach((n,i)=>{this.actors.set(n.figure,jh(n.figure,{kind:"seat",seat:n,seatIndex:i,z:n.z,index:t.poles.length+i}))})}update(t,e,n,i){this.balance=t,this.time=e,this.waves=i;const s=Number.isFinite(n)&&n>0?Math.min(n,.05):0;t.capsizes!==this.seen&&(this.seen=t.capsizes,this.arm(e)),t.state===_n.sailing&&this.recallStrays();for(const o of this.actors.values())this.advance(o,s);this.fadeSplashes(s),this.report()}arm(t){const e=this.actors.size;let n=0;for(const i of this.actors.values())i.phase="waiting",i.climbed=!1,i.releaseAt=t+Math.random()*lM,i.rand=Math.random(),i.rand2=Math.random(),i.rand3=Math.random(),i.phaseShift=Math.random()*Math.PI*2,i.boardDelay=(e<=1?0:n/(e-1))*hM,i.boardElapsed=0,i.airTime=0,i.drift.set(0,0,0),n+=1}recallStrays(){let t=!1;for(const e of this.actors.values())e.phase!=="aboard"&&(t=!0);if(t){for(const e of this.actors.values()){const n=e.figure.root;n.parent!==this.crew.group&&this.crew.group.attach(n),e.phase="aboard",e.climbed=!1}this.clearSplashes()}}advance(t,e){switch(t.phase){case"aboard":this.pose(t);break;case"waiting":this.pose(t),this.time>=t.releaseAt&&(this.detach(t),this.stepFall(t,e));break;case"falling":this.stepFall(t,e);break;case"swimming":this.balance.crewRestored&&this.startBoard(t),t.phase==="boarding"?this.stepBoard(t,e):this.stepSwim(t,e);break;case"boarding":this.stepBoard(t,e);break;default:throw new Error(`Unknown overboard phase: ${t.phase}`)}t.kind==="seat"&&t.seat.role==="sheet"&&(this.crew.rope.visible=t.phase==="aboard"||t.phase==="waiting")}pose(t){const{balance:e,time:n}=this;t.kind==="dresseur"?this.crew.poseDresseur(t.pole,e.dresseurs[t.poleIndex]):this.crew.poseSeat(t.seat,e.others[t.seatIndex],e,n)}detach(t){const e=t.figure.root;this.worldGroup.attach(e),e.traverse(s=>{s.isMesh&&(s.renderOrder=gM)});const n=Math.sign(this.balance.capsizeTo)||Math.sign(this.balance.heel)||1,i=this.crewSide(t);t.waterSide=n,t.flung=i*n<-.45,this.launch(t),t.airTime=0,t.phase="falling"}crewSide(t){if(t.kind==="dresseur")return yi(this.balance.dresseurs[t.poleIndex].blend);const e=t.seat;return e.role==="aide"?e.side:e.role==="patron"||e.role==="bailer"&&this.balance.bailerJoin<.5?0:yi(this.balance.others[t.seatIndex].blend)}launch(t){const e=this.crew.visual.parent.quaternion;me.set(t.waterSide,0,0).applyQuaternion(e),me.y=0,me.lengthSq()<1e-8&&me.set(t.waterSide||1,0,0),me.normalize(),Wt.set(0,0,1).applyQuaternion(e),Wt.y=0,Wt.lengthSq()>1e-8?Wt.normalize():Wt.set(0,0,1);const{velocity:n}=t;t.flung&&t.index%2===1?(n.copy(me).multiplyScalar(1.4+t.rand*.5),n.addScaledVector(Wt,(t.index%4<2?1:-1)*(2.6+t.rand2*.7)),n.y=1.7+t.rand3*.5):t.flung?(n.copy(me).multiplyScalar(3.8+t.rand*.8),n.addScaledVector(Wt,(t.rand2-.5)*.8),n.y=2.3+t.rand3*.6):(n.copy(me).multiplyScalar(.35+t.rand*.4),n.addScaledVector(Wt,(t.rand2-.5)*.45),n.y=.15+t.rand3*.35)}stepFall(t,e){const n=t.figure.root;if(t.airTime+=e,t.velocity.y-=kh*e,n.position.addScaledVector(t.velocity,e),En.copy(n.position),this.separate(t,n.position)&&(Gt.subVectors(n.position,En),Gt.lengthSq()>1e-8)){Gt.normalize();const o=-t.velocity.dot(Gt);o>0&&t.velocity.addScaledVector(Gt,o)}this.avoidPoles(t,n.position),Wt.set(t.velocity.x,0,t.velocity.z),Wt.lengthSq()<1e-6&&Wt.set(0,0,1),Wh.set(0,Math.atan2(Wt.x,Wt.z),0),Nn.setFromEuler(Wh),n.quaternion.slerp(Nn,1-Math.exp(-e*4)),this.poseFall(t);const i=this.heightAt(n.position.x,n.position.z),s=n.position.y<=i-this.chest(t)*.2;(s||t.airTime>cM||!Number.isFinite(n.position.y))&&(s||n.position.copy(this.swimTarget(t,ga)),this.enterWater(t))}enterWater(t){const e=t.figure.root;t.phase="swimming",t.drift.copy(t.velocity),t.drift.y=0,t.drift.length()>1.4&&t.drift.setLength(1.4),t.drift.multiplyScalar(.4);const n=Math.sin(this.time*2.3+t.phaseShift)*.04,i=this.swimTarget(t,ga);e.position.lerp(i,.55),this.keepAlongside(t,e.position),e.position.y=this.heightAt(e.position.x,e.position.z)-this.chest(t)+n,this.splash(e.position.x,e.position.z),this.faceWater(t,1),this.poseTread(t)}stepSwim(t,e){const n=t.figure.root,i=this.swimTarget(t,ga),s=this.balance.state===_n.righting||this.balance.crewRestored;n.position.lerp(i,1-Math.exp(-e*(s?mM:pM))),t.drift.lengthSq()>1e-6&&(n.position.addScaledVector(t.drift,e),t.drift.multiplyScalar(Math.exp(-e*1.5))),En.subVectors(n.position,i),En.y=0,En.length()>Hh&&(En.setLength(Hh),n.position.x=i.x+En.x,n.position.z=i.z+En.z);const o=Math.sin(this.time*2.3+t.phaseShift)*.04;this.keepAlongside(t,n.position),n.position.y=this.heightAt(n.position.x,n.position.z)-this.chest(t)+o,this.faceWater(t,1-Math.exp(-e*5)),this.poseTread(t)}startBoard(t){t.phase="boarding",t.boardElapsed=-t.boardDelay,t.climbed=!1}stepBoard(t,e){if(t.boardElapsed+=e,t.boardElapsed<0){this.stepSwim(t,e);return}const n=t.figure.root;t.climbed||(this.crew.group.attach(n),Yh(t.figure,t.start),t.climbed=!0),this.pose(t),Yh(t.figure,t.target);const i=Ge.smoothstep(t.boardElapsed/uM,0,1);_M(t.figure,t.start,t.target,i),i>=1&&(t.phase="aboard",t.climbed=!1,this.pose(t))}swimTarget(t,e){this.centerWorld(ni),this.outward(t),gn.set(0,0,t.z).applyQuaternion(Nn),gn.y=0;const n=this.lateralClearance(),i=Math.sin(this.time*.65+t.phaseShift)*.22;return me.negate(),Wt.set(-me.z,0,me.x),e.copy(ni).add(gn).addScaledVector(me,n),e.addScaledVector(Wt,(t.index%3-1)*.22+i),e.y=this.heightAt(e.x,e.z)-this.chest(t),e}lateralClearance(){const t=Math.abs(this.balance.heel),{beam:e,depth:n}=this.crew.hull;return e*.5*Math.abs(Math.cos(t))+n*.55*Math.abs(Math.sin(t))+1.25}keepAlongside(t,e){this.centerWorld(ni),this.outward(t),me.negate(),gn.set(0,0,1).applyQuaternion(Nn),gn.y=0,gn.lengthSq()<1e-6?gn.set(0,0,1):gn.normalize(),En.set(e.x-ni.x,0,e.z-ni.z);const n=En.dot(gn);if(Wt.copy(gn).multiplyScalar(n),Math.abs(n)>this.crew.hull.length*.5+.25)return!1;const i=this.lateralClearance();return En.dot(me)>=i?!1:(e.x=ni.x+Wt.x+me.x*i,e.z=ni.z+Wt.z+me.z*i,!0)}outward(t){const e=this.crew.visual.getWorldQuaternion(Nn);return me.set(t.waterSide,0,0).applyQuaternion(e),me.y=0,me.lengthSq()<.15&&(me.set(0,1,0).applyQuaternion(e),me.y=0),me.lengthSq()<1e-6&&me.set(t.waterSide||1,0,0),me.normalize()}centerWorld(t){return t.set(0,this.crew.hull.draft,0),this.crew.visual.localToWorld(t)}chest(t){return fM*t.figure.root.scale.x}heightAt(t,e){return this.waves?zi(this.waves,t,e,this.time):0}normalAt(t,e,n){return this.waves?(cd(this.waves,t,e,this.time,Xr),n.set(Xr.nx,Xr.ny,Xr.nz),(!Number.isFinite(n.y)||n.lengthSq()<1e-6)&&n.copy(ma),n.normalize()):n.copy(ma)}separate(t,e){const n=this.crew.visual;ge.copy(e),n.worldToLocal(ge);const i=this.crew.hull,s=i.length*.5+.2,o=or(i,Ge.clamp(ge.z,-i.length*.5,i.length*.5)),a=o.halfBeam+.36,l=o.keel-.1,c=o.sheer+.4;if(Math.abs(ge.x)>=a||ge.y<=l||ge.y>=c||Math.abs(ge.z)>=s)return!1;const h=a-Math.abs(ge.x),d=Math.min(ge.y-l,c-ge.y),u=s-Math.abs(ge.z);let f,m;h<=d&&h<=u?(f="x",m=Math.sign(ge.x)||t.waterSide||1,ge.x=m*(a+.06)):u<=d?(f="z",m=Math.sign(ge.z)||1,ge.z=m*(s+.06)):(f="y",m=ge.y-l<=c-ge.y?-1:1,ge.y=m>0?c+.06:l-.06);const _=e.y;return n.localToWorld(ge),e.copy(ge),Gt.set(f==="x"?m:0,f==="y"?m:0,f==="z"?m:0),Gt.applyQuaternion(n.quaternion),Math.abs(Gt.y)>.6&&(this.centerWorld(as),Gt.set(e.x-as.x,0,e.z-as.z),Gt.y=0,Gt.lengthSq()<1e-4&&(Gt.set(t.waterSide||1,0,0).applyQuaternion(n.parent.quaternion),Gt.y=0),Gt.lengthSq()<1e-6&&Gt.set(1,0,0),Gt.normalize(),e.addScaledVector(Gt,i.beam*.35+.7)),e.y=_,!0}avoidPoles(t,e){const n=this.crew.poleLength*.5,i=.34;let s=!1;for(const o of this.crew.poles){o.mesh.getWorldPosition(as),o.mesh.getWorldQuaternion(Nn),Wr.set(-n,0,0).applyQuaternion(Nn).add(as),gn.set(n,0,0).applyQuaternion(Nn).add(as),Wt.subVectors(gn,Wr);const a=Wt.lengthSq(),l=a<1e-8?0:Ge.clamp(ge.subVectors(e,Wr).dot(Wt)/a,0,1);ge.copy(Wr).addScaledVector(Wt,l),Gt.subVectors(e,ge),Gt.y=0;const c=Gt.length();c>=i||(c<1e-4?(Gt.set(t.waterSide||1,0,0).applyQuaternion(this.crew.visual.parent.quaternion),Gt.y=0,Gt.lengthSq()<1e-6&&Gt.set(1,0,0),Gt.setLength(i)):Gt.multiplyScalar((i-c)/c),e.add(Gt),s=!0)}return s}faceWater(t,e){const n=t.figure.root;this.centerWorld(ni),Wt.subVectors(ni,n.position),Wt.y=0,Wt.lengthSq()<1e-4?Wt.set(0,0,1):Wt.normalize(),this.normalAt(n.position.x,n.position.z,Gt),Wt.addScaledVector(Gt,-Wt.dot(Gt)),Wt.lengthSq()<1e-6&&Wt.set(1,0,0).addScaledVector(Gt,-Gt.x),Wt.normalize(),os.crossVectors(Gt,Wt),os.lengthSq()<1e-6&&os.set(1,0,0),os.normalize(),Wt.crossVectors(os,Gt).normalize(),Xh.makeBasis(os,Gt,Wt),Nn.setFromRotationMatrix(Xh),n.quaternion.slerp(Nn,e)}poseFall(t){const e=this.time*11+t.phaseShift;t.figure.pose(.75,Math.sin(e)*.9,.5,[Vh.set(-.42,.1+.45*Math.sin(e),.3*Math.cos(e)),Gh.set(.4*Math.sin(e+2),.15+.4*Math.cos(e),.28)])}poseTread(t){const e=this.time*5.2+t.phaseShift,n=Math.sin(e);t.figure.pose(.32,.15+.65*Math.sin(e+.4),.4,[Vh.set(-.42,.05+.42*n,.28*Math.cos(e)),Gh.set(.42,.05+.42*Math.sin(e+Math.PI),.28*Math.cos(e+Math.PI))])}splash(t,e){this.ringGeometry||(this.ringGeometry=new Wl(.22,.85,20),this.ringGeometry.rotateX(-Math.PI/2),this.dropGeometry=new sr(.055,6,4));const n=new lr({color:15202047,transparent:!0,opacity:.8,depthWrite:!1,side:un}),i=new ve;i.name="crewSplash";const s=new ae(this.ringGeometry,n);s.position.set(t,this.heightAt(t,e)+.07,e),s.renderOrder=2,i.add(s);const o=[];for(let a=0;a<4;a+=1){const l=new ae(this.dropGeometry,n),c=a/4*Math.PI*2+this.time;l.position.set(t,s.position.y+.12,e),l.userData.velocity=new D(Math.cos(c)*1.3,2.1+a%2*.5,Math.sin(c)*1.3),l.renderOrder=2,i.add(l),o.push(l)}this.worldGroup.add(i),this.splashes.push({group:i,ring:s,drops:o,material:n,x:t,z:e,age:0})}fadeSplashes(t){for(let e=this.splashes.length-1;e>=0;e-=1){const n=this.splashes[e];n.age+=t;const i=n.age/dM;if(i>=1){this.worldGroup.remove(n.group),n.material.dispose(),this.splashes.splice(e,1);continue}n.material.opacity=.9*(1-i);const s=this.heightAt(n.x,n.z);n.ring.position.y=s+.07,n.ring.scale.setScalar(1.05+1.5*i),this.normalAt(n.x,n.z,Gt),n.ring.quaternion.setFromUnitVectors(ma,Gt);for(const o of n.drops){const a=o.userData.velocity;a.y-=kh*t,o.position.addScaledVector(a,t),o.position.y<s+.05&&(o.position.y=s+.05,a.y<0&&(a.y*=-.25))}}this.splashes.length===0&&this.disposeSplashGeometry()}clearSplashes(){for(const t of this.splashes)this.worldGroup.remove(t.group),t.material.dispose();this.splashes.length=0}disposeSplashGeometry(){this.ringGeometry?.dispose(),this.ringGeometry=null,this.dropGeometry?.dispose(),this.dropGeometry=null}report(){let t=!0;for(const e of this.actors.values())e.phase!=="aboard"&&(t=!1);this.balance.crewAboard=t}dispose(){this.crew.visual.updateWorldMatrix(!0,!0),this.worldGroup.updateWorldMatrix(!0,!0);for(const t of this.actors.values()){const e=t.figure.root;e.parent&&e.parent!==this.crew.group&&this.crew.group.attach(e),t.phase="aboard"}this.clearSplashes(),this.disposeSplashGeometry(),this.worldGroup.traverse(t=>{if(t.isMesh){t.geometry?.dispose();for(const e of[t.material].flat())e?.dispose()}}),this.scene.remove(this.worldGroup)}}const xM=[5912613,8014382,9263675,4072984,7029032],co={legLength:.86,legRadius:.07,hipWidth:.1,torsoRadius:.15,torsoLength:.3,torsoBase:.05,headRadius:.11,headHeight:.78,shoulderWidth:.2,shoulderHeight:.58,armLength:.58,armRadius:.05},$h={height:.07,width:.12},Zh=.14,yM=.06,MM=.32,SM=.55,bM=.2,wM=.07,_a=.86,va=.3,ls=.12,Kh=.012,Jh=new D(0,-1,0),EM=new D(0,1,0),gi=new D,Qh=new D,Be=new D,qr=new D,Di=new D,cs=new D,tu=new pe;function TM(r){const t=co,e=new sr(t.headRadius*1.08,12,6,0,Math.PI*2,0,Math.PI/2),n=new Vn(t.headRadius*1.45,t.headRadius*1.45,.014,14);n.translate(0,.01,.02);const i=qy([e,n]).translate(0,t.headHeight+.015,0);e.dispose(),n.dispose();const s={leg:new ds(t.legRadius,t.legLength-2*t.legRadius,3,8).translate(0,-.86/2,0),arm:new ds(t.armRadius,t.armLength-2*t.armRadius,3,8).translate(0,-.58/2,0),torso:new ds(t.torsoRadius,t.torsoLength,4,10).translate(0,t.torsoBase+t.torsoRadius+t.torsoLength/2,0),pelvis:new ds(.12,.14,3,8).rotateZ(Math.PI/2).translate(0,.02,0),head:new sr(t.headRadius,12,10).translate(0,t.headHeight,0),cap:i,pole:new xn(1,$h.height,$h.width),rope:new Vn(Kh,Kh,1,6)},{kit:o}=r,a={shirt:new je({color:o.shirt,roughness:.8}),shorts:new je({color:o.shorts,roughness:.8}),cap:new je({color:o.cap,roughness:.75}),skins:xM.map(l=>new je({color:l,roughness:.65})),pole:new je({color:r.pole,roughness:.7}),rope:new je({color:15260864,roughness:.9})};return{geometries:s,materials:a}}function _i(r,t){const e=new ae(r,t);return e.castShadow=!0,e}class AM{constructor(t,e){const{geometries:n,materials:i}=t,s=i.skins[e*3%i.skins.length];this.root=new ve,this.root.name="sailor",this.root.scale.setScalar(.94+e*37%11/100),this.torso=new ve,this.torso.add(_i(n.torso,i.shirt),_i(n.head,s),_i(n.cap,i.cap)),this.root.add(this.torso,_i(n.pelvis,i.shorts)),this.legs=[-1,1].map(o=>{const a=new ve;return a.position.x=o*co.hipWidth,a.add(_i(n.leg,s)),this.root.add(a),a}),this.arms=[-1,1].map(o=>{const a=new ve;return a.position.set(o*co.shoulderWidth,co.shoulderHeight,0),a.add(_i(n.arm,s)),this.torso.add(a),a})}place(t,e,n,i){this.root.position.set(t,e,n),this.root.rotation.set(0,i,0)}pose(t,e,n,i){this.torso.rotation.x=t,this.legs.forEach((a,l)=>a.rotation.set(-e,0,(l===0?-1:1)*n));const s=Math.sin(t),o=Math.cos(t);this.arms.forEach((a,l)=>{const{x:c,y:h}=a.position;Qh.set(c,h*o,h*s),Be.subVectors(i[l],Qh);const{y:d,z:u}=Be;Be.set(Be.x,d*o+u*s,-d*s+u*o),Be.lengthSq()<1e-8&&Be.copy(Jh),a.quaternion.setFromUnitVectors(Jh,Be.normalize())})}toRoot(t,e){const{position:n,rotation:i,scale:s}=this.root;gi.subVectors(t,n);const o=Math.sin(i.y),a=Math.cos(i.y);return e.set(gi.x*a-gi.z*o,gi.y,gi.x*o+gi.z*a).divideScalar(s.x)}fromRoot(t,e){const{position:n,rotation:i,scale:s}=this.root,o=Math.sin(i.y),a=Math.cos(i.y),l=t.x*s.x,c=t.z*s.x;return e.set(l*a+c*o,t.y*s.x,-l*o+c*a).add(n)}}class RM{constructor(t,e,n,i){const{hull:s,crew:o,livery:a,steering:l}=t;this.visual=e,this.rig=n,this.hull=s,this.poleLength=o.poleLength,this.resources=TM(a),this.group=new ve,this.group.name="crew",e.add(this.group);let c=0;const h=()=>{const m=new AM(this.resources,c++);return this.group.add(m.root),m};this.poles=o.dresseurStations.map(m=>{const _=or(s,m),g=_.sheer-Zh,p=hd(s,_,g),v=_.halfBeam,y=Math.atan2(Zh+yM,p+v),S=_i(this.resources.geometries.pole,this.resources.materials.pole);return S.scale.x=this.poleLength,this.group.add(S),{z:m,seatY:g,inner:p,outer:v,slope:y,mesh:S,floorY:_.keel+s.floor,reachLimit:this.poleLength*Math.cos(y)-p-SM,height:_.sheer+ls-s.draft,figure:h(),frame:{side:1,stand:0,poleX:0,poleY:g,slope:y}}}),this.seats=[];const d=(m,_,g,p=h())=>{const v=or(s,_),y={role:m,z:_,station:v,floorY:v.keel+s.floor,figure:p,...g};return this.seats.push(y),y},u=d("sheet",o.sheetHand.z,{lever:o.sheetHand.lever,switchesSide:!0});if(u.height=u.floorY+va+ls-s.draft,this.rope=_i(this.resources.geometries.rope,this.resources.materials.rope),this.group.add(this.rope),l.type==="rudder"){const m=d("helm",o.helm.z,{lever:o.helm.lever,switchesSide:!0});m.height=m.station.sheer-.1+ls-s.draft}else{const m=n.paddle.group.position.z+l.inboardLength+.4,_=d("patron",m,{lever:0,switchesSide:!1});_.height=_.floorY+_a+ls-s.draft,o.paddleAides.forEach((g,p)=>{const v=p%2===0?1:-1,y=n.paddle.group.position.z+g*Math.cos(l.slope),S=d("aide",y,{side:v,grip:n.paddle.grips[p],switchesSide:!1});S.lever=v*(S.station.halfBeam-.04),S.height=S.station.sheer+.06+ls-s.draft})}const f=d("bailer",o.bailer.z,{bailer:!0,switchesSide:!0});f.lever=f.station.halfBeam+.1,f.height=f.station.sheer+ls-s.draft,this.count=c,this.layout={dresseurs:this.poles.map(({z:m,height:_,inner:g,reachLimit:p})=>({z:m,height:_,minReach:bM-g,maxReach:p})),others:this.seats.map(({role:m,lever:_,height:g,switchesSide:p,bailer:v})=>({role:m,lever:_,height:g,switchesSide:p,bailer:!!v}))},this.overboard=new vM(this,i)}dispose(){this.overboard.dispose()}update(t,e,n,i){tu.copy(this.visual.matrixWorld).invert(),this.poles.forEach((s,o)=>this.layoutPole(s,t.dresseurs[o])),this.group.updateMatrixWorld(!0),this.overboard.update(t,Number.isFinite(e)?e:0,n,i)}poseSeat(t,e,n,i){switch(t.role){case"sheet":this.updateSheetHand(t,e);break;case"helm":this.updateBarreur(t,e);break;case"patron":this.updatePatron(t);break;case"aide":this.updateAide(t);break;case"bailer":this.updateBailer(t,e,n.bailerJoin,i);break;default:throw new Error(`Unknown crew role: ${t.role}`)}}markerInVisual(t,e){return t.getWorldPosition(e).applyMatrix4(tu)}layoutPole(t,e){const n=t.frame,{slope:i,seatY:s,inner:o}=t;n.side=yi(e.blend),n.stand=Math.sin(Math.PI*(n.side+1)/2),n.slope=i;const a=this.poleLength/2;n.poleX=n.side*(a*Math.cos(i)-o),n.poleY=s+a*Math.sin(i)*Math.abs(n.side)+n.stand*MM,t.mesh.position.set(n.poleX,n.poleY,t.z),t.mesh.rotation.z=n.side*i}poseDresseur(t,e){const{side:n,stand:i,poleX:s,poleY:o,slope:a}=t.frame,{figure:l}=t,c=Math.tan(n*a),h=n*e.reach,d=o+(h-s)*c,u=Ge.lerp(d+wM,t.floorY+_a,i);l.place(h,u,t.z-.22*i,n*Math.PI/2);const f=Ge.smoothstep(e.reach,t.outer*.6,t.reachLimit),{lerp:m}=Ge,_=.3+.3*f,g=_*Math.tan(a)-.03,p=d-u+.04,v=m(g,p,i),y=m(_,.18,i),S=m(.17,.24,i);l.pose(m(m(.3,1.3,f),.2,i),m(m(1.1,-.6,f),.05,i),.12,[Di.set(-S,v,y),cs.set(S,v,y)])}updateSheetHand(t,e){this.rope.visible=!0;const n=yi(e.blend),{figure:i}=t,s=this.markerInVisual(this.rig.clew,qr),o=n*t.lever,a=Math.atan2(s.x-o,s.z-t.z);i.place(o,t.floorY+va,t.z,a);const l=i.toRoot(s,Be).sub(gi.set(0,.5,0)),c=Math.min(.48,l.length()),h=gi.set(0,.5,0).addScaledVector(l.normalize(),c);i.pose(-.15,1.35,.15,[Di.copy(h).setX(h.x-.06),cs.copy(h).setX(h.x+.06)]);const d=i.fromRoot(h,Di),u=Be.subVectors(s,d),f=u.length();this.rope.position.lerpVectors(d,s,.5),this.rope.quaternion.setFromUnitVectors(EM,u.normalize()),this.rope.scale.set(1,f,1)}updateBarreur(t,e){const n=yi(e.blend),{figure:i}=t,s=this.markerInVisual(this.rig.rudder.tillerTip,qr),o=n*t.lever;i.place(o,t.station.sheer-.1,t.z,.3*Math.atan2(s.x-o,s.z-t.z));const a=i.toRoot(s,Di),l=cs.set(.18,.05,.32),c=n>0;c||(l.x=-l.x),i.pose(.15,1.25,.18,c?[a,l]:[l,a])}updatePatron(t){const{figure:e}=t,n=this.markerInVisual(this.rig.paddle.handle,qr),i=this.rig.paddle.handleWidth/2-.04;e.place(n.x,t.floorY+_a,n.z+.4,Math.PI),Be.copy(n).setX(n.x+i);const s=e.toRoot(Be,Di);Be.copy(n).setX(n.x-i);const o=e.toRoot(Be,cs);e.pose(.22,.05,.14,[s,o])}updateAide(t){const{figure:e,side:n}=t,i=this.markerInVisual(t.grip,qr),s=n*(t.station.halfBeam-.04);e.place(s,t.station.sheer+.06,t.z,-n*Math.PI/2),Be.copy(i).setZ(i.z-.13);const o=e.toRoot(Be,Di);Be.copy(i).setZ(i.z+.13);const a=e.toRoot(Be,cs);e.pose(.4,1.1,.16,o.x<a.x?[o,a]:[a,o])}updateBailer(t,e,n,i){const s=yi(e.blend),{figure:o,station:a}=t,{lerp:l}=Ge;o.place(l(0,s*(a.halfBeam-.02),n),l(t.floorY+va,a.sheer+.06,n),t.z,n*s*Math.PI/2);const c=.08*Math.sin(i*4.5),h=l(-.22+c,-.06,n),d=l(.42,.04,n),u=l(.12,.25,n);o.pose(l(.95,.45,n),l(1.5,.15,n),.2,[Di.set(-u,h,d),cs.set(u,h,d)])}}const CM=-2,PM=-1,LM=.15,DM=.8,IM=10,NM=6,FM=new D(0,1,0),UM=new D(0,0,1),Tn=new D,Yr=new D,xa=new D,ya=new D,jr=new We,eu=new We,$r=new We,Ma=new We,OM=new on,dd=0,Zs=new b(0,dd,10),wl=190*Math.PI/180,BM=.9,zM=3,nu=.5,kM=2,HM=.8,VM=.7,GM=2.5;class WM{constructor(t,e,n=bl.gommier){this.scene=t,this.world=e,this.config=n,this.type=n.id,this.rudderAngle=0,this.maxRudderAngle=n.steering.maxAngle,this.sailAngle=0,this.maxSailAngle=Math.PI/2.5,this.sailSheet=.5,this.sheetDump=0,this.hike=null,this.sailSideForce=0,this.windSide=0,this.balanceSettled=!1,this.isMastBroken=!1,this.initVisuals(),this.initPhysics(),this.initBalance(),console.log(`🚢 Boat initialized - ${n.name}, ${this.crew.count} crew`)}initVisuals(){const{hull:t}=this.config;this.group=new ve,this.visual=new ve,this.visual.name="boatVisual",this.visual.userData.boatType=this.config.id,this.visual.position.y=-t.draft,this.group.add(this.visual),this.hullHalfLength=t.length/2,this.hullHalfWidth=t.beam/2,this.draft=t.draft,this.waves=null,this.ride={ready:!1,height:0,pitch:0,roll:0},this.buildHull(),this.buildRig(),this.buildSteering(),this.crew=new RM(this.config,this.visual,{clew:this.clew,rudder:this.rudder,paddle:this.paddle},this.scene),this.visual.traverse(e=>{e.isMesh&&(e.renderOrder=CM)}),this.hullMask.renderOrder=PM,this.scene.add(this.group)}buildHull(){const{hull:t,livery:e,thwarts:n}=this.config,i=Iy(t),s=ky(e.hull);this.woodMaterial=s[sn.wood],this.hull=new ae(Uy(t,i),s),this.hull.castShadow=!0,this.hull.receiveShadow=!0,this.visual.add(this.hull),this.hullMask=new ae(Oy(t,i),new lr({colorWrite:!1,side:un})),this.visual.add(this.hullMask);const o=new xn(1,.035,.24);for(const a of n){const l=or(t,a),c=l.sheer-.13,h=new ae(o,this.woodMaterial);h.scale.x=2*(hd(t,l,c)+.015),h.position.set(0,c,l.z),h.castShadow=!0,h.receiveShadow=!0,this.visual.add(h)}}buildRig(){const{hull:t,rig:e,livery:n}=this.config,i=new je({color:n.spar,roughness:.6}),s=or(t,e.mastStation),o=Object.fromEntries(["tack","throat","peak","clew","spritHeel"].map(c=>[c,new D(...e.sail[c])]));this.sailPoints=o,this.mast=new ve,this.mast.position.set(0,s.keel+t.floor,e.mastStation),this.mast.rotation.x=-e.mastRake,this.mast.add(Dh(new D(0,0,0),new D(0,e.mastHeight,0),e.mastRadius[0],e.mastRadius[1],i)),this.visual.add(this.mast),this.sail=new ve,this.mast.add(this.sail),this.sailCloth=new ve,this.sail.add(this.sailCloth);const a=new ae(By(o,e.sail.belly),Hy(n.sail));a.castShadow=!0,this.sailCloth.add(a);const l=o.peak.clone().setX(o.spritHeel.x);this.sailCloth.add(Dh(o.spritHeel,l,.04,.028,i)),this.clew=new Se,this.clew.position.copy(o.clew),this.sailCloth.add(this.clew)}buildSteering(){const{hull:t,steering:e,crew:n,livery:i}=this.config;switch(this.rudder=null,this.paddle=null,e.type){case"rudder":this.rudder=Wy(t,e,this.woodMaterial),this.visual.add(this.rudder.group);break;case"paddle":{const s=new je({color:i.pole,roughness:.65});this.paddle=Xy(t,e,s,n.paddleAides),this.visual.add(this.paddle.group);break}default:throw new Error(`Unknown steering type: ${e.type}`)}}initPhysics(){const{physics:t}=this.config;this.shape=new bo(new b(...t.boxHalfExtents)),this.body=new vt({mass:t.mass,position:Zs.clone()}),this.body.addShape(this.shape),this.body.linearDamping=.1,this.body.angularDamping=0,this.body.quaternion.setFromAxisAngle(new b(0,1,0),wl),this.body.angularFactor.set(0,1,0),this.world.addBody(this.body),this.onPreStep=()=>this.applyForces(),this.world.addEventListener("preStep",this.onPreStep)}initBalance(){const{hull:t,rig:e,balance:n,physics:i}=this.config,s=["tack","throat","peak","clew"].map(c=>this.sailPoints[c].y),o=s.reduce((c,h)=>c+h,0)/s.length,a=this.mast.position.y+o*Math.cos(e.mastRake)-t.draft,l=i.mass+this.crew.count*n.crewMass;this.balance=new aM({...n,ceHeight:a},this.crew.layout,l),this.rightingsSeen=0}setWaves(t){this.waves=t,this.ride.ready=!1}get effectiveSheet(){return this.sailSheet+(1-this.sailSheet)*this.sheetDump}update(t,e,n,i){if(this.wind=n,this.handleInput(e,t),this.balance.rightings!==this.rightingsSeen&&(this.rightingsSeen=this.balance.rightings,this.sailSheet=Math.max(this.sailSheet,VM)),this.group.position.copy(this.body.position),this.group.quaternion.copy(this.body.quaternion),this.updateVisuals(t,i),Math.random()<.02){const s=this.body.velocity,o=Math.sqrt(s.x*s.x+s.z*s.z);console.log(`🚤 Horizontal speed: ${(o*3.6).toFixed(1)} km/h, Vertical: ${(s.y*3.6).toFixed(1)} km/h`)}}updateVisuals(t,e){this.updateRide(t,e),this.updateSailVisual(),this.updateSteeringVisual(),this.group.updateMatrixWorld(!0),this.crew.update(this.balance,Number.isFinite(e)?e:0,t,this.waves)}updateRide(t,e){if($r.setFromAxisAngle(UM,-this.balance.heel),xa.set(0,this.draft,0),ya.copy(xa).sub(Yr.copy(xa).applyQuaternion($r)),!this.waves||!Number.isFinite(e)){this.visual.quaternion.copy($r),this.visual.position.set(0,-this.draft,0).add(ya),this.ride.ready=!1;return}const{x:n,z:i}=this.group.position;Tn.set(0,0,1).applyQuaternion(this.group.quaternion),Tn.y=0,Tn.lengthSq()<1e-8&&Tn.set(0,0,1),Tn.normalize();const s=this.hullHalfLength*DM,o=this.hullHalfWidth,a=Tn.x*s,l=Tn.z*s,c=Tn.z*o,h=-Tn.x*o,d=zi(this.waves,n,i,e),u=zi(this.waves,n+a,i+l,e),f=zi(this.waves,n-a,i-l,e),m=zi(this.waves,n+c,i+h,e),_=zi(this.waves,n-c,i-h,e),g=(d+u+f+m+_)/5,p=Math.atan2(u-f,2*s),v=Math.atan2(m-_,2*o),y=this.ride;if(y.ready&&t>0){const S=1-Math.exp(-t*IM),E=1-Math.exp(-t*NM);y.height+=(g-y.height)*S,y.pitch+=(p-y.pitch)*E,y.roll+=(v-y.roll)*E}else y.height=g,y.pitch=p,y.roll=v,y.ready=!0;jr.setFromAxisAngle(FM,Math.atan2(Tn.x,Tn.z)),eu.setFromEuler(OM.set(-y.pitch,0,y.roll)),jr.multiply(eu),Ma.copy(this.group.quaternion).invert(),this.visual.quaternion.copy(Ma).multiply(jr).multiply($r),Yr.copy(ya).applyQuaternion(jr),Yr.y+=y.height-this.draft-this.group.position.y,this.visual.position.copy(Yr.applyQuaternion(Ma))}handleInput(t,e){if(!this.validatePhysicsState())return;const n=t.ArrowLeft||t.a||t.A?1:0,i=t.ArrowRight||t.d||t.D?1:0,o=(this.balance.isCapsized?0:n-i)*this.maxRudderAngle,a=this.config.steering.rate*e;this.rudderAngle+=Math.max(-a,Math.min(a,o-this.rudderAngle)),(t.ArrowUp||t.w||t.W)&&(this.sailSheet=Math.max(0,this.sailSheet-nu*e)),(t.ArrowDown||t.s||t.S)&&(this.sailSheet=Math.min(1,this.sailSheet+nu*e)),this.sheetDump=t[" "]?Math.min(1,this.sheetDump+kM*e):Math.max(0,this.sheetDump-HM*e);const l=t.e||t.E,c=t.q||t.Q;this.hike=l&&!c?"out":c&&!l?"in":null}applyForces(){this.applyBuoyancy(),this.applyRudder(),this.sailSideForce=0,this.wind&&this.applySailingPhysics(this.wind),this.applyWaterResistance(),this.applyBalance(this.world.dt)}applyBalance(t){this.wind&&(this.balanceSettled||(this.balance.reset(this.windSide>0?-1:1),this.balanceSettled=!0),this.balance.step(t,{sideForce:this.sailSideForce,windSide:this.windSide,hike:this.hike}))}applyRudder(){const{yawRateAtRest:t,turnRadius:e,maxYawRate:n}=this.config.steering,i=this.body.vectorToLocalFrame(this.body.velocity).z,s=Math.max(-n,Math.min(n,t+i/e)),o=this.rudderAngle/this.maxRudderAngle*s,a=this.body.inertia.y*(o-this.body.angularVelocity.y)*zM,l=this.body.vectorToWorldFrame(new b(0,a,0));this.body.applyTorque(l)}applyBuoyancy(){const{draft:t,depth:e}=this.config.hull,n=Math.min(dd+t-this.body.position.y,e);if(n<=0)return;const s=-this.world.gravity.y*this.body.mass/t,o=2*BM*Math.sqrt(s*this.body.mass),a=s*n-o*this.body.velocity.y;this.body.applyForce(new b(0,a,0))}applySailingPhysics(t){if(this.isMastBroken)return;const e=new b(t.x,0,t.z),n=this.body.velocity,i=new b(e.x-n.x,e.y-n.y,e.z-n.z),s=this.body.vectorToLocalFrame(i),o=s.length();if(o<.001||(this.windSide=s.x/o,this.balance.isCapsized))return;const a=this.effectiveSheet,l=Math.atan2(s.x,s.z),c=Math.PI-l>Math.PI?-Math.PI-l:Math.PI-l,h=a*this.maxSailAngle;this.sailAngle=Math.max(-h,Math.min(h,c));const d=1/o,u=new b(s.x*d,s.y*d,s.z*d),f=Math.sign(u.x*Math.cos(this.sailAngle)+u.z*Math.sin(this.sailAngle)),m=new b(f*Math.cos(this.sailAngle),0,f*Math.sin(this.sailAngle)),_=u.dot(m);let p=o*o*this.config.physics.sailPower*Math.abs(_)*(1.1-a*.5);const v=new b(0,0,1);u.dot(v)<-.8&&(p*=.01),this.sailSideForce=m.x*p;const S=p*Math.max(0,Math.cos(this.balance.heel)),E=new b(m.x*S,m.y*S,m.z*S),T=this.body.vectorToWorldFrame(E),R=this.clampForce(T,1e5),I=new b(0,1.5,0);this.body.applyForce(R,I),Math.abs(p)>15e4&&(this.isMastBroken=!0)}applyWaterResistance(){const{lateralDamping:t,hullDrag:e}=this.config.physics,n=this.body.vectorToLocalFrame(this.body.velocity),i=-n.x*t,s=new b(i,0,0);this.body.applyLocalForce(this.clampForce(s,5e4),new b(0,0,0));const o=-n.z*Math.abs(n.z)*e;if(this.body.applyLocalForce(new b(0,0,o),new b(0,0,0)),this.balance.isCapsized){const a=-this.body.mass*GM;this.body.applyForce(new b(this.body.velocity.x*a,0,this.body.velocity.z*a))}}updateSailVisual(){this.sail.rotation.y=-this.sailAngle;const t=this.sailAngle>=0?1:-1;this.sailCloth.scale.x+=(t-this.sailCloth.scale.x)*LM}updateSteeringVisual(){const t=this.rudder??this.paddle;t.yaw.rotation.y=-this.rudderAngle}clampForce(t,e){const n=t.length();if(n>e){const i=e/n;return new b(t.x*i,t.y*i,t.z*i)}return t}validatePhysicsState(){const t=this.body.position,e=this.body.velocity,n=this.body.quaternion;return isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||isNaN(n.x)||isNaN(n.y)||isNaN(n.z)||isNaN(n.w)||!Number.isFinite(this.balance.heel)?(console.error("Corrupted physics state detected! Resetting boat..."),this.resetBoat(),!1):!0}resetBoat(){this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.body.position.copy(Zs),this.body.quaternion.setFromAxisAngle(new b(0,1,0),wl),this.rudderAngle=0,this.sailSheet=.5,this.sheetDump=0,this.isMastBroken=!1,this.balanceSettled=!1,this.balance.reset(1),this.ride.ready=!1}dispose(){this.world.removeEventListener("preStep",this.onPreStep),this.world.removeBody(this.body),this.crew.dispose(),this.scene.remove(this.group);const t=new Set,e=new Set;this.group.traverse(n=>{if(n.isMesh){t.add(n.geometry);for(const i of[n.material].flat())e.add(i)}});for(const n of t)n.dispose();for(const n of e)n.map?.dispose(),n.dispose()}}const Sa=10,XM=.4,qM=11,YM=3.7,iu=[22,45],su=[.2,.4],ru=[5,8],Zr=.3,ou=[.55,1.8],Ii=256;function jM(r){let t=r>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Kr([r,t],e){return r+(t-r)*e}class $M{constructor({seed:t=Math.random()*2**32>>>0}={}){this.direction=new D(0,0,Sa),this.time=0,this.random=jM(t),this.lattice=Float32Array.from({length:Ii},()=>this.random()*2-1),this.strength=1,this.override=null,this.puff=null,this.nextPuffAt=Kr(iu,this.random())}update(t){this.time+=t;const e=Math.sin(this.time*.1)*.1;this.strength=this.override??this.gustStrength();const n=Sa*this.strength;this.direction.x=Math.sin(e)*n,this.direction.z=Math.cos(e)*n}getVector(){return this.direction}get speed(){return Sa*this.strength}setOverride(t){this.override=t}triggerPuff(t=su[1],e=ru[1]){this.puff={start:this.time,peak:t,duration:e}}gustStrength(){const t=.65*this.noise(this.time/qM)+.35*this.noise(this.time/YM+97.3),e=Math.sign(t)*Math.pow(Math.min(1,Math.abs(t)*1.25),.8),n=1+XM*e+this.puffStrength();return Math.min(ou[1],Math.max(ou[0],n))}puffStrength(){if(!this.puff&&this.time>=this.nextPuffAt&&this.triggerPuff(Kr(su,this.random()),Kr(ru,this.random())),!this.puff)return 0;const t=(this.time-this.puff.start)/this.puff.duration;if(t>=1)return this.puff=null,this.nextPuffAt=this.time+Kr(iu,this.random()),0;const e=t<Zr?Math.sin(Math.PI/2*(t/Zr)):Math.cos(Math.PI/2*((t-Zr)/(1-Zr)));return this.puff.peak*e*e}noise(t){const e=Math.floor(t),n=t-e,i=this.lattice[(e%Ii+Ii)%Ii],s=this.lattice[((e+1)%Ii+Ii)%Ii];return i+(s-i)*n*n*(3-2*n)}}const Ve={radius:.6,bulge:.015,bottom:.1,shoulder:1.68,shoulderRadius:.32,band:{from:1.1,to:1.4},ballast:{top:.12,depth:.35,ringTube:.075},staff:{height:.95,radius:.017},flag:{width:.5,height:.32,curl:.035},segments:40},Ks=Ve.shoulder+Ve.shoulderRadius,ZM=.18,KM=new D(0,1,0),Ni={},JM=new D;class QM{constructor(t){this.scene=t,this.buoys=[],this.flags=[],this.waves=null,this.checkpoints=[new D(20,0,20),new D(40,0,0),new D(20,0,-20),new D(0,0,0)],this.initBuoys()}initBuoys(){const t=nS();this.checkpoints.forEach(e=>{const{buoy:n,flag:i}=iS(t);n.position.copy(e),this.scene.add(n),this.buoys.push(n),this.flags.push(i)})}setWaves(t){this.waves=t}update(t){this.waves&&this.buoys.forEach((e,n)=>{const{x:i,z:s}=this.checkpoints[n];cd(this.waves,i,s,t,Ni),e.position.set(i+Ni.x,Ni.y,s+Ni.z),e.quaternion.setFromUnitVectors(KM,JM.set(Ni.nx,Ni.ny,Ni.nz)),this.flags[n].rotation.y=ZM*Math.sin(t*1.7+n*2.1)})}checkProgress(t){}}function tS(r){const t=(r-Ve.bottom)/(Ve.shoulder-Ve.bottom);return Ve.radius+Ve.bulge*Math.sin(Math.PI*t)}function ba(r,t,e){const n=[];for(let i=0;i<=e;i++){const s=Ge.lerp(r,t,i/e);n.push(new Tt(tS(s),s))}return n}function eS(r){const{radius:t,shoulder:e,shoulderRadius:n}=Ve,i=[];for(let s=1;s<=r;s++){const o=s/r*Math.PI/2;i.push(new Tt(t-n+n*Math.cos(o),e+n*Math.sin(o)))}return i.push(new Tt(.12,Ks+.008),new Tt(0,Ks+.012)),i}function nS(){const{band:r,ballast:t,staff:e,flag:n,segments:i}=Ve,s=new js({color:16727040,emissive:16720384,emissiveIntensity:.1,roughness:.42,clearcoat:.6,clearcoatRoughness:.3}),o=new js({color:16053487,roughness:.45,clearcoat:.6,clearcoatRoughness:.3}),a=new je({color:2303789,roughness:.65}),l=new je({color:13225169,metalness:.85,roughness:.35}),c=new je({color:16765471,roughness:.8,side:un}),h=new Ys([new Tt(0,Ve.bottom),...ba(Ve.bottom,r.from,8)],i),d=new Ys(ba(r.from,r.to,3),i),u=new Ys([...ba(r.to,Ve.shoulder,4),...eS(10)],i),f=new Vn(Ve.radius+.02,Ve.radius-.1,t.depth+t.top,i);f.translate(0,(t.top-t.depth)/2,0);const m=new Xl(Ve.radius,t.ringTube,12,i);m.rotateX(Math.PI/2),m.translate(0,t.top,0);const _=new Vn(.06,.09,.08,16);_.translate(0,Ks+.04,0);const g=new Vn(e.radius,e.radius,e.height,8);g.translate(0,Ks+e.height/2,0);const p=new cr(n.width,n.height,10,1),v=p.attributes.position;for(let y=0;y<v.count;y++){const S=v.getX(y)/n.width+.5;v.setXYZ(y,S*n.width,v.getY(y),n.curl*Math.sin(S*Math.PI*1.5)*S)}return p.computeVertexNormals(),{meshes:[[h,s],[d,o],[u,s],[f,a],[m,a],[_,a],[g,l]],flag:[p,c],flagHeight:Ks+e.height-n.height/2-.03}}function iS(r){const t=new ve;for(const[i,s]of r.meshes){const o=new ae(i,s);o.castShadow=!0,t.add(o)}const e=new ve;e.position.set(0,r.flagHeight,0);const n=new ae(...r.flag);return n.position.x=Ve.staff.radius,n.castShadow=!0,e.add(n),t.add(e),{buoy:t,flag:e}}const au={type:"change"},Zl={type:"start"},fd={type:"end"},Jr=new Bl,lu=new mi,sS=Math.cos(70*Ge.DEG2RAD),Le=new D,tn=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wa=1e-6;class rS extends ip{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ps.ROTATE,MIDDLE:ps.DOLLY,RIGHT:ps.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new We,this._lastTargetPosition=new D,this._quat=new We().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bc,this._sphericalDelta=new Bc,this._scale=1,this._panOffset=new D,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new D,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aS.bind(this),this._onPointerDown=oS.bind(this),this._onPointerUp=lS.bind(this),this._onContextMenu=mS.bind(this),this._onMouseWheel=uS.bind(this),this._onKeyDown=dS.bind(this),this._onTouchStart=fS.bind(this),this._onTouchMove=pS.bind(this),this._onMouseDown=cS.bind(this),this._onMouseMove=hS.bind(this),this._interceptControlDown=gS.bind(this),this._interceptControlUp=_S.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(au),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Le.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Jr.origin.copy(this.object.position),Jr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jr.direction))<sS?this.object.lookAt(this.target):(lu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jr.intersectPlane(lu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>wa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wa||this._lastTargetPosition.distanceToSquared(this.target)>wa?(this.dispatchEvent(au),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Le.copy(i).sub(this.target);let s=Le.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function oS(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function aS(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function lS(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fd),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function cS(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=oe.DOLLY;break;case ps.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=oe.ROTATE}break;case ps.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Zl)}function hS(r){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function uS(r){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(r.preventDefault(),this.dispatchEvent(Zl),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(fd))}function dS(r){this.enabled!==!1&&this._handleKeyDown(r)}function fS(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=oe.TOUCH_ROTATE;break;case us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=oe.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Zl)}function pS(r){switch(this._trackPointer(r),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=oe.NONE}}function mS(r){this.enabled!==!1&&r.preventDefault()}function gS(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _S(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const vS=1.2,xS=4.5,yS=4,MS=45,SS=Ge.degToRad(84),bS=1.5,wS=8,Ea=new D(0,1,0),Qr=new D,zs=new D;class ES{constructor(t,e,n){this.camera=t,this.waves=n,this.controls=new rS(t,e),this.controls.enablePan=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=yS,this.controls.maxDistance=MS,this.controls.maxPolarAngle=SS,this.waterLift=0,this.lastTarget=new D,this.placed=!1,this.interacting=!1,this.idleTime=0,this.controls.addEventListener("start",()=>{this.interacting=!0,this.idleTime=0}),this.controls.addEventListener("end",()=>{this.interacting=!1})}update(t,e,n,i){const{camera:s,controls:o}=this,a=o.target;Qr.set(0,0,1).applyQuaternion(n).setY(0).normalize(),a.copy(e).addScaledVector(Ea,vS),this.placed||(s.position.copy(a).addScaledVector(Qr,-11).addScaledVector(Ea,xS),this.lastTarget.copy(a),this.placed=!0),s.position.y-=this.waterLift,s.position.add(zs.subVectors(a,this.lastTarget)),this.lastTarget.copy(a),this.idleTime=this.interacting?0:this.idleTime+t,this.idleTime>wS&&this.swingAstern(t,a),o.update();const l=zi(this.waves,s.position.x,s.position.z,i)+bS;this.waterLift=Math.max(0,l-s.position.y),this.waterLift>0&&(s.position.y=l,s.lookAt(a))}swingAstern(t,e){const{position:n}=this.camera;zs.subVectors(n,e);const i=Math.atan2(zs.x,zs.z),s=Math.atan2(-Qr.x,-Qr.z),a=Math.atan2(Math.sin(s-i),Math.cos(s-i))*(1-Math.exp(-.4*t));n.copy(e).add(zs.applyAxisAngle(Ea,a))}}const cu=180/Math.PI,TS=40,AS=.6,RS=.85,CS=1.2,PS=.8,Me={cx:100,cy:100,radius:86,needle:74},LS=[["← →","steer"],["↑ ↓","sheet in / out"],["Space","ease the sheet"],["E","crew hike out"],["Q","crew come in"],["M","boats"]],Ta=new D;function be(r,t,e,n){const i=document.createElement(r);return t&&(i.className=t),n!==void 0&&(i.textContent=n),e?.appendChild(i),i}function pi(r,t,e){const n=document.createElementNS("http://www.w3.org/2000/svg",r);for(const[i,s]of Object.entries(t))n.setAttribute(i,s);return e?.appendChild(n),n}function hu(r,t){return[Me.cx-t*Math.sin(r),Me.cy-t*Math.cos(r)]}function Aa(r,t,e){const[n,i]=hu(r,e),[s,o]=hu(t,e),a=t<r?1:0;return`M ${n} ${i} A ${e} ${e} 0 0 ${a} ${s} ${o}`}class DS{constructor({onMenu:t}){this.root=be("div","hud",document.body),this.root.hidden=!0,this.ui=be("div",null,this.root),this.ui.id="ui",this.speed=be("div",null,this.ui),this.awa=be("div",null,this.ui),this.sheet=be("div",null,this.ui),this.windLine=be("div","hud-wind",this.ui),this.crewLine=be("div","hud-crew",this.ui),this.crewLabel=be("span",null,this.crewLine),this.crewBar=be("span","hud-bar",this.crewLine),this.crewFill=be("span","hud-bar-fill",this.crewBar),this.mast=be("div","hud-alert",this.ui,"MAST BROKEN! (M to pick a fresh boat)"),this.buildHeelDial(),this.buildHints(),this.banner=be("div","hud-banner",this.root),be("div","hud-banner-title",this.banner,"Dessalage !"),be("div","hud-banner-text",this.banner,"Capsized: the crew are righting her…"),this.menuButton=be("button","hud-menu-button",this.root,"⛵ Boats (M)"),this.menuButton.type="button",this.menuButton.tabIndex=-1,this.menuButton.addEventListener("mousedown",e=>e.preventDefault()),this.menuButton.addEventListener("pointerdown",e=>{e.pointerType!=="mouse"&&e.preventDefault(),e.stopPropagation()}),this.menuButton.addEventListener("pointerup",e=>{if(e.pointerType==="mouse")return;e.preventDefault(),e.stopPropagation();const n=this.menuButton.getBoundingClientRect();if(!(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom))return;const s=o=>{o.preventDefault(),o.stopPropagation()};document.addEventListener("click",s,!0),window.setTimeout(()=>document.removeEventListener("click",s,!0),50),t()}),this.menuButton.addEventListener("click",t)}buildHeelDial(){this.heelPanel=be("div","hud-heel",this.root);const t=pi("svg",{viewBox:"0 0 200 112",class:"hud-heel-dial"},this.heelPanel);pi("path",{d:Aa(Math.PI/2,-Math.PI/2,Me.radius),class:"dial-track"},t),this.dangerArcs=[pi("path",{class:"dial-danger"},t),pi("path",{class:"dial-danger"},t)],this.needle=pi("g",{},t),pi("line",{x1:Me.cx,y1:Me.cy,x2:Me.cx,y2:Me.cy-Me.needle,class:"dial-mast"},this.needle),pi("path",{d:`M ${Me.cx-26} ${Me.cy-6} L ${Me.cx+26} ${Me.cy-6} L ${Me.cx+16} ${Me.cy+6} L ${Me.cx-16} ${Me.cy+6} Z`,class:"dial-hull"},this.needle),this.heelText=pi("text",{x:Me.cx,y:Me.cy-30,class:"dial-text"},t),this.heelLabel=be("div","hud-heel-label",this.heelPanel)}buildHints(){this.hints=be("div","hud-hints",this.root);for(const[t,e]of LS){const n=be("div",null,this.hints);be("kbd",null,n,t),n.append(` ${e}`)}this.touchNote=be("div","hud-touch-note",this.ui,"Hold the pads to steer, sheet, ease and hike."),this.coarseQuery=window.matchMedia("(pointer: coarse)"),this.coarse=this.coarseQuery.matches,this.coarseQuery.addEventListener("change",()=>{this.coarse=this.coarseQuery.matches,this.applyInputHints()}),this.applyInputHints()}applyInputHints(){this.hints.hidden=this.coarse,this.touchNote.hidden=!this.coarse}setVisible(t){this.root.hidden=!t}setCapsizeAngle(t){const e=Math.PI/2;this.dangerArcs[0].setAttribute("d",Aa(e,t,Me.radius)),this.dangerArcs[1].setAttribute("d",Aa(-t,-e,Me.radius)),this.capsizeAngle=t}update(t,e){const{balance:n}=t,i=t.body.velocity;this.speed.textContent=`Speed: ${Math.round(Math.hypot(i.x,i.z)*3.6)} km/h`;const s=e.getVector();Ta.set(0,0,1).applyQuaternion(t.group.quaternion).setY(0).normalize();const o=-(Ta.x*s.x+Ta.z*s.z)/Math.hypot(s.x,s.z),a=Math.round(Math.acos(Math.max(-1,Math.min(1,o)))*cu);this.awa.innerHTML=`AWA: ${a}° ${a<TS?'<span class="hud-warn">(IN IRONS)</span>':""}`,this.sheet.innerHTML=`Sail Sheet: ${Math.round(t.sailSheet*100)}%${t.sheetDump>.05?' <span class="hud-ease">easing</span>':""}`;const l=e.strength>=CS?"PUFF":e.strength<=PS?"lull":"";this.windLine.innerHTML=`Wind: ${e.speed.toFixed(1)} m/s ×${e.strength.toFixed(2)}${l?` <span class="hud-gust hud-gust-${l.toLowerCase()}">${l}</span>`:""}`;const c=Math.round(n.crewOut*100);this.crewLabel.textContent=`Crew out: ${c}%${t.hike==="out"?" (hiking)":t.hike==="in"?" (in)":""}`,this.crewFill.style.width=`${c}%`,this.mast.hidden=!t.isMastBroken,this.updateHeel(n),this.banner.classList.toggle("visible",n.isCapsized)}updateHeel(t){const e=t.heel*cu;this.needle.setAttribute("transform",`rotate(${-e} ${Me.cx} ${Me.cy})`),this.heelText.textContent=`${Math.round(Math.abs(e))}°`;const n=Math.abs(t.heel)/this.capsizeAngle,i=t.isCapsized||n>=RS?"danger":n>=AS?"caution":"ok";this.heelPanel.dataset.level=i;const s=this.coarse?"Ease / Hike out":"Space / E",o=this.coarse?"Hike in":"Q";t.isCapsized?this.heelLabel.textContent="Over!":i==="danger"?this.heelLabel.textContent=t.leewardHeel>0?`Ease! (${s})`:`Too far out! (${o})`:this.heelLabel.textContent=`Heel ${t.leewardHeel>=0?"to leeward":"to windward"}`}}function Re(r,t,e,n){const i=document.createElement(r);return t&&(i.className=t),n!==void 0&&(i.textContent=n),e?.appendChild(i),i}function Ra(r){return`#${r.toString(16).padStart(6,"0")}`}function IS(r){const{hull:t,sail:e,kit:n}=r;return[t.paint,t.stripe,t.pinstripe,e.base,...e.blocks.map(i=>i.color),n.shirt]}class NS{constructor(t,{onSelect:e,onClose:n}){this.onSelect=e,this.onClose=n,this.types=Object.values(t),this.currentId=null,this.root=Re("div","boat-menu",document.body);const i=Re("div","boat-menu-panel",this.root);Re("div","boat-menu-kicker",i,"Martinique · voile traditionnelle"),Re("h1","boat-menu-title",i,"Yoles & Gommiers"),Re("p","boat-menu-intro",i,"No trapezes: the crew lie out on wooden poles (bwa dressé) to hold the boat up. Keep her balanced, ease in the puffs, and don't dessaler.");const s=Re("div","boat-menu-cards",i);this.cards=this.types.map((a,l)=>this.buildCard(a,l,s));const o=Re("div","boat-menu-footer",i);this.resumeButton=Re("button","boat-menu-resume",o,"Resume (M / Esc)"),this.resumeButton.addEventListener("click",()=>this.onClose()),Re("span","boat-menu-hint",o,"Press 1 or 2 to pick"),window.addEventListener("keydown",a=>this.onKeyDown(a))}buildCard(t,e,n){const i=Py(t),s=Re("button",`boat-card boat-card-${t.id}`,n);s.style.setProperty("--card-accent",Ra(t.livery.hull.paint)),s.style.setProperty("--card-stripe",Ra(t.livery.hull.stripe)),Re("span","boat-card-key",s,String(e+1)),Re("span","boat-card-current",s,"Current boat"),Re("h2","boat-card-name",s,t.name),Re("p","boat-card-tagline",s,t.tagline);const o=Re("dl","boat-card-stats",s),a=t.steering.type==="rudder"?"barreur":`patron + ${i.steering-1} aides`;for(const[c,h]of[["Length",`${t.hull.length} m`],["Crew",`${i.total}: ${i.dresseurs} dresseurs, sheet hand, ${a}, bailer`],["Steering",t.steeringLabel]])Re("dt",null,o,c),Re("dd",null,o,h);const l=Re("div","boat-card-swatches",s);for(const c of IS(t.livery))Re("span",null,l).style.background=Ra(c);return Re("span","boat-card-cta",s,"Sail her →"),s.addEventListener("click",()=>this.onSelect(t.id)),{id:t.id,card:s}}get isOpen(){return!this.root.hidden}show(t){this.currentId=t,this.root.hidden=!1,this.resumeButton.hidden=t===null;for(const{id:e,card:n}of this.cards)n.classList.toggle("is-current",e===t)}hide(){this.root.hidden=!0}onKeyDown(t){if(!this.isOpen||t.repeat)return;const e=Number(t.key)-1;Number.isInteger(e)&&this.types[e]?this.onSelect(this.types[e].id):t.key==="Escape"&&this.currentId!==null&&this.onClose()}}const Kl=Object.freeze({name:"caribbean-day",sun:Object.freeze({elevationDeg:58,azimuthDeg:235,color:16774108,intensity:3.2}),sky:Object.freeze({turbidity:2.2,rayleigh:1.2,mieCoefficient:.004,mieDirectionalG:.82}),water:Object.freeze({deepColor:342620,scatterColor:1489330,shallowColor:4184527,foamColor:15924220}),fog:Object.freeze({color:13625328,density:.0025}),hemisphere:Object.freeze({skyColor:12576511,groundColor:1796730,intensity:.7}),exposure:.45});function pd({elevationDeg:r,azimuthDeg:t}){const e=r*Math.PI/180,n=t*Math.PI/180,i=Math.cos(e);return{x:i*Math.sin(n),y:Math.sin(e),z:i*Math.cos(n)}}function FS(r){return`
float waveFilter(float k, float footprint, float minSamples) {
    float samplesPerWavelength = 6.28318530718 / (k * footprint);
    return clamp((samplesPerWavelength - minSamples) / minSamples, 0.0, 1.0);
}

vec3 oceanWaves(vec2 p, float t, float footprint, float minSamples, out vec3 surfaceNormal, out float jacobian) {
    vec3 displacement = vec3(0.0);
    vec3 sinTerms = vec3(0.0);
    vec2 cosTerms = vec2(0.0);
    float f;
${Array.from({length:r},(e,n)=>[`    f = waveFilter(WAVE${n}_K, footprint, minSamples);`,`    gerstnerAccumulate(p, t, WAVE${n}_DIRECTION, WAVE${n}_K, WAVE${n}_OMEGA, WAVE${n}_AMPLITUDE * f, WAVE${n}_STEEPNESS * f, WAVE${n}_PHASE, displacement, sinTerms, cosTerms);`].join(`
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
`}const US=r=>`
uniform float uTime;

attribute float vertexSpacing;

varying vec3 vWorldPosition;
varying vec2 vRestPosition;
varying float vWaveHeight;

#include <common>
#include <fog_pars_vertex>

${r}

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
`,OS=r=>`
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

varying vec3 vWorldPosition;
varying vec2 vRestPosition;
varying float vWaveHeight;

#include <common>
#include <fog_pars_fragment>

${r}

// tan(19.47 deg), the half-angle of a Kelvin wake.
const float KELVIN_TAN = 0.35355;

vec3 skyRadiance(vec3 direction, float lod) {
    if (uHasSkyTexture > 0.5) {
        return textureLod(uSkyTexture, direction, lod).rgb;
    }
    return mix(uSkyHorizon, uSkyZenith, sqrt(saturate(direction.y)));
}

float waterDepth(vec2 p) {
    vec2 uv = (p - uDepthBounds.xy) / (uDepthBounds.zw - uDepthBounds.xy);
    if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) {
        return uDepthScale;
    }
    return texture2D(uDepthMap, uv).r * uDepthScale;
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
    vec2 rippleA = texture2D(uNoiseTexture, p / 21.0 + drift * 0.012).gb * 2.0 - 1.0;
    vec2 rippleB = texture2D(uNoiseTexture, p / 8.0 + drift * 0.025 + windSide * uTime * 0.008).gb * 2.0 - 1.0;
    float rippleFade = 1.0 - smoothstep(0.05, 0.6, footprint);
    vec2 rippleGradient = (0.6 * rippleA + 0.4 * rippleB) * uDetailStrength * rippleFade;

    float breakup = texture2D(uNoiseTexture, p / 13.0 + drift * 0.01).r;
    float churn = 0.5 * (
        texture2D(uNoiseTexture, p / 4.0 + windSide * uTime * 0.05).r +
        texture2D(uNoiseTexture, p / 5.3 - drift * 0.04 + vec2(0.37, 0.71)).r
    );

    vec4 wake = boatWake(p, breakup, churn);
    vec2 surfaceGradient = rippleGradient + wake.zw;
    normal = normalize(normal - vec3(surfaceGradient.x, 0.0, surfaceGradient.y));

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
    vec3 sunIrradiance = uSunColor * sunHeight;

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

    vec3 body = albedo * (sunIrradiance * RECIPROCAL_PI + skyAmbient);

    // Sun glint: normalized Blinn-Phong lobes that widen with the pixel footprint.
    vec3 halfVector = normalize(sunDir + toCamera);
    float NdotH = saturate(dot(normal, halfVector));
    float sunFresnel = 0.02 + 0.98 * pow(1.0 - saturate(dot(halfVector, toCamera)), 5.0);
    float shininess = 1800.0 / (1.0 + footprint * 6.0);
    float lobes = pow(NdotH, shininess) * (shininess + 8.0) / (8.0 * PI)
        + 0.15 * pow(NdotH, 160.0) * (168.0 / (8.0 * PI));
    vec3 glint = uSunColor * NdotL * sunFresnel * lobes * uGlintStrength;

    vec3 color = mix(body, skyReflection, fresnel) + glint;

    float crestMask = smoothstep(uFoamJacobian + 0.05, uFoamJacobian - 0.05, jacobian)
        * smoothstep(0.45, 0.75, crest) * uCrestFoam;
    float crestFoam = foamCoverage(crestMask, 0.6 * breakup + 0.4 * churn);
    float foam = saturate(max(crestFoam, wake.x));
    vec3 foamLight = uSunColor * NdotL * RECIPROCAL_PI + skyAmbient;
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
        color = mix(color, horizon, fogFactor * uHasSkyTexture);
    #endif

    gl_FragColor = vec4(color, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>

    #ifdef USE_FOG
        gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor * (1.0 - uHasSkyTexture));
    #endif
}
`;function BS(r){const t=`${Cy(r)}
${FS(r.length)}`;if(!t.includes("void gerstnerAccumulate(")||!t.includes("WAVE0_K"))throw new Error("wavesGLSL no longer provides gerstnerAccumulate and WAVE<i>_* constants");return{vertexShader:US(t),fragmentShader:OS(t)}}function zS(r){let t=r>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function uu(r){return r*r*(3-2*r)}function du(r,t,e,n){const i=zS(n),s=new Float32Array(r*r);let o=1,a=0;for(let l=0;l<e;l++){const c=t<<l,h=new Float32Array(c*c);for(let u=0;u<h.length;u++)h[u]=i();const d=r/c;for(let u=0;u<r;u++){const f=u/d,m=Math.floor(f),_=uu(f-m),g=m*c,p=(m+1)%c*c;for(let v=0;v<r;v++){const y=v/d,S=Math.floor(y),E=uu(y-S),T=(S+1)%c,R=h[g+S],I=h[g+T],M=h[p+S],w=h[p+T],L=R+(I-R)*E,O=M+(w-M)*E;s[u*r+v]+=o*(L+(O-L)*_)}}a+=o,o*=.5}for(let l=0;l<s.length;l++)s[l]/=a;return s}function fu(r){let t=1/0,e=-1/0;for(const i of r)t=Math.min(t,i),e=Math.max(e,i);const n=e-t||1;for(let i=0;i<r.length;i++)r[i]=(r[i]-t)/n;return r}function to(r){return Math.max(0,Math.min(255,Math.round(r*255)))}function kS(r=256){const t=fu(du(r,8,5,1337)),e=fu(du(r,16,4,7331)),n=new Float32Array(r*r),i=new Float32Array(r*r);let s=1e-6;for(let l=0;l<r;l++){const c=(l+1)%r*r,h=(l-1+r)%r*r;for(let d=0;d<r;d++){const u=(d+1)%r,f=(d-1+r)%r,m=l*r+d;n[m]=(e[l*r+u]-e[l*r+f])*.5,i[m]=(e[c+d]-e[h+d])*.5,s=Math.max(s,Math.abs(n[m]),Math.abs(i[m]))}}const o=new Uint8Array(r*r*4);for(let l=0;l<r*r;l++)o[l*4]=to(t[l]),o[l*4+1]=to(.5+.5*(n[l]/s)),o[l*4+2]=to(.5+.5*(i[l]/s)),o[l*4+3]=to(e[l]);const a=new yo(o,r,r,dn,nn);return a.wrapS=Js,a.wrapT=Js,a.magFilter=Oe,a.minFilter=On,a.generateMipmaps=!0,a.anisotropy=4,a.needsUpdate=!0,a}const pu=4,mu=.6;function HS({innerSpacing:r,innerHalfExtent:t,growth:e,halfExtent:n}){const i=[],s=Math.round(t/r);for(let l=1;l<=s;l++)i.push(l*r);let o=s*r,a=r;for(;o<n;)a*=e,o+=a,i.push(o);return[...i.map(l=>-l).reverse(),0,...i]}function VS(r){const t=HS(r),e=t.length,n=t.map((c,h)=>Math.max(h>0?c-t[h-1]:0,h<e-1?t[h+1]-c:0)),i=new Float32Array(e*e*3),s=new Float32Array(e*e);for(let c=0;c<e;c++)for(let h=0;h<e;h++){const d=c*e+h;i[d*3]=t[h],i[d*3+2]=t[c],s[d]=Math.max(n[h],n[c])}const o=new Uint32Array((e-1)*(e-1)*6);let a=0;for(let c=0;c<e-1;c++)for(let h=0;h<e-1;h++){const d=c*e+h,u=d+e,f=d+1,m=u+1;o[a++]=d,o[a++]=u,o[a++]=f,o[a++]=f,o[a++]=u,o[a++]=m}const l=new we;return l.setAttribute("position",new rn(i,3)),l.setAttribute("vertexSpacing",new rn(s,1)),l.setIndex(new rn(o,1)),l}function GS(){const r=new yo(new Uint8Array([255,255,255,255]),1,1);return r.needsUpdate=!0,r}const ks=new D;class WS{constructor({waves:t,preset:e=Kl,sunDirection:n=null,skyTexture:i=null,grid:s={}}={}){if(!t||t.length===0)throw new Error("Ocean needs the wave set from createWaveSet");this.waves=t,this.preset=e,this.grid={innerSpacing:.5,innerHalfExtent:40,growth:1.045,halfExtent:1200,...s},this.noiseTexture=kS(),this.deepDepthTexture=GS();const o=n?new D().copy(n):new D().copy(pd(e.sun)),{water:a,hemisphere:l,fog:c,exposure:h}=e,d=1/h,u=t[0].direction;this.uniforms={...zl.clone(ut.fog),uTime:{value:0},uSunDirection:{value:o.normalize()},uSunColor:{value:new Nt(e.sun.color).multiplyScalar(e.sun.intensity)},uDeepColor:{value:new Nt(a.deepColor)},uScatterColor:{value:new Nt(a.scatterColor)},uShallowColor:{value:new Nt(a.shallowColor)},uFoamColor:{value:new Nt(a.foamColor)},uScatterStrength:{value:.6},uGlintStrength:{value:1.5},uDetailStrength:{value:.12},uCrestFoam:{value:.8},uFoamJacobian:{value:.84},uSkyTexture:{value:null},uHasSkyTexture:{value:0},uSkyZenith:{value:new Nt(l.skyColor).multiplyScalar(d)},uSkyHorizon:{value:new Nt(c.color).multiplyScalar(d)},uNoiseTexture:{value:this.noiseTexture},uWindDirection:{value:new Tt(u.x,u.z)},uDepthMap:{value:this.deepDepthTexture},uDepthBounds:{value:new _e(0,0,1,1)},uDepthScale:{value:100},uShallowDepth:{value:8},uBoatPosition:{value:new Tt},uBoatForward:{value:new Tt(0,1)},uBoatSpeed:{value:0},uHullHalfSize:{value:new Tt(pu,mu)},uWakeStrength:{value:1}};const{vertexShader:f,fragmentShader:m}=BS(t);this.material=new yn({name:"OceanMaterial",uniforms:this.uniforms,vertexShader:f,fragmentShader:m,fog:!0}),this.geometry=VS(this.grid),this.mesh=new ae(this.geometry,this.material),this.mesh.name="Ocean",this.mesh.frustumCulled=!1,this.setSkyTexture(i)}update(t,e,n){this.uniforms.uTime.value=t;const i=this.grid.innerSpacing;this.mesh.position.set(Math.round(e.position.x/i)*i,0,Math.round(e.position.z/i)*i),this.updateBoat(n)}updateBoat(t){const e=this.uniforms;if(!t||!t.group){e.uBoatSpeed.value=0;return}const n=t.group.position;e.uBoatPosition.value.set(n.x,n.z),ks.set(0,0,1).applyQuaternion(t.group.quaternion);const i=Math.hypot(ks.x,ks.z);i>1e-4&&e.uBoatForward.value.set(ks.x/i,ks.z/i);const s=t.body&&t.body.velocity,o=s?Math.hypot(s.x,s.z):0;e.uBoatSpeed.value=Number.isFinite(o)?o:0,e.uHullHalfSize.value.set(t.hullHalfLength??pu,t.hullHalfWidth??mu)}setSunDirection(t){this.uniforms.uSunDirection.value.copy(t).normalize()}setSkyTexture(t){this.uniforms.uSkyTexture.value=t,this.uniforms.uHasSkyTexture.value=t?1:0}setDepthMap(t,{minX:e,minZ:n,maxX:i,maxZ:s,maxDepth:o=100,shallowDepth:a=8}={}){const l=this.uniforms;if(!t){l.uDepthMap.value=this.deepDepthTexture,l.uDepthBounds.value.set(0,0,1,1),l.uDepthScale.value=100;return}l.uDepthMap.value=t,l.uDepthBounds.value.set(e,n,i,s),l.uDepthScale.value=o,l.uShallowDepth.value=a}dispose(){this.geometry.dispose(),this.material.dispose(),this.noiseTexture.dispose(),this.deepDepthTexture.dispose()}}class Eo extends ae{constructor(){const t=Eo.SkyShader,e=new yn({name:t.name,uniforms:zl.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:$e,depthWrite:!1});super(new xn(1,1,1),e),this.isSky=!0}}Eo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class XS{constructor({preset:t=Kl,scale:e=1e4}={}){this.preset=t,this.sky=new Eo,this.sky.name="Sky",this.sky.scale.setScalar(e),this.sky.frustumCulled=!1;const n=this.sky.material.uniforms;n.turbidity.value=t.sky.turbidity,n.rayleigh.value=t.sky.rayleigh,n.mieCoefficient.value=t.sky.mieCoefficient,n.mieDirectionalG.value=t.sky.mieDirectionalG,this.sunDirection=new D,this.setSun(t.sun),this.cubeTarget=null,this.environmentTarget=null,this.skyCubeTexture=null,this.environment=null}setSun({elevationDeg:t,azimuthDeg:e}){return this.sunDirection.copy(pd({elevationDeg:t,azimuthDeg:e})),this.sky.material.uniforms.sunPosition.value.copy(this.sunDirection),this.sunDirection}buildEnvironment(t,{cubeSize:e=128}={}){this.disposeEnvironment(),this.cubeTarget=new kl(e,{type:Wn,generateMipmaps:!0,minFilter:On});const n=new Xu,i=new ae(this.sky.geometry,this.sky.material);i.frustumCulled=!1,n.add(i),new Gu(.1,10,this.cubeTarget).update(t,n);const o=new yl(t);return this.environmentTarget=o.fromCubemap(this.cubeTarget.texture),o.dispose(),this.skyCubeTexture=this.cubeTarget.texture,this.environment=this.environmentTarget.texture,this.environment}disposeEnvironment(){this.cubeTarget?.dispose(),this.environmentTarget?.dispose(),this.cubeTarget=null,this.environmentTarget=null,this.skyCubeTexture=null,this.environment=null}dispose(){this.disposeEnvironment(),this.sky.geometry.dispose(),this.sky.material.dispose()}}const gu=8,_u=5,Ca=100,eo=12;class qS{constructor(t){this.physics=t,this.preset=Kl,this.elapsed=0,this.boatPosition=new D,this.boat=null,this.spawnPosition=new D(Zs.x,Zs.y,Zs.z),this.spawnHeading=new We().setFromAxisAngle(new D(0,1,0),wl),this.scene=new Xu,this.camera=new vn(75,window.innerWidth/window.innerHeight,.1,2500),this.renderer=new Q_({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.toneMapping=Al,this.renderer.toneMappingExposure=this.preset.exposure,this.renderer.outputColorSpace=en,document.body.appendChild(this.renderer.domElement),this.wind=new $M,this.waves=Ry(this.wind.getVector()),this.cameraRig=new ES(this.camera,this.renderer.domElement,this.waves),this.initEnvironment(),this.initLights(),this.track=new QM(this.scene),this.track.setWaves(this.waves),this.hud=new DS({onMenu:()=>this.openMenu()}),this.menu=new NS(bl,{onSelect:e=>this.selectBoat(e),onClose:()=>this.closeMenu()}),this.initWindIndicator(),window.addEventListener("resize",()=>this.onWindowResize()),window.addEventListener("keydown",e=>this.onKeyDown(e)),this.openMenu()}get simulating(){return this.boat!==null&&!this.menu.isOpen}selectBoat(t){const e=bl[t];if(!e)throw new Error(`Unknown boat type: ${t}`);this.boat?.dispose(),this.boat=new WM(this.scene,this.physics.world,e),this.boat.setWaves(this.waves),this.hud.setCapsizeAngle(e.balance.capsizeAngle),this.closeMenu()}openMenu(){this.menu.show(this.boat?.config.id??null),this.hud.setVisible(!1)}closeMenu(){this.boat&&(this.menu.hide(),this.hud.setVisible(!0))}onKeyDown(t){t.repeat||t.key!=="m"&&t.key!=="M"||(this.menu.isOpen?this.closeMenu():this.openMenu())}initWindIndicator(){const t=new np(new D(0,0,1),new D(0,gu,0),_u,16776960);this.scene.add(t),this.windArrow=t}initLights(){const{sun:t,hemisphere:e}=this.preset;this.hemisphereLight=new Kf(e.skyColor,e.groundColor,e.intensity),this.scene.add(this.hemisphereLight),this.sunLight=new tp(t.color,t.intensity),this.sunLight.castShadow=!0;const n=this.sunLight.shadow.camera;n.left=-eo,n.right=eo,n.top=eo,n.bottom=-eo,n.near=Ca-30,n.far=Ca+30,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.bias=-5e-4,this.sunLight.shadow.normalBias=.02,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.updateSun(this.boatPosition)}initEnvironment(){const{fog:t}=this.preset;this.scene.fog=new Hl(t.color,t.density),this.seaSky=new XS({preset:this.preset}),this.scene.add(this.seaSky.sky),this.scene.environment=this.seaSky.buildEnvironment(this.renderer),this.ocean=new WS({waves:this.waves,preset:this.preset,sunDirection:this.seaSky.sunDirection,skyTexture:this.seaSky.skyCubeTexture}),this.scene.add(this.ocean.mesh)}updateSun(t){this.sunLight.target.position.copy(t),this.sunLight.position.copy(t).addScaledVector(this.seaSky.sunDirection,Ca),this.sunLight.target.updateMatrixWorld()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}update(t,e){this.elapsed+=t;const n=this.wind.getVector();this.simulating?(this.wind.update(t),this.boat.update(t,e,n,this.elapsed),this.hud.update(this.boat,this.wind)):this.boat?.updateVisuals(t,this.elapsed);const i=this.boat?this.boat.visual.getWorldPosition(this.boatPosition):this.spawnPosition,s=this.boat?this.boat.group.quaternion:this.spawnHeading;this.windArrow.setDirection(n.clone().normalize()),this.windArrow.setLength(_u*this.wind.strength),this.windArrow.position.copy(i).add(new D(0,gu,0)),this.cameraRig.update(t,i,s,this.elapsed),this.track.update(this.elapsed),this.updateSun(i),this.ocean.update(this.elapsed,this.camera,this.boat)}render(){this.renderer.render(this.scene,this.camera)}}class YS{constructor(){this.world=new vy,this.world.gravity.set(0,-9.82,0),this.world.broadphase=new fs(this.world),this.world.allowSleep=!0,this.defaultMaterial=new dr("default");const t=new ur(this.defaultMaterial,this.defaultMaterial,{friction:.1,restitution:.3});this.world.addContactMaterial(t)}update(t){try{this.world.step(1/60,t,3)}catch(e){throw console.error("💥 PHYSICS ENGINE CRASH 💥",e),e}}}const jS={port:"ArrowLeft",starboard:"ArrowRight",sheetIn:"ArrowUp",sheetOut:"ArrowDown",ease:" ",hikeOut:"e",hikeIn:"q"};function Fn(r,t,e,n){const i=document.createElement(r);return t&&(i.className=t),n!==void 0&&(i.textContent=n),e?.appendChild(i),i}function Hs(r,t,e){const n=document.createElementNS("http://www.w3.org/2000/svg",r);for(const[i,s]of Object.entries(t))n.setAttribute(i,s);return e?.appendChild(n),n}function $S(r){const t=Hs("svg",{viewBox:"0 0 24 24",class:"touch-icon","aria-hidden":"true"});return r==="ease"?(Hs("path",{d:"M3 14c3.2-.6 5-4.2 7.2-8.2",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round"},t),Hs("path",{d:"M3 19c4.2-.8 6.4-3.6 9-7.4",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round"},t),Hs("path",{d:"M11 13c2.2 2.6 4.6 3.8 10 3.8",fill:"none",stroke:"currentColor","stroke-width":"2.2","stroke-linecap":"round"},t),t):(Hs("polyline",{points:{left:"15 5 7 12 15 19",right:"9 5 17 12 9 19",up:"5 15 12 7 19 15",down:"5 9 12 17 19 9"}[r],fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round"},t),t)}function vu(r,t,e){const n=r.getBoundingClientRect();return t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}function Fi({action:r,className:t,label:e,aria:n,icon:i,kicker:s}){const o=Fn("button",`touch-btn${t?` ${t}`:""}`);return o.type="button",o.dataset.action=r,o.tabIndex=-1,o.draggable=!1,o.setAttribute("aria-label",n),o.setAttribute("aria-pressed","false"),i&&o.append($S(i)),s&&Fn("span","touch-kicker",o,s),Fn("span","touch-label",o,e),o}class ZS{constructor({onChange:t}){this.onChange=t,this.byPointer=new Map,this.counts=new Map,this.coarse=window.matchMedia("(pointer: coarse)"),this.menu=document.querySelector(".boat-menu"),this.root=Fn("div","touch-pad"),this.root.hidden=!0,Fn("p","touch-rotate",this.root,"Rotate your phone"),Fn("div","touch-steer",this.root).append(Fi({action:"port",label:"Port",aria:"Port",icon:"left"}),Fi({action:"starboard",label:"Starboard",aria:"Starboard",icon:"right"}));const n=Fn("div","touch-right",this.root),i=Fn("div","touch-top-row",n);i.append(Fi({action:"ease",className:"touch-ease",label:"Ease",aria:"Ease the sheet",icon:"ease"})),Fn("div","touch-hikes",i).append(Fi({action:"hikeOut",className:"touch-hike",label:"Out",aria:"Hike out",kicker:"Hike"}),Fi({action:"hikeIn",className:"touch-hike",label:"In",aria:"Hike in",kicker:"Hike"})),Fn("div","touch-sheets",n).append(Fi({action:"sheetIn",label:"Sheet in",aria:"Sheet in",icon:"up"}),Fi({action:"sheetOut",label:"Sheet out",aria:"Sheet out",icon:"down"}));for(const a of this.root.querySelectorAll(".touch-btn"))this.bindButton(a);this.root.addEventListener("contextmenu",a=>a.preventDefault()),this.coarse.addEventListener("change",()=>this.syncVisibility()),this.menu&&(this.menuObserver=new MutationObserver(()=>this.syncVisibility()),this.menuObserver.observe(this.menu,{attributes:!0,attributeFilter:["hidden"]})),window.addEventListener("blur",()=>this.clearAll()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearAll()}),window.addEventListener("pointerup",a=>this.releasePointer(a.pointerId)),window.addEventListener("pointercancel",a=>this.releasePointer(a.pointerId)),this.syncVisibility(),document.body.append(this.root)}bindButton(t){t.addEventListener("pointerdown",e=>this.onPointerDown(e,t)),t.addEventListener("pointermove",e=>this.onPointerMove(e),{passive:!1}),t.addEventListener("pointerup",e=>this.releasePointer(e.pointerId)),t.addEventListener("pointercancel",e=>this.releasePointer(e.pointerId)),t.addEventListener("lostpointercapture",e=>this.releasePointer(e.pointerId)),t.addEventListener("pointerleave",e=>this.onPointerLeave(e,t)),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("selectstart",e=>e.preventDefault())}isHeld(t){return(this.counts.get(t)||0)>0}isMenuOpen(){return!!this.menu&&!this.menu.hidden}syncVisibility(){const t=this.coarse.matches&&!this.isMenuOpen();t||this.clearAll(),this.root.hidden=!t}onPointerDown(t,e){if(t.pointerType==="mouse"&&t.button!==0||this.byPointer.has(t.pointerId))return;t.preventDefault(),t.stopPropagation();const n=jS[e.dataset.action];this.byPointer.set(t.pointerId,{key:n,button:e}),this.counts.set(n,(this.counts.get(n)||0)+1),this.paint(e);try{e.setPointerCapture(t.pointerId)}catch{}this.onChange(n)}onPointerMove(t){const e=this.byPointer.get(t.pointerId);e&&(t.preventDefault(),vu(e.button,t.clientX,t.clientY)||this.releasePointer(t.pointerId))}onPointerLeave(t,e){this.byPointer.has(t.pointerId)&&(vu(e,t.clientX,t.clientY)||this.releasePointer(t.pointerId))}releasePointer(t){const e=this.byPointer.get(t);if(!e)return;this.byPointer.delete(t);const n=(this.counts.get(e.key)||1)-1;n>0?this.counts.set(e.key,n):this.counts.delete(e.key),this.paint(e.button);try{e.button.hasPointerCapture(t)&&e.button.releasePointerCapture(t)}catch{}this.onChange(e.key)}clearAll(){for(const t of[...this.byPointer.keys()])this.releasePointer(t)}paint(t){let e=!1;for(const n of this.byPointer.values())if(n.button===t){e=!0;break}t.classList.toggle("is-pressed",e),t.setAttribute("aria-pressed",e?"true":"false")}}const md=new YS,ho=new qS(md);window.__game=ho;const gd={},Jl=new Set,KS=new Set([" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]),JS=new ZS({onChange(r){Ql(r)}});function Ql(r){gd[r]=Jl.has(r)||JS.isHeld(r)}window.addEventListener("keydown",r=>{Jl.add(r.key),Ql(r.key),KS.has(r.key)&&r.preventDefault()});window.addEventListener("keyup",r=>{Jl.delete(r.key),Ql(r.key)});let no=null;function El(r){try{if(no===null){no=r,requestAnimationFrame(El);return}const t=Math.min((r-no)/1e3,.05);no=r,ho.simulating&&md.update(t),ho.update(t,gd),ho.render(),requestAnimationFrame(El)}catch(t){console.error("🔥 CRITICAL GAME LOOP ERROR 🔥",t)}}requestAnimationFrame(El);
