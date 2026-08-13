const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/driver-CTZuBZOi.css","assets/diagram-js-DAKGYcfb.css","assets/bpmn-embedded-BQn1nICX.css","assets/vendor-bpmn-GWTO5rmy.js","assets/vendor-react-WnIiAG2f.js","assets/NavigatedViewer-CmIohCIa.js","assets/vendor-design-system-B7Z0kB51.js","assets/vendor-design-system-BnZt7mft.css","assets/MonacoEditor-BxekaEFJ.js","assets/MonacoEditor-srK8mWDQ.css","assets/vendor-modeler-zC2zeGNm.js","assets/parser-Cn7g5BiQ.js","assets/ModelEditor-Dwlgp6JA.css","assets/FormRenderer-7R-_gVPf.js","assets/FormRenderer-D1JIHOW6.css"])))=>i.map(i=>d[i]);
var Kn=Object.defineProperty;var Xn=(e,n,t)=>n in e?Kn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var G=(e,n,t)=>Xn(e,typeof n!="symbol"?n+"":n,t);import{r as h,j as o,i as et}from"./vendor-react-WnIiAG2f.js";import{B as H,a as W,L as Te,S as nt,b as tt,c as rt,d as it,e as ot,A as oe,f as se,g as ae,I as Be,C as ee,h as ne,i as te,j as re,k as ie,l as st,T as at,m as ct,n as je,o as ke,p as lt,q as dt}from"./vendor-design-system-B7Z0kB51.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const ut="modulepreload",mt=function(e){return"/pr-preview/pr-56/"+e},pn={},q=function(n,t,r){let s=Promise.resolve();if(t&&t.length>0){let c=function(i){return Promise.all(i.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),m=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=c(t.map(i=>{if(i=mt(i),i in pn)return;pn[i]=!0;const d=i.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${g}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":ut,d||(p.as="script"),p.crossOrigin="",p.href=i,m&&p.setAttribute("nonce",m),document.head.appendChild(p),d)return new Promise((f,b)=>{p.addEventListener("load",f),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${i}`)))})}))}function a(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return s.then(c=>{for(const l of c||[])l.status==="rejected"&&a(l.reason);return n().catch(a)})},pt="io.camunda.agenticai:aiagent",he="http://www.omg.org/spec/BPMN/20100524/MODEL",gt="http://camunda.org/schema/zeebe/1.0";function Ge(e,n){return Array.from(e.getElementsByTagNameNS(gt,n))}function An(e,n){return Ge(e,n).filter(t=>ht(t)===e)}function ht(e){let n=e.parentElement;for(;n;){if(n.namespaceURI===he&&n.localName!=="extensionElements")return n;n=n.parentElement}return null}function qe(e){const n=An(e,"taskDefinition")[0],t=n==null?void 0:n.getAttribute("type");return t||(e.localName==="scriptTask"?e.getAttribute("id")??null:null)}function bt(e){const n=Array.from(e.children).find(t=>t.namespaceURI===he&&t.localName==="documentation");return((n==null?void 0:n.textContent)??"").trim()}function gn(e){if(!e)return"";const n=e.startsWith("=")?e.slice(1):e,t=n.match(/"((?:[^"\\]|\\.)*)"/g);return t?t.map(r=>r.slice(1,-1).replace(/\\n/g,`
`).replace(/\\t/g,"	").replace(/\\"/g,'"').replace(/\\\\/g,"\\")).join("").trim():n.trim()}function ft(e){const n=[],t=r=>{for(const s of Array.from(r.attributes))n.push(s.value);for(const s of Array.from(r.children))t(s)};return t(e),n.join(`
`)}function yt(e){const n=ft(e),t=/fromAi\(\s*toolCall\.([A-Za-z_$][\w$]*)\s*,\s*"((?:[^"\\]|\\.)*)"\s*(?:,\s*"(\w+)")?/g,r=[],s=new Set;for(const a of n.matchAll(t)){const c=a[1];s.has(c)||(s.add(c),r.push({name:c,description:(a[2]??"").replace(/&#10;/g,`
`).replace(/\\"/g,'"').replace(/&quot;/g,'"').replace(/&#39;/g,"'").trim(),type:a[3]??"string"}))}return r}function Mt(e){const n={};for(const t of An(e,"input")){const r=t.getAttribute("target");r&&(n[r]=t.getAttribute("source")??"")}return n}function wt(e){return Array.from(e.getElementsByTagNameNS(he,"adHocSubProcess")).filter(n=>(qe(n)??"").startsWith(pt))}function _t(e,n){const t=Mt(e),r=Number((t["data.limits.maxModelCalls"]??"").replace(/^=/,""));return{elementId:e.getAttribute("id")??"agent",label:e.getAttribute("name")??"Agent",jobType:qe(e),systemPrompt:gn(t["data.systemPrompt.prompt"]),userPrompt:gn(t["data.userPrompt.prompt"]),maxModelCalls:Number.isFinite(r)&&r>0?r:10,tools:n}}function xt(e,n){var g;const t=e.getAttribute("id")??"",r=e.getAttribute("name")??t,s=wt(e);s.length>1&&n.push({severity:"warning",elementId:s.map(p=>p.getAttribute("id")).join(", "),message:`Process "${r}" hosts ${s.length} AI Agent sub-processes (${s.map(p=>p.getAttribute("id")).join(", ")}). Each gets its own independent agent state (turn counter, called tools) — the run itself is shared across hosts, but each host's agent state within it is not.`});const a=[],c=new Map(s.map(p=>[p,[]]));for(const p of Array.from(e.getElementsByTagName("*"))){if(p.namespaceURI!==he||s.includes(p))continue;const f=qe(p),b=p.getAttribute("id");if(!f||!b)continue;const N=s.filter(j=>j.contains(p)),I=N.find(j=>N.every(S=>S===j||S.contains(j))),w={elementId:b,label:p.getAttribute("name")??b,jobType:f,documentation:bt(p),isTool:I!=null};a.push(w),I&&c.get(I).push({elementId:b,label:w.label,jobType:f,documentation:w.documentation,args:yt(p)})}const l=s.map(p=>_t(p,c.get(p))),m=Array.from(e.getElementsByTagNameNS(he,"userTask")).map(p=>{var f;return{elementId:p.getAttribute("id")??"",label:p.getAttribute("name")??p.getAttribute("id")??"",formId:((f=Ge(p,"formDefinition")[0])==null?void 0:f.getAttribute("formId"))??void 0}}),i=e.getElementsByTagNameNS(he,"startEvent")[0],d=i?((g=Ge(i,"formDefinition")[0])==null?void 0:g.getAttribute("formId"))??void 0:void 0;return{processId:t,processName:r,tasks:a,agents:l,userTasks:m,startFormId:d}}function Nt(e,n={}){const t=new DOMParser().parseFromString(e,"application/xml"),r=t.getElementsByTagName("parsererror")[0];if(r)throw new Error(`Invalid BPMN XML: ${r.textContent}`);const s=Array.from(t.getElementsByTagNameNS(he,"process"));if(s.length===0)throw new Error("No <bpmn:process> in the diagram.");const a=[],c=s.map(m=>xt(m,a));let l=n.processId?c.find(m=>m.processId===n.processId):void 0;return n.processId&&!l&&a.push({severity:"warning",message:`Requested process "${n.processId}" not found — falling back to "${c[0].processId}".`}),l??(l=c[0]),c.length>1&&a.push({severity:"warning",message:`Diagram has ${c.length} <bpmn:process> elements (${c.map(m=>m.processId).join(", ")}); using "${l.processId}" as the active process. Pass a processId to parseModel to target another.`}),{processes:c,diagnostics:a,processId:l.processId,processName:l.processName,tasks:l.tasks,agent:l.agents[0]??null,agents:c.flatMap(m=>m.agents),userTasks:l.userTasks,startFormId:l.startFormId}}function It(){return`<!doctype html><html><head><meta charset="utf-8"></head><body><script>
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
  <\/script></body></html>`}function Sn(e,n={}){const{timeoutMs:t=5e3,onTrace:r}=n,s=`${Date.now()}-${Math.random().toString(36).slice(2)}`;return new Promise((a,c)=>{const l=document.createElement("iframe");l.setAttribute("sandbox","allow-scripts"),l.style.display="none",l.setAttribute("aria-hidden","true");let m=!1,i;const d=()=>{i&&clearTimeout(i),window.removeEventListener("message",p),l.remove()},g=f=>{m||(m=!0,d(),f())};function p(f){var N;if(f.source!==l.contentWindow)return;const b=f.data;if(!(!b||typeof b!="object")){if(b.kind==="ready"){const I=e.job,w=e.kind==="run-handler"?{kind:"run-handler",id:s,source:e.source,job:I}:{kind:"run-agent",id:s,source:e.source,job:I};(N=l.contentWindow)==null||N.postMessage(w,"*");return}"id"in b&&b.id!==s||(b.kind==="trace"?r==null||r(b.text):b.kind==="result"?g(()=>a(b.value)):b.kind==="error"&&g(()=>c(new Error(b.message))))}}window.addEventListener("message",p),i=setTimeout(()=>{g(()=>c(new Error(`Handler timed out after ${t}ms — the sandboxed run was terminated.`)))},t),l.srcdoc=It(),document.body.appendChild(l)})}function Ln(e){return{key:e.key,type:e.type,elementId:e.elementId,instanceKey:e.instanceKey,variables:e.variables??{}}}function vt(e,n,t){return Sn({kind:"run-handler",source:e,job:Ln(n)},{onTrace:t.trace})}function Tt(e,n){return Sn({kind:"run-agent",source:e,job:Ln(n)})}function Cn(e,n){try{new Function(`"use strict"; return (${e});`)}catch{throw new Error(`${n} has a syntax error.`)}}function jt(e){return Cn(e,"Handler code"),(n,t)=>vt(e,n,t)}function kt(e){return Cn(e,"Agent code"),n=>Tt(e,n)}function Et(e,n,t){return{sleep:r=>new Promise(s=>setTimeout(s,r)),trace:r=>n({kind:"tool",text:`   ${r}`,elementId:e.elementId,turn:t}),text:(r,s="")=>{const a=e.variables[r];return typeof a=="string"?a:a==null?s:String(a)},num:(r,s=0)=>{const a=e.variables[r],c=typeof a=="number"?a:Number(a);return Number.isFinite(c)?c:s}}}function Dt(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function At(e,n,t,r){const s={},a=e.processes.flatMap(l=>l.tasks),c=new Map(a.map(l=>[l.elementId,l.label]));for(const l of a)s[l.jobType]||(s[l.jobType]=async m=>{const i=n[m.elementId];if(!i)throw new Error(`No handler registered for ${m.elementId} (job type ${m.type})`);const d=c.get(m.elementId)??m.elementId,g=r==null?void 0:r.current;t({kind:"tool",text:`▶ ${d}`,elementId:m.elementId,turn:g});const p=await i(m,Et(m,t,g));return t({kind:"vars",text:`  ↳ ${Dt(p)}`,elementId:m.elementId,result:p,turn:g}),p});return s}const St=/\{\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*\}\}/g;function Le(...e){const n=Object.create(null);for(const t of e)if(t)for(const r of Object.keys(t))n[r]=t[r];return n}function Lt(e){return(e.split("/").pop()??e).replace(/\.[^./]+$/,"")}function zn(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ct(e){return zn(e).replace(/"/g,"&quot;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;")}function zt(e){return e.replace(/\\/g,"\\\\").replace(/&/g,"&amp;").replace(/"/g,"\\&#34;").replace(/\n/g,"&#10;").replace(/\t/g,"&#9;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pt(e){return JSON.stringify(e).slice(1,-1)}function Ot(e,n){const t=e.lastIndexOf("<",n),r=e.lastIndexOf(">",n);if(t<=r)return"text";const s=e.slice(t,n);if((s.match(/"/g)??[]).length%2===0)return"text";const c=s.lastIndexOf('"');return(s.slice(c+1).match(/&#34;|&quot;/g)??[]).length%2===1?"feel-literal":"attribute"}function Bt(e,n,t="xml"){const r=[],s=new Set;return{result:e.replace(St,(c,l,m)=>{const i=l.trim();if(!Object.prototype.hasOwnProperty.call(n,i))return s.has(i)||(s.add(i),r.push(i)),c;const d=n[i];if(t==="json")return Pt(d);const g=Ot(e,m);return g==="feel-literal"?zt(d):g==="attribute"?Ct(d):zn(d)}),unresolved:r}}function Rt(){return{processes:[],diagnostics:[],processId:"",processName:"",tasks:[],agent:null,agents:[],userTasks:[],startFormId:void 0}}function Ut(e,n={},t=e.bpmn,r={}){const s=[],a=Le(e.templates,r),{result:c,unresolved:l}=Bt(t,a,"xml");for(const w of l)s.push({severity:"warning",message:`Template placeholder "{{${w}}}" has no matching prompt/template content — left in the model as-is, not substituted.`});let m;try{m=Nt(c)}catch(w){return s.push({severity:"error",message:w instanceof Error?w.message:String(w)}),{resolvedBpmn:c,model:Rt(),handlers:{},forms:{},diagnostics:s,hasErrors:!0}}s.push(...m.diagnostics);const i=m.processes.flatMap(w=>w.tasks),d=new Map(e.handlers.map(w=>[w.elementId,w.source])),g={};for(const w of i){const j=n[w.elementId]??d.get(w.elementId);if(j===void 0){s.push({severity:"error",elementId:w.elementId,jobType:w.jobType,message:`No handler for "${w.label}" (${w.elementId}, job type "${w.jobType}"). Add a handler for this element, or remove it from the diagram.`});continue}try{g[w.elementId]=jt(j)}catch(S){s.push({severity:"error",elementId:w.elementId,jobType:w.jobType,message:`"${w.label}" (${w.elementId}): handler code didn't compile — ${S instanceof Error?S.message:String(S)}`})}}const p=new Set(i.map(w=>w.elementId)),f=new Set([...d.keys(),...Object.keys(n)]);for(const w of f)p.has(w)||s.push({severity:"error",elementId:w,message:`Handler "${w}" doesn't match any element in the current diagram — likely orphaned by a rename. Rename it back, or remove the handler.`});const b={},N=e.forms??{},I=(w,j)=>{if(!w)return;const S=N[w];S?b[w]=S:s.push({severity:"error",formId:w,message:`${j} references form "${w}", which has no matching schema.`})};for(const w of m.processes){I(w.startFormId,`The start event of process "${w.processName}"`);for(const j of w.userTasks)I(j.formId,`User task "${j.label}" (${j.elementId})`)}return{resolvedBpmn:c,model:m,handlers:g,forms:b,diagnostics:s,hasErrors:s.some(w=>w.severity==="error")}}function Ft(e){const n=e.indexOf("{");if(n<0)return null;let t=0;for(let r=n;r<e.length;r++)if(e[r]==="{")t++;else if(e[r]==="}"&&(t--,t===0))try{const s=JSON.parse(e.slice(n,r+1));return typeof s=="object"&&s!==null&&!Array.isArray(s)?s:null}catch{return null}return null}function Ve(e,n=220){const t=e.replace(/\s+/g," ").trim();return t.length>n?`${t.slice(0,n-1)}…`:t}function hn(e){const n=e.arguments??e.args??e.parameters??e.input;return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}function bn(e){if(!e)return[];const n=e.tool??e.name??e.action;if(typeof n=="string"&&n.trim())return[{name:n.trim(),args:hn(e)}];const t=e.tools??e.tool_calls??e.toolset??e.actions,r=Array.isArray(t)?t:Object.values(e).find(a=>Array.isArray(a))??[],s=[];for(const a of r)if(typeof a=="string")a.trim()&&s.push({name:a.trim(),args:{}});else if(a&&typeof a=="object"){const c=a,l=c.name??c.tool??c.id??c.function;typeof l=="string"&&l.trim()&&s.push({name:l.trim(),args:hn(c)})}return s}function Qt(e){if(!e)return!1;const n=e.done??e.finished??e.complete;return typeof n=="boolean"?n:typeof n=="string"?n.toLowerCase()==="true":!1}function fn(e){const n=e.args.length?e.args.map(r=>`      ${r.name} (${r.type}) — ${r.description}`).join(`
`):"      (none)",t=e.documentation||e.label;return`${e.elementId}
    purpose: ${t}
    arguments:
${n}`}function Yt(e,n){const t=e.systemPrompt||"You are an agent driving a business process. Use the tools available to you.",r=e.tools[0],s=r!=null&&r.args.length?`{${r.args.map(a=>`"${a.name}": "…"`).join(", ")}}`:"{}";return n?`${t}

You drive the process by calling tools. If more than one tool can run right
now without needing another tool's result first, name all of them in one
reply — don't spend a turn on each when they don't depend on each other. Only
list tools whose arguments you can already determine. The tool names you may
use, one per block:

${e.tools.map(fn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tools": [{"tool": "${(r==null?void 0:r.elementId)??"ToolName"}", "arguments": ${s}}], "done": false}

List one entry per tool you're calling this turn (often just one). Each
"tool" value must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tools.`:`${t}

You drive the process by calling exactly one tool at a time. The tool names you
may use, one per block:

${e.tools.map(fn).join(`

`)}

Reply with JSON only — no prose, no explanation, no markdown fence — in exactly
this shape:

{"tool": "${(r==null?void 0:r.elementId)??"ToolName"}", "arguments": ${s}, "done": false}

The value of "tool" must be one of the names listed above, copied character for
character, with nothing added. When your work is finished, reply exactly
{"done": true} and no tool.`}function $t(e,n,t,r){const s=e.userPrompt||"Carry out your task.",a=Object.entries(n).filter(([,l])=>typeof l=="string"&&l.trim().length>0).map(([l,m])=>`  ${l}: ${String(m)}`),c=[s,a.length?`Case data:
${a.join(`
`)}`:"",`All current process variables:
${JSON.stringify(n,null,2)}`].filter(Boolean);return c.push(t.length?`Tools you have already run — do NOT call these again:
${t.join(`
`)}`:"You have not run any tools yet."),c.push(r.length?`Tools still available:
${r.map(l=>`  ${l.elementId}`).join(`
`)}`:'No tools remain. Reply {"done": true}.'),c.push("Which tool should run next? Reply with JSON only."),c.join(`

`)}async function Jt(e,n,t,r,s,a){let c="";n({kind:"llm",text:"LLM thinking…",key:t,pending:!0,turn:a});const l=await e(r,s,m=>{c+=m,n({kind:"llm",text:`${Ve(c)} ▍`,key:t,pending:!0,turn:a})});return n({kind:"llm",text:Ve(l||c)||"(empty reply)",key:t,pending:!1,turn:a}),l}function Gt(e,n){switch(e){case"number":return typeof n=="number"&&Number.isFinite(n)?{ok:!0,value:n}:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?{ok:!0,value:Number(n)}:{ok:!1};case"boolean":return typeof n=="boolean"?{ok:!0,value:n}:typeof n=="string"&&/^(true|false)$/i.test(n.trim())?{ok:!0,value:n.trim().toLowerCase()==="true"}:{ok:!1};default:return typeof n=="object"?{ok:!1}:{ok:!0,value:String(n)}}}function Vt(e,n,t){const r={},s=new Map,a=new Map;for(const{tool:c,args:l}of e){const m={};for(const i of c.args){const d=l[i.name];if(!(d!=null&&d!=="")){n({kind:"error",text:`🤖 ${c.elementId}: model supplied no value for "${i.name}"`,turn:t,elementId:c.elementId});continue}const p=s.get(i.name);if(p!==void 0&&p!==c.elementId){n({kind:"error",text:`🤖 argument name collision on "${i.name}": both ${p} and ${c.elementId} declare it — ${p} already claimed it this turn, ${c.elementId}'s value is dropped`,turn:t,elementId:c.elementId});continue}const f=Gt(i.type,d);if(!f.ok){n({kind:"error",text:`🤖 ${c.elementId}: "${i.name}" is declared as ${i.type} but the model supplied ${JSON.stringify(d)} — rejected, not passed through`,turn:t,elementId:c.elementId});continue}r[i.name]=f.value,m[i.name]=f.value,s.set(i.name,c.elementId)}a.set(c.elementId,m)}return{variablesOut:r,forHistory:a}}function Ht(e,n,t,r={}){const{maxNewTokens:s=384,allowRepeats:a=!1,allowMultiToolTurns:c=!1,turnRef:l}=r;let m=0;const i=new Set,d=[];return async g=>{if(m+=1,l&&(l.current=m),m>e.maxModelCalls)return t({kind:"error",text:`Turn budget spent (maxModelCalls=${e.maxModelCalls}) — completing the agent.`,turn:m}),{completionConditionFulfilled:!0};const p=g.variables,f=p.toolCallResult;f!==void 0&&d.length&&(d[d.length-1]=`${d[d.length-1]} → ${Ve(JSON.stringify(f),160)}`);const b=a?e.tools:e.tools.filter(x=>!i.has(x.elementId)),N=[{role:"system",content:Yt(e,c)},{role:"user",content:$t(e,p,d,b)}];let I;try{I=await Jt(n,t,`llm-turn-${m}`,N,s,m)}catch(x){return t({kind:"error",text:`LLM call failed: ${x instanceof Error?x.message:String(x)} — completing the agent.`,turn:m}),{completionConditionFulfilled:!0}}const w=Ft(I);if(Qt(w)&&bn(w).length===0)return t({kind:"agent",text:"🤖 model says it is done",turn:m}),{completionConditionFulfilled:!0};const j=bn(w);if(j.length===0)return t({kind:"error",text:"🤖 model named no tool (and didn't say it was done) — trying again next turn",turn:m}),{};const S=[],X=[],U=[];for(const x of j){const B=e.tools.find(V=>V.elementId===x.name);if(!B){X.push(x.name);continue}if(!a&&i.has(B.elementId)){U.push(B.elementId);continue}S.push({tool:B,args:x.args})}if(X.length&&t({kind:"error",text:`🤖 model named a tool that doesn't exist: ${X.join(", ")} — nothing activated`,turn:m}),U.length&&t({kind:"error",text:`🤖 model asked to re-run ${U.join(", ")} — skipped (already run)`,turn:m}),S.length===0)return t({kind:"agent",text:"🤖 nothing activated this turn — trying again next turn",turn:m}),{};const{variablesOut:k,forHistory:v}=Vt(S,t,m);for(const{tool:x}of S)i.add(x.elementId),d.push(`- ${x.elementId}(${JSON.stringify(v.get(x.elementId))})`);for(const{tool:x}of S)t({kind:"agent",text:`🤖 calling ${x.elementId}`,turn:m,elementId:x.elementId,args:v.get(x.elementId)??{}});return{activateElements:S.map(x=>({elementId:x.tool.elementId})),variables:k}}}function Zt(e,n,t,r={}){const s=new Map(e.map(a=>[a.elementId,Ht(a,n,t,r)]));return async a=>{const c=s.get(a.elementId);if(!c)throw new Error(`No agent host registered for "${a.elementId}"`);return c(a)}}class He{__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,yn.unregister(this),n}free(){const n=this.__destroy_into_raw();u.__wbg_testengine_free(n,0)}activateJobs(n,t,r,s){let a,c;try{const f=u.__wbindgen_add_to_stack_pointer(-16),b=D(n,u.__wbindgen_export,u.__wbindgen_export2),N=E,I=D(s,u.__wbindgen_export,u.__wbindgen_export2),w=E;u.testengine_activateJobs(f,this.__wbg_ptr,b,N,t,r,I,w);var l=M().getInt32(f+0,!0),m=M().getInt32(f+4,!0),i=M().getInt32(f+8,!0),d=M().getInt32(f+12,!0),g=l,p=m;if(d)throw g=0,p=0,z(i);return a=g,c=p,C(g,p)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(a,c,1)}}advanceTime(n){let t,r;try{const d=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_advanceTime(d,this.__wbg_ptr,n);var s=M().getInt32(d+0,!0),a=M().getInt32(d+4,!0),c=M().getInt32(d+8,!0),l=M().getInt32(d+12,!0),m=s,i=a;if(l)throw m=0,i=0,z(c);return t=m,r=i,C(m,i)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}assignUserTask(n,t,r){let s,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(t,u.__wbindgen_export,u.__wbindgen_export2),I=E;u.testengine_assignUserTask(p,this.__wbg_ptr,f,b,N,I,r);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),i=M().getInt32(p+12,!0),d=c,g=l;if(i)throw d=0,g=0,z(m);return s=d,a=g,C(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(s,a,1)}}broadcastSignal(n,t){let r,s;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),f=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),N=E;u.testengine_broadcastSignal(g,this.__wbg_ptr,p,f,b,N);var a=M().getInt32(g+0,!0),c=M().getInt32(g+4,!0),l=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),i=a,d=c;if(m)throw i=0,d=0,z(l);return r=i,s=d,C(i,d)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,s,1)}}cancelInstance(n){let t,r;try{const d=u.__wbindgen_add_to_stack_pointer(-16),g=D(n,u.__wbindgen_export,u.__wbindgen_export2),p=E;u.testengine_cancelInstance(d,this.__wbg_ptr,g,p);var s=M().getInt32(d+0,!0),a=M().getInt32(d+4,!0),c=M().getInt32(d+8,!0),l=M().getInt32(d+12,!0),m=s,i=a;if(l)throw m=0,i=0,z(c);return t=m,r=i,C(m,i)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}completeAgentJob(n,t,r){let s,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(t,u.__wbindgen_export,u.__wbindgen_export2),I=E,w=D(r,u.__wbindgen_export,u.__wbindgen_export2),j=E;u.testengine_completeAgentJob(p,this.__wbg_ptr,f,b,N,I,w,j);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),i=M().getInt32(p+12,!0),d=c,g=l;if(i)throw d=0,g=0,z(m);return s=d,a=g,C(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(s,a,1)}}completeJob(n,t){let r,s;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),f=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),N=E;u.testengine_completeJob(g,this.__wbg_ptr,p,f,b,N);var a=M().getInt32(g+0,!0),c=M().getInt32(g+4,!0),l=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),i=a,d=c;if(m)throw i=0,d=0,z(l);return r=i,s=d,C(i,d)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,s,1)}}completeUserTask(n,t){let r,s;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),f=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),N=E;u.testengine_completeUserTask(g,this.__wbg_ptr,p,f,b,N);var a=M().getInt32(g+0,!0),c=M().getInt32(g+4,!0),l=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),i=a,d=c;if(m)throw i=0,d=0,z(l);return r=i,s=d,C(i,d)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,s,1)}}correlateMessage(n,t,r){let s,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(t,u.__wbindgen_export,u.__wbindgen_export2),I=E,w=D(r,u.__wbindgen_export,u.__wbindgen_export2),j=E;u.testengine_correlateMessage(p,this.__wbg_ptr,f,b,N,I,w,j);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),i=M().getInt32(p+12,!0),d=c,g=l;if(i)throw d=0,g=0,z(m);return s=d,a=g,C(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(s,a,1)}}createInstance(n,t){let r,s;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),f=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),N=E;u.testengine_createInstance(g,this.__wbg_ptr,p,f,b,N);var a=M().getInt32(g+0,!0),c=M().getInt32(g+4,!0),l=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),i=a,d=c;if(m)throw i=0,d=0,z(l);return r=i,s=d,C(i,d)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,s,1)}}deploy(n){let t,r;try{const d=u.__wbindgen_add_to_stack_pointer(-16),g=D(n,u.__wbindgen_export,u.__wbindgen_export2),p=E;u.testengine_deploy(d,this.__wbg_ptr,g,p);var s=M().getInt32(d+0,!0),a=M().getInt32(d+4,!0),c=M().getInt32(d+8,!0),l=M().getInt32(d+12,!0),m=s,i=a;if(l)throw m=0,i=0,z(c);return t=m,r=i,C(m,i)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}events(){let n,t;try{const i=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_events(i,this.__wbg_ptr);var r=M().getInt32(i+0,!0),s=M().getInt32(i+4,!0),a=M().getInt32(i+8,!0),c=M().getInt32(i+12,!0),l=r,m=s;if(c)throw l=0,m=0,z(a);return n=l,t=m,C(l,m)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(n,t,1)}}failJob(n,t,r){let s,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(r,u.__wbindgen_export,u.__wbindgen_export2),I=E;u.testengine_failJob(p,this.__wbg_ptr,f,b,t,N,I);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),i=M().getInt32(p+12,!0),d=c,g=l;if(i)throw d=0,g=0,z(m);return s=d,a=g,C(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(s,a,1)}}modify(n,t,r){let s,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(t,u.__wbindgen_export,u.__wbindgen_export2),I=E,w=D(r,u.__wbindgen_export,u.__wbindgen_export2),j=E;u.testengine_modify(p,this.__wbg_ptr,f,b,N,I,w,j);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),i=M().getInt32(p+12,!0),d=c,g=l;if(i)throw d=0,g=0,z(m);return s=d,a=g,C(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(s,a,1)}}constructor(){const n=u.testengine_new();return this.__wbg_ptr=n,yn.register(this,this.__wbg_ptr,this),this}get now(){return u.testengine_now(this.__wbg_ptr)}reset(){u.testengine_reset(this.__wbg_ptr)}resolveIncident(n){let t,r;try{const d=u.__wbindgen_add_to_stack_pointer(-16),g=D(n,u.__wbindgen_export,u.__wbindgen_export2),p=E;u.testengine_resolveIncident(d,this.__wbg_ptr,g,p);var s=M().getInt32(d+0,!0),a=M().getInt32(d+4,!0),c=M().getInt32(d+8,!0),l=M().getInt32(d+12,!0),m=s,i=a;if(l)throw m=0,i=0,z(c);return t=m,r=i,C(m,i)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}setVariables(n,t,r){let s,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(t,u.__wbindgen_export,u.__wbindgen_export2),I=E;u.testengine_setVariables(p,this.__wbg_ptr,f,b,N,I,r);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),i=M().getInt32(p+12,!0),d=c,g=l;if(i)throw d=0,g=0,z(m);return s=d,a=g,C(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(s,a,1)}}snapshot(){let n,t;try{const i=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_snapshot(i,this.__wbg_ptr);var r=M().getInt32(i+0,!0),s=M().getInt32(i+4,!0),a=M().getInt32(i+8,!0),c=M().getInt32(i+12,!0),l=r,m=s;if(c)throw l=0,m=0,z(a);return n=l,t=m,C(l,m)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(n,t,1)}}throwError(n,t,r){let s,a;try{const p=u.__wbindgen_add_to_stack_pointer(-16),f=D(n,u.__wbindgen_export,u.__wbindgen_export2),b=E,N=D(t,u.__wbindgen_export,u.__wbindgen_export2),I=E,w=D(r,u.__wbindgen_export,u.__wbindgen_export2),j=E;u.testengine_throwError(p,this.__wbg_ptr,f,b,N,I,w,j);var c=M().getInt32(p+0,!0),l=M().getInt32(p+4,!0),m=M().getInt32(p+8,!0),i=M().getInt32(p+12,!0),d=c,g=l;if(i)throw d=0,g=0,z(m);return s=d,a=g,C(d,g)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(s,a,1)}}tickNow(n){let t,r;try{const d=u.__wbindgen_add_to_stack_pointer(-16);u.testengine_tickNow(d,this.__wbg_ptr,n);var s=M().getInt32(d+0,!0),a=M().getInt32(d+4,!0),c=M().getInt32(d+8,!0),l=M().getInt32(d+12,!0),m=s,i=a;if(l)throw m=0,i=0,z(c);return t=m,r=i,C(m,i)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}unassignUserTask(n){let t,r;try{const d=u.__wbindgen_add_to_stack_pointer(-16),g=D(n,u.__wbindgen_export,u.__wbindgen_export2),p=E;u.testengine_unassignUserTask(d,this.__wbg_ptr,g,p);var s=M().getInt32(d+0,!0),a=M().getInt32(d+4,!0),c=M().getInt32(d+8,!0),l=M().getInt32(d+12,!0),m=s,i=a;if(l)throw m=0,i=0,z(c);return t=m,r=i,C(m,i)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(t,r,1)}}updateRetries(n,t){let r,s;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),f=E;u.testengine_updateRetries(g,this.__wbg_ptr,p,f,t);var a=M().getInt32(g+0,!0),c=M().getInt32(g+4,!0),l=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),i=a,d=c;if(m)throw i=0,d=0,z(l);return r=i,s=d,C(i,d)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,s,1)}}updateUserTask(n,t){let r,s;try{const g=u.__wbindgen_add_to_stack_pointer(-16),p=D(n,u.__wbindgen_export,u.__wbindgen_export2),f=E,b=D(t,u.__wbindgen_export,u.__wbindgen_export2),N=E;u.testengine_updateUserTask(g,this.__wbg_ptr,p,f,b,N);var a=M().getInt32(g+0,!0),c=M().getInt32(g+4,!0),l=M().getInt32(g+8,!0),m=M().getInt32(g+12,!0),i=a,d=c;if(m)throw i=0,d=0,z(l);return r=i,s=d,C(i,d)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export3(r,s,1)}}}Symbol.dispose&&(He.prototype[Symbol.dispose]=He.prototype.free);function Wt(){return{__proto__:null,"./nanobpmn_engine_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(n,t){throw new Error(C(n,t))},__wbindgen_cast_0000000000000001:function(n,t){const r=C(n,t);return qt(r)},__wbindgen_object_drop_ref:function(n){z(n)}}}}const yn=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>u.__wbg_testengine_free(e,1));function qt(e){_e===ce.length&&ce.push(ce.length+1);const n=_e;return _e=ce[n],ce[n]=e,n}function Kt(e){e<1028||(ce[e]=_e,_e=e)}let ge=null;function M(){return(ge===null||ge.buffer.detached===!0||ge.buffer.detached===void 0&&ge.buffer!==u.memory.buffer)&&(ge=new DataView(u.memory.buffer)),ge}function C(e,n){return nr(e>>>0,n)}let we=null;function Ae(){return(we===null||we.byteLength===0)&&(we=new Uint8Array(u.memory.buffer)),we}function Xt(e){return ce[e]}let ce=new Array(1024).fill(void 0);ce.push(void 0,null,!0,!1);let _e=ce.length;function D(e,n,t){if(t===void 0){const l=xe.encode(e),m=n(l.length,1)>>>0;return Ae().subarray(m,m+l.length).set(l),E=l.length,m}let r=e.length,s=n(r,1)>>>0;const a=Ae();let c=0;for(;c<r;c++){const l=e.charCodeAt(c);if(l>127)break;a[s+c]=l}if(c!==r){c!==0&&(e=e.slice(c)),s=t(s,r,r=c+e.length*3,1)>>>0;const l=Ae().subarray(s+c,s+r),m=xe.encodeInto(e,l);c+=m.written,s=t(s,r,c,1)>>>0}return E=c,s}function z(e){const n=Xt(e);return Kt(e),n}let Se=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Se.decode();const er=2146435072;let Re=0;function nr(e,n){return Re+=n,Re>=er&&(Se=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Se.decode(),Re=n),Se.decode(Ae().subarray(e,e+n))}const xe=new TextEncoder;"encodeInto"in xe||(xe.encodeInto=function(e,n){const t=xe.encode(e);return n.set(t),{read:e.length,written:t.length}});let E=0,u;function tr(e,n){return u=e.exports,ge=null,we=null,u}async function rr(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(s){if(e.ok&&t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}else{const r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function t(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function ir(e){if(u!==void 0)return u;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/pr-preview/pr-56/assets/nanobpmn_engine_bg-CIG0GEWz.wasm",import.meta.url));const n=Wt();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:r}=await rr(await e,n);return tr(t)}let Ee=null;function or(e){return Ee||(Ee=ir(void 0).then(()=>{}).catch(n=>{throw Ee=null,n})),Ee}function R(e){return JSON.parse(e)}class sr{constructor(n){G(this,"engine");this.engine=n}deploy(n){return JSON.parse(this.engine.deploy(n))}createInstance(n,t){return R(this.engine.createInstance(n,t||"{}"))}activateJobs(n,t,r,s){return JSON.parse(this.engine.activateJobs(n,t,r,s))}completeJob(n,t){return R(this.engine.completeJob(n,t||"{}"))}completeAgentJob(n,t){const{variables:r,...s}=t??{};return R(this.engine.completeAgentJob(n,JSON.stringify(r??{}),JSON.stringify(s??{})))}failJob(n,t,r){return R(this.engine.failJob(n,t,r))}throwError(n,t,r){return R(this.engine.throwError(n,t,r))}updateRetries(n,t){return R(this.engine.updateRetries(n,t))}resolveIncident(n){return R(this.engine.resolveIncident(n))}setVariables(n,t,r){return R(this.engine.setVariables(n,t||"{}",r))}broadcastSignal(n,t){return R(this.engine.broadcastSignal(n,t||"{}"))}cancelInstance(n){return R(this.engine.cancelInstance(n))}modify(n,t,r){return R(this.engine.modify(n,JSON.stringify(t??[]),JSON.stringify(r??[])))}completeUserTask(n,t){return R(this.engine.completeUserTask(n,t||"{}"))}assignUserTask(n,t,r){return R(this.engine.assignUserTask(n,t,r))}unassignUserTask(n){return R(this.engine.unassignUserTask(n))}updateUserTask(n,t){return R(this.engine.updateUserTask(n,t||"{}"))}correlateMessage(n,t,r){return R(this.engine.correlateMessage(n,t,r||"{}"))}advanceTime(n){return R(this.engine.advanceTime(n))}reset(){this.engine.reset()}events(){return JSON.parse(this.engine.events())}snapshot(){return R(this.engine.snapshot())}free(){this.engine.free()}}async function ar(e){return await or(),new sr(new He)}class Pn extends Error{constructor(t,r){super(t);G(this,"retries");this.name="JobFailure",this.retries=r==null?void 0:r.retries}}async function cr(e,n,t){let r;try{const s=await n(t);r=JSON.stringify(s??{})}catch(s){const a=s instanceof Pn&&s.retries!==void 0?s.retries:Math.max(0,t.retries-1),c=s instanceof Error?s.message:String(s);e.failJob(t.key,a,c);return}e.completeJob(t.key,r)}async function lr(e,n,t){let r;try{r=await n(t),JSON.stringify(r)}catch(s){const a=s instanceof Pn&&s.retries!==void 0?s.retries:Math.max(0,t.retries-1),c=s instanceof Error?s.message:String(s);e.failJob(t.key,a,c);return}e.completeAgentJob(t.key,r)}async function dr(e,n,t={}){const r=t.maxJobsPerActivation??10,s=t.lockTimeoutMs??3e4,a=t.worker??"bojtos",c=t.agents??{};for(const i of Object.keys(c))if(i in n)throw new Error(`dispatchRound: job type "${i}" is registered as both a worker and an agent — register it as exactly one`);const l=[];for(const[i,d]of Object.entries(n))for(const g of e.activateJobs(i,r,s,a))l.push({handler:d,job:g});const m=[];for(const[i,d]of Object.entries(c))for(const g of e.activateJobs(i,r,s,a))m.push({handler:d,job:g});for(const{handler:i,job:d}of l)await cr(e,i,d);for(const{handler:i,job:d}of m)await lr(e,i,d);return{snapshot:e.snapshot(),handled:l.length+m.length}}function ur({bpmn:e}){const n=h.useRef(null),[t,r]=h.useState("loading"),[s,a]=h.useState(null),[c,l]=h.useState([]),[m,i]=h.useState(null),d=h.useRef(e),g=h.useCallback((k,v)=>{const x=k.deploy(v);return d.current=v,l(x.processIds),i(null),a(null),x.processIds},[]);h.useEffect(()=>{let k=!1;return r("loading"),l([]),i(null),a(null),ar().then(v=>{if(k){v.free();return}try{g(v,e)}catch(x){v.free(),a(String(x)),r("error");return}n.current=v,r("ready")}).catch(v=>{k||(a(String(v)),r("error"))}),()=>{var v;k=!0,(v=n.current)==null||v.free(),n.current=null}},[e]);const p=h.useCallback(k=>{const v=n.current;if(!v)return null;try{const x=k(v);return i(x),a(null),x}catch(x){return a(String(x)),null}},[]),f=h.useCallback((k,v)=>p(x=>x.createInstance(k,v)),[p]),b=h.useCallback((k,v)=>p(x=>x.completeUserTask(k,v)),[p]),N=h.useCallback(k=>p(v=>v.advanceTime(k)),[p]);function I(k,v){const[x]=k.activateJobs(v,1,3e4,"manual-control");if(!x)throw new Error(`No waiting job of type "${v}" to resolve.`);return x}const w=h.useCallback((k,v)=>p(x=>{const B=I(x,k);return x.completeJob(B.key,v)}),[p]),j=h.useCallback((k,v,x)=>p(B=>{const V=I(B,k);return B.throwError(V.key,v,x)}),[p]),S=h.useCallback(async(k,v)=>{const x=n.current;if(!x)return null;try{const B=await dr(x,k,v);return n.current!==x?null:(i(B.snapshot),a(null),B)}catch(B){return n.current!==x||(i(x.snapshot()),a(String(B))),null}},[]),X=h.useCallback(()=>{const k=n.current;if(k)try{k.reset(),g(k,d.current)}catch(v){a(String(v))}},[g]),U=h.useCallback(k=>{const v=n.current;if(!v)return null;try{return v.reset(),g(v,k)}catch(x){return a(String(x)),null}},[g]);return{phase:t,error:s,processIds:c,snapshot:m,createInstance:f,stepWorkers:S,completeUserTask:b,advanceTime:N,completeJobManually:w,throwJobError:j,reset:X,redeploy:U}}const mr=[{id:"Qwen2.5-1.5B-Instruct-q4f16_1-MLC",label:"Qwen2.5 1.5B",downloadLabel:"~1.0 GB"},{id:"SmolLM2-1.7B-Instruct-q4f16_1-MLC",label:"SmolLM2 1.7B",downloadLabel:"~1.1 GB"},{id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",label:"Llama 3.2 1B",downloadLabel:"~0.7 GB"},{id:"gemma-2-2b-it-q4f16_1-MLC",label:"Gemma 2 2B",downloadLabel:"~1.5 GB"},{id:"SmolLM2-360M-Instruct-q4f16_1-MLC",label:"SmolLM2 360M (tiny)",downloadLabel:"~0.3 GB"}];function On(e){return Ze.get(e)??{}}const Ze=new Map;async function pr(){if(Ze.size>0)return;const{prebuiltAppConfig:e}=await q(async()=>{const{prebuiltAppConfig:n}=await import("./vendor-webllm-DT0Ab8E6.js");return{prebuiltAppConfig:n}},[]);for(const n of e.model_list)Ze.set(n.model_id,{vramRequiredMB:n.vram_required_MB,requiredFeatures:n.required_features})}const Ce=mr.map(e=>({id:e.id,label:`${e.label} (${e.downloadLabel})`,downloadLabel:e.downloadLabel,...On(e.id)})),Bn=Ce[0].id;async function gr(){return await pr(),Ce.map(e=>({...e,...On(e.id)}))}async function hr(){return await Ke()===null}async function Ke(){const e=navigator.gpu;if(!e)return"This browser doesn't expose WebGPU at all. Use a recent Chrome, Edge, or Safari 17+ with hardware acceleration on, or pick the Scripted or Endpoint brain.";let n;try{n=await e.requestAdapter()}catch(t){return`WebGPU adapter request failed (${t instanceof Error?t.message:String(t)}). Try the Scripted or Endpoint brain instead.`}return n?null:"This browser supports the WebGPU API, but no GPU adapter is available — hardware acceleration may be off, or this device/VM has no usable GPU. Pick the Scripted or Endpoint brain instead."}function Rn(){const e=navigator.deviceMemory;return typeof e=="number"?e*1024:null}function br(e,n=Rn()){return n==null||e.vramRequiredMB==null||n>=e.vramRequiredMB?null:`${e.label} needs roughly ${Math.round(e.vramRequiredMB)} MB of GPU memory; this device looks like it has about ${Math.round(n)} MB available. It may still work, but expect it to fail or fall back to slow shared memory — try a smaller model (e.g. SmolLM2 360M) if it doesn't load.`}async function fr(e){try{const{hasModelInCache:n}=await q(async()=>{const{hasModelInCache:t}=await import("./vendor-webllm-DT0Ab8E6.js");return{hasModelInCache:t}},[]);return await n(e)}catch{return!1}}class Ue{constructor(){G(this,"kind","browser");G(this,"model",null);G(this,"engine",null);G(this,"generation",0);G(this,"chat",async(n,t=512,r)=>{var l,m;const s=this.engine;if(!s||!this.model)throw new Error("BrowserBrain.chat called before connect()");const a=await s.chat.completions.create({messages:n,temperature:0,max_tokens:t,stream:!0});let c="";for await(const i of a){const d=((m=(l=i.choices[0])==null?void 0:l.delta)==null?void 0:m.content)??"";d&&(c+=d,r==null||r(d))}return c})}async connect(n=Bn,t){var l,m;const r=await Ke();if(r)throw new Error(r);if(this.engine&&this.model===n)return n;const s=++this.generation,a=i=>{s===this.generation&&(t==null||t({progress:i.progress??0,text:i.text??""}))};let c;try{if(this.engine)await this.engine.reload(n),c=this.engine;else{const{CreateMLCEngine:i}=await q(async()=>{const{CreateMLCEngine:d}=await import("./vendor-webllm-DT0Ab8E6.js");return{CreateMLCEngine:d}},[]);c=await i(n,{initProgressCallback:a})}}catch(i){if(s!==this.generation)throw new Error("cancelled");const d=(m=(l=Ce.find(g=>g.id===n))==null?void 0:l.requiredFeatures)==null?void 0:m.includes("shader-f16");throw new Error(`Couldn't load ${n} in the browser (${i instanceof Error?i.message:String(i)}). `+(d?"This model needs WebGPU with shader-f16; try a smaller model or the endpoint brain.":"Try a smaller model, check your connection, or use the endpoint brain instead."))}if(s!==this.generation)throw c.unload().catch(()=>{}),new Error("cancelled");return this.engine=c,this.model=n,n}cancelConnect(){this.generation++}dispose(){var n;this.generation++,(n=this.engine)==null||n.unload().catch(()=>{}),this.engine=null,this.model=null}}const Un="http://localhost:11434/v1";function Fn(){var n;const e=((n=globalThis.location)==null?void 0:n.hostname)??"";return e==="localhost"||e==="127.0.0.1"||e==="[::1]"||e==="::1"}function Xe(e,n={hostname:(t=>(t=globalThis.location)==null?void 0:t.hostname)()??"",origin:(r=>(r=globalThis.location)==null?void 0:r.origin)()??""}){let s;try{s=new URL(Qn(e)).hostname}catch{return null}const a=c=>c==="localhost"||c==="127.0.0.1"||c==="::1"||c==="[::1]";return!a(s)||a(n.hostname)?null:`This page is served from ${n.origin||"a non-local origin"}, so it can't reach ${e}. A local model server only accepts requests from a page on localhost. Open this page at http://localhost instead, or use the Scripted or In-browser brain.`}function Qn(e){let n=e.trim().replace(/\/+$/,"");return n.endsWith("/chat/completions")&&(n=n.slice(0,-17)),/\/v\d+$/.test(n)||(n=`${n}/v1`),n}class Mn extends Error{constructor(n,t){super(n),this.status=t,this.name="HttpError"}}class yr{constructor(n=Un,t="",r=""){G(this,"kind","endpoint");G(this,"baseUrl");G(this,"model",null);G(this,"models",[]);G(this,"apiKey");G(this,"requestedModel");G(this,"chat",async(n,t=512,r)=>{var i,d,g;if(!this.model)throw new Error("EndpointBrain.chat called before connect()");const s=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:n,temperature:0,max_tokens:t,stream:!0})});if(!s.ok||!s.body){const p=await s.text().catch(()=>"");throw new Error(`chat/completions HTTP ${s.status} ${s.statusText}${p?` — ${p.slice(0,300)}`:""}`)}const a=s.body.getReader(),c=new TextDecoder;let l="",m="";for(;;){const{value:p,done:f}=await a.read();if(f)break;l+=c.decode(p,{stream:!0});let b;for(;(b=l.indexOf(`
`))>=0;){const N=l.slice(0,b).trim();if(l=l.slice(b+1),!N.startsWith("data:"))continue;const I=N.slice(5).trim();if(I==="[DONE]")continue;let w;try{w=JSON.parse(I)}catch{continue}w.model&&(this.model=w.model);const j=(i=w.choices)==null?void 0:i[0],S=((d=j==null?void 0:j.delta)==null?void 0:d.content)??((g=j==null?void 0:j.message)==null?void 0:g.content)??"";S&&(m+=S,r==null||r(S))}}return m});this.baseUrl=Qn(n),this.apiKey=t.trim(),this.requestedModel=r.trim()}headers(){const n={"Content-Type":"application/json"};return this.apiKey&&(n.Authorization=`Bearer ${this.apiKey}`),n}async listModels(){let n;try{n=await fetch(`${this.baseUrl}/models`,{headers:this.headers()})}catch(r){const s=Xe(this.baseUrl);throw new Error(s??`Can't reach ${this.baseUrl} (${r instanceof Error?r.message:String(r)}). Is the server running? For Ollama, check the app is up — and if this page is served from another origin, allow it with OLLAMA_ORIGINS.`)}if(!n.ok)throw new Mn(`${this.baseUrl}/models returned HTTP ${n.status} ${n.statusText}`,n.status);const t=await n.json();return this.models=(t.data??[]).map(r=>r.id).filter(r=>!!r),this.models}async connect(){try{const n=await this.listModels(),t=this.requestedModel||n[0];if(!t)throw new Error(`No models available at ${this.baseUrl}. Pull one first — e.g. \`ollama pull llama3.2:3b\` — or name one explicitly.`);this.model=t}catch(n){const t=n instanceof Mn&&[404,405,501].includes(n.status);if(!this.requestedModel||!t)throw n;this.models=[],this.model=this.requestedModel}return await this.validate(),this.model}async validate(){const n=await fetch(`${this.baseUrl}/chat/completions`,{method:"POST",headers:this.headers(),body:JSON.stringify({model:this.model,messages:[{role:"user",content:"Reply with ok."}],temperature:0,max_tokens:1,stream:!1})}).catch(r=>{throw new Error(`Can't reach ${this.baseUrl}/chat/completions (${r instanceof Error?r.message:String(r)}). Check the endpoint URL, API key, model name, and any local CORS settings.`)});if(!n.ok){const r=await n.text().catch(()=>"");throw new Error(`chat/completions HTTP ${n.status} ${n.statusText}${r?` — ${r.slice(0,300)}`:""}`)}const t=await n.json().catch(()=>({}));t.model&&(this.model=t.model)}dispose(){}}async function Mr(){return await hr()?"browser":Fn()?"endpoint":"scripted"}function wr(){const[e,n]=h.useState("scripted"),t=h.useRef(!1),[r,s]=h.useState("idle"),[a,c]=h.useState(null),[l,m]=h.useState(null),[i,d]=h.useState(null),[g,p]=h.useState(null),[f,b]=h.useState(null),[N,I]=h.useState(null),[w,j]=h.useState(Bn),[S,X]=h.useState(Un),[U,k]=h.useState(""),[v,x]=h.useState(""),[B,V]=h.useState(null),Q=h.useRef(null);h.useEffect(()=>{Ke().then(P=>{b(P),p(P===null),t.current||(t.current=!0,Mr().then(n))})},[]),h.useEffect(()=>{let P=!1;return I(null),fr(w).then(O=>{P||I(O)}),()=>{P=!0}},[w]),h.useEffect(()=>()=>{var P;return(P=Q.current)==null?void 0:P.dispose()},[]);const be=h.useCallback(P=>{n(P),s("idle"),c(null),m(null),d(null),V(null)},[]),fe=h.useCallback(()=>{var P;(P=Q.current)==null||P.dispose(),Q.current=null,V(null),m(null)},[]),ze=h.useCallback(()=>{Q.current instanceof Ue&&Q.current.cancelConnect(),fe(),s("idle"),d(null),c(null)},[fe]),Me=h.useCallback(async()=>{var P;if(e==="scripted"){V(null),s("ready");return}if(e==="endpoint"){const O=Xe(S);if(O){fe(),c(O),s("error");return}}s("connecting"),c(null),d(null);try{if(e==="browser"){const O=Q.current instanceof Ue?Q.current:new Ue;Q.current&&Q.current!==O&&Q.current.dispose(),Q.current=O;const le=await O.connect(w,d);m(le),V(()=>O.chat),I(!0)}else{(P=Q.current)==null||P.dispose();const O=new yr(S,v,U);Q.current=O;const le=await O.connect();m(le),V(()=>O.chat)}s("ready")}catch(O){const le=O instanceof Error?O.message:String(O);if(le==="cancelled")return;c(le),s("error"),V(null)}finally{d(null)}},[e,w,S,U,v,fe]);return{kind:e,setKind:be,status:r,error:a,modelInUse:l,progress:i,webgpu:g,webgpuReason:f,browserModelCached:N,cancelConnect:ze,browserModel:w,setBrowserModel:j,endpointUrl:S,setEndpointUrl:X,endpointModel:U,setEndpointModel:k,apiKey:v,setApiKey:x,connect:Me,chat:B}}const We="#s=",_r=["scripted","browser","endpoint"];function xr(e){return typeof e=="string"&&_r.includes(e)}function Nr(e){try{const n=JSON.parse(e);if(n&&typeof n=="object"){const t=n,r={};return xr(t.brain)&&(r.brain=t.brain),r}}catch{}return{}}function Yn(e=location.hash){if(!e.startsWith(We))return{};let n;try{n=decodeURIComponent(e.slice(We.length))}catch{return{}}return Nr(n)}function Ir(e){const n=Object.entries(e).filter(([,t])=>t!==void 0);return n.length===0?"":We+encodeURIComponent(JSON.stringify(Object.fromEntries(n)))}function vr(e){const n={...Yn(),...e},t=Ir(n),r=new URL(location.href);r.hash=t,history.replaceState(history.state,"",r)}const wn=[{kind:"scripted",label:"Scripted",hint:"No model. The example's stand-in decides — deterministic and offline."},{kind:"browser",label:"In-browser (WebGPU)",hint:"A small quantised model on your GPU. First run downloads weights."},{kind:"endpoint",label:"API endpoint",hint:"Any OpenAI-compatible server. Ollama by default. Local pages only."}];function Tr({brain:e}){const n=wn.find(i=>i.kind===e.kind),t=Xe(e.endpointUrl),r=Fn(),[s,a]=h.useState(Ce);h.useEffect(()=>{gr().then(a)},[]);const c=s.find(i=>i.id===e.browserModel),l=c?br(c,Rn()):null,m=e.webgpu===!0?"browser":r&&e.webgpu===!1?"endpoint":null;return o.jsxs("div",{className:"brain",children:[o.jsxs("div",{className:"brain-kinds",children:[wn.map(i=>o.jsxs(H,{size:"sm",variant:e.kind===i.kind?"default":"secondary",onClick:()=>e.setKind(i.kind),children:[i.label,i.kind===m&&o.jsx(W,{variant:"info",className:"brain-recommended-badge",children:"recommended"})]},i.kind)),e.status==="ready"&&e.kind!=="scripted"&&o.jsx(W,{variant:"success",children:e.modelInUse??"connected"}),e.status==="connecting"&&o.jsx(W,{variant:"info",children:"connecting…"}),e.status==="error"&&o.jsx(W,{variant:"danger",children:"not connected"})]}),o.jsx("p",{className:"field-hint",children:n.hint}),e.kind==="browser"&&o.jsxs("div",{className:"brain-config",children:[o.jsxs("div",{className:"field",children:[o.jsx(Te,{htmlFor:"browser-model",children:"Model"}),o.jsxs(nt,{value:e.browserModel,onValueChange:e.setBrowserModel,disabled:e.status==="connecting",children:[o.jsx(tt,{id:"browser-model",children:o.jsx(rt,{})}),o.jsx(it,{children:s.map(i=>o.jsx(ot,{value:i.id,children:i.label},i.id))})]}),e.browserModelCached===!0&&o.jsx("p",{className:"field-hint",children:"Already downloaded in this browser — connecting will be fast."}),e.browserModelCached===!1&&o.jsx("p",{className:"field-hint",children:"Not downloaded yet — connecting fetches the weights once, then caches them for next time."})]}),e.webgpu===!1&&e.webgpuReason&&o.jsxs(oe,{variant:"destructive",children:[o.jsx(se,{children:"No WebGPU in this browser"}),o.jsx(ae,{children:e.webgpuReason})]}),e.webgpu!==!1&&l&&o.jsxs(oe,{variant:"destructive",children:[o.jsx(se,{children:"This model may not fit in GPU memory"}),o.jsx(ae,{children:l})]})]}),e.kind==="endpoint"&&o.jsxs("div",{className:"brain-config",children:[o.jsxs("div",{className:"field",children:[o.jsx(Te,{htmlFor:"endpoint-url",children:"Endpoint"}),o.jsx(Be,{id:"endpoint-url",value:e.endpointUrl,onChange:i=>e.setEndpointUrl(i.target.value),disabled:e.status==="connecting"}),o.jsxs("p",{className:"field-hint",children:["Ollama allows ",o.jsx("code",{children:"localhost"})," origins out of the box; set"," ",o.jsx("code",{children:"OLLAMA_ORIGINS"})," only when serving this page from another host. Best for local development — a hosted copy of this page can't reach a server on your machine at all."]}),t&&o.jsxs(oe,{variant:"destructive",children:[o.jsx(se,{children:"A local server won't work from this URL"}),o.jsx(ae,{children:t})]})]}),o.jsxs("div",{className:"field",children:[o.jsx(Te,{htmlFor:"endpoint-model",children:"Model (blank = first served)"}),o.jsx(Be,{id:"endpoint-model",placeholder:"llama3.2:3b",value:e.endpointModel,onChange:i=>e.setEndpointModel(i.target.value),disabled:e.status==="connecting"})]}),o.jsxs("div",{className:"field",children:[o.jsx(Te,{htmlFor:"endpoint-key",children:"API key (optional)"}),o.jsx(Be,{id:"endpoint-key",type:"password",value:e.apiKey,onChange:i=>e.setApiKey(i.target.value),disabled:e.status==="connecting"})]})]}),e.kind!=="scripted"&&o.jsxs("div",{className:"brain-actions",children:[o.jsx(H,{size:"sm",onClick:()=>void e.connect(),disabled:e.status==="connecting",children:e.status==="ready"?"Reconnect":"Connect"}),e.status==="connecting"&&e.kind==="browser"&&o.jsx(H,{size:"sm",variant:"secondary",onClick:e.cancelConnect,children:"Cancel"}),e.progress&&o.jsxs("span",{className:"field-hint",children:[Math.round(e.progress.progress*100),"% —"," ",e.progress.text]})]}),e.error&&o.jsxs(oe,{variant:"destructive",children:[o.jsx(se,{children:"Couldn't connect"}),o.jsx(ae,{children:e.error})]})]})}function $n(e){return typeof e=="object"&&e!==null}function Vi(e){const n=new Set,t=r=>{$n(r)&&(typeof r.key=="string"&&n.add(r.key),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function jr(e){const n={},t=r=>{$n(r)&&(typeof r.key=="string"&&"defaultValue"in r&&(n[r.key]=r.defaultValue??""),Array.isArray(r.components)&&r.components.forEach(t))};return t(e),n}function kr(e){return e.entries!==void 0}function Er(e){const n=[];let t=null;for(const r of e)r.turn!==void 0?t&&t.turn===r.turn?t.entries.push(r):(t={turn:r.turn,entries:[r]},n.push(t)):(t=null,n.push(r));return n}function _n(e){if(e===void 0)return"undefined";try{return JSON.stringify(e)}catch{return"[unserializable value]"}}function Dr({activation:e,result:n,labelFor:t}){const r=e.elementId??"";return o.jsxs("div",{className:"timeline-tool",children:[o.jsxs("div",{className:"timeline-tool-head",children:[o.jsx(W,{variant:"info",children:"tool"}),o.jsx("strong",{children:t(r)||r}),o.jsx("code",{children:r})]}),e.args!==void 0&&Object.keys(e.args).length>0&&o.jsxs("div",{className:"timeline-kv",children:[o.jsx("span",{className:"timeline-kv-label",children:"arguments"}),o.jsx("code",{children:_n(e.args)})]}),o.jsxs("div",{className:"timeline-kv",children:[o.jsx("span",{className:"timeline-kv-label",children:"returned"}),o.jsx("code",{children:n?_n(n.result):"— waiting for the job to complete —"})]})]})}function Ar({group:e,labelFor:n}){const t=e.entries.find(i=>i.kind==="llm"),r=e.entries.filter(i=>i.kind==="agent"&&i.elementId),s=e.entries.filter(i=>i.kind==="vars"&&i.elementId),a=e.entries.filter(i=>i.kind==="agent"&&!i.elementId),c=e.entries.filter(i=>i.kind==="error"),l=new Set(r.map(i=>i.elementId)),m=e.entries.filter(i=>i.kind==="tool"||i.kind==="vars"&&i.elementId&&!l.has(i.elementId)).sort((i,d)=>i.id-d.id);return o.jsxs("div",{className:"timeline-turn",children:[o.jsxs("div",{className:"timeline-turn-head",children:[o.jsxs(W,{variant:t!=null&&t.pending?"warning":"neutral",children:["Turn ",e.turn]}),(t==null?void 0:t.pending)&&o.jsx("span",{className:"timeline-pending",children:"thinking…"})]}),t&&o.jsx("blockquote",{className:"timeline-reply",children:t.text}),a.map(i=>o.jsx("div",{className:"timeline-note",children:i.text},i.id)),r.map(i=>o.jsx(Dr,{activation:i,result:s.find(d=>d.elementId===i.elementId),labelFor:n},i.id)),m.map(i=>o.jsxs("div",{className:`log-line log-${i.kind}`,children:[i.pending?"⏳ ":"",i.text]},i.id)),c.map(i=>o.jsxs("div",{className:"timeline-error",children:["⚠ ",i.text]},i.id))]})}function Sr({log:e,elementStats:n=[],incidents:t=[],labelFor:r=s=>s}){const s=h.useMemo(()=>Er(e),[e]),[a,c]=h.useState(!1),l=h.useRef(null);h.useEffect(()=>{const i=l.current;i&&(i.scrollTop=i.scrollHeight)},[s]);const m=()=>{var g;const i={log:e.map(({id:p,...f})=>f),elementStats:n,incidents:t},d=JSON.stringify(i,null,2);(g=navigator.clipboard)!=null&&g.writeText&&navigator.clipboard.writeText(d).then(()=>{c(!0),setTimeout(()=>c(!1),1500)}).catch(()=>{})};return o.jsxs(ee,{className:"panel grow",children:[o.jsxs(ne,{children:[o.jsx(te,{children:"Activity"}),o.jsx(re,{children:"Agent turns, model replies, and tool calls — read top to bottom as a story."})]}),o.jsxs(ie,{children:[o.jsx("div",{className:"timeline-toolbar",children:o.jsx(H,{variant:"secondary",size:"sm",onClick:m,children:a?"Copied!":"Copy run as JSON"})}),o.jsx("div",{className:"timeline",ref:l,children:s.length===0?o.jsx("div",{className:"log-empty",children:"Press Run to start."}):s.map(i=>kr(i)?o.jsx(Ar,{group:i,labelFor:r},`turn-${i.turn}-${i.entries[0].id}`):o.jsxs("div",{className:`log-line log-${i.kind}`,children:[i.pending?"⏳ ":"",i.text]},i.id))}),(n.length>0||t.length>0)&&o.jsxs("div",{className:"timeline-engine-view",children:[n.length>0&&o.jsxs("div",{className:"timeline-stats",children:[o.jsx("span",{className:"timeline-kv-label",children:"Element completion"}),o.jsx("ul",{children:n.filter(i=>i.completed>0||(i.active??0)>0).map(i=>o.jsxs("li",{children:[o.jsx("code",{children:r(i.elementId)||i.elementId})," ","completed ",i.completed,i.active?`, ${i.active} active`:""]},i.elementId))})]}),t.length>0&&o.jsxs("div",{className:"timeline-incidents",children:[o.jsx("span",{className:"timeline-kv-label",children:"Incidents"}),o.jsx("ul",{children:t.map((i,d)=>o.jsxs("li",{children:[o.jsx("code",{children:r(i.elementId)||i.elementId})," —"," ",i.reason]},`${i.elementId}-${d}`))})]})]})]})]})}const me={diagram:"diagram",runButton:"run-button",variablesPanel:"variables-panel",codePanel:"code-panel",brainPanel:"brain-panel"};function xn(e){return`[data-tour="${e}"]`}function Lr(e=location.search){return new URLSearchParams(e).get("tour")}function Cr(e,n){var t;return((t=e.elementStats.find(r=>r.elementId===n))==null?void 0:t.completed)??0}function zr(e,n){return!e||e.kind==="click"||!n?!1:e.kind==="activeElement"?n.activeElementIds.includes(e.elementId):Cr(n,e.elementId)>=(e.atLeast??1)}function Pr(e){return"anchor"in e?xn(e.anchor):`${xn(me.diagram)} [data-element-id="${Or(e.elementId)}"]`}function Or(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,n=>`\\${n}`)}function Br(e){return e.map(n=>{const t=!!n.waitFor&&n.waitFor.kind!=="click";return{element:Pr(n.target),popover:{title:n.title,description:t?`${n.description} (continues automatically once you reach that point — or use Next to skip ahead)`:n.description,showButtons:["next","previous","close"]},disableActiveInteraction:!1,skipMissingElement:n.skipMissingElement??!0}})}async function Rr(e,n={}){var a;const[{driver:t}]=await Promise.all([q(()=>import("./driver.js-bj_ppY-Q.js"),[]),q(()=>Promise.resolve({}),__vite__mapDeps([0]))]),r=Br(e),s=t({steps:r,showProgress:!0,allowClose:!0,skipMissingElement:!0,onHighlighted:(c,l,{index:m})=>{var i;m!==void 0&&((i=n.onIndexChange)==null||i.call(n,m))},onDestroyed:()=>{var c;(c=n.onDestroyed)==null||c.call(n)}});return s.drive(),(a=n.onIndexChange)==null||a.call(n,s.getActiveIndex()??0),{moveNext:()=>s.moveNext(),activeIndex:()=>s.getActiveIndex()??-1,destroy:()=>s.destroy()}}const Ur=300;function Fr(e,n){const[t,r]=h.useState(!1),s=h.useRef(null),a=h.useRef(0),c=h.useRef(-1),l=h.useRef(null),m=h.useRef(n);h.useEffect(()=>{m.current=n},[n]);const i=h.useCallback(()=>{l.current!==null&&(clearInterval(l.current),l.current=null)},[]),d=h.useRef(0),g=h.useCallback(()=>{var f;d.current+=1,i(),(f=s.current)==null||f.destroy(),s.current=null,r(!1)},[i]),p=h.useCallback(()=>{if(!e||e.steps.length===0||s.current)return;const f=d.current+=1;Rr(e.steps,{onIndexChange:b=>{a.current=b},onDestroyed:()=>{i(),s.current=null,r(!1)}}).then(b=>{if(f!==d.current){b.destroy();return}s.current=b,r(!0),l.current=setInterval(()=>{const N=a.current;if(N===c.current)return;const I=e.steps[N];I&&zr(I.waitFor,m.current())&&(c.current=N,b.moveNext())},Ur)})},[e,i]);return h.useEffect(()=>g,[g]),{active:t,start:p,stop:g}}const Fe=650,Qe="__agent__",Nn="__model__",In="__template__:",Qr=h.lazy(async()=>{await Promise.all([q(()=>Promise.resolve({}),__vite__mapDeps([1])),q(()=>Promise.resolve({}),__vite__mapDeps([2]))]);const{BpmnRuntimeView:e}=await q(async()=>{const{BpmnRuntimeView:n}=await import("./vendor-bpmn-GWTO5rmy.js");return{BpmnRuntimeView:n}},__vite__mapDeps([3,4,5,6,7]));return{default:e}}),Ye=h.lazy(()=>q(()=>import("./MonacoEditor-BxekaEFJ.js").then(e=>e.M),__vite__mapDeps([8,4,9]))),Yr=h.lazy(()=>q(()=>import("./vendor-modeler-zC2zeGNm.js"),__vite__mapDeps([10,4,5,6,7,11,12,1,2]))),vn=h.lazy(async()=>{const{FormRenderer:e}=await q(async()=>{const{FormRenderer:n}=await import("./FormRenderer-7R-_gVPf.js");return{FormRenderer:n}},__vite__mapDeps([13,4,11,6,7,14]));return{default:e}});function $e(e,n){try{return JSON.stringify(e??{},null,n)}catch{return"[unserializable value]"}}function $r({example:e,initialBrainKind:n,initialTourId:t}){var sn,an,cn,ln,dn,un,mn;const[r,s]=h.useState(e.bpmn),a=wr();h.useEffect(()=>{n&&n!==a.kind&&a.setKind(n)},[]),h.useEffect(()=>{vr({brain:a.kind})},[a.kind]);const[c,l]=h.useState(()=>Object.fromEntries(e.handlers.map(y=>[y.elementId,y.source]))),[m,i]=h.useState(e.scriptedAgent??""),[d,g]=h.useState(()=>Le(e.templates)),p=h.useMemo(()=>Ut(e,c,r,d),[e,c,r,d]),f=p.model,b=ur({bpmn:p.resolvedBpmn}),N=Fr(e.tour,()=>b.snapshot);h.useEffect(()=>{var y;t&&((y=e.tour)==null?void 0:y.id)===t&&N.start()},[]);const I=f.startFormId?((sn=e.forms)==null?void 0:sn[f.startFormId])??null:null,[w,j]=h.useState(()=>({...e.seed,...I?jr(I):{}})),[S,X]=h.useState(f.agent?Qe:((an=e.handlers[0])==null?void 0:an.elementId)??""),[U,k]=h.useState(!1),[v,x]=h.useState(null),[B,V]=h.useState([]),[Q,be]=h.useState({}),[fe,ze]=h.useState(!1),Me=h.useRef(null),[P,O]=h.useState({}),[le,Jn]=h.useState(!1),Pe=h.useRef(null),de=h.useRef(!1),Gn=h.useRef(0),Oe=h.useRef({current:void 0}),nn=h.useRef({}),tn=h.useRef({}),Vn=h.useMemo(()=>{const y=new Map;for(const _ of f.processes){for(const T of _.tasks)y.set(T.elementId,T.label);for(const T of _.agents){y.set(T.elementId,T.label);for(const A of T.tools)y.set(A.elementId,A.label)}for(const T of _.userTasks)y.set(T.elementId,T.label)}return _=>y.get(_)??_},[f]),$=h.useCallback(y=>{V(_=>{if(y.key){const T=_.findIndex(A=>A.key===y.key);if(T>=0){const A=[..._];return A[T]={...A[T],...y},A}}return[..._,{...y,id:Gn.current++}].slice(-80)})},[]),ue=h.useMemo(()=>{var y;return((y=b.snapshot)==null?void 0:y.userTasks.find(_=>_.state==="Created"))??null},[b.snapshot]),Ne=h.useMemo(()=>{const y=f.processes.flatMap(T=>T.tasks),_=new Map;for(const T of e.handlers){if(!T.manualControl)continue;const A=y.find(F=>F.elementId===T.elementId);A&&_.set(A.jobType,{...T.manualControl,elementId:T.elementId})}return _},[e.handlers,f]),pe=h.useMemo(()=>{if(!b.snapshot)return null;for(const y of b.snapshot.jobs){const _=Ne.get(y.jobType);if(_&&y.state==="Created")return{job:y,control:_}}return null},[b.snapshot,Ne]),rn=h.useMemo(()=>{if(!f.agent||!b.snapshot)return[];const y=new Map(b.snapshot.elementStats.map(_=>[_.elementId,_.completed]));return f.agent.tools.filter(_=>(y.get(_.elementId)??0)===0)},[f.agent,b.snapshot]),K=ue?f.userTasks.find(y=>y.elementId===ue.elementId):void 0,Ie=K!=null&&K.formId?((cn=e.forms)==null?void 0:cn[K.formId])??null:null,ve=h.useCallback(async(y,_,T)=>{var J;let A=T,F=0;for(;de.current&&A&&A.completedInstances<1&&F++<80;){const L=await b.stepWorkers(y,{agents:_});A=(L==null?void 0:L.snapshot)??A;const Y=(J=A.instances[0])==null?void 0:J.variables;if(Y&&Object.keys(Y).length&&be({...Y}),A.userTasks.some(Z=>Z.state==="Created")){$({kind:"human",text:"⏸ waiting for a human — complete the task below to continue"});break}if(!L||L.handled===0)break;await new Promise(Z=>setTimeout(Z,Fe))}return A&&A.completedInstances>=1?$({kind:"done",text:"✅ process instance completed"}):A&&A.incidentElementIds.length>0&&$({kind:"error",text:"A job failed — incident on the diagram"}),A},[b,$]),on=h.useCallback(async y=>{var A,F,J;if(!pe||de.current)return;const{job:_,control:T}=pe;de.current=!0,k(!0);try{let L,Y;if(y==="complete")L=b.completeJobManually(_.jobType,"{}"),Y="  ↳ completed normally";else if(T.action.kind==="timer"){const Z=((F=(A=b.snapshot)==null?void 0:A.timers[0])==null?void 0:F.dueInMs)??0;L=b.advanceTime(Math.max(Z,0)+1),Y="  ↳ advanced the clock — timer fired"}else{const{errorCode:Z,message:ye}=T.action;L=b.throwJobError(_.jobType,Z,ye),Y=`  ↳ threw BPMN error ${Z}: ${ye}`}if(L){$({kind:"vars",text:Y,elementId:_.elementId});const Z=(J=L.instances[0])==null?void 0:J.variables;Z&&be({...Z}),await new Promise(ye=>setTimeout(ye,Fe)),await ve(nn.current,tn.current,L)}else $({kind:"error",text:"  ↳ failed to resolve the manual job",elementId:_.elementId})}finally{de.current=!1,k(!1)}},[pe,b,$,ve]),Hn=h.useCallback(async()=>{if(b.phase!=="ready"||de.current||p.hasErrors||Me.current&&!Me.current.validate())return;x(null);let y=null;try{f.agent&&m.trim()&&(y=kt(m))}catch(F){x(F instanceof Error?F.message:String(F));return}Oe.current={current:void 0};const _=At(f,p.handlers,$,Oe.current);for(const F of Ne.keys())delete _[F];const T={};if(f.agents.length>0){if(a.kind!=="scripted"&&a.chat){const J=new Map;for(const L of f.agents)J.set(L.jobType,[...J.get(L.jobType)??[],L]);for(const[L,Y]of J)T[L]=Zt(Y,a.chat,$,{turnRef:Oe.current})}else if(y&&f.agent){const J=f.agent.elementId;T[f.agent.jobType]=async L=>{if(L.elementId!==J)throw new Error(`No scripted agent handler for "${L.elementId}" — only "${J}" (the primary process's first agent host) is driven by the scripted brain. Use a live brain to exercise more than one host.`);const Y=await y(L),Z=(Y.activateElements??[]).map(ye=>ye.elementId).join(", ");return $({kind:"agent",text:Y.completionConditionFulfilled?"🤖 scripted agent: done":`🤖 scripted agent: calling ${Z||"(nothing)"}`}),Y}}}de.current=!0,k(!0),V([]),O({});const A={...e.seed,...w};be(A),nn.current=_,tn.current=T;try{const F=b.redeploy(r),J=(F==null?void 0:F[0])??f.processId;$({kind:"start",text:`Starting "${J}" — ${f.agent?a.kind==="scripted"||!a.chat?"scripted brain":`live brain (${a.modelInUse??a.kind})`:"no agent in this model"}`});const L=b.createInstance(J,JSON.stringify(A));await new Promise(Y=>setTimeout(Y,Fe)),await ve(_,T,L)}finally{de.current=!1,k(!1)}},[b,e,p,r,m,w,f,a,$,Ne,ve]),Zn=h.useCallback(()=>{de.current=!1,k(!1),b.reset(),V([]),be({})},[b]),Wn=h.useCallback(()=>{if(!ue||Pe.current&&!Pe.current.validate())return;const y=b.completeUserTask(ue.key,JSON.stringify(P));$({kind:"human",text:`👤 ${$e(P)}`}),y&&y.completedInstances>=1&&$({kind:"done",text:"✅ process instance completed"})},[ue,P,b,$]),qn=h.useMemo(()=>{var y,_;return b.phase==="loading"?o.jsx(W,{variant:"neutral",children:"Booting engine…"}):b.phase==="error"?o.jsx(W,{variant:"danger",children:"Engine error"}):U?o.jsx(W,{variant:"info",children:"Running…"}):(((y=b.snapshot)==null?void 0:y.incidentElementIds.length)??0)>0?o.jsx(W,{variant:"danger",children:"Incident"}):ue?o.jsx(W,{variant:"warning",children:"Waiting for a human"}):(((_=b.snapshot)==null?void 0:_.completedInstances)??0)>=1?o.jsx(W,{variant:"success",children:"Completed"}):o.jsx(W,{variant:"neutral",children:"Ready"})},[b.phase,b.snapshot,U,ue]);return o.jsxs("div",{className:"runner",children:[o.jsxs("section",{className:"intro",children:[o.jsx("h1",{children:e.title}),o.jsx("p",{children:e.blurb}),o.jsxs("div",{className:"controls",children:[o.jsx(H,{"data-tour":me.runButton,onClick:()=>void Hn(),disabled:b.phase!=="ready"||U||p.hasErrors||!!I&&!fe,children:"▶ Run"}),o.jsx(H,{variant:"secondary",onClick:Zn,disabled:b.phase!=="ready",children:"↺ Reset"}),e.tour&&o.jsx(H,{variant:"secondary",onClick:N.start,disabled:N.active,children:N.active?"Touring…":`🧭 ${e.tour.label}`}),qn]}),b.phase==="error"&&o.jsxs(oe,{variant:"destructive",children:[o.jsx(se,{children:"Engine error"}),o.jsx(ae,{children:b.error})]}),v&&o.jsxs(oe,{variant:"destructive",children:[o.jsx(se,{children:"Code didn't compile"}),o.jsx(ae,{children:v})]}),p.hasErrors&&o.jsxs(oe,{variant:"destructive",children:[o.jsx(se,{children:"Run is disabled — the diagram has unresolved references"}),o.jsx(ae,{children:o.jsx("ul",{className:"diagnostics",children:p.diagnostics.filter(y=>y.severity==="error").map((y,_)=>o.jsx("li",{children:y.message},_))})})]}),!p.hasErrors&&p.diagnostics.length>0&&o.jsxs(oe,{children:[o.jsx(se,{children:"Heads up"}),o.jsx(ae,{children:o.jsx("ul",{className:"diagnostics",children:p.diagnostics.map((y,_)=>o.jsx("li",{children:y.message},_))})})]})]}),o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"col",children:[o.jsxs(ee,{className:"panel","data-tour":me.diagram,children:[o.jsxs(ne,{children:[o.jsx(te,{children:"Process"}),o.jsxs(re,{children:[f.processName," — live token (green), incidents (red)."]})]}),o.jsx(ie,{children:o.jsx(h.Suspense,{fallback:o.jsx("div",{className:"diagram-fallback",children:b.phase==="loading"?"Booting the engine…":"Loading diagram…"}),children:o.jsx(Qr,{xml:p.resolvedBpmn,activeIds:((ln=b.snapshot)==null?void 0:ln.activeElementIds)??[],incidentIds:((dn=b.snapshot)==null?void 0:dn.incidentElementIds)??[],className:"diagram"})})})]}),ue&&o.jsxs(ee,{className:"panel",children:[o.jsxs(ne,{children:[o.jsx(te,{children:(K==null?void 0:K.label)??"Human task"}),o.jsx(re,{children:Ie?`Rendered from the model's form "${K==null?void 0:K.formId}".`:"This task has no linked form — complete it with no variables."})]}),o.jsxs(ie,{children:[rn.length>0&&o.jsxs(oe,{variant:"destructive",children:[o.jsx(se,{children:"The agent didn't finish its checks"}),o.jsxs(ae,{children:["It completed without running"," ",rn.map(y=>y.label||y.elementId).join(", "),". The process took the default path to this task, so the findings below have no value to report."]})]}),Ie&&o.jsx(h.Suspense,{fallback:o.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:o.jsx(vn,{ref:Pe,schema:Ie,values:P,onChange:(y,_)=>O(T=>({...T,[y]:_})),context:Q,onValidityChange:Jn})}),o.jsx(H,{onClick:Wn,disabled:!!Ie&&!le,children:"Complete task"})]})]}),pe&&o.jsxs(ee,{className:"panel",children:[o.jsxs(ne,{children:[o.jsx(te,{children:pe.control.label}),o.jsx(re,{children:"This job is held here on purpose — pick how it resolves."})]}),o.jsx(ie,{children:o.jsxs("div",{className:"controls",children:[o.jsx(H,{onClick:()=>void on("complete"),disabled:U,children:pe.control.completeLabel??"✅ Complete normally"}),o.jsx(H,{variant:"secondary",onClick:()=>void on("action"),disabled:U,children:pe.control.action.label})]})})]}),o.jsxs("div",{className:"row",children:[o.jsxs(ee,{className:"panel grow","data-tour":me.variablesPanel,children:[o.jsxs(ne,{children:[o.jsx(te,{children:"Variables"}),o.jsx(re,{children:"The instance payload, live."})]}),o.jsx(ie,{children:o.jsx("pre",{className:"vars",children:$e(Q,2)})})]}),o.jsx(Sr,{log:B,elementStats:(un=b.snapshot)==null?void 0:un.elementStats,incidents:(mn=b.snapshot)==null?void 0:mn.incidents,labelFor:Vn})]})]}),o.jsxs("div",{className:"col",children:[f.agent&&o.jsxs(ee,{className:"panel","data-tour":me.brainPanel,children:[o.jsxs(ne,{children:[o.jsx(te,{children:"Brain"}),o.jsxs(re,{children:["What drives “",f.agent.label,"”. The model recommends; the process governs."]})]}),o.jsx(ie,{children:o.jsx(Tr,{brain:a})})]}),o.jsxs(ee,{className:"panel",children:[o.jsxs(ne,{children:[o.jsx(te,{children:"Start"}),o.jsx(re,{children:f.startFormId?`The model's start form "${f.startFormId}".`:"The starting payload."})]}),o.jsxs(ie,{children:[e.scenarios&&o.jsx("div",{className:"scenarios",children:e.scenarios.map(y=>o.jsx(H,{size:"sm",variant:"secondary",disabled:U,onClick:()=>j(_=>({..._,...y.variables})),children:y.label},y.label))}),I?o.jsx(h.Suspense,{fallback:o.jsx("div",{className:"form-fallback",children:"Loading form…"}),children:o.jsx(vn,{ref:Me,schema:I,values:w,onChange:(y,_)=>j(T=>({...T,[y]:_})),disabled:U,onValidityChange:ze})}):o.jsx("pre",{className:"vars",children:$e(w,2)})]})]}),o.jsxs(ee,{className:"panel editors","data-tour":me.codePanel,children:[o.jsxs(ne,{children:[o.jsx(te,{children:"Code"}),o.jsx(re,{children:"One handler per BPMN element. Return variables to merge, or throw to fail the job."})]}),o.jsx(st,{}),o.jsx(ie,{children:o.jsx(h.Suspense,{fallback:o.jsx("div",{className:"editor-fallback",children:"Loading editor…"}),children:o.jsxs(at,{value:S,onValueChange:X,children:[o.jsxs(ct,{children:[o.jsx(je,{value:Nn,children:"model"}),f.agent&&o.jsx(je,{value:Qe,children:"agent (scripted)"}),e.handlers.map(y=>{var _;return o.jsx(je,{value:y.elementId,children:((_=f.tasks.find(T=>T.elementId===y.elementId))==null?void 0:_.label)??y.elementId},y.elementId)}),Object.keys(d).map(y=>o.jsx(je,{value:In+y,children:y},y))]}),o.jsxs(ke,{value:Nn,children:[o.jsxs("div",{className:"editor-meta",children:[o.jsx("strong",{children:"Model"}),o.jsx("code",{children:"edit the diagram visually — Run re-checks it below"}),o.jsx(H,{variant:"secondary",size:"sm",onClick:()=>s(e.bpmn),disabled:r===e.bpmn,children:"Revert to original"})]}),o.jsx(Yr,{value:r,onChange:s})]}),f.agent&&o.jsxs(ke,{value:Qe,children:[o.jsxs("div",{className:"editor-meta",children:[o.jsx("strong",{children:f.agent.label}),o.jsx("code",{children:a.kind==="scripted"||!a.chat?"in use":"unused — a live brain is connected"})]}),o.jsx("div",{className:"editor-wrap",children:o.jsx(Ye,{height:"360px",defaultLanguage:"javascript",value:m,onChange:y=>i(y??""),options:Je})})]}),e.handlers.map(y=>{var _;return o.jsxs(ke,{value:y.elementId,children:[o.jsxs("div",{className:"editor-meta",children:[o.jsx("strong",{children:((_=f.tasks.find(T=>T.elementId===y.elementId))==null?void 0:_.label)??y.elementId}),o.jsx("code",{children:y.standsInFor??y.elementId})]}),o.jsx("div",{className:"editor-wrap",children:o.jsx(Ye,{height:"360px",defaultLanguage:"javascript",value:c[y.elementId],onChange:T=>l(A=>({...A,[y.elementId]:T??""})),options:Je})})]},y.elementId)}),Object.keys(d).map(y=>o.jsxs(ke,{value:In+y,children:[o.jsxs("div",{className:"editor-meta",children:[o.jsx("strong",{children:y}),o.jsxs("code",{children:["prompt / template text — substitutes"," ","{{"+y+"}}"]})]}),o.jsx("div",{className:"editor-wrap",children:o.jsx(Ye,{height:"360px",defaultLanguage:"markdown",value:d[y],onChange:_=>g(T=>Le(T,{[y]:_??""})),options:Je})})]},y))]})})})]}),f.agent&&o.jsxs(ee,{className:"panel",children:[o.jsxs(ne,{children:[o.jsx(te,{children:"Tools, as the model sees them"}),o.jsxs(re,{children:["Read from the diagram — element name, documentation, and every",o.jsx("code",{children:" fromAi(…)"})," argument."]})]}),o.jsx(ie,{children:o.jsx("ul",{className:"tool-list",children:f.agent.tools.map(y=>o.jsxs("li",{children:[o.jsx("code",{children:y.elementId}),o.jsxs("span",{children:[" — ",y.documentation||y.label]}),y.args.length>0&&o.jsx("ul",{children:y.args.map(_=>o.jsxs("li",{children:[o.jsxs("code",{children:[_.name,": ",_.type]})," ","— ",_.description]},_.name))})]},y.elementId))})})]})]})]})]})}const Je={minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,tabSize:2,automaticLayout:!0},Jr=`You are a demo workflow assistant for fictional compliance checks.\r
\r
You must invoke tools using the actual tool-calling mechanism available to you - never describe or simulate a tool call in your plain-text response, and never invent, guess, or fabricate what a tool would return.\r
\r
Your job: verify this shipment's compliance and record your clearance decision. Use whichever tools are actually relevant to what's in the shipment notes, in whatever order makes sense, each at most once - base every argument on real information, never invented data. A compliance score is CLEARED if even, FLAGGED-FOR-REVIEW if odd. Record your decision only once you've reached it, and only once - what happens next is handled automatically.\r
`,Gr=`Please verify export compliance for this shipment and notify the team of your decision.\r
`,Vr={id:"compliance-walkthrough",label:"Take the tour",steps:[{title:"Start a run",description:"Press Run to send a shipment through the compliance agent.",target:{anchor:me.runButton}},{title:"The agent picks its own tools",description:"This AI Agent reads the shipment notes and decides, turn by turn, which of the tools below it to call — nothing here is hard-coded into a fixed sequence.",target:{elementId:"ComplianceCheckAgent"}},{title:"Watch the token move",description:"The agent's first move is to look up the genetic marker mentioned in the notes.",target:{elementId:"VerifyGeneticMarker"},waitFor:{kind:"activeElement",elementId:"VerifyGeneticMarker"}},{title:"A cleared shipment notifies the export team",description:"Once the compliance score comes back clean, the process notifies the export team automatically — no human review needed for this scenario.",target:{elementId:"NotifyExportTeam"},waitFor:{kind:"elementCompleted",elementId:"NotifyExportTeam"}},{title:"Everything the run recorded",description:"The variables panel shows the marker record, the country lookup, the compliance score, and the final decision — exactly what each tool and the agent wrote along the way.",target:{anchor:me.variablesPanel}}],successEvent:{kind:"instanceCompleted"}},Hr=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Zr="Camunda Cloud",Wr="8.10.0",qr={name:"Camunda Web Modeler",version:"9b5d5ef"},Kr=19,Xr="seed-export-shipment-ready",ei=[{text:"# Use a predefined scenario...",type:"text",layout:{row:"Row_04pl1rt",columns:null},id:"Field_0a6kzzq"},{label:"Scenario",values:[{label:"Likely cleared (TP53 marker, Brazil)",value:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{label:"Likely flagged for review (BRCA1 marker, Germany)",value:"SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1"},{label:"Custom (write your own below)",value:""}],description:"Use pre-defined sceanrio - to use leave Shipment notes below blank.",type:"select",layout:{row:"Row_scenario",columns:null},id:"Field_Scenario",key:"scenario",defaultValue:"SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53"},{text:`The following shipments notes are used:
* Likely cleared: SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53.
* Likely flagged: SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1.`,type:"text",layout:{row:"Row_1h31mub",columns:null},id:"Field_0j1vwd9"},{text:"# ...or hand in your own data",type:"text",layout:{row:"Row_1wu4opr",columns:null},id:"Field_12u5gzd"},{label:"Shipment notes",description:"If set, overrides the scenario above. Leave blank to use the scenario selected above. The agent reads this to check for clearance.",type:"textarea",layout:{row:"Row_shipment_notes",columns:null},id:"Field_ShipmentNotes",key:"shipmentNotes",defaultValue:""}],ni="default",ti={executionPlatform:Zr,executionPlatformVersion:Wr,exporter:qr,schemaVersion:Kr,id:Xr,components:ei,type:ni},ri="Camunda Cloud",ii="8.10.0",oi={name:"Camunda Web Modeler",version:"9b5d5ef"},si=19,ai="seed-export-compliance-review",ci=[{text:`# Compliance review needed

The agent flagged this shipment for manual review. Check its findings below, then record your decision.`,type:"text",layout:{row:"Row_heading",columns:null},id:"Field_ReviewHeading"},{text:`**Shipment notes:** {{if shipmentNotes = null or shipmentNotes = "" then scenario else shipmentNotes}}

**Gene marker found:** {{if markerRecord = null then "none" else markerRecord.geneSymbol + " (RefSeq " + markerRecord.refSeqId + ", " + markerRecord.chrom + ")"}}

**Destination country:** {{if countryInfo = null then "unknown" else countryInfo.name + " (capital: " + countryInfo.capital + ", currency: " + countryInfo.currency + ")"}}

**Compliance score:** {{complianceScore}}

**Agent's decision:** {{decision}}`,type:"text",layout:{row:"Row_findings",columns:null},id:"Field_ReviewFindings"},{label:"Reviewer decision",values:[{label:"Approve for export",value:"approved"},{label:"Reject shipment",value:"rejected"}],type:"radio",layout:{row:"Row_review_decision",columns:null},id:"Field_ReviewDecision",key:"reviewDecision",validate:{required:!0}},{label:"Reviewer comments",description:"Explain your decision - this is recorded alongside the process instance.",type:"textarea",layout:{row:"Row_review_comments",columns:null},id:"Field_ReviewComments",key:"reviewComments"}],li="default",di={executionPlatform:ri,executionPlatformVersion:ii,exporter:oi,schemaVersion:si,id:ai,components:ci,type:li},ui=Object.assign({"./prompts/system-prompt.md":Jr,"./prompts/user-prompt.md":Gr}),mi=Le(Object.fromEntries(Object.entries(ui).map(([e,n])=>[Lt(e),n.trimEnd()]))),Tn="SHIP-2026-0731 is prepared for transfer to Brazil. Supporting paperwork includes reference code TP53",pi="SHIP-2026-0900 is prepared for transfer to Germany. Supporting paperwork includes reference code BRCA1",gi=`async (job) => {
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
}`,hi=`async (job, { text, sleep, trace }) => {
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
}`,bi=`async (job, { text, sleep, trace }) => {
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
}`,fi=`async (job, { num, sleep }) => {
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
}`,yi=`async (job, { text, trace }) => {
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
}`,Mi=`async (job, { sleep }) => {
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
}`,wi={id:"seed-export-compliance",title:"Seed export compliance agent",blurb:"An AI agent picks its own tools to check a shipment, then a gateway routes on its decision — cleared shipments notify the export team, flagged ones go to a human. The LLM recommends; the BPMN process governs.",docsUrl:"https://camunda.com/blog/agentic-ai/",bpmn:Hr,forms:{"seed-export-shipment-ready":ti,"seed-export-compliance-review":di},seed:{scenario:Tn,shipmentNotes:""},scenarios:[{label:"Likely cleared (TP53 → Brazil)",variables:{scenario:Tn,shipmentNotes:""}},{label:"Likely flagged (BRCA1 → Germany)",variables:{scenario:pi,shipmentNotes:""}}],scriptedAgent:gi,templates:mi,tour:Vr,handlers:[{elementId:"VerifyGeneticMarker",standsInFor:"JDBC connector — UCSC hg38",source:hi},{elementId:"CheckDestinationCountry",standsInFor:"GraphQL connector — countries API",source:bi},{elementId:"ComputeComplianceScore",standsInFor:"REST connector — api.mathjs.org",source:fi},{elementId:"RecordComplianceDecision",standsInFor:"Script task — FEEL",source:yi},{elementId:"NotifyExportTeam",standsInFor:"REST connector — httpbin.io",source:Mi}]},_i=`<?xml version="1.0" encoding="UTF-8"?>
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
`,xi=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Ni=`async (job, { num, sleep }) => {
  const quantity = num("quantity", 1);
  const unitPrice = 25; // try changing this and re-running

  await sleep(400);

  return { charged: true, amountCharged: quantity * unitPrice };
}`,Ii=`async (job, { sleep, trace }) => {
  await sleep(400);
  trace("handing over to the carrier");

  // Throw to fail the job and raise an incident on the diagram — try it.
  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,vi={id:"order-process",title:"Order process with service workers",blurb:"The getting-started order process: check inventory, charge payment, ship. No agent and no human step — the same runner, driven entirely by what's in the diagram.",docsUrl:"https://docs.camunda.io/docs/next/guides/getting-started-orchestration-cluster/",bpmn:_i,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:xi},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Ni},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Ii}]},Ti=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,ji=`async (job, { text, num, sleep, trace }) => {
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
}`,ki={id:"rocket-launch",title:"Rocket launch",blurb:"The getting-started rocket launch, boiled down to one service task: launch. The smallest possible example, and the smallest possible test of the framework's extensibility.",bpmn:Ti,seed:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100},scenarios:[{label:"Full tanks — launch succeeds",variables:{missionName:"Apollo 11",destination:"the Moon",fuelLevel:100}},{label:"Low fuel — mission scrubbed",variables:{missionName:"Apollo 13",destination:"the Moon",fuelLevel:30}}],handlers:[{elementId:"Activity_LaunchRocket",standsInFor:"job worker — launch-rocket",source:ji}]},Ei=`<?xml version="1.0" encoding="UTF-8"?>\r
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
`,Di=`async (job, { text, sleep }) => {
  // The starting variables arrive on 'job.variables'.
  const item = text("item", "default-item");

  await sleep(400);

  // Whatever you return is merged onto the process instance.
  return { item: item + " allocated", inStock: true };
}`,Ai=`async (job, { num, sleep }) => {
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
}`,Si=`async (job, { sleep, trace }) => {
  // Also held back manually — see CHARGE_PAYMENT's comment above. The
  // "Fire the shipping-delayed timer" button advances the virtual clock past
  // this task's boundary timer instead of calling this handler.
  await sleep(400);
  trace("handing over to the carrier");

  return { shipped: true, tracking: "1Z" + Math.floor(Math.random() * 1e9) };
}`,Li={id:"order-process-boundary-events",title:"Order process with boundary events",blurb:"The getting-started order process, extended with a timer and an error boundary event: charge payment can be declined, and a delayed shipment can escalate — both fired by hand from the runner rather than by chance.",docsUrl:"https://github.com/camunda/camunda-8-get-started/tree/main/2-order-process-with-service-workers",bpmn:Ei,seed:{item:"camunda-t-shirt",quantity:3},handlers:[{elementId:"Activity_0tw2fu0",standsInFor:"job worker — check-inventory",source:Di},{elementId:"Activity_1ppsbgi",standsInFor:"job worker — charge-payment",source:Ai,manualControl:{label:"Charge payment method",completeLabel:"✅ Complete normally",action:{kind:"error",errorCode:"CHARGE_DECLINED",message:"The card issuer declined the charge.",label:"❌ Simulate: card declined"}}},{elementId:"Activity_08pg6im",standsInFor:"job worker — ship-items",source:Si,manualControl:{label:"Ship items",completeLabel:"✅ Ship it",action:{kind:"timer",label:"🕐 Fire the shipping-delayed timer"}}}]},De=[ki,wi,vi,Li];function en(){return"/pr-preview/pr-56/"}function Ci(e){const n=en();return e.startsWith(n)?"/"+e.slice(n.length):e}function zi(e=location.pathname){const t=Ci(e).match(/^\/examples\/([^/]+)\/?$/);if(t)try{return{kind:"example",id:decodeURIComponent(t[1])}}catch{return{kind:"gallery"}}return{kind:"gallery"}}function Pi(e=location.search){return new URLSearchParams(e).get("embed")==="1"}function Oi(){return en()}function jn(e){return`${en()}examples/${encodeURIComponent(e)}`}function kn(e,n={}){const t=new URL(location.href);t.pathname=e,t.search=n.search??t.search,n.hash!==void 0&&(t.hash=n.hash),n.replace?history.replaceState(history.state,"",t):history.pushState(history.state,"",t),window.dispatchEvent(new PopStateEvent("popstate"))}function En(){return{route:zi(),embed:Pi()}}function Bi(){const[e,n]=h.useState(En);return h.useEffect(()=>{const t=()=>n(En());return window.addEventListener("popstate",t),()=>window.removeEventListener("popstate",t)},[]),e}const Ri="web-demo-framework:height",Ui="web-demo-framework:request-height";function Fi(e){return{type:Ri,height:Math.ceil(e)}}const Dn="embed-height-auto";function Qi(e){h.useEffect(()=>{if(!e||typeof window>"u"||window.parent===window)return;const n=document.documentElement;n.classList.add(Dn);let t=-1;const r=(c=!1)=>{const l=document.documentElement.scrollHeight;!c&&Math.abs(l-t)<2||(t=l,window.parent.postMessage(Fi(l),"*"))},s=c=>{if(c.source!==window.parent)return;const l=c.data;!l||l.type!==Ui||r(!0)};window.addEventListener("message",s),r();const a=new ResizeObserver(()=>r());return a.observe(n),()=>{a.disconnect(),window.removeEventListener("message",s),n.classList.remove(Dn)}},[e])}function Yi(){const{route:e,embed:n}=Bi(),t=Yn().brain,r=Lr();Qi(n);const s=e.kind==="example"?e.id:De[0].id,a=De.find(m=>m.id===s)??De[0],c=m=>{kn(jn(m),{hash:location.hash})},l=o.jsxs(o.Fragment,{children:[!n&&e.kind==="gallery"&&o.jsx("nav",{className:"example-picker",children:De.map(m=>o.jsx(H,{size:"sm",variant:m.id===a.id?"default":"secondary",onClick:()=>c(m.id),children:m.title},m.id))}),!n&&e.kind==="example"&&o.jsx("div",{className:"example-nav",children:o.jsx(H,{size:"sm",variant:"secondary",onClick:()=>kn(Oi()),children:"← All examples"})}),o.jsxs("div",{className:"example-meta",children:[a.docsUrl&&o.jsx("a",{className:"docs-link",href:a.docsUrl,target:"_blank",rel:"noreferrer noopener",children:"View on camunda.com ↗"}),n&&o.jsx("a",{className:"open-full-page",href:jn(a.id)+(location.hash||""),target:"_top",rel:"noreferrer",children:"Open full page ↗"})]}),o.jsx($r,{example:a,initialBrainKind:t,initialTourId:r},a.id)]});return n?o.jsx("div",{className:"c4-ui app-shell app-embed",children:o.jsx("main",{id:"main",className:"layout layout-embed",children:l})}):o.jsxs("div",{className:"c4-ui app-shell",children:[o.jsx(lt,{appName:"Runnable Camunda examples",trailing:o.jsx("span",{className:"app-subtitle",children:"model + code + optional LLM, in your browser"})}),o.jsx("main",{id:"main",className:"layout",children:l})]})}et.createRoot(document.getElementById("root")).render(o.jsx(h.StrictMode,{children:o.jsx(dt,{children:o.jsx(Yi,{})})}));export{Pn as J,q as _,Vi as c};
