const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily} = require("./../mongoose-schemas/one")
var moment = require("moment")

function complete_day_goals__congratz_statement(received_message, sender_psid){

    if(received_message.quick_reply){
        var bo = received_message.quick_reply.payload
        if(bo === "0" || bo === "1" || bo === "2" || bo === "3"){
            careDaily.findOne({sender_PSID: sender_psid}).then((doc) => {

                var found = doc.myDayDetails.find(function(ele){
                    return ele.day_of_year === moment().dayOfYear()
                })
                if(found){
                    found.daily_goals_conclusion =  parseInt(bo, 10)
                }

                doc.save().then((doc) => {
                    console.log("success")
                }, (e) => {
                    console.log(e)
                })
            },(err) => {
                    console.log(err)
            })

            var response
            return response = {
                "text" : "Good Job! Keep trying ✊! I'll message you tomorrow morning!"
            }
    
        }else{
            return undefined
        }
    }else{
        return undefined
    }
}

module.exports = {complete_day_goals__congratz_statement}
