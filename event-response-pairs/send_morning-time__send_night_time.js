const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily} = require("./../mongoose-schemas/one")

function send_morning_time__send_night_time(received_message, sender_psid){
    if(received_message.quick_reply){
        if(received_message.quick_reply.payload === "morning-time"){
            careSetting.findOneAndUpdate({sender_PSID: sender_psid}, {$set: {morning_time: received_message.text}}).then((doc) => {
                console.log("success")
                }, (e) => {
                console.log("ERROR")
                }
            )
            
            var response
            return response = {
                "text": `Alrighty, we will send you your daily goal setter at ${received_message.text} every morning. When would you like to tick your daily tasks?`,
                "quick_replies":[
                    {
                        "content_type":"text",
                        "title":"8pm",
                        "payload":"night-time"
                    },
                    {
                        "content_type":"text",
                        "title":"9pm",
                        "payload":"night-time"
                    },
                    {
                        "content_type":"text",
                        "title":"10pm",
                        "payload":"night-time"
                    },
                    {
                        "content_type":"text",
                        "title":"11pm",
                        "payload":"night-time"
                    }         
                ]
            }
    
        }else{
            return undefined
        }
    }else{
        return undefined
    }


}

module.exports = {send_morning_time__send_night_time}