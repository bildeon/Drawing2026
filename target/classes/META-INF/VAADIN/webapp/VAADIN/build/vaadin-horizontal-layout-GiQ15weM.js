import{a,r as e,d as t,T as s}from"./indexhtml-Bu9lwJzR.js";import{E as o,P as m,h as i}from"./chunk-3e8b0a89765577764afe6d722a961843944bdb3dbcfcdcfbb1d232dac307117f-tdYxQxOB.js";const l=a`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }

  :host([theme~='wrap']) {
    flex-wrap: wrap;
  }
`;e("vaadin-horizontal-layout",l,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class n extends o(s(m)){static get template(){return i`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}t(n);
