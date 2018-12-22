var moment = require('moment')

var futStartMoment

function fb_tester_set_2019_time(received_message, sender_psid){
    var spaceMsg = received_message.text.split(" ")
    var news = ""
    for(i=0; i < spaceMsg.length; i++){
        news = news + spaceMsg[i]
    }
    var targ = news.split(":")[0]
   
    if(targ === "Setstarttime"){

        var time = news.split(":")[1].split(",")
        var futStartArray = [time[0], time[1], time[2], time[3], time[4]]
        futStartMoment = moment(futStartArray)

        var response
        return response = {
            "text" : `2019 start date set as ${futstartMoment}`
        }
    
    }else{
        return undefined
    }
}

module.exports = {fb_tester_set_2019_time, futStartMoment}
