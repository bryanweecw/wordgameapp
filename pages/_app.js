import '../styles/globals.css';
import data from '../../test1.json';
import React, { useEffect, useState, useRef } from "react";
import Result from './result';

function MyApp() {
  const [secretWord, setSecretWord] = useState([]);
  const [guess, setGuess] = useState([])
  const [turn, setTurn] = useState(0)
  useEffect(() => {
    setSecretWord((data[Math.floor(Math.random() * data.length)]))
  }, []);

  const formOneSubmit = (e) => {
    e.preventDefault();
    let elements = document.getElementsByName("userguess");
    let workingArr = []
    for(let i = 0; i < elements.length; i++){
      workingArr.push(elements[i].value)
    }
    console.log(workingArr)
    setGuess(workingArr)
    console.log(guess)
    document.form1.reset();
    setTurn(turn+1)
  }


  return(
    <>
    {secretWord}
    <form onSubmit = {formOneSubmit} name="form1">
      <input name="userguess" type="text" maxLength="1" className='block' required/>
      <input name="userguess" type="text" maxLength="1" className='block' required/>
      <input name="userguess" type="text" maxLength="1" className='block' required/>
      <input name="userguess" type="text" maxLength="1" className='block' required/>
      <input name="userguess" type="text" maxLength="1" className='block' required/>
      <button type="submit">guess</button>
    </form>
    <button onClick={(e) => {
      setSecretWord(data[Math.floor(Math.random() * data.length)]);
      document.form1.reset();
      setTurn(0);
      setGuess([]);
      }}>new word</button>
    <div><Result answer={secretWord} guess={guess}/>{turn}{guess.length}</div>
    </>
  )
}

export default MyApp
