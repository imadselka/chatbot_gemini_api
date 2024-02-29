import { useState } from "react";

const App = () => {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const surpriseOptions = [
    "who won the latest Nobel prize in literature?",
    "What is the capital of Canada?",
    "What is the population of the world?",
    "Where is the tallest building in the world?",
    "What is the biggest animal in the world?",
    "What is the biggest country in the world?",
    "What is the smallest country in the world?",
    "What is the smallest animal in the world?",
    "What is the smallest building in the world?",
    "What is the smallest mountain in the world?",
    "What is the smallest river in the world?",
    "What is the smallest ocean in the world?",
    "What is the smallest sea in the world?",
    "What is the smallest lake in the world?",
    "What is the smallest desert in the world?",
    "What is the smallest forest in the world?",
    "What is the smallest island in the world?",
    "What is the smallest city in the world?",
    "What is the smallest town in the world?",
    "What is the smallest village in the world?",
    "What is the smallest country in the world?",
    "What is the smallest continent in the world?",
    "What is the biggest building in the world?",
    "What is the biggest mountain in the world?",
    "What is the biggest river in the world?",
    "What is the biggest ocean in the world?",
    "What is the biggest sea in the world?",
    "What is the biggest lake in the world?",
    "What is the biggest desert in the world?",
    "What is the biggest forest in the world?",
  ];
  const surprise = () => {
    const random =
      surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    setValue(random);
  };
  const getResponse = async (value) => {
    if (!value) {
      setError("Please enter a value");
      return;
    }
    try {
      const response = await fetch(
        `https://api.susi.ai/susi/chat.json?q=${value}`
      );
      const data = await response.json();
      console.log(data);
      setChatHistory([...chatHistory, data]);
      setValue("");
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    }
  };

  return (
    <div className="app">
      <p>
        What do you want to know?
        <button className="surprise" onClick={surprise} disabled={!chatHistory}>
          Search
        </button>
      </p>
      <div className="input-container">
        <input
          value={value}
          placeholder="When is Christmas...?"
          onChange={(e) => setValue(e.target.value)}
        />

        {!error ? <button>Ask me</button> : <button>Clear</button>}
      </div>
      {error && <p className="error">{error}</p>}
      <div className="search-result">
        <div key={""}>
          <p className="answer"></p>
        </div>
      </div>
    </div>
  );
};

export default App;
