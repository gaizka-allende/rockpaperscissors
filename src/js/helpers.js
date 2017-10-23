import {NO_WINNER, DRAW_TYPE} from './constants';

export const checkWinner = (draws) => {
    const playerOne = Object.keys(draws)[0];
    const playerTwo = Object.keys(draws)[1];
    if (draws[playerOne] === draws[playerTwo])
        return NO_WINNER;
    if (draws[playerOne] === DRAW_TYPE.ROCK && draws[playerTwo] === DRAW_TYPE.SCISSORS)
        return playerOne;
    if (draws[playerOne] === DRAW_TYPE.PAPER && draws[playerTwo] === DRAW_TYPE.ROCK)
        return playerOne;
    if (draws[playerOne] === DRAW_TYPE.SCISSORS && draws[playerTwo] === DRAW_TYPE.PAPER)
        return playerOne;
    return playerTwo;
};

export const getRandomDraw = () => {
    return [DRAW_TYPE.ROCK, DRAW_TYPE.PAPER, DRAW_TYPE.SCISSORS][Math.floor(Math.random() * (3))];
};
