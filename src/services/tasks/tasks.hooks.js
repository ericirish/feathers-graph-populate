
// Hooks for service `tasks`.
const commonHooks = require('feathers-hooks-common')

const { populates } = require('./tasks.schema')
const { populate } = require('../../../lib/index')
const namedQueries = undefined



// eslint-disable-next-line no-unused-vars
const { iff } = commonHooks
// eslint-disable-next-line no-unused-vars
const { create, update, patch, validateCreate, validateUpdate, validatePatch } = require('./tasks.validate')




let moduleExports = {
  before: {

    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []

  },

  after: {

    all: [],
    find: [
      populate({ populates, namedQueries })
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []

  },

  error: {

    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []

  },

}


module.exports = moduleExports



