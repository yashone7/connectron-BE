// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "users";
  const mongooseClient = app.get("mongooseClient");

  const pointSchema = new mongooseClient.Schema({
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  });

  const contactSchema = new mongooseClient.Schema({
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    location: {
      type: pointSchema,
    },
  });

  const schema = new mongooseClient.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        lowercase: true,
      },
      avatar: {
        type: String,
      },
      link: {
        type: String,
      },
      password: {
        type: String,
        required: true,
      },
      usertag: {
        type: String,
        required: true,
        text: true,
      },
      role: {
        type: String,
        enum: ["doctor", "individual", "ngo"],
        default: "individual",
        required: true,
      },
      contact: {
        type: contactSchema,
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
