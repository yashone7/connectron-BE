// Initializes the `feeds` service on path `/feeds`
const { Feeds } = require('./feeds.class');
const createModel = require('../../models/feeds.model');
const hooks = require('./feeds.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/feeds', new Feeds(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('feeds');

  service.hooks(hooks);
};
