function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label id="user-input" htmlFor="initial investment">
            INITIAL INVESTMENT
          </label>
          <input
            id="user-input"
            type="number"
            placeholder="Enter amount"
            required
          />
        </p>
        <p>
          <label id="user-input" htmlFor="annual investment">
            ANNUAL INVESTMENT
          </label>
          <input
            id="user-input"
            type="number"
            placeholder="Enter amount"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label id="user-input" htmlFor="return">
            EXPECTED RETURN
          </label>
          <input
            id="user-input"
            type="number"
            placeholder="Enter percentage"
            required
          />
        </p>
        <p>
          <label id="user-input" htmlFor="duration">
            DURATION
          </label>
          <input
            id="user-input"
            type="number"
            placeholder="Enter years"
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
