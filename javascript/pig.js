const form = document.querySelector('#form')
const rollbtn = document.querySelector('#rollbtn')
const staybtn = document.querySelector('#staybtn')
const formBox = document.querySelector('#formbox')
const scoreDiv = document.querySelector('#scorediv')
const roundScoreText = document.querySelector('#roundscore')
const roundNum = document.querySelector('#rounds')
const totalScoreEl = document.querySelector('#totalscore')
const diceDiv = document.querySelector('#dicediv')

const dieArr = [
  'die one',
  'die two',
  'die three',
  'die four',
  'die five',
  'die six'
]

let totalScore = 0
let roundScore = 0
let rounds = 0

staybtn.addEventListener('click', stay)
form.addEventListener('submit', nameInput)
rollbtn.addEventListener('click', roll)

function nameInput (event) {
  event.preventDefault()
  const playerName = form.querySelector('input').value
  console.log(playerName)
  formBox.classList.remove('flexcol')
  formBox.classList.add('hide')
  scoreDiv.classList.remove('hide')
  scoreDiv.classList.add('flexcol')
  document.querySelector('#playername').innerText = playerName
  roundNum.innerText = `rounds: ${rounds}`
  roundScoreText.innerText = `Round score: ${roundScore}`
  totalScoreEl.innerText = `Total score: ${totalScore}`

  form.reset()
}

function roll (event) {
  const randomNum = 1 + Math.floor(Math.random() * 6)
  console.log(randomNum)
  diceDiv.innerHTML = ''
  for (let i = 0; i < randomNum; i++) {
    const addDieDiv = document.createElement('div')
    diceDiv.appendChild(addDieDiv)
  }

  if (randomNum === 1) {
    rounds++
    roundScore = 0
  } else {
    roundScore += randomNum
  }

  roundScoreText.innerText = `Round score: ${roundScore}`
  roundNum.innerText = `Rounds: ${rounds}`
  console.log(i, roundScore)

  if (totalScore + roundScore >= 100) {
    scoreDiv.classList.remove('flexcol')
    scoreDiv.classList.add('hide')
    document.querySelector('#congrats').classList.remove('hide')
  }
  diceDiv.classList.add(`${dieArr[randomNum]}`)
}

function stay (event) {
  totalScore += roundScore
  roundScore = 0
  rounds++
  totalScoreEl.innerText = `Total score: ${totalScore}`
}
