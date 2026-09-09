const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-js-BEOU0ddW.css","assets/bpmn-embedded-DcP4ujb9.css","assets/RuntimeDiagram-DTnJz5cT.js","assets/vendor-react-9Ma26nY1.js","assets/Viewer-D_7S4Gwm.js","assets/MonacoEditor-tKrodui4.js","assets/MonacoEditor-B3OBTlkp.css","assets/vendor-modeler-BzScQTrW.js","assets/vendor-design-system-CUrMBNMa.js","assets/vendor-design-system-BHuUzrJ2.css","assets/parser-DkgAe_kI.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-CHM9L8ia.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var lo=Object.defineProperty;var co=(e,n,t)=>n in e?lo(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var U=(e,n,t)=>co(e,typeof n!="symbol"?n+"":n,t);import{r as h,j as i,i as mo}from"./vendor-react-9Ma26nY1.js";import{B as Y,a as ae,L as qe,S as Cn,b as In,c as An,d as Tn,e as Fn,A as pe,f as ue,g as he,I as ot,C as po,h as uo,i as ho,j as bo,k as go,l as fo,T as _o,m as wo,n as dn,o as ln,p as yo,q as vo}from"./vendor-design-system-CUrMBNMa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const xo="modulepreload",Eo=function(e){return"/web-demo-framework/pr-preview/pr-121/"+e},it={},ge=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){let d=function(a){return Promise.all(a.map(p=>Promise.resolve(p).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),l=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));r=d(t.map(a=>{if(a=Eo(a),a in it)return;it[a]=!0;const p=a.endsWith(".css"),u=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const b=document.createElement("link");if(b.rel=p?"stylesheet":xo,p||(b.as="script"),b.crossOrigin="",b.href=a,l&&b.setAttribute("nonce",l),document.head.appendChild(b),p)return new Promise((f,g)=>{b.addEventListener("load",f),b.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return r.then(d=>{for(const m of d||[])m.status==="rejected"&&s(m.reason);return n().catch(s)})},ko="io.camunda.agenticai:aiagent",xe="http://www.omg.org/spec/BPMN/20100524/MODEL",No="http://camunda.org/schema/zeebe/1.0";function bn(e,n){return Array.from(e.getElementsByTagNameNS(No,n))}function Ft(e,n){return bn(e,n).filter(t=>Po(t)===e)}function Po(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===xe&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function zn(e){const n=Ft(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function rt(e){const n=Array.from(e.children).find(t=>t.namespaceURI===xe&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function at(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(o=>o.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function jt(e){const n=[],t=o=>{for(const r of Array.from(o.attributes))n.push(r.value);for(const r of Array.from(o.children))t(r)};return t(e),n.join(`
`)}function Mo(e){return Dt(jt(e))}function So(e){const n=Array.from(e.children).find(t=>t.namespaceURI===xe&&t.localName==="extensionElements");return n?Dt(jt(n)):[]}function Dt(e){const n=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,t=[],o=new Set;for(const r of e.matchAll(n)){const s=r[1];o.has(s)||(o.add(s),t.push({name:s,description:(r[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:r[3]??"string"}))}return t}function Bo(e){const n={};for(const t of Ft(e,"input")){const o=t.getAttribute("target");o&&(n[o]=t.getAttribute("source")??"")}return n}function Ro(e){return Array.from(e.getElementsByTagNameNS(xe,"adHocSubProcess")).filter(n=>(zn(n)??"").startsWith(ko))}const Co=new Set(["subProcess","adHocSubProcess","callActivity"]),Io=new Set(["adHocSubProcess","subProcess","transaction"]);function Ao(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===xe&&Io.has(n.localName))return n;n=n.parentElement}return null}function To(e,n){const t=Bo(e),o=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:zn(e),systemPrompt:at(t["data.systemPrompt.prompt"]),userPrompt:at(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(o)&&o>0?o:10,tools:n}}function Fo(e,n){var f;const t=e.getAttribute("id")??"",o=e.getAttribute("name")??t,r=Ro(e);r.length>1&&n.push({severity:"warning",elementId:r.map(g=>g.getAttribute("id")).join(", "),message:`Process "${o}" hosts ${r.length} AI Agent sub-processes (${r.map(g=>g.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const s=[],d=new Map(r.map(g=>[g,[]]));for(const g of Array.from(e.getElementsByTagName("*"))){if(g.namespaceURI!==xe||r.includes(g))continue;const E=g.getAttribute("id");if(!E)continue;const v=Ao(g),w=v&&r.includes(v)?v:null;if(w&&Co.has(g.localName)){const x=g.getAttribute("name")??E,Q=rt(g);s.push({elementId:E,label:x,jobType:"",documentation:Q,isTool:!0,compound:!0}),d.get(w).push({elementId:E,label:x,jobType:"",documentation:Q,args:So(g),compound:!0});continue}const N=zn(g);if(!N)continue;const A={elementId:E,label:g.getAttribute("name")??E,jobType:N,documentation:rt(g),isTool:w!=null};s.push(A),w&&d.get(w).push({elementId:E,label:A.label,jobType:N,documentation:A.documentation,args:Mo(g)})}const m=r.map(g=>To(g,d.get(g))),l=Array.from(e.getElementsByTagNameNS(xe,"userTask")).map(g=>{var E;return{elementId:g.getAttribute("id")??"",label:g.getAttribute("name")??g.getAttribute("id")??"",formId:((E=bn(g,"formDefinition")[0])==null?void 0:E.getAttribute("formId"))??void 0}}),a=Array.from(e.children).find(g=>g.namespaceURI===xe&&g.localName==="startEvent"),p=a?((f=bn(a,"formDefinition")[0])==null?void 0:f.getAttribute("formId"))??void 0:void 0,u=a?jo(a):void 0,b={};for(const g of Array.from(e.getElementsByTagNameNS(xe,"boundaryEvent"))){const E=g.getAttribute("id"),v=g.getAttribute("attachedToRef");E&&v&&(b[E]=v)}return{processId:t,processName:o,tasks:s,agents:m,userTasks:l,startFormId:p,startMessage:u,boundaryEventHosts:b}}function jo(e){var s;const n=Array.from(e.children).find(d=>d.namespaceURI===xe&&d.localName==="messageEventDefinition"),t=n==null?void 0:n.getAttribute("messageRef");if(!t)return;const o=Array.from(e.ownerDocument.getElementsByTagNameNS(xe,"message")).find(d=>d.getAttribute("id")===t);if(!o)return;const r=o.getAttribute("name");if(r)return{messageName:r,correlationKey:((s=bn(o,"subscription")[0])==null?void 0:s.getAttribute("correlationKey"))??"",elementId:e.getAttribute("id")??""}}function Do(e,n){const t=e.trim().replace(/^=/,"").trim(),o=t.match(/^"((?:[^"\\]|\\.)*)"$/);if(o)return Lo(o[1]);if(/^[A-Za-z_$][\w$]*$/.test(t)){const r=n[t];return r==null?"":String(r)}return t}function Lo(e){return e.replace(/\\(["'\\/nrt]|u[0-9a-fA-F]{4})/g,(n,t)=>{switch(t[0]){case"n":return`
`;case"r":return"\r";case"t":return"	";case"u":return String.fromCharCode(parseInt(t.slice(1),16));default:return t}})}function Oo(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),o=t.getElementsByTagName("parsererror")[0];if(o)throw new Error(`Invalid BPMN XML: ${o.textContent}`);const r=Array.from(t.getElementsByTagNameNS(xe,"process"));if(r.length===0)throw new Error("No <bpmn:process> in the diagram.");const s=[],d=r.map(l=>Fo(l,s));let m=n.processId?d.find(l=>l.processId===n.processId):void 0;return n.processId&&!m&&s.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${d[0].processId}".`}),m??(m=d[0]),d.length>1&&s.push({severity:"warning",message:`Diagram has ${d.length} <bpmn:process> elements (${d.map(l=>l.processId).join(", ")}); using "${m.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:d,diagnostics:s,processId:m.processId,processName:m.processName,tasks:m.tasks,agent:m.agents[0]??null,agents:d.flatMap(l=>l.agents),userTasks:m.userTasks,startFormId:m.startFormId,startMessage:m.startMessage,boundaryEventHosts:Object.assign({},...d.map(l=>l.boundaryEventHosts))}}function zo(e){return e?e.imageId?{imageId:e.imageId}:e.imageName?{imageName:e.imageName}:{}:{}}function Lt(e,n){return n?e.pixels:e.imageId??e.pixels}const $o="No image selected — pick or upload a photo to read.";function st(){return $o}function Uo(e,n){return async t=>{const o=e.resolve(n);if(!o)return st();const r=Lt(o,e.live);if(r===void 0)return st();try{return await e.read(r,t)}catch(s){return`Couldn't read the image (${s instanceof Error?s.message:String(s)}).`}}}function Vo(e,n){return async()=>{const t=e.resolve(n);if(t)return Lt(t,e.live)}}function qo(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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
  <\/script></body></html>`}function Ot(e,n={}){const{timeoutMs:t=5e3,onTrace:o,onVision:r,onImage:s}=n,d=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((m,l)=>{const a=document.createElement("iframe");a.setAttribute("sandbox","allow-scripts"),a.style.display="none",a.setAttribute("aria-hidden","true");let p=!1,u;const b=()=>{u&&clearTimeout(u),window.removeEventListener("message",g),a.remove()},f=v=>{p||(p=!0,b(),v())};function g(v){var N;if(v.source!==a.contentWindow)return;const w=v.data;if(!(!w||typeof w!="object")){if(w.kind==="ready"){const A=e.job,x=e.kind==="run-handler"?{kind:"run-handler",id:d,source:e.source,job:A,hasVision:e.hasVision}:{kind:"run-agent",id:d,source:e.source,job:A};(N=a.contentWindow)==null||N.postMessage(x,"*");return}"id"in w&&w.id!==d||(w.kind==="trace"?o==null||o(w.text):w.kind==="vision-request"?E(w.callId,r,"vision",w.prompt):w.kind==="image-request"?E(w.callId,s,"image"):w.kind==="result"?f(()=>m(w.value)):w.kind==="error"&&f(()=>l(new Error(w.message))))}}function E(v,w,N,...A){const x=Q=>{var H;return(H=a.contentWindow)==null?void 0:H.postMessage(Q,"*")};if(!w){x({kind:"helper-error",id:d,callId:v,message:`${N} helper is not available.`});return}Promise.resolve().then(()=>w(...A)).then(Q=>x({kind:"helper-result",id:d,callId:v,value:Q}),Q=>x({kind:"helper-error",id:d,callId:v,message:Q instanceof Error?Q.message:String(Q)}))}window.addEventListener("message",g),u=setTimeout(()=>{f(()=>l(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),a.srcdoc=qo(),document.body.appendChild(a)})}function zt(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function Go(e,n,t){const o=typeof t.vision=="function";return Ot({kind:"run-handler",source:e,job:zt(n),hasVision:o},{onTrace:t.trace,onVision:t.vision?r=>t.vision(r):void 0,onImage:t.image?()=>t.image():void 0})}function Ho(e,n){return Ot({kind:"run-agent",source:e,job:zt(n)})}function $t(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function Jo(e){return $t(e,"Handler code"),(n,t)=>Go(e,n,t)}function Wo(e){return $t(e,"Agent code"),n=>Ho(e,n)}function Ko(e,n,t,o){return{sleep:r=>new Promise(s=>setTimeout(s,r)),trace:r=>n({kind:"tool",text:`   ${r}`,elementId:e.elementId,turn:t}),text:(r,s="")=>{const d=e.variables[r];return typeof d=="string"?d:d==null?s:String(d)},num:(r,s=0)=>{const d=e.variables[r],m=typeof d=="number"?d:Number(d);return Number.isFinite(m)?m:s},...o?{vision:Uo(o,e.instanceKey),image:Vo(o,e.instanceKey)}:{}}}function Zo(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Yo(e,n,t,o,r){const s={},d=e.processes.flatMap(l=>l.tasks),m=new Map(d.map(l=>[l.elementId,l.label]));for(const l of d)l.compound||s[l.jobType]||(s[l.jobType]=async a=>{const p=n[a.elementId];if(!p)throw new Error(`No handler registered for ${a.elementId} (job type ${a.type})`);const u=m.get(a.elementId)??a.elementId,b=o==null?void 0:o.current;t({kind:"tool",text:`▶ ${u}`,elementId:a.elementId,turn:b});const f=await p(a,Ko(a,t,b,r));return t({kind:"vars",text:`  ↳ ${Zo(f)}`,elementId:a.elementId,result:f,turn:b}),f});return s}const Qo=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function tn(...e){const n=Object.create(null);for(const t of e)if(t)for(const o of Object.keys(t))n[o]=t[o];return n}function Ut(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function Vt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xo(e){return Vt(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function ei(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ni(e){return JSON.stringify(e).slice(1,-1)}function ti(e,n){const t=e.lastIndexOf("<",n),o=e.lastIndexOf(">",n);if(t<=o)return"text";const r=e.slice(t,n);if((r.match(/"/g)??[]).length%2===0)return"text";const d=r.lastIndexOf('"');return(r.slice(d+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function oi(e,n,t="xml"){const o=[],r=new Set;return{result:e.replace(Qo,(d,m,l)=>{const a=m.trim();if(!Object.prototype.hasOwnProperty.call(n,a))return r.has(a)||(r.add(a),o.push(a)),d;const p=n[a];if(t==="json")return ni(p);const u=ti(e,l);return u==="feel-literal"?ei(p):u==="attribute"?Xo(p):Vt(p)}),unresolved:o}}function ii(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0,boundaryEventHosts:{}}}function ri(e,n={},t=e.bpmn,o={}){const r=[],s=tn(e.templates,o),{result:d,unresolved:m}=oi(t,s,"xml");for(const w of m)r.push({severity:"warning",message:`Template placeholder "{{${w}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let l;try{l=Oo(d)}catch(w){return r.push({severity:"error",message:w instanceof Error?w.message:String(w)}),{resolvedBpmn:d,model:ii(),handlers:{},forms:{},diagnostics:r,hasErrors:!0}}r.push(...l.diagnostics);const a=l.processes.flatMap(w=>w.tasks),p=new Map(e.handlers.map(w=>[w.elementId,w.source])),u={};for(const w of a){if(w.compound)continue;const N=n[w.elementId]??p.get(w.elementId);if(N===void 0){r.push({severity:"error",elementId:w.elementId,jobType:w.jobType,message:`No handler for "${w.label}" (${w.elementId}, job type "${w.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{u[w.elementId]=Jo(N)}catch(A){r.push({severity:"error",elementId:w.elementId,jobType:w.jobType,message:`"${w.label}" (${w.elementId}): handler code didn't compile — ${A instanceof Error?A.message:String(A)}`})}}const b=new Set(a.map(w=>w.elementId)),f=new Set([...p.keys(),...Object.keys(n)]);for(const w of f)b.has(w)||r.push({severity:"error",elementId:w,message:`Handler "${w}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const g={},E=e.forms??{},v=(w,N)=>{if(!w)return;const A=E[w];A?g[w]=A:r.push({severity:"error",formId:w,message:`${N} references form "${w}", which has no matching schema.`})};for(const w of l.processes){v(w.startFormId,`The start event of process "${w.processName}"`);for(const N of w.userTasks)v(N.formId,`User task "${N.label}" (${N.elementId})`)}return{resolvedBpmn:d,model:l,handlers:u,forms:g,diagnostics:r,hasErrors:r.some(w=>w.severity==="error")}}function ai(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let o=n;o<e.length;o++)if(e[o]==="{")t++;else if(e[o]==="}"&&(t--,t===0))try{const r=JSON.parse(e.slice(n,o+1));return typeof r=="object"&&r!==null&&!Array.isArray(r)?r:null}catch{return null}return null}function jn(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function dt(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function lt(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:dt(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,o=Array.isArray(t)?t:Object.values(e).find(s=>Array.isArray(s))??[],r=[];for(const s of o)if(typeof s=="string")s.trim()&&r.push({name:s.trim(),args:{}});else if(s&&typeof s=="object"){const d=s,m=d.name??d.tool??d.id??d.function;typeof m=="string"&&m.trim()&&r.push({name:m.trim(),args:dt(d)})}return r}function si(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function ct(e){const n=e.args.length?e.args.map(o=>`      ${o.name} (${o.type}) — ${o.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function di(e,n,t){const o=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",r=t[0]??e.tools[0],s=r!=null&&r.args.length?`{${r.args.map(d=>`"${d.name}": "…"`).join(", ")}}`:"{}";return n?`${o}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${t.map(ct).join(`

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

${t.map(ct).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(r==null?void 0:r.elementId)??"ToolName"}", "arguments": ${s}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function li(e,n,t,o,r=[],s=[],d=!1){const m=e.userPrompt||"Carry out your task.",l=Object.entries(n).filter(([,p])=>typeof p=="string"&&p.trim().length>0).map(([p,u])=>`  ${p}: ${String(u)}`),a=[m,l.length?`Case data:
${l.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return a.push(t.length?`${d?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),a.push(o.length?`Tools still available:
${o.map(p=>`  ${p.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),s.length&&a.push(`Your last reply was rejected: ${s.join("; ")}. Do not repeat it.`),r.length&&a.push(`You reported that you are done, but ${r.join(" and ")} ${r.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${r.length===1?"it":"them"} now.`),a.push("Which tool should run next? Reply with JSON only."),a.join(`

`)}async function ci(e,n,t,o,r,s){let d="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:s});const m=await e(o,r,l=>{d+=l,n({kind:"llm",text:`${jn(d)} ▍`,key:t,pending:!0,turn:s})});return n({kind:"llm",text:jn(m||d)||"(empty reply)",key:t,pending:!1,turn:s}),m}function mi(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function pi(e,n,t){const o={},r=new Map,s=new Map;for(const{tool:d,args:m}of e){const l={};for(const a of d.args){const p=m[a.name];if(!(p!=null&&p!=="")){n({kind:"error",text:`🤖 ${d.elementId}: model supplied no value for "${a.name}"`,turn:t,elementId:d.elementId});continue}const b=r.get(a.name);if(b!==void 0&&b!==d.elementId){n({kind:"error",text:`🤖 argument name collision on "${a.name}": both ${b} and ${d.elementId} declare it — ${b} already claimed it this turn, ${d.elementId}'s value is dropped`,turn:t,elementId:d.elementId});continue}const f=mi(a.type,p);if(!f.ok){n({kind:"error",text:`🤖 ${d.elementId}: "${a.name}" is declared as ${a.type} but the model supplied ${JSON.stringify(p)} — rejected, not passed through`,turn:t,elementId:d.elementId});continue}o[a.name]=f.value,l[a.name]=f.value,r.set(a.name,d.elementId)}s.set(d.elementId,l)}return{variablesOut:o,forHistory:s}}function ui(e,n,t,o={}){const{maxNewTokens:r=384,allowRepeats:s=!1,allowMultiToolTurns:d=!1,turnRef:m,requiredTools:l=[],maxEarlyDoneNudges:a=1,maxUnproductiveTurns:p=3}=o;let u=0;const b=new Set,f=[];let g=0,E=[],v=[];return async w=>{const N=w.variables,A=N.toolCallResult;A!==void 0&&f.length&&(f[f.length-1]=`${f[f.length-1]} → ${jn(JSON.stringify(A),160)}`);let x=0;for(;;){const H=await Q();if(H)return H;if(x+=1,x>=p)return t({kind:"error",text:`🤖 ${x} turns in a row activated nothing — completing the agent. The model has lost the reply format; whatever it has already run stands.`,turn:u}),{completionConditionFulfilled:!0}}async function Q(){if(u+=1,m&&(m.current=u),u>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:u}),{completionConditionFulfilled:!0};const H=s?e.tools:e.tools.filter(M=>!b.has(M.elementId));if(H.length===0)return t({kind:"agent",text:"🤖 every tool has run — completing the agent",turn:u}),{completionConditionFulfilled:!0};const oe=[{role:"system",content:di(e,d,H)},{role:"user",content:li(e,N,f,H,E,v,s)}];E=[],v=[];let Me;try{Me=await ci(n,t,`llm-turn-${u}`,oe,r,u)}catch(M){return t({kind:"error",text:`LLM call failed: ${M instanceof Error?M.message:String(M)} — completing the agent.`,turn:u}),{completionConditionFulfilled:!0}}const fe=ai(Me);if(si(fe)&&lt(fe).length===0){const M=l.filter(L=>!b.has(L));return M.length&&g<a?(g+=1,E=M,t({kind:"agent",text:`🤖 model says it is done, but ${M.join(", ")} hasn't run — asking once more`,turn:u}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:u}),{completionConditionFulfilled:!0})}const Ae=lt(fe);if(Ae.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:u}),v=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const ee=[],_e=[],le=[];for(const M of Ae){const L=e.tools.find(O=>O.elementId===M.name);if(!L){_e.push(M.name);continue}if(!s&&b.has(L.elementId)){le.push(L.elementId);continue}ee.push({tool:L,args:M.args})}if(_e.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${_e.join(", ")} — nothing activated`,turn:u}),le.length&&t({kind:"error",text:`🤖 model asked to re-run ${le.join(", ")} — skipped (already run)`,turn:u}),ee.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:u}),v=[..._e.length?[`${_e.join(", ")} ${_e.length===1?"is":"are"} not a real tool`]:[],...le.length?[`${le.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:I,forHistory:C}=pi(ee,t,u);for(const{tool:M}of ee)b.add(M.elementId),f.push(`- ${M.elementId}(${JSON.stringify(C.get(M.elementId))})`);for(const{tool:M}of ee)t({kind:"agent",text:`🤖 calling ${M.elementId}`,turn:u,elementId:M.elementId,args:C.get(M.elementId)??{}});return{activateElements:ee.map(M=>({elementId:M.tool.elementId})),variables:I}}}}function hi(e,n,t,o={}){const r=new Map(e.map(s=>[s.elementId,ui(s,n,t,o)]));return async s=>{const d=r.get(s.elementId);if(!d)throw new Error(`No agent host registered for "${s.elementId}"`);return d(s)}}class Dn{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,mt.unregister(this),n}free(){const n=this.__destroy_into_raw();c.__wbg_testengine_free(n,0)}activateJobs(n,t,o,r){let s,d;try{const f=c.__wbindgen_add_to_stack_pointer(-16),g=F(n,c.__wbindgen_export,c.__wbindgen_export2),E=T,v=F(r,c.__wbindgen_export,c.__wbindgen_export2),w=T;c.testengine_activateJobs(f,this.__wbg_ptr,g,E,t,o,v,w);var m=y().getInt32(f+0,!0),l=y().getInt32(f+4,!0),a=y().getInt32(f+8,!0),p=y().getInt32(f+12,!0),u=m,b=l;if(p)throw u=0,b=0,q(a);return s=u,d=b,V(u,b)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(s,d,1)}}advanceTime(n){let t,o;try{const p=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_advanceTime(p,this.__wbg_ptr,n);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),m=y().getInt32(p+12,!0),l=r,a=s;if(m)throw l=0,a=0,q(d);return t=l,o=a,V(l,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,o,1)}}assignUserTask(n,t,o){let r,s;try{const b=c.__wbindgen_add_to_stack_pointer(-16),f=F(n,c.__wbindgen_export,c.__wbindgen_export2),g=T,E=F(t,c.__wbindgen_export,c.__wbindgen_export2),v=T;c.testengine_assignUserTask(b,this.__wbg_ptr,f,g,E,v,o);var d=y().getInt32(b+0,!0),m=y().getInt32(b+4,!0),l=y().getInt32(b+8,!0),a=y().getInt32(b+12,!0),p=d,u=m;if(a)throw p=0,u=0,q(l);return r=p,s=u,V(p,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,s,1)}}broadcastSignal(n,t){let o,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16),b=F(n,c.__wbindgen_export,c.__wbindgen_export2),f=T,g=F(t,c.__wbindgen_export,c.__wbindgen_export2),E=T;c.testengine_broadcastSignal(u,this.__wbg_ptr,b,f,g,E);var s=y().getInt32(u+0,!0),d=y().getInt32(u+4,!0),m=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),a=s,p=d;if(l)throw a=0,p=0,q(m);return o=a,r=p,V(a,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,r,1)}}cancelInstance(n){let t,o;try{const p=c.__wbindgen_add_to_stack_pointer(-16),u=F(n,c.__wbindgen_export,c.__wbindgen_export2),b=T;c.testengine_cancelInstance(p,this.__wbg_ptr,u,b);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),m=y().getInt32(p+12,!0),l=r,a=s;if(m)throw l=0,a=0,q(d);return t=l,o=a,V(l,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,o,1)}}completeAgentJob(n,t,o){let r,s;try{const b=c.__wbindgen_add_to_stack_pointer(-16),f=F(n,c.__wbindgen_export,c.__wbindgen_export2),g=T,E=F(t,c.__wbindgen_export,c.__wbindgen_export2),v=T,w=F(o,c.__wbindgen_export,c.__wbindgen_export2),N=T;c.testengine_completeAgentJob(b,this.__wbg_ptr,f,g,E,v,w,N);var d=y().getInt32(b+0,!0),m=y().getInt32(b+4,!0),l=y().getInt32(b+8,!0),a=y().getInt32(b+12,!0),p=d,u=m;if(a)throw p=0,u=0,q(l);return r=p,s=u,V(p,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,s,1)}}completeJob(n,t){let o,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16),b=F(n,c.__wbindgen_export,c.__wbindgen_export2),f=T,g=F(t,c.__wbindgen_export,c.__wbindgen_export2),E=T;c.testengine_completeJob(u,this.__wbg_ptr,b,f,g,E);var s=y().getInt32(u+0,!0),d=y().getInt32(u+4,!0),m=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),a=s,p=d;if(l)throw a=0,p=0,q(m);return o=a,r=p,V(a,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,r,1)}}completeUserTask(n,t){let o,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16),b=F(n,c.__wbindgen_export,c.__wbindgen_export2),f=T,g=F(t,c.__wbindgen_export,c.__wbindgen_export2),E=T;c.testengine_completeUserTask(u,this.__wbg_ptr,b,f,g,E);var s=y().getInt32(u+0,!0),d=y().getInt32(u+4,!0),m=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),a=s,p=d;if(l)throw a=0,p=0,q(m);return o=a,r=p,V(a,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,r,1)}}correlateMessage(n,t,o){let r,s;try{const b=c.__wbindgen_add_to_stack_pointer(-16),f=F(n,c.__wbindgen_export,c.__wbindgen_export2),g=T,E=F(t,c.__wbindgen_export,c.__wbindgen_export2),v=T,w=F(o,c.__wbindgen_export,c.__wbindgen_export2),N=T;c.testengine_correlateMessage(b,this.__wbg_ptr,f,g,E,v,w,N);var d=y().getInt32(b+0,!0),m=y().getInt32(b+4,!0),l=y().getInt32(b+8,!0),a=y().getInt32(b+12,!0),p=d,u=m;if(a)throw p=0,u=0,q(l);return r=p,s=u,V(p,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,s,1)}}createInstance(n,t,o){let r,s;try{const b=c.__wbindgen_add_to_stack_pointer(-16),f=F(n,c.__wbindgen_export,c.__wbindgen_export2),g=T,E=F(t,c.__wbindgen_export,c.__wbindgen_export2),v=T;c.testengine_createInstance(b,this.__wbg_ptr,f,g,E,v,wi(o)?Number.MAX_SAFE_INTEGER:o>>0);var d=y().getInt32(b+0,!0),m=y().getInt32(b+4,!0),l=y().getInt32(b+8,!0),a=y().getInt32(b+12,!0),p=d,u=m;if(a)throw p=0,u=0,q(l);return r=p,s=u,V(p,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,s,1)}}debugClear(){c.testengine_debugClear(this.__wbg_ptr)}debugCreateInstance(n,t,o){let r,s;try{const b=c.__wbindgen_add_to_stack_pointer(-16),f=F(n,c.__wbindgen_export,c.__wbindgen_export2),g=T,E=F(t,c.__wbindgen_export,c.__wbindgen_export2),v=T,w=F(o,c.__wbindgen_export,c.__wbindgen_export2),N=T;c.testengine_debugCreateInstance(b,this.__wbg_ptr,f,g,E,v,w,N);var d=y().getInt32(b+0,!0),m=y().getInt32(b+4,!0),l=y().getInt32(b+8,!0),a=y().getInt32(b+12,!0),p=d,u=m;if(a)throw p=0,u=0,q(l);return r=p,s=u,V(p,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,s,1)}}get debugIsPaused(){return c.testengine_debugIsPaused(this.__wbg_ptr)!==0}debugResume(){let n,t;try{const a=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_debugResume(a,this.__wbg_ptr);var o=y().getInt32(a+0,!0),r=y().getInt32(a+4,!0),s=y().getInt32(a+8,!0),d=y().getInt32(a+12,!0),m=o,l=r;if(d)throw m=0,l=0,q(s);return n=m,t=l,V(m,l)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}debugStep(){let n,t;try{const a=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_debugStep(a,this.__wbg_ptr);var o=y().getInt32(a+0,!0),r=y().getInt32(a+4,!0),s=y().getInt32(a+8,!0),d=y().getInt32(a+12,!0),m=o,l=r;if(d)throw m=0,l=0,q(s);return n=m,t=l,V(m,l)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}deploy(n){let t,o;try{const p=c.__wbindgen_add_to_stack_pointer(-16),u=F(n,c.__wbindgen_export,c.__wbindgen_export2),b=T;c.testengine_deploy(p,this.__wbg_ptr,u,b);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),m=y().getInt32(p+12,!0),l=r,a=s;if(m)throw l=0,a=0,q(d);return t=l,o=a,V(l,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,o,1)}}deployForm(n){let t,o;try{const p=c.__wbindgen_add_to_stack_pointer(-16),u=F(n,c.__wbindgen_export,c.__wbindgen_export2),b=T;c.testengine_deployForm(p,this.__wbg_ptr,u,b);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),m=y().getInt32(p+12,!0),l=r,a=s;if(m)throw l=0,a=0,q(d);return t=l,o=a,V(l,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,o,1)}}deployResource(n,t){let o,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16),b=F(n,c.__wbindgen_export,c.__wbindgen_export2),f=T,g=F(t,c.__wbindgen_export,c.__wbindgen_export2),E=T;c.testengine_deployResource(u,this.__wbg_ptr,b,f,g,E);var s=y().getInt32(u+0,!0),d=y().getInt32(u+4,!0),m=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),a=s,p=d;if(l)throw a=0,p=0,q(m);return o=a,r=p,V(a,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,r,1)}}events(){let n,t;try{const a=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_events(a,this.__wbg_ptr);var o=y().getInt32(a+0,!0),r=y().getInt32(a+4,!0),s=y().getInt32(a+8,!0),d=y().getInt32(a+12,!0),m=o,l=r;if(d)throw m=0,l=0,q(s);return n=m,t=l,V(m,l)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}failJob(n,t,o){let r,s;try{const b=c.__wbindgen_add_to_stack_pointer(-16),f=F(n,c.__wbindgen_export,c.__wbindgen_export2),g=T,E=F(o,c.__wbindgen_export,c.__wbindgen_export2),v=T;c.testengine_failJob(b,this.__wbg_ptr,f,g,t,E,v);var d=y().getInt32(b+0,!0),m=y().getInt32(b+4,!0),l=y().getInt32(b+8,!0),a=y().getInt32(b+12,!0),p=d,u=m;if(a)throw p=0,u=0,q(l);return r=p,s=u,V(p,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,s,1)}}migrate(n,t,o){let r,s;try{const b=c.__wbindgen_add_to_stack_pointer(-16),f=F(n,c.__wbindgen_export,c.__wbindgen_export2),g=T,E=F(t,c.__wbindgen_export,c.__wbindgen_export2),v=T,w=F(o,c.__wbindgen_export,c.__wbindgen_export2),N=T;c.testengine_migrate(b,this.__wbg_ptr,f,g,E,v,w,N);var d=y().getInt32(b+0,!0),m=y().getInt32(b+4,!0),l=y().getInt32(b+8,!0),a=y().getInt32(b+12,!0),p=d,u=m;if(a)throw p=0,u=0,q(l);return r=p,s=u,V(p,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,s,1)}}modify(n,t,o){let r,s;try{const b=c.__wbindgen_add_to_stack_pointer(-16),f=F(n,c.__wbindgen_export,c.__wbindgen_export2),g=T,E=F(t,c.__wbindgen_export,c.__wbindgen_export2),v=T,w=F(o,c.__wbindgen_export,c.__wbindgen_export2),N=T;c.testengine_modify(b,this.__wbg_ptr,f,g,E,v,w,N);var d=y().getInt32(b+0,!0),m=y().getInt32(b+4,!0),l=y().getInt32(b+8,!0),a=y().getInt32(b+12,!0),p=d,u=m;if(a)throw p=0,u=0,q(l);return r=p,s=u,V(p,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,s,1)}}constructor(){const n=c.testengine_new();return this.__wbg_ptr=n,mt.register(this,this.__wbg_ptr,this),this}get now(){return c.testengine_now(this.__wbg_ptr)}reset(){c.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,o;try{const p=c.__wbindgen_add_to_stack_pointer(-16),u=F(n,c.__wbindgen_export,c.__wbindgen_export2),b=T;c.testengine_resolveIncident(p,this.__wbg_ptr,u,b);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),m=y().getInt32(p+12,!0),l=r,a=s;if(m)throw l=0,a=0,q(d);return t=l,o=a,V(l,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,o,1)}}setVariables(n,t,o){let r,s;try{const b=c.__wbindgen_add_to_stack_pointer(-16),f=F(n,c.__wbindgen_export,c.__wbindgen_export2),g=T,E=F(t,c.__wbindgen_export,c.__wbindgen_export2),v=T;c.testengine_setVariables(b,this.__wbg_ptr,f,g,E,v,o);var d=y().getInt32(b+0,!0),m=y().getInt32(b+4,!0),l=y().getInt32(b+8,!0),a=y().getInt32(b+12,!0),p=d,u=m;if(a)throw p=0,u=0,q(l);return r=p,s=u,V(p,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,s,1)}}snapshot(){let n,t;try{const a=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_snapshot(a,this.__wbg_ptr);var o=y().getInt32(a+0,!0),r=y().getInt32(a+4,!0),s=y().getInt32(a+8,!0),d=y().getInt32(a+12,!0),m=o,l=r;if(d)throw m=0,l=0,q(s);return n=m,t=l,V(m,l)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(n,t,1)}}throwError(n,t,o){let r,s;try{const b=c.__wbindgen_add_to_stack_pointer(-16),f=F(n,c.__wbindgen_export,c.__wbindgen_export2),g=T,E=F(t,c.__wbindgen_export,c.__wbindgen_export2),v=T,w=F(o,c.__wbindgen_export,c.__wbindgen_export2),N=T;c.testengine_throwError(b,this.__wbg_ptr,f,g,E,v,w,N);var d=y().getInt32(b+0,!0),m=y().getInt32(b+4,!0),l=y().getInt32(b+8,!0),a=y().getInt32(b+12,!0),p=d,u=m;if(a)throw p=0,u=0,q(l);return r=p,s=u,V(p,u)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(r,s,1)}}tickNow(n){let t,o;try{const p=c.__wbindgen_add_to_stack_pointer(-16);c.testengine_tickNow(p,this.__wbg_ptr,n);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),m=y().getInt32(p+12,!0),l=r,a=s;if(m)throw l=0,a=0,q(d);return t=l,o=a,V(l,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,o,1)}}unassignUserTask(n){let t,o;try{const p=c.__wbindgen_add_to_stack_pointer(-16),u=F(n,c.__wbindgen_export,c.__wbindgen_export2),b=T;c.testengine_unassignUserTask(p,this.__wbg_ptr,u,b);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),m=y().getInt32(p+12,!0),l=r,a=s;if(m)throw l=0,a=0,q(d);return t=l,o=a,V(l,a)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(t,o,1)}}updateRetries(n,t){let o,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16),b=F(n,c.__wbindgen_export,c.__wbindgen_export2),f=T;c.testengine_updateRetries(u,this.__wbg_ptr,b,f,t);var s=y().getInt32(u+0,!0),d=y().getInt32(u+4,!0),m=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),a=s,p=d;if(l)throw a=0,p=0,q(m);return o=a,r=p,V(a,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,r,1)}}updateUserTask(n,t){let o,r;try{const u=c.__wbindgen_add_to_stack_pointer(-16),b=F(n,c.__wbindgen_export,c.__wbindgen_export2),f=T,g=F(t,c.__wbindgen_export,c.__wbindgen_export2),E=T;c.testengine_updateUserTask(u,this.__wbg_ptr,b,f,g,E);var s=y().getInt32(u+0,!0),d=y().getInt32(u+4,!0),m=y().getInt32(u+8,!0),l=y().getInt32(u+12,!0),a=s,p=d;if(l)throw a=0,p=0,q(m);return o=a,r=p,V(a,p)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export3(o,r,1)}}}Symbol.dispose&&(Dn.prototype[Symbol.dispose]=Dn.prototype.free);function bi(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_bb96b2010945f0bc:function(n,t){throw new Error(V(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const o=V(n,t);return gi(o)},__wbindgen_object_drop_ref:function(n){q(n)}}}}const mt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>c.__wbg_testengine_free(e,1));function gi(e){en===Ie.length&&Ie.push(Ie.length+1);const n=en;return en=Ie[n],Ie[n]=e,n}function fi(e){e<1028||(Ie[e]=en,en=e)}let Ve=null;function y(){return(Ve===null||Ve.buffer.detached===!0||Ve.buffer.detached===void 0&&Ve.buffer!==c.memory.buffer)&&(Ve=new DataView(c.memory.buffer)),Ve}function V(e,n){return vi(e>>>0,n)}let Xe=null;function pn(){return(Xe===null||Xe.byteLength===0)&&(Xe=new Uint8Array(c.memory.buffer)),Xe}function _i(e){return Ie[e]}let Ie=new Array(1024).fill(void 0);Ie.push(void 0,null,!0,!1);let en=Ie.length;function wi(e){return e==null}function F(e,n,t){if(t===void 0){const m=nn.encode(e),l=n(m.length,1)>>>0;return pn().subarray(l,l+m.length).set(m),T=m.length,l}let o=e.length,r=n(o,1)>>>0;const s=pn();let d=0;for(;d<o;d++){const m=e.charCodeAt(d);if(m>127)break;s[r+d]=m}if(d!==o){d!==0&&(e=e.slice(d)),r=t(r,o,o=d+e.length*3,1)>>>0;const m=pn().subarray(r+d,r+o),l=nn.encodeInto(e,m);d+=l.written,r=t(r,o,d,1)>>>0}return T=d,r}function q(e){const n=_i(e);return fi(e),n}let un=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});un.decode();const yi=2146435072;let Pn=0;function vi(e,n){return Pn+=n,Pn>=yi&&(un=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),un.decode(),Pn=n),un.decode(pn().subarray(e,e+n))}const nn=new TextEncoder;"encodeInto"in nn||(nn.encodeInto=function(e,n){const t=nn.encode(e);return n.set(t),{read:e.length,written:t.length}});let T=0,c;function xi(e,n){return c=e.exports,Ve=null,Xe=null,c}async function Ei(e,n){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const o=await e.arrayBuffer();return await WebAssembly.instantiate(o,n)}else{const o=await WebAssembly.instantiate(e,n);return o instanceof WebAssembly.Instance?{instance:o,module:e}:o}function t(o){switch(o){case"basic":case"cors":case"default":return!0}return!1}}async function ki(e){if(c!==void 0)return c;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/web-demo-framework/pr-preview/pr-121/assets/nanobpmn_engine_bg-DRNrIVE8.wasm",import.meta.url));const n=bi();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:o}=await Ei(await e,n);return xi(t)}let cn=null;function Ni(e){return cn||(cn=ki(void 0).then(()=>{}).catch(n=>{throw cn=null,n})),cn}function re(e){return JSON.parse(e)}class Pi{constructor(n){U(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return re(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,o,r){return JSON.parse(this.engine.activateJobs(n,t,o,r))}completeJob(n,t){return re(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:o,...r}=t??{};return re(this.engine.completeAgentJob(n,JSON.stringify(o??{}),JSON.stringify(r??{})))}failJob(n,t,o){return re(this.engine.failJob(n,t,o))}throwError(n,t,o){return re(this.engine.throwError(n,t,o))}updateRetries(n,t){return re(this.engine.updateRetries(n,t))}resolveIncident(n){return re(this.engine.resolveIncident(n))}setVariables(n,t,o){return re(this.engine.setVariables(n,t||"{}",o))}broadcastSignal(n,t){return re(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return re(this.engine.cancelInstance(n))}modify(n,t,o){return re(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(o??[])))}completeUserTask(n,t){return re(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,o){return re(this.engine.assignUserTask(n,t,o))}unassignUserTask(n){return re(this.engine.unassignUserTask(n))}updateUserTask(n,t){return re(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,o){return re(this.engine.correlateMessage(n,t,o||"{}"))}advanceTime(n){return re(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return re(this.engine.snapshot())}free(){this.engine.free()}}async function Mi(e){return await Ni(),new Pi(new Dn)}class qt extends Error{constructor(t,o){super(t);U(this,"retries");this.name="JobFailure",this.retries=o==null?void 0:o.retries}}function Si(e,n=[]){if(e.instances.filter(r=>!r.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const o=new Set(n);return e.jobs.some(r=>!o.has(r.jobType))?"unhandledJobs":e.userTasks.some(r=>r.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function Bi(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(o=>o.jobType))].filter(o=>!t.has(o)).sort()}async function Ri(e,n,t){let o;try{const r=await n(t);o=JSON.stringify(r??{})}catch(r){const s=r instanceof qt&&r.retries!==void 0?r.retries:Math.max(0,t.retries-1),d=r instanceof Error?r.message:String(r);e.failJob(t.key,s,d);return}e.completeJob(t.key,o)}async function Ci(e,n,t){let o;try{o=await n(t),JSON.stringify(o)}catch(r){const s=r instanceof qt&&r.retries!==void 0?r.retries:Math.max(0,t.retries-1),d=r instanceof Error?r.message:String(r);e.failJob(t.key,s,d);return}e.completeAgentJob(t.key,o)}async function Ii(e,n,t={}){const o=t.maxJobsPerActivation??10,r=t.lockTimeoutMs??3e4,s=t.worker??"bojtos",d=t.agents??{};for(const b of Object.keys(d))if(b in n)throw new Error(`dispatchRound: job type "${b}" is registered as both a worker and an agent — register it as exactly one`);const m=[];for(const[b,f]of Object.entries(n))for(const g of e.activateJobs(b,o,r,s))m.push({handler:f,job:g});const l=[];for(const[b,f]of Object.entries(d))for(const g of e.activateJobs(b,o,r,s))l.push({handler:f,job:g});for(const{handler:b,job:f}of m)await Ri(e,b,f);for(const{handler:b,job:f}of l)await Ci(e,b,f);const a=e.snapshot(),p=m.length+l.length;if(p>0)return{snapshot:a,handled:p};const u=[...Object.keys(n),...Object.keys(d)];return{snapshot:a,handled:p,reason:Si(a,u),unhandled:Bi(a,u)}}function Ai({bpmn:e}){const n=h.useRef(null),[t,o]=h.useState("loading"),[r,s]=h.useState(null),[d,m]=h.useState([]),[l,a]=h.useState(null),p=h.useRef(e),u=h.useRef(0),b=h.useRef(null),f=h.useRef(new Map),g=h.useCallback((I,C)=>{f.current.set(I,C)},[]),E=h.useCallback(I=>f.current.get(I),[]),v=h.useCallback((I,C)=>{const M=I.deploy(C);return p.current=C,f.current.clear(),m(M.processIds),a(null),s(null),M.processIds},[]);h.useEffect(()=>{let I=!1;return o("loading"),m([]),a(null),s(null),Mi().then(C=>{if(I){C.free();return}try{v(C,e)}catch(M){C.free(),s(String(M)),o("error");return}n.current=C,o("ready")}).catch(C=>{I||(s(String(C)),o("error"))}),()=>{var C;I=!0,(C=n.current)==null||C.free(),n.current=null,f.current.clear()}},[e]);const w=h.useCallback(I=>{const C=n.current;if(!C)return null;try{const M=I(C);return a(M),s(null),M}catch(M){return s(String(M)),null}},[]),N=h.useCallback((I,C)=>w(M=>M.createInstance(I,C)),[w]),A=h.useCallback((I,C)=>w(M=>M.completeUserTask(I,C)),[w]),x=h.useCallback(I=>w(C=>C.advanceTime(I)),[w]),Q=h.useCallback((I,C)=>w(M=>M.broadcastSignal(I,C)),[w]);function H(I,C){const[M]=I.activateJobs(C,1,3e4,"manual-control");if(!M)throw new Error(`No waiting job of type "${C}" to resolve.`);return M}const oe=h.useCallback((I,C)=>w(M=>{const L=H(M,I);return M.completeJob(L.key,C)}),[w]),Me=h.useCallback((I,C,M)=>w(L=>{const O=H(L,I);return L.throwError(O.key,C,M)}),[w]),fe=h.useCallback((I,C,M)=>w(L=>L.correlateMessage(I,C,M)),[w]),Ae=h.useCallback(async(I,C)=>{const M=n.current;if(!M)return null;const L=u.current,O=Ii(M,I,C);b.current=O;try{const we=await O;return n.current!==M||u.current!==L?null:(a(we.snapshot),s(null),we)}catch(we){return n.current!==M||u.current!==L||(a(M.snapshot()),s(String(we))),null}finally{b.current===O&&(b.current=null)}},[]),ee=h.useCallback(async()=>{var I;await((I=b.current)==null?void 0:I.catch(()=>{}))},[]),_e=h.useCallback(async()=>{await ee();const I=n.current;if(I){u.current++;try{I.reset(),v(I,p.current)}catch(C){s(String(C))}}},[v,ee]),le=h.useCallback(async I=>{await ee();const C=n.current;if(!C)return null;u.current++;try{return C.reset(),v(C,I)}catch(M){return s(String(M)),null}},[v,ee]);return{phase:t,error:r,processIds:d,snapshot:l,createInstance:N,stepWorkers:Ae,completeUserTask:A,advanceTime:x,broadcastSignal:Q,completeJobManually:oe,throwJobError:Me,correlateMessage:fe,reset:_e,redeploy:le,setRunImage:g,getRunImage:E}}const Ti="web-demo-framework:height",Fi="web-demo-framework:ready";function ji(){return{type:Fi}}const Di="web-demo-framework:request-height";function Li(e){return{type:Ti,height:Math.ceil(e)}}const pt="embed-height-auto";function Oi(e=document){return Math.max(e.documentElement.offsetHeight,e.body.scrollHeight)}function zi(e){h.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(pt);let t=-1;const o=(d=!1)=>{const m=Oi();!d&&Math.abs(m-t)<2||(t=m,window.parent.postMessage(Li(m),"*"))},r=d=>{if(d.source!==window.parent)return;const m=d.data;!m||m.type!==Di||o(!0)};window.addEventListener("message",r),o();const s=new ResizeObserver(()=>o());return s.observe(n),()=>{s.disconnect(),window.removeEventListener("message",r),n.classList.remove(pt)}},[e])}function $i(e){const n=h.useRef(!1);h.useEffect(()=>{!e||n.current||typeof window>"u"||window.parent===window||(n.current=!0,window.parent.postMessage(ji(),"*"))},[e])}function Ui(e,n){return e.slice(n)}function Vi(e,n,t,o){const r=e.snapshot,s="⏸ waiting for a human — complete the task below to continue",d=r.userTasks.some(m=>m.state==="Created");if(e.handled>0){const m=r.activeElementIds.map(t),l=n.length?` via ${n.map(a=>`${t(a.from)} → ${t(a.to)}`).join(", ")}`:"";return r.completedInstances>=1?{kind:"done",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${l} — ✅ process instance completed`}:d?{kind:"human",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${l} — ${s}`}:{kind:"step",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${l} — now at ${m.length?m.join(", "):"—"}`}}switch(e.reason){case"completed":return{kind:"done",text:"✅ process instance completed"};case"userTasks":return{kind:"human",text:s};case"timers":return{kind:"step",text:"⏱ waiting on a timer — advance the clock to continue"};case"messages":return{kind:"step",text:"✉ waiting on a message — correlate it to continue"};case"signals":return{kind:"step",text:"📶 waiting on a signal — broadcast it to continue"};case"incidents":return{kind:"error",text:"A job failed — incident on the diagram"};case"unhandledJobs":{const m=e.unhandled??[];return o&&m.length>0&&m.every(l=>o.has(l))?{kind:"human",text:s}:{kind:"error",text:`⏭ waiting on job type(s) with no worker registered: ${m.join(", ")}`}}case"idle":return{kind:"step",text:"Nothing to step — no instance is running."};default:return{kind:"step",text:e.reason?`Step blocked on an unrecognized reason: ${e.reason}`:"Nothing to step — no instance is running."}}}const qi="the Scripted or Endpoint brain";async function gn(e=qi){const n=navigator.gpu;if(!n)return`This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick ${e}.`;let t;try{t=await n.requestAdapter()}catch(o){return`WebGPU adapter request failed (${o instanceof Error?o.message:String(o)}). Try ${e} instead.`}return t?null:`This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick ${e} instead.`}const Gi=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function Gt(e){return Ln.get(e)??{}}const Ln=new Map;async function Hi(){if(Ln.size>0)return;const{prebuiltAppConfig:e}=await ge(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)Ln.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const vn=Gi.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...Gt(e.id)})),Ht=vn[0].id;async function Ji(){return await Hi(),vn.map(e=>({...e,...Gt(e.id)}))}function Jt(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function Wi(e,n=Jt()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function Ki(e){try{const{hasModelInCache:n}=await ge(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function fn(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function ut(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class mn{constructor(){U(this,"kind","browser");U(this,"model",null);U(this,"engine",null);U(this,"worker",null);U(this,"generation",0);U(this,"chat",async(n,t=512,o)=>{var s,d;const r=this.engine;if(!r||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const m=await r.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let l="";for await(const a of m){const p=((d=(s=a.choices[0])==null?void 0:s.delta)==null?void 0:d.content)??"";p&&(l+=p,o==null||o(p))}return l}catch(m){const l=m instanceof Error?m.message:String(m);throw fn(l)?(this.teardown(),new Error(`The in-browser model stopped: ${ut()}`)):m}})}async connect(n=Ht,t){var l,a;const o=await gn();if(o)throw new Error(o);if(this.engine&&this.model===n)return n;const r=++this.generation,s=p=>{r===this.generation&&(t==null||t({progress:p.progress??0,text:p.text??""}))};this.teardown();let d,m;try{const{CreateWebWorkerMLCEngine:p}=await ge(async()=>{const{CreateWebWorkerMLCEngine:u}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:u}},[]);m=new Worker(new URL("/web-demo-framework/pr-preview/pr-121/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),d=await p(m,n,{initProgressCallback:s})}catch(p){if(m==null||m.terminate(),r!==this.generation)throw new Error("cancelled");const u=p instanceof Error?p.message:String(p);if(fn(u))throw new Error(`Couldn't load ${n} in the browser (${u}). ${ut()}`);const b=(a=(l=vn.find(f=>f.id===n))==null?void 0:l.requiredFeatures)==null?void 0:a.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${u}). `+(b?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(r!==this.generation)throw d.unload().catch(()=>{}),m==null||m.terminate(),new Error("cancelled");return this.engine=d,this.worker=m??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const $n="http://localhost:11434/v1",_n=e=>e==="localhost"||e==="127.0.0.1"||e==="::1"||e==="[::1]";function Wt(){var e;return _n(((e=globalThis.location)==null?void 0:e.hostname)??"")}function Mn(e){try{return _n(new URL(Un(e)).hostname)}catch{return!1}}function wn(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(o=>(o=globalThis.location)==null?void 0:o.origin)()??""}){let r;try{r=new URL(Un(e)).hostname}catch{return null}return!_n(r)||_n(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function Un(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class ht extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class bt{constructor(n=$n,t="",o=""){U(this,"kind","endpoint");U(this,"baseUrl");U(this,"model",null);U(this,"models",[]);U(this,"apiKey");U(this,"requestedModel");U(this,"chat",async(n,t=512,o)=>{var a,p,u;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const r=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!r.ok||!r.body){const b=await r.text().catch(()=>"");throw new Error(`chat/completions HTTP ${r.status} ${r.statusText}${b?` — ${b.slice(0,300)}`:""}`)}const s=r.body.getReader(),d=new TextDecoder;let m="",l="";for(;;){const{value:b,done:f}=await s.read();if(f)break;m+=d.decode(b,{stream:!0});let g;for(;(g=m.indexOf(`
`))>=0;){const E=m.slice(0,g).trim();if(m=m.slice(g+1),!E.startsWith("data:"))continue;const v=E.slice(5).trim();if(v==="[DONE]")continue;let w;try{w=JSON.parse(v)}catch{continue}w.model&&(this.model=w.model);const N=(a=w.choices)==null?void 0:a[0],A=((p=N==null?void 0:N.delta)==null?void 0:p.content)??((u=N==null?void 0:N.message)==null?void 0:u.content)??"";A&&(l+=A,o==null||o(A))}}return l});this.baseUrl=Un(n),this.apiKey=t.trim(),this.requestedModel=o.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(o){const r=wn(this.baseUrl);throw new Error(r??`Can't reach ${this.baseUrl} (${o instanceof Error?o.message:String(o)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new ht(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(o=>o.id).filter(o=>!!o),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof ht&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(o=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${o instanceof Error?o.message:String(o)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const o=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${o?` — ${o.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}const gt="gemini-nano";function yn(){const e=globalThis.LanguageModel;return typeof(e==null?void 0:e.create)=="function"&&typeof e.availability=="function"?e:null}function Zi(){return yn()!==null}async function Kt(){const e=yn();if(!e)return"This browser has no built-in AI model. Chrome's Prompt API (Gemini Nano) needs Chrome 138+ on desktop Windows 10/11, macOS 13+, Linux or a Chromebook Plus. Use the Scripted, In-browser (WebGPU) or API endpoint brain instead.";let n;try{n=await e.availability()}catch(t){return`Chrome couldn't report on its built-in model (${t instanceof Error?t.message:String(t)}).`}return n==="unavailable"?"Chrome exposes the built-in AI API here, but Gemini Nano can't run on this device. Chrome requires ~22 GB free on the volume holding your Chrome profile, and either a GPU with more than 4 GB of VRAM or 16 GB of RAM with 4+ CPU cores. Check chrome://on-device-internals for the details.":null}class ft{constructor(){U(this,"kind","chrome");U(this,"model",null);U(this,"warm",null);U(this,"connecting",null);U(this,"chat",async(n,t,o)=>{if(!this.model)throw new Error("ChromeBrain.chat called before connect()");const r=yn();if(!r)throw new Error("Chrome's built-in AI API went away.");const s=n.filter(l=>l.role==="system"),d=n.filter(l=>l.role!=="system"),m=await r.create(s.length?{initialPrompts:s}:void 0);try{const l=m.promptStreaming(d).getReader();let a="";for(;;){const{done:p,value:u}=await l.read();if(p)break;u&&(a+=u,o==null||o(u))}return a}finally{m.destroy()}})}async connect(n){const t=await Kt();if(t)throw new Error(t);const o=yn();this.dispose();const r=new AbortController;this.connecting=r;try{this.warm=await o.create({signal:r.signal,monitor:s=>{s.addEventListener("downloadprogress",d=>{n==null||n({progress:d.loaded,text:"Downloading Gemini Nano"})})}})}catch(s){if(r.signal.aborted)throw new Error("cancelled");const d=s instanceof Error?s.message:String(s);throw new Error(`Chrome couldn't start its built-in model (${d}). The first run downloads Gemini Nano and must be triggered by a click — press Connect again, and check chrome://on-device-internals if it keeps failing.`)}finally{this.connecting=null}return this.model=gt,gt}cancelConnect(){var n;(n=this.connecting)==null||n.abort()}dispose(){var n,t;(n=this.connecting)==null||n.abort(),this.connecting=null,(t=this.warm)==null||t.destroy(),this.warm=null,this.model=null}}const Yi=[{id:"onnx-community/Florence-2-base-ft",label:"Florence-2 base",downloadLabel:"~0.4 GB"},{id:"onnx-community/Florence-2-large-ft",label:"Florence-2 large (higher quality)",downloadLabel:"~1.6 GB"}],Zt=Yi.map(e=>({...e,label:`${e.label} (${e.downloadLabel})`})),Yt=Zt[0].id,Qi="<OCR>",_t="UNKNOWN (scripted brain — connect the in-browser model to read a photo)";function Xi(e,n){if(e)return typeof e=="function"?e(n):e[n]}class er{constructor(n){U(this,"kind","scripted-vision");U(this,"model",null);U(this,"read",async(n,t,o)=>{const r=typeof n=="string"?Xi(this.lookup,n)??_t:_t;return o==null||o(r),r});this.lookup=n}dispose(){}}function nr(e){return new er(e)}class wt{constructor(){U(this,"kind","browser-vision");U(this,"model",null);U(this,"modelHandle",null);U(this,"processor",null);U(this,"loadImage",null);U(this,"generation",0);U(this,"read",async(n,t,o)=>{const r=this.modelHandle,s=this.processor,d=this.loadImage;if(!r||!s||!d||!this.model)throw new Error("BrowserVisionBrain.read called before connect()");const m=t&&t.startsWith("<")?t:Qi,l=await d(n),a=s.construct_prompts(m),p=await s(l,a),u=await r.generate({...p,max_new_tokens:512,num_beams:1,do_sample:!1}),b=s.batch_decode(u,{skip_special_tokens:!1})[0],f=s.post_process_generation(b,m,l.size),g=tr(f,m);return o==null||o(g),g})}async connect(n=Yt,t){var m,l;const o=await gn("the scripted-vision fallback");if(o)throw new Error(o);if(this.modelHandle&&this.model===n)return n;const r=++this.generation,s=a=>{r===this.generation&&(t==null||t({progress:(a.progress??0)/100,text:a.file?`${a.status??"loading"} ${a.file}`:a.status??""}))};this.teardown();let d;try{const{Florence2ForConditionalGeneration:a,AutoProcessor:p,load_image:u}=await ge(async()=>{const{Florence2ForConditionalGeneration:g,AutoProcessor:E,load_image:v}=await import("./transformers.web-D4adwrl9.js");return{Florence2ForConditionalGeneration:g,AutoProcessor:E,load_image:v}},[]),b=await a.from_pretrained(n,{dtype:"fp32",device:"webgpu",progress_callback:s}),f=await p.from_pretrained(n);d={model:b,processor:f,loadImage:u}}catch(a){if(r!==this.generation)throw new Error("cancelled");const p=a instanceof Error?a.message:String(a);throw new Error(`Couldn't load ${n} in the browser (${p}). Try the smaller Florence-2 base model, check your connection, or use the scripted-vision fallback.`)}if(r!==this.generation)throw Promise.resolve((l=(m=d.model).dispose)==null?void 0:l.call(m)).catch(()=>{}),new Error("cancelled");return this.modelHandle=d.model,this.processor=d.processor,this.loadImage=d.loadImage,this.model=n,n}teardown(){var t;const n=this.modelHandle;this.modelHandle=null,this.processor=null,this.loadImage=null,this.model=null,Promise.resolve((t=n==null?void 0:n.dispose)==null?void 0:t.call(n)).catch(()=>{})}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}function tr(e,n){const t=e[n];if(typeof t=="string")return t.trim();if(t&&typeof t=="object"){const o=t.labels;return Array.isArray(o)?o.join(" ").trim():JSON.stringify(t)}return""}function or(){const[e,n]=h.useState("scripted"),[t,o]=h.useState("idle"),[r,s]=h.useState(null),[d,m]=h.useState(null),[l,a]=h.useState(null),[p,u]=h.useState(null),[b,f]=h.useState(null),[g,E]=h.useState(null),[v,w]=h.useState(null),[N,A]=h.useState(Ht),[x,Q]=h.useState(Wt()?$n:""),[H,oe]=h.useState(""),[Me,fe]=h.useState([]),[Ae,ee]=h.useState("idle"),[_e,le]=h.useState(null),[I,C]=h.useState(""),[M,L]=h.useState(null),O=h.useRef(null),[we,Ge]=h.useState("scripted-vision"),[He,Se]=h.useState("idle"),[Je,ke]=h.useState(null),[be,We]=h.useState(Yt),[on,Le]=h.useState(null),[Oe,Ee]=h.useState(null),[Ke,xn]=h.useState(null),[rn,Be]=h.useState(null),$=h.useRef(null),X=h.useRef(!1),an=h.useRef(0),Te=h.useCallback(B=>async(...G)=>{try{return await B.chat(...G)}catch(j){const Z=j instanceof Error?j.message:String(j);throw B instanceof mn&&fn(Z)&&(L(null),m(null),o("error"),s(Z)),j}},[]),Re=h.useCallback(B=>async(...G)=>{try{return await B.read(...G)}catch(j){const Z=j instanceof Error?j.message:String(j);throw fn(Z)&&(Be(null),Le(null),Se("error"),ke(Z)),j}},[]);h.useEffect(()=>{gn().then(B=>{f(B),u(B===null)}),Kt().then(w),gn("the scripted-vision fallback").then(B=>{xn(B),X.current||(X.current=!0,Ge(B===null?"browser-vision":"scripted-vision"))})},[]),h.useEffect(()=>{let B=!1;return E(null),Ki(N).then(G=>{B||E(G)}),()=>{B=!0}},[N]),h.useEffect(()=>()=>{var B;return(B=O.current)==null?void 0:B.dispose()},[]),h.useEffect(()=>()=>{var B;return(B=$.current)==null?void 0:B.dispose()},[]);const Fe=h.useCallback(B=>{n(B),o("idle"),s(null),m(null),a(null),L(null)},[]),Ze=h.useCallback(B=>{var G,j;X.current=!0,(G=$.current)==null||G.cancelConnect(),(j=$.current)==null||j.dispose(),$.current=null,Ge(B),Se("idle"),ke(null),Le(null),Ee(null),Be(null)},[]),D=h.useCallback(()=>{var B;(B=O.current)==null||B.dispose(),O.current=null,L(null),m(null)},[]),se=h.useCallback(()=>{const B=O.current;(B instanceof mn||B instanceof ft)&&B.cancelConnect(),D(),o("idle"),a(null),s(null)},[D]),je=h.useCallback(async()=>{const B=++an.current,G=()=>B!==an.current;if(!x.trim()){fe([]),oe(""),ee("idle"),le(null);return}const j=wn(x);if(j){fe([]),oe(""),ee("error"),le(j);return}ee("loading"),le(null);const Z=new bt(x,I);try{const ce=await Z.listModels();if(G())return;fe(ce),ee("ready"),oe($e=>$e&&ce.includes($e)?$e:ce[0]??"")}catch(ce){if(G())return;fe([]),oe(""),ee("error"),le(ce instanceof Error?ce.message:String(ce))}finally{Z.dispose()}},[x,I]),Ce=h.useCallback(async()=>{var B,G;if(e==="scripted"){L(null),o("ready");return}if(e==="endpoint"){const j=wn(x);if(j){D(),s(j),o("error");return}}o("connecting"),s(null),a(null);try{if(e==="browser"){const j=O.current instanceof mn?O.current:new mn;O.current&&O.current!==j&&O.current.dispose(),O.current=j;const Z=await j.connect(N,a);m(Z),L(()=>Te(j)),E(!0)}else if(e==="chrome"){(B=O.current)==null||B.dispose();const j=new ft;O.current=j;const Z=await j.connect(a);w(null),m(Z),L(()=>Te(j))}else{(G=O.current)==null||G.dispose();const j=new bt(x,I,H);O.current=j;const Z=await j.connect();m(Z),L(()=>Te(j))}o("ready")}catch(j){const Z=j instanceof Error?j.message:String(j);if(Z==="cancelled")return;s(Z),o("error"),L(null)}finally{a(null)}},[e,N,x,H,I,D,Te]),ze=h.useCallback(()=>{var B;(B=$.current)==null||B.dispose(),$.current=null,Be(null),Le(null)},[]),En=h.useCallback(()=>{var B;(B=$.current)==null||B.cancelConnect(),ze(),Se("idle"),Ee(null),ke(null)},[ze]),ye=h.useCallback(async()=>{if(we==="scripted-vision"){ze(),Se("ready"),ke(null);return}Se("connecting"),ke(null),Ee(null);try{const B=$.current instanceof wt?$.current:new wt;$.current&&$.current!==B&&$.current.dispose(),$.current=B;const G=await B.connect(be,Ee);Le(G),Be(()=>Re(B)),Se("ready")}catch(B){const G=B instanceof Error?B.message:String(B);if(G==="cancelled")return;ke(G),Se("error"),Be(null),Le(null)}finally{Ee(null)}},[we,be,ze,Re]);return{kind:e,setKind:Fe,status:t,error:r,modelInUse:d,progress:l,webgpu:p,webgpuReason:b,browserModelCached:g,chromeAiReason:v,cancelConnect:se,browserModel:N,setBrowserModel:A,endpointUrl:x,setEndpointUrl:Q,endpointModel:H,setEndpointModel:oe,endpointModels:Me,endpointModelsStatus:Ae,endpointModelsError:_e,listEndpointModels:je,apiKey:I,setApiKey:C,connect:Ce,chat:M,visionKind:we,setVisionKind:Ze,visionStatus:He,visionError:Je,visionModel:be,setVisionModel:We,visionModelInUse:on,visionProgress:Oe,visionWebgpuReason:Ke,connectVision:ye,cancelVisionConnect:En,vision:rn}}const On="#s=",ir=["scripted","browser","chrome","endpoint"];function rr(e){return typeof e=="string"&&ir.includes(e)}function ar(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,o={};return rr(t.brain)&&(o.brain=t.brain),o}}catch{}return{}}function Qt(e=location.hash){if(!e.startsWith(On))return{};let n;try{n=decodeURIComponent(e.slice(On.length))}catch{return{}}return ar(n)}function sr(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":On+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function dr(e){const n={...Qt(),...e},t=sr(n),o=new URL(location.href);o.hash=t,history.replaceState(history.state,"",o)}const yt=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"chrome",label:"Chrome built-in",hint:"Gemini Nano, built into Chrome. Chrome owns the weights — no download from this page, no API key."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server: a local Ollama, or a remote provider with an API key."}],lr=[{mode:"ollama",label:"Ollama (local)"},{mode:"remote",label:"Provider URL + key"}],vt=[{kind:"scripted-vision",label:"Scripted",hint:"No model. The example's known plate is returned — deterministic and offline."},{kind:"browser-vision",label:"In-browser (WebGPU)",hint:"Reads the photo with a vision model on your GPU. First run downloads weights."}];function cr({brain:e,showText:n=!0,showVision:t=!1}){return i.jsxs("div",{className:"brain",children:[n&&i.jsx(mr,{brain:e}),n&&t&&i.jsx("hr",{className:"brain-divider"}),t&&i.jsx(pr,{brain:e})]})}function mr({brain:e}){const n=yt.find(v=>v.kind===e.kind),t=yt.filter(v=>v.kind!=="chrome"||Zi()),o=wn(e.endpointUrl),r=Wt(),s=r&&Mn(e.endpointUrl)?"ollama":"remote",d=v=>{Mn(v)!==Mn(e.endpointUrl)&&e.setApiKey(""),e.setEndpointUrl(v)},m=v=>{v!==s&&d(v==="ollama"?$n:"")},[l,a]=h.useState(vn);h.useEffect(()=>{Ji().then(a)},[]);const{kind:p,endpointUrl:u,apiKey:b,listEndpointModels:f}=e;h.useEffect(()=>{if(p!=="endpoint"||o)return;const v=setTimeout(()=>void f(),400);return()=>clearTimeout(v)},[p,u,b,o,f]);const g=l.find(v=>v.id===e.browserModel),E=g?Wi(g,Jt()):null;return i.jsxs("div",{className:"brain-section",children:[i.jsxs("div",{className:"brain-modes",children:[i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Agent brain",children:t.map(v=>i.jsx(Y,{size:"sm",variant:e.kind===v.kind?"default":"secondary","aria-pressed":e.kind===v.kind,onClick:()=>e.setKind(v.kind),children:v.label},v.kind))}),i.jsxs("div",{className:"brain-status",children:[e.status==="ready"&&e.kind!=="scripted"&&i.jsx(ae,{variant:"success",className:"brain-status-badge",children:e.modelInUse??"connected"}),e.status==="connecting"&&i.jsx(ae,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.status==="error"&&i.jsx(ae,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(qe,{htmlFor:"browser-model",children:"Model"}),i.jsxs(Cn,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[i.jsx(In,{id:"browser-model",children:i.jsx(An,{})}),i.jsx(Tn,{children:l.map(v=>i.jsx(Fn,{value:v.id,children:v.label},v.id))})]}),e.browserModelCached===!0&&i.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&i.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"No WebGPU in this browser"}),i.jsx(he,{children:e.webgpuReason})]}),e.webgpu!==!1&&E&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"This model may not fit in GPU memory"}),i.jsx(he,{children:E})]})]}),e.kind==="chrome"&&i.jsxs("div",{className:"brain-config",children:[i.jsx("p",{className:"field-hint",children:"Nothing to configure: Chrome downloads and manages Gemini Nano itself, so the first Connect may fetch it once and later visits reuse it. Prompts never leave your machine. It's a very small model — expect it to follow the tool-calling format less reliably than an endpoint model."}),e.chromeAiReason&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"Chrome's built-in model isn't available here"}),i.jsx(he,{children:e.chromeAiReason})]})]}),e.kind==="endpoint"&&i.jsxs("div",{className:"brain-config",children:[r?i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Endpoint provider",children:lr.map(v=>i.jsx(Y,{size:"sm",variant:s===v.mode?"default":"secondary","aria-pressed":s===v.mode,disabled:e.status==="connecting",onClick:()=>m(v.mode),children:v.label},v.mode))}):i.jsxs("p",{className:"field-hint",children:["This page isn't served from ",i.jsx("code",{children:"localhost"}),", so a local Ollama isn't offered — it only accepts requests from a page on localhost. Point this at a remote OpenAI-compatible provider, or open this page at ",i.jsx("code",{children:"http://localhost"})," to use Ollama."]}),i.jsxs("div",{className:"field",children:[i.jsx(qe,{htmlFor:"endpoint-url",children:"Endpoint"}),i.jsx(ot,{id:"endpoint-url",value:e.endpointUrl,placeholder:"https://api.openai.com/v1",onChange:v=>d(v.target.value),disabled:e.status==="connecting"}),s==="ollama"?i.jsxs("p",{className:"field-hint",children:["Ollama allows ",i.jsx("code",{children:"localhost"})," origins out of the box; set"," ",i.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}):i.jsxs("p",{className:"field-hint",children:["The base URL of any OpenAI-compatible provider — it must serve"," ",i.jsx("code",{children:"/models"})," and ",i.jsx("code",{children:"/chat/completions"}),". Calls go straight from this browser to that host."]}),o&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"A local server won't work from this URL"}),i.jsx(he,{children:o})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(qe,{htmlFor:"endpoint-model",children:"Model"}),i.jsxs("div",{className:"endpoint-model-row",children:[i.jsxs(Cn,{value:e.endpointModel,onValueChange:e.setEndpointModel,disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||e.endpointModels.length===0,children:[i.jsx(In,{id:"endpoint-model",className:"endpoint-model-select",children:i.jsx(An,{placeholder:e.endpointModelsStatus==="loading"?"Loading models…":e.endpointModelsStatus==="idle"?"Enter an endpoint above":e.endpointModelsStatus==="error"?"No models — check the endpoint":e.endpointModels.length===0?"No models served":"Select a model"})}),i.jsx(Tn,{children:e.endpointModels.map(v=>i.jsx(Fn,{value:v,children:v},v))})]}),i.jsx(Y,{size:"sm",variant:"secondary",onClick:()=>void e.listEndpointModels(),disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||e.endpointUrl.trim()===""||o!==null,children:e.endpointModelsStatus==="loading"?"Refreshing…":"Refresh"})]}),i.jsxs("p",{className:"field-hint",children:["Fetched from the endpoint's ",i.jsx("code",{children:"/models"}),". Tiny models (e.g. SmolLM2) usually can't follow the tool-calling format — prefer ",i.jsx("code",{children:"llama3.2:3b"}),", ",i.jsx("code",{children:"qwen2.5"})," or larger."]}),e.endpointModelsStatus==="error"&&!o&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"Couldn't list models"}),i.jsx(he,{children:e.endpointModelsError})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(qe,{htmlFor:"endpoint-key",children:s==="ollama"?"API key (optional)":"API key"}),i.jsx(ot,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:v=>e.setApiKey(v.target.value),disabled:e.status==="connecting"}),i.jsx("p",{className:"field-hint",children:s==="ollama"?"A local Ollama ignores this — leave it blank.":"Sent as a bearer token to the endpoint above, from this browser only. It's held in memory for this tab, never stored or logged, and cleared if the endpoint moves between a local and a remote host."})]})]}),e.kind!=="scripted"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(Y,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting"||e.kind==="chrome"&&e.chromeAiReason!==null||e.kind==="endpoint"&&(e.endpointUrl.trim()===""||e.endpointModel===""||e.endpointModelsStatus==="loading"||o!==null),children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&(e.kind==="browser"||e.kind==="chrome")&&i.jsx(Y,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.progress&&i.jsx("div",{className:"brain-progress",role:"progressbar","aria-valuenow":Math.round(e.progress.progress*100),"aria-valuemin":0,"aria-valuemax":100,children:i.jsx("div",{className:"brain-progress-bar",style:{width:`${Math.round(e.progress.progress*100)}%`}})}),e.error&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"Couldn't connect"}),i.jsx(he,{children:e.error})]})]})}function pr({brain:e}){const n=vt.find(t=>t.kind===e.visionKind);return i.jsxs("div",{className:"brain-section brain-vision",children:[i.jsx(qe,{children:"Vision (reads the image)"}),i.jsxs("div",{className:"brain-modes",children:[i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Vision brain",children:vt.map(t=>i.jsx(Y,{size:"sm",variant:e.visionKind===t.kind?"default":"secondary","aria-pressed":e.visionKind===t.kind,onClick:()=>e.setVisionKind(t.kind),children:t.label},t.kind))}),i.jsxs("div",{className:"brain-status",children:[e.visionStatus==="ready"&&e.visionKind==="browser-vision"&&i.jsx(ae,{variant:"success",className:"brain-status-badge",children:e.visionModelInUse??"connected"}),e.visionStatus==="connecting"&&i.jsx(ae,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.visionStatus==="error"&&i.jsx(ae,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.visionKind==="scripted-vision"&&e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"No WebGPU in this browser"}),i.jsx(he,{children:e.visionWebgpuReason})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(qe,{htmlFor:"vision-model",children:"Model"}),i.jsxs(Cn,{value:e.visionModel,onValueChange:e.setVisionModel,disabled:e.visionStatus==="connecting",children:[i.jsx(In,{id:"vision-model",children:i.jsx(An,{})}),i.jsx(Tn,{children:Zt.map(t=>i.jsx(Fn,{value:t.id,children:t.label},t.id))})]}),i.jsx("p",{className:"field-hint",children:"Connecting downloads the weights once (size shown above), then caches them — every token is read on your GPU, no server."})]}),e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"No WebGPU in this browser"}),i.jsx(he,{children:e.visionWebgpuReason})]})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(Y,{size:"sm",onClick:()=>void e.connectVision(),disabled:e.visionStatus==="connecting",children:e.visionStatus==="ready"?"Reconnect":"Connect"}),e.visionStatus==="connecting"&&i.jsx(Y,{size:"sm",variant:"secondary",onClick:e.cancelVisionConnect,children:"Cancel"}),e.visionProgress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.visionProgress.progress*100),"% —"," ",e.visionProgress.text]})]}),e.visionError&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"Couldn't connect the vision brain"}),i.jsx(he,{children:e.visionError})]})]})}function ur({imageInput:e,value:n,onSelect:t,disabled:o=!1}){const[r,s]=h.useState(null),[d,m]=h.useState(!1),l=h.useRef(null),a=h.useId(),p=h.useId(),u=h.useCallback(g=>{s(URL.createObjectURL(g)),t({imageName:g.name,pixels:g})},[t]);h.useEffect(()=>{if(r)return()=>URL.revokeObjectURL(r)},[r]);const b=h.useCallback(g=>{const E=g==null?void 0:g[0];E&&E.type.startsWith("image/")&&u(E)},[u]),f=(n==null?void 0:n.imageId)!=null?e.seedImages.find(g=>g.id===n.imageId):void 0;return i.jsxs("div",{className:"image-input",children:[e.label&&i.jsx("p",{className:"field-hint",children:e.label}),i.jsx("p",{className:"image-input-label",id:a,children:"Seed photos"}),i.jsx("div",{className:"image-gallery",role:"group","aria-labelledby":a,children:e.seedImages.map(g=>{const E=(n==null?void 0:n.imageId)===g.id;return i.jsxs("button",{type:"button","aria-pressed":E,className:`image-thumb${E?" image-thumb--selected":""}`,disabled:o,title:g.label??g.id,onClick:()=>{s(null),l.current&&(l.current.value=""),t({imageId:g.id,pixels:g.file})},children:[i.jsx("img",{src:g.thumb??g.file,alt:g.label??g.id}),g.label&&i.jsx("span",{children:g.label})]},g.id)})}),i.jsx("label",{className:"image-input-label",htmlFor:p,children:"Or upload your own photo"}),i.jsxs("div",{className:`image-drop${d?" image-drop--over":""}`,onDragOver:g=>{g.preventDefault(),o||m(!0)},onDragLeave:()=>m(!1),onDrop:g=>{g.preventDefault(),m(!1),o||b(g.dataTransfer.files)},children:[i.jsx("input",{ref:l,id:p,type:"file",accept:"image/*",disabled:o,onChange:g=>b(g.target.files)}),i.jsx("p",{className:"field-hint",children:"Drag a photo here, or pick one. Uploading a photo the model has never seen is the proof this runs for real — nothing leaves your browser."})]}),(r||f)&&i.jsxs("div",{className:"image-preview",children:[i.jsx("img",{src:r??(f==null?void 0:f.file),alt:r?(n==null?void 0:n.imageName)??"uploaded photo":(f==null?void 0:f.label)??(f==null?void 0:f.id)??"selected photo"}),i.jsx("span",{className:"field-hint",children:r?`Uploaded: ${(n==null?void 0:n.imageName)??"your photo"}`:`Selected: ${(f==null?void 0:f.label)??(f==null?void 0:f.id)}`}),i.jsx("button",{type:"button",className:"image-clear-btn",disabled:o,onClick:()=>{s(null),l.current&&(l.current.value=""),t(null)},children:"Clear"})]})]})}function Xt(e){return typeof e=="object"&&e!==null}function Ml(e){const n=new Set,t=o=>{Xt(o)&&(typeof o.key=="string"&&n.add(o.key),Array.isArray(o.components)&&o.components.forEach(t))};return t(e),n}function hr(e){const n={},t=o=>{Xt(o)&&(typeof o.key=="string"&&"defaultValue"in o&&(n[o.key]=o.defaultValue??""),Array.isArray(o.components)&&o.components.forEach(t))};return t(e),n}const br="wdf:section:v2:";function eo(e){return br+e}function xt(e){try{const n=window.localStorage.getItem(eo(e));return n==="1"?!0:n==="0"?!1:void 0}catch{return}}function gr(e,n){try{window.localStorage.setItem(eo(e),n?"1":"0")}catch{}}function Vn(e,n=!0){const[t,o]=h.useState(()=>xt(e)??n);h.useEffect(()=>{o(xt(e)??n)},[e,n]);const r=h.useCallback(s=>{o(s),gr(e,s)},[e]);return[t,r]}function De({sectionId:e,title:n,description:t,defaultOpen:o=!0,className:r,children:s,...d}){const[m,l]=Vn(e,o);return i.jsx(po,{className:["panel",r].filter(Boolean).join(" "),"data-tour":d["data-tour"],children:i.jsxs(uo,{open:m,onOpenChange:l,children:[i.jsxs(ho,{className:"panel-trigger",children:[i.jsxs("span",{className:"panel-trigger-text",children:[i.jsx("span",{className:"panel-title",children:n}),t!=null&&i.jsx("span",{className:"panel-desc",children:t})]}),i.jsx(bo,{className:"panel-chevron","aria-hidden":!0})]}),i.jsx(go,{children:i.jsx(fo,{children:s})})]})})}function fr(e){return e.entries!==void 0}function _r(e){const n=[];let t=null;for(const o of e)o.turn!==void 0?t&&t.turn===o.turn?t.entries.push(o):(t={turn:o.turn,entries:[o]},n.push(t)):(t=null,n.push(o));return n}function Et(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function wr({activation:e,result:n,labelFor:t}){const o=e.elementId??"";return i.jsxs("div",{className:"timeline-tool",children:[i.jsxs("div",{className:"timeline-tool-head",children:[i.jsx(ae,{variant:"info",children:"tool"}),i.jsx("strong",{children:t(o)||o}),i.jsx("code",{children:o})]}),e.args!==void 0&&Object.keys(e.args).length>0&&i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"arguments"}),i.jsx("code",{children:Et(e.args)})]}),i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"returned"}),i.jsx("code",{children:n?Et(n.result):"— waiting for the job to complete —"})]})]})}function yr({group:e,labelFor:n}){const t=e.entries.find(a=>a.kind==="llm"),o=e.entries.filter(a=>a.kind==="agent"&&a.elementId),r=e.entries.filter(a=>a.kind==="vars"&&a.elementId),s=e.entries.filter(a=>a.kind==="agent"&&!a.elementId),d=e.entries.filter(a=>a.kind==="error"),m=new Set(o.map(a=>a.elementId)),l=e.entries.filter(a=>a.kind==="tool"||a.kind==="vars"&&a.elementId&&!m.has(a.elementId)).sort((a,p)=>a.id-p.id);return i.jsxs("div",{className:"timeline-turn",children:[i.jsxs("div",{className:"timeline-turn-head",children:[i.jsxs(ae,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&i.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&i.jsx("blockquote",{className:"timeline-reply",children:t.text}),s.map(a=>i.jsx("div",{className:"timeline-note",children:a.text},a.id)),o.map(a=>i.jsx(wr,{activation:a,result:r.find(p=>p.elementId===a.elementId),labelFor:n},a.id)),l.map(a=>i.jsxs("div",{className:`log-line log-${a.kind}`,children:[a.pending?"⏳ ":"",a.text]},a.id)),d.map(a=>i.jsxs("div",{className:"timeline-error",children:["⚠ ",a.text]},a.id))]})}function vr({log:e,elementStats:n=[],incidents:t=[],labelFor:o=d=>d,variables:r,hasAgent:s=!1}){const d=h.useMemo(()=>_r(e),[e]),[m,l]=h.useState(!1),[a,p]=Vn("engine-view",!1),u=h.useRef(null);h.useEffect(()=>{const f=u.current;f&&(f.scrollTop=f.scrollHeight)},[d]);const b=()=>{var E;const f={log:e.map(({id:v,...w})=>w),elementStats:n,incidents:t},g=JSON.stringify(f,null,2);(E=navigator.clipboard)!=null&&E.writeText&&navigator.clipboard.writeText(g).then(()=>{l(!0),setTimeout(()=>l(!1),1500)}).catch(()=>{})};return i.jsxs(De,{sectionId:"activity",className:"grow activity-card",title:s?"Agent activity":"Activity",description:s?"Agent turns, model replies, and tool calls — read top to bottom as a story.":"Every step the engine took — read top to bottom as a story.",children:[i.jsx("div",{className:"timeline-toolbar",children:i.jsx(Y,{variant:"secondary",size:"sm",onClick:b,children:m?"Copied!":"Copy run as JSON"})}),i.jsx("div",{className:"timeline",ref:u,children:d.length===0?i.jsx("div",{className:"log-empty",children:"Press Run or Step to start."}):d.map(f=>fr(f)?i.jsx(yr,{group:f,labelFor:o},`turn-${f.turn}-${f.entries[0].id}`):i.jsxs("div",{className:`log-line log-${f.kind}`,children:[f.pending?"⏳ ":"",f.text]},f.id))}),r,(n.length>0||t.length>0)&&i.jsxs("details",{className:"engine-view",open:a,onToggle:f=>p(f.currentTarget.open),children:[i.jsxs("summary",{children:["Element completion",t.length>0&&` · ${t.length} incident${t.length===1?"":"s"}`]}),i.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&i.jsxs("div",{className:"timeline-stats",children:[i.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),i.jsx("ul",{children:n.filter(f=>f.completed>0||(f.active??0)>0).map(f=>i.jsxs("li",{children:[i.jsx("code",{children:o(f.elementId)||f.elementId})," ","completed ",f.completed,f.active?`, ${f.active} active`:""]},f.elementId))})]}),t.length>0&&i.jsxs("div",{className:"timeline-incidents",children:[i.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),i.jsx("ul",{children:t.map((f,g)=>i.jsxs("li",{children:[i.jsx("code",{children:o(f.elementId)||f.elementId})," —"," ",f.reason]},`${f.elementId}-${g}`))})]})]})]})]})}const Pe={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function kt(e){return`[data-tour="${e}"]`}function xr(e=location.search){return new URLSearchParams(e).get("tour")}function Er(e){return"anchor"in e?kt(e.anchor):`${kt(Pe.diagram)} [data-element-id="${kr(e.elementId)}"]`}function kr(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function Nr(e){return e.map(n=>({element:Er(n.target),popover:{title:n.title,description:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}))}async function Pr(e){const[{driver:n}]=await Promise.all([ge(()=>import("./driver.js-bj_ppY-Q.js"),[]),ge(()=>Promise.resolve({}),__vite__mapDeps([0]))]),t=n({steps:Nr(e),showProgress:!0,allowClose:!0,skipMissingElement:!0});return t.drive(),{isActive:()=>t.isActive(),destroy:()=>t.destroy()}}const Mr=300;function Sr(e){const[n,t]=h.useState(!1),o=h.useRef(null),r=h.useRef(null),s=h.useRef(0),d=h.useCallback(()=>{r.current!==null&&(clearInterval(r.current),r.current=null)},[]),m=h.useCallback(()=>{var a;s.current+=1,d(),(a=o.current)==null||a.destroy(),o.current=null,t(!1)},[d]),l=h.useCallback(()=>{if(!e||e.steps.length===0||o.current)return;const a=s.current+=1;Pr(e.steps).then(p=>{if(a!==s.current||!p.isActive()){p.destroy();return}o.current=p,t(!0);const u=setInterval(()=>{if(o.current!==p){clearInterval(u);return}p.isActive()||(clearInterval(u),r.current===u&&(r.current=null),o.current=null,t(!1))},Mr);r.current=u})},[e,d]);return h.useEffect(()=>m,[m]),{active:n,start:l,stop:m}}function Br(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Rr({enabled:e,ready:n,targetRef:t,start:o}){const r=h.useRef(!1),[s,d]=h.useState(!1),m=h.useRef(o);h.useEffect(()=>{m.current=o},[o]),h.useEffect(()=>{if(!e||r.current)return;const l=t.current;if(!l||typeof IntersectionObserver>"u"){d(!0);return}const a=new IntersectionObserver(p=>{p.some(u=>u.isIntersecting)&&(d(!0),a.disconnect())},{threshold:.01});return a.observe(l),()=>a.disconnect()},[e,t]),h.useEffect(()=>{!e||r.current||!n||!s||Br()||(r.current=!0,m.current())},[e,n,s])}const Ne=650,Sn="__agent__",Nt="__model__",Pt="__template__:";function Cr(e){return e.kind.toLowerCase().includes("boundary")}const Ir=h.lazy(async()=>{await Promise.all([ge(()=>Promise.resolve({}),__vite__mapDeps([1])),ge(()=>Promise.resolve({}),__vite__mapDeps([2])),ge(()=>Promise.resolve({}),__vite__mapDeps([3]))]);const{RuntimeDiagram:e}=await ge(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-DTnJz5cT.js");return{RuntimeDiagram:n}},__vite__mapDeps([4,5,6]));return{default:e}}),Bn=h.lazy(()=>ge(()=>import("./MonacoEditor-tKrodui4.js").then(e=>e.M),__vite__mapDeps([7,5,8]))),Ar=h.lazy(()=>ge(()=>import("./vendor-modeler-BzScQTrW.js"),__vite__mapDeps([9,5,6,10,11,12,13,1,2,3]))),Mt=h.lazy(async()=>{const{FormRenderer:e}=await ge(async()=>{const{FormRenderer:n}=await import("./FormRenderer-CHM9L8ia.js");return{FormRenderer:n}},__vite__mapDeps([14,5,12,10,11,15]));return{default:e}});function hn(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function Tr(e){const n=hn(e).replace(/\s+/g," ");return n.length>78?`${n.slice(0,78)}…`:n}function Fr({example:e,compact:n=!1,autostart:t=!1,initialBrainKind:o,initialTourId:r}){var Kn,Zn,Yn,Qn,Xn,et,nt,tt;const[s,d]=h.useState(e.bpmn),m=h.useRef(null),l=or(),[a,p]=h.useState(null);h.useEffect(()=>{o&&o!==l.kind&&l.setKind(o)},[]),h.useEffect(()=>{dr({brain:l.kind})},[l.kind]);const[u,b]=h.useState(()=>Object.fromEntries(e.handlers.map(_=>[_.elementId,_.source]))),[f,g]=h.useState(e.scriptedAgent??""),[E,v]=h.useState(()=>tn(e.templates)),w=h.useMemo(()=>ri(e,u,s,E),[e,u,s,E]),N=w.model,A=N.agent??N.agents[0]??null,x=Ai({bpmn:w.resolvedBpmn});$i(x.phase==="ready");const Q=Sr(e.tour);h.useEffect(()=>{var _;r&&((_=e.tour)==null?void 0:_.id)===r&&Q.start()},[]);const H=N.startFormId?((Kn=e.forms)==null?void 0:Kn[N.startFormId])??null:null,[oe,Me]=h.useState(()=>({...e.seed,...H?hr(H):{}})),[fe,Ae]=h.useState(A?Sn:((Zn=e.handlers[0])==null?void 0:Zn.elementId)??""),ee=h.useMemo(()=>{const _=(e.scenarios??[]).findIndex(k=>Object.entries(k.variables).every(([P,R])=>JSON.stringify(oe[P])===JSON.stringify(R)));return _===-1?null:_},[e.scenarios,oe]),[_e,le]=Vn(n?"start-compact":"start",n?!1:!!H),[I,C]=h.useState(!1),[M,L]=h.useState(!1),[O,we]=h.useState(!1),[Ge,He]=h.useState(null),[Se,Je]=h.useState([]),[ke,be]=h.useState({}),We=h.useMemo(()=>({...e.seed,...oe,...zo(e.imageInput?a:null)}),[e.seed,e.imageInput,oe,a]),[on,Le]=h.useState(null),Oe=h.useRef(null),[Ee,Ke]=h.useState({}),[xn,rn]=h.useState(!1),Be=h.useRef(null),$=h.useRef(!1),X=h.useRef(0),an=h.useRef(0),Te=h.useRef({current:void 0}),Re=h.useRef({}),Fe=h.useRef({}),Ze=h.useMemo(()=>{const _=new Map;for(const k of N.processes){for(const P of k.tasks)_.set(P.elementId,P.label);for(const P of k.agents){_.set(P.elementId,P.label);for(const R of P.tools)_.set(R.elementId,R.label)}for(const P of k.userTasks)_.set(P.elementId,P.label)}return k=>_.get(k)??k},[N]),D=h.useCallback(_=>{Je(k=>{if(_.key){const P=k.findIndex(R=>R.key===_.key);if(P>=0){const R=[...k];return R[P]={...R[P],..._},R}}return[...k,{..._,id:an.current++}].slice(-80)})},[]),se=h.useMemo(()=>{const _=x.snapshot;if(!_)return null;const k=new Set(_.instances.filter(P=>!P.completed).map(P=>P.key));return _.userTasks.find(P=>P.state==="Created"&&k.has(P.instanceKey))??null},[x.snapshot]);h.useEffect(()=>{Ke({}),rn(!1)},[se==null?void 0:se.key]);const je=h.useMemo(()=>{const _=N.processes.flatMap(P=>P.tasks),k=new Map;for(const P of e.handlers){if(!P.manualControl)continue;const R=_.find(S=>S.elementId===P.elementId);R&&k.set(R.jobType,{...P.manualControl,elementId:P.elementId})}return k},[e.handlers,N]),Ce=h.useMemo(()=>{if(!x.snapshot)return null;for(const _ of x.snapshot.jobs){const k=je.get(_.jobType);if(k&&_.state==="Created")return{job:_,control:k}}return null},[x.snapshot,je]),ze=h.useMemo(()=>{const _=e.requiredTools;if(!A||!x.snapshot||!(_!=null&&_.length))return[];const k=new Map(x.snapshot.elementStats.map(P=>[P.elementId,P.completed]));return A.tools.filter(P=>_.includes(P.elementId)&&(k.get(P.elementId)??0)===0)},[A,x.snapshot,e.requiredTools]),En=h.useMemo(()=>{var P,R;return!se||!A?!1:new Set(A.tools.map(S=>S.elementId)).has(se.elementId)?!0:(((R=(P=x.snapshot)==null?void 0:P.elementStats.find(S=>S.elementId===A.elementId))==null?void 0:R.completed)??0)===0},[se,A,x.snapshot]),ye=se?N.userTasks.find(_=>_.elementId===se.elementId):void 0,B=ye!=null&&ye.formId?((Yn=e.forms)==null?void 0:Yn[ye.formId])??null:null,G=h.useCallback(async(_,k,P,R)=>{var te,J,me;let S=P,de=0;for(;X.current===R&&S&&S.completedInstances<1&&de++<80;){const W=await x.stepWorkers(_,{agents:k});if(X.current!==R)return S;S=(W==null?void 0:W.snapshot)??S;const ne=(te=S.instances[0])==null?void 0:te.variables;if(ne&&be({...ne}),S.userTasks.some(K=>K.state==="Created")){D({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!W){D({kind:"error",text:"▶ run stopped — no dispatch round was returned"});break}if(W.handled===0){const K=S.messageSubscriptions.find(z=>!Cr(z));if(W.reason==="messages"&&K){if(D({kind:"step",text:`⏳ parked on a message catch event — waiting for "${K.messageName}"`,elementId:K.elementId}),await new Promise(ie=>setTimeout(ie,Ne)),X.current!==R)return S;D({kind:"vars",text:`📨 correlating message "${K.messageName}" (key: ${K.correlationKey})`,elementId:K.elementId});const z=x.correlateMessage(K.messageName,K.correlationKey,"{}");if(z){S=z;const ie=(J=S.instances[0])==null?void 0:J.variables;ie&&be({...ie}),await new Promise(ve=>setTimeout(ve,Ne));continue}D({kind:"error",text:`▶ run stopped — correlating "${K.messageName}" (key: ${K.correlationKey}) failed`,elementId:K.elementId})}if(W.reason==="signals"&&S.signalSubscriptions.length>0){const z=S.signalSubscriptions[0],ie=S.signalSubscriptions.length;if(D({kind:"step",text:`⏳ parked on ${ie} open signal subscription${ie===1?"":"s"} — waiting for "${z.signalName}"`,elementId:z.elementId}),await new Promise(Ue=>setTimeout(Ue,Ne)),X.current!==R)return S;const ve=x.broadcastSignal(z.signalName,"{}");if(ve){S=ve,D({kind:"vars",text:`📡 broadcasting signal "${z.signalName}" — every waiting subscription unblocks`,elementId:z.elementId});const Ue=(me=S.instances[0])==null?void 0:me.variables;Ue&&be({...Ue}),await new Promise(Nn=>setTimeout(Nn,Ne));continue}D({kind:"error",text:`▶ run stopped — broadcasting signal "${z.signalName}" failed`,elementId:z.elementId})}if(W.reason==="timers"){const z=S.timers.reduce((ie,ve)=>Math.min(ie,ve.dueInMs),1/0);if(Number.isFinite(z)){if(D({kind:"step",text:`⏳ parked on a timer — ${(Math.max(z,0)/1e3).toFixed(1)}s left on the clock`}),await new Promise(ve=>setTimeout(ve,Ne)),X.current!==R)return S;const ie=x.advanceTime(Math.max(z,0)+1);if(ie){S=ie,D({kind:"step",text:"🕐 the clock advanced — timer fired"}),await new Promise(ve=>setTimeout(ve,Ne));continue}}}break}await new Promise(K=>setTimeout(K,Ne))}return X.current!==R||(S&&S.completedInstances>=1?D({kind:"done",text:"✅ process instance completed"}):S&&S.incidentElementIds.length>0&&D({kind:"error",text:"A job failed — incident on the diagram"})),S},[x,D]),j=h.useCallback(async _=>{var S,de,te;if(!Ce||$.current)return;const{job:k,control:P}=Ce,R=++X.current;$.current=!0,L(!0);try{let J,me;if(_==="complete")J=x.completeJobManually(k.jobType,"{}"),me="  ↳ completed normally";else if(P.action.kind==="timer"){const W=((de=(S=x.snapshot)==null?void 0:S.timers[0])==null?void 0:de.dueInMs)??0;J=x.advanceTime(Math.max(W,0)+1),me="  ↳ advanced the clock — timer fired"}else{const{errorCode:W,message:ne}=P.action;J=x.throwJobError(k.jobType,W,ne),me=`  ↳ threw BPMN error ${W}: ${ne}`}if(J){D({kind:"vars",text:me,elementId:k.elementId});const W=(te=J.instances[0])==null?void 0:te.variables;W&&be({...W}),await new Promise(ne=>setTimeout(ne,Ne)),await G(Re.current,Fe.current,J,R)}else D({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:k.elementId})}finally{X.current===R&&($.current=!1,L(!1))}},[Ce,x,D,G]),Z=h.useCallback(async()=>{var W;let _=null;try{N.agents.length>0&&f.trim()&&(_=Wo(f))}catch(ne){return He(ne instanceof Error?ne.message:String(ne)),null}Te.current={current:void 0};let k;if(e.imageInput){const ne=l.vision;k={read:ne??nr(e.scriptedVision).read,live:!!ne,resolve:z=>x.getRunImage(z)}}const P=Yo(N,w.handlers,D,Te.current,k);for(const ne of je.keys())delete P[ne];const R={};if(N.agents.length>0){if(l.kind!=="scripted"&&l.chat){const K=new Map;for(const z of N.agents)K.set(z.jobType,[...K.get(z.jobType)??[],z]);for(const[z,ie]of K)R[z]=hi(ie,l.chat,D,{turnRef:Te.current,requiredTools:e.requiredTools})}else if(_)for(const K of new Set(N.agents.map(z=>z.jobType)))R[K]=async z=>{const ie=await _(z),ve=(ie.activateElements??[]).map(Nn=>Nn.elementId).join(", "),Ue=N.agents.length>1?` (${z.elementId})`:"";return D({kind:"agent",text:ie.completionConditionFulfilled?`🤖 scripted agent${Ue}: done`:`🤖 scripted agent${Ue}: calling ${ve||"(nothing)"}`}),ie}}Je([]),Ke({});const S=We;be(S),Re.current=P,Fe.current=R;const de=await x.redeploy(w.resolvedBpmn),te=(de==null?void 0:de[0])??N.processId;D({kind:"start",text:`Starting "${te}" — ${A?l.kind==="scripted"||!l.chat?"scripted brain":`live brain (${l.modelInUse??l.kind})`:"no agent in this model"}`});let J;if(N.startMessage){const{messageName:ne,correlationKey:K}=N.startMessage,z=Do(K,S);D({kind:"step",text:`📨 publishing "${ne}" (key: ${z}) — a message start event has no other way in`,elementId:N.startMessage.elementId}),J=x.correlateMessage(ne,z,JSON.stringify(S)),J&&J.instances.length===0&&D({kind:"error",text:`▶ nothing started — no start subscription matched key "${z}". Fix the input or the correlation key and press Run again.`,elementId:N.startMessage.elementId})}else J=x.createInstance(te,JSON.stringify(S));const me=(W=J==null?void 0:J.instances[0])==null?void 0:W.key;return e.imageInput&&a&&me&&x.setRunImage(me,a),{workers:P,agents:R,snap:J}},[x,e,w,f,oe,a,We,N,l,D,je]),ce=!!x.snapshot&&x.snapshot.instances.length>0&&x.snapshot.completedInstances<1,$e=!ce&&!!H&&on!==!0,Gn=!ce&&!!H&&on===!1,kn=_e||I;h.useEffect(()=>{n&&Gn&&C(!0)},[n,Gn]);const Hn=_=>{le(_),_||C(!1)},Jn=h.useCallback(async()=>{if(x.phase!=="ready"||$.current||O||w.hasErrors)return;$.current=!0,L(!0);const _=++X.current;try{let k=Re.current,P=Fe.current,R=x.snapshot;if(!ce){if(Oe.current&&!Oe.current.validate())return;He(null);const S=await Z();if(!S)return;k=S.workers,P=S.agents,R=S.snap,await new Promise(de=>setTimeout(de,Ne))}await G(k,P,R,_)}finally{X.current===_&&($.current=!1,L(!1))}},[x,O,w.hasErrors,ce,Z,G]),Wn=x.phase==="ready"&&!M&&!O&&!w.hasErrors&&!$e;Rr({enabled:t,ready:Wn,targetRef:m,start:()=>void Jn()});const to=h.useCallback(async()=>{var k;if(x.phase!=="ready"||$.current||O||w.hasErrors)return;$.current=!0,we(!0);const _=++X.current;try{let P=Re.current,R=Fe.current,S=x.snapshot;if(!ce){if(Oe.current&&!Oe.current.validate())return;He(null);const W=await Z();if(!W)return;P=W.workers,R=W.agents,S=W.snap}if(!S||S.completedInstances>=1)return;const de=S.takenSequenceFlows.length,te=await x.stepWorkers(P,{agents:R});if(!te){D({kind:"error",text:"⏭ step failed — no dispatch round was returned"});return}const J=(k=te.snapshot.instances[0])==null?void 0:k.variables;J&&be({...J});const me=Ui(te.snapshot.takenSequenceFlows,de);D(Vi(te,me,Ze,je))}finally{X.current===_&&($.current=!1,we(!1))}},[x,O,w.hasErrors,ce,Z,D,Ze,je]),oo=h.useCallback(async()=>{$.current=!1,X.current++,L(!1),we(!1),$.current=!0;try{await x.reset()}finally{$.current=!1}Je([]),be({})},[x]),sn=h.useMemo(()=>{const _=e.messageEvents;return!(_!=null&&_.length)||!x.snapshot?[]:_.flatMap(k=>{const P=N.boundaryEventHosts[k.elementId],R=x.snapshot.messageSubscriptions.find(S=>S.elementId===k.elementId||S.elementId===P);return R?[{event:k,sub:R}]:[]})},[e.messageEvents,x.snapshot,N.boundaryEventHosts]),io=h.useCallback(async _=>{var de;if($.current)return;const k=sn.find(te=>te.event.elementId===_);if(!k)return;const{event:P,sub:R}=k,S=++X.current;$.current=!0,L(!0);try{const te=x.correlateMessage(R.messageName,R.correlationKey,JSON.stringify(P.variables??{}));if(!te){D({kind:"error",text:`▶ publishing "${R.messageName}" failed`,elementId:_});return}D({kind:"vars",text:`📨 published "${R.messageName}" (key: ${R.correlationKey})`,elementId:_});const J=(de=te.instances[0])==null?void 0:de.variables;J&&be({...J}),await new Promise(me=>setTimeout(me,Ne)),await G(Re.current,Fe.current,te,S)}finally{X.current===S&&($.current=!1,L(!1))}},[sn,x,D,G]),ro=h.useCallback(async()=>{var R;if(!se||$.current||Be.current&&!Be.current.validate())return;const _=++X.current,k=x.completeUserTask(se.key,JSON.stringify(Ee));D({kind:"human",text:`👤 ${hn(Ee)}`});const P=(R=k==null?void 0:k.instances[0])==null?void 0:R.variables;if(be(S=>({...S,...Ee,...P??{}})),k&&k.completedInstances>=1){D({kind:"done",text:"✅ process instance completed"});return}if(k){$.current=!0,L(!0);try{await G(Re.current,Fe.current,k,_)}finally{X.current===_&&($.current=!1,L(!1))}}},[se,Ee,x,D,G]),ao=h.useMemo(()=>{var _,k;return x.phase==="loading"?i.jsx(ae,{variant:"neutral",children:"Booting engine…"}):x.phase==="error"?i.jsx(ae,{variant:"danger",children:"Engine error"}):M?i.jsx(ae,{variant:"info",children:"Running…"}):O?i.jsx(ae,{variant:"info",children:"Stepping…"}):(((_=x.snapshot)==null?void 0:_.incidentElementIds.length)??0)>0?i.jsx(ae,{variant:"danger",children:"Incident"}):se?i.jsx(ae,{variant:"warning",children:"Waiting for a human"}):(((k=x.snapshot)==null?void 0:k.completedInstances)??0)>=1?i.jsx(ae,{variant:"success",children:"Completed"}):x.snapshot?i.jsx(ae,{variant:"warning",children:"Paused"}):i.jsx(ae,{variant:"neutral",children:"Ready"})},[x.phase,x.snapshot,M,O,se]),so=h.useMemo(()=>e.blurb.split(/\n\s*\n/).map(_=>_.trim()).filter(Boolean),[e.blurb]);return i.jsxs("div",{className:"runner",ref:m,children:[n?i.jsx("h1",{className:"visually-hidden",children:e.title}):i.jsxs("section",{className:"intro",children:[i.jsx("h1",{children:e.title}),so.map(_=>i.jsx("p",{children:_},_))]}),e.imageInput&&i.jsx(ur,{imageInput:e.imageInput,value:a,onSelect:p,disabled:M}),i.jsxs("div",{className:"scenario",children:[i.jsx("span",{className:"scenario-label",id:"scenario-label",children:e.scenariosLabel??"Example input"}),e.scenarios&&i.jsx("div",{className:"scenario-toggle",role:"group","aria-labelledby":"scenario-label",children:e.scenarios.map((_,k)=>i.jsx(Y,{size:"sm",variant:k===ee?"default":"secondary","aria-pressed":k===ee,disabled:M,onClick:()=>Me(P=>({...P,..._.variables})),children:_.label},_.label))}),i.jsxs("button",{type:"button",className:"scenario-input-button",onClick:()=>Hn(!kn),"aria-expanded":kn,"aria-controls":"start-input-editor",title:"Edit the starting payload",children:[i.jsx("span",{className:"scenario-edit-icon","aria-hidden":!0,children:"✎"})," ","input: ",i.jsx("code",{children:Tr(oe)})]}),$e&&i.jsx("span",{className:"scenario-hint",children:"Fill in the input to enable Run"})]}),i.jsxs("div",{className:"inline-input-editor",id:"start-input-editor",hidden:!kn,children:[i.jsxs("div",{className:"inline-input-editor-head",children:[i.jsxs("div",{children:[i.jsx("div",{className:"inline-input-editor-title",children:N.startFormId?"Start form":"Start payload"}),i.jsx("div",{className:"inline-input-editor-copy",children:N.startFormId?`Rendered from the model's start form "${N.startFormId}".`:"The variables the instance starts with."})]}),i.jsx(Y,{size:"sm",variant:"secondary",onClick:()=>Hn(!1),children:"Done"})]}),H?i.jsx(h.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(Mt,{ref:Oe,schema:H,values:oe,onChange:(_,k)=>Me(P=>({...P,[_]:k})),disabled:M,onValidityChange:Le})}):i.jsx("pre",{className:"vars",children:hn(oe,2)})]}),!n&&(A||e.imageInput)&&i.jsx(De,{sectionId:"brain",className:"brain-card","data-tour":Pe.brainPanel,title:"Agent brain",description:A?`What drives “${A.label}”. The model recommends; the process governs.`:"What reads the image. The model recommends; the process governs.",children:i.jsx(cr,{brain:l,showText:!!A,showVision:!!e.imageInput})}),i.jsxs("div",{className:"controls",children:[i.jsx(Y,{"data-tour":Pe.runButton,onClick:()=>void Jn(),disabled:!Wn,children:"▶ Run"}),i.jsx(Y,{variant:"secondary",onClick:()=>void to(),disabled:x.phase!=="ready"||M||O||w.hasErrors||$e||(((Qn=x.snapshot)==null?void 0:Qn.completedInstances)??0)>=1,children:"⏭ Step"}),i.jsx(Y,{variant:"secondary",onClick:()=>void oo(),disabled:x.phase!=="ready"||O,children:"↺ Reset"}),e.tour&&i.jsx(Y,{variant:"secondary",onClick:Q.start,disabled:Q.active,children:Q.active?"Touring…":`🧭 ${e.tour.label}`}),ao]}),x.phase==="error"&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"Engine error"}),i.jsx(he,{children:x.error})]}),Ge&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"Code didn't compile"}),i.jsx(he,{children:Ge})]}),w.hasErrors&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"Run is disabled — the diagram has unresolved references"}),i.jsx(he,{children:i.jsx("ul",{className:"diagnostics",children:w.diagnostics.filter(_=>_.severity==="error").map((_,k)=>i.jsx("li",{children:_.message},k))})})]}),!w.hasErrors&&w.diagnostics.length>0&&i.jsxs(pe,{children:[i.jsx(ue,{children:"Heads up"}),i.jsx(he,{children:i.jsx("ul",{className:"diagnostics",children:w.diagnostics.map((_,k)=>i.jsx("li",{children:_.message},k))})})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"col",children:[i.jsx(De,{sectionId:"process","data-tour":Pe.diagram,title:"Process",description:`${N.processName} — live token (green), incidents (red).`,children:i.jsx(h.Suspense,{fallback:i.jsx("div",{className:"diagram-fallback",children:x.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:i.jsx(Ir,{xml:w.resolvedBpmn,activeIds:((Xn=x.snapshot)==null?void 0:Xn.activeElementIds)??[],incidentIds:((et=x.snapshot)==null?void 0:et.incidentElementIds)??[],className:"diagram"})})}),se&&i.jsxs(De,{sectionId:"human-task",title:(ye==null?void 0:ye.label)??"Human task",description:B?`Rendered from the model's form "${ye==null?void 0:ye.formId}".`:"This task has no linked form — complete it with no variables.",children:[ze.length>0&&!En&&i.jsxs(pe,{variant:"destructive",children:[i.jsx(ue,{children:"The agent didn't finish its checks"}),i.jsxs(he,{children:["It completed without running"," ",ze.map(_=>_.label||_.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),B&&i.jsx(h.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(Mt,{ref:Be,schema:B,values:Ee,onChange:(_,k)=>Ke(P=>({...P,[_]:k})),context:ke,onValidityChange:rn})}),i.jsx(Y,{onClick:ro,disabled:!!B&&!xn,children:"Complete task"})]}),Ce&&i.jsx(De,{sectionId:"manual-job",title:Ce.control.label,description:"This job is held here on purpose — pick how it resolves.",children:i.jsxs("div",{className:"controls",children:[i.jsx(Y,{onClick:()=>void j("complete"),disabled:M||O,children:Ce.control.completeLabel??"✅ Complete normally"}),i.jsx(Y,{variant:"secondary",onClick:()=>void j("action"),disabled:M||O,children:Ce.control.action.label})]})}),sn.length>0&&i.jsx(De,{sectionId:"message-events",title:"Something else happens",description:"An event the process isn't waiting for. The run never fires these on its own — that would interrupt every time — so they're yours.",children:i.jsx("div",{className:"controls",children:sn.map(({event:_})=>i.jsx(Y,{variant:"secondary",onClick:()=>void io(_.elementId),disabled:M||O,children:_.label},_.elementId))})})]}),i.jsx("div",{className:"col",children:i.jsx(vr,{log:Se,elementStats:(nt=x.snapshot)==null?void 0:nt.elementStats,incidents:(tt=x.snapshot)==null?void 0:tt.incidents,labelFor:Ze,hasAgent:!!A,variables:i.jsxs("div",{className:"vars-block","data-tour":Pe.variablesPanel,children:[i.jsx("div",{className:"vars-head",children:"Instance variables"}),i.jsx("pre",{className:"vars",children:hn(Object.keys(ke).length>0?ke:We,2)})]})})})]}),!n&&i.jsxs("div",{className:"runner-secondary",children:[i.jsx(De,{sectionId:"code",className:"editors","data-tour":Pe.codePanel,defaultOpen:!1,title:"Code",description:"One handler per BPMN element, plus a model tab holding the editable diagram — select an element there to edit its properties. Return variables to merge, or throw to fail the job.",children:i.jsx(h.Suspense,{fallback:i.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:i.jsxs(_o,{value:fe,onValueChange:Ae,children:[i.jsxs(wo,{children:[i.jsx(dn,{value:Nt,children:"model"}),A&&i.jsx(dn,{value:Sn,children:"agent (scripted)"}),e.handlers.map(_=>{var k;return i.jsx(dn,{value:_.elementId,children:((k=N.tasks.find(P=>P.elementId===_.elementId))==null?void 0:k.label)??_.elementId},_.elementId)}),Object.keys(E).map(_=>i.jsx(dn,{value:Pt+_,children:_},_))]}),i.jsxs(ln,{value:Nt,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:"Model"}),i.jsx("code",{children:"click an element to edit its properties on the right — Run re-reads whatever you leave here"}),i.jsx(Y,{variant:"secondary",size:"sm",onClick:()=>d(e.bpmn),disabled:s===e.bpmn,children:"Revert to original"})]}),i.jsx(Ar,{value:s,onChange:d})]}),A&&i.jsxs(ln,{value:Sn,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:A.label}),i.jsx("code",{children:l.kind==="scripted"||!l.chat?"in use":"unused — a live brain is connected"})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(Bn,{height:"360px",defaultLanguage:"javascript",value:f,onChange:_=>g(_??""),options:Rn})})]}),e.handlers.map(_=>{var k;return i.jsxs(ln,{value:_.elementId,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:((k=N.tasks.find(P=>P.elementId===_.elementId))==null?void 0:k.label)??_.elementId}),i.jsx("code",{children:_.standsInFor??_.elementId})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(Bn,{height:"360px",defaultLanguage:"javascript",value:u[_.elementId],onChange:P=>b(R=>({...R,[_.elementId]:P??""})),options:Rn})})]},_.elementId)}),Object.keys(E).map(_=>i.jsxs(ln,{value:Pt+_,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:_}),i.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+_+"}}"]})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(Bn,{height:"360px",defaultLanguage:"markdown",value:E[_],onChange:k=>v(P=>tn(P,{[_]:k??""})),options:Rn})})]},_))]})})}),A&&i.jsx(De,{sectionId:"tools",defaultOpen:!1,title:"Tools, as the model sees them",description:i.jsxs(i.Fragment,{children:["Read from the diagram — element name, documentation, and every",i.jsx("code",{children:" fromAi(…)"})," argument."]}),children:i.jsx("ul",{className:"tool-list",children:A.tools.map(_=>i.jsxs("li",{children:[i.jsx("code",{children:_.elementId}),i.jsxs("span",{children:[" — ",_.documentation||_.label]}),_.args.length>0&&i.jsx("ul",{children:_.args.map(k=>i.jsxs("li",{children:[i.jsxs("code",{children:[k.name,": ",k.type]})," ","— ",k.description]},k.name))})]},_.elementId))})})]})]})}const Rn={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},jr=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Dr=`async (job, { sleep }) => {
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
}`,Lr=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above; this body
  // does not run either. Unlike Activity_guarded, this task has no boundary
  // event: firing its error action has nothing to catch it, so it becomes an
  // incident instead of a handled alternate path. Completing it normally
  // completes the job with {} — no trace line, no shipped/tracking variables
  // — and the token reaches "Order shipped".
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Or={id:"learn-error-boundary",title:"Error boundary event",group:"learn-bpmn",blurb:["A boundary event attached to a task catches something that happens while the task is running and reroutes the token — here, a thrown BPMN error.",'Hit Run and the process stops at "Charge payment (guarded)" with a card under the diagram offering two buttons: press "Simulate: card declined" and watch the attached boundary event catch the error, skipping straight to "Handled — order cancelled".','Then Reset, complete that first job normally, and decline the second one on "Ship items (unguarded)" — this time it becomes an incident, because that task has no boundary event and the engine has nothing to reroute the token with.',`That's exactly what breaks if you forget the boundary event (or give it the wrong errorRef): a failure that should be a modelled alternate path becomes a stuck instance a human has to resolve by hand. Complete both jobs normally instead to see the unattended happy path all the way to "Order shipped".`].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/boundary-events/",bpmn:jr,seed:{},handlers:[{elementId:"Activity_guarded",standsInFor:"job worker — charge-payment",source:Dr,manualControl:{label:"Charge payment (guarded)",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_unguarded",standsInFor:"job worker — ship-items",source:Lr,manualControl:{label:"Ship items (unguarded)",completeLabel:"✅ Ship it",action:{kind:"error",errorCode:"CARRIER_REJECTED",message:"The carrier rejected the shipment — nothing catches this.",label:"❌ Simulate: carrier rejected (becomes an incident)"}}}]},zr=Object.freeze(Object.defineProperty({__proto__:null,default:Or},Symbol.toStringTag,{value:"Module"})),$r=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Ur=`async (job, { num, trace, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const orderTotal = num("orderTotal", 40);

  await sleep(300);

  // This is the variable the gateway's conditional sequence flow reads —
  // whatever this handler decides is what actually steers the token.
  const route = orderTotal >= 100 ? "express" : "standard";
  trace(\`order total $\${orderTotal} -> route: \${route}\`);

  // Whatever you return is merged onto the process instance.
  return { route };
}`,Vr=`async (job, { trace, sleep }) => {
  trace("expedited courier picks up the order");
  await sleep(400);

  return { shipped: true, method: "express" };
}`,qr=`async (job, { trace, sleep }) => {
  trace("order queued for standard courier pickup");
  await sleep(400);

  return { shipped: true, method: "standard" };
}`,Gr={id:"learn-exclusive-gateway",title:"Exclusive gateway",group:"learn-bpmn",blurb:["An exclusive gateway is the fork in the road: exactly one of its outgoing sequence flows is taken, chosen by evaluating each flow's FEEL condition in declaration order, first match wins. A default flow (drawn with a slash through its start, not a diamond marker) has no condition and is the fallback taken when every conditional flow evaluates false — that's what makes an exclusive gateway safe to deploy without an explicit case for every value.",`Run this and watch 'Check order total' decide a route variable, then watch the gateway send the token down 'Express ship' when the order is large enough, or 'Standard ship' otherwise (the default flow). Try both from the Start panel on the right: it holds a "Small order" and a "Large order" button that swap the payload for you.`,"To see the conditions themselves, open the model tab in the Code panel and click either arrow leaving the gateway — the FEEL is under Condition. Get one wrong (or misspell the variable name) and the flow you meant to take is silently skipped in favour of whichever one does evaluate true, or the default if none do — no error, just the wrong branch."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/gateways/gateways/#exclusive-gateway",bpmn:$r,seed:{orderTotal:40},scenarios:[{label:"Small order — standard ship (default flow)",variables:{orderTotal:40}},{label:"Large order — express ship (conditional flow)",variables:{orderTotal:150}}],handlers:[{elementId:"Activity_check_order",standsInFor:"job worker — check-order-total",source:Ur},{elementId:"Activity_express_ship",standsInFor:"job worker — express-ship",source:Vr},{elementId:"Activity_standard_ship",standsInFor:"job worker — standard-ship",source:qr}]},Hr=Object.freeze(Object.defineProperty({__proto__:null,default:Gr},Symbol.toStringTag,{value:"Module"})),Jr=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Wr=`async (job, { text, trace }) => {
  const orderId = text("orderId", "unknown-order");

  trace("shipment confirmed for " + orderId + " — recording it");

  return { shipmentRecorded: true };
}`,Kr={id:"learn-message-correlation",title:"Message catch event + correlation key",group:"learn-bpmn",blurb:[`A message intermediate catch event pauses the token until a message with a matching name and correlation key is published — the BPMN analogue of "wait for this specific order's shipment to be confirmed", not just "wait for any shipment-confirmed message".`,"Run this and watch the token park on the catch event; there's no external broker in the browser, so the page correlates the message itself once the wait is reached, echoing back the exact correlationKey (`=orderId`) the subscription resolved to — the Activity panel logs the wait and the correlation as separate lines — then the token resumes into Record confirmation and on to the end event.",'To see where that key comes from: in the Code panel, open the model tab, click "Wait for shipment confirmed", and expand Message in the properties panel on the right. Subscription correlation key holds `orderId` (the `=` beside the box marks it as a FEEL expression), and Name holds `shipment-confirmed` — those two together are what a publisher has to match. Edit them freely; because this page publishes the key the subscription itself resolved, the run stays self-consistent either way.','In a real deployment, where a separate system does the publishing, pointing that expression at a variable the instance never sets leaves the catch event waiting forever, and omitting zeebe:subscription altogether is rejected at deploy time with "has no zeebe:subscription correlationKey" — docs/engine-coverage.md records both.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/message-events/",bpmn:Jr,seed:{orderId:"ORD-42"},handlers:[{elementId:"Activity_record",standsInFor:"job worker — record-confirmation",source:Wr}]},Zr=Object.freeze(Object.defineProperty({__proto__:null,default:Kr},Symbol.toStringTag,{value:"Module"})),Yr=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Qr=`async (job, { text, sleep, trace }) => {
  // Each parallel instance gets its own 'item' from the input collection.
  const item = text("item", "widget");

  trace("processing " + item);
  await sleep(400);

  // Whatever you return is merged onto this instance's scope, then collected
  // into the process-level 'results' array via outputElement/outputCollection.
  return { result: item.toUpperCase() + "-DONE" };
}`,Xr={id:"learn-multi-instance-parallel",title:"Parallel multi-instance",group:"learn-bpmn",blurb:["A multi-instance activity runs its task once per element of a collection, spawning that many job instances of the same element in parallel, and only lets the token move on once every one of them completes.",`Run this and watch three 'Process item' jobs activate together for apple, banana, cherry, and complete (in any order) before the process reaches its end event. Nothing about the diagram says "three" — that comes from the collection, so use the buttons in the Start panel on the right to swap between one, three, and six items and hit Run again; the Activity panel logs one 'Process item' line per element, so the fan-out is right there to count.`,'The property tying the two together is in the Code panel: open the model tab, click "Process item", and expand Multi-instance in the properties panel on the right — Input collection holds `items`, the FEEL expression naming the variable to fan out over. Drop it entirely and the activity silently degenerates to a single ordinary instance, with no error to tell you it happened. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/multi-instance/",bpmn:Yr,seed:{items:["apple","banana","cherry"]},scenarios:[{label:"One item — a single instance",variables:{items:["apple"]}},{label:"Three items — fans out to three",variables:{items:["apple","banana","cherry"]}},{label:"Six items — fans out to six",variables:{items:["apple","banana","cherry","damson","elderberry","fig"]}}],handlers:[{elementId:"Activity_process",standsInFor:"job worker — process-item",source:Qr}]},ea=Object.freeze(Object.defineProperty({__proto__:null,default:Xr},Symbol.toStringTag,{value:"Module"})),na=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ta=`async (job, { text, sleep, trace }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "widget");

  trace("packing " + item);
  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { packed: true };
}`,oa=`async (job, { sleep, trace }) => {
  trace("handing over to the courier");
  await sleep(400);

  return { dispatched: true, tracking: "SVC" + Math.floor(Math.random() * 1e9) };
}`,ia={id:"learn-service-task",title:"Service task + sequence flow",group:"learn-bpmn",blurb:["A service task is a unit of work a worker (not a human) performs; a sequence flow is the arrow that hands the token from one to the next once its task completes.","Run this and watch each task activate, run its handler, and complete in order — Prepare package, then Dispatch courier — before the process reaches its end event.",`The link between the two halves is the job type: in the Code panel, open the model tab, click "Prepare package", and expand Task definition in the properties panel on the right — Job type is the name a worker has to subscribe to in order to be handed this task's work.`,"(This page wires its own handlers up from whatever the model declares, so renaming it here keeps working; on a real cluster the worker is a separate process started with a job type of its own, and a mismatch means nobody ever activates the job, so the run stalls forever.)"].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/service-tasks/",bpmn:na,seed:{item:"camunda-t-shirt"},handlers:[{elementId:"Activity_prepare",standsInFor:"job worker — prepare-package",source:ta},{elementId:"Activity_dispatch",standsInFor:"job worker — dispatch-courier",source:oa}]},ra=Object.freeze(Object.defineProperty({__proto__:null,default:ia},Symbol.toStringTag,{value:"Module"})),aa=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,sa=`async (job, { sleep, trace }) => {
  trace("all-clear received — resuming operations");
  await sleep(400);

  return { resumed: true };
}`,da=`async (job, { sleep, trace }) => {
  trace("same all-clear — reopening the floor");
  await sleep(400);

  return { floorReopened: true };
}`,la={id:"learn-signal-broadcast",title:"Signal intermediate catch event + broadcast",group:"learn-bpmn",blurb:["A signal intermediate catch event parks the token until someone broadcasts a signal by name. Unlike a message, a signal isn't correlated to one waiting instance — broadcasting it unblocks every open subscription for that name at once.",`That's why this model forks: both "Ops waits for all-clear" and "Floor waits for all-clear" park on the same signal, and one broadcast releases the pair together, so 'Resume operations' and 'Reopen the floor' both run before the join lets the token reach the end event. Run it and watch both branches light up off a single broadcast — the Activity panel says "parked on 2 open signal subscriptions" before the one 📡 line that releases them both. A message could not do that, because a correlation key targets exactly one waiting subscription.`,"To see the name being matched: in the Code panel, open the model tab, click either catch event, and expand Signal in the properties panel on the right — Name holds `all-clear`. Each catch event owns its own signal definition, so editing the name there changes only that branch: do it on one of them and hit Run, and the panel now reports two broadcasts instead of one, because the branches no longer share a name and each needs its own. The count of broadcasts is exactly the count of distinct signal names being waited on."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/signal-events/signal-event/",bpmn:aa,seed:{},handlers:[{elementId:"Activity_resume",standsInFor:"job worker — resume-operations",source:sa},{elementId:"Activity_reopen",standsInFor:"job worker — reopen-floor",source:da}]},ca=Object.freeze(Object.defineProperty({__proto__:null,default:la},Symbol.toStringTag,{value:"Module"})),ma=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,pa=`async (job, { sleep, trace }) => {
  trace("the timer fired — sending the reminder now");
  await sleep(400);

  return { reminderSent: true };
}`,ua={id:"learn-timer-catch-event",title:"Timer intermediate catch event",group:"learn-bpmn",blurb:["A timer catch event parks the token until a point in time — here, a fixed duration after the token arrives.","Run this and read the Activity panel: the token parks on the timer with nothing else happening ('parked on a timer — 3.0s left on the clock'), then the clock is fast-forwarded to the due time ('the clock advanced — timer fired') and the token resumes on its own: 'Send the reminder' activates, runs, and the process completes. Nothing needs to poll or push it forward; the engine itself wakes the instance when the timer's due time passes. (This page fast-forwards a virtual clock so the 3-second wait doesn't cost you 3 real seconds — a live deployment waits the actual PT3S.)",'To change the wait: in the Code panel, open the model tab, click "Wait 3 seconds", and expand Timer in the properties panel on the right — Type is Duration and Value holds the ISO-8601 duration, so PT30S or PT5M works the same way. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/timer-events/timer-event-type/",bpmn:ma,seed:{},handlers:[{elementId:"Activity_after_timer",standsInFor:"job worker — send-reminder",source:pa}]},ha=Object.freeze(Object.defineProperty({__proto__:null,default:ua},Symbol.toStringTag,{value:"Module"})),ba=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ga="Camunda Cloud",fa="8.10.0",_a={name:"Camunda Web Modeler",version:"9b5d5ef"},wa=19,ya="learn-user-task-form-review",va=[{text:`# Review request

A request is waiting for you. Decide whether to approve or reject it, then submit.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Requester:** {{requester}}

**Details:** {{details}}`,type:"text",layout:{row:"Row_details",columns:null},id:"Field_ReviewDetails"},{label:"Decision",values:[{label:"Approve",value:"approved"},{label:"Reject",value:"rejected"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_ReviewDecision",key:"decision",validate:{required:!0}},{label:"Comments",description:"Optional note recorded alongside your decision.",type:"textarea",layout:{row:"Row_comments",columns:null},id:"Field_ReviewComments",key:"comments"}],xa="default",Ea={executionPlatform:ga,executionPlatformVersion:fa,exporter:_a,schemaVersion:wa,id:ya,components:va,type:xa},ka={id:"learn-user-task-form",title:"User task + form",group:"learn-bpmn",blurb:["A user task is a step a human completes, not a worker — the token parks at the task until someone submits its form, then moves on.","Run this and watch the process reach 'Review request' and wait; fill in the decision form that appears in its own card under the diagram and press Complete task to see the token resume and the process reach its end event.",'What binds that form to the task is one property: in the Code panel, open the model tab, click "Review request", and expand Form in the properties panel on the right — Form ID names the form the runner looks up and renders. A user task with no form binding still deploys and still parks the token, but the runner has nothing to render for it, so it offers a bare Complete button that finishes the task with no variables. Revert to original puts the binding back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/user-tasks/",bpmn:ba,forms:{"learn-user-task-form-review":Ea},seed:{requester:"Priya Shah",details:"Approve access to the shared design-review workspace."},handlers:[]},Na=Object.freeze(Object.defineProperty({__proto__:null,default:ka},Symbol.toStringTag,{value:"Module"})),Pa=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,Ma=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,Sa={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:Pe.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:Pe.variablesPanel}}]},Ba=`<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_SeedExportComplianceAgent" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Web Modeler" exporterVersion="9b5d5ef" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.10.0">
  <bpmn:process id="seed-export-compliance-agent" name="Seed Export Compliance Agent" isExecutable="true">
    <bpmn:startEvent id="StartEvent_ShipmentReady" name="Shipment ready for export">
      <bpmn:extensionElements>
        <zeebe:formDefinition formId="seed-export-shipment-ready" />
      </bpmn:extensionElements>
      <bpmn:outgoing>Flow_ToAgent</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_ToAgent" sourceRef="StartEvent_ShipmentReady" targetRef="ComplianceCheckAgent" />
    <bpmn:adHocSubProcess id="ComplianceCheckAgent" name="Compliance Check Agent" zeebe:modelerTemplate="io.camunda.connectors.agenticai.aiagent.jobworker.v1" zeebe:modelerTemplateVersion="10">
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
      <bpmn:serviceTask id="VerifyGeneticMarker" name="Verify genetic marker" zeebe:modelerTemplate="io.camunda.connectors.Jdbc.v1" zeebe:modelerTemplateVersion="3">
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
      <bpmn:serviceTask id="CheckDestinationCountry" name="Check destination country" zeebe:modelerTemplate="io.camunda.connectors.GraphQL.v1" zeebe:modelerTemplateVersion="9">
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
      <bpmn:serviceTask id="ComputeComplianceScore" name="Compute compliance score" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
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
    <bpmn:serviceTask id="NotifyExportTeam" name="Notify export team" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
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
`,Ra="Camunda Cloud",Ca="8.10.0",Ia={name:"Camunda Web Modeler",version:"9b5d5ef"},Aa=19,Ta="seed-export-shipment-ready",Fa=[{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Choose a ready-made shipment to get started, or select Custom to write your own below.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Shipment notes",description:"Optional. When filled in, used instead of the scenario above. The agent reads these notes to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],ja="default",Da={executionPlatform:Ra,executionPlatformVersion:Ca,exporter:Ia,schemaVersion:Aa,id:Ta,components:Fa,type:ja},La="Camunda Cloud",Oa="8.10.0",za={name:"Camunda Web Modeler",version:"9b5d5ef"},$a=19,Ua="seed-export-compliance-review",Va=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],qa="default",Ga={executionPlatform:La,executionPlatformVersion:Oa,exporter:za,schemaVersion:$a,id:Ua,components:Va,type:qa},Ha=Object.assign({"./prompts/system-prompt.md":Pa,"./prompts/user-prompt.md":Ma}),Ja=tn(Object.fromEntries(Object.entries(Ha).map(([e,n])=>[Ut(e),n.trimEnd()]))),St="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",Wa="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",Ka=`async (job) => {
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
}`,Za=`async (job, { text, sleep, trace }) => {
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
}`,Ya=`async (job, { text, sleep, trace }) => {
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
}`,Qa=`async (job, { num, sleep }) => {
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
}`,Xa=`async (job, { text, trace }) => {
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
}`,es=`async (job, { sleep }) => {
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
}`,ns={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",hero:{headline:"The LLM *recommends*. The process *governs*.",lede:"An agentic ad-hoc sub-process chooses its own compliance checks, but the gateway after it — not the model — decides whether a shipment ships or goes to a human.",tagline:"Anatomy of an enterprise agent"},docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:Ba,forms:{"seed-export-shipment-ready":Da,"seed-export-compliance-review":Ga},seed:{scenario:St,shipmentNotes:""},scenariosLabel:"Example shipment",scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:St,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:Wa,shipmentNotes:""}}],scriptedAgent:Ka,templates:Ja,tour:Sa,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:Za},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:Ya},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:Qa},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:Xa},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:es}]},ts=`You are a loan origination assistant at a retail bank. Your job is to gather everything a senior loan officer needs to decide an application — you do **not** decide it yourself.

Work through the case with the tools available to you:

- **Query customer** — find the applicant's existing relationship with the bank.
- **Credit bureau lookup** — pull their credit report.
- **Assess application** — run the bank's underwriting policy to get a debt-to-income ratio, a risk band, and a recommendation. Always run this; the officer's review depends on it.
- **Update application status** — mark the case as \`under-review\` once you have assessed it.

Call the tools in whatever order makes sense, but make sure the application has been assessed before you finish. When you have gathered the customer profile, the bureau report, and the policy assessment, and marked the status, you are done — a senior officer takes it from there.
`,os="Gather this loan case for the senior officer: look up the customer, pull their credit bureau report, run the underwriting assessment, and set the application status to `under-review`. Then stop — the officer makes the decision.\n",is={id:"loan-origination-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a loan application through the origination agent.",target:{anchor:Pe.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the application and decides, turn by turn, which tools to call — look up the customer, pull a credit bureau report, run the underwriting policy, update the status. Nothing here is a fixed sequence.",target:{elementId:"LoanOriginationAgent"}},{title:"Policy, not opinion",description:"The assessment computes the debt-to-income ratio, a risk band and a recommendation from the verified figures — the deterministic policy the senior officer's review leans on.",target:{elementId:"AssessApplication"}},{title:"Every application meets a human",description:"Whatever the agent recommended, the token now waits here: no offer and no decline is reachable without a senior officer first signing off. Open the task to record the decision — the gateway routes on it.",target:{elementId:"SeniorOfficerReview"}},{title:"Everything the run recorded",description:"The variables panel shows the customer profile, the bureau report, the debt-to-income and risk band, and the recommendation — exactly what each tool wrote for the officer to weigh.",target:{anchor:Pe.variablesPanel}}]},rs=`<?xml version="1.0" encoding="UTF-8"?>
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
`,as="Camunda Cloud",ss="8.10.0",ds={name:"Camunda Web Modeler",version:"9b5d5ef"},ls=19,cs="loan-application",ms="default",ps=[{text:`# Loan application

Capture the applicant's details, then run the origination agent.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{label:"Applicant name",type:"textfield",layout:{row:"Row_applicant",columns:null},id:"Field_ApplicantName",key:"applicantName",defaultValue:"Ada Lovelace",validate:{required:!0}},{label:"Loan amount",description:"Amount requested.",type:"number",layout:{row:"Row_amount",columns:null},id:"Field_LoanAmount",key:"loanAmount",defaultValue:2e4},{label:"Loan purpose",type:"textfield",layout:{row:"Row_purpose",columns:null},id:"Field_LoanPurpose",key:"loanPurpose",defaultValue:"Home improvement"},{label:"Annual income",type:"number",layout:{row:"Row_income",columns:null},id:"Field_AnnualIncome",key:"annualIncome",defaultValue:96e3},{label:"Monthly debt payments",description:"Existing monthly repayments across all obligations.",type:"number",layout:{row:"Row_debt",columns:null},id:"Field_MonthlyDebt",key:"monthlyDebt",defaultValue:850},{label:"Stated credit score",description:"The applicant's self-reported score; the credit bureau tool confirms it.",type:"number",layout:{row:"Row_score",columns:null},id:"Field_CreditScore",key:"creditScore",defaultValue:782}],us={executionPlatform:as,executionPlatformVersion:ss,exporter:ds,schemaVersion:ls,id:cs,type:ms,components:ps},hs="Camunda Cloud",bs="8.10.0",gs={name:"Camunda Web Modeler",version:"9b5d5ef"},fs=19,_s="loan-senior-officer-review",ws="default",ys=[{text:`# Senior officer review

Every application reaches this desk before an offer or a decline can be sent. Review the agent's findings, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Applicant:** {{applicantName}} — {{loanPurpose}}, amount {{loanAmount}}

**Customer relationship:** {{if customerProfile = null then "unknown" else customerProfile.segment + " (" + string(customerProfile.relationshipYears) + "y)"}}

**Credit bureau:** {{if bureauReport = null then "n/a" else string(bureauReport.score) + " (" + bureauReport.band + "), " + string(bureauReport.derogatoryMarks) + " derogatory mark(s)"}}

**Debt-to-income:** {{debtToIncome}}%

**Assessed risk band:** {{riskBand}}

**Policy recommendation:** {{recommendation}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Decision",values:[{label:"Approve — issue loan offer",value:"approved"},{label:"Decline — send decline notice",value:"declined"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_Decision",key:"decision",validate:{required:!0}},{label:"Officer note",description:"Recorded against the application; the decline notice quotes it as the reason.",type:"textarea",layout:{row:"Row_note",columns:null},id:"Field_ReviewNote",key:"reviewNote"}],vs={executionPlatform:hs,executionPlatformVersion:bs,exporter:gs,schemaVersion:fs,id:_s,type:ws,components:ys},xs=Object.assign({"./prompts/system-prompt.md":ts,"./prompts/user-prompt.md":os}),Es=tn(Object.fromEntries(Object.entries(xs).map(([e,n])=>[Ut(e),n.trimEnd()]))),Bt={applicantName:"Ada Lovelace",annualIncome:96e3,monthlyDebt:850,creditScore:782,loanAmount:2e4,loanPurpose:"Home improvement"},ks={applicantName:"Cyrus Vale",annualIncome:38e3,monthlyDebt:1450,creditScore:566,loanAmount:42e3,loanPurpose:"Debt consolidation"},Ns=`async (job) => {
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
}`,Ps=`async (job, { text, sleep, trace }) => {
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
}`,Ms=`async (job, { text, num, sleep, trace }) => {
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
}`,Ss=`async (job, { num, trace }) => {
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
}`,Bs=`async (job, { sleep, trace }) => {
  // Stands in for a write-back to the loan origination system. Marks the case
  // as awaiting the senior officer's decision.
  await sleep(200);
  trace("application status -> under-review");
  return { applicationStatus: "under-review", toolCallResult: "under-review" };
}`,Rs=`async (job, { num, sleep, trace }) => {
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
}`,Cs=`async (job, { text, sleep, trace }) => {
  // Trunk service task on the declined path. Sends the applicant a decline
  // notice with the recorded reason, standing in for a notification channel.
  const note = text("reviewNote", "");
  const reason = note || "Application did not meet the lending policy.";
  await sleep(300);
  trace("decline notice sent");

  return { declineNotice: { reason: reason, sentTo: text("applicantName", "the applicant") } };
}`,Is={id:"loan-origination",title:"Loan origination agent",blurb:"An AI agent gathers a loan case with its own tools — customer lookup, credit bureau, an underwriting policy, a status update — then every application passes through a mandatory senior-officer review before a gateway routes it to an offer or a decline. The agent advises; the process governs.",docsUrl:"https://camunda.com/orchestrate/agents/",bpmn:rs,forms:{"loan-application":us,"loan-senior-officer-review":vs},seed:Bt,scenarios:[{label:"Strong applicant (policy recommends approve)",variables:Bt},{label:"Marginal applicant (policy recommends decline)",variables:ks}],scriptedAgent:Ns,templates:Es,tour:is,requiredTools:["AssessApplication","UpdateApplicationStatus"],handlers:[{elementId:"QueryCustomer",standsInFor:"CRM connector — customer lookup",source:Ps},{elementId:"CreditBureauLookup",standsInFor:"REST connector — credit bureau",source:Ms},{elementId:"AssessApplication",standsInFor:"Script task — underwriting policy (FEEL)",source:Ss},{elementId:"UpdateApplicationStatus",standsInFor:"REST connector — origination system",source:Bs},{elementId:"IssueLoanOffer",standsInFor:"REST connector — offer/booking system",source:Rs},{elementId:"SendDeclineNotice",standsInFor:"REST connector — notifications",source:Cs}]},As=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ts=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Fs=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,js=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Ds={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:As,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Ts},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Fs},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:js}]},Ls=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Os=`async (job, { text, num, sleep, trace }) => {
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
}`,zs={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:Ls,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:Os}]},$s=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Us=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Vs=`async (job, { num, sleep }) => {
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
}`,qs=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Gs={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:$s,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Us},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Vs,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:qs,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},Hs="/web-demo-framework/pr-preview/pr-121/assets/de-bmw-mini-JBSk7QcF.jpg",Js="/web-demo-framework/pr-preview/pr-121/assets/de-bmw-mini.thumb-CUUmJrRO.jpg",Ws="/web-demo-framework/pr-preview/pr-121/assets/uk-d651-rnb-XGipy2QN.jpg",Ks="/web-demo-framework/pr-preview/pr-121/assets/uk-d651-rnb.thumb-mjEcbhUf.jpg",Zs="/web-demo-framework/pr-preview/pr-121/assets/uk-mk70-orj-Cn6O3Xfm.jpg",Ys="/web-demo-framework/pr-preview/pr-121/assets/uk-mk70-orj.thumb-CaeZ2vqU.jpg",Qs="/web-demo-framework/pr-preview/pr-121/assets/uk-ni-ijz-8992-YXV44tgk.jpg",Xs="/web-demo-framework/pr-preview/pr-121/assets/uk-ni-ijz-8992.thumb-DYwok8jV.jpg",ed="/web-demo-framework/pr-preview/pr-121/assets/us-hyundai-genesis-gGpAIEpi.jpg",nd="/web-demo-framework/pr-preview/pr-121/assets/us-hyundai-genesis.thumb-DEEt19Mw.jpg",td=`<?xml version="1.0" encoding="UTF-8"?>
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
`,od="Camunda Cloud",id="8.10.0",rd={name:"Camunda Web Modeler",version:"9b5d5ef"},ad=19,sd="plate-recognition-confirm",dd="default",ld=[{text:`# Confirm the number plate

The in-browser vision model read a plate from the photo. It **recommends**; you **govern** — accept its reading or correct it before it is recorded.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ConfirmHeading"},{text:'**Model reading:** {{if modelPlate = null or modelPlate = "" then "(nothing read)" else modelPlate}}',type:"text",layout:{row:"Row_modelReading",columns:null},id:"Field_ModelReading"},{label:"Number plate",description:"Edit this if the model misread the plate. What you submit is what gets recorded.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ConfirmPlate",key:"confirmedPlate",validate:{required:!0}}],cd={executionPlatform:od,executionPlatformVersion:id,exporter:rd,schemaVersion:ad,id:sd,type:dd,components:ld},md="Camunda Cloud",pd="8.10.0",ud={name:"Camunda Web Modeler",version:"9b5d5ef"},hd=19,bd="plate-recognition-manual",gd="default",fd=[{text:`# Couldn't read the plate

The vision model didn't return a confident reading for this photo (an unrecognised image, or no in-browser model connected). Enter the plate by hand, or re-run with the in-browser vision brain connected.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ManualHeading"},{label:"Number plate",description:"Type the plate exactly as it appears in the photo.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ManualPlate",key:"confirmedPlate",validate:{required:!0}}],_d={executionPlatform:md,executionPlatformVersion:pd,exporter:ud,schemaVersion:hd,id:bd,type:gd,components:fd},wd="Camunda Cloud",yd="8.10.0",vd={name:"Camunda Web Modeler",version:"9b5d5ef"},xd=19,Ed="plate-recognition-country",kd="default",Nd=[{text:`# Read a number plate

Pick the plate's **country** so the reader knows which format to extract, then start the run. Leave it on **Auto-detect** to let it guess from the shape.`,type:"text",layout:{row:"Row_countryHeading",columns:null},id:"Field_CountryHeading"},{label:"Plate country",description:"The vision model reads all text in the photo; this tells the process which country's plate format to pull out of that reading.",type:"select",layout:{row:"Row_country",columns:null},id:"Field_Country",key:"country",defaultValue:"auto",values:[{label:"Auto-detect (any format)",value:"auto"},{label:"United Kingdom",value:"uk"},{label:"India",value:"india"},{label:"Germany",value:"germany"},{label:"South Korea",value:"korea"}],validate:{required:!0}}],Pd={executionPlatform:wd,executionPlatformVersion:yd,exporter:vd,schemaVersion:xd,id:Ed,type:kd,components:Nd},Md=[{id:"uk-mk70-orj",file:"images/uk-mk70-orj.jpg",thumb:"images/uk-mk70-orj.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_MK70_ORJ_(MK_-_Manchester)_-_70_Plate_(1st_September_2020_-_28th_February_2021)_-_VW_Golf_(CarShop).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate MK70 ORJ" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"MK70 ORJ"},{id:"uk-ni-ijz-8992",file:"images/uk-ni-ijz-8992.jpg",thumb:"images/uk-ni-ijz-8992.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_(Northern_Ireland)_Number_Plate_IJZ_8992_(JZ_-_Down_(NI)_)_-_Dateless_Plate_-_Ford_Fiesta_(Woolston_Car_Centre).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK (Northern Ireland) Number Plate IJZ 8992" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"IJZ 8992"},{id:"uk-d651-rnb",file:"images/uk-d651-rnb.jpg",thumb:"images/uk-d651-rnb.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_D651_RNB_(NB_-_Manchester)_-_D_Reg_(1st_August_1986_-_31st_July_1987)_-_Ford_Capri_(The_Quick_Group).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate D651 RNB" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"D651 RNB"},{id:"de-bmw-mini",file:"images/de-bmw-mini.jpg",thumb:"images/de-bmw-mini.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_BMW_Mini_--_2018_--_1545-51.jpg",license:"CC-BY-SA-4.0",attribution:'Dietmar Rabich / Wikimedia Commons / "Dülmen, Dernekamp, BMW Mini -- 2018 -- 1545-51" / CC BY-SA 4.0',groundTruthPlate:"MS WL 545"},{id:"us-hyundai-genesis",file:"images/us-hyundai-genesis.jpg",thumb:"images/us-hyundai-genesis.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:Hyundai_Genesis_3.8_(US)_(9004912958).jpg",license:"CC-BY-SA-2.0",attribution:'Scarlet Sappho, "Hyundai Genesis 3.8 (US)" (Wikimedia Commons, CC BY-SA 2.0)',groundTruthPlate:"GWAN EUM"}],no=Md,Sd=Object.assign({"./images/de-bmw-mini.jpg":Hs,"./images/de-bmw-mini.thumb.jpg":Js,"./images/uk-d651-rnb.jpg":Ws,"./images/uk-d651-rnb.thumb.jpg":Ks,"./images/uk-mk70-orj.jpg":Zs,"./images/uk-mk70-orj.thumb.jpg":Ys,"./images/uk-ni-ijz-8992.jpg":Qs,"./images/uk-ni-ijz-8992.thumb.jpg":Xs,"./images/us-hyundai-genesis.jpg":ed,"./images/us-hyundai-genesis.thumb.jpg":nd});function Rt(e){const n=Sd[`./${e}`];if(!n)throw new Error(`plate-recognition: image asset "${e}" is in images.json but missing on disk`);return n}const Bd=no.map(e=>({id:e.id,file:Rt(e.file),thumb:Rt(e.thumb),label:e.groundTruthPlate})),Rd=Object.fromEntries(no.map(e=>[e.id,e.groundTruthPlate])),Cd=`async (job, { vision, trace, text }) => {
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
}`,Id=`async (job, { text, trace }) => {
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
}`,Ad={id:"plate-recognition",title:"Read a number plate from a photo",blurb:"Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",docsUrl:"https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",bpmn:td,forms:{"plate-recognition-country":Pd,"plate-recognition-confirm":cd,"plate-recognition-manual":_d},seed:{country:"auto"},imageInput:{label:"Pick a seed photo (its plate is known, so the scripted reader works offline) or upload your own — a live in-browser model reads a photo it has never seen.",seedImages:Bd},scriptedVision:Rd,handlers:[{elementId:"ExtractPlate",standsInFor:"Vision model — Florence-2 <OCR> on WebGPU (in-browser)",source:Cd},{elementId:"RecordResult",standsInFor:"Script task — records the governed outcome",source:Id}]},Td=`<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" xmlns:color="http://www.omg.org/spec/BPMN/non-normative/color/1.0" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_InvoicePaymentAgent" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.49.0" modeler:executionPlatform="Camunda Cloud" modeler:executionPlatformVersion="8.10.0">
  <bpmn:process id="invoice-payment-agent" name="Invoice Payment Approval Agent" isExecutable="true">
    <bpmn:startEvent id="StartEvent_InvoiceSubmitted" name="Invoice submitted for payment">
      <bpmn:extensionElements>
        <zeebe:formDefinition formId="invoice-submit" />
      </bpmn:extensionElements>
      <bpmn:outgoing>Flow_ToAgent</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_ToAgent" sourceRef="StartEvent_InvoiceSubmitted" targetRef="InvoiceReviewAgent" />
    <bpmn:adHocSubProcess id="InvoiceReviewAgent" name="Invoice Review Agent" zeebe:modelerTemplate="io.camunda.connectors.agenticai.aiagent.jobworker.v1" zeebe:modelerTemplateVersion="10">
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
      <bpmn:serviceTask id="ConvertCurrency" name="Convert currency" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
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
      <bpmn:subProcess id="RequestPaymentRelease" name="Request payment release">
        <bpmn:documentation>Call this whenever you have decided an invoice should be paid and you want to actually release the payment. Provide the USD amount to release and your reasoning. This always pauses for a human reviewer - there is no other way to pay an invoice, and every release needs their approval no matter how confident you are. You get back whether they approved or denied it, and at what amount.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:ioMapping>
            <zeebe:input source="=fromAi(toolCall.proposedAmountUSD, &#34;The USD amount you want to release for this invoice.&#34;, &#34;number&#34;)" target="agentProposedAmountUSD" />
            <zeebe:input source="=fromAi(toolCall.reasoning, &#34;Why you believe this amount should be released.&#34;, &#34;string&#34;)" target="agentReleaseReasoning" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
        <bpmn:startEvent id="RequestPaymentRelease_Start">
          <bpmn:outgoing>Flow_GateToRequest</bpmn:outgoing>
        </bpmn:startEvent>
        <bpmn:sequenceFlow id="Flow_GateToRequest" sourceRef="RequestPaymentRelease_Start" targetRef="ReviewPaymentRelease" />
      <bpmn:userTask id="ReviewPaymentRelease" name="Review release request">
        <bpmn:documentation>The human gate inside the agent's own tool loop. The reviewer sees what the agent proposed and why, and either approves the release or denies it — and the denial is handed straight back to the agent as this tool's result.</bpmn:documentation>
        <bpmn:extensionElements>
          <zeebe:userTask />
          <zeebe:formDefinition formId="payment-release-request" />
          <zeebe:ioMapping>
            <zeebe:input source="=agentProposedAmountUSD" target="approvedAmountUSD" />
          </zeebe:ioMapping>
        </bpmn:extensionElements>
        <bpmn:incoming>Flow_GateToRequest</bpmn:incoming>
        <bpmn:outgoing>Flow_ToReleaseGateway</bpmn:outgoing>
      </bpmn:userTask>
      <bpmn:sequenceFlow id="Flow_ToReleaseGateway" sourceRef="ReviewPaymentRelease" targetRef="Gateway_ReleaseApproved" />
      <bpmn:exclusiveGateway id="Gateway_ReleaseApproved" name="Release approved?" default="Flow_ReleaseDenied">
        <bpmn:incoming>Flow_ToReleaseGateway</bpmn:incoming>
        <bpmn:outgoing>Flow_ReleaseApproved</bpmn:outgoing>
        <bpmn:outgoing>Flow_ReleaseDenied</bpmn:outgoing>
      </bpmn:exclusiveGateway>
      <bpmn:sequenceFlow id="Flow_ReleaseApproved" name="approved" sourceRef="Gateway_ReleaseApproved" targetRef="ReleasePayment">
        <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">=releaseDecision = "approve"</bpmn:conditionExpression>
      </bpmn:sequenceFlow>
      <bpmn:sequenceFlow id="Flow_ReleaseDenied" name="denied" sourceRef="Gateway_ReleaseApproved" targetRef="RecordReleaseDenied" />
      <bpmn:serviceTask id="ReleasePayment" name="Release payment" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
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
      <bpmn:serviceTask id="NotifyVendorDispute" name="Notify vendor of dispute" zeebe:modelerTemplate="io.camunda.connectors.HttpJson.v2" zeebe:modelerTemplateVersion="13">
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
      <bpmndi:BPMNShape id="RequestPaymentRelease_di" bpmnElement="RequestPaymentRelease" isExpanded="true">
        <dc:Bounds x="450" y="70" width="680" height="270" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="RequestPaymentRelease_Start_di" bpmnElement="RequestPaymentRelease_Start">
        <dc:Bounds x="482" y="192" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ReviewPaymentRelease_di" bpmnElement="ReviewPaymentRelease" bioc:stroke="#0d4372" bioc:fill="#bbdefb" color:background-color="#bbdefb" color:border-color="#0d4372">
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
`,Fd=[{text:"# Submit an invoice for payment",type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{text:`Pick a scenario with the buttons above, or edit the fields directly. The four the agent behaves differently on — every one against the same 4200 USD purchase order:

| Scenario | Invoice amount | Currency | Notes |
|---|---|---|---|
| Clean match (default) | 4200 | USD | Quarterly office supplies delivery per PO, no changes. |
| Documented overage, 4.5% over | 4389 | USD | Includes pre-approved rush freight surcharge agreed with procurement on 12 Jan. |
| Foreign currency, converts and matches | 3860 | EUR | Quarterly office supplies delivery per PO, billed in euros. |
| Vague justification, 7% over (deny this one) | 4494 | USD | Additional items supplied. |

For the first three, approve the release when the **Review release request** form appears below the diagram. For the last one, the notes are just specific enough that the agent will still ask to release it - deny it instead, and watch it read the denial and notify the vendor of a dispute. Every scenario then reaches a second, independent **Final compliance sign-off** once the agent is done.`,type:"text",layout:{row:"Row_scenarios",columns:null},id:"Field_ScenarioTable"},{label:"Vendor name",type:"textfield",layout:{row:"Row_vendor",columns:null},id:"Field_VendorName",key:"vendorName",defaultValue:"Acme Office Supplies",validate:{required:!0}},{label:"Invoice number",type:"textfield",layout:{row:"Row_invoiceNumber",columns:null},id:"Field_InvoiceNumber",key:"invoiceNumber",defaultValue:"INV-10234",validate:{required:!0}},{label:"PO number",type:"textfield",layout:{row:"Row_poNumber",columns:null},id:"Field_PoNumber",key:"poNumber",defaultValue:"PO-88291",validate:{required:!0}},{label:"PO amount (USD)",type:"number",layout:{row:"Row_poAmount",columns:null},id:"Field_PoAmount",key:"poAmount",defaultValue:4200,validate:{required:!0}},{label:"Invoice amount",type:"number",layout:{row:"Row_invoiceAmount",columns:null},id:"Field_InvoiceAmount",key:"invoiceAmount",defaultValue:4200,validate:{required:!0}},{label:"Invoice currency",values:[{label:"USD",value:"USD"},{label:"EUR",value:"EUR"},{label:"GBP",value:"GBP"}],type:"select",layout:{row:"Row_invoiceCurrency",columns:null},id:"Field_InvoiceCurrency",key:"invoiceCurrency",defaultValue:"USD",validate:{required:!0}},{label:"Invoice notes",description:"Free text - the agent reads this to judge whether any overage above the PO amount is documented.",type:"textarea",layout:{row:"Row_invoiceNotes",columns:null},id:"Field_InvoiceNotes",key:"invoiceNotes",defaultValue:"Quarterly office supplies delivery per PO, no changes.",validate:{required:!0}}],jd="default",Dd="invoice-submit",Ld="Camunda Cloud",Od="8.10.0",zd={name:"Camunda Modeler",version:"5.46.1"},$d=19,Ud={components:Fd,type:jd,id:Dd,executionPlatform:Ld,executionPlatformVersion:Od,exporter:zd,schemaVersion:$d},Vd=[{text:`# Payment release requested

The agent wants to release payment for this invoice. Nothing is paid until you decide - this is one of the agent's own tools, so it's waiting on you mid-reasoning, not asking you to redo its work afterwards.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReleaseHeading"},{text:`**Vendor:** {{vendorName}}

**Invoice number:** {{invoiceNumber}}

**PO number:** {{poNumber}}

**PO amount:** {{poAmount}} USD

**Invoice amount:** {{invoiceAmount}} {{invoiceCurrency}}

**Invoice notes:** {{invoiceNotes}}

**Agent wants to release:** {{agentProposedAmountUSD}} USD

**Agent's reasoning:** {{agentReleaseReasoning}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReleaseFindings"},{label:"Amount to approve (USD)",description:"Prefilled with the agent's proposed amount - adjust it before approving if you disagree.",type:"number",layout:{row:"Row_approvedAmount",columns:null},id:"Field_ApprovedAmount",key:"approvedAmountUSD",validate:{required:!0,min:.01}},{label:"Your decision",values:[{label:"Approve release",value:"approve"},{label:"Deny release",value:"deny"}],type:"radio",layout:{row:"Row_release_decision",columns:null},id:"Field_ReleaseDecision",key:"releaseDecision",validate:{required:!0}},{label:"Comments",description:"Explain your decision - the agent reads this immediately if you deny the release, and it's shown again at final sign-off either way.",type:"textarea",layout:{row:"Row_release_comments",columns:null},id:"Field_ReleaseComments",key:"releaseReviewerComments"}],qd="default",Gd="payment-release-request",Hd="Camunda Cloud",Jd="8.10.0",Wd={name:"Camunda Modeler",version:"5.46.1"},Kd=19,Zd={components:Vd,type:qd,id:Gd,executionPlatform:Hd,executionPlatformVersion:Jd,exporter:Wd,schemaVersion:Kd},Yd=[{text:`# Final compliance sign-off

A second, independent check after the case is fully resolved. Unlike the payment-release approval, this step doesn't need to know how the agent reasoned - only what actually happened - which is exactly the kind of checkpoint any orchestration approach could bolt on after the fact.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ComplianceHeading"},{text:`**Vendor:** {{vendorName}}

**Invoice number:** {{invoiceNumber}}

**PO number:** {{poNumber}}

**PO amount:** {{poAmount}} USD

**Invoice amount:** {{invoiceAmount}} {{invoiceCurrency}}

**Payment release decision:** {{releaseDecision}}

**Amount put to the reviewer:** {{approvedAmountUSD}} USD

**Release reviewer comments:** {{releaseReviewerComments}}

**Final outcome:** {{caseOutcome}}

**Details:** {{caseSummary}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ComplianceFindings"},{label:"Compliance decision",values:[{label:"Confirm - case closed",value:"confirm"},{label:"Escalate for audit",value:"escalate"}],type:"radio",layout:{row:"Row_compliance_decision",columns:null},id:"Field_ComplianceDecision",key:"complianceDecision",validate:{required:!0}},{label:"Comments",type:"textarea",layout:{row:"Row_compliance_comments",columns:null},id:"Field_ComplianceComments",key:"complianceComments"}],Qd="default",Xd="compliance-signoff",el="Camunda Cloud",nl="8.10.0",tl={name:"Camunda Modeler",version:"5.46.1"},ol=19,il={components:Yd,type:Qd,id:Xd,executionPlatform:el,executionPlatformVersion:nl,exporter:tl,schemaVersion:ol},Ye={vendorName:"Acme Office Supplies",invoiceNumber:"INV-10234",poNumber:"PO-88291",poAmount:4200,invoiceAmount:4200,invoiceCurrency:"USD",invoiceNotes:"Quarterly office supplies delivery per PO, no changes."},rl=`async (job) => {
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

  // Nothing can be judged against a PO of zero or less, and a "0% overage"
  // fallback would read as an exact match and send it to the release path.
  if (!(poAmount > 0) || !(invoiceUSD > 0)) {
    if (v.disputeNoticeReceipt !== undefined) return { completionConditionFulfilled: true };
    return {
      variables: {
        disputeReason:
          "Cannot assess this invoice: PO amount " +
          String(v.poAmount) +
          " and invoice amount " +
          String(v.invoiceAmount) +
          " must both be greater than zero.",
      },
      activateElements: [{ elementId: "NotifyVendorDispute" }],
    };
  }

  const overage = (invoiceUSD - poAmount) / poAmount;
  const pct = (overage * 100).toFixed(1);
  // The prompt's "the invoice notes give a reason for the extra amount". Note
  // it only asks whether a reason was given, not whether it's a good one —
  // that judgement belongs to the reviewer the next tool call pauses for.
  const documented = notes.trim().length > 0;
  // "Within 2% of the PO amount" is symmetric, so a small underage is a clean
  // match too — the prompt's later "an invoice amount below the PO" case is
  // about underages that fall outside this band.
  const withinTolerance = Math.abs(overage) <= 0.02;
  const documentedOverage = overage > 0.02 && overage <= 0.1 && documented;

  // Turn 2 — ask for the release, or dispute the invoice. Asking is a tool
  // call like any other; the reviewer's answer comes back as its result.
  if (withinTolerance || documentedOverage) {
    if (v.releaseDecision === undefined) {
      const reasoning = withinTolerance
        ? "Invoice matches the PO within 2%."
        : "Invoice is " + pct + "% over the PO, and the notes document why.";
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
        activateElements: [{ elementId: "RequestPaymentRelease" }],
      };
    }

    // The tool has returned. Everything from here is decided from *its
    // result* — not from the reviewer's raw form fields, which happen to be
    // visible in the instance too. That is the whole in-loop contract: the
    // agent learns what the human decided the same way it learns what any
    // other tool did, so a denial is information it can act on.
    if (v.disputeNoticeReceipt !== undefined) return { completionConditionFulfilled: true };

    const results = Array.isArray(v.toolCallResults) ? v.toolCallResults : [];
    const latest = results.length
      ? String((results[results.length - 1] || {}).content || "")
      : String(v.toolCallResult || "");

    if (/released/i.test(latest)) return { completionConditionFulfilled: true };

    if (/denied/i.test(latest)) {
      return {
        variables: {
          // The tool's own words. Rewriting them here would be the agent
          // narrating a result it was handed, which is the coupling this
          // example exists to avoid.
          disputeReason: latest.replace(/\\s*Comments:\\s*$/, "").trim(),
        },
        activateElements: [{ elementId: "NotifyVendorDispute" }],
      };
    }

    // Asked, but nothing came back to reason about. Stopping is the honest
    // move: an agent that disputed here would be acting on the reviewer's
    // form fields behind the tool's back, which is exactly the coupling this
    // example exists to avoid.
    return { completionConditionFulfilled: true };
  }

  // Outside policy — no release is proposed at all. The vendor is told which
  // rule the invoice actually failed: the notice goes to a real counterparty,
  // so "no documented reason" had better not be sent for an invoice that came
  // with one, or for one billed under the PO.
  if (v.disputeNoticeReceipt === undefined) {
    const failure =
      overage < 0
        ? "is " + pct.replace("-", "") + "% below PO " + String(v.poNumber)
        : overage > 0.1
          ? "is " + pct + "% over PO " + String(v.poNumber) + ", beyond the 10% ceiling"
          : "is " + pct + "% over PO " + String(v.poNumber) + " with no reason given in the notes";
    return {
      variables: { disputeReason: "Invoice " + failure + "." },
      activateElements: [{ elementId: "NotifyVendorDispute" }],
    };
  }

  return { completionConditionFulfilled: true };
}`,al=`async (job, { num, text, sleep, trace }) => {
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
}`,sl=`async (job, { num, text, sleep }) => {
  // Stands in for the HTTP connector posting to the payment rail. Reachable
  // only from the approved branch of Gateway_ReleaseApproved — that is the
  // guardrail, and it is in the diagram, not in this code.
  const amount = num("approvedAmountUSD");
  const vendor = text("vendorName", "the vendor");

  // The diagram guarantees a human approved *a* release; it cannot guarantee
  // the number they left in the box makes sense. A payment rail would reject
  // this, so this stand-in does too.
  if (!(amount > 0)) {
    throw new Error(
      "Refusing to release " + JSON.stringify(amount) + " USD — the approved amount must be positive."
    );
  }

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
    // What the compliance reviewer downstream is shown. The diagram derives
    // these on the agent's output mapping, which this engine doesn't apply,
    // so they're set where it does run code — still derived from the payment
    // having actually happened, not from anything the model claimed.
    caseOutcome: "released",
    caseSummary: "Payment of " + amount + " USD released to " + vendor + ".",
    toolCallResult:
      "Payment of " + amount + " USD released to " + vendor + ". Receipt logged.",
  };
}`,dl=`async (job, { text, trace }) => {
  // The script task on the denied branch. Its whole job is to hand the denial
  // back to the agent as the result of its own RequestPaymentRelease call, so
  // the refusal arrives as information rather than as a failure.
  const comments = text("releaseReviewerComments", "");
  trace("reviewer denied the release");

  return {
    // Provisional: the prompt lets the agent stop here without disputing, and
    // that path reaches the compliance reviewer with nothing else to report.
    // NotifyVendorDispute overwrites both if the agent does go on to dispute.
    caseOutcome: "held",
    caseSummary:
      "Release denied on review; no payment made and no dispute filed. Comments: " +
      (comments || "none given"),
    toolCallResult: "Payment release denied by reviewer. Comments: " + comments,
  };
}`,ll=`async (job, { text, sleep }) => {
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
    caseOutcome: "disputed",
    caseSummary: "Vendor notified of dispute. " + reason,
    toolCallResult: "Vendor notified of dispute: " + reason,
  };
}`,cl={id:"invoice-payment",title:"Invoice payment approval agent",blurb:"A human-in-the-loop agent: the tool that releases money is a user task inside the agent's own tool loop, so approval is something the agent asks for and reasons about — and payment has exactly one incoming path, from the approved branch. A second, post-hoc sign-off outside the agent sees only what actually happened.",hero:{headline:"The agent can *ask* to pay. Only a human can *approve* it.",lede:"Camunda's human-in-the-loop agent pattern, running here on a wasm engine in your browser. Deny the release in the reviewer form and watch the agent read the denial and change course.",tagline:"Human-in-the-loop agent"},docsUrl:"https://github.com/camunda/camunda-8-tutorials/tree/main/examples/human-in-the-loop-agent",bpmn:Td,forms:{"invoice-submit":Ud,"payment-release-request":Zd,"compliance-signoff":il},seed:Ye,scenariosLabel:"Invoice to review",scenarios:[{label:"Clean match — invoice equals the PO",variables:Ye},{label:"Documented overage — 4.5% over, with a reason",variables:{...Ye,invoiceNumber:"INV-10251",invoiceAmount:4389,invoiceNotes:"Includes pre-approved rush freight surcharge agreed with procurement on 12 Jan."}},{label:"Foreign currency — EUR invoice against a USD PO",variables:{...Ye,invoiceNumber:"INV-10262",invoiceAmount:3860,invoiceCurrency:"EUR",invoiceNotes:"Quarterly office supplies delivery per PO, billed in euros."}},{label:"Vague justification — 7% over, no reason given",variables:{...Ye,invoiceNumber:"INV-10277",invoiceAmount:4494,invoiceNotes:"Additional items supplied."}}],scriptedAgent:rl,handlers:[{elementId:"ConvertCurrency",standsInFor:"HTTP connector — api.frankfurter.app exchange rates",source:al},{elementId:"ReleasePayment",standsInFor:"HTTP connector — accounts-payable payment rail",source:sl},{elementId:"RecordReleaseDenied",standsInFor:"script task — hand the denial back to the agent",source:dl},{elementId:"NotifyVendorDispute",standsInFor:"HTTP connector — vendor dispute notice",source:ll}]},ml=[zs,ns,Is,cl,Ds,Gs,Ad],pl=Object.assign({"./learn-error-boundary/index.ts":zr,"./learn-exclusive-gateway/index.ts":Hr,"./learn-message-correlation/index.ts":Zr,"./learn-multi-instance-parallel/index.ts":ea,"./learn-service-task/index.ts":ra,"./learn-signal-broadcast/index.ts":ca,"./learn-timer-catch-event/index.ts":ha,"./learn-user-task-form/index.ts":Na}),ul=Object.values(pl).map(e=>e.default).sort((e,n)=>e.id.localeCompare(n.id)),Qe=[...ml,...ul];function qn(){return"/web-demo-framework/pr-preview/pr-121/"}function hl(e){const n=qn();return e.startsWith(n)?"/"+e.slice(n.length):e}function bl(e=location.pathname){const t=hl(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function gl(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function fl(e=location.search){return new URLSearchParams(e).get("view")==="compact"?"compact":"full"}function _l(e=location.search){return new URLSearchParams(e).get("autostart")==="1"}function Ct(e){return`${qn()}examples/${encodeURIComponent(e)}`}const It="p";function wl(){const e=new URLSearchParams(location.search),n=e.get(It);if(!n)return!1;const t=n.replace(/[\t\n\r]/g,"");if(!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\"))return!1;e.delete(It);try{const o=new URL(qn(),location.href),r=new URL(t.slice(1),o);return r.origin!==location.origin?!1:(r.search=e.toString(),r.hash=location.hash,history.replaceState(null,"",r),!0)}catch{return!1}}function yl(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function At(){return{route:bl(),embed:gl(),view:fl(),autostart:_l()}}function vl(){const[e,n]=h.useState(At);return h.useEffect(()=>{const t=()=>n(At());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const Tt={headline:"The model *runs*. The code is *yours* to edit.",lede:"Every example on this page is a real BPMN process executing in your browser on the nano WebAssembly engine — edit the model, edit the handlers, swap the LLM, and run it again.",tagline:"Runnable Camunda examples"};function xl({text:e}){return i.jsx(i.Fragment,{children:e.split(/\*([^*]+)\*/g).map((n,t)=>t%2===1?i.jsx("em",{children:n},t):i.jsx(h.Fragment,{children:n},t))})}function El(){const{route:e,embed:n,view:t,autostart:o}=vl(),r=n&&t==="compact",s=Qt().brain,d=xr();zi(n);const m=e.kind==="example"?e.id:Qe[0].id,l=Qe.find(g=>g.id===m)??Qe[0],a=Qe.filter(g=>g.group!=="learn-bpmn"),p=Qe.filter(g=>g.group==="learn-bpmn"),u=g=>{yl(Ct(g),{hash:location.hash})},b=l.hero??Tt,f=i.jsxs(i.Fragment,{children:[!n&&i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"hero",children:[i.jsx("h1",{children:i.jsx(xl,{text:b.headline})}),b.lede&&i.jsx("p",{children:b.lede})]}),i.jsx("nav",{className:"example-picker","aria-label":"Scenario examples",children:a.map(g=>i.jsx(Y,{size:"sm",variant:g.id===l.id?"default":"secondary","aria-current":g.id===l.id?"page":void 0,onClick:()=>u(g.id),children:g.title},g.id))}),p.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("h2",{className:"example-group-heading",id:"learn-bpmn-heading",children:"Learn BPMN"}),i.jsx("nav",{className:"example-picker","aria-labelledby":"learn-bpmn-heading",children:p.map(g=>i.jsx(Y,{size:"sm",variant:g.id===l.id?"default":"secondary","aria-current":g.id===l.id?"page":void 0,onClick:()=>u(g.id),children:g.title},g.id))})]})]}),i.jsxs("div",{className:"example-meta",children:[!n&&l.docsUrl&&i.jsx("a",{className:"docs-link",href:l.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&i.jsx("a",{className:"open-full-page",href:Ct(l.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:r?"Open the editable version ↗":"Open full page ↗"})]}),i.jsx(Fr,{example:l,compact:r,autostart:o,initialBrainKind:s,initialTourId:d},l.id)]});return n?i.jsx("div",{className:`c4-ui app-shell app-embed${r?" app-compact":""}`,children:i.jsx("main",{id:"main",className:`layout layout-embed${r?" layout-compact":""}`,children:f})}):i.jsxs("div",{className:"c4-ui app-shell",children:[i.jsx(yo,{className:"topbar",logo:i.jsx("span",{className:"brand-dot","aria-hidden":!0}),appName:"Runnable Camunda examples",trailing:i.jsx("span",{className:"app-subtitle",children:b.tagline??Tt.tagline})}),i.jsx("main",{id:"main",className:"layout",children:f}),i.jsx("footer",{className:"footer",children:"Running locally in your browser on the nano WebAssembly BPMN engine — no cluster, no server, no data leaving the page."})]})}wl();mo.createRoot(document.getElementById("root")).render(i.jsx(h.StrictMode,{children:i.jsx(vo,{children:i.jsx(El,{})})}));export{ge as _,Ml as c};
