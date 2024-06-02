import {calculateInvestmentResults, formatter} from "../../src/util/investment.js";

function Result ({ userInput }) {
  const resultData = calculateInvestmentResults(userInput);
  const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((row) => {
          const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
          const totalAmountInvested = row.valueEndOfYear - totalInterest;

          return(
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
        )})}
      </tbody>
    </table>
  );
}

export default Result;