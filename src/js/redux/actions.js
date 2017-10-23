/* eslint-disable */
import {checkWinner} from '../helpers';

export const START_GAME = 'startGame';
export const DRAW = 'draw';
export const FINISH_DRAW = 'finishDraw';

export const startGame = ({gameType}) => ({
    type: START_GAME,
    payload: {gameType}
});

export const draw = ({playerId, draw}) => dispatch => {
    return dispatch({
        type: DRAW,
        payload: {playerId, draw}
    });
};

export const finishDraw = (draws) => {
    return dispatch => {
        const {playerOne} = Object.keys(draws)[0];
        const {playerTwo} = Object.keys(draws)[1];
        const winner = checkWinner(draws);
        dispatch({
            type: FINISH_DRAW,
            payload: {winner}
        });
    }
};
/* eslint-enable */
