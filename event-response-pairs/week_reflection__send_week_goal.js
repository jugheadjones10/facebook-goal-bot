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

    if(targ === "R" || targ === "r"){
        //Improve criteria to run this callback
        //var week_of_year = (moment().dayOfYear() + 7)/7
        var week_of_year = 2

        careWeekly.findOne({sender_PSID: sender_psid}).then((doc) => {
            
            var found = doc.myWeekDetails.find(function(ele){
                return ele.week_number === (week_of_year - 1)
            })
            found.week_goal_conclusion = received_message.text
           

            doc.save().then((doc) => {
                console.log("success")
            }, (e) => {
                console.log(e)
            })
        })

        var response
        return response = {
            "text" : `What is your next goal for week ${week_of_year}? \n\nReply like this: \nW${week_of_year} : contact suppliers`
        }


    }else{
        return undefined
    }
}

module.exports = {week_reflection__send_week_goal}


