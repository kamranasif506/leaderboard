function displayScore(list) {
  let tableHtml = '';
  list.forEach((item) => {
    tableHtml += ` <tr><td>${item.name}: ${item.score}</td></tr>`;
  });
  document.getElementById('table_content').innerHTML = tableHtml;
}

export default displayScore;