const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-embedded-BFLZ0TIv.css","assets/RuntimeDiagram-B2IYfHo7.js","assets/vendor-react-9Ma26nY1.js","assets/Viewer-D_7S4Gwm.js","assets/MonacoEditor-BVxAHVAL.js","assets/MonacoEditor-D6kYW_CN.css","assets/vendor-modeler-BqwyI_Cq.js","assets/vendor-design-system-B7LgQvIL.js","assets/vendor-design-system-camx4DLJ.css","assets/parser-DkgAe_kI.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-Bl-U83wt.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var Pt=Object.defineProperty;var Rt=(e,n,t)=>n in e?Pt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var O=(e,n,t)=>Rt(e,typeof n!="symbol"?n+"":n,t);import{r as h,j as i,i as zt}from"./vendor-react-9Ma26nY1.js";import{B as Q,a as J,L as Fe,S as _n,b as Mn,c as vn,d as xn,e as Nn,A as le,f as ce,g as de,I as Pn,C as Bt,h as Ot,i as Ft,j as Ut,k as $t,l as Yt,T as Gt,m as Vt,n as Xe,o as en,p as Qt,q as Jt}from"./vendor-design-system-B7LgQvIL.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Ht="modulepreload",Wt=function(e){return"/"+e},Rn={},me=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){let l=function(s){return Promise.all(s.map(c=>Promise.resolve(c).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),m=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));r=l(t.map(s=>{if(s=Wt(s),s in Rn)return;Rn[s]=!0;const c=s.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${g}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":Ht,c||(p.as="script"),p.crossOrigin="",p.href=s,m&&p.setAttribute("nonce",m),document.head.appendChild(p),c)return new Promise((b,f)=>{p.addEventListener("load",b),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})}))}function a(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return r.then(l=>{for(const u of l||[])u.status==="rejected"&&a(u.reason);return n().catch(a)})},Zt="io.camunda.agenticai:aiagent",Ie="http://www.omg.org/spec/BPMN/20100524/MODEL",qt="http://camunda.org/schema/zeebe/1.0";function In(e,n){return Array.from(e.getElementsByTagNameNS(qt,n))}function ut(e,n){return In(e,n).filter(t=>Kt(t)===e)}function Kt(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Ie&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function Sn(e){const n=ut(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function zn(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Ie&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function Bn(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(o=>o.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function mt(e){const n=[],t=o=>{for(const r of Array.from(o.attributes))n.push(r.value);for(const r of Array.from(o.children))t(r)};return t(e),n.join(`
`)}function Xt(e){return pt(mt(e))}function eo(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Ie&&t.localName==="extensionElements");return n?pt(mt(n)):[]}function pt(e){const n=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,t=[],o=new Set;for(const r of e.matchAll(n)){const a=r[1];o.has(a)||(o.add(a),t.push({name:a,description:(r[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:r[3]??"string"}))}return t}function no(e){const n={};for(const t of ut(e,"input")){const o=t.getAttribute("target");o&&(n[o]=t.getAttribute("source")??"")}return n}function to(e){return Array.from(e.getElementsByTagNameNS(Ie,"adHocSubProcess")).filter(n=>(Sn(n)??"").startsWith(Zt))}const oo=new Set(["subProcess","adHocSubProcess","callActivity"]),ro=new Set(["adHocSubProcess","subProcess","transaction"]);function io(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Ie&&ro.has(n.localName))return n;n=n.parentElement}return null}function so(e,n){const t=no(e),o=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:Sn(e),systemPrompt:Bn(t["data.systemPrompt.prompt"]),userPrompt:Bn(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(o)&&o>0?o:10,tools:n}}function ao(e,n){var g;const t=e.getAttribute("id")??"",o=e.getAttribute("name")??t,r=to(e);r.length>1&&n.push({severity:"warning",elementId:r.map(p=>p.getAttribute("id")).join(", "),message:`Process "${o}" hosts ${r.length} AI Agent sub-processes (${r.map(p=>p.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const a=[],l=new Map(r.map(p=>[p,[]]));for(const p of Array.from(e.getElementsByTagName("*"))){if(p.namespaceURI!==Ie||r.includes(p))continue;const b=p.getAttribute("id");if(!b)continue;const f=io(p),_=f&&r.includes(f)?f:null;if(_&&oo.has(p.localName)){const I=p.getAttribute("name")??b,D=zn(p);a.push({elementId:b,label:I,jobType:"",documentation:D,isTool:!0,compound:!0}),l.get(_).push({elementId:b,label:I,jobType:"",documentation:D,args:eo(p),compound:!0});continue}const y=Sn(p);if(!y)continue;const M={elementId:b,label:p.getAttribute("name")??b,jobType:y,documentation:zn(p),isTool:_!=null};a.push(M),_&&l.get(_).push({elementId:b,label:M.label,jobType:y,documentation:M.documentation,args:Xt(p)})}const u=r.map(p=>so(p,l.get(p))),m=Array.from(e.getElementsByTagNameNS(Ie,"userTask")).map(p=>{var b;return{elementId:p.getAttribute("id")??"",label:p.getAttribute("name")??p.getAttribute("id")??"",formId:((b=In(p,"formDefinition")[0])==null?void 0:b.getAttribute("formId"))??void 0}}),s=e.getElementsByTagNameNS(Ie,"startEvent")[0],c=s?((g=In(s,"formDefinition")[0])==null?void 0:g.getAttribute("formId"))??void 0:void 0;return{processId:t,processName:o,tasks:a,agents:u,userTasks:m,startFormId:c}}function lo(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),o=t.getElementsByTagName("parsererror")[0];if(o)throw new Error(`Invalid BPMN XML: ${o.textContent}`);const r=Array.from(t.getElementsByTagNameNS(Ie,"process"));if(r.length===0)throw new Error("No <bpmn:process> in the diagram.");const a=[],l=r.map(m=>ao(m,a));let u=n.processId?l.find(m=>m.processId===n.processId):void 0;return n.processId&&!u&&a.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${l[0].processId}".`}),u??(u=l[0]),l.length>1&&a.push({severity:"warning",message:`Diagram has ${l.length} <bpmn:process> elements (${l.map(m=>m.processId).join(", ")}); using "${u.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:l,diagnostics:a,processId:u.processId,processName:u.processName,tasks:u.tasks,agent:u.agents[0]??null,agents:l.flatMap(m=>m.agents),userTasks:u.userTasks,startFormId:u.startFormId}}function co(e){return e?e.imageId?{imageId:e.imageId}:e.imageName?{imageName:e.imageName}:{}:{}}function gt(e,n){return n?e.pixels:e.imageId??e.pixels}const uo="No image selected — pick or upload a photo to read.";function On(){return uo}function mo(e,n){return async t=>{const o=e.resolve(n);if(!o)return On();const r=gt(o,e.live);if(r===void 0)return On();try{return await e.read(r,t)}catch(a){return`Couldn't read the image (${a instanceof Error?a.message:String(a)}).`}}}function po(e,n){return async()=>{const t=e.resolve(n);if(t)return gt(t,e.live)}}function go(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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
  <\/script></body></html>`}function ht(e,n={}){const{timeoutMs:t=5e3,onTrace:o,onVision:r,onImage:a}=n,l=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((u,m)=>{const s=document.createElement("iframe");s.setAttribute("sandbox","allow-scripts"),s.style.display="none",s.setAttribute("aria-hidden","true");let c=!1,g;const p=()=>{g&&clearTimeout(g),window.removeEventListener("message",f),s.remove()},b=y=>{c||(c=!0,p(),y())};function f(y){var I;if(y.source!==s.contentWindow)return;const M=y.data;if(!(!M||typeof M!="object")){if(M.kind==="ready"){const D=e.job,G=e.kind==="run-handler"?{kind:"run-handler",id:l,source:e.source,job:D,hasVision:e.hasVision}:{kind:"run-agent",id:l,source:e.source,job:D};(I=s.contentWindow)==null||I.postMessage(G,"*");return}"id"in M&&M.id!==l||(M.kind==="trace"?o==null||o(M.text):M.kind==="vision-request"?_(M.callId,r,"vision",M.prompt):M.kind==="image-request"?_(M.callId,a,"image"):M.kind==="result"?b(()=>u(M.value)):M.kind==="error"&&b(()=>m(new Error(M.message))))}}function _(y,M,I,...D){const G=Z=>{var ae;return(ae=s.contentWindow)==null?void 0:ae.postMessage(Z,"*")};if(!M){G({kind:"helper-error",id:l,callId:y,message:`${I} helper is not available.`});return}Promise.resolve().then(()=>M(...D)).then(Z=>G({kind:"helper-result",id:l,callId:y,value:Z}),Z=>G({kind:"helper-error",id:l,callId:y,message:Z instanceof Error?Z.message:String(Z)}))}window.addEventListener("message",f),g=setTimeout(()=>{b(()=>m(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),s.srcdoc=go(),document.body.appendChild(s)})}function bt(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function ho(e,n,t){const o=typeof t.vision=="function";return ht({kind:"run-handler",source:e,job:bt(n),hasVision:o},{onTrace:t.trace,onVision:t.vision?r=>t.vision(r):void 0,onImage:t.image?()=>t.image():void 0})}function bo(e,n){return ht({kind:"run-agent",source:e,job:bt(n)})}function ft(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function fo(e){return ft(e,"Handler code"),(n,t)=>ho(e,n,t)}function yo(e){return ft(e,"Agent code"),n=>bo(e,n)}function wo(e,n,t,o){return{sleep:r=>new Promise(a=>setTimeout(a,r)),trace:r=>n({kind:"tool",text:`   ${r}`,elementId:e.elementId,turn:t}),text:(r,a="")=>{const l=e.variables[r];return typeof l=="string"?l:l==null?a:String(l)},num:(r,a=0)=>{const l=e.variables[r],u=typeof l=="number"?l:Number(l);return Number.isFinite(u)?u:a},...o?{vision:mo(o,e.instanceKey),image:po(o,e.instanceKey)}:{}}}function _o(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Mo(e,n,t,o,r){const a={},l=e.processes.flatMap(m=>m.tasks),u=new Map(l.map(m=>[m.elementId,m.label]));for(const m of l)m.compound||a[m.jobType]||(a[m.jobType]=async s=>{const c=n[s.elementId];if(!c)throw new Error(`No handler registered for ${s.elementId} (job type ${s.type})`);const g=u.get(s.elementId)??s.elementId,p=o==null?void 0:o.current;t({kind:"tool",text:`▶ ${g}`,elementId:s.elementId,turn:p});const b=await c(s,wo(s,t,p,r));return t({kind:"vars",text:`  ↳ ${_o(b)}`,elementId:s.elementId,result:b,turn:p}),b});return a}const vo=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function We(...e){const n=Object.create(null);for(const t of e)if(t)for(const o of Object.keys(t))n[o]=t[o];return n}function yt(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function wt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xo(e){return wt(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function No(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Io(e){return JSON.stringify(e).slice(1,-1)}function ko(e,n){const t=e.lastIndexOf("<",n),o=e.lastIndexOf(">",n);if(t<=o)return"text";const r=e.slice(t,n);if((r.match(/"/g)??[]).length%2===0)return"text";const l=r.lastIndexOf('"');return(r.slice(l+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function Eo(e,n,t="xml"){const o=[],r=new Set;return{result:e.replace(vo,(l,u,m)=>{const s=u.trim();if(!Object.prototype.hasOwnProperty.call(n,s))return r.has(s)||(r.add(s),o.push(s)),l;const c=n[s];if(t==="json")return Io(c);const g=ko(e,m);return g==="feel-literal"?No(c):g==="attribute"?xo(c):wt(c)}),unresolved:o}}function To(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function jo(e,n={},t=e.bpmn,o={}){const r=[],a=We(e.templates,o),{result:l,unresolved:u}=Eo(t,a,"xml");for(const M of u)r.push({severity:"warning",message:`Template placeholder "{{${M}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let m;try{m=lo(l)}catch(M){return r.push({severity:"error",message:M instanceof Error?M.message:String(M)}),{resolvedBpmn:l,model:To(),handlers:{},forms:{},diagnostics:r,hasErrors:!0}}r.push(...m.diagnostics);const s=m.processes.flatMap(M=>M.tasks),c=new Map(e.handlers.map(M=>[M.elementId,M.source])),g={};for(const M of s){if(M.compound)continue;const I=n[M.elementId]??c.get(M.elementId);if(I===void 0){r.push({severity:"error",elementId:M.elementId,jobType:M.jobType,message:`No handler for "${M.label}" (${M.elementId}, job type "${M.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{g[M.elementId]=fo(I)}catch(D){r.push({severity:"error",elementId:M.elementId,jobType:M.jobType,message:`"${M.label}" (${M.elementId}): handler code didn't compile — ${D instanceof Error?D.message:String(D)}`})}}const p=new Set(s.map(M=>M.elementId)),b=new Set([...c.keys(),...Object.keys(n)]);for(const M of b)p.has(M)||r.push({severity:"error",elementId:M,message:`Handler "${M}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const f={},_=e.forms??{},y=(M,I)=>{if(!M)return;const D=_[M];D?f[M]=D:r.push({severity:"error",formId:M,message:`${I} references form "${M}", which has no matching schema.`})};for(const M of m.processes){y(M.startFormId,`The start event of process "${M.processName}"`);for(const I of M.userTasks)y(I.formId,`User task "${I.label}" (${I.elementId})`)}return{resolvedBpmn:l,model:m,handlers:g,forms:f,diagnostics:r,hasErrors:r.some(M=>M.severity==="error")}}function So(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let o=n;o<e.length;o++)if(e[o]==="{")t++;else if(e[o]==="}"&&(t--,t===0))try{const r=JSON.parse(e.slice(n,o+1));return typeof r=="object"&&r!==null&&!Array.isArray(r)?r:null}catch{return null}return null}function kn(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function Fn(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function Un(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:Fn(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,o=Array.isArray(t)?t:Object.values(e).find(a=>Array.isArray(a))??[],r=[];for(const a of o)if(typeof a=="string")a.trim()&&r.push({name:a.trim(),args:{}});else if(a&&typeof a=="object"){const l=a,u=l.name??l.tool??l.id??l.function;typeof u=="string"&&u.trim()&&r.push({name:u.trim(),args:Fn(l)})}return r}function Ao(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function $n(e){const n=e.args.length?e.args.map(o=>`      ${o.name} (${o.type}) — ${o.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function Co(e,n,t){const o=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",r=t[0]??e.tools[0];if(t.length===0)return`${o}

Every tool has already run. Reply with JSON only — no prose, no explanation, no
markdown fence — exactly:

{"done": true}`;const a=r!=null&&r.args.length?`{${r.args.map(l=>`"${l.name}": "…"`).join(", ")}}`:"{}";return n?`${o}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${t.map($n).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tools": [{"tool": "${(r==null?void 0:r.elementId)??"ToolName"}", "arguments": ${a}}], "done": false}

List one entry per tool you're calling this turn (often just one). Each
"tool" value must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tools.`:`${o}

You drive the process by calling exactly one tool at a time. The tool names you
may use, one per block:

${t.map($n).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(r==null?void 0:r.elementId)??"ToolName"}", "arguments": ${a}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function Do(e,n,t,o,r=[],a=[],l=!1){const u=e.userPrompt||"Carry out your task.",m=Object.entries(n).filter(([,c])=>typeof c=="string"&&c.trim().length>0).map(([c,g])=>`  ${c}: ${String(g)}`),s=[u,m.length?`Case data:
${m.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return s.push(t.length?`${l?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),s.push(o.length?`Tools still available:
${o.map(c=>`  ${c.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),a.length&&s.push(`Your last reply was rejected: ${a.join("; ")}. Do not repeat it.`),r.length&&s.push(`You reported that you are done, but ${r.join(" and ")} ${r.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${r.length===1?"it":"them"} now.`),s.push("Which tool should run next? Reply with JSON only."),s.join(`

`)}async function Lo(e,n,t,o,r,a){let l="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:a});const u=await e(o,r,m=>{l+=m,n({kind:"llm",text:`${kn(l)} ▍`,key:t,pending:!0,turn:a})});return n({kind:"llm",text:kn(u||l)||"(empty reply)",key:t,pending:!1,turn:a}),u}function Po(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function Ro(e,n,t){const o={},r=new Map,a=new Map;for(const{tool:l,args:u}of e){const m={};for(const s of l.args){const c=u[s.name];if(!(c!=null&&c!=="")){n({kind:"error",text:`🤖 ${l.elementId}: model supplied no value for "${s.name}"`,turn:t,elementId:l.elementId});continue}const p=r.get(s.name);if(p!==void 0&&p!==l.elementId){n({kind:"error",text:`🤖 argument name collision on "${s.name}": both ${p} and ${l.elementId} declare it — ${p} already claimed it this turn, ${l.elementId}'s value is dropped`,turn:t,elementId:l.elementId});continue}const b=Po(s.type,c);if(!b.ok){n({kind:"error",text:`🤖 ${l.elementId}: "${s.name}" is declared as ${s.type} but the model supplied ${JSON.stringify(c)} — rejected, not passed through`,turn:t,elementId:l.elementId});continue}o[s.name]=b.value,m[s.name]=b.value,r.set(s.name,l.elementId)}a.set(l.elementId,m)}return{variablesOut:o,forHistory:a}}function zo(e,n,t,o={}){const{maxNewTokens:r=384,allowRepeats:a=!1,allowMultiToolTurns:l=!1,turnRef:u,requiredTools:m=[],maxEarlyDoneNudges:s=1}=o;let c=0;const g=new Set,p=[];let b=0,f=[],_=[];return async y=>{const M=y.variables,I=M.toolCallResult;for(I!==void 0&&p.length&&(p[p.length-1]=`${p[p.length-1]} → ${kn(JSON.stringify(I),160)}`);;){const G=await D();if(G)return G}async function D(){if(c+=1,u&&(u.current=c),c>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:c}),{completionConditionFulfilled:!0};const G=a?e.tools:e.tools.filter(C=>!g.has(C.elementId)),Z=[{role:"system",content:Co(e,l,G)},{role:"user",content:Do(e,M,p,G,f,_,a)}];f=[],_=[];let ae;try{ae=await Lo(n,t,`llm-turn-${c}`,Z,r,c)}catch(C){return t({kind:"error",text:`LLM call failed: ${C instanceof Error?C.message:String(C)} — completing the agent.`,turn:c}),{completionConditionFulfilled:!0}}const q=So(ae);if(Ao(q)&&Un(q).length===0){const C=m.filter(pe=>!g.has(pe));return C.length&&b<s?(b+=1,f=C,t({kind:"agent",text:`🤖 model says it is done, but ${C.join(", ")} hasn't run — asking once more`,turn:c}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:c}),{completionConditionFulfilled:!0})}const te=Un(q);if(te.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:c}),_=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const U=[],E=[],N=[];for(const C of te){const pe=e.tools.find(K=>K.elementId===C.name);if(!pe){E.push(C.name);continue}if(!a&&g.has(pe.elementId)){N.push(pe.elementId);continue}U.push({tool:pe,args:C.args})}if(E.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${E.join(", ")} — nothing activated`,turn:c}),N.length&&t({kind:"error",text:`🤖 model asked to re-run ${N.join(", ")} — skipped (already run)`,turn:c}),U.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:c}),_=[...E.length?[`${E.join(", ")} ${E.length===1?"is":"are"} not a real tool`]:[],...N.length?[`${N.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:A,forHistory:H}=Ro(U,t,c);for(const{tool:C}of U)g.add(C.elementId),p.push(`- ${C.elementId}(${JSON.stringify(H.get(C.elementId))})`);for(const{tool:C}of U)t({kind:"agent",text:`🤖 calling ${C.elementId}`,turn:c,elementId:C.elementId,args:H.get(C.elementId)??{}});return{activateElements:U.map(C=>({elementId:C.tool.elementId})),variables:A}}}}function Bo(e,n,t,o={}){const r=new Map(e.map(a=>[a.elementId,zo(a,n,t,o)]));return async a=>{const l=r.get(a.elementId);if(!l)throw new Error(`No agent host registered for "${a.elementId}"`);return l(a)}}class En{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Yn.unregister(this),n}free(){const n=this.__destroy_into_raw();d.__wbg_testengine_free(n,0)}activateJobs(n,t,o,r){let a,l;try{const b=d.__wbindgen_add_to_stack_pointer(-16),f=S(n,d.__wbindgen_export,d.__wbindgen_export2),_=j,y=S(r,d.__wbindgen_export,d.__wbindgen_export2),M=j;d.testengine_activateJobs(b,this.__wbg_ptr,f,_,t,o,y,M);var u=w().getInt32(b+0,!0),m=w().getInt32(b+4,!0),s=w().getInt32(b+8,!0),c=w().getInt32(b+12,!0),g=u,p=m;if(c)throw g=0,p=0,z(s);return a=g,l=p,R(g,p)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(a,l,1)}}advanceTime(n){let t,o;try{const c=d.__wbindgen_add_to_stack_pointer(-16);d.testengine_advanceTime(c,this.__wbg_ptr,n);var r=w().getInt32(c+0,!0),a=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),u=w().getInt32(c+12,!0),m=r,s=a;if(u)throw m=0,s=0,z(l);return t=m,o=s,R(m,s)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(t,o,1)}}assignUserTask(n,t,o){let r,a;try{const p=d.__wbindgen_add_to_stack_pointer(-16),b=S(n,d.__wbindgen_export,d.__wbindgen_export2),f=j,_=S(t,d.__wbindgen_export,d.__wbindgen_export2),y=j;d.testengine_assignUserTask(p,this.__wbg_ptr,b,f,_,y,o);var l=w().getInt32(p+0,!0),u=w().getInt32(p+4,!0),m=w().getInt32(p+8,!0),s=w().getInt32(p+12,!0),c=l,g=u;if(s)throw c=0,g=0,z(m);return r=c,a=g,R(c,g)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(r,a,1)}}broadcastSignal(n,t){let o,r;try{const g=d.__wbindgen_add_to_stack_pointer(-16),p=S(n,d.__wbindgen_export,d.__wbindgen_export2),b=j,f=S(t,d.__wbindgen_export,d.__wbindgen_export2),_=j;d.testengine_broadcastSignal(g,this.__wbg_ptr,p,b,f,_);var a=w().getInt32(g+0,!0),l=w().getInt32(g+4,!0),u=w().getInt32(g+8,!0),m=w().getInt32(g+12,!0),s=a,c=l;if(m)throw s=0,c=0,z(u);return o=s,r=c,R(s,c)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(o,r,1)}}cancelInstance(n){let t,o;try{const c=d.__wbindgen_add_to_stack_pointer(-16),g=S(n,d.__wbindgen_export,d.__wbindgen_export2),p=j;d.testengine_cancelInstance(c,this.__wbg_ptr,g,p);var r=w().getInt32(c+0,!0),a=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),u=w().getInt32(c+12,!0),m=r,s=a;if(u)throw m=0,s=0,z(l);return t=m,o=s,R(m,s)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(t,o,1)}}completeAgentJob(n,t,o){let r,a;try{const p=d.__wbindgen_add_to_stack_pointer(-16),b=S(n,d.__wbindgen_export,d.__wbindgen_export2),f=j,_=S(t,d.__wbindgen_export,d.__wbindgen_export2),y=j,M=S(o,d.__wbindgen_export,d.__wbindgen_export2),I=j;d.testengine_completeAgentJob(p,this.__wbg_ptr,b,f,_,y,M,I);var l=w().getInt32(p+0,!0),u=w().getInt32(p+4,!0),m=w().getInt32(p+8,!0),s=w().getInt32(p+12,!0),c=l,g=u;if(s)throw c=0,g=0,z(m);return r=c,a=g,R(c,g)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(r,a,1)}}completeJob(n,t){let o,r;try{const g=d.__wbindgen_add_to_stack_pointer(-16),p=S(n,d.__wbindgen_export,d.__wbindgen_export2),b=j,f=S(t,d.__wbindgen_export,d.__wbindgen_export2),_=j;d.testengine_completeJob(g,this.__wbg_ptr,p,b,f,_);var a=w().getInt32(g+0,!0),l=w().getInt32(g+4,!0),u=w().getInt32(g+8,!0),m=w().getInt32(g+12,!0),s=a,c=l;if(m)throw s=0,c=0,z(u);return o=s,r=c,R(s,c)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(o,r,1)}}completeUserTask(n,t){let o,r;try{const g=d.__wbindgen_add_to_stack_pointer(-16),p=S(n,d.__wbindgen_export,d.__wbindgen_export2),b=j,f=S(t,d.__wbindgen_export,d.__wbindgen_export2),_=j;d.testengine_completeUserTask(g,this.__wbg_ptr,p,b,f,_);var a=w().getInt32(g+0,!0),l=w().getInt32(g+4,!0),u=w().getInt32(g+8,!0),m=w().getInt32(g+12,!0),s=a,c=l;if(m)throw s=0,c=0,z(u);return o=s,r=c,R(s,c)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(o,r,1)}}correlateMessage(n,t,o){let r,a;try{const p=d.__wbindgen_add_to_stack_pointer(-16),b=S(n,d.__wbindgen_export,d.__wbindgen_export2),f=j,_=S(t,d.__wbindgen_export,d.__wbindgen_export2),y=j,M=S(o,d.__wbindgen_export,d.__wbindgen_export2),I=j;d.testengine_correlateMessage(p,this.__wbg_ptr,b,f,_,y,M,I);var l=w().getInt32(p+0,!0),u=w().getInt32(p+4,!0),m=w().getInt32(p+8,!0),s=w().getInt32(p+12,!0),c=l,g=u;if(s)throw c=0,g=0,z(m);return r=c,a=g,R(c,g)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(r,a,1)}}createInstance(n,t,o){let r,a;try{const p=d.__wbindgen_add_to_stack_pointer(-16),b=S(n,d.__wbindgen_export,d.__wbindgen_export2),f=j,_=S(t,d.__wbindgen_export,d.__wbindgen_export2),y=j;d.testengine_createInstance(p,this.__wbg_ptr,b,f,_,y,Yo(o)?Number.MAX_SAFE_INTEGER:o>>0);var l=w().getInt32(p+0,!0),u=w().getInt32(p+4,!0),m=w().getInt32(p+8,!0),s=w().getInt32(p+12,!0),c=l,g=u;if(s)throw c=0,g=0,z(m);return r=c,a=g,R(c,g)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(r,a,1)}}debugClear(){d.testengine_debugClear(this.__wbg_ptr)}debugCreateInstance(n,t,o){let r,a;try{const p=d.__wbindgen_add_to_stack_pointer(-16),b=S(n,d.__wbindgen_export,d.__wbindgen_export2),f=j,_=S(t,d.__wbindgen_export,d.__wbindgen_export2),y=j,M=S(o,d.__wbindgen_export,d.__wbindgen_export2),I=j;d.testengine_debugCreateInstance(p,this.__wbg_ptr,b,f,_,y,M,I);var l=w().getInt32(p+0,!0),u=w().getInt32(p+4,!0),m=w().getInt32(p+8,!0),s=w().getInt32(p+12,!0),c=l,g=u;if(s)throw c=0,g=0,z(m);return r=c,a=g,R(c,g)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(r,a,1)}}get debugIsPaused(){return d.testengine_debugIsPaused(this.__wbg_ptr)!==0}debugResume(){let n,t;try{const s=d.__wbindgen_add_to_stack_pointer(-16);d.testengine_debugResume(s,this.__wbg_ptr);var o=w().getInt32(s+0,!0),r=w().getInt32(s+4,!0),a=w().getInt32(s+8,!0),l=w().getInt32(s+12,!0),u=o,m=r;if(l)throw u=0,m=0,z(a);return n=u,t=m,R(u,m)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(n,t,1)}}debugStep(){let n,t;try{const s=d.__wbindgen_add_to_stack_pointer(-16);d.testengine_debugStep(s,this.__wbg_ptr);var o=w().getInt32(s+0,!0),r=w().getInt32(s+4,!0),a=w().getInt32(s+8,!0),l=w().getInt32(s+12,!0),u=o,m=r;if(l)throw u=0,m=0,z(a);return n=u,t=m,R(u,m)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(n,t,1)}}deploy(n){let t,o;try{const c=d.__wbindgen_add_to_stack_pointer(-16),g=S(n,d.__wbindgen_export,d.__wbindgen_export2),p=j;d.testengine_deploy(c,this.__wbg_ptr,g,p);var r=w().getInt32(c+0,!0),a=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),u=w().getInt32(c+12,!0),m=r,s=a;if(u)throw m=0,s=0,z(l);return t=m,o=s,R(m,s)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(t,o,1)}}deployForm(n){let t,o;try{const c=d.__wbindgen_add_to_stack_pointer(-16),g=S(n,d.__wbindgen_export,d.__wbindgen_export2),p=j;d.testengine_deployForm(c,this.__wbg_ptr,g,p);var r=w().getInt32(c+0,!0),a=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),u=w().getInt32(c+12,!0),m=r,s=a;if(u)throw m=0,s=0,z(l);return t=m,o=s,R(m,s)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(t,o,1)}}deployResource(n,t){let o,r;try{const g=d.__wbindgen_add_to_stack_pointer(-16),p=S(n,d.__wbindgen_export,d.__wbindgen_export2),b=j,f=S(t,d.__wbindgen_export,d.__wbindgen_export2),_=j;d.testengine_deployResource(g,this.__wbg_ptr,p,b,f,_);var a=w().getInt32(g+0,!0),l=w().getInt32(g+4,!0),u=w().getInt32(g+8,!0),m=w().getInt32(g+12,!0),s=a,c=l;if(m)throw s=0,c=0,z(u);return o=s,r=c,R(s,c)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(o,r,1)}}events(){let n,t;try{const s=d.__wbindgen_add_to_stack_pointer(-16);d.testengine_events(s,this.__wbg_ptr);var o=w().getInt32(s+0,!0),r=w().getInt32(s+4,!0),a=w().getInt32(s+8,!0),l=w().getInt32(s+12,!0),u=o,m=r;if(l)throw u=0,m=0,z(a);return n=u,t=m,R(u,m)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(n,t,1)}}failJob(n,t,o){let r,a;try{const p=d.__wbindgen_add_to_stack_pointer(-16),b=S(n,d.__wbindgen_export,d.__wbindgen_export2),f=j,_=S(o,d.__wbindgen_export,d.__wbindgen_export2),y=j;d.testengine_failJob(p,this.__wbg_ptr,b,f,t,_,y);var l=w().getInt32(p+0,!0),u=w().getInt32(p+4,!0),m=w().getInt32(p+8,!0),s=w().getInt32(p+12,!0),c=l,g=u;if(s)throw c=0,g=0,z(m);return r=c,a=g,R(c,g)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(r,a,1)}}migrate(n,t,o){let r,a;try{const p=d.__wbindgen_add_to_stack_pointer(-16),b=S(n,d.__wbindgen_export,d.__wbindgen_export2),f=j,_=S(t,d.__wbindgen_export,d.__wbindgen_export2),y=j,M=S(o,d.__wbindgen_export,d.__wbindgen_export2),I=j;d.testengine_migrate(p,this.__wbg_ptr,b,f,_,y,M,I);var l=w().getInt32(p+0,!0),u=w().getInt32(p+4,!0),m=w().getInt32(p+8,!0),s=w().getInt32(p+12,!0),c=l,g=u;if(s)throw c=0,g=0,z(m);return r=c,a=g,R(c,g)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(r,a,1)}}modify(n,t,o){let r,a;try{const p=d.__wbindgen_add_to_stack_pointer(-16),b=S(n,d.__wbindgen_export,d.__wbindgen_export2),f=j,_=S(t,d.__wbindgen_export,d.__wbindgen_export2),y=j,M=S(o,d.__wbindgen_export,d.__wbindgen_export2),I=j;d.testengine_modify(p,this.__wbg_ptr,b,f,_,y,M,I);var l=w().getInt32(p+0,!0),u=w().getInt32(p+4,!0),m=w().getInt32(p+8,!0),s=w().getInt32(p+12,!0),c=l,g=u;if(s)throw c=0,g=0,z(m);return r=c,a=g,R(c,g)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(r,a,1)}}constructor(){const n=d.testengine_new();return this.__wbg_ptr=n,Yn.register(this,this.__wbg_ptr,this),this}get now(){return d.testengine_now(this.__wbg_ptr)}reset(){d.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,o;try{const c=d.__wbindgen_add_to_stack_pointer(-16),g=S(n,d.__wbindgen_export,d.__wbindgen_export2),p=j;d.testengine_resolveIncident(c,this.__wbg_ptr,g,p);var r=w().getInt32(c+0,!0),a=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),u=w().getInt32(c+12,!0),m=r,s=a;if(u)throw m=0,s=0,z(l);return t=m,o=s,R(m,s)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(t,o,1)}}setVariables(n,t,o){let r,a;try{const p=d.__wbindgen_add_to_stack_pointer(-16),b=S(n,d.__wbindgen_export,d.__wbindgen_export2),f=j,_=S(t,d.__wbindgen_export,d.__wbindgen_export2),y=j;d.testengine_setVariables(p,this.__wbg_ptr,b,f,_,y,o);var l=w().getInt32(p+0,!0),u=w().getInt32(p+4,!0),m=w().getInt32(p+8,!0),s=w().getInt32(p+12,!0),c=l,g=u;if(s)throw c=0,g=0,z(m);return r=c,a=g,R(c,g)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(r,a,1)}}snapshot(){let n,t;try{const s=d.__wbindgen_add_to_stack_pointer(-16);d.testengine_snapshot(s,this.__wbg_ptr);var o=w().getInt32(s+0,!0),r=w().getInt32(s+4,!0),a=w().getInt32(s+8,!0),l=w().getInt32(s+12,!0),u=o,m=r;if(l)throw u=0,m=0,z(a);return n=u,t=m,R(u,m)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(n,t,1)}}throwError(n,t,o){let r,a;try{const p=d.__wbindgen_add_to_stack_pointer(-16),b=S(n,d.__wbindgen_export,d.__wbindgen_export2),f=j,_=S(t,d.__wbindgen_export,d.__wbindgen_export2),y=j,M=S(o,d.__wbindgen_export,d.__wbindgen_export2),I=j;d.testengine_throwError(p,this.__wbg_ptr,b,f,_,y,M,I);var l=w().getInt32(p+0,!0),u=w().getInt32(p+4,!0),m=w().getInt32(p+8,!0),s=w().getInt32(p+12,!0),c=l,g=u;if(s)throw c=0,g=0,z(m);return r=c,a=g,R(c,g)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(r,a,1)}}tickNow(n){let t,o;try{const c=d.__wbindgen_add_to_stack_pointer(-16);d.testengine_tickNow(c,this.__wbg_ptr,n);var r=w().getInt32(c+0,!0),a=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),u=w().getInt32(c+12,!0),m=r,s=a;if(u)throw m=0,s=0,z(l);return t=m,o=s,R(m,s)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(t,o,1)}}unassignUserTask(n){let t,o;try{const c=d.__wbindgen_add_to_stack_pointer(-16),g=S(n,d.__wbindgen_export,d.__wbindgen_export2),p=j;d.testengine_unassignUserTask(c,this.__wbg_ptr,g,p);var r=w().getInt32(c+0,!0),a=w().getInt32(c+4,!0),l=w().getInt32(c+8,!0),u=w().getInt32(c+12,!0),m=r,s=a;if(u)throw m=0,s=0,z(l);return t=m,o=s,R(m,s)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(t,o,1)}}updateRetries(n,t){let o,r;try{const g=d.__wbindgen_add_to_stack_pointer(-16),p=S(n,d.__wbindgen_export,d.__wbindgen_export2),b=j;d.testengine_updateRetries(g,this.__wbg_ptr,p,b,t);var a=w().getInt32(g+0,!0),l=w().getInt32(g+4,!0),u=w().getInt32(g+8,!0),m=w().getInt32(g+12,!0),s=a,c=l;if(m)throw s=0,c=0,z(u);return o=s,r=c,R(s,c)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(o,r,1)}}updateUserTask(n,t){let o,r;try{const g=d.__wbindgen_add_to_stack_pointer(-16),p=S(n,d.__wbindgen_export,d.__wbindgen_export2),b=j,f=S(t,d.__wbindgen_export,d.__wbindgen_export2),_=j;d.testengine_updateUserTask(g,this.__wbg_ptr,p,b,f,_);var a=w().getInt32(g+0,!0),l=w().getInt32(g+4,!0),u=w().getInt32(g+8,!0),m=w().getInt32(g+12,!0),s=a,c=l;if(m)throw s=0,c=0,z(u);return o=s,r=c,R(s,c)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_export3(o,r,1)}}}Symbol.dispose&&(En.prototype[Symbol.dispose]=En.prototype.free);function Oo(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_bb96b2010945f0bc:function(n,t){throw new Error(R(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const o=R(n,t);return Fo(o)},__wbindgen_object_drop_ref:function(n){z(n)}}}}const Yn=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>d.__wbg_testengine_free(e,1));function Fo(e){Je===Ne.length&&Ne.push(Ne.length+1);const n=Je;return Je=Ne[n],Ne[n]=e,n}function Uo(e){e<1028||(Ne[e]=Je,Je=e)}let Le=null;function w(){return(Le===null||Le.buffer.detached===!0||Le.buffer.detached===void 0&&Le.buffer!==d.memory.buffer)&&(Le=new DataView(d.memory.buffer)),Le}function R(e,n){return Vo(e>>>0,n)}let Qe=null;function rn(){return(Qe===null||Qe.byteLength===0)&&(Qe=new Uint8Array(d.memory.buffer)),Qe}function $o(e){return Ne[e]}let Ne=new Array(1024).fill(void 0);Ne.push(void 0,null,!0,!1);let Je=Ne.length;function Yo(e){return e==null}function S(e,n,t){if(t===void 0){const u=He.encode(e),m=n(u.length,1)>>>0;return rn().subarray(m,m+u.length).set(u),j=u.length,m}let o=e.length,r=n(o,1)>>>0;const a=rn();let l=0;for(;l<o;l++){const u=e.charCodeAt(l);if(u>127)break;a[r+l]=u}if(l!==o){l!==0&&(e=e.slice(l)),r=t(r,o,o=l+e.length*3,1)>>>0;const u=rn().subarray(r+l,r+o),m=He.encodeInto(e,u);l+=m.written,r=t(r,o,l,1)>>>0}return j=l,r}function z(e){const n=$o(e);return Uo(e),n}let sn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});sn.decode();const Go=2146435072;let gn=0;function Vo(e,n){return gn+=n,gn>=Go&&(sn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),sn.decode(),gn=n),sn.decode(rn().subarray(e,e+n))}const He=new TextEncoder;"encodeInto"in He||(He.encodeInto=function(e,n){const t=He.encode(e);return n.set(t),{read:e.length,written:t.length}});let j=0,d;function Qo(e,n){return d=e.exports,Le=null,Qe=null,d}async function Jo(e,n){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const o=await e.arrayBuffer();return await WebAssembly.instantiate(o,n)}else{const o=await WebAssembly.instantiate(e,n);return o instanceof WebAssembly.Instance?{instance:o,module:e}:o}function t(o){switch(o){case"basic":case"cors":case"default":return!0}return!1}}async function Ho(e){if(d!==void 0)return d;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/assets/nanobpmn_engine_bg-DRNrIVE8.wasm",import.meta.url));const n=Oo();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:o}=await Jo(await e,n);return Qo(t)}let nn=null;function Wo(e){return nn||(nn=Ho(void 0).then(()=>{}).catch(n=>{throw nn=null,n})),nn}function W(e){return JSON.parse(e)}class Zo{constructor(n){O(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return W(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,o,r){return JSON.parse(this.engine.activateJobs(n,t,o,r))}completeJob(n,t){return W(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:o,...r}=t??{};return W(this.engine.completeAgentJob(n,JSON.stringify(o??{}),JSON.stringify(r??{})))}failJob(n,t,o){return W(this.engine.failJob(n,t,o))}throwError(n,t,o){return W(this.engine.throwError(n,t,o))}updateRetries(n,t){return W(this.engine.updateRetries(n,t))}resolveIncident(n){return W(this.engine.resolveIncident(n))}setVariables(n,t,o){return W(this.engine.setVariables(n,t||"{}",o))}broadcastSignal(n,t){return W(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return W(this.engine.cancelInstance(n))}modify(n,t,o){return W(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(o??[])))}completeUserTask(n,t){return W(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,o){return W(this.engine.assignUserTask(n,t,o))}unassignUserTask(n){return W(this.engine.unassignUserTask(n))}updateUserTask(n,t){return W(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,o){return W(this.engine.correlateMessage(n,t,o||"{}"))}advanceTime(n){return W(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return W(this.engine.snapshot())}free(){this.engine.free()}}async function qo(e){return await Wo(),new Zo(new En)}class _t extends Error{constructor(t,o){super(t);O(this,"retries");this.name="JobFailure",this.retries=o==null?void 0:o.retries}}function Ko(e,n=[]){if(e.instances.filter(r=>!r.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const o=new Set(n);return e.jobs.some(r=>!o.has(r.jobType))?"unhandledJobs":e.userTasks.some(r=>r.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function Xo(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(o=>o.jobType))].filter(o=>!t.has(o)).sort()}async function er(e,n,t){let o;try{const r=await n(t);o=JSON.stringify(r??{})}catch(r){const a=r instanceof _t&&r.retries!==void 0?r.retries:Math.max(0,t.retries-1),l=r instanceof Error?r.message:String(r);e.failJob(t.key,a,l);return}e.completeJob(t.key,o)}async function nr(e,n,t){let o;try{o=await n(t),JSON.stringify(o)}catch(r){const a=r instanceof _t&&r.retries!==void 0?r.retries:Math.max(0,t.retries-1),l=r instanceof Error?r.message:String(r);e.failJob(t.key,a,l);return}e.completeAgentJob(t.key,o)}async function tr(e,n,t={}){const o=t.maxJobsPerActivation??10,r=t.lockTimeoutMs??3e4,a=t.worker??"bojtos",l=t.agents??{};for(const p of Object.keys(l))if(p in n)throw new Error(`dispatchRound: job type "${p}" is registered as both a worker and an agent — register it as exactly one`);const u=[];for(const[p,b]of Object.entries(n))for(const f of e.activateJobs(p,o,r,a))u.push({handler:b,job:f});const m=[];for(const[p,b]of Object.entries(l))for(const f of e.activateJobs(p,o,r,a))m.push({handler:b,job:f});for(const{handler:p,job:b}of u)await er(e,p,b);for(const{handler:p,job:b}of m)await nr(e,p,b);const s=e.snapshot(),c=u.length+m.length;if(c>0)return{snapshot:s,handled:c};const g=[...Object.keys(n),...Object.keys(l)];return{snapshot:s,handled:c,reason:Ko(s,g),unhandled:Xo(s,g)}}function or({bpmn:e}){const n=h.useRef(null),[t,o]=h.useState("loading"),[r,a]=h.useState(null),[l,u]=h.useState([]),[m,s]=h.useState(null),c=h.useRef(e),g=h.useRef(0),p=h.useRef(new Map),b=h.useCallback((E,N)=>{p.current.set(E,N)},[]),f=h.useCallback(E=>p.current.get(E),[]),_=h.useCallback((E,N)=>{const A=E.deploy(N);return c.current=N,p.current.clear(),u(A.processIds),s(null),a(null),A.processIds},[]);h.useEffect(()=>{let E=!1;return o("loading"),u([]),s(null),a(null),qo().then(N=>{if(E){N.free();return}try{_(N,e)}catch(A){N.free(),a(String(A)),o("error");return}n.current=N,o("ready")}).catch(N=>{E||(a(String(N)),o("error"))}),()=>{var N;E=!0,(N=n.current)==null||N.free(),n.current=null,p.current.clear()}},[e]);const y=h.useCallback(E=>{const N=n.current;if(!N)return null;try{const A=E(N);return s(A),a(null),A}catch(A){return a(String(A)),null}},[]),M=h.useCallback((E,N)=>y(A=>A.createInstance(E,N)),[y]),I=h.useCallback((E,N)=>y(A=>A.completeUserTask(E,N)),[y]),D=h.useCallback(E=>y(N=>N.advanceTime(E)),[y]);function G(E,N){const[A]=E.activateJobs(N,1,3e4,"manual-control");if(!A)throw new Error(`No waiting job of type "${N}" to resolve.`);return A}const Z=h.useCallback((E,N)=>y(A=>{const H=G(A,E);return A.completeJob(H.key,N)}),[y]),ae=h.useCallback((E,N,A)=>y(H=>{const C=G(H,E);return H.throwError(C.key,N,A)}),[y]),q=h.useCallback(async(E,N)=>{const A=n.current;if(!A)return null;const H=g.current;try{const C=await tr(A,E,N);return n.current!==A||g.current!==H?null:(s(C.snapshot),a(null),C)}catch(C){return n.current!==A||g.current!==H||(s(A.snapshot()),a(String(C))),null}},[]),te=h.useCallback(()=>{const E=n.current;if(E){g.current++;try{E.reset(),_(E,c.current)}catch(N){a(String(N))}}},[_]),U=h.useCallback(E=>{const N=n.current;if(!N)return null;g.current++;try{return N.reset(),_(N,E)}catch(A){return a(String(A)),null}},[_]);return{phase:t,error:r,processIds:l,snapshot:m,createInstance:M,stepWorkers:q,completeUserTask:I,advanceTime:D,completeJobManually:Z,throwJobError:ae,reset:te,redeploy:U,setRunImage:b,getRunImage:f}}function rr(e,n){return e.slice(n)}function ir(e,n,t,o){const r=e.snapshot,a="⏸ waiting for a human — complete the task below to continue",l=r.userTasks.some(u=>u.state==="Created");if(e.handled>0){const u=r.activeElementIds.map(t),m=n.length?` via ${n.map(s=>`${t(s.from)} → ${t(s.to)}`).join(", ")}`:"";return r.completedInstances>=1?{kind:"done",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${m} — ✅ process instance completed`}:l?{kind:"human",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${m} — ${a}`}:{kind:"step",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${m} — now at ${u.length?u.join(", "):"—"}`}}switch(e.reason){case"completed":return{kind:"done",text:"✅ process instance completed"};case"userTasks":return{kind:"human",text:a};case"timers":return{kind:"step",text:"⏱ waiting on a timer — advance the clock to continue"};case"messages":return{kind:"step",text:"✉ waiting on a message — correlate it to continue"};case"signals":return{kind:"step",text:"📶 waiting on a signal — broadcast it to continue"};case"incidents":return{kind:"error",text:"A job failed — incident on the diagram"};case"unhandledJobs":{const u=e.unhandled??[];return o&&u.length>0&&u.every(m=>o.has(m))?{kind:"human",text:a}:{kind:"error",text:`⏭ waiting on job type(s) with no worker registered: ${u.join(", ")}`}}case"idle":return{kind:"step",text:"Nothing to step — no instance is running."};default:return{kind:"step",text:e.reason?`Step blocked on an unrecognized reason: ${e.reason}`:"Nothing to step — no instance is running."}}}const sr="the Scripted or Endpoint brain";async function ar(){return await Ze()===null}async function Ze(e=sr){const n=navigator.gpu;if(!n)return`This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick ${e}.`;let t;try{t=await n.requestAdapter()}catch(o){return`WebGPU adapter request failed (${o instanceof Error?o.message:String(o)}). Try ${e} instead.`}return t?null:`This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick ${e} instead.`}const lr=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function Mt(e){return Tn.get(e)??{}}const Tn=new Map;async function cr(){if(Tn.size>0)return;const{prebuiltAppConfig:e}=await me(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)Tn.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const cn=lr.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...Mt(e.id)})),vt=cn[0].id;async function dr(){return await cr(),cn.map(e=>({...e,...Mt(e.id)}))}function xt(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function ur(e,n=xt()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function mr(e){try{const{hasModelInCache:n}=await me(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function an(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function Gn(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class tn{constructor(){O(this,"kind","browser");O(this,"model",null);O(this,"engine",null);O(this,"worker",null);O(this,"generation",0);O(this,"chat",async(n,t=512,o)=>{var a,l;const r=this.engine;if(!r||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const u=await r.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let m="";for await(const s of u){const c=((l=(a=s.choices[0])==null?void 0:a.delta)==null?void 0:l.content)??"";c&&(m+=c,o==null||o(c))}return m}catch(u){const m=u instanceof Error?u.message:String(u);throw an(m)?(this.teardown(),new Error(`The in-browser model stopped: ${Gn()}`)):u}})}async connect(n=vt,t){var m,s;const o=await Ze();if(o)throw new Error(o);if(this.engine&&this.model===n)return n;const r=++this.generation,a=c=>{r===this.generation&&(t==null||t({progress:c.progress??0,text:c.text??""}))};this.teardown();let l,u;try{const{CreateWebWorkerMLCEngine:c}=await me(async()=>{const{CreateWebWorkerMLCEngine:g}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:g}},[]);u=new Worker(new URL("/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),l=await c(u,n,{initProgressCallback:a})}catch(c){if(u==null||u.terminate(),r!==this.generation)throw new Error("cancelled");const g=c instanceof Error?c.message:String(c);if(an(g))throw new Error(`Couldn't load ${n} in the browser (${g}). ${Gn()}`);const p=(s=(m=cn.find(b=>b.id===n))==null?void 0:m.requiredFeatures)==null?void 0:s.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${g}). `+(p?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(r!==this.generation)throw l.unload().catch(()=>{}),u==null||u.terminate(),new Error("cancelled");return this.engine=l,this.worker=u??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const Nt="http://localhost:11434/v1";function It(){var n;const e=((n=globalThis.location)==null?void 0:n.hostname)??"";return e==="localhost"||e==="127.0.0.1"||e==="[::1]"||e==="::1"}function ln(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(o=>(o=globalThis.location)==null?void 0:o.origin)()??""}){let r;try{r=new URL(kt(e)).hostname}catch{return null}const a=l=>l==="localhost"||l==="127.0.0.1"||l==="::1"||l==="[::1]";return!a(r)||a(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function kt(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class Vn extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class Qn{constructor(n=Nt,t="",o=""){O(this,"kind","endpoint");O(this,"baseUrl");O(this,"model",null);O(this,"models",[]);O(this,"apiKey");O(this,"requestedModel");O(this,"chat",async(n,t=512,o)=>{var s,c,g;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const r=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!r.ok||!r.body){const p=await r.text().catch(()=>"");throw new Error(`chat/completions HTTP ${r.status} ${r.statusText}${p?` — ${p.slice(0,300)}`:""}`)}const a=r.body.getReader(),l=new TextDecoder;let u="",m="";for(;;){const{value:p,done:b}=await a.read();if(b)break;u+=l.decode(p,{stream:!0});let f;for(;(f=u.indexOf(`
`))>=0;){const _=u.slice(0,f).trim();if(u=u.slice(f+1),!_.startsWith("data:"))continue;const y=_.slice(5).trim();if(y==="[DONE]")continue;let M;try{M=JSON.parse(y)}catch{continue}M.model&&(this.model=M.model);const I=(s=M.choices)==null?void 0:s[0],D=((c=I==null?void 0:I.delta)==null?void 0:c.content)??((g=I==null?void 0:I.message)==null?void 0:g.content)??"";D&&(m+=D,o==null||o(D))}}return m});this.baseUrl=kt(n),this.apiKey=t.trim(),this.requestedModel=o.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(o){const r=ln(this.baseUrl);throw new Error(r??`Can't reach ${this.baseUrl} (${o instanceof Error?o.message:String(o)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new Vn(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(o=>o.id).filter(o=>!!o),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof Vn&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(o=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${o instanceof Error?o.message:String(o)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const o=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${o?` — ${o.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}const pr=[{id:"onnx-community/Florence-2-base-ft",label:"Florence-2 base",downloadLabel:"~0.4 GB"},{id:"onnx-community/Florence-2-large-ft",label:"Florence-2 large (higher quality)",downloadLabel:"~1.6 GB"}],Et=pr.map(e=>({...e,label:`${e.label} (${e.downloadLabel})`})),Tt=Et[0].id,gr="<OCR>",Jn="UNKNOWN (scripted brain — connect the in-browser model to read a photo)";function hr(e,n){if(e)return typeof e=="function"?e(n):e[n]}class br{constructor(n){O(this,"kind","scripted-vision");O(this,"model",null);O(this,"read",async(n,t,o)=>{const r=typeof n=="string"?hr(this.lookup,n)??Jn:Jn;return o==null||o(r),r});this.lookup=n}dispose(){}}function fr(e){return new br(e)}class Hn{constructor(){O(this,"kind","browser-vision");O(this,"model",null);O(this,"modelHandle",null);O(this,"processor",null);O(this,"loadImage",null);O(this,"generation",0);O(this,"read",async(n,t,o)=>{const r=this.modelHandle,a=this.processor,l=this.loadImage;if(!r||!a||!l||!this.model)throw new Error("BrowserVisionBrain.read called before connect()");const u=t&&t.startsWith("<")?t:gr,m=await l(n),s=a.construct_prompts(u),c=await a(m,s),g=await r.generate({...c,max_new_tokens:512,num_beams:1,do_sample:!1}),p=a.batch_decode(g,{skip_special_tokens:!1})[0],b=a.post_process_generation(p,u,m.size),f=yr(b,u);return o==null||o(f),f})}async connect(n=Tt,t){var u,m;const o=await Ze("the scripted-vision fallback");if(o)throw new Error(o);if(this.modelHandle&&this.model===n)return n;const r=++this.generation,a=s=>{r===this.generation&&(t==null||t({progress:(s.progress??0)/100,text:s.file?`${s.status??"loading"} ${s.file}`:s.status??""}))};this.teardown();let l;try{const{Florence2ForConditionalGeneration:s,AutoProcessor:c,load_image:g}=await me(async()=>{const{Florence2ForConditionalGeneration:f,AutoProcessor:_,load_image:y}=await import("./transformers.web-BBsBgM6g.js");return{Florence2ForConditionalGeneration:f,AutoProcessor:_,load_image:y}},[]),p=await s.from_pretrained(n,{dtype:"fp32",device:"webgpu",progress_callback:a}),b=await c.from_pretrained(n);l={model:p,processor:b,loadImage:g}}catch(s){if(r!==this.generation)throw new Error("cancelled");const c=s instanceof Error?s.message:String(s);throw new Error(`Couldn't load ${n} in the browser (${c}). Try the smaller Florence-2 base model, check your connection, or use the scripted-vision fallback.`)}if(r!==this.generation)throw Promise.resolve((m=(u=l.model).dispose)==null?void 0:m.call(u)).catch(()=>{}),new Error("cancelled");return this.modelHandle=l.model,this.processor=l.processor,this.loadImage=l.loadImage,this.model=n,n}teardown(){var t;const n=this.modelHandle;this.modelHandle=null,this.processor=null,this.loadImage=null,this.model=null,Promise.resolve((t=n==null?void 0:n.dispose)==null?void 0:t.call(n)).catch(()=>{})}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}function yr(e,n){const t=e[n];if(typeof t=="string")return t.trim();if(t&&typeof t=="object"){const o=t.labels;return Array.isArray(o)?o.join(" ").trim():JSON.stringify(t)}return""}async function wr(){return await ar()?"browser":It()?"endpoint":"scripted"}function _r(){const[e,n]=h.useState("scripted"),t=h.useRef(!1),[o,r]=h.useState("idle"),[a,l]=h.useState(null),[u,m]=h.useState(null),[s,c]=h.useState(null),[g,p]=h.useState(null),[b,f]=h.useState(null),[_,y]=h.useState(null),[M,I]=h.useState(vt),[D,G]=h.useState(Nt),[Z,ae]=h.useState(""),[q,te]=h.useState([]),[U,E]=h.useState("idle"),[N,A]=h.useState(null),[H,C]=h.useState(""),[pe,K]=h.useState(null),X=h.useRef(null),[Ue,ke]=h.useState("scripted-vision"),[Pe,ye]=h.useState("idle"),[dn,Ee]=h.useState(null),[Te,ue]=h.useState(Tt),[je,Se]=h.useState(null),[$e,we]=h.useState(null),[Re,Ye]=h.useState(null),[$,oe]=h.useState(null),Y=h.useRef(null),ge=h.useRef(!1),Ge=h.useRef(0),re=h.useCallback(k=>async(...L)=>{try{return await k.chat(...L)}catch(F){const he=F instanceof Error?F.message:String(F);throw k instanceof tn&&an(he)&&(K(null),m(null),r("error"),l(he)),F}},[]),Ae=h.useCallback(k=>async(...L)=>{try{return await k.read(...L)}catch(F){const he=F instanceof Error?F.message:String(F);throw an(he)&&(oe(null),Se(null),ye("error"),Ee(he)),F}},[]);h.useEffect(()=>{Ze().then(k=>{f(k),p(k===null),t.current||(t.current=!0,wr().then(n))}),Ze("the scripted-vision fallback").then(k=>{Ye(k),ge.current||(ge.current=!0,ke(k===null?"browser-vision":"scripted-vision"))})},[]),h.useEffect(()=>{let k=!1;return y(null),mr(M).then(L=>{k||y(L)}),()=>{k=!0}},[M]),h.useEffect(()=>()=>{var k;return(k=X.current)==null?void 0:k.dispose()},[]),h.useEffect(()=>()=>{var k;return(k=Y.current)==null?void 0:k.dispose()},[]);const ze=h.useCallback(k=>{n(k),r("idle"),l(null),m(null),c(null),K(null)},[]),qe=h.useCallback(k=>{var L,F;ge.current=!0,(L=Y.current)==null||L.cancelConnect(),(F=Y.current)==null||F.dispose(),Y.current=null,ke(k),ye("idle"),Ee(null),Se(null),we(null),oe(null)},[]),ve=h.useCallback(()=>{var k;(k=X.current)==null||k.dispose(),X.current=null,K(null),m(null)},[]),Ce=h.useCallback(()=>{X.current instanceof tn&&X.current.cancelConnect(),ve(),r("idle"),c(null),l(null)},[ve]),Ke=h.useCallback(async()=>{const k=++Ge.current,L=()=>k!==Ge.current,F=ln(D);if(F){te([]),E("error"),A(F);return}E("loading"),A(null);const he=new Qn(D,H);try{const _e=await he.listModels();if(L())return;te(_e),E("ready"),ae(Oe=>Oe&&_e.includes(Oe)?Oe:_e[0]??"")}catch(_e){if(L())return;te([]),ae(""),E("error"),A(_e instanceof Error?_e.message:String(_e))}finally{he.dispose()}},[D,H]),un=h.useCallback(async()=>{var k;if(e==="scripted"){K(null),r("ready");return}if(e==="endpoint"){const L=ln(D);if(L){ve(),l(L),r("error");return}}r("connecting"),l(null),c(null);try{if(e==="browser"){const L=X.current instanceof tn?X.current:new tn;X.current&&X.current!==L&&X.current.dispose(),X.current=L;const F=await L.connect(M,c);m(F),K(()=>re(L)),y(!0)}else{(k=X.current)==null||k.dispose();const L=new Qn(D,H,Z);X.current=L;const F=await L.connect();m(F),K(()=>re(L))}r("ready")}catch(L){const F=L instanceof Error?L.message:String(L);if(F==="cancelled")return;l(F),r("error"),K(null)}finally{c(null)}},[e,M,D,Z,H,ve,re]),Be=h.useCallback(()=>{var k;(k=Y.current)==null||k.dispose(),Y.current=null,oe(null),Se(null)},[]),mn=h.useCallback(()=>{var k;(k=Y.current)==null||k.cancelConnect(),Be(),ye("idle"),we(null),Ee(null)},[Be]),pn=h.useCallback(async()=>{if(Ue==="scripted-vision"){Be(),ye("ready"),Ee(null);return}ye("connecting"),Ee(null),we(null);try{const k=Y.current instanceof Hn?Y.current:new Hn;Y.current&&Y.current!==k&&Y.current.dispose(),Y.current=k;const L=await k.connect(Te,we);Se(L),oe(()=>Ae(k)),ye("ready")}catch(k){const L=k instanceof Error?k.message:String(k);if(L==="cancelled")return;Ee(L),ye("error"),oe(null),Se(null)}finally{we(null)}},[Ue,Te,Be,Ae]);return{kind:e,setKind:ze,status:o,error:a,modelInUse:u,progress:s,webgpu:g,webgpuReason:b,browserModelCached:_,cancelConnect:Ce,browserModel:M,setBrowserModel:I,endpointUrl:D,setEndpointUrl:G,endpointModel:Z,setEndpointModel:ae,endpointModels:q,endpointModelsStatus:U,endpointModelsError:N,listEndpointModels:Ke,apiKey:H,setApiKey:C,connect:un,chat:pe,visionKind:Ue,setVisionKind:qe,visionStatus:Pe,visionError:dn,visionModel:Te,setVisionModel:ue,visionModelInUse:je,visionProgress:$e,visionWebgpuReason:Re,connectVision:pn,cancelVisionConnect:mn,vision:$}}const jn="#s=",Mr=["scripted","browser","endpoint"];function vr(e){return typeof e=="string"&&Mr.includes(e)}function xr(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,o={};return vr(t.brain)&&(o.brain=t.brain),o}}catch{}return{}}function jt(e=location.hash){if(!e.startsWith(jn))return{};let n;try{n=decodeURIComponent(e.slice(jn.length))}catch{return{}}return xr(n)}function Nr(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":jn+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function Ir(e){const n={...jt(),...e},t=Nr(n),o=new URL(location.href);o.hash=t,history.replaceState(history.state,"",o)}const Wn=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server. Ollama by default. Local pages only."}],Zn=[{kind:"scripted-vision",label:"Scripted",hint:"No model. The example's known plate is returned — deterministic and offline."},{kind:"browser-vision",label:"In-browser (WebGPU)",hint:"Reads the photo with a vision model on your GPU. First run downloads weights."}];function kr({brain:e,showText:n=!0,showVision:t=!1}){return i.jsxs("div",{className:"brain",children:[n&&i.jsx(Er,{brain:e}),n&&t&&i.jsx("hr",{className:"brain-divider"}),t&&i.jsx(Tr,{brain:e})]})}function Er({brain:e}){const n=Wn.find(b=>b.kind===e.kind),t=ln(e.endpointUrl),o=It(),[r,a]=h.useState(cn);h.useEffect(()=>{dr().then(a)},[]);const{kind:l,endpointUrl:u,apiKey:m,listEndpointModels:s}=e;h.useEffect(()=>{if(l!=="endpoint"||t)return;const b=setTimeout(()=>void s(),400);return()=>clearTimeout(b)},[l,u,m,t,s]);const c=r.find(b=>b.id===e.browserModel),g=c?ur(c,xt()):null,p=e.webgpu===!0?"browser":o&&e.webgpu===!1?"endpoint":null;return i.jsxs("div",{className:"brain-section",children:[i.jsxs("div",{className:"brain-kinds",children:[Wn.map(b=>i.jsxs(Q,{size:"sm",variant:e.kind===b.kind?"default":"secondary",onClick:()=>e.setKind(b.kind),children:[b.label,b.kind===p&&i.jsx(J,{variant:"info",className:"brain-recommended-badge",children:"recommended"})]},b.kind)),e.status==="ready"&&e.kind!=="scripted"&&i.jsx(J,{variant:"success",children:e.modelInUse??"connected"}),e.status==="connecting"&&i.jsx(J,{variant:"info",children:"connecting…"}),e.status==="error"&&i.jsx(J,{variant:"danger",children:"not connected"})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Fe,{htmlFor:"browser-model",children:"Model"}),i.jsxs(_n,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[i.jsx(Mn,{id:"browser-model",children:i.jsx(vn,{})}),i.jsx(xn,{children:r.map(b=>i.jsx(Nn,{value:b.id,children:b.label},b.id))})]}),e.browserModelCached===!0&&i.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&i.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"No WebGPU in this browser"}),i.jsx(de,{children:e.webgpuReason})]}),e.webgpu!==!1&&g&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"This model may not fit in GPU memory"}),i.jsx(de,{children:g})]})]}),e.kind==="endpoint"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Fe,{htmlFor:"endpoint-url",children:"Endpoint"}),i.jsx(Pn,{id:"endpoint-url",value:e.endpointUrl,onChange:b=>e.setEndpointUrl(b.target.value),disabled:e.status==="connecting"}),i.jsxs("p",{className:"field-hint",children:["Ollama allows ",i.jsx("code",{children:"localhost"})," origins out of the box; set"," ",i.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}),t&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"A local server won't work from this URL"}),i.jsx(de,{children:t})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(Fe,{htmlFor:"endpoint-model",children:"Model"}),i.jsxs("div",{className:"endpoint-model-row",children:[i.jsxs(_n,{value:e.endpointModel,onValueChange:e.setEndpointModel,disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||e.endpointModels.length===0,children:[i.jsx(Mn,{id:"endpoint-model",className:"endpoint-model-select",children:i.jsx(vn,{placeholder:e.endpointModelsStatus==="loading"?"Loading models…":e.endpointModelsStatus==="idle"?"Enter an endpoint above":e.endpointModelsStatus==="error"?"No models — check the endpoint":e.endpointModels.length===0?"No models served":"Select a model"})}),i.jsx(xn,{children:e.endpointModels.map(b=>i.jsx(Nn,{value:b,children:b},b))})]}),i.jsx(Q,{size:"sm",variant:"secondary",onClick:()=>void e.listEndpointModels(),disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||t!==null,children:e.endpointModelsStatus==="loading"?"Refreshing…":"Refresh"})]}),i.jsxs("p",{className:"field-hint",children:["Fetched from the endpoint's ",i.jsx("code",{children:"/models"}),". Tiny models (e.g. SmolLM2) usually can't follow the tool-calling format — prefer ",i.jsx("code",{children:"llama3.2:3b"}),", ",i.jsx("code",{children:"qwen2.5"})," or larger."]}),e.endpointModelsStatus==="error"&&!t&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Couldn't list models"}),i.jsx(de,{children:e.endpointModelsError})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(Fe,{htmlFor:"endpoint-key",children:"API key (optional)"}),i.jsx(Pn,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:b=>e.setApiKey(b.target.value),disabled:e.status==="connecting"})]})]}),e.kind!=="scripted"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(Q,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting"||e.kind==="endpoint"&&(e.endpointModel===""||e.endpointModelsStatus==="loading"||t!==null),children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&e.kind==="browser"&&i.jsx(Q,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.error&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Couldn't connect"}),i.jsx(de,{children:e.error})]})]})}function Tr({brain:e}){const n=Zn.find(o=>o.kind===e.visionKind),t=e.webgpu===!0?"browser-vision":null;return i.jsxs("div",{className:"brain-section brain-vision",children:[i.jsx(Fe,{children:"Vision (reads the image)"}),i.jsxs("div",{className:"brain-kinds",children:[Zn.map(o=>i.jsxs(Q,{size:"sm",variant:e.visionKind===o.kind?"default":"secondary",onClick:()=>e.setVisionKind(o.kind),children:[o.label,o.kind===t&&i.jsx(J,{variant:"info",className:"brain-recommended-badge",children:"recommended"})]},o.kind)),e.visionStatus==="ready"&&e.visionKind==="browser-vision"&&i.jsx(J,{variant:"success",children:e.visionModelInUse??"connected"}),e.visionStatus==="connecting"&&i.jsx(J,{variant:"info",children:"connecting…"}),e.visionStatus==="error"&&i.jsx(J,{variant:"danger",children:"not connected"})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.visionKind==="scripted-vision"&&e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"No WebGPU in this browser"}),i.jsx(de,{children:e.visionWebgpuReason})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Fe,{htmlFor:"vision-model",children:"Model"}),i.jsxs(_n,{value:e.visionModel,onValueChange:e.setVisionModel,disabled:e.visionStatus==="connecting",children:[i.jsx(Mn,{id:"vision-model",children:i.jsx(vn,{})}),i.jsx(xn,{children:Et.map(o=>i.jsx(Nn,{value:o.id,children:o.label},o.id))})]}),i.jsx("p",{className:"field-hint",children:"Connecting downloads the weights once (size shown above), then caches them — every token is read on your GPU, no server."})]}),e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"No WebGPU in this browser"}),i.jsx(de,{children:e.visionWebgpuReason})]})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(Q,{size:"sm",onClick:()=>void e.connectVision(),disabled:e.visionStatus==="connecting",children:e.visionStatus==="ready"?"Reconnect":"Connect"}),e.visionStatus==="connecting"&&i.jsx(Q,{size:"sm",variant:"secondary",onClick:e.cancelVisionConnect,children:"Cancel"}),e.visionProgress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.visionProgress.progress*100),"% —"," ",e.visionProgress.text]})]}),e.visionError&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Couldn't connect the vision brain"}),i.jsx(de,{children:e.visionError})]})]})}function jr({imageInput:e,value:n,onSelect:t,disabled:o=!1}){const[r,a]=h.useState(null),[l,u]=h.useState(!1),m=h.useRef(null),s=h.useId(),c=h.useId(),g=h.useCallback(f=>{a(URL.createObjectURL(f)),t({imageName:f.name,pixels:f})},[t]);h.useEffect(()=>{if(r)return()=>URL.revokeObjectURL(r)},[r]);const p=h.useCallback(f=>{const _=f==null?void 0:f[0];_&&_.type.startsWith("image/")&&g(_)},[g]),b=(n==null?void 0:n.imageId)!=null?e.seedImages.find(f=>f.id===n.imageId):void 0;return i.jsxs("div",{className:"image-input",children:[e.label&&i.jsx("p",{className:"field-hint",children:e.label}),i.jsx("p",{className:"image-input-label",id:s,children:"Seed photos"}),i.jsx("div",{className:"image-gallery",role:"group","aria-labelledby":s,children:e.seedImages.map(f=>{const _=(n==null?void 0:n.imageId)===f.id;return i.jsxs("button",{type:"button","aria-pressed":_,className:`image-thumb${_?" image-thumb--selected":""}`,disabled:o,title:f.label??f.id,onClick:()=>{a(null),m.current&&(m.current.value=""),t({imageId:f.id,pixels:f.file})},children:[i.jsx("img",{src:f.thumb??f.file,alt:f.label??f.id}),f.label&&i.jsx("span",{children:f.label})]},f.id)})}),i.jsx("label",{className:"image-input-label",htmlFor:c,children:"Or upload your own photo"}),i.jsxs("div",{className:`image-drop${l?" image-drop--over":""}`,onDragOver:f=>{f.preventDefault(),o||u(!0)},onDragLeave:()=>u(!1),onDrop:f=>{f.preventDefault(),u(!1),o||p(f.dataTransfer.files)},children:[i.jsx("input",{ref:m,id:c,type:"file",accept:"image/*",disabled:o,onChange:f=>p(f.target.files)}),i.jsx("p",{className:"field-hint",children:"Drag a photo here, or pick one. Uploading a photo the model has never seen is the proof this runs for real — nothing leaves your browser."})]}),(r||b)&&i.jsxs("div",{className:"image-preview",children:[i.jsx("img",{src:r??(b==null?void 0:b.file),alt:r?(n==null?void 0:n.imageName)??"uploaded photo":(b==null?void 0:b.label)??(b==null?void 0:b.id)??"selected photo"}),i.jsx("span",{className:"field-hint",children:r?`Uploaded: ${(n==null?void 0:n.imageName)??"your photo"}`:`Selected: ${(b==null?void 0:b.label)??(b==null?void 0:b.id)}`}),i.jsx("button",{type:"button",className:"image-clear-btn",disabled:o,onClick:()=>{a(null),m.current&&(m.current.value=""),t(null)},children:"Clear"})]})]})}function St(e){return typeof e=="object"&&e!==null}function ya(e){const n=new Set,t=o=>{St(o)&&(typeof o.key=="string"&&n.add(o.key),Array.isArray(o.components)&&o.components.forEach(t))};return t(e),n}function Sr(e){const n={},t=o=>{St(o)&&(typeof o.key=="string"&&"defaultValue"in o&&(n[o.key]=o.defaultValue??""),Array.isArray(o.components)&&o.components.forEach(t))};return t(e),n}const Ar="wdf:section:";function At(e){return Ar+e}function qn(e){try{const n=window.localStorage.getItem(At(e));return n==="1"?!0:n==="0"?!1:void 0}catch{return}}function Cr(e,n){try{window.localStorage.setItem(At(e),n?"1":"0")}catch{}}function Dr(e,n=!0){const[t,o]=h.useState(()=>qn(e)??n);h.useEffect(()=>{o(qn(e)??n)},[e,n]);const r=h.useCallback(a=>{o(a),Cr(e,a)},[e]);return[t,r]}function xe({sectionId:e,title:n,description:t,defaultOpen:o=!0,className:r,children:a,...l}){const[u,m]=Dr(e,o);return i.jsx(Bt,{className:["panel",r].filter(Boolean).join(" "),"data-tour":l["data-tour"],children:i.jsxs(Ot,{open:u,onOpenChange:m,children:[i.jsxs(Ft,{className:"panel-trigger",children:[i.jsxs("span",{className:"panel-trigger-text",children:[i.jsx("span",{className:"panel-title",children:n}),t!=null&&i.jsx("span",{className:"panel-desc",children:t})]}),i.jsx(Ut,{className:"panel-chevron","aria-hidden":!0})]}),i.jsx($t,{children:i.jsx(Yt,{children:a})})]})})}function Lr(e){return e.entries!==void 0}function Pr(e){const n=[];let t=null;for(const o of e)o.turn!==void 0?t&&t.turn===o.turn?t.entries.push(o):(t={turn:o.turn,entries:[o]},n.push(t)):(t=null,n.push(o));return n}function Kn(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Rr({activation:e,result:n,labelFor:t}){const o=e.elementId??"";return i.jsxs("div",{className:"timeline-tool",children:[i.jsxs("div",{className:"timeline-tool-head",children:[i.jsx(J,{variant:"info",children:"tool"}),i.jsx("strong",{children:t(o)||o}),i.jsx("code",{children:o})]}),e.args!==void 0&&Object.keys(e.args).length>0&&i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"arguments"}),i.jsx("code",{children:Kn(e.args)})]}),i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"returned"}),i.jsx("code",{children:n?Kn(n.result):"— waiting for the job to complete —"})]})]})}function zr({group:e,labelFor:n}){const t=e.entries.find(s=>s.kind==="llm"),o=e.entries.filter(s=>s.kind==="agent"&&s.elementId),r=e.entries.filter(s=>s.kind==="vars"&&s.elementId),a=e.entries.filter(s=>s.kind==="agent"&&!s.elementId),l=e.entries.filter(s=>s.kind==="error"),u=new Set(o.map(s=>s.elementId)),m=e.entries.filter(s=>s.kind==="tool"||s.kind==="vars"&&s.elementId&&!u.has(s.elementId)).sort((s,c)=>s.id-c.id);return i.jsxs("div",{className:"timeline-turn",children:[i.jsxs("div",{className:"timeline-turn-head",children:[i.jsxs(J,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&i.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&i.jsx("blockquote",{className:"timeline-reply",children:t.text}),a.map(s=>i.jsx("div",{className:"timeline-note",children:s.text},s.id)),o.map(s=>i.jsx(Rr,{activation:s,result:r.find(c=>c.elementId===s.elementId),labelFor:n},s.id)),m.map(s=>i.jsxs("div",{className:`log-line log-${s.kind}`,children:[s.pending?"⏳ ":"",s.text]},s.id)),l.map(s=>i.jsxs("div",{className:"timeline-error",children:["⚠ ",s.text]},s.id))]})}function Br({log:e,elementStats:n=[],incidents:t=[],labelFor:o=r=>r}){const r=h.useMemo(()=>Pr(e),[e]),[a,l]=h.useState(!1),u=h.useRef(null);h.useEffect(()=>{const s=u.current;s&&(s.scrollTop=s.scrollHeight)},[r]);const m=()=>{var g;const s={log:e.map(({id:p,...b})=>b),elementStats:n,incidents:t},c=JSON.stringify(s,null,2);(g=navigator.clipboard)!=null&&g.writeText&&navigator.clipboard.writeText(c).then(()=>{l(!0),setTimeout(()=>l(!1),1500)}).catch(()=>{})};return i.jsxs(xe,{sectionId:"activity",className:"grow",title:"Activity",description:"Agent turns, model replies, and tool calls — read top to bottom as a story.",children:[i.jsx("div",{className:"timeline-toolbar",children:i.jsx(Q,{variant:"secondary",size:"sm",onClick:m,children:a?"Copied!":"Copy run as JSON"})}),i.jsx("div",{className:"timeline",ref:u,children:r.length===0?i.jsx("div",{className:"log-empty",children:"Press Run or Step to start."}):r.map(s=>Lr(s)?i.jsx(zr,{group:s,labelFor:o},`turn-${s.turn}-${s.entries[0].id}`):i.jsxs("div",{className:`log-line log-${s.kind}`,children:[s.pending?"⏳ ":"",s.text]},s.id))}),(n.length>0||t.length>0)&&i.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&i.jsxs("div",{className:"timeline-stats",children:[i.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),i.jsx("ul",{children:n.filter(s=>s.completed>0||(s.active??0)>0).map(s=>i.jsxs("li",{children:[i.jsx("code",{children:o(s.elementId)||s.elementId})," ","completed ",s.completed,s.active?`, ${s.active} active`:""]},s.elementId))})]}),t.length>0&&i.jsxs("div",{className:"timeline-incidents",children:[i.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),i.jsx("ul",{children:t.map((s,c)=>i.jsxs("li",{children:[i.jsx("code",{children:o(s.elementId)||s.elementId})," —"," ",s.reason]},`${s.elementId}-${c}`))})]})]})]})}const Me={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function Xn(e){return`[data-tour="${e}"]`}function Or(e=location.search){return new URLSearchParams(e).get("tour")}function Fr(e,n){var t;return((t=e.elementStats.find(o=>o.elementId===n))==null?void 0:t.completed)??0}function Ur(e,n){return!e||e.kind==="click"||!n?!1:e.kind==="activeElement"?n.activeElementIds.includes(e.elementId):Fr(n,e.elementId)>=(e.atLeast??1)}function $r(e){return"anchor"in e?Xn(e.anchor):`${Xn(Me.diagram)} [data-element-id="${Yr(e.elementId)}"]`}function Yr(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function Gr(e){return e.map(n=>{const t=!!n.waitFor&&n.waitFor.kind!=="click";return{element:$r(n.target),popover:{title:n.title,description:t?`${n.description} (continues automatically once you reach that point — or use Next to skip ahead)`:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}})}async function Vr(e,n={}){var a;const[{driver:t}]=await Promise.all([me(()=>import("./driver.js-bj_ppY-Q.js"),[]),me(()=>Promise.resolve({}),__vite__mapDeps([0]))]),o=Gr(e),r=t({steps:o,showProgress:!0,allowClose:!0,skipMissingElement:!0,onHighlighted:(l,u,{index:m})=>{var s;m!==void 0&&((s=n.onIndexChange)==null||s.call(n,m))},onDestroyed:()=>{var l;(l=n.onDestroyed)==null||l.call(n)}});return r.drive(),(a=n.onIndexChange)==null||a.call(n,r.getActiveIndex()??0),{moveNext:()=>r.moveNext(),activeIndex:()=>r.getActiveIndex()??-1,destroy:()=>r.destroy()}}const Qr=300;function Jr(e,n){const[t,o]=h.useState(!1),r=h.useRef(null),a=h.useRef(0),l=h.useRef(-1),u=h.useRef(null),m=h.useRef(n);h.useEffect(()=>{m.current=n},[n]);const s=h.useCallback(()=>{u.current!==null&&(clearInterval(u.current),u.current=null)},[]),c=h.useRef(0),g=h.useCallback(()=>{var b;c.current+=1,s(),(b=r.current)==null||b.destroy(),r.current=null,o(!1)},[s]),p=h.useCallback(()=>{if(!e||e.steps.length===0||r.current)return;const b=c.current+=1;Vr(e.steps,{onIndexChange:f=>{a.current=f},onDestroyed:()=>{s(),r.current=null,o(!1)}}).then(f=>{if(b!==c.current){f.destroy();return}r.current=f,o(!0),u.current=setInterval(()=>{const _=a.current;if(_===l.current)return;const y=e.steps[_];y&&Ur(y.waitFor,m.current())&&(l.current=_,f.moveNext())},Qr)})},[e,s]);return h.useEffect(()=>g,[g]),{active:t,start:p,stop:g}}const hn=650,bn="__agent__",et="__model__",nt="__template__:",Hr=h.lazy(async()=>{await Promise.all([me(()=>Promise.resolve({}),__vite__mapDeps([1])),me(()=>Promise.resolve({}),__vite__mapDeps([2]))]);const{RuntimeDiagram:e}=await me(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-B2IYfHo7.js");return{RuntimeDiagram:n}},__vite__mapDeps([3,4,5]));return{default:e}}),fn=h.lazy(()=>me(()=>import("./MonacoEditor-BVxAHVAL.js").then(e=>e.M),__vite__mapDeps([6,4,7]))),Wr=h.lazy(()=>me(()=>import("./vendor-modeler-BqwyI_Cq.js"),__vite__mapDeps([8,4,5,9,10,11,12,1,2]))),tt=h.lazy(async()=>{const{FormRenderer:e}=await me(async()=>{const{FormRenderer:n}=await import("./FormRenderer-Bl-U83wt.js");return{FormRenderer:n}},__vite__mapDeps([13,4,11,9,10,14]));return{default:e}});function yn(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function Zr({example:e,initialBrainKind:n,initialTourId:t}){var L,F,he,_e,Oe,Cn,Dn,Ln;const[o,r]=h.useState(e.bpmn),a=_r(),[l,u]=h.useState(null);h.useEffect(()=>{n&&n!==a.kind&&a.setKind(n)},[]),h.useEffect(()=>{Ir({brain:a.kind})},[a.kind]);const[m,s]=h.useState(()=>Object.fromEntries(e.handlers.map(v=>[v.elementId,v.source]))),[c,g]=h.useState(e.scriptedAgent??""),[p,b]=h.useState(()=>We(e.templates)),f=h.useMemo(()=>jo(e,m,o,p),[e,m,o,p]),_=f.model,y=or({bpmn:f.resolvedBpmn}),M=Jr(e.tour,()=>y.snapshot);h.useEffect(()=>{var v;t&&((v=e.tour)==null?void 0:v.id)===t&&M.start()},[]);const I=_.startFormId?((L=e.forms)==null?void 0:L[_.startFormId])??null:null,[D,G]=h.useState(()=>({...e.seed,...I?Sr(I):{}})),[Z,ae]=h.useState(_.agent?bn:((F=e.handlers[0])==null?void 0:F.elementId)??""),[q,te]=h.useState(!1),[U,E]=h.useState(!1),[N,A]=h.useState(null),[H,C]=h.useState([]),[pe,K]=h.useState({}),[X,Ue]=h.useState(!1),ke=h.useRef(null),[Pe,ye]=h.useState({}),[dn,Ee]=h.useState(!1),Te=h.useRef(null),ue=h.useRef(!1),je=h.useRef(0),Se=h.useRef(0),$e=h.useRef({current:void 0}),we=h.useRef({}),Re=h.useRef({}),Ye=h.useMemo(()=>{const v=new Map;for(const x of _.processes){for(const T of x.tasks)v.set(T.elementId,T.label);for(const T of x.agents){v.set(T.elementId,T.label);for(const P of T.tools)v.set(P.elementId,P.label)}for(const T of x.userTasks)v.set(T.elementId,T.label)}return x=>v.get(x)??x},[_]),$=h.useCallback(v=>{C(x=>{if(v.key){const T=x.findIndex(P=>P.key===v.key);if(T>=0){const P=[...x];return P[T]={...P[T],...v},P}}return[...x,{...v,id:Se.current++}].slice(-80)})},[]),oe=h.useMemo(()=>{var v;return((v=y.snapshot)==null?void 0:v.userTasks.find(x=>x.state==="Created"))??null},[y.snapshot]),Y=h.useMemo(()=>{const v=_.processes.flatMap(T=>T.tasks),x=new Map;for(const T of e.handlers){if(!T.manualControl)continue;const P=v.find(B=>B.elementId===T.elementId);P&&x.set(P.jobType,{...T.manualControl,elementId:T.elementId})}return x},[e.handlers,_]),ge=h.useMemo(()=>{if(!y.snapshot)return null;for(const v of y.snapshot.jobs){const x=Y.get(v.jobType);if(x&&v.state==="Created")return{job:v,control:x}}return null},[y.snapshot,Y]),Ge=h.useMemo(()=>{if(!_.agent||!y.snapshot)return[];const v=new Map(y.snapshot.elementStats.map(x=>[x.elementId,x.completed]));return _.agent.tools.filter(x=>(v.get(x.elementId)??0)===0)},[_.agent,y.snapshot]),re=oe?_.userTasks.find(v=>v.elementId===oe.elementId):void 0,Ae=re!=null&&re.formId?((he=e.forms)==null?void 0:he[re.formId])??null:null,ze=h.useCallback(async(v,x,T,P)=>{var be;let B=T,ee=0;for(;je.current===P&&B&&B.completedInstances<1&&ee++<80;){const V=await y.stepWorkers(v,{agents:x});if(je.current!==P)return B;B=(V==null?void 0:V.snapshot)??B;const ne=(be=B.instances[0])==null?void 0:be.variables;if(ne&&K({...ne}),B.userTasks.some(ie=>ie.state==="Created")){$({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!V){$({kind:"error",text:"▶ run stopped — no dispatch round was returned"});break}if(V.handled===0)break;await new Promise(ie=>setTimeout(ie,hn))}return B&&B.completedInstances>=1?$({kind:"done",text:"✅ process instance completed"}):B&&B.incidentElementIds.length>0&&$({kind:"error",text:"A job failed — incident on the diagram"}),B},[y,$]),qe=h.useCallback(async v=>{var B,ee,be;if(!ge||ue.current)return;const{job:x,control:T}=ge,P=++je.current;ue.current=!0,te(!0);try{let V,ne;if(v==="complete")V=y.completeJobManually(x.jobType,"{}"),ne="  ↳ completed normally";else if(T.action.kind==="timer"){const ie=((ee=(B=y.snapshot)==null?void 0:B.timers[0])==null?void 0:ee.dueInMs)??0;V=y.advanceTime(Math.max(ie,0)+1),ne="  ↳ advanced the clock — timer fired"}else{const{errorCode:ie,message:se}=T.action;V=y.throwJobError(x.jobType,ie,se),ne=`  ↳ threw BPMN error ${ie}: ${se}`}if(V){$({kind:"vars",text:ne,elementId:x.elementId});const ie=(be=V.instances[0])==null?void 0:be.variables;ie&&K({...ie}),await new Promise(se=>setTimeout(se,hn)),await ze(we.current,Re.current,V,P)}else $({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:x.elementId})}finally{ue.current=!1,te(!1)}},[ge,y,$,ze]),ve=h.useCallback(async()=>{var ie;let v=null;try{_.agent&&c.trim()&&(v=yo(c))}catch(se){return A(se instanceof Error?se.message:String(se)),null}$e.current={current:void 0};let x;if(e.imageInput){const se=a.vision;x={read:se??fr(e.scriptedVision).read,live:!!se,resolve:fe=>y.getRunImage(fe)}}const T=Mo(_,f.handlers,$,$e.current,x);for(const se of Y.keys())delete T[se];const P={};if(_.agents.length>0){if(a.kind!=="scripted"&&a.chat){const De=new Map;for(const fe of _.agents)De.set(fe.jobType,[...De.get(fe.jobType)??[],fe]);for(const[fe,Ve]of De)P[fe]=Bo(Ve,a.chat,$,{turnRef:$e.current,requiredTools:e.requiredTools})}else if(v&&_.agent){const De=_.agent.elementId;P[_.agent.jobType]=async fe=>{if(fe.elementId!==De)throw new Error(`No scripted agent handler for "${fe.elementId}" — only "${De}" (the primary process's first agent host) is driven by the scripted brain. Use a live brain to exercise more than one host.`);const Ve=await v(fe),Dt=(Ve.activateElements??[]).map(Lt=>Lt.elementId).join(", ");return $({kind:"agent",text:Ve.completionConditionFulfilled?"🤖 scripted agent: done":`🤖 scripted agent: calling ${Dt||"(nothing)"}`}),Ve}}}C([]),ye({});const B={...e.seed,...D,...co(e.imageInput?l:null)};K(B),we.current=T,Re.current=P;const ee=y.redeploy(o),be=(ee==null?void 0:ee[0])??_.processId;$({kind:"start",text:`Starting "${be}" — ${_.agent?a.kind==="scripted"||!a.chat?"scripted brain":`live brain (${a.modelInUse??a.kind})`:"no agent in this model"}`});const V=y.createInstance(be,JSON.stringify(B)),ne=(ie=V==null?void 0:V.instances[0])==null?void 0:ie.key;return e.imageInput&&l&&ne&&y.setRunImage(ne,l),{workers:T,agents:P,snap:V}},[y,e,f,o,c,D,l,_,a,$,Y]),Ce=!!y.snapshot&&y.snapshot.completedInstances<1,Ke=!Ce&&!!I&&!X,un=h.useCallback(async()=>{if(!(y.phase!=="ready"||ue.current||U||f.hasErrors)){ue.current=!0,te(!0);try{let v=we.current,x=Re.current,T=y.snapshot;const P=++je.current;if(!Ce){if(ke.current&&!ke.current.validate())return;A(null);const B=await ve();if(!B)return;v=B.workers,x=B.agents,T=B.snap,await new Promise(ee=>setTimeout(ee,hn))}await ze(v,x,T,P)}finally{ue.current=!1,te(!1)}}},[y,U,f.hasErrors,Ce,ve,ze]),Be=h.useCallback(async()=>{var v;if(!(y.phase!=="ready"||ue.current||U||f.hasErrors)){ue.current=!0,E(!0);try{let x=we.current,T=Re.current,P=y.snapshot;if(!Ce){if(ke.current&&!ke.current.validate())return;A(null);const ne=await ve();if(!ne)return;x=ne.workers,T=ne.agents,P=ne.snap}if(!P||P.completedInstances>=1)return;const B=P.takenSequenceFlows.length,ee=await y.stepWorkers(x,{agents:T});if(!ee){$({kind:"error",text:"⏭ step failed — no dispatch round was returned"});return}const be=(v=ee.snapshot.instances[0])==null?void 0:v.variables;be&&K({...be});const V=rr(ee.snapshot.takenSequenceFlows,B);$(ir(ee,V,Ye,Y))}finally{ue.current=!1,E(!1)}}},[y,U,f.hasErrors,Ce,ve,$,Ye,Y]),mn=h.useCallback(()=>{ue.current=!1,je.current++,te(!1),E(!1),y.reset(),C([]),K({})},[y]),pn=h.useCallback(()=>{if(!oe||Te.current&&!Te.current.validate())return;const v=y.completeUserTask(oe.key,JSON.stringify(Pe));$({kind:"human",text:`👤 ${yn(Pe)}`}),v&&v.completedInstances>=1&&$({kind:"done",text:"✅ process instance completed"})},[oe,Pe,y,$]),k=h.useMemo(()=>{var v,x;return y.phase==="loading"?i.jsx(J,{variant:"neutral",children:"Booting engine…"}):y.phase==="error"?i.jsx(J,{variant:"danger",children:"Engine error"}):q?i.jsx(J,{variant:"info",children:"Running…"}):U?i.jsx(J,{variant:"info",children:"Stepping…"}):(((v=y.snapshot)==null?void 0:v.incidentElementIds.length)??0)>0?i.jsx(J,{variant:"danger",children:"Incident"}):oe?i.jsx(J,{variant:"warning",children:"Waiting for a human"}):(((x=y.snapshot)==null?void 0:x.completedInstances)??0)>=1?i.jsx(J,{variant:"success",children:"Completed"}):y.snapshot?i.jsx(J,{variant:"warning",children:"Paused"}):i.jsx(J,{variant:"neutral",children:"Ready"})},[y.phase,y.snapshot,q,U,oe]);return i.jsxs("div",{className:"runner",children:[i.jsxs("section",{className:"intro",children:[i.jsx("h1",{children:e.title}),i.jsx("p",{children:e.blurb}),i.jsxs("div",{className:"controls",children:[i.jsx(Q,{"data-tour":Me.runButton,onClick:()=>void un(),disabled:y.phase!=="ready"||q||U||f.hasErrors||Ke,children:"▶ Run"}),i.jsx(Q,{variant:"secondary",onClick:()=>void Be(),disabled:y.phase!=="ready"||q||U||f.hasErrors||Ke||(((_e=y.snapshot)==null?void 0:_e.completedInstances)??0)>=1,children:"⏭ Step"}),i.jsx(Q,{variant:"secondary",onClick:mn,disabled:y.phase!=="ready"||U,children:"↺ Reset"}),e.tour&&i.jsx(Q,{variant:"secondary",onClick:M.start,disabled:M.active,children:M.active?"Touring…":`🧭 ${e.tour.label}`}),k]}),y.phase==="error"&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Engine error"}),i.jsx(de,{children:y.error})]}),N&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Code didn't compile"}),i.jsx(de,{children:N})]}),f.hasErrors&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Run is disabled — the diagram has unresolved references"}),i.jsx(de,{children:i.jsx("ul",{className:"diagnostics",children:f.diagnostics.filter(v=>v.severity==="error").map((v,x)=>i.jsx("li",{children:v.message},x))})})]}),!f.hasErrors&&f.diagnostics.length>0&&i.jsxs(le,{children:[i.jsx(ce,{children:"Heads up"}),i.jsx(de,{children:i.jsx("ul",{className:"diagnostics",children:f.diagnostics.map((v,x)=>i.jsx("li",{children:v.message},x))})})]})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"col",children:[i.jsx(xe,{sectionId:"process","data-tour":Me.diagram,title:"Process",description:`${_.processName} — live token (green), incidents (red).`,children:i.jsx(h.Suspense,{fallback:i.jsx("div",{className:"diagram-fallback",children:y.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:i.jsx(Hr,{xml:f.resolvedBpmn,activeIds:((Oe=y.snapshot)==null?void 0:Oe.activeElementIds)??[],incidentIds:((Cn=y.snapshot)==null?void 0:Cn.incidentElementIds)??[],className:"diagram"})})}),oe&&i.jsxs(xe,{sectionId:"human-task",title:(re==null?void 0:re.label)??"Human task",description:Ae?`Rendered from the model's form "${re==null?void 0:re.formId}".`:"This task has no linked form — complete it with no variables.",children:[Ge.length>0&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"The agent didn't finish its checks"}),i.jsxs(de,{children:["It completed without running"," ",Ge.map(v=>v.label||v.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),Ae&&i.jsx(h.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(tt,{ref:Te,schema:Ae,values:Pe,onChange:(v,x)=>ye(T=>({...T,[v]:x})),context:pe,onValidityChange:Ee})}),i.jsx(Q,{onClick:pn,disabled:!!Ae&&!dn,children:"Complete task"})]}),ge&&i.jsx(xe,{sectionId:"manual-job",title:ge.control.label,description:"This job is held here on purpose — pick how it resolves.",children:i.jsxs("div",{className:"controls",children:[i.jsx(Q,{onClick:()=>void qe("complete"),disabled:q||U,children:ge.control.completeLabel??"✅ Complete normally"}),i.jsx(Q,{variant:"secondary",onClick:()=>void qe("action"),disabled:q||U,children:ge.control.action.label})]})}),i.jsxs("div",{className:"row",children:[i.jsx(xe,{sectionId:"variables",className:"grow","data-tour":Me.variablesPanel,title:"Variables",description:"The instance payload, live.",children:i.jsx("pre",{className:"vars",children:yn(pe,2)})}),i.jsx(Br,{log:H,elementStats:(Dn=y.snapshot)==null?void 0:Dn.elementStats,incidents:(Ln=y.snapshot)==null?void 0:Ln.incidents,labelFor:Ye})]})]}),i.jsxs("div",{className:"col",children:[(_.agent||e.imageInput)&&i.jsx(xe,{sectionId:"brain","data-tour":Me.brainPanel,title:"Brain",description:_.agent?`What drives “${_.agent.label}”. The model recommends; the process governs.`:"What reads the image. The model recommends; the process governs.",children:i.jsx(kr,{brain:a,showText:!!_.agent,showVision:!!e.imageInput})}),i.jsxs(xe,{sectionId:"start",title:"Start",description:_.startFormId?`The model's start form "${_.startFormId}".`:e.imageInput?"Pick a seed photo or upload your own to read.":"The starting payload.",children:[e.imageInput&&i.jsx(jr,{imageInput:e.imageInput,value:l,onSelect:u,disabled:q}),e.scenarios&&i.jsx("div",{className:"scenarios",children:e.scenarios.map(v=>i.jsx(Q,{size:"sm",variant:"secondary",disabled:q,onClick:()=>G(x=>({...x,...v.variables})),children:v.label},v.label))}),I?i.jsx(h.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(tt,{ref:ke,schema:I,values:D,onChange:(v,x)=>G(T=>({...T,[v]:x})),disabled:q,onValidityChange:Ue})}):i.jsx("pre",{className:"vars",children:yn(D,2)})]}),i.jsx(xe,{sectionId:"code",className:"editors","data-tour":Me.codePanel,title:"Code",description:"One handler per BPMN element. Return variables to merge, or throw to fail the job.",children:i.jsx(h.Suspense,{fallback:i.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:i.jsxs(Gt,{value:Z,onValueChange:ae,children:[i.jsxs(Vt,{children:[i.jsx(Xe,{value:et,children:"model"}),_.agent&&i.jsx(Xe,{value:bn,children:"agent (scripted)"}),e.handlers.map(v=>{var x;return i.jsx(Xe,{value:v.elementId,children:((x=_.tasks.find(T=>T.elementId===v.elementId))==null?void 0:x.label)??v.elementId},v.elementId)}),Object.keys(p).map(v=>i.jsx(Xe,{value:nt+v,children:v},v))]}),i.jsxs(en,{value:et,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:"Model"}),i.jsx("code",{children:"edit the diagram visually — Run re-checks it below"}),i.jsx(Q,{variant:"secondary",size:"sm",onClick:()=>r(e.bpmn),disabled:o===e.bpmn,children:"Revert to original"})]}),i.jsx(Wr,{value:o,onChange:r})]}),_.agent&&i.jsxs(en,{value:bn,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:_.agent.label}),i.jsx("code",{children:a.kind==="scripted"||!a.chat?"in use":"unused — a live brain is connected"})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(fn,{height:"360px",defaultLanguage:"javascript",value:c,onChange:v=>g(v??""),options:wn})})]}),e.handlers.map(v=>{var x;return i.jsxs(en,{value:v.elementId,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:((x=_.tasks.find(T=>T.elementId===v.elementId))==null?void 0:x.label)??v.elementId}),i.jsx("code",{children:v.standsInFor??v.elementId})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(fn,{height:"360px",defaultLanguage:"javascript",value:m[v.elementId],onChange:T=>s(P=>({...P,[v.elementId]:T??""})),options:wn})})]},v.elementId)}),Object.keys(p).map(v=>i.jsxs(en,{value:nt+v,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:v}),i.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+v+"}}"]})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(fn,{height:"360px",defaultLanguage:"markdown",value:p[v],onChange:x=>b(T=>We(T,{[v]:x??""})),options:wn})})]},v))]})})}),_.agent&&i.jsx(xe,{sectionId:"tools",title:"Tools, as the model sees them",description:i.jsxs(i.Fragment,{children:["Read from the diagram — element name, documentation, and every",i.jsx("code",{children:" fromAi(…)"})," argument."]}),children:i.jsx("ul",{className:"tool-list",children:_.agent.tools.map(v=>i.jsxs("li",{children:[i.jsx("code",{children:v.elementId}),i.jsxs("span",{children:[" — ",v.documentation||v.label]}),v.args.length>0&&i.jsx("ul",{children:v.args.map(x=>i.jsxs("li",{children:[i.jsxs("code",{children:[x.name,": ",x.type]})," ","— ",x.description]},x.name))})]},v.elementId))})})]})]})]})}const wn={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},qr=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,Kr=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,Xr={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:Me.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"},waitFor:{kind:"activeElement",elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"},waitFor:{kind:"elementCompleted",elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:Me.variablesPanel}}],successEvent:{kind:"instanceCompleted"}},ei=`<?xml version="1.0" encoding="UTF-8"?>
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
`,ni="Camunda Cloud",ti="8.10.0",oi={name:"Camunda Web Modeler",version:"9b5d5ef"},ri=19,ii="seed-export-shipment-ready",si=[{text:"# Use a predefined scenario...",type:"text",layout:{row:"Row_04pl1rt",columns:null},id:"Field_0a6kzzq"},{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Use pre-defined sceanrio - to use leave Shipment notes below blank.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{text:`The following shipments notes are used:
* Likely cleared: SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53.
* Likely flagged: SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1.`,type:"text",layout:{row:"Row_1h31mub",columns:null},id:"Field_0j1vwd9"},{text:"# ...or hand in your own data",type:"text",layout:{row:"Row_1wu4opr",columns:null},id:"Field_12u5gzd"},{label:"Shipment notes",description:"If set, overrides the scenario above. Leave blank to use the scenario selected above. The agent reads this to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],ai="default",li={executionPlatform:ni,executionPlatformVersion:ti,exporter:oi,schemaVersion:ri,id:ii,components:si,type:ai},ci="Camunda Cloud",di="8.10.0",ui={name:"Camunda Web Modeler",version:"9b5d5ef"},mi=19,pi="seed-export-compliance-review",gi=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],hi="default",bi={executionPlatform:ci,executionPlatformVersion:di,exporter:ui,schemaVersion:mi,id:pi,components:gi,type:hi},fi=Object.assign({"./prompts/system-prompt.md":qr,"./prompts/user-prompt.md":Kr}),yi=We(Object.fromEntries(Object.entries(fi).map(([e,n])=>[yt(e),n.trimEnd()]))),ot="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",wi="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",_i=`async (job) => {
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
}`,Mi=`async (job, { text, sleep, trace }) => {
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
}`,xi=`async (job, { num, sleep }) => {
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
}`,Ni=`async (job, { text, trace }) => {
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
}`,Ii=`async (job, { sleep }) => {
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
}`,ki={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:ei,forms:{"seed-export-shipment-ready":li,"seed-export-compliance-review":bi},seed:{scenario:ot,shipmentNotes:""},scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:ot,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:wi,shipmentNotes:""}}],scriptedAgent:_i,templates:yi,tour:Xr,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:Mi},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:vi},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:xi},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:Ni},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:Ii}]},Ei=`You are a loan origination assistant at a retail bank. Your job is to gather everything a senior loan officer needs to decide an application — you do **not** decide it yourself.

Work through the case with the tools available to you:

- **Query customer** — find the applicant's existing relationship with the bank.
- **Credit bureau lookup** — pull their credit report.
- **Assess application** — run the bank's underwriting policy to get a debt-to-income ratio, a risk band, and a recommendation. Always run this; the officer's review depends on it.
- **Update application status** — mark the case as \`under-review\` once you have assessed it.

Call the tools in whatever order makes sense, but make sure the application has been assessed before you finish. When you have gathered the customer profile, the bureau report, and the policy assessment, and marked the status, you are done — a senior officer takes it from there.
`,Ti="Gather this loan case for the senior officer: look up the customer, pull their credit bureau report, run the underwriting assessment, and set the application status to `under-review`. Then stop — the officer makes the decision.\n",ji={id:"loan-origination-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a loan application through the origination agent.",target:{anchor:Me.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the application and decides, turn by turn, which tools to call — look up the customer, pull a credit bureau report, run the underwriting policy, update the status. Nothing here is a fixed sequence.",target:{elementId:"LoanOriginationAgent"}},{title:"Policy, not opinion",description:"The assessment computes the debt-to-income ratio, a risk band and a recommendation from the verified figures — the deterministic policy the senior officer's review leans on.",target:{elementId:"AssessApplication"},waitFor:{kind:"elementCompleted",elementId:"AssessApplication"}},{title:"Every application meets a human",description:"Whatever the agent recommended, the token now waits here: no offer and no decline is reachable without a senior officer first signing off. Open the task to record the decision — the gateway routes on it.",target:{elementId:"SeniorOfficerReview"},waitFor:{kind:"activeElement",elementId:"SeniorOfficerReview"}},{title:"Everything the run recorded",description:"The variables panel shows the customer profile, the bureau report, the debt-to-income and risk band, and the recommendation — exactly what each tool wrote for the officer to weigh.",target:{anchor:Me.variablesPanel}}],successEvent:{kind:"elementCompleted",elementId:"AssessApplication"}},Si=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ai="Camunda Cloud",Ci="8.10.0",Di={name:"Camunda Web Modeler",version:"9b5d5ef"},Li=19,Pi="loan-application",Ri="default",zi=[{text:`# Loan application

Capture the applicant's details, then run the origination agent.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{label:"Applicant name",type:"textfield",layout:{row:"Row_applicant",columns:null},id:"Field_ApplicantName",key:"applicantName",defaultValue:"Ada Lovelace",validate:{required:!0}},{label:"Loan amount",description:"Amount requested.",type:"number",layout:{row:"Row_amount",columns:null},id:"Field_LoanAmount",key:"loanAmount",defaultValue:2e4},{label:"Loan purpose",type:"textfield",layout:{row:"Row_purpose",columns:null},id:"Field_LoanPurpose",key:"loanPurpose",defaultValue:"Home improvement"},{label:"Annual income",type:"number",layout:{row:"Row_income",columns:null},id:"Field_AnnualIncome",key:"annualIncome",defaultValue:96e3},{label:"Monthly debt payments",description:"Existing monthly repayments across all obligations.",type:"number",layout:{row:"Row_debt",columns:null},id:"Field_MonthlyDebt",key:"monthlyDebt",defaultValue:850},{label:"Stated credit score",description:"The applicant's self-reported score; the credit bureau tool confirms it.",type:"number",layout:{row:"Row_score",columns:null},id:"Field_CreditScore",key:"creditScore",defaultValue:782}],Bi={executionPlatform:Ai,executionPlatformVersion:Ci,exporter:Di,schemaVersion:Li,id:Pi,type:Ri,components:zi},Oi="Camunda Cloud",Fi="8.10.0",Ui={name:"Camunda Web Modeler",version:"9b5d5ef"},$i=19,Yi="loan-senior-officer-review",Gi="default",Vi=[{text:`# Senior officer review

Every application reaches this desk before an offer or a decline can be sent. Review the agent's findings, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Applicant:** {{applicantName}} — {{loanPurpose}}, amount {{loanAmount}}

**Customer relationship:** {{if customerProfile = null then "unknown" else customerProfile.segment + " (" + string(customerProfile.relationshipYears) + "y)"}}

**Credit bureau:** {{if bureauReport = null then "n/a" else string(bureauReport.score) + " (" + bureauReport.band + "), " + string(bureauReport.derogatoryMarks) + " derogatory mark(s)"}}

**Debt-to-income:** {{debtToIncome}}%

**Assessed risk band:** {{riskBand}}

**Policy recommendation:** {{recommendation}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Decision",values:[{label:"Approve — issue loan offer",value:"approved"},{label:"Decline — send decline notice",value:"declined"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_Decision",key:"decision",validate:{required:!0}},{label:"Officer note",description:"Recorded against the application; the decline notice quotes it as the reason.",type:"textarea",layout:{row:"Row_note",columns:null},id:"Field_ReviewNote",key:"reviewNote"}],Qi={executionPlatform:Oi,executionPlatformVersion:Fi,exporter:Ui,schemaVersion:$i,id:Yi,type:Gi,components:Vi},Ji=Object.assign({"./prompts/system-prompt.md":Ei,"./prompts/user-prompt.md":Ti}),Hi=We(Object.fromEntries(Object.entries(Ji).map(([e,n])=>[yt(e),n.trimEnd()]))),rt={applicantName:"Ada Lovelace",annualIncome:96e3,monthlyDebt:850,creditScore:782,loanAmount:2e4,loanPurpose:"Home improvement"},Wi={applicantName:"Cyrus Vale",annualIncome:38e3,monthlyDebt:1450,creditScore:566,loanAmount:42e3,loanPurpose:"Debt consolidation"},Zi=`async (job) => {
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
}`,qi=`async (job, { text, sleep, trace }) => {
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
}`,Ki=`async (job, { text, num, sleep, trace }) => {
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
}`,Xi=`async (job, { num, trace }) => {
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
}`,es=`async (job, { sleep, trace }) => {
  // Stands in for a write-back to the loan origination system. Marks the case
  // as awaiting the senior officer's decision.
  await sleep(200);
  trace("application status -> under-review");
  return { applicationStatus: "under-review", toolCallResult: "under-review" };
}`,ns=`async (job, { num, sleep, trace }) => {
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
}`,ts=`async (job, { text, sleep, trace }) => {
  // Trunk service task on the declined path. Sends the applicant a decline
  // notice with the recorded reason, standing in for a notification channel.
  const note = text("reviewNote", "");
  const reason = note || "Application did not meet the lending policy.";
  await sleep(300);
  trace("decline notice sent");

  return { declineNotice: { reason: reason, sentTo: text("applicantName", "the applicant") } };
}`,os={id:"loan-origination",title:"Loan origination agent",blurb:"An AI agent gathers a loan case with its own tools — customer lookup, credit bureau, an underwriting policy, a status update — then every application passes through a mandatory senior-officer review before a gateway routes it to an offer or a decline. The agent advises; the process governs.",docsUrl:"https://camunda.com/orchestrate/agents/",bpmn:Si,forms:{"loan-application":Bi,"loan-senior-officer-review":Qi},seed:rt,scenarios:[{label:"Strong applicant (policy recommends approve)",variables:rt},{label:"Marginal applicant (policy recommends decline)",variables:Wi}],scriptedAgent:Zi,templates:Hi,tour:ji,requiredTools:["AssessApplication","UpdateApplicationStatus"],handlers:[{elementId:"QueryCustomer",standsInFor:"CRM connector — customer lookup",source:qi},{elementId:"CreditBureauLookup",standsInFor:"REST connector — credit bureau",source:Ki},{elementId:"AssessApplication",standsInFor:"Script task — underwriting policy (FEEL)",source:Xi},{elementId:"UpdateApplicationStatus",standsInFor:"REST connector — origination system",source:es},{elementId:"IssueLoanOffer",standsInFor:"REST connector — offer/booking system",source:ns},{elementId:"SendDeclineNotice",standsInFor:"REST connector — notifications",source:ts}]},rs=`<?xml version="1.0" encoding="UTF-8"?>
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
}`,ss=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,as=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,ls={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:rs,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:is},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:ss},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:as}]},cs=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ds=`async (job, { text, num, sleep, trace }) => {
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
}`,us={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:cs,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:ds}]},ms=`<?xml version="1.0" encoding="UTF-8"?>\r
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
}`,gs=`async (job, { num, sleep }) => {
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
}`,bs={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:ms,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:ps},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:gs,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:hs,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},fs="/assets/de-bmw-mini-JBSk7QcF.jpg",ys="/assets/de-bmw-mini.thumb-CUUmJrRO.jpg",ws="/assets/uk-d651-rnb-XGipy2QN.jpg",_s="/assets/uk-d651-rnb.thumb-mjEcbhUf.jpg",Ms="/assets/uk-mk70-orj-Cn6O3Xfm.jpg",vs="/assets/uk-mk70-orj.thumb-CaeZ2vqU.jpg",xs="/assets/uk-ni-ijz-8992-YXV44tgk.jpg",Ns="/assets/uk-ni-ijz-8992.thumb-DYwok8jV.jpg",Is="/assets/us-hyundai-genesis-gGpAIEpi.jpg",ks="/assets/us-hyundai-genesis.thumb-DEEt19Mw.jpg",Es=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ts="Camunda Cloud",js="8.10.0",Ss={name:"Camunda Web Modeler",version:"9b5d5ef"},As=19,Cs="plate-recognition-confirm",Ds="default",Ls=[{text:`# Confirm the number plate

The in-browser vision model read a plate from the photo. It **recommends**; you **govern** — accept its reading or correct it before it is recorded.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ConfirmHeading"},{text:'**Model reading:** {{if modelPlate = null or modelPlate = "" then "(nothing read)" else modelPlate}}',type:"text",layout:{row:"Row_modelReading",columns:null},id:"Field_ModelReading"},{label:"Number plate",description:"Edit this if the model misread the plate. What you submit is what gets recorded.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ConfirmPlate",key:"confirmedPlate",validate:{required:!0}}],Ps={executionPlatform:Ts,executionPlatformVersion:js,exporter:Ss,schemaVersion:As,id:Cs,type:Ds,components:Ls},Rs="Camunda Cloud",zs="8.10.0",Bs={name:"Camunda Web Modeler",version:"9b5d5ef"},Os=19,Fs="plate-recognition-manual",Us="default",$s=[{text:`# Couldn't read the plate

The vision model didn't return a confident reading for this photo (an unrecognised image, or no in-browser model connected). Enter the plate by hand, or re-run with the in-browser vision brain connected.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ManualHeading"},{label:"Number plate",description:"Type the plate exactly as it appears in the photo.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ManualPlate",key:"confirmedPlate",validate:{required:!0}}],Ys={executionPlatform:Rs,executionPlatformVersion:zs,exporter:Bs,schemaVersion:Os,id:Fs,type:Us,components:$s},Gs="Camunda Cloud",Vs="8.10.0",Qs={name:"Camunda Web Modeler",version:"9b5d5ef"},Js=19,Hs="plate-recognition-country",Ws="default",Zs=[{text:`# Read a number plate

Pick the plate's **country** so the reader knows which format to extract, then start the run. Leave it on **Auto-detect** to let it guess from the shape.`,type:"text",layout:{row:"Row_countryHeading",columns:null},id:"Field_CountryHeading"},{label:"Plate country",description:"The vision model reads all text in the photo; this tells the process which country's plate format to pull out of that reading.",type:"select",layout:{row:"Row_country",columns:null},id:"Field_Country",key:"country",defaultValue:"auto",values:[{label:"Auto-detect (any format)",value:"auto"},{label:"United Kingdom",value:"uk"},{label:"India",value:"india"},{label:"Germany",value:"germany"},{label:"South Korea",value:"korea"}],validate:{required:!0}}],qs={executionPlatform:Gs,executionPlatformVersion:Vs,exporter:Qs,schemaVersion:Js,id:Hs,type:Ws,components:Zs},Ks=[{id:"uk-mk70-orj",file:"images/uk-mk70-orj.jpg",thumb:"images/uk-mk70-orj.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_MK70_ORJ_(MK_-_Manchester)_-_70_Plate_(1st_September_2020_-_28th_February_2021)_-_VW_Golf_(CarShop).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate MK70 ORJ" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"MK70 ORJ"},{id:"uk-ni-ijz-8992",file:"images/uk-ni-ijz-8992.jpg",thumb:"images/uk-ni-ijz-8992.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_(Northern_Ireland)_Number_Plate_IJZ_8992_(JZ_-_Down_(NI)_)_-_Dateless_Plate_-_Ford_Fiesta_(Woolston_Car_Centre).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK (Northern Ireland) Number Plate IJZ 8992" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"IJZ 8992"},{id:"uk-d651-rnb",file:"images/uk-d651-rnb.jpg",thumb:"images/uk-d651-rnb.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_D651_RNB_(NB_-_Manchester)_-_D_Reg_(1st_August_1986_-_31st_July_1987)_-_Ford_Capri_(The_Quick_Group).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate D651 RNB" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"D651 RNB"},{id:"de-bmw-mini",file:"images/de-bmw-mini.jpg",thumb:"images/de-bmw-mini.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_BMW_Mini_--_2018_--_1545-51.jpg",license:"CC-BY-SA-4.0",attribution:'Dietmar Rabich / Wikimedia Commons / "Dülmen, Dernekamp, BMW Mini -- 2018 -- 1545-51" / CC BY-SA 4.0',groundTruthPlate:"MS WL 545"},{id:"us-hyundai-genesis",file:"images/us-hyundai-genesis.jpg",thumb:"images/us-hyundai-genesis.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:Hyundai_Genesis_3.8_(US)_(9004912958).jpg",license:"CC-BY-SA-2.0",attribution:'Scarlet Sappho, "Hyundai Genesis 3.8 (US)" (Wikimedia Commons, CC BY-SA 2.0)',groundTruthPlate:"GWAN EUM"}],Ct=Ks,Xs=Object.assign({"./images/de-bmw-mini.jpg":fs,"./images/de-bmw-mini.thumb.jpg":ys,"./images/uk-d651-rnb.jpg":ws,"./images/uk-d651-rnb.thumb.jpg":_s,"./images/uk-mk70-orj.jpg":Ms,"./images/uk-mk70-orj.thumb.jpg":vs,"./images/uk-ni-ijz-8992.jpg":xs,"./images/uk-ni-ijz-8992.thumb.jpg":Ns,"./images/us-hyundai-genesis.jpg":Is,"./images/us-hyundai-genesis.thumb.jpg":ks});function it(e){const n=Xs[`./${e}`];if(!n)throw new Error(`plate-recognition: image asset "${e}" is in images.json but missing on disk`);return n}const ea=Ct.map(e=>({id:e.id,file:it(e.file),thumb:it(e.thumb),label:e.groundTruthPlate})),na=Object.fromEntries(Ct.map(e=>[e.id,e.groundTruthPlate])),ta=`async (job, { vision, trace, text }) => {
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
}`,oa=`async (job, { text, trace }) => {
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
}`,ra={id:"plate-recognition",title:"Read a number plate from a photo",blurb:"Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",docsUrl:"https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",bpmn:Es,forms:{"plate-recognition-country":qs,"plate-recognition-confirm":Ps,"plate-recognition-manual":Ys},seed:{country:"auto"},imageInput:{label:"Pick a seed photo (its plate is known, so the scripted reader works offline) or upload your own — a live in-browser model reads a photo it has never seen.",seedImages:ea},scriptedVision:na,handlers:[{elementId:"ExtractPlate",standsInFor:"Vision model — Florence-2 <OCR> on WebGPU (in-browser)",source:ta},{elementId:"RecordResult",standsInFor:"Script task — records the governed outcome",source:oa}]},on=[us,ki,os,ls,bs,ra];function An(){return"/"}function ia(e=location.pathname){const t=e.match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function sa(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function aa(){return An()}function st(e){return`${An()}examples/${encodeURIComponent(e)}`}const at="p";function la(){const e=new URLSearchParams(location.search),n=e.get(at);if(!n)return!1;const t=n.replace(/[\t\n\r]/g,"");if(!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\"))return!1;e.delete(at);try{const o=new URL(An(),location.href),r=new URL(t.slice(1),o);return r.origin!==location.origin?!1:(r.search=e.toString(),r.hash=location.hash,history.replaceState(null,"",r),!0)}catch{return!1}}function lt(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function ct(){return{route:ia(),embed:sa()}}function ca(){const[e,n]=h.useState(ct);return h.useEffect(()=>{const t=()=>n(ct());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const da="web-demo-framework:height",ua="web-demo-framework:request-height";function ma(e){return{type:da,height:Math.ceil(e)}}const dt="embed-height-auto";function pa(e){h.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(dt);let t=-1;const o=(l=!1)=>{const u=document.documentElement.scrollHeight;!l&&Math.abs(u-t)<2||(t=u,window.parent.postMessage(ma(u),"*"))},r=l=>{if(l.source!==window.parent)return;const u=l.data;!u||u.type!==ua||o(!0)};window.addEventListener("message",r),o();const a=new ResizeObserver(()=>o());return a.observe(n),()=>{a.disconnect(),window.removeEventListener("message",r),n.classList.remove(dt)}},[e])}function ga(){const{route:e,embed:n}=ca(),t=jt().brain,o=Or();pa(n);const r=e.kind==="example"?e.id:on[0].id,a=on.find(m=>m.id===r)??on[0],l=m=>{lt(st(m),{hash:location.hash})},u=i.jsxs(i.Fragment,{children:[!n&&e.kind==="gallery"&&i.jsx("nav",{className:"example-picker",children:on.map(m=>i.jsx(Q,{size:"sm",variant:m.id===a.id?"default":"secondary",onClick:()=>l(m.id),children:m.title},m.id))}),!n&&e.kind==="example"&&i.jsx("div",{className:"example-nav",children:i.jsx(Q,{size:"sm",variant:"secondary",onClick:()=>lt(aa()),children:"← All examples"})}),i.jsxs("div",{className:"example-meta",children:[a.docsUrl&&i.jsx("a",{className:"docs-link",href:a.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&i.jsx("a",{className:"open-full-page",href:st(a.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:"Open full page ↗"})]}),i.jsx(Zr,{example:a,initialBrainKind:t,initialTourId:o},a.id)]});return n?i.jsx("div",{className:"c4-ui app-shell app-embed",children:i.jsx("main",{id:"main",className:"layout layout-embed",children:u})}):i.jsxs("div",{className:"c4-ui app-shell",children:[i.jsx(Qt,{appName:"Runnable Camunda examples",trailing:i.jsx("span",{className:"app-subtitle",children:"model + code + optional LLM, in your browser"})}),i.jsx("main",{id:"main",className:"layout",children:u})]})}la();zt.createRoot(document.getElementById("root")).render(i.jsx(h.StrictMode,{children:i.jsx(Jt,{children:i.jsx(ga,{})})}));export{me as _,ya as c};
