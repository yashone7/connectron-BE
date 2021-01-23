// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, method, result, params } = context;

    const addUser = async (feed) => {
      const user = await app.service("users").get(feed.user_id, params);

      return {
        ...feed,
        user,
      };
    };

    // In a find method we need to process the entire page
    if (method === "find") {
      // Map all data to include the `user` information
      context.result.data = await Promise.all(result.data.map(addUser));
    } else {
      // Otherwise just update the single result
      context.result = await addUser(result);
    }

    return context;
  };
};
