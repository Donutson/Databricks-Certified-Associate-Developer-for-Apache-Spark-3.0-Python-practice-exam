function fillQuestion(num){
    let image = (questions[num].image)?"<img class='img-responsive' src='"+questions[num].image+"'></img>":""
    let extra = (questions[num].extra)?questions[num].extra:""

    $("#question").html((num+1)+' - '+questions[num].question + image + extra);
}


function fillAnswers(num){
    $("#a").html(questions[num].A);
    $("#b").html(questions[num].B);
    $("#c").html(questions[num].C);
    $("#d").html(questions[num].D);
    $("#e").html(questions[num].E);
}


function checkAnswer(){
    $("input[name='answer']").click(function(){
        let id = this.id
        id = id[id.length - 1]
        
        if(id == questions[numQuestion].correct.toLocaleLowerCase()){
            $("#box-"+id+" label:first-child").css("color", "green")

            if(firstClick){
                points += 1
                firstClick = false
            }

        }else{
            $("#box-"+id+" label:first-child").css("color", "red")
            firstClick = false
        }

        console.log(numQuestion, questions.length)

        /*if(numQuestion == (questions.length - 1)){*/
        showScore()
        /*}*/
        
    })
}

function nextQuestion(){
    console.log("nextQuestion call")
    // Do it only if we haven't reach the last question
    if(numQuestion != (questions.length - 1)){
        // Answers box cleaning
        $("#box-a").html("<label for='answer-a'>A </label><input type='radio' name='answer' id='answer-a'><label for='answer-a' id='a'> </label>")
        $("#box-b").html("<label for='answer-b'>B </label><input type='radio' name='answer' id='answer-b'><label for='answer-b' id='b'> </label>")
        $("#box-c").html("<label for='answer-c'>C </label><input type='radio' name='answer' id='answer-c'><label for='answer-c' id='c'> </label>")
        $("#box-d").html("<label for='answer-d'>D </label><input type='radio' name='answer' id='answer-d'><label for='answer-d' id='d'> </label>")
        $("#box-e").html("<label for='answer-e'>E </label><input type='radio' name='answer' id='answer-e'><label for='answer-e' id='e'> </label>")

        // Go to next question
        numQuestion += 1

        // Disabled the next button
        if(numQuestion == (questions.length - 1)){
            clearNext()
        }

        // Loading question and answers
        fillQuestion(numQuestion)
        fillAnswers(numQuestion)

        checkAnswer()

        firstClick = true
    }

}

function clearNext(){
    $("button").prop("disabled", true)
}

function showScore(){
    let percent = (points/questions.length)*100 +''
    console.log(percent)
    percent = percent.substring(0,2)
    $("#score").html("Score: "+points+"/"+questions.length+" ("+percent+"%)")
}