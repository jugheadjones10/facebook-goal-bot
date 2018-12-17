var mongoose = require("mongoose")


var {careSetting, careDaily, careWeekly} = require("./mongoose-schemas/one")


mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true })

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var moment = require("moment")
moment().format()

careWeekly.findOne({sender_PSID: 2134}).then(
    (doc) => {
        var found = doc.myWeekDetails.find(function(element){
            return element.week_number = 2
        })
        console.log(found)

        doc.save().then((doc) => {
            console.log("success")
        }, (e) => {
            console.log("ERROR")
        })
    }
)

module.exports = {
    mongoose
}



