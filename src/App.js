import { useState } from "react";

const App = () => {
  const [error, setError] = useState(false);

  return (
    <div className="app">
      <p>
        What do you want to know?
        <button className="surprise">Search</button>
      </p>
      <div className="input-container">
        <input value={""} placeholder="When is Christmas...?" onChange={""} />

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
