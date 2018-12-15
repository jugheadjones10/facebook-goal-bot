// var {one_f} = require("./playground-2")

// var one = 2
// one_f(one)

// console.log(global.one)

var {get_started__send_morning_time} = require("./event-response-pairs/get_started__send-morning_time")
var {send_morning_time__send_night_time} = require("./event-response-pairs/send_morning-time__send_night_time")
var {send_night_time__send_year_goal} = require("./event-response-pairs/send_night_time__send_year_goal")
var {send_year_goal__send_week_goal} = require("./event-response-pairs/send_year_goal__send_week_goal")
var {send_week_goal__send_concluding_message} = require("./event-response-pairs/send_week_goal__send_concluding_message")


var received_message = {
    "text" : "My week 1 goal is to fk ofgf"
}
var sender_psid = "123"

  var hey = [
            get_started__send_morning_time(received_message, sender_psid),
            send_morning_time__send_night_time(received_message, sender_psid),
            send_night_time__send_year_goal(received_message, sender_psid),
            send_year_goal__send_week_goal(received_message, sender_psid),
            send_week_goal__send_concluding_message(received_message, sender_psid)
        ]

        console.log(hey)

        hey.forEach(function(res){
            if(res !== undefined){
                console.log(res)
            }
        })
        

        var response
        careWeekly.find({}).then((docs) => {
            response = {
                "text" : "heyJude"
            }
            return response
        })
        return response