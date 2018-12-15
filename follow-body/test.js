var moment = require('moment')

const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")
var {get_started__send_morning_time} = require("./../event-response-pairs/get_started__send-morning_time")
var {send_morning_time__send_night_time} = require("./../event-response-pairs/send_morning-time__send_night_time")
var {send_night_time__send_year_goal} = require("./../event-response-pairs/send_night_time__send_year_goal")
var {send_year_goal__send_week_goal} = require("./../event-response-pairs/send_year_goal__send_week_goal")
var {send_week_goal__send_concluding_message} = require("./../event-response-pairs/send_week_goal__send_concluding_message")


// var moment = require('moment');
// moment().format();


// if(Number.isInteger(moment().dayOfYear() / 7)){

// }

// careWeekly.findOne({sender_PSID: "1922770521175190"}).then(
//     (doc) => {
//         doc.myWeekDetails.push({
//             week_number: 1,
//             week_goal: received_message.text
//         })

//         doc.save().then((doc) => {
//             console.log("success")
//         }, (e) => {
//             console.log("ERROR")
//         }
//     )
//     },
//     (err) => {
//         console.log(err)
//     }
// )