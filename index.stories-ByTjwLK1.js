import { u, f, D, r as rt, R, d as dt, i as i$1, h, k as ke } from './directive-helpers-Y4iy_eiJ.js';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:!0,attribute:!1})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$2=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$1(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;return e$2(n,s,{get(){return o(this)}})}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const to=t=>t??D;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this.t=t,this._$AM=e,this.i=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=e(class extends i{constructor(r){if(super(r),r.type!==t.PROPERTY&&r.type!==t.ATTRIBUTE&&r.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!rt(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===R||e===D)return e;const i=r.element,n=r.name;if(r.type===t.PROPERTY){if(e===i[n])return R}else if(r.type===t.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(n))return R}else if(r.type===t.ATTRIBUTE&&i.getAttribute(n)===e+"")return R;return dt(r),e}});

const textfieldTypes = ['text', 'url', 'tel', 'email', 'password'];
const icons = {
    success: ke `<svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="checkmark"
  >
    <circle class="circle" cx="6" cy="6" r="6" fill="#627EF6"></circle>
    <path
      d="M3 6L5 8L8 4"
      stroke="#F7F7F7"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="check"
    ></path>
  </svg>`,
    loading: ke ` <svg
    version="1.1"
    class="checkmark"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="20"
    height="20"
    viewBox="0 0 50 50"
    style="enable-background:new 0 0 50 50;"
    xml:space="preserve"
  >
    <path
      fill="#627EF6"
      stroke-width="8"
      stroke="#627EF6"
      stroke-linecap="round"
      d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </svg>`,
    error: ke `<svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="checkmark"
  >
    <path
      d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
      fill="#FF474A"
    />
    <path
      d="M4.5 8L7.5 4"
      stroke="#F7F7F7"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="crossleft"
    />
    <path
      d="M7.61225 7.91069L4.38785 4.08927"
      stroke="#F7F7F7"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="check"
    />
  </svg> `,
};
/**
 * @fires input - The value of the element has changed.
 * @fires change - An alteration to the value of the element has been committed by the user.
 */
class LinearInput extends h {
    constructor() {
        super();
        /**
         * @private
         * This binding allows for invalid value for `type` to still be reflected to the DOM
         */
        this._type = 'text';
        /**
         * Text that appears in the form control when it has no value set
         */
        this.placeholder = '';
        /**
         * Whether the `value` held by the form control is invalid.
         */
        this.invalid = false;
        /**
         * A string applied via `aria-label` to the form control when a user visible label is not provided.
         */
        this.label = '';
        this.length = 0;
        this.inputText = '';
        this.letterCount = 0;
        this.maxCount = 10;
        this.inputCount = 0;
        this.inputWidth = 10;
        this.isTyping = false;
        this.success = false;
        this.isMaxCountReached = false;
        /**
         * Defines the maximum string length that the user can enter
         */
        this.maxlength = -1;
        /**
         * Defines the minimum string length that the user can enter
         */
        this.minlength = -1;
        /**
         * Whether a user can interact with the value of the form control
         */
        this.readonly = false;
        /**
         * Whether the `value` held by the form control is valid.
         */
        this.valid = false;
        this._value = '';
        /**
         * @private
         */
        this.focused = false;
        /**
         * Whether the form control will be found to be invalid when it holds no `value`
         */
        this.required = false;
        /**
         * A regular expression outlining the keys that will be allowed to update the value of the form control.
         */
        this.allowedKeys = '';
        /**
         * disabled the `value` must match to be valid
         */
        this.disabled = false;
        this._internals = this.attachInternals();
        this._internals.role = 'input';
        this.tabIndex = 0;
    }
    set type(val) {
        const prev = this._type;
        this._type = val;
        this.requestUpdate('type', prev);
    }
    get type() {
        return textfieldTypes.find(t => t === this._type) ?? 'text';
    }
    get displayValue() {
        return this.value.toString();
    }
    /**
     * The value held by the form control
     */
    set value(value) {
        if (value === this.value) {
            return;
        }
        const oldValue = this._value;
        this._value = value;
        this.requestUpdate('value', oldValue);
    }
    get value() {
        return this._value;
    }
    // public override get focusElement(): HTMLInputElement | HTMLTextAreaElement {
    //   return this.inputElement;
    // }
    /**
     * Selects all the text.
     */
    select() {
        this.inputElement.select();
    }
    checkValidity() {
        let validity = this.inputElement.checkValidity();
        if (this.required || (this.value && this.pattern)) {
            if (this.disabled && this.pattern) {
                const regex = new RegExp(`^${this.pattern}$`, 'u');
                validity = regex.test(this.value.toString());
            }
            if (typeof this.minlength !== 'undefined') {
                validity = validity && this.value.toString().length >= this.minlength;
            }
            this.valid = validity;
            this.invalid = !validity;
        }
        return validity;
    }
    handleInputChange(_event) {
        this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
        const inputText = this.inputElement.value;
        this.inputCount = Math.min(inputText.length, this.maxCount);
        this.isMaxCountReached = inputText.length >= this.maxCount;
        this.updateInputWidth(inputText);
        if (this.allowedKeys && this.inputElement.value) {
            const regExp = new RegExp(`^[${this.allowedKeys}]*$`, 'u');
            if (!regExp.test(this.inputElement.value)) {
                const selectionStart = this.inputElement.selectionStart;
                const nextSelectStart = selectionStart - 1;
                this.inputElement.value = this.value.toString();
                this.inputElement.setSelectionRange(nextSelectStart, nextSelectStart);
                return;
            }
        }
        this.value = this.inputElement.value;
        this._internals.setFormValue(this.value); // Notify the form of the value change
    }
    updateInputWidth(inputText) {
        const hiddenDiv = document.createElement('div');
        hiddenDiv.style.cssText =
            'position: absolute; visibility: hidden; white-space: pre; font-size: 1.35rem;';
        hiddenDiv.textContent = inputText;
        document.body.appendChild(hiddenDiv);
        this.inputWidth = hiddenDiv.offsetWidth; // Extra padding
        hiddenDiv.remove(); // Cleanup
    }
    handleFocus() {
        this.isTyping = true;
    }
    handleBlur() {
        this.isTyping = false;
    }
    handleKeyDown(event) {
        if (event.key === 'Space') {
            event.preventDefault();
        }
        if (this.isMaxCountReached &&
            event.code !== 'Backspace' &&
            event.code !== 'Delete') {
            console.log('isMaxCountReached');
            event.preventDefault();
        }
    }
    handleChange() {
        this.dispatchEvent(new Event('change', {
            bubbles: true,
            composed: true,
        }));
    }
    update(changedProperties) {
        if (changedProperties.has('value') ||
            (changedProperties.has('required') && this.required)) {
            this.updateComplete.then(() => {
                this.checkValidity();
            });
        }
        super.update(changedProperties);
    }
    onFocus() {
        this.focused = !this.readonly && true;
    }
    onBlur() {
        this.focused = !this.readonly && false;
    }
    render() {
        const caretHeight = `${(this.inputCount / this.maxCount) * 100}%`;
        return ke `
      <div class="input-wrapper">
        <input
          id="linear-input"
          pattern="${to(this.pattern || undefined)}"
          class="linear-input"
          @keydown="${this.handleKeyDown}"
          @input="${this.handleInputChange}"
          @focus="${this.handleFocus}"
          @blur="${this.handleBlur}"
          @change="${this.handleChange}"
          type=${this.type}
          aria-label=${this.label || this.placeholder}
          aria-invalid=${to(this.invalid || undefined)}
          maxlength=${to(this.maxlength > -1 ? this.maxlength : undefined)}
          minlength=${to(this.minlength > -1 ? this.minlength : undefined)}
          placeholder=${this.placeholder}
          .value=${Ft(this.displayValue)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
        />
        <div
          style="left: ${this.inputWidth + 12}px;"
          class="caret ${!this.isTyping ? 'blink-caret' : ''} ${this
            .isMaxCountReached
            ? 'end-caret-animation'
            : ''}"
        >
          <div style="height: ${caretHeight};" class="indicator"></div>
        </div>
        ${this.isMaxCountReached ? icons.loading : ''}
        ${this.isMaxCountReached && this.success ? icons.success : ''}
      </div>
    `;
    }
}
// static get formAssociated() {
//   return true;
// }
LinearInput.formAssociated = true;
LinearInput.styles = i$1 `
    .input-wrapper {
      position: relative;
      width: 20rem;
      font-size: 12px;
    }
    .linear-input {
      border: none;
      padding: 0px 10px;

      width: 100%;

      height: 3.25rem;
      border-radius: 1rem;
      outline: none;
      border: 1px solid #bbb;

      font-size: 1.35rem;
      font-family: inherit;
      caret-color: white;
    }
    .caret {
      width: 0.35rem;
      height: 1.85rem;
      background-color: #d9d9d9;
      border-radius: 10rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: left 0.1s linear;
    }
    .blink-caret {
      animation: blink 1s step-end infinite;
    }
    .end-caret-animation {
      opacity: 0;
      left: 290px !important;
      height: 0px !important;
      transition:
        left 0.2s ease-out,
        height 0.1s ease-out 0.1s,
        opacity 0.2s ease-out 0.1s;
    }

    .indicator {
      width: 0.35rem;
      height: 0rem;
      border-radius: 10rem;
      background-color: #627ef6;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: height 0.2s linear;
    }

    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .checkmark {
      width: 1.5rem;
      height: 1.5rem;

      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0.75rem;
    }
    .circle {
      animation: circle-checkmark 0.2s ease-in-out;
      transform-origin: center;
    }
    .check {
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
      animation: drawCheck 1s ease-in-out forwards;
      animation-delay: 0.25s;
    }

    .crossleft {
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
      animation: drawCheck 1s ease-in-out forwards;
      animation-delay: 0.5s;
    }

    @keyframes circle-checkmark {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes drawCheck {
      to {
        stroke-dashoffset: 0;
      }
    }
  `;
__decorate([
    n({ attribute: 'type', reflect: true })
], LinearInput.prototype, "_type", void 0);
__decorate([
    r()
], LinearInput.prototype, "type", null);
__decorate([
    n({ type: String, reflect: true })
], LinearInput.prototype, "autocomplete", void 0);
__decorate([
    n()
], LinearInput.prototype, "placeholder", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], LinearInput.prototype, "invalid", void 0);
__decorate([
    n()
], LinearInput.prototype, "label", void 0);
__decorate([
    n({ type: Number })
], LinearInput.prototype, "length", void 0);
__decorate([
    n({ type: String })
], LinearInput.prototype, "inputText", void 0);
__decorate([
    n({ type: Number })
], LinearInput.prototype, "letterCount", void 0);
__decorate([
    n({ type: Number })
], LinearInput.prototype, "maxCount", void 0);
__decorate([
    n({ type: Number })
], LinearInput.prototype, "inputCount", void 0);
__decorate([
    n({ type: Number })
], LinearInput.prototype, "inputWidth", void 0);
__decorate([
    n({ type: Boolean })
], LinearInput.prototype, "isTyping", void 0);
__decorate([
    n({ type: Boolean })
], LinearInput.prototype, "success", void 0);
__decorate([
    n({ type: Boolean })
], LinearInput.prototype, "isMaxCountReached", void 0);
__decorate([
    n({ type: Number })
], LinearInput.prototype, "maxlength", void 0);
__decorate([
    n({ type: Number })
], LinearInput.prototype, "minlength", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], LinearInput.prototype, "readonly", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], LinearInput.prototype, "valid", void 0);
__decorate([
    n()
], LinearInput.prototype, "pattern", void 0);
__decorate([
    n({ type: String })
], LinearInput.prototype, "value", null);
__decorate([
    n({ type: Boolean, reflect: true })
], LinearInput.prototype, "focused", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], LinearInput.prototype, "required", void 0);
__decorate([
    n({ attribute: 'allowed-keys' })
], LinearInput.prototype, "allowedKeys", void 0);
__decorate([
    n({ type: Boolean, reflect: true })
], LinearInput.prototype, "disabled", void 0);
__decorate([
    e$1('.linear-input')
], LinearInput.prototype, "inputElement", void 0);

window.customElements.define('linear-input', LinearInput);

var index_stories = {
    title: 'LinearInput',
    component: 'linear-input',
    argTypes: {
        header: { control: 'text' },
        counter: { control: 'number' },
        textColor: { control: 'color' },
    },
};
const Template = ({ header = 'Hello world', counter = 5, textColor, slot, }) => ke `
  <linear-input
    style="--linear-input-text-color: ${textColor || 'black'}"
    .header=${header}
    .counter=${counter}
  >
    ${slot}
  </linear-input>
`;
const Regular = Template.bind({});
const CustomHeader = Template.bind({});
CustomHeader.args = {
    header: 'My header',
};
const CustomCounter = Template.bind({});
CustomCounter.args = {
    counter: 123456,
};
const SlottedContent = Template.bind({});
SlottedContent.args = {
    slot: ke `<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
    slot: { table: { disable: true } },
};

const __namedExportsOrder = ['Regular', 'CustomHeader', 'CustomCounter', 'SlottedContent'];

export { CustomCounter, CustomHeader, Regular, SlottedContent, __namedExportsOrder, index_stories as default };
