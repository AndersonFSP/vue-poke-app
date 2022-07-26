module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ['**/src/**/*.spec.(ts|js)'],
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transformIgnorePatterns: ['/node_modules/'],
  setupFiles: ['<rootDir>/jest.setup.ts']
}
