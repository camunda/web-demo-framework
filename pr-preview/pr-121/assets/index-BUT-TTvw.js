const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-js-BEOU0ddW.css","assets/bpmn-embedded-DcP4ujb9.css","assets/RuntimeDiagram-DTnJz5cT.js","assets/vendor-react-9Ma26nY1.js","assets/Viewer-D_7S4Gwm.js","assets/MonacoEditor-CecVU5Ar.js","assets/MonacoEditor-B3OBTlkp.css","assets/vendor-modeler-BzScQTrW.js","assets/vendor-design-system-CUrMBNMa.js","assets/vendor-design-system-BHuUzrJ2.css","assets/parser-DkgAe_kI.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-BvRnEADr.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var io=Object.defineProperty;var ro=(e,n,t)=>n in e?io(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var F=(e,n,t)=>ro(e,typeof n!="symbol"?n+"":n,t);import{r as h,j as i,i as ao}from"./vendor-react-9Ma26nY1.js";import{B as K,a as te,L as Ye,S as Tn,b as Dn,c as jn,d as An,e as Sn,A as le,f as ce,g as me,I as Xn,C as so,h as lo,i as co,j as mo,k as po,l as uo,T as go,m as ho,n as rn,o as an,p as bo,q as yo}from"./vendor-design-system-CUrMBNMa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const wo="modulepreload",fo=function(e){return"/web-demo-framework/pr-preview/pr-121/"+e},et={},he=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){let d=function(a){return Promise.all(a.map(p=>Promise.resolve(p).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),m=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=d(t.map(a=>{if(a=fo(a),a in et)return;et[a]=!0;const p=a.endsWith(".css"),u=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const b=document.createElement("link");if(b.rel=p?"stylesheet":wo,p||(b.as="script"),b.crossOrigin="",b.href=a,m&&b.setAttribute("nonce",m),document.head.appendChild(b),p)return new Promise((g,y)=>{b.addEventListener("load",g),b.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(d){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=d,window.dispatchEvent(c),!c.defaultPrevented)throw d}return r.then(d=>{for(const c of d||[])c.status==="rejected"&&s(c.reason);return n().catch(s)})},_o="io.camunda.agenticai:aiagent",Ne="http://www.omg.org/spec/BPMN/20100524/MODEL",Mo="http://camunda.org/schema/zeebe/1.0";function pn(e,n){return Array.from(e.getElementsByTagNameNS(Mo,n))}function At(e,n){return pn(e,n).filter(t=>vo(t)===e)}function vo(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Ne&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function Rn(e){const n=At(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function nt(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Ne&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function tt(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(o=>o.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function St(e){const n=[],t=o=>{for(const r of Array.from(o.attributes))n.push(r.value);for(const r of Array.from(o.children))t(r)};return t(e),n.join(`
`)}function No(e){return Pt(St(e))}function xo(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Ne&&t.localName==="extensionElements");return n?Pt(St(n)):[]}function Pt(e){const n=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,t=[],o=new Set;for(const r of e.matchAll(n)){const s=r[1];o.has(s)||(o.add(s),t.push({name:s,description:(r[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:r[3]??"string"}))}return t}function Eo(e){const n={};for(const t of At(e,"input")){const o=t.getAttribute("target");o&&(n[o]=t.getAttribute("source")??"")}return n}function Io(e){return Array.from(e.getElementsByTagNameNS(Ne,"adHocSubProcess")).filter(n=>(Rn(n)??"").startsWith(_o))}const ko=new Set(["subProcess","adHocSubProcess","callActivity"]),To=new Set(["adHocSubProcess","subProcess","transaction"]);function Do(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Ne&&To.has(n.localName))return n;n=n.parentElement}return null}function jo(e,n){const t=Eo(e),o=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:Rn(e),systemPrompt:tt(t["data.systemPrompt.prompt"]),userPrompt:tt(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(o)&&o>0?o:10,tools:n}}function Ao(e,n){var b;const t=e.getAttribute("id")??"",o=e.getAttribute("name")??t,r=Io(e);r.length>1&&n.push({severity:"warning",elementId:r.map(g=>g.getAttribute("id")).join(", "),message:`Process "${o}" hosts ${r.length} AI Agent sub-processes (${r.map(g=>g.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const s=[],d=new Map(r.map(g=>[g,[]]));for(const g of Array.from(e.getElementsByTagName("*"))){if(g.namespaceURI!==Ne||r.includes(g))continue;const y=g.getAttribute("id");if(!y)continue;const x=Do(g),M=x&&r.includes(x)?x:null;if(M&&ko.has(g.localName)){const N=g.getAttribute("name")??y,Q=nt(g);s.push({elementId:y,label:N,jobType:"",documentation:Q,isTool:!0,compound:!0}),d.get(M).push({elementId:y,label:N,jobType:"",documentation:Q,args:xo(g),compound:!0});continue}const w=Rn(g);if(!w)continue;const v={elementId:y,label:g.getAttribute("name")??y,jobType:w,documentation:nt(g),isTool:M!=null};s.push(v),M&&d.get(M).push({elementId:y,label:v.label,jobType:w,documentation:v.documentation,args:No(g)})}const c=r.map(g=>jo(g,d.get(g))),m=Array.from(e.getElementsByTagNameNS(Ne,"userTask")).map(g=>{var y;return{elementId:g.getAttribute("id")??"",label:g.getAttribute("name")??g.getAttribute("id")??"",formId:((y=pn(g,"formDefinition")[0])==null?void 0:y.getAttribute("formId"))??void 0}}),a=Array.from(e.children).find(g=>g.namespaceURI===Ne&&g.localName==="startEvent"),p=a?((b=pn(a,"formDefinition")[0])==null?void 0:b.getAttribute("formId"))??void 0:void 0,u=a?So(a):void 0;return{processId:t,processName:o,tasks:s,agents:c,userTasks:m,startFormId:p,startMessage:u}}function So(e){var s;const n=Array.from(e.children).find(d=>d.namespaceURI===Ne&&d.localName==="messageEventDefinition"),t=n==null?void 0:n.getAttribute("messageRef");if(!t)return;const o=Array.from(e.ownerDocument.getElementsByTagNameNS(Ne,"message")).find(d=>d.getAttribute("id")===t);if(!o)return;const r=o.getAttribute("name");if(r)return{messageName:r,correlationKey:((s=pn(o,"subscription")[0])==null?void 0:s.getAttribute("correlationKey"))??"",elementId:e.getAttribute("id")??""}}function Po(e,n){const t=e.trim().replace(/^=/,"").trim(),o=t.match(/^"((?:[^"\\]|\\.)*)"$/);if(o)return o[1].replace(/\\"/g,'"');if(/^[A-Za-z_$][\w$]*$/.test(t)){const r=n[t];return r==null?"":String(r)}return t}function Co(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),o=t.getElementsByTagName("parsererror")[0];if(o)throw new Error(`Invalid BPMN XML: ${o.textContent}`);const r=Array.from(t.getElementsByTagNameNS(Ne,"process"));if(r.length===0)throw new Error("No <bpmn:process> in the diagram.");const s=[],d=r.map(m=>Ao(m,s));let c=n.processId?d.find(m=>m.processId===n.processId):void 0;return n.processId&&!c&&s.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${d[0].processId}".`}),c??(c=d[0]),d.length>1&&s.push({severity:"warning",message:`Diagram has ${d.length} <bpmn:process> elements (${d.map(m=>m.processId).join(", ")}); using "${c.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:d,diagnostics:s,processId:c.processId,processName:c.processName,tasks:c.tasks,agent:c.agents[0]??null,agents:d.flatMap(m=>m.agents),userTasks:c.userTasks,startFormId:c.startFormId,startMessage:c.startMessage}}function Lo(e){return e?e.imageId?{imageId:e.imageId}:e.imageName?{imageName:e.imageName}:{}:{}}function Ct(e,n){return n?e.pixels:e.imageId??e.pixels}const Bo="No image selected — pick or upload a photo to read.";function ot(){return Bo}function Ro(e,n){return async t=>{const o=e.resolve(n);if(!o)return ot();const r=Ct(o,e.live);if(r===void 0)return ot();try{return await e.read(r,t)}catch(s){return`Couldn't read the image (${s instanceof Error?s.message:String(s)}).`}}}function zo(e,n){return async()=>{const t=e.resolve(n);if(t)return Ct(t,e.live)}}function Oo(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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
  <\/script></body></html>`}function Lt(e,n={}){const{timeoutMs:t=5e3,onTrace:o,onVision:r,onImage:s}=n,d=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((c,m)=>{const a=document.createElement("iframe");a.setAttribute("sandbox","allow-scripts"),a.style.display="none",a.setAttribute("aria-hidden","true");let p=!1,u;const b=()=>{u&&clearTimeout(u),window.removeEventListener("message",y),a.remove()},g=M=>{p||(p=!0,b(),M())};function y(M){var v;if(M.source!==a.contentWindow)return;const w=M.data;if(!(!w||typeof w!="object")){if(w.kind==="ready"){const N=e.job,Q=e.kind==="run-handler"?{kind:"run-handler",id:d,source:e.source,job:N,hasVision:e.hasVision}:{kind:"run-agent",id:d,source:e.source,job:N};(v=a.contentWindow)==null||v.postMessage(Q,"*");return}"id"in w&&w.id!==d||(w.kind==="trace"?o==null||o(w.text):w.kind==="vision-request"?x(w.callId,r,"vision",w.prompt):w.kind==="image-request"?x(w.callId,s,"image"):w.kind==="result"?g(()=>c(w.value)):w.kind==="error"&&g(()=>m(new Error(w.message))))}}function x(M,w,v,...N){const Q=J=>{var q;return(q=a.contentWindow)==null?void 0:q.postMessage(J,"*")};if(!w){Q({kind:"helper-error",id:d,callId:M,message:`${v} helper is not available.`});return}Promise.resolve().then(()=>w(...N)).then(J=>Q({kind:"helper-result",id:d,callId:M,value:J}),J=>Q({kind:"helper-error",id:d,callId:M,message:J instanceof Error?J.message:String(J)}))}window.addEventListener("message",y),u=setTimeout(()=>{g(()=>m(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),a.srcdoc=Oo(),document.body.appendChild(a)})}function Bt(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function Fo(e,n,t){const o=typeof t.vision=="function";return Lt({kind:"run-handler",source:e,job:Bt(n),hasVision:o},{onTrace:t.trace,onVision:t.vision?r=>t.vision(r):void 0,onImage:t.image?()=>t.image():void 0})}function Uo(e,n){return Lt({kind:"run-agent",source:e,job:Bt(n)})}function Rt(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function Go(e){return Rt(e,"Handler code"),(n,t)=>Fo(e,n,t)}function Qo(e){return Rt(e,"Agent code"),n=>Uo(e,n)}function $o(e,n,t,o){return{sleep:r=>new Promise(s=>setTimeout(s,r)),trace:r=>n({kind:"tool",text:`   ${r}`,elementId:e.elementId,turn:t}),text:(r,s="")=>{const d=e.variables[r];return typeof d=="string"?d:d==null?s:String(d)},num:(r,s=0)=>{const d=e.variables[r],c=typeof d=="number"?d:Number(d);return Number.isFinite(c)?c:s},...o?{vision:Ro(o,e.instanceKey),image:zo(o,e.instanceKey)}:{}}}function Yo(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Vo(e,n,t,o,r){const s={},d=e.processes.flatMap(m=>m.tasks),c=new Map(d.map(m=>[m.elementId,m.label]));for(const m of d)m.compound||s[m.jobType]||(s[m.jobType]=async a=>{const p=n[a.elementId];if(!p)throw new Error(`No handler registered for ${a.elementId} (job type ${a.type})`);const u=c.get(a.elementId)??a.elementId,b=o==null?void 0:o.current;t({kind:"tool",text:`▶ ${u}`,elementId:a.elementId,turn:b});const g=await p(a,$o(a,t,b,r));return t({kind:"vars",text:`  ↳ ${Yo(g)}`,elementId:a.elementId,result:g,turn:b}),g});return s}const qo=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function nn(...e){const n=Object.create(null);for(const t of e)if(t)for(const o of Object.keys(t))n[o]=t[o];return n}function zt(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function Ot(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ho(e){return Ot(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function Zo(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jo(e){return JSON.stringify(e).slice(1,-1)}function Wo(e,n){const t=e.lastIndexOf("<",n),o=e.lastIndexOf(">",n);if(t<=o)return"text";const r=e.slice(t,n);if((r.match(/"/g)??[]).length%2===0)return"text";const d=r.lastIndexOf('"');return(r.slice(d+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function Ko(e,n,t="xml"){const o=[],r=new Set;return{result:e.replace(qo,(d,c,m)=>{const a=c.trim();if(!Object.prototype.hasOwnProperty.call(n,a))return r.has(a)||(r.add(a),o.push(a)),d;const p=n[a];if(t==="json")return Jo(p);const u=Wo(e,m);return u==="feel-literal"?Zo(p):u==="attribute"?Ho(p):Ot(p)}),unresolved:o}}function Xo(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function ei(e,n={},t=e.bpmn,o={}){const r=[],s=nn(e.templates,o),{result:d,unresolved:c}=Ko(t,s,"xml");for(const w of c)r.push({severity:"warning",message:`Template placeholder "{{${w}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let m;try{m=Co(d)}catch(w){return r.push({severity:"error",message:w instanceof Error?w.message:String(w)}),{resolvedBpmn:d,model:Xo(),handlers:{},forms:{},diagnostics:r,hasErrors:!0}}r.push(...m.diagnostics);const a=m.processes.flatMap(w=>w.tasks),p=new Map(e.handlers.map(w=>[w.elementId,w.source])),u={};for(const w of a){if(w.compound)continue;const v=n[w.elementId]??p.get(w.elementId);if(v===void 0){r.push({severity:"error",elementId:w.elementId,jobType:w.jobType,message:`No handler for "${w.label}" (${w.elementId}, job type "${w.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{u[w.elementId]=Go(v)}catch(N){r.push({severity:"error",elementId:w.elementId,jobType:w.jobType,message:`"${w.label}" (${w.elementId}): handler code didn't compile — ${N instanceof Error?N.message:String(N)}`})}}const b=new Set(a.map(w=>w.elementId)),g=new Set([...p.keys(),...Object.keys(n)]);for(const w of g)b.has(w)||r.push({severity:"error",elementId:w,message:`Handler "${w}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const y={},x=e.forms??{},M=(w,v)=>{if(!w)return;const N=x[w];N?y[w]=N:r.push({severity:"error",formId:w,message:`${v} references form "${w}", which has no matching schema.`})};for(const w of m.processes){M(w.startFormId,`The start event of process "${w.processName}"`);for(const v of w.userTasks)M(v.formId,`User task "${v.label}" (${v.elementId})`)}return{resolvedBpmn:d,model:m,handlers:u,forms:y,diagnostics:r,hasErrors:r.some(w=>w.severity==="error")}}function ni(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let o=n;o<e.length;o++)if(e[o]==="{")t++;else if(e[o]==="}"&&(t--,t===0))try{const r=JSON.parse(e.slice(n,o+1));return typeof r=="object"&&r!==null&&!Array.isArray(r)?r:null}catch{return null}return null}function Pn(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function it(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function rt(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:it(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,o=Array.isArray(t)?t:Object.values(e).find(s=>Array.isArray(s))??[],r=[];for(const s of o)if(typeof s=="string")s.trim()&&r.push({name:s.trim(),args:{}});else if(s&&typeof s=="object"){const d=s,c=d.name??d.tool??d.id??d.function;typeof c=="string"&&c.trim()&&r.push({name:c.trim(),args:it(d)})}return r}function ti(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function at(e){const n=e.args.length?e.args.map(o=>`      ${o.name} (${o.type}) — ${o.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function oi(e,n,t){const o=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",r=t[0]??e.tools[0],s=r!=null&&r.args.length?`{${r.args.map(d=>`"${d.name}": "…"`).join(", ")}}`:"{}";return n?`${o}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${t.map(at).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tools": [{"tool": "${(r==null?void 0:r.elementId)??"ToolName"}", "arguments": ${s}}], "done": false}

List one entry per tool you're calling this turn (often just one). Each
"tool" value must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tools.`:`${o}

You drive the process by calling exactly one tool at a time. The tool names you
may use, one per block:

${t.map(at).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(r==null?void 0:r.elementId)??"ToolName"}", "arguments": ${s}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function ii(e,n,t,o,r=[],s=[],d=!1){const c=e.userPrompt||"Carry out your task.",m=Object.entries(n).filter(([,p])=>typeof p=="string"&&p.trim().length>0).map(([p,u])=>`  ${p}: ${String(u)}`),a=[c,m.length?`Case data:
${m.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return a.push(t.length?`${d?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),a.push(o.length?`Tools still available:
${o.map(p=>`  ${p.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),s.length&&a.push(`Your last reply was rejected: ${s.join("; ")}. Do not repeat it.`),r.length&&a.push(`You reported that you are done, but ${r.join(" and ")} ${r.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${r.length===1?"it":"them"} now.`),a.push("Which tool should run next? Reply with JSON only."),a.join(`

`)}async function ri(e,n,t,o,r,s){let d="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:s});const c=await e(o,r,m=>{d+=m,n({kind:"llm",text:`${Pn(d)} ▍`,key:t,pending:!0,turn:s})});return n({kind:"llm",text:Pn(c||d)||"(empty reply)",key:t,pending:!1,turn:s}),c}function ai(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function si(e,n,t){const o={},r=new Map,s=new Map;for(const{tool:d,args:c}of e){const m={};for(const a of d.args){const p=c[a.name];if(!(p!=null&&p!=="")){n({kind:"error",text:`🤖 ${d.elementId}: model supplied no value for "${a.name}"`,turn:t,elementId:d.elementId});continue}const b=r.get(a.name);if(b!==void 0&&b!==d.elementId){n({kind:"error",text:`🤖 argument name collision on "${a.name}": both ${b} and ${d.elementId} declare it — ${b} already claimed it this turn, ${d.elementId}'s value is dropped`,turn:t,elementId:d.elementId});continue}const g=ai(a.type,p);if(!g.ok){n({kind:"error",text:`🤖 ${d.elementId}: "${a.name}" is declared as ${a.type} but the model supplied ${JSON.stringify(p)} — rejected, not passed through`,turn:t,elementId:d.elementId});continue}o[a.name]=g.value,m[a.name]=g.value,r.set(a.name,d.elementId)}s.set(d.elementId,m)}return{variablesOut:o,forHistory:s}}function di(e,n,t,o={}){const{maxNewTokens:r=384,allowRepeats:s=!1,allowMultiToolTurns:d=!1,turnRef:c,requiredTools:m=[],maxEarlyDoneNudges:a=1,maxUnproductiveTurns:p=3}=o;let u=0;const b=new Set,g=[];let y=0,x=[],M=[];return async w=>{const v=w.variables,N=v.toolCallResult;N!==void 0&&g.length&&(g[g.length-1]=`${g[g.length-1]} → ${Pn(JSON.stringify(N),160)}`);let Q=0;for(;;){const q=await J();if(q)return q;if(Q+=1,Q>=p)return t({kind:"error",text:`🤖 ${Q} turns in a row activated nothing — completing the agent. The model has lost the reply format; whatever it has already run stands.`,turn:u}),{completionConditionFulfilled:!0}}async function J(){if(u+=1,c&&(c.current=u),u>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:u}),{completionConditionFulfilled:!0};const q=s?e.tools:e.tools.filter(I=>!b.has(I.elementId));if(q.length===0)return t({kind:"agent",text:"🤖 every tool has run — completing the agent",turn:u}),{completionConditionFulfilled:!0};const be=[{role:"system",content:oi(e,d,q)},{role:"user",content:ii(e,v,g,q,x,M,s)}];x=[],M=[];let Ae;try{Ae=await ri(n,t,`llm-turn-${u}`,be,r,u)}catch(I){return t({kind:"error",text:`LLM call failed: ${I instanceof Error?I.message:String(I)} — completing the agent.`,turn:u}),{completionConditionFulfilled:!0}}const ye=ni(Ae);if(ti(ye)&&rt(ye).length===0){const I=m.filter(B=>!b.has(B));return I.length&&y<a?(y+=1,x=I,t({kind:"agent",text:`🤖 model says it is done, but ${I.join(", ")} hasn't run — asking once more`,turn:u}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:u}),{completionConditionFulfilled:!0})}const Ie=rt(ye);if(Ie.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:u}),M=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const X=[],we=[],de=[];for(const I of Ie){const B=e.tools.find(V=>V.elementId===I.name);if(!B){we.push(I.name);continue}if(!s&&b.has(B.elementId)){de.push(B.elementId);continue}X.push({tool:B,args:I.args})}if(we.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${we.join(", ")} — nothing activated`,turn:u}),de.length&&t({kind:"error",text:`🤖 model asked to re-run ${de.join(", ")} — skipped (already run)`,turn:u}),X.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:u}),M=[...we.length?[`${we.join(", ")} ${we.length===1?"is":"are"} not a real tool`]:[],...de.length?[`${de.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:j,forHistory:k}=si(X,t,u);for(const{tool:I}of X)b.add(I.elementId),g.push(`- ${I.elementId}(${JSON.stringify(k.get(I.elementId))})`);for(const{tool:I}of X)t({kind:"agent",text:`🤖 calling ${I.elementId}`,turn:u,elementId:I.elementId,args:k.get(I.elementId)??{}});return{activateElements:X.map(I=>({elementId:I.tool.elementId})),variables:j}}}}function li(e,n,t,o={}){const r=new Map(e.map(s=>[s.elementId,di(s,n,t,o)]));return async s=>{const d=r.get(s.elementId);if(!d)throw new Error(`No agent host registered for "${s.elementId}"`);return d(s)}}class Cn{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,st.unregister(this),n}free(){const n=this.__destroy_into_raw();l.__wbg_testengine_free(n,0)}activateJobs(n,t,o,r){let s,d;try{const g=l.__wbindgen_add_to_stack_pointer(-16),y=P(n,l.__wbindgen_export,l.__wbindgen_export2),x=S,M=P(r,l.__wbindgen_export,l.__wbindgen_export2),w=S;l.testengine_activateJobs(g,this.__wbg_ptr,y,x,t,o,M,w);var c=_().getInt32(g+0,!0),m=_().getInt32(g+4,!0),a=_().getInt32(g+8,!0),p=_().getInt32(g+12,!0),u=c,b=m;if(p)throw u=0,b=0,G(a);return s=u,d=b,U(u,b)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(s,d,1)}}advanceTime(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16);l.testengine_advanceTime(p,this.__wbg_ptr,n);var r=_().getInt32(p+0,!0),s=_().getInt32(p+4,!0),d=_().getInt32(p+8,!0),c=_().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,U(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}assignUserTask(n,t,o){let r,s;try{const b=l.__wbindgen_add_to_stack_pointer(-16),g=P(n,l.__wbindgen_export,l.__wbindgen_export2),y=S,x=P(t,l.__wbindgen_export,l.__wbindgen_export2),M=S;l.testengine_assignUserTask(b,this.__wbg_ptr,g,y,x,M,o);var d=_().getInt32(b+0,!0),c=_().getInt32(b+4,!0),m=_().getInt32(b+8,!0),a=_().getInt32(b+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,U(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}broadcastSignal(n,t){let o,r;try{const u=l.__wbindgen_add_to_stack_pointer(-16),b=P(n,l.__wbindgen_export,l.__wbindgen_export2),g=S,y=P(t,l.__wbindgen_export,l.__wbindgen_export2),x=S;l.testengine_broadcastSignal(u,this.__wbg_ptr,b,g,y,x);var s=_().getInt32(u+0,!0),d=_().getInt32(u+4,!0),c=_().getInt32(u+8,!0),m=_().getInt32(u+12,!0),a=s,p=d;if(m)throw a=0,p=0,G(c);return o=a,r=p,U(a,p)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(o,r,1)}}cancelInstance(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16),u=P(n,l.__wbindgen_export,l.__wbindgen_export2),b=S;l.testengine_cancelInstance(p,this.__wbg_ptr,u,b);var r=_().getInt32(p+0,!0),s=_().getInt32(p+4,!0),d=_().getInt32(p+8,!0),c=_().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,U(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}completeAgentJob(n,t,o){let r,s;try{const b=l.__wbindgen_add_to_stack_pointer(-16),g=P(n,l.__wbindgen_export,l.__wbindgen_export2),y=S,x=P(t,l.__wbindgen_export,l.__wbindgen_export2),M=S,w=P(o,l.__wbindgen_export,l.__wbindgen_export2),v=S;l.testengine_completeAgentJob(b,this.__wbg_ptr,g,y,x,M,w,v);var d=_().getInt32(b+0,!0),c=_().getInt32(b+4,!0),m=_().getInt32(b+8,!0),a=_().getInt32(b+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,U(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}completeJob(n,t){let o,r;try{const u=l.__wbindgen_add_to_stack_pointer(-16),b=P(n,l.__wbindgen_export,l.__wbindgen_export2),g=S,y=P(t,l.__wbindgen_export,l.__wbindgen_export2),x=S;l.testengine_completeJob(u,this.__wbg_ptr,b,g,y,x);var s=_().getInt32(u+0,!0),d=_().getInt32(u+4,!0),c=_().getInt32(u+8,!0),m=_().getInt32(u+12,!0),a=s,p=d;if(m)throw a=0,p=0,G(c);return o=a,r=p,U(a,p)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(o,r,1)}}completeUserTask(n,t){let o,r;try{const u=l.__wbindgen_add_to_stack_pointer(-16),b=P(n,l.__wbindgen_export,l.__wbindgen_export2),g=S,y=P(t,l.__wbindgen_export,l.__wbindgen_export2),x=S;l.testengine_completeUserTask(u,this.__wbg_ptr,b,g,y,x);var s=_().getInt32(u+0,!0),d=_().getInt32(u+4,!0),c=_().getInt32(u+8,!0),m=_().getInt32(u+12,!0),a=s,p=d;if(m)throw a=0,p=0,G(c);return o=a,r=p,U(a,p)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(o,r,1)}}correlateMessage(n,t,o){let r,s;try{const b=l.__wbindgen_add_to_stack_pointer(-16),g=P(n,l.__wbindgen_export,l.__wbindgen_export2),y=S,x=P(t,l.__wbindgen_export,l.__wbindgen_export2),M=S,w=P(o,l.__wbindgen_export,l.__wbindgen_export2),v=S;l.testengine_correlateMessage(b,this.__wbg_ptr,g,y,x,M,w,v);var d=_().getInt32(b+0,!0),c=_().getInt32(b+4,!0),m=_().getInt32(b+8,!0),a=_().getInt32(b+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,U(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}createInstance(n,t,o){let r,s;try{const b=l.__wbindgen_add_to_stack_pointer(-16),g=P(n,l.__wbindgen_export,l.__wbindgen_export2),y=S,x=P(t,l.__wbindgen_export,l.__wbindgen_export2),M=S;l.testengine_createInstance(b,this.__wbg_ptr,g,y,x,M,gi(o)?Number.MAX_SAFE_INTEGER:o>>0);var d=_().getInt32(b+0,!0),c=_().getInt32(b+4,!0),m=_().getInt32(b+8,!0),a=_().getInt32(b+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,U(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}debugClear(){l.testengine_debugClear(this.__wbg_ptr)}debugCreateInstance(n,t,o){let r,s;try{const b=l.__wbindgen_add_to_stack_pointer(-16),g=P(n,l.__wbindgen_export,l.__wbindgen_export2),y=S,x=P(t,l.__wbindgen_export,l.__wbindgen_export2),M=S,w=P(o,l.__wbindgen_export,l.__wbindgen_export2),v=S;l.testengine_debugCreateInstance(b,this.__wbg_ptr,g,y,x,M,w,v);var d=_().getInt32(b+0,!0),c=_().getInt32(b+4,!0),m=_().getInt32(b+8,!0),a=_().getInt32(b+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,U(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}get debugIsPaused(){return l.testengine_debugIsPaused(this.__wbg_ptr)!==0}debugResume(){let n,t;try{const a=l.__wbindgen_add_to_stack_pointer(-16);l.testengine_debugResume(a,this.__wbg_ptr);var o=_().getInt32(a+0,!0),r=_().getInt32(a+4,!0),s=_().getInt32(a+8,!0),d=_().getInt32(a+12,!0),c=o,m=r;if(d)throw c=0,m=0,G(s);return n=c,t=m,U(c,m)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(n,t,1)}}debugStep(){let n,t;try{const a=l.__wbindgen_add_to_stack_pointer(-16);l.testengine_debugStep(a,this.__wbg_ptr);var o=_().getInt32(a+0,!0),r=_().getInt32(a+4,!0),s=_().getInt32(a+8,!0),d=_().getInt32(a+12,!0),c=o,m=r;if(d)throw c=0,m=0,G(s);return n=c,t=m,U(c,m)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(n,t,1)}}deploy(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16),u=P(n,l.__wbindgen_export,l.__wbindgen_export2),b=S;l.testengine_deploy(p,this.__wbg_ptr,u,b);var r=_().getInt32(p+0,!0),s=_().getInt32(p+4,!0),d=_().getInt32(p+8,!0),c=_().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,U(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}deployForm(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16),u=P(n,l.__wbindgen_export,l.__wbindgen_export2),b=S;l.testengine_deployForm(p,this.__wbg_ptr,u,b);var r=_().getInt32(p+0,!0),s=_().getInt32(p+4,!0),d=_().getInt32(p+8,!0),c=_().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,U(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}deployResource(n,t){let o,r;try{const u=l.__wbindgen_add_to_stack_pointer(-16),b=P(n,l.__wbindgen_export,l.__wbindgen_export2),g=S,y=P(t,l.__wbindgen_export,l.__wbindgen_export2),x=S;l.testengine_deployResource(u,this.__wbg_ptr,b,g,y,x);var s=_().getInt32(u+0,!0),d=_().getInt32(u+4,!0),c=_().getInt32(u+8,!0),m=_().getInt32(u+12,!0),a=s,p=d;if(m)throw a=0,p=0,G(c);return o=a,r=p,U(a,p)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(o,r,1)}}events(){let n,t;try{const a=l.__wbindgen_add_to_stack_pointer(-16);l.testengine_events(a,this.__wbg_ptr);var o=_().getInt32(a+0,!0),r=_().getInt32(a+4,!0),s=_().getInt32(a+8,!0),d=_().getInt32(a+12,!0),c=o,m=r;if(d)throw c=0,m=0,G(s);return n=c,t=m,U(c,m)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(n,t,1)}}failJob(n,t,o){let r,s;try{const b=l.__wbindgen_add_to_stack_pointer(-16),g=P(n,l.__wbindgen_export,l.__wbindgen_export2),y=S,x=P(o,l.__wbindgen_export,l.__wbindgen_export2),M=S;l.testengine_failJob(b,this.__wbg_ptr,g,y,t,x,M);var d=_().getInt32(b+0,!0),c=_().getInt32(b+4,!0),m=_().getInt32(b+8,!0),a=_().getInt32(b+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,U(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}migrate(n,t,o){let r,s;try{const b=l.__wbindgen_add_to_stack_pointer(-16),g=P(n,l.__wbindgen_export,l.__wbindgen_export2),y=S,x=P(t,l.__wbindgen_export,l.__wbindgen_export2),M=S,w=P(o,l.__wbindgen_export,l.__wbindgen_export2),v=S;l.testengine_migrate(b,this.__wbg_ptr,g,y,x,M,w,v);var d=_().getInt32(b+0,!0),c=_().getInt32(b+4,!0),m=_().getInt32(b+8,!0),a=_().getInt32(b+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,U(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}modify(n,t,o){let r,s;try{const b=l.__wbindgen_add_to_stack_pointer(-16),g=P(n,l.__wbindgen_export,l.__wbindgen_export2),y=S,x=P(t,l.__wbindgen_export,l.__wbindgen_export2),M=S,w=P(o,l.__wbindgen_export,l.__wbindgen_export2),v=S;l.testengine_modify(b,this.__wbg_ptr,g,y,x,M,w,v);var d=_().getInt32(b+0,!0),c=_().getInt32(b+4,!0),m=_().getInt32(b+8,!0),a=_().getInt32(b+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,U(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}constructor(){const n=l.testengine_new();return this.__wbg_ptr=n,st.register(this,this.__wbg_ptr,this),this}get now(){return l.testengine_now(this.__wbg_ptr)}reset(){l.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16),u=P(n,l.__wbindgen_export,l.__wbindgen_export2),b=S;l.testengine_resolveIncident(p,this.__wbg_ptr,u,b);var r=_().getInt32(p+0,!0),s=_().getInt32(p+4,!0),d=_().getInt32(p+8,!0),c=_().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,U(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}setVariables(n,t,o){let r,s;try{const b=l.__wbindgen_add_to_stack_pointer(-16),g=P(n,l.__wbindgen_export,l.__wbindgen_export2),y=S,x=P(t,l.__wbindgen_export,l.__wbindgen_export2),M=S;l.testengine_setVariables(b,this.__wbg_ptr,g,y,x,M,o);var d=_().getInt32(b+0,!0),c=_().getInt32(b+4,!0),m=_().getInt32(b+8,!0),a=_().getInt32(b+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,U(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}snapshot(){let n,t;try{const a=l.__wbindgen_add_to_stack_pointer(-16);l.testengine_snapshot(a,this.__wbg_ptr);var o=_().getInt32(a+0,!0),r=_().getInt32(a+4,!0),s=_().getInt32(a+8,!0),d=_().getInt32(a+12,!0),c=o,m=r;if(d)throw c=0,m=0,G(s);return n=c,t=m,U(c,m)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(n,t,1)}}throwError(n,t,o){let r,s;try{const b=l.__wbindgen_add_to_stack_pointer(-16),g=P(n,l.__wbindgen_export,l.__wbindgen_export2),y=S,x=P(t,l.__wbindgen_export,l.__wbindgen_export2),M=S,w=P(o,l.__wbindgen_export,l.__wbindgen_export2),v=S;l.testengine_throwError(b,this.__wbg_ptr,g,y,x,M,w,v);var d=_().getInt32(b+0,!0),c=_().getInt32(b+4,!0),m=_().getInt32(b+8,!0),a=_().getInt32(b+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,U(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}tickNow(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16);l.testengine_tickNow(p,this.__wbg_ptr,n);var r=_().getInt32(p+0,!0),s=_().getInt32(p+4,!0),d=_().getInt32(p+8,!0),c=_().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,U(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}unassignUserTask(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16),u=P(n,l.__wbindgen_export,l.__wbindgen_export2),b=S;l.testengine_unassignUserTask(p,this.__wbg_ptr,u,b);var r=_().getInt32(p+0,!0),s=_().getInt32(p+4,!0),d=_().getInt32(p+8,!0),c=_().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,U(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}updateRetries(n,t){let o,r;try{const u=l.__wbindgen_add_to_stack_pointer(-16),b=P(n,l.__wbindgen_export,l.__wbindgen_export2),g=S;l.testengine_updateRetries(u,this.__wbg_ptr,b,g,t);var s=_().getInt32(u+0,!0),d=_().getInt32(u+4,!0),c=_().getInt32(u+8,!0),m=_().getInt32(u+12,!0),a=s,p=d;if(m)throw a=0,p=0,G(c);return o=a,r=p,U(a,p)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(o,r,1)}}updateUserTask(n,t){let o,r;try{const u=l.__wbindgen_add_to_stack_pointer(-16),b=P(n,l.__wbindgen_export,l.__wbindgen_export2),g=S,y=P(t,l.__wbindgen_export,l.__wbindgen_export2),x=S;l.testengine_updateUserTask(u,this.__wbg_ptr,b,g,y,x);var s=_().getInt32(u+0,!0),d=_().getInt32(u+4,!0),c=_().getInt32(u+8,!0),m=_().getInt32(u+12,!0),a=s,p=d;if(m)throw a=0,p=0,G(c);return o=a,r=p,U(a,p)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(o,r,1)}}}Symbol.dispose&&(Cn.prototype[Symbol.dispose]=Cn.prototype.free);function ci(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_bb96b2010945f0bc:function(n,t){throw new Error(U(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const o=U(n,t);return mi(o)},__wbindgen_object_drop_ref:function(n){G(n)}}}}const st=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>l.__wbg_testengine_free(e,1));function mi(e){Xe===je.length&&je.push(je.length+1);const n=Xe;return Xe=je[n],je[n]=e,n}function pi(e){e<1028||(je[e]=Xe,Xe=e)}let ze=null;function _(){return(ze===null||ze.buffer.detached===!0||ze.buffer.detached===void 0&&ze.buffer!==l.memory.buffer)&&(ze=new DataView(l.memory.buffer)),ze}function U(e,n){return bi(e>>>0,n)}let Ke=null;function ln(){return(Ke===null||Ke.byteLength===0)&&(Ke=new Uint8Array(l.memory.buffer)),Ke}function ui(e){return je[e]}let je=new Array(1024).fill(void 0);je.push(void 0,null,!0,!1);let Xe=je.length;function gi(e){return e==null}function P(e,n,t){if(t===void 0){const c=en.encode(e),m=n(c.length,1)>>>0;return ln().subarray(m,m+c.length).set(c),S=c.length,m}let o=e.length,r=n(o,1)>>>0;const s=ln();let d=0;for(;d<o;d++){const c=e.charCodeAt(d);if(c>127)break;s[r+d]=c}if(d!==o){d!==0&&(e=e.slice(d)),r=t(r,o,o=d+e.length*3,1)>>>0;const c=ln().subarray(r+d,r+o),m=en.encodeInto(e,c);d+=m.written,r=t(r,o,d,1)>>>0}return S=d,r}function G(e){const n=ui(e);return pi(e),n}let cn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});cn.decode();const hi=2146435072;let Nn=0;function bi(e,n){return Nn+=n,Nn>=hi&&(cn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),cn.decode(),Nn=n),cn.decode(ln().subarray(e,e+n))}const en=new TextEncoder;"encodeInto"in en||(en.encodeInto=function(e,n){const t=en.encode(e);return n.set(t),{read:e.length,written:t.length}});let S=0,l;function yi(e,n){return l=e.exports,ze=null,Ke=null,l}async function wi(e,n){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const o=await e.arrayBuffer();return await WebAssembly.instantiate(o,n)}else{const o=await WebAssembly.instantiate(e,n);return o instanceof WebAssembly.Instance?{instance:o,module:e}:o}function t(o){switch(o){case"basic":case"cors":case"default":return!0}return!1}}async function fi(e){if(l!==void 0)return l;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/web-demo-framework/pr-preview/pr-121/assets/nanobpmn_engine_bg-DRNrIVE8.wasm",import.meta.url));const n=ci();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:o}=await wi(await e,n);return yi(t)}let sn=null;function _i(e){return sn||(sn=fi(void 0).then(()=>{}).catch(n=>{throw sn=null,n})),sn}function ne(e){return JSON.parse(e)}class Mi{constructor(n){F(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return ne(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,o,r){return JSON.parse(this.engine.activateJobs(n,t,o,r))}completeJob(n,t){return ne(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:o,...r}=t??{};return ne(this.engine.completeAgentJob(n,JSON.stringify(o??{}),JSON.stringify(r??{})))}failJob(n,t,o){return ne(this.engine.failJob(n,t,o))}throwError(n,t,o){return ne(this.engine.throwError(n,t,o))}updateRetries(n,t){return ne(this.engine.updateRetries(n,t))}resolveIncident(n){return ne(this.engine.resolveIncident(n))}setVariables(n,t,o){return ne(this.engine.setVariables(n,t||"{}",o))}broadcastSignal(n,t){return ne(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return ne(this.engine.cancelInstance(n))}modify(n,t,o){return ne(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(o??[])))}completeUserTask(n,t){return ne(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,o){return ne(this.engine.assignUserTask(n,t,o))}unassignUserTask(n){return ne(this.engine.unassignUserTask(n))}updateUserTask(n,t){return ne(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,o){return ne(this.engine.correlateMessage(n,t,o||"{}"))}advanceTime(n){return ne(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return ne(this.engine.snapshot())}free(){this.engine.free()}}async function vi(e){return await _i(),new Mi(new Cn)}class Ft extends Error{constructor(t,o){super(t);F(this,"retries");this.name="JobFailure",this.retries=o==null?void 0:o.retries}}function Ni(e,n=[]){if(e.instances.filter(r=>!r.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const o=new Set(n);return e.jobs.some(r=>!o.has(r.jobType))?"unhandledJobs":e.userTasks.some(r=>r.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function xi(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(o=>o.jobType))].filter(o=>!t.has(o)).sort()}async function Ei(e,n,t){let o;try{const r=await n(t);o=JSON.stringify(r??{})}catch(r){const s=r instanceof Ft&&r.retries!==void 0?r.retries:Math.max(0,t.retries-1),d=r instanceof Error?r.message:String(r);e.failJob(t.key,s,d);return}e.completeJob(t.key,o)}async function Ii(e,n,t){let o;try{o=await n(t),JSON.stringify(o)}catch(r){const s=r instanceof Ft&&r.retries!==void 0?r.retries:Math.max(0,t.retries-1),d=r instanceof Error?r.message:String(r);e.failJob(t.key,s,d);return}e.completeAgentJob(t.key,o)}async function ki(e,n,t={}){const o=t.maxJobsPerActivation??10,r=t.lockTimeoutMs??3e4,s=t.worker??"bojtos",d=t.agents??{};for(const b of Object.keys(d))if(b in n)throw new Error(`dispatchRound: job type "${b}" is registered as both a worker and an agent — register it as exactly one`);const c=[];for(const[b,g]of Object.entries(n))for(const y of e.activateJobs(b,o,r,s))c.push({handler:g,job:y});const m=[];for(const[b,g]of Object.entries(d))for(const y of e.activateJobs(b,o,r,s))m.push({handler:g,job:y});for(const{handler:b,job:g}of c)await Ei(e,b,g);for(const{handler:b,job:g}of m)await Ii(e,b,g);const a=e.snapshot(),p=c.length+m.length;if(p>0)return{snapshot:a,handled:p};const u=[...Object.keys(n),...Object.keys(d)];return{snapshot:a,handled:p,reason:Ni(a,u),unhandled:xi(a,u)}}function Ti({bpmn:e}){const n=h.useRef(null),[t,o]=h.useState("loading"),[r,s]=h.useState(null),[d,c]=h.useState([]),[m,a]=h.useState(null),p=h.useRef(e),u=h.useRef(0),b=h.useRef(null),g=h.useRef(new Map),y=h.useCallback((j,k)=>{g.current.set(j,k)},[]),x=h.useCallback(j=>g.current.get(j),[]),M=h.useCallback((j,k)=>{const I=j.deploy(k);return p.current=k,g.current.clear(),c(I.processIds),a(null),s(null),I.processIds},[]);h.useEffect(()=>{let j=!1;return o("loading"),c([]),a(null),s(null),vi().then(k=>{if(j){k.free();return}try{M(k,e)}catch(I){k.free(),s(String(I)),o("error");return}n.current=k,o("ready")}).catch(k=>{j||(s(String(k)),o("error"))}),()=>{var k;j=!0,(k=n.current)==null||k.free(),n.current=null,g.current.clear()}},[e]);const w=h.useCallback(j=>{const k=n.current;if(!k)return null;try{const I=j(k);return a(I),s(null),I}catch(I){return s(String(I)),null}},[]),v=h.useCallback((j,k)=>w(I=>I.createInstance(j,k)),[w]),N=h.useCallback((j,k)=>w(I=>I.completeUserTask(j,k)),[w]),Q=h.useCallback(j=>w(k=>k.advanceTime(j)),[w]),J=h.useCallback((j,k)=>w(I=>I.broadcastSignal(j,k)),[w]);function q(j,k){const[I]=j.activateJobs(k,1,3e4,"manual-control");if(!I)throw new Error(`No waiting job of type "${k}" to resolve.`);return I}const be=h.useCallback((j,k)=>w(I=>{const B=q(I,j);return I.completeJob(B.key,k)}),[w]),Ae=h.useCallback((j,k,I)=>w(B=>{const V=q(B,j);return B.throwError(V.key,k,I)}),[w]),ye=h.useCallback((j,k,I)=>w(B=>B.correlateMessage(j,k,I)),[w]),Ie=h.useCallback(async(j,k)=>{const I=n.current;if(!I)return null;const B=u.current,V=ki(I,j,k);b.current=V;try{const _e=await V;return n.current!==I||u.current!==B?null:(a(_e.snapshot),s(null),_e)}catch(_e){return n.current!==I||u.current!==B||(a(I.snapshot()),s(String(_e))),null}finally{b.current===V&&(b.current=null)}},[]),X=h.useCallback(async()=>{var j;await((j=b.current)==null?void 0:j.catch(()=>{}))},[]),we=h.useCallback(async()=>{await X();const j=n.current;if(j){u.current++;try{j.reset(),M(j,p.current)}catch(k){s(String(k))}}},[M,X]),de=h.useCallback(async j=>{await X();const k=n.current;if(!k)return null;u.current++;try{return k.reset(),M(k,j)}catch(I){return s(String(I)),null}},[M,X]);return{phase:t,error:r,processIds:d,snapshot:m,createInstance:v,stepWorkers:Ie,completeUserTask:N,advanceTime:Q,broadcastSignal:J,completeJobManually:be,throwJobError:Ae,correlateMessage:ye,reset:we,redeploy:de,setRunImage:y,getRunImage:x}}const Di="web-demo-framework:height",ji="web-demo-framework:ready";function Ai(){return{type:ji}}const Si="web-demo-framework:request-height";function Pi(e){return{type:Di,height:Math.ceil(e)}}const dt="embed-height-auto";function Ci(e=document){return Math.max(e.documentElement.offsetHeight,e.body.scrollHeight)}function Li(e){h.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(dt);let t=-1;const o=(d=!1)=>{const c=Ci();!d&&Math.abs(c-t)<2||(t=c,window.parent.postMessage(Pi(c),"*"))},r=d=>{if(d.source!==window.parent)return;const c=d.data;!c||c.type!==Si||o(!0)};window.addEventListener("message",r),o();const s=new ResizeObserver(()=>o());return s.observe(n),()=>{s.disconnect(),window.removeEventListener("message",r),n.classList.remove(dt)}},[e])}function Bi(e){const n=h.useRef(!1);h.useEffect(()=>{!e||n.current||typeof window>"u"||window.parent===window||(n.current=!0,window.parent.postMessage(Ai(),"*"))},[e])}function Ri(e,n){return e.slice(n)}function zi(e,n,t,o){const r=e.snapshot,s="⏸ waiting for a human — complete the task below to continue",d=r.userTasks.some(c=>c.state==="Created");if(e.handled>0){const c=r.activeElementIds.map(t),m=n.length?` via ${n.map(a=>`${t(a.from)} → ${t(a.to)}`).join(", ")}`:"";return r.completedInstances>=1?{kind:"done",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${m} — ✅ process instance completed`}:d?{kind:"human",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${m} — ${s}`}:{kind:"step",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${m} — now at ${c.length?c.join(", "):"—"}`}}switch(e.reason){case"completed":return{kind:"done",text:"✅ process instance completed"};case"userTasks":return{kind:"human",text:s};case"timers":return{kind:"step",text:"⏱ waiting on a timer — advance the clock to continue"};case"messages":return{kind:"step",text:"✉ waiting on a message — correlate it to continue"};case"signals":return{kind:"step",text:"📶 waiting on a signal — broadcast it to continue"};case"incidents":return{kind:"error",text:"A job failed — incident on the diagram"};case"unhandledJobs":{const c=e.unhandled??[];return o&&c.length>0&&c.every(m=>o.has(m))?{kind:"human",text:s}:{kind:"error",text:`⏭ waiting on job type(s) with no worker registered: ${c.join(", ")}`}}case"idle":return{kind:"step",text:"Nothing to step — no instance is running."};default:return{kind:"step",text:e.reason?`Step blocked on an unrecognized reason: ${e.reason}`:"Nothing to step — no instance is running."}}}const Oi="the Scripted or Endpoint brain";async function un(e=Oi){const n=navigator.gpu;if(!n)return`This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick ${e}.`;let t;try{t=await n.requestAdapter()}catch(o){return`WebGPU adapter request failed (${o instanceof Error?o.message:String(o)}). Try ${e} instead.`}return t?null:`This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick ${e} instead.`}const Fi=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function Ut(e){return Ln.get(e)??{}}const Ln=new Map;async function Ui(){if(Ln.size>0)return;const{prebuiltAppConfig:e}=await he(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)Ln.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const wn=Fi.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...Ut(e.id)})),Gt=wn[0].id;async function Gi(){return await Ui(),wn.map(e=>({...e,...Ut(e.id)}))}function Qt(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function Qi(e,n=Qt()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function $i(e){try{const{hasModelInCache:n}=await he(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function gn(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function lt(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class dn{constructor(){F(this,"kind","browser");F(this,"model",null);F(this,"engine",null);F(this,"worker",null);F(this,"generation",0);F(this,"chat",async(n,t=512,o)=>{var s,d;const r=this.engine;if(!r||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const c=await r.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let m="";for await(const a of c){const p=((d=(s=a.choices[0])==null?void 0:s.delta)==null?void 0:d.content)??"";p&&(m+=p,o==null||o(p))}return m}catch(c){const m=c instanceof Error?c.message:String(c);throw gn(m)?(this.teardown(),new Error(`The in-browser model stopped: ${lt()}`)):c}})}async connect(n=Gt,t){var m,a;const o=await un();if(o)throw new Error(o);if(this.engine&&this.model===n)return n;const r=++this.generation,s=p=>{r===this.generation&&(t==null||t({progress:p.progress??0,text:p.text??""}))};this.teardown();let d,c;try{const{CreateWebWorkerMLCEngine:p}=await he(async()=>{const{CreateWebWorkerMLCEngine:u}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:u}},[]);c=new Worker(new URL("/web-demo-framework/pr-preview/pr-121/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),d=await p(c,n,{initProgressCallback:s})}catch(p){if(c==null||c.terminate(),r!==this.generation)throw new Error("cancelled");const u=p instanceof Error?p.message:String(p);if(gn(u))throw new Error(`Couldn't load ${n} in the browser (${u}). ${lt()}`);const b=(a=(m=wn.find(g=>g.id===n))==null?void 0:m.requiredFeatures)==null?void 0:a.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${u}). `+(b?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(r!==this.generation)throw d.unload().catch(()=>{}),c==null||c.terminate(),new Error("cancelled");return this.engine=d,this.worker=c??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const zn="http://localhost:11434/v1",hn=e=>e==="localhost"||e==="127.0.0.1"||e==="::1"||e==="[::1]";function $t(){var e;return hn(((e=globalThis.location)==null?void 0:e.hostname)??"")}function xn(e){try{return hn(new URL(On(e)).hostname)}catch{return!1}}function bn(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(o=>(o=globalThis.location)==null?void 0:o.origin)()??""}){let r;try{r=new URL(On(e)).hostname}catch{return null}return!hn(r)||hn(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function On(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class ct extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class mt{constructor(n=zn,t="",o=""){F(this,"kind","endpoint");F(this,"baseUrl");F(this,"model",null);F(this,"models",[]);F(this,"apiKey");F(this,"requestedModel");F(this,"chat",async(n,t=512,o)=>{var a,p,u;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const r=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!r.ok||!r.body){const b=await r.text().catch(()=>"");throw new Error(`chat/completions HTTP ${r.status} ${r.statusText}${b?` — ${b.slice(0,300)}`:""}`)}const s=r.body.getReader(),d=new TextDecoder;let c="",m="";for(;;){const{value:b,done:g}=await s.read();if(g)break;c+=d.decode(b,{stream:!0});let y;for(;(y=c.indexOf(`
`))>=0;){const x=c.slice(0,y).trim();if(c=c.slice(y+1),!x.startsWith("data:"))continue;const M=x.slice(5).trim();if(M==="[DONE]")continue;let w;try{w=JSON.parse(M)}catch{continue}w.model&&(this.model=w.model);const v=(a=w.choices)==null?void 0:a[0],N=((p=v==null?void 0:v.delta)==null?void 0:p.content)??((u=v==null?void 0:v.message)==null?void 0:u.content)??"";N&&(m+=N,o==null||o(N))}}return m});this.baseUrl=On(n),this.apiKey=t.trim(),this.requestedModel=o.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(o){const r=bn(this.baseUrl);throw new Error(r??`Can't reach ${this.baseUrl} (${o instanceof Error?o.message:String(o)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new ct(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(o=>o.id).filter(o=>!!o),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof ct&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(o=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${o instanceof Error?o.message:String(o)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const o=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${o?` — ${o.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}const pt="gemini-nano";function yn(){const e=globalThis.LanguageModel;return typeof(e==null?void 0:e.create)=="function"&&typeof e.availability=="function"?e:null}function Yi(){return yn()!==null}async function Yt(){const e=yn();if(!e)return"This browser has no built-in AI model. Chrome's Prompt API (Gemini Nano) needs Chrome 138+ on desktop Windows 10/11, macOS 13+, Linux or a Chromebook Plus. Use the Scripted, In-browser (WebGPU) or API endpoint brain instead.";let n;try{n=await e.availability()}catch(t){return`Chrome couldn't report on its built-in model (${t instanceof Error?t.message:String(t)}).`}return n==="unavailable"?"Chrome exposes the built-in AI API here, but Gemini Nano can't run on this device. Chrome requires ~22 GB free on the volume holding your Chrome profile, and either a GPU with more than 4 GB of VRAM or 16 GB of RAM with 4+ CPU cores. Check chrome://on-device-internals for the details.":null}class ut{constructor(){F(this,"kind","chrome");F(this,"model",null);F(this,"warm",null);F(this,"connecting",null);F(this,"chat",async(n,t,o)=>{if(!this.model)throw new Error("ChromeBrain.chat called before connect()");const r=yn();if(!r)throw new Error("Chrome's built-in AI API went away.");const s=n.filter(m=>m.role==="system"),d=n.filter(m=>m.role!=="system"),c=await r.create(s.length?{initialPrompts:s}:void 0);try{const m=c.promptStreaming(d).getReader();let a="";for(;;){const{done:p,value:u}=await m.read();if(p)break;u&&(a+=u,o==null||o(u))}return a}finally{c.destroy()}})}async connect(n){const t=await Yt();if(t)throw new Error(t);const o=yn();this.dispose();const r=new AbortController;this.connecting=r;try{this.warm=await o.create({signal:r.signal,monitor:s=>{s.addEventListener("downloadprogress",d=>{n==null||n({progress:d.loaded,text:"Downloading Gemini Nano"})})}})}catch(s){if(r.signal.aborted)throw new Error("cancelled");const d=s instanceof Error?s.message:String(s);throw new Error(`Chrome couldn't start its built-in model (${d}). The first run downloads Gemini Nano and must be triggered by a click — press Connect again, and check chrome://on-device-internals if it keeps failing.`)}finally{this.connecting=null}return this.model=pt,pt}cancelConnect(){var n;(n=this.connecting)==null||n.abort()}dispose(){var n,t;(n=this.connecting)==null||n.abort(),this.connecting=null,(t=this.warm)==null||t.destroy(),this.warm=null,this.model=null}}const Vi=[{id:"onnx-community/Florence-2-base-ft",label:"Florence-2 base",downloadLabel:"~0.4 GB"},{id:"onnx-community/Florence-2-large-ft",label:"Florence-2 large (higher quality)",downloadLabel:"~1.6 GB"}],Vt=Vi.map(e=>({...e,label:`${e.label} (${e.downloadLabel})`})),qt=Vt[0].id,qi="<OCR>",gt="UNKNOWN (scripted brain — connect the in-browser model to read a photo)";function Hi(e,n){if(e)return typeof e=="function"?e(n):e[n]}class Zi{constructor(n){F(this,"kind","scripted-vision");F(this,"model",null);F(this,"read",async(n,t,o)=>{const r=typeof n=="string"?Hi(this.lookup,n)??gt:gt;return o==null||o(r),r});this.lookup=n}dispose(){}}function Ji(e){return new Zi(e)}class ht{constructor(){F(this,"kind","browser-vision");F(this,"model",null);F(this,"modelHandle",null);F(this,"processor",null);F(this,"loadImage",null);F(this,"generation",0);F(this,"read",async(n,t,o)=>{const r=this.modelHandle,s=this.processor,d=this.loadImage;if(!r||!s||!d||!this.model)throw new Error("BrowserVisionBrain.read called before connect()");const c=t&&t.startsWith("<")?t:qi,m=await d(n),a=s.construct_prompts(c),p=await s(m,a),u=await r.generate({...p,max_new_tokens:512,num_beams:1,do_sample:!1}),b=s.batch_decode(u,{skip_special_tokens:!1})[0],g=s.post_process_generation(b,c,m.size),y=Wi(g,c);return o==null||o(y),y})}async connect(n=qt,t){var c,m;const o=await un("the scripted-vision fallback");if(o)throw new Error(o);if(this.modelHandle&&this.model===n)return n;const r=++this.generation,s=a=>{r===this.generation&&(t==null||t({progress:(a.progress??0)/100,text:a.file?`${a.status??"loading"} ${a.file}`:a.status??""}))};this.teardown();let d;try{const{Florence2ForConditionalGeneration:a,AutoProcessor:p,load_image:u}=await he(async()=>{const{Florence2ForConditionalGeneration:y,AutoProcessor:x,load_image:M}=await import("./transformers.web-D4adwrl9.js");return{Florence2ForConditionalGeneration:y,AutoProcessor:x,load_image:M}},[]),b=await a.from_pretrained(n,{dtype:"fp32",device:"webgpu",progress_callback:s}),g=await p.from_pretrained(n);d={model:b,processor:g,loadImage:u}}catch(a){if(r!==this.generation)throw new Error("cancelled");const p=a instanceof Error?a.message:String(a);throw new Error(`Couldn't load ${n} in the browser (${p}). Try the smaller Florence-2 base model, check your connection, or use the scripted-vision fallback.`)}if(r!==this.generation)throw Promise.resolve((m=(c=d.model).dispose)==null?void 0:m.call(c)).catch(()=>{}),new Error("cancelled");return this.modelHandle=d.model,this.processor=d.processor,this.loadImage=d.loadImage,this.model=n,n}teardown(){var t;const n=this.modelHandle;this.modelHandle=null,this.processor=null,this.loadImage=null,this.model=null,Promise.resolve((t=n==null?void 0:n.dispose)==null?void 0:t.call(n)).catch(()=>{})}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}function Wi(e,n){const t=e[n];if(typeof t=="string")return t.trim();if(t&&typeof t=="object"){const o=t.labels;return Array.isArray(o)?o.join(" ").trim():JSON.stringify(t)}return""}function Ki(){const[e,n]=h.useState("scripted"),[t,o]=h.useState("idle"),[r,s]=h.useState(null),[d,c]=h.useState(null),[m,a]=h.useState(null),[p,u]=h.useState(null),[b,g]=h.useState(null),[y,x]=h.useState(null),[M,w]=h.useState(null),[v,N]=h.useState(Gt),[Q,J]=h.useState($t()?zn:""),[q,be]=h.useState(""),[Ae,ye]=h.useState([]),[Ie,X]=h.useState("idle"),[we,de]=h.useState(null),[j,k]=h.useState(""),[I,B]=h.useState(null),V=h.useRef(null),[_e,Fe]=h.useState("scripted-vision"),[fn,Me]=h.useState("idle"),[Ve,ie]=h.useState(null),[Ce,tn]=h.useState(qt),[_n,ve]=h.useState(null),[Le,Se]=h.useState(null),[Mn,vn]=h.useState(null),[qe,ee]=h.useState(null),Y=h.useRef(null),He=h.useRef(!1),Ue=h.useRef(0),ke=h.useCallback(D=>async(...H)=>{try{return await D.chat(...H)}catch(C){const W=C instanceof Error?C.message:String(C);throw D instanceof dn&&gn(W)&&(B(null),c(null),o("error"),s(W)),C}},[]),Be=h.useCallback(D=>async(...H)=>{try{return await D.read(...H)}catch(C){const W=C instanceof Error?C.message:String(C);throw gn(W)&&(ee(null),ve(null),Me("error"),ie(W)),C}},[]);h.useEffect(()=>{un().then(D=>{g(D),u(D===null)}),Yt().then(w),un("the scripted-vision fallback").then(D=>{vn(D),He.current||(He.current=!0,Fe(D===null?"browser-vision":"scripted-vision"))})},[]),h.useEffect(()=>{let D=!1;return x(null),$i(v).then(H=>{D||x(H)}),()=>{D=!0}},[v]),h.useEffect(()=>()=>{var D;return(D=V.current)==null?void 0:D.dispose()},[]),h.useEffect(()=>()=>{var D;return(D=Y.current)==null?void 0:D.dispose()},[]);const Ze=h.useCallback(D=>{n(D),o("idle"),s(null),c(null),a(null),B(null)},[]),O=h.useCallback(D=>{var H,C;He.current=!0,(H=Y.current)==null||H.cancelConnect(),(C=Y.current)==null||C.dispose(),Y.current=null,Fe(D),Me("idle"),ie(null),ve(null),Se(null),ee(null)},[]),pe=h.useCallback(()=>{var D;(D=V.current)==null||D.dispose(),V.current=null,B(null),c(null)},[]),Pe=h.useCallback(()=>{const D=V.current;(D instanceof dn||D instanceof ut)&&D.cancelConnect(),pe(),o("idle"),a(null),s(null)},[pe]),Te=h.useCallback(async()=>{const D=++Ue.current,H=()=>D!==Ue.current;if(!Q.trim()){ye([]),be(""),X("idle"),de(null);return}const C=bn(Q);if(C){ye([]),be(""),X("error"),de(C);return}X("loading"),de(null);const W=new mt(Q,j);try{const xe=await W.listModels();if(H())return;ye(xe),X("ready"),be(Re=>Re&&xe.includes(Re)?Re:xe[0]??"")}catch(xe){if(H())return;ye([]),be(""),X("error"),de(xe instanceof Error?xe.message:String(xe))}finally{W.dispose()}},[Q,j]),on=h.useCallback(async()=>{var D,H;if(e==="scripted"){B(null),o("ready");return}if(e==="endpoint"){const C=bn(Q);if(C){pe(),s(C),o("error");return}}o("connecting"),s(null),a(null);try{if(e==="browser"){const C=V.current instanceof dn?V.current:new dn;V.current&&V.current!==C&&V.current.dispose(),V.current=C;const W=await C.connect(v,a);c(W),B(()=>ke(C)),x(!0)}else if(e==="chrome"){(D=V.current)==null||D.dispose();const C=new ut;V.current=C;const W=await C.connect(a);w(null),c(W),B(()=>ke(C))}else{(H=V.current)==null||H.dispose();const C=new mt(Q,j,q);V.current=C;const W=await C.connect();c(W),B(()=>ke(C))}o("ready")}catch(C){const W=C instanceof Error?C.message:String(C);if(W==="cancelled")return;s(W),o("error"),B(null)}finally{a(null)}},[e,v,Q,q,j,pe,ke]),re=h.useCallback(()=>{var D;(D=Y.current)==null||D.dispose(),Y.current=null,ee(null),ve(null)},[]),Ge=h.useCallback(()=>{var D;(D=Y.current)==null||D.cancelConnect(),re(),Me("idle"),Se(null),ie(null)},[re]),Qe=h.useCallback(async()=>{if(_e==="scripted-vision"){re(),Me("ready"),ie(null);return}Me("connecting"),ie(null),Se(null);try{const D=Y.current instanceof ht?Y.current:new ht;Y.current&&Y.current!==D&&Y.current.dispose(),Y.current=D;const H=await D.connect(Ce,Se);ve(H),ee(()=>Be(D)),Me("ready")}catch(D){const H=D instanceof Error?D.message:String(D);if(H==="cancelled")return;ie(H),Me("error"),ee(null),ve(null)}finally{Se(null)}},[_e,Ce,re,Be]);return{kind:e,setKind:Ze,status:t,error:r,modelInUse:d,progress:m,webgpu:p,webgpuReason:b,browserModelCached:y,chromeAiReason:M,cancelConnect:Pe,browserModel:v,setBrowserModel:N,endpointUrl:Q,setEndpointUrl:J,endpointModel:q,setEndpointModel:be,endpointModels:Ae,endpointModelsStatus:Ie,endpointModelsError:we,listEndpointModels:Te,apiKey:j,setApiKey:k,connect:on,chat:I,visionKind:_e,setVisionKind:O,visionStatus:fn,visionError:Ve,visionModel:Ce,setVisionModel:tn,visionModelInUse:_n,visionProgress:Le,visionWebgpuReason:Mn,connectVision:Qe,cancelVisionConnect:Ge,vision:qe}}const Bn="#s=",Xi=["scripted","browser","chrome","endpoint"];function er(e){return typeof e=="string"&&Xi.includes(e)}function nr(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,o={};return er(t.brain)&&(o.brain=t.brain),o}}catch{}return{}}function Ht(e=location.hash){if(!e.startsWith(Bn))return{};let n;try{n=decodeURIComponent(e.slice(Bn.length))}catch{return{}}return nr(n)}function tr(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":Bn+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function or(e){const n={...Ht(),...e},t=tr(n),o=new URL(location.href);o.hash=t,history.replaceState(history.state,"",o)}const bt=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"chrome",label:"Chrome built-in",hint:"Gemini Nano, built into Chrome. Chrome owns the weights — no download from this page, no API key."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server: a local Ollama, or a remote provider with an API key."}],ir=[{mode:"ollama",label:"Ollama (local)"},{mode:"remote",label:"Provider URL + key"}],yt=[{kind:"scripted-vision",label:"Scripted",hint:"No model. The example's known plate is returned — deterministic and offline."},{kind:"browser-vision",label:"In-browser (WebGPU)",hint:"Reads the photo with a vision model on your GPU. First run downloads weights."}];function rr({brain:e,showText:n=!0,showVision:t=!1}){return i.jsxs("div",{className:"brain",children:[n&&i.jsx(ar,{brain:e}),n&&t&&i.jsx("hr",{className:"brain-divider"}),t&&i.jsx(sr,{brain:e})]})}function ar({brain:e}){const n=bt.find(M=>M.kind===e.kind),t=bt.filter(M=>M.kind!=="chrome"||Yi()),o=bn(e.endpointUrl),r=$t(),s=r&&xn(e.endpointUrl)?"ollama":"remote",d=M=>{xn(M)!==xn(e.endpointUrl)&&e.setApiKey(""),e.setEndpointUrl(M)},c=M=>{M!==s&&d(M==="ollama"?zn:"")},[m,a]=h.useState(wn);h.useEffect(()=>{Gi().then(a)},[]);const{kind:p,endpointUrl:u,apiKey:b,listEndpointModels:g}=e;h.useEffect(()=>{if(p!=="endpoint"||o)return;const M=setTimeout(()=>void g(),400);return()=>clearTimeout(M)},[p,u,b,o,g]);const y=m.find(M=>M.id===e.browserModel),x=y?Qi(y,Qt()):null;return i.jsxs("div",{className:"brain-section",children:[i.jsxs("div",{className:"brain-modes",children:[i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Agent brain",children:t.map(M=>i.jsx(K,{size:"sm",variant:e.kind===M.kind?"default":"secondary","aria-pressed":e.kind===M.kind,onClick:()=>e.setKind(M.kind),children:M.label},M.kind))}),i.jsxs("div",{className:"brain-status",children:[e.status==="ready"&&e.kind!=="scripted"&&i.jsx(te,{variant:"success",className:"brain-status-badge",children:e.modelInUse??"connected"}),e.status==="connecting"&&i.jsx(te,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.status==="error"&&i.jsx(te,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Ye,{htmlFor:"browser-model",children:"Model"}),i.jsxs(Tn,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[i.jsx(Dn,{id:"browser-model",children:i.jsx(jn,{})}),i.jsx(An,{children:m.map(M=>i.jsx(Sn,{value:M.id,children:M.label},M.id))})]}),e.browserModelCached===!0&&i.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&i.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"No WebGPU in this browser"}),i.jsx(me,{children:e.webgpuReason})]}),e.webgpu!==!1&&x&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"This model may not fit in GPU memory"}),i.jsx(me,{children:x})]})]}),e.kind==="chrome"&&i.jsxs("div",{className:"brain-config",children:[i.jsx("p",{className:"field-hint",children:"Nothing to configure: Chrome downloads and manages Gemini Nano itself, so the first Connect may fetch it once and later visits reuse it. Prompts never leave your machine. It's a very small model — expect it to follow the tool-calling format less reliably than an endpoint model."}),e.chromeAiReason&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Chrome's built-in model isn't available here"}),i.jsx(me,{children:e.chromeAiReason})]})]}),e.kind==="endpoint"&&i.jsxs("div",{className:"brain-config",children:[r?i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Endpoint provider",children:ir.map(M=>i.jsx(K,{size:"sm",variant:s===M.mode?"default":"secondary","aria-pressed":s===M.mode,disabled:e.status==="connecting",onClick:()=>c(M.mode),children:M.label},M.mode))}):i.jsxs("p",{className:"field-hint",children:["This page isn't served from ",i.jsx("code",{children:"localhost"}),", so a local Ollama isn't offered — it only accepts requests from a page on localhost. Point this at a remote OpenAI-compatible provider, or open this page at ",i.jsx("code",{children:"http://localhost"})," to use Ollama."]}),i.jsxs("div",{className:"field",children:[i.jsx(Ye,{htmlFor:"endpoint-url",children:"Endpoint"}),i.jsx(Xn,{id:"endpoint-url",value:e.endpointUrl,placeholder:"https://api.openai.com/v1",onChange:M=>d(M.target.value),disabled:e.status==="connecting"}),s==="ollama"?i.jsxs("p",{className:"field-hint",children:["Ollama allows ",i.jsx("code",{children:"localhost"})," origins out of the box; set"," ",i.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}):i.jsxs("p",{className:"field-hint",children:["The base URL of any OpenAI-compatible provider — it must serve"," ",i.jsx("code",{children:"/models"})," and ",i.jsx("code",{children:"/chat/completions"}),". Calls go straight from this browser to that host."]}),o&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"A local server won't work from this URL"}),i.jsx(me,{children:o})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(Ye,{htmlFor:"endpoint-model",children:"Model"}),i.jsxs("div",{className:"endpoint-model-row",children:[i.jsxs(Tn,{value:e.endpointModel,onValueChange:e.setEndpointModel,disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||e.endpointModels.length===0,children:[i.jsx(Dn,{id:"endpoint-model",className:"endpoint-model-select",children:i.jsx(jn,{placeholder:e.endpointModelsStatus==="loading"?"Loading models…":e.endpointModelsStatus==="idle"?"Enter an endpoint above":e.endpointModelsStatus==="error"?"No models — check the endpoint":e.endpointModels.length===0?"No models served":"Select a model"})}),i.jsx(An,{children:e.endpointModels.map(M=>i.jsx(Sn,{value:M,children:M},M))})]}),i.jsx(K,{size:"sm",variant:"secondary",onClick:()=>void e.listEndpointModels(),disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||e.endpointUrl.trim()===""||o!==null,children:e.endpointModelsStatus==="loading"?"Refreshing…":"Refresh"})]}),i.jsxs("p",{className:"field-hint",children:["Fetched from the endpoint's ",i.jsx("code",{children:"/models"}),". Tiny models (e.g. SmolLM2) usually can't follow the tool-calling format — prefer ",i.jsx("code",{children:"llama3.2:3b"}),", ",i.jsx("code",{children:"qwen2.5"})," or larger."]}),e.endpointModelsStatus==="error"&&!o&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Couldn't list models"}),i.jsx(me,{children:e.endpointModelsError})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(Ye,{htmlFor:"endpoint-key",children:s==="ollama"?"API key (optional)":"API key"}),i.jsx(Xn,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:M=>e.setApiKey(M.target.value),disabled:e.status==="connecting"}),i.jsx("p",{className:"field-hint",children:s==="ollama"?"A local Ollama ignores this — leave it blank.":"Sent as a bearer token to the endpoint above, from this browser only. It's held in memory for this tab, never stored or logged, and cleared if the endpoint moves between a local and a remote host."})]})]}),e.kind!=="scripted"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(K,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting"||e.kind==="chrome"&&e.chromeAiReason!==null||e.kind==="endpoint"&&(e.endpointUrl.trim()===""||e.endpointModel===""||e.endpointModelsStatus==="loading"||o!==null),children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&(e.kind==="browser"||e.kind==="chrome")&&i.jsx(K,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.progress&&i.jsx("div",{className:"brain-progress",role:"progressbar","aria-valuenow":Math.round(e.progress.progress*100),"aria-valuemin":0,"aria-valuemax":100,children:i.jsx("div",{className:"brain-progress-bar",style:{width:`${Math.round(e.progress.progress*100)}%`}})}),e.error&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Couldn't connect"}),i.jsx(me,{children:e.error})]})]})}function sr({brain:e}){const n=yt.find(t=>t.kind===e.visionKind);return i.jsxs("div",{className:"brain-section brain-vision",children:[i.jsx(Ye,{children:"Vision (reads the image)"}),i.jsxs("div",{className:"brain-modes",children:[i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Vision brain",children:yt.map(t=>i.jsx(K,{size:"sm",variant:e.visionKind===t.kind?"default":"secondary","aria-pressed":e.visionKind===t.kind,onClick:()=>e.setVisionKind(t.kind),children:t.label},t.kind))}),i.jsxs("div",{className:"brain-status",children:[e.visionStatus==="ready"&&e.visionKind==="browser-vision"&&i.jsx(te,{variant:"success",className:"brain-status-badge",children:e.visionModelInUse??"connected"}),e.visionStatus==="connecting"&&i.jsx(te,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.visionStatus==="error"&&i.jsx(te,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.visionKind==="scripted-vision"&&e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"No WebGPU in this browser"}),i.jsx(me,{children:e.visionWebgpuReason})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(Ye,{htmlFor:"vision-model",children:"Model"}),i.jsxs(Tn,{value:e.visionModel,onValueChange:e.setVisionModel,disabled:e.visionStatus==="connecting",children:[i.jsx(Dn,{id:"vision-model",children:i.jsx(jn,{})}),i.jsx(An,{children:Vt.map(t=>i.jsx(Sn,{value:t.id,children:t.label},t.id))})]}),i.jsx("p",{className:"field-hint",children:"Connecting downloads the weights once (size shown above), then caches them — every token is read on your GPU, no server."})]}),e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"No WebGPU in this browser"}),i.jsx(me,{children:e.visionWebgpuReason})]})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(K,{size:"sm",onClick:()=>void e.connectVision(),disabled:e.visionStatus==="connecting",children:e.visionStatus==="ready"?"Reconnect":"Connect"}),e.visionStatus==="connecting"&&i.jsx(K,{size:"sm",variant:"secondary",onClick:e.cancelVisionConnect,children:"Cancel"}),e.visionProgress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.visionProgress.progress*100),"% —"," ",e.visionProgress.text]})]}),e.visionError&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Couldn't connect the vision brain"}),i.jsx(me,{children:e.visionError})]})]})}function dr({imageInput:e,value:n,onSelect:t,disabled:o=!1}){const[r,s]=h.useState(null),[d,c]=h.useState(!1),m=h.useRef(null),a=h.useId(),p=h.useId(),u=h.useCallback(y=>{s(URL.createObjectURL(y)),t({imageName:y.name,pixels:y})},[t]);h.useEffect(()=>{if(r)return()=>URL.revokeObjectURL(r)},[r]);const b=h.useCallback(y=>{const x=y==null?void 0:y[0];x&&x.type.startsWith("image/")&&u(x)},[u]),g=(n==null?void 0:n.imageId)!=null?e.seedImages.find(y=>y.id===n.imageId):void 0;return i.jsxs("div",{className:"image-input",children:[e.label&&i.jsx("p",{className:"field-hint",children:e.label}),i.jsx("p",{className:"image-input-label",id:a,children:"Seed photos"}),i.jsx("div",{className:"image-gallery",role:"group","aria-labelledby":a,children:e.seedImages.map(y=>{const x=(n==null?void 0:n.imageId)===y.id;return i.jsxs("button",{type:"button","aria-pressed":x,className:`image-thumb${x?" image-thumb--selected":""}`,disabled:o,title:y.label??y.id,onClick:()=>{s(null),m.current&&(m.current.value=""),t({imageId:y.id,pixels:y.file})},children:[i.jsx("img",{src:y.thumb??y.file,alt:y.label??y.id}),y.label&&i.jsx("span",{children:y.label})]},y.id)})}),i.jsx("label",{className:"image-input-label",htmlFor:p,children:"Or upload your own photo"}),i.jsxs("div",{className:`image-drop${d?" image-drop--over":""}`,onDragOver:y=>{y.preventDefault(),o||c(!0)},onDragLeave:()=>c(!1),onDrop:y=>{y.preventDefault(),c(!1),o||b(y.dataTransfer.files)},children:[i.jsx("input",{ref:m,id:p,type:"file",accept:"image/*",disabled:o,onChange:y=>b(y.target.files)}),i.jsx("p",{className:"field-hint",children:"Drag a photo here, or pick one. Uploading a photo the model has never seen is the proof this runs for real — nothing leaves your browser."})]}),(r||g)&&i.jsxs("div",{className:"image-preview",children:[i.jsx("img",{src:r??(g==null?void 0:g.file),alt:r?(n==null?void 0:n.imageName)??"uploaded photo":(g==null?void 0:g.label)??(g==null?void 0:g.id)??"selected photo"}),i.jsx("span",{className:"field-hint",children:r?`Uploaded: ${(n==null?void 0:n.imageName)??"your photo"}`:`Selected: ${(g==null?void 0:g.label)??(g==null?void 0:g.id)}`}),i.jsx("button",{type:"button",className:"image-clear-btn",disabled:o,onClick:()=>{s(null),m.current&&(m.current.value=""),t(null)},children:"Clear"})]})]})}function Zt(e){return typeof e=="object"&&e!==null}function vl(e){const n=new Set,t=o=>{Zt(o)&&(typeof o.key=="string"&&n.add(o.key),Array.isArray(o.components)&&o.components.forEach(t))};return t(e),n}function lr(e){const n={},t=o=>{Zt(o)&&(typeof o.key=="string"&&"defaultValue"in o&&(n[o.key]=o.defaultValue??""),Array.isArray(o.components)&&o.components.forEach(t))};return t(e),n}const cr="wdf:section:v2:";function Jt(e){return cr+e}function wt(e){try{const n=window.localStorage.getItem(Jt(e));return n==="1"?!0:n==="0"?!1:void 0}catch{return}}function mr(e,n){try{window.localStorage.setItem(Jt(e),n?"1":"0")}catch{}}function Fn(e,n=!0){const[t,o]=h.useState(()=>wt(e)??n);h.useEffect(()=>{o(wt(e)??n)},[e,n]);const r=h.useCallback(s=>{o(s),mr(e,s)},[e]);return[t,r]}function Oe({sectionId:e,title:n,description:t,defaultOpen:o=!0,className:r,children:s,...d}){const[c,m]=Fn(e,o);return i.jsx(so,{className:["panel",r].filter(Boolean).join(" "),"data-tour":d["data-tour"],children:i.jsxs(lo,{open:c,onOpenChange:m,children:[i.jsxs(co,{className:"panel-trigger",children:[i.jsxs("span",{className:"panel-trigger-text",children:[i.jsx("span",{className:"panel-title",children:n}),t!=null&&i.jsx("span",{className:"panel-desc",children:t})]}),i.jsx(mo,{className:"panel-chevron","aria-hidden":!0})]}),i.jsx(po,{children:i.jsx(uo,{children:s})})]})})}function pr(e){return e.entries!==void 0}function ur(e){const n=[];let t=null;for(const o of e)o.turn!==void 0?t&&t.turn===o.turn?t.entries.push(o):(t={turn:o.turn,entries:[o]},n.push(t)):(t=null,n.push(o));return n}function ft(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function gr({activation:e,result:n,labelFor:t}){const o=e.elementId??"";return i.jsxs("div",{className:"timeline-tool",children:[i.jsxs("div",{className:"timeline-tool-head",children:[i.jsx(te,{variant:"info",children:"tool"}),i.jsx("strong",{children:t(o)||o}),i.jsx("code",{children:o})]}),e.args!==void 0&&Object.keys(e.args).length>0&&i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"arguments"}),i.jsx("code",{children:ft(e.args)})]}),i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"returned"}),i.jsx("code",{children:n?ft(n.result):"— waiting for the job to complete —"})]})]})}function hr({group:e,labelFor:n}){const t=e.entries.find(a=>a.kind==="llm"),o=e.entries.filter(a=>a.kind==="agent"&&a.elementId),r=e.entries.filter(a=>a.kind==="vars"&&a.elementId),s=e.entries.filter(a=>a.kind==="agent"&&!a.elementId),d=e.entries.filter(a=>a.kind==="error"),c=new Set(o.map(a=>a.elementId)),m=e.entries.filter(a=>a.kind==="tool"||a.kind==="vars"&&a.elementId&&!c.has(a.elementId)).sort((a,p)=>a.id-p.id);return i.jsxs("div",{className:"timeline-turn",children:[i.jsxs("div",{className:"timeline-turn-head",children:[i.jsxs(te,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&i.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&i.jsx("blockquote",{className:"timeline-reply",children:t.text}),s.map(a=>i.jsx("div",{className:"timeline-note",children:a.text},a.id)),o.map(a=>i.jsx(gr,{activation:a,result:r.find(p=>p.elementId===a.elementId),labelFor:n},a.id)),m.map(a=>i.jsxs("div",{className:`log-line log-${a.kind}`,children:[a.pending?"⏳ ":"",a.text]},a.id)),d.map(a=>i.jsxs("div",{className:"timeline-error",children:["⚠ ",a.text]},a.id))]})}function br({log:e,elementStats:n=[],incidents:t=[],labelFor:o=d=>d,variables:r,hasAgent:s=!1}){const d=h.useMemo(()=>ur(e),[e]),[c,m]=h.useState(!1),[a,p]=Fn("engine-view",!1),u=h.useRef(null);h.useEffect(()=>{const g=u.current;g&&(g.scrollTop=g.scrollHeight)},[d]);const b=()=>{var x;const g={log:e.map(({id:M,...w})=>w),elementStats:n,incidents:t},y=JSON.stringify(g,null,2);(x=navigator.clipboard)!=null&&x.writeText&&navigator.clipboard.writeText(y).then(()=>{m(!0),setTimeout(()=>m(!1),1500)}).catch(()=>{})};return i.jsxs(Oe,{sectionId:"activity",className:"grow activity-card",title:s?"Agent activity":"Activity",description:s?"Agent turns, model replies, and tool calls — read top to bottom as a story.":"Every step the engine took — read top to bottom as a story.",children:[i.jsx("div",{className:"timeline-toolbar",children:i.jsx(K,{variant:"secondary",size:"sm",onClick:b,children:c?"Copied!":"Copy run as JSON"})}),i.jsx("div",{className:"timeline",ref:u,children:d.length===0?i.jsx("div",{className:"log-empty",children:"Press Run or Step to start."}):d.map(g=>pr(g)?i.jsx(hr,{group:g,labelFor:o},`turn-${g.turn}-${g.entries[0].id}`):i.jsxs("div",{className:`log-line log-${g.kind}`,children:[g.pending?"⏳ ":"",g.text]},g.id))}),r,(n.length>0||t.length>0)&&i.jsxs("details",{className:"engine-view",open:a,onToggle:g=>p(g.currentTarget.open),children:[i.jsxs("summary",{children:["Element completion",t.length>0&&` · ${t.length} incident${t.length===1?"":"s"}`]}),i.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&i.jsxs("div",{className:"timeline-stats",children:[i.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),i.jsx("ul",{children:n.filter(g=>g.completed>0||(g.active??0)>0).map(g=>i.jsxs("li",{children:[i.jsx("code",{children:o(g.elementId)||g.elementId})," ","completed ",g.completed,g.active?`, ${g.active} active`:""]},g.elementId))})]}),t.length>0&&i.jsxs("div",{className:"timeline-incidents",children:[i.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),i.jsx("ul",{children:t.map((g,y)=>i.jsxs("li",{children:[i.jsx("code",{children:o(g.elementId)||g.elementId})," —"," ",g.reason]},`${g.elementId}-${y}`))})]})]})]})]})}const Ee={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function _t(e){return`[data-tour="${e}"]`}function yr(e=location.search){return new URLSearchParams(e).get("tour")}function wr(e){return"anchor"in e?_t(e.anchor):`${_t(Ee.diagram)} [data-element-id="${fr(e.elementId)}"]`}function fr(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function _r(e){return e.map(n=>({element:wr(n.target),popover:{title:n.title,description:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}))}async function Mr(e){const[{driver:n}]=await Promise.all([he(()=>import("./driver.js-bj_ppY-Q.js"),[]),he(()=>Promise.resolve({}),__vite__mapDeps([0]))]),t=n({steps:_r(e),showProgress:!0,allowClose:!0,skipMissingElement:!0});return t.drive(),{isActive:()=>t.isActive(),destroy:()=>t.destroy()}}const vr=300;function Nr(e){const[n,t]=h.useState(!1),o=h.useRef(null),r=h.useRef(null),s=h.useRef(0),d=h.useCallback(()=>{r.current!==null&&(clearInterval(r.current),r.current=null)},[]),c=h.useCallback(()=>{var a;s.current+=1,d(),(a=o.current)==null||a.destroy(),o.current=null,t(!1)},[d]),m=h.useCallback(()=>{if(!e||e.steps.length===0||o.current)return;const a=s.current+=1;Mr(e.steps).then(p=>{if(a!==s.current||!p.isActive()){p.destroy();return}o.current=p,t(!0);const u=setInterval(()=>{if(o.current!==p){clearInterval(u);return}p.isActive()||(clearInterval(u),r.current===u&&(r.current=null),o.current=null,t(!1))},vr);r.current=u})},[e,d]);return h.useEffect(()=>c,[c]),{active:n,start:m,stop:c}}function xr(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Er({enabled:e,ready:n,targetRef:t,start:o}){const r=h.useRef(!1),[s,d]=h.useState(!1),c=h.useRef(o);h.useEffect(()=>{c.current=o},[o]),h.useEffect(()=>{if(!e||r.current)return;const m=t.current;if(!m||typeof IntersectionObserver>"u"){d(!0);return}const a=new IntersectionObserver(p=>{p.some(u=>u.isIntersecting)&&(d(!0),a.disconnect())},{threshold:.01});return a.observe(m),()=>a.disconnect()},[e,t]),h.useEffect(()=>{!e||r.current||!n||!s||xr()||(r.current=!0,c.current())},[e,n,s])}const De=650,En="__agent__",Mt="__model__",vt="__template__:";function Ir(e){return e.kind.toLowerCase().includes("boundary")}const kr=h.lazy(async()=>{await Promise.all([he(()=>Promise.resolve({}),__vite__mapDeps([1])),he(()=>Promise.resolve({}),__vite__mapDeps([2])),he(()=>Promise.resolve({}),__vite__mapDeps([3]))]);const{RuntimeDiagram:e}=await he(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-DTnJz5cT.js");return{RuntimeDiagram:n}},__vite__mapDeps([4,5,6]));return{default:e}}),In=h.lazy(()=>he(()=>import("./MonacoEditor-CecVU5Ar.js").then(e=>e.M),__vite__mapDeps([7,5,8]))),Tr=h.lazy(()=>he(()=>import("./vendor-modeler-BzScQTrW.js"),__vite__mapDeps([9,5,6,10,11,12,13,1,2,3]))),Nt=h.lazy(async()=>{const{FormRenderer:e}=await he(async()=>{const{FormRenderer:n}=await import("./FormRenderer-BvRnEADr.js");return{FormRenderer:n}},__vite__mapDeps([14,5,12,10,11,15]));return{default:e}});function mn(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function Dr(e){const n=mn(e).replace(/\s+/g," ");return n.length>78?`${n.slice(0,78)}…`:n}function jr({example:e,compact:n=!1,autostart:t=!1,initialBrainKind:o,initialTourId:r}){var Yn,Vn,qn,Hn,Zn,Jn,Wn,Kn;const[s,d]=h.useState(e.bpmn),c=h.useRef(null),m=Ki(),[a,p]=h.useState(null);h.useEffect(()=>{o&&o!==m.kind&&m.setKind(o)},[]),h.useEffect(()=>{or({brain:m.kind})},[m.kind]);const[u,b]=h.useState(()=>Object.fromEntries(e.handlers.map(f=>[f.elementId,f.source]))),[g,y]=h.useState(e.scriptedAgent??""),[x,M]=h.useState(()=>nn(e.templates)),w=h.useMemo(()=>ei(e,u,s,x),[e,u,s,x]),v=w.model,N=Ti({bpmn:w.resolvedBpmn});Bi(N.phase==="ready");const Q=Nr(e.tour);h.useEffect(()=>{var f;r&&((f=e.tour)==null?void 0:f.id)===r&&Q.start()},[]);const J=v.startFormId?((Yn=e.forms)==null?void 0:Yn[v.startFormId])??null:null,[q,be]=h.useState(()=>({...e.seed,...J?lr(J):{}})),[Ae,ye]=h.useState(v.agent?En:((Vn=e.handlers[0])==null?void 0:Vn.elementId)??""),Ie=h.useMemo(()=>{const f=(e.scenarios??[]).findIndex(E=>Object.entries(E.variables).every(([T,L])=>JSON.stringify(q[T])===JSON.stringify(L)));return f===-1?null:f},[e.scenarios,q]),[X,we]=Fn(n?"start-compact":"start",n?!1:!!J),[de,j]=h.useState(!1),[k,I]=h.useState(!1),[B,V]=h.useState(!1),[_e,Fe]=h.useState(null),[fn,Me]=h.useState([]),[Ve,ie]=h.useState({}),Ce=h.useMemo(()=>({...e.seed,...q,...Lo(e.imageInput?a:null)}),[e.seed,e.imageInput,q,a]),[tn,_n]=h.useState(null),ve=h.useRef(null),[Le,Se]=h.useState({}),[Mn,vn]=h.useState(!1),qe=h.useRef(null),ee=h.useRef(!1),Y=h.useRef(0),He=h.useRef(0),Ue=h.useRef({current:void 0}),ke=h.useRef({}),Be=h.useRef({}),Ze=h.useMemo(()=>{const f=new Map;for(const E of v.processes){for(const T of E.tasks)f.set(T.elementId,T.label);for(const T of E.agents){f.set(T.elementId,T.label);for(const L of T.tools)f.set(L.elementId,L.label)}for(const T of E.userTasks)f.set(T.elementId,T.label)}return E=>f.get(E)??E},[v]),O=h.useCallback(f=>{Me(E=>{if(f.key){const T=E.findIndex(L=>L.key===f.key);if(T>=0){const L=[...E];return L[T]={...L[T],...f},L}}return[...E,{...f,id:He.current++}].slice(-80)})},[]),pe=h.useMemo(()=>{var f;return((f=N.snapshot)==null?void 0:f.userTasks.find(E=>E.state==="Created"))??null},[N.snapshot]),Pe=h.useMemo(()=>{const f=v.processes.flatMap(T=>T.tasks),E=new Map;for(const T of e.handlers){if(!T.manualControl)continue;const L=f.find(A=>A.elementId===T.elementId);L&&E.set(L.jobType,{...T.manualControl,elementId:T.elementId})}return E},[e.handlers,v]),Te=h.useMemo(()=>{if(!N.snapshot)return null;for(const f of N.snapshot.jobs){const E=Pe.get(f.jobType);if(E&&f.state==="Created")return{job:f,control:E}}return null},[N.snapshot,Pe]),on=h.useMemo(()=>{if(!v.agent||!N.snapshot)return[];const f=new Map(N.snapshot.elementStats.map(E=>[E.elementId,E.completed]));return v.agent.tools.filter(E=>(f.get(E.elementId)??0)===0)},[v.agent,N.snapshot]),re=pe?v.userTasks.find(f=>f.elementId===pe.elementId):void 0,Ge=re!=null&&re.formId?((qn=e.forms)==null?void 0:qn[re.formId])??null:null,Qe=h.useCallback(async(f,E,T,L)=>{var ue,ae,se;let A=T,fe=0;for(;Y.current===L&&A&&A.completedInstances<1&&fe++<80;){const Z=await N.stepWorkers(f,{agents:E});if(Y.current!==L)return A;A=(Z==null?void 0:Z.snapshot)??A;const $=(ue=A.instances[0])==null?void 0:ue.variables;if($&&ie({...$}),A.userTasks.some(R=>R.state==="Created")){O({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!Z){O({kind:"error",text:"▶ run stopped — no dispatch round was returned"});break}if(Z.handled===0){const R=A.messageSubscriptions.find(z=>!Ir(z));if(Z.reason==="messages"&&R){if(O({kind:"step",text:`⏳ parked on a message catch event — waiting for "${R.messageName}"`,elementId:R.elementId}),await new Promise(oe=>setTimeout(oe,De)),Y.current!==L)return A;O({kind:"vars",text:`📨 correlating message "${R.messageName}" (key: ${R.correlationKey})`,elementId:R.elementId});const z=N.correlateMessage(R.messageName,R.correlationKey,"{}");if(z){A=z;const oe=(ae=A.instances[0])==null?void 0:ae.variables;oe&&ie({...oe}),await new Promise(ge=>setTimeout(ge,De));continue}O({kind:"error",text:`▶ run stopped — correlating "${R.messageName}" (key: ${R.correlationKey}) failed`,elementId:R.elementId})}if(Z.reason==="signals"&&A.signalSubscriptions.length>0){const z=A.signalSubscriptions[0],oe=A.signalSubscriptions.length;if(O({kind:"step",text:`⏳ parked on ${oe} open signal subscription${oe===1?"":"s"} — waiting for "${z.signalName}"`,elementId:z.elementId}),await new Promise($e=>setTimeout($e,De)),Y.current!==L)return A;const ge=N.broadcastSignal(z.signalName,"{}");if(ge){A=ge,O({kind:"vars",text:`📡 broadcasting signal "${z.signalName}" — every waiting subscription unblocks`,elementId:z.elementId});const $e=(se=A.instances[0])==null?void 0:se.variables;$e&&ie({...$e}),await new Promise(oo=>setTimeout(oo,De));continue}O({kind:"error",text:`▶ run stopped — broadcasting signal "${z.signalName}" failed`,elementId:z.elementId})}if(Z.reason==="timers"){const z=A.timers.reduce((oe,ge)=>Math.min(oe,ge.dueInMs),1/0);if(Number.isFinite(z)){if(O({kind:"step",text:`⏳ parked on a timer — ${(Math.max(z,0)/1e3).toFixed(1)}s left on the clock`}),await new Promise(ge=>setTimeout(ge,De)),Y.current!==L)return A;const oe=N.advanceTime(Math.max(z,0)+1);if(oe){A=oe,O({kind:"step",text:"🕐 the clock advanced — timer fired"}),await new Promise(ge=>setTimeout(ge,De));continue}}}break}await new Promise(R=>setTimeout(R,De))}return Y.current!==L||(A&&A.completedInstances>=1?O({kind:"done",text:"✅ process instance completed"}):A&&A.incidentElementIds.length>0&&O({kind:"error",text:"A job failed — incident on the diagram"})),A},[N,O]),D=h.useCallback(async f=>{var A,fe,ue,ae;if(!Te||ee.current)return;const{job:E,control:T}=Te,L=++Y.current;ee.current=!0,I(!0);try{let se,Z;if(f==="complete")se=N.completeJobManually(E.jobType,"{}"),Z="  ↳ completed normally";else if(T.action.kind==="timer"){const $=((fe=(A=N.snapshot)==null?void 0:A.timers[0])==null?void 0:fe.dueInMs)??0;se=N.advanceTime(Math.max($,0)+1),Z="  ↳ advanced the clock — timer fired"}else if(T.action.kind==="message"){const{messageName:$}=T.action,R=(ue=N.snapshot)==null?void 0:ue.messageSubscriptions.find(z=>z.messageName===$);if(!R){O({kind:"error",text:`  ↳ no open subscription for "${$}" to correlate against`,elementId:E.elementId});return}se=N.correlateMessage($,R.correlationKey,"{}"),Z=`  ↳ published "${$}" (key: ${R.correlationKey})`}else{const{errorCode:$,message:R}=T.action;se=N.throwJobError(E.jobType,$,R),Z=`  ↳ threw BPMN error ${$}: ${R}`}if(se){O({kind:"vars",text:Z,elementId:E.elementId});const $=(ae=se.instances[0])==null?void 0:ae.variables;$&&ie({...$}),await new Promise(R=>setTimeout(R,De)),await Qe(ke.current,Be.current,se,L)}else O({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:E.elementId})}finally{Y.current===L&&(ee.current=!1,I(!1))}},[Te,N,O,Qe]),H=h.useCallback(async()=>{var Z;let f=null;try{v.agent&&g.trim()&&(f=Qo(g))}catch($){return Fe($ instanceof Error?$.message:String($)),null}Ue.current={current:void 0};let E;if(e.imageInput){const $=m.vision;E={read:$??Ji(e.scriptedVision).read,live:!!$,resolve:z=>N.getRunImage(z)}}const T=Vo(v,w.handlers,O,Ue.current,E);for(const $ of Pe.keys())delete T[$];const L={};if(v.agents.length>0)if(m.kind!=="scripted"&&m.chat){const R=new Map;for(const z of v.agents)R.set(z.jobType,[...R.get(z.jobType)??[],z]);for(const[z,oe]of R)L[z]=li(oe,m.chat,O,{turnRef:Ue.current,requiredTools:e.requiredTools})}else f&&v.agent&&(L[v.agent.jobType]=async R=>{const z=await f(R),oe=(z.activateElements??[]).map($e=>$e.elementId).join(", "),ge=v.agents.length>1?` (${R.elementId})`:"";return O({kind:"agent",text:z.completionConditionFulfilled?`🤖 scripted agent${ge}: done`:`🤖 scripted agent${ge}: calling ${oe||"(nothing)"}`}),z});Me([]),Se({});const A=Ce;ie(A),ke.current=T,Be.current=L;const fe=await N.redeploy(s),ue=(fe==null?void 0:fe[0])??v.processId;O({kind:"start",text:`Starting "${ue}" — ${v.agent?m.kind==="scripted"||!m.chat?"scripted brain":`live brain (${m.modelInUse??m.kind})`:"no agent in this model"}`});let ae;if(v.startMessage){const{messageName:$,correlationKey:R}=v.startMessage,z=Po(R,A);O({kind:"step",text:`📨 publishing "${$}" (key: ${z}) — a message start event has no other way in`,elementId:v.startMessage.elementId}),ae=N.correlateMessage($,z,JSON.stringify(A))}else ae=N.createInstance(ue,JSON.stringify(A));const se=(Z=ae==null?void 0:ae.instances[0])==null?void 0:Z.key;return e.imageInput&&a&&se&&N.setRunImage(se,a),{workers:T,agents:L,snap:ae}},[N,e,w,s,g,q,a,Ce,v,m,O,Pe]),C=!!N.snapshot&&N.snapshot.completedInstances<1,W=!C&&!!J&&tn!==!0,xe=!C&&!!J&&tn===!1,Re=X||de;h.useEffect(()=>{n&&xe&&j(!0)},[n,xe]);const Gn=f=>{we(f),f||j(!1)},Qn=h.useCallback(async()=>{if(N.phase!=="ready"||ee.current||B||w.hasErrors)return;ee.current=!0,I(!0);const f=++Y.current;try{let E=ke.current,T=Be.current,L=N.snapshot;if(!C){if(ve.current&&!ve.current.validate())return;Fe(null);const A=await H();if(!A)return;E=A.workers,T=A.agents,L=A.snap,await new Promise(fe=>setTimeout(fe,De))}await Qe(E,T,L,f)}finally{Y.current===f&&(ee.current=!1,I(!1))}},[N,B,w.hasErrors,C,H,Qe]),$n=N.phase==="ready"&&!k&&!B&&!w.hasErrors&&!W;Er({enabled:t,ready:$n,targetRef:c,start:()=>void Qn()});const Kt=h.useCallback(async()=>{var E;if(N.phase!=="ready"||ee.current||B||w.hasErrors)return;ee.current=!0,V(!0);const f=++Y.current;try{let T=ke.current,L=Be.current,A=N.snapshot;if(!C){if(ve.current&&!ve.current.validate())return;Fe(null);const Z=await H();if(!Z)return;T=Z.workers,L=Z.agents,A=Z.snap}if(!A||A.completedInstances>=1)return;const fe=A.takenSequenceFlows.length,ue=await N.stepWorkers(T,{agents:L});if(!ue){O({kind:"error",text:"⏭ step failed — no dispatch round was returned"});return}const ae=(E=ue.snapshot.instances[0])==null?void 0:E.variables;ae&&ie({...ae});const se=Ri(ue.snapshot.takenSequenceFlows,fe);O(zi(ue,se,Ze,Pe))}finally{Y.current===f&&(ee.current=!1,V(!1))}},[N,B,w.hasErrors,C,H,O,Ze,Pe]),Xt=h.useCallback(async()=>{ee.current=!1,Y.current++,I(!1),V(!1),ee.current=!0;try{await N.reset()}finally{ee.current=!1}Me([]),ie({})},[N]),eo=h.useCallback(()=>{var T;if(!pe||qe.current&&!qe.current.validate())return;const f=N.completeUserTask(pe.key,JSON.stringify(Le));O({kind:"human",text:`👤 ${mn(Le)}`});const E=(T=f==null?void 0:f.instances[0])==null?void 0:T.variables;ie(L=>({...L,...Le,...E??{}})),f&&f.completedInstances>=1&&O({kind:"done",text:"✅ process instance completed"})},[pe,Le,N,O]),no=h.useMemo(()=>{var f,E;return N.phase==="loading"?i.jsx(te,{variant:"neutral",children:"Booting engine…"}):N.phase==="error"?i.jsx(te,{variant:"danger",children:"Engine error"}):k?i.jsx(te,{variant:"info",children:"Running…"}):B?i.jsx(te,{variant:"info",children:"Stepping…"}):(((f=N.snapshot)==null?void 0:f.incidentElementIds.length)??0)>0?i.jsx(te,{variant:"danger",children:"Incident"}):pe?i.jsx(te,{variant:"warning",children:"Waiting for a human"}):(((E=N.snapshot)==null?void 0:E.completedInstances)??0)>=1?i.jsx(te,{variant:"success",children:"Completed"}):N.snapshot?i.jsx(te,{variant:"warning",children:"Paused"}):i.jsx(te,{variant:"neutral",children:"Ready"})},[N.phase,N.snapshot,k,B,pe]),to=h.useMemo(()=>e.blurb.split(/\n\s*\n/).map(f=>f.trim()).filter(Boolean),[e.blurb]);return i.jsxs("div",{className:"runner",ref:c,children:[n?i.jsx("h1",{className:"visually-hidden",children:e.title}):i.jsxs("section",{className:"intro",children:[i.jsx("h1",{children:e.title}),to.map(f=>i.jsx("p",{children:f},f))]}),e.imageInput&&i.jsx(dr,{imageInput:e.imageInput,value:a,onSelect:p,disabled:k}),i.jsxs("div",{className:"scenario",children:[i.jsx("span",{className:"scenario-label",id:"scenario-label",children:e.scenariosLabel??"Example input"}),e.scenarios&&i.jsx("div",{className:"scenario-toggle",role:"group","aria-labelledby":"scenario-label",children:e.scenarios.map((f,E)=>i.jsx(K,{size:"sm",variant:E===Ie?"default":"secondary","aria-pressed":E===Ie,disabled:k,onClick:()=>be(T=>({...T,...f.variables})),children:f.label},f.label))}),i.jsxs("button",{type:"button",className:"scenario-input-button",onClick:()=>Gn(!Re),"aria-expanded":Re,"aria-controls":"start-input-editor",title:"Edit the starting payload",children:[i.jsx("span",{className:"scenario-edit-icon","aria-hidden":!0,children:"✎"})," ","input: ",i.jsx("code",{children:Dr(q)})]}),W&&i.jsx("span",{className:"scenario-hint",children:"Fill in the input to enable Run"})]}),i.jsxs("div",{className:"inline-input-editor",id:"start-input-editor",hidden:!Re,children:[i.jsxs("div",{className:"inline-input-editor-head",children:[i.jsxs("div",{children:[i.jsx("div",{className:"inline-input-editor-title",children:v.startFormId?"Start form":"Start payload"}),i.jsx("div",{className:"inline-input-editor-copy",children:v.startFormId?`Rendered from the model's start form "${v.startFormId}".`:"The variables the instance starts with."})]}),i.jsx(K,{size:"sm",variant:"secondary",onClick:()=>Gn(!1),children:"Done"})]}),J?i.jsx(h.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(Nt,{ref:ve,schema:J,values:q,onChange:(f,E)=>be(T=>({...T,[f]:E})),disabled:k,onValidityChange:_n})}):i.jsx("pre",{className:"vars",children:mn(q,2)})]}),!n&&(v.agent||e.imageInput)&&i.jsx(Oe,{sectionId:"brain",className:"brain-card","data-tour":Ee.brainPanel,title:"Agent brain",description:v.agent?`What drives “${v.agent.label}”. The model recommends; the process governs.`:"What reads the image. The model recommends; the process governs.",children:i.jsx(rr,{brain:m,showText:!!v.agent,showVision:!!e.imageInput})}),i.jsxs("div",{className:"controls",children:[i.jsx(K,{"data-tour":Ee.runButton,onClick:()=>void Qn(),disabled:!$n,children:"▶ Run"}),i.jsx(K,{variant:"secondary",onClick:()=>void Kt(),disabled:N.phase!=="ready"||k||B||w.hasErrors||W||(((Hn=N.snapshot)==null?void 0:Hn.completedInstances)??0)>=1,children:"⏭ Step"}),i.jsx(K,{variant:"secondary",onClick:()=>void Xt(),disabled:N.phase!=="ready"||B,children:"↺ Reset"}),e.tour&&i.jsx(K,{variant:"secondary",onClick:Q.start,disabled:Q.active,children:Q.active?"Touring…":`🧭 ${e.tour.label}`}),no]}),N.phase==="error"&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Engine error"}),i.jsx(me,{children:N.error})]}),_e&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Code didn't compile"}),i.jsx(me,{children:_e})]}),w.hasErrors&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"Run is disabled — the diagram has unresolved references"}),i.jsx(me,{children:i.jsx("ul",{className:"diagnostics",children:w.diagnostics.filter(f=>f.severity==="error").map((f,E)=>i.jsx("li",{children:f.message},E))})})]}),!w.hasErrors&&w.diagnostics.length>0&&i.jsxs(le,{children:[i.jsx(ce,{children:"Heads up"}),i.jsx(me,{children:i.jsx("ul",{className:"diagnostics",children:w.diagnostics.map((f,E)=>i.jsx("li",{children:f.message},E))})})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"col",children:[i.jsx(Oe,{sectionId:"process","data-tour":Ee.diagram,title:"Process",description:`${v.processName} — live token (green), incidents (red).`,children:i.jsx(h.Suspense,{fallback:i.jsx("div",{className:"diagram-fallback",children:N.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:i.jsx(kr,{xml:w.resolvedBpmn,activeIds:((Zn=N.snapshot)==null?void 0:Zn.activeElementIds)??[],incidentIds:((Jn=N.snapshot)==null?void 0:Jn.incidentElementIds)??[],className:"diagram"})})}),pe&&i.jsxs(Oe,{sectionId:"human-task",title:(re==null?void 0:re.label)??"Human task",description:Ge?`Rendered from the model's form "${re==null?void 0:re.formId}".`:"This task has no linked form — complete it with no variables.",children:[on.length>0&&i.jsxs(le,{variant:"destructive",children:[i.jsx(ce,{children:"The agent didn't finish its checks"}),i.jsxs(me,{children:["It completed without running"," ",on.map(f=>f.label||f.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),Ge&&i.jsx(h.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(Nt,{ref:qe,schema:Ge,values:Le,onChange:(f,E)=>Se(T=>({...T,[f]:E})),context:Ve,onValidityChange:vn})}),i.jsx(K,{onClick:eo,disabled:!!Ge&&!Mn,children:"Complete task"})]}),Te&&i.jsx(Oe,{sectionId:"manual-job",title:Te.control.label,description:"This job is held here on purpose — pick how it resolves.",children:i.jsxs("div",{className:"controls",children:[i.jsx(K,{onClick:()=>void D("complete"),disabled:k||B,children:Te.control.completeLabel??"✅ Complete normally"}),i.jsx(K,{variant:"secondary",onClick:()=>void D("action"),disabled:k||B,children:Te.control.action.label})]})})]}),i.jsx("div",{className:"col",children:i.jsx(br,{log:fn,elementStats:(Wn=N.snapshot)==null?void 0:Wn.elementStats,incidents:(Kn=N.snapshot)==null?void 0:Kn.incidents,labelFor:Ze,hasAgent:!!v.agent,variables:i.jsxs("div",{className:"vars-block","data-tour":Ee.variablesPanel,children:[i.jsx("div",{className:"vars-head",children:"Instance variables"}),i.jsx("pre",{className:"vars",children:mn(Object.keys(Ve).length>0?Ve:Ce,2)})]})})})]}),!n&&i.jsxs("div",{className:"runner-secondary",children:[i.jsx(Oe,{sectionId:"code",className:"editors","data-tour":Ee.codePanel,defaultOpen:!1,title:"Code",description:"One handler per BPMN element, plus a model tab holding the editable diagram — select an element there to edit its properties. Return variables to merge, or throw to fail the job.",children:i.jsx(h.Suspense,{fallback:i.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:i.jsxs(go,{value:Ae,onValueChange:ye,children:[i.jsxs(ho,{children:[i.jsx(rn,{value:Mt,children:"model"}),v.agent&&i.jsx(rn,{value:En,children:"agent (scripted)"}),e.handlers.map(f=>{var E;return i.jsx(rn,{value:f.elementId,children:((E=v.tasks.find(T=>T.elementId===f.elementId))==null?void 0:E.label)??f.elementId},f.elementId)}),Object.keys(x).map(f=>i.jsx(rn,{value:vt+f,children:f},f))]}),i.jsxs(an,{value:Mt,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:"Model"}),i.jsx("code",{children:"click an element to edit its properties on the right — Run re-reads whatever you leave here"}),i.jsx(K,{variant:"secondary",size:"sm",onClick:()=>d(e.bpmn),disabled:s===e.bpmn,children:"Revert to original"})]}),i.jsx(Tr,{value:s,onChange:d})]}),v.agent&&i.jsxs(an,{value:En,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:v.agent.label}),i.jsx("code",{children:m.kind==="scripted"||!m.chat?"in use":"unused — a live brain is connected"})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(In,{height:"360px",defaultLanguage:"javascript",value:g,onChange:f=>y(f??""),options:kn})})]}),e.handlers.map(f=>{var E;return i.jsxs(an,{value:f.elementId,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:((E=v.tasks.find(T=>T.elementId===f.elementId))==null?void 0:E.label)??f.elementId}),i.jsx("code",{children:f.standsInFor??f.elementId})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(In,{height:"360px",defaultLanguage:"javascript",value:u[f.elementId],onChange:T=>b(L=>({...L,[f.elementId]:T??""})),options:kn})})]},f.elementId)}),Object.keys(x).map(f=>i.jsxs(an,{value:vt+f,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:f}),i.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+f+"}}"]})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(In,{height:"360px",defaultLanguage:"markdown",value:x[f],onChange:E=>M(T=>nn(T,{[f]:E??""})),options:kn})})]},f))]})})}),v.agent&&i.jsx(Oe,{sectionId:"tools",defaultOpen:!1,title:"Tools, as the model sees them",description:i.jsxs(i.Fragment,{children:["Read from the diagram — element name, documentation, and every",i.jsx("code",{children:" fromAi(…)"})," argument."]}),children:i.jsx("ul",{className:"tool-list",children:v.agent.tools.map(f=>i.jsxs("li",{children:[i.jsx("code",{children:f.elementId}),i.jsxs("span",{children:[" — ",f.documentation||f.label]}),f.args.length>0&&i.jsx("ul",{children:f.args.map(E=>i.jsxs("li",{children:[i.jsxs("code",{children:[E.name,": ",E.type]})," ","— ",E.description]},E.name))})]},f.elementId))})})]})]})}const kn={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},Ar=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Sr=`async (job, { sleep }) => {
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
}`,Pr=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above; this body
  // does not run either. Unlike Activity_guarded, this task has no boundary
  // event: firing its error action has nothing to catch it, so it becomes an
  // incident instead of a handled alternate path. Completing it normally
  // completes the job with {} — no trace line, no shipped/tracking variables
  // — and the token reaches "Order shipped".
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Cr={id:"learn-error-boundary",title:"Error boundary event",group:"learn-bpmn",blurb:["A boundary event attached to a task catches something that happens while the task is running and reroutes the token — here, a thrown BPMN error.",'Hit Run and the process stops at "Charge payment (guarded)" with a card under the diagram offering two buttons: press "Simulate: card declined" and watch the attached boundary event catch the error, skipping straight to "Handled — order cancelled".','Then Reset, complete that first job normally, and decline the second one on "Ship items (unguarded)" — this time it becomes an incident, because that task has no boundary event and the engine has nothing to reroute the token with.',`That's exactly what breaks if you forget the boundary event (or give it the wrong errorRef): a failure that should be a modelled alternate path becomes a stuck instance a human has to resolve by hand. Complete both jobs normally instead to see the unattended happy path all the way to "Order shipped".`].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/boundary-events/",bpmn:Ar,seed:{},handlers:[{elementId:"Activity_guarded",standsInFor:"job worker — charge-payment",source:Sr,manualControl:{label:"Charge payment (guarded)",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_unguarded",standsInFor:"job worker — ship-items",source:Pr,manualControl:{label:"Ship items (unguarded)",completeLabel:"✅ Ship it",action:{kind:"error",errorCode:"CARRIER_REJECTED",message:"The carrier rejected the shipment — nothing catches this.",label:"❌ Simulate: carrier rejected (becomes an incident)"}}}]},Lr=Object.freeze(Object.defineProperty({__proto__:null,default:Cr},Symbol.toStringTag,{value:"Module"})),Br=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Rr=`async (job, { num, trace, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const orderTotal = num("orderTotal", 40);

  await sleep(300);

  // This is the variable the gateway's conditional sequence flow reads —
  // whatever this handler decides is what actually steers the token.
  const route = orderTotal >= 100 ? "express" : "standard";
  trace(\`order total $\${orderTotal} -> route: \${route}\`);

  // Whatever you return is merged onto the process instance.
  return { route };
}`,zr=`async (job, { trace, sleep }) => {
  trace("expedited courier picks up the order");
  await sleep(400);

  return { shipped: true, method: "express" };
}`,Or=`async (job, { trace, sleep }) => {
  trace("order queued for standard courier pickup");
  await sleep(400);

  return { shipped: true, method: "standard" };
}`,Fr={id:"learn-exclusive-gateway",title:"Exclusive gateway",group:"learn-bpmn",blurb:["An exclusive gateway is the fork in the road: exactly one of its outgoing sequence flows is taken, chosen by evaluating each flow's FEEL condition in declaration order, first match wins. A default flow (drawn with a slash through its start, not a diamond marker) has no condition and is the fallback taken when every conditional flow evaluates false — that's what makes an exclusive gateway safe to deploy without an explicit case for every value.",`Run this and watch 'Check order total' decide a route variable, then watch the gateway send the token down 'Express ship' when the order is large enough, or 'Standard ship' otherwise (the default flow). Try both from the Start panel on the right: it holds a "Small order" and a "Large order" button that swap the payload for you.`,"To see the conditions themselves, open the model tab in the Code panel and click either arrow leaving the gateway — the FEEL is under Condition. Get one wrong (or misspell the variable name) and the flow you meant to take is silently skipped in favour of whichever one does evaluate true, or the default if none do — no error, just the wrong branch."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/gateways/gateways/#exclusive-gateway",bpmn:Br,seed:{orderTotal:40},scenarios:[{label:"Small order — standard ship (default flow)",variables:{orderTotal:40}},{label:"Large order — express ship (conditional flow)",variables:{orderTotal:150}}],handlers:[{elementId:"Activity_check_order",standsInFor:"job worker — check-order-total",source:Rr},{elementId:"Activity_express_ship",standsInFor:"job worker — express-ship",source:zr},{elementId:"Activity_standard_ship",standsInFor:"job worker — standard-ship",source:Or}]},Ur=Object.freeze(Object.defineProperty({__proto__:null,default:Fr},Symbol.toStringTag,{value:"Module"})),Gr=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Qr=`async (job, { text, trace }) => {
  const orderId = text("orderId", "unknown-order");

  trace("shipment confirmed for " + orderId + " — recording it");

  return { shipmentRecorded: true };
}`,$r={id:"learn-message-correlation",title:"Message catch event + correlation key",group:"learn-bpmn",blurb:[`A message intermediate catch event pauses the token until a message with a matching name and correlation key is published — the BPMN analogue of "wait for this specific order's shipment to be confirmed", not just "wait for any shipment-confirmed message".`,"Run this and watch the token park on the catch event; there's no external broker in the browser, so the page correlates the message itself once the wait is reached, echoing back the exact correlationKey (`=orderId`) the subscription resolved to — the Activity panel logs the wait and the correlation as separate lines — then the token resumes into Record confirmation and on to the end event.",'To see where that key comes from: in the Code panel, open the model tab, click "Wait for shipment confirmed", and expand Message in the properties panel on the right. Subscription correlation key holds `orderId` (the `=` beside the box marks it as a FEEL expression), and Name holds `shipment-confirmed` — those two together are what a publisher has to match. Edit them freely; because this page publishes the key the subscription itself resolved, the run stays self-consistent either way.','In a real deployment, where a separate system does the publishing, pointing that expression at a variable the instance never sets leaves the catch event waiting forever, and omitting zeebe:subscription altogether is rejected at deploy time with "has no zeebe:subscription correlationKey" — docs/engine-coverage.md records both.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/message-events/",bpmn:Gr,seed:{orderId:"ORD-42"},handlers:[{elementId:"Activity_record",standsInFor:"job worker — record-confirmation",source:Qr}]},Yr=Object.freeze(Object.defineProperty({__proto__:null,default:$r},Symbol.toStringTag,{value:"Module"})),Vr=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,qr=`async (job, { text, sleep, trace }) => {
  // Each parallel instance gets its own 'item' from the input collection.
  const item = text("item", "widget");

  trace("processing " + item);
  await sleep(400);

  // Whatever you return is merged onto this instance's scope, then collected
  // into the process-level 'results' array via outputElement/outputCollection.
  return { result: item.toUpperCase() + "-DONE" };
}`,Hr={id:"learn-multi-instance-parallel",title:"Parallel multi-instance",group:"learn-bpmn",blurb:["A multi-instance activity runs its task once per element of a collection, spawning that many job instances of the same element in parallel, and only lets the token move on once every one of them completes.",`Run this and watch three 'Process item' jobs activate together for apple, banana, cherry, and complete (in any order) before the process reaches its end event. Nothing about the diagram says "three" — that comes from the collection, so use the buttons in the Start panel on the right to swap between one, three, and six items and hit Run again; the Activity panel logs one 'Process item' line per element, so the fan-out is right there to count.`,'The property tying the two together is in the Code panel: open the model tab, click "Process item", and expand Multi-instance in the properties panel on the right — Input collection holds `items`, the FEEL expression naming the variable to fan out over. Drop it entirely and the activity silently degenerates to a single ordinary instance, with no error to tell you it happened. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/multi-instance/",bpmn:Vr,seed:{items:["apple","banana","cherry"]},scenarios:[{label:"One item — a single instance",variables:{items:["apple"]}},{label:"Three items — fans out to three",variables:{items:["apple","banana","cherry"]}},{label:"Six items — fans out to six",variables:{items:["apple","banana","cherry","damson","elderberry","fig"]}}],handlers:[{elementId:"Activity_process",standsInFor:"job worker — process-item",source:qr}]},Zr=Object.freeze(Object.defineProperty({__proto__:null,default:Hr},Symbol.toStringTag,{value:"Module"})),Jr=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Wr=`async (job, { text, sleep, trace }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "widget");

  trace("packing " + item);
  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { packed: true };
}`,Kr=`async (job, { sleep, trace }) => {
  trace("handing over to the courier");
  await sleep(400);

  return { dispatched: true, tracking: "SVC" + Math.floor(Math.random() * 1e9) };
}`,Xr={id:"learn-service-task",title:"Service task + sequence flow",group:"learn-bpmn",blurb:["A service task is a unit of work a worker (not a human) performs; a sequence flow is the arrow that hands the token from one to the next once its task completes.","Run this and watch each task activate, run its handler, and complete in order — Prepare package, then Dispatch courier — before the process reaches its end event.",`The link between the two halves is the job type: in the Code panel, open the model tab, click "Prepare package", and expand Task definition in the properties panel on the right — Job type is the name a worker has to subscribe to in order to be handed this task's work.`,"(This page wires its own handlers up from whatever the model declares, so renaming it here keeps working; on a real cluster the worker is a separate process started with a job type of its own, and a mismatch means nobody ever activates the job, so the run stalls forever.)"].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/service-tasks/",bpmn:Jr,seed:{item:"camunda-t-shirt"},handlers:[{elementId:"Activity_prepare",standsInFor:"job worker — prepare-package",source:Wr},{elementId:"Activity_dispatch",standsInFor:"job worker — dispatch-courier",source:Kr}]},ea=Object.freeze(Object.defineProperty({__proto__:null,default:Xr},Symbol.toStringTag,{value:"Module"})),na=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ta=`async (job, { sleep, trace }) => {
  trace("all-clear received — resuming operations");
  await sleep(400);

  return { resumed: true };
}`,oa=`async (job, { sleep, trace }) => {
  trace("same all-clear — reopening the floor");
  await sleep(400);

  return { floorReopened: true };
}`,ia={id:"learn-signal-broadcast",title:"Signal intermediate catch event + broadcast",group:"learn-bpmn",blurb:["A signal intermediate catch event parks the token until someone broadcasts a signal by name. Unlike a message, a signal isn't correlated to one waiting instance — broadcasting it unblocks every open subscription for that name at once.",`That's why this model forks: both "Ops waits for all-clear" and "Floor waits for all-clear" park on the same signal, and one broadcast releases the pair together, so 'Resume operations' and 'Reopen the floor' both run before the join lets the token reach the end event. Run it and watch both branches light up off a single broadcast — the Activity panel says "parked on 2 open signal subscriptions" before the one 📡 line that releases them both. A message could not do that, because a correlation key targets exactly one waiting subscription.`,"To see the name being matched: in the Code panel, open the model tab, click either catch event, and expand Signal in the properties panel on the right — Name holds `all-clear`. Each catch event owns its own signal definition, so editing the name there changes only that branch: do it on one of them and hit Run, and the panel now reports two broadcasts instead of one, because the branches no longer share a name and each needs its own. The count of broadcasts is exactly the count of distinct signal names being waited on."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/signal-events/signal-event/",bpmn:na,seed:{},handlers:[{elementId:"Activity_resume",standsInFor:"job worker — resume-operations",source:ta},{elementId:"Activity_reopen",standsInFor:"job worker — reopen-floor",source:oa}]},ra=Object.freeze(Object.defineProperty({__proto__:null,default:ia},Symbol.toStringTag,{value:"Module"})),aa=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,sa=`async (job, { sleep, trace }) => {
  trace("the timer fired — sending the reminder now");
  await sleep(400);

  return { reminderSent: true };
}`,da={id:"learn-timer-catch-event",title:"Timer intermediate catch event",group:"learn-bpmn",blurb:["A timer catch event parks the token until a point in time — here, a fixed duration after the token arrives.","Run this and read the Activity panel: the token parks on the timer with nothing else happening ('parked on a timer — 3.0s left on the clock'), then the clock is fast-forwarded to the due time ('the clock advanced — timer fired') and the token resumes on its own: 'Send the reminder' activates, runs, and the process completes. Nothing needs to poll or push it forward; the engine itself wakes the instance when the timer's due time passes. (This page fast-forwards a virtual clock so the 3-second wait doesn't cost you 3 real seconds — a live deployment waits the actual PT3S.)",'To change the wait: in the Code panel, open the model tab, click "Wait 3 seconds", and expand Timer in the properties panel on the right — Type is Duration and Value holds the ISO-8601 duration, so PT30S or PT5M works the same way. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/timer-events/timer-event-type/",bpmn:aa,seed:{},handlers:[{elementId:"Activity_after_timer",standsInFor:"job worker — send-reminder",source:sa}]},la=Object.freeze(Object.defineProperty({__proto__:null,default:da},Symbol.toStringTag,{value:"Module"})),ca=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ma="Camunda Cloud",pa="8.10.0",ua={name:"Camunda Web Modeler",version:"9b5d5ef"},ga=19,ha="learn-user-task-form-review",ba=[{text:`# Review request

A request is waiting for you. Decide whether to approve or reject it, then submit.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Requester:** {{requester}}

**Details:** {{details}}`,type:"text",layout:{row:"Row_details",columns:null},id:"Field_ReviewDetails"},{label:"Decision",values:[{label:"Approve",value:"approved"},{label:"Reject",value:"rejected"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_ReviewDecision",key:"decision",validate:{required:!0}},{label:"Comments",description:"Optional note recorded alongside your decision.",type:"textarea",layout:{row:"Row_comments",columns:null},id:"Field_ReviewComments",key:"comments"}],ya="default",wa={executionPlatform:ma,executionPlatformVersion:pa,exporter:ua,schemaVersion:ga,id:ha,components:ba,type:ya},fa={id:"learn-user-task-form",title:"User task + form",group:"learn-bpmn",blurb:["A user task is a step a human completes, not a worker — the token parks at the task until someone submits its form, then moves on.","Run this and watch the process reach 'Review request' and wait; fill in the decision form that appears in its own card under the diagram and press Complete task to see the token resume and the process reach its end event.",'What binds that form to the task is one property: in the Code panel, open the model tab, click "Review request", and expand Form in the properties panel on the right — Form ID names the form the runner looks up and renders. A user task with no form binding still deploys and still parks the token, but the runner has nothing to render for it, so it offers a bare Complete button that finishes the task with no variables. Revert to original puts the binding back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/user-tasks/",bpmn:ca,forms:{"learn-user-task-form-review":wa},seed:{requester:"Priya Shah",details:"Approve access to the shared design-review workspace."},handlers:[]},_a=Object.freeze(Object.defineProperty({__proto__:null,default:fa},Symbol.toStringTag,{value:"Module"})),Ma=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,va=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,Na={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:Ee.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:Ee.variablesPanel}}]},xa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ea="Camunda Cloud",Ia="8.10.0",ka={name:"Camunda Web Modeler",version:"9b5d5ef"},Ta=19,Da="seed-export-shipment-ready",ja=[{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Choose a ready-made shipment to get started, or select Custom to write your own below.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Shipment notes",description:"Optional. When filled in, used instead of the scenario above. The agent reads these notes to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],Aa="default",Sa={executionPlatform:Ea,executionPlatformVersion:Ia,exporter:ka,schemaVersion:Ta,id:Da,components:ja,type:Aa},Pa="Camunda Cloud",Ca="8.10.0",La={name:"Camunda Web Modeler",version:"9b5d5ef"},Ba=19,Ra="seed-export-compliance-review",za=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],Oa="default",Fa={executionPlatform:Pa,executionPlatformVersion:Ca,exporter:La,schemaVersion:Ba,id:Ra,components:za,type:Oa},Ua=Object.assign({"./prompts/system-prompt.md":Ma,"./prompts/user-prompt.md":va}),Ga=nn(Object.fromEntries(Object.entries(Ua).map(([e,n])=>[zt(e),n.trimEnd()]))),xt="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",Qa="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",$a=`async (job) => {
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
}`,Ya=`async (job, { text, sleep, trace }) => {
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
}`,Va=`async (job, { text, sleep, trace }) => {
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
}`,qa=`async (job, { num, sleep }) => {
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
}`,Ha=`async (job, { text, trace }) => {
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
}`,Za=`async (job, { sleep }) => {
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
}`,Ja={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",hero:{headline:"The LLM *recommends*. The process *governs*.",lede:"An agentic ad-hoc sub-process chooses its own compliance checks, but the gateway after it — not the model — decides whether a shipment ships or goes to a human.",tagline:"Anatomy of an enterprise agent"},docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:xa,forms:{"seed-export-shipment-ready":Sa,"seed-export-compliance-review":Fa},seed:{scenario:xt,shipmentNotes:""},scenariosLabel:"Example shipment",scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:xt,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:Qa,shipmentNotes:""}}],scriptedAgent:$a,templates:Ga,tour:Na,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:Ya},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:Va},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:qa},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:Ha},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:Za}]},Wa=`You are a loan origination assistant at a retail bank. Your job is to gather everything a senior loan officer needs to decide an application — you do **not** decide it yourself.

Work through the case with the tools available to you:

- **Query customer** — find the applicant's existing relationship with the bank.
- **Credit bureau lookup** — pull their credit report.
- **Assess application** — run the bank's underwriting policy to get a debt-to-income ratio, a risk band, and a recommendation. Always run this; the officer's review depends on it.
- **Update application status** — mark the case as \`under-review\` once you have assessed it.

Call the tools in whatever order makes sense, but make sure the application has been assessed before you finish. When you have gathered the customer profile, the bureau report, and the policy assessment, and marked the status, you are done — a senior officer takes it from there.
`,Ka="Gather this loan case for the senior officer: look up the customer, pull their credit bureau report, run the underwriting assessment, and set the application status to `under-review`. Then stop — the officer makes the decision.\n",Xa={id:"loan-origination-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a loan application through the origination agent.",target:{anchor:Ee.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the application and decides, turn by turn, which tools to call — look up the customer, pull a credit bureau report, run the underwriting policy, update the status. Nothing here is a fixed sequence.",target:{elementId:"LoanOriginationAgent"}},{title:"Policy, not opinion",description:"The assessment computes the debt-to-income ratio, a risk band and a recommendation from the verified figures — the deterministic policy the senior officer's review leans on.",target:{elementId:"AssessApplication"}},{title:"Every application meets a human",description:"Whatever the agent recommended, the token now waits here: no offer and no decline is reachable without a senior officer first signing off. Open the task to record the decision — the gateway routes on it.",target:{elementId:"SeniorOfficerReview"}},{title:"Everything the run recorded",description:"The variables panel shows the customer profile, the bureau report, the debt-to-income and risk band, and the recommendation — exactly what each tool wrote for the officer to weigh.",target:{anchor:Ee.variablesPanel}}]},es=`<?xml version="1.0" encoding="UTF-8"?>
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
`,ns="Camunda Cloud",ts="8.10.0",os={name:"Camunda Web Modeler",version:"9b5d5ef"},is=19,rs="loan-application",as="default",ss=[{text:`# Loan application

Capture the applicant's details, then run the origination agent.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{label:"Applicant name",type:"textfield",layout:{row:"Row_applicant",columns:null},id:"Field_ApplicantName",key:"applicantName",defaultValue:"Ada Lovelace",validate:{required:!0}},{label:"Loan amount",description:"Amount requested.",type:"number",layout:{row:"Row_amount",columns:null},id:"Field_LoanAmount",key:"loanAmount",defaultValue:2e4},{label:"Loan purpose",type:"textfield",layout:{row:"Row_purpose",columns:null},id:"Field_LoanPurpose",key:"loanPurpose",defaultValue:"Home improvement"},{label:"Annual income",type:"number",layout:{row:"Row_income",columns:null},id:"Field_AnnualIncome",key:"annualIncome",defaultValue:96e3},{label:"Monthly debt payments",description:"Existing monthly repayments across all obligations.",type:"number",layout:{row:"Row_debt",columns:null},id:"Field_MonthlyDebt",key:"monthlyDebt",defaultValue:850},{label:"Stated credit score",description:"The applicant's self-reported score; the credit bureau tool confirms it.",type:"number",layout:{row:"Row_score",columns:null},id:"Field_CreditScore",key:"creditScore",defaultValue:782}],ds={executionPlatform:ns,executionPlatformVersion:ts,exporter:os,schemaVersion:is,id:rs,type:as,components:ss},ls="Camunda Cloud",cs="8.10.0",ms={name:"Camunda Web Modeler",version:"9b5d5ef"},ps=19,us="loan-senior-officer-review",gs="default",hs=[{text:`# Senior officer review

Every application reaches this desk before an offer or a decline can be sent. Review the agent's findings, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Applicant:** {{applicantName}} — {{loanPurpose}}, amount {{loanAmount}}

**Customer relationship:** {{if customerProfile = null then "unknown" else customerProfile.segment + " (" + string(customerProfile.relationshipYears) + "y)"}}

**Credit bureau:** {{if bureauReport = null then "n/a" else string(bureauReport.score) + " (" + bureauReport.band + "), " + string(bureauReport.derogatoryMarks) + " derogatory mark(s)"}}

**Debt-to-income:** {{debtToIncome}}%

**Assessed risk band:** {{riskBand}}

**Policy recommendation:** {{recommendation}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Decision",values:[{label:"Approve — issue loan offer",value:"approved"},{label:"Decline — send decline notice",value:"declined"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_Decision",key:"decision",validate:{required:!0}},{label:"Officer note",description:"Recorded against the application; the decline notice quotes it as the reason.",type:"textarea",layout:{row:"Row_note",columns:null},id:"Field_ReviewNote",key:"reviewNote"}],bs={executionPlatform:ls,executionPlatformVersion:cs,exporter:ms,schemaVersion:ps,id:us,type:gs,components:hs},ys=Object.assign({"./prompts/system-prompt.md":Wa,"./prompts/user-prompt.md":Ka}),ws=nn(Object.fromEntries(Object.entries(ys).map(([e,n])=>[zt(e),n.trimEnd()]))),Et={applicantName:"Ada Lovelace",annualIncome:96e3,monthlyDebt:850,creditScore:782,loanAmount:2e4,loanPurpose:"Home improvement"},fs={applicantName:"Cyrus Vale",annualIncome:38e3,monthlyDebt:1450,creditScore:566,loanAmount:42e3,loanPurpose:"Debt consolidation"},_s=`async (job) => {
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
}`,Ms=`async (job, { text, sleep, trace }) => {
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
}`,vs=`async (job, { text, num, sleep, trace }) => {
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
}`,Ns=`async (job, { num, trace }) => {
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
}`,xs=`async (job, { sleep, trace }) => {
  // Stands in for a write-back to the loan origination system. Marks the case
  // as awaiting the senior officer's decision.
  await sleep(200);
  trace("application status -> under-review");
  return { applicationStatus: "under-review", toolCallResult: "under-review" };
}`,Es=`async (job, { num, sleep, trace }) => {
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
}`,Is=`async (job, { text, sleep, trace }) => {
  // Trunk service task on the declined path. Sends the applicant a decline
  // notice with the recorded reason, standing in for a notification channel.
  const note = text("reviewNote", "");
  const reason = note || "Application did not meet the lending policy.";
  await sleep(300);
  trace("decline notice sent");

  return { declineNotice: { reason: reason, sentTo: text("applicantName", "the applicant") } };
}`,ks={id:"loan-origination",title:"Loan origination agent",blurb:"An AI agent gathers a loan case with its own tools — customer lookup, credit bureau, an underwriting policy, a status update — then every application passes through a mandatory senior-officer review before a gateway routes it to an offer or a decline. The agent advises; the process governs.",docsUrl:"https://camunda.com/orchestrate/agents/",bpmn:es,forms:{"loan-application":ds,"loan-senior-officer-review":bs},seed:Et,scenarios:[{label:"Strong applicant (policy recommends approve)",variables:Et},{label:"Marginal applicant (policy recommends decline)",variables:fs}],scriptedAgent:_s,templates:ws,tour:Xa,requiredTools:["AssessApplication","UpdateApplicationStatus"],handlers:[{elementId:"QueryCustomer",standsInFor:"CRM connector — customer lookup",source:Ms},{elementId:"CreditBureauLookup",standsInFor:"REST connector — credit bureau",source:vs},{elementId:"AssessApplication",standsInFor:"Script task — underwriting policy (FEEL)",source:Ns},{elementId:"UpdateApplicationStatus",standsInFor:"REST connector — origination system",source:xs},{elementId:"IssueLoanOffer",standsInFor:"REST connector — offer/booking system",source:Es},{elementId:"SendDeclineNotice",standsInFor:"REST connector — notifications",source:Is}]},Ts=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ds=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,js=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,As=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Ss={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:Ts,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Ds},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:js},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:As}]},Ps=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Cs=`async (job, { text, num, sleep, trace }) => {
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
}`,Ls={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:Ps,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:Cs}]},Bs=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Rs=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,zs=`async (job, { num, sleep }) => {
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
}`,Os=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Fs={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:Bs,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Rs},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:zs,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Os,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},Us="/web-demo-framework/pr-preview/pr-121/assets/de-bmw-mini-JBSk7QcF.jpg",Gs="/web-demo-framework/pr-preview/pr-121/assets/de-bmw-mini.thumb-CUUmJrRO.jpg",Qs="/web-demo-framework/pr-preview/pr-121/assets/uk-d651-rnb-XGipy2QN.jpg",$s="/web-demo-framework/pr-preview/pr-121/assets/uk-d651-rnb.thumb-mjEcbhUf.jpg",Ys="/web-demo-framework/pr-preview/pr-121/assets/uk-mk70-orj-Cn6O3Xfm.jpg",Vs="/web-demo-framework/pr-preview/pr-121/assets/uk-mk70-orj.thumb-CaeZ2vqU.jpg",qs="/web-demo-framework/pr-preview/pr-121/assets/uk-ni-ijz-8992-YXV44tgk.jpg",Hs="/web-demo-framework/pr-preview/pr-121/assets/uk-ni-ijz-8992.thumb-DYwok8jV.jpg",Zs="/web-demo-framework/pr-preview/pr-121/assets/us-hyundai-genesis-gGpAIEpi.jpg",Js="/web-demo-framework/pr-preview/pr-121/assets/us-hyundai-genesis.thumb-DEEt19Mw.jpg",Ws=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ks="Camunda Cloud",Xs="8.10.0",ed={name:"Camunda Web Modeler",version:"9b5d5ef"},nd=19,td="plate-recognition-confirm",od="default",id=[{text:`# Confirm the number plate

The in-browser vision model read a plate from the photo. It **recommends**; you **govern** — accept its reading or correct it before it is recorded.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ConfirmHeading"},{text:'**Model reading:** {{if modelPlate = null or modelPlate = "" then "(nothing read)" else modelPlate}}',type:"text",layout:{row:"Row_modelReading",columns:null},id:"Field_ModelReading"},{label:"Number plate",description:"Edit this if the model misread the plate. What you submit is what gets recorded.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ConfirmPlate",key:"confirmedPlate",validate:{required:!0}}],rd={executionPlatform:Ks,executionPlatformVersion:Xs,exporter:ed,schemaVersion:nd,id:td,type:od,components:id},ad="Camunda Cloud",sd="8.10.0",dd={name:"Camunda Web Modeler",version:"9b5d5ef"},ld=19,cd="plate-recognition-manual",md="default",pd=[{text:`# Couldn't read the plate

The vision model didn't return a confident reading for this photo (an unrecognised image, or no in-browser model connected). Enter the plate by hand, or re-run with the in-browser vision brain connected.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ManualHeading"},{label:"Number plate",description:"Type the plate exactly as it appears in the photo.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ManualPlate",key:"confirmedPlate",validate:{required:!0}}],ud={executionPlatform:ad,executionPlatformVersion:sd,exporter:dd,schemaVersion:ld,id:cd,type:md,components:pd},gd="Camunda Cloud",hd="8.10.0",bd={name:"Camunda Web Modeler",version:"9b5d5ef"},yd=19,wd="plate-recognition-country",fd="default",_d=[{text:`# Read a number plate

Pick the plate's **country** so the reader knows which format to extract, then start the run. Leave it on **Auto-detect** to let it guess from the shape.`,type:"text",layout:{row:"Row_countryHeading",columns:null},id:"Field_CountryHeading"},{label:"Plate country",description:"The vision model reads all text in the photo; this tells the process which country's plate format to pull out of that reading.",type:"select",layout:{row:"Row_country",columns:null},id:"Field_Country",key:"country",defaultValue:"auto",values:[{label:"Auto-detect (any format)",value:"auto"},{label:"United Kingdom",value:"uk"},{label:"India",value:"india"},{label:"Germany",value:"germany"},{label:"South Korea",value:"korea"}],validate:{required:!0}}],Md={executionPlatform:gd,executionPlatformVersion:hd,exporter:bd,schemaVersion:yd,id:wd,type:fd,components:_d},vd=[{id:"uk-mk70-orj",file:"images/uk-mk70-orj.jpg",thumb:"images/uk-mk70-orj.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_MK70_ORJ_(MK_-_Manchester)_-_70_Plate_(1st_September_2020_-_28th_February_2021)_-_VW_Golf_(CarShop).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate MK70 ORJ" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"MK70 ORJ"},{id:"uk-ni-ijz-8992",file:"images/uk-ni-ijz-8992.jpg",thumb:"images/uk-ni-ijz-8992.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_(Northern_Ireland)_Number_Plate_IJZ_8992_(JZ_-_Down_(NI)_)_-_Dateless_Plate_-_Ford_Fiesta_(Woolston_Car_Centre).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK (Northern Ireland) Number Plate IJZ 8992" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"IJZ 8992"},{id:"uk-d651-rnb",file:"images/uk-d651-rnb.jpg",thumb:"images/uk-d651-rnb.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_D651_RNB_(NB_-_Manchester)_-_D_Reg_(1st_August_1986_-_31st_July_1987)_-_Ford_Capri_(The_Quick_Group).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate D651 RNB" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"D651 RNB"},{id:"de-bmw-mini",file:"images/de-bmw-mini.jpg",thumb:"images/de-bmw-mini.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_BMW_Mini_--_2018_--_1545-51.jpg",license:"CC-BY-SA-4.0",attribution:'Dietmar Rabich / Wikimedia Commons / "Dülmen, Dernekamp, BMW Mini -- 2018 -- 1545-51" / CC BY-SA 4.0',groundTruthPlate:"MS WL 545"},{id:"us-hyundai-genesis",file:"images/us-hyundai-genesis.jpg",thumb:"images/us-hyundai-genesis.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:Hyundai_Genesis_3.8_(US)_(9004912958).jpg",license:"CC-BY-SA-2.0",attribution:'Scarlet Sappho, "Hyundai Genesis 3.8 (US)" (Wikimedia Commons, CC BY-SA 2.0)',groundTruthPlate:"GWAN EUM"}],Wt=vd,Nd=Object.assign({"./images/de-bmw-mini.jpg":Us,"./images/de-bmw-mini.thumb.jpg":Gs,"./images/uk-d651-rnb.jpg":Qs,"./images/uk-d651-rnb.thumb.jpg":$s,"./images/uk-mk70-orj.jpg":Ys,"./images/uk-mk70-orj.thumb.jpg":Vs,"./images/uk-ni-ijz-8992.jpg":qs,"./images/uk-ni-ijz-8992.thumb.jpg":Hs,"./images/us-hyundai-genesis.jpg":Zs,"./images/us-hyundai-genesis.thumb.jpg":Js});function It(e){const n=Nd[`./${e}`];if(!n)throw new Error(`plate-recognition: image asset "${e}" is in images.json but missing on disk`);return n}const xd=Wt.map(e=>({id:e.id,file:It(e.file),thumb:It(e.thumb),label:e.groundTruthPlate})),Ed=Object.fromEntries(Wt.map(e=>[e.id,e.groundTruthPlate])),Id=`async (job, { vision, trace, text }) => {
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
}`,kd=`async (job, { text, trace }) => {
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
}`,Td={id:"plate-recognition",title:"Read a number plate from a photo",blurb:"Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",docsUrl:"https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",bpmn:Ws,forms:{"plate-recognition-country":Md,"plate-recognition-confirm":rd,"plate-recognition-manual":ud},seed:{country:"auto"},imageInput:{label:"Pick a seed photo (its plate is known, so the scripted reader works offline) or upload your own — a live in-browser model reads a photo it has never seen.",seedImages:xd},scriptedVision:Ed,handlers:[{elementId:"ExtractPlate",standsInFor:"Vision model — Florence-2 <OCR> on WebGPU (in-browser)",source:Id},{elementId:"RecordResult",standsInFor:"Script task — records the governed outcome",source:kd}]},Dd=`<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" xmlns:color="http://www.omg.org/spec/BPMN/non-normative/color/1.0" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_InvoicePaymentAgent" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.49.0" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.10.0">
  <bpmn:process id="invoice-payment-agent" name="Invoice Payment Approval Agent" isExecutable="true">
    <bpmn:startEvent id="StartEvent_InvoiceSubmitted" name="Invoice submitted for payment">
      <bpmn:extensionElements>
        <zeebe:formDefinition formId="invoice-submit" />
      </bpmn:extensionElements>
      <bpmn:outgoing>Flow_ToAgent</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_ToAgent" sourceRef="StartEvent_InvoiceSubmitted" targetRef="InvoiceReviewAgent" />
    <bpmn:adHocSubProcess id="InvoiceReviewAgent" name="Invoice Review Agent" zeebe:modelerTemplate="io.camunda.connectors.agenticai.aiagent.jobworker.v1" zeebe:modelerTemplateVersion="10" zeebe:modelerTemplateIcon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNBNTZFRkYiLz4KPG1hc2sgaWQ9InBhdGgtMi1vdXRzaWRlLTFfMTg1XzYiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjQiIHk9IjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iYmxhY2siPgo8cmVjdCBmaWxsPSJ3aGl0ZSIgeD0iNCIgeT0iNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMDEwNSAxMi4wOTg3QzE4LjQ5IDEwLjU4OTQgMTcuMTU5NCA4LjEwODE0IDE2LjE3OTkgNi4wMTEwM0MxNi4xNTIgNi4wMDQ1MSAxNi4xMTc2IDYgMTYuMDc5NCA2QzE2LjA0MTEgNiAxNi4wMDY2IDYuMDA0NTEgMTUuOTc4OCA2LjAxMTA0QzE0Ljk5OTQgOC4xMDgxNCAxMy42Njk3IDEwLjU4ODkgMTIuMTQ4MSAxMi4wOTgxQzEwLjYyNjkgMTMuNjA3MSA4LjEyNTY4IDE0LjkyNjQgNi4wMTE1NyAxNS44OTgxQzYuMDA0NzQgMTUuOTI2MSA2IDE1Ljk2MTEgNiAxNkM2IDE2LjAzODcgNi4wMDQ2OCAxNi4wNzM2IDYuMDExNDQgMTYuMTAxNEM4LjEyNTE5IDE3LjA3MjkgMTAuNjI2MiAxOC4zOTE5IDEyLjE0NzcgMTkuOTAxNkMxMy42Njk3IDIxLjQxMDcgMTQuOTk5NiAyMy44OTIgMTUuOTc5MSAyNS45ODlDMTYuMDA2OCAyNS45OTU2IDE2LjA0MTEgMjYgMTYuMDc5MyAyNkMxNi4xMTc1IDI2IDE2LjE1MTkgMjUuOTk1NCAxNi4xNzk2IDI1Ljk4OUMxNy4xNTkxIDIzLjg5MiAxOC40ODg4IDIxLjQxMSAyMC4wMDk5IDE5LjkwMjFNMjAuMDA5OSAxOS45MDIxQzIxLjUyNTMgMTguMzk4NyAyMy45NDY1IDE3LjA2NjkgMjUuOTkxNSAxNi4wODI0QzI1Ljk5NjUgMTYuMDU5MyAyNiAxNi4wMzEgMjYgMTUuOTk5N0MyNiAxNS45Njg0IDI1Ljk5NjUgMTUuOTQwMyAyNS45OTE1IDE1LjkxNzFDMjMuOTQ3NCAxNC45MzI3IDIxLjUyNTkgMTMuNjAxIDIwLjAxMDUgMTIuMDk4NyIvPgo8L21hc2s+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMDEwNSAxMi4wOTg3QzE4LjQ5IDEwLjU4OTQgMTcuMTU5NCA4LjEwODE0IDE2LjE3OTkgNi4wMTEwM0MxNi4xNTIgNi4wMDQ1MSAxNi4xMTc2IDYgMTYuMDc5NCA2QzE2LjA0MTEgNiAxNi4wMDY2IDYuMDA0NTEgMTUuOTc4OCA2LjAxMTA0QzE0Ljk5OTQgOC4xMDgxNCAxMy42Njk3IDEwLjU4ODkgMTIuMTQ4MSAxMi4wOTgxQzEwLjYyNjkgMTMuNjA3MSA4LjEyNTY4IDE0LjkyNjQgNi4wMTE1NyAxNS44OTgxQzYuMDA0NzQgMTUuOTI2MSA2IDE1Ljk2MTEgNiAxNkM2IDE2LjAzODcgNi4wMDQ2OCAxNi4wNzM2IDYuMDExNDQgMTYuMTAxNEM4LjEyNTE5IDE3LjA3MjkgMTAuNjI2MiAxOC4zOTE5IDEyLjE0NzcgMTkuOTAxNkMxMy42Njk3IDIxLjQxMDcgMTQuOTk5NiAyMy44OTIgMTUuOTc5MSAyNS45ODlDMTYuMDA2OCAyNS45OTU2IDE2LjA0MTEgMjYgMTYuMDc5MyAyNkMxNi4xMTc1IDI2IDE2LjE1MTkgMjUuOTk1NCAxNi4xNzk2IDI1Ljk4OUMxNy4xNTkxIDIzLjg5MiAxOC40ODg4IDIxLjQxMSAyMC4wMDk5IDE5LjkwMjFNMjAuMDA5OSAxOS45MDIxQzIxLjUyNTMgMTguMzk4NyAyMy45NDY1IDE3LjA2NjkgMjUuOTkxNSAxNi4wODI0QzI1Ljk5NjUgMTYuMDU5MyAyNiAxNi4wMzEgMjYgMTUuOTk5N0MyNiAxNS45Njg0IDI1Ljk5NjUgMTUuOTQwMyAyNS45OTE1IDE1LjkxNzFDMjMuOTQ3NCAxNC45MzI3IDIxLjUyNTkgMTMuNjAxIDIwLjAxMDUgMTIuMDk4NyIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC4wMTA1IDEyLjA5ODdDMTguNDkgMTAuNTg5NCAxNy4xNTk0IDguMTA4MTQgMTYuMTc5OSA2LjAxMTAzQzE2LjE1MiA2LjAwNDUxIDE2LjExNzYgNiAxNi4wNzk0IDZDMTYuMDQxMSA2IDE2LjAwNjYgNi4wMDQ1MSAxNS45Nzg4IDYuMDExMDRDMTQuOTk5NCA4LjEwODE0IDEzLjY2OTcgMTAuNTg4OSAxMi4xNDgxIDEyLjA5ODFDMTAuNjI2OSAxMy42MDcxIDguMTI1NjggMTQuOTI2NCA2LjAxMTU3IDE1Ljg5ODFDNi4wMDQ3NCAxNS45MjYxIDYgMTUuOTYxMSA2IDE2QzYgMTYuMDM4NyA2LjAwNDY4IDE2LjA3MzYgNi4wMTE0NCAxNi4xMDE0QzguMTI1MTkgMTcuMDcyOSAxMC42MjYyIDE4LjM5MTkgMTIuMTQ3NyAxOS45MDE2QzEzLjY2OTcgMjEuNDEwNyAxNC45OTk2IDIzLjg5MiAxNS45NzkxIDI1Ljk4OUMxNi4wMDY4IDI1Ljk5NTYgMTYuMDQxMSAyNiAxNi4wNzkzIDI2QzE2LjExNzUgMjYgMTYuMTUxOSAyNS45OTU0IDE2LjE3OTYgMjUuOTg5QzE3LjE1OTEgMjMuODkyIDE4LjQ4ODggMjEuNDExIDIwLjAwOTkgMTkuOTAyMU0yMC4wMDk5IDE5LjkwMjFDMjEuNTI1MyAxOC4zOTg3IDIzLjk0NjUgMTcuMDY2OSAyNS45OTE1IDE2LjA4MjRDMjUuOTk2NSAxNi4wNTkzIDI2IDE2LjAzMSAyNiAxNS45OTk3QzI2IDE1Ljk2ODQgMjUuOTk2NSAxNS45NDAzIDI1Ljk5MTUgMTUuOTE3MUMyMy45NDc0IDE0LjkzMjcgMjEuNTI1OSAxMy42MDEgMjAuMDEwNSAxMi4wOTg3IiBzdHJva2U9IiM0OTFEOEIiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgbWFzaz0idXJsKCNwYXRoLTItb3V0c2lkZS0xXzE4NV82KSIvPgo8L3N2Zz4K">
      <bpmn:documentation>Reviews every submitted invoice against its PO and, when it decides to pay, requests payment release. The tool that actually releases money is gated by a human reviewer built into the agent's own tool loop - the agent never has to leave its reasoning to get that approval.</bpmn:documentation>
      <bpmn:extensionElements>
        <zeebe:adHoc outputCollection="toolCallResults" outputElement="={&#10;  id: toolCall._meta.id,&#10;  name: toolCall._meta.name,&#10;  content: toolCallResult&#10;}" />
        <zeebe:taskDefinition type="io.camunda.agenticai:aiagent-job-worker:1" retries="3" />
        <zeebe:ioMapping>
          <zeebe:input source="openaiCompatible" target="provider.type" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_API_ENDPOINT}}" target="provider.openaiCompatible.endpoint" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_API_KEY}}" target="provider.openaiCompatible.authentication.apiKey" />
          <zeebe:input source="{{secrets.CAMUNDA_PROVIDED_LLM_DEFAULT_MODEL}}" target="provider.openaiCompatible.model.model" />
          <zeebe:input source="=&#34;You are a demo workflow assistant that reviews vendor invoices against their purchase order (PO) and, when appropriate, releases payment.&#10;&#10;You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return.&#10;&#10;Matching policy, all amounts compared in USD:&#10;- If the invoice amount is within 2% of the PO amount, it is a clean match: proceed to release the invoice amount.&#10;- If the invoice amount is above the PO amount by more than 2% but at most 10%, and the invoice notes give a reason for the extra amount, proceed to release the invoice amount.&#10;- Otherwise - an overage with no reason given in the notes, an overage above 10% even with a reason, or an invoice amount below the PO amount - do not attempt to release payment; call NotifyVendorDispute instead.&#10;&#10;If the invoice isn&#39;t in USD, call ConvertCurrency first to get the USD amount - never estimate a conversion yourself.&#10;&#10;To actually release a payment, call RequestPaymentRelease with the USD amount you want to release and your reasoning. There is no other way to pay an invoice: every single release, no matter how confident you are, pauses for a human reviewer to approve or deny it. If they approve, treat the release as done. If they deny it, do not retry the same amount - read their comments and decide whether to call NotifyVendorDispute or simply stop without disputing.&#10;&#10;Once you&#39;ve either released a payment or decided not to (whether by disputing it or simply stopping), your work here is done - what actually happened is recorded automatically, so you don&#39;t need to report it yourself.&#34;" target="data.systemPrompt.prompt" />
          <zeebe:input source="=&#34;Invoice under review:&#10;Vendor: &#34; + vendorName + &#34;&#10;Invoice number: &#34; + invoiceNumber + &#34;&#10;PO number: &#34; + poNumber + &#34;&#10;PO amount: &#34; + string(poAmount) + &#34; USD&#10;Invoice amount: &#34; + string(invoiceAmount) + &#34; &#34; + invoiceCurrency + &#34;&#10;Notes: &#34; + invoiceNotes + &#34;&#10;&#10;Assess this invoice against the PO and handle it end to end.&#34;" target="data.userPrompt.prompt" />
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
          <zeebe:output source="=if paymentReceipt != null then &#34;released&#34; else if disputeNoticeReceipt != null then &#34;disputed&#34; else &#34;held&#34;" target="caseOutcome" />
          <zeebe:output source="=if paymentReceipt != null then &#34;Payment of &#34; + string(approvedAmountUSD) + &#34; USD released to &#34; + vendorName + &#34;.&#34; else if disputeNoticeReceipt != null then &#34;Vendor notified of dispute.&#34; else &#34;No payment released and no dispute filed; held for further information.&#34;" target="caseSummary" />
        </zeebe:ioMapping>
        <zeebe:taskHeaders>
          <zeebe:header key="elementTemplateVersion" value="10" />
          <zeebe:header key="elementTemplateId" value="io.camunda.connectors.agenticai.aiagent.jobworker.v1" />
          <zeebe:header key="retryBackoff" value="PT30S" />
        </zeebe:taskHeaders>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToAgent</bpmn:incoming>
      <bpmn:outgoing>Flow_ToCompliance</bpmn:outgoing>
      <bpmn:serviceTask id="ConvertCurrency" name="Convert currency" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13" zeebe:modelerTemplateIcon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjAzMzUgOC45OTk5N0MxNy4wMzM1IDEzLjQ0NzUgMTMuNDI4MSAxNy4wNTI5IDguOTgwNjUgMTcuMDUyOUM0LjUzMzE2IDE3LjA1MjkgMC45Mjc3NjUgMTMuNDQ3NSAwLjkyNzc2NSA4Ljk5OTk3QzAuOTI3NzY1IDQuNTUyNDggNC41MzMxNiAwLjk0NzA4MyA4Ljk4MDY1IDAuOTQ3MDgzQzEzLjQyODEgMC45NDcwODMgMTcuMDMzNSA0LjU1MjQ4IDE3LjAzMzUgOC45OTk5N1oiIGZpbGw9IiM1MDU1NjIiLz4KPHBhdGggZD0iTTQuOTMxMjYgMTQuMTU3MUw2Ljc4MTA2IDMuNzE0NzFIMTAuMTM3NUMxMS4xOTE3IDMuNzE0NzEgMTEuOTgyNCAzLjk4MzIzIDEyLjUwOTUgNC41MjAyN0MxMy4wNDY1IDUuMDQ3MzYgMTMuMzE1IDUuNzMzNTggMTMuMzE1IDYuNTc4OTJDMTMuMzE1IDcuNDQ0MTQgMTMuMDcxNCA4LjE1NTIyIDEyLjU4NDEgOC43MTIxNUMxMi4xMDY3IDkuMjU5MTMgMTEuNDU1MyA5LjYzNzA1IDEwLjYyOTggOS44NDU5TDEyLjA2MTkgMTQuMTU3MUgxMC4zMzE1TDkuMDMzNjQgMTAuMDI0OUg3LjI0MzUxTDYuNTEyNTQgMTQuMTU3MUg0LjkzMTI2Wk03LjQ5NzExIDguNTkyODFIOS4yNDI0OEM5Ljk5ODMyIDguNTkyODEgMTAuNTkwMSA4LjQyMzc0IDExLjAxNzcgOC4wODU2MUMxMS40NTUzIDcuNzM3NTMgMTEuNjc0MSA3LjI2NTEzIDExLjY3NDEgNi42Njg0MkMxMS42NzQxIDYuMTkxMDYgMTEuNTI0OSA1LjgxODExIDExLjIyNjUgNS41NDk1OUMxMC45MjgyIDUuMjcxMTMgMTAuNDU1OCA1LjEzMTkgOS44MDkzNiA1LjEzMTlIOC4xMDg3NEw3LjQ5NzExIDguNTkyODFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K">
        <bpmn:documentation>Converts a non-USD invoice amount to USD via the free, public frankfurter.app exchange-rate API (European Central Bank reference rates, no key required) so the agent can compare it to the PO amount, which is always in USD. Freely callable - no human approval needed for a currency lookup.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="io.camunda:http-json:1" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="=false" target="ignoreNullValues" />
            <zeebe:input source="noAuth" target="authentication.type" />
            <zeebe:input source="GET" target="method" />
            <zeebe:input source="https://api.frankfurter.app/latest" target="url" />
            <zeebe:input source="={&#10;  amount: fromAi(toolCall.amount, &#34;The invoice amount in its original currency, to convert to USD.&#34;, &#34;number&#34;),&#10;  from: fromAi(toolCall.fromCurrency, &#34;The invoice&#39;s original currency code, e.g. EUR or GBP.&#34;, &#34;string&#34;),&#10;  to: &#34;USD&#34;&#10;}" target="queryParameters" />
            <zeebe:input source="=false" target="storeResponse" />
            <zeebe:input source="=20" target="connectionTimeoutInSeconds" />
            <zeebe:input source="=20" target="readTimeoutInSeconds" />
          </zeebe:ioMapping>
          <zeebe:taskHeaders>
            <zeebe:header key="elementTemplateVersion" value="13" />
            <zeebe:header key="elementTemplateId" value="io.camunda.connectors.HttpJson.v2" />
            <zeebe:header key="resultExpression" value="={&#10;  convertedAmountUSD: response.body.rates.USD,&#10;  toolCallResult: &#34;Converted &#34; + string(response.body.amount) + &#34; &#34; + response.body.base + &#34; to &#34; + string(response.body.rates.USD) + &#34; USD (ECB reference rate).&#34;&#10;}" />
            <zeebe:header key="retryBackoff" value="PT5S" />
          </zeebe:taskHeaders>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
      <bpmn:subProcess id="PaymentReleaseGate" name="Request payment release">
        <bpmn:documentation>Call this whenever you have decided an invoice should be paid and you want to actually release the payment. Provide the USD amount to release and your reasoning. This always pauses for a human reviewer - there is no other way to pay an invoice, and every release needs their approval no matter how confident you are. You get back whether they approved or denied it, and at what amount.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.proposedAmountUSD, &#34;The USD amount you want to release for this invoice.&#34;, &#34;number&#34;)" target="agentProposedAmountUSD" />
            <zeebe:input source="=fromAi(toolCall.reasoning, &#34;Why you believe this amount should be released.&#34;, &#34;string&#34;)" target="agentReleaseReasoning" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
        <bpmn:startEvent id="PaymentReleaseGate_Start">
          <bpmn:outgoing>Flow_GateToRequest</bpmn:outgoing>
        </bpmn:startEvent>
        <bpmn:sequenceFlow id="Flow_GateToRequest" sourceRef="PaymentReleaseGate_Start" targetRef="RequestPaymentRelease" />
      <bpmn:userTask id="RequestPaymentRelease" name="Request payment release">
        <bpmn:documentation>Call this whenever you have decided an invoice should be paid and you want to actually release the payment. Provide the USD amount to release and your reasoning. This always pauses for a human reviewer - there is no other way to pay an invoice, and every release needs their approval no matter how confident you are. You get back whether they approved or denied it, and at what amount.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:userTask />
          <zeebe:formDefinition formId="payment-release-request" />
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.proposedAmountUSD, &#34;The USD amount you want to release for this invoice.&#34;, &#34;number&#34;)" target="agentProposedAmountUSD" />
            <zeebe:input source="=fromAi(toolCall.reasoning, &#34;Why you believe this amount should be released.&#34;, &#34;string&#34;)" target="agentReleaseReasoning" />
            <zeebe:input source="=agentProposedAmountUSD" target="approvedAmountUSD" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
        <bpmn:incoming>Flow_GateToRequest</bpmn:incoming>
        <bpmn:outgoing>Flow_ToReleaseGateway</bpmn:outgoing>
      </bpmn:userTask>
      <bpmn:sequenceFlow id="Flow_ToReleaseGateway" sourceRef="RequestPaymentRelease" targetRef="Gateway_ReleaseApproved" />
      <bpmn:exclusiveGateway id="Gateway_ReleaseApproved" name="Release approved?" default="Flow_ReleaseDenied">
        <bpmn:incoming>Flow_ToReleaseGateway</bpmn:incoming>
        <bpmn:outgoing>Flow_ReleaseApproved</bpmn:outgoing>
        <bpmn:outgoing>Flow_ReleaseDenied</bpmn:outgoing>
      </bpmn:exclusiveGateway>
      <bpmn:sequenceFlow id="Flow_ReleaseApproved" name="approved" sourceRef="Gateway_ReleaseApproved" targetRef="ReleasePayment">
        <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">=releaseDecision = "approve"</bpmn:conditionExpression>
      </bpmn:sequenceFlow>
      <bpmn:sequenceFlow id="Flow_ReleaseDenied" name="denied" sourceRef="Gateway_ReleaseApproved" targetRef="RecordReleaseDenied" />
      <bpmn:serviceTask id="ReleasePayment" name="Release payment" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13" zeebe:modelerTemplateIcon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjAzMzUgOC45OTk5N0MxNy4wMzM1IDEzLjQ0NzUgMTMuNDI4MSAxNy4wNTI5IDguOTgwNjUgMTcuMDUyOUM0LjUzMzE2IDE3LjA1MjkgMC45Mjc3NjUgMTMuNDQ3NSAwLjkyNzc2NSA4Ljk5OTk3QzAuOTI3NzY1IDQuNTUyNDggNC41MzMxNiAwLjk0NzA4MyA4Ljk4MDY1IDAuOTQ3MDgzQzEzLjQyODEgMC45NDcwODMgMTcuMDMzNSA0LjU1MjQ4IDE3LjAzMzUgOC45OTk5N1oiIGZpbGw9IiM1MDU1NjIiLz4KPHBhdGggZD0iTTQuOTMxMjYgMTQuMTU3MUw2Ljc4MTA2IDMuNzE0NzFIMTAuMTM3NUMxMS4xOTE3IDMuNzE0NzEgMTEuOTgyNCAzLjk4MzIzIDEyLjUwOTUgNC41MjAyN0MxMy4wNDY1IDUuMDQ3MzYgMTMuMzE1IDUuNzMzNTggMTMuMzE1IDYuNTc4OTJDMTMuMzE1IDcuNDQ0MTQgMTMuMDcxNCA4LjE1NTIyIDEyLjU4NDEgOC43MTIxNUMxMi4xMDY3IDkuMjU5MTMgMTEuNDU1MyA5LjYzNzA1IDEwLjYyOTggOS44NDU5TDEyLjA2MTkgMTQuMTU3MUgxMC4zMzE1TDkuMDMzNjQgMTAuMDI0OUg3LjI0MzUxTDYuNTEyNTQgMTQuMTU3MUg0LjkzMTI2Wk03LjQ5NzExIDguNTkyODFIOS4yNDI0OEM5Ljk5ODMyIDguNTkyODEgMTAuNTkwMSA4LjQyMzc0IDExLjAxNzcgOC4wODU2MUMxMS40NTUzIDcuNzM3NTMgMTEuNjc0MSA3LjI2NTEzIDExLjY3NDEgNi42Njg0MkMxMS42NzQxIDYuMTkxMDYgMTEuNTI0OSA1LjgxODExIDExLjIyNjUgNS41NDk1OUMxMC45MjgyIDUuMjcxMTMgMTAuNDU1OCA1LjEzMTkgOS44MDkzNiA1LjEzMTlIOC4xMDg3NEw3LjQ5NzExIDguNTkyODFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K">
        <bpmn:documentation>Posts the payment release to httpbin.io's echo endpoint (a stand-in for a real accounts-payable/payment-rail system). Only reachable once a human has approved the release - there is no other path into this task.</bpmn:documentation>
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
            <zeebe:input source="={&#10;  vendorName: vendorName,&#10;  invoiceNumber: invoiceNumber,&#10;  poNumber: poNumber,&#10;  poAmount: poAmount,&#10;  invoiceAmount: invoiceAmount,&#10;  invoiceCurrency: invoiceCurrency,&#10;  approvedAmountUSD: approvedAmountUSD,&#10;  releaseReviewerComments: releaseReviewerComments&#10;}" target="body" />
            <zeebe:input source="=false" target="ignoreNullValues" />
          </zeebe:ioMapping>
          <zeebe:taskHeaders>
            <zeebe:header key="elementTemplateVersion" value="13" />
            <zeebe:header key="elementTemplateId" value="io.camunda.connectors.HttpJson.v2" />
            <zeebe:header key="resultExpression" value="={&#10;  paymentReceipt: response.body,&#10;  toolCallResult: &#34;Payment of &#34; + string(approvedAmountUSD) + &#34; USD released to &#34; + vendorName + &#34;. Receipt logged.&#34;&#10;}" />
            <zeebe:header key="retryBackoff" value="PT5S" />
          </zeebe:taskHeaders>
        </bpmn:extensionElements>
        <bpmn:incoming>Flow_ReleaseApproved</bpmn:incoming>
        <bpmn:outgoing>Flow_ReleasedToEnd</bpmn:outgoing>
      </bpmn:serviceTask>
      <bpmn:sequenceFlow id="Flow_ReleasedToEnd" sourceRef="ReleasePayment" targetRef="EndEvent_PaymentReleased" />
      <bpmn:endEvent id="EndEvent_PaymentReleased" name="Payment released">
        <bpmn:incoming>Flow_ReleasedToEnd</bpmn:incoming>
      </bpmn:endEvent>
      <bpmn:scriptTask id="RecordReleaseDenied" name="Record release denied">
        <bpmn:documentation>Captures the reviewer's denial and comments, and returns them to the agent as the result of the RequestPaymentRelease call so it can decide what to do next.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:script expression="=releaseReviewerComments" resultVariable="releaseReviewerComments" />
          <zeebe:ioMapping>
            <zeebe:output source="=&#34;Payment release denied by reviewer. Comments: &#34; + releaseReviewerComments" target="toolCallResult" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
        <bpmn:incoming>Flow_ReleaseDenied</bpmn:incoming>
        <bpmn:outgoing>Flow_DeniedToEnd</bpmn:outgoing>
      </bpmn:scriptTask>
      <bpmn:sequenceFlow id="Flow_DeniedToEnd" sourceRef="RecordReleaseDenied" targetRef="EndEvent_ReleaseDenied" />
      <bpmn:endEvent id="EndEvent_ReleaseDenied" name="Release denied">
        <bpmn:incoming>Flow_DeniedToEnd</bpmn:incoming>
      </bpmn:endEvent>
      </bpmn:subProcess>
      <bpmn:serviceTask id="NotifyVendorDispute" name="Notify vendor of dispute" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13" zeebe:modelerTemplateIcon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjAzMzUgOC45OTk5N0MxNy4wMzM1IDEzLjQ0NzUgMTMuNDI4MSAxNy4wNTI5IDguOTgwNjUgMTcuMDUyOUM0LjUzMzE2IDE3LjA1MjkgMC45Mjc3NjUgMTMuNDQ3NSAwLjkyNzc2NSA4Ljk5OTk3QzAuOTI3NzY1IDQuNTUyNDggNC41MzMxNiAwLjk0NzA4MyA4Ljk4MDY1IDAuOTQ3MDgzQzEzLjQyODEgMC45NDcwODMgMTcuMDMzNSA0LjU1MjQ4IDE3LjAzMzUgOC45OTk5N1oiIGZpbGw9IiM1MDU1NjIiLz4KPHBhdGggZD0iTTQuOTMxMjYgMTQuMTU3MUw2Ljc4MTA2IDMuNzE0NzFIMTAuMTM3NUMxMS4xOTE3IDMuNzE0NzEgMTEuOTgyNCAzLjk4MzIzIDEyLjUwOTUgNC41MjAyN0MxMy4wNDY1IDUuMDQ3MzYgMTMuMzE1IDUuNzMzNTggMTMuMzE1IDYuNTc4OTJDMTMuMzE1IDcuNDQ0MTQgMTMuMDcxNCA4LjE1NTIyIDEyLjU4NDEgOC43MTIxNUMxMi4xMDY3IDkuMjU5MTMgMTEuNDU1MyA5LjYzNzA1IDEwLjYyOTggOS44NDU5TDEyLjA2MTkgMTQuMTU3MUgxMC4zMzE1TDkuMDMzNjQgMTAuMDI0OUg3LjI0MzUxTDYuNTEyNTQgMTQuMTU3MUg0LjkzMTI2Wk03LjQ5NzExIDguNTkyODFIOS4yNDI0OEM5Ljk5ODMyIDguNTkyODEgMTAuNTkwMSA4LjQyMzc0IDExLjAxNzcgOC4wODU2MUMxMS40NTUzIDcuNzM3NTMgMTEuNjc0MSA3LjI2NTEzIDExLjY3NDEgNi42Njg0MkMxMS42NzQxIDYuMTkxMDYgMTEuNTI0OSA1LjgxODExIDExLjIyNjUgNS41NDk1OUMxMC45MjgyIDUuMjcxMTMgMTAuNDU1OCA1LjEzMTkgOS44MDkzNiA1LjEzMTlIOC4xMDg3NEw3LjQ5NzExIDguNTkyODFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K">
        <bpmn:documentation>Call this to notify the vendor when you're disputing an invoice - for example after a payment release was denied, or when your own policy assessment finds the invoice clearly wrong. This is an outbound notification only, not a payment, so it does not need human approval.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:taskDefinition type="io.camunda:http-json:1" retries="2" />
          <zeebe:ioMapping>
            <zeebe:input source="=false" target="ignoreNullValues" />
            <zeebe:input source="noAuth" target="authentication.type" />
            <zeebe:input source="POST" target="method" />
            <zeebe:input source="https://httpbin.io/post" target="url" />
            <zeebe:input source="=false" target="storeResponse" />
            <zeebe:input source="=false" target="followRedirects" />
            <zeebe:input source="=20" target="connectionTimeoutInSeconds" />
            <zeebe:input source="=20" target="readTimeoutInSeconds" />
            <zeebe:input source="={&#10;  vendorName: vendorName,&#10;  invoiceNumber: invoiceNumber,&#10;  poNumber: poNumber,&#10;  poAmount: poAmount,&#10;  invoiceAmount: invoiceAmount,&#10;  invoiceCurrency: invoiceCurrency,&#10;  disputeReason: fromAi(toolCall.disputeReason, &#34;Why this invoice is being disputed.&#34;, &#34;string&#34;)&#10;}" target="body" />
          </zeebe:ioMapping>
          <zeebe:taskHeaders>
            <zeebe:header key="elementTemplateVersion" value="13" />
            <zeebe:header key="elementTemplateId" value="io.camunda.connectors.HttpJson.v2" />
            <zeebe:header key="resultExpression" value="={&#10;  disputeNoticeReceipt: response.body,&#10;  toolCallResult: &#34;Vendor notified of dispute.&#34;&#10;}" />
            <zeebe:header key="retryBackoff" value="PT5S" />
          </zeebe:taskHeaders>
        </bpmn:extensionElements>
      </bpmn:serviceTask>
    </bpmn:adHocSubProcess>
    <bpmn:sequenceFlow id="Flow_ToCompliance" sourceRef="InvoiceReviewAgent" targetRef="HumanTask_ComplianceSignoff" />
    <bpmn:userTask id="HumanTask_ComplianceSignoff" name="Final compliance sign-off">
      <bpmn:extensionElements>
        <zeebe:userTask />
        <zeebe:formDefinition formId="compliance-signoff" />
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_ToCompliance</bpmn:incoming>
      <bpmn:outgoing>Flow_ToComplianceGateway</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_ToComplianceGateway" sourceRef="HumanTask_ComplianceSignoff" targetRef="Gateway_ComplianceDecision" />
    <bpmn:exclusiveGateway id="Gateway_ComplianceDecision" name="Compliance decision?" default="Flow_ComplianceEscalate">
      <bpmn:incoming>Flow_ToComplianceGateway</bpmn:incoming>
      <bpmn:outgoing>Flow_ComplianceConfirm</bpmn:outgoing>
      <bpmn:outgoing>Flow_ComplianceEscalate</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_ComplianceConfirm" name="confirm" sourceRef="Gateway_ComplianceDecision" targetRef="EndEvent_CaseClosed">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">=complianceDecision = "confirm"</bpmn:conditionExpression>
    </bpmn:sequenceFlow>
    <bpmn:sequenceFlow id="Flow_ComplianceEscalate" name="escalate" sourceRef="Gateway_ComplianceDecision" targetRef="EndEvent_EscalatedForAudit" />
    <bpmn:endEvent id="EndEvent_CaseClosed" name="Case closed">
      <bpmn:incoming>Flow_ComplianceConfirm</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:endEvent id="EndEvent_EscalatedForAudit" name="Escalated for audit">
      <bpmn:incoming>Flow_ComplianceEscalate</bpmn:incoming>
    </bpmn:endEvent>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="invoice-payment-agent">
      <bpmndi:BPMNShape id="StartEvent_InvoiceSubmitted_di" bpmnElement="StartEvent_InvoiceSubmitted">
        <dc:Bounds x="162" y="192" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="138" y="235" width="86" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="InvoiceReviewAgent_di" bpmnElement="InvoiceReviewAgent" isExpanded="true">
        <dc:Bounds x="260" y="40" width="900" height="340" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ConvertCurrency_di" bpmnElement="ConvertCurrency">
        <dc:Bounds x="300" y="90" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="NotifyVendorDispute_di" bpmnElement="NotifyVendorDispute">
        <dc:Bounds x="300" y="240" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="PaymentReleaseGate_di" bpmnElement="PaymentReleaseGate" isExpanded="true">
        <dc:Bounds x="450" y="70" width="680" height="270" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="PaymentReleaseGate_Start_di" bpmnElement="PaymentReleaseGate_Start">
        <dc:Bounds x="482" y="192" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="RequestPaymentRelease_di" bpmnElement="RequestPaymentRelease" bioc:stroke="#0d4372" bioc:fill="#bbdefb" color:background-color="#bbdefb" color:border-color="#0d4372">
        <dc:Bounds x="570" y="170" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_ReleaseApproved_di" bpmnElement="Gateway_ReleaseApproved" isMarkerVisible="true">
        <dc:Bounds x="720" y="185" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="714" y="245" width="52" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ReleasePayment_di" bpmnElement="ReleasePayment">
        <dc:Bounds x="830" y="100" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_PaymentReleased_di" bpmnElement="EndEvent_PaymentReleased">
        <dc:Bounds x="1002" y="122" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="982" y="165" width="77" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="RecordReleaseDenied_di" bpmnElement="RecordReleaseDenied">
        <dc:Bounds x="830" y="240" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_ReleaseDenied_di" bpmnElement="EndEvent_ReleaseDenied">
        <dc:Bounds x="1002" y="262" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="986" y="305" width="69" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_GateToRequest_di" bpmnElement="Flow_GateToRequest">
        <di:waypoint x="518" y="210" />
        <di:waypoint x="570" y="210" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToReleaseGateway_di" bpmnElement="Flow_ToReleaseGateway">
        <di:waypoint x="670" y="210" />
        <di:waypoint x="720" y="210" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ReleaseApproved_di" bpmnElement="Flow_ReleaseApproved">
        <di:waypoint x="745" y="185" />
        <di:waypoint x="745" y="140" />
        <di:waypoint x="830" y="140" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="752" y="118" width="46" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ReleasedToEnd_di" bpmnElement="Flow_ReleasedToEnd">
        <di:waypoint x="930" y="140" />
        <di:waypoint x="1002" y="140" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ReleaseDenied_di" bpmnElement="Flow_ReleaseDenied">
        <di:waypoint x="745" y="235" />
        <di:waypoint x="745" y="280" />
        <di:waypoint x="830" y="280" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="752" y="258" width="34" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_DeniedToEnd_di" bpmnElement="Flow_DeniedToEnd">
        <di:waypoint x="930" y="280" />
        <di:waypoint x="1002" y="280" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="HumanTask_ComplianceSignoff_di" bpmnElement="HumanTask_ComplianceSignoff" bioc:stroke="#0d4372" bioc:fill="#bbdefb" color:background-color="#bbdefb" color:border-color="#0d4372">
        <dc:Bounds x="1220" y="170" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_ComplianceDecision_di" bpmnElement="Gateway_ComplianceDecision" isMarkerVisible="true">
        <dc:Bounds x="1380" y="185" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1375" y="147.5" width="59" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_CaseClosed_di" bpmnElement="EndEvent_CaseClosed">
        <dc:Bounds x="1520" y="192" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1508" y="235" width="61" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_EscalatedForAudit_di" bpmnElement="EndEvent_EscalatedForAudit">
        <dc:Bounds x="1520" y="292" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1506" y="335" width="65" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_ToAgent_di" bpmnElement="Flow_ToAgent">
        <di:waypoint x="198" y="210" />
        <di:waypoint x="260" y="210" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToCompliance_di" bpmnElement="Flow_ToCompliance">
        <di:waypoint x="1160" y="210" />
        <di:waypoint x="1220" y="210" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ToComplianceGateway_di" bpmnElement="Flow_ToComplianceGateway">
        <di:waypoint x="1320" y="210" />
        <di:waypoint x="1380" y="210" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ComplianceConfirm_di" bpmnElement="Flow_ComplianceConfirm">
        <di:waypoint x="1430" y="210" />
        <di:waypoint x="1520" y="210" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1434" y="187" width="37" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_ComplianceEscalate_di" bpmnElement="Flow_ComplianceEscalate">
        <di:waypoint x="1405" y="235" />
        <di:waypoint x="1405" y="310" />
        <di:waypoint x="1520" y="310" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1415" y="337" width="41" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`,jd=[{text:"# Submit an invoice for payment",type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{text:`The fields below already hold a clean, matching scenario. To try the others, replace the values with one of these sets before submitting:

| Scenario | PO amount | Invoice amount | Currency | Notes |
|---|---|---|---|---|
| Clean match (default) | 4200 | 4200 | USD | Quarterly office supplies delivery per PO, no changes. |
| Documented adjustment | 12000 | 12540 | USD | Includes a $540 expedited freight surcharge, pre-approved by procurement via email on the 3rd. |
| Foreign currency, converts and matches | 8000 | 7400 | EUR | Standard components delivery per PO, exact quantities. |
| Vague justification (deny this one in Tasklist) | 5000 | 5350 | USD | Includes miscellaneous facility charges from the past quarter. |

For the first three, approve the release when the **Request payment release** task appears in Tasklist. For the last one, the vague justification is just specific enough that the agent will likely still try to release it - deny it instead, to see the agent adapt and notify the vendor of a dispute. Every scenario then reaches a second, independent **Final compliance sign-off** task once the agent is done.`,type:"text",layout:{row:"Row_scenarios",columns:null},id:"Field_ScenarioTable"},{label:"Vendor name",type:"textfield",layout:{row:"Row_vendor",columns:null},id:"Field_VendorName",key:"vendorName",defaultValue:"Acme Office Supplies",validate:{required:!0}},{label:"Invoice number",type:"textfield",layout:{row:"Row_invoiceNumber",columns:null},id:"Field_InvoiceNumber",key:"invoiceNumber",defaultValue:"INV-10234",validate:{required:!0}},{label:"PO number",type:"textfield",layout:{row:"Row_poNumber",columns:null},id:"Field_PoNumber",key:"poNumber",defaultValue:"PO-88291",validate:{required:!0}},{label:"PO amount (USD)",type:"number",layout:{row:"Row_poAmount",columns:null},id:"Field_PoAmount",key:"poAmount",defaultValue:4200,validate:{required:!0}},{label:"Invoice amount",type:"number",layout:{row:"Row_invoiceAmount",columns:null},id:"Field_InvoiceAmount",key:"invoiceAmount",defaultValue:4200,validate:{required:!0}},{label:"Invoice currency",values:[{label:"USD",value:"USD"},{label:"EUR",value:"EUR"},{label:"GBP",value:"GBP"}],type:"select",layout:{row:"Row_invoiceCurrency",columns:null},id:"Field_InvoiceCurrency",key:"invoiceCurrency",defaultValue:"USD",validate:{required:!0}},{label:"Invoice notes",description:"Free text - the agent reads this to judge whether any overage above the PO amount is documented.",type:"textarea",layout:{row:"Row_invoiceNotes",columns:null},id:"Field_InvoiceNotes",key:"invoiceNotes",defaultValue:"Quarterly office supplies delivery per PO, no changes.",validate:{required:!0}}],Ad="default",Sd="invoice-submit",Pd="Camunda Cloud",Cd="8.10.0",Ld={name:"Camunda Modeler",version:"5.46.1"},Bd=19,Rd={components:jd,type:Ad,id:Sd,executionPlatform:Pd,executionPlatformVersion:Cd,exporter:Ld,schemaVersion:Bd},zd=[{text:`# Payment release requested

The agent wants to release payment for this invoice. Nothing is paid until you decide - this is one of the agent's own tools, so it's waiting on you mid-reasoning, not asking you to redo its work afterwards.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReleaseHeading"},{text:`**Vendor:** {{vendorName}}

**Invoice number:** {{invoiceNumber}}

**PO number:** {{poNumber}}

**PO amount:** {{poAmount}} USD

**Invoice amount:** {{invoiceAmount}} {{invoiceCurrency}}

**Invoice notes:** {{invoiceNotes}}

**Agent wants to release:** {{agentProposedAmountUSD}} USD

**Agent's reasoning:** {{agentReleaseReasoning}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReleaseFindings"},{label:"Amount to approve (USD)",description:"Prefilled with the agent's proposed amount - adjust it before approving if you disagree.",type:"number",layout:{row:"Row_approvedAmount",columns:null},id:"Field_ApprovedAmount",key:"approvedAmountUSD",validate:{required:!0}},{label:"Your decision",values:[{label:"Approve release",value:"approve"},{label:"Deny release",value:"deny"}],type:"radio",layout:{row:"Row_release_decision",columns:null},id:"Field_ReleaseDecision",key:"releaseDecision",validate:{required:!0}},{label:"Comments",description:"Explain your decision - the agent reads this immediately if you deny the release, and it's shown again at final sign-off either way.",type:"textarea",layout:{row:"Row_release_comments",columns:null},id:"Field_ReleaseComments",key:"releaseReviewerComments"}],Od="default",Fd="payment-release-request",Ud="Camunda Cloud",Gd="8.10.0",Qd={name:"Camunda Modeler",version:"5.46.1"},$d=19,Yd={components:zd,type:Od,id:Fd,executionPlatform:Ud,executionPlatformVersion:Gd,exporter:Qd,schemaVersion:$d},Vd=[{text:`# Final compliance sign-off

A second, independent check after the case is fully resolved. Unlike the payment-release approval, this step doesn't need to know how the agent reasoned - only what actually happened - which is exactly the kind of checkpoint any orchestration approach could bolt on after the fact.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ComplianceHeading"},{text:`**Vendor:** {{vendorName}}

**Invoice number:** {{invoiceNumber}}

**PO number:** {{poNumber}}

**PO amount:** {{poAmount}} USD

**Invoice amount:** {{invoiceAmount}} {{invoiceCurrency}}

**Payment release decision:** {{releaseDecision}}

**Approved amount:** {{approvedAmountUSD}} USD

**Release reviewer comments:** {{releaseReviewerComments}}

**Final outcome:** {{caseOutcome}}

**Details:** {{caseSummary}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ComplianceFindings"},{label:"Compliance decision",values:[{label:"Confirm - case closed",value:"confirm"},{label:"Escalate for audit",value:"escalate"}],type:"radio",layout:{row:"Row_compliance_decision",columns:null},id:"Field_ComplianceDecision",key:"complianceDecision",validate:{required:!0}},{label:"Comments",type:"textarea",layout:{row:"Row_compliance_comments",columns:null},id:"Field_ComplianceComments",key:"complianceComments"}],qd="default",Hd="compliance-signoff",Zd="Camunda Cloud",Jd="8.10.0",Wd={name:"Camunda Modeler",version:"5.46.1"},Kd=19,Xd={components:Vd,type:qd,id:Hd,executionPlatform:Zd,executionPlatformVersion:Jd,exporter:Wd,schemaVersion:Kd},Je={vendorName:"Acme Office Supplies",invoiceNumber:"INV-10234",poNumber:"PO-88291",poAmount:4200,invoiceAmount:4200,invoiceCurrency:"USD",invoiceNotes:"Quarterly office supplies delivery per PO, no changes."},el=`async (job) => {
  const v = job.variables;
  const currency = v.invoiceCurrency || "USD";
  const poAmount = Number(v.poAmount);
  const notes = String(v.invoiceNotes || "");

  // Turn 1 — a non-USD invoice can't be compared to a USD purchase order
  // until it's converted. The prompt forbids estimating the rate.
  if (currency !== "USD" && v.convertedAmountUSD === undefined) {
    return {
      variables: { amount: Number(v.invoiceAmount), fromCurrency: currency },
      activateElements: [{ elementId: "ConvertCurrency" }],
    };
  }

  const invoiceUSD =
    currency === "USD" ? Number(v.invoiceAmount) : Number(v.convertedAmountUSD);
  const overage = poAmount > 0 ? (invoiceUSD - poAmount) / poAmount : 0;
  // The prompt's "the invoice notes give a reason for the extra amount". Note
  // it only asks whether a reason was given, not whether it's a good one —
  // that judgement belongs to the reviewer the next tool call pauses for.
  const documented = notes.trim().length > 0;
  const withinTolerance = Math.abs(overage) <= 0.02;
  const documentedOverage = overage > 0.02 && overage <= 0.1 && documented;

  // Turn 2 — ask for the release, or dispute the invoice. Asking is a tool
  // call like any other; the reviewer's answer comes back as its result.
  if (withinTolerance || documentedOverage) {
    if (v.releaseDecision === undefined) {
      const reasoning = withinTolerance
        ? "Invoice matches the PO within 2%."
        : "Invoice is " + (overage * 100).toFixed(1) + "% over the PO, and the notes document why.";
      return {
        variables: {
          proposedAmountUSD: invoiceUSD,
          reasoning: reasoning,
          // The diagram prefills the reviewer's form from the agent's
          // proposal; set the form's own key so the prefill lands whether or
          // not the engine evaluates the fromAi() input mapping.
          agentProposedAmountUSD: invoiceUSD,
          agentReleaseReasoning: reasoning,
          approvedAmountUSD: invoiceUSD,
        },
        activateElements: [{ elementId: "PaymentReleaseGate" }],
      };
    }

    // Approved: the inner flow releases the payment before the agent hears
    // back, so wait for the receipt rather than treating the reviewer's click
    // as the end of the story. Denied: read the reviewer's comments rather
    // than re-proposing the same amount.
    if (v.paymentReceipt !== undefined) return { completionConditionFulfilled: true };
    if (v.releaseDecision === "approve") return { activateElements: [] };
    if (v.disputeNoticeReceipt === undefined) {
      return {
        variables: {
          disputeReason:
            "Payment release denied on review: " +
            String(v.releaseReviewerComments || "no comments given") +
            ".",
        },
        activateElements: [{ elementId: "NotifyVendorDispute" }],
      };
    }
    return { completionConditionFulfilled: true };
  }

  // Outside policy — an undocumented overage, more than 10% over, or an
  // invoice under the PO. No release is proposed at all.
  if (v.disputeNoticeReceipt === undefined) {
    return {
      variables: {
        disputeReason:
          "Invoice is " +
          (overage * 100).toFixed(1) +
          "% against PO " +
          String(v.poNumber) +
          " with no documented reason in the notes.",
      },
      activateElements: [{ elementId: "NotifyVendorDispute" }],
    };
  }

  return { completionConditionFulfilled: true };
}`,nl=`async (job, { num, text, sleep, trace }) => {
  // Stands in for the HTTP connector calling api.frankfurter.app (ECB
  // reference rates). No network in a sandboxed browser demo, so use a small
  // fixed rate table — the shape of the answer is what matters here.
  const amount = num("amount");
  const from = text("fromCurrency", "USD");
  const rates = { USD: 1, EUR: 1.09, GBP: 1.27 };
  const rate = rates[from];

  await sleep(300);

  if (!rate) {
    trace("no reference rate for " + JSON.stringify(from));
    return { toolCallResult: "No ECB reference rate available for " + from + "." };
  }

  const usd = Math.round(amount * rate * 100) / 100;
  trace(amount + " " + from + " → " + usd + " USD");

  return {
    convertedAmountUSD: usd,
    toolCallResult:
      "Converted " + amount + " " + from + " to " + usd + " USD (ECB reference rate).",
  };
}`,tl=`async (job, { num, text, sleep }) => {
  // Stands in for the HTTP connector posting to the payment rail. Reachable
  // only from the approved branch of Gateway_ReleaseApproved — that is the
  // guardrail, and it is in the diagram, not in this code.
  const amount = num("approvedAmountUSD");
  const vendor = text("vendorName", "the vendor");

  await sleep(300);

  return {
    paymentReceipt: {
      vendorName: vendor,
      invoiceNumber: text("invoiceNumber", ""),
      poNumber: text("poNumber", ""),
      approvedAmountUSD: amount,
      releaseReviewerComments: text("releaseReviewerComments", ""),
      settledAt: "2026-01-01T00:00:00Z",
    },
    toolCallResult:
      "Payment of " + amount + " USD released to " + vendor + ". Receipt logged.",
  };
}`,ol=`async (job, { text, trace }) => {
  // The script task on the denied branch. Its whole job is to hand the denial
  // back to the agent as the result of its own RequestPaymentRelease call, so
  // the refusal arrives as information rather than as a failure.
  const comments = text("releaseReviewerComments", "");
  trace("reviewer denied the release");

  return {
    toolCallResult: "Payment release denied by reviewer. Comments: " + comments,
  };
}`,il=`async (job, { text, sleep }) => {
  // Stands in for the HTTP connector posting the dispute notice. An outbound
  // notification, not a payment — no human gate on this one.
  const reason = text("disputeReason", "Invoice does not match the purchase order.");

  await sleep(300);

  return {
    disputeNoticeReceipt: {
      vendorName: text("vendorName", ""),
      invoiceNumber: text("invoiceNumber", ""),
      poNumber: text("poNumber", ""),
      disputeReason: reason,
    },
    toolCallResult: "Vendor notified of dispute: " + reason,
  };
}`,rl={id:"invoice-payment",title:"Invoice payment approval agent",blurb:"A human-in-the-loop agent: the tool that releases money is a user task inside the agent's own tool loop, so approval is something the agent asks for and reasons about — and payment has exactly one incoming path, from the approved branch. A second, post-hoc sign-off outside the agent sees only what actually happened.",hero:{headline:"The agent can *ask* to pay. Only a human can *approve* it.",lede:"Camunda's human-in-the-loop agent pattern, running here on a wasm engine in your browser. Deny the release in the reviewer form and watch the agent read the denial and change course.",tagline:"Human-in-the-loop agent"},docsUrl:"https://github.com/camunda/camunda-8-tutorials/tree/main/examples/human-in-the-loop-agent",bpmn:Dd,forms:{"invoice-submit":Rd,"payment-release-request":Yd,"compliance-signoff":Xd},seed:Je,scenariosLabel:"Invoice to review",scenarios:[{label:"Clean match — invoice equals the PO",variables:Je},{label:"Documented overage — 4.5% over, with a reason",variables:{...Je,invoiceNumber:"INV-10251",invoiceAmount:4389,invoiceNotes:"Includes pre-approved rush freight surcharge agreed with procurement on 12 Jan."}},{label:"Foreign currency — EUR invoice against a USD PO",variables:{...Je,invoiceNumber:"INV-10262",invoiceAmount:3860,invoiceCurrency:"EUR",invoiceNotes:"Quarterly office supplies delivery per PO, billed in euros."}},{label:"Vague justification — 7% over, no reason given",variables:{...Je,invoiceNumber:"INV-10277",invoiceAmount:4494,invoiceNotes:"Additional items supplied."}}],scriptedAgent:el,handlers:[{elementId:"ConvertCurrency",standsInFor:"HTTP connector — api.frankfurter.app exchange rates",source:nl},{elementId:"ReleasePayment",standsInFor:"HTTP connector — accounts-payable payment rail",source:tl},{elementId:"RecordReleaseDenied",standsInFor:"script task — hand the denial back to the agent",source:ol},{elementId:"NotifyVendorDispute",standsInFor:"HTTP connector — vendor dispute notice",source:il}]},al=[Ls,Ja,ks,rl,Ss,Fs,Td],sl=Object.assign({"./learn-error-boundary/index.ts":Lr,"./learn-exclusive-gateway/index.ts":Ur,"./learn-message-correlation/index.ts":Yr,"./learn-multi-instance-parallel/index.ts":Zr,"./learn-service-task/index.ts":ea,"./learn-signal-broadcast/index.ts":ra,"./learn-timer-catch-event/index.ts":la,"./learn-user-task-form/index.ts":_a}),dl=Object.values(sl).map(e=>e.default).sort((e,n)=>e.id.localeCompare(n.id)),We=[...al,...dl];function Un(){return"/web-demo-framework/pr-preview/pr-121/"}function ll(e){const n=Un();return e.startsWith(n)?"/"+e.slice(n.length):e}function cl(e=location.pathname){const t=ll(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function ml(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function pl(e=location.search){return new URLSearchParams(e).get("view")==="compact"?"compact":"full"}function ul(e=location.search){return new URLSearchParams(e).get("autostart")==="1"}function kt(e){return`${Un()}examples/${encodeURIComponent(e)}`}const Tt="p";function gl(){const e=new URLSearchParams(location.search),n=e.get(Tt);if(!n)return!1;const t=n.replace(/[\t\n\r]/g,"");if(!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\"))return!1;e.delete(Tt);try{const o=new URL(Un(),location.href),r=new URL(t.slice(1),o);return r.origin!==location.origin?!1:(r.search=e.toString(),r.hash=location.hash,history.replaceState(null,"",r),!0)}catch{return!1}}function hl(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function Dt(){return{route:cl(),embed:ml(),view:pl(),autostart:ul()}}function bl(){const[e,n]=h.useState(Dt);return h.useEffect(()=>{const t=()=>n(Dt());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const jt={headline:"The model *runs*. The code is *yours* to edit.",lede:"Every example on this page is a real BPMN process executing in your browser on the nano WebAssembly engine — edit the model, edit the handlers, swap the LLM, and run it again.",tagline:"Runnable Camunda examples"};function yl({text:e}){return i.jsx(i.Fragment,{children:e.split(/\*([^*]+)\*/g).map((n,t)=>t%2===1?i.jsx("em",{children:n},t):i.jsx(h.Fragment,{children:n},t))})}function wl(){const{route:e,embed:n,view:t,autostart:o}=bl(),r=n&&t==="compact",s=Ht().brain,d=yr();Li(n);const c=e.kind==="example"?e.id:We[0].id,m=We.find(y=>y.id===c)??We[0],a=We.filter(y=>y.group!=="learn-bpmn"),p=We.filter(y=>y.group==="learn-bpmn"),u=y=>{hl(kt(y),{hash:location.hash})},b=m.hero??jt,g=i.jsxs(i.Fragment,{children:[!n&&i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"hero",children:[i.jsx("h1",{children:i.jsx(yl,{text:b.headline})}),b.lede&&i.jsx("p",{children:b.lede})]}),i.jsx("nav",{className:"example-picker","aria-label":"Scenario examples",children:a.map(y=>i.jsx(K,{size:"sm",variant:y.id===m.id?"default":"secondary","aria-current":y.id===m.id?"page":void 0,onClick:()=>u(y.id),children:y.title},y.id))}),p.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("h2",{className:"example-group-heading",id:"learn-bpmn-heading",children:"Learn BPMN"}),i.jsx("nav",{className:"example-picker","aria-labelledby":"learn-bpmn-heading",children:p.map(y=>i.jsx(K,{size:"sm",variant:y.id===m.id?"default":"secondary","aria-current":y.id===m.id?"page":void 0,onClick:()=>u(y.id),children:y.title},y.id))})]})]}),i.jsxs("div",{className:"example-meta",children:[!n&&m.docsUrl&&i.jsx("a",{className:"docs-link",href:m.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&i.jsx("a",{className:"open-full-page",href:kt(m.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:r?"Open the editable version ↗":"Open full page ↗"})]}),i.jsx(jr,{example:m,compact:r,autostart:o,initialBrainKind:s,initialTourId:d},m.id)]});return n?i.jsx("div",{className:`c4-ui app-shell app-embed${r?" app-compact":""}`,children:i.jsx("main",{id:"main",className:`layout layout-embed${r?" layout-compact":""}`,children:g})}):i.jsxs("div",{className:"c4-ui app-shell",children:[i.jsx(bo,{className:"topbar",logo:i.jsx("span",{className:"brand-dot","aria-hidden":!0}),appName:"Runnable Camunda examples",trailing:i.jsx("span",{className:"app-subtitle",children:b.tagline??jt.tagline})}),i.jsx("main",{id:"main",className:"layout",children:g}),i.jsx("footer",{className:"footer",children:"Running locally in your browser on the nano WebAssembly BPMN engine — no cluster, no server, no data leaving the page."})]})}gl();ao.createRoot(document.getElementById("root")).render(i.jsx(h.StrictMode,{children:i.jsx(yo,{children:i.jsx(wl,{})})}));export{he as _,vl as c};
