document.querySelector('#dalmatin').addEventListener('click', event => {
  const dalJson = `{"message":"https:\/\/images.dog.ceo\/breeds\/dalmatian\/cooper1.jpg","status":"success"}`
  const dalObj = JSON.parse(dalJson)

  const img = document.createElement('img')
  document.body.appendChild(img)

  img.src = dalObj.message
})
document.querySelector('#husky').addEventListener('click', event => {
  const huskyJson = `{"message":["https:\/\/images.dog.ceo\/breeds\/husky\/enola-vpr-01.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_10898.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_11114.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_11626.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_13158.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_13942.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_1794.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_2368.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_2728.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_7329.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_7594.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_7762.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_7980.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_9194.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_9396.jpg"],"status":"success"}`
  const huskyObj = JSON.parse(huskyJson)
  creatingImg(huskyObj.message)
})
document.querySelector('#chuckjoke').addEventListener('click', event => {
  const chuckJson = `{"categories":[],"created_at":"2020-01-05 13:42:26.766831","icon_url":"https://api.chucknorris.io/img/avatar/chuck-norris.png","id":"-YN91mJfRz-hWZcTxK314g","updated_at":"2020-01-05 13:42:26.766831","url":"https://api.chucknorris.io/jokes/-YN91mJfRz-hWZcTxK314g","value":"Chuck Norris took his dog to the vet. The doctor neutered himself."}`
  const chuckObj = JSON.parse(chuckJson)
  createEl(chuckObj)
})
document.querySelector('#chuckfoodjoke').addEventListener('click', event => {
  const foodJson = `{"categories":["food"],"created_at":"2020-01-05 13:42:18.823766","icon_url":"https://api.chucknorris.io/img/avatar/chuck-norris.png","id":"tnsit4iqsk2fe7ohwk1qgq","updated_at":"2020-01-05 13:42:18.823766","url":"https://api.chucknorris.io/jokes/tnsit4iqsk2fe7ohwk1qgq","value":"Chuck Norris owns a chain of fast-food restaurants throughout the southwest. They serve nothing but barbecue-flavored ice cream and Hot Pockets."}`
  const foodObj = JSON.parse(foodJson)
  createEl(foodObj)
})
document.querySelector('#chucksportjoke').addEventListener('click', event => {
  const sportJson = `{"categories":["sport"],"created_at":"2020-01-05 13:42:19.576875","icon_url":"https://api.chucknorris.io/img/avatar/chuck-norris.png","id":"6zbljdhqtd2oqdxxfe9tpq","updated_at":"2020-01-05 13:42:19.576875","url":"https://api.chucknorris.io/jokes/6zbljdhqtd2oqdxxfe9tpq","value":"When Chuck Norris does a pushup, he isn't lifting himself up, he's pushing the Earth down."}`
  const sportObj = JSON.parse(sportJson)
  createEl(sportObj)
})
document.querySelector('#planet').addEventListener('click', event => {
  const planet1json = `{"name":"Tatooine","rotation_period":"23","orbital_period":"304","diameter":"10465","climate":"arid","gravity":"1 standard","terrain":"desert","surface_water":"1","population":"200000","residents":["https://swapi.dev/api/people/1/","https://swapi.dev/api/people/2/","https://swapi.dev/api/people/4/","https://swapi.dev/api/people/6/","https://swapi.dev/api/people/7/","https://swapi.dev/api/people/8/","https://swapi.dev/api/people/9/","https://swapi.dev/api/people/11/","https://swapi.dev/api/people/43/","https://swapi.dev/api/people/62/"],"films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/","https://swapi.dev/api/films/6/"],"created":"2014-12-09T13:50:49.641000Z","edited":"2014-12-20T20:58:18.411000Z","url":"https://swapi.dev/api/planets/1/"}`
  const planet1Obj = JSON.parse(planet1json)
  console.log(planet1Obj)
  showInfoPlanet(planet1Obj)
})
document.querySelector('#person').addEventListener('click', event => {
  const person1json = `{"name":"Han Solo","height":"180","mass":"80","hair_color":"brown","skin_color":"fair","eye_color":"brown","birth_year":"29BBY","gender":"male","homeworld":"https://swapi.dev/api/planets/22/","films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/"],"species":[],"vehicles":[],"starships":["https://swapi.dev/api/starships/10/","https://swapi.dev/api/starships/22/"],"created":"2014-12-10T16:49:14.582000Z","edited":"2014-12-20T21:17:50.334000Z","url":"https://swapi.dev/api/people/14/"}`
  const person1Obj = JSON.parse(person1json)
  console.log(person1Obj)
  showInfoPerson(person1Obj)
})
document.querySelector('#species').addEventListener('click', event => {
  const speciesJson = `{"count":37,"next":"https://swapi.dev/api/species/?page=2&format=json","previous":null,"results":[{"name":"Human","classification":"mammal","designation":"sentient","average_height":"180","skin_colors":"caucasian, black, asian, hispanic","hair_colors":"blonde, brown, black, red","eye_colors":"brown, blue, green, hazel, grey, amber","average_lifespan":"120","homeworld":"https://swapi.dev/api/planets/9/","language":"Galactic Basic","people":["https://swapi.dev/api/people/66/","https://swapi.dev/api/people/67/","https://swapi.dev/api/people/68/","https://swapi.dev/api/people/74/"],"films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/","https://swapi.dev/api/films/6/"],"created":"2014-12-10T13:52:11.567000Z","edited":"2014-12-20T21:36:42.136000Z","url":"https://swapi.dev/api/species/1/"},{"name":"Droid","classification":"artificial","designation":"sentient","average_height":"n/a","skin_colors":"n/a","hair_colors":"n/a","eye_colors":"n/a","average_lifespan":"indefinite","homeworld":null,"language":"n/a","people":["https://swapi.dev/api/people/2/","https://swapi.dev/api/people/3/","https://swapi.dev/api/people/8/","https://swapi.dev/api/people/23/"],"films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/","https://swapi.dev/api/films/6/"],"created":"2014-12-10T15:16:16.259000Z","edited":"2014-12-20T21:36:42.139000Z","url":"https://swapi.dev/api/species/2/"},{"name":"Wookie","classification":"mammal","designation":"sentient","average_height":"210","skin_colors":"gray","hair_colors":"black, brown","eye_colors":"blue, green, yellow, brown, golden, red","average_lifespan":"400","homeworld":"https://swapi.dev/api/planets/14/","language":"Shyriiwook","people":["https://swapi.dev/api/people/13/","https://swapi.dev/api/people/80/"],"films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/6/"],"created":"2014-12-10T16:44:31.486000Z","edited":"2014-12-20T21:36:42.142000Z","url":"https://swapi.dev/api/species/3/"},{"name":"Rodian","classification":"sentient","designation":"reptilian","average_height":"170","skin_colors":"green, blue","hair_colors":"n/a","eye_colors":"black","average_lifespan":"unknown","homeworld":"https://swapi.dev/api/planets/23/","language":"Galatic Basic","people":["https://swapi.dev/api/people/15/"],"films":["https://swapi.dev/api/films/1/"],"created":"2014-12-10T17:05:26.471000Z","edited":"2014-12-20T21:36:42.144000Z","url":"https://swapi.dev/api/species/4/"},{"name":"Hutt","classification":"gastropod","designation":"sentient","average_height":"300","skin_colors":"green, brown, tan","hair_colors":"n/a","eye_colors":"yellow, red","average_lifespan":"1000","homeworld":"https://swapi.dev/api/planets/24/","language":"Huttese","people":["https://swapi.dev/api/people/16/"],"films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/3/"],"created":"2014-12-10T17:12:50.410000Z","edited":"2014-12-20T21:36:42.146000Z","url":"https://swapi.dev/api/species/5/"},{"name":"Yoda's species","classification":"mammal","designation":"sentient","average_height":"66","skin_colors":"green, yellow","hair_colors":"brown, white","eye_colors":"brown, green, yellow","average_lifespan":"900","homeworld":"https://swapi.dev/api/planets/28/","language":"Galactic basic","people":["https://swapi.dev/api/people/20/"],"films":["https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/","https://swapi.dev/api/films/6/"],"created":"2014-12-15T12:27:22.877000Z","edited":"2014-12-20T21:36:42.148000Z","url":"https://swapi.dev/api/species/6/"},{"name":"Trandoshan","classification":"reptile","designation":"sentient","average_height":"200","skin_colors":"brown, green","hair_colors":"none","eye_colors":"yellow, orange","average_lifespan":"unknown","homeworld":"https://swapi.dev/api/planets/29/","language":"Dosh","people":["https://swapi.dev/api/people/24/"],"films":["https://swapi.dev/api/films/2/"],"created":"2014-12-15T13:07:47.704000Z","edited":"2014-12-20T21:36:42.151000Z","url":"https://swapi.dev/api/species/7/"},{"name":"Mon Calamari","classification":"amphibian","designation":"sentient","average_height":"160","skin_colors":"red, blue, brown, magenta","hair_colors":"none","eye_colors":"yellow","average_lifespan":"unknown","homeworld":"https://swapi.dev/api/planets/31/","language":"Mon Calamarian","people":["https://swapi.dev/api/people/27/"],"films":["https://swapi.dev/api/films/3/"],"created":"2014-12-18T11:09:52.263000Z","edited":"2014-12-20T21:36:42.153000Z","url":"https://swapi.dev/api/species/8/"},{"name":"Ewok","classification":"mammal","designation":"sentient","average_height":"100","skin_colors":"brown","hair_colors":"white, brown, black","eye_colors":"orange, brown","average_lifespan":"unknown","homeworld":"https://swapi.dev/api/planets/7/","language":"Ewokese","people":["https://swapi.dev/api/people/30/"],"films":["https://swapi.dev/api/films/3/"],"created":"2014-12-18T11:22:00.285000Z","edited":"2014-12-20T21:36:42.155000Z","url":"https://swapi.dev/api/species/9/"},{"name":"Sullustan","classification":"mammal","designation":"sentient","average_height":"180","skin_colors":"pale","hair_colors":"none","eye_colors":"black","average_lifespan":"unknown","homeworld":"https://swapi.dev/api/planets/33/","language":"Sullutese","people":["https://swapi.dev/api/people/31/"],"films":["https://swapi.dev/api/films/3/"],"created":"2014-12-18T11:26:20.103000Z","edited":"2014-12-20T21:36:42.157000Z","url":"https://swapi.dev/api/species/10/"}]}`
  const speciesObj = JSON.parse(speciesJson)
  console.log(speciesObj)
  showSpeciesName(speciesObj)
})
document.querySelector('#catfact').addEventListener('click', event => {
  const randomCatFactJson = `{"fact":"A cat has the power to sometimes heal themselves by purring. A domestic cat's purr has a frequency of between 25 and 150 Hertz, which happens to be the frequency at which muscles and bones best grow and repair themselves. ","length":222}`
  const randomCatFactObj = JSON.parse(randomCatFactJson)
  console.log(randomCatFactObj)
  const h3El = document.createElement('h3')
  document.body.appendChild(h3El)
  h3El.innerText = randomCatFactObj.fact
})
document.querySelector('#catbreedlist').addEventListener('click', event => {
  const catListJson = `{"current_page":1,"data":[{"breed":"Abyssinian","country":"Ethiopia","origin":"Natural\/Standard","coat":"Short","pattern":"Ticked"},{"breed":"Aegean","country":"Greece","origin":"Natural\/Standard","coat":"Semi-long","pattern":"Bi- or tri-colored"},{"breed":"American Curl","country":"United States","origin":"Mutation","coat":"Short\/Long","pattern":"All"},{"breed":"American Bobtail","country":"United States","origin":"Mutation","coat":"Short\/Long","pattern":"All"},{"breed":"American Shorthair","country":"United States","origin":"Natural","coat":"Short","pattern":"All but colorpoint"},{"breed":"American Wirehair","country":"United States","origin":"Mutation","coat":"Rex","pattern":"All but colorpoint"},{"breed":"Arabian Mau","country":"Arabian Peninsula","origin":"Natural","coat":"Short","pattern":""},{"breed":"Australian Mist","country":"Australia","origin":"Crossbreed","coat":"Short","pattern":"Spotted and Classic tabby"},{"breed":"Asian","country":"developed in the United Kingdom (founding stock from Asia)","origin":"","coat":"Short","pattern":"Evenly solid"},{"breed":"Asian Semi-longhair","country":"United Kingdom","origin":"Crossbreed","coat":"Semi-long","pattern":"Solid"}],"first_page_url":"https:\/\/catfact.ninja\/breeds?page=1","from":1,"last_page":10,"last_page_url":"https:\/\/catfact.ninja\/breeds?page=10","links":[{"url":null,"label":"Previous","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=1","label":"1","active":true},{"url":"https:\/\/catfact.ninja\/breeds?page=2","label":"2","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=3","label":"3","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=4","label":"4","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=5","label":"5","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=6","label":"6","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=7","label":"7","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=8","label":"8","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=9","label":"9","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=10","label":"10","active":false},{"url":"https:\/\/catfact.ninja\/breeds?page=2","label":"Next","active":false}],"next_page_url":"https:\/\/catfact.ninja\/breeds?page=2","path":"https:\/\/catfact.ninja\/breeds","per_page":10,"prev_page_url":null,"to":10,"total":98}`
  const catListObj = JSON.parse(catListJson)
  const breedList = catListObj.data

  const h1 = document.createElement('h1')
  document.body.appendChild(h1)
  h1.innerText = 'Cat Breeds'
  for (const breeds of breedList) {
    const pEl = document.createElement('p')
    document.body.appendChild(pEl)
    pEl.innerText = breeds.breed
  }
})
document.querySelector('#catfactlist').addEventListener('click', event => {
  const factListJson = `{"current_page":1,"data":[{"fact":"Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.","length":114},{"fact":"When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.","length":97},{"fact":"The technical term for a cat\u2019s hairball is a \u201cbezoar.\u201d","length":54},{"fact":"A group of cats is called a \u201cclowder.\u201d","length":38}],"first_page_url":"https:\/\/catfact.ninja\/facts?page=1","from":1,"last_page":83,"last_page_url":"https:\/\/catfact.ninja\/facts?page=83","links":[{"url":null,"label":"Previous","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=1","label":"1","active":true},{"url":"https:\/\/catfact.ninja\/facts?page=2","label":"2","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=3","label":"3","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=4","label":"4","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=5","label":"5","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=6","label":"6","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=7","label":"7","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=8","label":"8","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=9","label":"9","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=10","label":"10","active":false},{"url":null,"label":"...","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=82","label":"82","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=83","label":"83","active":false},{"url":"https:\/\/catfact.ninja\/facts?page=2","label":"Next","active":false}],"next_page_url":"https:\/\/catfact.ninja\/facts?page=2","path":"https:\/\/catfact.ninja\/facts","per_page":4,"prev_page_url":null,"to":4,"total":332}`
  const factListObj = JSON.parse(factListJson)
  console.log(factListObj)

  for (const fact of factListObj.data) {
    const pEl = document.createElement('p')
    document.body.appendChild(pEl)
    pEl.innerText = fact.fact
  }
})
function creatingImg (dogURLArray) {
  for (const imgURL of dogURLArray) {
    console.log(imgURL)
    const img = document.createElement('img')
    document.body.appendChild(img)

    img.src = imgURL
  }
}
function createEl (event) {
  const h1 = document.createElement('h1')
  document.body.appendChild(h1)
  h1.innerText = event.value
}
function showBreweryName (i) {
  for (const brewery of i) {
    console.log(brewery.name)

    const h1 = document.createElement('h1')
    document.body.appendChild(h1)
    h1.innerText = brewery.name

    const aEl = document.createElement('a')
    document.body.appendChild(aEl)
    aEl.innerText = 'Visit website >>'
    aEl.href = brewery.website_url
  }
}
function showInfoPlanet (event) {
  const h1 = document.createElement('h1')
  document.body.appendChild(h1)
  h1.innerText = event.name

  const pEl = document.createElement('p')
  document.body.appendChild(pEl)
  pEl.innerText = event.climate

  const p2El = document.createElement('p')
  document.body.appendChild(p2El)
  p2El.innerText = event.terrain
}
function showInfoPerson (event) {
  const h1 = document.createElement('h1')
  document.body.appendChild(h1)
  h1.innerText = event.name

  const pEl = document.createElement('p')
  document.body.appendChild(pEl)
  pEl.innerText = event.hair_color

  const p2El = document.createElement('p')
  document.body.appendChild(p2El)
  p2El.innerText = event.height + 'cm'
  const p3El = document.createElement('p')
  document.body.appendChild(p3El)
  p3El.innerText = event.mass + 'kg'
}
function showSpeciesName (arr) {
  const h1 = document.createElement('h1')
  document.body.appendChild(h1)
  h1.innerText = 'Species'
  for (const species of arr.results) {
    const pEl = document.createElement('p')
    document.body.appendChild(pEl)
    pEl.innerText = species.name
  }
}
// const dogJson = `{"message":["https:\/\/images.dog.ceo\/breeds\/sheepdog-indian\/Himalayan_Sheepdog.jpg","https:\/\/images.dog.ceo\/breeds\/mountain-bernese\/n02107683_3568.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-dandie\/n02096437_85.jpg","https:\/\/images.dog.ceo\/breeds\/mastiff-tibetan\/n02108551_4807.jpg","https:\/\/images.dog.ceo\/breeds\/boxer\/n02108089_9076.jpg"],"status":"success"}`

// const dogObj = JSON.parse(dogJson)
// console.log(dogObj.message)

// for (const imgURL of dogObj.message) {
//   console.log(imgURL)
//   const img = document.createElement('img')
//   document.body.appendChild(img)

//   img.src = imgURL
// }

// const labJson = `{"message":["https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_475.jpg","https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_719.jpg"],"status":"success"}`

// const labObj = JSON.parse(labJson)

// for (const imgURL of labObj.message) {
//   console.log(imgURL)
//   const img = document.createElement('img')
//   document.body.appendChild(img)
//   img.src = imgURL
// }

// creatingImg(labObj.message)

const sanDiegoJson = `[{"id":"ef970757-fe42-416f-931d-722451f1f59c","name":"10 Barrel Brewing Co","brewery_type":"large","address_1":"1501 E St","address_2":null,"address_3":null,"city":"San Diego","state_province":"California","postal_code":"92101-6618","country":"United States","longitude":-117.129593,"latitude":32.714813,"phone":"6195782311","website_url":"http:\/\/10barrel.com","state":"California","street":"1501 E St"},{"id":"5fdcc498-f9df-4fa5-b35d-487a59f0fecc","name":"2Kids Brewing Company","brewery_type":"micro","address_1":"8680 Miralani Dr Ste 123","address_2":null,"address_3":null,"city":"San Diego","state_province":"California","postal_code":"92126-6391","country":"United States","longitude":-117.137429,"latitude":32.896584,"phone":"8584805437","website_url":"http:\/\/www.2kidsBrewing.com","state":"California","street":"8680 Miralani Dr Ste 123"},{"id":"3b0b5b9b-f6d8-49e3-8ebd-0bcef6939bcd","name":"32 North Brewing Co","brewery_type":"brewpub","address_1":"8655 Production Ave Ste A","address_2":null,"address_3":null,"city":"San Diego","state_province":"California","postal_code":"92121-2258","country":"United States","longitude":-117.1649842,"latitude":32.88313237,"phone":"(619) 363-2622","website_url":"https:\/\/42northbrewing.com","state":"California","street":"8655 Production Ave Ste A"},{"id":"4db32843-26ff-4e73-9e24-1cb874109b24","name":"Abnormal Beer Company","brewery_type":"micro","address_1":"16990 Via Tazon Ste 123","address_2":null,"address_3":null,"city":"San Diego","state_province":"California","postal_code":"92127-1649","country":"United States","longitude":-117.08575,"latitude":33.02391,"phone":"8586182463","website_url":"http:\/\/abnormalbeer.co","state":"California","street":"16990 Via Tazon Ste 123"}]`
const sanDiegoObj = JSON.parse(sanDiegoJson)
// showBreweryName(sanDiegoObj)
// console.log(sanDiegoObj)

const breweryJson = `[{"id":"5e69d342-1efc-469e-bf8b-22d276c6d863","name":"Berlin Craft Beer Experience","brewery_type":"bar","address_1":"Reichenberger Str. 176","address_2":null,"address_3":null,"city":"Berlin","state_province":"Berlin","postal_code":"10999","country":"Germany","longitude":52.4995161,"latitude":13.4168836,"phone":"4915779216971","website_url":"http:\/\/www.berlincraftbeerexperience.com\/","state":"Berlin","street":"Reichenberger Str. 176"},{"id":"c75eb363-ba15-4f96-a3cf-d6462867a4e3","name":"Berlin Craft Beer Experience","brewery_type":"bar","address_1":"Reichenberger Str. 176","address_2":null,"address_3":null,"city":"Berlin","state_province":"Berlin","postal_code":"10999","country":"Germany","longitude":52.4995161,"latitude":13.4168836,"phone":"4915779216971","website_url":"http:\/\/www.berlincraftbeerexperience.com\/","state":"Berlin","street":"Reichenberger Str. 176"},{"id":"69bdb3dd-708a-430b-ac8c-5346f382f0d3","name":"Birgit","brewery_type":"beergarden","address_1":"Schleusenufer 3","address_2":null,"address_3":null,"city":"Berlin","state_province":"Berlin","postal_code":"10997","country":"Germany","longitude":52.5093176,"latitude":13.4123414,"phone":"491725746904","website_url":"https:\/\/www.birgit.club\/","state":"Berlin","street":"Schleusenufer 3"}]`

const breweryObj = JSON.parse(breweryJson)
console.log(breweryObj)

// showBreweryName(breweryObj)

