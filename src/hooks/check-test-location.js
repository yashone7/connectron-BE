// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const _ = require('lodash');

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data } = context;

    if (!data.location) {
      throw new Error('Please enter location data');
    }

    const { type, coordinates } = data.location;

    if (_.isEmpty(type) || _.isEmpty(coordinates)) {
      throw new Error('The format of the location data does not match with specified format');
    }
    return context;
  };
};
