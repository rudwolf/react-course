function UserInput ( { onChangeHandler, userInput } ) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput.initialInvestment}
            onChange={(event) => onChangeHandler("initialInvestment", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.annualInvestment}
            onChange={(event) => onChangeHandler("annualInvestment", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(event) => onChangeHandler("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) => onChangeHandler("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  )
}

export default UserInput;