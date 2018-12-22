const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily} = require("./../mongoose-schemas/one")
var moment = require("moment")

function daily_goal__congratz_statement(received_message, sender_psid){

    var spaceMsg = received_message.text.split(" ")
    var news = ""
    for(i=0; i < spaceMsg.length; i++){
        news = news + spaceMsg[i]
    }

    if(news.split("").includes(":")){
        if(news.split("")[0] === "1"){
            careDaily.findOne({sender_PSID: sender_psid}).then((doc) => {
                if(!doc){
                    var newUser = new careDaily({sender_PSID: sender_psid})
                    var doc2 = newUser.save().then((doc) => {
                            return doc
                            console.log("success")
                        }, (e) => {
                            console.log("ERROR")
                        }
                    )
                    return doc2
                }else{
                    return doc
                }
            },(e) => {
                console.log(e)
            }).then((doc) => {
                var found = doc.myDayDetails.find(function(ele){
                    return ele.day_of_year === moment().dayOfYear()
                })
                if(!found){
                    doc.myDayDetails.push({
                        "day_of_year" : moment().dayOfYear(),
                        "daily_goals" : received_message.text
                    })
                }else{
                    found.daily_goals = received_message.text
                }
            
                doc.save().then((doc) => {
                    console.log("success")
                }, (e) => {
                    console.log(e)
                })
            }, (e) =>{
                console.log(e)
            })
        
            var response
            return response = {
                "text" : "Nice! Work hard 💪! I'll follow up at the end of the day!"
            }
    
        }else{
            return undefined
        }
    
    }else{
        return undefined
    }
}

module.exports = {daily_goal__congratz_statement}
