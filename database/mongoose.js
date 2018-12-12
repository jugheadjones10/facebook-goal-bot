var mongoose = require("mongoose")

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://yj:jugheadjones10@cluster0.mongodb.net/Caregivers-info";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
 // perform actions on the collection object
  client.close();
});

mongoose.connect("mongodb://yj:jugheadjones10@gvhcaregivers-shard-00-00-fvtij.gcp.mongodb.net:27017,gvhcaregivers-shard-00-01-fvtij.gcp.mongodb.net:27017,gvhcaregivers-shard-00-02-fvtij.gcp.mongodb.net:27017/Caregivers-info?ssl=true&replicaSet=GVHCaregivers-shard-0&authSource=admin&retryWrites=true")

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
    mongoose
}

  
  
