var mongoose = require("mongoose")

var caregiverSettingSchema = new mongoose.Schema({
    sender_PSID: String,
    morning_time: String,
    night_time: String,
    yearly_goal: String
})

var careGiverWeekSubDoc = new mongoose.Schema({
    week_number: Number,
    week_goal: String,
    week_goal_conclusion: String
})

var caregiverWeeklySchema = new mongoose.Schema({
    sender_PSID: String,
    myWeekDetails: [careGiverWeekSubDoc]
})


//Change week number in event-response-pairs

var caregiverDailySchema = new mongoose.Schema({
    sender_PSID: String,
    date: Date,
    daily_goals: String,
    daily_goals_conclusion: Boolean
})

var careSetting = mongoose.model("careSetting", caregiverSettingSchema)
var careDaily = mongoose.model("careDaily", caregiverDailySchema)
var careWeekly = mongoose.model("careWeekly", caregiverWeeklySchema)

module.exports = {careDaily, careSetting, careWeekly, careGiverWeekSubDoc}