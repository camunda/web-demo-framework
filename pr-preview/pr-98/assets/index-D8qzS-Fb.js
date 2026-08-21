const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-embedded-D-RrJ8d8.css","assets/RuntimeDiagram-B2IYfHo7.js","assets/vendor-react-9Ma26nY1.js","assets/Viewer-D_7S4Gwm.js","assets/MonacoEditor-BBA4irky.js","assets/MonacoEditor-hgba-QX0.css","assets/vendor-modeler-DCY-cZzL.js","assets/vendor-design-system-syxZ6u2v.js","assets/vendor-design-system-CUUWddUh.css","assets/parser-DkgAe_kI.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-CjPm9J1B.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var Dt=Object.defineProperty;var Ct=(e,n,t)=>n in e?Dt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var O=(e,n,t)=>Ct(e,typeof n!="symbol"?n+"":n,t);import{r as h,j as a,i as Bt}from"./vendor-react-9Ma26nY1.js";import{B as H,a as W,L as ze,S as nt,b as tt,c as rt,d as it,e as ot,A as ce,f as me,g as pe,I as an,C as Lt,h as Rt,i as Ft,j as zt,k as Ot,l as Ut,T as $t,m as Gt,n as He,o as We,p as Vt,q as Yt}from"./vendor-design-system-syxZ6u2v.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Qt="modulepreload",qt=function(e){return"/pr-preview/pr-98/"+e},Tn={},ue=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){let l=function(o){return Promise.all(o.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),p=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));i=l(t.map(o=>{if(o=qt(o),o in Tn)return;Tn[o]=!0;const d=o.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${g}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":Qt,d||(u.as="script"),u.crossOrigin="",u.href=o,p&&u.setAttribute("nonce",p),document.head.appendChild(u),d)return new Promise((w,_)=>{u.addEventListener("load",w),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${o}`)))})}))}function s(l){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=l,window.dispatchEvent(m),!m.defaultPrevented)throw l}return i.then(l=>{for(const m of l||[])m.status==="rejected"&&s(m.reason);return n().catch(s)})},Jt="io.camunda.agenticai:aiagent",xe="http://www.omg.org/spec/BPMN/20100524/MODEL",Ht="http://camunda.org/schema/zeebe/1.0";function pn(e,n){return Array.from(e.getElementsByTagNameNS(Ht,n))}function at(e,n){return pn(e,n).filter(t=>Wt(t)===e)}function Wt(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===xe&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function _n(e){const n=at(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function jn(e){const n=Array.from(e.children).find(t=>t.namespaceURI===xe&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function Pn(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(r=>r.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function st(e){const n=[],t=r=>{for(const i of Array.from(r.attributes))n.push(i.value);for(const i of Array.from(r.children))t(i)};return t(e),n.join(`
`)}function Zt(e){return dt(st(e))}function Kt(e){const n=Array.from(e.children).find(t=>t.namespaceURI===xe&&t.localName==="extensionElements");return n?dt(st(n)):[]}function dt(e){const n=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,t=[],r=new Set;for(const i of e.matchAll(n)){const s=i[1];r.has(s)||(r.add(s),t.push({name:s,description:(i[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:i[3]??"string"}))}return t}function Xt(e){const n={};for(const t of at(e,"input")){const r=t.getAttribute("target");r&&(n[r]=t.getAttribute("source")??"")}return n}function er(e){return Array.from(e.getElementsByTagNameNS(xe,"adHocSubProcess")).filter(n=>(_n(n)??"").startsWith(Jt))}const nr=new Set(["subProcess","adHocSubProcess","callActivity"]),tr=new Set(["adHocSubProcess","subProcess","transaction"]);function rr(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===xe&&tr.has(n.localName))return n;n=n.parentElement}return null}function ir(e,n){const t=Xt(e),r=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:_n(e),systemPrompt:Pn(t["data.systemPrompt.prompt"]),userPrompt:Pn(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(r)&&r>0?r:10,tools:n}}function or(e,n){var g;const t=e.getAttribute("id")??"",r=e.getAttribute("name")??t,i=er(e);i.length>1&&n.push({severity:"warning",elementId:i.map(u=>u.getAttribute("id")).join(", "),message:`Process "${r}" hosts ${i.length} AI Agent sub-processes (${i.map(u=>u.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const s=[],l=new Map(i.map(u=>[u,[]]));for(const u of Array.from(e.getElementsByTagName("*"))){if(u.namespaceURI!==xe||i.includes(u))continue;const w=u.getAttribute("id");if(!w)continue;const _=rr(u),y=_&&i.includes(_)?_:null;if(y&&nr.has(u.localName)){const k=u.getAttribute("name")??w,C=jn(u);s.push({elementId:w,label:k,jobType:"",documentation:C,isTool:!0,compound:!0}),l.get(y).push({elementId:w,label:k,jobType:"",documentation:C,args:Kt(u),compound:!0});continue}const b=_n(u);if(!b)continue;const v={elementId:w,label:u.getAttribute("name")??w,jobType:b,documentation:jn(u),isTool:y!=null};s.push(v),y&&l.get(y).push({elementId:w,label:v.label,jobType:b,documentation:v.documentation,args:Zt(u)})}const m=i.map(u=>ir(u,l.get(u))),p=Array.from(e.getElementsByTagNameNS(xe,"userTask")).map(u=>{var w;return{elementId:u.getAttribute("id")??"",label:u.getAttribute("name")??u.getAttribute("id")??"",formId:((w=pn(u,"formDefinition")[0])==null?void 0:w.getAttribute("formId"))??void 0}}),o=e.getElementsByTagNameNS(xe,"startEvent")[0],d=o?((g=pn(o,"formDefinition")[0])==null?void 0:g.getAttribute("formId"))??void 0:void 0;return{processId:t,processName:r,tasks:s,agents:m,userTasks:p,startFormId:d}}function ar(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),r=t.getElementsByTagName("parsererror")[0];if(r)throw new Error(`Invalid BPMN XML: ${r.textContent}`);const i=Array.from(t.getElementsByTagNameNS(xe,"process"));if(i.length===0)throw new Error("No <bpmn:process> in the diagram.");const s=[],l=i.map(p=>or(p,s));let m=n.processId?l.find(p=>p.processId===n.processId):void 0;return n.processId&&!m&&s.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${l[0].processId}".`}),m??(m=l[0]),l.length>1&&s.push({severity:"warning",message:`Diagram has ${l.length} <bpmn:process> elements (${l.map(p=>p.processId).join(", ")}); using "${m.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:l,diagnostics:s,processId:m.processId,processName:m.processName,tasks:m.tasks,agent:m.agents[0]??null,agents:l.flatMap(p=>p.agents),userTasks:m.userTasks,startFormId:m.startFormId}}function sr(e){return e?e.imageId?{imageId:e.imageId}:e.imageName?{imageName:e.imageName}:{}:{}}function lt(e,n){return n?e.pixels:e.imageId??e.pixels}const dr="No image selected — pick or upload a photo to read.";function Sn(){return dr}function lr(e,n){return async t=>{const r=e.resolve(n);if(!r)return Sn();const i=lt(r,e.live);if(i===void 0)return Sn();try{return await e.read(i,t)}catch(s){return`Couldn't read the image (${s instanceof Error?s.message:String(s)}).`}}}function cr(e,n){return async()=>{const t=e.resolve(n);if(t)return lt(t,e.live)}}function mr(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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
  <\/script></body></html>`}function ct(e,n={}){const{timeoutMs:t=5e3,onTrace:r,onVision:i,onImage:s}=n,l=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((m,p)=>{const o=document.createElement("iframe");o.setAttribute("sandbox","allow-scripts"),o.style.display="none",o.setAttribute("aria-hidden","true");let d=!1,g;const u=()=>{g&&clearTimeout(g),window.removeEventListener("message",_),o.remove()},w=b=>{d||(d=!0,u(),b())};function _(b){var k;if(b.source!==o.contentWindow)return;const v=b.data;if(!(!v||typeof v!="object")){if(v.kind==="ready"){const C=e.job,Z=e.kind==="run-handler"?{kind:"run-handler",id:l,source:e.source,job:C,hasVision:e.hasVision}:{kind:"run-agent",id:l,source:e.source,job:C};(k=o.contentWindow)==null||k.postMessage(Z,"*");return}"id"in v&&v.id!==l||(v.kind==="trace"?r==null||r(v.text):v.kind==="vision-request"?y(v.callId,i,"vision",v.prompt):v.kind==="image-request"?y(v.callId,s,"image"):v.kind==="result"?w(()=>m(v.value)):v.kind==="error"&&w(()=>p(new Error(v.message))))}}function y(b,v,k,...C){const Z=K=>{var ge;return(ge=o.contentWindow)==null?void 0:ge.postMessage(K,"*")};if(!v){Z({kind:"helper-error",id:l,callId:b,message:`${k} helper is not available.`});return}Promise.resolve().then(()=>v(...C)).then(K=>Z({kind:"helper-result",id:l,callId:b,value:K}),K=>Z({kind:"helper-error",id:l,callId:b,message:K instanceof Error?K.message:String(K)}))}window.addEventListener("message",_),g=setTimeout(()=>{w(()=>p(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),o.srcdoc=mr(),document.body.appendChild(o)})}function mt(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function pr(e,n,t){const r=typeof t.vision=="function";return ct({kind:"run-handler",source:e,job:mt(n),hasVision:r},{onTrace:t.trace,onVision:t.vision?i=>t.vision(i):void 0,onImage:t.image?()=>t.image():void 0})}function ur(e,n){return ct({kind:"run-agent",source:e,job:mt(n)})}function pt(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function gr(e){return pt(e,"Handler code"),(n,t)=>pr(e,n,t)}function hr(e){return pt(e,"Agent code"),n=>ur(e,n)}function br(e,n,t,r){return{sleep:i=>new Promise(s=>setTimeout(s,i)),trace:i=>n({kind:"tool",text:`   ${i}`,elementId:e.elementId,turn:t}),text:(i,s="")=>{const l=e.variables[i];return typeof l=="string"?l:l==null?s:String(l)},num:(i,s=0)=>{const l=e.variables[i],m=typeof l=="number"?l:Number(l);return Number.isFinite(m)?m:s},...r?{vision:lr(r,e.instanceKey),image:cr(r,e.instanceKey)}:{}}}function _r(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function wr(e,n,t,r,i){const s={},l=e.processes.flatMap(p=>p.tasks),m=new Map(l.map(p=>[p.elementId,p.label]));for(const p of l)p.compound||s[p.jobType]||(s[p.jobType]=async o=>{const d=n[o.elementId];if(!d)throw new Error(`No handler registered for ${o.elementId} (job type ${o.type})`);const g=m.get(o.elementId)??o.elementId,u=r==null?void 0:r.current;t({kind:"tool",text:`▶ ${g}`,elementId:o.elementId,turn:u});const w=await d(o,br(o,t,u,i));return t({kind:"vars",text:`  ↳ ${_r(w)}`,elementId:o.elementId,result:w,turn:u}),w});return s}const fr=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function Qe(...e){const n=Object.create(null);for(const t of e)if(t)for(const r of Object.keys(t))n[r]=t[r];return n}function ut(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function gt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yr(e){return gt(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function vr(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mr(e){return JSON.stringify(e).slice(1,-1)}function xr(e,n){const t=e.lastIndexOf("<",n),r=e.lastIndexOf(">",n);if(t<=r)return"text";const i=e.slice(t,n);if((i.match(/"/g)??[]).length%2===0)return"text";const l=i.lastIndexOf('"');return(i.slice(l+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function Nr(e,n,t="xml"){const r=[],i=new Set;return{result:e.replace(fr,(l,m,p)=>{const o=m.trim();if(!Object.prototype.hasOwnProperty.call(n,o))return i.has(o)||(i.add(o),r.push(o)),l;const d=n[o];if(t==="json")return Mr(d);const g=xr(e,p);return g==="feel-literal"?vr(d):g==="attribute"?yr(d):gt(d)}),unresolved:r}}function Er(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function kr(e,n={},t=e.bpmn,r={}){const i=[],s=Qe(e.templates,r),{result:l,unresolved:m}=Nr(t,s,"xml");for(const v of m)i.push({severity:"warning",message:`Template placeholder "{{${v}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let p;try{p=ar(l)}catch(v){return i.push({severity:"error",message:v instanceof Error?v.message:String(v)}),{resolvedBpmn:l,model:Er(),handlers:{},forms:{},diagnostics:i,hasErrors:!0}}i.push(...p.diagnostics);const o=p.processes.flatMap(v=>v.tasks),d=new Map(e.handlers.map(v=>[v.elementId,v.source])),g={};for(const v of o){if(v.compound)continue;const k=n[v.elementId]??d.get(v.elementId);if(k===void 0){i.push({severity:"error",elementId:v.elementId,jobType:v.jobType,message:`No handler for "${v.label}" (${v.elementId}, job type "${v.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{g[v.elementId]=gr(k)}catch(C){i.push({severity:"error",elementId:v.elementId,jobType:v.jobType,message:`"${v.label}" (${v.elementId}): handler code didn't compile — ${C instanceof Error?C.message:String(C)}`})}}const u=new Set(o.map(v=>v.elementId)),w=new Set([...d.keys(),...Object.keys(n)]);for(const v of w)u.has(v)||i.push({severity:"error",elementId:v,message:`Handler "${v}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const _={},y=e.forms??{},b=(v,k)=>{if(!v)return;const C=y[v];C?_[v]=C:i.push({severity:"error",formId:v,message:`${k} references form "${v}", which has no matching schema.`})};for(const v of p.processes){b(v.startFormId,`The start event of process "${v.processName}"`);for(const k of v.userTasks)b(k.formId,`User task "${k.label}" (${k.elementId})`)}return{resolvedBpmn:l,model:p,handlers:g,forms:_,diagnostics:i,hasErrors:i.some(v=>v.severity==="error")}}function Ir(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let r=n;r<e.length;r++)if(e[r]==="{")t++;else if(e[r]==="}"&&(t--,t===0))try{const i=JSON.parse(e.slice(n,r+1));return typeof i=="object"&&i!==null&&!Array.isArray(i)?i:null}catch{return null}return null}function un(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function An(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function Dn(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:An(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,r=Array.isArray(t)?t:Object.values(e).find(s=>Array.isArray(s))??[],i=[];for(const s of r)if(typeof s=="string")s.trim()&&i.push({name:s.trim(),args:{}});else if(s&&typeof s=="object"){const l=s,m=l.name??l.tool??l.id??l.function;typeof m=="string"&&m.trim()&&i.push({name:m.trim(),args:An(l)})}return i}function Tr(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function Cn(e){const n=e.args.length?e.args.map(r=>`      ${r.name} (${r.type}) — ${r.description}`).join(`
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

${t.map(Cn).join(`

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

${t.map(Cn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(i==null?void 0:i.elementId)??"ToolName"}", "arguments": ${s}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function Pr(e,n,t,r,i=[],s=[],l=!1){const m=e.userPrompt||"Carry out your task.",p=Object.entries(n).filter(([,d])=>typeof d=="string"&&d.trim().length>0).map(([d,g])=>`  ${d}: ${String(g)}`),o=[m,p.length?`Case data:
${p.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return o.push(t.length?`${l?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),o.push(r.length?`Tools still available:
${r.map(d=>`  ${d.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),s.length&&o.push(`Your last reply was rejected: ${s.join("; ")}. Do not repeat it.`),i.length&&o.push(`You reported that you are done, but ${i.join(" and ")} ${i.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${i.length===1?"it":"them"} now.`),o.push("Which tool should run next? Reply with JSON only."),o.join(`

`)}async function Sr(e,n,t,r,i,s){let l="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:s});const m=await e(r,i,p=>{l+=p,n({kind:"llm",text:`${un(l)} ▍`,key:t,pending:!0,turn:s})});return n({kind:"llm",text:un(m||l)||"(empty reply)",key:t,pending:!1,turn:s}),m}function Ar(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function Dr(e,n,t){const r={},i=new Map,s=new Map;for(const{tool:l,args:m}of e){const p={};for(const o of l.args){const d=m[o.name];if(!(d!=null&&d!=="")){n({kind:"error",text:`🤖 ${l.elementId}: model supplied no value for "${o.name}"`,turn:t,elementId:l.elementId});continue}const u=i.get(o.name);if(u!==void 0&&u!==l.elementId){n({kind:"error",text:`🤖 argument name collision on "${o.name}": both ${u} and ${l.elementId} declare it — ${u} already claimed it this turn, ${l.elementId}'s value is dropped`,turn:t,elementId:l.elementId});continue}const w=Ar(o.type,d);if(!w.ok){n({kind:"error",text:`🤖 ${l.elementId}: "${o.name}" is declared as ${o.type} but the model supplied ${JSON.stringify(d)} — rejected, not passed through`,turn:t,elementId:l.elementId});continue}r[o.name]=w.value,p[o.name]=w.value,i.set(o.name,l.elementId)}s.set(l.elementId,p)}return{variablesOut:r,forHistory:s}}function Cr(e,n,t,r={}){const{maxNewTokens:i=384,allowRepeats:s=!1,allowMultiToolTurns:l=!1,turnRef:m,requiredTools:p=[],maxEarlyDoneNudges:o=1}=r;let d=0;const g=new Set,u=[];let w=0,_=[],y=[];return async b=>{const v=b.variables,k=v.toolCallResult;for(k!==void 0&&u.length&&(u[u.length-1]=`${u[u.length-1]} → ${un(JSON.stringify(k),160)}`);;){const Z=await C();if(Z)return Z}async function C(){if(d+=1,m&&(m.current=d),d>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:d}),{completionConditionFulfilled:!0};const Z=s?e.tools:e.tools.filter(N=>!g.has(N.elementId)),K=[{role:"system",content:jr(e,l,Z)},{role:"user",content:Pr(e,v,u,Z,_,y,s)}];_=[],y=[];let ge;try{ge=await Sr(n,t,`llm-turn-${d}`,K,i,d)}catch(N){return t({kind:"error",text:`LLM call failed: ${N instanceof Error?N.message:String(N)} — completing the agent.`,turn:d}),{completionConditionFulfilled:!0}}const q=Ir(ge);if(Tr(q)&&Dn(q).length===0){const N=p.filter(F=>!g.has(F));return N.length&&w<o?(w+=1,_=N,t({kind:"agent",text:`🤖 model says it is done, but ${N.join(", ")} hasn't run — asking once more`,turn:d}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:d}),{completionConditionFulfilled:!0})}const de=Dn(q);if(de.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:d}),y=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const V=[],Q=[],$=[];for(const N of de){const F=e.tools.find(X=>X.elementId===N.name);if(!F){Q.push(N.name);continue}if(!s&&g.has(F.elementId)){$.push(F.elementId);continue}V.push({tool:F,args:N.args})}if(Q.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${Q.join(", ")} — nothing activated`,turn:d}),$.length&&t({kind:"error",text:`🤖 model asked to re-run ${$.join(", ")} — skipped (already run)`,turn:d}),V.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:d}),y=[...Q.length?[`${Q.join(", ")} ${Q.length===1?"is":"are"} not a real tool`]:[],...$.length?[`${$.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:P,forHistory:E}=Dr(V,t,d);for(const{tool:N}of V)g.add(N.elementId),u.push(`- ${N.elementId}(${JSON.stringify(E.get(N.elementId))})`);for(const{tool:N}of V)t({kind:"agent",text:`🤖 calling ${N.elementId}`,turn:d,elementId:N.elementId,args:E.get(N.elementId)??{}});return{activateElements:V.map(N=>({elementId:N.tool.elementId})),variables:P}}}}function Br(e,n,t,r={}){const i=new Map(e.map(s=>[s.elementId,Cr(s,n,t,r)]));return async s=>{const l=i.get(s.elementId);if(!l)throw new Error(`No agent host registered for "${s.elementId}"`);return l(s)}}class gn{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Bn.unregister(this),n}free(){const n=this.__destroy_into_raw();c.__wbg_testengine_free(n,0)}activateJobs(n,t,r,i){let s,l;try{const w=c.__wbindgen_add_to_stack_pointer(-16),_=S(n,c.__wbindgen_export,c.__wbindgen_export2),y=j,b=S(i,c.__wbindgen_export,c.__wbindgen_export2),v=j;c.testengine_activateJobs(w,this.__wbg_ptr,_,y,t,r,b,v);var m=f().getInt32(w+0,!0),p=f().getInt32(w+4,!0),o=f().getInt32(w+8,!0),d=f().getInt32(w+12,!0),g=m,u=p;if(d)throw g=0,u=0,R(o);return s=g,l=u,L(g,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(s,l,1)}}advanceTime(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_advanceTime(d,this.__wbg_ptr,n);var i=f().getInt32(d+0,!0),s=f().getInt32(d+4,!0),l=f().getInt32(d+8,!0),m=f().getInt32(d+12,!0),p=i,o=s;if(m)throw p=0,o=0,R(l);return t=p,r=o,L(p,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}assignUserTask(n,t,r){let i,s;try{const u=c.__wbindgen_add_to_stack_pointer(-16),w=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j;c.testengine_assignUserTask(u,this.__wbg_ptr,w,_,y,b,r);var l=f().getInt32(u+0,!0),m=f().getInt32(u+4,!0),p=f().getInt32(u+8,!0),o=f().getInt32(u+12,!0),d=l,g=m;if(o)throw d=0,g=0,R(p);return i=d,s=g,L(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}broadcastSignal(n,t){let r,i;try{const g=c.__wbindgen_add_to_stack_pointer(-16),u=S(n,c.__wbindgen_export,c.__wbindgen_export2),w=j,_=S(t,c.__wbindgen_export,c.__wbindgen_export2),y=j;c.testengine_broadcastSignal(g,this.__wbg_ptr,u,w,_,y);var s=f().getInt32(g+0,!0),l=f().getInt32(g+4,!0),m=f().getInt32(g+8,!0),p=f().getInt32(g+12,!0),o=s,d=l;if(p)throw o=0,d=0,R(m);return r=o,i=d,L(o,d)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,i,1)}}cancelInstance(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16),g=S(n,c.__wbindgen_export,c.__wbindgen_export2),u=j;c.testengine_cancelInstance(d,this.__wbg_ptr,g,u);var i=f().getInt32(d+0,!0),s=f().getInt32(d+4,!0),l=f().getInt32(d+8,!0),m=f().getInt32(d+12,!0),p=i,o=s;if(m)throw p=0,o=0,R(l);return t=p,r=o,L(p,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}completeAgentJob(n,t,r){let i,s;try{const u=c.__wbindgen_add_to_stack_pointer(-16),w=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j,v=S(r,c.__wbindgen_export,c.__wbindgen_export2),k=j;c.testengine_completeAgentJob(u,this.__wbg_ptr,w,_,y,b,v,k);var l=f().getInt32(u+0,!0),m=f().getInt32(u+4,!0),p=f().getInt32(u+8,!0),o=f().getInt32(u+12,!0),d=l,g=m;if(o)throw d=0,g=0,R(p);return i=d,s=g,L(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}completeJob(n,t){let r,i;try{const g=c.__wbindgen_add_to_stack_pointer(-16),u=S(n,c.__wbindgen_export,c.__wbindgen_export2),w=j,_=S(t,c.__wbindgen_export,c.__wbindgen_export2),y=j;c.testengine_completeJob(g,this.__wbg_ptr,u,w,_,y);var s=f().getInt32(g+0,!0),l=f().getInt32(g+4,!0),m=f().getInt32(g+8,!0),p=f().getInt32(g+12,!0),o=s,d=l;if(p)throw o=0,d=0,R(m);return r=o,i=d,L(o,d)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,i,1)}}completeUserTask(n,t){let r,i;try{const g=c.__wbindgen_add_to_stack_pointer(-16),u=S(n,c.__wbindgen_export,c.__wbindgen_export2),w=j,_=S(t,c.__wbindgen_export,c.__wbindgen_export2),y=j;c.testengine_completeUserTask(g,this.__wbg_ptr,u,w,_,y);var s=f().getInt32(g+0,!0),l=f().getInt32(g+4,!0),m=f().getInt32(g+8,!0),p=f().getInt32(g+12,!0),o=s,d=l;if(p)throw o=0,d=0,R(m);return r=o,i=d,L(o,d)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,i,1)}}correlateMessage(n,t,r){let i,s;try{const u=c.__wbindgen_add_to_stack_pointer(-16),w=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j,v=S(r,c.__wbindgen_export,c.__wbindgen_export2),k=j;c.testengine_correlateMessage(u,this.__wbg_ptr,w,_,y,b,v,k);var l=f().getInt32(u+0,!0),m=f().getInt32(u+4,!0),p=f().getInt32(u+8,!0),o=f().getInt32(u+12,!0),d=l,g=m;if(o)throw d=0,g=0,R(p);return i=d,s=g,L(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}createInstance(n,t,r){let i,s;try{const u=c.__wbindgen_add_to_stack_pointer(-16),w=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j;c.testengine_createInstance(u,this.__wbg_ptr,w,_,y,b,Or(r)?Number.MAX_SAFE_INTEGER:r>>0);var l=f().getInt32(u+0,!0),m=f().getInt32(u+4,!0),p=f().getInt32(u+8,!0),o=f().getInt32(u+12,!0),d=l,g=m;if(o)throw d=0,g=0,R(p);return i=d,s=g,L(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}debugClear(){c.testengine_debugClear(this.__wbg_ptr)}debugCreateInstance(n,t,r){let i,s;try{const u=c.__wbindgen_add_to_stack_pointer(-16),w=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j,v=S(r,c.__wbindgen_export,c.__wbindgen_export2),k=j;c.testengine_debugCreateInstance(u,this.__wbg_ptr,w,_,y,b,v,k);var l=f().getInt32(u+0,!0),m=f().getInt32(u+4,!0),p=f().getInt32(u+8,!0),o=f().getInt32(u+12,!0),d=l,g=m;if(o)throw d=0,g=0,R(p);return i=d,s=g,L(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}get debugIsPaused(){return c.testengine_debugIsPaused(this.__wbg_ptr)!==0}debugResume(){let n,t;try{const o=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_debugResume(o,this.__wbg_ptr);var r=f().getInt32(o+0,!0),i=f().getInt32(o+4,!0),s=f().getInt32(o+8,!0),l=f().getInt32(o+12,!0),m=r,p=i;if(l)throw m=0,p=0,R(s);return n=m,t=p,L(m,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}debugStep(){let n,t;try{const o=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_debugStep(o,this.__wbg_ptr);var r=f().getInt32(o+0,!0),i=f().getInt32(o+4,!0),s=f().getInt32(o+8,!0),l=f().getInt32(o+12,!0),m=r,p=i;if(l)throw m=0,p=0,R(s);return n=m,t=p,L(m,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}deploy(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16),g=S(n,c.__wbindgen_export,c.__wbindgen_export2),u=j;c.testengine_deploy(d,this.__wbg_ptr,g,u);var i=f().getInt32(d+0,!0),s=f().getInt32(d+4,!0),l=f().getInt32(d+8,!0),m=f().getInt32(d+12,!0),p=i,o=s;if(m)throw p=0,o=0,R(l);return t=p,r=o,L(p,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}deployForm(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16),g=S(n,c.__wbindgen_export,c.__wbindgen_export2),u=j;c.testengine_deployForm(d,this.__wbg_ptr,g,u);var i=f().getInt32(d+0,!0),s=f().getInt32(d+4,!0),l=f().getInt32(d+8,!0),m=f().getInt32(d+12,!0),p=i,o=s;if(m)throw p=0,o=0,R(l);return t=p,r=o,L(p,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}deployResource(n,t){let r,i;try{const g=c.__wbindgen_add_to_stack_pointer(-16),u=S(n,c.__wbindgen_export,c.__wbindgen_export2),w=j,_=S(t,c.__wbindgen_export,c.__wbindgen_export2),y=j;c.testengine_deployResource(g,this.__wbg_ptr,u,w,_,y);var s=f().getInt32(g+0,!0),l=f().getInt32(g+4,!0),m=f().getInt32(g+8,!0),p=f().getInt32(g+12,!0),o=s,d=l;if(p)throw o=0,d=0,R(m);return r=o,i=d,L(o,d)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,i,1)}}events(){let n,t;try{const o=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_events(o,this.__wbg_ptr);var r=f().getInt32(o+0,!0),i=f().getInt32(o+4,!0),s=f().getInt32(o+8,!0),l=f().getInt32(o+12,!0),m=r,p=i;if(l)throw m=0,p=0,R(s);return n=m,t=p,L(m,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}failJob(n,t,r){let i,s;try{const u=c.__wbindgen_add_to_stack_pointer(-16),w=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,y=S(r,c.__wbindgen_export,c.__wbindgen_export2),b=j;c.testengine_failJob(u,this.__wbg_ptr,w,_,t,y,b);var l=f().getInt32(u+0,!0),m=f().getInt32(u+4,!0),p=f().getInt32(u+8,!0),o=f().getInt32(u+12,!0),d=l,g=m;if(o)throw d=0,g=0,R(p);return i=d,s=g,L(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}migrate(n,t,r){let i,s;try{const u=c.__wbindgen_add_to_stack_pointer(-16),w=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j,v=S(r,c.__wbindgen_export,c.__wbindgen_export2),k=j;c.testengine_migrate(u,this.__wbg_ptr,w,_,y,b,v,k);var l=f().getInt32(u+0,!0),m=f().getInt32(u+4,!0),p=f().getInt32(u+8,!0),o=f().getInt32(u+12,!0),d=l,g=m;if(o)throw d=0,g=0,R(p);return i=d,s=g,L(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}modify(n,t,r){let i,s;try{const u=c.__wbindgen_add_to_stack_pointer(-16),w=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j,v=S(r,c.__wbindgen_export,c.__wbindgen_export2),k=j;c.testengine_modify(u,this.__wbg_ptr,w,_,y,b,v,k);var l=f().getInt32(u+0,!0),m=f().getInt32(u+4,!0),p=f().getInt32(u+8,!0),o=f().getInt32(u+12,!0),d=l,g=m;if(o)throw d=0,g=0,R(p);return i=d,s=g,L(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}constructor(){const n=c.testengine_new();return this.__wbg_ptr=n,Bn.register(this,this.__wbg_ptr,this),this}get now(){return c.testengine_now(this.__wbg_ptr)}reset(){c.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16),g=S(n,c.__wbindgen_export,c.__wbindgen_export2),u=j;c.testengine_resolveIncident(d,this.__wbg_ptr,g,u);var i=f().getInt32(d+0,!0),s=f().getInt32(d+4,!0),l=f().getInt32(d+8,!0),m=f().getInt32(d+12,!0),p=i,o=s;if(m)throw p=0,o=0,R(l);return t=p,r=o,L(p,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}setVariables(n,t,r){let i,s;try{const u=c.__wbindgen_add_to_stack_pointer(-16),w=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j;c.testengine_setVariables(u,this.__wbg_ptr,w,_,y,b,r);var l=f().getInt32(u+0,!0),m=f().getInt32(u+4,!0),p=f().getInt32(u+8,!0),o=f().getInt32(u+12,!0),d=l,g=m;if(o)throw d=0,g=0,R(p);return i=d,s=g,L(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}snapshot(){let n,t;try{const o=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_snapshot(o,this.__wbg_ptr);var r=f().getInt32(o+0,!0),i=f().getInt32(o+4,!0),s=f().getInt32(o+8,!0),l=f().getInt32(o+12,!0),m=r,p=i;if(l)throw m=0,p=0,R(s);return n=m,t=p,L(m,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}throwError(n,t,r){let i,s;try{const u=c.__wbindgen_add_to_stack_pointer(-16),w=S(n,c.__wbindgen_export,c.__wbindgen_export2),_=j,y=S(t,c.__wbindgen_export,c.__wbindgen_export2),b=j,v=S(r,c.__wbindgen_export,c.__wbindgen_export2),k=j;c.testengine_throwError(u,this.__wbg_ptr,w,_,y,b,v,k);var l=f().getInt32(u+0,!0),m=f().getInt32(u+4,!0),p=f().getInt32(u+8,!0),o=f().getInt32(u+12,!0),d=l,g=m;if(o)throw d=0,g=0,R(p);return i=d,s=g,L(d,g)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(i,s,1)}}tickNow(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_tickNow(d,this.__wbg_ptr,n);var i=f().getInt32(d+0,!0),s=f().getInt32(d+4,!0),l=f().getInt32(d+8,!0),m=f().getInt32(d+12,!0),p=i,o=s;if(m)throw p=0,o=0,R(l);return t=p,r=o,L(p,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}unassignUserTask(n){let t,r;try{const d=c.__wbindgen_add_to_stack_pointer(-16),g=S(n,c.__wbindgen_export,c.__wbindgen_export2),u=j;c.testengine_unassignUserTask(d,this.__wbg_ptr,g,u);var i=f().getInt32(d+0,!0),s=f().getInt32(d+4,!0),l=f().getInt32(d+8,!0),m=f().getInt32(d+12,!0),p=i,o=s;if(m)throw p=0,o=0,R(l);return t=p,r=o,L(p,o)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}updateRetries(n,t){let r,i;try{const g=c.__wbindgen_add_to_stack_pointer(-16),u=S(n,c.__wbindgen_export,c.__wbindgen_export2),w=j;c.testengine_updateRetries(g,this.__wbg_ptr,u,w,t);var s=f().getInt32(g+0,!0),l=f().getInt32(g+4,!0),m=f().getInt32(g+8,!0),p=f().getInt32(g+12,!0),o=s,d=l;if(p)throw o=0,d=0,R(m);return r=o,i=d,L(o,d)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,i,1)}}updateUserTask(n,t){let r,i;try{const g=c.__wbindgen_add_to_stack_pointer(-16),u=S(n,c.__wbindgen_export,c.__wbindgen_export2),w=j,_=S(t,c.__wbindgen_export,c.__wbindgen_export2),y=j;c.testengine_updateUserTask(g,this.__wbg_ptr,u,w,_,y);var s=f().getInt32(g+0,!0),l=f().getInt32(g+4,!0),m=f().getInt32(g+8,!0),p=f().getInt32(g+12,!0),o=s,d=l;if(p)throw o=0,d=0,R(m);return r=o,i=d,L(o,d)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,i,1)}}}Symbol.dispose&&(gn.prototype[Symbol.dispose]=gn.prototype.free);function Lr(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_bb96b2010945f0bc:function(n,t){throw new Error(L(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const r=L(n,t);return Rr(r)},__wbindgen_object_drop_ref:function(n){R(n)}}}}const Bn=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>c.__wbg_testengine_free(e,1));function Rr(e){Ve===Me.length&&Me.push(Me.length+1);const n=Ve;return Ve=Me[n],Me[n]=e,n}function Fr(e){e<1028||(Me[e]=Ve,Ve=e)}let De=null;function f(){return(De===null||De.buffer.detached===!0||De.buffer.detached===void 0&&De.buffer!==c.memory.buffer)&&(De=new DataView(c.memory.buffer)),De}function L(e,n){return $r(e>>>0,n)}let Ge=null;function Xe(){return(Ge===null||Ge.byteLength===0)&&(Ge=new Uint8Array(c.memory.buffer)),Ge}function zr(e){return Me[e]}let Me=new Array(1024).fill(void 0);Me.push(void 0,null,!0,!1);let Ve=Me.length;function Or(e){return e==null}function S(e,n,t){if(t===void 0){const m=Ye.encode(e),p=n(m.length,1)>>>0;return Xe().subarray(p,p+m.length).set(m),j=m.length,p}let r=e.length,i=n(r,1)>>>0;const s=Xe();let l=0;for(;l<r;l++){const m=e.charCodeAt(l);if(m>127)break;s[i+l]=m}if(l!==r){l!==0&&(e=e.slice(l)),i=t(i,r,r=l+e.length*3,1)>>>0;const m=Xe().subarray(i+l,i+r),p=Ye.encodeInto(e,m);l+=p.written,i=t(i,r,l,1)>>>0}return j=l,i}function R(e){const n=zr(e);return Fr(e),n}let en=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});en.decode();const Ur=2146435072;let sn=0;function $r(e,n){return sn+=n,sn>=Ur&&(en=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),en.decode(),sn=n),en.decode(Xe().subarray(e,e+n))}const Ye=new TextEncoder;"encodeInto"in Ye||(Ye.encodeInto=function(e,n){const t=Ye.encode(e);return n.set(t),{read:e.length,written:t.length}});let j=0,c;function Gr(e,n){return c=e.exports,De=null,Ge=null,c}async function Vr(e,n){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(i){if(t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}else{const r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function t(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function Yr(e){if(c!==void 0)return c;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/pr-preview/pr-98/assets/nanobpmn_engine_bg-DRNrIVE8.wasm",import.meta.url));const n=Lr();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await Vr(await e,n);return Gr(t)}let Ze=null;function Qr(e){return Ze||(Ze=Yr(void 0).then(()=>{}).catch(n=>{throw Ze=null,n})),Ze}function ee(e){return JSON.parse(e)}class qr{constructor(n){O(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return ee(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,r,i){return JSON.parse(this.engine.activateJobs(n,t,r,i))}completeJob(n,t){return ee(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:r,...i}=t??{};return ee(this.engine.completeAgentJob(n,JSON.stringify(r??{}),JSON.stringify(i??{})))}failJob(n,t,r){return ee(this.engine.failJob(n,t,r))}throwError(n,t,r){return ee(this.engine.throwError(n,t,r))}updateRetries(n,t){return ee(this.engine.updateRetries(n,t))}resolveIncident(n){return ee(this.engine.resolveIncident(n))}setVariables(n,t,r){return ee(this.engine.setVariables(n,t||"{}",r))}broadcastSignal(n,t){return ee(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return ee(this.engine.cancelInstance(n))}modify(n,t,r){return ee(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(r??[])))}completeUserTask(n,t){return ee(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,r){return ee(this.engine.assignUserTask(n,t,r))}unassignUserTask(n){return ee(this.engine.unassignUserTask(n))}updateUserTask(n,t){return ee(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,r){return ee(this.engine.correlateMessage(n,t,r||"{}"))}advanceTime(n){return ee(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return ee(this.engine.snapshot())}free(){this.engine.free()}}async function Jr(e){return await Qr(),new qr(new gn)}class ht extends Error{constructor(t,r){super(t);O(this,"retries");this.name="JobFailure",this.retries=r==null?void 0:r.retries}}function Hr(e,n=[]){if(e.instances.filter(i=>!i.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const r=new Set(n);return e.jobs.some(i=>!r.has(i.jobType))?"unhandledJobs":e.userTasks.some(i=>i.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function Wr(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(r=>r.jobType))].filter(r=>!t.has(r)).sort()}async function Zr(e,n,t){let r;try{const i=await n(t);r=JSON.stringify(i??{})}catch(i){const s=i instanceof ht&&i.retries!==void 0?i.retries:Math.max(0,t.retries-1),l=i instanceof Error?i.message:String(i);e.failJob(t.key,s,l);return}e.completeJob(t.key,r)}async function Kr(e,n,t){let r;try{r=await n(t),JSON.stringify(r)}catch(i){const s=i instanceof ht&&i.retries!==void 0?i.retries:Math.max(0,t.retries-1),l=i instanceof Error?i.message:String(i);e.failJob(t.key,s,l);return}e.completeAgentJob(t.key,r)}async function Xr(e,n,t={}){const r=t.maxJobsPerActivation??10,i=t.lockTimeoutMs??3e4,s=t.worker??"bojtos",l=t.agents??{};for(const u of Object.keys(l))if(u in n)throw new Error(`dispatchRound: job type "${u}" is registered as both a worker and an agent — register it as exactly one`);const m=[];for(const[u,w]of Object.entries(n))for(const _ of e.activateJobs(u,r,i,s))m.push({handler:w,job:_});const p=[];for(const[u,w]of Object.entries(l))for(const _ of e.activateJobs(u,r,i,s))p.push({handler:w,job:_});for(const{handler:u,job:w}of m)await Zr(e,u,w);for(const{handler:u,job:w}of p)await Kr(e,u,w);const o=e.snapshot(),d=m.length+p.length;if(d>0)return{snapshot:o,handled:d};const g=[...Object.keys(n),...Object.keys(l)];return{snapshot:o,handled:d,reason:Hr(o,g),unhandled:Wr(o,g)}}function ei({bpmn:e}){const n=h.useRef(null),[t,r]=h.useState("loading"),[i,s]=h.useState(null),[l,m]=h.useState([]),[p,o]=h.useState(null),d=h.useRef(e),g=h.useRef(0),u=h.useRef(new Map),w=h.useCallback((P,E)=>{u.current.set(P,E)},[]),_=h.useCallback(P=>u.current.get(P),[]),y=h.useCallback((P,E)=>{const N=P.deploy(E);return d.current=E,u.current.clear(),m(N.processIds),o(null),s(null),N.processIds},[]);h.useEffect(()=>{let P=!1;return r("loading"),m([]),o(null),s(null),Jr().then(E=>{if(P){E.free();return}try{y(E,e)}catch(N){E.free(),s(String(N)),r("error");return}n.current=E,r("ready")}).catch(E=>{P||(s(String(E)),r("error"))}),()=>{var E;P=!0,(E=n.current)==null||E.free(),n.current=null,u.current.clear()}},[e]);const b=h.useCallback(P=>{const E=n.current;if(!E)return null;try{const N=P(E);return o(N),s(null),N}catch(N){return s(String(N)),null}},[]),v=h.useCallback((P,E)=>b(N=>N.createInstance(P,E)),[b]),k=h.useCallback((P,E)=>b(N=>N.completeUserTask(P,E)),[b]),C=h.useCallback(P=>b(E=>E.advanceTime(P)),[b]),Z=h.useCallback((P,E)=>b(N=>N.broadcastSignal(P,E)),[b]);function K(P,E){const[N]=P.activateJobs(E,1,3e4,"manual-control");if(!N)throw new Error(`No waiting job of type "${E}" to resolve.`);return N}const ge=h.useCallback((P,E)=>b(N=>{const F=K(N,P);return N.completeJob(F.key,E)}),[b]),q=h.useCallback((P,E,N)=>b(F=>{const X=K(F,P);return F.throwError(X.key,E,N)}),[b]),de=h.useCallback((P,E,N)=>b(F=>F.correlateMessage(P,E,N)),[b]),V=h.useCallback(async(P,E)=>{const N=n.current;if(!N)return null;const F=g.current;try{const X=await Xr(N,P,E);return n.current!==N||g.current!==F?null:(o(X.snapshot),s(null),X)}catch(X){return n.current!==N||g.current!==F||(o(N.snapshot()),s(String(X))),null}},[]),Q=h.useCallback(()=>{const P=n.current;if(P){g.current++;try{P.reset(),y(P,d.current)}catch(E){s(String(E))}}},[y]),$=h.useCallback(P=>{const E=n.current;if(!E)return null;g.current++;try{return E.reset(),y(E,P)}catch(N){return s(String(N)),null}},[y]);return{phase:t,error:i,processIds:l,snapshot:p,createInstance:v,stepWorkers:V,completeUserTask:k,advanceTime:C,broadcastSignal:Z,completeJobManually:ge,throwJobError:q,correlateMessage:de,reset:Q,redeploy:$,setRunImage:w,getRunImage:_}}function ni(e,n){return e.slice(n)}function ti(e,n,t,r){const i=e.snapshot,s="⏸ waiting for a human — complete the task below to continue",l=i.userTasks.some(m=>m.state==="Created");if(e.handled>0){const m=i.activeElementIds.map(t),p=n.length?` via ${n.map(o=>`${t(o.from)} → ${t(o.to)}`).join(", ")}`:"";return i.completedInstances>=1?{kind:"done",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${p} — ✅ process instance completed`}:l?{kind:"human",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${p} — ${s}`}:{kind:"step",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${p} — now at ${m.length?m.join(", "):"—"}`}}switch(e.reason){case"completed":return{kind:"done",text:"✅ process instance completed"};case"userTasks":return{kind:"human",text:s};case"timers":return{kind:"step",text:"⏱ waiting on a timer — advance the clock to continue"};case"messages":return{kind:"step",text:"✉ waiting on a message — correlate it to continue"};case"signals":return{kind:"step",text:"📶 waiting on a signal — broadcast it to continue"};case"incidents":return{kind:"error",text:"A job failed — incident on the diagram"};case"unhandledJobs":{const m=e.unhandled??[];return r&&m.length>0&&m.every(p=>r.has(p))?{kind:"human",text:s}:{kind:"error",text:`⏭ waiting on job type(s) with no worker registered: ${m.join(", ")}`}}case"idle":return{kind:"step",text:"Nothing to step — no instance is running."};default:return{kind:"step",text:e.reason?`Step blocked on an unrecognized reason: ${e.reason}`:"Nothing to step — no instance is running."}}}const ri="the Scripted or Endpoint brain";async function ii(){return await qe()===null}async function qe(e=ri){const n=navigator.gpu;if(!n)return`This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick ${e}.`;let t;try{t=await n.requestAdapter()}catch(r){return`WebGPU adapter request failed (${r instanceof Error?r.message:String(r)}). Try ${e} instead.`}return t?null:`This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick ${e} instead.`}const oi=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function bt(e){return hn.get(e)??{}}const hn=new Map;async function ai(){if(hn.size>0)return;const{prebuiltAppConfig:e}=await ue(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)hn.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const tn=oi.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...bt(e.id)})),_t=tn[0].id;async function si(){return await ai(),tn.map(e=>({...e,...bt(e.id)}))}function wt(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function di(e,n=wt()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function li(e){try{const{hasModelInCache:n}=await ue(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function nn(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function Ln(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class Ke{constructor(){O(this,"kind","browser");O(this,"model",null);O(this,"engine",null);O(this,"worker",null);O(this,"generation",0);O(this,"chat",async(n,t=512,r)=>{var s,l;const i=this.engine;if(!i||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const m=await i.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let p="";for await(const o of m){const d=((l=(s=o.choices[0])==null?void 0:s.delta)==null?void 0:l.content)??"";d&&(p+=d,r==null||r(d))}return p}catch(m){const p=m instanceof Error?m.message:String(m);throw nn(p)?(this.teardown(),new Error(`The in-browser model stopped: ${Ln()}`)):m}})}async connect(n=_t,t){var p,o;const r=await qe();if(r)throw new Error(r);if(this.engine&&this.model===n)return n;const i=++this.generation,s=d=>{i===this.generation&&(t==null||t({progress:d.progress??0,text:d.text??""}))};this.teardown();let l,m;try{const{CreateWebWorkerMLCEngine:d}=await ue(async()=>{const{CreateWebWorkerMLCEngine:g}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:g}},[]);m=new Worker(new URL("/pr-preview/pr-98/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),l=await d(m,n,{initProgressCallback:s})}catch(d){if(m==null||m.terminate(),i!==this.generation)throw new Error("cancelled");const g=d instanceof Error?d.message:String(d);if(nn(g))throw new Error(`Couldn't load ${n} in the browser (${g}). ${Ln()}`);const u=(o=(p=tn.find(w=>w.id===n))==null?void 0:p.requiredFeatures)==null?void 0:o.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${g}). `+(u?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(i!==this.generation)throw l.unload().catch(()=>{}),m==null||m.terminate(),new Error("cancelled");return this.engine=l,this.worker=m??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const ft="http://localhost:11434/v1";function yt(){var n;const e=((n=globalThis.location)==null?void 0:n.hostname)??"";return e==="localhost"||e==="127.0.0.1"||e==="[::1]"||e==="::1"}function wn(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(r=>(r=globalThis.location)==null?void 0:r.origin)()??""}){let i;try{i=new URL(vt(e)).hostname}catch{return null}const s=l=>l==="localhost"||l==="127.0.0.1"||l==="::1"||l==="[::1]";return!s(i)||s(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function vt(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class Rn extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class ci{constructor(n=ft,t="",r=""){O(this,"kind","endpoint");O(this,"baseUrl");O(this,"model",null);O(this,"models",[]);O(this,"apiKey");O(this,"requestedModel");O(this,"chat",async(n,t=512,r)=>{var o,d,g;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const i=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!i.ok||!i.body){const u=await i.text().catch(()=>"");throw new Error(`chat/completions HTTP ${i.status} ${i.statusText}${u?` — ${u.slice(0,300)}`:""}`)}const s=i.body.getReader(),l=new TextDecoder;let m="",p="";for(;;){const{value:u,done:w}=await s.read();if(w)break;m+=l.decode(u,{stream:!0});let _;for(;(_=m.indexOf(`
`))>=0;){const y=m.slice(0,_).trim();if(m=m.slice(_+1),!y.startsWith("data:"))continue;const b=y.slice(5).trim();if(b==="[DONE]")continue;let v;try{v=JSON.parse(b)}catch{continue}v.model&&(this.model=v.model);const k=(o=v.choices)==null?void 0:o[0],C=((d=k==null?void 0:k.delta)==null?void 0:d.content)??((g=k==null?void 0:k.message)==null?void 0:g.content)??"";C&&(p+=C,r==null||r(C))}}return p});this.baseUrl=vt(n),this.apiKey=t.trim(),this.requestedModel=r.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(r){const i=wn(this.baseUrl);throw new Error(i??`Can't reach ${this.baseUrl} (${r instanceof Error?r.message:String(r)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new Rn(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(r=>r.id).filter(r=>!!r),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof Rn&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(r=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${r instanceof Error?r.message:String(r)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const r=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${r?` — ${r.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}const mi=[{id:"onnx-community/Florence-2-base-ft",label:"Florence-2 base",downloadLabel:"~0.4 GB"},{id:"onnx-community/Florence-2-large-ft",label:"Florence-2 large (higher quality)",downloadLabel:"~1.6 GB"}],Mt=mi.map(e=>({...e,label:`${e.label} (${e.downloadLabel})`})),xt=Mt[0].id,pi="<OCR>",Fn="UNKNOWN (scripted brain — connect the in-browser model to read a photo)";function ui(e,n){if(e)return typeof e=="function"?e(n):e[n]}class gi{constructor(n){O(this,"kind","scripted-vision");O(this,"model",null);O(this,"read",async(n,t,r)=>{const i=typeof n=="string"?ui(this.lookup,n)??Fn:Fn;return r==null||r(i),i});this.lookup=n}dispose(){}}function hi(e){return new gi(e)}class zn{constructor(){O(this,"kind","browser-vision");O(this,"model",null);O(this,"modelHandle",null);O(this,"processor",null);O(this,"loadImage",null);O(this,"generation",0);O(this,"read",async(n,t,r)=>{const i=this.modelHandle,s=this.processor,l=this.loadImage;if(!i||!s||!l||!this.model)throw new Error("BrowserVisionBrain.read called before connect()");const m=t&&t.startsWith("<")?t:pi,p=await l(n),o=s.construct_prompts(m),d=await s(p,o),g=await i.generate({...d,max_new_tokens:512,num_beams:1,do_sample:!1}),u=s.batch_decode(g,{skip_special_tokens:!1})[0],w=s.post_process_generation(u,m,p.size),_=bi(w,m);return r==null||r(_),_})}async connect(n=xt,t){var m,p;const r=await qe("the scripted-vision fallback");if(r)throw new Error(r);if(this.modelHandle&&this.model===n)return n;const i=++this.generation,s=o=>{i===this.generation&&(t==null||t({progress:(o.progress??0)/100,text:o.file?`${o.status??"loading"} ${o.file}`:o.status??""}))};this.teardown();let l;try{const{Florence2ForConditionalGeneration:o,AutoProcessor:d,load_image:g}=await ue(async()=>{const{Florence2ForConditionalGeneration:_,AutoProcessor:y,load_image:b}=await import("./transformers.web-D5qrjglu.js");return{Florence2ForConditionalGeneration:_,AutoProcessor:y,load_image:b}},[]),u=await o.from_pretrained(n,{dtype:"fp32",device:"webgpu",progress_callback:s}),w=await d.from_pretrained(n);l={model:u,processor:w,loadImage:g}}catch(o){if(i!==this.generation)throw new Error("cancelled");const d=o instanceof Error?o.message:String(o);throw new Error(`Couldn't load ${n} in the browser (${d}). Try the smaller Florence-2 base model, check your connection, or use the scripted-vision fallback.`)}if(i!==this.generation)throw Promise.resolve((p=(m=l.model).dispose)==null?void 0:p.call(m)).catch(()=>{}),new Error("cancelled");return this.modelHandle=l.model,this.processor=l.processor,this.loadImage=l.loadImage,this.model=n,n}teardown(){var t;const n=this.modelHandle;this.modelHandle=null,this.processor=null,this.loadImage=null,this.model=null,Promise.resolve((t=n==null?void 0:n.dispose)==null?void 0:t.call(n)).catch(()=>{})}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}function bi(e,n){const t=e[n];if(typeof t=="string")return t.trim();if(t&&typeof t=="object"){const r=t.labels;return Array.isArray(r)?r.join(" ").trim():JSON.stringify(t)}return""}async function _i(){return await ii()?"browser":yt()?"endpoint":"scripted"}function wi(){const[e,n]=h.useState("scripted"),t=h.useRef(!1),[r,i]=h.useState("idle"),[s,l]=h.useState(null),[m,p]=h.useState(null),[o,d]=h.useState(null),[g,u]=h.useState(null),[w,_]=h.useState(null),[y,b]=h.useState(null),[v,k]=h.useState(_t),[C,Z]=h.useState(ft),[K,ge]=h.useState(""),[q,de]=h.useState(""),[V,Q]=h.useState(null),$=h.useRef(null),[P,E]=h.useState("scripted-vision"),[N,F]=h.useState("idle"),[X,Ne]=h.useState(null),[Oe,je]=h.useState(xt),[Ce,Ee]=h.useState(null),[rn,Pe]=h.useState(null),[Ue,le]=h.useState(null),[Se,Ae]=h.useState(null),ne=h.useRef(null),ke=h.useRef(!1),Ie=h.useCallback(I=>async(...D)=>{try{return await I.chat(...D)}catch(U){const Te=U instanceof Error?U.message:String(U);throw I instanceof Ke&&nn(Te)&&(Q(null),p(null),i("error"),l(Te)),U}},[]),Be=h.useCallback(I=>async(...D)=>{try{return await I.read(...D)}catch(U){const Te=U instanceof Error?U.message:String(U);throw nn(Te)&&(Ae(null),Ee(null),F("error"),Ne(Te)),U}},[]);h.useEffect(()=>{qe().then(I=>{_(I),u(I===null),t.current||(t.current=!0,_i().then(n))}),qe("the scripted-vision fallback").then(I=>{le(I),ke.current||(ke.current=!0,E(I===null?"browser-vision":"scripted-vision"))})},[]),h.useEffect(()=>{let I=!1;return b(null),li(v).then(D=>{I||b(D)}),()=>{I=!0}},[v]),h.useEffect(()=>()=>{var I;return(I=$.current)==null?void 0:I.dispose()},[]),h.useEffect(()=>()=>{var I;return(I=ne.current)==null?void 0:I.dispose()},[]);const z=h.useCallback(I=>{n(I),i("idle"),l(null),p(null),d(null),Q(null)},[]),_e=h.useCallback(I=>{var D,U;ke.current=!0,(D=ne.current)==null||D.cancelConnect(),(U=ne.current)==null||U.dispose(),ne.current=null,E(I),F("idle"),Ne(null),Ee(null),Pe(null),Ae(null)},[]),he=h.useCallback(()=>{var I;(I=$.current)==null||I.dispose(),$.current=null,Q(null),p(null)},[]),ye=h.useCallback(()=>{$.current instanceof Ke&&$.current.cancelConnect(),he(),i("idle"),d(null),l(null)},[he]),Je=h.useCallback(async()=>{var I;if(e==="scripted"){Q(null),i("ready");return}if(e==="endpoint"){const D=wn(C);if(D){he(),l(D),i("error");return}}i("connecting"),l(null),d(null);try{if(e==="browser"){const D=$.current instanceof Ke?$.current:new Ke;$.current&&$.current!==D&&$.current.dispose(),$.current=D;const U=await D.connect(v,d);p(U),Q(()=>Ie(D)),b(!0)}else{(I=$.current)==null||I.dispose();const D=new ci(C,q,K);$.current=D;const U=await D.connect();p(U),Q(()=>Ie(D))}i("ready")}catch(D){const U=D instanceof Error?D.message:String(D);if(U==="cancelled")return;l(U),i("error"),Q(null)}finally{d(null)}},[e,v,C,K,q,he,Ie]),oe=h.useCallback(()=>{var I;(I=ne.current)==null||I.dispose(),ne.current=null,Ae(null),Ee(null)},[]),Le=h.useCallback(()=>{var I;(I=ne.current)==null||I.cancelConnect(),oe(),F("idle"),Pe(null),Ne(null)},[oe]),Re=h.useCallback(async()=>{if(P==="scripted-vision"){oe(),F("ready"),Ne(null);return}F("connecting"),Ne(null),Pe(null);try{const I=ne.current instanceof zn?ne.current:new zn;ne.current&&ne.current!==I&&ne.current.dispose(),ne.current=I;const D=await I.connect(Oe,Pe);Ee(D),Ae(()=>Be(I)),F("ready")}catch(I){const D=I instanceof Error?I.message:String(I);if(D==="cancelled")return;Ne(D),F("error"),Ae(null),Ee(null)}finally{Pe(null)}},[P,Oe,oe,Be]);return{kind:e,setKind:z,status:r,error:s,modelInUse:m,progress:o,webgpu:g,webgpuReason:w,browserModelCached:y,cancelConnect:ye,browserModel:v,setBrowserModel:k,endpointUrl:C,setEndpointUrl:Z,endpointModel:K,setEndpointModel:ge,apiKey:q,setApiKey:de,connect:Je,chat:V,visionKind:P,setVisionKind:_e,visionStatus:N,visionError:X,visionModel:Oe,setVisionModel:je,visionModelInUse:Ce,visionProgress:rn,visionWebgpuReason:Ue,connectVision:Re,cancelVisionConnect:Le,vision:Se}}const bn="#s=",fi=["scripted","browser","endpoint"];function yi(e){return typeof e=="string"&&fi.includes(e)}function vi(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,r={};return yi(t.brain)&&(r.brain=t.brain),r}}catch{}return{}}function Nt(e=location.hash){if(!e.startsWith(bn))return{};let n;try{n=decodeURIComponent(e.slice(bn.length))}catch{return{}}return vi(n)}function Mi(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":bn+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function xi(e){const n={...Nt(),...e},t=Mi(n),r=new URL(location.href);r.hash=t,history.replaceState(history.state,"",r)}const On=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server. Ollama by default. Local pages only."}],Un=[{kind:"scripted-vision",label:"Scripted",hint:"No model. The example's known plate is returned — deterministic and offline."},{kind:"browser-vision",label:"In-browser (WebGPU)",hint:"Reads the photo with a vision model on your GPU. First run downloads weights."}];function Ni({brain:e,showText:n=!0,showVision:t=!1}){return a.jsxs("div",{className:"brain",children:[n&&a.jsx(Ei,{brain:e}),n&&t&&a.jsx("hr",{className:"brain-divider"}),t&&a.jsx(ki,{brain:e})]})}function Ei({brain:e}){const n=On.find(o=>o.kind===e.kind),t=wn(e.endpointUrl),r=yt(),[i,s]=h.useState(tn);h.useEffect(()=>{si().then(s)},[]);const l=i.find(o=>o.id===e.browserModel),m=l?di(l,wt()):null,p=e.webgpu===!0?"browser":r&&e.webgpu===!1?"endpoint":null;return a.jsxs("div",{className:"brain-section",children:[a.jsxs("div",{className:"brain-kinds",children:[On.map(o=>a.jsxs(H,{size:"sm",variant:e.kind===o.kind?"default":"secondary",onClick:()=>e.setKind(o.kind),children:[o.label,o.kind===p&&a.jsx(W,{variant:"info",className:"brain-recommended-badge",children:"recommended"})]},o.kind)),e.status==="ready"&&e.kind!=="scripted"&&a.jsx(W,{variant:"success",children:e.modelInUse??"connected"}),e.status==="connecting"&&a.jsx(W,{variant:"info",children:"connecting…"}),e.status==="error"&&a.jsx(W,{variant:"danger",children:"not connected"})]}),a.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&a.jsxs("div",{className:"brain-config",children:[a.jsxs("div",{className:"field",children:[a.jsx(ze,{htmlFor:"browser-model",children:"Model"}),a.jsxs(nt,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[a.jsx(tt,{id:"browser-model",children:a.jsx(rt,{})}),a.jsx(it,{children:i.map(o=>a.jsx(ot,{value:o.id,children:o.label},o.id))})]}),e.browserModelCached===!0&&a.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&a.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&a.jsxs(ce,{variant:"destructive",children:[a.jsx(me,{children:"No WebGPU in this browser"}),a.jsx(pe,{children:e.webgpuReason})]}),e.webgpu!==!1&&m&&a.jsxs(ce,{variant:"destructive",children:[a.jsx(me,{children:"This model may not fit in GPU memory"}),a.jsx(pe,{children:m})]})]}),e.kind==="endpoint"&&a.jsxs("div",{className:"brain-config",children:[a.jsxs("div",{className:"field",children:[a.jsx(ze,{htmlFor:"endpoint-url",children:"Endpoint"}),a.jsx(an,{id:"endpoint-url",value:e.endpointUrl,onChange:o=>e.setEndpointUrl(o.target.value),disabled:e.status==="connecting"}),a.jsxs("p",{className:"field-hint",children:["Ollama allows ",a.jsx("code",{children:"localhost"})," origins out of the box; set"," ",a.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}),t&&a.jsxs(ce,{variant:"destructive",children:[a.jsx(me,{children:"A local server won't work from this URL"}),a.jsx(pe,{children:t})]})]}),a.jsxs("div",{className:"field",children:[a.jsx(ze,{htmlFor:"endpoint-model",children:"Model (blank = first served)"}),a.jsx(an,{id:"endpoint-model",placeholder:"llama3.2:3b",value:e.endpointModel,onChange:o=>e.setEndpointModel(o.target.value),disabled:e.status==="connecting"})]}),a.jsxs("div",{className:"field",children:[a.jsx(ze,{htmlFor:"endpoint-key",children:"API key (optional)"}),a.jsx(an,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:o=>e.setApiKey(o.target.value),disabled:e.status==="connecting"})]})]}),e.kind!=="scripted"&&a.jsxs("div",{className:"brain-actions",children:[a.jsx(H,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting",children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&e.kind==="browser"&&a.jsx(H,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&a.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.error&&a.jsxs(ce,{variant:"destructive",children:[a.jsx(me,{children:"Couldn't connect"}),a.jsx(pe,{children:e.error})]})]})}function ki({brain:e}){const n=Un.find(r=>r.kind===e.visionKind),t=e.webgpu===!0?"browser-vision":null;return a.jsxs("div",{className:"brain-section brain-vision",children:[a.jsx(ze,{children:"Vision (reads the image)"}),a.jsxs("div",{className:"brain-kinds",children:[Un.map(r=>a.jsxs(H,{size:"sm",variant:e.visionKind===r.kind?"default":"secondary",onClick:()=>e.setVisionKind(r.kind),children:[r.label,r.kind===t&&a.jsx(W,{variant:"info",className:"brain-recommended-badge",children:"recommended"})]},r.kind)),e.visionStatus==="ready"&&e.visionKind==="browser-vision"&&a.jsx(W,{variant:"success",children:e.visionModelInUse??"connected"}),e.visionStatus==="connecting"&&a.jsx(W,{variant:"info",children:"connecting…"}),e.visionStatus==="error"&&a.jsx(W,{variant:"danger",children:"not connected"})]}),a.jsx("p",{className:"field-hint",children:n.hint}),e.visionKind==="scripted-vision"&&e.webgpu===!1&&e.visionWebgpuReason&&a.jsxs(ce,{variant:"destructive",children:[a.jsx(me,{children:"No WebGPU in this browser"}),a.jsx(pe,{children:e.visionWebgpuReason})]}),e.visionKind==="browser-vision"&&a.jsxs("div",{className:"brain-config",children:[a.jsxs("div",{className:"field",children:[a.jsx(ze,{htmlFor:"vision-model",children:"Model"}),a.jsxs(nt,{value:e.visionModel,onValueChange:e.setVisionModel,disabled:e.visionStatus==="connecting",children:[a.jsx(tt,{id:"vision-model",children:a.jsx(rt,{})}),a.jsx(it,{children:Mt.map(r=>a.jsx(ot,{value:r.id,children:r.label},r.id))})]}),a.jsx("p",{className:"field-hint",children:"Connecting downloads the weights once (size shown above), then caches them — every token is read on your GPU, no server."})]}),e.webgpu===!1&&e.visionWebgpuReason&&a.jsxs(ce,{variant:"destructive",children:[a.jsx(me,{children:"No WebGPU in this browser"}),a.jsx(pe,{children:e.visionWebgpuReason})]})]}),e.visionKind==="browser-vision"&&a.jsxs("div",{className:"brain-actions",children:[a.jsx(H,{size:"sm",onClick:()=>void e.connectVision(),disabled:e.visionStatus==="connecting",children:e.visionStatus==="ready"?"Reconnect":"Connect"}),e.visionStatus==="connecting"&&a.jsx(H,{size:"sm",variant:"secondary",onClick:e.cancelVisionConnect,children:"Cancel"}),e.visionProgress&&a.jsxs("span",{className:"field-hint",children:[Math.round(e.visionProgress.progress*100),"% —"," ",e.visionProgress.text]})]}),e.visionError&&a.jsxs(ce,{variant:"destructive",children:[a.jsx(me,{children:"Couldn't connect the vision brain"}),a.jsx(pe,{children:e.visionError})]})]})}function Ii({imageInput:e,value:n,onSelect:t,disabled:r=!1}){const[i,s]=h.useState(null),[l,m]=h.useState(!1),p=h.useRef(null),o=h.useId(),d=h.useId(),g=h.useCallback(_=>{s(URL.createObjectURL(_)),t({imageName:_.name,pixels:_})},[t]);h.useEffect(()=>{if(i)return()=>URL.revokeObjectURL(i)},[i]);const u=h.useCallback(_=>{const y=_==null?void 0:_[0];y&&y.type.startsWith("image/")&&g(y)},[g]),w=(n==null?void 0:n.imageId)!=null?e.seedImages.find(_=>_.id===n.imageId):void 0;return a.jsxs("div",{className:"image-input",children:[e.label&&a.jsx("p",{className:"field-hint",children:e.label}),a.jsx("p",{className:"image-input-label",id:o,children:"Seed photos"}),a.jsx("div",{className:"image-gallery",role:"group","aria-labelledby":o,children:e.seedImages.map(_=>{const y=(n==null?void 0:n.imageId)===_.id;return a.jsxs("button",{type:"button","aria-pressed":y,className:`image-thumb${y?" image-thumb--selected":""}`,disabled:r,title:_.label??_.id,onClick:()=>{s(null),p.current&&(p.current.value=""),t({imageId:_.id,pixels:_.file})},children:[a.jsx("img",{src:_.thumb??_.file,alt:_.label??_.id}),_.label&&a.jsx("span",{children:_.label})]},_.id)})}),a.jsx("label",{className:"image-input-label",htmlFor:d,children:"Or upload your own photo"}),a.jsxs("div",{className:`image-drop${l?" image-drop--over":""}`,onDragOver:_=>{_.preventDefault(),r||m(!0)},onDragLeave:()=>m(!1),onDrop:_=>{_.preventDefault(),m(!1),r||u(_.dataTransfer.files)},children:[a.jsx("input",{ref:p,id:d,type:"file",accept:"image/*",disabled:r,onChange:_=>u(_.target.files)}),a.jsx("p",{className:"field-hint",children:"Drag a photo here, or pick one. Uploading a photo the model has never seen is the proof this runs for real — nothing leaves your browser."})]}),(i||w)&&a.jsxs("div",{className:"image-preview",children:[a.jsx("img",{src:i??(w==null?void 0:w.file),alt:i?(n==null?void 0:n.imageName)??"uploaded photo":(w==null?void 0:w.label)??(w==null?void 0:w.id)??"selected photo"}),a.jsx("span",{className:"field-hint",children:i?`Uploaded: ${(n==null?void 0:n.imageName)??"your photo"}`:`Selected: ${(w==null?void 0:w.label)??(w==null?void 0:w.id)}`}),a.jsx("button",{type:"button",className:"image-clear-btn",disabled:r,onClick:()=>{s(null),p.current&&(p.current.value=""),t(null)},children:"Clear"})]})]})}function Et(e){return typeof e=="object"&&e!==null}function cd(e){const n=new Set,t=r=>{Et(r)&&(typeof r.key=="string"&&n.add(r.key),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function Ti(e){const n={},t=r=>{Et(r)&&(typeof r.key=="string"&&"defaultValue"in r&&(n[r.key]=r.defaultValue??""),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}const ji="wdf:section:";function kt(e){return ji+e}function $n(e){try{const n=window.localStorage.getItem(kt(e));return n==="1"?!0:n==="0"?!1:void 0}catch{return}}function Pi(e,n){try{window.localStorage.setItem(kt(e),n?"1":"0")}catch{}}function Si(e,n=!0){const[t,r]=h.useState(()=>$n(e)??n);h.useEffect(()=>{r($n(e)??n)},[e,n]);const i=h.useCallback(s=>{r(s),Pi(e,s)},[e]);return[t,i]}function ve({sectionId:e,title:n,description:t,defaultOpen:r=!0,className:i,children:s,...l}){const[m,p]=Si(e,r);return a.jsx(Lt,{className:["panel",i].filter(Boolean).join(" "),"data-tour":l["data-tour"],children:a.jsxs(Rt,{open:m,onOpenChange:p,children:[a.jsxs(Ft,{className:"panel-trigger",children:[a.jsxs("span",{className:"panel-trigger-text",children:[a.jsx("span",{className:"panel-title",children:n}),t!=null&&a.jsx("span",{className:"panel-desc",children:t})]}),a.jsx(zt,{className:"panel-chevron","aria-hidden":!0})]}),a.jsx(Ot,{children:a.jsx(Ut,{children:s})})]})})}function Ai(e){return e.entries!==void 0}function Di(e){const n=[];let t=null;for(const r of e)r.turn!==void 0?t&&t.turn===r.turn?t.entries.push(r):(t={turn:r.turn,entries:[r]},n.push(t)):(t=null,n.push(r));return n}function Gn(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Ci({activation:e,result:n,labelFor:t}){const r=e.elementId??"";return a.jsxs("div",{className:"timeline-tool",children:[a.jsxs("div",{className:"timeline-tool-head",children:[a.jsx(W,{variant:"info",children:"tool"}),a.jsx("strong",{children:t(r)||r}),a.jsx("code",{children:r})]}),e.args!==void 0&&Object.keys(e.args).length>0&&a.jsxs("div",{className:"timeline-kv",children:[a.jsx("span",{className:"timeline-kv-label",children:"arguments"}),a.jsx("code",{children:Gn(e.args)})]}),a.jsxs("div",{className:"timeline-kv",children:[a.jsx("span",{className:"timeline-kv-label",children:"returned"}),a.jsx("code",{children:n?Gn(n.result):"— waiting for the job to complete —"})]})]})}function Bi({group:e,labelFor:n}){const t=e.entries.find(o=>o.kind==="llm"),r=e.entries.filter(o=>o.kind==="agent"&&o.elementId),i=e.entries.filter(o=>o.kind==="vars"&&o.elementId),s=e.entries.filter(o=>o.kind==="agent"&&!o.elementId),l=e.entries.filter(o=>o.kind==="error"),m=new Set(r.map(o=>o.elementId)),p=e.entries.filter(o=>o.kind==="tool"||o.kind==="vars"&&o.elementId&&!m.has(o.elementId)).sort((o,d)=>o.id-d.id);return a.jsxs("div",{className:"timeline-turn",children:[a.jsxs("div",{className:"timeline-turn-head",children:[a.jsxs(W,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&a.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&a.jsx("blockquote",{className:"timeline-reply",children:t.text}),s.map(o=>a.jsx("div",{className:"timeline-note",children:o.text},o.id)),r.map(o=>a.jsx(Ci,{activation:o,result:i.find(d=>d.elementId===o.elementId),labelFor:n},o.id)),p.map(o=>a.jsxs("div",{className:`log-line log-${o.kind}`,children:[o.pending?"⏳ ":"",o.text]},o.id)),l.map(o=>a.jsxs("div",{className:"timeline-error",children:["⚠ ",o.text]},o.id))]})}function Li({log:e,elementStats:n=[],incidents:t=[],labelFor:r=i=>i}){const i=h.useMemo(()=>Di(e),[e]),[s,l]=h.useState(!1),m=h.useRef(null);h.useEffect(()=>{const o=m.current;o&&(o.scrollTop=o.scrollHeight)},[i]);const p=()=>{var g;const o={log:e.map(({id:u,...w})=>w),elementStats:n,incidents:t},d=JSON.stringify(o,null,2);(g=navigator.clipboard)!=null&&g.writeText&&navigator.clipboard.writeText(d).then(()=>{l(!0),setTimeout(()=>l(!1),1500)}).catch(()=>{})};return a.jsxs(ve,{sectionId:"activity",className:"grow",title:"Activity",description:"Agent turns, model replies, and tool calls — read top to bottom as a story.",children:[a.jsx("div",{className:"timeline-toolbar",children:a.jsx(H,{variant:"secondary",size:"sm",onClick:p,children:s?"Copied!":"Copy run as JSON"})}),a.jsx("div",{className:"timeline",ref:m,children:i.length===0?a.jsx("div",{className:"log-empty",children:"Press Run or Step to start."}):i.map(o=>Ai(o)?a.jsx(Bi,{group:o,labelFor:r},`turn-${o.turn}-${o.entries[0].id}`):a.jsxs("div",{className:`log-line log-${o.kind}`,children:[o.pending?"⏳ ":"",o.text]},o.id))}),(n.length>0||t.length>0)&&a.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&a.jsxs("div",{className:"timeline-stats",children:[a.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),a.jsx("ul",{children:n.filter(o=>o.completed>0||(o.active??0)>0).map(o=>a.jsxs("li",{children:[a.jsx("code",{children:r(o.elementId)||o.elementId})," ","completed ",o.completed,o.active?`, ${o.active} active`:""]},o.elementId))})]}),t.length>0&&a.jsxs("div",{className:"timeline-incidents",children:[a.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),a.jsx("ul",{children:t.map((o,d)=>a.jsxs("li",{children:[a.jsx("code",{children:r(o.elementId)||o.elementId})," —"," ",o.reason]},`${o.elementId}-${d}`))})]})]})]})}const fe={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function Vn(e){return`[data-tour="${e}"]`}function Ri(e=location.search){return new URLSearchParams(e).get("tour")}function Fi(e,n){var t;return((t=e.elementStats.find(r=>r.elementId===n))==null?void 0:t.completed)??0}function zi(e,n){return!e||e.kind==="click"||!n?!1:e.kind==="activeElement"?n.activeElementIds.includes(e.elementId):Fi(n,e.elementId)>=(e.atLeast??1)}function Oi(e){return"anchor"in e?Vn(e.anchor):`${Vn(fe.diagram)} [data-element-id="${Ui(e.elementId)}"]`}function Ui(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function $i(e){return e.map(n=>{const t=!!n.waitFor&&n.waitFor.kind!=="click";return{element:Oi(n.target),popover:{title:n.title,description:t?`${n.description} (continues automatically once you reach that point — or use Next to skip ahead)`:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}})}async function Gi(e,n={}){var s;const[{driver:t}]=await Promise.all([ue(()=>import("./driver.js-bj_ppY-Q.js"),[]),ue(()=>Promise.resolve({}),__vite__mapDeps([0]))]),r=$i(e),i=t({steps:r,showProgress:!0,allowClose:!0,skipMissingElement:!0,onHighlighted:(l,m,{index:p})=>{var o;p!==void 0&&((o=n.onIndexChange)==null||o.call(n,p))},onDestroyed:()=>{var l;(l=n.onDestroyed)==null||l.call(n)}});return i.drive(),(s=n.onIndexChange)==null||s.call(n,i.getActiveIndex()??0),{moveNext:()=>i.moveNext(),activeIndex:()=>i.getActiveIndex()??-1,destroy:()=>i.destroy()}}const Vi=300;function Yi(e,n){const[t,r]=h.useState(!1),i=h.useRef(null),s=h.useRef(0),l=h.useRef(-1),m=h.useRef(null),p=h.useRef(n);h.useEffect(()=>{p.current=n},[n]);const o=h.useCallback(()=>{m.current!==null&&(clearInterval(m.current),m.current=null)},[]),d=h.useRef(0),g=h.useCallback(()=>{var w;d.current+=1,o(),(w=i.current)==null||w.destroy(),i.current=null,r(!1)},[o]),u=h.useCallback(()=>{if(!e||e.steps.length===0||i.current)return;const w=d.current+=1;Gi(e.steps,{onIndexChange:_=>{s.current=_},onDestroyed:()=>{o(),i.current=null,r(!1)}}).then(_=>{if(w!==d.current){_.destroy();return}i.current=_,r(!0),m.current=setInterval(()=>{const y=s.current;if(y===l.current)return;const b=e.steps[y];b&&zi(b.waitFor,p.current())&&(l.current=y,_.moveNext())},Vi)})},[e,o]);return h.useEffect(()=>g,[g]),{active:t,start:u,stop:g}}const Fe=650,dn="__agent__",Yn="__model__",Qn="__template__:",Qi=h.lazy(async()=>{await Promise.all([ue(()=>Promise.resolve({}),__vite__mapDeps([1])),ue(()=>Promise.resolve({}),__vite__mapDeps([2]))]);const{RuntimeDiagram:e}=await ue(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-B2IYfHo7.js");return{RuntimeDiagram:n}},__vite__mapDeps([3,4,5]));return{default:e}}),ln=h.lazy(()=>ue(()=>import("./MonacoEditor-BBA4irky.js").then(e=>e.M),__vite__mapDeps([6,4,7]))),qi=h.lazy(()=>ue(()=>import("./vendor-modeler-DCY-cZzL.js"),__vite__mapDeps([8,4,5,9,10,11,12,1,2]))),qn=h.lazy(async()=>{const{FormRenderer:e}=await ue(async()=>{const{FormRenderer:n}=await import("./FormRenderer-CjPm9J1B.js");return{FormRenderer:n}},__vite__mapDeps([13,4,11,9,10,14]));return{default:e}});function cn(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function Ji({example:e,initialBrainKind:n,initialTourId:t}){var yn,vn,Mn,xn,Nn,En,kn,In;const[r,i]=h.useState(e.bpmn),s=wi(),[l,m]=h.useState(null);h.useEffect(()=>{n&&n!==s.kind&&s.setKind(n)},[]),h.useEffect(()=>{xi({brain:s.kind})},[s.kind]);const[p,o]=h.useState(()=>Object.fromEntries(e.handlers.map(M=>[M.elementId,M.source]))),[d,g]=h.useState(e.scriptedAgent??""),[u,w]=h.useState(()=>Qe(e.templates)),_=h.useMemo(()=>kr(e,p,r,u),[e,p,r,u]),y=_.model,b=ei({bpmn:_.resolvedBpmn}),v=Yi(e.tour,()=>b.snapshot);h.useEffect(()=>{var M;t&&((M=e.tour)==null?void 0:M.id)===t&&v.start()},[]);const k=y.startFormId?((yn=e.forms)==null?void 0:yn[y.startFormId])??null:null,[C,Z]=h.useState(()=>({...e.seed,...k?Ti(k):{}})),[K,ge]=h.useState(y.agent?dn:((vn=e.handlers[0])==null?void 0:vn.elementId)??""),[q,de]=h.useState(!1),[V,Q]=h.useState(!1),[$,P]=h.useState(null),[E,N]=h.useState([]),[F,X]=h.useState({}),[Ne,Oe]=h.useState(!1),je=h.useRef(null),[Ce,Ee]=h.useState({}),[rn,Pe]=h.useState(!1),Ue=h.useRef(null),le=h.useRef(!1),Se=h.useRef(0),Ae=h.useRef(0),ne=h.useRef({current:void 0}),ke=h.useRef({}),Ie=h.useRef({}),Be=h.useMemo(()=>{const M=new Map;for(const x of y.processes){for(const T of x.tasks)M.set(T.elementId,T.label);for(const T of x.agents){M.set(T.elementId,T.label);for(const B of T.tools)M.set(B.elementId,B.label)}for(const T of x.userTasks)M.set(T.elementId,T.label)}return x=>M.get(x)??x},[y]),z=h.useCallback(M=>{N(x=>{if(M.key){const T=x.findIndex(B=>B.key===M.key);if(T>=0){const B=[...x];return B[T]={...B[T],...M},B}}return[...x,{...M,id:Ae.current++}].slice(-80)})},[]),_e=h.useMemo(()=>{var M;return((M=b.snapshot)==null?void 0:M.userTasks.find(x=>x.state==="Created"))??null},[b.snapshot]),he=h.useMemo(()=>{const M=y.processes.flatMap(T=>T.tasks),x=new Map;for(const T of e.handlers){if(!T.manualControl)continue;const B=M.find(A=>A.elementId===T.elementId);B&&x.set(B.jobType,{...T.manualControl,elementId:T.elementId})}return x},[e.handlers,y]),ye=h.useMemo(()=>{if(!b.snapshot)return null;for(const M of b.snapshot.jobs){const x=he.get(M.jobType);if(x&&M.state==="Created")return{job:M,control:x}}return null},[b.snapshot,he]),Je=h.useMemo(()=>{if(!y.agent||!b.snapshot)return[];const M=new Map(b.snapshot.elementStats.map(x=>[x.elementId,x.completed]));return y.agent.tools.filter(x=>(M.get(x.elementId)??0)===0)},[y.agent,b.snapshot]),oe=_e?y.userTasks.find(M=>M.elementId===_e.elementId):void 0,Le=oe!=null&&oe.formId?((Mn=e.forms)==null?void 0:Mn[oe.formId])??null:null,Re=h.useCallback(async(M,x,T,B)=>{var be,re,se;let A=T,ae=0;for(;Se.current===B&&A&&A.completedInstances<1&&ae++<80;){const J=await b.stepWorkers(M,{agents:x});if(Se.current!==B)return A;A=(J==null?void 0:J.snapshot)??A;const te=(be=A.instances[0])==null?void 0:be.variables;if(te&&X({...te}),A.userTasks.some(Y=>Y.state==="Created")){z({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!J){z({kind:"error",text:"▶ run stopped — no dispatch round was returned"});break}if(J.handled===0){const Y=A.messageSubscriptions[0];if(J.reason==="messages"&&Y){z({kind:"vars",text:`📨 correlating message "${Y.messageName}" (key: ${Y.correlationKey})`,elementId:Y.elementId});const G=b.correlateMessage(Y.messageName,Y.correlationKey,"{}");if(G){A=G;const ie=(re=A.instances[0])==null?void 0:re.variables;ie&&X({...ie}),await new Promise(we=>setTimeout(we,Fe));continue}z({kind:"error",text:`▶ run stopped — correlating "${Y.messageName}" (key: ${Y.correlationKey}) failed`,elementId:Y.elementId})}if(J.reason==="signals"&&A.signalSubscriptions.length>0){const G=A.signalSubscriptions[0],ie=b.broadcastSignal(G.signalName,"{}");if(ie){A=ie,z({kind:"vars",text:`📡 broadcasting signal "${G.signalName}" — every waiting subscription unblocks`,elementId:G.elementId});const we=(se=A.instances[0])==null?void 0:se.variables;we&&X({...we}),await new Promise(on=>setTimeout(on,Fe));continue}z({kind:"error",text:`▶ run stopped — broadcasting signal "${G.signalName}" failed`,elementId:G.elementId})}if(J.reason==="timers"){const G=A.timers.reduce((ie,we)=>Math.min(ie,we.dueInMs),1/0);if(Number.isFinite(G)){const ie=b.advanceTime(Math.max(G,0)+1);if(ie){A=ie,z({kind:"step",text:"🕐 the clock advanced — timer fired"}),await new Promise(we=>setTimeout(we,Fe));continue}}}break}await new Promise(Y=>setTimeout(Y,Fe))}return A&&A.completedInstances>=1?z({kind:"done",text:"✅ process instance completed"}):A&&A.incidentElementIds.length>0&&z({kind:"error",text:"A job failed — incident on the diagram"}),A},[b,z]),I=h.useCallback(async M=>{var A,ae,be;if(!ye||le.current)return;const{job:x,control:T}=ye,B=++Se.current;le.current=!0,de(!0);try{let re,se;if(M==="complete")re=b.completeJobManually(x.jobType,"{}"),se="  ↳ completed normally";else if(T.action.kind==="timer"){const J=((ae=(A=b.snapshot)==null?void 0:A.timers[0])==null?void 0:ae.dueInMs)??0;re=b.advanceTime(Math.max(J,0)+1),se="  ↳ advanced the clock — timer fired"}else{const{errorCode:J,message:te}=T.action;re=b.throwJobError(x.jobType,J,te),se=`  ↳ threw BPMN error ${J}: ${te}`}if(re){z({kind:"vars",text:se,elementId:x.elementId});const J=(be=re.instances[0])==null?void 0:be.variables;J&&X({...J}),await new Promise(te=>setTimeout(te,Fe)),await Re(ke.current,Ie.current,re,B)}else z({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:x.elementId})}finally{le.current=!1,de(!1)}},[ye,b,z,Re]),D=h.useCallback(async()=>{var J;let M=null;try{y.agent&&d.trim()&&(M=hr(d))}catch(te){return P(te instanceof Error?te.message:String(te)),null}ne.current={current:void 0};let x;if(e.imageInput){const te=s.vision;x={read:te??hi(e.scriptedVision).read,live:!!te,resolve:G=>b.getRunImage(G)}}const T=wr(y,_.handlers,z,ne.current,x);for(const te of he.keys())delete T[te];const B={};if(y.agents.length>0){if(s.kind!=="scripted"&&s.chat){const Y=new Map;for(const G of y.agents)Y.set(G.jobType,[...Y.get(G.jobType)??[],G]);for(const[G,ie]of Y)B[G]=Br(ie,s.chat,z,{turnRef:ne.current,requiredTools:e.requiredTools})}else if(M&&y.agent){const Y=y.agent.elementId;B[y.agent.jobType]=async G=>{if(G.elementId!==Y)throw new Error(`No scripted agent handler for "${G.elementId}" — only "${Y}" (the primary process's first agent host) is driven by the scripted brain. Use a live brain to exercise more than one host.`);const ie=await M(G),we=(ie.activateElements??[]).map(on=>on.elementId).join(", ");return z({kind:"agent",text:ie.completionConditionFulfilled?"🤖 scripted agent: done":`🤖 scripted agent: calling ${we||"(nothing)"}`}),ie}}}N([]),Ee({});const A={...e.seed,...C,...sr(e.imageInput?l:null)};X(A),ke.current=T,Ie.current=B;const ae=b.redeploy(r),be=(ae==null?void 0:ae[0])??y.processId;z({kind:"start",text:`Starting "${be}" — ${y.agent?s.kind==="scripted"||!s.chat?"scripted brain":`live brain (${s.modelInUse??s.kind})`:"no agent in this model"}`});const re=b.createInstance(be,JSON.stringify(A)),se=(J=re==null?void 0:re.instances[0])==null?void 0:J.key;return e.imageInput&&l&&se&&b.setRunImage(se,l),{workers:T,agents:B,snap:re}},[b,e,_,r,d,C,l,y,s,z,he]),U=!!b.snapshot&&b.snapshot.completedInstances<1,Te=!U&&!!k&&!Ne,Tt=h.useCallback(async()=>{if(!(b.phase!=="ready"||le.current||V||_.hasErrors)){le.current=!0,de(!0);try{let M=ke.current,x=Ie.current,T=b.snapshot;const B=++Se.current;if(!U){if(je.current&&!je.current.validate())return;P(null);const A=await D();if(!A)return;M=A.workers,x=A.agents,T=A.snap,await new Promise(ae=>setTimeout(ae,Fe))}await Re(M,x,T,B)}finally{le.current=!1,de(!1)}}},[b,V,_.hasErrors,U,D,Re]),jt=h.useCallback(async()=>{var M;if(!(b.phase!=="ready"||le.current||V||_.hasErrors)){le.current=!0,Q(!0);try{let x=ke.current,T=Ie.current,B=b.snapshot;if(!U){if(je.current&&!je.current.validate())return;P(null);const se=await D();if(!se)return;x=se.workers,T=se.agents,B=se.snap}if(!B||B.completedInstances>=1)return;const A=B.takenSequenceFlows.length,ae=await b.stepWorkers(x,{agents:T});if(!ae){z({kind:"error",text:"⏭ step failed — no dispatch round was returned"});return}const be=(M=ae.snapshot.instances[0])==null?void 0:M.variables;be&&X({...be});const re=ni(ae.snapshot.takenSequenceFlows,A);z(ti(ae,re,Be,he))}finally{le.current=!1,Q(!1)}}},[b,V,_.hasErrors,U,D,z,Be,he]),Pt=h.useCallback(()=>{le.current=!1,Se.current++,de(!1),Q(!1),b.reset(),N([]),X({})},[b]),St=h.useCallback(()=>{if(!_e||Ue.current&&!Ue.current.validate())return;const M=b.completeUserTask(_e.key,JSON.stringify(Ce));z({kind:"human",text:`👤 ${cn(Ce)}`}),M&&M.completedInstances>=1&&z({kind:"done",text:"✅ process instance completed"})},[_e,Ce,b,z]),At=h.useMemo(()=>{var M,x;return b.phase==="loading"?a.jsx(W,{variant:"neutral",children:"Booting engine…"}):b.phase==="error"?a.jsx(W,{variant:"danger",children:"Engine error"}):q?a.jsx(W,{variant:"info",children:"Running…"}):V?a.jsx(W,{variant:"info",children:"Stepping…"}):(((M=b.snapshot)==null?void 0:M.incidentElementIds.length)??0)>0?a.jsx(W,{variant:"danger",children:"Incident"}):_e?a.jsx(W,{variant:"warning",children:"Waiting for a human"}):(((x=b.snapshot)==null?void 0:x.completedInstances)??0)>=1?a.jsx(W,{variant:"success",children:"Completed"}):b.snapshot?a.jsx(W,{variant:"warning",children:"Paused"}):a.jsx(W,{variant:"neutral",children:"Ready"})},[b.phase,b.snapshot,q,V,_e]);return a.jsxs("div",{className:"runner",children:[a.jsxs("section",{className:"intro",children:[a.jsx("h1",{children:e.title}),a.jsx("p",{children:e.blurb}),a.jsxs("div",{className:"controls",children:[a.jsx(H,{"data-tour":fe.runButton,onClick:()=>void Tt(),disabled:b.phase!=="ready"||q||V||_.hasErrors||Te,children:"▶ Run"}),a.jsx(H,{variant:"secondary",onClick:()=>void jt(),disabled:b.phase!=="ready"||q||V||_.hasErrors||Te||(((xn=b.snapshot)==null?void 0:xn.completedInstances)??0)>=1,children:"⏭ Step"}),a.jsx(H,{variant:"secondary",onClick:Pt,disabled:b.phase!=="ready"||V,children:"↺ Reset"}),e.tour&&a.jsx(H,{variant:"secondary",onClick:v.start,disabled:v.active,children:v.active?"Touring…":`🧭 ${e.tour.label}`}),At]}),b.phase==="error"&&a.jsxs(ce,{variant:"destructive",children:[a.jsx(me,{children:"Engine error"}),a.jsx(pe,{children:b.error})]}),$&&a.jsxs(ce,{variant:"destructive",children:[a.jsx(me,{children:"Code didn't compile"}),a.jsx(pe,{children:$})]}),_.hasErrors&&a.jsxs(ce,{variant:"destructive",children:[a.jsx(me,{children:"Run is disabled — the diagram has unresolved references"}),a.jsx(pe,{children:a.jsx("ul",{className:"diagnostics",children:_.diagnostics.filter(M=>M.severity==="error").map((M,x)=>a.jsx("li",{children:M.message},x))})})]}),!_.hasErrors&&_.diagnostics.length>0&&a.jsxs(ce,{children:[a.jsx(me,{children:"Heads up"}),a.jsx(pe,{children:a.jsx("ul",{className:"diagnostics",children:_.diagnostics.map((M,x)=>a.jsx("li",{children:M.message},x))})})]})]}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"col",children:[a.jsx(ve,{sectionId:"process","data-tour":fe.diagram,title:"Process",description:`${y.processName} — live token (green), incidents (red).`,children:a.jsx(h.Suspense,{fallback:a.jsx("div",{className:"diagram-fallback",children:b.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:a.jsx(Qi,{xml:_.resolvedBpmn,activeIds:((Nn=b.snapshot)==null?void 0:Nn.activeElementIds)??[],incidentIds:((En=b.snapshot)==null?void 0:En.incidentElementIds)??[],className:"diagram"})})}),_e&&a.jsxs(ve,{sectionId:"human-task",title:(oe==null?void 0:oe.label)??"Human task",description:Le?`Rendered from the model's form "${oe==null?void 0:oe.formId}".`:"This task has no linked form — complete it with no variables.",children:[Je.length>0&&a.jsxs(ce,{variant:"destructive",children:[a.jsx(me,{children:"The agent didn't finish its checks"}),a.jsxs(pe,{children:["It completed without running"," ",Je.map(M=>M.label||M.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),Le&&a.jsx(h.Suspense,{fallback:a.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:a.jsx(qn,{ref:Ue,schema:Le,values:Ce,onChange:(M,x)=>Ee(T=>({...T,[M]:x})),context:F,onValidityChange:Pe})}),a.jsx(H,{onClick:St,disabled:!!Le&&!rn,children:"Complete task"})]}),ye&&a.jsx(ve,{sectionId:"manual-job",title:ye.control.label,description:"This job is held here on purpose — pick how it resolves.",children:a.jsxs("div",{className:"controls",children:[a.jsx(H,{onClick:()=>void I("complete"),disabled:q||V,children:ye.control.completeLabel??"✅ Complete normally"}),a.jsx(H,{variant:"secondary",onClick:()=>void I("action"),disabled:q||V,children:ye.control.action.label})]})}),a.jsxs("div",{className:"row",children:[a.jsx(ve,{sectionId:"variables",className:"grow","data-tour":fe.variablesPanel,title:"Variables",description:"The instance payload, live.",children:a.jsx("pre",{className:"vars",children:cn(F,2)})}),a.jsx(Li,{log:E,elementStats:(kn=b.snapshot)==null?void 0:kn.elementStats,incidents:(In=b.snapshot)==null?void 0:In.incidents,labelFor:Be})]})]}),a.jsxs("div",{className:"col",children:[(y.agent||e.imageInput)&&a.jsx(ve,{sectionId:"brain","data-tour":fe.brainPanel,title:"Brain",description:y.agent?`What drives “${y.agent.label}”. The model recommends; the process governs.`:"What reads the image. The model recommends; the process governs.",children:a.jsx(Ni,{brain:s,showText:!!y.agent,showVision:!!e.imageInput})}),a.jsxs(ve,{sectionId:"start",title:"Start",description:y.startFormId?`The model's start form "${y.startFormId}".`:e.imageInput?"Pick a seed photo or upload your own to read.":"The starting payload.",children:[e.imageInput&&a.jsx(Ii,{imageInput:e.imageInput,value:l,onSelect:m,disabled:q}),e.scenarios&&a.jsx("div",{className:"scenarios",children:e.scenarios.map(M=>a.jsx(H,{size:"sm",variant:"secondary",disabled:q,onClick:()=>Z(x=>({...x,...M.variables})),children:M.label},M.label))}),k?a.jsx(h.Suspense,{fallback:a.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:a.jsx(qn,{ref:je,schema:k,values:C,onChange:(M,x)=>Z(T=>({...T,[M]:x})),disabled:q,onValidityChange:Oe})}):a.jsx("pre",{className:"vars",children:cn(C,2)})]}),a.jsx(ve,{sectionId:"code",className:"editors","data-tour":fe.codePanel,title:"Code",description:"One handler per BPMN element, plus a model tab holding the editable diagram — select an element there to edit its properties. Return variables to merge, or throw to fail the job.",children:a.jsx(h.Suspense,{fallback:a.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:a.jsxs($t,{value:K,onValueChange:ge,children:[a.jsxs(Gt,{children:[a.jsx(He,{value:Yn,children:"model"}),y.agent&&a.jsx(He,{value:dn,children:"agent (scripted)"}),e.handlers.map(M=>{var x;return a.jsx(He,{value:M.elementId,children:((x=y.tasks.find(T=>T.elementId===M.elementId))==null?void 0:x.label)??M.elementId},M.elementId)}),Object.keys(u).map(M=>a.jsx(He,{value:Qn+M,children:M},M))]}),a.jsxs(We,{value:Yn,children:[a.jsxs("div",{className:"editor-meta",children:[a.jsx("strong",{children:"Model"}),a.jsx("code",{children:"click an element to edit its properties on the right — Run re-reads whatever you leave here"}),a.jsx(H,{variant:"secondary",size:"sm",onClick:()=>i(e.bpmn),disabled:r===e.bpmn,children:"Revert to original"})]}),a.jsx(qi,{value:r,onChange:i})]}),y.agent&&a.jsxs(We,{value:dn,children:[a.jsxs("div",{className:"editor-meta",children:[a.jsx("strong",{children:y.agent.label}),a.jsx("code",{children:s.kind==="scripted"||!s.chat?"in use":"unused — a live brain is connected"})]}),a.jsx("div",{className:"editor-wrap",children:a.jsx(ln,{height:"360px",defaultLanguage:"javascript",value:d,onChange:M=>g(M??""),options:mn})})]}),e.handlers.map(M=>{var x;return a.jsxs(We,{value:M.elementId,children:[a.jsxs("div",{className:"editor-meta",children:[a.jsx("strong",{children:((x=y.tasks.find(T=>T.elementId===M.elementId))==null?void 0:x.label)??M.elementId}),a.jsx("code",{children:M.standsInFor??M.elementId})]}),a.jsx("div",{className:"editor-wrap",children:a.jsx(ln,{height:"360px",defaultLanguage:"javascript",value:p[M.elementId],onChange:T=>o(B=>({...B,[M.elementId]:T??""})),options:mn})})]},M.elementId)}),Object.keys(u).map(M=>a.jsxs(We,{value:Qn+M,children:[a.jsxs("div",{className:"editor-meta",children:[a.jsx("strong",{children:M}),a.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+M+"}}"]})]}),a.jsx("div",{className:"editor-wrap",children:a.jsx(ln,{height:"360px",defaultLanguage:"markdown",value:u[M],onChange:x=>w(T=>Qe(T,{[M]:x??""})),options:mn})})]},M))]})})}),y.agent&&a.jsx(ve,{sectionId:"tools",title:"Tools, as the model sees them",description:a.jsxs(a.Fragment,{children:["Read from the diagram — element name, documentation, and every",a.jsx("code",{children:" fromAi(…)"})," argument."]}),children:a.jsx("ul",{className:"tool-list",children:y.agent.tools.map(M=>a.jsxs("li",{children:[a.jsx("code",{children:M.elementId}),a.jsxs("span",{children:[" — ",M.documentation||M.label]}),M.args.length>0&&a.jsx("ul",{children:M.args.map(x=>a.jsxs("li",{children:[a.jsxs("code",{children:[x.name,": ",x.type]})," ","— ",x.description]},x.name))})]},M.elementId))})})]})]})]})}const mn={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},Hi=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Wi=`async (job, { sleep }) => {
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
}`,Zi=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above; this body
  // does not run either. Unlike Activity_guarded, this task has no boundary
  // event: firing its error action has nothing to catch it, so it becomes an
  // incident instead of a handled alternate path. Completing it normally
  // completes the job with {} — no trace line, no shipped/tracking variables
  // — and the token reaches "Order shipped".
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Ki={id:"learn-error-boundary",title:"Error boundary event",group:"learn-bpmn",blurb:`A boundary event attached to a task catches something that happens while the task is running and reroutes the token — here, a thrown BPMN error. Hit Run and the process stops at "Charge payment (guarded)" with a card under the diagram offering two buttons: press "Simulate: card declined" and watch the attached boundary event catch the error, skipping straight to "Handled — order cancelled". Then Reset, complete that first job normally, and decline the second one on "Ship items (unguarded)" — this time it becomes an incident, because that task has no boundary event and the engine has nothing to reroute the token with. That's exactly what breaks if you forget the boundary event (or give it the wrong errorRef): a failure that should be a modelled alternate path becomes a stuck instance a human has to resolve by hand. Complete both jobs normally instead to see the unattended happy path all the way to "Order shipped".`,docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/boundary-events/",bpmn:Hi,seed:{},handlers:[{elementId:"Activity_guarded",standsInFor:"job worker — charge-payment",source:Wi,manualControl:{label:"Charge payment (guarded)",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_unguarded",standsInFor:"job worker — ship-items",source:Zi,manualControl:{label:"Ship items (unguarded)",completeLabel:"✅ Ship it",action:{kind:"error",errorCode:"CARRIER_REJECTED",message:"The carrier rejected the shipment — nothing catches this.",label:"❌ Simulate: carrier rejected (becomes an incident)"}}}]},Xi=Object.freeze(Object.defineProperty({__proto__:null,default:Ki},Symbol.toStringTag,{value:"Module"})),eo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,no=`async (job, { num, trace, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const orderTotal = num("orderTotal", 40);

  await sleep(300);

  // This is the variable the gateway's conditional sequence flow reads —
  // whatever this handler decides is what actually steers the token.
  const route = orderTotal >= 100 ? "express" : "standard";
  trace(\`order total $\${orderTotal} -> route: \${route}\`);

  // Whatever you return is merged onto the process instance.
  return { route };
}`,to=`async (job, { trace, sleep }) => {
  trace("expedited courier picks up the order");
  await sleep(400);

  return { shipped: true, method: "express" };
}`,ro=`async (job, { trace, sleep }) => {
  trace("order queued for standard courier pickup");
  await sleep(400);

  return { shipped: true, method: "standard" };
}`,io={id:"learn-exclusive-gateway",title:"Exclusive gateway",group:"learn-bpmn",blurb:`An exclusive gateway is the fork in the road: exactly one of its outgoing sequence flows is taken, chosen by evaluating each flow's FEEL condition in declaration order, first match wins. A default flow (drawn with a slash through its start, not a diamond marker) has no condition and is the fallback taken when every conditional flow evaluates false — that's what makes an exclusive gateway safe to deploy without an explicit case for every value. Run this and watch 'Check order total' decide a route variable, then watch the gateway send the token down 'Express ship' when the order is large enough, or 'Standard ship' otherwise (the default flow). Try both from the Start panel on the right: it holds a "Small order" and a "Large order" button that swap the payload for you, or you can edit orderTotal there yourself. To see the conditions themselves, open the model tab in the Code panel and click either arrow leaving the gateway — the FEEL is under Condition. Get one wrong (or misspell the variable name) and the flow you meant to take is silently skipped in favour of whichever one does evaluate true, or the default if none do — no error, just the wrong branch.`,docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/gateways/gateways/#exclusive-gateway",bpmn:eo,seed:{orderTotal:40},scenarios:[{label:"Small order — standard ship (default flow)",variables:{orderTotal:40}},{label:"Large order — express ship (conditional flow)",variables:{orderTotal:150}}],handlers:[{elementId:"Activity_check_order",standsInFor:"job worker — check-order-total",source:no},{elementId:"Activity_express_ship",standsInFor:"job worker — express-ship",source:to},{elementId:"Activity_standard_ship",standsInFor:"job worker — standard-ship",source:ro}]},oo=Object.freeze(Object.defineProperty({__proto__:null,default:io},Symbol.toStringTag,{value:"Module"})),ao=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,so=`async (job, { text, trace }) => {
  const orderId = text("orderId", "unknown-order");

  trace("shipment confirmed for " + orderId + " — recording it");

  return { shipmentRecorded: true };
}`,lo={id:"learn-message-correlation",title:"Message catch event + correlation key",group:"learn-bpmn",blurb:'A message intermediate catch event pauses the token until a message with a matching name and correlation key is published — the BPMN analogue of "wait for this specific order\'s shipment to be confirmed", not just "wait for any shipment-confirmed message". Run this and watch the token park on the catch event; there\'s no external broker in the browser, so the page correlates the message itself the instant the wait is reached, echoing back the exact correlationKey (`=orderId`) the subscription resolved to — then the token resumes into Record confirmation and on to the end event. To see where that key comes from: in the Code panel, open the model tab, click "Wait for shipment confirmed", and expand Message in the properties panel on the right. Subscription correlation key holds `orderId` (the `=` beside the box marks it as a FEEL expression), and Name holds `shipment-confirmed` — those two together are what a publisher has to match. Edit them freely; because this page publishes the key the subscription itself resolved, the run stays self-consistent either way. In a real deployment, where a separate system does the publishing, pointing that expression at a variable the instance never sets leaves the catch event waiting forever, and omitting zeebe:subscription altogether is rejected at deploy time with "has no zeebe:subscription correlationKey" — docs/engine-coverage.md records both.',docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/message-events/",bpmn:ao,seed:{orderId:"ORD-42"},handlers:[{elementId:"Activity_record",standsInFor:"job worker — record-confirmation",source:so}]},co=Object.freeze(Object.defineProperty({__proto__:null,default:lo},Symbol.toStringTag,{value:"Module"})),mo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,po=`async (job, { text, sleep, trace }) => {
  // Each parallel instance gets its own 'item' from the input collection.
  const item = text("item", "widget");

  trace("processing " + item);
  await sleep(400);

  // Whatever you return is merged onto this instance's scope, then collected
  // into the process-level 'results' array via outputElement/outputCollection.
  return { result: item.toUpperCase() + "-DONE" };
}`,uo={id:"learn-multi-instance-parallel",title:"Parallel multi-instance",group:"learn-bpmn",blurb:`A multi-instance activity runs its task once per element of a collection, spawning that many job instances of the same element in parallel, and only lets the token move on once every one of them completes. Run this and watch three 'Process item' jobs activate together for apple, banana, cherry, and complete (in any order) before the process reaches its end event. Nothing about the diagram says "three" — that comes from the collection, so use the buttons in the Start panel on the right to swap between one, three, and six items and hit Run again; the Activity panel logs one 'Process item' line per element, so the fan-out is right there to count. The property tying the two together is in the Code panel: open the model tab, click "Process item", and expand Multi-instance in the properties panel on the right — Input collection holds \`items\`, the FEEL expression naming the variable to fan out over. Drop it entirely and the activity silently degenerates to a single ordinary instance, with no error to tell you it happened. Revert to original puts it back.`,docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/multi-instance/",bpmn:mo,seed:{items:["apple","banana","cherry"]},scenarios:[{label:"One item — a single instance",variables:{items:["apple"]}},{label:"Three items — fans out to three",variables:{items:["apple","banana","cherry"]}},{label:"Six items — fans out to six",variables:{items:["apple","banana","cherry","damson","elderberry","fig"]}}],handlers:[{elementId:"Activity_process",standsInFor:"job worker — process-item",source:po}]},go=Object.freeze(Object.defineProperty({__proto__:null,default:uo},Symbol.toStringTag,{value:"Module"})),ho=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,bo=`async (job, { text, sleep, trace }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "widget");

  trace("packing " + item);
  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { packed: true };
}`,_o=`async (job, { sleep, trace }) => {
  trace("handing over to the courier");
  await sleep(400);

  return { dispatched: true, tracking: "SVC" + Math.floor(Math.random() * 1e9) };
}`,wo={id:"learn-service-task",title:"Service task + sequence flow",group:"learn-bpmn",blurb:`A service task is a unit of work a worker (not a human) performs; a sequence flow is the arrow that hands the token from one to the next once its task completes. Run this and watch each task activate, run its handler, and complete in order — Prepare package, then Dispatch courier — before the process reaches its end event. The link between the two halves is the job type: in the Code panel, open the model tab, click "Prepare package", and expand Task definition in the properties panel on the right — Job type is the name a worker has to subscribe to in order to be handed this task's work. (This page wires its own handlers up from whatever the model declares, so renaming it here keeps working; on a real cluster the worker is a separate process started with a job type of its own, and a mismatch means nobody ever activates the job, so the run stalls forever.)`,docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/service-tasks/",bpmn:ho,seed:{item:"camunda-t-shirt"},handlers:[{elementId:"Activity_prepare",standsInFor:"job worker — prepare-package",source:bo},{elementId:"Activity_dispatch",standsInFor:"job worker — dispatch-courier",source:_o}]},fo=Object.freeze(Object.defineProperty({__proto__:null,default:wo},Symbol.toStringTag,{value:"Module"})),yo=`<?xml version="1.0" encoding="UTF-8"?>\r
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_learn_signal_broadcast" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.36.1" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.8.0">\r
  <bpmn:signal id="Signal_AllClear" name="all-clear" />\r
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
      <bpmn:signalEventDefinition id="SignalEventDefinition_ops" signalRef="Signal_AllClear" />\r
    </bpmn:intermediateCatchEvent>\r
    <bpmn:intermediateCatchEvent id="Event_wait_floor" name="Floor waits for all-clear">\r
      <bpmn:incoming>Flow_fork_floor</bpmn:incoming>\r
      <bpmn:outgoing>Flow_floor_reopen</bpmn:outgoing>\r
      <bpmn:signalEventDefinition id="SignalEventDefinition_floor" signalRef="Signal_AllClear" />\r
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
`,vo=`async (job, { sleep, trace }) => {
  trace("all-clear received — resuming operations");
  await sleep(400);

  return { resumed: true };
}`,Mo=`async (job, { sleep, trace }) => {
  trace("same all-clear — reopening the floor");
  await sleep(400);

  return { floorReopened: true };
}`,xo={id:"learn-signal-broadcast",title:"Signal intermediate catch event + broadcast",group:"learn-bpmn",blurb:`A signal intermediate catch event parks the token until someone broadcasts a signal by name. Unlike a message, a signal isn't correlated to one waiting instance — broadcasting it unblocks every open subscription for that name at once. That's why this model forks: both "Ops waits for all-clear" and "Floor waits for all-clear" park on the same signal, and one broadcast releases the pair together, so 'Resume operations' and 'Reopen the floor' both run before the join lets the token reach the end event. Run it and watch both branches light up off a single broadcast — a message could not do that, because a correlation key targets exactly one waiting subscription. To see the name being matched: in the Code panel, open the model tab, click either catch event, and expand Signal in the properties panel on the right — Name holds \`all-clear\` on both. Change it on just one of them and hit Run: the Activity panel now shows two 📡 broadcast lines instead of one, because the branches no longer share a name and each needs its own broadcast to be released — the count of broadcasts is exactly the count of distinct signal names being waited on.`,docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/signal-events/signal-event/",bpmn:yo,seed:{},handlers:[{elementId:"Activity_resume",standsInFor:"job worker — resume-operations",source:vo},{elementId:"Activity_reopen",standsInFor:"job worker — reopen-floor",source:Mo}]},No=Object.freeze(Object.defineProperty({__proto__:null,default:xo},Symbol.toStringTag,{value:"Module"})),Eo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ko=`async (job, { sleep, trace }) => {
  trace("the timer fired — sending the reminder now");
  await sleep(400);

  return { reminderSent: true };
}`,Io={id:"learn-timer-catch-event",title:"Timer intermediate catch event",group:"learn-bpmn",blurb:`A timer catch event parks the token until a point in time — here, a fixed duration after the token arrives. Run this and watch the token wait at the timer with nothing else happening, then resume on its own once the duration elapses: 'Send the reminder' activates, runs, and the process completes. Nothing needs to poll or push it forward; the engine itself wakes the instance when the timer's due time passes. (This page fast-forwards a virtual clock so the 3-second wait doesn't cost you 3 real seconds — a live deployment waits the actual PT3S.) To change the wait: in the Code panel, open the model tab, click "Wait 3 seconds", and expand Timer in the properties panel on the right — Type is Duration and Value holds the ISO-8601 duration, so PT30S or PT5M works the same way. Revert to original puts it back.`,docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/timer-events/timer-event-type/",bpmn:Eo,seed:{},handlers:[{elementId:"Activity_after_timer",standsInFor:"job worker — send-reminder",source:ko}]},To=Object.freeze(Object.defineProperty({__proto__:null,default:Io},Symbol.toStringTag,{value:"Module"})),jo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Po="Camunda Cloud",So="8.10.0",Ao={name:"Camunda Web Modeler",version:"9b5d5ef"},Do=19,Co="learn-user-task-form-review",Bo=[{text:`# Review request

A request is waiting for you. Decide whether to approve or reject it, then submit.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Requester:** {{requester}}

**Details:** {{details}}`,type:"text",layout:{row:"Row_details",columns:null},id:"Field_ReviewDetails"},{label:"Decision",values:[{label:"Approve",value:"approved"},{label:"Reject",value:"rejected"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_ReviewDecision",key:"decision",validate:{required:!0}},{label:"Comments",description:"Optional note recorded alongside your decision.",type:"textarea",layout:{row:"Row_comments",columns:null},id:"Field_ReviewComments",key:"comments"}],Lo="default",Ro={executionPlatform:Po,executionPlatformVersion:So,exporter:Ao,schemaVersion:Do,id:Co,components:Bo,type:Lo},Fo={id:"learn-user-task-form",title:"User task + form",group:"learn-bpmn",blurb:`A user task is a step a human completes, not a worker — the token parks at the task until someone submits its form, then moves on. Run this and watch the process reach 'Review request' and wait; fill in the decision form that appears in its own card under the diagram and press Complete task to see the token resume and the process reach its end event. What binds that form to the task is one property: in the Code panel, open the model tab, click "Review request", and expand Form in the properties panel on the right — Form ID names the form the runner looks up and renders. A user task with no form binding still deploys and still parks the token, but the runner has nothing to render for it, so it offers a bare Complete button that finishes the task with no variables. Revert to original puts the binding back.`,docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/user-tasks/",bpmn:jo,forms:{"learn-user-task-form-review":Ro},seed:{requester:"Priya Shah",details:"Approve access to the shared design-review workspace."},handlers:[]},zo=Object.freeze(Object.defineProperty({__proto__:null,default:Fo},Symbol.toStringTag,{value:"Module"})),Oo=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,Uo=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,$o={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:fe.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"},waitFor:{kind:"activeElement",elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"},waitFor:{kind:"elementCompleted",elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:fe.variablesPanel}}],successEvent:{kind:"instanceCompleted"}},Go=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Vo="Camunda Cloud",Yo="8.10.0",Qo={name:"Camunda Web Modeler",version:"9b5d5ef"},qo=19,Jo="seed-export-shipment-ready",Ho=[{text:"# Use a predefined scenario...",type:"text",layout:{row:"Row_04pl1rt",columns:null},id:"Field_0a6kzzq"},{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Use pre-defined sceanrio - to use leave Shipment notes below blank.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{text:`The following shipments notes are used:
* Likely cleared: SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53.
* Likely flagged: SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1.`,type:"text",layout:{row:"Row_1h31mub",columns:null},id:"Field_0j1vwd9"},{text:"# ...or hand in your own data",type:"text",layout:{row:"Row_1wu4opr",columns:null},id:"Field_12u5gzd"},{label:"Shipment notes",description:"If set, overrides the scenario above. Leave blank to use the scenario selected above. The agent reads this to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],Wo="default",Zo={executionPlatform:Vo,executionPlatformVersion:Yo,exporter:Qo,schemaVersion:qo,id:Jo,components:Ho,type:Wo},Ko="Camunda Cloud",Xo="8.10.0",ea={name:"Camunda Web Modeler",version:"9b5d5ef"},na=19,ta="seed-export-compliance-review",ra=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],ia="default",oa={executionPlatform:Ko,executionPlatformVersion:Xo,exporter:ea,schemaVersion:na,id:ta,components:ra,type:ia},aa=Object.assign({"./prompts/system-prompt.md":Oo,"./prompts/user-prompt.md":Uo}),sa=Qe(Object.fromEntries(Object.entries(aa).map(([e,n])=>[ut(e),n.trimEnd()]))),Jn="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",da="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",la=`async (job) => {
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
}`,ca=`async (job, { text, sleep, trace }) => {
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
}`,ma=`async (job, { text, sleep, trace }) => {
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
}`,pa=`async (job, { num, sleep }) => {
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
}`,ua=`async (job, { text, trace }) => {
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
}`,ga=`async (job, { sleep }) => {
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
}`,ha={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:Go,forms:{"seed-export-shipment-ready":Zo,"seed-export-compliance-review":oa},seed:{scenario:Jn,shipmentNotes:""},scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:Jn,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:da,shipmentNotes:""}}],scriptedAgent:la,templates:sa,tour:$o,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:ca},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:ma},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:pa},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:ua},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:ga}]},ba=`You are a loan origination assistant at a retail bank. Your job is to gather everything a senior loan officer needs to decide an application — you do **not** decide it yourself.

Work through the case with the tools available to you:

- **Query customer** — find the applicant's existing relationship with the bank.
- **Credit bureau lookup** — pull their credit report.
- **Assess application** — run the bank's underwriting policy to get a debt-to-income ratio, a risk band, and a recommendation. Always run this; the officer's review depends on it.
- **Update application status** — mark the case as \`under-review\` once you have assessed it.

Call the tools in whatever order makes sense, but make sure the application has been assessed before you finish. When you have gathered the customer profile, the bureau report, and the policy assessment, and marked the status, you are done — a senior officer takes it from there.
`,_a="Gather this loan case for the senior officer: look up the customer, pull their credit bureau report, run the underwriting assessment, and set the application status to `under-review`. Then stop — the officer makes the decision.\n",wa={id:"loan-origination-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a loan application through the origination agent.",target:{anchor:fe.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the application and decides, turn by turn, which tools to call — look up the customer, pull a credit bureau report, run the underwriting policy, update the status. Nothing here is a fixed sequence.",target:{elementId:"LoanOriginationAgent"}},{title:"Policy, not opinion",description:"The assessment computes the debt-to-income ratio, a risk band and a recommendation from the verified figures — the deterministic policy the senior officer's review leans on.",target:{elementId:"AssessApplication"},waitFor:{kind:"elementCompleted",elementId:"AssessApplication"}},{title:"Every application meets a human",description:"Whatever the agent recommended, the token now waits here: no offer and no decline is reachable without a senior officer first signing off. Open the task to record the decision — the gateway routes on it.",target:{elementId:"SeniorOfficerReview"},waitFor:{kind:"activeElement",elementId:"SeniorOfficerReview"}},{title:"Everything the run recorded",description:"The variables panel shows the customer profile, the bureau report, the debt-to-income and risk band, and the recommendation — exactly what each tool wrote for the officer to weigh.",target:{anchor:fe.variablesPanel}}],successEvent:{kind:"elementCompleted",elementId:"AssessApplication"}},fa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,ya="Camunda Cloud",va="8.10.0",Ma={name:"Camunda Web Modeler",version:"9b5d5ef"},xa=19,Na="loan-application",Ea="default",ka=[{text:`# Loan application

Capture the applicant's details, then run the origination agent.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{label:"Applicant name",type:"textfield",layout:{row:"Row_applicant",columns:null},id:"Field_ApplicantName",key:"applicantName",defaultValue:"Ada Lovelace",validate:{required:!0}},{label:"Loan amount",description:"Amount requested.",type:"number",layout:{row:"Row_amount",columns:null},id:"Field_LoanAmount",key:"loanAmount",defaultValue:2e4},{label:"Loan purpose",type:"textfield",layout:{row:"Row_purpose",columns:null},id:"Field_LoanPurpose",key:"loanPurpose",defaultValue:"Home improvement"},{label:"Annual income",type:"number",layout:{row:"Row_income",columns:null},id:"Field_AnnualIncome",key:"annualIncome",defaultValue:96e3},{label:"Monthly debt payments",description:"Existing monthly repayments across all obligations.",type:"number",layout:{row:"Row_debt",columns:null},id:"Field_MonthlyDebt",key:"monthlyDebt",defaultValue:850},{label:"Stated credit score",description:"The applicant's self-reported score; the credit bureau tool confirms it.",type:"number",layout:{row:"Row_score",columns:null},id:"Field_CreditScore",key:"creditScore",defaultValue:782}],Ia={executionPlatform:ya,executionPlatformVersion:va,exporter:Ma,schemaVersion:xa,id:Na,type:Ea,components:ka},Ta="Camunda Cloud",ja="8.10.0",Pa={name:"Camunda Web Modeler",version:"9b5d5ef"},Sa=19,Aa="loan-senior-officer-review",Da="default",Ca=[{text:`# Senior officer review

Every application reaches this desk before an offer or a decline can be sent. Review the agent's findings, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Applicant:** {{applicantName}} — {{loanPurpose}}, amount {{loanAmount}}

**Customer relationship:** {{if customerProfile = null then "unknown" else customerProfile.segment + " (" + string(customerProfile.relationshipYears) + "y)"}}

**Credit bureau:** {{if bureauReport = null then "n/a" else string(bureauReport.score) + " (" + bureauReport.band + "), " + string(bureauReport.derogatoryMarks) + " derogatory mark(s)"}}

**Debt-to-income:** {{debtToIncome}}%

**Assessed risk band:** {{riskBand}}

**Policy recommendation:** {{recommendation}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Decision",values:[{label:"Approve — issue loan offer",value:"approved"},{label:"Decline — send decline notice",value:"declined"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_Decision",key:"decision",validate:{required:!0}},{label:"Officer note",description:"Recorded against the application; the decline notice quotes it as the reason.",type:"textarea",layout:{row:"Row_note",columns:null},id:"Field_ReviewNote",key:"reviewNote"}],Ba={executionPlatform:Ta,executionPlatformVersion:ja,exporter:Pa,schemaVersion:Sa,id:Aa,type:Da,components:Ca},La=Object.assign({"./prompts/system-prompt.md":ba,"./prompts/user-prompt.md":_a}),Ra=Qe(Object.fromEntries(Object.entries(La).map(([e,n])=>[ut(e),n.trimEnd()]))),Hn={applicantName:"Ada Lovelace",annualIncome:96e3,monthlyDebt:850,creditScore:782,loanAmount:2e4,loanPurpose:"Home improvement"},Fa={applicantName:"Cyrus Vale",annualIncome:38e3,monthlyDebt:1450,creditScore:566,loanAmount:42e3,loanPurpose:"Debt consolidation"},za=`async (job) => {
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
}`,Oa=`async (job, { text, sleep, trace }) => {
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
}`,Ua=`async (job, { text, num, sleep, trace }) => {
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
}`,$a=`async (job, { num, trace }) => {
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
}`,Ga=`async (job, { sleep, trace }) => {
  // Stands in for a write-back to the loan origination system. Marks the case
  // as awaiting the senior officer's decision.
  await sleep(200);
  trace("application status -> under-review");
  return { applicationStatus: "under-review", toolCallResult: "under-review" };
}`,Va=`async (job, { num, sleep, trace }) => {
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
}`,Ya=`async (job, { text, sleep, trace }) => {
  // Trunk service task on the declined path. Sends the applicant a decline
  // notice with the recorded reason, standing in for a notification channel.
  const note = text("reviewNote", "");
  const reason = note || "Application did not meet the lending policy.";
  await sleep(300);
  trace("decline notice sent");

  return { declineNotice: { reason: reason, sentTo: text("applicantName", "the applicant") } };
}`,Qa={id:"loan-origination",title:"Loan origination agent",blurb:"An AI agent gathers a loan case with its own tools — customer lookup, credit bureau, an underwriting policy, a status update — then every application passes through a mandatory senior-officer review before a gateway routes it to an offer or a decline. The agent advises; the process governs.",docsUrl:"https://camunda.com/orchestrate/agents/",bpmn:fa,forms:{"loan-application":Ia,"loan-senior-officer-review":Ba},seed:Hn,scenarios:[{label:"Strong applicant (policy recommends approve)",variables:Hn},{label:"Marginal applicant (policy recommends decline)",variables:Fa}],scriptedAgent:za,templates:Ra,tour:wa,requiredTools:["AssessApplication"],handlers:[{elementId:"QueryCustomer",standsInFor:"CRM connector — customer lookup",source:Oa},{elementId:"CreditBureauLookup",standsInFor:"REST connector — credit bureau",source:Ua},{elementId:"AssessApplication",standsInFor:"Script task — underwriting policy (FEEL)",source:$a},{elementId:"UpdateApplicationStatus",standsInFor:"REST connector — origination system",source:Ga},{elementId:"IssueLoanOffer",standsInFor:"REST connector — offer/booking system",source:Va},{elementId:"SendDeclineNotice",standsInFor:"REST connector — notifications",source:Ya}]},qa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ja=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Ha=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,Wa=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Za={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:qa,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Ja},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Ha},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Wa}]},Ka=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Xa=`async (job, { text, num, sleep, trace }) => {
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
}`,es={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:Ka,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:Xa}]},ns=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ts=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,rs=`async (job, { num, sleep }) => {
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
}`,is=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,os={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:ns,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:ts},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:rs,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:is,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},as="/pr-preview/pr-98/assets/de-bmw-mini-JBSk7QcF.jpg",ss="/pr-preview/pr-98/assets/de-bmw-mini.thumb-CUUmJrRO.jpg",ds="/pr-preview/pr-98/assets/uk-d651-rnb-XGipy2QN.jpg",ls="/pr-preview/pr-98/assets/uk-d651-rnb.thumb-mjEcbhUf.jpg",cs="/pr-preview/pr-98/assets/uk-mk70-orj-Cn6O3Xfm.jpg",ms="/pr-preview/pr-98/assets/uk-mk70-orj.thumb-CaeZ2vqU.jpg",ps="/pr-preview/pr-98/assets/uk-ni-ijz-8992-YXV44tgk.jpg",us="/pr-preview/pr-98/assets/uk-ni-ijz-8992.thumb-DYwok8jV.jpg",gs="/pr-preview/pr-98/assets/us-hyundai-genesis-gGpAIEpi.jpg",hs="/pr-preview/pr-98/assets/us-hyundai-genesis.thumb-DEEt19Mw.jpg",bs=`<?xml version="1.0" encoding="UTF-8"?>
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
`,_s="Camunda Cloud",ws="8.10.0",fs={name:"Camunda Web Modeler",version:"9b5d5ef"},ys=19,vs="plate-recognition-confirm",Ms="default",xs=[{text:`# Confirm the number plate

The in-browser vision model read a plate from the photo. It **recommends**; you **govern** — accept its reading or correct it before it is recorded.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ConfirmHeading"},{text:'**Model reading:** {{if modelPlate = null or modelPlate = "" then "(nothing read)" else modelPlate}}',type:"text",layout:{row:"Row_modelReading",columns:null},id:"Field_ModelReading"},{label:"Number plate",description:"Edit this if the model misread the plate. What you submit is what gets recorded.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ConfirmPlate",key:"confirmedPlate",validate:{required:!0}}],Ns={executionPlatform:_s,executionPlatformVersion:ws,exporter:fs,schemaVersion:ys,id:vs,type:Ms,components:xs},Es="Camunda Cloud",ks="8.10.0",Is={name:"Camunda Web Modeler",version:"9b5d5ef"},Ts=19,js="plate-recognition-manual",Ps="default",Ss=[{text:`# Couldn't read the plate

The vision model didn't return a confident reading for this photo (an unrecognised image, or no in-browser model connected). Enter the plate by hand, or re-run with the in-browser vision brain connected.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ManualHeading"},{label:"Number plate",description:"Type the plate exactly as it appears in the photo.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ManualPlate",key:"confirmedPlate",validate:{required:!0}}],As={executionPlatform:Es,executionPlatformVersion:ks,exporter:Is,schemaVersion:Ts,id:js,type:Ps,components:Ss},Ds="Camunda Cloud",Cs="8.10.0",Bs={name:"Camunda Web Modeler",version:"9b5d5ef"},Ls=19,Rs="plate-recognition-country",Fs="default",zs=[{text:`# Read a number plate

Pick the plate's **country** so the reader knows which format to extract, then start the run. Leave it on **Auto-detect** to let it guess from the shape.`,type:"text",layout:{row:"Row_countryHeading",columns:null},id:"Field_CountryHeading"},{label:"Plate country",description:"The vision model reads all text in the photo; this tells the process which country's plate format to pull out of that reading.",type:"select",layout:{row:"Row_country",columns:null},id:"Field_Country",key:"country",defaultValue:"auto",values:[{label:"Auto-detect (any format)",value:"auto"},{label:"United Kingdom",value:"uk"},{label:"India",value:"india"},{label:"Germany",value:"germany"},{label:"South Korea",value:"korea"}],validate:{required:!0}}],Os={executionPlatform:Ds,executionPlatformVersion:Cs,exporter:Bs,schemaVersion:Ls,id:Rs,type:Fs,components:zs},Us=[{id:"uk-mk70-orj",file:"images/uk-mk70-orj.jpg",thumb:"images/uk-mk70-orj.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_MK70_ORJ_(MK_-_Manchester)_-_70_Plate_(1st_September_2020_-_28th_February_2021)_-_VW_Golf_(CarShop).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate MK70 ORJ" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"MK70 ORJ"},{id:"uk-ni-ijz-8992",file:"images/uk-ni-ijz-8992.jpg",thumb:"images/uk-ni-ijz-8992.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_(Northern_Ireland)_Number_Plate_IJZ_8992_(JZ_-_Down_(NI)_)_-_Dateless_Plate_-_Ford_Fiesta_(Woolston_Car_Centre).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK (Northern Ireland) Number Plate IJZ 8992" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"IJZ 8992"},{id:"uk-d651-rnb",file:"images/uk-d651-rnb.jpg",thumb:"images/uk-d651-rnb.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_D651_RNB_(NB_-_Manchester)_-_D_Reg_(1st_August_1986_-_31st_July_1987)_-_Ford_Capri_(The_Quick_Group).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate D651 RNB" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"D651 RNB"},{id:"de-bmw-mini",file:"images/de-bmw-mini.jpg",thumb:"images/de-bmw-mini.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_BMW_Mini_--_2018_--_1545-51.jpg",license:"CC-BY-SA-4.0",attribution:'Dietmar Rabich / Wikimedia Commons / "Dülmen, Dernekamp, BMW Mini -- 2018 -- 1545-51" / CC BY-SA 4.0',groundTruthPlate:"MS WL 545"},{id:"us-hyundai-genesis",file:"images/us-hyundai-genesis.jpg",thumb:"images/us-hyundai-genesis.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:Hyundai_Genesis_3.8_(US)_(9004912958).jpg",license:"CC-BY-SA-2.0",attribution:'Scarlet Sappho, "Hyundai Genesis 3.8 (US)" (Wikimedia Commons, CC BY-SA 2.0)',groundTruthPlate:"GWAN EUM"}],It=Us,$s=Object.assign({"./images/de-bmw-mini.jpg":as,"./images/de-bmw-mini.thumb.jpg":ss,"./images/uk-d651-rnb.jpg":ds,"./images/uk-d651-rnb.thumb.jpg":ls,"./images/uk-mk70-orj.jpg":cs,"./images/uk-mk70-orj.thumb.jpg":ms,"./images/uk-ni-ijz-8992.jpg":ps,"./images/uk-ni-ijz-8992.thumb.jpg":us,"./images/us-hyundai-genesis.jpg":gs,"./images/us-hyundai-genesis.thumb.jpg":hs});function Wn(e){const n=$s[`./${e}`];if(!n)throw new Error(`plate-recognition: image asset "${e}" is in images.json but missing on disk`);return n}const Gs=It.map(e=>({id:e.id,file:Wn(e.file),thumb:Wn(e.thumb),label:e.groundTruthPlate})),Vs=Object.fromEntries(It.map(e=>[e.id,e.groundTruthPlate])),Ys=`async (job, { vision, trace, text }) => {
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
}`,Qs=`async (job, { text, trace }) => {
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
}`,qs={id:"plate-recognition",title:"Read a number plate from a photo",blurb:"Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",docsUrl:"https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",bpmn:bs,forms:{"plate-recognition-country":Os,"plate-recognition-confirm":Ns,"plate-recognition-manual":As},seed:{country:"auto"},imageInput:{label:"Pick a seed photo (its plate is known, so the scripted reader works offline) or upload your own — a live in-browser model reads a photo it has never seen.",seedImages:Gs},scriptedVision:Vs,handlers:[{elementId:"ExtractPlate",standsInFor:"Vision model — Florence-2 <OCR> on WebGPU (in-browser)",source:Ys},{elementId:"RecordResult",standsInFor:"Script task — records the governed outcome",source:Qs}]},Js=[es,ha,Qa,Za,os,qs],Hs=Object.assign({"./learn-error-boundary/index.ts":Xi,"./learn-exclusive-gateway/index.ts":oo,"./learn-message-correlation/index.ts":co,"./learn-multi-instance-parallel/index.ts":go,"./learn-service-task/index.ts":fo,"./learn-signal-broadcast/index.ts":No,"./learn-timer-catch-event/index.ts":To,"./learn-user-task-form/index.ts":zo}),Ws=Object.values(Hs).map(e=>e.default).sort((e,n)=>e.id.localeCompare(n.id)),$e=[...Js,...Ws];function fn(){return"/pr-preview/pr-98/"}function Zs(e){const n=fn();return e.startsWith(n)?"/"+e.slice(n.length):e}function Ks(e=location.pathname){const t=Zs(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function Xs(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function ed(){return fn()}function Zn(e){return`${fn()}examples/${encodeURIComponent(e)}`}function Kn(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function Xn(){return{route:Ks(),embed:Xs()}}function nd(){const[e,n]=h.useState(Xn);return h.useEffect(()=>{const t=()=>n(Xn());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const td="web-demo-framework:height",rd="web-demo-framework:request-height";function id(e){return{type:td,height:Math.ceil(e)}}const et="embed-height-auto";function od(e){h.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(et);let t=-1;const r=(l=!1)=>{const m=document.documentElement.scrollHeight;!l&&Math.abs(m-t)<2||(t=m,window.parent.postMessage(id(m),"*"))},i=l=>{if(l.source!==window.parent)return;const m=l.data;!m||m.type!==rd||r(!0)};window.addEventListener("message",i),r();const s=new ResizeObserver(()=>r());return s.observe(n),()=>{s.disconnect(),window.removeEventListener("message",i),n.classList.remove(et)}},[e])}function ad(){const{route:e,embed:n}=nd(),t=Nt().brain,r=Ri();od(n);const i=e.kind==="example"?e.id:$e[0].id,s=$e.find(d=>d.id===i)??$e[0],l=$e.filter(d=>d.group!=="learn-bpmn"),m=$e.filter(d=>d.group==="learn-bpmn"),p=d=>{Kn(Zn(d),{hash:location.hash})},o=a.jsxs(a.Fragment,{children:[!n&&e.kind==="gallery"&&a.jsxs(a.Fragment,{children:[a.jsx("nav",{className:"example-picker",children:l.map(d=>a.jsx(H,{size:"sm",variant:d.id===s.id?"default":"secondary",onClick:()=>p(d.id),children:d.title},d.id))}),m.length>0&&a.jsxs(a.Fragment,{children:[a.jsx("h2",{className:"example-group-heading",children:"Learn BPMN"}),a.jsx("nav",{className:"example-picker",children:m.map(d=>a.jsx(H,{size:"sm",variant:d.id===s.id?"default":"secondary",onClick:()=>p(d.id),children:d.title},d.id))})]})]}),!n&&e.kind==="example"&&a.jsx("div",{className:"example-nav",children:a.jsx(H,{size:"sm",variant:"secondary",onClick:()=>Kn(ed()),children:"← All examples"})}),a.jsxs("div",{className:"example-meta",children:[s.docsUrl&&a.jsx("a",{className:"docs-link",href:s.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&a.jsx("a",{className:"open-full-page",href:Zn(s.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:"Open full page ↗"})]}),a.jsx(Ji,{example:s,initialBrainKind:t,initialTourId:r},s.id)]});return n?a.jsx("div",{className:"c4-ui app-shell app-embed",children:a.jsx("main",{id:"main",className:"layout layout-embed",children:o})}):a.jsxs("div",{className:"c4-ui app-shell",children:[a.jsx(Vt,{appName:"Runnable Camunda examples",trailing:a.jsx("span",{className:"app-subtitle",children:"model + code + optional LLM, in your browser"})}),a.jsx("main",{id:"main",className:"layout",children:o})]})}Bt.createRoot(document.getElementById("root")).render(a.jsx(h.StrictMode,{children:a.jsx(Yt,{children:a.jsx(ad,{})})}));export{ue as _,cd as c};
