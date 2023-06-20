import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import displayScore  from './modules/displayScore.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'oNNL4c128XACNJjZeGHR';
const formId = document.getElementById('form');

formId.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log();
})

displayScore(baseUrl,gameId);