const form = document.querySelector('#form')
const weatherDiv = document.createElement('div')
const cityName = document.createElement('h3')
const weatherIconEl = document.createElement('img')
const windEl = document.createElement('p')
const weatherConditionEl = document.createElement('p')

form.addEventListener('submit', cityInput)
function cityInput (event) {
  event.preventDefault()
  const serchedCity = form.querySelector('input').value
  console.log(serchedCity)
  getData(`${serchedCity}`)
  form.reset()
}

async function getData (input) {
  document.body.appendChild(weatherDiv)
  weatherDiv.setAttribute('id', 'card')

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=69da6f466916726570ce3f0abb9947ff`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result = await response.json()
    console.log(result)
    let lat = result[0].lat
    let lon = result[0].lon
    let city = result[0].name
    weatherDiv.appendChild(cityName)
    cityName.innerText = city

    console.log(lat)
    console.log(lon)
    getCityData(lat, lon)
    console.log(getCityData(lat, lon))
    async function getCityData (lat, lon) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=69da6f466916726570ce3f0abb9947ff`
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }

        const result = await response.json()
        const degres = result.main.temp - 273.15
        const iconId = result.weather[0].id
        const weaterCondition = result.weather[0].main

        console.log(iconId)
        if (iconId > 200 && iconId < 300) {
          weatherDiv.appendChild(weatherIconEl)
          weatherIconEl.src = 'https://openweathermap.org/img/wn/11d@2x.png'
        } else if (iconId > 300 && iconId < 322) {
          weatherDiv.appendChild(weatherIconEl)
          weatherIconEl.src = 'https://openweathermap.org/img/wn/09d@2x.png'
        } else if (iconId > 500 && iconId < 550) {
          weatherDiv.appendChild(weatherIconEl)
          weatherIconEl.src = 'https://openweathermap.org/img/wn/10d@2x.png'
        } else if (iconId > 600 && iconId < 622) {
          weatherDiv.appendChild(weatherIconEl)
          weatherIconEl.src = 'https://openweathermap.org/img/wn/13d@2x.png'
        } else if (iconId > 700 && iconId < 782) {
          weatherDiv.appendChild(weatherIconEl)
          weatherIconEl.src = 'https://openweathermap.org/img/wn/50d@2x.png'
        } else if (iconId === 800) {
          weatherDiv.appendChild(weatherIconEl)
          weatherIconEl.src = 'https://openweathermap.org/img/wn/01d@2x.png'
        } else if (iconId >= 801 && iconId < 805) {
          weatherDiv.appendChild(weatherIconEl)
          weatherIconEl.src = `https://openweathermap.org/img/wn/03d@2x.png`
        }
        weatherDiv.appendChild(weatherIconEl)
        weatherDiv.appendChild(weatherConditionEl)
        weatherConditionEl.innerText = weaterCondition
        console.log(degres)
        console.log(result)
      } catch (error) {
        console.error(error.message)
      }
    }
  } catch (error) {
    console.error(error.message)
  }
}
