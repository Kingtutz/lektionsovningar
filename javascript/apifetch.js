const form = document.querySelector('#form')
const reset = document.querySelector('#reset')
const form2 = document.querySelector('#form2')

reset.addEventListener('click', reset => {
  output.innerHTML = ''
})

form.addEventListener('submit', event => {
  event.preventDefault()
  const url = `https://dog.ceo/api/breed/${breed.value}/images/random/${amount.value}`
  console.log(url)
  form.reset()
  fetch(url)
    .then(function (response) {
      console.log(response)

      return response.json()
    })
    .then(function (data) {
      console.log(data)
      output.innerHTML = ''
      for (let i = 0; i < data.message.length; i++) {
        const img = document.createElement('img')
        output.appendChild(img)
        img.src = data.message[i]
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

form2.addEventListener('submit', event => {
  event.preventDefault()
  const url = `https://api.chucknorris.io/jokes/random?category=${catagory.value}`
  console.log(url)

  fetch(url)
    .then(function (response) {
      console.log(response)

      return response.json()
    })
    .then(function (data) {
      console.log(data)
      output.innerHTML = ''
      const h3 = document.createElement('h3')
      output.appendChild(h3)
      h3.innerText = data.value
    })
    .catch(function (error) {
      console.log(error)
    })
})
form3.addEventListener('submit', event => {
  event.preventDefault()
  const url = `https://restcountries.com/v3.1/name/${country.value}`
  console.log(url)

  fetch(url)
    .then(function (response) {
      console.log(response)
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      output.innerHTML = ''
      const img = document.createElement('img')
      output.appendChild(img)
      img.src = data[0].flags.svg
      img.width = 200
    })
    .catch(function (error) {
      console.log(error)
    })
})
form4.addEventListener('submit', event => {
  event.preventDefault()
  const url = `https://restcountries.com/v3.1/lang/${lang.value}`
  console.log(url)
  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      output.innerHTML = ''
      for (const coutrys of data) {
        const img = document.createElement('img')
        const name = document.createElement('p')
        const region = document.createElement('p')
        output.append(img)
        img.src = coutrys.flags.png
        output.append(name)
        name.innerText = coutrys.name.common
        output.append(region)
        region.innerText = coutrys.region
        img.width = 200
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})
