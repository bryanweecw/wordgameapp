import React, { useRef } from 'react'

const Input = ({setGuessArray, id}) => {
    const textRef = useRef(id)
    console.log(textRef)
    
    return (
        <input onChange={(e) => { 
            setGuessArray(e.target.value, id)
            console.log(e.target.value, id)}} 
            type="text" maxLength="1" size="2" className='block' ref={textRef} required/>
    )
}

export default Input

/*return (
    <input onChange={(e) => {
        setGuess(e.target.value);
    }} 
    type="text" maxlength="1" size="2" className='block' key={id} required/>
)



}*/