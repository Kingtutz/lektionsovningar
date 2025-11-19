const form = document.querySelector('#form')
const rollbtn = document.querySelector('#rollbtn')
const staybtn = document.querySelector('#staybtn')
const formBox = document.querySelector('#formbox')
const scoreDiv = document.querySelector('#scorediv')
const roundScoreText = document.querySelector('#roundscore')
const roundNum = document.querySelector('#rounds')
const totalScoreEl = document.querySelector('#totalscore')
const diceDiv = document.querySelector('#dicediv')
const newGame = document.querySelector('#newgame')
// const winnerScreen = document.querySelector('#congrats')
const progressBar = document.querySelector('#pigprogress')
const dieArr = ['one', 'two', 'three', 'four', 'five', 'six']
const congratsdiv = document.querySelector('#winningscreen')
const congratsText = document.querySelector('#congratstext')

let totalScore = 0
let roundScore = 0
let rounds = 0

staybtn.addEventListener('click', stay)
form.addEventListener('submit', nameInput)
rollbtn.addEventListener('click', roll)
newGame.addEventListener('click', restart)

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
  progressBar.classList.remove('hide')
  form.reset()
}

function roll (event) {
  const randomNum = 1 + Math.floor(Math.random() * 6)
  console.log(randomNum)
  let arr = `${dieArr[randomNum - 1]}`
  console.log(arr)
  diceDiv.innerHTML = ''
  diceDiv.classList.remove('die', 'one', 'two', 'three', 'four', 'five', 'six')
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
  diceDiv.classList.add('die', arr)

  roundScoreText.innerText = `Round score: ${roundScore}`
  roundNum.innerText = `Rounds: ${rounds}`
}

function stay (event) {
  totalScore += roundScore
  rounds++
  totalScoreEl.innerText = `Total score: ${totalScore}`
  progressBar.style.width = totalScore + '%'
  progressBar.style.backgroundColor = `hsl(160, ${totalScore}%, 70%)`
  progressBar.innerText = '🐷'
  if (totalScore >= 100) {
    scoreDiv.classList.remove('flexcol')
    scoreDiv.classList.add('hide')
    congratsdiv.classList.remove('hide')
    congratsdiv.classList.add('flexcol')
    progressBar.classList.add('hide')
    progressBar.style.width = '0%'
    progressBar.innerText = ''
    congratsText.innerHTML = `<h1>Congrats you win! <br> It took you ${roundScore} rounds!</h1>
    </div>`
  }
  roundScore = 0
}
function restart (event) {
  congratsdiv.classList.add('hide')
  congratsdiv.classList.remove('show')
  congratsdiv.classList.remove('flexcol')
  formBox.classList.remove('hide')
  formBox.classList.add('flexcol')
}
