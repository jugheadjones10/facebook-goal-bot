var {callSendAPI} = require("./callSendAPI")

// Handles messages events
function handleMessage(sender_psid, received_message) {
    let response;
    // Check if the message contains text
    if (received_message.text) {

        if(received_message.quick_reply){
            response = {
                "text": "Alrighty, we will send you your daily goal setter at 5am every morning"
            }
        }

        // Create the payload for a basic text message
       

    }else if(received_message.attachments){
        
        // Gets the URL of the message attachment
        let attachment_url = received_message.attachments[0].payload.url
        response = {
            "text" : "Welcome to your daily and weekly goals manager! At which time in the morning would you like to set your daily goals?",
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