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

app.get("/searchCustomer", function(req, res){
  
    Customer.find({email: req.body.email}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
      console.log(doc);
    }
  });
});

app.post("/submitCustomer", function(req, res) {
 // check our req.body against our user model
  var customer = new Customer(req.body);

  customer.save(function(error, doc) {

    if (error) {
      res.send(error);
    }
    else {
      console.log(req.body);
      res.send(doc);
    }
  });
});

app.post("/submitEmployee", function(req, res) {
 // check our req.body against our user model
  var employee = new Employee(req.body);
  employee.save(function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

// this route will insert the Square Customer ID into the meter reading
app.post("/addCustomerToMeter", function(req, res) {

})

app.post("/newMeter", function(req, res) {

  var newMeter = new MeterReadings(req.body);
  newMeter.save(function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  })
});

app.post("/submitAllMeterReadings", function(req, res) {
  // console.log(req.params.meter);
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

// Connection to PORT
app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});