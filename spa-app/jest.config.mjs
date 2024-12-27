/** @type {import('jest').Config} */

const config = {
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
    ],
    transform: {
      "\\.(ts|tsx)$": "ts-jest"
    },
  };
  
 export default config;
