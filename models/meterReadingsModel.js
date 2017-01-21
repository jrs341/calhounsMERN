/* Mongoose Example (Solution) (18.3.03)
 * ===================================== */

// Dependency
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// Instantiate a userSchema object with the Schema class we just made
var MeterReadingsSchema = new Schema({
  // username is a string. We will trim any trailing whitespace. It's also required
  readingA: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingB: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingC: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingD: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingE: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingF: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingG: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingH: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingI: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingJ: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingA1: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingA2: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingC1: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingC2: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingC3: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingC4: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingM1: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  readingM2: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  }
});

// Create the "User" model with our UserSchema schema
var MeterReadings = mongoose.model("MeterReadings", MeterReadingsSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = MeterReadings;
