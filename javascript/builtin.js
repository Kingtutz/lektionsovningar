//math
console.log(Math.PI)
console.log(Math.round(5, 6))
console.log(Math.round(5, 3))
console.log(Math.random())

// string
const text = 'The quick fix for LETTERS'
console.log(text.toLowerCase())
const trim = '  hej jag bevöver trimas!   '
console.log(trim.trim())
const replace = 'hunden äter kattens mat!'
console.log(replace.replaceAll('hunden', 'hästen'))
console.log(replace.replaceAll(' ', '_'))

//arr
const arr = ['äpple', 'päron', 'banan']
const extendedArr = arr + arr.push('citron')
// arr.push({ value: 10 })
console.log(extendedArr)
arr.forEach((element, i, arr) => {
  console.log(element, i, arr)
})

const nrarr = ['1', '3', '22', '11', '33', '22', '9']
const filterarr = nrarr.filter(element => {
  console.log(element, element > 10)
  return element < 10
})
console.log(filterarr)

const mapped = nrarr.map(x => {
  return x * 0.5
})
console.log(mapped)

// övningsuppgifter

//1 stora bokstäver
const övninvgsText = 'If you judge people, you have no time to love them'
const övninvgsTextUpper = övninvgsText.toUpperCase()
console.log(övninvgsTextUpper)
const övninvgsTextLower = övninvgsTextUpper.toLowerCase()
console.log(övninvgsTextLower)
const text1 = 'Learn to val'
const text2 = 'ue yourself, which means: t'
const text3 = 'o fight for your happiness.'
const fullSentence = text1.concat(text2, text3)
console.log(fullSentence)
const sentence =
  'The most weird things are the funniest to say, because martians diminish them'
const chaneWeird = sentence.replace('weird', 'important')
const changeFunniest = sentence.replace('funniest', 'hardest')
const changeMartians = sentence.replace('martians', 'words')
const newSentence = sentence
  .replace('weird', 'important')
  .replace('funniest', 'hardest')
  .replace('martians', 'words')
console.log(chaneWeird)
console.log(changeFunniest)
console.log(changeMartians)
console.log(newSentence)
const str1 = 'In order to be irreplaceable one must always be different'
const str2 = 'Those who dare to fail miserably can achieve greatly'
const str3 = 'Well done is better than well said'
const str4 = 'You are what you believe yourself to be'
console.log(str1.length)
console.log(str1.charAt(56))
console.log(str2.length)
console.log(str2.charAt(51))
console.log(str3.length)
console.log(str3.charAt(33))
console.log(str4.length)
console.log(str4.charAt(38))
//arr

const arr1 = [4, 23, 65, 23, 1, 2, 88, 54, 103, 23, 53, 65, 2, 54, 33, 24, 100]
// console.log(arr1.includes(33))
// arr1.pop()
// console.log(arr1)
// arr1.shift()
// console.log(arr1)
// console.log(arr1.slice(3, 7))
const filter = arr1.filter(x => {
  return x > 50
})
const filterlower = arr1.filter(x => {
  return x < 50
})
const filterMiddle = arr1.filter(x => {
  return x < 70 && x > 20
})
console.log(filter)
console.log(filterlower)
console.log(filterMiddle)

const double = arr1.forEach(arr1 => {
  console.log(arr1 * 2)
})
const oddEven = arr1.forEach(arr1 => {
  if (arr1 % 2 == 0) {
    console.log('true', arr1)
    return 'true'
  } else {
    console.log('false', arr1)
    return false
  }
})
const multiSelf = arr1.forEach(arr1 => {
  console.log(arr1 * arr1)
})

const mappedDouble = arr1.map(x => {
  return x * 2
})
console.log(mappedDouble)
const mappedOddEven = arr1.map(arr1 => {
  if (arr1 % 2 == 0) {
    console.log('true', arr1)
  } else {
    console.log('false', arr1)
  }
})
const multiSelfMap = arr1.map(arr1 => {
  console.log(arr1 * arr1)
})

//experiment
arr1.sort(() => Math.random() - 0.5)
console.log(arr1)

function compareNumbers (a, b) {
  return a - b
}
arr1.sort(compareNumbers)
console.log(arr1)

//Math

const nrArr = [6, -2, -5, 3, 6, -3, -75, 5, 23]
const positive = nrArr.forEach(nrArr => {
  console.log(Math.abs(nrArr))
  return Math.abs(nrArr)
})
const avrunda = [3.23, 5.21, 75.3, 5.879, 3.9, 9.5]

const rounded = avrunda.forEach(avrunda => {
  console.log(Math.round(avrunda))
})
const roundedDown = avrunda.forEach(avrunda => {
  console.log(Math.floor(avrunda))
})
const roundedUp = avrunda.forEach(avrunda => {
  console.log(Math.ceil(avrunda))
})
const minNr = Math.min(...nrArr)
console.log(minNr)
const maxNr = Math.max(...nrArr)
console.log(maxNr)
