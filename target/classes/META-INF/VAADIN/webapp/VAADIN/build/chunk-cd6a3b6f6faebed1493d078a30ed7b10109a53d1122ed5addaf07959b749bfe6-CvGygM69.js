import{a0 as x,C as P,ac as A,i as j,ad as W,h as S,U as q,P as k,D as G,ae as K,p as Z,N as Y,af as J,ag as Q,E as X}from"./chunk-3e8b0a89765577764afe6d722a961843944bdb3dbcfcdcfbb1d232dac307117f-tdYxQxOB.js";import{a as C,r as E,d as D,T as ee,b as te}from"./indexhtml-Bu9lwJzR.js";import{A as oe,F as ie,a as se}from"./focus-trap-controller-CgfpB3mF.js";/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const I=C`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow:
      0 0 0 1px var(--lumo-shade-5pct),
      var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;E("",I,{moduleId:"lumo-overlay"});const ne=C`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;E("vaadin-tooltip-overlay",[I,ne],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const re=C`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])),
  :host(:not([opened]):not([closing])) [part='overlay'] {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ae{saveFocus(o){this.focusNode=o||x()}restoreFocus(o){const e=this.focusNode;if(!e)return;const t=o?o.preventScroll:!1;x()===document.body?setTimeout(()=>e.focus({preventScroll:t})):e.focus({preventScroll:t}),this.focusNode=null}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const le=n=>class extends P(n){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new oe(this),this.__focusTrapController=new ie(this),this.__focusRestorationController=new ae}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){if(this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()){const e=!A();this.__focusRestorationController.restoreFocus({preventScroll:e})}}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const e=x();return e===document.body||this._deepContains(e)}_deepContains(e){if(this.contains(e))return!0;let t=e;const i=e.ownerDocument;for(;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const F=()=>Array.from(document.body.children).filter(n=>n instanceof HTMLElement&&n._hasOverlayStackMixin&&!n.hasAttribute("closing")).sort((n,o)=>n.__zIndex-o.__zIndex||0),T=()=>F().filter(n=>n.$.overlay),de=n=>n===T().pop(),b=new WeakMap,he=(n,o)=>{o!=null?b.set(n,o):b.delete(n)},ce=n=>class extends n{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return de(this)}bringToFront(){let e="";const t=F().filter(i=>i!==this).pop();t&&(e=t.__zIndex+1),this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex),b.has(this)&&b.get(this).bringToFront()}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),T().forEach(e=>{e!==this&&(e.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=T();let t;for(;(t=e.pop())&&!(t!==this&&(t.$.overlay.style.removeProperty("pointer-events"),!t.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ue=n=>class extends le(ce(n)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0,sync:!0},owner:{type:Object,sync:!0},model:{type:Object,sync:!0},renderer:{type:Object,sync:!0},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged",sync:!0},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged",sync:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0,sync:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),j&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(e){const t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,i=window.innerWidth>e,s=document.documentElement.clientHeight;i&&s>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${s-e}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(e,t,i,s){const r=this._oldOwner!==t||this._oldModel!==i;this._oldModel=i,this._oldOwner=t;const a=this._oldRenderer!==e,l=this._oldRenderer!==void 0;this._oldRenderer=e;const d=this._oldOpened!==s;this._oldOpened=s,a&&l&&(this.innerHTML="",delete this._$litPart$),s&&e&&(a||d||r)&&this.requestContentUpdate()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(e,t){e?(this._saveFocus(),this._animatedOpening(),se(this,()=>{this._trapFocus();const i=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(i)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):t&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this),t=e.getPropertyValue("animation-name");return!(e.getPropertyValue("display")==="none")&&t&&t!=="none"}_enqueueAnimation(e,t){const i=`__${e}Handler`,s=r=>{r&&r.target!==this||(t(),this.removeEventListener("animationend",s),delete this[i])};this[i]=s,this.addEventListener("animationend",s)}_flushAnimation(e){const t=`__${e}Handler`;typeof this[t]=="function"&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(e){return this._last}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(e))return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last&&!(this.modeless&&!e.composedPath().includes(this.$.overlay))&&e.key==="Escape"){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}};/**
 * @license
 * Copyright (c) 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function _e(n,o){let e=null;const t=document.documentElement;function i(){e&&e.disconnect(),e=null}function s(r=!1,a=1){i();const{left:l,top:d,width:h,height:c}=n.getBoundingClientRect();if(r||o(),!h||!c)return;const g=Math.floor(d),v=Math.floor(t.clientWidth-(l+h)),$=Math.floor(t.clientHeight-(d+c)),N=Math.floor(l),U={rootMargin:`${-g}px ${-v}px ${-$}px ${-N}px`,threshold:Math.max(0,Math.min(1,a))||1};let L=!0;function B(V){let y=V[0].intersectionRatio;if(y!==a){if(!L)return s();y===0&&(y=1e-7),s(!1,y)}L=!1}e=new IntersectionObserver(B,U),e.observe(n)}return s(!0),i}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const w={start:"top",end:"bottom"},O={start:"left",end:"right"},M=new ResizeObserver(n=>{setTimeout(()=>{n.forEach(o=>{o.target.__overlay&&o.target.__overlay._updatePosition()})})}),pe=n=>class extends n{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=W(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)}),this.positionTarget&&(this.__observePositionTargetMove=_e(this.positionTarget,()=>{this._updatePosition()}))}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null),this.__observePositionTargetMove&&(this.__observePositionTargetMove(),this.__observePositionTargetMove=null)}__overlayOpenedChanged(e,t){if(this.__removeUpdatePositionEventListeners(),t&&(t.__overlay=null,M.unobserve(t),e&&(this.__addUpdatePositionEventListeners(),t.__overlay=this,M.observe(t))),e){const i=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(s=>{this.__margins[s]=parseInt(i[s],10)})),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){e.target instanceof Node&&this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened||!this.__margins)return;const e=this.positionTarget.getBoundingClientRect();if(e.width===0&&e.height===0&&this.opened){this.opened=!1;return}const t=this.__shouldAlignStartVertically(e);this.style.justifyContent=t?"flex-start":"flex-end";const i=this.__isRTL,s=this.__shouldAlignStartHorizontally(e,i),r=!i&&s||i&&!s;this.style.alignItems=r?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,a,this.noVerticalOverlap,w,this,t),d=this.__calculatePositionInOneDimension(e,a,this.noHorizontalOverlap,O,this,s);Object.assign(this.style,l,d),this.toggleAttribute("bottom-aligned",!t),this.toggleAttribute("top-aligned",t),this.toggleAttribute("end-aligned",!r),this.toggleAttribute("start-aligned",r)}__shouldAlignStartHorizontally(e,t){const i=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const s=Math.min(window.innerWidth,document.documentElement.clientWidth),r=!t&&this.horizontalAlign==="start"||t&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,i,s,this.__margins,r,this.noHorizontalOverlap,O)}__shouldAlignStartVertically(e){const t=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const i=Math.min(window.innerHeight,document.documentElement.clientHeight),s=this.verticalAlign==="top";return this.__shouldAlignStart(e,t,i,this.__margins,s,this.noVerticalOverlap,w)}__shouldAlignStart(e,t,i,s,r,a,l){const d=i-e[a?l.end:l.start]-s[l.end],h=e[a?l.start:l.end]-s[l.start],c=r?d:h,v=c>(r?h:d)||c>t;return r===v}__adjustBottomProperty(e,t,i){let s;if(e===t.end){if(t.end===w.end){const r=Math.min(window.innerHeight,document.documentElement.clientHeight);if(i>r&&this.__oldViewportHeight){const a=this.__oldViewportHeight-r;s=i-a}this.__oldViewportHeight=r}if(t.end===O.end){const r=Math.min(window.innerWidth,document.documentElement.clientWidth);if(i>r&&this.__oldViewportWidth){const a=this.__oldViewportWidth-r;s=i-a}this.__oldViewportWidth=r}}return s}__calculatePositionInOneDimension(e,t,i,s,r,a){const l=a?s.start:s.end,d=a?s.end:s.start,h=parseFloat(r.style[l]||getComputedStyle(r)[l]),c=this.__adjustBottomProperty(l,s,h),g=t[a?s.start:s.end]-e[i===a?s.end:s.start],v=c?`${c}px`:`${h+g*(a?-1:1)}px`;return{[l]:v,[d]:""}}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ve=n=>{let o=n;for(;o&&o!==n.ownerDocument;)if(o=o.parentNode||o.host,o&&o._hasOverlayStackMixin)return o;return null},fe=n=>class extends pe(ue(n)){static get properties(){return{position:{type:String,reflectToAttribute:!0}}}static get observers(){return["__openedOrTargetChanged(opened, positionTarget)"]}get _tagNamePrefix(){return"vaadin-popover"}requestContentUpdate(){if(super.requestContentUpdate(),this.positionTarget&&this.owner){const e=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(t=>{this.style.setProperty(`--${this._tagNamePrefix}-offset-${t}`,e.getPropertyValue(`--${this._tagNamePrefix}-offset-${t}`))})}}_updatePosition(){if(super._updatePosition(),!(!this.positionTarget||!this.opened)){if(this.removeAttribute("arrow-centered"),this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),i=e.width/2-t.width/2;if(this.style.left){const s=t.left+i;s>0&&(this.style.left=`${s}px`,this.setAttribute("arrow-centered",""))}if(this.style.right){const s=parseFloat(this.style.right)+i;s>0&&(this.style.right=`${s}px`,this.setAttribute("arrow-centered",""))}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),i=e.height/2-t.height/2;this.style.top=`${t.top+i}px`}}}__openedOrTargetChanged(e,t){if(t){const i=ve(t);i&&he(i,e?this:null)}}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const me=C`
  [part='overlay'] {
    max-width: 40ch;
  }

  [part='content'] {
    white-space: pre-wrap;
  }

  :host([position^='top'][top-aligned]) [part='overlay'],
  :host([position^='bottom'][top-aligned]) [part='overlay'] {
    margin-top: var(--vaadin-tooltip-offset-top, 0);
  }

  :host([position^='top'][bottom-aligned]) [part='overlay'],
  :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
    margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
  }

  :host([position^='start'][start-aligned]) [part='overlay'],
  :host([position^='end'][start-aligned]) [part='overlay'] {
    margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
  }

  :host([position^='start'][end-aligned]) [part='overlay'],
  :host([position^='end'][end-aligned]) [part='overlay'] {
    margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 1px dashed;
    }
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */E("vaadin-tooltip-overlay",[re,me],{moduleId:"vaadin-tooltip-overlay-styles"});class ge extends fe(q(ee(k))){static get is(){return"vaadin-tooltip-overlay"}static get template(){return S`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}get _tagNamePrefix(){return"vaadin-tooltip"}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()==="")}}D(ge);/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ye=n=>class extends n{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,t){if(!t||e===void 0)return;const{classList:i}=t;if(this.__initialClasses||(this.__initialClasses=new Set(i)),Array.isArray(this.__previousClasses)){const r=this.__previousClasses.filter(a=>!this.__initialClasses.has(a));r.length>0&&i.remove(...r)}const s=typeof e=="string"?e.split(" ").filter(Boolean):[];s.length>0&&i.add(...s),this.__previousClasses=s}};/**
 * @license
 * Copyright (c) 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const be=n=>class extends n{static get properties(){return{position:{type:String},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"}}}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computePosition(e,t){return e||t}};/**
 * @license
 * Copyright (c) 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ce=n=>class extends n{static get properties(){return{for:{type:String,observer:"__forChanged"},target:{type:Object},__isConnected:{type:Boolean,sync:!0}}}static get observers(){return["__targetOrConnectedChanged(target, __isConnected)"]}connectedCallback(){super.connectedCallback(),this.__isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__isConnected=!1}__forChanged(e){e&&(this.__setTargetByIdDebouncer=G.debounce(this.__setTargetByIdDebouncer,K,()=>this.__setTargetById(e)))}__setTargetById(e){if(!this.isConnected)return;const t=this.getRootNode().getElementById(e);t?this.target=t:console.warn(`No element with id="${e}" set via "for" property found on the page.`)}__targetOrConnectedChanged(e,t){this.__previousTarget&&(this.__previousTarget!==e||!t)&&this._removeTargetListeners(this.__previousTarget),e&&t&&this._addTargetListeners(e),this.__previousTarget=e}_addTargetListeners(e){}_removeTargetListeners(e){}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const p=500;let z=p,R=p,H=p;const u=new Set;let f=!1,_=null,m=null;class we{constructor(o){this.host=o}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const o=this.host;return o.focusDelay!=null&&o.focusDelay>=0?o.focusDelay:z}get hoverDelay(){const o=this.host;return o.hoverDelay!=null&&o.hoverDelay>=0?o.hoverDelay:R}get hideDelay(){const o=this.host;return o.hideDelay!=null&&o.hideDelay>=0?o.hideDelay:H}get isClosing(){return u.has(this.host)}open(o={immediate:!1}){const{immediate:e,hover:t,focus:i}=o,s=t&&this.hoverDelay>0,r=i&&this.focusDelay>0;!e&&(s||r)&&!this.__closeTimeout?this.__warmupTooltip(r):this.__showTooltip()}close(o){!o&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),f&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(o){this.host[this.openedProp]=o}__flushClosingTooltips(){u.forEach(o=>{o._stateController.close(!0),u.delete(o)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),f=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(o){this._isOpened()||(f?this.__showTooltip():_==null&&this.__scheduleWarmUp(o))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null),this.isClosing&&u.delete(this.host)}__abortCooldown(){m&&(clearTimeout(m),m=null)}__abortWarmUp(){_&&(clearTimeout(_),_=null)}__scheduleClose(){this._isOpened()&&!this.isClosing&&(u.add(this.host),this.__closeTimeout=setTimeout(()=>{u.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){m=setTimeout(()=>{m=null,f=!1},this.hideDelay)}__scheduleWarmUp(o){const e=o?this.focusDelay:this.hoverDelay;_=setTimeout(()=>{_=null,f=!0,this.__showTooltip()},e)}}const Oe=n=>class extends be(Ce(ye(n))){static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},generator:{type:Object},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1,sync:!0},opened:{type:Boolean,value:!1,sync:!0},shouldShow:{type:Object,value:()=>(e,t)=>!0},text:{type:String,observer:"__textChanged"},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged",sync:!0},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean,sync:!0},_srLabel:{type:Object},_overlayContent:{type:String}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)","__updateSrLabelText(_srLabel, _overlayContent)"]}static setDefaultFocusDelay(e){z=e!=null&&e>=0?e:p}static setDefaultHideDelay(e){H=e!=null&&e>=0?e:p}static setDefaultHoverDelay(e){R=e!=null&&e>=0?e:p}constructor(){super(),this._uniqueId=`vaadin-tooltip-${Z()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(e=>{e.forEach(t=>this.__onTargetVisibilityChange(t.isIntersecting))},{threshold:0}),this._stateController=new we(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._srLabelController=new Y(this,"sr-label","div",{initializer:e=>{e.id=this._uniqueId,e.setAttribute("role","tooltip"),this._srLabel=e}}),this.addController(this._srLabelController)}__computeOpened(e,t,i,s){return s&&(e?t:i)}__autoOpenedChanged(e,t){e?document.addEventListener("keydown",this.__onKeyDown,!0):t&&document.removeEventListener("keydown",this.__onKeyDown,!0)}_addTargetListeners(e){e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)})}_removeTargetListeners(e){e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e)}__onFocusin(e){this.manual||A()&&(this.target.contains(e.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this.manual||this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){const t=this.__isTargetHidden;if(this.__isTargetHidden=!e,t&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(e,t){this._overlayElement&&(e||t)&&this._overlayElement.requestContentUpdate()}__tooltipRenderer(e){e.textContent=typeof this.generator=="function"?this.generator(this.context):this.text,this._overlayContent=e.textContent}__computeAriaTarget(e,t){const i=r=>r&&r.nodeType===Node.ELEMENT_NODE;return(Array.isArray(e)?e.some(i):e)?e:t}__effectiveAriaTargetChanged(e,t){t&&[t].flat().forEach(i=>{J(i,"aria-describedby",this._uniqueId)}),e&&[e].flat().forEach(i=>{Q(i,"aria-describedby",this._uniqueId)})}__generatorChanged(e,t,i){e&&((t!==this.__oldTextGenerator||i!==this.__oldContext)&&e.requestContentUpdate(),this.__oldTextGenerator=t,this.__oldContext=i)}__updateSrLabelText(e,t){e&&(e.textContent=t)}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xe extends Oe(te(X(P(k)))){static get is(){return"vaadin-tooltip"}static get template(){return S`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseenter="__onOverlayMouseEnter"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>

      <slot name="sr-label"></slot>
    `}}D(xe);document.addEventListener("click",n=>{const o=n.composedPath().find(e=>e.hasAttribute&&e.hasAttribute("disableonclick"));o&&(o.disabled=!0)});const He=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),$e=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Ne=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{ce as O,pe as P,ye as a,ue as b,re as c,He as d,$e as e,Ne as f,I as o};
