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

// var received_message = "I completed 0 goals"
// var checker = received_message.split(" ")

function intChecker(inArray, arr2){
    var mo = 0
    inArray.forEach(function(ele){
        if(arr2.includes(ele)){
            mo = mo + 1
        }
    })
    return mo
}

console.log(intChecker(["I", "2", "completed"], ["1", "2", "3"]))


// if(checker.includes("0")){
//     careDaily.findOne({sender_PSID: "9000"}).then((doc) => {
//         var foundDay = doc.myDayDetails.find(function(element){
//             return element.day_of_year = moment().dayOfYear()
//         })
        
//         foundDay.daily_goals_conclusion = checker.find(function(yo){
//             return parseInt(yo, 10) 
//         })
    
//         doc.save().then((doc) => {
//             console.log("success")
//         }, (e) => {
//             console.log(e)
//         })
//     },(err) => {
//             console.log(err)
//     })
// }

module.exports = {
    mongoose
}



