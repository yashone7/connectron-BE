const { authenticate } = require("@feathersjs/authentication").hooks;

const checkFeedLocation = require("../../hooks/check-feed-location");

const aggregateUserData = require("../../hooks/aggregate-user-data");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [
      /*aggregateUserData()*/
    ],
    get: [],
    create: [checkFeedLocation()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [aggregateUserData()],
    get: [],
    create: [aggregateUserData()],
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
