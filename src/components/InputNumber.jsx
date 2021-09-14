import React, { useState } from 'react';
import Warning from "./Warning";

const InputNumber = ({ correctAnswer, nextPage }) => {

  const [userAnswer, setUserAnswer] = useState("");
  const [warningMsg, setWarningMsg] = useState(false);

  const checkAnswer = () => {
    return correctAnswer === userAnswer;
  }

  const userAnswerHandler = (event) => {
    setUserAnswer(event.target.value);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (checkAnswer()) {
      setWarningMsg(false);
      return nextPage();
    } else {
      setWarningMsg(true);
      return document.getElementById("input-number").value = "";
    }
  }
  
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <input 
          className="input-number"
          type="text" id="input-number" 
          placeholder="0"
          onChange={userAnswerHandler}
        />

        {
          warningMsg && <Warning />
        }        
        
        <button className="btn btn--ok" type="submit">OK</button>
      </form>
    </>
  )
}

export default InputNumber;
