const { authenticate } = require("@feathersjs/authentication").hooks;

const checkTestLocation = require("../../hooks/check-test-location");

const aggregateTestResults = require("../../hooks/aggregate-test-results");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [aggregateTestResults()],
    get: [],
    create: [checkTestLocation()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
