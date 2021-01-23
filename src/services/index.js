const users = require("./users/users.service.js");
const tests = require("./tests/tests.service.js");
const patients = require("./patients/patients.service.js");
const feeds = require("./feeds/feeds.service.js");
const comments = require('./comments/comments.service.js');
const like = require('./like/like.service.js');
const bookmarks = require('./bookmarks/bookmarks.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(tests);
  app.configure(patients);
  app.configure(feeds);
  app.configure(comments);
  app.configure(like);
  app.configure(bookmarks);
};
