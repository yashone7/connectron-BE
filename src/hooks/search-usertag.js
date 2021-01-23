const _ = require("lodash");
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    // const { query } = context.params;
    // const { usertag } = query;

    // console.log(usertag);

    // if (!_.isEmpty(usertag)) {
    //   const users = await context.service.Model.find({
    //     usertag: { $regex: /usertag/, $options: "i" },
    //   });
    //   console.log(users);
    //   context.result = users;
    // }

    return context;
  };
};
