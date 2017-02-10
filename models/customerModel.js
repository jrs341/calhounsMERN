
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
    // required: "Last Name Required",
  },
  phone_number: {
    type: String,
    trim: true,
    // required: "Phone Number Required"
  },
  phone_number_alt: {
    type: String,
    trim: true,
  },
  // email is a string, and it must be a unique one in our collection
  // Notice how it must match our regex, which checks for email
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
    required: "Email Address is Required"
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
    trim: true,
    default: 'US'
  },
  drivers_license_num: {
    type: String,
    trim: true
  },
  drivers_license_state: {
    type: String,
    trim: true
  },
  additional_occupant_1: {
    type: String,
    trim: true
  },
  additional_occupant_2: {
    type: String,
    trim: true
  },
  additional_occupant_3: {
    type: String,
    trim: true
  },
  additional_occupant_4: {
    type: String,
    trim: true
  },
  additional_occupant_1_age: {
    type: String,
    trim: true
  },
  additional_occupant_2_age: {
    type: String,
    trim: true
  },
  additional_occupant_3_age: {
    type: String,
    trim: true
  },
  additional_occupant_4_age: {
    type: String,
    trim: true
  },
  pets_number_of: {
    type: String,
    trim: true
  },
  pets_type: {
    type: String,
    trim: true
  },
  pets_breed: {
    type: String,
    trim: true
  },
  unit_type: {
    type: String,
    trim: true
  },
  unit_license: {
    type: String,
    trim: true
  },
  unit_state: {
    type: String,
    trim: true
  },
  unit_year: {
    type: String,
    trim: true
  },
  unit_length: {
    type: String,
    trim: true
  },
  vehicle_1_type: {
    type: String,
    trim: true
  },
  vehicle_2_type: {
    type: String,
    trim: true
  },
  vehicle_1_license: {
    type: String,
    trim: true
  },
  vehicle_2_license: {
    type: String,
    trim: true
  },
  vehicle_1_state: {
    type: String,
    trim: true
  },
  vehicle_2_state: {
    type: String,
    trim: true
  },
  vehicle_1_year: {
    type: String,
    trim: true
  },
  vehicle_2_year: {
    type: String,
    trim: true
  },
  reading: [{
    reading: {
    type: Number,
    trim: true
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  }],
  // This will make a userCreated entry in our doc, by default the current time string.
  created_at: {
    type: Date,
    default: Date.now
  }, 
  meter: {
    type: String,
    trim: true
    // default: need a funciton here to get the meter
  },

  checkin: {
    type: String,
    trim: true
  }
});

// Create the "User" model with our UserSchema schema
var Customer = mongoose.model("Customer", CustomerSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = Customer;
