import Header from "../components/Header/Header";
import UserInput from "../components/UserInput/UserInput";
import Result from "../components/Result/Result";
import {useState} from "react";

function App() {
  const [userInput, setUserInput] = useState({
    "initialInvestment": 10000,
    "annualInvestment": 1200,
    "expectedReturn": 6,
    "duration": 10
  });

  const inputIsValid = userInput.duration >= 1;

  const handleInputChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  };

  return (
    <>
      <Header/>
      <UserInput onChangeHandler={handleInputChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
      {inputIsValid && <Result userInput={userInput}/>}
    </>
  )
}

export default App
