// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  "roots": [
    "./src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },

  // Make calling deprecated APIs throw helpful error messages
  errorOnDeprecated: true,

  // Automatically reset mock state between every test
  resetMocks: true,

  // Reset the module registry before running each individual test
  resetModules: true,

  // The test environment that will be used for testing
  testEnvironment: "jest-environment-jsdom",

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  testLocationInResults: true,

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: "http://localhost:101010",

  // Setup Enzyme
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFilesAfterEnv": ["./src/setupEnzyme.ts"]
};
