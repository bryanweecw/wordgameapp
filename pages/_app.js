import '../styles/globals.css';
import {data} from '../data'
import React, { useEffect, useState, useRef } from "react";
import Result from './result';
import Input from './input'


function MyApp() {
  const [secretWord, setSecretWord] = useState("");
  const [guess, setGuess] = useState("")
  const [turn, setTurn] = useState(0)
  const [prevGuess,setPrevGuess] = useState([])
  const formOneSubmit = (e) => {
    e.preventDefault();
    document.form1.reset();
  }

  const guessArr = []

  const setGuessArr = (x, id) => {
    guessArr[id] = x;
  }

  const chooseRandomWord = () => {
    const index = Math.floor(Math.random() * data.length)
    return data[index]
  }

  const updateGuess = (idx,val) => {
    setGuess(guess => {
      return guess.map((item,ind)=>{
        if(ind !== idx) {return item}
        return val
      })
    })
  }

  const submitGuess = (e) => {
    e.preventDefault();
    const guesses = prevGuess.concat([guess])
    setPrevGuess(guesses)
    setGuess(guess => guess.map((item,ind)=>""))
  }

  console.log(prevGuess)


  useEffect(() => {
    const newWord = chooseRandomWord()
    setSecretWord(newWord.split(""));
    setGuess([...Array(newWord.length).fill("")])
    
  }, []);

  return(
    <>
    {secretWord}
    <form onSubmit = {submitGuess} name="form1">
    {[...Array(secretWord.length)].map((_,index)=>index+1).map((item,index)=>{
      return (<input type="text" onChange={(e)=>updateGuess(index,e.target.value)} />)
    })}
    <button type = "submit" onClick = {submitGuess} >
    Submit
    </button>
    <div>
    {prevGuess.map((gs)=>{
      return <div>Previous Guess was {gs} || {gs.map((item,index) => {
        return item === secretWord[index] ? "T" : "F"
      } ).join(" ")}</div>
    })}
    </div>
    
    
    {/* <Input id={0} setGuessArray={setGuessArr}/>
    <Input id={1} setGuessArray={setGuessArr}/>
    <Input id={2} setGuessArray={setGuessArr}/>
    <Input id={3} setGuessArray={setGuessArr}/>
    <Input id={4} setGuessArray={setGuessArr}/> */}

    {/* <button type="submit" onClick= {(e) => {
      setGuess(guessArr)
      console.log(turn)
      console.log(secretWord)
      setTurn(turn+1)
    }}>guess</button> */}
    </form>
    <button onClick={(e) => {
      setSecretWord(data[Math.floor(Math.random() * data.length)]);
      document.form1.reset();
      setGuess("");
      guessArr.splice(0, guessArr.length);
      setTurn(0)
      }}>new word</button>
    <div><Result answer={secretWord} guess={guess}/></div>
    <div>{guessArr.map((itemguess) => <li>{itemguess}</li>)}</div>
    </>
  )
}



export default MyApp
