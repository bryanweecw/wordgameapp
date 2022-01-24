import '../styles/globals.css';
import data from './test1.json';
import React, { useEffect, useState, useRef } from "react";
import GuessGrid from './guessgrid';
import GameInputs from './gameinput';
import Form from './form'

function MyApp() {
  const [secretWord, setSecretWord] = useState("");

  const chooseRandomWord = () => {
    const index = Math.floor(Math.random() * data.length) //call random number
    return data[index] //call word from data json from random number
  }

  useEffect(() => {
    const newWord = chooseRandomWord() //choose random word
    setSecretWord(newWord.split("")); //turn string into array
  }, []);

  return(
    <>
    <Form secretWord={secretWord} setSecretWord={setSecretWord} />
    </>
  )
}

export default MyApp
