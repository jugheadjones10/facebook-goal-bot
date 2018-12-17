var received_message = "My week 2 goal is to stop wanking"
var checker = received_message.split("week", 2)

if(checker[0] === "My " && !checker[1].split(" ").includes("1")){
    console.log(2)
}