const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")

function send_week_goal__send_concluding_message(received_message, sender_psid){

    if(received_message.text.split(" ").includes("goal")){
        
        var checker = received_message.text.split("goal", 1)

        if(checker[0] === "My week 1 "){
            careWeekly.findOne({sender_PSID: sender_psid}).then((doc) => {
                if(!doc){
                    var newUser = new careWeekly({sender_PSID: sender_psid})
                    newUser.save().then((doc) => {
                            console.log("success")
                        }, (e) => {
                            console.log("ERROR")
                        }
                    )
                }
            })

            careWeekly.findOneAndUpdate({sender_PSID: sender_psid}, {$set: {week_goal: received_message.text, week_number: 1}}).then((doc) => {
                console.log("success")
                }, (e) => {
                console.log("ERROR")
                }
            )
        
            var response
            return response = {
                "text" : "All settled now. Use the persistent menu to change your settings and see/edit your yearly goal. Your walk to success starts tomorrow!"
            }
    
        }else{
            return undefined
        }

    }else{
        return undefined
    }
}

module.exports = {send_week_goal__send_concluding_message}
