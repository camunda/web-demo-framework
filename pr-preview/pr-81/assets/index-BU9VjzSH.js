const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-embedded-MQoAJo9U.css","assets/RuntimeDiagram-B2IYfHo7.js","assets/vendor-react-9Ma26nY1.js","assets/Viewer-D_7S4Gwm.js","assets/MonacoEditor-BAzVEveo.js","assets/MonacoEditor-DyVzaBNn.css","assets/vendor-modeler-Bqs2wBKd.js","assets/vendor-design-system-Q54Xyga3.js","assets/vendor-design-system-DxsWRUO3.css","assets/parser-DkgAe_kI.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-BS5I6S6E.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var At=Object.defineProperty;var Ct=(e,n,t)=>n in e?At(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var R=(e,n,t)=>Ct(e,typeof n!="symbol"?n+"":n,t);import{r as g,j as s,i as Dt}from"./vendor-react-9Ma26nY1.js";import{B as Z,a as J,L as ze,S as Kn,b as Xn,c as et,d as nt,e as tt,A as se,f as ae,g as ce,I as tn,C as Lt,h as Pt,i as zt,j as Rt,k as Ot,l as Bt,T as Ft,m as Ut,n as Qe,o as Je,p as $t,q as Yt}from"./vendor-design-system-Q54Xyga3.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const Gt="modulepreload",Qt=function(e){return"/pr-preview/pr-81/"+e},kn={},le=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){let c=function(o){return Promise.all(o.map(l=>Promise.resolve(l).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),u=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));i=c(t.map(o=>{if(o=Qt(o),o in kn)return;kn[o]=!0;const l=o.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${h}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Gt,l||(p.as="script"),p.crossOrigin="",p.href=o,u&&p.setAttribute("nonce",u),document.head.appendChild(p),l)return new Promise((y,b)=>{p.addEventListener("load",y),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${o}`)))})}))}function a(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return i.then(c=>{for(const d of c||[])d.status==="rejected"&&a(d.reason);return n().catch(a)})},Jt="io.camunda.agenticai:aiagent",we="http://www.omg.org/spec/BPMN/20100524/MODEL",Vt="http://camunda.org/schema/zeebe/1.0";function dn(e,n){return Array.from(e.getElementsByTagNameNS(Vt,n))}function rt(e,n){return dn(e,n).filter(t=>Zt(t)===e)}function Zt(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===we&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function hn(e){const n=rt(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function En(e){const n=Array.from(e.children).find(t=>t.namespaceURI===we&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function Tn(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(r=>r.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function it(e){const n=[],t=r=>{for(const i of Array.from(r.attributes))n.push(i.value);for(const i of Array.from(r.children))t(i)};return t(e),n.join(`
`)}function Ht(e){return ot(it(e))}function Wt(e){const n=Array.from(e.children).find(t=>t.namespaceURI===we&&t.localName==="extensionElements");return n?ot(it(n)):[]}function ot(e){const n=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,t=[],r=new Set;for(const i of e.matchAll(n)){const a=i[1];r.has(a)||(r.add(a),t.push({name:a,description:(i[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:i[3]??"string"}))}return t}function qt(e){const n={};for(const t of rt(e,"input")){const r=t.getAttribute("target");r&&(n[r]=t.getAttribute("source")??"")}return n}function Kt(e){return Array.from(e.getElementsByTagNameNS(we,"adHocSubProcess")).filter(n=>(hn(n)??"").startsWith(Jt))}const Xt=new Set(["subProcess","adHocSubProcess","callActivity"]),er=new Set(["adHocSubProcess","subProcess","transaction"]);function nr(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===we&&er.has(n.localName))return n;n=n.parentElement}return null}function tr(e,n){const t=qt(e),r=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:hn(e),systemPrompt:Tn(t["data.systemPrompt.prompt"]),userPrompt:Tn(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(r)&&r>0?r:10,tools:n}}function rr(e,n){var h;const t=e.getAttribute("id")??"",r=e.getAttribute("name")??t,i=Kt(e);i.length>1&&n.push({severity:"warning",elementId:i.map(p=>p.getAttribute("id")).join(", "),message:`Process "${r}" hosts ${i.length} AI Agent sub-processes (${i.map(p=>p.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const a=[],c=new Map(i.map(p=>[p,[]]));for(const p of Array.from(e.getElementsByTagName("*"))){if(p.namespaceURI!==we||i.includes(p))continue;const y=p.getAttribute("id");if(!y)continue;const b=nr(p),w=b&&i.includes(b)?b:null;if(w&&Xt.has(p.localName)){const T=p.getAttribute("name")??y,L=En(p);a.push({elementId:y,label:T,jobType:"",documentation:L,isTool:!0,compound:!0}),c.get(w).push({elementId:y,label:T,jobType:"",documentation:L,args:Wt(p),compound:!0});continue}const f=hn(p);if(!f)continue;const M={elementId:y,label:p.getAttribute("name")??y,jobType:f,documentation:En(p),isTool:w!=null};a.push(M),w&&c.get(w).push({elementId:y,label:M.label,jobType:f,documentation:M.documentation,args:Ht(p)})}const d=i.map(p=>tr(p,c.get(p))),u=Array.from(e.getElementsByTagNameNS(we,"userTask")).map(p=>{var y;return{elementId:p.getAttribute("id")??"",label:p.getAttribute("name")??p.getAttribute("id")??"",formId:((y=dn(p,"formDefinition")[0])==null?void 0:y.getAttribute("formId"))??void 0}}),o=e.getElementsByTagNameNS(we,"startEvent")[0],l=o?((h=dn(o,"formDefinition")[0])==null?void 0:h.getAttribute("formId"))??void 0:void 0;return{processId:t,processName:r,tasks:a,agents:d,userTasks:u,startFormId:l}}function ir(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),r=t.getElementsByTagName("parsererror")[0];if(r)throw new Error(`Invalid BPMN XML: ${r.textContent}`);const i=Array.from(t.getElementsByTagNameNS(we,"process"));if(i.length===0)throw new Error("No <bpmn:process> in the diagram.");const a=[],c=i.map(u=>rr(u,a));let d=n.processId?c.find(u=>u.processId===n.processId):void 0;return n.processId&&!d&&a.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${c[0].processId}".`}),d??(d=c[0]),c.length>1&&a.push({severity:"warning",message:`Diagram has ${c.length} <bpmn:process> elements (${c.map(u=>u.processId).join(", ")}); using "${d.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:c,diagnostics:a,processId:d.processId,processName:d.processName,tasks:d.tasks,agent:d.agents[0]??null,agents:c.flatMap(u=>u.agents),userTasks:d.userTasks,startFormId:d.startFormId}}function or(e){return e?e.imageId?{imageId:e.imageId}:e.imageName?{imageName:e.imageName}:{}:{}}function st(e,n){return n?e.pixels:e.imageId??e.pixels}const sr="No image selected — pick or upload a photo to read.";function jn(){return sr}function ar(e,n){return async t=>{const r=e.resolve(n);if(!r)return jn();const i=st(r,e.live);if(i===void 0)return jn();try{return await e.read(i,t)}catch(a){return`Couldn't read the image (${a instanceof Error?a.message:String(a)}).`}}}function cr(e,n){return async()=>{const t=e.resolve(n);if(t)return st(t,e.live)}}function lr(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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
  <\/script></body></html>`}function at(e,n={}){const{timeoutMs:t=5e3,onTrace:r,onVision:i,onImage:a}=n,c=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((d,u)=>{const o=document.createElement("iframe");o.setAttribute("sandbox","allow-scripts"),o.style.display="none",o.setAttribute("aria-hidden","true");let l=!1,h;const p=()=>{h&&clearTimeout(h),window.removeEventListener("message",b),o.remove()},y=f=>{l||(l=!0,p(),f())};function b(f){var T;if(f.source!==o.contentWindow)return;const M=f.data;if(!(!M||typeof M!="object")){if(M.kind==="ready"){const L=e.job,Y=e.kind==="run-handler"?{kind:"run-handler",id:c,source:e.source,job:L,hasVision:e.hasVision}:{kind:"run-agent",id:c,source:e.source,job:L};(T=o.contentWindow)==null||T.postMessage(Y,"*");return}"id"in M&&M.id!==c||(M.kind==="trace"?r==null||r(M.text):M.kind==="vision-request"?w(M.callId,i,"vision",M.prompt):M.kind==="image-request"?w(M.callId,a,"image"):M.kind==="result"?y(()=>d(M.value)):M.kind==="error"&&y(()=>u(new Error(M.message))))}}function w(f,M,T,...L){const Y=H=>{var de;return(de=o.contentWindow)==null?void 0:de.postMessage(H,"*")};if(!M){Y({kind:"helper-error",id:c,callId:f,message:`${T} helper is not available.`});return}Promise.resolve().then(()=>M(...L)).then(H=>Y({kind:"helper-result",id:c,callId:f,value:H}),H=>Y({kind:"helper-error",id:c,callId:f,message:H instanceof Error?H.message:String(H)}))}window.addEventListener("message",b),h=setTimeout(()=>{y(()=>u(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),o.srcdoc=lr(),document.body.appendChild(o)})}function ct(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function dr(e,n,t){const r=typeof t.vision=="function";return at({kind:"run-handler",source:e,job:ct(n),hasVision:r},{onTrace:t.trace,onVision:t.vision?i=>t.vision(i):void 0,onImage:t.image?()=>t.image():void 0})}function ur(e,n){return at({kind:"run-agent",source:e,job:ct(n)})}function lt(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function mr(e){return lt(e,"Handler code"),(n,t)=>dr(e,n,t)}function pr(e){return lt(e,"Agent code"),n=>ur(e,n)}function gr(e,n,t,r){return{sleep:i=>new Promise(a=>setTimeout(a,i)),trace:i=>n({kind:"tool",text:`   ${i}`,elementId:e.elementId,turn:t}),text:(i,a="")=>{const c=e.variables[i];return typeof c=="string"?c:c==null?a:String(c)},num:(i,a=0)=>{const c=e.variables[i],d=typeof c=="number"?c:Number(c);return Number.isFinite(d)?d:a},...r?{vision:ar(r,e.instanceKey),image:cr(r,e.instanceKey)}:{}}}function hr(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function br(e,n,t,r,i){const a={},c=e.processes.flatMap(u=>u.tasks),d=new Map(c.map(u=>[u.elementId,u.label]));for(const u of c)u.compound||a[u.jobType]||(a[u.jobType]=async o=>{const l=n[o.elementId];if(!l)throw new Error(`No handler registered for ${o.elementId} (job type ${o.type})`);const h=d.get(o.elementId)??o.elementId,p=r==null?void 0:r.current;t({kind:"tool",text:`▶ ${h}`,elementId:o.elementId,turn:p});const y=await l(o,gr(o,t,p,i));return t({kind:"vars",text:`  ↳ ${hr(y)}`,elementId:o.elementId,result:y,turn:p}),y});return a}const fr=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function Ke(...e){const n=Object.create(null);for(const t of e)if(t)for(const r of Object.keys(t))n[r]=t[r];return n}function yr(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function dt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wr(e){return dt(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function _r(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mr(e){return JSON.stringify(e).slice(1,-1)}function xr(e,n){const t=e.lastIndexOf("<",n),r=e.lastIndexOf(">",n);if(t<=r)return"text";const i=e.slice(t,n);if((i.match(/"/g)??[]).length%2===0)return"text";const c=i.lastIndexOf('"');return(i.slice(c+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function vr(e,n,t="xml"){const r=[],i=new Set;return{result:e.replace(fr,(c,d,u)=>{const o=d.trim();if(!Object.prototype.hasOwnProperty.call(n,o))return i.has(o)||(i.add(o),r.push(o)),c;const l=n[o];if(t==="json")return Mr(l);const h=xr(e,u);return h==="feel-literal"?_r(l):h==="attribute"?wr(l):dt(l)}),unresolved:r}}function Nr(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function Ir(e,n={},t=e.bpmn,r={}){const i=[],a=Ke(e.templates,r),{result:c,unresolved:d}=vr(t,a,"xml");for(const M of d)i.push({severity:"warning",message:`Template placeholder "{{${M}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let u;try{u=ir(c)}catch(M){return i.push({severity:"error",message:M instanceof Error?M.message:String(M)}),{resolvedBpmn:c,model:Nr(),handlers:{},forms:{},diagnostics:i,hasErrors:!0}}i.push(...u.diagnostics);const o=u.processes.flatMap(M=>M.tasks),l=new Map(e.handlers.map(M=>[M.elementId,M.source])),h={};for(const M of o){if(M.compound)continue;const T=n[M.elementId]??l.get(M.elementId);if(T===void 0){i.push({severity:"error",elementId:M.elementId,jobType:M.jobType,message:`No handler for "${M.label}" (${M.elementId}, job type "${M.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{h[M.elementId]=mr(T)}catch(L){i.push({severity:"error",elementId:M.elementId,jobType:M.jobType,message:`"${M.label}" (${M.elementId}): handler code didn't compile — ${L instanceof Error?L.message:String(L)}`})}}const p=new Set(o.map(M=>M.elementId)),y=new Set([...l.keys(),...Object.keys(n)]);for(const M of y)p.has(M)||i.push({severity:"error",elementId:M,message:`Handler "${M}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const b={},w=e.forms??{},f=(M,T)=>{if(!M)return;const L=w[M];L?b[M]=L:i.push({severity:"error",formId:M,message:`${T} references form "${M}", which has no matching schema.`})};for(const M of u.processes){f(M.startFormId,`The start event of process "${M.processName}"`);for(const T of M.userTasks)f(T.formId,`User task "${T.label}" (${T.elementId})`)}return{resolvedBpmn:c,model:u,handlers:h,forms:b,diagnostics:i,hasErrors:i.some(M=>M.severity==="error")}}function kr(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let r=n;r<e.length;r++)if(e[r]==="{")t++;else if(e[r]==="}"&&(t--,t===0))try{const i=JSON.parse(e.slice(n,r+1));return typeof i=="object"&&i!==null&&!Array.isArray(i)?i:null}catch{return null}return null}function un(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function Sn(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function An(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:Sn(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,r=Array.isArray(t)?t:Object.values(e).find(a=>Array.isArray(a))??[],i=[];for(const a of r)if(typeof a=="string")a.trim()&&i.push({name:a.trim(),args:{}});else if(a&&typeof a=="object"){const c=a,d=c.name??c.tool??c.id??c.function;typeof d=="string"&&d.trim()&&i.push({name:d.trim(),args:Sn(c)})}return i}function Er(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function Cn(e){const n=e.args.length?e.args.map(r=>`      ${r.name} (${r.type}) — ${r.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function Tr(e,n,t){const r=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",i=t[0]??e.tools[0];if(t.length===0)return`${r}

Every tool has already run. Reply with JSON only — no prose, no explanation, no
markdown fence — exactly:

{"done": true}`;const a=i!=null&&i.args.length?`{${i.args.map(c=>`"${c.name}": "…"`).join(", ")}}`:"{}";return n?`${r}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${t.map(Cn).join(`

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

${t.map(Cn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(i==null?void 0:i.elementId)??"ToolName"}", "arguments": ${a}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function jr(e,n,t,r,i=[],a=[],c=!1){const d=e.userPrompt||"Carry out your task.",u=Object.entries(n).filter(([,l])=>typeof l=="string"&&l.trim().length>0).map(([l,h])=>`  ${l}: ${String(h)}`),o=[d,u.length?`Case data:
${u.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return o.push(t.length?`${c?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),o.push(r.length?`Tools still available:
${r.map(l=>`  ${l.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),a.length&&o.push(`Your last reply was rejected: ${a.join("; ")}. Do not repeat it.`),i.length&&o.push(`You reported that you are done, but ${i.join(" and ")} ${i.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${i.length===1?"it":"them"} now.`),o.push("Which tool should run next? Reply with JSON only."),o.join(`

`)}async function Sr(e,n,t,r,i,a){let c="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:a});const d=await e(r,i,u=>{c+=u,n({kind:"llm",text:`${un(c)} ▍`,key:t,pending:!0,turn:a})});return n({kind:"llm",text:un(d||c)||"(empty reply)",key:t,pending:!1,turn:a}),d}function Ar(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function Cr(e,n,t){const r={},i=new Map,a=new Map;for(const{tool:c,args:d}of e){const u={};for(const o of c.args){const l=d[o.name];if(!(l!=null&&l!=="")){n({kind:"error",text:`🤖 ${c.elementId}: model supplied no value for "${o.name}"`,turn:t,elementId:c.elementId});continue}const p=i.get(o.name);if(p!==void 0&&p!==c.elementId){n({kind:"error",text:`🤖 argument name collision on "${o.name}": both ${p} and ${c.elementId} declare it — ${p} already claimed it this turn, ${c.elementId}'s value is dropped`,turn:t,elementId:c.elementId});continue}const y=Ar(o.type,l);if(!y.ok){n({kind:"error",text:`🤖 ${c.elementId}: "${o.name}" is declared as ${o.type} but the model supplied ${JSON.stringify(l)} — rejected, not passed through`,turn:t,elementId:c.elementId});continue}r[o.name]=y.value,u[o.name]=y.value,i.set(o.name,c.elementId)}a.set(c.elementId,u)}return{variablesOut:r,forHistory:a}}function Dr(e,n,t,r={}){const{maxNewTokens:i=384,allowRepeats:a=!1,allowMultiToolTurns:c=!1,turnRef:d,requiredTools:u=[],maxEarlyDoneNudges:o=1}=r;let l=0;const h=new Set,p=[];let y=0,b=[],w=[];return async f=>{const M=f.variables,T=M.toolCallResult;for(T!==void 0&&p.length&&(p[p.length-1]=`${p[p.length-1]} → ${un(JSON.stringify(T),160)}`);;){const Y=await L();if(Y)return Y}async function L(){if(l+=1,d&&(d.current=l),l>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:l}),{completionConditionFulfilled:!0};const Y=a?e.tools:e.tools.filter(A=>!h.has(A.elementId)),H=[{role:"system",content:Tr(e,c,Y)},{role:"user",content:jr(e,M,p,Y,b,w,a)}];b=[],w=[];let de;try{de=await Sr(n,t,`llm-turn-${l}`,H,i,l)}catch(A){return t({kind:"error",text:`LLM call failed: ${A instanceof Error?A.message:String(A)} — completing the agent.`,turn:l}),{completionConditionFulfilled:!0}}const G=kr(de);if(Er(G)&&An(G).length===0){const A=u.filter(W=>!h.has(W));return A.length&&y<o?(y+=1,b=A,t({kind:"agent",text:`🤖 model says it is done, but ${A.join(", ")} hasn't run — asking once more`,turn:l}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:l}),{completionConditionFulfilled:!0})}const ie=An(G);if(ie.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:l}),w=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const U=[],I=[],N=[];for(const A of ie){const W=e.tools.find(he=>he.elementId===A.name);if(!W){I.push(A.name);continue}if(!a&&h.has(W.elementId)){N.push(W.elementId);continue}U.push({tool:W,args:A.args})}if(I.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${I.join(", ")} — nothing activated`,turn:l}),N.length&&t({kind:"error",text:`🤖 model asked to re-run ${N.join(", ")} — skipped (already run)`,turn:l}),U.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:l}),w=[...I.length?[`${I.join(", ")} ${I.length===1?"is":"are"} not a real tool`]:[],...N.length?[`${N.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:j,forHistory:K}=Cr(U,t,l);for(const{tool:A}of U)h.add(A.elementId),p.push(`- ${A.elementId}(${JSON.stringify(K.get(A.elementId))})`);for(const{tool:A}of U)t({kind:"agent",text:`🤖 calling ${A.elementId}`,turn:l,elementId:A.elementId,args:K.get(A.elementId)??{}});return{activateElements:U.map(A=>({elementId:A.tool.elementId})),variables:j}}}}function Lr(e,n,t,r={}){const i=new Map(e.map(a=>[a.elementId,Dr(a,n,t,r)]));return async a=>{const c=i.get(a.elementId);if(!c)throw new Error(`No agent host registered for "${a.elementId}"`);return c(a)}}class mn{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Dn.unregister(this),n}free(){const n=this.__destroy_into_raw();m.__wbg_testengine_free(n,0)}activateJobs(n,t,r,i){let a,c;try{const y=m.__wbindgen_add_to_stack_pointer(-16),b=C(n,m.__wbindgen_export,m.__wbindgen_export2),w=S,f=C(i,m.__wbindgen_export,m.__wbindgen_export2),M=S;m.testengine_activateJobs(y,this.__wbg_ptr,b,w,t,r,f,M);var d=x().getInt32(y+0,!0),u=x().getInt32(y+4,!0),o=x().getInt32(y+8,!0),l=x().getInt32(y+12,!0),h=d,p=u;if(l)throw h=0,p=0,F(o);return a=h,c=p,B(h,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(a,c,1)}}advanceTime(n){let t,r;try{const l=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_advanceTime(l,this.__wbg_ptr,n);var i=x().getInt32(l+0,!0),a=x().getInt32(l+4,!0),c=x().getInt32(l+8,!0),d=x().getInt32(l+12,!0),u=i,o=a;if(d)throw u=0,o=0,F(c);return t=u,r=o,B(u,o)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}assignUserTask(n,t,r){let i,a;try{const p=m.__wbindgen_add_to_stack_pointer(-16),y=C(n,m.__wbindgen_export,m.__wbindgen_export2),b=S,w=C(t,m.__wbindgen_export,m.__wbindgen_export2),f=S;m.testengine_assignUserTask(p,this.__wbg_ptr,y,b,w,f,r);var c=x().getInt32(p+0,!0),d=x().getInt32(p+4,!0),u=x().getInt32(p+8,!0),o=x().getInt32(p+12,!0),l=c,h=d;if(o)throw l=0,h=0,F(u);return i=l,a=h,B(l,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,a,1)}}broadcastSignal(n,t){let r,i;try{const h=m.__wbindgen_add_to_stack_pointer(-16),p=C(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,b=C(t,m.__wbindgen_export,m.__wbindgen_export2),w=S;m.testengine_broadcastSignal(h,this.__wbg_ptr,p,y,b,w);var a=x().getInt32(h+0,!0),c=x().getInt32(h+4,!0),d=x().getInt32(h+8,!0),u=x().getInt32(h+12,!0),o=a,l=c;if(u)throw o=0,l=0,F(d);return r=o,i=l,B(o,l)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,i,1)}}cancelInstance(n){let t,r;try{const l=m.__wbindgen_add_to_stack_pointer(-16),h=C(n,m.__wbindgen_export,m.__wbindgen_export2),p=S;m.testengine_cancelInstance(l,this.__wbg_ptr,h,p);var i=x().getInt32(l+0,!0),a=x().getInt32(l+4,!0),c=x().getInt32(l+8,!0),d=x().getInt32(l+12,!0),u=i,o=a;if(d)throw u=0,o=0,F(c);return t=u,r=o,B(u,o)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}completeAgentJob(n,t,r){let i,a;try{const p=m.__wbindgen_add_to_stack_pointer(-16),y=C(n,m.__wbindgen_export,m.__wbindgen_export2),b=S,w=C(t,m.__wbindgen_export,m.__wbindgen_export2),f=S,M=C(r,m.__wbindgen_export,m.__wbindgen_export2),T=S;m.testengine_completeAgentJob(p,this.__wbg_ptr,y,b,w,f,M,T);var c=x().getInt32(p+0,!0),d=x().getInt32(p+4,!0),u=x().getInt32(p+8,!0),o=x().getInt32(p+12,!0),l=c,h=d;if(o)throw l=0,h=0,F(u);return i=l,a=h,B(l,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,a,1)}}completeJob(n,t){let r,i;try{const h=m.__wbindgen_add_to_stack_pointer(-16),p=C(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,b=C(t,m.__wbindgen_export,m.__wbindgen_export2),w=S;m.testengine_completeJob(h,this.__wbg_ptr,p,y,b,w);var a=x().getInt32(h+0,!0),c=x().getInt32(h+4,!0),d=x().getInt32(h+8,!0),u=x().getInt32(h+12,!0),o=a,l=c;if(u)throw o=0,l=0,F(d);return r=o,i=l,B(o,l)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,i,1)}}completeUserTask(n,t){let r,i;try{const h=m.__wbindgen_add_to_stack_pointer(-16),p=C(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,b=C(t,m.__wbindgen_export,m.__wbindgen_export2),w=S;m.testengine_completeUserTask(h,this.__wbg_ptr,p,y,b,w);var a=x().getInt32(h+0,!0),c=x().getInt32(h+4,!0),d=x().getInt32(h+8,!0),u=x().getInt32(h+12,!0),o=a,l=c;if(u)throw o=0,l=0,F(d);return r=o,i=l,B(o,l)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,i,1)}}correlateMessage(n,t,r){let i,a;try{const p=m.__wbindgen_add_to_stack_pointer(-16),y=C(n,m.__wbindgen_export,m.__wbindgen_export2),b=S,w=C(t,m.__wbindgen_export,m.__wbindgen_export2),f=S,M=C(r,m.__wbindgen_export,m.__wbindgen_export2),T=S;m.testengine_correlateMessage(p,this.__wbg_ptr,y,b,w,f,M,T);var c=x().getInt32(p+0,!0),d=x().getInt32(p+4,!0),u=x().getInt32(p+8,!0),o=x().getInt32(p+12,!0),l=c,h=d;if(o)throw l=0,h=0,F(u);return i=l,a=h,B(l,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,a,1)}}createInstance(n,t){let r,i;try{const h=m.__wbindgen_add_to_stack_pointer(-16),p=C(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,b=C(t,m.__wbindgen_export,m.__wbindgen_export2),w=S;m.testengine_createInstance(h,this.__wbg_ptr,p,y,b,w);var a=x().getInt32(h+0,!0),c=x().getInt32(h+4,!0),d=x().getInt32(h+8,!0),u=x().getInt32(h+12,!0),o=a,l=c;if(u)throw o=0,l=0,F(d);return r=o,i=l,B(o,l)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,i,1)}}deploy(n){let t,r;try{const l=m.__wbindgen_add_to_stack_pointer(-16),h=C(n,m.__wbindgen_export,m.__wbindgen_export2),p=S;m.testengine_deploy(l,this.__wbg_ptr,h,p);var i=x().getInt32(l+0,!0),a=x().getInt32(l+4,!0),c=x().getInt32(l+8,!0),d=x().getInt32(l+12,!0),u=i,o=a;if(d)throw u=0,o=0,F(c);return t=u,r=o,B(u,o)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}events(){let n,t;try{const o=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_events(o,this.__wbg_ptr);var r=x().getInt32(o+0,!0),i=x().getInt32(o+4,!0),a=x().getInt32(o+8,!0),c=x().getInt32(o+12,!0),d=r,u=i;if(c)throw d=0,u=0,F(a);return n=d,t=u,B(d,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}failJob(n,t,r){let i,a;try{const p=m.__wbindgen_add_to_stack_pointer(-16),y=C(n,m.__wbindgen_export,m.__wbindgen_export2),b=S,w=C(r,m.__wbindgen_export,m.__wbindgen_export2),f=S;m.testengine_failJob(p,this.__wbg_ptr,y,b,t,w,f);var c=x().getInt32(p+0,!0),d=x().getInt32(p+4,!0),u=x().getInt32(p+8,!0),o=x().getInt32(p+12,!0),l=c,h=d;if(o)throw l=0,h=0,F(u);return i=l,a=h,B(l,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,a,1)}}modify(n,t,r){let i,a;try{const p=m.__wbindgen_add_to_stack_pointer(-16),y=C(n,m.__wbindgen_export,m.__wbindgen_export2),b=S,w=C(t,m.__wbindgen_export,m.__wbindgen_export2),f=S,M=C(r,m.__wbindgen_export,m.__wbindgen_export2),T=S;m.testengine_modify(p,this.__wbg_ptr,y,b,w,f,M,T);var c=x().getInt32(p+0,!0),d=x().getInt32(p+4,!0),u=x().getInt32(p+8,!0),o=x().getInt32(p+12,!0),l=c,h=d;if(o)throw l=0,h=0,F(u);return i=l,a=h,B(l,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,a,1)}}constructor(){const n=m.testengine_new();return this.__wbg_ptr=n,Dn.register(this,this.__wbg_ptr,this),this}get now(){return m.testengine_now(this.__wbg_ptr)}reset(){m.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,r;try{const l=m.__wbindgen_add_to_stack_pointer(-16),h=C(n,m.__wbindgen_export,m.__wbindgen_export2),p=S;m.testengine_resolveIncident(l,this.__wbg_ptr,h,p);var i=x().getInt32(l+0,!0),a=x().getInt32(l+4,!0),c=x().getInt32(l+8,!0),d=x().getInt32(l+12,!0),u=i,o=a;if(d)throw u=0,o=0,F(c);return t=u,r=o,B(u,o)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}setVariables(n,t,r){let i,a;try{const p=m.__wbindgen_add_to_stack_pointer(-16),y=C(n,m.__wbindgen_export,m.__wbindgen_export2),b=S,w=C(t,m.__wbindgen_export,m.__wbindgen_export2),f=S;m.testengine_setVariables(p,this.__wbg_ptr,y,b,w,f,r);var c=x().getInt32(p+0,!0),d=x().getInt32(p+4,!0),u=x().getInt32(p+8,!0),o=x().getInt32(p+12,!0),l=c,h=d;if(o)throw l=0,h=0,F(u);return i=l,a=h,B(l,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,a,1)}}snapshot(){let n,t;try{const o=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_snapshot(o,this.__wbg_ptr);var r=x().getInt32(o+0,!0),i=x().getInt32(o+4,!0),a=x().getInt32(o+8,!0),c=x().getInt32(o+12,!0),d=r,u=i;if(c)throw d=0,u=0,F(a);return n=d,t=u,B(d,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}throwError(n,t,r){let i,a;try{const p=m.__wbindgen_add_to_stack_pointer(-16),y=C(n,m.__wbindgen_export,m.__wbindgen_export2),b=S,w=C(t,m.__wbindgen_export,m.__wbindgen_export2),f=S,M=C(r,m.__wbindgen_export,m.__wbindgen_export2),T=S;m.testengine_throwError(p,this.__wbg_ptr,y,b,w,f,M,T);var c=x().getInt32(p+0,!0),d=x().getInt32(p+4,!0),u=x().getInt32(p+8,!0),o=x().getInt32(p+12,!0),l=c,h=d;if(o)throw l=0,h=0,F(u);return i=l,a=h,B(l,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,a,1)}}tickNow(n){let t,r;try{const l=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_tickNow(l,this.__wbg_ptr,n);var i=x().getInt32(l+0,!0),a=x().getInt32(l+4,!0),c=x().getInt32(l+8,!0),d=x().getInt32(l+12,!0),u=i,o=a;if(d)throw u=0,o=0,F(c);return t=u,r=o,B(u,o)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}unassignUserTask(n){let t,r;try{const l=m.__wbindgen_add_to_stack_pointer(-16),h=C(n,m.__wbindgen_export,m.__wbindgen_export2),p=S;m.testengine_unassignUserTask(l,this.__wbg_ptr,h,p);var i=x().getInt32(l+0,!0),a=x().getInt32(l+4,!0),c=x().getInt32(l+8,!0),d=x().getInt32(l+12,!0),u=i,o=a;if(d)throw u=0,o=0,F(c);return t=u,r=o,B(u,o)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}updateRetries(n,t){let r,i;try{const h=m.__wbindgen_add_to_stack_pointer(-16),p=C(n,m.__wbindgen_export,m.__wbindgen_export2),y=S;m.testengine_updateRetries(h,this.__wbg_ptr,p,y,t);var a=x().getInt32(h+0,!0),c=x().getInt32(h+4,!0),d=x().getInt32(h+8,!0),u=x().getInt32(h+12,!0),o=a,l=c;if(u)throw o=0,l=0,F(d);return r=o,i=l,B(o,l)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,i,1)}}updateUserTask(n,t){let r,i;try{const h=m.__wbindgen_add_to_stack_pointer(-16),p=C(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,b=C(t,m.__wbindgen_export,m.__wbindgen_export2),w=S;m.testengine_updateUserTask(h,this.__wbg_ptr,p,y,b,w);var a=x().getInt32(h+0,!0),c=x().getInt32(h+4,!0),d=x().getInt32(h+8,!0),u=x().getInt32(h+12,!0),o=a,l=c;if(u)throw o=0,l=0,F(d);return r=o,i=l,B(o,l)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,i,1)}}}Symbol.dispose&&(mn.prototype[Symbol.dispose]=mn.prototype.free);function Pr(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(n,t){throw new Error(B(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const r=B(n,t);return zr(r)},__wbindgen_object_drop_ref:function(n){F(n)}}}}const Dn=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>m.__wbg_testengine_free(e,1));function zr(e){Ue===ye.length&&ye.push(ye.length+1);const n=Ue;return Ue=ye[n],ye[n]=e,n}function Rr(e){e<1028||(ye[e]=Ue,Ue=e)}let Ae=null;function x(){return(Ae===null||Ae.buffer.detached===!0||Ae.buffer.detached===void 0&&Ae.buffer!==m.memory.buffer)&&(Ae=new DataView(m.memory.buffer)),Ae}function B(e,n){return Fr(e>>>0,n)}let Fe=null;function We(){return(Fe===null||Fe.byteLength===0)&&(Fe=new Uint8Array(m.memory.buffer)),Fe}function Or(e){return ye[e]}let ye=new Array(1024).fill(void 0);ye.push(void 0,null,!0,!1);let Ue=ye.length;function C(e,n,t){if(t===void 0){const d=$e.encode(e),u=n(d.length,1)>>>0;return We().subarray(u,u+d.length).set(d),S=d.length,u}let r=e.length,i=n(r,1)>>>0;const a=We();let c=0;for(;c<r;c++){const d=e.charCodeAt(c);if(d>127)break;a[i+c]=d}if(c!==r){c!==0&&(e=e.slice(c)),i=t(i,r,r=c+e.length*3,1)>>>0;const d=We().subarray(i+c,i+r),u=$e.encodeInto(e,d);c+=u.written,i=t(i,r,c,1)>>>0}return S=c,i}function F(e){const n=Or(e);return Rr(e),n}let qe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});qe.decode();const Br=2146435072;let rn=0;function Fr(e,n){return rn+=n,rn>=Br&&(qe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),qe.decode(),rn=n),qe.decode(We().subarray(e,e+n))}const $e=new TextEncoder;"encodeInto"in $e||($e.encodeInto=function(e,n){const t=$e.encode(e);return n.set(t),{read:e.length,written:t.length}});let S=0,m;function Ur(e,n){return m=e.exports,Ae=null,Fe=null,m}async function $r(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(i){if(e.ok&&t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}else{const r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function t(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function Yr(e){if(m!==void 0)return m;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/pr-preview/pr-81/assets/nanobpmn_engine_bg-CIG0GEWz.wasm",import.meta.url));const n=Pr();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await $r(await e,n);return Ur(t)}let Ve=null;function Gr(e){return Ve||(Ve=Yr(void 0).then(()=>{}).catch(n=>{throw Ve=null,n})),Ve}function V(e){return JSON.parse(e)}class Qr{constructor(n){R(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return V(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,r,i){return JSON.parse(this.engine.activateJobs(n,t,r,i))}completeJob(n,t){return V(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:r,...i}=t??{};return V(this.engine.completeAgentJob(n,JSON.stringify(r??{}),JSON.stringify(i??{})))}failJob(n,t,r){return V(this.engine.failJob(n,t,r))}throwError(n,t,r){return V(this.engine.throwError(n,t,r))}updateRetries(n,t){return V(this.engine.updateRetries(n,t))}resolveIncident(n){return V(this.engine.resolveIncident(n))}setVariables(n,t,r){return V(this.engine.setVariables(n,t||"{}",r))}broadcastSignal(n,t){return V(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return V(this.engine.cancelInstance(n))}modify(n,t,r){return V(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(r??[])))}completeUserTask(n,t){return V(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,r){return V(this.engine.assignUserTask(n,t,r))}unassignUserTask(n){return V(this.engine.unassignUserTask(n))}updateUserTask(n,t){return V(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,r){return V(this.engine.correlateMessage(n,t,r||"{}"))}advanceTime(n){return V(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return V(this.engine.snapshot())}free(){this.engine.free()}}async function Jr(e){return await Gr(),new Qr(new mn)}class ut extends Error{constructor(t,r){super(t);R(this,"retries");this.name="JobFailure",this.retries=r==null?void 0:r.retries}}function Vr(e,n=[]){if(e.instances.filter(i=>!i.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const r=new Set(n);return e.jobs.some(i=>!r.has(i.jobType))?"unhandledJobs":e.userTasks.some(i=>i.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function Zr(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(r=>r.jobType))].filter(r=>!t.has(r)).sort()}async function Hr(e,n,t){let r;try{const i=await n(t);r=JSON.stringify(i??{})}catch(i){const a=i instanceof ut&&i.retries!==void 0?i.retries:Math.max(0,t.retries-1),c=i instanceof Error?i.message:String(i);e.failJob(t.key,a,c);return}e.completeJob(t.key,r)}async function Wr(e,n,t){let r;try{r=await n(t),JSON.stringify(r)}catch(i){const a=i instanceof ut&&i.retries!==void 0?i.retries:Math.max(0,t.retries-1),c=i instanceof Error?i.message:String(i);e.failJob(t.key,a,c);return}e.completeAgentJob(t.key,r)}async function qr(e,n,t={}){const r=t.maxJobsPerActivation??10,i=t.lockTimeoutMs??3e4,a=t.worker??"bojtos",c=t.agents??{};for(const p of Object.keys(c))if(p in n)throw new Error(`dispatchRound: job type "${p}" is registered as both a worker and an agent — register it as exactly one`);const d=[];for(const[p,y]of Object.entries(n))for(const b of e.activateJobs(p,r,i,a))d.push({handler:y,job:b});const u=[];for(const[p,y]of Object.entries(c))for(const b of e.activateJobs(p,r,i,a))u.push({handler:y,job:b});for(const{handler:p,job:y}of d)await Hr(e,p,y);for(const{handler:p,job:y}of u)await Wr(e,p,y);const o=e.snapshot(),l=d.length+u.length;if(l>0)return{snapshot:o,handled:l};const h=[...Object.keys(n),...Object.keys(c)];return{snapshot:o,handled:l,reason:Vr(o,h),unhandled:Zr(o,h)}}function Kr({bpmn:e}){const n=g.useRef(null),[t,r]=g.useState("loading"),[i,a]=g.useState(null),[c,d]=g.useState([]),[u,o]=g.useState(null),l=g.useRef(e),h=g.useRef(0),p=g.useRef(new Map),y=g.useCallback((I,N)=>{p.current.set(I,N)},[]),b=g.useCallback(I=>p.current.get(I),[]),w=g.useCallback((I,N)=>{const j=I.deploy(N);return l.current=N,p.current.clear(),d(j.processIds),o(null),a(null),j.processIds},[]);g.useEffect(()=>{let I=!1;return r("loading"),d([]),o(null),a(null),Jr().then(N=>{if(I){N.free();return}try{w(N,e)}catch(j){N.free(),a(String(j)),r("error");return}n.current=N,r("ready")}).catch(N=>{I||(a(String(N)),r("error"))}),()=>{var N;I=!0,(N=n.current)==null||N.free(),n.current=null,p.current.clear()}},[e]);const f=g.useCallback(I=>{const N=n.current;if(!N)return null;try{const j=I(N);return o(j),a(null),j}catch(j){return a(String(j)),null}},[]),M=g.useCallback((I,N)=>f(j=>j.createInstance(I,N)),[f]),T=g.useCallback((I,N)=>f(j=>j.completeUserTask(I,N)),[f]),L=g.useCallback(I=>f(N=>N.advanceTime(I)),[f]);function Y(I,N){const[j]=I.activateJobs(N,1,3e4,"manual-control");if(!j)throw new Error(`No waiting job of type "${N}" to resolve.`);return j}const H=g.useCallback((I,N)=>f(j=>{const K=Y(j,I);return j.completeJob(K.key,N)}),[f]),de=g.useCallback((I,N,j)=>f(K=>{const A=Y(K,I);return K.throwError(A.key,N,j)}),[f]),G=g.useCallback(async(I,N)=>{const j=n.current;if(!j)return null;const K=h.current;try{const A=await qr(j,I,N);return n.current!==j||h.current!==K?null:(o(A.snapshot),a(null),A)}catch(A){return n.current!==j||h.current!==K||(o(j.snapshot()),a(String(A))),null}},[]),ie=g.useCallback(()=>{const I=n.current;if(I){h.current++;try{I.reset(),w(I,l.current)}catch(N){a(String(N))}}},[w]),U=g.useCallback(I=>{const N=n.current;if(!N)return null;h.current++;try{return N.reset(),w(N,I)}catch(j){return a(String(j)),null}},[w]);return{phase:t,error:i,processIds:c,snapshot:u,createInstance:M,stepWorkers:G,completeUserTask:T,advanceTime:L,completeJobManually:H,throwJobError:de,reset:ie,redeploy:U,setRunImage:y,getRunImage:b}}function Xr(e,n){return e.slice(n)}function ei(e,n,t,r){const i=e.snapshot,a="⏸ waiting for a human — complete the task below to continue",c=i.userTasks.some(d=>d.state==="Created");if(e.handled>0){const d=i.activeElementIds.map(t),u=n.length?` via ${n.map(o=>`${t(o.from)} → ${t(o.to)}`).join(", ")}`:"";return i.completedInstances>=1?{kind:"done",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — ✅ process instance completed`}:c?{kind:"human",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — ${a}`}:{kind:"step",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — now at ${d.length?d.join(", "):"—"}`}}switch(e.reason){case"completed":return{kind:"done",text:"✅ process instance completed"};case"userTasks":return{kind:"human",text:a};case"timers":return{kind:"step",text:"⏱ waiting on a timer — advance the clock to continue"};case"messages":return{kind:"step",text:"✉ waiting on a message — correlate it to continue"};case"signals":return{kind:"step",text:"📶 waiting on a signal — broadcast it to continue"};case"incidents":return{kind:"error",text:"A job failed — incident on the diagram"};case"unhandledJobs":{const d=e.unhandled??[];return r&&d.length>0&&d.every(u=>r.has(u))?{kind:"human",text:a}:{kind:"error",text:`⏭ waiting on job type(s) with no worker registered: ${d.join(", ")}`}}case"idle":return{kind:"step",text:"Nothing to step — no instance is running."};default:return{kind:"step",text:e.reason?`Step blocked on an unrecognized reason: ${e.reason}`:"Nothing to step — no instance is running."}}}const ni="the Scripted or Endpoint brain";async function ti(){return await Ye()===null}async function Ye(e=ni){const n=navigator.gpu;if(!n)return`This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick ${e}.`;let t;try{t=await n.requestAdapter()}catch(r){return`WebGPU adapter request failed (${r instanceof Error?r.message:String(r)}). Try ${e} instead.`}return t?null:`This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick ${e} instead.`}const ri=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function mt(e){return pn.get(e)??{}}const pn=new Map;async function ii(){if(pn.size>0)return;const{prebuiltAppConfig:e}=await le(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)pn.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const en=ri.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...mt(e.id)})),pt=en[0].id;async function oi(){return await ii(),en.map(e=>({...e,...mt(e.id)}))}function gt(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function si(e,n=gt()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function ai(e){try{const{hasModelInCache:n}=await le(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function Xe(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function Ln(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class Ze{constructor(){R(this,"kind","browser");R(this,"model",null);R(this,"engine",null);R(this,"worker",null);R(this,"generation",0);R(this,"chat",async(n,t=512,r)=>{var a,c;const i=this.engine;if(!i||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const d=await i.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let u="";for await(const o of d){const l=((c=(a=o.choices[0])==null?void 0:a.delta)==null?void 0:c.content)??"";l&&(u+=l,r==null||r(l))}return u}catch(d){const u=d instanceof Error?d.message:String(d);throw Xe(u)?(this.teardown(),new Error(`The in-browser model stopped: ${Ln()}`)):d}})}async connect(n=pt,t){var u,o;const r=await Ye();if(r)throw new Error(r);if(this.engine&&this.model===n)return n;const i=++this.generation,a=l=>{i===this.generation&&(t==null||t({progress:l.progress??0,text:l.text??""}))};this.teardown();let c,d;try{const{CreateWebWorkerMLCEngine:l}=await le(async()=>{const{CreateWebWorkerMLCEngine:h}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:h}},[]);d=new Worker(new URL("/pr-preview/pr-81/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),c=await l(d,n,{initProgressCallback:a})}catch(l){if(d==null||d.terminate(),i!==this.generation)throw new Error("cancelled");const h=l instanceof Error?l.message:String(l);if(Xe(h))throw new Error(`Couldn't load ${n} in the browser (${h}). ${Ln()}`);const p=(o=(u=en.find(y=>y.id===n))==null?void 0:u.requiredFeatures)==null?void 0:o.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${h}). `+(p?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(i!==this.generation)throw c.unload().catch(()=>{}),d==null||d.terminate(),new Error("cancelled");return this.engine=c,this.worker=d??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const ht="http://localhost:11434/v1";function bt(){var n;const e=((n=globalThis.location)==null?void 0:n.hostname)??"";return e==="localhost"||e==="127.0.0.1"||e==="[::1]"||e==="::1"}function bn(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(r=>(r=globalThis.location)==null?void 0:r.origin)()??""}){let i;try{i=new URL(ft(e)).hostname}catch{return null}const a=c=>c==="localhost"||c==="127.0.0.1"||c==="::1"||c==="[::1]";return!a(i)||a(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function ft(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class Pn extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class ci{constructor(n=ht,t="",r=""){R(this,"kind","endpoint");R(this,"baseUrl");R(this,"model",null);R(this,"models",[]);R(this,"apiKey");R(this,"requestedModel");R(this,"chat",async(n,t=512,r)=>{var o,l,h;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const i=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!i.ok||!i.body){const p=await i.text().catch(()=>"");throw new Error(`chat/completions HTTP ${i.status} ${i.statusText}${p?` — ${p.slice(0,300)}`:""}`)}const a=i.body.getReader(),c=new TextDecoder;let d="",u="";for(;;){const{value:p,done:y}=await a.read();if(y)break;d+=c.decode(p,{stream:!0});let b;for(;(b=d.indexOf(`
`))>=0;){const w=d.slice(0,b).trim();if(d=d.slice(b+1),!w.startsWith("data:"))continue;const f=w.slice(5).trim();if(f==="[DONE]")continue;let M;try{M=JSON.parse(f)}catch{continue}M.model&&(this.model=M.model);const T=(o=M.choices)==null?void 0:o[0],L=((l=T==null?void 0:T.delta)==null?void 0:l.content)??((h=T==null?void 0:T.message)==null?void 0:h.content)??"";L&&(u+=L,r==null||r(L))}}return u});this.baseUrl=ft(n),this.apiKey=t.trim(),this.requestedModel=r.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(r){const i=bn(this.baseUrl);throw new Error(i??`Can't reach ${this.baseUrl} (${r instanceof Error?r.message:String(r)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new Pn(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(r=>r.id).filter(r=>!!r),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof Pn&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(r=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${r instanceof Error?r.message:String(r)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const r=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${r?` — ${r.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}const li=[{id:"onnx-community/Florence-2-base-ft",label:"Florence-2 base",downloadLabel:"~0.4 GB"},{id:"onnx-community/Florence-2-large-ft",label:"Florence-2 large (higher quality)",downloadLabel:"~1.6 GB"}],yt=li.map(e=>({...e,label:`${e.label} (${e.downloadLabel})`})),wt=yt[0].id,di="<OCR>",zn="UNKNOWN (scripted brain — connect the in-browser model to read a photo)";function ui(e,n){if(e)return typeof e=="function"?e(n):e[n]}class mi{constructor(n){R(this,"kind","scripted-vision");R(this,"model",null);R(this,"read",async(n,t,r)=>{const i=typeof n=="string"?ui(this.lookup,n)??zn:zn;return r==null||r(i),i});this.lookup=n}dispose(){}}function pi(e){return new mi(e)}class Rn{constructor(){R(this,"kind","browser-vision");R(this,"model",null);R(this,"modelHandle",null);R(this,"processor",null);R(this,"loadImage",null);R(this,"generation",0);R(this,"read",async(n,t,r)=>{const i=this.modelHandle,a=this.processor,c=this.loadImage;if(!i||!a||!c||!this.model)throw new Error("BrowserVisionBrain.read called before connect()");const d=t&&t.startsWith("<")?t:di,u=await c(n),o=a.construct_prompts(d),l=await a(u,o),h=await i.generate({...l,max_new_tokens:512,num_beams:1,do_sample:!1}),p=a.batch_decode(h,{skip_special_tokens:!1})[0],y=a.post_process_generation(p,d,u.size),b=gi(y,d);return r==null||r(b),b})}async connect(n=wt,t){var d,u;const r=await Ye("the scripted-vision fallback");if(r)throw new Error(r);if(this.modelHandle&&this.model===n)return n;const i=++this.generation,a=o=>{i===this.generation&&(t==null||t({progress:(o.progress??0)/100,text:o.file?`${o.status??"loading"} ${o.file}`:o.status??""}))};this.teardown();let c;try{const{Florence2ForConditionalGeneration:o,AutoProcessor:l,load_image:h}=await le(async()=>{const{Florence2ForConditionalGeneration:b,AutoProcessor:w,load_image:f}=await import("./transformers.web-C4GBcq2m.js");return{Florence2ForConditionalGeneration:b,AutoProcessor:w,load_image:f}},[]),p=await o.from_pretrained(n,{dtype:"fp32",device:"webgpu",progress_callback:a}),y=await l.from_pretrained(n);c={model:p,processor:y,loadImage:h}}catch(o){if(i!==this.generation)throw new Error("cancelled");const l=o instanceof Error?o.message:String(o);throw new Error(`Couldn't load ${n} in the browser (${l}). Try the smaller Florence-2 base model, check your connection, or use the scripted-vision fallback.`)}if(i!==this.generation)throw Promise.resolve((u=(d=c.model).dispose)==null?void 0:u.call(d)).catch(()=>{}),new Error("cancelled");return this.modelHandle=c.model,this.processor=c.processor,this.loadImage=c.loadImage,this.model=n,n}teardown(){var t;const n=this.modelHandle;this.modelHandle=null,this.processor=null,this.loadImage=null,this.model=null,Promise.resolve((t=n==null?void 0:n.dispose)==null?void 0:t.call(n)).catch(()=>{})}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}function gi(e,n){const t=e[n];if(typeof t=="string")return t.trim();if(t&&typeof t=="object"){const r=t.labels;return Array.isArray(r)?r.join(" ").trim():JSON.stringify(t)}return""}async function hi(){return await ti()?"browser":bt()?"endpoint":"scripted"}function bi(){const[e,n]=g.useState("scripted"),t=g.useRef(!1),[r,i]=g.useState("idle"),[a,c]=g.useState(null),[d,u]=g.useState(null),[o,l]=g.useState(null),[h,p]=g.useState(null),[y,b]=g.useState(null),[w,f]=g.useState(null),[M,T]=g.useState(pt),[L,Y]=g.useState(ht),[H,de]=g.useState(""),[G,ie]=g.useState(""),[U,I]=g.useState(null),N=g.useRef(null),[j,K]=g.useState("scripted-vision"),[A,W]=g.useState("idle"),[he,_e]=g.useState(null),[Re,ke]=g.useState(wt),[Ce,Me]=g.useState(null),[nn,Ee]=g.useState(null),[Oe,oe]=g.useState(null),[Te,je]=g.useState(null),q=g.useRef(null),xe=g.useRef(!1),ve=g.useCallback(k=>async(...D)=>{try{return await k.chat(...D)}catch(O){const Ne=O instanceof Error?O.message:String(O);throw k instanceof Ze&&Xe(Ne)&&(I(null),u(null),i("error"),c(Ne)),O}},[]),De=g.useCallback(k=>async(...D)=>{try{return await k.read(...D)}catch(O){const Ne=O instanceof Error?O.message:String(O);throw Xe(Ne)&&(je(null),Me(null),W("error"),_e(Ne)),O}},[]);g.useEffect(()=>{Ye().then(k=>{b(k),p(k===null),t.current||(t.current=!0,hi().then(n))}),Ye("the scripted-vision fallback").then(k=>{oe(k),xe.current||(xe.current=!0,K(k===null?"browser-vision":"scripted-vision"))})},[]),g.useEffect(()=>{let k=!1;return f(null),ai(M).then(D=>{k||f(D)}),()=>{k=!0}},[M]),g.useEffect(()=>()=>{var k;return(k=N.current)==null?void 0:k.dispose()},[]),g.useEffect(()=>()=>{var k;return(k=q.current)==null?void 0:k.dispose()},[]);const $=g.useCallback(k=>{n(k),i("idle"),c(null),u(null),l(null),I(null)},[]),ge=g.useCallback(k=>{var D,O;xe.current=!0,(D=q.current)==null||D.cancelConnect(),(O=q.current)==null||O.dispose(),q.current=null,K(k),W("idle"),_e(null),Me(null),Ee(null),je(null)},[]),ue=g.useCallback(()=>{var k;(k=N.current)==null||k.dispose(),N.current=null,I(null),u(null)},[]),be=g.useCallback(()=>{N.current instanceof Ze&&N.current.cancelConnect(),ue(),i("idle"),l(null),c(null)},[ue]),Ge=g.useCallback(async()=>{var k;if(e==="scripted"){I(null),i("ready");return}if(e==="endpoint"){const D=bn(L);if(D){ue(),c(D),i("error");return}}i("connecting"),c(null),l(null);try{if(e==="browser"){const D=N.current instanceof Ze?N.current:new Ze;N.current&&N.current!==D&&N.current.dispose(),N.current=D;const O=await D.connect(M,l);u(O),I(()=>ve(D)),f(!0)}else{(k=N.current)==null||k.dispose();const D=new ci(L,G,H);N.current=D;const O=await D.connect();u(O),I(()=>ve(D))}i("ready")}catch(D){const O=D instanceof Error?D.message:String(D);if(O==="cancelled")return;c(O),i("error"),I(null)}finally{l(null)}},[e,M,L,H,G,ue,ve]),X=g.useCallback(()=>{var k;(k=q.current)==null||k.dispose(),q.current=null,je(null),Me(null)},[]),Le=g.useCallback(()=>{var k;(k=q.current)==null||k.cancelConnect(),X(),W("idle"),Ee(null),_e(null)},[X]),Pe=g.useCallback(async()=>{if(j==="scripted-vision"){X(),W("ready"),_e(null);return}W("connecting"),_e(null),Ee(null);try{const k=q.current instanceof Rn?q.current:new Rn;q.current&&q.current!==k&&q.current.dispose(),q.current=k;const D=await k.connect(Re,Ee);Me(D),je(()=>De(k)),W("ready")}catch(k){const D=k instanceof Error?k.message:String(k);if(D==="cancelled")return;_e(D),W("error"),je(null),Me(null)}finally{Ee(null)}},[j,Re,X,De]);return{kind:e,setKind:$,status:r,error:a,modelInUse:d,progress:o,webgpu:h,webgpuReason:y,browserModelCached:w,cancelConnect:be,browserModel:M,setBrowserModel:T,endpointUrl:L,setEndpointUrl:Y,endpointModel:H,setEndpointModel:de,apiKey:G,setApiKey:ie,connect:Ge,chat:U,visionKind:j,setVisionKind:ge,visionStatus:A,visionError:he,visionModel:Re,setVisionModel:ke,visionModelInUse:Ce,visionProgress:nn,visionWebgpuReason:Oe,connectVision:Pe,cancelVisionConnect:Le,vision:Te}}const gn="#s=",fi=["scripted","browser","endpoint"];function yi(e){return typeof e=="string"&&fi.includes(e)}function wi(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,r={};return yi(t.brain)&&(r.brain=t.brain),r}}catch{}return{}}function _t(e=location.hash){if(!e.startsWith(gn))return{};let n;try{n=decodeURIComponent(e.slice(gn.length))}catch{return{}}return wi(n)}function _i(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":gn+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function Mi(e){const n={..._t(),...e},t=_i(n),r=new URL(location.href);r.hash=t,history.replaceState(history.state,"",r)}const On=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server. Ollama by default. Local pages only."}],Bn=[{kind:"scripted-vision",label:"Scripted",hint:"No model. The example's known plate is returned — deterministic and offline."},{kind:"browser-vision",label:"In-browser (WebGPU)",hint:"Reads the photo with a vision model on your GPU. First run downloads weights."}];function xi({brain:e,showText:n=!0,showVision:t=!1}){return s.jsxs("div",{className:"brain",children:[n&&s.jsx(vi,{brain:e}),n&&t&&s.jsx("hr",{className:"brain-divider"}),t&&s.jsx(Ni,{brain:e})]})}function vi({brain:e}){const n=On.find(o=>o.kind===e.kind),t=bn(e.endpointUrl),r=bt(),[i,a]=g.useState(en);g.useEffect(()=>{oi().then(a)},[]);const c=i.find(o=>o.id===e.browserModel),d=c?si(c,gt()):null,u=e.webgpu===!0?"browser":r&&e.webgpu===!1?"endpoint":null;return s.jsxs("div",{className:"brain-section",children:[s.jsxs("div",{className:"brain-kinds",children:[On.map(o=>s.jsxs(Z,{size:"sm",variant:e.kind===o.kind?"default":"secondary",onClick:()=>e.setKind(o.kind),children:[o.label,o.kind===u&&s.jsx(J,{variant:"info",className:"brain-recommended-badge",children:"recommended"})]},o.kind)),e.status==="ready"&&e.kind!=="scripted"&&s.jsx(J,{variant:"success",children:e.modelInUse??"connected"}),e.status==="connecting"&&s.jsx(J,{variant:"info",children:"connecting…"}),e.status==="error"&&s.jsx(J,{variant:"danger",children:"not connected"})]}),s.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&s.jsxs("div",{className:"brain-config",children:[s.jsxs("div",{className:"field",children:[s.jsx(ze,{htmlFor:"browser-model",children:"Model"}),s.jsxs(Kn,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[s.jsx(Xn,{id:"browser-model",children:s.jsx(et,{})}),s.jsx(nt,{children:i.map(o=>s.jsx(tt,{value:o.id,children:o.label},o.id))})]}),e.browserModelCached===!0&&s.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&s.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&s.jsxs(se,{variant:"destructive",children:[s.jsx(ae,{children:"No WebGPU in this browser"}),s.jsx(ce,{children:e.webgpuReason})]}),e.webgpu!==!1&&d&&s.jsxs(se,{variant:"destructive",children:[s.jsx(ae,{children:"This model may not fit in GPU memory"}),s.jsx(ce,{children:d})]})]}),e.kind==="endpoint"&&s.jsxs("div",{className:"brain-config",children:[s.jsxs("div",{className:"field",children:[s.jsx(ze,{htmlFor:"endpoint-url",children:"Endpoint"}),s.jsx(tn,{id:"endpoint-url",value:e.endpointUrl,onChange:o=>e.setEndpointUrl(o.target.value),disabled:e.status==="connecting"}),s.jsxs("p",{className:"field-hint",children:["Ollama allows ",s.jsx("code",{children:"localhost"})," origins out of the box; set"," ",s.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}),t&&s.jsxs(se,{variant:"destructive",children:[s.jsx(ae,{children:"A local server won't work from this URL"}),s.jsx(ce,{children:t})]})]}),s.jsxs("div",{className:"field",children:[s.jsx(ze,{htmlFor:"endpoint-model",children:"Model (blank = first served)"}),s.jsx(tn,{id:"endpoint-model",placeholder:"llama3.2:3b",value:e.endpointModel,onChange:o=>e.setEndpointModel(o.target.value),disabled:e.status==="connecting"})]}),s.jsxs("div",{className:"field",children:[s.jsx(ze,{htmlFor:"endpoint-key",children:"API key (optional)"}),s.jsx(tn,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:o=>e.setApiKey(o.target.value),disabled:e.status==="connecting"})]})]}),e.kind!=="scripted"&&s.jsxs("div",{className:"brain-actions",children:[s.jsx(Z,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting",children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&e.kind==="browser"&&s.jsx(Z,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&s.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.error&&s.jsxs(se,{variant:"destructive",children:[s.jsx(ae,{children:"Couldn't connect"}),s.jsx(ce,{children:e.error})]})]})}function Ni({brain:e}){const n=Bn.find(r=>r.kind===e.visionKind),t=e.webgpu===!0?"browser-vision":null;return s.jsxs("div",{className:"brain-section brain-vision",children:[s.jsx(ze,{children:"Vision (reads the image)"}),s.jsxs("div",{className:"brain-kinds",children:[Bn.map(r=>s.jsxs(Z,{size:"sm",variant:e.visionKind===r.kind?"default":"secondary",onClick:()=>e.setVisionKind(r.kind),children:[r.label,r.kind===t&&s.jsx(J,{variant:"info",className:"brain-recommended-badge",children:"recommended"})]},r.kind)),e.visionStatus==="ready"&&e.visionKind==="browser-vision"&&s.jsx(J,{variant:"success",children:e.visionModelInUse??"connected"}),e.visionStatus==="connecting"&&s.jsx(J,{variant:"info",children:"connecting…"}),e.visionStatus==="error"&&s.jsx(J,{variant:"danger",children:"not connected"})]}),s.jsx("p",{className:"field-hint",children:n.hint}),e.visionKind==="scripted-vision"&&e.webgpu===!1&&e.visionWebgpuReason&&s.jsxs(se,{variant:"destructive",children:[s.jsx(ae,{children:"No WebGPU in this browser"}),s.jsx(ce,{children:e.visionWebgpuReason})]}),e.visionKind==="browser-vision"&&s.jsxs("div",{className:"brain-config",children:[s.jsxs("div",{className:"field",children:[s.jsx(ze,{htmlFor:"vision-model",children:"Model"}),s.jsxs(Kn,{value:e.visionModel,onValueChange:e.setVisionModel,disabled:e.visionStatus==="connecting",children:[s.jsx(Xn,{id:"vision-model",children:s.jsx(et,{})}),s.jsx(nt,{children:yt.map(r=>s.jsx(tt,{value:r.id,children:r.label},r.id))})]}),s.jsx("p",{className:"field-hint",children:"Connecting downloads the weights once (size shown above), then caches them — every token is read on your GPU, no server."})]}),e.webgpu===!1&&e.visionWebgpuReason&&s.jsxs(se,{variant:"destructive",children:[s.jsx(ae,{children:"No WebGPU in this browser"}),s.jsx(ce,{children:e.visionWebgpuReason})]})]}),e.visionKind==="browser-vision"&&s.jsxs("div",{className:"brain-actions",children:[s.jsx(Z,{size:"sm",onClick:()=>void e.connectVision(),disabled:e.visionStatus==="connecting",children:e.visionStatus==="ready"?"Reconnect":"Connect"}),e.visionStatus==="connecting"&&s.jsx(Z,{size:"sm",variant:"secondary",onClick:e.cancelVisionConnect,children:"Cancel"}),e.visionProgress&&s.jsxs("span",{className:"field-hint",children:[Math.round(e.visionProgress.progress*100),"% —"," ",e.visionProgress.text]})]}),e.visionError&&s.jsxs(se,{variant:"destructive",children:[s.jsx(ae,{children:"Couldn't connect the vision brain"}),s.jsx(ce,{children:e.visionError})]})]})}function Ii({imageInput:e,value:n,onSelect:t,disabled:r=!1}){const[i,a]=g.useState(null),[c,d]=g.useState(!1),u=g.useRef(null),o=g.useId(),l=g.useId(),h=g.useCallback(b=>{a(URL.createObjectURL(b)),t({imageName:b.name,pixels:b})},[t]);g.useEffect(()=>{if(i)return()=>URL.revokeObjectURL(i)},[i]);const p=g.useCallback(b=>{const w=b==null?void 0:b[0];w&&w.type.startsWith("image/")&&h(w)},[h]),y=(n==null?void 0:n.imageId)!=null?e.seedImages.find(b=>b.id===n.imageId):void 0;return s.jsxs("div",{className:"image-input",children:[e.label&&s.jsx("p",{className:"field-hint",children:e.label}),s.jsx("p",{className:"image-input-label",id:o,children:"Seed photos"}),s.jsx("div",{className:"image-gallery",role:"group","aria-labelledby":o,children:e.seedImages.map(b=>{const w=(n==null?void 0:n.imageId)===b.id;return s.jsxs("button",{type:"button","aria-pressed":w,className:`image-thumb${w?" image-thumb--selected":""}`,disabled:r,title:b.label??b.id,onClick:()=>{a(null),u.current&&(u.current.value=""),t({imageId:b.id,pixels:b.file})},children:[s.jsx("img",{src:b.thumb??b.file,alt:b.label??b.id}),b.label&&s.jsx("span",{children:b.label})]},b.id)})}),s.jsx("label",{className:"image-input-label",htmlFor:l,children:"Or upload your own photo"}),s.jsxs("div",{className:`image-drop${c?" image-drop--over":""}`,onDragOver:b=>{b.preventDefault(),r||d(!0)},onDragLeave:()=>d(!1),onDrop:b=>{b.preventDefault(),d(!1),r||p(b.dataTransfer.files)},children:[s.jsx("input",{ref:u,id:l,type:"file",accept:"image/*",disabled:r,onChange:b=>p(b.target.files)}),s.jsx("p",{className:"field-hint",children:"Drag a photo here, or pick one. Uploading a photo the model has never seen is the proof this runs for real — nothing leaves your browser."})]}),(i||y)&&s.jsxs("div",{className:"image-preview",children:[s.jsx("img",{src:i??(y==null?void 0:y.file),alt:i?(n==null?void 0:n.imageName)??"uploaded photo":(y==null?void 0:y.label)??(y==null?void 0:y.id)??"selected photo"}),s.jsx("span",{className:"field-hint",children:i?`Uploaded: ${(n==null?void 0:n.imageName)??"your photo"}`:`Selected: ${(y==null?void 0:y.label)??(y==null?void 0:y.id)}`}),s.jsx("button",{type:"button",className:"image-clear-btn",disabled:r,onClick:()=>{a(null),u.current&&(u.current.value=""),t(null)},children:"Clear"})]})]})}function Mt(e){return typeof e=="object"&&e!==null}function Os(e){const n=new Set,t=r=>{Mt(r)&&(typeof r.key=="string"&&n.add(r.key),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function ki(e){const n={},t=r=>{Mt(r)&&(typeof r.key=="string"&&"defaultValue"in r&&(n[r.key]=r.defaultValue??""),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}const Ei="wdf:section:";function xt(e){return Ei+e}function Fn(e){try{const n=window.localStorage.getItem(xt(e));return n==="1"?!0:n==="0"?!1:void 0}catch{return}}function Ti(e,n){try{window.localStorage.setItem(xt(e),n?"1":"0")}catch{}}function ji(e,n=!0){const[t,r]=g.useState(()=>Fn(e)??n);g.useEffect(()=>{r(Fn(e)??n)},[e,n]);const i=g.useCallback(a=>{r(a),Ti(e,a)},[e]);return[t,i]}function fe({sectionId:e,title:n,description:t,defaultOpen:r=!0,className:i,children:a,...c}){const[d,u]=ji(e,r);return s.jsx(Lt,{className:["panel",i].filter(Boolean).join(" "),"data-tour":c["data-tour"],children:s.jsxs(Pt,{open:d,onOpenChange:u,children:[s.jsxs(zt,{className:"panel-trigger",children:[s.jsxs("span",{className:"panel-trigger-text",children:[s.jsx("span",{className:"panel-title",children:n}),t!=null&&s.jsx("span",{className:"panel-desc",children:t})]}),s.jsx(Rt,{className:"panel-chevron","aria-hidden":!0})]}),s.jsx(Ot,{children:s.jsx(Bt,{children:a})})]})})}function Si(e){return e.entries!==void 0}function Ai(e){const n=[];let t=null;for(const r of e)r.turn!==void 0?t&&t.turn===r.turn?t.entries.push(r):(t={turn:r.turn,entries:[r]},n.push(t)):(t=null,n.push(r));return n}function Un(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Ci({activation:e,result:n,labelFor:t}){const r=e.elementId??"";return s.jsxs("div",{className:"timeline-tool",children:[s.jsxs("div",{className:"timeline-tool-head",children:[s.jsx(J,{variant:"info",children:"tool"}),s.jsx("strong",{children:t(r)||r}),s.jsx("code",{children:r})]}),e.args!==void 0&&Object.keys(e.args).length>0&&s.jsxs("div",{className:"timeline-kv",children:[s.jsx("span",{className:"timeline-kv-label",children:"arguments"}),s.jsx("code",{children:Un(e.args)})]}),s.jsxs("div",{className:"timeline-kv",children:[s.jsx("span",{className:"timeline-kv-label",children:"returned"}),s.jsx("code",{children:n?Un(n.result):"— waiting for the job to complete —"})]})]})}function Di({group:e,labelFor:n}){const t=e.entries.find(o=>o.kind==="llm"),r=e.entries.filter(o=>o.kind==="agent"&&o.elementId),i=e.entries.filter(o=>o.kind==="vars"&&o.elementId),a=e.entries.filter(o=>o.kind==="agent"&&!o.elementId),c=e.entries.filter(o=>o.kind==="error"),d=new Set(r.map(o=>o.elementId)),u=e.entries.filter(o=>o.kind==="tool"||o.kind==="vars"&&o.elementId&&!d.has(o.elementId)).sort((o,l)=>o.id-l.id);return s.jsxs("div",{className:"timeline-turn",children:[s.jsxs("div",{className:"timeline-turn-head",children:[s.jsxs(J,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&s.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&s.jsx("blockquote",{className:"timeline-reply",children:t.text}),a.map(o=>s.jsx("div",{className:"timeline-note",children:o.text},o.id)),r.map(o=>s.jsx(Ci,{activation:o,result:i.find(l=>l.elementId===o.elementId),labelFor:n},o.id)),u.map(o=>s.jsxs("div",{className:`log-line log-${o.kind}`,children:[o.pending?"⏳ ":"",o.text]},o.id)),c.map(o=>s.jsxs("div",{className:"timeline-error",children:["⚠ ",o.text]},o.id))]})}function Li({log:e,elementStats:n=[],incidents:t=[],labelFor:r=i=>i}){const i=g.useMemo(()=>Ai(e),[e]),[a,c]=g.useState(!1),d=g.useRef(null);g.useEffect(()=>{const o=d.current;o&&(o.scrollTop=o.scrollHeight)},[i]);const u=()=>{var h;const o={log:e.map(({id:p,...y})=>y),elementStats:n,incidents:t},l=JSON.stringify(o,null,2);(h=navigator.clipboard)!=null&&h.writeText&&navigator.clipboard.writeText(l).then(()=>{c(!0),setTimeout(()=>c(!1),1500)}).catch(()=>{})};return s.jsxs(fe,{sectionId:"activity",className:"grow",title:"Activity",description:"Agent turns, model replies, and tool calls — read top to bottom as a story.",children:[s.jsx("div",{className:"timeline-toolbar",children:s.jsx(Z,{variant:"secondary",size:"sm",onClick:u,children:a?"Copied!":"Copy run as JSON"})}),s.jsx("div",{className:"timeline",ref:d,children:i.length===0?s.jsx("div",{className:"log-empty",children:"Press Run or Step to start."}):i.map(o=>Si(o)?s.jsx(Di,{group:o,labelFor:r},`turn-${o.turn}-${o.entries[0].id}`):s.jsxs("div",{className:`log-line log-${o.kind}`,children:[o.pending?"⏳ ":"",o.text]},o.id))}),(n.length>0||t.length>0)&&s.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&s.jsxs("div",{className:"timeline-stats",children:[s.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),s.jsx("ul",{children:n.filter(o=>o.completed>0||(o.active??0)>0).map(o=>s.jsxs("li",{children:[s.jsx("code",{children:r(o.elementId)||o.elementId})," ","completed ",o.completed,o.active?`, ${o.active} active`:""]},o.elementId))})]}),t.length>0&&s.jsxs("div",{className:"timeline-incidents",children:[s.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),s.jsx("ul",{children:t.map((o,l)=>s.jsxs("li",{children:[s.jsx("code",{children:r(o.elementId)||o.elementId})," —"," ",o.reason]},`${o.elementId}-${l}`))})]})]})]})}const Ie={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function $n(e){return`[data-tour="${e}"]`}function Pi(e=location.search){return new URLSearchParams(e).get("tour")}function zi(e,n){var t;return((t=e.elementStats.find(r=>r.elementId===n))==null?void 0:t.completed)??0}function Ri(e,n){return!e||e.kind==="click"||!n?!1:e.kind==="activeElement"?n.activeElementIds.includes(e.elementId):zi(n,e.elementId)>=(e.atLeast??1)}function Oi(e){return"anchor"in e?$n(e.anchor):`${$n(Ie.diagram)} [data-element-id="${Bi(e.elementId)}"]`}function Bi(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function Fi(e){return e.map(n=>{const t=!!n.waitFor&&n.waitFor.kind!=="click";return{element:Oi(n.target),popover:{title:n.title,description:t?`${n.description} (continues automatically once you reach that point — or use Next to skip ahead)`:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}})}async function Ui(e,n={}){var a;const[{driver:t}]=await Promise.all([le(()=>import("./driver.js-bj_ppY-Q.js"),[]),le(()=>Promise.resolve({}),__vite__mapDeps([0]))]),r=Fi(e),i=t({steps:r,showProgress:!0,allowClose:!0,skipMissingElement:!0,onHighlighted:(c,d,{index:u})=>{var o;u!==void 0&&((o=n.onIndexChange)==null||o.call(n,u))},onDestroyed:()=>{var c;(c=n.onDestroyed)==null||c.call(n)}});return i.drive(),(a=n.onIndexChange)==null||a.call(n,i.getActiveIndex()??0),{moveNext:()=>i.moveNext(),activeIndex:()=>i.getActiveIndex()??-1,destroy:()=>i.destroy()}}const $i=300;function Yi(e,n){const[t,r]=g.useState(!1),i=g.useRef(null),a=g.useRef(0),c=g.useRef(-1),d=g.useRef(null),u=g.useRef(n);g.useEffect(()=>{u.current=n},[n]);const o=g.useCallback(()=>{d.current!==null&&(clearInterval(d.current),d.current=null)},[]),l=g.useRef(0),h=g.useCallback(()=>{var y;l.current+=1,o(),(y=i.current)==null||y.destroy(),i.current=null,r(!1)},[o]),p=g.useCallback(()=>{if(!e||e.steps.length===0||i.current)return;const y=l.current+=1;Ui(e.steps,{onIndexChange:b=>{a.current=b},onDestroyed:()=>{o(),i.current=null,r(!1)}}).then(b=>{if(y!==l.current){b.destroy();return}i.current=b,r(!0),d.current=setInterval(()=>{const w=a.current;if(w===c.current)return;const f=e.steps[w];f&&Ri(f.waitFor,u.current())&&(c.current=w,b.moveNext())},$i)})},[e,o]);return g.useEffect(()=>h,[h]),{active:t,start:p,stop:h}}const on=650,sn="__agent__",Yn="__model__",Gn="__template__:",Gi=g.lazy(async()=>{await Promise.all([le(()=>Promise.resolve({}),__vite__mapDeps([1])),le(()=>Promise.resolve({}),__vite__mapDeps([2]))]);const{RuntimeDiagram:e}=await le(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-B2IYfHo7.js");return{RuntimeDiagram:n}},__vite__mapDeps([3,4,5]));return{default:e}}),an=g.lazy(()=>le(()=>import("./MonacoEditor-BAzVEveo.js").then(e=>e.M),__vite__mapDeps([6,4,7]))),Qi=g.lazy(()=>le(()=>import("./vendor-modeler-Bqs2wBKd.js"),__vite__mapDeps([8,4,5,9,10,11,12,1,2]))),Qn=g.lazy(async()=>{const{FormRenderer:e}=await le(async()=>{const{FormRenderer:n}=await import("./FormRenderer-BS5I6S6E.js");return{FormRenderer:n}},__vite__mapDeps([13,4,11,9,10,14]));return{default:e}});function cn(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function Ji({example:e,initialBrainKind:n,initialTourId:t}){var yn,wn,_n,Mn,xn,vn,Nn,In;const[r,i]=g.useState(e.bpmn),a=bi(),[c,d]=g.useState(null);g.useEffect(()=>{n&&n!==a.kind&&a.setKind(n)},[]),g.useEffect(()=>{Mi({brain:a.kind})},[a.kind]);const[u,o]=g.useState(()=>Object.fromEntries(e.handlers.map(_=>[_.elementId,_.source]))),[l,h]=g.useState(e.scriptedAgent??""),[p,y]=g.useState(()=>Ke(e.templates)),b=g.useMemo(()=>Ir(e,u,r,p),[e,u,r,p]),w=b.model,f=Kr({bpmn:b.resolvedBpmn}),M=Yi(e.tour,()=>f.snapshot);g.useEffect(()=>{var _;t&&((_=e.tour)==null?void 0:_.id)===t&&M.start()},[]);const T=w.startFormId?((yn=e.forms)==null?void 0:yn[w.startFormId])??null:null,[L,Y]=g.useState(()=>({...e.seed,...T?ki(T):{}})),[H,de]=g.useState(w.agent?sn:((wn=e.handlers[0])==null?void 0:wn.elementId)??""),[G,ie]=g.useState(!1),[U,I]=g.useState(!1),[N,j]=g.useState(null),[K,A]=g.useState([]),[W,he]=g.useState({}),[_e,Re]=g.useState(!1),ke=g.useRef(null),[Ce,Me]=g.useState({}),[nn,Ee]=g.useState(!1),Oe=g.useRef(null),oe=g.useRef(!1),Te=g.useRef(0),je=g.useRef(0),q=g.useRef({current:void 0}),xe=g.useRef({}),ve=g.useRef({}),De=g.useMemo(()=>{const _=new Map;for(const v of w.processes){for(const E of v.tasks)_.set(E.elementId,E.label);for(const E of v.agents){_.set(E.elementId,E.label);for(const P of E.tools)_.set(P.elementId,P.label)}for(const E of v.userTasks)_.set(E.elementId,E.label)}return v=>_.get(v)??v},[w]),$=g.useCallback(_=>{A(v=>{if(_.key){const E=v.findIndex(P=>P.key===_.key);if(E>=0){const P=[...v];return P[E]={...P[E],..._},P}}return[...v,{..._,id:je.current++}].slice(-80)})},[]),ge=g.useMemo(()=>{var _;return((_=f.snapshot)==null?void 0:_.userTasks.find(v=>v.state==="Created"))??null},[f.snapshot]),ue=g.useMemo(()=>{const _=w.processes.flatMap(E=>E.tasks),v=new Map;for(const E of e.handlers){if(!E.manualControl)continue;const P=_.find(z=>z.elementId===E.elementId);P&&v.set(P.jobType,{...E.manualControl,elementId:E.elementId})}return v},[e.handlers,w]),be=g.useMemo(()=>{if(!f.snapshot)return null;for(const _ of f.snapshot.jobs){const v=ue.get(_.jobType);if(v&&_.state==="Created")return{job:_,control:v}}return null},[f.snapshot,ue]),Ge=g.useMemo(()=>{if(!w.agent||!f.snapshot)return[];const _=new Map(f.snapshot.elementStats.map(v=>[v.elementId,v.completed]));return w.agent.tools.filter(v=>(_.get(v.elementId)??0)===0)},[w.agent,f.snapshot]),X=ge?w.userTasks.find(_=>_.elementId===ge.elementId):void 0,Le=X!=null&&X.formId?((_n=e.forms)==null?void 0:_n[X.formId])??null:null,Pe=g.useCallback(async(_,v,E,P)=>{var me;let z=E,ee=0;for(;Te.current===P&&z&&z.completedInstances<1&&ee++<80;){const Q=await f.stepWorkers(_,{agents:v});if(Te.current!==P)return z;z=(Q==null?void 0:Q.snapshot)??z;const ne=(me=z.instances[0])==null?void 0:me.variables;if(ne&&he({...ne}),z.userTasks.some(te=>te.state==="Created")){$({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!Q){$({kind:"error",text:"▶ run stopped — no dispatch round was returned"});break}if(Q.handled===0)break;await new Promise(te=>setTimeout(te,on))}return z&&z.completedInstances>=1?$({kind:"done",text:"✅ process instance completed"}):z&&z.incidentElementIds.length>0&&$({kind:"error",text:"A job failed — incident on the diagram"}),z},[f,$]),k=g.useCallback(async _=>{var z,ee,me;if(!be||oe.current)return;const{job:v,control:E}=be,P=++Te.current;oe.current=!0,ie(!0);try{let Q,ne;if(_==="complete")Q=f.completeJobManually(v.jobType,"{}"),ne="  ↳ completed normally";else if(E.action.kind==="timer"){const te=((ee=(z=f.snapshot)==null?void 0:z.timers[0])==null?void 0:ee.dueInMs)??0;Q=f.advanceTime(Math.max(te,0)+1),ne="  ↳ advanced the clock — timer fired"}else{const{errorCode:te,message:re}=E.action;Q=f.throwJobError(v.jobType,te,re),ne=`  ↳ threw BPMN error ${te}: ${re}`}if(Q){$({kind:"vars",text:ne,elementId:v.elementId});const te=(me=Q.instances[0])==null?void 0:me.variables;te&&he({...te}),await new Promise(re=>setTimeout(re,on)),await Pe(xe.current,ve.current,Q,P)}else $({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:v.elementId})}finally{oe.current=!1,ie(!1)}},[be,f,$,Pe]),D=g.useCallback(async()=>{var te;let _=null;try{w.agent&&l.trim()&&(_=pr(l))}catch(re){return j(re instanceof Error?re.message:String(re)),null}q.current={current:void 0};let v;if(e.imageInput){const re=a.vision;v={read:re??pi(e.scriptedVision).read,live:!!re,resolve:pe=>f.getRunImage(pe)}}const E=br(w,b.handlers,$,q.current,v);for(const re of ue.keys())delete E[re];const P={};if(w.agents.length>0){if(a.kind!=="scripted"&&a.chat){const Se=new Map;for(const pe of w.agents)Se.set(pe.jobType,[...Se.get(pe.jobType)??[],pe]);for(const[pe,Be]of Se)P[pe]=Lr(Be,a.chat,$,{turnRef:q.current,requiredTools:e.requiredTools})}else if(_&&w.agent){const Se=w.agent.elementId;P[w.agent.jobType]=async pe=>{if(pe.elementId!==Se)throw new Error(`No scripted agent handler for "${pe.elementId}" — only "${Se}" (the primary process's first agent host) is driven by the scripted brain. Use a live brain to exercise more than one host.`);const Be=await _(pe),jt=(Be.activateElements??[]).map(St=>St.elementId).join(", ");return $({kind:"agent",text:Be.completionConditionFulfilled?"🤖 scripted agent: done":`🤖 scripted agent: calling ${jt||"(nothing)"}`}),Be}}}A([]),Me({});const z={...e.seed,...L,...or(e.imageInput?c:null)};he(z),xe.current=E,ve.current=P;const ee=f.redeploy(r),me=(ee==null?void 0:ee[0])??w.processId;$({kind:"start",text:`Starting "${me}" — ${w.agent?a.kind==="scripted"||!a.chat?"scripted brain":`live brain (${a.modelInUse??a.kind})`:"no agent in this model"}`});const Q=f.createInstance(me,JSON.stringify(z)),ne=(te=Q==null?void 0:Q.instances[0])==null?void 0:te.key;return e.imageInput&&c&&ne&&f.setRunImage(ne,c),{workers:E,agents:P,snap:Q}},[f,e,b,r,l,L,c,w,a,$,ue]),O=!!f.snapshot&&f.snapshot.completedInstances<1,Ne=!O&&!!T&&!_e,Nt=g.useCallback(async()=>{if(!(f.phase!=="ready"||oe.current||U||b.hasErrors)){oe.current=!0,ie(!0);try{let _=xe.current,v=ve.current,E=f.snapshot;const P=++Te.current;if(!O){if(ke.current&&!ke.current.validate())return;j(null);const z=await D();if(!z)return;_=z.workers,v=z.agents,E=z.snap,await new Promise(ee=>setTimeout(ee,on))}await Pe(_,v,E,P)}finally{oe.current=!1,ie(!1)}}},[f,U,b.hasErrors,O,D,Pe]),It=g.useCallback(async()=>{var _;if(!(f.phase!=="ready"||oe.current||U||b.hasErrors)){oe.current=!0,I(!0);try{let v=xe.current,E=ve.current,P=f.snapshot;if(!O){if(ke.current&&!ke.current.validate())return;j(null);const ne=await D();if(!ne)return;v=ne.workers,E=ne.agents,P=ne.snap}if(!P||P.completedInstances>=1)return;const z=P.takenSequenceFlows.length,ee=await f.stepWorkers(v,{agents:E});if(!ee){$({kind:"error",text:"⏭ step failed — no dispatch round was returned"});return}const me=(_=ee.snapshot.instances[0])==null?void 0:_.variables;me&&he({...me});const Q=Xr(ee.snapshot.takenSequenceFlows,z);$(ei(ee,Q,De,ue))}finally{oe.current=!1,I(!1)}}},[f,U,b.hasErrors,O,D,$,De,ue]),kt=g.useCallback(()=>{oe.current=!1,Te.current++,ie(!1),I(!1),f.reset(),A([]),he({})},[f]),Et=g.useCallback(()=>{if(!ge||Oe.current&&!Oe.current.validate())return;const _=f.completeUserTask(ge.key,JSON.stringify(Ce));$({kind:"human",text:`👤 ${cn(Ce)}`}),_&&_.completedInstances>=1&&$({kind:"done",text:"✅ process instance completed"})},[ge,Ce,f,$]),Tt=g.useMemo(()=>{var _,v;return f.phase==="loading"?s.jsx(J,{variant:"neutral",children:"Booting engine…"}):f.phase==="error"?s.jsx(J,{variant:"danger",children:"Engine error"}):G?s.jsx(J,{variant:"info",children:"Running…"}):U?s.jsx(J,{variant:"info",children:"Stepping…"}):(((_=f.snapshot)==null?void 0:_.incidentElementIds.length)??0)>0?s.jsx(J,{variant:"danger",children:"Incident"}):ge?s.jsx(J,{variant:"warning",children:"Waiting for a human"}):(((v=f.snapshot)==null?void 0:v.completedInstances)??0)>=1?s.jsx(J,{variant:"success",children:"Completed"}):f.snapshot?s.jsx(J,{variant:"warning",children:"Paused"}):s.jsx(J,{variant:"neutral",children:"Ready"})},[f.phase,f.snapshot,G,U,ge]);return s.jsxs("div",{className:"runner",children:[s.jsxs("section",{className:"intro",children:[s.jsx("h1",{children:e.title}),s.jsx("p",{children:e.blurb}),s.jsxs("div",{className:"controls",children:[s.jsx(Z,{"data-tour":Ie.runButton,onClick:()=>void Nt(),disabled:f.phase!=="ready"||G||U||b.hasErrors||Ne,children:"▶ Run"}),s.jsx(Z,{variant:"secondary",onClick:()=>void It(),disabled:f.phase!=="ready"||G||U||b.hasErrors||Ne||(((Mn=f.snapshot)==null?void 0:Mn.completedInstances)??0)>=1,children:"⏭ Step"}),s.jsx(Z,{variant:"secondary",onClick:kt,disabled:f.phase!=="ready"||U,children:"↺ Reset"}),e.tour&&s.jsx(Z,{variant:"secondary",onClick:M.start,disabled:M.active,children:M.active?"Touring…":`🧭 ${e.tour.label}`}),Tt]}),f.phase==="error"&&s.jsxs(se,{variant:"destructive",children:[s.jsx(ae,{children:"Engine error"}),s.jsx(ce,{children:f.error})]}),N&&s.jsxs(se,{variant:"destructive",children:[s.jsx(ae,{children:"Code didn't compile"}),s.jsx(ce,{children:N})]}),b.hasErrors&&s.jsxs(se,{variant:"destructive",children:[s.jsx(ae,{children:"Run is disabled — the diagram has unresolved references"}),s.jsx(ce,{children:s.jsx("ul",{className:"diagnostics",children:b.diagnostics.filter(_=>_.severity==="error").map((_,v)=>s.jsx("li",{children:_.message},v))})})]}),!b.hasErrors&&b.diagnostics.length>0&&s.jsxs(se,{children:[s.jsx(ae,{children:"Heads up"}),s.jsx(ce,{children:s.jsx("ul",{className:"diagnostics",children:b.diagnostics.map((_,v)=>s.jsx("li",{children:_.message},v))})})]})]}),s.jsxs("div",{className:"grid",children:[s.jsxs("div",{className:"col",children:[s.jsx(fe,{sectionId:"process","data-tour":Ie.diagram,title:"Process",description:`${w.processName} — live token (green), incidents (red).`,children:s.jsx(g.Suspense,{fallback:s.jsx("div",{className:"diagram-fallback",children:f.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:s.jsx(Gi,{xml:b.resolvedBpmn,activeIds:((xn=f.snapshot)==null?void 0:xn.activeElementIds)??[],incidentIds:((vn=f.snapshot)==null?void 0:vn.incidentElementIds)??[],className:"diagram"})})}),ge&&s.jsxs(fe,{sectionId:"human-task",title:(X==null?void 0:X.label)??"Human task",description:Le?`Rendered from the model's form "${X==null?void 0:X.formId}".`:"This task has no linked form — complete it with no variables.",children:[Ge.length>0&&s.jsxs(se,{variant:"destructive",children:[s.jsx(ae,{children:"The agent didn't finish its checks"}),s.jsxs(ce,{children:["It completed without running"," ",Ge.map(_=>_.label||_.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),Le&&s.jsx(g.Suspense,{fallback:s.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:s.jsx(Qn,{ref:Oe,schema:Le,values:Ce,onChange:(_,v)=>Me(E=>({...E,[_]:v})),context:W,onValidityChange:Ee})}),s.jsx(Z,{onClick:Et,disabled:!!Le&&!nn,children:"Complete task"})]}),be&&s.jsx(fe,{sectionId:"manual-job",title:be.control.label,description:"This job is held here on purpose — pick how it resolves.",children:s.jsxs("div",{className:"controls",children:[s.jsx(Z,{onClick:()=>void k("complete"),disabled:G||U,children:be.control.completeLabel??"✅ Complete normally"}),s.jsx(Z,{variant:"secondary",onClick:()=>void k("action"),disabled:G||U,children:be.control.action.label})]})}),s.jsxs("div",{className:"row",children:[s.jsx(fe,{sectionId:"variables",className:"grow","data-tour":Ie.variablesPanel,title:"Variables",description:"The instance payload, live.",children:s.jsx("pre",{className:"vars",children:cn(W,2)})}),s.jsx(Li,{log:K,elementStats:(Nn=f.snapshot)==null?void 0:Nn.elementStats,incidents:(In=f.snapshot)==null?void 0:In.incidents,labelFor:De})]})]}),s.jsxs("div",{className:"col",children:[(w.agent||e.imageInput)&&s.jsx(fe,{sectionId:"brain","data-tour":Ie.brainPanel,title:"Brain",description:w.agent?`What drives “${w.agent.label}”. The model recommends; the process governs.`:"What reads the image. The model recommends; the process governs.",children:s.jsx(xi,{brain:a,showText:!!w.agent,showVision:!!e.imageInput})}),s.jsxs(fe,{sectionId:"start",title:"Start",description:w.startFormId?`The model's start form "${w.startFormId}".`:e.imageInput?"Pick a seed photo or upload your own to read.":"The starting payload.",children:[e.imageInput&&s.jsx(Ii,{imageInput:e.imageInput,value:c,onSelect:d,disabled:G}),e.scenarios&&s.jsx("div",{className:"scenarios",children:e.scenarios.map(_=>s.jsx(Z,{size:"sm",variant:"secondary",disabled:G,onClick:()=>Y(v=>({...v,..._.variables})),children:_.label},_.label))}),T?s.jsx(g.Suspense,{fallback:s.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:s.jsx(Qn,{ref:ke,schema:T,values:L,onChange:(_,v)=>Y(E=>({...E,[_]:v})),disabled:G,onValidityChange:Re})}):s.jsx("pre",{className:"vars",children:cn(L,2)})]}),s.jsx(fe,{sectionId:"code",className:"editors","data-tour":Ie.codePanel,title:"Code",description:"One handler per BPMN element. Return variables to merge, or throw to fail the job.",children:s.jsx(g.Suspense,{fallback:s.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:s.jsxs(Ft,{value:H,onValueChange:de,children:[s.jsxs(Ut,{children:[s.jsx(Qe,{value:Yn,children:"model"}),w.agent&&s.jsx(Qe,{value:sn,children:"agent (scripted)"}),e.handlers.map(_=>{var v;return s.jsx(Qe,{value:_.elementId,children:((v=w.tasks.find(E=>E.elementId===_.elementId))==null?void 0:v.label)??_.elementId},_.elementId)}),Object.keys(p).map(_=>s.jsx(Qe,{value:Gn+_,children:_},_))]}),s.jsxs(Je,{value:Yn,children:[s.jsxs("div",{className:"editor-meta",children:[s.jsx("strong",{children:"Model"}),s.jsx("code",{children:"edit the diagram visually — Run re-checks it below"}),s.jsx(Z,{variant:"secondary",size:"sm",onClick:()=>i(e.bpmn),disabled:r===e.bpmn,children:"Revert to original"})]}),s.jsx(Qi,{value:r,onChange:i})]}),w.agent&&s.jsxs(Je,{value:sn,children:[s.jsxs("div",{className:"editor-meta",children:[s.jsx("strong",{children:w.agent.label}),s.jsx("code",{children:a.kind==="scripted"||!a.chat?"in use":"unused — a live brain is connected"})]}),s.jsx("div",{className:"editor-wrap",children:s.jsx(an,{height:"360px",defaultLanguage:"javascript",value:l,onChange:_=>h(_??""),options:ln})})]}),e.handlers.map(_=>{var v;return s.jsxs(Je,{value:_.elementId,children:[s.jsxs("div",{className:"editor-meta",children:[s.jsx("strong",{children:((v=w.tasks.find(E=>E.elementId===_.elementId))==null?void 0:v.label)??_.elementId}),s.jsx("code",{children:_.standsInFor??_.elementId})]}),s.jsx("div",{className:"editor-wrap",children:s.jsx(an,{height:"360px",defaultLanguage:"javascript",value:u[_.elementId],onChange:E=>o(P=>({...P,[_.elementId]:E??""})),options:ln})})]},_.elementId)}),Object.keys(p).map(_=>s.jsxs(Je,{value:Gn+_,children:[s.jsxs("div",{className:"editor-meta",children:[s.jsx("strong",{children:_}),s.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+_+"}}"]})]}),s.jsx("div",{className:"editor-wrap",children:s.jsx(an,{height:"360px",defaultLanguage:"markdown",value:p[_],onChange:v=>y(E=>Ke(E,{[_]:v??""})),options:ln})})]},_))]})})}),w.agent&&s.jsx(fe,{sectionId:"tools",title:"Tools, as the model sees them",description:s.jsxs(s.Fragment,{children:["Read from the diagram — element name, documentation, and every",s.jsx("code",{children:" fromAi(…)"})," argument."]}),children:s.jsx("ul",{className:"tool-list",children:w.agent.tools.map(_=>s.jsxs("li",{children:[s.jsx("code",{children:_.elementId}),s.jsxs("span",{children:[" — ",_.documentation||_.label]}),_.args.length>0&&s.jsx("ul",{children:_.args.map(v=>s.jsxs("li",{children:[s.jsxs("code",{children:[v.name,": ",v.type]})," ","— ",v.description]},v.name))})]},_.elementId))})})]})]})]})}const ln={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},Vi=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,Zi=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,Hi={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:Ie.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"},waitFor:{kind:"activeElement",elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"},waitFor:{kind:"elementCompleted",elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:Ie.variablesPanel}}],successEvent:{kind:"instanceCompleted"}},Wi=`<?xml version="1.0" encoding="UTF-8"?>
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
`,qi="Camunda Cloud",Ki="8.10.0",Xi={name:"Camunda Web Modeler",version:"9b5d5ef"},eo=19,no="seed-export-shipment-ready",to=[{text:"# Use a predefined scenario...",type:"text",layout:{row:"Row_04pl1rt",columns:null},id:"Field_0a6kzzq"},{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Use pre-defined sceanrio - to use leave Shipment notes below blank.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{text:`The following shipments notes are used:
* Likely cleared: SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53.
* Likely flagged: SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1.`,type:"text",layout:{row:"Row_1h31mub",columns:null},id:"Field_0j1vwd9"},{text:"# ...or hand in your own data",type:"text",layout:{row:"Row_1wu4opr",columns:null},id:"Field_12u5gzd"},{label:"Shipment notes",description:"If set, overrides the scenario above. Leave blank to use the scenario selected above. The agent reads this to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],ro="default",io={executionPlatform:qi,executionPlatformVersion:Ki,exporter:Xi,schemaVersion:eo,id:no,components:to,type:ro},oo="Camunda Cloud",so="8.10.0",ao={name:"Camunda Web Modeler",version:"9b5d5ef"},co=19,lo="seed-export-compliance-review",uo=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],mo="default",po={executionPlatform:oo,executionPlatformVersion:so,exporter:ao,schemaVersion:co,id:lo,components:uo,type:mo},go=Object.assign({"./prompts/system-prompt.md":Vi,"./prompts/user-prompt.md":Zi}),ho=Ke(Object.fromEntries(Object.entries(go).map(([e,n])=>[yr(e),n.trimEnd()]))),Jn="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",bo="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",fo=`async (job) => {
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
}`,yo=`async (job, { text, sleep, trace }) => {
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
}`,wo=`async (job, { text, sleep, trace }) => {
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
}`,_o=`async (job, { num, sleep }) => {
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
}`,Mo=`async (job, { text, trace }) => {
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
}`,xo=`async (job, { sleep }) => {
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
}`,vo={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:Wi,forms:{"seed-export-shipment-ready":io,"seed-export-compliance-review":po},seed:{scenario:Jn,shipmentNotes:""},scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:Jn,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:bo,shipmentNotes:""}}],scriptedAgent:fo,templates:ho,tour:Hi,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:yo},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:wo},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:_o},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:Mo},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:xo}]},No=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Io=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,ko=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,Eo=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,To={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:No,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Io},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:ko},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Eo}]},jo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,So=`async (job, { text, num, sleep, trace }) => {
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
}`,Ao={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:jo,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:So}]},Co=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Do=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Lo=`async (job, { num, sleep }) => {
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
}`,Po=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,zo={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:Co,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Do},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Lo,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Po,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},Ro="/pr-preview/pr-81/assets/de-bmw-mini-JBSk7QcF.jpg",Oo="/pr-preview/pr-81/assets/de-bmw-mini.thumb-CUUmJrRO.jpg",Bo="/pr-preview/pr-81/assets/uk-d651-rnb-XGipy2QN.jpg",Fo="/pr-preview/pr-81/assets/uk-d651-rnb.thumb-mjEcbhUf.jpg",Uo="/pr-preview/pr-81/assets/uk-mk70-orj-Cn6O3Xfm.jpg",$o="/pr-preview/pr-81/assets/uk-mk70-orj.thumb-CaeZ2vqU.jpg",Yo="/pr-preview/pr-81/assets/uk-ni-ijz-8992-YXV44tgk.jpg",Go="/pr-preview/pr-81/assets/uk-ni-ijz-8992.thumb-DYwok8jV.jpg",Qo="/pr-preview/pr-81/assets/us-hyundai-genesis-gGpAIEpi.jpg",Jo="/pr-preview/pr-81/assets/us-hyundai-genesis.thumb-DEEt19Mw.jpg",Vo=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Zo="Camunda Cloud",Ho="8.10.0",Wo={name:"Camunda Web Modeler",version:"9b5d5ef"},qo=19,Ko="plate-recognition-confirm",Xo="default",es=[{text:`# Confirm the number plate

The in-browser vision model read a plate from the photo. It **recommends**; you **govern** — accept its reading or correct it before it is recorded.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ConfirmHeading"},{text:'**Model reading:** {{if modelPlate = null or modelPlate = "" then "(nothing read)" else modelPlate}}',type:"text",layout:{row:"Row_modelReading",columns:null},id:"Field_ModelReading"},{label:"Number plate",description:"Edit this if the model misread the plate. What you submit is what gets recorded.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ConfirmPlate",key:"confirmedPlate",validate:{required:!0}}],ns={executionPlatform:Zo,executionPlatformVersion:Ho,exporter:Wo,schemaVersion:qo,id:Ko,type:Xo,components:es},ts="Camunda Cloud",rs="8.10.0",is={name:"Camunda Web Modeler",version:"9b5d5ef"},os=19,ss="plate-recognition-manual",as="default",cs=[{text:`# Couldn't read the plate

The vision model didn't return a confident reading for this photo (an unrecognised image, or no in-browser model connected). Enter the plate by hand, or re-run with the in-browser vision brain connected.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ManualHeading"},{label:"Number plate",description:"Type the plate exactly as it appears in the photo.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ManualPlate",key:"confirmedPlate",validate:{required:!0}}],ls={executionPlatform:ts,executionPlatformVersion:rs,exporter:is,schemaVersion:os,id:ss,type:as,components:cs},ds="Camunda Cloud",us="8.10.0",ms={name:"Camunda Web Modeler",version:"9b5d5ef"},ps=19,gs="plate-recognition-country",hs="default",bs=[{text:`# Read a number plate

Pick the plate's **country** so the reader knows which format to extract, then start the run. Leave it on **Auto-detect** to let it guess from the shape.`,type:"text",layout:{row:"Row_countryHeading",columns:null},id:"Field_CountryHeading"},{label:"Plate country",description:"The vision model reads all text in the photo; this tells the process which country's plate format to pull out of that reading.",type:"select",layout:{row:"Row_country",columns:null},id:"Field_Country",key:"country",defaultValue:"auto",values:[{label:"Auto-detect (any format)",value:"auto"},{label:"United Kingdom",value:"uk"},{label:"India",value:"india"},{label:"Germany",value:"germany"},{label:"South Korea",value:"korea"}],validate:{required:!0}}],fs={executionPlatform:ds,executionPlatformVersion:us,exporter:ms,schemaVersion:ps,id:gs,type:hs,components:bs},ys=[{id:"uk-mk70-orj",file:"images/uk-mk70-orj.jpg",thumb:"images/uk-mk70-orj.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_MK70_ORJ_(MK_-_Manchester)_-_70_Plate_(1st_September_2020_-_28th_February_2021)_-_VW_Golf_(CarShop).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate MK70 ORJ" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"MK70 ORJ"},{id:"uk-ni-ijz-8992",file:"images/uk-ni-ijz-8992.jpg",thumb:"images/uk-ni-ijz-8992.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_(Northern_Ireland)_Number_Plate_IJZ_8992_(JZ_-_Down_(NI)_)_-_Dateless_Plate_-_Ford_Fiesta_(Woolston_Car_Centre).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK (Northern Ireland) Number Plate IJZ 8992" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"IJZ 8992"},{id:"uk-d651-rnb",file:"images/uk-d651-rnb.jpg",thumb:"images/uk-d651-rnb.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_D651_RNB_(NB_-_Manchester)_-_D_Reg_(1st_August_1986_-_31st_July_1987)_-_Ford_Capri_(The_Quick_Group).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate D651 RNB" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"D651 RNB"},{id:"de-bmw-mini",file:"images/de-bmw-mini.jpg",thumb:"images/de-bmw-mini.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_BMW_Mini_--_2018_--_1545-51.jpg",license:"CC-BY-SA-4.0",attribution:'Dietmar Rabich / Wikimedia Commons / "Dülmen, Dernekamp, BMW Mini -- 2018 -- 1545-51" / CC BY-SA 4.0',groundTruthPlate:"MS WL 545"},{id:"us-hyundai-genesis",file:"images/us-hyundai-genesis.jpg",thumb:"images/us-hyundai-genesis.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:Hyundai_Genesis_3.8_(US)_(9004912958).jpg",license:"CC-BY-SA-2.0",attribution:'Scarlet Sappho, "Hyundai Genesis 3.8 (US)" (Wikimedia Commons, CC BY-SA 2.0)',groundTruthPlate:"GWAN EUM"}],vt=ys,ws=Object.assign({"./images/de-bmw-mini.jpg":Ro,"./images/de-bmw-mini.thumb.jpg":Oo,"./images/uk-d651-rnb.jpg":Bo,"./images/uk-d651-rnb.thumb.jpg":Fo,"./images/uk-mk70-orj.jpg":Uo,"./images/uk-mk70-orj.thumb.jpg":$o,"./images/uk-ni-ijz-8992.jpg":Yo,"./images/uk-ni-ijz-8992.thumb.jpg":Go,"./images/us-hyundai-genesis.jpg":Qo,"./images/us-hyundai-genesis.thumb.jpg":Jo});function Vn(e){const n=ws[`./${e}`];if(!n)throw new Error(`plate-recognition: image asset "${e}" is in images.json but missing on disk`);return n}const _s=vt.map(e=>({id:e.id,file:Vn(e.file),thumb:Vn(e.thumb),label:e.groundTruthPlate})),Ms=Object.fromEntries(vt.map(e=>[e.id,e.groundTruthPlate])),xs=`async (job, { vision, trace, text }) => {
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
}`,vs=`async (job, { text, trace }) => {
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
}`,Ns={id:"plate-recognition",title:"Read a number plate from a photo",blurb:"Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",docsUrl:"https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",bpmn:Vo,forms:{"plate-recognition-country":fs,"plate-recognition-confirm":ns,"plate-recognition-manual":ls},seed:{country:"auto"},imageInput:{label:"Pick a seed photo (its plate is known, so the scripted reader works offline) or upload your own — a live in-browser model reads a photo it has never seen.",seedImages:_s},scriptedVision:Ms,handlers:[{elementId:"ExtractPlate",standsInFor:"Vision model — Florence-2 <OCR> on WebGPU (in-browser)",source:xs},{elementId:"RecordResult",standsInFor:"Script task — records the governed outcome",source:vs}]},He=[Ao,vo,To,zo,Ns];function fn(){return"/pr-preview/pr-81/"}function Is(e){const n=fn();return e.startsWith(n)?"/"+e.slice(n.length):e}function ks(e=location.pathname){const t=Is(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function Es(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function Ts(){return fn()}function Zn(e){return`${fn()}examples/${encodeURIComponent(e)}`}function Hn(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function Wn(){return{route:ks(),embed:Es()}}function js(){const[e,n]=g.useState(Wn);return g.useEffect(()=>{const t=()=>n(Wn());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const Ss="web-demo-framework:height",As="web-demo-framework:request-height";function Cs(e){return{type:Ss,height:Math.ceil(e)}}const qn="embed-height-auto";function Ds(e){g.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(qn);let t=-1;const r=(c=!1)=>{const d=document.documentElement.scrollHeight;!c&&Math.abs(d-t)<2||(t=d,window.parent.postMessage(Cs(d),"*"))},i=c=>{if(c.source!==window.parent)return;const d=c.data;!d||d.type!==As||r(!0)};window.addEventListener("message",i),r();const a=new ResizeObserver(()=>r());return a.observe(n),()=>{a.disconnect(),window.removeEventListener("message",i),n.classList.remove(qn)}},[e])}function Ls(){const{route:e,embed:n}=js(),t=_t().brain,r=Pi();Ds(n);const i=e.kind==="example"?e.id:He[0].id,a=He.find(u=>u.id===i)??He[0],c=u=>{Hn(Zn(u),{hash:location.hash})},d=s.jsxs(s.Fragment,{children:[!n&&e.kind==="gallery"&&s.jsx("nav",{className:"example-picker",children:He.map(u=>s.jsx(Z,{size:"sm",variant:u.id===a.id?"default":"secondary",onClick:()=>c(u.id),children:u.title},u.id))}),!n&&e.kind==="example"&&s.jsx("div",{className:"example-nav",children:s.jsx(Z,{size:"sm",variant:"secondary",onClick:()=>Hn(Ts()),children:"← All examples"})}),s.jsxs("div",{className:"example-meta",children:[a.docsUrl&&s.jsx("a",{className:"docs-link",href:a.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&s.jsx("a",{className:"open-full-page",href:Zn(a.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:"Open full page ↗"})]}),s.jsx(Ji,{example:a,initialBrainKind:t,initialTourId:r},a.id)]});return n?s.jsx("div",{className:"c4-ui app-shell app-embed",children:s.jsx("main",{id:"main",className:"layout layout-embed",children:d})}):s.jsxs("div",{className:"c4-ui app-shell",children:[s.jsx($t,{appName:"Runnable Camunda examples",trailing:s.jsx("span",{className:"app-subtitle",children:"model + code + optional LLM, in your browser"})}),s.jsx("main",{id:"main",className:"layout",children:d})]})}Dt.createRoot(document.getElementById("root")).render(s.jsx(g.StrictMode,{children:s.jsx(Yt,{children:s.jsx(Ls,{})})}));export{le as _,Os as c};
