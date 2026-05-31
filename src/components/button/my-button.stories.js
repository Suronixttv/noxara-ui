import { html } from 'lit';
import './my-button.js';

export default {
  title: 'Components/Button',
  component: 'my-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  render: ({ label, variant, size, disabled }) => html`
    <my-button variant=${variant} size=${size} ?disabled=${disabled}>
      ${label}
    </my-button>
  `,
};

export const Primary = {
  args: {
    label: 'Speichern',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export const Secondary = {
  args: {
    label: 'Abbrechen',
    variant: 'secondary',
    size: 'md',
    disabled: false,
  },
};

export const Large = {
  args: {
    label: 'Großer Button',
    variant: 'primary',
    size: 'lg',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Gesperrt',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};
