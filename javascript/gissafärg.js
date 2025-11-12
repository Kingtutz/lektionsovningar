const colorArr = ['red', 'blue', 'green', 'pink', 'orange']
const guess = document.querySelector('#guess')
const colorDiv = document.querySelector('#colordiv')
const guessInput = document.querySelector('#loginput')
const score = document.querySelector('#score')
let scoresum = 0
guessInput.addEventListener('submit', newColor)
console.log(colorArr)
function newColor (event) {
  event.preventDefault()
  document.body.style.backgroundColor = '#a69888'
  const randomIndex = Math.floor(Math.random() * colorArr.length)
  console.log(randomIndex)
  score.innerText = scoresum
  colorDiv.style.backgroundColor = colorArr[randomIndex]
  const input = guessInput.querySelector('input')
  console.log(input.value)
  if (colorArr[randomIndex] === input.value) {
    document.body.style.backgroundColor = `${colorArr[randomIndex]}`
    scoresum += 1
  }
  score.innerText = scoresum
}
