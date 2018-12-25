'use strict'
// if we click on start/reset button
//if we are playing, reloaded page
//if we are not playing,show countdown box
    //reduce time by second
    //time left? yes-continue, no-game over
        //change button to reset, generate a new question

//if click on answer box
    //correct? yes, increase score by 1, generate a new question
//wrong? no, show try again box for 1 second

var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswerAdd;
var correctAnswerSubtract;
var correctAnswerMultiply;
var correctAnswerDivide;

document.getElementById("adding").onclick = function(){
    showGame();
    document.getElementById("operator").innerHTML = "Adding";
    document.getElementById("start-reset").onclick = function(){
    hide("back-to-board");
    if (playing == true){
        location.reload();  //reload page
    }
    else{//if we are not playing
        //change mode to playing

        playingMode();
        
        //generate a new Q&A
        generateQAAdd();
    }
}
//clicking on a answer box
 for( var i=1; i<5; i++){
  document.getElementById("box" +i).onclick= function(){
    //check if we are playing
    if (playing == true){
        if(this.innerHTML == correctAnswerAdd){
            rightChoice();
                       
            //generate a new question
            generateQAAdd();
        }
        else{
            wrongChoice();
        }
    }
  }  
}
}

document.getElementById("subtracting").onclick = function(){
    showGame();
    document.getElementById("operator").innerHTML = "Subtracting";
    document.getElementById("start-reset").onclick = function(){
    hide("back-to-board");
    if (playing == true){
        location.reload();  //reload page
    }
    else{//if we are not playing
        //change mode to playing

        playingMode();
        
        //generate a new Q&A
        generateQASubtract();
    }
}
//clicking on a answer box
 for( var i=1; i<5; i++){
  document.getElementById("box" +i).onclick= function(){
    //check if we are playing
    if (playing == true){
        if(this.innerHTML == correctAnswerSubtract){
            rightChoice();
                       
            //generate a new question
            generateQASubtract();
        }
        else{
            wrongChoice();
        }
    }
  }  
}
}

document.getElementById("multiplying").onclick = function(){
    showGame();
    document.getElementById("operator").innerHTML = "Multiplying";
    document.getElementById("start-reset").onclick = function(){
    hide("back-to-board");
    if (playing == true){
        location.reload();  //reload page
    }
    else{//if we are not playing
        //change mode to playing

        playingMode();
        
        //generate a new Q&A
        generateQAMultiply();
    }
}
//clicking on a answer box
 for( var i=1; i<5; i++){
  document.getElementById("box" +i).onclick= function(){
    //check if we are playing
    if (playing == true){
        if(this.innerHTML == correctAnswerMultiply){
            rightChoice();
            
            
            //generate a new question
            generateQAMultiply();
        }
        else{
            wrongChoice();
        }
    }
  }  
}
}

document.getElementById("dividing").onclick = function(){
    showGame();
    document.getElementById("operator").innerHTML = "Dividing";
    document.getElementById("start-reset").onclick = function(){
    hide("back-to-board");
    if (playing == true){
        location.reload();  //reload page
    }
    else{//if we are not playing
        //change mode to playing

        playingMode();
        
        //generate a new Q&A
        generateQADivide();
    }
}
//clicking on a answer box
 for( var i=1; i<5; i++){
  document.getElementById("box" +i).onclick= function(){
    //check if we are playing
    if (playing == true){
        if(this.innerHTML == correctAnswerDivide){
            rightChoice();
                       
            //generate a new question
            generateQADivide();
        }
        else{
            wrongChoice();
        }
    }
  }  
}
}

document.getElementById("back-to-board").onclick = function(){
    showBoard();
    hide("game-over");
    location.reload();
}


//functions

//start counter
function startCountdown(){
    action = setInterval(function(){
        timeRemaining -= 1;
        document.getElementById("time-remaining-value").innerHTML = timeRemaining;
        if(timeRemaining==0){
            stopCountdown();
            show("game-over");
            document.getElementById("game-over").innerHTML = "<p>Game Over</p><p>Your score is " + score + "</p>";
            hide("time-remaining"); 
            hide("right");
            hide("wrong");
            playing = false;
            document.getElementById("start-reset").innerHTML = "Start Game";
        }        
    }, 1000);
}

//stop counter
function stopCountdown(){
    clearInterval(action);
    show("back-to-board");
}

//hide an element
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

//show an element
function show(Id){
    document.getElementById(Id).style.display = "block";
}
function showGame(){
    hide("game-board");
    show("operator");
    show("score-box");
    show("question");
    show("instruction");
    show("choices");
    show("back-to-board");
    show("start-reset");
}
function showBoard(){
    show("game-board");
    hide("operator");
    hide("score-box");
    hide("question");
    hide("instruction");
    hide("choices");
    hide("back-to-board");
    hide("start-reset");
}

//generate a new QA for Adding
function generateQAAdd(){
    var x = Math.round(Math.random()*9)+1;
    var y = Math.round(Math.random()*9)+1;
    correctAnswerAdd = x + y;
    
    document.getElementById("question").innerHTML = x + "+" + y;
    
    var correctPosition =  Math.round(Math.random()*3)+1;
    
    //fill 1 box with the correct answer
    document.getElementById("box" + correctPosition).innerHTML = correctAnswerAdd;
    
    //fill other boxes with wrong answers
    var answers = [correctAnswerAdd];
    for(var i =1; i<5; i++){
        if (i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = (Math.round(Math.random()*9)+1) + (Math.round(Math.random()*9)+1);
            }
            while (answers.indexOf(wrongAnswer)>-1)        
         document.getElementById("box" + i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer);
        }
        
    }    
}
//generate a new QA for Substracting
function generateQASubtract(){
    var x = Math.round(Math.random()*9)+1;
    var y = Math.round(Math.random()*9)+1;
    correctAnswerSubtract = x - y;
    
    document.getElementById("question").innerHTML = x + "-" + y;
    
    var correctPosition =  Math.round(Math.random()*3)+1;
    
    //fill 1 box with the correct answer
    document.getElementById("box" + correctPosition).innerHTML = correctAnswerSubtract;
    
    //fill other boxes with wrong answers
    var answers = [correctAnswerSubtract];
    for(var i =1; i<5; i++){
        if (i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = (Math.round(Math.random()*9)+1) - (Math.round(Math.random()*9)+1);
            }
            while (answers.indexOf(wrongAnswer)>-1)        
         document.getElementById("box" + i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer);
        }
        
    }    
}

//generate a new Q&A for  Multiplying
function generateQAMultiply(){
    var x = Math.round(Math.random()*9)+1;
    var y = Math.round(Math.random()*9)+1;
    correctAnswerMultiply = x*y;
    
    document.getElementById("question").innerHTML = x + "x" + y;
    
    var correctPosition =  Math.round(Math.random()*3)+1;
    
    //fill 1 box with the correct answer
    document.getElementById("box" + correctPosition).innerHTML = correctAnswerMultiply;
    
    //fill other boxes with wrong answers
    var answers = [correctAnswerMultiply];
    for(var i =1; i<5; i++){
        if (i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = (Math.round(Math.random()*9)+1)*(Math.round(Math.random()*9)+1);
            }
            while (answers.indexOf(wrongAnswer)>-1)        
         document.getElementById("box" + i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer);
        }
        
    }    
}

//function to generate a QA for dividing
function generateQADivide(){
    var x = Math.round(Math.random()*9)+1;
    var y = Math.round(Math.random()*9)+1;
    correctAnswerDivide = (x / y).toFixed(2);
    
    document.getElementById("question").innerHTML = x + "/" + y;
    
    var correctPosition =  (Math.round(Math.random()*3)+1);
    
    //fill 1 box with the correct answer
    document.getElementById("box" + correctPosition).innerHTML = correctAnswerDivide;
    
    //fill other boxes with wrong answers
    var answers = [correctAnswerDivide];
    for(var i =1; i<5; i++){
        if (i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = ((Math.round(Math.random()*9)+1) / (Math.round(Math.random()*9)+1)).toFixed(2);
            }
            while (answers.indexOf(wrongAnswer)>-1)    
         document.getElementById("box" + i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer);
        }
        
    }    
}


function playingMode(){
    playing=true;
        
        //set score to 0
        score = 0;
        document.getElementById("score-value").innerHTML = score;
        
        //show countdown box
        show("time-remaining");   
        timeRemaining=60;
        document.getElementById("time-remaining-value").innerHTML = timeRemaining;
        
        //hide game over box
        hide("game-over");
        
        //change button to reset
        document.getElementById("start-reset").innerHTML = "Reset Game";
        
        //start countdown
        startCountdown();
}

function rightChoice(){
    score++;
    document.getElementById("score-value").innerHTML = score;
    hide("wrong");
    show("right");
    setTimeout(function(){
        hide("right");
    }, 1000);
}

function wrongChoice(){
    hide("right");
    show("wrong");
    setTimeout(function(){
        hide("wrong");
    }, 1000);
}
