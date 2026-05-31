import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    //TODO: HappDom simmuates a virtual DOM for testing purposes. Therfor some real Browser-specific behavior may not be tested.
    // someapis may not be available in the happy-dom environment. Rebuild in Browswer Mode could be more expsive but would be more accurate.
    environment: 'happy-dom',
    testMatch: ['**/*.test.js'],
    include: ['src/**/*.test.js'],
  },
});