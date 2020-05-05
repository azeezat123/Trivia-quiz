const mostRecentScore = localStorage.getItem('mostRecentScore');
const playerScore = document.getElementById('playerScore')
playerScore.innerText = mostRecentScore;