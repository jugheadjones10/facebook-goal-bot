var {callSendAPI} = require("./callSendAPI")

// Handles messages events
function handleMessage(sender_psid, received_message) {
    let response;
    // Check if the message contains text
    if (received_message.text) {

        // Create the payload for a basic text message
        response = {
            "text": `You sent the message: "${received_message.text}". Btw : JH is a fag`
        }
    }else if(received_message.attachments){
        
        // Gets the URL of the message attachment
        let attachment_url = received_message.attachments[0].payload.url
        response = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": "Do you like this pic?",
                        "subtitle": "Tap a button to answer.",
                        "image_url": attachment_url,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Yes!",
                                "payload": "yes",
                            },
                            {
                                "type": "postback",
                                "title": "No!",
                                "payload": "no",
                            }
                        ]
                    }]
                }
            }
        }
    }

    // Sends the response message
    callSendAPI(sender_psid, response);        
}

module.exports = {handleMessage}