// const products = [
//   {
//     name: 'Ballonger',
//     price: 100,
//     discount: 0.2,
//     getDiscountedPrice () {
//       return this.price * (1 - this.discount)
//     }
//   },
//   {
//     name: 'Öl',
//     price: 20,
//     discount: 0,
//     getDiscountedPrice () {
//       return this.price * (1 - this.discount)
//     }
//   },
//   {
//     name: 'Partyhatt',
//     price: 10,
//     discount: 0.5,
//     getDiscountedPrice () {
//       return this.price * (1 - this.discount)
//     }
//   },
//   {
//     name: 'Flärpor',
//     price: 100,
//     discount: 0.3,
//     getDiscountedPrice () {
//       return this.price * (1 - this.discount)
//     }
//   },
//   {
//     name: 'Godis',
//     price: 200,
//     discount: 0.2,
//     getDiscountedPrice () {
//       return this.price * (1 - this.discount)
//     }
//   }
// ]

// // console.log(products[0].getDiscountedPrice())

// for (const product of products) {
//   console.log(product)

//   const div = document.createElement('div')
//   div.classList.add('product-card')
//   document.body.appendChild(div)

//   const nameEl = document.createElement('h1')
//   const priceEl = document.createElement('p')
//   const discountEl = document.createElement('p')
//   div.append(nameEl, priceEl, discountEl)
//   nameEl.innerText = product.name
//   priceEl.innerText = product.price + 'kr'
//   discountEl.innerText = product.getDiscountedPrice() + 'kr'
// }

// const obj1 = {
//   prop: 1,
//   o: {
//     name: 'test'
//   }
// }
// const obj2 = {}
// Object.assign(obj2, obj1)
// obj2.prop = 3
// obj2.o.name = 'nej'
// console.log(obj1, obj2)

//book

const book = {
  title: 'A book about js',
  author: 'Charlie Nilsson',
  genres: ['Tradegy', 'Gothic', 'Romance'],
  numberOfPages: 50,
  currentPage: 0,
  turnPage () {
    book.currentPage++
  }
}
book.turnPage()
console.log(book.currentPage)
book.turnPage()
console.log(book.currentPage)
book.turnPage()
console.log(book.currentPage)
book.turnPage()
console.log(book)
console.log(book.currentPage)

// hund

const hund = {
  Name: 'Enzo',
  bread: 'Amstaff',
  bark () {
    console.log(`Voff, jag heter ${hund.Name}!`)
  }
}
console.log(hund)
hund.bark()

// bil

const bil = {
  make: 'Kia',
  model: 'optima',
  year: '2019',
  speed: 0,
  logInfo () {
    console.log(bil)
  },
  incressSpeed (targetspeed) {
    for (let i = 0; i < targetspeed; i++) {
      bil.speed++
      console.log(bil.speed)
    }
  },
  break () {
    for (let i = bil.speed; bil.speed > 0; ) {
      bil.speed--
      console.log(bil.speed)
    }
  }
}
bil.logInfo()
bil.incressSpeed(10)
bil.break()
// bil.incressSpeed(150)
// bil.break()

let person = {
  name: 'Lisan al-Gaib',
  email: 'lisan.al-gaib@arrakis.dune',
  roles: [
    'Fremen Prophet',
    'Messiah',
    'Guerilla warrior',
    'Duke of House Atreides'
  ],

  affiliation: {
    tribe: 'Fremen',
    sietch: 'Sietch Tabr',
    planet: 'Arrakis'
  }
}
console.log(
  'tribe=' + person.affiliation.tribe,
  'planet=' + person.affiliation.planet
)
for (const roll of person.roles) {
  console.log(roll)
}

//klona

const clone = {}
Object.assign(clone, person)
console.log(person, clone)
clone.name = 'Charlie'
console.log(person, clone)

// call book func

function displayBook () {
  const divEl = document.createElement('div')
  document.body.appendChild(divEl)
  const titelEl = document.createElement('h1')
  const autherEl = document.createElement('h3')
  const genresEl = document.createElement('p')
  divEl.append(titelEl, autherEl, genresEl)
  divEl.classList.add('product-card')
  titelEl.innerText = book.title
  autherEl.innerText = book.author
  genresEl.innerText = book.genres
}

displayBook(book)

function hundFunc () {
  const divEl = document.createElement('div')
  document.body.appendChild(divEl)
  const hEl = document.createElement('h1')
  const pEl = document.createElement('p')
  divEl.append(hEl, pEl)
  divEl.classList.add('product-card')
  hEl.innerText = hund.Name
  pEl.innerText = hund.bread
}
hundFunc()
function bilFunc () {
  const divEl = document.createElement('div')
  document.body.appendChild(divEl)
  const brandEl = document.createElement('h1')
  const modelEl = document.createElement('h2')
  const yearEl = document.createElement('p')
  divEl.append(brandEl, modelEl, yearEl)
  divEl.classList.add('product-card')
  brandEl.innerText = bil.make
  modelEl.innerText = bil.model
  yearEl.innerText = bil.year
}
bilFunc()
