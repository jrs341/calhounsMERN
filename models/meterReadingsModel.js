/* Mongoose Example (Solution) (18.3.03)
 * ===================================== */

// Dependency
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// Instantiate a userSchema object with the Schema class we just made
var MeterReadingsSchema = new Schema({
  // username is a string. We will trim any trailing whitespace. It's also required
  meter: {
    type: String,
    trim: true,
    required: "Meter ID is Required"
  },
  reading: {
    type: String,
    trim: true,
    required: "Meter Reading is Required"
  },
  customer: {
    type: String,
    trim: true,
    // default: need a function here to match the customer
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Our lastUpdatedDate method
MeterReadingsSchema.methods.lastUpdatedDate = function() {
  // Make lastUpdatedDate the current date
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};

// Create the "User" model with our UserSchema schema
var MeterReadings = mongoose.model("MeterReadings", MeterReadingsSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = MeterReadings;
