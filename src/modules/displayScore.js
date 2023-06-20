function displayScore(list) {
    let table_html = '';
    list.forEach((item) => {
        table_html += ` <tr><td>${item.name}: ${item.score}</td></tr>`;
    });
    document.getElementById('table_content').innerHTML = table_html;                    
}

export default displayScore;