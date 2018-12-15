var moment = require('moment')
var {callSendAPI} = require("./../handlers/callSendAPI")
var {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")

moment().format();

// var weekOfYear = moment().dayOfYear() / 7
var weekOfYear = 2

function heyo(sender_id, res){
    console.log(sender_id)
    console.log(res)
}

if(Number.isInteger(weekOfYear)){
    careWeekly.find().then((docs) => {
        for(i=0; i < docs.length; i++){


            docs[i].myWeekDetails.push({
                "week_number" : weekOfYear
            })
            docs[i].save().then((b) => {
                console.log("success b")
            })

            var response = {
                "text" : `What's your week ${weekOfYear} goal?`
            }
           heyo(docs[i].sender_PSID, response)

        }
    })
}


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