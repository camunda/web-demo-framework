const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-embedded-CwEfBsME.css","assets/RuntimeDiagram-ClMkdTD8.js","assets/vendor-react-WnIiAG2f.js","assets/Viewer-Ckpd_gcC.js","assets/MonacoEditor-DP2Qz4Pc.js","assets/MonacoEditor-BRcOEFf8.css","assets/vendor-modeler-DD0QRvpe.js","assets/vendor-design-system-BFW5NSv9.js","assets/vendor-design-system-Ckk03-Xm.css","assets/parser-Cn7g5BiQ.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-BNE07XPL.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var tt=Object.defineProperty;var rt=(e,n,t)=>n in e?tt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var G=(e,n,t)=>rt(e,typeof n!="symbol"?n+"":n,t);import{r as b,j as o,i as it}from"./vendor-react-WnIiAG2f.js";import{B as K,a as re,L as Le,S as ot,b as st,c as at,d as ct,e as lt,A as le,f as de,g as ue,I as $e,C as he,h as be,i as fe,j as ye,k as Me,l as dt,T as ut,m as mt,n as Ce,o as ze,p as pt,q as gt}from"./vendor-design-system-BFW5NSv9.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const ht="modulepreload",bt=function(e){return"/pr-preview/pr-62/"+e},yn={},ie=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){let l=function(s){return Promise.all(s.map(c=>Promise.resolve(c).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));i=l(t.map(s=>{if(s=bt(s),s in yn)return;yn[s]=!0;const c=s.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${h}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":ht,c||(p.as="script"),p.crossOrigin="",p.href=s,m&&p.setAttribute("nonce",m),document.head.appendChild(p),c)return new Promise((g,f)=>{p.addEventListener("load",g),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})}))}function a(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return i.then(l=>{for(const d of l||[])d.status==="rejected"&&a(d.reason);return n().catch(a)})};class qe{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Mn.unregister(this),n}free(){const n=this.__destroy_into_raw();u.__wbg_testengine_free(n,0)}activateJobs(n,t,r,i){let a,l;try{const g=u.__wbindgen_add_to_stack_pointer(-16),f=S(n,u.__wbindgen_export,u.__wbindgen_export2),N=D,T=S(i,u.__wbindgen_export,u.__wbindgen_export2),w=D;u.testengine_activateJobs(g,this.__wbg_ptr,f,N,t,r,T,w);var d=M().getInt32(g+0,!0),m=M().getInt32(g+4,!0),s=M().getInt32(g+8,!0),c=M().getInt32(g+12,!0),h=d,p=m;if(c)throw h=0,p=0,F(s);return a=h,l=p,R(h,p)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(a,l,1)}}advanceTime(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_advanceTime(c,this.__wbg_ptr,n);var i=M().getInt32(c+0,!0),a=M().getInt32(c+4,!0),l=M().getInt32(c+8,!0),d=M().getInt32(c+12,!0),m=i,s=a;if(d)throw m=0,s=0,F(l);return t=m,r=s,R(m,s)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}assignUserTask(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),g=S(n,u.__wbindgen_export,u.__wbindgen_export2),f=D,N=S(t,u.__wbindgen_export,u.__wbindgen_export2),T=D;u.testengine_assignUserTask(p,this.__wbg_ptr,g,f,N,T,r);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),c=l,h=d;if(s)throw c=0,h=0,F(m);return i=c,a=h,R(c,h)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}broadcastSignal(n,t){let r,i;try{const h=u.__wbindgen_add_to_stack_pointer(-16),p=S(n,u.__wbindgen_export,u.__wbindgen_export2),g=D,f=S(t,u.__wbindgen_export,u.__wbindgen_export2),N=D;u.testengine_broadcastSignal(h,this.__wbg_ptr,p,g,f,N);var a=M().getInt32(h+0,!0),l=M().getInt32(h+4,!0),d=M().getInt32(h+8,!0),m=M().getInt32(h+12,!0),s=a,c=l;if(m)throw s=0,c=0,F(d);return r=s,i=c,R(s,c)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}cancelInstance(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16),h=S(n,u.__wbindgen_export,u.__wbindgen_export2),p=D;u.testengine_cancelInstance(c,this.__wbg_ptr,h,p);var i=M().getInt32(c+0,!0),a=M().getInt32(c+4,!0),l=M().getInt32(c+8,!0),d=M().getInt32(c+12,!0),m=i,s=a;if(d)throw m=0,s=0,F(l);return t=m,r=s,R(m,s)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}completeAgentJob(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),g=S(n,u.__wbindgen_export,u.__wbindgen_export2),f=D,N=S(t,u.__wbindgen_export,u.__wbindgen_export2),T=D,w=S(r,u.__wbindgen_export,u.__wbindgen_export2),j=D;u.testengine_completeAgentJob(p,this.__wbg_ptr,g,f,N,T,w,j);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),c=l,h=d;if(s)throw c=0,h=0,F(m);return i=c,a=h,R(c,h)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}completeJob(n,t){let r,i;try{const h=u.__wbindgen_add_to_stack_pointer(-16),p=S(n,u.__wbindgen_export,u.__wbindgen_export2),g=D,f=S(t,u.__wbindgen_export,u.__wbindgen_export2),N=D;u.testengine_completeJob(h,this.__wbg_ptr,p,g,f,N);var a=M().getInt32(h+0,!0),l=M().getInt32(h+4,!0),d=M().getInt32(h+8,!0),m=M().getInt32(h+12,!0),s=a,c=l;if(m)throw s=0,c=0,F(d);return r=s,i=c,R(s,c)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}completeUserTask(n,t){let r,i;try{const h=u.__wbindgen_add_to_stack_pointer(-16),p=S(n,u.__wbindgen_export,u.__wbindgen_export2),g=D,f=S(t,u.__wbindgen_export,u.__wbindgen_export2),N=D;u.testengine_completeUserTask(h,this.__wbg_ptr,p,g,f,N);var a=M().getInt32(h+0,!0),l=M().getInt32(h+4,!0),d=M().getInt32(h+8,!0),m=M().getInt32(h+12,!0),s=a,c=l;if(m)throw s=0,c=0,F(d);return r=s,i=c,R(s,c)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}correlateMessage(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),g=S(n,u.__wbindgen_export,u.__wbindgen_export2),f=D,N=S(t,u.__wbindgen_export,u.__wbindgen_export2),T=D,w=S(r,u.__wbindgen_export,u.__wbindgen_export2),j=D;u.testengine_correlateMessage(p,this.__wbg_ptr,g,f,N,T,w,j);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),c=l,h=d;if(s)throw c=0,h=0,F(m);return i=c,a=h,R(c,h)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}createInstance(n,t){let r,i;try{const h=u.__wbindgen_add_to_stack_pointer(-16),p=S(n,u.__wbindgen_export,u.__wbindgen_export2),g=D,f=S(t,u.__wbindgen_export,u.__wbindgen_export2),N=D;u.testengine_createInstance(h,this.__wbg_ptr,p,g,f,N);var a=M().getInt32(h+0,!0),l=M().getInt32(h+4,!0),d=M().getInt32(h+8,!0),m=M().getInt32(h+12,!0),s=a,c=l;if(m)throw s=0,c=0,F(d);return r=s,i=c,R(s,c)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}deploy(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16),h=S(n,u.__wbindgen_export,u.__wbindgen_export2),p=D;u.testengine_deploy(c,this.__wbg_ptr,h,p);var i=M().getInt32(c+0,!0),a=M().getInt32(c+4,!0),l=M().getInt32(c+8,!0),d=M().getInt32(c+12,!0),m=i,s=a;if(d)throw m=0,s=0,F(l);return t=m,r=s,R(m,s)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}events(){let n,t;try{const s=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_events(s,this.__wbg_ptr);var r=M().getInt32(s+0,!0),i=M().getInt32(s+4,!0),a=M().getInt32(s+8,!0),l=M().getInt32(s+12,!0),d=r,m=i;if(l)throw d=0,m=0,F(a);return n=d,t=m,R(d,m)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(n,t,1)}}failJob(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),g=S(n,u.__wbindgen_export,u.__wbindgen_export2),f=D,N=S(r,u.__wbindgen_export,u.__wbindgen_export2),T=D;u.testengine_failJob(p,this.__wbg_ptr,g,f,t,N,T);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),c=l,h=d;if(s)throw c=0,h=0,F(m);return i=c,a=h,R(c,h)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}modify(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),g=S(n,u.__wbindgen_export,u.__wbindgen_export2),f=D,N=S(t,u.__wbindgen_export,u.__wbindgen_export2),T=D,w=S(r,u.__wbindgen_export,u.__wbindgen_export2),j=D;u.testengine_modify(p,this.__wbg_ptr,g,f,N,T,w,j);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),c=l,h=d;if(s)throw c=0,h=0,F(m);return i=c,a=h,R(c,h)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}constructor(){const n=u.testengine_new();return this.__wbg_ptr=n,Mn.register(this,this.__wbg_ptr,this),this}get now(){return u.testengine_now(this.__wbg_ptr)}reset(){u.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16),h=S(n,u.__wbindgen_export,u.__wbindgen_export2),p=D;u.testengine_resolveIncident(c,this.__wbg_ptr,h,p);var i=M().getInt32(c+0,!0),a=M().getInt32(c+4,!0),l=M().getInt32(c+8,!0),d=M().getInt32(c+12,!0),m=i,s=a;if(d)throw m=0,s=0,F(l);return t=m,r=s,R(m,s)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}setVariables(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),g=S(n,u.__wbindgen_export,u.__wbindgen_export2),f=D,N=S(t,u.__wbindgen_export,u.__wbindgen_export2),T=D;u.testengine_setVariables(p,this.__wbg_ptr,g,f,N,T,r);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),c=l,h=d;if(s)throw c=0,h=0,F(m);return i=c,a=h,R(c,h)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}snapshot(){let n,t;try{const s=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_snapshot(s,this.__wbg_ptr);var r=M().getInt32(s+0,!0),i=M().getInt32(s+4,!0),a=M().getInt32(s+8,!0),l=M().getInt32(s+12,!0),d=r,m=i;if(l)throw d=0,m=0,F(a);return n=d,t=m,R(d,m)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(n,t,1)}}throwError(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),g=S(n,u.__wbindgen_export,u.__wbindgen_export2),f=D,N=S(t,u.__wbindgen_export,u.__wbindgen_export2),T=D,w=S(r,u.__wbindgen_export,u.__wbindgen_export2),j=D;u.testengine_throwError(p,this.__wbg_ptr,g,f,N,T,w,j);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),c=l,h=d;if(s)throw c=0,h=0,F(m);return i=c,a=h,R(c,h)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}tickNow(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_tickNow(c,this.__wbg_ptr,n);var i=M().getInt32(c+0,!0),a=M().getInt32(c+4,!0),l=M().getInt32(c+8,!0),d=M().getInt32(c+12,!0),m=i,s=a;if(d)throw m=0,s=0,F(l);return t=m,r=s,R(m,s)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}unassignUserTask(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16),h=S(n,u.__wbindgen_export,u.__wbindgen_export2),p=D;u.testengine_unassignUserTask(c,this.__wbg_ptr,h,p);var i=M().getInt32(c+0,!0),a=M().getInt32(c+4,!0),l=M().getInt32(c+8,!0),d=M().getInt32(c+12,!0),m=i,s=a;if(d)throw m=0,s=0,F(l);return t=m,r=s,R(m,s)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}updateRetries(n,t){let r,i;try{const h=u.__wbindgen_add_to_stack_pointer(-16),p=S(n,u.__wbindgen_export,u.__wbindgen_export2),g=D;u.testengine_updateRetries(h,this.__wbg_ptr,p,g,t);var a=M().getInt32(h+0,!0),l=M().getInt32(h+4,!0),d=M().getInt32(h+8,!0),m=M().getInt32(h+12,!0),s=a,c=l;if(m)throw s=0,c=0,F(d);return r=s,i=c,R(s,c)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}updateUserTask(n,t){let r,i;try{const h=u.__wbindgen_add_to_stack_pointer(-16),p=S(n,u.__wbindgen_export,u.__wbindgen_export2),g=D,f=S(t,u.__wbindgen_export,u.__wbindgen_export2),N=D;u.testengine_updateUserTask(h,this.__wbg_ptr,p,g,f,N);var a=M().getInt32(h+0,!0),l=M().getInt32(h+4,!0),d=M().getInt32(h+8,!0),m=M().getInt32(h+12,!0),s=a,c=l;if(m)throw s=0,c=0,F(d);return r=s,i=c,R(s,c)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}}Symbol.dispose&&(qe.prototype[Symbol.dispose]=qe.prototype.free);function ft(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(n,t){throw new Error(R(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const r=R(n,t);return yt(r)},__wbindgen_object_drop_ref:function(n){F(n)}}}}const Mn=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>u.__wbg_testengine_free(e,1));function yt(e){ke===me.length&&me.push(me.length+1);const n=ke;return ke=me[n],me[n]=e,n}function Mt(e){e<1028||(me[e]=ke,ke=e)}let xe=null;function M(){return(xe===null||xe.buffer.detached===!0||xe.buffer.detached===void 0&&xe.buffer!==u.memory.buffer)&&(xe=new DataView(u.memory.buffer)),xe}function R(e,n){return xt(e>>>0,n)}let Te=null;function Re(){return(Te===null||Te.byteLength===0)&&(Te=new Uint8Array(u.memory.buffer)),Te}function wt(e){return me[e]}let me=new Array(1024).fill(void 0);me.push(void 0,null,!0,!1);let ke=me.length;function S(e,n,t){if(t===void 0){const d=je.encode(e),m=n(d.length,1)>>>0;return Re().subarray(m,m+d.length).set(d),D=d.length,m}let r=e.length,i=n(r,1)>>>0;const a=Re();let l=0;for(;l<r;l++){const d=e.charCodeAt(l);if(d>127)break;a[i+l]=d}if(l!==r){l!==0&&(e=e.slice(l)),i=t(i,r,r=l+e.length*3,1)>>>0;const d=Re().subarray(i+l,i+r),m=je.encodeInto(e,d);l+=m.written,i=t(i,r,l,1)>>>0}return D=l,i}function F(e){const n=wt(e);return Mt(e),n}let Ue=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ue.decode();const _t=2146435072;let Ge=0;function xt(e,n){return Ge+=n,Ge>=_t&&(Ue=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Ue.decode(),Ge=n),Ue.decode(Re().subarray(e,e+n))}const je=new TextEncoder;"encodeInto"in je||(je.encodeInto=function(e,n){const t=je.encode(e);return n.set(t),{read:e.length,written:t.length}});let D=0,u;function Nt(e,n){return u=e.exports,xe=null,Te=null,u}async function vt(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(i){if(e.ok&&t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}else{const r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function t(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function It(e){if(u!==void 0)return u;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/pr-preview/pr-62/assets/nanobpmn_engine_bg-CIG0GEWz.wasm",import.meta.url));const n=ft();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await vt(await e,n);return Nt(t)}let Pe=null;function Tt(e){return Pe||(Pe=It(e===void 0?void 0:{module_or_path:e}).then(()=>{}).catch(n=>{throw Pe=null,n})),Pe}function Q(e){return JSON.parse(e)}class kt{constructor(n){G(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return Q(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,r,i){return JSON.parse(this.engine.activateJobs(n,t,r,i))}completeJob(n,t){return Q(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:r,...i}=t??{};return Q(this.engine.completeAgentJob(n,JSON.stringify(r??{}),JSON.stringify(i??{})))}failJob(n,t,r){return Q(this.engine.failJob(n,t,r))}throwError(n,t,r){return Q(this.engine.throwError(n,t,r))}updateRetries(n,t){return Q(this.engine.updateRetries(n,t))}resolveIncident(n){return Q(this.engine.resolveIncident(n))}setVariables(n,t,r){return Q(this.engine.setVariables(n,t||"{}",r))}broadcastSignal(n,t){return Q(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return Q(this.engine.cancelInstance(n))}modify(n,t,r){return Q(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(r??[])))}completeUserTask(n,t){return Q(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,r){return Q(this.engine.assignUserTask(n,t,r))}unassignUserTask(n){return Q(this.engine.unassignUserTask(n))}updateUserTask(n,t){return Q(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,r){return Q(this.engine.correlateMessage(n,t,r||"{}"))}advanceTime(n){return Q(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return Q(this.engine.snapshot())}free(){this.engine.free()}}async function jt(e){return await Tt(e==null?void 0:e.wasm),new kt(new qe)}class Pn extends Error{constructor(t,r){super(t);G(this,"retries");this.name="JobFailure",this.retries=r==null?void 0:r.retries}}function On(e,n=[]){if(e.instances.filter(i=>!i.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const r=new Set(n);return e.jobs.some(i=>!r.has(i.jobType))?"unhandledJobs":e.userTasks.some(i=>i.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function Et(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(r=>r.jobType))].filter(r=>!t.has(r)).sort()}async function Dt(e,n,t){let r;try{const i=await n(t);r=JSON.stringify(i??{})}catch(i){const a=i instanceof Pn&&i.retries!==void 0?i.retries:Math.max(0,t.retries-1),l=i instanceof Error?i.message:String(i);e.failJob(t.key,a,l);return}e.completeJob(t.key,r)}async function St(e,n,t){let r;try{r=await n(t),JSON.stringify(r)}catch(i){const a=i instanceof Pn&&i.retries!==void 0?i.retries:Math.max(0,t.retries-1),l=i instanceof Error?i.message:String(i);e.failJob(t.key,a,l);return}e.completeAgentJob(t.key,r)}async function Bn(e,n,t={}){const r=t.maxJobsPerActivation??10,i=t.lockTimeoutMs??3e4,a=t.worker??"bojtos",l=t.agents??{};for(const p of Object.keys(l))if(p in n)throw new Error(`dispatchRound: job type "${p}" is registered as both a worker and an agent — register it as exactly one`);const d=[];for(const[p,g]of Object.entries(n))for(const f of e.activateJobs(p,r,i,a))d.push({handler:g,job:f});const m=[];for(const[p,g]of Object.entries(l))for(const f of e.activateJobs(p,r,i,a))m.push({handler:g,job:f});for(const{handler:p,job:g}of d)await Dt(e,p,g);for(const{handler:p,job:g}of m)await St(e,p,g);const s=e.snapshot(),c=d.length+m.length;if(c>0)return{snapshot:s,handled:c};const h=[...Object.keys(n),...Object.keys(l)];return{snapshot:s,handled:c,reason:On(s,h),unhandled:Et(s,h)}}async function At(e,n,t={}){const r=t.maxRounds??1e3,i=t.advanceTimers,a=i!=null&&typeof i=="object"?i.maxTotalMs:1/0,l=i!=null&&i!==!1;let d=0,m=0,s=0;for(;;){if(m>=r)throw new Error(`dispatchWorkers exceeded maxRounds (${r}) — a handler may be creating work without end`);m++;const c=await Bn(e,n,t);if(d+=c.handled,!(c.handled>0)){if(l&&c.reason==="timers"){const h=c.snapshot.timers.reduce((g,f)=>Math.min(g,f.dueInMs),1/0),p=Math.max(h,1);if(Number.isFinite(p)&&s+p<=a){e.advanceTime(p),s+=p;continue}}return{snapshot:c.snapshot,handled:d,rounds:m,reason:c.reason??On(c.snapshot,[...Object.keys(n),...Object.keys(t.agents??{})]),unhandled:c.unhandled??[],advancedMs:s}}}}function Lt(e){return e.rows!==void 0}function Ct(e){const n=[];let t=null;for(const r of e)r.turn!==void 0?t&&t.turn===r.turn?t.rows.push(r):(t={turn:r.turn,rows:[r]},n.push(t)):(t=null,n.push(r));return n}function zt(e){return Array.isArray(e)?JSON.stringify(e):e}function Pt(e){return Array.isArray(e)?e:[e]}function Ot(e,n){return n!==void 0&&n>=0&&e.length>n?e.slice(e.length-n):e}function Bt({bpmn:e,wasm:n,maxEvents:t}){const r=b.useRef(null),[i,a]=b.useState("loading"),[l,d]=b.useState(null),[m,s]=b.useState([]),[c,h]=b.useState(null),[p,g]=b.useState([]),f=b.useRef(n);f.current=n;const N=zt(e),T=b.useRef(e);T.current=e;const w=b.useRef(t);w.current=t;const j=b.useCallback(I=>Ot(I.events(),w.current),[]),z=b.useCallback(I=>{const v=Pt(T.current),_=[];for(const L of v)_.push(...I.deploy(L).processIds);s(_),h(null),g([]),d(null)},[N]);b.useEffect(()=>{let I=!1;return a("loading"),s([]),h(null),g([]),d(null),jt({wasm:f.current}).then(v=>{if(I){v.free();return}try{z(v)}catch(_){v.free(),d(String(_)),a("error");return}r.current=v,a("ready")}).catch(v=>{I||(d(String(v)),a("error"))}),()=>{var v;I=!0,(v=r.current)==null||v.free(),r.current=null}},[z]);const k=b.useCallback(I=>{const v=r.current;if(!v)return null;try{const _=I(v);return h(_),g(j(v)),d(null),_}catch(_){return d(String(_)),null}},[]),J=b.useCallback((I,v)=>k(_=>_.createInstance(I,v)),[k]),X=b.useCallback((I,v)=>k(_=>_.completeJob(I,v)),[k]),ee=b.useCallback((I,v)=>k(_=>_.completeAgentJob(I,v)),[k]),ce=b.useCallback((I,v,_)=>k(L=>L.failJob(I,v,_)),[k]),ne=b.useCallback(I=>k(v=>v.advanceTime(I)),[k]),Y=b.useCallback((I,v,_)=>k(L=>L.correlateMessage(I,v,_)),[k]),P=b.useCallback((I,v,_)=>k(L=>L.throwError(I,v,_)),[k]),te=b.useCallback((I,v)=>k(_=>_.updateRetries(I,v)),[k]),pe=b.useCallback(I=>k(v=>v.resolveIncident(I)),[k]),A=b.useCallback((I,v,_)=>k(L=>L.setVariables(I,v,_)),[k]),V=b.useCallback((I,v)=>k(_=>_.broadcastSignal(I,v)),[k]),oe=b.useCallback(I=>k(v=>v.cancelInstance(I)),[k]),O=b.useCallback((I,v,_)=>k(L=>L.modify(I,v,_)),[k]),U=b.useCallback((I,v)=>k(_=>_.completeUserTask(I,v)),[k]),H=b.useCallback((I,v,_)=>k(L=>L.assignUserTask(I,v,_)),[k]),ge=b.useCallback(I=>k(v=>v.unassignUserTask(I)),[k]),se=b.useCallback((I,v)=>k(_=>_.updateUserTask(I,v)),[k]),Qe=b.useCallback(async(I,v)=>{const _=r.current;if(!_)return null;try{const{snapshot:L}=await At(_,I,v);return r.current!==_?null:(h(L),g(j(_)),d(null),L)}catch(L){return r.current!==_||(h(_.snapshot()),g(j(_)),d(String(L))),null}},[]),Ie=b.useCallback(async(I,v)=>{const _=r.current;if(!_)return null;try{const L=await Bn(_,I,v);return r.current!==_?null:(h(L.snapshot),g(j(_)),d(null),L)}catch(L){return r.current!==_||(h(_.snapshot()),g(j(_)),d(String(L))),null}},[]),Ee=b.useCallback(()=>{const I=r.current;if(I)try{I.reset(),z(I)}catch(v){d(String(v))}},[z]);return{phase:i,error:l,processIds:m,snapshot:c,events:p,createInstance:J,completeJob:X,completeAgentJob:ee,failJob:ce,advanceTime:ne,correlateMessage:Y,throwError:P,updateRetries:te,resolveIncident:pe,setVariables:A,broadcastSignal:V,cancelInstance:oe,modify:O,completeUserTask:U,assignUserTask:H,unassignUserTask:ge,updateUserTask:se,runWorkers:Qe,stepWorkers:Ie,reset:Ee}}function Ke(e,n){if(e===void 0)return"undefined";try{return JSON.stringify(e,(t,r)=>typeof r=="bigint"?r.toString():r,n)}catch{return"[unserializable value]"}}function Rt({activation:e,result:n,labelFor:t}){const r=e.elementId??"";return o.jsxs("div",{className:"timeline-tool",children:[o.jsxs("div",{className:"timeline-tool-head",children:[o.jsx("span",{className:"timeline-badge timeline-badge-info",children:"tool"}),o.jsx("strong",{children:t(r)||r}),o.jsx("code",{children:r})]}),e.args!==void 0&&Object.keys(e.args).length>0&&o.jsxs("div",{className:"timeline-kv",children:[o.jsx("span",{className:"timeline-kv-label",children:"arguments"}),o.jsx("code",{children:Ke(e.args)})]}),o.jsxs("div",{className:"timeline-kv",children:[o.jsx("span",{className:"timeline-kv-label",children:"returned"}),o.jsx("code",{children:n?Ke(n.result):"— waiting for the job to complete —"})]})]})}function Ut({group:e,labelFor:n}){const t=e.rows.find(s=>s.kind==="llm"),r=e.rows.filter(s=>s.kind==="agent"&&s.elementId),i=e.rows.filter(s=>s.kind==="vars"&&s.elementId),a=e.rows.filter(s=>s.kind==="agent"&&!s.elementId),l=e.rows.filter(s=>s.kind==="error"),d=new Set(r.map(s=>s.elementId)),m=e.rows.filter(s=>s.kind==="tool"||s.kind==="vars"&&s.elementId&&!d.has(s.elementId)).sort((s,c)=>s.id-c.id);return o.jsxs("div",{className:"timeline-turn",children:[o.jsxs("div",{className:"timeline-turn-head",children:[o.jsxs("span",{className:`timeline-badge ${t!=null&&t.pending?"timeline-badge-warning":"timeline-badge-neutral"}`,children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&o.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&o.jsx("blockquote",{className:"timeline-reply",children:t.text}),a.map(s=>o.jsx("div",{className:"timeline-note",children:s.text},s.key??s.id)),r.map(s=>o.jsx(Rt,{activation:s,result:i.find(c=>c.elementId===s.elementId),labelFor:n},s.key??s.id)),m.map(s=>o.jsxs("div",{className:`log-line log-${s.kind}`,children:[s.pending?"⏳ ":"",s.text]},s.key??s.id)),l.map(s=>o.jsxs("div",{className:"timeline-error",children:["⚠ ",s.text]},s.id))]})}function Ft({rows:e,elementStats:n=[],incidents:t=[],labelFor:r=m=>m,title:i="Activity",description:a="Agent turns, model replies, and tool calls — read top to bottom as a story.",emptyText:l="Press Run to start.",className:d}){const m=b.useMemo(()=>Ct(e),[e]),[s,c]=b.useState(!1),h=b.useRef(null);b.useEffect(()=>{const g=h.current;g&&(g.scrollTop=g.scrollHeight)},[m]);const p=()=>{var N;const g={log:e.map(({id:T,...w})=>w),elementStats:n,incidents:t},f=Ke(g,2);typeof navigator<"u"&&((N=navigator.clipboard)!=null&&N.writeText)&&navigator.clipboard.writeText(f).then(()=>{c(!0),setTimeout(()=>c(!1),1500)}).catch(()=>{})};return o.jsxs("div",{className:d?`timeline-panel ${d}`:"timeline-panel",children:[o.jsxs("div",{className:"timeline-header",children:[o.jsx("div",{className:"timeline-title",children:i}),a&&o.jsx("div",{className:"timeline-description",children:a})]}),o.jsx("div",{className:"timeline-toolbar",children:o.jsx("button",{type:"button",onClick:p,children:s?"Copied!":"Copy run as JSON"})}),o.jsx("div",{className:"timeline",ref:h,children:m.length===0?o.jsx("div",{className:"log-empty",children:l}):m.map(g=>Lt(g)?o.jsx(Ut,{group:g,labelFor:r},`turn-${g.turn}-${g.rows[0].key??g.rows[0].id}`):o.jsxs("div",{className:`log-line log-${g.kind}`,children:[g.pending?"⏳ ":"",g.text]},g.key??g.id))}),(n.length>0||t.length>0)&&o.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&o.jsxs("div",{className:"timeline-stats",children:[o.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),o.jsx("ul",{children:n.filter(g=>g.completed>0||(g.active??0)>0).map(g=>o.jsxs("li",{children:[o.jsx("code",{children:r(g.elementId)||g.elementId})," ","completed ",g.completed,g.active?`, ${g.active} active`:""]},g.elementId))})]}),t.length>0&&o.jsxs("div",{className:"timeline-incidents",children:[o.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),o.jsx("ul",{children:t.map((g,f)=>o.jsxs("li",{children:[o.jsx("code",{children:r(g.elementId)||g.elementId})," —"," ",g.reason]},`${g.elementId}-${f}`))})]})]})]})}const Yt="io.camunda.agenticai:aiagent",Ne="http://www.omg.org/spec/BPMN/20100524/MODEL",Qt="http://camunda.org/schema/zeebe/1.0";function Xe(e,n){return Array.from(e.getElementsByTagNameNS(Qt,n))}function Rn(e,n){return Xe(e,n).filter(t=>$t(t)===e)}function $t(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Ne&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function on(e){const n=Rn(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function Gt(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Ne&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function wn(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(r=>r.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function Jt(e){const n=[],t=r=>{for(const i of Array.from(r.attributes))n.push(i.value);for(const i of Array.from(r.children))t(i)};return t(e),n.join(`
`)}function Ht(e){const n=Jt(e),t=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,r=[],i=new Set;for(const a of n.matchAll(t)){const l=a[1];i.has(l)||(i.add(l),r.push({name:l,description:(a[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:a[3]??"string"}))}return r}function Vt(e){const n={};for(const t of Rn(e,"input")){const r=t.getAttribute("target");r&&(n[r]=t.getAttribute("source")??"")}return n}function Zt(e){return Array.from(e.getElementsByTagNameNS(Ne,"adHocSubProcess")).filter(n=>(on(n)??"").startsWith(Yt))}function Wt(e,n){const t=Vt(e),r=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:on(e),systemPrompt:wn(t["data.systemPrompt.prompt"]),userPrompt:wn(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(r)&&r>0?r:10,tools:n}}function qt(e,n){var h;const t=e.getAttribute("id")??"",r=e.getAttribute("name")??t,i=Zt(e);i.length>1&&n.push({severity:"warning",elementId:i.map(p=>p.getAttribute("id")).join(", "),message:`Process "${r}" hosts ${i.length} AI Agent sub-processes (${i.map(p=>p.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const a=[],l=new Map(i.map(p=>[p,[]]));for(const p of Array.from(e.getElementsByTagName("*"))){if(p.namespaceURI!==Ne||i.includes(p))continue;const g=on(p),f=p.getAttribute("id");if(!g||!f)continue;const N=i.filter(j=>j.contains(p)),T=N.find(j=>N.every(z=>z===j||z.contains(j))),w={elementId:f,label:p.getAttribute("name")??f,jobType:g,documentation:Gt(p),isTool:T!=null};a.push(w),T&&l.get(T).push({elementId:f,label:w.label,jobType:g,documentation:w.documentation,args:Ht(p)})}const d=i.map(p=>Wt(p,l.get(p))),m=Array.from(e.getElementsByTagNameNS(Ne,"userTask")).map(p=>{var g;return{elementId:p.getAttribute("id")??"",label:p.getAttribute("name")??p.getAttribute("id")??"",formId:((g=Xe(p,"formDefinition")[0])==null?void 0:g.getAttribute("formId"))??void 0}}),s=e.getElementsByTagNameNS(Ne,"startEvent")[0],c=s?((h=Xe(s,"formDefinition")[0])==null?void 0:h.getAttribute("formId"))??void 0:void 0;return{processId:t,processName:r,tasks:a,agents:d,userTasks:m,startFormId:c}}function Kt(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),r=t.getElementsByTagName("parsererror")[0];if(r)throw new Error(`Invalid BPMN XML: ${r.textContent}`);const i=Array.from(t.getElementsByTagNameNS(Ne,"process"));if(i.length===0)throw new Error("No <bpmn:process> in the diagram.");const a=[],l=i.map(m=>qt(m,a));let d=n.processId?l.find(m=>m.processId===n.processId):void 0;return n.processId&&!d&&a.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${l[0].processId}".`}),d??(d=l[0]),l.length>1&&a.push({severity:"warning",message:`Diagram has ${l.length} <bpmn:process> elements (${l.map(m=>m.processId).join(", ")}); using "${d.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:l,diagnostics:a,processId:d.processId,processName:d.processName,tasks:d.tasks,agent:d.agents[0]??null,agents:l.flatMap(m=>m.agents),userTasks:d.userTasks,startFormId:d.startFormId}}function Xt(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
    "use strict";

    function post(message) {
      parent.postMessage(message, "*");
    }

    function textOf(variables, key, fallback) {
      var v = variables ? variables[key] : undefined;
      if (typeof v === "string") return v;
      return v == null ? (fallback === undefined ? "" : fallback) : String(v);
    }

    function numOf(variables, key, fallback) {
      var v = variables ? variables[key] : undefined;
      var n = typeof v === "number" ? v : Number(v);
      return Number.isFinite(n) ? n : (fallback === undefined ? 0 : fallback);
    }

    function sleep(ms) {
      return new Promise(function (resolve) { setTimeout(resolve, ms); });
    }

    function compile(source, what) {
      // Deliberately still new Function(): the isolation here comes from the
      // opaque-origin iframe boundary, not from re-implementing a JS sandbox.
      var factory = new Function('"use strict"; return (' + source + ');');
      var fn = factory();
      if (typeof fn !== "function") throw new Error(what + " must evaluate to a function.");
      return fn;
    }

    function helpersFor(job, id) {
      return {
        sleep: sleep,
        trace: function (text) { post({ kind: "trace", id: id, text: String(text) }); },
        text: function (key, fallback) { return textOf(job.variables, key, fallback); },
        num: function (key, fallback) { return numOf(job.variables, key, fallback); },
      };
    }

    async function handle(msg) {
      try {
        if (msg.kind === "run-handler") {
          var handler = compile(msg.source, "Handler code");
          var out = await handler(msg.job, helpersFor(msg.job, msg.id));
          post({ kind: "result", id: msg.id, value: out === undefined ? undefined : out });
        } else if (msg.kind === "run-agent") {
          var agent = compile(msg.source, "Agent code");
          var result = await agent(msg.job);
          post({ kind: "result", id: msg.id, value: result });
        }
      } catch (e) {
        post({ kind: "error", id: msg.id, message: e && e.message ? e.message : String(e) });
      }
    }

    window.addEventListener("message", function (event) {
      var msg = event.data;
      if (!msg || (msg.kind !== "run-handler" && msg.kind !== "run-agent")) return;
      handle(msg);
    });

    post({ kind: "ready" });
  <\/script></body></html>`}function Un(e,n={}){const{timeoutMs:t=5e3,onTrace:r}=n,i=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((a,l)=>{const d=document.createElement("iframe");d.setAttribute("sandbox","allow-scripts"),d.style.display="none",d.setAttribute("aria-hidden","true");let m=!1,s;const c=()=>{s&&clearTimeout(s),window.removeEventListener("message",p),d.remove()},h=g=>{m||(m=!0,c(),g())};function p(g){var N;if(g.source!==d.contentWindow)return;const f=g.data;if(!(!f||typeof f!="object")){if(f.kind==="ready"){const T=e.job,w=e.kind==="run-handler"?{kind:"run-handler",id:i,source:e.source,job:T}:{kind:"run-agent",id:i,source:e.source,job:T};(N=d.contentWindow)==null||N.postMessage(w,"*");return}"id"in f&&f.id!==i||(f.kind==="trace"?r==null||r(f.text):f.kind==="result"?h(()=>a(f.value)):f.kind==="error"&&h(()=>l(new Error(f.message))))}}window.addEventListener("message",p),s=setTimeout(()=>{h(()=>l(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),d.srcdoc=Xt(),document.body.appendChild(d)})}function Fn(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function er(e,n,t){return Un({kind:"run-handler",source:e,job:Fn(n)},{onTrace:t.trace})}function nr(e,n){return Un({kind:"run-agent",source:e,job:Fn(n)})}function Yn(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function tr(e){return Yn(e,"Handler code"),(n,t)=>er(e,n,t)}function rr(e){return Yn(e,"Agent code"),n=>nr(e,n)}function ir(e,n,t){return{sleep:r=>new Promise(i=>setTimeout(i,r)),trace:r=>n({kind:"tool",text:`   ${r}`,elementId:e.elementId,turn:t}),text:(r,i="")=>{const a=e.variables[r];return typeof a=="string"?a:a==null?i:String(a)},num:(r,i=0)=>{const a=e.variables[r],l=typeof a=="number"?a:Number(a);return Number.isFinite(l)?l:i}}}function or(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function sr(e,n,t,r){const i={},a=e.processes.flatMap(d=>d.tasks),l=new Map(a.map(d=>[d.elementId,d.label]));for(const d of a)i[d.jobType]||(i[d.jobType]=async m=>{const s=n[m.elementId];if(!s)throw new Error(`No handler registered for ${m.elementId} (job type ${m.type})`);const c=l.get(m.elementId)??m.elementId,h=r==null?void 0:r.current;t({kind:"tool",text:`▶ ${c}`,elementId:m.elementId,turn:h});const p=await s(m,ir(m,t,h));return t({kind:"vars",text:`  ↳ ${or(p)}`,elementId:m.elementId,result:p,turn:h}),p});return i}const ar=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function Fe(...e){const n=Object.create(null);for(const t of e)if(t)for(const r of Object.keys(t))n[r]=t[r];return n}function cr(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function Qn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lr(e){return Qn(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function dr(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ur(e){return JSON.stringify(e).slice(1,-1)}function mr(e,n){const t=e.lastIndexOf("<",n),r=e.lastIndexOf(">",n);if(t<=r)return"text";const i=e.slice(t,n);if((i.match(/"/g)??[]).length%2===0)return"text";const l=i.lastIndexOf('"');return(i.slice(l+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function pr(e,n,t="xml"){const r=[],i=new Set;return{result:e.replace(ar,(l,d,m)=>{const s=d.trim();if(!Object.prototype.hasOwnProperty.call(n,s))return i.has(s)||(i.add(s),r.push(s)),l;const c=n[s];if(t==="json")return ur(c);const h=mr(e,m);return h==="feel-literal"?dr(c):h==="attribute"?lr(c):Qn(c)}),unresolved:r}}function gr(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function hr(e,n={},t=e.bpmn,r={}){const i=[],a=Fe(e.templates,r),{result:l,unresolved:d}=pr(t,a,"xml");for(const w of d)i.push({severity:"warning",message:`Template placeholder "{{${w}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let m;try{m=Kt(l)}catch(w){return i.push({severity:"error",message:w instanceof Error?w.message:String(w)}),{resolvedBpmn:l,model:gr(),handlers:{},forms:{},diagnostics:i,hasErrors:!0}}i.push(...m.diagnostics);const s=m.processes.flatMap(w=>w.tasks),c=new Map(e.handlers.map(w=>[w.elementId,w.source])),h={};for(const w of s){const j=n[w.elementId]??c.get(w.elementId);if(j===void 0){i.push({severity:"error",elementId:w.elementId,jobType:w.jobType,message:`No handler for "${w.label}" (${w.elementId}, job type "${w.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{h[w.elementId]=tr(j)}catch(z){i.push({severity:"error",elementId:w.elementId,jobType:w.jobType,message:`"${w.label}" (${w.elementId}): handler code didn't compile — ${z instanceof Error?z.message:String(z)}`})}}const p=new Set(s.map(w=>w.elementId)),g=new Set([...c.keys(),...Object.keys(n)]);for(const w of g)p.has(w)||i.push({severity:"error",elementId:w,message:`Handler "${w}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const f={},N=e.forms??{},T=(w,j)=>{if(!w)return;const z=N[w];z?f[w]=z:i.push({severity:"error",formId:w,message:`${j} references form "${w}", which has no matching schema.`})};for(const w of m.processes){T(w.startFormId,`The start event of process "${w.processName}"`);for(const j of w.userTasks)T(j.formId,`User task "${j.label}" (${j.elementId})`)}return{resolvedBpmn:l,model:m,handlers:h,forms:f,diagnostics:i,hasErrors:i.some(w=>w.severity==="error")}}function br(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let r=n;r<e.length;r++)if(e[r]==="{")t++;else if(e[r]==="}"&&(t--,t===0))try{const i=JSON.parse(e.slice(n,r+1));return typeof i=="object"&&i!==null&&!Array.isArray(i)?i:null}catch{return null}return null}function en(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function _n(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function xn(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:_n(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,r=Array.isArray(t)?t:Object.values(e).find(a=>Array.isArray(a))??[],i=[];for(const a of r)if(typeof a=="string")a.trim()&&i.push({name:a.trim(),args:{}});else if(a&&typeof a=="object"){const l=a,d=l.name??l.tool??l.id??l.function;typeof d=="string"&&d.trim()&&i.push({name:d.trim(),args:_n(l)})}return i}function fr(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function Nn(e){const n=e.args.length?e.args.map(r=>`      ${r.name} (${r.type}) — ${r.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function yr(e,n,t){const r=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",i=t[0]??e.tools[0];if(t.length===0)return`${r}

Every tool has already run. Reply with JSON only — no prose, no explanation, no
markdown fence — exactly:

{"done": true}`;const a=i!=null&&i.args.length?`{${i.args.map(l=>`"${l.name}": "…"`).join(", ")}}`:"{}";return n?`${r}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${t.map(Nn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tools": [{"tool": "${(i==null?void 0:i.elementId)??"ToolName"}", "arguments": ${a}}], "done": false}

List one entry per tool you're calling this turn (often just one). Each
"tool" value must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tools.`:`${r}

You drive the process by calling exactly one tool at a time. The tool names you
may use, one per block:

${t.map(Nn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(i==null?void 0:i.elementId)??"ToolName"}", "arguments": ${a}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function Mr(e,n,t,r,i=[],a=[],l=!1){const d=e.userPrompt||"Carry out your task.",m=Object.entries(n).filter(([,c])=>typeof c=="string"&&c.trim().length>0).map(([c,h])=>`  ${c}: ${String(h)}`),s=[d,m.length?`Case data:
${m.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return s.push(t.length?`${l?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),s.push(r.length?`Tools still available:
${r.map(c=>`  ${c.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),a.length&&s.push(`Your last reply was rejected: ${a.join("; ")}. Do not repeat it.`),i.length&&s.push(`You reported that you are done, but ${i.join(" and ")} ${i.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${i.length===1?"it":"them"} now.`),s.push("Which tool should run next? Reply with JSON only."),s.join(`

`)}async function wr(e,n,t,r,i,a){let l="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:a});const d=await e(r,i,m=>{l+=m,n({kind:"llm",text:`${en(l)} ▍`,key:t,pending:!0,turn:a})});return n({kind:"llm",text:en(d||l)||"(empty reply)",key:t,pending:!1,turn:a}),d}function _r(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function xr(e,n,t){const r={},i=new Map,a=new Map;for(const{tool:l,args:d}of e){const m={};for(const s of l.args){const c=d[s.name];if(!(c!=null&&c!=="")){n({kind:"error",text:`🤖 ${l.elementId}: model supplied no value for "${s.name}"`,turn:t,elementId:l.elementId});continue}const p=i.get(s.name);if(p!==void 0&&p!==l.elementId){n({kind:"error",text:`🤖 argument name collision on "${s.name}": both ${p} and ${l.elementId} declare it — ${p} already claimed it this turn, ${l.elementId}'s value is dropped`,turn:t,elementId:l.elementId});continue}const g=_r(s.type,c);if(!g.ok){n({kind:"error",text:`🤖 ${l.elementId}: "${s.name}" is declared as ${s.type} but the model supplied ${JSON.stringify(c)} — rejected, not passed through`,turn:t,elementId:l.elementId});continue}r[s.name]=g.value,m[s.name]=g.value,i.set(s.name,l.elementId)}a.set(l.elementId,m)}return{variablesOut:r,forHistory:a}}function Nr(e,n,t,r={}){const{maxNewTokens:i=384,allowRepeats:a=!1,allowMultiToolTurns:l=!1,turnRef:d,requiredTools:m=[],maxEarlyDoneNudges:s=1}=r;let c=0;const h=new Set,p=[];let g=0,f=[],N=[];return async T=>{const w=T.variables,j=w.toolCallResult;for(j!==void 0&&p.length&&(p[p.length-1]=`${p[p.length-1]} → ${en(JSON.stringify(j),160)}`);;){const k=await z();if(k)return k}async function z(){if(c+=1,d&&(d.current=c),c>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:c}),{completionConditionFulfilled:!0};const k=a?e.tools:e.tools.filter(A=>!h.has(A.elementId)),J=[{role:"system",content:yr(e,l,k)},{role:"user",content:Mr(e,w,p,k,f,N,a)}];f=[],N=[];let X;try{X=await wr(n,t,`llm-turn-${c}`,J,i,c)}catch(A){return t({kind:"error",text:`LLM call failed: ${A instanceof Error?A.message:String(A)} — completing the agent.`,turn:c}),{completionConditionFulfilled:!0}}const ee=br(X);if(fr(ee)&&xn(ee).length===0){const A=m.filter(V=>!h.has(V));return A.length&&g<s?(g+=1,f=A,t({kind:"agent",text:`🤖 model says it is done, but ${A.join(", ")} hasn't run — asking once more`,turn:c}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:c}),{completionConditionFulfilled:!0})}const ce=xn(ee);if(ce.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:c}),N=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const ne=[],Y=[],P=[];for(const A of ce){const V=e.tools.find(oe=>oe.elementId===A.name);if(!V){Y.push(A.name);continue}if(!a&&h.has(V.elementId)){P.push(V.elementId);continue}ne.push({tool:V,args:A.args})}if(Y.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${Y.join(", ")} — nothing activated`,turn:c}),P.length&&t({kind:"error",text:`🤖 model asked to re-run ${P.join(", ")} — skipped (already run)`,turn:c}),ne.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:c}),N=[...Y.length?[`${Y.join(", ")} ${Y.length===1?"is":"are"} not a real tool`]:[],...P.length?[`${P.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:te,forHistory:pe}=xr(ne,t,c);for(const{tool:A}of ne)h.add(A.elementId),p.push(`- ${A.elementId}(${JSON.stringify(pe.get(A.elementId))})`);for(const{tool:A}of ne)t({kind:"agent",text:`🤖 calling ${A.elementId}`,turn:c,elementId:A.elementId,args:pe.get(A.elementId)??{}});return{activateElements:ne.map(A=>({elementId:A.tool.elementId})),variables:te}}}}function vr(e,n,t,r={}){const i=new Map(e.map(a=>[a.elementId,Nr(a,n,t,r)]));return async a=>{const l=i.get(a.elementId);if(!l)throw new Error(`No agent host registered for "${a.elementId}"`);return l(a)}}const Ir=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function $n(e){return nn.get(e)??{}}const nn=new Map;async function Tr(){if(nn.size>0)return;const{prebuiltAppConfig:e}=await ie(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)nn.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const Ye=Ir.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...$n(e.id)})),Gn=Ye[0].id;async function kr(){return await Tr(),Ye.map(e=>({...e,...$n(e.id)}))}async function jr(){return await sn()===null}async function sn(){const e=navigator.gpu;if(!e)return"This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick the Scripted or Endpoint brain.";let n;try{n=await e.requestAdapter()}catch(t){return`WebGPU adapter request failed (${t instanceof Error?t.message:String(t)}). Try the Scripted or Endpoint brain instead.`}return n?null:"This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick the Scripted or Endpoint brain instead."}function Jn(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function Er(e,n=Jn()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function Dr(e){try{const{hasModelInCache:n}=await ie(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function tn(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function vn(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class Oe{constructor(){G(this,"kind","browser");G(this,"model",null);G(this,"engine",null);G(this,"worker",null);G(this,"generation",0);G(this,"chat",async(n,t=512,r)=>{var a,l;const i=this.engine;if(!i||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const d=await i.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let m="";for await(const s of d){const c=((l=(a=s.choices[0])==null?void 0:a.delta)==null?void 0:l.content)??"";c&&(m+=c,r==null||r(c))}return m}catch(d){const m=d instanceof Error?d.message:String(d);throw tn(m)?(this.teardown(),new Error(`The in-browser model stopped: ${vn()}`)):d}})}async connect(n=Gn,t){var m,s;const r=await sn();if(r)throw new Error(r);if(this.engine&&this.model===n)return n;const i=++this.generation,a=c=>{i===this.generation&&(t==null||t({progress:c.progress??0,text:c.text??""}))};this.teardown();let l,d;try{const{CreateWebWorkerMLCEngine:c}=await ie(async()=>{const{CreateWebWorkerMLCEngine:h}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:h}},[]);d=new Worker(new URL("/pr-preview/pr-62/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),l=await c(d,n,{initProgressCallback:a})}catch(c){if(d==null||d.terminate(),i!==this.generation)throw new Error("cancelled");const h=c instanceof Error?c.message:String(c);if(tn(h))throw new Error(`Couldn't load ${n} in the browser (${h}). ${vn()}`);const p=(s=(m=Ye.find(g=>g.id===n))==null?void 0:m.requiredFeatures)==null?void 0:s.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${h}). `+(p?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(i!==this.generation)throw l.unload().catch(()=>{}),d==null||d.terminate(),new Error("cancelled");return this.engine=l,this.worker=d??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const Hn="http://localhost:11434/v1";function Vn(){var n;const e=((n=globalThis.location)==null?void 0:n.hostname)??"";return e==="localhost"||e==="127.0.0.1"||e==="[::1]"||e==="::1"}function an(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(r=>(r=globalThis.location)==null?void 0:r.origin)()??""}){let i;try{i=new URL(Zn(e)).hostname}catch{return null}const a=l=>l==="localhost"||l==="127.0.0.1"||l==="::1"||l==="[::1]";return!a(i)||a(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function Zn(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class In extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class Sr{constructor(n=Hn,t="",r=""){G(this,"kind","endpoint");G(this,"baseUrl");G(this,"model",null);G(this,"models",[]);G(this,"apiKey");G(this,"requestedModel");G(this,"chat",async(n,t=512,r)=>{var s,c,h;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const i=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!i.ok||!i.body){const p=await i.text().catch(()=>"");throw new Error(`chat/completions HTTP ${i.status} ${i.statusText}${p?` — ${p.slice(0,300)}`:""}`)}const a=i.body.getReader(),l=new TextDecoder;let d="",m="";for(;;){const{value:p,done:g}=await a.read();if(g)break;d+=l.decode(p,{stream:!0});let f;for(;(f=d.indexOf(`
`))>=0;){const N=d.slice(0,f).trim();if(d=d.slice(f+1),!N.startsWith("data:"))continue;const T=N.slice(5).trim();if(T==="[DONE]")continue;let w;try{w=JSON.parse(T)}catch{continue}w.model&&(this.model=w.model);const j=(s=w.choices)==null?void 0:s[0],z=((c=j==null?void 0:j.delta)==null?void 0:c.content)??((h=j==null?void 0:j.message)==null?void 0:h.content)??"";z&&(m+=z,r==null||r(z))}}return m});this.baseUrl=Zn(n),this.apiKey=t.trim(),this.requestedModel=r.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(r){const i=an(this.baseUrl);throw new Error(i??`Can't reach ${this.baseUrl} (${r instanceof Error?r.message:String(r)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new In(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(r=>r.id).filter(r=>!!r),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof In&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(r=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${r instanceof Error?r.message:String(r)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const r=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${r?` — ${r.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}async function Ar(){return await jr()?"browser":Vn()?"endpoint":"scripted"}function Lr(){const[e,n]=b.useState("scripted"),t=b.useRef(!1),[r,i]=b.useState("idle"),[a,l]=b.useState(null),[d,m]=b.useState(null),[s,c]=b.useState(null),[h,p]=b.useState(null),[g,f]=b.useState(null),[N,T]=b.useState(null),[w,j]=b.useState(Gn),[z,k]=b.useState(Hn),[J,X]=b.useState(""),[ee,ce]=b.useState(""),[ne,Y]=b.useState(null),P=b.useRef(null),te=b.useCallback(O=>async(...U)=>{try{return await O.chat(...U)}catch(H){const ge=H instanceof Error?H.message:String(H);throw O instanceof Oe&&tn(ge)&&(Y(null),m(null),i("error"),l(ge)),H}},[]);b.useEffect(()=>{sn().then(O=>{f(O),p(O===null),t.current||(t.current=!0,Ar().then(n))})},[]),b.useEffect(()=>{let O=!1;return T(null),Dr(w).then(U=>{O||T(U)}),()=>{O=!0}},[w]),b.useEffect(()=>()=>{var O;return(O=P.current)==null?void 0:O.dispose()},[]);const pe=b.useCallback(O=>{n(O),i("idle"),l(null),m(null),c(null),Y(null)},[]),A=b.useCallback(()=>{var O;(O=P.current)==null||O.dispose(),P.current=null,Y(null),m(null)},[]),V=b.useCallback(()=>{P.current instanceof Oe&&P.current.cancelConnect(),A(),i("idle"),c(null),l(null)},[A]),oe=b.useCallback(async()=>{var O;if(e==="scripted"){Y(null),i("ready");return}if(e==="endpoint"){const U=an(z);if(U){A(),l(U),i("error");return}}i("connecting"),l(null),c(null);try{if(e==="browser"){const U=P.current instanceof Oe?P.current:new Oe;P.current&&P.current!==U&&P.current.dispose(),P.current=U;const H=await U.connect(w,c);m(H),Y(()=>te(U)),T(!0)}else{(O=P.current)==null||O.dispose();const U=new Sr(z,ee,J);P.current=U;const H=await U.connect();m(H),Y(()=>te(U))}i("ready")}catch(U){const H=U instanceof Error?U.message:String(U);if(H==="cancelled")return;l(H),i("error"),Y(null)}finally{c(null)}},[e,w,z,J,ee,A,te]);return{kind:e,setKind:pe,status:r,error:a,modelInUse:d,progress:s,webgpu:h,webgpuReason:g,browserModelCached:N,cancelConnect:V,browserModel:w,setBrowserModel:j,endpointUrl:z,setEndpointUrl:k,endpointModel:J,setEndpointModel:X,apiKey:ee,setApiKey:ce,connect:oe,chat:ne}}const rn="#s=",Cr=["scripted","browser","endpoint"];function zr(e){return typeof e=="string"&&Cr.includes(e)}function Pr(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,r={};return zr(t.brain)&&(r.brain=t.brain),r}}catch{}return{}}function Wn(e=location.hash){if(!e.startsWith(rn))return{};let n;try{n=decodeURIComponent(e.slice(rn.length))}catch{return{}}return Pr(n)}function Or(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":rn+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function Br(e){const n={...Wn(),...e},t=Or(n),r=new URL(location.href);r.hash=t,history.replaceState(history.state,"",r)}const Tn=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server. Ollama by default. Local pages only."}];function Rr({brain:e}){const n=Tn.find(s=>s.kind===e.kind),t=an(e.endpointUrl),r=Vn(),[i,a]=b.useState(Ye);b.useEffect(()=>{kr().then(a)},[]);const l=i.find(s=>s.id===e.browserModel),d=l?Er(l,Jn()):null,m=e.webgpu===!0?"browser":r&&e.webgpu===!1?"endpoint":null;return o.jsxs("div",{className:"brain",children:[o.jsxs("div",{className:"brain-kinds",children:[Tn.map(s=>o.jsxs(K,{size:"sm",variant:e.kind===s.kind?"default":"secondary",onClick:()=>e.setKind(s.kind),children:[s.label,s.kind===m&&o.jsx(re,{variant:"info",className:"brain-recommended-badge",children:"recommended"})]},s.kind)),e.status==="ready"&&e.kind!=="scripted"&&o.jsx(re,{variant:"success",children:e.modelInUse??"connected"}),e.status==="connecting"&&o.jsx(re,{variant:"info",children:"connecting…"}),e.status==="error"&&o.jsx(re,{variant:"danger",children:"not connected"})]}),o.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&o.jsxs("div",{className:"brain-config",children:[o.jsxs("div",{className:"field",children:[o.jsx(Le,{htmlFor:"browser-model",children:"Model"}),o.jsxs(ot,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[o.jsx(st,{id:"browser-model",children:o.jsx(at,{})}),o.jsx(ct,{children:i.map(s=>o.jsx(lt,{value:s.id,children:s.label},s.id))})]}),e.browserModelCached===!0&&o.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&o.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&o.jsxs(le,{variant:"destructive",children:[o.jsx(de,{children:"No WebGPU in this browser"}),o.jsx(ue,{children:e.webgpuReason})]}),e.webgpu!==!1&&d&&o.jsxs(le,{variant:"destructive",children:[o.jsx(de,{children:"This model may not fit in GPU memory"}),o.jsx(ue,{children:d})]})]}),e.kind==="endpoint"&&o.jsxs("div",{className:"brain-config",children:[o.jsxs("div",{className:"field",children:[o.jsx(Le,{htmlFor:"endpoint-url",children:"Endpoint"}),o.jsx($e,{id:"endpoint-url",value:e.endpointUrl,onChange:s=>e.setEndpointUrl(s.target.value),disabled:e.status==="connecting"}),o.jsxs("p",{className:"field-hint",children:["Ollama allows ",o.jsx("code",{children:"localhost"})," origins out of the box; set"," ",o.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}),t&&o.jsxs(le,{variant:"destructive",children:[o.jsx(de,{children:"A local server won't work from this URL"}),o.jsx(ue,{children:t})]})]}),o.jsxs("div",{className:"field",children:[o.jsx(Le,{htmlFor:"endpoint-model",children:"Model (blank = first served)"}),o.jsx($e,{id:"endpoint-model",placeholder:"llama3.2:3b",value:e.endpointModel,onChange:s=>e.setEndpointModel(s.target.value),disabled:e.status==="connecting"})]}),o.jsxs("div",{className:"field",children:[o.jsx(Le,{htmlFor:"endpoint-key",children:"API key (optional)"}),o.jsx($e,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:s=>e.setApiKey(s.target.value),disabled:e.status==="connecting"})]})]}),e.kind!=="scripted"&&o.jsxs("div",{className:"brain-actions",children:[o.jsx(K,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting",children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&e.kind==="browser"&&o.jsx(K,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&o.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.error&&o.jsxs(le,{variant:"destructive",children:[o.jsx(de,{children:"Couldn't connect"}),o.jsx(ue,{children:e.error})]})]})}function qn(e){return typeof e=="object"&&e!==null}function no(e){const n=new Set,t=r=>{qn(r)&&(typeof r.key=="string"&&n.add(r.key),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function Ur(e){const n={},t=r=>{qn(r)&&(typeof r.key=="string"&&"defaultValue"in r&&(n[r.key]=r.defaultValue??""),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}const we={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function kn(e){return`[data-tour="${e}"]`}function Fr(e=location.search){return new URLSearchParams(e).get("tour")}function Yr(e,n){var t;return((t=e.elementStats.find(r=>r.elementId===n))==null?void 0:t.completed)??0}function Qr(e,n){return!e||e.kind==="click"||!n?!1:e.kind==="activeElement"?n.activeElementIds.includes(e.elementId):Yr(n,e.elementId)>=(e.atLeast??1)}function $r(e){return"anchor"in e?kn(e.anchor):`${kn(we.diagram)} [data-element-id="${Gr(e.elementId)}"]`}function Gr(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function Jr(e){return e.map(n=>{const t=!!n.waitFor&&n.waitFor.kind!=="click";return{element:$r(n.target),popover:{title:n.title,description:t?`${n.description} (continues automatically once you reach that point — or use Next to skip ahead)`:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}})}async function Hr(e,n={}){var a;const[{driver:t}]=await Promise.all([ie(()=>import("./driver.js-bj_ppY-Q.js"),[]),ie(()=>Promise.resolve({}),__vite__mapDeps([0]))]),r=Jr(e),i=t({steps:r,showProgress:!0,allowClose:!0,skipMissingElement:!0,onHighlighted:(l,d,{index:m})=>{var s;m!==void 0&&((s=n.onIndexChange)==null||s.call(n,m))},onDestroyed:()=>{var l;(l=n.onDestroyed)==null||l.call(n)}});return i.drive(),(a=n.onIndexChange)==null||a.call(n,i.getActiveIndex()??0),{moveNext:()=>i.moveNext(),activeIndex:()=>i.getActiveIndex()??-1,destroy:()=>i.destroy()}}const Vr=300;function Zr(e,n){const[t,r]=b.useState(!1),i=b.useRef(null),a=b.useRef(0),l=b.useRef(-1),d=b.useRef(null),m=b.useRef(n);b.useEffect(()=>{m.current=n},[n]);const s=b.useCallback(()=>{d.current!==null&&(clearInterval(d.current),d.current=null)},[]),c=b.useRef(0),h=b.useCallback(()=>{var g;c.current+=1,s(),(g=i.current)==null||g.destroy(),i.current=null,r(!1)},[s]),p=b.useCallback(()=>{if(!e||e.steps.length===0||i.current)return;const g=c.current+=1;Hr(e.steps,{onIndexChange:f=>{a.current=f},onDestroyed:()=>{s(),i.current=null,r(!1)}}).then(f=>{if(g!==c.current){f.destroy();return}i.current=f,r(!0),d.current=setInterval(()=>{const N=a.current;if(N===l.current)return;const T=e.steps[N];T&&Qr(T.waitFor,m.current())&&(l.current=N,f.moveNext())},Vr)})},[e,s]);return b.useEffect(()=>h,[h]),{active:t,start:p,stop:h}}const Je=650,He="__agent__",jn="__model__",En="__template__:",Wr=b.lazy(async()=>{await Promise.all([ie(()=>Promise.resolve({}),__vite__mapDeps([1])),ie(()=>Promise.resolve({}),__vite__mapDeps([2]))]);const{RuntimeDiagram:e}=await ie(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-ClMkdTD8.js");return{RuntimeDiagram:n}},__vite__mapDeps([3,4,5]));return{default:e}}),Ve=b.lazy(()=>ie(()=>import("./MonacoEditor-DP2Qz4Pc.js").then(e=>e.M),__vite__mapDeps([6,4,7]))),qr=b.lazy(()=>ie(()=>import("./vendor-modeler-DD0QRvpe.js"),__vite__mapDeps([8,4,5,9,10,11,12,1,2]))),Dn=b.lazy(async()=>{const{FormRenderer:e}=await ie(async()=>{const{FormRenderer:n}=await import("./FormRenderer-BNE07XPL.js");return{FormRenderer:n}},__vite__mapDeps([13,4,11,9,10,14]));return{default:e}});function Ze(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function Kr({example:e,initialBrainKind:n,initialTourId:t}){var un,mn,pn,gn,hn,bn,fn;const[r,i]=b.useState(e.bpmn),a=Lr();b.useEffect(()=>{n&&n!==a.kind&&a.setKind(n)},[]),b.useEffect(()=>{Br({brain:a.kind})},[a.kind]);const[l,d]=b.useState(()=>Object.fromEntries(e.handlers.map(y=>[y.elementId,y.source]))),[m,s]=b.useState(e.scriptedAgent??""),[c,h]=b.useState(()=>Fe(e.templates)),p=b.useMemo(()=>hr(e,l,r,c),[e,l,r,c]),g=p.model,f=Bt({bpmn:p.resolvedBpmn}),N=Zr(e.tour,()=>f.snapshot);b.useEffect(()=>{var y;t&&((y=e.tour)==null?void 0:y.id)===t&&N.start()},[]);const T=g.startFormId?((un=e.forms)==null?void 0:un[g.startFormId])??null:null,[w,j]=b.useState(()=>({...e.seed,...T?Ur(T):{}})),[z,k]=b.useState(g.agent?He:((mn=e.handlers[0])==null?void 0:mn.elementId)??""),[J,X]=b.useState(!1),[ee,ce]=b.useState(null),[ne,Y]=b.useState([]),[P,te]=b.useState({}),[pe,A]=b.useState(!1),V=b.useRef(null),[oe,O]=b.useState({}),[U,H]=b.useState(!1),ge=b.useRef(null),se=b.useRef(!1),Qe=b.useRef(0),Ie=b.useRef({current:void 0}),Ee=b.useRef({}),I=b.useRef({}),v=b.useMemo(()=>{const y=new Map;for(const x of g.processes){for(const E of x.tasks)y.set(E.elementId,E.label);for(const E of x.agents){y.set(E.elementId,E.label);for(const C of E.tools)y.set(C.elementId,C.label)}for(const E of x.userTasks)y.set(E.elementId,E.label)}return x=>y.get(x)??x},[g]),_=b.useCallback(y=>{Y(x=>{if(y.key){const E=x.findIndex(C=>C.key===y.key);if(E>=0){const C=[...x];return C[E]={...C[E],...y},C}}return[...x,{...y,id:Qe.current++}].slice(-80)})},[]),L=b.useMemo(()=>{var y;return((y=f.snapshot)==null?void 0:y.userTasks.find(x=>x.state==="Created"))??null},[f.snapshot]),De=b.useMemo(()=>{const y=g.processes.flatMap(E=>E.tasks),x=new Map;for(const E of e.handlers){if(!E.manualControl)continue;const C=y.find($=>$.elementId===E.elementId);C&&x.set(C.jobType,{...E.manualControl,elementId:E.elementId})}return x},[e.handlers,g]),_e=b.useMemo(()=>{if(!f.snapshot)return null;for(const y of f.snapshot.jobs){const x=De.get(y.jobType);if(x&&y.state==="Created")return{job:y,control:x}}return null},[f.snapshot,De]),ln=b.useMemo(()=>{if(!g.agent||!f.snapshot)return[];const y=new Map(f.snapshot.elementStats.map(x=>[x.elementId,x.completed]));return g.agent.tools.filter(x=>(y.get(x.elementId)??0)===0)},[g.agent,f.snapshot]),ae=L?g.userTasks.find(y=>y.elementId===L.elementId):void 0,Se=ae!=null&&ae.formId?((pn=e.forms)==null?void 0:pn[ae.formId])??null:null,Ae=b.useCallback(async(y,x,E)=>{var Z;let C=E,$=0;for(;se.current&&C&&C.completedInstances<1&&$++<80;){const B=await f.stepWorkers(y,{agents:x});C=(B==null?void 0:B.snapshot)??C;const W=(Z=C.instances[0])==null?void 0:Z.variables;if(W&&Object.keys(W).length&&te({...W}),C.userTasks.some(q=>q.state==="Created")){_({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!B||B.handled===0)break;await new Promise(q=>setTimeout(q,Je))}return C&&C.completedInstances>=1?_({kind:"done",text:"✅ process instance completed"}):C&&C.incidentElementIds.length>0&&_({kind:"error",text:"A job failed — incident on the diagram"}),C},[f,_]),dn=b.useCallback(async y=>{var C,$,Z;if(!_e||se.current)return;const{job:x,control:E}=_e;se.current=!0,X(!0);try{let B,W;if(y==="complete")B=f.completeJob(x.key,"{}"),W="  ↳ completed normally";else if(E.action.kind==="timer"){const q=(($=(C=f.snapshot)==null?void 0:C.timers[0])==null?void 0:$.dueInMs)??0;B=f.advanceTime(Math.max(q,0)+1),W="  ↳ advanced the clock — timer fired"}else{const{errorCode:q,message:ve}=E.action;B=f.throwError(x.key,q,ve),W=`  ↳ threw BPMN error ${q}: ${ve}`}if(B){_({kind:"vars",text:W,elementId:x.elementId});const q=(Z=B.instances[0])==null?void 0:Z.variables;q&&te({...q}),await new Promise(ve=>setTimeout(ve,Je)),await Ae(Ee.current,I.current,B)}else _({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:x.elementId})}finally{se.current=!1,X(!1)}},[_e,f,_,Ae]),Kn=b.useCallback(async()=>{if(f.phase!=="ready"||se.current||p.hasErrors||V.current&&!V.current.validate())return;ce(null);let y=null;try{g.agent&&m.trim()&&(y=rr(m))}catch($){ce($ instanceof Error?$.message:String($));return}Ie.current={current:void 0};const x=sr(g,p.handlers,_,Ie.current);for(const $ of De.keys())delete x[$];const E={};if(g.agents.length>0){if(a.kind!=="scripted"&&a.chat){const Z=new Map;for(const B of g.agents)Z.set(B.jobType,[...Z.get(B.jobType)??[],B]);for(const[B,W]of Z)E[B]=vr(W,a.chat,_,{turnRef:Ie.current,requiredTools:e.requiredTools})}else if(y&&g.agent){const Z=g.agent.elementId;E[g.agent.jobType]=async B=>{if(B.elementId!==Z)throw new Error(`No scripted agent handler for "${B.elementId}" — only "${Z}" (the primary process's first agent host) is driven by the scripted brain. Use a live brain to exercise more than one host.`);const W=await y(B),q=(W.activateElements??[]).map(ve=>ve.elementId).join(", ");return _({kind:"agent",text:W.completionConditionFulfilled?"🤖 scripted agent: done":`🤖 scripted agent: calling ${q||"(nothing)"}`}),W}}}se.current=!0,X(!0),Y([]),O({});const C={...e.seed,...w};te(C),Ee.current=x,I.current=E;try{const $=f.processIds[0]??g.processId;_({kind:"start",text:`Starting "${$}" — ${g.agent?a.kind==="scripted"||!a.chat?"scripted brain":`live brain (${a.modelInUse??a.kind})`:"no agent in this model"}`});const Z=f.createInstance($,JSON.stringify(C));await new Promise(B=>setTimeout(B,Je)),await Ae(x,E,Z)}finally{se.current=!1,X(!1)}},[f,e,p,m,w,g,a,_,De,Ae]),Xn=b.useCallback(()=>{se.current=!1,X(!1),f.reset(),Y([]),te({})},[f]),et=b.useCallback(()=>{if(!L||ge.current&&!ge.current.validate())return;const y=f.completeUserTask(L.key,JSON.stringify(oe));_({kind:"human",text:`👤 ${Ze(oe)}`}),y&&y.completedInstances>=1&&_({kind:"done",text:"✅ process instance completed"})},[L,oe,f,_]),nt=b.useMemo(()=>{var y,x;return f.phase==="loading"?o.jsx(re,{variant:"neutral",children:"Booting engine…"}):f.phase==="error"?o.jsx(re,{variant:"danger",children:"Engine error"}):J?o.jsx(re,{variant:"info",children:"Running…"}):(((y=f.snapshot)==null?void 0:y.incidentElementIds.length)??0)>0?o.jsx(re,{variant:"danger",children:"Incident"}):L?o.jsx(re,{variant:"warning",children:"Waiting for a human"}):(((x=f.snapshot)==null?void 0:x.completedInstances)??0)>=1?o.jsx(re,{variant:"success",children:"Completed"}):o.jsx(re,{variant:"neutral",children:"Ready"})},[f.phase,f.snapshot,J,L]);return o.jsxs("div",{className:"runner",children:[o.jsxs("section",{className:"intro",children:[o.jsx("h1",{children:e.title}),o.jsx("p",{children:e.blurb}),o.jsxs("div",{className:"controls",children:[o.jsx(K,{"data-tour":we.runButton,onClick:()=>void Kn(),disabled:f.phase!=="ready"||J||p.hasErrors||!!T&&!pe,children:"▶ Run"}),o.jsx(K,{variant:"secondary",onClick:Xn,disabled:f.phase!=="ready",children:"↺ Reset"}),e.tour&&o.jsx(K,{variant:"secondary",onClick:N.start,disabled:N.active,children:N.active?"Touring…":`🧭 ${e.tour.label}`}),nt]}),f.phase==="error"&&o.jsxs(le,{variant:"destructive",children:[o.jsx(de,{children:"Engine error"}),o.jsx(ue,{children:f.error})]}),ee&&o.jsxs(le,{variant:"destructive",children:[o.jsx(de,{children:"Code didn't compile"}),o.jsx(ue,{children:ee})]}),p.hasErrors&&o.jsxs(le,{variant:"destructive",children:[o.jsx(de,{children:"Run is disabled — the diagram has unresolved references"}),o.jsx(ue,{children:o.jsx("ul",{className:"diagnostics",children:p.diagnostics.filter(y=>y.severity==="error").map((y,x)=>o.jsx("li",{children:y.message},x))})})]}),!p.hasErrors&&p.diagnostics.length>0&&o.jsxs(le,{children:[o.jsx(de,{children:"Heads up"}),o.jsx(ue,{children:o.jsx("ul",{className:"diagnostics",children:p.diagnostics.map((y,x)=>o.jsx("li",{children:y.message},x))})})]})]}),o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"col",children:[o.jsxs(he,{className:"panel","data-tour":we.diagram,children:[o.jsxs(be,{children:[o.jsx(fe,{children:"Process"}),o.jsxs(ye,{children:[g.processName," — live token (green), incidents (red)."]})]}),o.jsx(Me,{children:o.jsx(b.Suspense,{fallback:o.jsx("div",{className:"diagram-fallback",children:f.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:o.jsx(Wr,{xml:p.resolvedBpmn,activeIds:((gn=f.snapshot)==null?void 0:gn.activeElementIds)??[],incidentIds:((hn=f.snapshot)==null?void 0:hn.incidentElementIds)??[],className:"diagram"})})})]}),L&&o.jsxs(he,{className:"panel",children:[o.jsxs(be,{children:[o.jsx(fe,{children:(ae==null?void 0:ae.label)??"Human task"}),o.jsx(ye,{children:Se?`Rendered from the model's form "${ae==null?void 0:ae.formId}".`:"This task has no linked form — complete it with no variables."})]}),o.jsxs(Me,{children:[ln.length>0&&o.jsxs(le,{variant:"destructive",children:[o.jsx(de,{children:"The agent didn't finish its checks"}),o.jsxs(ue,{children:["It completed without running"," ",ln.map(y=>y.label||y.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),Se&&o.jsx(b.Suspense,{fallback:o.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:o.jsx(Dn,{ref:ge,schema:Se,values:oe,onChange:(y,x)=>O(E=>({...E,[y]:x})),context:P,onValidityChange:H})}),o.jsx(K,{onClick:et,disabled:!!Se&&!U,children:"Complete task"})]})]}),_e&&o.jsxs(he,{className:"panel",children:[o.jsxs(be,{children:[o.jsx(fe,{children:_e.control.label}),o.jsx(ye,{children:"This job is held here on purpose — pick how it resolves."})]}),o.jsx(Me,{children:o.jsxs("div",{className:"controls",children:[o.jsx(K,{onClick:()=>void dn("complete"),disabled:J,children:_e.control.completeLabel??"✅ Complete normally"}),o.jsx(K,{variant:"secondary",onClick:()=>void dn("action"),disabled:J,children:_e.control.action.label})]})})]}),o.jsxs("div",{className:"row",children:[o.jsxs(he,{className:"panel grow","data-tour":we.variablesPanel,children:[o.jsxs(be,{children:[o.jsx(fe,{children:"Variables"}),o.jsx(ye,{children:"The instance payload, live."})]}),o.jsx(Me,{children:o.jsx("pre",{className:"vars",children:Ze(P,2)})})]}),o.jsx(Ft,{rows:ne,elementStats:(bn=f.snapshot)==null?void 0:bn.elementStats,incidents:(fn=f.snapshot)==null?void 0:fn.incidents,labelFor:v,className:"panel grow"})]})]}),o.jsxs("div",{className:"col",children:[g.agent&&o.jsxs(he,{className:"panel","data-tour":we.brainPanel,children:[o.jsxs(be,{children:[o.jsx(fe,{children:"Brain"}),o.jsxs(ye,{children:["What drives “",g.agent.label,"”. The model recommends; the process governs."]})]}),o.jsx(Me,{children:o.jsx(Rr,{brain:a})})]}),o.jsxs(he,{className:"panel",children:[o.jsxs(be,{children:[o.jsx(fe,{children:"Start"}),o.jsx(ye,{children:g.startFormId?`The model's start form "${g.startFormId}".`:"The starting payload."})]}),o.jsxs(Me,{children:[e.scenarios&&o.jsx("div",{className:"scenarios",children:e.scenarios.map(y=>o.jsx(K,{size:"sm",variant:"secondary",disabled:J,onClick:()=>j(x=>({...x,...y.variables})),children:y.label},y.label))}),T?o.jsx(b.Suspense,{fallback:o.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:o.jsx(Dn,{ref:V,schema:T,values:w,onChange:(y,x)=>j(E=>({...E,[y]:x})),disabled:J,onValidityChange:A})}):o.jsx("pre",{className:"vars",children:Ze(w,2)})]})]}),o.jsxs(he,{className:"panel editors","data-tour":we.codePanel,children:[o.jsxs(be,{children:[o.jsx(fe,{children:"Code"}),o.jsx(ye,{children:"One handler per BPMN element. Return variables to merge, or throw to fail the job."})]}),o.jsx(dt,{}),o.jsx(Me,{children:o.jsx(b.Suspense,{fallback:o.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:o.jsxs(ut,{value:z,onValueChange:k,children:[o.jsxs(mt,{children:[o.jsx(Ce,{value:jn,children:"model"}),g.agent&&o.jsx(Ce,{value:He,children:"agent (scripted)"}),e.handlers.map(y=>{var x;return o.jsx(Ce,{value:y.elementId,children:((x=g.tasks.find(E=>E.elementId===y.elementId))==null?void 0:x.label)??y.elementId},y.elementId)}),Object.keys(c).map(y=>o.jsx(Ce,{value:En+y,children:y},y))]}),o.jsxs(ze,{value:jn,children:[o.jsxs("div",{className:"editor-meta",children:[o.jsx("strong",{children:"Model"}),o.jsx("code",{children:"edit the diagram visually — Run re-checks it below"}),o.jsx(K,{variant:"secondary",size:"sm",onClick:()=>i(e.bpmn),disabled:r===e.bpmn,children:"Revert to original"})]}),o.jsx(qr,{value:r,onChange:i})]}),g.agent&&o.jsxs(ze,{value:He,children:[o.jsxs("div",{className:"editor-meta",children:[o.jsx("strong",{children:g.agent.label}),o.jsx("code",{children:a.kind==="scripted"||!a.chat?"in use":"unused — a live brain is connected"})]}),o.jsx("div",{className:"editor-wrap",children:o.jsx(Ve,{height:"360px",defaultLanguage:"javascript",value:m,onChange:y=>s(y??""),options:We})})]}),e.handlers.map(y=>{var x;return o.jsxs(ze,{value:y.elementId,children:[o.jsxs("div",{className:"editor-meta",children:[o.jsx("strong",{children:((x=g.tasks.find(E=>E.elementId===y.elementId))==null?void 0:x.label)??y.elementId}),o.jsx("code",{children:y.standsInFor??y.elementId})]}),o.jsx("div",{className:"editor-wrap",children:o.jsx(Ve,{height:"360px",defaultLanguage:"javascript",value:l[y.elementId],onChange:E=>d(C=>({...C,[y.elementId]:E??""})),options:We})})]},y.elementId)}),Object.keys(c).map(y=>o.jsxs(ze,{value:En+y,children:[o.jsxs("div",{className:"editor-meta",children:[o.jsx("strong",{children:y}),o.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+y+"}}"]})]}),o.jsx("div",{className:"editor-wrap",children:o.jsx(Ve,{height:"360px",defaultLanguage:"markdown",value:c[y],onChange:x=>h(E=>Fe(E,{[y]:x??""})),options:We})})]},y))]})})})]}),g.agent&&o.jsxs(he,{className:"panel",children:[o.jsxs(be,{children:[o.jsx(fe,{children:"Tools, as the model sees them"}),o.jsxs(ye,{children:["Read from the diagram — element name, documentation, and every",o.jsx("code",{children:" fromAi(…)"})," argument."]})]}),o.jsx(Me,{children:o.jsx("ul",{className:"tool-list",children:g.agent.tools.map(y=>o.jsxs("li",{children:[o.jsx("code",{children:y.elementId}),o.jsxs("span",{children:[" — ",y.documentation||y.label]}),y.args.length>0&&o.jsx("ul",{children:y.args.map(x=>o.jsxs("li",{children:[o.jsxs("code",{children:[x.name,": ",x.type]})," ","— ",x.description]},x.name))})]},y.elementId))})})]})]})]})]})}const We={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},Xr=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,ei=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,ni={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:we.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"},waitFor:{kind:"activeElement",elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"},waitFor:{kind:"elementCompleted",elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:we.variablesPanel}}],successEvent:{kind:"instanceCompleted"}},ti=`<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_SeedExportComplianceAgent" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Web Modeler" exporterVersion="9b5d5ef" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.10.0">
  <bpmn:process id="seed-export-compliance-agent" name="Seed Export Compliance Agent" isExecutable="true">
    <bpmn:startEvent id="StartEvent_ShipmentReady" name="Shipment ready for export">
      <bpmn:extensionElements>
        <zeebe:formDefinition formId="seed-export-shipment-ready" />
      </bpmn:extensionElements>
      <bpmn:outgoing>Flow_ToAgent</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_ToAgent" sourceRef="StartEvent_ShipmentReady" targetRef="ComplianceCheckAgent" />
    <bpmn:adHocSubProcess id="ComplianceCheckAgent" name="Compliance Check Agent" zeebe:modelerTemplate="io.camunda.connectors.agenticai.aiagent.jobworker.v1" zeebe:modelerTemplateVersion="10" zeebe:modelerTemplateIcon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNBNTZFRkYiLz4KPG1hc2sgaWQ9InBhdGgtMi1vdXRzaWRlLTFfMTg1XzYiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjQiIHk9IjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iYmxhY2siPgo8cmVjdCBmaWxsPSJ3aGl0ZSIgeD0iNCIgeT0iNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMDEwNSAxMi4wOTg3QzE4LjQ5IDEwLjU4OTQgMTcuMTU5NCA4LjEwODE0IDE2LjE3OTkgNi4wMTEwM0MxNi4xNTIgNi4wMDQ1MSAxNi4xMTc2IDYgMTYuMDc5NCA2QzE2LjA0MTEgNiAxNi4wMDY2IDYuMDA0NTEgMTUuOTc4OCA2LjAxMTA0QzE0Ljk5OTQgOC4xMDgxNCAxMy42Njk3IDEwLjU4ODkgMTIuMTQ4MSAxMi4wOTgxQzEwLjYyNjkgMTMuNjA3MSA4LjEyNTY4IDE0LjkyNjQgNi4wMTE1NyAxNS44OTgxQzYuMDA0NzQgMTUuOTI2MSA2IDE1Ljk2MTEgNiAxNkM2IDE2LjAzODcgNi4wMDQ2OCAxNi4wNzM2IDYuMDExNDQgMTYuMTAxNEM4LjEyNTE5IDE3LjA3MjkgMTAuNjI2MiAxOC4zOTE5IDEyLjE0NzcgMTkuOTAxNkMxMy42Njk3IDIxLjQxMDcgMTQuOTk5NiAyMy44OTIgMTUuOTc5MSAyNS45ODlDMTYuMDA2OCAyNS45OTU2IDE2LjA0MTEgMjYgMTYuMDc5MyAyNkMxNi4xMTc1IDI2IDE2LjE1MTkgMjUuOTk1NCAxNi4xNzk2IDI1Ljk4OUMxNy4xNTkxIDIzLjg5MiAxOC40ODg4IDIxLjQxMSAyMC4wMDk5IDE5LjkwMjFNMjAuMDA5OSAxOS45MDIxQzIxLjUyNTMgMTguMzk4NyAyMy45NDY1IDE3LjA2NjkgMjUuOTkxNSAxNi4wODI0QzI1Ljk5NjUgMTYuMDU5MyAyNiAxNi4wMzEgMjYgMTUuOTk5N0MyNiAxNS45Njg0IDI1Ljk5NjUgMTUuOTQwMyAyNS45OTE1IDE1LjkxNzFDMjMuOTQ3NCAxNC45MzI3IDIxLjUyNTkgMTMuNjAxIDIwLjAxMDUgMTIuMDk4NyIvPgo8L21hc2s+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMDEwNSAxMi4wOTg3QzE4LjQ5IDEwLjU4OTQgMTcuMTU5NCA4LjEwODE0IDE2LjE3OTkgNi4wMTEwM0MxNi4xNTIgNi4wMDQ1MSAxNi4xMTc2IDYgMTYuMDc5NCA2QzE2LjA0MTEgNiAxNi4wMDY2IDYuMDA0NTEgMTUuOTc4OCA2LjAxMTA0QzE0Ljk5OTQgOC4xMDgxNCAxMy42Njk3IDEwLjU4ODkgMTIuMTQ4MSAxMi4wOTgxQzEwLjYyNjkgMTMuNjA3MSA4LjEyNTY4IDE0LjkyNjQgNi4wMTE1NyAxNS44OTgxQzYuMDA0NzQgMTUuOTI2MSA2IDE1Ljk2MTEgNiAxNkM2IDE2LjAzODcgNi4wMDQ2OCAxNi4wNzM2IDYuMDExNDQgMTYuMTAxNEM4LjEyNTE5IDE3LjA3MjkgMTAuNjI2MiAxOC4zOTE5IDEyLjE0NzcgMTkuOTAxNkMxMy42Njk3IDIxLjQxMDcgMTQuOTk5NiAyMy44OTIgMTUuOTc5MSAyNS45ODlDMTYuMDA2OCAyNS45OTU2IDE2LjA0MTEgMjYgMTYuMDc5MyAyNkMxNi4xMTc1IDI2IDE2LjE1MTkgMjUuOTk1NCAxNi4xNzk2IDI1Ljk4OUMxNy4xNTkxIDIzLjg5MiAxOC40ODg4IDIxLjQxMSAyMC4wMDk5IDE5LjkwMjFNMjAuMDA5OSAxOS45MDIxQzIxLjUyNTMgMTguMzk4NyAyMy45NDY1IDE3LjA2NjkgMjUuOTkxNSAxNi4wODI0QzI1Ljk5NjUgMTYuMDU5MyAyNiAxNi4wMzEgMjYgMTUuOTk5N0MyNiAxNS45Njg0IDI1Ljk5NjUgMTUuOTQwMyAyNS45OTE1IDE1LjkxNzFDMjMuOTQ3NCAxNC45MzI3IDIxLjUyNTkgMTMuNjAxIDIwLjAxMDUgMTIuMDk4NyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC4wMTA1IDEyLjA5ODdDMTguNDkgMTAuNTg5NCAxNy4xNTk0IDguMTA4MTQgMTYuMTc5OSA2LjAxMTAzQzE2LjE1MiA2LjAwNDUxIDE2LjExNzYgNiAxNi4wNzk0IDZDMTYuMDQxMSA2IDE2LjAwNjYgNi4wMDQ1MSAxNS45Nzg4IDYuMDExMDRDMTQuOTk5NCA4LjEwODE0IDEzLjY2OTcgMTAuNTg4OSAxMi4xNDgxIDEyLjA5ODFDMTAuNjI2OSAxMy42MDcxIDguMTI1NjggMTQuOTI2NCA2LjAxMTU3IDE1Ljg5ODFDNi4wMDQ3NCAxNS45MjYxIDYgMTUuOTYxMSA2IDE2QzYgMTYuMDM4NyA2LjAwNDY4IDE2LjA3MzYgNi4wMTE0NCAxNi4xMDE0QzguMTI1MTkgMTcuMDcyOSAxMC42MjYyIDE4LjM5MTkgMTIuMTQ3NyAxOS45MDE2QzEzLjY2OTcgMjEuNDEwNyAxNC45OTk2IDIzLjg5MiAxNS45NzkxIDI1Ljk4OUMxNi4wMDY4IDI1Ljk5NTYgMTYuMDQxMSAyNiAxNi4wNzkzIDI2QzE2LjExNzUgMjYgMTYuMTUxOSAyNS45OTU0IDE2LjE3OTYgMjUuOTg5QzE3LjE1OTEgMjMuODkyIDE4LjQ4ODggMjEuNDExIDIwLjAwOTkgMTkuOTAyMU0yMC4wMDk5IDE5LjkwMjFDMjEuNTI1MyAxOC4zOTg3IDIzLjk0NjUgMTcuMDY2OSAyNS45OTE1IDE2LjA4MjRDMjUuOTk2NSAxNi4wNTkzIDI2IDE2LjAzMSAyNiAxNS45OTk3QzI2IDE1Ljk2ODQgMjUuOTk2NSAxNS45NDAzIDI1Ljk5MTUgMTUuOTE3MUMyMy45NDc0IDE0LjkzMjcgMjEuNTI1OSAxMy42MDEgMjAuMDEwNSAxMi4wOTg3IiBzdHJva2U9IiM0OTFEOEIiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgbWFzaz0idXJsKCNwYXRoLTItb3V0c2lkZS0xXzE4NV82KSIvPgo8L3N2Zz4K">
      <bpmn:extensionElements>
        <zeebe:adHoc outputCollection="toolCallResults" outputElement="={&#10;  id: toolCall._meta.id,&#10;  name: toolCall._meta.name,&#10;  content: toolCallResult&#10;}" />
        <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" retries="3" />
        <zeebe:ioMapping>
          <zeebe:input source="openaiCompatible" target="provider.type" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_API_ENDPOINT}}" target="provider.openaiCompatible.endpoint" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_API_KEY}}" target="provider.openaiCompatible.authentication.apiKey" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_DEFAULT_MODEL}}" target="provider.openaiCompatible.model.model" />
          <zeebe:input source="=&#34;{{system-prompt}}&#34;" target="data.systemPrompt.prompt" />
          <zeebe:input source="=&#34;Shipment notes:&#10;&#34; + (if shipmentNotes = null or shipmentNotes = &#34;&#34; then (if scenario = null then &#34;&#34; else scenario) else shipmentNotes) + &#34;&#10;&#10;{{user-prompt}}&#34;" target="data.userPrompt.prompt" />
          <zeebe:input target="agentContext" />
          <zeebe:input source="in-process" target="data.memory.storage.type" />
          <zeebe:input source="=20" target="data.memory.contextWindowSize" />
          <zeebe:input source="=10" target="data.limits.maxModelCalls" />
          <zeebe:input source="WAIT_FOR_TOOL_CALL_RESULTS" target="data.events.behavior" />
          <zeebe:input source="text" target="data.response.format.type" />
          <zeebe:input source="=false" target="data.response.format.parseJson" />
          <zeebe:input source="=false" target="data.response.includeAssistantMessage" />
          <zeebe:input source="=false" target="data.response.includeAgentContext" />
          <zeebe:input target="agent" />
          <zeebe:output source="=agent" target="agent" />
        </zeebe:ioMapping>
        <zeebe:taskHeaders>
          <zeebe:header key="elementTemplateVersion" value="10" />
          <zeebe:header key="elementTemplateId" value="io.camunda.connectors.agenticai.aiagent.jobworker.v1" />
          <zeebe:header key="retryBackoff" value="PT30S" />
        </zeebe:taskHeaders>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToAgent</bpmn:incoming>
      <bpmn:outgoing>Flow_ToEnd</bpmn:outgoing>
      <bpmn:serviceTask id="VerifyGeneticMarker" name="Verify genetic marker" zeebe:modelerTemplate="io.camunda.connectors.Jdbc.v1" zeebe:modelerTemplateVersion="3" zeebe:modelerTemplateIcon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTMiIGhlaWdodD0iNTEyIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNTEzIDUxMiI+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik00MjIuMDY5IDQxNi45OTVWMjUzLjA0NGgtMjQuNzU2VjQ0NC4zMmg5OS4wMjR2LTI3LjMyNWgtNzQuMjY4Wm0tNzQuMjY4LTE2My45NTFoLTQ5LjUxMmMtNi41NjUgMC0xMi44NjIgMi44NzktMTcuNTA1IDguMDA0LTQuNjQzIDUuMTI0LTcuMjUxIDEyLjA3NC03LjI1MSAxOS4zMjJ2MTM2LjYyNWMwIDcuMjQ3IDIuNjA4IDE0LjE5NyA3LjI1MSAxOS4zMjEgNC42NDMgNS4xMjUgMTAuOTQgOC4wMDQgMTcuNTA1IDguMDA0aDEyLjM3OHYyNy4zMjVjMCA3LjI0NyAyLjYwOCAxNC4xOTcgNy4yNTEgMTkuMzIxIDQuNjQzIDUuMTI1IDEwLjk0IDguMDA0IDE3LjUwNSA4LjAwNGgyNC43NTZ2LTI3LjMyNWgtMjQuNzU2VjQ0NC4zMmgxMi4zNzhjNi41NjYgMCAxMi44NjMtMi44NzkgMTcuNTA1LTguMDA0IDQuNjQzLTUuMTI0IDcuMjUxLTEyLjA3NCA3LjI1MS0xOS4zMjFWMjgwLjM3YzAtNy4yNDgtMi42MDgtMTQuMTk4LTcuMjUxLTE5LjMyMi00LjY0Mi01LjEyNS0xMC45MzktOC4wMDQtMTcuNTA1LTguMDA0Wm0tNDkuNTEyIDE2My45NTFWMjgwLjM3aDQ5LjUxMnYxMzYuNjI1aC00OS41MTJabS03NC4yNjggMjcuMzI1aC03NC4yNjh2LTI3LjMyNWg3NC4yNjh2LTU0LjY1aC00OS41MTJjLTYuNTY2IDAtMTIuODYyLTIuODc5LTE3LjUwNS04LjAwNC00LjY0My01LjEyNC03LjI1MS0xMi4wNzQtNy4yNTEtMTkuMzIxdi01NC42NWMwLTcuMjQ4IDIuNjA4LTE0LjE5OCA3LjI1MS0xOS4zMjIgNC42NDMtNS4xMjUgMTAuOTM5LTguMDA0IDE3LjUwNS04LjAwNGg3NC4yNjh2MjcuMzI2aC03NC4yNjh2NTQuNjVoNDkuNTEyYzYuNTY2IDAgMTIuODYzIDIuODc4IDE3LjUwNSA4LjAwMyA0LjY0MyA1LjEyNCA3LjI1MSAxMi4wNzUgNy4yNTEgMTkuMzIydjU0LjY1YzAgNy4yNDctMi42MDggMTQuMTk3LTcuMjUxIDE5LjMyMS00LjY0MiA1LjEyNS0xMC45MzkgOC4wMDQtMTcuNTA1IDguMDA0WiIvPgogICAgPHBhdGggZmlsbD0iI0M2MjlDRCIgZD0iTTE2MC42OTUgMTMuMDMyYy02My4wNjYgMC0xMzAuOTQzIDE2LjQ1LTEzMC45NDMgNTIuNTU3djIzNi41MDZjMCAyMi4wNyAyNS40MDMgMzYuNzYyIDU5LjUyIDQ0Ljg3di0yNi44ODJjLTIzLjczNi02LjIxLTM1LjA2LTE1LjAxOS0zNS43MTItMTcuOTg4di00Ni45MzhjMTcuNzggOS44NDIgMTcuNzMzIDkuMTg1IDQ1LjQyNCAxMi4wMDl2LTI2LjI0N2MtNDYuMTYyLTQuOTU5LTQzLjk2NS0xMS44OTktNDUuNDI0LTE3LjY2MXYtNDYuOTM3YzI1LjMzIDE0LjAyNSA2Ny4xNjkgMjAuNjU5IDEwNy4xMzUgMjAuNjU5IDYzLjA2NiAwIDEzMC45NDMtMTYuNDUxIDEzMC45NDMtNTIuNTU3di03OC44NGMtLjAwOS0zNi4xMDctNjcuODgxLTUyLjU1LTEzMC45NDMtNTIuNTVaTTUzLjU0MiA2NS43ODdjMS44MTMtNy4yOTUgMzcuNTE0LTI2LjQ3NyAxMDcuMTUzLTI2LjQ3NyA2OS4wMTQgMCAxMDQuNjk0IDE4Ljg0MyAxMDcuMDk3IDI2LjI3OS0yLjQwMyA3LjQzNS0zOC4wODMgMjYuMjc4LTEwNy4wOTcgMjYuMjc4LTY5LjYzOSAwLTEwNS4zMzktMTkuMTgzLTEwNy4xNTMtMjYuMDhabTIxNC4yODggNzguNDdjLTEuOTEyIDcuMzItMzcuNjAxIDI2LjQ0Ni0xMDcuMTM1IDI2LjQ0Ni02OS42MzkgMC0xMDUuMzM5LTE5LjE4NC0xMDcuMTM1LTI2LjI3OVY5Ny40ODdjMjUuMzMgMTQuMDI1IDY3LjE2OSAyMC42NTkgMTA3LjEzNSAyMC42NTkgMzkuOTY2IDAgODEuODA1LTYuNjM0IDEwNy4xMzUtMjAuNjU5djQ2Ljc3WiIvPgogIDwvZz4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iYSI+CiAgICAgIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yOS43NTQgNmg0NTIuOTkxdjUwMEgyOS43NTR6Ii8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+Cg==">
        <bpmn:documentation>Looks up a gene marker in UCSC's public hg38 reference-genome MySQL database.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="io.camunda:connector-jdbc:1" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="MYSQL" target="database" />
            <zeebe:input source="uri" target="connection.authType" />
            <zeebe:input source="jdbc:mysql://genome-mysql.soe.ucsc.edu:3306/hg38" target="connection.uri" />
            <zeebe:input source="={user: &#34;genome&#34;, password: &#34;&#34;}" target="connection.uriProperties" />
            <zeebe:input source="=true" target="data.returnResults" />
            <zeebe:input source="SELECT name AS refSeqId, chrom, txStart, txEnd, name2 AS geneSymbol FROM ncbiRefSeqCurated WHERE name2 = ? LIMIT 1" target="data.query" />
            <zeebe:input source="=[fromAi(toolCall.geneMarker, &#34;The gene marker symbol referenced in the shipment notes (e.g. TP53).&#34;, &#34;string&#34;)]" target="data.variables" />
          </zeebe:ioMapping>
          <zeebe:taskHeaders>
            <zeebe:header key="elementTemplateVersion" value="3" />
            <zeebe:header key="elementTemplateId" value="io.camunda.connectors.Jdbc.v1" />
            <zeebe:header key="resultExpression" value="={&#10;  markerRecord: if (count(resultSet) &#62; 0) then resultSet[1] else null,&#10;  toolCallResult: if (count(resultSet) &#62; 0) then resultSet[1] else &#34;No matching reference-genome record found.&#34;&#10;}" />
            <zeebe:header key="retryBackoff" value="PT5S" />
          </zeebe:taskHeaders>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      <bpmn:serviceTask id="CheckDestinationCountry" name="Check destination country" zeebe:modelerTemplate="io.camunda.connectors.GraphQL.v1" zeebe:modelerTemplateVersion="9" zeebe:modelerTemplateIcon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2ZXJzaW9uPScxLjEnIGlkPSdHcmFwaFFMX0xvZ28nCiAgICAgeD0nMHB4JyB5PScwcHgnIHZpZXdCb3g9JzAgMCA0MDAgNDAwJyBlbmFibGUtYmFja2dyb3VuZD0nbmV3IDAgMCA0MDAgNDAwJyB4bWw6c3BhY2U9J3ByZXNlcnZlJz48Zz48Zz48Zz48cmVjdCB4PScxMjInIHk9Jy0wLjQnIHRyYW5zZm9ybT0nbWF0cml4KC0wLjg2NiAtMC41IDAuNSAtMC44NjYgMTYzLjMxOTYgMzYzLjMxMzYpJyBmaWxsPScjRTUzNUFCJyB3aWR0aD0nMTYuNicgaGVpZ2h0PSczMjAuMycvPjwvZz48L2c+PGc+PGc+PHJlY3QgeD0nMzkuOCcgeT0nMjcyLjInIGZpbGw9JyNFNTM1QUInIHdpZHRoPSczMjAuMycgaGVpZ2h0PScxNi42Jy8+PC9nPjwvZz48Zz48Zz48cmVjdCB4PSczNy45JyB5PSczMTIuMicgdHJhbnNmb3JtPSdtYXRyaXgoLTAuODY2IC0wLjUgMC41IC0wLjg2NiA4My4wNjkzIDY2My4zNDA5KScgZmlsbD0nI0U1MzVBQicgd2lkdGg9JzE4NScgaGVpZ2h0PScxNi42Jy8+PC9nPjwvZz48Zz48Zz48cmVjdCB4PScxNzcuMScgeT0nNzEuMScgdHJhbnNmb3JtPSdtYXRyaXgoLTAuODY2IC0wLjUgMC41IC0wLjg2NiA0NjMuMzQwOSAyODMuMDY5MyknIGZpbGw9JyNFNTM1QUInIHdpZHRoPScxODUnIGhlaWdodD0nMTYuNicvPjwvZz48L2c+PGc+PGc+PHJlY3QgeD0nMTIyLjEnIHk9Jy0xMycgdHJhbnNmb3JtPSdtYXRyaXgoLTAuNSAtMC44NjYgMC44NjYgLTAuNSAxMjYuNzkwMyAyMzIuMTIyMSknIGZpbGw9JyNFNTM1QUInIHdpZHRoPScxNi42JyBoZWlnaHQ9JzE4NScvPjwvZz48L2c+PGc+PGc+PHJlY3QgeD0nMTA5LjYnIHk9JzE1MS42JyB0cmFuc2Zvcm09J21hdHJpeCgtMC41IC0wLjg2NiAwLjg2NiAtMC41IDI2Ni4wODI4IDQ3My4zNzY2KScgZmlsbD0nI0U1MzVBQicgd2lkdGg9JzMyMC4zJyBoZWlnaHQ9JzE2LjYnLz48L2c+PC9nPjxnPjxnPjxyZWN0IHg9JzUyLjUnIHk9JzEwNy41JyBmaWxsPScjRTUzNUFCJyB3aWR0aD0nMTYuNicgaGVpZ2h0PScxODUnLz48L2c+PC9nPjxnPjxnPjxyZWN0IHg9JzMzMC45JyB5PScxMDcuNScgZmlsbD0nI0U1MzVBQicgd2lkdGg9JzE2LjYnIGhlaWdodD0nMTg1Jy8+PC9nPjwvZz48Zz48Zz48cmVjdCB4PScyNjIuNCcgeT0nMjQwLjEnIHRyYW5zZm9ybT0nbWF0cml4KC0wLjUgLTAuODY2IDAuODY2IC0wLjUgMTI2Ljc5NTMgNzE0LjI4NzUpJyBmaWxsPScjRTUzNUFCJyB3aWR0aD0nMTQuNScgaGVpZ2h0PScxNjAuOScvPjwvZz48L2c+PHBhdGgKICAgICAgICBmaWxsPScjRTUzNUFCJwogICAgICAgIGQ9J00zNjkuNSwyOTcuOWMtOS42LDE2LjctMzEsMjIuNC00Ny43LDEyLjhjLTE2LjctOS42LTIyLjQtMzEtMTIuOC00Ny43YzkuNi0xNi43LDMxLTIyLjQsNDcuNy0xMi44IEMzNzMuNSwyNTkuOSwzNzkuMiwyODEuMiwzNjkuNSwyOTcuOScvPjxwYXRoCiAgICAgICAgZmlsbD0nI0U1MzVBQicKICAgICAgICBkPSdNOTAuOSwxMzdjLTkuNiwxNi43LTMxLDIyLjQtNDcuNywxMi44Yy0xNi43LTkuNi0yMi40LTMxLTEyLjgtNDcuN2M5LjYtMTYuNywzMS0yMi40LDQ3LjctMTIuOCBDOTQuOCw5OSwxMDAuNSwxMjAuMyw5MC45LDEzNycvPjxwYXRoCiAgICAgICAgZmlsbD0nI0U1MzVBQicKICAgICAgICBkPSdNMzAuNSwyOTcuOWMtOS42LTE2LjctMy45LTM4LDEyLjgtNDcuN2MxNi43LTkuNiwzOC0zLjksNDcuNywxMi44YzkuNiwxNi43LDMuOSwzOC0xMi44LDQ3LjcgQzYxLjQsMzIwLjMsNDAuMSwzMTQuNiwzMC41LDI5Ny45Jy8+PHBhdGgKICAgICAgICBmaWxsPScjRTUzNUFCJwogICAgICAgIGQ9J00zMDkuMSwxMzdjLTkuNi0xNi43LTMuOS0zOCwxMi44LTQ3LjdjMTYuNy05LjYsMzgtMy45LDQ3LjcsMTIuOGM5LjYsMTYuNywzLjksMzgtMTIuOCw0Ny43IEMzNDAuMSwxNTkuNCwzMTguNywxNTMuNywzMDkuMSwxMzcnLz48cGF0aAogICAgICAgIGZpbGw9JyNFNTM1QUInCiAgICAgICAgZD0nTTIwMCwzOTUuOGMtMTkuMywwLTM0LjktMTUuNi0zNC45LTM0LjljMC0xOS4zLDE1LjYtMzQuOSwzNC45LTM0LjljMTkuMywwLDM0LjksMTUuNiwzNC45LDM0LjkgQzIzNC45LDM4MC4xLDIxOS4zLDM5NS44LDIwMCwzOTUuOCcvPjxwYXRoCiAgICAgICAgZmlsbD0nI0U1MzVBQicKICAgICAgICBkPSdNMjAwLDc0Yy0xOS4zLDAtMzQuOS0xNS42LTM0LjktMzQuOWMwLTE5LjMsMTUuNi0zNC45LDM0LjktMzQuOWMxOS4zLDAsMzQuOSwxNS42LDM0LjksMzQuOSBDMjM0LjksNTguNCwyMTkuMyw3NCwyMDAsNzQnLz48L2c+PC9zdmc+">
        <bpmn:documentation>Looks up basic destination-country profile data (name, capital, currency, languages) from the public Countries GraphQL API, used to pick the right paperwork/ruleset.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="io.camunda:connector-graphql:1" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="noAuth" target="authentication.type" />
            <zeebe:input source="post" target="graphql.method" />
            <zeebe:input source="https://countries.trevorblades.com/" target="graphql.url" />
            <zeebe:input source="=false" target="graphql.storeResponse" />
            <zeebe:input source="query GetCountry($code: ID!) {&#10;  country(code: $code) {&#10;    name&#10;    capital&#10;    currency&#10;    languages { name }&#10;  }&#10;}" target="graphql.query" />
            <zeebe:input source="={code: fromAi(toolCall.countryCode, &#34;The ISO-3166 alpha-2 code for the destination country mentioned in the shipment notes (e.g. BR for Brazil).&#34;, &#34;string&#34;)}" target="graphql.variables" />
            <zeebe:input source="=20" target="graphql.connectionTimeoutInSeconds" />
            <zeebe:input source="=20" target="graphql.readTimeoutInSeconds" />
          </zeebe:ioMapping>
          <zeebe:taskHeaders>
            <zeebe:header key="elementTemplateVersion" value="9" />
            <zeebe:header key="elementTemplateId" value="io.camunda.connectors.GraphQL.v1" />
            <zeebe:header key="resultExpression" value="={&#10;  countryInfo: response.body.data.country,&#10;  toolCallResult: if (response.body.data.country != null) then response.body.data.country else &#34;No country profile found for the requested destination code.&#34;&#10;}" />
            <zeebe:header key="retryBackoff" value="PT5S" />
          </zeebe:taskHeaders>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      <bpmn:serviceTask id="ComputeComplianceScore" name="Compute compliance score" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13" zeebe:modelerTemplateIcon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjAzMzUgOC45OTk5N0MxNy4wMzM1IDEzLjQ0NzUgMTMuNDI4MSAxNy4wNTI5IDguOTgwNjUgMTcuMDUyOUM0LjUzMzE2IDE3LjA1MjkgMC45Mjc3NjUgMTMuNDQ3NSAwLjkyNzc2NSA4Ljk5OTk3QzAuOTI3NzY1IDQuNTUyNDggNC41MzMxNiAwLjk0NzA4MyA4Ljk4MDY1IDAuOTQ3MDgzQzEzLjQyODEgMC45NDcwODMgMTcuMDMzNSA0LjU1MjQ4IDE3LjAzMzUgOC45OTk5N1oiIGZpbGw9IiM1MDU1NjIiLz4KPHBhdGggZD0iTTQuOTMxMjYgMTQuMTU3MUw2Ljc4MTA2IDMuNzE0NzFIMTAuMTM3NUMxMS4xOTE3IDMuNzE0NzEgMTEuOTgyNCAzLjk4MzIzIDEyLjUwOTUgNC41MjAyN0MxMy4wNDY1IDUuMDQ3MzYgMTMuMzE1IDUuNzMzNTggMTMuMzE1IDYuNTc4OTJDMTMuMzE1IDcuNDQ0MTQgMTMuMDcxNCA4LjE1NTIyIDEyLjU4NDEgOC43MTIxNUMxMi4xMDY3IDkuMjU5MTMgMTEuNDU1MyA5LjYzNzA1IDEwLjYyOTggOS44NDU5TDEyLjA2MTkgMTQuMTU3MUgxMC4zMzE1TDkuMDMzNjQgMTAuMDI0OUg3LjI0MzUxTDYuNTEyNTQgMTQuMTU3MUg0LjkzMTI2Wk03LjQ5NzExIDguNTkyODFIOS4yNDI0OEM5Ljk5ODMyIDguNTkyODEgMTAuNTkwMSA4LjQyMzc0IDExLjAxNzcgOC4wODU2MUMxMS40NTUzIDcuNzM3NTMgMTEuNjc0MSA3LjI2NTEzIDExLjY3NDEgNi42Njg0MkMxMS42NzQxIDYuMTkxMDYgMTEuNTI0OSA1LjgxODExIDExLjIyNjUgNS41NDk1OUMxMC45MjgyIDUuMjcxMTMgMTAuNDU1OCA1LjEzMTkgOS44MDkzNiA1LjEzMTlIOC4xMDg3NEw3LjQ5NzExIDguNTkyODFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K">
        <bpmn:documentation>Legacy scoring engine (public demo REST endpoint on api.mathjs.org expression evaluator standing in for a real enterprise compliance-scoring system). Confirms the compliance score via an external calculation service.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="io.camunda:http-json:1" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="=false" target="ignoreNullValues" />
            <zeebe:input source="noAuth" target="authentication.type" />
            <zeebe:input source="GET" target="method" />
            <zeebe:input source="https://api.mathjs.org/v4/" target="url" />
            <zeebe:input source="={&#10;  expr: string(fromAi(toolCall.intA, &#34;The character length of the gene symbol confirmed by VerifyGeneticMarker (e.g. length of &#39;TP53&#39; = 4). Compute this yourself from that prior tool result.&#34;, &#34;number&#34;)) + &#34;+&#34; + string(fromAi(toolCall.intB, &#34;The character length of the destination capital city name confirmed by CheckDestinationCountry (e.g. length of &#39;Brasília&#39; = 8). Compute this yourself from that prior tool result.&#34;, &#34;number&#34;))&#10;}" target="queryParameters" />
            <zeebe:input source="=false" target="storeResponse" />
            <zeebe:input source="=20" target="connectionTimeoutInSeconds" />
            <zeebe:input source="=20" target="readTimeoutInSeconds" />
          </zeebe:ioMapping>
          <zeebe:taskHeaders>
            <zeebe:header key="elementTemplateVersion" value="13" />
            <zeebe:header key="elementTemplateId" value="io.camunda.connectors.HttpJson.v2" />
            <zeebe:header key="resultExpression" value="={&#10;  complianceScore: response.body,&#10;  toolCallResult: &#34;Legacy scoring engine (REST) confirmed compliance score: &#34; + string(response.body)&#10;}" />
            <zeebe:header key="retryBackoff" value="PT5S" />
          </zeebe:taskHeaders>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      <bpmn:scriptTask id="RecordComplianceDecision" name="Record compliance decision">
        <bpmn:documentation>Captures the agent's clearance decision as a process variable</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:script expression="=decision" resultVariable="decision" />
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.decision, &#34;The clearance decision: &#39;cleared&#39; if the compliance score is even, &#39;flagged-for-review&#39; if it&#39;s odd.&#34;, &#34;string&#34;)" target="decision" />
            <zeebe:output source="=decision" target="decision" />
            <zeebe:output source="=decision" target="toolCallResult" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:scriptTask>
    </bpmn:adHocSubProcess>
    <bpmn:sequenceFlow id="Flow_ToEnd" sourceRef="ComplianceCheckAgent" targetRef="Gateway_04cky9q" />
    <bpmn:endEvent id="EndEvent_ComplianceDecisionSent" name="Compliance verified">
      <bpmn:incoming>Flow_0pxvkqm</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:serviceTask id="NotifyExportTeam" name="Notify export team" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13" zeebe:modelerTemplateIcon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjAzMzUgOC45OTk5N0MxNy4wMzM1IDEzLjQ0NzUgMTMuNDI4MSAxNy4wNTI5IDguOTgwNjUgMTcuMDUyOUM0LjUzMzE2IDE3LjA1MjkgMC45Mjc3NjUgMTMuNDQ3NSAwLjkyNzc2NSA4Ljk5OTk3QzAuOTI3NzY1IDQuNTUyNDggNC41MzMxNiAwLjk0NzA4MyA4Ljk4MDY1IDAuOTQ3MDgzQzEzLjQyODEgMC45NDcwODMgMTcuMDMzNSA0LjU1MjQ4IDE3LjAzMzUgOC45OTk5N1oiIGZpbGw9IiM1MDU1NjIiLz4KPHBhdGggZD0iTTQuOTMxMjYgMTQuMTU3MUw2Ljc4MTA2IDMuNzE0NzFIMTAuMTM3NUMxMS4xOTE3IDMuNzE0NzEgMTEuOTgyNCAzLjk4MzIzIDEyLjUwOTUgNC41MjAyN0MxMy4wNDY1IDUuMDQ3MzYgMTMuMzE1IDUuNzMzNTggMTMuMzE1IDYuNTc4OTJDMTMuMzE1IDcuNDQ0MTQgMTMuMDcxNCA4LjE1NTIyIDEyLjU4NDEgOC43MTIxNUMxMi4xMDY3IDkuMjU5MTMgMTEuNDU1MyA5LjYzNzA1IDEwLjYyOTggOS44NDU5TDEyLjA2MTkgMTQuMTU3MUgxMC4zMzE1TDkuMDMzNjQgMTAuMDI0OUg3LjI0MzUxTDYuNTEyNTQgMTQuMTU3MUg0LjkzMTI2Wk03LjQ5NzExIDguNTkyODFIOS4yNDI0OEM5Ljk5ODMyIDguNTkyODEgMTAuNTkwMSA4LjQyMzc0IDExLjAxNzcgOC4wODU2MUMxMS40NTUzIDcuNzM3NTMgMTEuNjc0MSA3LjI2NTEzIDExLjY3NDEgNi42Njg0MkMxMS42NzQxIDYuMTkxMDYgMTEuNTI0OSA1LjgxODExIDExLjIyNjUgNS41NDk1OUMxMC45MjgyIDUuMjcxMTMgMTAuNDU1OCA1LjEzMTkgOS44MDkzNiA1LjEzMTlIOC4xMDg3NEw3LjQ5NzExIDguNTkyODFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K">
      <bpmn:documentation>Posts the clearance decision to httpbin.io's echo endpoint (a stand-in for a real notification channel)</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="io.camunda:http-json:1" retries="2" />
        <zeebe:ioMapping>
          <zeebe:input source="noAuth" target="authentication.type" />
          <zeebe:input source="POST" target="method" />
          <zeebe:input source="https://httpbin.io/post" target="url" />
          <zeebe:input source="=false" target="storeResponse" />
          <zeebe:input source="=false" target="followRedirects" />
          <zeebe:input source="=20" target="connectionTimeoutInSeconds" />
          <zeebe:input source="=20" target="readTimeoutInSeconds" />
          <zeebe:input source="={&#10;  marker: markerRecord,&#10;  destination: countryInfo,&#10;  complianceScore: complianceScore,&#10;  decision: decision&#10;}" target="body" />
          <zeebe:input source="=false" target="ignoreNullValues" />
        </zeebe:ioMapping>
        <zeebe:taskHeaders>
          <zeebe:header key="elementTemplateVersion" value="13" />
          <zeebe:header key="elementTemplateId" value="io.camunda.connectors.HttpJson.v2" />
          <zeebe:header key="resultExpression" value="={&#10;  notificationReceipt: response.body,&#10;  toolCallResult: &#34;Export team notified via httpbin.io echo.&#34;&#10;}" />
          <zeebe:header key="retryBackoff" value="PT5S" />
        </zeebe:taskHeaders>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_031tp0p</bpmn:incoming>
      <bpmn:outgoing>Flow_0pxvkqm</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_0pxvkqm" sourceRef="NotifyExportTeam" targetRef="EndEvent_ComplianceDecisionSent" />
    <bpmn:exclusiveGateway id="Gateway_04cky9q" name="All clear?" default="Flow_0tc2859">
      <bpmn:incoming>Flow_ToEnd</bpmn:incoming>
      <bpmn:outgoing>Flow_031tp0p</bpmn:outgoing>
      <bpmn:outgoing>Flow_0tc2859</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_031tp0p" name="yes" sourceRef="Gateway_04cky9q" targetRef="NotifyExportTeam">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">=decision = "cleared"</bpmn:conditionExpression>
    </bpmn:sequenceFlow>
    <bpmn:sequenceFlow id="Flow_0tc2859" name="no" sourceRef="Gateway_04cky9q" targetRef="HumanTask_ClarifyComplianceIssues" />
    <bpmn:userTask id="HumanTask_ClarifyComplianceIssues" name="Clarify compliance issues">
      <bpmn:extensionElements>
        <zeebe:userTask />
        <zeebe:formDefinition formId="seed-export-compliance-review" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0tc2859</bpmn:incoming>
      <bpmn:outgoing>Flow_104wevc</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:endEvent id="Event_1qet18i" name="Compliance manually decided">
      <bpmn:incoming>Flow_104wevc</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_104wevc" sourceRef="HumanTask_ClarifyComplianceIssues" targetRef="Event_1qet18i" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="seed-export-compliance-agent">
      <bpmndi:BPMNShape id="StartEvent_ShipmentReady_di" bpmnElement="StartEvent_ShipmentReady">
        <dc:Bounds x="162" y="142" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="142" y="185" width="78" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ComplianceCheckAgent_di" bpmnElement="ComplianceCheckAgent" isExpanded="true">
        <dc:Bounds x="280" y="80" width="330" height="240" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="VerifyGeneticMarker_di" bpmnElement="VerifyGeneticMarker">
        <dc:Bounds x="330" y="110" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="CheckDestinationCountry_di" bpmnElement="CheckDestinationCountry">
        <dc:Bounds x="450" y="110" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ComputeComplianceScore_di" bpmnElement="ComputeComplianceScore">
        <dc:Bounds x="330" y="210" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="RecordComplianceDecision_di" bpmnElement="RecordComplianceDecision">
        <dc:Bounds x="450" y="210" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_ComplianceDecisionSent_di" bpmnElement="EndEvent_ComplianceDecisionSent">
        <dc:Bounds x="902" y="142" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="892" y="185" width="59" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="NotifyExportTeam_di" bpmnElement="NotifyExportTeam">
        <dc:Bounds x="760" y="120" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_04cky9q_di" bpmnElement="Gateway_04cky9q" isMarkerVisible="true">
        <dc:Bounds x="665" y="135" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="667" y="113" width="45" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_06m5r50_di" bpmnElement="HumanTask_ClarifyComplianceIssues">
        <dc:Bounds x="760" y="220" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1qet18i_di" bpmnElement="Event_1qet18i">
        <dc:Bounds x="912" y="242" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="887" y="285" width="86" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_ToAgent_di" bpmnElement="Flow_ToAgent">
        <di:waypoint x="198" y="160" />
        <di:waypoint x="280" y="160" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToEnd_di" bpmnElement="Flow_ToEnd">
        <di:waypoint x="610" y="160" />
        <di:waypoint x="665" y="160" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0pxvkqm_di" bpmnElement="Flow_0pxvkqm">
        <di:waypoint x="860" y="160" />
        <di:waypoint x="902" y="160" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_031tp0p_di" bpmnElement="Flow_031tp0p">
        <di:waypoint x="715" y="160" />
        <di:waypoint x="760" y="160" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="729" y="142" width="18" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0tc2859_di" bpmnElement="Flow_0tc2859">
        <di:waypoint x="690" y="185" />
        <di:waypoint x="690" y="260" />
        <di:waypoint x="760" y="260" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="699" y="219" width="13" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_104wevc_di" bpmnElement="Flow_104wevc">
        <di:waypoint x="860" y="260" />
        <di:waypoint x="912" y="260" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`,ri="Camunda Cloud",ii="8.10.0",oi={name:"Camunda Web Modeler",version:"9b5d5ef"},si=19,ai="seed-export-shipment-ready",ci=[{text:"# Use a predefined scenario...",type:"text",layout:{row:"Row_04pl1rt",columns:null},id:"Field_0a6kzzq"},{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Use pre-defined sceanrio - to use leave Shipment notes below blank.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{text:`The following shipments notes are used:
* Likely cleared: SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53.
* Likely flagged: SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1.`,type:"text",layout:{row:"Row_1h31mub",columns:null},id:"Field_0j1vwd9"},{text:"# ...or hand in your own data",type:"text",layout:{row:"Row_1wu4opr",columns:null},id:"Field_12u5gzd"},{label:"Shipment notes",description:"If set, overrides the scenario above. Leave blank to use the scenario selected above. The agent reads this to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],li="default",di={executionPlatform:ri,executionPlatformVersion:ii,exporter:oi,schemaVersion:si,id:ai,components:ci,type:li},ui="Camunda Cloud",mi="8.10.0",pi={name:"Camunda Web Modeler",version:"9b5d5ef"},gi=19,hi="seed-export-compliance-review",bi=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],fi="default",yi={executionPlatform:ui,executionPlatformVersion:mi,exporter:pi,schemaVersion:gi,id:hi,components:bi,type:fi},Mi=Object.assign({"./prompts/system-prompt.md":Xr,"./prompts/user-prompt.md":ei}),wi=Fe(Object.fromEntries(Object.entries(Mi).map(([e,n])=>[cr(e),n.trimEnd()]))),Sn="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",_i="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",xi=`async (job) => {
  const v = job.variables;
  const notes = (v.shipmentNotes || "").trim() || (v.scenario || "");

  // Turn 1 — read the notes and work out the tool arguments. This is what
  // 'fromAi(toolCall.geneMarker, ...)' asks a real model for.
  if (v.markerRecord === undefined) {
    const marker = (notes.match(/reference code\\s+([A-Za-z0-9]+)/i) || [])[1];
    const countries = { brazil: "BR", germany: "DE", japan: "JP", india: "IN", kenya: "KE" };
    const hit = Object.keys(countries).find((c) => notes.toLowerCase().includes(c));
    return {
      variables: {
        geneMarker: marker ? marker.toUpperCase() : "",
        countryCode: hit ? countries[hit] : "",
      },
      activateElements: [{ elementId: "VerifyGeneticMarker" }],
    };
  }

  // Turn 2 — look up the destination country.
  if (v.countryInfo === undefined) {
    return { activateElements: [{ elementId: "CheckDestinationCountry" }] };
  }

  // A lookup that came back empty can't be scored — send it to a human.
  if (!v.markerRecord || !v.countryInfo) {
    if (!v.decision) {
      return {
        variables: { decision: "flagged-for-review" },
        activateElements: [{ elementId: "RecordComplianceDecision" }],
      };
    }
    return { completionConditionFulfilled: true };
  }

  // Turn 3 — hand the legacy scoring engine its two numbers.
  if (v.complianceScore === undefined || v.complianceScore === null) {
    return {
      variables: {
        intA: String(v.markerRecord.geneSymbol || "").length,
        intB: String(v.countryInfo.capital || "").length,
      },
      activateElements: [{ elementId: "ComputeComplianceScore" }],
    };
  }

  // Turn 4 — recommend a decision. (A live model recommends here instead; the
  // handler below is what actually decides.)
  if (!v.decision) {
    return {
      variables: { decisionRecommendation: Number(v.complianceScore) % 2 === 0 ? "cleared" : "flagged-for-review" },
      activateElements: [{ elementId: "RecordComplianceDecision" }],
    };
  }

  return { completionConditionFulfilled: true };
}`,Ni=`async (job, { text, sleep, trace }) => {
  // Stands in for the JDBC connector querying UCSC's public hg38 reference
  // genome. No database in a browser, so look the marker up in a small table.
  const marker = text("geneMarker");
  const table = {
    TP53:  { refSeqId: "NM_000546.6", chrom: "chr17", geneSymbol: "TP53" },
    BRCA1: { refSeqId: "NM_007294.4", chrom: "chr17", geneSymbol: "BRCA1" },
    BRCA2: { refSeqId: "NM_000059.4", chrom: "chr13", geneSymbol: "BRCA2" },
    EGFR:  { refSeqId: "NM_005228.5", chrom: "chr7",  geneSymbol: "EGFR" },
  };

  await sleep(300);
  const record = table[marker] || null;
  trace(record ? "found " + marker : "no record for " + JSON.stringify(marker));

  return {
    markerRecord: record,
    toolCallResult: record || "No matching reference-genome record found.",
  };
}`,vi=`async (job, { text, sleep, trace }) => {
  // Stands in for the GraphQL connector calling countries.trevorblades.com.
  const code = text("countryCode");
  const table = {
    BR: { name: "Brazil",  capital: "Brasília",  currency: "BRL" },
    DE: { name: "Germany", capital: "Berlin",    currency: "EUR" },
    JP: { name: "Japan",   capital: "Tokyo",     currency: "JPY" },
    IN: { name: "India",   capital: "New Delhi", currency: "INR" },
    KE: { name: "Kenya",   capital: "Nairobi",   currency: "KES" },
  };

  await sleep(300);
  const country = table[code] || null;
  trace(country ? country.name : "no profile for " + JSON.stringify(code));

  return {
    countryInfo: country,
    toolCallResult: country || "No country profile found for that destination code.",
  };
}`,Ii=`async (job, { num, sleep }) => {
  // Stands in for the REST connector calling api.mathjs.org — the "legacy
  // scoring engine". It adds the two numbers the agent worked out.
  const a = num("intA");
  const b = num("intB");

  await sleep(300);
  const score = a + b;

  return {
    complianceScore: score,
    toolCallResult: "Legacy scoring engine (REST) confirmed compliance score: " + score,
  };
}`,Ti=`async (job, { text, trace }) => {
  // The script task inside the agent — and the place where policy beats the
  // model. The score's parity decides; a recommendation that disagrees is
  // overridden and the disagreement is logged.
  const score = Number(job.variables.complianceScore);
  const decision = score % 2 === 0 ? "cleared" : "flagged-for-review";
  const recommended = text("decisionRecommendation", "");

  if (recommended && recommended !== decision) {
    trace("model recommended '" + recommended + "' — policy says '" + decision + "'; policy wins");
  }

  return { decision: decision, toolCallResult: decision };
}`,ki=`async (job, { sleep }) => {
  // Stands in for the REST connector posting to httpbin.io.
  const v = job.variables;
  await sleep(300);

  return {
    notificationReceipt: {
      marker: v.markerRecord,
      destination: v.countryInfo,
      complianceScore: v.complianceScore,
      decision: v.decision,
    },
    toolCallResult: "Export team notified.",
  };
}`,ji={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:ti,forms:{"seed-export-shipment-ready":di,"seed-export-compliance-review":yi},seed:{scenario:Sn,shipmentNotes:""},scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:Sn,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:_i,shipmentNotes:""}}],scriptedAgent:xi,templates:wi,tour:ni,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:Ni},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:vi},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:Ii},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:Ti},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:ki}]},Ei=`<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_16mvwsb" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">
  <bpmn:process id="process1" name="Process 1" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1" name="Order received">
      <bpmn:outgoing>Flow_1mpm94e</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_1mpm94e" sourceRef="StartEvent_1" targetRef="Activity_0tw2fu0" />
    <bpmn:sequenceFlow id="Flow_0udsae3" sourceRef="Activity_0tw2fu0" targetRef="Activity_1ppsbgi" />
    <bpmn:sequenceFlow id="Flow_0g2bnlp" sourceRef="Activity_1ppsbgi" targetRef="Activity_08pg6im" />
    <bpmn:endEvent id="Event_0f9sbko" name="Order shipped">
      <bpmn:incoming>Flow_1asktip</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_1asktip" sourceRef="Activity_08pg6im" targetRef="Event_0f9sbko" />
    <bpmn:serviceTask id="Activity_0tw2fu0" name="Check inventory">
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="check-inventory" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1mpm94e</bpmn:incoming>
      <bpmn:outgoing>Flow_0udsae3</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_1ppsbgi" name="Charge payment method">
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="charge-payment" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0udsae3</bpmn:incoming>
      <bpmn:outgoing>Flow_0g2bnlp</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:serviceTask id="Activity_08pg6im" name="Ship items">
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="ship-items" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0g2bnlp</bpmn:incoming>
      <bpmn:outgoing>Flow_1asktip</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:textAnnotation id="TextAnnotation_11gkedc">
      <bpmn:text>To run a process instance, click on the |&gt; (play) icon in the toolbar at the bottom of the modeler window.</bpmn:text>
    </bpmn:textAnnotation>
    <bpmn:association id="Association_18730y7" associationDirection="None" sourceRef="StartEvent_1" targetRef="TextAnnotation_11gkedc" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="process1">
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="182" y="212" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="164" y="255" width="73" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0f9sbko_di" bpmnElement="Event_0f9sbko">
        <dc:Bounds x="752" y="212" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="735" y="255" width="70" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0k3wkox_di" bpmnElement="Activity_0tw2fu0">
        <dc:Bounds x="270" y="190" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_09v1se8_di" bpmnElement="Activity_1ppsbgi">
        <dc:Bounds x="430" y="190" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0eyyzvu_di" bpmnElement="Activity_08pg6im">
        <dc:Bounds x="590" y="190" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_18730y7_di" bpmnElement="Association_18730y7">
        <di:waypoint x="214" y="219" />
        <di:waypoint x="268" y="135" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1mpm94e_di" bpmnElement="Flow_1mpm94e">
        <di:waypoint x="218" y="230" />
        <di:waypoint x="270" y="230" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0udsae3_di" bpmnElement="Flow_0udsae3">
        <di:waypoint x="370" y="230" />
        <di:waypoint x="430" y="230" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0g2bnlp_di" bpmnElement="Flow_0g2bnlp">
        <di:waypoint x="530" y="230" />
        <di:waypoint x="590" y="230" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1asktip_di" bpmnElement="Flow_1asktip">
        <di:waypoint x="690" y="230" />
        <di:waypoint x="752" y="230" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="TextAnnotation_11gkedc_di" bpmnElement="TextAnnotation_11gkedc">
        <dc:Bounds x="240" y="80" width="218" height="55" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`,Di=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Si=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,Ai=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Li={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:Ei,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Di},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Si},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Ai}]},Ci=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_RocketLaunch" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:process id="rocket-launch" name="Rocket Launch" isExecutable="true">\r
    <bpmn:startEvent id="StartEvent_1" name="Launch sequence initiated">\r
      <bpmn:outgoing>Flow_Start_Launch</bpmn:outgoing>\r
    </bpmn:startEvent>\r
    <bpmn:sequenceFlow id="Flow_Start_Launch" sourceRef="StartEvent_1" targetRef="Activity_LaunchRocket" />\r
    <bpmn:serviceTask id="Activity_LaunchRocket" name="Launch rocket">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="launch-rocket" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_Start_Launch</bpmn:incoming>\r
      <bpmn:outgoing>Flow_Launch_End</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:endEvent id="EndEvent_MissionComplete" name="Mission complete">\r
      <bpmn:incoming>Flow_Launch_End</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_Launch_End" sourceRef="Activity_LaunchRocket" targetRef="EndEvent_MissionComplete" />\r
    <bpmn:textAnnotation id="TextAnnotation_1">\r
      <bpmn:text>The smallest possible example: one service task, based on 'camunda-8-get-started/1-rocket-launch'.</bpmn:text>\r
    </bpmn:textAnnotation>\r
    <bpmn:association id="Association_1" associationDirection="None" sourceRef="StartEvent_1" targetRef="TextAnnotation_1" />\r
  </bpmn:process>\r
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="rocket-launch">\r
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\r
        <dc:Bounds x="182" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="150" y="255" width="100" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_LaunchRocket_di" bpmnElement="Activity_LaunchRocket">\r
        <dc:Bounds x="270" y="190" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="EndEvent_MissionComplete_di" bpmnElement="EndEvent_MissionComplete">\r
        <dc:Bounds x="432" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="410" y="255" width="80" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNEdge id="Flow_Start_Launch_di" bpmnElement="Flow_Start_Launch">\r
        <di:waypoint x="218" y="230" />\r
        <di:waypoint x="270" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_Launch_End_di" bpmnElement="Flow_Launch_End">\r
        <di:waypoint x="370" y="230" />\r
        <di:waypoint x="432" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Association_1_di" bpmnElement="Association_1">\r
        <di:waypoint x="214" y="219" />\r
        <di:waypoint x="268" y="135" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNShape id="TextAnnotation_1_di" bpmnElement="TextAnnotation_1">\r
        <dc:Bounds x="240" y="80" width="230" height="55" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
    </bpmndi:BPMNPlane>\r
  </bpmndi:BPMNDiagram>\r
</bpmn:definitions>\r
`,zi=`async (job, { text, num, sleep, trace }) => {
  // The starting variables arrive on 'job.variables'.
  const missionName = text("missionName", "Apollo 11");
  const destination = text("destination", "the Moon");
  const fuelLevel = num("fuelLevel", 100);

  // Stands in for a job worker on a real cluster calling out to mission
  // control (or, more realistically, doing the actual work that the task name
  // implies — here, running the launch sequence and burning fuel).
  await sleep(600);

  if (fuelLevel < 50) {
    trace(\`\${missionName} scrubbed — not enough fuel (\${fuelLevel}%)\`);
    // Whatever you return is merged onto the process instance.
    return { missionStatus: "scrubbed", fuelLevel };
  }

  const fuelAfterLaunch = fuelLevel - 25;
  trace(\`\${missionName} launched toward \${destination}\`);

  return {
    missionStatus: "launched",
    destination,
    fuelLevel: fuelAfterLaunch,
    missionResult: \`Crew \${missionName} launched toward \${destination}! Fuel remaining: \${fuelAfterLaunch}%.\`,
  };
}`,Pi={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:Ci,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:zi}]},Oi=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_OrderBoundaryEvents" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:process id="order-process-boundary-events" name="Order process with boundary events" isExecutable="true">\r
    <bpmn:startEvent id="StartEvent_1" name="Order received">\r
      <bpmn:outgoing>Flow_1mpm94e</bpmn:outgoing>\r
    </bpmn:startEvent>\r
    <bpmn:sequenceFlow id="Flow_1mpm94e" sourceRef="StartEvent_1" targetRef="Activity_0tw2fu0" />\r
    <bpmn:sequenceFlow id="Flow_0udsae3" sourceRef="Activity_0tw2fu0" targetRef="Activity_1ppsbgi" />\r
    <bpmn:sequenceFlow id="Flow_0g2bnlp" sourceRef="Activity_1ppsbgi" targetRef="Activity_08pg6im" />\r
    <bpmn:endEvent id="Event_0f9sbko" name="Order shipped">\r
      <bpmn:incoming>Flow_1asktip</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_1asktip" sourceRef="Activity_08pg6im" targetRef="Event_0f9sbko" />\r
    <bpmn:serviceTask id="Activity_0tw2fu0" name="Check inventory">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="check-inventory" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_1mpm94e</bpmn:incoming>\r
      <bpmn:outgoing>Flow_0udsae3</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:serviceTask id="Activity_1ppsbgi" name="Charge payment method">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="charge-payment" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_0udsae3</bpmn:incoming>\r
      <bpmn:outgoing>Flow_0g2bnlp</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:serviceTask id="Activity_08pg6im" name="Ship items">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="ship-items" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_0g2bnlp</bpmn:incoming>\r
      <bpmn:outgoing>Flow_1asktip</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <!--\r
      The two error boundary events below are adapted from\r
      camunda-8-get-started's order-process-boundary-events.bpmn. That source\r
      leaves \`errorRef\` unset (any BPMN error is meant to match); this repo's\r
      engine requires an explicit \`errorRef\` to deploy (see the two\r
      \`bpmn:error\` declarations below), so each is now pinned to its own error\r
      — still a one-line change from the source model, and the same\r
      catch-all-by-code intent. A job handler dispatched through this\r
      framework's normal drive loop can't trigger this path on its own\r
      (dispatchRound only supports complete/fail, not throwError — see\r
      docs/engine-coverage.md); the "Charge payment" task is wired to the\r
      manual force-error control in index.ts/ExampleRunner instead.\r
    -->\r
    <bpmn:boundaryEvent id="Event_1g3k0ac" name="Item not in stock" attachedToRef="Activity_0tw2fu0">\r
      <bpmn:outgoing>Flow_07n2i4i</bpmn:outgoing>\r
      <bpmn:errorEventDefinition id="ErrorEventDefinition_1s0nas9" errorRef="Error_OutOfStock" />\r
    </bpmn:boundaryEvent>\r
    <bpmn:endEvent id="Event_17fdijx" name="Order not shipped">\r
      <bpmn:incoming>Flow_07n2i4i</bpmn:incoming>\r
      <bpmn:incoming>Flow_01t7961</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_07n2i4i" sourceRef="Event_1g3k0ac" targetRef="Event_17fdijx" />\r
    <bpmn:sequenceFlow id="Flow_01t7961" name="Charge failed" sourceRef="Event_0arm3xk" targetRef="Event_17fdijx" />\r
    <bpmn:boundaryEvent id="Event_0arm3xk" name="Card declined" attachedToRef="Activity_1ppsbgi">\r
      <bpmn:outgoing>Flow_01t7961</bpmn:outgoing>\r
      <bpmn:errorEventDefinition id="ErrorEventDefinition_0oh6ujx" errorRef="Error_ChargeDeclined" />\r
    </bpmn:boundaryEvent>\r
    <!--\r
      New addition beyond the get-started source: an interrupting timer\r
      boundary event on "Ship items", so this example also exercises a timer\r
      firing while a job is waiting — the other new-territory case this task\r
      calls for. \`tools/probe/fixtures/timer.bpmn\` confirms \`advanceTime\`\r
      fires a plain intermediate timer; boundary timers are the same\r
      construct attached to an activity instead of sitting inline.\r
    -->\r
    <bpmn:boundaryEvent id="Event_ShipDelayTimer" name="Shipping delayed" attachedToRef="Activity_08pg6im">\r
      <bpmn:outgoing>Flow_ShipDelayed</bpmn:outgoing>\r
      <bpmn:timerEventDefinition id="TimerEventDefinition_ShipDelay">\r
        <bpmn:timeDuration xsi:type="bpmn:tFormalExpression">PT8S</bpmn:timeDuration>\r
      </bpmn:timerEventDefinition>\r
    </bpmn:boundaryEvent>\r
    <bpmn:endEvent id="Event_ShipDelayed" name="Shipment delayed — escalated">\r
      <bpmn:incoming>Flow_ShipDelayed</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_ShipDelayed" sourceRef="Event_ShipDelayTimer" targetRef="Event_ShipDelayed" />\r
  </bpmn:process>\r
  <bpmn:error id="Error_OutOfStock" name="Item not in stock" errorCode="OUT_OF_STOCK" />\r
  <bpmn:error id="Error_ChargeDeclined" name="Card declined" errorCode="CHARGE_DECLINED" />\r
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="order-process-boundary-events">\r
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\r
        <dc:Bounds x="182" y="102" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="164" y="145" width="73" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_0f9sbko_di" bpmnElement="Event_0f9sbko">\r
        <dc:Bounds x="752" y="102" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="735" y="145" width="70" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_0k3wkox_di" bpmnElement="Activity_0tw2fu0">\r
        <dc:Bounds x="270" y="80" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_09v1se8_di" bpmnElement="Activity_1ppsbgi">\r
        <dc:Bounds x="430" y="80" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_0eyyzvu_di" bpmnElement="Activity_08pg6im">\r
        <dc:Bounds x="590" y="80" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_17fdijx_di" bpmnElement="Event_17fdijx">\r
        <dc:Bounds x="752" y="242" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="726" y="285" width="89" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_1w0xsao_di" bpmnElement="Event_1g3k0ac">\r
        <dc:Bounds x="322" y="142" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="349" y="185" width="81" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_14i8hvp_di" bpmnElement="Event_0arm3xk">\r
        <dc:Bounds x="492" y="142" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="475" y="185" width="70" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_ShipDelayTimer_di" bpmnElement="Event_ShipDelayTimer">\r
        <dc:Bounds x="652" y="142" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="630" y="185" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_ShipDelayed_di" bpmnElement="Event_ShipDelayed">\r
        <dc:Bounds x="922" y="242" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="899" y="285" width="82" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNEdge id="Flow_1mpm94e_di" bpmnElement="Flow_1mpm94e">\r
        <di:waypoint x="218" y="120" />\r
        <di:waypoint x="270" y="120" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_1asktip_di" bpmnElement="Flow_1asktip">\r
        <di:waypoint x="690" y="120" />\r
        <di:waypoint x="752" y="120" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_0udsae3_di" bpmnElement="Flow_0udsae3">\r
        <di:waypoint x="370" y="120" />\r
        <di:waypoint x="430" y="120" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_0g2bnlp_di" bpmnElement="Flow_0g2bnlp">\r
        <di:waypoint x="530" y="120" />\r
        <di:waypoint x="590" y="120" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_07n2i4i_di" bpmnElement="Flow_07n2i4i">\r
        <di:waypoint x="340" y="178" />\r
        <di:waypoint x="340" y="260" />\r
        <di:waypoint x="752" y="260" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_01t7961_di" bpmnElement="Flow_01t7961">\r
        <di:waypoint x="510" y="178" />\r
        <di:waypoint x="510" y="260" />\r
        <di:waypoint x="752" y="260" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="517" y="185" width="66" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_ShipDelayed_di" bpmnElement="Flow_ShipDelayed">\r
        <di:waypoint x="670" y="178" />\r
        <di:waypoint x="670" y="330" />\r
        <di:waypoint x="922" y="330" />\r
        <di:waypoint x="922" y="260" />\r
      </bpmndi:BPMNEdge>\r
    </bpmndi:BPMNPlane>\r
  </bpmndi:BPMNDiagram>\r
</bpmn:definitions>\r
`,Bi=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Ri=`async (job, { num, sleep }) => {
  // This job is held back manually (see index.ts's manualControl) rather
  // than dispatched here — the runner offers a choice between completing it
  // (this code, via the "Complete normally" button) and throwing a BPMN
  // error on it directly (the "Simulate: card declined" button), which is
  // what actually routes the token through the "Card declined" boundary
  // event below rather than just this handler failing.
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,Ui=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Fi={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:Oi,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Bi},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Ri,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Ui,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},Be=[Pi,ji,Li,Fi];function cn(){return"/pr-preview/pr-62/"}function Yi(e){const n=cn();return e.startsWith(n)?"/"+e.slice(n.length):e}function Qi(e=location.pathname){const t=Yi(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function $i(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function Gi(){return cn()}function An(e){return`${cn()}examples/${encodeURIComponent(e)}`}function Ln(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function Cn(){return{route:Qi(),embed:$i()}}function Ji(){const[e,n]=b.useState(Cn);return b.useEffect(()=>{const t=()=>n(Cn());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const Hi="web-demo-framework:height",Vi="web-demo-framework:request-height";function Zi(e){return{type:Hi,height:Math.ceil(e)}}const zn="embed-height-auto";function Wi(e){b.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(zn);let t=-1;const r=(l=!1)=>{const d=document.documentElement.scrollHeight;!l&&Math.abs(d-t)<2||(t=d,window.parent.postMessage(Zi(d),"*"))},i=l=>{if(l.source!==window.parent)return;const d=l.data;!d||d.type!==Vi||r(!0)};window.addEventListener("message",i),r();const a=new ResizeObserver(()=>r());return a.observe(n),()=>{a.disconnect(),window.removeEventListener("message",i),n.classList.remove(zn)}},[e])}function qi(){const{route:e,embed:n}=Ji(),t=Wn().brain,r=Fr();Wi(n);const i=e.kind==="example"?e.id:Be[0].id,a=Be.find(m=>m.id===i)??Be[0],l=m=>{Ln(An(m),{hash:location.hash})},d=o.jsxs(o.Fragment,{children:[!n&&e.kind==="gallery"&&o.jsx("nav",{className:"example-picker",children:Be.map(m=>o.jsx(K,{size:"sm",variant:m.id===a.id?"default":"secondary",onClick:()=>l(m.id),children:m.title},m.id))}),!n&&e.kind==="example"&&o.jsx("div",{className:"example-nav",children:o.jsx(K,{size:"sm",variant:"secondary",onClick:()=>Ln(Gi()),children:"← All examples"})}),o.jsxs("div",{className:"example-meta",children:[a.docsUrl&&o.jsx("a",{className:"docs-link",href:a.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&o.jsx("a",{className:"open-full-page",href:An(a.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:"Open full page ↗"})]}),o.jsx(Kr,{example:a,initialBrainKind:t,initialTourId:r},a.id)]});return n?o.jsx("div",{className:"c4-ui app-shell app-embed",children:o.jsx("main",{id:"main",className:"layout layout-embed",children:d})}):o.jsxs("div",{className:"c4-ui app-shell",children:[o.jsx(pt,{appName:"Runnable Camunda examples",trailing:o.jsx("span",{className:"app-subtitle",children:"model + code + optional LLM, in your browser"})}),o.jsx("main",{id:"main",className:"layout",children:d})]})}it.createRoot(document.getElementById("root")).render(o.jsx(b.StrictMode,{children:o.jsx(gt,{children:o.jsx(qi,{})})}));export{ie as _,no as c};
