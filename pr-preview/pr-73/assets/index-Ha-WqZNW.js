const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-embedded-CkDn6taO.css","assets/RuntimeDiagram-Dp98hqau.js","assets/vendor-react-WnIiAG2f.js","assets/Viewer-R8mIPiBT.js","assets/MonacoEditor-Dyua7Fuq.js","assets/MonacoEditor-BNIHZwmG.css","assets/vendor-modeler-DPqq0Y-9.js","assets/vendor-design-system-BT8QqEW8.js","assets/vendor-design-system-CJ6jcon3.css","assets/parser-Cn7g5BiQ.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-C-zHccvD.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var ut=Object.defineProperty;var mt=(e,n,t)=>n in e?ut(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var H=(e,n,t)=>mt(e,typeof n!="symbol"?n+"":n,t);import{r as f,j as o,i as pt}from"./vendor-react-WnIiAG2f.js";import{B as V,a as Z,L as ze,S as gt,b as ht,c as bt,d as ft,e as yt,A as me,f as pe,g as ge,I as Ve,C as ae,h as ce,i as le,j as de,k as ue,l as Mt,T as wt,m as _t,n as Pe,o as Oe,p as xt,q as Nt}from"./vendor-design-system-BT8QqEW8.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const vt="modulepreload",It=function(e){return"/pr-preview/pr-73/"+e},Nn={},ee=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){let c=function(s){return Promise.all(s.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),m=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=c(t.map(s=>{if(s=It(s),s in Nn)return;Nn[s]=!0;const d=s.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${g}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":vt,d||(p.as="script"),p.crossOrigin="",p.href=s,m&&p.setAttribute("nonce",m),document.head.appendChild(p),d)return new Promise((h,b)=>{p.addEventListener("load",h),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${s}`)))})}))}function a(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return i.then(c=>{for(const l of c||[])l.status==="rejected"&&a(l.reason);return n().catch(a)})},Tt="io.camunda.agenticai:aiagent",_e="http://www.omg.org/spec/BPMN/20100524/MODEL",kt="http://camunda.org/schema/zeebe/1.0";function nn(e,n){return Array.from(e.getElementsByTagNameNS(kt,n))}function Yn(e,n){return nn(e,n).filter(t=>jt(t)===e)}function jt(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===_e&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function cn(e){const n=Yn(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function Et(e){const n=Array.from(e.children).find(t=>t.namespaceURI===_e&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function vn(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(r=>r.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function Dt(e){const n=[],t=r=>{for(const i of Array.from(r.attributes))n.push(i.value);for(const i of Array.from(r.children))t(i)};return t(e),n.join(`
`)}function St(e){const n=Dt(e),t=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,r=[],i=new Set;for(const a of n.matchAll(t)){const c=a[1];i.has(c)||(i.add(c),r.push({name:c,description:(a[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:a[3]??"string"}))}return r}function At(e){const n={};for(const t of Yn(e,"input")){const r=t.getAttribute("target");r&&(n[r]=t.getAttribute("source")??"")}return n}function Lt(e){return Array.from(e.getElementsByTagNameNS(_e,"adHocSubProcess")).filter(n=>(cn(n)??"").startsWith(Tt))}function Ct(e,n){const t=At(e),r=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:cn(e),systemPrompt:vn(t["data.systemPrompt.prompt"]),userPrompt:vn(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(r)&&r>0?r:10,tools:n}}function zt(e,n){var g;const t=e.getAttribute("id")??"",r=e.getAttribute("name")??t,i=Lt(e);i.length>1&&n.push({severity:"warning",elementId:i.map(p=>p.getAttribute("id")).join(", "),message:`Process "${r}" hosts ${i.length} AI Agent sub-processes (${i.map(p=>p.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const a=[],c=new Map(i.map(p=>[p,[]]));for(const p of Array.from(e.getElementsByTagName("*"))){if(p.namespaceURI!==_e||i.includes(p))continue;const h=cn(p),b=p.getAttribute("id");if(!h||!b)continue;const x=i.filter(j=>j.contains(p)),I=x.find(j=>x.every(O=>O===j||O.contains(j))),w={elementId:b,label:p.getAttribute("name")??b,jobType:h,documentation:Et(p),isTool:I!=null};a.push(w),I&&c.get(I).push({elementId:b,label:w.label,jobType:h,documentation:w.documentation,args:St(p)})}const l=i.map(p=>Ct(p,c.get(p))),m=Array.from(e.getElementsByTagNameNS(_e,"userTask")).map(p=>{var h;return{elementId:p.getAttribute("id")??"",label:p.getAttribute("name")??p.getAttribute("id")??"",formId:((h=nn(p,"formDefinition")[0])==null?void 0:h.getAttribute("formId"))??void 0}}),s=e.getElementsByTagNameNS(_e,"startEvent")[0],d=s?((g=nn(s,"formDefinition")[0])==null?void 0:g.getAttribute("formId"))??void 0:void 0;return{processId:t,processName:r,tasks:a,agents:l,userTasks:m,startFormId:d}}function Pt(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),r=t.getElementsByTagName("parsererror")[0];if(r)throw new Error(`Invalid BPMN XML: ${r.textContent}`);const i=Array.from(t.getElementsByTagNameNS(_e,"process"));if(i.length===0)throw new Error("No <bpmn:process> in the diagram.");const a=[],c=i.map(m=>zt(m,a));let l=n.processId?c.find(m=>m.processId===n.processId):void 0;return n.processId&&!l&&a.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${c[0].processId}".`}),l??(l=c[0]),c.length>1&&a.push({severity:"warning",message:`Diagram has ${c.length} <bpmn:process> elements (${c.map(m=>m.processId).join(", ")}); using "${l.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:c,diagnostics:a,processId:l.processId,processName:l.processName,tasks:l.tasks,agent:l.agents[0]??null,agents:c.flatMap(m=>m.agents),userTasks:l.userTasks,startFormId:l.startFormId}}function Ot(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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

    function compile(source, what) {
      // Deliberately still new Function(): the isolation here comes from the
      // opaque-origin iframe boundary, not from re-implementing a JS sandbox.
      var factory = new Function('"use strict"; return (' + source + ');');
      var fn = factory();
      if (typeof fn !== "function") throw new Error(what + " must evaluate to a function.");
      return fn;
    }

    function helpersFor(job, id) {
      return {
        sleep: sleep,
        trace: function (text) { post({ kind: "trace", id: id, text: String(text) }); },
        text: function (key, fallback) { return textOf(job.variables, key, fallback); },
        num: function (key, fallback) { return numOf(job.variables, key, fallback); },
      };
    }

    async function handle(msg) {
      try {
        if (msg.kind === "run-handler") {
          var handler = compile(msg.source, "Handler code");
          var out = await handler(msg.job, helpersFor(msg.job, msg.id));
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
      if (!msg || (msg.kind !== "run-handler" && msg.kind !== "run-agent")) return;
      handle(msg);
    });

    post({ kind: "ready" });
  <\/script></body></html>`}function Qn(e,n={}){const{timeoutMs:t=5e3,onTrace:r}=n,i=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((a,c)=>{const l=document.createElement("iframe");l.setAttribute("sandbox","allow-scripts"),l.style.display="none",l.setAttribute("aria-hidden","true");let m=!1,s;const d=()=>{s&&clearTimeout(s),window.removeEventListener("message",p),l.remove()},g=h=>{m||(m=!0,d(),h())};function p(h){var x;if(h.source!==l.contentWindow)return;const b=h.data;if(!(!b||typeof b!="object")){if(b.kind==="ready"){const I=e.job,w=e.kind==="run-handler"?{kind:"run-handler",id:i,source:e.source,job:I}:{kind:"run-agent",id:i,source:e.source,job:I};(x=l.contentWindow)==null||x.postMessage(w,"*");return}"id"in b&&b.id!==i||(b.kind==="trace"?r==null||r(b.text):b.kind==="result"?g(()=>a(b.value)):b.kind==="error"&&g(()=>c(new Error(b.message))))}}window.addEventListener("message",p),s=setTimeout(()=>{g(()=>c(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),l.srcdoc=Ot(),document.body.appendChild(l)})}function $n(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function Bt(e,n,t){return Qn({kind:"run-handler",source:e,job:$n(n)},{onTrace:t.trace})}function Rt(e,n){return Qn({kind:"run-agent",source:e,job:$n(n)})}function Gn(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function Ut(e){return Gn(e,"Handler code"),(n,t)=>Bt(e,n,t)}function Ft(e){return Gn(e,"Agent code"),n=>Rt(e,n)}function Yt(e,n,t){return{sleep:r=>new Promise(i=>setTimeout(i,r)),trace:r=>n({kind:"tool",text:`   ${r}`,elementId:e.elementId,turn:t}),text:(r,i="")=>{const a=e.variables[r];return typeof a=="string"?a:a==null?i:String(a)},num:(r,i=0)=>{const a=e.variables[r],c=typeof a=="number"?a:Number(a);return Number.isFinite(c)?c:i}}}function Qt(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function $t(e,n,t,r){const i={},a=e.processes.flatMap(l=>l.tasks),c=new Map(a.map(l=>[l.elementId,l.label]));for(const l of a)i[l.jobType]||(i[l.jobType]=async m=>{const s=n[m.elementId];if(!s)throw new Error(`No handler registered for ${m.elementId} (job type ${m.type})`);const d=c.get(m.elementId)??m.elementId,g=r==null?void 0:r.current;t({kind:"tool",text:`▶ ${d}`,elementId:m.elementId,turn:g});const p=await s(m,Yt(m,t,g));return t({kind:"vars",text:`  ↳ ${Qt(p)}`,elementId:m.elementId,result:p,turn:g}),p});return i}const Gt=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function Qe(...e){const n=Object.create(null);for(const t of e)if(t)for(const r of Object.keys(t))n[r]=t[r];return n}function Jt(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function Jn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ht(e){return Jn(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function Vt(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zt(e){return JSON.stringify(e).slice(1,-1)}function qt(e,n){const t=e.lastIndexOf("<",n),r=e.lastIndexOf(">",n);if(t<=r)return"text";const i=e.slice(t,n);if((i.match(/"/g)??[]).length%2===0)return"text";const c=i.lastIndexOf('"');return(i.slice(c+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function Wt(e,n,t="xml"){const r=[],i=new Set;return{result:e.replace(Gt,(c,l,m)=>{const s=l.trim();if(!Object.prototype.hasOwnProperty.call(n,s))return i.has(s)||(i.add(s),r.push(s)),c;const d=n[s];if(t==="json")return Zt(d);const g=qt(e,m);return g==="feel-literal"?Vt(d):g==="attribute"?Ht(d):Jn(d)}),unresolved:r}}function Kt(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function Xt(e,n={},t=e.bpmn,r={}){const i=[],a=Qe(e.templates,r),{result:c,unresolved:l}=Wt(t,a,"xml");for(const w of l)i.push({severity:"warning",message:`Template placeholder "{{${w}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let m;try{m=Pt(c)}catch(w){return i.push({severity:"error",message:w instanceof Error?w.message:String(w)}),{resolvedBpmn:c,model:Kt(),handlers:{},forms:{},diagnostics:i,hasErrors:!0}}i.push(...m.diagnostics);const s=m.processes.flatMap(w=>w.tasks),d=new Map(e.handlers.map(w=>[w.elementId,w.source])),g={};for(const w of s){const j=n[w.elementId]??d.get(w.elementId);if(j===void 0){i.push({severity:"error",elementId:w.elementId,jobType:w.jobType,message:`No handler for "${w.label}" (${w.elementId}, job type "${w.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{g[w.elementId]=Ut(j)}catch(O){i.push({severity:"error",elementId:w.elementId,jobType:w.jobType,message:`"${w.label}" (${w.elementId}): handler code didn't compile — ${O instanceof Error?O.message:String(O)}`})}}const p=new Set(s.map(w=>w.elementId)),h=new Set([...d.keys(),...Object.keys(n)]);for(const w of h)p.has(w)||i.push({severity:"error",elementId:w,message:`Handler "${w}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const b={},x=e.forms??{},I=(w,j)=>{if(!w)return;const O=x[w];O?b[w]=O:i.push({severity:"error",formId:w,message:`${j} references form "${w}", which has no matching schema.`})};for(const w of m.processes){I(w.startFormId,`The start event of process "${w.processName}"`);for(const j of w.userTasks)I(j.formId,`User task "${j.label}" (${j.elementId})`)}return{resolvedBpmn:c,model:m,handlers:g,forms:b,diagnostics:i,hasErrors:i.some(w=>w.severity==="error")}}function er(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let r=n;r<e.length;r++)if(e[r]==="{")t++;else if(e[r]==="}"&&(t--,t===0))try{const i=JSON.parse(e.slice(n,r+1));return typeof i=="object"&&i!==null&&!Array.isArray(i)?i:null}catch{return null}return null}function tn(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function In(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function Tn(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:In(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,r=Array.isArray(t)?t:Object.values(e).find(a=>Array.isArray(a))??[],i=[];for(const a of r)if(typeof a=="string")a.trim()&&i.push({name:a.trim(),args:{}});else if(a&&typeof a=="object"){const c=a,l=c.name??c.tool??c.id??c.function;typeof l=="string"&&l.trim()&&i.push({name:l.trim(),args:In(c)})}return i}function nr(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function kn(e){const n=e.args.length?e.args.map(r=>`      ${r.name} (${r.type}) — ${r.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function tr(e,n,t){const r=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",i=t[0]??e.tools[0];if(t.length===0)return`${r}

Every tool has already run. Reply with JSON only — no prose, no explanation, no
markdown fence — exactly:

{"done": true}`;const a=i!=null&&i.args.length?`{${i.args.map(c=>`"${c.name}": "…"`).join(", ")}}`:"{}";return n?`${r}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${t.map(kn).join(`

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

${t.map(kn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(i==null?void 0:i.elementId)??"ToolName"}", "arguments": ${a}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function rr(e,n,t,r,i=[],a=[],c=!1){const l=e.userPrompt||"Carry out your task.",m=Object.entries(n).filter(([,d])=>typeof d=="string"&&d.trim().length>0).map(([d,g])=>`  ${d}: ${String(g)}`),s=[l,m.length?`Case data:
${m.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return s.push(t.length?`${c?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),s.push(r.length?`Tools still available:
${r.map(d=>`  ${d.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),a.length&&s.push(`Your last reply was rejected: ${a.join("; ")}. Do not repeat it.`),i.length&&s.push(`You reported that you are done, but ${i.join(" and ")} ${i.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${i.length===1?"it":"them"} now.`),s.push("Which tool should run next? Reply with JSON only."),s.join(`

`)}async function ir(e,n,t,r,i,a){let c="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:a});const l=await e(r,i,m=>{c+=m,n({kind:"llm",text:`${tn(c)} ▍`,key:t,pending:!0,turn:a})});return n({kind:"llm",text:tn(l||c)||"(empty reply)",key:t,pending:!1,turn:a}),l}function or(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function sr(e,n,t){const r={},i=new Map,a=new Map;for(const{tool:c,args:l}of e){const m={};for(const s of c.args){const d=l[s.name];if(!(d!=null&&d!=="")){n({kind:"error",text:`🤖 ${c.elementId}: model supplied no value for "${s.name}"`,turn:t,elementId:c.elementId});continue}const p=i.get(s.name);if(p!==void 0&&p!==c.elementId){n({kind:"error",text:`🤖 argument name collision on "${s.name}": both ${p} and ${c.elementId} declare it — ${p} already claimed it this turn, ${c.elementId}'s value is dropped`,turn:t,elementId:c.elementId});continue}const h=or(s.type,d);if(!h.ok){n({kind:"error",text:`🤖 ${c.elementId}: "${s.name}" is declared as ${s.type} but the model supplied ${JSON.stringify(d)} — rejected, not passed through`,turn:t,elementId:c.elementId});continue}r[s.name]=h.value,m[s.name]=h.value,i.set(s.name,c.elementId)}a.set(c.elementId,m)}return{variablesOut:r,forHistory:a}}function ar(e,n,t,r={}){const{maxNewTokens:i=384,allowRepeats:a=!1,allowMultiToolTurns:c=!1,turnRef:l,requiredTools:m=[],maxEarlyDoneNudges:s=1}=r;let d=0;const g=new Set,p=[];let h=0,b=[],x=[];return async I=>{const w=I.variables,j=w.toolCallResult;for(j!==void 0&&p.length&&(p[p.length-1]=`${p[p.length-1]} → ${tn(JSON.stringify(j),160)}`);;){const X=await O();if(X)return X}async function O(){if(d+=1,l&&(l.current=d),d>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:d}),{completionConditionFulfilled:!0};const X=a?e.tools:e.tools.filter(S=>!g.has(S.elementId)),J=[{role:"system",content:tr(e,c,X)},{role:"user",content:rr(e,w,p,X,b,x,a)}];b=[],x=[];let K;try{K=await ir(n,t,`llm-turn-${d}`,J,i,d)}catch(S){return t({kind:"error",text:`LLM call failed: ${S instanceof Error?S.message:String(S)} — completing the agent.`,turn:d}),{completionConditionFulfilled:!0}}const v=er(K);if(nr(v)&&Tn(v).length===0){const S=m.filter(ne=>!g.has(ne));return S.length&&h<s?(h+=1,b=S,t({kind:"agent",text:`🤖 model says it is done, but ${S.join(", ")} hasn't run — asking once more`,turn:d}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:d}),{completionConditionFulfilled:!0})}const T=Tn(v);if(T.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:d}),x=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const k=[],z=[],A=[];for(const S of T){const ne=e.tools.find(Ne=>Ne.elementId===S.name);if(!ne){z.push(S.name);continue}if(!a&&g.has(ne.elementId)){A.push(ne.elementId);continue}k.push({tool:ne,args:S.args})}if(z.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${z.join(", ")} — nothing activated`,turn:d}),A.length&&t({kind:"error",text:`🤖 model asked to re-run ${A.join(", ")} — skipped (already run)`,turn:d}),k.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:d}),x=[...z.length?[`${z.join(", ")} ${z.length===1?"is":"are"} not a real tool`]:[],...A.length?[`${A.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:se,forHistory:ye}=sr(k,t,d);for(const{tool:S}of k)g.add(S.elementId),p.push(`- ${S.elementId}(${JSON.stringify(ye.get(S.elementId))})`);for(const{tool:S}of k)t({kind:"agent",text:`🤖 calling ${S.elementId}`,turn:d,elementId:S.elementId,args:ye.get(S.elementId)??{}});return{activateElements:k.map(S=>({elementId:S.tool.elementId})),variables:se}}}}function cr(e,n,t,r={}){const i=new Map(e.map(a=>[a.elementId,ar(a,n,t,r)]));return async a=>{const c=i.get(a.elementId);if(!c)throw new Error(`No agent host registered for "${a.elementId}"`);return c(a)}}class rn{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,jn.unregister(this),n}free(){const n=this.__destroy_into_raw();u.__wbg_testengine_free(n,0)}activateJobs(n,t,r,i){let a,c;try{const h=u.__wbindgen_add_to_stack_pointer(-16),b=D(n,u.__wbindgen_export,u.__wbindgen_export2),x=E,I=D(i,u.__wbindgen_export,u.__wbindgen_export2),w=E;u.testengine_activateJobs(h,this.__wbg_ptr,b,x,t,r,I,w);var l=M().getInt32(h+0,!0),m=M().getInt32(h+4,!0),s=M().getInt32(h+8,!0),d=M().getInt32(h+12,!0),g=l,p=m;if(d)throw g=0,p=0,U(s);return a=g,c=p,R(g,p)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(a,c,1)}}advanceTime(n){let t,r;try{const d=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_advanceTime(d,this.__wbg_ptr,n);var i=M().getInt32(d+0,!0),a=M().getInt32(d+4,!0),c=M().getInt32(d+8,!0),l=M().getInt32(d+12,!0),m=i,s=a;if(l)throw m=0,s=0,U(c);return t=m,r=s,R(m,s)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}assignUserTask(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),h=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,x=D(t,u.__wbindgen_export,u.__wbindgen_export2),I=E;u.testengine_assignUserTask(p,this.__wbg_ptr,h,b,x,I,r);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),d=c,g=l;if(s)throw d=0,g=0,U(m);return i=d,a=g,R(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}broadcastSignal(n,t){let r,i;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),h=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),x=E;u.testengine_broadcastSignal(g,this.__wbg_ptr,p,h,b,x);var a=M().getInt32(g+0,!0),c=M().getInt32(g+4,!0),l=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),s=a,d=c;if(m)throw s=0,d=0,U(l);return r=s,i=d,R(s,d)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}cancelInstance(n){let t,r;try{const d=u.__wbindgen_add_to_stack_pointer(-16),g=D(n,u.__wbindgen_export,u.__wbindgen_export2),p=E;u.testengine_cancelInstance(d,this.__wbg_ptr,g,p);var i=M().getInt32(d+0,!0),a=M().getInt32(d+4,!0),c=M().getInt32(d+8,!0),l=M().getInt32(d+12,!0),m=i,s=a;if(l)throw m=0,s=0,U(c);return t=m,r=s,R(m,s)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}completeAgentJob(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),h=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,x=D(t,u.__wbindgen_export,u.__wbindgen_export2),I=E,w=D(r,u.__wbindgen_export,u.__wbindgen_export2),j=E;u.testengine_completeAgentJob(p,this.__wbg_ptr,h,b,x,I,w,j);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),d=c,g=l;if(s)throw d=0,g=0,U(m);return i=d,a=g,R(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}completeJob(n,t){let r,i;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),h=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),x=E;u.testengine_completeJob(g,this.__wbg_ptr,p,h,b,x);var a=M().getInt32(g+0,!0),c=M().getInt32(g+4,!0),l=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),s=a,d=c;if(m)throw s=0,d=0,U(l);return r=s,i=d,R(s,d)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}completeUserTask(n,t){let r,i;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),h=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),x=E;u.testengine_completeUserTask(g,this.__wbg_ptr,p,h,b,x);var a=M().getInt32(g+0,!0),c=M().getInt32(g+4,!0),l=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),s=a,d=c;if(m)throw s=0,d=0,U(l);return r=s,i=d,R(s,d)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}correlateMessage(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),h=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,x=D(t,u.__wbindgen_export,u.__wbindgen_export2),I=E,w=D(r,u.__wbindgen_export,u.__wbindgen_export2),j=E;u.testengine_correlateMessage(p,this.__wbg_ptr,h,b,x,I,w,j);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),d=c,g=l;if(s)throw d=0,g=0,U(m);return i=d,a=g,R(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}createInstance(n,t){let r,i;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),h=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),x=E;u.testengine_createInstance(g,this.__wbg_ptr,p,h,b,x);var a=M().getInt32(g+0,!0),c=M().getInt32(g+4,!0),l=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),s=a,d=c;if(m)throw s=0,d=0,U(l);return r=s,i=d,R(s,d)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}deploy(n){let t,r;try{const d=u.__wbindgen_add_to_stack_pointer(-16),g=D(n,u.__wbindgen_export,u.__wbindgen_export2),p=E;u.testengine_deploy(d,this.__wbg_ptr,g,p);var i=M().getInt32(d+0,!0),a=M().getInt32(d+4,!0),c=M().getInt32(d+8,!0),l=M().getInt32(d+12,!0),m=i,s=a;if(l)throw m=0,s=0,U(c);return t=m,r=s,R(m,s)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}events(){let n,t;try{const s=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_events(s,this.__wbg_ptr);var r=M().getInt32(s+0,!0),i=M().getInt32(s+4,!0),a=M().getInt32(s+8,!0),c=M().getInt32(s+12,!0),l=r,m=i;if(c)throw l=0,m=0,U(a);return n=l,t=m,R(l,m)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(n,t,1)}}failJob(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),h=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,x=D(r,u.__wbindgen_export,u.__wbindgen_export2),I=E;u.testengine_failJob(p,this.__wbg_ptr,h,b,t,x,I);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),d=c,g=l;if(s)throw d=0,g=0,U(m);return i=d,a=g,R(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}modify(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),h=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,x=D(t,u.__wbindgen_export,u.__wbindgen_export2),I=E,w=D(r,u.__wbindgen_export,u.__wbindgen_export2),j=E;u.testengine_modify(p,this.__wbg_ptr,h,b,x,I,w,j);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),d=c,g=l;if(s)throw d=0,g=0,U(m);return i=d,a=g,R(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}constructor(){const n=u.testengine_new();return this.__wbg_ptr=n,jn.register(this,this.__wbg_ptr,this),this}get now(){return u.testengine_now(this.__wbg_ptr)}reset(){u.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,r;try{const d=u.__wbindgen_add_to_stack_pointer(-16),g=D(n,u.__wbindgen_export,u.__wbindgen_export2),p=E;u.testengine_resolveIncident(d,this.__wbg_ptr,g,p);var i=M().getInt32(d+0,!0),a=M().getInt32(d+4,!0),c=M().getInt32(d+8,!0),l=M().getInt32(d+12,!0),m=i,s=a;if(l)throw m=0,s=0,U(c);return t=m,r=s,R(m,s)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}setVariables(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),h=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,x=D(t,u.__wbindgen_export,u.__wbindgen_export2),I=E;u.testengine_setVariables(p,this.__wbg_ptr,h,b,x,I,r);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),d=c,g=l;if(s)throw d=0,g=0,U(m);return i=d,a=g,R(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}snapshot(){let n,t;try{const s=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_snapshot(s,this.__wbg_ptr);var r=M().getInt32(s+0,!0),i=M().getInt32(s+4,!0),a=M().getInt32(s+8,!0),c=M().getInt32(s+12,!0),l=r,m=i;if(c)throw l=0,m=0,U(a);return n=l,t=m,R(l,m)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(n,t,1)}}throwError(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),h=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,x=D(t,u.__wbindgen_export,u.__wbindgen_export2),I=E,w=D(r,u.__wbindgen_export,u.__wbindgen_export2),j=E;u.testengine_throwError(p,this.__wbg_ptr,h,b,x,I,w,j);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),s=M().getInt32(p+12,!0),d=c,g=l;if(s)throw d=0,g=0,U(m);return i=d,a=g,R(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}tickNow(n){let t,r;try{const d=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_tickNow(d,this.__wbg_ptr,n);var i=M().getInt32(d+0,!0),a=M().getInt32(d+4,!0),c=M().getInt32(d+8,!0),l=M().getInt32(d+12,!0),m=i,s=a;if(l)throw m=0,s=0,U(c);return t=m,r=s,R(m,s)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}unassignUserTask(n){let t,r;try{const d=u.__wbindgen_add_to_stack_pointer(-16),g=D(n,u.__wbindgen_export,u.__wbindgen_export2),p=E;u.testengine_unassignUserTask(d,this.__wbg_ptr,g,p);var i=M().getInt32(d+0,!0),a=M().getInt32(d+4,!0),c=M().getInt32(d+8,!0),l=M().getInt32(d+12,!0),m=i,s=a;if(l)throw m=0,s=0,U(c);return t=m,r=s,R(m,s)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}updateRetries(n,t){let r,i;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),h=E;u.testengine_updateRetries(g,this.__wbg_ptr,p,h,t);var a=M().getInt32(g+0,!0),c=M().getInt32(g+4,!0),l=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),s=a,d=c;if(m)throw s=0,d=0,U(l);return r=s,i=d,R(s,d)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}updateUserTask(n,t){let r,i;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),h=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),x=E;u.testengine_updateUserTask(g,this.__wbg_ptr,p,h,b,x);var a=M().getInt32(g+0,!0),c=M().getInt32(g+4,!0),l=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),s=a,d=c;if(m)throw s=0,d=0,U(l);return r=s,i=d,R(s,d)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}}Symbol.dispose&&(rn.prototype[Symbol.dispose]=rn.prototype.free);function lr(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(n,t){throw new Error(R(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const r=R(n,t);return dr(r)},__wbindgen_object_drop_ref:function(n){U(n)}}}}const jn=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>u.__wbg_testengine_free(e,1));function dr(e){ke===he.length&&he.push(he.length+1);const n=ke;return ke=he[n],he[n]=e,n}function ur(e){e<1028||(he[e]=ke,ke=e)}let we=null;function M(){return(we===null||we.buffer.detached===!0||we.buffer.detached===void 0&&we.buffer!==u.memory.buffer)&&(we=new DataView(u.memory.buffer)),we}function R(e,n){return gr(e>>>0,n)}let Te=null;function Fe(){return(Te===null||Te.byteLength===0)&&(Te=new Uint8Array(u.memory.buffer)),Te}function mr(e){return he[e]}let he=new Array(1024).fill(void 0);he.push(void 0,null,!0,!1);let ke=he.length;function D(e,n,t){if(t===void 0){const l=je.encode(e),m=n(l.length,1)>>>0;return Fe().subarray(m,m+l.length).set(l),E=l.length,m}let r=e.length,i=n(r,1)>>>0;const a=Fe();let c=0;for(;c<r;c++){const l=e.charCodeAt(c);if(l>127)break;a[i+c]=l}if(c!==r){c!==0&&(e=e.slice(c)),i=t(i,r,r=c+e.length*3,1)>>>0;const l=Fe().subarray(i+c,i+r),m=je.encodeInto(e,l);c+=m.written,i=t(i,r,c,1)>>>0}return E=c,i}function U(e){const n=mr(e);return ur(e),n}let Ye=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ye.decode();const pr=2146435072;let Ze=0;function gr(e,n){return Ze+=n,Ze>=pr&&(Ye=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Ye.decode(),Ze=n),Ye.decode(Fe().subarray(e,e+n))}const je=new TextEncoder;"encodeInto"in je||(je.encodeInto=function(e,n){const t=je.encode(e);return n.set(t),{read:e.length,written:t.length}});let E=0,u;function hr(e,n){return u=e.exports,we=null,Te=null,u}async function br(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(i){if(e.ok&&t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}else{const r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function t(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function fr(e){if(u!==void 0)return u;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/pr-preview/pr-73/assets/nanobpmn_engine_bg-CIG0GEWz.wasm",import.meta.url));const n=lr();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await br(await e,n);return hr(t)}let Be=null;function yr(e){return Be||(Be=fr(void 0).then(()=>{}).catch(n=>{throw Be=null,n})),Be}function G(e){return JSON.parse(e)}class Mr{constructor(n){H(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return G(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,r,i){return JSON.parse(this.engine.activateJobs(n,t,r,i))}completeJob(n,t){return G(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:r,...i}=t??{};return G(this.engine.completeAgentJob(n,JSON.stringify(r??{}),JSON.stringify(i??{})))}failJob(n,t,r){return G(this.engine.failJob(n,t,r))}throwError(n,t,r){return G(this.engine.throwError(n,t,r))}updateRetries(n,t){return G(this.engine.updateRetries(n,t))}resolveIncident(n){return G(this.engine.resolveIncident(n))}setVariables(n,t,r){return G(this.engine.setVariables(n,t||"{}",r))}broadcastSignal(n,t){return G(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return G(this.engine.cancelInstance(n))}modify(n,t,r){return G(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(r??[])))}completeUserTask(n,t){return G(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,r){return G(this.engine.assignUserTask(n,t,r))}unassignUserTask(n){return G(this.engine.unassignUserTask(n))}updateUserTask(n,t){return G(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,r){return G(this.engine.correlateMessage(n,t,r||"{}"))}advanceTime(n){return G(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return G(this.engine.snapshot())}free(){this.engine.free()}}async function wr(e){return await yr(),new Mr(new rn)}class Hn extends Error{constructor(t,r){super(t);H(this,"retries");this.name="JobFailure",this.retries=r==null?void 0:r.retries}}function _r(e,n=[]){if(e.instances.filter(i=>!i.completed).length===0)return e.totalInstances>0?"completed":"idle";if(e.incidents.length>0)return"incidents";const r=new Set(n);return e.jobs.some(i=>!r.has(i.jobType))?"unhandledJobs":e.userTasks.some(i=>i.state==="Created")?"userTasks":e.timers.length>0?"timers":e.messageSubscriptions.length>0?"messages":e.signalSubscriptions.length>0?"signals":"idle"}function xr(e,n=[]){const t=new Set(n);return[...new Set(e.jobs.map(r=>r.jobType))].filter(r=>!t.has(r)).sort()}async function Nr(e,n,t){let r;try{const i=await n(t);r=JSON.stringify(i??{})}catch(i){const a=i instanceof Hn&&i.retries!==void 0?i.retries:Math.max(0,t.retries-1),c=i instanceof Error?i.message:String(i);e.failJob(t.key,a,c);return}e.completeJob(t.key,r)}async function vr(e,n,t){let r;try{r=await n(t),JSON.stringify(r)}catch(i){const a=i instanceof Hn&&i.retries!==void 0?i.retries:Math.max(0,t.retries-1),c=i instanceof Error?i.message:String(i);e.failJob(t.key,a,c);return}e.completeAgentJob(t.key,r)}async function Ir(e,n,t={}){const r=t.maxJobsPerActivation??10,i=t.lockTimeoutMs??3e4,a=t.worker??"bojtos",c=t.agents??{};for(const p of Object.keys(c))if(p in n)throw new Error(`dispatchRound: job type "${p}" is registered as both a worker and an agent — register it as exactly one`);const l=[];for(const[p,h]of Object.entries(n))for(const b of e.activateJobs(p,r,i,a))l.push({handler:h,job:b});const m=[];for(const[p,h]of Object.entries(c))for(const b of e.activateJobs(p,r,i,a))m.push({handler:h,job:b});for(const{handler:p,job:h}of l)await Nr(e,p,h);for(const{handler:p,job:h}of m)await vr(e,p,h);const s=e.snapshot(),d=l.length+m.length;if(d>0)return{snapshot:s,handled:d};const g=[...Object.keys(n),...Object.keys(c)];return{snapshot:s,handled:d,reason:_r(s,g),unhandled:xr(s,g)}}function Tr({bpmn:e}){const n=f.useRef(null),[t,r]=f.useState("loading"),[i,a]=f.useState(null),[c,l]=f.useState([]),[m,s]=f.useState(null),d=f.useRef(e),g=f.useRef(0),p=f.useCallback((v,T)=>{const k=v.deploy(T);return d.current=T,l(k.processIds),s(null),a(null),k.processIds},[]);f.useEffect(()=>{let v=!1;return r("loading"),l([]),s(null),a(null),wr().then(T=>{if(v){T.free();return}try{p(T,e)}catch(k){T.free(),a(String(k)),r("error");return}n.current=T,r("ready")}).catch(T=>{v||(a(String(T)),r("error"))}),()=>{var T;v=!0,(T=n.current)==null||T.free(),n.current=null}},[e]);const h=f.useCallback(v=>{const T=n.current;if(!T)return null;try{const k=v(T);return s(k),a(null),k}catch(k){return a(String(k)),null}},[]),b=f.useCallback((v,T)=>h(k=>k.createInstance(v,T)),[h]),x=f.useCallback((v,T)=>h(k=>k.completeUserTask(v,T)),[h]),I=f.useCallback(v=>h(T=>T.advanceTime(v)),[h]);function w(v,T){const[k]=v.activateJobs(T,1,3e4,"manual-control");if(!k)throw new Error(`No waiting job of type "${T}" to resolve.`);return k}const j=f.useCallback((v,T)=>h(k=>{const z=w(k,v);return k.completeJob(z.key,T)}),[h]),O=f.useCallback((v,T,k)=>h(z=>{const A=w(z,v);return z.throwError(A.key,T,k)}),[h]),X=f.useCallback(async(v,T)=>{const k=n.current;if(!k)return null;const z=g.current;try{const A=await Ir(k,v,T);return n.current!==k||g.current!==z?null:(s(A.snapshot),a(null),A)}catch(A){return n.current!==k||g.current!==z||(s(k.snapshot()),a(String(A))),null}},[]),J=f.useCallback(()=>{const v=n.current;if(v){g.current++;try{v.reset(),p(v,d.current)}catch(T){a(String(T))}}},[p]),K=f.useCallback(v=>{const T=n.current;if(!T)return null;g.current++;try{return T.reset(),p(T,v)}catch(k){return a(String(k)),null}},[p]);return{phase:t,error:i,processIds:c,snapshot:m,createInstance:b,stepWorkers:X,completeUserTask:x,advanceTime:I,completeJobManually:j,throwJobError:O,reset:J,redeploy:K}}function kr(e,n){return e.slice(n)}function jr(e,n,t,r){const i=e.snapshot,a="⏸ waiting for a human — complete the task below to continue",c=i.userTasks.some(l=>l.state==="Created");if(e.handled>0){const l=i.activeElementIds.map(t),m=n.length?` via ${n.map(s=>`${t(s.from)} → ${t(s.to)}`).join(", ")}`:"";return i.completedInstances>=1?{kind:"done",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${m} — ✅ process instance completed`}:c?{kind:"human",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${m} — ${a}`}:{kind:"step",text:`⏭ round handled ${e.handled} job${e.handled===1?"":"s"}${m} — now at ${l.length?l.join(", "):"—"}`}}switch(e.reason){case"completed":return{kind:"done",text:"✅ process instance completed"};case"userTasks":return{kind:"human",text:a};case"timers":return{kind:"step",text:"⏱ waiting on a timer — advance the clock to continue"};case"messages":return{kind:"step",text:"✉ waiting on a message — correlate it to continue"};case"signals":return{kind:"step",text:"📶 waiting on a signal — broadcast it to continue"};case"incidents":return{kind:"error",text:"A job failed — incident on the diagram"};case"unhandledJobs":{const l=e.unhandled??[];return r&&l.length>0&&l.every(m=>r.has(m))?{kind:"human",text:a}:{kind:"error",text:`⏭ waiting on job type(s) with no worker registered: ${l.join(", ")}`}}case"idle":return{kind:"step",text:"Nothing to step — no instance is running."};default:return{kind:"step",text:e.reason?`Step blocked on an unrecognized reason: ${e.reason}`:"Nothing to step — no instance is running."}}}const Er=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function Vn(e){return on.get(e)??{}}const on=new Map;async function Dr(){if(on.size>0)return;const{prebuiltAppConfig:e}=await ee(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)on.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const $e=Er.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...Vn(e.id)})),Zn=$e[0].id;async function Sr(){return await Dr(),$e.map(e=>({...e,...Vn(e.id)}))}async function Ar(){return await ln()===null}async function ln(){const e=navigator.gpu;if(!e)return"This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick the Scripted or Endpoint brain.";let n;try{n=await e.requestAdapter()}catch(t){return`WebGPU adapter request failed (${t instanceof Error?t.message:String(t)}). Try the Scripted or Endpoint brain instead.`}return n?null:"This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick the Scripted or Endpoint brain instead."}function qn(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function Lr(e,n=qn()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function Cr(e){try{const{hasModelInCache:n}=await ee(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function sn(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function En(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class Re{constructor(){H(this,"kind","browser");H(this,"model",null);H(this,"engine",null);H(this,"worker",null);H(this,"generation",0);H(this,"chat",async(n,t=512,r)=>{var a,c;const i=this.engine;if(!i||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const l=await i.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let m="";for await(const s of l){const d=((c=(a=s.choices[0])==null?void 0:a.delta)==null?void 0:c.content)??"";d&&(m+=d,r==null||r(d))}return m}catch(l){const m=l instanceof Error?l.message:String(l);throw sn(m)?(this.teardown(),new Error(`The in-browser model stopped: ${En()}`)):l}})}async connect(n=Zn,t){var m,s;const r=await ln();if(r)throw new Error(r);if(this.engine&&this.model===n)return n;const i=++this.generation,a=d=>{i===this.generation&&(t==null||t({progress:d.progress??0,text:d.text??""}))};this.teardown();let c,l;try{const{CreateWebWorkerMLCEngine:d}=await ee(async()=>{const{CreateWebWorkerMLCEngine:g}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:g}},[]);l=new Worker(new URL("/pr-preview/pr-73/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),c=await d(l,n,{initProgressCallback:a})}catch(d){if(l==null||l.terminate(),i!==this.generation)throw new Error("cancelled");const g=d instanceof Error?d.message:String(d);if(sn(g))throw new Error(`Couldn't load ${n} in the browser (${g}). ${En()}`);const p=(s=(m=$e.find(h=>h.id===n))==null?void 0:m.requiredFeatures)==null?void 0:s.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${g}). `+(p?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(i!==this.generation)throw c.unload().catch(()=>{}),l==null||l.terminate(),new Error("cancelled");return this.engine=c,this.worker=l??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const Wn="http://localhost:11434/v1";function Kn(){var n;const e=((n=globalThis.location)==null?void 0:n.hostname)??"";return e==="localhost"||e==="127.0.0.1"||e==="[::1]"||e==="::1"}function dn(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(r=>(r=globalThis.location)==null?void 0:r.origin)()??""}){let i;try{i=new URL(Xn(e)).hostname}catch{return null}const a=c=>c==="localhost"||c==="127.0.0.1"||c==="::1"||c==="[::1]";return!a(i)||a(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function Xn(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class Dn extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class zr{constructor(n=Wn,t="",r=""){H(this,"kind","endpoint");H(this,"baseUrl");H(this,"model",null);H(this,"models",[]);H(this,"apiKey");H(this,"requestedModel");H(this,"chat",async(n,t=512,r)=>{var s,d,g;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const i=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!i.ok||!i.body){const p=await i.text().catch(()=>"");throw new Error(`chat/completions HTTP ${i.status} ${i.statusText}${p?` — ${p.slice(0,300)}`:""}`)}const a=i.body.getReader(),c=new TextDecoder;let l="",m="";for(;;){const{value:p,done:h}=await a.read();if(h)break;l+=c.decode(p,{stream:!0});let b;for(;(b=l.indexOf(`
`))>=0;){const x=l.slice(0,b).trim();if(l=l.slice(b+1),!x.startsWith("data:"))continue;const I=x.slice(5).trim();if(I==="[DONE]")continue;let w;try{w=JSON.parse(I)}catch{continue}w.model&&(this.model=w.model);const j=(s=w.choices)==null?void 0:s[0],O=((d=j==null?void 0:j.delta)==null?void 0:d.content)??((g=j==null?void 0:j.message)==null?void 0:g.content)??"";O&&(m+=O,r==null||r(O))}}return m});this.baseUrl=Xn(n),this.apiKey=t.trim(),this.requestedModel=r.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(r){const i=dn(this.baseUrl);throw new Error(i??`Can't reach ${this.baseUrl} (${r instanceof Error?r.message:String(r)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new Dn(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(r=>r.id).filter(r=>!!r),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof Dn&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(r=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${r instanceof Error?r.message:String(r)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const r=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${r?` — ${r.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}async function Pr(){return await Ar()?"browser":Kn()?"endpoint":"scripted"}function Or(){const[e,n]=f.useState("scripted"),t=f.useRef(!1),[r,i]=f.useState("idle"),[a,c]=f.useState(null),[l,m]=f.useState(null),[s,d]=f.useState(null),[g,p]=f.useState(null),[h,b]=f.useState(null),[x,I]=f.useState(null),[w,j]=f.useState(Zn),[O,X]=f.useState(Wn),[J,K]=f.useState(""),[v,T]=f.useState(""),[k,z]=f.useState(null),A=f.useRef(null),se=f.useCallback(P=>async(...B)=>{try{return await P.chat(...B)}catch(q){const Ee=q instanceof Error?q.message:String(q);throw P instanceof Re&&sn(Ee)&&(z(null),m(null),i("error"),c(Ee)),q}},[]);f.useEffect(()=>{ln().then(P=>{b(P),p(P===null),t.current||(t.current=!0,Pr().then(n))})},[]),f.useEffect(()=>{let P=!1;return I(null),Cr(w).then(B=>{P||I(B)}),()=>{P=!0}},[w]),f.useEffect(()=>()=>{var P;return(P=A.current)==null?void 0:P.dispose()},[]);const ye=f.useCallback(P=>{n(P),i("idle"),c(null),m(null),d(null),z(null)},[]),S=f.useCallback(()=>{var P;(P=A.current)==null||P.dispose(),A.current=null,z(null),m(null)},[]),ne=f.useCallback(()=>{A.current instanceof Re&&A.current.cancelConnect(),S(),i("idle"),d(null),c(null)},[S]),Ne=f.useCallback(async()=>{var P;if(e==="scripted"){z(null),i("ready");return}if(e==="endpoint"){const B=dn(O);if(B){S(),c(B),i("error");return}}i("connecting"),c(null),d(null);try{if(e==="browser"){const B=A.current instanceof Re?A.current:new Re;A.current&&A.current!==B&&A.current.dispose(),A.current=B;const q=await B.connect(w,d);m(q),z(()=>se(B)),I(!0)}else{(P=A.current)==null||P.dispose();const B=new zr(O,v,J);A.current=B;const q=await B.connect();m(q),z(()=>se(B))}i("ready")}catch(B){const q=B instanceof Error?B.message:String(B);if(q==="cancelled")return;c(q),i("error"),z(null)}finally{d(null)}},[e,w,O,J,v,S,se]);return{kind:e,setKind:ye,status:r,error:a,modelInUse:l,progress:s,webgpu:g,webgpuReason:h,browserModelCached:x,cancelConnect:ne,browserModel:w,setBrowserModel:j,endpointUrl:O,setEndpointUrl:X,endpointModel:J,setEndpointModel:K,apiKey:v,setApiKey:T,connect:Ne,chat:k}}const an="#s=",Br=["scripted","browser","endpoint"];function Rr(e){return typeof e=="string"&&Br.includes(e)}function Ur(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,r={};return Rr(t.brain)&&(r.brain=t.brain),r}}catch{}return{}}function et(e=location.hash){if(!e.startsWith(an))return{};let n;try{n=decodeURIComponent(e.slice(an.length))}catch{return{}}return Ur(n)}function Fr(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":an+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function Yr(e){const n={...et(),...e},t=Fr(n),r=new URL(location.href);r.hash=t,history.replaceState(history.state,"",r)}const Sn=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server. Ollama by default. Local pages only."}];function Qr({brain:e}){const n=Sn.find(s=>s.kind===e.kind),t=dn(e.endpointUrl),r=Kn(),[i,a]=f.useState($e);f.useEffect(()=>{Sr().then(a)},[]);const c=i.find(s=>s.id===e.browserModel),l=c?Lr(c,qn()):null,m=e.webgpu===!0?"browser":r&&e.webgpu===!1?"endpoint":null;return o.jsxs("div",{className:"brain",children:[o.jsxs("div",{className:"brain-kinds",children:[Sn.map(s=>o.jsxs(V,{size:"sm",variant:e.kind===s.kind?"default":"secondary",onClick:()=>e.setKind(s.kind),children:[s.label,s.kind===m&&o.jsx(Z,{variant:"info",className:"brain-recommended-badge",children:"recommended"})]},s.kind)),e.status==="ready"&&e.kind!=="scripted"&&o.jsx(Z,{variant:"success",children:e.modelInUse??"connected"}),e.status==="connecting"&&o.jsx(Z,{variant:"info",children:"connecting…"}),e.status==="error"&&o.jsx(Z,{variant:"danger",children:"not connected"})]}),o.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&o.jsxs("div",{className:"brain-config",children:[o.jsxs("div",{className:"field",children:[o.jsx(ze,{htmlFor:"browser-model",children:"Model"}),o.jsxs(gt,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[o.jsx(ht,{id:"browser-model",children:o.jsx(bt,{})}),o.jsx(ft,{children:i.map(s=>o.jsx(yt,{value:s.id,children:s.label},s.id))})]}),e.browserModelCached===!0&&o.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&o.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&o.jsxs(me,{variant:"destructive",children:[o.jsx(pe,{children:"No WebGPU in this browser"}),o.jsx(ge,{children:e.webgpuReason})]}),e.webgpu!==!1&&l&&o.jsxs(me,{variant:"destructive",children:[o.jsx(pe,{children:"This model may not fit in GPU memory"}),o.jsx(ge,{children:l})]})]}),e.kind==="endpoint"&&o.jsxs("div",{className:"brain-config",children:[o.jsxs("div",{className:"field",children:[o.jsx(ze,{htmlFor:"endpoint-url",children:"Endpoint"}),o.jsx(Ve,{id:"endpoint-url",value:e.endpointUrl,onChange:s=>e.setEndpointUrl(s.target.value),disabled:e.status==="connecting"}),o.jsxs("p",{className:"field-hint",children:["Ollama allows ",o.jsx("code",{children:"localhost"})," origins out of the box; set"," ",o.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}),t&&o.jsxs(me,{variant:"destructive",children:[o.jsx(pe,{children:"A local server won't work from this URL"}),o.jsx(ge,{children:t})]})]}),o.jsxs("div",{className:"field",children:[o.jsx(ze,{htmlFor:"endpoint-model",children:"Model (blank = first served)"}),o.jsx(Ve,{id:"endpoint-model",placeholder:"llama3.2:3b",value:e.endpointModel,onChange:s=>e.setEndpointModel(s.target.value),disabled:e.status==="connecting"})]}),o.jsxs("div",{className:"field",children:[o.jsx(ze,{htmlFor:"endpoint-key",children:"API key (optional)"}),o.jsx(Ve,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:s=>e.setApiKey(s.target.value),disabled:e.status==="connecting"})]})]}),e.kind!=="scripted"&&o.jsxs("div",{className:"brain-actions",children:[o.jsx(V,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting",children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&e.kind==="browser"&&o.jsx(V,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&o.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.error&&o.jsxs(me,{variant:"destructive",children:[o.jsx(pe,{children:"Couldn't connect"}),o.jsx(ge,{children:e.error})]})]})}function nt(e){return typeof e=="object"&&e!==null}function uo(e){const n=new Set,t=r=>{nt(r)&&(typeof r.key=="string"&&n.add(r.key),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function $r(e){const n={},t=r=>{nt(r)&&(typeof r.key=="string"&&"defaultValue"in r&&(n[r.key]=r.defaultValue??""),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function Gr(e){return e.entries!==void 0}function Jr(e){const n=[];let t=null;for(const r of e)r.turn!==void 0?t&&t.turn===r.turn?t.entries.push(r):(t={turn:r.turn,entries:[r]},n.push(t)):(t=null,n.push(r));return n}function An(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Hr({activation:e,result:n,labelFor:t}){const r=e.elementId??"";return o.jsxs("div",{className:"timeline-tool",children:[o.jsxs("div",{className:"timeline-tool-head",children:[o.jsx(Z,{variant:"info",children:"tool"}),o.jsx("strong",{children:t(r)||r}),o.jsx("code",{children:r})]}),e.args!==void 0&&Object.keys(e.args).length>0&&o.jsxs("div",{className:"timeline-kv",children:[o.jsx("span",{className:"timeline-kv-label",children:"arguments"}),o.jsx("code",{children:An(e.args)})]}),o.jsxs("div",{className:"timeline-kv",children:[o.jsx("span",{className:"timeline-kv-label",children:"returned"}),o.jsx("code",{children:n?An(n.result):"— waiting for the job to complete —"})]})]})}function Vr({group:e,labelFor:n}){const t=e.entries.find(s=>s.kind==="llm"),r=e.entries.filter(s=>s.kind==="agent"&&s.elementId),i=e.entries.filter(s=>s.kind==="vars"&&s.elementId),a=e.entries.filter(s=>s.kind==="agent"&&!s.elementId),c=e.entries.filter(s=>s.kind==="error"),l=new Set(r.map(s=>s.elementId)),m=e.entries.filter(s=>s.kind==="tool"||s.kind==="vars"&&s.elementId&&!l.has(s.elementId)).sort((s,d)=>s.id-d.id);return o.jsxs("div",{className:"timeline-turn",children:[o.jsxs("div",{className:"timeline-turn-head",children:[o.jsxs(Z,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&o.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&o.jsx("blockquote",{className:"timeline-reply",children:t.text}),a.map(s=>o.jsx("div",{className:"timeline-note",children:s.text},s.id)),r.map(s=>o.jsx(Hr,{activation:s,result:i.find(d=>d.elementId===s.elementId),labelFor:n},s.id)),m.map(s=>o.jsxs("div",{className:`log-line log-${s.kind}`,children:[s.pending?"⏳ ":"",s.text]},s.id)),c.map(s=>o.jsxs("div",{className:"timeline-error",children:["⚠ ",s.text]},s.id))]})}function Zr({log:e,elementStats:n=[],incidents:t=[],labelFor:r=i=>i}){const i=f.useMemo(()=>Jr(e),[e]),[a,c]=f.useState(!1),l=f.useRef(null);f.useEffect(()=>{const s=l.current;s&&(s.scrollTop=s.scrollHeight)},[i]);const m=()=>{var g;const s={log:e.map(({id:p,...h})=>h),elementStats:n,incidents:t},d=JSON.stringify(s,null,2);(g=navigator.clipboard)!=null&&g.writeText&&navigator.clipboard.writeText(d).then(()=>{c(!0),setTimeout(()=>c(!1),1500)}).catch(()=>{})};return o.jsxs(ae,{className:"panel grow",children:[o.jsxs(ce,{children:[o.jsx(le,{children:"Activity"}),o.jsx(de,{children:"Agent turns, model replies, and tool calls — read top to bottom as a story."})]}),o.jsxs(ue,{children:[o.jsx("div",{className:"timeline-toolbar",children:o.jsx(V,{variant:"secondary",size:"sm",onClick:m,children:a?"Copied!":"Copy run as JSON"})}),o.jsx("div",{className:"timeline",ref:l,children:i.length===0?o.jsx("div",{className:"log-empty",children:"Press Run or Step to start."}):i.map(s=>Gr(s)?o.jsx(Vr,{group:s,labelFor:r},`turn-${s.turn}-${s.entries[0].id}`):o.jsxs("div",{className:`log-line log-${s.kind}`,children:[s.pending?"⏳ ":"",s.text]},s.id))}),(n.length>0||t.length>0)&&o.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&o.jsxs("div",{className:"timeline-stats",children:[o.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),o.jsx("ul",{children:n.filter(s=>s.completed>0||(s.active??0)>0).map(s=>o.jsxs("li",{children:[o.jsx("code",{children:r(s.elementId)||s.elementId})," ","completed ",s.completed,s.active?`, ${s.active} active`:""]},s.elementId))})]}),t.length>0&&o.jsxs("div",{className:"timeline-incidents",children:[o.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),o.jsx("ul",{children:t.map((s,d)=>o.jsxs("li",{children:[o.jsx("code",{children:r(s.elementId)||s.elementId})," —"," ",s.reason]},`${s.elementId}-${d}`))})]})]})]})]})}const fe={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function Ln(e){return`[data-tour="${e}"]`}function qr(e=location.search){return new URLSearchParams(e).get("tour")}function Wr(e,n){var t;return((t=e.elementStats.find(r=>r.elementId===n))==null?void 0:t.completed)??0}function Kr(e,n){return!e||e.kind==="click"||!n?!1:e.kind==="activeElement"?n.activeElementIds.includes(e.elementId):Wr(n,e.elementId)>=(e.atLeast??1)}function Xr(e){return"anchor"in e?Ln(e.anchor):`${Ln(fe.diagram)} [data-element-id="${ei(e.elementId)}"]`}function ei(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function ni(e){return e.map(n=>{const t=!!n.waitFor&&n.waitFor.kind!=="click";return{element:Xr(n.target),popover:{title:n.title,description:t?`${n.description} (continues automatically once you reach that point — or use Next to skip ahead)`:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}})}async function ti(e,n={}){var a;const[{driver:t}]=await Promise.all([ee(()=>import("./driver.js-bj_ppY-Q.js"),[]),ee(()=>Promise.resolve({}),__vite__mapDeps([0]))]),r=ni(e),i=t({steps:r,showProgress:!0,allowClose:!0,skipMissingElement:!0,onHighlighted:(c,l,{index:m})=>{var s;m!==void 0&&((s=n.onIndexChange)==null||s.call(n,m))},onDestroyed:()=>{var c;(c=n.onDestroyed)==null||c.call(n)}});return i.drive(),(a=n.onIndexChange)==null||a.call(n,i.getActiveIndex()??0),{moveNext:()=>i.moveNext(),activeIndex:()=>i.getActiveIndex()??-1,destroy:()=>i.destroy()}}const ri=300;function ii(e,n){const[t,r]=f.useState(!1),i=f.useRef(null),a=f.useRef(0),c=f.useRef(-1),l=f.useRef(null),m=f.useRef(n);f.useEffect(()=>{m.current=n},[n]);const s=f.useCallback(()=>{l.current!==null&&(clearInterval(l.current),l.current=null)},[]),d=f.useRef(0),g=f.useCallback(()=>{var h;d.current+=1,s(),(h=i.current)==null||h.destroy(),i.current=null,r(!1)},[s]),p=f.useCallback(()=>{if(!e||e.steps.length===0||i.current)return;const h=d.current+=1;ti(e.steps,{onIndexChange:b=>{a.current=b},onDestroyed:()=>{s(),i.current=null,r(!1)}}).then(b=>{if(h!==d.current){b.destroy();return}i.current=b,r(!0),l.current=setInterval(()=>{const x=a.current;if(x===c.current)return;const I=e.steps[x];I&&Kr(I.waitFor,m.current())&&(c.current=x,b.moveNext())},ri)})},[e,s]);return f.useEffect(()=>g,[g]),{active:t,start:p,stop:g}}const qe=650,We="__agent__",Cn="__model__",zn="__template__:",oi=f.lazy(async()=>{await Promise.all([ee(()=>Promise.resolve({}),__vite__mapDeps([1])),ee(()=>Promise.resolve({}),__vite__mapDeps([2]))]);const{RuntimeDiagram:e}=await ee(async()=>{const{RuntimeDiagram:n}=await import("./RuntimeDiagram-Dp98hqau.js");return{RuntimeDiagram:n}},__vite__mapDeps([3,4,5]));return{default:e}}),Ke=f.lazy(()=>ee(()=>import("./MonacoEditor-Dyua7Fuq.js").then(e=>e.M),__vite__mapDeps([6,4,7]))),si=f.lazy(()=>ee(()=>import("./vendor-modeler-DPqq0Y-9.js"),__vite__mapDeps([8,4,5,9,10,11,12,1,2]))),Pn=f.lazy(async()=>{const{FormRenderer:e}=await ee(async()=>{const{FormRenderer:n}=await import("./FormRenderer-C-zHccvD.js");return{FormRenderer:n}},__vite__mapDeps([13,4,11,9,10,14]));return{default:e}});function Xe(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function ai({example:e,initialBrainKind:n,initialTourId:t}){var hn,bn,fn,yn,Mn,wn,_n,xn;const[r,i]=f.useState(e.bpmn),a=Or();f.useEffect(()=>{n&&n!==a.kind&&a.setKind(n)},[]),f.useEffect(()=>{Yr({brain:a.kind})},[a.kind]);const[c,l]=f.useState(()=>Object.fromEntries(e.handlers.map(y=>[y.elementId,y.source]))),[m,s]=f.useState(e.scriptedAgent??""),[d,g]=f.useState(()=>Qe(e.templates)),p=f.useMemo(()=>Xt(e,c,r,d),[e,c,r,d]),h=p.model,b=Tr({bpmn:p.resolvedBpmn}),x=ii(e.tour,()=>b.snapshot);f.useEffect(()=>{var y;t&&((y=e.tour)==null?void 0:y.id)===t&&x.start()},[]);const I=h.startFormId?((hn=e.forms)==null?void 0:hn[h.startFormId])??null:null,[w,j]=f.useState(()=>({...e.seed,...I?$r(I):{}})),[O,X]=f.useState(h.agent?We:((bn=e.handlers[0])==null?void 0:bn.elementId)??""),[J,K]=f.useState(!1),[v,T]=f.useState(!1),[k,z]=f.useState(null),[A,se]=f.useState([]),[ye,S]=f.useState({}),[ne,Ne]=f.useState(!1),P=f.useRef(null),[B,q]=f.useState({}),[Ee,tt]=f.useState(!1),Ge=f.useRef(null),te=f.useRef(!1),ve=f.useRef(0),rt=f.useRef(0),Je=f.useRef({current:void 0}),De=f.useRef({}),Se=f.useRef({}),He=f.useMemo(()=>{const y=new Map;for(const _ of h.processes){for(const N of _.tasks)y.set(N.elementId,N.label);for(const N of _.agents){y.set(N.elementId,N.label);for(const L of N.tools)y.set(L.elementId,L.label)}for(const N of _.userTasks)y.set(N.elementId,N.label)}return _=>y.get(_)??_},[h]),Q=f.useCallback(y=>{se(_=>{if(y.key){const N=_.findIndex(L=>L.key===y.key);if(N>=0){const L=[..._];return L[N]={...L[N],...y},L}}return[..._,{...y,id:rt.current++}].slice(-80)})},[]),be=f.useMemo(()=>{var y;return((y=b.snapshot)==null?void 0:y.userTasks.find(_=>_.state==="Created"))??null},[b.snapshot]),xe=f.useMemo(()=>{const y=h.processes.flatMap(N=>N.tasks),_=new Map;for(const N of e.handlers){if(!N.manualControl)continue;const L=y.find(C=>C.elementId===N.elementId);L&&_.set(L.jobType,{...N.manualControl,elementId:N.elementId})}return _},[e.handlers,h]),Me=f.useMemo(()=>{if(!b.snapshot)return null;for(const y of b.snapshot.jobs){const _=xe.get(y.jobType);if(_&&y.state==="Created")return{job:y,control:_}}return null},[b.snapshot,xe]),mn=f.useMemo(()=>{if(!h.agent||!b.snapshot)return[];const y=new Map(b.snapshot.elementStats.map(_=>[_.elementId,_.completed]));return h.agent.tools.filter(_=>(y.get(_.elementId)??0)===0)},[h.agent,b.snapshot]),re=be?h.userTasks.find(y=>y.elementId===be.elementId):void 0,Ae=re!=null&&re.formId?((fn=e.forms)==null?void 0:fn[re.formId])??null:null,Le=f.useCallback(async(y,_,N,L)=>{var ie;let C=N,W=0;for(;ve.current===L&&C&&C.completedInstances<1&&W++<80;){const F=await b.stepWorkers(y,{agents:_});if(ve.current!==L)return C;C=(F==null?void 0:F.snapshot)??C;const $=(ie=C.instances[0])==null?void 0:ie.variables;if($&&S({...$}),C.userTasks.some(Y=>Y.state==="Created")){Q({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!F){Q({kind:"error",text:"▶ run stopped — no dispatch round was returned"});break}if(F.handled===0)break;await new Promise(Y=>setTimeout(Y,qe))}return C&&C.completedInstances>=1?Q({kind:"done",text:"✅ process instance completed"}):C&&C.incidentElementIds.length>0&&Q({kind:"error",text:"A job failed — incident on the diagram"}),C},[b,Q]),pn=f.useCallback(async y=>{var C,W,ie;if(!Me||te.current)return;const{job:_,control:N}=Me,L=++ve.current;te.current=!0,K(!0);try{let F,$;if(y==="complete")F=b.completeJobManually(_.jobType,"{}"),$="  ↳ completed normally";else if(N.action.kind==="timer"){const Y=((W=(C=b.snapshot)==null?void 0:C.timers[0])==null?void 0:W.dueInMs)??0;F=b.advanceTime(Math.max(Y,0)+1),$="  ↳ advanced the clock — timer fired"}else{const{errorCode:Y,message:oe}=N.action;F=b.throwJobError(_.jobType,Y,oe),$=`  ↳ threw BPMN error ${Y}: ${oe}`}if(F){Q({kind:"vars",text:$,elementId:_.elementId});const Y=(ie=F.instances[0])==null?void 0:ie.variables;Y&&S({...Y}),await new Promise(oe=>setTimeout(oe,qe)),await Le(De.current,Se.current,F,L)}else Q({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:_.elementId})}finally{te.current=!1,K(!1)}},[Me,b,Q,Le]),Ce=f.useCallback(async()=>{let y=null;try{h.agent&&m.trim()&&(y=Ft(m))}catch(F){return z(F instanceof Error?F.message:String(F)),null}Je.current={current:void 0};const _=$t(h,p.handlers,Q,Je.current);for(const F of xe.keys())delete _[F];const N={};if(h.agents.length>0){if(a.kind!=="scripted"&&a.chat){const $=new Map;for(const Y of h.agents)$.set(Y.jobType,[...$.get(Y.jobType)??[],Y]);for(const[Y,oe]of $)N[Y]=cr(oe,a.chat,Q,{turnRef:Je.current,requiredTools:e.requiredTools})}else if(y&&h.agent){const $=h.agent.elementId;N[h.agent.jobType]=async Y=>{if(Y.elementId!==$)throw new Error(`No scripted agent handler for "${Y.elementId}" — only "${$}" (the primary process's first agent host) is driven by the scripted brain. Use a live brain to exercise more than one host.`);const oe=await y(Y),lt=(oe.activateElements??[]).map(dt=>dt.elementId).join(", ");return Q({kind:"agent",text:oe.completionConditionFulfilled?"🤖 scripted agent: done":`🤖 scripted agent: calling ${lt||"(nothing)"}`}),oe}}}se([]),q({});const L={...e.seed,...w};S(L),De.current=_,Se.current=N;const C=b.redeploy(r),W=(C==null?void 0:C[0])??h.processId;Q({kind:"start",text:`Starting "${W}" — ${h.agent?a.kind==="scripted"||!a.chat?"scripted brain":`live brain (${a.modelInUse??a.kind})`:"no agent in this model"}`});const ie=b.createInstance(W,JSON.stringify(L));return{workers:_,agents:N,snap:ie}},[b,e,p,r,m,w,h,a,Q,xe]),Ie=!!b.snapshot&&b.snapshot.completedInstances<1,gn=!Ie&&!!I&&!ne,it=f.useCallback(async()=>{if(!(b.phase!=="ready"||te.current||v||p.hasErrors)){te.current=!0,K(!0);try{let y=De.current,_=Se.current,N=b.snapshot;const L=++ve.current;if(!Ie){if(P.current&&!P.current.validate())return;z(null);const C=await Ce();if(!C)return;y=C.workers,_=C.agents,N=C.snap,await new Promise(W=>setTimeout(W,qe))}await Le(y,_,N,L)}finally{te.current=!1,K(!1)}}},[b,v,p.hasErrors,Ie,Ce,Le]),ot=f.useCallback(async()=>{var y;if(!(b.phase!=="ready"||te.current||v||p.hasErrors)){te.current=!0,T(!0);try{let _=De.current,N=Se.current,L=b.snapshot;if(!Ie){if(P.current&&!P.current.validate())return;z(null);const $=await Ce();if(!$)return;_=$.workers,N=$.agents,L=$.snap}if(!L||L.completedInstances>=1)return;const C=L.takenSequenceFlows.length,W=await b.stepWorkers(_,{agents:N});if(!W){Q({kind:"error",text:"⏭ step failed — no dispatch round was returned"});return}const ie=(y=W.snapshot.instances[0])==null?void 0:y.variables;ie&&S({...ie});const F=kr(W.snapshot.takenSequenceFlows,C);Q(jr(W,F,He,xe))}finally{te.current=!1,T(!1)}}},[b,v,p.hasErrors,Ie,Ce,Q,He,xe]),st=f.useCallback(()=>{te.current=!1,ve.current++,K(!1),T(!1),b.reset(),se([]),S({})},[b]),at=f.useCallback(()=>{if(!be||Ge.current&&!Ge.current.validate())return;const y=b.completeUserTask(be.key,JSON.stringify(B));Q({kind:"human",text:`👤 ${Xe(B)}`}),y&&y.completedInstances>=1&&Q({kind:"done",text:"✅ process instance completed"})},[be,B,b,Q]),ct=f.useMemo(()=>{var y,_;return b.phase==="loading"?o.jsx(Z,{variant:"neutral",children:"Booting engine…"}):b.phase==="error"?o.jsx(Z,{variant:"danger",children:"Engine error"}):J?o.jsx(Z,{variant:"info",children:"Running…"}):v?o.jsx(Z,{variant:"info",children:"Stepping…"}):(((y=b.snapshot)==null?void 0:y.incidentElementIds.length)??0)>0?o.jsx(Z,{variant:"danger",children:"Incident"}):be?o.jsx(Z,{variant:"warning",children:"Waiting for a human"}):(((_=b.snapshot)==null?void 0:_.completedInstances)??0)>=1?o.jsx(Z,{variant:"success",children:"Completed"}):b.snapshot?o.jsx(Z,{variant:"warning",children:"Paused"}):o.jsx(Z,{variant:"neutral",children:"Ready"})},[b.phase,b.snapshot,J,v,be]);return o.jsxs("div",{className:"runner",children:[o.jsxs("section",{className:"intro",children:[o.jsx("h1",{children:e.title}),o.jsx("p",{children:e.blurb}),o.jsxs("div",{className:"controls",children:[o.jsx(V,{"data-tour":fe.runButton,onClick:()=>void it(),disabled:b.phase!=="ready"||J||v||p.hasErrors||gn,children:"▶ Run"}),o.jsx(V,{variant:"secondary",onClick:()=>void ot(),disabled:b.phase!=="ready"||J||v||p.hasErrors||gn||(((yn=b.snapshot)==null?void 0:yn.completedInstances)??0)>=1,children:"⏭ Step"}),o.jsx(V,{variant:"secondary",onClick:st,disabled:b.phase!=="ready"||v,children:"↺ Reset"}),e.tour&&o.jsx(V,{variant:"secondary",onClick:x.start,disabled:x.active,children:x.active?"Touring…":`🧭 ${e.tour.label}`}),ct]}),b.phase==="error"&&o.jsxs(me,{variant:"destructive",children:[o.jsx(pe,{children:"Engine error"}),o.jsx(ge,{children:b.error})]}),k&&o.jsxs(me,{variant:"destructive",children:[o.jsx(pe,{children:"Code didn't compile"}),o.jsx(ge,{children:k})]}),p.hasErrors&&o.jsxs(me,{variant:"destructive",children:[o.jsx(pe,{children:"Run is disabled — the diagram has unresolved references"}),o.jsx(ge,{children:o.jsx("ul",{className:"diagnostics",children:p.diagnostics.filter(y=>y.severity==="error").map((y,_)=>o.jsx("li",{children:y.message},_))})})]}),!p.hasErrors&&p.diagnostics.length>0&&o.jsxs(me,{children:[o.jsx(pe,{children:"Heads up"}),o.jsx(ge,{children:o.jsx("ul",{className:"diagnostics",children:p.diagnostics.map((y,_)=>o.jsx("li",{children:y.message},_))})})]})]}),o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"col",children:[o.jsxs(ae,{className:"panel","data-tour":fe.diagram,children:[o.jsxs(ce,{children:[o.jsx(le,{children:"Process"}),o.jsxs(de,{children:[h.processName," — live token (green), incidents (red)."]})]}),o.jsx(ue,{children:o.jsx(f.Suspense,{fallback:o.jsx("div",{className:"diagram-fallback",children:b.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:o.jsx(oi,{xml:p.resolvedBpmn,activeIds:((Mn=b.snapshot)==null?void 0:Mn.activeElementIds)??[],incidentIds:((wn=b.snapshot)==null?void 0:wn.incidentElementIds)??[],className:"diagram"})})})]}),be&&o.jsxs(ae,{className:"panel",children:[o.jsxs(ce,{children:[o.jsx(le,{children:(re==null?void 0:re.label)??"Human task"}),o.jsx(de,{children:Ae?`Rendered from the model's form "${re==null?void 0:re.formId}".`:"This task has no linked form — complete it with no variables."})]}),o.jsxs(ue,{children:[mn.length>0&&o.jsxs(me,{variant:"destructive",children:[o.jsx(pe,{children:"The agent didn't finish its checks"}),o.jsxs(ge,{children:["It completed without running"," ",mn.map(y=>y.label||y.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),Ae&&o.jsx(f.Suspense,{fallback:o.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:o.jsx(Pn,{ref:Ge,schema:Ae,values:B,onChange:(y,_)=>q(N=>({...N,[y]:_})),context:ye,onValidityChange:tt})}),o.jsx(V,{onClick:at,disabled:!!Ae&&!Ee,children:"Complete task"})]})]}),Me&&o.jsxs(ae,{className:"panel",children:[o.jsxs(ce,{children:[o.jsx(le,{children:Me.control.label}),o.jsx(de,{children:"This job is held here on purpose — pick how it resolves."})]}),o.jsx(ue,{children:o.jsxs("div",{className:"controls",children:[o.jsx(V,{onClick:()=>void pn("complete"),disabled:J||v,children:Me.control.completeLabel??"✅ Complete normally"}),o.jsx(V,{variant:"secondary",onClick:()=>void pn("action"),disabled:J||v,children:Me.control.action.label})]})})]}),o.jsxs("div",{className:"row",children:[o.jsxs(ae,{className:"panel grow","data-tour":fe.variablesPanel,children:[o.jsxs(ce,{children:[o.jsx(le,{children:"Variables"}),o.jsx(de,{children:"The instance payload, live."})]}),o.jsx(ue,{children:o.jsx("pre",{className:"vars",children:Xe(ye,2)})})]}),o.jsx(Zr,{log:A,elementStats:(_n=b.snapshot)==null?void 0:_n.elementStats,incidents:(xn=b.snapshot)==null?void 0:xn.incidents,labelFor:He})]})]}),o.jsxs("div",{className:"col",children:[h.agent&&o.jsxs(ae,{className:"panel","data-tour":fe.brainPanel,children:[o.jsxs(ce,{children:[o.jsx(le,{children:"Brain"}),o.jsxs(de,{children:["What drives “",h.agent.label,"”. The model recommends; the process governs."]})]}),o.jsx(ue,{children:o.jsx(Qr,{brain:a})})]}),o.jsxs(ae,{className:"panel",children:[o.jsxs(ce,{children:[o.jsx(le,{children:"Start"}),o.jsx(de,{children:h.startFormId?`The model's start form "${h.startFormId}".`:"The starting payload."})]}),o.jsxs(ue,{children:[e.scenarios&&o.jsx("div",{className:"scenarios",children:e.scenarios.map(y=>o.jsx(V,{size:"sm",variant:"secondary",disabled:J,onClick:()=>j(_=>({..._,...y.variables})),children:y.label},y.label))}),I?o.jsx(f.Suspense,{fallback:o.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:o.jsx(Pn,{ref:P,schema:I,values:w,onChange:(y,_)=>j(N=>({...N,[y]:_})),disabled:J,onValidityChange:Ne})}):o.jsx("pre",{className:"vars",children:Xe(w,2)})]})]}),o.jsxs(ae,{className:"panel editors","data-tour":fe.codePanel,children:[o.jsxs(ce,{children:[o.jsx(le,{children:"Code"}),o.jsx(de,{children:"One handler per BPMN element. Return variables to merge, or throw to fail the job."})]}),o.jsx(Mt,{}),o.jsx(ue,{children:o.jsx(f.Suspense,{fallback:o.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:o.jsxs(wt,{value:O,onValueChange:X,children:[o.jsxs(_t,{children:[o.jsx(Pe,{value:Cn,children:"model"}),h.agent&&o.jsx(Pe,{value:We,children:"agent (scripted)"}),e.handlers.map(y=>{var _;return o.jsx(Pe,{value:y.elementId,children:((_=h.tasks.find(N=>N.elementId===y.elementId))==null?void 0:_.label)??y.elementId},y.elementId)}),Object.keys(d).map(y=>o.jsx(Pe,{value:zn+y,children:y},y))]}),o.jsxs(Oe,{value:Cn,children:[o.jsxs("div",{className:"editor-meta",children:[o.jsx("strong",{children:"Model"}),o.jsx("code",{children:"edit the diagram visually — Run re-checks it below"}),o.jsx(V,{variant:"secondary",size:"sm",onClick:()=>i(e.bpmn),disabled:r===e.bpmn,children:"Revert to original"})]}),o.jsx(si,{value:r,onChange:i})]}),h.agent&&o.jsxs(Oe,{value:We,children:[o.jsxs("div",{className:"editor-meta",children:[o.jsx("strong",{children:h.agent.label}),o.jsx("code",{children:a.kind==="scripted"||!a.chat?"in use":"unused — a live brain is connected"})]}),o.jsx("div",{className:"editor-wrap",children:o.jsx(Ke,{height:"360px",defaultLanguage:"javascript",value:m,onChange:y=>s(y??""),options:en})})]}),e.handlers.map(y=>{var _;return o.jsxs(Oe,{value:y.elementId,children:[o.jsxs("div",{className:"editor-meta",children:[o.jsx("strong",{children:((_=h.tasks.find(N=>N.elementId===y.elementId))==null?void 0:_.label)??y.elementId}),o.jsx("code",{children:y.standsInFor??y.elementId})]}),o.jsx("div",{className:"editor-wrap",children:o.jsx(Ke,{height:"360px",defaultLanguage:"javascript",value:c[y.elementId],onChange:N=>l(L=>({...L,[y.elementId]:N??""})),options:en})})]},y.elementId)}),Object.keys(d).map(y=>o.jsxs(Oe,{value:zn+y,children:[o.jsxs("div",{className:"editor-meta",children:[o.jsx("strong",{children:y}),o.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+y+"}}"]})]}),o.jsx("div",{className:"editor-wrap",children:o.jsx(Ke,{height:"360px",defaultLanguage:"markdown",value:d[y],onChange:_=>g(N=>Qe(N,{[y]:_??""})),options:en})})]},y))]})})})]}),h.agent&&o.jsxs(ae,{className:"panel",children:[o.jsxs(ce,{children:[o.jsx(le,{children:"Tools, as the model sees them"}),o.jsxs(de,{children:["Read from the diagram — element name, documentation, and every",o.jsx("code",{children:" fromAi(…)"})," argument."]})]}),o.jsx(ue,{children:o.jsx("ul",{className:"tool-list",children:h.agent.tools.map(y=>o.jsxs("li",{children:[o.jsx("code",{children:y.elementId}),o.jsxs("span",{children:[" — ",y.documentation||y.label]}),y.args.length>0&&o.jsx("ul",{children:y.args.map(_=>o.jsxs("li",{children:[o.jsxs("code",{children:[_.name,": ",_.type]})," ","— ",_.description]},_.name))})]},y.elementId))})})]})]})]})]})}const en={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},ci=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,li=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,di={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:fe.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"},waitFor:{kind:"activeElement",elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"},waitFor:{kind:"elementCompleted",elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:fe.variablesPanel}}],successEvent:{kind:"instanceCompleted"}},ui=`<?xml version="1.0" encoding="UTF-8"?>
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
`,mi="Camunda Cloud",pi="8.10.0",gi={name:"Camunda Web Modeler",version:"9b5d5ef"},hi=19,bi="seed-export-shipment-ready",fi=[{text:"# Use a predefined scenario...",type:"text",layout:{row:"Row_04pl1rt",columns:null},id:"Field_0a6kzzq"},{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Use pre-defined sceanrio - to use leave Shipment notes below blank.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{text:`The following shipments notes are used:
* Likely cleared: SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53.
* Likely flagged: SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1.`,type:"text",layout:{row:"Row_1h31mub",columns:null},id:"Field_0j1vwd9"},{text:"# ...or hand in your own data",type:"text",layout:{row:"Row_1wu4opr",columns:null},id:"Field_12u5gzd"},{label:"Shipment notes",description:"If set, overrides the scenario above. Leave blank to use the scenario selected above. The agent reads this to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],yi="default",Mi={executionPlatform:mi,executionPlatformVersion:pi,exporter:gi,schemaVersion:hi,id:bi,components:fi,type:yi},wi="Camunda Cloud",_i="8.10.0",xi={name:"Camunda Web Modeler",version:"9b5d5ef"},Ni=19,vi="seed-export-compliance-review",Ii=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],Ti="default",ki={executionPlatform:wi,executionPlatformVersion:_i,exporter:xi,schemaVersion:Ni,id:vi,components:Ii,type:Ti},ji=Object.assign({"./prompts/system-prompt.md":ci,"./prompts/user-prompt.md":li}),Ei=Qe(Object.fromEntries(Object.entries(ji).map(([e,n])=>[Jt(e),n.trimEnd()]))),On="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",Di="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",Si=`async (job) => {
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
}`,Ai=`async (job, { text, sleep, trace }) => {
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
}`,Li=`async (job, { text, sleep, trace }) => {
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
}`,Ci=`async (job, { num, sleep }) => {
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
}`,zi=`async (job, { text, trace }) => {
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
}`,Pi=`async (job, { sleep }) => {
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
}`,Oi={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:ui,forms:{"seed-export-shipment-ready":Mi,"seed-export-compliance-review":ki},seed:{scenario:On,shipmentNotes:""},scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:On,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:Di,shipmentNotes:""}}],scriptedAgent:Si,templates:Ei,tour:di,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:Ai},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:Li},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:Ci},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:zi},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:Pi}]},Bi=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ri=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Ui=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,Fi=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Yi={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:Bi,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Ri},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Ui},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Fi}]},Qi=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,$i=`async (job, { text, num, sleep, trace }) => {
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
}`,Gi={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:Qi,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:$i}]},Ji=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Hi=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Vi=`async (job, { num, sleep }) => {
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
}`,Zi=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,qi={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:Ji,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Hi},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Vi,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Zi,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},Ue=[Gi,Oi,Yi,qi];function un(){return"/pr-preview/pr-73/"}function Wi(e){const n=un();return e.startsWith(n)?"/"+e.slice(n.length):e}function Ki(e=location.pathname){const t=Wi(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function Xi(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function eo(){return un()}function Bn(e){return`${un()}examples/${encodeURIComponent(e)}`}function Rn(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function Un(){return{route:Ki(),embed:Xi()}}function no(){const[e,n]=f.useState(Un);return f.useEffect(()=>{const t=()=>n(Un());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const to="web-demo-framework:height",ro="web-demo-framework:request-height";function io(e){return{type:to,height:Math.ceil(e)}}const Fn="embed-height-auto";function oo(e){f.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(Fn);let t=-1;const r=(c=!1)=>{const l=document.documentElement.scrollHeight;!c&&Math.abs(l-t)<2||(t=l,window.parent.postMessage(io(l),"*"))},i=c=>{if(c.source!==window.parent)return;const l=c.data;!l||l.type!==ro||r(!0)};window.addEventListener("message",i),r();const a=new ResizeObserver(()=>r());return a.observe(n),()=>{a.disconnect(),window.removeEventListener("message",i),n.classList.remove(Fn)}},[e])}function so(){const{route:e,embed:n}=no(),t=et().brain,r=qr();oo(n);const i=e.kind==="example"?e.id:Ue[0].id,a=Ue.find(m=>m.id===i)??Ue[0],c=m=>{Rn(Bn(m),{hash:location.hash})},l=o.jsxs(o.Fragment,{children:[!n&&e.kind==="gallery"&&o.jsx("nav",{className:"example-picker",children:Ue.map(m=>o.jsx(V,{size:"sm",variant:m.id===a.id?"default":"secondary",onClick:()=>c(m.id),children:m.title},m.id))}),!n&&e.kind==="example"&&o.jsx("div",{className:"example-nav",children:o.jsx(V,{size:"sm",variant:"secondary",onClick:()=>Rn(eo()),children:"← All examples"})}),o.jsxs("div",{className:"example-meta",children:[a.docsUrl&&o.jsx("a",{className:"docs-link",href:a.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&o.jsx("a",{className:"open-full-page",href:Bn(a.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:"Open full page ↗"})]}),o.jsx(ai,{example:a,initialBrainKind:t,initialTourId:r},a.id)]});return n?o.jsx("div",{className:"c4-ui app-shell app-embed",children:o.jsx("main",{id:"main",className:"layout layout-embed",children:l})}):o.jsxs("div",{className:"c4-ui app-shell",children:[o.jsx(xt,{appName:"Runnable Camunda examples",trailing:o.jsx("span",{className:"app-subtitle",children:"model + code + optional LLM, in your browser"})}),o.jsx("main",{id:"main",className:"layout",children:l})]})}pt.createRoot(document.getElementById("root")).render(o.jsx(f.StrictMode,{children:o.jsx(Nt,{children:o.jsx(so,{})})}));export{ee as _,uo as c};
