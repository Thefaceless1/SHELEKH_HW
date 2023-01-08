import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern : "HW23/integration/*.spec.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
