const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily} = require("./../mongoose-schemas/one")

function send_night_time__send_year_goal(received_message, sender_psid){
    if(received_message.quick_reply){
        if(received_message.quick_reply.payload === "night-time"){
            careSetting.findOneAndUpdate({sender_PSID: sender_psid}, {$set: {night_time: received_message.text}}).then((doc) => {
                console.log("success")
                }, (e) => {
                console.log("ERROR")
                }
            )
        
            var response
            return response = {
                "text" : "What is your goal for 2019? \n\nReply like this: \nG: open a grocery store",
            }
    
        }else{
            return undefined
        }

    }else{
        return undefined
    }

}

module.exports = {send_night_time__send_year_goal}
