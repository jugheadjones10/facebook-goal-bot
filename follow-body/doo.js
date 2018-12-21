var moment = require('moment')
var {callSendAPI} = require("./../handlers/callSendAPI")
var {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")

function runWeekCheck(sender_psid){
    moment().format();
    var intervalID2 = setTimeout(myCallback3, 20000)
    // var weekOfYear = (moment().dayOfYear() + 7) / 7
    function myCallback3(){

        var weekOfYear = 2

        if(Number.isInteger(weekOfYear)){
            var response1 = {
                "text" : `Did you achieve your week ${weekOfYear - 1} goal? \n\nWhere could you have improved? \n\nReply like this: \nR: I completed my weekly goal, but could have spent less time on Facebook`
            }
            callSendAPI(sender_psid, response1)
        }
    }
}

function dayTrainStarter(sender_psid, moTime){
    careSetting.findOne({sender_PSID: sender_psid}).then((doc) => {
        var niTime = doc.night_time.split("p")[0]
        // var dailyHourInterval = 12 + niTime - moTime
        // var sleepInterval = 12 - niTime + moTime
        var dailyHourInterval = 60
        var sleepInterval = 60
        
        function secondLoop(){
            var intervalID2 = global.setTimeout(myCallback2, sleepInterval * 1000)
            function myCallback2(){
                callSendAPI(sender_psid, {
                    "text": "Morning ⛅! What are your tasks for today? \n Reply like this: \n 1: phone a business friend \n 2: set up facebook page"
                })
                firstLoop()
            }
        }

        function firstLoop(){
            var intervalID = global.setTimeout(myCallback, dailyHourInterval * 1000)
            function myCallback(){

                callSendAPI(sender_psid, {
                    //Next time, add in custom ticking of completed tasks, not just the number of completed tasks
                    "text": "How many tasks did you complete today 🤔?",
                    "quick_replies":[
                        {
                            "content_type":"text",
                            "title":"0",
                            "payload":"0"
                        },
                        {
                            "content_type":"text",
                            "title":"1",
                            "payload":"1"
                        },
                        {
                            "content_type":"text",
                            "title":"2",
                            "payload":"2"
                        },
                        {
                            "content_type":"text",
                            "title":"3",
                            "payload":"3"
                        }         
                    ]
                    
                })
                secondLoop()
                runWeekCheck(sender_psid)
            }
        }

        callSendAPI(sender_psid, {
            "text":"Welcome to day 1! \n\nWhat are your tasks for the day? \n\nReply like this: \n1: phone a business friend \n2: set up facebook page"
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