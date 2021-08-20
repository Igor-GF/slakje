import React, { useState } from 'react';

const InputNumber = ({ correctAnswer, nextPage }) => {

  const [userAnswer, setUserAnswer] = useState("");

  const checkAnswer = () => {
    return correctAnswer === userAnswer;
  }

  const userAnswerHandler = (event) => {
    setUserAnswer(event.target.value);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (checkAnswer()) {
      return nextPage();
    } else {
      return setUserAnswer("0");
    }
  }
  
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <input 
          className="input-number" 
          type="text" name="input-number" 
          placeholder="0"
          onChange={userAnswerHandler}
        />
        <button className="btn btn--ok" type="submit">OK</button>
      </form>
    </>
  )
}

export default InputNumber;
