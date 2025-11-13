const comNumber = document.querySelector('#compnumber')
const form = document.querySelector('#guessform')
const attempts = document.querySelector('#attempts')
const resetBtn = document.querySelector('#restart')
form.addEventListener('submit', guess)
resetBtn.addEventListener('click', restartGame)
let numberOfGuesses = 0
let computerNumber = Math.ceil(Math.random() * 100)
function guess (event) {
  event.preventDefault()
  const guess = document.querySelector('input').value
  numberOfGuesses += 1
  if (guess > computerNumber) {
    comNumber.innerText = 'Your number is to high'
  } else if (guess < computerNumber) {
    comNumber.innerText = 'Your number is to low'
  } else {
    comNumber.innerText = `You win it took you ${numberOfGuesses} guesses!`
    numberOfGuesses = 0
  }
  attempts.innerText = numberOfGuesses
  form.reset()
}

function restartGame () {
  computerNumber = Math.floor(Math.random() * 100)
  numberOfGuesses = 0
  comNumber.innerText = 'Game restarted'
}
