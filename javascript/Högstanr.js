const btn = document.querySelector('#randombtn')
const playerScore = document.querySelector('#playerscore')
const computerScore = document.querySelector('#computerscore')

btn.addEventListener('click', getNumbers)
let pscore = 0
let cscore = 0
function getNumbers () {
  const playerNumber = Math.floor(Math.random() * 100)
  const computerNumber = Math.floor(Math.random() * 100)
  console.log(playerNumber, computerNumber)
  if (playerNumber > computerNumber) {
    pscore += 1
  } else if (playerNumber < computerNumber) {
    cscore += 1
  }
  playerScore.innerText = pscore
  computerScore.innerText = cscore
  if (pscore > 9) {
    alert('Player Won!')
    pscore = 0
    cscore = 0
  }
  if (cscore > 9) {
    alert('Computer Won!')
    pscore = 0
    cscore = 0
  }
}
