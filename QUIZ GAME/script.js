const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option-text'));
const questionCounterText = document.getElementById('counter')
const scoreText = document.getElementById('score')
const nxtButton = document.getElementById('nxt-button')
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions  = [];
const correct_mark = 1;
const max_Questions = 5;

//Question Option and answers
let questions = [
{
    question: 'I have got sunshine on a cloudy day, when it is cold outside I have got the month of _____',
 option1:'May',
 option2:'June',
 option3:'April',
    answer: 1
},

{
 question: 'Yeah, is it too late now to say sorry? cause I am missing more than just your _____',
option1:'Body',
option2: 'Sense of humor',
option3: 'Inteligence',
answer:1
},

{
 question: 'Oh baby, why dont you just me _____? I am losing my mind just a little',
option1: 'At the mall', 
option2: 'At my office',
option3:'In the middle',
answer: 3
},

{
 question: 'Thought i would end up with _____, but he was not a match',
 option1: 'Pete',
 option2:'Sean',
option3: 'Ricky',
answer:2
},

{
 question: 'My loneliness is killing me and i must confess I still _____',
option1:'believe',
option2: 'Cry',
option3: 'Love you',
 answer: 1
}
]

//create a function startGame 
startGame = () => {
    questionCounter = 0
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();

};
getNewQuestion = () => {
if(availableQuestions.length === 0 || questionCounter>= max_Questions){
   localStorage.setItem('mostRecentScore', score )
 return location.assign("/score.html")
}


questionCounter++;
 questionCounterText.innerText = `${questionCounter}/ ${max_Questions}`


const questionIndex =Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

options.forEach( option => {
    const number = option.dataset['number'];
    option.innerText = currentQuestion['option' + number];
});

availableQuestions.splice(questionIndex, 1);

acceptingAnswers = true;

};


options.forEach(option => {
    option.addEventListener('click', e => {
      if(!acceptingAnswers) return;

      acceptingAnswers = false;
     
      const selectedOption = e.target;
      const selectedAnswer = selectedOption.dataset['number'];


  let backGroundColor = selectedAnswer == currentQuestion.answer ? 'correct'
    : 'incorrect';
      
    if(backGroundColor == 'correct'){
        incrementScore(correct_mark);
    }
    
    selectedOption.parentElement.classList.add(backGroundColor);
    
    
    setTimeout( () => {
        selectedOption.parentElement.classList.remove(backGroundColor);  
        nxtButton.addEventListener('click', getNewQuestion() )
    }, 2500 )
 }); 

 
});

incrementScore = number => {
    score +++number;
    scoreText.innerText = score;
}


//call the function startgame
startGame();
