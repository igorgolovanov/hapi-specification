'use strict';

const Pkg = require('../package.json');

const internals = {};

exports.plugin = {
  name: 'specification',
  version: Pkg.version,
  once: true,
  requirements: {
    node: '>=8',
    hapi: '>=17.0'
  },
  register: async function (server, options) {

  }
};