const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily} = require("./../mongoose-schemas/one")
var moment = require("moment")

function daily_goal__congratz_statement(received_message, sender_psid){

    if(received_message.text.split("").includes(":")){

        var checker = received_message.text.split(":", 1)

        if(checker[0] ===  "Goal 1" || "goal 1" || "Goal 1 " || "goal 1 "){

            careDaily.findOne({sender_PSID: sender_psid}).then((doc) => {
                if(!doc){
                    var newUser = new careDaily({sender_PSID: sender_psid})
                    var doc2 = newUser.save().then((doc) => {
                            return doc
                            console.log("success")
                        }, (e) => {
                            console.log("ERROR")
                        }
                    )
                    return doc2
                }else{
                    return doc
                }
            },
            (e) => {
                console.log(e)
            }).then((doc) => {
                doc.myDayDetails.push({
                    "day_of_year" : moment().dayOfYear(),
                    "daily_goals" : received_message.text
                })

                doc.save().then((doc) => {
                    console.log("success")
                }, (e) => {
                    console.log(e)
                })
            }, (e) =>{
                console.log(e)
            })
        
            var response
            return response = {
                "text" : "Nice! Work hard! I'll be back at the end of the day to ask questions!"
            }
    
        }else{
            return undefined
        }

    }else{
        return undefined
    }
}

module.exports = {daily_goal__congratz_statement}
