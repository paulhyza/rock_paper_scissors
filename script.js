function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        console.log('You Lose! Computer wins');
        computerScore++;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        console.log('You Lose! Computer wins');
        computerScore++;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        console.log('You Lose! Computer wins');
        computerScore++;
    } else {
        console.log('You win!');
        playerScore++;
    }
}




function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
let playerScore=0;
let computerScore=0;

while (true) {
    const choice = prompt('Input your choice: Rock Paper or Scissors');
    const playerSelection= choice.toUpperCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: '+ computerScore);
    if (playerScore===5){
        console.log('Player wins!!!')
        break;
    } else if (computerScore===5) {
        console.log('Computer wins!!!')
        break;
    }

}


