/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  testRegex: '.*\\.spec\\.ts$',
  globalSetup: null,
};
