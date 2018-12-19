const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily} = require("./../mongoose-schemas/one")
var moment = require("moment")

function complete_day_goals__congratz_statement(received_message, sender_psid){

    if(received_message.text.split(" ").includes("completed")){

        var checker = received_message.text.split(" ")
        
        function intChecker(inArray, arr2){
            var mo = 0
            inArray.forEach(function(ele){
                if(arr2.includes(ele)){
                    mo = mo + 1
                }
            })
            return mo
        }

        if(intChecker(checker, ["0", "1", "2", "3"]) === 1){

            careDaily.findOne({sender_PSID: sender_psid}).then((doc) => {
                var foundDay = doc.myDayDetails.find(function(element){
                    return element.day_of_year = moment().dayOfYear()
                })
               
                foundDay.daily_goals_conclusion = checker.find(function(yo){
                    return parseInt(yo, 10) 
                })
    
                doc.save().then((doc) => {
                    console.log("success")
                }, (e) => {
                    console.log(e)
                })
            },(err) => {
                    console.log(err)
            })

        
            var response
            return response = {
                "text" : "Good Job! Keep it up! I'll message you tomorrow morning!"
            }
    
        }else{
            return undefined
        }

    }else{
        return undefined
    }
}

module.exports = {complete_day_goals__congratz_statement}
