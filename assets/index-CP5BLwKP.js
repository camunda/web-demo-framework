const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-js-BEOU0ddW.css","assets/bpmn-embedded-BFLZ0TIv.css","assets/RuntimeDiagram-DTnJz5cT.js","assets/vendor-react-9Ma26nY1.js","assets/Viewer-D_7S4Gwm.js","assets/MonacoEditor-6d7HoUW8.js","assets/MonacoEditor-D6kYW_CN.css","assets/vendor-modeler-BSHvadVJ.js","assets/vendor-design-system-B7LgQvIL.js","assets/vendor-design-system-camx4DLJ.css","assets/parser-DkgAe_kI.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-D-LT8HYo.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var Zt=Object.defineProperty;var Kt=(e,n,t)=>n in e?Zt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var L=(e,n,t)=>Kt(e,typeof n!="symbol"?n+"":n,t);import{r as b,j as r,i as Xt}from"./vendor-react-9Ma26nY1.js";import{B as H,a as ie,L as qe,S as Nn,b as En,c as kn,d as In,e as Tn,A as de,f as le,g as ce,I as Vn,C as ei,h as ni,i as ti,j as ii,k as ri,l as oi,T as ai,m as si,n as sn,o as dn,p as di,q as li}from"./vendor-design-system-B7LgQvIL.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const ci="modulepreload",mi=function(e){return"/"+e},Yn={},ue=function(n,t,i){let o=Promise.resolve();if(t&&t.length>0){let l=function(a){return Promise.all(a.map(p=>Promise.resolve(p).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=l(t.map(a=>{if(a=mi(a),a in Yn)return;Yn[a]=!0;const p=a.endsWith(".css"),h=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const d=document.createElement("link");if(d.rel=p?"stylesheet":ci,p||(d.as="script"),d.crossOrigin="",d.href=a,u&&d.setAttribute("nonce",u),document.head.appendChild(d),p)return new Promise((_,y)=>{d.addEventListener("load",_),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return o.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return n().catch(s)})},pi="io.camunda.agenticai:aiagent",Se="http://www.omg.org/spec/BPMN/20100524/MODEL",ui="http://camunda.org/schema/zeebe/1.0";function jn(e,n){return Array.from(e.getElementsByTagNameNS(ui,n))}function Mt(e,n){return jn(e,n).filter(t=>hi(t)===e)}function hi(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Se&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function Dn(e){const n=Mt(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function Qn(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Se&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function qn(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(i=>i.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function xt(e){const n=[],t=i=>{for(const o of Array.from(i.attributes))n.push(o.value);for(const o of Array.from(i.children))t(o)};return t(e),n.join(`
`)}function gi(e){return Nt(xt(e))}function bi(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Se&&t.localName==="extensionElements");return n?Nt(xt(n)):[]}function Nt(e){const n=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,t=[],i=new Set;for(const o of e.matchAll(n)){const s=o[1];i.has(s)||(i.add(s),t.push({name:s,description:(o[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:o[3]??"string"}))}return t}function _i(e){const n={};for(const t of Mt(e,"input")){const i=t.getAttribute("target");i&&(n[i]=t.getAttribute("source")??"")}return n}function fi(e){return Array.from(e.getElementsByTagNameNS(Se,"adHocSubProcess")).filter(n=>(Dn(n)??"").startsWith(pi))}const wi=new Set(["subProcess","adHocSubProcess","callActivity"]),yi=new Set(["adHocSubProcess","subProcess","transaction"]);function vi(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Se&&yi.has(n.localName))return n;n=n.parentElement}return null}function Mi(e,n){const t=_i(e),i=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:Dn(e),systemPrompt:qn(t["data.systemPrompt.prompt"]),userPrompt:qn(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(i)&&i>0?i:10,tools:n}}function xi(e,n){var h;const t=e.getAttribute("id")??"",i=e.getAttribute("name")??t,o=fi(e);o.length>1&&n.push({severity:"warning",elementId:o.map(d=>d.getAttribute("id")).join(", "),message:`Process "${i}" hosts ${o.length} AI Agent sub-processes (${o.map(d=>d.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const s=[],l=new Map(o.map(d=>[d,[]]));for(const d of Array.from(e.getElementsByTagName("*"))){if(d.namespaceURI!==Se||o.includes(d))continue;const _=d.getAttribute("id");if(!_)continue;const y=vi(d),M=y&&o.includes(y)?y:null;if(M&&wi.has(d.localName)){const j=d.getAttribute("name")??_,B=Qn(d);s.push({elementId:_,label:j,jobType:"",documentation:B,isTool:!0,compound:!0}),l.get(M).push({elementId:_,label:j,jobType:"",documentation:B,args:bi(d),compound:!0});continue}const v=Dn(d);if(!v)continue;const g={elementId:_,label:d.getAttribute("name")??_,jobType:v,documentation:Qn(d),isTool:M!=null};s.push(g),M&&l.get(M).push({elementId:_,label:g.label,jobType:v,documentation:g.documentation,args:gi(d)})}const c=o.map(d=>Mi(d,l.get(d))),u=Array.from(e.getElementsByTagNameNS(Se,"userTask")).map(d=>{var _;return{elementId:d.getAttribute("id")??"",label:d.getAttribute("name")??d.getAttribute("id")??"",formId:((_=jn(d,"formDefinition")[0])==null?void 0:_.getAttribute("formId"))??void 0}}),a=e.getElementsByTagNameNS(Se,"startEvent")[0],p=a?((h=jn(a,"formDefinition")[0])==null?void 0:h.getAttribute("formId"))??void 0:void 0;return{processId:t,processName:i,tasks:s,agents:c,userTasks:u,startFormId:p}}function Ni(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),i=t.getElementsByTagName("parsererror")[0];if(i)throw new Error(`Invalid BPMN XML: ${i.textContent}`);const o=Array.from(t.getElementsByTagNameNS(Se,"process"));if(o.length===0)throw new Error("No <bpmn:process> in the diagram.");const s=[],l=o.map(u=>xi(u,s));let c=n.processId?l.find(u=>u.processId===n.processId):void 0;return n.processId&&!c&&s.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${l[0].processId}".`}),c??(c=l[0]),l.length>1&&s.push({severity:"warning",message:`Diagram has ${l.length} <bpmn:process> elements (${l.map(u=>u.processId).join(", ")}); using "${c.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:l,diagnostics:s,processId:c.processId,processName:c.processName,tasks:c.tasks,agent:c.agents[0]??null,agents:l.flatMap(u=>u.agents),userTasks:c.userTasks,startFormId:c.startFormId}}function Ei(e){return e?e.imageId?{imageId:e.imageId}:e.imageName?{imageName:e.imageName}:{}:{}}function Et(e,n){return n?e.pixels:e.imageId??e.pixels}const ki="No image selected — pick or upload a photo to read.";function Jn(){return ki}function Ii(e,n){return async t=>{const i=e.resolve(n);if(!i)return Jn();const o=Et(i,e.live);if(o===void 0)return Jn();try{return await e.read(o,t)}catch(s){return`Couldn't read the image (${s instanceof Error?s.message:String(s)}).`}}}function Ti(e,n){return async()=>{const t=e.resolve(n);if(t)return Et(t,e.live)}}function ji(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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
  <\/script></body></html>`}function kt(e,n={}){const{timeoutMs:t=5e3,onTrace:i,onVision:o,onImage:s}=n,l=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((c,u)=>{const a=document.createElement("iframe");a.setAttribute("sandbox","allow-scripts"),a.style.display="none",a.setAttribute("aria-hidden","true");let p=!1,h;const d=()=>{h&&clearTimeout(h),window.removeEventListener("message",y),a.remove()},_=v=>{p||(p=!0,d(),v())};function y(v){var j;if(v.source!==a.contentWindow)return;const g=v.data;if(!(!g||typeof g!="object")){if(g.kind==="ready"){const B=e.job,O=e.kind==="run-handler"?{kind:"run-handler",id:l,source:e.source,job:B,hasVision:e.hasVision}:{kind:"run-agent",id:l,source:e.source,job:B};(j=a.contentWindow)==null||j.postMessage(O,"*");return}"id"in g&&g.id!==l||(g.kind==="trace"?i==null||i(g.text):g.kind==="vision-request"?M(g.callId,o,"vision",g.prompt):g.kind==="image-request"?M(g.callId,s,"image"):g.kind==="result"?_(()=>c(g.value)):g.kind==="error"&&_(()=>u(new Error(g.message))))}}function M(v,g,j,...B){const O=re=>{var W;return(W=a.contentWindow)==null?void 0:W.postMessage(re,"*")};if(!g){O({kind:"helper-error",id:l,callId:v,message:`${j} helper is not available.`});return}Promise.resolve().then(()=>g(...B)).then(re=>O({kind:"helper-result",id:l,callId:v,value:re}),re=>O({kind:"helper-error",id:l,callId:v,message:re instanceof Error?re.message:String(re)}))}window.addEventListener("message",y),h=setTimeout(()=>{_(()=>u(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),a.srcdoc=ji(),document.body.appendChild(a)})}function It(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function Si(e,n,t){const i=typeof t.vision=="function";return kt({kind:"run-handler",source:e,job:It(n),hasVision:i},{onTrace:t.trace,onVision:t.vision?o=>t.vision(o):void 0,onImage:t.image?()=>t.image():void 0})}function Pi(e,n){return kt({kind:"run-agent",source:e,job:It(n)})}function Tt(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function Ai(e){return Tt(e,"Handler code"),(n,t)=>Si(e,n,t)}function Ci(e){return Tt(e,"Agent code"),n=>Pi(e,n)}function Di(e,n,t,i){return{sleep:o=>new Promise(s=>setTimeout(s,o)),trace:o=>n({kind:"tool",text:`   ${o}`,elementId:e.elementId,turn:t}),text:(o,s="")=>{const l=e.variables[o];return typeof l=="string"?l:l==null?s:String(l)},num:(o,s=0)=>{const l=e.variables[o],c=typeof l=="number"?l:Number(l);return Number.isFinite(c)?c:s},...i?{vision:Ii(i,e.instanceKey),image:Ti(i,e.instanceKey)}:{}}}function Bi(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Li(e,n,t,i,o){const s={},l=e.processes.flatMap(u=>u.tasks),c=new Map(l.map(u=>[u.elementId,u.label]));for(const u of l)u.compound||s[u.jobType]||(s[u.jobType]=async a=>{const p=n[a.elementId];if(!p)throw new Error(`No handler registered for ${a.elementId} (job type ${a.type})`);const h=c.get(a.elementId)??a.elementId,d=i==null?void 0:i.current;t({kind:"tool",text:`▶ ${h}`,elementId:a.elementId,turn:d});const _=await p(a,Di(a,t,d,o));return t({kind:"vars",text:`  ↳ ${Bi(_)}`,elementId:a.elementId,result:_,turn:d}),_});return s}const Ri=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function rn(...e){const n=Object.create(null);for(const t of e)if(t)for(const i of Object.keys(t))n[i]=t[i];return n}function jt(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function St(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fi(e){return St(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function zi(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oi(e){return JSON.stringify(e).slice(1,-1)}function Ui(e,n){const t=e.lastIndexOf("<",n),i=e.lastIndexOf(">",n);if(t<=i)return"text";const o=e.slice(t,n);if((o.match(/"/g)??[]).length%2===0)return"text";const l=o.lastIndexOf('"');return(o.slice(l+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function $i(e,n,t="xml"){const i=[],o=new Set;return{result:e.replace(Ri,(l,c,u)=>{const a=c.trim();if(!Object.prototype.hasOwnProperty.call(n,a))return o.has(a)||(o.add(a),i.push(a)),l;const p=n[a];if(t==="json")return Oi(p);const h=Ui(e,u);return h==="feel-literal"?zi(p):h==="attribute"?Fi(p):St(p)}),unresolved:i}}function Gi(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function Vi(e,n={},t=e.bpmn,i={}){const o=[],s=rn(e.templates,i),{result:l,unresolved:c}=$i(t,s,"xml");for(const g of c)o.push({severity:"warning",message:`Template placeholder "{{${g}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let u;try{u=Ni(l)}catch(g){return o.push({severity:"error",message:g instanceof Error?g.message:String(g)}),{resolvedBpmn:l,model:Gi(),handlers:{},forms:{},diagnostics:o,hasErrors:!0}}o.push(...u.diagnostics);const a=u.processes.flatMap(g=>g.tasks),p=new Map(e.handlers.map(g=>[g.elementId,g.source])),h={};for(const g of a){if(g.compound)continue;const j=n[g.elementId]??p.get(g.elementId);if(j===void 0){o.push({severity:"error",elementId:g.elementId,jobType:g.jobType,message:`No handler for "${g.label}" (${g.elementId}, job type "${g.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{h[g.elementId]=Ai(j)}catch(B){o.push({severity:"error",elementId:g.elementId,jobType:g.jobType,message:`"${g.label}" (${g.elementId}): handler code didn't compile — ${B instanceof Error?B.message:String(B)}`})}}const d=new Set(a.map(g=>g.elementId)),_=new Set([...p.keys(),...Object.keys(n)]);for(const g of _)d.has(g)||o.push({severity:"error",elementId:g,message:`Handler "${g}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const y={},M=e.forms??{},v=(g,j)=>{if(!g)return;const B=M[g];B?y[g]=B:o.push({severity:"error",formId:g,message:`${j} references form "${g}", which has no matching schema.`})};for(const g of u.processes){v(g.startFormId,`The start event of process "${g.processName}"`);for(const j of g.userTasks)v(j.formId,`User task "${j.label}" (${j.elementId})`)}return{resolvedBpmn:l,model:u,handlers:h,forms:y,diagnostics:o,hasErrors:o.some(g=>g.severity==="error")}}function Yi(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let i=n;i<e.length;i++)if(e[i]==="{")t++;else if(e[i]==="}"&&(t--,t===0))try{const o=JSON.parse(e.slice(n,i+1));return typeof o=="object"&&o!==null&&!Array.isArray(o)?o:null}catch{return null}return null}function Sn(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function Hn(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function Wn(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:Hn(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,i=Array.isArray(t)?t:Object.values(e).find(s=>Array.isArray(s))??[],o=[];for(const s of i)if(typeof s=="string")s.trim()&&o.push({name:s.trim(),args:{}});else if(s&&typeof s=="object"){const l=s,c=l.name??l.tool??l.id??l.function;typeof c=="string"&&c.trim()&&o.push({name:c.trim(),args:Hn(l)})}return o}function Qi(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function Zn(e){const n=e.args.length?e.args.map(i=>`      ${i.name} (${i.type}) — ${i.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function qi(e,n,t){const i=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",o=t[0]??e.tools[0],s=o!=null&&o.args.length?`{${o.args.map(l=>`"${l.name}": "…"`).join(", ")}}`:"{}";return n?`${i}

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
{"done": true} and no tools.`:`${i}

You drive the process by calling exactly one tool at a time. The tool names you
may use, one per block:

${t.map(Zn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(o==null?void 0:o.elementId)??"ToolName"}", "arguments": ${s}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function Ji(e,n,t,i,o=[],s=[],l=!1){const c=e.userPrompt||"Carry out your task.",u=Object.entries(n).filter(([,p])=>typeof p=="string"&&p.trim().length>0).map(([p,h])=>`  ${p}: ${String(h)}`),a=[c,u.length?`Case data:
${u.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return a.push(t.length?`${l?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),a.push(i.length?`Tools still available:
${i.map(p=>`  ${p.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),s.length&&a.push(`Your last reply was rejected: ${s.join("; ")}. Do not repeat it.`),o.length&&a.push(`You reported that you are done, but ${o.join(" and ")} ${o.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${o.length===1?"it":"them"} now.`),a.push("Which tool should run next? Reply with JSON only."),a.join(`

`)}async function Hi(e,n,t,i,o,s){let l="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:s});const c=await e(i,o,u=>{l+=u,n({kind:"llm",text:`${Sn(l)} ▍`,key:t,pending:!0,turn:s})});return n({kind:"llm",text:Sn(c||l)||"(empty reply)",key:t,pending:!1,turn:s}),c}function Wi(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function Zi(e,n,t){const i={},o=new Map,s=new Map;for(const{tool:l,args:c}of e){const u={};for(const a of l.args){const p=c[a.name];if(!(p!=null&&p!=="")){n({kind:"error",text:`🤖 ${l.elementId}: model supplied no value for "${a.name}"`,turn:t,elementId:l.elementId});continue}const d=o.get(a.name);if(d!==void 0&&d!==l.elementId){n({kind:"error",text:`🤖 argument name collision on "${a.name}": both ${d} and ${l.elementId} declare it — ${d} already claimed it this turn, ${l.elementId}'s value is dropped`,turn:t,elementId:l.elementId});continue}const _=Wi(a.type,p);if(!_.ok){n({kind:"error",text:`🤖 ${l.elementId}: "${a.name}" is declared as ${a.type} but the model supplied ${JSON.stringify(p)} — rejected, not passed through`,turn:t,elementId:l.elementId});continue}i[a.name]=_.value,u[a.name]=_.value,o.set(a.name,l.elementId)}s.set(l.elementId,u)}return{variablesOut:i,forHistory:s}}function Ki(e,n,t,i={}){const{maxNewTokens:o=384,allowRepeats:s=!1,allowMultiToolTurns:l=!1,turnRef:c,requiredTools:u=[],maxEarlyDoneNudges:a=1,maxUnproductiveTurns:p=3}=i;let h=0;const d=new Set,_=[];let y=0,M=[],v=[];return async g=>{const j=g.variables,B=j.toolCallResult;B!==void 0&&_.length&&(_[_.length-1]=`${_[_.length-1]} → ${Sn(JSON.stringify(B),160)}`);let O=0;for(;;){const W=await re();if(W)return W;if(O+=1,O>=p)return t({kind:"error",text:`🤖 ${O} turns in a row activated nothing — completing the agent. The model has lost the reply format; whatever it has already run stands.`,turn:h}),{completionConditionFulfilled:!0}}async function re(){if(h+=1,c&&(c.current=h),h>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:h}),{completionConditionFulfilled:!0};const W=s?e.tools:e.tools.filter(N=>!d.has(N.elementId));if(W.length===0)return t({kind:"agent",text:"🤖 every tool has run — completing the agent",turn:h}),{completionConditionFulfilled:!0};const Ne=[{role:"system",content:qi(e,l,W)},{role:"user",content:Ji(e,j,_,W,M,v,s)}];M=[],v=[];let Ee;try{Ee=await Hi(n,t,`llm-turn-${h}`,Ne,o,h)}catch(N){return t({kind:"error",text:`LLM call failed: ${N instanceof Error?N.message:String(N)} — completing the agent.`,turn:h}),{completionConditionFulfilled:!0}}const we=Yi(Ee);if(Qi(we)&&Wn(we).length===0){const N=u.filter(U=>!d.has(U));return N.length&&y<a?(y+=1,M=N,t({kind:"agent",text:`🤖 model says it is done, but ${N.join(", ")} hasn't run — asking once more`,turn:h}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:h}),{completionConditionFulfilled:!0})}const Pe=Wn(we);if(Pe.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:h}),v=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const Z=[],me=[],q=[];for(const N of Pe){const U=e.tools.find($=>$.elementId===N.name);if(!U){me.push(N.name);continue}if(!s&&d.has(U.elementId)){q.push(U.elementId);continue}Z.push({tool:U,args:N.args})}if(me.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${me.join(", ")} — nothing activated`,turn:h}),q.length&&t({kind:"error",text:`🤖 model asked to re-run ${q.join(", ")} — skipped (already run)`,turn:h}),Z.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:h}),v=[...me.length?[`${me.join(", ")} ${me.length===1?"is":"are"} not a real tool`]:[],...q.length?[`${q.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:T,forHistory:E}=Zi(Z,t,h);for(const{tool:N}of Z)d.add(N.elementId),_.push(`- ${N.elementId}(${JSON.stringify(E.get(N.elementId))})`);for(const{tool:N}of Z)t({kind:"agent",text:`🤖 calling ${N.elementId}`,turn:h,elementId:N.elementId,args:E.get(N.elementId)??{}});return{activateElements:Z.map(N=>({elementId:N.tool.elementId})),variables:T}}}}function Xi(e,n,t,i={}){const o=new Map(e.map(s=>[s.elementId,Ki(s,n,t,i)]));return async s=>{const l=o.get(s.elementId);if(!l)throw new Error(`No agent host registered for "${s.elementId}"`);return l(s)}}class Pn{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Kn.unregister(this),n}free(){const n=this.__destroy_into_raw();m.__wbg_testengine_free(n,0)}activateJobs(n,t,i,o){let s,l;try{const _=m.__wbindgen_add_to_stack_pointer(-16),y=A(n,m.__wbindgen_export,m.__wbindgen_export2),M=S,v=A(o,m.__wbindgen_export,m.__wbindgen_export2),g=S;m.testengine_activateJobs(_,this.__wbg_ptr,y,M,t,i,v,g);var c=w().getInt32(_+0,!0),u=w().getInt32(_+4,!0),a=w().getInt32(_+8,!0),p=w().getInt32(_+12,!0),h=c,d=u;if(p)throw h=0,d=0,z(a);return s=h,l=d,F(h,d)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(s,l,1)}}advanceTime(n){let t,i;try{const p=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_advanceTime(p,this.__wbg_ptr,n);var o=w().getInt32(p+0,!0),s=w().getInt32(p+4,!0),l=w().getInt32(p+8,!0),c=w().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(l);return t=u,i=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,i,1)}}assignUserTask(n,t,i){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S;m.testengine_assignUserTask(d,this.__wbg_ptr,_,y,M,v,i);var l=w().getInt32(d+0,!0),c=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),p=l,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}broadcastSignal(n,t){let i,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),d=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),M=S;m.testengine_broadcastSignal(h,this.__wbg_ptr,d,_,y,M);var s=w().getInt32(h+0,!0),l=w().getInt32(h+4,!0),c=w().getInt32(h+8,!0),u=w().getInt32(h+12,!0),a=s,p=l;if(u)throw a=0,p=0,z(c);return i=a,o=p,F(a,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,o,1)}}cancelInstance(n){let t,i;try{const p=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),d=S;m.testengine_cancelInstance(p,this.__wbg_ptr,h,d);var o=w().getInt32(p+0,!0),s=w().getInt32(p+4,!0),l=w().getInt32(p+8,!0),c=w().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(l);return t=u,i=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,i,1)}}completeAgentJob(n,t,i){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S,g=A(i,m.__wbindgen_export,m.__wbindgen_export2),j=S;m.testengine_completeAgentJob(d,this.__wbg_ptr,_,y,M,v,g,j);var l=w().getInt32(d+0,!0),c=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),p=l,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}completeJob(n,t){let i,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),d=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),M=S;m.testengine_completeJob(h,this.__wbg_ptr,d,_,y,M);var s=w().getInt32(h+0,!0),l=w().getInt32(h+4,!0),c=w().getInt32(h+8,!0),u=w().getInt32(h+12,!0),a=s,p=l;if(u)throw a=0,p=0,z(c);return i=a,o=p,F(a,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,o,1)}}completeUserTask(n,t){let i,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),d=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),M=S;m.testengine_completeUserTask(h,this.__wbg_ptr,d,_,y,M);var s=w().getInt32(h+0,!0),l=w().getInt32(h+4,!0),c=w().getInt32(h+8,!0),u=w().getInt32(h+12,!0),a=s,p=l;if(u)throw a=0,p=0,z(c);return i=a,o=p,F(a,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,o,1)}}correlateMessage(n,t,i){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S,g=A(i,m.__wbindgen_export,m.__wbindgen_export2),j=S;m.testengine_correlateMessage(d,this.__wbg_ptr,_,y,M,v,g,j);var l=w().getInt32(d+0,!0),c=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),p=l,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}createInstance(n,t,i){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S;m.testengine_createInstance(d,this.__wbg_ptr,_,y,M,v,rr(i)?Number.MAX_SAFE_INTEGER:i>>0);var l=w().getInt32(d+0,!0),c=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),p=l,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}debugClear(){m.testengine_debugClear(this.__wbg_ptr)}debugCreateInstance(n,t,i){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S,g=A(i,m.__wbindgen_export,m.__wbindgen_export2),j=S;m.testengine_debugCreateInstance(d,this.__wbg_ptr,_,y,M,v,g,j);var l=w().getInt32(d+0,!0),c=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),p=l,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}get debugIsPaused(){return m.testengine_debugIsPaused(this.__wbg_ptr)!==0}debugResume(){let n,t;try{const a=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_debugResume(a,this.__wbg_ptr);var i=w().getInt32(a+0,!0),o=w().getInt32(a+4,!0),s=w().getInt32(a+8,!0),l=w().getInt32(a+12,!0),c=i,u=o;if(l)throw c=0,u=0,z(s);return n=c,t=u,F(c,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}debugStep(){let n,t;try{const a=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_debugStep(a,this.__wbg_ptr);var i=w().getInt32(a+0,!0),o=w().getInt32(a+4,!0),s=w().getInt32(a+8,!0),l=w().getInt32(a+12,!0),c=i,u=o;if(l)throw c=0,u=0,z(s);return n=c,t=u,F(c,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}deploy(n){let t,i;try{const p=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),d=S;m.testengine_deploy(p,this.__wbg_ptr,h,d);var o=w().getInt32(p+0,!0),s=w().getInt32(p+4,!0),l=w().getInt32(p+8,!0),c=w().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(l);return t=u,i=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,i,1)}}deployForm(n){let t,i;try{const p=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),d=S;m.testengine_deployForm(p,this.__wbg_ptr,h,d);var o=w().getInt32(p+0,!0),s=w().getInt32(p+4,!0),l=w().getInt32(p+8,!0),c=w().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(l);return t=u,i=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,i,1)}}deployResource(n,t){let i,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),d=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),M=S;m.testengine_deployResource(h,this.__wbg_ptr,d,_,y,M);var s=w().getInt32(h+0,!0),l=w().getInt32(h+4,!0),c=w().getInt32(h+8,!0),u=w().getInt32(h+12,!0),a=s,p=l;if(u)throw a=0,p=0,z(c);return i=a,o=p,F(a,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,o,1)}}events(){let n,t;try{const a=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_events(a,this.__wbg_ptr);var i=w().getInt32(a+0,!0),o=w().getInt32(a+4,!0),s=w().getInt32(a+8,!0),l=w().getInt32(a+12,!0),c=i,u=o;if(l)throw c=0,u=0,z(s);return n=c,t=u,F(c,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}failJob(n,t,i){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(i,m.__wbindgen_export,m.__wbindgen_export2),v=S;m.testengine_failJob(d,this.__wbg_ptr,_,y,t,M,v);var l=w().getInt32(d+0,!0),c=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),p=l,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}migrate(n,t,i){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S,g=A(i,m.__wbindgen_export,m.__wbindgen_export2),j=S;m.testengine_migrate(d,this.__wbg_ptr,_,y,M,v,g,j);var l=w().getInt32(d+0,!0),c=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),p=l,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}modify(n,t,i){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S,g=A(i,m.__wbindgen_export,m.__wbindgen_export2),j=S;m.testengine_modify(d,this.__wbg_ptr,_,y,M,v,g,j);var l=w().getInt32(d+0,!0),c=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),p=l,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}constructor(){const n=m.testengine_new();return this.__wbg_ptr=n,Kn.register(this,this.__wbg_ptr,this),this}get now(){return m.testengine_now(this.__wbg_ptr)}reset(){m.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,i;try{const p=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),d=S;m.testengine_resolveIncident(p,this.__wbg_ptr,h,d);var o=w().getInt32(p+0,!0),s=w().getInt32(p+4,!0),l=w().getInt32(p+8,!0),c=w().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(l);return t=u,i=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,i,1)}}setVariables(n,t,i){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S;m.testengine_setVariables(d,this.__wbg_ptr,_,y,M,v,i);var l=w().getInt32(d+0,!0),c=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),p=l,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}snapshot(){let n,t;try{const a=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_snapshot(a,this.__wbg_ptr);var i=w().getInt32(a+0,!0),o=w().getInt32(a+4,!0),s=w().getInt32(a+8,!0),l=w().getInt32(a+12,!0),c=i,u=o;if(l)throw c=0,u=0,z(s);return n=c,t=u,F(c,u)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(n,t,1)}}throwError(n,t,i){let o,s;try{const d=m.__wbindgen_add_to_stack_pointer(-16),_=A(n,m.__wbindgen_export,m.__wbindgen_export2),y=S,M=A(t,m.__wbindgen_export,m.__wbindgen_export2),v=S,g=A(i,m.__wbindgen_export,m.__wbindgen_export2),j=S;m.testengine_throwError(d,this.__wbg_ptr,_,y,M,v,g,j);var l=w().getInt32(d+0,!0),c=w().getInt32(d+4,!0),u=w().getInt32(d+8,!0),a=w().getInt32(d+12,!0),p=l,h=c;if(a)throw p=0,h=0,z(u);return o=p,s=h,F(p,h)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(o,s,1)}}tickNow(n){let t,i;try{const p=m.__wbindgen_add_to_stack_pointer(-16);m.testengine_tickNow(p,this.__wbg_ptr,n);var o=w().getInt32(p+0,!0),s=w().getInt32(p+4,!0),l=w().getInt32(p+8,!0),c=w().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(l);return t=u,i=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,i,1)}}unassignUserTask(n){let t,i;try{const p=m.__wbindgen_add_to_stack_pointer(-16),h=A(n,m.__wbindgen_export,m.__wbindgen_export2),d=S;m.testengine_unassignUserTask(p,this.__wbg_ptr,h,d);var o=w().getInt32(p+0,!0),s=w().getInt32(p+4,!0),l=w().getInt32(p+8,!0),c=w().getInt32(p+12,!0),u=o,a=s;if(c)throw u=0,a=0,z(l);return t=u,i=a,F(u,a)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(t,i,1)}}updateRetries(n,t){let i,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),d=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S;m.testengine_updateRetries(h,this.__wbg_ptr,d,_,t);var s=w().getInt32(h+0,!0),l=w().getInt32(h+4,!0),c=w().getInt32(h+8,!0),u=w().getInt32(h+12,!0),a=s,p=l;if(u)throw a=0,p=0,z(c);return i=a,o=p,F(a,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,o,1)}}updateUserTask(n,t){let i,o;try{const h=m.__wbindgen_add_to_stack_pointer(-16),d=A(n,m.__wbindgen_export,m.__wbindgen_export2),_=S,y=A(t,m.__wbindgen_export,m.__wbindgen_export2),M=S;m.testengine_updateUserTask(h,this.__wbg_ptr,d,_,y,M);var s=w().getInt32(h+0,!0),l=w().getInt32(h+4,!0),c=w().getInt32(h+8,!0),u=w().getInt32(h+12,!0),a=s,p=l;if(u)throw a=0,p=0,z(c);return i=a,o=p,F(a,p)}finally{m.__wbindgen_add_to_stack_pointer(16),m.__wbindgen_export3(i,o,1)}}}Symbol.dispose&&(Pn.prototype[Symbol.dispose]=Pn.prototype.free);function er(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_bb96b2010945f0bc:function(n,t){throw new Error(F(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const i=F(n,t);return nr(i)},__wbindgen_object_drop_ref:function(n){z(n)}}}}const Kn=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>m.__wbg_testengine_free(e,1));function nr(e){nn===je.length&&je.push(je.length+1);const n=nn;return nn=je[n],je[n]=e,n}function tr(e){e<1028||(je[e]=nn,nn=e)}let Ue=null;function w(){return(Ue===null||Ue.buffer.detached===!0||Ue.buffer.detached===void 0&&Ue.buffer!==m.memory.buffer)&&(Ue=new DataView(m.memory.buffer)),Ue}function F(e,n){return ar(e>>>0,n)}let en=null;function mn(){return(en===null||en.byteLength===0)&&(en=new Uint8Array(m.memory.buffer)),en}function ir(e){return je[e]}let je=new Array(1024).fill(void 0);je.push(void 0,null,!0,!1);let nn=je.length;function rr(e){return e==null}function A(e,n,t){if(t===void 0){const c=tn.encode(e),u=n(c.length,1)>>>0;return mn().subarray(u,u+c.length).set(c),S=c.length,u}let i=e.length,o=n(i,1)>>>0;const s=mn();let l=0;for(;l<i;l++){const c=e.charCodeAt(l);if(c>127)break;s[o+l]=c}if(l!==i){l!==0&&(e=e.slice(l)),o=t(o,i,i=l+e.length*3,1)>>>0;const c=mn().subarray(o+l,o+i),u=tn.encodeInto(e,c);l+=u.written,o=t(o,i,l,1)>>>0}return S=l,o}function z(e){const n=ir(e);return tr(e),n}let pn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});pn.decode();const or=2146435072;let yn=0;function ar(e,n){return yn+=n,yn>=or&&(pn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),pn.decode(),yn=n),pn.decode(mn().subarray(e,e+n))}const tn=new TextEncoder;"encodeInto"in tn||(tn.encodeInto=function(e,n){const t=tn.encode(e);return n.set(t),{read:e.length,written:t.length}});let S=0,m;function sr(e,n){return m=e.exports,Ue=null,en=null,m}async function dr(e,n){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(o){if(t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const i=await e.arrayBuffer();return await WebAssembly.instantiate(i,n)}else{const i=await WebAssembly.instantiate(e,n);return i instanceof WebAssembly.Instance?{instance:i,module:e}:i}function t(i){switch(i){case"basic":case"cors":case"default":return!0}return!1}}async function lr(e){if(m!==void 0)return m;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/assets/nanobpmn_engine_bg-DRNrIVE8.wasm",import.meta.url));const n=er();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:i}=await dr(await e,n);return sr(t)}let ln=null;function cr(e){return ln||(ln=lr(void 0).then(()=>{}).catch(n=>{throw ln=null,n})),ln}function X(e){return JSON.parse(e)}class mr{constructor(n){L(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return X(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,i,o){return JSON.parse(this.engine.activateJobs(n,t,i,o))}completeJob(n,t){return X(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:i,...o}=t??{};return X(this.engine.completeAgentJob(n,JSON.stringify(i??{}),JSON.stringify(o??{})))}failJob(n,t,i){return X(this.engine.failJob(n,t,i))}throwError(n,t,i){return X(this.engine.throwError(n,t,i))}updateRetries(n,t){return X(this.engine.updateRetries(n,t))}resolveIncident(n){return X(this.engine.resolveIncident(n))}setVariables(n,t,i){return X(this.engine.setVariables(n,t||"{}",i))}broadcastSignal(n,t){return X(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return X(this.engine.cancelInstance(n))}modify(n,t,i){return X(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(i??[])))}completeUserTask(n,t){return X(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,i){return X(this.engine.assignUserTask(n,t,i))}unassignUserTask(n){return X(this.engine.unassignUserTask(n))}updateUserTask(n,t){return X(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,i){return X(this.engine.correlateMessage(n,t,i||"{}"))}advanceTime(n){return X(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return X(this.engine.snapshot())}free(){this.engine.free()}}async function pr(e){return await cr(),new mr(new Pn)}class Pt extends Error{constructor(t,i){super(t);L(this,"retries");this.name="JobFailure",this.retries=i==null?void 0:i.retries}}function ur(e,n=[]){if(e.instances.filter(o=>!o.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const i=new Set(n);return e.jobs.some(o=>!i.has(o.jobType))?"unhandledJobs":e.userTasks.some(o=>o.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function hr(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(i=>i.jobType))].filter(i=>!t.has(i)).sort()}async function gr(e,n,t){let i;try{const o=await n(t);i=JSON.stringify(o??{})}catch(o){const s=o instanceof Pt&&o.retries!==void 0?o.retries:Math.max(0,t.retries-1),l=o instanceof Error?o.message:String(o);e.failJob(t.key,s,l);return}e.completeJob(t.key,i)}async function br(e,n,t){let i;try{i=await n(t),JSON.stringify(i)}catch(o){const s=o instanceof Pt&&o.retries!==void 0?o.retries:Math.max(0,t.retries-1),l=o instanceof Error?o.message:String(o);e.failJob(t.key,s,l);return}e.completeAgentJob(t.key,i)}async function _r(e,n,t={}){const i=t.maxJobsPerActivation??10,o=t.lockTimeoutMs??3e4,s=t.worker??"bojtos",l=t.agents??{};for(const d of Object.keys(l))if(d in n)throw new Error(`dispatchRound: job type "${d}" is registered as both a worker and an agent — register it as exactly one`);const c=[];for(const[d,_]of Object.entries(n))for(const y of e.activateJobs(d,i,o,s))c.push({handler:_,job:y});const u=[];for(const[d,_]of Object.entries(l))for(const y of e.activateJobs(d,i,o,s))u.push({handler:_,job:y});for(const{handler:d,job:_}of c)await gr(e,d,_);for(const{handler:d,job:_}of u)await br(e,d,_);const a=e.snapshot(),p=c.length+u.length;if(p>0)return{snapshot:a,handled:p};const h=[...Object.keys(n),...Object.keys(l)];return{snapshot:a,handled:p,reason:ur(a,h),unhandled:hr(a,h)}}function fr({bpmn:e}){const n=b.useRef(null),[t,i]=b.useState("loading"),[o,s]=b.useState(null),[l,c]=b.useState([]),[u,a]=b.useState(null),p=b.useRef(e),h=b.useRef(0),d=b.useRef(null),_=b.useRef(new Map),y=b.useCallback((T,E)=>{_.current.set(T,E)},[]),M=b.useCallback(T=>_.current.get(T),[]),v=b.useCallback((T,E)=>{const N=T.deploy(E);return p.current=E,_.current.clear(),c(N.processIds),a(null),s(null),N.processIds},[]);b.useEffect(()=>{let T=!1;return i("loading"),c([]),a(null),s(null),pr().then(E=>{if(T){E.free();return}try{v(E,e)}catch(N){E.free(),s(String(N)),i("error");return}n.current=E,i("ready")}).catch(E=>{T||(s(String(E)),i("error"))}),()=>{var E;T=!0,(E=n.current)==null||E.free(),n.current=null,_.current.clear()}},[e]);const g=b.useCallback(T=>{const E=n.current;if(!E)return null;try{const N=T(E);return a(N),s(null),N}catch(N){return s(String(N)),null}},[]),j=b.useCallback((T,E)=>g(N=>N.createInstance(T,E)),[g]),B=b.useCallback((T,E)=>g(N=>N.completeUserTask(T,E)),[g]),O=b.useCallback(T=>g(E=>E.advanceTime(T)),[g]),re=b.useCallback((T,E)=>g(N=>N.broadcastSignal(T,E)),[g]);function W(T,E){const[N]=T.activateJobs(E,1,3e4,"manual-control");if(!N)throw new Error(`No waiting job of type "${E}" to resolve.`);return N}const Ne=b.useCallback((T,E)=>g(N=>{const U=W(N,T);return N.completeJob(U.key,E)}),[g]),Ee=b.useCallback((T,E,N)=>g(U=>{const $=W(U,T);return U.throwError($.key,E,N)}),[g]),we=b.useCallback((T,E,N)=>g(U=>U.correlateMessage(T,E,N)),[g]),Pe=b.useCallback(async(T,E)=>{const N=n.current;if(!N)return null;const U=h.current,$=_r(N,T,E);d.current=$;try{const ye=await $;return n.current!==N||h.current!==U?null:(a(ye.snapshot),s(null),ye)}catch(ye){return n.current!==N||h.current!==U||(a(N.snapshot()),s(String(ye))),null}finally{d.current===$&&(d.current=null)}},[]),Z=b.useCallback(async()=>{var T;await((T=d.current)==null?void 0:T.catch(()=>{}))},[]),me=b.useCallback(async()=>{await Z();const T=n.current;if(T){h.current++;try{T.reset(),v(T,p.current)}catch(E){s(String(E))}}},[v,Z]),q=b.useCallback(async T=>{await Z();const E=n.current;if(!E)return null;h.current++;try{return E.reset(),v(E,T)}catch(N){return s(String(N)),null}},[v,Z]);return{phase:t,error:o,processIds:l,snapshot:u,createInstance:j,stepWorkers:Pe,completeUserTask:B,advanceTime:O,broadcastSignal:re,completeJobManually:Ne,throwJobError:Ee,correlateMessage:we,reset:me,redeploy:q,setRunImage:y,getRunImage:M}}function wr(e,n){return e.slice(n)}function yr(e,n,t,i){const o=e.snapshot,s="⏸ waiting for a human — complete the task below to continue",l=o.userTasks.some(c=>c.state==="Created");if(e.handled>0){const c=o.activeElementIds.map(t),u=n.length?` via ${n.map(a=>`${t(a.from)} → ${t(a.to)}`).join(", ")}`:"";return o.completedInstances>=1?{kind:"done",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — ✅ process instance completed`}:l?{kind:"human",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — ${s}`}:{kind:"step",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${u} — now at ${c.length?c.join(", "):"—"}`}}switch(e.reason){case"completed":return{kind:"done",text:"✅ process instance completed"};case"userTasks":return{kind:"human",text:s};case"timers":return{kind:"step",text:"⏱ waiting on a timer — advance the clock to continue"};case"messages":return{kind:"step",text:"✉ waiting on a message — correlate it to continue"};case"signals":return{kind:"step",text:"📶 waiting on a signal — broadcast it to continue"};case"incidents":return{kind:"error",text:"A job failed — incident on the diagram"};case"unhandledJobs":{const c=e.unhandled??[];return i&&c.length>0&&c.every(u=>i.has(u))?{kind:"human",text:s}:{kind:"error",text:`⏭ waiting on job type(s) with no worker registered: ${c.join(", ")}`}}case"idle":return{kind:"step",text:"Nothing to step — no instance is running."};default:return{kind:"step",text:e.reason?`Step blocked on an unrecognized reason: ${e.reason}`:"Nothing to step — no instance is running."}}}const vr="the Scripted or Endpoint brain";async function hn(e=vr){const n=navigator.gpu;if(!n)return`This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick ${e}.`;let t;try{t=await n.requestAdapter()}catch(i){return`WebGPU adapter request failed (${i instanceof Error?i.message:String(i)}). Try ${e} instead.`}return t?null:`This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick ${e} instead.`}const Mr=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function At(e){return An.get(e)??{}}const An=new Map;async function xr(){if(An.size>0)return;const{prebuiltAppConfig:e}=await ue(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)An.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const fn=Mr.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...At(e.id)})),Ct=fn[0].id;async function Nr(){return await xr(),fn.map(e=>({...e,...At(e.id)}))}function Dt(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function Er(e,n=Dt()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function kr(e){try{const{hasModelInCache:n}=await ue(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function gn(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function Xn(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class cn{constructor(){L(this,"kind","browser");L(this,"model",null);L(this,"engine",null);L(this,"worker",null);L(this,"generation",0);L(this,"chat",async(n,t=512,i)=>{var s,l;const o=this.engine;if(!o||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const c=await o.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let u="";for await(const a of c){const p=((l=(s=a.choices[0])==null?void 0:s.delta)==null?void 0:l.content)??"";p&&(u+=p,i==null||i(p))}return u}catch(c){const u=c instanceof Error?c.message:String(c);throw gn(u)?(this.teardown(),new Error(`The in-browser model stopped: ${Xn()}`)):c}})}async connect(n=Ct,t){var u,a;const i=await hn();if(i)throw new Error(i);if(this.engine&&this.model===n)return n;const o=++this.generation,s=p=>{o===this.generation&&(t==null||t({progress:p.progress??0,text:p.text??""}))};this.teardown();let l,c;try{const{CreateWebWorkerMLCEngine:p}=await ue(async()=>{const{CreateWebWorkerMLCEngine:h}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:h}},[]);c=new Worker(new URL("/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),l=await p(c,n,{initProgressCallback:s})}catch(p){if(c==null||c.terminate(),o!==this.generation)throw new Error("cancelled");const h=p instanceof Error?p.message:String(p);if(gn(h))throw new Error(`Couldn't load ${n} in the browser (${h}). ${Xn()}`);const d=(a=(u=fn.find(_=>_.id===n))==null?void 0:u.requiredFeatures)==null?void 0:a.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${h}). `+(d?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(o!==this.generation)throw l.unload().catch(()=>{}),c==null||c.terminate(),new Error("cancelled");return this.engine=l,this.worker=c??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const Bt="http://localhost:11434/v1";function bn(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(i=>(i=globalThis.location)==null?void 0:i.origin)()??""}){let o;try{o=new URL(Lt(e)).hostname}catch{return null}const s=l=>l==="localhost"||l==="127.0.0.1"||l==="::1"||l==="[::1]";return!s(o)||s(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function Lt(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class et extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class nt{constructor(n=Bt,t="",i=""){L(this,"kind","endpoint");L(this,"baseUrl");L(this,"model",null);L(this,"models",[]);L(this,"apiKey");L(this,"requestedModel");L(this,"chat",async(n,t=512,i)=>{var a,p,h;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const o=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!o.ok||!o.body){const d=await o.text().catch(()=>"");throw new Error(`chat/completions HTTP ${o.status} ${o.statusText}${d?` — ${d.slice(0,300)}`:""}`)}const s=o.body.getReader(),l=new TextDecoder;let c="",u="";for(;;){const{value:d,done:_}=await s.read();if(_)break;c+=l.decode(d,{stream:!0});let y;for(;(y=c.indexOf(`
`))>=0;){const M=c.slice(0,y).trim();if(c=c.slice(y+1),!M.startsWith("data:"))continue;const v=M.slice(5).trim();if(v==="[DONE]")continue;let g;try{g=JSON.parse(v)}catch{continue}g.model&&(this.model=g.model);const j=(a=g.choices)==null?void 0:a[0],B=((p=j==null?void 0:j.delta)==null?void 0:p.content)??((h=j==null?void 0:j.message)==null?void 0:h.content)??"";B&&(u+=B,i==null||i(B))}}return u});this.baseUrl=Lt(n),this.apiKey=t.trim(),this.requestedModel=i.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(i){const o=bn(this.baseUrl);throw new Error(o??`Can't reach ${this.baseUrl} (${i instanceof Error?i.message:String(i)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new et(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(i=>i.id).filter(i=>!!i),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof et&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(i=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${i instanceof Error?i.message:String(i)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const i=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${i?` — ${i.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}const tt="gemini-nano";function _n(){const e=globalThis.LanguageModel;return typeof(e==null?void 0:e.create)=="function"&&typeof e.availability=="function"?e:null}function Ir(){return _n()!==null}async function Rt(){const e=_n();if(!e)return"This browser has no built-in AI model. Chrome's Prompt API (Gemini Nano) needs Chrome 138+ on desktop Windows 10/11, macOS 13+, Linux or a Chromebook Plus. Use the Scripted, In-browser (WebGPU) or API endpoint brain instead.";let n;try{n=await e.availability()}catch(t){return`Chrome couldn't report on its built-in model (${t instanceof Error?t.message:String(t)}).`}return n==="unavailable"?"Chrome exposes the built-in AI API here, but Gemini Nano can't run on this device. Chrome requires ~22 GB free on the volume holding your Chrome profile, and either a GPU with more than 4 GB of VRAM or 16 GB of RAM with 4+ CPU cores. Check chrome://on-device-internals for the details.":null}class it{constructor(){L(this,"kind","chrome");L(this,"model",null);L(this,"warm",null);L(this,"connecting",null);L(this,"chat",async(n,t,i)=>{if(!this.model)throw new Error("ChromeBrain.chat called before connect()");const o=_n();if(!o)throw new Error("Chrome's built-in AI API went away.");const s=n.filter(u=>u.role==="system"),l=n.filter(u=>u.role!=="system"),c=await o.create(s.length?{initialPrompts:s}:void 0);try{const u=c.promptStreaming(l).getReader();let a="";for(;;){const{done:p,value:h}=await u.read();if(p)break;h&&(a+=h,i==null||i(h))}return a}finally{c.destroy()}})}async connect(n){const t=await Rt();if(t)throw new Error(t);const i=_n();this.dispose();const o=new AbortController;this.connecting=o;try{this.warm=await i.create({signal:o.signal,monitor:s=>{s.addEventListener("downloadprogress",l=>{n==null||n({progress:l.loaded,text:"Downloading Gemini Nano"})})}})}catch(s){if(o.signal.aborted)throw new Error("cancelled");const l=s instanceof Error?s.message:String(s);throw new Error(`Chrome couldn't start its built-in model (${l}). The first run downloads Gemini Nano and must be triggered by a click — press Connect again, and check chrome://on-device-internals if it keeps failing.`)}finally{this.connecting=null}return this.model=tt,tt}cancelConnect(){var n;(n=this.connecting)==null||n.abort()}dispose(){var n,t;(n=this.connecting)==null||n.abort(),this.connecting=null,(t=this.warm)==null||t.destroy(),this.warm=null,this.model=null}}const Tr=[{id:"onnx-community/Florence-2-base-ft",label:"Florence-2 base",downloadLabel:"~0.4 GB"},{id:"onnx-community/Florence-2-large-ft",label:"Florence-2 large (higher quality)",downloadLabel:"~1.6 GB"}],Ft=Tr.map(e=>({...e,label:`${e.label} (${e.downloadLabel})`})),zt=Ft[0].id,jr="<OCR>",rt="UNKNOWN (scripted brain — connect the in-browser model to read a photo)";function Sr(e,n){if(e)return typeof e=="function"?e(n):e[n]}class Pr{constructor(n){L(this,"kind","scripted-vision");L(this,"model",null);L(this,"read",async(n,t,i)=>{const o=typeof n=="string"?Sr(this.lookup,n)??rt:rt;return i==null||i(o),o});this.lookup=n}dispose(){}}function Ar(e){return new Pr(e)}class ot{constructor(){L(this,"kind","browser-vision");L(this,"model",null);L(this,"modelHandle",null);L(this,"processor",null);L(this,"loadImage",null);L(this,"generation",0);L(this,"read",async(n,t,i)=>{const o=this.modelHandle,s=this.processor,l=this.loadImage;if(!o||!s||!l||!this.model)throw new Error("BrowserVisionBrain.read called before connect()");const c=t&&t.startsWith("<")?t:jr,u=await l(n),a=s.construct_prompts(c),p=await s(u,a),h=await o.generate({...p,max_new_tokens:512,num_beams:1,do_sample:!1}),d=s.batch_decode(h,{skip_special_tokens:!1})[0],_=s.post_process_generation(d,c,u.size),y=Cr(_,c);return i==null||i(y),y})}async connect(n=zt,t){var c,u;const i=await hn("the scripted-vision fallback");if(i)throw new Error(i);if(this.modelHandle&&this.model===n)return n;const o=++this.generation,s=a=>{o===this.generation&&(t==null||t({progress:(a.progress??0)/100,text:a.file?`${a.status??"loading"} ${a.file}`:a.status??""}))};this.teardown();let l;try{const{Florence2ForConditionalGeneration:a,AutoProcessor:p,load_image:h}=await ue(async()=>{const{Florence2ForConditionalGeneration:y,AutoProcessor:M,load_image:v}=await import("./transformers.web-BBsBgM6g.js");return{Florence2ForConditionalGeneration:y,AutoProcessor:M,load_image:v}},[]),d=await a.from_pretrained(n,{dtype:"fp32",device:"webgpu",progress_callback:s}),_=await p.from_pretrained(n);l={model:d,processor:_,loadImage:h}}catch(a){if(o!==this.generation)throw new Error("cancelled");const p=a instanceof Error?a.message:String(a);throw new Error(`Couldn't load ${n} in the browser (${p}). Try the smaller Florence-2 base model, check your connection, or use the scripted-vision fallback.`)}if(o!==this.generation)throw Promise.resolve((u=(c=l.model).dispose)==null?void 0:u.call(c)).catch(()=>{}),new Error("cancelled");return this.modelHandle=l.model,this.processor=l.processor,this.loadImage=l.loadImage,this.model=n,n}teardown(){var t;const n=this.modelHandle;this.modelHandle=null,this.processor=null,this.loadImage=null,this.model=null,Promise.resolve((t=n==null?void 0:n.dispose)==null?void 0:t.call(n)).catch(()=>{})}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}function Cr(e,n){const t=e[n];if(typeof t=="string")return t.trim();if(t&&typeof t=="object"){const i=t.labels;return Array.isArray(i)?i.join(" ").trim():JSON.stringify(t)}return""}function Dr(){const[e,n]=b.useState("scripted"),[t,i]=b.useState("idle"),[o,s]=b.useState(null),[l,c]=b.useState(null),[u,a]=b.useState(null),[p,h]=b.useState(null),[d,_]=b.useState(null),[y,M]=b.useState(null),[v,g]=b.useState(null),[j,B]=b.useState(Ct),[O,re]=b.useState(Bt),[W,Ne]=b.useState(""),[Ee,we]=b.useState([]),[Pe,Z]=b.useState("idle"),[me,q]=b.useState(null),[T,E]=b.useState(""),[N,U]=b.useState(null),$=b.useRef(null),[ye,Ge]=b.useState("scripted-vision"),[Je,oe]=b.useState("idle"),[He,ke]=b.useState(null),[We,Le]=b.useState(zt),[Re,Ae]=b.useState(null),[wn,Fe]=b.useState(null),[Ze,se]=b.useState(null),[ae,ze]=b.useState(null),ee=b.useRef(null),Ce=b.useRef(!1),Oe=b.useRef(0),De=b.useCallback(k=>async(...Y)=>{try{return await k.chat(...Y)}catch(C){const J=C instanceof Error?C.message:String(C);throw k instanceof cn&&gn(J)&&(U(null),c(null),i("error"),s(J)),C}},[]),R=b.useCallback(k=>async(...Y)=>{try{return await k.read(...Y)}catch(C){const J=C instanceof Error?C.message:String(C);throw gn(J)&&(ze(null),Ae(null),oe("error"),ke(J)),C}},[]);b.useEffect(()=>{hn().then(k=>{_(k),h(k===null)}),Rt().then(g),hn("the scripted-vision fallback").then(k=>{se(k),Ce.current||(Ce.current=!0,Ge(k===null?"browser-vision":"scripted-vision"))})},[]),b.useEffect(()=>{let k=!1;return M(null),kr(j).then(Y=>{k||M(Y)}),()=>{k=!0}},[j]),b.useEffect(()=>()=>{var k;return(k=$.current)==null?void 0:k.dispose()},[]),b.useEffect(()=>()=>{var k;return(k=ee.current)==null?void 0:k.dispose()},[]);const ve=b.useCallback(k=>{n(k),i("idle"),s(null),c(null),a(null),U(null)},[]),Be=b.useCallback(k=>{var Y,C;Ce.current=!0,(Y=ee.current)==null||Y.cancelConnect(),(C=ee.current)==null||C.dispose(),ee.current=null,Ge(k),oe("idle"),ke(null),Ae(null),Fe(null),ze(null)},[]),he=b.useCallback(()=>{var k;(k=$.current)==null||k.dispose(),$.current=null,U(null),c(null)},[]),on=b.useCallback(()=>{const k=$.current;(k instanceof cn||k instanceof it)&&k.cancelConnect(),he(),i("idle"),a(null),s(null)},[he]),ge=b.useCallback(async()=>{const k=++Oe.current,Y=()=>k!==Oe.current,C=bn(O);if(C){we([]),Z("error"),q(C);return}Z("loading"),q(null);const J=new nt(O,T);try{const Me=await J.listModels();if(Y())return;we(Me),Z("ready"),Ne(Ke=>Ke&&Me.includes(Ke)?Ke:Me[0]??"")}catch(Me){if(Y())return;we([]),Ne(""),Z("error"),q(Me instanceof Error?Me.message:String(Me))}finally{J.dispose()}},[O,T]),Ve=b.useCallback(async()=>{var k,Y;if(e==="scripted"){U(null),i("ready");return}if(e==="endpoint"){const C=bn(O);if(C){he(),s(C),i("error");return}}i("connecting"),s(null),a(null);try{if(e==="browser"){const C=$.current instanceof cn?$.current:new cn;$.current&&$.current!==C&&$.current.dispose(),$.current=C;const J=await C.connect(j,a);c(J),U(()=>De(C)),M(!0)}else if(e==="chrome"){(k=$.current)==null||k.dispose();const C=new it;$.current=C;const J=await C.connect(a);g(null),c(J),U(()=>De(C))}else{(Y=$.current)==null||Y.dispose();const C=new nt(O,T,W);$.current=C;const J=await C.connect();c(J),U(()=>De(C))}i("ready")}catch(C){const J=C instanceof Error?C.message:String(C);if(J==="cancelled")return;s(J),i("error"),U(null)}finally{a(null)}},[e,j,O,W,T,he,De]),Ie=b.useCallback(()=>{var k;(k=ee.current)==null||k.dispose(),ee.current=null,ze(null),Ae(null)},[]),an=b.useCallback(()=>{var k;(k=ee.current)==null||k.cancelConnect(),Ie(),oe("idle"),Fe(null),ke(null)},[Ie]),Ye=b.useCallback(async()=>{if(ye==="scripted-vision"){Ie(),oe("ready"),ke(null);return}oe("connecting"),ke(null),Fe(null);try{const k=ee.current instanceof ot?ee.current:new ot;ee.current&&ee.current!==k&&ee.current.dispose(),ee.current=k;const Y=await k.connect(We,Fe);Ae(Y),ze(()=>R(k)),oe("ready")}catch(k){const Y=k instanceof Error?k.message:String(k);if(Y==="cancelled")return;ke(Y),oe("error"),ze(null),Ae(null)}finally{Fe(null)}},[ye,We,Ie,R]);return{kind:e,setKind:ve,status:t,error:o,modelInUse:l,progress:u,webgpu:p,webgpuReason:d,browserModelCached:y,chromeAiReason:v,cancelConnect:on,browserModel:j,setBrowserModel:B,endpointUrl:O,setEndpointUrl:re,endpointModel:W,setEndpointModel:Ne,endpointModels:Ee,endpointModelsStatus:Pe,endpointModelsError:me,listEndpointModels:ge,apiKey:T,setApiKey:E,connect:Ve,chat:N,visionKind:ye,setVisionKind:Be,visionStatus:Je,visionError:He,visionModel:We,setVisionModel:Le,visionModelInUse:Re,visionProgress:wn,visionWebgpuReason:Ze,connectVision:Ye,cancelVisionConnect:an,vision:ae}}const Cn="#s=",Br=["scripted","browser","chrome","endpoint"];function Lr(e){return typeof e=="string"&&Br.includes(e)}function Rr(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,i={};return Lr(t.brain)&&(i.brain=t.brain),i}}catch{}return{}}function Ot(e=location.hash){if(!e.startsWith(Cn))return{};let n;try{n=decodeURIComponent(e.slice(Cn.length))}catch{return{}}return Rr(n)}function Fr(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":Cn+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function zr(e){const n={...Ot(),...e},t=Fr(n),i=new URL(location.href);i.hash=t,history.replaceState(history.state,"",i)}const at=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"chrome",label:"Chrome built-in",hint:"Gemini Nano, built into Chrome. Chrome owns the weights — no download from this page, no API key."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server. Ollama by default. Local pages only."}],st=[{kind:"scripted-vision",label:"Scripted",hint:"No model. The example's known plate is returned — deterministic and offline."},{kind:"browser-vision",label:"In-browser (WebGPU)",hint:"Reads the photo with a vision model on your GPU. First run downloads weights."}];function Or({brain:e,showText:n=!0,showVision:t=!1}){return r.jsxs("div",{className:"brain",children:[n&&r.jsx(Ur,{brain:e}),n&&t&&r.jsx("hr",{className:"brain-divider"}),t&&r.jsx($r,{brain:e})]})}function Ur({brain:e}){const n=at.find(d=>d.kind===e.kind),t=at.filter(d=>d.kind!=="chrome"||Ir()),i=bn(e.endpointUrl),[o,s]=b.useState(fn);b.useEffect(()=>{Nr().then(s)},[]);const{kind:l,endpointUrl:c,apiKey:u,listEndpointModels:a}=e;b.useEffect(()=>{if(l!=="endpoint"||i)return;const d=setTimeout(()=>void a(),400);return()=>clearTimeout(d)},[l,c,u,i,a]);const p=o.find(d=>d.id===e.browserModel),h=p?Er(p,Dt()):null;return r.jsxs("div",{className:"brain-section",children:[r.jsxs("div",{className:"brain-modes",children:[r.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Agent brain",children:t.map(d=>r.jsx(H,{size:"sm",variant:e.kind===d.kind?"default":"secondary","aria-pressed":e.kind===d.kind,onClick:()=>e.setKind(d.kind),children:d.label},d.kind))}),r.jsxs("div",{className:"brain-status",children:[e.status==="ready"&&e.kind!=="scripted"&&r.jsx(ie,{variant:"success",className:"brain-status-badge",children:e.modelInUse??"connected"}),e.status==="connecting"&&r.jsx(ie,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.status==="error"&&r.jsx(ie,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),r.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&r.jsxs("div",{className:"brain-config",children:[r.jsxs("div",{className:"field",children:[r.jsx(qe,{htmlFor:"browser-model",children:"Model"}),r.jsxs(Nn,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[r.jsx(En,{id:"browser-model",children:r.jsx(kn,{})}),r.jsx(In,{children:o.map(d=>r.jsx(Tn,{value:d.id,children:d.label},d.id))})]}),e.browserModelCached===!0&&r.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&r.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"No WebGPU in this browser"}),r.jsx(ce,{children:e.webgpuReason})]}),e.webgpu!==!1&&h&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"This model may not fit in GPU memory"}),r.jsx(ce,{children:h})]})]}),e.kind==="chrome"&&r.jsxs("div",{className:"brain-config",children:[r.jsx("p",{className:"field-hint",children:"Nothing to configure: Chrome downloads and manages Gemini Nano itself, so the first Connect may fetch it once and later visits reuse it. Prompts never leave your machine. It's a very small model — expect it to follow the tool-calling format less reliably than an endpoint model."}),e.chromeAiReason&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"Chrome's built-in model isn't available here"}),r.jsx(ce,{children:e.chromeAiReason})]})]}),e.kind==="endpoint"&&r.jsxs("div",{className:"brain-config",children:[r.jsxs("div",{className:"field",children:[r.jsx(qe,{htmlFor:"endpoint-url",children:"Endpoint"}),r.jsx(Vn,{id:"endpoint-url",value:e.endpointUrl,onChange:d=>e.setEndpointUrl(d.target.value),disabled:e.status==="connecting"}),r.jsxs("p",{className:"field-hint",children:["Ollama allows ",r.jsx("code",{children:"localhost"})," origins out of the box; set"," ",r.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}),i&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"A local server won't work from this URL"}),r.jsx(ce,{children:i})]})]}),r.jsxs("div",{className:"field",children:[r.jsx(qe,{htmlFor:"endpoint-model",children:"Model"}),r.jsxs("div",{className:"endpoint-model-row",children:[r.jsxs(Nn,{value:e.endpointModel,onValueChange:e.setEndpointModel,disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||e.endpointModels.length===0,children:[r.jsx(En,{id:"endpoint-model",className:"endpoint-model-select",children:r.jsx(kn,{placeholder:e.endpointModelsStatus==="loading"?"Loading models…":e.endpointModelsStatus==="idle"?"Enter an endpoint above":e.endpointModelsStatus==="error"?"No models — check the endpoint":e.endpointModels.length===0?"No models served":"Select a model"})}),r.jsx(In,{children:e.endpointModels.map(d=>r.jsx(Tn,{value:d,children:d},d))})]}),r.jsx(H,{size:"sm",variant:"secondary",onClick:()=>void e.listEndpointModels(),disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||i!==null,children:e.endpointModelsStatus==="loading"?"Refreshing…":"Refresh"})]}),r.jsxs("p",{className:"field-hint",children:["Fetched from the endpoint's ",r.jsx("code",{children:"/models"}),". Tiny models (e.g. SmolLM2) usually can't follow the tool-calling format — prefer ",r.jsx("code",{children:"llama3.2:3b"}),", ",r.jsx("code",{children:"qwen2.5"})," or larger."]}),e.endpointModelsStatus==="error"&&!i&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"Couldn't list models"}),r.jsx(ce,{children:e.endpointModelsError})]})]}),r.jsxs("div",{className:"field",children:[r.jsx(qe,{htmlFor:"endpoint-key",children:"API key (optional)"}),r.jsx(Vn,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:d=>e.setApiKey(d.target.value),disabled:e.status==="connecting"})]})]}),e.kind!=="scripted"&&r.jsxs("div",{className:"brain-actions",children:[r.jsx(H,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting"||e.kind==="chrome"&&e.chromeAiReason!==null||e.kind==="endpoint"&&(e.endpointModel===""||e.endpointModelsStatus==="loading"||i!==null),children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&(e.kind==="browser"||e.kind==="chrome")&&r.jsx(H,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&r.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.progress&&r.jsx("div",{className:"brain-progress",role:"progressbar","aria-valuenow":Math.round(e.progress.progress*100),"aria-valuemin":0,"aria-valuemax":100,children:r.jsx("div",{className:"brain-progress-bar",style:{width:`${Math.round(e.progress.progress*100)}%`}})}),e.error&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"Couldn't connect"}),r.jsx(ce,{children:e.error})]})]})}function $r({brain:e}){const n=st.find(t=>t.kind===e.visionKind);return r.jsxs("div",{className:"brain-section brain-vision",children:[r.jsx(qe,{children:"Vision (reads the image)"}),r.jsxs("div",{className:"brain-modes",children:[r.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Vision brain",children:st.map(t=>r.jsx(H,{size:"sm",variant:e.visionKind===t.kind?"default":"secondary","aria-pressed":e.visionKind===t.kind,onClick:()=>e.setVisionKind(t.kind),children:t.label},t.kind))}),r.jsxs("div",{className:"brain-status",children:[e.visionStatus==="ready"&&e.visionKind==="browser-vision"&&r.jsx(ie,{variant:"success",className:"brain-status-badge",children:e.visionModelInUse??"connected"}),e.visionStatus==="connecting"&&r.jsx(ie,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.visionStatus==="error"&&r.jsx(ie,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),r.jsx("p",{className:"field-hint",children:n.hint}),e.visionKind==="scripted-vision"&&e.webgpu===!1&&e.visionWebgpuReason&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"No WebGPU in this browser"}),r.jsx(ce,{children:e.visionWebgpuReason})]}),e.visionKind==="browser-vision"&&r.jsxs("div",{className:"brain-config",children:[r.jsxs("div",{className:"field",children:[r.jsx(qe,{htmlFor:"vision-model",children:"Model"}),r.jsxs(Nn,{value:e.visionModel,onValueChange:e.setVisionModel,disabled:e.visionStatus==="connecting",children:[r.jsx(En,{id:"vision-model",children:r.jsx(kn,{})}),r.jsx(In,{children:Ft.map(t=>r.jsx(Tn,{value:t.id,children:t.label},t.id))})]}),r.jsx("p",{className:"field-hint",children:"Connecting downloads the weights once (size shown above), then caches them — every token is read on your GPU, no server."})]}),e.webgpu===!1&&e.visionWebgpuReason&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"No WebGPU in this browser"}),r.jsx(ce,{children:e.visionWebgpuReason})]})]}),e.visionKind==="browser-vision"&&r.jsxs("div",{className:"brain-actions",children:[r.jsx(H,{size:"sm",onClick:()=>void e.connectVision(),disabled:e.visionStatus==="connecting",children:e.visionStatus==="ready"?"Reconnect":"Connect"}),e.visionStatus==="connecting"&&r.jsx(H,{size:"sm",variant:"secondary",onClick:e.cancelVisionConnect,children:"Cancel"}),e.visionProgress&&r.jsxs("span",{className:"field-hint",children:[Math.round(e.visionProgress.progress*100),"% —"," ",e.visionProgress.text]})]}),e.visionError&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"Couldn't connect the vision brain"}),r.jsx(ce,{children:e.visionError})]})]})}function Gr({imageInput:e,value:n,onSelect:t,disabled:i=!1}){const[o,s]=b.useState(null),[l,c]=b.useState(!1),u=b.useRef(null),a=b.useId(),p=b.useId(),h=b.useCallback(y=>{s(URL.createObjectURL(y)),t({imageName:y.name,pixels:y})},[t]);b.useEffect(()=>{if(o)return()=>URL.revokeObjectURL(o)},[o]);const d=b.useCallback(y=>{const M=y==null?void 0:y[0];M&&M.type.startsWith("image/")&&h(M)},[h]),_=(n==null?void 0:n.imageId)!=null?e.seedImages.find(y=>y.id===n.imageId):void 0;return r.jsxs("div",{className:"image-input",children:[e.label&&r.jsx("p",{className:"field-hint",children:e.label}),r.jsx("p",{className:"image-input-label",id:a,children:"Seed photos"}),r.jsx("div",{className:"image-gallery",role:"group","aria-labelledby":a,children:e.seedImages.map(y=>{const M=(n==null?void 0:n.imageId)===y.id;return r.jsxs("button",{type:"button","aria-pressed":M,className:`image-thumb${M?" image-thumb--selected":""}`,disabled:i,title:y.label??y.id,onClick:()=>{s(null),u.current&&(u.current.value=""),t({imageId:y.id,pixels:y.file})},children:[r.jsx("img",{src:y.thumb??y.file,alt:y.label??y.id}),y.label&&r.jsx("span",{children:y.label})]},y.id)})}),r.jsx("label",{className:"image-input-label",htmlFor:p,children:"Or upload your own photo"}),r.jsxs("div",{className:`image-drop${l?" image-drop--over":""}`,onDragOver:y=>{y.preventDefault(),i||c(!0)},onDragLeave:()=>c(!1),onDrop:y=>{y.preventDefault(),c(!1),i||d(y.dataTransfer.files)},children:[r.jsx("input",{ref:u,id:p,type:"file",accept:"image/*",disabled:i,onChange:y=>d(y.target.files)}),r.jsx("p",{className:"field-hint",children:"Drag a photo here, or pick one. Uploading a photo the model has never seen is the proof this runs for real — nothing leaves your browser."})]}),(o||_)&&r.jsxs("div",{className:"image-preview",children:[r.jsx("img",{src:o??(_==null?void 0:_.file),alt:o?(n==null?void 0:n.imageName)??"uploaded photo":(_==null?void 0:_.label)??(_==null?void 0:_.id)??"selected photo"}),r.jsx("span",{className:"field-hint",children:o?`Uploaded: ${(n==null?void 0:n.imageName)??"your photo"}`:`Selected: ${(_==null?void 0:_.label)??(_==null?void 0:_.id)}`}),r.jsx("button",{type:"button",className:"image-clear-btn",disabled:i,onClick:()=>{s(null),u.current&&(u.current.value=""),t(null)},children:"Clear"})]})]})}function Ut(e){return typeof e=="object"&&e!==null}function jd(e){const n=new Set,t=i=>{Ut(i)&&(typeof i.key=="string"&&n.add(i.key),Array.isArray(i.components)&&i.components.forEach(t))};return t(e),n}function Vr(e){const n={},t=i=>{Ut(i)&&(typeof i.key=="string"&&"defaultValue"in i&&(n[i.key]=i.defaultValue??""),Array.isArray(i.components)&&i.components.forEach(t))};return t(e),n}const Yr="wdf:section:v2:";function $t(e){return Yr+e}function dt(e){try{const n=window.localStorage.getItem($t(e));return n==="1"?!0:n==="0"?!1:void 0}catch{return}}function Qr(e,n){try{window.localStorage.setItem($t(e),n?"1":"0")}catch{}}function Bn(e,n=!0){const[t,i]=b.useState(()=>dt(e)??n);b.useEffect(()=>{i(dt(e)??n)},[e,n]);const o=b.useCallback(s=>{i(s),Qr(e,s)},[e]);return[t,o]}function $e({sectionId:e,title:n,description:t,defaultOpen:i=!0,className:o,children:s,...l}){const[c,u]=Bn(e,i);return r.jsx(ei,{className:["panel",o].filter(Boolean).join(" "),"data-tour":l["data-tour"],children:r.jsxs(ni,{open:c,onOpenChange:u,children:[r.jsxs(ti,{className:"panel-trigger",children:[r.jsxs("span",{className:"panel-trigger-text",children:[r.jsx("span",{className:"panel-title",children:n}),t!=null&&r.jsx("span",{className:"panel-desc",children:t})]}),r.jsx(ii,{className:"panel-chevron","aria-hidden":!0})]}),r.jsx(ri,{children:r.jsx(oi,{children:s})})]})})}function qr(e){return e.entries!==void 0}function Jr(e){const n=[];let t=null;for(const i of e)i.turn!==void 0?t&&t.turn===i.turn?t.entries.push(i):(t={turn:i.turn,entries:[i]},n.push(t)):(t=null,n.push(i));return n}function lt(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Hr({activation:e,result:n,labelFor:t}){const i=e.elementId??"";return r.jsxs("div",{className:"timeline-tool",children:[r.jsxs("div",{className:"timeline-tool-head",children:[r.jsx(ie,{variant:"info",children:"tool"}),r.jsx("strong",{children:t(i)||i}),r.jsx("code",{children:i})]}),e.args!==void 0&&Object.keys(e.args).length>0&&r.jsxs("div",{className:"timeline-kv",children:[r.jsx("span",{className:"timeline-kv-label",children:"arguments"}),r.jsx("code",{children:lt(e.args)})]}),r.jsxs("div",{className:"timeline-kv",children:[r.jsx("span",{className:"timeline-kv-label",children:"returned"}),r.jsx("code",{children:n?lt(n.result):"— waiting for the job to complete —"})]})]})}function Wr({group:e,labelFor:n}){const t=e.entries.find(a=>a.kind==="llm"),i=e.entries.filter(a=>a.kind==="agent"&&a.elementId),o=e.entries.filter(a=>a.kind==="vars"&&a.elementId),s=e.entries.filter(a=>a.kind==="agent"&&!a.elementId),l=e.entries.filter(a=>a.kind==="error"),c=new Set(i.map(a=>a.elementId)),u=e.entries.filter(a=>a.kind==="tool"||a.kind==="vars"&&a.elementId&&!c.has(a.elementId)).sort((a,p)=>a.id-p.id);return r.jsxs("div",{className:"timeline-turn",children:[r.jsxs("div",{className:"timeline-turn-head",children:[r.jsxs(ie,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&r.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&r.jsx("blockquote",{className:"timeline-reply",children:t.text}),s.map(a=>r.jsx("div",{className:"timeline-note",children:a.text},a.id)),i.map(a=>r.jsx(Hr,{activation:a,result:o.find(p=>p.elementId===a.elementId),labelFor:n},a.id)),u.map(a=>r.jsxs("div",{className:`log-line log-${a.kind}`,children:[a.pending?"⏳ ":"",a.text]},a.id)),l.map(a=>r.jsxs("div",{className:"timeline-error",children:["⚠ ",a.text]},a.id))]})}function Zr({log:e,elementStats:n=[],incidents:t=[],labelFor:i=s=>s,variables:o}){const s=b.useMemo(()=>Jr(e),[e]),[l,c]=b.useState(!1),[u,a]=Bn("engine-view",!1),p=b.useRef(null);b.useEffect(()=>{const d=p.current;d&&(d.scrollTop=d.scrollHeight)},[s]);const h=()=>{var y;const d={log:e.map(({id:M,...v})=>v),elementStats:n,incidents:t},_=JSON.stringify(d,null,2);(y=navigator.clipboard)!=null&&y.writeText&&navigator.clipboard.writeText(_).then(()=>{c(!0),setTimeout(()=>c(!1),1500)}).catch(()=>{})};return r.jsxs($e,{sectionId:"activity",className:"grow activity-card",title:"Agent activity",description:"Agent turns, model replies, and tool calls — read top to bottom as a story.",children:[r.jsx("div",{className:"timeline-toolbar",children:r.jsx(H,{variant:"secondary",size:"sm",onClick:h,children:l?"Copied!":"Copy run as JSON"})}),r.jsx("div",{className:"timeline",ref:p,children:s.length===0?r.jsx("div",{className:"log-empty",children:"Press Run or Step to start."}):s.map(d=>qr(d)?r.jsx(Wr,{group:d,labelFor:i},`turn-${d.turn}-${d.entries[0].id}`):r.jsxs("div",{className:`log-line log-${d.kind}`,children:[d.pending?"⏳ ":"",d.text]},d.id))}),o,(n.length>0||t.length>0)&&r.jsxs("details",{className:"engine-view",open:u,onToggle:d=>a(d.currentTarget.open),children:[r.jsxs("summary",{children:["Element completion",t.length>0&&` · ${t.length} incident${t.length===1?"":"s"}`]}),r.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&r.jsxs("div",{className:"timeline-stats",children:[r.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),r.jsx("ul",{children:n.filter(d=>d.completed>0||(d.active??0)>0).map(d=>r.jsxs("li",{children:[r.jsx("code",{children:i(d.elementId)||d.elementId})," ","completed ",d.completed,d.active?`, ${d.active} active`:""]},d.elementId))})]}),t.length>0&&r.jsxs("div",{className:"timeline-incidents",children:[r.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),r.jsx("ul",{children:t.map((d,_)=>r.jsxs("li",{children:[r.jsx("code",{children:i(d.elementId)||d.elementId})," —"," ",d.reason]},`${d.elementId}-${_}`))})]})]})]})]})}const xe={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function ct(e){return`[data-tour="${e}"]`}function Kr(e=location.search){return new URLSearchParams(e).get("tour")}function Xr(e,n){var t;return((t=e.elementStats.find(i=>i.elementId===n))==null?void 0:t.completed)??0}function eo(e,n){return!e||e.kind==="click"||!n?!1:e.kind==="activeElement"?n.activeElementIds.includes(e.elementId):Xr(n,e.elementId)>=(e.atLeast??1)}function no(e){return"anchor"in e?ct(e.anchor):`${ct(xe.diagram)} [data-element-id="${to(e.elementId)}"]`}function to(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function io(e){return e.map(n=>{const t=!!n.waitFor&&n.waitFor.kind!=="click";return{element:no(n.target),popover:{title:n.title,description:t?`${n.description} (continues automatically once you reach that point — or use Next to skip ahead)`:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}})}async function ro(e,n={}){var s;const[{driver:t}]=await Promise.all([ue(()=>import("./driver.js-bj_ppY-Q.js"),[]),ue(()=>Promise.resolve({}),__vite__mapDeps([0]))]),i=io(e),o=t({steps:i,showProgress:!0,allowClose:!0,skipMissingElement:!0,onHighlighted:(l,c,{index:u})=>{var a;u!==void 0&&((a=n.onIndexChange)==null||a.call(n,u))}});return o.drive(),(s=n.onIndexChange)==null||s.call(n,o.getActiveIndex()??0),{moveNext:()=>o.moveNext(),activeIndex:()=>o.getActiveIndex()??-1,isActive:()=>o.isActive(),destroy:()=>o.destroy()}}const oo=300;function ao(e,n){const[t,i]=b.useState(!1),o=b.useRef(null),s=b.useRef(0),l=b.useRef(-1),c=b.useRef(null),u=b.useRef(n);b.useEffect(()=>{u.current=n},[n]);const a=b.useCallback(()=>{c.current!==null&&(clearInterval(c.current),c.current=null)},[]),p=b.useRef(0),h=b.useCallback(()=>{var _;p.current+=1,a(),(_=o.current)==null||_.destroy(),o.current=null,i(!1)},[a]),d=b.useCallback(()=>{if(!e||e.steps.length===0||o.current)return;const _=p.current+=1;s.current=0,l.current=-1,ro(e.steps,{onIndexChange:y=>{s.current=y}}).then(y=>{if(_!==p.current||!y.isActive()){y.destroy();return}o.current=y,i(!0),c.current=setInterval(()=>{if(!y.isActive()){a(),o.current=null,i(!1);return}const M=s.current;if(M===l.current)return;const v=e.steps[M];v&&eo(v.waitFor,u.current())&&(l.current=M,y.moveNext())},oo)})},[e,a]);return b.useEffect(()=>h,[h]),{active:t,start:d,stop:h}}const Te=650,vn="__agent__",mt="__model__",pt="__template__:",so=b.lazy(async()=>{await Promise.all([ue(()=>Promise.resolve({}),__vite__mapDeps([1])),ue(()=>Promise.resolve({}),__vite__mapDeps([2])),ue(()=>Promise.resolve({}),__vite__mapDeps([3]))]);const{RuntimeDiagram:e}=await ue(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-DTnJz5cT.js");return{RuntimeDiagram:n}},__vite__mapDeps([4,5,6]));return{default:e}}),Mn=b.lazy(()=>ue(()=>import("./MonacoEditor-6d7HoUW8.js").then(e=>e.M),__vite__mapDeps([7,5,8]))),lo=b.lazy(()=>ue(()=>import("./vendor-modeler-BSHvadVJ.js"),__vite__mapDeps([9,5,6,10,11,12,13,1,2,3]))),ut=b.lazy(async()=>{const{FormRenderer:e}=await ue(async()=>{const{FormRenderer:n}=await import("./FormRenderer-D-LT8HYo.js");return{FormRenderer:n}},__vite__mapDeps([14,5,12,10,11,15]));return{default:e}});function un(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function co(e){const n=un(e).replace(/\s+/g," ");return n.length>78?`${n.slice(0,78)}…`:n}function mo({example:e,compact:n=!1,initialBrainKind:t,initialTourId:i}){var Ln,Rn,Fn,zn,On,Un,$n,Gn;const[o,s]=b.useState(e.bpmn),l=Dr(),[c,u]=b.useState(null);b.useEffect(()=>{t&&t!==l.kind&&l.setKind(t)},[]),b.useEffect(()=>{zr({brain:l.kind})},[l.kind]);const[a,p]=b.useState(()=>Object.fromEntries(e.handlers.map(f=>[f.elementId,f.source]))),[h,d]=b.useState(e.scriptedAgent??""),[_,y]=b.useState(()=>rn(e.templates)),M=b.useMemo(()=>Vi(e,a,o,_),[e,a,o,_]),v=M.model,g=fr({bpmn:M.resolvedBpmn}),j=ao(e.tour,()=>g.snapshot);b.useEffect(()=>{var f;i&&((f=e.tour)==null?void 0:f.id)===i&&j.start()},[]);const B=v.startFormId?((Ln=e.forms)==null?void 0:Ln[v.startFormId])??null:null,[O,re]=b.useState(()=>({...e.seed,...B?Vr(B):{}})),[W,Ne]=b.useState(v.agent?vn:((Rn=e.handlers[0])==null?void 0:Rn.elementId)??""),Ee=b.useMemo(()=>{const f=(e.scenarios??[]).findIndex(x=>Object.entries(x.variables).every(([I,D])=>JSON.stringify(O[I])===JSON.stringify(D)));return f===-1?null:f},[e.scenarios,O]),[we,Pe]=Bn(n?"start-compact":"start",n?!1:!!B),[Z,me]=b.useState(!1),[q,T]=b.useState(!1),[E,N]=b.useState(!1),[U,$]=b.useState(null),[ye,Ge]=b.useState([]),[Je,oe]=b.useState({}),He=b.useMemo(()=>({...e.seed,...O,...Ei(e.imageInput?c:null)}),[e.seed,e.imageInput,O,c]),[ke,We]=b.useState(null),Le=b.useRef(null),[Re,Ae]=b.useState({}),[wn,Fe]=b.useState(!1),Ze=b.useRef(null),se=b.useRef(!1),ae=b.useRef(0),ze=b.useRef(0),ee=b.useRef({current:void 0}),Ce=b.useRef({}),Oe=b.useRef({}),De=b.useMemo(()=>{const f=new Map;for(const x of v.processes){for(const I of x.tasks)f.set(I.elementId,I.label);for(const I of x.agents){f.set(I.elementId,I.label);for(const D of I.tools)f.set(D.elementId,D.label)}for(const I of x.userTasks)f.set(I.elementId,I.label)}return x=>f.get(x)??x},[v]),R=b.useCallback(f=>{Ge(x=>{if(f.key){const I=x.findIndex(D=>D.key===f.key);if(I>=0){const D=[...x];return D[I]={...D[I],...f},D}}return[...x,{...f,id:ze.current++}].slice(-80)})},[]),ve=b.useMemo(()=>{var f;return((f=g.snapshot)==null?void 0:f.userTasks.find(x=>x.state==="Created"))??null},[g.snapshot]),Be=b.useMemo(()=>{const f=v.processes.flatMap(I=>I.tasks),x=new Map;for(const I of e.handlers){if(!I.manualControl)continue;const D=f.find(P=>P.elementId===I.elementId);D&&x.set(D.jobType,{...I.manualControl,elementId:I.elementId})}return x},[e.handlers,v]),he=b.useMemo(()=>{if(!g.snapshot)return null;for(const f of g.snapshot.jobs){const x=Be.get(f.jobType);if(x&&f.state==="Created")return{job:f,control:x}}return null},[g.snapshot,Be]),on=b.useMemo(()=>{if(!v.agent||!g.snapshot)return[];const f=new Map(g.snapshot.elementStats.map(x=>[x.elementId,x.completed]));return v.agent.tools.filter(x=>(f.get(x.elementId)??0)===0)},[v.agent,g.snapshot]),ge=ve?v.userTasks.find(f=>f.elementId===ve.elementId):void 0,Ve=ge!=null&&ge.formId?((Fn=e.forms)==null?void 0:Fn[ge.formId])??null:null,Ie=b.useCallback(async(f,x,I,D)=>{var pe,ne,_e;let P=I,be=0;for(;ae.current===D&&P&&P.completedInstances<1&&be++<80;){const V=await g.stepWorkers(f,{agents:x});if(ae.current!==D)return P;P=(V==null?void 0:V.snapshot)??P;const te=(pe=P.instances[0])==null?void 0:pe.variables;if(te&&oe({...te}),P.userTasks.some(Q=>Q.state==="Created")){R({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!V){R({kind:"error",text:"▶ run stopped — no dispatch round was returned"});break}if(V.handled===0){const Q=P.messageSubscriptions[0];if(V.reason==="messages"&&Q){if(R({kind:"step",text:`⏳ parked on a message catch event — waiting for "${Q.messageName}"`,elementId:Q.elementId}),await new Promise(K=>setTimeout(K,Te)),ae.current!==D)return P;R({kind:"vars",text:`📨 correlating message "${Q.messageName}" (key: ${Q.correlationKey})`,elementId:Q.elementId});const G=g.correlateMessage(Q.messageName,Q.correlationKey,"{}");if(G){P=G;const K=(ne=P.instances[0])==null?void 0:ne.variables;K&&oe({...K}),await new Promise(fe=>setTimeout(fe,Te));continue}R({kind:"error",text:`▶ run stopped — correlating "${Q.messageName}" (key: ${Q.correlationKey}) failed`,elementId:Q.elementId})}if(V.reason==="signals"&&P.signalSubscriptions.length>0){const G=P.signalSubscriptions[0],K=P.signalSubscriptions.length;if(R({kind:"step",text:`⏳ parked on ${K} open signal subscription${K===1?"":"s"} — waiting for "${G.signalName}"`,elementId:G.elementId}),await new Promise(Qe=>setTimeout(Qe,Te)),ae.current!==D)return P;const fe=g.broadcastSignal(G.signalName,"{}");if(fe){P=fe,R({kind:"vars",text:`📡 broadcasting signal "${G.signalName}" — every waiting subscription unblocks`,elementId:G.elementId});const Qe=(_e=P.instances[0])==null?void 0:_e.variables;Qe&&oe({...Qe}),await new Promise(Wt=>setTimeout(Wt,Te));continue}R({kind:"error",text:`▶ run stopped — broadcasting signal "${G.signalName}" failed`,elementId:G.elementId})}if(V.reason==="timers"){const G=P.timers.reduce((K,fe)=>Math.min(K,fe.dueInMs),1/0);if(Number.isFinite(G)){if(R({kind:"step",text:`⏳ parked on a timer — ${(Math.max(G,0)/1e3).toFixed(1)}s left on the clock`}),await new Promise(fe=>setTimeout(fe,Te)),ae.current!==D)return P;const K=g.advanceTime(Math.max(G,0)+1);if(K){P=K,R({kind:"step",text:"🕐 the clock advanced — timer fired"}),await new Promise(fe=>setTimeout(fe,Te));continue}}}break}await new Promise(Q=>setTimeout(Q,Te))}return ae.current!==D||(P&&P.completedInstances>=1?R({kind:"done",text:"✅ process instance completed"}):P&&P.incidentElementIds.length>0&&R({kind:"error",text:"A job failed — incident on the diagram"})),P},[g,R]),an=b.useCallback(async f=>{var P,be,pe;if(!he||se.current)return;const{job:x,control:I}=he,D=++ae.current;se.current=!0,T(!0);try{let ne,_e;if(f==="complete")ne=g.completeJobManually(x.jobType,"{}"),_e="  ↳ completed normally";else if(I.action.kind==="timer"){const V=((be=(P=g.snapshot)==null?void 0:P.timers[0])==null?void 0:be.dueInMs)??0;ne=g.advanceTime(Math.max(V,0)+1),_e="  ↳ advanced the clock — timer fired"}else{const{errorCode:V,message:te}=I.action;ne=g.throwJobError(x.jobType,V,te),_e=`  ↳ threw BPMN error ${V}: ${te}`}if(ne){R({kind:"vars",text:_e,elementId:x.elementId});const V=(pe=ne.instances[0])==null?void 0:pe.variables;V&&oe({...V}),await new Promise(te=>setTimeout(te,Te)),await Ie(Ce.current,Oe.current,ne,D)}else R({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:x.elementId})}finally{ae.current===D&&(se.current=!1,T(!1))}},[he,g,R,Ie]),Ye=b.useCallback(async()=>{var V;let f=null;try{v.agent&&h.trim()&&(f=Ci(h))}catch(te){return $(te instanceof Error?te.message:String(te)),null}ee.current={current:void 0};let x;if(e.imageInput){const te=l.vision;x={read:te??Ar(e.scriptedVision).read,live:!!te,resolve:G=>g.getRunImage(G)}}const I=Li(v,M.handlers,R,ee.current,x);for(const te of Be.keys())delete I[te];const D={};if(v.agents.length>0){if(l.kind!=="scripted"&&l.chat){const Q=new Map;for(const G of v.agents)Q.set(G.jobType,[...Q.get(G.jobType)??[],G]);for(const[G,K]of Q)D[G]=Xi(K,l.chat,R,{turnRef:ee.current,requiredTools:e.requiredTools})}else if(f&&v.agent){const Q=v.agent.elementId;D[v.agent.jobType]=async G=>{if(G.elementId!==Q)throw new Error(`No scripted agent handler for "${G.elementId}" — only "${Q}" (the primary process's first agent host) is driven by the scripted brain. Use a live brain to exercise more than one host.`);const K=await f(G),fe=(K.activateElements??[]).map(Qe=>Qe.elementId).join(", ");return R({kind:"agent",text:K.completionConditionFulfilled?"🤖 scripted agent: done":`🤖 scripted agent: calling ${fe||"(nothing)"}`}),K}}}Ge([]),Ae({});const P=He;oe(P),Ce.current=I,Oe.current=D;const be=await g.redeploy(o),pe=(be==null?void 0:be[0])??v.processId;R({kind:"start",text:`Starting "${pe}" — ${v.agent?l.kind==="scripted"||!l.chat?"scripted brain":`live brain (${l.modelInUse??l.kind})`:"no agent in this model"}`});const ne=g.createInstance(pe,JSON.stringify(P)),_e=(V=ne==null?void 0:ne.instances[0])==null?void 0:V.key;return e.imageInput&&c&&_e&&g.setRunImage(_e,c),{workers:I,agents:D,snap:ne}},[g,e,M,o,h,O,c,He,v,l,R,Be]),k=!!g.snapshot&&g.snapshot.completedInstances<1,Y=!k&&!!B&&ke!==!0,C=!k&&!!B&&ke===!1,J=we||Z;b.useEffect(()=>{n&&C&&me(!0)},[n,C]);const Me=f=>{Pe(f),f||me(!1)},Ke=b.useCallback(async()=>{if(g.phase!=="ready"||se.current||E||M.hasErrors)return;se.current=!0,T(!0);const f=++ae.current;try{let x=Ce.current,I=Oe.current,D=g.snapshot;if(!k){if(Le.current&&!Le.current.validate())return;$(null);const P=await Ye();if(!P)return;x=P.workers,I=P.agents,D=P.snap,await new Promise(be=>setTimeout(be,Te))}await Ie(x,I,D,f)}finally{ae.current===f&&(se.current=!1,T(!1))}},[g,E,M.hasErrors,k,Ye,Ie]),Yt=b.useCallback(async()=>{var x;if(g.phase!=="ready"||se.current||E||M.hasErrors)return;se.current=!0,N(!0);const f=++ae.current;try{let I=Ce.current,D=Oe.current,P=g.snapshot;if(!k){if(Le.current&&!Le.current.validate())return;$(null);const V=await Ye();if(!V)return;I=V.workers,D=V.agents,P=V.snap}if(!P||P.completedInstances>=1)return;const be=P.takenSequenceFlows.length,pe=await g.stepWorkers(I,{agents:D});if(!pe){R({kind:"error",text:"⏭ step failed — no dispatch round was returned"});return}const ne=(x=pe.snapshot.instances[0])==null?void 0:x.variables;ne&&oe({...ne});const _e=wr(pe.snapshot.takenSequenceFlows,be);R(yr(pe,_e,De,Be))}finally{ae.current===f&&(se.current=!1,N(!1))}},[g,E,M.hasErrors,k,Ye,R,De,Be]),Qt=b.useCallback(async()=>{se.current=!1,ae.current++,T(!1),N(!1),se.current=!0;try{await g.reset()}finally{se.current=!1}Ge([]),oe({})},[g]),qt=b.useCallback(()=>{var I;if(!ve||Ze.current&&!Ze.current.validate())return;const f=g.completeUserTask(ve.key,JSON.stringify(Re));R({kind:"human",text:`👤 ${un(Re)}`});const x=(I=f==null?void 0:f.instances[0])==null?void 0:I.variables;oe(D=>({...D,...Re,...x??{}})),f&&f.completedInstances>=1&&R({kind:"done",text:"✅ process instance completed"})},[ve,Re,g,R]),Jt=b.useMemo(()=>{var f,x;return g.phase==="loading"?r.jsx(ie,{variant:"neutral",children:"Booting engine…"}):g.phase==="error"?r.jsx(ie,{variant:"danger",children:"Engine error"}):q?r.jsx(ie,{variant:"info",children:"Running…"}):E?r.jsx(ie,{variant:"info",children:"Stepping…"}):(((f=g.snapshot)==null?void 0:f.incidentElementIds.length)??0)>0?r.jsx(ie,{variant:"danger",children:"Incident"}):ve?r.jsx(ie,{variant:"warning",children:"Waiting for a human"}):(((x=g.snapshot)==null?void 0:x.completedInstances)??0)>=1?r.jsx(ie,{variant:"success",children:"Completed"}):g.snapshot?r.jsx(ie,{variant:"warning",children:"Paused"}):r.jsx(ie,{variant:"neutral",children:"Ready"})},[g.phase,g.snapshot,q,E,ve]),Ht=b.useMemo(()=>e.blurb.split(/\n\s*\n/).map(f=>f.trim()).filter(Boolean),[e.blurb]);return r.jsxs("div",{className:"runner",children:[n?r.jsx("h1",{className:"visually-hidden",children:e.title}):r.jsxs("section",{className:"intro",children:[r.jsx("h1",{children:e.title}),Ht.map(f=>r.jsx("p",{children:f},f))]}),e.imageInput&&r.jsx(Gr,{imageInput:e.imageInput,value:c,onSelect:u,disabled:q}),r.jsxs("div",{className:"scenario",children:[r.jsx("span",{className:"scenario-label",id:"scenario-label",children:e.scenariosLabel??"Example input"}),e.scenarios&&r.jsx("div",{className:"scenario-toggle",role:"group","aria-labelledby":"scenario-label",children:e.scenarios.map((f,x)=>r.jsx(H,{size:"sm",variant:x===Ee?"default":"secondary","aria-pressed":x===Ee,disabled:q,onClick:()=>re(I=>({...I,...f.variables})),children:f.label},f.label))}),r.jsxs("button",{type:"button",className:"scenario-input-button",onClick:()=>Me(!J),"aria-expanded":J,"aria-controls":"start-input-editor",title:"Edit the starting payload",children:[r.jsx("span",{className:"scenario-edit-icon","aria-hidden":!0,children:"✎"})," ","input: ",r.jsx("code",{children:co(O)})]}),Y&&r.jsx("span",{className:"scenario-hint",children:"Fill in the input to enable Run"})]}),r.jsxs("div",{className:"inline-input-editor",id:"start-input-editor",hidden:!J,children:[r.jsxs("div",{className:"inline-input-editor-head",children:[r.jsxs("div",{children:[r.jsx("div",{className:"inline-input-editor-title",children:v.startFormId?"Start form":"Start payload"}),r.jsx("div",{className:"inline-input-editor-copy",children:v.startFormId?`Rendered from the model's start form "${v.startFormId}".`:"The variables the instance starts with."})]}),r.jsx(H,{size:"sm",variant:"secondary",onClick:()=>Me(!1),children:"Done"})]}),B?r.jsx(b.Suspense,{fallback:r.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:r.jsx(ut,{ref:Le,schema:B,values:O,onChange:(f,x)=>re(I=>({...I,[f]:x})),disabled:q,onValidityChange:We})}):r.jsx("pre",{className:"vars",children:un(O,2)})]}),!n&&(v.agent||e.imageInput)&&r.jsx($e,{sectionId:"brain",className:"brain-card","data-tour":xe.brainPanel,title:"Agent brain",description:v.agent?`What drives “${v.agent.label}”. The model recommends; the process governs.`:"What reads the image. The model recommends; the process governs.",children:r.jsx(Or,{brain:l,showText:!!v.agent,showVision:!!e.imageInput})}),r.jsxs("div",{className:"controls",children:[r.jsx(H,{"data-tour":xe.runButton,onClick:()=>void Ke(),disabled:g.phase!=="ready"||q||E||M.hasErrors||Y,children:"▶ Run"}),r.jsx(H,{variant:"secondary",onClick:()=>void Yt(),disabled:g.phase!=="ready"||q||E||M.hasErrors||Y||(((zn=g.snapshot)==null?void 0:zn.completedInstances)??0)>=1,children:"⏭ Step"}),r.jsx(H,{variant:"secondary",onClick:()=>void Qt(),disabled:g.phase!=="ready"||E,children:"↺ Reset"}),e.tour&&r.jsx(H,{variant:"secondary",onClick:j.start,disabled:j.active,children:j.active?"Touring…":`🧭 ${e.tour.label}`}),Jt]}),g.phase==="error"&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"Engine error"}),r.jsx(ce,{children:g.error})]}),U&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"Code didn't compile"}),r.jsx(ce,{children:U})]}),M.hasErrors&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"Run is disabled — the diagram has unresolved references"}),r.jsx(ce,{children:r.jsx("ul",{className:"diagnostics",children:M.diagnostics.filter(f=>f.severity==="error").map((f,x)=>r.jsx("li",{children:f.message},x))})})]}),!M.hasErrors&&M.diagnostics.length>0&&r.jsxs(de,{children:[r.jsx(le,{children:"Heads up"}),r.jsx(ce,{children:r.jsx("ul",{className:"diagnostics",children:M.diagnostics.map((f,x)=>r.jsx("li",{children:f.message},x))})})]}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"col",children:[r.jsx($e,{sectionId:"process","data-tour":xe.diagram,title:"Process",description:`${v.processName} — live token (green), incidents (red).`,children:r.jsx(b.Suspense,{fallback:r.jsx("div",{className:"diagram-fallback",children:g.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:r.jsx(so,{xml:M.resolvedBpmn,activeIds:((On=g.snapshot)==null?void 0:On.activeElementIds)??[],incidentIds:((Un=g.snapshot)==null?void 0:Un.incidentElementIds)??[],className:"diagram"})})}),ve&&r.jsxs($e,{sectionId:"human-task",title:(ge==null?void 0:ge.label)??"Human task",description:Ve?`Rendered from the model's form "${ge==null?void 0:ge.formId}".`:"This task has no linked form — complete it with no variables.",children:[on.length>0&&r.jsxs(de,{variant:"destructive",children:[r.jsx(le,{children:"The agent didn't finish its checks"}),r.jsxs(ce,{children:["It completed without running"," ",on.map(f=>f.label||f.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),Ve&&r.jsx(b.Suspense,{fallback:r.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:r.jsx(ut,{ref:Ze,schema:Ve,values:Re,onChange:(f,x)=>Ae(I=>({...I,[f]:x})),context:Je,onValidityChange:Fe})}),r.jsx(H,{onClick:qt,disabled:!!Ve&&!wn,children:"Complete task"})]}),he&&r.jsx($e,{sectionId:"manual-job",title:he.control.label,description:"This job is held here on purpose — pick how it resolves.",children:r.jsxs("div",{className:"controls",children:[r.jsx(H,{onClick:()=>void an("complete"),disabled:q||E,children:he.control.completeLabel??"✅ Complete normally"}),r.jsx(H,{variant:"secondary",onClick:()=>void an("action"),disabled:q||E,children:he.control.action.label})]})})]}),r.jsx("div",{className:"col",children:r.jsx(Zr,{log:ye,elementStats:($n=g.snapshot)==null?void 0:$n.elementStats,incidents:(Gn=g.snapshot)==null?void 0:Gn.incidents,labelFor:De,variables:r.jsxs("div",{className:"vars-block","data-tour":xe.variablesPanel,children:[r.jsx("div",{className:"vars-head",children:"Instance variables"}),r.jsx("pre",{className:"vars",children:un(Object.keys(Je).length>0?Je:He,2)})]})})})]}),!n&&r.jsxs("div",{className:"runner-secondary",children:[r.jsx($e,{sectionId:"code",className:"editors","data-tour":xe.codePanel,defaultOpen:!1,title:"Code",description:"One handler per BPMN element, plus a model tab holding the editable diagram — select an element there to edit its properties. Return variables to merge, or throw to fail the job.",children:r.jsx(b.Suspense,{fallback:r.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:r.jsxs(ai,{value:W,onValueChange:Ne,children:[r.jsxs(si,{children:[r.jsx(sn,{value:mt,children:"model"}),v.agent&&r.jsx(sn,{value:vn,children:"agent (scripted)"}),e.handlers.map(f=>{var x;return r.jsx(sn,{value:f.elementId,children:((x=v.tasks.find(I=>I.elementId===f.elementId))==null?void 0:x.label)??f.elementId},f.elementId)}),Object.keys(_).map(f=>r.jsx(sn,{value:pt+f,children:f},f))]}),r.jsxs(dn,{value:mt,children:[r.jsxs("div",{className:"editor-meta",children:[r.jsx("strong",{children:"Model"}),r.jsx("code",{children:"click an element to edit its properties on the right — Run re-reads whatever you leave here"}),r.jsx(H,{variant:"secondary",size:"sm",onClick:()=>s(e.bpmn),disabled:o===e.bpmn,children:"Revert to original"})]}),r.jsx(lo,{value:o,onChange:s})]}),v.agent&&r.jsxs(dn,{value:vn,children:[r.jsxs("div",{className:"editor-meta",children:[r.jsx("strong",{children:v.agent.label}),r.jsx("code",{children:l.kind==="scripted"||!l.chat?"in use":"unused — a live brain is connected"})]}),r.jsx("div",{className:"editor-wrap",children:r.jsx(Mn,{height:"360px",defaultLanguage:"javascript",value:h,onChange:f=>d(f??""),options:xn})})]}),e.handlers.map(f=>{var x;return r.jsxs(dn,{value:f.elementId,children:[r.jsxs("div",{className:"editor-meta",children:[r.jsx("strong",{children:((x=v.tasks.find(I=>I.elementId===f.elementId))==null?void 0:x.label)??f.elementId}),r.jsx("code",{children:f.standsInFor??f.elementId})]}),r.jsx("div",{className:"editor-wrap",children:r.jsx(Mn,{height:"360px",defaultLanguage:"javascript",value:a[f.elementId],onChange:I=>p(D=>({...D,[f.elementId]:I??""})),options:xn})})]},f.elementId)}),Object.keys(_).map(f=>r.jsxs(dn,{value:pt+f,children:[r.jsxs("div",{className:"editor-meta",children:[r.jsx("strong",{children:f}),r.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+f+"}}"]})]}),r.jsx("div",{className:"editor-wrap",children:r.jsx(Mn,{height:"360px",defaultLanguage:"markdown",value:_[f],onChange:x=>y(I=>rn(I,{[f]:x??""})),options:xn})})]},f))]})})}),v.agent&&r.jsx($e,{sectionId:"tools",defaultOpen:!1,title:"Tools, as the model sees them",description:r.jsxs(r.Fragment,{children:["Read from the diagram — element name, documentation, and every",r.jsx("code",{children:" fromAi(…)"})," argument."]}),children:r.jsx("ul",{className:"tool-list",children:v.agent.tools.map(f=>r.jsxs("li",{children:[r.jsx("code",{children:f.elementId}),r.jsxs("span",{children:[" — ",f.documentation||f.label]}),f.args.length>0&&r.jsx("ul",{children:f.args.map(x=>r.jsxs("li",{children:[r.jsxs("code",{children:[x.name,": ",x.type]})," ","— ",x.description]},x.name))})]},f.elementId))})})]})]})}const xn={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},po=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,uo=`async (job, { sleep }) => {
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
}`,ho=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above; this body
  // does not run either. Unlike Activity_guarded, this task has no boundary
  // event: firing its error action has nothing to catch it, so it becomes an
  // incident instead of a handled alternate path. Completing it normally
  // completes the job with {} — no trace line, no shipped/tracking variables
  // — and the token reaches "Order shipped".
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,go={id:"learn-error-boundary",title:"Error boundary event",group:"learn-bpmn",blurb:["A boundary event attached to a task catches something that happens while the task is running and reroutes the token — here, a thrown BPMN error.",'Hit Run and the process stops at "Charge payment (guarded)" with a card under the diagram offering two buttons: press "Simulate: card declined" and watch the attached boundary event catch the error, skipping straight to "Handled — order cancelled".','Then Reset, complete that first job normally, and decline the second one on "Ship items (unguarded)" — this time it becomes an incident, because that task has no boundary event and the engine has nothing to reroute the token with.',`That's exactly what breaks if you forget the boundary event (or give it the wrong errorRef): a failure that should be a modelled alternate path becomes a stuck instance a human has to resolve by hand. Complete both jobs normally instead to see the unattended happy path all the way to "Order shipped".`].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/boundary-events/",bpmn:po,seed:{},handlers:[{elementId:"Activity_guarded",standsInFor:"job worker — charge-payment",source:uo,manualControl:{label:"Charge payment (guarded)",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_unguarded",standsInFor:"job worker — ship-items",source:ho,manualControl:{label:"Ship items (unguarded)",completeLabel:"✅ Ship it",action:{kind:"error",errorCode:"CARRIER_REJECTED",message:"The carrier rejected the shipment — nothing catches this.",label:"❌ Simulate: carrier rejected (becomes an incident)"}}}]},bo=Object.freeze(Object.defineProperty({__proto__:null,default:go},Symbol.toStringTag,{value:"Module"})),_o=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,fo=`async (job, { num, trace, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const orderTotal = num("orderTotal", 40);

  await sleep(300);

  // This is the variable the gateway's conditional sequence flow reads —
  // whatever this handler decides is what actually steers the token.
  const route = orderTotal >= 100 ? "express" : "standard";
  trace(\`order total $\${orderTotal} -> route: \${route}\`);

  // Whatever you return is merged onto the process instance.
  return { route };
}`,wo=`async (job, { trace, sleep }) => {
  trace("expedited courier picks up the order");
  await sleep(400);

  return { shipped: true, method: "express" };
}`,yo=`async (job, { trace, sleep }) => {
  trace("order queued for standard courier pickup");
  await sleep(400);

  return { shipped: true, method: "standard" };
}`,vo={id:"learn-exclusive-gateway",title:"Exclusive gateway",group:"learn-bpmn",blurb:["An exclusive gateway is the fork in the road: exactly one of its outgoing sequence flows is taken, chosen by evaluating each flow's FEEL condition in declaration order, first match wins. A default flow (drawn with a slash through its start, not a diamond marker) has no condition and is the fallback taken when every conditional flow evaluates false — that's what makes an exclusive gateway safe to deploy without an explicit case for every value.",`Run this and watch 'Check order total' decide a route variable, then watch the gateway send the token down 'Express ship' when the order is large enough, or 'Standard ship' otherwise (the default flow). Try both from the Start panel on the right: it holds a "Small order" and a "Large order" button that swap the payload for you.`,"To see the conditions themselves, open the model tab in the Code panel and click either arrow leaving the gateway — the FEEL is under Condition. Get one wrong (or misspell the variable name) and the flow you meant to take is silently skipped in favour of whichever one does evaluate true, or the default if none do — no error, just the wrong branch."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/gateways/gateways/#exclusive-gateway",bpmn:_o,seed:{orderTotal:40},scenarios:[{label:"Small order — standard ship (default flow)",variables:{orderTotal:40}},{label:"Large order — express ship (conditional flow)",variables:{orderTotal:150}}],handlers:[{elementId:"Activity_check_order",standsInFor:"job worker — check-order-total",source:fo},{elementId:"Activity_express_ship",standsInFor:"job worker — express-ship",source:wo},{elementId:"Activity_standard_ship",standsInFor:"job worker — standard-ship",source:yo}]},Mo=Object.freeze(Object.defineProperty({__proto__:null,default:vo},Symbol.toStringTag,{value:"Module"})),xo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,No=`async (job, { text, trace }) => {
  const orderId = text("orderId", "unknown-order");

  trace("shipment confirmed for " + orderId + " — recording it");

  return { shipmentRecorded: true };
}`,Eo={id:"learn-message-correlation",title:"Message catch event + correlation key",group:"learn-bpmn",blurb:[`A message intermediate catch event pauses the token until a message with a matching name and correlation key is published — the BPMN analogue of "wait for this specific order's shipment to be confirmed", not just "wait for any shipment-confirmed message".`,"Run this and watch the token park on the catch event; there's no external broker in the browser, so the page correlates the message itself once the wait is reached, echoing back the exact correlationKey (`=orderId`) the subscription resolved to — the Activity panel logs the wait and the correlation as separate lines — then the token resumes into Record confirmation and on to the end event.",'To see where that key comes from: in the Code panel, open the model tab, click "Wait for shipment confirmed", and expand Message in the properties panel on the right. Subscription correlation key holds `orderId` (the `=` beside the box marks it as a FEEL expression), and Name holds `shipment-confirmed` — those two together are what a publisher has to match. Edit them freely; because this page publishes the key the subscription itself resolved, the run stays self-consistent either way.','In a real deployment, where a separate system does the publishing, pointing that expression at a variable the instance never sets leaves the catch event waiting forever, and omitting zeebe:subscription altogether is rejected at deploy time with "has no zeebe:subscription correlationKey" — docs/engine-coverage.md records both.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/message-events/",bpmn:xo,seed:{orderId:"ORD-42"},handlers:[{elementId:"Activity_record",standsInFor:"job worker — record-confirmation",source:No}]},ko=Object.freeze(Object.defineProperty({__proto__:null,default:Eo},Symbol.toStringTag,{value:"Module"})),Io=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,To=`async (job, { text, sleep, trace }) => {
  // Each parallel instance gets its own 'item' from the input collection.
  const item = text("item", "widget");

  trace("processing " + item);
  await sleep(400);

  // Whatever you return is merged onto this instance's scope, then collected
  // into the process-level 'results' array via outputElement/outputCollection.
  return { result: item.toUpperCase() + "-DONE" };
}`,jo={id:"learn-multi-instance-parallel",title:"Parallel multi-instance",group:"learn-bpmn",blurb:["A multi-instance activity runs its task once per element of a collection, spawning that many job instances of the same element in parallel, and only lets the token move on once every one of them completes.",`Run this and watch three 'Process item' jobs activate together for apple, banana, cherry, and complete (in any order) before the process reaches its end event. Nothing about the diagram says "three" — that comes from the collection, so use the buttons in the Start panel on the right to swap between one, three, and six items and hit Run again; the Activity panel logs one 'Process item' line per element, so the fan-out is right there to count.`,'The property tying the two together is in the Code panel: open the model tab, click "Process item", and expand Multi-instance in the properties panel on the right — Input collection holds `items`, the FEEL expression naming the variable to fan out over. Drop it entirely and the activity silently degenerates to a single ordinary instance, with no error to tell you it happened. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/multi-instance/",bpmn:Io,seed:{items:["apple","banana","cherry"]},scenarios:[{label:"One item — a single instance",variables:{items:["apple"]}},{label:"Three items — fans out to three",variables:{items:["apple","banana","cherry"]}},{label:"Six items — fans out to six",variables:{items:["apple","banana","cherry","damson","elderberry","fig"]}}],handlers:[{elementId:"Activity_process",standsInFor:"job worker — process-item",source:To}]},So=Object.freeze(Object.defineProperty({__proto__:null,default:jo},Symbol.toStringTag,{value:"Module"})),Po=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Ao=`async (job, { text, sleep, trace }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "widget");

  trace("packing " + item);
  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { packed: true };
}`,Co=`async (job, { sleep, trace }) => {
  trace("handing over to the courier");
  await sleep(400);

  return { dispatched: true, tracking: "SVC" + Math.floor(Math.random() * 1e9) };
}`,Do={id:"learn-service-task",title:"Service task + sequence flow",group:"learn-bpmn",blurb:["A service task is a unit of work a worker (not a human) performs; a sequence flow is the arrow that hands the token from one to the next once its task completes.","Run this and watch each task activate, run its handler, and complete in order — Prepare package, then Dispatch courier — before the process reaches its end event.",`The link between the two halves is the job type: in the Code panel, open the model tab, click "Prepare package", and expand Task definition in the properties panel on the right — Job type is the name a worker has to subscribe to in order to be handed this task's work.`,"(This page wires its own handlers up from whatever the model declares, so renaming it here keeps working; on a real cluster the worker is a separate process started with a job type of its own, and a mismatch means nobody ever activates the job, so the run stalls forever.)"].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/service-tasks/",bpmn:Po,seed:{item:"camunda-t-shirt"},handlers:[{elementId:"Activity_prepare",standsInFor:"job worker — prepare-package",source:Ao},{elementId:"Activity_dispatch",standsInFor:"job worker — dispatch-courier",source:Co}]},Bo=Object.freeze(Object.defineProperty({__proto__:null,default:Do},Symbol.toStringTag,{value:"Module"})),Lo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Ro=`async (job, { sleep, trace }) => {
  trace("all-clear received — resuming operations");
  await sleep(400);

  return { resumed: true };
}`,Fo=`async (job, { sleep, trace }) => {
  trace("same all-clear — reopening the floor");
  await sleep(400);

  return { floorReopened: true };
}`,zo={id:"learn-signal-broadcast",title:"Signal intermediate catch event + broadcast",group:"learn-bpmn",blurb:["A signal intermediate catch event parks the token until someone broadcasts a signal by name. Unlike a message, a signal isn't correlated to one waiting instance — broadcasting it unblocks every open subscription for that name at once.",`That's why this model forks: both "Ops waits for all-clear" and "Floor waits for all-clear" park on the same signal, and one broadcast releases the pair together, so 'Resume operations' and 'Reopen the floor' both run before the join lets the token reach the end event. Run it and watch both branches light up off a single broadcast — the Activity panel says "parked on 2 open signal subscriptions" before the one 📡 line that releases them both. A message could not do that, because a correlation key targets exactly one waiting subscription.`,"To see the name being matched: in the Code panel, open the model tab, click either catch event, and expand Signal in the properties panel on the right — Name holds `all-clear`. Each catch event owns its own signal definition, so editing the name there changes only that branch: do it on one of them and hit Run, and the panel now reports two broadcasts instead of one, because the branches no longer share a name and each needs its own. The count of broadcasts is exactly the count of distinct signal names being waited on."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/signal-events/signal-event/",bpmn:Lo,seed:{},handlers:[{elementId:"Activity_resume",standsInFor:"job worker — resume-operations",source:Ro},{elementId:"Activity_reopen",standsInFor:"job worker — reopen-floor",source:Fo}]},Oo=Object.freeze(Object.defineProperty({__proto__:null,default:zo},Symbol.toStringTag,{value:"Module"})),Uo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,$o=`async (job, { sleep, trace }) => {
  trace("the timer fired — sending the reminder now");
  await sleep(400);

  return { reminderSent: true };
}`,Go={id:"learn-timer-catch-event",title:"Timer intermediate catch event",group:"learn-bpmn",blurb:["A timer catch event parks the token until a point in time — here, a fixed duration after the token arrives.","Run this and read the Activity panel: the token parks on the timer with nothing else happening ('parked on a timer — 3.0s left on the clock'), then the clock is fast-forwarded to the due time ('the clock advanced — timer fired') and the token resumes on its own: 'Send the reminder' activates, runs, and the process completes. Nothing needs to poll or push it forward; the engine itself wakes the instance when the timer's due time passes. (This page fast-forwards a virtual clock so the 3-second wait doesn't cost you 3 real seconds — a live deployment waits the actual PT3S.)",'To change the wait: in the Code panel, open the model tab, click "Wait 3 seconds", and expand Timer in the properties panel on the right — Type is Duration and Value holds the ISO-8601 duration, so PT30S or PT5M works the same way. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/timer-events/timer-event-type/",bpmn:Uo,seed:{},handlers:[{elementId:"Activity_after_timer",standsInFor:"job worker — send-reminder",source:$o}]},Vo=Object.freeze(Object.defineProperty({__proto__:null,default:Go},Symbol.toStringTag,{value:"Module"})),Yo=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Qo="Camunda Cloud",qo="8.10.0",Jo={name:"Camunda Web Modeler",version:"9b5d5ef"},Ho=19,Wo="learn-user-task-form-review",Zo=[{text:`# Review request

A request is waiting for you. Decide whether to approve or reject it, then submit.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Requester:** {{requester}}

**Details:** {{details}}`,type:"text",layout:{row:"Row_details",columns:null},id:"Field_ReviewDetails"},{label:"Decision",values:[{label:"Approve",value:"approved"},{label:"Reject",value:"rejected"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_ReviewDecision",key:"decision",validate:{required:!0}},{label:"Comments",description:"Optional note recorded alongside your decision.",type:"textarea",layout:{row:"Row_comments",columns:null},id:"Field_ReviewComments",key:"comments"}],Ko="default",Xo={executionPlatform:Qo,executionPlatformVersion:qo,exporter:Jo,schemaVersion:Ho,id:Wo,components:Zo,type:Ko},ea={id:"learn-user-task-form",title:"User task + form",group:"learn-bpmn",blurb:["A user task is a step a human completes, not a worker — the token parks at the task until someone submits its form, then moves on.","Run this and watch the process reach 'Review request' and wait; fill in the decision form that appears in its own card under the diagram and press Complete task to see the token resume and the process reach its end event.",'What binds that form to the task is one property: in the Code panel, open the model tab, click "Review request", and expand Form in the properties panel on the right — Form ID names the form the runner looks up and renders. A user task with no form binding still deploys and still parks the token, but the runner has nothing to render for it, so it offers a bare Complete button that finishes the task with no variables. Revert to original puts the binding back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/user-tasks/",bpmn:Yo,forms:{"learn-user-task-form-review":Xo},seed:{requester:"Priya Shah",details:"Approve access to the shared design-review workspace."},handlers:[]},na=Object.freeze(Object.defineProperty({__proto__:null,default:ea},Symbol.toStringTag,{value:"Module"})),ta=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,ia=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,ra={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:xe.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"},waitFor:{kind:"activeElement",elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"},waitFor:{kind:"elementCompleted",elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:xe.variablesPanel}}],successEvent:{kind:"instanceCompleted"}},oa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,aa="Camunda Cloud",sa="8.10.0",da={name:"Camunda Web Modeler",version:"9b5d5ef"},la=19,ca="seed-export-shipment-ready",ma=[{text:"# Use a predefined scenario...",type:"text",layout:{row:"Row_04pl1rt",columns:null},id:"Field_0a6kzzq"},{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Use pre-defined sceanrio - to use leave Shipment notes below blank.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{text:`The following shipments notes are used:
* Likely cleared: SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53.
* Likely flagged: SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1.`,type:"text",layout:{row:"Row_1h31mub",columns:null},id:"Field_0j1vwd9"},{text:"# ...or hand in your own data",type:"text",layout:{row:"Row_1wu4opr",columns:null},id:"Field_12u5gzd"},{label:"Shipment notes",description:"If set, overrides the scenario above. Leave blank to use the scenario selected above. The agent reads this to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],pa="default",ua={executionPlatform:aa,executionPlatformVersion:sa,exporter:da,schemaVersion:la,id:ca,components:ma,type:pa},ha="Camunda Cloud",ga="8.10.0",ba={name:"Camunda Web Modeler",version:"9b5d5ef"},_a=19,fa="seed-export-compliance-review",wa=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],ya="default",va={executionPlatform:ha,executionPlatformVersion:ga,exporter:ba,schemaVersion:_a,id:fa,components:wa,type:ya},Ma=Object.assign({"./prompts/system-prompt.md":ta,"./prompts/user-prompt.md":ia}),xa=rn(Object.fromEntries(Object.entries(Ma).map(([e,n])=>[jt(e),n.trimEnd()]))),ht="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",Na="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",Ea=`async (job) => {
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
}`,ka=`async (job, { text, sleep, trace }) => {
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
}`,Ia=`async (job, { text, sleep, trace }) => {
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
}`,Ta=`async (job, { num, sleep }) => {
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
}`,ja=`async (job, { text, trace }) => {
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
}`,Sa=`async (job, { sleep }) => {
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
}`,Pa={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",hero:{headline:"The LLM *recommends*. The process *governs*.",lede:"An agentic ad-hoc sub-process chooses its own compliance checks, but the gateway after it — not the model — decides whether a shipment ships or goes to a human.",tagline:"Anatomy of an enterprise agent"},docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:oa,forms:{"seed-export-shipment-ready":ua,"seed-export-compliance-review":va},seed:{scenario:ht,shipmentNotes:""},scenariosLabel:"Example shipment",scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:ht,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:Na,shipmentNotes:""}}],scriptedAgent:Ea,templates:xa,tour:ra,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:ka},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:Ia},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:Ta},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:ja},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:Sa}]},Aa=`You are a loan origination assistant at a retail bank. Your job is to gather everything a senior loan officer needs to decide an application — you do **not** decide it yourself.

Work through the case with the tools available to you:

- **Query customer** — find the applicant's existing relationship with the bank.
- **Credit bureau lookup** — pull their credit report.
- **Assess application** — run the bank's underwriting policy to get a debt-to-income ratio, a risk band, and a recommendation. Always run this; the officer's review depends on it.
- **Update application status** — mark the case as \`under-review\` once you have assessed it.

Call the tools in whatever order makes sense, but make sure the application has been assessed before you finish. When you have gathered the customer profile, the bureau report, and the policy assessment, and marked the status, you are done — a senior officer takes it from there.
`,Ca="Gather this loan case for the senior officer: look up the customer, pull their credit bureau report, run the underwriting assessment, and set the application status to `under-review`. Then stop — the officer makes the decision.\n",Da={id:"loan-origination-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a loan application through the origination agent.",target:{anchor:xe.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the application and decides, turn by turn, which tools to call — look up the customer, pull a credit bureau report, run the underwriting policy, update the status. Nothing here is a fixed sequence.",target:{elementId:"LoanOriginationAgent"}},{title:"Policy, not opinion",description:"The assessment computes the debt-to-income ratio, a risk band and a recommendation from the verified figures — the deterministic policy the senior officer's review leans on.",target:{elementId:"AssessApplication"},waitFor:{kind:"elementCompleted",elementId:"AssessApplication"}},{title:"Every application meets a human",description:"Whatever the agent recommended, the token now waits here: no offer and no decline is reachable without a senior officer first signing off. Open the task to record the decision — the gateway routes on it.",target:{elementId:"SeniorOfficerReview"},waitFor:{kind:"activeElement",elementId:"SeniorOfficerReview"}},{title:"Everything the run recorded",description:"The variables panel shows the customer profile, the bureau report, the debt-to-income and risk band, and the recommendation — exactly what each tool wrote for the officer to weigh.",target:{anchor:xe.variablesPanel}}],successEvent:{kind:"elementCompleted",elementId:"AssessApplication"}},Ba=`<?xml version="1.0" encoding="UTF-8"?>
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
`,La="Camunda Cloud",Ra="8.10.0",Fa={name:"Camunda Web Modeler",version:"9b5d5ef"},za=19,Oa="loan-application",Ua="default",$a=[{text:`# Loan application

Capture the applicant's details, then run the origination agent.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{label:"Applicant name",type:"textfield",layout:{row:"Row_applicant",columns:null},id:"Field_ApplicantName",key:"applicantName",defaultValue:"Ada Lovelace",validate:{required:!0}},{label:"Loan amount",description:"Amount requested.",type:"number",layout:{row:"Row_amount",columns:null},id:"Field_LoanAmount",key:"loanAmount",defaultValue:2e4},{label:"Loan purpose",type:"textfield",layout:{row:"Row_purpose",columns:null},id:"Field_LoanPurpose",key:"loanPurpose",defaultValue:"Home improvement"},{label:"Annual income",type:"number",layout:{row:"Row_income",columns:null},id:"Field_AnnualIncome",key:"annualIncome",defaultValue:96e3},{label:"Monthly debt payments",description:"Existing monthly repayments across all obligations.",type:"number",layout:{row:"Row_debt",columns:null},id:"Field_MonthlyDebt",key:"monthlyDebt",defaultValue:850},{label:"Stated credit score",description:"The applicant's self-reported score; the credit bureau tool confirms it.",type:"number",layout:{row:"Row_score",columns:null},id:"Field_CreditScore",key:"creditScore",defaultValue:782}],Ga={executionPlatform:La,executionPlatformVersion:Ra,exporter:Fa,schemaVersion:za,id:Oa,type:Ua,components:$a},Va="Camunda Cloud",Ya="8.10.0",Qa={name:"Camunda Web Modeler",version:"9b5d5ef"},qa=19,Ja="loan-senior-officer-review",Ha="default",Wa=[{text:`# Senior officer review

Every application reaches this desk before an offer or a decline can be sent. Review the agent's findings, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Applicant:** {{applicantName}} — {{loanPurpose}}, amount {{loanAmount}}

**Customer relationship:** {{if customerProfile = null then "unknown" else customerProfile.segment + " (" + string(customerProfile.relationshipYears) + "y)"}}

**Credit bureau:** {{if bureauReport = null then "n/a" else string(bureauReport.score) + " (" + bureauReport.band + "), " + string(bureauReport.derogatoryMarks) + " derogatory mark(s)"}}

**Debt-to-income:** {{debtToIncome}}%

**Assessed risk band:** {{riskBand}}

**Policy recommendation:** {{recommendation}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Decision",values:[{label:"Approve — issue loan offer",value:"approved"},{label:"Decline — send decline notice",value:"declined"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_Decision",key:"decision",validate:{required:!0}},{label:"Officer note",description:"Recorded against the application; the decline notice quotes it as the reason.",type:"textarea",layout:{row:"Row_note",columns:null},id:"Field_ReviewNote",key:"reviewNote"}],Za={executionPlatform:Va,executionPlatformVersion:Ya,exporter:Qa,schemaVersion:qa,id:Ja,type:Ha,components:Wa},Ka=Object.assign({"./prompts/system-prompt.md":Aa,"./prompts/user-prompt.md":Ca}),Xa=rn(Object.fromEntries(Object.entries(Ka).map(([e,n])=>[jt(e),n.trimEnd()]))),gt={applicantName:"Ada Lovelace",annualIncome:96e3,monthlyDebt:850,creditScore:782,loanAmount:2e4,loanPurpose:"Home improvement"},es={applicantName:"Cyrus Vale",annualIncome:38e3,monthlyDebt:1450,creditScore:566,loanAmount:42e3,loanPurpose:"Debt consolidation"},ns=`async (job) => {
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
}`,ts=`async (job, { text, sleep, trace }) => {
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
}`,is=`async (job, { text, num, sleep, trace }) => {
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
}`,rs=`async (job, { num, trace }) => {
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
}`,os=`async (job, { sleep, trace }) => {
  // Stands in for a write-back to the loan origination system. Marks the case
  // as awaiting the senior officer's decision.
  await sleep(200);
  trace("application status -> under-review");
  return { applicationStatus: "under-review", toolCallResult: "under-review" };
}`,as=`async (job, { num, sleep, trace }) => {
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
}`,ss=`async (job, { text, sleep, trace }) => {
  // Trunk service task on the declined path. Sends the applicant a decline
  // notice with the recorded reason, standing in for a notification channel.
  const note = text("reviewNote", "");
  const reason = note || "Application did not meet the lending policy.";
  await sleep(300);
  trace("decline notice sent");

  return { declineNotice: { reason: reason, sentTo: text("applicantName", "the applicant") } };
}`,ds={id:"loan-origination",title:"Loan origination agent",blurb:"An AI agent gathers a loan case with its own tools — customer lookup, credit bureau, an underwriting policy, a status update — then every application passes through a mandatory senior-officer review before a gateway routes it to an offer or a decline. The agent advises; the process governs.",docsUrl:"https://camunda.com/orchestrate/agents/",bpmn:Ba,forms:{"loan-application":Ga,"loan-senior-officer-review":Za},seed:gt,scenarios:[{label:"Strong applicant (policy recommends approve)",variables:gt},{label:"Marginal applicant (policy recommends decline)",variables:es}],scriptedAgent:ns,templates:Xa,tour:Da,requiredTools:["AssessApplication","UpdateApplicationStatus"],handlers:[{elementId:"QueryCustomer",standsInFor:"CRM connector — customer lookup",source:ts},{elementId:"CreditBureauLookup",standsInFor:"REST connector — credit bureau",source:is},{elementId:"AssessApplication",standsInFor:"Script task — underwriting policy (FEEL)",source:rs},{elementId:"UpdateApplicationStatus",standsInFor:"REST connector — origination system",source:os},{elementId:"IssueLoanOffer",standsInFor:"REST connector — offer/booking system",source:as},{elementId:"SendDeclineNotice",standsInFor:"REST connector — notifications",source:ss}]},ls=`<?xml version="1.0" encoding="UTF-8"?>
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
`,cs=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,ms=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,ps=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,us={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:ls,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:cs},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:ms},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:ps}]},hs=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,gs=`async (job, { text, num, sleep, trace }) => {
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
}`,bs={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:hs,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:gs}]},_s=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,fs=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,ws=`async (job, { num, sleep }) => {
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
}`,ys=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,vs={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:_s,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:fs},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:ws,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:ys,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},Ms="/assets/de-bmw-mini-JBSk7QcF.jpg",xs="/assets/de-bmw-mini.thumb-CUUmJrRO.jpg",Ns="/assets/uk-d651-rnb-XGipy2QN.jpg",Es="/assets/uk-d651-rnb.thumb-mjEcbhUf.jpg",ks="/assets/uk-mk70-orj-Cn6O3Xfm.jpg",Is="/assets/uk-mk70-orj.thumb-CaeZ2vqU.jpg",Ts="/assets/uk-ni-ijz-8992-YXV44tgk.jpg",js="/assets/uk-ni-ijz-8992.thumb-DYwok8jV.jpg",Ss="/assets/us-hyundai-genesis-gGpAIEpi.jpg",Ps="/assets/us-hyundai-genesis.thumb-DEEt19Mw.jpg",As=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Cs="Camunda Cloud",Ds="8.10.0",Bs={name:"Camunda Web Modeler",version:"9b5d5ef"},Ls=19,Rs="plate-recognition-confirm",Fs="default",zs=[{text:`# Confirm the number plate

The in-browser vision model read a plate from the photo. It **recommends**; you **govern** — accept its reading or correct it before it is recorded.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ConfirmHeading"},{text:'**Model reading:** {{if modelPlate = null or modelPlate = "" then "(nothing read)" else modelPlate}}',type:"text",layout:{row:"Row_modelReading",columns:null},id:"Field_ModelReading"},{label:"Number plate",description:"Edit this if the model misread the plate. What you submit is what gets recorded.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ConfirmPlate",key:"confirmedPlate",validate:{required:!0}}],Os={executionPlatform:Cs,executionPlatformVersion:Ds,exporter:Bs,schemaVersion:Ls,id:Rs,type:Fs,components:zs},Us="Camunda Cloud",$s="8.10.0",Gs={name:"Camunda Web Modeler",version:"9b5d5ef"},Vs=19,Ys="plate-recognition-manual",Qs="default",qs=[{text:`# Couldn't read the plate

The vision model didn't return a confident reading for this photo (an unrecognised image, or no in-browser model connected). Enter the plate by hand, or re-run with the in-browser vision brain connected.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ManualHeading"},{label:"Number plate",description:"Type the plate exactly as it appears in the photo.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ManualPlate",key:"confirmedPlate",validate:{required:!0}}],Js={executionPlatform:Us,executionPlatformVersion:$s,exporter:Gs,schemaVersion:Vs,id:Ys,type:Qs,components:qs},Hs="Camunda Cloud",Ws="8.10.0",Zs={name:"Camunda Web Modeler",version:"9b5d5ef"},Ks=19,Xs="plate-recognition-country",ed="default",nd=[{text:`# Read a number plate

Pick the plate's **country** so the reader knows which format to extract, then start the run. Leave it on **Auto-detect** to let it guess from the shape.`,type:"text",layout:{row:"Row_countryHeading",columns:null},id:"Field_CountryHeading"},{label:"Plate country",description:"The vision model reads all text in the photo; this tells the process which country's plate format to pull out of that reading.",type:"select",layout:{row:"Row_country",columns:null},id:"Field_Country",key:"country",defaultValue:"auto",values:[{label:"Auto-detect (any format)",value:"auto"},{label:"United Kingdom",value:"uk"},{label:"India",value:"india"},{label:"Germany",value:"germany"},{label:"South Korea",value:"korea"}],validate:{required:!0}}],td={executionPlatform:Hs,executionPlatformVersion:Ws,exporter:Zs,schemaVersion:Ks,id:Xs,type:ed,components:nd},id=[{id:"uk-mk70-orj",file:"images/uk-mk70-orj.jpg",thumb:"images/uk-mk70-orj.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_MK70_ORJ_(MK_-_Manchester)_-_70_Plate_(1st_September_2020_-_28th_February_2021)_-_VW_Golf_(CarShop).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate MK70 ORJ" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"MK70 ORJ"},{id:"uk-ni-ijz-8992",file:"images/uk-ni-ijz-8992.jpg",thumb:"images/uk-ni-ijz-8992.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_(Northern_Ireland)_Number_Plate_IJZ_8992_(JZ_-_Down_(NI)_)_-_Dateless_Plate_-_Ford_Fiesta_(Woolston_Car_Centre).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK (Northern Ireland) Number Plate IJZ 8992" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"IJZ 8992"},{id:"uk-d651-rnb",file:"images/uk-d651-rnb.jpg",thumb:"images/uk-d651-rnb.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_D651_RNB_(NB_-_Manchester)_-_D_Reg_(1st_August_1986_-_31st_July_1987)_-_Ford_Capri_(The_Quick_Group).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate D651 RNB" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"D651 RNB"},{id:"de-bmw-mini",file:"images/de-bmw-mini.jpg",thumb:"images/de-bmw-mini.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_BMW_Mini_--_2018_--_1545-51.jpg",license:"CC-BY-SA-4.0",attribution:'Dietmar Rabich / Wikimedia Commons / "Dülmen, Dernekamp, BMW Mini -- 2018 -- 1545-51" / CC BY-SA 4.0',groundTruthPlate:"MS WL 545"},{id:"us-hyundai-genesis",file:"images/us-hyundai-genesis.jpg",thumb:"images/us-hyundai-genesis.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:Hyundai_Genesis_3.8_(US)_(9004912958).jpg",license:"CC-BY-SA-2.0",attribution:'Scarlet Sappho, "Hyundai Genesis 3.8 (US)" (Wikimedia Commons, CC BY-SA 2.0)',groundTruthPlate:"GWAN EUM"}],Gt=id,rd=Object.assign({"./images/de-bmw-mini.jpg":Ms,"./images/de-bmw-mini.thumb.jpg":xs,"./images/uk-d651-rnb.jpg":Ns,"./images/uk-d651-rnb.thumb.jpg":Es,"./images/uk-mk70-orj.jpg":ks,"./images/uk-mk70-orj.thumb.jpg":Is,"./images/uk-ni-ijz-8992.jpg":Ts,"./images/uk-ni-ijz-8992.thumb.jpg":js,"./images/us-hyundai-genesis.jpg":Ss,"./images/us-hyundai-genesis.thumb.jpg":Ps});function bt(e){const n=rd[`./${e}`];if(!n)throw new Error(`plate-recognition: image asset "${e}" is in images.json but missing on disk`);return n}const od=Gt.map(e=>({id:e.id,file:bt(e.file),thumb:bt(e.thumb),label:e.groundTruthPlate})),ad=Object.fromEntries(Gt.map(e=>[e.id,e.groundTruthPlate])),sd=`async (job, { vision, trace, text }) => {
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
}`,dd=`async (job, { text, trace }) => {
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
}`,ld={id:"plate-recognition",title:"Read a number plate from a photo",blurb:"Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",docsUrl:"https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",bpmn:As,forms:{"plate-recognition-country":td,"plate-recognition-confirm":Os,"plate-recognition-manual":Js},seed:{country:"auto"},imageInput:{label:"Pick a seed photo (its plate is known, so the scripted reader works offline) or upload your own — a live in-browser model reads a photo it has never seen.",seedImages:od},scriptedVision:ad,handlers:[{elementId:"ExtractPlate",standsInFor:"Vision model — Florence-2 <OCR> on WebGPU (in-browser)",source:sd},{elementId:"RecordResult",standsInFor:"Script task — records the governed outcome",source:dd}]},cd=[bs,Pa,ds,us,vs,ld],md=Object.assign({"./learn-error-boundary/index.ts":bo,"./learn-exclusive-gateway/index.ts":Mo,"./learn-message-correlation/index.ts":ko,"./learn-multi-instance-parallel/index.ts":So,"./learn-service-task/index.ts":Bo,"./learn-signal-broadcast/index.ts":Oo,"./learn-timer-catch-event/index.ts":Vo,"./learn-user-task-form/index.ts":na}),pd=Object.values(md).map(e=>e.default).sort((e,n)=>e.id.localeCompare(n.id)),Xe=[...cd,...pd];function Vt(){return"/"}function ud(e=location.pathname){const t=e.match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function hd(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function gd(e=location.search){return new URLSearchParams(e).get("view")==="compact"?"compact":"full"}function _t(e){return`${Vt()}examples/${encodeURIComponent(e)}`}const ft="p";function bd(){const e=new URLSearchParams(location.search),n=e.get(ft);if(!n)return!1;const t=n.replace(/[\t\n\r]/g,"");if(!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\"))return!1;e.delete(ft);try{const i=new URL(Vt(),location.href),o=new URL(t.slice(1),i);return o.origin!==location.origin?!1:(o.search=e.toString(),o.hash=location.hash,history.replaceState(null,"",o),!0)}catch{return!1}}function _d(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function wt(){return{route:ud(),embed:hd(),view:gd()}}function fd(){const[e,n]=b.useState(wt);return b.useEffect(()=>{const t=()=>n(wt());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const wd="web-demo-framework:height",yd="web-demo-framework:request-height";function vd(e){return{type:wd,height:Math.ceil(e)}}const yt="embed-height-auto";function Md(e=document){return Math.max(e.documentElement.offsetHeight,e.body.scrollHeight)}function xd(e){b.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(yt);let t=-1;const i=(l=!1)=>{const c=Md();!l&&Math.abs(c-t)<2||(t=c,window.parent.postMessage(vd(c),"*"))},o=l=>{if(l.source!==window.parent)return;const c=l.data;!c||c.type!==yd||i(!0)};window.addEventListener("message",o),i();const s=new ResizeObserver(()=>i());return s.observe(n),()=>{s.disconnect(),window.removeEventListener("message",o),n.classList.remove(yt)}},[e])}const vt={headline:"The model *runs*. The code is *yours* to edit.",lede:"Every example on this page is a real BPMN process executing in your browser on the nano WebAssembly engine — edit the model, edit the handlers, swap the LLM, and run it again.",tagline:"Runnable Camunda examples"};function Nd({text:e}){return r.jsx(r.Fragment,{children:e.split(/\*([^*]+)\*/g).map((n,t)=>t%2===1?r.jsx("em",{children:n},t):r.jsx(b.Fragment,{children:n},t))})}function Ed(){const{route:e,embed:n,view:t}=fd(),i=n&&t==="compact",o=Ot().brain,s=Kr();xd(n);const l=e.kind==="example"?e.id:Xe[0].id,c=Xe.find(_=>_.id===l)??Xe[0],u=Xe.filter(_=>_.group!=="learn-bpmn"),a=Xe.filter(_=>_.group==="learn-bpmn"),p=_=>{_d(_t(_),{hash:location.hash})},h=c.hero??vt,d=r.jsxs(r.Fragment,{children:[!n&&r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"hero",children:[r.jsx("h1",{children:r.jsx(Nd,{text:h.headline})}),h.lede&&r.jsx("p",{children:h.lede})]}),r.jsx("nav",{className:"example-picker","aria-label":"Scenario examples",children:u.map(_=>r.jsx(H,{size:"sm",variant:_.id===c.id?"default":"secondary","aria-current":_.id===c.id?"page":void 0,onClick:()=>p(_.id),children:_.title},_.id))}),a.length>0&&r.jsxs(r.Fragment,{children:[r.jsx("h2",{className:"example-group-heading",id:"learn-bpmn-heading",children:"Learn BPMN"}),r.jsx("nav",{className:"example-picker","aria-labelledby":"learn-bpmn-heading",children:a.map(_=>r.jsx(H,{size:"sm",variant:_.id===c.id?"default":"secondary","aria-current":_.id===c.id?"page":void 0,onClick:()=>p(_.id),children:_.title},_.id))})]})]}),r.jsxs("div",{className:"example-meta",children:[c.docsUrl&&r.jsx("a",{className:"docs-link",href:c.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&r.jsx("a",{className:"open-full-page",href:_t(c.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:i?"Open the editable version ↗":"Open full page ↗"})]}),r.jsx(mo,{example:c,compact:i,initialBrainKind:o,initialTourId:s},c.id)]});return n?r.jsx("div",{className:`c4-ui app-shell app-embed${i?" app-compact":""}`,children:r.jsx("main",{id:"main",className:`layout layout-embed${i?" layout-compact":""}`,children:d})}):r.jsxs("div",{className:"c4-ui app-shell",children:[r.jsx(di,{className:"topbar",logo:r.jsx("span",{className:"brand-dot","aria-hidden":!0}),appName:"Runnable Camunda examples",trailing:r.jsx("span",{className:"app-subtitle",children:h.tagline??vt.tagline})}),r.jsx("main",{id:"main",className:"layout",children:d}),r.jsx("footer",{className:"footer",children:"Running locally in your browser on the nano WebAssembly BPMN engine — no cluster, no server, no data leaving the page."})]})}bd();Xt.createRoot(document.getElementById("root")).render(r.jsx(b.StrictMode,{children:r.jsx(li,{children:r.jsx(Ed,{})})}));export{ue as _,jd as c};
