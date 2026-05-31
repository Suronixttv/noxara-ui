import { describe, expect, it } from 'vitest';
import './my-button.js';
describe('<my-button>', () => {
  it('registers the custom element', () => {
    expect(customElements.get('my-button')).toBeTruthy();
  });
  it('renders a native <button> in shadow root', async () => {
    const el = document.createElement('my-button');
    document.body.appendChild(el);
    await el.updateComplete;
    const btn = el.shadowRoot?.querySelector('button');
    expect(btn).toBeTruthy();
    el.remove();
  });
});