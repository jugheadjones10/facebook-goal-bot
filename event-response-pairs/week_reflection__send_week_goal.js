const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")
var moment = require('moment')


function week_reflection__send_week_goal(received_message, sender_psid){

    var spaceMsg = received_message.text.split(" ")
    var news = ""
    for(i=0; i < spaceMsg.length; i++){
        news = news + spaceMsg[i]
    }
    var targ = news.split(":")[0]

    if(targ === "Reflection" || targ === "reflection"){
        //Improve criteria to run this callback
        //var week_of_year = (moment().dayOfYear() + 7)/7
        var week_of_year = 2

        careWeekly.findOne({sender_PSID: sender_psid}).then((doc) => {
            doc.myWeekDetails.forEach(function(ele){
                if(ele.week_number === (week_of_year - 1)){
                    ele.week_goal_conclusion = received_message.text
                }
            })

            doc.save().then((doc) => {
                console.log("success")
            }, (e) => {
                console.log(e)
            })
        })

        var response
        return response = {
            "text" : `What is your next goal for week ${week_of_year}? Reply like this - Week ${week_of_year} : to contact suppliers`
        }


    }else{
        return undefined
    }
}

module.exports = {week_reflection__send_week_goal}
