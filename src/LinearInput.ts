/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { html, css, LitElement, PropertyValues } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

const textfieldTypes = ['text', 'url', 'tel', 'email', 'password'] as const;
export type TextfieldType = (typeof textfieldTypes)[number];

const icons = {
  success: html`<svg
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
  loading: html` <svg
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
  error: html`<svg
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
export class LinearInput extends LitElement {
  // static get formAssociated() {
  //   return true;
  // }

  static formAssociated = true;

  private _internals: ElementInternals;

  @property({ type: String }) caretColor = 'black'; // Custom caret color

  @property({ type: String }) borderColor = 'gray'; // Custom border color

  @property({ type: String }) backgroundColor = 'white'; // Custom background color

  @property({ type: String }) fontSize = '16px'; // Custom font size

  @property({ type: String }) indicatorColor = '#627ef6';

  @property({ type: String }) textColor = 'black';

  constructor() {
    super();
    this._internals = this.attachInternals();
    this._internals.role = 'input';
    this.tabIndex = 0;
  }

  /**
   * @private
   * This binding allows for invalid value for `type` to still be reflected to the DOM
   */
  @property({ attribute: 'type', reflect: true })
  private _type: TextfieldType = 'text';

  @state()
  set type(val: TextfieldType) {
    const prev = this._type;
    this._type = val;
    this.requestUpdate('type', prev);
  }

  get type(): TextfieldType {
    return textfieldTypes.find(t => t === this._type) ?? 'text';
  }

  /**
   * What form of assistance should be provided when attempting to supply a value to the form control
   */
  @property({ type: String, reflect: true })
  public autocomplete?:
    | 'list'
    | 'none'
    | HTMLInputElement['autocomplete']
    | HTMLTextAreaElement['autocomplete'];

  /**
   * Text that appears in the form control when it has no value set
   */
  @property()
  public placeholder = '';

  /**
   * Whether the `value` held by the form control is invalid.
   */
  @property({ type: Boolean, reflect: true })
  public invalid = false;

  /**
   * A string applied via `aria-label` to the form control when a user visible label is not provided.
   */
  @property()
  public label = '';

  @property({ type: Number }) length = 0;

  @property({ type: String }) inputText = '';

  @property({ type: Number }) letterCount = 0;

  @property({ type: Number }) maxCount = 10;

  @property({ type: Number }) inputCount = 0;

  @property({ type: Number }) inputWidth = 10;

  @property({ type: Boolean }) isTyping = false;

  @property({ type: Boolean }) success = false;

  @property({ type: Boolean }) isMaxCountReached = false;

  /**
   * Defines the maximum string length that the user can enter
   */
  @property({ type: Number })
  public maxlength = -1;

  /**
   * Defines the minimum string length that the user can enter
   */
  @property({ type: Number })
  public minlength = -1;

  /**
   * Whether a user can interact with the value of the form control
   */
  @property({ type: Boolean, reflect: true })
  public readonly = false;

  /**
   * Whether the `value` held by the form control is valid.
   */
  @property({ type: Boolean, reflect: true })
  public valid = false;

  /**
   * Pattern the `value` must match to be valid
   */
  @property()
  public pattern?: string;

  protected get displayValue(): string {
    return this.value.toString();
  }

  protected _value: string | number = '';

  /**
   * The value held by the form control
   */
  @property({ type: String })
  public set value(value: string | number) {
    if (value === this.value) {
      return;
    }
    const oldValue = this._value;
    this._value = value;
    this.requestUpdate('value', oldValue);
  }

  public get value(): string | number {
    return this._value;
  }

  /**
   * @private
   */
  @property({ type: Boolean, reflect: true })
  public focused = false;

  /**
   * Whether the form control will be found to be invalid when it holds no `value`
   */
  @property({ type: Boolean, reflect: true })
  public required = false;

  /**
   * A regular expression outlining the keys that will be allowed to update the value of the form control.
   */
  @property({ attribute: 'allowed-keys' })
  allowedKeys = '';

  /**
   * disabled the `value` must match to be valid
   */
  @property({ type: Boolean, reflect: true })
  public disabled = false;

  static styles = css`
    :host {
      --caret-color: var(--input-caret-color, #d9d9d9;);
      --border-color: var(--input-border-color, #bbb);
      --background-color: var(--input-background-color, white);
      --font-size: var(--input-font-size, 16px);
      --indicator-color: var(--input-indicator-color, #627ef6);
      --text-color: var(--input-text-color, black);
    }
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
      border: 1px solid var(--border-color);
      color: (--text-color);

      font-size: var(--font-size);
      font-family: inherit;
      caret-color: white;
    }
    .caret {
      width: 0.35rem;
      height: 80%;
      background-color: var(--caret-color);
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
      background-color: var(--indicator-color);
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

  @query('.linear-input')
  protected inputElement!: HTMLInputElement | HTMLTextAreaElement;

  // public override get focusElement(): HTMLInputElement | HTMLTextAreaElement {
  //   return this.inputElement;
  // }

  /**
   * Selects all the text.
   */
  public select(): void {
    this.inputElement.select();
  }

  public checkValidity(): boolean {
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

  protected handleInputChange(_event: Event): void {
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));

    const inputText = this.inputElement.value;
    this.inputCount = Math.min(inputText.length, this.maxCount);
    this.isMaxCountReached = inputText.length >= this.maxCount;

    this.updateInputWidth(inputText);

    if (this.allowedKeys && this.inputElement.value) {
      const regExp = new RegExp(`^[${this.allowedKeys}]*$`, 'u');
      if (!regExp.test(this.inputElement.value)) {
        const selectionStart = this.inputElement.selectionStart as number;
        const nextSelectStart = selectionStart - 1;
        this.inputElement.value = this.value.toString();
        this.inputElement.setSelectionRange(nextSelectStart, nextSelectStart);
        return;
      }
    }
    this.value = this.inputElement.value;

    this._internals.setFormValue(this.value); // Notify the form of the value change
  }

  updateInputWidth(inputText: string) {
    const hiddenDiv = document.createElement('div');
    hiddenDiv.style.cssText =
      'position: absolute; visibility: hidden; white-space: pre; font-size: inherit;';
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

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Space') {
      event.preventDefault();
    }
    if (
      this.isMaxCountReached &&
      event.code !== 'Backspace' &&
      event.code !== 'Delete'
    ) {
      console.log('isMaxCountReached');
      event.preventDefault();
    }
  }

  protected handleChange(): void {
    this.dispatchEvent(
      new Event('change', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  protected override update(changedProperties: PropertyValues): void {
    if (
      changedProperties.has('value') ||
      (changedProperties.has('required') && this.required)
    ) {
      this.updateComplete.then(() => {
        this.checkValidity();
      });
    }
    super.update(changedProperties);
  }

  protected onFocus(): void {
    this.focused = !this.readonly && true;
  }

  protected onBlur(): void {
    this.focused = !this.readonly && false;
  }

  render() {
    const caretHeight = `${(this.inputCount / this.maxCount) * 100}%`;

    return html`
      <div class="input-wrapper">
        <input
          style="
        --input-caret-color: ${this.caretColor};
        --input-border-color: ${this.borderColor};
        --input-background-color: ${this.backgroundColor};
        --input-font-size: ${this.fontSize};
        --input-indicator-color: ${this.indicatorColor};
        --input-text-color:${this.textColor};
      "
          id="linear-input"
          pattern="${ifDefined(this.pattern || undefined)}"
          class="linear-input"
          @keydown="${this.handleKeyDown}"
          @input="${this.handleInputChange}"
          @focus="${this.handleFocus}"
          @blur="${this.handleBlur}"
          @change="${this.handleChange}"
          type=${this.type}
          aria-label=${this.label || this.placeholder}
          aria-invalid=${ifDefined(this.invalid || undefined)}
          maxlength=${ifDefined(
            this.maxlength > -1 ? this.maxlength : undefined,
          )}
          minlength=${ifDefined(
            this.minlength > -1 ? this.minlength : undefined,
          )}
          placeholder=${this.placeholder}
          .value=${live(this.displayValue)}
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
