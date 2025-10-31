/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors']

/*-------------------------------- Variables --------------------------------*/

let playerChoice, cpuChoice, msg

/*------------------------ Cached Element References ------------------------*/

const resultDisplayEl = document.getElementById('result-display')

/*----------------------------- Event Listeners -----------------------------*/

document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", play)
})

/*-------------------------------- Functions --------------------------------*/

function play(e) {
  getPlayerChoice(e)
  getCpuChoice()
  compare()
  render()
}

function getPlayerChoice(e) {
  playerChoice = e.target.id
}

function getCpuChoice() {
  const randomIdx = Math.floor(Math.random() * choices.length)
  cpuChoice = choices[randomIdx]
}

function compare() {
  if (playerChoice === cpuChoice) {
    msg = 'You tied!'
  } else if (playerChoice === choices[0] && cpuChoice === choices[2]) {
    msg = "Congrats! You win!"
  } else if (playerChoice === choices[1] && cpuChoice === choices[0]) {
    msg = "Congrats! You win!"
  } else if (playerChoice === choices[2] && cpuChoice === choices[1]) {
    msg = "Congrats! You win!"
  } else {
    msg = "You lose! Try again?"
  }
}

function render() {
  resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${cpuChoice}. ${msg}`
}
