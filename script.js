function compPlay(){
    var array = ["rock", "paper", "scissors"];

    var result = array[Math.floor(Math.random()*array.length)];

    return result;
}



function playRound(playerSelection, compSelection){

    

    if(playerSelection == "rock"){
        if(compSelection == "rock"){
            playerScore +=1;
            compScore +=1;
            return "It's tie!";
        }
        if(compSelection == "paper"){
            compScore += 1;
            return "You lose! Paper beats Rock!";
        }
        if(compSelection == "scissors"){
            playerScore += 1;
            return "You win! Rock beats Scissors!";
        }

    }

    if(playerSelection == "paper"){
        if(compSelection == "paper"){
            playerScore +=1;
            compScore +=1;
            return "It's tie!";
        }
        if(compSelection == "scissors"){
            compScore += 1;
            return "You lose! Scissors beats Paper!";
        }
        if(compSelection == "rock"){
            playerScore += 1;
            return "You win! Rock beats Paper!";
        }

    }

    if(playerSelection == "scissors"){
        if(compSelection == "scissors") {
            playerScore +=1;
            compScore +=1;
            return "It's tie!";
        }
        if(compSelection == "rock"){
            compScore += 1;
            return "You lose! Rock beats Scissors!";
        }
        if(compSelection == "paper"){
            playerScore += 1;
            return "You win! Scissors beats Paper!";
        }

    }
}

function game(){

    
    for(let i=0; i<5; i++){

        let playerSelection;
        
        playerSelection = result.toLowerCase();
        compSelection = compPlay();
        
        console.log(playRound(playerSelection, compSelection));
        console.log(`PlayerScore : ${playerScore} || ComputerScore : ${compScore}`);
    }
    
    if(playerScore>compScore) return "You Won the game!!Congrats";
    else if(playerScore>compScore) return "Oh No!! You lose! Better Luck next time!!";
    else return "It's a tie";
}
let compScore = 0;
let playerScore =0;

console.log(game());
