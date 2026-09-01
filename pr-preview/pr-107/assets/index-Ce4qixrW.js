const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-js-BEOU0ddW.css","assets/bpmn-embedded-DMgZJGE4.css","assets/RuntimeDiagram-DTnJz5cT.js","assets/vendor-react-9Ma26nY1.js","assets/Viewer-D_7S4Gwm.js","assets/MonacoEditor-c74Zyd9P.js","assets/MonacoEditor-BVT6FIKR.css","assets/vendor-modeler-DdWqT7hy.js","assets/vendor-design-system-OBx-ozBX.js","assets/vendor-design-system-ByseyvxE.css","assets/parser-DkgAe_kI.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-B95GF3pU.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var Yt=Object.defineProperty;var Qt=(e,n,t)=>n in e?Yt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var R=(e,n,t)=>Qt(e,typeof n!="symbol"?n+"":n,t);import{r as g,j as i,i as qt}from"./vendor-react-9Ma26nY1.js";import{B as q,a as re,L as Qe,S as Nn,b as En,c as kn,d as In,e as Tn,A as ae,f as se,g as de,I as Vn,C as Jt,h as Ht,i as Wt,j as Zt,k as Kt,l as Xt,T as er,m as nr,n as tn,o as rn,p as tr,q as rr}from"./vendor-design-system-OBx-ozBX.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const ir="modulepreload",or=function(e){return"/pr-preview/pr-107/"+e},Yn={},me=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){let l=function(a){return Promise.all(a.map(c=>Promise.resolve(c).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),u=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));o=l(t.map(a=>{if(a=or(a),a in Yn)return;Yn[a]=!0;const c=a.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":ir,c||(d.as="script"),d.crossOrigin="",d.href=a,u&&d.setAttribute("nonce",u),document.head.appendChild(d),c)return new Promise((f,_)=>{d.addEventListener("load",f),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(l){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=l,window.dispatchEvent(p),!p.defaultPrevented)throw l}return o.then(l=>{for(const p of l||[])p.status==="rejected"&&s(p.reason);return n().catch(s)})},ar="io.camunda.agenticai:aiagent",Be="http://www.omg.org/spec/BPMN/20100524/MODEL",sr="http://camunda.org/schema/zeebe/1.0";function jn(e,n){return Array.from(e.getElementsByTagNameNS(sr,n))}function Mt(e,n){return jn(e,n).filter(t=>dr(t)===e)}function dr(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Be&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function Dn(e){const n=Mt(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function Qn(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Be&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function qn(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(r=>r.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function xt(e){const n=[],t=r=>{for(const o of Array.from(r.attributes))n.push(o.value);for(const o of Array.from(r.children))t(o)};return t(e),n.join(`
`)}function lr(e){return Nt(xt(e))}function cr(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Be&&t.localName==="extensionElements");return n?Nt(xt(n)):[]}function Nt(e){const n=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,t=[],r=new Set;for(const o of e.matchAll(n)){const s=o[1];r.has(s)||(r.add(s),t.push({name:s,description:(o[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:o[3]??"string"}))}return t}function mr(e){const n={};for(const t of Mt(e,"input")){const r=t.getAttribute("target");r&&(n[r]=t.getAttribute("source")??"")}return n}function pr(e){return Array.from(e.getElementsByTagNameNS(Be,"adHocSubProcess")).filter(n=>(Dn(n)??"").startsWith(ar))}const ur=new Set(["subProcess","adHocSubProcess","callActivity"]),hr=new Set(["adHocSubProcess","subProcess","transaction"]);function gr(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Be&&hr.has(n.localName))return n;n=n.parentElement}return null}function br(e,n){const t=mr(e),r=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:Dn(e),systemPrompt:qn(t["data.systemPrompt.prompt"]),userPrompt:qn(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(r)&&r>0?r:10,tools:n}}function _r(e,n){var h;const t=e.getAttribute("id")??"",r=e.getAttribute("name")??t,o=pr(e);o.length>1&&n.push({severity:"warning",elementId:o.map(d=>d.getAttribute("id")).join(", "),message:`Process "${r}" hosts ${o.length} AI Agent sub-processes (${o.map(d=>d.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const s=[],l=new Map(o.map(d=>[d,[]]));for(const d of Array.from(e.getElementsByTagName("*"))){if(d.namespaceURI!==Be||o.includes(d))continue;const f=d.getAttribute("id");if(!f)continue;const _=gr(d),y=_&&o.includes(_)?_:null;if(y&&ur.has(d.localName)){const k=d.getAttribute("name")??f,B=Qn(d);s.push({elementId:f,label:k,jobType:"",documentation:B,isTool:!0,compound:!0}),l.get(y).push({elementId:f,label:k,jobType:"",documentation:B,args:cr(d),compound:!0});continue}const b=Dn(d);if(!b)continue;const M={elementId:f,label:d.getAttribute("name")??f,jobType:b,documentation:Qn(d),isTool:y!=null};s.push(M),y&&l.get(y).push({elementId:f,label:M.label,jobType:b,documentation:M.documentation,args:lr(d)})}const p=o.map(d=>br(d,l.get(d))),u=Array.from(e.getElementsByTagNameNS(Be,"userTask")).map(d=>{var f;return{elementId:d.getAttribute("id")??"",label:d.getAttribute("name")??d.getAttribute("id")??"",formId:((f=jn(d,"formDefinition")[0])==null?void 0:f.getAttribute("formId"))??void 0}}),a=e.getElementsByTagNameNS(Be,"startEvent")[0],c=a?((h=jn(a,"formDefinition")[0])==null?void 0:h.getAttribute("formId"))??void 0:void 0;return{processId:t,processName:r,tasks:s,agents:p,userTasks:u,startFormId:c}}function fr(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),r=t.getElementsByTagName("parsererror")[0];if(r)throw new Error(`Invalid BPMN XML: ${r.textContent}`);const o=Array.from(t.getElementsByTagNameNS(Be,"process"));if(o.length===0)throw new Error("No <bpmn:process> in the diagram.");const s=[],l=o.map(u=>_r(u,s));let p=n.processId?l.find(u=>u.processId===n.processId):void 0;return n.processId&&!p&&s.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${l[0].processId}".`}),p??(p=l[0]),l.length>1&&s.push({severity:"warning",message:`Diagram has ${l.length} <bpmn:process> elements (${l.map(u=>u.processId).join(", ")}); using "${p.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:l,diagnostics:s,processId:p.processId,processName:p.processName,tasks:p.tasks,agent:p.agents[0]??null,agents:l.flatMap(u=>u.agents),userTasks:p.userTasks,startFormId:p.startFormId}}function wr(e){return e?e.imageId?{imageId:e.imageId}:e.imageName?{imageName:e.imageName}:{}:{}}function Et(e,n){return n?e.pixels:e.imageId??e.pixels}const yr="No image selected — pick or upload a photo to read.";function Jn(){return yr}function vr(e,n){return async t=>{const r=e.resolve(n);if(!r)return Jn();const o=Et(r,e.live);if(o===void 0)return Jn();try{return await e.read(o,t)}catch(s){return`Couldn't read the image (${s instanceof Error?s.message:String(s)}).`}}}function Mr(e,n){return async()=>{const t=e.resolve(n);if(t)return Et(t,e.live)}}function xr(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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
  <\/script></body></html>`}function kt(e,n={}){const{timeoutMs:t=5e3,onTrace:r,onVision:o,onImage:s}=n,l=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((p,u)=>{const a=document.createElement("iframe");a.setAttribute("sandbox","allow-scripts"),a.style.display="none",a.setAttribute("aria-hidden","true");let c=!1,h;const d=()=>{h&&clearTimeout(h),window.removeEventListener("message",_),a.remove()},f=b=>{c||(c=!0,d(),b())};function _(b){var k;if(b.source!==a.contentWindow)return;const M=b.data;if(!(!M||typeof M!="object")){if(M.kind==="ready"){const B=e.job,U=e.kind==="run-handler"?{kind:"run-handler",id:l,source:e.source,job:B,hasVision:e.hasVision}:{kind:"run-agent",id:l,source:e.source,job:B};(k=a.contentWindow)==null||k.postMessage(U,"*");return}"id"in M&&M.id!==l||(M.kind==="trace"?r==null||r(M.text):M.kind==="vision-request"?y(M.callId,o,"vision",M.prompt):M.kind==="image-request"?y(M.callId,s,"image"):M.kind==="result"?f(()=>p(M.value)):M.kind==="error"&&f(()=>u(new Error(M.message))))}}function y(b,M,k,...B){const U=ie=>{var le;return(le=a.contentWindow)==null?void 0:le.postMessage(ie,"*")};if(!M){U({kind:"helper-error",id:l,callId:b,message:`${k} helper is not available.`});return}Promise.resolve().then(()=>M(...B)).then(ie=>U({kind:"helper-result",id:l,callId:b,value:ie}),ie=>U({kind:"helper-error",id:l,callId:b,message:ie instanceof Error?ie.message:String(ie)}))}window.addEventListener("message",_),h=setTimeout(()=>{f(()=>u(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),a.srcdoc=xr(),document.body.appendChild(a)})}function It(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function Nr(e,n,t){const r=typeof t.vision=="function";return kt({kind:"run-handler",source:e,job:It(n),hasVision:r},{onTrace:t.trace,onVision:t.vision?o=>t.vision(o):void 0,onImage:t.image?()=>t.image():void 0})}function Er(e,n){return kt({kind:"run-agent",source:e,job:It(n)})}function Tt(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function kr(e){return Tt(e,"Handler code"),(n,t)=>Nr(e,n,t)}function Ir(e){return Tt(e,"Agent code"),n=>Er(e,n)}function Tr(e,n,t,r){return{sleep:o=>new Promise(s=>setTimeout(s,o)),trace:o=>n({kind:"tool",text:`   ${o}`,elementId:e.elementId,turn:t}),text:(o,s="")=>{const l=e.variables[o];return typeof l=="string"?l:l==null?s:String(l)},num:(o,s=0)=>{const l=e.variables[o],p=typeof l=="number"?l:Number(l);return Number.isFinite(p)?p:s},...r?{vision:vr(r,e.instanceKey),image:Mr(r,e.instanceKey)}:{}}}function jr(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Sr(e,n,t,r,o){const s={},l=e.processes.flatMap(u=>u.tasks),p=new Map(l.map(u=>[u.elementId,u.label]));for(const u of l)u.compound||s[u.jobType]||(s[u.jobType]=async a=>{const c=n[a.elementId];if(!c)throw new Error(`No handler registered for ${a.elementId} (job type ${a.type})`);const h=p.get(a.elementId)??a.elementId,d=r==null?void 0:r.current;t({kind:"tool",text:`▶ ${h}`,elementId:a.elementId,turn:d});const f=await c(a,Tr(a,t,d,o));return t({kind:"vars",text:`  ↳ ${jr(f)}`,elementId:a.elementId,result:f,turn:d}),f});return s}const Pr=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function Xe(...e){const n=Object.create(null);for(const t of e)if(t)for(const r of Object.keys(t))n[r]=t[r];return n}function jt(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function St(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ar(e){return St(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function Cr(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dr(e){return JSON.stringify(e).slice(1,-1)}function Br(e,n){const t=e.lastIndexOf("<",n),r=e.lastIndexOf(">",n);if(t<=r)return"text";const o=e.slice(t,n);if((o.match(/"/g)??[]).length%2===0)return"text";const l=o.lastIndexOf('"');return(o.slice(l+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function Lr(e,n,t="xml"){const r=[],o=new Set;return{result:e.replace(Pr,(l,p,u)=>{const a=p.trim();if(!Object.prototype.hasOwnProperty.call(n,a))return o.has(a)||(o.add(a),r.push(a)),l;const c=n[a];if(t==="json")return Dr(c);const h=Br(e,u);return h==="feel-literal"?Cr(c):h==="attribute"?Ar(c):St(c)}),unresolved:r}}function Rr(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function Fr(e,n={},t=e.bpmn,r={}){const o=[],s=Xe(e.templates,r),{result:l,unresolved:p}=Lr(t,s,"xml");for(const M of p)o.push({severity:"warning",message:`Template placeholder "{{${M}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let u;try{u=fr(l)}catch(M){return o.push({severity:"error",message:M instanceof Error?M.message:String(M)}),{resolvedBpmn:l,model:Rr(),handlers:{},forms:{},diagnostics:o,hasErrors:!0}}o.push(...u.diagnostics);const a=u.processes.flatMap(M=>M.tasks),c=new Map(e.handlers.map(M=>[M.elementId,M.source])),h={};for(const M of a){if(M.compound)continue;const k=n[M.elementId]??c.get(M.elementId);if(k===void 0){o.push({severity:"error",elementId:M.elementId,jobType:M.jobType,message:`No handler for "${M.label}" (${M.elementId}, job type "${M.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{h[M.elementId]=kr(k)}catch(B){o.push({severity:"error",elementId:M.elementId,jobType:M.jobType,message:`"${M.label}" (${M.elementId}): handler code didn't compile — ${B instanceof Error?B.message:String(B)}`})}}const d=new Set(a.map(M=>M.elementId)),f=new Set([...c.keys(),...Object.keys(n)]);for(const M of f)d.has(M)||o.push({severity:"error",elementId:M,message:`Handler "${M}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const _={},y=e.forms??{},b=(M,k)=>{if(!M)return;const B=y[M];B?_[M]=B:o.push({severity:"error",formId:M,message:`${k} references form "${M}", which has no matching schema.`})};for(const M of u.processes){b(M.startFormId,`The start event of process "${M.processName}"`);for(const k of M.userTasks)b(k.formId,`User task "${k.label}" (${k.elementId})`)}return{resolvedBpmn:l,model:u,handlers:h,forms:_,diagnostics:o,hasErrors:o.some(M=>M.severity==="error")}}function zr(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let r=n;r<e.length;r++)if(e[r]==="{")t++;else if(e[r]==="}"&&(t--,t===0))try{const o=JSON.parse(e.slice(n,r+1));return typeof o=="object"&&o!==null&&!Array.isArray(o)?o:null}catch{return null}return null}function Sn(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function Hn(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function Wn(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:Hn(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,r=Array.isArray(t)?t:Object.values(e).find(s=>Array.isArray(s))??[],o=[];for(const s of r)if(typeof s=="string")s.trim()&&o.push({name:s.trim(),args:{}});else if(s&&typeof s=="object"){const l=s,p=l.name??l.tool??l.id??l.function;typeof p=="string"&&p.trim()&&o.push({name:p.trim(),args:Hn(l)})}return o}function Or(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function Zn(e){const n=e.args.length?e.args.map(r=>`      ${r.name} (${r.type}) — ${r.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function Ur(e,n,t){const r=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",o=t[0]??e.tools[0];if(t.length===0)return`${r}

Every tool has already run. Reply with JSON only — no prose, no explanation, no
markdown fence — exactly:

{"done": true}`;const s=o!=null&&o.args.length?`{${o.args.map(l=>`"${l.name}": "…"`).join(", ")}}`:"{}";return n?`${r}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${t.map(Zn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tools": [{"tool": "${(o==null?void 0:o.elementId)??"ToolName"}", "arguments": ${s}}], "done": false}

List one entry per tool you're calling this turn (often just one). Each
"tool" value must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tools.`:`${r}

You drive the process by calling exactly one tool at a time. The tool names you
may use, one per block:

${t.map(Zn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(o==null?void 0:o.elementId)??"ToolName"}", "arguments": ${s}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function $r(e,n,t,r,o=[],s=[],l=!1){const p=e.userPrompt||"Carry out your task.",u=Object.entries(n).filter(([,c])=>typeof c=="string"&&c.trim().length>0).map(([c,h])=>`  ${c}: ${String(h)}`),a=[p,u.length?`Case data:
${u.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return a.push(t.length?`${l?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),a.push(r.length?`Tools still available:
${r.map(c=>`  ${c.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),s.length&&a.push(`Your last reply was rejected: ${s.join("; ")}. Do not repeat it.`),o.length&&a.push(`You reported that you are done, but ${o.join(" and ")} ${o.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${o.length===1?"it":"them"} now.`),a.push("Which tool should run next? Reply with JSON only."),a.join(`

`)}async function Gr(e,n,t,r,o,s){let l="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:s});const p=await e(r,o,u=>{l+=u,n({kind:"llm",text:`${Sn(l)} ▍`,key:t,pending:!0,turn:s})});return n({kind:"llm",text:Sn(p||l)||"(empty reply)",key:t,pending:!1,turn:s}),p}function Vr(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function Yr(e,n,t){const r={},o=new Map,s=new Map;for(const{tool:l,args:p}of e){const u={};for(const a of l.args){const c=p[a.name];if(!(c!=null&&c!=="")){n({kind:"error",text:`🤖 ${l.elementId}: model supplied no value for "${a.name}"`,turn:t,elementId:l.elementId});continue}const d=o.get(a.name);if(d!==void 0&&d!==l.elementId){n({kind:"error",text:`🤖 argument name collision on "${a.name}": both ${d} and ${l.elementId} declare it — ${d} already claimed it this turn, ${l.elementId}'s value is dropped`,turn:t,elementId:l.elementId});continue}const f=Vr(a.type,c);if(!f.ok){n({kind:"error",text:`🤖 ${l.elementId}: "${a.name}" is declared as ${a.type} but the model supplied ${JSON.stringify(c)} — rejected, not passed through`,turn:t,elementId:l.elementId});continue}r[a.name]=f.value,u[a.name]=f.value,o.set(a.name,l.elementId)}s.set(l.elementId,u)}return{variablesOut:r,forHistory:s}}function Qr(e,n,t,r={}){const{maxNewTokens:o=384,allowRepeats:s=!1,allowMultiToolTurns:l=!1,turnRef:p,requiredTools:u=[],maxEarlyDoneNudges:a=1}=r;let c=0;const h=new Set,d=[];let f=0,_=[],y=[];return async b=>{const M=b.variables,k=M.toolCallResult;for(k!==void 0&&d.length&&(d[d.length-1]=`${d[d.length-1]} → ${Sn(JSON.stringify(k),160)}`);;){const U=await B();if(U)return U}async function B(){if(c+=1,p&&(p.current=c),c>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:c}),{completionConditionFulfilled:!0};const U=s?e.tools:e.tools.filter(N=>!h.has(N.elementId)),ie=[{role:"system",content:Ur(e,l,U)},{role:"user",content:$r(e,M,d,U,_,y,s)}];_=[],y=[];let le;try{le=await Gr(n,t,`llm-turn-${c}`,ie,o,c)}catch(N){return t({kind:"error",text:`LLM call failed: ${N instanceof Error?N.message:String(N)} — completing the agent.`,turn:c}),{completionConditionFulfilled:!0}}const pe=zr(le);if(Or(pe)&&Wn(pe).length===0){const N=u.filter(V=>!h.has(V));return N.length&&f<a?(f+=1,_=N,t({kind:"agent",text:`🤖 model says it is done, but ${N.join(", ")} hasn't run — asking once more`,turn:c}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:c}),{completionConditionFulfilled:!0})}const Ne=Wn(pe);if(Ne.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:c}),y=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const oe=[],Q=[],W=[];for(const N of Ne){const V=e.tools.find(ue=>ue.elementId===N.name);if(!V){Q.push(N.name);continue}if(!s&&h.has(V.elementId)){W.push(V.elementId);continue}oe.push({tool:V,args:N.args})}if(Q.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${Q.join(", ")} — nothing activated`,turn:c}),W.length&&t({kind:"error",text:`🤖 model asked to re-run ${W.join(", ")} — skipped (already run)`,turn:c}),oe.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:c}),y=[...Q.length?[`${Q.join(", ")} ${Q.length===1?"is":"are"} not a real tool`]:[],...W.length?[`${W.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:j,forHistory:I}=Yr(oe,t,c);for(const{tool:N}of oe)h.add(N.elementId),d.push(`- ${N.elementId}(${JSON.stringify(I.get(N.elementId))})`);for(const{tool:N}of oe)t({kind:"agent",text:`🤖 calling ${N.elementId}`,turn:c,elementId:N.elementId,args:I.get(N.elementId)??{}});return{activateElements:oe.map(N=>({elementId:N.tool.elementId})),variables:j}}}}function qr(e,n,t,r={}){const o=new Map(e.map(s=>[s.elementId,Qr(s,n,t,r)]));return async s=>{const l=o.get(s.elementId);if(!l)throw new Error(`No agent host registered for "${s.elementId}"`);return l(s)}}class Pn{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Kn.unregister(this),n}free(){const n=this.__destroy_into_raw();m.__wbg_testengine_free(n,0)}activateJobs(n,t,r,o){let s,l;try{const f=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,b=A(o,m.__wbindgen_export,m.__wbindgen_export2),M=S;m.testengine_activateJobs(f,this.__wbg_ptr,_,y,t,r,b,M);var p=w().getInt32(f+0,!0),u=w().getInt32(f+4,!0),a=w().getInt32(f+8,!0),c=w().getInt32(f+12,!0),h=p,d=u;if(c)throw h=0,d=0,z(a);return s=h,l=d,F(h,d)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(s,l,1)}}advanceTime(n){let t,r;try{const c=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_advanceTime(c,this.__wbg_ptr,n);var o=w().getInt32(c+0,!0),s=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),p=w().getInt32(c+12,!0),u=o,a=s;if(p)throw u=0,a=0,z(l);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}assignUserTask(n,t,r){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),f=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),b=S;m.testengine_assignUserTask(d,this.__wbg_ptr,f,_,y,b,r);var l=w().getInt32(d+0,!0),p=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),c=l,h=p;if(a)throw c=0,h=0,z(u);return o=c,s=h,F(c,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}broadcastSignal(n,t){let r,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),d=A(n,m.__wbindgen_export,m.__wbindgen_export2),f=S,_=A(t,m.__wbindgen_export,m.__wbindgen_export2),y=S;m.testengine_broadcastSignal(h,this.__wbg_ptr,d,f,_,y);var s=w().getInt32(h+0,!0),l=w().getInt32(h+4,!0),p=w().getInt32(h+8,!0),u=w().getInt32(h+12,!0),a=s,c=l;if(u)throw a=0,c=0,z(p);return r=a,o=c,F(a,c)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,o,1)}}cancelInstance(n){let t,r;try{const c=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),d=S;m.testengine_cancelInstance(c,this.__wbg_ptr,h,d);var o=w().getInt32(c+0,!0),s=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),p=w().getInt32(c+12,!0),u=o,a=s;if(p)throw u=0,a=0,z(l);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}completeAgentJob(n,t,r){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),f=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),b=S,M=A(r,m.__wbindgen_export,m.__wbindgen_export2),k=S;m.testengine_completeAgentJob(d,this.__wbg_ptr,f,_,y,b,M,k);var l=w().getInt32(d+0,!0),p=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),c=l,h=p;if(a)throw c=0,h=0,z(u);return o=c,s=h,F(c,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}completeJob(n,t){let r,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),d=A(n,m.__wbindgen_export,m.__wbindgen_export2),f=S,_=A(t,m.__wbindgen_export,m.__wbindgen_export2),y=S;m.testengine_completeJob(h,this.__wbg_ptr,d,f,_,y);var s=w().getInt32(h+0,!0),l=w().getInt32(h+4,!0),p=w().getInt32(h+8,!0),u=w().getInt32(h+12,!0),a=s,c=l;if(u)throw a=0,c=0,z(p);return r=a,o=c,F(a,c)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,o,1)}}completeUserTask(n,t){let r,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),d=A(n,m.__wbindgen_export,m.__wbindgen_export2),f=S,_=A(t,m.__wbindgen_export,m.__wbindgen_export2),y=S;m.testengine_completeUserTask(h,this.__wbg_ptr,d,f,_,y);var s=w().getInt32(h+0,!0),l=w().getInt32(h+4,!0),p=w().getInt32(h+8,!0),u=w().getInt32(h+12,!0),a=s,c=l;if(u)throw a=0,c=0,z(p);return r=a,o=c,F(a,c)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,o,1)}}correlateMessage(n,t,r){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),f=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),b=S,M=A(r,m.__wbindgen_export,m.__wbindgen_export2),k=S;m.testengine_correlateMessage(d,this.__wbg_ptr,f,_,y,b,M,k);var l=w().getInt32(d+0,!0),p=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),c=l,h=p;if(a)throw c=0,h=0,z(u);return o=c,s=h,F(c,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}createInstance(n,t,r){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),f=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),b=S;m.testengine_createInstance(d,this.__wbg_ptr,f,_,y,b,Kr(r)?Number.MAX_SAFE_INTEGER:r>>0);var l=w().getInt32(d+0,!0),p=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),c=l,h=p;if(a)throw c=0,h=0,z(u);return o=c,s=h,F(c,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}debugClear(){m.testengine_debugClear(this.__wbg_ptr)}debugCreateInstance(n,t,r){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),f=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),b=S,M=A(r,m.__wbindgen_export,m.__wbindgen_export2),k=S;m.testengine_debugCreateInstance(d,this.__wbg_ptr,f,_,y,b,M,k);var l=w().getInt32(d+0,!0),p=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),c=l,h=p;if(a)throw c=0,h=0,z(u);return o=c,s=h,F(c,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}get debugIsPaused(){return m.testengine_debugIsPaused(this.__wbg_ptr)!==0}debugResume(){let n,t;try{const a=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_debugResume(a,this.__wbg_ptr);var r=w().getInt32(a+0,!0),o=w().getInt32(a+4,!0),s=w().getInt32(a+8,!0),l=w().getInt32(a+12,!0),p=r,u=o;if(l)throw p=0,u=0,z(s);return n=p,t=u,F(p,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}debugStep(){let n,t;try{const a=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_debugStep(a,this.__wbg_ptr);var r=w().getInt32(a+0,!0),o=w().getInt32(a+4,!0),s=w().getInt32(a+8,!0),l=w().getInt32(a+12,!0),p=r,u=o;if(l)throw p=0,u=0,z(s);return n=p,t=u,F(p,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}deploy(n){let t,r;try{const c=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),d=S;m.testengine_deploy(c,this.__wbg_ptr,h,d);var o=w().getInt32(c+0,!0),s=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),p=w().getInt32(c+12,!0),u=o,a=s;if(p)throw u=0,a=0,z(l);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}deployForm(n){let t,r;try{const c=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),d=S;m.testengine_deployForm(c,this.__wbg_ptr,h,d);var o=w().getInt32(c+0,!0),s=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),p=w().getInt32(c+12,!0),u=o,a=s;if(p)throw u=0,a=0,z(l);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}deployResource(n,t){let r,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),d=A(n,m.__wbindgen_export,m.__wbindgen_export2),f=S,_=A(t,m.__wbindgen_export,m.__wbindgen_export2),y=S;m.testengine_deployResource(h,this.__wbg_ptr,d,f,_,y);var s=w().getInt32(h+0,!0),l=w().getInt32(h+4,!0),p=w().getInt32(h+8,!0),u=w().getInt32(h+12,!0),a=s,c=l;if(u)throw a=0,c=0,z(p);return r=a,o=c,F(a,c)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,o,1)}}events(){let n,t;try{const a=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_events(a,this.__wbg_ptr);var r=w().getInt32(a+0,!0),o=w().getInt32(a+4,!0),s=w().getInt32(a+8,!0),l=w().getInt32(a+12,!0),p=r,u=o;if(l)throw p=0,u=0,z(s);return n=p,t=u,F(p,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}failJob(n,t,r){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),f=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(r,m.__wbindgen_export,m.__wbindgen_export2),b=S;m.testengine_failJob(d,this.__wbg_ptr,f,_,t,y,b);var l=w().getInt32(d+0,!0),p=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),c=l,h=p;if(a)throw c=0,h=0,z(u);return o=c,s=h,F(c,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}migrate(n,t,r){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),f=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),b=S,M=A(r,m.__wbindgen_export,m.__wbindgen_export2),k=S;m.testengine_migrate(d,this.__wbg_ptr,f,_,y,b,M,k);var l=w().getInt32(d+0,!0),p=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),c=l,h=p;if(a)throw c=0,h=0,z(u);return o=c,s=h,F(c,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}modify(n,t,r){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),f=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),b=S,M=A(r,m.__wbindgen_export,m.__wbindgen_export2),k=S;m.testengine_modify(d,this.__wbg_ptr,f,_,y,b,M,k);var l=w().getInt32(d+0,!0),p=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),c=l,h=p;if(a)throw c=0,h=0,z(u);return o=c,s=h,F(c,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}constructor(){const n=m.testengine_new();return this.__wbg_ptr=n,Kn.register(this,this.__wbg_ptr,this),this}get now(){return m.testengine_now(this.__wbg_ptr)}reset(){m.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,r;try{const c=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),d=S;m.testengine_resolveIncident(c,this.__wbg_ptr,h,d);var o=w().getInt32(c+0,!0),s=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),p=w().getInt32(c+12,!0),u=o,a=s;if(p)throw u=0,a=0,z(l);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}setVariables(n,t,r){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),f=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),b=S;m.testengine_setVariables(d,this.__wbg_ptr,f,_,y,b,r);var l=w().getInt32(d+0,!0),p=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),c=l,h=p;if(a)throw c=0,h=0,z(u);return o=c,s=h,F(c,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}snapshot(){let n,t;try{const a=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_snapshot(a,this.__wbg_ptr);var r=w().getInt32(a+0,!0),o=w().getInt32(a+4,!0),s=w().getInt32(a+8,!0),l=w().getInt32(a+12,!0),p=r,u=o;if(l)throw p=0,u=0,z(s);return n=p,t=u,F(p,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}throwError(n,t,r){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),f=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),b=S,M=A(r,m.__wbindgen_export,m.__wbindgen_export2),k=S;m.testengine_throwError(d,this.__wbg_ptr,f,_,y,b,M,k);var l=w().getInt32(d+0,!0),p=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),c=l,h=p;if(a)throw c=0,h=0,z(u);return o=c,s=h,F(c,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}tickNow(n){let t,r;try{const c=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_tickNow(c,this.__wbg_ptr,n);var o=w().getInt32(c+0,!0),s=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),p=w().getInt32(c+12,!0),u=o,a=s;if(p)throw u=0,a=0,z(l);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}unassignUserTask(n){let t,r;try{const c=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),d=S;m.testengine_unassignUserTask(c,this.__wbg_ptr,h,d);var o=w().getInt32(c+0,!0),s=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),p=w().getInt32(c+12,!0),u=o,a=s;if(p)throw u=0,a=0,z(l);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}updateRetries(n,t){let r,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),d=A(n,m.__wbindgen_export,m.__wbindgen_export2),f=S;m.testengine_updateRetries(h,this.__wbg_ptr,d,f,t);var s=w().getInt32(h+0,!0),l=w().getInt32(h+4,!0),p=w().getInt32(h+8,!0),u=w().getInt32(h+12,!0),a=s,c=l;if(u)throw a=0,c=0,z(p);return r=a,o=c,F(a,c)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,o,1)}}updateUserTask(n,t){let r,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),d=A(n,m.__wbindgen_export,m.__wbindgen_export2),f=S,_=A(t,m.__wbindgen_export,m.__wbindgen_export2),y=S;m.testengine_updateUserTask(h,this.__wbg_ptr,d,f,_,y);var s=w().getInt32(h+0,!0),l=w().getInt32(h+4,!0),p=w().getInt32(h+8,!0),u=w().getInt32(h+12,!0),a=s,c=l;if(u)throw a=0,c=0,z(p);return r=a,o=c,F(a,c)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,o,1)}}}Symbol.dispose&&(Pn.prototype[Symbol.dispose]=Pn.prototype.free);function Jr(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_bb96b2010945f0bc:function(n,t){throw new Error(F(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const r=F(n,t);return Hr(r)},__wbindgen_object_drop_ref:function(n){z(n)}}}}const Kn=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>m.__wbg_testengine_free(e,1));function Hr(e){Ze===De.length&&De.push(De.length+1);const n=Ze;return Ze=De[n],De[n]=e,n}function Wr(e){e<1028||(De[e]=Ze,Ze=e)}let Re=null;function w(){return(Re===null||Re.buffer.detached===!0||Re.buffer.detached===void 0&&Re.buffer!==m.memory.buffer)&&(Re=new DataView(m.memory.buffer)),Re}function F(e,n){return ei(e>>>0,n)}let We=null;function sn(){return(We===null||We.byteLength===0)&&(We=new Uint8Array(m.memory.buffer)),We}function Zr(e){return De[e]}let De=new Array(1024).fill(void 0);De.push(void 0,null,!0,!1);let Ze=De.length;function Kr(e){return e==null}function A(e,n,t){if(t===void 0){const p=Ke.encode(e),u=n(p.length,1)>>>0;return sn().subarray(u,u+p.length).set(p),S=p.length,u}let r=e.length,o=n(r,1)>>>0;const s=sn();let l=0;for(;l<r;l++){const p=e.charCodeAt(l);if(p>127)break;s[o+l]=p}if(l!==r){l!==0&&(e=e.slice(l)),o=t(o,r,r=l+e.length*3,1)>>>0;const p=sn().subarray(o+l,o+r),u=Ke.encodeInto(e,p);l+=u.written,o=t(o,r,l,1)>>>0}return S=l,o}function z(e){const n=Zr(e);return Wr(e),n}let dn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});dn.decode();const Xr=2146435072;let yn=0;function ei(e,n){return yn+=n,yn>=Xr&&(dn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),dn.decode(),yn=n),dn.decode(sn().subarray(e,e+n))}const Ke=new TextEncoder;"encodeInto"in Ke||(Ke.encodeInto=function(e,n){const t=Ke.encode(e);return n.set(t),{read:e.length,written:t.length}});let S=0,m;function ni(e,n){return m=e.exports,Re=null,We=null,m}async function ti(e,n){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(o){if(t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}else{const r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function t(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function ri(e){if(m!==void 0)return m;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/pr-preview/pr-107/assets/nanobpmn_engine_bg-DRNrIVE8.wasm",import.meta.url));const n=Jr();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await ti(await e,n);return ni(t)}let on=null;function ii(e){return on||(on=ri(void 0).then(()=>{}).catch(n=>{throw on=null,n})),on}function X(e){return JSON.parse(e)}class oi{constructor(n){R(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return X(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,r,o){return JSON.parse(this.engine.activateJobs(n,t,r,o))}completeJob(n,t){return X(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:r,...o}=t??{};return X(this.engine.completeAgentJob(n,JSON.stringify(r??{}),JSON.stringify(o??{})))}failJob(n,t,r){return X(this.engine.failJob(n,t,r))}throwError(n,t,r){return X(this.engine.throwError(n,t,r))}updateRetries(n,t){return X(this.engine.updateRetries(n,t))}resolveIncident(n){return X(this.engine.resolveIncident(n))}setVariables(n,t,r){return X(this.engine.setVariables(n,t||"{}",r))}broadcastSignal(n,t){return X(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return X(this.engine.cancelInstance(n))}modify(n,t,r){return X(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(r??[])))}completeUserTask(n,t){return X(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,r){return X(this.engine.assignUserTask(n,t,r))}unassignUserTask(n){return X(this.engine.unassignUserTask(n))}updateUserTask(n,t){return X(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,r){return X(this.engine.correlateMessage(n,t,r||"{}"))}advanceTime(n){return X(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return X(this.engine.snapshot())}free(){this.engine.free()}}async function ai(e){return await ii(),new oi(new Pn)}class Pt extends Error{constructor(t,r){super(t);R(this,"retries");this.name="JobFailure",this.retries=r==null?void 0:r.retries}}function si(e,n=[]){if(e.instances.filter(o=>!o.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const r=new Set(n);return e.jobs.some(o=>!r.has(o.jobType))?"unhandledJobs":e.userTasks.some(o=>o.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function di(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(r=>r.jobType))].filter(r=>!t.has(r)).sort()}async function li(e,n,t){let r;try{const o=await n(t);r=JSON.stringify(o??{})}catch(o){const s=o instanceof Pt&&o.retries!==void 0?o.retries:Math.max(0,t.retries-1),l=o instanceof Error?o.message:String(o);e.failJob(t.key,s,l);return}e.completeJob(t.key,r)}async function ci(e,n,t){let r;try{r=await n(t),JSON.stringify(r)}catch(o){const s=o instanceof Pt&&o.retries!==void 0?o.retries:Math.max(0,t.retries-1),l=o instanceof Error?o.message:String(o);e.failJob(t.key,s,l);return}e.completeAgentJob(t.key,r)}async function mi(e,n,t={}){const r=t.maxJobsPerActivation??10,o=t.lockTimeoutMs??3e4,s=t.worker??"bojtos",l=t.agents??{};for(const d of Object.keys(l))if(d in n)throw new Error(`dispatchRound: job type "${d}" is registered as both a worker and an agent — register it as exactly one`);const p=[];for(const[d,f]of Object.entries(n))for(const _ of e.activateJobs(d,r,o,s))p.push({handler:f,job:_});const u=[];for(const[d,f]of Object.entries(l))for(const _ of e.activateJobs(d,r,o,s))u.push({handler:f,job:_});for(const{handler:d,job:f}of p)await li(e,d,f);for(const{handler:d,job:f}of u)await ci(e,d,f);const a=e.snapshot(),c=p.length+u.length;if(c>0)return{snapshot:a,handled:c};const h=[...Object.keys(n),...Object.keys(l)];return{snapshot:a,handled:c,reason:si(a,h),unhandled:di(a,h)}}function pi({bpmn:e}){const n=g.useRef(null),[t,r]=g.useState("loading"),[o,s]=g.useState(null),[l,p]=g.useState([]),[u,a]=g.useState(null),c=g.useRef(e),h=g.useRef(0),d=g.useRef(new Map),f=g.useCallback((j,I)=>{d.current.set(j,I)},[]),_=g.useCallback(j=>d.current.get(j),[]),y=g.useCallback((j,I)=>{const N=j.deploy(I);return c.current=I,d.current.clear(),p(N.processIds),a(null),s(null),N.processIds},[]);g.useEffect(()=>{let j=!1;return r("loading"),p([]),a(null),s(null),ai().then(I=>{if(j){I.free();return}try{y(I,e)}catch(N){I.free(),s(String(N)),r("error");return}n.current=I,r("ready")}).catch(I=>{j||(s(String(I)),r("error"))}),()=>{var I;j=!0,(I=n.current)==null||I.free(),n.current=null,d.current.clear()}},[e]);const b=g.useCallback(j=>{const I=n.current;if(!I)return null;try{const N=j(I);return a(N),s(null),N}catch(N){return s(String(N)),null}},[]),M=g.useCallback((j,I)=>b(N=>N.createInstance(j,I)),[b]),k=g.useCallback((j,I)=>b(N=>N.completeUserTask(j,I)),[b]),B=g.useCallback(j=>b(I=>I.advanceTime(j)),[b]),U=g.useCallback((j,I)=>b(N=>N.broadcastSignal(j,I)),[b]);function ie(j,I){const[N]=j.activateJobs(I,1,3e4,"manual-control");if(!N)throw new Error(`No waiting job of type "${I}" to resolve.`);return N}const le=g.useCallback((j,I)=>b(N=>{const V=ie(N,j);return N.completeJob(V.key,I)}),[b]),pe=g.useCallback((j,I,N)=>b(V=>{const ue=ie(V,j);return V.throwError(ue.key,I,N)}),[b]),Ne=g.useCallback((j,I,N)=>b(V=>V.correlateMessage(j,I,N)),[b]),oe=g.useCallback(async(j,I)=>{const N=n.current;if(!N)return null;const V=h.current;try{const ue=await mi(N,j,I);return n.current!==N||h.current!==V?null:(a(ue.snapshot),s(null),ue)}catch(ue){return n.current!==N||h.current!==V||(a(N.snapshot()),s(String(ue))),null}},[]),Q=g.useCallback(()=>{const j=n.current;if(j){h.current++;try{j.reset(),y(j,c.current)}catch(I){s(String(I))}}},[y]),W=g.useCallback(j=>{const I=n.current;if(!I)return null;h.current++;try{return I.reset(),y(I,j)}catch(N){return s(String(N)),null}},[y]);return{phase:t,error:o,processIds:l,snapshot:u,createInstance:M,stepWorkers:oe,completeUserTask:k,advanceTime:B,broadcastSignal:U,completeJobManually:le,throwJobError:pe,correlateMessage:Ne,reset:Q,redeploy:W,setRunImage:f,getRunImage:_}}function ui(e,n){return e.slice(n)}function hi(e,n,t,r){const o=e.snapshot,s="⏸ waiting for a human — complete the task below to continue",l=o.userTasks.some(p=>p.state==="Created");if(e.handled>0){const p=o.activeElementIds.map(t),u=n.length?` via ${n.map(a=>`${t(a.from)} → ${t(a.to)}`).join(", ")}`:"";return o.completedInstances>=1?{kind:"done",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — ✅ process instance completed`}:l?{kind:"human",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — ${s}`}:{kind:"step",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — now at ${p.length?p.join(", "):"—"}`}}switch(e.reason){case"completed":return{kind:"done",text:"✅ process instance completed"};case"userTasks":return{kind:"human",text:s};case"timers":return{kind:"step",text:"⏱ waiting on a timer — advance the clock to continue"};case"messages":return{kind:"step",text:"✉ waiting on a message — correlate it to continue"};case"signals":return{kind:"step",text:"📶 waiting on a signal — broadcast it to continue"};case"incidents":return{kind:"error",text:"A job failed — incident on the diagram"};case"unhandledJobs":{const p=e.unhandled??[];return r&&p.length>0&&p.every(u=>r.has(u))?{kind:"human",text:s}:{kind:"error",text:`⏭ waiting on job type(s) with no worker registered: ${p.join(", ")}`}}case"idle":return{kind:"step",text:"Nothing to step — no instance is running."};default:return{kind:"step",text:e.reason?`Step blocked on an unrecognized reason: ${e.reason}`:"Nothing to step — no instance is running."}}}const gi="the Scripted or Endpoint brain";async function cn(e=gi){const n=navigator.gpu;if(!n)return`This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick ${e}.`;let t;try{t=await n.requestAdapter()}catch(r){return`WebGPU adapter request failed (${r instanceof Error?r.message:String(r)}). Try ${e} instead.`}return t?null:`This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick ${e} instead.`}const bi=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function At(e){return An.get(e)??{}}const An=new Map;async function _i(){if(An.size>0)return;const{prebuiltAppConfig:e}=await me(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)An.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const hn=bi.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...At(e.id)})),Ct=hn[0].id;async function fi(){return await _i(),hn.map(e=>({...e,...At(e.id)}))}function Dt(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function wi(e,n=Dt()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function yi(e){try{const{hasModelInCache:n}=await me(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function mn(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function Xn(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class an{constructor(){R(this,"kind","browser");R(this,"model",null);R(this,"engine",null);R(this,"worker",null);R(this,"generation",0);R(this,"chat",async(n,t=512,r)=>{var s,l;const o=this.engine;if(!o||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const p=await o.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let u="";for await(const a of p){const c=((l=(s=a.choices[0])==null?void 0:s.delta)==null?void 0:l.content)??"";c&&(u+=c,r==null||r(c))}return u}catch(p){const u=p instanceof Error?p.message:String(p);throw mn(u)?(this.teardown(),new Error(`The in-browser model stopped: ${Xn()}`)):p}})}async connect(n=Ct,t){var u,a;const r=await cn();if(r)throw new Error(r);if(this.engine&&this.model===n)return n;const o=++this.generation,s=c=>{o===this.generation&&(t==null||t({progress:c.progress??0,text:c.text??""}))};this.teardown();let l,p;try{const{CreateWebWorkerMLCEngine:c}=await me(async()=>{const{CreateWebWorkerMLCEngine:h}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:h}},[]);p=new Worker(new URL("/pr-preview/pr-107/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),l=await c(p,n,{initProgressCallback:s})}catch(c){if(p==null||p.terminate(),o!==this.generation)throw new Error("cancelled");const h=c instanceof Error?c.message:String(c);if(mn(h))throw new Error(`Couldn't load ${n} in the browser (${h}). ${Xn()}`);const d=(a=(u=hn.find(f=>f.id===n))==null?void 0:u.requiredFeatures)==null?void 0:a.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${h}). `+(d?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(o!==this.generation)throw l.unload().catch(()=>{}),p==null||p.terminate(),new Error("cancelled");return this.engine=l,this.worker=p??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const Bt="http://localhost:11434/v1";function pn(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(r=>(r=globalThis.location)==null?void 0:r.origin)()??""}){let o;try{o=new URL(Lt(e)).hostname}catch{return null}const s=l=>l==="localhost"||l==="127.0.0.1"||l==="::1"||l==="[::1]";return!s(o)||s(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function Lt(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class et extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class nt{constructor(n=Bt,t="",r=""){R(this,"kind","endpoint");R(this,"baseUrl");R(this,"model",null);R(this,"models",[]);R(this,"apiKey");R(this,"requestedModel");R(this,"chat",async(n,t=512,r)=>{var a,c,h;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const o=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!o.ok||!o.body){const d=await o.text().catch(()=>"");throw new Error(`chat/completions HTTP ${o.status} ${o.statusText}${d?` — ${d.slice(0,300)}`:""}`)}const s=o.body.getReader(),l=new TextDecoder;let p="",u="";for(;;){const{value:d,done:f}=await s.read();if(f)break;p+=l.decode(d,{stream:!0});let _;for(;(_=p.indexOf(`
`))>=0;){const y=p.slice(0,_).trim();if(p=p.slice(_+1),!y.startsWith("data:"))continue;const b=y.slice(5).trim();if(b==="[DONE]")continue;let M;try{M=JSON.parse(b)}catch{continue}M.model&&(this.model=M.model);const k=(a=M.choices)==null?void 0:a[0],B=((c=k==null?void 0:k.delta)==null?void 0:c.content)??((h=k==null?void 0:k.message)==null?void 0:h.content)??"";B&&(u+=B,r==null||r(B))}}return u});this.baseUrl=Lt(n),this.apiKey=t.trim(),this.requestedModel=r.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(r){const o=pn(this.baseUrl);throw new Error(o??`Can't reach ${this.baseUrl} (${r instanceof Error?r.message:String(r)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new et(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(r=>r.id).filter(r=>!!r),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof et&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(r=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${r instanceof Error?r.message:String(r)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const r=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${r?` — ${r.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}const tt="gemini-nano";function un(){const e=globalThis.LanguageModel;return typeof(e==null?void 0:e.create)=="function"&&typeof e.availability=="function"?e:null}function vi(){return un()!==null}async function Rt(){const e=un();if(!e)return"This browser has no built-in AI model. Chrome's Prompt API (Gemini Nano) needs Chrome 138+ on desktop Windows 10/11, macOS 13+, Linux or a Chromebook Plus. Use the Scripted, In-browser (WebGPU) or API endpoint brain instead.";let n;try{n=await e.availability()}catch(t){return`Chrome couldn't report on its built-in model (${t instanceof Error?t.message:String(t)}).`}return n==="unavailable"?"Chrome exposes the built-in AI API here, but Gemini Nano can't run on this device. Chrome requires ~22 GB free on the volume holding your Chrome profile, and either a GPU with more than 4 GB of VRAM or 16 GB of RAM with 4+ CPU cores. Check chrome://on-device-internals for the details.":null}class rt{constructor(){R(this,"kind","chrome");R(this,"model",null);R(this,"warm",null);R(this,"connecting",null);R(this,"chat",async(n,t,r)=>{if(!this.model)throw new Error("ChromeBrain.chat called before connect()");const o=un();if(!o)throw new Error("Chrome's built-in AI API went away.");const s=n.filter(u=>u.role==="system"),l=n.filter(u=>u.role!=="system"),p=await o.create(s.length?{initialPrompts:s}:void 0);try{const u=p.promptStreaming(l).getReader();let a="";for(;;){const{done:c,value:h}=await u.read();if(c)break;h&&(a+=h,r==null||r(h))}return a}finally{p.destroy()}})}async connect(n){const t=await Rt();if(t)throw new Error(t);const r=un();this.dispose();const o=new AbortController;this.connecting=o;try{this.warm=await r.create({signal:o.signal,monitor:s=>{s.addEventListener("downloadprogress",l=>{n==null||n({progress:l.loaded,text:`Downloading Gemini Nano — ${Math.round(l.loaded*100)}%`})})}})}catch(s){if(o.signal.aborted)throw new Error("cancelled");const l=s instanceof Error?s.message:String(s);throw new Error(`Chrome couldn't start its built-in model (${l}). The first run downloads Gemini Nano and must be triggered by a click — press Connect again, and check chrome://on-device-internals if it keeps failing.`)}finally{this.connecting=null}return this.model=tt,tt}cancelConnect(){var n;(n=this.connecting)==null||n.abort()}dispose(){var n;(n=this.warm)==null||n.destroy(),this.warm=null,this.model=null}}const Mi=[{id:"onnx-community/Florence-2-base-ft",label:"Florence-2 base",downloadLabel:"~0.4 GB"},{id:"onnx-community/Florence-2-large-ft",label:"Florence-2 large (higher quality)",downloadLabel:"~1.6 GB"}],Ft=Mi.map(e=>({...e,label:`${e.label} (${e.downloadLabel})`})),zt=Ft[0].id,xi="<OCR>",it="UNKNOWN (scripted brain — connect the in-browser model to read a photo)";function Ni(e,n){if(e)return typeof e=="function"?e(n):e[n]}class Ei{constructor(n){R(this,"kind","scripted-vision");R(this,"model",null);R(this,"read",async(n,t,r)=>{const o=typeof n=="string"?Ni(this.lookup,n)??it:it;return r==null||r(o),o});this.lookup=n}dispose(){}}function ki(e){return new Ei(e)}class ot{constructor(){R(this,"kind","browser-vision");R(this,"model",null);R(this,"modelHandle",null);R(this,"processor",null);R(this,"loadImage",null);R(this,"generation",0);R(this,"read",async(n,t,r)=>{const o=this.modelHandle,s=this.processor,l=this.loadImage;if(!o||!s||!l||!this.model)throw new Error("BrowserVisionBrain.read called before connect()");const p=t&&t.startsWith("<")?t:xi,u=await l(n),a=s.construct_prompts(p),c=await s(u,a),h=await o.generate({...c,max_new_tokens:512,num_beams:1,do_sample:!1}),d=s.batch_decode(h,{skip_special_tokens:!1})[0],f=s.post_process_generation(d,p,u.size),_=Ii(f,p);return r==null||r(_),_})}async connect(n=zt,t){var p,u;const r=await cn("the scripted-vision fallback");if(r)throw new Error(r);if(this.modelHandle&&this.model===n)return n;const o=++this.generation,s=a=>{o===this.generation&&(t==null||t({progress:(a.progress??0)/100,text:a.file?`${a.status??"loading"} ${a.file}`:a.status??""}))};this.teardown();let l;try{const{Florence2ForConditionalGeneration:a,AutoProcessor:c,load_image:h}=await me(async()=>{const{Florence2ForConditionalGeneration:_,AutoProcessor:y,load_image:b}=await import("./transformers.web-9iRW7sOn.js");return{Florence2ForConditionalGeneration:_,AutoProcessor:y,load_image:b}},[]),d=await a.from_pretrained(n,{dtype:"fp32",device:"webgpu",progress_callback:s}),f=await c.from_pretrained(n);l={model:d,processor:f,loadImage:h}}catch(a){if(o!==this.generation)throw new Error("cancelled");const c=a instanceof Error?a.message:String(a);throw new Error(`Couldn't load ${n} in the browser (${c}). Try the smaller Florence-2 base model, check your connection, or use the scripted-vision fallback.`)}if(o!==this.generation)throw Promise.resolve((u=(p=l.model).dispose)==null?void 0:u.call(p)).catch(()=>{}),new Error("cancelled");return this.modelHandle=l.model,this.processor=l.processor,this.loadImage=l.loadImage,this.model=n,n}teardown(){var t;const n=this.modelHandle;this.modelHandle=null,this.processor=null,this.loadImage=null,this.model=null,Promise.resolve((t=n==null?void 0:n.dispose)==null?void 0:t.call(n)).catch(()=>{})}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}function Ii(e,n){const t=e[n];if(typeof t=="string")return t.trim();if(t&&typeof t=="object"){const r=t.labels;return Array.isArray(r)?r.join(" ").trim():JSON.stringify(t)}return""}function Ti(){const[e,n]=g.useState("scripted"),[t,r]=g.useState("idle"),[o,s]=g.useState(null),[l,p]=g.useState(null),[u,a]=g.useState(null),[c,h]=g.useState(null),[d,f]=g.useState(null),[_,y]=g.useState(null),[b,M]=g.useState(null),[k,B]=g.useState(Ct),[U,ie]=g.useState(Bt),[le,pe]=g.useState(""),[Ne,oe]=g.useState([]),[Q,W]=g.useState("idle"),[j,I]=g.useState(null),[N,V]=g.useState(""),[ue,he]=g.useState(null),Z=g.useRef(null),[ge,ze]=g.useState("scripted-vision"),[gn,je]=g.useState("idle"),[Le,be]=g.useState(null),[Oe,bn]=g.useState(zt),[_n,Se]=g.useState(null),[_e,J]=g.useState(null),[fn,qe]=g.useState(null),[Ue,Ee]=g.useState(null),ee=g.useRef(null),L=g.useRef(!1),Me=g.useRef(0),xe=g.useCallback(T=>async(...Y)=>{try{return await T.chat(...Y)}catch(D){const H=D instanceof Error?D.message:String(D);throw T instanceof an&&mn(H)&&(he(null),p(null),r("error"),s(H)),D}},[]),ke=g.useCallback(T=>async(...Y)=>{try{return await T.read(...Y)}catch(D){const H=D instanceof Error?D.message:String(D);throw mn(H)&&(Ee(null),Se(null),je("error"),be(H)),D}},[]);g.useEffect(()=>{cn().then(T=>{f(T),h(T===null)}),Rt().then(M),cn("the scripted-vision fallback").then(T=>{qe(T),L.current||(L.current=!0,ze(T===null?"browser-vision":"scripted-vision"))})},[]),g.useEffect(()=>{let T=!1;return y(null),yi(k).then(Y=>{T||y(Y)}),()=>{T=!0}},[k]),g.useEffect(()=>()=>{var T;return(T=Z.current)==null?void 0:T.dispose()},[]),g.useEffect(()=>()=>{var T;return(T=ee.current)==null?void 0:T.dispose()},[]);const en=g.useCallback(T=>{n(T),r("idle"),s(null),p(null),a(null),he(null)},[]),fe=g.useCallback(T=>{var Y,D;L.current=!0,(Y=ee.current)==null||Y.cancelConnect(),(D=ee.current)==null||D.dispose(),ee.current=null,ze(T),je("idle"),be(null),Se(null),J(null),Ee(null)},[]),Pe=g.useCallback(()=>{var T;(T=Z.current)==null||T.dispose(),Z.current=null,he(null),p(null)},[]),$e=g.useCallback(()=>{const T=Z.current;(T instanceof an||T instanceof rt)&&T.cancelConnect(),Pe(),r("idle"),a(null),s(null)},[Pe]),nn=g.useCallback(async()=>{const T=++Me.current,Y=()=>T!==Me.current,D=pn(U);if(D){oe([]),W("error"),I(D);return}W("loading"),I(null);const H=new nt(U,N);try{const Ae=await H.listModels();if(Y())return;oe(Ae),W("ready"),pe(Ve=>Ve&&Ae.includes(Ve)?Ve:Ae[0]??"")}catch(Ae){if(Y())return;oe([]),pe(""),W("error"),I(Ae instanceof Error?Ae.message:String(Ae))}finally{H.dispose()}},[U,N]),Ge=g.useCallback(async()=>{var T,Y;if(e==="scripted"){he(null),r("ready");return}if(e==="endpoint"){const D=pn(U);if(D){Pe(),s(D),r("error");return}}r("connecting"),s(null),a(null);try{if(e==="browser"){const D=Z.current instanceof an?Z.current:new an;Z.current&&Z.current!==D&&Z.current.dispose(),Z.current=D;const H=await D.connect(k,a);p(H),he(()=>xe(D)),y(!0)}else if(e==="chrome"){(T=Z.current)==null||T.dispose();const D=new rt;Z.current=D;const H=await D.connect(a);M(null),p(H),he(()=>xe(D))}else{(Y=Z.current)==null||Y.dispose();const D=new nt(U,N,le);Z.current=D;const H=await D.connect();p(H),he(()=>xe(D))}r("ready")}catch(D){const H=D instanceof Error?D.message:String(D);if(H==="cancelled")return;s(H),r("error"),he(null)}finally{a(null)}},[e,k,U,le,N,Pe,xe]),Ie=g.useCallback(()=>{var T;(T=ee.current)==null||T.dispose(),ee.current=null,Ee(null),Se(null)},[]),Je=g.useCallback(()=>{var T;(T=ee.current)==null||T.cancelConnect(),Ie(),je("idle"),J(null),be(null)},[Ie]),wn=g.useCallback(async()=>{if(ge==="scripted-vision"){Ie(),je("ready"),be(null);return}je("connecting"),be(null),J(null);try{const T=ee.current instanceof ot?ee.current:new ot;ee.current&&ee.current!==T&&ee.current.dispose(),ee.current=T;const Y=await T.connect(Oe,J);Se(Y),Ee(()=>ke(T)),je("ready")}catch(T){const Y=T instanceof Error?T.message:String(T);if(Y==="cancelled")return;be(Y),je("error"),Ee(null),Se(null)}finally{J(null)}},[ge,Oe,Ie,ke]);return{kind:e,setKind:en,status:t,error:o,modelInUse:l,progress:u,webgpu:c,webgpuReason:d,browserModelCached:_,chromeAiReason:b,cancelConnect:$e,browserModel:k,setBrowserModel:B,endpointUrl:U,setEndpointUrl:ie,endpointModel:le,setEndpointModel:pe,endpointModels:Ne,endpointModelsStatus:Q,endpointModelsError:j,listEndpointModels:nn,apiKey:N,setApiKey:V,connect:Ge,chat:ue,visionKind:ge,setVisionKind:fe,visionStatus:gn,visionError:Le,visionModel:Oe,setVisionModel:bn,visionModelInUse:_n,visionProgress:_e,visionWebgpuReason:fn,connectVision:wn,cancelVisionConnect:Je,vision:Ue}}const Cn="#s=",ji=["scripted","browser","chrome","endpoint"];function Si(e){return typeof e=="string"&&ji.includes(e)}function Pi(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,r={};return Si(t.brain)&&(r.brain=t.brain),r}}catch{}return{}}function Ot(e=location.hash){if(!e.startsWith(Cn))return{};let n;try{n=decodeURIComponent(e.slice(Cn.length))}catch{return{}}return Pi(n)}function Ai(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":Cn+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function Ci(e){const n={...Ot(),...e},t=Ai(n),r=new URL(location.href);r.hash=t,history.replaceState(history.state,"",r)}const at=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"chrome",label:"Chrome built-in",hint:"Gemini Nano, built into Chrome. Chrome owns the weights — no download from this page, no API key."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server. Ollama by default. Local pages only."}],st=[{kind:"scripted-vision",label:"Scripted",hint:"No model. The example's known plate is returned — deterministic and offline."},{kind:"browser-vision",label:"In-browser (WebGPU)",hint:"Reads the photo with a vision model on your GPU. First run downloads weights."}];function Di({brain:e,showText:n=!0,showVision:t=!1}){return i.jsxs("div",{className:"brain",children:[n&&i.jsx(Bi,{brain:e}),n&&t&&i.jsx("hr",{className:"brain-divider"}),t&&i.jsx(Li,{brain:e})]})}function Bi({brain:e}){const n=at.find(d=>d.kind===e.kind),t=at.filter(d=>d.kind!=="chrome"||vi()),r=pn(e.endpointUrl),[o,s]=g.useState(hn);g.useEffect(()=>{fi().then(s)},[]);const{kind:l,endpointUrl:p,apiKey:u,listEndpointModels:a}=e;g.useEffect(()=>{if(l!=="endpoint"||r)return;const d=setTimeout(()=>void a(),400);return()=>clearTimeout(d)},[l,p,u,r,a]);const c=o.find(d=>d.id===e.browserModel),h=c?wi(c,Dt()):null;return i.jsxs("div",{className:"brain-section",children:[i.jsxs("div",{className:"brain-modes",children:[i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Agent brain",children:t.map(d=>i.jsx(q,{size:"sm",variant:e.kind===d.kind?"default":"secondary","aria-pressed":e.kind===d.kind,onClick:()=>e.setKind(d.kind),children:d.label},d.kind))}),i.jsxs("div",{className:"brain-status",children:[e.status==="ready"&&e.kind!=="scripted"&&i.jsx(re,{variant:"success",className:"brain-status-badge",children:e.modelInUse??"connected"}),e.status==="connecting"&&i.jsx(re,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.status==="error"&&i.jsx(re,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Qe,{htmlFor:"browser-model",children:"Model"}),i.jsxs(Nn,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[i.jsx(En,{id:"browser-model",children:i.jsx(kn,{})}),i.jsx(In,{children:o.map(d=>i.jsx(Tn,{value:d.id,children:d.label},d.id))})]}),e.browserModelCached===!0&&i.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&i.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"No WebGPU in this browser"}),i.jsx(de,{children:e.webgpuReason})]}),e.webgpu!==!1&&h&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"This model may not fit in GPU memory"}),i.jsx(de,{children:h})]})]}),e.kind==="chrome"&&i.jsxs("div",{className:"brain-config",children:[i.jsx("p",{className:"field-hint",children:"Nothing to configure: Chrome downloads and manages Gemini Nano itself, so the first Connect may fetch it once and later visits reuse it. Prompts never leave your machine. It's a very small model — expect it to follow the tool-calling format less reliably than an endpoint model."}),e.chromeAiReason&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"Chrome's built-in model isn't available here"}),i.jsx(de,{children:e.chromeAiReason})]})]}),e.kind==="endpoint"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Qe,{htmlFor:"endpoint-url",children:"Endpoint"}),i.jsx(Vn,{id:"endpoint-url",value:e.endpointUrl,onChange:d=>e.setEndpointUrl(d.target.value),disabled:e.status==="connecting"}),i.jsxs("p",{className:"field-hint",children:["Ollama allows ",i.jsx("code",{children:"localhost"})," origins out of the box; set"," ",i.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}),r&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"A local server won't work from this URL"}),i.jsx(de,{children:r})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(Qe,{htmlFor:"endpoint-model",children:"Model"}),i.jsxs("div",{className:"endpoint-model-row",children:[i.jsxs(Nn,{value:e.endpointModel,onValueChange:e.setEndpointModel,disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||e.endpointModels.length===0,children:[i.jsx(En,{id:"endpoint-model",className:"endpoint-model-select",children:i.jsx(kn,{placeholder:e.endpointModelsStatus==="loading"?"Loading models…":e.endpointModelsStatus==="idle"?"Enter an endpoint above":e.endpointModelsStatus==="error"?"No models — check the endpoint":e.endpointModels.length===0?"No models served":"Select a model"})}),i.jsx(In,{children:e.endpointModels.map(d=>i.jsx(Tn,{value:d,children:d},d))})]}),i.jsx(q,{size:"sm",variant:"secondary",onClick:()=>void e.listEndpointModels(),disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||r!==null,children:e.endpointModelsStatus==="loading"?"Refreshing…":"Refresh"})]}),i.jsxs("p",{className:"field-hint",children:["Fetched from the endpoint's ",i.jsx("code",{children:"/models"}),". Tiny models (e.g. SmolLM2) usually can't follow the tool-calling format — prefer ",i.jsx("code",{children:"llama3.2:3b"}),", ",i.jsx("code",{children:"qwen2.5"})," or larger."]}),e.endpointModelsStatus==="error"&&!r&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"Couldn't list models"}),i.jsx(de,{children:e.endpointModelsError})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(Qe,{htmlFor:"endpoint-key",children:"API key (optional)"}),i.jsx(Vn,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:d=>e.setApiKey(d.target.value),disabled:e.status==="connecting"})]})]}),e.kind!=="scripted"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(q,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting"||e.kind==="chrome"&&e.chromeAiReason!==null||e.kind==="endpoint"&&(e.endpointModel===""||e.endpointModelsStatus==="loading"||r!==null),children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&(e.kind==="browser"||e.kind==="chrome")&&i.jsx(q,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.progress&&i.jsx("div",{className:"brain-progress",role:"progressbar","aria-valuenow":Math.round(e.progress.progress*100),"aria-valuemin":0,"aria-valuemax":100,children:i.jsx("div",{className:"brain-progress-bar",style:{width:`${Math.round(e.progress.progress*100)}%`}})}),e.error&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"Couldn't connect"}),i.jsx(de,{children:e.error})]})]})}function Li({brain:e}){const n=st.find(t=>t.kind===e.visionKind);return i.jsxs("div",{className:"brain-section brain-vision",children:[i.jsx(Qe,{children:"Vision (reads the image)"}),i.jsxs("div",{className:"brain-modes",children:[i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Vision brain",children:st.map(t=>i.jsx(q,{size:"sm",variant:e.visionKind===t.kind?"default":"secondary","aria-pressed":e.visionKind===t.kind,onClick:()=>e.setVisionKind(t.kind),children:t.label},t.kind))}),i.jsxs("div",{className:"brain-status",children:[e.visionStatus==="ready"&&e.visionKind==="browser-vision"&&i.jsx(re,{variant:"success",className:"brain-status-badge",children:e.visionModelInUse??"connected"}),e.visionStatus==="connecting"&&i.jsx(re,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.visionStatus==="error"&&i.jsx(re,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.visionKind==="scripted-vision"&&e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"No WebGPU in this browser"}),i.jsx(de,{children:e.visionWebgpuReason})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Qe,{htmlFor:"vision-model",children:"Model"}),i.jsxs(Nn,{value:e.visionModel,onValueChange:e.setVisionModel,disabled:e.visionStatus==="connecting",children:[i.jsx(En,{id:"vision-model",children:i.jsx(kn,{})}),i.jsx(In,{children:Ft.map(t=>i.jsx(Tn,{value:t.id,children:t.label},t.id))})]}),i.jsx("p",{className:"field-hint",children:"Connecting downloads the weights once (size shown above), then caches them — every token is read on your GPU, no server."})]}),e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"No WebGPU in this browser"}),i.jsx(de,{children:e.visionWebgpuReason})]})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(q,{size:"sm",onClick:()=>void e.connectVision(),disabled:e.visionStatus==="connecting",children:e.visionStatus==="ready"?"Reconnect":"Connect"}),e.visionStatus==="connecting"&&i.jsx(q,{size:"sm",variant:"secondary",onClick:e.cancelVisionConnect,children:"Cancel"}),e.visionProgress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.visionProgress.progress*100),"% —"," ",e.visionProgress.text]})]}),e.visionError&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"Couldn't connect the vision brain"}),i.jsx(de,{children:e.visionError})]})]})}function Ri({imageInput:e,value:n,onSelect:t,disabled:r=!1}){const[o,s]=g.useState(null),[l,p]=g.useState(!1),u=g.useRef(null),a=g.useId(),c=g.useId(),h=g.useCallback(_=>{s(URL.createObjectURL(_)),t({imageName:_.name,pixels:_})},[t]);g.useEffect(()=>{if(o)return()=>URL.revokeObjectURL(o)},[o]);const d=g.useCallback(_=>{const y=_==null?void 0:_[0];y&&y.type.startsWith("image/")&&h(y)},[h]),f=(n==null?void 0:n.imageId)!=null?e.seedImages.find(_=>_.id===n.imageId):void 0;return i.jsxs("div",{className:"image-input",children:[e.label&&i.jsx("p",{className:"field-hint",children:e.label}),i.jsx("p",{className:"image-input-label",id:a,children:"Seed photos"}),i.jsx("div",{className:"image-gallery",role:"group","aria-labelledby":a,children:e.seedImages.map(_=>{const y=(n==null?void 0:n.imageId)===_.id;return i.jsxs("button",{type:"button","aria-pressed":y,className:`image-thumb${y?" image-thumb--selected":""}`,disabled:r,title:_.label??_.id,onClick:()=>{s(null),u.current&&(u.current.value=""),t({imageId:_.id,pixels:_.file})},children:[i.jsx("img",{src:_.thumb??_.file,alt:_.label??_.id}),_.label&&i.jsx("span",{children:_.label})]},_.id)})}),i.jsx("label",{className:"image-input-label",htmlFor:c,children:"Or upload your own photo"}),i.jsxs("div",{className:`image-drop${l?" image-drop--over":""}`,onDragOver:_=>{_.preventDefault(),r||p(!0)},onDragLeave:()=>p(!1),onDrop:_=>{_.preventDefault(),p(!1),r||d(_.dataTransfer.files)},children:[i.jsx("input",{ref:u,id:c,type:"file",accept:"image/*",disabled:r,onChange:_=>d(_.target.files)}),i.jsx("p",{className:"field-hint",children:"Drag a photo here, or pick one. Uploading a photo the model has never seen is the proof this runs for real — nothing leaves your browser."})]}),(o||f)&&i.jsxs("div",{className:"image-preview",children:[i.jsx("img",{src:o??(f==null?void 0:f.file),alt:o?(n==null?void 0:n.imageName)??"uploaded photo":(f==null?void 0:f.label)??(f==null?void 0:f.id)??"selected photo"}),i.jsx("span",{className:"field-hint",children:o?`Uploaded: ${(n==null?void 0:n.imageName)??"your photo"}`:`Selected: ${(f==null?void 0:f.label)??(f==null?void 0:f.id)}`}),i.jsx("button",{type:"button",className:"image-clear-btn",disabled:r,onClick:()=>{s(null),u.current&&(u.current.value=""),t(null)},children:"Clear"})]})]})}function Ut(e){return typeof e=="object"&&e!==null}function Md(e){const n=new Set,t=r=>{Ut(r)&&(typeof r.key=="string"&&n.add(r.key),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function Fi(e){const n={},t=r=>{Ut(r)&&(typeof r.key=="string"&&"defaultValue"in r&&(n[r.key]=r.defaultValue??""),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}const zi="wdf:section:v2:";function $t(e){return zi+e}function dt(e){try{const n=window.localStorage.getItem($t(e));return n==="1"?!0:n==="0"?!1:void 0}catch{return}}function Oi(e,n){try{window.localStorage.setItem($t(e),n?"1":"0")}catch{}}function Bn(e,n=!0){const[t,r]=g.useState(()=>dt(e)??n);g.useEffect(()=>{r(dt(e)??n)},[e,n]);const o=g.useCallback(s=>{r(s),Oi(e,s)},[e]);return[t,o]}function Fe({sectionId:e,title:n,description:t,defaultOpen:r=!0,className:o,children:s,...l}){const[p,u]=Bn(e,r);return i.jsx(Jt,{className:["panel",o].filter(Boolean).join(" "),"data-tour":l["data-tour"],children:i.jsxs(Ht,{open:p,onOpenChange:u,children:[i.jsxs(Wt,{className:"panel-trigger",children:[i.jsxs("span",{className:"panel-trigger-text",children:[i.jsx("span",{className:"panel-title",children:n}),t!=null&&i.jsx("span",{className:"panel-desc",children:t})]}),i.jsx(Zt,{className:"panel-chevron","aria-hidden":!0})]}),i.jsx(Kt,{children:i.jsx(Xt,{children:s})})]})})}function Ui(e){return e.entries!==void 0}function $i(e){const n=[];let t=null;for(const r of e)r.turn!==void 0?t&&t.turn===r.turn?t.entries.push(r):(t={turn:r.turn,entries:[r]},n.push(t)):(t=null,n.push(r));return n}function lt(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Gi({activation:e,result:n,labelFor:t}){const r=e.elementId??"";return i.jsxs("div",{className:"timeline-tool",children:[i.jsxs("div",{className:"timeline-tool-head",children:[i.jsx(re,{variant:"info",children:"tool"}),i.jsx("strong",{children:t(r)||r}),i.jsx("code",{children:r})]}),e.args!==void 0&&Object.keys(e.args).length>0&&i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"arguments"}),i.jsx("code",{children:lt(e.args)})]}),i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"returned"}),i.jsx("code",{children:n?lt(n.result):"— waiting for the job to complete —"})]})]})}function Vi({group:e,labelFor:n}){const t=e.entries.find(a=>a.kind==="llm"),r=e.entries.filter(a=>a.kind==="agent"&&a.elementId),o=e.entries.filter(a=>a.kind==="vars"&&a.elementId),s=e.entries.filter(a=>a.kind==="agent"&&!a.elementId),l=e.entries.filter(a=>a.kind==="error"),p=new Set(r.map(a=>a.elementId)),u=e.entries.filter(a=>a.kind==="tool"||a.kind==="vars"&&a.elementId&&!p.has(a.elementId)).sort((a,c)=>a.id-c.id);return i.jsxs("div",{className:"timeline-turn",children:[i.jsxs("div",{className:"timeline-turn-head",children:[i.jsxs(re,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&i.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&i.jsx("blockquote",{className:"timeline-reply",children:t.text}),s.map(a=>i.jsx("div",{className:"timeline-note",children:a.text},a.id)),r.map(a=>i.jsx(Gi,{activation:a,result:o.find(c=>c.elementId===a.elementId),labelFor:n},a.id)),u.map(a=>i.jsxs("div",{className:`log-line log-${a.kind}`,children:[a.pending?"⏳ ":"",a.text]},a.id)),l.map(a=>i.jsxs("div",{className:"timeline-error",children:["⚠ ",a.text]},a.id))]})}function Yi({log:e,elementStats:n=[],incidents:t=[],labelFor:r=s=>s,variables:o}){const s=g.useMemo(()=>$i(e),[e]),[l,p]=g.useState(!1),[u,a]=Bn("engine-view",!1),c=g.useRef(null);g.useEffect(()=>{const d=c.current;d&&(d.scrollTop=d.scrollHeight)},[s]);const h=()=>{var _;const d={log:e.map(({id:y,...b})=>b),elementStats:n,incidents:t},f=JSON.stringify(d,null,2);(_=navigator.clipboard)!=null&&_.writeText&&navigator.clipboard.writeText(f).then(()=>{p(!0),setTimeout(()=>p(!1),1500)}).catch(()=>{})};return i.jsxs(Fe,{sectionId:"activity",className:"grow activity-card",title:"Agent activity",description:"Agent turns, model replies, and tool calls — read top to bottom as a story.",children:[i.jsx("div",{className:"timeline-toolbar",children:i.jsx(q,{variant:"secondary",size:"sm",onClick:h,children:l?"Copied!":"Copy run as JSON"})}),i.jsx("div",{className:"timeline",ref:c,children:s.length===0?i.jsx("div",{className:"log-empty",children:"Press Run or Step to start."}):s.map(d=>Ui(d)?i.jsx(Vi,{group:d,labelFor:r},`turn-${d.turn}-${d.entries[0].id}`):i.jsxs("div",{className:`log-line log-${d.kind}`,children:[d.pending?"⏳ ":"",d.text]},d.id))}),o,(n.length>0||t.length>0)&&i.jsxs("details",{className:"engine-view",open:u,onToggle:d=>a(d.currentTarget.open),children:[i.jsxs("summary",{children:["Element completion",t.length>0&&` · ${t.length} incident${t.length===1?"":"s"}`]}),i.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&i.jsxs("div",{className:"timeline-stats",children:[i.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),i.jsx("ul",{children:n.filter(d=>d.completed>0||(d.active??0)>0).map(d=>i.jsxs("li",{children:[i.jsx("code",{children:r(d.elementId)||d.elementId})," ","completed ",d.completed,d.active?`, ${d.active} active`:""]},d.elementId))})]}),t.length>0&&i.jsxs("div",{className:"timeline-incidents",children:[i.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),i.jsx("ul",{children:t.map((d,f)=>i.jsxs("li",{children:[i.jsx("code",{children:r(d.elementId)||d.elementId})," —"," ",d.reason]},`${d.elementId}-${f}`))})]})]})]})]})}const Te={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function ct(e){return`[data-tour="${e}"]`}function Qi(e=location.search){return new URLSearchParams(e).get("tour")}function qi(e,n){var t;return((t=e.elementStats.find(r=>r.elementId===n))==null?void 0:t.completed)??0}function Ji(e,n){return!e||e.kind==="click"||!n?!1:e.kind==="activeElement"?n.activeElementIds.includes(e.elementId):qi(n,e.elementId)>=(e.atLeast??1)}function Hi(e){return"anchor"in e?ct(e.anchor):`${ct(Te.diagram)} [data-element-id="${Wi(e.elementId)}"]`}function Wi(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function Zi(e){return e.map(n=>{const t=!!n.waitFor&&n.waitFor.kind!=="click";return{element:Hi(n.target),popover:{title:n.title,description:t?`${n.description} (continues automatically once you reach that point — or use Next to skip ahead)`:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}})}async function Ki(e,n={}){var s;const[{driver:t}]=await Promise.all([me(()=>import("./driver.js-bj_ppY-Q.js"),[]),me(()=>Promise.resolve({}),__vite__mapDeps([0]))]),r=Zi(e),o=t({steps:r,showProgress:!0,allowClose:!0,skipMissingElement:!0,onHighlighted:(l,p,{index:u})=>{var a;u!==void 0&&((a=n.onIndexChange)==null||a.call(n,u))},onDestroyed:()=>{var l;(l=n.onDestroyed)==null||l.call(n)}});return o.drive(),(s=n.onIndexChange)==null||s.call(n,o.getActiveIndex()??0),{moveNext:()=>o.moveNext(),activeIndex:()=>o.getActiveIndex()??-1,destroy:()=>o.destroy()}}const Xi=300;function eo(e,n){const[t,r]=g.useState(!1),o=g.useRef(null),s=g.useRef(0),l=g.useRef(-1),p=g.useRef(null),u=g.useRef(n);g.useEffect(()=>{u.current=n},[n]);const a=g.useCallback(()=>{p.current!==null&&(clearInterval(p.current),p.current=null)},[]),c=g.useRef(0),h=g.useCallback(()=>{var f;c.current+=1,a(),(f=o.current)==null||f.destroy(),o.current=null,r(!1)},[a]),d=g.useCallback(()=>{if(!e||e.steps.length===0||o.current)return;const f=c.current+=1;Ki(e.steps,{onIndexChange:_=>{s.current=_},onDestroyed:()=>{a(),o.current=null,r(!1)}}).then(_=>{if(f!==c.current){_.destroy();return}o.current=_,r(!0),p.current=setInterval(()=>{const y=s.current;if(y===l.current)return;const b=e.steps[y];b&&Ji(b.waitFor,u.current())&&(l.current=y,_.moveNext())},Xi)})},[e,a]);return g.useEffect(()=>h,[h]),{active:t,start:d,stop:h}}const Ce=650,vn="__agent__",mt="__model__",pt="__template__:",no=g.lazy(async()=>{await Promise.all([me(()=>Promise.resolve({}),__vite__mapDeps([1])),me(()=>Promise.resolve({}),__vite__mapDeps([2])),me(()=>Promise.resolve({}),__vite__mapDeps([3]))]);const{RuntimeDiagram:e}=await me(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-DTnJz5cT.js");return{RuntimeDiagram:n}},__vite__mapDeps([4,5,6]));return{default:e}}),Mn=g.lazy(()=>me(()=>import("./MonacoEditor-c74Zyd9P.js").then(e=>e.M),__vite__mapDeps([7,5,8]))),to=g.lazy(()=>me(()=>import("./vendor-modeler-DdWqT7hy.js"),__vite__mapDeps([9,5,6,10,11,12,13,1,2,3]))),ut=g.lazy(async()=>{const{FormRenderer:e}=await me(async()=>{const{FormRenderer:n}=await import("./FormRenderer-B95GF3pU.js");return{FormRenderer:n}},__vite__mapDeps([14,5,12,10,11,15]));return{default:e}});function ln(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function ro(e){const n=ln(e).replace(/\s+/g," ");return n.length>78?`${n.slice(0,78)}…`:n}function io({example:e,initialBrainKind:n,initialTourId:t}){var Ve,Rn,Fn,zn,On,Un,$n,Gn;const[r,o]=g.useState(e.bpmn),s=Ti(),[l,p]=g.useState(null);g.useEffect(()=>{n&&n!==s.kind&&s.setKind(n)},[]),g.useEffect(()=>{Ci({brain:s.kind})},[s.kind]);const[u,a]=g.useState(()=>Object.fromEntries(e.handlers.map(v=>[v.elementId,v.source]))),[c,h]=g.useState(e.scriptedAgent??""),[d,f]=g.useState(()=>Xe(e.templates)),_=g.useMemo(()=>Fr(e,u,r,d),[e,u,r,d]),y=_.model,b=pi({bpmn:_.resolvedBpmn}),M=eo(e.tour,()=>b.snapshot);g.useEffect(()=>{var v;t&&((v=e.tour)==null?void 0:v.id)===t&&M.start()},[]);const k=y.startFormId?((Ve=e.forms)==null?void 0:Ve[y.startFormId])??null:null,[B,U]=g.useState(()=>({...e.seed,...k?Fi(k):{}})),[ie,le]=g.useState(y.agent?vn:((Rn=e.handlers[0])==null?void 0:Rn.elementId)??""),pe=g.useMemo(()=>{const v=(e.scenarios??[]).findIndex(x=>Object.entries(x.variables).every(([E,C])=>JSON.stringify(B[E])===JSON.stringify(C)));return v===-1?null:v},[e.scenarios,B]),[Ne,oe]=Bn("start",!!k),[Q,W]=g.useState(!1),[j,I]=g.useState(!1),[N,V]=g.useState(null),[ue,he]=g.useState([]),[Z,ge]=g.useState({}),ze=g.useMemo(()=>({...e.seed,...B,...wr(e.imageInput?l:null)}),[e.seed,e.imageInput,B,l]),[gn,je]=g.useState(!1),Le=g.useRef(null),[be,Oe]=g.useState({}),[bn,_n]=g.useState(!1),Se=g.useRef(null),_e=g.useRef(!1),J=g.useRef(0),fn=g.useRef(0),qe=g.useRef({current:void 0}),Ue=g.useRef({}),Ee=g.useRef({}),ee=g.useMemo(()=>{const v=new Map;for(const x of y.processes){for(const E of x.tasks)v.set(E.elementId,E.label);for(const E of x.agents){v.set(E.elementId,E.label);for(const C of E.tools)v.set(C.elementId,C.label)}for(const E of x.userTasks)v.set(E.elementId,E.label)}return x=>v.get(x)??x},[y]),L=g.useCallback(v=>{he(x=>{if(v.key){const E=x.findIndex(C=>C.key===v.key);if(E>=0){const C=[...x];return C[E]={...C[E],...v},C}}return[...x,{...v,id:fn.current++}].slice(-80)})},[]),Me=g.useMemo(()=>{var v;return((v=b.snapshot)==null?void 0:v.userTasks.find(x=>x.state==="Created"))??null},[b.snapshot]),xe=g.useMemo(()=>{const v=y.processes.flatMap(E=>E.tasks),x=new Map;for(const E of e.handlers){if(!E.manualControl)continue;const C=v.find(P=>P.elementId===E.elementId);C&&x.set(C.jobType,{...E.manualControl,elementId:E.elementId})}return x},[e.handlers,y]),ke=g.useMemo(()=>{if(!b.snapshot)return null;for(const v of b.snapshot.jobs){const x=xe.get(v.jobType);if(x&&v.state==="Created")return{job:v,control:x}}return null},[b.snapshot,xe]),en=g.useMemo(()=>{if(!y.agent||!b.snapshot)return[];const v=new Map(b.snapshot.elementStats.map(x=>[x.elementId,x.completed]));return y.agent.tools.filter(x=>(v.get(x.elementId)??0)===0)},[y.agent,b.snapshot]),fe=Me?y.userTasks.find(v=>v.elementId===Me.elementId):void 0,Pe=fe!=null&&fe.formId?((Fn=e.forms)==null?void 0:Fn[fe.formId])??null:null,$e=g.useCallback(async(v,x,E,C)=>{var ce,ne,ye;let P=E,we=0;for(;J.current===C&&P&&P.completedInstances<1&&we++<80;){const $=await b.stepWorkers(v,{agents:x});if(J.current!==C)return P;P=($==null?void 0:$.snapshot)??P;const te=(ce=P.instances[0])==null?void 0:ce.variables;if(te&&ge({...te}),P.userTasks.some(G=>G.state==="Created")){L({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!$){L({kind:"error",text:"▶ run stopped — no dispatch round was returned"});break}if($.handled===0){const G=P.messageSubscriptions[0];if($.reason==="messages"&&G){if(L({kind:"step",text:`⏳ parked on a message catch event — waiting for "${G.messageName}"`,elementId:G.elementId}),await new Promise(K=>setTimeout(K,Ce)),J.current!==C)return P;L({kind:"vars",text:`📨 correlating message "${G.messageName}" (key: ${G.correlationKey})`,elementId:G.elementId});const O=b.correlateMessage(G.messageName,G.correlationKey,"{}");if(O){P=O;const K=(ne=P.instances[0])==null?void 0:ne.variables;K&&ge({...K}),await new Promise(ve=>setTimeout(ve,Ce));continue}L({kind:"error",text:`▶ run stopped — correlating "${G.messageName}" (key: ${G.correlationKey}) failed`,elementId:G.elementId})}if($.reason==="signals"&&P.signalSubscriptions.length>0){const O=P.signalSubscriptions[0],K=P.signalSubscriptions.length;if(L({kind:"step",text:`⏳ parked on ${K} open signal subscription${K===1?"":"s"} — waiting for "${O.signalName}"`,elementId:O.elementId}),await new Promise(Ye=>setTimeout(Ye,Ce)),J.current!==C)return P;const ve=b.broadcastSignal(O.signalName,"{}");if(ve){P=ve,L({kind:"vars",text:`📡 broadcasting signal "${O.signalName}" — every waiting subscription unblocks`,elementId:O.elementId});const Ye=(ye=P.instances[0])==null?void 0:ye.variables;Ye&&ge({...Ye}),await new Promise(Vt=>setTimeout(Vt,Ce));continue}L({kind:"error",text:`▶ run stopped — broadcasting signal "${O.signalName}" failed`,elementId:O.elementId})}if($.reason==="timers"){const O=P.timers.reduce((K,ve)=>Math.min(K,ve.dueInMs),1/0);if(Number.isFinite(O)){if(L({kind:"step",text:`⏳ parked on a timer — ${(Math.max(O,0)/1e3).toFixed(1)}s left on the clock`}),await new Promise(ve=>setTimeout(ve,Ce)),J.current!==C)return P;const K=b.advanceTime(Math.max(O,0)+1);if(K){P=K,L({kind:"step",text:"🕐 the clock advanced — timer fired"}),await new Promise(ve=>setTimeout(ve,Ce));continue}}}break}await new Promise(G=>setTimeout(G,Ce))}return J.current!==C||(P&&P.completedInstances>=1?L({kind:"done",text:"✅ process instance completed"}):P&&P.incidentElementIds.length>0&&L({kind:"error",text:"A job failed — incident on the diagram"})),P},[b,L]),nn=g.useCallback(async v=>{var P,we,ce;if(!ke||_e.current)return;const{job:x,control:E}=ke,C=++J.current;_e.current=!0,W(!0);try{let ne,ye;if(v==="complete")ne=b.completeJobManually(x.jobType,"{}"),ye="  ↳ completed normally";else if(E.action.kind==="timer"){const $=((we=(P=b.snapshot)==null?void 0:P.timers[0])==null?void 0:we.dueInMs)??0;ne=b.advanceTime(Math.max($,0)+1),ye="  ↳ advanced the clock — timer fired"}else{const{errorCode:$,message:te}=E.action;ne=b.throwJobError(x.jobType,$,te),ye=`  ↳ threw BPMN error ${$}: ${te}`}if(ne){L({kind:"vars",text:ye,elementId:x.elementId});const $=(ce=ne.instances[0])==null?void 0:ce.variables;$&&ge({...$}),await new Promise(te=>setTimeout(te,Ce)),await $e(Ue.current,Ee.current,ne,C)}else L({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:x.elementId})}finally{J.current===C&&(_e.current=!1,W(!1))}},[ke,b,L,$e]),Ge=g.useCallback(async()=>{var $;let v=null;try{y.agent&&c.trim()&&(v=Ir(c))}catch(te){return V(te instanceof Error?te.message:String(te)),null}qe.current={current:void 0};let x;if(e.imageInput){const te=s.vision;x={read:te??ki(e.scriptedVision).read,live:!!te,resolve:O=>b.getRunImage(O)}}const E=Sr(y,_.handlers,L,qe.current,x);for(const te of xe.keys())delete E[te];const C={};if(y.agents.length>0){if(s.kind!=="scripted"&&s.chat){const G=new Map;for(const O of y.agents)G.set(O.jobType,[...G.get(O.jobType)??[],O]);for(const[O,K]of G)C[O]=qr(K,s.chat,L,{turnRef:qe.current,requiredTools:e.requiredTools})}else if(v&&y.agent){const G=y.agent.elementId;C[y.agent.jobType]=async O=>{if(O.elementId!==G)throw new Error(`No scripted agent handler for "${O.elementId}" — only "${G}" (the primary process's first agent host) is driven by the scripted brain. Use a live brain to exercise more than one host.`);const K=await v(O),ve=(K.activateElements??[]).map(Ye=>Ye.elementId).join(", ");return L({kind:"agent",text:K.completionConditionFulfilled?"🤖 scripted agent: done":`🤖 scripted agent: calling ${ve||"(nothing)"}`}),K}}}he([]),Oe({});const P=ze;ge(P),Ue.current=E,Ee.current=C;const we=b.redeploy(r),ce=(we==null?void 0:we[0])??y.processId;L({kind:"start",text:`Starting "${ce}" — ${y.agent?s.kind==="scripted"||!s.chat?"scripted brain":`live brain (${s.modelInUse??s.kind})`:"no agent in this model"}`});const ne=b.createInstance(ce,JSON.stringify(P)),ye=($=ne==null?void 0:ne.instances[0])==null?void 0:$.key;return e.imageInput&&l&&ye&&b.setRunImage(ye,l),{workers:E,agents:C,snap:ne}},[b,e,_,r,c,B,l,ze,y,s,L,xe]),Ie=!!b.snapshot&&b.snapshot.completedInstances<1,Je=!Ie&&!!k&&!gn,wn=g.useCallback(async()=>{if(b.phase!=="ready"||_e.current||j||_.hasErrors)return;_e.current=!0,W(!0);const v=++J.current;try{let x=Ue.current,E=Ee.current,C=b.snapshot;if(!Ie){if(Le.current&&!Le.current.validate())return;V(null);const P=await Ge();if(!P)return;x=P.workers,E=P.agents,C=P.snap,await new Promise(we=>setTimeout(we,Ce))}await $e(x,E,C,v)}finally{J.current===v&&(_e.current=!1,W(!1))}},[b,j,_.hasErrors,Ie,Ge,$e]),T=g.useCallback(async()=>{var x;if(b.phase!=="ready"||_e.current||j||_.hasErrors)return;_e.current=!0,I(!0);const v=++J.current;try{let E=Ue.current,C=Ee.current,P=b.snapshot;if(!Ie){if(Le.current&&!Le.current.validate())return;V(null);const $=await Ge();if(!$)return;E=$.workers,C=$.agents,P=$.snap}if(!P||P.completedInstances>=1)return;const we=P.takenSequenceFlows.length,ce=await b.stepWorkers(E,{agents:C});if(!ce){L({kind:"error",text:"⏭ step failed — no dispatch round was returned"});return}const ne=(x=ce.snapshot.instances[0])==null?void 0:x.variables;ne&&ge({...ne});const ye=ui(ce.snapshot.takenSequenceFlows,we);L(hi(ce,ye,ee,xe))}finally{J.current===v&&(_e.current=!1,I(!1))}},[b,j,_.hasErrors,Ie,Ge,L,ee,xe]),Y=g.useCallback(()=>{_e.current=!1,J.current++,W(!1),I(!1),b.reset(),he([]),ge({})},[b]),D=g.useCallback(()=>{var E;if(!Me||Se.current&&!Se.current.validate())return;const v=b.completeUserTask(Me.key,JSON.stringify(be));L({kind:"human",text:`👤 ${ln(be)}`});const x=(E=v==null?void 0:v.instances[0])==null?void 0:E.variables;ge(C=>({...C,...be,...x??{}})),v&&v.completedInstances>=1&&L({kind:"done",text:"✅ process instance completed"})},[Me,be,b,L]),H=g.useMemo(()=>{var v,x;return b.phase==="loading"?i.jsx(re,{variant:"neutral",children:"Booting engine…"}):b.phase==="error"?i.jsx(re,{variant:"danger",children:"Engine error"}):Q?i.jsx(re,{variant:"info",children:"Running…"}):j?i.jsx(re,{variant:"info",children:"Stepping…"}):(((v=b.snapshot)==null?void 0:v.incidentElementIds.length)??0)>0?i.jsx(re,{variant:"danger",children:"Incident"}):Me?i.jsx(re,{variant:"warning",children:"Waiting for a human"}):(((x=b.snapshot)==null?void 0:x.completedInstances)??0)>=1?i.jsx(re,{variant:"success",children:"Completed"}):b.snapshot?i.jsx(re,{variant:"warning",children:"Paused"}):i.jsx(re,{variant:"neutral",children:"Ready"})},[b.phase,b.snapshot,Q,j,Me]),Ae=g.useMemo(()=>e.blurb.split(/\n\s*\n/).map(v=>v.trim()).filter(Boolean),[e.blurb]);return i.jsxs("div",{className:"runner",children:[i.jsxs("section",{className:"intro",children:[i.jsx("h1",{children:e.title}),Ae.map(v=>i.jsx("p",{children:v},v))]}),e.imageInput&&i.jsx(Ri,{imageInput:e.imageInput,value:l,onSelect:p,disabled:Q}),i.jsxs("div",{className:"scenario",children:[i.jsx("span",{className:"scenario-label",id:"scenario-label",children:e.scenariosLabel??"Example input"}),e.scenarios&&i.jsx("div",{className:"scenario-toggle",role:"group","aria-labelledby":"scenario-label",children:e.scenarios.map((v,x)=>i.jsx(q,{size:"sm",variant:x===pe?"default":"secondary","aria-pressed":x===pe,disabled:Q,onClick:()=>U(E=>({...E,...v.variables})),children:v.label},v.label))}),i.jsxs("button",{type:"button",className:"scenario-input-button",onClick:()=>oe(!Ne),"aria-expanded":Ne,"aria-controls":"start-input-editor",title:"Edit the starting payload",children:[i.jsx("span",{className:"scenario-edit-icon","aria-hidden":!0,children:"✎"})," ","input: ",i.jsx("code",{children:ro(B)})]}),Je&&i.jsx("span",{className:"scenario-hint",children:"Fill in the input to enable Run"})]}),i.jsxs("div",{className:"inline-input-editor",id:"start-input-editor",hidden:!Ne,children:[i.jsxs("div",{className:"inline-input-editor-head",children:[i.jsxs("div",{children:[i.jsx("div",{className:"inline-input-editor-title",children:y.startFormId?"Start form":"Start payload"}),i.jsx("div",{className:"inline-input-editor-copy",children:y.startFormId?`Rendered from the model's start form "${y.startFormId}".`:"The variables the instance starts with."})]}),i.jsx(q,{size:"sm",variant:"secondary",onClick:()=>oe(!1),children:"Done"})]}),k?i.jsx(g.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(ut,{ref:Le,schema:k,values:B,onChange:(v,x)=>U(E=>({...E,[v]:x})),disabled:Q,onValidityChange:je})}):i.jsx("pre",{className:"vars",children:ln(B,2)})]}),(y.agent||e.imageInput)&&i.jsx(Fe,{sectionId:"brain",className:"brain-card","data-tour":Te.brainPanel,title:"Agent brain",description:y.agent?`What drives “${y.agent.label}”. The model recommends; the process governs.`:"What reads the image. The model recommends; the process governs.",children:i.jsx(Di,{brain:s,showText:!!y.agent,showVision:!!e.imageInput})}),i.jsxs("div",{className:"controls",children:[i.jsx(q,{"data-tour":Te.runButton,onClick:()=>void wn(),disabled:b.phase!=="ready"||Q||j||_.hasErrors||Je,children:"▶ Run"}),i.jsx(q,{variant:"secondary",onClick:()=>void T(),disabled:b.phase!=="ready"||Q||j||_.hasErrors||Je||(((zn=b.snapshot)==null?void 0:zn.completedInstances)??0)>=1,children:"⏭ Step"}),i.jsx(q,{variant:"secondary",onClick:Y,disabled:b.phase!=="ready"||j,children:"↺ Reset"}),e.tour&&i.jsx(q,{variant:"secondary",onClick:M.start,disabled:M.active,children:M.active?"Touring…":`🧭 ${e.tour.label}`}),H]}),b.phase==="error"&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"Engine error"}),i.jsx(de,{children:b.error})]}),N&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"Code didn't compile"}),i.jsx(de,{children:N})]}),_.hasErrors&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"Run is disabled — the diagram has unresolved references"}),i.jsx(de,{children:i.jsx("ul",{className:"diagnostics",children:_.diagnostics.filter(v=>v.severity==="error").map((v,x)=>i.jsx("li",{children:v.message},x))})})]}),!_.hasErrors&&_.diagnostics.length>0&&i.jsxs(ae,{children:[i.jsx(se,{children:"Heads up"}),i.jsx(de,{children:i.jsx("ul",{className:"diagnostics",children:_.diagnostics.map((v,x)=>i.jsx("li",{children:v.message},x))})})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"col",children:[i.jsx(Fe,{sectionId:"process","data-tour":Te.diagram,title:"Process",description:`${y.processName} — live token (green), incidents (red).`,children:i.jsx(g.Suspense,{fallback:i.jsx("div",{className:"diagram-fallback",children:b.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:i.jsx(no,{xml:_.resolvedBpmn,activeIds:((On=b.snapshot)==null?void 0:On.activeElementIds)??[],incidentIds:((Un=b.snapshot)==null?void 0:Un.incidentElementIds)??[],className:"diagram"})})}),Me&&i.jsxs(Fe,{sectionId:"human-task",title:(fe==null?void 0:fe.label)??"Human task",description:Pe?`Rendered from the model's form "${fe==null?void 0:fe.formId}".`:"This task has no linked form — complete it with no variables.",children:[en.length>0&&i.jsxs(ae,{variant:"destructive",children:[i.jsx(se,{children:"The agent didn't finish its checks"}),i.jsxs(de,{children:["It completed without running"," ",en.map(v=>v.label||v.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),Pe&&i.jsx(g.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(ut,{ref:Se,schema:Pe,values:be,onChange:(v,x)=>Oe(E=>({...E,[v]:x})),context:Z,onValidityChange:_n})}),i.jsx(q,{onClick:D,disabled:!!Pe&&!bn,children:"Complete task"})]}),ke&&i.jsx(Fe,{sectionId:"manual-job",title:ke.control.label,description:"This job is held here on purpose — pick how it resolves.",children:i.jsxs("div",{className:"controls",children:[i.jsx(q,{onClick:()=>void nn("complete"),disabled:Q||j,children:ke.control.completeLabel??"✅ Complete normally"}),i.jsx(q,{variant:"secondary",onClick:()=>void nn("action"),disabled:Q||j,children:ke.control.action.label})]})})]}),i.jsx("div",{className:"col",children:i.jsx(Yi,{log:ue,elementStats:($n=b.snapshot)==null?void 0:$n.elementStats,incidents:(Gn=b.snapshot)==null?void 0:Gn.incidents,labelFor:ee,variables:i.jsxs("div",{className:"vars-block","data-tour":Te.variablesPanel,children:[i.jsx("div",{className:"vars-head",children:"Instance variables"}),i.jsx("pre",{className:"vars",children:ln(Object.keys(Z).length>0?Z:ze,2)})]})})})]}),i.jsxs("div",{className:"runner-secondary",children:[i.jsx(Fe,{sectionId:"code",className:"editors","data-tour":Te.codePanel,defaultOpen:!1,title:"Code",description:"One handler per BPMN element, plus a model tab holding the editable diagram — select an element there to edit its properties. Return variables to merge, or throw to fail the job.",children:i.jsx(g.Suspense,{fallback:i.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:i.jsxs(er,{value:ie,onValueChange:le,children:[i.jsxs(nr,{children:[i.jsx(tn,{value:mt,children:"model"}),y.agent&&i.jsx(tn,{value:vn,children:"agent (scripted)"}),e.handlers.map(v=>{var x;return i.jsx(tn,{value:v.elementId,children:((x=y.tasks.find(E=>E.elementId===v.elementId))==null?void 0:x.label)??v.elementId},v.elementId)}),Object.keys(d).map(v=>i.jsx(tn,{value:pt+v,children:v},v))]}),i.jsxs(rn,{value:mt,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:"Model"}),i.jsx("code",{children:"click an element to edit its properties on the right — Run re-reads whatever you leave here"}),i.jsx(q,{variant:"secondary",size:"sm",onClick:()=>o(e.bpmn),disabled:r===e.bpmn,children:"Revert to original"})]}),i.jsx(to,{value:r,onChange:o})]}),y.agent&&i.jsxs(rn,{value:vn,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:y.agent.label}),i.jsx("code",{children:s.kind==="scripted"||!s.chat?"in use":"unused — a live brain is connected"})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(Mn,{height:"360px",defaultLanguage:"javascript",value:c,onChange:v=>h(v??""),options:xn})})]}),e.handlers.map(v=>{var x;return i.jsxs(rn,{value:v.elementId,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:((x=y.tasks.find(E=>E.elementId===v.elementId))==null?void 0:x.label)??v.elementId}),i.jsx("code",{children:v.standsInFor??v.elementId})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(Mn,{height:"360px",defaultLanguage:"javascript",value:u[v.elementId],onChange:E=>a(C=>({...C,[v.elementId]:E??""})),options:xn})})]},v.elementId)}),Object.keys(d).map(v=>i.jsxs(rn,{value:pt+v,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:v}),i.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+v+"}}"]})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(Mn,{height:"360px",defaultLanguage:"markdown",value:d[v],onChange:x=>f(E=>Xe(E,{[v]:x??""})),options:xn})})]},v))]})})}),y.agent&&i.jsx(Fe,{sectionId:"tools",defaultOpen:!1,title:"Tools, as the model sees them",description:i.jsxs(i.Fragment,{children:["Read from the diagram — element name, documentation, and every",i.jsx("code",{children:" fromAi(…)"})," argument."]}),children:i.jsx("ul",{className:"tool-list",children:y.agent.tools.map(v=>i.jsxs("li",{children:[i.jsx("code",{children:v.elementId}),i.jsxs("span",{children:[" — ",v.documentation||v.label]}),v.args.length>0&&i.jsx("ul",{children:v.args.map(x=>i.jsxs("li",{children:[i.jsxs("code",{children:[x.name,": ",x.type]})," ","— ",x.description]},x.name))})]},v.elementId))})})]})]})}const xn={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},oo=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_learn_error_boundary" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:process id="learn_error_boundary" name="Error boundary event" isExecutable="true">\r
    <bpmn:startEvent id="StartEvent_1" name="Order received">\r
      <bpmn:outgoing>Flow_to_guarded</bpmn:outgoing>\r
    </bpmn:startEvent>\r
    <bpmn:serviceTask id="Activity_guarded" name="Charge payment (guarded)">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="charge-payment" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_to_guarded</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_unguarded</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <!--\r
      This boundary event is the whole point of the page: it attaches to\r
      Activity_guarded and catches only the BPMN error whose errorRef is\r
      Error_ChargeDeclined below. A job dispatched through this framework's\r
      normal drive loop can only complete or fail a job — there is no way for\r
      ordinary handler code to reach the engine's throwError command, the one\r
      that actually routes a token through this catch instead of raising an\r
      incident (see docs/engine-coverage.md). So "Charge payment (guarded)" is\r
      wired to a manualControl action in index.ts: the reader chooses, right\r
      when the job is reached, between completing it normally and firing the\r
      thrown error directly against the session.\r
    -->\r
    <bpmn:boundaryEvent id="Event_ChargeDeclined" name="Charge declined" attachedToRef="Activity_guarded">\r
      <bpmn:outgoing>Flow_caught</bpmn:outgoing>\r
      <bpmn:errorEventDefinition id="ErrorEventDefinition_ChargeDeclined" errorRef="Error_ChargeDeclined" />\r
    </bpmn:boundaryEvent>\r
    <bpmn:endEvent id="Event_Caught" name="Handled — order cancelled">\r
      <bpmn:incoming>Flow_caught</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <!--\r
      Activity_unguarded is deliberately identical in shape to Activity_guarded\r
      but has NO boundary event attached. It exists to demonstrate the failure\r
      mode this construct guards against: fire the same kind of thrown error\r
      here (via its own manualControl action in index.ts) and the engine has\r
      nothing to catch it with, so the job raises an incident instead of the\r
      token being rerouted. Compare the two outcomes side by side to see what\r
      forgetting the boundary event actually costs.\r
    -->\r
    <bpmn:serviceTask id="Activity_unguarded" name="Ship items (unguarded)">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="ship-items" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_to_unguarded</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_end</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:endEvent id="Event_Done" name="Order shipped">\r
      <bpmn:incoming>Flow_to_end</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_to_guarded" sourceRef="StartEvent_1" targetRef="Activity_guarded" />\r
    <bpmn:sequenceFlow id="Flow_to_unguarded" sourceRef="Activity_guarded" targetRef="Activity_unguarded" />\r
    <bpmn:sequenceFlow id="Flow_caught" sourceRef="Event_ChargeDeclined" targetRef="Event_Caught" />\r
    <bpmn:sequenceFlow id="Flow_to_end" sourceRef="Activity_unguarded" targetRef="Event_Done" />\r
  </bpmn:process>\r
  <bpmn:error id="Error_ChargeDeclined" name="Charge declined" errorCode="CHARGE_DECLINED" />\r
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="learn_error_boundary">\r
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\r
        <dc:Bounds x="182" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="160" y="255" width="80" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_guarded_di" bpmnElement="Activity_guarded">\r
        <dc:Bounds x="270" y="190" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_unguarded_di" bpmnElement="Activity_unguarded">\r
        <dc:Bounds x="430" y="190" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_Done_di" bpmnElement="Event_Done">\r
        <dc:Bounds x="592" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="570" y="255" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_ChargeDeclined_di" bpmnElement="Event_ChargeDeclined">\r
        <dc:Bounds x="322" y="252" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="299" y="295" width="82" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_Caught_di" bpmnElement="Event_Caught">\r
        <dc:Bounds x="322" y="372" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="277" y="415" width="126" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNEdge id="Flow_to_guarded_di" bpmnElement="Flow_to_guarded">\r
        <di:waypoint x="218" y="230" />\r
        <di:waypoint x="270" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_unguarded_di" bpmnElement="Flow_to_unguarded">\r
        <di:waypoint x="370" y="230" />\r
        <di:waypoint x="430" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_end_di" bpmnElement="Flow_to_end">\r
        <di:waypoint x="530" y="230" />\r
        <di:waypoint x="592" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_caught_di" bpmnElement="Flow_caught">\r
        <di:waypoint x="340" y="288" />\r
        <di:waypoint x="340" y="372" />\r
      </bpmndi:BPMNEdge>\r
    </bpmndi:BPMNPlane>\r
  </bpmndi:BPMNDiagram>\r
</bpmn:definitions>\r
`,ao=`async (job, { sleep }) => {
  // This job is held back manually (see index.ts's manualControl) rather
  // than dispatched here, so this body never runs on this page — both
  // choices bypass it. "Complete normally" completes the job directly with
  // {} (so no charged variable is set), and "Simulate: card declined"
  // throws a BPMN error on it, which is what routes the token through the
  // "Charge declined" boundary event below rather than just this handler
  // failing. This is the worker you would write for the task in a real
  // deployment, shown for reference.
  await sleep(400);

  return { charged: true };
}`,so=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above; this body
  // does not run either. Unlike Activity_guarded, this task has no boundary
  // event: firing its error action has nothing to catch it, so it becomes an
  // incident instead of a handled alternate path. Completing it normally
  // completes the job with {} — no trace line, no shipped/tracking variables
  // — and the token reaches "Order shipped".
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,lo={id:"learn-error-boundary",title:"Error boundary event",group:"learn-bpmn",blurb:["A boundary event attached to a task catches something that happens while the task is running and reroutes the token — here, a thrown BPMN error.",'Hit Run and the process stops at "Charge payment (guarded)" with a card under the diagram offering two buttons: press "Simulate: card declined" and watch the attached boundary event catch the error, skipping straight to "Handled — order cancelled".','Then Reset, complete that first job normally, and decline the second one on "Ship items (unguarded)" — this time it becomes an incident, because that task has no boundary event and the engine has nothing to reroute the token with.',`That's exactly what breaks if you forget the boundary event (or give it the wrong errorRef): a failure that should be a modelled alternate path becomes a stuck instance a human has to resolve by hand. Complete both jobs normally instead to see the unattended happy path all the way to "Order shipped".`].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/boundary-events/",bpmn:oo,seed:{},handlers:[{elementId:"Activity_guarded",standsInFor:"job worker — charge-payment",source:ao,manualControl:{label:"Charge payment (guarded)",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_unguarded",standsInFor:"job worker — ship-items",source:so,manualControl:{label:"Ship items (unguarded)",completeLabel:"✅ Ship it",action:{kind:"error",errorCode:"CARRIER_REJECTED",message:"The carrier rejected the shipment — nothing catches this.",label:"❌ Simulate: carrier rejected (becomes an incident)"}}}]},co=Object.freeze(Object.defineProperty({__proto__:null,default:lo},Symbol.toStringTag,{value:"Module"})),mo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,po=`async (job, { num, trace, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const orderTotal = num("orderTotal", 40);

  await sleep(300);

  // This is the variable the gateway's conditional sequence flow reads —
  // whatever this handler decides is what actually steers the token.
  const route = orderTotal >= 100 ? "express" : "standard";
  trace(\`order total $\${orderTotal} -> route: \${route}\`);

  // Whatever you return is merged onto the process instance.
  return { route };
}`,uo=`async (job, { trace, sleep }) => {
  trace("expedited courier picks up the order");
  await sleep(400);

  return { shipped: true, method: "express" };
}`,ho=`async (job, { trace, sleep }) => {
  trace("order queued for standard courier pickup");
  await sleep(400);

  return { shipped: true, method: "standard" };
}`,go={id:"learn-exclusive-gateway",title:"Exclusive gateway",group:"learn-bpmn",blurb:["An exclusive gateway is the fork in the road: exactly one of its outgoing sequence flows is taken, chosen by evaluating each flow's FEEL condition in declaration order, first match wins. A default flow (drawn with a slash through its start, not a diamond marker) has no condition and is the fallback taken when every conditional flow evaluates false — that's what makes an exclusive gateway safe to deploy without an explicit case for every value.",`Run this and watch 'Check order total' decide a route variable, then watch the gateway send the token down 'Express ship' when the order is large enough, or 'Standard ship' otherwise (the default flow). Try both from the Start panel on the right: it holds a "Small order" and a "Large order" button that swap the payload for you.`,"To see the conditions themselves, open the model tab in the Code panel and click either arrow leaving the gateway — the FEEL is under Condition. Get one wrong (or misspell the variable name) and the flow you meant to take is silently skipped in favour of whichever one does evaluate true, or the default if none do — no error, just the wrong branch."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/gateways/gateways/#exclusive-gateway",bpmn:mo,seed:{orderTotal:40},scenarios:[{label:"Small order — standard ship (default flow)",variables:{orderTotal:40}},{label:"Large order — express ship (conditional flow)",variables:{orderTotal:150}}],handlers:[{elementId:"Activity_check_order",standsInFor:"job worker — check-order-total",source:po},{elementId:"Activity_express_ship",standsInFor:"job worker — express-ship",source:uo},{elementId:"Activity_standard_ship",standsInFor:"job worker — standard-ship",source:ho}]},bo=Object.freeze(Object.defineProperty({__proto__:null,default:go},Symbol.toStringTag,{value:"Module"})),_o=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_learn_message_correlation" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:message id="Message_ShipmentConfirmed" name="shipment-confirmed">\r
    <bpmn:extensionElements>\r
      <zeebe:subscription correlationKey="=orderId" />\r
    </bpmn:extensionElements>\r
  </bpmn:message>\r
  <bpmn:process id="learn_message_correlation" name="Message catch event + correlation" isExecutable="true">\r
    <bpmn:startEvent id="StartEvent_1" name="Order placed">\r
      <bpmn:outgoing>Flow_to_wait</bpmn:outgoing>\r
    </bpmn:startEvent>\r
    <bpmn:intermediateCatchEvent id="Event_wait_for_shipment" name="Wait for shipment confirmed">\r
      <bpmn:incoming>Flow_to_wait</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_record</bpmn:outgoing>\r
      <bpmn:messageEventDefinition id="MessageEventDefinition_1" messageRef="Message_ShipmentConfirmed" />\r
    </bpmn:intermediateCatchEvent>\r
    <bpmn:serviceTask id="Activity_record" name="Record confirmation">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="record-confirmation" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_to_record</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_end</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:endEvent id="Event_done" name="Order fulfilled">\r
      <bpmn:incoming>Flow_to_end</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_to_wait" sourceRef="StartEvent_1" targetRef="Event_wait_for_shipment" />\r
    <bpmn:sequenceFlow id="Flow_to_record" sourceRef="Event_wait_for_shipment" targetRef="Activity_record" />\r
    <bpmn:sequenceFlow id="Flow_to_end" sourceRef="Activity_record" targetRef="Event_done" />\r
  </bpmn:process>\r
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="learn_message_correlation">\r
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\r
        <dc:Bounds x="182" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="160" y="255" width="80" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_wait_for_shipment_di" bpmnElement="Event_wait_for_shipment">\r
        <dc:Bounds x="270" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="248" y="255" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_record_di" bpmnElement="Activity_record">\r
        <dc:Bounds x="380" y="190" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_done_di" bpmnElement="Event_done">\r
        <dc:Bounds x="542" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="520" y="255" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNEdge id="Flow_to_wait_di" bpmnElement="Flow_to_wait">\r
        <di:waypoint x="218" y="230" />\r
        <di:waypoint x="270" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_record_di" bpmnElement="Flow_to_record">\r
        <di:waypoint x="306" y="230" />\r
        <di:waypoint x="380" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_end_di" bpmnElement="Flow_to_end">\r
        <di:waypoint x="480" y="230" />\r
        <di:waypoint x="542" y="230" />\r
      </bpmndi:BPMNEdge>\r
    </bpmndi:BPMNPlane>\r
  </bpmndi:BPMNDiagram>\r
</bpmn:definitions>\r
`,fo=`async (job, { text, trace }) => {
  const orderId = text("orderId", "unknown-order");

  trace("shipment confirmed for " + orderId + " — recording it");

  return { shipmentRecorded: true };
}`,wo={id:"learn-message-correlation",title:"Message catch event + correlation key",group:"learn-bpmn",blurb:[`A message intermediate catch event pauses the token until a message with a matching name and correlation key is published — the BPMN analogue of "wait for this specific order's shipment to be confirmed", not just "wait for any shipment-confirmed message".`,"Run this and watch the token park on the catch event; there's no external broker in the browser, so the page correlates the message itself once the wait is reached, echoing back the exact correlationKey (`=orderId`) the subscription resolved to — the Activity panel logs the wait and the correlation as separate lines — then the token resumes into Record confirmation and on to the end event.",'To see where that key comes from: in the Code panel, open the model tab, click "Wait for shipment confirmed", and expand Message in the properties panel on the right. Subscription correlation key holds `orderId` (the `=` beside the box marks it as a FEEL expression), and Name holds `shipment-confirmed` — those two together are what a publisher has to match. Edit them freely; because this page publishes the key the subscription itself resolved, the run stays self-consistent either way.','In a real deployment, where a separate system does the publishing, pointing that expression at a variable the instance never sets leaves the catch event waiting forever, and omitting zeebe:subscription altogether is rejected at deploy time with "has no zeebe:subscription correlationKey" — docs/engine-coverage.md records both.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/message-events/",bpmn:_o,seed:{orderId:"ORD-42"},handlers:[{elementId:"Activity_record",standsInFor:"job worker — record-confirmation",source:fo}]},yo=Object.freeze(Object.defineProperty({__proto__:null,default:wo},Symbol.toStringTag,{value:"Module"})),vo=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_learn_multi_instance_parallel" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:process id="learn_multi_instance_parallel" name="Parallel multi-instance" isExecutable="true">\r
    <bpmn:startEvent id="StartEvent_1" name="Items received">\r
      <bpmn:outgoing>Flow_to_process</bpmn:outgoing>\r
    </bpmn:startEvent>\r
    <bpmn:serviceTask id="Activity_process" name="Process item">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="process-item" />\r
      </bpmn:extensionElements>\r
      <bpmn:multiInstanceLoopCharacteristics>\r
        <bpmn:extensionElements>\r
          <zeebe:loopCharacteristics inputCollection="=items" inputElement="item" outputCollection="results" outputElement="=result" />\r
        </bpmn:extensionElements>\r
      </bpmn:multiInstanceLoopCharacteristics>\r
      <bpmn:incoming>Flow_to_process</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_end</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:endEvent id="Event_done" name="All items processed">\r
      <bpmn:incoming>Flow_to_end</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_to_process" sourceRef="StartEvent_1" targetRef="Activity_process" />\r
    <bpmn:sequenceFlow id="Flow_to_end" sourceRef="Activity_process" targetRef="Event_done" />\r
  </bpmn:process>\r
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="learn_multi_instance_parallel">\r
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\r
        <dc:Bounds x="182" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="160" y="255" width="80" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_process_di" bpmnElement="Activity_process">\r
        <dc:Bounds x="270" y="190" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_done_di" bpmnElement="Event_done">\r
        <dc:Bounds x="432" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="410" y="255" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNEdge id="Flow_to_process_di" bpmnElement="Flow_to_process">\r
        <di:waypoint x="218" y="230" />\r
        <di:waypoint x="270" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_end_di" bpmnElement="Flow_to_end">\r
        <di:waypoint x="370" y="230" />\r
        <di:waypoint x="432" y="230" />\r
      </bpmndi:BPMNEdge>\r
    </bpmndi:BPMNPlane>\r
  </bpmndi:BPMNDiagram>\r
</bpmn:definitions>\r
`,Mo=`async (job, { text, sleep, trace }) => {
  // Each parallel instance gets its own 'item' from the input collection.
  const item = text("item", "widget");

  trace("processing " + item);
  await sleep(400);

  // Whatever you return is merged onto this instance's scope, then collected
  // into the process-level 'results' array via outputElement/outputCollection.
  return { result: item.toUpperCase() + "-DONE" };
}`,xo={id:"learn-multi-instance-parallel",title:"Parallel multi-instance",group:"learn-bpmn",blurb:["A multi-instance activity runs its task once per element of a collection, spawning that many job instances of the same element in parallel, and only lets the token move on once every one of them completes.",`Run this and watch three 'Process item' jobs activate together for apple, banana, cherry, and complete (in any order) before the process reaches its end event. Nothing about the diagram says "three" — that comes from the collection, so use the buttons in the Start panel on the right to swap between one, three, and six items and hit Run again; the Activity panel logs one 'Process item' line per element, so the fan-out is right there to count.`,'The property tying the two together is in the Code panel: open the model tab, click "Process item", and expand Multi-instance in the properties panel on the right — Input collection holds `items`, the FEEL expression naming the variable to fan out over. Drop it entirely and the activity silently degenerates to a single ordinary instance, with no error to tell you it happened. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/multi-instance/",bpmn:vo,seed:{items:["apple","banana","cherry"]},scenarios:[{label:"One item — a single instance",variables:{items:["apple"]}},{label:"Three items — fans out to three",variables:{items:["apple","banana","cherry"]}},{label:"Six items — fans out to six",variables:{items:["apple","banana","cherry","damson","elderberry","fig"]}}],handlers:[{elementId:"Activity_process",standsInFor:"job worker — process-item",source:Mo}]},No=Object.freeze(Object.defineProperty({__proto__:null,default:xo},Symbol.toStringTag,{value:"Module"})),Eo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ko=`async (job, { text, sleep, trace }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "widget");

  trace("packing " + item);
  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { packed: true };
}`,Io=`async (job, { sleep, trace }) => {
  trace("handing over to the courier");
  await sleep(400);

  return { dispatched: true, tracking: "SVC" + Math.floor(Math.random() * 1e9) };
}`,To={id:"learn-service-task",title:"Service task + sequence flow",group:"learn-bpmn",blurb:["A service task is a unit of work a worker (not a human) performs; a sequence flow is the arrow that hands the token from one to the next once its task completes.","Run this and watch each task activate, run its handler, and complete in order — Prepare package, then Dispatch courier — before the process reaches its end event.",`The link between the two halves is the job type: in the Code panel, open the model tab, click "Prepare package", and expand Task definition in the properties panel on the right — Job type is the name a worker has to subscribe to in order to be handed this task's work.`,"(This page wires its own handlers up from whatever the model declares, so renaming it here keeps working; on a real cluster the worker is a separate process started with a job type of its own, and a mismatch means nobody ever activates the job, so the run stalls forever.)"].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/service-tasks/",bpmn:Eo,seed:{item:"camunda-t-shirt"},handlers:[{elementId:"Activity_prepare",standsInFor:"job worker — prepare-package",source:ko},{elementId:"Activity_dispatch",standsInFor:"job worker — dispatch-courier",source:Io}]},jo=Object.freeze(Object.defineProperty({__proto__:null,default:To},Symbol.toStringTag,{value:"Module"})),So=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_learn_signal_broadcast" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:signal id="Signal_AllClearOps" name="all-clear" />\r
  <bpmn:signal id="Signal_AllClearFloor" name="all-clear" />\r
  <bpmn:process id="learn_signal_broadcast" name="Signal intermediate catch event + broadcast" isExecutable="true">\r
    <bpmn:startEvent id="StartEvent_1" name="Shift begins">\r
      <bpmn:outgoing>Flow_to_fork</bpmn:outgoing>\r
    </bpmn:startEvent>\r
    <bpmn:parallelGateway id="Gateway_fork" name="Both teams stand by">\r
      <bpmn:incoming>Flow_to_fork</bpmn:incoming>\r
      <bpmn:outgoing>Flow_fork_ops</bpmn:outgoing>\r
      <bpmn:outgoing>Flow_fork_floor</bpmn:outgoing>\r
    </bpmn:parallelGateway>\r
    <bpmn:intermediateCatchEvent id="Event_wait_ops" name="Ops waits for all-clear">\r
      <bpmn:incoming>Flow_fork_ops</bpmn:incoming>\r
      <bpmn:outgoing>Flow_ops_resume</bpmn:outgoing>\r
      <bpmn:signalEventDefinition id="SignalEventDefinition_ops" signalRef="Signal_AllClearOps" />\r
    </bpmn:intermediateCatchEvent>\r
    <bpmn:intermediateCatchEvent id="Event_wait_floor" name="Floor waits for all-clear">\r
      <bpmn:incoming>Flow_fork_floor</bpmn:incoming>\r
      <bpmn:outgoing>Flow_floor_reopen</bpmn:outgoing>\r
      <bpmn:signalEventDefinition id="SignalEventDefinition_floor" signalRef="Signal_AllClearFloor" />\r
    </bpmn:intermediateCatchEvent>\r
    <bpmn:serviceTask id="Activity_resume" name="Resume operations">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="resume-operations" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_ops_resume</bpmn:incoming>\r
      <bpmn:outgoing>Flow_ops_join</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:serviceTask id="Activity_reopen" name="Reopen the floor">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="reopen-floor" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_floor_reopen</bpmn:incoming>\r
      <bpmn:outgoing>Flow_floor_join</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:parallelGateway id="Gateway_join">\r
      <bpmn:incoming>Flow_ops_join</bpmn:incoming>\r
      <bpmn:incoming>Flow_floor_join</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_end</bpmn:outgoing>\r
    </bpmn:parallelGateway>\r
    <bpmn:endEvent id="Event_done" name="Back to work">\r
      <bpmn:incoming>Flow_to_end</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_to_fork" sourceRef="StartEvent_1" targetRef="Gateway_fork" />\r
    <bpmn:sequenceFlow id="Flow_fork_ops" sourceRef="Gateway_fork" targetRef="Event_wait_ops" />\r
    <bpmn:sequenceFlow id="Flow_fork_floor" sourceRef="Gateway_fork" targetRef="Event_wait_floor" />\r
    <bpmn:sequenceFlow id="Flow_ops_resume" sourceRef="Event_wait_ops" targetRef="Activity_resume" />\r
    <bpmn:sequenceFlow id="Flow_floor_reopen" sourceRef="Event_wait_floor" targetRef="Activity_reopen" />\r
    <bpmn:sequenceFlow id="Flow_ops_join" sourceRef="Activity_resume" targetRef="Gateway_join" />\r
    <bpmn:sequenceFlow id="Flow_floor_join" sourceRef="Activity_reopen" targetRef="Gateway_join" />\r
    <bpmn:sequenceFlow id="Flow_to_end" sourceRef="Gateway_join" targetRef="Event_done" />\r
  </bpmn:process>\r
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="learn_signal_broadcast">\r
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\r
        <dc:Bounds x="152" y="222" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="146" y="265" width="49" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Gateway_fork_di" bpmnElement="Gateway_fork">\r
        <dc:Bounds x="240" y="215" width="50" height="50" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="228" y="182" width="75" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_wait_ops_di" bpmnElement="Event_wait_ops">\r
        <dc:Bounds x="352" y="102" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="330" y="62" width="81" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_wait_floor_di" bpmnElement="Event_wait_floor">\r
        <dc:Bounds x="352" y="342" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="330" y="385" width="81" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_resume_di" bpmnElement="Activity_resume">\r
        <dc:Bounds x="450" y="80" width="100" height="80" />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_reopen_di" bpmnElement="Activity_reopen">\r
        <dc:Bounds x="450" y="320" width="100" height="80" />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Gateway_join_di" bpmnElement="Gateway_join">\r
        <dc:Bounds x="620" y="215" width="50" height="50" />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_done_di" bpmnElement="Event_done">\r
        <dc:Bounds x="732" y="222" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="723" y="265" width="55" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNEdge id="Flow_to_fork_di" bpmnElement="Flow_to_fork">\r
        <di:waypoint x="188" y="240" />\r
        <di:waypoint x="240" y="240" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_fork_ops_di" bpmnElement="Flow_fork_ops">\r
        <di:waypoint x="265" y="215" />\r
        <di:waypoint x="265" y="120" />\r
        <di:waypoint x="352" y="120" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_fork_floor_di" bpmnElement="Flow_fork_floor">\r
        <di:waypoint x="265" y="265" />\r
        <di:waypoint x="265" y="360" />\r
        <di:waypoint x="352" y="360" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_ops_resume_di" bpmnElement="Flow_ops_resume">\r
        <di:waypoint x="388" y="120" />\r
        <di:waypoint x="450" y="120" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_floor_reopen_di" bpmnElement="Flow_floor_reopen">\r
        <di:waypoint x="388" y="360" />\r
        <di:waypoint x="450" y="360" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_ops_join_di" bpmnElement="Flow_ops_join">\r
        <di:waypoint x="550" y="120" />\r
        <di:waypoint x="645" y="120" />\r
        <di:waypoint x="645" y="215" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_floor_join_di" bpmnElement="Flow_floor_join">\r
        <di:waypoint x="550" y="360" />\r
        <di:waypoint x="645" y="360" />\r
        <di:waypoint x="645" y="265" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_end_di" bpmnElement="Flow_to_end">\r
        <di:waypoint x="670" y="240" />\r
        <di:waypoint x="732" y="240" />\r
      </bpmndi:BPMNEdge>\r
    </bpmndi:BPMNPlane>\r
  </bpmndi:BPMNDiagram>\r
</bpmn:definitions>\r
`,Po=`async (job, { sleep, trace }) => {
  trace("all-clear received — resuming operations");
  await sleep(400);

  return { resumed: true };
}`,Ao=`async (job, { sleep, trace }) => {
  trace("same all-clear — reopening the floor");
  await sleep(400);

  return { floorReopened: true };
}`,Co={id:"learn-signal-broadcast",title:"Signal intermediate catch event + broadcast",group:"learn-bpmn",blurb:["A signal intermediate catch event parks the token until someone broadcasts a signal by name. Unlike a message, a signal isn't correlated to one waiting instance — broadcasting it unblocks every open subscription for that name at once.",`That's why this model forks: both "Ops waits for all-clear" and "Floor waits for all-clear" park on the same signal, and one broadcast releases the pair together, so 'Resume operations' and 'Reopen the floor' both run before the join lets the token reach the end event. Run it and watch both branches light up off a single broadcast — the Activity panel says "parked on 2 open signal subscriptions" before the one 📡 line that releases them both. A message could not do that, because a correlation key targets exactly one waiting subscription.`,"To see the name being matched: in the Code panel, open the model tab, click either catch event, and expand Signal in the properties panel on the right — Name holds `all-clear`. Each catch event owns its own signal definition, so editing the name there changes only that branch: do it on one of them and hit Run, and the panel now reports two broadcasts instead of one, because the branches no longer share a name and each needs its own. The count of broadcasts is exactly the count of distinct signal names being waited on."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/signal-events/signal-event/",bpmn:So,seed:{},handlers:[{elementId:"Activity_resume",standsInFor:"job worker — resume-operations",source:Po},{elementId:"Activity_reopen",standsInFor:"job worker — reopen-floor",source:Ao}]},Do=Object.freeze(Object.defineProperty({__proto__:null,default:Co},Symbol.toStringTag,{value:"Module"})),Bo=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_learn_timer_catch_event" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:process id="learn_timer_catch_event" name="Timer catch event" isExecutable="true">\r
    <bpmn:startEvent id="StartEvent_1" name="Reminder scheduled">\r
      <bpmn:outgoing>Flow_to_timer</bpmn:outgoing>\r
    </bpmn:startEvent>\r
    <bpmn:intermediateCatchEvent id="Event_timer" name="Wait 3 seconds">\r
      <bpmn:incoming>Flow_to_timer</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_task</bpmn:outgoing>\r
      <bpmn:timerEventDefinition id="TimerEventDefinition_1">\r
        <bpmn:timeDuration xsi:type="bpmn:tFormalExpression">PT3S</bpmn:timeDuration>\r
      </bpmn:timerEventDefinition>\r
    </bpmn:intermediateCatchEvent>\r
    <bpmn:serviceTask id="Activity_after_timer" name="Send the reminder">\r
      <bpmn:extensionElements>\r
        <zeebe:taskDefinition type="send-reminder" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_to_task</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_end</bpmn:outgoing>\r
    </bpmn:serviceTask>\r
    <bpmn:endEvent id="Event_done" name="Reminder sent">\r
      <bpmn:incoming>Flow_to_end</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_to_timer" sourceRef="StartEvent_1" targetRef="Event_timer" />\r
    <bpmn:sequenceFlow id="Flow_to_task" sourceRef="Event_timer" targetRef="Activity_after_timer" />\r
    <bpmn:sequenceFlow id="Flow_to_end" sourceRef="Activity_after_timer" targetRef="Event_done" />\r
  </bpmn:process>\r
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="learn_timer_catch_event">\r
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\r
        <dc:Bounds x="182" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="160" y="255" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_timer_di" bpmnElement="Event_timer">\r
        <dc:Bounds x="272" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="252" y="255" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_after_timer_di" bpmnElement="Activity_after_timer">\r
        <dc:Bounds x="370" y="190" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_done_di" bpmnElement="Event_done">\r
        <dc:Bounds x="532" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="510" y="255" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNEdge id="Flow_to_timer_di" bpmnElement="Flow_to_timer">\r
        <di:waypoint x="218" y="230" />\r
        <di:waypoint x="272" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_task_di" bpmnElement="Flow_to_task">\r
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
`,Lo=`async (job, { sleep, trace }) => {
  trace("the timer fired — sending the reminder now");
  await sleep(400);

  return { reminderSent: true };
}`,Ro={id:"learn-timer-catch-event",title:"Timer intermediate catch event",group:"learn-bpmn",blurb:["A timer catch event parks the token until a point in time — here, a fixed duration after the token arrives.","Run this and read the Activity panel: the token parks on the timer with nothing else happening ('parked on a timer — 3.0s left on the clock'), then the clock is fast-forwarded to the due time ('the clock advanced — timer fired') and the token resumes on its own: 'Send the reminder' activates, runs, and the process completes. Nothing needs to poll or push it forward; the engine itself wakes the instance when the timer's due time passes. (This page fast-forwards a virtual clock so the 3-second wait doesn't cost you 3 real seconds — a live deployment waits the actual PT3S.)",'To change the wait: in the Code panel, open the model tab, click "Wait 3 seconds", and expand Timer in the properties panel on the right — Type is Duration and Value holds the ISO-8601 duration, so PT30S or PT5M works the same way. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/timer-events/timer-event-type/",bpmn:Bo,seed:{},handlers:[{elementId:"Activity_after_timer",standsInFor:"job worker — send-reminder",source:Lo}]},Fo=Object.freeze(Object.defineProperty({__proto__:null,default:Ro},Symbol.toStringTag,{value:"Module"})),zo=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_learn_user_task_form" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:process id="learn_user_task_form" name="User task + form" isExecutable="true">\r
    <bpmn:startEvent id="StartEvent_1" name="Request submitted">\r
      <bpmn:outgoing>Flow_to_review</bpmn:outgoing>\r
    </bpmn:startEvent>\r
    <bpmn:userTask id="Activity_review" name="Review request">\r
      <bpmn:extensionElements>\r
        <zeebe:userTask />\r
        <zeebe:formDefinition formId="learn-user-task-form-review" />\r
      </bpmn:extensionElements>\r
      <bpmn:incoming>Flow_to_review</bpmn:incoming>\r
      <bpmn:outgoing>Flow_to_end</bpmn:outgoing>\r
    </bpmn:userTask>\r
    <bpmn:endEvent id="Event_done" name="Request reviewed">\r
      <bpmn:incoming>Flow_to_end</bpmn:incoming>\r
    </bpmn:endEvent>\r
    <bpmn:sequenceFlow id="Flow_to_review" sourceRef="StartEvent_1" targetRef="Activity_review" />\r
    <bpmn:sequenceFlow id="Flow_to_end" sourceRef="Activity_review" targetRef="Event_done" />\r
  </bpmn:process>\r
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\r
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="learn_user_task_form">\r
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">\r
        <dc:Bounds x="182" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="160" y="255" width="80" height="14" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Activity_review_di" bpmnElement="Activity_review">\r
        <dc:Bounds x="270" y="190" width="100" height="80" />\r
        <bpmndi:BPMNLabel />\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNShape id="Event_done_di" bpmnElement="Event_done">\r
        <dc:Bounds x="432" y="212" width="36" height="36" />\r
        <bpmndi:BPMNLabel>\r
          <dc:Bounds x="410" y="255" width="80" height="27" />\r
        </bpmndi:BPMNLabel>\r
      </bpmndi:BPMNShape>\r
      <bpmndi:BPMNEdge id="Flow_to_review_di" bpmnElement="Flow_to_review">\r
        <di:waypoint x="218" y="230" />\r
        <di:waypoint x="270" y="230" />\r
      </bpmndi:BPMNEdge>\r
      <bpmndi:BPMNEdge id="Flow_to_end_di" bpmnElement="Flow_to_end">\r
        <di:waypoint x="370" y="230" />\r
        <di:waypoint x="432" y="230" />\r
      </bpmndi:BPMNEdge>\r
    </bpmndi:BPMNPlane>\r
  </bpmndi:BPMNDiagram>\r
</bpmn:definitions>\r
`,Oo="Camunda Cloud",Uo="8.10.0",$o={name:"Camunda Web Modeler",version:"9b5d5ef"},Go=19,Vo="learn-user-task-form-review",Yo=[{text:`# Review request

A request is waiting for you. Decide whether to approve or reject it, then submit.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Requester:** {{requester}}

**Details:** {{details}}`,type:"text",layout:{row:"Row_details",columns:null},id:"Field_ReviewDetails"},{label:"Decision",values:[{label:"Approve",value:"approved"},{label:"Reject",value:"rejected"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_ReviewDecision",key:"decision",validate:{required:!0}},{label:"Comments",description:"Optional note recorded alongside your decision.",type:"textarea",layout:{row:"Row_comments",columns:null},id:"Field_ReviewComments",key:"comments"}],Qo="default",qo={executionPlatform:Oo,executionPlatformVersion:Uo,exporter:$o,schemaVersion:Go,id:Vo,components:Yo,type:Qo},Jo={id:"learn-user-task-form",title:"User task + form",group:"learn-bpmn",blurb:["A user task is a step a human completes, not a worker — the token parks at the task until someone submits its form, then moves on.","Run this and watch the process reach 'Review request' and wait; fill in the decision form that appears in its own card under the diagram and press Complete task to see the token resume and the process reach its end event.",'What binds that form to the task is one property: in the Code panel, open the model tab, click "Review request", and expand Form in the properties panel on the right — Form ID names the form the runner looks up and renders. A user task with no form binding still deploys and still parks the token, but the runner has nothing to render for it, so it offers a bare Complete button that finishes the task with no variables. Revert to original puts the binding back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/user-tasks/",bpmn:zo,forms:{"learn-user-task-form-review":qo},seed:{requester:"Priya Shah",details:"Approve access to the shared design-review workspace."},handlers:[]},Ho=Object.freeze(Object.defineProperty({__proto__:null,default:Jo},Symbol.toStringTag,{value:"Module"})),Wo=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,Zo=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,Ko={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:Te.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"},waitFor:{kind:"activeElement",elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"},waitFor:{kind:"elementCompleted",elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:Te.variablesPanel}}],successEvent:{kind:"instanceCompleted"}},Xo=`<?xml version="1.0" encoding="UTF-8"?>
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
`,ea="Camunda Cloud",na="8.10.0",ta={name:"Camunda Web Modeler",version:"9b5d5ef"},ra=19,ia="seed-export-shipment-ready",oa=[{text:"# Use a predefined scenario...",type:"text",layout:{row:"Row_04pl1rt",columns:null},id:"Field_0a6kzzq"},{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Use pre-defined sceanrio - to use leave Shipment notes below blank.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{text:`The following shipments notes are used:
* Likely cleared: SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53.
* Likely flagged: SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1.`,type:"text",layout:{row:"Row_1h31mub",columns:null},id:"Field_0j1vwd9"},{text:"# ...or hand in your own data",type:"text",layout:{row:"Row_1wu4opr",columns:null},id:"Field_12u5gzd"},{label:"Shipment notes",description:"If set, overrides the scenario above. Leave blank to use the scenario selected above. The agent reads this to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],aa="default",sa={executionPlatform:ea,executionPlatformVersion:na,exporter:ta,schemaVersion:ra,id:ia,components:oa,type:aa},da="Camunda Cloud",la="8.10.0",ca={name:"Camunda Web Modeler",version:"9b5d5ef"},ma=19,pa="seed-export-compliance-review",ua=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],ha="default",ga={executionPlatform:da,executionPlatformVersion:la,exporter:ca,schemaVersion:ma,id:pa,components:ua,type:ha},ba=Object.assign({"./prompts/system-prompt.md":Wo,"./prompts/user-prompt.md":Zo}),_a=Xe(Object.fromEntries(Object.entries(ba).map(([e,n])=>[jt(e),n.trimEnd()]))),ht="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",fa="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",wa=`async (job) => {
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
}`,ya=`async (job, { text, sleep, trace }) => {
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
}`,va=`async (job, { text, sleep, trace }) => {
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
}`,Ma=`async (job, { num, sleep }) => {
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
}`,xa=`async (job, { text, trace }) => {
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
}`,Na=`async (job, { sleep }) => {
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
}`,Ea={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",hero:{headline:"The LLM *recommends*. The process *governs*.",lede:"An agentic ad-hoc sub-process chooses its own compliance checks, but the gateway after it — not the model — decides whether a shipment ships or goes to a human.",tagline:"Anatomy of an enterprise agent"},docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:Xo,forms:{"seed-export-shipment-ready":sa,"seed-export-compliance-review":ga},seed:{scenario:ht,shipmentNotes:""},scenariosLabel:"Example shipment",scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:ht,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:fa,shipmentNotes:""}}],scriptedAgent:wa,templates:_a,tour:Ko,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:ya},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:va},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:Ma},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:xa},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:Na}]},ka=`You are a loan origination assistant at a retail bank. Your job is to gather everything a senior loan officer needs to decide an application — you do **not** decide it yourself.

Work through the case with the tools available to you:

- **Query customer** — find the applicant's existing relationship with the bank.
- **Credit bureau lookup** — pull their credit report.
- **Assess application** — run the bank's underwriting policy to get a debt-to-income ratio, a risk band, and a recommendation. Always run this; the officer's review depends on it.
- **Update application status** — mark the case as \`under-review\` once you have assessed it.

Call the tools in whatever order makes sense, but make sure the application has been assessed before you finish. When you have gathered the customer profile, the bureau report, and the policy assessment, and marked the status, you are done — a senior officer takes it from there.
`,Ia="Gather this loan case for the senior officer: look up the customer, pull their credit bureau report, run the underwriting assessment, and set the application status to `under-review`. Then stop — the officer makes the decision.\n",Ta={id:"loan-origination-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a loan application through the origination agent.",target:{anchor:Te.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the application and decides, turn by turn, which tools to call — look up the customer, pull a credit bureau report, run the underwriting policy, update the status. Nothing here is a fixed sequence.",target:{elementId:"LoanOriginationAgent"}},{title:"Policy, not opinion",description:"The assessment computes the debt-to-income ratio, a risk band and a recommendation from the verified figures — the deterministic policy the senior officer's review leans on.",target:{elementId:"AssessApplication"},waitFor:{kind:"elementCompleted",elementId:"AssessApplication"}},{title:"Every application meets a human",description:"Whatever the agent recommended, the token now waits here: no offer and no decline is reachable without a senior officer first signing off. Open the task to record the decision — the gateway routes on it.",target:{elementId:"SeniorOfficerReview"},waitFor:{kind:"activeElement",elementId:"SeniorOfficerReview"}},{title:"Everything the run recorded",description:"The variables panel shows the customer profile, the bureau report, the debt-to-income and risk band, and the recommendation — exactly what each tool wrote for the officer to weigh.",target:{anchor:Te.variablesPanel}}],successEvent:{kind:"elementCompleted",elementId:"AssessApplication"}},ja=`<?xml version="1.0" encoding="UTF-8"?>
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
      <bpmn:serviceTask id="CreditBureauLookup" name="Credit bureau lookup" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
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
      <bpmn:serviceTask id="UpdateApplicationStatus" name="Update application status" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
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
    <bpmn:serviceTask id="IssueLoanOffer" name="Issue loan offer" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
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
    <bpmn:serviceTask id="SendDeclineNotice" name="Send decline notice" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
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
`,Sa="Camunda Cloud",Pa="8.10.0",Aa={name:"Camunda Web Modeler",version:"9b5d5ef"},Ca=19,Da="loan-application",Ba="default",La=[{text:`# Loan application

Capture the applicant's details, then run the origination agent.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{label:"Applicant name",type:"textfield",layout:{row:"Row_applicant",columns:null},id:"Field_ApplicantName",key:"applicantName",defaultValue:"Ada Lovelace",validate:{required:!0}},{label:"Loan amount",description:"Amount requested.",type:"number",layout:{row:"Row_amount",columns:null},id:"Field_LoanAmount",key:"loanAmount",defaultValue:2e4},{label:"Loan purpose",type:"textfield",layout:{row:"Row_purpose",columns:null},id:"Field_LoanPurpose",key:"loanPurpose",defaultValue:"Home improvement"},{label:"Annual income",type:"number",layout:{row:"Row_income",columns:null},id:"Field_AnnualIncome",key:"annualIncome",defaultValue:96e3},{label:"Monthly debt payments",description:"Existing monthly repayments across all obligations.",type:"number",layout:{row:"Row_debt",columns:null},id:"Field_MonthlyDebt",key:"monthlyDebt",defaultValue:850},{label:"Stated credit score",description:"The applicant's self-reported score; the credit bureau tool confirms it.",type:"number",layout:{row:"Row_score",columns:null},id:"Field_CreditScore",key:"creditScore",defaultValue:782}],Ra={executionPlatform:Sa,executionPlatformVersion:Pa,exporter:Aa,schemaVersion:Ca,id:Da,type:Ba,components:La},Fa="Camunda Cloud",za="8.10.0",Oa={name:"Camunda Web Modeler",version:"9b5d5ef"},Ua=19,$a="loan-senior-officer-review",Ga="default",Va=[{text:`# Senior officer review

Every application reaches this desk before an offer or a decline can be sent. Review the agent's findings, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Applicant:** {{applicantName}} — {{loanPurpose}}, amount {{loanAmount}}

**Customer relationship:** {{if customerProfile = null then "unknown" else customerProfile.segment + " (" + string(customerProfile.relationshipYears) + "y)"}}

**Credit bureau:** {{if bureauReport = null then "n/a" else string(bureauReport.score) + " (" + bureauReport.band + "), " + string(bureauReport.derogatoryMarks) + " derogatory mark(s)"}}

**Debt-to-income:** {{debtToIncome}}%

**Assessed risk band:** {{riskBand}}

**Policy recommendation:** {{recommendation}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Decision",values:[{label:"Approve — issue loan offer",value:"approved"},{label:"Decline — send decline notice",value:"declined"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_Decision",key:"decision",validate:{required:!0}},{label:"Officer note",description:"Recorded against the application; the decline notice quotes it as the reason.",type:"textarea",layout:{row:"Row_note",columns:null},id:"Field_ReviewNote",key:"reviewNote"}],Ya={executionPlatform:Fa,executionPlatformVersion:za,exporter:Oa,schemaVersion:Ua,id:$a,type:Ga,components:Va},Qa=Object.assign({"./prompts/system-prompt.md":ka,"./prompts/user-prompt.md":Ia}),qa=Xe(Object.fromEntries(Object.entries(Qa).map(([e,n])=>[jt(e),n.trimEnd()]))),gt={applicantName:"Ada Lovelace",annualIncome:96e3,monthlyDebt:850,creditScore:782,loanAmount:2e4,loanPurpose:"Home improvement"},Ja={applicantName:"Cyrus Vale",annualIncome:38e3,monthlyDebt:1450,creditScore:566,loanAmount:42e3,loanPurpose:"Debt consolidation"},Ha=`async (job) => {
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
}`,Wa=`async (job, { text, sleep, trace }) => {
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
}`,Za=`async (job, { text, num, sleep, trace }) => {
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
}`,Ka=`async (job, { num, trace }) => {
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
}`,Xa=`async (job, { sleep, trace }) => {
  // Stands in for a write-back to the loan origination system. Marks the case
  // as awaiting the senior officer's decision.
  await sleep(200);
  trace("application status -> under-review");
  return { applicationStatus: "under-review", toolCallResult: "under-review" };
}`,es=`async (job, { num, sleep, trace }) => {
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
}`,ns=`async (job, { text, sleep, trace }) => {
  // Trunk service task on the declined path. Sends the applicant a decline
  // notice with the recorded reason, standing in for a notification channel.
  const note = text("reviewNote", "");
  const reason = note || "Application did not meet the lending policy.";
  await sleep(300);
  trace("decline notice sent");

  return { declineNotice: { reason: reason, sentTo: text("applicantName", "the applicant") } };
}`,ts={id:"loan-origination",title:"Loan origination agent",blurb:"An AI agent gathers a loan case with its own tools — customer lookup, credit bureau, an underwriting policy, a status update — then every application passes through a mandatory senior-officer review before a gateway routes it to an offer or a decline. The agent advises; the process governs.",docsUrl:"https://camunda.com/orchestrate/agents/",bpmn:ja,forms:{"loan-application":Ra,"loan-senior-officer-review":Ya},seed:gt,scenarios:[{label:"Strong applicant (policy recommends approve)",variables:gt},{label:"Marginal applicant (policy recommends decline)",variables:Ja}],scriptedAgent:Ha,templates:qa,tour:Ta,requiredTools:["AssessApplication","UpdateApplicationStatus"],handlers:[{elementId:"QueryCustomer",standsInFor:"CRM connector — customer lookup",source:Wa},{elementId:"CreditBureauLookup",standsInFor:"REST connector — credit bureau",source:Za},{elementId:"AssessApplication",standsInFor:"Script task — underwriting policy (FEEL)",source:Ka},{elementId:"UpdateApplicationStatus",standsInFor:"REST connector — origination system",source:Xa},{elementId:"IssueLoanOffer",standsInFor:"REST connector — offer/booking system",source:es},{elementId:"SendDeclineNotice",standsInFor:"REST connector — notifications",source:ns}]},rs=`<?xml version="1.0" encoding="UTF-8"?>
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
`,is=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,os=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,as=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,ss={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:rs,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:is},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:os},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:as}]},ds=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ls=`async (job, { text, num, sleep, trace }) => {
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
}`,cs={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:ds,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:ls}]},ms=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ps=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,us=`async (job, { num, sleep }) => {
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
}`,hs=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,gs={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:ms,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:ps},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:us,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:hs,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},bs="/pr-preview/pr-107/assets/de-bmw-mini-JBSk7QcF.jpg",_s="/pr-preview/pr-107/assets/de-bmw-mini.thumb-CUUmJrRO.jpg",fs="/pr-preview/pr-107/assets/uk-d651-rnb-XGipy2QN.jpg",ws="/pr-preview/pr-107/assets/uk-d651-rnb.thumb-mjEcbhUf.jpg",ys="/pr-preview/pr-107/assets/uk-mk70-orj-Cn6O3Xfm.jpg",vs="/pr-preview/pr-107/assets/uk-mk70-orj.thumb-CaeZ2vqU.jpg",Ms="/pr-preview/pr-107/assets/uk-ni-ijz-8992-YXV44tgk.jpg",xs="/pr-preview/pr-107/assets/uk-ni-ijz-8992.thumb-DYwok8jV.jpg",Ns="/pr-preview/pr-107/assets/us-hyundai-genesis-gGpAIEpi.jpg",Es="/pr-preview/pr-107/assets/us-hyundai-genesis.thumb-DEEt19Mw.jpg",ks=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Is="Camunda Cloud",Ts="8.10.0",js={name:"Camunda Web Modeler",version:"9b5d5ef"},Ss=19,Ps="plate-recognition-confirm",As="default",Cs=[{text:`# Confirm the number plate

The in-browser vision model read a plate from the photo. It **recommends**; you **govern** — accept its reading or correct it before it is recorded.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ConfirmHeading"},{text:'**Model reading:** {{if modelPlate = null or modelPlate = "" then "(nothing read)" else modelPlate}}',type:"text",layout:{row:"Row_modelReading",columns:null},id:"Field_ModelReading"},{label:"Number plate",description:"Edit this if the model misread the plate. What you submit is what gets recorded.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ConfirmPlate",key:"confirmedPlate",validate:{required:!0}}],Ds={executionPlatform:Is,executionPlatformVersion:Ts,exporter:js,schemaVersion:Ss,id:Ps,type:As,components:Cs},Bs="Camunda Cloud",Ls="8.10.0",Rs={name:"Camunda Web Modeler",version:"9b5d5ef"},Fs=19,zs="plate-recognition-manual",Os="default",Us=[{text:`# Couldn't read the plate

The vision model didn't return a confident reading for this photo (an unrecognised image, or no in-browser model connected). Enter the plate by hand, or re-run with the in-browser vision brain connected.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ManualHeading"},{label:"Number plate",description:"Type the plate exactly as it appears in the photo.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ManualPlate",key:"confirmedPlate",validate:{required:!0}}],$s={executionPlatform:Bs,executionPlatformVersion:Ls,exporter:Rs,schemaVersion:Fs,id:zs,type:Os,components:Us},Gs="Camunda Cloud",Vs="8.10.0",Ys={name:"Camunda Web Modeler",version:"9b5d5ef"},Qs=19,qs="plate-recognition-country",Js="default",Hs=[{text:`# Read a number plate

Pick the plate's **country** so the reader knows which format to extract, then start the run. Leave it on **Auto-detect** to let it guess from the shape.`,type:"text",layout:{row:"Row_countryHeading",columns:null},id:"Field_CountryHeading"},{label:"Plate country",description:"The vision model reads all text in the photo; this tells the process which country's plate format to pull out of that reading.",type:"select",layout:{row:"Row_country",columns:null},id:"Field_Country",key:"country",defaultValue:"auto",values:[{label:"Auto-detect (any format)",value:"auto"},{label:"United Kingdom",value:"uk"},{label:"India",value:"india"},{label:"Germany",value:"germany"},{label:"South Korea",value:"korea"}],validate:{required:!0}}],Ws={executionPlatform:Gs,executionPlatformVersion:Vs,exporter:Ys,schemaVersion:Qs,id:qs,type:Js,components:Hs},Zs=[{id:"uk-mk70-orj",file:"images/uk-mk70-orj.jpg",thumb:"images/uk-mk70-orj.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_MK70_ORJ_(MK_-_Manchester)_-_70_Plate_(1st_September_2020_-_28th_February_2021)_-_VW_Golf_(CarShop).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate MK70 ORJ" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"MK70 ORJ"},{id:"uk-ni-ijz-8992",file:"images/uk-ni-ijz-8992.jpg",thumb:"images/uk-ni-ijz-8992.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_(Northern_Ireland)_Number_Plate_IJZ_8992_(JZ_-_Down_(NI)_)_-_Dateless_Plate_-_Ford_Fiesta_(Woolston_Car_Centre).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK (Northern Ireland) Number Plate IJZ 8992" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"IJZ 8992"},{id:"uk-d651-rnb",file:"images/uk-d651-rnb.jpg",thumb:"images/uk-d651-rnb.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_D651_RNB_(NB_-_Manchester)_-_D_Reg_(1st_August_1986_-_31st_July_1987)_-_Ford_Capri_(The_Quick_Group).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate D651 RNB" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"D651 RNB"},{id:"de-bmw-mini",file:"images/de-bmw-mini.jpg",thumb:"images/de-bmw-mini.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_BMW_Mini_--_2018_--_1545-51.jpg",license:"CC-BY-SA-4.0",attribution:'Dietmar Rabich / Wikimedia Commons / "Dülmen, Dernekamp, BMW Mini -- 2018 -- 1545-51" / CC BY-SA 4.0',groundTruthPlate:"MS WL 545"},{id:"us-hyundai-genesis",file:"images/us-hyundai-genesis.jpg",thumb:"images/us-hyundai-genesis.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:Hyundai_Genesis_3.8_(US)_(9004912958).jpg",license:"CC-BY-SA-2.0",attribution:'Scarlet Sappho, "Hyundai Genesis 3.8 (US)" (Wikimedia Commons, CC BY-SA 2.0)',groundTruthPlate:"GWAN EUM"}],Gt=Zs,Ks=Object.assign({"./images/de-bmw-mini.jpg":bs,"./images/de-bmw-mini.thumb.jpg":_s,"./images/uk-d651-rnb.jpg":fs,"./images/uk-d651-rnb.thumb.jpg":ws,"./images/uk-mk70-orj.jpg":ys,"./images/uk-mk70-orj.thumb.jpg":vs,"./images/uk-ni-ijz-8992.jpg":Ms,"./images/uk-ni-ijz-8992.thumb.jpg":xs,"./images/us-hyundai-genesis.jpg":Ns,"./images/us-hyundai-genesis.thumb.jpg":Es});function bt(e){const n=Ks[`./${e}`];if(!n)throw new Error(`plate-recognition: image asset "${e}" is in images.json but missing on disk`);return n}const Xs=Gt.map(e=>({id:e.id,file:bt(e.file),thumb:bt(e.thumb),label:e.groundTruthPlate})),ed=Object.fromEntries(Gt.map(e=>[e.id,e.groundTruthPlate])),nd=`async (job, { vision, trace, text }) => {
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
}`,td=`async (job, { text, trace }) => {
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
}`,rd={id:"plate-recognition",title:"Read a number plate from a photo",blurb:"Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",docsUrl:"https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",bpmn:ks,forms:{"plate-recognition-country":Ws,"plate-recognition-confirm":Ds,"plate-recognition-manual":$s},seed:{country:"auto"},imageInput:{label:"Pick a seed photo (its plate is known, so the scripted reader works offline) or upload your own — a live in-browser model reads a photo it has never seen.",seedImages:Xs},scriptedVision:ed,handlers:[{elementId:"ExtractPlate",standsInFor:"Vision model — Florence-2 <OCR> on WebGPU (in-browser)",source:nd},{elementId:"RecordResult",standsInFor:"Script task — records the governed outcome",source:td}]},id=[cs,Ea,ts,ss,gs,rd],od=Object.assign({"./learn-error-boundary/index.ts":co,"./learn-exclusive-gateway/index.ts":bo,"./learn-message-correlation/index.ts":yo,"./learn-multi-instance-parallel/index.ts":No,"./learn-service-task/index.ts":jo,"./learn-signal-broadcast/index.ts":Do,"./learn-timer-catch-event/index.ts":Fo,"./learn-user-task-form/index.ts":Ho}),ad=Object.values(od).map(e=>e.default).sort((e,n)=>e.id.localeCompare(n.id)),He=[...id,...ad];function Ln(){return"/pr-preview/pr-107/"}function sd(e){const n=Ln();return e.startsWith(n)?"/"+e.slice(n.length):e}function dd(e=location.pathname){const t=sd(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function ld(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function _t(e){return`${Ln()}examples/${encodeURIComponent(e)}`}const ft="p";function cd(){const e=new URLSearchParams(location.search),n=e.get(ft);if(!n)return!1;const t=n.replace(/[\t\n\r]/g,"");if(!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\"))return!1;e.delete(ft);try{const r=new URL(Ln(),location.href),o=new URL(t.slice(1),r);return o.origin!==location.origin?!1:(o.search=e.toString(),o.hash=location.hash,history.replaceState(null,"",o),!0)}catch{return!1}}function md(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function wt(){return{route:dd(),embed:ld()}}function pd(){const[e,n]=g.useState(wt);return g.useEffect(()=>{const t=()=>n(wt());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const ud="web-demo-framework:height",hd="web-demo-framework:request-height";function gd(e){return{type:ud,height:Math.ceil(e)}}const yt="embed-height-auto";function bd(e){g.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(yt);let t=-1;const r=(l=!1)=>{const p=document.documentElement.scrollHeight;!l&&Math.abs(p-t)<2||(t=p,window.parent.postMessage(gd(p),"*"))},o=l=>{if(l.source!==window.parent)return;const p=l.data;!p||p.type!==hd||r(!0)};window.addEventListener("message",o),r();const s=new ResizeObserver(()=>r());return s.observe(n),()=>{s.disconnect(),window.removeEventListener("message",o),n.classList.remove(yt)}},[e])}const vt={headline:"The model *runs*. The code is *yours* to edit.",lede:"Every example on this page is a real BPMN process executing in your browser on the nano WebAssembly engine — edit the model, edit the handlers, swap the LLM, and run it again.",tagline:"Runnable Camunda examples"};function _d({text:e}){return i.jsx(i.Fragment,{children:e.split(/\*([^*]+)\*/g).map((n,t)=>t%2===1?i.jsx("em",{children:n},t):i.jsx(g.Fragment,{children:n},t))})}function fd(){const{route:e,embed:n}=pd(),t=Ot().brain,r=Qi();bd(n);const o=e.kind==="example"?e.id:He[0].id,s=He.find(h=>h.id===o)??He[0],l=He.filter(h=>h.group!=="learn-bpmn"),p=He.filter(h=>h.group==="learn-bpmn"),u=h=>{md(_t(h),{hash:location.hash})},a=s.hero??vt,c=i.jsxs(i.Fragment,{children:[!n&&i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"hero",children:[i.jsx("h1",{children:i.jsx(_d,{text:a.headline})}),a.lede&&i.jsx("p",{children:a.lede})]}),i.jsx("nav",{className:"example-picker","aria-label":"Scenario examples",children:l.map(h=>i.jsx(q,{size:"sm",variant:h.id===s.id?"default":"secondary","aria-current":h.id===s.id?"page":void 0,onClick:()=>u(h.id),children:h.title},h.id))}),p.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("h2",{className:"example-group-heading",id:"learn-bpmn-heading",children:"Learn BPMN"}),i.jsx("nav",{className:"example-picker","aria-labelledby":"learn-bpmn-heading",children:p.map(h=>i.jsx(q,{size:"sm",variant:h.id===s.id?"default":"secondary","aria-current":h.id===s.id?"page":void 0,onClick:()=>u(h.id),children:h.title},h.id))})]})]}),i.jsxs("div",{className:"example-meta",children:[s.docsUrl&&i.jsx("a",{className:"docs-link",href:s.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&i.jsx("a",{className:"open-full-page",href:_t(s.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:"Open full page ↗"})]}),i.jsx(io,{example:s,initialBrainKind:t,initialTourId:r},s.id)]});return n?i.jsx("div",{className:"c4-ui app-shell app-embed",children:i.jsx("main",{id:"main",className:"layout layout-embed",children:c})}):i.jsxs("div",{className:"c4-ui app-shell",children:[i.jsx(tr,{className:"topbar",logo:i.jsx("span",{className:"brand-dot","aria-hidden":!0}),appName:"Runnable Camunda examples",trailing:i.jsx("span",{className:"app-subtitle",children:a.tagline??vt.tagline})}),i.jsx("main",{id:"main",className:"layout",children:c}),i.jsx("footer",{className:"footer",children:"Running locally in your browser on the nano WebAssembly BPMN engine — no cluster, no server, no data leaving the page."})]})}cd();qt.createRoot(document.getElementById("root")).render(i.jsx(g.StrictMode,{children:i.jsx(rr,{children:i.jsx(fd,{})})}));export{me as _,Md as c};
