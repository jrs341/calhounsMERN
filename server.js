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
// mongoose.connect("mongodb://localhost/calhouns");
mongoose.connect("mongodb://jrs341:HHCwc3et0@ds145379.mlab.com:45379/calhouns");
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
app.get(`/AMP`, function(req, res) {
  res.sendFile('public/amp.html', {root: __dirname});
});

// app.get('/AMP', function(req, res) {
//   res.sendFile(amp.html);
// });

// app.get("/paymentForm", function(req, res) {
//   res.sendFile(paymentForm.html);
// })

// app.get("/constactUs", function(req, res) {
//   res.send(contactUs.html);
// });

// app.get("/admin", function(req, res) {
//   res.send(admin.html);
// });

// app.get("/chooseUpdateProcess", function(req, res) {
//   res.send(chooseMeterUpdate.html);
// });

// app.get("/checkin", function(req, res) {
//   res.send(checkin.html);
// });

// app.get("/addCustomerToCabinOrSpace", function(req, res) {
//   res.send(addCustomerToCabinOrSpace);
// })

// app.get("/checkout", function(req, res) {
//   res.send(checkout.html);
// });

// =====================Customer Collection CRUD Operations=====================

app.get("/searchCustomer/:email", function(req, res){
    Customer.findOne({"email": req.params.email}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

app.get("/customerBillingInfo", function(req, res) {
  Customer.find({meter: /^[A-J]/ }, {given_name: 1, family_name: 1, email: 1, rate: 1, checkin: 1, reading: 1}, function(error, doc){
    if (error) {
      res.send(error);
    } else {
      res.send(doc);
    }
  });
});

app.get("/checkOutByCustomerEmail/:searchInput", function(req, res){
    console.log(req.params.searchInput);
    Customer.findOne({email: req.params.searchInput},{meter: 1, reading: 1, given_name: 1, family_name: 1, email: 1}, function(error, doc) {
    if (error) {
      console.log(error);
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

app.get("/checkOutByMeter/:searchInput", function(req, res){
    console.log(req.params.searchInput);
    Customer.findOne({meter: req.params.searchInput},{meter: 1, reading: 1, given_name: 1, family_name: 1, email: 1}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

app.post('/removeMeterFromCustomer', function(req, res) {
  Customer.findOneAndUpdate({email: req.body.email}, {$unset: {meter: ''}}, function(error, doc) {
     if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
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

app.post("/removeLastEntryFromCustomerReading", function(req, res) {
  Customer.findOneAndUpdate({meter: req.body.meter}, {$pop: {reading: 1}}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

// this route is used in UpdateAllMeter.js to submit and update all meter readings to the customer collection
app.post("/submitAllCustomerMeterReadings", function(req, res) {
  Customer.findOneAndUpdate({meter: req.body.meter}, { $push: {reading: { reading: req.body.reading } }},{safe: true}, function(error, doc) {
    if(error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

// =====================Employee Collection CRUD Operations=====================
app.get("/userName/:userName", function(req, res) {
  Employee.findOne({username: req.params.userName}, {username: 1, password: 1}, function(error, doc){
    if(error){
      res.send(error);
    } else {
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

// =====================Meter Collection CRUD Operations=====================

      // ==========================Meter Document Create=====================

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

      // ==========================Meter Document Read=====================

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

app.get("/availableCabins", function(req, res) {
  MeterReadings.find({meter: /^Cabin/, $and:[{ customer: "null"}]}, function(error, doc){
    if (error) {
      res.send(error);
    }
    else {
      console.log(doc);
      res.send(doc);
    }
  });
});

// This route will be for monthly reservation requests
app.get("/available30Amp", function(req, res) {
  MeterReadings.find({meter: {$nin: ['A1','A2']}, $and: [{customer:"null"},{amp:"30"}]}, function(error, doc){
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

// This route will be for daily and weekly reservation requests
app.get("/available30AmpDailyWeekly", function(req, res) {
  MeterReadings.find({amp: "30" , $and:[{ customer: "null"},{amp: "30"}]}, function(error, doc){
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

// This route will be for monthly reservation requests
app.get("/available50Amp", function(req, res) {
  MeterReadings.find({meter: {$nin: ['A1','A2']}, $and: [{customer: "null"},{amp: "50"}]}, function(error, doc){
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

// This route will be for daily and weekly reservation requests
app.get("/available50AmpDailyWeekly", function(req, res) {
  MeterReadings.find({amp: "50", $and:[{customer: "null"}]}, function(error, doc){
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

// This route will be for future daily and weekly requests
// app.get("/availableDailyWeekly", function(req, res) {
//   MeterReadings.find({$or: [{amp: '30'}]}, function(error, doc){
//     if(error) {
//       res.send(error);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });
// var lastReading = function(meter) {
//     return MeterReadings.find({meter: meter});
//   };
// MeterReadings.find({meter: req.params.meter}
app.get("/lastMeterReading/:meter", function(req, res) {
  MeterReadings.find({meter: req.params.meter}, function(error, doc){
    if(error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});


      // ==========================Meter Document Update=====================

// this route will insert the mongo ID into the meter reading
app.post("/addCustomerToMeter", function(req, res) {
  console.log(req.body.email);
  MeterReadings.findOneAndUpdate({meter:req.body.meter}, {customer: req.body.email }, {upsert: true}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
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

app.post("/submitFinalMeterReading", function(req, res) {
  console.log(req.body.meter);
  console.log(req.body.reading);
  MeterReadings.findOneAndUpdate({meter:req.body.meter}, { $push: {reading: { reading: req.body.reading } }},{safe: true}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});


      // ==========================Meter Document Delete=====================
// {customer:req.body.customer}, {customer: "null" }, {upsert: true}
// .updateOne({meter: 'F'}, {$unset: {customer: ''}})
app.post("/removeCustomerFromMeter", function(req, res) {
  MeterReadings.findOneAndUpdate({meter: req.body.meter}, {$set: {customer: 'null'}}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});

app.post("/removeLastEntryFromMeterReading", function(req, res) {
  MeterReadings.findOneAndUpdate({meter: req.body.meter}, {$pop: {reading: 1}}, function(error, doc) {
    if (error) {
      res.send(error);
    }
    else {
      res.send(doc);
    }
  });
});
// db.getCollection('meterreadings').update({meter: 'A'}, {$pop: {reading: 1}})
// db.getCollection('customers').updateOne({email: 'billybob@me.com'}, {$unset: {meter: '',checkin: '',checkout: '', reading: ''}})
// db.getCollection('meterreadings').updateOne({meter: 'F'}, {$unset: {customer: ''}})
// db.getCollection('meterreadings').find({meter: /^Cabin/, $and:[{ customer: null}]})
// db.getCollection('meterreadings').find({customer: null})
// db.getCollection('meterreadings').updateOne({meter: 'B'}, {$set: {customer: 'billy'}})
// Connection to PORT
app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});