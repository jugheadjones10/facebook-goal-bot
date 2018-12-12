var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Caregivers-info")

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var caregiverSettingSchema = new mongoose.Schema({
    sender_PSID: String,
    morning_time: Number,
    night_time: Number,
    yearly_goal: String
})

var caregiverWeeklySchema = new mongoose.Schema({
    sender_PSID: String,
    start_date: Date,
    end_date: Date,
    week_goal: String,
    week_goal_conclusion: String
})

var caregiverDailySchema = new mongoose.Schema({
    sender_PSID: String,
    date: Date,
    daily_goals: String,
    daily_goals_conclusion: Boolean
})

var careSetting = mongoose.model("careSetting", caregiverSettingSchema)
var careDaily = mongoose.model("careDaily", caregiverDailySchema)
var careWeekly = mongoose.model("careWeekly", caregiverWeeklySchema)

var newUser = new careSetting({sender_PSID: "1232"})
newUser.save().then((doc) => {
    console.log("success")
}, (e) => {
    console.log("ERROR")
})

module.exports = {
    mongoose
}

  
  
