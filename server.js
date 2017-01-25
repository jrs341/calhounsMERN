// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require(`path`);
// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");
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

// index route
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

app.post("/submitCustomer", function(req, res) {
 // check our req.body against our user model
  var user = new Customer(req.body);
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
 // check our req.body against our user model
  var user = new Employee(req.body);
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
  MeterReadings.find({}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

app.get("/lasttworeadings", function(req, res) {
// http://blog.rueckstiess.com/mongodb/2013/06/13/recency-vs-sorting.html
  MeterReadings.find({}, null, { sort: { '_id' : -1 }, sort : {'meter' : 1}}, function(error, doc) {
  
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }

  });
});

// Connection to PORT
app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});