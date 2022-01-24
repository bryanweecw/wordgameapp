import React from 'react';
import PropTypes from 'prop-types';

const GameInputs = ({ idx, guessState, handleGuessChange }) => {
    const guessId = `guess-${idx}`;
    const ageId = `age-${idx}`;
    return (
        <>
            <input
                type="text"
                name={guessId}
                data-idx={idx}
                id={guessId}
                className="block"
                value={guessState[idx]}
                onChange={handleGuessChange}
                maxLength="1"
                required
            />
        </>
    );
};

GameInputs.propTypes = {
    idx: PropTypes.number,
    guessState: PropTypes.array,
    handleGuessChange: PropTypes.func,
};

export default GameInputs;
