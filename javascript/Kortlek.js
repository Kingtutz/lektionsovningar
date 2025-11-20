const cardDeck = new Array(52)
const drawButton = document.querySelector('#drawcards')
const divEl = document.createElement('div')
const h1El = document.createElement('h1')
drawButton.addEventListener('click', draw2Cards)
console.log(cardDeck)

const suits = ['hjärter', 'ruter', 'spader', 'klöver']
const values = [
  { value: 1, sym: 'A' },
  { value: 2, sym: '2' },
  { value: 3, sym: '3' },
  { value: 4, sym: '4' },
  { value: 5, sym: '5' },
  { value: 6, sym: '6' },
  { value: 7, sym: '7' },
  { value: 8, sym: '8' },
  { value: 9, sym: '9' },
  { value: 10, sym: '10' },
  { value: 11, sym: 'J' },
  { value: 12, sym: 'Q' },
  { value: 13, sym: 'K' }
]
let index = 0
for (let suit of suits) {
  for (let val of values) {
    cardDeck[index] = {
      suit: suit,
      value: val.value,
      sym: val.sym
    }
    index++
  }
}


function draw2Cards () {
  const randomNum = Math.floor(Math.random() * cardDeck.length)
  const randomNum2 = Math.floor(Math.random() * cardDeck.length)
  const card1 = cardDeck[randomNum]
  const card2 = cardDeck[randomNum2]
  document.body.appendChild(divEl)
  divEl.appendChild(h1El)
  h1El.innerText = ` ${card1.suit} ${card1.value} VS ${card2.suit} ${card2.value}`

  console.log(
    randomNum,
    randomNum2,
    'card1val=',
    card1.value,
    'card1val=',
    card2.value
  )

  if (card1.value > card2.value) {
    console.log('Winner ' + card1.value + ' of ' + card1.suit + '!')
  } else {
    console.log(
      'player 2 is winner with ' + card2.value + ' of ' + card2.suit + '!'
    )
  }
}
