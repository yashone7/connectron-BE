// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { query } = context.params;
    const { user_id, feed_id, type } = query;

    if (type === "like") {
      const like = await context.app
        .service("like")
        .Model.findOneAndDelete({ user_id: user_id, feed_id: feed_id });
      context.result = like;
    }

    if (type === "bookmark") {
      const like = await context.app
        .service("bookmarks")
        .Model.findOneAndDelete({ user_id: user_id, feed_id: feed_id });
      context.result = like;
    }

    return context;
  };
};
