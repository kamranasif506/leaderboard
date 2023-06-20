import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import displayScore from './modules/displayScore.js';
import storeScores from './modules/storeScore.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 's0zzz40DTZXzyq8xizXP';
const formId = document.getElementById('form');
const refresh = document.getElementById('refresh');

formId.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userName = document.getElementById('user').value;
  const score = document.getElementById('score').value;

  const data = { user: userName, score: score };
  await storeScores(data, baseUrl, gameId);

  displayScore(baseUrl, gameId);
  document.getElementById('user').value = '';
  document.getElementById('score').value = '';
});

refresh.addEventListener('click', () => {
  displayScore(baseUrl, gameId);
});

displayScore(baseUrl, gameId);
