const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily} = require("./../mongoose-schemas/one")

function send_year_goal__send_week_goal(received_message, sender_psid){
    var msg = received_message.text.split("")
    if(msg.includes(":") && (msg[0] === "g" || msg[0] === "G")){
        
        careSetting.findOneAndUpdate({sender_PSID: sender_psid}, {$set: {yearly_goal: received_message.text}}).then((doc) => {
            console.log("success")
            }, (e) => {
            console.log("ERROR")
            }
        )
    
        var response
        return response = {
            "text" : "Awesome. What's your first weekly goal? \n\nReply like this: \nW1: buy materials"
        }
    
    }else{
        return undefined
    }
}

module.exports = {send_year_goal__send_week_goal}
