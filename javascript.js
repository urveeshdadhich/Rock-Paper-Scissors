
function getHumanChoice(round){

    let choice = prompt('Round '+ round + '\nRock, Paper or Scissors?').toLowerCase();
    console.log("you chose " + choice);

    return choice;
}


function getComputerChoice(){
    let ranno =Math.floor(Math.random() * 3) + 1;
    if (ranno === 3){
        console.log("computer chose rock!");
        ranno = 'rock';
    }else if (ranno === 2){
        console.log("computer chose paper!");
        ranno = 'paper';
    }else if (ranno === 1){
        console.log("computer chose scissors!");
        ranno = 'scissors';
    }else{
        console.log(ranno);
        return 0;
    }
    console.log("ranoo:"  + ranno);
    return ranno;
}

function playRound(human, computer){
    if (human === computer){

        alert("You chose "+ human +"\nComputer chose "+computer+"\nyou both chose the same move");
        return 'draw';
    }else if (human === 'scissors' && computer === 'paper'){
        alert("You chose "+ human +"\nComputer chose "+computer+"\nScissors beats Paper, You Win!");
        return 'win';
    }else if (human === 'scissors' && computer === 'rock'){
        alert("You chose "+ human +"\nComputer chose "+computer+"\nRock beats Scissors, You Lose!");
        return 'win';
        return 'lose';
    }else if (human === 'paper' && computer === 'rock'){
        alert("You chose "+ human +"\nComputer chose "+computer+"\nPaper beats Rock, You Win!");
        return 'win';
    }else if (human === 'paper' && computer === 'scissors'){
        alert("You chose "+ human +"\nComputer chose "+computer+"\nScissors beats Paper, You Lose!");
        return 'lose';
    }else if (human === 'rock' && computer === 'scissors'){
        alert("You chose "+ human +"\nComputer chose "+computer+"\nRock beats Scissors, You Win!");
        return 'win';
    }else if (human === 'rock' && computer === 'paper'){
        alert("You chose "+ human +"\nComputer chose "+computer+"\nPaper beats Rock, You Lose!");
        return 'lose';
    }else{
        alert("Incorrect Input! Therefore you LOSE!");
        return 'lose';
    }
}



function playGame(){
    let game = true;
    while(game){
        let humanscore = 0;
        let computerscore = 0;
        
    
        alert("Play Rock Paper Scissors!");
        for (let rounds = 1; rounds < 6; rounds++){
            let WL = playRound(getHumanChoice(rounds), getComputerChoice());
    
            if (WL === 'win'){
                humanscore++;
            }else if (WL === 'lose'){
                computerscore++;
            }
            console.log("human: " + humanscore + " computer: " + computerscore);
            alert("You: " + humanscore + " Computer: " + computerscore);
        }

        let Won = humanscore>computerscore ? 'won!' : humanscore<computerscore ? 'lost!' : 'tied!';
        alert("GAME OVER\nFinal Score:\nYou: " + humanscore + " \nComputer: " + computerscore +"\nYou " + Won);

        let play = prompt("Game ended!\nWant to play again?\ntype 'yes' or 'no'").toLowerCase();
        if (play === 'yes'){
            game = true;
        }else {
            game = false;
        }

    }


}

console.log("Hi!");
playGame();