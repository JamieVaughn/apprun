class t{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter(t=>t.fn!==e)}find(t){return this._events[t]}run(t,...e){const n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter(t=>!t.options.once),n.forEach(n=>{const{fn:s,options:i}=n;return i.delay?this.delay(t,s,e,i):s.apply(this,e),!n.options.once}),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout(()=>{clearTimeout(s._t),e.apply(this,n)},s.delay)}}let e;const n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;n.app&&n._AppRunVersions?e=n.app:(e=new t,n.app=e,n._AppRunVersions="AppRun-2");var s=e;let i=0;function o(t,e,n=0){if(0===n&&(i=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>o(t,e,i));let r=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(r=function(t,e,n){const{tag:i,props:o,children:r}=t;let c=`_${n}`,h=o&&o.id;h?c=h:h=`_${n}${Date.now()}`,e.s||(e.s={});let u=e.s[c];u?h=u.i:(u=e.s[c]=new i(Object.assign(Object.assign({},o),{children:r})).mount(h),u.i=h);let l=u.state;if(u.mounted){const t=u.mounted(o,r,l);void 0!==t&&(l=u.state=t)}if(l instanceof Promise){const t=t=>{u.element=t,u.setState(l)};return s.createElement("section",Object.assign({},o,{id:h,ref:e=>t(e)}))}{const t=u._view(l,o),e=e=>{u.element=e,u.renderState(l,t)};return s.createElement("section",Object.assign({},o,{id:h,ref:t=>e(t)}),t)}}(t,e,i++)),r&&Array.isArray(r.children)&&(r.children=r.children.map(t=>o(t,e,i))),r}function r(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}const c={},h=function(t,e,n={}){if(null==e||!1===e)return;e=o(e,n);const s="SVG"===(null==t?void 0:t.nodeName);if(!t)return;Array.isArray(e)?l(t,e,s):l(t,[e],s)};function u(t,e,n){console.assert(!!t),n=n||"svg"===e.tag,function(t,e){const n=t.nodeName,s=`${e.tag||""}`;return n.toUpperCase()===s.toUpperCase()}(t,e)?(l(t,e.children,n),d(t,e.props)):t.parentNode.replaceChild(a(e,n),t)}function l(t,e,n){const s=Math.min(t.childNodes.length,e.length);for(let i=0;i<s;i++){const s=e[i],o=t.childNodes[i];if(s instanceof HTMLElement||s instanceof SVGElement)t.insertBefore(s,o);else if("string"==typeof s)o.textContent!==s&&(3===o.nodeType?o.textContent=s:t.replaceChild(f(s),o));else{const e=s.props&&s.props.key;if(e)if(o.key===e)u(t.childNodes[i],s,n);else{const r=c[e];r?(t.insertBefore(r,o),t.appendChild(o),u(t.childNodes[i],s,n)):t.insertBefore(a(s,n),o)}else u(t.childNodes[i],s,n)}}let i=t.childNodes.length;for(;i>s;)t.removeChild(t.lastChild),i--;if(e.length>s){const i=document.createDocumentFragment();for(let t=s;t<e.length;t++)i.appendChild(a(e[t],n));t.appendChild(i)}}function f(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function a(t,e){if(console.assert(null!=t),t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return f(t);if(!t.tag||"function"==typeof t.tag)return f(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return d(n,t.props),t.children&&t.children.forEach(t=>n.appendChild(a(t,e))),n}function d(t,e){console.assert(!!t);const n=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(n,e||{}),t._props=e;for(const n in e){const s=e[n];if("style"===n){t.style.cssText&&(t.style.cssText="");for(const e in s)t.style[e]!==s[e]&&(t.style[e]=s[e])}else if(n.startsWith("data-")){const e=n.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==s&&(s||""===s?t.dataset[e]=s:delete t.dataset[e])}else"id"===n||"class"===n||n.startsWith("role")||n.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(n)!==s&&(s?t.setAttribute(n,s):t.removeAttribute(n)):t[n]!==s&&(t[n]=s);"key"===n&&s&&(c[s]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame(()=>e.ref(t))}function p(t,...e){return r(e)}const b=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return Object.assign({},e).observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s={};Array.from(this.attributes).forEach(t=>s[t.name]=t.value);const i=this.children?Array.from(this.children):[];if(i.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign(Object.assign({},s),{children:i})).mount(this._shadowRoot,n),this._component.mounted){const t=this._component.mounted(s,i,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,s;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(s=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===s||s.call(n),this._component=null}attributeChangedCallback(...t){var e;null===(e=this._component)||void 0===e||e.run("attributeChanged",...t)}};var y=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,b(e,n))};const m={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function g(t,e={}){return(n,s,i)=>{const o=t?t.toString():s;return m.defineMetadata(`apprun-update:${o}`,{name:o,key:s,options:e},n),i}}function v(t,e={}){return function(n,s){const i=t?t.toString():s;m.defineMetadata(`apprun-update:${i}`,{name:i,key:s,options:e},n)}}function w(t,e){return function(n){return y(t,n,e),n}}const j=(t,e)=>(e?t.state[e]:t.state)||"",O=(t,e,n)=>{if(e){const s=Object.assign({},t.state);s[e]=n,t.setState(s)}else t.setState(n)};const k={};s.on("get-components",t=>t.components=k);const A=t=>t;class ${constructor(e,n,s,i){this.state=e,this.view=n,this.update=s,this.options=i,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){s.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=s.createElement;s.createElement=(t,e,...i)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(((t,e,n,i)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>i.run(t,e);else if("string"==typeof n)e[t]=t=>i.run(n,t);else if("function"==typeof n)e[t]=t=>i.setState(n(i.state,t));else if(Array.isArray(n)){const[s,...o]=n;"string"==typeof s?e[t]=t=>i.run(s,...o,t):"function"==typeof s&&(e[t]=t=>i.setState(s(i.state,...o,t)))}}else if("$bind"===t){const s=e.type||"text",o="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(s){case"checkbox":e.checked=j(i,o),e.onclick=t=>O(i,o||t.target.name,t.target.checked);break;case"radio":e.checked=j(i,o)===e.value,e.onclick=t=>O(i,o||t.target.name,t.target.value);break;case"number":case"range":e.value=j(i,o),e.oninput=t=>O(i,o||t.target.name,Number(t.target.value));break;default:e.value=j(i,o),e.oninput=t=>O(i,o||t.target.name,t.target.value)}else"select"===n?(e.value=j(i,o),e.onchange=t=>{t.target.multiple||O(i,o||t.target.name,t.target.value)}):"option"===n&&(e.selected=j(i,o),e.onclick=t=>O(i,o||t.target.name,t.target.selected))}else s.run("$",{key:t,tag:n,props:e,component:i})})(n,e,t,this),delete e[n])}),n(t,e,...i));const i=e?this.view(t,e):this.view(t);return s.createElement=n,i}renderState(t,e=null){if(!this.view)return;const n=e||this._view(t);if(s.debug&&s.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const i="string"==typeof this.element?document.getElementById(this.element):this.element;if(i){const t="_c";this.unload?i._component===this&&i.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),i.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver(t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(i)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):i.removeAttribute&&i.removeAttribute(t),i._component=this}e||this.render(i,n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,i;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),this.add_actions(),this.state=null!==(i=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==i?i:{},e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),s.debug){const e="string"==typeof t?t:t.id;k[e]=k[e]||[],k[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...i)=>{const o=e(this.state,...i);s.debug&&s.run("debug",{component:this,event:t,e:i,state:this.state,newState:o,options:n}),this.setState(o,n)},n))}add_actions(){const t=this.update||{};m.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=m.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,s,i]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[s,i])}):Object.keys(t).forEach(n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach(t=>e[t.trim()]=s)}),e["."]||(e["."]=A),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?s.run(n,...e):this._app.run(n,...e)}on(t,e,n){const i=t.toString();return this._actions.push({name:i,fn:e}),this.is_global_event(i)?s.on(i,e,n):this._app.on(i,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?s.off(e,n):this._app.off(e,n)})}}$.t=!0;const M="//",E="///",_=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");s.run(e,...n)||s.run("///",e,...n),s.run("//",e,...n)}else if(t.startsWith("/")){const[e,n,...i]=t.split("/");s.run("/"+n,...i)||s.run("///","/"+n,...i),s.run("//","/"+n,...i)}else s.run(t)||s.run("///",t),s.run("//",t)};s.h=s.createElement=function(t,e,...n){const s=r(n);if("string"==typeof t)return{tag:t,props:e,children:s};if(Array.isArray(t))return t;if(void 0===t&&n)return s;if(Object.getPrototypeOf(t).t)return{tag:t,props:e,children:s};if("function"==typeof t)return t(e,s);throw new Error(`Unknown tag in vdom ${t}`)},s.render=function(t,e,n){h(t,e,n)},s.Fragment=p,s.webComponent=y,s.start=(t,e,n,s,i)=>{const o=Object.assign(Object.assign({},i),{render:!0,global_event:!0}),r=new $(e,n,s);return i&&i.rendered&&(r.rendered=i.rendered),r.mount(t,o),r};const S=t=>{};s.on("$",S),s.on("debug",t=>S),s.on("//",S),s.on("#",S),s.route=_,s.on("route",t=>s.route&&s.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{s.route===_&&(window.onpopstate=()=>_(location.hash),_(location.hash))}),"object"==typeof window&&(window.Component=$,window.React=s,window.on=v,window.customElement=w);export default s;export{$ as Component,p as Fragment,E as ROUTER_404_EVENT,M as ROUTER_EVENT,s as app,w as customElement,g as event,v as on,g as update};
//# sourceMappingURL=apprun.esm.js.map
