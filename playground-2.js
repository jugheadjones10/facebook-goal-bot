var mongoose = require("mongoose")


var {careSetting, careDaily, careWeekly} = require("./mongoose-schemas/one")


mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true })

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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
//     console.log(docs[0].myWeekDetails)
// })



// var response
// careWeekly.find().then((docs) => {
//     response = {
//         "text" : docs.toString()
//     }
//     console.log(response)
// })



module.exports = {
    mongoose
}



  