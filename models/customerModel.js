
// Dependency
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// Instantiate a userSchema object with the Schema class we just made
var CustomerSchema = new Schema({
  // username is a string. We will trim any trailing whitespace. It's also required
  given_name: {
    type: String,
    trim: true,
    required: "First Name Required"
  },
  family_name: {
    type: String,
    trim: true,
    required: "Last Name Required",
  },
  phone_number: {
    type: String,
    trim: true,
    required: "Phone Number Required"
  },
  // email is a string, and it must be a unique one in our collection
  // Notice how it must match our regex, which checks for email
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
    address_line_1: {
      type: String,
      trim: true
    },
    locality: {
      type: String,
      trim: true
    },
    administrative_district_level_1: {
      type: String,
      trim: true
    },
    postal_code: {
      type: String,
      trim: true
    },
    country: {
      type: String,
      trim: true
    },
  // This will make a userCreated entry in our doc, by default the current time string.
  created_at: {
    type: Date,
    default: Date.now
  }, 
  space: {
    type: String,
    trim: true,
    // default: need a funciton here to get the meter
  }
});

// Create the "User" model with our UserSchema schema
var Customer = mongoose.model("Customer", CustomerSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = Customer;
