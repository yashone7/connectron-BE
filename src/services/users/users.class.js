const feathers = require("@feathersjs/feathers");
const configuration = require("@feathersjs/configuration");

const app = feathers().configure(configuration());
const { Service } = require("feathers-mongoose");

const crypto = require("crypto");

const gravatarUrl = "https://s.gravatar.com/avatar";

const query = "s=60";

const getGravatar = (email) => {
  const hash = crypto
    .createHash("md5")
    .update(email.toLowerCase())
    .digest("hex");
  return `${gravatarUrl}/${hash}?${query}`;
};

const getUserLink = (usertag) => {
  let userLink = "";
  let env = app.get("NODE_ENV");

  if (env === "development") {
    userLink = "http://localhost:3000/" + usertag;
  }
  if (env === "production") {
    userLink = "https://connectron.com/" + usertag;
  }
  return userLink;
};

exports.Users = class Users extends (
  Service
) {
  create(data, params) {
    const { name, email, usertag, password, contact, role } = data;

    console.log(email);

    const avatar = data.avatar || getGravatar(email);

    const link = data.link || getUserLink(usertag);

    const userData = {
      avatar,
      name,
      email,
      usertag,
      password,
      contact,
      role,
      link,
    };

    return super.create(userData, params);
  }
};
