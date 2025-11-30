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
const form = document.querySelector('#quizform')
const questionEl = document.querySelector('.quizcard h3')
const answerButtons = [
  document.querySelector('#answer1'),
  document.querySelector('#answer2'),
  document.querySelector('#answer3'),
  document.querySelector('#answer4')
]
const answerForm = document.querySelector('#answerform')

let currentQuestions = []
let currentQuestionIndex = 0
let score = 0

form.addEventListener('submit', event => {
  event.preventDefault()
  const amount = document.querySelector('#amount').value
  const difficulty = document.querySelector('#difficulty').value
  const catagory = document.querySelector('#catagory').value
  getQuiz(amount, catagory, difficulty).then(questionData => {
    currentQuestions = questionData.results
    currentQuestionIndex = 0
    score = 0
    displayQuestion(currentQuestions[currentQuestionIndex])
  })
})

answerForm.addEventListener('submit', event => {
  event.preventDefault()
})

answerButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault()
    checkAnswer(button.textContent)
  })
})

function displayQuestion (question) {
  questionEl.textContent = question.question

  // Combine correct and incorrect answers and shuffle
  const answers = [...question.incorrect_answers, question.correct_answer]
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5)

  // Display answers on buttons
  answerButtons.forEach((button, index) => {
    button.textContent = shuffledAnswers[index]
    button.disabled = false
    button.style.backgroundColor = ''
  })
}

function checkAnswer (selectedAnswer) {
  const currentQuestion = currentQuestions[currentQuestionIndex]
  const isCorrect = selectedAnswer === currentQuestion.correct_answer

  if (isCorrect) {
    score++
  }

  // Highlight correct/incorrect answers
  answerButtons.forEach(button => {
    if (button.textContent === currentQuestion.correct_answer) {
      button.style.backgroundColor = 'green'
    } else if (button.textContent === selectedAnswer && !isCorrect) {
      button.style.backgroundColor = 'red'
    }
    button.disabled = true
  })

  // Move to next question after delay
  setTimeout(() => {
    currentQuestionIndex++
    if (currentQuestionIndex < currentQuestions.length) {
      displayQuestion(currentQuestions[currentQuestionIndex])
    } else {
      questionEl.textContent = `Quiz Complete! Score: ${score}/${currentQuestions.length}`
      answerButtons.forEach(button => {
        button.textContent = ''
        button.disabled = true
      })
    }
  }, 1500)
}

async function getQuiz (amount, category, difficulty) {
  try {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    const response = await fetch(url)
    const questionData = await response.json()
    console.log(questionData)
    return questionData
  } catch (error) {
    console.error('Failed to get quiz:', error)
  }
}

getCatagorys().then(categorydata => {
  for (const categoryObj of categorydata.trivia_categories) {
    const option = document.createElement('option')
    selector.append(option)
    option.value = categoryObj.id
    option.innerText = categoryObj.name
  }
})

async function getCatagorys () {
  try {
    const categoryURL = `https://opentdb.com/api_category.php`
    const response = await fetch(categoryURL)

    const categorydata = await response.json()

    return categorydata
  } catch (error) {
    console.error('Failed', error)
  }
}
