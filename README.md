# noxara-ui

A framework-agnostic design system built with [Lit](https://lit.dev) and native Web Components. Components are distributed as an npm package and work in any environment — plain HTML, Spring Boot / Thymeleaf, React, Vue, and Angular.

---

## Features

- **Web Components** — encapsulated, reusable custom elements with Shadow DOM
- **Design Tokens** — all visual decisions as CSS Custom Properties (colors, spacing, radii, typography)
- **Framework-agnostic** — works wherever HTML works
- **Documented in Storybook** — interactive component playground with Controls
- **Tested with Vitest** — component tests run against happy-dom

---

## Quickstart

### Via npm

```bash
npm install noxara-ui
```

Import all components in your entry file:

```js
import 'noxara-ui';
```

Or import individual components:

```js
import 'noxara-ui/components/button/my-button.js';
```

Then use the components directly in HTML:

```html
<my-button variant="primary">Speichern</my-button>
<my-button variant="secondary">Abbrechen</my-button>
```

### Via CDN / Thymeleaf

```html
<link rel="stylesheet" href="/webjars/noxara-ui/tokens/tokens.css">
<script type="module" src="/webjars/noxara-ui/index.js"></script>

<my-button variant="primary">Los geht's</my-button>
```

### Via Maven (WebJars)

```xml
<dependency>
  <groupId>org.webjars.npm</groupId>
  <artifactId>noxara-ui</artifactId>
  <version>0.1.0</version>
</dependency>
```

---

## Design Tokens

All visual decisions are defined as CSS Custom Properties and can be overridden per project:

```css
:root {
  --color-primary:      #2563eb;
  --color-surface:      #ffffff;
  --spacing-md:         1rem;
  --radius-md:          0.5rem;
  --font-base:          system-ui, sans-serif;
}
```

To apply a custom theme, override any token in your own `:root` block after importing `tokens.css`.

---

## Components

All components are documented and interactively testable in Storybook.

| Component | Tag | Variants / Props |
|---|---|---|
| Button | `<my-button>` | `variant`, `size`, `disabled` |

More components are planned. See the [Storybook](#storybook) section for live examples.

---

## Project Structure

```
noxara-ui/
├── src/
│   ├── tokens/
│   │   └── tokens.css          # CSS Custom Properties
│   ├── components/
│   │   └── button/
│   │       ├── my-button.js        # Lit Web Component
│   │       ├── my-button.stories.js # Storybook Story
│   │       └── my-button.test.js    # Vitest Unit Test
│   └── index.js                # Re-export of all components
├── .storybook/
│   ├── main.js
│   └── preview.js
├── vite.config.js
└── package.json
```

Each component lives in its own folder together with its story and its test file.

---

## Storybook

Component documentation and the interactive playground are available via Storybook.

```bash
npm run storybook
```

Opens at `http://localhost:6006`. Use the **Controls** panel to change props live without editing code.

---

## Testing

Components are tested with [Vitest](https://vitest.dev) against **happy-dom**.

```bash
# Run all tests once
npm test

# Watch mode — re-runs on every file change
npx vitest
```

Tests live next to the component they cover (`my-button.test.js` alongside `my-button.js`). Each test verifies rendering, prop behavior, event handling, and slot content — not internal styling.

> **Note:** A migration to Vitest Browser Mode (Playwright / Chromium) is planned for cases where happy-dom reaches its limits with native browser APIs.

---

## Development

```bash
# Install dependencies
npm install

# Start the Vite dev server
npm run dev

# Build the package (library mode)
npm run build
```

---

## License

Licensed under the [Apache License 2.0](./LICENSE).

Copyright 2024 noxara-ui contributors.