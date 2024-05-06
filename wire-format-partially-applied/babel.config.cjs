'use strict';

module.exports = {
  plugins: [
    '@embroider/addon-dev/template-colocation-plugin',
    [
      'babel-plugin-ember-template-compilation',
      {
        compiler: require('ember-source/dist/ember-template-compiler'),
        targetFormat: 'wire',
        transforms: [],
      },
    ],
    [
      'module:decorator-transforms',
      { runtime: { import: 'decorator-transforms/runtime' } },
    ],
  ],
};
