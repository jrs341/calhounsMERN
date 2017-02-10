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
app.use(bodyParser.json());
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

// Routes this is from example and used for React
// app.get(`*`, function(req, res) {
//   res.sendFile('public/index.html', { root: __dirname });
// });

app.get(`/`, function(req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});
// index route
// app.get("/", function(req, res) {
//   res.send(index.html);
// });
app.get("/AMP", function(req, res) {
  res.sendFile(amp.html)
});

app.get("/constactUs", function(req, res) {
  res.send(contactUs.html);
});

app.get("/admin", function(req, res) {
  res.send(admin.html);
});

app.get("/chooseUpdateProcess", function(req, res) {
  res.send(chooseMeterUpdate.html);
});

app.get("/checkin", function(req, res) {
  res.send(checkin.html);
});

app.get("/addCustomerToCabinOrSpace", function(req, res) {
  res.send(addCustomerToCabinOrSpace);
})

app.get("/checkout", function(req, res) {
  res.send(checkout.html);
});

app.get("/searchCustomer/:email", function(req, res){
    Customer.findOne({"email": req.params.email}, function(error, doc) {
    if (error) {
      res.send(error);
      console.log(error);
    }
    else {
      res.send(doc);
      console.log(doc);
    }
  });
});

app.get("/getCustomerBillingInfo", function(req, res){
  Customer.find({meter: all not null} {given_name: 1, family_name: 1, email: 1, meter: 1, checkin: 1}, function(error, doc) {
    if (error) {
      res.send(error);
      console.log(error);
    }
    else {
      res.send(doc);
      console.log(doc);
    }
  });
});

app.get("/getCustomerKwhUsage", function(req, res){
  Customer.find({meter: all not null} {reading: 1 .sort('created_date').limit(2)})
})

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

app.post("/updateCustomer", function(req, res) {
  Customer.findOneAndUpdate({_id: req.body._id},req.body, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
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

// this route will insert the mongo ID into the meter reading
app.post("/addCustomerToMeter", function(req, res) {
  console.log(req.body.customer);
  MeterReadings.findOneAndUpdate({meter:req.body.meter}, {customer: req.body.customer }, {upsert: true}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

app.post("/removeCustomerFromMeter", function(req, res) {
  console.log(req.body.customer);
  MeterReadings.findOneAndUpdate({customer:req.body.customer}, {customer: "null" }, {upsert: true}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

app.post("/newMeter", function(req, res) {

  var newMeter = new MeterReadings(req.body);
  newMeter.save(function(error, doc) {
    if (error) {
      res.send(error);
      console.log(error);
    }
    else {
      res.send(doc);
      console.log(doc);
    }
  })
});

app.post("/submitAllMeterReadings", function(req, res) {
  console.log(req.body._id);
  console.log(req.body.meter);
  console.log(req.body.reading);
  MeterReadings.findOneAndUpdate({_id:req.body._id}, { $push: {reading: { reading: req.body.reading } }},{safe: true}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

app.get("/meter", function(req, res) {
  MeterReadings.find({}, {meter: 1, reading: 1}, function(error, doc) {
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