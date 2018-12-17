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

// function trainStarter(){
//     callSendAPI()
// }




var mornTime = careSetting.findOne({sender_PSID : "7000"}).then((doc) => {
    return doc.morning_time.split("a")[0]
}, (err) => {
    console.log(err)
})

mornTime.then((moTime) => {
    var futstartMoment = moment([2018, 11, 17, 11, 46])
    var theInterval =  futstartMoment.diff(moment(), "seconds") * 1000
    console.log(theInterval)
    var intervalID = global.setTimeout(myCallback, theInterval);
    function myCallback() {
        console.log("het")
        // callSendAPI()
        // trainStarter()
    }
})


module.exports = {
    mongoose
}



