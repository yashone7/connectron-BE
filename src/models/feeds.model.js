// feeds-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "feeds";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;

  let pointSchema = new Schema({
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

  const schema = new Schema(
    {
      user_id: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      data: {
        type: Object,
        required: true,
      },
      location: {
        type: pointSchema,
        required: true,
      },
      // likes: [{ type: Schema.Types.ObjectId, ref: "users" }],
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
