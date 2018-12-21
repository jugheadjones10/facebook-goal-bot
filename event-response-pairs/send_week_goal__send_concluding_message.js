const {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")
var moment = require('moment')
var {dayTrainStarter} = require("./../follow-body/doo")

function send_week_goal__send_concluding_message(received_message, sender_psid){
    var spaceMsg = received_message.text.split(" ")
    var news = ""
    for(i=0; i < spaceMsg.length; i++){
        news = news + spaceMsg[i]
    }
    var targ = news.split(":")[0]
    var hey = targ.split("")

    if((hey[0] === "W" || hey[0] === "w") && hey[1] === "1"){
        
        careWeekly.findOne({sender_PSID: sender_psid}).then((doc) => {
            if(!doc){
                var newUser = new careWeekly({sender_PSID: sender_psid})
                var doc2 = newUser.save().then((doc) => {
                        console.log("success")
                        return doc
                    }, (e) => {
                        console.log("ERROR")
                    }
                )
                return doc2
            }else{
                return doc
            }
        }).then((doc) => {
            doc.myWeekDetails.push({
                "week_number" : 1,
                "week_goal" : received_message.text
            })

            doc.save().then((doc) => {
                console.log("success")
            }, (e) => {
                console.log("ERROR")
            })
        }, (e) => {
            console.log(e)
        })

        moment().format()

        var mornTime = careSetting.findOne({sender_PSID : sender_psid}).then((doc) => {
            return doc.morning_time.split("a")[0]
        }, (err) => {
            console.log(err)
        })
        
        mornTime.then((moTime) => {
            var futstartMoment = moment([2018, 11, 22, 1, 7])
            var theInterval =  futstartMoment.diff(moment(), "seconds") 
            var intervalID = global.setTimeout(myCallback, theInterval)
            function myCallback() {
                dayTrainStarter(sender_psid, moTime)

            }
        })

        var response
        return response = {
            "text" : "👍 Starting in 2019, we'll follow up with your weekly goals and ask you to set daily goals. \n\nHave fun!"
        }

        
    }else{
        return undefined
    }
}

module.exports = {send_week_goal__send_concluding_message}
