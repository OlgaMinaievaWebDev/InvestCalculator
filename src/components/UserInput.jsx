function UserInput({ handleInputChange, userInput }) {
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
