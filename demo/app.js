!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e,n){"use strict";(function(t){var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this._events={}}return t.prototype.on=function(t,e,n){void 0===n&&(n={}),this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})},t.prototype.off=function(t,e){var n=this._events[t]||[];this._events[t]=n.filter((function(t){return t.fn!==e}))},t.prototype.find=function(t){return this._events[t]},t.prototype.run=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[t]||[];return console.assert(o&&o.length>0,"No subscriber for event: "+t),this._events[t]=o.filter((function(t){return!t.options.once})),o.forEach((function(r){var o=r.fn,a=r.options;return a.delay?e.delay(t,o,n,a):o.apply(e,n),!r.options.once})),o.length},t.prototype.once=function(t,e,r){void 0===r&&(r={}),this.on(t,e,n(n({},r),{once:!0}))},t.prototype.delay=function(t,e,n,r){var o=this;r._t&&clearTimeout(r._t),r._t=setTimeout((function(){clearTimeout(r._t),e.apply(o,n)}),r.delay)},t}();e.App=r;var o,a="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;a.app&&a._AppRunVersions?o=a.app:(o=new r,a.app=o,a._AppRunVersions="AppRun-1"),e.default=o}).call(this,n(3))},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=o(n(0));e.app=a.default;var i=n(5),s=n(7);e.Component=s.Component;var u=n(2);e.on=u.on,e.update=u.update,e.event=u.update;var l=n(9);e.ROUTER_EVENT=l.ROUTER_EVENT,e.ROUTER_404_EVENT=l.ROUTER_404_EVENT,a.default.createElement=i.createElement,a.default.render=i.render,a.default.Fragment=i.Fragment,a.default.start=function(t,e,n,o,a){var i=r(r({},a),{render:!0,global_event:!0}),u=new s.Component(e,n,o);return a&&a.rendered&&(u.rendered=a.rendered),u.mount(t,i),u};var c=function(t){};a.default.on("$",c),a.default.on("debug",(function(t){return c})),a.default.on(l.ROUTER_EVENT,c),a.default.on("#",c),a.default.route=l.route,a.default.on("route",(function(t){return a.default.route&&a.default.route(t)})),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(function(){a.default.route===l.route&&(window.onpopstate=function(){return l.route(location.hash)},l.route(location.hash))})),e.default=a.default,"object"==typeof window&&(window.Component=s.Component,window.React=a.default)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Reflect={meta:new WeakMap,defineMetadata:function(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys:function(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata:function(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}},e.update=function(t,n){return void 0===n&&(n={}),function(r,o,a){var i=t?t.toString():o;return e.Reflect.defineMetadata("apprun-update:"+i,{name:i,key:o,options:n},r),a}},e.on=function(t,n){return void 0===n&&(n={}),function(r,o){var a=t?t.toString():o;e.Reflect.defineMetadata("apprun-update:"+a,{name:a,key:o,options:n},r)}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(6)),a="_props";function i(t){var e=[],n=function(t){null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:""+t)};return t&&t.forEach((function(t){Array.isArray(t)?t.forEach((function(t){return n(t)})):n(t)})),e}e.createElement=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=i(n);if("string"==typeof t)return{tag:t,props:e,children:o};if(Array.isArray(t))return t;if(void 0===t&&n)return o;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:o};if("function"==typeof t)return t(e,o);throw new Error("Unknown tag in vdom "+t)};var s={};function u(t,e,n){void 0===n&&(n={}),null!=e&&(e=o.default(e,n),t&&(Array.isArray(e)?c(t,e):c(t,[e])))}function l(t,e){console.assert(!!t),function(t,e){var n=t.nodeName,r=""+(e.tag||"");return n.toUpperCase()===r.toUpperCase()}(t,e)?(c(t,e.children),p(t,e.props)):t.parentNode.replaceChild(f(e),t)}function c(t,e){for(var n=Math.min(t.childNodes.length,e.length),r=0;r<n;r++){var o=e[r],a=t.childNodes[r];if(o instanceof HTMLElement)t.insertBefore(o,a);else if("string"==typeof o)a.textContent!==o&&(3===a.nodeType?a.textContent=o:t.replaceChild(d(o),a));else{var i=o.props&&o.props.key;if(i)if(a.key===i)l(t.childNodes[r],o);else{var u=s[i];u?(t.insertBefore(u,a),t.appendChild(a),l(t.childNodes[r],o)):t.insertBefore(f(o),a)}else l(t.childNodes[r],o)}}for(var c=t.childNodes.length;c>n;)t.removeChild(t.lastChild),c--;if(e.length>n){var p=document.createDocumentFragment();for(r=n;r<e.length;r++)p.appendChild(f(e[r]));t.appendChild(p)}}function d(t){if(0===t.indexOf("_html:")){var e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function f(t,e){if(void 0===e&&(e=!1),console.assert(null!=t),t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return d(t);if(!t.tag||"function"==typeof t.tag)return d(JSON.stringify(t));var n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return p(n,t.props),t.children&&t.children.forEach((function(t){return n.appendChild(f(t,e))})),n}function p(t,e){console.assert(!!t);var n=t[a]||{};for(var r in e=function(t,e){e.class=e.class||e.className,delete e.className;var n={};return t&&Object.keys(t).forEach((function(t){return n[t]=null})),e&&Object.keys(e).forEach((function(t){return n[t]=e[t]})),n}(n,e||{}),t[a]=e,e){var o=e[r];if("style"===r)for(var i in t.style.cssText&&(t.style.cssText=""),o)t.style[i]!==o[i]&&(t.style[i]=o[i]);else if(r.startsWith("data-")){var u=r.substring(5).replace(/-(\w)/g,(function(t){return t[1].toUpperCase()}));t.dataset[u]!==o&&(o||""===o?t.dataset[u]=o:delete t.dataset[u])}else"id"===r||"class"===r||r.startsWith("role")||r.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(r)!==o&&(o?t.setAttribute(r,o):t.removeAttribute(r)):t[r]!==o&&(t[r]=o);"key"===r&&o&&(s[o]=t)}}e.updateElement=u,e.render=u,e.Fragment=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return i(e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);e.createElement=r.createElement,e.Fragment=r.Fragment,e.render=function(t,e,n){r.updateElement(t,e,n)}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=o(n(0));var i=0;e.default=function t(e,n,o){if(void 0===o&&(o=0),0===o&&(i=0),"string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return t(e,n,i)}));var s=e;return e&&"function"==typeof e.tag&&Object.getPrototypeOf(e.tag).__isAppRunComponent&&(s=function(t,e,n){var o=t.tag,i=t.props,s=t.children,u="_"+n,l=i&&i.id;l?u=l:l="_"+n+Date.now(),e.__componentCache||(e.__componentCache={});var c=e.__componentCache[u];c?l=c.__eid:(c=e.__componentCache[u]=new o(r(r({},i),{children:s})).mount(l)).__eid=l;var d=c.state;if(c.mounted){var f=c.mounted(i,s);void 0!==f&&(d=c.state=f)}var p="";return c.view&&(d instanceof Promise?d.then((function(){return c.run(".")})):(p=c._view(d,i),c.rendered&&setTimeout((function(){return c.rendered(d,i)})))),a.default.createElement("section",r({},i,{id:l}),p)}(e,n,i++)),s&&Array.isArray(s.children)&&(s.children=s.children.map((function(e){return t(e,n,i)}))),s}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,a=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},a=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(o(arguments[e]));return t},i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=i(n(0)),l=n(2),c=s(n(8)),d={};u.default.on("get-components",(function(t){return t.components=d}));var f=function(t){return t},p=function(){function t(t,e,n,o){var a=this;this.state=t,this.view=e,this.update=n,this.options=o,this._app=new u.App,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=function(){a._history_idx--,a._history_idx>=0?a.setState(a._history[a._history_idx],{render:!0,history:!1}):a._history_idx=0},this._history_next=function(){a._history_idx++,a._history_idx<a._history.length?a.setState(a._history[a._history_idx],{render:!0,history:!1}):a._history_idx=a._history.length-1},this.start=function(t,e){return void 0===t&&(t=null),void 0===e&&(e={render:!0}),a.mount(t,r(r({},e),{render:!0}))}}return t.prototype.render=function(t,e){u.default.render(t,e,this)},t.prototype._view=function(t,e){var n=this;if(void 0===e&&(e=null),this.view){var r=u.default.createElement;u.default.createElement=function(t,e){for(var o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];return e&&Object.keys(e).forEach((function(r){r.startsWith("$")&&(c.default(r,e,t,n),delete e[r])})),r.apply(void 0,a([t,e],o))};var o=e?this.view(t,e):this.view(t);return u.default.createElement=r,o}},t.prototype.renderState=function(t){var e=this;if(this.view){var n=this._view(t);if(u.default.debug&&u.default.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"==typeof document){var r="string"==typeof this.element?document.getElementById(this.element):this.element;if(r){if(this.unload){if(r._component!==this&&(this.tracking_id=(new Date).valueOf().toString(),r.setAttribute("_c",this.tracking_id),"undefined"!=typeof MutationObserver)){var o=new MutationObserver((function(t){var n=t[0],a=n.removedNodes;(n.oldValue===e.tracking_id||Array.from(a).indexOf(r)>=0)&&(e.unload(e.state),o.disconnect())}));r.parentNode&&o.observe(r.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["_c"]})}}else r.removeAttribute("_c");r._component=this}this.render(r,n),this.rendered&&this.rendered(this.state)}}},t.prototype.setState=function(t,e){var n=this;if(void 0===e&&(e={render:!0,history:!1}),t instanceof Promise)t.then((function(t){n.setState(t,e)})).catch((function(t){throw console.error(t),t})),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=a(this._history,[t]),this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}},t.prototype.mount=function(t,e){if(void 0===t&&(t=null),console.assert(!this.element,"Component already mounted."),this.options=e=r(r({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),this.add_actions(),void 0===this.state&&(this.state=null!=this.model?this.model:{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),u.default.debug){var n="string"==typeof t?t:t.id;d[n]=d[n]||[],d[n].push(this)}return this},t.prototype.is_global_event=function(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))},t.prototype.add_action=function(t,e,n){var r=this;void 0===n&&(n={}),e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];var s=e.apply(void 0,a([r.state],o));u.default.debug&&u.default.run("debug",{component:r,event:t,e:o,state:r.state,newState:s,options:n}),r.setState(s,n)}),n))},t.prototype.add_actions=function(){var t=this,e=this.update||{};l.Reflect.getMetadataKeys(this).forEach((function(n){if(n.startsWith("apprun-update:")){var r=l.Reflect.getMetadata(n,t);e[r.name]=[t[r.key].bind(t),r.options]}}));var n={};Array.isArray(e)?e.forEach((function(t){var e=o(t,3),r=e[0],a=e[1],i=e[2];r.toString().split(",").forEach((function(t){return n[t.trim()]=[a,i]}))})):Object.keys(e).forEach((function(t){var r=e[t];("function"==typeof r||Array.isArray(r))&&t.split(",").forEach((function(t){return n[t.trim()]=r}))})),n["."]||(n["."]=f),Object.keys(n).forEach((function(e){var r=n[e];"function"==typeof r?t.add_action(e,r):Array.isArray(r)&&t.add_action(e,r[0],r[1])}))},t.prototype.run=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=t.toString();return this.is_global_event(o)?u.default.run.apply(u.default,a([o],n)):(e=this._app).run.apply(e,a([o],n))},t.prototype.on=function(t,e,n){var r=t.toString();return this._actions.push({name:r,fn:e}),this.is_global_event(r)?u.default.on(r,e,n):this._app.on(r,e,n)},t.prototype.unmount=function(){var t=this;this._actions.forEach((function(e){var n=e.name,r=e.fn;t.is_global_event(n)?u.default.off(n,r):t._app.off(n,r)}))},t.__isAppRunComponent=!0,t}();e.Component=p},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,a=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},a=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(o(arguments[e]));return t},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=i(n(0)),u=function(t,e){return(e?t.state[e]:t.state)||""},l=function(t,e,n){if(e){var o=r({},t.state);o[e]=n,t.setState(o)}else t.setState(n)};e.default=function(t,e,n,r){if(t.startsWith("$on")){var i=e[t];if(t=t.substring(1),"boolean"==typeof i)e[t]=function(e){return r.run(t,e)};else if("string"==typeof i)e[t]=function(t){return r.run(i,t)};else if("function"==typeof i)e[t]=function(t){return r.setState(i(r.state,t))};else if(Array.isArray(i)){var c=o(i),d=c[0],f=c.slice(1);"string"==typeof d?e[t]=function(t){return r.run.apply(r,a([d],f,[t]))}:"function"==typeof d&&(e[t]=function(t){return r.setState(d.apply(void 0,a([r.state],f,[t])))})}}else if("$bind"===t){var p=e.type||"text",h="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(p){case"checkbox":e.checked=u(r,h),e.onclick=function(t){return l(r,h||t.target.name,t.target.checked)};break;case"radio":e.checked=u(r,h)===e.value,e.onclick=function(t){return l(r,h||t.target.name,t.target.value)};break;case"number":case"range":e.value=u(r,h),e.oninput=function(t){return l(r,h||t.target.name,Number(t.target.value))};break;default:e.value=u(r,h),e.oninput=function(t){return l(r,h||t.target.name,t.target.value)}}else"select"===n?(e.value=u(r,h),e.onchange=function(t){t.target.multiple||l(r,h||t.target.name,t.target.value)}):"option"===n&&(e.selected=u(r,h),e.onclick=function(t){return l(r,h||t.target.name,t.target.selected)})}else s.default.run("$",{key:t,tag:n,props:e,component:r})}},function(t,e,n){"use strict";var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,a=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},o=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=a(n(0));e.ROUTER_EVENT="//",e.ROUTER_404_EVENT="///",e.route=function(t){if(t||(t="#"),t.startsWith("#")){var n=r(t.split("/")),a=n[0],s=n.slice(1);i.default.run.apply(i.default,o([a],s))||i.default.run.apply(i.default,o([e.ROUTER_404_EVENT,a],s)),i.default.run.apply(i.default,o([e.ROUTER_EVENT,a],s))}else if(t.startsWith("/")){var u=r(t.split("/")),l=(u[0],u[1]);s=u.slice(2);i.default.run.apply(i.default,o(["/"+l],s))||i.default.run.apply(i.default,o([e.ROUTER_404_EVENT,"/"+l],s)),i.default.run.apply(i.default,o([e.ROUTER_EVENT,"/"+l],s))}else i.default.run(t)||i.default.run(e.ROUTER_404_EVENT,t),i.default.run(e.ROUTER_EVENT,t)},e.default=e.route},,,,,,,function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n(1));a.default.on(a.ROUTER_EVENT,(function(t){for(var e=document.querySelectorAll(".navbar-nav li"),n=0;n<e.length;++n)e[n].classList.remove("active");var r=document.querySelector("[href='"+t+"']");r&&r.parentElement.classList.add("active")}));var i=o(n(17)),s=o(n(18)),u=o(n(20)),l=document.getElementById("my-app");[i.default,s.default,u.default].forEach((function(t){return t(l)}))},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o,a=r(n(1)),i=function(t){var e=t.url;o.innerHTML="<div></div>",$(o.firstChild).load(e)};a.default.on("#",(function(){return a.default.render(o,a.default.createElement(i,{url:"demo/home.html"}))})),a.default.on("#new",(function(){return a.default.render(o,a.default.createElement(i,{url:"demo/new.html"}))})),e.default=function(t){return o=t}},function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a,i,s=r(n(1)),u=o(n(19)),l=function(t){a=performance.now(),i=t},c=function(){window.setTimeout((function(){var t=performance.now();console.log(i+" took "+(t-a))}),0)},d=new u.default,f={"#benchmark":function(t){return t},run:function(t){return t.run(),t},add:function(t){return t.add(),t},remove:function(t,e){t.delete(e),document.getElementById(e).remove()},select:function(t,e){t.selected&&(document.getElementById(t.selected).className="",t.selected=null),t.select(e),document.getElementById(e).className="danger"},updaterow:function(t){return t.update(),t},runlots:function(t){return t.runLots(),t},clear:function(t){return t.clear(),t},swaprows:function(t){return t.swapRows(),t}},p=function(t){for(;t;){if("TR"===t.tagName)return t.id;t=t.parentNode}};document.body.addEventListener("click",(function(t){var e=t.target;e&&("BUTTON"===e.tagName&&e.id?(t.preventDefault(),l(e.id),h.run(e.id),c()):e.matches(".remove")?(t.preventDefault(),l("remove"),h.run("remove",p(e)),c()):e.matches(".lbl")&&(t.preventDefault(),l("select"),h.run("select",p(e)),c()))}));var h=new s.Component(d,(function(t){var e=t.data.map((function(e){var n=e.id==t.selected?"danger":"",r=e.id;return s.default.createElement("tr",{className:n,id:r,key:r},s.default.createElement("td",{className:"col-md-1"},r),s.default.createElement("td",{className:"col-md-4"},s.default.createElement("a",{className:"lbl"},e.label)),s.default.createElement("td",{className:"col-md-1"},s.default.createElement("a",{className:"remove"},s.default.createElement("span",{className:"glyphicon glyphicon-remove remove","aria-hidden":"true"}))),s.default.createElement("td",{className:"col-md-6"}))}));return s.default.createElement("div",null,s.default.createElement("div",null,s.default.createElement("button",{type:"button",id:"run"},"Create 1,000 rows"),s.default.createElement("button",{type:"button",id:"runlots"},"Create 10,000 rows"),s.default.createElement("button",{type:"button",id:"add"},"Append 1,000 rows"),s.default.createElement("button",{type:"button",id:"updaterow"},"Update every 10th row"),s.default.createElement("button",{type:"button",id:"clear"},"Clear"),s.default.createElement("button",{type:"button",id:"swaprows"},"Swap Rows")),s.default.createElement("br",null),s.default.createElement("table",{className:"table table-hover table-striped test-data",id:"main-table"},s.default.createElement("tbody",null,e)))}),f);h.unload=function(){console.log("benchmark.unload")},e.default=function(t){return h.mount(t)}},function(t,e,n){"use strict";function r(t){return Math.round(1e3*Math.random())%t}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this.data=[],this.backup=null,this.selected=null,this.id=1}return t.prototype.buildData=function(t){void 0===t&&(t=1e3);for(var e=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],n=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],o=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"],a=[],i=0;i<t;i++)a.push({id:this.id++,label:e[r(e.length)]+" "+n[r(n.length)]+" "+o[r(o.length)]});return a},t.prototype.updateData=function(t){void 0===t&&(t=10);for(var e=0;e<this.data.length;e+=10)this.data[e].label+=" !!!"},t.prototype.delete=function(t){this.data=this.data.filter((function(e,n){return e.id!=t})),this.selected=null},t.prototype.run=function(){this.data=this.buildData(),this.selected=null},t.prototype.add=function(){this.data=this.data.concat(this.buildData(1e3)),this.selected=null},t.prototype.update=function(){this.updateData(),this.selected=null},t.prototype.select=function(t){this.selected=t},t.prototype.hideAll=function(){this.backup=this.data,this.data=[],this.selected=null},t.prototype.showAll=function(){this.data=this.backup,this.backup=null,this.selected=null},t.prototype.runLots=function(){this.data=this.buildData(1e4),this.selected=null},t.prototype.clear=function(){this.data=[],this.selected=null},t.prototype.swapRows=function(){if(this.data.length>998){var t=this.data[1];this.data[1]=this.data[998],this.data[998]=t}},t}();e.default=o},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=i(n(1)),l=s(n(21)),c=function(t){return'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/custom-elements/1.1.2/custom-elements.min.js"><\/script>\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">\n  <title>AppRun Playground</title>\n  <style>\n    body {\n      font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;\n      margin: 2em;\n    }\n  </style>\n  <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n  <script src="https://unpkg.com/apprun@es6/dist/apprun-html.js"><\/script>\n  <link rel="stylesheet" href="https://unpkg.com/pikaday@latest/css/pikaday.css">\n  <script src="https://unpkg.com/pikaday@latest/pikaday.js"><\/script>\n</head>\n<body>\n<script type="text/babel" data-presets="es2017, react">\n  '+t+"\n<\/script>\n</body>\n</html>"},d=function(t){var e=t.code,n=window.open().document;n.open(),n.write(c(e)),n.close()},f=function(t){var e=t.code,n=document.getElementById("iframe");n.parentNode.replaceChild(n.cloneNode(),n);var r=(n=document.getElementById("iframe")).contentWindow.document;r.open(),r.write(c(e)),r.close()},p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.codeEditor=null,e.state=a(a({},l.default[0]),{selectedIndex:0}),e.view=function(t){return u.default.createElement("div",{class:"playground"},u.default.createElement("div",{class:"row"},u.default.createElement("div",{class:"col-sm-6"},"Examples: ",u.default.createElement("select",{$onchange:"select"},l.default.map((function(e,n){return u.default.createElement("option",{selected:n===t.selectedIndex},e.name)})))),u.default.createElement("div",{class:"col-sm-6"},u.default.createElement("button",{class:"btn btn-default btn-sm pull-right",$onclick:"openTab"},"Open in a new tab"))),u.default.createElement("div",{class:"row"},u.default.createElement("div",{class:"col-sm-6"},u.default.createElement("textarea",{id:"playground-code"},t.code)),u.default.createElement("div",{class:"col-sm-6"},u.default.createElement("iframe",{id:"iframe"}))))},e.update={"#play":function(t,n){var r=parseInt(n);return isNaN(r)||(t=a(a({},l.default[r]),{selectedIndex:r})),e.codeEditor=null,t},select:function(t,n){e.state=a(a({},l.default[n.target.selectedIndex]),{selectedIndex:n.target.selectedIndex}),history.pushState(null,null,"#play/"+n.target.selectedIndex),e.codeEditor.setValue(e.state.code)},change:function(t,e){t.code=e,f(t)},openTab:function(t,e){e.preventDefault(),d(t)}},e.rendered=function(t){e.codeEditor||(e.codeEditor=CodeMirror.fromTextArea(document.getElementById("playground-code"),{lineNumbers:!0,mode:"jsx"}),e.codeEditor.on("change",(function(t){return e.run("change",t.getValue())}))),f(t)},e.unload=function(){return e.codeEditor=null},e}return o(e,t),e}(u.Component);e.PlayComponent=p,e.default=function(t){return(new p).mount(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{name:"Hello World ($bind)",code:"// Hello World ($bind)\nconst state = '';\nconst view = state => <div>\n  <h1>Hello {state}</h1>\n  <input $bind />\n</div>;\napp.start(document.body, state, view, {});\n"},{name:"Hello World ($on)",code:"// Hello World ($on)\nconst state = { who: 'World' };\nconst view = ({who}) => <div>\n  <h1>Hello {who}</h1>\n  <p><input $oninput value={who}/> $oninput</p>\n  <p><input $oninput=\"hello\" value={who}/> $oninput=\"event\"</p>\n  <p><input $oninput={hello} value={who}/> $oninput=Function</p>\n  <p><input $oninput={[hello]} value={who}/> $oninput=Tuple [Function, ...p] </p>\n</div>;\n// update tuple, new in 1.19.2\nconst update = [\n  ['oninput, hello', (_, e) => ({who:e.target.value})]\n];\nconst hello = (_, e) => ({who:e.target.value});\napp.start(document.body, state, view, update);\n"},{name:"Hello World (debounce)",code:"// Hello World (debounce)\nconst state = '';\nconst view = state => <div>\n  <h1>Hello {state}</h1>\n  <input $oninput />\n</div>;\nconst update = {\n  'oninput': [(_, e) => e.target.value, { delay: 300 }]\n}\napp.start(document.body, state, view, update);\n"},{name:"Clock",code:"// Clock\nconst state = new Date();\nconst view = state => <h1>{state.toLocaleTimeString()}</h1>;\nconst update = {\n  'timer': state => new Date()\n}\nwindow.setInterval(() => { app.run('timer') }, 1000);\napp.start(document.body, state, view, update);\n"},{name:"Stopwatch",code:"// Stopwatch\nlet id;\nconst state = {\n  start: new Date(),\n  elapsed: '0'\n}\nconst view = state => {\n  return <div>\n    <h1>{state.elapsed}</h1>\n    <button $onclick=\"start\">Start</button>\n    <button $onclick=\"stop\">Stop</button>\n  </div>;\n};\nconst update = {\n  'start':state => {\n    state.start = new Date();\n    id = id || window.setInterval(() => { app.run('timer') }, 100);\n  },\n  'stop': state => {\n    id = id && window.clearInterval(id) && false;\n  },\n  'timer': state => {\n    state.elapsed = ((new Date() - state.start) / 1000).toFixed(3) + ' seconds';\n    return state\n  }\n};\napp.start(document.body, state, view, update);\n"},{name:"Counter (JSX)",code:"// Counter (JSX)\nconst state = 0;\nconst view = state => <div>\n  <h1>{state}</h1>\n  <button $onclick='-1'>-1</button>\n  <button $onclick='+1'>+1</button>\n</div>;\nconst update = {\n  '+1': state => state + 1,\n  '-1': state => state - 1\n};\napp.start(document.body, state, view, update);\n"},{name:"Counter (HTML)",code:"// Counter (HTML)\nconst state = 0;\nconst view = state => `<div>\n  <h1>${state}</h1>\n  <button onclick=\"app.run('-1')\">-1</button>\n  <button onclick=\"app.run('+1')\">+1</button>\n</div>`;\nconst update = {\n  '+1': state => state + 1,\n  '-1': state => state - 1\n};\napp.start(document.body, state, view, update);\n"},{name:"Counter (Web Component)",code:"// Counter (Web Component)\nclass Counter extends Component {\n  state = 0;\n  view = state => <>\n    <h1>{state}</h1>\n    <button $onclick='-1'>-1</button>\n    <button $onclick='+1'>+1</button>\n  </>;\n  update = {\n    '+1': state => state + 1,\n    '-1': state => state - 1\n  };\n}\nconst wc = document.createElement('my-app');\ndocument.body.appendChild(wc);\napp.webComponent('my-app', Counter);\n"},{name:"Async fetch",code:"// Async fetch\nconst state = {};\nview = state => <>\n  <div><button $onclick=\"fetchComic\">fetch ...</button></div>\n  {state.loading && <div>loading ... </div>}\n  {state.comic && <img src={state.comic.url}/>}\n</>;\nconst update = {\n  'loading': (state, loading) => ({...state, loading }),\n  'fetchComic': async _ => {\n    app.run('loading', true);\n    const response = await fetch('https://xkcd-imgs.herokuapp.com/');\n    const comic = await response.json();\n    return {comic};\n  }\n};\napp.start(document.body, state, view, update);\n"},{name:"Animation Directive",code:"// Animation Directive\napp.on('$', ({key, props}) => {\n  if (key === '$animation') {\n    const value = props[key];\n    if (typeof value === 'string') {\n      props.class = `animated ${value}`;\n    }\n  }\n});\n\nconst state = {\n  animation: true\n}\n\nconst view = state => <>\n  <img $animation={state.animation && 'bounce infinite'} src='logo.png' />\n  <div $animation='bounceInRight'>\n    <button disabled={state.animation} $onclick='start-animation'>start</button>\n    <button disabled={!state.animation} $onclick='stop-animation'>stop</button>\n  </div>\n</>\n\nconst update = {\n  'start-animation': state => ({ ...state, animation: true }),\n  'stop-animation': state => ({...state, animation: false})\n}\napp.start(document.body, state, view, update);\n"},{name:"Pikaday",code:"// Pikaday\n\nconst state = { day: '8/19/2016' }\n\nconst view = state => <>\n  <h1>{state}</h1>\n  <input autocomplete=\"off\" id=\"datepicker\" placeholder=\"Click to pick a date\"/>\n</>\nconst update = {\n  'set-date': (state, e) => ({ ...state, day: e })\n}\n\napp.start(document.body, state, view, update, {\n  rendered: () => {\n    const input = document.getElementById('datepicker')\n    let pik = new Pikaday({\n      field: input,\n      onSelect: d => {\n        pik.destroy();\n        app.run('set-date', d.toLocaleDateString());\n      }\n    })\n  }\n});\n"},{name:"Child Component",code:"// Child Component\n\nclass Counter extends Component {\n  state = 0;\n  view = state => (\n    <div>\n      <h1>{state}</h1>\n      <button $onclick='-1'>-1</button>\n      <button $onclick='+1'>+1</button>\n    </div>\n  );\n  update = {\n    '+1': state => state + 1,\n    '-1': state => state - 1\n  };\n}\n\nclass App extends Component {\n  state = 0;\n  view = state => (\n    <div>\n      <button $onclick='+1'>{state}</button>\n      <hr/>\n      <Counter />\n      <Counter />\n      <Counter />\n    </div>\n  );\n  update = {\n    '+1': state => state + 1,\n  };\n}\n\nnew App().start(document.body);\n"},{name:"Element in JSX",code:"// Element in JSX\n\nclass Test extends Component {\n  state = 'world';\n  view = state => {\n    const element = document.createElement('div');\n    element.innerHTML = 'hello ' + state;\n    return <div>\n      {element}\n    </div>\n  }\n}\nnew Test().start(document.body);\n"}]}])}));
//# sourceMappingURL=app.js.map