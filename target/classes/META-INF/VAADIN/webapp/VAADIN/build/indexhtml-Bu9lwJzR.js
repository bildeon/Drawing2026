function Zf(i,r){for(var l=0;l<r.length;l++){const s=r[l];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in i)){const f=Object.getOwnPropertyDescriptor(s,c);f&&Object.defineProperty(i,c,f.get?f:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function l(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=l(c);fetch(c.href,f)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.formFillerAddon=!1;window.Vaadin.featureFlags.hillaI18n=!1;window.Vaadin.featureFlags.fullstackSignals=!1;window.Vaadin.featureFlags.copilotExperimentalFeatures=!1;window.Vaadin.featureFlags.dashboardComponent=!1;function ep(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Os={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function zh(){if(Jd)return be;Jd=1;var i=Symbol.for("react.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),x=Symbol.iterator;function P(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,F={};function V(E,$,fe){this.props=E,this.context=$,this.refs=F,this.updater=fe||N}V.prototype.isReactComponent={},V.prototype.setState=function(E,$){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,$,"setState")},V.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function ye(){}ye.prototype=V.prototype;function X(E,$,fe){this.props=E,this.context=$,this.refs=F,this.updater=fe||N}var W=X.prototype=new ye;W.constructor=X,H(W,V.prototype),W.isPureReactComponent=!0;var re=Array.isArray,me=Object.prototype.hasOwnProperty,Ae={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function J(E,$,fe){var ge,he={},xe=null,Ee=null;if($!=null)for(ge in $.ref!==void 0&&(Ee=$.ref),$.key!==void 0&&(xe=""+$.key),$)me.call($,ge)&&!T.hasOwnProperty(ge)&&(he[ge]=$[ge]);var L=arguments.length-2;if(L===1)he.children=fe;else if(1<L){for(var I=Array(L),se=0;se<L;se++)I[se]=arguments[se+2];he.children=I}if(E&&E.defaultProps)for(ge in L=E.defaultProps,L)he[ge]===void 0&&(he[ge]=L[ge]);return{$$typeof:i,type:E,key:xe,ref:Ee,props:he,_owner:Ae.current}}function Se(E,$){return{$$typeof:i,type:E.type,key:$,ref:E.ref,props:E.props,_owner:E._owner}}function ue(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function Fe(E){var $={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(fe){return $[fe]})}var we=/\/+/g;function _e(E,$){return typeof E=="object"&&E!==null&&E.key!=null?Fe(""+E.key):$.toString(36)}function Ce(E,$,fe,ge,he){var xe=typeof E;(xe==="undefined"||xe==="boolean")&&(E=null);var Ee=!1;if(E===null)Ee=!0;else switch(xe){case"string":case"number":Ee=!0;break;case"object":switch(E.$$typeof){case i:case r:Ee=!0}}if(Ee)return Ee=E,he=he(Ee),E=ge===""?"."+_e(Ee,0):ge,re(he)?(fe="",E!=null&&(fe=E.replace(we,"$&/")+"/"),Ce(he,$,fe,"",function(se){return se})):he!=null&&(ue(he)&&(he=Se(he,fe+(!he.key||Ee&&Ee.key===he.key?"":(""+he.key).replace(we,"$&/")+"/")+E)),$.push(he)),1;if(Ee=0,ge=ge===""?".":ge+":",re(E))for(var L=0;L<E.length;L++){xe=E[L];var I=ge+_e(xe,L);Ee+=Ce(xe,$,fe,I,he)}else if(I=P(E),typeof I=="function")for(E=I.call(E),L=0;!(xe=E.next()).done;)xe=xe.value,I=ge+_e(xe,L++),Ee+=Ce(xe,$,fe,I,he);else if(xe==="object")throw $=String(E),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Ee}function ze(E,$,fe){if(E==null)return E;var ge=[],he=0;return Ce(E,ge,"","",function(xe){return $.call(fe,xe,he++)}),ge}function Ge(E){if(E._status===-1){var $=E._result;$=$(),$.then(function(fe){(E._status===0||E._status===-1)&&(E._status=1,E._result=fe)},function(fe){(E._status===0||E._status===-1)&&(E._status=2,E._result=fe)}),E._status===-1&&(E._status=0,E._result=$)}if(E._status===1)return E._result.default;throw E._result}var Ie={current:null},U={transition:null},ie={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:U,ReactCurrentOwner:Ae};function Q(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:ze,forEach:function(E,$,fe){ze(E,function(){$.apply(this,arguments)},fe)},count:function(E){var $=0;return ze(E,function(){$++}),$},toArray:function(E){return ze(E,function($){return $})||[]},only:function(E){if(!ue(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},be.Component=V,be.Fragment=l,be.Profiler=c,be.PureComponent=X,be.StrictMode=s,be.Suspense=m,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,be.act=Q,be.cloneElement=function(E,$,fe){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var ge=H({},E.props),he=E.key,xe=E.ref,Ee=E._owner;if($!=null){if($.ref!==void 0&&(xe=$.ref,Ee=Ae.current),$.key!==void 0&&(he=""+$.key),E.type&&E.type.defaultProps)var L=E.type.defaultProps;for(I in $)me.call($,I)&&!T.hasOwnProperty(I)&&(ge[I]=$[I]===void 0&&L!==void 0?L[I]:$[I])}var I=arguments.length-2;if(I===1)ge.children=fe;else if(1<I){L=Array(I);for(var se=0;se<I;se++)L[se]=arguments[se+2];ge.children=L}return{$$typeof:i,type:E.type,key:he,ref:xe,props:ge,_owner:Ee}},be.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:f,_context:E},E.Consumer=E},be.createElement=J,be.createFactory=function(E){var $=J.bind(null,E);return $.type=E,$},be.createRef=function(){return{current:null}},be.forwardRef=function(E){return{$$typeof:v,render:E}},be.isValidElement=ue,be.lazy=function(E){return{$$typeof:k,_payload:{_status:-1,_result:E},_init:Ge}},be.memo=function(E,$){return{$$typeof:S,type:E,compare:$===void 0?null:$}},be.startTransition=function(E){var $=U.transition;U.transition={};try{E()}finally{U.transition=$}},be.unstable_act=Q,be.useCallback=function(E,$){return Ie.current.useCallback(E,$)},be.useContext=function(E){return Ie.current.useContext(E)},be.useDebugValue=function(){},be.useDeferredValue=function(E){return Ie.current.useDeferredValue(E)},be.useEffect=function(E,$){return Ie.current.useEffect(E,$)},be.useId=function(){return Ie.current.useId()},be.useImperativeHandle=function(E,$,fe){return Ie.current.useImperativeHandle(E,$,fe)},be.useInsertionEffect=function(E,$){return Ie.current.useInsertionEffect(E,$)},be.useLayoutEffect=function(E,$){return Ie.current.useLayoutEffect(E,$)},be.useMemo=function(E,$){return Ie.current.useMemo(E,$)},be.useReducer=function(E,$,fe){return Ie.current.useReducer(E,$,fe)},be.useRef=function(E){return Ie.current.useRef(E)},be.useState=function(E){return Ie.current.useState(E)},be.useSyncExternalStore=function(E,$,fe){return Ie.current.useSyncExternalStore(E,$,fe)},be.useTransition=function(){return Ie.current.useTransition()},be.version="18.3.1",be}var Zd;function Yl(){return Zd||(Zd=1,Os.exports=zh()),Os.exports}var D=Yl();const Lh=ep(D),Nh=Zf({__proto__:null,default:Lh},[D]);var Ml={},Ms={exports:{}},Nt={},As={exports:{}},Is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function $h(){return ef||(ef=1,function(i){function r(U,ie){var Q=U.length;U.push(ie);e:for(;0<Q;){var E=Q-1>>>1,$=U[E];if(0<c($,ie))U[E]=ie,U[Q]=$,Q=E;else break e}}function l(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var ie=U[0],Q=U.pop();if(Q!==ie){U[0]=Q;e:for(var E=0,$=U.length,fe=$>>>1;E<fe;){var ge=2*(E+1)-1,he=U[ge],xe=ge+1,Ee=U[xe];if(0>c(he,Q))xe<$&&0>c(Ee,he)?(U[E]=Ee,U[xe]=Q,E=xe):(U[E]=he,U[ge]=Q,E=ge);else if(xe<$&&0>c(Ee,Q))U[E]=Ee,U[xe]=Q,E=xe;else break e}}return ie}function c(U,ie){var Q=U.sortIndex-ie.sortIndex;return Q!==0?Q:U.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var p=Date,v=p.now();i.unstable_now=function(){return p.now()-v}}var m=[],S=[],k=1,x=null,P=3,N=!1,H=!1,F=!1,V=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(U){for(var ie=l(S);ie!==null;){if(ie.callback===null)s(S);else if(ie.startTime<=U)s(S),ie.sortIndex=ie.expirationTime,r(m,ie);else break;ie=l(S)}}function re(U){if(F=!1,W(U),!H)if(l(m)!==null)H=!0,Ge(me);else{var ie=l(S);ie!==null&&Ie(re,ie.startTime-U)}}function me(U,ie){H=!1,F&&(F=!1,ye(J),J=-1),N=!0;var Q=P;try{for(W(ie),x=l(m);x!==null&&(!(x.expirationTime>ie)||U&&!Fe());){var E=x.callback;if(typeof E=="function"){x.callback=null,P=x.priorityLevel;var $=E(x.expirationTime<=ie);ie=i.unstable_now(),typeof $=="function"?x.callback=$:x===l(m)&&s(m),W(ie)}else s(m);x=l(m)}if(x!==null)var fe=!0;else{var ge=l(S);ge!==null&&Ie(re,ge.startTime-ie),fe=!1}return fe}finally{x=null,P=Q,N=!1}}var Ae=!1,T=null,J=-1,Se=5,ue=-1;function Fe(){return!(i.unstable_now()-ue<Se)}function we(){if(T!==null){var U=i.unstable_now();ue=U;var ie=!0;try{ie=T(!0,U)}finally{ie?_e():(Ae=!1,T=null)}}else Ae=!1}var _e;if(typeof X=="function")_e=function(){X(we)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,ze=Ce.port2;Ce.port1.onmessage=we,_e=function(){ze.postMessage(null)}}else _e=function(){V(we,0)};function Ge(U){T=U,Ae||(Ae=!0,_e())}function Ie(U,ie){J=V(function(){U(i.unstable_now())},ie)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(U){U.callback=null},i.unstable_continueExecution=function(){H||N||(H=!0,Ge(me))},i.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Se=0<U?Math.floor(1e3/U):5},i.unstable_getCurrentPriorityLevel=function(){return P},i.unstable_getFirstCallbackNode=function(){return l(m)},i.unstable_next=function(U){switch(P){case 1:case 2:case 3:var ie=3;break;default:ie=P}var Q=P;P=ie;try{return U()}finally{P=Q}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(U,ie){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Q=P;P=U;try{return ie()}finally{P=Q}},i.unstable_scheduleCallback=function(U,ie,Q){var E=i.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?E+Q:E):Q=E,U){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=Q+$,U={id:k++,callback:ie,priorityLevel:U,startTime:Q,expirationTime:$,sortIndex:-1},Q>E?(U.sortIndex=Q,r(S,U),l(m)===null&&U===l(S)&&(F?(ye(J),J=-1):F=!0,Ie(re,Q-E))):(U.sortIndex=$,r(m,U),H||N||(H=!0,Ge(me))),U},i.unstable_shouldYield=Fe,i.unstable_wrapCallback=function(U){var ie=P;return function(){var Q=P;P=ie;try{return U.apply(this,arguments)}finally{P=Q}}}}(Is)),Is}var tf;function Dh(){return tf||(tf=1,As.exports=$h()),As.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function Oh(){if(nf)return Nt;nf=1;var i=Yl(),r=Dh();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function f(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(c[e]=t,e=0;e<t.length;e++)s.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},x={};function P(e){return m.call(x,e)?!0:m.call(k,e)?!1:S.test(e)?x[e]=!0:(k[e]=!0,!1)}function N(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,t,n,o){if(t===null||typeof t>"u"||N(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function F(e,t,n,o,a,u,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=d}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];V[t]=new F(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ye,X);V[t]=new F(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ye,X);V[t]=new F(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ye,X);V[t]=new F(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,n,o){var a=V.hasOwnProperty(t)?V[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H(t,n,a,o)&&(n=null),o||a===null?P(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var re=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,me=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),Fe=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Ie=Symbol.for("react.offscreen"),U=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,E;function $(e){if(E===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);E=t&&t[1]||""}return`
`+E+e}var fe=!1;function ge(e,t){if(!e||fe)return"";fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(R){var o=R}Reflect.construct(e,[],t)}else{try{t.call()}catch(R){o=R}e.call(t.prototype)}else{try{throw Error()}catch(R){o=R}e()}}catch(R){if(R&&o&&typeof R.stack=="string"){for(var a=R.stack.split(`
`),u=o.stack.split(`
`),d=a.length-1,h=u.length-1;1<=d&&0<=h&&a[d]!==u[h];)h--;for(;1<=d&&0<=h;d--,h--)if(a[d]!==u[h]){if(d!==1||h!==1)do if(d--,h--,0>h||a[d]!==u[h]){var y=`
`+a[d].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=d&&0<=h);break}}}finally{fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$(e):""}function he(e){switch(e.tag){case 5:return $(e.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return""}}function xe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case Ae:return"Portal";case Se:return"Profiler";case J:return"StrictMode";case _e:return"Suspense";case Ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fe:return(e.displayName||"Context")+".Consumer";case ue:return(e._context.displayName||"Context")+".Provider";case we:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ze:return t=e.displayName||null,t!==null?t:xe(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}function Ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(t);case 8:return t===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function L(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function I(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function se(e){var t=I(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){o=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nt(e){e._valueTracker||(e._valueTracker=se(e))}function Ne(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=I(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dt(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ci(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=L(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function an(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function wo(e,t){an(e,t);var n=L(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mr(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mr(e,t.type,L(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mr(e,t,n){(t!=="number"||je(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function zn(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+L(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function So(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(ur(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:L(n)}}function sn(e,t){var n=L(t.value),o=L(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Ln(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ko(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ko(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ot,Bt=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ot=Ot||document.createElement("div"),Ot.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ot.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ea=["Webkit","ms","Moz","O"];Object.keys(un).forEach(function(e){ea.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),un[t]=un[e]})});function Xt(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||un.hasOwnProperty(e)&&un[e]?(""+t).trim():t+"px"}function Eo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=Xt(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var Ti=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ar(e,t){if(t){if(Ti[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function _o(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ir=null;function $n(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fr=null,cn=null,dn=null;function Ri(e){if(e=Qo(e)){if(typeof Fr!="function")throw Error(l(280));var t=e.stateNode;t&&(t=qi(t),Fr(e.stateNode,e.type,t))}}function Co(e){cn?dn?dn.push(e):dn=[e]:cn=e}function zi(){if(cn){var e=cn,t=dn;if(dn=cn=null,Ri(e),t)for(e=0;e<t.length;e++)Ri(t[e])}}function bo(e,t){return e(t)}function dr(){}var Dn=!1;function Li(e,t,n){if(Dn)return e(t,n);Dn=!0;try{return bo(e,t,n)}finally{Dn=!1,(cn!==null||dn!==null)&&(dr(),zi())}}function fr(e,t){var n=e.stateNode;if(n===null)return null;var o=qi(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var g=!1;if(v)try{var _={};Object.defineProperty(_,"passive",{get:function(){g=!0}}),window.addEventListener("test",_,_),window.removeEventListener("test",_,_)}catch{g=!1}function z(e,t,n,o,a,u,d,h,y){var R=Array.prototype.slice.call(arguments,3);try{t.apply(n,R)}catch(A){this.onError(A)}}var O=!1,K=null,le=!1,pe=null,Z={onError:function(e){O=!0,K=e}};function ee(e,t,n,o,a,u,d,h,y){O=!1,K=null,z.apply(Z,arguments)}function Y(e,t,n,o,a,u,d,h,y){if(ee.apply(this,arguments),O){if(O){var R=K;O=!1,K=null}else throw Error(l(198));le||(le=!0,pe=R)}}function ne(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ke(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pe(e){if(ne(e)!==e)throw Error(l(188))}function st(e){var t=e.alternate;if(!t){if(t=ne(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return Pe(a),e;if(u===o)return Pe(a),t;u=u.sibling}throw Error(l(188))}if(n.return!==o.return)n=a,o=u;else{for(var d=!1,h=a.child;h;){if(h===n){d=!0,n=a,o=u;break}if(h===o){d=!0,o=a,n=u;break}h=h.sibling}if(!d){for(h=u.child;h;){if(h===n){d=!0,n=u,o=a;break}if(h===o){d=!0,o=u,n=a;break}h=h.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==o)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Ve(e){return e=st(e),e!==null?Le(e):null}function Le(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Le(e);if(t!==null)return t;e=e.sibling}return null}var Ye=r.unstable_scheduleCallback,gn=r.unstable_cancelCallback,pr=r.unstable_shouldYield,qt=r.unstable_requestPaint,De=r.unstable_now,Po=r.unstable_getCurrentPriorityLevel,yn=r.unstable_ImmediatePriority,fn=r.unstable_UserBlockingPriority,xn=r.unstable_NormalPriority,Ur=r.unstable_LowPriority,Re=r.unstable_IdlePriority,We=null,gt=null;function mr(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(We,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:ta,On=Math.log,Ni=Math.LN2;function ta(e){return e>>>=0,e===0?32:31-(On(e)/Ni|0)|0}var $i=64,Di=4194304;function To(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oi(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,u=e.pingedLanes,d=n&268435455;if(d!==0){var h=d&~a;h!==0?o=To(h):(u&=d,u!==0&&(o=To(u)))}else d=n&~a,d!==0?o=To(d):u!==0&&(o=To(u));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,u=t&-t,a>=u||a===16&&(u&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Oe(t),a=1<<n,o|=e[n],t&=~a;return o}function Yp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xp(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes;0<u;){var d=31-Oe(u),h=1<<d,y=a[d];y===-1?(!(h&n)||h&o)&&(a[d]=Yp(h,t)):y<=t&&(e.expiredLanes|=h),u&=~h}}function na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ru(){var e=$i;return $i<<=1,!($i&4194240)&&($i=64),e}function ra(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ro(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function qp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Oe(n),u=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~u}}function oa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Oe(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var Be=0;function zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lu,ia,Nu,$u,Du,la=!1,Mi=[],Mn=null,An=null,In=null,zo=new Map,Lo=new Map,Fn=[],Jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(t.pointerId)}}function No(e,t,n,o,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[a]},t!==null&&(t=Qo(t),t!==null&&ia(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Zp(e,t,n,o,a){switch(t){case"focusin":return Mn=No(Mn,e,t,n,o,a),!0;case"dragenter":return An=No(An,e,t,n,o,a),!0;case"mouseover":return In=No(In,e,t,n,o,a),!0;case"pointerover":var u=a.pointerId;return zo.set(u,No(zo.get(u)||null,e,t,n,o,a)),!0;case"gotpointercapture":return u=a.pointerId,Lo.set(u,No(Lo.get(u)||null,e,t,n,o,a)),!0}return!1}function Mu(e){var t=hr(e.target);if(t!==null){var n=ne(t);if(n!==null){if(t=n.tag,t===13){if(t=ke(n),t!==null){e.blockedOn=t,Du(e.priority,function(){Nu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Ir=o,n.target.dispatchEvent(o),Ir=null}else return t=Qo(n),t!==null&&ia(t),e.blockedOn=n,!1;t.shift()}return!0}function Au(e,t,n){Ai(e)&&n.delete(t)}function em(){la=!1,Mn!==null&&Ai(Mn)&&(Mn=null),An!==null&&Ai(An)&&(An=null),In!==null&&Ai(In)&&(In=null),zo.forEach(Au),Lo.forEach(Au)}function $o(e,t){e.blockedOn===t&&(e.blockedOn=null,la||(la=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,em)))}function Do(e){function t(a){return $o(a,e)}if(0<Mi.length){$o(Mi[0],e);for(var n=1;n<Mi.length;n++){var o=Mi[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Mn!==null&&$o(Mn,e),An!==null&&$o(An,e),In!==null&&$o(In,e),zo.forEach(t),Lo.forEach(t),n=0;n<Fn.length;n++)o=Fn[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)Mu(n),n.blockedOn===null&&Fn.shift()}var jr=re.ReactCurrentBatchConfig,Ii=!0;function tm(e,t,n,o){var a=Be,u=jr.transition;jr.transition=null;try{Be=1,aa(e,t,n,o)}finally{Be=a,jr.transition=u}}function nm(e,t,n,o){var a=Be,u=jr.transition;jr.transition=null;try{Be=4,aa(e,t,n,o)}finally{Be=a,jr.transition=u}}function aa(e,t,n,o){if(Ii){var a=sa(e,t,n,o);if(a===null)Ca(e,t,o,Fi,n),Ou(e,o);else if(Zp(a,e,t,n,o))o.stopPropagation();else if(Ou(e,o),t&4&&-1<Jp.indexOf(e)){for(;a!==null;){var u=Qo(a);if(u!==null&&Lu(u),u=sa(e,t,n,o),u===null&&Ca(e,t,o,Fi,n),u===a)break;a=u}a!==null&&o.stopPropagation()}else Ca(e,t,o,null,n)}}var Fi=null;function sa(e,t,n,o){if(Fi=null,e=$n(o),e=hr(e),e!==null)if(t=ne(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ke(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fi=e,null}function Iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Po()){case yn:return 1;case fn:return 4;case xn:case Ur:return 16;case Re:return 536870912;default:return 16}default:return 16}}var Un=null,ua=null,Ui=null;function Fu(){if(Ui)return Ui;var e,t=ua,n=t.length,o,a="value"in Un?Un.value:Un.textContent,u=a.length;for(e=0;e<n&&t[e]===a[e];e++);var d=n-e;for(o=1;o<=d&&t[n-o]===a[u-o];o++);return Ui=a.slice(e,1<o?1-o:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function Uu(){return!1}function Mt(e){function t(n,o,a,u,d){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Vi:Uu,this.isPropagationStopped=Uu,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=Mt(Vr),Oo=Q({},Vr,{view:0,detail:0}),rm=Mt(Oo),da,fa,Mo,Bi=Q({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mo&&(Mo&&e.type==="mousemove"?(da=e.screenX-Mo.screenX,fa=e.screenY-Mo.screenY):fa=da=0,Mo=e),da)},movementY:function(e){return"movementY"in e?e.movementY:fa}}),ju=Mt(Bi),om=Q({},Bi,{dataTransfer:0}),im=Mt(om),lm=Q({},Oo,{relatedTarget:0}),pa=Mt(lm),am=Q({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),sm=Mt(am),um=Q({},Vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cm=Mt(um),dm=Q({},Vr,{data:0}),Vu=Mt(dm),fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mm[e])?!!t[e]:!1}function ma(){return hm}var vm=Q({},Oo,{key:function(e){if(e.key){var t=fm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ma,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gm=Mt(vm),ym=Q({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bu=Mt(ym),xm=Q({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ma}),wm=Mt(xm),Sm=Q({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),km=Mt(Sm),Em=Q({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_m=Mt(Em),Cm=[9,13,27,32],ha=v&&"CompositionEvent"in window,Ao=null;v&&"documentMode"in document&&(Ao=document.documentMode);var bm=v&&"TextEvent"in window&&!Ao,Hu=v&&(!ha||Ao&&8<Ao&&11>=Ao),Wu=" ",Qu=!1;function Ku(e,t){switch(e){case"keyup":return Cm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function Pm(e,t){switch(e){case"compositionend":return Gu(t);case"keypress":return t.which!==32?null:(Qu=!0,Wu);case"textInput":return e=t.data,e===Wu&&Qu?null:e;default:return null}}function Tm(e,t){if(Br)return e==="compositionend"||!ha&&Ku(e,t)?(e=Fu(),Ui=ua=Un=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hu&&t.locale!=="ko"?null:t.data;default:return null}}var Rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rm[e.type]:t==="textarea"}function Xu(e,t,n,o){Co(o),t=Gi(t,"onChange"),0<t.length&&(n=new ca("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Io=null,Fo=null;function zm(e){mc(e,0)}function Hi(e){var t=Gr(e);if(Ne(t))return e}function Lm(e,t){if(e==="change")return t}var qu=!1;if(v){var va;if(v){var ga="oninput"in document;if(!ga){var Ju=document.createElement("div");Ju.setAttribute("oninput","return;"),ga=typeof Ju.oninput=="function"}va=ga}else va=!1;qu=va&&(!document.documentMode||9<document.documentMode)}function Zu(){Io&&(Io.detachEvent("onpropertychange",ec),Fo=Io=null)}function ec(e){if(e.propertyName==="value"&&Hi(Fo)){var t=[];Xu(t,Fo,e,$n(e)),Li(zm,t)}}function Nm(e,t,n){e==="focusin"?(Zu(),Io=t,Fo=n,Io.attachEvent("onpropertychange",ec)):e==="focusout"&&Zu()}function $m(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(Fo)}function Dm(e,t){if(e==="click")return Hi(t)}function Om(e,t){if(e==="input"||e==="change")return Hi(t)}function Mm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:Mm;function Uo(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!m.call(t,a)||!Jt(e[a],t[a]))return!1}return!0}function tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nc(e,t){var n=tc(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tc(n)}}function rc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function oc(){for(var e=window,t=je();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=je(e.document)}return t}function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Am(e){var t=oc(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rc(n.ownerDocument.documentElement,n)){if(o!==null&&ya(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,u=Math.min(o.start,a);o=o.end===void 0?u:Math.min(o.end,a),!e.extend&&u>o&&(a=o,o=u,u=a),a=nc(n,u);var d=nc(n,o);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),u>o?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Im=v&&"documentMode"in document&&11>=document.documentMode,Hr=null,xa=null,jo=null,wa=!1;function ic(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wa||Hr==null||Hr!==je(o)||(o=Hr,"selectionStart"in o&&ya(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),jo&&Uo(jo,o)||(jo=o,o=Gi(xa,"onSelect"),0<o.length&&(t=new ca("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Hr)))}function Wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wr={animationend:Wi("Animation","AnimationEnd"),animationiteration:Wi("Animation","AnimationIteration"),animationstart:Wi("Animation","AnimationStart"),transitionend:Wi("Transition","TransitionEnd")},Sa={},lc={};v&&(lc=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function Qi(e){if(Sa[e])return Sa[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lc)return Sa[e]=t[n];return e}var ac=Qi("animationend"),sc=Qi("animationiteration"),uc=Qi("animationstart"),cc=Qi("transitionend"),dc=new Map,fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,t){dc.set(e,t),f(t,[e])}for(var ka=0;ka<fc.length;ka++){var Ea=fc[ka],Fm=Ea.toLowerCase(),Um=Ea[0].toUpperCase()+Ea.slice(1);jn(Fm,"on"+Um)}jn(ac,"onAnimationEnd"),jn(sc,"onAnimationIteration"),jn(uc,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(cc,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function pc(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Y(o,t,void 0,e),e.currentTarget=null}function mc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var d=o.length-1;0<=d;d--){var h=o[d],y=h.instance,R=h.currentTarget;if(h=h.listener,y!==u&&a.isPropagationStopped())break e;pc(a,h,R),u=y}else for(d=0;d<o.length;d++){if(h=o[d],y=h.instance,R=h.currentTarget,h=h.listener,y!==u&&a.isPropagationStopped())break e;pc(a,h,R),u=y}}}if(le)throw e=pe,le=!1,pe=null,e}function Xe(e,t){var n=t[La];n===void 0&&(n=t[La]=new Set);var o=e+"__bubble";n.has(o)||(hc(t,e,2,!1),n.add(o))}function _a(e,t,n){var o=0;t&&(o|=4),hc(n,e,o,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function Bo(e){if(!e[Ki]){e[Ki]=!0,s.forEach(function(n){n!=="selectionchange"&&(jm.has(n)||_a(n,!1,e),_a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,_a("selectionchange",!1,t))}}function hc(e,t,n,o){switch(Iu(t)){case 1:var a=tm;break;case 4:a=nm;break;default:a=aa}n=a.bind(null,t,n,e),a=void 0,!g||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ca(e,t,n,o,a){var u=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var h=o.stateNode.containerInfo;if(h===a||h.nodeType===8&&h.parentNode===a)break;if(d===4)for(d=o.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===a||y.nodeType===8&&y.parentNode===a))return;d=d.return}for(;h!==null;){if(d=hr(h),d===null)return;if(y=d.tag,y===5||y===6){o=u=d;continue e}h=h.parentNode}}o=o.return}Li(function(){var R=u,A=$n(n),j=[];e:{var M=dc.get(e);if(M!==void 0){var G=ca,te=e;switch(e){case"keypress":if(ji(n)===0)break e;case"keydown":case"keyup":G=gm;break;case"focusin":te="focus",G=pa;break;case"focusout":te="blur",G=pa;break;case"beforeblur":case"afterblur":G=pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=im;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=wm;break;case ac:case sc:case uc:G=sm;break;case cc:G=km;break;case"scroll":G=rm;break;case"wheel":G=_m;break;case"copy":case"cut":case"paste":G=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Bu}var oe=(t&4)!==0,it=!oe&&e==="scroll",C=oe?M!==null?M+"Capture":null:M;oe=[];for(var w=R,b;w!==null;){b=w;var B=b.stateNode;if(b.tag===5&&B!==null&&(b=B,C!==null&&(B=fr(w,C),B!=null&&oe.push(Ho(w,B,b)))),it)break;w=w.return}0<oe.length&&(M=new G(M,te,null,n,A),j.push({event:M,listeners:oe}))}}if(!(t&7)){e:{if(M=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",M&&n!==Ir&&(te=n.relatedTarget||n.fromElement)&&(hr(te)||te[wn]))break e;if((G||M)&&(M=A.window===A?A:(M=A.ownerDocument)?M.defaultView||M.parentWindow:window,G?(te=n.relatedTarget||n.toElement,G=R,te=te?hr(te):null,te!==null&&(it=ne(te),te!==it||te.tag!==5&&te.tag!==6)&&(te=null)):(G=null,te=R),G!==te)){if(oe=ju,B="onMouseLeave",C="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Bu,B="onPointerLeave",C="onPointerEnter",w="pointer"),it=G==null?M:Gr(G),b=te==null?M:Gr(te),M=new oe(B,w+"leave",G,n,A),M.target=it,M.relatedTarget=b,B=null,hr(A)===R&&(oe=new oe(C,w+"enter",te,n,A),oe.target=b,oe.relatedTarget=it,B=oe),it=B,G&&te)t:{for(oe=G,C=te,w=0,b=oe;b;b=Qr(b))w++;for(b=0,B=C;B;B=Qr(B))b++;for(;0<w-b;)oe=Qr(oe),w--;for(;0<b-w;)C=Qr(C),b--;for(;w--;){if(oe===C||C!==null&&oe===C.alternate)break t;oe=Qr(oe),C=Qr(C)}oe=null}else oe=null;G!==null&&vc(j,M,G,oe,!1),te!==null&&it!==null&&vc(j,it,te,oe,!0)}}e:{if(M=R?Gr(R):window,G=M.nodeName&&M.nodeName.toLowerCase(),G==="select"||G==="input"&&M.type==="file")var ae=Lm;else if(Yu(M))if(qu)ae=Om;else{ae=$m;var ce=Nm}else(G=M.nodeName)&&G.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(ae=Dm);if(ae&&(ae=ae(e,R))){Xu(j,ae,n,A);break e}ce&&ce(e,M,R),e==="focusout"&&(ce=M._wrapperState)&&ce.controlled&&M.type==="number"&&Mr(M,"number",M.value)}switch(ce=R?Gr(R):window,e){case"focusin":(Yu(ce)||ce.contentEditable==="true")&&(Hr=ce,xa=R,jo=null);break;case"focusout":jo=xa=Hr=null;break;case"mousedown":wa=!0;break;case"contextmenu":case"mouseup":case"dragend":wa=!1,ic(j,n,A);break;case"selectionchange":if(Im)break;case"keydown":case"keyup":ic(j,n,A)}var de;if(ha)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Br?Ku(e,n)&&(ve="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ve="onCompositionStart");ve&&(Hu&&n.locale!=="ko"&&(Br||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Br&&(de=Fu()):(Un=A,ua="value"in Un?Un.value:Un.textContent,Br=!0)),ce=Gi(R,ve),0<ce.length&&(ve=new Vu(ve,e,null,n,A),j.push({event:ve,listeners:ce}),de?ve.data=de:(de=Gu(n),de!==null&&(ve.data=de)))),(de=bm?Pm(e,n):Tm(e,n))&&(R=Gi(R,"onBeforeInput"),0<R.length&&(A=new Vu("onBeforeInput","beforeinput",null,n,A),j.push({event:A,listeners:R}),A.data=de))}mc(j,t)})}function Ho(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gi(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,u=a.stateNode;a.tag===5&&u!==null&&(a=u,u=fr(e,n),u!=null&&o.unshift(Ho(e,u,a)),u=fr(e,t),u!=null&&o.push(Ho(e,u,a))),e=e.return}return o}function Qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vc(e,t,n,o,a){for(var u=t._reactName,d=[];n!==null&&n!==o;){var h=n,y=h.alternate,R=h.stateNode;if(y!==null&&y===o)break;h.tag===5&&R!==null&&(h=R,a?(y=fr(n,u),y!=null&&d.unshift(Ho(n,y,h))):a||(y=fr(n,u),y!=null&&d.push(Ho(n,y,h)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Vm=/\r\n?/g,Bm=/\u0000|\uFFFD/g;function gc(e){return(typeof e=="string"?e:""+e).replace(Vm,`
`).replace(Bm,"")}function Yi(e,t,n){if(t=gc(t),gc(e)!==t&&n)throw Error(l(425))}function Xi(){}var ba=null,Pa=null;function Ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ra=typeof setTimeout=="function"?setTimeout:void 0,Hm=typeof clearTimeout=="function"?clearTimeout:void 0,yc=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof yc<"u"?function(e){return yc.resolve(null).then(e).catch(Qm)}:Ra;function Qm(e){setTimeout(function(){throw e})}function za(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),Do(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);Do(t)}function Vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),pn="__reactFiber$"+Kr,Wo="__reactProps$"+Kr,wn="__reactContainer$"+Kr,La="__reactEvents$"+Kr,Km="__reactListeners$"+Kr,Gm="__reactHandles$"+Kr;function hr(e){var t=e[pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wn]||n[pn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xc(e);e!==null;){if(n=e[pn])return n;e=xc(e)}return t}e=n,n=e.parentNode}return null}function Qo(e){return e=e[pn]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function qi(e){return e[Wo]||null}var Na=[],Yr=-1;function Bn(e){return{current:e}}function qe(e){0>Yr||(e.current=Na[Yr],Na[Yr]=null,Yr--)}function Ke(e,t){Yr++,Na[Yr]=e.current,e.current=t}var Hn={},wt=Bn(Hn),Pt=Bn(!1),vr=Hn;function Xr(e,t){var n=e.type.contextTypes;if(!n)return Hn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},u;for(u in n)a[u]=t[u];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Tt(e){return e=e.childContextTypes,e!=null}function Ji(){qe(Pt),qe(wt)}function wc(e,t,n){if(wt.current!==Hn)throw Error(l(168));Ke(wt,t),Ke(Pt,n)}function Sc(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(l(108,Ee(e)||"Unknown",a));return Q({},n,o)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,vr=wt.current,Ke(wt,e),Ke(Pt,Pt.current),!0}function kc(e,t,n){var o=e.stateNode;if(!o)throw Error(l(169));n?(e=Sc(e,t,vr),o.__reactInternalMemoizedMergedChildContext=e,qe(Pt),qe(wt),Ke(wt,e)):qe(Pt),Ke(Pt,n)}var Sn=null,el=!1,$a=!1;function Ec(e){Sn===null?Sn=[e]:Sn.push(e)}function Ym(e){el=!0,Ec(e)}function Wn(){if(!$a&&Sn!==null){$a=!0;var e=0,t=Be;try{var n=Sn;for(Be=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Sn=null,el=!1}catch(a){throw Sn!==null&&(Sn=Sn.slice(e+1)),Ye(yn,Wn),a}finally{Be=t,$a=!1}}return null}var qr=[],Jr=0,tl=null,nl=0,Ht=[],Wt=0,gr=null,kn=1,En="";function yr(e,t){qr[Jr++]=nl,qr[Jr++]=tl,tl=e,nl=t}function _c(e,t,n){Ht[Wt++]=kn,Ht[Wt++]=En,Ht[Wt++]=gr,gr=e;var o=kn;e=En;var a=32-Oe(o)-1;o&=~(1<<a),n+=1;var u=32-Oe(t)+a;if(30<u){var d=a-a%5;u=(o&(1<<d)-1).toString(32),o>>=d,a-=d,kn=1<<32-Oe(t)+a|n<<a|o,En=u+e}else kn=1<<u|n<<a|o,En=e}function Da(e){e.return!==null&&(yr(e,1),_c(e,1,0))}function Oa(e){for(;e===tl;)tl=qr[--Jr],qr[Jr]=null,nl=qr[--Jr],qr[Jr]=null;for(;e===gr;)gr=Ht[--Wt],Ht[Wt]=null,En=Ht[--Wt],Ht[Wt]=null,kn=Ht[--Wt],Ht[Wt]=null}var At=null,It=null,Je=!1,Zt=null;function Cc(e,t){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,At=e,It=Vn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,At=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gr!==null?{id:kn,overflow:En}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,At=e,It=null,!0):!1;default:return!1}}function Ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Aa(e){if(Je){var t=It;if(t){var n=t;if(!bc(e,t)){if(Ma(e))throw Error(l(418));t=Vn(n.nextSibling);var o=At;t&&bc(e,t)?Cc(o,n):(e.flags=e.flags&-4097|2,Je=!1,At=e)}}else{if(Ma(e))throw Error(l(418));e.flags=e.flags&-4097|2,Je=!1,At=e}}}function Pc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;At=e}function rl(e){if(e!==At)return!1;if(!Je)return Pc(e),Je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ta(e.type,e.memoizedProps)),t&&(t=It)){if(Ma(e))throw Tc(),Error(l(418));for(;t;)Cc(e,t),t=Vn(t.nextSibling)}if(Pc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){It=Vn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}It=null}}else It=At?Vn(e.stateNode.nextSibling):null;return!0}function Tc(){for(var e=It;e;)e=Vn(e.nextSibling)}function Zr(){It=At=null,Je=!1}function Ia(e){Zt===null?Zt=[e]:Zt.push(e)}var Xm=re.ReactCurrentBatchConfig;function Ko(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var o=n.stateNode}if(!o)throw Error(l(147,e));var a=o,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(d){var h=a.refs;d===null?delete h[u]:h[u]=d},t._stringRef=u,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function ol(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rc(e){var t=e._init;return t(e._payload)}function zc(e){function t(C,w){if(e){var b=C.deletions;b===null?(C.deletions=[w],C.flags|=16):b.push(w)}}function n(C,w){if(!e)return null;for(;w!==null;)t(C,w),w=w.sibling;return null}function o(C,w){for(C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function a(C,w){return C=Zn(C,w),C.index=0,C.sibling=null,C}function u(C,w,b){return C.index=b,e?(b=C.alternate,b!==null?(b=b.index,b<w?(C.flags|=2,w):b):(C.flags|=2,w)):(C.flags|=1048576,w)}function d(C){return e&&C.alternate===null&&(C.flags|=2),C}function h(C,w,b,B){return w===null||w.tag!==6?(w=Rs(b,C.mode,B),w.return=C,w):(w=a(w,b),w.return=C,w)}function y(C,w,b,B){var ae=b.type;return ae===T?A(C,w,b.props.children,B,b.key):w!==null&&(w.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Ge&&Rc(ae)===w.type)?(B=a(w,b.props),B.ref=Ko(C,w,b),B.return=C,B):(B=Tl(b.type,b.key,b.props,null,C.mode,B),B.ref=Ko(C,w,b),B.return=C,B)}function R(C,w,b,B){return w===null||w.tag!==4||w.stateNode.containerInfo!==b.containerInfo||w.stateNode.implementation!==b.implementation?(w=zs(b,C.mode,B),w.return=C,w):(w=a(w,b.children||[]),w.return=C,w)}function A(C,w,b,B,ae){return w===null||w.tag!==7?(w=br(b,C.mode,B,ae),w.return=C,w):(w=a(w,b),w.return=C,w)}function j(C,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Rs(""+w,C.mode,b),w.return=C,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case me:return b=Tl(w.type,w.key,w.props,null,C.mode,b),b.ref=Ko(C,null,w),b.return=C,b;case Ae:return w=zs(w,C.mode,b),w.return=C,w;case Ge:var B=w._init;return j(C,B(w._payload),b)}if(ur(w)||ie(w))return w=br(w,C.mode,b,null),w.return=C,w;ol(C,w)}return null}function M(C,w,b,B){var ae=w!==null?w.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ae!==null?null:h(C,w,""+b,B);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case me:return b.key===ae?y(C,w,b,B):null;case Ae:return b.key===ae?R(C,w,b,B):null;case Ge:return ae=b._init,M(C,w,ae(b._payload),B)}if(ur(b)||ie(b))return ae!==null?null:A(C,w,b,B,null);ol(C,b)}return null}function G(C,w,b,B,ae){if(typeof B=="string"&&B!==""||typeof B=="number")return C=C.get(b)||null,h(w,C,""+B,ae);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case me:return C=C.get(B.key===null?b:B.key)||null,y(w,C,B,ae);case Ae:return C=C.get(B.key===null?b:B.key)||null,R(w,C,B,ae);case Ge:var ce=B._init;return G(C,w,b,ce(B._payload),ae)}if(ur(B)||ie(B))return C=C.get(b)||null,A(w,C,B,ae,null);ol(w,B)}return null}function te(C,w,b,B){for(var ae=null,ce=null,de=w,ve=w=0,mt=null;de!==null&&ve<b.length;ve++){de.index>ve?(mt=de,de=null):mt=de.sibling;var Me=M(C,de,b[ve],B);if(Me===null){de===null&&(de=mt);break}e&&de&&Me.alternate===null&&t(C,de),w=u(Me,w,ve),ce===null?ae=Me:ce.sibling=Me,ce=Me,de=mt}if(ve===b.length)return n(C,de),Je&&yr(C,ve),ae;if(de===null){for(;ve<b.length;ve++)de=j(C,b[ve],B),de!==null&&(w=u(de,w,ve),ce===null?ae=de:ce.sibling=de,ce=de);return Je&&yr(C,ve),ae}for(de=o(C,de);ve<b.length;ve++)mt=G(de,C,ve,b[ve],B),mt!==null&&(e&&mt.alternate!==null&&de.delete(mt.key===null?ve:mt.key),w=u(mt,w,ve),ce===null?ae=mt:ce.sibling=mt,ce=mt);return e&&de.forEach(function(er){return t(C,er)}),Je&&yr(C,ve),ae}function oe(C,w,b,B){var ae=ie(b);if(typeof ae!="function")throw Error(l(150));if(b=ae.call(b),b==null)throw Error(l(151));for(var ce=ae=null,de=w,ve=w=0,mt=null,Me=b.next();de!==null&&!Me.done;ve++,Me=b.next()){de.index>ve?(mt=de,de=null):mt=de.sibling;var er=M(C,de,Me.value,B);if(er===null){de===null&&(de=mt);break}e&&de&&er.alternate===null&&t(C,de),w=u(er,w,ve),ce===null?ae=er:ce.sibling=er,ce=er,de=mt}if(Me.done)return n(C,de),Je&&yr(C,ve),ae;if(de===null){for(;!Me.done;ve++,Me=b.next())Me=j(C,Me.value,B),Me!==null&&(w=u(Me,w,ve),ce===null?ae=Me:ce.sibling=Me,ce=Me);return Je&&yr(C,ve),ae}for(de=o(C,de);!Me.done;ve++,Me=b.next())Me=G(de,C,ve,Me.value,B),Me!==null&&(e&&Me.alternate!==null&&de.delete(Me.key===null?ve:Me.key),w=u(Me,w,ve),ce===null?ae=Me:ce.sibling=Me,ce=Me);return e&&de.forEach(function(Rh){return t(C,Rh)}),Je&&yr(C,ve),ae}function it(C,w,b,B){if(typeof b=="object"&&b!==null&&b.type===T&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case me:e:{for(var ae=b.key,ce=w;ce!==null;){if(ce.key===ae){if(ae=b.type,ae===T){if(ce.tag===7){n(C,ce.sibling),w=a(ce,b.props.children),w.return=C,C=w;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Ge&&Rc(ae)===ce.type){n(C,ce.sibling),w=a(ce,b.props),w.ref=Ko(C,ce,b),w.return=C,C=w;break e}n(C,ce);break}else t(C,ce);ce=ce.sibling}b.type===T?(w=br(b.props.children,C.mode,B,b.key),w.return=C,C=w):(B=Tl(b.type,b.key,b.props,null,C.mode,B),B.ref=Ko(C,w,b),B.return=C,C=B)}return d(C);case Ae:e:{for(ce=b.key;w!==null;){if(w.key===ce)if(w.tag===4&&w.stateNode.containerInfo===b.containerInfo&&w.stateNode.implementation===b.implementation){n(C,w.sibling),w=a(w,b.children||[]),w.return=C,C=w;break e}else{n(C,w);break}else t(C,w);w=w.sibling}w=zs(b,C.mode,B),w.return=C,C=w}return d(C);case Ge:return ce=b._init,it(C,w,ce(b._payload),B)}if(ur(b))return te(C,w,b,B);if(ie(b))return oe(C,w,b,B);ol(C,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,w!==null&&w.tag===6?(n(C,w.sibling),w=a(w,b),w.return=C,C=w):(n(C,w),w=Rs(b,C.mode,B),w.return=C,C=w),d(C)):n(C,w)}return it}var eo=zc(!0),Lc=zc(!1),il=Bn(null),ll=null,to=null,Fa=null;function Ua(){Fa=to=ll=null}function ja(e){var t=il.current;qe(il),e._currentValue=t}function Va(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function no(e,t){ll=e,Fa=to=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Rt=!0),e.firstContext=null)}function Qt(e){var t=e._currentValue;if(Fa!==e)if(e={context:e,memoizedValue:t,next:null},to===null){if(ll===null)throw Error(l(308));to=e,ll.dependencies={lanes:0,firstContext:e}}else to=to.next=e;return t}var xr=null;function Ba(e){xr===null?xr=[e]:xr.push(e)}function Nc(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,Ba(t)):(n.next=a.next,a.next=n),t.interleaved=n,_n(e,o)}function _n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,$e&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,_n(e,n)}return a=o.interleaved,a===null?(t.next=t,Ba(o)):(t.next=a.next,a.next=t),o.interleaved=t,_n(e,n)}function al(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,oa(e,n)}}function Dc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?a=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?a=u=t:u=u.next=t}else a=u=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sl(e,t,n,o){var a=e.updateQueue;Qn=!1;var u=a.firstBaseUpdate,d=a.lastBaseUpdate,h=a.shared.pending;if(h!==null){a.shared.pending=null;var y=h,R=y.next;y.next=null,d===null?u=R:d.next=R,d=y;var A=e.alternate;A!==null&&(A=A.updateQueue,h=A.lastBaseUpdate,h!==d&&(h===null?A.firstBaseUpdate=R:h.next=R,A.lastBaseUpdate=y))}if(u!==null){var j=a.baseState;d=0,A=R=y=null,h=u;do{var M=h.lane,G=h.eventTime;if((o&M)===M){A!==null&&(A=A.next={eventTime:G,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var te=e,oe=h;switch(M=t,G=n,oe.tag){case 1:if(te=oe.payload,typeof te=="function"){j=te.call(G,j,M);break e}j=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=oe.payload,M=typeof te=="function"?te.call(G,j,M):te,M==null)break e;j=Q({},j,M);break e;case 2:Qn=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,M=a.effects,M===null?a.effects=[h]:M.push(h))}else G={eventTime:G,lane:M,tag:h.tag,payload:h.payload,callback:h.callback,next:null},A===null?(R=A=G,y=j):A=A.next=G,d|=M;if(h=h.next,h===null){if(h=a.shared.pending,h===null)break;M=h,h=M.next,M.next=null,a.lastBaseUpdate=M,a.shared.pending=null}}while(!0);if(A===null&&(y=j),a.baseState=y,a.firstBaseUpdate=R,a.lastBaseUpdate=A,t=a.shared.interleaved,t!==null){a=t;do d|=a.lane,a=a.next;while(a!==t)}else u===null&&(a.shared.lanes=0);kr|=d,e.lanes=d,e.memoizedState=j}}function Oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(l(191,a));a.call(o)}}}var Go={},mn=Bn(Go),Yo=Bn(Go),Xo=Bn(Go);function wr(e){if(e===Go)throw Error(l(174));return e}function Wa(e,t){switch(Ke(Xo,t),Ke(Yo,e),Ke(mn,Go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cr(t,e)}qe(mn),Ke(mn,t)}function ro(){qe(mn),qe(Yo),qe(Xo)}function Mc(e){wr(Xo.current);var t=wr(mn.current),n=cr(t,e.type);t!==n&&(Ke(Yo,e),Ke(mn,n))}function Qa(e){Yo.current===e&&(qe(mn),qe(Yo))}var et=Bn(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ka=[];function Ga(){for(var e=0;e<Ka.length;e++)Ka[e]._workInProgressVersionPrimary=null;Ka.length=0}var cl=re.ReactCurrentDispatcher,Ya=re.ReactCurrentBatchConfig,Sr=0,tt=null,ut=null,ft=null,dl=!1,qo=!1,Jo=0,qm=0;function St(){throw Error(l(321))}function Xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jt(e[n],t[n]))return!1;return!0}function qa(e,t,n,o,a,u){if(Sr=u,tt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,cl.current=e===null||e.memoizedState===null?th:nh,e=n(o,a),qo){u=0;do{if(qo=!1,Jo=0,25<=u)throw Error(l(301));u+=1,ft=ut=null,t.updateQueue=null,cl.current=rh,e=n(o,a)}while(qo)}if(cl.current=ml,t=ut!==null&&ut.next!==null,Sr=0,ft=ut=tt=null,dl=!1,t)throw Error(l(300));return e}function Ja(){var e=Jo!==0;return Jo=0,e}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?tt.memoizedState=ft=e:ft=ft.next=e,ft}function Kt(){if(ut===null){var e=tt.alternate;e=e!==null?e.memoizedState:null}else e=ut.next;var t=ft===null?tt.memoizedState:ft.next;if(t!==null)ft=t,ut=e;else{if(e===null)throw Error(l(310));ut=e,e={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},ft===null?tt.memoizedState=ft=e:ft=ft.next=e}return ft}function Zo(e,t){return typeof t=="function"?t(e):t}function Za(e){var t=Kt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=ut,a=o.baseQueue,u=n.pending;if(u!==null){if(a!==null){var d=a.next;a.next=u.next,u.next=d}o.baseQueue=a=u,n.pending=null}if(a!==null){u=a.next,o=o.baseState;var h=d=null,y=null,R=u;do{var A=R.lane;if((Sr&A)===A)y!==null&&(y=y.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),o=R.hasEagerState?R.eagerState:e(o,R.action);else{var j={lane:A,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};y===null?(h=y=j,d=o):y=y.next=j,tt.lanes|=A,kr|=A}R=R.next}while(R!==null&&R!==u);y===null?d=o:y.next=h,Jt(o,t.memoizedState)||(Rt=!0),t.memoizedState=o,t.baseState=d,t.baseQueue=y,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do u=a.lane,tt.lanes|=u,kr|=u,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function es(e){var t=Kt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,u=t.memoizedState;if(a!==null){n.pending=null;var d=a=a.next;do u=e(u,d.action),d=d.next;while(d!==a);Jt(u,t.memoizedState)||(Rt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,o]}function Ac(){}function Ic(e,t){var n=tt,o=Kt(),a=t(),u=!Jt(o.memoizedState,a);if(u&&(o.memoizedState=a,Rt=!0),o=o.queue,ts(jc.bind(null,n,o,e),[e]),o.getSnapshot!==t||u||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,ei(9,Uc.bind(null,n,o,a,t),void 0,null),pt===null)throw Error(l(349));Sr&30||Fc(n,t,a)}return a}function Fc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=tt.updateQueue,t===null?(t={lastEffect:null,stores:null},tt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uc(e,t,n,o){t.value=n,t.getSnapshot=o,Vc(t)&&Bc(e)}function jc(e,t,n){return n(function(){Vc(t)&&Bc(e)})}function Vc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jt(e,n)}catch{return!0}}function Bc(e){var t=_n(e,1);t!==null&&rn(t,e,1,-1)}function Hc(e){var t=hn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:e},t.queue=e,e=e.dispatch=eh.bind(null,tt,e),[t.memoizedState,e]}function ei(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=tt.updateQueue,t===null?(t={lastEffect:null,stores:null},tt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Wc(){return Kt().memoizedState}function fl(e,t,n,o){var a=hn();tt.flags|=e,a.memoizedState=ei(1|t,n,void 0,o===void 0?null:o)}function pl(e,t,n,o){var a=Kt();o=o===void 0?null:o;var u=void 0;if(ut!==null){var d=ut.memoizedState;if(u=d.destroy,o!==null&&Xa(o,d.deps)){a.memoizedState=ei(t,n,u,o);return}}tt.flags|=e,a.memoizedState=ei(1|t,n,u,o)}function Qc(e,t){return fl(8390656,8,e,t)}function ts(e,t){return pl(2048,8,e,t)}function Kc(e,t){return pl(4,2,e,t)}function Gc(e,t){return pl(4,4,e,t)}function Yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xc(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,Yc.bind(null,t,e),n)}function ns(){}function qc(e,t){var n=Kt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Xa(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Jc(e,t){var n=Kt();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Xa(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Zc(e,t,n){return Sr&21?(Jt(n,t)||(n=Ru(),tt.lanes|=n,kr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Rt=!0),e.memoizedState=n)}function Jm(e,t){var n=Be;Be=n!==0&&4>n?n:4,e(!0);var o=Ya.transition;Ya.transition={};try{e(!1),t()}finally{Be=n,Ya.transition=o}}function ed(){return Kt().memoizedState}function Zm(e,t,n){var o=qn(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},td(e))nd(t,n);else if(n=Nc(e,t,n,o),n!==null){var a=Ct();rn(n,e,o,a),rd(n,t,o)}}function eh(e,t,n){var o=qn(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(td(e))nd(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,h=u(d,n);if(a.hasEagerState=!0,a.eagerState=h,Jt(h,d)){var y=t.interleaved;y===null?(a.next=a,Ba(t)):(a.next=y.next,y.next=a),t.interleaved=a;return}}catch{}finally{}n=Nc(e,t,a,o),n!==null&&(a=Ct(),rn(n,e,o,a),rd(n,t,o))}}function td(e){var t=e.alternate;return e===tt||t!==null&&t===tt}function nd(e,t){qo=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rd(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,oa(e,n)}}var ml={readContext:Qt,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},th={readContext:Qt,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:Qt,useEffect:Qc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fl(4194308,4,Yc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fl(4194308,4,e,t)},useInsertionEffect:function(e,t){return fl(4,2,e,t)},useMemo:function(e,t){var n=hn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=hn();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Zm.bind(null,tt,e),[o.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:Hc,useDebugValue:ns,useDeferredValue:function(e){return hn().memoizedState=e},useTransition:function(){var e=Hc(!1),t=e[0];return e=Jm.bind(null,e[1]),hn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=tt,a=hn();if(Je){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),pt===null)throw Error(l(349));Sr&30||Fc(o,t,n)}a.memoizedState=n;var u={value:n,getSnapshot:t};return a.queue=u,Qc(jc.bind(null,o,u,e),[e]),o.flags|=2048,ei(9,Uc.bind(null,o,u,n,t),void 0,null),n},useId:function(){var e=hn(),t=pt.identifierPrefix;if(Je){var n=En,o=kn;n=(o&~(1<<32-Oe(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nh={readContext:Qt,useCallback:qc,useContext:Qt,useEffect:ts,useImperativeHandle:Xc,useInsertionEffect:Kc,useLayoutEffect:Gc,useMemo:Jc,useReducer:Za,useRef:Wc,useState:function(){return Za(Zo)},useDebugValue:ns,useDeferredValue:function(e){var t=Kt();return Zc(t,ut.memoizedState,e)},useTransition:function(){var e=Za(Zo)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:Ac,useSyncExternalStore:Ic,useId:ed,unstable_isNewReconciler:!1},rh={readContext:Qt,useCallback:qc,useContext:Qt,useEffect:ts,useImperativeHandle:Xc,useInsertionEffect:Kc,useLayoutEffect:Gc,useMemo:Jc,useReducer:es,useRef:Wc,useState:function(){return es(Zo)},useDebugValue:ns,useDeferredValue:function(e){var t=Kt();return ut===null?t.memoizedState=e:Zc(t,ut.memoizedState,e)},useTransition:function(){var e=es(Zo)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:Ac,useSyncExternalStore:Ic,useId:ed,unstable_isNewReconciler:!1};function en(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rs(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hl={isMounted:function(e){return(e=e._reactInternals)?ne(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Ct(),a=qn(e),u=Cn(o,a);u.payload=t,n!=null&&(u.callback=n),t=Kn(e,u,a),t!==null&&(rn(t,e,a,o),al(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Ct(),a=qn(e),u=Cn(o,a);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=Kn(e,u,a),t!==null&&(rn(t,e,a,o),al(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),o=qn(e),a=Cn(n,o);a.tag=2,t!=null&&(a.callback=t),t=Kn(e,a,o),t!==null&&(rn(t,e,o,n),al(t,e,o))}};function od(e,t,n,o,a,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,d):t.prototype&&t.prototype.isPureReactComponent?!Uo(n,o)||!Uo(a,u):!0}function id(e,t,n){var o=!1,a=Hn,u=t.contextType;return typeof u=="object"&&u!==null?u=Qt(u):(a=Tt(t)?vr:wt.current,o=t.contextTypes,u=(o=o!=null)?Xr(e,a):Hn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=u),t}function ld(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function os(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ha(e);var u=t.contextType;typeof u=="object"&&u!==null?a.context=Qt(u):(u=Tt(t)?vr:wt.current,a.context=Xr(e,u)),a.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(rs(e,t,u,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&hl.enqueueReplaceState(a,a.state,null),sl(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function oo(e,t){try{var n="",o=t;do n+=he(o),o=o.return;while(o);var a=n}catch(u){a=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:a,digest:null}}function is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var oh=typeof WeakMap=="function"?WeakMap:Map;function ad(e,t,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){kl||(kl=!0,Ss=o),ls(e,t)},n}function sd(e,t,n){n=Cn(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){ls(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){ls(e,t),typeof o!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function ud(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new oh;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=yh.bind(null,e,t,n),t.then(e,e))}function cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dd(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Cn(-1,1),t.tag=2,Kn(n,t,1))),n.lanes|=1),e)}var ih=re.ReactCurrentOwner,Rt=!1;function _t(e,t,n,o){t.child=e===null?Lc(t,null,n,o):eo(t,e.child,n,o)}function fd(e,t,n,o,a){n=n.render;var u=t.ref;return no(t,a),o=qa(e,t,n,o,u,a),n=Ja(),e!==null&&!Rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,bn(e,t,a)):(Je&&n&&Da(t),t.flags|=1,_t(e,t,o,a),t.child)}function pd(e,t,n,o,a){if(e===null){var u=n.type;return typeof u=="function"&&!Ts(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,md(e,t,u,o,a)):(e=Tl(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!(e.lanes&a)){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(d,o)&&e.ref===t.ref)return bn(e,t,a)}return t.flags|=1,e=Zn(u,o),e.ref=t.ref,e.return=t,t.child=e}function md(e,t,n,o,a){if(e!==null){var u=e.memoizedProps;if(Uo(u,o)&&e.ref===t.ref)if(Rt=!1,t.pendingProps=o=u,(e.lanes&a)!==0)e.flags&131072&&(Rt=!0);else return t.lanes=e.lanes,bn(e,t,a)}return as(e,t,n,o,a)}function hd(e,t,n){var o=t.pendingProps,a=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(lo,Ft),Ft|=n;else{if(!(n&1073741824))return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ke(lo,Ft),Ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:n,Ke(lo,Ft),Ft|=o}else u!==null?(o=u.baseLanes|n,t.memoizedState=null):o=n,Ke(lo,Ft),Ft|=o;return _t(e,t,a,n),t.child}function vd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function as(e,t,n,o,a){var u=Tt(n)?vr:wt.current;return u=Xr(t,u),no(t,a),n=qa(e,t,n,o,u,a),o=Ja(),e!==null&&!Rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,bn(e,t,a)):(Je&&o&&Da(t),t.flags|=1,_t(e,t,n,a),t.child)}function gd(e,t,n,o,a){if(Tt(n)){var u=!0;Zi(t)}else u=!1;if(no(t,a),t.stateNode===null)gl(e,t),id(t,n,o),os(t,n,o,a),o=!0;else if(e===null){var d=t.stateNode,h=t.memoizedProps;d.props=h;var y=d.context,R=n.contextType;typeof R=="object"&&R!==null?R=Qt(R):(R=Tt(n)?vr:wt.current,R=Xr(t,R));var A=n.getDerivedStateFromProps,j=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function";j||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==o||y!==R)&&ld(t,d,o,R),Qn=!1;var M=t.memoizedState;d.state=M,sl(t,o,d,a),y=t.memoizedState,h!==o||M!==y||Pt.current||Qn?(typeof A=="function"&&(rs(t,n,A,o),y=t.memoizedState),(h=Qn||od(t,n,h,o,M,y,R))?(j||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=y),d.props=o,d.state=y,d.context=R,o=h):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{d=t.stateNode,$c(e,t),h=t.memoizedProps,R=t.type===t.elementType?h:en(t.type,h),d.props=R,j=t.pendingProps,M=d.context,y=n.contextType,typeof y=="object"&&y!==null?y=Qt(y):(y=Tt(n)?vr:wt.current,y=Xr(t,y));var G=n.getDerivedStateFromProps;(A=typeof G=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==j||M!==y)&&ld(t,d,o,y),Qn=!1,M=t.memoizedState,d.state=M,sl(t,o,d,a);var te=t.memoizedState;h!==j||M!==te||Pt.current||Qn?(typeof G=="function"&&(rs(t,n,G,o),te=t.memoizedState),(R=Qn||od(t,n,R,o,M,te,y)||!1)?(A||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,te,y),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,te,y)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=te),d.props=o,d.state=te,d.context=y,o=R):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),o=!1)}return ss(e,t,n,o,u,a)}function ss(e,t,n,o,a,u){vd(e,t);var d=(t.flags&128)!==0;if(!o&&!d)return a&&kc(t,n,!1),bn(e,t,u);o=t.stateNode,ih.current=t;var h=d&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&d?(t.child=eo(t,e.child,null,u),t.child=eo(t,null,h,u)):_t(e,t,h,u),t.memoizedState=o.state,a&&kc(t,n,!0),t.child}function yd(e){var t=e.stateNode;t.pendingContext?wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wc(e,t.context,!1),Wa(e,t.containerInfo)}function xd(e,t,n,o,a){return Zr(),Ia(a),t.flags|=256,_t(e,t,n,o),t.child}var us={dehydrated:null,treeContext:null,retryLane:0};function cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function wd(e,t,n){var o=t.pendingProps,a=et.current,u=!1,d=(t.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(a&2)!==0),h?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ke(et,a&1),e===null)return Aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(d=o.children,e=o.fallback,u?(o=t.mode,u=t.child,d={mode:"hidden",children:d},!(o&1)&&u!==null?(u.childLanes=0,u.pendingProps=d):u=Rl(d,o,0,null),e=br(e,o,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=cs(n),t.memoizedState=us,e):ds(t,d));if(a=e.memoizedState,a!==null&&(h=a.dehydrated,h!==null))return lh(e,t,d,o,h,a,n);if(u){u=o.fallback,d=t.mode,a=e.child,h=a.sibling;var y={mode:"hidden",children:o.children};return!(d&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=y,t.deletions=null):(o=Zn(a,y),o.subtreeFlags=a.subtreeFlags&14680064),h!==null?u=Zn(h,u):(u=br(u,d,n,null),u.flags|=2),u.return=t,o.return=t,o.sibling=u,t.child=o,o=u,u=t.child,d=e.child.memoizedState,d=d===null?cs(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},u.memoizedState=d,u.childLanes=e.childLanes&~n,t.memoizedState=us,o}return u=e.child,e=u.sibling,o=Zn(u,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function ds(e,t){return t=Rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vl(e,t,n,o){return o!==null&&Ia(o),eo(t,e.child,null,n),e=ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lh(e,t,n,o,a,u,d){if(n)return t.flags&256?(t.flags&=-257,o=is(Error(l(422))),vl(e,t,d,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=o.fallback,a=t.mode,o=Rl({mode:"visible",children:o.children},a,0,null),u=br(u,a,d,null),u.flags|=2,o.return=t,u.return=t,o.sibling=u,t.child=o,t.mode&1&&eo(t,e.child,null,d),t.child.memoizedState=cs(d),t.memoizedState=us,u);if(!(t.mode&1))return vl(e,t,d,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var h=o.dgst;return o=h,u=Error(l(419)),o=is(u,o,void 0),vl(e,t,d,o)}if(h=(d&e.childLanes)!==0,Rt||h){if(o=pt,o!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|d)?0:a,a!==0&&a!==u.retryLane&&(u.retryLane=a,_n(e,a),rn(o,e,a,-1))}return Ps(),o=is(Error(l(421))),vl(e,t,d,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=xh.bind(null,e),a._reactRetry=t,null):(e=u.treeContext,It=Vn(a.nextSibling),At=t,Je=!0,Zt=null,e!==null&&(Ht[Wt++]=kn,Ht[Wt++]=En,Ht[Wt++]=gr,kn=e.id,En=e.overflow,gr=t),t=ds(t,o.children),t.flags|=4096,t)}function Sd(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Va(e.return,t,n)}function fs(e,t,n,o,a){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=a)}function kd(e,t,n){var o=t.pendingProps,a=o.revealOrder,u=o.tail;if(_t(e,t,o.children,n),o=et.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,n,t);else if(e.tag===19)Sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ke(et,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ul(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),fs(t,!1,a,n,u);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ul(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}fs(t,!0,n,null,u);break;case"together":fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ah(e,t,n){switch(t.tag){case 3:yd(t),Zr();break;case 5:Mc(t);break;case 1:Tt(t.type)&&Zi(t);break;case 4:Wa(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;Ke(il,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ke(et,et.current&1),t.flags|=128,null):n&t.child.childLanes?wd(e,t,n):(Ke(et,et.current&1),e=bn(e,t,n),e!==null?e.sibling:null);Ke(et,et.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return kd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ke(et,et.current),o)break;return null;case 22:case 23:return t.lanes=0,hd(e,t,n)}return bn(e,t,n)}var Ed,ps,_d,Cd;Ed=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ps=function(){},_d=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,wr(mn.current);var u=null;switch(n){case"input":a=Dt(e,a),o=Dt(e,o),u=[];break;case"select":a=Q({},a,{value:void 0}),o=Q({},o,{value:void 0}),u=[];break;case"textarea":a=So(e,a),o=So(e,o),u=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Xi)}Ar(n,o);var d;n=null;for(R in a)if(!o.hasOwnProperty(R)&&a.hasOwnProperty(R)&&a[R]!=null)if(R==="style"){var h=a[R];for(d in h)h.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(c.hasOwnProperty(R)?u||(u=[]):(u=u||[]).push(R,null));for(R in o){var y=o[R];if(h=a!=null?a[R]:void 0,o.hasOwnProperty(R)&&y!==h&&(y!=null||h!=null))if(R==="style")if(h){for(d in h)!h.hasOwnProperty(d)||y&&y.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in y)y.hasOwnProperty(d)&&h[d]!==y[d]&&(n||(n={}),n[d]=y[d])}else n||(u||(u=[]),u.push(R,n)),n=y;else R==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,h=h?h.__html:void 0,y!=null&&h!==y&&(u=u||[]).push(R,y)):R==="children"?typeof y!="string"&&typeof y!="number"||(u=u||[]).push(R,""+y):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(c.hasOwnProperty(R)?(y!=null&&R==="onScroll"&&Xe("scroll",e),u||h===y||(u=[])):(u=u||[]).push(R,y))}n&&(u=u||[]).push("style",n);var R=u;(t.updateQueue=R)&&(t.flags|=4)}},Cd=function(e,t,n,o){n!==o&&(t.flags|=4)};function ti(e,t){if(!Je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function kt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function sh(e,t,n){var o=t.pendingProps;switch(Oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(t),null;case 1:return Tt(t.type)&&Ji(),kt(t),null;case 3:return o=t.stateNode,ro(),qe(Pt),qe(wt),Ga(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(rl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zt!==null&&(_s(Zt),Zt=null))),ps(e,t),kt(t),null;case 5:Qa(t);var a=wr(Xo.current);if(n=t.type,e!==null&&t.stateNode!=null)_d(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return kt(t),null}if(e=wr(mn.current),rl(t)){o=t.stateNode,n=t.type;var u=t.memoizedProps;switch(o[pn]=t,o[Wo]=u,e=(t.mode&1)!==0,n){case"dialog":Xe("cancel",o),Xe("close",o);break;case"iframe":case"object":case"embed":Xe("load",o);break;case"video":case"audio":for(a=0;a<Vo.length;a++)Xe(Vo[a],o);break;case"source":Xe("error",o);break;case"img":case"image":case"link":Xe("error",o),Xe("load",o);break;case"details":Xe("toggle",o);break;case"input":Ci(o,u),Xe("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},Xe("invalid",o);break;case"textarea":Pi(o,u),Xe("invalid",o)}Ar(n,u),a=null;for(var d in u)if(u.hasOwnProperty(d)){var h=u[d];d==="children"?typeof h=="string"?o.textContent!==h&&(u.suppressHydrationWarning!==!0&&Yi(o.textContent,h,e),a=["children",h]):typeof h=="number"&&o.textContent!==""+h&&(u.suppressHydrationWarning!==!0&&Yi(o.textContent,h,e),a=["children",""+h]):c.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&Xe("scroll",o)}switch(n){case"input":nt(o),bi(o,u,!0);break;case"textarea":nt(o),Ln(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=Xi)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ko(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(n,{is:o.is}):(e=d.createElement(n),n==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,n),e[pn]=t,e[Wo]=o,Ed(e,t,!1,!1),t.stateNode=e;e:{switch(d=_o(n,o),n){case"dialog":Xe("cancel",e),Xe("close",e),a=o;break;case"iframe":case"object":case"embed":Xe("load",e),a=o;break;case"video":case"audio":for(a=0;a<Vo.length;a++)Xe(Vo[a],e);a=o;break;case"source":Xe("error",e),a=o;break;case"img":case"image":case"link":Xe("error",e),Xe("load",e),a=o;break;case"details":Xe("toggle",e),a=o;break;case"input":Ci(e,o),a=Dt(e,o),Xe("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=Q({},o,{value:void 0}),Xe("invalid",e);break;case"textarea":Pi(e,o),a=So(e,o),Xe("invalid",e);break;default:a=o}Ar(n,a),h=a;for(u in h)if(h.hasOwnProperty(u)){var y=h[u];u==="style"?Eo(e,y):u==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Bt(e,y)):u==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&Nn(e,y):typeof y=="number"&&Nn(e,""+y):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?y!=null&&u==="onScroll"&&Xe("scroll",e):y!=null&&W(e,u,y,d))}switch(n){case"input":nt(e),bi(e,o,!1);break;case"textarea":nt(e),Ln(e);break;case"option":o.value!=null&&e.setAttribute("value",""+L(o.value));break;case"select":e.multiple=!!o.multiple,u=o.value,u!=null?zn(e,!!o.multiple,u,!1):o.defaultValue!=null&&zn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Xi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return kt(t),null;case 6:if(e&&t.stateNode!=null)Cd(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(n=wr(Xo.current),wr(mn.current),rl(t)){if(o=t.stateNode,n=t.memoizedProps,o[pn]=t,(u=o.nodeValue!==n)&&(e=At,e!==null))switch(e.tag){case 3:Yi(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(o.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[pn]=t,t.stateNode=o}return kt(t),null;case 13:if(qe(et),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Je&&It!==null&&t.mode&1&&!(t.flags&128))Tc(),Zr(),t.flags|=98560,u=!1;else if(u=rl(t),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[pn]=t}else Zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;kt(t),u=!1}else Zt!==null&&(_s(Zt),Zt=null),u=!0;if(!u)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||et.current&1?ct===0&&(ct=3):Ps())),t.updateQueue!==null&&(t.flags|=4),kt(t),null);case 4:return ro(),ps(e,t),e===null&&Bo(t.stateNode.containerInfo),kt(t),null;case 10:return ja(t.type._context),kt(t),null;case 17:return Tt(t.type)&&Ji(),kt(t),null;case 19:if(qe(et),u=t.memoizedState,u===null)return kt(t),null;if(o=(t.flags&128)!==0,d=u.rendering,d===null)if(o)ti(u,!1);else{if(ct!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(d=ul(e),d!==null){for(t.flags|=128,ti(u,!1),o=d.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)u=n,e=o,u.flags&=14680066,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ke(et,et.current&1|2),t.child}e=e.sibling}u.tail!==null&&De()>ao&&(t.flags|=128,o=!0,ti(u,!1),t.lanes=4194304)}else{if(!o)if(e=ul(d),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ti(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Je)return kt(t),null}else 2*De()-u.renderingStartTime>ao&&n!==1073741824&&(t.flags|=128,o=!0,ti(u,!1),t.lanes=4194304);u.isBackwards?(d.sibling=t.child,t.child=d):(n=u.last,n!==null?n.sibling=d:t.child=d,u.last=d)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=De(),t.sibling=null,n=et.current,Ke(et,o?n&1|2:n&1),t):(kt(t),null);case 22:case 23:return bs(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Ft&1073741824&&(kt(t),t.subtreeFlags&6&&(t.flags|=8192)):kt(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function uh(e,t){switch(Oa(t),t.tag){case 1:return Tt(t.type)&&Ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ro(),qe(Pt),qe(wt),Ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qa(t),null;case 13:if(qe(et),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return qe(et),null;case 4:return ro(),null;case 10:return ja(t.type._context),null;case 22:case 23:return bs(),null;case 24:return null;default:return null}}var yl=!1,Et=!1,ch=typeof WeakSet=="function"?WeakSet:Set,q=null;function io(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){rt(e,t,o)}else n.current=null}function ms(e,t,n){try{n()}catch(o){rt(e,t,o)}}var bd=!1;function dh(e,t){if(ba=Ii,e=oc(),ya(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,h=-1,y=-1,R=0,A=0,j=e,M=null;t:for(;;){for(var G;j!==n||a!==0&&j.nodeType!==3||(h=d+a),j!==u||o!==0&&j.nodeType!==3||(y=d+o),j.nodeType===3&&(d+=j.nodeValue.length),(G=j.firstChild)!==null;)M=j,j=G;for(;;){if(j===e)break t;if(M===n&&++R===a&&(h=d),M===u&&++A===o&&(y=d),(G=j.nextSibling)!==null)break;j=M,M=j.parentNode}j=G}n=h===-1||y===-1?null:{start:h,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pa={focusedElem:e,selectionRange:n},Ii=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var te=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(te!==null){var oe=te.memoizedProps,it=te.memoizedState,C=t.stateNode,w=C.getSnapshotBeforeUpdate(t.elementType===t.type?oe:en(t.type,oe),it);C.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(B){rt(t,t.return,B)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return te=bd,bd=!1,te}function ni(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var u=a.destroy;a.destroy=void 0,u!==void 0&&ms(t,n,u)}a=a.next}while(a!==o)}}function xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pd(e){var t=e.alternate;t!==null&&(e.alternate=null,Pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pn],delete t[Wo],delete t[La],delete t[Km],delete t[Gm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Td(e){return e.tag===5||e.tag===3||e.tag===4}function Rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xi));else if(o!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}function gs(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}var yt=null,tn=!1;function Gn(e,t,n){for(n=n.child;n!==null;)zd(e,t,n),n=n.sibling}function zd(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 5:Et||io(n,t);case 6:var o=yt,a=tn;yt=null,Gn(e,t,n),yt=o,tn=a,yt!==null&&(tn?(e=yt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(tn?(e=yt,n=n.stateNode,e.nodeType===8?za(e.parentNode,n):e.nodeType===1&&za(e,n),Do(e)):za(yt,n.stateNode));break;case 4:o=yt,a=tn,yt=n.stateNode.containerInfo,tn=!0,Gn(e,t,n),yt=o,tn=a;break;case 0:case 11:case 14:case 15:if(!Et&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var u=a,d=u.destroy;u=u.tag,d!==void 0&&(u&2||u&4)&&ms(n,t,d),a=a.next}while(a!==o)}Gn(e,t,n);break;case 1:if(!Et&&(io(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(h){rt(n,t,h)}Gn(e,t,n);break;case 21:Gn(e,t,n);break;case 22:n.mode&1?(Et=(o=Et)||n.memoizedState!==null,Gn(e,t,n),Et=o):Gn(e,t,n);break;default:Gn(e,t,n)}}function Ld(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ch),t.forEach(function(o){var a=wh.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function nn(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var u=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 5:yt=h.stateNode,tn=!1;break e;case 3:yt=h.stateNode.containerInfo,tn=!0;break e;case 4:yt=h.stateNode.containerInfo,tn=!0;break e}h=h.return}if(yt===null)throw Error(l(160));zd(u,d,a),yt=null,tn=!1;var y=a.alternate;y!==null&&(y.return=null),a.return=null}catch(R){rt(a,t,R)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nd(t,e),t=t.sibling}function Nd(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(t,e),vn(e),o&4){try{ni(3,e,e.return),xl(3,e)}catch(oe){rt(e,e.return,oe)}try{ni(5,e,e.return)}catch(oe){rt(e,e.return,oe)}}break;case 1:nn(t,e),vn(e),o&512&&n!==null&&io(n,n.return);break;case 5:if(nn(t,e),vn(e),o&512&&n!==null&&io(n,n.return),e.flags&32){var a=e.stateNode;try{Nn(a,"")}catch(oe){rt(e,e.return,oe)}}if(o&4&&(a=e.stateNode,a!=null)){var u=e.memoizedProps,d=n!==null?n.memoizedProps:u,h=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{h==="input"&&u.type==="radio"&&u.name!=null&&an(a,u),_o(h,d);var R=_o(h,u);for(d=0;d<y.length;d+=2){var A=y[d],j=y[d+1];A==="style"?Eo(a,j):A==="dangerouslySetInnerHTML"?Bt(a,j):A==="children"?Nn(a,j):W(a,A,j,R)}switch(h){case"input":wo(a,u);break;case"textarea":sn(a,u);break;case"select":var M=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!u.multiple;var G=u.value;G!=null?zn(a,!!u.multiple,G,!1):M!==!!u.multiple&&(u.defaultValue!=null?zn(a,!!u.multiple,u.defaultValue,!0):zn(a,!!u.multiple,u.multiple?[]:"",!1))}a[Wo]=u}catch(oe){rt(e,e.return,oe)}}break;case 6:if(nn(t,e),vn(e),o&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,u=e.memoizedProps;try{a.nodeValue=u}catch(oe){rt(e,e.return,oe)}}break;case 3:if(nn(t,e),vn(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Do(t.containerInfo)}catch(oe){rt(e,e.return,oe)}break;case 4:nn(t,e),vn(e);break;case 13:nn(t,e),vn(e),a=e.child,a.flags&8192&&(u=a.memoizedState!==null,a.stateNode.isHidden=u,!u||a.alternate!==null&&a.alternate.memoizedState!==null||(ws=De())),o&4&&Ld(e);break;case 22:if(A=n!==null&&n.memoizedState!==null,e.mode&1?(Et=(R=Et)||A,nn(t,e),Et=R):nn(t,e),vn(e),o&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!A&&e.mode&1)for(q=e,A=e.child;A!==null;){for(j=q=A;q!==null;){switch(M=q,G=M.child,M.tag){case 0:case 11:case 14:case 15:ni(4,M,M.return);break;case 1:io(M,M.return);var te=M.stateNode;if(typeof te.componentWillUnmount=="function"){o=M,n=M.return;try{t=o,te.props=t.memoizedProps,te.state=t.memoizedState,te.componentWillUnmount()}catch(oe){rt(o,n,oe)}}break;case 5:io(M,M.return);break;case 22:if(M.memoizedState!==null){Od(j);continue}}G!==null?(G.return=M,q=G):Od(j)}A=A.sibling}e:for(A=null,j=e;;){if(j.tag===5){if(A===null){A=j;try{a=j.stateNode,R?(u=a.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(h=j.stateNode,y=j.memoizedProps.style,d=y!=null&&y.hasOwnProperty("display")?y.display:null,h.style.display=Xt("display",d))}catch(oe){rt(e,e.return,oe)}}}else if(j.tag===6){if(A===null)try{j.stateNode.nodeValue=R?"":j.memoizedProps}catch(oe){rt(e,e.return,oe)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;A===j&&(A=null),j=j.return}A===j&&(A=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:nn(t,e),vn(e),o&4&&Ld(e);break;case 21:break;default:nn(t,e),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Td(n)){var o=n;break e}n=n.return}throw Error(l(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Nn(a,""),o.flags&=-33);var u=Rd(e);gs(e,u,a);break;case 3:case 4:var d=o.stateNode.containerInfo,h=Rd(e);vs(e,h,d);break;default:throw Error(l(161))}}catch(y){rt(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fh(e,t,n){q=e,$d(e)}function $d(e,t,n){for(var o=(e.mode&1)!==0;q!==null;){var a=q,u=a.child;if(a.tag===22&&o){var d=a.memoizedState!==null||yl;if(!d){var h=a.alternate,y=h!==null&&h.memoizedState!==null||Et;h=yl;var R=Et;if(yl=d,(Et=y)&&!R)for(q=a;q!==null;)d=q,y=d.child,d.tag===22&&d.memoizedState!==null?Md(a):y!==null?(y.return=d,q=y):Md(a);for(;u!==null;)q=u,$d(u),u=u.sibling;q=a,yl=h,Et=R}Dd(e)}else a.subtreeFlags&8772&&u!==null?(u.return=a,q=u):Dd(e)}}function Dd(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Et||xl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Et)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:en(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Oc(t,u,o);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oc(t,d,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var R=t.alternate;if(R!==null){var A=R.memoizedState;if(A!==null){var j=A.dehydrated;j!==null&&Do(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Et||t.flags&512&&hs(t)}catch(M){rt(t,t.return,M)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function Od(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function Md(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xl(4,t)}catch(y){rt(t,n,y)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(y){rt(t,a,y)}}var u=t.return;try{hs(t)}catch(y){rt(t,u,y)}break;case 5:var d=t.return;try{hs(t)}catch(y){rt(t,d,y)}}}catch(y){rt(t,t.return,y)}if(t===e){q=null;break}var h=t.sibling;if(h!==null){h.return=t.return,q=h;break}q=t.return}}var ph=Math.ceil,wl=re.ReactCurrentDispatcher,ys=re.ReactCurrentOwner,Gt=re.ReactCurrentBatchConfig,$e=0,pt=null,lt=null,xt=0,Ft=0,lo=Bn(0),ct=0,ri=null,kr=0,Sl=0,xs=0,oi=null,zt=null,ws=0,ao=1/0,Pn=null,kl=!1,Ss=null,Yn=null,El=!1,Xn=null,_l=0,ii=0,ks=null,Cl=-1,bl=0;function Ct(){return $e&6?De():Cl!==-1?Cl:Cl=De()}function qn(e){return e.mode&1?$e&2&&xt!==0?xt&-xt:Xm.transition!==null?(bl===0&&(bl=Ru()),bl):(e=Be,e!==0||(e=window.event,e=e===void 0?16:Iu(e.type)),e):1}function rn(e,t,n,o){if(50<ii)throw ii=0,ks=null,Error(l(185));Ro(e,n,o),(!($e&2)||e!==pt)&&(e===pt&&(!($e&2)&&(Sl|=n),ct===4&&Jn(e,xt)),Lt(e,o),n===1&&$e===0&&!(t.mode&1)&&(ao=De()+500,el&&Wn()))}function Lt(e,t){var n=e.callbackNode;Xp(e,t);var o=Oi(e,e===pt?xt:0);if(o===0)n!==null&&gn(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&gn(n),t===1)e.tag===0?Ym(Id.bind(null,e)):Ec(Id.bind(null,e)),Wm(function(){!($e&6)&&Wn()}),n=null;else{switch(zu(o)){case 1:n=yn;break;case 4:n=fn;break;case 16:n=xn;break;case 536870912:n=Re;break;default:n=xn}n=Qd(n,Ad.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ad(e,t){if(Cl=-1,bl=0,$e&6)throw Error(l(327));var n=e.callbackNode;if(so()&&e.callbackNode!==n)return null;var o=Oi(e,e===pt?xt:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Pl(e,o);else{t=o;var a=$e;$e|=2;var u=Ud();(pt!==e||xt!==t)&&(Pn=null,ao=De()+500,_r(e,t));do try{vh();break}catch(h){Fd(e,h)}while(!0);Ua(),wl.current=u,$e=a,lt!==null?t=0:(pt=null,xt=0,t=ct)}if(t!==0){if(t===2&&(a=na(e),a!==0&&(o=a,t=Es(e,a))),t===1)throw n=ri,_r(e,0),Jn(e,o),Lt(e,De()),n;if(t===6)Jn(e,o);else{if(a=e.current.alternate,!(o&30)&&!mh(a)&&(t=Pl(e,o),t===2&&(u=na(e),u!==0&&(o=u,t=Es(e,u))),t===1))throw n=ri,_r(e,0),Jn(e,o),Lt(e,De()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:Cr(e,zt,Pn);break;case 3:if(Jn(e,o),(o&130023424)===o&&(t=ws+500-De(),10<t)){if(Oi(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){Ct(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ra(Cr.bind(null,e,zt,Pn),t);break}Cr(e,zt,Pn);break;case 4:if(Jn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var d=31-Oe(o);u=1<<d,d=t[d],d>a&&(a=d),o&=~u}if(o=a,o=De()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ph(o/1960))-o,10<o){e.timeoutHandle=Ra(Cr.bind(null,e,zt,Pn),o);break}Cr(e,zt,Pn);break;case 5:Cr(e,zt,Pn);break;default:throw Error(l(329))}}}return Lt(e,De()),e.callbackNode===n?Ad.bind(null,e):null}function Es(e,t){var n=oi;return e.current.memoizedState.isDehydrated&&(_r(e,t).flags|=256),e=Pl(e,t),e!==2&&(t=zt,zt=n,t!==null&&_s(t)),e}function _s(e){zt===null?zt=e:zt.push.apply(zt,e)}function mh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],u=a.getSnapshot;a=a.value;try{if(!Jt(u(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t){for(t&=~xs,t&=~Sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),o=1<<n;e[n]=-1,t&=~o}}function Id(e){if($e&6)throw Error(l(327));so();var t=Oi(e,0);if(!(t&1))return Lt(e,De()),null;var n=Pl(e,t);if(e.tag!==0&&n===2){var o=na(e);o!==0&&(t=o,n=Es(e,o))}if(n===1)throw n=ri,_r(e,0),Jn(e,t),Lt(e,De()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cr(e,zt,Pn),Lt(e,De()),null}function Cs(e,t){var n=$e;$e|=1;try{return e(t)}finally{$e=n,$e===0&&(ao=De()+500,el&&Wn())}}function Er(e){Xn!==null&&Xn.tag===0&&!($e&6)&&so();var t=$e;$e|=1;var n=Gt.transition,o=Be;try{if(Gt.transition=null,Be=1,e)return e()}finally{Be=o,Gt.transition=n,$e=t,!($e&6)&&Wn()}}function bs(){Ft=lo.current,qe(lo)}function _r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hm(n)),lt!==null)for(n=lt.return;n!==null;){var o=n;switch(Oa(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ji();break;case 3:ro(),qe(Pt),qe(wt),Ga();break;case 5:Qa(o);break;case 4:ro();break;case 13:qe(et);break;case 19:qe(et);break;case 10:ja(o.type._context);break;case 22:case 23:bs()}n=n.return}if(pt=e,lt=e=Zn(e.current,null),xt=Ft=t,ct=0,ri=null,xs=Sl=kr=0,zt=oi=null,xr!==null){for(t=0;t<xr.length;t++)if(n=xr[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,u=n.pending;if(u!==null){var d=u.next;u.next=a,o.next=d}n.pending=o}xr=null}return e}function Fd(e,t){do{var n=lt;try{if(Ua(),cl.current=ml,dl){for(var o=tt.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}dl=!1}if(Sr=0,ft=ut=tt=null,qo=!1,Jo=0,ys.current=null,n===null||n.return===null){ct=1,ri=t,lt=null;break}e:{var u=e,d=n.return,h=n,y=t;if(t=xt,h.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var R=y,A=h,j=A.tag;if(!(A.mode&1)&&(j===0||j===11||j===15)){var M=A.alternate;M?(A.updateQueue=M.updateQueue,A.memoizedState=M.memoizedState,A.lanes=M.lanes):(A.updateQueue=null,A.memoizedState=null)}var G=cd(d);if(G!==null){G.flags&=-257,dd(G,d,h,u,t),G.mode&1&&ud(u,R,t),t=G,y=R;var te=t.updateQueue;if(te===null){var oe=new Set;oe.add(y),t.updateQueue=oe}else te.add(y);break e}else{if(!(t&1)){ud(u,R,t),Ps();break e}y=Error(l(426))}}else if(Je&&h.mode&1){var it=cd(d);if(it!==null){!(it.flags&65536)&&(it.flags|=256),dd(it,d,h,u,t),Ia(oo(y,h));break e}}u=y=oo(y,h),ct!==4&&(ct=2),oi===null?oi=[u]:oi.push(u),u=d;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var C=ad(u,y,t);Dc(u,C);break e;case 1:h=y;var w=u.type,b=u.stateNode;if(!(u.flags&128)&&(typeof w.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Yn===null||!Yn.has(b)))){u.flags|=65536,t&=-t,u.lanes|=t;var B=sd(u,h,t);Dc(u,B);break e}}u=u.return}while(u!==null)}Vd(n)}catch(ae){t=ae,lt===n&&n!==null&&(lt=n=n.return);continue}break}while(!0)}function Ud(){var e=wl.current;return wl.current=ml,e===null?ml:e}function Ps(){(ct===0||ct===3||ct===2)&&(ct=4),pt===null||!(kr&268435455)&&!(Sl&268435455)||Jn(pt,xt)}function Pl(e,t){var n=$e;$e|=2;var o=Ud();(pt!==e||xt!==t)&&(Pn=null,_r(e,t));do try{hh();break}catch(a){Fd(e,a)}while(!0);if(Ua(),$e=n,wl.current=o,lt!==null)throw Error(l(261));return pt=null,xt=0,ct}function hh(){for(;lt!==null;)jd(lt)}function vh(){for(;lt!==null&&!pr();)jd(lt)}function jd(e){var t=Wd(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?Vd(e):lt=t,ys.current=null}function Vd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=uh(n,t),n!==null){n.flags&=32767,lt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ct=6,lt=null;return}}else if(n=sh(n,t,Ft),n!==null){lt=n;return}if(t=t.sibling,t!==null){lt=t;return}lt=t=e}while(t!==null);ct===0&&(ct=5)}function Cr(e,t,n){var o=Be,a=Gt.transition;try{Gt.transition=null,Be=1,gh(e,t,n,o)}finally{Gt.transition=a,Be=o}return null}function gh(e,t,n,o){do so();while(Xn!==null);if($e&6)throw Error(l(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(qp(e,u),e===pt&&(lt=pt=null,xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,Qd(xn,function(){return so(),null})),u=(n.flags&15990)!==0,n.subtreeFlags&15990||u){u=Gt.transition,Gt.transition=null;var d=Be;Be=1;var h=$e;$e|=4,ys.current=null,dh(e,n),Nd(n,e),Am(Pa),Ii=!!ba,Pa=ba=null,e.current=n,fh(n),qt(),$e=h,Be=d,Gt.transition=u}else e.current=n;if(El&&(El=!1,Xn=e,_l=a),u=e.pendingLanes,u===0&&(Yn=null),mr(n.stateNode),Lt(e,De()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(kl)throw kl=!1,e=Ss,Ss=null,e;return _l&1&&e.tag!==0&&so(),u=e.pendingLanes,u&1?e===ks?ii++:(ii=0,ks=e):ii=0,Wn(),null}function so(){if(Xn!==null){var e=zu(_l),t=Gt.transition,n=Be;try{if(Gt.transition=null,Be=16>e?16:e,Xn===null)var o=!1;else{if(e=Xn,Xn=null,_l=0,$e&6)throw Error(l(331));var a=$e;for($e|=4,q=e.current;q!==null;){var u=q,d=u.child;if(q.flags&16){var h=u.deletions;if(h!==null){for(var y=0;y<h.length;y++){var R=h[y];for(q=R;q!==null;){var A=q;switch(A.tag){case 0:case 11:case 15:ni(8,A,u)}var j=A.child;if(j!==null)j.return=A,q=j;else for(;q!==null;){A=q;var M=A.sibling,G=A.return;if(Pd(A),A===R){q=null;break}if(M!==null){M.return=G,q=M;break}q=G}}}var te=u.alternate;if(te!==null){var oe=te.child;if(oe!==null){te.child=null;do{var it=oe.sibling;oe.sibling=null,oe=it}while(oe!==null)}}q=u}}if(u.subtreeFlags&2064&&d!==null)d.return=u,q=d;else e:for(;q!==null;){if(u=q,u.flags&2048)switch(u.tag){case 0:case 11:case 15:ni(9,u,u.return)}var C=u.sibling;if(C!==null){C.return=u.return,q=C;break e}q=u.return}}var w=e.current;for(q=w;q!==null;){d=q;var b=d.child;if(d.subtreeFlags&2064&&b!==null)b.return=d,q=b;else e:for(d=w;q!==null;){if(h=q,h.flags&2048)try{switch(h.tag){case 0:case 11:case 15:xl(9,h)}}catch(ae){rt(h,h.return,ae)}if(h===d){q=null;break e}var B=h.sibling;if(B!==null){B.return=h.return,q=B;break e}q=h.return}}if($e=a,Wn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(We,e)}catch{}o=!0}return o}finally{Be=n,Gt.transition=t}}return!1}function Bd(e,t,n){t=oo(n,t),t=ad(e,t,1),e=Kn(e,t,1),t=Ct(),e!==null&&(Ro(e,1,t),Lt(e,t))}function rt(e,t,n){if(e.tag===3)Bd(e,e,n);else for(;t!==null;){if(t.tag===3){Bd(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Yn===null||!Yn.has(o))){e=oo(n,e),e=sd(t,e,1),t=Kn(t,e,1),e=Ct(),t!==null&&(Ro(t,1,e),Lt(t,e));break}}t=t.return}}function yh(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Ct(),e.pingedLanes|=e.suspendedLanes&n,pt===e&&(xt&n)===n&&(ct===4||ct===3&&(xt&130023424)===xt&&500>De()-ws?_r(e,0):xs|=n),Lt(e,t)}function Hd(e,t){t===0&&(e.mode&1?(t=Di,Di<<=1,!(Di&130023424)&&(Di=4194304)):t=1);var n=Ct();e=_n(e,t),e!==null&&(Ro(e,t,n),Lt(e,n))}function xh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hd(e,n)}function wh(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),Hd(e,n)}var Wd;Wd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pt.current)Rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Rt=!1,ah(e,t,n);Rt=!!(e.flags&131072)}else Rt=!1,Je&&t.flags&1048576&&_c(t,nl,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;gl(e,t),e=t.pendingProps;var a=Xr(t,wt.current);no(t,n),a=qa(null,t,o,e,a,n);var u=Ja();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Tt(o)?(u=!0,Zi(t)):u=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ha(t),a.updater=hl,t.stateNode=a,a._reactInternals=t,os(t,o,e,n),t=ss(null,t,o,!0,u,n)):(t.tag=0,Je&&u&&Da(t),_t(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(gl(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=kh(o),e=en(o,e),a){case 0:t=as(null,t,o,e,n);break e;case 1:t=gd(null,t,o,e,n);break e;case 11:t=fd(null,t,o,e,n);break e;case 14:t=pd(null,t,o,en(o.type,e),n);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:en(o,a),as(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:en(o,a),gd(e,t,o,a,n);case 3:e:{if(yd(t),e===null)throw Error(l(387));o=t.pendingProps,u=t.memoizedState,a=u.element,$c(e,t),sl(t,o,null,n);var d=t.memoizedState;if(o=d.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){a=oo(Error(l(423)),t),t=xd(e,t,o,n,a);break e}else if(o!==a){a=oo(Error(l(424)),t),t=xd(e,t,o,n,a);break e}else for(It=Vn(t.stateNode.containerInfo.firstChild),At=t,Je=!0,Zt=null,n=Lc(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zr(),o===a){t=bn(e,t,n);break e}_t(e,t,o,n)}t=t.child}return t;case 5:return Mc(t),e===null&&Aa(t),o=t.type,a=t.pendingProps,u=e!==null?e.memoizedProps:null,d=a.children,Ta(o,a)?d=null:u!==null&&Ta(o,u)&&(t.flags|=32),vd(e,t),_t(e,t,d,n),t.child;case 6:return e===null&&Aa(t),null;case 13:return wd(e,t,n);case 4:return Wa(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=eo(t,null,o,n):_t(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:en(o,a),fd(e,t,o,a,n);case 7:return _t(e,t,t.pendingProps,n),t.child;case 8:return _t(e,t,t.pendingProps.children,n),t.child;case 12:return _t(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,u=t.memoizedProps,d=a.value,Ke(il,o._currentValue),o._currentValue=d,u!==null)if(Jt(u.value,d)){if(u.children===a.children&&!Pt.current){t=bn(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){d=u.child;for(var y=h.firstContext;y!==null;){if(y.context===o){if(u.tag===1){y=Cn(-1,n&-n),y.tag=2;var R=u.updateQueue;if(R!==null){R=R.shared;var A=R.pending;A===null?y.next=y:(y.next=A.next,A.next=y),R.pending=y}}u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),Va(u.return,n,t),h.lanes|=n;break}y=y.next}}else if(u.tag===10)d=u.type===t.type?null:u.child;else if(u.tag===18){if(d=u.return,d===null)throw Error(l(341));d.lanes|=n,h=d.alternate,h!==null&&(h.lanes|=n),Va(d,n,t),d=u.sibling}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===t){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}_t(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,no(t,n),a=Qt(a),o=o(a),t.flags|=1,_t(e,t,o,n),t.child;case 14:return o=t.type,a=en(o,t.pendingProps),a=en(o.type,a),pd(e,t,o,a,n);case 15:return md(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:en(o,a),gl(e,t),t.tag=1,Tt(o)?(e=!0,Zi(t)):e=!1,no(t,n),id(t,o,a),os(t,o,a,n),ss(null,t,o,!0,e,n);case 19:return kd(e,t,n);case 22:return hd(e,t,n)}throw Error(l(156,t.tag))};function Qd(e,t){return Ye(e,t)}function Sh(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(e,t,n,o){return new Sh(e,t,n,o)}function Ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kh(e){if(typeof e=="function")return Ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===we)return 11;if(e===ze)return 14}return 2}function Zn(e,t){var n=e.alternate;return n===null?(n=Yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tl(e,t,n,o,a,u){var d=2;if(o=e,typeof e=="function")Ts(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case T:return br(n.children,a,u,t);case J:d=8,a|=8;break;case Se:return e=Yt(12,n,t,a|2),e.elementType=Se,e.lanes=u,e;case _e:return e=Yt(13,n,t,a),e.elementType=_e,e.lanes=u,e;case Ce:return e=Yt(19,n,t,a),e.elementType=Ce,e.lanes=u,e;case Ie:return Rl(n,a,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ue:d=10;break e;case Fe:d=9;break e;case we:d=11;break e;case ze:d=14;break e;case Ge:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=Yt(d,n,t,a),t.elementType=e,t.type=o,t.lanes=u,t}function br(e,t,n,o){return e=Yt(7,e,o,t),e.lanes=n,e}function Rl(e,t,n,o){return e=Yt(22,e,o,t),e.elementType=Ie,e.lanes=n,e.stateNode={isHidden:!1},e}function Rs(e,t,n){return e=Yt(6,e,null,t),e.lanes=n,e}function zs(e,t,n){return t=Yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eh(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ls(e,t,n,o,a,u,d,h,y){return e=new Eh(e,t,n,h,y),t===1?(t=1,u===!0&&(t|=8)):t=0,u=Yt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ha(u),e}function _h(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Kd(e){if(!e)return Hn;e=e._reactInternals;e:{if(ne(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(Tt(n))return Sc(e,n,t)}return t}function Gd(e,t,n,o,a,u,d,h,y){return e=Ls(n,o,!0,e,a,u,d,h,y),e.context=Kd(null),n=e.current,o=Ct(),a=qn(n),u=Cn(o,a),u.callback=t??null,Kn(n,u,a),e.current.lanes=a,Ro(e,a,o),Lt(e,o),e}function zl(e,t,n,o){var a=t.current,u=Ct(),d=qn(a);return n=Kd(n),t.context===null?t.context=n:t.pendingContext=n,t=Cn(u,d),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Kn(a,t,d),e!==null&&(rn(e,a,d,u),al(e,a,d)),d}function Ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ns(e,t){Yd(e,t),(e=e.alternate)&&Yd(e,t)}function Ch(){return null}var Xd=typeof reportError=="function"?reportError:function(e){console.error(e)};function $s(e){this._internalRoot=e}Nl.prototype.render=$s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));zl(e,t,null,null)},Nl.prototype.unmount=$s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Er(function(){zl(null,e,null,null)}),t[wn]=null}};function Nl(e){this._internalRoot=e}Nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=$u();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&Mu(e)}};function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qd(){}function bh(e,t,n,o,a){if(a){if(typeof o=="function"){var u=o;o=function(){var R=Ll(d);u.call(R)}}var d=Gd(t,o,e,0,null,!1,!1,"",qd);return e._reactRootContainer=d,e[wn]=d.current,Bo(e.nodeType===8?e.parentNode:e),Er(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var h=o;o=function(){var R=Ll(y);h.call(R)}}var y=Ls(e,0,!1,null,null,!1,!1,"",qd);return e._reactRootContainer=y,e[wn]=y.current,Bo(e.nodeType===8?e.parentNode:e),Er(function(){zl(t,y,n,o)}),y}function Dl(e,t,n,o,a){var u=n._reactRootContainer;if(u){var d=u;if(typeof a=="function"){var h=a;a=function(){var y=Ll(d);h.call(y)}}zl(t,d,e,a)}else d=bh(n,t,e,a,o);return Ll(d)}Lu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=To(t.pendingLanes);n!==0&&(oa(t,n|1),Lt(t,De()),!($e&6)&&(ao=De()+500,Wn()))}break;case 13:Er(function(){var o=_n(e,1);if(o!==null){var a=Ct();rn(o,e,1,a)}}),Ns(e,1)}},ia=function(e){if(e.tag===13){var t=_n(e,134217728);if(t!==null){var n=Ct();rn(t,e,134217728,n)}Ns(e,134217728)}},Nu=function(e){if(e.tag===13){var t=qn(e),n=_n(e,t);if(n!==null){var o=Ct();rn(n,e,t,o)}Ns(e,t)}},$u=function(){return Be},Du=function(e,t){var n=Be;try{return Be=e,t()}finally{Be=n}},Fr=function(e,t,n){switch(t){case"input":if(wo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=qi(o);if(!a)throw Error(l(90));Ne(o),wo(o,a)}}}break;case"textarea":sn(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}},bo=Cs,dr=Er;var Ph={usingClientEntryPoint:!1,Events:[Qo,Gr,qi,Co,zi,Cs]},li={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Th={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ve(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||Ch,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{We=Ol.inject(Th),gt=Ol}catch{}}return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ph,Nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ds(t))throw Error(l(200));return _h(e,t,null,n)},Nt.createRoot=function(e,t){if(!Ds(e))throw Error(l(299));var n=!1,o="",a=Xd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ls(e,1,!1,null,null,n,!1,o,a),e[wn]=t.current,Bo(e.nodeType===8?e.parentNode:e),new $s(t)},Nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Ve(t),e=e===null?null:e.stateNode,e},Nt.flushSync=function(e){return Er(e)},Nt.hydrate=function(e,t,n){if(!$l(t))throw Error(l(200));return Dl(null,e,t,!0,n)},Nt.hydrateRoot=function(e,t,n){if(!Ds(e))throw Error(l(405));var o=n!=null&&n.hydratedSources||null,a=!1,u="",d=Xd;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Gd(t,null,e,1,n??null,a,!1,u,d),e[wn]=t.current,Bo(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Nl(t)},Nt.render=function(e,t,n){if(!$l(t))throw Error(l(200));return Dl(null,e,t,!1,n)},Nt.unmountComponentAtNode=function(e){if(!$l(e))throw Error(l(40));return e._reactRootContainer?(Er(function(){Dl(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1},Nt.unstable_batchedUpdates=Cs,Nt.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!$l(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Dl(e,t,n,!1,o)},Nt.version="18.3.1-next-f1338f8080-20240426",Nt}var rf;function tp(){if(rf)return Ms.exports;rf=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Ms.exports=Oh(),Ms.exports}var of;function Mh(){if(of)return Ml;of=1;var i=tp();return Ml.createRoot=i.createRoot,Ml.hydrateRoot=i.hydrateRoot,Ml}var Ah=Mh(),uu=tp();const Ih=ep(uu),Fh=Zf({__proto__:null,default:Ih},[uu]);/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ze(){return Ze=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(i[s]=l[s])}return i},Ze.apply(this,arguments)}var at;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(at||(at={}));const lf="popstate";function Uh(i){i===void 0&&(i={});function r(s,c){let{pathname:f,search:p,hash:v}=s.location;return hi("",{pathname:f,search:p,hash:v},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function l(s,c){return typeof c=="string"?c:wi(c)}return Vh(r,l,null,i)}function Te(i,r){if(i===!1||i===null||typeof i>"u")throw new Error(r)}function vo(i,r){if(!i){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function jh(){return Math.random().toString(36).substr(2,8)}function af(i,r){return{usr:i.state,key:i.key,idx:r}}function hi(i,r,l,s){return l===void 0&&(l=null),Ze({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof r=="string"?lr(r):r,{state:l,key:r&&r.key||s||jh()})}function wi(i){let{pathname:r="/",search:l="",hash:s=""}=i;return l&&l!=="?"&&(r+=l.charAt(0)==="?"?l:"?"+l),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function lr(i){let r={};if(i){let l=i.indexOf("#");l>=0&&(r.hash=i.substr(l),i=i.substr(0,l));let s=i.indexOf("?");s>=0&&(r.search=i.substr(s),i=i.substr(0,s)),i&&(r.pathname=i)}return r}function Vh(i,r,l,s){s===void 0&&(s={});let{window:c=document.defaultView,v5Compat:f=!1}=s,p=c.history,v=at.Pop,m=null,S=k();S==null&&(S=0,p.replaceState(Ze({},p.state,{idx:S}),""));function k(){return(p.state||{idx:null}).idx}function x(){v=at.Pop;let V=k(),ye=V==null?null:V-S;S=V,m&&m({action:v,location:F.location,delta:ye})}function P(V,ye){v=at.Push;let X=hi(F.location,V,ye);S=k()+1;let W=af(X,S),re=F.createHref(X);try{p.pushState(W,"",re)}catch(me){if(me instanceof DOMException&&me.name==="DataCloneError")throw me;c.location.assign(re)}f&&m&&m({action:v,location:F.location,delta:1})}function N(V,ye){v=at.Replace;let X=hi(F.location,V,ye);S=k();let W=af(X,S),re=F.createHref(X);p.replaceState(W,"",re),f&&m&&m({action:v,location:F.location,delta:0})}function H(V){let ye=c.location.origin!=="null"?c.location.origin:c.location.href,X=typeof V=="string"?V:wi(V);return X=X.replace(/ $/,"%20"),Te(ye,"No window.location.(origin|href) available to create URL for href: "+X),new URL(X,ye)}let F={get action(){return v},get location(){return i(c,p)},listen(V){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(lf,x),m=V,()=>{c.removeEventListener(lf,x),m=null}},createHref(V){return r(c,V)},createURL:H,encodeLocation(V){let ye=H(V);return{pathname:ye.pathname,search:ye.search,hash:ye.hash}},push:P,replace:N,go(V){return p.go(V)}};return F}var He;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(He||(He={}));const Bh=new Set(["lazy","caseSensitive","path","id","index","children"]);function Hh(i){return i.index===!0}function jl(i,r,l,s){return l===void 0&&(l=[]),s===void 0&&(s={}),i.map((c,f)=>{let p=[...l,String(f)],v=typeof c.id=="string"?c.id:p.join("-");if(Te(c.index!==!0||!c.children,"Cannot specify children on an index route"),Te(!s[v],'Found a route id collision on id "'+v+`".  Route id's must be globally unique within Data Router usages`),Hh(c)){let m=Ze({},c,r(c),{id:v});return s[v]=m,m}else{let m=Ze({},c,r(c),{id:v,children:void 0});return s[v]=m,c.children&&(m.children=jl(c.children,r,p,s)),m}})}function nr(i,r,l){return l===void 0&&(l="/"),Fl(i,r,l,!1)}function Fl(i,r,l,s){let c=typeof r=="string"?lr(r):r,f=$r(c.pathname||"/",l);if(f==null)return null;let p=np(i);Qh(p);let v=null;for(let m=0;v==null&&m<p.length;++m){let S=rv(f);v=tv(p[m],S,s)}return v}function Wh(i,r){let{route:l,pathname:s,params:c}=i;return{id:l.id,pathname:s,params:c,data:r[l.id],handle:l.handle}}function np(i,r,l,s){r===void 0&&(r=[]),l===void 0&&(l=[]),s===void 0&&(s="");let c=(f,p,v)=>{let m={relativePath:v===void 0?f.path||"":v,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};m.relativePath.startsWith("/")&&(Te(m.relativePath.startsWith(s),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(s.length));let S=Rn([s,m.relativePath]),k=l.concat(m);f.children&&f.children.length>0&&(Te(f.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+S+'".')),np(f.children,r,k,S)),!(f.path==null&&!f.index)&&r.push({path:S,score:Zh(S,f.index),routesMeta:k})};return i.forEach((f,p)=>{var v;if(f.path===""||!((v=f.path)!=null&&v.includes("?")))c(f,p);else for(let m of rp(f.path))c(f,p,m)}),r}function rp(i){let r=i.split("/");if(r.length===0)return[];let[l,...s]=r,c=l.endsWith("?"),f=l.replace(/\?$/,"");if(s.length===0)return c?[f,""]:[f];let p=rp(s.join("/")),v=[];return v.push(...p.map(m=>m===""?f:[f,m].join("/"))),c&&v.push(...p),v.map(m=>i.startsWith("/")&&m===""?"/":m)}function Qh(i){i.sort((r,l)=>r.score!==l.score?l.score-r.score:ev(r.routesMeta.map(s=>s.childrenIndex),l.routesMeta.map(s=>s.childrenIndex)))}const Kh=/^:[\w-]+$/,Gh=3,Yh=2,Xh=1,qh=10,Jh=-2,sf=i=>i==="*";function Zh(i,r){let l=i.split("/"),s=l.length;return l.some(sf)&&(s+=Jh),r&&(s+=Yh),l.filter(c=>!sf(c)).reduce((c,f)=>c+(Kh.test(f)?Gh:f===""?Xh:qh),s)}function ev(i,r){return i.length===r.length&&i.slice(0,-1).every((s,c)=>s===r[c])?i[i.length-1]-r[r.length-1]:0}function tv(i,r,l){l===void 0&&(l=!1);let{routesMeta:s}=i,c={},f="/",p=[];for(let v=0;v<s.length;++v){let m=s[v],S=v===s.length-1,k=f==="/"?r:r.slice(f.length)||"/",x=uf({path:m.relativePath,caseSensitive:m.caseSensitive,end:S},k),P=m.route;if(!x&&S&&l&&!s[s.length-1].route.index&&(x=uf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},k)),!x)return null;Object.assign(c,x.params),p.push({params:c,pathname:Rn([f,x.pathname]),pathnameBase:lv(Rn([f,x.pathnameBase])),route:P}),x.pathnameBase!=="/"&&(f=Rn([f,x.pathnameBase]))}return p}function uf(i,r){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[l,s]=nv(i.path,i.caseSensitive,i.end),c=r.match(l);if(!c)return null;let f=c[0],p=f.replace(/(.)\/+$/,"$1"),v=c.slice(1);return{params:s.reduce((S,k,x)=>{let{paramName:P,isOptional:N}=k;if(P==="*"){let F=v[x]||"";p=f.slice(0,f.length-F.length).replace(/(.)\/+$/,"$1")}const H=v[x];return N&&!H?S[P]=void 0:S[P]=(H||"").replace(/%2F/g,"/"),S},{}),pathname:f,pathnameBase:p,pattern:i}}function nv(i,r,l){r===void 0&&(r=!1),l===void 0&&(l=!0),vo(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let s=[],c="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,m)=>(s.push({paramName:v,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),c+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?c+="\\/*$":i!==""&&i!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),s]}function rv(i){try{return i.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return vo(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),i}}function $r(i,r){if(r==="/")return i;if(!i.toLowerCase().startsWith(r.toLowerCase()))return null;let l=r.endsWith("/")?r.length-1:r.length,s=i.charAt(l);return s&&s!=="/"?null:i.slice(l)||"/"}function ov(i,r){r===void 0&&(r="/");let{pathname:l,search:s="",hash:c=""}=typeof i=="string"?lr(i):i;return{pathname:l?l.startsWith("/")?l:iv(l,r):r,search:av(s),hash:sv(c)}}function iv(i,r){let l=r.replace(/\/+$/,"").split("/");return i.split("/").forEach(c=>{c===".."?l.length>1&&l.pop():c!=="."&&l.push(c)}),l.length>1?l.join("/"):"/"}function Fs(i,r,l,s){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function op(i){return i.filter((r,l)=>l===0||r.route.path&&r.route.path.length>0)}function cu(i,r){let l=op(i);return r?l.map((s,c)=>c===l.length-1?s.pathname:s.pathnameBase):l.map(s=>s.pathnameBase)}function du(i,r,l,s){s===void 0&&(s=!1);let c;typeof i=="string"?c=lr(i):(c=Ze({},i),Te(!c.pathname||!c.pathname.includes("?"),Fs("?","pathname","search",c)),Te(!c.pathname||!c.pathname.includes("#"),Fs("#","pathname","hash",c)),Te(!c.search||!c.search.includes("#"),Fs("#","search","hash",c)));let f=i===""||c.pathname==="",p=f?"/":c.pathname,v;if(p==null)v=l;else{let x=r.length-1;if(!s&&p.startsWith("..")){let P=p.split("/");for(;P[0]==="..";)P.shift(),x-=1;c.pathname=P.join("/")}v=x>=0?r[x]:"/"}let m=ov(c,v),S=p&&p!=="/"&&p.endsWith("/"),k=(f||p===".")&&l.endsWith("/");return!m.pathname.endsWith("/")&&(S||k)&&(m.pathname+="/"),m}const Rn=i=>i.join("/").replace(/\/\/+/g,"/"),lv=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),av=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,sv=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;class Vl{constructor(r,l,s,c){c===void 0&&(c=!1),this.status=r,this.statusText=l||"",this.internal=c,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}}function vi(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const ip=["post","put","patch","delete"],uv=new Set(ip),cv=["get",...ip],dv=new Set(cv),fv=new Set([301,302,303,307,308]),pv=new Set([307,308]),Us={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},mv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},fo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},fu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hv=i=>({hasErrorBoundary:!!i.hasErrorBoundary}),lp="remix-router-transitions";function vv(i){const r=i.window?i.window:typeof window<"u"?window:void 0,l=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u",s=!l;Te(i.routes.length>0,"You must provide a non-empty routes array to createRouter");let c;if(i.mapRouteProperties)c=i.mapRouteProperties;else if(i.detectErrorBoundary){let g=i.detectErrorBoundary;c=_=>({hasErrorBoundary:g(_)})}else c=hv;let f={},p=jl(i.routes,c,void 0,f),v,m=i.basename||"/",S=i.dataStrategy||wv,k=i.patchRoutesOnNavigation,x=Ze({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},i.future),P=null,N=new Set,H=null,F=null,V=null,ye=i.hydrationData!=null,X=nr(p,i.history.location,m),W=!1,re=null;if(X==null&&!k){let g=$t(404,{pathname:i.history.location.pathname}),{matches:_,route:z}=wf(p);X=_,re={[z.id]:g}}X&&!i.hydrationData&&dr(X,p,i.history.location.pathname).active&&(X=null);let me;if(X)if(X.some(g=>g.route.lazy))me=!1;else if(!X.some(g=>g.route.loader))me=!0;else if(x.v7_partialHydration){let g=i.hydrationData?i.hydrationData.loaderData:null,_=i.hydrationData?i.hydrationData.errors:null;if(_){let z=X.findIndex(O=>_[O.route.id]!==void 0);me=X.slice(0,z+1).every(O=>!tu(O.route,g,_))}else me=X.every(z=>!tu(z.route,g,_))}else me=i.hydrationData!=null;else if(me=!1,X=[],x.v7_partialHydration){let g=dr(null,p,i.history.location.pathname);g.active&&g.matches&&(W=!0,X=g.matches)}let Ae,T={historyAction:i.history.action,location:i.history.location,matches:X,initialized:me,navigation:Us,restoreScrollPosition:i.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:i.hydrationData&&i.hydrationData.loaderData||{},actionData:i.hydrationData&&i.hydrationData.actionData||null,errors:i.hydrationData&&i.hydrationData.errors||re,fetchers:new Map,blockers:new Map},J=at.Pop,Se=!1,ue,Fe=!1,we=new Map,_e=null,Ce=!1,ze=!1,Ge=[],Ie=new Set,U=new Map,ie=0,Q=-1,E=new Map,$=new Set,fe=new Map,ge=new Map,he=new Set,xe=new Map,Ee=new Map,L;function I(){if(P=i.history.listen(g=>{let{action:_,location:z,delta:O}=g;if(L){L(),L=void 0;return}vo(Ee.size===0||O!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=Fr({currentLocation:T.location,nextLocation:z,historyAction:_});if(K&&O!=null){let le=new Promise(pe=>{L=pe});i.history.go(O*-1),$n(K,{state:"blocked",location:z,proceed(){$n(K,{state:"proceeding",proceed:void 0,reset:void 0,location:z}),le.then(()=>i.history.go(O))},reset(){let pe=new Map(T.blockers);pe.set(K,fo),Ne({blockers:pe})}});return}return an(_,z)}),l){Dv(r,we);let g=()=>Ov(r,we);r.addEventListener("pagehide",g),_e=()=>r.removeEventListener("pagehide",g)}return T.initialized||an(at.Pop,T.location,{initialHydration:!0}),Ae}function se(){P&&P(),_e&&_e(),N.clear(),ue&&ue.abort(),T.fetchers.forEach((g,_)=>un(_)),T.blockers.forEach((g,_)=>Ir(_))}function nt(g){return N.add(g),()=>N.delete(g)}function Ne(g,_){_===void 0&&(_={}),T=Ze({},T,g);let z=[],O=[];x.v7_fetcherPersist&&T.fetchers.forEach((K,le)=>{K.state==="idle"&&(he.has(le)?O.push(le):z.push(le))}),he.forEach(K=>{!T.fetchers.has(K)&&!U.has(K)&&O.push(K)}),[...N].forEach(K=>K(T,{deletedFetchers:O,viewTransitionOpts:_.viewTransitionOpts,flushSync:_.flushSync===!0})),x.v7_fetcherPersist?(z.forEach(K=>T.fetchers.delete(K)),O.forEach(K=>un(K))):O.forEach(K=>he.delete(K))}function je(g,_,z){var O,K;let{flushSync:le}=z===void 0?{}:z,pe=T.actionData!=null&&T.navigation.formMethod!=null&&ln(T.navigation.formMethod)&&T.navigation.state==="loading"&&((O=g.state)==null?void 0:O._isRedirect)!==!0,Z;_.actionData?Object.keys(_.actionData).length>0?Z=_.actionData:Z=null:pe?Z=T.actionData:Z=null;let ee=_.loaderData?yf(T.loaderData,_.loaderData,_.matches||[],_.errors):T.loaderData,Y=T.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((Pe,st)=>Y.set(st,fo)));let ne=Se===!0||T.navigation.formMethod!=null&&ln(T.navigation.formMethod)&&((K=g.state)==null?void 0:K._isRedirect)!==!0;v&&(p=v,v=void 0),Ce||J===at.Pop||(J===at.Push?i.history.push(g,g.state):J===at.Replace&&i.history.replace(g,g.state));let ke;if(J===at.Pop){let Pe=we.get(T.location.pathname);Pe&&Pe.has(g.pathname)?ke={currentLocation:T.location,nextLocation:g}:we.has(g.pathname)&&(ke={currentLocation:g,nextLocation:T.location})}else if(Fe){let Pe=we.get(T.location.pathname);Pe?Pe.add(g.pathname):(Pe=new Set([g.pathname]),we.set(T.location.pathname,Pe)),ke={currentLocation:T.location,nextLocation:g}}Ne(Ze({},_,{actionData:Z,loaderData:ee,historyAction:J,location:g,initialized:!0,navigation:Us,revalidation:"idle",restoreScrollPosition:bo(g,_.matches||T.matches),preventScrollReset:ne,blockers:Y}),{viewTransitionOpts:ke,flushSync:le===!0}),J=at.Pop,Se=!1,Fe=!1,Ce=!1,ze=!1,Ge=[]}async function Dt(g,_){if(typeof g=="number"){i.history.go(g);return}let z=eu(T.location,T.matches,m,x.v7_prependBasename,g,x.v7_relativeSplatPath,_==null?void 0:_.fromRouteId,_==null?void 0:_.relative),{path:O,submission:K,error:le}=cf(x.v7_normalizeFormMethod,!1,z,_),pe=T.location,Z=hi(T.location,O,_&&_.state);Z=Ze({},Z,i.history.encodeLocation(Z));let ee=_&&_.replace!=null?_.replace:void 0,Y=at.Push;ee===!0?Y=at.Replace:ee===!1||K!=null&&ln(K.formMethod)&&K.formAction===T.location.pathname+T.location.search&&(Y=at.Replace);let ne=_&&"preventScrollReset"in _?_.preventScrollReset===!0:void 0,ke=(_&&_.flushSync)===!0,Pe=Fr({currentLocation:pe,nextLocation:Z,historyAction:Y});if(Pe){$n(Pe,{state:"blocked",location:Z,proceed(){$n(Pe,{state:"proceeding",proceed:void 0,reset:void 0,location:Z}),Dt(g,_)},reset(){let st=new Map(T.blockers);st.set(Pe,fo),Ne({blockers:st})}});return}return await an(Y,Z,{submission:K,pendingError:le,preventScrollReset:ne,replace:_&&_.replace,enableViewTransition:_&&_.viewTransition,flushSync:ke})}function Ci(){if(cr(),Ne({revalidation:"loading"}),T.navigation.state!=="submitting"){if(T.navigation.state==="idle"){an(T.historyAction,T.location,{startUninterruptedRevalidation:!0});return}an(J||T.historyAction,T.navigation.location,{overrideNavigation:T.navigation,enableViewTransition:Fe===!0})}}async function an(g,_,z){ue&&ue.abort(),ue=null,J=g,Ce=(z&&z.startUninterruptedRevalidation)===!0,zi(T.location,T.matches),Se=(z&&z.preventScrollReset)===!0,Fe=(z&&z.enableViewTransition)===!0;let O=v||p,K=z&&z.overrideNavigation,le=z!=null&&z.initialHydration&&T.matches&&T.matches.length>0&&!W?T.matches:nr(O,_,m),pe=(z&&z.flushSync)===!0,Z=dr(le,O,_.pathname);if(Z.active&&Z.matches&&(le=Z.matches),!le){let{error:Ve,notFoundMatches:Le,route:Ye}=cn(_.pathname);je(_,{matches:Le,loaderData:{},errors:{[Ye.id]:Ve}},{flushSync:pe});return}if(T.initialized&&!ze&&bv(T.location,_)&&!(z&&z.submission&&ln(z.submission.formMethod))){je(_,{matches:le},{flushSync:pe});return}ue=new AbortController;let ee=uo(i.history,_,ue.signal,z&&z.submission),Y;if(z&&z.pendingError)Y=[Tr(le).route.id,{type:He.error,error:z.pendingError}];else if(z&&z.submission&&ln(z.submission.formMethod)){let Ve=await wo(ee,_,z.submission,le,Z.active,{replace:z.replace,flushSync:pe});if(Ve.shortCircuited)return;if(Ve.pendingActionResult){let[Le,Ye]=Ve.pendingActionResult;if(Ut(Ye)&&vi(Ye.error)&&Ye.error.status===404){ue=null,je(_,{matches:Ve.matches,loaderData:{},errors:{[Le]:Ye.error}});return}}le=Ve.matches||le,Y=Ve.pendingActionResult,K=js(_,z.submission),pe=!1,Z.active=!1,ee=uo(i.history,ee.url,ee.signal)}let{shortCircuited:ne,matches:ke,loaderData:Pe,errors:st}=await bi(ee,_,le,Z.active,K,z&&z.submission,z&&z.fetcherSubmission,z&&z.replace,z&&z.initialHydration===!0,pe,Y);ne||(ue=null,je(_,Ze({matches:ke||le},xf(Y),{loaderData:Pe,errors:st})))}async function wo(g,_,z,O,K,le){le===void 0&&(le={}),cr();let pe=Nv(_,z);if(Ne({navigation:pe},{flushSync:le.flushSync===!0}),K){let Y=await Dn(O,_.pathname,g.signal);if(Y.type==="aborted")return{shortCircuited:!0};if(Y.type==="error"){let ne=Tr(Y.partialMatches).route.id;return{matches:Y.partialMatches,pendingActionResult:[ne,{type:He.error,error:Y.error}]}}else if(Y.matches)O=Y.matches;else{let{notFoundMatches:ne,error:ke,route:Pe}=cn(_.pathname);return{matches:ne,pendingActionResult:[Pe.id,{type:He.error,error:ke}]}}}let Z,ee=di(O,_);if(!ee.route.action&&!ee.route.lazy)Z={type:He.error,error:$t(405,{method:g.method,pathname:_.pathname,routeId:ee.route.id})};else if(Z=(await Ln("action",T,g,[ee],O,null))[ee.route.id],g.signal.aborted)return{shortCircuited:!0};if(Rr(Z)){let Y;return le&&le.replace!=null?Y=le.replace:Y=hf(Z.response.headers.get("Location"),new URL(g.url),m)===T.location.pathname+T.location.search,await sn(g,Z,!0,{submission:z,replace:Y}),{shortCircuited:!0}}if(or(Z))throw $t(400,{type:"defer-action"});if(Ut(Z)){let Y=Tr(O,ee.route.id);return(le&&le.replace)!==!0&&(J=at.Push),{matches:O,pendingActionResult:[Y.route.id,Z]}}return{matches:O,pendingActionResult:[ee.route.id,Z]}}async function bi(g,_,z,O,K,le,pe,Z,ee,Y,ne){let ke=K||js(_,le),Pe=le||pe||kf(ke),st=!Ce&&(!x.v7_partialHydration||!ee);if(O){if(st){let We=Mr(ne);Ne(Ze({navigation:ke},We!==void 0?{actionData:We}:{}),{flushSync:Y})}let Re=await Dn(z,_.pathname,g.signal);if(Re.type==="aborted")return{shortCircuited:!0};if(Re.type==="error"){let We=Tr(Re.partialMatches).route.id;return{matches:Re.partialMatches,loaderData:{},errors:{[We]:Re.error}}}else if(Re.matches)z=Re.matches;else{let{error:We,notFoundMatches:gt,route:mr}=cn(_.pathname);return{matches:gt,loaderData:{},errors:{[mr.id]:We}}}}let Ve=v||p,[Le,Ye]=ff(i.history,T,z,Pe,_,x.v7_partialHydration&&ee===!0,x.v7_skipActionErrorRevalidation,ze,Ge,Ie,he,fe,$,Ve,m,ne);if(dn(Re=>!(z&&z.some(We=>We.route.id===Re))||Le&&Le.some(We=>We.route.id===Re)),Q=++ie,Le.length===0&&Ye.length===0){let Re=Ti();return je(_,Ze({matches:z,loaderData:{},errors:ne&&Ut(ne[1])?{[ne[0]]:ne[1].error}:null},xf(ne),Re?{fetchers:new Map(T.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(st){let Re={};if(!O){Re.navigation=ke;let We=Mr(ne);We!==void 0&&(Re.actionData=We)}Ye.length>0&&(Re.fetchers=ur(Ye)),Ne(Re,{flushSync:Y})}Ye.forEach(Re=>{Xt(Re.key),Re.controller&&U.set(Re.key,Re.controller)});let gn=()=>Ye.forEach(Re=>Xt(Re.key));ue&&ue.signal.addEventListener("abort",gn);let{loaderResults:pr,fetcherResults:qt}=await ko(T,z,Le,Ye,g);if(g.signal.aborted)return{shortCircuited:!0};ue&&ue.signal.removeEventListener("abort",gn),Ye.forEach(Re=>U.delete(Re.key));let De=Al(pr);if(De)return await sn(g,De.result,!0,{replace:Z}),{shortCircuited:!0};if(De=Al(qt),De)return $.add(De.key),await sn(g,De.result,!0,{replace:Z}),{shortCircuited:!0};let{loaderData:Po,errors:yn}=gf(T,z,pr,ne,Ye,qt,xe);xe.forEach((Re,We)=>{Re.subscribe(gt=>{(gt||Re.done)&&xe.delete(We)})}),x.v7_partialHydration&&ee&&T.errors&&(yn=Ze({},T.errors,yn));let fn=Ti(),xn=Ar(Q),Ur=fn||xn||Ye.length>0;return Ze({matches:z,loaderData:Po,errors:yn},Ur?{fetchers:new Map(T.fetchers)}:{})}function Mr(g){if(g&&!Ut(g[1]))return{[g[0]]:g[1].data};if(T.actionData)return Object.keys(T.actionData).length===0?null:T.actionData}function ur(g){return g.forEach(_=>{let z=T.fetchers.get(_.key),O=ai(void 0,z?z.data:void 0);T.fetchers.set(_.key,O)}),new Map(T.fetchers)}function zn(g,_,z,O){if(s)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Xt(g);let K=(O&&O.flushSync)===!0,le=v||p,pe=eu(T.location,T.matches,m,x.v7_prependBasename,z,x.v7_relativeSplatPath,_,O==null?void 0:O.relative),Z=nr(le,pe,m),ee=dr(Z,le,pe);if(ee.active&&ee.matches&&(Z=ee.matches),!Z){Bt(g,_,$t(404,{pathname:pe}),{flushSync:K});return}let{path:Y,submission:ne,error:ke}=cf(x.v7_normalizeFormMethod,!0,pe,O);if(ke){Bt(g,_,ke,{flushSync:K});return}let Pe=di(Z,Y),st=(O&&O.preventScrollReset)===!0;if(ne&&ln(ne.formMethod)){So(g,_,Y,Pe,Z,ee.active,K,st,ne);return}fe.set(g,{routeId:_,path:Y}),Pi(g,_,Y,Pe,Z,ee.active,K,st,ne)}async function So(g,_,z,O,K,le,pe,Z,ee){cr(),fe.delete(g);function Y(Oe){if(!Oe.route.action&&!Oe.route.lazy){let On=$t(405,{method:ee.formMethod,pathname:z,routeId:_});return Bt(g,_,On,{flushSync:pe}),!0}return!1}if(!le&&Y(O))return;let ne=T.fetchers.get(g);Ot(g,$v(ee,ne),{flushSync:pe});let ke=new AbortController,Pe=uo(i.history,z,ke.signal,ee);if(le){let Oe=await Dn(K,new URL(Pe.url).pathname,Pe.signal);if(Oe.type==="aborted")return;if(Oe.type==="error"){Bt(g,_,Oe.error,{flushSync:pe});return}else if(Oe.matches){if(K=Oe.matches,O=di(K,z),Y(O))return}else{Bt(g,_,$t(404,{pathname:z}),{flushSync:pe});return}}U.set(g,ke);let st=ie,Le=(await Ln("action",T,Pe,[O],K,g))[O.route.id];if(Pe.signal.aborted){U.get(g)===ke&&U.delete(g);return}if(x.v7_fetcherPersist&&he.has(g)){if(Rr(Le)||Ut(Le)){Ot(g,tr(void 0));return}}else{if(Rr(Le))if(U.delete(g),Q>st){Ot(g,tr(void 0));return}else return $.add(g),Ot(g,ai(ee)),sn(Pe,Le,!1,{fetcherSubmission:ee,preventScrollReset:Z});if(Ut(Le)){Bt(g,_,Le.error);return}}if(or(Le))throw $t(400,{type:"defer-action"});let Ye=T.navigation.location||T.location,gn=uo(i.history,Ye,ke.signal),pr=v||p,qt=T.navigation.state!=="idle"?nr(pr,T.navigation.location,m):T.matches;Te(qt,"Didn't find any matches after fetcher action");let De=++ie;E.set(g,De);let Po=ai(ee,Le.data);T.fetchers.set(g,Po);let[yn,fn]=ff(i.history,T,qt,ee,Ye,!1,x.v7_skipActionErrorRevalidation,ze,Ge,Ie,he,fe,$,pr,m,[O.route.id,Le]);fn.filter(Oe=>Oe.key!==g).forEach(Oe=>{let On=Oe.key,Ni=T.fetchers.get(On),ta=ai(void 0,Ni?Ni.data:void 0);T.fetchers.set(On,ta),Xt(On),Oe.controller&&U.set(On,Oe.controller)}),Ne({fetchers:new Map(T.fetchers)});let xn=()=>fn.forEach(Oe=>Xt(Oe.key));ke.signal.addEventListener("abort",xn);let{loaderResults:Ur,fetcherResults:Re}=await ko(T,qt,yn,fn,gn);if(ke.signal.aborted)return;ke.signal.removeEventListener("abort",xn),E.delete(g),U.delete(g),fn.forEach(Oe=>U.delete(Oe.key));let We=Al(Ur);if(We)return sn(gn,We.result,!1,{preventScrollReset:Z});if(We=Al(Re),We)return $.add(We.key),sn(gn,We.result,!1,{preventScrollReset:Z});let{loaderData:gt,errors:mr}=gf(T,qt,Ur,void 0,fn,Re,xe);if(T.fetchers.has(g)){let Oe=tr(Le.data);T.fetchers.set(g,Oe)}Ar(De),T.navigation.state==="loading"&&De>Q?(Te(J,"Expected pending action"),ue&&ue.abort(),je(T.navigation.location,{matches:qt,loaderData:gt,errors:mr,fetchers:new Map(T.fetchers)})):(Ne({errors:mr,loaderData:yf(T.loaderData,gt,qt,mr),fetchers:new Map(T.fetchers)}),ze=!1)}async function Pi(g,_,z,O,K,le,pe,Z,ee){let Y=T.fetchers.get(g);Ot(g,ai(ee,Y?Y.data:void 0),{flushSync:pe});let ne=new AbortController,ke=uo(i.history,z,ne.signal);if(le){let Le=await Dn(K,new URL(ke.url).pathname,ke.signal);if(Le.type==="aborted")return;if(Le.type==="error"){Bt(g,_,Le.error,{flushSync:pe});return}else if(Le.matches)K=Le.matches,O=di(K,z);else{Bt(g,_,$t(404,{pathname:z}),{flushSync:pe});return}}U.set(g,ne);let Pe=ie,Ve=(await Ln("loader",T,ke,[O],K,g))[O.route.id];if(or(Ve)&&(Ve=await pu(Ve,ke.signal,!0)||Ve),U.get(g)===ne&&U.delete(g),!ke.signal.aborted){if(he.has(g)){Ot(g,tr(void 0));return}if(Rr(Ve))if(Q>Pe){Ot(g,tr(void 0));return}else{$.add(g),await sn(ke,Ve,!1,{preventScrollReset:Z});return}if(Ut(Ve)){Bt(g,_,Ve.error);return}Te(!or(Ve),"Unhandled fetcher deferred data"),Ot(g,tr(Ve.data))}}async function sn(g,_,z,O){let{submission:K,fetcherSubmission:le,preventScrollReset:pe,replace:Z}=O===void 0?{}:O;_.response.headers.has("X-Remix-Revalidate")&&(ze=!0);let ee=_.response.headers.get("Location");Te(ee,"Expected a Location header on the redirect Response"),ee=hf(ee,new URL(g.url),m);let Y=hi(T.location,ee,{_isRedirect:!0});if(l){let Le=!1;if(_.response.headers.has("X-Remix-Reload-Document"))Le=!0;else if(fu.test(ee)){const Ye=i.history.createURL(ee);Le=Ye.origin!==r.location.origin||$r(Ye.pathname,m)==null}if(Le){Z?r.location.replace(ee):r.location.assign(ee);return}}ue=null;let ne=Z===!0||_.response.headers.has("X-Remix-Replace")?at.Replace:at.Push,{formMethod:ke,formAction:Pe,formEncType:st}=T.navigation;!K&&!le&&ke&&Pe&&st&&(K=kf(T.navigation));let Ve=K||le;if(pv.has(_.response.status)&&Ve&&ln(Ve.formMethod))await an(ne,Y,{submission:Ze({},Ve,{formAction:ee}),preventScrollReset:pe||Se,enableViewTransition:z?Fe:void 0});else{let Le=js(Y,K);await an(ne,Y,{overrideNavigation:Le,fetcherSubmission:le,preventScrollReset:pe||Se,enableViewTransition:z?Fe:void 0})}}async function Ln(g,_,z,O,K,le){let pe,Z={};try{pe=await Sv(S,g,_,z,O,K,le,f,c)}catch(ee){return O.forEach(Y=>{Z[Y.route.id]={type:He.error,error:ee}}),Z}for(let[ee,Y]of Object.entries(pe))if(Pv(Y)){let ne=Y.result;Z[ee]={type:He.redirect,response:_v(ne,z,ee,K,m,x.v7_relativeSplatPath)}}else Z[ee]=await Ev(Y);return Z}async function ko(g,_,z,O,K){let le=g.matches,pe=Ln("loader",g,K,z,_,null),Z=Promise.all(O.map(async ne=>{if(ne.matches&&ne.match&&ne.controller){let Pe=(await Ln("loader",g,uo(i.history,ne.path,ne.controller.signal),[ne.match],ne.matches,ne.key))[ne.match.route.id];return{[ne.key]:Pe}}else return Promise.resolve({[ne.key]:{type:He.error,error:$t(404,{pathname:ne.path})}})})),ee=await pe,Y=(await Z).reduce((ne,ke)=>Object.assign(ne,ke),{});return await Promise.all([zv(_,ee,K.signal,le,g.loaderData),Lv(_,Y,O)]),{loaderResults:ee,fetcherResults:Y}}function cr(){ze=!0,Ge.push(...dn()),fe.forEach((g,_)=>{U.has(_)&&Ie.add(_),Xt(_)})}function Ot(g,_,z){z===void 0&&(z={}),T.fetchers.set(g,_),Ne({fetchers:new Map(T.fetchers)},{flushSync:(z&&z.flushSync)===!0})}function Bt(g,_,z,O){O===void 0&&(O={});let K=Tr(T.matches,_);un(g),Ne({errors:{[K.route.id]:z},fetchers:new Map(T.fetchers)},{flushSync:(O&&O.flushSync)===!0})}function Nn(g){return ge.set(g,(ge.get(g)||0)+1),he.has(g)&&he.delete(g),T.fetchers.get(g)||mv}function un(g){let _=T.fetchers.get(g);U.has(g)&&!(_&&_.state==="loading"&&E.has(g))&&Xt(g),fe.delete(g),E.delete(g),$.delete(g),x.v7_fetcherPersist&&he.delete(g),Ie.delete(g),T.fetchers.delete(g)}function ea(g){let _=(ge.get(g)||0)-1;_<=0?(ge.delete(g),he.add(g),x.v7_fetcherPersist||un(g)):ge.set(g,_),Ne({fetchers:new Map(T.fetchers)})}function Xt(g){let _=U.get(g);_&&(_.abort(),U.delete(g))}function Eo(g){for(let _ of g){let z=Nn(_),O=tr(z.data);T.fetchers.set(_,O)}}function Ti(){let g=[],_=!1;for(let z of $){let O=T.fetchers.get(z);Te(O,"Expected fetcher: "+z),O.state==="loading"&&($.delete(z),g.push(z),_=!0)}return Eo(g),_}function Ar(g){let _=[];for(let[z,O]of E)if(O<g){let K=T.fetchers.get(z);Te(K,"Expected fetcher: "+z),K.state==="loading"&&(Xt(z),E.delete(z),_.push(z))}return Eo(_),_.length>0}function _o(g,_){let z=T.blockers.get(g)||fo;return Ee.get(g)!==_&&Ee.set(g,_),z}function Ir(g){T.blockers.delete(g),Ee.delete(g)}function $n(g,_){let z=T.blockers.get(g)||fo;Te(z.state==="unblocked"&&_.state==="blocked"||z.state==="blocked"&&_.state==="blocked"||z.state==="blocked"&&_.state==="proceeding"||z.state==="blocked"&&_.state==="unblocked"||z.state==="proceeding"&&_.state==="unblocked","Invalid blocker state transition: "+z.state+" -> "+_.state);let O=new Map(T.blockers);O.set(g,_),Ne({blockers:O})}function Fr(g){let{currentLocation:_,nextLocation:z,historyAction:O}=g;if(Ee.size===0)return;Ee.size>1&&vo(!1,"A router only supports one blocker at a time");let K=Array.from(Ee.entries()),[le,pe]=K[K.length-1],Z=T.blockers.get(le);if(!(Z&&Z.state==="proceeding")&&pe({currentLocation:_,nextLocation:z,historyAction:O}))return le}function cn(g){let _=$t(404,{pathname:g}),z=v||p,{matches:O,route:K}=wf(z);return dn(),{notFoundMatches:O,route:K,error:_}}function dn(g){let _=[];return xe.forEach((z,O)=>{(!g||g(O))&&(z.cancel(),_.push(O),xe.delete(O))}),_}function Ri(g,_,z){if(H=g,V=_,F=z||null,!ye&&T.navigation===Us){ye=!0;let O=bo(T.location,T.matches);O!=null&&Ne({restoreScrollPosition:O})}return()=>{H=null,V=null,F=null}}function Co(g,_){return F&&F(g,_.map(O=>Wh(O,T.loaderData)))||g.key}function zi(g,_){if(H&&V){let z=Co(g,_);H[z]=V()}}function bo(g,_){if(H){let z=Co(g,_),O=H[z];if(typeof O=="number")return O}return null}function dr(g,_,z){if(k)if(g){if(Object.keys(g[0].params).length>0)return{active:!0,matches:Fl(_,z,m,!0)}}else return{active:!0,matches:Fl(_,z,m,!0)||[]};return{active:!1,matches:null}}async function Dn(g,_,z){if(!k)return{type:"success",matches:g};let O=g;for(;;){let K=v==null,le=v||p,pe=f;try{await k({signal:z,path:_,matches:O,patch:(Y,ne)=>{z.aborted||mf(Y,ne,le,pe,c)}})}catch(Y){return{type:"error",error:Y,partialMatches:O}}finally{K&&!z.aborted&&(p=[...p])}if(z.aborted)return{type:"aborted"};let Z=nr(le,_,m);if(Z)return{type:"success",matches:Z};let ee=Fl(le,_,m,!0);if(!ee||O.length===ee.length&&O.every((Y,ne)=>Y.route.id===ee[ne].route.id))return{type:"success",matches:null};O=ee}}function Li(g){f={},v=jl(g,c,void 0,f)}function fr(g,_){let z=v==null;mf(g,_,v||p,f,c),z&&(p=[...p],Ne({}))}return Ae={get basename(){return m},get future(){return x},get state(){return T},get routes(){return p},get window(){return r},initialize:I,subscribe:nt,enableScrollRestoration:Ri,navigate:Dt,fetch:zn,revalidate:Ci,createHref:g=>i.history.createHref(g),encodeLocation:g=>i.history.encodeLocation(g),getFetcher:Nn,deleteFetcher:ea,dispose:se,getBlocker:_o,deleteBlocker:Ir,patchRoutes:fr,_internalFetchControllers:U,_internalActiveDeferreds:xe,_internalSetRoutes:Li},Ae}function gv(i){return i!=null&&("formData"in i&&i.formData!=null||"body"in i&&i.body!==void 0)}function eu(i,r,l,s,c,f,p,v){let m,S;if(p){m=[];for(let x of r)if(m.push(x),x.route.id===p){S=x;break}}else m=r,S=r[r.length-1];let k=du(c||".",cu(m,f),$r(i.pathname,l)||i.pathname,v==="path");if(c==null&&(k.search=i.search,k.hash=i.hash),(c==null||c===""||c===".")&&S){let x=mu(k.search);if(S.route.index&&!x)k.search=k.search?k.search.replace(/^\?/,"?index&"):"?index";else if(!S.route.index&&x){let P=new URLSearchParams(k.search),N=P.getAll("index");P.delete("index"),N.filter(F=>F).forEach(F=>P.append("index",F));let H=P.toString();k.search=H?"?"+H:""}}return s&&l!=="/"&&(k.pathname=k.pathname==="/"?l:Rn([l,k.pathname])),wi(k)}function cf(i,r,l,s){if(!s||!gv(s))return{path:l};if(s.formMethod&&!Rv(s.formMethod))return{path:l,error:$t(405,{method:s.formMethod})};let c=()=>({path:l,error:$t(400,{type:"invalid-body"})}),f=s.formMethod||"get",p=i?f.toUpperCase():f.toLowerCase(),v=up(l);if(s.body!==void 0){if(s.formEncType==="text/plain"){if(!ln(p))return c();let P=typeof s.body=="string"?s.body:s.body instanceof FormData||s.body instanceof URLSearchParams?Array.from(s.body.entries()).reduce((N,H)=>{let[F,V]=H;return""+N+F+"="+V+`
`},""):String(s.body);return{path:l,submission:{formMethod:p,formAction:v,formEncType:s.formEncType,formData:void 0,json:void 0,text:P}}}else if(s.formEncType==="application/json"){if(!ln(p))return c();try{let P=typeof s.body=="string"?JSON.parse(s.body):s.body;return{path:l,submission:{formMethod:p,formAction:v,formEncType:s.formEncType,formData:void 0,json:P,text:void 0}}}catch{return c()}}}Te(typeof FormData=="function","FormData is not available in this environment");let m,S;if(s.formData)m=nu(s.formData),S=s.formData;else if(s.body instanceof FormData)m=nu(s.body),S=s.body;else if(s.body instanceof URLSearchParams)m=s.body,S=vf(m);else if(s.body==null)m=new URLSearchParams,S=new FormData;else try{m=new URLSearchParams(s.body),S=vf(m)}catch{return c()}let k={formMethod:p,formAction:v,formEncType:s&&s.formEncType||"application/x-www-form-urlencoded",formData:S,json:void 0,text:void 0};if(ln(k.formMethod))return{path:l,submission:k};let x=lr(l);return r&&x.search&&mu(x.search)&&m.append("index",""),x.search="?"+m,{path:wi(x),submission:k}}function df(i,r,l){l===void 0&&(l=!1);let s=i.findIndex(c=>c.route.id===r);return s>=0?i.slice(0,l?s+1:s):i}function ff(i,r,l,s,c,f,p,v,m,S,k,x,P,N,H,F){let V=F?Ut(F[1])?F[1].error:F[1].data:void 0,ye=i.createURL(r.location),X=i.createURL(c),W=l;f&&r.errors?W=df(l,Object.keys(r.errors)[0],!0):F&&Ut(F[1])&&(W=df(l,F[0]));let re=F?F[1].statusCode:void 0,me=p&&re&&re>=400,Ae=W.filter((J,Se)=>{let{route:ue}=J;if(ue.lazy)return!0;if(ue.loader==null)return!1;if(f)return tu(ue,r.loaderData,r.errors);if(yv(r.loaderData,r.matches[Se],J)||m.some(_e=>_e===J.route.id))return!0;let Fe=r.matches[Se],we=J;return pf(J,Ze({currentUrl:ye,currentParams:Fe.params,nextUrl:X,nextParams:we.params},s,{actionResult:V,actionStatus:re,defaultShouldRevalidate:me?!1:v||ye.pathname+ye.search===X.pathname+X.search||ye.search!==X.search||ap(Fe,we)}))}),T=[];return x.forEach((J,Se)=>{if(f||!l.some(Ce=>Ce.route.id===J.routeId)||k.has(Se))return;let ue=nr(N,J.path,H);if(!ue){T.push({key:Se,routeId:J.routeId,path:J.path,matches:null,match:null,controller:null});return}let Fe=r.fetchers.get(Se),we=di(ue,J.path),_e=!1;P.has(Se)?_e=!1:S.has(Se)?(S.delete(Se),_e=!0):Fe&&Fe.state!=="idle"&&Fe.data===void 0?_e=v:_e=pf(we,Ze({currentUrl:ye,currentParams:r.matches[r.matches.length-1].params,nextUrl:X,nextParams:l[l.length-1].params},s,{actionResult:V,actionStatus:re,defaultShouldRevalidate:me?!1:v})),_e&&T.push({key:Se,routeId:J.routeId,path:J.path,matches:ue,match:we,controller:new AbortController})}),[Ae,T]}function tu(i,r,l){if(i.lazy)return!0;if(!i.loader)return!1;let s=r!=null&&r[i.id]!==void 0,c=l!=null&&l[i.id]!==void 0;return!s&&c?!1:typeof i.loader=="function"&&i.loader.hydrate===!0?!0:!s&&!c}function yv(i,r,l){let s=!r||l.route.id!==r.route.id,c=i[l.route.id]===void 0;return s||c}function ap(i,r){let l=i.route.path;return i.pathname!==r.pathname||l!=null&&l.endsWith("*")&&i.params["*"]!==r.params["*"]}function pf(i,r){if(i.route.shouldRevalidate){let l=i.route.shouldRevalidate(r);if(typeof l=="boolean")return l}return r.defaultShouldRevalidate}function mf(i,r,l,s,c){var f;let p;if(i){let S=s[i];Te(S,"No route found to patch children into: routeId = "+i),S.children||(S.children=[]),p=S.children}else p=l;let v=r.filter(S=>!p.some(k=>sp(S,k))),m=jl(v,c,[i||"_","patch",String(((f=p)==null?void 0:f.length)||"0")],s);p.push(...m)}function sp(i,r){return"id"in i&&"id"in r&&i.id===r.id?!0:i.index===r.index&&i.path===r.path&&i.caseSensitive===r.caseSensitive?(!i.children||i.children.length===0)&&(!r.children||r.children.length===0)?!0:i.children.every((l,s)=>{var c;return(c=r.children)==null?void 0:c.some(f=>sp(l,f))}):!1}async function xv(i,r,l){if(!i.lazy)return;let s=await i.lazy();if(!i.lazy)return;let c=l[i.id];Te(c,"No route found in manifest");let f={};for(let p in s){let m=c[p]!==void 0&&p!=="hasErrorBoundary";vo(!m,'Route "'+c.id+'" has a static property "'+p+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+p+'" will be ignored.')),!m&&!Bh.has(p)&&(f[p]=s[p])}Object.assign(c,f),Object.assign(c,Ze({},r(c),{lazy:void 0}))}async function wv(i){let{matches:r}=i,l=r.filter(c=>c.shouldLoad);return(await Promise.all(l.map(c=>c.resolve()))).reduce((c,f,p)=>Object.assign(c,{[l[p].route.id]:f}),{})}async function Sv(i,r,l,s,c,f,p,v,m,S){let k=f.map(N=>N.route.lazy?xv(N.route,m,v):void 0),x=f.map((N,H)=>{let F=k[H],V=c.some(X=>X.route.id===N.route.id);return Ze({},N,{shouldLoad:V,resolve:async X=>(X&&s.method==="GET"&&(N.route.lazy||N.route.loader)&&(V=!0),V?kv(r,s,N,F,X,S):Promise.resolve({type:He.data,result:void 0}))})}),P=await i({matches:x,request:s,params:f[0].params,fetcherKey:p,context:S});try{await Promise.all(k)}catch{}return P}async function kv(i,r,l,s,c,f){let p,v,m=S=>{let k,x=new Promise((H,F)=>k=F);v=()=>k(),r.signal.addEventListener("abort",v);let P=H=>typeof S!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+i+'" [routeId: '+l.route.id+"]"))):S({request:r,params:l.params,context:f},...H!==void 0?[H]:[]),N=(async()=>{try{return{type:"data",result:await(c?c(F=>P(F)):P())}}catch(H){return{type:"error",result:H}}})();return Promise.race([N,x])};try{let S=l.route[i];if(s)if(S){let k,[x]=await Promise.all([m(S).catch(P=>{k=P}),s]);if(k!==void 0)throw k;p=x}else if(await s,S=l.route[i],S)p=await m(S);else if(i==="action"){let k=new URL(r.url),x=k.pathname+k.search;throw $t(405,{method:r.method,pathname:x,routeId:l.route.id})}else return{type:He.data,result:void 0};else if(S)p=await m(S);else{let k=new URL(r.url),x=k.pathname+k.search;throw $t(404,{pathname:x})}Te(p.result!==void 0,"You defined "+(i==="action"?"an action":"a loader")+" for route "+('"'+l.route.id+"\" but didn't return anything from your `"+i+"` ")+"function. Please return a value or `null`.")}catch(S){return{type:He.error,result:S}}finally{v&&r.signal.removeEventListener("abort",v)}return p}async function Ev(i){let{result:r,type:l}=i;if(cp(r)){let x;try{let P=r.headers.get("Content-Type");P&&/\bapplication\/json\b/.test(P)?r.body==null?x=null:x=await r.json():x=await r.text()}catch(P){return{type:He.error,error:P}}return l===He.error?{type:He.error,error:new Vl(r.status,r.statusText,x),statusCode:r.status,headers:r.headers}:{type:He.data,data:x,statusCode:r.status,headers:r.headers}}if(l===He.error){if(Sf(r)){var s,c;if(r.data instanceof Error){var f,p;return{type:He.error,error:r.data,statusCode:(f=r.init)==null?void 0:f.status,headers:(p=r.init)!=null&&p.headers?new Headers(r.init.headers):void 0}}return{type:He.error,error:new Vl(((s=r.init)==null?void 0:s.status)||500,void 0,r.data),statusCode:vi(r)?r.status:void 0,headers:(c=r.init)!=null&&c.headers?new Headers(r.init.headers):void 0}}return{type:He.error,error:r,statusCode:vi(r)?r.status:void 0}}if(Tv(r)){var v,m;return{type:He.deferred,deferredData:r,statusCode:(v=r.init)==null?void 0:v.status,headers:((m=r.init)==null?void 0:m.headers)&&new Headers(r.init.headers)}}if(Sf(r)){var S,k;return{type:He.data,data:r.data,statusCode:(S=r.init)==null?void 0:S.status,headers:(k=r.init)!=null&&k.headers?new Headers(r.init.headers):void 0}}return{type:He.data,data:r}}function _v(i,r,l,s,c,f){let p=i.headers.get("Location");if(Te(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!fu.test(p)){let v=s.slice(0,s.findIndex(m=>m.route.id===l)+1);p=eu(new URL(r.url),v,c,!0,p,f),i.headers.set("Location",p)}return i}function hf(i,r,l){if(fu.test(i)){let s=i,c=s.startsWith("//")?new URL(r.protocol+s):new URL(s),f=$r(c.pathname,l)!=null;if(c.origin===r.origin&&f)return c.pathname+c.search+c.hash}return i}function uo(i,r,l,s){let c=i.createURL(up(r)).toString(),f={signal:l};if(s&&ln(s.formMethod)){let{formMethod:p,formEncType:v}=s;f.method=p.toUpperCase(),v==="application/json"?(f.headers=new Headers({"Content-Type":v}),f.body=JSON.stringify(s.json)):v==="text/plain"?f.body=s.text:v==="application/x-www-form-urlencoded"&&s.formData?f.body=nu(s.formData):f.body=s.formData}return new Request(c,f)}function nu(i){let r=new URLSearchParams;for(let[l,s]of i.entries())r.append(l,typeof s=="string"?s:s.name);return r}function vf(i){let r=new FormData;for(let[l,s]of i.entries())r.append(l,s);return r}function Cv(i,r,l,s,c){let f={},p=null,v,m=!1,S={},k=l&&Ut(l[1])?l[1].error:void 0;return i.forEach(x=>{if(!(x.route.id in r))return;let P=x.route.id,N=r[P];if(Te(!Rr(N),"Cannot handle redirect results in processLoaderData"),Ut(N)){let H=N.error;k!==void 0&&(H=k,k=void 0),p=p||{};{let F=Tr(i,P);p[F.route.id]==null&&(p[F.route.id]=H)}f[P]=void 0,m||(m=!0,v=vi(N.error)?N.error.status:500),N.headers&&(S[P]=N.headers)}else or(N)?(s.set(P,N.deferredData),f[P]=N.deferredData.data,N.statusCode!=null&&N.statusCode!==200&&!m&&(v=N.statusCode),N.headers&&(S[P]=N.headers)):(f[P]=N.data,N.statusCode&&N.statusCode!==200&&!m&&(v=N.statusCode),N.headers&&(S[P]=N.headers))}),k!==void 0&&l&&(p={[l[0]]:k},f[l[0]]=void 0),{loaderData:f,errors:p,statusCode:v||200,loaderHeaders:S}}function gf(i,r,l,s,c,f,p){let{loaderData:v,errors:m}=Cv(r,l,s,p);return c.forEach(S=>{let{key:k,match:x,controller:P}=S,N=f[k];if(Te(N,"Did not find corresponding fetcher result"),!(P&&P.signal.aborted))if(Ut(N)){let H=Tr(i.matches,x==null?void 0:x.route.id);m&&m[H.route.id]||(m=Ze({},m,{[H.route.id]:N.error})),i.fetchers.delete(k)}else if(Rr(N))Te(!1,"Unhandled fetcher revalidation redirect");else if(or(N))Te(!1,"Unhandled fetcher deferred data");else{let H=tr(N.data);i.fetchers.set(k,H)}}),{loaderData:v,errors:m}}function yf(i,r,l,s){let c=Ze({},r);for(let f of l){let p=f.route.id;if(r.hasOwnProperty(p)?r[p]!==void 0&&(c[p]=r[p]):i[p]!==void 0&&f.route.loader&&(c[p]=i[p]),s&&s.hasOwnProperty(p))break}return c}function xf(i){return i?Ut(i[1])?{actionData:{}}:{actionData:{[i[0]]:i[1].data}}:{}}function Tr(i,r){return(r?i.slice(0,i.findIndex(s=>s.route.id===r)+1):[...i]).reverse().find(s=>s.route.hasErrorBoundary===!0)||i[0]}function wf(i){let r=i.length===1?i[0]:i.find(l=>l.index||!l.path||l.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function $t(i,r){let{pathname:l,routeId:s,method:c,type:f,message:p}=r===void 0?{}:r,v="Unknown Server Error",m="Unknown @remix-run/router error";return i===400?(v="Bad Request",c&&l&&s?m="You made a "+c+' request to "'+l+'" but '+('did not provide a `loader` for route "'+s+'", ')+"so there is no way to handle the request.":f==="defer-action"?m="defer() is not supported in actions":f==="invalid-body"&&(m="Unable to encode submission body")):i===403?(v="Forbidden",m='Route "'+s+'" does not match URL "'+l+'"'):i===404?(v="Not Found",m='No route matches URL "'+l+'"'):i===405&&(v="Method Not Allowed",c&&l&&s?m="You made a "+c.toUpperCase()+' request to "'+l+'" but '+('did not provide an `action` for route "'+s+'", ')+"so there is no way to handle the request.":c&&(m='Invalid request method "'+c.toUpperCase()+'"')),new Vl(i||500,v,new Error(m),!0)}function Al(i){let r=Object.entries(i);for(let l=r.length-1;l>=0;l--){let[s,c]=r[l];if(Rr(c))return{key:s,result:c}}}function up(i){let r=typeof i=="string"?lr(i):i;return wi(Ze({},r,{hash:""}))}function bv(i,r){return i.pathname!==r.pathname||i.search!==r.search?!1:i.hash===""?r.hash!=="":i.hash===r.hash?!0:r.hash!==""}function Pv(i){return cp(i.result)&&fv.has(i.result.status)}function or(i){return i.type===He.deferred}function Ut(i){return i.type===He.error}function Rr(i){return(i&&i.type)===He.redirect}function Sf(i){return typeof i=="object"&&i!=null&&"type"in i&&"data"in i&&"init"in i&&i.type==="DataWithResponseInit"}function Tv(i){let r=i;return r&&typeof r=="object"&&typeof r.data=="object"&&typeof r.subscribe=="function"&&typeof r.cancel=="function"&&typeof r.resolveData=="function"}function cp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.headers=="object"&&typeof i.body<"u"}function Rv(i){return dv.has(i.toLowerCase())}function ln(i){return uv.has(i.toLowerCase())}async function zv(i,r,l,s,c){let f=Object.entries(r);for(let p=0;p<f.length;p++){let[v,m]=f[p],S=i.find(P=>(P==null?void 0:P.route.id)===v);if(!S)continue;let k=s.find(P=>P.route.id===S.route.id),x=k!=null&&!ap(k,S)&&(c&&c[S.route.id])!==void 0;or(m)&&x&&await pu(m,l,!1).then(P=>{P&&(r[v]=P)})}}async function Lv(i,r,l){for(let s=0;s<l.length;s++){let{key:c,routeId:f,controller:p}=l[s],v=r[c];i.find(S=>(S==null?void 0:S.route.id)===f)&&or(v)&&(Te(p,"Expected an AbortController for revalidating fetcher deferred result"),await pu(v,p.signal,!0).then(S=>{S&&(r[c]=S)}))}}async function pu(i,r,l){if(l===void 0&&(l=!1),!await i.deferredData.resolveData(r)){if(l)try{return{type:He.data,data:i.deferredData.unwrappedData}}catch(c){return{type:He.error,error:c}}return{type:He.data,data:i.deferredData.data}}}function mu(i){return new URLSearchParams(i).getAll("index").some(r=>r==="")}function di(i,r){let l=typeof r=="string"?lr(r).search:r.search;if(i[i.length-1].route.index&&mu(l||""))return i[i.length-1];let s=op(i);return s[s.length-1]}function kf(i){let{formMethod:r,formAction:l,formEncType:s,text:c,formData:f,json:p}=i;if(!(!r||!l||!s)){if(c!=null)return{formMethod:r,formAction:l,formEncType:s,formData:void 0,json:void 0,text:c};if(f!=null)return{formMethod:r,formAction:l,formEncType:s,formData:f,json:void 0,text:void 0};if(p!==void 0)return{formMethod:r,formAction:l,formEncType:s,formData:void 0,json:p,text:void 0}}}function js(i,r){return r?{state:"loading",location:i,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:i,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Nv(i,r){return{state:"submitting",location:i,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function ai(i,r){return i?{state:"loading",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:r}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r}}function $v(i,r){return{state:"submitting",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:r?r.data:void 0}}function tr(i){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:i}}function Dv(i,r){try{let l=i.sessionStorage.getItem(lp);if(l){let s=JSON.parse(l);for(let[c,f]of Object.entries(s||{}))f&&Array.isArray(f)&&r.set(c,new Set(f||[]))}}catch{}}function Ov(i,r){if(r.size>0){let l={};for(let[s,c]of r)l[s]=[...c];try{i.sessionStorage.setItem(lp,JSON.stringify(l))}catch(s){vo(!1,"Failed to save applied view transitions in sessionStorage ("+s+").")}}}/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(i[s]=l[s])}return i},go.apply(this,arguments)}const Xl=D.createContext(null),dp=D.createContext(null),xo=D.createContext(null),hu=D.createContext(null),ar=D.createContext({outlet:null,matches:[],isDataRoute:!1}),fp=D.createContext(null);function Mv(i,r){let{relative:l}={};Si()||Te(!1);let{basename:s,navigator:c}=D.useContext(xo),{hash:f,pathname:p,search:v}=Uv(i,{relative:l}),m=p;return s!=="/"&&(m=p==="/"?s:Rn([s,p])),c.createHref({pathname:m,search:v,hash:f})}function Si(){return D.useContext(hu)!=null}function ql(){return Si()||Te(!1),D.useContext(hu).location}function pp(i){D.useContext(xo).static||D.useLayoutEffect(i)}function mp(){let{isDataRoute:i}=D.useContext(ar);return i?qv():Av()}function Av(){Si()||Te(!1);let i=D.useContext(Xl),{basename:r,future:l,navigator:s}=D.useContext(xo),{matches:c}=D.useContext(ar),{pathname:f}=ql(),p=JSON.stringify(cu(c,l.v7_relativeSplatPath)),v=D.useRef(!1);return pp(()=>{v.current=!0}),D.useCallback(function(S,k){if(k===void 0&&(k={}),!v.current)return;if(typeof S=="number"){s.go(S);return}let x=du(S,JSON.parse(p),f,k.relative==="path");i==null&&r!=="/"&&(x.pathname=x.pathname==="/"?r:Rn([r,x.pathname])),(k.replace?s.replace:s.push)(x,k.state,k)},[r,s,p,f,i])}const Iv=D.createContext(null);function Fv(i){let r=D.useContext(ar).outlet;return r&&D.createElement(Iv.Provider,{value:i},r)}function Uv(i,r){let{relative:l}=r===void 0?{}:r,{future:s}=D.useContext(xo),{matches:c}=D.useContext(ar),{pathname:f}=ql(),p=JSON.stringify(cu(c,s.v7_relativeSplatPath));return D.useMemo(()=>du(i,JSON.parse(p),f,l==="path"),[i,p,f,l])}function jv(i,r,l,s){Si()||Te(!1);let{navigator:c,static:f}=D.useContext(xo),{matches:p}=D.useContext(ar),v=p[p.length-1],m=v?v.params:{};v&&v.pathname;let S=v?v.pathnameBase:"/";v&&v.route;let k=ql(),x;x=k;let P=x.pathname||"/",N=P;if(S!=="/"){let V=S.replace(/^\//,"").split("/");N="/"+P.replace(/^\//,"").split("/").slice(V.length).join("/")}let H=!f&&l&&l.matches&&l.matches.length>0?l.matches:nr(i,{pathname:N});return Qv(H&&H.map(V=>Object.assign({},V,{params:Object.assign({},m,V.params),pathname:Rn([S,c.encodeLocation?c.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?S:Rn([S,c.encodeLocation?c.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),p,l,s)}function Vv(){let i=Gv(),r=vi(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),l=i instanceof Error?i.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},r),l?D.createElement("pre",{style:c},l):null,null)}const Bv=D.createElement(Vv,null);class Hv extends D.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,l){return l.location!==r.location||l.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:l.error,location:l.location,revalidation:r.revalidation||l.revalidation}}componentDidCatch(r,l){console.error("React Router caught the following error during render",r,l)}render(){return this.state.error!==void 0?D.createElement(ar.Provider,{value:this.props.routeContext},D.createElement(fp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wv(i){let{routeContext:r,match:l,children:s}=i,c=D.useContext(Xl);return c&&c.static&&c.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=l.route.id),D.createElement(ar.Provider,{value:r},s)}function Qv(i,r,l,s){var c;if(r===void 0&&(r=[]),l===void 0&&(l=null),s===void 0&&(s=null),i==null){var f;if(!l)return null;if(l.errors)i=l.matches;else if((f=s)!=null&&f.v7_partialHydration&&r.length===0&&!l.initialized&&l.matches.length>0)i=l.matches;else return null}let p=i,v=(c=l)==null?void 0:c.errors;if(v!=null){let k=p.findIndex(x=>x.route.id&&(v==null?void 0:v[x.route.id])!==void 0);k>=0||Te(!1),p=p.slice(0,Math.min(p.length,k+1))}let m=!1,S=-1;if(l&&s&&s.v7_partialHydration)for(let k=0;k<p.length;k++){let x=p[k];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(S=k),x.route.id){let{loaderData:P,errors:N}=l,H=x.route.loader&&P[x.route.id]===void 0&&(!N||N[x.route.id]===void 0);if(x.route.lazy||H){m=!0,S>=0?p=p.slice(0,S+1):p=[p[0]];break}}}return p.reduceRight((k,x,P)=>{let N,H=!1,F=null,V=null;l&&(N=v&&x.route.id?v[x.route.id]:void 0,F=x.route.errorElement||Bv,m&&(S<0&&P===0?(Jv("route-fallback"),H=!0,V=null):S===P&&(H=!0,V=x.route.hydrateFallbackElement||null)));let ye=r.concat(p.slice(0,P+1)),X=()=>{let W;return N?W=F:H?W=V:x.route.Component?W=D.createElement(x.route.Component,null):x.route.element?W=x.route.element:W=k,D.createElement(Wv,{match:x,routeContext:{outlet:k,matches:ye,isDataRoute:l!=null},children:W})};return l&&(x.route.ErrorBoundary||x.route.errorElement||P===0)?D.createElement(Hv,{location:l.location,revalidation:l.revalidation,component:F,error:N,children:X(),routeContext:{outlet:null,matches:ye,isDataRoute:!0}}):X()},null)}var hp=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(hp||{}),vp=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(vp||{});function gp(i){let r=D.useContext(Xl);return r||Te(!1),r}function yp(i){let r=D.useContext(dp);return r||Te(!1),r}function Kv(i){let r=D.useContext(ar);return r||Te(!1),r}function xp(i){let r=Kv(),l=r.matches[r.matches.length-1];return l.route.id||Te(!1),l.route.id}function Gv(){var i;let r=D.useContext(fp),l=yp(),s=xp();return r!==void 0?r:(i=l.errors)==null?void 0:i[s]}let Yv=0;function Xv(i){let{router:r,basename:l}=gp(hp.UseBlocker),s=yp(vp.UseBlocker),[c,f]=D.useState(""),p=D.useCallback(v=>{if(typeof i!="function")return!!i;if(l==="/")return i(v);let{currentLocation:m,nextLocation:S,historyAction:k}=v;return i({currentLocation:go({},m,{pathname:$r(m.pathname,l)||m.pathname}),nextLocation:go({},S,{pathname:$r(S.pathname,l)||S.pathname}),historyAction:k})},[l,i]);return D.useEffect(()=>{let v=String(++Yv);return f(v),()=>r.deleteBlocker(v)},[r]),D.useEffect(()=>{c!==""&&r.getBlocker(c,p)},[r,c,p]),c&&s.blockers.has(c)?s.blockers.get(c):fo}function qv(){let{router:i}=gp(),r=xp(),l=D.useRef(!1);return pp(()=>{l.current=!0}),D.useCallback(function(c,f){f===void 0&&(f={}),l.current&&(typeof c=="number"?i.navigate(c):i.navigate(c,go({fromRouteId:r},f)))},[i,r])}const Ef={};function Jv(i,r,l){Ef[i]||(Ef[i]=!0)}function Zv(i,r){i==null||i.v7_startTransition,(i==null?void 0:i.v7_relativeSplatPath)===void 0&&(!r||r.v7_relativeSplatPath),r&&(r.v7_fetcherPersist,r.v7_normalizeFormMethod,r.v7_partialHydration,r.v7_skipActionErrorRevalidation)}function r0(i){return Fv(i.context)}function eg(i){let{basename:r="/",children:l=null,location:s,navigationType:c=at.Pop,navigator:f,static:p=!1,future:v}=i;Si()&&Te(!1);let m=r.replace(/^\/*/,"/"),S=D.useMemo(()=>({basename:m,navigator:f,static:p,future:go({v7_relativeSplatPath:!1},v)}),[m,v,f,p]);typeof s=="string"&&(s=lr(s));let{pathname:k="/",search:x="",hash:P="",state:N=null,key:H="default"}=s,F=D.useMemo(()=>{let V=$r(k,m);return V==null?null:{location:{pathname:V,search:x,hash:P,state:N,key:H},navigationType:c}},[m,k,x,P,N,H,c]);return F==null?null:D.createElement(xo.Provider,{value:S},D.createElement(hu.Provider,{children:l,value:F}))}new Promise(()=>{});function tg(i){let r={hasErrorBoundary:i.ErrorBoundary!=null||i.errorElement!=null};return i.Component&&Object.assign(r,{element:D.createElement(i.Component),Component:void 0}),i.HydrateFallback&&Object.assign(r,{hydrateFallbackElement:D.createElement(i.HydrateFallback),HydrateFallback:void 0}),i.ErrorBoundary&&Object.assign(r,{errorElement:D.createElement(i.ErrorBoundary),ErrorBoundary:void 0}),r}/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(i){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(i[s]=l[s])}return i},Bl.apply(this,arguments)}const ng="6";try{window.__reactRouterVersion=ng}catch{}function rg(i,r){return vv({basename:r==null?void 0:r.basename,future:Bl({},r==null?void 0:r.future,{v7_prependBasename:!0}),history:Uh({window:r==null?void 0:r.window}),hydrationData:(r==null?void 0:r.hydrationData)||og(),routes:i,mapRouteProperties:tg,dataStrategy:r==null?void 0:r.dataStrategy,patchRoutesOnNavigation:r==null?void 0:r.patchRoutesOnNavigation,window:r==null?void 0:r.window}).initialize()}function og(){var i;let r=(i=window)==null?void 0:i.__staticRouterHydrationData;return r&&r.errors&&(r=Bl({},r,{errors:ig(r.errors)})),r}function ig(i){if(!i)return null;let r=Object.entries(i),l={};for(let[s,c]of r)if(c&&c.__type==="RouteErrorResponse")l[s]=new Vl(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let f=window[c.__subType];if(typeof f=="function")try{let p=new f(c.message);p.stack="",l[s]=p}catch{}}if(l[s]==null){let f=new Error(c.message);f.stack="",l[s]=f}}else l[s]=c;return l}const lg=D.createContext({isTransitioning:!1}),ag=D.createContext(new Map),sg="startTransition",_f=Nh[sg],ug="flushSync",Cf=Fh[ug];function cg(i){_f?_f(i):i()}function si(i){Cf?Cf(i):i()}class dg{constructor(){this.status="pending",this.promise=new Promise((r,l)=>{this.resolve=s=>{this.status==="pending"&&(this.status="resolved",r(s))},this.reject=s=>{this.status==="pending"&&(this.status="rejected",l(s))}})}}function fg(i){let{fallbackElement:r,router:l,future:s}=i,[c,f]=D.useState(l.state),[p,v]=D.useState(),[m,S]=D.useState({isTransitioning:!1}),[k,x]=D.useState(),[P,N]=D.useState(),[H,F]=D.useState(),V=D.useRef(new Map),{v7_startTransition:ye}=s||{},X=D.useCallback(J=>{ye?cg(J):J()},[ye]),W=D.useCallback((J,Se)=>{let{deletedFetchers:ue,flushSync:Fe,viewTransitionOpts:we}=Se;J.fetchers.forEach((Ce,ze)=>{Ce.data!==void 0&&V.current.set(ze,Ce.data)}),ue.forEach(Ce=>V.current.delete(Ce));let _e=l.window==null||l.window.document==null||typeof l.window.document.startViewTransition!="function";if(!we||_e){Fe?si(()=>f(J)):X(()=>f(J));return}if(Fe){si(()=>{P&&(k&&k.resolve(),P.skipTransition()),S({isTransitioning:!0,flushSync:!0,currentLocation:we.currentLocation,nextLocation:we.nextLocation})});let Ce=l.window.document.startViewTransition(()=>{si(()=>f(J))});Ce.finished.finally(()=>{si(()=>{x(void 0),N(void 0),v(void 0),S({isTransitioning:!1})})}),si(()=>N(Ce));return}P?(k&&k.resolve(),P.skipTransition(),F({state:J,currentLocation:we.currentLocation,nextLocation:we.nextLocation})):(v(J),S({isTransitioning:!0,flushSync:!1,currentLocation:we.currentLocation,nextLocation:we.nextLocation}))},[l.window,P,k,V,X]);D.useLayoutEffect(()=>l.subscribe(W),[l,W]),D.useEffect(()=>{m.isTransitioning&&!m.flushSync&&x(new dg)},[m]),D.useEffect(()=>{if(k&&p&&l.window){let J=p,Se=k.promise,ue=l.window.document.startViewTransition(async()=>{X(()=>f(J)),await Se});ue.finished.finally(()=>{x(void 0),N(void 0),v(void 0),S({isTransitioning:!1})}),N(ue)}},[X,p,k,l.window]),D.useEffect(()=>{k&&p&&c.location.key===p.location.key&&k.resolve()},[k,P,c.location,p]),D.useEffect(()=>{!m.isTransitioning&&H&&(v(H.state),S({isTransitioning:!0,flushSync:!1,currentLocation:H.currentLocation,nextLocation:H.nextLocation}),F(void 0))},[m.isTransitioning,H]),D.useEffect(()=>{},[]);let re=D.useMemo(()=>({createHref:l.createHref,encodeLocation:l.encodeLocation,go:J=>l.navigate(J),push:(J,Se,ue)=>l.navigate(J,{state:Se,preventScrollReset:ue==null?void 0:ue.preventScrollReset}),replace:(J,Se,ue)=>l.navigate(J,{replace:!0,state:Se,preventScrollReset:ue==null?void 0:ue.preventScrollReset})}),[l]),me=l.basename||"/",Ae=D.useMemo(()=>({router:l,navigator:re,static:!1,basename:me}),[l,re,me]),T=D.useMemo(()=>({v7_relativeSplatPath:l.future.v7_relativeSplatPath}),[l.future.v7_relativeSplatPath]);return D.useEffect(()=>Zv(s,l.future),[s,l.future]),D.createElement(D.Fragment,null,D.createElement(Xl.Provider,{value:Ae},D.createElement(dp.Provider,{value:c},D.createElement(ag.Provider,{value:V.current},D.createElement(lg.Provider,{value:m},D.createElement(eg,{basename:me,location:c.location,navigationType:c.historyAction,navigator:re,future:T},c.initialized||l.future.v7_partialHydration?D.createElement(pg,{routes:l.routes,future:l.future,state:c}):r))))),null)}const pg=D.memo(mg);function mg(i){let{routes:r,future:l,state:s}=i;return jv(r,void 0,s,l)}var bf;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(bf||(bf={}));var Pf;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Pf||(Pf={}));const hg="modulepreload",vg=function(i,r){return new URL(i,r).href},Tf={},ru=function(r,l,s){let c=Promise.resolve();if(l&&l.length>0){const p=document.getElementsByTagName("link"),v=document.querySelector("meta[property=csp-nonce]"),m=(v==null?void 0:v.nonce)||(v==null?void 0:v.getAttribute("nonce"));c=Promise.allSettled(l.map(S=>{if(S=vg(S,s),S in Tf)return;Tf[S]=!0;const k=S.endsWith(".css"),x=k?'[rel="stylesheet"]':"";if(!!s)for(let H=p.length-1;H>=0;H--){const F=p[H];if(F.href===S&&(!k||F.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${S}"]${x}`))return;const N=document.createElement("link");if(N.rel=k?"stylesheet":hg,k||(N.as="script"),N.crossOrigin="",N.href=S,m&&N.setAttribute("nonce",m),document.head.appendChild(N),k)return new Promise((H,F)=>{N.addEventListener("load",H),N.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${S}`)))})}))}function f(p){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=p,window.dispatchEvent(v),!v.defaultPrevented)throw p}return c.then(p=>{for(const v of p||[])v.status==="rejected"&&f(v.reason);return r().catch(f)})};var Vs,dt;(function(i){i.CONNECTED="connected",i.LOADING="loading",i.RECONNECTING="reconnecting",i.CONNECTION_LOST="connection-lost"})(dt||(dt={}));class gg{constructor(r){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=r,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(l=>{var s;(s=l.active)===null||s===void 0||s.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(r){this.stateChangeListeners.add(r)}removeStateChangeListener(r){this.stateChangeListeners.delete(r)}loadingStarted(){this.state=dt.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(dt.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(dt.CONNECTION_LOST)}decreaseLoadingCount(r){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=r))}get state(){return this.connectionState}set state(r){if(r!==this.connectionState){const l=this.connectionState;this.connectionState=r,this.loadingCount=0;for(const s of this.stateChangeListeners)s(l,this.connectionState)}}get online(){return this.connectionState===dt.CONNECTED||this.connectionState===dt.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(r){typeof r.data=="object"&&r.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(r.data.result===!0&&(this.state=dt.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const yg=i=>!!(i==="localhost"||i==="[::1]"||/^127\.\d+\.\d+\.\d+$/u.exec(i)),Il=window;if(!(!((Vs=Il.Vaadin)===null||Vs===void 0)&&Vs.connectionState)){let i;yg(window.location.hostname)?i=!0:i=navigator.onLine,Il.Vaadin||(Il.Vaadin={}),Il.Vaadin.connectionState=new gg(i?dt.CONNECTED:dt.CONNECTION_LOST)}function jt(i,r,l,s){var c=arguments.length,f=c<3?r:s===null?s=Object.getOwnPropertyDescriptor(r,l):s,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")f=Reflect.decorate(i,r,l,s);else for(var v=i.length-1;v>=0;v--)(p=i[v])&&(f=(c<3?p(f):c>3?p(r,l,f):p(r,l))||f);return c>3&&f&&Object.defineProperty(r,l,f),f}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ul=globalThis,vu=Ul.ShadowRoot&&(Ul.ShadyCSS===void 0||Ul.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gu=Symbol(),Rf=new WeakMap;let yu=class{constructor(r,l,s){if(this._$cssResult$=!0,s!==gu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=l}get styleSheet(){let r=this.o;const l=this.t;if(vu&&r===void 0){const s=l!==void 0&&l.length===1;s&&(r=Rf.get(l)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),s&&Rf.set(l,r))}return r}toString(){return this.cssText}};const wp=i=>new yu(typeof i=="string"?i:i+"",void 0,gu),ot=(i,...r)=>{const l=i.length===1?i[0]:r.reduce((s,c,f)=>s+(p=>{if(p._$cssResult$===!0)return p.cssText;if(typeof p=="number")return p;throw Error("Value passed to 'css' function must be a 'css' function result: "+p+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(c)+i[f+1],i[0]);return new yu(l,i,gu)},Sp=(i,r)=>{if(vu)i.adoptedStyleSheets=r.map(l=>l instanceof CSSStyleSheet?l:l.styleSheet);else for(const l of r){const s=document.createElement("style"),c=Ul.litNonce;c!==void 0&&s.setAttribute("nonce",c),s.textContent=l.cssText,i.appendChild(s)}},zf=vu?i=>i:i=>i instanceof CSSStyleSheet?(r=>{let l="";for(const s of r.cssRules)l+=s.cssText;return wp(l)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xg,defineProperty:wg,getOwnPropertyDescriptor:Sg,getOwnPropertyNames:kg,getOwnPropertySymbols:Eg,getPrototypeOf:_g}=Object,ir=globalThis,Lf=ir.trustedTypes,Cg=Lf?Lf.emptyScript:"",Bs=ir.reactiveElementPolyfillSupport,fi=(i,r)=>i,Hl={toAttribute(i,r){switch(r){case Boolean:i=i?Cg:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,r){let l=i;switch(r){case Boolean:l=i!==null;break;case Number:l=i===null?null:Number(i);break;case Object:case Array:try{l=JSON.parse(i)}catch{l=null}}return l}},xu=(i,r)=>!xg(i,r),Nf={attribute:!0,type:String,converter:Hl,reflect:!1,hasChanged:xu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ir.litPropertyMetadata??(ir.litPropertyMetadata=new WeakMap);let po=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??(this.l=[])).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,l=Nf){if(l.state&&(l.attribute=!1),this._$Ei(),this.elementProperties.set(r,l),!l.noAccessor){const s=Symbol(),c=this.getPropertyDescriptor(r,s,l);c!==void 0&&wg(this.prototype,r,c)}}static getPropertyDescriptor(r,l,s){const{get:c,set:f}=Sg(this.prototype,r)??{get(){return this[l]},set(p){this[l]=p}};return{get(){return c==null?void 0:c.call(this)},set(p){const v=c==null?void 0:c.call(this);f.call(this,p),this.requestUpdate(r,v,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Nf}static _$Ei(){if(this.hasOwnProperty(fi("elementProperties")))return;const r=_g(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(fi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fi("properties"))){const l=this.properties,s=[...kg(l),...Eg(l)];for(const c of s)this.createProperty(c,l[c])}const r=this[Symbol.metadata];if(r!==null){const l=litPropertyMetadata.get(r);if(l!==void 0)for(const[s,c]of l)this.elementProperties.set(s,c)}this._$Eh=new Map;for(const[l,s]of this.elementProperties){const c=this._$Eu(l,s);c!==void 0&&this._$Eh.set(c,l)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const l=[];if(Array.isArray(r)){const s=new Set(r.flat(1/0).reverse());for(const c of s)l.unshift(zf(c))}else r!==void 0&&l.push(zf(r));return l}static _$Eu(r,l){const s=l.attribute;return s===!1?void 0:typeof s=="string"?s:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var r;this._$ES=new Promise(l=>this.enableUpdating=l),this._$AL=new Map,this._$E_(),this.requestUpdate(),(r=this.constructor.l)==null||r.forEach(l=>l(this))}addController(r){var l;(this._$EO??(this._$EO=new Set)).add(r),this.renderRoot!==void 0&&this.isConnected&&((l=r.hostConnected)==null||l.call(r))}removeController(r){var l;(l=this._$EO)==null||l.delete(r)}_$E_(){const r=new Map,l=this.constructor.elementProperties;for(const s of l.keys())this.hasOwnProperty(s)&&(r.set(s,this[s]),delete this[s]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Sp(r,this.constructor.elementStyles),r}connectedCallback(){var r;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$EO)==null||r.forEach(l=>{var s;return(s=l.hostConnected)==null?void 0:s.call(l)})}enableUpdating(r){}disconnectedCallback(){var r;(r=this._$EO)==null||r.forEach(l=>{var s;return(s=l.hostDisconnected)==null?void 0:s.call(l)})}attributeChangedCallback(r,l,s){this._$AK(r,s)}_$EC(r,l){var f;const s=this.constructor.elementProperties.get(r),c=this.constructor._$Eu(r,s);if(c!==void 0&&s.reflect===!0){const p=(((f=s.converter)==null?void 0:f.toAttribute)!==void 0?s.converter:Hl).toAttribute(l,s.type);this._$Em=r,p==null?this.removeAttribute(c):this.setAttribute(c,p),this._$Em=null}}_$AK(r,l){var f;const s=this.constructor,c=s._$Eh.get(r);if(c!==void 0&&this._$Em!==c){const p=s.getPropertyOptions(c),v=typeof p.converter=="function"?{fromAttribute:p.converter}:((f=p.converter)==null?void 0:f.fromAttribute)!==void 0?p.converter:Hl;this._$Em=c,this[c]=v.fromAttribute(l,p.type),this._$Em=null}}requestUpdate(r,l,s){if(r!==void 0){if(s??(s=this.constructor.getPropertyOptions(r)),!(s.hasChanged??xu)(this[r],l))return;this.P(r,l,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(r,l,s){this._$AL.has(r)||this._$AL.set(r,l),s.reflect===!0&&this._$Em!==r&&(this._$Ej??(this._$Ej=new Set)).add(r)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(l){Promise.reject(l)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[f,p]of this._$Ep)this[f]=p;this._$Ep=void 0}const c=this.constructor.elementProperties;if(c.size>0)for(const[f,p]of c)p.wrapped!==!0||this._$AL.has(f)||this[f]===void 0||this.P(f,this[f],p)}let r=!1;const l=this._$AL;try{r=this.shouldUpdate(l),r?(this.willUpdate(l),(s=this._$EO)==null||s.forEach(c=>{var f;return(f=c.hostUpdate)==null?void 0:f.call(c)}),this.update(l)):this._$EU()}catch(c){throw r=!1,this._$EU(),c}r&&this._$AE(l)}willUpdate(r){}_$AE(r){var l;(l=this._$EO)==null||l.forEach(s=>{var c;return(c=s.hostUpdated)==null?void 0:c.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Ej&&(this._$Ej=this._$Ej.forEach(l=>this._$EC(l,this[l]))),this._$EU()}updated(r){}firstUpdated(r){}};po.elementStyles=[],po.shadowRootOptions={mode:"open"},po[fi("elementProperties")]=new Map,po[fi("finalized")]=new Map,Bs==null||Bs({ReactiveElement:po}),(ir.reactiveElementVersions??(ir.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pi=globalThis,Wl=pi.trustedTypes,$f=Wl?Wl.createPolicy("lit-html",{createHTML:i=>i}):void 0,kp="$lit$",rr=`lit$${Math.random().toFixed(9).slice(2)}$`,Ep="?"+rr,bg=`<${Ep}>`,Dr=document,gi=()=>Dr.createComment(""),yi=i=>i===null||typeof i!="object"&&typeof i!="function",wu=Array.isArray,Pg=i=>wu(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Hs=`[ 	
\f\r]`,ui=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Df=/-->/g,Of=/>/g,Pr=RegExp(`>|${Hs}(?:([^\\s"'>=/]+)(${Hs}*=${Hs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mf=/'/g,Af=/"/g,_p=/^(?:script|style|textarea|title)$/i,Cp=i=>(r,...l)=>({_$litType$:i,strings:r,values:l}),Tg=Cp(1),l0=Cp(2),Or=Symbol.for("lit-noChange"),ht=Symbol.for("lit-nothing"),If=new WeakMap,zr=Dr.createTreeWalker(Dr,129);function bp(i,r){if(!wu(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return $f!==void 0?$f.createHTML(r):r}const Rg=(i,r)=>{const l=i.length-1,s=[];let c,f=r===2?"<svg>":r===3?"<math>":"",p=ui;for(let v=0;v<l;v++){const m=i[v];let S,k,x=-1,P=0;for(;P<m.length&&(p.lastIndex=P,k=p.exec(m),k!==null);)P=p.lastIndex,p===ui?k[1]==="!--"?p=Df:k[1]!==void 0?p=Of:k[2]!==void 0?(_p.test(k[2])&&(c=RegExp("</"+k[2],"g")),p=Pr):k[3]!==void 0&&(p=Pr):p===Pr?k[0]===">"?(p=c??ui,x=-1):k[1]===void 0?x=-2:(x=p.lastIndex-k[2].length,S=k[1],p=k[3]===void 0?Pr:k[3]==='"'?Af:Mf):p===Af||p===Mf?p=Pr:p===Df||p===Of?p=ui:(p=Pr,c=void 0);const N=p===Pr&&i[v+1].startsWith("/>")?" ":"";f+=p===ui?m+bg:x>=0?(s.push(S),m.slice(0,x)+kp+m.slice(x)+rr+N):m+rr+(x===-2?v:N)}return[bp(i,f+(i[l]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),s]};class xi{constructor({strings:r,_$litType$:l},s){let c;this.parts=[];let f=0,p=0;const v=r.length-1,m=this.parts,[S,k]=Rg(r,l);if(this.el=xi.createElement(S,s),zr.currentNode=this.el.content,l===2||l===3){const x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(c=zr.nextNode())!==null&&m.length<v;){if(c.nodeType===1){if(c.hasAttributes())for(const x of c.getAttributeNames())if(x.endsWith(kp)){const P=k[p++],N=c.getAttribute(x).split(rr),H=/([.?@])?(.*)/.exec(P);m.push({type:1,index:f,name:H[2],strings:N,ctor:H[1]==="."?Lg:H[1]==="?"?Ng:H[1]==="@"?$g:Jl}),c.removeAttribute(x)}else x.startsWith(rr)&&(m.push({type:6,index:f}),c.removeAttribute(x));if(_p.test(c.tagName)){const x=c.textContent.split(rr),P=x.length-1;if(P>0){c.textContent=Wl?Wl.emptyScript:"";for(let N=0;N<P;N++)c.append(x[N],gi()),zr.nextNode(),m.push({type:2,index:++f});c.append(x[P],gi())}}}else if(c.nodeType===8)if(c.data===Ep)m.push({type:2,index:f});else{let x=-1;for(;(x=c.data.indexOf(rr,x+1))!==-1;)m.push({type:7,index:f}),x+=rr.length-1}f++}}static createElement(r,l){const s=Dr.createElement("template");return s.innerHTML=r,s}}function yo(i,r,l=i,s){var p,v;if(r===Or)return r;let c=s!==void 0?(p=l._$Co)==null?void 0:p[s]:l._$Cl;const f=yi(r)?void 0:r._$litDirective$;return(c==null?void 0:c.constructor)!==f&&((v=c==null?void 0:c._$AO)==null||v.call(c,!1),f===void 0?c=void 0:(c=new f(i),c._$AT(i,l,s)),s!==void 0?(l._$Co??(l._$Co=[]))[s]=c:l._$Cl=c),c!==void 0&&(r=yo(i,c._$AS(i,r.values),c,s)),r}class zg{constructor(r,l){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:l},parts:s}=this._$AD,c=((r==null?void 0:r.creationScope)??Dr).importNode(l,!0);zr.currentNode=c;let f=zr.nextNode(),p=0,v=0,m=s[0];for(;m!==void 0;){if(p===m.index){let S;m.type===2?S=new ki(f,f.nextSibling,this,r):m.type===1?S=new m.ctor(f,m.name,m.strings,this,r):m.type===6&&(S=new Dg(f,this,r)),this._$AV.push(S),m=s[++v]}p!==(m==null?void 0:m.index)&&(f=zr.nextNode(),p++)}return zr.currentNode=Dr,c}p(r){let l=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(r,s,l),l+=s.strings.length-2):s._$AI(r[l])),l++}}class ki{get _$AU(){var r;return((r=this._$AM)==null?void 0:r._$AU)??this._$Cv}constructor(r,l,s,c){this.type=2,this._$AH=ht,this._$AN=void 0,this._$AA=r,this._$AB=l,this._$AM=s,this.options=c,this._$Cv=(c==null?void 0:c.isConnected)??!0}get parentNode(){let r=this._$AA.parentNode;const l=this._$AM;return l!==void 0&&(r==null?void 0:r.nodeType)===11&&(r=l.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,l=this){r=yo(this,r,l),yi(r)?r===ht||r==null||r===""?(this._$AH!==ht&&this._$AR(),this._$AH=ht):r!==this._$AH&&r!==Or&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):Pg(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==ht&&yi(this._$AH)?this._$AA.nextSibling.data=r:this.T(Dr.createTextNode(r)),this._$AH=r}$(r){var f;const{values:l,_$litType$:s}=r,c=typeof s=="number"?this._$AC(r):(s.el===void 0&&(s.el=xi.createElement(bp(s.h,s.h[0]),this.options)),s);if(((f=this._$AH)==null?void 0:f._$AD)===c)this._$AH.p(l);else{const p=new zg(c,this),v=p.u(this.options);p.p(l),this.T(v),this._$AH=p}}_$AC(r){let l=If.get(r.strings);return l===void 0&&If.set(r.strings,l=new xi(r)),l}k(r){wu(this._$AH)||(this._$AH=[],this._$AR());const l=this._$AH;let s,c=0;for(const f of r)c===l.length?l.push(s=new ki(this.O(gi()),this.O(gi()),this,this.options)):s=l[c],s._$AI(f),c++;c<l.length&&(this._$AR(s&&s._$AB.nextSibling,c),l.length=c)}_$AR(r=this._$AA.nextSibling,l){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,l);r&&r!==this._$AB;){const c=r.nextSibling;r.remove(),r=c}}setConnected(r){var l;this._$AM===void 0&&(this._$Cv=r,(l=this._$AP)==null||l.call(this,r))}}let Jl=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,l,s,c,f){this.type=1,this._$AH=ht,this._$AN=void 0,this.element=r,this.name=l,this._$AM=c,this.options=f,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ht}_$AI(r,l=this,s,c){const f=this.strings;let p=!1;if(f===void 0)r=yo(this,r,l,0),p=!yi(r)||r!==this._$AH&&r!==Or,p&&(this._$AH=r);else{const v=r;let m,S;for(r=f[0],m=0;m<f.length-1;m++)S=yo(this,v[s+m],l,m),S===Or&&(S=this._$AH[m]),p||(p=!yi(S)||S!==this._$AH[m]),S===ht?r=ht:r!==ht&&(r+=(S??"")+f[m+1]),this._$AH[m]=S}p&&!c&&this.j(r)}j(r){r===ht?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}};class Lg extends Jl{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===ht?void 0:r}}class Ng extends Jl{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==ht)}}class $g extends Jl{constructor(r,l,s,c,f){super(r,l,s,c,f),this.type=5}_$AI(r,l=this){if((r=yo(this,r,l,0)??ht)===Or)return;const s=this._$AH,c=r===ht&&s!==ht||r.capture!==s.capture||r.once!==s.once||r.passive!==s.passive,f=r!==ht&&(s===ht||c);c&&this.element.removeEventListener(this.name,this,s),f&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){var l;typeof this._$AH=="function"?this._$AH.call(((l=this.options)==null?void 0:l.host)??this.element,r):this._$AH.handleEvent(r)}}class Dg{constructor(r,l,s){this.element=r,this.type=6,this._$AN=void 0,this._$AM=l,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(r){yo(this,r)}}const Ws=pi.litHtmlPolyfillSupport;Ws==null||Ws(xi,ki),(pi.litHtmlVersions??(pi.litHtmlVersions=[])).push("3.2.1");const Og=(i,r,l)=>{const s=(l==null?void 0:l.renderBefore)??r;let c=s._$litPart$;if(c===void 0){const f=(l==null?void 0:l.renderBefore)??null;s._$litPart$=c=new ki(r.insertBefore(gi(),f),f,void 0,l??{})}return c._$AI(i),c};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Nr=class extends po{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var l;const r=super.createRenderRoot();return(l=this.renderOptions).renderBefore??(l.renderBefore=r.firstChild),r}update(r){const l=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=Og(l,this.renderRoot,this.renderOptions)}connectedCallback(){var r;super.connectedCallback(),(r=this._$Do)==null||r.setConnected(!0)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this._$Do)==null||r.setConnected(!1)}render(){return Or}};var qf;Nr._$litElement$=!0,Nr.finalized=!0,(qf=globalThis.litElementHydrateSupport)==null||qf.call(globalThis,{LitElement:Nr});const Qs=globalThis.litElementPolyfillSupport;Qs==null||Qs({LitElement:Nr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mg={attribute:!0,type:String,converter:Hl,reflect:!1,hasChanged:xu},Ag=(i=Mg,r,l)=>{const{kind:s,metadata:c}=l;let f=globalThis.litPropertyMetadata.get(c);if(f===void 0&&globalThis.litPropertyMetadata.set(c,f=new Map),f.set(l.name,i),s==="accessor"){const{name:p}=l;return{set(v){const m=r.get.call(this);r.set.call(this,v),this.requestUpdate(p,m,i)},init(v){return v!==void 0&&this.P(p,void 0,i),v}}}if(s==="setter"){const{name:p}=l;return function(v){const m=this[p];r.call(this,v),this.requestUpdate(p,m,i)}}throw Error("Unsupported decorator location: "+s)};function Vt(i){return(r,l)=>typeof l=="object"?Ag(i,r,l):((s,c,f)=>{const p=c.hasOwnProperty(f);return c.constructor.createProperty(f,p?{...s,wrapped:!0}:s),p?Object.getOwnPropertyDescriptor(c,f):void 0})(i,r,l)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ig={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Fg=i=>(...r)=>({_$litDirective$:i,values:r});let Ug=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,l,s){this._$Ct=r,this._$AM=l,this._$Ci=s}_$AS(r,l){return this.update(r,l)}update(r,l){return this.render(...l)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jg=Fg(class extends Ug{constructor(i){var r;if(super(i),i.type!==Ig.ATTRIBUTE||i.name!=="class"||((r=i.strings)==null?void 0:r.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(r=>i[r]).join(" ")+" "}update(i,[r]){var s,c;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(f=>f!=="")));for(const f in r)r[f]&&!((s=this.nt)!=null&&s.has(f))&&this.st.add(f);return this.render(r)}const l=i.element.classList;for(const f of this.st)f in r||(l.remove(f),this.st.delete(f));for(const f in r){const p=!!r[f];p===this.st.has(f)||(c=this.nt)!=null&&c.has(f)||(p?(l.add(f),this.st.add(f)):(l.remove(f),this.st.delete(f)))}return Or}}),Ks="css-loading-indicator";var on;(function(i){i.IDLE="",i.FIRST="first",i.SECOND="second",i.THIRD="third"})(on||(on={}));class vt extends Nr{static create(){var r,l;const s=window;return!((r=s.Vaadin)===null||r===void 0)&&r.connectionIndicator||(s.Vaadin||(s.Vaadin={}),s.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(s.Vaadin.connectionIndicator)),(l=s.Vaadin)===null||l===void 0?void 0:l.connectionIndicator}constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=on.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=dt.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}render(){return Tg`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${jg({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var r;super.connectedCallback();const l=window;!((r=l.Vaadin)===null||r===void 0)&&r.connectionState&&(this.connectionStateStore=l.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(r){r!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=r,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var r;const l=(r=this.connectionStateStore)===null||r===void 0?void 0:r.state;return this.offline=l===dt.CONNECTION_LOST,this.reconnecting=l===dt.RECONNECTING,this.updateLoading(l===dt.LOADING),this.loading?!1:l!==this.lastMessageState?(this.lastMessageState=l,!0):!1}updateLoading(r){this.loading=r,this.loadingBarState=on.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,r,()=>{this.loadingBarState=on.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,r,()=>{this.loadingBarState=on.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,r,()=>{this.loadingBarState=on.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(Ks)){const r=document.createElement("style");r.id=Ks,r.textContent=this.getDefaultStyle(),document.head.appendChild(r)}}else{const r=document.getElementById(Ks);r&&document.head.removeChild(r)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case on.IDLE:return"display: none";case on.FIRST:case on.SECOND:case on.THIRD:return"display: block";default:return""}}timeoutFor(r,l,s,c){return r!==0&&window.clearTimeout(r),l?window.setTimeout(s,c):0}static get instance(){return vt.create()}}jt([Vt({type:Number})],vt.prototype,"firstDelay",void 0);jt([Vt({type:Number})],vt.prototype,"secondDelay",void 0);jt([Vt({type:Number})],vt.prototype,"thirdDelay",void 0);jt([Vt({type:Number})],vt.prototype,"expandedDuration",void 0);jt([Vt({type:String})],vt.prototype,"onlineText",void 0);jt([Vt({type:String})],vt.prototype,"offlineText",void 0);jt([Vt({type:String})],vt.prototype,"reconnectingText",void 0);jt([Vt({type:Boolean,reflect:!0})],vt.prototype,"offline",void 0);jt([Vt({type:Boolean,reflect:!0})],vt.prototype,"reconnecting",void 0);jt([Vt({type:Boolean,reflect:!0})],vt.prototype,"expanded",void 0);jt([Vt({type:Boolean,reflect:!0})],vt.prototype,"loading",void 0);jt([Vt({type:String})],vt.prototype,"loadingBarState",void 0);jt([Vt({type:Boolean})],vt.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",vt);vt.instance;var Ff;const Ql=window;Ql.Vaadin||(Ql.Vaadin={});(Ff=Ql.Vaadin).registrations||(Ff.registrations=[]);Ql.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class Uf extends Error{}const Gs=window.document.body,Ue=window,Vg=1;function Pp(){return Object.keys(Ue.Vaadin.Flow.clients).filter(i=>i!=="TypeScript").map(i=>Ue.Vaadin.Flow.clients[i])}function jf(i,r){Pp().forEach(l=>l.sendEventMessage(Vg,i,r))}let Bg=class{constructor(r){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",Gs.$=Gs.$||[],this.config=r||{},Ue.Vaadin=Ue.Vaadin||{},Ue.Vaadin.Flow=Ue.Vaadin.Flow||{},Ue.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const l=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||l&&l.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,Ue.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,Ue.Vaadin.connectionState.loadingFinished(),!Ue.Vaadin.listener&&(Ue.Vaadin.listener={},document.addEventListener("click",r=>{r.target&&(r.target.hasAttribute("router-link")?this.navigation="link":r.composedPath().some(l=>l.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async r=>{if(this.pathname=r.pathname,Ue.Vaadin.connectionState.online)try{await this.flowInit()}catch(l){if(l instanceof Uf)return Ue.Vaadin.connectionState.state=dt.CONNECTION_LOST,this.offlineStubAction();throw l}else return this.offlineStubAction();return this.container.onBeforeEnter=(l,s)=>this.flowNavigate(l,s),this.container.onBeforeLeave=(l,s)=>this.flowLeave(l,s),this.container}}async flowLeave(r,l){const{connectionState:s}=Ue.Vaadin;return this.pathname===r.pathname||!this.isFlowClientLoaded()||s.offline?Promise.resolve({}):new Promise(c=>{this.loadingStarted(),this.container.serverConnected=f=>{var p;c(l&&f?l.prevent():(p=l==null?void 0:l.continue)===null||p===void 0?void 0:p.call(l)),this.loadingFinished()},jf("ui-leave-navigation",{route:this.getFlowRoutePath(r),query:this.getFlowRouteQuery(r)})})}async flowNavigate(r,l){return this.response?new Promise(s=>{this.loadingStarted(),this.container.serverConnected=(c,f)=>{var p;l&&c?s(l.prevent()):l&&l.redirect&&f?s(l.redirect(f.pathname)):((p=l==null?void 0:l.continue)===null||p===void 0||p.call(l),this.container.style.display="",s(this.container)),this.loadingFinished()},this.container.serverPaused=()=>{this.loadingFinished()},jf("ui-navigate",{route:this.getFlowRoutePath(r),query:this.getFlowRouteQuery(r),appShellTitle:this.appShellTitle,historyState:history.state,trigger:this.navigation}),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(r){return decodeURIComponent(r.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(r){return r.search&&r.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){Ue.Vaadin.Flow.nonce=this.findNonce(),this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:r,appConfig:l}=this.response;typeof r=="string"&&await this.loadScript(r);const{appId:s}=l,c=`flow-container-${s.toLowerCase()}`,f=document.querySelector(c);f?this.container=f:(this.container=document.createElement(c),this.container.id=s),Gs.$[s]=this.container,(await ru(()=>import("./FlowBootstrap-BRNFttkU.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(s),await this.config.imports());const v=await ru(()=>import("./FlowClient-CjLkgOY_.js"),[],import.meta.url);await this.flowInitClient(v),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(r){return new Promise((l,s)=>{const c=document.createElement("script");c.onload=()=>l(),c.onerror=s,c.src=r;const{nonce:f}=Ue.Vaadin.Flow;f!==void 0&&c.setAttribute("nonce",f),document.body.appendChild(c)})}findNonce(){let r;const l=document.head.getElementsByTagName("script");for(const s of l)if(s.nonce){r=s.nonce;break}return r}injectAppIdScript(r){const l=r.substring(0,r.lastIndexOf("-")),s=document.createElement("script");s.type="module",s.setAttribute("data-app-id",l);const{nonce:c}=Ue.Vaadin.Flow;c!==void 0&&s.setAttribute("nonce",c),document.body.append(s)}async flowInitClient(r){return r.init(),new Promise(l=>{const s=setInterval(()=>{Pp().reduce((f,p)=>f||p.isActive(),!1)||(clearInterval(s),l())},5)})}async flowInitUi(){const r=Ue.Vaadin&&Ue.Vaadin.TypeScript&&Ue.Vaadin.TypeScript.initial;return r?(Ue.Vaadin.TypeScript.initial=void 0,Promise.resolve(r)):new Promise((l,s)=>{const f=new XMLHttpRequest,p=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;f.open("GET",p),f.onerror=()=>s(new Uf(`Invalid server response when initializing Flow UI.
        ${f.status}
        ${f.responseText}`)),f.onload=()=>{const v=f.getResponseHeader("content-type");v&&v.indexOf("application/json")!==-1?l(JSON.parse(f.responseText)):f.onerror()},f.send()})}addConnectionIndicator(){vt.create(),Ue.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){Ue.Vaadin.connectionState.state=dt.RECONNECTING;const r=new XMLHttpRequest;r.open("HEAD","sw.js"),r.onload=()=>{Ue.Vaadin.connectionState.state=dt.CONNECTED},r.onerror=()=>{Ue.Vaadin.connectionState.state=dt.CONNECTION_LOST},setTimeout(()=>r.send(),50)}}),Ue.addEventListener("offline",()=>{this.isFlowClientLoaded()||(Ue.Vaadin.connectionState.state=dt.CONNECTION_LOST)})}async offlineStubAction(){const r=document.createElement("iframe");r.setAttribute("src","./offline-stub.html"),r.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let s;const c=()=>{s!==void 0&&(Ue.Vaadin.connectionState.removeStateChangeListener(s),s=void 0)};return r.onBeforeEnter=(f,p,v)=>{s=()=>{Ue.Vaadin.connectionState.online&&(c(),v.render(f,!1))},Ue.Vaadin.connectionState.addStateChangeListener(s)},r.onBeforeLeave=(f,p,v)=>{c()},r}isFlowClientLoaded(){return this.response!==void 0}};var Ys={exports:{}},ci={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function Hg(){if(Vf)return ci;Vf=1;var i=Yl(),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function p(v,m,S){var k,x={},P=null,N=null;S!==void 0&&(P=""+S),m.key!==void 0&&(P=""+m.key),m.ref!==void 0&&(N=m.ref);for(k in m)s.call(m,k)&&!f.hasOwnProperty(k)&&(x[k]=m[k]);if(v&&v.defaultProps)for(k in m=v.defaultProps,m)x[k]===void 0&&(x[k]=m[k]);return{$$typeof:r,type:v,key:P,ref:N,props:x,_owner:c.current}}return ci.Fragment=l,ci.jsx=p,ci.jsxs=p,ci}var Bf;function Wg(){return Bf||(Bf=1,Ys.exports=Hg()),Ys.exports}var mo=Wg(),Qg=Symbol.for("preact-signals");function Su(){if(ho>1)ho--;else{for(var i,r=!1;mi!==void 0;){var l=mi;for(mi=void 0,ou++;l!==void 0;){var s=l.o;if(l.o=void 0,l.f&=-3,!(8&l.f)&&Rp(l))try{l.c()}catch(c){r||(i=c,r=!0)}l=s}}if(ou=0,ho--,r)throw i}}var Qe=void 0,mi=void 0,ho=0,ou=0,Kl=0;function Tp(i){if(Qe!==void 0){var r=i.n;if(r===void 0||r.t!==Qe)return r={i:0,S:i,p:Qe.s,n:void 0,t:Qe,e:void 0,x:void 0,r},Qe.s!==void 0&&(Qe.s.n=r),Qe.s=r,i.n=r,32&Qe.f&&i.S(r),r;if(r.i===-1)return r.i=0,r.n!==void 0&&(r.n.p=r.p,r.p!==void 0&&(r.p.n=r.n),r.p=Qe.s,r.n=void 0,Qe.s.n=r,Qe.s=r),r}}function bt(i){this.v=i,this.i=0,this.n=void 0,this.t=void 0}bt.prototype.brand=Qg;bt.prototype.h=function(){return!0};bt.prototype.S=function(i){this.t!==i&&i.e===void 0&&(i.x=this.t,this.t!==void 0&&(this.t.e=i),this.t=i)};bt.prototype.U=function(i){if(this.t!==void 0){var r=i.e,l=i.x;r!==void 0&&(r.x=l,i.e=void 0),l!==void 0&&(l.e=r,i.x=void 0),i===this.t&&(this.t=l)}};bt.prototype.subscribe=function(i){var r=this;return $p(function(){var l=r.value,s=Qe;Qe=void 0;try{i(l)}finally{Qe=s}})};bt.prototype.valueOf=function(){return this.value};bt.prototype.toString=function(){return this.value+""};bt.prototype.toJSON=function(){return this.value};bt.prototype.peek=function(){var i=Qe;Qe=void 0;try{return this.value}finally{Qe=i}};Object.defineProperty(bt.prototype,"value",{get:function(){var i=Tp(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(ou>100)throw new Error("Cycle detected");this.v=i,this.i++,Kl++,ho++;try{for(var r=this.t;r!==void 0;r=r.x)r.t.N()}finally{Su()}}}});function Rp(i){for(var r=i.s;r!==void 0;r=r.n)if(r.S.i!==r.i||!r.S.h()||r.S.i!==r.i)return!0;return!1}function zp(i){for(var r=i.s;r!==void 0;r=r.n){var l=r.S.n;if(l!==void 0&&(r.r=l),r.S.n=r,r.i=-1,r.n===void 0){i.s=r;break}}}function Lp(i){for(var r=i.s,l=void 0;r!==void 0;){var s=r.p;r.i===-1?(r.S.U(r),s!==void 0&&(s.n=r.n),r.n!==void 0&&(r.n.p=s)):l=r,r.S.n=r.r,r.r!==void 0&&(r.r=void 0),r=s}i.s=l}function Ei(i){bt.call(this,void 0),this.x=i,this.s=void 0,this.g=Kl-1,this.f=4}(Ei.prototype=new bt).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Kl))return!0;if(this.g=Kl,this.f|=1,this.i>0&&!Rp(this))return this.f&=-2,!0;var i=Qe;try{zp(this),Qe=this;var r=this.x();(16&this.f||this.v!==r||this.i===0)&&(this.v=r,this.f&=-17,this.i++)}catch(l){this.v=l,this.f|=16,this.i++}return Qe=i,Lp(this),this.f&=-2,!0};Ei.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var r=this.s;r!==void 0;r=r.n)r.S.S(r)}bt.prototype.S.call(this,i)};Ei.prototype.U=function(i){if(this.t!==void 0&&(bt.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var r=this.s;r!==void 0;r=r.n)r.S.U(r)}};Ei.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};Object.defineProperty(Ei.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=Tp(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function Np(i){var r=i.u;if(i.u=void 0,typeof r=="function"){ho++;var l=Qe;Qe=void 0;try{r()}catch(s){throw i.f&=-2,i.f|=8,ku(i),s}finally{Qe=l,Su()}}}function ku(i){for(var r=i.s;r!==void 0;r=r.n)r.S.U(r);i.x=void 0,i.s=void 0,Np(i)}function Kg(i){if(Qe!==this)throw new Error("Out-of-order effect");Lp(this),Qe=i,this.f&=-2,8&this.f&&ku(this),Su()}function _i(i){this.x=i,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}_i.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var r=this.x();typeof r=="function"&&(this.u=r)}finally{i()}};_i.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Np(this),zp(this),ho++;var i=Qe;return Qe=this,Kg.bind(this,i)};_i.prototype.N=function(){2&this.f||(this.f|=2,this.o=mi,mi=this)};_i.prototype.d=function(){this.f|=8,1&this.f||ku(this)};function $p(i){var r=new _i(i);try{r.c()}catch(l){throw r.d(),l}return r.d.bind(r)}var Xs={exports:{}},qs={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function Gg(){if(Hf)return qs;Hf=1;var i=Yl();function r(x,P){return x===P&&(x!==0||1/x===1/P)||x!==x&&P!==P}var l=typeof Object.is=="function"?Object.is:r,s=i.useState,c=i.useEffect,f=i.useLayoutEffect,p=i.useDebugValue;function v(x,P){var N=P(),H=s({inst:{value:N,getSnapshot:P}}),F=H[0].inst,V=H[1];return f(function(){F.value=N,F.getSnapshot=P,m(F)&&V({inst:F})},[x,N,P]),c(function(){return m(F)&&V({inst:F}),x(function(){m(F)&&V({inst:F})})},[x]),p(N),N}function m(x){var P=x.getSnapshot;x=x.value;try{var N=P();return!l(x,N)}catch{return!0}}function S(x,P){return P()}var k=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?S:v;return qs.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:k,qs}var Wf;function Yg(){return Wf||(Wf=1,Xs.exports=Gg()),Xs.exports}var Xg=Yg(),qg=D.version.split(".").map(Number)[0],Jg=Symbol.for(qg>=19?"react.transitional.element":"react.element"),Lr,Dp=Symbol.dispose||Symbol.for("Symbol.dispose");function Js(i,r){var l=r.effect.S();return Lr=r,Zg.bind(r,i,l)}function Zg(i,r){r(),Lr=i}var Qf,iu,Kf=function(){},ey=((Qf={o:0,effect:{s:void 0,c:function(){},S:function(){return Kf},d:function(){}},subscribe:function(){return Kf},getSnapshot:function(){return 0},S:function(){},f:function(){}})[Dp]=function(){},Qf),ty=Promise.prototype.then.bind(Promise.resolve());function ny(){iu||(iu=ty(ry))}function ry(){var i;iu=void 0,(i=Lr)==null||i.f()}function Op(i){ny();var r=D.useRef();r.current==null&&(typeof window>"u"?r.current=ey:r.current=function(s){var c,f,p,v,m=0,S=$p(function(){f=this});return f.c=function(){m=m+1|0,v&&v()},(c={o:s,effect:f,subscribe:function(k){return v=k,function(){m=m+1|0,v=void 0,S()}},getSnapshot:function(){return m},S:function(){if(Lr!=null){var k=Lr.o,x=this.o;k==0&&x==0||k==0&&x==1?(Lr.f(),p=Js(void 0,this)):k==1&&x==0||k==2&&x==0||(p=Js(Lr,this))}else p=Js(void 0,this)},f:function(){var k=p;p=void 0,k==null||k()}})[Dp]=function(){this.f()},c}(i));var l=r.current;return Xg.useSyncExternalStore(l.subscribe,l.getSnapshot,l.getSnapshot),l.S(),l}Object.defineProperties(bt.prototype,{$$typeof:{configurable:!0,value:Jg},type:{configurable:!0,value:function(i){var r=i.data,l=Op(1);try{return r.value}finally{l.f()}}},props:{configurable:!0,get:function(){return{data:this}}},ref:{configurable:!0,value:null}});function Mp(i){return Op(i)}const oy=new Bg({imports:()=>ru(()=>import("./chunk-3e8b0a89765577764afe6d722a961843944bdb3dbcfcdcfbb1d232dac307117f-tdYxQxOB.js").then(i=>i.ah),[],import.meta.url)}),Zs={render(){return Promise.resolve()}};function iy(i){const r=i.port,l=i.protocol,f=l==="http:"&&r==="80"||l==="https:"&&r==="443"?i.hostname:i.host;return`${l}//${f}`}function Ap(i){if(i.href.startsWith(document.baseURI))return"/"+i.href.slice(document.baseURI.length)}function ly(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let r=i.target;const l=i.composedPath?i.composedPath():i.path||[];for(let f=0;f<l.length;f++){const p=l[f];if(p.nodeName&&p.nodeName.toLowerCase()==="a"){r=p;break}}for(;r&&r.nodeName.toLowerCase()!=="a";)r=r.parentNode;if(!r||r.nodeName.toLowerCase()!=="a")return;const s=r;if(s.target&&s.target.toLowerCase()!=="_self"||s.hasAttribute("download")||s.hasAttribute("router-ignore"))return;if(s.pathname===window.location.pathname&&s.hash!==""){window.location.hash=s.hash;return}if((s.origin||iy(s))===window.location.origin)return Ap(new URL(s.href,s.baseURI))}function Gf(i,r){setTimeout(()=>{window.dispatchEvent(new CustomEvent("vaadin-navigated",{detail:{pathname:i,search:r}})),delete window.Vaadin.Flow.navigation})}function Ip(){}const Yf=()=>Ip;function ay({children:i,domNode:r,onRemove:l}){return D.useEffect(()=>{r.addEventListener("flow-portal-remove",s=>{s.preventDefault(),l()},{once:!0})},[]),uu.createPortal(i,r)}const Fp="ADD_FLOW_PORTAL";function sy(i){return{type:Fp,portal:i}}const Up="REMOVE_FLOW_PORTAL";function uy(i){return{type:Up,key:i}}function cy(i,r){switch(r.type){case Fp:return[...i,r.portal];case Up:return i.filter(({key:l})=>l!==r.key);default:return i}}function dy(i,r){const l=mp(),s=D.useRef([]).current,[c,f]=D.useState(0),p=D.useCallback(()=>{const S=s.shift();if(S===void 0)return;(async()=>{i.current&&(await i.current,i.current=void 0),r.current=!S.callback,l(S.to,S.opts),f(s.length)})()},[l,f]),v=D.useCallback(()=>{queueMicrotask(p)},[p]),m=D.useCallback((S,k,x)=>{s.push({to:S,callback:k,opts:x}),f(s.length),s.length===1&&v()},[f,v]);return D.useEffect(()=>()=>{v()},[c,v]),m}function Eu(){var i=Mp(1);try{const r=D.useRef(null),l=mp(),s=Xv(({currentLocation:W,nextLocation:re})=>(f.current=f.current||re.pathname===W.pathname&&re.search===W.search&&re.hash===W.hash,!0)),c=ql(),f=D.useRef(!1),p=D.useRef(!1),v=D.useRef(!1),m=D.useRef(void 0),S=D.useRef(void 0),k=dy(S,f),x=Mv("/"),[P,N]=D.useReducer(cy,[]),H=D.useCallback(W=>{W.preventDefault();const re=Math.random().toString(36).slice(2);N(sy(mo.jsx(ay,{domNode:W.detail.domNode,onRemove:()=>N(uy(re)),children:W.detail.children},re)))},[N]),F=D.useCallback(W=>{const re=ly(W);re&&(W&&W.preventDefault&&W.preventDefault(),f.current=!1,v.current=!0,l(re),window.dispatchEvent(new CustomEvent("close-overlay-drawer")))},[l]),V=D.useCallback(W=>{const re=W.detail,me=Ap(re);me&&(W.preventDefault(),l(me))},[l]),ye=D.useCallback(W=>{window.Vaadin.Flow.navigation=!0;const re=W.detail.url.startsWith(document.baseURI)?"/"+W.detail.url.slice(document.baseURI.length):"/"+W.detail.url;v.current=!1,k(re,W.detail.callback,{state:W.detail.state,replace:W.detail.replace})},[l]),X=D.useCallback(W=>()=>{l(W,{replace:!0})},[l]);return D.useEffect(()=>(window.addEventListener("vaadin-router-go",V),window.addEventListener("vaadin-navigate",ye),()=>{window.removeEventListener("vaadin-router-go",V),window.removeEventListener("vaadin-navigate",ye)}),[V,ye]),D.useEffect(()=>()=>{var W,re,me;(re=(W=m.current)==null?void 0:W.parentNode)==null||re.removeChild(m.current),(me=m.current)==null||me.removeEventListener("flow-portal-add",H),m.current=void 0},[]),D.useEffect(()=>{var W,re,me,Ae,T;if(s.state==="blocked"){if(p.current){const{pathname:_e,state:Ce}=s.location,ze=_e.substring(x.length);k(ze.startsWith("/")?ze:"/"+ze,!0,{state:Ce,replace:!0});return}p.current=!0;let J;if(S.current=new Promise((_e,Ce)=>J={resolve:_e,reject:Ce}),S.current.then(()=>p.current=!1,()=>p.current=!1),f.current&&!v.current){s.proceed(),J.resolve();return}v.current=!1;const{pathname:Se,search:ue}=s.location,Fe=((W=window==null?void 0:window.Vaadin)==null?void 0:W.routesConfig)||[];let we=nr(Array.from(Fe),Se);we&&we.filter(_e=>{var Ce,ze,Ge;return((Ge=(ze=(Ce=_e.route)==null?void 0:Ce.element)==null?void 0:ze.type)==null?void 0:Ge.name)===Eu.name}).length!=0?((me=(re=m.current)==null?void 0:re.onBeforeEnter)==null||me.call(m==null?void 0:m.current,{pathname:Se,search:ue},{prevent(){s.reset(),J.resolve(),f.current=!1},redirect:X,continue(){s.proceed(),J.resolve()}},Zs),f.current=!0):Promise.resolve((T=(Ae=m.current)==null?void 0:Ae.onBeforeLeave)==null?void 0:T.call(m==null?void 0:m.current,{pathname:Se,search:ue},{prevent:Yf},Zs)).then(_e=>{_e===Ip&&m.current?m.current.serverConnected=Ce=>{Ce?(s.reset(),J.resolve()):(s.proceed(),J.resolve())}:(s.proceed(),J.resolve())})}},[s.state,s.location]),D.useEffect(()=>{if(s.state!=="blocked"){if(f.current){f.current=!1,Gf(c.pathname,c.search);return}oy.serverSideRoutes[0].action({pathname:c.pathname,search:c.search}).then(W=>{var me,Ae;const re=(me=r.current)==null?void 0:me.parentNode;return re&&re!==W.parentNode&&(re.append(W),W.addEventListener("flow-portal-add",H),window.addEventListener("click",F),m.current=W),(Ae=W.onBeforeEnter)==null?void 0:Ae.call(W,{pathname:c.pathname,search:c.search},{prevent:Yf,redirect:X,continue(){Gf(c.pathname,c.search)}},Zs)}).then(W=>{typeof W=="function"&&W()})}},[c]),mo.jsxs(mo.Fragment,{children:[mo.jsx("output",{ref:r,style:{display:"none"}}),P]})}finally{i.f()}}Eu.type="FlowContainer";const fy=[{path:"/*",element:mo.jsx(Eu,{})}];function py(){const i=[...fy];return{router:rg([...i],{basename:new URL(document.baseURI).pathname,future:{v7_fetcherPersist:!0,v7_normalizeFormMethod:!0,v7_partialHydration:!0,v7_relativeSplatPath:!0,v7_skipActionErrorRevalidation:!0}}),routes:i}}const{router:my,routes:hy}=py();function vy(){var i=Mp(1);try{return mo.jsx(fg,{router:my,future:{v7_startTransition:!0}})}finally{i.f()}}const lu=document.getElementById("outlet");let jp=lu._root??Ah.createRoot(lu);lu._root=jp;jp.render(D.createElement(vy));window.Vaadin??(window.Vaadin={});window.Vaadin.routesConfig=hy;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gy=i=>class extends i{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(l,s,c){super.attributeChangedCallback(l,s,c),l==="theme"&&this._set_theme(c)}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vp=[],au=new Set,_u=new Set;function Bp(i){return i&&Object.prototype.hasOwnProperty.call(i,"__themes")}function yy(i){return Bp(customElements.get(i))}function xy(i=[]){return[i].flat(1/0).filter(r=>r instanceof yu?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Hp(i,r){return(i||"").split(" ").some(l=>new RegExp(`^${l.split("*").join(".*")}$`,"u").test(r))}function Wp(i){return i.map(r=>r.cssText).join(`
`)}const Gl="vaadin-themable-mixin-style";function wy(i,r){const l=document.createElement("style");l.id=Gl,l.textContent=Wp(i),r.content.appendChild(l)}function Sy(i){if(!i.shadowRoot)return;const r=i.constructor;if(i instanceof Nr)[...i.shadowRoot.querySelectorAll("style")].forEach(l=>l.remove()),Sp(i.shadowRoot,r.elementStyles);else{const l=i.shadowRoot.getElementById(Gl),s=r.prototype._template;l.textContent=s.content.getElementById(Gl).textContent}}function ky(i){au.forEach(r=>{const l=r.deref();l instanceof i?Sy(l):l||au.delete(r)})}function Qp(i){if(i.prototype instanceof Nr)i.elementStyles=i.finalizeStyles(i.styles);else{const r=i.prototype._template;r.content.getElementById(Gl).textContent=Wp(i.getStylesForThis())}_u.forEach(r=>{const l=customElements.get(r);l!==i&&l.prototype instanceof i&&Qp(l)})}function Ey(i,r){const l=i.__themes;return!l||!r?!1:l.some(s=>s.styles.some(c=>r.some(f=>f.cssText===c.cssText)))}function Zl(i,r,l={}){r=xy(r),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(i,r,l):Vp.push({themeFor:i,styles:r,include:l.include,moduleId:l.moduleId}),i&&_u.forEach(s=>{if(Hp(i,s)&&yy(s)){const c=customElements.get(s);Ey(c,r)?console.warn(`Registering styles that already exist for ${s}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${s}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),Qp(c),ky(c)}})}function su(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Vp}function _y(i=""){let r=0;return i.startsWith("lumo-")||i.startsWith("material-")?r=1:i.startsWith("vaadin-")&&(r=2),r}function Kp(i){const r=[];return i.include&&[].concat(i.include).forEach(l=>{const s=su().find(c=>c.moduleId===l);s?r.push(...Kp(s),...s.styles):console.warn(`Included moduleId ${l} not found in style registry`)},i.styles),r}function Cy(i){const r=`${i}-default-theme`,l=su().filter(s=>s.moduleId!==r&&Hp(s.themeFor,i)).map(s=>({...s,styles:[...Kp(s),...s.styles],includePriority:_y(s.moduleId)})).sort((s,c)=>c.includePriority-s.includePriority);return l.length>0?l:su().filter(s=>s.moduleId===r)}const f0=i=>class extends gy(i){constructor(){super(),au.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&_u.add(this.is),this.elementStyles)return;const l=this.prototype._template;!l||Bp(this)||wy(this.getStylesForThis(),l)}static finalizeStyles(l){const s=this.getStylesForThis();return l?[...[l].flat(1/0),...s]:s}static getStylesForThis(){const l=i.__themes||[],s=Object.getPrototypeOf(this.prototype),c=(s?s.constructor.__themes:[])||[];this.__themes=[...l,...c,...Cy(this.is)];const f=this.__themes.flatMap(p=>p.styles);return f.filter((p,v)=>v===f.lastIndexOf(p))}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const by=(i,...r)=>{const l=document.createElement("style");l.id=i,l.textContent=r.map(s=>s.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",l)},sr=(i,...r)=>{by(`lumo-${i}`,r)};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});var Jf;(Jf=window.Vaadin).featureFlags||(Jf.featureFlags={});function Py(i){return i.replace(/-[a-z]/gu,r=>r[1].toUpperCase())}const Tn={};function Ty(i,r="24.6.6"){if(Object.defineProperty(i,"version",{get(){return r}}),i.experimental){const s=typeof i.experimental=="string"?i.experimental:`${Py(i.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[s]&&!Tn[s]){Tn[s]=new Set,Tn[s].add(i),Object.defineProperty(window.Vaadin.featureFlags,s,{get(){return Tn[s].size===0},set(c){c&&Tn[s].size>0&&(Tn[s].forEach(f=>{customElements.define(f.is,f)}),Tn[s].clear())}});return}else if(Tn[s]){Tn[s].add(i);return}}const l=customElements.get(i.is);if(!l)customElements.define(i.is,i);else{const s=l.version;s&&i.version&&s===i.version?console.warn(`The component ${i.is} has been loaded twice`):console.error(`Tried to define ${i.is} version ${i.version} when version ${l.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ry extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}Ty(Ry);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zy=ot`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Cu=ot`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Zl("",Cu,{moduleId:"lumo-typography"});sr("typography-props",zy);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ly=ot`
  ${wp(Cu.cssText.replace(/,\s*:host/su,""))}
`;sr("typography",Ly);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ny=ot`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;sr("color-props",Ny);const bu=ot`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;Zl("",bu,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */sr("color",bu);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $y=ot`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;ot`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-checkbox-disabled-checkmark-color: var(--lumo-contrast-30pct);
    --vaadin-checkbox-disabled-background: var(--lumo-contrast-10pct);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-disabled-background: var(--lumo-contrast-10pct);
    --vaadin-radio-button-disabled-dot-color: var(--lumo-contrast-30pct);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-disabled-background: var(--lumo-contrast-5pct);
    --vaadin-input-field-disabled-value-color: var(--lumo-disabled-text-color);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 500;
  }
`;sr("style-props",$y);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pu=ot`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] > vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] > vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] > vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;Zl("",Pu,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */sr("badge",Pu);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dy=ot`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oy=ot`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-tint {
    background-color: var(--lumo-tint);
  }
  .bg-tint-90 {
    background-color: var(--lumo-tint-90pct);
  }
  .bg-tint-80 {
    background-color: var(--lumo-tint-80pct);
  }
  .bg-tint-70 {
    background-color: var(--lumo-tint-70pct);
  }
  .bg-tint-60 {
    background-color: var(--lumo-tint-60pct);
  }
  .bg-tint-50 {
    background-color: var(--lumo-tint-50pct);
  }
  .bg-tint-40 {
    background-color: var(--lumo-tint-40pct);
  }
  .bg-tint-30 {
    background-color: var(--lumo-tint-30pct);
  }
  .bg-tint-20 {
    background-color: var(--lumo-tint-20pct);
  }
  .bg-tint-10 {
    background-color: var(--lumo-tint-10pct);
  }
  .bg-tint-5 {
    background-color: var(--lumo-tint-5pct);
  }

  .bg-shade {
    background-color: var(--lumo-shade);
  }
  .bg-shade-90 {
    background-color: var(--lumo-shade-90pct);
  }
  .bg-shade-80 {
    background-color: var(--lumo-shade-80pct);
  }
  .bg-shade-70 {
    background-color: var(--lumo-shade-70pct);
  }
  .bg-shade-60 {
    background-color: var(--lumo-shade-60pct);
  }
  .bg-shade-50 {
    background-color: var(--lumo-shade-50pct);
  }
  .bg-shade-40 {
    background-color: var(--lumo-shade-40pct);
  }
  .bg-shade-30 {
    background-color: var(--lumo-shade-30pct);
  }
  .bg-shade-20 {
    background-color: var(--lumo-shade-20pct);
  }
  .bg-shade-10 {
    background-color: var(--lumo-shade-10pct);
  }
  .bg-shade-5 {
    background-color: var(--lumo-shade-5pct);
  }

  .bg-contrast {
    background-color: var(--lumo-contrast);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const My=ot`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border-dashed {
    --lumo-utility-border-style: dashed;
  }
  .border-dotted {
    --lumo-utility-border-style: dotted;
  }
  .border {
    border: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-b {
    border-bottom: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-e {
    border-inline-end: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-l {
    border-left: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-r {
    border-right: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-s {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-t {
    border-top: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }

  /* === Border color === */
  .border-contrast {
    --lumo-utility-border-color: var(--lumo-contrast);
  }
  .border-contrast-90 {
    --lumo-utility-border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast-80 {
    --lumo-utility-border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-70 {
    --lumo-utility-border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-60 {
    --lumo-utility-border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-50 {
    --lumo-utility-border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-40 {
    --lumo-utility-border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-30 {
    --lumo-utility-border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-20 {
    --lumo-utility-border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-10 {
    --lumo-utility-border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-5 {
    --lumo-utility-border-color: var(--lumo-contrast-5pct);
  }

  .border-primary {
    --lumo-utility-border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    --lumo-utility-border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    --lumo-utility-border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    --lumo-utility-border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    --lumo-utility-border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    --lumo-utility-border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    --lumo-utility-border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    --lumo-utility-border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    --lumo-utility-border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    --lumo-utility-border-color: var(--lumo-warning-color);
  }
  .border-warning-strong {
    --lumo-utility-border-color: var(--lumo-warning-text-color);
  }
  .border-warning-10 {
    --lumo-utility-border-color: var(--lumo-warning-color-10pct);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
  .rounded-full {
    border-radius: 9999px;
  }

  /* === Divide === */
  .divide-x > * + * {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .divide-y > * + * {
    border-block-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ay=ot`
  /* === Backdrop filter === */
  .backdrop-blur-none {
    backdrop-filter: blur(0);
  }
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  .backdrop-blur {
    backdrop-filter: blur(8px);
  }
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
  .backdrop-blur-lg {
    backdrop-filter: blur(16px);
  }
  .backdrop-blur-xl {
    backdrop-filter: blur(24px);
  }
  .backdrop-blur-2xl {
    backdrop-filter: blur(40px);
  }
  .backdrop-blur-3xl {
    backdrop-filter: blur(64px);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Iy=ot`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-1 {
    flex: 1 1 0%;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow {
    flex-grow: 1;
  }
  .flex-grow-0 {
    flex-grow: 0;
  }

  /* === Flex shrink === */
  .flex-shrink {
    flex-shrink: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }
  .row-span-full {
    grid-row: 1 / -1;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:items-baseline {
      align-items: baseline;
    }
    .sm\\:items-center {
      align-items: center;
    }
    .sm\\:items-end {
      align-items: flex-end;
    }
    .sm\\:items-start {
      align-items: flex-start;
    }
    .sm\\:items-stretch {
      align-items: stretch;
    }
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:items-baseline {
      align-items: baseline;
    }
    .md\\:items-center {
      align-items: center;
    }
    .md\\:items-end {
      align-items: flex-end;
    }
    .md\\:items-start {
      align-items: flex-start;
    }
    .md\\:items-stretch {
      align-items: stretch;
    }
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:items-baseline {
      align-items: baseline;
    }
    .lg\\:items-center {
      align-items: center;
    }
    .lg\\:items-end {
      align-items: flex-end;
    }
    .lg\\:items-start {
      align-items: flex-start;
    }
    .lg\\:items-stretch {
      align-items: stretch;
    }
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:items-baseline {
      align-items: baseline;
    }
    .xl\\:items-center {
      align-items: center;
    }
    .xl\\:items-end {
      align-items: flex-end;
    }
    .xl\\:items-start {
      align-items: flex-start;
    }
    .xl\\:items-stretch {
      align-items: stretch;
    }
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:items-baseline {
      align-items: baseline;
    }
    .\\32xl\\:items-center {
      align-items: center;
    }
    .\\32xl\\:items-end {
      align-items: flex-end;
    }
    .\\32xl\\:items-start {
      align-items: flex-start;
    }
    .\\32xl\\:items-stretch {
      align-items: stretch;
    }
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fy=ot`
  /* === Aspect ratio === */
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .aspect-video {
    aspect-ratio: 16 / 9;
  }

  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Top, end, bottom, start === */
  .-bottom-xs {
    bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-bottom-s {
    bottom: calc(var(--lumo-space-s) / -1);
  }
  .-bottom-m {
    bottom: calc(var(--lumo-space-m) / -1);
  }
  .-bottom-l {
    bottom: calc(var(--lumo-space-l) / -1);
  }
  .-bottom-xl {
    bottom: calc(var(--lumo-space-xl) / -1);
  }
  .-bottom-full {
    bottom: -100%;
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-xs {
    bottom: var(--lumo-space-xs);
  }
  .bottom-s {
    bottom: var(--lumo-space-s);
  }
  .bottom-m {
    bottom: var(--lumo-space-m);
  }
  .bottom-l {
    bottom: var(--lumo-space-l);
  }
  .bottom-xl {
    bottom: var(--lumo-space-xl);
  }
  .bottom-auto {
    bottom: auto;
  }
  .bottom-full {
    bottom: 100%;
  }

  .-end-xs {
    inset-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-end-s {
    inset-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-end-m {
    inset-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-end-l {
    inset-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-end-xl {
    inset-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .-end-full {
    inset-inline-end: -100%;
  }
  .end-0 {
    inset-inline-end: 0;
  }
  .end-xs {
    inset-inline-end: var(--lumo-space-xs);
  }
  .end-s {
    inset-inline-end: var(--lumo-space-s);
  }
  .end-m {
    inset-inline-end: var(--lumo-space-m);
  }
  .end-l {
    inset-inline-end: var(--lumo-space-l);
  }
  .end-xl {
    inset-inline-end: var(--lumo-space-xl);
  }
  .end-auto {
    inset-inline-end: auto;
  }
  .end-full {
    inset-inline-end: 100%;
  }

  .-start-xs {
    inset-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-start-s {
    inset-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-start-m {
    inset-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-start-l {
    inset-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-start-xl {
    inset-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .-start-full {
    inset-inline-start: -100%;
  }
  .start-0 {
    inset-inline-start: 0;
  }
  .start-xs {
    inset-inline-start: var(--lumo-space-xs);
  }
  .start-s {
    inset-inline-start: var(--lumo-space-s);
  }
  .start-m {
    inset-inline-start: var(--lumo-space-m);
  }
  .start-l {
    inset-inline-start: var(--lumo-space-l);
  }
  .start-xl {
    inset-inline-start: var(--lumo-space-xl);
  }
  .start-auto {
    inset-inline-start: auto;
  }
  .start-full {
    inset-inline-start: 100%;
  }

  .-top-xs {
    top: calc(var(--lumo-space-xs) / -1);
  }
  .-top-s {
    top: calc(var(--lumo-space-s) / -1);
  }
  .-top-m {
    top: calc(var(--lumo-space-m) / -1);
  }
  .-top-l {
    top: calc(var(--lumo-space-l) / -1);
  }
  .-top-xl {
    top: calc(var(--lumo-space-xl) / -1);
  }
  .-top-full {
    top: -100%;
  }
  .top-0 {
    top: 0;
  }
  .top-xs {
    top: var(--lumo-space-xs);
  }
  .top-s {
    top: var(--lumo-space-s);
  }
  .top-m {
    top: var(--lumo-space-m);
  }
  .top-l {
    top: var(--lumo-space-l);
  }
  .top-xl {
    top: var(--lumo-space-xl);
  }
  .top-auto {
    top: auto;
  }
  .top-full {
    top: 100%;
  }

  /* === Visibility === */
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }

  /* === Z-index === */
  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }
  .z-auto {
    z-index: auto;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    /* Display */
    .sm\\:block {
      display: block;
    }
    .sm\\:flex {
      display: flex;
    }
    .sm\\:grid {
      display: grid;
    }
    .sm\\:hidden {
      display: none;
    }
    .sm\\:inline {
      display: inline;
    }
    .sm\\:inline-block {
      display: inline-block;
    }
    .sm\\:inline-flex {
      display: inline-flex;
    }
    .sm\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .sm\\:absolute {
      position: absolute;
    }
    .sm\\:fixed {
      position: fixed;
    }
    .sm\\:relative {
      position: relative;
    }
    .sm\\:static {
      position: static;
    }
    .sm\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 768px) {
    /* Display */
    .md\\:block {
      display: block;
    }
    .md\\:flex {
      display: flex;
    }
    .md\\:grid {
      display: grid;
    }
    .md\\:hidden {
      display: none;
    }
    .md\\:inline {
      display: inline;
    }
    .md\\:inline-block {
      display: inline-block;
    }
    .md\\:inline-flex {
      display: inline-flex;
    }
    .md\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .md\\:absolute {
      position: absolute;
    }
    .md\\:fixed {
      position: fixed;
    }
    .md\\:relative {
      position: relative;
    }
    .md\\:static {
      position: static;
    }
    .md\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1024px) {
    /* Display */
    .lg\\:block {
      display: block;
    }
    .lg\\:flex {
      display: flex;
    }
    .lg\\:grid {
      display: grid;
    }
    .lg\\:hidden {
      display: none;
    }
    .lg\\:inline {
      display: inline;
    }
    .lg\\:inline-block {
      display: inline-block;
    }
    .lg\\:inline-flex {
      display: inline-flex;
    }
    .lg\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .lg\\:absolute {
      position: absolute;
    }
    .lg\\:fixed {
      position: fixed;
    }
    .lg\\:relative {
      position: relative;
    }
    .lg\\:static {
      position: static;
    }
    .lg\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1280px) {
    /* Display */
    .xl\\:block {
      display: block;
    }
    .xl\\:flex {
      display: flex;
    }
    .xl\\:grid {
      display: grid;
    }
    .xl\\:hidden {
      display: none;
    }
    .xl\\:inline {
      display: inline;
    }
    .xl\\:inline-block {
      display: inline-block;
    }
    .xl\\:inline-flex {
      display: inline-flex;
    }
    .xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .xl\\:absolute {
      position: absolute;
    }
    .xl\\:fixed {
      position: fixed;
    }
    .xl\\:relative {
      position: relative;
    }
    .xl\\:static {
      position: static;
    }
    .xl\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1536px) {
    /* Display */
    .\\32xl\\:block {
      display: block;
    }
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:grid {
      display: grid;
    }
    .\\32xl\\:hidden {
      display: none;
    }
    .\\32xl\\:inline {
      display: inline;
    }
    .\\32xl\\:inline-block {
      display: inline-block;
    }
    .\\32xl\\:inline-flex {
      display: inline-flex;
    }
    .\\32xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .\\32xl\\:absolute {
      position: absolute;
    }
    .\\32xl\\:fixed {
      position: fixed;
    }
    .\\32xl\\:relative {
      position: relative;
    }
    .\\32xl\\:static {
      position: static;
    }
    .\\32xl\\:sticky {
      position: sticky;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Uy=ot`
  /* === Box shadow === */
  .shadow-none {
    box-shadow: none;
  }
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jy=ot`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vy=ot`
  /* === Margin === */
  .-m-xs {
    margin: calc(var(--lumo-space-xs) / -1);
  }
  .-m-s {
    margin: calc(var(--lumo-space-s) / -1);
  }
  .-m-m {
    margin: calc(var(--lumo-space-m) / -1);
  }
  .-m-l {
    margin: calc(var(--lumo-space-l) / -1);
  }
  .-m-xl {
    margin: calc(var(--lumo-space-xl) / -1);
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }
  .m-auto {
    margin: auto;
  }

  /* === Margin (bottom) === */
  .-mb-xs {
    margin-bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-mb-s {
    margin-bottom: calc(var(--lumo-space-s) / -1);
  }
  .-mb-m {
    margin-bottom: calc(var(--lumo-space-m) / -1);
  }
  .-mb-l {
    margin-bottom: calc(var(--lumo-space-l) / -1);
  }
  .-mb-xl {
    margin-bottom: calc(var(--lumo-space-xl) / -1);
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }
  .mb-auto {
    margin-bottom: auto;
  }

  /* === Margin (end) === */
  .-me-xs {
    margin-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-me-s {
    margin-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-me-m {
    margin-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-me-l {
    margin-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-me-xl {
    margin-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }
  .me-auto {
    margin-inline-end: auto;
  }

  /* === Margin (horizontal) === */
  .-mx-xs {
    margin-inline: calc(var(--lumo-space-xs) / -1);
  }
  .-mx-s {
    margin-inline: calc(var(--lumo-space-s) / -1);
  }
  .-mx-m {
    margin-inline: calc(var(--lumo-space-m) / -1);
  }
  .-mx-l {
    margin-inline: calc(var(--lumo-space-l) / -1);
  }
  .-mx-xl {
    margin-inline: calc(var(--lumo-space-xl) / -1);
  }
  .mx-0 {
    margin-inline: 0;
  }
  .mx-xs {
    margin-inline: var(--lumo-space-xs);
  }
  .mx-s {
    margin-inline: var(--lumo-space-s);
  }
  .mx-m {
    margin-inline: var(--lumo-space-m);
  }
  .mx-l {
    margin-inline: var(--lumo-space-l);
  }
  .mx-xl {
    margin-inline: var(--lumo-space-xl);
  }
  .mx-auto {
    margin-inline: auto;
  }

  /* === Margin (left) === */
  .-ml-xs {
    margin-left: calc(var(--lumo-space-xs) / -1);
  }
  .-ml-s {
    margin-left: calc(var(--lumo-space-s) / -1);
  }
  .-ml-m {
    margin-left: calc(var(--lumo-space-m) / -1);
  }
  .-ml-l {
    margin-left: calc(var(--lumo-space-l) / -1);
  }
  .-ml-xl {
    margin-left: calc(var(--lumo-space-xl) / -1);
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }
  .ml-auto {
    margin-left: auto;
  }

  /* === Margin (right) === */
  .-mr-xs {
    margin-right: calc(var(--lumo-space-xs) / -1);
  }
  .-mr-s {
    margin-right: calc(var(--lumo-space-s) / -1);
  }
  .-mr-m {
    margin-right: calc(var(--lumo-space-m) / -1);
  }
  .-mr-l {
    margin-right: calc(var(--lumo-space-l) / -1);
  }
  .-mr-xl {
    margin-right: calc(var(--lumo-space-xl) / -1);
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }
  .mr-auto {
    margin-right: auto;
  }

  /* === Margin (start) === */
  .-ms-xs {
    margin-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-ms-s {
    margin-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-ms-m {
    margin-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-ms-l {
    margin-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-ms-xl {
    margin-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }
  .ms-auto {
    margin-inline-start: auto;
  }

  /* === Margin (top) === */
  .-mt-xs {
    margin-top: calc(var(--lumo-space-xs) / -1);
  }
  .-mt-s {
    margin-top: calc(var(--lumo-space-s) / -1);
  }
  .-mt-m {
    margin-top: calc(var(--lumo-space-m) / -1);
  }
  .-mt-l {
    margin-top: calc(var(--lumo-space-l) / -1);
  }
  .-mt-xl {
    margin-top: calc(var(--lumo-space-xl) / -1);
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }
  .mt-auto {
    margin-top: auto;
  }

  /* === Margin (vertical) === */
  .-my-xs {
    margin-block: calc(var(--lumo-space-xs) / -1);
  }
  .-my-s {
    margin-block: calc(var(--lumo-space-s) / -1);
  }
  .-my-m {
    margin-block: calc(var(--lumo-space-m) / -1);
  }
  .-my-l {
    margin-block: calc(var(--lumo-space-l) / -1);
  }
  .-my-xl {
    margin-block: calc(var(--lumo-space-xl) / -1);
  }
  .my-0 {
    margin-block: 0;
  }
  .my-xs {
    margin-block: var(--lumo-space-xs);
  }
  .my-s {
    margin-block: var(--lumo-space-s);
  }
  .my-m {
    margin-block: var(--lumo-space-m);
  }
  .my-l {
    margin-block: var(--lumo-space-l);
  }
  .my-xl {
    margin-block: var(--lumo-space-xl);
  }
  .my-auto {
    margin-block: auto;
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const By=ot`
  .transition-none {
    transition: none;
  }
  .transition-all {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition {
    transition:
      color,
      background-color,
      border-color,
      text-decoration-color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      filter,
      backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-colors {
    transition:
      color,
      background-color,
      border-color,
      text-decoration-color,
      fill,
      stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-opacity {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-shadow {
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-transform {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hy=ot`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line clamp === */
  [class*='line-clamp-'] {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  .line-clamp-1 {
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }
  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }
  .line-clamp-4 {
    -webkit-line-clamp: 4;
  }
  .line-clamp-5 {
    -webkit-line-clamp: 5;
  }
  .line-clamp-6 {
    -webkit-line-clamp: 6;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* == Text decoration === */
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-break-spaces {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tu=ot`
${Dy}
${Oy}
${My}
${Ay}
${Iy}
${Fy}
${Uy}
${jy}
${Vy}
${By}
${Hy}
`;Zl("",Tu,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */sr("utility",Tu);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var i="ShadyCSS"in window&&!ShadyCSS.nativeShadow,r=document.implementation.createHTMLDocument(""),l=new WeakMap,s=typeof DOMException=="object"?Error:DOMException,c=Object.defineProperty,f=Array.prototype.forEach,p=/@import.+?;?$/gm;function v(L){var I=L.replace(p,"");return I!==L&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),I.trim()}function m(L){return"isConnected"in L?L.isConnected:document.contains(L)}function S(L){return L.filter(function(I,se){return L.indexOf(I)===se})}function k(L,I){return L.filter(function(se){return I.indexOf(se)===-1})}function x(L){L.parentNode.removeChild(L)}function P(L){return L.shadowRoot||l.get(L)}var N=["addRule","deleteRule","insertRule","removeRule"],H=CSSStyleSheet,F=H.prototype;F.replace=function(){return Promise.reject(new s("Can't call replace on non-constructed CSSStyleSheets."))},F.replaceSync=function(){throw new s("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function V(L){return typeof L=="object"?we.isPrototypeOf(L)||F.isPrototypeOf(L):!1}function ye(L){return typeof L=="object"?F.isPrototypeOf(L):!1}var X=new WeakMap,W=new WeakMap,re=new WeakMap,me=new WeakMap;function Ae(L,I){var se=document.createElement("style");return re.get(L).set(I,se),W.get(L).push(I),se}function T(L,I){return re.get(L).get(I)}function J(L,I){re.get(L).delete(I),W.set(L,W.get(L).filter(function(se){return se!==I}))}function Se(L,I){requestAnimationFrame(function(){I.textContent=X.get(L).textContent,me.get(L).forEach(function(se){return I.sheet[se.method].apply(I.sheet,se.args)})})}function ue(L){if(!X.has(L))throw new TypeError("Illegal invocation")}function Fe(){var L=this,I=document.createElement("style");r.body.appendChild(I),X.set(L,I),W.set(L,[]),re.set(L,new WeakMap),me.set(L,[])}var we=Fe.prototype;we.replace=function(I){try{return this.replaceSync(I),Promise.resolve(this)}catch(se){return Promise.reject(se)}},we.replaceSync=function(I){if(ue(this),typeof I=="string"){var se=this;X.get(se).textContent=v(I),me.set(se,[]),W.get(se).forEach(function(nt){nt.isConnected()&&Se(se,T(se,nt))})}},c(we,"cssRules",{configurable:!0,enumerable:!0,get:function(){return ue(this),X.get(this).sheet.cssRules}}),c(we,"media",{configurable:!0,enumerable:!0,get:function(){return ue(this),X.get(this).sheet.media}}),N.forEach(function(L){we[L]=function(){var I=this;ue(I);var se=arguments;me.get(I).push({method:L,args:se}),W.get(I).forEach(function(Ne){if(Ne.isConnected()){var je=T(I,Ne).sheet;je[L].apply(je,se)}});var nt=X.get(I).sheet;return nt[L].apply(nt,se)}}),c(Fe,Symbol.hasInstance,{configurable:!0,value:V});var _e={childList:!0,subtree:!0},Ce=new WeakMap;function ze(L){var I=Ce.get(L);return I||(I=new ge(L),Ce.set(L,I)),I}function Ge(L){c(L.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return ze(this).sheets},set:function(I){ze(this).update(I)}})}function Ie(L,I){for(var se=document.createNodeIterator(L,NodeFilter.SHOW_ELEMENT,function(Ne){return P(Ne)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),nt=void 0;nt=se.nextNode();)I(P(nt))}var U=new WeakMap,ie=new WeakMap,Q=new WeakMap;function E(L,I){return I instanceof HTMLStyleElement&&ie.get(L).some(function(se){return T(se,L)})}function $(L){var I=U.get(L);return I instanceof Document?I.body:I}function fe(L){var I=document.createDocumentFragment(),se=ie.get(L),nt=Q.get(L),Ne=$(L);nt.disconnect(),se.forEach(function(je){I.appendChild(T(je,L)||Ae(je,L))}),Ne.insertBefore(I,null),nt.observe(Ne,_e),se.forEach(function(je){Se(je,T(je,L))})}function ge(L){var I=this;I.sheets=[],U.set(I,L),ie.set(I,[]),Q.set(I,new MutationObserver(function(se,nt){if(!document){nt.disconnect();return}se.forEach(function(Ne){i||f.call(Ne.addedNodes,function(je){je instanceof Element&&Ie(je,function(Dt){ze(Dt).connect()})}),f.call(Ne.removedNodes,function(je){je instanceof Element&&(E(I,je)&&fe(I),i||Ie(je,function(Dt){ze(Dt).disconnect()}))})})}))}if(ge.prototype={isConnected:function(){var L=U.get(this);return L instanceof Document?L.readyState!=="loading":m(L.host)},connect:function(){var L=$(this);Q.get(this).observe(L,_e),ie.get(this).length>0&&fe(this),Ie(L,function(I){ze(I).connect()})},disconnect:function(){Q.get(this).disconnect()},update:function(L){var I=this,se=U.get(I)===document?"Document":"ShadowRoot";if(!Array.isArray(L))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+se+": Iterator getter is not callable.");if(!L.every(V))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+se+": Failed to convert value to 'CSSStyleSheet'");if(L.some(ye))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+se+": Can't adopt non-constructed stylesheets");I.sheets=L;var nt=ie.get(I),Ne=S(L),je=k(nt,Ne);je.forEach(function(Dt){x(T(Dt,I)),J(Dt,I)}),ie.set(I,Ne),I.isConnected()&&Ne.length>0&&fe(I)}},window.CSSStyleSheet=Fe,Ge(Document),"ShadowRoot"in window){Ge(ShadowRoot);var he=Element.prototype,xe=he.attachShadow;he.attachShadow=function(I){var se=xe.call(this,I);return I.mode==="closed"&&l.set(this,se),se}}var Ee=ze(document);Ee.isConnected()?Ee.connect():document.addEventListener("DOMContentLoaded",Ee.connect.bind(Ee))})();const{toString:Wy}=Object.prototype;function Qy(i){return Wy.call(i)==="[object RegExp]"}function Ky(i,{preserve:r=!0,whitespace:l=!0,all:s}={}){if(s)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let c=r,f;typeof r=="function"?(c=!1,f=r):Qy(r)&&(c=!1,f=k=>r.test(k));let p=!1,v="",m="",S="";for(let k=0;k<i.length;k++){if(v=i[k],i[k-1]!=="\\"&&(v==='"'||v==="'")&&(p===v?p=!1:p||(p=v)),!p&&v==="/"&&i[k+1]==="*"){const x=i[k+2]==="!";let P=k+2;for(;P<i.length;P++){if(i[P]==="*"&&i[P+1]==="/"){c&&x||f&&f(m)?S+=`/*${m}*/`:l||(i[P+2]===`
`?P++:i[P+2]+i[P+3]===`\r
`&&(P+=2)),m="";break}m+=i[P]}k=P+1;continue}S+=v}return S}const Gy=CSSStyleSheet.toString().includes("document.createElement"),Yy=(i,r)=>{const l=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(i)!=null&&(i=Ky(i));for(var s,c=i;(s=l.exec(i))!==null;){c=c.replace(s[0],"");const f=document.createElement("link");f.rel="stylesheet",f.href=s[2]||s[4];const p=s[1]||s[5];p&&(f.media=p),r===document?document.head.appendChild(f):r.appendChild(f)}return c},Xy=(i,r,l)=>(l?r.adoptedStyleSheets=[i,...r.adoptedStyleSheets]:r.adoptedStyleSheets=[...r.adoptedStyleSheets,i],()=>{r.adoptedStyleSheets=r.adoptedStyleSheets.filter(s=>s!==i)}),qy=(i,r,l)=>{const s=new CSSStyleSheet;return s.replaceSync(i),Gy?Xy(s,r,l):(l?r.adoptedStyleSheets.splice(0,0,s):r.adoptedStyleSheets.push(s),()=>{r.adoptedStyleSheets.splice(r.adoptedStyleSheets.indexOf(s),1)})},Jy=(i,r)=>{const l=document.createElement("style");l.type="text/css",l.textContent=i;let s;if(r){const f=Array.from(document.head.childNodes).filter(p=>p.nodeType===Node.COMMENT_NODE).find(p=>p.data.trim()===r);f&&(s=f)}return document.head.insertBefore(l,s),()=>{l.remove()}},co=(i,r,l,s)=>{if(l===document){const f=Zy(i);if(window.Vaadin.theme.injectedGlobalCss.indexOf(f)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(f)}const c=Yy(i,l);return l===document?Jy(c,r):qy(c,l,s)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function Xf(i){let r,l,s=2166136261;for(r=0,l=i.length;r<l;r++)s^=i.charCodeAt(r),s+=(s<<1)+(s<<4)+(s<<7)+(s<<8)+(s<<24);return("0000000"+(s>>>0).toString(16)).substr(-8)}function Zy(i){let r=Xf(i);return r+Xf(r+i)}document._vaadintheme_flowcrmtutorial_componentCss||(document._vaadintheme_flowcrmtutorial_componentCss=!0);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gp=ot`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;sr("spacing-props",Gp);const e0=ot`vaadin-text-field.bordered::part(input-field){box-shadow:inset 0 0 0 1px var(--lumo-contrast-30pct);background-color:var(--lumo-base-color)}`,t0=i=>{const r=[];i!==document&&(r.push(co(Cu.cssText,"",i,!0)),r.push(co(bu.cssText,"",i,!0)),r.push(co(Gp.cssText,"",i,!0)),r.push(co(Pu.cssText,"",i,!0)),r.push(co(Tu.cssText,"",i,!0)),r.push(co(e0.toString(),"",i)))},n0=t0;n0(document);export{Og as B,ht as E,r0 as O,f0 as T,ru as _,ot as a,gy as b,Ug as c,Ty as d,Fg as e,Or as f,Vp as g,wp as h,co as i,sr as j,bu as k,Cu as l,l0 as m,D as n,Ah as o,mo as p,Nr as q,Zl as r,Ig as t,Tg as x};
