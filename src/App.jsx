import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 7,
    duration: 10,
  });
  const inputValid = userInput.duration >= 1;

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value === "" ? "" : +value,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleInputChange={handleInputChange} />
      {!inputValid && <p id="error">Duration must be at least 1 year</p>}
      {inputValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
