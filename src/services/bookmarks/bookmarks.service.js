// Initializes the `bookmarks` service on path `/bookmarks`
const { Bookmarks } = require('./bookmarks.class');
const createModel = require('../../models/bookmarks.model');
const hooks = require('./bookmarks.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/bookmarks', new Bookmarks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bookmarks');

  service.hooks(hooks);
};
