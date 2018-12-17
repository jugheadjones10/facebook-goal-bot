const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily} = require("./../mongoose-schemas/one")
var moment = require("moment")

function complete_day_goals_congratz_statement(received_message, sender_psid){

    if(received_message.text.split(" ").includes("completed")){

        var checker = received_message.text.split(" ")

        if(checker.includes(0 || 1 || 2 || 3)){

            careDaily.findOne({sender_PSID: sender_psid}, {myDayDetails : {day_of_year : moment().dayOfYear()}}).then(
                (doc) => {
                    console.log(doc)
                    doc.myDayDetails.push({
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
