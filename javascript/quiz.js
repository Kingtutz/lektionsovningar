const selector = document.querySelector('#catagory')
const form = document.querySelector('#quizform')
const questionEl = document.querySelector('.quizcard h3')
const answerButtons = [
  document.querySelector('#answer1'),
  document.querySelector('#answer2'),
  document.querySelector('#answer3'),
  document.querySelector('#answer4')
]

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

answerButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault()
    checkAnswer(button.innerText)
  })
})

function displayQuestion (question) {
  questionEl.innerHTML = question.question

  const answers = [...question.incorrect_answers, question.correct_answer]
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5)

  answerButtons.forEach((button, index) => {
    button.innerText = shuffledAnswers[index]
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

  answerButtons.forEach(button => {
    if (button.innerText === currentQuestion.correct_answer) {
      button.style.backgroundColor = 'green'
    } else if (button.innerText === selectedAnswer && !isCorrect) {
      button.style.backgroundColor = 'red'
    }
    button.disabled = true
  })

  setTimeout(() => {
    currentQuestionIndex++
    if (currentQuestionIndex < currentQuestions.length) {
      displayQuestion(currentQuestions[currentQuestionIndex])
    } else {
      questionEl.innerText = `Quiz Complete! Your score: ${score}/${currentQuestions.length}`
      answerButtons.forEach(button => {
        button.innerText = ''
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
