var moment = require('moment')

var {mongoose} = require("./../database/mongoose")
var {careSetting, careDaily, careWeekly} = require("./../mongoose-schemas/one")

moment().format();


// if(Number.isInteger(moment().dayOfYear() / 7)){
//     careWeekly.find()
// }


var newUser = new careWeekly({sender_PSID : "2134"})
newUser.save().then((doc) => {
        doc.myWeekDetails.push({
            "week_number" : 2,
            "week_goal" : "Whatever"
        })

        doc.save().then((doc) => {
            console.log("success")
        }, (e) => {
            console.log("ERROR")
        })
        
    }, (e) => {
        console.log("ERROR")
    }
)


careWeekly.find().then((docs) => {
    console.log(docs)
})

console.log("AWDA")

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