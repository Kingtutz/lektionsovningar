async function func () {
  return 10
}
const result = func()

const form = document.querySelector('#form')
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
