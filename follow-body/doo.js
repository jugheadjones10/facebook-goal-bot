var moment = require('moment')
var {callSendAPI} = require("./../handlers/callSendAPI")
var {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")

function runWeekCheck(){
    moment().format();
    var intervalID2 = setTimeout(myCallback3, 10000)
    // var weekOfYear = (moment().dayOfYear() + 7) / 7
    function myCallback3(){

        var weekOfYear = 5

        if(Number.isInteger(weekOfYear)){
            careWeekly.find().then((docs) => {
                for(i=0; i < docs.length; i++){
    
                    docs[i].myWeekDetails.push({
                        "week_number" : weekOfYear
                    })
                    docs[i].save().then((b) => {
                        console.log("success b")
                    })
                    //Pushing the new myWeekDetail may be unnecessary
                    
                    var response1 = {
                        "text" : `How well did you achieve your week ${weekOfYear - 1} goal? Where could you have improved?`
                    }
                    callSendAPI(docs[i].sender_PSID, response1)
                }
            })
        }

    }
}

function dayTrainStarter(sender_psid, moTime){
    careSetting.findOne({sender_PSID: sender_psid}).then((doc) => {
        var niTime = doc.night_time.split("p")[0]
        // var dailyHourInterval = 12 + niTime - moTime
        // var sleepInterval = 12 - niTime + moTime
        var dailyHourInterval = 45
        var sleepInterval = 45

        function secondLoop(){
            var intervalID2 = global.setTimeout(myCallback2, sleepInterval * 1000)
            function myCallback2(){
                callSendAPI(sender_psid, {
                    "text": "So what are your goals for today?"
                })
                firstLoop()
            }
        }

        function firstLoop(){
            var intervalID = global.setTimeout(myCallback, dailyHourInterval * 1000)
            function myCallback(){
                callSendAPI(sender_psid, {
                    "text": "So how many goals did you complete today?"
                })
                secondLoop()
                runWeekCheck()
            }
        }

        callSendAPI(sender_psid, {
            "text":"Hi, welcome to day 1! What are your 2/3 goals for the day?"
        })
        firstLoop()
    })
}

module.exports = {runWeekCheck, dayTrainStarter}

// var newUser = new careWeekly({sender_PSID : "2134"})
// newUser.save().then((doc) => {
//         doc.myWeekDetails.push({
//             "week_number" : 2,
//             "week_goal" : "Whatever"
//         })

//         doc.save().then((doc) => {
//             console.log("success")
//         }, (e) => {
//             console.log("ERROR")
//         })
        
//     }, (e) => {
//         console.log("ERROR")
//     }
// )


// careWeekly.find().then((docs) => {
//     console.log(docs)
// })

// console.log("AWDA")

// careWeekly.findOne({sender_PSID: "1922770521175190"}).then(
//     (doc) => {
//         doc.myWeekDetails.push({
//             week_number: 1,
//             week_goal: received_message.text
//         })

//         doc.save().then((doc) => {
//             console.log("success")
//         }, (e) => {
//             console.log("ERROR")
//         }
//     )
//     },
//     (err) => {
//         console.log(err)
//     }
// )