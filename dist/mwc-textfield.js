!function(t){var e={};function i(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){"use strict";
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const a=document.createElement("link");a.rel="stylesheet",a.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(a)},function(t,e,i){"use strict";i.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=new WeakMap,n=t=>"function"==typeof t&&a.has(t),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,i=null)=>{let a=e;for(;a!==i;){const e=a.nextSibling;t.removeChild(a),a=e}},o={},d={},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,h=new RegExp(`${l}|${c}`),u="$lit$";class m{constructor(t,e){this.parts=[],this.element=e;let i=-1,a=0;const n=[],s=e=>{const r=e.content,o=document.createTreeWalker(r,133,null,!1);let d=0;for(;o.nextNode();){i++;const e=o.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const n=e.attributes;let s=0;for(let t=0;t<n.length;t++)n[t].value.indexOf(l)>=0&&s++;for(;s-- >0;){const n=t.strings[a],s=_.exec(n)[2],r=s.toLowerCase()+u,o=e.getAttribute(r).split(h);this.parts.push({type:"attribute",index:i,name:s,strings:o}),e.removeAttribute(r),a+=o.length-1}}"TEMPLATE"===e.tagName&&s(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const s=e.parentNode,r=t.split(h),o=r.length-1;for(let t=0;t<o;t++)s.insertBefore(""===r[t]?f():document.createTextNode(r[t]),e),this.parts.push({type:"node",index:++i});""===r[o]?(s.insertBefore(f(),e),n.push(e)):e.data=r[o],a+=o}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&i!==d||(i++,t.insertBefore(f(),e)),d=i,this.parts.push({type:"node",index:i}),null===e.nextSibling?e.data="":(n.push(e),i--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1})}}};s(e);for(const t of n)t.parentNode.removeChild(t)}}const p=t=>-1!==t.index,f=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(t,e,i){this._parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this._parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let i=0,a=0;const n=t=>{const s=document.createTreeWalker(t,133,null,!1);let r=s.nextNode();for(;i<e.length&&null!==r;){const t=e[i];if(p(t))if(a===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(r.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(r,t.name,t.strings,this.options));i++}else a++,"TEMPLATE"===r.nodeName&&n(r.content),r=s.nextNode();else this._parts.push(void 0),i++}};return n(t),s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class x{constructor(t,e,i,a){this.strings=t,this.values=e,this.type=i,this.processor=a}getHTML(){const t=this.strings.length-1;let e="";for(let i=0;i<t;i++){const t=this.strings[i],a=_.exec(t);e+=a?t.substr(0,a.index)+a[1]+a[2]+u+a[3]+l:t+c}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const b=t=>null===t||!("object"==typeof t||"function"==typeof t);class v{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new y(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let a=0;a<e;a++){i+=t[a];const e=this.parts[a];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)i+="string"==typeof e?e:String(e);else i+="string"==typeof t?t:String(t)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class y{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o||b(t)&&t===this.value||(this.value=t,n(t)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const t=this.value;this.value=o,t(this)}this.value!==o&&this.committer.commit()}}class E{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=f()),t._insert(this.endNode=f())}insertAfterPart(t){t._insert(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=o,t(this)}const t=this._pendingValue;t!==o&&(b(t)?t!==this.value&&this._commitText(t):t instanceof x?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===d?(this.value=d,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===e)this.value.update(t.values);else{const i=new g(e,t.processor,this.options),a=i._clone();i.update(t.values),this._commitNode(a),this.value=i}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,a=0;for(const n of t)void 0===(i=e[a])&&(i=new E(this.options),e.push(i),0===a?i.appendIntoPart(this):i.insertAfterPart(e[a-1])),i.setValue(n),i.commit(),a++;a<e.length&&(e.length=a,this.clear(i&&i.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,i){if(this.value=void 0,this._pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=o,t(this)}if(this._pendingValue===o)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=o}}class w extends v{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new S(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class S extends y{}let A=!1;try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class T{constructor(t,e,i){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=o,t(this)}if(this._pendingValue===o)return;const t=this._pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),a=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),a&&(this._options=I(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=o}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const I=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const L=new class{handleAttributeExpressions(t,e,i,a){const n=e[0];return"."===n?new w(t,e.slice(1),i).parts:"@"===n?[new T(t,e.slice(1),a.eventContext)]:"?"===n?[new C(t,e.slice(1),i)]:new v(t,e,i).parts}handleTextExpression(t){return new E(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(t){let e=N.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},N.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const a=t.strings.join(l);return void 0===(i=e.keyString.get(a))&&(i=new m(t,t.getTemplateElement()),e.keyString.set(a,i)),e.stringsArray.set(t.strings,i),i}const N=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=(t,...e)=>new x(t,e,"html",L),H=133;function P(t,e){const{element:{content:i},parts:a}=t,n=document.createTreeWalker(i,H,null,!1);let s=D(a),r=a[s],o=-1,d=0;const l=[];let c=null;for(;n.nextNode();){o++;const t=n.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(l.push(t),null===c&&(c=t)),null!==c&&d++;void 0!==r&&r.index===o;)r.index=null!==c?-1:r.index-d,r=a[s=D(a,s)]}l.forEach(t=>t.parentNode.removeChild(t))}const V=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,H,null,!1);for(;i.nextNode();)e++;return e},D=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(p(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const F=(t,e)=>`${t}--${e}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),z=!1);const M=t=>e=>{const i=F(e.type,t);let a=N.get(i);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},N.set(i,a));let n=a.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(l);if(void 0===(n=a.keyString.get(s))){const i=e.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(i,t),n=new m(e,i),a.keyString.set(s,n)}return a.stringsArray.set(e.strings,n),n},U=["html","svg"],X=new Set,B=(t,e,i)=>{X.add(i);const a=t.querySelectorAll("style");if(0===a.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,i);const n=document.createElement("style");for(let t=0;t<a.length;t++){const e=a[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}if((t=>{U.forEach(e=>{const i=N.get(F(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),P(t,i)})})})(i),function(t,e,i=null){const{element:{content:a},parts:n}=t;if(null==i)return void a.appendChild(e);const s=document.createTreeWalker(a,H,null,!1);let r=D(n),o=0,d=-1;for(;s.nextNode();)for(d++,s.currentNode===i&&(o=V(e),i.parentNode.insertBefore(e,i));-1!==r&&n[r].index===d;){if(o>0){for(;-1!==r;)n[r].index+=o,r=D(n,r);return}r=D(n,r)}}(e,n,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,i),window.ShadyCSS.nativeShadow){const i=e.element.content.querySelector("style");t.insertBefore(i.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(n,e.element.content.firstChild);const t=new Set;t.add(n),P(e,t)}},Y=(t,e)=>t,q=(t,e)=>{if(t in e)for(;e!==Object.prototype;){if(e.hasOwnProperty(t))return Object.getOwnPropertyDescriptor(e,t);e=Object.getPrototypeOf(e)}},W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},j=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:j},$=Promise.resolve(!0),K=1,J=4,Z=8,Q=16,tt=32;class et extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=$,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,i]of this._classProperties){const a=this._attributeNameForProperty(e,i);void 0!==a&&(this._attributeToPropertyMap.set(a,e),t.push(a))}return t}static _ensureClassProperties(){if(!this.hasOwnProperty(Y("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=G){if(this._ensureClassProperties(),this._classProperties.set(t,e),!e.noAccessor){const e=q(t,this.prototype);let i;if(void 0!==e&&e.set&&e.get){const{set:a,get:n}=e;i={get(){return n.call(this)},set(e){const i=this[t];a.call(this,e),this.requestUpdate(t,i)},configurable:!0,enumerable:!0}}else{const e="symbol"==typeof t?Symbol():`__${t}`;i={get(){return this[e]},set(i){const a=this[t];this[e]=i,this.requestUpdate(t,a)},configurable:!0,enumerable:!0}}Object.defineProperty(this.prototype,t,i)}}static _finalize(){if(this.hasOwnProperty(Y("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t._finalize&&t._finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(Y("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=j){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,a=e.converter||W,n="function"==typeof a?a:a.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,a=e.converter;return(a&&a.toAttribute||W.toAttribute)(t,i)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|tt,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=G){const a=this.constructor,n=a._attributeNameForProperty(t,i);if(void 0!==n){const t=a._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=this._updateState|Z,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=this._updateState&~Z}}_attributeToProperty(t,e){if(this._updateState&Z)return;const i=this.constructor,a=i._attributeToPropertyMap.get(t);if(void 0!==a){const t=i._classProperties.get(a)||G;this._updateState=this._updateState|Q,this[a]=i._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~Q}}requestUpdate(t,e){let i=!0;if(void 0!==t&&!this._changedProperties.has(t)){const a=this.constructor,n=a._classProperties.get(t)||G;a._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.set(t,e),!0!==n.reflect||this._updateState&Q||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}return!this._hasRequestedUpdate&&i&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let t;this._updateState=this._updateState|J;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);const i=this.performUpdate();null!=i&&"function"==typeof i.then&&await i,t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&tt}get _hasRequestedUpdate(){return this._updateState&J}get hasUpdated(){return this._updateState&K}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~J}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}et.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
nt((t,e)=>t.querySelector(e)),nt((t,e)=>t.querySelectorAll(e));const it=(t,e,i)=>{Object.defineProperty(e,i,t)},at=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function nt(t){return e=>(i,a)=>{const n={get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0};return void 0!==a?it(n,i,a):at(n,i)}}const st="adoptedStyleSheets"in Document.prototype;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class rt extends et{static get styles(){return[]}static get _uniqueStyles(){if(void 0===this._styles){const t=this.styles.reduceRight((t,e)=>(t.add(e),t),new Set);this._styles=[],t.forEach(t=>this._styles.unshift(t))}return this._styles}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._uniqueStyles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?st?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof x&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._uniqueStyles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}rt.finalized=!0,rt.render=((t,e,i)=>{const a=i.scopeName,n=R.has(e),s=e instanceof ShadowRoot&&z&&t instanceof x,o=s&&!X.has(a),d=o?document.createDocumentFragment():e;if(((t,e,i)=>{let a=R.get(e);void 0===a&&(r(e,e.firstChild),R.set(e,a=new E(Object.assign({templateFactory:O},i))),a.appendInto(e)),a.setValue(t),a.commit()})(t,d,Object.assign({templateFactory:M(a)},i)),o){const t=R.get(d);R.delete(d),t.value instanceof g&&B(d,t.value.template,a),r(e,e.firstChild),e.appendChild(d),R.set(e,t)}!n&&s&&window.ShadyCSS.styleElement(e.host)});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const ot="function"==typeof CustomEvent,dt=t=>(class extends t{get host(){return this._host}get activeElement(){return this.host.getRootNode().activeElement}initialize(...t){super.initialize(...t),this._host=this.root_.getRootNode().host}createAdapter(){return null}getDefaultFoundation(){const t=super.getDefaultFoundation();return Object.assign(t.adapter_,this.createAdapter()),t}emit(t,e,i=!1){let a;ot?a=new CustomEvent(t,{detail:e,bubbles:i,composed:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(a)}});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class lt extends rt{static get ComponentClass(){throw new Error("Must provide component class")}static get componentSelector(){throw new Error("Must provide component selector")}constructor(){super(),this._asyncComponent=!1}async firstUpdated(){this._asyncComponent&&await this.renderComplete,this._makeComponent()}_makeComponent(){this._componentRoot=this.shadowRoot.querySelector(this.constructor.componentSelector),this._component=new this.constructor.ComponentClass(this._componentRoot),this._resolveComponentPromise&&this._resolveComponentPromise(this._component)}componentReady(){return this._componentPromise||(this._componentPromise=new Promise(t=>{this._resolveComponentPromise=t}),this._component&&this._resolveComponentPromise(this._component)),this._componentPromise}}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */window.navigator.userAgent.match("Trident")&&(DOMTokenList.prototype.toggle=function(t,e){return void 0===e||e?this.add(t):this.remove(t),void 0===e||e});const ct=new WeakMap,ht=new WeakMap,ut=(t=>(...e)=>{const i=t(...e);return a.set(i,!0),i})(t=>e=>{if(!(e instanceof y)||e instanceof S||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");ht.has(e)||(e.committer.element.className=e.committer.strings.join(" "),ht.set(e,!0));const i=ct.get(e);for(const a in i)a in t||e.committer.element.classList.remove(a);for(const a in t)i&&i[a]===t[a]||e.committer.element.classList.toggle(a,Boolean(t[a]));ct.set(e,t)});var mt=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{static attachTo(t){return new pt(t,new mt)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let a;"function"==typeof CustomEvent?a=new CustomEvent(t,{detail:e,bubbles:i}):(a=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(a)}}var ft=pt;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{static attachTo(t){return new gt(t,new _t)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let a;"function"==typeof CustomEvent?a=new CustomEvent(t,{detail:e,bubbles:i}):(a=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(a)}}var xt=gt;
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},vt={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},yt={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Et,Ct;function wt(t=window,e=!1){if(void 0===Ct||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){e=!0}})}catch(t){}Ct=e}return!!Ct&&{passive:!0}}function St(t){return["webkitMatchesSelector","msMatchesSelector","matches"].filter(e=>e in t).pop()}const At=["touchstart","pointerdown","mousedown","keydown"],Tt=["touchend","pointerup","mouseup"];let It=[];class Lt extends _t{static get cssClasses(){return bt}static get strings(){return vt}static get numbers(){return yt}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(Lt.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(t=>this.activate_(t)),this.deactivateHandler_=(t=>this.deactivate_(t)),this.focusHandler_=(()=>requestAnimationFrame(()=>this.adapter_.addClass(Lt.cssClasses.BG_FOCUSED))),this.blurHandler_=(()=>requestAnimationFrame(()=>this.adapter_.removeClass(Lt.cssClasses.BG_FOCUSED))),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_=null}isSupported_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}init(){if(!this.isSupported_())return;this.registerRootHandlers_();const{ROOT:t,UNBOUNDED:e}=Lt.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&(this.adapter_.addClass(e),this.layoutInternal_())})}destroy(){if(!this.isSupported_())return;if(this.activationTimer_){clearTimeout(this.activationTimer_),this.activationTimer_=0;const{FG_ACTIVATION:t}=Lt.cssClasses;this.adapter_.removeClass(t)}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_();const{ROOT:t,UNBOUNDED:e}=Lt.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}registerRootHandlers_(){At.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):Tt.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){At.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),Tt.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=Lt;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const e=this.activationState_;if(e.isActivated)return;const i=this.previousActivationEvent_;i&&t&&i.type!==t.type||(e.isActivated=!0,e.isProgrammatic=null===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),t&&It.length>0&&It.some(t=>this.adapter_.containsEventTarget(t))?this.resetActivationState_():(t&&(It.push(t.target),this.registerDeactivationHandlers_(t)),e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{It=[],e.wasElementMadeActive||" "!==t.key&&32!==t.keyCode||(e.wasElementMadeActive=this.checkElementMadeActive_(t),e.wasElementMadeActive&&this.animateActivation_()),e.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(t){return!t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}activate(t=null){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=Lt.strings,{FG_DEACTIVATION:i,FG_ACTIVATION:a}=Lt.cssClasses,{DEACTIVATION_TIMEOUT_MS:n}=Lt.numbers;this.layoutInternal_();let s="",r="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();s=`${t.x}px, ${t.y}px`,r=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,s),this.adapter_.updateCssVariable(e,r),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(i),this.adapter_.computeBoundingRect(),this.adapter_.addClass(a),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),n)}getFgTranslationCoordinates_(){const{activationEvent:t,wasActivatedByPointer:e}=this.activationState_;let i;return{startPoint:i={x:(i=e?function(t,e,i){const{x:a,y:n}=e,s=a+i.left,r=n+i.top;let o,d;return"touchstart"===t.type?(o=t.changedTouches[0].pageX-s,d=t.changedTouches[0].pageY-r):(o=t.pageX-s,d=t.pageY-r),{x:o,y:d}}
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:i.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=Lt.cssClasses,{hasDeactivationUXRun:e,isActivated:i}=this.activationState_;(e||!i)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},yt.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=Lt.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=null,Lt.numbers.TAP_DELAY_MS)}deactivate_(t){const e=this.activationState_;if(!e.isActivated)return;const i=Object.assign({},e);if(e.isProgrammatic){const t=null;requestAnimationFrame(()=>this.animateDeactivation_(t,i)),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(t,i),this.resetActivationState_()})}deactivate(t=null){this.deactivate_(t)}animateDeactivation_(t,{wasActivatedByPointer:e,wasElementMadeActive:i}){(e||i)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?t:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+Lt.numbers.PADDING})(),this.initialSize_=t*Lt.numbers.INITIAL_ORIGIN_SCALE,this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:i,VAR_FG_SCALE:a}=Lt.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(i,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=Lt.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}}var Ot=Lt;
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends xt{constructor(...t){super(...t),this.disabled=!1,this.unbounded_}static attachTo(t,{isUnbounded:e}={}){const i=new Nt(t);return void 0!==e&&(i.unbounded=e),i}static createAdapter(t){const e=St(HTMLElement.prototype);return{browserSupportsCssVars:()=>(function(t,e=!1){let i=Et;if("boolean"==typeof Et&&!e)return i;if(!t.CSS||"function"!=typeof t.CSS.supports)return;const a=t.CSS.supports("--css-vars","yes"),n=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return i=!(!a&&!n||function(t){const e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);const a=t.getComputedStyle(i),n=null!==a&&"solid"===a.borderTopStyle;return i.remove(),n}(t)),e||(Et=i),i})(window),isUnbounded:()=>t.unbounded,isSurfaceActive:()=>t.root_[e](":active"),isSurfaceDisabled:()=>t.disabled,addClass:e=>t.root_.classList.add(e),removeClass:e=>t.root_.classList.remove(e),containsEventTarget:e=>t.root_.contains(e),registerInteractionHandler:(e,i)=>t.root_.addEventListener(e,i,wt()),deregisterInteractionHandler:(e,i)=>t.root_.removeEventListener(e,i,wt()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,wt()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,wt()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(e,i)=>t.root_.style.setProperty(e,i),computeBoundingRect:()=>t.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(t){this.unbounded_=Boolean(t),this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new Ot(Nt.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}class Rt{}Rt.prototype.root_,Rt.prototype.unbounded,Rt.prototype.disabled;
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kt={ARIA_CONTROLS:"aria-controls",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",ICON_SELECTOR:".mdc-text-field__icon",OUTLINE_SELECTOR:".mdc-notched-outline",LINE_RIPPLE_SELECTOR:".mdc-line-ripple"},Ht={ROOT:"mdc-text-field",UPGRADED:"mdc-text-field--upgraded",DISABLED:"mdc-text-field--disabled",DENSE:"mdc-text-field--dense",FOCUSED:"mdc-text-field--focused",INVALID:"mdc-text-field--invalid",BOX:"mdc-text-field--box",OUTLINED:"mdc-text-field--outlined"},Pt={LABEL_SCALE:.75,DENSE_LABEL_SCALE:.923};
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vt={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},Dt={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg"};
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft extends mt{static get cssClasses(){return Dt}static get strings(){return Vt}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setAttr:()=>{},removeAttr:()=>{},setContent:()=>{}}}constructor(t){super(Object.assign(Ft.defaultAdapter,t))}setContent(t){this.adapter_.setContent(t)}setPersistent(t){t?this.adapter_.addClass(Dt.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(Dt.HELPER_TEXT_PERSISTENT)}setValidation(t){t?this.adapter_.addClass(Dt.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(Dt.HELPER_TEXT_VALIDATION_MSG)}showToScreenReader(){this.adapter_.removeAttr(Vt.ARIA_HIDDEN)}setValidity(t){const e=this.adapter_.hasClass(Dt.HELPER_TEXT_PERSISTENT),i=this.adapter_.hasClass(Dt.HELPER_TEXT_VALIDATION_MSG)&&!t;i?this.adapter_.setAttr(Vt.ROLE,"alert"):this.adapter_.removeAttr(Vt.ROLE),e||i||this.hide_()}hide_(){this.adapter_.setAttr(Vt.ARIA_HIDDEN,"true")}}var zt=Ft;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mt={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"};
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends mt{static get strings(){return Mt}static get defaultAdapter(){return{getAttr:()=>{},setAttr:()=>{},removeAttr:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},notifyIconAction:()=>{}}}constructor(t){super(Object.assign(Ut.defaultAdapter,t)),this.savedTabIndex_=null,this.interactionHandler_=(t=>this.handleInteraction(t))}init(){this.savedTabIndex_=this.adapter_.getAttr("tabindex"),["click","keydown"].forEach(t=>{this.adapter_.registerInteractionHandler(t,this.interactionHandler_)})}destroy(){["click","keydown"].forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.interactionHandler_)})}setDisabled(t){this.savedTabIndex_&&(t?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",Mt.ICON_ROLE)))}handleInteraction(t){"click"!==t.type&&"Enter"!==t.key&&13!==t.keyCode||this.adapter_.notifyIconAction()}}var Xt=Ut;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bt=["pattern","min","max","required","step","minlength","maxlength"];class Yt extends mt{static get cssClasses(){return Ht}static get strings(){return kt}static get numbers(){return Pt}get shouldShake(){return!this.isValid()&&!this.isFocused_}get shouldFloat(){return!this.isBadInput_()&&(!!this.getValue()||this.isFocused_)}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},registerTextFieldInteractionHandler:()=>{},deregisterTextFieldInteractionHandler:()=>{},registerInputInteractionHandler:()=>{},deregisterInputInteractionHandler:()=>{},registerValidationAttributeChangeHandler:()=>{},deregisterValidationAttributeChangeHandler:()=>{},getNativeInput:()=>{},isFocused:()=>{},isRtl:()=>{},activateLineRipple:()=>{},deactivateLineRipple:()=>{},setLineRippleTransformOrigin:()=>{},shakeLabel:()=>{},floatLabel:()=>{},hasLabel:()=>{},getLabelWidth:()=>{},hasOutline:()=>{},notchOutline:()=>{},closeOutline:()=>{}}}constructor(t,e={}){super(Object.assign(Yt.defaultAdapter,t)),this.helperText_=e.helperText,this.icon_=e.icon,this.isFocused_=!1,this.receivedUserInput_=!1,this.useCustomValidityChecking_=!1,this.isValid_=!0,this.inputFocusHandler_=(()=>this.activateFocus()),this.inputBlurHandler_=(()=>this.deactivateFocus()),this.inputInputHandler_=(()=>this.autoCompleteFocus()),this.setPointerXOffset_=(t=>this.setTransformOrigin(t)),this.textFieldInteractionHandler_=(()=>this.handleTextFieldInteraction()),this.validationAttributeChangeHandler_=(t=>this.handleValidationAttributeMutation(t)),this.validationObserver_}init(){this.adapter_.addClass(Yt.cssClasses.UPGRADED),this.adapter_.hasLabel()&&this.getValue()&&(this.adapter_.floatLabel(this.shouldFloat),this.notchOutline(this.shouldFloat)),this.adapter_.isFocused()&&this.inputFocusHandler_(),this.adapter_.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.registerInputInteractionHandler("input",this.inputInputHandler_),["mousedown","touchstart"].forEach(t=>{this.adapter_.registerInputInteractionHandler(t,this.setPointerXOffset_)}),["click","keydown"].forEach(t=>{this.adapter_.registerTextFieldInteractionHandler(t,this.textFieldInteractionHandler_)}),this.validationObserver_=this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_)}destroy(){this.adapter_.removeClass(Yt.cssClasses.UPGRADED),this.adapter_.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.deregisterInputInteractionHandler("input",this.inputInputHandler_),["mousedown","touchstart"].forEach(t=>{this.adapter_.deregisterInputInteractionHandler(t,this.setPointerXOffset_)}),["click","keydown"].forEach(t=>{this.adapter_.deregisterTextFieldInteractionHandler(t,this.textFieldInteractionHandler_)}),this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)}handleTextFieldInteraction(){this.adapter_.getNativeInput().disabled||(this.receivedUserInput_=!0)}handleValidationAttributeMutation(t){t.some(t=>{if(Bt.indexOf(t.attributeName)>-1)return this.styleValidity_(!0),!0})}notchOutline(t){if(this.adapter_.hasOutline()&&this.adapter_.hasLabel())if(t){const t=this.adapter_.hasClass(Ht.DENSE)?Pt.DENSE_LABEL_SCALE:Pt.LABEL_SCALE,e=this.adapter_.getLabelWidth()*t,i=this.adapter_.isRtl();this.adapter_.notchOutline(e,i)}else this.adapter_.closeOutline()}activateFocus(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter_.activateLineRipple(),this.notchOutline(this.shouldFloat),this.adapter_.hasLabel()&&(this.adapter_.shakeLabel(this.shouldShake),this.adapter_.floatLabel(this.shouldFloat)),this.helperText_&&this.helperText_.showToScreenReader()}setTransformOrigin(t){const e=t.target.getBoundingClientRect(),i=t.clientX,a=(t.clientY,i-e.left);this.adapter_.setLineRippleTransformOrigin(a)}autoCompleteFocus(){this.receivedUserInput_||this.activateFocus()}deactivateFocus(){this.isFocused_=!1,this.adapter_.deactivateLineRipple();const t=!this.getNativeInput_().value&&!this.isBadInput_(),e=this.isValid();this.styleValidity_(e),this.styleFocused_(this.isFocused_),this.adapter_.hasLabel()&&(this.adapter_.shakeLabel(this.shouldShake),this.adapter_.floatLabel(this.shouldFloat),this.notchOutline(this.shouldFloat)),t&&(this.receivedUserInput_=!1)}getValue(){return this.getNativeInput_().value}setValue(t){this.getNativeInput_().value=t;const e=this.isValid();this.styleValidity_(e),this.adapter_.hasLabel()&&(this.adapter_.shakeLabel(this.shouldShake),this.adapter_.floatLabel(this.shouldFloat),this.notchOutline(this.shouldFloat))}isValid(){return this.useCustomValidityChecking_?this.isValid_:this.isNativeInputValid_()}setValid(t){this.useCustomValidityChecking_=!0,this.isValid_=t,t=this.isValid(),this.styleValidity_(t),this.adapter_.hasLabel()&&this.adapter_.shakeLabel(this.shouldShake)}isDisabled(){return this.getNativeInput_().disabled}setDisabled(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)}setHelperTextContent(t){this.helperText_&&this.helperText_.setContent(t)}isBadInput_(){return this.getNativeInput_().validity.badInput}isNativeInputValid_(){return this.getNativeInput_().validity.valid}styleValidity_(t){const{INVALID:e}=Yt.cssClasses;t?this.adapter_.removeClass(e):this.adapter_.addClass(e),this.helperText_&&this.helperText_.setValidity(t)}styleFocused_(t){const{FOCUSED:e}=Yt.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}styleDisabled_(t){const{DISABLED:e,INVALID:i}=Yt.cssClasses;t?(this.adapter_.addClass(e),this.adapter_.removeClass(i)):this.adapter_.removeClass(e),this.icon_&&this.icon_.setDisabled(t)}getNativeInput_(){return this.adapter_.getNativeInput()||{value:"",disabled:!1,validity:{badInput:!1,valid:!0}}}}var qt=Yt;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{static attachTo(t){return new jt(t,new Wt)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let a;"function"==typeof CustomEvent?a=new CustomEvent(t,{detail:e,bubbles:i}):(a=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(a)}}var Gt=jt;
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $t={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Wt{static get cssClasses(){return $t}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>{},setStyle:()=>{},registerEventHandler:()=>{},deregisterEventHandler:()=>{}}}constructor(t={}){super(Object.assign(Kt.defaultAdapter,t)),this.transitionEndHandler_=(t=>this.handleTransitionEnd(t))}init(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)}destroy(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)}activate(){this.adapter_.removeClass($t.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass($t.LINE_RIPPLE_ACTIVE)}setRippleCenter(t){this.adapter_.setStyle("transform-origin",`${t}px center`)}deactivate(){this.adapter_.addClass($t.LINE_RIPPLE_DEACTIVATING)}handleTransitionEnd(t){const e=this.adapter_.hasClass($t.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter_.removeClass($t.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass($t.LINE_RIPPLE_DEACTIVATING))}}var Jt=Kt;
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Gt{static attachTo(t){return new Zt(t)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}setRippleCenter(t){this.foundation_.setRippleCenter(t)}getDefaultFoundation(){return new Jt(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),setStyle:(t,e)=>this.root_.style[t]=e,registerEventHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterEventHandler:(t,e)=>this.root_.removeEventListener(t,e)}))}}
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends ft{static attachTo(t){return new Qt(t)}get foundation(){return this.foundation_}getDefaultFoundation(){return new zt(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),setAttr:(t,e)=>this.root_.setAttribute(t,e),removeAttr:t=>this.root_.removeAttribute(t),setContent:t=>{this.root_.textContent=t}}))}}
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends ft{static attachTo(t){return new te(t)}get foundation(){return this.foundation_}getDefaultFoundation(){return new Xt(Object.assign({getAttr:t=>this.root_.getAttribute(t),setAttr:(t,e)=>this.root_.setAttribute(t,e),removeAttr:t=>this.root_.removeAttribute(t),registerInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e),notifyIconAction:()=>this.emit(Xt.strings.ICON_EVENT,{},!0)}))}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static attachTo(t){return new ie(t,new ee)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let a;"function"==typeof CustomEvent?a=new CustomEvent(t,{detail:e,bubbles:i}):(a=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(a)}}var ae=ie;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ne={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake"};
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends ee{static get cssClasses(){return ne}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},getWidth:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{}}}constructor(t){super(Object.assign(se.defaultAdapter,t)),this.shakeAnimationEndHandler_=(()=>this.handleShakeAnimationEnd_())}init(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)}destroy(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)}getWidth(){return this.adapter_.getWidth()}shake(t){const{LABEL_SHAKE:e}=se.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}float(t){const{LABEL_FLOAT_ABOVE:e,LABEL_SHAKE:i}=se.cssClasses;t?this.adapter_.addClass(e):(this.adapter_.removeClass(e),this.adapter_.removeClass(i))}handleShakeAnimationEnd_(){const{LABEL_SHAKE:t}=se.cssClasses;this.adapter_.removeClass(t)}}var re=se;
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends ae{static attachTo(t){return new oe(t)}shake(t){this.foundation_.shake(t)}float(t){this.foundation_.float(t)}getWidth(){return this.foundation_.getWidth()}getDefaultFoundation(){return new re({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),getWidth:()=>this.root_.offsetWidth,registerInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e)})}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static attachTo(t){return new le(t,new de)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let a;"function"==typeof CustomEvent?a=new CustomEvent(t,{detail:e,bubbles:i}):(a=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(a)}}var ce=le;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const he={PATH_SELECTOR:".mdc-notched-outline__path",IDLE_OUTLINE_SELECTOR:".mdc-notched-outline__idle"},ue={OUTLINE_NOTCHED:"mdc-notched-outline--notched"};
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends de{static get strings(){return he}static get cssClasses(){return ue}static get defaultAdapter(){return{getWidth:()=>{},getHeight:()=>{},addClass:()=>{},removeClass:()=>{},setOutlinePathAttr:()=>{},getIdleOutlineStyleValue:()=>{}}}constructor(t){super(Object.assign(me.defaultAdapter,t))}notch(t,e=!1){const{OUTLINE_NOTCHED:i}=me.cssClasses;this.adapter_.addClass(i),this.updateSvgPath_(t,e)}closeNotch(){const{OUTLINE_NOTCHED:t}=me.cssClasses;this.adapter_.removeClass(t)}updateSvgPath_(t,e){const i=this.adapter_.getIdleOutlineStyleValue("border-radius")||this.adapter_.getIdleOutlineStyleValue("border-top-left-radius"),a=parseFloat(i),n=this.adapter_.getWidth(),s=this.adapter_.getHeight(),r=a+1.2,o=Math.abs(11-r),d=t+8,l="a"+a+","+a+" 0 0 1 "+a+","+a+"v"+(s-2*r)+"a"+a+","+a+" 0 0 1 "+-a+","+a+"h"+(2*r-n)+"a"+a+","+a+" 0 0 1 "+-a+","+-a+"v"+(2*r-s)+"a"+a+","+a+" 0 0 1 "+a+","+-a;let c;c=e?"M"+(n-r-o)+",1h"+o+l+"h"+(n-2*r-d-o):"M"+(r+o+d)+",1h"+(n-2*r-d-o)+l+"h"+o,this.adapter_.setOutlinePathAttr(c)}}var pe=me;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends ce{static attachTo(t){return new fe(t)}notch(t,e){this.foundation_.notch(t,e)}closeNotch(){this.foundation_.closeNotch()}getDefaultFoundation(){return new pe({getWidth:()=>this.root_.offsetWidth,getHeight:()=>this.root_.offsetHeight,addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setOutlinePathAttr:t=>{this.root_.querySelector(he.PATH_SELECTOR).setAttribute("d",t)},getIdleOutlineStyleValue:t=>{const e=this.root_.parentNode.querySelector(he.IDLE_OUTLINE_SELECTOR);return window.getComputedStyle(e).getPropertyValue(t)}})}}
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends ft{constructor(...t){super(...t),this.input_,this.ripple,this.lineRipple_,this.helperText_,this.icon_,this.label_,this.outline_}static attachTo(t){return new _e(t)}initialize(t=((t,e)=>new Nt(t,e)),e=(t=>new Zt(t)),i=(t=>new Qt(t)),a=(t=>new te(t)),n=(t=>new oe(t)),s=(t=>new fe(t))){this.input_=this.root_.querySelector(kt.INPUT_SELECTOR);const r=this.root_.querySelector(kt.LABEL_SELECTOR);r&&(this.label_=n(r));const o=this.root_.querySelector(kt.LINE_RIPPLE_SELECTOR);o&&(this.lineRipple_=e(o));const d=this.root_.querySelector(kt.OUTLINE_SELECTOR);if(d&&(this.outline_=s(d)),this.input_.hasAttribute(kt.ARIA_CONTROLS)){const t=document.getElementById(this.input_.getAttribute(kt.ARIA_CONTROLS));t&&(this.helperText_=i(t))}const l=this.root_.querySelector(kt.ICON_SELECTOR);if(l&&(this.icon_=a(l)),this.ripple=null,this.root_.classList.contains(Ht.BOX)){const e=St(HTMLElement.prototype),i=Object.assign(Nt.createAdapter(this),{isSurfaceActive:()=>this.input_[e](":active"),registerInteractionHandler:(t,e)=>this.input_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.input_.removeEventListener(t,e)}),a=new Ot(i);this.ripple=t(this.root_,a)}}destroy(){this.ripple&&this.ripple.destroy(),this.lineRipple_&&this.lineRipple_.destroy(),this.helperText_&&this.helperText_.destroy(),this.icon_&&this.icon_.destroy(),this.label_&&this.label_.destroy(),this.outline_&&this.outline_.destroy(),super.destroy()}initialSyncWithDom(){this.disabled=this.input_.disabled}get value(){return this.foundation_.getValue()}set value(t){this.foundation_.setValue(t)}get disabled(){return this.foundation_.isDisabled()}set disabled(t){this.foundation_.setDisabled(t)}get valid(){return this.foundation_.isValid()}set valid(t){this.foundation_.setValid(t)}get required(){return this.input_.required}set required(t){this.input_.required=t}get pattern(){return this.input_.pattern}set pattern(t){this.input_.pattern=t}get minLength(){return this.input_.minLength}set minLength(t){this.input_.minLength=t}get maxLength(){return this.input_.maxLength}set maxLength(t){t<0?this.input_.removeAttribute("maxLength"):this.input_.maxLength=t}get min(){return this.input_.min}set min(t){this.input_.min=t}get max(){return this.input_.max}set max(t){this.input_.max=t}get step(){return this.input_.step}set step(t){this.input_.step=t}set helperTextContent(t){this.foundation_.setHelperTextContent(t)}layout(){const t=this.foundation_.shouldFloat;this.foundation_.notchOutline(t)}getDefaultFoundation(){return new qt(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),registerTextFieldInteractionHandler:(t,e)=>this.root_.addEventListener(t,e),deregisterTextFieldInteractionHandler:(t,e)=>this.root_.removeEventListener(t,e),registerValidationAttributeChangeHandler:t=>{const e=new MutationObserver(t),i=this.root_.querySelector(kt.INPUT_SELECTOR);return e.observe(i,{attributes:!0}),e},deregisterValidationAttributeChangeHandler:t=>t.disconnect(),isFocused:()=>document.activeElement===this.root_.querySelector(kt.INPUT_SELECTOR),isRtl:()=>"rtl"===window.getComputedStyle(this.root_).getPropertyValue("direction")},this.getInputAdapterMethods_(),this.getLabelAdapterMethods_(),this.getLineRippleAdapterMethods_(),this.getOutlineAdapterMethods_()),this.getFoundationMap_())}getLabelAdapterMethods_(){return{shakeLabel:t=>this.label_.shake(t),floatLabel:t=>this.label_.float(t),hasLabel:()=>!!this.label_,getLabelWidth:()=>this.label_.getWidth()}}getLineRippleAdapterMethods_(){return{activateLineRipple:()=>{this.lineRipple_&&this.lineRipple_.activate()},deactivateLineRipple:()=>{this.lineRipple_&&this.lineRipple_.deactivate()},setLineRippleTransformOrigin:t=>{this.lineRipple_&&this.lineRipple_.setRippleCenter(t)}}}getOutlineAdapterMethods_(){return{notchOutline:(t,e)=>this.outline_.notch(t,e),closeOutline:()=>this.outline_.closeNotch(),hasOutline:()=>!!this.outline_}}getInputAdapterMethods_(){return{registerInputInteractionHandler:(t,e)=>this.input_.addEventListener(t,e),deregisterInputInteractionHandler:(t,e)=>this.input_.removeEventListener(t,e),getNativeInput:()=>this.input_}}getFoundationMap_(){return{helperText:this.helperText_?this.helperText_.foundation:void 0,icon:this.icon_?this.icon_.foundation:void 0}}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const ge=k`<style>.mdc-floating-label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;position:absolute;bottom:8px;left:0;transform-origin:left top;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1);line-height:1.15rem;cursor:text}[dir="rtl"] .mdc-floating-label,.mdc-floating-label[dir="rtl"]{right:0;left:auto;transform-origin:right top}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--float-above{transform:translateY(-100%) scale(.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-100%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-100%) scale(.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75)}}.mdc-line-ripple{position:absolute;bottom:0;left:0;width:100%;height:2px;transform:scaleX(0);transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;z-index:2}.mdc-line-ripple--active{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating{opacity:0}.mdc-notched-outline{position:absolute;top:0;left:0;width:calc(100% - 1px);height:calc(100% - 2px);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;overflow:hidden}.mdc-notched-outline svg{position:absolute;width:100%;height:100%}.mdc-notched-outline__idle{position:absolute;top:0;left:0;width:calc(100% - 4px);height:calc(100% - 4px);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1),border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);border:1px solid;opacity:1}.mdc-notched-outline__path{stroke-width:1px;transition:stroke 150ms cubic-bezier(0.4, 0, 0.2, 1),stroke-width 150ms cubic-bezier(0.4, 0, 0.2, 1);fill:transparent}.mdc-notched-outline--notched{opacity:1}.mdc-notched-outline--notched ~ .mdc-notched-outline__idle{opacity:0}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-text-field-helper-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit;margin:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;will-change:opacity}.mdc-text-field+.mdc-text-field-helper-text{margin-bottom:8px}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon{position:absolute;bottom:16px;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field{display:inline-block;position:relative;margin-bottom:8px;will-change:opacity, transform, color}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:rgba(0,0,0,0.42)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:rgba(0,0,0,0.87)}.mdc-text-field .mdc-line-ripple{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0,0,0,0.87)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0,0,0,0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0,0,0,0.6)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-text{color:rgba(0,0,0,0.6)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:rgba(0,0,0,0.12)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:rgba(0,0,0,0.54)}.mdc-text-field__input{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;width:100%;height:30px;padding:20px 0px 10px 1px;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);border:none;border-bottom:1px solid;border-radius:0;background:none;appearance:none}.mdc-text-field__input::placeholder{transition:color 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input:-webkit-autofill+.mdc-floating-label{transform:translateY(-100%) scale(0.75);cursor:auto}.mdc-text-field--outlined{height:56px;border:none}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__idle{border-color:rgba(0,0,0,0.24)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__path{stroke:rgba(0,0,0,0.24)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline__idle,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline__idle{border-color:rgba(0,0,0,0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__path,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__path{stroke:rgba(0,0,0,0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__path{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-130%) scale(.75)}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}.mdc-text-field--outlined .mdc-notched-outline{border-radius:4px}.mdc-text-field--outlined .mdc-notched-outline__idle{border-radius:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;padding:12px;border:none;background-color:transparent;z-index:1}.mdc-text-field--outlined .mdc-floating-label{left:16px;right:initial;position:absolute;bottom:20px}[dir="rtl"] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir="rtl"]{left:initial;right:16px}.mdc-text-field--outlined .mdc-text-field__icon{z-index:2}.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__path{stroke-width:2px}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0,0,0,0.6)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__idle{border-color:rgba(0,0,0,0.06)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__path{stroke:rgba(0,0,0,0.06)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{border-bottom:none}.mdc-text-field--outlined.mdc-text-field--dense{height:48px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-110%) scale(.923)}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 7px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{bottom:16px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__icon{top:12px}.mdc-text-field--box{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform, opacity;border-radius:4px 4px 0 0;display:inline-flex;position:relative;height:56px;margin-top:16px;overflow:hidden}.mdc-text-field--box::before,.mdc-text-field--box::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--box::before{transition:opacity 15ms linear;z-index:1}.mdc-text-field--box.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--box.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--box.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--box.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-text-field--box.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--box::before,.mdc-text-field--box::after{background-color:rgba(0,0,0,0.87)}.mdc-text-field--box:hover::before{opacity:.04}.mdc-text-field--box:not(.mdc-ripple-upgraded):focus::before,.mdc-text-field--box:not(.mdc-ripple-upgraded):focus-within::before,.mdc-text-field--box.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-text-field--box::before,.mdc-text-field--box::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--box.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field--box:not(.mdc-text-field--disabled){background-color:#f5f5f5}.mdc-text-field--box .mdc-floating-label--float-above{transform:translateY(-50%) scale(.75)}.mdc-text-field--box .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-box 250ms 1}.mdc-text-field--box .mdc-text-field__input{align-self:flex-end;box-sizing:border-box;height:100%;padding:20px 16px 0}.mdc-text-field--box .mdc-floating-label{left:16px;right:initial;position:absolute;bottom:20px;width:calc(100% - 48px);text-overflow:ellipsis;white-space:nowrap;pointer-events:none;overflow:hidden;will-change:transform}[dir="rtl"] .mdc-text-field--box .mdc-floating-label,.mdc-text-field--box .mdc-floating-label[dir="rtl"]{left:initial;right:16px}.mdc-text-field--box.mdc-text-field--disabled{background-color:#fafafa;border-bottom:none}.mdc-text-field--box.mdc-text-field--disabled .mdc-text-field__input{border-bottom-color:rgba(0,0,0,0.06)}.mdc-text-field--box.mdc-text-field--disabled:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0,0,0,0.37)}.mdc-text-field--box.mdc-text-field--disabled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0,0,0,0.37)}.mdc-text-field--box.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-70%) scale(.923)}.mdc-text-field--box.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-box-dense 250ms 1}.mdc-text-field--box.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 0}.mdc-text-field--with-leading-icon .mdc-text-field__icon{left:15px;right:initial}[dir="rtl"] .mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-leading-icon .mdc-text-field__icon[dir="rtl"]{left:initial;right:15px}.mdc-text-field--with-leading-icon .mdc-text-field__input{padding-left:48px;padding-right:15px}[dir="rtl"] .mdc-text-field--with-leading-icon .mdc-text-field__input,.mdc-text-field--with-leading-icon .mdc-text-field__input[dir="rtl"]{padding-left:15px;padding-right:48px}.mdc-text-field--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir="rtl"] .mdc-text-field--with-leading-icon .mdc-floating-label,.mdc-text-field--with-leading-icon .mdc-floating-label[dir="rtl"]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-130%) translateX(-32px) scale(.75)}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir="rtl"]{transform:translateY(-130%) translateX(32px) scale(.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir="rtl"] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-110%) translateX(-21px) scale(.923)}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above[dir="rtl"]{transform:translateY(-110%) translateX(21px) scale(.923)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense 250ms 1}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense[dir="rtl"] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl 250ms 1}.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:initial;right:15px}[dir="rtl"] .mdc-text-field--with-trailing-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir="rtl"]{left:15px;right:initial}.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:15px;padding-right:48px}[dir="rtl"] .mdc-text-field--with-trailing-icon .mdc-text-field__input,.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir="rtl"]{padding-left:48px;padding-right:15px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{bottom:16px;transform:scale(0.8)}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:initial}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir="rtl"]{left:initial;right:12px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:38px;padding-right:12px}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir="rtl"]{padding-left:12px;padding-right:38px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{left:38px;right:initial}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir="rtl"]{left:initial;right:38px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:initial;right:12px}[dir="rtl"] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir="rtl"]{left:12px;right:initial}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:12px;padding-right:38px}[dir="rtl"] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir="rtl"]{padding-left:38px;padding-right:12px}.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box){display:inline-flex;position:relative;align-items:flex-end;box-sizing:border-box;margin-top:16px}.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box):not(.mdc-text-field--textarea):not(.mdc-text-field--outlined){height:48px}.mdc-text-field--dense{margin-top:12px;margin-bottom:4px}.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-110%) scale(.923)}.mdc-text-field--dense .mdc-floating-label{font-size:.813rem}.mdc-text-field__input:required+.mdc-floating-label::after{margin-left:1px;content:"*"}.mdc-text-field--textarea{border-radius:4px;display:flex;width:fit-content;height:initial;transition:none;border:1px solid;overflow:hidden}.mdc-text-field--textarea .mdc-floating-label{border-radius:4px 4px 0 0}.mdc-text-field--textarea .mdc-text-field__input{border-radius:2px}.mdc-text-field--textarea:not(.mdc-text-field--disabled){border-color:rgba(0,0,0,0.73)}.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-text-field__input:focus{border-color:rgba(0,0,0,0.73)}.mdc-text-field--textarea .mdc-floating-label--float-above{transform:translateY(-50%) scale(.923)}.mdc-text-field--textarea .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea 250ms 1}.mdc-text-field--textarea .mdc-text-field__input{height:auto;margin:0;padding:16px;padding-top:32px;border:1px solid transparent}.mdc-text-field--textarea .mdc-floating-label{left:1px;right:initial;background-color:#fff;top:18px;bottom:auto;margin-top:2px;margin-left:8px;padding:8px;line-height:1.15}[dir="rtl"] .mdc-text-field--textarea .mdc-floating-label,.mdc-text-field--textarea .mdc-floating-label[dir="rtl"]{left:initial;right:1px}.mdc-text-field--fullwidth{width:100%}.mdc-text-field--fullwidth .mdc-text-field__input{resize:vertical}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea){display:block;box-sizing:border-box;height:56px;margin:0;border:none;border-bottom:1px solid;outline:none}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input{width:100%;height:100%;padding:0;resize:none;border:none !important}.mdc-text-field--fullwidth.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:#b00020}.mdc-text-field--dense+.mdc-text-field-helper-text{margin-bottom:4px}.mdc-text-field--box+.mdc-text-field-helper-text,.mdc-text-field--outlined+.mdc-text-field-helper-text{margin-right:16px;margin-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98,0,238,0.87)}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(98,0,238,0.87)}.mdc-text-field--focused .mdc-text-field__input:required+.mdc-floating-label::after{color:#b00020}.mdc-text-field--focused+.mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input:focus{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:#b00020}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:#b00020}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple{background-color:#b00020}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:#b00020}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-text--validation-msg{color:#b00020}.mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:#b00020}.mdc-text-field--invalid+.mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled){border-color:#b00020}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input:focus{border-color:#b00020}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__idle{border-color:#b00020}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__path{stroke:#b00020}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline__idle,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline__idle{border-color:#b00020}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__path,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__path{stroke:#b00020}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__path{stroke:#b00020}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{border-bottom-color:rgba(35,31,32,0.26)}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0,0,0,0.37)}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0,0,0,0.37)}.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0,0,0,0.37)}.mdc-text-field--disabled+.mdc-text-field-helper-text{color:rgba(0,0,0,0.37)}.mdc-text-field--disabled .mdc-text-field__icon{color:rgba(0,0,0,0.3)}.mdc-text-field--disabled:not(.mdc-text-field--textarea){border-bottom-color:rgba(0,0,0,0.12)}.mdc-text-field--disabled .mdc-text-field__input{border-bottom:1px dotted}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--textarea.mdc-text-field--disabled{border-color:rgba(35,31,32,0.26);background-color:#f9f9f9;border-style:solid}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input:focus{border-color:rgba(35,31,32,0.26)}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input{border:1px solid transparent}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-floating-label{background-color:#f9f9f9}@keyframes mdc-floating-label-shake-float-above-text-field-box{0%{transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-50%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-50%) scale(.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-box-dense{0%{transform:translateX(calc(0 - 0%)) translateY(-70%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-70%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-70%) scale(.923)}100%{transform:translateX(calc(0 - 0%)) translateY(-70%) scale(.923)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-130%) scale(.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense{0%{transform:translateX(calc(0 - 0%)) translateY(-110%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-110%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-110%) scale(.923)}100%{transform:translateX(calc(0 - 0%)) translateY(-110%) scale(.923)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 32px)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 32px)) translateY(-130%) scale(.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense{0%{transform:translateX(calc(0 - 21px)) translateY(-110%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 21px)) translateY(-110%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 21px)) translateY(-110%) scale(.923)}100%{transform:translateX(calc(0 - 21px)) translateY(-110%) scale(.923)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - -32px)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - -32px)) translateY(-130%) scale(.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl{0%{transform:translateX(calc(0 - -21px)) translateY(-110%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - -21px)) translateY(-110%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - -21px)) translateY(-110%) scale(.923)}100%{transform:translateX(calc(0 - -21px)) translateY(-110%) scale(.923)}}@keyframes mdc-floating-label-shake-float-above-textarea{0%{transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-50%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-50%) scale(.923)}100%{transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.923)}}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host(:not([fullwidth])){display:inline-block}
</style>`;i(0);i.d(e,"Textfield",function(){return be});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class xe extends(dt(_e)){}class be extends lt{static get ComponentClass(){return xe}static get componentSelector(){return".mdc-text-field"}static get properties(){return{value:{type:String},label:{type:String},icon:{type:String},iconTrailing:{type:Boolean},box:{type:Boolean},outlined:{type:Boolean},disabled:{type:Boolean},fullWidth:{type:Boolean},required:{type:Boolean},helperText:{type:String},placeHolder:{type:String},type:{type:String}}}constructor(){super(),this._asyncComponent=!0,this.required=!1,this.value="",this.label="",this.icon="",this.iconTrailing=!1,this.helperText="",this.box=!1,this.outlined=!1,this.disabled=!1,this.fullWidth=!1,this.placeHolder="",this.type=""}renderStyle(){return ge}render(){const{value:t,label:e,box:i,outlined:a,disabled:n,icon:s,iconTrailing:r,fullWidth:o,required:d,placeHolder:l,helperText:c,type:h}=this,u={"mdc-text-field--with-leading-icon":s&&!r,"mdc-text-field--with-trailing-icon":s&&r,"mdc-text-field--box":!o&&i,"mdc-text-field--outlined":!o&&a,"mdc-text-field--disabled":n,"mdc-text-field--fullwidth":o};return k`
      ${this.renderStyle()}
      <div class="mdc-text-field mdc-text-field--upgraded ${ut(u)}">
        ${!o&&s?k`<i class="material-icons mdc-text-field__icon" tabindex="0">${s}</i>`:""}
        ${this._renderInput({value:t,required:d,type:h,placeHolder:l,label:e})}
        ${!o&&e?k`<label class="mdc-floating-label ${t?"mdc-floating-label--float-above":""}" for="text-field">${e}</label>`:""}
        ${!o&&a?k`<div class="mdc-notched-outline">
            <svg><path class="mdc-notched-outline__path"/></svg>
          </div>
          <div class="mdc-notched-outline__idle"></div>`:k`<div class="mdc-line-ripple"></div>`}
      </div>
      ${c?k`<p class="mdc-text-field-helper-text" aria-hidden="true">${c}</p>`:""}`}_renderInput({value:t,required:e,type:i,placeHolder:a,label:n}){return k`<input type="${i}" placeholder="${a}" ?required="${e}" class="mdc-text-field__input ${t?"mdc-text-field--upgraded":""}" id="text-field" .value="${t}" aria-label="${n}">`}firstUpdated(){super.firstUpdated(),this._input=this.shadowRoot.querySelector("input")}get valid(){return this._component&&this._component.isValid()}set valid(t){this.componentReady().then(e=>{e.setValid(t)})}click(){this._input.click()}focus(){this._input.focus()}}customElements.define("mwc-textfield",be)}]);