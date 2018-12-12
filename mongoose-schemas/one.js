var mongoose = require("mongoose")

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
    daily_goals: [{text: String}],
    daily_goals_conclusion: [{completed: Boolean}]
})

var careSetting = mongoose.model("careSetting", caregiverSettingSchema)
var careDaily = mongoose.model("careDaily", caregiverDailySchema)
var careWeekly = mongoose.model("careWeekly", caregiverWeeklySchema)

module.exports = {careDaily, careSetting, careWeekly}