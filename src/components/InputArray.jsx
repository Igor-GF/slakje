import React, { useState } from 'react';

const InputArray = ({ correctAnswer1, correctAnswer2, correctAnswer3, nextPage }) => {

  const [userAnswer1, setUserAnswer1] = useState("");
  const [userAnswer2, setUserAnswer2] = useState("");
  const [userAnswer3, setUserAnswer3] = useState("");

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
      return nextPage();
    } else {
      document.getElementById("inputNumb1").value = "";
      document.getElementById("inputNumb2").value = "";
      document.getElementById("inputNumb3").value = "";
      return;
    }
  }
  
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <input 
          className="input-number" 
          type="text" id="inputNumb1" 
          placeholder="0"
          onChange={input1Handler}
        />

        <input 
          className="input-number" 
          type="text" id="inputNumb2" 
          placeholder="0"
          onChange={input2Handler}
        />

        <input 
          className="input-number" 
          type="text" id="inputNumb3" 
          placeholder="0"
          onChange={input3Handler}
        />

        <button className="btn btn--ok" type="submit">OK</button>
      </form>
    </>
  )
}

export default InputArray;
