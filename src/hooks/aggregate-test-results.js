// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { parseISO } = require("date-fns");
// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { query } = context.params;
    const { aggregate, orderBy, startDate, endDate, groupBy, matchBy } = query;

    if (aggregate === "true") {
      if (orderBy === "none") {
        const tests = await context.service.Model.aggregate([
          {
            $lookup: {
              from: "patients",
              localField: "patient_id",
              foreignField: "uniqueID",
              as: "patient",
            },
          },
          { $unwind: "$patient" },
        ]);
        context.result = tests;
      }
      if (orderBy === "date" && groupBy === "highRisk") {
        const tests = await context.app.service("tests").Model.aggregate([
          {
            $match: {
              test_date: { $gt: parseISO(startDate), $lt: parseISO(endDate) },
            },
          },
          {
            $lookup: {
              from: "patients",
              localField: "patient_id",
              foreignField: "uniqueID",
              as: "patient",
            },
          },
          { $unwind: "$patient" },
          {
            $match: {
              $expr: {
                $or: [
                  { $eq: ["$patient.medicalHistory.isAsthmatic", true] },
                  { $eq: ["$patient.medicalHistory.isDiabetic", true] },
                  { $eq: ["$patient.medicalHistory.isHighRisk", true] },
                  {
                    $eq: ["$patient.medicalHistory.hasHighBloodPressure", true],
                  },
                ],
              },
            },
          },
        ]);
        context.result = tests;
      }
      if (orderBy === "date") {
        const tests = await context.app.service("tests").Model.aggregate([
          {
            $match: {
              test_date: { $gt: parseISO(startDate), $lt: parseISO(endDate) },
            },
          },
          {
            $lookup: {
              from: "patients",
              localField: "patient_id",
              foreignField: "uniqueID",
              as: "patient",
            },
          },
          { $unwind: "$patient" },
        ]);
        context.result = tests;
      }
      if (matchBy === "negative" && orderBy === "date") {
        const tests = await context.app.service("tests").Model.aggregate([
          {
            $match: {
              test_date: { $gt: parseISO(startDate), $lt: parseISO(endDate) },
              status: { $eq: "negative" },
            },
          },
          {
            $lookup: {
              from: "patients",
              localField: "patient_id",
              foreignField: "uniqueID",
              as: "patient",
            },
          },
          { $unwind: "$patient" },
        ]);
        context.result = tests;
      }
      if (matchBy === "positive" && orderBy === "date") {
        const tests = await context.app.service("tests").Model.aggregate([
          {
            $match: {
              test_date: { $gt: parseISO(startDate), $lt: parseISO(endDate) },
              status: { $eq: "positive" },
            },
          },
          {
            $lookup: {
              from: "patients",
              localField: "patient_id",
              foreignField: "uniqueID",
              as: "patient",
            },
          },
          { $unwind: "$patient" },
        ]);

        context.result = tests;
      }
      if (matchBy === "negative" && groupBy === "none") {
        const tests = await context.app.service("tests").Model.aggregate([
          {
            $match: {
              status: { $eq: "negative" },
            },
          },
          {
            $lookup: {
              from: "patients",
              localField: "patient_id",
              foreignField: "uniqueID",
              as: "patient",
            },
          },
          { $unwind: "$patient" },
        ]);
        context.result = tests;
      }
      if (matchBy === "positive" && groupBy === "none") {
        const tests = await context.app.service("tests").Model.aggregate([
          {
            $match: {
              status: { $eq: "positive" },
            },
          },
          {
            $lookup: {
              from: "patients",
              localField: "patient_id",
              foreignField: "uniqueID",
              as: "patient",
            },
          },
          { $unwind: "$patient" },
        ]);
        context.result = tests;
      }
      if (matchBy === "positive" && groupBy === "highRisk") {
        const tests = await context.app.service("tests").Model.aggregate([
          {
            $match: {
              status: { $eq: "positive" },
            },
          },
          {
            $lookup: {
              from: "patients",
              localField: "patient_id",
              foreignField: "uniqueID",
              as: "patient",
            },
          },
          { $unwind: "$patient" },
          {
            $match: {
              $expr: {
                $or: [
                  { $eq: ["$patient.medicalHistory.isAsthmatic", true] },
                  { $eq: ["$patient.medicalHistory.isDiabetic", true] },
                  { $eq: ["$patient.medicalHistory.isHighRisk", true] },
                  {
                    $eq: ["$patient.medicalHistory.hasHighBloodPressure", true],
                  },
                ],
              },
            },
          },
        ]);
        context.result = tests;
      }
      if (matchBy === "positive" && groupBy === "notHighRisk") {
        const tests = await context.app.service("tests").Model.aggregate([
          {
            $match: {
              status: { $eq: "positive" },
            },
          },
          {
            $lookup: {
              from: "patients",
              localField: "patient_id",
              foreignField: "uniqueID",
              as: "patient",
            },
          },
          { $unwind: "$patient" },
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$patient.medicalHistory.isAsthmatic", false] },
                  { $eq: ["$patient.medicalHistory.isDiabetic", false] },
                  { $eq: ["$patient.medicalHistory.isHighRisk", false] },
                  {
                    $eq: [
                      "$patient.medicalHistory.hasHighBloodPressure",
                      false,
                    ],
                  },
                ],
              },
            },
          },
        ]);
        context.result = tests;
      }
      if (matchBy === "negative" && groupBy === "healthy") {
        const tests = await context.app.service("tests").Model.aggregate([
          {
            $match: {
              status: { $eq: "negative" },
            },
          },
          {
            $lookup: {
              from: "patients",
              localField: "patient_id",
              foreignField: "uniqueID",
              as: "patient",
            },
          },
          { $unwind: "$patient" },
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$patient.medicalHistory.isAsthmatic", false] },
                  { $eq: ["$patient.medicalHistory.isDiabetic", false] },
                  { $eq: ["$patient.medicalHistory.isHighRisk", false] },
                  {
                    $eq: [
                      "$patient.medicalHistory.hasHighBloodPressure",
                      false,
                    ],
                  },
                ],
              },
            },
          },
        ]);
        context.result = tests;
      }
      if (matchBy === "negative" && groupBy === "highRisk") {
        const tests = await context.app.service("tests").Model.aggregate([
          {
            $match: {
              status: { $eq: "negative" },
            },
          },
          {
            $lookup: {
              from: "patients",
              localField: "patient_id",
              foreignField: "uniqueID",
              as: "patient",
            },
          },
          { $unwind: "$patient" },
          {
            $match: {
              $expr: {
                $or: [
                  { $eq: ["$patient.medicalHistory.isAsthmatic", true] },
                  { $eq: ["$patient.medicalHistory.isDiabetic", true] },
                  { $eq: ["$patient.medicalHistory.isHighRisk", true] },
                  {
                    $eq: ["$patient.medicalHistory.hasHighBloodPressure", true],
                  },
                ],
              },
            },
          },
        ]);
        context.result = tests;
      }
    }
    return context;
  };
};

// mongodb aggregation pipeline is working fine just that I needed to change the model name.
