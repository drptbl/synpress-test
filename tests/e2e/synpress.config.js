import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "tests/e2e/support.js",
  },
});

// export default {
//   e2e: {
//     baseUrl: "http://localhost:3001",
//     specPattern: "tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}",
//     supportFile: "tests/e2e/support.ts",
//   },
// };
