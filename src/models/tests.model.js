// tests-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "tests";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;

  const pointSchema = new Schema({
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
      test_date: {
        type: Date,
        required: true,
      },
      location: {
        type: pointSchema,
        required: true,
      },
      patient_id: {
        type: String,
        ref: "patients",
        required: true,
      },
      doctor_id: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      status: {
        type: String,
        enum: ["positive", "negative", "pending"],
        default: "pending",
        required: true,
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
