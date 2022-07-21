const Ro=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};Ro();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tr="141",bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Po=0,ur=1,Io=2,ka=1,Fo=2,ri=3,hi=0,yt=1,kt=2,No=1,Qt=0,Vn=1,dr=2,fr=3,pr=4,zo=5,Bn=100,Oo=101,Uo=102,mr=103,gr=104,Bo=200,Go=201,Vo=202,ko=203,Ha=204,Wa=205,Ho=206,Wo=207,Xo=208,qo=209,jo=210,Yo=0,Zo=1,$o=2,ks=3,Ko=4,Jo=5,Qo=6,el=7,Zi=0,tl=1,nl=2,Vt=0,il=1,sl=2,rl=3,al=4,ol=5,Xa=300,Hn=301,Wn=302,Hs=303,Ws=304,$i=306,Xs=1e3,vt=1001,qs=1002,rt=1003,_r=1004,xr=1005,pt=1006,ll=1007,Ki=1008,mn=1009,cl=1010,hl=1011,qa=1012,ul=1013,hn=1014,un=1015,ui=1016,dl=1017,fl=1018,kn=1020,pl=1021,ml=1022,Mt=1023,gl=1024,_l=1025,fn=1026,Xn=1027,xl=1028,vl=1029,Ml=1030,yl=1031,Sl=1033,ss=33776,rs=33777,as=33778,os=33779,vr=35840,Mr=35841,yr=35842,Sr=35843,bl=36196,br=37492,wr=37496,Er=37808,Tr=37809,Ar=37810,Cr=37811,Lr=37812,Dr=37813,Rr=37814,Pr=37815,Ir=37816,Fr=37817,Nr=37818,zr=37819,Or=37820,Ur=37821,Br=36492,gn=3e3,ze=3001,wl=3200,El=3201,Yn=0,Tl=1,Bt="srgb",dn="srgb-linear",ls=7680,Al=519,Gr=35044,Vr="300 es",js=1035;class tn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const je=[];for(let r=0;r<256;r++)je[r]=(r<16?"0":"")+r.toString(16);const cs=Math.PI/180,kr=180/Math.PI;function mi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[r&255]+je[r>>8&255]+je[r>>16&255]+je[r>>24&255]+"-"+je[e&255]+je[e>>8&255]+"-"+je[e>>16&15|64]+je[e>>24&255]+"-"+je[t&63|128]+je[t>>8&255]+"-"+je[t>>16&255]+je[t>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function nt(r,e,t){return Math.max(e,Math.min(t,r))}function Cl(r,e){return(r%e+e)%e}function hs(r,e,t){return(1-t)*r+t*e}function Hr(r){return(r&r-1)===0&&r!==0}function Ys(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class me{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],f=n[7],u=n[2],m=n[5],g=n[8],p=i[0],h=i[3],_=i[6],b=i[1],C=i[4],E=i[7],x=i[2],T=i[5],P=i[8];return s[0]=o*p+a*b+c*x,s[3]=o*h+a*C+c*T,s[6]=o*_+a*E+c*P,s[1]=l*p+d*b+f*x,s[4]=l*h+d*C+f*T,s[7]=l*_+d*E+f*P,s[2]=u*p+m*b+g*x,s[5]=u*h+m*C+g*T,s[8]=u*_+m*E+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*s*d+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,u=a*c-d*s,m=l*s-o*c,g=t*f+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(i*l-d*n)*p,e[2]=(a*n-i*o)*p,e[3]=u*p,e[4]=(d*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],c=i[1],l=i[4],d=i[7];return i[0]=t*s+n*c,i[3]=t*o+n*l,i[6]=t*a+n*d,i[1]=-n*s+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*d,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ja(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function Yi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const us={[Bt]:{[dn]:pn},[dn]:{[Bt]:qi}},mt={legacyMode:!0,get workingColorSpace(){return dn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(us[e]&&us[e][t]!==void 0){const n=us[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Ya={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},He={r:0,g:0,b:0},gt={h:0,s:0,l:0},Si={h:0,s:0,l:0};function ds(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function bi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dn){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dn){if(e=Cl(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ds(o,s,e+1/3),this.g=ds(o,s,e),this.b=ds(o,s,e-1/3)}return mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,mt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,mt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,d=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(c,l,d,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,mt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,mt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Bt){const n=Ya[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return mt.fromWorkingColorSpace(bi(this,He),e),nt(He.r*255,0,255)<<16^nt(He.g*255,0,255)<<8^nt(He.b*255,0,255)<<0}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dn){mt.fromWorkingColorSpace(bi(this,He),t);const n=He.r,i=He.g,s=He.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=dn){return mt.fromWorkingColorSpace(bi(this,He),t),e.r=He.r,e.g=He.g,e.b=He.b,e}getStyle(e=Bt){return mt.fromWorkingColorSpace(bi(this,He),e),e!==Bt?`color(${e} ${He.r} ${He.g} ${He.b})`:`rgb(${He.r*255|0},${He.g*255|0},${He.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(gt),gt.h+=e,gt.s+=t,gt.l+=n,this.setHSL(gt.h,gt.s,gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gt),e.getHSL(Si);const n=hs(gt.h,Si.h,t),i=hs(gt.s,Si.s,t),s=hs(gt.l,Si.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ve.NAMES=Ya;let En;class Za{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{En===void 0&&(En=Yi("canvas")),En.width=e.width,En.height=e.height;const n=En.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=En}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Yi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=pn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class $a{constructor(e=null){this.isSource=!0,this.uuid=mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(fs(i[o].image)):s.push(fs(i[o]))}else s=fs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function fs(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Za.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ll=0;class St extends tn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=vt,i=vt,s=pt,o=Ki,a=Mt,c=mn,l=1,d=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=mi(),this.name="",this.source=new $a(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case vt:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case vt:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Xa;class Ze{constructor(e=0,t=0,n=0,i=1){this.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],m=c[5],g=c[9],p=c[2],h=c[6],_=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-p)<.01&&Math.abs(g-h)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+p)<.1&&Math.abs(g+h)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,E=(m+1)/2,x=(_+1)/2,T=(d+u)/4,P=(f+p)/4,v=(g+h)/4;return C>E&&C>x?C<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(C),i=T/n,s=P/n):E>x?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=T/i,s=v/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=P/s,i=v/s),this.set(n,i,s,t),this}let b=Math.sqrt((h-g)*(h-g)+(f-p)*(f-p)+(u-d)*(u-d));return Math.abs(b)<.001&&(b=1),this.x=(h-g)/b,this.y=(f-p)/b,this.z=(u-d)/b,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class en extends tn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $a(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ka extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rt,this.minFilter=rt,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dl extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rt,this.minFilter=rt,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],d=n[i+2],f=n[i+3];const u=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||c!==u||l!==m||d!==g){let h=1-a;const _=c*u+l*m+d*g+f*p,b=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const x=Math.sqrt(C),T=Math.atan2(x,_*b);h=Math.sin(h*T)/x,a=Math.sin(a*T)/x}const E=a*b;if(c=c*h+u*E,l=l*h+m*E,d=d*h+g*E,f=f*h+p*E,h===1-a){const x=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=x,l*=x,d*=x,f*=x}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],d=n[i+3],f=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+d*f+c*m-l*u,e[t+1]=c*g+d*u+l*f-a*m,e[t+2]=l*g+d*m+a*u-c*f,e[t+3]=d*g-a*f-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(i/2),f=a(s/2),u=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*d*f+l*m*g,this._y=l*m*f-u*d*g,this._z=l*d*g+u*m*f,this._w=l*d*f-u*m*g;break;case"YXZ":this._x=u*d*f+l*m*g,this._y=l*m*f-u*d*g,this._z=l*d*g-u*m*f,this._w=l*d*f+u*m*g;break;case"ZXY":this._x=u*d*f-l*m*g,this._y=l*m*f+u*d*g,this._z=l*d*g+u*m*f,this._w=l*d*f-u*m*g;break;case"ZYX":this._x=u*d*f-l*m*g,this._y=l*m*f+u*d*g,this._z=l*d*g-u*m*f,this._w=l*d*f+u*m*g;break;case"YZX":this._x=u*d*f+l*m*g,this._y=l*m*f+u*d*g,this._z=l*d*g-u*m*f,this._w=l*d*f-u*m*g;break;case"XZY":this._x=u*d*f-l*m*g,this._y=l*m*f-u*d*g,this._z=l*d*g+u*m*f,this._w=l*d*f+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=n+a+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(d-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+i*l-s*c,this._y=i*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-i*a,this._w=o*d-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),f=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){this.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Wr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,d=c*n+a*t-s*i,f=c*i+s*n-o*t,u=-s*t-o*n-a*i;return this.x=l*c+u*-s+d*-a-f*-o,this.y=d*c+u*-o+f*-s-l*-a,this.z=f*c+u*-a+l*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ps.copy(this).projectOnVector(e),this.sub(ps)}reflect(e){return this.sub(ps.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ps=new R,Wr=new _n;class gi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const d=e[c],f=e[c+1],u=e[c+2];d<t&&(t=d),f<n&&(n=f),u<i&&(i=u),d>s&&(s=d),f>o&&(o=f),u>a&&(a=u)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const d=e.getX(c),f=e.getY(c),u=e.getZ(c);d<t&&(t=d),f<n&&(n=f),u<i&&(i=u),d>s&&(s=d),f>o&&(o=f),u>a&&(a=u)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)sn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(sn)}else n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox),ms.applyMatrix4(e.matrixWorld),this.union(ms);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ti),wi.subVectors(this.max,ti),Tn.subVectors(e.a,ti),An.subVectors(e.b,ti),Cn.subVectors(e.c,ti),qt.subVectors(An,Tn),jt.subVectors(Cn,An),rn.subVectors(Tn,Cn);let t=[0,-qt.z,qt.y,0,-jt.z,jt.y,0,-rn.z,rn.y,qt.z,0,-qt.x,jt.z,0,-jt.x,rn.z,0,-rn.x,-qt.y,qt.x,0,-jt.y,jt.x,0,-rn.y,rn.x,0];return!gs(t,Tn,An,Cn,wi)||(t=[1,0,0,0,1,0,0,0,1],!gs(t,Tn,An,Cn,wi))?!1:(Ei.crossVectors(qt,jt),t=[Ei.x,Ei.y,Ei.z],gs(t,Tn,An,Cn,wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return sn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ft[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ft[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ft[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ft[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ft[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ft[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ft[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ft[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ft),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ft=[new R,new R,new R,new R,new R,new R,new R,new R],sn=new R,ms=new gi,Tn=new R,An=new R,Cn=new R,qt=new R,jt=new R,rn=new R,ti=new R,wi=new R,Ei=new R,an=new R;function gs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){an.fromArray(r,s);const a=i.x*Math.abs(an.x)+i.y*Math.abs(an.y)+i.z*Math.abs(an.z),c=e.dot(an),l=t.dot(an),d=n.dot(an);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Rl=new gi,Xr=new R,Ti=new R,_s=new R;class _i{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(_s.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Ti.set(0,0,1).multiplyScalar(e.radius):Ti.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Xr.copy(e.center).add(Ti)),this.expandByPoint(Xr.copy(e.center).sub(Ti)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nt=new R,xs=new R,Ai=new R,Yt=new R,vs=new R,Ci=new R,Ms=new R;class Ji{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nt.copy(this.direction).multiplyScalar(t).add(this.origin),Nt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xs.copy(e).add(t).multiplyScalar(.5),Ai.copy(t).sub(e).normalize(),Yt.copy(this.origin).sub(xs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ai),a=Yt.dot(this.direction),c=-Yt.dot(Ai),l=Yt.lengthSq(),d=Math.abs(1-o*o);let f,u,m,g;if(d>0)if(f=o*c-a,u=o*a-c,g=s*d,f>=0)if(u>=-g)if(u<=g){const p=1/d;f*=p,u*=p,m=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),m=-f*f+u*(u+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Ai).multiplyScalar(u).add(xs),m}intersectSphere(e,t){Nt.subVectors(e.center,this.origin);const n=Nt.dot(this.direction),i=Nt.dot(Nt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nt)!==null}intersectTriangle(e,t,n,i,s){vs.subVectors(t,e),Ci.subVectors(n,e),Ms.crossVectors(vs,Ci);let o=this.direction.dot(Ms),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yt.subVectors(this.origin,e);const c=a*this.direction.dot(Ci.crossVectors(Yt,Ci));if(c<0)return null;const l=a*this.direction.dot(vs.cross(Yt));if(l<0||c+l>o)return null;const d=-a*Yt.dot(Ms);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,c,l,d,f,u,m,g,p,h){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=d,_[10]=f,_[14]=u,_[3]=m,_[7]=g,_[11]=p,_[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ln.setFromMatrixColumn(e,0).length(),s=1/Ln.setFromMatrixColumn(e,1).length(),o=1/Ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*d,m=o*f,g=a*d,p=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=u-p*l,t[9]=-a*c,t[2]=p-u*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*d,m=c*f,g=l*d,p=l*f;t[0]=u+p*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=m*a-g,t[6]=p+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*d,m=c*f,g=l*d,p=l*f;t[0]=u-p*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*d,t[9]=p-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*d,m=o*f,g=a*d,p=a*f;t[0]=c*d,t[4]=g*l-m,t[8]=u*l+p,t[1]=c*f,t[5]=p*l+u,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*d,t[4]=p-u*f,t[8]=g*f+m,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=m*f+g,t[10]=u-p*f}else if(e.order==="XZY"){const u=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+p,t[5]=o*d,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*d,t[10]=p*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pl,e,Il)}lookAt(e,t,n){const i=this.elements;return lt.subVectors(e,t),lt.lengthSq()===0&&(lt.z=1),lt.normalize(),Zt.crossVectors(n,lt),Zt.lengthSq()===0&&(Math.abs(n.z)===1?lt.x+=1e-4:lt.z+=1e-4,lt.normalize(),Zt.crossVectors(n,lt)),Zt.normalize(),Li.crossVectors(lt,Zt),i[0]=Zt.x,i[4]=Li.x,i[8]=lt.x,i[1]=Zt.y,i[5]=Li.y,i[9]=lt.y,i[2]=Zt.z,i[6]=Li.z,i[10]=lt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],f=n[5],u=n[9],m=n[13],g=n[2],p=n[6],h=n[10],_=n[14],b=n[3],C=n[7],E=n[11],x=n[15],T=i[0],P=i[4],v=i[8],L=i[12],z=i[1],F=i[5],Z=i[9],Y=i[13],D=i[2],U=i[6],O=i[10],W=i[14],q=i[3],G=i[7],H=i[11],ie=i[15];return s[0]=o*T+a*z+c*D+l*q,s[4]=o*P+a*F+c*U+l*G,s[8]=o*v+a*Z+c*O+l*H,s[12]=o*L+a*Y+c*W+l*ie,s[1]=d*T+f*z+u*D+m*q,s[5]=d*P+f*F+u*U+m*G,s[9]=d*v+f*Z+u*O+m*H,s[13]=d*L+f*Y+u*W+m*ie,s[2]=g*T+p*z+h*D+_*q,s[6]=g*P+p*F+h*U+_*G,s[10]=g*v+p*Z+h*O+_*H,s[14]=g*L+p*Y+h*W+_*ie,s[3]=b*T+C*z+E*D+x*q,s[7]=b*P+C*F+E*U+x*G,s[11]=b*v+C*Z+E*O+x*H,s[15]=b*L+C*Y+E*W+x*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],m=e[14],g=e[3],p=e[7],h=e[11],_=e[15];return g*(+s*c*f-i*l*f-s*a*u+n*l*u+i*a*m-n*c*m)+p*(+t*c*m-t*l*u+s*o*u-i*o*m+i*l*d-s*c*d)+h*(+t*l*f-t*a*m-s*o*f+n*o*m+s*a*d-n*l*d)+_*(-i*a*d-t*c*f+t*a*u+i*o*f-n*o*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],m=e[11],g=e[12],p=e[13],h=e[14],_=e[15],b=f*h*l-p*u*l+p*c*m-a*h*m-f*c*_+a*u*_,C=g*u*l-d*h*l-g*c*m+o*h*m+d*c*_-o*u*_,E=d*p*l-g*f*l+g*a*m-o*p*m-d*a*_+o*f*_,x=g*f*c-d*p*c-g*a*u+o*p*u+d*a*h-o*f*h,T=t*b+n*C+i*E+s*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=b*P,e[1]=(p*u*s-f*h*s-p*i*m+n*h*m+f*i*_-n*u*_)*P,e[2]=(a*h*s-p*c*s+p*i*l-n*h*l-a*i*_+n*c*_)*P,e[3]=(f*c*s-a*u*s-f*i*l+n*u*l+a*i*m-n*c*m)*P,e[4]=C*P,e[5]=(d*h*s-g*u*s+g*i*m-t*h*m-d*i*_+t*u*_)*P,e[6]=(g*c*s-o*h*s-g*i*l+t*h*l+o*i*_-t*c*_)*P,e[7]=(o*u*s-d*c*s+d*i*l-t*u*l-o*i*m+t*c*m)*P,e[8]=E*P,e[9]=(g*f*s-d*p*s-g*n*m+t*p*m+d*n*_-t*f*_)*P,e[10]=(o*p*s-g*a*s+g*n*l-t*p*l-o*n*_+t*a*_)*P,e[11]=(d*a*s-o*f*s-d*n*l+t*f*l+o*n*m-t*a*m)*P,e[12]=x*P,e[13]=(d*p*i-g*f*i+g*n*u-t*p*u-d*n*h+t*f*h)*P,e[14]=(g*a*i-o*p*i-g*n*c+t*p*c+o*n*h-t*a*h)*P,e[15]=(o*f*i-d*a*i+d*n*c-t*f*c-o*n*u+t*a*u)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,d*a+n,d*c-i*o,0,l*c-i*a,d*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,f=a+a,u=s*l,m=s*d,g=s*f,p=o*d,h=o*f,_=a*f,b=c*l,C=c*d,E=c*f,x=n.x,T=n.y,P=n.z;return i[0]=(1-(p+_))*x,i[1]=(m+E)*x,i[2]=(g-C)*x,i[3]=0,i[4]=(m-E)*T,i[5]=(1-(u+_))*T,i[6]=(h+b)*T,i[7]=0,i[8]=(g+C)*P,i[9]=(h-b)*P,i[10]=(1-(u+p))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ln.set(i[0],i[1],i[2]).length();const o=Ln.set(i[4],i[5],i[6]).length(),a=Ln.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_t.copy(this);const l=1/s,d=1/o,f=1/a;return _t.elements[0]*=l,_t.elements[1]*=l,_t.elements[2]*=l,_t.elements[4]*=d,_t.elements[5]*=d,_t.elements[6]*=d,_t.elements[8]*=f,_t.elements[9]*=f,_t.elements[10]*=f,t.setFromRotationMatrix(_t),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),u=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),d=1/(o-s),f=(t+e)*c,u=(n+i)*l,m=(o+s)*d;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ln=new R,_t=new Ue,Pl=new R(0,0,0),Il=new R(1,1,1),Zt=new R,Li=new R,lt=new R,qr=new Ue,jr=new _n;class xi{constructor(e=0,t=0,n=0,i=xi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],d=i[9],f=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jr.setFromEuler(this),this.setFromQuaternion(jr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}xi.DefaultOrder="XYZ";xi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class nr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fl=0;const Yr=new R,Dn=new _n,zt=new Ue,Di=new R,ni=new R,Nl=new R,zl=new _n,Zr=new R(1,0,0),$r=new R(0,1,0),Kr=new R(0,0,1),Ol={type:"added"},Jr={type:"removed"};class Je extends tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DefaultUp.clone();const e=new R,t=new xi,n=new _n,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Pt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=Je.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.premultiply(Dn),this}rotateX(e){return this.rotateOnAxis(Zr,e)}rotateY(e){return this.rotateOnAxis($r,e)}rotateZ(e){return this.rotateOnAxis(Kr,e)}translateOnAxis(e,t){return Yr.copy(e).applyQuaternion(this.quaternion),this.position.add(Yr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zr,e)}translateY(e){return this.translateOnAxis($r,e)}translateZ(e){return this.translateOnAxis(Kr,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Di.copy(e):Di.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zt.lookAt(ni,Di,this.up):zt.lookAt(Di,ni,this.up),this.quaternion.setFromRotationMatrix(zt),i&&(zt.extractRotation(i.matrixWorld),Dn.setFromRotationMatrix(zt),this.quaternion.premultiply(Dn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ol)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jr)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jr)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ni,e,Nl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ni,zl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Je.DefaultUp=new R(0,1,0);Je.DefaultMatrixAutoUpdate=!0;const xt=new R,Ot=new R,ys=new R,Ut=new R,Rn=new R,Pn=new R,Qr=new R,Ss=new R,bs=new R,ws=new R;class Rt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xt.subVectors(e,t),i.cross(xt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xt.subVectors(i,t),Ot.subVectors(n,t),ys.subVectors(e,t);const o=xt.dot(xt),a=xt.dot(Ot),c=xt.dot(ys),l=Ot.dot(Ot),d=Ot.dot(ys),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const u=1/f,m=(l*c-a*d)*u,g=(o*d-a*c)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ut),Ut.x>=0&&Ut.y>=0&&Ut.x+Ut.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Ut),c.set(0,0),c.addScaledVector(s,Ut.x),c.addScaledVector(o,Ut.y),c.addScaledVector(a,Ut.z),c}static isFrontFacing(e,t,n,i){return xt.subVectors(n,t),Ot.subVectors(e,t),xt.cross(Ot).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xt.subVectors(this.c,this.b),Ot.subVectors(this.a,this.b),xt.cross(Ot).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Rt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Rt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Rn.subVectors(i,n),Pn.subVectors(s,n),Ss.subVectors(e,n);const c=Rn.dot(Ss),l=Pn.dot(Ss);if(c<=0&&l<=0)return t.copy(n);bs.subVectors(e,i);const d=Rn.dot(bs),f=Pn.dot(bs);if(d>=0&&f<=d)return t.copy(i);const u=c*f-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Rn,o);ws.subVectors(e,s);const m=Rn.dot(ws),g=Pn.dot(ws);if(g>=0&&m<=g)return t.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Pn,a);const h=d*g-m*f;if(h<=0&&f-d>=0&&m-g>=0)return Qr.subVectors(s,i),a=(f-d)/(f-d+(m-g)),t.copy(i).addScaledVector(Qr,a);const _=1/(h+p+u);return o=p*_,a=u*_,t.copy(n).addScaledVector(Rn,o).addScaledVector(Pn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ul=0;class $e extends tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Vn,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ha,this.blendDst=Wa,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===No;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vn&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}$e.fromType=function(){return null};class Zn extends $e{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ge=new R,Ri=new me;class It{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Gr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new ve),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new me),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new R),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Ze),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ri.fromBufferAttribute(this,t),Ri.applyMatrix3(e),this.setXY(t,Ri.x,Ri.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyMatrix3(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyMatrix4(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyNormalMatrix(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.transformDirection(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ja extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qa extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bl=0;const ft=new Ue,Es=new Je,In=new R,ct=new gi,ii=new gi,Xe=new R;class Qe extends tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ja(e)?Qa:Ja)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ft.makeRotationFromQuaternion(e),this.applyMatrix4(ft),this}rotateX(e){return ft.makeRotationX(e),this.applyMatrix4(ft),this}rotateY(e){return ft.makeRotationY(e),this.applyMatrix4(ft),this}rotateZ(e){return ft.makeRotationZ(e),this.applyMatrix4(ft),this}translate(e,t,n){return ft.makeTranslation(e,t,n),this.applyMatrix4(ft),this}scale(e,t,n){return ft.makeScale(e,t,n),this.applyMatrix4(ft),this}lookAt(e){return Es.lookAt(e),Es.updateMatrix(),this.applyMatrix4(Es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(In).negate(),this.translate(In.x,In.y,In.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ct.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,ct.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,ct.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(ct.min),this.boundingBox.expandByPoint(ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(ct.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ii.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(ct.min,ii.min),ct.expandByPoint(Xe),Xe.addVectors(ct.max,ii.max),ct.expandByPoint(Xe)):(ct.expandByPoint(ii.min),ct.expandByPoint(ii.max))}ct.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Xe.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Xe));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Xe.fromBufferAttribute(a,l),c&&(In.fromBufferAttribute(e,l),Xe.add(In)),i=Math.max(i,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],d=[];for(let z=0;z<a;z++)l[z]=new R,d[z]=new R;const f=new R,u=new R,m=new R,g=new me,p=new me,h=new me,_=new R,b=new R;function C(z,F,Z){f.fromArray(i,z*3),u.fromArray(i,F*3),m.fromArray(i,Z*3),g.fromArray(o,z*2),p.fromArray(o,F*2),h.fromArray(o,Z*2),u.sub(f),m.sub(f),p.sub(g),h.sub(g);const Y=1/(p.x*h.y-h.x*p.y);!isFinite(Y)||(_.copy(u).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(Y),b.copy(m).multiplyScalar(p.x).addScaledVector(u,-h.x).multiplyScalar(Y),l[z].add(_),l[F].add(_),l[Z].add(_),d[z].add(b),d[F].add(b),d[Z].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let z=0,F=E.length;z<F;++z){const Z=E[z],Y=Z.start,D=Z.count;for(let U=Y,O=Y+D;U<O;U+=3)C(n[U+0],n[U+1],n[U+2])}const x=new R,T=new R,P=new R,v=new R;function L(z){P.fromArray(s,z*3),v.copy(P);const F=l[z];x.copy(F),x.sub(P.multiplyScalar(P.dot(F))).normalize(),T.crossVectors(v,F);const Y=T.dot(d[z])<0?-1:1;c[z*4]=x.x,c[z*4+1]=x.y,c[z*4+2]=x.z,c[z*4+3]=Y}for(let z=0,F=E.length;z<F;++z){const Z=E[z],Y=Z.start,D=Z.count;for(let U=Y,O=Y+D;U<O;U+=3)L(n[U+0]),L(n[U+1]),L(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new R,s=new R,o=new R,a=new R,c=new R,l=new R,d=new R,f=new R;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),p=e.getX(u+1),h=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),d.subVectors(o,s),f.subVectors(i,s),d.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,h),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),f.subVectors(i,s),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],c=a.array,l=a.itemSize*t,d=Math.min(c.length,o.length-l);for(let f=0,u=l;f<d;f++,u++)o[u]=c[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xe.fromBufferAttribute(e,t),Xe.normalize(),e.setXYZ(t,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,f=a.normalized,u=new l.constructor(c.length*d);let m=0,g=0;for(let p=0,h=c.length;p<h;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*d;for(let _=0;_<d;_++)u[g++]=l[m++]}return new It(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,f=l.length;d<f;d++){const u=l[d],m=e(u,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){const m=l[f];d.push(m.toJSON(e.data))}d.length>0&&(i[c]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],f=s[l];for(let u=0,m=f.length;u<m;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ea=new Ue,Fn=new Ji,Ts=new _i,$t=new R,Kt=new R,Jt=new R,As=new R,Cs=new R,Ls=new R,Pi=new R,Ii=new R,Fi=new R,Ni=new me,zi=new me,Oi=new me,Ds=new R,Ui=new R;class ht extends Je{constructor(e=new Qe,t=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(s),e.ray.intersectsSphere(Ts)===!1)||(ea.copy(s).invert(),Fn.copy(e.ray).applyMatrix4(ea),n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,d=n.morphTargetsRelative,f=n.attributes.uv,u=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const _=m[p],b=i[_.materialIndex],C=Math.max(_.start,g.start),E=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let x=C,T=E;x<T;x+=3){const P=a.getX(x),v=a.getX(x+1),L=a.getX(x+2);o=Bi(this,b,e,Fn,c,l,d,f,u,P,v,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),h=Math.min(a.count,g.start+g.count);for(let _=p,b=h;_<b;_+=3){const C=a.getX(_),E=a.getX(_+1),x=a.getX(_+2);o=Bi(this,i,e,Fn,c,l,d,f,u,C,E,x),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const _=m[p],b=i[_.materialIndex],C=Math.max(_.start,g.start),E=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let x=C,T=E;x<T;x+=3){const P=x,v=x+1,L=x+2;o=Bi(this,b,e,Fn,c,l,d,f,u,P,v,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),h=Math.min(c.count,g.start+g.count);for(let _=p,b=h;_<b;_+=3){const C=_,E=_+1,x=_+2;o=Bi(this,i,e,Fn,c,l,d,f,u,C,E,x),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Gl(r,e,t,n,i,s,o,a){let c;if(e.side===yt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side!==kt,a),c===null)return null;Ui.copy(a),Ui.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ui);return l<t.near||l>t.far?null:{distance:l,point:Ui.clone(),object:r}}function Bi(r,e,t,n,i,s,o,a,c,l,d,f){$t.fromBufferAttribute(i,l),Kt.fromBufferAttribute(i,d),Jt.fromBufferAttribute(i,f);const u=r.morphTargetInfluences;if(s&&u){Pi.set(0,0,0),Ii.set(0,0,0),Fi.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const h=u[g],_=s[g];h!==0&&(As.fromBufferAttribute(_,l),Cs.fromBufferAttribute(_,d),Ls.fromBufferAttribute(_,f),o?(Pi.addScaledVector(As,h),Ii.addScaledVector(Cs,h),Fi.addScaledVector(Ls,h)):(Pi.addScaledVector(As.sub($t),h),Ii.addScaledVector(Cs.sub(Kt),h),Fi.addScaledVector(Ls.sub(Jt),h)))}$t.add(Pi),Kt.add(Ii),Jt.add(Fi)}r.isSkinnedMesh&&(r.boneTransform(l,$t),r.boneTransform(d,Kt),r.boneTransform(f,Jt));const m=Gl(r,e,t,n,$t,Kt,Jt,Ds);if(m){a&&(Ni.fromBufferAttribute(a,l),zi.fromBufferAttribute(a,d),Oi.fromBufferAttribute(a,f),m.uv=Rt.getUV(Ds,$t,Kt,Jt,Ni,zi,Oi,new me)),c&&(Ni.fromBufferAttribute(c,l),zi.fromBufferAttribute(c,d),Oi.fromBufferAttribute(c,f),m.uv2=Rt.getUV(Ds,$t,Kt,Jt,Ni,zi,Oi,new me));const g={a:l,b:d,c:f,normal:new R,materialIndex:0};Rt.getNormal($t,Kt,Jt,g.normal),m.face=g}return m}class vi extends Qe{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],f=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function g(p,h,_,b,C,E,x,T,P,v,L){const z=E/P,F=x/v,Z=E/2,Y=x/2,D=T/2,U=P+1,O=v+1;let W=0,q=0;const G=new R;for(let H=0;H<O;H++){const ie=H*F-Y;for(let $=0;$<U;$++){const J=$*z-Z;G[p]=J*b,G[h]=ie*C,G[_]=D,l.push(G.x,G.y,G.z),G[p]=0,G[h]=0,G[_]=T>0?1:-1,d.push(G.x,G.y,G.z),f.push($/P),f.push(1-H/v),W+=1}}for(let H=0;H<v;H++)for(let ie=0;ie<P;ie++){const $=u+ie+U*H,J=u+ie+U*(H+1),he=u+(ie+1)+U*(H+1),de=u+(ie+1)+U*H;c.push($,J,de),c.push(J,he,de),q+=6}a.addGroup(m,q,L),m+=q,u+=W}}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ke(r){const e={};for(let t=0;t<r.length;t++){const n=qn(r[t]);for(const i in n)e[i]=n[i]}return e}const Vl={clone:qn,merge:Ke};var kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends $e{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=kl,this.fragmentShader=Hl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class eo extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ye extends eo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nn=90,zn=1;class Wl extends Je{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Ye(Nn,zn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(1,0,0)),this.add(i);const s=new Ye(Nn,zn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const o=new Ye(Nn,zn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);const a=new Ye(Nn,zn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);const c=new Ye(Nn,zn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,1)),this.add(c);const l=new Ye(Nn,zn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,d=e.getRenderTarget(),f=e.toneMapping,u=e.xr.enabled;e.toneMapping=Vt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(d),e.toneMapping=f,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class to extends St{constructor(e,t,n,i,s,o,a,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Hn,super(e,t,n,i,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xl extends en{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new to(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vi(5,5,5),s=new Ht({name:"CubemapFromEquirect",uniforms:qn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:Qt});s.uniforms.tEquirect.value=t;const o=new ht(i,s),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=pt),new Wl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Rs=new R,ql=new R,jl=new Pt;class Lt{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Rs.subVectors(n,t).cross(ql.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Rs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jl.getNormalMatrix(e),i=this.coplanarPoint(Rs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new _i,Gi=new R;class ir{constructor(e=new Lt,t=new Lt,n=new Lt,i=new Lt,s=new Lt,o=new Lt){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],d=n[6],f=n[7],u=n[8],m=n[9],g=n[10],p=n[11],h=n[12],_=n[13],b=n[14],C=n[15];return t[0].setComponents(a-i,f-c,p-u,C-h).normalize(),t[1].setComponents(a+i,f+c,p+u,C+h).normalize(),t[2].setComponents(a+s,f+l,p+m,C+_).normalize(),t[3].setComponents(a-s,f-l,p-m,C-_).normalize(),t[4].setComponents(a-o,f-d,p-g,C-b).normalize(),t[5].setComponents(a+o,f+d,p+g,C+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSprite(e){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Gi.x=i.normal.x>0?e.max.x:e.min.x,Gi.y=i.normal.y>0?e.max.y:e.min.y,Gi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function no(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Yl(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,d){const f=l.array,u=l.usage,m=r.createBuffer();r.bindBuffer(d,m),r.bufferData(d,f,u),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,d,f){const u=d.array,m=d.updateRange;r.bindBuffer(f,l),m.count===-1?r.bufferSubData(f,0,u):(t?r.bufferSubData(f,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):r.bufferSubData(f,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d&&(r.deleteBuffer(d.buffer),n.delete(l))}function c(l,d){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,d)):f.version<l.version&&(s(f.buffer,l,d),f.version=l.version)}return{get:o,remove:a,update:c}}class xn extends Qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,d=c+1,f=e/a,u=t/c,m=[],g=[],p=[],h=[];for(let _=0;_<d;_++){const b=_*u-o;for(let C=0;C<l;C++){const E=C*f-s;g.push(E,-b,0),p.push(0,0,1),h.push(C/a),h.push(1-_/c)}}for(let _=0;_<c;_++)for(let b=0;b<a;b++){const C=b+l*_,E=b+l*(_+1),x=b+1+l*(_+1),T=b+1+l*_;m.push(C,E,T),m.push(E,x,T)}this.setIndex(m),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(p,3)),this.setAttribute("uv",new at(h,2))}static fromJSON(e){return new xn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$l=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ql=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ec=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tc="vec3 transformed = vec3( position );",nc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ic=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,sc=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,rc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ac=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,oc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pc=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,mc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,gc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_c=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bc=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,wc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ec=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ac=`#ifdef USE_ENVMAP
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
#endif`,Cc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Ic=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nc=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,zc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Oc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Uc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Gc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,kc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Hc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$c=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,th=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ih=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ah=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,oh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,fh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ph=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_h=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,vh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eh=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Th=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ah=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Ch=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Rh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ph=`#ifdef USE_SKINNING
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
#endif`,Ih=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oh=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Uh=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Bh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Gh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Vh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,kh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Hh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Wh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Xh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jh=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zh=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$h=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Kh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Qh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,su=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ru=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,au=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ou=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,cu=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,du=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,mu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,_u=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,vu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Su=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,bu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:Zl,alphamap_pars_fragment:$l,alphatest_fragment:Kl,alphatest_pars_fragment:Jl,aomap_fragment:Ql,aomap_pars_fragment:ec,begin_vertex:tc,beginnormal_vertex:nc,bsdfs:ic,iridescence_fragment:sc,bumpmap_pars_fragment:rc,clipping_planes_fragment:ac,clipping_planes_pars_fragment:oc,clipping_planes_pars_vertex:lc,clipping_planes_vertex:cc,color_fragment:hc,color_pars_fragment:uc,color_pars_vertex:dc,color_vertex:fc,common:pc,cube_uv_reflection_fragment:mc,defaultnormal_vertex:gc,displacementmap_pars_vertex:_c,displacementmap_vertex:xc,emissivemap_fragment:vc,emissivemap_pars_fragment:Mc,encodings_fragment:yc,encodings_pars_fragment:Sc,envmap_fragment:bc,envmap_common_pars_fragment:wc,envmap_pars_fragment:Ec,envmap_pars_vertex:Tc,envmap_physical_pars_fragment:Oc,envmap_vertex:Ac,fog_vertex:Cc,fog_pars_vertex:Lc,fog_fragment:Dc,fog_pars_fragment:Rc,gradientmap_pars_fragment:Pc,lightmap_fragment:Ic,lightmap_pars_fragment:Fc,lights_lambert_vertex:Nc,lights_pars_begin:zc,lights_toon_fragment:Uc,lights_toon_pars_fragment:Bc,lights_phong_fragment:Gc,lights_phong_pars_fragment:Vc,lights_physical_fragment:kc,lights_physical_pars_fragment:Hc,lights_fragment_begin:Wc,lights_fragment_maps:Xc,lights_fragment_end:qc,logdepthbuf_fragment:jc,logdepthbuf_pars_fragment:Yc,logdepthbuf_pars_vertex:Zc,logdepthbuf_vertex:$c,map_fragment:Kc,map_pars_fragment:Jc,map_particle_fragment:Qc,map_particle_pars_fragment:eh,metalnessmap_fragment:th,metalnessmap_pars_fragment:nh,morphcolor_vertex:ih,morphnormal_vertex:sh,morphtarget_pars_vertex:rh,morphtarget_vertex:ah,normal_fragment_begin:oh,normal_fragment_maps:lh,normal_pars_fragment:ch,normal_pars_vertex:hh,normal_vertex:uh,normalmap_pars_fragment:dh,clearcoat_normal_fragment_begin:fh,clearcoat_normal_fragment_maps:ph,clearcoat_pars_fragment:mh,iridescence_pars_fragment:gh,output_fragment:_h,packing:xh,premultiplied_alpha_fragment:vh,project_vertex:Mh,dithering_fragment:yh,dithering_pars_fragment:Sh,roughnessmap_fragment:bh,roughnessmap_pars_fragment:wh,shadowmap_pars_fragment:Eh,shadowmap_pars_vertex:Th,shadowmap_vertex:Ah,shadowmask_pars_fragment:Ch,skinbase_vertex:Lh,skinning_pars_vertex:Dh,skinning_vertex:Rh,skinnormal_vertex:Ph,specularmap_fragment:Ih,specularmap_pars_fragment:Fh,tonemapping_fragment:Nh,tonemapping_pars_fragment:zh,transmission_fragment:Oh,transmission_pars_fragment:Uh,uv_pars_fragment:Bh,uv_pars_vertex:Gh,uv_vertex:Vh,uv2_pars_fragment:kh,uv2_pars_vertex:Hh,uv2_vertex:Wh,worldpos_vertex:Xh,background_vert:qh,background_frag:jh,cube_vert:Yh,cube_frag:Zh,depth_vert:$h,depth_frag:Kh,distanceRGBA_vert:Jh,distanceRGBA_frag:Qh,equirect_vert:eu,equirect_frag:tu,linedashed_vert:nu,linedashed_frag:iu,meshbasic_vert:su,meshbasic_frag:ru,meshlambert_vert:au,meshlambert_frag:ou,meshmatcap_vert:lu,meshmatcap_frag:cu,meshnormal_vert:hu,meshnormal_frag:uu,meshphong_vert:du,meshphong_frag:fu,meshphysical_vert:pu,meshphysical_frag:mu,meshtoon_vert:gu,meshtoon_frag:_u,points_vert:xu,points_frag:vu,shadow_vert:Mu,shadow_frag:yu,sprite_vert:Su,sprite_frag:bu},ae={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pt},uv2Transform:{value:new Pt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pt}}},Dt={basic:{uniforms:Ke([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Ke([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.fog,ae.lights,{emissive:{value:new ve(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Ke([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Ke([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Ke([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ve(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Ke([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Ke([ae.points,ae.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Ke([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Ke([ae.common,ae.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Ke([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Ke([ae.sprite,ae.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},cube:{uniforms:Ke([ae.envmap,{opacity:{value:1}}]),vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Ke([ae.common,ae.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Ke([ae.lights,ae.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Dt.physical={uniforms:Ke([Dt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};function wu(r,e,t,n,i,s){const o=new ve(0);let a=i===!0?0:1,c,l,d=null,f=0,u=null;function m(p,h){let _=!1,b=h.isScene===!0?h.background:null;b&&b.isTexture&&(b=e.get(b));const C=r.xr,E=C.getSession&&C.getSession();E&&E.environmentBlendMode==="additive"&&(b=null),b===null?g(o,a):b&&b.isColor&&(g(b,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===$i)?(l===void 0&&(l=new ht(new vi(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:qn(Dt.cube.uniforms),vertexShader:Dt.cube.vertexShader,fragmentShader:Dt.cube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(d!==b||f!==b.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,u=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ht(new xn(2,2),new Ht({name:"BackgroundMaterial",uniforms:qn(Dt.background.uniforms),vertexShader:Dt.background.vertexShader,fragmentShader:Dt.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,u=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function Eu(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=h(null);let l=c,d=!1;function f(D,U,O,W,q){let G=!1;if(o){const H=p(W,O,U);l!==H&&(l=H,m(l.object)),G=_(D,W,O,q),G&&b(D,W,O,q)}else{const H=U.wireframe===!0;(l.geometry!==W.id||l.program!==O.id||l.wireframe!==H)&&(l.geometry=W.id,l.program=O.id,l.wireframe=H,G=!0)}q!==null&&t.update(q,34963),(G||d)&&(d=!1,v(D,U,O,W),q!==null&&r.bindBuffer(34963,t.get(q).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,U,O){const W=O.wireframe===!0;let q=a[D.id];q===void 0&&(q={},a[D.id]=q);let G=q[U.id];G===void 0&&(G={},q[U.id]=G);let H=G[W];return H===void 0&&(H=h(u()),G[W]=H),H}function h(D){const U=[],O=[],W=[];for(let q=0;q<i;q++)U[q]=0,O[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:W,object:D,attributes:{},index:null}}function _(D,U,O,W){const q=l.attributes,G=U.attributes;let H=0;const ie=O.getAttributes();for(const $ in ie)if(ie[$].location>=0){const he=q[$];let de=G[$];if(de===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),he===void 0||he.attribute!==de||de&&he.data!==de.data)return!0;H++}return l.attributesNum!==H||l.index!==W}function b(D,U,O,W){const q={},G=U.attributes;let H=0;const ie=O.getAttributes();for(const $ in ie)if(ie[$].location>=0){let he=G[$];he===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(he=D.instanceColor));const de={};de.attribute=he,he&&he.data&&(de.data=he.data),q[$]=de,H++}l.attributes=q,l.attributesNum=H,l.index=W}function C(){const D=l.newAttributes;for(let U=0,O=D.length;U<O;U++)D[U]=0}function E(D){x(D,0)}function x(D,U){const O=l.newAttributes,W=l.enabledAttributes,q=l.attributeDivisors;O[D]=1,W[D]===0&&(r.enableVertexAttribArray(D),W[D]=1),q[D]!==U&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),q[D]=U)}function T(){const D=l.newAttributes,U=l.enabledAttributes;for(let O=0,W=U.length;O<W;O++)U[O]!==D[O]&&(r.disableVertexAttribArray(O),U[O]=0)}function P(D,U,O,W,q,G){n.isWebGL2===!0&&(O===5124||O===5125)?r.vertexAttribIPointer(D,U,O,q,G):r.vertexAttribPointer(D,U,O,W,q,G)}function v(D,U,O,W){if(n.isWebGL2===!1&&(D.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const q=W.attributes,G=O.getAttributes(),H=U.defaultAttributeValues;for(const ie in G){const $=G[ie];if($.location>=0){let J=q[ie];if(J===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){const he=J.normalized,de=J.itemSize,k=t.get(J);if(k===void 0)continue;const Ne=k.buffer,ye=k.type,Me=k.bytesPerElement;if(J.isInterleavedBufferAttribute){const ce=J.data,Le=ce.stride,Ee=J.offset;if(ce.isInstancedInterleavedBuffer){for(let _e=0;_e<$.locationSize;_e++)x($.location+_e,ce.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let _e=0;_e<$.locationSize;_e++)E($.location+_e);r.bindBuffer(34962,Ne);for(let _e=0;_e<$.locationSize;_e++)P($.location+_e,de/$.locationSize,ye,he,Le*Me,(Ee+de/$.locationSize*_e)*Me)}else{if(J.isInstancedBufferAttribute){for(let ce=0;ce<$.locationSize;ce++)x($.location+ce,J.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ce=0;ce<$.locationSize;ce++)E($.location+ce);r.bindBuffer(34962,Ne);for(let ce=0;ce<$.locationSize;ce++)P($.location+ce,de/$.locationSize,ye,he,de*Me,de/$.locationSize*ce*Me)}}else if(H!==void 0){const he=H[ie];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv($.location,he);break;case 3:r.vertexAttrib3fv($.location,he);break;case 4:r.vertexAttrib4fv($.location,he);break;default:r.vertexAttrib1fv($.location,he)}}}}T()}function L(){Z();for(const D in a){const U=a[D];for(const O in U){const W=U[O];for(const q in W)g(W[q].object),delete W[q];delete U[O]}delete a[D]}}function z(D){if(a[D.id]===void 0)return;const U=a[D.id];for(const O in U){const W=U[O];for(const q in W)g(W[q].object),delete W[q];delete U[O]}delete a[D.id]}function F(D){for(const U in a){const O=a[U];if(O[D.id]===void 0)continue;const W=O[D.id];for(const q in W)g(W[q].object),delete W[q];delete O[D.id]}}function Z(){Y(),d=!0,l!==c&&(l=c,m(l.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:Y,dispose:L,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:E,disableUnusedAttributes:T}}function Tu(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,d){r.drawArrays(s,l,d),t.update(d,s,1)}function c(l,d,f){if(f===0)return;let u,m;if(i)u=r,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,l,d,f),t.update(d,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function Au(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),u=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),h=r.getParameter(36347),_=r.getParameter(36348),b=r.getParameter(36349),C=u>0,E=o||e.has("OES_texture_float"),x=C&&E,T=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:C,floatFragmentTextures:E,floatVertexTextures:x,maxSamples:T}}function Cu(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Lt,a=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u,m){const g=f.length!==0||u||n!==0||i;return i=u,t=d(f,m,0),n=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1,l()},this.setState=function(f,u,m){const g=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!h)s?d(null):l();else{const b=s?0:n,C=b*4;let E=_.clippingState||null;c.value=E,E=d(g,u,C,m);for(let x=0;x!==C;++x)E[x]=t[x];_.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,m,g){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=c.value,g!==!0||h===null){const _=m+p*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(h===null||h.length<_)&&(h=new Float32Array(_));for(let C=0,E=m;C!==p;++C,E+=4)o.copy(f[C]).applyMatrix4(b,a),o.normal.toArray(h,E),h[E+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function Lu(r){let e=new WeakMap;function t(o,a){return a===Hs?o.mapping=Hn:a===Ws&&(o.mapping=Wn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Hs||a===Ws)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xl(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class io extends eo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gn=4,ta=[.125,.215,.35,.446,.526,.582],ln=20,Ps=new io,na=new ve;let Is=null;const on=(1+Math.sqrt(5))/2,Un=1/on,ia=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,on,Un),new R(0,on,-Un),new R(Un,0,on),new R(-Un,0,on),new R(on,Un,0),new R(-on,Un,0)];class sa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Is=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=aa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Is),e.scissorTest=!1,Vi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hn||e.mapping===Wn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Is=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:ui,format:Mt,encoding:gn,depthBuffer:!1},i=ra(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ra(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Du(s)),this._blurMaterial=Ru(s,e,t)}return i}_compileMaterial(e){const t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,n,i){const a=new Ye(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(na),d.toneMapping=Vt,d.autoClear=!1;const m=new Zn({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),g=new ht(new vi,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(na),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):b===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const C=this._cubeSize;Vi(i,b*C,_>2?C:0,C,C),d.setRenderTarget(i),p&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hn||e.mapping===Wn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=aa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Vi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ia[(i-1)%ia.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ht(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ln-1),p=s/g,h=isFinite(s)?1+Math.floor(d*p):ln;h>ln&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ln}`);const _=[];let b=0;for(let P=0;P<ln;++P){const v=P/p,L=Math.exp(-v*v/2);_.push(L),P===0?b+=L:P<h&&(b+=2*L)}for(let P=0;P<_.length;P++)_[P]=_[P]/b;u.envMap.value=e.texture,u.samples.value=h,u.weights.value=_,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:C}=this;u.dTheta.value=g,u.mipInt.value=C-n;const E=this._sizeLods[i],x=3*E*(i>C-Gn?i-C+Gn:0),T=4*(this._cubeSize-E);Vi(t,x,T,3*E,2*E),c.setRenderTarget(t),c.render(f,Ps)}}function Du(r){const e=[],t=[],n=[];let i=r;const s=r-Gn+1+ta.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Gn?c=ta[o-r+Gn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),d=-l,f=1+l,u=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,g=6,p=3,h=2,_=1,b=new Float32Array(p*g*m),C=new Float32Array(h*g*m),E=new Float32Array(_*g*m);for(let T=0;T<m;T++){const P=T%3*2/3-1,v=T>2?0:-1,L=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];b.set(L,p*g*T),C.set(u,h*g*T);const z=[T,T,T,T,T,T];E.set(z,_*g*T)}const x=new Qe;x.setAttribute("position",new It(b,p)),x.setAttribute("uv",new It(C,h)),x.setAttribute("faceIndex",new It(E,_)),e.push(x),i>Gn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ra(r,e,t){const n=new en(r,e,t);return n.texture.mapping=$i,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ru(r,e,t){const n=new Float32Array(ln),i=new R(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:ln,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sr(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function aa(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sr(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function oa(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function sr(){return`

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
	`}function Pu(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Hs||c===Ws,d=c===Hn||c===Wn;if(l||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new sa(r)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||d&&f&&i(f)){t===null&&(t=new sa(r));const u=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Iu(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Fu(r,e,t,n){const i={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const g in u)e.update(u[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let h=0,_=p.length;h<_;h++)e.update(p[h],34962)}}function l(f){const u=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let C=0,E=b.length;C<E;C+=3){const x=b[C+0],T=b[C+1],P=b[C+2];u.push(x,T,T,P,P,x)}}else{const b=g.array;p=g.version;for(let C=0,E=b.length/3-1;C<E;C+=3){const x=C+0,T=C+1,P=C+2;u.push(x,T,T,P,P,x)}}const h=new(ja(u)?Qa:Ja)(u,1);h.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,h)}function d(f){const u=s.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function Nu(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}let a,c;function l(u){a=u.type,c=u.bytesPerElement}function d(u,m){r.drawElements(s,m,a,u*c),t.update(m,s,1)}function f(u,m,g){if(g===0)return;let p,h;if(i)p=r,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,m,a,u*c,g),t.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=d,this.renderInstances=f}function zu(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ou(r,e){return r[0]-e[0]}function Uu(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Fs(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Bu(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ze,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,d,f,u){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,h=p!==void 0?p.length:0;let _=s.get(d);if(_===void 0||_.count!==h){let O=function(){D.dispose(),s.delete(d),d.removeEventListener("dispose",O)};var g=O;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,P=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let z=0;E===!0&&(z=1),x===!0&&(z=2),T===!0&&(z=3);let F=d.attributes.position.count*z,Z=1;F>e.maxTextureSize&&(Z=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const Y=new Float32Array(F*Z*4*h),D=new Ka(Y,F,Z,h);D.type=un,D.needsUpdate=!0;const U=z*4;for(let W=0;W<h;W++){const q=P[W],G=v[W],H=L[W],ie=F*Z*4*W;for(let $=0;$<q.count;$++){const J=$*U;E===!0&&(o.fromBufferAttribute(q,$),q.normalized===!0&&Fs(o,q),Y[ie+J+0]=o.x,Y[ie+J+1]=o.y,Y[ie+J+2]=o.z,Y[ie+J+3]=0),x===!0&&(o.fromBufferAttribute(G,$),G.normalized===!0&&Fs(o,G),Y[ie+J+4]=o.x,Y[ie+J+5]=o.y,Y[ie+J+6]=o.z,Y[ie+J+7]=0),T===!0&&(o.fromBufferAttribute(H,$),H.normalized===!0&&Fs(o,H),Y[ie+J+8]=o.x,Y[ie+J+9]=o.y,Y[ie+J+10]=o.z,Y[ie+J+11]=H.itemSize===4?o.w:1)}}_={count:h,texture:D,size:new me(F,Z)},s.set(d,_),d.addEventListener("dispose",O)}let b=0;for(let E=0;E<m.length;E++)b+=m[E];const C=d.morphTargetsRelative?1:1-b;u.getUniforms().setValue(r,"morphTargetBaseInfluence",C),u.getUniforms().setValue(r,"morphTargetInfluences",m),u.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let h=n[d.id];if(h===void 0||h.length!==p){h=[];for(let x=0;x<p;x++)h[x]=[x,0];n[d.id]=h}for(let x=0;x<p;x++){const T=h[x];T[0]=x,T[1]=m[x]}h.sort(Uu);for(let x=0;x<8;x++)x<p&&h[x][1]?(a[x][0]=h[x][0],a[x][1]=h[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Ou);const _=d.morphAttributes.position,b=d.morphAttributes.normal;let C=0;for(let x=0;x<8;x++){const T=a[x],P=T[0],v=T[1];P!==Number.MAX_SAFE_INTEGER&&v?(_&&d.getAttribute("morphTarget"+x)!==_[P]&&d.setAttribute("morphTarget"+x,_[P]),b&&d.getAttribute("morphNormal"+x)!==b[P]&&d.setAttribute("morphNormal"+x,b[P]),i[x]=v,C+=v):(_&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),b&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),i[x]=0)}const E=d.morphTargetsRelative?1:1-C;u.getUniforms().setValue(r,"morphTargetBaseInfluence",E),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Gu(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,f=e.get(c,d);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const so=new St,ro=new Ka,ao=new Dl,oo=new to,la=[],ca=[],ha=new Float32Array(16),ua=new Float32Array(9),da=new Float32Array(4);function $n(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=la[i];if(s===void 0&&(s=new Float32Array(i),la[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function it(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function st(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Qi(r,e){let t=ca[e];t===void 0&&(t=new Int32Array(e),ca[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Vu(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ku(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;r.uniform2fv(this.addr,e),st(t,e)}}function Hu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;r.uniform3fv(this.addr,e),st(t,e)}}function Wu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;r.uniform4fv(this.addr,e),st(t,e)}}function Xu(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(it(t,n))return;da.set(n),r.uniformMatrix2fv(this.addr,!1,da),st(t,n)}}function qu(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(it(t,n))return;ua.set(n),r.uniformMatrix3fv(this.addr,!1,ua),st(t,n)}}function ju(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(it(t,n))return;ha.set(n),r.uniformMatrix4fv(this.addr,!1,ha),st(t,n)}}function Yu(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Zu(r,e){const t=this.cache;it(t,e)||(r.uniform2iv(this.addr,e),st(t,e))}function $u(r,e){const t=this.cache;it(t,e)||(r.uniform3iv(this.addr,e),st(t,e))}function Ku(r,e){const t=this.cache;it(t,e)||(r.uniform4iv(this.addr,e),st(t,e))}function Ju(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qu(r,e){const t=this.cache;it(t,e)||(r.uniform2uiv(this.addr,e),st(t,e))}function ed(r,e){const t=this.cache;it(t,e)||(r.uniform3uiv(this.addr,e),st(t,e))}function td(r,e){const t=this.cache;it(t,e)||(r.uniform4uiv(this.addr,e),st(t,e))}function nd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||so,i)}function id(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ao,i)}function sd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||oo,i)}function rd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ro,i)}function ad(r){switch(r){case 5126:return Vu;case 35664:return ku;case 35665:return Hu;case 35666:return Wu;case 35674:return Xu;case 35675:return qu;case 35676:return ju;case 5124:case 35670:return Yu;case 35667:case 35671:return Zu;case 35668:case 35672:return $u;case 35669:case 35673:return Ku;case 5125:return Ju;case 36294:return Qu;case 36295:return ed;case 36296:return td;case 35678:case 36198:case 36298:case 36306:case 35682:return nd;case 35679:case 36299:case 36307:return id;case 35680:case 36300:case 36308:case 36293:return sd;case 36289:case 36303:case 36311:case 36292:return rd}}function od(r,e){r.uniform1fv(this.addr,e)}function ld(r,e){const t=$n(e,this.size,2);r.uniform2fv(this.addr,t)}function cd(r,e){const t=$n(e,this.size,3);r.uniform3fv(this.addr,t)}function hd(r,e){const t=$n(e,this.size,4);r.uniform4fv(this.addr,t)}function ud(r,e){const t=$n(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dd(r,e){const t=$n(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function fd(r,e){const t=$n(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function pd(r,e){r.uniform1iv(this.addr,e)}function md(r,e){r.uniform2iv(this.addr,e)}function gd(r,e){r.uniform3iv(this.addr,e)}function _d(r,e){r.uniform4iv(this.addr,e)}function xd(r,e){r.uniform1uiv(this.addr,e)}function vd(r,e){r.uniform2uiv(this.addr,e)}function Md(r,e){r.uniform3uiv(this.addr,e)}function yd(r,e){r.uniform4uiv(this.addr,e)}function Sd(r,e,t){const n=e.length,i=Qi(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||so,i[s])}function bd(r,e,t){const n=e.length,i=Qi(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||ao,i[s])}function wd(r,e,t){const n=e.length,i=Qi(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||oo,i[s])}function Ed(r,e,t){const n=e.length,i=Qi(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||ro,i[s])}function Td(r){switch(r){case 5126:return od;case 35664:return ld;case 35665:return cd;case 35666:return hd;case 35674:return ud;case 35675:return dd;case 35676:return fd;case 5124:case 35670:return pd;case 35667:case 35671:return md;case 35668:case 35672:return gd;case 35669:case 35673:return _d;case 5125:return xd;case 36294:return vd;case 36295:return Md;case 36296:return yd;case 35678:case 36198:case 36298:case 36306:case 35682:return Sd;case 35679:case 36299:case 36307:return bd;case 35680:case 36300:case 36308:case 36293:return wd;case 36289:case 36303:case 36311:case 36292:return Ed}}class Ad{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ad(t.type)}}class Cd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Td(t.type)}}class Ld{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ns=/(\w+)(\])?(\[|\.)?/g;function fa(r,e){r.seq.push(e),r.map[e.id]=e}function Dd(r,e,t){const n=r.name,i=n.length;for(Ns.lastIndex=0;;){const s=Ns.exec(n),o=Ns.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){fa(t,l===void 0?new Ad(a,r,e):new Cd(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Ld(a),fa(t,f)),t=f}}}class ji{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Dd(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function pa(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Rd=0;function Pd(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Id(r){switch(r){case gn:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ma(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Pd(r.getShaderSource(e),o)}else return i}function Fd(r,e){const t=Id(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Nd(r,e){let t;switch(e){case il:t="Linear";break;case sl:t="Reinhard";break;case rl:t="OptimizedCineon";break;case al:t="ACESFilmic";break;case ol:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zd(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ai).join(`
`)}function Od(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ud(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ai(r){return r!==""}function ga(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _a(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(r){return r.replace(Bd,Gd)}function Gd(r,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Zs(t)}const Vd=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,kd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xa(r){return r.replace(kd,lo).replace(Vd,Hd)}function Hd(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),lo(r,e,t,n)}function lo(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function va(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wd(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ka?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Xd(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hn:case Wn:e="ENVMAP_TYPE_CUBE";break;case $i:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qd(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Wn:e="ENVMAP_MODE_REFRACTION";break}return e}function jd(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Zi:e="ENVMAP_BLENDING_MULTIPLY";break;case tl:e="ENVMAP_BLENDING_MIX";break;case nl:e="ENVMAP_BLENDING_ADD";break}return e}function Yd(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zd(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Wd(t),l=Xd(t),d=qd(t),f=jd(t),u=Yd(t),m=t.isWebGL2?"":zd(t),g=Od(s),p=i.createProgram();let h,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[g].filter(ai).join(`
`),h.length>0&&(h+=`
`),_=[m,g].filter(ai).join(`
`),_.length>0&&(_+=`
`)):(h=[va(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ai).join(`
`),_=[m,va(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vt?"#define TONE_MAPPING":"",t.toneMapping!==Vt?Te.tonemapping_pars_fragment:"",t.toneMapping!==Vt?Nd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,Fd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ai).join(`
`)),o=Zs(o),o=ga(o,t),o=_a(o,t),a=Zs(a),a=ga(a,t),a=_a(a,t),o=xa(o),a=xa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["#define varying in",t.glslVersion===Vr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=b+h+o,E=b+_+a,x=pa(i,35633,C),T=pa(i,35632,E);if(i.attachShader(p,x),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const L=i.getProgramInfoLog(p).trim(),z=i.getShaderInfoLog(x).trim(),F=i.getShaderInfoLog(T).trim();let Z=!0,Y=!0;if(i.getProgramParameter(p,35714)===!1){Z=!1;const D=ma(i,x,"vertex"),U=ma(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+L+`
`+D+`
`+U)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(z===""||F==="")&&(Y=!1);Y&&(this.diagnostics={runnable:Z,programLog:L,vertexShader:{log:z,prefix:h},fragmentShader:{log:F,prefix:_}})}i.deleteShader(x),i.deleteShader(T);let P;this.getUniforms=function(){return P===void 0&&(P=new ji(i,p)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=Ud(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Rd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=T,this}let $d=0;class Kd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Jd(e);t.set(e,n)}return t.get(e)}}class Jd{constructor(e){this.id=$d++,this.code=e,this.usedTimes=0}}function Qd(r,e,t,n,i,s,o){const a=new nr,c=new Kd,l=[],d=i.isWebGL2,f=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,L,z,F,Z){const Y=F.fog,D=Z.geometry,U=v.isMeshStandardMaterial?F.environment:null,O=(v.isMeshStandardMaterial?t:e).get(v.envMap||U),W=!!O&&O.mapping===$i?O.image.height:null,q=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const G=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,H=G!==void 0?G.length:0;let ie=0;D.morphAttributes.position!==void 0&&(ie=1),D.morphAttributes.normal!==void 0&&(ie=2),D.morphAttributes.color!==void 0&&(ie=3);let $,J,he,de;if(q){const Le=Dt[q];$=Le.vertexShader,J=Le.fragmentShader}else $=v.vertexShader,J=v.fragmentShader,c.update(v),he=c.getVertexShaderID(v),de=c.getFragmentShaderID(v);const k=r.getRenderTarget(),Ne=v.alphaTest>0,ye=v.clearcoat>0,Me=v.iridescence>0;return{isWebGL2:d,shaderID:q,shaderName:v.type,vertexShader:$,fragmentShader:J,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:de,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:u,outputEncoding:k===null?r.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:gn,map:!!v.map,matcap:!!v.matcap,envMap:!!O,envMapMode:O&&O.mapping,envMapCubeUVHeight:W,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Tl,tangentSpaceNormalMap:v.normalMapType===Yn,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ze,clearcoat:ye,clearcoatMap:ye&&!!v.clearcoatMap,clearcoatRoughnessMap:ye&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!v.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!v.iridescenceMap,iridescenceThicknessMap:Me&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Vn,alphaMap:!!v.alphaMap,alphaTest:Ne,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!Y,useFog:v.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ie,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Vt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===kt,flipSided:v.side===yt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function h(v){const L=[];if(v.shaderID?L.push(v.shaderID):(L.push(v.customVertexShaderID),L.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)L.push(z),L.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(_(L,v),b(L,v),L.push(r.outputEncoding)),L.push(v.customProgramCacheKey),L.join()}function _(v,L){v.push(L.precision),v.push(L.outputEncoding),v.push(L.envMapMode),v.push(L.envMapCubeUVHeight),v.push(L.combine),v.push(L.vertexUvs),v.push(L.fogExp2),v.push(L.sizeAttenuation),v.push(L.morphTargetsCount),v.push(L.morphAttributeCount),v.push(L.numDirLights),v.push(L.numPointLights),v.push(L.numSpotLights),v.push(L.numHemiLights),v.push(L.numRectAreaLights),v.push(L.numDirLightShadows),v.push(L.numPointLightShadows),v.push(L.numSpotLightShadows),v.push(L.shadowMapType),v.push(L.toneMapping),v.push(L.numClippingPlanes),v.push(L.numClipIntersection),v.push(L.depthPacking)}function b(v,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.map&&a.enable(4),L.matcap&&a.enable(5),L.envMap&&a.enable(6),L.lightMap&&a.enable(7),L.aoMap&&a.enable(8),L.emissiveMap&&a.enable(9),L.bumpMap&&a.enable(10),L.normalMap&&a.enable(11),L.objectSpaceNormalMap&&a.enable(12),L.tangentSpaceNormalMap&&a.enable(13),L.clearcoat&&a.enable(14),L.clearcoatMap&&a.enable(15),L.clearcoatRoughnessMap&&a.enable(16),L.clearcoatNormalMap&&a.enable(17),L.iridescence&&a.enable(18),L.iridescenceMap&&a.enable(19),L.iridescenceThicknessMap&&a.enable(20),L.displacementMap&&a.enable(21),L.specularMap&&a.enable(22),L.roughnessMap&&a.enable(23),L.metalnessMap&&a.enable(24),L.gradientMap&&a.enable(25),L.alphaMap&&a.enable(26),L.alphaTest&&a.enable(27),L.vertexColors&&a.enable(28),L.vertexAlphas&&a.enable(29),L.vertexUvs&&a.enable(30),L.vertexTangents&&a.enable(31),L.uvsVertexOnly&&a.enable(32),L.fog&&a.enable(33),v.push(a.mask),a.disableAll(),L.useFog&&a.enable(0),L.flatShading&&a.enable(1),L.logarithmicDepthBuffer&&a.enable(2),L.skinning&&a.enable(3),L.morphTargets&&a.enable(4),L.morphNormals&&a.enable(5),L.morphColors&&a.enable(6),L.premultipliedAlpha&&a.enable(7),L.shadowMapEnabled&&a.enable(8),L.physicallyCorrectLights&&a.enable(9),L.doubleSided&&a.enable(10),L.flipSided&&a.enable(11),L.useDepthPacking&&a.enable(12),L.dithering&&a.enable(13),L.specularIntensityMap&&a.enable(14),L.specularColorMap&&a.enable(15),L.transmission&&a.enable(16),L.transmissionMap&&a.enable(17),L.thicknessMap&&a.enable(18),L.sheen&&a.enable(19),L.sheenColorMap&&a.enable(20),L.sheenRoughnessMap&&a.enable(21),L.decodeVideoTexture&&a.enable(22),L.opaque&&a.enable(23),v.push(a.mask)}function C(v){const L=g[v.type];let z;if(L){const F=Dt[L];z=Vl.clone(F.uniforms)}else z=v.uniforms;return z}function E(v,L){let z;for(let F=0,Z=l.length;F<Z;F++){const Y=l[F];if(Y.cacheKey===L){z=Y,++z.usedTimes;break}}return z===void 0&&(z=new Zd(r,L,v,s),l.push(z)),z}function x(v){if(--v.usedTimes===0){const L=l.indexOf(v);l[L]=l[l.length-1],l.pop(),v.destroy()}}function T(v){c.remove(v)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:C,acquireProgram:E,releaseProgram:x,releaseShaderCache:T,programs:l,dispose:P}}function ef(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function tf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ma(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ya(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,u,m,g,p,h){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:u,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:h},r[e]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=h),e++,_}function a(f,u,m,g,p,h){const _=o(f,u,m,g,p,h);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function c(f,u,m,g,p,h){const _=o(f,u,m,g,p,h);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(f,u){t.length>1&&t.sort(f||tf),n.length>1&&n.sort(u||Ma),i.length>1&&i.sort(u||Ma)}function d(){for(let f=e,u=r.length;f<u;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:d,sort:l}}function nf(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new ya,r.set(n,[s])):i>=r.get(n).length?(s=new ya,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function sf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ve};break;case"SpotLight":t={position:new R,direction:new R,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function rf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let af=0;function of(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function lf(r,e){const t=new sf,n=rf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)i.probe.push(new R);const s=new R,o=new Ue,a=new Ue;function c(d,f){let u=0,m=0,g=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,h=0,_=0,b=0,C=0,E=0,x=0,T=0;d.sort(of);const P=f!==!0?Math.PI:1;for(let L=0,z=d.length;L<z;L++){const F=d[L],Z=F.color,Y=F.intensity,D=F.distance,U=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=Z.r*Y*P,m+=Z.g*Y*P,g+=Z.b*Y*P;else if(F.isLightProbe)for(let O=0;O<9;O++)i.probe[O].addScaledVector(F.sh.coefficients[O],Y);else if(F.isDirectionalLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity*P),F.castShadow){const W=F.shadow,q=n.get(F);q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=F.shadow.matrix,E++}i.directional[p]=O,p++}else if(F.isSpotLight){const O=t.get(F);if(O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(Z).multiplyScalar(Y*P),O.distance=D,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,F.castShadow){const W=F.shadow,q=n.get(F);q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=U,i.spotShadowMatrix[_]=F.shadow.matrix,T++}i.spot[_]=O,_++}else if(F.isRectAreaLight){const O=t.get(F);O.color.copy(Z).multiplyScalar(Y),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),i.rectArea[b]=O,b++}else if(F.isPointLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity*P),O.distance=F.distance,O.decay=F.decay,F.castShadow){const W=F.shadow,q=n.get(F);q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,q.shadowCameraNear=W.camera.near,q.shadowCameraFar=W.camera.far,i.pointShadow[h]=q,i.pointShadowMap[h]=U,i.pointShadowMatrix[h]=F.shadow.matrix,x++}i.point[h]=O,h++}else if(F.isHemisphereLight){const O=t.get(F);O.skyColor.copy(F.color).multiplyScalar(Y*P),O.groundColor.copy(F.groundColor).multiplyScalar(Y*P),i.hemi[C]=O,C++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const v=i.hash;(v.directionalLength!==p||v.pointLength!==h||v.spotLength!==_||v.rectAreaLength!==b||v.hemiLength!==C||v.numDirectionalShadows!==E||v.numPointShadows!==x||v.numSpotShadows!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=b,i.point.length=h,i.hemi.length=C,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=x,i.spotShadowMatrix.length=T,v.directionalLength=p,v.pointLength=h,v.spotLength=_,v.rectAreaLength=b,v.hemiLength=C,v.numDirectionalShadows=E,v.numPointShadows=x,v.numSpotShadows=T,i.version=af++)}function l(d,f){let u=0,m=0,g=0,p=0,h=0;const _=f.matrixWorldInverse;for(let b=0,C=d.length;b<C;b++){const E=d[b];if(E.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),u++}else if(E.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),g++}else if(E.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(_),a.identity(),o.copy(E.matrixWorld),o.premultiply(_),a.extractRotation(o),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(E.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const x=i.hemi[h];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(_),h++}}}return{setup:c,setupView:l,state:i}}function Sa(r,e){const t=new lf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function cf(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Sa(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new Sa(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class co extends $e{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ho extends $e{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function df(r,e,t){let n=new ir;const i=new me,s=new me,o=new Ze,a=new co({depthPacking:El}),c=new ho,l={},d=t.maxTextureSize,f={0:yt,1:hi,2:kt},u=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:hf,fragmentShader:uf}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Qe;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ht(g,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka,this.render=function(E,x,T){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||E.length===0)return;const P=r.getRenderTarget(),v=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Qt),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let F=0,Z=E.length;F<Z;F++){const Y=E[F],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const U=D.getFrameExtents();if(i.multiply(U),s.copy(D.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/U.x),i.x=s.x*U.x,D.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/U.y),i.y=s.y*U.y,D.mapSize.y=s.y)),D.map===null&&!D.isPointLightShadow&&this.type===ri&&(D.map=new en(i.x,i.y),D.map.texture.name=Y.name+".shadowMap",D.mapPass=new en(i.x,i.y),D.camera.updateProjectionMatrix()),D.map===null){const W={minFilter:rt,magFilter:rt,format:Mt};D.map=new en(i.x,i.y,W),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const O=D.getViewportCount();for(let W=0;W<O;W++){const q=D.getViewport(W);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),z.viewport(o),D.updateMatrices(Y,W),n=D.getFrustum(),C(x,T,D.camera,Y,this.type)}!D.isPointLightShadow&&this.type===ri&&_(D,T),D.needsUpdate=!1}h.needsUpdate=!1,r.setRenderTarget(P,v,L)};function _(E,x){const T=e.update(p);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(x,null,T,u,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(x,null,T,m,p,null)}function b(E,x,T,P,v,L){let z=null;const F=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0?z=F:z=T.isPointLight===!0?c:a,r.localClippingEnabled&&x.clipShadows===!0&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const Z=z.uuid,Y=x.uuid;let D=l[Z];D===void 0&&(D={},l[Z]=D);let U=D[Y];U===void 0&&(U=z.clone(),D[Y]=U),z=U}return z.visible=x.visible,z.wireframe=x.wireframe,L===ri?z.side=x.shadowSide!==null?x.shadowSide:x.side:z.side=x.shadowSide!==null?x.shadowSide:f[x.side],z.alphaMap=x.alphaMap,z.alphaTest=x.alphaTest,z.clipShadows=x.clipShadows,z.clippingPlanes=x.clippingPlanes,z.clipIntersection=x.clipIntersection,z.displacementMap=x.displacementMap,z.displacementScale=x.displacementScale,z.displacementBias=x.displacementBias,z.wireframeLinewidth=x.wireframeLinewidth,z.linewidth=x.linewidth,T.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(T.matrixWorld),z.nearDistance=P,z.farDistance=v),z}function C(E,x,T,P,v){if(E.visible===!1)return;if(E.layers.test(x.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===ri)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const F=e.update(E),Z=E.material;if(Array.isArray(Z)){const Y=F.groups;for(let D=0,U=Y.length;D<U;D++){const O=Y[D],W=Z[O.materialIndex];if(W&&W.visible){const q=b(E,W,P,T.near,T.far,v);r.renderBufferDirect(T,null,F,q,E,O)}}}else if(Z.visible){const Y=b(E,Z,P,T.near,T.far,v);r.renderBufferDirect(T,null,F,Y,E,null)}}const z=E.children;for(let F=0,Z=z.length;F<Z;F++)C(z[F],x,T,P,v)}}function ff(r,e,t){const n=t.isWebGL2;function i(){let A=!1;const te=new Ze;let Q=null;const fe=new Ze(0,0,0,0);return{setMask:function(oe){Q!==oe&&!A&&(r.colorMask(oe,oe,oe,oe),Q=oe)},setLocked:function(oe){A=oe},setClear:function(oe,ue,ne,xe,Pe){Pe===!0&&(oe*=xe,ue*=xe,ne*=xe),te.set(oe,ue,ne,xe),fe.equals(te)===!1&&(r.clearColor(oe,ue,ne,xe),fe.copy(te))},reset:function(){A=!1,Q=null,fe.set(-1,0,0,0)}}}function s(){let A=!1,te=null,Q=null,fe=null;return{setTest:function(oe){oe?de(2929):k(2929)},setMask:function(oe){te!==oe&&!A&&(r.depthMask(oe),te=oe)},setFunc:function(oe){if(Q!==oe){if(oe)switch(oe){case Yo:r.depthFunc(512);break;case Zo:r.depthFunc(519);break;case $o:r.depthFunc(513);break;case ks:r.depthFunc(515);break;case Ko:r.depthFunc(514);break;case Jo:r.depthFunc(518);break;case Qo:r.depthFunc(516);break;case el:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);Q=oe}},setLocked:function(oe){A=oe},setClear:function(oe){fe!==oe&&(r.clearDepth(oe),fe=oe)},reset:function(){A=!1,te=null,Q=null,fe=null}}}function o(){let A=!1,te=null,Q=null,fe=null,oe=null,ue=null,ne=null,xe=null,Pe=null;return{setTest:function(Ie){A||(Ie?de(2960):k(2960))},setMask:function(Ie){te!==Ie&&!A&&(r.stencilMask(Ie),te=Ie)},setFunc:function(Ie,et,bt){(Q!==Ie||fe!==et||oe!==bt)&&(r.stencilFunc(Ie,et,bt),Q=Ie,fe=et,oe=bt)},setOp:function(Ie,et,bt){(ue!==Ie||ne!==et||xe!==bt)&&(r.stencilOp(Ie,et,bt),ue=Ie,ne=et,xe=bt)},setLocked:function(Ie){A=Ie},setClear:function(Ie){Pe!==Ie&&(r.clearStencil(Ie),Pe=Ie)},reset:function(){A=!1,te=null,Q=null,fe=null,oe=null,ue=null,ne=null,xe=null,Pe=null}}}const a=new i,c=new s,l=new o;let d={},f={},u=new WeakMap,m=[],g=null,p=!1,h=null,_=null,b=null,C=null,E=null,x=null,T=null,P=!1,v=null,L=null,z=null,F=null,Z=null;const Y=r.getParameter(35661);let D=!1,U=0;const O=r.getParameter(7938);O.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(O)[1]),D=U>=1):O.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),D=U>=2);let W=null,q={};const G=r.getParameter(3088),H=r.getParameter(2978),ie=new Ze().fromArray(G),$=new Ze().fromArray(H);function J(A,te,Q){const fe=new Uint8Array(4),oe=r.createTexture();r.bindTexture(A,oe),r.texParameteri(A,10241,9728),r.texParameteri(A,10240,9728);for(let ue=0;ue<Q;ue++)r.texImage2D(te+ue,0,6408,1,1,0,6408,5121,fe);return oe}const he={};he[3553]=J(3553,3553,1),he[34067]=J(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),de(2929),c.setFunc(ks),Ve(!1),We(ur),de(2884),Ee(Qt);function de(A){d[A]!==!0&&(r.enable(A),d[A]=!0)}function k(A){d[A]!==!1&&(r.disable(A),d[A]=!1)}function Ne(A,te){return f[A]!==te?(r.bindFramebuffer(A,te),f[A]=te,n&&(A===36009&&(f[36160]=te),A===36160&&(f[36009]=te)),!0):!1}function ye(A,te){let Q=m,fe=!1;if(A)if(Q=u.get(te),Q===void 0&&(Q=[],u.set(te,Q)),A.isWebGLMultipleRenderTargets){const oe=A.texture;if(Q.length!==oe.length||Q[0]!==36064){for(let ue=0,ne=oe.length;ue<ne;ue++)Q[ue]=36064+ue;Q.length=oe.length,fe=!0}}else Q[0]!==36064&&(Q[0]=36064,fe=!0);else Q[0]!==1029&&(Q[0]=1029,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Me(A){return g!==A?(r.useProgram(A),g=A,!0):!1}const ce={[Bn]:32774,[Oo]:32778,[Uo]:32779};if(n)ce[mr]=32775,ce[gr]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(ce[mr]=A.MIN_EXT,ce[gr]=A.MAX_EXT)}const Le={[Bo]:0,[Go]:1,[Vo]:768,[Ha]:770,[jo]:776,[Xo]:774,[Ho]:772,[ko]:769,[Wa]:771,[qo]:775,[Wo]:773};function Ee(A,te,Q,fe,oe,ue,ne,xe){if(A===Qt){p===!0&&(k(3042),p=!1);return}if(p===!1&&(de(3042),p=!0),A!==zo){if(A!==h||xe!==P){if((_!==Bn||E!==Bn)&&(r.blendEquation(32774),_=Bn,E=Bn),xe)switch(A){case Vn:r.blendFuncSeparate(1,771,1,771);break;case dr:r.blendFunc(1,1);break;case fr:r.blendFuncSeparate(0,769,0,1);break;case pr:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Vn:r.blendFuncSeparate(770,771,1,771);break;case dr:r.blendFunc(770,1);break;case fr:r.blendFuncSeparate(0,769,0,1);break;case pr:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}b=null,C=null,x=null,T=null,h=A,P=xe}return}oe=oe||te,ue=ue||Q,ne=ne||fe,(te!==_||oe!==E)&&(r.blendEquationSeparate(ce[te],ce[oe]),_=te,E=oe),(Q!==b||fe!==C||ue!==x||ne!==T)&&(r.blendFuncSeparate(Le[Q],Le[fe],Le[ue],Le[ne]),b=Q,C=fe,x=ue,T=ne),h=A,P=null}function _e(A,te){A.side===kt?k(2884):de(2884);let Q=A.side===yt;te&&(Q=!Q),Ve(Q),A.blending===Vn&&A.transparent===!1?Ee(Qt):Ee(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);const fe=A.stencilWrite;l.setTest(fe),fe&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),ot(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?de(32926):k(32926)}function Ve(A){v!==A&&(A?r.frontFace(2304):r.frontFace(2305),v=A)}function We(A){A!==Po?(de(2884),A!==L&&(A===ur?r.cullFace(1029):A===Io?r.cullFace(1028):r.cullFace(1032))):k(2884),L=A}function qe(A){A!==z&&(D&&r.lineWidth(A),z=A)}function ot(A,te,Q){A?(de(32823),(F!==te||Z!==Q)&&(r.polygonOffset(te,Q),F=te,Z=Q)):k(32823)}function ke(A){A?de(3089):k(3089)}function Re(A){A===void 0&&(A=33984+Y-1),W!==A&&(r.activeTexture(A),W=A)}function ut(A,te){W===null&&Re();let Q=q[W];Q===void 0&&(Q={type:void 0,texture:void 0},q[W]=Q),(Q.type!==A||Q.texture!==te)&&(r.bindTexture(A,te||he[A]),Q.type=A,Q.texture=te)}function dt(){const A=q[W];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function w(){try{r.compressedTexImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function M(){try{r.texSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{r.texSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{r.texStorage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function le(){try{r.texStorage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pe(){try{r.texImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function y(){try{r.texImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function j(A){ie.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),ie.copy(A))}function re(A){$.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),$.copy(A))}function ee(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},W=null,q={},f={},u=new WeakMap,m=[],g=null,p=!1,h=null,_=null,b=null,C=null,E=null,x=null,T=null,P=!1,v=null,L=null,z=null,F=null,Z=null,ie.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:de,disable:k,bindFramebuffer:Ne,drawBuffers:ye,useProgram:Me,setBlending:Ee,setMaterial:_e,setFlipSided:Ve,setCullFace:We,setLineWidth:qe,setPolygonOffset:ot,setScissorTest:ke,activeTexture:Re,bindTexture:ut,unbindTexture:dt,compressedTexImage2D:w,texImage2D:pe,texImage3D:y,texStorage2D:se,texStorage3D:le,texSubImage2D:M,texSubImage3D:V,compressedTexSubImage2D:K,scissor:j,viewport:re,reset:ee}}function pf(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,d=i.maxTextureSize,f=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,M){return _?new OffscreenCanvas(w,M):Yi("canvas")}function C(w,M,V,K){let se=1;if((w.width>K||w.height>K)&&(se=K/Math.max(w.width,w.height)),se<1||M===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){const le=M?Ys:Math.floor,pe=le(se*w.width),y=le(se*w.height);p===void 0&&(p=b(pe,y));const j=V?b(pe,y):p;return j.width=pe,j.height=y,j.getContext("2d").drawImage(w,0,0,pe,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+pe+"x"+y+")."),j}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function E(w){return Hr(w.width)&&Hr(w.height)}function x(w){return a?!1:w.wrapS!==vt||w.wrapT!==vt||w.minFilter!==rt&&w.minFilter!==pt}function T(w,M){return w.generateMipmaps&&M&&w.minFilter!==rt&&w.minFilter!==pt}function P(w){r.generateMipmap(w)}function v(w,M,V,K,se=!1){if(a===!1)return M;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let le=M;return M===6403&&(V===5126&&(le=33326),V===5131&&(le=33325),V===5121&&(le=33321)),M===33319&&(V===5126&&(le=33328),V===5131&&(le=33327),V===5121&&(le=33323)),M===6408&&(V===5126&&(le=34836),V===5131&&(le=34842),V===5121&&(le=K===ze&&se===!1?35907:32856),V===32819&&(le=32854),V===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function L(w,M,V){return T(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==rt&&w.minFilter!==pt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function z(w){return w===rt||w===_r||w===xr?9728:9729}function F(w){const M=w.target;M.removeEventListener("dispose",F),Y(M),M.isVideoTexture&&g.delete(M)}function Z(w){const M=w.target;M.removeEventListener("dispose",Z),U(M)}function Y(w){const M=n.get(w);if(M.__webglInit===void 0)return;const V=w.source,K=h.get(V);if(K){const se=K[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(w),Object.keys(K).length===0&&h.delete(V)}n.remove(w)}function D(w){const M=n.get(w);r.deleteTexture(M.__webglTexture);const V=w.source,K=h.get(V);delete K[M.__cacheKey],o.memory.textures--}function U(w){const M=w.texture,V=n.get(w),K=n.get(M);if(K.__webglTexture!==void 0&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(V.__webglFramebuffer[se]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let se=0;se<V.__webglColorRenderbuffer.length;se++)V.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[se]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let se=0,le=M.length;se<le;se++){const pe=n.get(M[se]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(M[se])}n.remove(M),n.remove(w)}let O=0;function W(){O=0}function q(){const w=O;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),O+=1,w}function G(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.encoding),M.join()}function H(w,M){const V=n.get(w);if(w.isVideoTexture&&ut(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(V,w,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,V.__webglTexture)}function ie(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ye(V,w,M);return}t.activeTexture(33984+M),t.bindTexture(35866,V.__webglTexture)}function $(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ye(V,w,M);return}t.activeTexture(33984+M),t.bindTexture(32879,V.__webglTexture)}function J(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Me(V,w,M);return}t.activeTexture(33984+M),t.bindTexture(34067,V.__webglTexture)}const he={[Xs]:10497,[vt]:33071,[qs]:33648},de={[rt]:9728,[_r]:9984,[xr]:9986,[pt]:9729,[ll]:9985,[Ki]:9987};function k(w,M,V){if(V?(r.texParameteri(w,10242,he[M.wrapS]),r.texParameteri(w,10243,he[M.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,he[M.wrapR]),r.texParameteri(w,10240,de[M.magFilter]),r.texParameteri(w,10241,de[M.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(M.wrapS!==vt||M.wrapT!==vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,z(M.magFilter)),r.texParameteri(w,10241,z(M.minFilter)),M.minFilter!==rt&&M.minFilter!==pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(M.type===un&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ui&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Ne(w,M){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",F));const K=M.source;let se=h.get(K);se===void 0&&(se={},h.set(K,se));const le=G(M);if(le!==w.__cacheKey){se[le]===void 0&&(se[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),se[le].usedTimes++;const pe=se[w.__cacheKey];pe!==void 0&&(se[w.__cacheKey].usedTimes--,pe.usedTimes===0&&D(M)),w.__cacheKey=le,w.__webglTexture=se[le].texture}return V}function ye(w,M,V){let K=3553;M.isDataArrayTexture&&(K=35866),M.isData3DTexture&&(K=32879);const se=Ne(w,M),le=M.source;if(t.activeTexture(33984+V),t.bindTexture(K,w.__webglTexture),le.version!==le.__currentVersion||se===!0){r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const pe=x(M)&&E(M.image)===!1;let y=C(M.image,pe,!1,d);y=dt(M,y);const j=E(y)||a,re=s.convert(M.format,M.encoding);let ee=s.convert(M.type),A=v(M.internalFormat,re,ee,M.encoding,M.isVideoTexture);k(K,M,j);let te;const Q=M.mipmaps,fe=a&&M.isVideoTexture!==!0,oe=le.__currentVersion===void 0||se===!0,ue=L(M,y,j);if(M.isDepthTexture)A=6402,a?M.type===un?A=36012:M.type===hn?A=33190:M.type===kn?A=35056:A=33189:M.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===fn&&A===6402&&M.type!==qa&&M.type!==hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=hn,ee=s.convert(M.type)),M.format===Xn&&A===6402&&(A=34041,M.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=kn,ee=s.convert(M.type))),oe&&(fe?t.texStorage2D(3553,1,A,y.width,y.height):t.texImage2D(3553,0,A,y.width,y.height,0,re,ee,null));else if(M.isDataTexture)if(Q.length>0&&j){fe&&oe&&t.texStorage2D(3553,ue,A,Q[0].width,Q[0].height);for(let ne=0,xe=Q.length;ne<xe;ne++)te=Q[ne],fe?t.texSubImage2D(3553,ne,0,0,te.width,te.height,re,ee,te.data):t.texImage2D(3553,ne,A,te.width,te.height,0,re,ee,te.data);M.generateMipmaps=!1}else fe?(oe&&t.texStorage2D(3553,ue,A,y.width,y.height),t.texSubImage2D(3553,0,0,0,y.width,y.height,re,ee,y.data)):t.texImage2D(3553,0,A,y.width,y.height,0,re,ee,y.data);else if(M.isCompressedTexture){fe&&oe&&t.texStorage2D(3553,ue,A,Q[0].width,Q[0].height);for(let ne=0,xe=Q.length;ne<xe;ne++)te=Q[ne],M.format!==Mt?re!==null?fe?t.compressedTexSubImage2D(3553,ne,0,0,te.width,te.height,re,te.data):t.compressedTexImage2D(3553,ne,A,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage2D(3553,ne,0,0,te.width,te.height,re,ee,te.data):t.texImage2D(3553,ne,A,te.width,te.height,0,re,ee,te.data)}else if(M.isDataArrayTexture)fe?(oe&&t.texStorage3D(35866,ue,A,y.width,y.height,y.depth),t.texSubImage3D(35866,0,0,0,0,y.width,y.height,y.depth,re,ee,y.data)):t.texImage3D(35866,0,A,y.width,y.height,y.depth,0,re,ee,y.data);else if(M.isData3DTexture)fe?(oe&&t.texStorage3D(32879,ue,A,y.width,y.height,y.depth),t.texSubImage3D(32879,0,0,0,0,y.width,y.height,y.depth,re,ee,y.data)):t.texImage3D(32879,0,A,y.width,y.height,y.depth,0,re,ee,y.data);else if(M.isFramebufferTexture){if(oe)if(fe)t.texStorage2D(3553,ue,A,y.width,y.height);else{let ne=y.width,xe=y.height;for(let Pe=0;Pe<ue;Pe++)t.texImage2D(3553,Pe,A,ne,xe,0,re,ee,null),ne>>=1,xe>>=1}}else if(Q.length>0&&j){fe&&oe&&t.texStorage2D(3553,ue,A,Q[0].width,Q[0].height);for(let ne=0,xe=Q.length;ne<xe;ne++)te=Q[ne],fe?t.texSubImage2D(3553,ne,0,0,re,ee,te):t.texImage2D(3553,ne,A,re,ee,te);M.generateMipmaps=!1}else fe?(oe&&t.texStorage2D(3553,ue,A,y.width,y.height),t.texSubImage2D(3553,0,0,0,re,ee,y)):t.texImage2D(3553,0,A,re,ee,y);T(M,j)&&P(K),le.__currentVersion=le.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Me(w,M,V){if(M.image.length!==6)return;const K=Ne(w,M),se=M.source;if(t.activeTexture(33984+V),t.bindTexture(34067,w.__webglTexture),se.version!==se.__currentVersion||K===!0){r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const le=M.isCompressedTexture||M.image[0].isCompressedTexture,pe=M.image[0]&&M.image[0].isDataTexture,y=[];for(let ne=0;ne<6;ne++)!le&&!pe?y[ne]=C(M.image[ne],!1,!0,l):y[ne]=pe?M.image[ne].image:M.image[ne],y[ne]=dt(M,y[ne]);const j=y[0],re=E(j)||a,ee=s.convert(M.format,M.encoding),A=s.convert(M.type),te=v(M.internalFormat,ee,A,M.encoding),Q=a&&M.isVideoTexture!==!0,fe=se.__currentVersion===void 0||K===!0;let oe=L(M,j,re);k(34067,M,re);let ue;if(le){Q&&fe&&t.texStorage2D(34067,oe,te,j.width,j.height);for(let ne=0;ne<6;ne++){ue=y[ne].mipmaps;for(let xe=0;xe<ue.length;xe++){const Pe=ue[xe];M.format!==Mt?ee!==null?Q?t.compressedTexSubImage2D(34069+ne,xe,0,0,Pe.width,Pe.height,ee,Pe.data):t.compressedTexImage2D(34069+ne,xe,te,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?t.texSubImage2D(34069+ne,xe,0,0,Pe.width,Pe.height,ee,A,Pe.data):t.texImage2D(34069+ne,xe,te,Pe.width,Pe.height,0,ee,A,Pe.data)}}}else{ue=M.mipmaps,Q&&fe&&(ue.length>0&&oe++,t.texStorage2D(34067,oe,te,y[0].width,y[0].height));for(let ne=0;ne<6;ne++)if(pe){Q?t.texSubImage2D(34069+ne,0,0,0,y[ne].width,y[ne].height,ee,A,y[ne].data):t.texImage2D(34069+ne,0,te,y[ne].width,y[ne].height,0,ee,A,y[ne].data);for(let xe=0;xe<ue.length;xe++){const Ie=ue[xe].image[ne].image;Q?t.texSubImage2D(34069+ne,xe+1,0,0,Ie.width,Ie.height,ee,A,Ie.data):t.texImage2D(34069+ne,xe+1,te,Ie.width,Ie.height,0,ee,A,Ie.data)}}else{Q?t.texSubImage2D(34069+ne,0,0,0,ee,A,y[ne]):t.texImage2D(34069+ne,0,te,ee,A,y[ne]);for(let xe=0;xe<ue.length;xe++){const Pe=ue[xe];Q?t.texSubImage2D(34069+ne,xe+1,0,0,ee,A,Pe.image[ne]):t.texImage2D(34069+ne,xe+1,te,ee,A,Pe.image[ne])}}}T(M,re)&&P(34067),se.__currentVersion=se.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ce(w,M,V,K,se){const le=s.convert(V.format,V.encoding),pe=s.convert(V.type),y=v(V.internalFormat,le,pe,V.encoding);n.get(M).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,y,M.width,M.height,M.depth,0,le,pe,null):t.texImage2D(se,0,y,M.width,M.height,0,le,pe,null)),t.bindFramebuffer(36160,w),Re(M)?u.framebufferTexture2DMultisampleEXT(36160,K,se,n.get(V).__webglTexture,0,ke(M)):r.framebufferTexture2D(36160,K,se,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Le(w,M,V){if(r.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let K=33189;if(V||Re(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===un?K=36012:se.type===hn&&(K=33190));const le=ke(M);Re(M)?u.renderbufferStorageMultisampleEXT(36161,le,K,M.width,M.height):r.renderbufferStorageMultisample(36161,le,K,M.width,M.height)}else r.renderbufferStorage(36161,K,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){const K=ke(M);V&&Re(M)===!1?r.renderbufferStorageMultisample(36161,K,35056,M.width,M.height):Re(M)?u.renderbufferStorageMultisampleEXT(36161,K,35056,M.width,M.height):r.renderbufferStorage(36161,34041,M.width,M.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const K=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<K.length;se++){const le=K[se],pe=s.convert(le.format,le.encoding),y=s.convert(le.type),j=v(le.internalFormat,pe,y,le.encoding),re=ke(M);V&&Re(M)===!1?r.renderbufferStorageMultisample(36161,re,j,M.width,M.height):Re(M)?u.renderbufferStorageMultisampleEXT(36161,re,j,M.width,M.height):r.renderbufferStorage(36161,j,M.width,M.height)}}r.bindRenderbuffer(36161,null)}function Ee(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,se=ke(M);if(M.depthTexture.format===fn)Re(M)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,se):r.framebufferTexture2D(36160,36096,3553,K,0);else if(M.depthTexture.format===Xn)Re(M)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,se):r.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function _e(w){const M=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ee(M.__webglFramebuffer,w)}else if(V){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]=r.createRenderbuffer(),Le(M.__webglDepthbuffer[K],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Le(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Ve(w,M,V){const K=n.get(w);M!==void 0&&ce(K.__webglFramebuffer,w,w.texture,36064,3553),V!==void 0&&_e(w)}function We(w){const M=w.texture,V=n.get(w),K=n.get(M);w.addEventListener("dispose",Z),w.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=M.version,o.memory.textures++);const se=w.isWebGLCubeRenderTarget===!0,le=w.isWebGLMultipleRenderTargets===!0,pe=E(w)||a;if(se){V.__webglFramebuffer=[];for(let y=0;y<6;y++)V.__webglFramebuffer[y]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),le)if(i.drawBuffers){const y=w.texture;for(let j=0,re=y.length;j<re;j++){const ee=n.get(y[j]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Re(w)===!1){const y=le?M:[M];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let j=0;j<y.length;j++){const re=y[j];V.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer[j]);const ee=s.convert(re.format,re.encoding),A=s.convert(re.type),te=v(re.internalFormat,ee,A,re.encoding),Q=ke(w);r.renderbufferStorageMultisample(36161,Q,te,w.width,w.height),r.framebufferRenderbuffer(36160,36064+j,36161,V.__webglColorRenderbuffer[j])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,K.__webglTexture),k(34067,M,pe);for(let y=0;y<6;y++)ce(V.__webglFramebuffer[y],w,M,36064,34069+y);T(M,pe)&&P(34067),t.unbindTexture()}else if(le){const y=w.texture;for(let j=0,re=y.length;j<re;j++){const ee=y[j],A=n.get(ee);t.bindTexture(3553,A.__webglTexture),k(3553,ee,pe),ce(V.__webglFramebuffer,w,ee,36064+j,3553),T(ee,pe)&&P(3553)}t.unbindTexture()}else{let y=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?y=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y,K.__webglTexture),k(y,M,pe),ce(V.__webglFramebuffer,w,M,36064,y),T(M,pe)&&P(y),t.unbindTexture()}w.depthBuffer&&_e(w)}function qe(w){const M=E(w)||a,V=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0,se=V.length;K<se;K++){const le=V[K];if(T(le,M)){const pe=w.isWebGLCubeRenderTarget?34067:3553,y=n.get(le).__webglTexture;t.bindTexture(pe,y),P(pe),t.unbindTexture()}}}function ot(w){if(a&&w.samples>0&&Re(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],V=w.width,K=w.height;let se=16384;const le=[],pe=w.stencilBuffer?33306:36096,y=n.get(w),j=w.isWebGLMultipleRenderTargets===!0;if(j)for(let re=0;re<M.length;re++)t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+re,36161,null),t.bindFramebuffer(36160,y.__webglFramebuffer),r.framebufferTexture2D(36009,36064+re,3553,null,0);t.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y.__webglFramebuffer);for(let re=0;re<M.length;re++){le.push(36064+re),w.depthBuffer&&le.push(pe);const ee=y.__ignoreDepthValues!==void 0?y.__ignoreDepthValues:!1;if(ee===!1&&(w.depthBuffer&&(se|=256),w.stencilBuffer&&(se|=1024)),j&&r.framebufferRenderbuffer(36008,36064,36161,y.__webglColorRenderbuffer[re]),ee===!0&&(r.invalidateFramebuffer(36008,[pe]),r.invalidateFramebuffer(36009,[pe])),j){const A=n.get(M[re]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,A,0)}r.blitFramebuffer(0,0,V,K,0,0,V,K,se,9728),m&&r.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let re=0;re<M.length;re++){t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+re,36161,y.__webglColorRenderbuffer[re]);const ee=n.get(M[re]).__webglTexture;t.bindFramebuffer(36160,y.__webglFramebuffer),r.framebufferTexture2D(36009,36064+re,3553,ee,0)}t.bindFramebuffer(36009,y.__webglMultisampledFramebuffer)}}function ke(w){return Math.min(f,w.samples)}function Re(w){const M=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(w){const M=o.render.frame;g.get(w)!==M&&(g.set(w,M),w.update())}function dt(w,M){const V=w.encoding,K=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===js||V!==gn&&(V===ze?a===!1?e.has("EXT_sRGB")===!0&&K===Mt?(w.format=js,w.minFilter=pt,w.generateMipmaps=!1):M=Za.sRGBToLinear(M):(K!==Mt||se!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),M}this.allocateTextureUnit=q,this.resetTextureUnits=W,this.setTexture2D=H,this.setTexture2DArray=ie,this.setTexture3D=$,this.setTextureCube=J,this.rebindTextures=Ve,this.setupRenderTarget=We,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Re}function mf(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===mn)return 5121;if(s===dl)return 32819;if(s===fl)return 32820;if(s===cl)return 5120;if(s===hl)return 5122;if(s===qa)return 5123;if(s===ul)return 5124;if(s===hn)return 5125;if(s===un)return 5126;if(s===ui)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===pl)return 6406;if(s===Mt)return 6408;if(s===gl)return 6409;if(s===_l)return 6410;if(s===fn)return 6402;if(s===Xn)return 34041;if(s===xl)return 6403;if(s===ml)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===js)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vl)return 36244;if(s===Ml)return 33319;if(s===yl)return 33320;if(s===Sl)return 36249;if(s===ss||s===rs||s===as||s===os)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ss)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===as)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ss)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===rs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===as)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===os)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vr||s===Mr||s===yr||s===Sr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===vr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===br||s===wr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===br)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===wr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Er||s===Tr||s===Ar||s===Cr||s===Lr||s===Dr||s===Rr||s===Pr||s===Ir||s===Fr||s===Nr||s===zr||s===Or||s===Ur)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Er)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ar)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ir)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Or)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ur)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Br)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Br)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===kn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class gf extends Ye{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ki extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _f={type:"move"};class zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_f))),l&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const b=new ki;b.matrixAutoUpdate=!1,b.visible=!1,l.joints[p.jointName]=b,l.add(b)}const _=l.joints[p.jointName];h!==null&&(_.matrix.fromArray(h.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=h.radius),_.visible=h!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class xf extends St{constructor(e,t,n,i,s,o,a,c,l,d){if(d=d!==void 0?d:fn,d!==fn&&d!==Xn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===fn&&(n=hn),n===void 0&&d===Xn&&(n=kn),super(null,i,s,o,a,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:rt,this.minFilter=c!==void 0?c:rt,this.flipY=!1,this.generateMipmaps=!1}}class vf extends tn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=null,l=null,d=null,f=null,u=null,m=null;const g=t.getContextAttributes();let p=null,h=null;const _=[],b=new Map,C=new Ye;C.layers.enable(1),C.viewport=new Ze;const E=new Ye;E.layers.enable(2),E.viewport=new Ze;const x=[C,E],T=new gf;T.layers.enable(1),T.layers.enable(2);let P=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let H=_[G];return H===void 0&&(H=new zs,_[G]=H),H.getTargetRaySpace()},this.getControllerGrip=function(G){let H=_[G];return H===void 0&&(H=new zs,_[G]=H),H.getGripSpace()},this.getHand=function(G){let H=_[G];return H===void 0&&(H=new zs,_[G]=H),H.getHandSpace()};function L(G){const H=b.get(G.inputSource);H!==void 0&&H.dispatchEvent({type:G.type,data:G.inputSource})}function z(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",F),b.forEach(function(G,H){G!==void 0&&G.disconnect(H)}),b.clear(),P=null,v=null,e.setRenderTarget(p),u=null,f=null,d=null,i=null,h=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",z),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,H),i.updateRenderState({baseLayer:u}),h=new en(u.framebufferWidth,u.framebufferHeight,{format:Mt,type:mn,encoding:e.outputEncoding})}else{let H=null,ie=null,$=null;g.depth&&($=g.stencil?35056:33190,H=g.stencil?Xn:fn,ie=g.stencil?kn:hn);const J={colorFormat:e.outputEncoding===ze?35907:32856,depthFormat:$,scaleFactor:s};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(J),i.updateRenderState({layers:[f]}),h=new en(f.textureWidth,f.textureHeight,{format:Mt,type:mn,depthTexture:new xf(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const he=e.properties.get(h);he.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(G){const H=i.inputSources;for(let ie=0;ie<H.length;ie++){const $=H[ie].handedness==="right"?1:0;b.set(H[ie],_[$])}for(let ie=0;ie<G.removed.length;ie++){const $=G.removed[ie],J=b.get($);J&&(J.dispatchEvent({type:"disconnected",data:$}),b.delete($))}for(let ie=0;ie<G.added.length;ie++){const $=G.added[ie],J=b.get($);J&&J.dispatchEvent({type:"connected",data:$})}}const Z=new R,Y=new R;function D(G,H,ie){Z.setFromMatrixPosition(H.matrixWorld),Y.setFromMatrixPosition(ie.matrixWorld);const $=Z.distanceTo(Y),J=H.projectionMatrix.elements,he=ie.projectionMatrix.elements,de=J[14]/(J[10]-1),k=J[14]/(J[10]+1),Ne=(J[9]+1)/J[5],ye=(J[9]-1)/J[5],Me=(J[8]-1)/J[0],ce=(he[8]+1)/he[0],Le=de*Me,Ee=de*ce,_e=$/(-Me+ce),Ve=_e*-Me;H.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ve),G.translateZ(_e),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const We=de+_e,qe=k+_e,ot=Le-Ve,ke=Ee+($-Ve),Re=Ne*k/qe*We,ut=ye*k/qe*We;G.projectionMatrix.makePerspective(ot,ke,Re,ut,We,qe)}function U(G,H){H===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(H.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;T.near=E.near=C.near=G.near,T.far=E.far=C.far=G.far,(P!==T.near||v!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,v=T.far);const H=G.parent,ie=T.cameras;U(T,H);for(let J=0;J<ie.length;J++)U(ie[J],H);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),G.position.copy(T.position),G.quaternion.copy(T.quaternion),G.scale.copy(T.scale),G.matrix.copy(T.matrix),G.matrixWorld.copy(T.matrixWorld);const $=G.children;for(let J=0,he=$.length;J<he;J++)$[J].updateMatrixWorld(!0);ie.length===2?D(T,C,E):T.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(G){f!==null&&(f.fixedFoveation=G),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=G)};let O=null;function W(G,H){if(l=H.getViewerPose(c||o),m=H,l!==null){const $=l.views;u!==null&&(e.setRenderTargetFramebuffer(h,u.framebuffer),e.setRenderTarget(h));let J=!1;$.length!==T.cameras.length&&(T.cameras.length=0,J=!0);for(let he=0;he<$.length;he++){const de=$[he];let k=null;if(u!==null)k=u.getViewport(de);else{const ye=d.getViewSubImage(f,de);k=ye.viewport,he===0&&(e.setRenderTargetTextures(h,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(h))}let Ne=x[he];Ne===void 0&&(Ne=new Ye,Ne.layers.enable(he),Ne.viewport=new Ze,x[he]=Ne),Ne.matrix.fromArray(de.transform.matrix),Ne.projectionMatrix.fromArray(de.projectionMatrix),Ne.viewport.set(k.x,k.y,k.width,k.height),he===0&&T.matrix.copy(Ne.matrix),J===!0&&T.cameras.push(Ne)}}const ie=i.inputSources;for(let $=0;$<_.length;$++){const J=ie[$],he=b.get(J);he!==void 0&&he.update(J,H,c||o)}O&&O(G,H),m=null}const q=new no;q.setAnimationLoop(W),this.setAnimationLoop=function(G){O=G},this.dispose=function(){}}}function Mf(r,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,_,b,C){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),d(p,h)):h.isMeshPhongMaterial?(i(p,h),l(p,h)):h.isMeshStandardMaterial?(i(p,h),f(p,h),h.isMeshPhysicalMaterial&&u(p,h,C)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),g(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,_,b):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===yt&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===yt&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const E=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*E}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let b;h.map?b=h.map:h.specularMap?b=h.specularMap:h.displacementMap?b=h.displacementMap:h.normalMap?b=h.normalMap:h.bumpMap?b=h.bumpMap:h.roughnessMap?b=h.roughnessMap:h.metalnessMap?b=h.metalnessMap:h.alphaMap?b=h.alphaMap:h.emissiveMap?b=h.emissiveMap:h.clearcoatMap?b=h.clearcoatMap:h.clearcoatNormalMap?b=h.clearcoatNormalMap:h.clearcoatRoughnessMap?b=h.clearcoatRoughnessMap:h.iridescenceMap?b=h.iridescenceMap:h.iridescenceThicknessMap?b=h.iridescenceThicknessMap:h.specularIntensityMap?b=h.specularIntensityMap:h.specularColorMap?b=h.specularColorMap:h.transmissionMap?b=h.transmissionMap:h.thicknessMap?b=h.thicknessMap:h.sheenColorMap?b=h.sheenColorMap:h.sheenRoughnessMap&&(b=h.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let C;h.aoMap?C=h.aoMap:h.lightMap&&(C=h.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uv2Transform.value.copy(C.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,_,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=b*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let C;h.map?C=h.map:h.alphaMap&&(C=h.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uvTransform.value.copy(C.matrix))}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function u(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===yt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function yf(){const r=Yi("canvas");return r.style.display="block",r}function vn(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:yf(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=r.alpha!==void 0?r.alpha:!1;let f=null,u=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gn,this.physicallyCorrectLights=!1,this.toneMapping=Vt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,_=0,b=0,C=null,E=-1,x=null;const T=new Ze,P=new Ze;let v=null,L=e.width,z=e.height,F=1,Z=null,Y=null;const D=new Ze(0,0,L,z),U=new Ze(0,0,L,z);let O=!1;const W=new ir;let q=!1,G=!1,H=null;const ie=new Ue,$=new me,J=new R,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return C===null?F:1}let k=t;function Ne(S,I){for(let B=0;B<S.length;B++){const N=S[B],X=e.getContext(N,I);if(X!==null)return X}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tr}`),e.addEventListener("webglcontextlost",A,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",Q,!1),k===null){const I=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&I.shift(),k=Ne(I,S),k===null)throw Ne(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ye,Me,ce,Le,Ee,_e,Ve,We,qe,ot,ke,Re,ut,dt,w,M,V,K,se,le,pe,y,j;function re(){ye=new Iu(k),Me=new Au(k,ye,r),ye.init(Me),y=new mf(k,ye,Me),ce=new ff(k,ye,Me),Le=new zu,Ee=new ef,_e=new pf(k,ye,ce,Ee,Me,y,Le),Ve=new Lu(p),We=new Pu(p),qe=new Yl(k,Me),j=new Eu(k,ye,qe,Me),ot=new Fu(k,qe,Le,j),ke=new Gu(k,ot,qe,Le),se=new Bu(k,Me,_e),M=new Cu(Ee),Re=new Qd(p,Ve,We,ye,Me,j,M),ut=new Mf(p,Ee),dt=new nf,w=new cf(ye,Me),K=new wu(p,Ve,ce,ke,d,o),V=new df(p,ke,Me),le=new Tu(k,ye,Le,Me),pe=new Nu(k,ye,Le,Me),Le.programs=Re.programs,p.capabilities=Me,p.extensions=ye,p.properties=Ee,p.renderLists=dt,p.shadowMap=V,p.state=ce,p.info=Le}re();const ee=new vf(p,k);this.xr=ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const S=ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(L,z,!1))},this.getSize=function(S){return S.set(L,z)},this.setSize=function(S,I,B){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=S,z=I,e.width=Math.floor(S*F),e.height=Math.floor(I*F),B!==!1&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(L*F,z*F).floor()},this.setDrawingBufferSize=function(S,I,B){L=S,z=I,F=B,e.width=Math.floor(S*B),e.height=Math.floor(I*B),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(D)},this.setViewport=function(S,I,B,N){S.isVector4?D.set(S.x,S.y,S.z,S.w):D.set(S,I,B,N),ce.viewport(T.copy(D).multiplyScalar(F).floor())},this.getScissor=function(S){return S.copy(U)},this.setScissor=function(S,I,B,N){S.isVector4?U.set(S.x,S.y,S.z,S.w):U.set(S,I,B,N),ce.scissor(P.copy(U).multiplyScalar(F).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(S){ce.setScissorTest(O=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(S=!0,I=!0,B=!0){let N=0;S&&(N|=16384),I&&(N|=256),B&&(N|=1024),k.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",A,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),dt.dispose(),w.dispose(),Ee.dispose(),Ve.dispose(),We.dispose(),ke.dispose(),j.dispose(),Re.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Pe),ee.removeEventListener("sessionend",Ie),H&&(H.dispose(),H=null),et.stop()};function A(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const S=Le.autoReset,I=V.enabled,B=V.autoUpdate,N=V.needsUpdate,X=V.type;re(),Le.autoReset=S,V.enabled=I,V.autoUpdate=B,V.needsUpdate=N,V.type=X}function Q(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function fe(S){const I=S.target;I.removeEventListener("dispose",fe),oe(I)}function oe(S){ue(S),Ee.remove(S)}function ue(S){const I=Ee.get(S).programs;I!==void 0&&(I.forEach(function(B){Re.releaseProgram(B)}),S.isShaderMaterial&&Re.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,B,N,X,ge){I===null&&(I=he);const Se=X.isMesh&&X.matrixWorld.determinant()<0,we=Co(S,I,B,N,X);ce.setMaterial(N,Se);let be=B.index;const Fe=B.attributes.position;if(be===null){if(Fe===void 0||Fe.count===0)return}else if(be.count===0)return;let Ae=1;N.wireframe===!0&&(be=ot.getWireframeAttribute(B),Ae=2),j.setup(X,N,we,B,be);let Ce,Oe=le;be!==null&&(Ce=qe.get(be),Oe=pe,Oe.setIndex(Ce));const nn=be!==null?be.count:Fe.count,Mn=B.drawRange.start*Ae,yn=B.drawRange.count*Ae,wt=ge!==null?ge.start*Ae:0,De=ge!==null?ge.count*Ae:1/0,Sn=Math.max(Mn,wt),Be=Math.min(nn,Mn+yn,wt+De)-1,Et=Math.max(0,Be-Sn+1);if(Et!==0){if(X.isMesh)N.wireframe===!0?(ce.setLineWidth(N.wireframeLinewidth*de()),Oe.setMode(1)):Oe.setMode(4);else if(X.isLine){let Xt=N.linewidth;Xt===void 0&&(Xt=1),ce.setLineWidth(Xt*de()),X.isLineSegments?Oe.setMode(1):X.isLineLoop?Oe.setMode(2):Oe.setMode(3)}else X.isPoints?Oe.setMode(0):X.isSprite&&Oe.setMode(4);if(X.isInstancedMesh)Oe.renderInstances(Sn,Et,X.count);else if(B.isInstancedBufferGeometry){const Xt=Math.min(B.instanceCount,B._maxInstanceCount);Oe.renderInstances(Sn,Et,Xt)}else Oe.render(Sn,Et)}},this.compile=function(S,I){u=w.get(S),u.init(),g.push(u),S.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights(p.physicallyCorrectLights),S.traverse(function(B){const N=B.material;if(N)if(Array.isArray(N))for(let X=0;X<N.length;X++){const ge=N[X];ts(ge,S,B)}else ts(N,S,B)}),g.pop(),u=null};let ne=null;function xe(S){ne&&ne(S)}function Pe(){et.stop()}function Ie(){et.start()}const et=new no;et.setAnimationLoop(xe),typeof self!="undefined"&&et.setContext(self),this.setAnimationLoop=function(S){ne=S,ee.setAnimationLoop(S),S===null?et.stop():et.start()},ee.addEventListener("sessionstart",Pe),ee.addEventListener("sessionend",Ie),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(I),I=ee.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,I,C),u=w.get(S,g.length),u.init(),g.push(u),ie.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(ie),G=this.localClippingEnabled,q=M.init(this.clippingPlanes,G,I),f=dt.get(S,m.length),f.init(),m.push(f),bt(S,I,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(Z,Y),q===!0&&M.beginShadows();const B=u.state.shadowsArray;if(V.render(B,S,I),q===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(f,S),u.setupLights(p.physicallyCorrectLights),I.isArrayCamera){const N=I.cameras;for(let X=0,ge=N.length;X<ge;X++){const Se=N[X];cr(f,S,Se,Se.viewport)}}else cr(f,S,I);C!==null&&(_e.updateMultisampleRenderTarget(C),_e.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(p,S,I),j.resetDefaultState(),E=-1,x=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function bt(S,I,B,N){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||W.intersectsSprite(S)){N&&J.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ie);const Se=ke.update(S),we=S.material;we.visible&&f.push(S,Se,we,B,J.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Le.render.frame&&(S.skeleton.update(),S.skeleton.frame=Le.render.frame),!S.frustumCulled||W.intersectsObject(S))){N&&J.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ie);const Se=ke.update(S),we=S.material;if(Array.isArray(we)){const be=Se.groups;for(let Fe=0,Ae=be.length;Fe<Ae;Fe++){const Ce=be[Fe],Oe=we[Ce.materialIndex];Oe&&Oe.visible&&f.push(S,Se,Oe,B,J.z,Ce)}}else we.visible&&f.push(S,Se,we,B,J.z,null)}}const ge=S.children;for(let Se=0,we=ge.length;Se<we;Se++)bt(ge[Se],I,B,N)}function cr(S,I,B,N){const X=S.opaque,ge=S.transmissive,Se=S.transparent;u.setupLightsView(B),ge.length>0&&To(X,I,B),N&&ce.viewport(T.copy(N)),X.length>0&&yi(X,I,B),ge.length>0&&yi(ge,I,B),Se.length>0&&yi(Se,I,B),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function To(S,I,B){const N=Me.isWebGL2;H===null&&(H=new en(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?ui:mn,minFilter:Ki,samples:N&&s===!0?4:0})),p.getDrawingBufferSize($),N?H.setSize($.x,$.y):H.setSize(Ys($.x),Ys($.y));const X=p.getRenderTarget();p.setRenderTarget(H),p.clear();const ge=p.toneMapping;p.toneMapping=Vt,yi(S,I,B),p.toneMapping=ge,_e.updateMultisampleRenderTarget(H),_e.updateRenderTargetMipmap(H),p.setRenderTarget(X)}function yi(S,I,B){const N=I.isScene===!0?I.overrideMaterial:null;for(let X=0,ge=S.length;X<ge;X++){const Se=S[X],we=Se.object,be=Se.geometry,Fe=N===null?Se.material:N,Ae=Se.group;we.layers.test(B.layers)&&Ao(we,I,B,be,Fe,Ae)}}function Ao(S,I,B,N,X,ge){S.onBeforeRender(p,I,B,N,X,ge),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(p,I,B,N,S,ge),X.transparent===!0&&X.side===kt?(X.side=yt,X.needsUpdate=!0,p.renderBufferDirect(B,I,N,X,S,ge),X.side=hi,X.needsUpdate=!0,p.renderBufferDirect(B,I,N,X,S,ge),X.side=kt):p.renderBufferDirect(B,I,N,X,S,ge),S.onAfterRender(p,I,B,N,X,ge)}function ts(S,I,B){I.isScene!==!0&&(I=he);const N=Ee.get(S),X=u.state.lights,ge=u.state.shadowsArray,Se=X.state.version,we=Re.getParameters(S,X.state,ge,I,B),be=Re.getProgramCacheKey(we);let Fe=N.programs;N.environment=S.isMeshStandardMaterial?I.environment:null,N.fog=I.fog,N.envMap=(S.isMeshStandardMaterial?We:Ve).get(S.envMap||N.environment),Fe===void 0&&(S.addEventListener("dispose",fe),Fe=new Map,N.programs=Fe);let Ae=Fe.get(be);if(Ae!==void 0){if(N.currentProgram===Ae&&N.lightsStateVersion===Se)return hr(S,we),Ae}else we.uniforms=Re.getUniforms(S),S.onBuild(B,we,p),S.onBeforeCompile(we,p),Ae=Re.acquireProgram(we,be),Fe.set(be,Ae),N.uniforms=we.uniforms;const Ce=N.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=M.uniform),hr(S,we),N.needsLights=Do(S),N.lightsStateVersion=Se,N.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.directionalShadowMap.value=X.state.directionalShadowMap,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotShadowMap.value=X.state.spotShadowMap,Ce.spotShadowMatrix.value=X.state.spotShadowMatrix,Ce.pointShadowMap.value=X.state.pointShadowMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix);const Oe=Ae.getUniforms(),nn=ji.seqWithValue(Oe.seq,Ce);return N.currentProgram=Ae,N.uniformsList=nn,Ae}function hr(S,I){const B=Ee.get(S);B.outputEncoding=I.outputEncoding,B.instancing=I.instancing,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Co(S,I,B,N,X){I.isScene!==!0&&(I=he),_e.resetTextureUnits();const ge=I.fog,Se=N.isMeshStandardMaterial?I.environment:null,we=C===null?p.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:gn,be=(N.isMeshStandardMaterial?We:Ve).get(N.envMap||Se),Fe=N.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ae=!!N.normalMap&&!!B.attributes.tangent,Ce=!!B.morphAttributes.position,Oe=!!B.morphAttributes.normal,nn=!!B.morphAttributes.color,Mn=N.toneMapped?p.toneMapping:Vt,yn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,wt=yn!==void 0?yn.length:0,De=Ee.get(N),Sn=u.state.lights;if(q===!0&&(G===!0||S!==x)){const Tt=S===x&&N.id===E;M.setState(N,S,Tt)}let Be=!1;N.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Sn.state.version||De.outputEncoding!==we||X.isInstancedMesh&&De.instancing===!1||!X.isInstancedMesh&&De.instancing===!0||X.isSkinnedMesh&&De.skinning===!1||!X.isSkinnedMesh&&De.skinning===!0||De.envMap!==be||N.fog===!0&&De.fog!==ge||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==M.numPlanes||De.numIntersection!==M.numIntersection)||De.vertexAlphas!==Fe||De.vertexTangents!==Ae||De.morphTargets!==Ce||De.morphNormals!==Oe||De.morphColors!==nn||De.toneMapping!==Mn||Me.isWebGL2===!0&&De.morphTargetsCount!==wt)&&(Be=!0):(Be=!0,De.__version=N.version);let Et=De.currentProgram;Be===!0&&(Et=ts(N,I,X));let Xt=!1,Qn=!1,ns=!1;const tt=Et.getUniforms(),ei=De.uniforms;if(ce.useProgram(Et.program)&&(Xt=!0,Qn=!0,ns=!0),N.id!==E&&(E=N.id,Qn=!0),Xt||x!==S){if(tt.setValue(k,"projectionMatrix",S.projectionMatrix),Me.logarithmicDepthBuffer&&tt.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),x!==S&&(x=S,Qn=!0,ns=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Tt=tt.map.cameraPosition;Tt!==void 0&&Tt.setValue(k,J.setFromMatrixPosition(S.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&tt.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||X.isSkinnedMesh)&&tt.setValue(k,"viewMatrix",S.matrixWorldInverse)}if(X.isSkinnedMesh){tt.setOptional(k,X,"bindMatrix"),tt.setOptional(k,X,"bindMatrixInverse");const Tt=X.skeleton;Tt&&(Me.floatVertexTextures?(Tt.boneTexture===null&&Tt.computeBoneTexture(),tt.setValue(k,"boneTexture",Tt.boneTexture,_e),tt.setValue(k,"boneTextureSize",Tt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const is=B.morphAttributes;return(is.position!==void 0||is.normal!==void 0||is.color!==void 0&&Me.isWebGL2===!0)&&se.update(X,B,N,Et),(Qn||De.receiveShadow!==X.receiveShadow)&&(De.receiveShadow=X.receiveShadow,tt.setValue(k,"receiveShadow",X.receiveShadow)),Qn&&(tt.setValue(k,"toneMappingExposure",p.toneMappingExposure),De.needsLights&&Lo(ei,ns),ge&&N.fog===!0&&ut.refreshFogUniforms(ei,ge),ut.refreshMaterialUniforms(ei,N,F,z,H),ji.upload(k,De.uniformsList,ei,_e)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ji.upload(k,De.uniformsList,ei,_e),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&tt.setValue(k,"center",X.center),tt.setValue(k,"modelViewMatrix",X.modelViewMatrix),tt.setValue(k,"normalMatrix",X.normalMatrix),tt.setValue(k,"modelMatrix",X.matrixWorld),Et}function Lo(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Do(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,I,B){Ee.get(S.texture).__webglTexture=I,Ee.get(S.depthTexture).__webglTexture=B;const N=Ee.get(S);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=B===void 0,N.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const B=Ee.get(S);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,B=0){C=S,_=I,b=B;let N=!0;if(S){const be=Ee.get(S);be.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),N=!1):be.__webglFramebuffer===void 0?_e.setupRenderTarget(S):be.__hasExternalTextures&&_e.rebindTextures(S,Ee.get(S.texture).__webglTexture,Ee.get(S.depthTexture).__webglTexture)}let X=null,ge=!1,Se=!1;if(S){const be=S.texture;(be.isData3DTexture||be.isDataArrayTexture)&&(Se=!0);const Fe=Ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(X=Fe[I],ge=!0):Me.isWebGL2&&S.samples>0&&_e.useMultisampledRTT(S)===!1?X=Ee.get(S).__webglMultisampledFramebuffer:X=Fe,T.copy(S.viewport),P.copy(S.scissor),v=S.scissorTest}else T.copy(D).multiplyScalar(F).floor(),P.copy(U).multiplyScalar(F).floor(),v=O;if(ce.bindFramebuffer(36160,X)&&Me.drawBuffers&&N&&ce.drawBuffers(S,X),ce.viewport(T),ce.scissor(P),ce.setScissorTest(v),ge){const be=Ee.get(S.texture);k.framebufferTexture2D(36160,36064,34069+I,be.__webglTexture,B)}else if(Se){const be=Ee.get(S.texture),Fe=I||0;k.framebufferTextureLayer(36160,36064,be.__webglTexture,B||0,Fe)}E=-1},this.readRenderTargetPixels=function(S,I,B,N,X,ge,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){ce.bindFramebuffer(36160,we);try{const be=S.texture,Fe=be.format,Ae=be.type;if(Fe!==Mt&&y.convert(Fe)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ae===ui&&(ye.has("EXT_color_buffer_half_float")||Me.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ae!==mn&&y.convert(Ae)!==k.getParameter(35738)&&!(Ae===un&&(Me.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-N&&B>=0&&B<=S.height-X&&k.readPixels(I,B,N,X,y.convert(Fe),y.convert(Ae),ge)}finally{const be=C!==null?Ee.get(C).__webglFramebuffer:null;ce.bindFramebuffer(36160,be)}}},this.copyFramebufferToTexture=function(S,I,B=0){const N=Math.pow(2,-B),X=Math.floor(I.image.width*N),ge=Math.floor(I.image.height*N);_e.setTexture2D(I,0),k.copyTexSubImage2D(3553,B,0,0,S.x,S.y,X,ge),ce.unbindTexture()},this.copyTextureToTexture=function(S,I,B,N=0){const X=I.image.width,ge=I.image.height,Se=y.convert(B.format),we=y.convert(B.type);_e.setTexture2D(B,0),k.pixelStorei(37440,B.flipY),k.pixelStorei(37441,B.premultiplyAlpha),k.pixelStorei(3317,B.unpackAlignment),I.isDataTexture?k.texSubImage2D(3553,N,S.x,S.y,X,ge,Se,we,I.image.data):I.isCompressedTexture?k.compressedTexSubImage2D(3553,N,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,Se,I.mipmaps[0].data):k.texSubImage2D(3553,N,S.x,S.y,Se,we,I.image),N===0&&B.generateMipmaps&&k.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(S,I,B,N,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=S.max.x-S.min.x+1,Se=S.max.y-S.min.y+1,we=S.max.z-S.min.z+1,be=y.convert(N.format),Fe=y.convert(N.type);let Ae;if(N.isData3DTexture)_e.setTexture3D(N,0),Ae=32879;else if(N.isDataArrayTexture)_e.setTexture2DArray(N,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,N.flipY),k.pixelStorei(37441,N.premultiplyAlpha),k.pixelStorei(3317,N.unpackAlignment);const Ce=k.getParameter(3314),Oe=k.getParameter(32878),nn=k.getParameter(3316),Mn=k.getParameter(3315),yn=k.getParameter(32877),wt=B.isCompressedTexture?B.mipmaps[0]:B.image;k.pixelStorei(3314,wt.width),k.pixelStorei(32878,wt.height),k.pixelStorei(3316,S.min.x),k.pixelStorei(3315,S.min.y),k.pixelStorei(32877,S.min.z),B.isDataTexture||B.isData3DTexture?k.texSubImage3D(Ae,X,I.x,I.y,I.z,ge,Se,we,be,Fe,wt.data):B.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ae,X,I.x,I.y,I.z,ge,Se,we,be,wt.data)):k.texSubImage3D(Ae,X,I.x,I.y,I.z,ge,Se,we,be,Fe,wt),k.pixelStorei(3314,Ce),k.pixelStorei(32878,Oe),k.pixelStorei(3316,nn),k.pixelStorei(3315,Mn),k.pixelStorei(32877,yn),X===0&&N.generateMipmaps&&k.generateMipmap(Ae),ce.unbindTexture()},this.initTexture=function(S){_e.setTexture2D(S,0),ce.unbindTexture()},this.resetState=function(){_=0,b=0,C=null,ce.reset(),j.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Sf extends vn{}Sf.prototype.isWebGL1Renderer=!0;class Kn extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class bf extends $e{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Wt extends $e{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ba=new R,wa=new R,Ea=new Ue,Os=new Ji,Hi=new _i;class di extends Je{constructor(e=new Qe,t=new Wt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ba.fromBufferAttribute(t,i-1),wa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ba.distanceTo(wa);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere),Hi.applyMatrix4(i),Hi.radius+=s,e.ray.intersectsSphere(Hi)===!1)return;Ea.copy(i).invert(),Os.copy(e.ray).applyMatrix4(Ea);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,d=new R,f=new R,u=new R,m=this.isLineSegments?2:1,g=n.index,h=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let C=_,E=b-1;C<E;C+=m){const x=g.getX(C),T=g.getX(C+1);if(l.fromBufferAttribute(h,x),d.fromBufferAttribute(h,T),Os.distanceSqToSegment(l,d,u,f)>c)continue;u.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(u);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),b=Math.min(h.count,o.start+o.count);for(let C=_,E=b-1;C<E;C+=m){if(l.fromBufferAttribute(h,C),d.fromBufferAttribute(h,C+1),Os.distanceSqToSegment(l,d,u,f)>c)continue;u.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(u);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ta=new R,Aa=new R;class uo extends di{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ta.fromBufferAttribute(t,i),Aa.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ta.distanceTo(Aa);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rr extends $e{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ca=new Ue,$s=new Ji,Wi=new _i,Xi=new R;class wf extends Je{constructor(e=new Qe,t=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(i),Wi.radius+=s,e.ray.intersectsSphere(Wi)===!1)return;Ca.copy(i).invert(),$s.copy(e.ray).applyMatrix4(Ca);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=u,p=m;g<p;g++){const h=l.getX(g);Xi.fromBufferAttribute(f,h),La(Xi,h,c,i,e,t,this)}}else{const u=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=u,p=m;g<p;g++)Xi.fromBufferAttribute(f,g),La(Xi,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function La(r,e,t,n,i,s,o){const a=$s.distanceSqToPoint(r);if(a<t){const c=new R;$s.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}new R;class ar extends Qe{constructor(e=1,t=1,n=1,i=8,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const d=[],f=[],u=[],m=[];let g=0;const p=[],h=n/2;let _=0;b(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(d),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(m,2));function b(){const E=new R,x=new R;let T=0;const P=(t-e)/n;for(let v=0;v<=s;v++){const L=[],z=v/s,F=z*(t-e)+e;for(let Z=0;Z<=i;Z++){const Y=Z/i,D=Y*c+a,U=Math.sin(D),O=Math.cos(D);x.x=F*U,x.y=-z*n+h,x.z=F*O,f.push(x.x,x.y,x.z),E.set(U,P,O).normalize(),u.push(E.x,E.y,E.z),m.push(Y,1-z),L.push(g++)}p.push(L)}for(let v=0;v<i;v++)for(let L=0;L<s;L++){const z=p[L][v],F=p[L+1][v],Z=p[L+1][v+1],Y=p[L][v+1];d.push(z,F,Y),d.push(F,Z,Y),T+=6}l.addGroup(_,T,0),_+=T}function C(E){const x=g,T=new me,P=new R;let v=0;const L=E===!0?e:t,z=E===!0?1:-1;for(let Z=1;Z<=i;Z++)f.push(0,h*z,0),u.push(0,z,0),m.push(.5,.5),g++;const F=g;for(let Z=0;Z<=i;Z++){const D=Z/i*c+a,U=Math.cos(D),O=Math.sin(D);P.x=L*O,P.y=h*z,P.z=L*U,f.push(P.x,P.y,P.z),u.push(0,z,0),T.x=U*.5+.5,T.y=O*.5*z+.5,m.push(T.x,T.y),g++}for(let Z=0;Z<i;Z++){const Y=x+Z,D=F+Z;E===!0?d.push(D,D+1,Y):d.push(D+1,D,Y),v+=3}l.addGroup(_,v,E===!0?1:2),_+=v}}static fromJSON(e){return new ar(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}new R;new R;new R;new Rt;class Ef extends $e{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Tf extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fo extends $e{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yn,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Af extends fo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class or extends $e{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yn,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cf extends $e{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yn,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Lf extends $e{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yn,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Df extends $e{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Rf extends $e{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yn,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pf extends Wt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const If={ShadowMaterial:Ef,SpriteMaterial:bf,RawShaderMaterial:Tf,ShaderMaterial:Ht,PointsMaterial:rr,MeshPhysicalMaterial:Af,MeshStandardMaterial:fo,MeshPhongMaterial:or,MeshToonMaterial:Cf,MeshNormalMaterial:Lf,MeshLambertMaterial:Df,MeshDepthMaterial:co,MeshDistanceMaterial:ho,MeshBasicMaterial:Zn,MeshMatcapMaterial:Rf,LineDashedMaterial:Pf,LineBasicMaterial:Wt,Material:$e};$e.fromType=function(r){return new If[r]};class Ff extends Je{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Da=new Ue,Ra=new R,Pa=new R;class Nf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ra.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ra),Pa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pa),t.updateMatrixWorld(),Da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zf extends Nf{constructor(){super(new io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Of extends Ff{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DefaultUp),this.updateMatrix(),this.target=new Je,this.shadow=new zf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jn{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ia(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ia();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ia(){return(typeof performance=="undefined"?Date:performance).now()}const po="\\[\\]\\.:\\/",lr="[^"+po+"]",Uf="[^"+po.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",lr);/(WCOD+)?/.source.replace("WCOD",Uf);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lr);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lr);class mo{constructor(e,t,n=0,i=1/0){this.ray=new Ji(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ks(e,this,n,t),n.sort(Fa),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ks(e[i],this,n,t);return n.sort(Fa),n}}function Fa(r,e){return r.distance-e.distance}function Ks(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Ks(i[s],e,t,!0)}}class Na{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bf extends uo{constructor(e=10,t=10,n=4473924,i=8947848){n=new ve(n),i=new ve(i);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let u=0,m=0,g=-a;u<=t;u++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const p=u===s?n:i;p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3}const d=new Qe;d.setAttribute("position",new at(c,3)),d.setAttribute("color",new at(l,3));const f=new Wt({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}}const At=new Uint32Array(512),Ct=new Uint32Array(512);for(let r=0;r<256;++r){const e=r-127;e<-27?(At[r]=0,At[r|256]=32768,Ct[r]=24,Ct[r|256]=24):e<-14?(At[r]=1024>>-e-14,At[r|256]=1024>>-e-14|32768,Ct[r]=-e-1,Ct[r|256]=-e-1):e<=15?(At[r]=e+15<<10,At[r|256]=e+15<<10|32768,Ct[r]=13,Ct[r|256]=13):e<128?(At[r]=31744,At[r|256]=64512,Ct[r]=24,Ct[r|256]=24):(At[r]=31744,At[r|256]=64512,Ct[r]=13,Ct[r|256]=13)}const go=new Uint32Array(2048),Mi=new Uint32Array(64),Gf=new Uint32Array(64);for(let r=1;r<1024;++r){let e=r<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,go[r]=e|t}for(let r=1024;r<2048;++r)go[r]=939524096+(r-1024<<13);for(let r=1;r<31;++r)Mi[r]=r<<23;Mi[31]=1199570944;Mi[32]=2147483648;for(let r=33;r<63;++r)Mi[r]=2147483648+(r-32<<23);Mi[63]=3347054592;for(let r=1;r<64;++r)r!==32&&(Gf[r]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tr}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tr);const za={type:"change"},Us={type:"start"},Oa={type:"end"};class _o extends tn{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bn.ROTATE,MIDDLE:bn.DOLLY,RIGHT:bn.PAN},this.touches={ONE:wn.ROTATE,TWO:wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",dt),this._domElementKeyEvents=y},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(za),n.update(),s=i.NONE},this.update=function(){const y=new R,j=new _n().setFromUnitVectors(e.up,new R(0,1,0)),re=j.clone().invert(),ee=new R,A=new _n,te=2*Math.PI;return function(){const fe=n.object.position;y.copy(fe).sub(n.target),y.applyQuaternion(j),a.setFromVector3(y),n.autoRotate&&s===i.NONE&&L(P()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let oe=n.minAzimuthAngle,ue=n.maxAzimuthAngle;return isFinite(oe)&&isFinite(ue)&&(oe<-Math.PI?oe+=te:oe>Math.PI&&(oe-=te),ue<-Math.PI?ue+=te:ue>Math.PI&&(ue-=te),oe<=ue?a.theta=Math.max(oe,Math.min(ue,a.theta)):a.theta=a.theta>(oe+ue)/2?Math.max(oe,a.theta):Math.min(ue,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),y.setFromSpherical(a),y.applyQuaternion(re),fe.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),l=1,f||ee.distanceToSquared(n.object.position)>o||8*(1-A.dot(n.object.quaternion))>o?(n.dispatchEvent(za),ee.copy(n.object.position),A.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",Ve),n.domElement.removeEventListener("pointercancel",ot),n.domElement.removeEventListener("wheel",ut),n.domElement.removeEventListener("pointermove",We),n.domElement.removeEventListener("pointerup",qe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",dt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Na,c=new Na;let l=1;const d=new R;let f=!1;const u=new me,m=new me,g=new me,p=new me,h=new me,_=new me,b=new me,C=new me,E=new me,x=[],T={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function L(y){c.theta-=y}function z(y){c.phi-=y}const F=function(){const y=new R;return function(re,ee){y.setFromMatrixColumn(ee,0),y.multiplyScalar(-re),d.add(y)}}(),Z=function(){const y=new R;return function(re,ee){n.screenSpacePanning===!0?y.setFromMatrixColumn(ee,1):(y.setFromMatrixColumn(ee,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(re),d.add(y)}}(),Y=function(){const y=new R;return function(re,ee){const A=n.domElement;if(n.object.isPerspectiveCamera){const te=n.object.position;y.copy(te).sub(n.target);let Q=y.length();Q*=Math.tan(n.object.fov/2*Math.PI/180),F(2*re*Q/A.clientHeight,n.object.matrix),Z(2*ee*Q/A.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(re*(n.object.right-n.object.left)/n.object.zoom/A.clientWidth,n.object.matrix),Z(ee*(n.object.top-n.object.bottom)/n.object.zoom/A.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(y){n.object.isPerspectiveCamera?l/=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*y)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(y){n.object.isPerspectiveCamera?l*=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(y){u.set(y.clientX,y.clientY)}function W(y){b.set(y.clientX,y.clientY)}function q(y){p.set(y.clientX,y.clientY)}function G(y){m.set(y.clientX,y.clientY),g.subVectors(m,u).multiplyScalar(n.rotateSpeed);const j=n.domElement;L(2*Math.PI*g.x/j.clientHeight),z(2*Math.PI*g.y/j.clientHeight),u.copy(m),n.update()}function H(y){C.set(y.clientX,y.clientY),E.subVectors(C,b),E.y>0?D(v()):E.y<0&&U(v()),b.copy(C),n.update()}function ie(y){h.set(y.clientX,y.clientY),_.subVectors(h,p).multiplyScalar(n.panSpeed),Y(_.x,_.y),p.copy(h),n.update()}function $(y){y.deltaY<0?U(v()):y.deltaY>0&&D(v()),n.update()}function J(y){let j=!1;switch(y.code){case n.keys.UP:Y(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:Y(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:Y(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:Y(-n.keyPanSpeed,0),j=!0;break}j&&(y.preventDefault(),n.update())}function he(){if(x.length===1)u.set(x[0].pageX,x[0].pageY);else{const y=.5*(x[0].pageX+x[1].pageX),j=.5*(x[0].pageY+x[1].pageY);u.set(y,j)}}function de(){if(x.length===1)p.set(x[0].pageX,x[0].pageY);else{const y=.5*(x[0].pageX+x[1].pageX),j=.5*(x[0].pageY+x[1].pageY);p.set(y,j)}}function k(){const y=x[0].pageX-x[1].pageX,j=x[0].pageY-x[1].pageY,re=Math.sqrt(y*y+j*j);b.set(0,re)}function Ne(){n.enableZoom&&k(),n.enablePan&&de()}function ye(){n.enableZoom&&k(),n.enableRotate&&he()}function Me(y){if(x.length==1)m.set(y.pageX,y.pageY);else{const re=pe(y),ee=.5*(y.pageX+re.x),A=.5*(y.pageY+re.y);m.set(ee,A)}g.subVectors(m,u).multiplyScalar(n.rotateSpeed);const j=n.domElement;L(2*Math.PI*g.x/j.clientHeight),z(2*Math.PI*g.y/j.clientHeight),u.copy(m)}function ce(y){if(x.length===1)h.set(y.pageX,y.pageY);else{const j=pe(y),re=.5*(y.pageX+j.x),ee=.5*(y.pageY+j.y);h.set(re,ee)}_.subVectors(h,p).multiplyScalar(n.panSpeed),Y(_.x,_.y),p.copy(h)}function Le(y){const j=pe(y),re=y.pageX-j.x,ee=y.pageY-j.y,A=Math.sqrt(re*re+ee*ee);C.set(0,A),E.set(0,Math.pow(C.y/b.y,n.zoomSpeed)),D(E.y),b.copy(C)}function Ee(y){n.enableZoom&&Le(y),n.enablePan&&ce(y)}function _e(y){n.enableZoom&&Le(y),n.enableRotate&&Me(y)}function Ve(y){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",We),n.domElement.addEventListener("pointerup",qe)),K(y),y.pointerType==="touch"?w(y):ke(y))}function We(y){n.enabled!==!1&&(y.pointerType==="touch"?M(y):Re(y))}function qe(y){se(y),x.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",We),n.domElement.removeEventListener("pointerup",qe)),n.dispatchEvent(Oa),s=i.NONE}function ot(y){se(y)}function ke(y){let j;switch(y.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case bn.DOLLY:if(n.enableZoom===!1)return;W(y),s=i.DOLLY;break;case bn.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;q(y),s=i.PAN}else{if(n.enableRotate===!1)return;O(y),s=i.ROTATE}break;case bn.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;O(y),s=i.ROTATE}else{if(n.enablePan===!1)return;q(y),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Us)}function Re(y){if(n.enabled!==!1)switch(s){case i.ROTATE:if(n.enableRotate===!1)return;G(y);break;case i.DOLLY:if(n.enableZoom===!1)return;H(y);break;case i.PAN:if(n.enablePan===!1)return;ie(y);break}}function ut(y){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(y.preventDefault(),n.dispatchEvent(Us),$(y),n.dispatchEvent(Oa))}function dt(y){n.enabled===!1||n.enablePan===!1||J(y)}function w(y){switch(le(y),x.length){case 1:switch(n.touches.ONE){case wn.ROTATE:if(n.enableRotate===!1)return;he(),s=i.TOUCH_ROTATE;break;case wn.PAN:if(n.enablePan===!1)return;de(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case wn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ne(),s=i.TOUCH_DOLLY_PAN;break;case wn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Us)}function M(y){switch(le(y),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(y),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(y),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(y),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(y),n.update();break;default:s=i.NONE}}function V(y){n.enabled!==!1&&y.preventDefault()}function K(y){x.push(y)}function se(y){delete T[y.pointerId];for(let j=0;j<x.length;j++)if(x[j].pointerId==y.pointerId){x.splice(j,1);return}}function le(y){let j=T[y.pointerId];j===void 0&&(j=new me,T[y.pointerId]=j),j.set(y.pageX,y.pageY)}function pe(y){const j=y.pointerId===x[0].pointerId?x[1]:x[0];return T[j.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",Ve),n.domElement.addEventListener("pointercancel",ot),n.domElement.addEventListener("wheel",ut,{passive:!1}),this.update()}}function xo(r,e){let t=a(e);const n=new ar(5,5,20,32);n.rotateX(-Math.PI/2);const i=new or({color:8449552,shininess:100,clippingPlanes:[new Lt(new R(0,0,1),-9.999)],clipShadows:!0}),s=new ht(n,i);s.geometry.applyMatrix4(t),r.add(s);function o(c){s.geometry.applyMatrix4(t.invert()),t=a(c),s.geometry.applyMatrix4(t)}function a(c){let l=new Ue,d=[];for(let f=0;f<9;f++)d[f]=c[f].innerHTML;return l.set(d[0],d[3],d[6],0,d[1],d[4],d[7],0,d[2],d[5],d[8],0,0,0,0,1),l}this.update=function(c,l){o(l)}}function fi(r,{x:e,y:t,z:n},i){const s=new Of(5591130,i);s.position.set(e,t,n),s.castShadow=!0,s.shadow.camera.near=1,s.shadow.camera.far=10,s.shadow.camera.right=1,s.shadow.camera.left=-1,s.shadow.camera.top=1,s.shadow.camera.bottom=-1,s.shadow.mapSize.width=1024,s.shadow.mapSize.height=1024,r.add(s),this.update=function(){}}function pi(r,{x:e,y:t,z:n}){const o=new Bf(200,16);o.material.opacity=.05,e==1&&o.rotateX(Math.PI/2),t==1&&o.rotateY(Math.PI/2),n==1&&o.rotateZ(Math.PI/2),r.add(o),this.update=function(){}}function Vf(r){const e=new xn(50,100);e.rotateZ(-Math.PI/2);const t=new or({color:15806240,side:kt,opacity:.5}),n=new ht(e,t);n.position.set(0,0,9.8),r.add(n),this.update=function(){}}function kf(r,e){const t=new Jn,n={width:r.width,height:r.height},i=c(),s=l(n),o=d(n);new _o(o,s.domElement);const a=f(i,e);function c(){const u=new Kn;return u.background=null,u}function l({width:u,height:m}){const g=new vn({canvas:r,antialias:!0,alpha:!0}),p=window.devicePixelRatio?window.devicePixelRatio:1;return g.setPixelRatio(p),g.setSize(u,m),g}function d({width:u,height:m}){const g=u/m,p=60,h=1,_=100,b=new Ye(p,g,h,_);return b.position.set(-50,0,0),b.lookAt(0,0,0),b.rotation.y=-Math.PI/2,b}function f(u,m){return[new fi(u,{x:-20,y:-10,z:20},6),new fi(u,{x:20,y:10,z:-20},5),new xo(u,m),new Vf(u)]}this.update=function(u){const m=t.getElapsedTime();for(let g=0;g<a.length;g++)a[g].update(m,u);s.render(i,o)},this.onWindowResize=function(){const{width:u,height:m}=r;n.width=u,n.height=m,o.aspect=u/m,o.updateProjectionMatrix(),s.setSize(u,m)}}function Hf(r,e){const t=new Jn,n={width:r.width,height:r.height},i=c(),s=l(n),o=d(n),a=f(i,e);function c(){const u=new Kn;return u.background=null,u}function l({width:u,height:m}){const g=new vn({canvas:r,antialias:!0,alpha:!0}),p=window.devicePixelRatio?window.devicePixelRatio:1;return g.setPixelRatio(p),g.setSize(u,m),g.localClippingEnabled=!0,g}function d({width:u,height:m}){const g=u/m,p=60,h=1,_=100,b=new Ye(p,g,h,_);return b.position.set(0,0,50),b}function f(u,m){return[new fi(u,{x:0,y:0,z:20},2),new xo(u,m),new pi(u,{x:1,y:0,z:0})]}this.update=function(u){const m=t.getElapsedTime();for(let g=0;g<a.length;g++)a[g].update(m,u);s.render(i,o)},this.onWindowResize=function(){const{width:u,height:m}=r;n.width=u,n.height=m,o.aspect=u/m,o.updateProjectionMatrix(),s.setSize(u,m)}}function Wf(r){const e=new xn(25,25,5,5),t=new Zn({color:8449552,side:kt});var n=new ht(e,t);r.add(n),this.update=function(i){n.geometry.applyMatrix4(i)}}function Xf(r,{x:e,y:t,z:n}){let o=[],a=[],c=-100,l=200/2;for(let g=0;g<200/16;g++)o.push(new R(c,c+g*16,0)),o.push(new R(l,c+g*16,0)),a.push(new R(c+g*16,c,0)),a.push(new R(c+g*16,l,0));const d=new Wt({color:255}),f=o.concat(a),u=new Qe().setFromPoints(f),m=new uo(u,d);r.add(m),this.update=function(g){m.geometry.applyMatrix4(g)}}function qf(r,e,t,n,i){new Jn;const s={width:r.width,height:r.height},o=p(),a=h(s),c=_(s),l=b(o);let d=E(e),f=E(t),u=E(n),m=E(i),g=d.multiply(f).multiply(u).multiply(u).multiply(m);C(e,t,n,i);function p(){const x=new Kn;return x.background=null,x}function h({width:x,height:T}){const P=new vn({canvas:r,antialias:!0,alpha:!0}),v=window.devicePixelRatio?window.devicePixelRatio:1;return P.setPixelRatio(v),P.setSize(x,T),P.localClippingEnabled=!0,P}function _({width:x,height:T}){const P=x/T,v=60,L=1,z=100,F=new Ye(v,P,L,z);return F.position.set(0,0,50),F.lookAt(0,0,0),F}function b(x,T,P,v,L){return[new fi(x,{x:0,y:20,z:0},2),new Wf(x),new Xf(x,{x:0,y:0,z:0})]}function C(x,T,P,v){d=E(x),f=E(T),u=E(P),m=E(v),g=d.multiply(f).multiply(u).multiply(u).multiply(m)}function E(x){let T=new Ue,P=[];for(let v=0;v<4;v++)P[v]=x[v].innerHTML;return T.set(P[0],P[2],0,0,P[1],P[3],0,0,0,0,1,0,0,0,0,1),T}this.onMatInput=function(x,T,P,v){l[1].update(g.invert()),l[2].update(g.invert()),C(x,T,P,v),l[1].update(g),l[2].update(g)},this.update=function(){a.render(o,c)},this.onWindowResize=function(){const{width:x,height:T}=r;s.width=x,s.height=T,c.aspect=x/T,c.updateProjectionMatrix(),a.setSize(x,T)}}function Js(r,e,t){if(r.isCamera){console.warn("THREE.DragControls: Constructor now expects ( objects, camera, domElement )");var n=r;r=e,e=n}var i=new Lt,s=new mo,o=new me,a=new R,c=new R,l=null,d=null,f=this;function u(){t.addEventListener("mousemove",p,!1),t.addEventListener("mousedown",h,!1),t.addEventListener("mouseup",_,!1),t.addEventListener("mouseleave",_,!1),t.addEventListener("touchmove",b,!1),t.addEventListener("touchstart",C,!1),t.addEventListener("touchend",E,!1)}function m(){t.removeEventListener("mousemove",p,!1),t.removeEventListener("mousedown",h,!1),t.removeEventListener("mouseup",_,!1),t.removeEventListener("mouseleave",_,!1),t.removeEventListener("touchmove",b,!1),t.removeEventListener("touchstart",C,!1),t.removeEventListener("touchend",E,!1)}function g(){m()}function p(x){x.preventDefault();var T=t.getBoundingClientRect();if(o.x=(x.clientX-T.left)/T.width*2-1,o.y=-((x.clientY-T.top)/T.height)*2+1,s.setFromCamera(o,e),l&&f.enabled){s.ray.intersectPlane(i,c)&&l.position.copy(c.sub(a)),f.dispatchEvent({type:"drag",object:l});return}s.setFromCamera(o,e);var P=s.intersectObjects(r);if(P.length>0){var v=P[0].object;i.setFromNormalAndCoplanarPoint(e.getWorldDirection(i.normal),v.position),d!==v&&(f.dispatchEvent({type:"hoveron",object:v}),t.style.cursor="pointer",d=v)}else d!==null&&(f.dispatchEvent({type:"hoveroff",object:d}),t.style.cursor="auto",d=null)}function h(x){x.preventDefault(),s.setFromCamera(o,e);var T=s.intersectObjects(r);T.length>0&&(l=T[0].object,s.ray.intersectPlane(i,c)&&a.copy(c).sub(l.position),t.style.cursor="move",f.dispatchEvent({type:"dragstart",object:l}))}function _(x){x.preventDefault(),l&&(f.dispatchEvent({type:"dragend",object:l}),l=null),t.style.cursor="auto"}function b(x){x.preventDefault(),x=x.changedTouches[0];var T=t.getBoundingClientRect();if(o.x=(x.clientX-T.left)/T.width*2-1,o.y=-((x.clientY-T.top)/T.height)*2+1,s.setFromCamera(o,e),l&&f.enabled){s.ray.intersectPlane(i,c)&&l.position.copy(c.sub(a)),f.dispatchEvent({type:"drag",object:l});return}}function C(x){x.preventDefault(),x=x.changedTouches[0];var T=t.getBoundingClientRect();o.x=(x.clientX-T.left)/T.width*2-1,o.y=-((x.clientY-T.top)/T.height)*2+1,s.setFromCamera(o,e);var P=s.intersectObjects(r);P.length>0&&(l=P[0].object,i.setFromNormalAndCoplanarPoint(e.getWorldDirection(i.normal),l.position),s.ray.intersectPlane(i,c)&&a.copy(c).sub(l.position),t.style.cursor="move",f.dispatchEvent({type:"dragstart",object:l}))}function E(x){x.preventDefault(),l&&(f.dispatchEvent({type:"dragend",object:l}),l=null),t.style.cursor="auto"}u(),this.enabled=!0,this.activate=u,this.deactivate=m,this.dispose=g,this.setObjects=function(){console.error("THREE.DragControls: setObjects() has been removed.")},this.on=function(x,T){console.warn("THREE.DragControls: on() has been deprecated. Use addEventListener() instead."),f.addEventListener(x,T)},this.off=function(x,T){console.warn("THREE.DragControls: off() has been deprecated. Use removeEventListener() instead."),f.removeEventListener(x,T)},this.notify=function(x){console.error("THREE.DragControls: notify() has been deprecated. Use dispatchEvent() instead."),f.dispatchEvent({type:x})}}Js.prototype=Object.create(tn.prototype);Js.prototype.constructor=Js;function jf(r){const e=new Jn,t={width:r.width,height:r.height},n=x(),i=T(t),s=P(t);v(n);var o=new xn(10,10,1,1);o.translate(-60,0,0);var a=new ht(o,new Zn({wireframe:!1,color:"red"}));n.add(a);var c=new wf(o,new rr({size:2,color:"black"}));n.add(c);var l=o.attributes.position.array;const d=[new R(0,0,0),new R(l[0],l[1],l[2]),new R(0,0,0),new R(l[3],l[4],l[5]),new R(0,0,0),new R(l[6],l[7],l[8]),new R(0,0,0),new R(l[9],l[10],l[11])];var f=new Qe().setFromPoints(d),u=new di(f,new Wt({color:"black"}));n.add(u);var m=new mo;m.params.Points.threshold=2;var g=new me,p=null,h=new Lt,_=new R,b=null,C=new R,E=!1;function x(){const D=new Kn;return D.background=null,D}function T({width:D,height:U}){const O=new vn({canvas:r,antialias:!0,alpha:!0}),W=window.devicePixelRatio?window.devicePixelRatio:1;return O.setPixelRatio(W),O.setSize(D,U),O}function P({width:D,height:U}){const O=D/U,W=60,q=1,G=1e3,H=new Ye(W,O,q,G);return H.position.set(-40,0,40),H.lookAt(-40,0,0),H}function v(D){return[new fi(D,{x:-20,y:-10,z:20},6),new pi(D,{x:1,y:0,z:0})]}function L(){n.remove(u);var D=o.attributes.position.array;const U=[new R(0,0,0),new R(D[0],D[1],D[2]),new R(0,0,0),new R(D[3],D[4],D[5]),new R(0,0,0),new R(D[6],D[7],D[8]),new R(0,0,0),new R(D[9],D[10],D[11])];f=new Qe().setFromPoints(U),u=new di(f,new Wt({color:"black"})),n.add(u)}function z(){if(p=m.intersectObject(c),p.length===0){b=null;return}b=p[0].index,F(p[0].point)}function F(D){_.subVectors(s.position,D).normalize(),h.setFromNormalAndCoplanarPoint(_,D)}function Z(D){Y(D),m.setFromCamera(g,s)}function Y(D){var U=i.domElement.getBoundingClientRect();g.x=(D.clientX-U.left)/(U.width-U.left)*2-1,g.y=-((D.clientY-U.top)/(U.bottom-U.top))*2+1}this.onMouseDown=function(D){E=!0,Z(D),z()},this.onMouseUp=function(D){E=!1,b=null},this.onMouseMove=function(D){E&&b!==null&&(Z(D),m.ray.intersectPlane(h,C),o.attributes.position.setXYZ(b,C.x,C.y,0),o.attributes.position.needsUpdate=!0)},this.update=function(){e.getElapsedTime(),i.render(n,s),L()},this.onWindowResize=function(){const{width:D,height:U}=r;t.width=D,t.height=U,s.aspect=D/U,s.updateProjectionMatrix(),i.setSize(D,U)}}function vo(r,{x:e,y:t,z:n}){const s=new Wt({color:16711680}),o=[];o.push(new R(1e4*e,1e4*t,1e4*n)),o.push(new R(-1e4*e,-1e4*t,-1e4*n));const a=new Qe().setFromPoints(o),c=new di(a,s);r.add(c),this.destroy=function(l){l.remove(c)},this.update=function(){}}function Yf(r){const e=new Jn,t={width:r.width,height:r.height},n=l(),i=d(t),s=f(t),o=p(n);var a=g(25);n.add(a);var c=u(n,20);function l(){const h=new Kn;return h.background=null,h}function d({width:h,height:_}){const b=new vn({canvas:r,antialias:!0,alpha:!0}),C=window.devicePixelRatio?window.devicePixelRatio:1;return b.setPixelRatio(C),b.setSize(h,_),b}function f({width:h,height:_}){const b=h/_,C=60,E=1,x=100,T=new Ye(C,b,E,x);return T.position.set(0,0,50),T}function u(h,_){for(var b=[],C=2*Math.PI/_,E=0;E<2*Math.PI;E+=C)b.push(new vo(h,{x:Math.cos(E),y:Math.sin(E),z:0}));return b}function m(){for(var h=0;h<c.length;h++)n.remove(c[h].destroy(n))}function g(h){const _=new Wt({color:255}),b=[];b.push(new R(h,-100,0)),b.push(new R(h,100,0));const C=new Qe().setFromPoints(b);return new di(C,_)}function p(h){return[new pi(h,{x:1,y:0,z:0})]}this.moveFrame=function(h){n.remove(a),a=g(h),n.add(a)},this.resetSubspaces=function(h){m(),c=u(n,h)},this.update=function(){const h=e.getElapsedTime();for(let _=1;_<o.length;_++)o[_].update(h);i.render(n,s)},this.onWindowResize=function(){const{width:h,height:_}=r;t.width=h,t.height=_,s.aspect=h/_,s.updateProjectionMatrix(),i.setSize(h,_)}}function Zf(r){const e=new Jn,t={width:r.width,height:r.height},n=l(),i=d(t),s=f(t),o=p(n);new _o(s,i.domElement);var a=g(25);n.add(a);var c=u(n,20);function l(){const h=new Kn;return h.background=null,h}function d({width:h,height:_}){const b=new vn({canvas:r,antialias:!0,alpha:!0}),C=window.devicePixelRatio?window.devicePixelRatio:1;return b.setPixelRatio(C),b.setSize(h,_),b}function f({width:h,height:_}){const b=h/_,C=60,E=1,x=100,T=new Ye(C,b,E,x);return T.position.set(-50,0,0),T.lookAt(0,0,0),T.rotation.y=-Math.PI/2,T}function u(h,_){var b=[];const C=1.618033988749895;for(var E=0;E<_;E++){var x=6.28318*E/C,T=Math.acos(1-2*(E+.5)/_);b.push(new vo(h,{x:Math.cos(x)*Math.sin(T),y:Math.sin(x)*Math.sin(T),z:Math.cos(T)}))}return b}function m(){for(var h=0;h<c.length;h++)n.remove(c[h].destroy(n))}function g(h){const _=new xn(50,50),b=new Zn({color:255,side:kt}),C=new ht(_,b);return C.position.set(0,0,h),C}function p(h){return[new pi(h,{x:0,y:0,z:1}),new pi(h,{x:0,y:1,z:0})]}this.moveFrame=function(h){n.remove(a),a=g(h),n.add(a)},this.resetSubspaces=function(h){m(),c=u(n,h)},this.update=function(){const h=e.getElapsedTime();for(let _=0;_<o.length;_++)o[_].update(h);i.render(n,s)},this.onWindowResize=function(){const{width:h,height:_}=r;t.width=h,t.height=_,s.aspect=h/_,s.updateProjectionMatrix(),i.setSize(h,_)}}const Mo=document.getElementById("transformations-2D-canvas"),Gt=document.getElementById("rotation-2D-matrix").getElementsByClassName("limit-dp"),oi=document.getElementById("reflection-2D-matrix").getElementsByClassName("limit-dp"),li=document.getElementById("scaling-2D-matrix").getElementsByClassName("limit-dp"),cn=document.getElementById("shear-2D-matrix").getElementsByClassName("limit-dp");var si=document.getElementById("rotation-2D-slider"),Ua=document.getElementById("shearX-2D-slider"),Ba=document.getElementById("shearY-2D-slider");const ci=new qf(Mo,Gt,oi,li,cn),yo=document.getElementById("shear-3D-canvas"),So=document.getElementById("shear-3D-cross-section-canvas"),jn=document.getElementById("shear-3D-matrix").getElementsByClassName("limit-dp"),bo=new kf(yo,jn),wo=new Hf(So,jn);var Ga=document.getElementById("shear-yx-3D-slider"),Va=document.getElementById("shear-yz-3D-slider");const $f=document.getElementById("projective-line-canvas"),Qs=new Yf($f),Kf=document.getElementById("projective-plane-canvas"),er=new Zf(Kf);var Bs=document.getElementById("num-subspaces-slider"),Gs=document.getElementById("projective-frame-slider");const Jf=document.getElementById("perspective-2D-canvas"),es=new jf(Jf);Qf();Eo();function Qf(){window.onresize=ip,window.addEventListener("mousedown",ep,!1),window.addEventListener("mousemove",tp,!1),window.addEventListener("mouseup",np,!1),Ga.oninput=function(){jn[6].innerHTML=Ga.value},Va.oninput=function(){jn[7].innerHTML=Va.value},si.oninput=function(){Gt[0].innerHTML=Math.cos(si.value),Gt[1].innerHTML=Math.sin(si.value),Gt[2].innerHTML=-Math.sin(si.value),Gt[3].innerHTML=Math.cos(si.value),ci.onMatInput(Gt,oi,li,cn)},Ua.oninput=function(){cn[2].innerHTML=Ua.value,ci.onMatInput(Gt,oi,li,cn)},Ba.oninput=function(){cn[1].innerHTML=Ba.value,ci.onMatInput(Gt,oi,li,cn)},Bs.oninput=function(){Qs.resetSubspaces(Bs.value),er.resetSubspaces(Bs.value)},Gs.oninput=function(){Qs.moveFrame(Gs.value),er.moveFrame(Gs.value)}}function ep(r){es.onMouseDown(r)}function tp(r){es.onMouseMove(r)}function np(r){es.onMouseUp(r)}function ip(){Vs(yo,bo),Vs(So,wo),Vs(Mo,ci)}function Vs(r,e){r.style.width="100%",r.style.height="100%",r.width=r.offsetWidth,r.height=r.offsetHeight,e.onWindowResize()}function Eo(){requestAnimationFrame(Eo),bo.update(jn),wo.update(jn),ci.update(Gt,oi,li,cn),Qs.update(),er.update(),es.update()}
