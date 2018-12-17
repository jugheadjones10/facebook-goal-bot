const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")
var moment = require('moment')
var {dayTrainStarter} = require("./../follow-body/doo")

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

            careWeekly.findOne({sender_PSID: sender_psid}).then(
                (doc) => {
                    doc.myWeekDetails.push({
                        "week_number" : 1,
                        "week_goal" : received_message.text
                    })

                    doc.save().then((doc) => {
                        console.log("success")
                    }, (e) => {
                        console.log("ERROR")
                    })
                }
            )

            moment().format()

            var mornTime = careSetting.findOne({sender_PSID : sender_psid}).then((doc) => {
                return doc.morning_time.split("a")[0]
            }, (err) => {
                console.log(err)
            })
            
            mornTime.then((moTime) => {
                // var futstartMoment = moment([2018, 11, 17, moTime])
                var futstartMoment = moment([2018, 11, 17, 20, 15])
                var theInterval =  futstartMoment.diff(moment(), "seconds") 
                var intervalID = global.setTimeout(myCallback, theInterval)
                function myCallback() {
                    dayTrainStarter(sender_psid, moTime)
                }
            })

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
