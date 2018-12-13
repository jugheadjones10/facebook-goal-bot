var {callSendAPI} = require("./callSendAPI")
const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")
var {get_started__send_morning_time} = require("./../event-response-pairs/get_started__send-morning_time")
var {send_morning_time__send_night_time} = require("./../event-response-pairs/send_morning-time__send_night_time")

// Handles messages events
function handleMessage(sender_psid, received_message) {

    // Check if the message contains text
    if (received_message.text) {

        get_started__send_morning_time(received_message, sender_psid)
        send_morning_time__send_night_time(received_message, sender_psid)
        

        // if(received_message.quick_reply.payload === "night-time"){
        //     careSetting.findOneAndUpdate({sender_PSID: sender_psid}, {$set: {night_time: received_message.text}}).then((doc) => {
        //         console.log("success")
        //         }, (e) => {
        //         console.log("ERROR")
        //         }
        //     )

        //     var response = {
        //         "text" : "Great! What is your big goal for 2019? Type 'My goals for 2019 is ...'",
        //     }

        //     callSendAPI(sender_psid, response);  
        // }

    }else if(received_message.attachments){
        // Gets the URL of the message attachment
        let attachment_url = received_message.attachments[0].payload.url
        // response = {
        //     "attachment": {
        //         "type": "template",
        //         "payload": {
        //             "template_type": "generic",
        //             "elements": [{
        //                 "title": "Do you like this pic?",
        //                 "subtitle": "Tap a button to answer.",
        //                 "image_url": attachment_url,
        //                 "buttons": [
        //                     {
        //                         "type": "postback",
        //                         "title": "Yes!",
        //                         "payload": "yes",
        //                     },
        //                     {
        //                         "type": "postback",
        //                         "title": "No!",
        //                         "payload": "no",
        //                     }
        //                 ]
        //             }]
        //         }
        //     }
        // }
    }
        
}

module.exports = {handleMessage}