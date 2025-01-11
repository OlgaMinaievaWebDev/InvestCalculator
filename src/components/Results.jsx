function Results({ userInput }) {
  return (
    <section>
      <h2>Investment Summary</h2>
      <p>Initial Investment: ${userInput.initialInvestment}</p>
      <p>Annual Investment: ${userInput.annualInvestment}</p>
      <p>Expected Return: {userInput.expectedReturn}%</p>
      <p>Duration: {userInput.duration} years</p>
    </section>
  );
}

export default Results;
