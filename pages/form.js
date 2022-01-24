import React, { useState } from 'react';
import GameInputs from './gameinput';
import data from './test1.json';
import GuessGrid from './guessgrid';


const Form = (props) => {
    const { secretWord, setSecretWord } = props;
    const [attemptState, setAttemptState] = useState([]);
    const [guessGridState, setGuessGridState] = useState(false)

    const handleAttemptChange = (e) => {
        setAttemptState(attemptState.concat([guessState]));
        e.preventDefault();
        console.log(attemptState)
        setGuessState([...Array(5).fill("")])
    }

    const [guessState, setGuessState] = useState([...Array(5).fill("")]);


    const handleGuessChange = (e) => {
        const updatedGuesses = [...guessState];
        updatedGuesses[e.target.dataset.idx] = e.target.value;
        setGuessState(updatedGuesses);
        setGuessGridState(true);
    };

    const resetForm = () => {
        attemptState.splice(0, attemptState.length)
    }

    return (
        <>
        <form name="form1" onSubmit={handleAttemptChange}>
            {guessState.map((val, idx) => (
                    <GameInputs
                        key={`cat-${idx}`}
                        idx={idx}
                        guessState={guessState}
                        handleGuessChange={handleGuessChange}
                    />
                ))
            }
            <button type="submit">Submit</button>
            <button type="button" onClick={(e) => {
                document.form1.reset();
                setAttemptState([]);
                console.log(attemptState.length)
                }}>Reset</button>
        </form>
            {attemptState.map((gs,i)=>{
                return <div key={gs}><GuessGrid setGuessGridState={setGuessGridState} guessGridState={guessGridState} correctans={secretWord} setCorrectAns={setSecretWord} activeGuess={gs}/></div>
          })} 
              <button onClick={(e) => {
      setSecretWord(data[Math.floor(Math.random() * data.length)]);
      setAttemptState([]);
      }}>new word</button>


            </>
    );
};

export default Form;