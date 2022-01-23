import '../styles/globals.css';
import data from '../../test1.json';
import React, { useEffect, useState, useRef } from "react";
import Result from './result';
import Input from './input'


function MyApp() {
  const [secretWord, setSecretWord] = useState([]);
  const [guess, setGuess] = useState([])
//  const [turn, setTurn] = useState(0)
  const formOneSubmit = (e) => {
    e.preventDefault();
    document.form1.reset();
  }

  const guessArr = []

  const setGuessArr = (x, id) => {
    guessArr[id] = x;
  }

  useEffect(() => {
    setSecretWord((data[Math.floor(Math.random() * data.length)]))
  }, []);


  return(
    <>
    {secretWord}
    <form onSubmit = {formOneSubmit} name="form1">
    <Input id={0} setGuessArray={setGuessArr}/>
    <Input id={1} setGuessArray={setGuessArr}/>
    <Input id={2} setGuessArray={setGuessArr}/>
    <Input id={3} setGuessArray={setGuessArr}/>
    <Input id={4} setGuessArray={setGuessArr}/>
    <button type="submit" onClick= {(e) => {
      setGuess(guessArr.join())
      //console.log(turn)
      console.log(secretWord)
      //setTurn(turn+1)
    }}>guess</button>
    </form>
    <button onClick={(e) => {
      setSecretWord(data[Math.floor(Math.random() * data.length)]);
      document.form1.reset();
      setGuess("");
      guessArr.splice(0, guessArr.length);
      //setTurn(0)
      }}>new word</button>
    <div><Result answer={secretWord} guess={guess}/></div>
    </>
  )
}

export default MyApp
