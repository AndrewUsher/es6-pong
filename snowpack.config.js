// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/'
  },
  optimize: {
    preload: true,
    minify: true,
    sourcemap: 'external',
    target: 'es2017'
  }
};
