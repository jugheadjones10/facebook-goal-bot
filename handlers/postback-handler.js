var {callSendAPI} = require("./callSendAPI")

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {
    let response;
  
    // Get the payload for the postback
    let payload = received_postback.payload;
  
    // Set the response based on the postback payload
    // if (payload === 'yes') {
    //   response = { "text": "You goddamn narcissist" }
    // } else if (payload === 'no') {
    //   response = { "text": "That' right, I'm glad you know that your gallery is fulla crap" }
    // }
    // Send the message to acknowledge the postback
    if(payload === "user-has-joined-chat") {
        response = {
            "text" : "When would you like to set your daily goals everyday?",
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

    var response2 = {
        "text": "Hi, welcome to the GVH Caregivers Goals Manager! We'll take your yearly, weekly, and daily goals and help you complete them. Let's tweak your settings first."
    }

    callSendAPI(sender_psid, response2)
    callSendAPI(sender_psid, response)
}

module.exports = {handlePostback}