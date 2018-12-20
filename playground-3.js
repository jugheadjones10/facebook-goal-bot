
var bee = "Week 1: Fap more"

    var spaceMsg = bee.split(" ")
    var news = ""
    for(i=0; i < spaceMsg.length; i++){
        news = news + spaceMsg[i]
    }
    var targ = news.split(":")[0]
    var sore = targ.split("")[4]
    console.log(sore)

    if(parseInt(sore, 10) && sore!=="1"){
        console.log(77)
    }


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


