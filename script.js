
let allQuestions = [
    {
        question: "HTML stand for?",
        option: [
            { answer: "Hyper text makeup language", isCorrect: false },
            { answer: "Hypertext markup language", isCorrect: true },
            { answer: "Hyper text makeing language", isCorrect: false }
        ]
    },

    {
        question: "What does DOM stand for?",
        option: [
            { answer: "Document Output Model", isCorrect: false },
            { answer: "Digital Object Mode", isCorrect: false },
            { answer: "Document Object Model", isCorrect: true }
        ]
    },

    {
        question: "What does URL stand for?",
        option: [
            { answer: "Uniform Resource Locator", isCorrect: false },
            { answer: "Universal Resource Locator", isCorrect: true },

        ]
    },
]




let index = 0

function displayQuestion (){

  document.getElementById("displayQues").innerHTML = allQuestions [index].question

  let btn = ""
  allQuestions [index].option.forEach((abc)=>{
    btn += `<button class="btn btn-outline-warning text-dark m-1">${abc.answer}</button>`
  })

  document.getElementById("displaybtn").innerHTML = btn                                                                    

}

function next (){             
  index++
  document.getElementById("displayQues").innerHTML = allQuestions [index].question
  displayQuestion()

}
function back (){

  index--
  document.getElementById("displayQues").innerHTML = allQuestions [index].question
  displayQuestion()

}                             

displayQuestion()