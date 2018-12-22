var moment = require("moment")
moment().format()

var spaceMsg = "Set start time: 12, 12, 123, 12, 21".split(" ")
var news = ""
for(i=0; i < spaceMsg.length; i++){
    news = news + spaceMsg[i]
}
var targ = news.split(":")[0]

if(targ === "Setstarttime"){
    var time = news.split(":")[1].split(",")
    var futStartArray = [time[0], time[1], time[2], time[3], time[4]]
    var futstartMoment = moment(futStartArray)
    console.log(futStartArray)
}

// 

// console.log(spaceMsg)
// if(spaceMsg[0] === ("week" || "Week") && spaceMsg[1] === ("1" || "1:")){
//     console.log("yes professor")
// }

// if(spaceMsg[0] === "Week" || spaceMsg[0] === "week"){
//     console.log("double yes prof")
// }



//     (
//         (spaceMsg[0] === ("Week" || "week")) 
//         && 
//         (spaceMsg[1] === ("1" || "1:"))
//     ) || 
//     (spaceMsg[0] === ("Week1" || "week1" || "week1:" || "Week1:"))
// )
//     {

//     console.log(69)
// }else{
//     console.log(spaceMsg[0])
//     console.log(spaceMsg[1])
// }


