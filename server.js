// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require(`path`);
// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");

// Here's where we establish a connection to the collection
// We bring the model in like any old module
// Most of the magic with mongoose happens there
//
// Example gets saved as a class, so we can create new Example objects
// and send them as validated, formatted data to our mongoDB collection.
var Customer = require("./models/customerModel.js");
var Employee = require("./models/employeeModel.js");
var MeterReadings = require("./models/meterReadingsModel.js");
mongoose.Promise = Promise;


// Express Port/App Declaration
var PORT = process.env.PORT || 3000;
var app = express();

// Configure app with morgan and body parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Database configuration for mongoose
// db: calhouns
mongoose.connect("mongodb://localhost/calhouns");
// Hook mongoose connection to db
var db = mongoose.connection;

// Log any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Log a success message when we connect to our mongoDB collection with no issues
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Routes
// app.get(`*`, function(req, res) {
//   res.sendFile('public/index.html', { root: __dirname });
// });

// Simple index route
app.get("/", function(req, res) {
  res.send(index.html);
});

app.get("/chooseUpdateProcess", function(req, res) {
  res.send(chooseMeterUpdate.html);
});

app.get("/checkin", function(req, res) {
  res.send(checkin.html);
});

app.get("/checkout", function(req, res) {
  res.send(checkout.html);
});

// Route to post our form submission to mongoDB via mongoose
app.post("/submitCustomer", function(req, res) {

  // We use the "Example" class we defined above to check our req.body against our user model
  var user = new Customer(req.body);

  // With the new "Example" object created, we can save our data to mongoose
  // Notice the different syntax. The magic happens in userModel.js
  user.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise, send the new doc to the browser
    else {
      res.send(doc);
    }
  });
});

app.post("/submitEmployee", function(req, res) {

  // We use the "Example" class we defined above to check our req.body against our user model
  var user = new Employee(req.body);

  // With the new "Example" object created, we can save our data to mongoose
  // Notice the different syntax. The magic happens in userModel.js
  user.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise, send the new doc to the browser
    else {
      res.send(doc);
    }
  });
});

app.post("/submitAllMeterReadings", function(req, res) {
  
  // var meterReading = new MeterReadings(req.body);
  console.log(req.params.meter);
  MeterReadings.findOneAndUpdate({meter:req.body.meter}, { $push: { reading: req.body.reading } }, {safe: true, upsert: true, new : true}, function(error, doc) {

    if (error) {
      res.send(error);
    }
    
    else {
      res.send(doc);
    }
  });
});

app.get("/meter", function(req, res) {
  // finds all the individual meters in the db
  // .find({ }, {_id: 1, meter: 1 }
 // MeterReadings.distinct("meter", function(error, doc) {
MeterReadings.find({}, function(error, doc) {
 
    // Log any errors
    if (error) {
      res.send(error);
    }
    // Otherwise, send the doc to the browser as a json object
    else {
      res.send(doc);
    }
  });
});

// app.get("/lasttworeadings", function(req, res) {
// // http://blog.rueckstiess.com/mongodb/2013/06/13/recency-vs-sorting.html
//   MeterReadings.find({meter : {$in : ['a', 'b']}}, null, { sort: { '_id' : -1 }, sort : {'meter' : 1}}, function(error, doc) {
  
//     if (error) {
//       res.send(error);
//     }
//     else {
//       res.send(doc);
//     }

//   });
// });

// // Connection to PORT
app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});