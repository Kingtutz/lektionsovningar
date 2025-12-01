async function func () {
  return 10
}
const result = func()

const form = document.querySelector('#form')
const chuckform = document.querySelector('#chuckform')
const output = document.querySelector('#output')

form.addEventListener('submit', event => {
  event.preventDefault()
  output.innerHTML = ''
  const breed = document.querySelector('input').value
  getDogImg(breed).then(displayDogImg)
  form.reset()
})
func().then(x => console.log(x))

async function getDogImg (breed) {
  try {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`
    console.log(url)
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data.message
  } catch (error) {
    console.log('error')
  }
}

function displayDogImg (imgURL) {
  const img = document.createElement('img')
  output.appendChild(img)
  img.src = imgURL
}
const chuckBtn = document.querySelector('#getchuckjoke')
chuckBtn.addEventListener('click', event => {
  event.preventDefault()
})
async function chuckJoke (category) {
  try {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`
    const response = await fetch(url)
    console.log(response)
    if (!response.ok) {
      throw 'error'
    }
    const data = await response.json()
    console.log('data', data)
    return data
  } catch (error) {
    throw error
  }
}


async function getChuckCategories () {
  try {
    const url = `https://api.chucknorris.io/jokes/categories`
    const response = await fetch(url)
    const chuckdata = await response.json()
    console.log(chuckdata)
    return chuckdata
  } catch (error) {}
}
getChuckCategories().then(chuckdata => {
  const selectorEl = document.querySelector('#categoryselector')
  for (const category of chuckdata) {
    const options = document.createElement('option')
    selectorEl.append(options)
    options.value = category
    options.innerText = category
  }
})
