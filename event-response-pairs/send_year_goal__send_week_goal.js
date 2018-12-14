const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")

function send_year_goal__send_week_goal(received_message, sender_psid){

    if(received_message.text.split(" ").includes("2019")){
        var response 
        return response = {
            "text" : "Great! YOurt goal is absoultely freat!!!"
        }
        
        // var checker = received_message.text.split("2019", 1)

        // if(checker[0] === "My goal for "){
        //     careSetting.findOneAndUpdate({sender_PSID: sender_psid}, {$set: {yearly_goal: received_message.text}}).then((doc) => {
        //         console.log("success")
        //         }, (e) => {
        //         console.log("ERROR")
        //         }
        //     )
        
        //     var response
        //     return response = {
        //         "text" : "Awesome. Let's start with week 1. What smaller goal do you have for this coming week that will help you achieve your yearly goal?"
        //     }
    
        // }else{
        //     return undefined
        // }
    }else{
        return undefined
    }
}

module.exports = {send_year_goal__send_week_goal}
