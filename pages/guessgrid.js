const GuessGrid = ({indicator, activeGuess, correctans}) => {
    let n=0
    return(indicator.map((ele) => {
        let x = activeGuess[n]
        let y = correctans
        n++
        switch(ele){
            case "T":
                return <plaintext className="correct">{x}</plaintext>
            case "F":
                if (y.includes(x)){
                    return <plaintext className="halfwrong">{x}</plaintext> 
                }
                else{
                    return <plaintext className="wrong">{x}</plaintext>
                }
        }
    }))

}

export default GuessGrid