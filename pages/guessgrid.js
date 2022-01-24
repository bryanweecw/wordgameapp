const GuessGrid = ({indicator, activeGuess, correctans}) => {
    let n=0
    return(indicator.map((ele) => {
        let x = activeGuess[n]
        let y = correctans
        n++
        switch(ele){
            case "T":
                return <plaintext class="correct">{x}</plaintext>
            case "F":
                if (y.includes(x)){
                    return <plaintext class="halfwrong">{x}</plaintext> 
                }
                else{
                    return <plaintext class="wrong">{x}</plaintext>
                }
        }
    }))

}

export default GuessGrid