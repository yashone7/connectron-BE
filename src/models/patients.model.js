// patients-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "patients";
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

  const contactSchema = new Schema({
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    location: {
      type: pointSchema,
      required: true,
    },
  });

  const occupationSchema = new Schema({
    occupation: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "daily wage worker",
        "working class",
        "middle class",
        "student",
        "other",
      ],
      required: true,
    },
  });

  const medicalHistorySchema = new Schema({
    isDiabetic: {
      type: Boolean,
      required: true,
    },
    isAsthmatic: {
      type: Boolean,
      required: true,
    },
    hasHighBloodPressure: {
      type: Boolean,
      required: true,
    },
    isHighRisk: {
      type: Boolean,
      required: true,
    },
    remarks: {
      type: String,
    },
  });

  const schema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        enum: ["male", "female", "others"],
      },
      uniqueID: {
        type: String,
        required: true,
      },
      contact: {
        type: contactSchema,
        required: true,
      },
      occupationDetails: {
        type: occupationSchema,
        required: true,
      },
      medicalHistory: {
        type: medicalHistorySchema,
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
