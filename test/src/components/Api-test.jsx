const { useState } = require("react");

const ApiTest = () => {
  const [team, setTeam] = useState([]);

  const NBAPlayer = () => {
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    };

    fetch("https://free-nba.p.rapidapi.com/teams?page=0", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTeam(response.data);
      })
      .catch((err) => console.error(err));
  };

  console.log(team);

  return <button onClick={NBAPlayer}>тест</button>;
};

export default ApiTest;
