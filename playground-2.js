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

// var newUser = new careWeekly({sender_PSID: "6969"})
// var doc2 = newUser.save().then((doc) => {
//         console.log("success")
//         return doc
//     }, (e) => {
//         console.log("ERROR")
//     }
// )
// doc2.then((doc) => {
//     doc.myWeekDetails.push({
//         "week_number" : 1,
//         "week_goal" : "Week 1 goal is to get a gf"
//     })

//     doc.save().then((doc) => {
//         console.log("success")
//     }, (e) => {
//         console.log("ERROR")
//     })
// })


var boo = "My week 2 goal srgdgfap less"

if(boo.split(" ").includes("week")){
        
    var checker = boo.split("week", 2)

    if(checker[0] === "My " && !checker[1].split(" ").includes("1")){
        //var week_of_year = (moment().dayOfYear() + 7)/7
        var week_of_year = 2
        careWeekly.findOne({sender_PSID: "6969"}).then((doc) => {

            doc.myWeekDetails.forEach(ele => {
                if(ele.week_number ===  week_of_year){
                    ele.week_goal = boo

                    doc.save().then((doc) => {
                        console.log("success")
                    }, (e) => {
                        console.log("ERROR")
                    })
                }else{
                    doc.myWeekDetails.push({
                        "week_number" : week_of_year,
                        "week_goal" : boo
                    })
    
                    doc.save().then((doc) => {
                        console.log("success")
                    }, (e) => {
                        console.log("ERROR")
                    })
                }
            })

            // console.log(foundWeek)
            // if(!foundWeek){
            //     doc.myWeekDetails.push({
            //         "week_number" : week_of_year,
            //         "week_goal" : boo
            //     })

            //     doc.save().then((doc) => {
            //         console.log("success")
            //     }, (e) => {
            //         console.log("ERROR")
            //     })
            // }else{
            //     foundWeek.week_goal = boo

            //     doc.save().then((doc) => {
            //         console.log("success")
            //     }, (e) => {
            //         console.log("ERROR")
            //     })
            // }
            
        }, (e) => {
            console.log(e)
        })

    }else{
        console.log("fail")
    }

}


module.exports = {
    mongoose
}



