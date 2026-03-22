
document.addEventListener("DOMContentLoaded" , ()=>{

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn" );
const restartBtn = document.getElementById("restart-btn" );
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text" );
const choicesList= document.getElementById("choices-list" );
const resultContainer = document.getElementById("result-container" );
const scoreDisplay= document.getElementById("score" );
 

// question , array 
const questions = [
  {
    question: "Which programming language is primarily used for web page styling and layout?",
    choices: ["Python", "CSS", "Java", "C++"],
    answer: "CSS",
  },
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlink and Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    choices: ["//", "/*", "#", "--"],
    answer: "//",
  },
  {
    question: "In Python, how do you print 'Hello, World!' to the console?",
    choices: [
      "echo('Hello, World!')",
      "print('Hello, World!')",
      "console.log('Hello, World!')",
      "System.out.println('Hello, World!')",
    ],
    answer: "print('Hello, World!')",
  },
  {
    question: "Which language is known as the 'language of the web' for adding interactivity to websites?",
    choices: ["Python", "JavaScript", "Ruby", "PHP"],
    answer: "JavaScript",
  },
  {
    question: "What is the file extension for Python scripts?",
    choices: [".js", ".py", ".java", ".html"],
    answer: ".py",
  },
  {
    question: "Which of these is NOT a programming language?",
    choices: ["Java", "Python", "HTML", "Go"],
    answer: "HTML",
  },
  {
    question: "In most programming languages, what is the index of the first element in an array?",
    choices: ["1", "0", "-1", "Depends on the language"],
    answer: "0",
  },
  {
    question: "Which company developed the JavaScript language?",
    choices: ["Microsoft", "Google", "Netscape", "Apple"],
    answer: "Netscape",
  },
  {
    question: "What keyword is used to define a variable in JavaScript that cannot be reassigned?",
    choices: ["var", "let", "const", "final"],
    answer: "const",
  },
];


let currentQuestionIndex = 0; 
let score =0; 


startBtn.addEventListener("click" , ()=>{
startBtn.classList.add("hidden");
restartBtn.classList.add("hidden");
questionContainer.classList.remove("hidden");

showQuestion();
// questionContainer.innerHTML = `First Question is here`;
});

function showQuestion(){
   questionText.innerText =  questions[currentQuestionIndex].question ;
choicesList.innerHTML="";
   questions[currentQuestionIndex].choices.forEach(choice =>{
  const li = document.createElement("li");
 
    li.textContent =choice  ;
    li.addEventListener("click" ,()=> selectAnswer(choice,li));
choicesList.appendChild(li);
})


}


 function selectAnswer(choice , selectLiElement){

    console.log(choice);
    // console.log("select answer is imedeily work "); // not not immeditely 
const correctAnswer = questions[currentQuestionIndex].answer;
 
document.querySelectorAll( "#choices-list li").forEach(li=>{
    li.classList.remove("selected");
})

selectLiElement.classList.add("selected");
// selectLiElement.classList.remove("li:hover");not working BUG when select option then again hover (fix later)

if(choice === correctAnswer){
    score++;
}

nextBtn.classList.remove("hidden");

    
 
 }

// next Button 
  nextBtn.addEventListener("click" ,()=>{
currentQuestionIndex++;

if(currentQuestionIndex <questions.length){
    showQuestion();
} else {
    showResult();
}

  });

  function showResult(){
    startBtn.classList.add("hidden");
    questionContainer.classList.add("hidden");
restartBtn.classList.remove("hidden");
resultContainer.classList.remove("hidden");
scoreDisplay.innerText = `${score} out of ${questions.length}`;

  }

// Restart Btn 
  restartBtn.addEventListener("click" , ()=>{
   currentQuestionIndex = 0; 
     score =0; 
     startBtn.classList.add("hidden");
restartBtn.classList.add("hidden");
resultContainer.classList.add("hidden");

questionContainer.classList.remove("hidden");

showQuestion();

  })

});