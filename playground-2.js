var mongoose = require("mongoose")


var {careSetting, careDaily, careWeekly} = require("./mongoose-schemas/one")


mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true })

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var moment = require("moment")
moment().format()



// var returnedDoc = careWeekly.findOne({sender_PSID: "6969"}).then((doc) => {
//     if(!doc){
//         var newUser = new careWeekly({sender_PSID: "6969"})
//         var doc2 = newUser.save().then((doc) => {
//                 console.log("success")
//                 return doc
//             }, (e) => {
//                 console.log("ERROR")
//             }
//         )
//         return doc2
//     }else{
//         return doc
//     }
// }).then((doc) => {
//     doc.myWeekDetails.push({
//         "week_number" : 1,
//         "week_goal" : "My week 1 goal is to fap less"
//     })

//     doc.save().then((doc) => {
//         console.log("success")
//     }, (e) => {
//         console.log("ERROR")
//     })

//     return doc
// }, (e) => {
//     console.log(e)
// })

// returnedDoc.then((doc) => {
//     var boo = "I could have fapped less"
//     if(boo.split(" ").includes("could")){
//         //Improve criteria to run this callback
//         //var week_of_year = (moment().dayOfYear() + 7)/7
//         var week_of_year = 2

//         careWeekly.findOne({sender_PSID: "6969"}).then((doc) => {
//             doc.myWeekDetails.forEach(function(ele){
//                 if(ele.week_number === (week_of_year - 1)){
//                     ele.week_goal_conclusion = boo
//                 }
//             })
//         })
//     }
// })
        
var boo = "I could have fapped less"
careWeekly.findOne({sender_PSID: "6969"}).then((doc) => {
    doc.myWeekDetails.forEach(function(ele){
        if(ele.week_number === (1)){
            ele.week_goal_conclusion = boo
        }
    })

    doc.save().then((doc) => {
        console.log("success")
    }, (e) => {
        console.log(e)
    })
})
console.log("success")


module.exports = {
    mongoose
}



