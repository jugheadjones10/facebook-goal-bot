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

// var newUser = new careDaily({sender_PSID: "9000"})
// newUser.save().then((doc) => {
//         console.log("success")
//     }, (e) => {
//         console.log("ERROR")
//     }
// )

careDaily.findOne({sender_PSID: "9000"}).then(
    (doc) => {
        doc.myDayDetails.push({
            "day_of_year" : moment().dayOfYear(),
            "daily_goals" : "Goal1:awdaw asd"
        })

        doc.save().then((doc) => {
            console.log("success")
        }, (e) => {
            console.log("ERROR")
        })
    },
    (err) => {
        console.log("AWDAW")
    }
)

var checker = ["I", 2, "completed"]
careDaily.findOne({sender_PSID: "9000"}).then(
    (doc) => {
        var foundDay = doc.myDayDetails.find(function(element){
            return element.day_of_year = moment().dayOfYear()
        })
     
        foundDay.daily_goals_conclusion = checker.find(function(yo){
            return Number.isInteger(yo)
        })

        doc.save().then((doc) => {
            console.log("success")
        }, (err) => {
            console.log(err)
        })
    },
    (err) => {
        console.log(err)
    }
)


module.exports = {
    mongoose
}



