
    const choices = ['rock', 'paper', 'scissors']
    let playerPick;
    let computerSelection;
    let result;


    function computerPlay() {
        computerSelection = choices[Math.floor(Math.random() * choices.length)]
    }

   function playerChoice() {
        computerPlay()
        playerPick = prompt("Pick Rock, Paper or Scissors")
        results()
        console.log(result)
    }
    playerChoice()

    function results() {
        if (computerSelection === playerPick) {
        result = "it's a draw"
        } if (computerSelection === 'rock' && playerPick === 'paper') {
            result = 'You win! ' + playerPick + ' beats ' + computerSelection;
        } if (computerSelection === 'rock' && playerPick === 'scissors') {
            result = 'You lose! ' + playerPick + ' loses to ' + computerSelection;
        } if (computerSelection === 'scissors' && playerPick === 'rock') {
            result = 'You win! ' + playerPick + ' beats ' + computerSelection;
        } if (computerSelection === 'scissors' && playerPick === 'paper') {
        result = 'You lose ' + playerPick + ' loses to ' + computerSelection;
        } if (computerSelection === 'paper' && playerPick === 'scissors') {
        result = 'You win ' + playerPick + ' beats ' + computerSelection;
        } if (computerSelection === 'paper' && playerPick === 'rock') {
        result = 'You lose ' + playerPick + ' loses to ' + computerSelection
        }
    }