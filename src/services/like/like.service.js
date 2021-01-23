// Initializes the `like` service on path `/like`
const { Like } = require('./like.class');
const createModel = require('../../models/like.model');
const hooks = require('./like.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/like', new Like(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('like');

  service.hooks(hooks);
};
