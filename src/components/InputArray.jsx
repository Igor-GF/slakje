import React, { useState } from 'react';
import Warning from "./Warning";

const InputArray = ({ correctAnswer1, correctAnswer2, correctAnswer3, nextPage }) => {

  const [userAnswer1, setUserAnswer1] = useState("");
  const [userAnswer2, setUserAnswer2] = useState("");
  const [userAnswer3, setUserAnswer3] = useState("");
  const [warningMsg, setWarningMsg] = useState(false);

  const checkAnswer = () => {
    if (
        correctAnswer1 === userAnswer1 &&
        correctAnswer2 === userAnswer2 &&
        correctAnswer3 === userAnswer3)
    {
      return true;
    } else {
      return false;
    };
  }

  const input1Handler = (event) => {
    setUserAnswer1(event.target.value);
  }

  const input2Handler = (event) => {
    setUserAnswer2(event.target.value);
  }

  const input3Handler = (event) => {
    setUserAnswer3(event.target.value);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (checkAnswer()) {
      setWarningMsg(false);
      return nextPage();
    } else {
      document.getElementById("inputNumb1").value = "";
      document.getElementById("inputNumb2").value = "";
      document.getElementById("inputNumb3").value = "";
      setWarningMsg(true);
      return;
    }
  }
  
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className="input-container">
          <input
            className="input-number input-number__answer-one" 
            type="text" id="inputNumb1" 
            placeholder="0"
            onChange={input1Handler}
          />

          <input
            className="input-number input-number__answer-two" 
            type="text" id="inputNumb2" 
            placeholder="0"
            onChange={input2Handler}
          />

          <input
            className="input-number input-number__answer-three" 
            type="text" id="inputNumb3" 
            placeholder="0"
            onChange={input3Handler}
          />
        </div>

        {
          warningMsg && <Warning />
        } 

        <button className="btn btn--ok" type="submit">OK</button>
      </form>
    </>
  )
}

export default InputArray;
