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

  const data = { user: userName, score };
  await storeScores(data, baseUrl, gameId);
  const alert = document.getElementById('alert-message');
  alert.innerHTML = 'Data saved in the API';
  alert.style.display = 'block';

  document.getElementById('user').value = '';
  document.getElementById('score').value = '';
  setTimeout(() => {
    alert.style.display = 'none';
  }, 2000);
});

refresh.addEventListener('click', () => {
  displayScore(baseUrl, gameId);
});
