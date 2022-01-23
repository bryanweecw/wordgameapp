import React, { useEffect, useState } from "react";

const Result = ({answer, guess}) => {
    if (answer == guess){
        return(
            <>
            correct
            </>
        )
    }
    else return(
        <>wrong</>
    )
}

export default Result;