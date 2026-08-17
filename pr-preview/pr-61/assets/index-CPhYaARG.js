const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-embedded-CxxwVM79.css","assets/vendor-bpmn-CiS4MrM6.js","assets/vendor-react-WnIiAG2f.js","assets/NavigatedViewer-CmIohCIa.js","assets/vendor-design-system-CEXqimSF.js","assets/vendor-design-system-Dc2PGMq8.css","assets/MonacoEditor-KQHmpFhI.js","assets/MonacoEditor-CyV2ms1L.css","assets/vendor-modeler-BXeRxtyZ.js","assets/parser-Cn7g5BiQ.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-DhneLuEE.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var et=Object.defineProperty;var nt=(e,n,t)=>n in e?et(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var G=(e,n,t)=>nt(e,typeof n!="symbol"?n+"":n,t);import{r as h,j as s,i as tt}from"./vendor-react-WnIiAG2f.js";import{B as Z,a as K,L as Ee,S as rt,b as it,c as ot,d as st,e as at,A as le,f as de,g as ue,I as Ue,C as ie,h as oe,i as se,j as ae,k as ce,l as ct,T as lt,m as dt,n as De,o as Ae,p as ut,q as mt}from"./vendor-design-system-CEXqimSF.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const pt="modulepreload",gt=function(e){return"/pr-preview/pr-61/"+e},hn={},ne=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){let l=function(o){return Promise.all(o.map(c=>Promise.resolve(c).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));i=l(t.map(o=>{if(o=gt(o),o in hn)return;hn[o]=!0;const c=o.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${g}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":pt,c||(p.as="script"),p.crossOrigin="",p.href=o,m&&p.setAttribute("nonce",m),document.head.appendChild(p),c)return new Promise((f,b)=>{p.addEventListener("load",f),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${o}`)))})}))}function a(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return i.then(l=>{for(const d of l||[])d.status==="rejected"&&a(d.reason);return n().catch(a)})},ht="io.camunda.agenticai:aiagent",Me="http://www.omg.org/spec/BPMN/20100524/MODEL",bt="http://camunda.org/schema/zeebe/1.0";function Ve(e,n){return Array.from(e.getElementsByTagNameNS(bt,n))}function Cn(e,n){return Ve(e,n).filter(t=>ft(t)===e)}function ft(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===Me&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function Xe(e){const n=Cn(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function yt(e){const n=Array.from(e.children).find(t=>t.namespaceURI===Me&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function bn(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(r=>r.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function Mt(e){const n=[],t=r=>{for(const i of Array.from(r.attributes))n.push(i.value);for(const i of Array.from(r.children))t(i)};return t(e),n.join(`
`)}function wt(e){const n=Mt(e),t=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,r=[],i=new Set;for(const a of n.matchAll(t)){const l=a[1];i.has(l)||(i.add(l),r.push({name:l,description:(a[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:a[3]??"string"}))}return r}function _t(e){const n={};for(const t of Cn(e,"input")){const r=t.getAttribute("target");r&&(n[r]=t.getAttribute("source")??"")}return n}function Nt(e){return Array.from(e.getElementsByTagNameNS(Me,"adHocSubProcess")).filter(n=>(Xe(n)??"").startsWith(ht))}function xt(e,n){const t=_t(e),r=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:Xe(e),systemPrompt:bn(t["data.systemPrompt.prompt"]),userPrompt:bn(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(r)&&r>0?r:10,tools:n}}function vt(e,n){var g;const t=e.getAttribute("id")??"",r=e.getAttribute("name")??t,i=Nt(e);i.length>1&&n.push({severity:"warning",elementId:i.map(p=>p.getAttribute("id")).join(", "),message:`Process "${r}" hosts ${i.length} AI Agent sub-processes (${i.map(p=>p.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const a=[],l=new Map(i.map(p=>[p,[]]));for(const p of Array.from(e.getElementsByTagName("*"))){if(p.namespaceURI!==Me||i.includes(p))continue;const f=Xe(p),b=p.getAttribute("id");if(!f||!b)continue;const N=i.filter(T=>T.contains(p)),v=N.find(T=>N.every(L=>L===T||L.contains(T))),w={elementId:b,label:p.getAttribute("name")??b,jobType:f,documentation:yt(p),isTool:v!=null};a.push(w),v&&l.get(v).push({elementId:b,label:w.label,jobType:f,documentation:w.documentation,args:wt(p)})}const d=i.map(p=>xt(p,l.get(p))),m=Array.from(e.getElementsByTagNameNS(Me,"userTask")).map(p=>{var f;return{elementId:p.getAttribute("id")??"",label:p.getAttribute("name")??p.getAttribute("id")??"",formId:((f=Ve(p,"formDefinition")[0])==null?void 0:f.getAttribute("formId"))??void 0}}),o=e.getElementsByTagNameNS(Me,"startEvent")[0],c=o?((g=Ve(o,"formDefinition")[0])==null?void 0:g.getAttribute("formId"))??void 0:void 0;return{processId:t,processName:r,tasks:a,agents:d,userTasks:m,startFormId:c}}function It(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),r=t.getElementsByTagName("parsererror")[0];if(r)throw new Error(`Invalid BPMN XML: ${r.textContent}`);const i=Array.from(t.getElementsByTagNameNS(Me,"process"));if(i.length===0)throw new Error("No <bpmn:process> in the diagram.");const a=[],l=i.map(m=>vt(m,a));let d=n.processId?l.find(m=>m.processId===n.processId):void 0;return n.processId&&!d&&a.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${l[0].processId}".`}),d??(d=l[0]),l.length>1&&a.push({severity:"warning",message:`Diagram has ${l.length} <bpmn:process> elements (${l.map(m=>m.processId).join(", ")}); using "${d.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:l,diagnostics:a,processId:d.processId,processName:d.processName,tasks:d.tasks,agent:d.agents[0]??null,agents:l.flatMap(m=>m.agents),userTasks:d.userTasks,startFormId:d.startFormId}}function Tt(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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
  <\/script></body></html>`}function zn(e,n={}){const{timeoutMs:t=5e3,onTrace:r}=n,i=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((a,l)=>{const d=document.createElement("iframe");d.setAttribute("sandbox","allow-scripts"),d.style.display="none",d.setAttribute("aria-hidden","true");let m=!1,o;const c=()=>{o&&clearTimeout(o),window.removeEventListener("message",p),d.remove()},g=f=>{m||(m=!0,c(),f())};function p(f){var N;if(f.source!==d.contentWindow)return;const b=f.data;if(!(!b||typeof b!="object")){if(b.kind==="ready"){const v=e.job,w=e.kind==="run-handler"?{kind:"run-handler",id:i,source:e.source,job:v}:{kind:"run-agent",id:i,source:e.source,job:v};(N=d.contentWindow)==null||N.postMessage(w,"*");return}"id"in b&&b.id!==i||(b.kind==="trace"?r==null||r(b.text):b.kind==="result"?g(()=>a(b.value)):b.kind==="error"&&g(()=>l(new Error(b.message))))}}window.addEventListener("message",p),o=setTimeout(()=>{g(()=>l(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),d.srcdoc=Tt(),document.body.appendChild(d)})}function Pn(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function jt(e,n,t){return zn({kind:"run-handler",source:e,job:Pn(n)},{onTrace:t.trace})}function kt(e,n){return zn({kind:"run-agent",source:e,job:Pn(n)})}function On(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function Et(e){return On(e,"Handler code"),(n,t)=>jt(e,n,t)}function Dt(e){return On(e,"Agent code"),n=>kt(e,n)}function At(e,n,t){return{sleep:r=>new Promise(i=>setTimeout(i,r)),trace:r=>n({kind:"tool",text:`   ${r}`,elementId:e.elementId,turn:t}),text:(r,i="")=>{const a=e.variables[r];return typeof a=="string"?a:a==null?i:String(a)},num:(r,i=0)=>{const a=e.variables[r],l=typeof a=="number"?a:Number(a);return Number.isFinite(l)?l:i}}}function St(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Lt(e,n,t,r){const i={},a=e.processes.flatMap(d=>d.tasks),l=new Map(a.map(d=>[d.elementId,d.label]));for(const d of a)i[d.jobType]||(i[d.jobType]=async m=>{const o=n[m.elementId];if(!o)throw new Error(`No handler registered for ${m.elementId} (job type ${m.type})`);const c=l.get(m.elementId)??m.elementId,g=r==null?void 0:r.current;t({kind:"tool",text:`▶ ${c}`,elementId:m.elementId,turn:g});const p=await o(m,At(m,t,g));return t({kind:"vars",text:`  ↳ ${St(p)}`,elementId:m.elementId,result:p,turn:g}),p});return i}const Ct=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function Oe(...e){const n=Object.create(null);for(const t of e)if(t)for(const r of Object.keys(t))n[r]=t[r];return n}function zt(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function Bn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pt(e){return Bn(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function Ot(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bt(e){return JSON.stringify(e).slice(1,-1)}function Rt(e,n){const t=e.lastIndexOf("<",n),r=e.lastIndexOf(">",n);if(t<=r)return"text";const i=e.slice(t,n);if((i.match(/"/g)??[]).length%2===0)return"text";const l=i.lastIndexOf('"');return(i.slice(l+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function Ut(e,n,t="xml"){const r=[],i=new Set;return{result:e.replace(Ct,(l,d,m)=>{const o=d.trim();if(!Object.prototype.hasOwnProperty.call(n,o))return i.has(o)||(i.add(o),r.push(o)),l;const c=n[o];if(t==="json")return Bt(c);const g=Rt(e,m);return g==="feel-literal"?Ot(c):g==="attribute"?Pt(c):Bn(c)}),unresolved:r}}function Ft(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function Yt(e,n={},t=e.bpmn,r={}){const i=[],a=Oe(e.templates,r),{result:l,unresolved:d}=Ut(t,a,"xml");for(const w of d)i.push({severity:"warning",message:`Template placeholder "{{${w}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let m;try{m=It(l)}catch(w){return i.push({severity:"error",message:w instanceof Error?w.message:String(w)}),{resolvedBpmn:l,model:Ft(),handlers:{},forms:{},diagnostics:i,hasErrors:!0}}i.push(...m.diagnostics);const o=m.processes.flatMap(w=>w.tasks),c=new Map(e.handlers.map(w=>[w.elementId,w.source])),g={};for(const w of o){const T=n[w.elementId]??c.get(w.elementId);if(T===void 0){i.push({severity:"error",elementId:w.elementId,jobType:w.jobType,message:`No handler for "${w.label}" (${w.elementId}, job type "${w.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{g[w.elementId]=Et(T)}catch(L){i.push({severity:"error",elementId:w.elementId,jobType:w.jobType,message:`"${w.label}" (${w.elementId}): handler code didn't compile — ${L instanceof Error?L.message:String(L)}`})}}const p=new Set(o.map(w=>w.elementId)),f=new Set([...c.keys(),...Object.keys(n)]);for(const w of f)p.has(w)||i.push({severity:"error",elementId:w,message:`Handler "${w}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const b={},N=e.forms??{},v=(w,T)=>{if(!w)return;const L=N[w];L?b[w]=L:i.push({severity:"error",formId:w,message:`${T} references form "${w}", which has no matching schema.`})};for(const w of m.processes){v(w.startFormId,`The start event of process "${w.processName}"`);for(const T of w.userTasks)v(T.formId,`User task "${T.label}" (${T.elementId})`)}return{resolvedBpmn:l,model:m,handlers:g,forms:b,diagnostics:i,hasErrors:i.some(w=>w.severity==="error")}}function Qt(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let r=n;r<e.length;r++)if(e[r]==="{")t++;else if(e[r]==="}"&&(t--,t===0))try{const i=JSON.parse(e.slice(n,r+1));return typeof i=="object"&&i!==null&&!Array.isArray(i)?i:null}catch{return null}return null}function He(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function fn(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function yn(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:fn(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,r=Array.isArray(t)?t:Object.values(e).find(a=>Array.isArray(a))??[],i=[];for(const a of r)if(typeof a=="string")a.trim()&&i.push({name:a.trim(),args:{}});else if(a&&typeof a=="object"){const l=a,d=l.name??l.tool??l.id??l.function;typeof d=="string"&&d.trim()&&i.push({name:d.trim(),args:fn(l)})}return i}function $t(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function Mn(e){const n=e.args.length?e.args.map(r=>`      ${r.name} (${r.type}) — ${r.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function Gt(e,n,t){const r=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",i=t[0]??e.tools[0];if(t.length===0)return`${r}

Every tool has already run. Reply with JSON only — no prose, no explanation, no
markdown fence — exactly:

{"done": true}`;const a=i!=null&&i.args.length?`{${i.args.map(l=>`"${l.name}": "…"`).join(", ")}}`:"{}";return n?`${r}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${t.map(Mn).join(`

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

${t.map(Mn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(i==null?void 0:i.elementId)??"ToolName"}", "arguments": ${a}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function Jt(e,n,t,r,i=[],a=[],l=!1){const d=e.userPrompt||"Carry out your task.",m=Object.entries(n).filter(([,c])=>typeof c=="string"&&c.trim().length>0).map(([c,g])=>`  ${c}: ${String(g)}`),o=[d,m.length?`Case data:
${m.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return o.push(t.length?`${l?"Tools you have already run (you may call one again if it is genuinely needed):":"Tools you have already run — do NOT call these again:"}
${t.join(`
`)}`:"You have not run any tools yet."),o.push(r.length?`Tools still available:
${r.map(c=>`  ${c.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),a.length&&o.push(`Your last reply was rejected: ${a.join("; ")}. Do not repeat it.`),i.length&&o.push(`You reported that you are done, but ${i.join(" and ")} ${i.length===1?"has":"have"} not run. Passing those values as another tool's arguments does not count. Call ${i.length===1?"it":"them"} now.`),o.push("Which tool should run next? Reply with JSON only."),o.join(`

`)}async function Vt(e,n,t,r,i,a){let l="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:a});const d=await e(r,i,m=>{l+=m,n({kind:"llm",text:`${He(l)} ▍`,key:t,pending:!0,turn:a})});return n({kind:"llm",text:He(d||l)||"(empty reply)",key:t,pending:!1,turn:a}),d}function Ht(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function Zt(e,n,t){const r={},i=new Map,a=new Map;for(const{tool:l,args:d}of e){const m={};for(const o of l.args){const c=d[o.name];if(!(c!=null&&c!=="")){n({kind:"error",text:`🤖 ${l.elementId}: model supplied no value for "${o.name}"`,turn:t,elementId:l.elementId});continue}const p=i.get(o.name);if(p!==void 0&&p!==l.elementId){n({kind:"error",text:`🤖 argument name collision on "${o.name}": both ${p} and ${l.elementId} declare it — ${p} already claimed it this turn, ${l.elementId}'s value is dropped`,turn:t,elementId:l.elementId});continue}const f=Ht(o.type,c);if(!f.ok){n({kind:"error",text:`🤖 ${l.elementId}: "${o.name}" is declared as ${o.type} but the model supplied ${JSON.stringify(c)} — rejected, not passed through`,turn:t,elementId:l.elementId});continue}r[o.name]=f.value,m[o.name]=f.value,i.set(o.name,l.elementId)}a.set(l.elementId,m)}return{variablesOut:r,forHistory:a}}function Wt(e,n,t,r={}){const{maxNewTokens:i=384,allowRepeats:a=!1,allowMultiToolTurns:l=!1,turnRef:d,requiredTools:m=[],maxEarlyDoneNudges:o=1}=r;let c=0;const g=new Set,p=[];let f=0,b=[],N=[];return async v=>{const w=v.variables,T=w.toolCallResult;for(T!==void 0&&p.length&&(p[p.length-1]=`${p[p.length-1]} → ${He(JSON.stringify(T),160)}`);;){const ee=await L();if(ee)return ee}async function L(){if(c+=1,d&&(d.current=c),c>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:c}),{completionConditionFulfilled:!0};const ee=a?e.tools:e.tools.filter(S=>!g.has(S.elementId)),J=[{role:"system",content:Gt(e,l,ee)},{role:"user",content:Jt(e,w,p,ee,b,N,a)}];b=[],N=[];let j;try{j=await Vt(n,t,`llm-turn-${c}`,J,i,c)}catch(S){return t({kind:"error",text:`LLM call failed: ${S instanceof Error?S.message:String(S)} — completing the agent.`,turn:c}),{completionConditionFulfilled:!0}}const x=Qt(j);if($t(x)&&yn(x).length===0){const S=m.filter(X=>!g.has(X));return S.length&&f<o?(f+=1,b=S,t({kind:"agent",text:`🤖 model says it is done, but ${S.join(", ")} hasn't run — asking once more`,turn:c}),null):(t({kind:"agent",text:"🤖 model says it is done",turn:c}),{completionConditionFulfilled:!0})}const k=yn(x);if(k.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — asking again",turn:c}),N=['it named no tool and did not say it was done — reply with {"tool": "...", "arguments": {...}} or {"done": true}'],null;const U=[],F=[],O=[];for(const S of k){const X=e.tools.find(pe=>pe.elementId===S.name);if(!X){F.push(S.name);continue}if(!a&&g.has(X.elementId)){O.push(X.elementId);continue}U.push({tool:X,args:S.args})}if(F.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${F.join(", ")} — nothing activated`,turn:c}),O.length&&t({kind:"error",text:`🤖 model asked to re-run ${O.join(", ")} — skipped (already run)`,turn:c}),U.length===0)return t({kind:"agent",text:"🤖 nothing activated — asking again",turn:c}),N=[...F.length?[`${F.join(", ")} ${F.length===1?"is":"are"} not a real tool`]:[],...O.length?[`${O.join(", ")} has already run and will never run again — pick a different tool, or reply {"done": true} if nothing is left to do`]:[]],null;const{variablesOut:te,forHistory:we}=Zt(U,t,c);for(const{tool:S}of U)g.add(S.elementId),p.push(`- ${S.elementId}(${JSON.stringify(we.get(S.elementId))})`);for(const{tool:S}of U)t({kind:"agent",text:`🤖 calling ${S.elementId}`,turn:c,elementId:S.elementId,args:we.get(S.elementId)??{}});return{activateElements:U.map(S=>({elementId:S.tool.elementId})),variables:te}}}}function qt(e,n,t,r={}){const i=new Map(e.map(a=>[a.elementId,Wt(a,n,t,r)]));return async a=>{const l=i.get(a.elementId);if(!l)throw new Error(`No agent host registered for "${a.elementId}"`);return l(a)}}class Ze{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,wn.unregister(this),n}free(){const n=this.__destroy_into_raw();u.__wbg_testengine_free(n,0)}activateJobs(n,t,r,i){let a,l;try{const f=u.__wbindgen_add_to_stack_pointer(-16),b=D(n,u.__wbindgen_export,u.__wbindgen_export2),N=E,v=D(i,u.__wbindgen_export,u.__wbindgen_export2),w=E;u.testengine_activateJobs(f,this.__wbg_ptr,b,N,t,r,v,w);var d=M().getInt32(f+0,!0),m=M().getInt32(f+4,!0),o=M().getInt32(f+8,!0),c=M().getInt32(f+12,!0),g=d,p=m;if(c)throw g=0,p=0,P(o);return a=g,l=p,z(g,p)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(a,l,1)}}advanceTime(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_advanceTime(c,this.__wbg_ptr,n);var i=M().getInt32(c+0,!0),a=M().getInt32(c+4,!0),l=M().getInt32(c+8,!0),d=M().getInt32(c+12,!0),m=i,o=a;if(d)throw m=0,o=0,P(l);return t=m,r=o,z(m,o)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}assignUserTask(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(t,u.__wbindgen_export,u.__wbindgen_export2),v=E;u.testengine_assignUserTask(p,this.__wbg_ptr,f,b,N,v,r);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),o=M().getInt32(p+12,!0),c=l,g=d;if(o)throw c=0,g=0,P(m);return i=c,a=g,z(c,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}broadcastSignal(n,t){let r,i;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),f=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),N=E;u.testengine_broadcastSignal(g,this.__wbg_ptr,p,f,b,N);var a=M().getInt32(g+0,!0),l=M().getInt32(g+4,!0),d=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),o=a,c=l;if(m)throw o=0,c=0,P(d);return r=o,i=c,z(o,c)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}cancelInstance(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16),g=D(n,u.__wbindgen_export,u.__wbindgen_export2),p=E;u.testengine_cancelInstance(c,this.__wbg_ptr,g,p);var i=M().getInt32(c+0,!0),a=M().getInt32(c+4,!0),l=M().getInt32(c+8,!0),d=M().getInt32(c+12,!0),m=i,o=a;if(d)throw m=0,o=0,P(l);return t=m,r=o,z(m,o)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}completeAgentJob(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(t,u.__wbindgen_export,u.__wbindgen_export2),v=E,w=D(r,u.__wbindgen_export,u.__wbindgen_export2),T=E;u.testengine_completeAgentJob(p,this.__wbg_ptr,f,b,N,v,w,T);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),o=M().getInt32(p+12,!0),c=l,g=d;if(o)throw c=0,g=0,P(m);return i=c,a=g,z(c,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}completeJob(n,t){let r,i;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),f=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),N=E;u.testengine_completeJob(g,this.__wbg_ptr,p,f,b,N);var a=M().getInt32(g+0,!0),l=M().getInt32(g+4,!0),d=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),o=a,c=l;if(m)throw o=0,c=0,P(d);return r=o,i=c,z(o,c)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}completeUserTask(n,t){let r,i;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),f=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),N=E;u.testengine_completeUserTask(g,this.__wbg_ptr,p,f,b,N);var a=M().getInt32(g+0,!0),l=M().getInt32(g+4,!0),d=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),o=a,c=l;if(m)throw o=0,c=0,P(d);return r=o,i=c,z(o,c)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}correlateMessage(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(t,u.__wbindgen_export,u.__wbindgen_export2),v=E,w=D(r,u.__wbindgen_export,u.__wbindgen_export2),T=E;u.testengine_correlateMessage(p,this.__wbg_ptr,f,b,N,v,w,T);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),o=M().getInt32(p+12,!0),c=l,g=d;if(o)throw c=0,g=0,P(m);return i=c,a=g,z(c,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}createInstance(n,t){let r,i;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),f=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),N=E;u.testengine_createInstance(g,this.__wbg_ptr,p,f,b,N);var a=M().getInt32(g+0,!0),l=M().getInt32(g+4,!0),d=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),o=a,c=l;if(m)throw o=0,c=0,P(d);return r=o,i=c,z(o,c)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}deploy(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16),g=D(n,u.__wbindgen_export,u.__wbindgen_export2),p=E;u.testengine_deploy(c,this.__wbg_ptr,g,p);var i=M().getInt32(c+0,!0),a=M().getInt32(c+4,!0),l=M().getInt32(c+8,!0),d=M().getInt32(c+12,!0),m=i,o=a;if(d)throw m=0,o=0,P(l);return t=m,r=o,z(m,o)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}events(){let n,t;try{const o=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_events(o,this.__wbg_ptr);var r=M().getInt32(o+0,!0),i=M().getInt32(o+4,!0),a=M().getInt32(o+8,!0),l=M().getInt32(o+12,!0),d=r,m=i;if(l)throw d=0,m=0,P(a);return n=d,t=m,z(d,m)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(n,t,1)}}failJob(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(r,u.__wbindgen_export,u.__wbindgen_export2),v=E;u.testengine_failJob(p,this.__wbg_ptr,f,b,t,N,v);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),o=M().getInt32(p+12,!0),c=l,g=d;if(o)throw c=0,g=0,P(m);return i=c,a=g,z(c,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}modify(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(t,u.__wbindgen_export,u.__wbindgen_export2),v=E,w=D(r,u.__wbindgen_export,u.__wbindgen_export2),T=E;u.testengine_modify(p,this.__wbg_ptr,f,b,N,v,w,T);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),o=M().getInt32(p+12,!0),c=l,g=d;if(o)throw c=0,g=0,P(m);return i=c,a=g,z(c,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}constructor(){const n=u.testengine_new();return this.__wbg_ptr=n,wn.register(this,this.__wbg_ptr,this),this}get now(){return u.testengine_now(this.__wbg_ptr)}reset(){u.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16),g=D(n,u.__wbindgen_export,u.__wbindgen_export2),p=E;u.testengine_resolveIncident(c,this.__wbg_ptr,g,p);var i=M().getInt32(c+0,!0),a=M().getInt32(c+4,!0),l=M().getInt32(c+8,!0),d=M().getInt32(c+12,!0),m=i,o=a;if(d)throw m=0,o=0,P(l);return t=m,r=o,z(m,o)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}setVariables(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(t,u.__wbindgen_export,u.__wbindgen_export2),v=E;u.testengine_setVariables(p,this.__wbg_ptr,f,b,N,v,r);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),o=M().getInt32(p+12,!0),c=l,g=d;if(o)throw c=0,g=0,P(m);return i=c,a=g,z(c,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}snapshot(){let n,t;try{const o=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_snapshot(o,this.__wbg_ptr);var r=M().getInt32(o+0,!0),i=M().getInt32(o+4,!0),a=M().getInt32(o+8,!0),l=M().getInt32(o+12,!0),d=r,m=i;if(l)throw d=0,m=0,P(a);return n=d,t=m,z(d,m)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(n,t,1)}}throwError(n,t,r){let i,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(t,u.__wbindgen_export,u.__wbindgen_export2),v=E,w=D(r,u.__wbindgen_export,u.__wbindgen_export2),T=E;u.testengine_throwError(p,this.__wbg_ptr,f,b,N,v,w,T);var l=M().getInt32(p+0,!0),d=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),o=M().getInt32(p+12,!0),c=l,g=d;if(o)throw c=0,g=0,P(m);return i=c,a=g,z(c,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(i,a,1)}}tickNow(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_tickNow(c,this.__wbg_ptr,n);var i=M().getInt32(c+0,!0),a=M().getInt32(c+4,!0),l=M().getInt32(c+8,!0),d=M().getInt32(c+12,!0),m=i,o=a;if(d)throw m=0,o=0,P(l);return t=m,r=o,z(m,o)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}unassignUserTask(n){let t,r;try{const c=u.__wbindgen_add_to_stack_pointer(-16),g=D(n,u.__wbindgen_export,u.__wbindgen_export2),p=E;u.testengine_unassignUserTask(c,this.__wbg_ptr,g,p);var i=M().getInt32(c+0,!0),a=M().getInt32(c+4,!0),l=M().getInt32(c+8,!0),d=M().getInt32(c+12,!0),m=i,o=a;if(d)throw m=0,o=0,P(l);return t=m,r=o,z(m,o)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}updateRetries(n,t){let r,i;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),f=E;u.testengine_updateRetries(g,this.__wbg_ptr,p,f,t);var a=M().getInt32(g+0,!0),l=M().getInt32(g+4,!0),d=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),o=a,c=l;if(m)throw o=0,c=0,P(d);return r=o,i=c,z(o,c)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}updateUserTask(n,t){let r,i;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),f=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),N=E;u.testengine_updateUserTask(g,this.__wbg_ptr,p,f,b,N);var a=M().getInt32(g+0,!0),l=M().getInt32(g+4,!0),d=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),o=a,c=l;if(m)throw o=0,c=0,P(d);return r=o,i=c,z(o,c)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,i,1)}}}Symbol.dispose&&(Ze.prototype[Symbol.dispose]=Ze.prototype.free);function Kt(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(n,t){throw new Error(z(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const r=z(n,t);return Xt(r)},__wbindgen_object_drop_ref:function(n){P(n)}}}}const wn=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>u.__wbg_testengine_free(e,1));function Xt(e){ve===me.length&&me.push(me.length+1);const n=ve;return ve=me[n],me[n]=e,n}function er(e){e<1028||(me[e]=ve,ve=e)}let ye=null;function M(){return(ye===null||ye.buffer.detached===!0||ye.buffer.detached===void 0&&ye.buffer!==u.memory.buffer)&&(ye=new DataView(u.memory.buffer)),ye}function z(e,n){return rr(e>>>0,n)}let xe=null;function ze(){return(xe===null||xe.byteLength===0)&&(xe=new Uint8Array(u.memory.buffer)),xe}function nr(e){return me[e]}let me=new Array(1024).fill(void 0);me.push(void 0,null,!0,!1);let ve=me.length;function D(e,n,t){if(t===void 0){const d=Ie.encode(e),m=n(d.length,1)>>>0;return ze().subarray(m,m+d.length).set(d),E=d.length,m}let r=e.length,i=n(r,1)>>>0;const a=ze();let l=0;for(;l<r;l++){const d=e.charCodeAt(l);if(d>127)break;a[i+l]=d}if(l!==r){l!==0&&(e=e.slice(l)),i=t(i,r,r=l+e.length*3,1)>>>0;const d=ze().subarray(i+l,i+r),m=Ie.encodeInto(e,d);l+=m.written,i=t(i,r,l,1)>>>0}return E=l,i}function P(e){const n=nr(e);return er(e),n}let Pe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Pe.decode();const tr=2146435072;let Fe=0;function rr(e,n){return Fe+=n,Fe>=tr&&(Pe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Pe.decode(),Fe=n),Pe.decode(ze().subarray(e,e+n))}const Ie=new TextEncoder;"encodeInto"in Ie||(Ie.encodeInto=function(e,n){const t=Ie.encode(e);return n.set(t),{read:e.length,written:t.length}});let E=0,u;function ir(e,n){return u=e.exports,ye=null,xe=null,u}async function or(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(i){if(e.ok&&t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}else{const r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function t(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function sr(e){if(u!==void 0)return u;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/pr-preview/pr-61/assets/nanobpmn_engine_bg-CIG0GEWz.wasm",import.meta.url));const n=Kt();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await or(await e,n);return ir(t)}let Se=null;function ar(e){return Se||(Se=sr(void 0).then(()=>{}).catch(n=>{throw Se=null,n})),Se}function Y(e){return JSON.parse(e)}class cr{constructor(n){G(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return Y(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,r,i){return JSON.parse(this.engine.activateJobs(n,t,r,i))}completeJob(n,t){return Y(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:r,...i}=t??{};return Y(this.engine.completeAgentJob(n,JSON.stringify(r??{}),JSON.stringify(i??{})))}failJob(n,t,r){return Y(this.engine.failJob(n,t,r))}throwError(n,t,r){return Y(this.engine.throwError(n,t,r))}updateRetries(n,t){return Y(this.engine.updateRetries(n,t))}resolveIncident(n){return Y(this.engine.resolveIncident(n))}setVariables(n,t,r){return Y(this.engine.setVariables(n,t||"{}",r))}broadcastSignal(n,t){return Y(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return Y(this.engine.cancelInstance(n))}modify(n,t,r){return Y(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(r??[])))}completeUserTask(n,t){return Y(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,r){return Y(this.engine.assignUserTask(n,t,r))}unassignUserTask(n){return Y(this.engine.unassignUserTask(n))}updateUserTask(n,t){return Y(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,r){return Y(this.engine.correlateMessage(n,t,r||"{}"))}advanceTime(n){return Y(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return Y(this.engine.snapshot())}free(){this.engine.free()}}async function lr(e){return await ar(),new cr(new Ze)}class Rn extends Error{constructor(t,r){super(t);G(this,"retries");this.name="JobFailure",this.retries=r==null?void 0:r.retries}}async function dr(e,n,t){let r;try{const i=await n(t);r=JSON.stringify(i??{})}catch(i){const a=i instanceof Rn&&i.retries!==void 0?i.retries:Math.max(0,t.retries-1),l=i instanceof Error?i.message:String(i);e.failJob(t.key,a,l);return}e.completeJob(t.key,r)}async function ur(e,n,t){let r;try{r=await n(t),JSON.stringify(r)}catch(i){const a=i instanceof Rn&&i.retries!==void 0?i.retries:Math.max(0,t.retries-1),l=i instanceof Error?i.message:String(i);e.failJob(t.key,a,l);return}e.completeAgentJob(t.key,r)}async function mr(e,n,t={}){const r=t.maxJobsPerActivation??10,i=t.lockTimeoutMs??3e4,a=t.worker??"bojtos",l=t.agents??{};for(const o of Object.keys(l))if(o in n)throw new Error(`dispatchRound: job type "${o}" is registered as both a worker and an agent — register it as exactly one`);const d=[];for(const[o,c]of Object.entries(n))for(const g of e.activateJobs(o,r,i,a))d.push({handler:c,job:g});const m=[];for(const[o,c]of Object.entries(l))for(const g of e.activateJobs(o,r,i,a))m.push({handler:c,job:g});for(const{handler:o,job:c}of d)await dr(e,o,c);for(const{handler:o,job:c}of m)await ur(e,o,c);return{snapshot:e.snapshot(),handled:d.length+m.length}}function pr({bpmn:e}){const n=h.useRef(null),[t,r]=h.useState("loading"),[i,a]=h.useState(null),[l,d]=h.useState([]),[m,o]=h.useState(null),c=h.useRef(e),g=h.useCallback((j,x)=>{const k=j.deploy(x);return c.current=x,d(k.processIds),o(null),a(null),k.processIds},[]);h.useEffect(()=>{let j=!1;return r("loading"),d([]),o(null),a(null),lr().then(x=>{if(j){x.free();return}try{g(x,e)}catch(k){x.free(),a(String(k)),r("error");return}n.current=x,r("ready")}).catch(x=>{j||(a(String(x)),r("error"))}),()=>{var x;j=!0,(x=n.current)==null||x.free(),n.current=null}},[e]);const p=h.useCallback(j=>{const x=n.current;if(!x)return null;try{const k=j(x);return o(k),a(null),k}catch(k){return a(String(k)),null}},[]),f=h.useCallback((j,x)=>p(k=>k.createInstance(j,x)),[p]),b=h.useCallback((j,x)=>p(k=>k.completeUserTask(j,x)),[p]),N=h.useCallback(j=>p(x=>x.advanceTime(j)),[p]);function v(j,x){const[k]=j.activateJobs(x,1,3e4,"manual-control");if(!k)throw new Error(`No waiting job of type "${x}" to resolve.`);return k}const w=h.useCallback((j,x)=>p(k=>{const U=v(k,j);return k.completeJob(U.key,x)}),[p]),T=h.useCallback((j,x,k)=>p(U=>{const F=v(U,j);return U.throwError(F.key,x,k)}),[p]),L=h.useCallback(async(j,x)=>{const k=n.current;if(!k)return null;try{const U=await mr(k,j,x);return n.current!==k?null:(o(U.snapshot),a(null),U)}catch(U){return n.current!==k||(o(k.snapshot()),a(String(U))),null}},[]),ee=h.useCallback(()=>{const j=n.current;if(j)try{j.reset(),g(j,c.current)}catch(x){a(String(x))}},[g]),J=h.useCallback(j=>{const x=n.current;if(!x)return null;try{return x.reset(),g(x,j)}catch(k){return a(String(k)),null}},[g]);return{phase:t,error:i,processIds:l,snapshot:m,createInstance:f,stepWorkers:L,completeUserTask:b,advanceTime:N,completeJobManually:w,throwJobError:T,reset:ee,redeploy:J}}const gr=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"Llama-3.2-1B-Instruct-q4f32_1-MLC",label:"Llama 3.2 1B (f32, wider GPU support)",downloadLabel:"~1.1 GB"},{id:"SmolLM2-360M-Instruct-q4f32_1-MLC",label:"SmolLM2 360M (tiny, f32)",downloadLabel:"~0.6 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function Un(e){return We.get(e)??{}}const We=new Map;async function hr(){if(We.size>0)return;const{prebuiltAppConfig:e}=await ne(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)We.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const Be=gr.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...Un(e.id)})),Fn=Be[0].id;async function br(){return await hr(),Be.map(e=>({...e,...Un(e.id)}))}async function fr(){return await en()===null}async function en(){const e=navigator.gpu;if(!e)return"This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick the Scripted or Endpoint brain.";let n;try{n=await e.requestAdapter()}catch(t){return`WebGPU adapter request failed (${t instanceof Error?t.message:String(t)}). Try the Scripted or Endpoint brain instead.`}return n?null:"This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick the Scripted or Endpoint brain instead."}function Yn(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function yr(e,n=Yn()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function Mr(e){try{const{hasModelInCache:n}=await ne(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}function qe(e){return/device (was )?lost|device_hung|device_removed|already been disposed|gpudevicelostinfo/i.test(e)}function _n(){return"The GPU device was lost — the driver reset while the model was loading or running. This is a browser/driver-level failure, not a problem with the model: fully quit and reopen the browser (a lost device usually persists for the life of the GPU process), check chrome://gpu still reports hardware acceleration, and update your GPU driver if it recurs. The Scripted and Endpoint brains don't use the GPU at all."}class Le{constructor(){G(this,"kind","browser");G(this,"model",null);G(this,"engine",null);G(this,"worker",null);G(this,"generation",0);G(this,"chat",async(n,t=512,r)=>{var a,l;const i=this.engine;if(!i||!this.model)throw new Error("BrowserBrain.chat called before connect()");try{const d=await i.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let m="";for await(const o of d){const c=((l=(a=o.choices[0])==null?void 0:a.delta)==null?void 0:l.content)??"";c&&(m+=c,r==null||r(c))}return m}catch(d){const m=d instanceof Error?d.message:String(d);throw qe(m)?(this.teardown(),new Error(`The in-browser model stopped: ${_n()}`)):d}})}async connect(n=Fn,t){var m,o;const r=await en();if(r)throw new Error(r);if(this.engine&&this.model===n)return n;const i=++this.generation,a=c=>{i===this.generation&&(t==null||t({progress:c.progress??0,text:c.text??""}))};this.teardown();let l,d;try{const{CreateWebWorkerMLCEngine:c}=await ne(async()=>{const{CreateWebWorkerMLCEngine:g}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateWebWorkerMLCEngine:g}},[]);d=new Worker(new URL("/pr-preview/pr-61/assets/webllm.worker-Dc1cCqhL.js",import.meta.url),{type:"module"}),l=await c(d,n,{initProgressCallback:a})}catch(c){if(d==null||d.terminate(),i!==this.generation)throw new Error("cancelled");const g=c instanceof Error?c.message:String(c);if(qe(g))throw new Error(`Couldn't load ${n} in the browser (${g}). ${_n()}`);const p=(o=(m=Be.find(f=>f.id===n))==null?void 0:m.requiredFeatures)==null?void 0:o.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${g}). `+(p?"This model needs WebGPU with shader-f16; try one of the f32 models in the list, or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(i!==this.generation)throw l.unload().catch(()=>{}),d==null||d.terminate(),new Error("cancelled");return this.engine=l,this.worker=d??null,this.model=n,n}teardown(){const{engine:n,worker:t}=this;this.engine=null,this.worker=null,this.model=null,n==null||n.unload().catch(()=>{}),t==null||t.terminate()}cancelConnect(){this.generation++}dispose(){this.generation++,this.teardown()}}const Qn="http://localhost:11434/v1";function $n(){var n;const e=((n=globalThis.location)==null?void 0:n.hostname)??"";return e==="localhost"||e==="127.0.0.1"||e==="[::1]"||e==="::1"}function nn(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(r=>(r=globalThis.location)==null?void 0:r.origin)()??""}){let i;try{i=new URL(Gn(e)).hostname}catch{return null}const a=l=>l==="localhost"||l==="127.0.0.1"||l==="::1"||l==="[::1]";return!a(i)||a(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function Gn(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class Nn extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class wr{constructor(n=Qn,t="",r=""){G(this,"kind","endpoint");G(this,"baseUrl");G(this,"model",null);G(this,"models",[]);G(this,"apiKey");G(this,"requestedModel");G(this,"chat",async(n,t=512,r)=>{var o,c,g;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const i=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!i.ok||!i.body){const p=await i.text().catch(()=>"");throw new Error(`chat/completions HTTP ${i.status} ${i.statusText}${p?` — ${p.slice(0,300)}`:""}`)}const a=i.body.getReader(),l=new TextDecoder;let d="",m="";for(;;){const{value:p,done:f}=await a.read();if(f)break;d+=l.decode(p,{stream:!0});let b;for(;(b=d.indexOf(`
`))>=0;){const N=d.slice(0,b).trim();if(d=d.slice(b+1),!N.startsWith("data:"))continue;const v=N.slice(5).trim();if(v==="[DONE]")continue;let w;try{w=JSON.parse(v)}catch{continue}w.model&&(this.model=w.model);const T=(o=w.choices)==null?void 0:o[0],L=((c=T==null?void 0:T.delta)==null?void 0:c.content)??((g=T==null?void 0:T.message)==null?void 0:g.content)??"";L&&(m+=L,r==null||r(L))}}return m});this.baseUrl=Gn(n),this.apiKey=t.trim(),this.requestedModel=r.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(r){const i=nn(this.baseUrl);throw new Error(i??`Can't reach ${this.baseUrl} (${r instanceof Error?r.message:String(r)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new Nn(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(r=>r.id).filter(r=>!!r),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof Nn&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(r=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${r instanceof Error?r.message:String(r)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const r=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${r?` — ${r.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}async function _r(){return await fr()?"browser":$n()?"endpoint":"scripted"}function Nr(){const[e,n]=h.useState("scripted"),t=h.useRef(!1),[r,i]=h.useState("idle"),[a,l]=h.useState(null),[d,m]=h.useState(null),[o,c]=h.useState(null),[g,p]=h.useState(null),[f,b]=h.useState(null),[N,v]=h.useState(null),[w,T]=h.useState(Fn),[L,ee]=h.useState(Qn),[J,j]=h.useState(""),[x,k]=h.useState(""),[U,F]=h.useState(null),O=h.useRef(null),te=h.useCallback(B=>async(...R)=>{try{return await B.chat(...R)}catch(W){const _e=W instanceof Error?W.message:String(W);throw B instanceof Le&&qe(_e)&&(F(null),m(null),i("error"),l(_e)),W}},[]);h.useEffect(()=>{en().then(B=>{b(B),p(B===null),t.current||(t.current=!0,_r().then(n))})},[]),h.useEffect(()=>{let B=!1;return v(null),Mr(w).then(R=>{B||v(R)}),()=>{B=!0}},[w]),h.useEffect(()=>()=>{var B;return(B=O.current)==null?void 0:B.dispose()},[]);const we=h.useCallback(B=>{n(B),i("idle"),l(null),m(null),c(null),F(null)},[]),S=h.useCallback(()=>{var B;(B=O.current)==null||B.dispose(),O.current=null,F(null),m(null)},[]),X=h.useCallback(()=>{O.current instanceof Le&&O.current.cancelConnect(),S(),i("idle"),c(null),l(null)},[S]),pe=h.useCallback(async()=>{var B;if(e==="scripted"){F(null),i("ready");return}if(e==="endpoint"){const R=nn(L);if(R){S(),l(R),i("error");return}}i("connecting"),l(null),c(null);try{if(e==="browser"){const R=O.current instanceof Le?O.current:new Le;O.current&&O.current!==R&&O.current.dispose(),O.current=R;const W=await R.connect(w,c);m(W),F(()=>te(R)),v(!0)}else{(B=O.current)==null||B.dispose();const R=new wr(L,x,J);O.current=R;const W=await R.connect();m(W),F(()=>te(R))}i("ready")}catch(R){const W=R instanceof Error?R.message:String(R);if(W==="cancelled")return;l(W),i("error"),F(null)}finally{c(null)}},[e,w,L,J,x,S,te]);return{kind:e,setKind:we,status:r,error:a,modelInUse:d,progress:o,webgpu:g,webgpuReason:f,browserModelCached:N,cancelConnect:X,browserModel:w,setBrowserModel:T,endpointUrl:L,setEndpointUrl:ee,endpointModel:J,setEndpointModel:j,apiKey:x,setApiKey:k,connect:pe,chat:U}}const Ke="#s=",xr=["scripted","browser","endpoint"];function vr(e){return typeof e=="string"&&xr.includes(e)}function Ir(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,r={};return vr(t.brain)&&(r.brain=t.brain),r}}catch{}return{}}function Jn(e=location.hash){if(!e.startsWith(Ke))return{};let n;try{n=decodeURIComponent(e.slice(Ke.length))}catch{return{}}return Ir(n)}function Tr(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":Ke+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function jr(e){const n={...Jn(),...e},t=Tr(n),r=new URL(location.href);r.hash=t,history.replaceState(history.state,"",r)}const xn=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server. Ollama by default. Local pages only."}];function kr({brain:e}){const n=xn.find(o=>o.kind===e.kind),t=nn(e.endpointUrl),r=$n(),[i,a]=h.useState(Be);h.useEffect(()=>{br().then(a)},[]);const l=i.find(o=>o.id===e.browserModel),d=l?yr(l,Yn()):null,m=e.webgpu===!0?"browser":r&&e.webgpu===!1?"endpoint":null;return s.jsxs("div",{className:"brain",children:[s.jsxs("div",{className:"brain-kinds",children:[xn.map(o=>s.jsxs(Z,{size:"sm",variant:e.kind===o.kind?"default":"secondary",onClick:()=>e.setKind(o.kind),children:[o.label,o.kind===m&&s.jsx(K,{variant:"info",className:"brain-recommended-badge",children:"recommended"})]},o.kind)),e.status==="ready"&&e.kind!=="scripted"&&s.jsx(K,{variant:"success",children:e.modelInUse??"connected"}),e.status==="connecting"&&s.jsx(K,{variant:"info",children:"connecting…"}),e.status==="error"&&s.jsx(K,{variant:"danger",children:"not connected"})]}),s.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&s.jsxs("div",{className:"brain-config",children:[s.jsxs("div",{className:"field",children:[s.jsx(Ee,{htmlFor:"browser-model",children:"Model"}),s.jsxs(rt,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[s.jsx(it,{id:"browser-model",children:s.jsx(ot,{})}),s.jsx(st,{children:i.map(o=>s.jsx(at,{value:o.id,children:o.label},o.id))})]}),e.browserModelCached===!0&&s.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&s.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&s.jsxs(le,{variant:"destructive",children:[s.jsx(de,{children:"No WebGPU in this browser"}),s.jsx(ue,{children:e.webgpuReason})]}),e.webgpu!==!1&&d&&s.jsxs(le,{variant:"destructive",children:[s.jsx(de,{children:"This model may not fit in GPU memory"}),s.jsx(ue,{children:d})]})]}),e.kind==="endpoint"&&s.jsxs("div",{className:"brain-config",children:[s.jsxs("div",{className:"field",children:[s.jsx(Ee,{htmlFor:"endpoint-url",children:"Endpoint"}),s.jsx(Ue,{id:"endpoint-url",value:e.endpointUrl,onChange:o=>e.setEndpointUrl(o.target.value),disabled:e.status==="connecting"}),s.jsxs("p",{className:"field-hint",children:["Ollama allows ",s.jsx("code",{children:"localhost"})," origins out of the box; set"," ",s.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}),t&&s.jsxs(le,{variant:"destructive",children:[s.jsx(de,{children:"A local server won't work from this URL"}),s.jsx(ue,{children:t})]})]}),s.jsxs("div",{className:"field",children:[s.jsx(Ee,{htmlFor:"endpoint-model",children:"Model (blank = first served)"}),s.jsx(Ue,{id:"endpoint-model",placeholder:"llama3.2:3b",value:e.endpointModel,onChange:o=>e.setEndpointModel(o.target.value),disabled:e.status==="connecting"})]}),s.jsxs("div",{className:"field",children:[s.jsx(Ee,{htmlFor:"endpoint-key",children:"API key (optional)"}),s.jsx(Ue,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:o=>e.setApiKey(o.target.value),disabled:e.status==="connecting"})]})]}),e.kind!=="scripted"&&s.jsxs("div",{className:"brain-actions",children:[s.jsx(Z,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting",children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&e.kind==="browser"&&s.jsx(Z,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&s.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.error&&s.jsxs(le,{variant:"destructive",children:[s.jsx(de,{children:"Couldn't connect"}),s.jsx(ue,{children:e.error})]})]})}function Vn(e){return typeof e=="object"&&e!==null}function Zi(e){const n=new Set,t=r=>{Vn(r)&&(typeof r.key=="string"&&n.add(r.key),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function Er(e){const n={},t=r=>{Vn(r)&&(typeof r.key=="string"&&"defaultValue"in r&&(n[r.key]=r.defaultValue??""),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function Dr(e){return e.entries!==void 0}function Ar(e){const n=[];let t=null;for(const r of e)r.turn!==void 0?t&&t.turn===r.turn?t.entries.push(r):(t={turn:r.turn,entries:[r]},n.push(t)):(t=null,n.push(r));return n}function vn(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Sr({activation:e,result:n,labelFor:t}){const r=e.elementId??"";return s.jsxs("div",{className:"timeline-tool",children:[s.jsxs("div",{className:"timeline-tool-head",children:[s.jsx(K,{variant:"info",children:"tool"}),s.jsx("strong",{children:t(r)||r}),s.jsx("code",{children:r})]}),e.args!==void 0&&Object.keys(e.args).length>0&&s.jsxs("div",{className:"timeline-kv",children:[s.jsx("span",{className:"timeline-kv-label",children:"arguments"}),s.jsx("code",{children:vn(e.args)})]}),s.jsxs("div",{className:"timeline-kv",children:[s.jsx("span",{className:"timeline-kv-label",children:"returned"}),s.jsx("code",{children:n?vn(n.result):"— waiting for the job to complete —"})]})]})}function Lr({group:e,labelFor:n}){const t=e.entries.find(o=>o.kind==="llm"),r=e.entries.filter(o=>o.kind==="agent"&&o.elementId),i=e.entries.filter(o=>o.kind==="vars"&&o.elementId),a=e.entries.filter(o=>o.kind==="agent"&&!o.elementId),l=e.entries.filter(o=>o.kind==="error"),d=new Set(r.map(o=>o.elementId)),m=e.entries.filter(o=>o.kind==="tool"||o.kind==="vars"&&o.elementId&&!d.has(o.elementId)).sort((o,c)=>o.id-c.id);return s.jsxs("div",{className:"timeline-turn",children:[s.jsxs("div",{className:"timeline-turn-head",children:[s.jsxs(K,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&s.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&s.jsx("blockquote",{className:"timeline-reply",children:t.text}),a.map(o=>s.jsx("div",{className:"timeline-note",children:o.text},o.id)),r.map(o=>s.jsx(Sr,{activation:o,result:i.find(c=>c.elementId===o.elementId),labelFor:n},o.id)),m.map(o=>s.jsxs("div",{className:`log-line log-${o.kind}`,children:[o.pending?"⏳ ":"",o.text]},o.id)),l.map(o=>s.jsxs("div",{className:"timeline-error",children:["⚠ ",o.text]},o.id))]})}function Cr({log:e,elementStats:n=[],incidents:t=[],labelFor:r=i=>i}){const i=h.useMemo(()=>Ar(e),[e]),[a,l]=h.useState(!1),d=h.useRef(null);h.useEffect(()=>{const o=d.current;o&&(o.scrollTop=o.scrollHeight)},[i]);const m=()=>{var g;const o={log:e.map(({id:p,...f})=>f),elementStats:n,incidents:t},c=JSON.stringify(o,null,2);(g=navigator.clipboard)!=null&&g.writeText&&navigator.clipboard.writeText(c).then(()=>{l(!0),setTimeout(()=>l(!1),1500)}).catch(()=>{})};return s.jsxs(ie,{className:"panel grow",children:[s.jsxs(oe,{children:[s.jsx(se,{children:"Activity"}),s.jsx(ae,{children:"Agent turns, model replies, and tool calls — read top to bottom as a story."})]}),s.jsxs(ce,{children:[s.jsx("div",{className:"timeline-toolbar",children:s.jsx(Z,{variant:"secondary",size:"sm",onClick:m,children:a?"Copied!":"Copy run as JSON"})}),s.jsx("div",{className:"timeline",ref:d,children:i.length===0?s.jsx("div",{className:"log-empty",children:"Press Run to start."}):i.map(o=>Dr(o)?s.jsx(Lr,{group:o,labelFor:r},`turn-${o.turn}-${o.entries[0].id}`):s.jsxs("div",{className:`log-line log-${o.kind}`,children:[o.pending?"⏳ ":"",o.text]},o.id))}),(n.length>0||t.length>0)&&s.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&s.jsxs("div",{className:"timeline-stats",children:[s.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),s.jsx("ul",{children:n.filter(o=>o.completed>0||(o.active??0)>0).map(o=>s.jsxs("li",{children:[s.jsx("code",{children:r(o.elementId)||o.elementId})," ","completed ",o.completed,o.active?`, ${o.active} active`:""]},o.elementId))})]}),t.length>0&&s.jsxs("div",{className:"timeline-incidents",children:[s.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),s.jsx("ul",{children:t.map((o,c)=>s.jsxs("li",{children:[s.jsx("code",{children:r(o.elementId)||o.elementId})," —"," ",o.reason]},`${o.elementId}-${c}`))})]})]})]})]})}const be={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function In(e){return`[data-tour="${e}"]`}function zr(e=location.search){return new URLSearchParams(e).get("tour")}function Pr(e,n){var t;return((t=e.elementStats.find(r=>r.elementId===n))==null?void 0:t.completed)??0}function Or(e,n){return!e||e.kind==="click"||!n?!1:e.kind==="activeElement"?n.activeElementIds.includes(e.elementId):Pr(n,e.elementId)>=(e.atLeast??1)}function Br(e){return"anchor"in e?In(e.anchor):`${In(be.diagram)} [data-element-id="${Rr(e.elementId)}"]`}function Rr(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function Ur(e){return e.map(n=>{const t=!!n.waitFor&&n.waitFor.kind!=="click";return{element:Br(n.target),popover:{title:n.title,description:t?`${n.description} (continues automatically once you reach that point — or use Next to skip ahead)`:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}})}async function Fr(e,n={}){var a;const[{driver:t}]=await Promise.all([ne(()=>import("./driver.js-bj_ppY-Q.js"),[]),ne(()=>Promise.resolve({}),__vite__mapDeps([0]))]),r=Ur(e),i=t({steps:r,showProgress:!0,allowClose:!0,skipMissingElement:!0,onHighlighted:(l,d,{index:m})=>{var o;m!==void 0&&((o=n.onIndexChange)==null||o.call(n,m))},onDestroyed:()=>{var l;(l=n.onDestroyed)==null||l.call(n)}});return i.drive(),(a=n.onIndexChange)==null||a.call(n,i.getActiveIndex()??0),{moveNext:()=>i.moveNext(),activeIndex:()=>i.getActiveIndex()??-1,destroy:()=>i.destroy()}}const Yr=300;function Qr(e,n){const[t,r]=h.useState(!1),i=h.useRef(null),a=h.useRef(0),l=h.useRef(-1),d=h.useRef(null),m=h.useRef(n);h.useEffect(()=>{m.current=n},[n]);const o=h.useCallback(()=>{d.current!==null&&(clearInterval(d.current),d.current=null)},[]),c=h.useRef(0),g=h.useCallback(()=>{var f;c.current+=1,o(),(f=i.current)==null||f.destroy(),i.current=null,r(!1)},[o]),p=h.useCallback(()=>{if(!e||e.steps.length===0||i.current)return;const f=c.current+=1;Fr(e.steps,{onIndexChange:b=>{a.current=b},onDestroyed:()=>{o(),i.current=null,r(!1)}}).then(b=>{if(f!==c.current){b.destroy();return}i.current=b,r(!0),d.current=setInterval(()=>{const N=a.current;if(N===l.current)return;const v=e.steps[N];v&&Or(v.waitFor,m.current())&&(l.current=N,b.moveNext())},Yr)})},[e,o]);return h.useEffect(()=>g,[g]),{active:t,start:p,stop:g}}const Ye=650,Qe="__agent__",Tn="__model__",jn="__template__:",$r=h.lazy(async()=>{await Promise.all([ne(()=>Promise.resolve({}),__vite__mapDeps([1])),ne(()=>Promise.resolve({}),__vite__mapDeps([2]))]);const{BpmnRuntimeView:e}=await ne(async()=>{const{BpmnRuntimeView:n}=await import("./vendor-bpmn-CiS4MrM6.js");return{BpmnRuntimeView:n}},__vite__mapDeps([3,4,5,6,7]));return{default:e}}),$e=h.lazy(()=>ne(()=>import("./MonacoEditor-KQHmpFhI.js").then(e=>e.M),__vite__mapDeps([8,4,9]))),Gr=h.lazy(()=>ne(()=>import("./vendor-modeler-BXeRxtyZ.js"),__vite__mapDeps([10,4,5,6,7,11,12,1,2]))),kn=h.lazy(async()=>{const{FormRenderer:e}=await ne(async()=>{const{FormRenderer:n}=await import("./FormRenderer-DhneLuEE.js");return{FormRenderer:n}},__vite__mapDeps([13,4,11,6,7,14]));return{default:e}});function Ge(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function Jr({example:e,initialBrainKind:n,initialTourId:t}){var cn,ln,dn,un,mn,pn,gn;const[r,i]=h.useState(e.bpmn),a=Nr();h.useEffect(()=>{n&&n!==a.kind&&a.setKind(n)},[]),h.useEffect(()=>{jr({brain:a.kind})},[a.kind]);const[l,d]=h.useState(()=>Object.fromEntries(e.handlers.map(y=>[y.elementId,y.source]))),[m,o]=h.useState(e.scriptedAgent??""),[c,g]=h.useState(()=>Oe(e.templates)),p=h.useMemo(()=>Yt(e,l,r,c),[e,l,r,c]),f=p.model,b=pr({bpmn:p.resolvedBpmn}),N=Qr(e.tour,()=>b.snapshot);h.useEffect(()=>{var y;t&&((y=e.tour)==null?void 0:y.id)===t&&N.start()},[]);const v=f.startFormId?((cn=e.forms)==null?void 0:cn[f.startFormId])??null:null,[w,T]=h.useState(()=>({...e.seed,...v?Er(v):{}})),[L,ee]=h.useState(f.agent?Qe:((ln=e.handlers[0])==null?void 0:ln.elementId)??""),[J,j]=h.useState(!1),[x,k]=h.useState(null),[U,F]=h.useState([]),[O,te]=h.useState({}),[we,S]=h.useState(!1),X=h.useRef(null),[pe,B]=h.useState({}),[R,W]=h.useState(!1),_e=h.useRef(null),ge=h.useRef(!1),Hn=h.useRef(0),Re=h.useRef({current:void 0}),rn=h.useRef({}),on=h.useRef({}),Zn=h.useMemo(()=>{const y=new Map;for(const _ of f.processes){for(const I of _.tasks)y.set(I.elementId,I.label);for(const I of _.agents){y.set(I.elementId,I.label);for(const A of I.tools)y.set(A.elementId,A.label)}for(const I of _.userTasks)y.set(I.elementId,I.label)}return _=>y.get(_)??_},[f]),V=h.useCallback(y=>{F(_=>{if(y.key){const I=_.findIndex(A=>A.key===y.key);if(I>=0){const A=[..._];return A[I]={...A[I],...y},A}}return[..._,{...y,id:Hn.current++}].slice(-80)})},[]),he=h.useMemo(()=>{var y;return((y=b.snapshot)==null?void 0:y.userTasks.find(_=>_.state==="Created"))??null},[b.snapshot]),Te=h.useMemo(()=>{const y=f.processes.flatMap(I=>I.tasks),_=new Map;for(const I of e.handlers){if(!I.manualControl)continue;const A=y.find(Q=>Q.elementId===I.elementId);A&&_.set(A.jobType,{...I.manualControl,elementId:I.elementId})}return _},[e.handlers,f]),fe=h.useMemo(()=>{if(!b.snapshot)return null;for(const y of b.snapshot.jobs){const _=Te.get(y.jobType);if(_&&y.state==="Created")return{job:y,control:_}}return null},[b.snapshot,Te]),sn=h.useMemo(()=>{if(!f.agent||!b.snapshot)return[];const y=new Map(b.snapshot.elementStats.map(_=>[_.elementId,_.completed]));return f.agent.tools.filter(_=>(y.get(_.elementId)??0)===0)},[f.agent,b.snapshot]),re=he?f.userTasks.find(y=>y.elementId===he.elementId):void 0,je=re!=null&&re.formId?((dn=e.forms)==null?void 0:dn[re.formId])??null:null,ke=h.useCallback(async(y,_,I)=>{var H;let A=I,Q=0;for(;ge.current&&A&&A.completedInstances<1&&Q++<80;){const C=await b.stepWorkers(y,{agents:_});A=(C==null?void 0:C.snapshot)??A;const $=(H=A.instances[0])==null?void 0:H.variables;if($&&Object.keys($).length&&te({...$}),A.userTasks.some(q=>q.state==="Created")){V({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!C||C.handled===0)break;await new Promise(q=>setTimeout(q,Ye))}return A&&A.completedInstances>=1?V({kind:"done",text:"✅ process instance completed"}):A&&A.incidentElementIds.length>0&&V({kind:"error",text:"A job failed — incident on the diagram"}),A},[b,V]),an=h.useCallback(async y=>{var A,Q,H;if(!fe||ge.current)return;const{job:_,control:I}=fe;ge.current=!0,j(!0);try{let C,$;if(y==="complete")C=b.completeJobManually(_.jobType,"{}"),$="  ↳ completed normally";else if(I.action.kind==="timer"){const q=((Q=(A=b.snapshot)==null?void 0:A.timers[0])==null?void 0:Q.dueInMs)??0;C=b.advanceTime(Math.max(q,0)+1),$="  ↳ advanced the clock — timer fired"}else{const{errorCode:q,message:Ne}=I.action;C=b.throwJobError(_.jobType,q,Ne),$=`  ↳ threw BPMN error ${q}: ${Ne}`}if(C){V({kind:"vars",text:$,elementId:_.elementId});const q=(H=C.instances[0])==null?void 0:H.variables;q&&te({...q}),await new Promise(Ne=>setTimeout(Ne,Ye)),await ke(rn.current,on.current,C)}else V({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:_.elementId})}finally{ge.current=!1,j(!1)}},[fe,b,V,ke]),Wn=h.useCallback(async()=>{if(b.phase!=="ready"||ge.current||p.hasErrors||X.current&&!X.current.validate())return;k(null);let y=null;try{f.agent&&m.trim()&&(y=Dt(m))}catch(Q){k(Q instanceof Error?Q.message:String(Q));return}Re.current={current:void 0};const _=Lt(f,p.handlers,V,Re.current);for(const Q of Te.keys())delete _[Q];const I={};if(f.agents.length>0){if(a.kind!=="scripted"&&a.chat){const H=new Map;for(const C of f.agents)H.set(C.jobType,[...H.get(C.jobType)??[],C]);for(const[C,$]of H)I[C]=qt($,a.chat,V,{turnRef:Re.current,requiredTools:e.requiredTools})}else if(y&&f.agent){const H=f.agent.elementId;I[f.agent.jobType]=async C=>{if(C.elementId!==H)throw new Error(`No scripted agent handler for "${C.elementId}" — only "${H}" (the primary process's first agent host) is driven by the scripted brain. Use a live brain to exercise more than one host.`);const $=await y(C),q=($.activateElements??[]).map(Ne=>Ne.elementId).join(", ");return V({kind:"agent",text:$.completionConditionFulfilled?"🤖 scripted agent: done":`🤖 scripted agent: calling ${q||"(nothing)"}`}),$}}}ge.current=!0,j(!0),F([]),B({});const A={...e.seed,...w};te(A),rn.current=_,on.current=I;try{const Q=b.redeploy(r),H=(Q==null?void 0:Q[0])??f.processId;V({kind:"start",text:`Starting "${H}" — ${f.agent?a.kind==="scripted"||!a.chat?"scripted brain":`live brain (${a.modelInUse??a.kind})`:"no agent in this model"}`});const C=b.createInstance(H,JSON.stringify(A));await new Promise($=>setTimeout($,Ye)),await ke(_,I,C)}finally{ge.current=!1,j(!1)}},[b,e,p,r,m,w,f,a,V,Te,ke]),qn=h.useCallback(()=>{ge.current=!1,j(!1),b.reset(),F([]),te({})},[b]),Kn=h.useCallback(()=>{if(!he||_e.current&&!_e.current.validate())return;const y=b.completeUserTask(he.key,JSON.stringify(pe));V({kind:"human",text:`👤 ${Ge(pe)}`}),y&&y.completedInstances>=1&&V({kind:"done",text:"✅ process instance completed"})},[he,pe,b,V]),Xn=h.useMemo(()=>{var y,_;return b.phase==="loading"?s.jsx(K,{variant:"neutral",children:"Booting engine…"}):b.phase==="error"?s.jsx(K,{variant:"danger",children:"Engine error"}):J?s.jsx(K,{variant:"info",children:"Running…"}):(((y=b.snapshot)==null?void 0:y.incidentElementIds.length)??0)>0?s.jsx(K,{variant:"danger",children:"Incident"}):he?s.jsx(K,{variant:"warning",children:"Waiting for a human"}):(((_=b.snapshot)==null?void 0:_.completedInstances)??0)>=1?s.jsx(K,{variant:"success",children:"Completed"}):s.jsx(K,{variant:"neutral",children:"Ready"})},[b.phase,b.snapshot,J,he]);return s.jsxs("div",{className:"runner",children:[s.jsxs("section",{className:"intro",children:[s.jsx("h1",{children:e.title}),s.jsx("p",{children:e.blurb}),s.jsxs("div",{className:"controls",children:[s.jsx(Z,{"data-tour":be.runButton,onClick:()=>void Wn(),disabled:b.phase!=="ready"||J||p.hasErrors||!!v&&!we,children:"▶ Run"}),s.jsx(Z,{variant:"secondary",onClick:qn,disabled:b.phase!=="ready",children:"↺ Reset"}),e.tour&&s.jsx(Z,{variant:"secondary",onClick:N.start,disabled:N.active,children:N.active?"Touring…":`🧭 ${e.tour.label}`}),Xn]}),b.phase==="error"&&s.jsxs(le,{variant:"destructive",children:[s.jsx(de,{children:"Engine error"}),s.jsx(ue,{children:b.error})]}),x&&s.jsxs(le,{variant:"destructive",children:[s.jsx(de,{children:"Code didn't compile"}),s.jsx(ue,{children:x})]}),p.hasErrors&&s.jsxs(le,{variant:"destructive",children:[s.jsx(de,{children:"Run is disabled — the diagram has unresolved references"}),s.jsx(ue,{children:s.jsx("ul",{className:"diagnostics",children:p.diagnostics.filter(y=>y.severity==="error").map((y,_)=>s.jsx("li",{children:y.message},_))})})]}),!p.hasErrors&&p.diagnostics.length>0&&s.jsxs(le,{children:[s.jsx(de,{children:"Heads up"}),s.jsx(ue,{children:s.jsx("ul",{className:"diagnostics",children:p.diagnostics.map((y,_)=>s.jsx("li",{children:y.message},_))})})]})]}),s.jsxs("div",{className:"grid",children:[s.jsxs("div",{className:"col",children:[s.jsxs(ie,{className:"panel","data-tour":be.diagram,children:[s.jsxs(oe,{children:[s.jsx(se,{children:"Process"}),s.jsxs(ae,{children:[f.processName," — live token (green), incidents (red)."]})]}),s.jsx(ce,{children:s.jsx(h.Suspense,{fallback:s.jsx("div",{className:"diagram-fallback",children:b.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:s.jsx($r,{xml:p.resolvedBpmn,activeIds:((un=b.snapshot)==null?void 0:un.activeElementIds)??[],incidentIds:((mn=b.snapshot)==null?void 0:mn.incidentElementIds)??[],className:"diagram"})})})]}),he&&s.jsxs(ie,{className:"panel",children:[s.jsxs(oe,{children:[s.jsx(se,{children:(re==null?void 0:re.label)??"Human task"}),s.jsx(ae,{children:je?`Rendered from the model's form "${re==null?void 0:re.formId}".`:"This task has no linked form — complete it with no variables."})]}),s.jsxs(ce,{children:[sn.length>0&&s.jsxs(le,{variant:"destructive",children:[s.jsx(de,{children:"The agent didn't finish its checks"}),s.jsxs(ue,{children:["It completed without running"," ",sn.map(y=>y.label||y.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),je&&s.jsx(h.Suspense,{fallback:s.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:s.jsx(kn,{ref:_e,schema:je,values:pe,onChange:(y,_)=>B(I=>({...I,[y]:_})),context:O,onValidityChange:W})}),s.jsx(Z,{onClick:Kn,disabled:!!je&&!R,children:"Complete task"})]})]}),fe&&s.jsxs(ie,{className:"panel",children:[s.jsxs(oe,{children:[s.jsx(se,{children:fe.control.label}),s.jsx(ae,{children:"This job is held here on purpose — pick how it resolves."})]}),s.jsx(ce,{children:s.jsxs("div",{className:"controls",children:[s.jsx(Z,{onClick:()=>void an("complete"),disabled:J,children:fe.control.completeLabel??"✅ Complete normally"}),s.jsx(Z,{variant:"secondary",onClick:()=>void an("action"),disabled:J,children:fe.control.action.label})]})})]}),s.jsxs("div",{className:"row",children:[s.jsxs(ie,{className:"panel grow","data-tour":be.variablesPanel,children:[s.jsxs(oe,{children:[s.jsx(se,{children:"Variables"}),s.jsx(ae,{children:"The instance payload, live."})]}),s.jsx(ce,{children:s.jsx("pre",{className:"vars",children:Ge(O,2)})})]}),s.jsx(Cr,{log:U,elementStats:(pn=b.snapshot)==null?void 0:pn.elementStats,incidents:(gn=b.snapshot)==null?void 0:gn.incidents,labelFor:Zn})]})]}),s.jsxs("div",{className:"col",children:[f.agent&&s.jsxs(ie,{className:"panel","data-tour":be.brainPanel,children:[s.jsxs(oe,{children:[s.jsx(se,{children:"Brain"}),s.jsxs(ae,{children:["What drives “",f.agent.label,"”. The model recommends; the process governs."]})]}),s.jsx(ce,{children:s.jsx(kr,{brain:a})})]}),s.jsxs(ie,{className:"panel",children:[s.jsxs(oe,{children:[s.jsx(se,{children:"Start"}),s.jsx(ae,{children:f.startFormId?`The model's start form "${f.startFormId}".`:"The starting payload."})]}),s.jsxs(ce,{children:[e.scenarios&&s.jsx("div",{className:"scenarios",children:e.scenarios.map(y=>s.jsx(Z,{size:"sm",variant:"secondary",disabled:J,onClick:()=>T(_=>({..._,...y.variables})),children:y.label},y.label))}),v?s.jsx(h.Suspense,{fallback:s.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:s.jsx(kn,{ref:X,schema:v,values:w,onChange:(y,_)=>T(I=>({...I,[y]:_})),disabled:J,onValidityChange:S})}):s.jsx("pre",{className:"vars",children:Ge(w,2)})]})]}),s.jsxs(ie,{className:"panel editors","data-tour":be.codePanel,children:[s.jsxs(oe,{children:[s.jsx(se,{children:"Code"}),s.jsx(ae,{children:"One handler per BPMN element. Return variables to merge, or throw to fail the job."})]}),s.jsx(ct,{}),s.jsx(ce,{children:s.jsx(h.Suspense,{fallback:s.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:s.jsxs(lt,{value:L,onValueChange:ee,children:[s.jsxs(dt,{children:[s.jsx(De,{value:Tn,children:"model"}),f.agent&&s.jsx(De,{value:Qe,children:"agent (scripted)"}),e.handlers.map(y=>{var _;return s.jsx(De,{value:y.elementId,children:((_=f.tasks.find(I=>I.elementId===y.elementId))==null?void 0:_.label)??y.elementId},y.elementId)}),Object.keys(c).map(y=>s.jsx(De,{value:jn+y,children:y},y))]}),s.jsxs(Ae,{value:Tn,children:[s.jsxs("div",{className:"editor-meta",children:[s.jsx("strong",{children:"Model"}),s.jsx("code",{children:"edit the diagram visually — Run re-checks it below"}),s.jsx(Z,{variant:"secondary",size:"sm",onClick:()=>i(e.bpmn),disabled:r===e.bpmn,children:"Revert to original"})]}),s.jsx(Gr,{value:r,onChange:i})]}),f.agent&&s.jsxs(Ae,{value:Qe,children:[s.jsxs("div",{className:"editor-meta",children:[s.jsx("strong",{children:f.agent.label}),s.jsx("code",{children:a.kind==="scripted"||!a.chat?"in use":"unused — a live brain is connected"})]}),s.jsx("div",{className:"editor-wrap",children:s.jsx($e,{height:"360px",defaultLanguage:"javascript",value:m,onChange:y=>o(y??""),options:Je})})]}),e.handlers.map(y=>{var _;return s.jsxs(Ae,{value:y.elementId,children:[s.jsxs("div",{className:"editor-meta",children:[s.jsx("strong",{children:((_=f.tasks.find(I=>I.elementId===y.elementId))==null?void 0:_.label)??y.elementId}),s.jsx("code",{children:y.standsInFor??y.elementId})]}),s.jsx("div",{className:"editor-wrap",children:s.jsx($e,{height:"360px",defaultLanguage:"javascript",value:l[y.elementId],onChange:I=>d(A=>({...A,[y.elementId]:I??""})),options:Je})})]},y.elementId)}),Object.keys(c).map(y=>s.jsxs(Ae,{value:jn+y,children:[s.jsxs("div",{className:"editor-meta",children:[s.jsx("strong",{children:y}),s.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+y+"}}"]})]}),s.jsx("div",{className:"editor-wrap",children:s.jsx($e,{height:"360px",defaultLanguage:"markdown",value:c[y],onChange:_=>g(I=>Oe(I,{[y]:_??""})),options:Je})})]},y))]})})})]}),f.agent&&s.jsxs(ie,{className:"panel",children:[s.jsxs(oe,{children:[s.jsx(se,{children:"Tools, as the model sees them"}),s.jsxs(ae,{children:["Read from the diagram — element name, documentation, and every",s.jsx("code",{children:" fromAi(…)"})," argument."]})]}),s.jsx(ce,{children:s.jsx("ul",{className:"tool-list",children:f.agent.tools.map(y=>s.jsxs("li",{children:[s.jsx("code",{children:y.elementId}),s.jsxs("span",{children:[" — ",y.documentation||y.label]}),y.args.length>0&&s.jsx("ul",{children:y.args.map(_=>s.jsxs("li",{children:[s.jsxs("code",{children:[_.name,": ",_.type]})," ","— ",_.description]},_.name))})]},y.elementId))})})]})]})]})]})}const Je={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},Vr=`You are a demo workflow assistant for fictional compliance checks.

You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return. Each tool takes only its own arguments: putting a value meant for one tool into a different tool's arguments does not count as having used it.

Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd.

Finish by calling RecordComplianceDecision, once, with the decision you reached. That call is what records it - nothing else does, and no other tool's arguments can stand in for it. Do not report that you are done until RecordComplianceDecision has actually run. What happens after it is handled automatically.
`,Hr=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,Zr={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:be.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"},waitFor:{kind:"activeElement",elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"},waitFor:{kind:"elementCompleted",elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:be.variablesPanel}}],successEvent:{kind:"instanceCompleted"}},Wr=`<?xml version="1.0" encoding="UTF-8"?>
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
`,qr="Camunda Cloud",Kr="8.10.0",Xr={name:"Camunda Web Modeler",version:"9b5d5ef"},ei=19,ni="seed-export-shipment-ready",ti=[{text:"# Use a predefined scenario...",type:"text",layout:{row:"Row_04pl1rt",columns:null},id:"Field_0a6kzzq"},{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Use pre-defined sceanrio - to use leave Shipment notes below blank.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{text:`The following shipments notes are used:
* Likely cleared: SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53.
* Likely flagged: SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1.`,type:"text",layout:{row:"Row_1h31mub",columns:null},id:"Field_0j1vwd9"},{text:"# ...or hand in your own data",type:"text",layout:{row:"Row_1wu4opr",columns:null},id:"Field_12u5gzd"},{label:"Shipment notes",description:"If set, overrides the scenario above. Leave blank to use the scenario selected above. The agent reads this to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],ri="default",ii={executionPlatform:qr,executionPlatformVersion:Kr,exporter:Xr,schemaVersion:ei,id:ni,components:ti,type:ri},oi="Camunda Cloud",si="8.10.0",ai={name:"Camunda Web Modeler",version:"9b5d5ef"},ci=19,li="seed-export-compliance-review",di=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],ui="default",mi={executionPlatform:oi,executionPlatformVersion:si,exporter:ai,schemaVersion:ci,id:li,components:di,type:ui},pi=Object.assign({"./prompts/system-prompt.md":Vr,"./prompts/user-prompt.md":Hr}),gi=Oe(Object.fromEntries(Object.entries(pi).map(([e,n])=>[zt(e),n.trimEnd()]))),En="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",hi="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",bi=`async (job) => {
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
}`,fi=`async (job, { text, sleep, trace }) => {
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
}`,yi=`async (job, { text, sleep, trace }) => {
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
}`,Mi=`async (job, { num, sleep }) => {
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
}`,wi=`async (job, { text, trace }) => {
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
}`,_i=`async (job, { sleep }) => {
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
}`,Ni={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:Wr,forms:{"seed-export-shipment-ready":ii,"seed-export-compliance-review":mi},seed:{scenario:En,shipmentNotes:""},scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:En,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:hi,shipmentNotes:""}}],scriptedAgent:bi,templates:gi,tour:Zr,requiredTools:["RecordComplianceDecision"],handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:fi},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:yi},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:Mi},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:wi},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:_i}]},xi=`<?xml version="1.0" encoding="UTF-8"?>
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
`,vi=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Ii=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,Ti=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,ji={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:xi,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:vi},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Ii},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Ti}]},ki=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Ei=`async (job, { text, num, sleep, trace }) => {
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
}`,Di={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:ki,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:Ei}]},Ai=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Si=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Li=`async (job, { num, sleep }) => {
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
}`,Ci=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,zi={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:Ai,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Si},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Li,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Ci,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},Ce=[Di,Ni,ji,zi];function tn(){return"/pr-preview/pr-61/"}function Pi(e){const n=tn();return e.startsWith(n)?"/"+e.slice(n.length):e}function Oi(e=location.pathname){const t=Pi(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function Bi(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function Ri(){return tn()}function Dn(e){return`${tn()}examples/${encodeURIComponent(e)}`}function An(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function Sn(){return{route:Oi(),embed:Bi()}}function Ui(){const[e,n]=h.useState(Sn);return h.useEffect(()=>{const t=()=>n(Sn());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const Fi="web-demo-framework:height",Yi="web-demo-framework:request-height";function Qi(e){return{type:Fi,height:Math.ceil(e)}}const Ln="embed-height-auto";function $i(e){h.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(Ln);let t=-1;const r=(l=!1)=>{const d=document.documentElement.scrollHeight;!l&&Math.abs(d-t)<2||(t=d,window.parent.postMessage(Qi(d),"*"))},i=l=>{if(l.source!==window.parent)return;const d=l.data;!d||d.type!==Yi||r(!0)};window.addEventListener("message",i),r();const a=new ResizeObserver(()=>r());return a.observe(n),()=>{a.disconnect(),window.removeEventListener("message",i),n.classList.remove(Ln)}},[e])}function Gi(){const{route:e,embed:n}=Ui(),t=Jn().brain,r=zr();$i(n);const i=e.kind==="example"?e.id:Ce[0].id,a=Ce.find(m=>m.id===i)??Ce[0],l=m=>{An(Dn(m),{hash:location.hash})},d=s.jsxs(s.Fragment,{children:[!n&&e.kind==="gallery"&&s.jsx("nav",{className:"example-picker",children:Ce.map(m=>s.jsx(Z,{size:"sm",variant:m.id===a.id?"default":"secondary",onClick:()=>l(m.id),children:m.title},m.id))}),!n&&e.kind==="example"&&s.jsx("div",{className:"example-nav",children:s.jsx(Z,{size:"sm",variant:"secondary",onClick:()=>An(Ri()),children:"← All examples"})}),s.jsxs("div",{className:"example-meta",children:[a.docsUrl&&s.jsx("a",{className:"docs-link",href:a.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&s.jsx("a",{className:"open-full-page",href:Dn(a.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:"Open full page ↗"})]}),s.jsx(Jr,{example:a,initialBrainKind:t,initialTourId:r},a.id)]});return n?s.jsx("div",{className:"c4-ui app-shell app-embed",children:s.jsx("main",{id:"main",className:"layout layout-embed",children:d})}):s.jsxs("div",{className:"c4-ui app-shell",children:[s.jsx(ut,{appName:"Runnable Camunda examples",trailing:s.jsx("span",{className:"app-subtitle",children:"model + code + optional LLM, in your browser"})}),s.jsx("main",{id:"main",className:"layout",children:d})]})}tt.createRoot(document.getElementById("root")).render(s.jsx(h.StrictMode,{children:s.jsx(mt,{children:s.jsx(Gi,{})})}));export{Rn as J,ne as _,Zi as c};
