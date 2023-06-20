import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import displayScore from './modules/displayScore';

const list = [
  {"name":"Name","score":100},
  {"name":"Name","score":90},
  {"name":"Name","score":70},
  {"name":"Name","score":50},
  {"name":"Name","score":10},
];
displayScore(list);