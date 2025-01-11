import { useState } from "react";

function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 7,
    duration: 10,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value === "" ? "" : +value, // Allow empty input, otherwise convert to number
    }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
          <input
            name="initialInvestment"
            id="initialInvestment"
            type="number"
            value={userInput.initialInvestment}
            onChange={handleInputChange}
            placeholder="Enter amount"
            required
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
          <input
            name="annualInvestment"
            id="annualInvestment"
            type="number"
            value={userInput.annualInvestment}
            onChange={handleInputChange}
            placeholder="Enter amount"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">EXPECTED RETURN (%)</label>
          <input
            name="expectedReturn"
            id="expectedReturn"
            type="number"
            value={userInput.expectedReturn}
            onChange={handleInputChange}
            placeholder="Enter percentage"
            required
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION (Years)</label>
          <input
            name="duration"
            id="duration"
            type="number"
            value={userInput.duration}
            onChange={handleInputChange}
            placeholder="Enter years"
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
