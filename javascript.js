
function getComputerChoice(){
   const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()* choices.length)];
   
} 

function getHumanChoice(){
    return prompt("Enter rock, paper, scissors to play !!!")
}

function playRound(humanSelection, computerSelection){
        console.log({humanSelection, computerSelection})
    if(humanSelection == computerSelection)
    {
        console.log("Draw");
    }else if((humanSelection == "rock" && computerSelection == "scissors")||
    (humanSelection == "paper" && computerSelection == "rock")||
    (humanSelection == "scissors" && computerSelection == "paper")){   
        console.log("You won, computer lost")
        return true;
    }else{
        console.log("You Lost, computer won")
        return false
    }
} 

function playGame(round){
    let humanScore = 0;
    let computerScore = 0; 
    for (let i = 0; i < round; i++){  
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        if(result == true){
            humanScore++
        
        }else if(result == false){
            computerScore++
        }
    }
    console.log(`Player has ${humanScore} and computer has ${computerScore}`)

    // cool
}


playGame(1);// i need console.log the score

