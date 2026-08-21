const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-embedded-D9kK2cZm.css","assets/RuntimeDiagram-B2IYfHo7.js","assets/vendor-react-9Ma26nY1.js","assets/Viewer-D_7S4Gwm.js","assets/MonacoEditor-CVtpGC_H.js","assets/MonacoEditor-CSys-Ydm.css","assets/vendor-modeler-CkziDt-P.js","assets/vendor-design-system-CHFiGyYU.js","assets/vendor-design-system-Bb2tjC2Z.css","assets/parser-DkgAe_kI.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-D8VK5rpm.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var Pt=Object.defineProperty;var Ct=(e,n,t)=>n in e?Pt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var O=(e,n,t)=>Ct(e,typeof n!="symbol"?n+"":n,t);import{r as h,j as a,i as Lt}from"./vendor-react-9Ma26nY1.js";import{B as q,a as H,L as Re,S as Xn,b as et,c as nt,d as tt,e as rt,A as se,f as de,g as le,I as rn,C as Bt,h as Rt,i as zt,j as Ot,k as Ft,l as Ut,T as $t,m as Gt,n as Je,o as qe,p as Vt,q as Yt}from"./vendor-design-system-CHFiGyYU.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Qt="modulepreload",Jt=function(e){return"/pr-preview/pr-95/"+e},kn={},ce=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){let l=function(o){return Promise.all(o.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),u=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));i=l(t.map(o=>{if(o=Jt(o),o in kn)return;kn[o]=!0;const d=o.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${g}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":Qt,d||(p.as="script"),p.crossOrigin="",p.href=o,u&&p.setAttribute("nonce",u),document.head.appendChild(p),d)return new Promise((_,f)=>{p.addEventListener("load",_),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}function s(l){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=l,window.dispatchEvent(m),!m.defaultPrevented)throw l}return i.then(l=>{for(const m of l||[])m.status==="rejected"&&s(m.reason);return n().catch(s)})},qt="io.camunda.agenticai:aiagent",Me="http://www.omg.org/spec/BPMN/20100524/MODEL",Ht="http://camunda.org/schema/zeebe/1.0";function cn(e,n){return Array.from(e.getElementsByTagNameNS(Ht,n))}function it(e,n){return cn(e,n).filter(t=>Wt(t)===e)}function Wt(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Me&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function hn(e){const n=it(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function In(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Me&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function Tn(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(r=>r.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function ot(e){const n=[],t=r=>{for(const i of Array.from(r.attributes))n.push(i.value);for(const i of Array.from(r.children))t(i)};return t(e),n.join(`
`)}function Zt(e){return at(ot(e))}function Kt(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Me&&t.localName==="extensionElements");return n?at(ot(n)):[]}function at(e){const n=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,t=[],r=new Set;for(const i of e.matchAll(n)){const s=i[1];r.has(s)||(r.add(s),t.push({name:s,description:(i[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:i[3]??"string"}))}return t}function Xt(e){const n={};for(const t of it(e,"input")){const r=t.getAttribute("target");r&&(n[r]=t.getAttribute("source")??"")}return n}function er(e){return Array.from(e.getElementsByTagNameNS(Me,"adHocSubProcess")).filter(n=>(hn(n)??"").startsWith(qt))}const nr=new Set(["subProcess","adHocSubProcess","callActivity"]),tr=new Set(["adHocSubProcess","subProcess","transaction"]);function rr(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Me&&tr.has(n.localName))return n;n=n.parentElement}return null}function ir(e,n){const t=Xt(e),r=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:hn(e),systemPrompt:Tn(t["data.systemPrompt.prompt"]),userPrompt:Tn(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(r)&&r>0?r:10,tools:n}}function or(e,n){var g;const t=e.getAttribute("id")??"",r=e.getAttribute("name")??t,i=er(e);i.length>1&&n.push({severity:"warning",elementId:i.map(p=>p.getAttribute("id")).join(", "),message:`Process "${r}" hosts ${i.length} AI Agent sub-processes (${i.map(p=>p.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const s=[],l=new Map(i.map(p=>[p,[]]));for(const p of Array.from(e.getElementsByTagName("*"))){if(p.namespaceURI!==Me||i.includes(p))continue;const _=p.getAttribute("id");if(!_)continue;const f=rr(p),y=f&&i.includes(f)?f:null;if(y&&nr.has(p.localName)){const k=p.getAttribute("name")??_,C=In(p);s.push({elementId:_,label:k,jobType:"",documentation:C,isTool:!0,compound:!0}),l.get(y).push({elementId:_,label:k,jobType:"",documentation:C,args:Kt(p),compound:!0});continue}const b=hn(p);if(!b)continue;const M={elementId:_,label:p.getAttribute("name")??_,jobType:b,documentation:In(p),isTool:y!=null};s.push(M),y&&l.get(y).push({elementId:_,label:M.label,jobType:b,documentation:M.documentation,args:Zt(p)})}const m=i.map(p=>ir(p,l.get(p))),u=Array.from(e.getElementsByTagNameNS(Me,"userTask")).map(p=>{var _;return{elementId:p.getAttribute("id")??"",label:p.getAttribute("name")??p.getAttribute("id")??"",formId:((_=cn(p,"formDefinition")[0])==null?void 0:_.getAttribute("formId"))??void 0}}),o=e.getElementsByTagNameNS(Me,"startEvent")[0],d=o?((g=cn(o,"formDefinition")[0])==null?void 0:g.getAttribute("formId"))??void 0:void 0;return{processId:t,processName:r,tasks:s,agents:m,userTasks:u,startFormId:d}}function ar(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),r=t.getElementsByTagName("parsererror")[0];if(r)throw new Error(`Invalid BPMN XML: ${r.textContent}`);const i=Array.from(t.getElementsByTagNameNS(Me,"process"));if(i.length===0)throw new Error("No <bpmn:process> in the diagram.");const s=[],l=i.map(u=>or(u,s));let m=n.processId?l.find(u=>u.processId===n.processId):void 0;return n.processId&&!m&&s.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${l[0].processId}".`}),m??(m=l[0]),l.length>1&&s.push({severity:"warning",message:`Diagram has ${l.length} <bpmn:process> elements (${l.map(u=>u.processId).join(", ")}); using "${m.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:l,diagnostics:s,processId:m.processId,processName:m.processName,tasks:m.tasks,agent:m.agents[0]??null,agents:l.flatMap(u=>u.agents),userTasks:m.userTasks,startFormId:m.startFormId}}function sr(e){return e?e.imageId?{imageId:e.imageId}:e.imageName?{imageName:e.imageName}:{}:{}}function st(e,n){return n?e.pixels:e.imageId??e.pixels}const dr="No image selected — pick or upload a photo to read.";function jn(){return dr}function lr(e,n){return async t=>{const r=e.resolve(n);if(!r)return jn();const i=st(r,e.live);if(i===void 0)return jn();try{return await e.read(i,t)}catch(s){return`Couldn't read the image (${s instanceof Error?s.message:String(s)}).`}}}function cr(e,n){return async()=>{const t=e.resolve(n);if(t)return st(t,e.live)}}function mr(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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

    // Correlate each delegated helper call (vision/image) with the host's
    // reply. The reader's source runs here, but vision/image must execute
    // host-side (only the host holds this run's image and the active brain),
    // so the helper posts a request and awaits the matching helper-result.
    var pendingCalls = {};
    var callSeq = 0;

    function callHost(kind, id, extra) {
      return new Promise(function (resolve, reject) {
        var callId = String(++callSeq);
        pendingCalls[callId] = { resolve: resolve, reject: reject };
        var msg = { kind: kind, id: id, callId: callId };
        if (extra) for (var k in extra) msg[k] = extra[k];
        post(msg);
      });
    }

    function compile(source, what) {
      // Deliberately still new Function(): the isolation here comes from the
      // opaque-origin iframe boundary, not from re-implementing a JS sandbox.
      var factory = new Function('"use strict"; return (' + source + ');');
      var fn = factory();
      if (typeof fn !== "function") throw new Error(what + " must evaluate to a function.");
      return fn;
    }

    function helpersFor(job, id, hasVision) {
      var helpers = {
        sleep: sleep,
        trace: function (text) { post({ kind: "trace", id: id, text: String(text) }); },
        text: function (key, fallback) { return textOf(job.variables, key, fallback); },
        num: function (key, fallback) { return numOf(job.variables, key, fallback); },
      };
      // Vision accessors bridge back to the host, and only exist when the host
      // wired vision for this run — mirroring the host-side helpersFor so a
      // handler in a non-imageInput example still sees helpers.vision as
      // undefined (calling it throws "not a function"), exactly as before.
      if (hasVision) {
        helpers.vision = function (prompt) {
          return callHost("vision-request", id, { prompt: String(prompt) });
        };
        helpers.image = function () {
          return callHost("image-request", id);
        };
      }
      return helpers;
    }

    async function handle(msg) {
      try {
        if (msg.kind === "run-handler") {
          var handler = compile(msg.source, "Handler code");
          var out = await handler(msg.job, helpersFor(msg.job, msg.id, msg.hasVision));
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
      if (!msg) return;
      // Host's reply to a delegated vision/image call: settle the waiter.
      if (msg.kind === "helper-result" || msg.kind === "helper-error") {
        var waiter = pendingCalls[msg.callId];
        if (!waiter) return;
        delete pendingCalls[msg.callId];
        if (msg.kind === "helper-result") waiter.resolve(msg.value);
        else waiter.reject(new Error(msg.message || "helper call failed"));
        return;
      }
      if (msg.kind !== "run-handler" && msg.kind !== "run-agent") return;
      handle(msg);
    });

    post({ kind: "ready" });
  <\/script></body></html>`}function dt(e,n={}){const{timeoutMs:t=5e3,onTrace:r,onVision:i,onImage:s}=n,l=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((m,u)=>{const o=document.createElement("iframe");o.setAttribute("sandbox","allow-scripts"),o.style.display="none",o.setAttribute("aria-hidden","true");let d=!1,g;const p=()=>{g&&clearTimeout(g),window.removeEventListener("message",f),o.remove()},_=b=>{d||(d=!0,p(),b())};function f(b){var k;if(b.source!==o.contentWindow)return;const M=b.data;if(!(!M||typeof M!="object")){if(M.kind==="ready"){const C=e.job,W=e.kind==="run-handler"?{kind:"run-handler",id:l,source:e.source,job:C,hasVision:e.hasVision}:{kind:"run-agent",id:l,source:e.source,job:C};(k=o.contentWindow)==null||k.postMessage(W,"*");return}"id"in M&&M.id!==l||(M.kind==="trace"?r==null||r(M.text):M.kind==="vision-request"?y(M.callId,i,"vision",M.prompt):M.kind==="image-request"?y(M.callId,s,"image"):M.kind==="result"?_(()=>m(M.value)):M.kind==="error"&&_(()=>u(new Error(M.message))))}}function y(b,M,k,...C){const W=Z=>{var me;return(me=o.contentWindow)==null?void 0:me.postMessage(Z,"*")};if(!M){W({kind:"helper-error",id:l,callId:b,message:`${k} helper is not available.`});return}Promise.resolve().then(()=>M(...C)).then(Z=>W({kind:"helper-result",id:l,callId:b,value:Z}),Z=>W({kind:"helper-error",id:l,callId:b,message:Z instanceof Error?Z.message:String(Z)}))}window.addEventListener("message",f),g=setTimeout(()=>{_(()=>u(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),o.srcdoc=mr(),document.body.appendChild(o)})}function lt(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function ur(e,n,t){const r=typeof t.vision=="function";return dt({kind:"run-handler",source:e,job:lt(n),hasVision:r},{onTrace:t.trace,onVision:t.vision?i=>t.vision(i):void 0,onImage:t.image?()=>t.image():void 0})}function pr(e,n){return dt({kind:"run-agent",source:e,job:lt(n)})}function ct(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function gr(e){return ct(e,"Handler code"),(n,t)=>ur(e,n,t)}function hr(e){return ct(e,"Agent code"),n=>pr(e,n)}function br(e,n,t,r){return{sleep:i=>new Promise(s=>setTimeout(s,i)),trace:i=>n({kind:"tool",text:`   ${i}`,elementId:e.elementId,turn:t}),text:(i,s="")=>{const l=e.variables[i];return typeof l=="string"?l:l==null?s:String(l)},num:(i,s=0)=>{const l=e.variables[i],m=typeof l=="number"?l:Number(l);return Number.isFinite(m)?m:s},...r?{vision:lr(r,e.instanceKey),image:cr(r,e.instanceKey)}:{}}}function fr(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function _r(e,n,t,r,i){const s={},l=e.processes.flatMap(u=>u.tasks),m=new Map(l.map(u=>[u.elementId,u.label]));for(const u of l)u.compound||s[u.jobType]||(s[u.jobType]=async o=>{const d=n[o.elementId];if(!d)throw new Error(`No handler registered for ${o.elementId} (job type ${o.type})`);const g=m.get(o.elementId)??o.elementId,p=r==null?void 0:r.current;t({kind:"tool",text:`▶ ${g}`,elementId:o.elementId,turn:p});const _=await d(o,br(o,t,p,i));return t({kind:"vars",text:`  ↳ ${fr(_)}`,elementId:o.elementId,result:_,turn:p}),_});return s}const wr=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function Ve(...e){const n=Object.create(null);for(const t of e)if(t)for(const r of Object.keys(t))n[r]=t[r];return n}function mt(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function ut(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yr(e){return ut(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function Mr(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vr(e){return JSON.stringify(e).slice(1,-1)}function xr(e,n){const t=e.lastIndexOf("<",n),r=e.lastIndexOf(">",n);if(t<=r)return"text";const i=e.slice(t,n);if((i.match(/"/g)??[]).length%2===0)return"text";const l=i.lastIndexOf('"');return(i.slice(l+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function Nr(e,n,t="xml"){const r=[],i=new Set;return{result:e.replace(wr,(l,m,u)=>{const o=m.trim();if(!Object.prototype.hasOwnProperty.call(n,o))return i.has(o)||(i.add(o),r.push(o)),l;const d=n[o];if(t==="json")return vr(d);const g=xr(e,u);return g==="feel-literal"?Mr(d):g==="attribute"?yr(d):ut(d)}),unresolved:r}}function Er(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function kr(e,n={},t=e.bpmn,r={}){const i=[],s=Ve(e.templates,r),{result:l,unresolved:m}=Nr(t,s,"xml");for(const M of m)i.push({severity:"warning",message:`Template placeholder "{{${M}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let u;try{u=ar(l)}catch(M){return i.push({severity:"error",message:M instanceof Error?M.message:String(M)}),{resolvedBpmn:l,model:Er(),handlers:{},forms:{},diagnostics:i,hasErrors:!0}}i.push(...u.diagnostics);const o=u.processes.flatMap(M=>M.tasks),d=new Map(e.handlers.map(M=>[M.elementId,M.source])),g={};for(const M of o){if(M.compound)continue;const k=n[M.elementId]??d.get(M.elementId);if(k===void 0){i.push({severity:"error",elementId:M.elementId,jobType:M.jobType,message:`No handler for "${M.label}" (${M.elementId}, job type "${M.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{g[M.elementId]=gr(k)}catch(C){i.push({severity:"error",elementId:M.elementId,jobType:M.jobType,message:`"${M.label}" (${M.elementId}): handler code didn't compile — ${C instanceof Error?C.message:String(C)}`})}}const p=new Set(o.map(M=>M.elementId)),_=new Set([...d.keys(),...Object.keys(n)]);for(const M of _)p.has(M)||i.push({severity:"error",elementId:M,message:`Handler "${M}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const f={},y=e.forms??{},b=(M,k)=>{if(!M)return;const C=y[M];C?f[M]=C:i.push({severity:"error",formId:M,message:`${k} references form "${M}", which has no matching schema.`})};for(const M of u.processes){b(M.startFormId,`The start event of process "${M.processName}"`);for(const k of M.userTasks)b(k.formId,`User task "${k.label}" (${k.elementId})`)}return{resolvedBpmn:l,model:u,handlers:g,forms:f,diagnostics:i,hasErrors:i.some(M=>M.severity==="error")}}function Ir(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let r=n;r<e.length;r++)if(e[r]==="{")t++;else if(e[r]==="}"&&(t--,t===0))try{const i=JSON.parse(e.slice(n,r+1));return typeof i=="object"&&i!==null&&!Array.isArray(i)?i:null}catch{return null}return null}function mn(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function Sn(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function An(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:Sn(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,r=Array.isArray(t)?t:Object.values(e).find(s=>Array.isArray(s))??[],i=[];for(const s of r)if(typeof s=="string")s.trim()&&i.push({name:s.trim(),args:{}});else if(s&&typeof s=="object"){const l=s,m=l.name??l.tool??l.id??l.function;typeof m=="string"&&m.trim()&&i.push({name:m.trim(),args:Sn(l)})}return i}function Tr(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function Dn(e){const n=e.args.length?e.args.map(r=>`      ${r.name} (${r.type}) — ${r.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function jr(e,n,t){const r=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",i=t[0]??e.tools[0];if(t.length===0)return`${r}

Every tool has already run. Reply with JSON only — no prose, no explanation, no
markdown fence — exactly:

{"done": true}`;const s=i!=null&&i.args.length?`{${i.args.map(l=>`"${l.name}": "…"`).join(", ")}}`:"{}";return n?`${r}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${t.map(Dn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tools": [{"tool": "${(i==null?void 0:i.elementId)??"ToolName"}", "arguments": ${s}}], "done": false}

List one entry per tool you're calling this turn (often just one). Each
"tool" value must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tools.`:`${r}

You drive the process by calling exactly one tool at a time. The tool names you
may use, one per block:

${t.map(Dn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(i==null?void 0:i.elementId)??"ToolName"}", "arguments": ${s}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function Sr(e,n,t,r,i=[],s=[],l=!1){const m=e.userPrompt||"Carry out your task.",u=Object.entries(n).filter(([,d])=>typeof d=="string"&&d.trim().length>0).map(([d,g])=>`  ${d}: ${String(g)}`),o=[m,u.length?`Case data:
${u.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return o.push(t.length?`${l?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),o.push(r.length?`Tools still available:
${r.map(d=>`  ${d.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),s.length&&o.push(`Your last reply was rejected: ${s.join("; ")}. Do not repeat it.`),i.length&&o.push(`You reported that you are done, but ${i.join(" and ")} ${i.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${i.length===1?"it":"them"} now.`),o.push("Which tool should run next? Reply with JSON only."),o.join(`

`)}async function Ar(e,n,t,r,i,s){let l="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:s});const m=await e(r,i,u=>{l+=u,n({kind:"llm",text:`${mn(l)} ▍`,key:t,pending:!0,turn:s})});return n({kind:"llm",text:mn(m||l)||"(empty reply)",key:t,pending:!1,turn:s}),m}function Dr(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function Pr(e,n,t){const r={},i=new Map,s=new Map;for(const{tool:l,args:m}of e){const u={};for(const o of l.args){const d=m[o.name];if(!(d!=null&&d!=="")){n({kind:"error",text:`🤖 ${l.elementId}: model supplied no value for "${o.name}"`,turn:t,elementId:l.elementId});continue}const p=i.get(o.name);if(p!==void 0&&p!==l.elementId){n({kind:"error",text:`🤖 argument name collision on "${o.name}": both ${p} and ${l.elementId} declare it — ${p} already claimed it this turn, ${l.elementId}'s value is dropped`,turn:t,elementId:l.elementId});continue}const _=Dr(o.type,d);if(!_.ok){n({kind:"error",text:`🤖 ${l.elementId}: "${o.name}" is declared as ${o.type} but the model supplied ${JSON.stringify(d)} — rejected, not passed through`,turn:t,elementId:l.elementId});continue}r[o.name]=_.value,u[o.name]=_.value,i.set(o.name,l.elementId)}s.set(l.elementId,u)}return{variablesOut:r,forHistory:s}}function Cr(e,n,t,r={}){const{maxNewTokens:i=384,allowRepeats:s=!1,allowMultiToolTurns:l=!1,turnRef:m,requiredTools:u=[],maxEarlyDoneNudges:o=1}=r;let d=0;const g=new Set,p=[];let _=0,f=[],y=[];return async b=>{const M=b.variables,k=M.toolCallResult;for(k!==void 0&&p.length&&(p[p.length-1]=`${p[p.length-1]} → ${mn(JSON.stringify(k),160)}`);;){const W=await C();if(W)return W}async function C(){if(d+=1,m&&(m.current=d),d>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:d}),{completionConditionFulfilled:!0};const W=s?e.tools:e.tools.filter(D=>!g.has(D.elementId)),Z=[{role:"system",content:jr(e,l,W)},{role:"user",content:Sr(e,M,p,W,f,y,s)}];f=[],y=[];let me;try{me=await Ar(n,t,`llm-turn-${d}`,Z,i,d)}catch(D){return t({kind:"error",text:`LLM call failed: ${D instanceof Error?D.message:String(D)} — completing the agent.`,turn:d}),{completionConditionFulfilled:!0}}const Q=Ir(me);if(Tr(Q)&&An(Q).length===0){const D=u.filter(U=>!g.has(U));return D.length&&_<o?(_+=1,f=D,t({kind:"agent",text:`🤖 model says it is done, but ${D.join(", ")} hasn't run — asking once more`,turn:d}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:d}),{completionConditionFulfilled:!0})}const oe=An(Q);if(oe.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:d}),y=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const V=[],Y=[],N=[];for(const D of oe){const U=e.tools.find(ge=>ge.elementId===D.name);if(!U){Y.push(D.name);continue}if(!s&&g.has(U.elementId)){N.push(U.elementId);continue}V.push({tool:U,args:D.args})}if(Y.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${Y.join(", ")} — nothing activated`,turn:d}),N.length&&t({kind:"error",text:`🤖 model asked to re-run ${N.join(", ")} — skipped (already run)`,turn:d}),V.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:d}),y=[...Y.length?[`${Y.join(", ")} ${Y.length===1?"is":"are"} not a real tool`]:[],...N.length?[`${N.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:E,forHistory:A}=Pr(V,t,d);for(const{tool:D}of V)g.add(D.elementId),p.push(`- ${D.elementId}(${JSON.stringify(A.get(D.elementId))})`);for(const{tool:D}of V)t({kind:"agent",text:`🤖 calling ${D.elementId}`,turn:d,elementId:D.elementId,args:A.get(D.elementId)??{}});return{activateElements:V.map(D=>({elementId:D.tool.elementId})),variables:E}}}}function Lr(e,n,t,r={}){const i=new Map(e.map(s=>[s.elementId,Cr(s,n,t,r)]));return async s=>{const l=i.get(s.elementId);if(!l)throw new Error(`No agent host registered for "${s.elementId}"`);return l(s)}}class un{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Pn.unregister(this),n}free(){const n=this.__destroy_into_raw();c.__wbg_testengine_free(n,0)}activateJobs(n,t,r,i){let s,l;try{const _=c.__wbindgen_add_to_stack_pointer(-16),f=S(n,c.__wbindgen_export,c.__wbindgen_export2),y=j,b=S(i,c.__wbindgen_export,c.__wbindgen_export2),M=j;c.testengine_activateJobs(_,this.__wbg_ptr,f,y,t,r,b,M);var m=w().getInt32(_+0,!0),u=w().getInt32(_+4,!0),o=w().getInt32(_+8,!0),d=w().getInt32(_+12,!0),g=m,p=u;if(d)throw g=0,p=0,z(o);return s=g,l=p,R(g,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(s,l,1)}}advanceTime(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_advanceTime(d,this.__wbg_ptr,n);var i=w().getInt32(d+0,!0),s=w().getInt32(d+4,!0),l=w().getInt32(d+8,!0),m=w().getInt32(d+12,!0),u=i,o=s;if(m)throw u=0,o=0,z(l);return t=u,r=o,R(u,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}assignUserTask(n,t,r){let i,s;try{const p=c.__wbindgen_add_to_stack_pointer(-16),_=S(n,c.__wbindgen_export,c.__wbindgen_export2),f=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j;c.testengine_assignUserTask(p,this.__wbg_ptr,_,f,y,b,r);var l=w().getInt32(p+0,!0),m=w().getInt32(p+4,!0),u=w().getInt32(p+8,!0),o=w().getInt32(p+12,!0),d=l,g=m;if(o)throw d=0,g=0,z(u);return i=d,s=g,R(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}broadcastSignal(n,t){let r,i;try{const g=c.__wbindgen_add_to_stack_pointer(-16),p=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,f=S(t,c.__wbindgen_export,c.__wbindgen_export2),y=j;c.testengine_broadcastSignal(g,this.__wbg_ptr,p,_,f,y);var s=w().getInt32(g+0,!0),l=w().getInt32(g+4,!0),m=w().getInt32(g+8,!0),u=w().getInt32(g+12,!0),o=s,d=l;if(u)throw o=0,d=0,z(m);return r=o,i=d,R(o,d)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,i,1)}}cancelInstance(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16),g=S(n,c.__wbindgen_export,c.__wbindgen_export2),p=j;c.testengine_cancelInstance(d,this.__wbg_ptr,g,p);var i=w().getInt32(d+0,!0),s=w().getInt32(d+4,!0),l=w().getInt32(d+8,!0),m=w().getInt32(d+12,!0),u=i,o=s;if(m)throw u=0,o=0,z(l);return t=u,r=o,R(u,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}completeAgentJob(n,t,r){let i,s;try{const p=c.__wbindgen_add_to_stack_pointer(-16),_=S(n,c.__wbindgen_export,c.__wbindgen_export2),f=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j,M=S(r,c.__wbindgen_export,c.__wbindgen_export2),k=j;c.testengine_completeAgentJob(p,this.__wbg_ptr,_,f,y,b,M,k);var l=w().getInt32(p+0,!0),m=w().getInt32(p+4,!0),u=w().getInt32(p+8,!0),o=w().getInt32(p+12,!0),d=l,g=m;if(o)throw d=0,g=0,z(u);return i=d,s=g,R(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}completeJob(n,t){let r,i;try{const g=c.__wbindgen_add_to_stack_pointer(-16),p=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,f=S(t,c.__wbindgen_export,c.__wbindgen_export2),y=j;c.testengine_completeJob(g,this.__wbg_ptr,p,_,f,y);var s=w().getInt32(g+0,!0),l=w().getInt32(g+4,!0),m=w().getInt32(g+8,!0),u=w().getInt32(g+12,!0),o=s,d=l;if(u)throw o=0,d=0,z(m);return r=o,i=d,R(o,d)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,i,1)}}completeUserTask(n,t){let r,i;try{const g=c.__wbindgen_add_to_stack_pointer(-16),p=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,f=S(t,c.__wbindgen_export,c.__wbindgen_export2),y=j;c.testengine_completeUserTask(g,this.__wbg_ptr,p,_,f,y);var s=w().getInt32(g+0,!0),l=w().getInt32(g+4,!0),m=w().getInt32(g+8,!0),u=w().getInt32(g+12,!0),o=s,d=l;if(u)throw o=0,d=0,z(m);return r=o,i=d,R(o,d)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,i,1)}}correlateMessage(n,t,r){let i,s;try{const p=c.__wbindgen_add_to_stack_pointer(-16),_=S(n,c.__wbindgen_export,c.__wbindgen_export2),f=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j,M=S(r,c.__wbindgen_export,c.__wbindgen_export2),k=j;c.testengine_correlateMessage(p,this.__wbg_ptr,_,f,y,b,M,k);var l=w().getInt32(p+0,!0),m=w().getInt32(p+4,!0),u=w().getInt32(p+8,!0),o=w().getInt32(p+12,!0),d=l,g=m;if(o)throw d=0,g=0,z(u);return i=d,s=g,R(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}createInstance(n,t,r){let i,s;try{const p=c.__wbindgen_add_to_stack_pointer(-16),_=S(n,c.__wbindgen_export,c.__wbindgen_export2),f=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j;c.testengine_createInstance(p,this.__wbg_ptr,_,f,y,b,Fr(r)?Number.MAX_SAFE_INTEGER:r>>0);var l=w().getInt32(p+0,!0),m=w().getInt32(p+4,!0),u=w().getInt32(p+8,!0),o=w().getInt32(p+12,!0),d=l,g=m;if(o)throw d=0,g=0,z(u);return i=d,s=g,R(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}debugClear(){c.testengine_debugClear(this.__wbg_ptr)}debugCreateInstance(n,t,r){let i,s;try{const p=c.__wbindgen_add_to_stack_pointer(-16),_=S(n,c.__wbindgen_export,c.__wbindgen_export2),f=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j,M=S(r,c.__wbindgen_export,c.__wbindgen_export2),k=j;c.testengine_debugCreateInstance(p,this.__wbg_ptr,_,f,y,b,M,k);var l=w().getInt32(p+0,!0),m=w().getInt32(p+4,!0),u=w().getInt32(p+8,!0),o=w().getInt32(p+12,!0),d=l,g=m;if(o)throw d=0,g=0,z(u);return i=d,s=g,R(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}get debugIsPaused(){return c.testengine_debugIsPaused(this.__wbg_ptr)!==0}debugResume(){let n,t;try{const o=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_debugResume(o,this.__wbg_ptr);var r=w().getInt32(o+0,!0),i=w().getInt32(o+4,!0),s=w().getInt32(o+8,!0),l=w().getInt32(o+12,!0),m=r,u=i;if(l)throw m=0,u=0,z(s);return n=m,t=u,R(m,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}debugStep(){let n,t;try{const o=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_debugStep(o,this.__wbg_ptr);var r=w().getInt32(o+0,!0),i=w().getInt32(o+4,!0),s=w().getInt32(o+8,!0),l=w().getInt32(o+12,!0),m=r,u=i;if(l)throw m=0,u=0,z(s);return n=m,t=u,R(m,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}deploy(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16),g=S(n,c.__wbindgen_export,c.__wbindgen_export2),p=j;c.testengine_deploy(d,this.__wbg_ptr,g,p);var i=w().getInt32(d+0,!0),s=w().getInt32(d+4,!0),l=w().getInt32(d+8,!0),m=w().getInt32(d+12,!0),u=i,o=s;if(m)throw u=0,o=0,z(l);return t=u,r=o,R(u,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}deployForm(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16),g=S(n,c.__wbindgen_export,c.__wbindgen_export2),p=j;c.testengine_deployForm(d,this.__wbg_ptr,g,p);var i=w().getInt32(d+0,!0),s=w().getInt32(d+4,!0),l=w().getInt32(d+8,!0),m=w().getInt32(d+12,!0),u=i,o=s;if(m)throw u=0,o=0,z(l);return t=u,r=o,R(u,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}deployResource(n,t){let r,i;try{const g=c.__wbindgen_add_to_stack_pointer(-16),p=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,f=S(t,c.__wbindgen_export,c.__wbindgen_export2),y=j;c.testengine_deployResource(g,this.__wbg_ptr,p,_,f,y);var s=w().getInt32(g+0,!0),l=w().getInt32(g+4,!0),m=w().getInt32(g+8,!0),u=w().getInt32(g+12,!0),o=s,d=l;if(u)throw o=0,d=0,z(m);return r=o,i=d,R(o,d)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,i,1)}}events(){let n,t;try{const o=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_events(o,this.__wbg_ptr);var r=w().getInt32(o+0,!0),i=w().getInt32(o+4,!0),s=w().getInt32(o+8,!0),l=w().getInt32(o+12,!0),m=r,u=i;if(l)throw m=0,u=0,z(s);return n=m,t=u,R(m,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}failJob(n,t,r){let i,s;try{const p=c.__wbindgen_add_to_stack_pointer(-16),_=S(n,c.__wbindgen_export,c.__wbindgen_export2),f=j,y=S(r,c.__wbindgen_export,c.__wbindgen_export2),b=j;c.testengine_failJob(p,this.__wbg_ptr,_,f,t,y,b);var l=w().getInt32(p+0,!0),m=w().getInt32(p+4,!0),u=w().getInt32(p+8,!0),o=w().getInt32(p+12,!0),d=l,g=m;if(o)throw d=0,g=0,z(u);return i=d,s=g,R(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}migrate(n,t,r){let i,s;try{const p=c.__wbindgen_add_to_stack_pointer(-16),_=S(n,c.__wbindgen_export,c.__wbindgen_export2),f=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j,M=S(r,c.__wbindgen_export,c.__wbindgen_export2),k=j;c.testengine_migrate(p,this.__wbg_ptr,_,f,y,b,M,k);var l=w().getInt32(p+0,!0),m=w().getInt32(p+4,!0),u=w().getInt32(p+8,!0),o=w().getInt32(p+12,!0),d=l,g=m;if(o)throw d=0,g=0,z(u);return i=d,s=g,R(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}modify(n,t,r){let i,s;try{const p=c.__wbindgen_add_to_stack_pointer(-16),_=S(n,c.__wbindgen_export,c.__wbindgen_export2),f=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j,M=S(r,c.__wbindgen_export,c.__wbindgen_export2),k=j;c.testengine_modify(p,this.__wbg_ptr,_,f,y,b,M,k);var l=w().getInt32(p+0,!0),m=w().getInt32(p+4,!0),u=w().getInt32(p+8,!0),o=w().getInt32(p+12,!0),d=l,g=m;if(o)throw d=0,g=0,z(u);return i=d,s=g,R(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}constructor(){const n=c.testengine_new();return this.__wbg_ptr=n,Pn.register(this,this.__wbg_ptr,this),this}get now(){return c.testengine_now(this.__wbg_ptr)}reset(){c.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16),g=S(n,c.__wbindgen_export,c.__wbindgen_export2),p=j;c.testengine_resolveIncident(d,this.__wbg_ptr,g,p);var i=w().getInt32(d+0,!0),s=w().getInt32(d+4,!0),l=w().getInt32(d+8,!0),m=w().getInt32(d+12,!0),u=i,o=s;if(m)throw u=0,o=0,z(l);return t=u,r=o,R(u,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}setVariables(n,t,r){let i,s;try{const p=c.__wbindgen_add_to_stack_pointer(-16),_=S(n,c.__wbindgen_export,c.__wbindgen_export2),f=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j;c.testengine_setVariables(p,this.__wbg_ptr,_,f,y,b,r);var l=w().getInt32(p+0,!0),m=w().getInt32(p+4,!0),u=w().getInt32(p+8,!0),o=w().getInt32(p+12,!0),d=l,g=m;if(o)throw d=0,g=0,z(u);return i=d,s=g,R(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}snapshot(){let n,t;try{const o=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_snapshot(o,this.__wbg_ptr);var r=w().getInt32(o+0,!0),i=w().getInt32(o+4,!0),s=w().getInt32(o+8,!0),l=w().getInt32(o+12,!0),m=r,u=i;if(l)throw m=0,u=0,z(s);return n=m,t=u,R(m,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}throwError(n,t,r){let i,s;try{const p=c.__wbindgen_add_to_stack_pointer(-16),_=S(n,c.__wbindgen_export,c.__wbindgen_export2),f=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j,M=S(r,c.__wbindgen_export,c.__wbindgen_export2),k=j;c.testengine_throwError(p,this.__wbg_ptr,_,f,y,b,M,k);var l=w().getInt32(p+0,!0),m=w().getInt32(p+4,!0),u=w().getInt32(p+8,!0),o=w().getInt32(p+12,!0),d=l,g=m;if(o)throw d=0,g=0,z(u);return i=d,s=g,R(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}tickNow(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_tickNow(d,this.__wbg_ptr,n);var i=w().getInt32(d+0,!0),s=w().getInt32(d+4,!0),l=w().getInt32(d+8,!0),m=w().getInt32(d+12,!0),u=i,o=s;if(m)throw u=0,o=0,z(l);return t=u,r=o,R(u,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}unassignUserTask(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16),g=S(n,c.__wbindgen_export,c.__wbindgen_export2),p=j;c.testengine_unassignUserTask(d,this.__wbg_ptr,g,p);var i=w().getInt32(d+0,!0),s=w().getInt32(d+4,!0),l=w().getInt32(d+8,!0),m=w().getInt32(d+12,!0),u=i,o=s;if(m)throw u=0,o=0,z(l);return t=u,r=o,R(u,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}updateRetries(n,t){let r,i;try{const g=c.__wbindgen_add_to_stack_pointer(-16),p=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j;c.testengine_updateRetries(g,this.__wbg_ptr,p,_,t);var s=w().getInt32(g+0,!0),l=w().getInt32(g+4,!0),m=w().getInt32(g+8,!0),u=w().getInt32(g+12,!0),o=s,d=l;if(u)throw o=0,d=0,z(m);return r=o,i=d,R(o,d)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,i,1)}}updateUserTask(n,t){let r,i;try{const g=c.__wbindgen_add_to_stack_pointer(-16),p=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,f=S(t,c.__wbindgen_export,c.__wbindgen_export2),y=j;c.testengine_updateUserTask(g,this.__wbg_ptr,p,_,f,y);var s=w().getInt32(g+0,!0),l=w().getInt32(g+4,!0),m=w().getInt32(g+8,!0),u=w().getInt32(g+12,!0),o=s,d=l;if(u)throw o=0,d=0,z(m);return r=o,i=d,R(o,d)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,i,1)}}}Symbol.dispose&&(un.prototype[Symbol.dispose]=un.prototype.free);function Br(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_bb96b2010945f0bc:function(n,t){throw new Error(R(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const r=R(n,t);return Rr(r)},__wbindgen_object_drop_ref:function(n){z(n)}}}}const Pn=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>c.__wbg_testengine_free(e,1));function Rr(e){$e===ye.length&&ye.push(ye.length+1);const n=$e;return $e=ye[n],ye[n]=e,n}function zr(e){e<1028||(ye[e]=$e,$e=e)}let De=null;function w(){return(De===null||De.buffer.detached===!0||De.buffer.detached===void 0&&De.buffer!==c.memory.buffer)&&(De=new DataView(c.memory.buffer)),De}function R(e,n){return $r(e>>>0,n)}let Ue=null;function Ke(){return(Ue===null||Ue.byteLength===0)&&(Ue=new Uint8Array(c.memory.buffer)),Ue}function Or(e){return ye[e]}let ye=new Array(1024).fill(void 0);ye.push(void 0,null,!0,!1);let $e=ye.length;function Fr(e){return e==null}function S(e,n,t){if(t===void 0){const m=Ge.encode(e),u=n(m.length,1)>>>0;return Ke().subarray(u,u+m.length).set(m),j=m.length,u}let r=e.length,i=n(r,1)>>>0;const s=Ke();let l=0;for(;l<r;l++){const m=e.charCodeAt(l);if(m>127)break;s[i+l]=m}if(l!==r){l!==0&&(e=e.slice(l)),i=t(i,r,r=l+e.length*3,1)>>>0;const m=Ke().subarray(i+l,i+r),u=Ge.encodeInto(e,m);l+=u.written,i=t(i,r,l,1)>>>0}return j=l,i}function z(e){const n=Or(e);return zr(e),n}let Xe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Xe.decode();const Ur=2146435072;let on=0;function $r(e,n){return on+=n,on>=Ur&&(Xe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Xe.decode(),on=n),Xe.decode(Ke().subarray(e,e+n))}const Ge=new TextEncoder;"encodeInto"in Ge||(Ge.encodeInto=function(e,n){const t=Ge.encode(e);return n.set(t),{read:e.length,written:t.length}});let j=0,c;function Gr(e,n){return c=e.exports,De=null,Ue=null,c}async function Vr(e,n){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(i){if(t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}else{const r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function t(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function Yr(e){if(c!==void 0)return c;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/pr-preview/pr-95/assets/nanobpmn_engine_bg-DRNrIVE8.wasm",import.meta.url));const n=Br();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await Vr(await e,n);return Gr(t)}let He=null;function Qr(e){return He||(He=Yr(void 0).then(()=>{}).catch(n=>{throw He=null,n})),He}function K(e){return JSON.parse(e)}class Jr{constructor(n){O(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return K(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,r,i){return JSON.parse(this.engine.activateJobs(n,t,r,i))}completeJob(n,t){return K(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:r,...i}=t??{};return K(this.engine.completeAgentJob(n,JSON.stringify(r??{}),JSON.stringify(i??{})))}failJob(n,t,r){return K(this.engine.failJob(n,t,r))}throwError(n,t,r){return K(this.engine.throwError(n,t,r))}updateRetries(n,t){return K(this.engine.updateRetries(n,t))}resolveIncident(n){return K(this.engine.resolveIncident(n))}setVariables(n,t,r){return K(this.engine.setVariables(n,t||"{}",r))}broadcastSignal(n,t){return K(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return K(this.engine.cancelInstance(n))}modify(n,t,r){return K(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(r??[])))}completeUserTask(n,t){return K(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,r){return K(this.engine.assignUserTask(n,t,r))}unassignUserTask(n){return K(this.engine.unassignUserTask(n))}updateUserTask(n,t){return K(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,r){return K(this.engine.correlateMessage(n,t,r||"{}"))}advanceTime(n){return K(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return K(this.engine.snapshot())}free(){this.engine.free()}}async function qr(e){return await Qr(),new Jr(new un)}class pt extends Error{constructor(t,r){super(t);O(this,"retries");this.name="JobFailure",this.retries=r==null?void 0:r.retries}}function Hr(e,n=[]){if(e.instances.filter(i=>!i.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const r=new Set(n);return e.jobs.some(i=>!r.has(i.jobType))?"unhandledJobs":e.userTasks.some(i=>i.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function Wr(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(r=>r.jobType))].filter(r=>!t.has(r)).sort()}async function Zr(e,n,t){let r;try{const i=await n(t);r=JSON.stringify(i??{})}catch(i){const s=i instanceof pt&&i.retries!==void 0?i.retries:Math.max(0,t.retries-1),l=i instanceof Error?i.message:String(i);e.failJob(t.key,s,l);return}e.completeJob(t.key,r)}async function Kr(e,n,t){let r;try{r=await n(t),JSON.stringify(r)}catch(i){const s=i instanceof pt&&i.retries!==void 0?i.retries:Math.max(0,t.retries-1),l=i instanceof Error?i.message:String(i);e.failJob(t.key,s,l);return}e.completeAgentJob(t.key,r)}async function Xr(e,n,t={}){const r=t.maxJobsPerActivation??10,i=t.lockTimeoutMs??3e4,s=t.worker??"bojtos",l=t.agents??{};for(const p of Object.keys(l))if(p in n)throw new Error(`dispatchRound: job type "${p}" is registered as both a worker and an agent — register it as exactly one`);const m=[];for(const[p,_]of Object.entries(n))for(const f of e.activateJobs(p,r,i,s))m.push({handler:_,job:f});const u=[];for(const[p,_]of Object.entries(l))for(const f of e.activateJobs(p,r,i,s))u.push({handler:_,job:f});for(const{handler:p,job:_}of m)await Zr(e,p,_);for(const{handler:p,job:_}of u)await Kr(e,p,_);const o=e.snapshot(),d=m.length+u.length;if(d>0)return{snapshot:o,handled:d};const g=[...Object.keys(n),...Object.keys(l)];return{snapshot:o,handled:d,reason:Hr(o,g),unhandled:Wr(o,g)}}function ei({bpmn:e}){const n=h.useRef(null),[t,r]=h.useState("loading"),[i,s]=h.useState(null),[l,m]=h.useState([]),[u,o]=h.useState(null),d=h.useRef(e),g=h.useRef(0),p=h.useRef(new Map),_=h.useCallback((N,E)=>{p.current.set(N,E)},[]),f=h.useCallback(N=>p.current.get(N),[]),y=h.useCallback((N,E)=>{const A=N.deploy(E);return d.current=E,p.current.clear(),m(A.processIds),o(null),s(null),A.processIds},[]);h.useEffect(()=>{let N=!1;return r("loading"),m([]),o(null),s(null),qr().then(E=>{if(N){E.free();return}try{y(E,e)}catch(A){E.free(),s(String(A)),r("error");return}n.current=E,r("ready")}).catch(E=>{N||(s(String(E)),r("error"))}),()=>{var E;N=!0,(E=n.current)==null||E.free(),n.current=null,p.current.clear()}},[e]);const b=h.useCallback(N=>{const E=n.current;if(!E)return null;try{const A=N(E);return o(A),s(null),A}catch(A){return s(String(A)),null}},[]),M=h.useCallback((N,E)=>b(A=>A.createInstance(N,E)),[b]),k=h.useCallback((N,E)=>b(A=>A.completeUserTask(N,E)),[b]),C=h.useCallback(N=>b(E=>E.advanceTime(N)),[b]),W=h.useCallback((N,E)=>b(A=>A.broadcastSignal(N,E)),[b]);function Z(N,E){const[A]=N.activateJobs(E,1,3e4,"manual-control");if(!A)throw new Error(`No waiting job of type "${E}" to resolve.`);return A}const me=h.useCallback((N,E)=>b(A=>{const D=Z(A,N);return A.completeJob(D.key,E)}),[b]),Q=h.useCallback((N,E,A)=>b(D=>{const U=Z(D,N);return D.throwError(U.key,E,A)}),[b]),oe=h.useCallback(async(N,E)=>{const A=n.current;if(!A)return null;const D=g.current;try{const U=await Xr(A,N,E);return n.current!==A||g.current!==D?null:(o(U.snapshot),s(null),U)}catch(U){return n.current!==A||g.current!==D||(o(A.snapshot()),s(String(U))),null}},[]),V=h.useCallback(()=>{const N=n.current;if(N){g.current++;try{N.reset(),y(N,d.current)}catch(E){s(String(E))}}},[y]),Y=h.useCallback(N=>{const E=n.current;if(!E)return null;g.current++;try{return E.reset(),y(E,N)}catch(A){return s(String(A)),null}},[y]);return{phase:t,error:i,processIds:l,snapshot:u,createInstance:M,stepWorkers:oe,completeUserTask:k,advanceTime:C,broadcastSignal:W,completeJobManually:me,throwJobError:Q,reset:V,redeploy:Y,setRunImage:_,getRunImage:f}}function ni(e,n){return e.slice(n)}function ti(e,n,t,r){const i=e.snapshot,s="⏸ waiting for a human — complete the task below to continue",l=i.userTasks.some(m=>m.state==="Created");if(e.handled>0){const m=i.activeElementIds.map(t),u=n.length?` via ${n.map(o=>`${t(o.from)} → ${t(o.to)}`).join(", ")}`:"";return i.completedInstances>=1?{kind:"done",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — ✅ process instance completed`}:l?{kind:"human",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — ${s}`}:{kind:"step",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — now at ${m.length?m.join(", "):"—"}`}}switch(e.reason){case"completed":return{kind:"done",text:"✅ process instance completed"};case"userTasks":return{kind:"human",text:s};case"timers":return{kind:"step",text:"⏱ waiting on a timer — advance the clock to continue"};case"messages":return{kind:"step",text:"✉ waiting on a message — correlate it to continue"};case"signals":return{kind:"step",text:"📶 waiting on a signal — broadcast it to continue"};case"incidents":return{kind:"error",text:"A job failed — incident on the diagram"};case"unhandledJobs":{const m=e.unhandled??[];return r&&m.length>0&&m.every(u=>r.has(u))?{kind:"human",text:s}:{kind:"error",text:`⏭ waiting on job type(s) with no worker registered: ${m.join(", ")}`}}case"idle":return{kind:"step",text:"Nothing to step — no instance is running."};default:return{kind:"step",text:e.reason?`Step blocked on an unrecognized reason: ${e.reason}`:"Nothing to step — no instance is running."}}}const ri="the Scripted or Endpoint brain";async function ii(){return await Ye()===null}async function Ye(e=ri){const n=navigator.gpu;if(!n)return`This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick ${e}.`;let t;try{t=await n.requestAdapter()}catch(r){return`WebGPU adapter request failed (${r instanceof Error?r.message:String(r)}). Try ${e} instead.`}return t?null:`This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick ${e} instead.`}const oi=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function gt(e){return pn.get(e)??{}}const pn=new Map;async function ai(){if(pn.size>0)return;const{prebuiltAppConfig:e}=await ce(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)pn.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const nn=oi.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...gt(e.id)})),ht=nn[0].id;async function si(){return await ai(),nn.map(e=>({...e,...gt(e.id)}))}function bt(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function di(e,n=bt()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function li(e){try{const{hasModelInCache:n}=await ce(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function en(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function Cn(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class We{constructor(){O(this,"kind","browser");O(this,"model",null);O(this,"engine",null);O(this,"worker",null);O(this,"generation",0);O(this,"chat",async(n,t=512,r)=>{var s,l;const i=this.engine;if(!i||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const m=await i.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let u="";for await(const o of m){const d=((l=(s=o.choices[0])==null?void 0:s.delta)==null?void 0:l.content)??"";d&&(u+=d,r==null||r(d))}return u}catch(m){const u=m instanceof Error?m.message:String(m);throw en(u)?(this.teardown(),new Error(`The in-browser model stopped: ${Cn()}`)):m}})}async connect(n=ht,t){var u,o;const r=await Ye();if(r)throw new Error(r);if(this.engine&&this.model===n)return n;const i=++this.generation,s=d=>{i===this.generation&&(t==null||t({progress:d.progress??0,text:d.text??""}))};this.teardown();let l,m;try{const{CreateWebWorkerMLCEngine:d}=await ce(async()=>{const{CreateWebWorkerMLCEngine:g}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:g}},[]);m=new Worker(new URL("/pr-preview/pr-95/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),l=await d(m,n,{initProgressCallback:s})}catch(d){if(m==null||m.terminate(),i!==this.generation)throw new Error("cancelled");const g=d instanceof Error?d.message:String(d);if(en(g))throw new Error(`Couldn't load ${n} in the browser (${g}). ${Cn()}`);const p=(o=(u=nn.find(_=>_.id===n))==null?void 0:u.requiredFeatures)==null?void 0:o.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${g}). `+(p?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(i!==this.generation)throw l.unload().catch(()=>{}),m==null||m.terminate(),new Error("cancelled");return this.engine=l,this.worker=m??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const ft="http://localhost:11434/v1";function _t(){var n;const e=((n=globalThis.location)==null?void 0:n.hostname)??"";return e==="localhost"||e==="127.0.0.1"||e==="[::1]"||e==="::1"}function bn(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(r=>(r=globalThis.location)==null?void 0:r.origin)()??""}){let i;try{i=new URL(wt(e)).hostname}catch{return null}const s=l=>l==="localhost"||l==="127.0.0.1"||l==="::1"||l==="[::1]";return!s(i)||s(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function wt(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class Ln extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class ci{constructor(n=ft,t="",r=""){O(this,"kind","endpoint");O(this,"baseUrl");O(this,"model",null);O(this,"models",[]);O(this,"apiKey");O(this,"requestedModel");O(this,"chat",async(n,t=512,r)=>{var o,d,g;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const i=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!i.ok||!i.body){const p=await i.text().catch(()=>"");throw new Error(`chat/completions HTTP ${i.status} ${i.statusText}${p?` — ${p.slice(0,300)}`:""}`)}const s=i.body.getReader(),l=new TextDecoder;let m="",u="";for(;;){const{value:p,done:_}=await s.read();if(_)break;m+=l.decode(p,{stream:!0});let f;for(;(f=m.indexOf(`
`))>=0;){const y=m.slice(0,f).trim();if(m=m.slice(f+1),!y.startsWith("data:"))continue;const b=y.slice(5).trim();if(b==="[DONE]")continue;let M;try{M=JSON.parse(b)}catch{continue}M.model&&(this.model=M.model);const k=(o=M.choices)==null?void 0:o[0],C=((d=k==null?void 0:k.delta)==null?void 0:d.content)??((g=k==null?void 0:k.message)==null?void 0:g.content)??"";C&&(u+=C,r==null||r(C))}}return u});this.baseUrl=wt(n),this.apiKey=t.trim(),this.requestedModel=r.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(r){const i=bn(this.baseUrl);throw new Error(i??`Can't reach ${this.baseUrl} (${r instanceof Error?r.message:String(r)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new Ln(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(r=>r.id).filter(r=>!!r),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof Ln&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(r=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${r instanceof Error?r.message:String(r)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const r=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${r?` — ${r.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}const mi=[{id:"onnx-community/Florence-2-base-ft",label:"Florence-2 base",downloadLabel:"~0.4 GB"},{id:"onnx-community/Florence-2-large-ft",label:"Florence-2 large (higher quality)",downloadLabel:"~1.6 GB"}],yt=mi.map(e=>({...e,label:`${e.label} (${e.downloadLabel})`})),Mt=yt[0].id,ui="<OCR>",Bn="UNKNOWN (scripted brain — connect the in-browser model to read a photo)";function pi(e,n){if(e)return typeof e=="function"?e(n):e[n]}class gi{constructor(n){O(this,"kind","scripted-vision");O(this,"model",null);O(this,"read",async(n,t,r)=>{const i=typeof n=="string"?pi(this.lookup,n)??Bn:Bn;return r==null||r(i),i});this.lookup=n}dispose(){}}function hi(e){return new gi(e)}class Rn{constructor(){O(this,"kind","browser-vision");O(this,"model",null);O(this,"modelHandle",null);O(this,"processor",null);O(this,"loadImage",null);O(this,"generation",0);O(this,"read",async(n,t,r)=>{const i=this.modelHandle,s=this.processor,l=this.loadImage;if(!i||!s||!l||!this.model)throw new Error("BrowserVisionBrain.read called before connect()");const m=t&&t.startsWith("<")?t:ui,u=await l(n),o=s.construct_prompts(m),d=await s(u,o),g=await i.generate({...d,max_new_tokens:512,num_beams:1,do_sample:!1}),p=s.batch_decode(g,{skip_special_tokens:!1})[0],_=s.post_process_generation(p,m,u.size),f=bi(_,m);return r==null||r(f),f})}async connect(n=Mt,t){var m,u;const r=await Ye("the scripted-vision fallback");if(r)throw new Error(r);if(this.modelHandle&&this.model===n)return n;const i=++this.generation,s=o=>{i===this.generation&&(t==null||t({progress:(o.progress??0)/100,text:o.file?`${o.status??"loading"} ${o.file}`:o.status??""}))};this.teardown();let l;try{const{Florence2ForConditionalGeneration:o,AutoProcessor:d,load_image:g}=await ce(async()=>{const{Florence2ForConditionalGeneration:f,AutoProcessor:y,load_image:b}=await import("./transformers.web-CHuVuBL5.js");return{Florence2ForConditionalGeneration:f,AutoProcessor:y,load_image:b}},[]),p=await o.from_pretrained(n,{dtype:"fp32",device:"webgpu",progress_callback:s}),_=await d.from_pretrained(n);l={model:p,processor:_,loadImage:g}}catch(o){if(i!==this.generation)throw new Error("cancelled");const d=o instanceof Error?o.message:String(o);throw new Error(`Couldn't load ${n} in the browser (${d}). Try the smaller Florence-2 base model, check your connection, or use the scripted-vision fallback.`)}if(i!==this.generation)throw Promise.resolve((u=(m=l.model).dispose)==null?void 0:u.call(m)).catch(()=>{}),new Error("cancelled");return this.modelHandle=l.model,this.processor=l.processor,this.loadImage=l.loadImage,this.model=n,n}teardown(){var t;const n=this.modelHandle;this.modelHandle=null,this.processor=null,this.loadImage=null,this.model=null,Promise.resolve((t=n==null?void 0:n.dispose)==null?void 0:t.call(n)).catch(()=>{})}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}function bi(e,n){const t=e[n];if(typeof t=="string")return t.trim();if(t&&typeof t=="object"){const r=t.labels;return Array.isArray(r)?r.join(" ").trim():JSON.stringify(t)}return""}async function fi(){return await ii()?"browser":_t()?"endpoint":"scripted"}function _i(){const[e,n]=h.useState("scripted"),t=h.useRef(!1),[r,i]=h.useState("idle"),[s,l]=h.useState(null),[m,u]=h.useState(null),[o,d]=h.useState(null),[g,p]=h.useState(null),[_,f]=h.useState(null),[y,b]=h.useState(null),[M,k]=h.useState(ht),[C,W]=h.useState(ft),[Z,me]=h.useState(""),[Q,oe]=h.useState(""),[V,Y]=h.useState(null),N=h.useRef(null),[E,A]=h.useState("scripted-vision"),[D,U]=h.useState("idle"),[ge,ve]=h.useState(null),[ze,Ie]=h.useState(Mt),[Pe,xe]=h.useState(null),[tn,Te]=h.useState(null),[Oe,ae]=h.useState(null),[je,Se]=h.useState(null),X=h.useRef(null),Ne=h.useRef(!1),Ee=h.useCallback(I=>async(...P)=>{try{return await I.chat(...P)}catch(F){const ke=F instanceof Error?F.message:String(F);throw I instanceof We&&en(ke)&&(Y(null),u(null),i("error"),l(ke)),F}},[]),Ce=h.useCallback(I=>async(...P)=>{try{return await I.read(...P)}catch(F){const ke=F instanceof Error?F.message:String(F);throw en(ke)&&(Se(null),xe(null),U("error"),ve(ke)),F}},[]);h.useEffect(()=>{Ye().then(I=>{f(I),p(I===null),t.current||(t.current=!0,fi().then(n))}),Ye("the scripted-vision fallback").then(I=>{ae(I),Ne.current||(Ne.current=!0,A(I===null?"browser-vision":"scripted-vision"))})},[]),h.useEffect(()=>{let I=!1;return b(null),li(M).then(P=>{I||b(P)}),()=>{I=!0}},[M]),h.useEffect(()=>()=>{var I;return(I=N.current)==null?void 0:I.dispose()},[]),h.useEffect(()=>()=>{var I;return(I=X.current)==null?void 0:I.dispose()},[]);const G=h.useCallback(I=>{n(I),i("idle"),l(null),u(null),d(null),Y(null)},[]),he=h.useCallback(I=>{var P,F;Ne.current=!0,(P=X.current)==null||P.cancelConnect(),(F=X.current)==null||F.dispose(),X.current=null,A(I),U("idle"),ve(null),xe(null),Te(null),Se(null)},[]),ue=h.useCallback(()=>{var I;(I=N.current)==null||I.dispose(),N.current=null,Y(null),u(null)},[]),_e=h.useCallback(()=>{N.current instanceof We&&N.current.cancelConnect(),ue(),i("idle"),d(null),l(null)},[ue]),Qe=h.useCallback(async()=>{var I;if(e==="scripted"){Y(null),i("ready");return}if(e==="endpoint"){const P=bn(C);if(P){ue(),l(P),i("error");return}}i("connecting"),l(null),d(null);try{if(e==="browser"){const P=N.current instanceof We?N.current:new We;N.current&&N.current!==P&&N.current.dispose(),N.current=P;const F=await P.connect(M,d);u(F),Y(()=>Ee(P)),b(!0)}else{(I=N.current)==null||I.dispose();const P=new ci(C,Q,Z);N.current=P;const F=await P.connect();u(F),Y(()=>Ee(P))}i("ready")}catch(P){const F=P instanceof Error?P.message:String(P);if(F==="cancelled")return;l(F),i("error"),Y(null)}finally{d(null)}},[e,M,C,Z,Q,ue,Ee]),ne=h.useCallback(()=>{var I;(I=X.current)==null||I.dispose(),X.current=null,Se(null),xe(null)},[]),Le=h.useCallback(()=>{var I;(I=X.current)==null||I.cancelConnect(),ne(),U("idle"),Te(null),ve(null)},[ne]),Be=h.useCallback(async()=>{if(E==="scripted-vision"){ne(),U("ready"),ve(null);return}U("connecting"),ve(null),Te(null);try{const I=X.current instanceof Rn?X.current:new Rn;X.current&&X.current!==I&&X.current.dispose(),X.current=I;const P=await I.connect(ze,Te);xe(P),Se(()=>Ce(I)),U("ready")}catch(I){const P=I instanceof Error?I.message:String(I);if(P==="cancelled")return;ve(P),U("error"),Se(null),xe(null)}finally{Te(null)}},[E,ze,ne,Ce]);return{kind:e,setKind:G,status:r,error:s,modelInUse:m,progress:o,webgpu:g,webgpuReason:_,browserModelCached:y,cancelConnect:_e,browserModel:M,setBrowserModel:k,endpointUrl:C,setEndpointUrl:W,endpointModel:Z,setEndpointModel:me,apiKey:Q,setApiKey:oe,connect:Qe,chat:V,visionKind:E,setVisionKind:he,visionStatus:D,visionError:ge,visionModel:ze,setVisionModel:Ie,visionModelInUse:Pe,visionProgress:tn,visionWebgpuReason:Oe,connectVision:Be,cancelVisionConnect:Le,vision:je}}const gn="#s=",wi=["scripted","browser","endpoint"];function yi(e){return typeof e=="string"&&wi.includes(e)}function Mi(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,r={};return yi(t.brain)&&(r.brain=t.brain),r}}catch{}return{}}function vt(e=location.hash){if(!e.startsWith(gn))return{};let n;try{n=decodeURIComponent(e.slice(gn.length))}catch{return{}}return Mi(n)}function vi(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":gn+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function xi(e){const n={...vt(),...e},t=vi(n),r=new URL(location.href);r.hash=t,history.replaceState(history.state,"",r)}const zn=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server. Ollama by default. Local pages only."}],On=[{kind:"scripted-vision",label:"Scripted",hint:"No model. The example's known plate is returned — deterministic and offline."},{kind:"browser-vision",label:"In-browser (WebGPU)",hint:"Reads the photo with a vision model on your GPU. First run downloads weights."}];function Ni({brain:e,showText:n=!0,showVision:t=!1}){return a.jsxs("div",{className:"brain",children:[n&&a.jsx(Ei,{brain:e}),n&&t&&a.jsx("hr",{className:"brain-divider"}),t&&a.jsx(ki,{brain:e})]})}function Ei({brain:e}){const n=zn.find(o=>o.kind===e.kind),t=bn(e.endpointUrl),r=_t(),[i,s]=h.useState(nn);h.useEffect(()=>{si().then(s)},[]);const l=i.find(o=>o.id===e.browserModel),m=l?di(l,bt()):null,u=e.webgpu===!0?"browser":r&&e.webgpu===!1?"endpoint":null;return a.jsxs("div",{className:"brain-section",children:[a.jsxs("div",{className:"brain-kinds",children:[zn.map(o=>a.jsxs(q,{size:"sm",variant:e.kind===o.kind?"default":"secondary",onClick:()=>e.setKind(o.kind),children:[o.label,o.kind===u&&a.jsx(H,{variant:"info",className:"brain-recommended-badge",children:"recommended"})]},o.kind)),e.status==="ready"&&e.kind!=="scripted"&&a.jsx(H,{variant:"success",children:e.modelInUse??"connected"}),e.status==="connecting"&&a.jsx(H,{variant:"info",children:"connecting…"}),e.status==="error"&&a.jsx(H,{variant:"danger",children:"not connected"})]}),a.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&a.jsxs("div",{className:"brain-config",children:[a.jsxs("div",{className:"field",children:[a.jsx(Re,{htmlFor:"browser-model",children:"Model"}),a.jsxs(Xn,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[a.jsx(et,{id:"browser-model",children:a.jsx(nt,{})}),a.jsx(tt,{children:i.map(o=>a.jsx(rt,{value:o.id,children:o.label},o.id))})]}),e.browserModelCached===!0&&a.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&a.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&a.jsxs(se,{variant:"destructive",children:[a.jsx(de,{children:"No WebGPU in this browser"}),a.jsx(le,{children:e.webgpuReason})]}),e.webgpu!==!1&&m&&a.jsxs(se,{variant:"destructive",children:[a.jsx(de,{children:"This model may not fit in GPU memory"}),a.jsx(le,{children:m})]})]}),e.kind==="endpoint"&&a.jsxs("div",{className:"brain-config",children:[a.jsxs("div",{className:"field",children:[a.jsx(Re,{htmlFor:"endpoint-url",children:"Endpoint"}),a.jsx(rn,{id:"endpoint-url",value:e.endpointUrl,onChange:o=>e.setEndpointUrl(o.target.value),disabled:e.status==="connecting"}),a.jsxs("p",{className:"field-hint",children:["Ollama allows ",a.jsx("code",{children:"localhost"})," origins out of the box; set"," ",a.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}),t&&a.jsxs(se,{variant:"destructive",children:[a.jsx(de,{children:"A local server won't work from this URL"}),a.jsx(le,{children:t})]})]}),a.jsxs("div",{className:"field",children:[a.jsx(Re,{htmlFor:"endpoint-model",children:"Model (blank = first served)"}),a.jsx(rn,{id:"endpoint-model",placeholder:"llama3.2:3b",value:e.endpointModel,onChange:o=>e.setEndpointModel(o.target.value),disabled:e.status==="connecting"})]}),a.jsxs("div",{className:"field",children:[a.jsx(Re,{htmlFor:"endpoint-key",children:"API key (optional)"}),a.jsx(rn,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:o=>e.setApiKey(o.target.value),disabled:e.status==="connecting"})]})]}),e.kind!=="scripted"&&a.jsxs("div",{className:"brain-actions",children:[a.jsx(q,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting",children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&e.kind==="browser"&&a.jsx(q,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&a.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.error&&a.jsxs(se,{variant:"destructive",children:[a.jsx(de,{children:"Couldn't connect"}),a.jsx(le,{children:e.error})]})]})}function ki({brain:e}){const n=On.find(r=>r.kind===e.visionKind),t=e.webgpu===!0?"browser-vision":null;return a.jsxs("div",{className:"brain-section brain-vision",children:[a.jsx(Re,{children:"Vision (reads the image)"}),a.jsxs("div",{className:"brain-kinds",children:[On.map(r=>a.jsxs(q,{size:"sm",variant:e.visionKind===r.kind?"default":"secondary",onClick:()=>e.setVisionKind(r.kind),children:[r.label,r.kind===t&&a.jsx(H,{variant:"info",className:"brain-recommended-badge",children:"recommended"})]},r.kind)),e.visionStatus==="ready"&&e.visionKind==="browser-vision"&&a.jsx(H,{variant:"success",children:e.visionModelInUse??"connected"}),e.visionStatus==="connecting"&&a.jsx(H,{variant:"info",children:"connecting…"}),e.visionStatus==="error"&&a.jsx(H,{variant:"danger",children:"not connected"})]}),a.jsx("p",{className:"field-hint",children:n.hint}),e.visionKind==="scripted-vision"&&e.webgpu===!1&&e.visionWebgpuReason&&a.jsxs(se,{variant:"destructive",children:[a.jsx(de,{children:"No WebGPU in this browser"}),a.jsx(le,{children:e.visionWebgpuReason})]}),e.visionKind==="browser-vision"&&a.jsxs("div",{className:"brain-config",children:[a.jsxs("div",{className:"field",children:[a.jsx(Re,{htmlFor:"vision-model",children:"Model"}),a.jsxs(Xn,{value:e.visionModel,onValueChange:e.setVisionModel,disabled:e.visionStatus==="connecting",children:[a.jsx(et,{id:"vision-model",children:a.jsx(nt,{})}),a.jsx(tt,{children:yt.map(r=>a.jsx(rt,{value:r.id,children:r.label},r.id))})]}),a.jsx("p",{className:"field-hint",children:"Connecting downloads the weights once (size shown above), then caches them — every token is read on your GPU, no server."})]}),e.webgpu===!1&&e.visionWebgpuReason&&a.jsxs(se,{variant:"destructive",children:[a.jsx(de,{children:"No WebGPU in this browser"}),a.jsx(le,{children:e.visionWebgpuReason})]})]}),e.visionKind==="browser-vision"&&a.jsxs("div",{className:"brain-actions",children:[a.jsx(q,{size:"sm",onClick:()=>void e.connectVision(),disabled:e.visionStatus==="connecting",children:e.visionStatus==="ready"?"Reconnect":"Connect"}),e.visionStatus==="connecting"&&a.jsx(q,{size:"sm",variant:"secondary",onClick:e.cancelVisionConnect,children:"Cancel"}),e.visionProgress&&a.jsxs("span",{className:"field-hint",children:[Math.round(e.visionProgress.progress*100),"% —"," ",e.visionProgress.text]})]}),e.visionError&&a.jsxs(se,{variant:"destructive",children:[a.jsx(de,{children:"Couldn't connect the vision brain"}),a.jsx(le,{children:e.visionError})]})]})}function Ii({imageInput:e,value:n,onSelect:t,disabled:r=!1}){const[i,s]=h.useState(null),[l,m]=h.useState(!1),u=h.useRef(null),o=h.useId(),d=h.useId(),g=h.useCallback(f=>{s(URL.createObjectURL(f)),t({imageName:f.name,pixels:f})},[t]);h.useEffect(()=>{if(i)return()=>URL.revokeObjectURL(i)},[i]);const p=h.useCallback(f=>{const y=f==null?void 0:f[0];y&&y.type.startsWith("image/")&&g(y)},[g]),_=(n==null?void 0:n.imageId)!=null?e.seedImages.find(f=>f.id===n.imageId):void 0;return a.jsxs("div",{className:"image-input",children:[e.label&&a.jsx("p",{className:"field-hint",children:e.label}),a.jsx("p",{className:"image-input-label",id:o,children:"Seed photos"}),a.jsx("div",{className:"image-gallery",role:"group","aria-labelledby":o,children:e.seedImages.map(f=>{const y=(n==null?void 0:n.imageId)===f.id;return a.jsxs("button",{type:"button","aria-pressed":y,className:`image-thumb${y?" image-thumb--selected":""}`,disabled:r,title:f.label??f.id,onClick:()=>{s(null),u.current&&(u.current.value=""),t({imageId:f.id,pixels:f.file})},children:[a.jsx("img",{src:f.thumb??f.file,alt:f.label??f.id}),f.label&&a.jsx("span",{children:f.label})]},f.id)})}),a.jsx("label",{className:"image-input-label",htmlFor:d,children:"Or upload your own photo"}),a.jsxs("div",{className:`image-drop${l?" image-drop--over":""}`,onDragOver:f=>{f.preventDefault(),r||m(!0)},onDragLeave:()=>m(!1),onDrop:f=>{f.preventDefault(),m(!1),r||p(f.dataTransfer.files)},children:[a.jsx("input",{ref:u,id:d,type:"file",accept:"image/*",disabled:r,onChange:f=>p(f.target.files)}),a.jsx("p",{className:"field-hint",children:"Drag a photo here, or pick one. Uploading a photo the model has never seen is the proof this runs for real — nothing leaves your browser."})]}),(i||_)&&a.jsxs("div",{className:"image-preview",children:[a.jsx("img",{src:i??(_==null?void 0:_.file),alt:i?(n==null?void 0:n.imageName)??"uploaded photo":(_==null?void 0:_.label)??(_==null?void 0:_.id)??"selected photo"}),a.jsx("span",{className:"field-hint",children:i?`Uploaded: ${(n==null?void 0:n.imageName)??"your photo"}`:`Selected: ${(_==null?void 0:_.label)??(_==null?void 0:_.id)}`}),a.jsx("button",{type:"button",className:"image-clear-btn",disabled:r,onClick:()=>{s(null),u.current&&(u.current.value=""),t(null)},children:"Clear"})]})]})}function xt(e){return typeof e=="object"&&e!==null}function Ls(e){const n=new Set,t=r=>{xt(r)&&(typeof r.key=="string"&&n.add(r.key),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function Ti(e){const n={},t=r=>{xt(r)&&(typeof r.key=="string"&&"defaultValue"in r&&(n[r.key]=r.defaultValue??""),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}const ji="wdf:section:";function Nt(e){return ji+e}function Fn(e){try{const n=window.localStorage.getItem(Nt(e));return n==="1"?!0:n==="0"?!1:void 0}catch{return}}function Si(e,n){try{window.localStorage.setItem(Nt(e),n?"1":"0")}catch{}}function Ai(e,n=!0){const[t,r]=h.useState(()=>Fn(e)??n);h.useEffect(()=>{r(Fn(e)??n)},[e,n]);const i=h.useCallback(s=>{r(s),Si(e,s)},[e]);return[t,i]}function we({sectionId:e,title:n,description:t,defaultOpen:r=!0,className:i,children:s,...l}){const[m,u]=Ai(e,r);return a.jsx(Bt,{className:["panel",i].filter(Boolean).join(" "),"data-tour":l["data-tour"],children:a.jsxs(Rt,{open:m,onOpenChange:u,children:[a.jsxs(zt,{className:"panel-trigger",children:[a.jsxs("span",{className:"panel-trigger-text",children:[a.jsx("span",{className:"panel-title",children:n}),t!=null&&a.jsx("span",{className:"panel-desc",children:t})]}),a.jsx(Ot,{className:"panel-chevron","aria-hidden":!0})]}),a.jsx(Ft,{children:a.jsx(Ut,{children:s})})]})})}function Di(e){return e.entries!==void 0}function Pi(e){const n=[];let t=null;for(const r of e)r.turn!==void 0?t&&t.turn===r.turn?t.entries.push(r):(t={turn:r.turn,entries:[r]},n.push(t)):(t=null,n.push(r));return n}function Un(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Ci({activation:e,result:n,labelFor:t}){const r=e.elementId??"";return a.jsxs("div",{className:"timeline-tool",children:[a.jsxs("div",{className:"timeline-tool-head",children:[a.jsx(H,{variant:"info",children:"tool"}),a.jsx("strong",{children:t(r)||r}),a.jsx("code",{children:r})]}),e.args!==void 0&&Object.keys(e.args).length>0&&a.jsxs("div",{className:"timeline-kv",children:[a.jsx("span",{className:"timeline-kv-label",children:"arguments"}),a.jsx("code",{children:Un(e.args)})]}),a.jsxs("div",{className:"timeline-kv",children:[a.jsx("span",{className:"timeline-kv-label",children:"returned"}),a.jsx("code",{children:n?Un(n.result):"— waiting for the job to complete —"})]})]})}function Li({group:e,labelFor:n}){const t=e.entries.find(o=>o.kind==="llm"),r=e.entries.filter(o=>o.kind==="agent"&&o.elementId),i=e.entries.filter(o=>o.kind==="vars"&&o.elementId),s=e.entries.filter(o=>o.kind==="agent"&&!o.elementId),l=e.entries.filter(o=>o.kind==="error"),m=new Set(r.map(o=>o.elementId)),u=e.entries.filter(o=>o.kind==="tool"||o.kind==="vars"&&o.elementId&&!m.has(o.elementId)).sort((o,d)=>o.id-d.id);return a.jsxs("div",{className:"timeline-turn",children:[a.jsxs("div",{className:"timeline-turn-head",children:[a.jsxs(H,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&a.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&a.jsx("blockquote",{className:"timeline-reply",children:t.text}),s.map(o=>a.jsx("div",{className:"timeline-note",children:o.text},o.id)),r.map(o=>a.jsx(Ci,{activation:o,result:i.find(d=>d.elementId===o.elementId),labelFor:n},o.id)),u.map(o=>a.jsxs("div",{className:`log-line log-${o.kind}`,children:[o.pending?"⏳ ":"",o.text]},o.id)),l.map(o=>a.jsxs("div",{className:"timeline-error",children:["⚠ ",o.text]},o.id))]})}function Bi({log:e,elementStats:n=[],incidents:t=[],labelFor:r=i=>i}){const i=h.useMemo(()=>Pi(e),[e]),[s,l]=h.useState(!1),m=h.useRef(null);h.useEffect(()=>{const o=m.current;o&&(o.scrollTop=o.scrollHeight)},[i]);const u=()=>{var g;const o={log:e.map(({id:p,..._})=>_),elementStats:n,incidents:t},d=JSON.stringify(o,null,2);(g=navigator.clipboard)!=null&&g.writeText&&navigator.clipboard.writeText(d).then(()=>{l(!0),setTimeout(()=>l(!1),1500)}).catch(()=>{})};return a.jsxs(we,{sectionId:"activity",className:"grow",title:"Activity",description:"Agent turns, model replies, and tool calls — read top to bottom as a story.",children:[a.jsx("div",{className:"timeline-toolbar",children:a.jsx(q,{variant:"secondary",size:"sm",onClick:u,children:s?"Copied!":"Copy run as JSON"})}),a.jsx("div",{className:"timeline",ref:m,children:i.length===0?a.jsx("div",{className:"log-empty",children:"Press Run or Step to start."}):i.map(o=>Di(o)?a.jsx(Li,{group:o,labelFor:r},`turn-${o.turn}-${o.entries[0].id}`):a.jsxs("div",{className:`log-line log-${o.kind}`,children:[o.pending?"⏳ ":"",o.text]},o.id))}),(n.length>0||t.length>0)&&a.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&a.jsxs("div",{className:"timeline-stats",children:[a.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),a.jsx("ul",{children:n.filter(o=>o.completed>0||(o.active??0)>0).map(o=>a.jsxs("li",{children:[a.jsx("code",{children:r(o.elementId)||o.elementId})," ","completed ",o.completed,o.active?`, ${o.active} active`:""]},o.elementId))})]}),t.length>0&&a.jsxs("div",{className:"timeline-incidents",children:[a.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),a.jsx("ul",{children:t.map((o,d)=>a.jsxs("li",{children:[a.jsx("code",{children:r(o.elementId)||o.elementId})," —"," ",o.reason]},`${o.elementId}-${d}`))})]})]})]})}const fe={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function $n(e){return`[data-tour="${e}"]`}function Ri(e=location.search){return new URLSearchParams(e).get("tour")}function zi(e,n){var t;return((t=e.elementStats.find(r=>r.elementId===n))==null?void 0:t.completed)??0}function Oi(e,n){return!e||e.kind==="click"||!n?!1:e.kind==="activeElement"?n.activeElementIds.includes(e.elementId):zi(n,e.elementId)>=(e.atLeast??1)}function Fi(e){return"anchor"in e?$n(e.anchor):`${$n(fe.diagram)} [data-element-id="${Ui(e.elementId)}"]`}function Ui(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function $i(e){return e.map(n=>{const t=!!n.waitFor&&n.waitFor.kind!=="click";return{element:Fi(n.target),popover:{title:n.title,description:t?`${n.description} (continues automatically once you reach that point — or use Next to skip ahead)`:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}})}async function Gi(e,n={}){var s;const[{driver:t}]=await Promise.all([ce(()=>import("./driver.js-bj_ppY-Q.js"),[]),ce(()=>Promise.resolve({}),__vite__mapDeps([0]))]),r=$i(e),i=t({steps:r,showProgress:!0,allowClose:!0,skipMissingElement:!0,onHighlighted:(l,m,{index:u})=>{var o;u!==void 0&&((o=n.onIndexChange)==null||o.call(n,u))},onDestroyed:()=>{var l;(l=n.onDestroyed)==null||l.call(n)}});return i.drive(),(s=n.onIndexChange)==null||s.call(n,i.getActiveIndex()??0),{moveNext:()=>i.moveNext(),activeIndex:()=>i.getActiveIndex()??-1,destroy:()=>i.destroy()}}const Vi=300;function Yi(e,n){const[t,r]=h.useState(!1),i=h.useRef(null),s=h.useRef(0),l=h.useRef(-1),m=h.useRef(null),u=h.useRef(n);h.useEffect(()=>{u.current=n},[n]);const o=h.useCallback(()=>{m.current!==null&&(clearInterval(m.current),m.current=null)},[]),d=h.useRef(0),g=h.useCallback(()=>{var _;d.current+=1,o(),(_=i.current)==null||_.destroy(),i.current=null,r(!1)},[o]),p=h.useCallback(()=>{if(!e||e.steps.length===0||i.current)return;const _=d.current+=1;Gi(e.steps,{onIndexChange:f=>{s.current=f},onDestroyed:()=>{o(),i.current=null,r(!1)}}).then(f=>{if(_!==d.current){f.destroy();return}i.current=f,r(!0),m.current=setInterval(()=>{const y=s.current;if(y===l.current)return;const b=e.steps[y];b&&Oi(b.waitFor,u.current())&&(l.current=y,f.moveNext())},Vi)})},[e,o]);return h.useEffect(()=>g,[g]),{active:t,start:p,stop:g}}const Ze=650,an="__agent__",Gn="__model__",Vn="__template__:",Qi=h.lazy(async()=>{await Promise.all([ce(()=>Promise.resolve({}),__vite__mapDeps([1])),ce(()=>Promise.resolve({}),__vite__mapDeps([2]))]);const{RuntimeDiagram:e}=await ce(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-B2IYfHo7.js");return{RuntimeDiagram:n}},__vite__mapDeps([3,4,5]));return{default:e}}),sn=h.lazy(()=>ce(()=>import("./MonacoEditor-CVtpGC_H.js").then(e=>e.M),__vite__mapDeps([6,4,7]))),Ji=h.lazy(()=>ce(()=>import("./vendor-modeler-CkziDt-P.js"),__vite__mapDeps([8,4,5,9,10,11,12,1,2]))),Yn=h.lazy(async()=>{const{FormRenderer:e}=await ce(async()=>{const{FormRenderer:n}=await import("./FormRenderer-D8VK5rpm.js");return{FormRenderer:n}},__vite__mapDeps([13,4,11,9,10,14]));return{default:e}});function dn(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function qi({example:e,initialBrainKind:n,initialTourId:t}){var _n,wn,yn,Mn,vn,xn,Nn,En;const[r,i]=h.useState(e.bpmn),s=_i(),[l,m]=h.useState(null);h.useEffect(()=>{n&&n!==s.kind&&s.setKind(n)},[]),h.useEffect(()=>{xi({brain:s.kind})},[s.kind]);const[u,o]=h.useState(()=>Object.fromEntries(e.handlers.map(v=>[v.elementId,v.source]))),[d,g]=h.useState(e.scriptedAgent??""),[p,_]=h.useState(()=>Ve(e.templates)),f=h.useMemo(()=>kr(e,u,r,p),[e,u,r,p]),y=f.model,b=ei({bpmn:f.resolvedBpmn}),M=Yi(e.tour,()=>b.snapshot);h.useEffect(()=>{var v;t&&((v=e.tour)==null?void 0:v.id)===t&&M.start()},[]);const k=y.startFormId?((_n=e.forms)==null?void 0:_n[y.startFormId])??null:null,[C,W]=h.useState(()=>({...e.seed,...k?Ti(k):{}})),[Z,me]=h.useState(y.agent?an:((wn=e.handlers[0])==null?void 0:wn.elementId)??""),[Q,oe]=h.useState(!1),[V,Y]=h.useState(!1),[N,E]=h.useState(null),[A,D]=h.useState([]),[U,ge]=h.useState({}),[ve,ze]=h.useState(!1),Ie=h.useRef(null),[Pe,xe]=h.useState({}),[tn,Te]=h.useState(!1),Oe=h.useRef(null),ae=h.useRef(!1),je=h.useRef(0),Se=h.useRef(0),X=h.useRef({current:void 0}),Ne=h.useRef({}),Ee=h.useRef({}),Ce=h.useMemo(()=>{const v=new Map;for(const x of y.processes){for(const T of x.tasks)v.set(T.elementId,T.label);for(const T of x.agents){v.set(T.elementId,T.label);for(const B of T.tools)v.set(B.elementId,B.label)}for(const T of x.userTasks)v.set(T.elementId,T.label)}return x=>v.get(x)??x},[y]),G=h.useCallback(v=>{D(x=>{if(v.key){const T=x.findIndex(B=>B.key===v.key);if(T>=0){const B=[...x];return B[T]={...B[T],...v},B}}return[...x,{...v,id:Se.current++}].slice(-80)})},[]),he=h.useMemo(()=>{var v;return((v=b.snapshot)==null?void 0:v.userTasks.find(x=>x.state==="Created"))??null},[b.snapshot]),ue=h.useMemo(()=>{const v=y.processes.flatMap(T=>T.tasks),x=new Map;for(const T of e.handlers){if(!T.manualControl)continue;const B=v.find(L=>L.elementId===T.elementId);B&&x.set(B.jobType,{...T.manualControl,elementId:T.elementId})}return x},[e.handlers,y]),_e=h.useMemo(()=>{if(!b.snapshot)return null;for(const v of b.snapshot.jobs){const x=ue.get(v.jobType);if(x&&v.state==="Created")return{job:v,control:x}}return null},[b.snapshot,ue]),Qe=h.useMemo(()=>{if(!y.agent||!b.snapshot)return[];const v=new Map(b.snapshot.elementStats.map(x=>[x.elementId,x.completed]));return y.agent.tools.filter(x=>(v.get(x.elementId)??0)===0)},[y.agent,b.snapshot]),ne=he?y.userTasks.find(v=>v.elementId===he.elementId):void 0,Le=ne!=null&&ne.formId?((yn=e.forms)==null?void 0:yn[ne.formId])??null:null,Be=h.useCallback(async(v,x,T,B)=>{var pe,ee;let L=T,te=0;for(;je.current===B&&L&&L.completedInstances<1&&te++<80;){const J=await b.stepWorkers(v,{agents:x});if(je.current!==B)return L;L=(J==null?void 0:J.snapshot)??L;const ie=(pe=L.instances[0])==null?void 0:pe.variables;if(ie&&ge({...ie}),L.userTasks.some($=>$.state==="Created")){G({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!J){G({kind:"error",text:"▶ run stopped — no dispatch round was returned"});break}if(J.handled===0){if(J.reason==="signals"&&L.signalSubscriptions.length>0){const $=L.signalSubscriptions[0],be=b.broadcastSignal($.signalName,"{}");if(be){L=be,G({kind:"vars",text:`📡 broadcasting signal "${$.signalName}" — every waiting subscription unblocks`,elementId:$.elementId});const re=(ee=L.instances[0])==null?void 0:ee.variables;re&&ge({...re}),await new Promise(Ae=>setTimeout(Ae,Ze));continue}G({kind:"error",text:`▶ run stopped — broadcasting signal "${$.signalName}" failed`,elementId:$.elementId})}break}await new Promise($=>setTimeout($,Ze))}return L&&L.completedInstances>=1?G({kind:"done",text:"✅ process instance completed"}):L&&L.incidentElementIds.length>0&&G({kind:"error",text:"A job failed — incident on the diagram"}),L},[b,G]),I=h.useCallback(async v=>{var L,te,pe;if(!_e||ae.current)return;const{job:x,control:T}=_e,B=++je.current;ae.current=!0,oe(!0);try{let ee,J;if(v==="complete")ee=b.completeJobManually(x.jobType,"{}"),J="  ↳ completed normally";else if(T.action.kind==="timer"){const ie=((te=(L=b.snapshot)==null?void 0:L.timers[0])==null?void 0:te.dueInMs)??0;ee=b.advanceTime(Math.max(ie,0)+1),J="  ↳ advanced the clock — timer fired"}else{const{errorCode:ie,message:$}=T.action;ee=b.throwJobError(x.jobType,ie,$),J=`  ↳ threw BPMN error ${ie}: ${$}`}if(ee){G({kind:"vars",text:J,elementId:x.elementId});const ie=(pe=ee.instances[0])==null?void 0:pe.variables;ie&&ge({...ie}),await new Promise($=>setTimeout($,Ze)),await Be(Ne.current,Ee.current,ee,B)}else G({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:x.elementId})}finally{ae.current=!1,oe(!1)}},[_e,b,G,Be]),P=h.useCallback(async()=>{var ie;let v=null;try{y.agent&&d.trim()&&(v=hr(d))}catch($){return E($ instanceof Error?$.message:String($)),null}X.current={current:void 0};let x;if(e.imageInput){const $=s.vision;x={read:$??hi(e.scriptedVision).read,live:!!$,resolve:re=>b.getRunImage(re)}}const T=_r(y,f.handlers,G,X.current,x);for(const $ of ue.keys())delete T[$];const B={};if(y.agents.length>0){if(s.kind!=="scripted"&&s.chat){const be=new Map;for(const re of y.agents)be.set(re.jobType,[...be.get(re.jobType)??[],re]);for(const[re,Ae]of be)B[re]=Lr(Ae,s.chat,G,{turnRef:X.current,requiredTools:e.requiredTools})}else if(v&&y.agent){const be=y.agent.elementId;B[y.agent.jobType]=async re=>{if(re.elementId!==be)throw new Error(`No scripted agent handler for "${re.elementId}" — only "${be}" (the primary process's first agent host) is driven by the scripted brain. Use a live brain to exercise more than one host.`);const Ae=await v(re),At=(Ae.activateElements??[]).map(Dt=>Dt.elementId).join(", ");return G({kind:"agent",text:Ae.completionConditionFulfilled?"🤖 scripted agent: done":`🤖 scripted agent: calling ${At||"(nothing)"}`}),Ae}}}D([]),xe({});const L={...e.seed,...C,...sr(e.imageInput?l:null)};ge(L),Ne.current=T,Ee.current=B;const te=b.redeploy(r),pe=(te==null?void 0:te[0])??y.processId;G({kind:"start",text:`Starting "${pe}" — ${y.agent?s.kind==="scripted"||!s.chat?"scripted brain":`live brain (${s.modelInUse??s.kind})`:"no agent in this model"}`});const ee=b.createInstance(pe,JSON.stringify(L)),J=(ie=ee==null?void 0:ee.instances[0])==null?void 0:ie.key;return e.imageInput&&l&&J&&b.setRunImage(J,l),{workers:T,agents:B,snap:ee}},[b,e,f,r,d,C,l,y,s,G,ue]),F=!!b.snapshot&&b.snapshot.completedInstances<1,ke=!F&&!!k&&!ve,kt=h.useCallback(async()=>{if(!(b.phase!=="ready"||ae.current||V||f.hasErrors)){ae.current=!0,oe(!0);try{let v=Ne.current,x=Ee.current,T=b.snapshot;const B=++je.current;if(!F){if(Ie.current&&!Ie.current.validate())return;E(null);const L=await P();if(!L)return;v=L.workers,x=L.agents,T=L.snap,await new Promise(te=>setTimeout(te,Ze))}await Be(v,x,T,B)}finally{ae.current=!1,oe(!1)}}},[b,V,f.hasErrors,F,P,Be]),It=h.useCallback(async()=>{var v;if(!(b.phase!=="ready"||ae.current||V||f.hasErrors)){ae.current=!0,Y(!0);try{let x=Ne.current,T=Ee.current,B=b.snapshot;if(!F){if(Ie.current&&!Ie.current.validate())return;E(null);const J=await P();if(!J)return;x=J.workers,T=J.agents,B=J.snap}if(!B||B.completedInstances>=1)return;const L=B.takenSequenceFlows.length,te=await b.stepWorkers(x,{agents:T});if(!te){G({kind:"error",text:"⏭ step failed — no dispatch round was returned"});return}const pe=(v=te.snapshot.instances[0])==null?void 0:v.variables;pe&&ge({...pe});const ee=ni(te.snapshot.takenSequenceFlows,L);G(ti(te,ee,Ce,ue))}finally{ae.current=!1,Y(!1)}}},[b,V,f.hasErrors,F,P,G,Ce,ue]),Tt=h.useCallback(()=>{ae.current=!1,je.current++,oe(!1),Y(!1),b.reset(),D([]),ge({})},[b]),jt=h.useCallback(()=>{if(!he||Oe.current&&!Oe.current.validate())return;const v=b.completeUserTask(he.key,JSON.stringify(Pe));G({kind:"human",text:`👤 ${dn(Pe)}`}),v&&v.completedInstances>=1&&G({kind:"done",text:"✅ process instance completed"})},[he,Pe,b,G]),St=h.useMemo(()=>{var v,x;return b.phase==="loading"?a.jsx(H,{variant:"neutral",children:"Booting engine…"}):b.phase==="error"?a.jsx(H,{variant:"danger",children:"Engine error"}):Q?a.jsx(H,{variant:"info",children:"Running…"}):V?a.jsx(H,{variant:"info",children:"Stepping…"}):(((v=b.snapshot)==null?void 0:v.incidentElementIds.length)??0)>0?a.jsx(H,{variant:"danger",children:"Incident"}):he?a.jsx(H,{variant:"warning",children:"Waiting for a human"}):(((x=b.snapshot)==null?void 0:x.completedInstances)??0)>=1?a.jsx(H,{variant:"success",children:"Completed"}):b.snapshot?a.jsx(H,{variant:"warning",children:"Paused"}):a.jsx(H,{variant:"neutral",children:"Ready"})},[b.phase,b.snapshot,Q,V,he]);return a.jsxs("div",{className:"runner",children:[a.jsxs("section",{className:"intro",children:[a.jsx("h1",{children:e.title}),a.jsx("p",{children:e.blurb}),a.jsxs("div",{className:"controls",children:[a.jsx(q,{"data-tour":fe.runButton,onClick:()=>void kt(),disabled:b.phase!=="ready"||Q||V||f.hasErrors||ke,children:"▶ Run"}),a.jsx(q,{variant:"secondary",onClick:()=>void It(),disabled:b.phase!=="ready"||Q||V||f.hasErrors||ke||(((Mn=b.snapshot)==null?void 0:Mn.completedInstances)??0)>=1,children:"⏭ Step"}),a.jsx(q,{variant:"secondary",onClick:Tt,disabled:b.phase!=="ready"||V,children:"↺ Reset"}),e.tour&&a.jsx(q,{variant:"secondary",onClick:M.start,disabled:M.active,children:M.active?"Touring…":`🧭 ${e.tour.label}`}),St]}),b.phase==="error"&&a.jsxs(se,{variant:"destructive",children:[a.jsx(de,{children:"Engine error"}),a.jsx(le,{children:b.error})]}),N&&a.jsxs(se,{variant:"destructive",children:[a.jsx(de,{children:"Code didn't compile"}),a.jsx(le,{children:N})]}),f.hasErrors&&a.jsxs(se,{variant:"destructive",children:[a.jsx(de,{children:"Run is disabled — the diagram has unresolved references"}),a.jsx(le,{children:a.jsx("ul",{className:"diagnostics",children:f.diagnostics.filter(v=>v.severity==="error").map((v,x)=>a.jsx("li",{children:v.message},x))})})]}),!f.hasErrors&&f.diagnostics.length>0&&a.jsxs(se,{children:[a.jsx(de,{children:"Heads up"}),a.jsx(le,{children:a.jsx("ul",{className:"diagnostics",children:f.diagnostics.map((v,x)=>a.jsx("li",{children:v.message},x))})})]})]}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"col",children:[a.jsx(we,{sectionId:"process","data-tour":fe.diagram,title:"Process",description:`${y.processName} — live token (green), incidents (red).`,children:a.jsx(h.Suspense,{fallback:a.jsx("div",{className:"diagram-fallback",children:b.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:a.jsx(Qi,{xml:f.resolvedBpmn,activeIds:((vn=b.snapshot)==null?void 0:vn.activeElementIds)??[],incidentIds:((xn=b.snapshot)==null?void 0:xn.incidentElementIds)??[],className:"diagram"})})}),he&&a.jsxs(we,{sectionId:"human-task",title:(ne==null?void 0:ne.label)??"Human task",description:Le?`Rendered from the model's form "${ne==null?void 0:ne.formId}".`:"This task has no linked form — complete it with no variables.",children:[Qe.length>0&&a.jsxs(se,{variant:"destructive",children:[a.jsx(de,{children:"The agent didn't finish its checks"}),a.jsxs(le,{children:["It completed without running"," ",Qe.map(v=>v.label||v.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),Le&&a.jsx(h.Suspense,{fallback:a.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:a.jsx(Yn,{ref:Oe,schema:Le,values:Pe,onChange:(v,x)=>xe(T=>({...T,[v]:x})),context:U,onValidityChange:Te})}),a.jsx(q,{onClick:jt,disabled:!!Le&&!tn,children:"Complete task"})]}),_e&&a.jsx(we,{sectionId:"manual-job",title:_e.control.label,description:"This job is held here on purpose — pick how it resolves.",children:a.jsxs("div",{className:"controls",children:[a.jsx(q,{onClick:()=>void I("complete"),disabled:Q||V,children:_e.control.completeLabel??"✅ Complete normally"}),a.jsx(q,{variant:"secondary",onClick:()=>void I("action"),disabled:Q||V,children:_e.control.action.label})]})}),a.jsxs("div",{className:"row",children:[a.jsx(we,{sectionId:"variables",className:"grow","data-tour":fe.variablesPanel,title:"Variables",description:"The instance payload, live.",children:a.jsx("pre",{className:"vars",children:dn(U,2)})}),a.jsx(Bi,{log:A,elementStats:(Nn=b.snapshot)==null?void 0:Nn.elementStats,incidents:(En=b.snapshot)==null?void 0:En.incidents,labelFor:Ce})]})]}),a.jsxs("div",{className:"col",children:[(y.agent||e.imageInput)&&a.jsx(we,{sectionId:"brain","data-tour":fe.brainPanel,title:"Brain",description:y.agent?`What drives “${y.agent.label}”. The model recommends; the process governs.`:"What reads the image. The model recommends; the process governs.",children:a.jsx(Ni,{brain:s,showText:!!y.agent,showVision:!!e.imageInput})}),a.jsxs(we,{sectionId:"start",title:"Start",description:y.startFormId?`The model's start form "${y.startFormId}".`:e.imageInput?"Pick a seed photo or upload your own to read.":"The starting payload.",children:[e.imageInput&&a.jsx(Ii,{imageInput:e.imageInput,value:l,onSelect:m,disabled:Q}),e.scenarios&&a.jsx("div",{className:"scenarios",children:e.scenarios.map(v=>a.jsx(q,{size:"sm",variant:"secondary",disabled:Q,onClick:()=>W(x=>({...x,...v.variables})),children:v.label},v.label))}),k?a.jsx(h.Suspense,{fallback:a.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:a.jsx(Yn,{ref:Ie,schema:k,values:C,onChange:(v,x)=>W(T=>({...T,[v]:x})),disabled:Q,onValidityChange:ze})}):a.jsx("pre",{className:"vars",children:dn(C,2)})]}),a.jsx(we,{sectionId:"code",className:"editors","data-tour":fe.codePanel,title:"Code",description:"One handler per BPMN element. Return variables to merge, or throw to fail the job.",children:a.jsx(h.Suspense,{fallback:a.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:a.jsxs($t,{value:Z,onValueChange:me,children:[a.jsxs(Gt,{children:[a.jsx(Je,{value:Gn,children:"model"}),y.agent&&a.jsx(Je,{value:an,children:"agent (scripted)"}),e.handlers.map(v=>{var x;return a.jsx(Je,{value:v.elementId,children:((x=y.tasks.find(T=>T.elementId===v.elementId))==null?void 0:x.label)??v.elementId},v.elementId)}),Object.keys(p).map(v=>a.jsx(Je,{value:Vn+v,children:v},v))]}),a.jsxs(qe,{value:Gn,children:[a.jsxs("div",{className:"editor-meta",children:[a.jsx("strong",{children:"Model"}),a.jsx("code",{children:"edit the diagram visually — Run re-checks it below"}),a.jsx(q,{variant:"secondary",size:"sm",onClick:()=>i(e.bpmn),disabled:r===e.bpmn,children:"Revert to original"})]}),a.jsx(Ji,{value:r,onChange:i})]}),y.agent&&a.jsxs(qe,{value:an,children:[a.jsxs("div",{className:"editor-meta",children:[a.jsx("strong",{children:y.agent.label}),a.jsx("code",{children:s.kind==="scripted"||!s.chat?"in use":"unused — a live brain is connected"})]}),a.jsx("div",{className:"editor-wrap",children:a.jsx(sn,{height:"360px",defaultLanguage:"javascript",value:d,onChange:v=>g(v??""),options:ln})})]}),e.handlers.map(v=>{var x;return a.jsxs(qe,{value:v.elementId,children:[a.jsxs("div",{className:"editor-meta",children:[a.jsx("strong",{children:((x=y.tasks.find(T=>T.elementId===v.elementId))==null?void 0:x.label)??v.elementId}),a.jsx("code",{children:v.standsInFor??v.elementId})]}),a.jsx("div",{className:"editor-wrap",children:a.jsx(sn,{height:"360px",defaultLanguage:"javascript",value:u[v.elementId],onChange:T=>o(B=>({...B,[v.elementId]:T??""})),options:ln})})]},v.elementId)}),Object.keys(p).map(v=>a.jsxs(qe,{value:Vn+v,children:[a.jsxs("div",{className:"editor-meta",children:[a.jsx("strong",{children:v}),a.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+v+"}}"]})]}),a.jsx("div",{className:"editor-wrap",children:a.jsx(sn,{height:"360px",defaultLanguage:"markdown",value:p[v],onChange:x=>_(T=>Ve(T,{[v]:x??""})),options:ln})})]},v))]})})}),y.agent&&a.jsx(we,{sectionId:"tools",title:"Tools, as the model sees them",description:a.jsxs(a.Fragment,{children:["Read from the diagram — element name, documentation, and every",a.jsx("code",{children:" fromAi(…)"})," argument."]}),children:a.jsx("ul",{className:"tool-list",children:y.agent.tools.map(v=>a.jsxs("li",{children:[a.jsx("code",{children:v.elementId}),a.jsxs("span",{children:[" — ",v.documentation||v.label]}),v.args.length>0&&a.jsx("ul",{children:v.args.map(x=>a.jsxs("li",{children:[a.jsxs("code",{children:[x.name,": ",x.type]})," ","— ",x.description]},x.name))})]},v.elementId))})})]})]})]})}const ln={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},Hi=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_learn_exclusive_gateway" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:process id="learn_exclusive_gateway" name="Exclusive gateway" isExecutable="true">\r
    <bpmn:startEvent id="StartEvent_1" name="Order placed">\r
      <bpmn:outgoing>Flow_to_check</bpmn:outgoing>\r
    </bpmn:startEvent>\r
    <bpmn:serviceTask id="Activity_check_order" name="Check order total">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="check-order-total" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_to_check</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_gateway</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:exclusiveGateway id="Gateway_shipping_route" name="Which shipping route?" default="Flow_to_standard">\r
      <bpmn:incoming>Flow_to_gateway</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_express</bpmn:outgoing>\r
      <bpmn:outgoing>Flow_to_standard</bpmn:outgoing>\r
    </bpmn:exclusiveGateway>\r
    <bpmn:sequenceFlow id="Flow_to_express" name="route = &#34;express&#34;" sourceRef="Gateway_shipping_route" targetRef="Activity_express_ship">\r
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">=route = "express"</bpmn:conditionExpression>\r
    </bpmn:sequenceFlow>\r
    <bpmn:sequenceFlow id="Flow_to_standard" name="default" sourceRef="Gateway_shipping_route" targetRef="Activity_standard_ship" />\r
    <bpmn:serviceTask id="Activity_express_ship" name="Express ship">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="express-ship" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_to_express</bpmn:incoming>\r
      <bpmn:outgoing>Flow_express_to_end</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:serviceTask id="Activity_standard_ship" name="Standard ship">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="standard-ship" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_to_standard</bpmn:incoming>\r
      <bpmn:outgoing>Flow_standard_to_end</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:endEvent id="Event_express_done" name="Shipped express">\r
      <bpmn:incoming>Flow_express_to_end</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:endEvent id="Event_standard_done" name="Shipped standard">\r
      <bpmn:incoming>Flow_standard_to_end</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_to_check" sourceRef="StartEvent_1" targetRef="Activity_check_order" />\r
    <bpmn:sequenceFlow id="Flow_to_gateway" sourceRef="Activity_check_order" targetRef="Gateway_shipping_route" />\r
    <bpmn:sequenceFlow id="Flow_express_to_end" sourceRef="Activity_express_ship" targetRef="Event_express_done" />\r
    <bpmn:sequenceFlow id="Flow_standard_to_end" sourceRef="Activity_standard_ship" targetRef="Event_standard_done" />\r
  </bpmn:process>\r
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="learn_exclusive_gateway">\r
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\r
        <dc:Bounds x="152" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="130" y="255" width="80" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_check_order_di" bpmnElement="Activity_check_order">\r
        <dc:Bounds x="240" y="190" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Gateway_shipping_route_di" bpmnElement="Gateway_shipping_route" isMarkerVisible="true">\r
        <dc:Bounds x="395" y="205" width="50" height="50" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="378" y="262" width="84" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_express_ship_di" bpmnElement="Activity_express_ship">\r
        <dc:Bounds x="520" y="90" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_standard_ship_di" bpmnElement="Activity_standard_ship">\r
        <dc:Bounds x="520" y="270" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_express_done_di" bpmnElement="Event_express_done">\r
        <dc:Bounds x="682" y="112" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="660" y="155" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_standard_done_di" bpmnElement="Event_standard_done">\r
        <dc:Bounds x="682" y="292" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="660" y="335" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNEdge id="Flow_to_check_di" bpmnElement="Flow_to_check">\r
        <di:waypoint x="188" y="230" />\r
        <di:waypoint x="240" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_gateway_di" bpmnElement="Flow_to_gateway">\r
        <di:waypoint x="340" y="230" />\r
        <di:waypoint x="395" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_express_di" bpmnElement="Flow_to_express">\r
        <di:waypoint x="420" y="205" />\r
        <di:waypoint x="420" y="130" />\r
        <di:waypoint x="520" y="130" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_standard_di" bpmnElement="Flow_to_standard">\r
        <di:waypoint x="420" y="255" />\r
        <di:waypoint x="420" y="310" />\r
        <di:waypoint x="520" y="310" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_express_to_end_di" bpmnElement="Flow_express_to_end">\r
        <di:waypoint x="620" y="130" />\r
        <di:waypoint x="682" y="130" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_standard_to_end_di" bpmnElement="Flow_standard_to_end">\r
        <di:waypoint x="620" y="310" />\r
        <di:waypoint x="682" y="310" />\r
      </bpmndi:BPMNEdge>\r
    </bpmndi:BPMNPlane>\r
  </bpmndi:BPMNDiagram>\r
</bpmn:definitions>\r
`,Wi=`async (job, { num, trace, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const orderTotal = num("orderTotal", 40);

  await sleep(300);

  // This is the variable the gateway's conditional sequence flow reads —
  // whatever this handler decides is what actually steers the token.
  const route = orderTotal >= 100 ? "express" : "standard";
  trace(\`order total $\${orderTotal} -> route: \${route}\`);

  // Whatever you return is merged onto the process instance.
  return { route };
}`,Zi=`async (job, { trace, sleep }) => {
  trace("expedited courier picks up the order");
  await sleep(400);

  return { shipped: true, method: "express" };
}`,Ki=`async (job, { trace, sleep }) => {
  trace("order queued for standard courier pickup");
  await sleep(400);

  return { shipped: true, method: "standard" };
}`,Xi={id:"learn-exclusive-gateway",title:"Exclusive gateway",group:"learn-bpmn",blurb:"An exclusive gateway is the fork in the road: exactly one of its outgoing sequence flows is taken, chosen by evaluating each flow's FEEL condition in declaration order, first match wins. A default flow (drawn with a slash through its start, not a diamond marker) has no condition and is the fallback taken when every conditional flow evaluates false — that's what makes an exclusive gateway safe to deploy without an explicit case for every value. Run this and watch 'Check order total' decide a route variable, then watch the gateway send the token down 'Express ship' when the order is large enough, or 'Standard ship' otherwise (the default flow) — try both by editing orderTotal in the start form. Get the condition wrong (or misspell the variable name) and the flow you meant to take is silently skipped in favour of whichever one does evaluate true, or the default if none do — no error, just the wrong branch.",docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/gateways/gateways/#exclusive-gateway",bpmn:Hi,seed:{orderTotal:40},scenarios:[{label:"Small order — standard ship (default flow)",variables:{orderTotal:40}},{label:"Large order — express ship (conditional flow)",variables:{orderTotal:150}}],handlers:[{elementId:"Activity_check_order",standsInFor:"job worker — check-order-total",source:Wi},{elementId:"Activity_express_ship",standsInFor:"job worker — express-ship",source:Zi},{elementId:"Activity_standard_ship",standsInFor:"job worker — standard-ship",source:Ki}]},eo=Object.freeze(Object.defineProperty({__proto__:null,default:Xi},Symbol.toStringTag,{value:"Module"})),no=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_learn_service_task" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:process id="learn_service_task" name="Service task + sequence flow" isExecutable="true">\r
    <bpmn:startEvent id="StartEvent_1" name="Order placed">\r
      <bpmn:outgoing>Flow_to_prepare</bpmn:outgoing>\r
    </bpmn:startEvent>\r
    <bpmn:serviceTask id="Activity_prepare" name="Prepare package">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="prepare-package" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_to_prepare</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_dispatch</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:serviceTask id="Activity_dispatch" name="Dispatch courier">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="dispatch-courier" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_to_dispatch</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_end</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:endEvent id="Event_done" name="Package on its way">\r
      <bpmn:incoming>Flow_to_end</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_to_prepare" sourceRef="StartEvent_1" targetRef="Activity_prepare" />\r
    <bpmn:sequenceFlow id="Flow_to_dispatch" sourceRef="Activity_prepare" targetRef="Activity_dispatch" />\r
    <bpmn:sequenceFlow id="Flow_to_end" sourceRef="Activity_dispatch" targetRef="Event_done" />\r
  </bpmn:process>\r
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="learn_service_task">\r
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\r
        <dc:Bounds x="182" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="160" y="255" width="80" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_prepare_di" bpmnElement="Activity_prepare">\r
        <dc:Bounds x="270" y="190" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_dispatch_di" bpmnElement="Activity_dispatch">\r
        <dc:Bounds x="430" y="190" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_done_di" bpmnElement="Event_done">\r
        <dc:Bounds x="592" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="570" y="255" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNEdge id="Flow_to_prepare_di" bpmnElement="Flow_to_prepare">\r
        <di:waypoint x="218" y="230" />\r
        <di:waypoint x="270" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_dispatch_di" bpmnElement="Flow_to_dispatch">\r
        <di:waypoint x="370" y="230" />\r
        <di:waypoint x="430" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_end_di" bpmnElement="Flow_to_end">\r
        <di:waypoint x="530" y="230" />\r
        <di:waypoint x="592" y="230" />\r
      </bpmndi:BPMNEdge>\r
    </bpmndi:BPMNPlane>\r
  </bpmndi:BPMNDiagram>\r
</bpmn:definitions>\r
`,to=`async (job, { text, sleep, trace }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "widget");

  trace("packing " + item);
  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { packed: true };
}`,ro=`async (job, { sleep, trace }) => {
  trace("handing over to the courier");
  await sleep(400);

  return { dispatched: true, tracking: "SVC" + Math.floor(Math.random() * 1e9) };
}`,io={id:"learn-service-task",title:"Service task + sequence flow",group:"learn-bpmn",blurb:"A service task is a unit of work a worker (not a human) performs; a sequence flow is the arrow that hands the token from one to the next once its task completes. Run this and watch each task activate, run its handler, and complete in order — Prepare package, then Dispatch courier — before the process reaches its end event. Miss the zeebe:taskDefinition type on a service task and the model still deploys fine, but no worker is ever listening for that job type, so the run stalls forever waiting on a job nothing services — see the note below for how that looks.",docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/service-tasks/",bpmn:no,seed:{item:"camunda-t-shirt"},handlers:[{elementId:"Activity_prepare",standsInFor:"job worker — prepare-package",source:to},{elementId:"Activity_dispatch",standsInFor:"job worker — dispatch-courier",source:ro}]},oo=Object.freeze(Object.defineProperty({__proto__:null,default:io},Symbol.toStringTag,{value:"Module"})),ao=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_learn_signal_broadcast" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:signal id="Signal_AllClear" name="all-clear" />\r
  <bpmn:process id="learn_signal_broadcast" name="Signal intermediate catch event + broadcast" isExecutable="true">\r
    <bpmn:startEvent id="StartEvent_1" name="Shift begins">\r
      <bpmn:outgoing>Flow_to_wait</bpmn:outgoing>\r
    </bpmn:startEvent>\r
    <bpmn:intermediateCatchEvent id="Event_wait_signal" name="Wait for all-clear">\r
      <bpmn:incoming>Flow_to_wait</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_resume</bpmn:outgoing>\r
      <bpmn:signalEventDefinition id="SignalEventDefinition_1" signalRef="Signal_AllClear" />\r
    </bpmn:intermediateCatchEvent>\r
    <bpmn:serviceTask id="Activity_resume" name="Resume operations">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="resume-operations" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_to_resume</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_end</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:endEvent id="Event_done" name="Back to work">\r
      <bpmn:incoming>Flow_to_end</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_to_wait" sourceRef="StartEvent_1" targetRef="Event_wait_signal" />\r
    <bpmn:sequenceFlow id="Flow_to_resume" sourceRef="Event_wait_signal" targetRef="Activity_resume" />\r
    <bpmn:sequenceFlow id="Flow_to_end" sourceRef="Activity_resume" targetRef="Event_done" />\r
  </bpmn:process>\r
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="learn_signal_broadcast">\r
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\r
        <dc:Bounds x="182" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="160" y="255" width="80" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_wait_signal_di" bpmnElement="Event_wait_signal">\r
        <dc:Bounds x="272" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="248" y="255" width="84" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_resume_di" bpmnElement="Activity_resume">\r
        <dc:Bounds x="370" y="190" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_done_di" bpmnElement="Event_done">\r
        <dc:Bounds x="532" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="510" y="255" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNEdge id="Flow_to_wait_di" bpmnElement="Flow_to_wait">\r
        <di:waypoint x="218" y="230" />\r
        <di:waypoint x="272" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_resume_di" bpmnElement="Flow_to_resume">\r
        <di:waypoint x="308" y="230" />\r
        <di:waypoint x="370" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_end_di" bpmnElement="Flow_to_end">\r
        <di:waypoint x="470" y="230" />\r
        <di:waypoint x="532" y="230" />\r
      </bpmndi:BPMNEdge>\r
    </bpmndi:BPMNPlane>\r
  </bpmndi:BPMNDiagram>\r
</bpmn:definitions>\r
`,so=`async (job, { sleep, trace }) => {
  trace("all-clear received — resuming operations");
  await sleep(400);

  return { resumed: true };
}`,lo={id:"learn-signal-broadcast",title:"Signal intermediate catch event + broadcast",group:"learn-bpmn",blurb:`A signal intermediate catch event parks the token until someone broadcasts a signal by name. Unlike a message, a signal isn't correlated to one waiting instance — broadcasting it unblocks every open subscription for that name, across every running instance, at once. Run this and watch the token park at "Wait for all-clear" the moment the process starts; the page then broadcasts the all-clear signal for you, which unblocks the wait, runs "Resume operations", and reaches the end event. Point the catch event's signalRef at a name nothing ever broadcasts and the model still deploys, but no broadcast ever matches it, so the run parks on the wait forever.`,docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/signal-events/signal-event/",bpmn:ao,seed:{},handlers:[{elementId:"Activity_resume",standsInFor:"job worker — resume-operations",source:so}]},co=Object.freeze(Object.defineProperty({__proto__:null,default:lo},Symbol.toStringTag,{value:"Module"})),mo=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,uo=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,po={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:fe.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"},waitFor:{kind:"activeElement",elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"},waitFor:{kind:"elementCompleted",elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:fe.variablesPanel}}],successEvent:{kind:"instanceCompleted"}},go=`<?xml version="1.0" encoding="UTF-8"?>
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
`,ho="Camunda Cloud",bo="8.10.0",fo={name:"Camunda Web Modeler",version:"9b5d5ef"},_o=19,wo="seed-export-shipment-ready",yo=[{text:"# Use a predefined scenario...",type:"text",layout:{row:"Row_04pl1rt",columns:null},id:"Field_0a6kzzq"},{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Use pre-defined sceanrio - to use leave Shipment notes below blank.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{text:`The following shipments notes are used:
* Likely cleared: SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53.
* Likely flagged: SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1.`,type:"text",layout:{row:"Row_1h31mub",columns:null},id:"Field_0j1vwd9"},{text:"# ...or hand in your own data",type:"text",layout:{row:"Row_1wu4opr",columns:null},id:"Field_12u5gzd"},{label:"Shipment notes",description:"If set, overrides the scenario above. Leave blank to use the scenario selected above. The agent reads this to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],Mo="default",vo={executionPlatform:ho,executionPlatformVersion:bo,exporter:fo,schemaVersion:_o,id:wo,components:yo,type:Mo},xo="Camunda Cloud",No="8.10.0",Eo={name:"Camunda Web Modeler",version:"9b5d5ef"},ko=19,Io="seed-export-compliance-review",To=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],jo="default",So={executionPlatform:xo,executionPlatformVersion:No,exporter:Eo,schemaVersion:ko,id:Io,components:To,type:jo},Ao=Object.assign({"./prompts/system-prompt.md":mo,"./prompts/user-prompt.md":uo}),Do=Ve(Object.fromEntries(Object.entries(Ao).map(([e,n])=>[mt(e),n.trimEnd()]))),Qn="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",Po="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",Co=`async (job) => {
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
}`,Lo=`async (job, { text, sleep, trace }) => {
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
}`,Bo=`async (job, { text, sleep, trace }) => {
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
}`,Ro=`async (job, { num, sleep }) => {
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
}`,zo=`async (job, { text, trace }) => {
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
}`,Oo=`async (job, { sleep }) => {
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
}`,Fo={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:go,forms:{"seed-export-shipment-ready":vo,"seed-export-compliance-review":So},seed:{scenario:Qn,shipmentNotes:""},scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:Qn,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:Po,shipmentNotes:""}}],scriptedAgent:Co,templates:Do,tour:po,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:Lo},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:Bo},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:Ro},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:zo},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:Oo}]},Uo=`You are a loan origination assistant at a retail bank. Your job is to gather everything a senior loan officer needs to decide an application — you do **not** decide it yourself.

Work through the case with the tools available to you:

- **Query customer** — find the applicant's existing relationship with the bank.
- **Credit bureau lookup** — pull their credit report.
- **Assess application** — run the bank's underwriting policy to get a debt-to-income ratio, a risk band, and a recommendation. Always run this; the officer's review depends on it.
- **Update application status** — mark the case as \`under-review\` once you have assessed it.

Call the tools in whatever order makes sense, but make sure the application has been assessed before you finish. When you have gathered the customer profile, the bureau report, and the policy assessment, and marked the status, you are done — a senior officer takes it from there.
`,$o="Gather this loan case for the senior officer: look up the customer, pull their credit bureau report, run the underwriting assessment, and set the application status to `under-review`. Then stop — the officer makes the decision.\n",Go={id:"loan-origination-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a loan application through the origination agent.",target:{anchor:fe.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the application and decides, turn by turn, which tools to call — look up the customer, pull a credit bureau report, run the underwriting policy, update the status. Nothing here is a fixed sequence.",target:{elementId:"LoanOriginationAgent"}},{title:"Policy, not opinion",description:"The assessment computes the debt-to-income ratio, a risk band and a recommendation from the verified figures — the deterministic policy the senior officer's review leans on.",target:{elementId:"AssessApplication"},waitFor:{kind:"elementCompleted",elementId:"AssessApplication"}},{title:"Every application meets a human",description:"Whatever the agent recommended, the token now waits here: no offer and no decline is reachable without a senior officer first signing off. Open the task to record the decision — the gateway routes on it.",target:{elementId:"SeniorOfficerReview"},waitFor:{kind:"activeElement",elementId:"SeniorOfficerReview"}},{title:"Everything the run recorded",description:"The variables panel shows the customer profile, the bureau report, the debt-to-income and risk band, and the recommendation — exactly what each tool wrote for the officer to weigh.",target:{anchor:fe.variablesPanel}}],successEvent:{kind:"elementCompleted",elementId:"AssessApplication"}},Vo=`<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_LoanOriginationAgent" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Web Modeler" exporterVersion="9b5d5ef" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.10.0">
  <bpmn:process id="loan-origination-agent" name="Loan origination agent" isExecutable="true">
    <bpmn:startEvent id="StartEvent_LoanApplication" name="Loan application received">
      <bpmn:extensionElements>
        <zeebe:formDefinition formId="loan-application" />
      </bpmn:extensionElements>
      <bpmn:outgoing>Flow_start_agent</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_start_agent" sourceRef="StartEvent_LoanApplication" targetRef="LoanOriginationAgent" />
    <bpmn:adHocSubProcess id="LoanOriginationAgent" name="Loan origination agent">
      <bpmn:extensionElements>
        <zeebe:adHoc outputCollection="toolCallResults" outputElement="={&#10;  id: toolCall._meta.id,&#10;  name: toolCall._meta.name,&#10;  content: toolCallResult&#10;}" />
        <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" retries="3" />
        <zeebe:ioMapping>
          <zeebe:input source="openaiCompatible" target="provider.type" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_API_ENDPOINT}}" target="provider.openaiCompatible.endpoint" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_API_KEY}}" target="provider.openaiCompatible.authentication.apiKey" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_DEFAULT_MODEL}}" target="provider.openaiCompatible.model.model" />
          <zeebe:input source="=&#34;{{system-prompt}}&#34;" target="data.systemPrompt.prompt" />
          <zeebe:input source="=&#34;Loan application received:&#10;Applicant: &#34; + applicantName + &#34;&#10;Requested amount: &#34; + string(loanAmount) + &#34;&#10;Purpose: &#34; + loanPurpose + &#34;&#10;Annual income: &#34; + string(annualIncome) + &#34;&#10;Monthly debt payments: &#34; + string(monthlyDebt) + &#34;&#10;Stated credit score: &#34; + string(creditScore) + &#34;&#10;&#10;{{user-prompt}}&#34;" target="data.userPrompt.prompt" />
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
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_start_agent</bpmn:incoming>
      <bpmn:outgoing>Flow_agent_review</bpmn:outgoing>
      <bpmn:serviceTask id="QueryCustomer" name="Query customer">
        <bpmn:documentation>Looks up the applicant's existing customer relationship (segment, tenure, current products) in the CRM, so the assessment can weigh an established relationship.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="loan.queryCustomer" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.applicantId, &#34;The applicant's full name or customer id, taken from the application.&#34;, &#34;string&#34;)" target="applicantId" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      <bpmn:serviceTask id="CreditBureauLookup" name="Credit bureau lookup">
        <bpmn:documentation>Pulls a credit bureau report (bureau score, risk band, derogatory marks) for the applicant, standing in for a call to a credit reference agency.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="loan.creditBureau" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.applicantId, &#34;The applicant's full name or customer id, taken from the application.&#34;, &#34;string&#34;)" target="applicantId" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      <bpmn:scriptTask id="AssessApplication" name="Assess application">
        <bpmn:documentation>Applies the lender's deterministic underwriting policy — computes the debt-to-income ratio, a risk band, and an approve/decline recommendation from the verified application figures. This is the policy step the senior officer's review depends on.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:script expression="=recommendation" resultVariable="recommendation" />
        </bpmn:extensionElements>
      </bpmn:scriptTask>
      <bpmn:serviceTask id="UpdateApplicationStatus" name="Update application status">
        <bpmn:documentation>Writes the current application status back to the loan origination system, so downstream systems and the applicant portal reflect where the case stands.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="loan.updateStatus" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.status, &#34;The application status to record, e.g. 'under-review'.&#34;, &#34;string&#34;)" target="status" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
    </bpmn:adHocSubProcess>
    <bpmn:sequenceFlow id="Flow_agent_review" sourceRef="LoanOriginationAgent" targetRef="SeniorOfficerReview" />
    <bpmn:userTask id="SeniorOfficerReview" name="Senior officer review">
      <bpmn:extensionElements>
        <zeebe:userTask />
        <zeebe:formDefinition formId="loan-senior-officer-review" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_agent_review</bpmn:incoming>
      <bpmn:outgoing>Flow_review_gateway</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_review_gateway" sourceRef="SeniorOfficerReview" targetRef="Gateway_Approved" />
    <bpmn:exclusiveGateway id="Gateway_Approved" name="Approved?" default="Flow_declined">
      <bpmn:incoming>Flow_review_gateway</bpmn:incoming>
      <bpmn:outgoing>Flow_approved</bpmn:outgoing>
      <bpmn:outgoing>Flow_declined</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_approved" name="approved" sourceRef="Gateway_Approved" targetRef="IssueLoanOffer">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">=decision = "approved"</bpmn:conditionExpression>
    </bpmn:sequenceFlow>
    <bpmn:sequenceFlow id="Flow_declined" name="declined" sourceRef="Gateway_Approved" targetRef="SendDeclineNotice" />
    <bpmn:serviceTask id="IssueLoanOffer" name="Issue loan offer">
      <bpmn:documentation>Issues the approved loan offer (rate, term, monthly repayment) and records it against the application.</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="loan.issueOffer" retries="2" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_approved</bpmn:incoming>
      <bpmn:outgoing>Flow_offer_end</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_offer_end" sourceRef="IssueLoanOffer" targetRef="LoanOfferIssued" />
    <bpmn:endEvent id="LoanOfferIssued" name="Loan offer issued">
      <bpmn:incoming>Flow_offer_end</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:serviceTask id="SendDeclineNotice" name="Send decline notice">
      <bpmn:documentation>Sends the applicant a decline notice with the recorded reason, standing in for a real notification channel.</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="loan.sendDecline" retries="2" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_declined</bpmn:incoming>
      <bpmn:outgoing>Flow_decline_end</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_decline_end" sourceRef="SendDeclineNotice" targetRef="ApplicationDeclined" />
    <bpmn:endEvent id="ApplicationDeclined" name="Application declined">
      <bpmn:incoming>Flow_decline_end</bpmn:incoming>
    </bpmn:endEvent>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="loan-origination-agent">
      <bpmndi:BPMNShape id="StartEvent_LoanApplication_di" bpmnElement="StartEvent_LoanApplication">
        <dc:Bounds x="162" y="142" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="140" y="185" width="82" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="LoanOriginationAgent_di" bpmnElement="LoanOriginationAgent" isExpanded="true">
        <dc:Bounds x="250" y="80" width="420" height="250" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="QueryCustomer_di" bpmnElement="QueryCustomer">
        <dc:Bounds x="290" y="110" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="CreditBureauLookup_di" bpmnElement="CreditBureauLookup">
        <dc:Bounds x="430" y="110" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="AssessApplication_di" bpmnElement="AssessApplication">
        <dc:Bounds x="290" y="220" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="UpdateApplicationStatus_di" bpmnElement="UpdateApplicationStatus">
        <dc:Bounds x="430" y="220" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="SeniorOfficerReview_di" bpmnElement="SeniorOfficerReview">
        <dc:Bounds x="730" y="120" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_Approved_di" bpmnElement="Gateway_Approved" isMarkerVisible="true">
        <dc:Bounds x="885" y="135" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="887" y="105" width="55" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="IssueLoanOffer_di" bpmnElement="IssueLoanOffer">
        <dc:Bounds x="990" y="120" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="LoanOfferIssued_di" bpmnElement="LoanOfferIssued">
        <dc:Bounds x="1152" y="142" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1132" y="185" width="78" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="SendDeclineNotice_di" bpmnElement="SendDeclineNotice">
        <dc:Bounds x="990" y="240" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ApplicationDeclined_di" bpmnElement="ApplicationDeclined">
        <dc:Bounds x="1152" y="262" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1130" y="305" width="82" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_start_agent_di" bpmnElement="Flow_start_agent">
        <di:waypoint x="198" y="160" />
        <di:waypoint x="250" y="160" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_agent_review_di" bpmnElement="Flow_agent_review">
        <di:waypoint x="670" y="160" />
        <di:waypoint x="730" y="160" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_review_gateway_di" bpmnElement="Flow_review_gateway">
        <di:waypoint x="830" y="160" />
        <di:waypoint x="885" y="160" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_approved_di" bpmnElement="Flow_approved">
        <di:waypoint x="935" y="160" />
        <di:waypoint x="990" y="160" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="940" y="142" width="45" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_offer_end_di" bpmnElement="Flow_offer_end">
        <di:waypoint x="1090" y="160" />
        <di:waypoint x="1152" y="160" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_declined_di" bpmnElement="Flow_declined">
        <di:waypoint x="910" y="185" />
        <di:waypoint x="910" y="280" />
        <di:waypoint x="990" y="280" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="916" y="220" width="41" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_decline_end_di" bpmnElement="Flow_decline_end">
        <di:waypoint x="1090" y="280" />
        <di:waypoint x="1152" y="280" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`,Yo="Camunda Cloud",Qo="8.10.0",Jo={name:"Camunda Web Modeler",version:"9b5d5ef"},qo=19,Ho="loan-application",Wo="default",Zo=[{text:`# Loan application

Capture the applicant's details, then run the origination agent.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{label:"Applicant name",type:"textfield",layout:{row:"Row_applicant",columns:null},id:"Field_ApplicantName",key:"applicantName",defaultValue:"Ada Lovelace",validate:{required:!0}},{label:"Loan amount",description:"Amount requested.",type:"number",layout:{row:"Row_amount",columns:null},id:"Field_LoanAmount",key:"loanAmount",defaultValue:2e4},{label:"Loan purpose",type:"textfield",layout:{row:"Row_purpose",columns:null},id:"Field_LoanPurpose",key:"loanPurpose",defaultValue:"Home improvement"},{label:"Annual income",type:"number",layout:{row:"Row_income",columns:null},id:"Field_AnnualIncome",key:"annualIncome",defaultValue:96e3},{label:"Monthly debt payments",description:"Existing monthly repayments across all obligations.",type:"number",layout:{row:"Row_debt",columns:null},id:"Field_MonthlyDebt",key:"monthlyDebt",defaultValue:850},{label:"Stated credit score",description:"The applicant's self-reported score; the credit bureau tool confirms it.",type:"number",layout:{row:"Row_score",columns:null},id:"Field_CreditScore",key:"creditScore",defaultValue:782}],Ko={executionPlatform:Yo,executionPlatformVersion:Qo,exporter:Jo,schemaVersion:qo,id:Ho,type:Wo,components:Zo},Xo="Camunda Cloud",ea="8.10.0",na={name:"Camunda Web Modeler",version:"9b5d5ef"},ta=19,ra="loan-senior-officer-review",ia="default",oa=[{text:`# Senior officer review

Every application reaches this desk before an offer or a decline can be sent. Review the agent's findings, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Applicant:** {{applicantName}} — {{loanPurpose}}, amount {{loanAmount}}

**Customer relationship:** {{if customerProfile = null then "unknown" else customerProfile.segment + " (" + string(customerProfile.relationshipYears) + "y)"}}

**Credit bureau:** {{if bureauReport = null then "n/a" else string(bureauReport.score) + " (" + bureauReport.band + "), " + string(bureauReport.derogatoryMarks) + " derogatory mark(s)"}}

**Debt-to-income:** {{debtToIncome}}%

**Assessed risk band:** {{riskBand}}

**Policy recommendation:** {{recommendation}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Decision",values:[{label:"Approve — issue loan offer",value:"approved"},{label:"Decline — send decline notice",value:"declined"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_Decision",key:"decision",validate:{required:!0}},{label:"Officer note",description:"Recorded against the application; the decline notice quotes it as the reason.",type:"textarea",layout:{row:"Row_note",columns:null},id:"Field_ReviewNote",key:"reviewNote"}],aa={executionPlatform:Xo,executionPlatformVersion:ea,exporter:na,schemaVersion:ta,id:ra,type:ia,components:oa},sa=Object.assign({"./prompts/system-prompt.md":Uo,"./prompts/user-prompt.md":$o}),da=Ve(Object.fromEntries(Object.entries(sa).map(([e,n])=>[mt(e),n.trimEnd()]))),Jn={applicantName:"Ada Lovelace",annualIncome:96e3,monthlyDebt:850,creditScore:782,loanAmount:2e4,loanPurpose:"Home improvement"},la={applicantName:"Cyrus Vale",annualIncome:38e3,monthlyDebt:1450,creditScore:566,loanAmount:42e3,loanPurpose:"Debt consolidation"},ca=`async (job) => {
  const v = job.variables;

  // Turn 1 — pull the applicant's existing customer relationship.
  if (v.customerProfile === undefined) {
    return { activateElements: [{ elementId: "QueryCustomer" }] };
  }

  // Turn 2 — pull the credit bureau report.
  if (v.bureauReport === undefined) {
    return { activateElements: [{ elementId: "CreditBureauLookup" }] };
  }

  // Turn 3 — run the deterministic underwriting policy. This is the tool the
  // senior officer's review actually leans on.
  if (v.recommendation === undefined) {
    return { activateElements: [{ elementId: "AssessApplication" }] };
  }

  // Turn 4 — record that the case is now with a human reviewer.
  if (v.applicationStatus === undefined) {
    return { activateElements: [{ elementId: "UpdateApplicationStatus" }] };
  }

  return { completionConditionFulfilled: true };
}`,ma=`async (job, { text, sleep, trace }) => {
  // Stands in for a CRM connector looking the applicant up by name/id. No CRM
  // in a browser, so derive a plausible, stable profile from the application.
  const name = text("applicantName", "the applicant");
  await sleep(300);

  // A stable pseudo-tenure from the name so the same applicant always looks the
  // same, without any real data.
  const seed = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const relationshipYears = seed % 12;
  const profile = {
    customerId: "CUST-" + (1000 + (seed % 9000)),
    segment: relationshipYears >= 5 ? "established" : "new",
    relationshipYears: relationshipYears,
    existingProducts: relationshipYears >= 5 ? ["current-account", "savings"] : ["current-account"],
  };
  trace(profile.segment + " customer, " + relationshipYears + "y relationship");

  return { customerProfile: profile, toolCallResult: profile };
}`,ua=`async (job, { text, num, sleep, trace }) => {
  // Stands in for a credit reference agency API. Turns the stated credit score
  // into a bureau report with a band and a derogatory-marks count.
  const name = text("applicantName", "the applicant");
  const score = num("creditScore", 600);
  await sleep(300);

  const band = score >= 740 ? "excellent" : score >= 670 ? "good" : score >= 580 ? "fair" : "poor";
  const derogatoryMarks = score >= 670 ? 0 : score >= 580 ? 1 : 3;
  const report = { subject: name, score: score, band: band, derogatoryMarks: derogatoryMarks };
  trace("bureau score " + score + " (" + band + "), " + derogatoryMarks + " derogatory mark(s)");

  return { bureauReport: report, toolCallResult: report };
}`,pa=`async (job, { num, trace }) => {
  // The script task inside the agent — and the place where policy beats the
  // model. It computes the debt-to-income ratio, a risk band and a
  // recommendation purely from the verified figures, so the recommendation the
  // senior officer sees is the lender's policy, not a model's opinion.
  const income = num("annualIncome", 0);
  const monthlyDebt = num("monthlyDebt", 0);
  const score = num("creditScore", 0);
  const amount = num("loanAmount", 0);

  // Debt-to-income: annualised existing debt against annual income, as a
  // percentage. Higher is worse.
  const dti = income > 0 ? Math.round(((monthlyDebt * 12) / income) * 100) : 100;

  let riskBand;
  if (score >= 720 && dti <= 36) riskBand = "low";
  else if (score >= 640 && dti <= 45) riskBand = "medium";
  else riskBand = "high";

  // Recommend approval only for low/medium risk within a sensible exposure.
  const recommendation = riskBand !== "high" && amount <= income ? "approve" : "decline";
  trace("DTI " + dti + "%, risk " + riskBand + " -> recommend " + recommendation);

  return {
    debtToIncome: dti,
    riskBand: riskBand,
    recommendation: recommendation,
    toolCallResult: { debtToIncome: dti, riskBand: riskBand, recommendation: recommendation },
  };
}`,ga=`async (job, { sleep, trace }) => {
  // Stands in for a write-back to the loan origination system. Marks the case
  // as awaiting the senior officer's decision.
  await sleep(200);
  trace("application status -> under-review");
  return { applicationStatus: "under-review", toolCallResult: "under-review" };
}`,ha=`async (job, { num, sleep, trace }) => {
  // Trunk service task on the approved path. Prices the approved loan from the
  // amount and the assessed risk band, standing in for the offer/booking system.
  const amount = num("loanAmount", 0);
  const band = job.variables.riskBand || "medium";
  await sleep(300);

  const rate = band === "low" ? 6.9 : band === "medium" ? 9.9 : 13.9;
  const termMonths = 60;
  const monthlyRate = rate / 100 / 12;
  const monthlyRepayment = Math.round(
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths)),
  );
  const offer = { amount: amount, aprPercent: rate, termMonths: termMonths, monthlyRepayment: monthlyRepayment };
  trace("offer issued: " + amount + " at " + rate + "% over " + termMonths + "mo");

  return { loanOffer: offer };
}`,ba=`async (job, { text, sleep, trace }) => {
  // Trunk service task on the declined path. Sends the applicant a decline
  // notice with the recorded reason, standing in for a notification channel.
  const note = text("reviewNote", "");
  const reason = note || "Application did not meet the lending policy.";
  await sleep(300);
  trace("decline notice sent");

  return { declineNotice: { reason: reason, sentTo: text("applicantName", "the applicant") } };
}`,fa={id:"loan-origination",title:"Loan origination agent",blurb:"An AI agent gathers a loan case with its own tools — customer lookup, credit bureau, an underwriting policy, a status update — then every application passes through a mandatory senior-officer review before a gateway routes it to an offer or a decline. The agent advises; the process governs.",docsUrl:"https://camunda.com/orchestrate/agents/",bpmn:Vo,forms:{"loan-application":Ko,"loan-senior-officer-review":aa},seed:Jn,scenarios:[{label:"Strong applicant (policy recommends approve)",variables:Jn},{label:"Marginal applicant (policy recommends decline)",variables:la}],scriptedAgent:ca,templates:da,tour:Go,requiredTools:["AssessApplication"],handlers:[{elementId:"QueryCustomer",standsInFor:"CRM connector — customer lookup",source:ma},{elementId:"CreditBureauLookup",standsInFor:"REST connector — credit bureau",source:ua},{elementId:"AssessApplication",standsInFor:"Script task — underwriting policy (FEEL)",source:pa},{elementId:"UpdateApplicationStatus",standsInFor:"REST connector — origination system",source:ga},{elementId:"IssueLoanOffer",standsInFor:"REST connector — offer/booking system",source:ha},{elementId:"SendDeclineNotice",standsInFor:"REST connector — notifications",source:ba}]},_a=`<?xml version="1.0" encoding="UTF-8"?>
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
`,wa=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,ya=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,Ma=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,va={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:_a,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:wa},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:ya},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Ma}]},xa=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Na=`async (job, { text, num, sleep, trace }) => {
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
}`,Ea={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:xa,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:Na}]},ka=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Ia=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Ta=`async (job, { num, sleep }) => {
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
}`,ja=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Sa={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:ka,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Ia},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Ta,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:ja,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},Aa="/pr-preview/pr-95/assets/de-bmw-mini-JBSk7QcF.jpg",Da="/pr-preview/pr-95/assets/de-bmw-mini.thumb-CUUmJrRO.jpg",Pa="/pr-preview/pr-95/assets/uk-d651-rnb-XGipy2QN.jpg",Ca="/pr-preview/pr-95/assets/uk-d651-rnb.thumb-mjEcbhUf.jpg",La="/pr-preview/pr-95/assets/uk-mk70-orj-Cn6O3Xfm.jpg",Ba="/pr-preview/pr-95/assets/uk-mk70-orj.thumb-CaeZ2vqU.jpg",Ra="/pr-preview/pr-95/assets/uk-ni-ijz-8992-YXV44tgk.jpg",za="/pr-preview/pr-95/assets/uk-ni-ijz-8992.thumb-DYwok8jV.jpg",Oa="/pr-preview/pr-95/assets/us-hyundai-genesis-gGpAIEpi.jpg",Fa="/pr-preview/pr-95/assets/us-hyundai-genesis.thumb-DEEt19Mw.jpg",Ua=`<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_PlateRecognition" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Web Modeler" exporterVersion="9b5d5ef" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.10.0">
  <bpmn:process id="plate-recognition" name="Plate recognition" isExecutable="true">
    <bpmn:startEvent id="StartEvent_Photo" name="Photo received">
      <bpmn:extensionElements>
        <zeebe:formDefinition formId="plate-recognition-country" />
      </bpmn:extensionElements>
      <bpmn:outgoing>Flow_ToExtract</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_ToExtract" sourceRef="StartEvent_Photo" targetRef="ExtractPlate" />
    <bpmn:serviceTask id="ExtractPlate" name="Extract plate">
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="extract-plate" retries="1" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToExtract</bpmn:incoming>
      <bpmn:outgoing>Flow_ToReadGateway</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_ToReadGateway" sourceRef="ExtractPlate" targetRef="Gateway_Read" />
    <bpmn:exclusiveGateway id="Gateway_Read" name="Plate read?" default="Flow_CouldntRead">
      <bpmn:incoming>Flow_ToReadGateway</bpmn:incoming>
      <bpmn:outgoing>Flow_PlateRead</bpmn:outgoing>
      <bpmn:outgoing>Flow_CouldntRead</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_PlateRead" name="read" sourceRef="Gateway_Read" targetRef="ConfirmPlate">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">=plateReadOk = true</bpmn:conditionExpression>
    </bpmn:sequenceFlow>
    <bpmn:sequenceFlow id="Flow_CouldntRead" name="couldn't read" sourceRef="Gateway_Read" targetRef="ManualEntry" />
    <bpmn:userTask id="ConfirmPlate" name="Confirm plate">
      <bpmn:extensionElements>
        <zeebe:userTask />
        <zeebe:formDefinition formId="plate-recognition-confirm" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_PlateRead</bpmn:incoming>
      <bpmn:outgoing>Flow_ConfirmToJoin</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:userTask id="ManualEntry" name="Enter plate manually">
      <bpmn:extensionElements>
        <zeebe:userTask />
        <zeebe:formDefinition formId="plate-recognition-manual" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_CouldntRead</bpmn:incoming>
      <bpmn:outgoing>Flow_ManualToJoin</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:exclusiveGateway id="Gateway_Join">
      <bpmn:incoming>Flow_ConfirmToJoin</bpmn:incoming>
      <bpmn:incoming>Flow_ManualToJoin</bpmn:incoming>
      <bpmn:outgoing>Flow_ToRecord</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_ConfirmToJoin" sourceRef="ConfirmPlate" targetRef="Gateway_Join" />
    <bpmn:sequenceFlow id="Flow_ManualToJoin" sourceRef="ManualEntry" targetRef="Gateway_Join" />
    <bpmn:sequenceFlow id="Flow_ToRecord" sourceRef="Gateway_Join" targetRef="RecordResult" />
    <bpmn:serviceTask id="RecordResult" name="Record result">
      <bpmn:extensionElements>
        <zeebe:taskDefinition type="record-result" retries="1" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToRecord</bpmn:incoming>
      <bpmn:outgoing>Flow_ToEnd</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:sequenceFlow id="Flow_ToEnd" sourceRef="RecordResult" targetRef="EndEvent_Recorded" />
    <bpmn:endEvent id="EndEvent_Recorded" name="Plate recorded">
      <bpmn:incoming>Flow_ToEnd</bpmn:incoming>
    </bpmn:endEvent>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="plate-recognition">
      <bpmndi:BPMNShape id="StartEvent_Photo_di" bpmnElement="StartEvent_Photo">
        <dc:Bounds x="172" y="252" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="150" y="295" width="80" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExtractPlate_di" bpmnElement="ExtractPlate">
        <dc:Bounds x="270" y="230" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_Read_di" bpmnElement="Gateway_Read" isMarkerVisible="true">
        <dc:Bounds x="435" y="245" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="430" y="215" width="61" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ConfirmPlate_di" bpmnElement="ConfirmPlate">
        <dc:Bounds x="560" y="150" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ManualEntry_di" bpmnElement="ManualEntry">
        <dc:Bounds x="560" y="310" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_Join_di" bpmnElement="Gateway_Join" isMarkerVisible="true">
        <dc:Bounds x="735" y="245" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="RecordResult_di" bpmnElement="RecordResult">
        <dc:Bounds x="840" y="230" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_Recorded_di" bpmnElement="EndEvent_Recorded">
        <dc:Bounds x="1002" y="252" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="980" y="295" width="80" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_ToExtract_di" bpmnElement="Flow_ToExtract">
        <di:waypoint x="208" y="270" />
        <di:waypoint x="270" y="270" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToReadGateway_di" bpmnElement="Flow_ToReadGateway">
        <di:waypoint x="370" y="270" />
        <di:waypoint x="435" y="270" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_PlateRead_di" bpmnElement="Flow_PlateRead">
        <di:waypoint x="460" y="245" />
        <di:waypoint x="460" y="190" />
        <di:waypoint x="560" y="190" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="470" y="203" width="24" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_CouldntRead_di" bpmnElement="Flow_CouldntRead">
        <di:waypoint x="460" y="295" />
        <di:waypoint x="460" y="350" />
        <di:waypoint x="560" y="350" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="455" y="356" width="66" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ConfirmToJoin_di" bpmnElement="Flow_ConfirmToJoin">
        <di:waypoint x="660" y="190" />
        <di:waypoint x="760" y="190" />
        <di:waypoint x="760" y="245" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ManualToJoin_di" bpmnElement="Flow_ManualToJoin">
        <di:waypoint x="660" y="350" />
        <di:waypoint x="760" y="350" />
        <di:waypoint x="760" y="295" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToRecord_di" bpmnElement="Flow_ToRecord">
        <di:waypoint x="785" y="270" />
        <di:waypoint x="840" y="270" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToEnd_di" bpmnElement="Flow_ToEnd">
        <di:waypoint x="940" y="270" />
        <di:waypoint x="1002" y="270" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`,$a="Camunda Cloud",Ga="8.10.0",Va={name:"Camunda Web Modeler",version:"9b5d5ef"},Ya=19,Qa="plate-recognition-confirm",Ja="default",qa=[{text:`# Confirm the number plate

The in-browser vision model read a plate from the photo. It **recommends**; you **govern** — accept its reading or correct it before it is recorded.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ConfirmHeading"},{text:'**Model reading:** {{if modelPlate = null or modelPlate = "" then "(nothing read)" else modelPlate}}',type:"text",layout:{row:"Row_modelReading",columns:null},id:"Field_ModelReading"},{label:"Number plate",description:"Edit this if the model misread the plate. What you submit is what gets recorded.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ConfirmPlate",key:"confirmedPlate",validate:{required:!0}}],Ha={executionPlatform:$a,executionPlatformVersion:Ga,exporter:Va,schemaVersion:Ya,id:Qa,type:Ja,components:qa},Wa="Camunda Cloud",Za="8.10.0",Ka={name:"Camunda Web Modeler",version:"9b5d5ef"},Xa=19,es="plate-recognition-manual",ns="default",ts=[{text:`# Couldn't read the plate

The vision model didn't return a confident reading for this photo (an unrecognised image, or no in-browser model connected). Enter the plate by hand, or re-run with the in-browser vision brain connected.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ManualHeading"},{label:"Number plate",description:"Type the plate exactly as it appears in the photo.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ManualPlate",key:"confirmedPlate",validate:{required:!0}}],rs={executionPlatform:Wa,executionPlatformVersion:Za,exporter:Ka,schemaVersion:Xa,id:es,type:ns,components:ts},is="Camunda Cloud",os="8.10.0",as={name:"Camunda Web Modeler",version:"9b5d5ef"},ss=19,ds="plate-recognition-country",ls="default",cs=[{text:`# Read a number plate

Pick the plate's **country** so the reader knows which format to extract, then start the run. Leave it on **Auto-detect** to let it guess from the shape.`,type:"text",layout:{row:"Row_countryHeading",columns:null},id:"Field_CountryHeading"},{label:"Plate country",description:"The vision model reads all text in the photo; this tells the process which country's plate format to pull out of that reading.",type:"select",layout:{row:"Row_country",columns:null},id:"Field_Country",key:"country",defaultValue:"auto",values:[{label:"Auto-detect (any format)",value:"auto"},{label:"United Kingdom",value:"uk"},{label:"India",value:"india"},{label:"Germany",value:"germany"},{label:"South Korea",value:"korea"}],validate:{required:!0}}],ms={executionPlatform:is,executionPlatformVersion:os,exporter:as,schemaVersion:ss,id:ds,type:ls,components:cs},us=[{id:"uk-mk70-orj",file:"images/uk-mk70-orj.jpg",thumb:"images/uk-mk70-orj.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_MK70_ORJ_(MK_-_Manchester)_-_70_Plate_(1st_September_2020_-_28th_February_2021)_-_VW_Golf_(CarShop).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate MK70 ORJ" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"MK70 ORJ"},{id:"uk-ni-ijz-8992",file:"images/uk-ni-ijz-8992.jpg",thumb:"images/uk-ni-ijz-8992.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_(Northern_Ireland)_Number_Plate_IJZ_8992_(JZ_-_Down_(NI)_)_-_Dateless_Plate_-_Ford_Fiesta_(Woolston_Car_Centre).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK (Northern Ireland) Number Plate IJZ 8992" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"IJZ 8992"},{id:"uk-d651-rnb",file:"images/uk-d651-rnb.jpg",thumb:"images/uk-d651-rnb.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_D651_RNB_(NB_-_Manchester)_-_D_Reg_(1st_August_1986_-_31st_July_1987)_-_Ford_Capri_(The_Quick_Group).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate D651 RNB" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"D651 RNB"},{id:"de-bmw-mini",file:"images/de-bmw-mini.jpg",thumb:"images/de-bmw-mini.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_BMW_Mini_--_2018_--_1545-51.jpg",license:"CC-BY-SA-4.0",attribution:'Dietmar Rabich / Wikimedia Commons / "Dülmen, Dernekamp, BMW Mini -- 2018 -- 1545-51" / CC BY-SA 4.0',groundTruthPlate:"MS WL 545"},{id:"us-hyundai-genesis",file:"images/us-hyundai-genesis.jpg",thumb:"images/us-hyundai-genesis.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:Hyundai_Genesis_3.8_(US)_(9004912958).jpg",license:"CC-BY-SA-2.0",attribution:'Scarlet Sappho, "Hyundai Genesis 3.8 (US)" (Wikimedia Commons, CC BY-SA 2.0)',groundTruthPlate:"GWAN EUM"}],Et=us,ps=Object.assign({"./images/de-bmw-mini.jpg":Aa,"./images/de-bmw-mini.thumb.jpg":Da,"./images/uk-d651-rnb.jpg":Pa,"./images/uk-d651-rnb.thumb.jpg":Ca,"./images/uk-mk70-orj.jpg":La,"./images/uk-mk70-orj.thumb.jpg":Ba,"./images/uk-ni-ijz-8992.jpg":Ra,"./images/uk-ni-ijz-8992.thumb.jpg":za,"./images/us-hyundai-genesis.jpg":Oa,"./images/us-hyundai-genesis.thumb.jpg":Fa});function qn(e){const n=ps[`./${e}`];if(!n)throw new Error(`plate-recognition: image asset "${e}" is in images.json but missing on disk`);return n}const gs=Et.map(e=>({id:e.id,file:qn(e.file),thumb:qn(e.thumb),label:e.groundTruthPlate})),hs=Object.fromEntries(Et.map(e=>[e.id,e.groundTruthPlate])),bs=`async (job, { vision, trace, text }) => {
  const raw = vision ? await vision("<OCR>") : "";

  // Surface the model's untouched <OCR> transcription in the trace timeline, so
  // it's visible how much of the plate the model actually read before we
  // extract the plate-shaped token (e.g. Florence-2 base dropping a digit).
  trace("raw <OCR>: " + JSON.stringify(String(raw)));

  // The reader picks the plate's country on the start form; that variable tells
  // us which format to pull out of the reading (Florence <OCR> transcribes ALL
  // text in the photo — dealer names, URLs, road signs — it has no "read only
  // the plate" mode). "auto" tries every format, most-specific first.
  const country = text("country", "auto").toLowerCase();

  // Normalise to a plate-shaped string: uppercase, drop punctuation, collapse
  // whitespace. Florence's <OCR> may return "MK70ORJ" or "MK70 ORJ".
  const cleaned = String(raw)
    .toUpperCase()
    .replace(/[^A-Z0-9 ]+/g, " ")
    .replace(/\\s+/g, " ")
    .trim();

  // Indian plates carry an "IND" country code on the blue strip; Florence often
  // reads it glued to the plate — "IND21 BH 2345 AA" (base) or "21 BH 2345
  // AAIND" (large). That glue destroys the boundary the plate patterns rely on,
  // so the leading "21" would be dropped. For the India (and auto) formats,
  // strip the country code where it abuts the plate.
  const base =
    country === "india" || country === "auto"
      ? cleaned
          .replace(/\\bIND(?=[0-9])/g, " ")
          .replace(/(?<=[A-Z])IND\\b/g, " ")
          .replace(/\\s+/g, " ")
          .trim()
      : cleaned;

  // Per-country plate shapes. Single-letter-group patterns (UK "IJZ 8992")
  // deliberately have no leading anchor so they can be pulled out of a word the
  // model glued to them ("FORDIJZ 8992..."); multi-group patterns are anchored
  // with (?<![A-Z])/(?<![0-9]) so a neighbouring word can't masquerade as the
  // plate's leading group ("FRONT 21..." -> not "NT 21 ..."). If nothing
  // matches (an unusual plate, or the scripted brain, which already returns a
  // bare plate) we keep the whole cleaned string.
  const PATTERNS = {
    uk: [
      /[A-Z]{2}[0-9]{2} [A-Z]{3}/, // MK70 ORJ
      /[A-Z][0-9]{1,3} [A-Z]{3}/,  // D651 RNB
      /[A-Z]{2,3} [0-9]{1,4}/,     // IJZ 8992 (Northern Ireland)
    ],
    india: [
      /(?<![A-Z])[A-Z]{2} [0-9]{1,2} [A-Z]{1,3} [0-9]{4}/,   // MH 12 AB 1234
      /(?<![0-9])[0-9]{2} BH [0-9]{4}( [A-Z]{2}(?![A-Z]))?/, // 21 BH 2345 AA
    ],
    germany: [
      /(?<![A-Z])[A-Z]{1,3} [A-Z]{1,2} [0-9]{1,4}/, // MS WL 545
    ],
    korea: [
      /[0-9]{2,3} [A-Z]{1,3} [0-9]{4}/,              // e.g. 12 GA 3456
      /(?<![A-Z])[A-Z]{2,4} [A-Z]{2,4}(?![A-Z])/,    // e.g. GWAN EUM
    ],
    auto: [
      /(?<![A-Z])[A-Z]{2} [0-9]{1,2} [A-Z]{1,3} [0-9]{4}/,   // India:      MH 12 AB 1234
      /(?<![0-9])[0-9]{2} BH [0-9]{4}( [A-Z]{2}(?![A-Z]))?/, // India BH:   21 BH 2345 AA
      /[A-Z]{2}[0-9]{2} [A-Z]{3}/,                           // UK current: MK70 ORJ
      /[A-Z][0-9]{1,3} [A-Z]{3}/,                            // UK older:   D651 RNB
      /(?<![A-Z])[A-Z]{1,3} [A-Z]{1,2} [0-9]{1,4}/,          // Germany:    MS WL 545
      /[A-Z]{2,3} [0-9]{1,4}/,                               // UK NI:      IJZ 8992
    ],
  };
  const patterns = PATTERNS[country] || PATTERNS.auto;
  let plate = base;
  for (const re of patterns) {
    const match = base.match(re);
    if (match) {
      plate = match[0];
      break;
    }
  }

  // "Couldn't read" is exactly the seam's own no-read signals — the scripted
  // brain's UNKNOWN placeholder, the neutral no-image message, or a mid-run
  // backend error — plus a result too short to be a plate.
  const noRead =
    /^UNKNOWN\\b/.test(raw) ||
    /^No image selected/.test(raw) ||
    /^Couldn't read/.test(raw);
  const plateReadOk = !noRead && plate.replace(/\\s/g, "").length >= 4;

  trace(plateReadOk ? "read plate " + plate : "no confident plate read");

  return {
    // The raw reading is kept for the audit trail. 'confirmedPlate' pre-fills
    // the confirm form; leave it blank when we couldn't read, so the
    // manual-entry form starts empty.
    modelPlate: plateReadOk ? plate : "",
    plateReadRaw: String(raw),
    confirmedPlate: plateReadOk ? plate : "",
    plateReadOk: plateReadOk,
  };
}`,fs=`async (job, { text, trace }) => {
  const model = text("modelPlate", "");
  const confirmed = text("confirmedPlate", "");

  const norm = (s) => s.toUpperCase().replace(/\\s+/g, " ").trim();
  const corrected = norm(confirmed) !== norm(model);

  if (corrected) {
    trace(
      "human corrected the model: '" + (model || "(nothing read)") +
        "' -> '" + confirmed + "'",
    );
  } else {
    trace("human confirmed the model reading: '" + confirmed + "'");
  }

  return {
    plate: confirmed,
    confirmedPlate: confirmed,
    modelPlate: model,
    corrected: corrected,
  };
}`,_s={id:"plate-recognition",title:"Read a number plate from a photo",blurb:"Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",docsUrl:"https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",bpmn:Ua,forms:{"plate-recognition-country":ms,"plate-recognition-confirm":Ha,"plate-recognition-manual":rs},seed:{country:"auto"},imageInput:{label:"Pick a seed photo (its plate is known, so the scripted reader works offline) or upload your own — a live in-browser model reads a photo it has never seen.",seedImages:gs},scriptedVision:hs,handlers:[{elementId:"ExtractPlate",standsInFor:"Vision model — Florence-2 <OCR> on WebGPU (in-browser)",source:bs},{elementId:"RecordResult",standsInFor:"Script task — records the governed outcome",source:fs}]},ws=[Ea,Fo,fa,va,Sa,_s],ys=Object.assign({"./learn-exclusive-gateway/index.ts":eo,"./learn-service-task/index.ts":oo,"./learn-signal-broadcast/index.ts":co}),Ms=Object.values(ys).map(e=>e.default).sort((e,n)=>e.id.localeCompare(n.id)),Fe=[...ws,...Ms];function fn(){return"/pr-preview/pr-95/"}function vs(e){const n=fn();return e.startsWith(n)?"/"+e.slice(n.length):e}function xs(e=location.pathname){const t=vs(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function Ns(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function Es(){return fn()}function Hn(e){return`${fn()}examples/${encodeURIComponent(e)}`}function Wn(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function Zn(){return{route:xs(),embed:Ns()}}function ks(){const[e,n]=h.useState(Zn);return h.useEffect(()=>{const t=()=>n(Zn());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const Is="web-demo-framework:height",Ts="web-demo-framework:request-height";function js(e){return{type:Is,height:Math.ceil(e)}}const Kn="embed-height-auto";function Ss(e){h.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(Kn);let t=-1;const r=(l=!1)=>{const m=document.documentElement.scrollHeight;!l&&Math.abs(m-t)<2||(t=m,window.parent.postMessage(js(m),"*"))},i=l=>{if(l.source!==window.parent)return;const m=l.data;!m||m.type!==Ts||r(!0)};window.addEventListener("message",i),r();const s=new ResizeObserver(()=>r());return s.observe(n),()=>{s.disconnect(),window.removeEventListener("message",i),n.classList.remove(Kn)}},[e])}function As(){const{route:e,embed:n}=ks(),t=vt().brain,r=Ri();Ss(n);const i=e.kind==="example"?e.id:Fe[0].id,s=Fe.find(d=>d.id===i)??Fe[0],l=Fe.filter(d=>d.group!=="learn-bpmn"),m=Fe.filter(d=>d.group==="learn-bpmn"),u=d=>{Wn(Hn(d),{hash:location.hash})},o=a.jsxs(a.Fragment,{children:[!n&&e.kind==="gallery"&&a.jsxs(a.Fragment,{children:[a.jsx("nav",{className:"example-picker",children:l.map(d=>a.jsx(q,{size:"sm",variant:d.id===s.id?"default":"secondary",onClick:()=>u(d.id),children:d.title},d.id))}),m.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("h2",{className:"example-group-heading",children:"Learn BPMN"}),a.jsx("nav",{className:"example-picker",children:m.map(d=>a.jsx(q,{size:"sm",variant:d.id===s.id?"default":"secondary",onClick:()=>u(d.id),children:d.title},d.id))})]})]}),!n&&e.kind==="example"&&a.jsx("div",{className:"example-nav",children:a.jsx(q,{size:"sm",variant:"secondary",onClick:()=>Wn(Es()),children:"← All examples"})}),a.jsxs("div",{className:"example-meta",children:[s.docsUrl&&a.jsx("a",{className:"docs-link",href:s.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&a.jsx("a",{className:"open-full-page",href:Hn(s.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:"Open full page ↗"})]}),a.jsx(qi,{example:s,initialBrainKind:t,initialTourId:r},s.id)]});return n?a.jsx("div",{className:"c4-ui app-shell app-embed",children:a.jsx("main",{id:"main",className:"layout layout-embed",children:o})}):a.jsxs("div",{className:"c4-ui app-shell",children:[a.jsx(Vt,{appName:"Runnable Camunda examples",trailing:a.jsx("span",{className:"app-subtitle",children:"model + code + optional LLM, in your browser"})}),a.jsx("main",{id:"main",className:"layout",children:o})]})}Lt.createRoot(document.getElementById("root")).render(a.jsx(h.StrictMode,{children:a.jsx(Yt,{children:a.jsx(As,{})})}));export{ce as _,Ls as c};
