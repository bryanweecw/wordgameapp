import React, { useEffect, useState } from "react";

//const [ guessList, setGuessList ] = useState([]);
/*const addGuess = (userInput) => {
    let copy = [...guessList];
    copy = [...copy, { userInput }];
    setGuessList(copy);
}*/
const Result = ({answer, guess}) => {

    console.log("ans is" + answer)
    console.log("received" + guess)
    if (answer == guess.join("")){
        return(
            <>
            correct
            </>
        )
    }
    else{
        let n=0
        const arr = []
        guess.map((ele) => {
           if(ele == answer[n]){
               arr.push("T")
           }
           else{
               arr.push("F")
           }
           n++
        } 
    )
    //addGuess(arr.join(""))
    return(
        <>{arr.join("")}</>
    )
}
}

export default Result;