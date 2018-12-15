const express = require('express')
const bodyParser = require('body-parser')
const {handleMessage} = require("./handlers/message-handler")
const {handlePostback} = require("./handlers/postback-handler")
const {runWeekCheck} = require("./follow-body/doo")
const {callSendAPI} = require("./handlers/callSendAPI")


const app = express().use(bodyParser.json())

const port = process.env.PORT
const PAGE_ACCESS_TOKEN= "EAAHZCbQCoCS4BAKGQoWqEE9WoavLj3eP3wOgSHikNGylf0y6ktZAVxhXHdairO9g6ZC4x45giKmBzCsnBJhpQUZAPCTxUxG1ovMNmLhN7WchTX58ttLi5ihywoO2ZB9DrU45cV1ZCOU6obb2LZAZAaptGG4XOYQn3pGZAaxU4tfZCZAj7vH9MpvxL1f"

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
    // function boo(){
    //     callSendAPI("1922770521175190", {"text" : "HEy fa"})
    // }
    // var intervalID = window.setInterval(boo(), 3000)
    
    let body = req.body
    // Checks this is an event from a page subscription
    if (body.object === 'page') {
        // Iterates over each entry - there may be multiple if batched
        body.entry.forEach(function(entry) {
            // Gets the message. entry.messaging is an array, but 
            // will only ever contain one message, so we get index 0
            let webhook_event = entry.messaging[0]
            let sender_psid = webhook_event.sender.id
    
            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            }
        })

        // Returns a '200 OK' response to all requests
        res.status(200).send('EVENT_RECEIVED')
    } else {
        // Returns a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404)
    }

})

app.get('/webhook', (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = "123"
      
    // Parse the query params
    let mode = req.query['hub.mode']
    let token = req.query['hub.verify_token']
    let challenge = req.query['hub.challenge']
      
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
      // Checks the mode and token sent is correct
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        
        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED')
        res.status(200).send(challenge)
      
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403)      
      }
    }
});


app.listen(port, function(){
    console.log("Webhook is listening")
})

// C:\Users\YOUNG JIN KIM\Desktop>curl 
// --header "Content-Type:application/json" 
// -X POST "https://agile-stream-65681.herokuapp.com/webhook" 
// -d @FBJSON.txt

// C:\Users\YOUNG JIN KIM\Desktop>curl 
// -X GET "https://agile-stream-65681.herokuapp.com/webhook?hub.verify_token=123&hub.challenge=CHALLENGE_ACCEPTED&hub.mode=subscribe"