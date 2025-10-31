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