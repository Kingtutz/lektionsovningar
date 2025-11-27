const answer = document.querySelector('#answer')
const url = `https://restcountries.com/v3.1/all?fields=name,flags`

fetch(url)
  .then(function (response) {
    console.log(response)

    return response.json()
  })
  .then(function (data) {
    console.log(data)
    output.innerHTML = ''
    const randomNr = Math.floor(Math.random() * data.length)
    console.log(randomNr)
    const img = document.createElement('img')
    output.appendChild(img)
    img.src = data[randomNr].flags.svg
    img.width = 200
    answer.addEventListener('submit', event => {
      event.preventDefault()
      input = document.querySelector('#input')
      console.log(input.value)
      console.log(data[randomNr].name.common)
      if (input.value === data[randomNr].name.common) {
        console.log('correct')
        alert('Correct answer')
      } else {
        console.log('Wrong answer')
        alert('wrong answer!')
      }
    })
  })
  .catch(function (error) {
    console.log(error)
  })

  function randomNR(){
    
  }