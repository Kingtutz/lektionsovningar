const h1 = document.querySelector('#lorem')
const p = document.querySelector('#par')
const btnClick = document.querySelector('#skicka')
const h2 = document.querySelector('#h2')
const form = document.querySelector('#inputform')

h1.addEventListener('click', logh1)
h1.addEventListener('mouseover', h1over)
h1.addEventListener('mouseleave', h1leave)
p.addEventListener('click', logp)
p.addEventListener('mouseenter', phover)
p.addEventListener('mouseleave', pleave)
btnClick.addEventListener('click', logtext)
btnClick.addEventListener('mouseenter', btnover)
btnClick.addEventListener('mouseleave', btnleave)
form.addEventListener('submit', formclick)

function formclick (event) {
  event.preventDefault()
  const inputEl = form.querySelector('input')
  const result = document.createElement('h1')
  result.innerText = inputEl.value
  document.querySelector('#formresult').appendChild(result)

  // result.reset()
}

function logh1 () {
  h2.innerText = 'Du klickade på H1!'
  console.log('H1')
}

function logp () {
  h2.innerText = 'Du klickade på P!'
}

function logtext () {
  h2.innerText = 'Du klickade på knappen!'
  console.log('KNAPP')
}
function btnover () {
  btnClick.innerText = 'OK'
}
function btnleave () {
  btnClick.innerText = 'Skicka'
}
function h1over () {
  h2.innerText = 'Du hovra över H1!'
}
function h1leave () {
  h2.innerText = ''
}
function phover () {
  p.style.backgroundColor = 'red'
}
function pleave () {
  p.style.backgroundColor = ''
}

document.body.addEventListener('mousemove', event => {
  document.body.style.backgroundColor = `hsl(0,${event.clientX}%,${event.clientY}%)`
})

// List

const formSubmit = document.querySelector('#liform')
const listDiv = document.querySelector('#listdiv')

formSubmit.addEventListener('submit', addList)

function addList (event) {
  event.preventDefault()
  const listInput = document.querySelector('#listitem')
  const listNumber = document.querySelector('#listnumber')
  for (i = 0; i < listNumber.value; i++) {
    const liEl = document.createElement('li')
    liEl.innerText = listInput.value
    listDiv.appendChild(liEl)
  }

  formSubmit.reset()
}
// Shopinglist
const shopinglist = document.querySelector('#shopinglist')
const shopinglistDiv = document.querySelector('#shopinglistdiv')

shopinglist.addEventListener('submit', addItem)

function addItem (event) {
  event.preventDefault()
  const item = shopinglist.querySelector('#item')
  const amount = shopinglist.querySelector('#amount')
  const liEl = document.createElement('li')
  liEl.innerText = `${amount.value} x ${item.value}`
  shopinglistDiv.appendChild(liEl)
  if (amount.value < 3) {
    liEl.style.backgroundColor = 'green'
  } else if (amount.value > 3 && amount.value < 6) {
    liEl.style.backgroundColor = 'blue'
  } else {
    liEl.style.backgroundColor = 'red'
  }
  liEl.addEventListener('click', remove)
  function remove (remove) {
    liEl.remove()
  }
  shopinglist.reset()
}

// random
const colorArr = [
  'red',
  'blue',
  'green',
  'pink',
  'orange',
  'black',
  'white',
  'yellow'
]

const randomBtn = document.querySelector('#randombtn')
const colorH1 = document.querySelector('#colorh1')

randomBtn.addEventListener('click', changeColor)

function changeColor (event) {
  colorH1.addEventListener('click', bgChange)
  const randomIndex = Math.floor(Math.random() * colorArr.length)
  console.log(randomIndex)
  colorH1.style.color = colorArr[randomIndex]
  colorH1.innerText = colorArr[randomIndex]
  if (randomIndex === 6) {
    colorH1.style.backgroundColor = 'black'
  } else {
    colorH1.style.backgroundColor = 'white'
  }
  function bgChange (event) {
    colorH1.style.backgroundColor = colorArr[randomIndex]
  }
}
