module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/test/mocks/svg.ts",
    "\\.css$":"<rootDir>/src/test/mocks/css.ts",
    "@Components/(.*)": "<rootDir>/src/components/$1",
  },
  testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/setEnvVars.js"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
