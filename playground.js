// var {one_f} = require("./playground-2")

// var one = 2
// one_f(one)

// console.log(global.one)

var {get_started__send_morning_time} = require("./event-response-pairs/get_started__send-morning_time")
var {send_morning_time__send_night_time} = require("./event-response-pairs/send_morning-time__send_night_time")
//var {send_night_time__send_year_goal} = require("./event-response-pairs/send_night_time__send_year_goal")
var {send_year_goal__send_week_goal} = require("./event-response-pairs/send_year_goal__send_week_goal")

var received_message = {
    "text" : "My goal for 2019 is to stop wanking"
}
var sender_psid = "123"

  var hey = [
            get_started__send_morning_time(received_message, sender_psid),
            send_morning_time__send_night_time(received_message, sender_psid),
            send_year_goal__send_week_goal(received_message, sender_psid)
        ]

        console.log(hey)

        hey.forEach(function(res){
            if(res !== undefined){
                console.log(res)
            }
        })
        