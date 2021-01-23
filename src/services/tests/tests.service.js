// Initializes the `tests` service on path `/tests`
const { Tests } = require('./tests.class');
const createModel = require('../../models/tests.model');
const hooks = require('./tests.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tests', new Tests(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tests');

  service.hooks(hooks);
};
