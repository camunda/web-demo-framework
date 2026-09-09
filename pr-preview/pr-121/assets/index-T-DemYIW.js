const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-js-BEOU0ddW.css","assets/bpmn-embedded-DcP4ujb9.css","assets/RuntimeDiagram-DTnJz5cT.js","assets/vendor-react-9Ma26nY1.js","assets/Viewer-D_7S4Gwm.js","assets/MonacoEditor-y6-RInb0.js","assets/MonacoEditor-B3OBTlkp.css","assets/vendor-modeler-BzScQTrW.js","assets/vendor-design-system-CUrMBNMa.js","assets/vendor-design-system-BHuUzrJ2.css","assets/parser-DkgAe_kI.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-Dp1CbbUE.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var ao=Object.defineProperty;var so=(e,n,t)=>n in e?ao(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var U=(e,n,t)=>so(e,typeof n!="symbol"?n+"":n,t);import{r as b,j as i,i as lo}from"./vendor-react-9Ma26nY1.js";import{B as Q,a as re,L as qe,S as Rn,b as Cn,c as In,d as An,e as Tn,A as ce,f as me,g as pe,I as tt,C as co,h as mo,i as po,j as uo,k as ho,l as bo,T as go,m as fo,n as sn,o as dn,p as _o,q as wo}from"./vendor-design-system-CUrMBNMa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const yo="modulepreload",vo=function(e){return"/web-demo-framework/pr-preview/pr-121/"+e},ot={},he=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){let d=function(a){return Promise.all(a.map(p=>Promise.resolve(p).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),m=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=d(t.map(a=>{if(a=vo(a),a in ot)return;ot[a]=!0;const p=a.endsWith(".css"),u=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":yo,p||(g.as="script"),g.crossOrigin="",g.href=a,m&&g.setAttribute("nonce",m),document.head.appendChild(g),p)return new Promise((h,f)=>{g.addEventListener("load",h),g.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(d){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=d,window.dispatchEvent(c),!c.defaultPrevented)throw d}return r.then(d=>{for(const c of d||[])c.status==="rejected"&&s(c.reason);return n().catch(s)})},xo="io.camunda.agenticai:aiagent",Ee="http://www.omg.org/spec/BPMN/20100524/MODEL",Eo="http://camunda.org/schema/zeebe/1.0";function hn(e,n){return Array.from(e.getElementsByTagNameNS(Eo,n))}function Tt(e,n){return hn(e,n).filter(t=>ko(t)===e)}function ko(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Ee&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function On(e){const n=Tt(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function it(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Ee&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function rt(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(o=>o.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function Ft(e){const n=[],t=o=>{for(const r of Array.from(o.attributes))n.push(r.value);for(const r of Array.from(o.children))t(r)};return t(e),n.join(`
`)}function No(e){return jt(Ft(e))}function Po(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Ee&&t.localName==="extensionElements");return n?jt(Ft(n)):[]}function jt(e){const n=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,t=[],o=new Set;for(const r of e.matchAll(n)){const s=r[1];o.has(s)||(o.add(s),t.push({name:s,description:(r[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:r[3]??"string"}))}return t}function Mo(e){const n={};for(const t of Tt(e,"input")){const o=t.getAttribute("target");o&&(n[o]=t.getAttribute("source")??"")}return n}function So(e){return Array.from(e.getElementsByTagNameNS(Ee,"adHocSubProcess")).filter(n=>(On(n)??"").startsWith(xo))}const Bo=new Set(["subProcess","adHocSubProcess","callActivity"]),Ro=new Set(["adHocSubProcess","subProcess","transaction"]);function Co(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Ee&&Ro.has(n.localName))return n;n=n.parentElement}return null}function Io(e,n){const t=Mo(e),o=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:On(e),systemPrompt:rt(t["data.systemPrompt.prompt"]),userPrompt:rt(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(o)&&o>0?o:10,tools:n}}function Ao(e,n){var g;const t=e.getAttribute("id")??"",o=e.getAttribute("name")??t,r=So(e);r.length>1&&n.push({severity:"warning",elementId:r.map(h=>h.getAttribute("id")).join(", "),message:`Process "${o}" hosts ${r.length} AI Agent sub-processes (${r.map(h=>h.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const s=[],d=new Map(r.map(h=>[h,[]]));for(const h of Array.from(e.getElementsByTagName("*"))){if(h.namespaceURI!==Ee||r.includes(h))continue;const f=h.getAttribute("id");if(!f)continue;const N=Co(h),v=N&&r.includes(N)?N:null;if(v&&Bo.has(h.localName)){const A=h.getAttribute("name")??f,x=it(h);s.push({elementId:f,label:A,jobType:"",documentation:x,isTool:!0,compound:!0}),d.get(v).push({elementId:f,label:A,jobType:"",documentation:x,args:Po(h),compound:!0});continue}const _=On(h);if(!_)continue;const E={elementId:f,label:h.getAttribute("name")??f,jobType:_,documentation:it(h),isTool:v!=null};s.push(E),v&&d.get(v).push({elementId:f,label:E.label,jobType:_,documentation:E.documentation,args:No(h)})}const c=r.map(h=>Io(h,d.get(h))),m=Array.from(e.getElementsByTagNameNS(Ee,"userTask")).map(h=>{var f;return{elementId:h.getAttribute("id")??"",label:h.getAttribute("name")??h.getAttribute("id")??"",formId:((f=hn(h,"formDefinition")[0])==null?void 0:f.getAttribute("formId"))??void 0}}),a=Array.from(e.children).find(h=>h.namespaceURI===Ee&&h.localName==="startEvent"),p=a?((g=hn(a,"formDefinition")[0])==null?void 0:g.getAttribute("formId"))??void 0:void 0,u=a?To(a):void 0;return{processId:t,processName:o,tasks:s,agents:c,userTasks:m,startFormId:p,startMessage:u}}function To(e){var s;const n=Array.from(e.children).find(d=>d.namespaceURI===Ee&&d.localName==="messageEventDefinition"),t=n==null?void 0:n.getAttribute("messageRef");if(!t)return;const o=Array.from(e.ownerDocument.getElementsByTagNameNS(Ee,"message")).find(d=>d.getAttribute("id")===t);if(!o)return;const r=o.getAttribute("name");if(r)return{messageName:r,correlationKey:((s=hn(o,"subscription")[0])==null?void 0:s.getAttribute("correlationKey"))??"",elementId:e.getAttribute("id")??""}}function Fo(e,n){const t=e.trim().replace(/^=/,"").trim(),o=t.match(/^"((?:[^"\\]|\\.)*)"$/);if(o)return jo(o[1]);if(/^[A-Za-z_$][\w$]*$/.test(t)){const r=n[t];return r==null?"":String(r)}return t}function jo(e){return e.replace(/\\(["'\\/nrt]|u[0-9a-fA-F]{4})/g,(n,t)=>{switch(t[0]){case"n":return`
`;case"r":return"\r";case"t":return"	";case"u":return String.fromCharCode(parseInt(t.slice(1),16));default:return t}})}function Do(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),o=t.getElementsByTagName("parsererror")[0];if(o)throw new Error(`Invalid BPMN XML: ${o.textContent}`);const r=Array.from(t.getElementsByTagNameNS(Ee,"process"));if(r.length===0)throw new Error("No <bpmn:process> in the diagram.");const s=[],d=r.map(m=>Ao(m,s));let c=n.processId?d.find(m=>m.processId===n.processId):void 0;return n.processId&&!c&&s.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${d[0].processId}".`}),c??(c=d[0]),d.length>1&&s.push({severity:"warning",message:`Diagram has ${d.length} <bpmn:process> elements (${d.map(m=>m.processId).join(", ")}); using "${c.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:d,diagnostics:s,processId:c.processId,processName:c.processName,tasks:c.tasks,agent:c.agents[0]??null,agents:d.flatMap(m=>m.agents),userTasks:c.userTasks,startFormId:c.startFormId,startMessage:c.startMessage}}function Lo(e){return e?e.imageId?{imageId:e.imageId}:e.imageName?{imageName:e.imageName}:{}:{}}function Dt(e,n){return n?e.pixels:e.imageId??e.pixels}const Oo="No image selected — pick or upload a photo to read.";function at(){return Oo}function zo(e,n){return async t=>{const o=e.resolve(n);if(!o)return at();const r=Dt(o,e.live);if(r===void 0)return at();try{return await e.read(r,t)}catch(s){return`Couldn't read the image (${s instanceof Error?s.message:String(s)}).`}}}function $o(e,n){return async()=>{const t=e.resolve(n);if(t)return Dt(t,e.live)}}function Uo(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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
  <\/script></body></html>`}function Lt(e,n={}){const{timeoutMs:t=5e3,onTrace:o,onVision:r,onImage:s}=n,d=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((c,m)=>{const a=document.createElement("iframe");a.setAttribute("sandbox","allow-scripts"),a.style.display="none",a.setAttribute("aria-hidden","true");let p=!1,u;const g=()=>{u&&clearTimeout(u),window.removeEventListener("message",f),a.remove()},h=v=>{p||(p=!0,g(),v())};function f(v){var E;if(v.source!==a.contentWindow)return;const _=v.data;if(!(!_||typeof _!="object")){if(_.kind==="ready"){const A=e.job,x=e.kind==="run-handler"?{kind:"run-handler",id:d,source:e.source,job:A,hasVision:e.hasVision}:{kind:"run-agent",id:d,source:e.source,job:A};(E=a.contentWindow)==null||E.postMessage(x,"*");return}"id"in _&&_.id!==d||(_.kind==="trace"?o==null||o(_.text):_.kind==="vision-request"?N(_.callId,r,"vision",_.prompt):_.kind==="image-request"?N(_.callId,s,"image"):_.kind==="result"?h(()=>c(_.value)):_.kind==="error"&&h(()=>m(new Error(_.message))))}}function N(v,_,E,...A){const x=ne=>{var W;return(W=a.contentWindow)==null?void 0:W.postMessage(ne,"*")};if(!_){x({kind:"helper-error",id:d,callId:v,message:`${E} helper is not available.`});return}Promise.resolve().then(()=>_(...A)).then(ne=>x({kind:"helper-result",id:d,callId:v,value:ne}),ne=>x({kind:"helper-error",id:d,callId:v,message:ne instanceof Error?ne.message:String(ne)}))}window.addEventListener("message",f),u=setTimeout(()=>{h(()=>m(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),a.srcdoc=Uo(),document.body.appendChild(a)})}function Ot(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function Vo(e,n,t){const o=typeof t.vision=="function";return Lt({kind:"run-handler",source:e,job:Ot(n),hasVision:o},{onTrace:t.trace,onVision:t.vision?r=>t.vision(r):void 0,onImage:t.image?()=>t.image():void 0})}function qo(e,n){return Lt({kind:"run-agent",source:e,job:Ot(n)})}function zt(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function Go(e){return zt(e,"Handler code"),(n,t)=>Vo(e,n,t)}function Ho(e){return zt(e,"Agent code"),n=>qo(e,n)}function Jo(e,n,t,o){return{sleep:r=>new Promise(s=>setTimeout(s,r)),trace:r=>n({kind:"tool",text:`   ${r}`,elementId:e.elementId,turn:t}),text:(r,s="")=>{const d=e.variables[r];return typeof d=="string"?d:d==null?s:String(d)},num:(r,s=0)=>{const d=e.variables[r],c=typeof d=="number"?d:Number(d);return Number.isFinite(c)?c:s},...o?{vision:zo(o,e.instanceKey),image:$o(o,e.instanceKey)}:{}}}function Wo(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Ko(e,n,t,o,r){const s={},d=e.processes.flatMap(m=>m.tasks),c=new Map(d.map(m=>[m.elementId,m.label]));for(const m of d)m.compound||s[m.jobType]||(s[m.jobType]=async a=>{const p=n[a.elementId];if(!p)throw new Error(`No handler registered for ${a.elementId} (job type ${a.type})`);const u=c.get(a.elementId)??a.elementId,g=o==null?void 0:o.current;t({kind:"tool",text:`▶ ${u}`,elementId:a.elementId,turn:g});const h=await p(a,Jo(a,t,g,r));return t({kind:"vars",text:`  ↳ ${Wo(h)}`,elementId:a.elementId,result:h,turn:g}),h});return s}const Zo=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function tn(...e){const n=Object.create(null);for(const t of e)if(t)for(const o of Object.keys(t))n[o]=t[o];return n}function $t(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function Ut(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yo(e){return Ut(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function Qo(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xo(e){return JSON.stringify(e).slice(1,-1)}function ei(e,n){const t=e.lastIndexOf("<",n),o=e.lastIndexOf(">",n);if(t<=o)return"text";const r=e.slice(t,n);if((r.match(/"/g)??[]).length%2===0)return"text";const d=r.lastIndexOf('"');return(r.slice(d+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function ni(e,n,t="xml"){const o=[],r=new Set;return{result:e.replace(Zo,(d,c,m)=>{const a=c.trim();if(!Object.prototype.hasOwnProperty.call(n,a))return r.has(a)||(r.add(a),o.push(a)),d;const p=n[a];if(t==="json")return Xo(p);const u=ei(e,m);return u==="feel-literal"?Qo(p):u==="attribute"?Yo(p):Ut(p)}),unresolved:o}}function ti(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function oi(e,n={},t=e.bpmn,o={}){const r=[],s=tn(e.templates,o),{result:d,unresolved:c}=ni(t,s,"xml");for(const _ of c)r.push({severity:"warning",message:`Template placeholder "{{${_}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let m;try{m=Do(d)}catch(_){return r.push({severity:"error",message:_ instanceof Error?_.message:String(_)}),{resolvedBpmn:d,model:ti(),handlers:{},forms:{},diagnostics:r,hasErrors:!0}}r.push(...m.diagnostics);const a=m.processes.flatMap(_=>_.tasks),p=new Map(e.handlers.map(_=>[_.elementId,_.source])),u={};for(const _ of a){if(_.compound)continue;const E=n[_.elementId]??p.get(_.elementId);if(E===void 0){r.push({severity:"error",elementId:_.elementId,jobType:_.jobType,message:`No handler for "${_.label}" (${_.elementId}, job type "${_.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{u[_.elementId]=Go(E)}catch(A){r.push({severity:"error",elementId:_.elementId,jobType:_.jobType,message:`"${_.label}" (${_.elementId}): handler code didn't compile — ${A instanceof Error?A.message:String(A)}`})}}const g=new Set(a.map(_=>_.elementId)),h=new Set([...p.keys(),...Object.keys(n)]);for(const _ of h)g.has(_)||r.push({severity:"error",elementId:_,message:`Handler "${_}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const f={},N=e.forms??{},v=(_,E)=>{if(!_)return;const A=N[_];A?f[_]=A:r.push({severity:"error",formId:_,message:`${E} references form "${_}", which has no matching schema.`})};for(const _ of m.processes){v(_.startFormId,`The start event of process "${_.processName}"`);for(const E of _.userTasks)v(E.formId,`User task "${E.label}" (${E.elementId})`)}return{resolvedBpmn:d,model:m,handlers:u,forms:f,diagnostics:r,hasErrors:r.some(_=>_.severity==="error")}}function ii(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let o=n;o<e.length;o++)if(e[o]==="{")t++;else if(e[o]==="}"&&(t--,t===0))try{const r=JSON.parse(e.slice(n,o+1));return typeof r=="object"&&r!==null&&!Array.isArray(r)?r:null}catch{return null}return null}function Fn(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function st(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function dt(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:st(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,o=Array.isArray(t)?t:Object.values(e).find(s=>Array.isArray(s))??[],r=[];for(const s of o)if(typeof s=="string")s.trim()&&r.push({name:s.trim(),args:{}});else if(s&&typeof s=="object"){const d=s,c=d.name??d.tool??d.id??d.function;typeof c=="string"&&c.trim()&&r.push({name:c.trim(),args:st(d)})}return r}function ri(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function lt(e){const n=e.args.length?e.args.map(o=>`      ${o.name} (${o.type}) — ${o.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function ai(e,n,t){const o=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",r=t[0]??e.tools[0],s=r!=null&&r.args.length?`{${r.args.map(d=>`"${d.name}": "…"`).join(", ")}}`:"{}";return n?`${o}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${t.map(lt).join(`

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

${t.map(lt).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(r==null?void 0:r.elementId)??"ToolName"}", "arguments": ${s}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function si(e,n,t,o,r=[],s=[],d=!1){const c=e.userPrompt||"Carry out your task.",m=Object.entries(n).filter(([,p])=>typeof p=="string"&&p.trim().length>0).map(([p,u])=>`  ${p}: ${String(u)}`),a=[c,m.length?`Case data:
${m.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return a.push(t.length?`${d?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),a.push(o.length?`Tools still available:
${o.map(p=>`  ${p.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),s.length&&a.push(`Your last reply was rejected: ${s.join("; ")}. Do not repeat it.`),r.length&&a.push(`You reported that you are done, but ${r.join(" and ")} ${r.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${r.length===1?"it":"them"} now.`),a.push("Which tool should run next? Reply with JSON only."),a.join(`

`)}async function di(e,n,t,o,r,s){let d="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:s});const c=await e(o,r,m=>{d+=m,n({kind:"llm",text:`${Fn(d)} ▍`,key:t,pending:!0,turn:s})});return n({kind:"llm",text:Fn(c||d)||"(empty reply)",key:t,pending:!1,turn:s}),c}function li(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function ci(e,n,t){const o={},r=new Map,s=new Map;for(const{tool:d,args:c}of e){const m={};for(const a of d.args){const p=c[a.name];if(!(p!=null&&p!=="")){n({kind:"error",text:`🤖 ${d.elementId}: model supplied no value for "${a.name}"`,turn:t,elementId:d.elementId});continue}const g=r.get(a.name);if(g!==void 0&&g!==d.elementId){n({kind:"error",text:`🤖 argument name collision on "${a.name}": both ${g} and ${d.elementId} declare it — ${g} already claimed it this turn, ${d.elementId}'s value is dropped`,turn:t,elementId:d.elementId});continue}const h=li(a.type,p);if(!h.ok){n({kind:"error",text:`🤖 ${d.elementId}: "${a.name}" is declared as ${a.type} but the model supplied ${JSON.stringify(p)} — rejected, not passed through`,turn:t,elementId:d.elementId});continue}o[a.name]=h.value,m[a.name]=h.value,r.set(a.name,d.elementId)}s.set(d.elementId,m)}return{variablesOut:o,forHistory:s}}function mi(e,n,t,o={}){const{maxNewTokens:r=384,allowRepeats:s=!1,allowMultiToolTurns:d=!1,turnRef:c,requiredTools:m=[],maxEarlyDoneNudges:a=1,maxUnproductiveTurns:p=3}=o;let u=0;const g=new Set,h=[];let f=0,N=[],v=[];return async _=>{const E=_.variables,A=E.toolCallResult;A!==void 0&&h.length&&(h[h.length-1]=`${h[h.length-1]} → ${Fn(JSON.stringify(A),160)}`);let x=0;for(;;){const W=await ne();if(W)return W;if(x+=1,x>=p)return t({kind:"error",text:`🤖 ${x} turns in a row activated nothing — completing the agent. The model has lost the reply format; whatever it has already run stands.`,turn:u}),{completionConditionFulfilled:!0}}async function ne(){if(u+=1,c&&(c.current=u),u>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:u}),{completionConditionFulfilled:!0};const W=s?e.tools:e.tools.filter(P=>!g.has(P.elementId));if(W.length===0)return t({kind:"agent",text:"🤖 every tool has run — completing the agent",turn:u}),{completionConditionFulfilled:!0};const te=[{role:"system",content:ai(e,d,W)},{role:"user",content:si(e,E,h,W,N,v,s)}];N=[],v=[];let Pe;try{Pe=await di(n,t,`llm-turn-${u}`,te,r,u)}catch(P){return t({kind:"error",text:`LLM call failed: ${P instanceof Error?P.message:String(P)} — completing the agent.`,turn:u}),{completionConditionFulfilled:!0}}const be=ii(Pe);if(ri(be)&&dt(be).length===0){const P=m.filter(z=>!g.has(z));return P.length&&f<a?(f+=1,N=P,t({kind:"agent",text:`🤖 model says it is done, but ${P.join(", ")} hasn't run — asking once more`,turn:u}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:u}),{completionConditionFulfilled:!0})}const Ie=dt(be);if(Ie.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:u}),v=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const X=[],ge=[],de=[];for(const P of Ie){const z=e.tools.find(O=>O.elementId===P.name);if(!z){ge.push(P.name);continue}if(!s&&g.has(z.elementId)){de.push(z.elementId);continue}X.push({tool:z,args:P.args})}if(ge.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${ge.join(", ")} — nothing activated`,turn:u}),de.length&&t({kind:"error",text:`🤖 model asked to re-run ${de.join(", ")} — skipped (already run)`,turn:u}),X.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:u}),v=[...ge.length?[`${ge.join(", ")} ${ge.length===1?"is":"are"} not a real tool`]:[],...de.length?[`${de.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:C,forHistory:R}=ci(X,t,u);for(const{tool:P}of X)g.add(P.elementId),h.push(`- ${P.elementId}(${JSON.stringify(R.get(P.elementId))})`);for(const{tool:P}of X)t({kind:"agent",text:`🤖 calling ${P.elementId}`,turn:u,elementId:P.elementId,args:R.get(P.elementId)??{}});return{activateElements:X.map(P=>({elementId:P.tool.elementId})),variables:C}}}}function pi(e,n,t,o={}){const r=new Map(e.map(s=>[s.elementId,mi(s,n,t,o)]));return async s=>{const d=r.get(s.elementId);if(!d)throw new Error(`No agent host registered for "${s.elementId}"`);return d(s)}}class jn{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,ct.unregister(this),n}free(){const n=this.__destroy_into_raw();l.__wbg_testengine_free(n,0)}activateJobs(n,t,o,r){let s,d;try{const h=l.__wbindgen_add_to_stack_pointer(-16),f=T(n,l.__wbindgen_export,l.__wbindgen_export2),N=I,v=T(r,l.__wbindgen_export,l.__wbindgen_export2),_=I;l.testengine_activateJobs(h,this.__wbg_ptr,f,N,t,o,v,_);var c=y().getInt32(h+0,!0),m=y().getInt32(h+4,!0),a=y().getInt32(h+8,!0),p=y().getInt32(h+12,!0),u=c,g=m;if(p)throw u=0,g=0,G(a);return s=u,d=g,V(u,g)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(s,d,1)}}advanceTime(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16);l.testengine_advanceTime(p,this.__wbg_ptr,n);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),c=y().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,V(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}assignUserTask(n,t,o){let r,s;try{const g=l.__wbindgen_add_to_stack_pointer(-16),h=T(n,l.__wbindgen_export,l.__wbindgen_export2),f=I,N=T(t,l.__wbindgen_export,l.__wbindgen_export2),v=I;l.testengine_assignUserTask(g,this.__wbg_ptr,h,f,N,v,o);var d=y().getInt32(g+0,!0),c=y().getInt32(g+4,!0),m=y().getInt32(g+8,!0),a=y().getInt32(g+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,V(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}broadcastSignal(n,t){let o,r;try{const u=l.__wbindgen_add_to_stack_pointer(-16),g=T(n,l.__wbindgen_export,l.__wbindgen_export2),h=I,f=T(t,l.__wbindgen_export,l.__wbindgen_export2),N=I;l.testengine_broadcastSignal(u,this.__wbg_ptr,g,h,f,N);var s=y().getInt32(u+0,!0),d=y().getInt32(u+4,!0),c=y().getInt32(u+8,!0),m=y().getInt32(u+12,!0),a=s,p=d;if(m)throw a=0,p=0,G(c);return o=a,r=p,V(a,p)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(o,r,1)}}cancelInstance(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16),u=T(n,l.__wbindgen_export,l.__wbindgen_export2),g=I;l.testengine_cancelInstance(p,this.__wbg_ptr,u,g);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),c=y().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,V(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}completeAgentJob(n,t,o){let r,s;try{const g=l.__wbindgen_add_to_stack_pointer(-16),h=T(n,l.__wbindgen_export,l.__wbindgen_export2),f=I,N=T(t,l.__wbindgen_export,l.__wbindgen_export2),v=I,_=T(o,l.__wbindgen_export,l.__wbindgen_export2),E=I;l.testengine_completeAgentJob(g,this.__wbg_ptr,h,f,N,v,_,E);var d=y().getInt32(g+0,!0),c=y().getInt32(g+4,!0),m=y().getInt32(g+8,!0),a=y().getInt32(g+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,V(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}completeJob(n,t){let o,r;try{const u=l.__wbindgen_add_to_stack_pointer(-16),g=T(n,l.__wbindgen_export,l.__wbindgen_export2),h=I,f=T(t,l.__wbindgen_export,l.__wbindgen_export2),N=I;l.testengine_completeJob(u,this.__wbg_ptr,g,h,f,N);var s=y().getInt32(u+0,!0),d=y().getInt32(u+4,!0),c=y().getInt32(u+8,!0),m=y().getInt32(u+12,!0),a=s,p=d;if(m)throw a=0,p=0,G(c);return o=a,r=p,V(a,p)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(o,r,1)}}completeUserTask(n,t){let o,r;try{const u=l.__wbindgen_add_to_stack_pointer(-16),g=T(n,l.__wbindgen_export,l.__wbindgen_export2),h=I,f=T(t,l.__wbindgen_export,l.__wbindgen_export2),N=I;l.testengine_completeUserTask(u,this.__wbg_ptr,g,h,f,N);var s=y().getInt32(u+0,!0),d=y().getInt32(u+4,!0),c=y().getInt32(u+8,!0),m=y().getInt32(u+12,!0),a=s,p=d;if(m)throw a=0,p=0,G(c);return o=a,r=p,V(a,p)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(o,r,1)}}correlateMessage(n,t,o){let r,s;try{const g=l.__wbindgen_add_to_stack_pointer(-16),h=T(n,l.__wbindgen_export,l.__wbindgen_export2),f=I,N=T(t,l.__wbindgen_export,l.__wbindgen_export2),v=I,_=T(o,l.__wbindgen_export,l.__wbindgen_export2),E=I;l.testengine_correlateMessage(g,this.__wbg_ptr,h,f,N,v,_,E);var d=y().getInt32(g+0,!0),c=y().getInt32(g+4,!0),m=y().getInt32(g+8,!0),a=y().getInt32(g+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,V(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}createInstance(n,t,o){let r,s;try{const g=l.__wbindgen_add_to_stack_pointer(-16),h=T(n,l.__wbindgen_export,l.__wbindgen_export2),f=I,N=T(t,l.__wbindgen_export,l.__wbindgen_export2),v=I;l.testengine_createInstance(g,this.__wbg_ptr,h,f,N,v,fi(o)?Number.MAX_SAFE_INTEGER:o>>0);var d=y().getInt32(g+0,!0),c=y().getInt32(g+4,!0),m=y().getInt32(g+8,!0),a=y().getInt32(g+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,V(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}debugClear(){l.testengine_debugClear(this.__wbg_ptr)}debugCreateInstance(n,t,o){let r,s;try{const g=l.__wbindgen_add_to_stack_pointer(-16),h=T(n,l.__wbindgen_export,l.__wbindgen_export2),f=I,N=T(t,l.__wbindgen_export,l.__wbindgen_export2),v=I,_=T(o,l.__wbindgen_export,l.__wbindgen_export2),E=I;l.testengine_debugCreateInstance(g,this.__wbg_ptr,h,f,N,v,_,E);var d=y().getInt32(g+0,!0),c=y().getInt32(g+4,!0),m=y().getInt32(g+8,!0),a=y().getInt32(g+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,V(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}get debugIsPaused(){return l.testengine_debugIsPaused(this.__wbg_ptr)!==0}debugResume(){let n,t;try{const a=l.__wbindgen_add_to_stack_pointer(-16);l.testengine_debugResume(a,this.__wbg_ptr);var o=y().getInt32(a+0,!0),r=y().getInt32(a+4,!0),s=y().getInt32(a+8,!0),d=y().getInt32(a+12,!0),c=o,m=r;if(d)throw c=0,m=0,G(s);return n=c,t=m,V(c,m)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(n,t,1)}}debugStep(){let n,t;try{const a=l.__wbindgen_add_to_stack_pointer(-16);l.testengine_debugStep(a,this.__wbg_ptr);var o=y().getInt32(a+0,!0),r=y().getInt32(a+4,!0),s=y().getInt32(a+8,!0),d=y().getInt32(a+12,!0),c=o,m=r;if(d)throw c=0,m=0,G(s);return n=c,t=m,V(c,m)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(n,t,1)}}deploy(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16),u=T(n,l.__wbindgen_export,l.__wbindgen_export2),g=I;l.testengine_deploy(p,this.__wbg_ptr,u,g);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),c=y().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,V(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}deployForm(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16),u=T(n,l.__wbindgen_export,l.__wbindgen_export2),g=I;l.testengine_deployForm(p,this.__wbg_ptr,u,g);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),c=y().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,V(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}deployResource(n,t){let o,r;try{const u=l.__wbindgen_add_to_stack_pointer(-16),g=T(n,l.__wbindgen_export,l.__wbindgen_export2),h=I,f=T(t,l.__wbindgen_export,l.__wbindgen_export2),N=I;l.testengine_deployResource(u,this.__wbg_ptr,g,h,f,N);var s=y().getInt32(u+0,!0),d=y().getInt32(u+4,!0),c=y().getInt32(u+8,!0),m=y().getInt32(u+12,!0),a=s,p=d;if(m)throw a=0,p=0,G(c);return o=a,r=p,V(a,p)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(o,r,1)}}events(){let n,t;try{const a=l.__wbindgen_add_to_stack_pointer(-16);l.testengine_events(a,this.__wbg_ptr);var o=y().getInt32(a+0,!0),r=y().getInt32(a+4,!0),s=y().getInt32(a+8,!0),d=y().getInt32(a+12,!0),c=o,m=r;if(d)throw c=0,m=0,G(s);return n=c,t=m,V(c,m)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(n,t,1)}}failJob(n,t,o){let r,s;try{const g=l.__wbindgen_add_to_stack_pointer(-16),h=T(n,l.__wbindgen_export,l.__wbindgen_export2),f=I,N=T(o,l.__wbindgen_export,l.__wbindgen_export2),v=I;l.testengine_failJob(g,this.__wbg_ptr,h,f,t,N,v);var d=y().getInt32(g+0,!0),c=y().getInt32(g+4,!0),m=y().getInt32(g+8,!0),a=y().getInt32(g+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,V(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}migrate(n,t,o){let r,s;try{const g=l.__wbindgen_add_to_stack_pointer(-16),h=T(n,l.__wbindgen_export,l.__wbindgen_export2),f=I,N=T(t,l.__wbindgen_export,l.__wbindgen_export2),v=I,_=T(o,l.__wbindgen_export,l.__wbindgen_export2),E=I;l.testengine_migrate(g,this.__wbg_ptr,h,f,N,v,_,E);var d=y().getInt32(g+0,!0),c=y().getInt32(g+4,!0),m=y().getInt32(g+8,!0),a=y().getInt32(g+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,V(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}modify(n,t,o){let r,s;try{const g=l.__wbindgen_add_to_stack_pointer(-16),h=T(n,l.__wbindgen_export,l.__wbindgen_export2),f=I,N=T(t,l.__wbindgen_export,l.__wbindgen_export2),v=I,_=T(o,l.__wbindgen_export,l.__wbindgen_export2),E=I;l.testengine_modify(g,this.__wbg_ptr,h,f,N,v,_,E);var d=y().getInt32(g+0,!0),c=y().getInt32(g+4,!0),m=y().getInt32(g+8,!0),a=y().getInt32(g+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,V(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}constructor(){const n=l.testengine_new();return this.__wbg_ptr=n,ct.register(this,this.__wbg_ptr,this),this}get now(){return l.testengine_now(this.__wbg_ptr)}reset(){l.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16),u=T(n,l.__wbindgen_export,l.__wbindgen_export2),g=I;l.testengine_resolveIncident(p,this.__wbg_ptr,u,g);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),c=y().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,V(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}setVariables(n,t,o){let r,s;try{const g=l.__wbindgen_add_to_stack_pointer(-16),h=T(n,l.__wbindgen_export,l.__wbindgen_export2),f=I,N=T(t,l.__wbindgen_export,l.__wbindgen_export2),v=I;l.testengine_setVariables(g,this.__wbg_ptr,h,f,N,v,o);var d=y().getInt32(g+0,!0),c=y().getInt32(g+4,!0),m=y().getInt32(g+8,!0),a=y().getInt32(g+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,V(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}snapshot(){let n,t;try{const a=l.__wbindgen_add_to_stack_pointer(-16);l.testengine_snapshot(a,this.__wbg_ptr);var o=y().getInt32(a+0,!0),r=y().getInt32(a+4,!0),s=y().getInt32(a+8,!0),d=y().getInt32(a+12,!0),c=o,m=r;if(d)throw c=0,m=0,G(s);return n=c,t=m,V(c,m)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(n,t,1)}}throwError(n,t,o){let r,s;try{const g=l.__wbindgen_add_to_stack_pointer(-16),h=T(n,l.__wbindgen_export,l.__wbindgen_export2),f=I,N=T(t,l.__wbindgen_export,l.__wbindgen_export2),v=I,_=T(o,l.__wbindgen_export,l.__wbindgen_export2),E=I;l.testengine_throwError(g,this.__wbg_ptr,h,f,N,v,_,E);var d=y().getInt32(g+0,!0),c=y().getInt32(g+4,!0),m=y().getInt32(g+8,!0),a=y().getInt32(g+12,!0),p=d,u=c;if(a)throw p=0,u=0,G(m);return r=p,s=u,V(p,u)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(r,s,1)}}tickNow(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16);l.testengine_tickNow(p,this.__wbg_ptr,n);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),c=y().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,V(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}unassignUserTask(n){let t,o;try{const p=l.__wbindgen_add_to_stack_pointer(-16),u=T(n,l.__wbindgen_export,l.__wbindgen_export2),g=I;l.testengine_unassignUserTask(p,this.__wbg_ptr,u,g);var r=y().getInt32(p+0,!0),s=y().getInt32(p+4,!0),d=y().getInt32(p+8,!0),c=y().getInt32(p+12,!0),m=r,a=s;if(c)throw m=0,a=0,G(d);return t=m,o=a,V(m,a)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(t,o,1)}}updateRetries(n,t){let o,r;try{const u=l.__wbindgen_add_to_stack_pointer(-16),g=T(n,l.__wbindgen_export,l.__wbindgen_export2),h=I;l.testengine_updateRetries(u,this.__wbg_ptr,g,h,t);var s=y().getInt32(u+0,!0),d=y().getInt32(u+4,!0),c=y().getInt32(u+8,!0),m=y().getInt32(u+12,!0),a=s,p=d;if(m)throw a=0,p=0,G(c);return o=a,r=p,V(a,p)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(o,r,1)}}updateUserTask(n,t){let o,r;try{const u=l.__wbindgen_add_to_stack_pointer(-16),g=T(n,l.__wbindgen_export,l.__wbindgen_export2),h=I,f=T(t,l.__wbindgen_export,l.__wbindgen_export2),N=I;l.testengine_updateUserTask(u,this.__wbg_ptr,g,h,f,N);var s=y().getInt32(u+0,!0),d=y().getInt32(u+4,!0),c=y().getInt32(u+8,!0),m=y().getInt32(u+12,!0),a=s,p=d;if(m)throw a=0,p=0,G(c);return o=a,r=p,V(a,p)}finally{l.__wbindgen_add_to_stack_pointer(16),l.__wbindgen_export3(o,r,1)}}}Symbol.dispose&&(jn.prototype[Symbol.dispose]=jn.prototype.free);function ui(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_bb96b2010945f0bc:function(n,t){throw new Error(V(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const o=V(n,t);return hi(o)},__wbindgen_object_drop_ref:function(n){G(n)}}}}const ct=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>l.__wbg_testengine_free(e,1));function hi(e){en===Ce.length&&Ce.push(Ce.length+1);const n=en;return en=Ce[n],Ce[n]=e,n}function bi(e){e<1028||(Ce[e]=en,en=e)}let Ue=null;function y(){return(Ue===null||Ue.buffer.detached===!0||Ue.buffer.detached===void 0&&Ue.buffer!==l.memory.buffer)&&(Ue=new DataView(l.memory.buffer)),Ue}function V(e,n){return wi(e>>>0,n)}let Xe=null;function mn(){return(Xe===null||Xe.byteLength===0)&&(Xe=new Uint8Array(l.memory.buffer)),Xe}function gi(e){return Ce[e]}let Ce=new Array(1024).fill(void 0);Ce.push(void 0,null,!0,!1);let en=Ce.length;function fi(e){return e==null}function T(e,n,t){if(t===void 0){const c=nn.encode(e),m=n(c.length,1)>>>0;return mn().subarray(m,m+c.length).set(c),I=c.length,m}let o=e.length,r=n(o,1)>>>0;const s=mn();let d=0;for(;d<o;d++){const c=e.charCodeAt(d);if(c>127)break;s[r+d]=c}if(d!==o){d!==0&&(e=e.slice(d)),r=t(r,o,o=d+e.length*3,1)>>>0;const c=mn().subarray(r+d,r+o),m=nn.encodeInto(e,c);d+=m.written,r=t(r,o,d,1)>>>0}return I=d,r}function G(e){const n=gi(e);return bi(e),n}let pn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});pn.decode();const _i=2146435072;let Nn=0;function wi(e,n){return Nn+=n,Nn>=_i&&(pn=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),pn.decode(),Nn=n),pn.decode(mn().subarray(e,e+n))}const nn=new TextEncoder;"encodeInto"in nn||(nn.encodeInto=function(e,n){const t=nn.encode(e);return n.set(t),{read:e.length,written:t.length}});let I=0,l;function yi(e,n){return l=e.exports,Ue=null,Xe=null,l}async function vi(e,n){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const o=await e.arrayBuffer();return await WebAssembly.instantiate(o,n)}else{const o=await WebAssembly.instantiate(e,n);return o instanceof WebAssembly.Instance?{instance:o,module:e}:o}function t(o){switch(o){case"basic":case"cors":case"default":return!0}return!1}}async function xi(e){if(l!==void 0)return l;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/web-demo-framework/pr-preview/pr-121/assets/nanobpmn_engine_bg-DRNrIVE8.wasm",import.meta.url));const n=ui();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:o}=await vi(await e,n);return yi(t)}let ln=null;function Ei(e){return ln||(ln=xi(void 0).then(()=>{}).catch(n=>{throw ln=null,n})),ln}function oe(e){return JSON.parse(e)}class ki{constructor(n){U(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return oe(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,o,r){return JSON.parse(this.engine.activateJobs(n,t,o,r))}completeJob(n,t){return oe(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:o,...r}=t??{};return oe(this.engine.completeAgentJob(n,JSON.stringify(o??{}),JSON.stringify(r??{})))}failJob(n,t,o){return oe(this.engine.failJob(n,t,o))}throwError(n,t,o){return oe(this.engine.throwError(n,t,o))}updateRetries(n,t){return oe(this.engine.updateRetries(n,t))}resolveIncident(n){return oe(this.engine.resolveIncident(n))}setVariables(n,t,o){return oe(this.engine.setVariables(n,t||"{}",o))}broadcastSignal(n,t){return oe(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return oe(this.engine.cancelInstance(n))}modify(n,t,o){return oe(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(o??[])))}completeUserTask(n,t){return oe(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,o){return oe(this.engine.assignUserTask(n,t,o))}unassignUserTask(n){return oe(this.engine.unassignUserTask(n))}updateUserTask(n,t){return oe(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,o){return oe(this.engine.correlateMessage(n,t,o||"{}"))}advanceTime(n){return oe(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return oe(this.engine.snapshot())}free(){this.engine.free()}}async function Ni(e){return await Ei(),new ki(new jn)}class Vt extends Error{constructor(t,o){super(t);U(this,"retries");this.name="JobFailure",this.retries=o==null?void 0:o.retries}}function Pi(e,n=[]){if(e.instances.filter(r=>!r.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const o=new Set(n);return e.jobs.some(r=>!o.has(r.jobType))?"unhandledJobs":e.userTasks.some(r=>r.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function Mi(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(o=>o.jobType))].filter(o=>!t.has(o)).sort()}async function Si(e,n,t){let o;try{const r=await n(t);o=JSON.stringify(r??{})}catch(r){const s=r instanceof Vt&&r.retries!==void 0?r.retries:Math.max(0,t.retries-1),d=r instanceof Error?r.message:String(r);e.failJob(t.key,s,d);return}e.completeJob(t.key,o)}async function Bi(e,n,t){let o;try{o=await n(t),JSON.stringify(o)}catch(r){const s=r instanceof Vt&&r.retries!==void 0?r.retries:Math.max(0,t.retries-1),d=r instanceof Error?r.message:String(r);e.failJob(t.key,s,d);return}e.completeAgentJob(t.key,o)}async function Ri(e,n,t={}){const o=t.maxJobsPerActivation??10,r=t.lockTimeoutMs??3e4,s=t.worker??"bojtos",d=t.agents??{};for(const g of Object.keys(d))if(g in n)throw new Error(`dispatchRound: job type "${g}" is registered as both a worker and an agent — register it as exactly one`);const c=[];for(const[g,h]of Object.entries(n))for(const f of e.activateJobs(g,o,r,s))c.push({handler:h,job:f});const m=[];for(const[g,h]of Object.entries(d))for(const f of e.activateJobs(g,o,r,s))m.push({handler:h,job:f});for(const{handler:g,job:h}of c)await Si(e,g,h);for(const{handler:g,job:h}of m)await Bi(e,g,h);const a=e.snapshot(),p=c.length+m.length;if(p>0)return{snapshot:a,handled:p};const u=[...Object.keys(n),...Object.keys(d)];return{snapshot:a,handled:p,reason:Pi(a,u),unhandled:Mi(a,u)}}function Ci({bpmn:e}){const n=b.useRef(null),[t,o]=b.useState("loading"),[r,s]=b.useState(null),[d,c]=b.useState([]),[m,a]=b.useState(null),p=b.useRef(e),u=b.useRef(0),g=b.useRef(null),h=b.useRef(new Map),f=b.useCallback((C,R)=>{h.current.set(C,R)},[]),N=b.useCallback(C=>h.current.get(C),[]),v=b.useCallback((C,R)=>{const P=C.deploy(R);return p.current=R,h.current.clear(),c(P.processIds),a(null),s(null),P.processIds},[]);b.useEffect(()=>{let C=!1;return o("loading"),c([]),a(null),s(null),Ni().then(R=>{if(C){R.free();return}try{v(R,e)}catch(P){R.free(),s(String(P)),o("error");return}n.current=R,o("ready")}).catch(R=>{C||(s(String(R)),o("error"))}),()=>{var R;C=!0,(R=n.current)==null||R.free(),n.current=null,h.current.clear()}},[e]);const _=b.useCallback(C=>{const R=n.current;if(!R)return null;try{const P=C(R);return a(P),s(null),P}catch(P){return s(String(P)),null}},[]),E=b.useCallback((C,R)=>_(P=>P.createInstance(C,R)),[_]),A=b.useCallback((C,R)=>_(P=>P.completeUserTask(C,R)),[_]),x=b.useCallback(C=>_(R=>R.advanceTime(C)),[_]),ne=b.useCallback((C,R)=>_(P=>P.broadcastSignal(C,R)),[_]);function W(C,R){const[P]=C.activateJobs(R,1,3e4,"manual-control");if(!P)throw new Error(`No waiting job of type "${R}" to resolve.`);return P}const te=b.useCallback((C,R)=>_(P=>{const z=W(P,C);return P.completeJob(z.key,R)}),[_]),Pe=b.useCallback((C,R,P)=>_(z=>{const O=W(z,C);return z.throwError(O.key,R,P)}),[_]),be=b.useCallback((C,R,P)=>_(z=>z.correlateMessage(C,R,P)),[_]),Ie=b.useCallback(async(C,R)=>{const P=n.current;if(!P)return null;const z=u.current,O=Ri(P,C,R);g.current=O;try{const fe=await O;return n.current!==P||u.current!==z?null:(a(fe.snapshot),s(null),fe)}catch(fe){return n.current!==P||u.current!==z||(a(P.snapshot()),s(String(fe))),null}finally{g.current===O&&(g.current=null)}},[]),X=b.useCallback(async()=>{var C;await((C=g.current)==null?void 0:C.catch(()=>{}))},[]),ge=b.useCallback(async()=>{await X();const C=n.current;if(C){u.current++;try{C.reset(),v(C,p.current)}catch(R){s(String(R))}}},[v,X]),de=b.useCallback(async C=>{await X();const R=n.current;if(!R)return null;u.current++;try{return R.reset(),v(R,C)}catch(P){return s(String(P)),null}},[v,X]);return{phase:t,error:r,processIds:d,snapshot:m,createInstance:E,stepWorkers:Ie,completeUserTask:A,advanceTime:x,broadcastSignal:ne,completeJobManually:te,throwJobError:Pe,correlateMessage:be,reset:ge,redeploy:de,setRunImage:f,getRunImage:N}}const Ii="web-demo-framework:height",Ai="web-demo-framework:ready";function Ti(){return{type:Ai}}const Fi="web-demo-framework:request-height";function ji(e){return{type:Ii,height:Math.ceil(e)}}const mt="embed-height-auto";function Di(e=document){return Math.max(e.documentElement.offsetHeight,e.body.scrollHeight)}function Li(e){b.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(mt);let t=-1;const o=(d=!1)=>{const c=Di();!d&&Math.abs(c-t)<2||(t=c,window.parent.postMessage(ji(c),"*"))},r=d=>{if(d.source!==window.parent)return;const c=d.data;!c||c.type!==Fi||o(!0)};window.addEventListener("message",r),o();const s=new ResizeObserver(()=>o());return s.observe(n),()=>{s.disconnect(),window.removeEventListener("message",r),n.classList.remove(mt)}},[e])}function Oi(e){const n=b.useRef(!1);b.useEffect(()=>{!e||n.current||typeof window>"u"||window.parent===window||(n.current=!0,window.parent.postMessage(Ti(),"*"))},[e])}function zi(e,n){return e.slice(n)}function $i(e,n,t,o){const r=e.snapshot,s="⏸ waiting for a human — complete the task below to continue",d=r.userTasks.some(c=>c.state==="Created");if(e.handled>0){const c=r.activeElementIds.map(t),m=n.length?` via ${n.map(a=>`${t(a.from)} → ${t(a.to)}`).join(", ")}`:"";return r.completedInstances>=1?{kind:"done",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${m} — ✅ process instance completed`}:d?{kind:"human",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${m} — ${s}`}:{kind:"step",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${m} — now at ${c.length?c.join(", "):"—"}`}}switch(e.reason){case"completed":return{kind:"done",text:"✅ process instance completed"};case"userTasks":return{kind:"human",text:s};case"timers":return{kind:"step",text:"⏱ waiting on a timer — advance the clock to continue"};case"messages":return{kind:"step",text:"✉ waiting on a message — correlate it to continue"};case"signals":return{kind:"step",text:"📶 waiting on a signal — broadcast it to continue"};case"incidents":return{kind:"error",text:"A job failed — incident on the diagram"};case"unhandledJobs":{const c=e.unhandled??[];return o&&c.length>0&&c.every(m=>o.has(m))?{kind:"human",text:s}:{kind:"error",text:`⏭ waiting on job type(s) with no worker registered: ${c.join(", ")}`}}case"idle":return{kind:"step",text:"Nothing to step — no instance is running."};default:return{kind:"step",text:e.reason?`Step blocked on an unrecognized reason: ${e.reason}`:"Nothing to step — no instance is running."}}}const Ui="the Scripted or Endpoint brain";async function bn(e=Ui){const n=navigator.gpu;if(!n)return`This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick ${e}.`;let t;try{t=await n.requestAdapter()}catch(o){return`WebGPU adapter request failed (${o instanceof Error?o.message:String(o)}). Try ${e} instead.`}return t?null:`This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick ${e} instead.`}const Vi=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function qt(e){return Dn.get(e)??{}}const Dn=new Map;async function qi(){if(Dn.size>0)return;const{prebuiltAppConfig:e}=await he(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)Dn.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const yn=Vi.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...qt(e.id)})),Gt=yn[0].id;async function Gi(){return await qi(),yn.map(e=>({...e,...qt(e.id)}))}function Ht(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function Hi(e,n=Ht()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function Ji(e){try{const{hasModelInCache:n}=await he(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function gn(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function pt(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class cn{constructor(){U(this,"kind","browser");U(this,"model",null);U(this,"engine",null);U(this,"worker",null);U(this,"generation",0);U(this,"chat",async(n,t=512,o)=>{var s,d;const r=this.engine;if(!r||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const c=await r.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let m="";for await(const a of c){const p=((d=(s=a.choices[0])==null?void 0:s.delta)==null?void 0:d.content)??"";p&&(m+=p,o==null||o(p))}return m}catch(c){const m=c instanceof Error?c.message:String(c);throw gn(m)?(this.teardown(),new Error(`The in-browser model stopped: ${pt()}`)):c}})}async connect(n=Gt,t){var m,a;const o=await bn();if(o)throw new Error(o);if(this.engine&&this.model===n)return n;const r=++this.generation,s=p=>{r===this.generation&&(t==null||t({progress:p.progress??0,text:p.text??""}))};this.teardown();let d,c;try{const{CreateWebWorkerMLCEngine:p}=await he(async()=>{const{CreateWebWorkerMLCEngine:u}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:u}},[]);c=new Worker(new URL("/web-demo-framework/pr-preview/pr-121/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),d=await p(c,n,{initProgressCallback:s})}catch(p){if(c==null||c.terminate(),r!==this.generation)throw new Error("cancelled");const u=p instanceof Error?p.message:String(p);if(gn(u))throw new Error(`Couldn't load ${n} in the browser (${u}). ${pt()}`);const g=(a=(m=yn.find(h=>h.id===n))==null?void 0:m.requiredFeatures)==null?void 0:a.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${u}). `+(g?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(r!==this.generation)throw d.unload().catch(()=>{}),c==null||c.terminate(),new Error("cancelled");return this.engine=d,this.worker=c??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const zn="http://localhost:11434/v1",fn=e=>e==="localhost"||e==="127.0.0.1"||e==="::1"||e==="[::1]";function Jt(){var e;return fn(((e=globalThis.location)==null?void 0:e.hostname)??"")}function Pn(e){try{return fn(new URL($n(e)).hostname)}catch{return!1}}function _n(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(o=>(o=globalThis.location)==null?void 0:o.origin)()??""}){let r;try{r=new URL($n(e)).hostname}catch{return null}return!fn(r)||fn(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function $n(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class ut extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class ht{constructor(n=zn,t="",o=""){U(this,"kind","endpoint");U(this,"baseUrl");U(this,"model",null);U(this,"models",[]);U(this,"apiKey");U(this,"requestedModel");U(this,"chat",async(n,t=512,o)=>{var a,p,u;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const r=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!r.ok||!r.body){const g=await r.text().catch(()=>"");throw new Error(`chat/completions HTTP ${r.status} ${r.statusText}${g?` — ${g.slice(0,300)}`:""}`)}const s=r.body.getReader(),d=new TextDecoder;let c="",m="";for(;;){const{value:g,done:h}=await s.read();if(h)break;c+=d.decode(g,{stream:!0});let f;for(;(f=c.indexOf(`
`))>=0;){const N=c.slice(0,f).trim();if(c=c.slice(f+1),!N.startsWith("data:"))continue;const v=N.slice(5).trim();if(v==="[DONE]")continue;let _;try{_=JSON.parse(v)}catch{continue}_.model&&(this.model=_.model);const E=(a=_.choices)==null?void 0:a[0],A=((p=E==null?void 0:E.delta)==null?void 0:p.content)??((u=E==null?void 0:E.message)==null?void 0:u.content)??"";A&&(m+=A,o==null||o(A))}}return m});this.baseUrl=$n(n),this.apiKey=t.trim(),this.requestedModel=o.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(o){const r=_n(this.baseUrl);throw new Error(r??`Can't reach ${this.baseUrl} (${o instanceof Error?o.message:String(o)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new ut(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(o=>o.id).filter(o=>!!o),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof ut&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(o=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${o instanceof Error?o.message:String(o)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const o=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${o?` — ${o.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}const bt="gemini-nano";function wn(){const e=globalThis.LanguageModel;return typeof(e==null?void 0:e.create)=="function"&&typeof e.availability=="function"?e:null}function Wi(){return wn()!==null}async function Wt(){const e=wn();if(!e)return"This browser has no built-in AI model. Chrome's Prompt API (Gemini Nano) needs Chrome 138+ on desktop Windows 10/11, macOS 13+, Linux or a Chromebook Plus. Use the Scripted, In-browser (WebGPU) or API endpoint brain instead.";let n;try{n=await e.availability()}catch(t){return`Chrome couldn't report on its built-in model (${t instanceof Error?t.message:String(t)}).`}return n==="unavailable"?"Chrome exposes the built-in AI API here, but Gemini Nano can't run on this device. Chrome requires ~22 GB free on the volume holding your Chrome profile, and either a GPU with more than 4 GB of VRAM or 16 GB of RAM with 4+ CPU cores. Check chrome://on-device-internals for the details.":null}class gt{constructor(){U(this,"kind","chrome");U(this,"model",null);U(this,"warm",null);U(this,"connecting",null);U(this,"chat",async(n,t,o)=>{if(!this.model)throw new Error("ChromeBrain.chat called before connect()");const r=wn();if(!r)throw new Error("Chrome's built-in AI API went away.");const s=n.filter(m=>m.role==="system"),d=n.filter(m=>m.role!=="system"),c=await r.create(s.length?{initialPrompts:s}:void 0);try{const m=c.promptStreaming(d).getReader();let a="";for(;;){const{done:p,value:u}=await m.read();if(p)break;u&&(a+=u,o==null||o(u))}return a}finally{c.destroy()}})}async connect(n){const t=await Wt();if(t)throw new Error(t);const o=wn();this.dispose();const r=new AbortController;this.connecting=r;try{this.warm=await o.create({signal:r.signal,monitor:s=>{s.addEventListener("downloadprogress",d=>{n==null||n({progress:d.loaded,text:"Downloading Gemini Nano"})})}})}catch(s){if(r.signal.aborted)throw new Error("cancelled");const d=s instanceof Error?s.message:String(s);throw new Error(`Chrome couldn't start its built-in model (${d}). The first run downloads Gemini Nano and must be triggered by a click — press Connect again, and check chrome://on-device-internals if it keeps failing.`)}finally{this.connecting=null}return this.model=bt,bt}cancelConnect(){var n;(n=this.connecting)==null||n.abort()}dispose(){var n,t;(n=this.connecting)==null||n.abort(),this.connecting=null,(t=this.warm)==null||t.destroy(),this.warm=null,this.model=null}}const Ki=[{id:"onnx-community/Florence-2-base-ft",label:"Florence-2 base",downloadLabel:"~0.4 GB"},{id:"onnx-community/Florence-2-large-ft",label:"Florence-2 large (higher quality)",downloadLabel:"~1.6 GB"}],Kt=Ki.map(e=>({...e,label:`${e.label} (${e.downloadLabel})`})),Zt=Kt[0].id,Zi="<OCR>",ft="UNKNOWN (scripted brain — connect the in-browser model to read a photo)";function Yi(e,n){if(e)return typeof e=="function"?e(n):e[n]}class Qi{constructor(n){U(this,"kind","scripted-vision");U(this,"model",null);U(this,"read",async(n,t,o)=>{const r=typeof n=="string"?Yi(this.lookup,n)??ft:ft;return o==null||o(r),r});this.lookup=n}dispose(){}}function Xi(e){return new Qi(e)}class _t{constructor(){U(this,"kind","browser-vision");U(this,"model",null);U(this,"modelHandle",null);U(this,"processor",null);U(this,"loadImage",null);U(this,"generation",0);U(this,"read",async(n,t,o)=>{const r=this.modelHandle,s=this.processor,d=this.loadImage;if(!r||!s||!d||!this.model)throw new Error("BrowserVisionBrain.read called before connect()");const c=t&&t.startsWith("<")?t:Zi,m=await d(n),a=s.construct_prompts(c),p=await s(m,a),u=await r.generate({...p,max_new_tokens:512,num_beams:1,do_sample:!1}),g=s.batch_decode(u,{skip_special_tokens:!1})[0],h=s.post_process_generation(g,c,m.size),f=er(h,c);return o==null||o(f),f})}async connect(n=Zt,t){var c,m;const o=await bn("the scripted-vision fallback");if(o)throw new Error(o);if(this.modelHandle&&this.model===n)return n;const r=++this.generation,s=a=>{r===this.generation&&(t==null||t({progress:(a.progress??0)/100,text:a.file?`${a.status??"loading"} ${a.file}`:a.status??""}))};this.teardown();let d;try{const{Florence2ForConditionalGeneration:a,AutoProcessor:p,load_image:u}=await he(async()=>{const{Florence2ForConditionalGeneration:f,AutoProcessor:N,load_image:v}=await import("./transformers.web-D4adwrl9.js");return{Florence2ForConditionalGeneration:f,AutoProcessor:N,load_image:v}},[]),g=await a.from_pretrained(n,{dtype:"fp32",device:"webgpu",progress_callback:s}),h=await p.from_pretrained(n);d={model:g,processor:h,loadImage:u}}catch(a){if(r!==this.generation)throw new Error("cancelled");const p=a instanceof Error?a.message:String(a);throw new Error(`Couldn't load ${n} in the browser (${p}). Try the smaller Florence-2 base model, check your connection, or use the scripted-vision fallback.`)}if(r!==this.generation)throw Promise.resolve((m=(c=d.model).dispose)==null?void 0:m.call(c)).catch(()=>{}),new Error("cancelled");return this.modelHandle=d.model,this.processor=d.processor,this.loadImage=d.loadImage,this.model=n,n}teardown(){var t;const n=this.modelHandle;this.modelHandle=null,this.processor=null,this.loadImage=null,this.model=null,Promise.resolve((t=n==null?void 0:n.dispose)==null?void 0:t.call(n)).catch(()=>{})}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}function er(e,n){const t=e[n];if(typeof t=="string")return t.trim();if(t&&typeof t=="object"){const o=t.labels;return Array.isArray(o)?o.join(" ").trim():JSON.stringify(t)}return""}function nr(){const[e,n]=b.useState("scripted"),[t,o]=b.useState("idle"),[r,s]=b.useState(null),[d,c]=b.useState(null),[m,a]=b.useState(null),[p,u]=b.useState(null),[g,h]=b.useState(null),[f,N]=b.useState(null),[v,_]=b.useState(null),[E,A]=b.useState(Gt),[x,ne]=b.useState(Jt()?zn:""),[W,te]=b.useState(""),[Pe,be]=b.useState([]),[Ie,X]=b.useState("idle"),[ge,de]=b.useState(null),[C,R]=b.useState(""),[P,z]=b.useState(null),O=b.useRef(null),[fe,Ge]=b.useState("scripted-vision"),[He,Me]=b.useState("idle"),[Je,ke]=b.useState(null),[_e,We]=b.useState(Zt),[on,je]=b.useState(null),[De,xe]=b.useState(null),[Ke,vn]=b.useState(null),[rn,Se]=b.useState(null),q=b.useRef(null),ee=b.useRef(!1),an=b.useRef(0),Ae=b.useCallback(S=>async(...J)=>{try{return await S.chat(...J)}catch(j){const K=j instanceof Error?j.message:String(j);throw S instanceof cn&&gn(K)&&(z(null),c(null),o("error"),s(K)),j}},[]),Te=b.useCallback(S=>async(...J)=>{try{return await S.read(...J)}catch(j){const K=j instanceof Error?j.message:String(j);throw gn(K)&&(Se(null),je(null),Me("error"),ke(K)),j}},[]);b.useEffect(()=>{bn().then(S=>{h(S),u(S===null)}),Wt().then(_),bn("the scripted-vision fallback").then(S=>{vn(S),ee.current||(ee.current=!0,Ge(S===null?"browser-vision":"scripted-vision"))})},[]),b.useEffect(()=>{let S=!1;return N(null),Ji(E).then(J=>{S||N(J)}),()=>{S=!0}},[E]),b.useEffect(()=>()=>{var S;return(S=O.current)==null?void 0:S.dispose()},[]),b.useEffect(()=>()=>{var S;return(S=q.current)==null?void 0:S.dispose()},[]);const Le=b.useCallback(S=>{n(S),o("idle"),s(null),c(null),a(null),z(null)},[]),Ze=b.useCallback(S=>{var J,j;ee.current=!0,(J=q.current)==null||J.cancelConnect(),(j=q.current)==null||j.dispose(),q.current=null,Ge(S),Me("idle"),ke(null),je(null),xe(null),Se(null)},[]),L=b.useCallback(()=>{var S;(S=O.current)==null||S.dispose(),O.current=null,z(null),c(null)},[]),ae=b.useCallback(()=>{const S=O.current;(S instanceof cn||S instanceof gt)&&S.cancelConnect(),L(),o("idle"),a(null),s(null)},[L]),Fe=b.useCallback(async()=>{const S=++an.current,J=()=>S!==an.current;if(!x.trim()){be([]),te(""),X("idle"),de(null);return}const j=_n(x);if(j){be([]),te(""),X("error"),de(j);return}X("loading"),de(null);const K=new ht(x,C);try{const le=await K.listModels();if(J())return;be(le),X("ready"),te(ze=>ze&&le.includes(ze)?ze:le[0]??"")}catch(le){if(J())return;be([]),te(""),X("error"),de(le instanceof Error?le.message:String(le))}finally{K.dispose()}},[x,C]),Be=b.useCallback(async()=>{var S,J;if(e==="scripted"){z(null),o("ready");return}if(e==="endpoint"){const j=_n(x);if(j){L(),s(j),o("error");return}}o("connecting"),s(null),a(null);try{if(e==="browser"){const j=O.current instanceof cn?O.current:new cn;O.current&&O.current!==j&&O.current.dispose(),O.current=j;const K=await j.connect(E,a);c(K),z(()=>Ae(j)),N(!0)}else if(e==="chrome"){(S=O.current)==null||S.dispose();const j=new gt;O.current=j;const K=await j.connect(a);_(null),c(K),z(()=>Ae(j))}else{(J=O.current)==null||J.dispose();const j=new ht(x,C,W);O.current=j;const K=await j.connect();c(K),z(()=>Ae(j))}o("ready")}catch(j){const K=j instanceof Error?j.message:String(j);if(K==="cancelled")return;s(K),o("error"),z(null)}finally{a(null)}},[e,E,x,W,C,L,Ae]),Oe=b.useCallback(()=>{var S;(S=q.current)==null||S.dispose(),q.current=null,Se(null),je(null)},[]),xn=b.useCallback(()=>{var S;(S=q.current)==null||S.cancelConnect(),Oe(),Me("idle"),xe(null),ke(null)},[Oe]),we=b.useCallback(async()=>{if(fe==="scripted-vision"){Oe(),Me("ready"),ke(null);return}Me("connecting"),ke(null),xe(null);try{const S=q.current instanceof _t?q.current:new _t;q.current&&q.current!==S&&q.current.dispose(),q.current=S;const J=await S.connect(_e,xe);je(J),Se(()=>Te(S)),Me("ready")}catch(S){const J=S instanceof Error?S.message:String(S);if(J==="cancelled")return;ke(J),Me("error"),Se(null),je(null)}finally{xe(null)}},[fe,_e,Oe,Te]);return{kind:e,setKind:Le,status:t,error:r,modelInUse:d,progress:m,webgpu:p,webgpuReason:g,browserModelCached:f,chromeAiReason:v,cancelConnect:ae,browserModel:E,setBrowserModel:A,endpointUrl:x,setEndpointUrl:ne,endpointModel:W,setEndpointModel:te,endpointModels:Pe,endpointModelsStatus:Ie,endpointModelsError:ge,listEndpointModels:Fe,apiKey:C,setApiKey:R,connect:Be,chat:P,visionKind:fe,setVisionKind:Ze,visionStatus:He,visionError:Je,visionModel:_e,setVisionModel:We,visionModelInUse:on,visionProgress:De,visionWebgpuReason:Ke,connectVision:we,cancelVisionConnect:xn,vision:rn}}const Ln="#s=",tr=["scripted","browser","chrome","endpoint"];function or(e){return typeof e=="string"&&tr.includes(e)}function ir(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,o={};return or(t.brain)&&(o.brain=t.brain),o}}catch{}return{}}function Yt(e=location.hash){if(!e.startsWith(Ln))return{};let n;try{n=decodeURIComponent(e.slice(Ln.length))}catch{return{}}return ir(n)}function rr(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":Ln+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function ar(e){const n={...Yt(),...e},t=rr(n),o=new URL(location.href);o.hash=t,history.replaceState(history.state,"",o)}const wt=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"chrome",label:"Chrome built-in",hint:"Gemini Nano, built into Chrome. Chrome owns the weights — no download from this page, no API key."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server: a local Ollama, or a remote provider with an API key."}],sr=[{mode:"ollama",label:"Ollama (local)"},{mode:"remote",label:"Provider URL + key"}],yt=[{kind:"scripted-vision",label:"Scripted",hint:"No model. The example's known plate is returned — deterministic and offline."},{kind:"browser-vision",label:"In-browser (WebGPU)",hint:"Reads the photo with a vision model on your GPU. First run downloads weights."}];function dr({brain:e,showText:n=!0,showVision:t=!1}){return i.jsxs("div",{className:"brain",children:[n&&i.jsx(lr,{brain:e}),n&&t&&i.jsx("hr",{className:"brain-divider"}),t&&i.jsx(cr,{brain:e})]})}function lr({brain:e}){const n=wt.find(v=>v.kind===e.kind),t=wt.filter(v=>v.kind!=="chrome"||Wi()),o=_n(e.endpointUrl),r=Jt(),s=r&&Pn(e.endpointUrl)?"ollama":"remote",d=v=>{Pn(v)!==Pn(e.endpointUrl)&&e.setApiKey(""),e.setEndpointUrl(v)},c=v=>{v!==s&&d(v==="ollama"?zn:"")},[m,a]=b.useState(yn);b.useEffect(()=>{Gi().then(a)},[]);const{kind:p,endpointUrl:u,apiKey:g,listEndpointModels:h}=e;b.useEffect(()=>{if(p!=="endpoint"||o)return;const v=setTimeout(()=>void h(),400);return()=>clearTimeout(v)},[p,u,g,o,h]);const f=m.find(v=>v.id===e.browserModel),N=f?Hi(f,Ht()):null;return i.jsxs("div",{className:"brain-section",children:[i.jsxs("div",{className:"brain-modes",children:[i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Agent brain",children:t.map(v=>i.jsx(Q,{size:"sm",variant:e.kind===v.kind?"default":"secondary","aria-pressed":e.kind===v.kind,onClick:()=>e.setKind(v.kind),children:v.label},v.kind))}),i.jsxs("div",{className:"brain-status",children:[e.status==="ready"&&e.kind!=="scripted"&&i.jsx(re,{variant:"success",className:"brain-status-badge",children:e.modelInUse??"connected"}),e.status==="connecting"&&i.jsx(re,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.status==="error"&&i.jsx(re,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(qe,{htmlFor:"browser-model",children:"Model"}),i.jsxs(Rn,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[i.jsx(Cn,{id:"browser-model",children:i.jsx(In,{})}),i.jsx(An,{children:m.map(v=>i.jsx(Tn,{value:v.id,children:v.label},v.id))})]}),e.browserModelCached===!0&&i.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&i.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"No WebGPU in this browser"}),i.jsx(pe,{children:e.webgpuReason})]}),e.webgpu!==!1&&N&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"This model may not fit in GPU memory"}),i.jsx(pe,{children:N})]})]}),e.kind==="chrome"&&i.jsxs("div",{className:"brain-config",children:[i.jsx("p",{className:"field-hint",children:"Nothing to configure: Chrome downloads and manages Gemini Nano itself, so the first Connect may fetch it once and later visits reuse it. Prompts never leave your machine. It's a very small model — expect it to follow the tool-calling format less reliably than an endpoint model."}),e.chromeAiReason&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"Chrome's built-in model isn't available here"}),i.jsx(pe,{children:e.chromeAiReason})]})]}),e.kind==="endpoint"&&i.jsxs("div",{className:"brain-config",children:[r?i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Endpoint provider",children:sr.map(v=>i.jsx(Q,{size:"sm",variant:s===v.mode?"default":"secondary","aria-pressed":s===v.mode,disabled:e.status==="connecting",onClick:()=>c(v.mode),children:v.label},v.mode))}):i.jsxs("p",{className:"field-hint",children:["This page isn't served from ",i.jsx("code",{children:"localhost"}),", so a local Ollama isn't offered — it only accepts requests from a page on localhost. Point this at a remote OpenAI-compatible provider, or open this page at ",i.jsx("code",{children:"http://localhost"})," to use Ollama."]}),i.jsxs("div",{className:"field",children:[i.jsx(qe,{htmlFor:"endpoint-url",children:"Endpoint"}),i.jsx(tt,{id:"endpoint-url",value:e.endpointUrl,placeholder:"https://api.openai.com/v1",onChange:v=>d(v.target.value),disabled:e.status==="connecting"}),s==="ollama"?i.jsxs("p",{className:"field-hint",children:["Ollama allows ",i.jsx("code",{children:"localhost"})," origins out of the box; set"," ",i.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}):i.jsxs("p",{className:"field-hint",children:["The base URL of any OpenAI-compatible provider — it must serve"," ",i.jsx("code",{children:"/models"})," and ",i.jsx("code",{children:"/chat/completions"}),". Calls go straight from this browser to that host."]}),o&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"A local server won't work from this URL"}),i.jsx(pe,{children:o})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(qe,{htmlFor:"endpoint-model",children:"Model"}),i.jsxs("div",{className:"endpoint-model-row",children:[i.jsxs(Rn,{value:e.endpointModel,onValueChange:e.setEndpointModel,disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||e.endpointModels.length===0,children:[i.jsx(Cn,{id:"endpoint-model",className:"endpoint-model-select",children:i.jsx(In,{placeholder:e.endpointModelsStatus==="loading"?"Loading models…":e.endpointModelsStatus==="idle"?"Enter an endpoint above":e.endpointModelsStatus==="error"?"No models — check the endpoint":e.endpointModels.length===0?"No models served":"Select a model"})}),i.jsx(An,{children:e.endpointModels.map(v=>i.jsx(Tn,{value:v,children:v},v))})]}),i.jsx(Q,{size:"sm",variant:"secondary",onClick:()=>void e.listEndpointModels(),disabled:e.status==="connecting"||e.endpointModelsStatus==="loading"||e.endpointUrl.trim()===""||o!==null,children:e.endpointModelsStatus==="loading"?"Refreshing…":"Refresh"})]}),i.jsxs("p",{className:"field-hint",children:["Fetched from the endpoint's ",i.jsx("code",{children:"/models"}),". Tiny models (e.g. SmolLM2) usually can't follow the tool-calling format — prefer ",i.jsx("code",{children:"llama3.2:3b"}),", ",i.jsx("code",{children:"qwen2.5"})," or larger."]}),e.endpointModelsStatus==="error"&&!o&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"Couldn't list models"}),i.jsx(pe,{children:e.endpointModelsError})]})]}),i.jsxs("div",{className:"field",children:[i.jsx(qe,{htmlFor:"endpoint-key",children:s==="ollama"?"API key (optional)":"API key"}),i.jsx(tt,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:v=>e.setApiKey(v.target.value),disabled:e.status==="connecting"}),i.jsx("p",{className:"field-hint",children:s==="ollama"?"A local Ollama ignores this — leave it blank.":"Sent as a bearer token to the endpoint above, from this browser only. It's held in memory for this tab, never stored or logged, and cleared if the endpoint moves between a local and a remote host."})]})]}),e.kind!=="scripted"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(Q,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting"||e.kind==="chrome"&&e.chromeAiReason!==null||e.kind==="endpoint"&&(e.endpointUrl.trim()===""||e.endpointModel===""||e.endpointModelsStatus==="loading"||o!==null),children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&(e.kind==="browser"||e.kind==="chrome")&&i.jsx(Q,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.progress&&i.jsx("div",{className:"brain-progress",role:"progressbar","aria-valuenow":Math.round(e.progress.progress*100),"aria-valuemin":0,"aria-valuemax":100,children:i.jsx("div",{className:"brain-progress-bar",style:{width:`${Math.round(e.progress.progress*100)}%`}})}),e.error&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"Couldn't connect"}),i.jsx(pe,{children:e.error})]})]})}function cr({brain:e}){const n=yt.find(t=>t.kind===e.visionKind);return i.jsxs("div",{className:"brain-section brain-vision",children:[i.jsx(qe,{children:"Vision (reads the image)"}),i.jsxs("div",{className:"brain-modes",children:[i.jsx("div",{className:"brain-kinds",role:"group","aria-label":"Vision brain",children:yt.map(t=>i.jsx(Q,{size:"sm",variant:e.visionKind===t.kind?"default":"secondary","aria-pressed":e.visionKind===t.kind,onClick:()=>e.setVisionKind(t.kind),children:t.label},t.kind))}),i.jsxs("div",{className:"brain-status",children:[e.visionStatus==="ready"&&e.visionKind==="browser-vision"&&i.jsx(re,{variant:"success",className:"brain-status-badge",children:e.visionModelInUse??"connected"}),e.visionStatus==="connecting"&&i.jsx(re,{variant:"info",className:"brain-status-badge",children:"connecting…"}),e.visionStatus==="error"&&i.jsx(re,{variant:"danger",className:"brain-status-badge",children:"not connected"})]})]}),i.jsx("p",{className:"field-hint",children:n.hint}),e.visionKind==="scripted-vision"&&e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"No WebGPU in this browser"}),i.jsx(pe,{children:e.visionWebgpuReason})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-config",children:[i.jsxs("div",{className:"field",children:[i.jsx(qe,{htmlFor:"vision-model",children:"Model"}),i.jsxs(Rn,{value:e.visionModel,onValueChange:e.setVisionModel,disabled:e.visionStatus==="connecting",children:[i.jsx(Cn,{id:"vision-model",children:i.jsx(In,{})}),i.jsx(An,{children:Kt.map(t=>i.jsx(Tn,{value:t.id,children:t.label},t.id))})]}),i.jsx("p",{className:"field-hint",children:"Connecting downloads the weights once (size shown above), then caches them — every token is read on your GPU, no server."})]}),e.webgpu===!1&&e.visionWebgpuReason&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"No WebGPU in this browser"}),i.jsx(pe,{children:e.visionWebgpuReason})]})]}),e.visionKind==="browser-vision"&&i.jsxs("div",{className:"brain-actions",children:[i.jsx(Q,{size:"sm",onClick:()=>void e.connectVision(),disabled:e.visionStatus==="connecting",children:e.visionStatus==="ready"?"Reconnect":"Connect"}),e.visionStatus==="connecting"&&i.jsx(Q,{size:"sm",variant:"secondary",onClick:e.cancelVisionConnect,children:"Cancel"}),e.visionProgress&&i.jsxs("span",{className:"field-hint",children:[Math.round(e.visionProgress.progress*100),"% —"," ",e.visionProgress.text]})]}),e.visionError&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"Couldn't connect the vision brain"}),i.jsx(pe,{children:e.visionError})]})]})}function mr({imageInput:e,value:n,onSelect:t,disabled:o=!1}){const[r,s]=b.useState(null),[d,c]=b.useState(!1),m=b.useRef(null),a=b.useId(),p=b.useId(),u=b.useCallback(f=>{s(URL.createObjectURL(f)),t({imageName:f.name,pixels:f})},[t]);b.useEffect(()=>{if(r)return()=>URL.revokeObjectURL(r)},[r]);const g=b.useCallback(f=>{const N=f==null?void 0:f[0];N&&N.type.startsWith("image/")&&u(N)},[u]),h=(n==null?void 0:n.imageId)!=null?e.seedImages.find(f=>f.id===n.imageId):void 0;return i.jsxs("div",{className:"image-input",children:[e.label&&i.jsx("p",{className:"field-hint",children:e.label}),i.jsx("p",{className:"image-input-label",id:a,children:"Seed photos"}),i.jsx("div",{className:"image-gallery",role:"group","aria-labelledby":a,children:e.seedImages.map(f=>{const N=(n==null?void 0:n.imageId)===f.id;return i.jsxs("button",{type:"button","aria-pressed":N,className:`image-thumb${N?" image-thumb--selected":""}`,disabled:o,title:f.label??f.id,onClick:()=>{s(null),m.current&&(m.current.value=""),t({imageId:f.id,pixels:f.file})},children:[i.jsx("img",{src:f.thumb??f.file,alt:f.label??f.id}),f.label&&i.jsx("span",{children:f.label})]},f.id)})}),i.jsx("label",{className:"image-input-label",htmlFor:p,children:"Or upload your own photo"}),i.jsxs("div",{className:`image-drop${d?" image-drop--over":""}`,onDragOver:f=>{f.preventDefault(),o||c(!0)},onDragLeave:()=>c(!1),onDrop:f=>{f.preventDefault(),c(!1),o||g(f.dataTransfer.files)},children:[i.jsx("input",{ref:m,id:p,type:"file",accept:"image/*",disabled:o,onChange:f=>g(f.target.files)}),i.jsx("p",{className:"field-hint",children:"Drag a photo here, or pick one. Uploading a photo the model has never seen is the proof this runs for real — nothing leaves your browser."})]}),(r||h)&&i.jsxs("div",{className:"image-preview",children:[i.jsx("img",{src:r??(h==null?void 0:h.file),alt:r?(n==null?void 0:n.imageName)??"uploaded photo":(h==null?void 0:h.label)??(h==null?void 0:h.id)??"selected photo"}),i.jsx("span",{className:"field-hint",children:r?`Uploaded: ${(n==null?void 0:n.imageName)??"your photo"}`:`Selected: ${(h==null?void 0:h.label)??(h==null?void 0:h.id)}`}),i.jsx("button",{type:"button",className:"image-clear-btn",disabled:o,onClick:()=>{s(null),m.current&&(m.current.value=""),t(null)},children:"Clear"})]})]})}function Qt(e){return typeof e=="object"&&e!==null}function Nl(e){const n=new Set,t=o=>{Qt(o)&&(typeof o.key=="string"&&n.add(o.key),Array.isArray(o.components)&&o.components.forEach(t))};return t(e),n}function pr(e){const n={},t=o=>{Qt(o)&&(typeof o.key=="string"&&"defaultValue"in o&&(n[o.key]=o.defaultValue??""),Array.isArray(o.components)&&o.components.forEach(t))};return t(e),n}const ur="wdf:section:v2:";function Xt(e){return ur+e}function vt(e){try{const n=window.localStorage.getItem(Xt(e));return n==="1"?!0:n==="0"?!1:void 0}catch{return}}function hr(e,n){try{window.localStorage.setItem(Xt(e),n?"1":"0")}catch{}}function Un(e,n=!0){const[t,o]=b.useState(()=>vt(e)??n);b.useEffect(()=>{o(vt(e)??n)},[e,n]);const r=b.useCallback(s=>{o(s),hr(e,s)},[e]);return[t,r]}function Ve({sectionId:e,title:n,description:t,defaultOpen:o=!0,className:r,children:s,...d}){const[c,m]=Un(e,o);return i.jsx(co,{className:["panel",r].filter(Boolean).join(" "),"data-tour":d["data-tour"],children:i.jsxs(mo,{open:c,onOpenChange:m,children:[i.jsxs(po,{className:"panel-trigger",children:[i.jsxs("span",{className:"panel-trigger-text",children:[i.jsx("span",{className:"panel-title",children:n}),t!=null&&i.jsx("span",{className:"panel-desc",children:t})]}),i.jsx(uo,{className:"panel-chevron","aria-hidden":!0})]}),i.jsx(ho,{children:i.jsx(bo,{children:s})})]})})}function br(e){return e.entries!==void 0}function gr(e){const n=[];let t=null;for(const o of e)o.turn!==void 0?t&&t.turn===o.turn?t.entries.push(o):(t={turn:o.turn,entries:[o]},n.push(t)):(t=null,n.push(o));return n}function xt(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function fr({activation:e,result:n,labelFor:t}){const o=e.elementId??"";return i.jsxs("div",{className:"timeline-tool",children:[i.jsxs("div",{className:"timeline-tool-head",children:[i.jsx(re,{variant:"info",children:"tool"}),i.jsx("strong",{children:t(o)||o}),i.jsx("code",{children:o})]}),e.args!==void 0&&Object.keys(e.args).length>0&&i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"arguments"}),i.jsx("code",{children:xt(e.args)})]}),i.jsxs("div",{className:"timeline-kv",children:[i.jsx("span",{className:"timeline-kv-label",children:"returned"}),i.jsx("code",{children:n?xt(n.result):"— waiting for the job to complete —"})]})]})}function _r({group:e,labelFor:n}){const t=e.entries.find(a=>a.kind==="llm"),o=e.entries.filter(a=>a.kind==="agent"&&a.elementId),r=e.entries.filter(a=>a.kind==="vars"&&a.elementId),s=e.entries.filter(a=>a.kind==="agent"&&!a.elementId),d=e.entries.filter(a=>a.kind==="error"),c=new Set(o.map(a=>a.elementId)),m=e.entries.filter(a=>a.kind==="tool"||a.kind==="vars"&&a.elementId&&!c.has(a.elementId)).sort((a,p)=>a.id-p.id);return i.jsxs("div",{className:"timeline-turn",children:[i.jsxs("div",{className:"timeline-turn-head",children:[i.jsxs(re,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&i.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&i.jsx("blockquote",{className:"timeline-reply",children:t.text}),s.map(a=>i.jsx("div",{className:"timeline-note",children:a.text},a.id)),o.map(a=>i.jsx(fr,{activation:a,result:r.find(p=>p.elementId===a.elementId),labelFor:n},a.id)),m.map(a=>i.jsxs("div",{className:`log-line log-${a.kind}`,children:[a.pending?"⏳ ":"",a.text]},a.id)),d.map(a=>i.jsxs("div",{className:"timeline-error",children:["⚠ ",a.text]},a.id))]})}function wr({log:e,elementStats:n=[],incidents:t=[],labelFor:o=d=>d,variables:r,hasAgent:s=!1}){const d=b.useMemo(()=>gr(e),[e]),[c,m]=b.useState(!1),[a,p]=Un("engine-view",!1),u=b.useRef(null);b.useEffect(()=>{const h=u.current;h&&(h.scrollTop=h.scrollHeight)},[d]);const g=()=>{var N;const h={log:e.map(({id:v,..._})=>_),elementStats:n,incidents:t},f=JSON.stringify(h,null,2);(N=navigator.clipboard)!=null&&N.writeText&&navigator.clipboard.writeText(f).then(()=>{m(!0),setTimeout(()=>m(!1),1500)}).catch(()=>{})};return i.jsxs(Ve,{sectionId:"activity",className:"grow activity-card",title:s?"Agent activity":"Activity",description:s?"Agent turns, model replies, and tool calls — read top to bottom as a story.":"Every step the engine took — read top to bottom as a story.",children:[i.jsx("div",{className:"timeline-toolbar",children:i.jsx(Q,{variant:"secondary",size:"sm",onClick:g,children:c?"Copied!":"Copy run as JSON"})}),i.jsx("div",{className:"timeline",ref:u,children:d.length===0?i.jsx("div",{className:"log-empty",children:"Press Run or Step to start."}):d.map(h=>br(h)?i.jsx(_r,{group:h,labelFor:o},`turn-${h.turn}-${h.entries[0].id}`):i.jsxs("div",{className:`log-line log-${h.kind}`,children:[h.pending?"⏳ ":"",h.text]},h.id))}),r,(n.length>0||t.length>0)&&i.jsxs("details",{className:"engine-view",open:a,onToggle:h=>p(h.currentTarget.open),children:[i.jsxs("summary",{children:["Element completion",t.length>0&&` · ${t.length} incident${t.length===1?"":"s"}`]}),i.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&i.jsxs("div",{className:"timeline-stats",children:[i.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),i.jsx("ul",{children:n.filter(h=>h.completed>0||(h.active??0)>0).map(h=>i.jsxs("li",{children:[i.jsx("code",{children:o(h.elementId)||h.elementId})," ","completed ",h.completed,h.active?`, ${h.active} active`:""]},h.elementId))})]}),t.length>0&&i.jsxs("div",{className:"timeline-incidents",children:[i.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),i.jsx("ul",{children:t.map((h,f)=>i.jsxs("li",{children:[i.jsx("code",{children:o(h.elementId)||h.elementId})," —"," ",h.reason]},`${h.elementId}-${f}`))})]})]})]})]})}const Ne={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function Et(e){return`[data-tour="${e}"]`}function yr(e=location.search){return new URLSearchParams(e).get("tour")}function vr(e){return"anchor"in e?Et(e.anchor):`${Et(Ne.diagram)} [data-element-id="${xr(e.elementId)}"]`}function xr(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function Er(e){return e.map(n=>({element:vr(n.target),popover:{title:n.title,description:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}))}async function kr(e){const[{driver:n}]=await Promise.all([he(()=>import("./driver.js-bj_ppY-Q.js"),[]),he(()=>Promise.resolve({}),__vite__mapDeps([0]))]),t=n({steps:Er(e),showProgress:!0,allowClose:!0,skipMissingElement:!0});return t.drive(),{isActive:()=>t.isActive(),destroy:()=>t.destroy()}}const Nr=300;function Pr(e){const[n,t]=b.useState(!1),o=b.useRef(null),r=b.useRef(null),s=b.useRef(0),d=b.useCallback(()=>{r.current!==null&&(clearInterval(r.current),r.current=null)},[]),c=b.useCallback(()=>{var a;s.current+=1,d(),(a=o.current)==null||a.destroy(),o.current=null,t(!1)},[d]),m=b.useCallback(()=>{if(!e||e.steps.length===0||o.current)return;const a=s.current+=1;kr(e.steps).then(p=>{if(a!==s.current||!p.isActive()){p.destroy();return}o.current=p,t(!0);const u=setInterval(()=>{if(o.current!==p){clearInterval(u);return}p.isActive()||(clearInterval(u),r.current===u&&(r.current=null),o.current=null,t(!1))},Nr);r.current=u})},[e,d]);return b.useEffect(()=>c,[c]),{active:n,start:m,stop:c}}function Mr(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Sr({enabled:e,ready:n,targetRef:t,start:o}){const r=b.useRef(!1),[s,d]=b.useState(!1),c=b.useRef(o);b.useEffect(()=>{c.current=o},[o]),b.useEffect(()=>{if(!e||r.current)return;const m=t.current;if(!m||typeof IntersectionObserver>"u"){d(!0);return}const a=new IntersectionObserver(p=>{p.some(u=>u.isIntersecting)&&(d(!0),a.disconnect())},{threshold:.01});return a.observe(m),()=>a.disconnect()},[e,t]),b.useEffect(()=>{!e||r.current||!n||!s||Mr()||(r.current=!0,c.current())},[e,n,s])}const Re=650,Mn="__agent__",kt="__model__",Nt="__template__:";function Br(e){return e.kind.toLowerCase().includes("boundary")}const Rr=b.lazy(async()=>{await Promise.all([he(()=>Promise.resolve({}),__vite__mapDeps([1])),he(()=>Promise.resolve({}),__vite__mapDeps([2])),he(()=>Promise.resolve({}),__vite__mapDeps([3]))]);const{RuntimeDiagram:e}=await he(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-DTnJz5cT.js");return{RuntimeDiagram:n}},__vite__mapDeps([4,5,6]));return{default:e}}),Sn=b.lazy(()=>he(()=>import("./MonacoEditor-y6-RInb0.js").then(e=>e.M),__vite__mapDeps([7,5,8]))),Cr=b.lazy(()=>he(()=>import("./vendor-modeler-BzScQTrW.js"),__vite__mapDeps([9,5,6,10,11,12,13,1,2,3]))),Pt=b.lazy(async()=>{const{FormRenderer:e}=await he(async()=>{const{FormRenderer:n}=await import("./FormRenderer-Dp1CbbUE.js");return{FormRenderer:n}},__vite__mapDeps([14,5,12,10,11,15]));return{default:e}});function un(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function Ir(e){const n=un(e).replace(/\s+/g," ");return n.length>78?`${n.slice(0,78)}…`:n}function Ar({example:e,compact:n=!1,autostart:t=!1,initialBrainKind:o,initialTourId:r}){var Wn,Kn,Zn,Yn,Qn,Xn,et,nt;const[s,d]=b.useState(e.bpmn),c=b.useRef(null),m=nr(),[a,p]=b.useState(null);b.useEffect(()=>{o&&o!==m.kind&&m.setKind(o)},[]),b.useEffect(()=>{ar({brain:m.kind})},[m.kind]);const[u,g]=b.useState(()=>Object.fromEntries(e.handlers.map(w=>[w.elementId,w.source]))),[h,f]=b.useState(e.scriptedAgent??""),[N,v]=b.useState(()=>tn(e.templates)),_=b.useMemo(()=>oi(e,u,s,N),[e,u,s,N]),E=_.model,A=E.agent??E.agents[0]??null,x=Ci({bpmn:_.resolvedBpmn});Oi(x.phase==="ready");const ne=Pr(e.tour);b.useEffect(()=>{var w;r&&((w=e.tour)==null?void 0:w.id)===r&&ne.start()},[]);const W=E.startFormId?((Wn=e.forms)==null?void 0:Wn[E.startFormId])??null:null,[te,Pe]=b.useState(()=>({...e.seed,...W?pr(W):{}})),[be,Ie]=b.useState(A?Mn:((Kn=e.handlers[0])==null?void 0:Kn.elementId)??""),X=b.useMemo(()=>{const w=(e.scenarios??[]).findIndex(k=>Object.entries(k.variables).every(([M,F])=>JSON.stringify(te[M])===JSON.stringify(F)));return w===-1?null:w},[e.scenarios,te]),[ge,de]=Un(n?"start-compact":"start",n?!1:!!W),[C,R]=b.useState(!1),[P,z]=b.useState(!1),[O,fe]=b.useState(!1),[Ge,He]=b.useState(null),[Me,Je]=b.useState([]),[ke,_e]=b.useState({}),We=b.useMemo(()=>({...e.seed,...te,...Lo(e.imageInput?a:null)}),[e.seed,e.imageInput,te,a]),[on,je]=b.useState(null),De=b.useRef(null),[xe,Ke]=b.useState({}),[vn,rn]=b.useState(!1),Se=b.useRef(null),q=b.useRef(!1),ee=b.useRef(0),an=b.useRef(0),Ae=b.useRef({current:void 0}),Te=b.useRef({}),Le=b.useRef({}),Ze=b.useMemo(()=>{const w=new Map;for(const k of E.processes){for(const M of k.tasks)w.set(M.elementId,M.label);for(const M of k.agents){w.set(M.elementId,M.label);for(const F of M.tools)w.set(F.elementId,F.label)}for(const M of k.userTasks)w.set(M.elementId,M.label)}return k=>w.get(k)??k},[E]),L=b.useCallback(w=>{Je(k=>{if(w.key){const M=k.findIndex(F=>F.key===w.key);if(M>=0){const F=[...k];return F[M]={...F[M],...w},F}}return[...k,{...w,id:an.current++}].slice(-80)})},[]),ae=b.useMemo(()=>{var w;return((w=x.snapshot)==null?void 0:w.userTasks.find(k=>k.state==="Created"))??null},[x.snapshot]);b.useEffect(()=>{Ke({}),rn(!1)},[ae==null?void 0:ae.key]);const Fe=b.useMemo(()=>{const w=E.processes.flatMap(M=>M.tasks),k=new Map;for(const M of e.handlers){if(!M.manualControl)continue;const F=w.find(B=>B.elementId===M.elementId);F&&k.set(F.jobType,{...M.manualControl,elementId:M.elementId})}return k},[e.handlers,E]),Be=b.useMemo(()=>{if(!x.snapshot)return null;for(const w of x.snapshot.jobs){const k=Fe.get(w.jobType);if(k&&w.state==="Created")return{job:w,control:k}}return null},[x.snapshot,Fe]),Oe=b.useMemo(()=>{const w=e.requiredTools;if(!A||!x.snapshot||!(w!=null&&w.length))return[];const k=new Map(x.snapshot.elementStats.map(M=>[M.elementId,M.completed]));return A.tools.filter(M=>w.includes(M.elementId)&&(k.get(M.elementId)??0)===0)},[A,x.snapshot,e.requiredTools]),xn=b.useMemo(()=>{var M,F;return!ae||!A?!1:new Set(A.tools.map(B=>B.elementId)).has(ae.elementId)?!0:(((F=(M=x.snapshot)==null?void 0:M.elementStats.find(B=>B.elementId===A.elementId))==null?void 0:F.completed)??0)===0},[ae,A,x.snapshot]),we=ae?E.userTasks.find(w=>w.elementId===ae.elementId):void 0,S=we!=null&&we.formId?((Zn=e.forms)==null?void 0:Zn[we.formId])??null:null,J=b.useCallback(async(w,k,M,F)=>{var ue,ie,se;let B=M,ye=0;for(;ee.current===F&&B&&B.completedInstances<1&&ye++<80;){const Z=await x.stepWorkers(w,{agents:k});if(ee.current!==F)return B;B=(Z==null?void 0:Z.snapshot)??B;const H=(ue=B.instances[0])==null?void 0:ue.variables;if(H&&_e({...H}),B.userTasks.some($=>$.state==="Created")){L({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!Z){L({kind:"error",text:"▶ run stopped — no dispatch round was returned"});break}if(Z.handled===0){const $=B.messageSubscriptions.find(D=>!Br(D));if(Z.reason==="messages"&&$){if(L({kind:"step",text:`⏳ parked on a message catch event — waiting for "${$.messageName}"`,elementId:$.elementId}),await new Promise(Y=>setTimeout(Y,Re)),ee.current!==F)return B;L({kind:"vars",text:`📨 correlating message "${$.messageName}" (key: ${$.correlationKey})`,elementId:$.elementId});const D=x.correlateMessage($.messageName,$.correlationKey,"{}");if(D){B=D;const Y=(ie=B.instances[0])==null?void 0:ie.variables;Y&&_e({...Y}),await new Promise(ve=>setTimeout(ve,Re));continue}L({kind:"error",text:`▶ run stopped — correlating "${$.messageName}" (key: ${$.correlationKey}) failed`,elementId:$.elementId})}if(Z.reason==="signals"&&B.signalSubscriptions.length>0){const D=B.signalSubscriptions[0],Y=B.signalSubscriptions.length;if(L({kind:"step",text:`⏳ parked on ${Y} open signal subscription${Y===1?"":"s"} — waiting for "${D.signalName}"`,elementId:D.elementId}),await new Promise($e=>setTimeout($e,Re)),ee.current!==F)return B;const ve=x.broadcastSignal(D.signalName,"{}");if(ve){B=ve,L({kind:"vars",text:`📡 broadcasting signal "${D.signalName}" — every waiting subscription unblocks`,elementId:D.elementId});const $e=(se=B.instances[0])==null?void 0:se.variables;$e&&_e({...$e}),await new Promise(kn=>setTimeout(kn,Re));continue}L({kind:"error",text:`▶ run stopped — broadcasting signal "${D.signalName}" failed`,elementId:D.elementId})}if(Z.reason==="timers"){const D=B.timers.reduce((Y,ve)=>Math.min(Y,ve.dueInMs),1/0);if(Number.isFinite(D)){if(L({kind:"step",text:`⏳ parked on a timer — ${(Math.max(D,0)/1e3).toFixed(1)}s left on the clock`}),await new Promise(ve=>setTimeout(ve,Re)),ee.current!==F)return B;const Y=x.advanceTime(Math.max(D,0)+1);if(Y){B=Y,L({kind:"step",text:"🕐 the clock advanced — timer fired"}),await new Promise(ve=>setTimeout(ve,Re));continue}}}break}await new Promise($=>setTimeout($,Re))}return ee.current!==F||(B&&B.completedInstances>=1?L({kind:"done",text:"✅ process instance completed"}):B&&B.incidentElementIds.length>0&&L({kind:"error",text:"A job failed — incident on the diagram"})),B},[x,L]),j=b.useCallback(async w=>{var B,ye,ue,ie;if(!Be||q.current)return;const{job:k,control:M}=Be,F=++ee.current;q.current=!0,z(!0);try{let se,Z;if(w==="complete")se=x.completeJobManually(k.jobType,"{}"),Z="  ↳ completed normally";else if(M.action.kind==="timer"){const H=((ye=(B=x.snapshot)==null?void 0:B.timers[0])==null?void 0:ye.dueInMs)??0;se=x.advanceTime(Math.max(H,0)+1),Z="  ↳ advanced the clock — timer fired"}else if(M.action.kind==="message"){const{messageName:H,elementId:$}=M.action,D=(ue=x.snapshot)==null?void 0:ue.messageSubscriptions.find(Y=>Y.messageName===H&&Y.elementId===$);if(!D){L({kind:"error",text:`  ↳ no open "${H}" subscription on ${$} to correlate against`,elementId:k.elementId});return}se=x.correlateMessage(H,D.correlationKey,"{}"),Z=`  ↳ published "${H}" (key: ${D.correlationKey})`}else{const{errorCode:H,message:$}=M.action;se=x.throwJobError(k.jobType,H,$),Z=`  ↳ threw BPMN error ${H}: ${$}`}if(se){L({kind:"vars",text:Z,elementId:k.elementId});const H=(ie=se.instances[0])==null?void 0:ie.variables;H&&_e({...H}),await new Promise($=>setTimeout($,Re)),await J(Te.current,Le.current,se,F)}else L({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:k.elementId})}finally{ee.current===F&&(q.current=!1,z(!1))}},[Be,x,L,J]),K=b.useCallback(async()=>{var Z;let w=null;try{E.agents.length>0&&h.trim()&&(w=Ho(h))}catch(H){return He(H instanceof Error?H.message:String(H)),null}Ae.current={current:void 0};let k;if(e.imageInput){const H=m.vision;k={read:H??Xi(e.scriptedVision).read,live:!!H,resolve:D=>x.getRunImage(D)}}const M=Ko(E,_.handlers,L,Ae.current,k);for(const H of Fe.keys())delete M[H];const F={};if(E.agents.length>0){if(m.kind!=="scripted"&&m.chat){const $=new Map;for(const D of E.agents)$.set(D.jobType,[...$.get(D.jobType)??[],D]);for(const[D,Y]of $)F[D]=pi(Y,m.chat,L,{turnRef:Ae.current,requiredTools:e.requiredTools})}else if(w)for(const $ of new Set(E.agents.map(D=>D.jobType)))F[$]=async D=>{const Y=await w(D),ve=(Y.activateElements??[]).map(kn=>kn.elementId).join(", "),$e=E.agents.length>1?` (${D.elementId})`:"";return L({kind:"agent",text:Y.completionConditionFulfilled?`🤖 scripted agent${$e}: done`:`🤖 scripted agent${$e}: calling ${ve||"(nothing)"}`}),Y}}Je([]),Ke({});const B=We;_e(B),Te.current=M,Le.current=F;const ye=await x.redeploy(_.resolvedBpmn),ue=(ye==null?void 0:ye[0])??E.processId;L({kind:"start",text:`Starting "${ue}" — ${A?m.kind==="scripted"||!m.chat?"scripted brain":`live brain (${m.modelInUse??m.kind})`:"no agent in this model"}`});let ie;if(E.startMessage){const{messageName:H,correlationKey:$}=E.startMessage,D=Fo($,B);L({kind:"step",text:`📨 publishing "${H}" (key: ${D}) — a message start event has no other way in`,elementId:E.startMessage.elementId}),ie=x.correlateMessage(H,D,JSON.stringify(B)),ie&&ie.instances.length===0&&L({kind:"error",text:`▶ nothing started — no start subscription matched key "${D}". Fix the input or the correlation key and press Run again.`,elementId:E.startMessage.elementId})}else ie=x.createInstance(ue,JSON.stringify(B));const se=(Z=ie==null?void 0:ie.instances[0])==null?void 0:Z.key;return e.imageInput&&a&&se&&x.setRunImage(se,a),{workers:M,agents:F,snap:ie}},[x,e,_,h,te,a,We,E,m,L,Fe]),le=!!x.snapshot&&x.snapshot.instances.length>0&&x.snapshot.completedInstances<1,ze=!le&&!!W&&on!==!0,qn=!le&&!!W&&on===!1,En=ge||C;b.useEffect(()=>{n&&qn&&R(!0)},[n,qn]);const Gn=w=>{de(w),w||R(!1)},Hn=b.useCallback(async()=>{if(x.phase!=="ready"||q.current||O||_.hasErrors)return;q.current=!0,z(!0);const w=++ee.current;try{let k=Te.current,M=Le.current,F=x.snapshot;if(!le){if(De.current&&!De.current.validate())return;He(null);const B=await K();if(!B)return;k=B.workers,M=B.agents,F=B.snap,await new Promise(ye=>setTimeout(ye,Re))}await J(k,M,F,w)}finally{ee.current===w&&(q.current=!1,z(!1))}},[x,O,_.hasErrors,le,K,J]),Jn=x.phase==="ready"&&!P&&!O&&!_.hasErrors&&!ze;Sr({enabled:t,ready:Jn,targetRef:c,start:()=>void Hn()});const no=b.useCallback(async()=>{var k;if(x.phase!=="ready"||q.current||O||_.hasErrors)return;q.current=!0,fe(!0);const w=++ee.current;try{let M=Te.current,F=Le.current,B=x.snapshot;if(!le){if(De.current&&!De.current.validate())return;He(null);const Z=await K();if(!Z)return;M=Z.workers,F=Z.agents,B=Z.snap}if(!B||B.completedInstances>=1)return;const ye=B.takenSequenceFlows.length,ue=await x.stepWorkers(M,{agents:F});if(!ue){L({kind:"error",text:"⏭ step failed — no dispatch round was returned"});return}const ie=(k=ue.snapshot.instances[0])==null?void 0:k.variables;ie&&_e({...ie});const se=zi(ue.snapshot.takenSequenceFlows,ye);L($i(ue,se,Ze,Fe))}finally{ee.current===w&&(q.current=!1,fe(!1))}},[x,O,_.hasErrors,le,K,L,Ze,Fe]),to=b.useCallback(async()=>{q.current=!1,ee.current++,z(!1),fe(!1),q.current=!0;try{await x.reset()}finally{q.current=!1}Je([]),_e({})},[x]),oo=b.useCallback(async()=>{var F;if(!ae||q.current||Se.current&&!Se.current.validate())return;const w=++ee.current,k=x.completeUserTask(ae.key,JSON.stringify(xe));L({kind:"human",text:`👤 ${un(xe)}`});const M=(F=k==null?void 0:k.instances[0])==null?void 0:F.variables;if(_e(B=>({...B,...xe,...M??{}})),k&&k.completedInstances>=1){L({kind:"done",text:"✅ process instance completed"});return}if(k){q.current=!0,z(!0);try{await J(Te.current,Le.current,k,w)}finally{ee.current===w&&(q.current=!1,z(!1))}}},[ae,xe,x,L,J]),io=b.useMemo(()=>{var w,k;return x.phase==="loading"?i.jsx(re,{variant:"neutral",children:"Booting engine…"}):x.phase==="error"?i.jsx(re,{variant:"danger",children:"Engine error"}):P?i.jsx(re,{variant:"info",children:"Running…"}):O?i.jsx(re,{variant:"info",children:"Stepping…"}):(((w=x.snapshot)==null?void 0:w.incidentElementIds.length)??0)>0?i.jsx(re,{variant:"danger",children:"Incident"}):ae?i.jsx(re,{variant:"warning",children:"Waiting for a human"}):(((k=x.snapshot)==null?void 0:k.completedInstances)??0)>=1?i.jsx(re,{variant:"success",children:"Completed"}):x.snapshot?i.jsx(re,{variant:"warning",children:"Paused"}):i.jsx(re,{variant:"neutral",children:"Ready"})},[x.phase,x.snapshot,P,O,ae]),ro=b.useMemo(()=>e.blurb.split(/\n\s*\n/).map(w=>w.trim()).filter(Boolean),[e.blurb]);return i.jsxs("div",{className:"runner",ref:c,children:[n?i.jsx("h1",{className:"visually-hidden",children:e.title}):i.jsxs("section",{className:"intro",children:[i.jsx("h1",{children:e.title}),ro.map(w=>i.jsx("p",{children:w},w))]}),e.imageInput&&i.jsx(mr,{imageInput:e.imageInput,value:a,onSelect:p,disabled:P}),i.jsxs("div",{className:"scenario",children:[i.jsx("span",{className:"scenario-label",id:"scenario-label",children:e.scenariosLabel??"Example input"}),e.scenarios&&i.jsx("div",{className:"scenario-toggle",role:"group","aria-labelledby":"scenario-label",children:e.scenarios.map((w,k)=>i.jsx(Q,{size:"sm",variant:k===X?"default":"secondary","aria-pressed":k===X,disabled:P,onClick:()=>Pe(M=>({...M,...w.variables})),children:w.label},w.label))}),i.jsxs("button",{type:"button",className:"scenario-input-button",onClick:()=>Gn(!En),"aria-expanded":En,"aria-controls":"start-input-editor",title:"Edit the starting payload",children:[i.jsx("span",{className:"scenario-edit-icon","aria-hidden":!0,children:"✎"})," ","input: ",i.jsx("code",{children:Ir(te)})]}),ze&&i.jsx("span",{className:"scenario-hint",children:"Fill in the input to enable Run"})]}),i.jsxs("div",{className:"inline-input-editor",id:"start-input-editor",hidden:!En,children:[i.jsxs("div",{className:"inline-input-editor-head",children:[i.jsxs("div",{children:[i.jsx("div",{className:"inline-input-editor-title",children:E.startFormId?"Start form":"Start payload"}),i.jsx("div",{className:"inline-input-editor-copy",children:E.startFormId?`Rendered from the model's start form "${E.startFormId}".`:"The variables the instance starts with."})]}),i.jsx(Q,{size:"sm",variant:"secondary",onClick:()=>Gn(!1),children:"Done"})]}),W?i.jsx(b.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(Pt,{ref:De,schema:W,values:te,onChange:(w,k)=>Pe(M=>({...M,[w]:k})),disabled:P,onValidityChange:je})}):i.jsx("pre",{className:"vars",children:un(te,2)})]}),!n&&(A||e.imageInput)&&i.jsx(Ve,{sectionId:"brain",className:"brain-card","data-tour":Ne.brainPanel,title:"Agent brain",description:A?`What drives “${A.label}”. The model recommends; the process governs.`:"What reads the image. The model recommends; the process governs.",children:i.jsx(dr,{brain:m,showText:!!A,showVision:!!e.imageInput})}),i.jsxs("div",{className:"controls",children:[i.jsx(Q,{"data-tour":Ne.runButton,onClick:()=>void Hn(),disabled:!Jn,children:"▶ Run"}),i.jsx(Q,{variant:"secondary",onClick:()=>void no(),disabled:x.phase!=="ready"||P||O||_.hasErrors||ze||(((Yn=x.snapshot)==null?void 0:Yn.completedInstances)??0)>=1,children:"⏭ Step"}),i.jsx(Q,{variant:"secondary",onClick:()=>void to(),disabled:x.phase!=="ready"||O,children:"↺ Reset"}),e.tour&&i.jsx(Q,{variant:"secondary",onClick:ne.start,disabled:ne.active,children:ne.active?"Touring…":`🧭 ${e.tour.label}`}),io]}),x.phase==="error"&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"Engine error"}),i.jsx(pe,{children:x.error})]}),Ge&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"Code didn't compile"}),i.jsx(pe,{children:Ge})]}),_.hasErrors&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"Run is disabled — the diagram has unresolved references"}),i.jsx(pe,{children:i.jsx("ul",{className:"diagnostics",children:_.diagnostics.filter(w=>w.severity==="error").map((w,k)=>i.jsx("li",{children:w.message},k))})})]}),!_.hasErrors&&_.diagnostics.length>0&&i.jsxs(ce,{children:[i.jsx(me,{children:"Heads up"}),i.jsx(pe,{children:i.jsx("ul",{className:"diagnostics",children:_.diagnostics.map((w,k)=>i.jsx("li",{children:w.message},k))})})]}),i.jsxs("div",{className:"grid",children:[i.jsxs("div",{className:"col",children:[i.jsx(Ve,{sectionId:"process","data-tour":Ne.diagram,title:"Process",description:`${E.processName} — live token (green), incidents (red).`,children:i.jsx(b.Suspense,{fallback:i.jsx("div",{className:"diagram-fallback",children:x.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:i.jsx(Rr,{xml:_.resolvedBpmn,activeIds:((Qn=x.snapshot)==null?void 0:Qn.activeElementIds)??[],incidentIds:((Xn=x.snapshot)==null?void 0:Xn.incidentElementIds)??[],className:"diagram"})})}),ae&&i.jsxs(Ve,{sectionId:"human-task",title:(we==null?void 0:we.label)??"Human task",description:S?`Rendered from the model's form "${we==null?void 0:we.formId}".`:"This task has no linked form — complete it with no variables.",children:[Oe.length>0&&!xn&&i.jsxs(ce,{variant:"destructive",children:[i.jsx(me,{children:"The agent didn't finish its checks"}),i.jsxs(pe,{children:["It completed without running"," ",Oe.map(w=>w.label||w.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),S&&i.jsx(b.Suspense,{fallback:i.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:i.jsx(Pt,{ref:Se,schema:S,values:xe,onChange:(w,k)=>Ke(M=>({...M,[w]:k})),context:ke,onValidityChange:rn})}),i.jsx(Q,{onClick:oo,disabled:!!S&&!vn,children:"Complete task"})]}),Be&&i.jsx(Ve,{sectionId:"manual-job",title:Be.control.label,description:"This job is held here on purpose — pick how it resolves.",children:i.jsxs("div",{className:"controls",children:[i.jsx(Q,{onClick:()=>void j("complete"),disabled:P||O,children:Be.control.completeLabel??"✅ Complete normally"}),i.jsx(Q,{variant:"secondary",onClick:()=>void j("action"),disabled:P||O,children:Be.control.action.label})]})})]}),i.jsx("div",{className:"col",children:i.jsx(wr,{log:Me,elementStats:(et=x.snapshot)==null?void 0:et.elementStats,incidents:(nt=x.snapshot)==null?void 0:nt.incidents,labelFor:Ze,hasAgent:!!A,variables:i.jsxs("div",{className:"vars-block","data-tour":Ne.variablesPanel,children:[i.jsx("div",{className:"vars-head",children:"Instance variables"}),i.jsx("pre",{className:"vars",children:un(Object.keys(ke).length>0?ke:We,2)})]})})})]}),!n&&i.jsxs("div",{className:"runner-secondary",children:[i.jsx(Ve,{sectionId:"code",className:"editors","data-tour":Ne.codePanel,defaultOpen:!1,title:"Code",description:"One handler per BPMN element, plus a model tab holding the editable diagram — select an element there to edit its properties. Return variables to merge, or throw to fail the job.",children:i.jsx(b.Suspense,{fallback:i.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:i.jsxs(go,{value:be,onValueChange:Ie,children:[i.jsxs(fo,{children:[i.jsx(sn,{value:kt,children:"model"}),A&&i.jsx(sn,{value:Mn,children:"agent (scripted)"}),e.handlers.map(w=>{var k;return i.jsx(sn,{value:w.elementId,children:((k=E.tasks.find(M=>M.elementId===w.elementId))==null?void 0:k.label)??w.elementId},w.elementId)}),Object.keys(N).map(w=>i.jsx(sn,{value:Nt+w,children:w},w))]}),i.jsxs(dn,{value:kt,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:"Model"}),i.jsx("code",{children:"click an element to edit its properties on the right — Run re-reads whatever you leave here"}),i.jsx(Q,{variant:"secondary",size:"sm",onClick:()=>d(e.bpmn),disabled:s===e.bpmn,children:"Revert to original"})]}),i.jsx(Cr,{value:s,onChange:d})]}),A&&i.jsxs(dn,{value:Mn,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:A.label}),i.jsx("code",{children:m.kind==="scripted"||!m.chat?"in use":"unused — a live brain is connected"})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(Sn,{height:"360px",defaultLanguage:"javascript",value:h,onChange:w=>f(w??""),options:Bn})})]}),e.handlers.map(w=>{var k;return i.jsxs(dn,{value:w.elementId,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:((k=E.tasks.find(M=>M.elementId===w.elementId))==null?void 0:k.label)??w.elementId}),i.jsx("code",{children:w.standsInFor??w.elementId})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(Sn,{height:"360px",defaultLanguage:"javascript",value:u[w.elementId],onChange:M=>g(F=>({...F,[w.elementId]:M??""})),options:Bn})})]},w.elementId)}),Object.keys(N).map(w=>i.jsxs(dn,{value:Nt+w,children:[i.jsxs("div",{className:"editor-meta",children:[i.jsx("strong",{children:w}),i.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+w+"}}"]})]}),i.jsx("div",{className:"editor-wrap",children:i.jsx(Sn,{height:"360px",defaultLanguage:"markdown",value:N[w],onChange:k=>v(M=>tn(M,{[w]:k??""})),options:Bn})})]},w))]})})}),A&&i.jsx(Ve,{sectionId:"tools",defaultOpen:!1,title:"Tools, as the model sees them",description:i.jsxs(i.Fragment,{children:["Read from the diagram — element name, documentation, and every",i.jsx("code",{children:" fromAi(…)"})," argument."]}),children:i.jsx("ul",{className:"tool-list",children:A.tools.map(w=>i.jsxs("li",{children:[i.jsx("code",{children:w.elementId}),i.jsxs("span",{children:[" — ",w.documentation||w.label]}),w.args.length>0&&i.jsx("ul",{children:w.args.map(k=>i.jsxs("li",{children:[i.jsxs("code",{children:[k.name,": ",k.type]})," ","— ",k.description]},k.name))})]},w.elementId))})})]})]})}const Bn={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},Tr=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Fr=`async (job, { sleep }) => {
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
}`,jr=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above; this body
  // does not run either. Unlike Activity_guarded, this task has no boundary
  // event: firing its error action has nothing to catch it, so it becomes an
  // incident instead of a handled alternate path. Completing it normally
  // completes the job with {} — no trace line, no shipped/tracking variables
  // — and the token reaches "Order shipped".
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Dr={id:"learn-error-boundary",title:"Error boundary event",group:"learn-bpmn",blurb:["A boundary event attached to a task catches something that happens while the task is running and reroutes the token — here, a thrown BPMN error.",'Hit Run and the process stops at "Charge payment (guarded)" with a card under the diagram offering two buttons: press "Simulate: card declined" and watch the attached boundary event catch the error, skipping straight to "Handled — order cancelled".','Then Reset, complete that first job normally, and decline the second one on "Ship items (unguarded)" — this time it becomes an incident, because that task has no boundary event and the engine has nothing to reroute the token with.',`That's exactly what breaks if you forget the boundary event (or give it the wrong errorRef): a failure that should be a modelled alternate path becomes a stuck instance a human has to resolve by hand. Complete both jobs normally instead to see the unattended happy path all the way to "Order shipped".`].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/boundary-events/",bpmn:Tr,seed:{},handlers:[{elementId:"Activity_guarded",standsInFor:"job worker — charge-payment",source:Fr,manualControl:{label:"Charge payment (guarded)",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_unguarded",standsInFor:"job worker — ship-items",source:jr,manualControl:{label:"Ship items (unguarded)",completeLabel:"✅ Ship it",action:{kind:"error",errorCode:"CARRIER_REJECTED",message:"The carrier rejected the shipment — nothing catches this.",label:"❌ Simulate: carrier rejected (becomes an incident)"}}}]},Lr=Object.freeze(Object.defineProperty({__proto__:null,default:Dr},Symbol.toStringTag,{value:"Module"})),Or=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,zr=`async (job, { num, trace, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const orderTotal = num("orderTotal", 40);

  await sleep(300);

  // This is the variable the gateway's conditional sequence flow reads —
  // whatever this handler decides is what actually steers the token.
  const route = orderTotal >= 100 ? "express" : "standard";
  trace(\`order total $\${orderTotal} -> route: \${route}\`);

  // Whatever you return is merged onto the process instance.
  return { route };
}`,$r=`async (job, { trace, sleep }) => {
  trace("expedited courier picks up the order");
  await sleep(400);

  return { shipped: true, method: "express" };
}`,Ur=`async (job, { trace, sleep }) => {
  trace("order queued for standard courier pickup");
  await sleep(400);

  return { shipped: true, method: "standard" };
}`,Vr={id:"learn-exclusive-gateway",title:"Exclusive gateway",group:"learn-bpmn",blurb:["An exclusive gateway is the fork in the road: exactly one of its outgoing sequence flows is taken, chosen by evaluating each flow's FEEL condition in declaration order, first match wins. A default flow (drawn with a slash through its start, not a diamond marker) has no condition and is the fallback taken when every conditional flow evaluates false — that's what makes an exclusive gateway safe to deploy without an explicit case for every value.",`Run this and watch 'Check order total' decide a route variable, then watch the gateway send the token down 'Express ship' when the order is large enough, or 'Standard ship' otherwise (the default flow). Try both from the Start panel on the right: it holds a "Small order" and a "Large order" button that swap the payload for you.`,"To see the conditions themselves, open the model tab in the Code panel and click either arrow leaving the gateway — the FEEL is under Condition. Get one wrong (or misspell the variable name) and the flow you meant to take is silently skipped in favour of whichever one does evaluate true, or the default if none do — no error, just the wrong branch."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/gateways/gateways/#exclusive-gateway",bpmn:Or,seed:{orderTotal:40},scenarios:[{label:"Small order — standard ship (default flow)",variables:{orderTotal:40}},{label:"Large order — express ship (conditional flow)",variables:{orderTotal:150}}],handlers:[{elementId:"Activity_check_order",standsInFor:"job worker — check-order-total",source:zr},{elementId:"Activity_express_ship",standsInFor:"job worker — express-ship",source:$r},{elementId:"Activity_standard_ship",standsInFor:"job worker — standard-ship",source:Ur}]},qr=Object.freeze(Object.defineProperty({__proto__:null,default:Vr},Symbol.toStringTag,{value:"Module"})),Gr=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Hr=`async (job, { text, trace }) => {
  const orderId = text("orderId", "unknown-order");

  trace("shipment confirmed for " + orderId + " — recording it");

  return { shipmentRecorded: true };
}`,Jr={id:"learn-message-correlation",title:"Message catch event + correlation key",group:"learn-bpmn",blurb:[`A message intermediate catch event pauses the token until a message with a matching name and correlation key is published — the BPMN analogue of "wait for this specific order's shipment to be confirmed", not just "wait for any shipment-confirmed message".`,"Run this and watch the token park on the catch event; there's no external broker in the browser, so the page correlates the message itself once the wait is reached, echoing back the exact correlationKey (`=orderId`) the subscription resolved to — the Activity panel logs the wait and the correlation as separate lines — then the token resumes into Record confirmation and on to the end event.",'To see where that key comes from: in the Code panel, open the model tab, click "Wait for shipment confirmed", and expand Message in the properties panel on the right. Subscription correlation key holds `orderId` (the `=` beside the box marks it as a FEEL expression), and Name holds `shipment-confirmed` — those two together are what a publisher has to match. Edit them freely; because this page publishes the key the subscription itself resolved, the run stays self-consistent either way.','In a real deployment, where a separate system does the publishing, pointing that expression at a variable the instance never sets leaves the catch event waiting forever, and omitting zeebe:subscription altogether is rejected at deploy time with "has no zeebe:subscription correlationKey" — docs/engine-coverage.md records both.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/message-events/",bpmn:Gr,seed:{orderId:"ORD-42"},handlers:[{elementId:"Activity_record",standsInFor:"job worker — record-confirmation",source:Hr}]},Wr=Object.freeze(Object.defineProperty({__proto__:null,default:Jr},Symbol.toStringTag,{value:"Module"})),Kr=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Zr=`async (job, { text, sleep, trace }) => {
  // Each parallel instance gets its own 'item' from the input collection.
  const item = text("item", "widget");

  trace("processing " + item);
  await sleep(400);

  // Whatever you return is merged onto this instance's scope, then collected
  // into the process-level 'results' array via outputElement/outputCollection.
  return { result: item.toUpperCase() + "-DONE" };
}`,Yr={id:"learn-multi-instance-parallel",title:"Parallel multi-instance",group:"learn-bpmn",blurb:["A multi-instance activity runs its task once per element of a collection, spawning that many job instances of the same element in parallel, and only lets the token move on once every one of them completes.",`Run this and watch three 'Process item' jobs activate together for apple, banana, cherry, and complete (in any order) before the process reaches its end event. Nothing about the diagram says "three" — that comes from the collection, so use the buttons in the Start panel on the right to swap between one, three, and six items and hit Run again; the Activity panel logs one 'Process item' line per element, so the fan-out is right there to count.`,'The property tying the two together is in the Code panel: open the model tab, click "Process item", and expand Multi-instance in the properties panel on the right — Input collection holds `items`, the FEEL expression naming the variable to fan out over. Drop it entirely and the activity silently degenerates to a single ordinary instance, with no error to tell you it happened. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/multi-instance/",bpmn:Kr,seed:{items:["apple","banana","cherry"]},scenarios:[{label:"One item — a single instance",variables:{items:["apple"]}},{label:"Three items — fans out to three",variables:{items:["apple","banana","cherry"]}},{label:"Six items — fans out to six",variables:{items:["apple","banana","cherry","damson","elderberry","fig"]}}],handlers:[{elementId:"Activity_process",standsInFor:"job worker — process-item",source:Zr}]},Qr=Object.freeze(Object.defineProperty({__proto__:null,default:Yr},Symbol.toStringTag,{value:"Module"})),Xr=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ea=`async (job, { text, sleep, trace }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "widget");

  trace("packing " + item);
  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { packed: true };
}`,na=`async (job, { sleep, trace }) => {
  trace("handing over to the courier");
  await sleep(400);

  return { dispatched: true, tracking: "SVC" + Math.floor(Math.random() * 1e9) };
}`,ta={id:"learn-service-task",title:"Service task + sequence flow",group:"learn-bpmn",blurb:["A service task is a unit of work a worker (not a human) performs; a sequence flow is the arrow that hands the token from one to the next once its task completes.","Run this and watch each task activate, run its handler, and complete in order — Prepare package, then Dispatch courier — before the process reaches its end event.",`The link between the two halves is the job type: in the Code panel, open the model tab, click "Prepare package", and expand Task definition in the properties panel on the right — Job type is the name a worker has to subscribe to in order to be handed this task's work.`,"(This page wires its own handlers up from whatever the model declares, so renaming it here keeps working; on a real cluster the worker is a separate process started with a job type of its own, and a mismatch means nobody ever activates the job, so the run stalls forever.)"].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/service-tasks/",bpmn:Xr,seed:{item:"camunda-t-shirt"},handlers:[{elementId:"Activity_prepare",standsInFor:"job worker — prepare-package",source:ea},{elementId:"Activity_dispatch",standsInFor:"job worker — dispatch-courier",source:na}]},oa=Object.freeze(Object.defineProperty({__proto__:null,default:ta},Symbol.toStringTag,{value:"Module"})),ia=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ra=`async (job, { sleep, trace }) => {
  trace("all-clear received — resuming operations");
  await sleep(400);

  return { resumed: true };
}`,aa=`async (job, { sleep, trace }) => {
  trace("same all-clear — reopening the floor");
  await sleep(400);

  return { floorReopened: true };
}`,sa={id:"learn-signal-broadcast",title:"Signal intermediate catch event + broadcast",group:"learn-bpmn",blurb:["A signal intermediate catch event parks the token until someone broadcasts a signal by name. Unlike a message, a signal isn't correlated to one waiting instance — broadcasting it unblocks every open subscription for that name at once.",`That's why this model forks: both "Ops waits for all-clear" and "Floor waits for all-clear" park on the same signal, and one broadcast releases the pair together, so 'Resume operations' and 'Reopen the floor' both run before the join lets the token reach the end event. Run it and watch both branches light up off a single broadcast — the Activity panel says "parked on 2 open signal subscriptions" before the one 📡 line that releases them both. A message could not do that, because a correlation key targets exactly one waiting subscription.`,"To see the name being matched: in the Code panel, open the model tab, click either catch event, and expand Signal in the properties panel on the right — Name holds `all-clear`. Each catch event owns its own signal definition, so editing the name there changes only that branch: do it on one of them and hit Run, and the panel now reports two broadcasts instead of one, because the branches no longer share a name and each needs its own. The count of broadcasts is exactly the count of distinct signal names being waited on."].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/signal-events/signal-event/",bpmn:ia,seed:{},handlers:[{elementId:"Activity_resume",standsInFor:"job worker — resume-operations",source:ra},{elementId:"Activity_reopen",standsInFor:"job worker — reopen-floor",source:aa}]},da=Object.freeze(Object.defineProperty({__proto__:null,default:sa},Symbol.toStringTag,{value:"Module"})),la=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ca=`async (job, { sleep, trace }) => {
  trace("the timer fired — sending the reminder now");
  await sleep(400);

  return { reminderSent: true };
}`,ma={id:"learn-timer-catch-event",title:"Timer intermediate catch event",group:"learn-bpmn",blurb:["A timer catch event parks the token until a point in time — here, a fixed duration after the token arrives.","Run this and read the Activity panel: the token parks on the timer with nothing else happening ('parked on a timer — 3.0s left on the clock'), then the clock is fast-forwarded to the due time ('the clock advanced — timer fired') and the token resumes on its own: 'Send the reminder' activates, runs, and the process completes. Nothing needs to poll or push it forward; the engine itself wakes the instance when the timer's due time passes. (This page fast-forwards a virtual clock so the 3-second wait doesn't cost you 3 real seconds — a live deployment waits the actual PT3S.)",'To change the wait: in the Code panel, open the model tab, click "Wait 3 seconds", and expand Timer in the properties panel on the right — Type is Duration and Value holds the ISO-8601 duration, so PT30S or PT5M works the same way. Revert to original puts it back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/timer-events/timer-event-type/",bpmn:la,seed:{},handlers:[{elementId:"Activity_after_timer",standsInFor:"job worker — send-reminder",source:ca}]},pa=Object.freeze(Object.defineProperty({__proto__:null,default:ma},Symbol.toStringTag,{value:"Module"})),ua=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ha="Camunda Cloud",ba="8.10.0",ga={name:"Camunda Web Modeler",version:"9b5d5ef"},fa=19,_a="learn-user-task-form-review",wa=[{text:`# Review request

A request is waiting for you. Decide whether to approve or reject it, then submit.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Requester:** {{requester}}

**Details:** {{details}}`,type:"text",layout:{row:"Row_details",columns:null},id:"Field_ReviewDetails"},{label:"Decision",values:[{label:"Approve",value:"approved"},{label:"Reject",value:"rejected"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_ReviewDecision",key:"decision",validate:{required:!0}},{label:"Comments",description:"Optional note recorded alongside your decision.",type:"textarea",layout:{row:"Row_comments",columns:null},id:"Field_ReviewComments",key:"comments"}],ya="default",va={executionPlatform:ha,executionPlatformVersion:ba,exporter:ga,schemaVersion:fa,id:_a,components:wa,type:ya},xa={id:"learn-user-task-form",title:"User task + form",group:"learn-bpmn",blurb:["A user task is a step a human completes, not a worker — the token parks at the task until someone submits its form, then moves on.","Run this and watch the process reach 'Review request' and wait; fill in the decision form that appears in its own card under the diagram and press Complete task to see the token resume and the process reach its end event.",'What binds that form to the task is one property: in the Code panel, open the model tab, click "Review request", and expand Form in the properties panel on the right — Form ID names the form the runner looks up and renders. A user task with no form binding still deploys and still parks the token, but the runner has nothing to render for it, so it offers a bare Complete button that finishes the task with no variables. Revert to original puts the binding back.'].join(`

`),docsUrl:"https://docs.camunda.io/docs/components/modeler/bpmn/user-tasks/",bpmn:ua,forms:{"learn-user-task-form-review":va},seed:{requester:"Priya Shah",details:"Approve access to the shared design-review workspace."},handlers:[]},Ea=Object.freeze(Object.defineProperty({__proto__:null,default:xa},Symbol.toStringTag,{value:"Module"})),ka=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,Na=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,Pa={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:Ne.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:Ne.variablesPanel}}]},Ma=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Sa="Camunda Cloud",Ba="8.10.0",Ra={name:"Camunda Web Modeler",version:"9b5d5ef"},Ca=19,Ia="seed-export-shipment-ready",Aa=[{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Choose a ready-made shipment to get started, or select Custom to write your own below.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Shipment notes",description:"Optional. When filled in, used instead of the scenario above. The agent reads these notes to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],Ta="default",Fa={executionPlatform:Sa,executionPlatformVersion:Ba,exporter:Ra,schemaVersion:Ca,id:Ia,components:Aa,type:Ta},ja="Camunda Cloud",Da="8.10.0",La={name:"Camunda Web Modeler",version:"9b5d5ef"},Oa=19,za="seed-export-compliance-review",$a=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],Ua="default",Va={executionPlatform:ja,executionPlatformVersion:Da,exporter:La,schemaVersion:Oa,id:za,components:$a,type:Ua},qa=Object.assign({"./prompts/system-prompt.md":ka,"./prompts/user-prompt.md":Na}),Ga=tn(Object.fromEntries(Object.entries(qa).map(([e,n])=>[$t(e),n.trimEnd()]))),Mt="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",Ha="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",Ja=`async (job) => {
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
}`,Wa=`async (job, { text, sleep, trace }) => {
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
}`,Ka=`async (job, { text, sleep, trace }) => {
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
}`,Za=`async (job, { num, sleep }) => {
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
}`,Ya=`async (job, { text, trace }) => {
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
}`,Qa=`async (job, { sleep }) => {
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
}`,Xa={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",hero:{headline:"The LLM *recommends*. The process *governs*.",lede:"An agentic ad-hoc sub-process chooses its own compliance checks, but the gateway after it — not the model — decides whether a shipment ships or goes to a human.",tagline:"Anatomy of an enterprise agent"},docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:Ma,forms:{"seed-export-shipment-ready":Fa,"seed-export-compliance-review":Va},seed:{scenario:Mt,shipmentNotes:""},scenariosLabel:"Example shipment",scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:Mt,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:Ha,shipmentNotes:""}}],scriptedAgent:Ja,templates:Ga,tour:Pa,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:Wa},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:Ka},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:Za},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:Ya},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:Qa}]},es=`You are a loan origination assistant at a retail bank. Your job is to gather everything a senior loan officer needs to decide an application — you do **not** decide it yourself.

Work through the case with the tools available to you:

- **Query customer** — find the applicant's existing relationship with the bank.
- **Credit bureau lookup** — pull their credit report.
- **Assess application** — run the bank's underwriting policy to get a debt-to-income ratio, a risk band, and a recommendation. Always run this; the officer's review depends on it.
- **Update application status** — mark the case as \`under-review\` once you have assessed it.

Call the tools in whatever order makes sense, but make sure the application has been assessed before you finish. When you have gathered the customer profile, the bureau report, and the policy assessment, and marked the status, you are done — a senior officer takes it from there.
`,ns="Gather this loan case for the senior officer: look up the customer, pull their credit bureau report, run the underwriting assessment, and set the application status to `under-review`. Then stop — the officer makes the decision.\n",ts={id:"loan-origination-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a loan application through the origination agent.",target:{anchor:Ne.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the application and decides, turn by turn, which tools to call — look up the customer, pull a credit bureau report, run the underwriting policy, update the status. Nothing here is a fixed sequence.",target:{elementId:"LoanOriginationAgent"}},{title:"Policy, not opinion",description:"The assessment computes the debt-to-income ratio, a risk band and a recommendation from the verified figures — the deterministic policy the senior officer's review leans on.",target:{elementId:"AssessApplication"}},{title:"Every application meets a human",description:"Whatever the agent recommended, the token now waits here: no offer and no decline is reachable without a senior officer first signing off. Open the task to record the decision — the gateway routes on it.",target:{elementId:"SeniorOfficerReview"}},{title:"Everything the run recorded",description:"The variables panel shows the customer profile, the bureau report, the debt-to-income and risk band, and the recommendation — exactly what each tool wrote for the officer to weigh.",target:{anchor:Ne.variablesPanel}}]},os=`<?xml version="1.0" encoding="UTF-8"?>
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
`,is="Camunda Cloud",rs="8.10.0",as={name:"Camunda Web Modeler",version:"9b5d5ef"},ss=19,ds="loan-application",ls="default",cs=[{text:`# Loan application

Capture the applicant's details, then run the origination agent.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{label:"Applicant name",type:"textfield",layout:{row:"Row_applicant",columns:null},id:"Field_ApplicantName",key:"applicantName",defaultValue:"Ada Lovelace",validate:{required:!0}},{label:"Loan amount",description:"Amount requested.",type:"number",layout:{row:"Row_amount",columns:null},id:"Field_LoanAmount",key:"loanAmount",defaultValue:2e4},{label:"Loan purpose",type:"textfield",layout:{row:"Row_purpose",columns:null},id:"Field_LoanPurpose",key:"loanPurpose",defaultValue:"Home improvement"},{label:"Annual income",type:"number",layout:{row:"Row_income",columns:null},id:"Field_AnnualIncome",key:"annualIncome",defaultValue:96e3},{label:"Monthly debt payments",description:"Existing monthly repayments across all obligations.",type:"number",layout:{row:"Row_debt",columns:null},id:"Field_MonthlyDebt",key:"monthlyDebt",defaultValue:850},{label:"Stated credit score",description:"The applicant's self-reported score; the credit bureau tool confirms it.",type:"number",layout:{row:"Row_score",columns:null},id:"Field_CreditScore",key:"creditScore",defaultValue:782}],ms={executionPlatform:is,executionPlatformVersion:rs,exporter:as,schemaVersion:ss,id:ds,type:ls,components:cs},ps="Camunda Cloud",us="8.10.0",hs={name:"Camunda Web Modeler",version:"9b5d5ef"},bs=19,gs="loan-senior-officer-review",fs="default",_s=[{text:`# Senior officer review

Every application reaches this desk before an offer or a decline can be sent. Review the agent's findings, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Applicant:** {{applicantName}} — {{loanPurpose}}, amount {{loanAmount}}

**Customer relationship:** {{if customerProfile = null then "unknown" else customerProfile.segment + " (" + string(customerProfile.relationshipYears) + "y)"}}

**Credit bureau:** {{if bureauReport = null then "n/a" else string(bureauReport.score) + " (" + bureauReport.band + "), " + string(bureauReport.derogatoryMarks) + " derogatory mark(s)"}}

**Debt-to-income:** {{debtToIncome}}%

**Assessed risk band:** {{riskBand}}

**Policy recommendation:** {{recommendation}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Decision",values:[{label:"Approve — issue loan offer",value:"approved"},{label:"Decline — send decline notice",value:"declined"}],type:"radio",layout:{row:"Row_decision",columns:null},id:"Field_Decision",key:"decision",validate:{required:!0}},{label:"Officer note",description:"Recorded against the application; the decline notice quotes it as the reason.",type:"textarea",layout:{row:"Row_note",columns:null},id:"Field_ReviewNote",key:"reviewNote"}],ws={executionPlatform:ps,executionPlatformVersion:us,exporter:hs,schemaVersion:bs,id:gs,type:fs,components:_s},ys=Object.assign({"./prompts/system-prompt.md":es,"./prompts/user-prompt.md":ns}),vs=tn(Object.fromEntries(Object.entries(ys).map(([e,n])=>[$t(e),n.trimEnd()]))),St={applicantName:"Ada Lovelace",annualIncome:96e3,monthlyDebt:850,creditScore:782,loanAmount:2e4,loanPurpose:"Home improvement"},xs={applicantName:"Cyrus Vale",annualIncome:38e3,monthlyDebt:1450,creditScore:566,loanAmount:42e3,loanPurpose:"Debt consolidation"},Es=`async (job) => {
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
}`,ks=`async (job, { text, sleep, trace }) => {
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
}`,Ns=`async (job, { text, num, sleep, trace }) => {
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
}`,Ps=`async (job, { num, trace }) => {
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
}`,Ms=`async (job, { sleep, trace }) => {
  // Stands in for a write-back to the loan origination system. Marks the case
  // as awaiting the senior officer's decision.
  await sleep(200);
  trace("application status -> under-review");
  return { applicationStatus: "under-review", toolCallResult: "under-review" };
}`,Ss=`async (job, { num, sleep, trace }) => {
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
}`,Bs=`async (job, { text, sleep, trace }) => {
  // Trunk service task on the declined path. Sends the applicant a decline
  // notice with the recorded reason, standing in for a notification channel.
  const note = text("reviewNote", "");
  const reason = note || "Application did not meet the lending policy.";
  await sleep(300);
  trace("decline notice sent");

  return { declineNotice: { reason: reason, sentTo: text("applicantName", "the applicant") } };
}`,Rs={id:"loan-origination",title:"Loan origination agent",blurb:"An AI agent gathers a loan case with its own tools — customer lookup, credit bureau, an underwriting policy, a status update — then every application passes through a mandatory senior-officer review before a gateway routes it to an offer or a decline. The agent advises; the process governs.",docsUrl:"https://camunda.com/orchestrate/agents/",bpmn:os,forms:{"loan-application":ms,"loan-senior-officer-review":ws},seed:St,scenarios:[{label:"Strong applicant (policy recommends approve)",variables:St},{label:"Marginal applicant (policy recommends decline)",variables:xs}],scriptedAgent:Es,templates:vs,tour:ts,requiredTools:["AssessApplication","UpdateApplicationStatus"],handlers:[{elementId:"QueryCustomer",standsInFor:"CRM connector — customer lookup",source:ks},{elementId:"CreditBureauLookup",standsInFor:"REST connector — credit bureau",source:Ns},{elementId:"AssessApplication",standsInFor:"Script task — underwriting policy (FEEL)",source:Ps},{elementId:"UpdateApplicationStatus",standsInFor:"REST connector — origination system",source:Ms},{elementId:"IssueLoanOffer",standsInFor:"REST connector — offer/booking system",source:Ss},{elementId:"SendDeclineNotice",standsInFor:"REST connector — notifications",source:Bs}]},Cs=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Is=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,As=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,Ts=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Fs={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:Cs,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Is},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:As},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Ts}]},js=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Ds=`async (job, { text, num, sleep, trace }) => {
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
}`,Ls={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:js,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:Ds}]},Os=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,zs=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,$s=`async (job, { num, sleep }) => {
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
}`,Us=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Vs={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:Os,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:zs},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:$s,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Us,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},qs="/web-demo-framework/pr-preview/pr-121/assets/de-bmw-mini-JBSk7QcF.jpg",Gs="/web-demo-framework/pr-preview/pr-121/assets/de-bmw-mini.thumb-CUUmJrRO.jpg",Hs="/web-demo-framework/pr-preview/pr-121/assets/uk-d651-rnb-XGipy2QN.jpg",Js="/web-demo-framework/pr-preview/pr-121/assets/uk-d651-rnb.thumb-mjEcbhUf.jpg",Ws="/web-demo-framework/pr-preview/pr-121/assets/uk-mk70-orj-Cn6O3Xfm.jpg",Ks="/web-demo-framework/pr-preview/pr-121/assets/uk-mk70-orj.thumb-CaeZ2vqU.jpg",Zs="/web-demo-framework/pr-preview/pr-121/assets/uk-ni-ijz-8992-YXV44tgk.jpg",Ys="/web-demo-framework/pr-preview/pr-121/assets/uk-ni-ijz-8992.thumb-DYwok8jV.jpg",Qs="/web-demo-framework/pr-preview/pr-121/assets/us-hyundai-genesis-gGpAIEpi.jpg",Xs="/web-demo-framework/pr-preview/pr-121/assets/us-hyundai-genesis.thumb-DEEt19Mw.jpg",ed=`<?xml version="1.0" encoding="UTF-8"?>
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
`,nd="Camunda Cloud",td="8.10.0",od={name:"Camunda Web Modeler",version:"9b5d5ef"},id=19,rd="plate-recognition-confirm",ad="default",sd=[{text:`# Confirm the number plate

The in-browser vision model read a plate from the photo. It **recommends**; you **govern** — accept its reading or correct it before it is recorded.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ConfirmHeading"},{text:'**Model reading:** {{if modelPlate = null or modelPlate = "" then "(nothing read)" else modelPlate}}',type:"text",layout:{row:"Row_modelReading",columns:null},id:"Field_ModelReading"},{label:"Number plate",description:"Edit this if the model misread the plate. What you submit is what gets recorded.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ConfirmPlate",key:"confirmedPlate",validate:{required:!0}}],dd={executionPlatform:nd,executionPlatformVersion:td,exporter:od,schemaVersion:id,id:rd,type:ad,components:sd},ld="Camunda Cloud",cd="8.10.0",md={name:"Camunda Web Modeler",version:"9b5d5ef"},pd=19,ud="plate-recognition-manual",hd="default",bd=[{text:`# Couldn't read the plate

The vision model didn't return a confident reading for this photo (an unrecognised image, or no in-browser model connected). Enter the plate by hand, or re-run with the in-browser vision brain connected.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ManualHeading"},{label:"Number plate",description:"Type the plate exactly as it appears in the photo.",type:"textfield",layout:{row:"Row_plate",columns:null},id:"Field_ManualPlate",key:"confirmedPlate",validate:{required:!0}}],gd={executionPlatform:ld,executionPlatformVersion:cd,exporter:md,schemaVersion:pd,id:ud,type:hd,components:bd},fd="Camunda Cloud",_d="8.10.0",wd={name:"Camunda Web Modeler",version:"9b5d5ef"},yd=19,vd="plate-recognition-country",xd="default",Ed=[{text:`# Read a number plate

Pick the plate's **country** so the reader knows which format to extract, then start the run. Leave it on **Auto-detect** to let it guess from the shape.`,type:"text",layout:{row:"Row_countryHeading",columns:null},id:"Field_CountryHeading"},{label:"Plate country",description:"The vision model reads all text in the photo; this tells the process which country's plate format to pull out of that reading.",type:"select",layout:{row:"Row_country",columns:null},id:"Field_Country",key:"country",defaultValue:"auto",values:[{label:"Auto-detect (any format)",value:"auto"},{label:"United Kingdom",value:"uk"},{label:"India",value:"india"},{label:"Germany",value:"germany"},{label:"South Korea",value:"korea"}],validate:{required:!0}}],kd={executionPlatform:fd,executionPlatformVersion:_d,exporter:wd,schemaVersion:yd,id:vd,type:xd,components:Ed},Nd=[{id:"uk-mk70-orj",file:"images/uk-mk70-orj.jpg",thumb:"images/uk-mk70-orj.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_MK70_ORJ_(MK_-_Manchester)_-_70_Plate_(1st_September_2020_-_28th_February_2021)_-_VW_Golf_(CarShop).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate MK70 ORJ" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"MK70 ORJ"},{id:"uk-ni-ijz-8992",file:"images/uk-ni-ijz-8992.jpg",thumb:"images/uk-ni-ijz-8992.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_(Northern_Ireland)_Number_Plate_IJZ_8992_(JZ_-_Down_(NI)_)_-_Dateless_Plate_-_Ford_Fiesta_(Woolston_Car_Centre).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK (Northern Ireland) Number Plate IJZ 8992" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"IJZ 8992"},{id:"uk-d651-rnb",file:"images/uk-d651-rnb.jpg",thumb:"images/uk-d651-rnb.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:UK_Number_Plate_D651_RNB_(NB_-_Manchester)_-_D_Reg_(1st_August_1986_-_31st_July_1987)_-_Ford_Capri_(The_Quick_Group).jpg",license:"CC0-1.0",attribution:'Harvey Bold, "UK Number Plate D651 RNB" (Wikimedia Commons, CC0 1.0)',groundTruthPlate:"D651 RNB"},{id:"de-bmw-mini",file:"images/de-bmw-mini.jpg",thumb:"images/de-bmw-mini.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Dernekamp,_BMW_Mini_--_2018_--_1545-51.jpg",license:"CC-BY-SA-4.0",attribution:'Dietmar Rabich / Wikimedia Commons / "Dülmen, Dernekamp, BMW Mini -- 2018 -- 1545-51" / CC BY-SA 4.0',groundTruthPlate:"MS WL 545"},{id:"us-hyundai-genesis",file:"images/us-hyundai-genesis.jpg",thumb:"images/us-hyundai-genesis.thumb.jpg",source:"https://commons.wikimedia.org/wiki/File:Hyundai_Genesis_3.8_(US)_(9004912958).jpg",license:"CC-BY-SA-2.0",attribution:'Scarlet Sappho, "Hyundai Genesis 3.8 (US)" (Wikimedia Commons, CC BY-SA 2.0)',groundTruthPlate:"GWAN EUM"}],eo=Nd,Pd=Object.assign({"./images/de-bmw-mini.jpg":qs,"./images/de-bmw-mini.thumb.jpg":Gs,"./images/uk-d651-rnb.jpg":Hs,"./images/uk-d651-rnb.thumb.jpg":Js,"./images/uk-mk70-orj.jpg":Ws,"./images/uk-mk70-orj.thumb.jpg":Ks,"./images/uk-ni-ijz-8992.jpg":Zs,"./images/uk-ni-ijz-8992.thumb.jpg":Ys,"./images/us-hyundai-genesis.jpg":Qs,"./images/us-hyundai-genesis.thumb.jpg":Xs});function Bt(e){const n=Pd[`./${e}`];if(!n)throw new Error(`plate-recognition: image asset "${e}" is in images.json but missing on disk`);return n}const Md=eo.map(e=>({id:e.id,file:Bt(e.file),thumb:Bt(e.thumb),label:e.groundTruthPlate})),Sd=Object.fromEntries(eo.map(e=>[e.id,e.groundTruthPlate])),Bd=`async (job, { vision, trace, text }) => {
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
}`,Rd=`async (job, { text, trace }) => {
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
}`,Cd={id:"plate-recognition",title:"Read a number plate from a photo",blurb:"Pick the plate's country, then a photo goes into the run, an in-browser vision model reads the number plate on the reader's own GPU, and a human confirms or corrects it before the process records the result. The vision model recommends; the BPMN process governs. No server, no API key — with no model connected it falls back to a deterministic scripted reading.",docsUrl:"https://docs.camunda.io/docs/components/modeler/forms/camunda-forms-reference/",bpmn:ed,forms:{"plate-recognition-country":kd,"plate-recognition-confirm":dd,"plate-recognition-manual":gd},seed:{country:"auto"},imageInput:{label:"Pick a seed photo (its plate is known, so the scripted reader works offline) or upload your own — a live in-browser model reads a photo it has never seen.",seedImages:Md},scriptedVision:Sd,handlers:[{elementId:"ExtractPlate",standsInFor:"Vision model — Florence-2 <OCR> on WebGPU (in-browser)",source:Bd},{elementId:"RecordResult",standsInFor:"Script task — records the governed outcome",source:Rd}]},Id=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ad=[{text:"# Submit an invoice for payment",type:"text",layout:{row:"Row_heading",columns:null},id:"Field_Heading"},{text:`The fields below already hold a clean, matching scenario — or pick another from the buttons above. The four the agent behaves differently on:

| Scenario | PO amount | Invoice amount | Currency | Notes |
|---|---|---|---|---|
| Clean match (default) | 4200 | 4200 | USD | Quarterly office supplies delivery per PO, no changes. |
| Documented adjustment | 12000 | 12540 | USD | Includes a $540 expedited freight surcharge, pre-approved by procurement via email on the 3rd. |
| Foreign currency, converts and matches | 8000 | 7400 | EUR | Standard components delivery per PO, exact quantities. |
| Vague justification (deny this one) | 5000 | 5350 | USD | Includes miscellaneous facility charges from the past quarter. |

For the first three, approve the release when the **Review release request** form appears below the diagram. For the last one, the vague justification is just specific enough that the agent will still try to release it - deny it instead, to see the agent read the denial and notify the vendor of a dispute. Every scenario then reaches a second, independent **Final compliance sign-off** once the agent is done.`,type:"text",layout:{row:"Row_scenarios",columns:null},id:"Field_ScenarioTable"},{label:"Vendor name",type:"textfield",layout:{row:"Row_vendor",columns:null},id:"Field_VendorName",key:"vendorName",defaultValue:"Acme Office Supplies",validate:{required:!0}},{label:"Invoice number",type:"textfield",layout:{row:"Row_invoiceNumber",columns:null},id:"Field_InvoiceNumber",key:"invoiceNumber",defaultValue:"INV-10234",validate:{required:!0}},{label:"PO number",type:"textfield",layout:{row:"Row_poNumber",columns:null},id:"Field_PoNumber",key:"poNumber",defaultValue:"PO-88291",validate:{required:!0}},{label:"PO amount (USD)",type:"number",layout:{row:"Row_poAmount",columns:null},id:"Field_PoAmount",key:"poAmount",defaultValue:4200,validate:{required:!0}},{label:"Invoice amount",type:"number",layout:{row:"Row_invoiceAmount",columns:null},id:"Field_InvoiceAmount",key:"invoiceAmount",defaultValue:4200,validate:{required:!0}},{label:"Invoice currency",values:[{label:"USD",value:"USD"},{label:"EUR",value:"EUR"},{label:"GBP",value:"GBP"}],type:"select",layout:{row:"Row_invoiceCurrency",columns:null},id:"Field_InvoiceCurrency",key:"invoiceCurrency",defaultValue:"USD",validate:{required:!0}},{label:"Invoice notes",description:"Free text - the agent reads this to judge whether any overage above the PO amount is documented.",type:"textarea",layout:{row:"Row_invoiceNotes",columns:null},id:"Field_InvoiceNotes",key:"invoiceNotes",defaultValue:"Quarterly office supplies delivery per PO, no changes.",validate:{required:!0}}],Td="default",Fd="invoice-submit",jd="Camunda Cloud",Dd="8.10.0",Ld={name:"Camunda Modeler",version:"5.46.1"},Od=19,zd={components:Ad,type:Td,id:Fd,executionPlatform:jd,executionPlatformVersion:Dd,exporter:Ld,schemaVersion:Od},$d=[{text:`# Payment release requested

The agent wants to release payment for this invoice. Nothing is paid until you decide - this is one of the agent's own tools, so it's waiting on you mid-reasoning, not asking you to redo its work afterwards.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReleaseHeading"},{text:`**Vendor:** {{vendorName}}

**Invoice number:** {{invoiceNumber}}

**PO number:** {{poNumber}}

**PO amount:** {{poAmount}} USD

**Invoice amount:** {{invoiceAmount}} {{invoiceCurrency}}

**Invoice notes:** {{invoiceNotes}}

**Agent wants to release:** {{agentProposedAmountUSD}} USD

**Agent's reasoning:** {{agentReleaseReasoning}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReleaseFindings"},{label:"Amount to approve (USD)",description:"Prefilled with the agent's proposed amount - adjust it before approving if you disagree.",type:"number",layout:{row:"Row_approvedAmount",columns:null},id:"Field_ApprovedAmount",key:"approvedAmountUSD",validate:{required:!0,min:.01}},{label:"Your decision",values:[{label:"Approve release",value:"approve"},{label:"Deny release",value:"deny"}],type:"radio",layout:{row:"Row_release_decision",columns:null},id:"Field_ReleaseDecision",key:"releaseDecision",validate:{required:!0}},{label:"Comments",description:"Explain your decision - the agent reads this immediately if you deny the release, and it's shown again at final sign-off either way.",type:"textarea",layout:{row:"Row_release_comments",columns:null},id:"Field_ReleaseComments",key:"releaseReviewerComments"}],Ud="default",Vd="payment-release-request",qd="Camunda Cloud",Gd="8.10.0",Hd={name:"Camunda Modeler",version:"5.46.1"},Jd=19,Wd={components:$d,type:Ud,id:Vd,executionPlatform:qd,executionPlatformVersion:Gd,exporter:Hd,schemaVersion:Jd},Kd=[{text:`# Final compliance sign-off

A second, independent check after the case is fully resolved. Unlike the payment-release approval, this step doesn't need to know how the agent reasoned - only what actually happened - which is exactly the kind of checkpoint any orchestration approach could bolt on after the fact.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ComplianceHeading"},{text:`**Vendor:** {{vendorName}}

**Invoice number:** {{invoiceNumber}}

**PO number:** {{poNumber}}

**PO amount:** {{poAmount}} USD

**Invoice amount:** {{invoiceAmount}} {{invoiceCurrency}}

**Payment release decision:** {{releaseDecision}}

**Amount put to the reviewer:** {{approvedAmountUSD}} USD

**Release reviewer comments:** {{releaseReviewerComments}}

**Final outcome:** {{caseOutcome}}

**Details:** {{caseSummary}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ComplianceFindings"},{label:"Compliance decision",values:[{label:"Confirm - case closed",value:"confirm"},{label:"Escalate for audit",value:"escalate"}],type:"radio",layout:{row:"Row_compliance_decision",columns:null},id:"Field_ComplianceDecision",key:"complianceDecision",validate:{required:!0}},{label:"Comments",type:"textarea",layout:{row:"Row_compliance_comments",columns:null},id:"Field_ComplianceComments",key:"complianceComments"}],Zd="default",Yd="compliance-signoff",Qd="Camunda Cloud",Xd="8.10.0",el={name:"Camunda Modeler",version:"5.46.1"},nl=19,tl={components:Kd,type:Zd,id:Yd,executionPlatform:Qd,executionPlatformVersion:Xd,exporter:el,schemaVersion:nl},Ye={vendorName:"Acme Office Supplies",invoiceNumber:"INV-10234",poNumber:"PO-88291",poAmount:4200,invoiceAmount:4200,invoiceCurrency:"USD",invoiceNotes:"Quarterly office supplies delivery per PO, no changes."},ol=`async (job) => {
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
}`,il=`async (job, { num, text, sleep, trace }) => {
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
}`,rl=`async (job, { num, text, sleep }) => {
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
}`,al=`async (job, { text, trace }) => {
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
}`,sl=`async (job, { text, sleep }) => {
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
}`,dl={id:"invoice-payment",title:"Invoice payment approval agent",blurb:"A human-in-the-loop agent: the tool that releases money is a user task inside the agent's own tool loop, so approval is something the agent asks for and reasons about — and payment has exactly one incoming path, from the approved branch. A second, post-hoc sign-off outside the agent sees only what actually happened.",hero:{headline:"The agent can *ask* to pay. Only a human can *approve* it.",lede:"Camunda's human-in-the-loop agent pattern, running here on a wasm engine in your browser. Deny the release in the reviewer form and watch the agent read the denial and change course.",tagline:"Human-in-the-loop agent"},docsUrl:"https://github.com/camunda/camunda-8-tutorials/tree/main/examples/human-in-the-loop-agent",bpmn:Id,forms:{"invoice-submit":zd,"payment-release-request":Wd,"compliance-signoff":tl},seed:Ye,scenariosLabel:"Invoice to review",scenarios:[{label:"Clean match — invoice equals the PO",variables:Ye},{label:"Documented overage — 4.5% over, with a reason",variables:{...Ye,invoiceNumber:"INV-10251",invoiceAmount:4389,invoiceNotes:"Includes pre-approved rush freight surcharge agreed with procurement on 12 Jan."}},{label:"Foreign currency — EUR invoice against a USD PO",variables:{...Ye,invoiceNumber:"INV-10262",invoiceAmount:3860,invoiceCurrency:"EUR",invoiceNotes:"Quarterly office supplies delivery per PO, billed in euros."}},{label:"Vague justification — 7% over, no reason given",variables:{...Ye,invoiceNumber:"INV-10277",invoiceAmount:4494,invoiceNotes:"Additional items supplied."}}],scriptedAgent:ol,handlers:[{elementId:"ConvertCurrency",standsInFor:"HTTP connector — api.frankfurter.app exchange rates",source:il},{elementId:"ReleasePayment",standsInFor:"HTTP connector — accounts-payable payment rail",source:rl},{elementId:"RecordReleaseDenied",standsInFor:"script task — hand the denial back to the agent",source:al},{elementId:"NotifyVendorDispute",standsInFor:"HTTP connector — vendor dispute notice",source:sl}]},ll=[Ls,Xa,Rs,dl,Fs,Vs,Cd],cl=Object.assign({"./learn-error-boundary/index.ts":Lr,"./learn-exclusive-gateway/index.ts":qr,"./learn-message-correlation/index.ts":Wr,"./learn-multi-instance-parallel/index.ts":Qr,"./learn-service-task/index.ts":oa,"./learn-signal-broadcast/index.ts":da,"./learn-timer-catch-event/index.ts":pa,"./learn-user-task-form/index.ts":Ea}),ml=Object.values(cl).map(e=>e.default).sort((e,n)=>e.id.localeCompare(n.id)),Qe=[...ll,...ml];function Vn(){return"/web-demo-framework/pr-preview/pr-121/"}function pl(e){const n=Vn();return e.startsWith(n)?"/"+e.slice(n.length):e}function ul(e=location.pathname){const t=pl(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function hl(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function bl(e=location.search){return new URLSearchParams(e).get("view")==="compact"?"compact":"full"}function gl(e=location.search){return new URLSearchParams(e).get("autostart")==="1"}function Rt(e){return`${Vn()}examples/${encodeURIComponent(e)}`}const Ct="p";function fl(){const e=new URLSearchParams(location.search),n=e.get(Ct);if(!n)return!1;const t=n.replace(/[\t\n\r]/g,"");if(!t.startsWith("/")||t.startsWith("//")||t.startsWith("/\\"))return!1;e.delete(Ct);try{const o=new URL(Vn(),location.href),r=new URL(t.slice(1),o);return r.origin!==location.origin?!1:(r.search=e.toString(),r.hash=location.hash,history.replaceState(null,"",r),!0)}catch{return!1}}function _l(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function It(){return{route:ul(),embed:hl(),view:bl(),autostart:gl()}}function wl(){const[e,n]=b.useState(It);return b.useEffect(()=>{const t=()=>n(It());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const At={headline:"The model *runs*. The code is *yours* to edit.",lede:"Every example on this page is a real BPMN process executing in your browser on the nano WebAssembly engine — edit the model, edit the handlers, swap the LLM, and run it again.",tagline:"Runnable Camunda examples"};function yl({text:e}){return i.jsx(i.Fragment,{children:e.split(/\*([^*]+)\*/g).map((n,t)=>t%2===1?i.jsx("em",{children:n},t):i.jsx(b.Fragment,{children:n},t))})}function vl(){const{route:e,embed:n,view:t,autostart:o}=wl(),r=n&&t==="compact",s=Yt().brain,d=yr();Li(n);const c=e.kind==="example"?e.id:Qe[0].id,m=Qe.find(f=>f.id===c)??Qe[0],a=Qe.filter(f=>f.group!=="learn-bpmn"),p=Qe.filter(f=>f.group==="learn-bpmn"),u=f=>{_l(Rt(f),{hash:location.hash})},g=m.hero??At,h=i.jsxs(i.Fragment,{children:[!n&&i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"hero",children:[i.jsx("h1",{children:i.jsx(yl,{text:g.headline})}),g.lede&&i.jsx("p",{children:g.lede})]}),i.jsx("nav",{className:"example-picker","aria-label":"Scenario examples",children:a.map(f=>i.jsx(Q,{size:"sm",variant:f.id===m.id?"default":"secondary","aria-current":f.id===m.id?"page":void 0,onClick:()=>u(f.id),children:f.title},f.id))}),p.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("h2",{className:"example-group-heading",id:"learn-bpmn-heading",children:"Learn BPMN"}),i.jsx("nav",{className:"example-picker","aria-labelledby":"learn-bpmn-heading",children:p.map(f=>i.jsx(Q,{size:"sm",variant:f.id===m.id?"default":"secondary","aria-current":f.id===m.id?"page":void 0,onClick:()=>u(f.id),children:f.title},f.id))})]})]}),i.jsxs("div",{className:"example-meta",children:[!n&&m.docsUrl&&i.jsx("a",{className:"docs-link",href:m.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&i.jsx("a",{className:"open-full-page",href:Rt(m.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:r?"Open the editable version ↗":"Open full page ↗"})]}),i.jsx(Ar,{example:m,compact:r,autostart:o,initialBrainKind:s,initialTourId:d},m.id)]});return n?i.jsx("div",{className:`c4-ui app-shell app-embed${r?" app-compact":""}`,children:i.jsx("main",{id:"main",className:`layout layout-embed${r?" layout-compact":""}`,children:h})}):i.jsxs("div",{className:"c4-ui app-shell",children:[i.jsx(_o,{className:"topbar",logo:i.jsx("span",{className:"brand-dot","aria-hidden":!0}),appName:"Runnable Camunda examples",trailing:i.jsx("span",{className:"app-subtitle",children:g.tagline??At.tagline})}),i.jsx("main",{id:"main",className:"layout",children:h}),i.jsx("footer",{className:"footer",children:"Running locally in your browser on the nano WebAssembly BPMN engine — no cluster, no server, no data leaving the page."})]})}fl();lo.createRoot(document.getElementById("root")).render(i.jsx(b.StrictMode,{children:i.jsx(wo,{children:i.jsx(vl,{})})}));export{he as _,Nl as c};
