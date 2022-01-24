import '../styles/globals.css';
import data from './test1.json';
import React, { useEffect, useState, useRef } from "react";
import Result from './result';
import GuessGrid from './guessgrid';

function MyApp() {
  const [secretWord, setSecretWord] = useState("");
  const [guess, setGuess] = useState("")
  const [prevGuess,setPrevGuess] = useState([])



  const chooseRandomWord = () => {
    const index = Math.floor(Math.random() * data.length) //call random number
    return data[index] //call word from data json from random number
  }

  useEffect(() => {
    const newWord = chooseRandomWord() //choose random word
    setSecretWord(newWord.split("")); //turn string into array
    setGuess([...Array(newWord.length).fill("")]) //create array as long as secret word
  }, []);

  const updateGuess = (idx,val) => { //takes two params, index and value
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
    document.form1.reset();
  }

  console.log(prevGuess)

  /*const formOneSubmit = (e) => {
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
  }*/


  return(
    <>
    {secretWord}
    <form onSubmit = {submitGuess} name="form1">
    {[...Array(secretWord.length)].map((_,index)=>index+1).map((item,index)=>{
      return (<input type="text" onChange={(e)=>updateGuess(index,e.target.value)} maxLength="1" className='block'/>)
    })} 
      <button type="submit">guess</button>
    </form>




    <button onClick={(e) => {
      setSecretWord(data[Math.floor(Math.random() * data.length)]);
      document.form1.reset();
      prevGuess.splice(0, prevGuess.length)
      }}>new word</button>


    <div>
    {prevGuess.map((gs)=>{
      return <div>Previous Guess was {gs} || {gs.map((item,index) => {
        return item === secretWord[index] ? "T" : "F"
      } ).join(" ")} || <GuessGrid correctans={secretWord} activeGuess={gs} indicator={gs.map((item,index) => {
        return item === secretWord[index] ? "T" : "F"
      } )}/></div>
    })}
    </div>


    </>
  )
}

export default MyApp
//<div><Result answer={secretWord} guess={guess}/>{turn}{guess.length}</div>

