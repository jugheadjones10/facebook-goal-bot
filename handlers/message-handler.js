var {callSendAPI} = require("./callSendAPI")
const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")


// Handles messages events
function handleMessage(sender_psid, received_message) {
    let response;
    // Check if the message contains text
    if (received_message.text) {

        if(received_message.text === "Get Started"){
            var newUser = new careSetting({sender_PSID: "1232"})
            newUser.save().then((doc) => {
                console.log("success")
            }, (e) => {
                console.log("ERROR")
            })
            response = {
                "text": "Welcome to the GVH goals manager bot! At which time in the morning would you like to set your daily goals?",
                "quick_replies":[
                    {
                        "content_type":"text",
                        "title":"5am",
                        "payload":"5am"
                    },
                    {
                        "content_type":"text",
                        "title":"6am",
                        "payload":"6am"
                    },
                    {
                        "content_type":"text",
                        "title":"7am",
                        "payload":"7am"
                    },
                    {
                        "content_type":"text",
                        "title":"8am",
                        "payload":"8am"
                    },
                    {
                        "content_type":"text",
                        "title":"9am",
                        "payload":"9am"
                    }               
                ]
            }
        }

        if(received_message.quick_reply){
            response = {
                "text": `Alrighty, we will send you your daily goal setter at ${received_message.quick_reply.payload} every morning`
            }
        }

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

    // Sends the response message
    callSendAPI(sender_psid, response);        
}

module.exports = {handleMessage}