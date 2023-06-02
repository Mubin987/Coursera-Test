function quiz(){
    document.body.innerHTML = '';
    var timer = document.createElement("div")
    timer.id = "timer"
    timer.textContent = "00:00"
    document.getElementById("bodyy").appendChild(timer)
    startTimer();
    var heading = document.createElement("h1")
    heading.textContent = "Javascript Quiz"
    document.getElementById("bodyy").appendChild(heading)
    var Questions = ["Q.1) Which of the following is not a valid JavaScript data type?","Q.2) What is the correct way to declare a JavaScript variable?","Q.3) What is the result of the following expression: \"2\" + 2?","Q.4) How do you write a comment in JavaScript?","Q.5) Which method is used to remove the last element from an array in JavaScript?"]
    var choices = [['String','Boolean','Float','Function'],['var 7 = myVariable;','variable myVariable = 7;','myVariable = 7;','var myVariable = 7;'],['4','\"22\"','\"4\"','TypeError'],['<!-- This is a comment -->','/* This is a comment */','// This is a comment','** This is a comment **'],['pop()','remove()','delete()','shift()']]
    for(var i=0;i<5;i++){
        var question = document.createElement("div")
        question.textContent = Questions[i]
        document.getElementById("bodyy").appendChild(question)
        question.id = "question" + (i+1)
        var newline = document.createElement("br")
        document.getElementById("question"+(i+1)).appendChild(newline)
        var newline = document.createElement("br")
        document.getElementById("question"+(i+1)).appendChild(newline)
        for(var j=0;j<4;j++){
            var option = document.createElement("input")
            option.type = "radio"
            option.name = "question"+(i+1)
            option.value = choices[i][j]
            document.getElementById("question"+(i+1)).appendChild(option)
            var data = document.createElement("label")
            data.textContent = choices[i][j]
            document.getElementById("question"+(i+1)).appendChild(data)
            var newline = document.createElement("br")
            document.getElementById("question"+(i+1)).appendChild(newline)
        }
        var newline = document.createElement("br")
        document.getElementById("question"+(i+1)).appendChild(newline)
    }
    var submit = document.createElement("button")
    submit.type = "submit"
    submit.id = "submit"
    submit.textContent = 'Submit'
    submit.addEventListener("click", results);
    document.getElementById("bodyy").appendChild(submit)
}

// function ChecksubmitPressed(){
//     document.getElementById("submit").addEventListener("click",pressed())
// }
// function pressed(){
//     var submitPressed = true;
// }

function results(){
    var answers = ['Float','var myVariable = 7;','"22"','// This is a comment','pop()']
    // console.log("r")
   // do{
        submitPressed = false;
        var flag = true
        var score = 0
        for(var i=0;i<5;i++){
            var name = "question"+(i+1) 
            var selectedOption = document.querySelector(`input[name="${name}"]:checked`);
            if (selectedOption) {
                if(selectedOption.value===answers[i]){
                    score++
                }
              } 
            else {
                flag = false
            }
        }
    //     ChecksubmitPressed()
    //     console.log("in")
    // }while(flag==false && submitPressed==true);
    // console.log("out")
    if(flag==false){
        alert("Answer all questions");
    }
    else{
        alert('Congratulations🎉🎉\nYou got ' + score + ' correct')
        location.reload();
    }
    
}

var countdown; 
var secondsRemaining = 300; 

function startTimer() {
  clearInterval(countdown);

  var minutes = Math.floor(secondsRemaining / 60);
  var seconds = secondsRemaining % 60;

  displayTime(minutes, seconds);

  countdown = setInterval(function() {
    secondsRemaining--;

    var minutes = Math.floor(secondsRemaining / 60);
    var seconds = secondsRemaining % 60;

    displayTime(minutes, seconds);

    if (secondsRemaining <= 0) {
      clearInterval(countdown);
      alert("Time's up!");
    }
  }, 1000); 
}

function displayTime(minutes, seconds) {
  var formattedMinutes = String(minutes).padStart(2, "0");
  var formattedSeconds = String(seconds).padStart(2, "0");
  
  document.getElementById("timer").textContent = formattedMinutes + ":" + formattedSeconds;
}

