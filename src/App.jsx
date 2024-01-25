import { useState } from "react";

export const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const responseData = await response.json();
      const filteredData = await responseData.results.filter(
        (item) => item.id <= inputValue
      );
      setData(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="number" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={getData}>update</button>
      {data.map((el) => (
        <div key={el.id}>
          <h2>{el.name}</h2>
          <img style={{ width: "150px" }} src={el.image} alt={el.name} />
          <p>{el.status}</p>
        </div>
      ))}
    </div>
  );
};
