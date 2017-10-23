import {initialState, reducers} from './reducers';
import {START_GAME, DRAW, FINISH_DRAW} from './actions';
import {DRAW_TYPE, GAME_TYPE, NO_WINNER} from '../constants';

describe('game reducers should', () => {
    test('START_GAME', () => {
        const reducedState = reducers(
            initialState,
            {
                type: START_GAME,
                payload: {gameType: GAME_TYPE.PLAY_AGAINST_COMPUTER}
            }
        );
        expect(reducedState.game.started).toEqual(true);
        expect(reducedState.game.type).toEqual(GAME_TYPE.PLAY_AGAINST_COMPUTER);
    });
    test('DRAW', () => {
        const playerId = 'humandPlayer';
        const reducedState = reducers(
            initialState,
            {
                type: DRAW,
                payload: {
                    playerId,
                    draw: DRAW_TYPE.ROCK
                }
            }
        );
        expect(reducedState.game.draws[playerId]).toEqual(DRAW_TYPE.ROCK);
    });
    test('FINISH_DRAW with a winner', () => {
        const winner = 'humanPlayer';
        const stateWithWinner = {
            ...initialState,
            game: {
                ...initialState.game,
                draws: {
                    humanPlayer: DRAW_TYPE.ROCK,
                    computerPlayer: DRAW_TYPE.SCISSORS
                }
            }
        };
        const reducedState = reducers(
            stateWithWinner,
            {
                type: FINISH_DRAW,
                payload: { winner }
            }
        );
        expect(reducedState.game.finished).toEqual(true);
        expect(reducedState.game.winner).toEqual(winner);
        expect(reducedState.game.draws).toEqual(stateWithWinner.game.draws);
    });
    test('FINISH_DRAW without a winner', () => {
        const winner = NO_WINNER;
        const stateWithWinner = {
            ...initialState,
            game: {
                ...initialState.game,
                draws: {
                    humanPlayer: DRAW_TYPE.ROCK,
                    computerPlayer: DRAW_TYPE.ROCK
                }
            }
        };
        const reducedState = reducers(
            stateWithWinner,
            {
                type: FINISH_DRAW,
                payload: { winner }
            }
        );
        expect(reducedState.game.finished).toEqual(false);
        expect(reducedState.game.winner).toEqual(NO_WINNER);
        expect(reducedState.game.draws).toEqual({});
    });
});
