const request = require('request')

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
    // Construct the message body
   let request_body = {
       "recipient": {
       "id": sender_psid
       },
       "message": response
    }

   request(
       {
           "uri": "https://graph.facebook.com/v2.6/me/messages",
           "qs": { "access_token": "EAAHZCbQCoCS4BAKGQoWqEE9WoavLj3eP3wOgSHikNGylf0y6ktZAVxhXHdairO9g6ZC4x45giKmBzCsnBJhpQUZAPCTxUxG1ovMNmLhN7WchTX58ttLi5ihywoO2ZB9DrU45cV1ZCOU6obb2LZAZAaptGG4XOYQn3pGZAaxU4tfZCZAj7vH9MpvxL1f"},
           "method": "POST",
           "json": request_body
       }, (err, res, body) => {
           if (!err) {
               console.log('message sent!')
           } else {
               console.error("Unable to send message:" + err);
           }
   })
}

module.exports = {callSendAPI}