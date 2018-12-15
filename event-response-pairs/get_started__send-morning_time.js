const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily} = require("./../mongoose-schemas/one")

function get_started__send_morning_time(received_message, sender_psid){

    if(received_message.text === "Get Started"){
        careSetting.findOne({sender_PSID: sender_psid}).then((doc) => {
            if(!doc){
                var newUser = new careSetting({sender_PSID: sender_psid})
                newUser.save().then((doc) => {
                        console.log("success")
                    }, (e) => {
                        console.log("ERROR")
                    }
                )
            }
        })

        var response
        return response = {
            "text": "Welcome to the GVH goals manager bot! At which time in the morning would you like to set your daily goals?",
            "quick_replies":[
                {
                    "content_type":"text",
                    "title":"5am",
                    "payload":"morning-time"
                },
                {
                    "content_type":"text",
                    "title":"6am",
                    "payload":"morning-time"
                },
                {
                    "content_type":"text",
                    "title":"7am",
                    "payload":"morning-time"
                },
                {
                    "content_type":"text",
                    "title":"8am",
                    "payload":"morning-time"
                },
                {
                    "content_type":"text",
                    "title":"9am",
                    "payload":"morning-time"
                }               
            ]
        }

    }else{
        return undefined
    }

   
}

module.exports = {get_started__send_morning_time}
