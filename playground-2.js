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

function dayTrainStarter(sender_psid, moTime){
    careSetting.findOne({sender_PSID: sender_psid}).then((doc) => {
        var niTime = doc.night_time.split("p")[0]
        // var dailyHourInterval = 12 + niTime - moTime
        // var sleepInterval = 12 - niTime + moTime
        var dailyHourInterval = 2
        var sleepInterval = 2

        function secondLoop(){
            var intervalID2 = global.setTimeout(myCallback2, sleepInterval * 1000)
            function myCallback2(){
                console.log("So what are your goals for today?")
                
                firstLoop()
            }
        }

        function firstLoop(){
            var intervalID = global.setTimeout(myCallback, dailyHourInterval * 1000)
            function myCallback(){
                console.log("So which of the goals did you complete today?")
                
                secondLoop()
            }
        }

        console.log("Hi, welcome to day 1! What are your 2/3 goals for the day?")
        
        firstLoop()
    })
}


var mornTime = careSetting.findOne({sender_PSID : "7000"}).then((doc) => {
    return doc.morning_time.split("a")[0]
}, (err) => {
    console.log(err)
})

mornTime.then((moTime) => {
    console.log(moTime)
    // var futstartMoment = moment([2018, 11, 17, moTime])
    var futstartMoment = moment([2018, 11, 17, 12, 39])
    var theInterval =  futstartMoment.diff(moment(), "seconds") * 1000
    var intervalID = global.setTimeout(myCallback, theInterval);
    function myCallback() {
        // callSendAPI()
        dayTrainStarter("7000", moTime)
    }
})

module.exports = {
    mongoose
}



