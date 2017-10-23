/* eslint-disable */
import React from 'react';


const Intro  = ({playAgainstComputer, computerVsComputer}) => (
    <div className="intro">
        <div className="intro__options">
            <button onClick={() => playAgainstComputer()}>Play against computer</button>
            <button onClick={() => computerVsComputer()}>Computer vs computer</button>
        </div>
    </div>
)

export default Intro;
/* eslint-disable */
