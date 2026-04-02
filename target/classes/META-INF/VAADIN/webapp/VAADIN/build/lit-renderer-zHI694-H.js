import{R as T,U as k,P as m,h as p,C as S,V as R,N as q,k as V,f as z,K as P,o as D,p as F,W as U,T as Q,X as $,Y as N,Z as H,E as W,H as j,_ as Y}from"./chunk-3e8b0a89765577764afe6d722a961843944bdb3dbcfcdcfbb1d232dac307117f-tdYxQxOB.js";import{a as l,r as s,T as v,d as f,e as K,c as G,t as c,f as y,E as X,B as Z,x as J}from"./indexhtml-Bu9lwJzR.js";import{o as ee,P as te,b as ie,c as ae,a as oe}from"./chunk-cd6a3b6f6faebed1493d078a30ed7b10109a53d1122ed5addaf07959b749bfe6-CvGygM69.js";import{I as ne,L as se}from"./list-mixin-DL09fx05.js";import{p as re}from"./templates-MIN_4tvW.js";const I=l`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--_selection-color-text);
    flex: none;
    opacity: 0;
    transition:
      transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2),
      opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }
  }

  :host([focus-ring]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;s("vaadin-item",I,{moduleId:"lumo-item"});const A=l`
  :host {
    -webkit-tap-highlight-color: transparent;
    --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
  }

  /* Dividers */
  [part='items'] ::slotted(hr) {
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) var(--lumo-border-radius-m);
    background-color: var(--lumo-contrast-10pct);
  }
`;s("vaadin-list-box",A,{moduleId:"lumo-list-box"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const E=l`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;s("",E,{moduleId:"lumo-menu-overlay-core"});const le=l`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 450px), (max-height: 450px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,L=[ee,E,le];s("",L,{moduleId:"lumo-menu-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */s("vaadin-select-item",I,{moduleId:"lumo-select-item"});s("vaadin-select-list-box",A,{moduleId:"lumo-select-list-box"});const de=l`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: var(--vaadin-input-field-value-font-weight, 500);
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  :host(:is([readonly], [disabled])) ::slotted([slot='value'][placeholder]) {
    opacity: 0;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --_lumo-selected-item-height: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;s("vaadin-select",[T,de],{moduleId:"lumo-select"});s("vaadin-select-value-button",l`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
      padding: 0 0.25em;
      --_lumo-selected-item-height: var(--lumo-size-m);
      --_lumo-selected-item-padding: 0.5em;
    }

    ::slotted(*) {
      min-height: var(--_lumo-selected-item-height);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
      font-size: inherit;
    }

    ::slotted(*:hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const ce=l`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  /* Small viewport adjustment */
  :host([phone]) {
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([no-vertical-overlap][top-aligned]) [part='overlay'] {
    margin-block-start: var(--lumo-space-xs);
  }

  :host([no-vertical-overlap][bottom-aligned]) [part='overlay'] {
    margin-block-end: var(--lumo-space-xs);
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;s("vaadin-select-overlay",[L,ce],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ue extends ne(v(k(m))){static get is(){return"vaadin-select-item"}static get template(){return p`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","option")}}f(ue);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class he extends se(v(k(S(m)))){static get is(){return"vaadin-select-list-box"}static get template(){return p`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox")}}f(he);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const me=i=>class extends te(ie(k(i))){static get observers(){return["_updateOverlayWidth(opened, owner)"]}ready(){super.ready(),this.restoreFocusOnClose=!0}_shouldCloseOnOutsideClick(e){return!0}_getMenuElement(){return Array.from(this.children).find(e=>e.localName!=="style")}_updateOverlayWidth(e,t){if(e&&t){const a="--vaadin-select-overlay-width",n=getComputedStyle(t).getPropertyValue(a);n===""?this.style.removeProperty(a):this.style.setProperty(a,n)}}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pe=l`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  :host(:not([phone])) [part='overlay'] {
    min-width: var(--vaadin-select-overlay-width, var(--vaadin-select-text-field-width));
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid;
    }
  }
`;s("vaadin-select-overlay",[ae,pe],{moduleId:"vaadin-select-overlay-styles"});class ve extends me(v(m)){static get is(){return"vaadin-select-overlay"}static get template(){return p`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const o=this._getMenuElement();this.owner._assignMenuElement(o)}}}f(ve);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fe=l`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    min-width: 0;
    width: 0;
  }

  ::slotted(*) {
    padding-left: 0;
    padding-right: 0;
    flex: auto;
  }

  /* placeholder styles */
  ::slotted(*:not([selected])) {
    line-height: 1;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: inherit;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    line-height: inherit;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */s("vaadin-select-value-button",fe,{moduleId:"vaadin-select-value-button-styles"});class _e extends R(v(m)){static get is(){return"vaadin-select-value-button"}static get template(){return p`
      <div class="vaadin-button-container">
        <span part="label">
          <slot></slot>
        </span>
      </div>
    `}}f(_e);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ge=l`
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ye{constructor(o,e){this.query=o,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(o){typeof this.callback=="function"&&this.callback(o.matches)}}/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class be extends q{constructor(o){super(o,"value","vaadin-select-value-button",{initializer:(e,t)=>{t._setFocusElement(e),t.ariaTarget=e,t.stateTarget=e,e.setAttribute("aria-haspopup","listbox")}})}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xe=i=>class extends oe(V(z(P(D(i))))){static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,sync:!0},renderer:{type:Object},value:{type:String,value:"",notify:!0,observer:"_valueChanged",sync:!0},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},noVerticalOverlap:{type:Boolean,value:!1},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 450px), (max-height: 450px)"},_inputContainer:Object,_items:Object}}static get delegateAttrs(){return[...super.delegateAttrs,"invalid"]}static get observers(){return["_updateAriaExpanded(opened, focusElement)","_updateSelectedItem(value, _items, placeholder)","_openedChanged(opened, _overlayElement, _inputContainer)"]}constructor(){super(),this._itemId=`value-${this.localName}-${F()}`,this._srLabelController=new U(this),this._srLabelController.slotName="sr-label"}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}ready(){super.ready(),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._valueButtonController=new be(this),this.addController(this._valueButtonController),this.addController(this._srLabelController),this.addController(new ye(this._phoneMediaQuery,e=>{this._phone=e})),this._tooltipController=new Q(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.focusElement),this.addController(this._tooltipController)}requestContentUpdate(){this._overlayElement&&(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_requiredChanged(e){super._requiredChanged(e),e===!1&&this._requestValidation()}__itemsChanged(e,t){(e||t)&&this.requestContentUpdate()}_assignMenuElement(e){e&&e!==this.__lastMenuElement&&(this._menuElement=e,this.__initMenuItems(e),e.addEventListener("items-changed",()=>{this.__initMenuItems(e)}),e.addEventListener("selected-changed",()=>this.__updateValueButton()),e.addEventListener("keydown",t=>this._onKeyDownInside(t),!0),e.addEventListener("click",t=>{const a=t.composedPath().find(n=>n._hasVaadinItemMixin);this.__dispatchChangePending=!!(a&&a.value!==void 0&&a.value!==this.value),this.opened=!1},!0),this.__lastMenuElement=e)}__initMenuItems(e){e.items&&(this._items=e.items)}_valueChanged(e,t){this.toggleAttribute("has-value",!!e),t!==void 0&&!this.__dispatchChangePending&&this._requestValidation()}_onClick(e){this.disabled||(e.preventDefault(),this.opened=!this.readonly)}_onToggleMouseDown(e){e.preventDefault()}_onKeyDown(e){if(e.target===this.focusElement&&!this.readonly&&!this.disabled&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/u.test(e.key))e.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(e.key)&&e.key.length===1){const t=this._menuElement.selected,a=t!==void 0?t:-1,n=this._menuElement._searchKey(a,e.key);n>=0&&(this.__dispatchChangePending=!0,this._updateAriaLive(!0),this._menuElement.selected=n)}}}_onKeyDownInside(e){/^(Tab)$/u.test(e.key)&&(this.opened=!1)}_openedChanged(e,t,a){if(!(!t||!a)){if(e){if(this.disabled||this.readonly){this.opened=!1;return}this._updateAriaLive(!1),t.style.setProperty("--vaadin-select-text-field-width",`${a.offsetWidth}px`);const n=this.hasAttribute("focus-ring");this._openedWithFocusRing=n,n&&this.removeAttribute("focus-ring")}else this.__oldOpened&&(this._openedWithFocusRing&&this.setAttribute("focus-ring",""),!this.__dispatchChangePending&&!this._keyboardActive&&this._requestValidation());this.__oldOpened=e}}_updateAriaExpanded(e,t){t&&t.setAttribute("aria-expanded",e?"true":"false")}_updateAriaLive(e){this.focusElement&&(e?this.focusElement.setAttribute("aria-live","polite"):this.focusElement.removeAttribute("aria-live"))}__attachSelectedItem(e){let t;const a=e.getAttribute("label");a?t=this.__createItemElement({label:a}):t=e.cloneNode(!0),t._sourceItem=e,this.__appendValueItemElement(t,this.focusElement),t.selected=!0}__createItemElement(e){const t=document.createElement(e.component||"vaadin-select-item");return e.label&&(t.textContent=e.label),e.value&&(t.value=e.value),e.disabled&&(t.disabled=e.disabled),e.className&&(t.className=e.className),t}__appendValueItemElement(e,t){t.appendChild(e),e.performUpdate&&e.performUpdate(),e.removeAttribute("tabindex"),e.removeAttribute("aria-selected"),e.removeAttribute("role"),e.removeAttribute("focused"),e.removeAttribute("focus-ring"),e.removeAttribute("active"),e.setAttribute("id",this._itemId)}_accessibleNameChanged(e){this._srLabelController.setLabel(e),this._setCustomAriaLabelledBy(e?this._srLabelController.defaultId:null)}_accessibleNameRefChanged(e){this._setCustomAriaLabelledBy(e)}_setCustomAriaLabelledBy(e){const t=this._getLabelIdWithItemId(e);this._fieldAriaController.setLabelId(t,!0)}_getLabelIdWithItemId(e){const a=(this._items?this._items[this._menuElement.selected]:!1)||this.placeholder?this._itemId:"";return e?`${e} ${a}`.trim():null}__updateValueButton(){const e=this.focusElement;if(!e)return;e.innerHTML="";const t=this._items[this._menuElement.selected];if(e.removeAttribute("placeholder"),this._hasContent(t))this.__attachSelectedItem(t);else if(this.placeholder){const n=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(n,e),e.setAttribute("placeholder","")}!this._valueChanging&&t&&(this._selectedChanging=!0,this.value=t.value||"",this.__dispatchChangePending&&this.__dispatchChange(),delete this._selectedChanging);const a=t||this.placeholder?{newId:this._itemId}:{oldId:this._itemId};$(e,"aria-labelledby",a),(this.accessibleName||this.accessibleNameRef)&&this._setCustomAriaLabelledBy(this.accessibleNameRef||this._srLabelController.defaultId)}_hasContent(e){if(!e)return!1;const t=!!(e.hasAttribute("label")?e.getAttribute("label"):e.textContent.trim()),a=e.childElementCount>0;return t||a}_updateSelectedItem(e,t){if(t){const a=e==null?e:e.toString();this._menuElement.selected=t.reduce((n,x,w)=>n===void 0&&x.value===a?w:n,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging)}}_shouldRemoveFocus(){return!this.opened}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this._requestValidation()}checkValidity(){return!this.required||this.readonly||!!this.value}__defaultRenderer(e,t){if(!this.items||this.items.length===0){e.textContent="";return}let a=e.firstElementChild;a||(a=document.createElement("vaadin-select-list-box"),e.appendChild(a)),a.textContent="",this.items.forEach(n=>{a.appendChild(this.__createItemElement(n))})}async __dispatchChange(){this.updateComplete&&await this.updateComplete,this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChangePending=!1}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */s("vaadin-select",[N,H,ge],{moduleId:"vaadin-select-styles"});class we extends xe(W(v(m))){static get is(){return"vaadin-select"}static get template(){return p`
      <style>
        :host {
          position: relative;
        }

        ::slotted([slot='value']) {
          flex-grow: 1;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[_theme]]"
        no-vertical-overlap$="[[noVerticalOverlap]]"
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-select-overlay>

      <slot name="tooltip"></slot>
      <div class="sr-only">
        <slot name="sr-label"></slot>
      </div>
    `}static get observers(){return["_rendererChanged(renderer, _overlayElement)"]}ready(){super.ready(),re(this)}_rendererChanged(o,e){e&&(e.renderer=o||this.__defaultRenderer,this.requestContentUpdate())}_onOverlayOpen(){this._menuElement&&this._menuElement.focus()}}f(we);window.Vaadin.Flow.selectConnector={};window.Vaadin.Flow.selectConnector.initLazy=i=>{i.$connector||(i.$connector={},i.renderer=o=>{const e=i.querySelector("vaadin-select-list-box");e&&(o.firstChild&&o.removeChild(o.firstChild),o.appendChild(e))})};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=K(class extends G{constructor(i){if(super(i),i.type!==c.PROPERTY&&i.type!==c.ATTRIBUTE&&i.type!==c.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!j(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[o]){if(o===y||o===X)return o;const e=i.element,t=i.name;if(i.type===c.PROPERTY){if(o===e[t])return y}else if(i.type===c.BOOLEAN_ATTRIBUTE){if(!!o===e.hasAttribute(t))return y}else if(i.type===c.ATTRIBUTE&&e.getAttribute(t)===o+"")return y;return Y(i),o}}),b=window;b.Vaadin=b.Vaadin||{};b.Vaadin.setLitRenderer=(i,o,e,t,a,n,x)=>{const w=r=>a.map(u=>(...d)=>{r!==void 0&&t(u,r,d[0]instanceof Event?[]:[...d])}),B=["html","root","live","appId","itemKey","model","item","index",...a,`return html\`${e}\``],M=new Function(...B),O=(r,u,d)=>{const{item:h,index:g}=u;Z(M(J,r,Ce,x,d,u,h,g,...w(d)),r)},_=(r,u,d)=>{const{item:h}=d;r.__litRenderer!==_&&(r.innerHTML="",delete r._$litPart$,r.__litRenderer=_);const g={};for(const C in h)C.startsWith(n)&&(g[C.replace(n,"")]=h[C]);O(r,{...d,item:g},h.key)};_.__rendererId=n,i[o]=_};b.Vaadin.unsetLitRenderer=(i,o,e)=>{var t;((t=i[o])==null?void 0:t.__rendererId)===e&&(i[o]=void 0)};
