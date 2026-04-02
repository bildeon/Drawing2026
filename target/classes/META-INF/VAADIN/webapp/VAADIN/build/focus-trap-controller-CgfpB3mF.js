import{g as K,a as T}from"./chunk-3e8b0a89765577764afe6d722a961843944bdb3dbcfcdcfbb1d232dac307117f-tdYxQxOB.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let _=!1,g=[],v=[];function D(){_=!0,requestAnimationFrame(function(){_=!1,R(g),setTimeout(function(){S(v)})})}function R(t){for(;t.length;)O(t.shift())}function S(t){for(let e=0,s=t.length;e<s;e++)O(t.shift())}function O(t){const e=t[0],s=t[1],n=t[2];try{s.apply(e,n)}catch(c){setTimeout(()=>{throw c})}}function V(t,e,s){_||D(),g.push([t,e,s])}function L(t,e,s){_||D(),v.push([t,e,s])}/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let u=new WeakMap,f=new WeakMap,d={},w=0;const N=t=>t&&t.nodeType===Node.ELEMENT_NODE,E=(...t)=>{console.error(`Error: ${t.join(" ")}. Skip setting aria-hidden.`)},W=(t,e)=>N(t)?e.map(s=>{if(!N(s))return E(s,"is not a valid element"),null;let n=s;for(;n&&n!==t;){if(t.contains(n))return s;n=n.getRootNode().host}return E(s,"is not contained inside",t),null}).filter(s=>!!s):(E(t,"is not a valid element"),[]),C=(t,e,s,n)=>{const c=W(e,Array.isArray(t)?t:[t]);d[s]||(d[s]=new WeakMap);const i=d[s],a=[],h=new Set,F=new Set(c),p=o=>{if(!o||h.has(o))return;h.add(o);const l=o.assignedSlot;l&&p(l),p(o.parentNode||o.host)};c.forEach(p);const b=o=>{if(!o||F.has(o))return;const l=o.shadowRoot;(l?[...o.children,...l.children]:[...o.children]).forEach(r=>{if(!["template","script","style"].includes(r.localName))if(h.has(r))b(r);else{const k=r.getAttribute(n),A=k!==null&&k!=="false",x=(u.get(r)||0)+1,M=(i.get(r)||0)+1;u.set(r,x),i.set(r,M),a.push(r),x===1&&A&&f.set(r,!0),M===1&&r.setAttribute(s,"true"),A||r.setAttribute(n,"true")}})};return b(e),h.clear(),w+=1,()=>{a.forEach(o=>{const l=u.get(o)-1,m=i.get(o)-1;u.set(o,l),i.set(o,m),l||(f.has(o)?f.delete(o):o.removeAttribute(n)),m||o.removeAttribute(s)}),w-=1,w||(u=new WeakMap,u=new WeakMap,f=new WeakMap,d={})}},I=(t,e=document.body,s="data-aria-hidden")=>{const n=Array.from(Array.isArray(t)?t:[t]);return e&&n.push(...Array.from(e.querySelectorAll("[aria-live]"))),C(n,e,s,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class j{constructor(e,s){this.host=e,this.callback=typeof s=="function"?s:()=>e}showModal(){const e=this.callback();this.__showOthers=I(e)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const y=[];class B{constructor(e){this.host=e,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return K(this.__trapNode)}get __focusedElementIndex(){const e=this.__focusableElements;return e.indexOf(e.filter(T).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(e){if(this.__trapNode=e,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");y.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,y.pop()}__onKeyDown(e){if(this.__trapNode&&this===Array.from(y).pop()&&e.key==="Tab"){e.preventDefault();const s=e.shiftKey;this.__focusNextElement(s)}}__focusNextElement(e=!1){const s=this.__focusableElements,n=e?-1:1,c=this.__focusedElementIndex,i=(s.length+c+n)%s.length,a=s[i];a.focus(),a.localName==="input"&&a.select()}}export{j as A,B as F,L as a,V as b};
