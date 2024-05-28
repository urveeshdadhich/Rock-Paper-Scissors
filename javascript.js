function getComputerChoice(){
    let sign = Math.floor(Math.random()*3)
    if(sign == 1){
        sign = "Rock";
    } 
    else if(sign == 0){
        sign = "Paper";
    }
    else{
        sign = "Scissors";
    }
    return sign;
}

console.log(getComputerChoice());