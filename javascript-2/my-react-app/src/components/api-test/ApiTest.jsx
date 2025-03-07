import React, { useEffect, useState } from "react";

const ApiTest = () => {
  const URL = "https://api.github.com/users/timmywheels/repos";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Datan kunde inte hämtas");
        }
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Fel: ", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Mina projekt</h2>
      {data.map((repo) => (
        <article key={repo.id}>
          <h3>{repo.name}</h3>
          <a href={repo.html_url}>{repo.html_url}</a>
        </article>
      ))}
    </div>
  );
};

export default ApiTest;
