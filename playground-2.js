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

careDaily.findOne({sender_PSID: "9000"}).then((doc) => {
    return doc

},(e) => {
    console.log(e)
}).then((doc) => {

    var found = doc.myDayDetails.find(function(ele){
        return ele.day_of_year === moment().dayOfYear()
    })
    if(!found){
        doc.myDayDetails.push({
            "day_of_year" : moment().dayOfYear(),
            "daily_goals" : "LOSER"
        })
    }else{
        found.daily_goals = "LOSER"
    }

    doc.save().then((doc) => {
        console.log("success")
    }, (e) => {
        console.log(e)
    })
}, (e) =>{
    console.log(e)
})

module.exports = {
    mongoose
}



