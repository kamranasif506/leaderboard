const storeScores = async (data,baseUrl,gameId) => {
    const url = baseUrl+"games/"+gameId+"/scores/";
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
        
          const res = await response.json();
          console.log(res);
          return res;
    }catch (error) {
        console.log("Error:", error);
    }
   
} 

export default storeScores;