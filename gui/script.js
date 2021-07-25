var numQuestion = -1
var points = 0
var firstClick = false

moveQuestion(1)
$("#prev").prop("disabled", true)

$("#prev").click(()=>{moveQuestion(-1)})
$("#next").click(()=>{moveQuestion(1)})