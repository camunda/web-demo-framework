const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-js-BEOU0ddW.css","assets/bpmn-embedded-DQB-nOWT.css","assets/RuntimeDiagram-DTnJz5cT.js","assets/vendor-react-9Ma26nY1.js","assets/Viewer-D_7S4Gwm.js","assets/MonacoEditor-ROQOcYNG.js","assets/MonacoEditor-DP9HDNPt.css","assets/vendor-modeler-Df7L48VE.js","assets/vendor-design-system-AiNYD9BX.js","assets/vendor-design-system-CFmq7CK2.css","assets/parser-DkgAe_kI.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-BsxhE9zt.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var Jt=Object.defineProperty;var Ht=(e,n,t)=>n in e?Jt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var L=(e,n,t)=>Ht(e,typeof n!="symbol"?n+"":n,t);import{r as b,j as i,i as Wt}from"./vendor-react-9Ma26nY1.js";import{B as H,a as ie,L as Ve,S as Nn,b as En,c as kn,d as In,e as Tn,A as le,f as ce,g as me,I as Yn,C as Zt,h as Kt,i as Xt,j as er,k as nr,l as tr,T as rr,m as ir,n as on,o as an,p as or,q as ar}from"./vendor-design-system-AiNYD9BX.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const sr="modulepreload",dr=function(e){return"/pr-preview/pr-108/"+e},Qn={},he=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){let d=function(a){return Promise.all(a.map(p=>Promise.resolve(p).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=d(t.map(a=>{if(a=dr(a),a in Qn)return;Qn[a]=!0;const p=a.endsWith(".css"),h=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const l=document.createElement("link");if(l.rel=p?"stylesheet":sr,p||(l.as="script"),l.crossOrigin="",l.href=a,u&&l.setAttribute("nonce",u),document.head.appendChild(l),p)return new Promise((_,y)=>{l.addEventListener("load",_),l.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(d){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=d,window.dispatchEvent(c),!c.defaultPrevented)throw d}return o.then(d=>{for(const c of d||[])c.status==="rejected"&&s(c.reason);return n().catch(s)})},lr="io.camunda.agenticai:aiagent",Be="http://www.omg.org/spec/BPMN/20100524/MODEL",cr="http://camunda.org/schema/zeebe/1.0";function jn(e,n){return Array.from(e.getElementsByTagNameNS(cr,n))}function xt(e,n){return jn(e,n).filter(t=>mr(t)===e)}function mr(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Be&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function Dn(e){const n=xt(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function qn(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Be&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function Jn(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(r=>r.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function Nt(e){const n=[],t=r=>{for(const o of Array.from(r.attributes))n.push(o.value);for(const o of Array.from(r.children))t(o)};return t(e),n.join(`
`)}function pr(e){return Et(Nt(e))}function ur(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Be&&t.localName==="extensionElements");return n?Et(Nt(n)):[]}function Et(e){const n=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,t=[],r=new Set;for(const o of e.matchAll(n)){const s=o[1];r.has(s)||(r.add(s),t.push({name:s,description:(o[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:o[3]??"string"}))}return t}function hr(e){const n={};for(const t of xt(e,"input")){const r=t.getAttribute("target");r&&(n[r]=t.getAttribute("source")??"")}return n}function gr(e){return Array.from(e.getElementsByTagNameNS(Be,"adHocSubProcess")).filter(n=>(Dn(n)??"").startsWith(lr))}const br=new Set(["subProcess","adHocSubProcess","callActivity"]),_r=new Set(["adHocSubProcess","subProcess","transaction"]);function fr(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Be&&_r.has(n.localName))return n;n=n.parentElement}return null}function wr(e,n){const t=hr(e),r=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:Dn(e),systemPrompt:Jn(t["data.systemPrompt.prompt"]),userPrompt:Jn(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(r)&&r>0?r:10,tools:n}}function yr(e,n){var h;const t=e.getAttribute("id")??"",r=e.getAttribute("name")??t,o=gr(e);o.length>1&&n.push({severity:"warning",elementId:o.map(l=>l.getAttribute("id")).join(", "),message:`Process "${r}" hosts ${o.length} AI Agent sub-processes (${o.map(l=>l.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const s=[],d=new Map(o.map(l=>[l,[]]));for(const l of Array.from(e.getElementsByTagName("*"))){if(l.namespaceURI!==Be||o.includes(l))continue;const _=l.getAttribute("id");if(!_)continue;const y=fr(l),M=y&&o.includes(y)?y:null;if(M&&br.has(l.localName)){const k=l.getAttribute("name")??_,B=qn(l);s.push({elementId:_,label:k,jobType:"",documentation:B,isTool:!0,compound:!0}),d.get(M).push({elementId:_,label:k,jobType:"",documentation:B,args:ur(l),compound:!0});continue}const v=Dn(l);if(!v)continue;const g={elementId:_,label:l.getAttribute("name")??_,jobType:v,documentation:qn(l),isTool:M!=null};s.push(g),M&&d.get(M).push({elementId:_,label:g.label,jobType:v,documentation:g.documentation,args:pr(l)})}const c=o.map(l=>wr(l,d.get(l))),u=Array.from(e.getElementsByTagNameNS(Be,"userTask")).map(l=>{var _;return{elementId:l.getAttribute("id")??"",label:l.getAttribute("name")??l.getAttribute("id")??"",formId:((_=jn(l,"formDefinition")[0])==null?void 0:_.getAttribute("formId"))??void 0}}),a=e.getElementsByTagNameNS(Be,"startEvent")[0],p=a?((h=jn(a,"formDefinition")[0])==null?void 0:h.getAttribute("formId"))??void 0:void 0;return{processId:t,processName:r,tasks:s,agents:c,userTasks:u,startFormId:p}}function vr(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),r=t.getElementsByTagName("parsererror")[0];if(r)throw new Error(`Invalid BPMN XML: ${r.textContent}`);const o=Array.from(t.getElementsByTagNameNS(Be,"process"));if(o.length===0)throw new Error("No <bpmn:process> in the diagram.");const s=[],d=o.map(u=>yr(u,s));let c=n.processId?d.find(u=>u.processId===n.processId):void 0;return n.processId&&!c&&s.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${d[0].processId}".`}),c??(c=d[0]),d.length>1&&s.push({severity:"warning",message:`Diagram has ${d.length} <bpmn:process> elements (${d.map(u=>u.processId).join(", ")}); using "${c.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:d,diagnostics:s,processId:c.processId,processName:c.processName,tasks:c.tasks,agent:c.agents[0]??null,agents:d.flatMap(u=>u.agents),userTasks:c.userTasks,startFormId:c.startFormId}}function Mr(e){return e?e.imageId?{imageId:e.imageId}:e.imageName?{imageName:e.imageName}:{}:{}}function kt(e,n){return n?e.pixels:e.imageId??e.pixels}const xr="No image selected — pick or upload a photo to read.";function Hn(){return xr}function Nr(e,n){return async t=>{const r=e.resolve(n);if(!r)return Hn();const o=kt(r,e.live);if(o===void 0)return Hn();try{return await e.read(o,t)}catch(s){return`Couldn't read the image (${s instanceof Error?s.message:String(s)}).`}}}function Er(e,n){return async()=>{const t=e.resolve(n);if(t)return kt(t,e.live)}}function kr(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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
  <\/script></body></html>`}function It(e,n={}){const{timeoutMs:t=5e3,onTrace:r,onVision:o,onImage:s}=n,d=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((c,u)=>{const a=document.createElement("iframe");a.setAttribute("sandbox","allow-scripts"),a.style.display="none",a.setAttribute("aria-hidden","true");let p=!1,h;const l=()=>{h&&clearTimeout(h),window.removeEventListener("message",y),a.remove()},_=v=>{p||(p=!0,l(),v())};function y(v){var k;if(v.source!==a.contentWindow)return;const g=v.data;if(!(!g||typeof g!="object")){if(g.kind==="ready"){const B=e.job,O=e.kind==="run-handler"?{kind:"run-handler",id:d,source:e.source,job:B,hasVision:e.hasVision}:{kind:"run-agent",id:d,source:e.source,job:B};(k=a.contentWindow)==null||k.postMessage(O,"*");return}"id"in g&&g.id!==d||(g.kind==="trace"?r==null||r(g.text):g.kind==="vision-request"?M(g.callId,o,"vision",g.prompt):g.kind==="image-request"?M(g.callId,s,"image"):g.kind==="result"?_(()=>c(g.value)):g.kind==="error"&&_(()=>u(new Error(g.message))))}}function M(v,g,k,...B){const O=oe=>{var Z;return(Z=a.contentWindow)==null?void 0:Z.postMessage(oe,"*")};if(!g){O({kind:"helper-error",id:d,callId:v,message:`${k} helper is not available.`});return}Promise.resolve().then(()=>g(...B)).then(oe=>O({kind:"helper-result",id:d,callId:v,value:oe}),oe=>O({kind:"helper-error",id:d,callId:v,message:oe instanceof Error?oe.message:String(oe)}))}window.addEventListener("message",y),h=setTimeout(()=>{_(()=>u(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),a.srcdoc=kr(),document.body.appendChild(a)})}function Tt(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function Ir(e,n,t){const r=typeof t.vision=="function";return It({kind:"run-handler",source:e,job:Tt(n),hasVision:r},{onTrace:t.trace,onVision:t.vision?o=>t.vision(o):void 0,onImage:t.image?()=>t.image():void 0})}function Tr(e,n){return It({kind:"run-agent",source:e,job:Tt(n)})}function jt(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function jr(e){return jt(e,"Handler code"),(n,t)=>Ir(e,n,t)}function Sr(e){return jt(e,"Agent code"),n=>Tr(e,n)}function Pr(e,n,t,r){return{sleep:o=>new Promise(s=>setTimeout(s,o)),trace:o=>n({kind:"tool",text:`   ${o}`,elementId:e.elementId,turn:t}),text:(o,s="")=>{const d=e.variables[o];return typeof d=="string"?d:d==null?s:String(d)},num:(o,s=0)=>{const d=e.variables[o],c=typeof d=="number"?d:Number(d);return Number.isFinite(c)?c:s},...r?{vision:Nr(r,e.instanceKey),image:Er(r,e.instanceKey)}:{}}}function Ar(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Cr(e,n,t,r,o){const s={},d=e.processes.flatMap(u=>u.tasks),c=new Map(d.map(u=>[u.elementId,u.label]));for(const u of d)u.compound||s[u.jobType]||(s[u.jobType]=async a=>{const p=n[a.elementId];if(!p)throw new Error(`No handler registered for ${a.elementId} (job type ${a.type})`);const h=c.get(a.elementId)??a.elementId,l=r==null?void 0:r.current;t({kind:"tool",text:`▶ ${h}`,elementId:a.elementId,turn:l});const _=await p(a,Pr(a,t,l,o));return t({kind:"vars",text:`  ↳ ${Ar(_)}`,elementId:a.elementId,result:_,turn:l}),_});return s}const Dr=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function en(...e){const n=Object.create(null);for(const t of e)if(t)for(const r of Object.keys(t))n[r]=t[r];return n}function St(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function Pt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Br(e){return Pt(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function Lr(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Rr(e){return JSON.stringify(e).slice(1,-1)}function Fr(e,n){const t=e.lastIndexOf("<",n),r=e.lastIndexOf(">",n);if(t<=r)return"text";const o=e.slice(t,n);if((o.match(/"/g)??[]).length%2===0)return"text";const d=o.lastIndexOf('"');return(o.slice(d+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function zr(e,n,t="xml"){const r=[],o=new Set;return{result:e.replace(Dr,(d,c,u)=>{const a=c.trim();if(!Object.prototype.hasOwnProperty.call(n,a))return o.has(a)||(o.add(a),r.push(a)),d;const p=n[a];if(t==="json")return Rr(p);const h=Fr(e,u);return h==="feel-literal"?Lr(p):h==="attribute"?Br(p):Pt(p)}),unresolved:r}}function Or(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function Ur(e,n={},t=e.bpmn,r={}){const o=[],s=en(e.templates,r),{result:d,unresolved:c}=zr(t,s,"xml");for(const g of c)o.push({severity:"warning",message:`Template placeholder "{{${g}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let u;try{u=vr(d)}catch(g){return o.push({severity:"error",message:g instanceof Error?g.message:String(g)}),{resolvedBpmn:d,model:Or(),handlers:{},forms:{},diagnostics:o,hasErrors:!0}}o.push(...u.diagnostics);const a=u.processes.flatMap(g=>g.tasks),p=new Map(e.handlers.map(g=>[g.elementId,g.source])),h={};for(const g of a){if(g.compound)continue;const k=n[g.elementId]??p.get(g.elementId);if(k===void 0){o.push({severity:"error",elementId:g.elementId,jobType:g.jobType,message:`No handler for "${g.label}" (${g.elementId}, job type "${g.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{h[g.elementId]=jr(k)}catch(B){o.push({severity:"error",elementId:g.elementId,jobType:g.jobType,message:`"${g.label}" (${g.elementId}): handler code didn't compile — ${B instanceof Error?B.message:String(B)}`})}}const l=new Set(a.map(g=>g.elementId)),_=new Set([...p.keys(),...Object.keys(n)]);for(const g of _)l.has(g)||o.push({severity:"error",elementId:g,message:`Handler "${g}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const y={},M=e.forms??{},v=(g,k)=>{if(!g)return;const B=M[g];B?y[g]=B:o.push({severity:"error",formId:g,message:`${k} references form "${g}", which has no matching schema.`})};for(const g of u.processes){v(g.startFormId,`The start event of process "${g.processName}"`);for(const k of g.userTasks)v(k.formId,`User task "${k.label}" (${k.elementId})`)}return{resolvedBpmn:d,model:u,handlers:h,forms:y,diagnostics:o,hasErrors:o.some(g=>g.severity==="error")}}function $r(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let r=n;r<e.length;r++)if(e[r]==="{")t++;else if(e[r]==="}"&&(t--,t===0))try{const o=JSON.parse(e.slice(n,r+1));return typeof o=="object"&&o!==null&&!Array.isArray(o)?o:null}catch{return null}return null}function Sn(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function Wn(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function Zn(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:Wn(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,r=Array.isArray(t)?t:Object.values(e).find(s=>Array.isArray(s))??[],o=[];for(const s of r)if(typeof s=="string")s.trim()&&o.push({name:s.trim(),args:{}});else if(s&&typeof s=="object"){const d=s,c=d.name??d.tool??d.id??d.function;typeof c=="string"&&c.trim()&&o.push({name:c.trim(),args:Wn(d)})}return o}function Gr(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function Kn(e){const n=e.args.length?e.args.map(r=>`      ${r.name} (${r.type}) — ${r.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function Vr(e,n,t){const r=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",o=t[0]??e.tools[0],s=o!=null&&o.args.length?`{${o.args.map(d=>`"${d.name}": "…"`).join(", ")}}`:"{}";return n?`${r}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${t.map(Kn).join(`

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

${t.map(Kn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(o==null?void 0:o.elementId)??"ToolName"}", "arguments": ${s}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function Yr(e,n,t,r,o=[],s=[],d=!1){const c=e.userPrompt||"Carry out your task.",u=Object.entries(n).filter(([,p])=>typeof p=="string"&&p.trim().length>0).map(([p,h])=>`  ${p}: ${String(h)}`),a=[c,u.length?`Case data:
${u.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return a.push(t.length?`${d?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),a.push(r.length?`Tools still available:
${r.map(p=>`  ${p.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),s.length&&a.push(`Your last reply was rejected: ${s.join("; ")}. Do not repeat it.`),o.length&&a.push(`You reported that you are done, but ${o.join(" and ")} ${o.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${o.length===1?"it":"them"} now.`),a.push("Which tool should run next? Reply with JSON only."),a.join(`

`)}async function Qr(e,n,t,r,o,s){let d="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:s});const c=await e(r,o,u=>{d+=u,n({kind:"llm",text:`${Sn(d)} ▍`,key:t,pending:!0,turn:s})});return n({kind:"llm",text:Sn(c||d)||"(empty reply)",key:t,pending:!1,turn:s}),c}function qr(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function Jr(e,n,t){const r={},o=new Map,s=new Map;for(const{tool:d,args:c}of e){const u={};for(const a of d.args){const p=c[a.name];if(!(p!=null&&p!=="")){n({kind:"error",text:`🤖 ${d.elementId}: model supplied no value for "${a.name}"`,turn:t,elementId:d.elementId});continue}const l=o.get(a.name);if(l!==void 0&&l!==d.elementId){n({kind:"error",text:`🤖 argument name collision on "${a.name}": both ${l} and ${d.elementId} declare it — ${l} already claimed it this turn, ${d.elementId}'s value is dropped`,turn:t,elementId:d.elementId});continue}const _=qr(a.type,p);if(!_.ok){n({kind:"error",text:`🤖 ${d.elementId}: "${a.name}" is declared as ${a.type} but the model supplied ${JSON.stringify(p)} — rejected, not passed through`,turn:t,elementId:d.elementId});continue}r[a.name]=_.value,u[a.name]=_.value,o.set(a.name,d.elementId)}s.set(d.elementId,u)}return{variablesOut:r,forHistory:s}}function Hr(e,n,t,r={}){const{maxNewTokens:o=384,allowRepeats:s=!1,allowMultiToolTurns:d=!1,turnRef:c,requiredTools:u=[],maxEarlyDoneNudges:a=1,maxUnproductiveTurns:p=3}=r;let h=0;const l=new Set,_=[];let y=0,M=[],v=[];return async g=>{const k=g.variables,B=k.toolCallResult;B!==void 0&&_.length&&(_[_.length-1]=`${_[_.length-1]} → ${Sn(JSON.stringify(B),160)}`);let O=0;for(;;){const Z=await oe();if(Z)return Z;if(O+=1,O>=p)return t({kind:"error",text:`🤖 ${O} turns in a row activated nothing — completing the agent. The model has lost the reply format; whatever it has already run stands.`,turn:h}),{completionConditionFulfilled:!0}}async function oe(){if(h+=1,c&&(c.current=h),h>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:h}),{completionConditionFulfilled:!0};const Z=s?e.tools:e.tools.filter(N=>!l.has(N.elementId));if(Z.length===0)return t({kind:"agent",text:"🤖 every tool has run — completing the agent",turn:h}),{completionConditionFulfilled:!0};const Ee=[{role:"system",content:Vr(e,d,Z)},{role:"user",content:Yr(e,k,_,Z,M,v,s)}];M=[],v=[];let ke;try{ke=await Qr(n,t,`llm-turn-${h}`,Ee,o,h)}catch(N){return t({kind:"error",text:`LLM call failed: ${N instanceof Error?N.message:String(N)} — completing the agent.`,turn:h}),{completionConditionFulfilled:!0}}const ye=$r(ke);if(Gr(ye)&&Zn(ye).length===0){const N=u.filter(U=>!l.has(U));return N.length&&y<a?(y+=1,M=N,t({kind:"agent",text:`🤖 model says it is done, but ${N.join(", ")} hasn't run — asking once more`,turn:h}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:h}),{completionConditionFulfilled:!0})}const Ie=Zn(ye);if(Ie.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:h}),v=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const $=[],ae=[],Q=[];for(const N of Ie){const U=e.tools.find(G=>G.elementId===N.name);if(!U){ae.push(N.name);continue}if(!s&&l.has(U.elementId)){Q.push(U.elementId);continue}$.push({tool:U,args:N.args})}if(ae.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${ae.join(", ")} — nothing activated`,turn:h}),Q.length&&t({kind:"error",text:`🤖 model asked to re-run ${Q.join(", ")} — skipped (already run)`,turn:h}),$.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:h}),v=[...ae.length?[`${ae.join(", ")} ${ae.length===1?"is":"are"} not a real tool`]:[],...Q.length?[`${Q.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:T,forHistory:j}=Jr($,t,h);for(const{tool:N}of $)l.add(N.elementId),_.push(`- ${N.elementId}(${JSON.stringify(j.get(N.elementId))})`);for(const{tool:N}of $)t({kind:"agent",text:`🤖 calling ${N.elementId}`,turn:h,elementId:N.elementId,args:j.get(N.elementId)??{}});return{activateElements:$.map(N=>({elementId:N.tool.elementId})),variables:T}}}}function Wr(e,n,t,r={}){const o=new Map(e.map(s=>[s.elementId,Hr(s,n,t,r)]));return async s=>{const d=o.get(s.elementId);if(!d)throw new Error(`No agent host registered for "${s.elementId}"`);return d(s)}}class Pn{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Xn.unregister(this),n}free(){const n=this.__destroy_into_raw();m.__wbg_testengine_free(n,0)}activateJobs(n,t,r,o){let s,d;try{const _=m.__wbindgen_add_to_stack_pointer(-16),y=A(n,m.__wbindgen_export,m.__wbindgen_export2),M=S,v=A(o,m.__wbindgen_export,m.__wbindgen_export2),g=S;m.testengine_activateJobs(_,this.__wbg_ptr,y,M,t,r,v,g);var c=f().getInt32(_+0,!0),u=f().getInt32(_+4,!0),a=f().getInt32(_+8,!0),p=f().getInt32(_+12,!0),h=c,l=u;if(p)throw h=0,l=0,z(a);return s=h,d=l,F(h,l)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(s,d,1)}}advanceTime(n){let t,r;try{const p=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_advanceTime(p,this.__wbg_ptr,n);var o=f().getInt32(p+0,!0),s=f().getInt32(p+4,!0),d=f().getInt32(p+8,!0),c=f().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(d);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}assignUserTask(n,t,r){let o,s;try{const l=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S;m.testengine_assignUserTask(l,this.__wbg_ptr,_,y,M,v,r);var d=f().getInt32(l+0,!0),c=f().getInt32(l+4,!0),u=f().getInt32(l+8,!0),a=f().getInt32(l+12,!0),p=d,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}broadcastSignal(n,t){let r,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),l=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),M=S;m.testengine_broadcastSignal(h,this.__wbg_ptr,l,_,y,M);var s=f().getInt32(h+0,!0),d=f().getInt32(h+4,!0),c=f().getInt32(h+8,!0),u=f().getInt32(h+12,!0),a=s,p=d;if(u)throw a=0,p=0,z(c);return r=a,o=p,F(a,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,o,1)}}cancelInstance(n){let t,r;try{const p=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),l=S;m.testengine_cancelInstance(p,this.__wbg_ptr,h,l);var o=f().getInt32(p+0,!0),s=f().getInt32(p+4,!0),d=f().getInt32(p+8,!0),c=f().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(d);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}completeAgentJob(n,t,r){let o,s;try{const l=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S,g=A(r,m.__wbindgen_export,m.__wbindgen_export2),k=S;m.testengine_completeAgentJob(l,this.__wbg_ptr,_,y,M,v,g,k);var d=f().getInt32(l+0,!0),c=f().getInt32(l+4,!0),u=f().getInt32(l+8,!0),a=f().getInt32(l+12,!0),p=d,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}completeJob(n,t){let r,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),l=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),M=S;m.testengine_completeJob(h,this.__wbg_ptr,l,_,y,M);var s=f().getInt32(h+0,!0),d=f().getInt32(h+4,!0),c=f().getInt32(h+8,!0),u=f().getInt32(h+12,!0),a=s,p=d;if(u)throw a=0,p=0,z(c);return r=a,o=p,F(a,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,o,1)}}completeUserTask(n,t){let r,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),l=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),M=S;m.testengine_completeUserTask(h,this.__wbg_ptr,l,_,y,M);var s=f().getInt32(h+0,!0),d=f().getInt32(h+4,!0),c=f().getInt32(h+8,!0),u=f().getInt32(h+12,!0),a=s,p=d;if(u)throw a=0,p=0,z(c);return r=a,o=p,F(a,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,o,1)}}correlateMessage(n,t,r){let o,s;try{const l=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S,g=A(r,m.__wbindgen_export,m.__wbindgen_export2),k=S;m.testengine_correlateMessage(l,this.__wbg_ptr,_,y,M,v,g,k);var d=f().getInt32(l+0,!0),c=f().getInt32(l+4,!0),u=f().getInt32(l+8,!0),a=f().getInt32(l+12,!0),p=d,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}createInstance(n,t,r){let o,s;try{const l=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S;m.testengine_createInstance(l,this.__wbg_ptr,_,y,M,v,ni(r)?Number.MAX_SAFE_INTEGER:r>>0);var d=f().getInt32(l+0,!0),c=f().getInt32(l+4,!0),u=f().getInt32(l+8,!0),a=f().getInt32(l+12,!0),p=d,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}debugClear(){m.testengine_debugClear(this.__wbg_ptr)}debugCreateInstance(n,t,r){let o,s;try{const l=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S,g=A(r,m.__wbindgen_export,m.__wbindgen_export2),k=S;m.testengine_debugCreateInstance(l,this.__wbg_ptr,_,y,M,v,g,k);var d=f().getInt32(l+0,!0),c=f().getInt32(l+4,!0),u=f().getInt32(l+8,!0),a=f().getInt32(l+12,!0),p=d,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}get debugIsPaused(){return m.testengine_debugIsPaused(this.__wbg_ptr)!==0}debugResume(){let n,t;try{const a=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_debugResume(a,this.__wbg_ptr);var r=f().getInt32(a+0,!0),o=f().getInt32(a+4,!0),s=f().getInt32(a+8,!0),d=f().getInt32(a+12,!0),c=r,u=o;if(d)throw c=0,u=0,z(s);return n=c,t=u,F(c,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}debugStep(){let n,t;try{const a=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_debugStep(a,this.__wbg_ptr);var r=f().getInt32(a+0,!0),o=f().getInt32(a+4,!0),s=f().getInt32(a+8,!0),d=f().getInt32(a+12,!0),c=r,u=o;if(d)throw c=0,u=0,z(s);return n=c,t=u,F(c,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}deploy(n){let t,r;try{const p=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),l=S;m.testengine_deploy(p,this.__wbg_ptr,h,l);var o=f().getInt32(p+0,!0),s=f().getInt32(p+4,!0),d=f().getInt32(p+8,!0),c=f().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(d);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}deployForm(n){let t,r;try{const p=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),l=S;m.testengine_deployForm(p,this.__wbg_ptr,h,l);var o=f().getInt32(p+0,!0),s=f().getInt32(p+4,!0),d=f().getInt32(p+8,!0),c=f().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(d);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}deployResource(n,t){let r,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),l=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),M=S;m.testengine_deployResource(h,this.__wbg_ptr,l,_,y,M);var s=f().getInt32(h+0,!0),d=f().getInt32(h+4,!0),c=f().getInt32(h+8,!0),u=f().getInt32(h+12,!0),a=s,p=d;if(u)throw a=0,p=0,z(c);return r=a,o=p,F(a,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,o,1)}}events(){let n,t;try{const a=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_events(a,this.__wbg_ptr);var r=f().getInt32(a+0,!0),o=f().getInt32(a+4,!0),s=f().getInt32(a+8,!0),d=f().getInt32(a+12,!0),c=r,u=o;if(d)throw c=0,u=0,z(s);return n=c,t=u,F(c,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}failJob(n,t,r){let o,s;try{const l=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(r,m.__wbindgen_export,m.__wbindgen_export2),v=S;m.testengine_failJob(l,this.__wbg_ptr,_,y,t,M,v);var d=f().getInt32(l+0,!0),c=f().getInt32(l+4,!0),u=f().getInt32(l+8,!0),a=f().getInt32(l+12,!0),p=d,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}migrate(n,t,r){let o,s;try{const l=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S,g=A(r,m.__wbindgen_export,m.__wbindgen_export2),k=S;m.testengine_migrate(l,this.__wbg_ptr,_,y,M,v,g,k);var d=f().getInt32(l+0,!0),c=f().getInt32(l+4,!0),u=f().getInt32(l+8,!0),a=f().getInt32(l+12,!0),p=d,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}modify(n,t,r){let o,s;try{const l=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S,g=A(r,m.__wbindgen_export,m.__wbindgen_export2),k=S;m.testengine_modify(l,this.__wbg_ptr,_,y,M,v,g,k);var d=f().getInt32(l+0,!0),c=f().getInt32(l+4,!0),u=f().getInt32(l+8,!0),a=f().getInt32(l+12,!0),p=d,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}constructor(){const n=m.testengine_new();return this.__wbg_ptr=n,Xn.register(this,this.__wbg_ptr,this),this}get now(){return m.testengine_now(this.__wbg_ptr)}reset(){m.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,r;try{const p=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),l=S;m.testengine_resolveIncident(p,this.__wbg_ptr,h,l);var o=f().getInt32(p+0,!0),s=f().getInt32(p+4,!0),d=f().getInt32(p+8,!0),c=f().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(d);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}setVariables(n,t,r){let o,s;try{const l=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S;m.testengine_setVariables(l,this.__wbg_ptr,_,y,M,v,r);var d=f().getInt32(l+0,!0),c=f().getInt32(l+4,!0),u=f().getInt32(l+8,!0),a=f().getInt32(l+12,!0),p=d,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}snapshot(){let n,t;try{const a=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_snapshot(a,this.__wbg_ptr);var r=f().getInt32(a+0,!0),o=f().getInt32(a+4,!0),s=f().getInt32(a+8,!0),d=f().getInt32(a+12,!0),c=r,u=o;if(d)throw c=0,u=0,z(s);return n=c,t=u,F(c,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}throwError(n,t,r){let o,s;try{const l=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S,g=A(r,m.__wbindgen_export,m.__wbindgen_export2),k=S;m.testengine_throwError(l,this.__wbg_ptr,_,y,M,v,g,k);var d=f().getInt32(l+0,!0),c=f().getInt32(l+4,!0),u=f().getInt32(l+8,!0),a=f().getInt32(l+12,!0),p=d,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}tickNow(n){let t,r;try{const p=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_tickNow(p,this.__wbg_ptr,n);var o=f().getInt32(p+0,!0),s=f().getInt32(p+4,!0),d=f().getInt32(p+8,!0),c=f().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(d);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}unassignUserTask(n){let t,r;try{const p=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),l=S;m.testengine_unassignUserTask(p,this.__wbg_ptr,h,l);var o=f().getInt32(p+0,!0),s=f().getInt32(p+4,!0),d=f().getInt32(p+8,!0),c=f().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(d);return t=u,r=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,r,1)}}updateRetries(n,t){let r,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),l=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S;m.testengine_updateRetries(h,this.__wbg_ptr,l,_,t);var s=f().getInt32(h+0,!0),d=f().getInt32(h+4,!0),c=f().getInt32(h+8,!0),u=f().getInt32(h+12,!0),a=s,p=d;if(u)throw a=0,p=0,z(c);return r=a,o=p,F(a,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,o,1)}}updateUserTask(n,t){let r,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),l=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),M=S;m.testengine_updateUserTask(h,this.__wbg_ptr,l,_,y,M);var s=f().getInt32(h+0,!0),d=f().getInt32(h+4,!0),c=f().getInt32(h+8,!0),u=f().getInt32(h+12,!0),a=s,p=d;if(u)throw a=0,p=0,z(c);return r=a,o=p,F(a,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(r,o,1)}}}Symbol.dispose&&(Pn.prototype[Symbol.dispose]=Pn.prototype.free);function Zr(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_bb96b2010945f0bc:function(n,t){throw new Error(F(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const r=F(n,t);return Kr(r)},__wbindgen_object_drop_ref:function(n){z(n)}}}}const Xn=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>m.__wbg_testengine_free(e,1));function Kr(e){Ke===De.length&&De.push(De.length+1);const n=Ke;return Ke=De[n],De[n]=e,n}function Xr(e){e<1028||(De[e]=Ke,Ke=e)}let ze=null;function f(){return(ze===null||ze.buffer.detached===!0||ze.buffer.detached===void 0&&ze.buffer!==m.memory.buffer)&&(ze=new DataView(m.memory.buffer)),ze}function F(e,n){return ri(e>>>0,n)}let Ze=null;function ln(){return(Ze===null||Ze.byteLength===0)&&(Ze=new Uint8Array(m.memory.buffer)),Ze}function ei(e){return De[e]}let De=new Array(1024).fill(void 0);De.push(void 0,null,!0,!1);let Ke=De.length;function ni(e){return e==null}function A(e,n,t){if(t===void 0){const c=Xe.encode(e),u=n(c.length,1)>>>0;return ln().subarray(u,u+c.length).set(c),S=c.length,u}let r=e.length,o=n(r,1)>>>0;const s=ln();let d=0;for(;d<r;d++){const c=e.charCodeAt(d);if(c>127)break;s[o+d]=c}if(d!==r){d!==0&&(e=e.slice(d)),o=t(o,r,r=d+e.length*3,1)>>>0;const c=ln().subarray(o+d,o+r),u=Xe.encodeInto(e,c);d+=u.written,o=t(o,r,d,1)>>>0}return S=d,o}function z(e){const n=ei(e);return Xr(e),n}let cn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});cn.decode();const ti=2146435072;let yn=0;function ri(e,n){return yn+=n,yn>=ti&&(cn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),cn.decode(),yn=n),cn.decode(ln().subarray(e,e+n))}const Xe=new TextEncoder;"encodeInto"in Xe||(Xe.encodeInto=function(e,n){const t=Xe.encode(e);return n.set(t),{read:e.length,written:t.length}});let S=0,m;function ii(e,n){return m=e.exports,ze=null,Ze=null,m}async function oi(e,n){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(o){if(t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}else{const r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function t(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function ai(e){if(m!==void 0)return m;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/pr-preview/pr-108/assets/nanobpmn_engine_bg-DRNrIVE8.wasm",import.meta.url));const n=Zr();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await oi(await e,n);return ii(t)}let sn=null;function si(e){return sn||(sn=ai(void 0).then(()=>{}).catch(n=>{throw sn=null,n})),sn}function ne(e){return JSON.parse(e)}class di{constructor(n){L(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return ne(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,r,o){return JSON.parse(this.engine.activateJobs(n,t,r,o))}completeJob(n,t){return ne(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:r,...o}=t??{};return ne(this.engine.completeAgentJob(n,JSON.stringify(r??{}),JSON.stringify(o??{})))}failJob(n,t,r){return ne(this.engine.failJob(n,t,r))}throwError(n,t,r){return ne(this.engine.throwError(n,t,r))}updateRetries(n,t){return ne(this.engine.updateRetries(n,t))}resolveIncident(n){return ne(this.engine.resolveIncident(n))}setVariables(n,t,r){return ne(this.engine.setVariables(n,t||"{}",r))}broadcastSignal(n,t){return ne(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return ne(this.engine.cancelInstance(n))}modify(n,t,r){return ne(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(r??[])))}completeUserTask(n,t){return ne(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,r){return ne(this.engine.assignUserTask(n,t,r))}unassignUserTask(n){return ne(this.engine.unassignUserTask(n))}updateUserTask(n,t){return ne(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,r){return ne(this.engine.correlateMessage(n,t,r||"{}"))}advanceTime(n){return ne(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return ne(this.engine.snapshot())}free(){this.engine.free()}}async function li(e){return await si(),new di(new Pn)}class At extends Error{constructor(t,r){super(t);L(this,"retries");this.name="JobFailure",this.retries=r==null?void 0:r.retries}}function ci(e,n=[]){if(e.instances.filter(o=>!o.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const r=new Set(n);return e.jobs.some(o=>!r.has(o.jobType))?"unhandledJobs":e.userTasks.some(o=>o.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function mi(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(r=>r.jobType))].filter(r=>!t.has(r)).sort()}async function pi(e,n,t){let r;try{const o=await n(t);r=JSON.stringify(o??{})}catch(o){const s=o instanceof At&&o.retries!==void 0?o.retries:Math.max(0,t.retries-1),d=o instanceof Error?o.message:String(o);e.failJob(t.key,s,d);return}e.completeJob(t.key,r)}async function ui(e,n,t){let r;try{r=await n(t),JSON.stringify(r)}catch(o){const s=o instanceof At&&o.retries!==void 0?o.retries:Math.max(0,t.retries-1),d=o instanceof Error?o.message:String(o);e.failJob(t.key,s,d);return}e.completeAgentJob(t.key,r)}async function hi(e,n,t={}){const r=t.maxJobsPerActivation??10,o=t.lockTimeoutMs??3e4,s=t.worker??"bojtos",d=t.agents??{};for(const l of Object.keys(d))if(l in n)throw new Error(`dispatchRound: job type "${l}" is registered as both a worker and an agent — register it as exactly one`);const c=[];for(const[l,_]of Object.entries(n))for(const y of e.activateJobs(l,r,o,s))c.push({handler:_,job:y});const u=[];for(const[l,_]of Object.entries(d))for(const y of e.activateJobs(l,r,o,s))u.push({handler:_,job:y});for(const{handler:l,job:_}of c)await pi(e,l,_);for(const{handler:l,job:_}of u)await ui(e,l,_);const a=e.snapshot(),p=c.length+u.length;if(p>0)return{snapshot:a,handled:p};const h=[...Object.keys(n),...Object.keys(d)];return{snapshot:a,handled:p,reason:ci(a,h),unhandled:mi(a,h)}}function gi({bpmn:e}){const n=b.useRef(null),[t,r]=b.useState("loading"),[o,s]=b.useState(null),[d,c]=b.useState([]),[u,a]=b.useState(null),p=b.useRef(e),h=b.useRef(0),l=b.useRef(null),_=b.useRef(new Map),y=b.useCallback((T,j)=>{_.current.set(T,j)},[]),M=b.useCallback(T=>_.current.get(T),[]),v=b.useCallback((T,j)=>{const N=T.deploy(j);return p.current=j,_.current.clear(),c(N.processIds),a(null),s(null),N.processIds},[]);b.useEffect(()=>{let T=!1;return r("loading"),c([]),a(null),s(null),li().then(j=>{if(T){j.free();return}try{v(j,e)}catch(N){j.free(),s(String(N)),r("error");return}n.current=j,r("ready")}).catch(j=>{T||(s(String(j)),r("error"))}),()=>{var j;T=!0,(j=n.current)==null||j.free(),n.current=null,_.current.clear()}},[e]);const g=b.useCallback(T=>{const j=n.current;if(!j)return null;try{const N=T(j);return a(N),s(null),N}catch(N){return s(String(N)),null}},[]),k=b.useCallback((T,j)=>g(N=>N.createInstance(T,j)),[g]),B=b.useCallback((T,j)=>g(N=>N.completeUserTask(T,j)),[g]),O=b.useCallback(T=>g(j=>j.advanceTime(T)),[g]),oe=b.useCallback((T,j)=>g(N=>N.broadcastSignal(T,j)),[g]);function Z(T,j){const[N]=T.activateJobs(j,1,3e4,"manual-control");if(!N)throw new Error(`No waiting job of type "${j}" to resolve.`);return N}const Ee=b.useCallback((T,j)=>g(N=>{const U=Z(N,T);return N.completeJob(U.key,j)}),[g]),ke=b.useCallback((T,j,N)=>g(U=>{const G=Z(U,T);return U.throwError(G.key,j,N)}),[g]),ye=b.useCallback((T,j,N)=>g(U=>U.correlateMessage(T,j,N)),[g]),Ie=b.useCallback(async(T,j)=>{const N=n.current;if(!N)return null;const U=h.current,G=hi(N,T,j);l.current=G;try{const ge=await G;return n.current!==N||h.current!==U?null:(a(ge.snapshot),s(null),ge)}catch(ge){return n.current!==N||h.current!==U||(a(N.snapshot()),s(String(ge))),null}finally{l.current===G&&(l.current=null)}},[]),$=b.useCallback(async()=>{var T;await((T=l.current)==null?void 0:T.catch(()=>{}))},[]),ae=b.useCallback(async()=>{await $();const T=n.current;if(T){h.current++;try{T.reset(),v(T,p.current)}catch(j){s(String(j))}}},[v,$]),Q=b.useCallback(async T=>{await $();const j=n.current;if(!j)return null;h.current++;try{return j.reset(),v(j,T)}catch(N){return s(String(N)),null}},[v,$]);return{phase:t,error:o,processIds:d,snapshot:u,createInstance:k,stepWorkers:Ie,completeUserTask:B,advanceTime:O,broadcastSignal:oe,completeJobManually:Ee,throwJobError:ke,correlateMessage:ye,reset:ae,redeploy:Q,setRunImage:y,getRunImage:M}}function bi(e,n){return e.slice(n)}function _i(e,n,t,r){const o=e.snapshot,s="⏸ waiting for a human — complete the task below to continue",d=o.userTasks.some(c=>c.state==="Created");if(e.handled>0){const c=o.activeElementIds.map(t),u=n.length?` via ${n.map(a=>`${t(a.from)} → ${t(a.to)}`).join(", ")}`:"";return o.completedInstances>=1?{kind:"done",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — ✅ process instance completed`}:d?{kind:"human",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — ${s}`}:{kind:"step",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — now at ${c.length?c.join(", "):"—"}`}}switch(e.reason){case"completed":return{kind:"done",text:"✅ process instance completed"};case"userTasks":return{kind:"human",text:s};case"timers":return{kind:"step",text:"⏱ waiting on a timer — advance the clock to continue"};case"messages":return{kind:"step",text:"✉ waiting on a message — correlate it to continue"};case"signals":return{kind:"step",text:"📶 waiting on a signal — broadcast it to continue"};case"incidents":return{kind:"error",text:"A job failed — incident on the diagram"};case"unhandledJobs":{const c=e.unhandled??[];return r&&c.length>0&&c.every(u=>r.has(u))?{kind:"human",text:s}:{kind:"error",text:`⏭ waiting on job type(s) with no worker registered: ${c.join(", ")}`}}case"idle":return{kind:"step",text:"Nothing to step — no instance is running."};default:return{kind:"step",text:e.reason?`Step blocked on an unrecognized reason: ${e.reason}`:"Nothing to step — no instance is running."}}}const fi="the Scripted or Endpoint brain";async function pn(e=fi){const n=navigator.gpu;if(!n)return`This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick ${e}.`;let t;try{t=await n.requestAdapter()}catch(r){return`WebGPU adapter request failed (${r instanceof Error?r.message:String(r)}). Try ${e} instead.`}return t?null:`This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick ${e} instead.`}const wi=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function Ct(e){return An.get(e)??{}}const An=new Map;async function yi(){if(An.size>0)return;const{prebuiltAppConfig:e}=await he(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)An.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const bn=wi.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...Ct(e.id)})),Dt=bn[0].id;async function vi(){return await yi(),bn.map(e=>({...e,...Ct(e.id)}))}function Bt(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function Mi(e,n=Bt()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function xi(e){try{const{hasModelInCache:n}=await he(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function un(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function et(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class dn{constructor(){L(this,"kind","browser");L(this,"model",null);L(this,"engine",null);L(this,"worker",null);L(this,"generation",0);L(this,"chat",async(n,t=512,r)=>{var s,d;const o=this.engine;if(!o||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const c=await o.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let u="";for await(const a of c){const p=((d=(s=a.choices[0])==null?void 0:s.delta)==null?void 0:d.content)??"";p&&(u+=p,r==null||r(p))}return u}catch(c){const u=c instanceof Error?c.message:String(c);throw un(u)?(this.teardown(),new Error(`The in-browser model stopped: ${et()}`)):c}})}async connect(n=Dt,t){var u,a;const r=await pn();if(r)throw new Error(r);if(this.engine&&this.model===n)return n;const o=++this.generation,s=p=>{o===this.generation&&(t==null||t({progress:p.progress??0,text:p.text??""}))};this.teardown();let d,c;try{const{CreateWebWorkerMLCEngine:p}=await he(async()=>{const{CreateWebWorkerMLCEngine:h}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:h}},[]);c=new Worker(new URL("/pr-preview/pr-108/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),d=await p(c,n,{initProgressCallback:s})}catch(p){if(c==null||c.terminate(),o!==this.generation)throw new Error("cancelled");const h=p instanceof Error?p.message:String(p);if(un(h))throw new Error(`Couldn't load ${n} in the browser (${h}). ${et()}`);const l=(a=(u=bn.find(_=>_.id===n))==null?void 0:u.requiredFeatures)==null?void 0:a.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${h}). `+(l?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(o!==this.generation)throw d.unload().catch(()=>{}),c==null||c.terminate(),new Error("cancelled");return this.engine=d,this.worker=c??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const Lt="http://localhost:11434/v1";function hn(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(r=>(r=globalThis.location)==null?void 0:r.origin)()??""}){let o;try{o=new URL(Rt(e)).hostname}catch{return null}const s=d=>d==="localhost"||d==="127.0.0.1"||d==="::1"||d==="[::1]";return!s(o)||s(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function Rt(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class nt extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class tt{constructor(n=Lt,t="",r=""){L(this,"kind","endpoint");L(this,"baseUrl");L(this,"model",null);L(this,"models",[]);L(this,"apiKey");L(this,"requestedModel");L(this,"chat",async(n,t=512,r)=>{var a,p,h;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const o=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!o.ok||!o.body){const l=await o.text().catch(()=>"");throw new Error(`chat/completions HTTP ${o.status} ${o.statusText}${l?` — ${l.slice(0,300)}`:""}`)}const s=o.body.getReader(),d=new TextDecoder;let c="",u="";for(;;){const{value:l,done:_}=await s.read();if(_)break;c+=d.decode(l,{stream:!0});let y;for(;(y=c.indexOf(`
`))>=0;){const M=c.slice(0,y).trim();if(c=c.slice(y+1),!M.startsWith("data:"))continue;const v=M.slice(5).trim();if(v==="[DONE]")continue;let g;try{g=JSON.parse(v)}catch{continue}g.model&&(this.model=g.model);const k=(a=g.choices)==null?void 0:a[0],B=((p=k==null?void 0:k.delta)==null?void 0:p.content)??((h=k==null?void 0:k.message)==null?void 0:h.content)??"";B&&(u+=B,r==null||r(B))}}return u});this.baseUrl=Rt(n),this.apiKey=t.trim(),this.requestedModel=r.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(r){const o=hn(this.baseUrl);throw new Error(o??`Can't reach ${this.baseUrl} (${r instanceof Error?r.message:String(r)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new nt(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(r=>r.id).filter(r=>!!r),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof nt&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(r=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${r instanceof Error?r.message:String(r)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const r=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${r?` — ${r.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}const rt="gemini-nano";function gn(){const e=globalThis.LanguageModel;return typeof(e==null?void 0:e.create)=="function"&&typeof e.availability=="function"?e:null}function Ni(){return gn()!==null}async function Ft(){const e=gn();if(!e)return"This browser has no built-in AI model. Chrome's Prompt API (Gemini Nano) needs Chrome 138+ on desktop Windows 10/11, macOS 13+, Linux or a Chromebook Plus. Use the Scripted, In-browser (WebGPU) or API endpoint brain instead.";let n;try{n=await e.availability()}catch(t){return`Chrome couldn't report on its built-in model (${t instanceof Error?t.message:String(t)}).`}return n==="unavailable"?"Chrome exposes the built-in AI API here, but Gemini Nano can't run on this device. Chrome requires ~22 GB free on the volume holding your Chrome profile, and either a GPU with more than 4 GB of VRAM or 16 GB of RAM with 4+ CPU cores. Check chrome://on-device-internals for the details.":null}class it{constructor(){L(this,"kind","chrome");L(this,"model",null);L(this,"warm",null);L(this,"connecting",null);L(this,"chat",async(n,t,r)=>{if(!this.model)throw new Error("ChromeBrain.chat called before connect()");const o=gn();if(!o)throw new Error("Chrome's built-in AI API went away.");const s=n.filter(u=>u.role==="system"),d=n.filter(u=>u.role!=="system"),c=await o.create(s.length?{initialPrompts:s}:void 0);try{const u=c.promptStreaming(d).getReader();let a="";for(;;){const{done:p,value:h}=await u.read();if(p)break;h&&(a+=h,r==null||r(h))}return a}finally{c.destroy()}})}async connect(n){const t=await Ft();if(t)throw new Error(t);const r=gn();this.dispose();const o=new AbortController;this.connecting=o;try{this.warm=await r.create({signal:o.signal,monitor:s=>{s.addEventListener("downloadprogress",d=>{n==null||n({progress:d.loaded,text:"Downloading Gemini Nano"})})}})}catch(s){if(o.signal.aborted)throw new Error("cancelled");const d=s instanceof Error?s.message:String(s);throw new Error(`Chrome couldn't start its built-in model (${d}). The first run downloads Gemini Nano and must be triggered by a click — press Connect again, and check chrome://on-device-internals if it keeps failing.`)}finally{this.connecting=null}return this.model=rt,rt}cancelConnect(){var n;(n=this.connecting)==null||n.abort()}dispose(){var n,t;(n=this.connecting)==null||n.abort(),this.connecting=null,(t=this.warm)==null||t.destroy(),this.warm=null,this.model=null}}const Ei=[{id:"onnx-community/Florence-2-base-ft",label:"Florence-2 base",downloadLabel:"~0.4 GB"},{id:"onnx-community/Florence-2-large-ft",label:"Florence-2 large (higher quality)",downloadLabel:"~1.6 GB"}],zt=Ei.map(e=>({...e,label:`${e.label} (${e.downloadLabel})`})),Ot=zt[0].id,ki="<OCR>",ot="UNKNOWN (scripted brain — connect the in-browser model to read a photo)";function Ii(e,n){if(e)return typeof e=="function"?e(n):e[n]}class Ti{constructor(n){L(this,"kind","scripted-vision");L(this,"model",null);L(this,"read",async(n,t,r)=>{const o=typeof n=="string"?Ii(this.lookup,n)??ot:ot;return r==null||r(o),o});this.lookup=n}dispose(){}}function ji(e){return new Ti(e)}class at{constructor(){L(this,"kind","browser-vision");L(this,"model",null);L(this,"modelHandle",null);L(this,"processor",null);L(this,"loadImage",null);L(this,"generation",0);L(this,"read",async(n,t,r)=>{const o=this.modelHandle,s=this.processor,d=this.loadImage;if(!o||!s||!d||!this.model)throw new Error("BrowserVisionBrain.read called before connect()");const c=t&&t.startsWith("<")?t:ki,u=await d(n),a=s.construct_prompts(c),p=await s(u,a),h=await o.generate({...p,max_new_tokens:512,num_beams:1,do_sample:!1}),l=s.batch_decode(h,{skip_special_tokens:!1})[0],_=s.post_process_generation(l,c,u.size),y=Si(_,c);return r==null||r(y),y})}async connect(n=Ot,t){var c,u;const r=await pn("the scripted-vision fallback");if(r)throw new Error(r);if(this.modelHandle&&this.model===n)return n;const o=++this.generation,s=a=>{o===this.generation&&(t==null||t({progress:(a.progress??0)/100,text:a.file?`${a.status??"loading"} ${a.file}`:a.status??""}))};this.teardown();let d;try{const{Florence2ForConditionalGeneration:a,AutoProcessor:p,load_image:h}=await he(async()=>{const{Florence2ForConditionalGeneration:y,AutoProcessor:M,load_image:v}=await import("./transformers.web-B4WergNL.js");return{Florence2ForConditionalGeneration:y,AutoProcessor:M,load_image:v}},[]),l=await a.from_pretrained(n,{dtype:"fp32",device:"webgpu",progress_callback:s}),_=await p.from_pretrained(n);d={model:l,processor:_,loadImage:h}}catch(a){if(o!==this.generation)throw new Error("cancelled");const p=a instanceof Error?a.message:String(a);throw new Error(`Couldn't load ${n} in the browser (${p}). Try the smaller Florence-2 base model, check your connection, or use the scripted-vision fallback.`)}if(o!==this.generation)throw Promise.resolve((u=(c=d.model).dispose)==null?void 0:u.call(c)).catch(()=>{}),new Error("cancelled");return this.modelHandle=d.model,this.processor=d.processor,this.loadImage=d.loadImage,this.model=n,n}teardown(){var t;const n=this.modelHandle;this.modelHandle=null,this.processor=null,this.loadImage=null,this.model=null,Promise.resolve((t=n==null?void 0:n.dispose)==null?void 0:t.call(n)).catch(()=>{})}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}function Si(e,n){const t=e[n];if(typeof t=="string")return t.trim();if(t&&typeof t=="object"){const r=t.labels;return Array.isArray(r)?r.join(" ").trim():JSON.stringify(t)}return""}function Pi(){const[e,n]=b.useState("scripted"),[t,r]=b.useState("idle"),[o,s]=b.useState(null),[d,c]=b.useState(null),[u,a]=b.useState(null),[p,h]=b.useState(null),[l,_]=b.useState(null),[y,M]=b.useState(null),[v,g]=b.useState(null),[k,B]=b.useState(Dt),[O,oe]=b.useState(Lt),[Z,Ee]=b.useState(""),[ke,ye]=b.useState([]),[Ie,$]=b.useState("idle"),[ae,Q]=b.useState(null),[T,j]=b.useState(""),[N,U]=b.useState(null),G=b.useRef(null),[ge,ve]=b.useState("scripted-vision"),[Ye,Me]=b.useState("idle"),[_n,be]=b.useState(null),[Te,nn]=b.useState(Ot),[fn,Re]=b.useState(null),[Qe,K]=b.useState(null),[se,wn]=b.useState(null),[qe,xe]=b.useState(null),X=b.useRef(null),Fe=b.useRef(!1),R=b.useRef(0),pe=b.useCallback(I=>async(...q)=>{try{return await I.chat(...q)}catch(D){const W=D instanceof Error?D.message:String(D);throw I instanceof dn&&un(W)&&(U(null),c(null),r("error"),s(W)),D}},[]),je=b.useCallback(I=>async(...q)=>{try{return await I.read(...q)}catch(D){const W=D instanceof Error?D.message:String(D);throw un(W)&&(xe(null),Re(null),Me("error"),be(W)),D}},[]);b.useEffect(()=>{pn().then(I=>{_(I),h(I===null)}),Ft().then(g),pn("the scripted-vision fallback").then(I=>{wn(I),Fe.current||(Fe.current=!0,ve(I===null?"browser-vision":"scripted-vision"))})},[]),b.useEffect(()=>{let I=!1;return M(null),xi(k).then(q=>{I||M(q)}),()=>{I=!0}},[k]),b.useEffect(()=>()=>{var I;return(I=G.current)==null?void 0:I.dispose()},[]),b.useEffect(()=>()=>{var I;return(I=X.current)==null?void 0:I.dispose()},[]);const Se=b.useCallback(I=>{n(I),r("idle"),s(null),c(null),a(null),U(null)},[]),tn=b.useCallback(I=>{var q,D;Fe.current=!0,(q=X.current)==null||q.cancelConnect(),(D=X.current)==null||D.dispose(),X.current=null,ve(I),Me("idle"),be(null),Re(null),K(null),xe(null)},[]),de=b.useCallback(()=>{var I;(I=G.current)==null||I.dispose(),G.current=null,U(null),c(null)},[]),Ue=b.useCallback(()=>{const I=G.current;(I instanceof dn||I instanceof it)&&I.cancelConnect(),de(),r("idle"),a(null),s(null)},[de]),$e=b.useCallback(async()=>{const I=++R.current,q=()=>I!==R.current,D=hn(O);if(D){ye([]),$("error"),Q(D);return}$("loading"),Q(null);const W=new tt(O,T);try{const Ae=await W.listModels();if(q())return;ye(Ae),$("ready"),Ee(He=>He&&Ae.includes(He)?He:Ae[0]??"")}catch(Ae){if(q())return;ye([]),Ee(""),$("error"),Q(Ae instanceof Error?Ae.message:String(Ae))}finally{W.dispose()}},[O,T]),rn=b.useCallback(async()=>{var I,q;if(e==="scripted"){U(null),r("ready");return}if(e==="endpoint"){const D=hn(O);if(D){de(),s(D),r("error");return}}r("connecting"),s(null),a(null);try{if(e==="browser"){const D=G.current instanceof dn?G.current:new dn;G.current&&G.current!==D&&G.current.dispose(),G.current=D;const W=await D.connect(k,a);c(W),U(()=>pe(D)),M(!0)}else if(e==="chrome"){(I=G.current)==null||I.dispose();const D=new it;G.current=D;const W=await D.connect(a);g(null),c(W),U(()=>pe(D))}else{(q=G.current)==null||q.dispose();const D=new tt(O,T,Z);G.current=D;const W=await D.connect();c(W),U(()=>pe(D))}r("ready")}catch(D){const W=D instanceof Error?D.message:String(D);if(W==="cancelled")return;s(W),r("error"),U(null)}finally{a(null)}},[e,k,O,Z,T,de,pe]),Pe=b.useCallback(()=>{var I;(I=X.current)==null||I.dispose(),X.current=null,xe(null),Re(null)},[]),Le=b.useCallback(()=>{var I;(I=X.current)==null||I.cancelConnect(),Pe(),Me("idle"),K(null),be(null)},[Pe]),Je=b.useCallback(async()=>{if(ge==="scripted-vision"){Pe(),Me("ready"),be(null);return}Me("connecting"),be(null),K(null);try{const I=X.current instanceof at?X.current:new at;X.current&&X.current!==I&&X.current.dispose(),X.current=I;const q=await I.connect(Te,K);Re(q),xe(()=>je(I)),Me("ready")}catch(I){const q=I instanceof Error?I.message:String(I);if(q==="cancelled")return;be(q),Me("error"),xe(null),Re(null)}finally{K(null)}},[ge,Te,Pe,je]);return{kind:e,setKind:Se,status:t,error:o,modelInUse:d,progress:u,webgpu:p,webgpuReason:l,browserModelCached:y,chromeAiReason:v,cancelConnect:Ue,browserModel:k,setBrowserModel:B,endpointUrl:O,setEndpointUrl:oe,endpointModel:Z,setEndpointModel:Ee,endpointModels:ke,endpointModelsStatus:Ie,endpointModelsError:ae,listEndpointModels:$e,apiKey:T,setApiKey:j,connect:rn,chat:N,visionKind:ge,setVisionKind:tn,visionStatus:Ye,visionError:_n,visionModel:Te,setVisionModel:nn,visionModelInUse:fn,visionProgress:Qe,visionWebgpuReason:se,connectVision:Je,cancelVisionConnect:Le,vision:qe}}const Cn="#s=",Ai=["scripted","browser","chrome","endpoint"];function Ci(e){return typeof e=="string"&&Ai.includes(e)}function Di(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,r={};return Ci(t.brain)&&(r.brain=t.brain),r}}catch{}return{}}function Ut(e=location.hash){if(!e.startsWith(Cn))return{};let n;try{n=decodeURIComponent(e.slice(Cn.length))}catch{return{}}return Di(n)}function Bi(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":Cn+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function Li(e){const n={...Ut(),...e},t=Bi(n),r=new URL(location.href);r.hash=t,history.replaceState(history.state,"",r)}const st=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"chrome",label:"Chrome built-in",hint:"Gemini Nano, built into Chrome. Chrome owns the weights — no download from this page, no API key."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server. Ollama by default. Local pages only."}],dt=[{kind:"scripted-vision",label:"Scripted",hint:"No model. The example's known plate is returned — deterministic and offline."},{kind:"browser-vision",label:"In-browser (WebGPU)",hint:"Reads the photo with a vision model on your GPU. First run downloads weights."}];function Ri({brain:e,showText:n=!0,showVision:t=!1}){return i.jsxs("div",{className:"brain",children:[n&&i.jsx(Fi,{brain:e}),n&&t&&i.jsx("hr",{className:"brain-divider"}),t&&i.jsx(zi,{brain:e})]})}function Fi({brain:e}){const n=st.find(l=>l.kind===e.kind),t=st.filter(l=>l.kind!=="chrome"||Ni()),r=hn(e.endpointUrl),[o,s]=b.useState(bn);b.useEffect(()=>{vi().then(s)},[]);const{kind:d,endpointUrl:c,apiKey:u,listEndpointModels:a}=e;b.useEffect(()=>{if(d!=="endpoint"||r)return;const l=setTimeout(()=>void a(),400);return()=>clearTimeout(l)},[d,c,u,r,a]);const p=o.find(l=>l.id===e.browserModel),h=p?Mi(p,Bt()):null;return i.jsxs("div",{className:"brain-section",children:[i.jsxs("div",{className:"brain-modes",children:[i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Agent brain",children:t.map(l=>i.jsx(H,{size:"sm",variant:e.kind===l.kind?"default":"secondary","aria-pressed":e.kind===l.kind,onClick:()=>e.setKind(l.kind),children:l.label},l.kind))}),i.jsxs("div",{className:"brain-status",children:[e.status==="ready"&&e.kind!=="scripted"&&i.jsx(ie,{variant:"success",className:"brain-status-badge",children:e.modelInUse??"connected"}),e.status==="connecting"&&i.jsx(ie,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.status==="error"&&i.jsx(ie,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Ve,{htmlFor:"browser-model",children:"Model"}),i.jsxs(Nn,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[i.jsx(En,{id:"browser-model",children:i.jsx(kn,{})}),i.jsx(In,{children:o.map(l=>i.jsx(Tn,{value:l.id,children:l.label},l.id))})]}),e.browserModelCached===!0&&i.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&i.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"No WebGPU in this browser"}),i.jsx(me,{children:e.webgpuReason})]}),e.webgpu!==!1&&h&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"This model may not fit in GPU memory"}),i.jsx(me,{children:h})]})]}),e.kind==="chrome"&&i.jsxs("div",{className:"brain-config",children:[i.jsx("p",{className:"field-hint",children:"Nothing to configure: Chrome downloads and manages Gemini Nano itself, so the first Connect may fetch it once and later visits reuse it. Prompts never leave your machine. It's a very small model — expect it to follow the tool-calling format less reliably than an endpoint model."}),e.chromeAiReason&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Chrome's built-in model isn't available here"}),i.jsx(me,{children:e.chromeAiReason})]})]}),e.kind==="endpoint"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Ve,{htmlFor:"endpoint-url",children:"Endpoint"}),i.jsx(Yn,{id:"endpoint-url",value:e.endpointUrl,onChange:l=>e.setEndpointUrl(l.target.value),disabled:e.status==="connecting"}),i.jsxs("p",{className:"field-hint",children:["Ollama allows ",i.jsx("code",{children:"localhost"})," origins out of the box; set"," ",i.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}),r&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"A local server won't work from this URL"}),i.jsx(me,{children:r})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(Ve,{htmlFor:"endpoint-model",children:"Model"}),i.jsxs("div",{className:"endpoint-model-row",children:[i.jsxs(Nn,{value:e.endpointModel,onValueChange:e.setEndpointModel,disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||e.endpointModels.length===0,children:[i.jsx(En,{id:"endpoint-model",className:"endpoint-model-select",children:i.jsx(kn,{placeholder:e.endpointModelsStatus==="loading"?"Loading models…":e.endpointModelsStatus==="idle"?"Enter an endpoint above":e.endpointModelsStatus==="error"?"No models — check the endpoint":e.endpointModels.length===0?"No models served":"Select a model"})}),i.jsx(In,{children:e.endpointModels.map(l=>i.jsx(Tn,{value:l,children:l},l))})]}),i.jsx(H,{size:"sm",variant:"secondary",onClick:()=>void e.listEndpointModels(),disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||r!==null,children:e.endpointModelsStatus==="loading"?"Refreshing…":"Refresh"})]}),i.jsxs("p",{className:"field-hint",children:["Fetched from the endpoint's ",i.jsx("code",{children:"/models"}),". Tiny models (e.g. SmolLM2) usually can't follow the tool-calling format — prefer ",i.jsx("code",{children:"llama3.2:3b"}),", ",i.jsx("code",{children:"qwen2.5"})," or larger."]}),e.endpointModelsStatus==="error"&&!r&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Couldn't list models"}),i.jsx(me,{children:e.endpointModelsError})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(Ve,{htmlFor:"endpoint-key",children:"API key (optional)"}),i.jsx(Yn,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:l=>e.setApiKey(l.target.value),disabled:e.status==="connecting"})]})]}),e.kind!=="scripted"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(H,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting"||e.kind==="chrome"&&e.chromeAiReason!==null||e.kind==="endpoint"&&(e.endpointModel===""||e.endpointModelsStatus==="loading"||r!==null),children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&(e.kind==="browser"||e.kind==="chrome")&&i.jsx(H,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.progress&&i.jsx("div",{className:"brain-progress",role:"progressbar","aria-valuenow":Math.round(e.progress.progress*100),"aria-valuemin":0,"aria-valuemax":100,children:i.jsx("div",{className:"brain-progress-bar",style:{width:`${Math.round(e.progress.progress*100)}%`}})}),e.error&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Couldn't connect"}),i.jsx(me,{children:e.error})]})]})}function zi({brain:e}){const n=dt.find(t=>t.kind===e.visionKind);return i.jsxs("div",{className:"brain-section brain-vision",children:[i.jsx(Ve,{children:"Vision (reads the image)"}),i.jsxs("div",{className:"brain-modes",children:[i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Vision brain",children:dt.map(t=>i.jsx(H,{size:"sm",variant:e.visionKind===t.kind?"default":"secondary","aria-pressed":e.visionKind===t.kind,onClick:()=>e.setVisionKind(t.kind),children:t.label},t.kind))}),i.jsxs("div",{className:"brain-status",children:[e.visionStatus==="ready"&&e.visionKind==="browser-vision"&&i.jsx(ie,{variant:"success",className:"brain-status-badge",children:e.visionModelInUse??"connected"}),e.visionStatus==="connecting"&&i.jsx(ie,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.visionStatus==="error"&&i.jsx(ie,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.visionKind==="scripted-vision"&&e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"No WebGPU in this browser"}),i.jsx(me,{children:e.visionWebgpuReason})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Ve,{htmlFor:"vision-model",children:"Model"}),i.jsxs(Nn,{value:e.visionModel,onValueChange:e.setVisionModel,disabled:e.visionStatus==="connecting",children:[i.jsx(En,{id:"vision-model",children:i.jsx(kn,{})}),i.jsx(In,{children:zt.map(t=>i.jsx(Tn,{value:t.id,children:t.label},t.id))})]}),i.jsx("p",{className:"field-hint",children:"Connecting downloads the weights once (size shown above), then caches them — every token is read on your GPU, no server."})]}),e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"No WebGPU in this browser"}),i.jsx(me,{children:e.visionWebgpuReason})]})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(H,{size:"sm",onClick:()=>void e.connectVision(),disabled:e.visionStatus==="connecting",children:e.visionStatus==="ready"?"Reconnect":"Connect"}),e.visionStatus==="connecting"&&i.jsx(H,{size:"sm",variant:"secondary",onClick:e.cancelVisionConnect,children:"Cancel"}),e.visionProgress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.visionProgress.progress*100),"% —"," ",e.visionProgress.text]})]}),e.visionError&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Couldn't connect the vision brain"}),i.jsx(me,{children:e.visionError})]})]})}function Oi({imageInput:e,value:n,onSelect:t,disabled:r=!1}){const[o,s]=b.useState(null),[d,c]=b.useState(!1),u=b.useRef(null),a=b.useId(),p=b.useId(),h=b.useCallback(y=>{s(URL.createObjectURL(y)),t({imageName:y.name,pixels:y})},[t]);b.useEffect(()=>{if(o)return()=>URL.revokeObjectURL(o)},[o]);const l=b.useCallback(y=>{const M=y==null?void 0:y[0];M&&M.type.startsWith("image/")&&h(M)},[h]),_=(n==null?void 0:n.imageId)!=null?e.seedImages.find(y=>y.id===n.imageId):void 0;return i.jsxs("div",{className:"image-input",children:[e.label&&i.jsx("p",{className:"field-hint",children:e.label}),i.jsx("p",{className:"image-input-label",id:a,children:"Seed photos"}),i.jsx("div",{className:"image-gallery",role:"group","aria-labelledby":a,children:e.seedImages.map(y=>{const M=(n==null?void 0:n.imageId)===y.id;return i.jsxs("button",{type:"button","aria-pressed":M,className:`image-thumb${M?" image-thumb--selected":""}`,disabled:r,title:y.label??y.id,onClick:()=>{s(null),u.current&&(u.current.value=""),t({imageId:y.id,pixels:y.file})},children:[i.jsx("img",{src:y.thumb??y.file,alt:y.label??y.id}),y.label&&i.jsx("span",{children:y.label})]},y.id)})}),i.jsx("label",{className:"image-input-label",htmlFor:p,children:"Or upload your own photo"}),i.jsxs("div",{className:`image-drop${d?" image-drop--over":""}`,onDragOver:y=>{y.preventDefault(),r||c(!0)},onDragLeave:()=>c(!1),onDrop:y=>{y.preventDefault(),c(!1),r||l(y.dataTransfer.files)},children:[i.jsx("input",{ref:u,id:p,type:"file",accept:"image/*",disabled:r,onChange:y=>l(y.target.files)}),i.jsx("p",{className:"field-hint",children:"Drag a photo here, or pick one. Uploading a photo the model has never seen is the proof this runs for real — nothing leaves your browser."})]}),(o||_)&&i.jsxs("div",{className:"image-preview",children:[i.jsx("img",{src:o??(_==null?void 0:_.file),alt:o?(n==null?void 0:n.imageName)??"uploaded photo":(_==null?void 0:_.label)??(_==null?void 0:_.id)??"selected photo"}),i.jsx("span",{className:"field-hint",children:o?`Uploaded: ${(n==null?void 0:n.imageName)??"your photo"}`:`Selected: ${(_==null?void 0:_.label)??(_==null?void 0:_.id)}`}),i.jsx("button",{type:"button",className:"image-clear-btn",disabled:r,onClick:()=>{s(null),u.current&&(u.current.value=""),t(null)},children:"Clear"})]})]})}function $t(e){return typeof e=="object"&&e!==null}function Id(e){const n=new Set,t=r=>{$t(r)&&(typeof r.key=="string"&&n.add(r.key),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function Ui(e){const n={},t=r=>{$t(r)&&(typeof r.key=="string"&&"defaultValue"in r&&(n[r.key]=r.defaultValue??""),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}const $i="wdf:section:v2:";function Gt(e){return $i+e}function lt(e){try{const n=window.localStorage.getItem(Gt(e));return n==="1"?!0:n==="0"?!1:void 0}catch{return}}function Gi(e,n){try{window.localStorage.setItem(Gt(e),n?"1":"0")}catch{}}function Bn(e,n=!0){const[t,r]=b.useState(()=>lt(e)??n);b.useEffect(()=>{r(lt(e)??n)},[e,n]);const o=b.useCallback(s=>{r(s),Gi(e,s)},[e]);return[t,o]}function Oe({sectionId:e,title:n,description:t,defaultOpen:r=!0,className:o,children:s,...d}){const[c,u]=Bn(e,r);return i.jsx(Zt,{className:["panel",o].filter(Boolean).join(" "),"data-tour":d["data-tour"],children:i.jsxs(Kt,{open:c,onOpenChange:u,children:[i.jsxs(Xt,{className:"panel-trigger",children:[i.jsxs("span",{className:"panel-trigger-text",children:[i.jsx("span",{className:"panel-title",children:n}),t!=null&&i.jsx("span",{className:"panel-desc",children:t})]}),i.jsx(er,{className:"panel-chevron","aria-hidden":!0})]}),i.jsx(nr,{children:i.jsx(tr,{children:s})})]})})}function Vi(e){return e.entries!==void 0}function Yi(e){const n=[];let t=null;for(const r of e)r.turn!==void 0?t&&t.turn===r.turn?t.entries.push(r):(t={turn:r.turn,entries:[r]},n.push(t)):(t=null,n.push(r));return n}function ct(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Qi({activation:e,result:n,labelFor:t}){const r=e.elementId??"";return i.jsxs("div",{className:"timeline-tool",children:[i.jsxs("div",{className:"timeline-tool-head",children:[i.jsx(ie,{variant:"info",children:"tool"}),i.jsx("strong",{children:t(r)||r}),i.jsx("code",{children:r})]}),e.args!==void 0&&Object.keys(e.args).length>0&&i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"arguments"}),i.jsx("code",{children:ct(e.args)})]}),i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"returned"}),i.jsx("code",{children:n?ct(n.result):"— waiting for the job to complete —"})]})]})}function qi({group:e,labelFor:n}){const t=e.entries.find(a=>a.kind==="llm"),r=e.entries.filter(a=>a.kind==="agent"&&a.elementId),o=e.entries.filter(a=>a.kind==="vars"&&a.elementId),s=e.entries.filter(a=>a.kind==="agent"&&!a.elementId),d=e.entries.filter(a=>a.kind==="error"),c=new Set(r.map(a=>a.elementId)),u=e.entries.filter(a=>a.kind==="tool"||a.kind==="vars"&&a.elementId&&!c.has(a.elementId)).sort((a,p)=>a.id-p.id);return i.jsxs("div",{className:"timeline-turn",children:[i.jsxs("div",{className:"timeline-turn-head",children:[i.jsxs(ie,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&i.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&i.jsx("blockquote",{className:"timeline-reply",children:t.text}),s.map(a=>i.jsx("div",{className:"timeline-note",children:a.text},a.id)),r.map(a=>i.jsx(Qi,{activation:a,result:o.find(p=>p.elementId===a.elementId),labelFor:n},a.id)),u.map(a=>i.jsxs("div",{className:`log-line log-${a.kind}`,children:[a.pending?"⏳ ":"",a.text]},a.id)),d.map(a=>i.jsxs("div",{className:"timeline-error",children:["⚠ ",a.text]},a.id))]})}function Ji({log:e,elementStats:n=[],incidents:t=[],labelFor:r=s=>s,variables:o}){const s=b.useMemo(()=>Yi(e),[e]),[d,c]=b.useState(!1),[u,a]=Bn("engine-view",!1),p=b.useRef(null);b.useEffect(()=>{const l=p.current;l&&(l.scrollTop=l.scrollHeight)},[s]);const h=()=>{var y;const l={log:e.map(({id:M,...v})=>v),elementStats:n,incidents:t},_=JSON.stringify(l,null,2);(y=navigator.clipboard)!=null&&y.writeText&&navigator.clipboard.writeText(_).then(()=>{c(!0),setTimeout(()=>c(!1),1500)}).catch(()=>{})};return i.jsxs(Oe,{sectionId:"activity",className:"grow activity-card",title:"Agent activity",description:"Agent turns, model replies, and tool calls — read top to bottom as a story.",children:[i.jsx("div",{className:"timeline-toolbar",children:i.jsx(H,{variant:"secondary",size:"sm",onClick:h,children:d?"Copied!":"Copy run as JSON"})}),i.jsx("div",{className:"timeline",ref:p,children:s.length===0?i.jsx("div",{className:"log-empty",children:"Press Run or Step to start."}):s.map(l=>Vi(l)?i.jsx(qi,{group:l,labelFor:r},`turn-${l.turn}-${l.entries[0].id}`):i.jsxs("div",{className:`log-line log-${l.kind}`,children:[l.pending?"⏳ ":"",l.text]},l.id))}),o,(n.length>0||t.length>0)&&i.jsxs("details",{className:"engine-view",open:u,onToggle:l=>a(l.currentTarget.open),children:[i.jsxs("summary",{children:["Element completion",t.length>0&&` · ${t.length} incident${t.length===1?"":"s"}`]}),i.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&i.jsxs("div",{className:"timeline-stats",children:[i.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),i.jsx("ul",{children:n.filter(l=>l.completed>0||(l.active??0)>0).map(l=>i.jsxs("li",{children:[i.jsx("code",{children:r(l.elementId)||l.elementId})," ","completed ",l.completed,l.active?`, ${l.active} active`:""]},l.elementId))})]}),t.length>0&&i.jsxs("div",{className:"timeline-incidents",children:[i.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),i.jsx("ul",{children:t.map((l,_)=>i.jsxs("li",{children:[i.jsx("code",{children:r(l.elementId)||l.elementId})," —"," ",l.reason]},`${l.elementId}-${_}`))})]})]})]})]})}const Ne={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function mt(e){return`[data-tour="${e}"]`}function Hi(e=location.search){return new URLSearchParams(e).get("tour")}function Wi(e,n){var t;return((t=e.elementStats.find(r=>r.elementId===n))==null?void 0:t.completed)??0}function Zi(e,n){return!e||e.kind==="click"||!n?!1:e.kind==="activeElement"?n.activeElementIds.includes(e.elementId):Wi(n,e.elementId)>=(e.atLeast??1)}function Ki(e){return"anchor"in e?mt(e.anchor):`${mt(Ne.diagram)} [data-element-id="${Xi(e.elementId)}"]`}function Xi(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function eo(e){return e.map(n=>{const t=!!n.waitFor&&n.waitFor.kind!=="click";return{element:Ki(n.target),popover:{title:n.title,description:t?`${n.description} (continues automatically once you reach that point — or use Next to skip ahead)`:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}})}async function no(e,n={}){var s;const[{driver:t}]=await Promise.all([he(()=>import("./driver.js-bj_ppY-Q.js"),[]),he(()=>Promise.resolve({}),__vite__mapDeps([0]))]),r=eo(e),o=t({steps:r,showProgress:!0,allowClose:!0,skipMissingElement:!0,onHighlighted:(d,c,{index:u})=>{var a;u!==void 0&&((a=n.onIndexChange)==null||a.call(n,u))},onDestroyed:()=>{var d;(d=n.onDestroyed)==null||d.call(n)}});return o.drive(),(s=n.onIndexChange)==null||s.call(n,o.getActiveIndex()??0),{moveNext:()=>o.moveNext(),activeIndex:()=>o.getActiveIndex()??-1,destroy:()=>o.destroy()}}const to=300;function ro(e,n){const[t,r]=b.useState(!1),o=b.useRef(null),s=b.useRef(0),d=b.useRef(-1),c=b.useRef(null),u=b.useRef(n);b.useEffect(()=>{u.current=n},[n]);const a=b.useCallback(()=>{c.current!==null&&(clearInterval(c.current),c.current=null)},[]),p=b.useRef(0),h=b.useCallback(()=>{var _;p.current+=1,a(),(_=o.current)==null||_.destroy(),o.current=null,r(!1)},[a]),l=b.useCallback(()=>{if(!e||e.steps.length===0||o.current)return;const _=p.current+=1;no(e.steps,{onIndexChange:y=>{s.current=y},onDestroyed:()=>{a(),o.current=null,r(!1)}}).then(y=>{if(_!==p.current){y.destroy();return}o.current=y,r(!0),c.current=setInterval(()=>{const M=s.current;if(M===d.current)return;const v=e.steps[M];v&&Zi(v.waitFor,u.current())&&(d.current=M,y.moveNext())},to)})},[e,a]);return b.useEffect(()=>h,[h]),{active:t,start:l,stop:h}}const Ce=650,vn="__agent__",pt="__model__",ut="__template__:",io=b.lazy(async()=>{await Promise.all([he(()=>Promise.resolve({}),__vite__mapDeps([1])),he(()=>Promise.resolve({}),__vite__mapDeps([2])),he(()=>Promise.resolve({}),__vite__mapDeps([3]))]);const{RuntimeDiagram:e}=await he(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-DTnJz5cT.js");return{RuntimeDiagram:n}},__vite__mapDeps([4,5,6]));return{default:e}}),Mn=b.lazy(()=>he(()=>import("./MonacoEditor-ROQOcYNG.js").then(e=>e.M),__vite__mapDeps([7,5,8]))),oo=b.lazy(()=>he(()=>import("./vendor-modeler-Df7L48VE.js"),__vite__mapDeps([9,5,6,10,11,12,13,1,2,3]))),ht=b.lazy(async()=>{const{FormRenderer:e}=await he(async()=>{const{FormRenderer:n}=await import("./FormRenderer-BsxhE9zt.js");return{FormRenderer:n}},__vite__mapDeps([14,5,12,10,11,15]));return{default:e}});function mn(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function ao(e){const n=mn(e).replace(/\s+/g," ");return n.length>78?`${n.slice(0,78)}…`:n}function so({example:e,compact:n=!1,initialBrainKind:t,initialTourId:r}){var Rn,Fn,zn,On,Un,$n,Gn,Vn;const[o,s]=b.useState(e.bpmn),d=Pi(),[c,u]=b.useState(null);b.useEffect(()=>{t&&t!==d.kind&&d.setKind(t)},[]),b.useEffect(()=>{Li({brain:d.kind})},[d.kind]);const[a,p]=b.useState(()=>Object.fromEntries(e.handlers.map(w=>[w.elementId,w.source]))),[h,l]=b.useState(e.scriptedAgent??""),[_,y]=b.useState(()=>en(e.templates)),M=b.useMemo(()=>Ur(e,a,o,_),[e,a,o,_]),v=M.model,g=gi({bpmn:M.resolvedBpmn}),k=ro(e.tour,()=>g.snapshot);b.useEffect(()=>{var w;r&&((w=e.tour)==null?void 0:w.id)===r&&k.start()},[]);const B=v.startFormId?((Rn=e.forms)==null?void 0:Rn[v.startFormId])??null:null,[O,oe]=b.useState(()=>({...e.seed,...B?Ui(B):{}})),[Z,Ee]=b.useState(v.agent?vn:((Fn=e.handlers[0])==null?void 0:Fn.elementId)??""),ke=b.useMemo(()=>{const w=(e.scenarios??[]).findIndex(x=>Object.entries(x.variables).every(([E,C])=>JSON.stringify(O[E])===JSON.stringify(C)));return w===-1?null:w},[e.scenarios,O]),[ye,Ie]=Bn(n?"start-compact":"start",n?!1:!!B),[$,ae]=b.useState(!1),[Q,T]=b.useState(!1),[j,N]=b.useState(null),[U,G]=b.useState([]),[ge,ve]=b.useState({}),Ye=b.useMemo(()=>({...e.seed,...O,...Mr(e.imageInput?c:null)}),[e.seed,e.imageInput,O,c]),[Me,_n]=b.useState(null),be=b.useRef(null),[Te,nn]=b.useState({}),[fn,Re]=b.useState(!1),Qe=b.useRef(null),K=b.useRef(!1),se=b.useRef(0),wn=b.useRef(0),qe=b.useRef({current:void 0}),xe=b.useRef({}),X=b.useRef({}),Fe=b.useMemo(()=>{const w=new Map;for(const x of v.processes){for(const E of x.tasks)w.set(E.elementId,E.label);for(const E of x.agents){w.set(E.elementId,E.label);for(const C of E.tools)w.set(C.elementId,C.label)}for(const E of x.userTasks)w.set(E.elementId,E.label)}return x=>w.get(x)??x},[v]),R=b.useCallback(w=>{G(x=>{if(w.key){const E=x.findIndex(C=>C.key===w.key);if(E>=0){const C=[...x];return C[E]={...C[E],...w},C}}return[...x,{...w,id:wn.current++}].slice(-80)})},[]),pe=b.useMemo(()=>{var w;return((w=g.snapshot)==null?void 0:w.userTasks.find(x=>x.state==="Created"))??null},[g.snapshot]),je=b.useMemo(()=>{const w=v.processes.flatMap(E=>E.tasks),x=new Map;for(const E of e.handlers){if(!E.manualControl)continue;const C=w.find(P=>P.elementId===E.elementId);C&&x.set(C.jobType,{...E.manualControl,elementId:E.elementId})}return x},[e.handlers,v]),Se=b.useMemo(()=>{if(!g.snapshot)return null;for(const w of g.snapshot.jobs){const x=je.get(w.jobType);if(x&&w.state==="Created")return{job:w,control:x}}return null},[g.snapshot,je]),tn=b.useMemo(()=>{if(!v.agent||!g.snapshot)return[];const w=new Map(g.snapshot.elementStats.map(x=>[x.elementId,x.completed]));return v.agent.tools.filter(x=>(w.get(x.elementId)??0)===0)},[v.agent,g.snapshot]),de=pe?v.userTasks.find(w=>w.elementId===pe.elementId):void 0,Ue=de!=null&&de.formId?((zn=e.forms)==null?void 0:zn[de.formId])??null:null,$e=b.useCallback(async(w,x,E,C)=>{var ue,te,fe;let P=E,_e=0;for(;se.current===C&&P&&P.completedInstances<1&&_e++<80;){const Y=await g.stepWorkers(w,{agents:x});if(se.current!==C)return P;P=(Y==null?void 0:Y.snapshot)??P;const re=(ue=P.instances[0])==null?void 0:ue.variables;if(re&&ve({...re}),P.userTasks.some(J=>J.state==="Created")){R({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!Y){R({kind:"error",text:"▶ run stopped — no dispatch round was returned"});break}if(Y.handled===0){const J=P.messageSubscriptions[0];if(Y.reason==="messages"&&J){if(R({kind:"step",text:`⏳ parked on a message catch event — waiting for "${J.messageName}"`,elementId:J.elementId}),await new Promise(ee=>setTimeout(ee,Ce)),se.current!==C)return P;R({kind:"vars",text:`📨 correlating message "${J.messageName}" (key: ${J.correlationKey})`,elementId:J.elementId});const V=g.correlateMessage(J.messageName,J.correlationKey,"{}");if(V){P=V;const ee=(te=P.instances[0])==null?void 0:te.variables;ee&&ve({...ee}),await new Promise(we=>setTimeout(we,Ce));continue}R({kind:"error",text:`▶ run stopped — correlating "${J.messageName}" (key: ${J.correlationKey}) failed`,elementId:J.elementId})}if(Y.reason==="signals"&&P.signalSubscriptions.length>0){const V=P.signalSubscriptions[0],ee=P.signalSubscriptions.length;if(R({kind:"step",text:`⏳ parked on ${ee} open signal subscription${ee===1?"":"s"} — waiting for "${V.signalName}"`,elementId:V.elementId}),await new Promise(Ge=>setTimeout(Ge,Ce)),se.current!==C)return P;const we=g.broadcastSignal(V.signalName,"{}");if(we){P=we,R({kind:"vars",text:`📡 broadcasting signal "${V.signalName}" — every waiting subscription unblocks`,elementId:V.elementId});const Ge=(fe=P.instances[0])==null?void 0:fe.variables;Ge&&ve({...Ge}),await new Promise(qt=>setTimeout(qt,Ce));continue}R({kind:"error",text:`▶ run stopped — broadcasting signal "${V.signalName}" failed`,elementId:V.elementId})}if(Y.reason==="timers"){const V=P.timers.reduce((ee,we)=>Math.min(ee,we.dueInMs),1/0);if(Number.isFinite(V)){if(R({kind:"step",text:`⏳ parked on a timer — ${(Math.max(V,0)/1e3).toFixed(1)}s left on the clock`}),await new Promise(we=>setTimeout(we,Ce)),se.current!==C)return P;const ee=g.advanceTime(Math.max(V,0)+1);if(ee){P=ee,R({kind:"step",text:"🕐 the clock advanced — timer fired"}),await new Promise(we=>setTimeout(we,Ce));continue}}}break}await new Promise(J=>setTimeout(J,Ce))}return se.current!==C||(P&&P.completedInstances>=1?R({kind:"done",text:"✅ process instance completed"}):P&&P.incidentElementIds.length>0&&R({kind:"error",text:"A job failed — incident on the diagram"})),P},[g,R]),rn=b.useCallback(async w=>{var P,_e,ue;if(!Se||K.current)return;const{job:x,control:E}=Se,C=++se.current;K.current=!0,ae(!0);try{let te,fe;if(w==="complete")te=g.completeJobManually(x.jobType,"{}"),fe="  ↳ completed normally";else if(E.action.kind==="timer"){const Y=((_e=(P=g.snapshot)==null?void 0:P.timers[0])==null?void 0:_e.dueInMs)??0;te=g.advanceTime(Math.max(Y,0)+1),fe="  ↳ advanced the clock — timer fired"}else{const{errorCode:Y,message:re}=E.action;te=g.throwJobError(x.jobType,Y,re),fe=`  ↳ threw BPMN error ${Y}: ${re}`}if(te){R({kind:"vars",text:fe,elementId:x.elementId});const Y=(ue=te.instances[0])==null?void 0:ue.variables;Y&&ve({...Y}),await new Promise(re=>setTimeout(re,Ce)),await $e(xe.current,X.current,te,C)}else R({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:x.elementId})}finally{se.current===C&&(K.current=!1,ae(!1))}},[Se,g,R,$e]),Pe=b.useCallback(async()=>{var Y;let w=null;try{v.agent&&h.trim()&&(w=Sr(h))}catch(re){return N(re instanceof Error?re.message:String(re)),null}qe.current={current:void 0};let x;if(e.imageInput){const re=d.vision;x={read:re??ji(e.scriptedVision).read,live:!!re,resolve:V=>g.getRunImage(V)}}const E=Cr(v,M.handlers,R,qe.current,x);for(const re of je.keys())delete E[re];const C={};if(v.agents.length>0){if(d.kind!=="scripted"&&d.chat){const J=new Map;for(const V of v.agents)J.set(V.jobType,[...J.get(V.jobType)??[],V]);for(const[V,ee]of J)C[V]=Wr(ee,d.chat,R,{turnRef:qe.current,requiredTools:e.requiredTools})}else if(w&&v.agent){const J=v.agent.elementId;C[v.agent.jobType]=async V=>{if(V.elementId!==J)throw new Error(`No scripted agent handler for "${V.elementId}" — only "${J}" (the primary process's first agent host) is driven by the scripted brain. Use a live brain to exercise more than one host.`);const ee=await w(V),we=(ee.activateElements??[]).map(Ge=>Ge.elementId).join(", ");return R({kind:"agent",text:ee.completionConditionFulfilled?"🤖 scripted agent: done":`🤖 scripted agent: calling ${we||"(nothing)"}`}),ee}}}G([]),nn({});const P=Ye;ve(P),xe.current=E,X.current=C;const _e=await g.redeploy(o),ue=(_e==null?void 0:_e[0])??v.processId;R({kind:"start",text:`Starting "${ue}" — ${v.agent?d.kind==="scripted"||!d.chat?"scripted brain":`live brain (${d.modelInUse??d.kind})`:"no agent in this model"}`});const te=g.createInstance(ue,JSON.stringify(P)),fe=(Y=te==null?void 0:te.instances[0])==null?void 0:Y.key;return e.imageInput&&c&&fe&&g.setRunImage(fe,c),{workers:E,agents:C,snap:te}},[g,e,M,o,h,O,c,Ye,v,d,R,je]),Le=!!g.snapshot&&g.snapshot.completedInstances<1,Je=!Le&&!!B&&Me!==!0,q=ye||n&&(!Le&&!!B&&Me===!1),D=b.useCallback(async()=>{if(g.phase!=="ready"||K.current||Q||M.hasErrors)return;K.current=!0,ae(!0);const w=++se.current;try{let x=xe.current,E=X.current,C=g.snapshot;if(!Le){if(be.current&&!be.current.validate())return;N(null);const P=await Pe();if(!P)return;x=P.workers,E=P.agents,C=P.snap,await new Promise(_e=>setTimeout(_e,Ce))}await $e(x,E,C,w)}finally{se.current===w&&(K.current=!1,ae(!1))}},[g,Q,M.hasErrors,Le,Pe,$e]),W=b.useCallback(async()=>{var x;if(g.phase!=="ready"||K.current||Q||M.hasErrors)return;K.current=!0,T(!0);const w=++se.current;try{let E=xe.current,C=X.current,P=g.snapshot;if(!Le){if(be.current&&!be.current.validate())return;N(null);const Y=await Pe();if(!Y)return;E=Y.workers,C=Y.agents,P=Y.snap}if(!P||P.completedInstances>=1)return;const _e=P.takenSequenceFlows.length,ue=await g.stepWorkers(E,{agents:C});if(!ue){R({kind:"error",text:"⏭ step failed — no dispatch round was returned"});return}const te=(x=ue.snapshot.instances[0])==null?void 0:x.variables;te&&ve({...te});const fe=bi(ue.snapshot.takenSequenceFlows,_e);R(_i(ue,fe,Fe,je))}finally{se.current===w&&(K.current=!1,T(!1))}},[g,Q,M.hasErrors,Le,Pe,R,Fe,je]),Ae=b.useCallback(async()=>{K.current=!1,se.current++,ae(!1),T(!1),K.current=!0;try{await g.reset()}finally{K.current=!1}G([]),ve({})},[g]),He=b.useCallback(()=>{var E;if(!pe||Qe.current&&!Qe.current.validate())return;const w=g.completeUserTask(pe.key,JSON.stringify(Te));R({kind:"human",text:`👤 ${mn(Te)}`});const x=(E=w==null?void 0:w.instances[0])==null?void 0:E.variables;ve(C=>({...C,...Te,...x??{}})),w&&w.completedInstances>=1&&R({kind:"done",text:"✅ process instance completed"})},[pe,Te,g,R]),Yt=b.useMemo(()=>{var w,x;return g.phase==="loading"?i.jsx(ie,{variant:"neutral",children:"Booting engine…"}):g.phase==="error"?i.jsx(ie,{variant:"danger",children:"Engine error"}):$?i.jsx(ie,{variant:"info",children:"Running…"}):Q?i.jsx(ie,{variant:"info",children:"Stepping…"}):(((w=g.snapshot)==null?void 0:w.incidentElementIds.length)??0)>0?i.jsx(ie,{variant:"danger",children:"Incident"}):pe?i.jsx(ie,{variant:"warning",children:"Waiting for a human"}):(((x=g.snapshot)==null?void 0:x.completedInstances)??0)>=1?i.jsx(ie,{variant:"success",children:"Completed"}):g.snapshot?i.jsx(ie,{variant:"warning",children:"Paused"}):i.jsx(ie,{variant:"neutral",children:"Ready"})},[g.phase,g.snapshot,$,Q,pe]),Qt=b.useMemo(()=>e.blurb.split(/\n\s*\n/).map(w=>w.trim()).filter(Boolean),[e.blurb]);return i.jsxs("div",{className:"runner",children:[n?i.jsx("h1",{className:"visually-hidden",children:e.title}):i.jsxs("section",{className:"intro",children:[i.jsx("h1",{children:e.title}),Qt.map(w=>i.jsx("p",{children:w},w))]}),e.imageInput&&i.jsx(Oi,{imageInput:e.imageInput,value:c,onSelect:u,disabled:$}),i.jsxs("div",{className:"scenario",children:[i.jsx("span",{className:"scenario-label",id:"scenario-label",children:e.scenariosLabel??"Example input"}),e.scenarios&&i.jsx("div",{className:"scenario-toggle",role:"group","aria-labelledby":"scenario-label",children:e.scenarios.map((w,x)=>i.jsx(H,{size:"sm",variant:x===ke?"default":"secondary","aria-pressed":x===ke,disabled:$,onClick:()=>oe(E=>({...E,...w.variables})),children:w.label},w.label))}),i.jsxs("button",{type:"button",className:"scenario-input-button",onClick:()=>Ie(!q),"aria-expanded":q,"aria-controls":"start-input-editor",title:"Edit the starting payload",children:[i.jsx("span",{className:"scenario-edit-icon","aria-hidden":!0,children:"✎"})," ","input: ",i.jsx("code",{children:ao(O)})]}),Je&&i.jsx("span",{className:"scenario-hint",children:"Fill in the input to enable Run"})]}),i.jsxs("div",{className:"inline-input-editor",id:"start-input-editor",hidden:!q,children:[i.jsxs("div",{className:"inline-input-editor-head",children:[i.jsxs("div",{children:[i.jsx("div",{className:"inline-input-editor-title",children:v.startFormId?"Start form":"Start payload"}),i.jsx("div",{className:"inline-input-editor-copy",children:v.startFormId?`Rendered from the model's start form "${v.startFormId}".`:"The variables the instance starts with."})]}),i.jsx(H,{size:"sm",variant:"secondary",onClick:()=>Ie(!1),children:"Done"})]}),B?i.jsx(b.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(ht,{ref:be,schema:B,values:O,onChange:(w,x)=>oe(E=>({...E,[w]:x})),disabled:$,onValidityChange:_n})}):i.jsx("pre",{className:"vars",children:mn(O,2)})]}),!n&&(v.agent||e.imageInput)&&i.jsx(Oe,{sectionId:"brain",className:"brain-card","data-tour":Ne.brainPanel,title:"Agent brain",description:v.agent?`What drives “${v.agent.label}”. The model recommends; the process governs.`:"What reads the image. The model recommends; the process governs.",children:i.jsx(Ri,{brain:d,showText:!!v.agent,showVision:!!e.imageInput})}),i.jsxs("div",{className:"controls",children:[i.jsx(H,{"data-tour":Ne.runButton,onClick:()=>void D(),disabled:g.phase!=="ready"||$||Q||M.hasErrors||Je,children:"▶ Run"}),i.jsx(H,{variant:"secondary",onClick:()=>void W(),disabled:g.phase!=="ready"||$||Q||M.hasErrors||Je||(((On=g.snapshot)==null?void 0:On.completedInstances)??0)>=1,children:"⏭ Step"}),i.jsx(H,{variant:"secondary",onClick:()=>void Ae(),disabled:g.phase!=="ready"||Q,children:"↺ Reset"}),e.tour&&i.jsx(H,{variant:"secondary",onClick:k.start,disabled:k.active,children:k.active?"Touring…":`🧭 ${e.tour.label}`}),Yt]}),g.phase==="error"&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Engine error"}),i.jsx(me,{children:g.error})]}),j&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Code didn't compile"}),i.jsx(me,{children:j})]}),M.hasErrors&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Run is disabled — the diagram has unresolved references"}),i.jsx(me,{children:i.jsx("ul",{className:"diagnostics",children:M.diagnostics.filter(w=>w.severity==="error").map((w,x)=>i.jsx("li",{children:w.message},x))})})]}),!M.hasErrors&&M.diagnostics.length>0&&i.jsxs(le,{children:[i.jsx(ce,{children:"Heads up"}),i.jsx(me,{children:i.jsx("ul",{className:"diagnostics",children:M.diagnostics.map((w,x)=>i.jsx("li",{children:w.message},x))})})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"col",children:[i.jsx(Oe,{sectionId:"process","data-tour":Ne.diagram,title:"Process",description:`${v.processName} — live token (green), incidents (red).`,children:i.jsx(b.Suspense,{fallback:i.jsx("div",{className:"diagram-fallback",children:g.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:i.jsx(io,{xml:M.resolvedBpmn,activeIds:((Un=g.snapshot)==null?void 0:Un.activeElementIds)??[],incidentIds:(($n=g.snapshot)==null?void 0:$n.incidentElementIds)??[],className:"diagram"})})}),pe&&i.jsxs(Oe,{sectionId:"human-task",title:(de==null?void 0:de.label)??"Human task",description:Ue?`Rendered from the model's form "${de==null?void 0:de.formId}".`:"This task has no linked form — complete it with no variables.",children:[tn.length>0&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"The agent didn't finish its checks"}),i.jsxs(me,{children:["It completed without running"," ",tn.map(w=>w.label||w.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),Ue&&i.jsx(b.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(ht,{ref:Qe,schema:Ue,values:Te,onChange:(w,x)=>nn(E=>({...E,[w]:x})),context:ge,onValidityChange:Re})}),i.jsx(H,{onClick:He,disabled:!!Ue&&!fn,children:"Complete task"})]}),Se&&i.jsx(Oe,{sectionId:"manual-job",title:Se.control.label,description:"This job is held here on purpose — pick how it resolves.",children:i.jsxs("div",{className:"controls",children:[i.jsx(H,{onClick:()=>void rn("complete"),disabled:$||Q,children:Se.control.completeLabel??"✅ Complete normally"}),i.jsx(H,{variant:"secondary",onClick:()=>void rn("action"),disabled:$||Q,children:Se.control.action.label})]})})]}),i.jsx("div",{className:"col",children:i.jsx(Ji,{log:U,elementStats:(Gn=g.snapshot)==null?void 0:Gn.elementStats,incidents:(Vn=g.snapshot)==null?void 0:Vn.incidents,labelFor:Fe,variables:i.jsxs("div",{className:"vars-block","data-tour":Ne.variablesPanel,children:[i.jsx("div",{className:"vars-head",children:"Instance variables"}),i.jsx("pre",{className:"vars",children:mn(Object.keys(ge).length>0?ge:Ye,2)})]})})})]}),!n&&i.jsxs("div",{className:"runner-secondary",children:[i.jsx(Oe,{sectionId:"code",className:"editors","data-tour":Ne.codePanel,defaultOpen:!1,title:"Code",description:"One handler per BPMN element, plus a model tab holding the editable diagram — select an element there to edit its properties. Return variables to merge, or throw to fail the job.",children:i.jsx(b.Suspense,{fallback:i.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:i.jsxs(rr,{value:Z,onValueChange:Ee,children:[i.jsxs(ir,{children:[i.jsx(on,{value:pt,children:"model"}),v.agent&&i.jsx(on,{value:vn,children:"agent (scripted)"}),e.handlers.map(w=>{var x;return i.jsx(on,{value:w.elementId,children:((x=v.tasks.find(E=>E.elementId===w.elementId))==null?void 0:x.label)??w.elementId},w.elementId)}),Object.keys(_).map(w=>i.jsx(on,{value:ut+w,children:w},w))]}),i.jsxs(an,{value:pt,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:"Model"}),i.jsx("code",{children:"click an element to edit its properties on the right — Run re-reads whatever you leave here"}),i.jsx(H,{variant:"secondary",size:"sm",onClick:()=>s(e.bpmn),disabled:o===e.bpmn,children:"Revert to original"})]}),i.jsx(oo,{value:o,onChange:s})]}),v.agent&&i.jsxs(an,{value:vn,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:v.agent.label}),i.jsx("code",{children:d.kind==="scripted"||!d.chat?"in use":"unused — a live brain is connected"})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(Mn,{height:"360px",defaultLanguage:"javascript",value:h,onChange:w=>l(w??""),options:xn})})]}),e.handlers.map(w=>{var x;return i.jsxs(an,{value:w.elementId,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:((x=v.tasks.find(E=>E.elementId===w.elementId))==null?void 0:x.label)??w.elementId}),i.jsx("code",{children:w.standsInFor??w.elementId})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(Mn,{height:"360px",defaultLanguage:"javascript",value:a[w.elementId],onChange:E=>p(C=>({...C,[w.elementId]:E??""})),options:xn})})]},w.elementId)}),Object.keys(_).map(w=>i.jsxs(an,{value:ut+w,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:w}),i.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+w+"}}"]})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(Mn,{height:"360px",defaultLanguage:"markdown",value:_[w],onChange:x=>y(E=>en(E,{[w]:x??""})),options:xn})})]},w))]})})}),v.agent&&i.jsx(Oe,{sectionId:"tools",defaultOpen:!1,title:"Tools, as the model sees them",description:i.jsxs(i.Fragment,{children:["Read from the diagram — element name, documentation, and every",i.jsx("code",{children:" fromAi(…)"})," argument."]}),children:i.jsx("ul",{className:"tool-list",children:v.agent.tools.map(w=>i.jsxs("li",{children:[i.jsx("code",{children:w.elementId}),i.jsxs("span",{children:[" — ",w.documentation||w.label]}),w.args.length>0&&i.jsx("ul",{children:w.args.map(x=>i.jsxs("li",{children:[i.jsxs("code",{children:[x.name,": ",x.type]})," ","— ",x.description]},x.name))})]},w.elementId))})})]})]})}const xn={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},lo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,co=`async (job, { sleep }) => {
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
}`,mo=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above; this body
  // does not run either. Unlike Activity_guarded, this task has no boundary
  // event: firing its error action has nothing to catch it, so it becomes an
  // incident instead of a handled alternate path. Completing it normally
  // completes the job with {} — no trace line, no shipped/tracking variables
  // — and the token reaches "Order shipped".
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,po={id:"learn-error-boundary",title:"Error boundary event",group:"learn-bpmn",blurb:["A boundary event attached to a task catches something that happens while the task is running and reroutes the token — here, a thrown BPMN error.",'Hit Run and the process stops at "Charge payment (guarded)" with a card under the diagram offering two buttons: press "Simulate: card declined" and watch the attached boundary event catch the error, skipping straight to "Handled — order cancelled".','Then Reset, complete that first job normally, and decline the second one on "Ship items (unguarded)" — this time it becomes an incident, because that task has no boundary event and the engine has nothing to reroute the token with.',`That's exactly what breaks if you forget the boundary event (or give it the wrong errorRef): a failure that should be a modelled alternate path becomes a stuck instance a human has to resolve by hand. Complete both jobs normally instead to see the unattended happy path all the way to "Order shipped".`].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/boundary-events/",bpmn:lo,seed:{},handlers:[{elementId:"Activity_guarded",standsInFor:"job worker — charge-payment",source:co,manualControl:{label:"Charge payment (guarded)",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_unguarded",standsInFor:"job worker — ship-items",source:mo,manualControl:{label:"Ship items (unguarded)",completeLabel:"✅ Ship it",action:{kind:"error",errorCode:"CARRIER_REJECTED",message:"The carrier rejected the shipment — nothing catches this.",label:"❌ Simulate: carrier rejected (becomes an incident)"}}}]},uo=Object.freeze(Object.defineProperty({__proto__:null,default:po},Symbol.toStringTag,{value:"Module"})),ho=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,go=`async (job, { num, trace, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const orderTotal = num("orderTotal", 40);

  await sleep(300);

  // This is the variable the gateway's conditional sequence flow reads —
  // whatever this handler decides is what actually steers the token.
  const route = orderTotal >= 100 ? "express" : "standard";
  trace(\`order total $\${orderTotal} -> route: \${route}\`);

  // Whatever you return is merged onto the process instance.
  return { route };
}`,bo=`async (job, { trace, sleep }) => {
  trace("expedited courier picks up the order");
  await sleep(400);

  return { shipped: true, method: "express" };
}`,_o=`async (job, { trace, sleep }) => {
  trace("order queued for standard courier pickup");
  await sleep(400);

  return { shipped: true, method: "standard" };
}`,fo={id:"learn-exclusive-gateway",title:"Exclusive gateway",group:"learn-bpmn",blurb:["An exclusive gateway is the fork in the road: exactly one of its outgoing sequence flows is taken, chosen by evaluating each flow's FEEL condition in declaration order, first match wins. A default flow (drawn with a slash through its start, not a diamond marker) has no condition and is the fallback taken when every conditional flow evaluates false — that's what makes an exclusive gateway safe to deploy without an explicit case for every value.",`Run this and watch 'Check order total' decide a route variable, then watch the gateway send the token down 'Express ship' when the order is large enough, or 'Standard ship' otherwise (the default flow). Try both from the Start panel on the right: it holds a "Small order" and a "Large order" button that swap the payload for you.`,"To see the conditions themselves, open the model tab in the Code panel and click either arrow leaving the gateway — the FEEL is under Condition. Get one wrong (or misspell the variable name) and the flow you meant to take is silently skipped in favour of whichever one does evaluate true, or the default if none do — no error, just the wrong branch."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/gateways/gateways/#exclusive-gateway",bpmn:ho,seed:{orderTotal:40},scenarios:[{label:"Small order — standard ship (default flow)",variables:{orderTotal:40}},{label:"Large order — express ship (conditional flow)",variables:{orderTotal:150}}],handlers:[{elementId:"Activity_check_order",standsInFor:"job worker — check-order-total",source:go},{elementId:"Activity_express_ship",standsInFor:"job worker — express-ship",source:bo},{elementId:"Activity_standard_ship",standsInFor:"job worker — standard-ship",source:_o}]},wo=Object.freeze(Object.defineProperty({__proto__:null,default:fo},Symbol.toStringTag,{value:"Module"})),yo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,vo=`async (job, { text, trace }) => {
  const orderId = text("orderId", "unknown-order");

  trace("shipment confirmed for " + orderId + " — recording it");

  return { shipmentRecorded: true };
}`,Mo={id:"learn-message-correlation",title:"Message catch event + correlation key",group:"learn-bpmn",blurb:[`A message intermediate catch event pauses the token until a message with a matching name and correlation key is published — the BPMN analogue of "wait for this specific order's shipment to be confirmed", not just "wait for any shipment-confirmed message".`,"Run this and watch the token park on the catch event; there's no external broker in the browser, so the page correlates the message itself once the wait is reached, echoing back the exact correlationKey (`=orderId`) the subscription resolved to — the Activity panel logs the wait and the correlation as separate lines — then the token resumes into Record confirmation and on to the end event.",'To see where that key comes from: in the Code panel, open the model tab, click "Wait for shipment confirmed", and expand Message in the properties panel on the right. Subscription correlation key holds `orderId` (the `=` beside the box marks it as a FEEL expression), and Name holds `shipment-confirmed` — those two together are what a publisher has to match. Edit them freely; because this page publishes the key the subscription itself resolved, the run stays self-consistent either way.','In a real deployment, where a separate system does the publishing, pointing that expression at a variable the instance never sets leaves the catch event waiting forever, and omitting zeebe:subscription altogether is rejected at deploy time with "has no zeebe:subscription correlationKey" — docs/engine-coverage.md records both.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/message-events/",bpmn:yo,seed:{orderId:"ORD-42"},handlers:[{elementId:"Activity_record",standsInFor:"job worker — record-confirmation",source:vo}]},xo=Object.freeze(Object.defineProperty({__proto__:null,default:Mo},Symbol.toStringTag,{value:"Module"})),No=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Eo=`async (job, { text, sleep, trace }) => {
  // Each parallel instance gets its own 'item' from the input collection.
  const item = text("item", "widget");

  trace("processing " + item);
  await sleep(400);

  // Whatever you return is merged onto this instance's scope, then collected
  // into the process-level 'results' array via outputElement/outputCollection.
  return { result: item.toUpperCase() + "-DONE" };
}`,ko={id:"learn-multi-instance-parallel",title:"Parallel multi-instance",group:"learn-bpmn",blurb:["A multi-instance activity runs its task once per element of a collection, spawning that many job instances of the same element in parallel, and only lets the token move on once every one of them completes.",`Run this and watch three 'Process item' jobs activate together for apple, banana, cherry, and complete (in any order) before the process reaches its end event. Nothing about the diagram says "three" — that comes from the collection, so use the buttons in the Start panel on the right to swap between one, three, and six items and hit Run again; the Activity panel logs one 'Process item' line per element, so the fan-out is right there to count.`,'The property tying the two together is in the Code panel: open the model tab, click "Process item", and expand Multi-instance in the properties panel on the right — Input collection holds `items`, the FEEL expression naming the variable to fan out over. Drop it entirely and the activity silently degenerates to a single ordinary instance, with no error to tell you it happened. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/multi-instance/",bpmn:No,seed:{items:["apple","banana","cherry"]},scenarios:[{label:"One item — a single instance",variables:{items:["apple"]}},{label:"Three items — fans out to three",variables:{items:["apple","banana","cherry"]}},{label:"Six items — fans out to six",variables:{items:["apple","banana","cherry","damson","elderberry","fig"]}}],handlers:[{elementId:"Activity_process",standsInFor:"job worker — process-item",source:Eo}]},Io=Object.freeze(Object.defineProperty({__proto__:null,default:ko},Symbol.toStringTag,{value:"Module"})),To=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,jo=`async (job, { text, sleep, trace }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "widget");

  trace("packing " + item);
  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { packed: true };
}`,So=`async (job, { sleep, trace }) => {
  trace("handing over to the courier");
  await sleep(400);

  return { dispatched: true, tracking: "SVC" + Math.floor(Math.random() * 1e9) };
}`,Po={id:"learn-service-task",title:"Service task + sequence flow",group:"learn-bpmn",blurb:["A service task is a unit of work a worker (not a human) performs; a sequence flow is the arrow that hands the token from one to the next once its task completes.","Run this and watch each task activate, run its handler, and complete in order — Prepare package, then Dispatch courier — before the process reaches its end event.",`The link between the two halves is the job type: in the Code panel, open the model tab, click "Prepare package", and expand Task definition in the properties panel on the right — Job type is the name a worker has to subscribe to in order to be handed this task's work.`,"(This page wires its own handlers up from whatever the model declares, so renaming it here keeps working; on a real cluster the worker is a separate process started with a job type of its own, and a mismatch means nobody ever activates the job, so the run stalls forever.)"].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/service-tasks/",bpmn:To,seed:{item:"camunda-t-shirt"},handlers:[{elementId:"Activity_prepare",standsInFor:"job worker — prepare-package",source:jo},{elementId:"Activity_dispatch",standsInFor:"job worker — dispatch-courier",source:So}]},Ao=Object.freeze(Object.defineProperty({__proto__:null,default:Po},Symbol.toStringTag,{value:"Module"})),Co=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Do=`async (job, { sleep, trace }) => {
  trace("all-clear received — resuming operations");
  await sleep(400);

  return { resumed: true };
}`,Bo=`async (job, { sleep, trace }) => {
  trace("same all-clear — reopening the floor");
  await sleep(400);

  return { floorReopened: true };
}`,Lo={id:"learn-signal-broadcast",title:"Signal intermediate catch event + broadcast",group:"learn-bpmn",blurb:["A signal intermediate catch event parks the token until someone broadcasts a signal by name. Unlike a message, a signal isn't correlated to one waiting instance — broadcasting it unblocks every open subscription for that name at once.",`That's why this model forks: both "Ops waits for all-clear" and "Floor waits for all-clear" park on the same signal, and one broadcast releases the pair together, so 'Resume operations' and 'Reopen the floor' both run before the join lets the token reach the end event. Run it and watch both branches light up off a single broadcast — the Activity panel says "parked on 2 open signal subscriptions" before the one 📡 line that releases them both. A message could not do that, because a correlation key targets exactly one waiting subscription.`,"To see the name being matched: in the Code panel, open the model tab, click either catch event, and expand Signal in the properties panel on the right — Name holds `all-clear`. Each catch event owns its own signal definition, so editing the name there changes only that branch: do it on one of them and hit Run, and the panel now reports two broadcasts instead of one, because the branches no longer share a name and each needs its own. The count of broadcasts is exactly the count of distinct signal names being waited on."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/signal-events/signal-event/",bpmn:Co,seed:{},handlers:[{elementId:"Activity_resume",standsInFor:"job worker — resume-operations",source:Do},{elementId:"Activity_reopen",standsInFor:"job worker — reopen-floor",source:Bo}]},Ro=Object.freeze(Object.defineProperty({__proto__:null,default:Lo},Symbol.toStringTag,{value:"Module"})),Fo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,zo=`async (job, { sleep, trace }) => {
  trace("the timer fired — sending the reminder now");
  await sleep(400);

  return { reminderSent: true };
}`,Oo={id:"learn-timer-catch-event",title:"Timer intermediate catch event",group:"learn-bpmn",blurb:["A timer catch event parks the token until a point in time — here, a fixed duration after the token arrives.","Run this and read the Activity panel: the token parks on the timer with nothing else happening ('parked on a timer — 3.0s left on the clock'), then the clock is fast-forwarded to the due time ('the clock advanced — timer fired') and the token resumes on its own: 'Send the reminder' activates, runs, and the process completes. Nothing needs to poll or push it forward; the engine itself wakes the instance when the timer's due time passes. (This page fast-forwards a virtual clock so the 3-second wait doesn't cost you 3 real seconds — a live deployment waits the actual PT3S.)",'To change the wait: in the Code panel, open the model tab, click "Wait 3 seconds", and expand Timer in the properties panel on the right — Type is Duration and Value holds the ISO-8601 duration, so PT30S or PT5M works the same way. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/timer-events/timer-event-type/",bpmn:Fo,seed:{},handlers:[{elementId:"Activity_after_timer",standsInFor:"job worker — send-reminder",source:zo}]},Uo=Object.freeze(Object.defineProperty({__proto__:null,default:Oo},Symbol.toStringTag,{value:"Module"})),$o=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Go="Camunda Cloud",Vo="8.10.0",Yo={name:"Camunda Web Modeler",version:"9b5d5ef"},Qo=19,qo="learn-user-task-form-review",Jo=[{text:`# Review request

A request is waiting for you. Decide whether to approve or reject it, then submit.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Requester:** {{requester}}

**Details:** {{details}}`,type:"text",layout:{row:"Row_details",columns:null},id:"Field_ReviewDetails"},{label:"Decision",values:[{label:"Approve",value:"approved"},{label:"Reject",value:"rejected"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_ReviewDecision",key:"decision",validate:{required:!0}},{label:"Comments",description:"Optional note recorded alongside your decision.",type:"textarea",layout:{row:"Row_comments",columns:null},id:"Field_ReviewComments",key:"comments"}],Ho="default",Wo={executionPlatform:Go,executionPlatformVersion:Vo,exporter:Yo,schemaVersion:Qo,id:qo,components:Jo,type:Ho},Zo={id:"learn-user-task-form",title:"User task + form",group:"learn-bpmn",blurb:["A user task is a step a human completes, not a worker — the token parks at the task until someone submits its form, then moves on.","Run this and watch the process reach 'Review request' and wait; fill in the decision form that appears in its own card under the diagram and press Complete task to see the token resume and the process reach its end event.",'What binds that form to the task is one property: in the Code panel, open the model tab, click "Review request", and expand Form in the properties panel on the right — Form ID names the form the runner looks up and renders. A user task with no form binding still deploys and still parks the token, but the runner has nothing to render for it, so it offers a bare Complete button that finishes the task with no variables. Revert to original puts the binding back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/user-tasks/",bpmn:$o,forms:{"learn-user-task-form-review":Wo},seed:{requester:"Priya Shah",details:"Approve access to the shared design-review workspace."},handlers:[]},Ko=Object.freeze(Object.defineProperty({__proto__:null,default:Zo},Symbol.toStringTag,{value:"Module"})),Xo=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,ea=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,na={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:Ne.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"},waitFor:{kind:"activeElement",elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"},waitFor:{kind:"elementCompleted",elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:Ne.variablesPanel}}],successEvent:{kind:"instanceCompleted"}},ta=`<?xml version="1.0" encoding="UTF-8"?>
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
`,ra="Camunda Cloud",ia="8.10.0",oa={name:"Camunda Web Modeler",version:"9b5d5ef"},aa=19,sa="seed-export-shipment-ready",da=[{text:"# Use a predefined scenario...",type:"text",layout:{row:"Row_04pl1rt",columns:null},id:"Field_0a6kzzq"},{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Use pre-defined sceanrio - to use leave Shipment notes below blank.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{text:`The following shipments notes are used:
* Likely cleared: SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53.
* Likely flagged: SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1.`,type:"text",layout:{row:"Row_1h31mub",columns:null},id:"Field_0j1vwd9"},{text:"# ...or hand in your own data",type:"text",layout:{row:"Row_1wu4opr",columns:null},id:"Field_12u5gzd"},{label:"Shipment notes",description:"If set, overrides the scenario above. Leave blank to use the scenario selected above. The agent reads this to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],la="default",ca={executionPlatform:ra,executionPlatformVersion:ia,exporter:oa,schemaVersion:aa,id:sa,components:da,type:la},ma="Camunda Cloud",pa="8.10.0",ua={name:"Camunda Web Modeler",version:"9b5d5ef"},ha=19,ga="seed-export-compliance-review",ba=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],_a="default",fa={executionPlatform:ma,executionPlatformVersion:pa,exporter:ua,schemaVersion:ha,id:ga,components:ba,type:_a},wa=Object.assign({"./prompts/system-prompt.md":Xo,"./prompts/user-prompt.md":ea}),ya=en(Object.fromEntries(Object.entries(wa).map(([e,n])=>[St(e),n.trimEnd()]))),gt="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",va="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",Ma=`async (job) => {
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
}`,xa=`async (job, { text, sleep, trace }) => {
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
}`,Na=`async (job, { text, sleep, trace }) => {
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
}`,Ea=`async (job, { num, sleep }) => {
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
}`,ka=`async (job, { text, trace }) => {
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
}`,Ia=`async (job, { sleep }) => {
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
}`,Ta={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",hero:{headline:"The LLM *recommends*. The process *governs*.",lede:"An agentic ad-hoc sub-process chooses its own compliance checks, but the gateway after it — not the model — decides whether a shipment ships or goes to a human.",tagline:"Anatomy of an enterprise agent"},docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:ta,forms:{"seed-export-shipment-ready":ca,"seed-export-compliance-review":fa},seed:{scenario:gt,shipmentNotes:""},scenariosLabel:"Example shipment",scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:gt,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:va,shipmentNotes:""}}],scriptedAgent:Ma,templates:ya,tour:na,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:xa},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:Na},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:Ea},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:ka},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:Ia}]},ja=`You are a loan origination assistant at a retail bank. Your job is to gather everything a senior loan officer needs to decide an application — you do **not** decide it yourself.

Work through the case with the tools available to you:

- **Query customer** — find the applicant's existing relationship with the bank.
- **Credit bureau lookup** — pull their credit report.
- **Assess application** — run the bank's underwriting policy to get a debt-to-income ratio, a risk band, and a recommendation. Always run this; the officer's review depends on it.
- **Update application status** — mark the case as \`under-review\` once you have assessed it.

Call the tools in whatever order makes sense, but make sure the application has been assessed before you finish. When you have gathered the customer profile, the bureau report, and the policy assessment, and marked the status, you are done — a senior officer takes it from there.
`,Sa="Gather this loan case for the senior officer: look up the customer, pull their credit bureau report, run the underwriting assessment, and set the application status to `under-review`. Then stop — the officer makes the decision.\n",Pa={id:"loan-origination-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a loan application through the origination agent.",target:{anchor:Ne.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the application and decides, turn by turn, which tools to call — look up the customer, pull a credit bureau report, run the underwriting policy, update the status. Nothing here is a fixed sequence.",target:{elementId:"LoanOriginationAgent"}},{title:"Policy, not opinion",description:"The assessment computes the debt-to-income ratio, a risk band and a recommendation from the verified figures — the deterministic policy the senior officer's review leans on.",target:{elementId:"AssessApplication"},waitFor:{kind:"elementCompleted",elementId:"AssessApplication"}},{title:"Every application meets a human",description:"Whatever the agent recommended, the token now waits here: no offer and no decline is reachable without a senior officer first signing off. Open the task to record the decision — the gateway routes on it.",target:{elementId:"SeniorOfficerReview"},waitFor:{kind:"activeElement",elementId:"SeniorOfficerReview"}},{title:"Everything the run recorded",description:"The variables panel shows the customer profile, the bureau report, the debt-to-income and risk band, and the recommendation — exactly what each tool wrote for the officer to weigh.",target:{anchor:Ne.variablesPanel}}],successEvent:{kind:"elementCompleted",elementId:"AssessApplication"}},Aa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ca="Camunda Cloud",Da="8.10.0",Ba={name:"Camunda Web Modeler",version:"9b5d5ef"},La=19,Ra="loan-application",Fa="default",za=[{text:`# Loan application

Capture the applicant's details, then run the origination agent.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{label:"Applicant name",type:"textfield",layout:{row:"Row_applicant",columns:null},id:"Field_ApplicantName",key:"applicantName",defaultValue:"Ada Lovelace",validate:{required:!0}},{label:"Loan amount",description:"Amount requested.",type:"number",layout:{row:"Row_amount",columns:null},id:"Field_LoanAmount",key:"loanAmount",defaultValue:2e4},{label:"Loan purpose",type:"textfield",layout:{row:"Row_purpose",columns:null},id:"Field_LoanPurpose",key:"loanPurpose",defaultValue:"Home improvement"},{label:"Annual income",type:"number",layout:{row:"Row_income",columns:null},id:"Field_AnnualIncome",key:"annualIncome",defaultValue:96e3},{label:"Monthly debt payments",description:"Existing monthly repayments across all obligations.",type:"number",layout:{row:"Row_debt",columns:null},id:"Field_MonthlyDebt",key:"monthlyDebt",defaultValue:850},{label:"Stated credit score",description:"The applicant's self-reported score; the credit bureau tool confirms it.",type:"number",layout:{row:"Row_score",columns:null},id:"Field_CreditScore",key:"creditScore",defaultValue:782}],Oa={executionPlatform:Ca,executionPlatformVersion:Da,exporter:Ba,schemaVersion:La,id:Ra,type:Fa,components:za},Ua="Camunda Cloud",$a="8.10.0",Ga={name:"Camunda Web Modeler",version:"9b5d5ef"},Va=19,Ya="loan-senior-officer-review",Qa="default",qa=[{text:`# Senior officer review

Every application reaches this desk before an offer or a decline can be sent. Review the agent's findings, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Applicant:** {{applicantName}} — {{loanPurpose}}, amount {{loanAmount}}

**Customer relationship:** {{if customerProfile = null then "unknown" else customerProfile.segment + " (" + string(customerProfile.relationshipYears) + "y)"}}

**Credit bureau:** {{if bureauReport = null then "n/a" else string(bureauReport.score) + " (" + bureauReport.band + "), " + string(bureauReport.derogatoryMarks) + " derogatory mark(s)"}}

**Debt-to-income:** {{debtToIncome}}%

**Assessed risk band:** {{riskBand}}

**Policy recommendation:** {{recommendation}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Decision",values:[{label:"Approve — issue loan offer",value:"approved"},{label:"Decline — send decline notice",value:"declined"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_Decision",key:"decision",validate:{required:!0}},{label:"Officer note",description:"Recorded against the application; the decline notice quotes it as the reason.",type:"textarea",layout:{row:"Row_note",columns:null},id:"Field_ReviewNote",key:"reviewNote"}],Ja={executionPlatform:Ua,executionPlatformVersion:$a,exporter:Ga,schemaVersion:Va,id:Ya,type:Qa,components:qa},Ha=Object.assign({"./prompts/system-prompt.md":ja,"./prompts/user-prompt.md":Sa}),Wa=en(Object.fromEntries(Object.entries(Ha).map(([e,n])=>[St(e),n.trimEnd()]))),bt={applicantName:"Ada Lovelace",annualIncome:96e3,monthlyDebt:850,creditScore:782,loanAmount:2e4,loanPurpose:"Home improvement"},Za={applicantName:"Cyrus Vale",annualIncome:38e3,monthlyDebt:1450,creditScore:566,loanAmount:42e3,loanPurpose:"Debt consolidation"},Ka=`async (job) => {
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
}`,Xa=`async (job, { text, sleep, trace }) => {
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
}`,es=`async (job, { text, num, sleep, trace }) => {
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
}`,ns=`async (job, { num, trace }) => {
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
}`,ts=`async (job, { sleep, trace }) => {
  // Stands in for a write-back to the loan origination system. Marks the case
  // as awaiting the senior officer's decision.
  await sleep(200);
  trace("application status -> under-review");
  return { applicationStatus: "under-review", toolCallResult: "under-review" };
}`,rs=`async (job, { num, sleep, trace }) => {
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
}`,is=`async (job, { text, sleep, trace }) => {
  // Trunk service task on the declined path. Sends the applicant a decline
  // notice with the recorded reason, standing in for a notification channel.
  const note = text("reviewNote", "");
  const reason = note || "Application did not meet the lending policy.";
  await sleep(300);
  trace("decline notice sent");

  return { declineNotice: { reason: reason, sentTo: text("applicantName", "the applicant") } };
}`,os={id:"loan-origination",title:"Loan origination agent",blurb:"An AI agent gathers a loan case with its own tools — customer lookup, credit bureau, an underwriting policy, a status update — then every application passes through a mandatory senior-officer review before a gateway routes it to an offer or a decline. The agent advises; the process governs.",docsUrl:"https://camunda.com/orchestrate/agents/",bpmn:Aa,forms:{"loan-application":Oa,"loan-senior-officer-review":Ja},seed:bt,scenarios:[{label:"Strong applicant (policy recommends approve)",variables:bt},{label:"Marginal applicant (policy recommends decline)",variables:Za}],scriptedAgent:Ka,templates:Wa,tour:Pa,requiredTools:["AssessApplication","UpdateApplicationStatus"],handlers:[{elementId:"QueryCustomer",standsInFor:"CRM connector — customer lookup",source:Xa},{elementId:"CreditBureauLookup",standsInFor:"REST connector — credit bureau",source:es},{elementId:"AssessApplication",standsInFor:"Script task — underwriting policy (FEEL)",source:ns},{elementId:"UpdateApplicationStatus",standsInFor:"REST connector — origination system",source:ts},{elementId:"IssueLoanOffer",standsInFor:"REST connector — offer/booking system",source:rs},{elementId:"SendDeclineNotice",standsInFor:"REST connector — notifications",source:is}]},as=`<?xml version="1.0" encoding="UTF-8"?>
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
`,ss=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,ds=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,ls=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,cs={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:as,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:ss},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:ds},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:ls}]},ms=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ps=`async (job, { text, num, sleep, trace }) => {
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
}`,us={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:ms,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:ps}]},hs=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,gs=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,bs=`async (job, { num, sleep }) => {
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
}`,_s=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,fs={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:hs,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:gs},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:bs,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:_s,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},ws="/pr-preview/pr-108/assets/de-bmw-mini-JBSk7QcF.jpg",ys="/pr-preview/pr-108/assets/de-bmw-mini.thumb-CUUmJrRO.jpg",vs="/pr-preview/pr-108/assets/uk-d651-rnb-XGipy2QN.jpg",Ms="/pr-preview/pr-108/assets/uk-d651-rnb.thumb-mjEcbhUf.jpg",xs="/pr-preview/pr-108/assets/uk-mk70-orj-Cn6O3Xfm.jpg",Ns="/pr-preview/pr-108/assets/uk-mk70-orj.thumb-CaeZ2vqU.jpg",Es="/pr-preview/pr-108/assets/uk-ni-ijz-8992-YXV44tgk.jpg",ks="/pr-preview/pr-108/assets/uk-ni-ijz-8992.thumb-DYwok8jV.jpg",Is="/pr-preview/pr-108/assets/us-hyundai-genesis-gGpAIEpi.jpg",Ts="/pr-preview/pr-108/assets/us-hyundai-genesis.thumb-DEEt19Mw.jpg",js=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ss="Camunda Cloud",Ps="8.10.0",As={name:"Camunda Web Modeler",version:"9b5d5ef"},Cs=19,Ds="plate-recognition-confirm",Bs="default",Ls=[{text:`# Confirm the number plate

The in-browser vision model read a plate from the photo. It **recommends**; you **govern** — accept its reading or correct it before it is recorded.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ConfirmHeading"},{text:'**Model reading:** {{if modelPlate = null or modelPlate = "" then "(nothing read)" else modelPlate}}',type:"text",layout:{row:"Row_modelReading",columns:null},id:"Field_ModelReading"},{label:"Number plate",description:"Edit this if the model misread the plate. What you submit is what gets recorded.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ConfirmPlate",key:"confirmedPlate",validate:{required:!0}}],Rs={executionPlatform:Ss,executionPlatformVersion:Ps,exporter:As,schemaVersion:Cs,id:Ds,type:Bs,components:Ls},Fs="Camunda Cloud",zs="8.10.0",Os={name:"Camunda Web Modeler",version:"9b5d5ef"},Us=19,$s="plate-recognition-manual",Gs="default",Vs=[{text:`# Couldn't read the plate

The vision model didn't return a confident reading for this photo (an unrecognised image, or no in-browser model connected). Enter the plate by hand, or re-run with the in-browser vision brain connected.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ManualHeading"},{label:"Number plate",description:"Type the plate exactly as it appears in the photo.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ManualPlate",key:"confirmedPlate",validate:{required:!0}}],Ys={executionPlatform:Fs,executionPlatformVersion:zs,exporter:Os,schemaVersion:Us,id:$s,type:Gs,components:Vs},Qs="Camunda Cloud",qs="8.10.0",Js={name:"Camunda Web Modeler",version:"9b5d5ef"},Hs=19,Ws="plate-recognition-country",Zs="default",Ks=[{text:`# Read a number plate

Pick the plate's **country** so the reader knows which format to extract, then start the run. Leave it on **Auto-detect** to let it guess from the shape.`,type:"text",layout:{row:"Row_countryHeading",columns:null},id:"Field_CountryHeading"},{label:"Plate country",description:"The vision model reads all text in the photo; this tells the process which country's plate format to pull out of that reading.",type:"select",layout:{row:"Row_country",columns:null},id:"Field_Country",key:"country",defaultValue:"auto",values:[{label:"Auto-detect (any format)",value:"auto"},{label:"United Kingdom",value:"uk"},{label:"India",value:"india"},{label:"Germany",value:"germany"},{label:"South Korea",value:"korea"}],validate:{required:!0}}],Xs={executionPlatform:Qs,executionPlatformVersion:qs,exporter:Js,schemaVersion:Hs,id:Ws,type:Zs,components:Ks},ed=[{id:"uk-mk70-orj",file:"images/uk-mk70-orj.jpg",thumb:"images/uk-mk70-orj.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_MK70_ORJ_(MK_-_Manchester)_-_70_Plate_(1st_September_2020_-_28th_February_2021)_-_VW_Golf_(CarShop).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate MK70 ORJ" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"MK70 ORJ"},{id:"uk-ni-ijz-8992",file:"images/uk-ni-ijz-8992.jpg",thumb:"images/uk-ni-ijz-8992.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_(Northern_Ireland)_Number_Plate_IJZ_8992_(JZ_-_Down_(NI)_)_-_Dateless_Plate_-_Ford_Fiesta_(Woolston_Car_Centre).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK (Northern Ireland) Number Plate IJZ 8992" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"IJZ 8992"},{id:"uk-d651-rnb",file:"images/uk-d651-rnb.jpg",thumb:"images/uk-d651-rnb.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_D651_RNB_(NB_-_Manchester)_-_D_Reg_(1st_August_1986_-_31st_July_1987)_-_Ford_Capri_(The_Quick_Group).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate D651 RNB" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"D651 RNB"},{id:"de-bmw-mini",file:"images/de-bmw-mini.jpg",thumb:"images/de-bmw-mini.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_BMW_Mini_--_2018_--_1545-51.jpg",license:"CC-BY-SA-4.0",attribution:'Dietmar Rabich / Wikimedia Commons / "Dülmen, Dernekamp, BMW Mini -- 2018 -- 1545-51" / CC BY-SA 4.0',groundTruthPlate:"MS WL 545"},{id:"us-hyundai-genesis",file:"images/us-hyundai-genesis.jpg",thumb:"images/us-hyundai-genesis.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:Hyundai_Genesis_3.8_(US)_(9004912958).jpg",license:"CC-BY-SA-2.0",attribution:'Scarlet Sappho, "Hyundai Genesis 3.8 (US)" (Wikimedia Commons, CC BY-SA 2.0)',groundTruthPlate:"GWAN EUM"}],Vt=ed,nd=Object.assign({"./images/de-bmw-mini.jpg":ws,"./images/de-bmw-mini.thumb.jpg":ys,"./images/uk-d651-rnb.jpg":vs,"./images/uk-d651-rnb.thumb.jpg":Ms,"./images/uk-mk70-orj.jpg":xs,"./images/uk-mk70-orj.thumb.jpg":Ns,"./images/uk-ni-ijz-8992.jpg":Es,"./images/uk-ni-ijz-8992.thumb.jpg":ks,"./images/us-hyundai-genesis.jpg":Is,"./images/us-hyundai-genesis.thumb.jpg":Ts});function _t(e){const n=nd[`./${e}`];if(!n)throw new Error(`plate-recognition: image asset "${e}" is in images.json but missing on disk`);return n}const td=Vt.map(e=>({id:e.id,file:_t(e.file),thumb:_t(e.thumb),label:e.groundTruthPlate})),rd=Object.fromEntries(Vt.map(e=>[e.id,e.groundTruthPlate])),id=`async (job, { vision, trace, text }) => {
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
}`,od=`async (job, { text, trace }) => {
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
}`,ad={id:"plate-recognition",title:"Read a number plate from a photo",blurb:"Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",docsUrl:"https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",bpmn:js,forms:{"plate-recognition-country":Xs,"plate-recognition-confirm":Rs,"plate-recognition-manual":Ys},seed:{country:"auto"},imageInput:{label:"Pick a seed photo (its plate is known, so the scripted reader works offline) or upload your own — a live in-browser model reads a photo it has never seen.",seedImages:td},scriptedVision:rd,handlers:[{elementId:"ExtractPlate",standsInFor:"Vision model — Florence-2 <OCR> on WebGPU (in-browser)",source:id},{elementId:"RecordResult",standsInFor:"Script task — records the governed outcome",source:od}]},sd=[us,Ta,os,cs,fs,ad],dd=Object.assign({"./learn-error-boundary/index.ts":uo,"./learn-exclusive-gateway/index.ts":wo,"./learn-message-correlation/index.ts":xo,"./learn-multi-instance-parallel/index.ts":Io,"./learn-service-task/index.ts":Ao,"./learn-signal-broadcast/index.ts":Ro,"./learn-timer-catch-event/index.ts":Uo,"./learn-user-task-form/index.ts":Ko}),ld=Object.values(dd).map(e=>e.default).sort((e,n)=>e.id.localeCompare(n.id)),We=[...sd,...ld];function Ln(){return"/pr-preview/pr-108/"}function cd(e){const n=Ln();return e.startsWith(n)?"/"+e.slice(n.length):e}function md(e=location.pathname){const t=cd(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function pd(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function ud(e=location.search){return new URLSearchParams(e).get("view")==="compact"?"compact":"full"}function ft(e){return`${Ln()}examples/${encodeURIComponent(e)}`}const wt="p";function hd(){const e=new URLSearchParams(location.search),n=e.get(wt);if(!n)return!1;const t=n.replace(/[\t\n\r]/g,"");if(!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\"))return!1;e.delete(wt);try{const r=new URL(Ln(),location.href),o=new URL(t.slice(1),r);return o.origin!==location.origin?!1:(o.search=e.toString(),o.hash=location.hash,history.replaceState(null,"",o),!0)}catch{return!1}}function gd(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function yt(){return{route:md(),embed:pd(),view:ud()}}function bd(){const[e,n]=b.useState(yt);return b.useEffect(()=>{const t=()=>n(yt());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const _d="web-demo-framework:height",fd="web-demo-framework:request-height";function wd(e){return{type:_d,height:Math.ceil(e)}}const vt="embed-height-auto";function yd(e=document){return Math.max(e.documentElement.offsetHeight,e.body.scrollHeight)}function vd(e){b.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(vt);let t=-1;const r=(d=!1)=>{const c=yd();!d&&Math.abs(c-t)<2||(t=c,window.parent.postMessage(wd(c),"*"))},o=d=>{if(d.source!==window.parent)return;const c=d.data;!c||c.type!==fd||r(!0)};window.addEventListener("message",o),r();const s=new ResizeObserver(()=>r());return s.observe(n),()=>{s.disconnect(),window.removeEventListener("message",o),n.classList.remove(vt)}},[e])}const Mt={headline:"The model *runs*. The code is *yours* to edit.",lede:"Every example on this page is a real BPMN process executing in your browser on the nano WebAssembly engine — edit the model, edit the handlers, swap the LLM, and run it again.",tagline:"Runnable Camunda examples"};function Md({text:e}){return i.jsx(i.Fragment,{children:e.split(/\*([^*]+)\*/g).map((n,t)=>t%2===1?i.jsx("em",{children:n},t):i.jsx(b.Fragment,{children:n},t))})}function xd(){const{route:e,embed:n,view:t}=bd(),r=n&&t==="compact",o=Ut().brain,s=Hi();vd(n);const d=e.kind==="example"?e.id:We[0].id,c=We.find(_=>_.id===d)??We[0],u=We.filter(_=>_.group!=="learn-bpmn"),a=We.filter(_=>_.group==="learn-bpmn"),p=_=>{gd(ft(_),{hash:location.hash})},h=c.hero??Mt,l=i.jsxs(i.Fragment,{children:[!n&&i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"hero",children:[i.jsx("h1",{children:i.jsx(Md,{text:h.headline})}),h.lede&&i.jsx("p",{children:h.lede})]}),i.jsx("nav",{className:"example-picker","aria-label":"Scenario examples",children:u.map(_=>i.jsx(H,{size:"sm",variant:_.id===c.id?"default":"secondary","aria-current":_.id===c.id?"page":void 0,onClick:()=>p(_.id),children:_.title},_.id))}),a.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("h2",{className:"example-group-heading",id:"learn-bpmn-heading",children:"Learn BPMN"}),i.jsx("nav",{className:"example-picker","aria-labelledby":"learn-bpmn-heading",children:a.map(_=>i.jsx(H,{size:"sm",variant:_.id===c.id?"default":"secondary","aria-current":_.id===c.id?"page":void 0,onClick:()=>p(_.id),children:_.title},_.id))})]})]}),i.jsxs("div",{className:"example-meta",children:[c.docsUrl&&i.jsx("a",{className:"docs-link",href:c.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&i.jsx("a",{className:"open-full-page",href:ft(c.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:r?"Open the editable version ↗":"Open full page ↗"})]}),i.jsx(so,{example:c,compact:r,initialBrainKind:o,initialTourId:s},c.id)]});return n?i.jsx("div",{className:`c4-ui app-shell app-embed${r?" app-compact":""}`,children:i.jsx("main",{id:"main",className:`layout layout-embed${r?" layout-compact":""}`,children:l})}):i.jsxs("div",{className:"c4-ui app-shell",children:[i.jsx(or,{className:"topbar",logo:i.jsx("span",{className:"brand-dot","aria-hidden":!0}),appName:"Runnable Camunda examples",trailing:i.jsx("span",{className:"app-subtitle",children:h.tagline??Mt.tagline})}),i.jsx("main",{id:"main",className:"layout",children:l}),i.jsx("footer",{className:"footer",children:"Running locally in your browser on the nano WebAssembly BPMN engine — no cluster, no server, no data leaving the page."})]})}hd();Wt.createRoot(document.getElementById("root")).render(i.jsx(b.StrictMode,{children:i.jsx(ar,{children:i.jsx(xd,{})})}));export{he as _,Id as c};
