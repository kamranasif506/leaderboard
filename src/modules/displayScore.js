const fetchScores = async (baseUrl, gameId) => {
  let tableHtml = '';
  const url = `${baseUrl}games/${gameId}/scores/`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const res = data.result;
    res.forEach((item) => {
      tableHtml += `<tr><td>${item.user} : ${item.score}</td></tr>`;
    });
    document.getElementById('table_content').innerHTML = tableHtml;
  } catch (error) {
    tableHtml += `<tr><td>${error}</td></tr>`;
    document.getElementById('table_content').innerHTML = tableHtml;
  }
};

export default fetchScores;
