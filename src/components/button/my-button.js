// Lit importieren – drei Named Exports reichen für den Start
import { LitElement, html, css } from 'lit';

class MyButton extends LitElement {

  // Reaktive Properties: Lit re-rendert bei jeder Änderung
  static properties = {
    variant:  { type: String },  // 'primary' | 'secondary'
    size:     { type: String },  // 'sm' | 'md' | 'lg'
    disabled: { type: Boolean },
  };

  // Shadow DOM Styles – greift nur innerhalb der Komponente
  static styles = css`
    :host {
      display: inline-block;        /* damit width/margin von außen funktioniert */
    }

    button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-family: var(--font-base, system-ui, sans-serif);
      font-weight: 500;
      border: 1.5px solid transparent;
      border-radius: var(--radius-md, 0.5rem);
      cursor: pointer;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
      white-space: nowrap;
    }

    /* Größen */
    button.sm { padding: 0.25rem 0.75rem; font-size: 0.8125rem; }
    button.md { padding: 0.5rem  1rem;    font-size: 0.9375rem; }
    button.lg { padding: 0.75rem 1.5rem;  font-size: 1rem;      }

    /* Variante: primary */
    button.primary {
      background: var(--color-primary, #2563eb);
      color: #fff;
      border-color: var(--color-primary, #2563eb);
    }
    button.primary:hover:not(:disabled) {
      background: var(--color-primary-hover, #1d4ed8);
      border-color: var(--color-primary-hover, #1d4ed8);
    }

    /* Variante: secondary */
    button.secondary {
      background: transparent;
      color: var(--color-primary, #2563eb);
      border-color: var(--color-primary, #2563eb);
    }
    button.secondary:hover:not(:disabled) {
      background: color-mix(in srgb, var(--color-primary, #2563eb) 8%, transparent);
    }

    /* Disabled-Zustand für beide Varianten */
    button:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    /* Focus-Ring (Accessibility) */
    button:focus-visible {
      outline: 2px solid var(--color-primary, #2563eb);
      outline-offset: 3px;
    }
  `;

  render() {
    // Fallback-Werte falls keine Property gesetzt ist
    const variant = this.variant ?? 'primary';
    const size    = this.size    ?? 'md';

    return html`
      <button
        class="${variant} ${size}"
        ?disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('my-button', MyButton);
