const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-js-BEOU0ddW.css","assets/bpmn-embedded-C3UZtB0X.css","assets/RuntimeDiagram-DTnJz5cT.js","assets/vendor-react-9Ma26nY1.js","assets/Viewer-D_7S4Gwm.js","assets/MonacoEditor-0TF84YNZ.js","assets/MonacoEditor-AsU79_Fj.css","assets/vendor-modeler-DltGg96T.js","assets/vendor-design-system-PKdGV53G.js","assets/vendor-design-system-DoJn0cmt.css","assets/parser-DkgAe_kI.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-GDvZgftJ.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var tr=Object.defineProperty;var rr=(e,n,t)=>n in e?tr(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var R=(e,n,t)=>rr(e,typeof n!="symbol"?n+"":n,t);import{r as g,j as i,i as ir}from"./vendor-react-9Ma26nY1.js";import{B as Z,a as ie,L as Ye,S as En,b as kn,c as In,d as Tn,e as jn,A as de,f as le,g as ce,I as Zn,C as or,h as ar,i as sr,j as dr,k as lr,l as cr,T as mr,m as pr,n as rn,o as on,p as ur,q as hr}from"./vendor-design-system-PKdGV53G.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const gr="modulepreload",br=function(e){return"/web-demo-framework/pr-preview/pr-119/"+e},Kn={},ue=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){let d=function(a){return Promise.all(a.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),p=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));o=d(t.map(a=>{if(a=br(a),a in Kn)return;Kn[a]=!0;const u=a.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":gr,u||(m.as="script"),m.crossOrigin="",m.href=a,p&&m.setAttribute("nonce",p),document.head.appendChild(m),u)return new Promise((b,_)=>{m.addEventListener("load",b),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(d){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=d,window.dispatchEvent(l),!l.defaultPrevented)throw d}return o.then(d=>{for(const l of d||[])l.status==="rejected"&&s(l.reason);return n().catch(s)})},fr="io.camunda.agenticai:aiagent",Se="http://www.omg.org/spec/BPMN/20100524/MODEL",_r="http://camunda.org/schema/zeebe/1.0";function Sn(e,n){return Array.from(e.getElementsByTagNameNS(_r,n))}function jt(e,n){return Sn(e,n).filter(t=>wr(t)===e)}function wr(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Se&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function Bn(e){const n=jt(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function Xn(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Se&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function et(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(r=>r.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function St(e){const n=[],t=r=>{for(const o of Array.from(r.attributes))n.push(o.value);for(const o of Array.from(r.children))t(o)};return t(e),n.join(`
`)}function yr(e){return Pt(St(e))}function vr(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Se&&t.localName==="extensionElements");return n?Pt(St(n)):[]}function Pt(e){const n=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,t=[],r=new Set;for(const o of e.matchAll(n)){const s=o[1];r.has(s)||(r.add(s),t.push({name:s,description:(o[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:o[3]??"string"}))}return t}function Mr(e){const n={};for(const t of jt(e,"input")){const r=t.getAttribute("target");r&&(n[r]=t.getAttribute("source")??"")}return n}function xr(e){return Array.from(e.getElementsByTagNameNS(Se,"adHocSubProcess")).filter(n=>(Bn(n)??"").startsWith(fr))}const Nr=new Set(["subProcess","adHocSubProcess","callActivity"]),Er=new Set(["adHocSubProcess","subProcess","transaction"]);function kr(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Se&&Er.has(n.localName))return n;n=n.parentElement}return null}function Ir(e,n){const t=Mr(e),r=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:Bn(e),systemPrompt:et(t["data.systemPrompt.prompt"]),userPrompt:et(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(r)&&r>0?r:10,tools:n}}function Tr(e,n){var h;const t=e.getAttribute("id")??"",r=e.getAttribute("name")??t,o=xr(e);o.length>1&&n.push({severity:"warning",elementId:o.map(m=>m.getAttribute("id")).join(", "),message:`Process "${r}" hosts ${o.length} AI Agent sub-processes (${o.map(m=>m.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const s=[],d=new Map(o.map(m=>[m,[]]));for(const m of Array.from(e.getElementsByTagName("*"))){if(m.namespaceURI!==Se||o.includes(m))continue;const b=m.getAttribute("id");if(!b)continue;const _=kr(m),v=_&&o.includes(_)?_:null;if(v&&Nr.has(m.localName)){const M=m.getAttribute("name")??b,x=Xn(m);s.push({elementId:b,label:M,jobType:"",documentation:x,isTool:!0,compound:!0}),d.get(v).push({elementId:b,label:M,jobType:"",documentation:x,args:vr(m),compound:!0});continue}const k=Bn(m);if(!k)continue;const f={elementId:b,label:m.getAttribute("name")??b,jobType:k,documentation:Xn(m),isTool:v!=null};s.push(f),v&&d.get(v).push({elementId:b,label:f.label,jobType:k,documentation:f.documentation,args:yr(m)})}const l=o.map(m=>Ir(m,d.get(m))),p=Array.from(e.getElementsByTagNameNS(Se,"userTask")).map(m=>{var b;return{elementId:m.getAttribute("id")??"",label:m.getAttribute("name")??m.getAttribute("id")??"",formId:((b=Sn(m,"formDefinition")[0])==null?void 0:b.getAttribute("formId"))??void 0}}),a=e.getElementsByTagNameNS(Se,"startEvent")[0],u=a?((h=Sn(a,"formDefinition")[0])==null?void 0:h.getAttribute("formId"))??void 0:void 0;return{processId:t,processName:r,tasks:s,agents:l,userTasks:p,startFormId:u}}function jr(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),r=t.getElementsByTagName("parsererror")[0];if(r)throw new Error(`Invalid BPMN XML: ${r.textContent}`);const o=Array.from(t.getElementsByTagNameNS(Se,"process"));if(o.length===0)throw new Error("No <bpmn:process> in the diagram.");const s=[],d=o.map(p=>Tr(p,s));let l=n.processId?d.find(p=>p.processId===n.processId):void 0;return n.processId&&!l&&s.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${d[0].processId}".`}),l??(l=d[0]),d.length>1&&s.push({severity:"warning",message:`Diagram has ${d.length} <bpmn:process> elements (${d.map(p=>p.processId).join(", ")}); using "${l.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:d,diagnostics:s,processId:l.processId,processName:l.processName,tasks:l.tasks,agent:l.agents[0]??null,agents:d.flatMap(p=>p.agents),userTasks:l.userTasks,startFormId:l.startFormId}}function Sr(e){return e?e.imageId?{imageId:e.imageId}:e.imageName?{imageName:e.imageName}:{}:{}}function At(e,n){return n?e.pixels:e.imageId??e.pixels}const Pr="No image selected — pick or upload a photo to read.";function nt(){return Pr}function Ar(e,n){return async t=>{const r=e.resolve(n);if(!r)return nt();const o=At(r,e.live);if(o===void 0)return nt();try{return await e.read(o,t)}catch(s){return`Couldn't read the image (${s instanceof Error?s.message:String(s)}).`}}}function Dr(e,n){return async()=>{const t=e.resolve(n);if(t)return At(t,e.live)}}function Cr(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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
  <\/script></body></html>`}function Dt(e,n={}){const{timeoutMs:t=5e3,onTrace:r,onVision:o,onImage:s}=n,d=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((l,p)=>{const a=document.createElement("iframe");a.setAttribute("sandbox","allow-scripts"),a.style.display="none",a.setAttribute("aria-hidden","true");let u=!1,h;const m=()=>{h&&clearTimeout(h),window.removeEventListener("message",_),a.remove()},b=k=>{u||(u=!0,m(),k())};function _(k){var M;if(k.source!==a.contentWindow)return;const f=k.data;if(!(!f||typeof f!="object")){if(f.kind==="ready"){const x=e.job,V=e.kind==="run-handler"?{kind:"run-handler",id:d,source:e.source,job:x,hasVision:e.hasVision}:{kind:"run-agent",id:d,source:e.source,job:x};(M=a.contentWindow)==null||M.postMessage(V,"*");return}"id"in f&&f.id!==d||(f.kind==="trace"?r==null||r(f.text):f.kind==="vision-request"?v(f.callId,o,"vision",f.prompt):f.kind==="image-request"?v(f.callId,s,"image"):f.kind==="result"?b(()=>l(f.value)):f.kind==="error"&&b(()=>p(new Error(f.message))))}}function v(k,f,M,...x){const V=H=>{var Y;return(Y=a.contentWindow)==null?void 0:Y.postMessage(H,"*")};if(!f){V({kind:"helper-error",id:d,callId:k,message:`${M} helper is not available.`});return}Promise.resolve().then(()=>f(...x)).then(H=>V({kind:"helper-result",id:d,callId:k,value:H}),H=>V({kind:"helper-error",id:d,callId:k,message:H instanceof Error?H.message:String(H)}))}window.addEventListener("message",_),h=setTimeout(()=>{b(()=>p(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),a.srcdoc=Cr(),document.body.appendChild(a)})}function Ct(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function Br(e,n,t){const r=typeof t.vision=="function";return Dt({kind:"run-handler",source:e,job:Ct(n),hasVision:r},{onTrace:t.trace,onVision:t.vision?o=>t.vision(o):void 0,onImage:t.image?()=>t.image():void 0})}function Lr(e,n){return Dt({kind:"run-agent",source:e,job:Ct(n)})}function Bt(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function Rr(e){return Bt(e,"Handler code"),(n,t)=>Br(e,n,t)}function Fr(e){return Bt(e,"Agent code"),n=>Lr(e,n)}function Or(e,n,t,r){return{sleep:o=>new Promise(s=>setTimeout(s,o)),trace:o=>n({kind:"tool",text:`   ${o}`,elementId:e.elementId,turn:t}),text:(o,s="")=>{const d=e.variables[o];return typeof d=="string"?d:d==null?s:String(d)},num:(o,s=0)=>{const d=e.variables[o],l=typeof d=="number"?d:Number(d);return Number.isFinite(l)?l:s},...r?{vision:Ar(r,e.instanceKey),image:Dr(r,e.instanceKey)}:{}}}function zr(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Ur(e,n,t,r,o){const s={},d=e.processes.flatMap(p=>p.tasks),l=new Map(d.map(p=>[p.elementId,p.label]));for(const p of d)p.compound||s[p.jobType]||(s[p.jobType]=async a=>{const u=n[a.elementId];if(!u)throw new Error(`No handler registered for ${a.elementId} (job type ${a.type})`);const h=l.get(a.elementId)??a.elementId,m=r==null?void 0:r.current;t({kind:"tool",text:`▶ ${h}`,elementId:a.elementId,turn:m});const b=await u(a,Or(a,t,m,o));return t({kind:"vars",text:`  ↳ ${zr(b)}`,elementId:a.elementId,result:b,turn:m}),b});return s}const $r=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function en(...e){const n=Object.create(null);for(const t of e)if(t)for(const r of Object.keys(t))n[r]=t[r];return n}function Lt(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function Rt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gr(e){return Rt(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function Vr(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yr(e){return JSON.stringify(e).slice(1,-1)}function Qr(e,n){const t=e.lastIndexOf("<",n),r=e.lastIndexOf(">",n);if(t<=r)return"text";const o=e.slice(t,n);if((o.match(/"/g)??[]).length%2===0)return"text";const d=o.lastIndexOf('"');return(o.slice(d+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function qr(e,n,t="xml"){const r=[],o=new Set;return{result:e.replace($r,(d,l,p)=>{const a=l.trim();if(!Object.prototype.hasOwnProperty.call(n,a))return o.has(a)||(o.add(a),r.push(a)),d;const u=n[a];if(t==="json")return Yr(u);const h=Qr(e,p);return h==="feel-literal"?Vr(u):h==="attribute"?Gr(u):Rt(u)}),unresolved:r}}function Jr(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function Hr(e,n={},t=e.bpmn,r={}){const o=[],s=en(e.templates,r),{result:d,unresolved:l}=qr(t,s,"xml");for(const f of l)o.push({severity:"warning",message:`Template placeholder "{{${f}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let p;try{p=jr(d)}catch(f){return o.push({severity:"error",message:f instanceof Error?f.message:String(f)}),{resolvedBpmn:d,model:Jr(),handlers:{},forms:{},diagnostics:o,hasErrors:!0}}o.push(...p.diagnostics);const a=p.processes.flatMap(f=>f.tasks),u=new Map(e.handlers.map(f=>[f.elementId,f.source])),h={};for(const f of a){if(f.compound)continue;const M=n[f.elementId]??u.get(f.elementId);if(M===void 0){o.push({severity:"error",elementId:f.elementId,jobType:f.jobType,message:`No handler for "${f.label}" (${f.elementId}, job type "${f.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{h[f.elementId]=Rr(M)}catch(x){o.push({severity:"error",elementId:f.elementId,jobType:f.jobType,message:`"${f.label}" (${f.elementId}): handler code didn't compile — ${x instanceof Error?x.message:String(x)}`})}}const m=new Set(a.map(f=>f.elementId)),b=new Set([...u.keys(),...Object.keys(n)]);for(const f of b)m.has(f)||o.push({severity:"error",elementId:f,message:`Handler "${f}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const _={},v=e.forms??{},k=(f,M)=>{if(!f)return;const x=v[f];x?_[f]=x:o.push({severity:"error",formId:f,message:`${M} references form "${f}", which has no matching schema.`})};for(const f of p.processes){k(f.startFormId,`The start event of process "${f.processName}"`);for(const M of f.userTasks)k(M.formId,`User task "${M.label}" (${M.elementId})`)}return{resolvedBpmn:d,model:p,handlers:h,forms:_,diagnostics:o,hasErrors:o.some(f=>f.severity==="error")}}function Wr(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let r=n;r<e.length;r++)if(e[r]==="{")t++;else if(e[r]==="}"&&(t--,t===0))try{const o=JSON.parse(e.slice(n,r+1));return typeof o=="object"&&o!==null&&!Array.isArray(o)?o:null}catch{return null}return null}function Pn(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function tt(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function rt(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:tt(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,r=Array.isArray(t)?t:Object.values(e).find(s=>Array.isArray(s))??[],o=[];for(const s of r)if(typeof s=="string")s.trim()&&o.push({name:s.trim(),args:{}});else if(s&&typeof s=="object"){const d=s,l=d.name??d.tool??d.id??d.function;typeof l=="string"&&l.trim()&&o.push({name:l.trim(),args:tt(d)})}return o}function Zr(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function it(e){const n=e.args.length?e.args.map(r=>`      ${r.name} (${r.type}) — ${r.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function Kr(e,n,t){const r=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",o=t[0]??e.tools[0],s=o!=null&&o.args.length?`{${o.args.map(d=>`"${d.name}": "…"`).join(", ")}}`:"{}";return n?`${r}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${t.map(it).join(`

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

${t.map(it).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(o==null?void 0:o.elementId)??"ToolName"}", "arguments": ${s}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function Xr(e,n,t,r,o=[],s=[],d=!1){const l=e.userPrompt||"Carry out your task.",p=Object.entries(n).filter(([,u])=>typeof u=="string"&&u.trim().length>0).map(([u,h])=>`  ${u}: ${String(h)}`),a=[l,p.length?`Case data:
${p.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return a.push(t.length?`${d?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),a.push(r.length?`Tools still available:
${r.map(u=>`  ${u.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),s.length&&a.push(`Your last reply was rejected: ${s.join("; ")}. Do not repeat it.`),o.length&&a.push(`You reported that you are done, but ${o.join(" and ")} ${o.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${o.length===1?"it":"them"} now.`),a.push("Which tool should run next? Reply with JSON only."),a.join(`

`)}async function ei(e,n,t,r,o,s){let d="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:s});const l=await e(r,o,p=>{d+=p,n({kind:"llm",text:`${Pn(d)} ▍`,key:t,pending:!0,turn:s})});return n({kind:"llm",text:Pn(l||d)||"(empty reply)",key:t,pending:!1,turn:s}),l}function ni(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function ti(e,n,t){const r={},o=new Map,s=new Map;for(const{tool:d,args:l}of e){const p={};for(const a of d.args){const u=l[a.name];if(!(u!=null&&u!=="")){n({kind:"error",text:`🤖 ${d.elementId}: model supplied no value for "${a.name}"`,turn:t,elementId:d.elementId});continue}const m=o.get(a.name);if(m!==void 0&&m!==d.elementId){n({kind:"error",text:`🤖 argument name collision on "${a.name}": both ${m} and ${d.elementId} declare it — ${m} already claimed it this turn, ${d.elementId}'s value is dropped`,turn:t,elementId:d.elementId});continue}const b=ni(a.type,u);if(!b.ok){n({kind:"error",text:`🤖 ${d.elementId}: "${a.name}" is declared as ${a.type} but the model supplied ${JSON.stringify(u)} — rejected, not passed through`,turn:t,elementId:d.elementId});continue}r[a.name]=b.value,p[a.name]=b.value,o.set(a.name,d.elementId)}s.set(d.elementId,p)}return{variablesOut:r,forHistory:s}}function ri(e,n,t,r={}){const{maxNewTokens:o=384,allowRepeats:s=!1,allowMultiToolTurns:d=!1,turnRef:l,requiredTools:p=[],maxEarlyDoneNudges:a=1,maxUnproductiveTurns:u=3}=r;let h=0;const m=new Set,b=[];let _=0,v=[],k=[];return async f=>{const M=f.variables,x=M.toolCallResult;x!==void 0&&b.length&&(b[b.length-1]=`${b[b.length-1]} → ${Pn(JSON.stringify(x),160)}`);let V=0;for(;;){const Y=await H();if(Y)return Y;if(V+=1,V>=u)return t({kind:"error",text:`🤖 ${V} turns in a row activated nothing — completing the agent. The model has lost the reply format; whatever it has already run stands.`,turn:h}),{completionConditionFulfilled:!0}}async function H(){if(h+=1,l&&(l.current=h),h>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:h}),{completionConditionFulfilled:!0};const Y=s?e.tools:e.tools.filter(E=>!m.has(E.elementId));if(Y.length===0)return t({kind:"agent",text:"🤖 every tool has run — completing the agent",turn:h}),{completionConditionFulfilled:!0};const he=[{role:"system",content:Kr(e,d,Y)},{role:"user",content:Xr(e,M,b,Y,v,k,s)}];v=[],k=[];let Pe;try{Pe=await ei(n,t,`llm-turn-${h}`,he,o,h)}catch(E){return t({kind:"error",text:`LLM call failed: ${E instanceof Error?E.message:String(E)} — completing the agent.`,turn:h}),{completionConditionFulfilled:!0}}const ge=Wr(Pe);if(Zr(ge)&&rt(ge).length===0){const E=p.filter(L=>!m.has(L));return E.length&&_<a?(_+=1,v=E,t({kind:"agent",text:`🤖 model says it is done, but ${E.join(", ")} hasn't run — asking once more`,turn:h}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:h}),{completionConditionFulfilled:!0})}const Ee=rt(ge);if(Ee.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:h}),k=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const K=[],be=[],se=[];for(const E of Ee){const L=e.tools.find($=>$.elementId===E.name);if(!L){be.push(E.name);continue}if(!s&&m.has(L.elementId)){se.push(L.elementId);continue}K.push({tool:L,args:E.args})}if(be.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${be.join(", ")} — nothing activated`,turn:h}),se.length&&t({kind:"error",text:`🤖 model asked to re-run ${se.join(", ")} — skipped (already run)`,turn:h}),K.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:h}),k=[...be.length?[`${be.join(", ")} ${be.length===1?"is":"are"} not a real tool`]:[],...se.length?[`${se.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:S,forHistory:I}=ti(K,t,h);for(const{tool:E}of K)m.add(E.elementId),b.push(`- ${E.elementId}(${JSON.stringify(I.get(E.elementId))})`);for(const{tool:E}of K)t({kind:"agent",text:`🤖 calling ${E.elementId}`,turn:h,elementId:E.elementId,args:I.get(E.elementId)??{}});return{activateElements:K.map(E=>({elementId:E.tool.elementId})),variables:S}}}}function ii(e,n,t,r={}){const o=new Map(e.map(s=>[s.elementId,ri(s,n,t,r)]));return async s=>{const d=o.get(s.elementId);if(!d)throw new Error(`No agent host registered for "${s.elementId}"`);return d(s)}}class An{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,ot.unregister(this),n}free(){const n=this.__destroy_into_raw();c.__wbg_testengine_free(n,0)}activateJobs(n,t,r,o){let s,d;try{const b=c.__wbindgen_add_to_stack_pointer(-16),_=D(n,c.__wbindgen_export,c.__wbindgen_export2),v=P,k=D(o,c.__wbindgen_export,c.__wbindgen_export2),f=P;c.testengine_activateJobs(b,this.__wbg_ptr,_,v,t,r,k,f);var l=y().getInt32(b+0,!0),p=y().getInt32(b+4,!0),a=y().getInt32(b+8,!0),u=y().getInt32(b+12,!0),h=l,m=p;if(u)throw h=0,m=0,z(a);return s=h,d=m,F(h,m)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(s,d,1)}}advanceTime(n){let t,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_advanceTime(u,this.__wbg_ptr,n);var o=y().getInt32(u+0,!0),s=y().getInt32(u+4,!0),d=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),p=o,a=s;if(l)throw p=0,a=0,z(d);return t=p,r=a,F(p,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}assignUserTask(n,t,r){let o,s;try{const m=c.__wbindgen_add_to_stack_pointer(-16),b=D(n,c.__wbindgen_export,c.__wbindgen_export2),_=P,v=D(t,c.__wbindgen_export,c.__wbindgen_export2),k=P;c.testengine_assignUserTask(m,this.__wbg_ptr,b,_,v,k,r);var d=y().getInt32(m+0,!0),l=y().getInt32(m+4,!0),p=y().getInt32(m+8,!0),a=y().getInt32(m+12,!0),u=d,h=l;if(a)throw u=0,h=0,z(p);return o=u,s=h,F(u,h)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,s,1)}}broadcastSignal(n,t){let r,o;try{const h=c.__wbindgen_add_to_stack_pointer(-16),m=D(n,c.__wbindgen_export,c.__wbindgen_export2),b=P,_=D(t,c.__wbindgen_export,c.__wbindgen_export2),v=P;c.testengine_broadcastSignal(h,this.__wbg_ptr,m,b,_,v);var s=y().getInt32(h+0,!0),d=y().getInt32(h+4,!0),l=y().getInt32(h+8,!0),p=y().getInt32(h+12,!0),a=s,u=d;if(p)throw a=0,u=0,z(l);return r=a,o=u,F(a,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,o,1)}}cancelInstance(n){let t,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16),h=D(n,c.__wbindgen_export,c.__wbindgen_export2),m=P;c.testengine_cancelInstance(u,this.__wbg_ptr,h,m);var o=y().getInt32(u+0,!0),s=y().getInt32(u+4,!0),d=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),p=o,a=s;if(l)throw p=0,a=0,z(d);return t=p,r=a,F(p,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}completeAgentJob(n,t,r){let o,s;try{const m=c.__wbindgen_add_to_stack_pointer(-16),b=D(n,c.__wbindgen_export,c.__wbindgen_export2),_=P,v=D(t,c.__wbindgen_export,c.__wbindgen_export2),k=P,f=D(r,c.__wbindgen_export,c.__wbindgen_export2),M=P;c.testengine_completeAgentJob(m,this.__wbg_ptr,b,_,v,k,f,M);var d=y().getInt32(m+0,!0),l=y().getInt32(m+4,!0),p=y().getInt32(m+8,!0),a=y().getInt32(m+12,!0),u=d,h=l;if(a)throw u=0,h=0,z(p);return o=u,s=h,F(u,h)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,s,1)}}completeJob(n,t){let r,o;try{const h=c.__wbindgen_add_to_stack_pointer(-16),m=D(n,c.__wbindgen_export,c.__wbindgen_export2),b=P,_=D(t,c.__wbindgen_export,c.__wbindgen_export2),v=P;c.testengine_completeJob(h,this.__wbg_ptr,m,b,_,v);var s=y().getInt32(h+0,!0),d=y().getInt32(h+4,!0),l=y().getInt32(h+8,!0),p=y().getInt32(h+12,!0),a=s,u=d;if(p)throw a=0,u=0,z(l);return r=a,o=u,F(a,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,o,1)}}completeUserTask(n,t){let r,o;try{const h=c.__wbindgen_add_to_stack_pointer(-16),m=D(n,c.__wbindgen_export,c.__wbindgen_export2),b=P,_=D(t,c.__wbindgen_export,c.__wbindgen_export2),v=P;c.testengine_completeUserTask(h,this.__wbg_ptr,m,b,_,v);var s=y().getInt32(h+0,!0),d=y().getInt32(h+4,!0),l=y().getInt32(h+8,!0),p=y().getInt32(h+12,!0),a=s,u=d;if(p)throw a=0,u=0,z(l);return r=a,o=u,F(a,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,o,1)}}correlateMessage(n,t,r){let o,s;try{const m=c.__wbindgen_add_to_stack_pointer(-16),b=D(n,c.__wbindgen_export,c.__wbindgen_export2),_=P,v=D(t,c.__wbindgen_export,c.__wbindgen_export2),k=P,f=D(r,c.__wbindgen_export,c.__wbindgen_export2),M=P;c.testengine_correlateMessage(m,this.__wbg_ptr,b,_,v,k,f,M);var d=y().getInt32(m+0,!0),l=y().getInt32(m+4,!0),p=y().getInt32(m+8,!0),a=y().getInt32(m+12,!0),u=d,h=l;if(a)throw u=0,h=0,z(p);return o=u,s=h,F(u,h)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,s,1)}}createInstance(n,t,r){let o,s;try{const m=c.__wbindgen_add_to_stack_pointer(-16),b=D(n,c.__wbindgen_export,c.__wbindgen_export2),_=P,v=D(t,c.__wbindgen_export,c.__wbindgen_export2),k=P;c.testengine_createInstance(m,this.__wbg_ptr,b,_,v,k,li(r)?Number.MAX_SAFE_INTEGER:r>>0);var d=y().getInt32(m+0,!0),l=y().getInt32(m+4,!0),p=y().getInt32(m+8,!0),a=y().getInt32(m+12,!0),u=d,h=l;if(a)throw u=0,h=0,z(p);return o=u,s=h,F(u,h)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,s,1)}}debugClear(){c.testengine_debugClear(this.__wbg_ptr)}debugCreateInstance(n,t,r){let o,s;try{const m=c.__wbindgen_add_to_stack_pointer(-16),b=D(n,c.__wbindgen_export,c.__wbindgen_export2),_=P,v=D(t,c.__wbindgen_export,c.__wbindgen_export2),k=P,f=D(r,c.__wbindgen_export,c.__wbindgen_export2),M=P;c.testengine_debugCreateInstance(m,this.__wbg_ptr,b,_,v,k,f,M);var d=y().getInt32(m+0,!0),l=y().getInt32(m+4,!0),p=y().getInt32(m+8,!0),a=y().getInt32(m+12,!0),u=d,h=l;if(a)throw u=0,h=0,z(p);return o=u,s=h,F(u,h)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,s,1)}}get debugIsPaused(){return c.testengine_debugIsPaused(this.__wbg_ptr)!==0}debugResume(){let n,t;try{const a=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_debugResume(a,this.__wbg_ptr);var r=y().getInt32(a+0,!0),o=y().getInt32(a+4,!0),s=y().getInt32(a+8,!0),d=y().getInt32(a+12,!0),l=r,p=o;if(d)throw l=0,p=0,z(s);return n=l,t=p,F(l,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}debugStep(){let n,t;try{const a=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_debugStep(a,this.__wbg_ptr);var r=y().getInt32(a+0,!0),o=y().getInt32(a+4,!0),s=y().getInt32(a+8,!0),d=y().getInt32(a+12,!0),l=r,p=o;if(d)throw l=0,p=0,z(s);return n=l,t=p,F(l,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}deploy(n){let t,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16),h=D(n,c.__wbindgen_export,c.__wbindgen_export2),m=P;c.testengine_deploy(u,this.__wbg_ptr,h,m);var o=y().getInt32(u+0,!0),s=y().getInt32(u+4,!0),d=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),p=o,a=s;if(l)throw p=0,a=0,z(d);return t=p,r=a,F(p,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}deployForm(n){let t,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16),h=D(n,c.__wbindgen_export,c.__wbindgen_export2),m=P;c.testengine_deployForm(u,this.__wbg_ptr,h,m);var o=y().getInt32(u+0,!0),s=y().getInt32(u+4,!0),d=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),p=o,a=s;if(l)throw p=0,a=0,z(d);return t=p,r=a,F(p,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}deployResource(n,t){let r,o;try{const h=c.__wbindgen_add_to_stack_pointer(-16),m=D(n,c.__wbindgen_export,c.__wbindgen_export2),b=P,_=D(t,c.__wbindgen_export,c.__wbindgen_export2),v=P;c.testengine_deployResource(h,this.__wbg_ptr,m,b,_,v);var s=y().getInt32(h+0,!0),d=y().getInt32(h+4,!0),l=y().getInt32(h+8,!0),p=y().getInt32(h+12,!0),a=s,u=d;if(p)throw a=0,u=0,z(l);return r=a,o=u,F(a,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,o,1)}}events(){let n,t;try{const a=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_events(a,this.__wbg_ptr);var r=y().getInt32(a+0,!0),o=y().getInt32(a+4,!0),s=y().getInt32(a+8,!0),d=y().getInt32(a+12,!0),l=r,p=o;if(d)throw l=0,p=0,z(s);return n=l,t=p,F(l,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}failJob(n,t,r){let o,s;try{const m=c.__wbindgen_add_to_stack_pointer(-16),b=D(n,c.__wbindgen_export,c.__wbindgen_export2),_=P,v=D(r,c.__wbindgen_export,c.__wbindgen_export2),k=P;c.testengine_failJob(m,this.__wbg_ptr,b,_,t,v,k);var d=y().getInt32(m+0,!0),l=y().getInt32(m+4,!0),p=y().getInt32(m+8,!0),a=y().getInt32(m+12,!0),u=d,h=l;if(a)throw u=0,h=0,z(p);return o=u,s=h,F(u,h)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,s,1)}}migrate(n,t,r){let o,s;try{const m=c.__wbindgen_add_to_stack_pointer(-16),b=D(n,c.__wbindgen_export,c.__wbindgen_export2),_=P,v=D(t,c.__wbindgen_export,c.__wbindgen_export2),k=P,f=D(r,c.__wbindgen_export,c.__wbindgen_export2),M=P;c.testengine_migrate(m,this.__wbg_ptr,b,_,v,k,f,M);var d=y().getInt32(m+0,!0),l=y().getInt32(m+4,!0),p=y().getInt32(m+8,!0),a=y().getInt32(m+12,!0),u=d,h=l;if(a)throw u=0,h=0,z(p);return o=u,s=h,F(u,h)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,s,1)}}modify(n,t,r){let o,s;try{const m=c.__wbindgen_add_to_stack_pointer(-16),b=D(n,c.__wbindgen_export,c.__wbindgen_export2),_=P,v=D(t,c.__wbindgen_export,c.__wbindgen_export2),k=P,f=D(r,c.__wbindgen_export,c.__wbindgen_export2),M=P;c.testengine_modify(m,this.__wbg_ptr,b,_,v,k,f,M);var d=y().getInt32(m+0,!0),l=y().getInt32(m+4,!0),p=y().getInt32(m+8,!0),a=y().getInt32(m+12,!0),u=d,h=l;if(a)throw u=0,h=0,z(p);return o=u,s=h,F(u,h)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,s,1)}}constructor(){const n=c.testengine_new();return this.__wbg_ptr=n,ot.register(this,this.__wbg_ptr,this),this}get now(){return c.testengine_now(this.__wbg_ptr)}reset(){c.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16),h=D(n,c.__wbindgen_export,c.__wbindgen_export2),m=P;c.testengine_resolveIncident(u,this.__wbg_ptr,h,m);var o=y().getInt32(u+0,!0),s=y().getInt32(u+4,!0),d=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),p=o,a=s;if(l)throw p=0,a=0,z(d);return t=p,r=a,F(p,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}setVariables(n,t,r){let o,s;try{const m=c.__wbindgen_add_to_stack_pointer(-16),b=D(n,c.__wbindgen_export,c.__wbindgen_export2),_=P,v=D(t,c.__wbindgen_export,c.__wbindgen_export2),k=P;c.testengine_setVariables(m,this.__wbg_ptr,b,_,v,k,r);var d=y().getInt32(m+0,!0),l=y().getInt32(m+4,!0),p=y().getInt32(m+8,!0),a=y().getInt32(m+12,!0),u=d,h=l;if(a)throw u=0,h=0,z(p);return o=u,s=h,F(u,h)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,s,1)}}snapshot(){let n,t;try{const a=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_snapshot(a,this.__wbg_ptr);var r=y().getInt32(a+0,!0),o=y().getInt32(a+4,!0),s=y().getInt32(a+8,!0),d=y().getInt32(a+12,!0),l=r,p=o;if(d)throw l=0,p=0,z(s);return n=l,t=p,F(l,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}throwError(n,t,r){let o,s;try{const m=c.__wbindgen_add_to_stack_pointer(-16),b=D(n,c.__wbindgen_export,c.__wbindgen_export2),_=P,v=D(t,c.__wbindgen_export,c.__wbindgen_export2),k=P,f=D(r,c.__wbindgen_export,c.__wbindgen_export2),M=P;c.testengine_throwError(m,this.__wbg_ptr,b,_,v,k,f,M);var d=y().getInt32(m+0,!0),l=y().getInt32(m+4,!0),p=y().getInt32(m+8,!0),a=y().getInt32(m+12,!0),u=d,h=l;if(a)throw u=0,h=0,z(p);return o=u,s=h,F(u,h)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,s,1)}}tickNow(n){let t,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_tickNow(u,this.__wbg_ptr,n);var o=y().getInt32(u+0,!0),s=y().getInt32(u+4,!0),d=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),p=o,a=s;if(l)throw p=0,a=0,z(d);return t=p,r=a,F(p,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}unassignUserTask(n){let t,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16),h=D(n,c.__wbindgen_export,c.__wbindgen_export2),m=P;c.testengine_unassignUserTask(u,this.__wbg_ptr,h,m);var o=y().getInt32(u+0,!0),s=y().getInt32(u+4,!0),d=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),p=o,a=s;if(l)throw p=0,a=0,z(d);return t=p,r=a,F(p,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,r,1)}}updateRetries(n,t){let r,o;try{const h=c.__wbindgen_add_to_stack_pointer(-16),m=D(n,c.__wbindgen_export,c.__wbindgen_export2),b=P;c.testengine_updateRetries(h,this.__wbg_ptr,m,b,t);var s=y().getInt32(h+0,!0),d=y().getInt32(h+4,!0),l=y().getInt32(h+8,!0),p=y().getInt32(h+12,!0),a=s,u=d;if(p)throw a=0,u=0,z(l);return r=a,o=u,F(a,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,o,1)}}updateUserTask(n,t){let r,o;try{const h=c.__wbindgen_add_to_stack_pointer(-16),m=D(n,c.__wbindgen_export,c.__wbindgen_export2),b=P,_=D(t,c.__wbindgen_export,c.__wbindgen_export2),v=P;c.testengine_updateUserTask(h,this.__wbg_ptr,m,b,_,v);var s=y().getInt32(h+0,!0),d=y().getInt32(h+4,!0),l=y().getInt32(h+8,!0),p=y().getInt32(h+12,!0),a=s,u=d;if(p)throw a=0,u=0,z(l);return r=a,o=u,F(a,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,o,1)}}}Symbol.dispose&&(An.prototype[Symbol.dispose]=An.prototype.free);function oi(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_bb96b2010945f0bc:function(n,t){throw new Error(F(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const r=F(n,t);return ai(r)},__wbindgen_object_drop_ref:function(n){z(n)}}}}const ot=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>c.__wbg_testengine_free(e,1));function ai(e){Ke===je.length&&je.push(je.length+1);const n=Ke;return Ke=je[n],je[n]=e,n}function si(e){e<1028||(je[e]=Ke,Ke=e)}let Fe=null;function y(){return(Fe===null||Fe.buffer.detached===!0||Fe.buffer.detached===void 0&&Fe.buffer!==c.memory.buffer)&&(Fe=new DataView(c.memory.buffer)),Fe}function F(e,n){return mi(e>>>0,n)}let Ze=null;function dn(){return(Ze===null||Ze.byteLength===0)&&(Ze=new Uint8Array(c.memory.buffer)),Ze}function di(e){return je[e]}let je=new Array(1024).fill(void 0);je.push(void 0,null,!0,!1);let Ke=je.length;function li(e){return e==null}function D(e,n,t){if(t===void 0){const l=Xe.encode(e),p=n(l.length,1)>>>0;return dn().subarray(p,p+l.length).set(l),P=l.length,p}let r=e.length,o=n(r,1)>>>0;const s=dn();let d=0;for(;d<r;d++){const l=e.charCodeAt(d);if(l>127)break;s[o+d]=l}if(d!==r){d!==0&&(e=e.slice(d)),o=t(o,r,r=d+e.length*3,1)>>>0;const l=dn().subarray(o+d,o+r),p=Xe.encodeInto(e,l);d+=p.written,o=t(o,r,d,1)>>>0}return P=d,o}function z(e){const n=di(e);return si(e),n}let ln=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});ln.decode();const ci=2146435072;let vn=0;function mi(e,n){return vn+=n,vn>=ci&&(ln=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),ln.decode(),vn=n),ln.decode(dn().subarray(e,e+n))}const Xe=new TextEncoder;"encodeInto"in Xe||(Xe.encodeInto=function(e,n){const t=Xe.encode(e);return n.set(t),{read:e.length,written:t.length}});let P=0,c;function pi(e,n){return c=e.exports,Fe=null,Ze=null,c}async function ui(e,n){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(o){if(t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}else{const r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function t(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function hi(e){if(c!==void 0)return c;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/web-demo-framework/pr-preview/pr-119/assets/nanobpmn_engine_bg-DRNrIVE8.wasm",import.meta.url));const n=oi();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await ui(await e,n);return pi(t)}let an=null;function gi(e){return an||(an=hi(void 0).then(()=>{}).catch(n=>{throw an=null,n})),an}function ne(e){return JSON.parse(e)}class bi{constructor(n){R(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return ne(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,r,o){return JSON.parse(this.engine.activateJobs(n,t,r,o))}completeJob(n,t){return ne(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:r,...o}=t??{};return ne(this.engine.completeAgentJob(n,JSON.stringify(r??{}),JSON.stringify(o??{})))}failJob(n,t,r){return ne(this.engine.failJob(n,t,r))}throwError(n,t,r){return ne(this.engine.throwError(n,t,r))}updateRetries(n,t){return ne(this.engine.updateRetries(n,t))}resolveIncident(n){return ne(this.engine.resolveIncident(n))}setVariables(n,t,r){return ne(this.engine.setVariables(n,t||"{}",r))}broadcastSignal(n,t){return ne(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return ne(this.engine.cancelInstance(n))}modify(n,t,r){return ne(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(r??[])))}completeUserTask(n,t){return ne(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,r){return ne(this.engine.assignUserTask(n,t,r))}unassignUserTask(n){return ne(this.engine.unassignUserTask(n))}updateUserTask(n,t){return ne(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,r){return ne(this.engine.correlateMessage(n,t,r||"{}"))}advanceTime(n){return ne(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return ne(this.engine.snapshot())}free(){this.engine.free()}}async function fi(e){return await gi(),new bi(new An)}class Ft extends Error{constructor(t,r){super(t);R(this,"retries");this.name="JobFailure",this.retries=r==null?void 0:r.retries}}function _i(e,n=[]){if(e.instances.filter(o=>!o.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const r=new Set(n);return e.jobs.some(o=>!r.has(o.jobType))?"unhandledJobs":e.userTasks.some(o=>o.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function wi(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(r=>r.jobType))].filter(r=>!t.has(r)).sort()}async function yi(e,n,t){let r;try{const o=await n(t);r=JSON.stringify(o??{})}catch(o){const s=o instanceof Ft&&o.retries!==void 0?o.retries:Math.max(0,t.retries-1),d=o instanceof Error?o.message:String(o);e.failJob(t.key,s,d);return}e.completeJob(t.key,r)}async function vi(e,n,t){let r;try{r=await n(t),JSON.stringify(r)}catch(o){const s=o instanceof Ft&&o.retries!==void 0?o.retries:Math.max(0,t.retries-1),d=o instanceof Error?o.message:String(o);e.failJob(t.key,s,d);return}e.completeAgentJob(t.key,r)}async function Mi(e,n,t={}){const r=t.maxJobsPerActivation??10,o=t.lockTimeoutMs??3e4,s=t.worker??"bojtos",d=t.agents??{};for(const m of Object.keys(d))if(m in n)throw new Error(`dispatchRound: job type "${m}" is registered as both a worker and an agent — register it as exactly one`);const l=[];for(const[m,b]of Object.entries(n))for(const _ of e.activateJobs(m,r,o,s))l.push({handler:b,job:_});const p=[];for(const[m,b]of Object.entries(d))for(const _ of e.activateJobs(m,r,o,s))p.push({handler:b,job:_});for(const{handler:m,job:b}of l)await yi(e,m,b);for(const{handler:m,job:b}of p)await vi(e,m,b);const a=e.snapshot(),u=l.length+p.length;if(u>0)return{snapshot:a,handled:u};const h=[...Object.keys(n),...Object.keys(d)];return{snapshot:a,handled:u,reason:_i(a,h),unhandled:wi(a,h)}}function xi({bpmn:e}){const n=g.useRef(null),[t,r]=g.useState("loading"),[o,s]=g.useState(null),[d,l]=g.useState([]),[p,a]=g.useState(null),u=g.useRef(e),h=g.useRef(0),m=g.useRef(null),b=g.useRef(new Map),_=g.useCallback((S,I)=>{b.current.set(S,I)},[]),v=g.useCallback(S=>b.current.get(S),[]),k=g.useCallback((S,I)=>{const E=S.deploy(I);return u.current=I,b.current.clear(),l(E.processIds),a(null),s(null),E.processIds},[]);g.useEffect(()=>{let S=!1;return r("loading"),l([]),a(null),s(null),fi().then(I=>{if(S){I.free();return}try{k(I,e)}catch(E){I.free(),s(String(E)),r("error");return}n.current=I,r("ready")}).catch(I=>{S||(s(String(I)),r("error"))}),()=>{var I;S=!0,(I=n.current)==null||I.free(),n.current=null,b.current.clear()}},[e]);const f=g.useCallback(S=>{const I=n.current;if(!I)return null;try{const E=S(I);return a(E),s(null),E}catch(E){return s(String(E)),null}},[]),M=g.useCallback((S,I)=>f(E=>E.createInstance(S,I)),[f]),x=g.useCallback((S,I)=>f(E=>E.completeUserTask(S,I)),[f]),V=g.useCallback(S=>f(I=>I.advanceTime(S)),[f]),H=g.useCallback((S,I)=>f(E=>E.broadcastSignal(S,I)),[f]);function Y(S,I){const[E]=S.activateJobs(I,1,3e4,"manual-control");if(!E)throw new Error(`No waiting job of type "${I}" to resolve.`);return E}const he=g.useCallback((S,I)=>f(E=>{const L=Y(E,S);return E.completeJob(L.key,I)}),[f]),Pe=g.useCallback((S,I,E)=>f(L=>{const $=Y(L,S);return L.throwError($.key,I,E)}),[f]),ge=g.useCallback((S,I,E)=>f(L=>L.correlateMessage(S,I,E)),[f]),Ee=g.useCallback(async(S,I)=>{const E=n.current;if(!E)return null;const L=h.current,$=Mi(E,S,I);m.current=$;try{const ye=await $;return n.current!==E||h.current!==L?null:(a(ye.snapshot),s(null),ye)}catch(ye){return n.current!==E||h.current!==L||(a(E.snapshot()),s(String(ye))),null}finally{m.current===$&&(m.current=null)}},[]),K=g.useCallback(async()=>{var S;await((S=m.current)==null?void 0:S.catch(()=>{}))},[]),be=g.useCallback(async()=>{await K();const S=n.current;if(S){h.current++;try{S.reset(),k(S,u.current)}catch(I){s(String(I))}}},[k,K]),se=g.useCallback(async S=>{await K();const I=n.current;if(!I)return null;h.current++;try{return I.reset(),k(I,S)}catch(E){return s(String(E)),null}},[k,K]);return{phase:t,error:o,processIds:d,snapshot:p,createInstance:M,stepWorkers:Ee,completeUserTask:x,advanceTime:V,broadcastSignal:H,completeJobManually:he,throwJobError:Pe,correlateMessage:ge,reset:be,redeploy:se,setRunImage:_,getRunImage:v}}const Ni="web-demo-framework:height",Ei="web-demo-framework:ready";function ki(){return{type:Ei}}const Ii="web-demo-framework:request-height";function Ti(e){return{type:Ni,height:Math.ceil(e)}}const at="embed-height-auto";function ji(e=document){return Math.max(e.documentElement.offsetHeight,e.body.scrollHeight)}function Si(e){g.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(at);let t=-1;const r=(d=!1)=>{const l=ji();!d&&Math.abs(l-t)<2||(t=l,window.parent.postMessage(Ti(l),"*"))},o=d=>{if(d.source!==window.parent)return;const l=d.data;!l||l.type!==Ii||r(!0)};window.addEventListener("message",o),r();const s=new ResizeObserver(()=>r());return s.observe(n),()=>{s.disconnect(),window.removeEventListener("message",o),n.classList.remove(at)}},[e])}function Pi(e){const n=g.useRef(!1);g.useEffect(()=>{!e||n.current||typeof window>"u"||window.parent===window||(n.current=!0,window.parent.postMessage(ki(),"*"))},[e])}function Ai(e,n){return e.slice(n)}function Di(e,n,t,r){const o=e.snapshot,s="⏸ waiting for a human — complete the task below to continue",d=o.userTasks.some(l=>l.state==="Created");if(e.handled>0){const l=o.activeElementIds.map(t),p=n.length?` via ${n.map(a=>`${t(a.from)} → ${t(a.to)}`).join(", ")}`:"";return o.completedInstances>=1?{kind:"done",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${p} — ✅ process instance completed`}:d?{kind:"human",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${p} — ${s}`}:{kind:"step",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${p} — now at ${l.length?l.join(", "):"—"}`}}switch(e.reason){case"completed":return{kind:"done",text:"✅ process instance completed"};case"userTasks":return{kind:"human",text:s};case"timers":return{kind:"step",text:"⏱ waiting on a timer — advance the clock to continue"};case"messages":return{kind:"step",text:"✉ waiting on a message — correlate it to continue"};case"signals":return{kind:"step",text:"📶 waiting on a signal — broadcast it to continue"};case"incidents":return{kind:"error",text:"A job failed — incident on the diagram"};case"unhandledJobs":{const l=e.unhandled??[];return r&&l.length>0&&l.every(p=>r.has(p))?{kind:"human",text:s}:{kind:"error",text:`⏭ waiting on job type(s) with no worker registered: ${l.join(", ")}`}}case"idle":return{kind:"step",text:"Nothing to step — no instance is running."};default:return{kind:"step",text:e.reason?`Step blocked on an unrecognized reason: ${e.reason}`:"Nothing to step — no instance is running."}}}const Ci="the Scripted or Endpoint brain";async function mn(e=Ci){const n=navigator.gpu;if(!n)return`This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick ${e}.`;let t;try{t=await n.requestAdapter()}catch(r){return`WebGPU adapter request failed (${r instanceof Error?r.message:String(r)}). Try ${e} instead.`}return t?null:`This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick ${e} instead.`}const Bi=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function Ot(e){return Dn.get(e)??{}}const Dn=new Map;async function Li(){if(Dn.size>0)return;const{prebuiltAppConfig:e}=await ue(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)Dn.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const bn=Bi.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...Ot(e.id)})),zt=bn[0].id;async function Ri(){return await Li(),bn.map(e=>({...e,...Ot(e.id)}))}function Ut(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function Fi(e,n=Ut()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function Oi(e){try{const{hasModelInCache:n}=await ue(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function pn(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function st(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class sn{constructor(){R(this,"kind","browser");R(this,"model",null);R(this,"engine",null);R(this,"worker",null);R(this,"generation",0);R(this,"chat",async(n,t=512,r)=>{var s,d;const o=this.engine;if(!o||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const l=await o.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let p="";for await(const a of l){const u=((d=(s=a.choices[0])==null?void 0:s.delta)==null?void 0:d.content)??"";u&&(p+=u,r==null||r(u))}return p}catch(l){const p=l instanceof Error?l.message:String(l);throw pn(p)?(this.teardown(),new Error(`The in-browser model stopped: ${st()}`)):l}})}async connect(n=zt,t){var p,a;const r=await mn();if(r)throw new Error(r);if(this.engine&&this.model===n)return n;const o=++this.generation,s=u=>{o===this.generation&&(t==null||t({progress:u.progress??0,text:u.text??""}))};this.teardown();let d,l;try{const{CreateWebWorkerMLCEngine:u}=await ue(async()=>{const{CreateWebWorkerMLCEngine:h}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:h}},[]);l=new Worker(new URL("/web-demo-framework/pr-preview/pr-119/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),d=await u(l,n,{initProgressCallback:s})}catch(u){if(l==null||l.terminate(),o!==this.generation)throw new Error("cancelled");const h=u instanceof Error?u.message:String(u);if(pn(h))throw new Error(`Couldn't load ${n} in the browser (${h}). ${st()}`);const m=(a=(p=bn.find(b=>b.id===n))==null?void 0:p.requiredFeatures)==null?void 0:a.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${h}). `+(m?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(o!==this.generation)throw d.unload().catch(()=>{}),l==null||l.terminate(),new Error("cancelled");return this.engine=d,this.worker=l??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const Ln="http://localhost:11434/v1",un=e=>e==="localhost"||e==="127.0.0.1"||e==="::1"||e==="[::1]";function $t(){var e;return un(((e=globalThis.location)==null?void 0:e.hostname)??"")}function zi(e){try{return un(new URL(Rn(e)).hostname)}catch{return!1}}function hn(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(r=>(r=globalThis.location)==null?void 0:r.origin)()??""}){let o;try{o=new URL(Rn(e)).hostname}catch{return null}return!un(o)||un(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function Rn(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class dt extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class lt{constructor(n=Ln,t="",r=""){R(this,"kind","endpoint");R(this,"baseUrl");R(this,"model",null);R(this,"models",[]);R(this,"apiKey");R(this,"requestedModel");R(this,"chat",async(n,t=512,r)=>{var a,u,h;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const o=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!o.ok||!o.body){const m=await o.text().catch(()=>"");throw new Error(`chat/completions HTTP ${o.status} ${o.statusText}${m?` — ${m.slice(0,300)}`:""}`)}const s=o.body.getReader(),d=new TextDecoder;let l="",p="";for(;;){const{value:m,done:b}=await s.read();if(b)break;l+=d.decode(m,{stream:!0});let _;for(;(_=l.indexOf(`
`))>=0;){const v=l.slice(0,_).trim();if(l=l.slice(_+1),!v.startsWith("data:"))continue;const k=v.slice(5).trim();if(k==="[DONE]")continue;let f;try{f=JSON.parse(k)}catch{continue}f.model&&(this.model=f.model);const M=(a=f.choices)==null?void 0:a[0],x=((u=M==null?void 0:M.delta)==null?void 0:u.content)??((h=M==null?void 0:M.message)==null?void 0:h.content)??"";x&&(p+=x,r==null||r(x))}}return p});this.baseUrl=Rn(n),this.apiKey=t.trim(),this.requestedModel=r.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(r){const o=hn(this.baseUrl);throw new Error(o??`Can't reach ${this.baseUrl} (${r instanceof Error?r.message:String(r)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new dt(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(r=>r.id).filter(r=>!!r),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof dt&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(r=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${r instanceof Error?r.message:String(r)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const r=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${r?` — ${r.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}const ct="gemini-nano";function gn(){const e=globalThis.LanguageModel;return typeof(e==null?void 0:e.create)=="function"&&typeof e.availability=="function"?e:null}function Ui(){return gn()!==null}async function Gt(){const e=gn();if(!e)return"This browser has no built-in AI model. Chrome's Prompt API (Gemini Nano) needs Chrome 138+ on desktop Windows 10/11, macOS 13+, Linux or a Chromebook Plus. Use the Scripted, In-browser (WebGPU) or API endpoint brain instead.";let n;try{n=await e.availability()}catch(t){return`Chrome couldn't report on its built-in model (${t instanceof Error?t.message:String(t)}).`}return n==="unavailable"?"Chrome exposes the built-in AI API here, but Gemini Nano can't run on this device. Chrome requires ~22 GB free on the volume holding your Chrome profile, and either a GPU with more than 4 GB of VRAM or 16 GB of RAM with 4+ CPU cores. Check chrome://on-device-internals for the details.":null}class mt{constructor(){R(this,"kind","chrome");R(this,"model",null);R(this,"warm",null);R(this,"connecting",null);R(this,"chat",async(n,t,r)=>{if(!this.model)throw new Error("ChromeBrain.chat called before connect()");const o=gn();if(!o)throw new Error("Chrome's built-in AI API went away.");const s=n.filter(p=>p.role==="system"),d=n.filter(p=>p.role!=="system"),l=await o.create(s.length?{initialPrompts:s}:void 0);try{const p=l.promptStreaming(d).getReader();let a="";for(;;){const{done:u,value:h}=await p.read();if(u)break;h&&(a+=h,r==null||r(h))}return a}finally{l.destroy()}})}async connect(n){const t=await Gt();if(t)throw new Error(t);const r=gn();this.dispose();const o=new AbortController;this.connecting=o;try{this.warm=await r.create({signal:o.signal,monitor:s=>{s.addEventListener("downloadprogress",d=>{n==null||n({progress:d.loaded,text:"Downloading Gemini Nano"})})}})}catch(s){if(o.signal.aborted)throw new Error("cancelled");const d=s instanceof Error?s.message:String(s);throw new Error(`Chrome couldn't start its built-in model (${d}). The first run downloads Gemini Nano and must be triggered by a click — press Connect again, and check chrome://on-device-internals if it keeps failing.`)}finally{this.connecting=null}return this.model=ct,ct}cancelConnect(){var n;(n=this.connecting)==null||n.abort()}dispose(){var n,t;(n=this.connecting)==null||n.abort(),this.connecting=null,(t=this.warm)==null||t.destroy(),this.warm=null,this.model=null}}const $i=[{id:"onnx-community/Florence-2-base-ft",label:"Florence-2 base",downloadLabel:"~0.4 GB"},{id:"onnx-community/Florence-2-large-ft",label:"Florence-2 large (higher quality)",downloadLabel:"~1.6 GB"}],Vt=$i.map(e=>({...e,label:`${e.label} (${e.downloadLabel})`})),Yt=Vt[0].id,Gi="<OCR>",pt="UNKNOWN (scripted brain — connect the in-browser model to read a photo)";function Vi(e,n){if(e)return typeof e=="function"?e(n):e[n]}class Yi{constructor(n){R(this,"kind","scripted-vision");R(this,"model",null);R(this,"read",async(n,t,r)=>{const o=typeof n=="string"?Vi(this.lookup,n)??pt:pt;return r==null||r(o),o});this.lookup=n}dispose(){}}function Qi(e){return new Yi(e)}class ut{constructor(){R(this,"kind","browser-vision");R(this,"model",null);R(this,"modelHandle",null);R(this,"processor",null);R(this,"loadImage",null);R(this,"generation",0);R(this,"read",async(n,t,r)=>{const o=this.modelHandle,s=this.processor,d=this.loadImage;if(!o||!s||!d||!this.model)throw new Error("BrowserVisionBrain.read called before connect()");const l=t&&t.startsWith("<")?t:Gi,p=await d(n),a=s.construct_prompts(l),u=await s(p,a),h=await o.generate({...u,max_new_tokens:512,num_beams:1,do_sample:!1}),m=s.batch_decode(h,{skip_special_tokens:!1})[0],b=s.post_process_generation(m,l,p.size),_=qi(b,l);return r==null||r(_),_})}async connect(n=Yt,t){var l,p;const r=await mn("the scripted-vision fallback");if(r)throw new Error(r);if(this.modelHandle&&this.model===n)return n;const o=++this.generation,s=a=>{o===this.generation&&(t==null||t({progress:(a.progress??0)/100,text:a.file?`${a.status??"loading"} ${a.file}`:a.status??""}))};this.teardown();let d;try{const{Florence2ForConditionalGeneration:a,AutoProcessor:u,load_image:h}=await ue(async()=>{const{Florence2ForConditionalGeneration:_,AutoProcessor:v,load_image:k}=await import("./transformers.web-_ITzXh56.js");return{Florence2ForConditionalGeneration:_,AutoProcessor:v,load_image:k}},[]),m=await a.from_pretrained(n,{dtype:"fp32",device:"webgpu",progress_callback:s}),b=await u.from_pretrained(n);d={model:m,processor:b,loadImage:h}}catch(a){if(o!==this.generation)throw new Error("cancelled");const u=a instanceof Error?a.message:String(a);throw new Error(`Couldn't load ${n} in the browser (${u}). Try the smaller Florence-2 base model, check your connection, or use the scripted-vision fallback.`)}if(o!==this.generation)throw Promise.resolve((p=(l=d.model).dispose)==null?void 0:p.call(l)).catch(()=>{}),new Error("cancelled");return this.modelHandle=d.model,this.processor=d.processor,this.loadImage=d.loadImage,this.model=n,n}teardown(){var t;const n=this.modelHandle;this.modelHandle=null,this.processor=null,this.loadImage=null,this.model=null,Promise.resolve((t=n==null?void 0:n.dispose)==null?void 0:t.call(n)).catch(()=>{})}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}function qi(e,n){const t=e[n];if(typeof t=="string")return t.trim();if(t&&typeof t=="object"){const r=t.labels;return Array.isArray(r)?r.join(" ").trim():JSON.stringify(t)}return""}function Ji(){const[e,n]=g.useState("scripted"),[t,r]=g.useState("idle"),[o,s]=g.useState(null),[d,l]=g.useState(null),[p,a]=g.useState(null),[u,h]=g.useState(null),[m,b]=g.useState(null),[_,v]=g.useState(null),[k,f]=g.useState(null),[M,x]=g.useState(zt),[V,H]=g.useState($t()?Ln:""),[Y,he]=g.useState(""),[Pe,ge]=g.useState([]),[Ee,K]=g.useState("idle"),[be,se]=g.useState(null),[S,I]=g.useState(""),[E,L]=g.useState(null),$=g.useRef(null),[ye,ze]=g.useState("scripted-vision"),[fn,ve]=g.useState("idle"),[Qe,oe]=g.useState(null),[Ce,nn]=g.useState(Yt),[_n,Me]=g.useState(null),[Be,Ae]=g.useState(null),[wn,yn]=g.useState(null),[qe,X]=g.useState(null),U=g.useRef(null),Je=g.useRef(!1),Ue=g.useRef(0),ke=g.useCallback(j=>async(...Q)=>{try{return await j.chat(...Q)}catch(C){const W=C instanceof Error?C.message:String(C);throw j instanceof sn&&pn(W)&&(L(null),l(null),r("error"),s(W)),C}},[]),Le=g.useCallback(j=>async(...Q)=>{try{return await j.read(...Q)}catch(C){const W=C instanceof Error?C.message:String(C);throw pn(W)&&(X(null),Me(null),ve("error"),oe(W)),C}},[]);g.useEffect(()=>{mn().then(j=>{b(j),h(j===null)}),Gt().then(f),mn("the scripted-vision fallback").then(j=>{yn(j),Je.current||(Je.current=!0,ze(j===null?"browser-vision":"scripted-vision"))})},[]),g.useEffect(()=>{let j=!1;return v(null),Oi(M).then(Q=>{j||v(Q)}),()=>{j=!0}},[M]),g.useEffect(()=>()=>{var j;return(j=$.current)==null?void 0:j.dispose()},[]),g.useEffect(()=>()=>{var j;return(j=U.current)==null?void 0:j.dispose()},[]);const He=g.useCallback(j=>{n(j),r("idle"),s(null),l(null),a(null),L(null)},[]),O=g.useCallback(j=>{var Q,C;Je.current=!0,(Q=U.current)==null||Q.cancelConnect(),(C=U.current)==null||C.dispose(),U.current=null,ze(j),ve("idle"),oe(null),Me(null),Ae(null),X(null)},[]),me=g.useCallback(()=>{var j;(j=$.current)==null||j.dispose(),$.current=null,L(null),l(null)},[]),De=g.useCallback(()=>{const j=$.current;(j instanceof sn||j instanceof mt)&&j.cancelConnect(),me(),r("idle"),a(null),s(null)},[me]),Ie=g.useCallback(async()=>{const j=++Ue.current,Q=()=>j!==Ue.current;if(!V.trim()){ge([]),he(""),K("idle"),se(null);return}const C=hn(V);if(C){ge([]),he(""),K("error"),se(C);return}K("loading"),se(null);const W=new lt(V,S);try{const xe=await W.listModels();if(Q())return;ge(xe),K("ready"),he(Re=>Re&&xe.includes(Re)?Re:xe[0]??"")}catch(xe){if(Q())return;ge([]),he(""),K("error"),se(xe instanceof Error?xe.message:String(xe))}finally{W.dispose()}},[V,S]),tn=g.useCallback(async()=>{var j,Q;if(e==="scripted"){L(null),r("ready");return}if(e==="endpoint"){const C=hn(V);if(C){me(),s(C),r("error");return}}r("connecting"),s(null),a(null);try{if(e==="browser"){const C=$.current instanceof sn?$.current:new sn;$.current&&$.current!==C&&$.current.dispose(),$.current=C;const W=await C.connect(M,a);l(W),L(()=>ke(C)),v(!0)}else if(e==="chrome"){(j=$.current)==null||j.dispose();const C=new mt;$.current=C;const W=await C.connect(a);f(null),l(W),L(()=>ke(C))}else{(Q=$.current)==null||Q.dispose();const C=new lt(V,S,Y);$.current=C;const W=await C.connect();l(W),L(()=>ke(C))}r("ready")}catch(C){const W=C instanceof Error?C.message:String(C);if(W==="cancelled")return;s(W),r("error"),L(null)}finally{a(null)}},[e,M,V,Y,S,me,ke]),ae=g.useCallback(()=>{var j;(j=U.current)==null||j.dispose(),U.current=null,X(null),Me(null)},[]),$e=g.useCallback(()=>{var j;(j=U.current)==null||j.cancelConnect(),ae(),ve("idle"),Ae(null),oe(null)},[ae]),Ge=g.useCallback(async()=>{if(ye==="scripted-vision"){ae(),ve("ready"),oe(null);return}ve("connecting"),oe(null),Ae(null);try{const j=U.current instanceof ut?U.current:new ut;U.current&&U.current!==j&&U.current.dispose(),U.current=j;const Q=await j.connect(Ce,Ae);Me(Q),X(()=>Le(j)),ve("ready")}catch(j){const Q=j instanceof Error?j.message:String(j);if(Q==="cancelled")return;oe(Q),ve("error"),X(null),Me(null)}finally{Ae(null)}},[ye,Ce,ae,Le]);return{kind:e,setKind:He,status:t,error:o,modelInUse:d,progress:p,webgpu:u,webgpuReason:m,browserModelCached:_,chromeAiReason:k,cancelConnect:De,browserModel:M,setBrowserModel:x,endpointUrl:V,setEndpointUrl:H,endpointModel:Y,setEndpointModel:he,endpointModels:Pe,endpointModelsStatus:Ee,endpointModelsError:be,listEndpointModels:Ie,apiKey:S,setApiKey:I,connect:tn,chat:E,visionKind:ye,setVisionKind:O,visionStatus:fn,visionError:Qe,visionModel:Ce,setVisionModel:nn,visionModelInUse:_n,visionProgress:Be,visionWebgpuReason:wn,connectVision:Ge,cancelVisionConnect:$e,vision:qe}}const Cn="#s=",Hi=["scripted","browser","chrome","endpoint"];function Wi(e){return typeof e=="string"&&Hi.includes(e)}function Zi(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,r={};return Wi(t.brain)&&(r.brain=t.brain),r}}catch{}return{}}function Qt(e=location.hash){if(!e.startsWith(Cn))return{};let n;try{n=decodeURIComponent(e.slice(Cn.length))}catch{return{}}return Zi(n)}function Ki(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":Cn+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function Xi(e){const n={...Qt(),...e},t=Ki(n),r=new URL(location.href);r.hash=t,history.replaceState(history.state,"",r)}const ht=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"chrome",label:"Chrome built-in",hint:"Gemini Nano, built into Chrome. Chrome owns the weights — no download from this page, no API key."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server: a local Ollama, or a remote provider with an API key."}],eo=[{mode:"ollama",label:"Ollama (local)"},{mode:"remote",label:"Provider URL + key"}],gt=[{kind:"scripted-vision",label:"Scripted",hint:"No model. The example's known plate is returned — deterministic and offline."},{kind:"browser-vision",label:"In-browser (WebGPU)",hint:"Reads the photo with a vision model on your GPU. First run downloads weights."}];function no({brain:e,showText:n=!0,showVision:t=!1}){return i.jsxs("div",{className:"brain",children:[n&&i.jsx(to,{brain:e}),n&&t&&i.jsx("hr",{className:"brain-divider"}),t&&i.jsx(ro,{brain:e})]})}function to({brain:e}){const n=ht.find(v=>v.kind===e.kind),t=ht.filter(v=>v.kind!=="chrome"||Ui()),r=hn(e.endpointUrl),o=$t(),s=zi(e.endpointUrl)?"ollama":"remote",d=v=>{v!==s&&(e.setEndpointUrl(v==="ollama"?Ln:""),e.setApiKey(""))},[l,p]=g.useState(bn);g.useEffect(()=>{Ri().then(p)},[]);const{kind:a,endpointUrl:u,apiKey:h,listEndpointModels:m}=e;g.useEffect(()=>{if(a!=="endpoint"||r)return;const v=setTimeout(()=>void m(),400);return()=>clearTimeout(v)},[a,u,h,r,m]);const b=l.find(v=>v.id===e.browserModel),_=b?Fi(b,Ut()):null;return i.jsxs("div",{className:"brain-section",children:[i.jsxs("div",{className:"brain-modes",children:[i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Agent brain",children:t.map(v=>i.jsx(Z,{size:"sm",variant:e.kind===v.kind?"default":"secondary","aria-pressed":e.kind===v.kind,onClick:()=>e.setKind(v.kind),children:v.label},v.kind))}),i.jsxs("div",{className:"brain-status",children:[e.status==="ready"&&e.kind!=="scripted"&&i.jsx(ie,{variant:"success",className:"brain-status-badge",children:e.modelInUse??"connected"}),e.status==="connecting"&&i.jsx(ie,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.status==="error"&&i.jsx(ie,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Ye,{htmlFor:"browser-model",children:"Model"}),i.jsxs(En,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[i.jsx(kn,{id:"browser-model",children:i.jsx(In,{})}),i.jsx(Tn,{children:l.map(v=>i.jsx(jn,{value:v.id,children:v.label},v.id))})]}),e.browserModelCached===!0&&i.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&i.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"No WebGPU in this browser"}),i.jsx(ce,{children:e.webgpuReason})]}),e.webgpu!==!1&&_&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"This model may not fit in GPU memory"}),i.jsx(ce,{children:_})]})]}),e.kind==="chrome"&&i.jsxs("div",{className:"brain-config",children:[i.jsx("p",{className:"field-hint",children:"Nothing to configure: Chrome downloads and manages Gemini Nano itself, so the first Connect may fetch it once and later visits reuse it. Prompts never leave your machine. It's a very small model — expect it to follow the tool-calling format less reliably than an endpoint model."}),e.chromeAiReason&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"Chrome's built-in model isn't available here"}),i.jsx(ce,{children:e.chromeAiReason})]})]}),e.kind==="endpoint"&&i.jsxs("div",{className:"brain-config",children:[o?i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Endpoint provider",children:eo.map(v=>i.jsx(Z,{size:"sm",variant:s===v.mode?"default":"secondary","aria-pressed":s===v.mode,disabled:e.status==="connecting",onClick:()=>d(v.mode),children:v.label},v.mode))}):i.jsxs("p",{className:"field-hint",children:["This page isn't served from ",i.jsx("code",{children:"localhost"}),", so a local Ollama isn't offered — it only accepts requests from a page on localhost. Point this at a remote OpenAI-compatible provider, or open this page at ",i.jsx("code",{children:"http://localhost"})," to use Ollama."]}),i.jsxs("div",{className:"field",children:[i.jsx(Ye,{htmlFor:"endpoint-url",children:"Endpoint"}),i.jsx(Zn,{id:"endpoint-url",value:e.endpointUrl,placeholder:"https://api.openai.com/v1",onChange:v=>e.setEndpointUrl(v.target.value),disabled:e.status==="connecting"}),s==="ollama"?i.jsxs("p",{className:"field-hint",children:["Ollama allows ",i.jsx("code",{children:"localhost"})," origins out of the box; set"," ",i.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}):i.jsxs("p",{className:"field-hint",children:["The base URL of any OpenAI-compatible provider — it must serve"," ",i.jsx("code",{children:"/models"})," and ",i.jsx("code",{children:"/chat/completions"}),". Calls go straight from this browser to that host."]}),r&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"A local server won't work from this URL"}),i.jsx(ce,{children:r})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(Ye,{htmlFor:"endpoint-model",children:"Model"}),i.jsxs("div",{className:"endpoint-model-row",children:[i.jsxs(En,{value:e.endpointModel,onValueChange:e.setEndpointModel,disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||e.endpointModels.length===0,children:[i.jsx(kn,{id:"endpoint-model",className:"endpoint-model-select",children:i.jsx(In,{placeholder:e.endpointModelsStatus==="loading"?"Loading models…":e.endpointModelsStatus==="idle"?"Enter an endpoint above":e.endpointModelsStatus==="error"?"No models — check the endpoint":e.endpointModels.length===0?"No models served":"Select a model"})}),i.jsx(Tn,{children:e.endpointModels.map(v=>i.jsx(jn,{value:v,children:v},v))})]}),i.jsx(Z,{size:"sm",variant:"secondary",onClick:()=>void e.listEndpointModels(),disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||e.endpointUrl.trim()===""||r!==null,children:e.endpointModelsStatus==="loading"?"Refreshing…":"Refresh"})]}),i.jsxs("p",{className:"field-hint",children:["Fetched from the endpoint's ",i.jsx("code",{children:"/models"}),". Tiny models (e.g. SmolLM2) usually can't follow the tool-calling format — prefer ",i.jsx("code",{children:"llama3.2:3b"}),", ",i.jsx("code",{children:"qwen2.5"})," or larger."]}),e.endpointModelsStatus==="error"&&!r&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"Couldn't list models"}),i.jsx(ce,{children:e.endpointModelsError})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(Ye,{htmlFor:"endpoint-key",children:s==="ollama"?"API key (optional)":"API key"}),i.jsx(Zn,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:v=>e.setApiKey(v.target.value),disabled:e.status==="connecting"}),i.jsx("p",{className:"field-hint",children:s==="ollama"?"A local Ollama ignores this — leave it blank.":"Sent as a bearer token to the endpoint above, from this browser only. It's held in memory for this tab, never stored or logged, and cleared if you switch endpoint mode."})]})]}),e.kind!=="scripted"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(Z,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting"||e.kind==="chrome"&&e.chromeAiReason!==null||e.kind==="endpoint"&&(e.endpointUrl.trim()===""||e.endpointModel===""||e.endpointModelsStatus==="loading"||r!==null),children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&(e.kind==="browser"||e.kind==="chrome")&&i.jsx(Z,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.progress&&i.jsx("div",{className:"brain-progress",role:"progressbar","aria-valuenow":Math.round(e.progress.progress*100),"aria-valuemin":0,"aria-valuemax":100,children:i.jsx("div",{className:"brain-progress-bar",style:{width:`${Math.round(e.progress.progress*100)}%`}})}),e.error&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"Couldn't connect"}),i.jsx(ce,{children:e.error})]})]})}function ro({brain:e}){const n=gt.find(t=>t.kind===e.visionKind);return i.jsxs("div",{className:"brain-section brain-vision",children:[i.jsx(Ye,{children:"Vision (reads the image)"}),i.jsxs("div",{className:"brain-modes",children:[i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Vision brain",children:gt.map(t=>i.jsx(Z,{size:"sm",variant:e.visionKind===t.kind?"default":"secondary","aria-pressed":e.visionKind===t.kind,onClick:()=>e.setVisionKind(t.kind),children:t.label},t.kind))}),i.jsxs("div",{className:"brain-status",children:[e.visionStatus==="ready"&&e.visionKind==="browser-vision"&&i.jsx(ie,{variant:"success",className:"brain-status-badge",children:e.visionModelInUse??"connected"}),e.visionStatus==="connecting"&&i.jsx(ie,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.visionStatus==="error"&&i.jsx(ie,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.visionKind==="scripted-vision"&&e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"No WebGPU in this browser"}),i.jsx(ce,{children:e.visionWebgpuReason})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Ye,{htmlFor:"vision-model",children:"Model"}),i.jsxs(En,{value:e.visionModel,onValueChange:e.setVisionModel,disabled:e.visionStatus==="connecting",children:[i.jsx(kn,{id:"vision-model",children:i.jsx(In,{})}),i.jsx(Tn,{children:Vt.map(t=>i.jsx(jn,{value:t.id,children:t.label},t.id))})]}),i.jsx("p",{className:"field-hint",children:"Connecting downloads the weights once (size shown above), then caches them — every token is read on your GPU, no server."})]}),e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"No WebGPU in this browser"}),i.jsx(ce,{children:e.visionWebgpuReason})]})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(Z,{size:"sm",onClick:()=>void e.connectVision(),disabled:e.visionStatus==="connecting",children:e.visionStatus==="ready"?"Reconnect":"Connect"}),e.visionStatus==="connecting"&&i.jsx(Z,{size:"sm",variant:"secondary",onClick:e.cancelVisionConnect,children:"Cancel"}),e.visionProgress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.visionProgress.progress*100),"% —"," ",e.visionProgress.text]})]}),e.visionError&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"Couldn't connect the vision brain"}),i.jsx(ce,{children:e.visionError})]})]})}function io({imageInput:e,value:n,onSelect:t,disabled:r=!1}){const[o,s]=g.useState(null),[d,l]=g.useState(!1),p=g.useRef(null),a=g.useId(),u=g.useId(),h=g.useCallback(_=>{s(URL.createObjectURL(_)),t({imageName:_.name,pixels:_})},[t]);g.useEffect(()=>{if(o)return()=>URL.revokeObjectURL(o)},[o]);const m=g.useCallback(_=>{const v=_==null?void 0:_[0];v&&v.type.startsWith("image/")&&h(v)},[h]),b=(n==null?void 0:n.imageId)!=null?e.seedImages.find(_=>_.id===n.imageId):void 0;return i.jsxs("div",{className:"image-input",children:[e.label&&i.jsx("p",{className:"field-hint",children:e.label}),i.jsx("p",{className:"image-input-label",id:a,children:"Seed photos"}),i.jsx("div",{className:"image-gallery",role:"group","aria-labelledby":a,children:e.seedImages.map(_=>{const v=(n==null?void 0:n.imageId)===_.id;return i.jsxs("button",{type:"button","aria-pressed":v,className:`image-thumb${v?" image-thumb--selected":""}`,disabled:r,title:_.label??_.id,onClick:()=>{s(null),p.current&&(p.current.value=""),t({imageId:_.id,pixels:_.file})},children:[i.jsx("img",{src:_.thumb??_.file,alt:_.label??_.id}),_.label&&i.jsx("span",{children:_.label})]},_.id)})}),i.jsx("label",{className:"image-input-label",htmlFor:u,children:"Or upload your own photo"}),i.jsxs("div",{className:`image-drop${d?" image-drop--over":""}`,onDragOver:_=>{_.preventDefault(),r||l(!0)},onDragLeave:()=>l(!1),onDrop:_=>{_.preventDefault(),l(!1),r||m(_.dataTransfer.files)},children:[i.jsx("input",{ref:p,id:u,type:"file",accept:"image/*",disabled:r,onChange:_=>m(_.target.files)}),i.jsx("p",{className:"field-hint",children:"Drag a photo here, or pick one. Uploading a photo the model has never seen is the proof this runs for real — nothing leaves your browser."})]}),(o||b)&&i.jsxs("div",{className:"image-preview",children:[i.jsx("img",{src:o??(b==null?void 0:b.file),alt:o?(n==null?void 0:n.imageName)??"uploaded photo":(b==null?void 0:b.label)??(b==null?void 0:b.id)??"selected photo"}),i.jsx("span",{className:"field-hint",children:o?`Uploaded: ${(n==null?void 0:n.imageName)??"your photo"}`:`Selected: ${(b==null?void 0:b.label)??(b==null?void 0:b.id)}`}),i.jsx("button",{type:"button",className:"image-clear-btn",disabled:r,onClick:()=>{s(null),p.current&&(p.current.value=""),t(null)},children:"Clear"})]})]})}function qt(e){return typeof e=="object"&&e!==null}function Ud(e){const n=new Set,t=r=>{qt(r)&&(typeof r.key=="string"&&n.add(r.key),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function oo(e){const n={},t=r=>{qt(r)&&(typeof r.key=="string"&&"defaultValue"in r&&(n[r.key]=r.defaultValue??""),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}const ao="wdf:section:v2:";function Jt(e){return ao+e}function bt(e){try{const n=window.localStorage.getItem(Jt(e));return n==="1"?!0:n==="0"?!1:void 0}catch{return}}function so(e,n){try{window.localStorage.setItem(Jt(e),n?"1":"0")}catch{}}function Fn(e,n=!0){const[t,r]=g.useState(()=>bt(e)??n);g.useEffect(()=>{r(bt(e)??n)},[e,n]);const o=g.useCallback(s=>{r(s),so(e,s)},[e]);return[t,o]}function Oe({sectionId:e,title:n,description:t,defaultOpen:r=!0,className:o,children:s,...d}){const[l,p]=Fn(e,r);return i.jsx(or,{className:["panel",o].filter(Boolean).join(" "),"data-tour":d["data-tour"],children:i.jsxs(ar,{open:l,onOpenChange:p,children:[i.jsxs(sr,{className:"panel-trigger",children:[i.jsxs("span",{className:"panel-trigger-text",children:[i.jsx("span",{className:"panel-title",children:n}),t!=null&&i.jsx("span",{className:"panel-desc",children:t})]}),i.jsx(dr,{className:"panel-chevron","aria-hidden":!0})]}),i.jsx(lr,{children:i.jsx(cr,{children:s})})]})})}function lo(e){return e.entries!==void 0}function co(e){const n=[];let t=null;for(const r of e)r.turn!==void 0?t&&t.turn===r.turn?t.entries.push(r):(t={turn:r.turn,entries:[r]},n.push(t)):(t=null,n.push(r));return n}function ft(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function mo({activation:e,result:n,labelFor:t}){const r=e.elementId??"";return i.jsxs("div",{className:"timeline-tool",children:[i.jsxs("div",{className:"timeline-tool-head",children:[i.jsx(ie,{variant:"info",children:"tool"}),i.jsx("strong",{children:t(r)||r}),i.jsx("code",{children:r})]}),e.args!==void 0&&Object.keys(e.args).length>0&&i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"arguments"}),i.jsx("code",{children:ft(e.args)})]}),i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"returned"}),i.jsx("code",{children:n?ft(n.result):"— waiting for the job to complete —"})]})]})}function po({group:e,labelFor:n}){const t=e.entries.find(a=>a.kind==="llm"),r=e.entries.filter(a=>a.kind==="agent"&&a.elementId),o=e.entries.filter(a=>a.kind==="vars"&&a.elementId),s=e.entries.filter(a=>a.kind==="agent"&&!a.elementId),d=e.entries.filter(a=>a.kind==="error"),l=new Set(r.map(a=>a.elementId)),p=e.entries.filter(a=>a.kind==="tool"||a.kind==="vars"&&a.elementId&&!l.has(a.elementId)).sort((a,u)=>a.id-u.id);return i.jsxs("div",{className:"timeline-turn",children:[i.jsxs("div",{className:"timeline-turn-head",children:[i.jsxs(ie,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&i.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&i.jsx("blockquote",{className:"timeline-reply",children:t.text}),s.map(a=>i.jsx("div",{className:"timeline-note",children:a.text},a.id)),r.map(a=>i.jsx(mo,{activation:a,result:o.find(u=>u.elementId===a.elementId),labelFor:n},a.id)),p.map(a=>i.jsxs("div",{className:`log-line log-${a.kind}`,children:[a.pending?"⏳ ":"",a.text]},a.id)),d.map(a=>i.jsxs("div",{className:"timeline-error",children:["⚠ ",a.text]},a.id))]})}function uo({log:e,elementStats:n=[],incidents:t=[],labelFor:r=s=>s,variables:o}){const s=g.useMemo(()=>co(e),[e]),[d,l]=g.useState(!1),[p,a]=Fn("engine-view",!1),u=g.useRef(null);g.useEffect(()=>{const m=u.current;m&&(m.scrollTop=m.scrollHeight)},[s]);const h=()=>{var _;const m={log:e.map(({id:v,...k})=>k),elementStats:n,incidents:t},b=JSON.stringify(m,null,2);(_=navigator.clipboard)!=null&&_.writeText&&navigator.clipboard.writeText(b).then(()=>{l(!0),setTimeout(()=>l(!1),1500)}).catch(()=>{})};return i.jsxs(Oe,{sectionId:"activity",className:"grow activity-card",title:"Agent activity",description:"Agent turns, model replies, and tool calls — read top to bottom as a story.",children:[i.jsx("div",{className:"timeline-toolbar",children:i.jsx(Z,{variant:"secondary",size:"sm",onClick:h,children:d?"Copied!":"Copy run as JSON"})}),i.jsx("div",{className:"timeline",ref:u,children:s.length===0?i.jsx("div",{className:"log-empty",children:"Press Run or Step to start."}):s.map(m=>lo(m)?i.jsx(po,{group:m,labelFor:r},`turn-${m.turn}-${m.entries[0].id}`):i.jsxs("div",{className:`log-line log-${m.kind}`,children:[m.pending?"⏳ ":"",m.text]},m.id))}),o,(n.length>0||t.length>0)&&i.jsxs("details",{className:"engine-view",open:p,onToggle:m=>a(m.currentTarget.open),children:[i.jsxs("summary",{children:["Element completion",t.length>0&&` · ${t.length} incident${t.length===1?"":"s"}`]}),i.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&i.jsxs("div",{className:"timeline-stats",children:[i.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),i.jsx("ul",{children:n.filter(m=>m.completed>0||(m.active??0)>0).map(m=>i.jsxs("li",{children:[i.jsx("code",{children:r(m.elementId)||m.elementId})," ","completed ",m.completed,m.active?`, ${m.active} active`:""]},m.elementId))})]}),t.length>0&&i.jsxs("div",{className:"timeline-incidents",children:[i.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),i.jsx("ul",{children:t.map((m,b)=>i.jsxs("li",{children:[i.jsx("code",{children:r(m.elementId)||m.elementId})," —"," ",m.reason]},`${m.elementId}-${b}`))})]})]})]})]})}const Ne={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function _t(e){return`[data-tour="${e}"]`}function ho(e=location.search){return new URLSearchParams(e).get("tour")}function go(e){return"anchor"in e?_t(e.anchor):`${_t(Ne.diagram)} [data-element-id="${bo(e.elementId)}"]`}function bo(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function fo(e){return e.map(n=>({element:go(n.target),popover:{title:n.title,description:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}))}async function _o(e){const[{driver:n}]=await Promise.all([ue(()=>import("./driver.js-bj_ppY-Q.js"),[]),ue(()=>Promise.resolve({}),__vite__mapDeps([0]))]),t=n({steps:fo(e),showProgress:!0,allowClose:!0,skipMissingElement:!0});return t.drive(),{isActive:()=>t.isActive(),destroy:()=>t.destroy()}}const wo=300;function yo(e){const[n,t]=g.useState(!1),r=g.useRef(null),o=g.useRef(null),s=g.useRef(0),d=g.useCallback(()=>{o.current!==null&&(clearInterval(o.current),o.current=null)},[]),l=g.useCallback(()=>{var a;s.current+=1,d(),(a=r.current)==null||a.destroy(),r.current=null,t(!1)},[d]),p=g.useCallback(()=>{if(!e||e.steps.length===0||r.current)return;const a=s.current+=1;_o(e.steps).then(u=>{if(a!==s.current||!u.isActive()){u.destroy();return}r.current=u,t(!0);const h=setInterval(()=>{if(r.current!==u){clearInterval(h);return}u.isActive()||(clearInterval(h),o.current===h&&(o.current=null),r.current=null,t(!1))},wo);o.current=h})},[e,d]);return g.useEffect(()=>l,[l]),{active:n,start:p,stop:l}}function vo(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Mo({enabled:e,ready:n,targetRef:t,start:r}){const o=g.useRef(!1),[s,d]=g.useState(!1),l=g.useRef(r);g.useEffect(()=>{l.current=r},[r]),g.useEffect(()=>{if(!e||o.current)return;const p=t.current;if(!p||typeof IntersectionObserver>"u"){d(!0);return}const a=new IntersectionObserver(u=>{u.some(h=>h.isIntersecting)&&(d(!0),a.disconnect())},{threshold:.01});return a.observe(p),()=>a.disconnect()},[e,t]),g.useEffect(()=>{!e||o.current||!n||!s||vo()||(o.current=!0,l.current())},[e,n,s])}const Te=650,Mn="__agent__",wt="__model__",yt="__template__:",xo=g.lazy(async()=>{await Promise.all([ue(()=>Promise.resolve({}),__vite__mapDeps([1])),ue(()=>Promise.resolve({}),__vite__mapDeps([2])),ue(()=>Promise.resolve({}),__vite__mapDeps([3]))]);const{RuntimeDiagram:e}=await ue(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-DTnJz5cT.js");return{RuntimeDiagram:n}},__vite__mapDeps([4,5,6]));return{default:e}}),xn=g.lazy(()=>ue(()=>import("./MonacoEditor-0TF84YNZ.js").then(e=>e.M),__vite__mapDeps([7,5,8]))),No=g.lazy(()=>ue(()=>import("./vendor-modeler-DltGg96T.js"),__vite__mapDeps([9,5,6,10,11,12,13,1,2,3]))),vt=g.lazy(async()=>{const{FormRenderer:e}=await ue(async()=>{const{FormRenderer:n}=await import("./FormRenderer-GDvZgftJ.js");return{FormRenderer:n}},__vite__mapDeps([14,5,12,10,11,15]));return{default:e}});function cn(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function Eo(e){const n=cn(e).replace(/\s+/g," ");return n.length>78?`${n.slice(0,78)}…`:n}function ko({example:e,compact:n=!1,autostart:t=!1,initialBrainKind:r,initialTourId:o}){var Gn,Vn,Yn,Qn,qn,Jn,Hn,Wn;const[s,d]=g.useState(e.bpmn),l=g.useRef(null),p=Ji(),[a,u]=g.useState(null);g.useEffect(()=>{r&&r!==p.kind&&p.setKind(r)},[]),g.useEffect(()=>{Xi({brain:p.kind})},[p.kind]);const[h,m]=g.useState(()=>Object.fromEntries(e.handlers.map(w=>[w.elementId,w.source]))),[b,_]=g.useState(e.scriptedAgent??""),[v,k]=g.useState(()=>en(e.templates)),f=g.useMemo(()=>Hr(e,h,s,v),[e,h,s,v]),M=f.model,x=xi({bpmn:f.resolvedBpmn});Pi(x.phase==="ready");const V=yo(e.tour);g.useEffect(()=>{var w;o&&((w=e.tour)==null?void 0:w.id)===o&&V.start()},[]);const H=M.startFormId?((Gn=e.forms)==null?void 0:Gn[M.startFormId])??null:null,[Y,he]=g.useState(()=>({...e.seed,...H?oo(H):{}})),[Pe,ge]=g.useState(M.agent?Mn:((Vn=e.handlers[0])==null?void 0:Vn.elementId)??""),Ee=g.useMemo(()=>{const w=(e.scenarios??[]).findIndex(N=>Object.entries(N.variables).every(([T,B])=>JSON.stringify(Y[T])===JSON.stringify(B)));return w===-1?null:w},[e.scenarios,Y]),[K,be]=Fn(n?"start-compact":"start",n?!1:!!H),[se,S]=g.useState(!1),[I,E]=g.useState(!1),[L,$]=g.useState(!1),[ye,ze]=g.useState(null),[fn,ve]=g.useState([]),[Qe,oe]=g.useState({}),Ce=g.useMemo(()=>({...e.seed,...Y,...Sr(e.imageInput?a:null)}),[e.seed,e.imageInput,Y,a]),[nn,_n]=g.useState(null),Me=g.useRef(null),[Be,Ae]=g.useState({}),[wn,yn]=g.useState(!1),qe=g.useRef(null),X=g.useRef(!1),U=g.useRef(0),Je=g.useRef(0),Ue=g.useRef({current:void 0}),ke=g.useRef({}),Le=g.useRef({}),He=g.useMemo(()=>{const w=new Map;for(const N of M.processes){for(const T of N.tasks)w.set(T.elementId,T.label);for(const T of N.agents){w.set(T.elementId,T.label);for(const B of T.tools)w.set(B.elementId,B.label)}for(const T of N.userTasks)w.set(T.elementId,T.label)}return N=>w.get(N)??N},[M]),O=g.useCallback(w=>{ve(N=>{if(w.key){const T=N.findIndex(B=>B.key===w.key);if(T>=0){const B=[...N];return B[T]={...B[T],...w},B}}return[...N,{...w,id:Je.current++}].slice(-80)})},[]),me=g.useMemo(()=>{var w;return((w=x.snapshot)==null?void 0:w.userTasks.find(N=>N.state==="Created"))??null},[x.snapshot]),De=g.useMemo(()=>{const w=M.processes.flatMap(T=>T.tasks),N=new Map;for(const T of e.handlers){if(!T.manualControl)continue;const B=w.find(A=>A.elementId===T.elementId);B&&N.set(B.jobType,{...T.manualControl,elementId:T.elementId})}return N},[e.handlers,M]),Ie=g.useMemo(()=>{if(!x.snapshot)return null;for(const w of x.snapshot.jobs){const N=De.get(w.jobType);if(N&&w.state==="Created")return{job:w,control:N}}return null},[x.snapshot,De]),tn=g.useMemo(()=>{if(!M.agent||!x.snapshot)return[];const w=new Map(x.snapshot.elementStats.map(N=>[N.elementId,N.completed]));return M.agent.tools.filter(N=>(w.get(N.elementId)??0)===0)},[M.agent,x.snapshot]),ae=me?M.userTasks.find(w=>w.elementId===me.elementId):void 0,$e=ae!=null&&ae.formId?((Yn=e.forms)==null?void 0:Yn[ae.formId])??null:null,Ge=g.useCallback(async(w,N,T,B)=>{var pe,te,_e;let A=T,fe=0;for(;U.current===B&&A&&A.completedInstances<1&&fe++<80;){const q=await x.stepWorkers(w,{agents:N});if(U.current!==B)return A;A=(q==null?void 0:q.snapshot)??A;const re=(pe=A.instances[0])==null?void 0:pe.variables;if(re&&oe({...re}),A.userTasks.some(J=>J.state==="Created")){O({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!q){O({kind:"error",text:"▶ run stopped — no dispatch round was returned"});break}if(q.handled===0){const J=A.messageSubscriptions[0];if(q.reason==="messages"&&J){if(O({kind:"step",text:`⏳ parked on a message catch event — waiting for "${J.messageName}"`,elementId:J.elementId}),await new Promise(ee=>setTimeout(ee,Te)),U.current!==B)return A;O({kind:"vars",text:`📨 correlating message "${J.messageName}" (key: ${J.correlationKey})`,elementId:J.elementId});const G=x.correlateMessage(J.messageName,J.correlationKey,"{}");if(G){A=G;const ee=(te=A.instances[0])==null?void 0:te.variables;ee&&oe({...ee}),await new Promise(we=>setTimeout(we,Te));continue}O({kind:"error",text:`▶ run stopped — correlating "${J.messageName}" (key: ${J.correlationKey}) failed`,elementId:J.elementId})}if(q.reason==="signals"&&A.signalSubscriptions.length>0){const G=A.signalSubscriptions[0],ee=A.signalSubscriptions.length;if(O({kind:"step",text:`⏳ parked on ${ee} open signal subscription${ee===1?"":"s"} — waiting for "${G.signalName}"`,elementId:G.elementId}),await new Promise(Ve=>setTimeout(Ve,Te)),U.current!==B)return A;const we=x.broadcastSignal(G.signalName,"{}");if(we){A=we,O({kind:"vars",text:`📡 broadcasting signal "${G.signalName}" — every waiting subscription unblocks`,elementId:G.elementId});const Ve=(_e=A.instances[0])==null?void 0:_e.variables;Ve&&oe({...Ve}),await new Promise(nr=>setTimeout(nr,Te));continue}O({kind:"error",text:`▶ run stopped — broadcasting signal "${G.signalName}" failed`,elementId:G.elementId})}if(q.reason==="timers"){const G=A.timers.reduce((ee,we)=>Math.min(ee,we.dueInMs),1/0);if(Number.isFinite(G)){if(O({kind:"step",text:`⏳ parked on a timer — ${(Math.max(G,0)/1e3).toFixed(1)}s left on the clock`}),await new Promise(we=>setTimeout(we,Te)),U.current!==B)return A;const ee=x.advanceTime(Math.max(G,0)+1);if(ee){A=ee,O({kind:"step",text:"🕐 the clock advanced — timer fired"}),await new Promise(we=>setTimeout(we,Te));continue}}}break}await new Promise(J=>setTimeout(J,Te))}return U.current!==B||(A&&A.completedInstances>=1?O({kind:"done",text:"✅ process instance completed"}):A&&A.incidentElementIds.length>0&&O({kind:"error",text:"A job failed — incident on the diagram"})),A},[x,O]),j=g.useCallback(async w=>{var A,fe,pe;if(!Ie||X.current)return;const{job:N,control:T}=Ie,B=++U.current;X.current=!0,E(!0);try{let te,_e;if(w==="complete")te=x.completeJobManually(N.jobType,"{}"),_e="  ↳ completed normally";else if(T.action.kind==="timer"){const q=((fe=(A=x.snapshot)==null?void 0:A.timers[0])==null?void 0:fe.dueInMs)??0;te=x.advanceTime(Math.max(q,0)+1),_e="  ↳ advanced the clock — timer fired"}else{const{errorCode:q,message:re}=T.action;te=x.throwJobError(N.jobType,q,re),_e=`  ↳ threw BPMN error ${q}: ${re}`}if(te){O({kind:"vars",text:_e,elementId:N.elementId});const q=(pe=te.instances[0])==null?void 0:pe.variables;q&&oe({...q}),await new Promise(re=>setTimeout(re,Te)),await Ge(ke.current,Le.current,te,B)}else O({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:N.elementId})}finally{U.current===B&&(X.current=!1,E(!1))}},[Ie,x,O,Ge]),Q=g.useCallback(async()=>{var q;let w=null;try{M.agent&&b.trim()&&(w=Fr(b))}catch(re){return ze(re instanceof Error?re.message:String(re)),null}Ue.current={current:void 0};let N;if(e.imageInput){const re=p.vision;N={read:re??Qi(e.scriptedVision).read,live:!!re,resolve:G=>x.getRunImage(G)}}const T=Ur(M,f.handlers,O,Ue.current,N);for(const re of De.keys())delete T[re];const B={};if(M.agents.length>0){if(p.kind!=="scripted"&&p.chat){const J=new Map;for(const G of M.agents)J.set(G.jobType,[...J.get(G.jobType)??[],G]);for(const[G,ee]of J)B[G]=ii(ee,p.chat,O,{turnRef:Ue.current,requiredTools:e.requiredTools})}else if(w&&M.agent){const J=M.agent.elementId;B[M.agent.jobType]=async G=>{if(G.elementId!==J)throw new Error(`No scripted agent handler for "${G.elementId}" — only "${J}" (the primary process's first agent host) is driven by the scripted brain. Use a live brain to exercise more than one host.`);const ee=await w(G),we=(ee.activateElements??[]).map(Ve=>Ve.elementId).join(", ");return O({kind:"agent",text:ee.completionConditionFulfilled?"🤖 scripted agent: done":`🤖 scripted agent: calling ${we||"(nothing)"}`}),ee}}}ve([]),Ae({});const A=Ce;oe(A),ke.current=T,Le.current=B;const fe=await x.redeploy(s),pe=(fe==null?void 0:fe[0])??M.processId;O({kind:"start",text:`Starting "${pe}" — ${M.agent?p.kind==="scripted"||!p.chat?"scripted brain":`live brain (${p.modelInUse??p.kind})`:"no agent in this model"}`});const te=x.createInstance(pe,JSON.stringify(A)),_e=(q=te==null?void 0:te.instances[0])==null?void 0:q.key;return e.imageInput&&a&&_e&&x.setRunImage(_e,a),{workers:T,agents:B,snap:te}},[x,e,f,s,b,Y,a,Ce,M,p,O,De]),C=!!x.snapshot&&x.snapshot.completedInstances<1,W=!C&&!!H&&nn!==!0,xe=!C&&!!H&&nn===!1,Re=K||se;g.useEffect(()=>{n&&xe&&S(!0)},[n,xe]);const zn=w=>{be(w),w||S(!1)},Un=g.useCallback(async()=>{if(x.phase!=="ready"||X.current||L||f.hasErrors)return;X.current=!0,E(!0);const w=++U.current;try{let N=ke.current,T=Le.current,B=x.snapshot;if(!C){if(Me.current&&!Me.current.validate())return;ze(null);const A=await Q();if(!A)return;N=A.workers,T=A.agents,B=A.snap,await new Promise(fe=>setTimeout(fe,Te))}await Ge(N,T,B,w)}finally{U.current===w&&(X.current=!1,E(!1))}},[x,L,f.hasErrors,C,Q,Ge]),$n=x.phase==="ready"&&!I&&!L&&!f.hasErrors&&!W;Mo({enabled:t,ready:$n,targetRef:l,start:()=>void Un()});const Wt=g.useCallback(async()=>{var N;if(x.phase!=="ready"||X.current||L||f.hasErrors)return;X.current=!0,$(!0);const w=++U.current;try{let T=ke.current,B=Le.current,A=x.snapshot;if(!C){if(Me.current&&!Me.current.validate())return;ze(null);const q=await Q();if(!q)return;T=q.workers,B=q.agents,A=q.snap}if(!A||A.completedInstances>=1)return;const fe=A.takenSequenceFlows.length,pe=await x.stepWorkers(T,{agents:B});if(!pe){O({kind:"error",text:"⏭ step failed — no dispatch round was returned"});return}const te=(N=pe.snapshot.instances[0])==null?void 0:N.variables;te&&oe({...te});const _e=Ai(pe.snapshot.takenSequenceFlows,fe);O(Di(pe,_e,He,De))}finally{U.current===w&&(X.current=!1,$(!1))}},[x,L,f.hasErrors,C,Q,O,He,De]),Zt=g.useCallback(async()=>{X.current=!1,U.current++,E(!1),$(!1),X.current=!0;try{await x.reset()}finally{X.current=!1}ve([]),oe({})},[x]),Kt=g.useCallback(()=>{var T;if(!me||qe.current&&!qe.current.validate())return;const w=x.completeUserTask(me.key,JSON.stringify(Be));O({kind:"human",text:`👤 ${cn(Be)}`});const N=(T=w==null?void 0:w.instances[0])==null?void 0:T.variables;oe(B=>({...B,...Be,...N??{}})),w&&w.completedInstances>=1&&O({kind:"done",text:"✅ process instance completed"})},[me,Be,x,O]),Xt=g.useMemo(()=>{var w,N;return x.phase==="loading"?i.jsx(ie,{variant:"neutral",children:"Booting engine…"}):x.phase==="error"?i.jsx(ie,{variant:"danger",children:"Engine error"}):I?i.jsx(ie,{variant:"info",children:"Running…"}):L?i.jsx(ie,{variant:"info",children:"Stepping…"}):(((w=x.snapshot)==null?void 0:w.incidentElementIds.length)??0)>0?i.jsx(ie,{variant:"danger",children:"Incident"}):me?i.jsx(ie,{variant:"warning",children:"Waiting for a human"}):(((N=x.snapshot)==null?void 0:N.completedInstances)??0)>=1?i.jsx(ie,{variant:"success",children:"Completed"}):x.snapshot?i.jsx(ie,{variant:"warning",children:"Paused"}):i.jsx(ie,{variant:"neutral",children:"Ready"})},[x.phase,x.snapshot,I,L,me]),er=g.useMemo(()=>e.blurb.split(/\n\s*\n/).map(w=>w.trim()).filter(Boolean),[e.blurb]);return i.jsxs("div",{className:"runner",ref:l,children:[n?i.jsx("h1",{className:"visually-hidden",children:e.title}):i.jsxs("section",{className:"intro",children:[i.jsx("h1",{children:e.title}),er.map(w=>i.jsx("p",{children:w},w))]}),e.imageInput&&i.jsx(io,{imageInput:e.imageInput,value:a,onSelect:u,disabled:I}),i.jsxs("div",{className:"scenario",children:[i.jsx("span",{className:"scenario-label",id:"scenario-label",children:e.scenariosLabel??"Example input"}),e.scenarios&&i.jsx("div",{className:"scenario-toggle",role:"group","aria-labelledby":"scenario-label",children:e.scenarios.map((w,N)=>i.jsx(Z,{size:"sm",variant:N===Ee?"default":"secondary","aria-pressed":N===Ee,disabled:I,onClick:()=>he(T=>({...T,...w.variables})),children:w.label},w.label))}),i.jsxs("button",{type:"button",className:"scenario-input-button",onClick:()=>zn(!Re),"aria-expanded":Re,"aria-controls":"start-input-editor",title:"Edit the starting payload",children:[i.jsx("span",{className:"scenario-edit-icon","aria-hidden":!0,children:"✎"})," ","input: ",i.jsx("code",{children:Eo(Y)})]}),W&&i.jsx("span",{className:"scenario-hint",children:"Fill in the input to enable Run"})]}),i.jsxs("div",{className:"inline-input-editor",id:"start-input-editor",hidden:!Re,children:[i.jsxs("div",{className:"inline-input-editor-head",children:[i.jsxs("div",{children:[i.jsx("div",{className:"inline-input-editor-title",children:M.startFormId?"Start form":"Start payload"}),i.jsx("div",{className:"inline-input-editor-copy",children:M.startFormId?`Rendered from the model's start form "${M.startFormId}".`:"The variables the instance starts with."})]}),i.jsx(Z,{size:"sm",variant:"secondary",onClick:()=>zn(!1),children:"Done"})]}),H?i.jsx(g.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(vt,{ref:Me,schema:H,values:Y,onChange:(w,N)=>he(T=>({...T,[w]:N})),disabled:I,onValidityChange:_n})}):i.jsx("pre",{className:"vars",children:cn(Y,2)})]}),!n&&(M.agent||e.imageInput)&&i.jsx(Oe,{sectionId:"brain",className:"brain-card","data-tour":Ne.brainPanel,title:"Agent brain",description:M.agent?`What drives “${M.agent.label}”. The model recommends; the process governs.`:"What reads the image. The model recommends; the process governs.",children:i.jsx(no,{brain:p,showText:!!M.agent,showVision:!!e.imageInput})}),i.jsxs("div",{className:"controls",children:[i.jsx(Z,{"data-tour":Ne.runButton,onClick:()=>void Un(),disabled:!$n,children:"▶ Run"}),i.jsx(Z,{variant:"secondary",onClick:()=>void Wt(),disabled:x.phase!=="ready"||I||L||f.hasErrors||W||(((Qn=x.snapshot)==null?void 0:Qn.completedInstances)??0)>=1,children:"⏭ Step"}),i.jsx(Z,{variant:"secondary",onClick:()=>void Zt(),disabled:x.phase!=="ready"||L,children:"↺ Reset"}),e.tour&&i.jsx(Z,{variant:"secondary",onClick:V.start,disabled:V.active,children:V.active?"Touring…":`🧭 ${e.tour.label}`}),Xt]}),x.phase==="error"&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"Engine error"}),i.jsx(ce,{children:x.error})]}),ye&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"Code didn't compile"}),i.jsx(ce,{children:ye})]}),f.hasErrors&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"Run is disabled — the diagram has unresolved references"}),i.jsx(ce,{children:i.jsx("ul",{className:"diagnostics",children:f.diagnostics.filter(w=>w.severity==="error").map((w,N)=>i.jsx("li",{children:w.message},N))})})]}),!f.hasErrors&&f.diagnostics.length>0&&i.jsxs(de,{children:[i.jsx(le,{children:"Heads up"}),i.jsx(ce,{children:i.jsx("ul",{className:"diagnostics",children:f.diagnostics.map((w,N)=>i.jsx("li",{children:w.message},N))})})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"col",children:[i.jsx(Oe,{sectionId:"process","data-tour":Ne.diagram,title:"Process",description:`${M.processName} — live token (green), incidents (red).`,children:i.jsx(g.Suspense,{fallback:i.jsx("div",{className:"diagram-fallback",children:x.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:i.jsx(xo,{xml:f.resolvedBpmn,activeIds:((qn=x.snapshot)==null?void 0:qn.activeElementIds)??[],incidentIds:((Jn=x.snapshot)==null?void 0:Jn.incidentElementIds)??[],className:"diagram"})})}),me&&i.jsxs(Oe,{sectionId:"human-task",title:(ae==null?void 0:ae.label)??"Human task",description:$e?`Rendered from the model's form "${ae==null?void 0:ae.formId}".`:"This task has no linked form — complete it with no variables.",children:[tn.length>0&&i.jsxs(de,{variant:"destructive",children:[i.jsx(le,{children:"The agent didn't finish its checks"}),i.jsxs(ce,{children:["It completed without running"," ",tn.map(w=>w.label||w.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),$e&&i.jsx(g.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(vt,{ref:qe,schema:$e,values:Be,onChange:(w,N)=>Ae(T=>({...T,[w]:N})),context:Qe,onValidityChange:yn})}),i.jsx(Z,{onClick:Kt,disabled:!!$e&&!wn,children:"Complete task"})]}),Ie&&i.jsx(Oe,{sectionId:"manual-job",title:Ie.control.label,description:"This job is held here on purpose — pick how it resolves.",children:i.jsxs("div",{className:"controls",children:[i.jsx(Z,{onClick:()=>void j("complete"),disabled:I||L,children:Ie.control.completeLabel??"✅ Complete normally"}),i.jsx(Z,{variant:"secondary",onClick:()=>void j("action"),disabled:I||L,children:Ie.control.action.label})]})})]}),i.jsx("div",{className:"col",children:i.jsx(uo,{log:fn,elementStats:(Hn=x.snapshot)==null?void 0:Hn.elementStats,incidents:(Wn=x.snapshot)==null?void 0:Wn.incidents,labelFor:He,variables:i.jsxs("div",{className:"vars-block","data-tour":Ne.variablesPanel,children:[i.jsx("div",{className:"vars-head",children:"Instance variables"}),i.jsx("pre",{className:"vars",children:cn(Object.keys(Qe).length>0?Qe:Ce,2)})]})})})]}),!n&&i.jsxs("div",{className:"runner-secondary",children:[i.jsx(Oe,{sectionId:"code",className:"editors","data-tour":Ne.codePanel,defaultOpen:!1,title:"Code",description:"One handler per BPMN element, plus a model tab holding the editable diagram — select an element there to edit its properties. Return variables to merge, or throw to fail the job.",children:i.jsx(g.Suspense,{fallback:i.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:i.jsxs(mr,{value:Pe,onValueChange:ge,children:[i.jsxs(pr,{children:[i.jsx(rn,{value:wt,children:"model"}),M.agent&&i.jsx(rn,{value:Mn,children:"agent (scripted)"}),e.handlers.map(w=>{var N;return i.jsx(rn,{value:w.elementId,children:((N=M.tasks.find(T=>T.elementId===w.elementId))==null?void 0:N.label)??w.elementId},w.elementId)}),Object.keys(v).map(w=>i.jsx(rn,{value:yt+w,children:w},w))]}),i.jsxs(on,{value:wt,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:"Model"}),i.jsx("code",{children:"click an element to edit its properties on the right — Run re-reads whatever you leave here"}),i.jsx(Z,{variant:"secondary",size:"sm",onClick:()=>d(e.bpmn),disabled:s===e.bpmn,children:"Revert to original"})]}),i.jsx(No,{value:s,onChange:d})]}),M.agent&&i.jsxs(on,{value:Mn,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:M.agent.label}),i.jsx("code",{children:p.kind==="scripted"||!p.chat?"in use":"unused — a live brain is connected"})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(xn,{height:"360px",defaultLanguage:"javascript",value:b,onChange:w=>_(w??""),options:Nn})})]}),e.handlers.map(w=>{var N;return i.jsxs(on,{value:w.elementId,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:((N=M.tasks.find(T=>T.elementId===w.elementId))==null?void 0:N.label)??w.elementId}),i.jsx("code",{children:w.standsInFor??w.elementId})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(xn,{height:"360px",defaultLanguage:"javascript",value:h[w.elementId],onChange:T=>m(B=>({...B,[w.elementId]:T??""})),options:Nn})})]},w.elementId)}),Object.keys(v).map(w=>i.jsxs(on,{value:yt+w,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:w}),i.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+w+"}}"]})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(xn,{height:"360px",defaultLanguage:"markdown",value:v[w],onChange:N=>k(T=>en(T,{[w]:N??""})),options:Nn})})]},w))]})})}),M.agent&&i.jsx(Oe,{sectionId:"tools",defaultOpen:!1,title:"Tools, as the model sees them",description:i.jsxs(i.Fragment,{children:["Read from the diagram — element name, documentation, and every",i.jsx("code",{children:" fromAi(…)"})," argument."]}),children:i.jsx("ul",{className:"tool-list",children:M.agent.tools.map(w=>i.jsxs("li",{children:[i.jsx("code",{children:w.elementId}),i.jsxs("span",{children:[" — ",w.documentation||w.label]}),w.args.length>0&&i.jsx("ul",{children:w.args.map(N=>i.jsxs("li",{children:[i.jsxs("code",{children:[N.name,": ",N.type]})," ","— ",N.description]},N.name))})]},w.elementId))})})]})]})}const Nn={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},Io=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,To=`async (job, { sleep }) => {
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
}`,jo=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above; this body
  // does not run either. Unlike Activity_guarded, this task has no boundary
  // event: firing its error action has nothing to catch it, so it becomes an
  // incident instead of a handled alternate path. Completing it normally
  // completes the job with {} — no trace line, no shipped/tracking variables
  // — and the token reaches "Order shipped".
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,So={id:"learn-error-boundary",title:"Error boundary event",group:"learn-bpmn",blurb:["A boundary event attached to a task catches something that happens while the task is running and reroutes the token — here, a thrown BPMN error.",'Hit Run and the process stops at "Charge payment (guarded)" with a card under the diagram offering two buttons: press "Simulate: card declined" and watch the attached boundary event catch the error, skipping straight to "Handled — order cancelled".','Then Reset, complete that first job normally, and decline the second one on "Ship items (unguarded)" — this time it becomes an incident, because that task has no boundary event and the engine has nothing to reroute the token with.',`That's exactly what breaks if you forget the boundary event (or give it the wrong errorRef): a failure that should be a modelled alternate path becomes a stuck instance a human has to resolve by hand. Complete both jobs normally instead to see the unattended happy path all the way to "Order shipped".`].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/boundary-events/",bpmn:Io,seed:{},handlers:[{elementId:"Activity_guarded",standsInFor:"job worker — charge-payment",source:To,manualControl:{label:"Charge payment (guarded)",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_unguarded",standsInFor:"job worker — ship-items",source:jo,manualControl:{label:"Ship items (unguarded)",completeLabel:"✅ Ship it",action:{kind:"error",errorCode:"CARRIER_REJECTED",message:"The carrier rejected the shipment — nothing catches this.",label:"❌ Simulate: carrier rejected (becomes an incident)"}}}]},Po=Object.freeze(Object.defineProperty({__proto__:null,default:So},Symbol.toStringTag,{value:"Module"})),Ao=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Do=`async (job, { num, trace, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const orderTotal = num("orderTotal", 40);

  await sleep(300);

  // This is the variable the gateway's conditional sequence flow reads —
  // whatever this handler decides is what actually steers the token.
  const route = orderTotal >= 100 ? "express" : "standard";
  trace(\`order total $\${orderTotal} -> route: \${route}\`);

  // Whatever you return is merged onto the process instance.
  return { route };
}`,Co=`async (job, { trace, sleep }) => {
  trace("expedited courier picks up the order");
  await sleep(400);

  return { shipped: true, method: "express" };
}`,Bo=`async (job, { trace, sleep }) => {
  trace("order queued for standard courier pickup");
  await sleep(400);

  return { shipped: true, method: "standard" };
}`,Lo={id:"learn-exclusive-gateway",title:"Exclusive gateway",group:"learn-bpmn",blurb:["An exclusive gateway is the fork in the road: exactly one of its outgoing sequence flows is taken, chosen by evaluating each flow's FEEL condition in declaration order, first match wins. A default flow (drawn with a slash through its start, not a diamond marker) has no condition and is the fallback taken when every conditional flow evaluates false — that's what makes an exclusive gateway safe to deploy without an explicit case for every value.",`Run this and watch 'Check order total' decide a route variable, then watch the gateway send the token down 'Express ship' when the order is large enough, or 'Standard ship' otherwise (the default flow). Try both from the Start panel on the right: it holds a "Small order" and a "Large order" button that swap the payload for you.`,"To see the conditions themselves, open the model tab in the Code panel and click either arrow leaving the gateway — the FEEL is under Condition. Get one wrong (or misspell the variable name) and the flow you meant to take is silently skipped in favour of whichever one does evaluate true, or the default if none do — no error, just the wrong branch."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/gateways/gateways/#exclusive-gateway",bpmn:Ao,seed:{orderTotal:40},scenarios:[{label:"Small order — standard ship (default flow)",variables:{orderTotal:40}},{label:"Large order — express ship (conditional flow)",variables:{orderTotal:150}}],handlers:[{elementId:"Activity_check_order",standsInFor:"job worker — check-order-total",source:Do},{elementId:"Activity_express_ship",standsInFor:"job worker — express-ship",source:Co},{elementId:"Activity_standard_ship",standsInFor:"job worker — standard-ship",source:Bo}]},Ro=Object.freeze(Object.defineProperty({__proto__:null,default:Lo},Symbol.toStringTag,{value:"Module"})),Fo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Oo=`async (job, { text, trace }) => {
  const orderId = text("orderId", "unknown-order");

  trace("shipment confirmed for " + orderId + " — recording it");

  return { shipmentRecorded: true };
}`,zo={id:"learn-message-correlation",title:"Message catch event + correlation key",group:"learn-bpmn",blurb:[`A message intermediate catch event pauses the token until a message with a matching name and correlation key is published — the BPMN analogue of "wait for this specific order's shipment to be confirmed", not just "wait for any shipment-confirmed message".`,"Run this and watch the token park on the catch event; there's no external broker in the browser, so the page correlates the message itself once the wait is reached, echoing back the exact correlationKey (`=orderId`) the subscription resolved to — the Activity panel logs the wait and the correlation as separate lines — then the token resumes into Record confirmation and on to the end event.",'To see where that key comes from: in the Code panel, open the model tab, click "Wait for shipment confirmed", and expand Message in the properties panel on the right. Subscription correlation key holds `orderId` (the `=` beside the box marks it as a FEEL expression), and Name holds `shipment-confirmed` — those two together are what a publisher has to match. Edit them freely; because this page publishes the key the subscription itself resolved, the run stays self-consistent either way.','In a real deployment, where a separate system does the publishing, pointing that expression at a variable the instance never sets leaves the catch event waiting forever, and omitting zeebe:subscription altogether is rejected at deploy time with "has no zeebe:subscription correlationKey" — docs/engine-coverage.md records both.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/message-events/",bpmn:Fo,seed:{orderId:"ORD-42"},handlers:[{elementId:"Activity_record",standsInFor:"job worker — record-confirmation",source:Oo}]},Uo=Object.freeze(Object.defineProperty({__proto__:null,default:zo},Symbol.toStringTag,{value:"Module"})),$o=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Go=`async (job, { text, sleep, trace }) => {
  // Each parallel instance gets its own 'item' from the input collection.
  const item = text("item", "widget");

  trace("processing " + item);
  await sleep(400);

  // Whatever you return is merged onto this instance's scope, then collected
  // into the process-level 'results' array via outputElement/outputCollection.
  return { result: item.toUpperCase() + "-DONE" };
}`,Vo={id:"learn-multi-instance-parallel",title:"Parallel multi-instance",group:"learn-bpmn",blurb:["A multi-instance activity runs its task once per element of a collection, spawning that many job instances of the same element in parallel, and only lets the token move on once every one of them completes.",`Run this and watch three 'Process item' jobs activate together for apple, banana, cherry, and complete (in any order) before the process reaches its end event. Nothing about the diagram says "three" — that comes from the collection, so use the buttons in the Start panel on the right to swap between one, three, and six items and hit Run again; the Activity panel logs one 'Process item' line per element, so the fan-out is right there to count.`,'The property tying the two together is in the Code panel: open the model tab, click "Process item", and expand Multi-instance in the properties panel on the right — Input collection holds `items`, the FEEL expression naming the variable to fan out over. Drop it entirely and the activity silently degenerates to a single ordinary instance, with no error to tell you it happened. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/multi-instance/",bpmn:$o,seed:{items:["apple","banana","cherry"]},scenarios:[{label:"One item — a single instance",variables:{items:["apple"]}},{label:"Three items — fans out to three",variables:{items:["apple","banana","cherry"]}},{label:"Six items — fans out to six",variables:{items:["apple","banana","cherry","damson","elderberry","fig"]}}],handlers:[{elementId:"Activity_process",standsInFor:"job worker — process-item",source:Go}]},Yo=Object.freeze(Object.defineProperty({__proto__:null,default:Vo},Symbol.toStringTag,{value:"Module"})),Qo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,qo=`async (job, { text, sleep, trace }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "widget");

  trace("packing " + item);
  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { packed: true };
}`,Jo=`async (job, { sleep, trace }) => {
  trace("handing over to the courier");
  await sleep(400);

  return { dispatched: true, tracking: "SVC" + Math.floor(Math.random() * 1e9) };
}`,Ho={id:"learn-service-task",title:"Service task + sequence flow",group:"learn-bpmn",blurb:["A service task is a unit of work a worker (not a human) performs; a sequence flow is the arrow that hands the token from one to the next once its task completes.","Run this and watch each task activate, run its handler, and complete in order — Prepare package, then Dispatch courier — before the process reaches its end event.",`The link between the two halves is the job type: in the Code panel, open the model tab, click "Prepare package", and expand Task definition in the properties panel on the right — Job type is the name a worker has to subscribe to in order to be handed this task's work.`,"(This page wires its own handlers up from whatever the model declares, so renaming it here keeps working; on a real cluster the worker is a separate process started with a job type of its own, and a mismatch means nobody ever activates the job, so the run stalls forever.)"].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/service-tasks/",bpmn:Qo,seed:{item:"camunda-t-shirt"},handlers:[{elementId:"Activity_prepare",standsInFor:"job worker — prepare-package",source:qo},{elementId:"Activity_dispatch",standsInFor:"job worker — dispatch-courier",source:Jo}]},Wo=Object.freeze(Object.defineProperty({__proto__:null,default:Ho},Symbol.toStringTag,{value:"Module"})),Zo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Ko=`async (job, { sleep, trace }) => {
  trace("all-clear received — resuming operations");
  await sleep(400);

  return { resumed: true };
}`,Xo=`async (job, { sleep, trace }) => {
  trace("same all-clear — reopening the floor");
  await sleep(400);

  return { floorReopened: true };
}`,ea={id:"learn-signal-broadcast",title:"Signal intermediate catch event + broadcast",group:"learn-bpmn",blurb:["A signal intermediate catch event parks the token until someone broadcasts a signal by name. Unlike a message, a signal isn't correlated to one waiting instance — broadcasting it unblocks every open subscription for that name at once.",`That's why this model forks: both "Ops waits for all-clear" and "Floor waits for all-clear" park on the same signal, and one broadcast releases the pair together, so 'Resume operations' and 'Reopen the floor' both run before the join lets the token reach the end event. Run it and watch both branches light up off a single broadcast — the Activity panel says "parked on 2 open signal subscriptions" before the one 📡 line that releases them both. A message could not do that, because a correlation key targets exactly one waiting subscription.`,"To see the name being matched: in the Code panel, open the model tab, click either catch event, and expand Signal in the properties panel on the right — Name holds `all-clear`. Each catch event owns its own signal definition, so editing the name there changes only that branch: do it on one of them and hit Run, and the panel now reports two broadcasts instead of one, because the branches no longer share a name and each needs its own. The count of broadcasts is exactly the count of distinct signal names being waited on."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/signal-events/signal-event/",bpmn:Zo,seed:{},handlers:[{elementId:"Activity_resume",standsInFor:"job worker — resume-operations",source:Ko},{elementId:"Activity_reopen",standsInFor:"job worker — reopen-floor",source:Xo}]},na=Object.freeze(Object.defineProperty({__proto__:null,default:ea},Symbol.toStringTag,{value:"Module"})),ta=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ra=`async (job, { sleep, trace }) => {
  trace("the timer fired — sending the reminder now");
  await sleep(400);

  return { reminderSent: true };
}`,ia={id:"learn-timer-catch-event",title:"Timer intermediate catch event",group:"learn-bpmn",blurb:["A timer catch event parks the token until a point in time — here, a fixed duration after the token arrives.","Run this and read the Activity panel: the token parks on the timer with nothing else happening ('parked on a timer — 3.0s left on the clock'), then the clock is fast-forwarded to the due time ('the clock advanced — timer fired') and the token resumes on its own: 'Send the reminder' activates, runs, and the process completes. Nothing needs to poll or push it forward; the engine itself wakes the instance when the timer's due time passes. (This page fast-forwards a virtual clock so the 3-second wait doesn't cost you 3 real seconds — a live deployment waits the actual PT3S.)",'To change the wait: in the Code panel, open the model tab, click "Wait 3 seconds", and expand Timer in the properties panel on the right — Type is Duration and Value holds the ISO-8601 duration, so PT30S or PT5M works the same way. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/timer-events/timer-event-type/",bpmn:ta,seed:{},handlers:[{elementId:"Activity_after_timer",standsInFor:"job worker — send-reminder",source:ra}]},oa=Object.freeze(Object.defineProperty({__proto__:null,default:ia},Symbol.toStringTag,{value:"Module"})),aa=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,sa="Camunda Cloud",da="8.10.0",la={name:"Camunda Web Modeler",version:"9b5d5ef"},ca=19,ma="learn-user-task-form-review",pa=[{text:`# Review request

A request is waiting for you. Decide whether to approve or reject it, then submit.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Requester:** {{requester}}

**Details:** {{details}}`,type:"text",layout:{row:"Row_details",columns:null},id:"Field_ReviewDetails"},{label:"Decision",values:[{label:"Approve",value:"approved"},{label:"Reject",value:"rejected"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_ReviewDecision",key:"decision",validate:{required:!0}},{label:"Comments",description:"Optional note recorded alongside your decision.",type:"textarea",layout:{row:"Row_comments",columns:null},id:"Field_ReviewComments",key:"comments"}],ua="default",ha={executionPlatform:sa,executionPlatformVersion:da,exporter:la,schemaVersion:ca,id:ma,components:pa,type:ua},ga={id:"learn-user-task-form",title:"User task + form",group:"learn-bpmn",blurb:["A user task is a step a human completes, not a worker — the token parks at the task until someone submits its form, then moves on.","Run this and watch the process reach 'Review request' and wait; fill in the decision form that appears in its own card under the diagram and press Complete task to see the token resume and the process reach its end event.",'What binds that form to the task is one property: in the Code panel, open the model tab, click "Review request", and expand Form in the properties panel on the right — Form ID names the form the runner looks up and renders. A user task with no form binding still deploys and still parks the token, but the runner has nothing to render for it, so it offers a bare Complete button that finishes the task with no variables. Revert to original puts the binding back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/user-tasks/",bpmn:aa,forms:{"learn-user-task-form-review":ha},seed:{requester:"Priya Shah",details:"Approve access to the shared design-review workspace."},handlers:[]},ba=Object.freeze(Object.defineProperty({__proto__:null,default:ga},Symbol.toStringTag,{value:"Module"})),fa=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,_a=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,wa={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:Ne.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:Ne.variablesPanel}}]},ya=`<?xml version="1.0" encoding="UTF-8"?>
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
`,va="Camunda Cloud",Ma="8.10.0",xa={name:"Camunda Web Modeler",version:"9b5d5ef"},Na=19,Ea="seed-export-shipment-ready",ka=[{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Choose a ready-made shipment to get started, or select Custom to write your own below.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Shipment notes",description:"Optional. When filled in, used instead of the scenario above. The agent reads these notes to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],Ia="default",Ta={executionPlatform:va,executionPlatformVersion:Ma,exporter:xa,schemaVersion:Na,id:Ea,components:ka,type:Ia},ja="Camunda Cloud",Sa="8.10.0",Pa={name:"Camunda Web Modeler",version:"9b5d5ef"},Aa=19,Da="seed-export-compliance-review",Ca=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],Ba="default",La={executionPlatform:ja,executionPlatformVersion:Sa,exporter:Pa,schemaVersion:Aa,id:Da,components:Ca,type:Ba},Ra=Object.assign({"./prompts/system-prompt.md":fa,"./prompts/user-prompt.md":_a}),Fa=en(Object.fromEntries(Object.entries(Ra).map(([e,n])=>[Lt(e),n.trimEnd()]))),Mt="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",Oa="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",za=`async (job) => {
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
}`,Ua=`async (job, { text, sleep, trace }) => {
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
}`,$a=`async (job, { text, sleep, trace }) => {
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
}`,Ga=`async (job, { num, sleep }) => {
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
}`,Va=`async (job, { text, trace }) => {
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
}`,Ya=`async (job, { sleep }) => {
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
}`,Qa={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",hero:{headline:"The LLM *recommends*. The process *governs*.",lede:"An agentic ad-hoc sub-process chooses its own compliance checks, but the gateway after it — not the model — decides whether a shipment ships or goes to a human.",tagline:"Anatomy of an enterprise agent"},docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:ya,forms:{"seed-export-shipment-ready":Ta,"seed-export-compliance-review":La},seed:{scenario:Mt,shipmentNotes:""},scenariosLabel:"Example shipment",scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:Mt,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:Oa,shipmentNotes:""}}],scriptedAgent:za,templates:Fa,tour:wa,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:Ua},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:$a},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:Ga},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:Va},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:Ya}]},qa=`You are a loan origination assistant at a retail bank. Your job is to gather everything a senior loan officer needs to decide an application — you do **not** decide it yourself.

Work through the case with the tools available to you:

- **Query customer** — find the applicant's existing relationship with the bank.
- **Credit bureau lookup** — pull their credit report.
- **Assess application** — run the bank's underwriting policy to get a debt-to-income ratio, a risk band, and a recommendation. Always run this; the officer's review depends on it.
- **Update application status** — mark the case as \`under-review\` once you have assessed it.

Call the tools in whatever order makes sense, but make sure the application has been assessed before you finish. When you have gathered the customer profile, the bureau report, and the policy assessment, and marked the status, you are done — a senior officer takes it from there.
`,Ja="Gather this loan case for the senior officer: look up the customer, pull their credit bureau report, run the underwriting assessment, and set the application status to `under-review`. Then stop — the officer makes the decision.\n",Ha={id:"loan-origination-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a loan application through the origination agent.",target:{anchor:Ne.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the application and decides, turn by turn, which tools to call — look up the customer, pull a credit bureau report, run the underwriting policy, update the status. Nothing here is a fixed sequence.",target:{elementId:"LoanOriginationAgent"}},{title:"Policy, not opinion",description:"The assessment computes the debt-to-income ratio, a risk band and a recommendation from the verified figures — the deterministic policy the senior officer's review leans on.",target:{elementId:"AssessApplication"}},{title:"Every application meets a human",description:"Whatever the agent recommended, the token now waits here: no offer and no decline is reachable without a senior officer first signing off. Open the task to record the decision — the gateway routes on it.",target:{elementId:"SeniorOfficerReview"}},{title:"Everything the run recorded",description:"The variables panel shows the customer profile, the bureau report, the debt-to-income and risk band, and the recommendation — exactly what each tool wrote for the officer to weigh.",target:{anchor:Ne.variablesPanel}}]},Wa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Za="Camunda Cloud",Ka="8.10.0",Xa={name:"Camunda Web Modeler",version:"9b5d5ef"},es=19,ns="loan-application",ts="default",rs=[{text:`# Loan application

Capture the applicant's details, then run the origination agent.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{label:"Applicant name",type:"textfield",layout:{row:"Row_applicant",columns:null},id:"Field_ApplicantName",key:"applicantName",defaultValue:"Ada Lovelace",validate:{required:!0}},{label:"Loan amount",description:"Amount requested.",type:"number",layout:{row:"Row_amount",columns:null},id:"Field_LoanAmount",key:"loanAmount",defaultValue:2e4},{label:"Loan purpose",type:"textfield",layout:{row:"Row_purpose",columns:null},id:"Field_LoanPurpose",key:"loanPurpose",defaultValue:"Home improvement"},{label:"Annual income",type:"number",layout:{row:"Row_income",columns:null},id:"Field_AnnualIncome",key:"annualIncome",defaultValue:96e3},{label:"Monthly debt payments",description:"Existing monthly repayments across all obligations.",type:"number",layout:{row:"Row_debt",columns:null},id:"Field_MonthlyDebt",key:"monthlyDebt",defaultValue:850},{label:"Stated credit score",description:"The applicant's self-reported score; the credit bureau tool confirms it.",type:"number",layout:{row:"Row_score",columns:null},id:"Field_CreditScore",key:"creditScore",defaultValue:782}],is={executionPlatform:Za,executionPlatformVersion:Ka,exporter:Xa,schemaVersion:es,id:ns,type:ts,components:rs},os="Camunda Cloud",as="8.10.0",ss={name:"Camunda Web Modeler",version:"9b5d5ef"},ds=19,ls="loan-senior-officer-review",cs="default",ms=[{text:`# Senior officer review

Every application reaches this desk before an offer or a decline can be sent. Review the agent's findings, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Applicant:** {{applicantName}} — {{loanPurpose}}, amount {{loanAmount}}

**Customer relationship:** {{if customerProfile = null then "unknown" else customerProfile.segment + " (" + string(customerProfile.relationshipYears) + "y)"}}

**Credit bureau:** {{if bureauReport = null then "n/a" else string(bureauReport.score) + " (" + bureauReport.band + "), " + string(bureauReport.derogatoryMarks) + " derogatory mark(s)"}}

**Debt-to-income:** {{debtToIncome}}%

**Assessed risk band:** {{riskBand}}

**Policy recommendation:** {{recommendation}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Decision",values:[{label:"Approve — issue loan offer",value:"approved"},{label:"Decline — send decline notice",value:"declined"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_Decision",key:"decision",validate:{required:!0}},{label:"Officer note",description:"Recorded against the application; the decline notice quotes it as the reason.",type:"textarea",layout:{row:"Row_note",columns:null},id:"Field_ReviewNote",key:"reviewNote"}],ps={executionPlatform:os,executionPlatformVersion:as,exporter:ss,schemaVersion:ds,id:ls,type:cs,components:ms},us=Object.assign({"./prompts/system-prompt.md":qa,"./prompts/user-prompt.md":Ja}),hs=en(Object.fromEntries(Object.entries(us).map(([e,n])=>[Lt(e),n.trimEnd()]))),xt={applicantName:"Ada Lovelace",annualIncome:96e3,monthlyDebt:850,creditScore:782,loanAmount:2e4,loanPurpose:"Home improvement"},gs={applicantName:"Cyrus Vale",annualIncome:38e3,monthlyDebt:1450,creditScore:566,loanAmount:42e3,loanPurpose:"Debt consolidation"},bs=`async (job) => {
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
}`,fs=`async (job, { text, sleep, trace }) => {
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
}`,_s=`async (job, { text, num, sleep, trace }) => {
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
}`,ws=`async (job, { num, trace }) => {
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
}`,ys=`async (job, { sleep, trace }) => {
  // Stands in for a write-back to the loan origination system. Marks the case
  // as awaiting the senior officer's decision.
  await sleep(200);
  trace("application status -> under-review");
  return { applicationStatus: "under-review", toolCallResult: "under-review" };
}`,vs=`async (job, { num, sleep, trace }) => {
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
}`,Ms=`async (job, { text, sleep, trace }) => {
  // Trunk service task on the declined path. Sends the applicant a decline
  // notice with the recorded reason, standing in for a notification channel.
  const note = text("reviewNote", "");
  const reason = note || "Application did not meet the lending policy.";
  await sleep(300);
  trace("decline notice sent");

  return { declineNotice: { reason: reason, sentTo: text("applicantName", "the applicant") } };
}`,xs={id:"loan-origination",title:"Loan origination agent",blurb:"An AI agent gathers a loan case with its own tools — customer lookup, credit bureau, an underwriting policy, a status update — then every application passes through a mandatory senior-officer review before a gateway routes it to an offer or a decline. The agent advises; the process governs.",docsUrl:"https://camunda.com/orchestrate/agents/",bpmn:Wa,forms:{"loan-application":is,"loan-senior-officer-review":ps},seed:xt,scenarios:[{label:"Strong applicant (policy recommends approve)",variables:xt},{label:"Marginal applicant (policy recommends decline)",variables:gs}],scriptedAgent:bs,templates:hs,tour:Ha,requiredTools:["AssessApplication","UpdateApplicationStatus"],handlers:[{elementId:"QueryCustomer",standsInFor:"CRM connector — customer lookup",source:fs},{elementId:"CreditBureauLookup",standsInFor:"REST connector — credit bureau",source:_s},{elementId:"AssessApplication",standsInFor:"Script task — underwriting policy (FEEL)",source:ws},{elementId:"UpdateApplicationStatus",standsInFor:"REST connector — origination system",source:ys},{elementId:"IssueLoanOffer",standsInFor:"REST connector — offer/booking system",source:vs},{elementId:"SendDeclineNotice",standsInFor:"REST connector — notifications",source:Ms}]},Ns=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Es=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,ks=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,Is=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Ts={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:Ns,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Es},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:ks},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Is}]},js=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Ss=`async (job, { text, num, sleep, trace }) => {
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
}`,Ps={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:js,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:Ss}]},As=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Ds=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Cs=`async (job, { num, sleep }) => {
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
}`,Bs=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Ls={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:As,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Ds},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Cs,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Bs,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},Rs="/web-demo-framework/pr-preview/pr-119/assets/de-bmw-mini-JBSk7QcF.jpg",Fs="/web-demo-framework/pr-preview/pr-119/assets/de-bmw-mini.thumb-CUUmJrRO.jpg",Os="/web-demo-framework/pr-preview/pr-119/assets/uk-d651-rnb-XGipy2QN.jpg",zs="/web-demo-framework/pr-preview/pr-119/assets/uk-d651-rnb.thumb-mjEcbhUf.jpg",Us="/web-demo-framework/pr-preview/pr-119/assets/uk-mk70-orj-Cn6O3Xfm.jpg",$s="/web-demo-framework/pr-preview/pr-119/assets/uk-mk70-orj.thumb-CaeZ2vqU.jpg",Gs="/web-demo-framework/pr-preview/pr-119/assets/uk-ni-ijz-8992-YXV44tgk.jpg",Vs="/web-demo-framework/pr-preview/pr-119/assets/uk-ni-ijz-8992.thumb-DYwok8jV.jpg",Ys="/web-demo-framework/pr-preview/pr-119/assets/us-hyundai-genesis-gGpAIEpi.jpg",Qs="/web-demo-framework/pr-preview/pr-119/assets/us-hyundai-genesis.thumb-DEEt19Mw.jpg",qs=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Js="Camunda Cloud",Hs="8.10.0",Ws={name:"Camunda Web Modeler",version:"9b5d5ef"},Zs=19,Ks="plate-recognition-confirm",Xs="default",ed=[{text:`# Confirm the number plate

The in-browser vision model read a plate from the photo. It **recommends**; you **govern** — accept its reading or correct it before it is recorded.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ConfirmHeading"},{text:'**Model reading:** {{if modelPlate = null or modelPlate = "" then "(nothing read)" else modelPlate}}',type:"text",layout:{row:"Row_modelReading",columns:null},id:"Field_ModelReading"},{label:"Number plate",description:"Edit this if the model misread the plate. What you submit is what gets recorded.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ConfirmPlate",key:"confirmedPlate",validate:{required:!0}}],nd={executionPlatform:Js,executionPlatformVersion:Hs,exporter:Ws,schemaVersion:Zs,id:Ks,type:Xs,components:ed},td="Camunda Cloud",rd="8.10.0",id={name:"Camunda Web Modeler",version:"9b5d5ef"},od=19,ad="plate-recognition-manual",sd="default",dd=[{text:`# Couldn't read the plate

The vision model didn't return a confident reading for this photo (an unrecognised image, or no in-browser model connected). Enter the plate by hand, or re-run with the in-browser vision brain connected.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ManualHeading"},{label:"Number plate",description:"Type the plate exactly as it appears in the photo.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ManualPlate",key:"confirmedPlate",validate:{required:!0}}],ld={executionPlatform:td,executionPlatformVersion:rd,exporter:id,schemaVersion:od,id:ad,type:sd,components:dd},cd="Camunda Cloud",md="8.10.0",pd={name:"Camunda Web Modeler",version:"9b5d5ef"},ud=19,hd="plate-recognition-country",gd="default",bd=[{text:`# Read a number plate

Pick the plate's **country** so the reader knows which format to extract, then start the run. Leave it on **Auto-detect** to let it guess from the shape.`,type:"text",layout:{row:"Row_countryHeading",columns:null},id:"Field_CountryHeading"},{label:"Plate country",description:"The vision model reads all text in the photo; this tells the process which country's plate format to pull out of that reading.",type:"select",layout:{row:"Row_country",columns:null},id:"Field_Country",key:"country",defaultValue:"auto",values:[{label:"Auto-detect (any format)",value:"auto"},{label:"United Kingdom",value:"uk"},{label:"India",value:"india"},{label:"Germany",value:"germany"},{label:"South Korea",value:"korea"}],validate:{required:!0}}],fd={executionPlatform:cd,executionPlatformVersion:md,exporter:pd,schemaVersion:ud,id:hd,type:gd,components:bd},_d=[{id:"uk-mk70-orj",file:"images/uk-mk70-orj.jpg",thumb:"images/uk-mk70-orj.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_MK70_ORJ_(MK_-_Manchester)_-_70_Plate_(1st_September_2020_-_28th_February_2021)_-_VW_Golf_(CarShop).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate MK70 ORJ" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"MK70 ORJ"},{id:"uk-ni-ijz-8992",file:"images/uk-ni-ijz-8992.jpg",thumb:"images/uk-ni-ijz-8992.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_(Northern_Ireland)_Number_Plate_IJZ_8992_(JZ_-_Down_(NI)_)_-_Dateless_Plate_-_Ford_Fiesta_(Woolston_Car_Centre).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK (Northern Ireland) Number Plate IJZ 8992" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"IJZ 8992"},{id:"uk-d651-rnb",file:"images/uk-d651-rnb.jpg",thumb:"images/uk-d651-rnb.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_D651_RNB_(NB_-_Manchester)_-_D_Reg_(1st_August_1986_-_31st_July_1987)_-_Ford_Capri_(The_Quick_Group).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate D651 RNB" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"D651 RNB"},{id:"de-bmw-mini",file:"images/de-bmw-mini.jpg",thumb:"images/de-bmw-mini.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_BMW_Mini_--_2018_--_1545-51.jpg",license:"CC-BY-SA-4.0",attribution:'Dietmar Rabich / Wikimedia Commons / "Dülmen, Dernekamp, BMW Mini -- 2018 -- 1545-51" / CC BY-SA 4.0',groundTruthPlate:"MS WL 545"},{id:"us-hyundai-genesis",file:"images/us-hyundai-genesis.jpg",thumb:"images/us-hyundai-genesis.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:Hyundai_Genesis_3.8_(US)_(9004912958).jpg",license:"CC-BY-SA-2.0",attribution:'Scarlet Sappho, "Hyundai Genesis 3.8 (US)" (Wikimedia Commons, CC BY-SA 2.0)',groundTruthPlate:"GWAN EUM"}],Ht=_d,wd=Object.assign({"./images/de-bmw-mini.jpg":Rs,"./images/de-bmw-mini.thumb.jpg":Fs,"./images/uk-d651-rnb.jpg":Os,"./images/uk-d651-rnb.thumb.jpg":zs,"./images/uk-mk70-orj.jpg":Us,"./images/uk-mk70-orj.thumb.jpg":$s,"./images/uk-ni-ijz-8992.jpg":Gs,"./images/uk-ni-ijz-8992.thumb.jpg":Vs,"./images/us-hyundai-genesis.jpg":Ys,"./images/us-hyundai-genesis.thumb.jpg":Qs});function Nt(e){const n=wd[`./${e}`];if(!n)throw new Error(`plate-recognition: image asset "${e}" is in images.json but missing on disk`);return n}const yd=Ht.map(e=>({id:e.id,file:Nt(e.file),thumb:Nt(e.thumb),label:e.groundTruthPlate})),vd=Object.fromEntries(Ht.map(e=>[e.id,e.groundTruthPlate])),Md=`async (job, { vision, trace, text }) => {
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
}`,xd=`async (job, { text, trace }) => {
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
}`,Nd={id:"plate-recognition",title:"Read a number plate from a photo",blurb:"Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",docsUrl:"https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",bpmn:qs,forms:{"plate-recognition-country":fd,"plate-recognition-confirm":nd,"plate-recognition-manual":ld},seed:{country:"auto"},imageInput:{label:"Pick a seed photo (its plate is known, so the scripted reader works offline) or upload your own — a live in-browser model reads a photo it has never seen.",seedImages:yd},scriptedVision:vd,handlers:[{elementId:"ExtractPlate",standsInFor:"Vision model — Florence-2 <OCR> on WebGPU (in-browser)",source:Md},{elementId:"RecordResult",standsInFor:"Script task — records the governed outcome",source:xd}]},Ed=[Ps,Qa,xs,Ts,Ls,Nd],kd=Object.assign({"./learn-error-boundary/index.ts":Po,"./learn-exclusive-gateway/index.ts":Ro,"./learn-message-correlation/index.ts":Uo,"./learn-multi-instance-parallel/index.ts":Yo,"./learn-service-task/index.ts":Wo,"./learn-signal-broadcast/index.ts":na,"./learn-timer-catch-event/index.ts":oa,"./learn-user-task-form/index.ts":ba}),Id=Object.values(kd).map(e=>e.default).sort((e,n)=>e.id.localeCompare(n.id)),We=[...Ed,...Id];function On(){return"/web-demo-framework/pr-preview/pr-119/"}function Td(e){const n=On();return e.startsWith(n)?"/"+e.slice(n.length):e}function jd(e=location.pathname){const t=Td(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function Sd(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function Pd(e=location.search){return new URLSearchParams(e).get("view")==="compact"?"compact":"full"}function Ad(e=location.search){return new URLSearchParams(e).get("autostart")==="1"}function Et(e){return`${On()}examples/${encodeURIComponent(e)}`}const kt="p";function Dd(){const e=new URLSearchParams(location.search),n=e.get(kt);if(!n)return!1;const t=n.replace(/[\t\n\r]/g,"");if(!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\"))return!1;e.delete(kt);try{const r=new URL(On(),location.href),o=new URL(t.slice(1),r);return o.origin!==location.origin?!1:(o.search=e.toString(),o.hash=location.hash,history.replaceState(null,"",o),!0)}catch{return!1}}function Cd(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function It(){return{route:jd(),embed:Sd(),view:Pd(),autostart:Ad()}}function Bd(){const[e,n]=g.useState(It);return g.useEffect(()=>{const t=()=>n(It());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const Tt={headline:"The model *runs*. The code is *yours* to edit.",lede:"Every example on this page is a real BPMN process executing in your browser on the nano WebAssembly engine — edit the model, edit the handlers, swap the LLM, and run it again.",tagline:"Runnable Camunda examples"};function Ld({text:e}){return i.jsx(i.Fragment,{children:e.split(/\*([^*]+)\*/g).map((n,t)=>t%2===1?i.jsx("em",{children:n},t):i.jsx(g.Fragment,{children:n},t))})}function Rd(){const{route:e,embed:n,view:t,autostart:r}=Bd(),o=n&&t==="compact",s=Qt().brain,d=ho();Si(n);const l=e.kind==="example"?e.id:We[0].id,p=We.find(_=>_.id===l)??We[0],a=We.filter(_=>_.group!=="learn-bpmn"),u=We.filter(_=>_.group==="learn-bpmn"),h=_=>{Cd(Et(_),{hash:location.hash})},m=p.hero??Tt,b=i.jsxs(i.Fragment,{children:[!n&&i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"hero",children:[i.jsx("h1",{children:i.jsx(Ld,{text:m.headline})}),m.lede&&i.jsx("p",{children:m.lede})]}),i.jsx("nav",{className:"example-picker","aria-label":"Scenario examples",children:a.map(_=>i.jsx(Z,{size:"sm",variant:_.id===p.id?"default":"secondary","aria-current":_.id===p.id?"page":void 0,onClick:()=>h(_.id),children:_.title},_.id))}),u.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("h2",{className:"example-group-heading",id:"learn-bpmn-heading",children:"Learn BPMN"}),i.jsx("nav",{className:"example-picker","aria-labelledby":"learn-bpmn-heading",children:u.map(_=>i.jsx(Z,{size:"sm",variant:_.id===p.id?"default":"secondary","aria-current":_.id===p.id?"page":void 0,onClick:()=>h(_.id),children:_.title},_.id))})]})]}),i.jsxs("div",{className:"example-meta",children:[!n&&p.docsUrl&&i.jsx("a",{className:"docs-link",href:p.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&i.jsx("a",{className:"open-full-page",href:Et(p.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:o?"Open the editable version ↗":"Open full page ↗"})]}),i.jsx(ko,{example:p,compact:o,autostart:r,initialBrainKind:s,initialTourId:d},p.id)]});return n?i.jsx("div",{className:`c4-ui app-shell app-embed${o?" app-compact":""}`,children:i.jsx("main",{id:"main",className:`layout layout-embed${o?" layout-compact":""}`,children:b})}):i.jsxs("div",{className:"c4-ui app-shell",children:[i.jsx(ur,{className:"topbar",logo:i.jsx("span",{className:"brand-dot","aria-hidden":!0}),appName:"Runnable Camunda examples",trailing:i.jsx("span",{className:"app-subtitle",children:m.tagline??Tt.tagline})}),i.jsx("main",{id:"main",className:"layout",children:b}),i.jsx("footer",{className:"footer",children:"Running locally in your browser on the nano WebAssembly BPMN engine — no cluster, no server, no data leaving the page."})]})}Dd();ir.createRoot(document.getElementById("root")).render(i.jsx(g.StrictMode,{children:i.jsx(hr,{children:i.jsx(Rd,{})})}));export{ue as _,Ud as c};
