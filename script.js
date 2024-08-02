
let round = 1
let playerScore = 0
let computerScore = 0
let playerSelection = ''
let computerSelection = ''

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'TIE';
    }
    if ( (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') ||
        (playerSelection == 'PAPER' && computerSelection == 'ROCK')){
        return 'WIN';
    }
    return 'LOSS';
}






function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
  }
function updateScore(roundResult){
  switch (roundResult){
    case 'WIN':
      playerScore++;
      break
    case 'LOSS':
      computerScore++;
      break
    case 'TIE':
      break;
  }
  updateScoreboard(roundResult);
  round++;
  if(playerScore == 3 || computerScore == 3){
    openEndgame();
    setFinalMessage()
  }
  if(round == 6){
    openEndgame();
    setFinalMessage()
  }          
}
function updateScoreboard(roundResult){
  let playerSign = document.getElementById('p' + round.toString())
  let computerSign = document.getElementById('cpu' + round.toString())
  switch (playerSelection){
    case 'ROCK':
      playerSign.innerText = '🗿'
      break
    case 'PAPER':
      playerSign.innerText = '🧻'
      break
    case 'SCISSORS':
      playerSign.innerText = '✂️'
      break
  }
  switch (computerSelection){
    case 'ROCK':
      computerSign.innerText = '🗿'
      break
    case 'PAPER':
      computerSign.innerText = '🧻'
      break
    case 'SCISSORS':
      computerSign.innerText = '✂️'
      break
  }
  switch (roundResult){
    case 'WIN':
      playerSign.style.backgroundColor = "green"
      computerSign.style.backgroundColor ="red"
      break
    case 'LOSS':
      playerSign.style.backgroundColor = "red"
      computerSign.style.backgroundColor ="green"
      break
    case 'TIE':
      playerSign.style.backgroundColor = "gray"
      computerSign.style.backgroundColor ="gray"
      break;
  }
  
}
function cleanScoreboard(){
  for(let i=1; i<6; i++){
    let playerSign = document.getElementById('p' + i.toString())
    let computerSign = document.getElementById('cpu' + i.toString())
    playerSign.innerText = ''
    computerSign.innerText = ''
    playerSign.style.backgroundColor = null
      computerSign.style.backgroundColor = null
  }

}
function restartGame(){
  round = 1
  playerScore = 0
  computerScore = 0
  playerSelection = ''
  computerSelection = ''
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
  cleanScoreboard();
}

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))
restartBtn.addEventListener('click', restartGame)
const endgameModal = document.getElementById('endgame')
const scoreboard = document.getElementById('scoreboard')

function handleClick(playerSelect){
  playerSelection = playerSelect;
  computerSelection = getRandomChoice();
  updateScore(playRound(playerSelection,computerSelection));
    
}

function openEndgame() {
  endgame.classList.add('active')
  overlay.classList.add('active')
}
function closeEndgame() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}
function setFinalMessage() {
  if(playerScore == computerScore){
    return endgameMsg.textContent = "It's a Tie!"
  }
  return playerScore > computerScore
    ? (endgameMsg.textContent = 'You won!')
    : (endgameMsg.textContent = 'You lost...')
}