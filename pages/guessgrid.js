import data from './test1.json';

const GuessGrid = ({activeGuess, correctans, guessGridState, setGuessGridState, setCorrectAns}) => {
    if(guessGridState=true){
        setGuessGridState(false);
        if(!data.includes([...activeGuess].join(""))){return <plaintext className="wrong">{[...activeGuess].join("")} is not on Word List</plaintext>;}
        else{
        let n=0
        let tfarr = Array(activeGuess.length)
        const solutionCharsTaken = [...correctans].map((_) => false);
        activeGuess.map((ele, i) => {
            if(ele === correctans[i]){
                    solutionCharsTaken[i] = "true"
                    console.log(solutionCharsTaken)
                    tfarr[i] = true
                    console.log(tfarr)
            }
        });

        
        return(activeGuess.map((ele, i) => {
            switch(tfarr[i]){
                case true:
                    console.log("reached")
                    return <plaintext className="correct">{activeGuess[i]}</plaintext>;
            }
            if(!correctans.includes(ele)){
                        tfarr[i] = false
                        return <plaintext className="wrong">{activeGuess[i]}</plaintext>;
                        }

        const indexOfPresentChar = ([...correctans].findIndex(
            (x, index) => x === ele && !solutionCharsTaken[index]
          ))
            
            if(indexOfPresentChar >-1) {
                tfarr[i] = 'HalfWrong'
                solutionCharsTaken[indexOfPresentChar] = true
                return <plaintext className="halfwrong">{activeGuess[i]}</plaintext>;
            } else {
                tfarr[i] = false
                return <plaintext className="wrong">{activeGuess[i]}</plaintext>;
            }
         })
        );
        }
    }
    return 
}

export default GuessGrid