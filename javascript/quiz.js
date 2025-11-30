// const quizCard = document.createElement('div')
// const radioButton = document.createElement('input')
// const form = document.createElement('form')
// radioButton.type = 'radio'
// radioButton.name = 'true'
// radioButton.name = 'false'
// radioButton.value = 'Value'
// radioButton.id = 'Value'
// const quizBtn = document.querySelector('#getquiz')
// quizBtn.addEventListener('click', event => {
//   getQuiz().then(quizBuilder)
// })

// async function getQuiz () {
//   const url = `https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean`
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data.results)
//   return data
// }

// function quizBuilder (data) {
//   for (const question of data.results) {
//     console.log(question)
//     const h3 = document.createElement('h3')
//     document.body.appendChild(quizCard)
//     quizCard.appendChild(h3)
//     quizCard.classList.add('quizbox')
//     h3.textContent = question.question
//   }
//   // const trueRadioButton = document.createElement('input')
//   // const falseRadioButton = document.createElement('input')
//   // quizCard.append(h3)
//   // quizCard.append(form)
//   // form.append(trueRadioButton)
//   // form.append(falseRadioButton)
//   // trueRadioButton.type = 'checkbox'
//   // trueRadioButton.name = 'true'
//   // trueRadioButton.value = 'true'
//   // falseRadioButton.type = 'checkbox'
//   // falseRadioButton.name = 'false'
//   // falseRadioButton.value = 'false'
// }

const selector = document.querySelector('#catagory')

async function getCatagorys () {
  try {
    const categoryURL = `https://opentdb.com/api_category.php`
    console.log(categoryURL)
    const response = await fetch(categoryURL)
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('Failed to fetch categories:', error)
  }
}
async function getQuiz (amount, category, difficulty) {
  try {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    console.log(url)
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('Failed to fetch quiz:', error)
  }
}

getQuiz(10, 9, 'hard')
getCatagorys().then(data => {
  for (const catagory of data.trivia_categories) {
    for (const categoryObj of data.trivia_categories) {
      const option = document.createElement('option')
      selector.append(option)
      option.value = categoryObj.id
      option.innerText = categoryObj.name
    }
  }
})
