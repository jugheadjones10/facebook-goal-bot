const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")
var moment = require('moment')

function send_week_goal__restart(received_message, sender_psid){

    var spaceMsg = received_message.text.split(" ")
    var news = ""
    for(i=0; i < spaceMsg.length; i++){
        news = news + spaceMsg[i]
    }
    var targ = news.split(":")[0]
    var sore = targ.split("")[1]

    if(parseInt(sore, 10) && sore!=="1"){
        //var week_of_year = (moment().dayOfYear() + 7)/7
        var week_of_year = 2

        careWeekly.findOne({sender_PSID: sender_psid}).then((doc) => {

            var found = doc.myWeekDetails.find(function(ele){
                return ele.week_number === week_of_year
            })
            if(!found){
                doc.myWeekDetails.push({
                    "week_number" : week_of_year,
                    "week_goal" : received_message.text
                })
            }else{
                found.week_goal = received_message.text
            }
            
            doc.save().then((doc) => {
                console.log("success")
            }, (e) => {
                console.log("ERROR")
            })
        })

        // careWeekly.findOne({sender_PSID: sender_psid}).then((doc) => {

        //     var foundWeek = doc.myWeekDetails.find(function(ele){
        //         return ele.week_number = week_of_year
        //     })
        //     if(!foundWeek){
        //         doc.myWeekDetails.push({
        //             "week_number" : week_of_year,
        //             "week_goal" : received_message.text
        //         })

        //         doc.save().then((doc) => {
        //             console.log("success")
        //         }, (e) => {
        //             console.log("ERROR")
        //         })
        //     }else{
        //         foundWeek.week_goal = received_message.text
        //     }
        // })

        var response
        return response = {
            "text" : `Awsome. Work hard 👌 for week ${week_of_year}!`
        }

    }else{
        return undefined
    }
}

module.exports = {send_week_goal__restart}
