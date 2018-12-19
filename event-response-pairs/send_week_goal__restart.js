const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")
var moment = require('moment')

function send_week_goal__restart(received_message, sender_psid){

    if(received_message.text.split(" ").includes("week")){
        
        var checker = received_message.text.split("week", 2)

        if(checker[0] === "My " && !checker[1].split(" ").includes("1")){
            //var week_of_year = (moment().dayOfYear() + 7)/7
            var week_of_year = 2

            careWeekly.findOne({sender_PSID: sender_psid}).then((doc) => {
                doc.myWeekDetails.forEach(function(ele){
                    if(ele.week_number ===  week_of_year){
                        ele.week_goal = received_message.text

                        doc.save().then((doc) => {
                            console.log("success")
                        }, (e) => {
                            console.log("ERROR")
                        })
                    }else{
                        doc.myWeekDetails.push({
                            "week_number" : week_of_year,
                            "week_goal" : received_message.text
                        })
        
                        doc.save().then((doc) => {
                            console.log("success")
                        }, (e) => {
                            console.log("ERROR")
                        })
                    }
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
                "text" : `Awsometacular. JY for the week ${week_of_year}!`
            }
    
        }else{
            return undefined
        }

    }else{
        return undefined
    }
}

module.exports = {send_week_goal__restart}
