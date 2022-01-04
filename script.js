function playerSelect(choice){
    let playerSelection = choice;
}


function compPlay(){
var array = ["rock", "paper", "scissors"];

var result = array[Math.floor(Math.random()*array.length)];
if(result == 'rock') document.getElementById('computer').innerHTML = "&#9994";
else if(result == 'paper') document.getElementById('computer').innerHTML = "&#9995";
else if(result == 'scissors') document.getElementById('computer').innerHTML = "&#9996";

return result;
}



function playRound(playerSelection, compSelection){
    if(playerSelection == "rock"){
        if(compSelection == "rock"){
            document.getElementById('msg-box').innerHTML = "It's a tie! Choose again!";
        }
        if(compSelection == "paper"){
            compScore += 1;
            document.getElementById('computer-score').innerHTML = `${compScore}`;
            document.getElementById('msg-box').innerHTML = "You lose! Paper beats Rock!Choose again!";
        }
        if(compSelection == "scissors"){
            playerScore += 1;
            document.getElementById('player-score').innerHTML = `${playerScore}`;
            document.getElementById('msg-box').innerHTML = "You win! Rock beats Scissors! Choose again!";
            
        }

    }

    if(playerSelection == "paper"){
        if(compSelection == "paper"){
            document.getElementById('msg-box').innerHTML = "It's a tie! Choose again!" ;
        }
        if(compSelection == "scissors"){
            compScore += 1;
            document.getElementById('computer-score').innerHTML = `${compScore}`;
            document.getElementById('msg-box').innerHTML = "You lose! Scissors beats Paper! Choose again!";
            
        }
        if(compSelection == "rock"){
            playerScore += 1;
            document.getElementById('player-score').innerHTML = `${playerScore}`;
            document.getElementById('msg-box').innerHTML = "You win! Rock beats Paper! Choose again!";
        }

    }

    if(playerSelection == "scissors"){
        if(compSelection == "scissors") {
            
            document.getElementById('msg-box').innerHTML = "It's a tie! Choose again!";
        }
        if(compSelection == "rock"){
            compScore += 1;
            document.getElementById('computer-score').innerHTML = `${compScore}`;
            document.getElementById('msg-box').innerHTML = "You lose! Rock beats Scissors! Choose again!";
        }
        if(compSelection == "paper"){
            playerScore += 1;
            document.getElementById('player-score').innerHTML = `${playerScore}`;
            document.getElementById('msg-box').innerHTML = "You win! Scissors beats Paper! Choose again!";
        }
    }
}

function game(choice){

    
    console.log("in game");

   
    let playerSelection;
    playerSelection = choice;
    let compSelection;
    compSelection = compPlay();
    playRound(playerSelection, compSelection);

    console.log(`PlayerScore : ${playerScore} || ComputerScore : ${compScore}`);
        

    
    if(playerScore == 5){
            showmsg();
            win();
        }
    else if(compScore == 5){
        showmsg();
        lose();
        
    }
    
    
}

function reset(){
    playerScore =0;
    compScore = 0;
    document.getElementById('computer-score').innerHTML = `${compScore}`;
    document.getElementById('player-score').innerHTML = `${playerScore}`;
    document.getElementById('msg-box').style.fontSize = "30px";
    document.getElementById('msg-box').style.color = "white";
    document.getElementById('msg-box').innerHTML = "Okay! Let's Play Again! :)" ;
    document.getElementById('hidden').style.display = 'none';
    document.getElementById('computer').style.backgroundColor = "black";
}


function win(){
        document.getElementById('msg-box').style.fontSize = "40px";
        document.getElementById('msg-box').style.color = "Green";
        document.getElementById('msg-box').innerHTML = "You win! Congratulations!";
}


function lose(){
        document.getElementById('msg-box').style.fontSize = "40px";
        document.getElementById('msg-box').style.color = "red";
        document.getElementById('msg-box').innerHTML = "Oh no! You lose! Better Luck Next Time :)" ;
        
}

function showmsg(){
    document.getElementById('hidden').style.display = "block";
}

function select(){
    document.getElementById('computer').style.backgroundColor = "silver";
}

let playerScore =0;
let compScore = 0;

