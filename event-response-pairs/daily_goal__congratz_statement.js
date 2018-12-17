const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily} = require("./../mongoose-schemas/one")
var moment = require("moment")

function daily_goal__congratz_statement(received_message, sender_psid){

    if(received_message.text.split("").includes(":")){

        var checker = received_message.text.split(":", 1)

        if(checker[0] ===  "Goal 1" || "goal 1" || "Goal 1 " || "goal 1 "){

            careDaily.findOne({sender_PSID: sender_psid}).then((doc) => {
                if(!doc){
                    var newUser = new careWeekly({sender_PSID: sender_psid})
                    newUser.save().then((doc) => {
                            console.log("success")
                        }, (e) => {
                            console.log("ERROR")
                        }
                    )
                }
            })

            careWeekly.findOne({sender_PSID: sender_psid}).then(
                (doc) => {
                    doc.myDailyDetails.push({
                        "day_of_year" : moment().dayOfYear(),
                        "daily_goals" : received_message.text
                    })

                    doc.save().then((doc) => {
                        console.log("success")
                    }, (e) => {
                        console.log("ERROR")
                    })
                }
            )

        
            var response
            return response = {
                "text" : "Awesome. Let's start with week 1. What smaller goal do you have for this coming week? Type 'My week 1 goal is ...'"
            }
    
        }else{
            return undefined
        }

    }else{
        return undefined
    }
}

module.exports = {send_year_goal__send_week_goal}
