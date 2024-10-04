import { html, TemplateResult } from 'lit';
import '../src/linear-input.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export default {
  title: 'LinearInput',
  component: 'linear-input',
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    name: { control: 'text' },
    id: { control: 'text' },
    success: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    readonly: { control: 'boolean' },
    minlength: { control: 'number' },
    maxlength: { control: 'number' },
    pattern: { control: 'text' },
    invalid: { control: 'boolean' },
    valid: { control: 'boolean' },
    autocomplete: {
      control: {
        type: 'select',
        options: ['on', 'off', 'name', 'email', 'username', 'new-password'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'url', 'tel', 'email', 'password'],
      },
    },
    textColor: { control: 'color' },
    caretColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    indicatorColor: { control: 'color' },
    slot: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  id?: string;
  success?: boolean;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  invalid?: boolean;
  valid?: boolean;
  autocomplete?: string;
  type?: string;
  textColor?: string;
  slot?: TemplateResult;
  caretColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  fontSize?: string;
  indicatorColor?: string;
}

const Template: Story<ArgTypes> = ({
  label,
  placeholder,
  value,
  name,
  id,
  success,
  disabled,
  required,
  readonly,
  minlength,
  maxlength,
  pattern,
  invalid,
  valid,
  autocomplete,
  type,
  slot,
  caretColor,
  textColor,
  borderColor,
  backgroundColor,
  fontSize,
  indicatorColor,
}: ArgTypes) => html`
  <linear-input
    label=${ifDefined(label || '')}
    placeholder=${ifDefined(placeholder)}
    value=${ifDefined(value)}
    name=${ifDefined(name)}
    id=${ifDefined(id)}
    ?success=${success}
    ?disabled=${disabled}
    ?required=${required}
    ?readonly=${readonly}
    minlength=${ifDefined(minlength)}
    maxlength=${ifDefined(maxlength)}
    pattern=${ifDefined(pattern)}
    ?invalid=${invalid}
    ?valid=${valid}
    autocomplete=${ifDefined(autocomplete)}
    type=${ifDefined(type)}
    style="

     --input-caret-color: ${caretColor};
        --input-border-color: ${borderColor};
        --input-background-color: ${backgroundColor};
        --input-font-size: ${fontSize};
        --input-indicator-color: ${indicatorColor};
        --input-text-color:${textColor};
    
    "
  >
    ${slot}
  </linear-input>
`;

export const Regular = Template.bind({});

Regular.args = {
  label: 'Enter your life story',
  placeholder: 'Enter your life story',
  value: '',
  name: 'username',
  id: 'username',
  success: false,
  disabled: false,
  required: false,
  readonly: false,
  minlength: 0,
  maxlength: 100,
  pattern: '',
  invalid: false,
  valid: false,
  autocomplete: 'off',
  type: 'text',
  textColor: 'black',

  caretColor: 'black', // Custom caret color

  borderColor: 'gray', // Custom border color

  backgroundColor: 'white', // Custom background color

  fontSize: '16px', // Custom font size
};

export const CustomSuccess = Template.bind({});
CustomSuccess.args = {
  ...Regular.args,
  success: true,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  ...Regular.args,
  disabled: true,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
