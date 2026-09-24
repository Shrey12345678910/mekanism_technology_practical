import { useState } from "react";
import "./App.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const defaultNumbers = 1;

const App = () => {
  const [hours, setHours] = useState(defaultNumbers);
  const [flippedNumbers, setFlippedNumbers] = useState(new Set());

  const handleNumberClick = (number) => {
    setHours(number);
    setFlippedNumbers((currentNumbers) => {
      const nextNumbers = new Set(currentNumbers);
      nextNumbers.add(number);
      return nextNumbers;
    });
  };

  const handleReset = () => {
    setHours(defaultNumbers);
    setFlippedNumbers(new Set());
  };

  return (
    <main className="main">
      <div className="keypad selected">
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number)}
            className={`number-card ${flippedNumbers.has(number) ? "flipped" : ""} ${hours === number ? "active" : ""}`}
            aria-label={`Select ${number} hour${number === 1 ? "" : "s"}`}
          >
            <span className="number-card-inner">
              <span
                className="number-card-face number-card-front"
                aria-hidden="true"
              />
              <span className="number-card-face number-card-back">
                {number}
              </span>
            </span>
          </button>
        ))}
      </div>

      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </main>
  );
};

export default App;
