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
}

function getPlayerChoice(e) {
  playerChoice = e.target.id
}

function getCpuChoice() {
  const randomIdx = Math.floor(Math.random() * choices.length)
  cpuChoice = choices[randomIdx]
}

function compare() {
  if (playerChoice === computerChoice) {
    msg = 'You tied!'
  } else if (playerChoice === choices[0] && computerChoice === choices[2]) {
    msg = "Congrats! You win!"
  } else if (playerChoice === choices[1] && computerChoice === choices[0]) {
    msg = "Congrats! You win!"
  } else if (playerChoice === choices[2] && computerChoice === choices[1]) {
    msg = "Congrats! You win!"
  } else {
    msg = "You lose! Try again?"
  }
}
