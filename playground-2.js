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

careWeekly.findOne({sender_PSID: "9000"}).then((doc) => {
    if(!doc){
        var newUser = new careWeekly({sender_PSID: "9000"})
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
        "week_goal" : "Hye budy"
    })

    doc.save().then((doc) => {
        console.log("success")
    }, (e) => {
        console.log("ERROR")
    })
}, (e) => {
    console.log(e)
})



module.exports = {
    mongoose
}



