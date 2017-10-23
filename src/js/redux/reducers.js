import {NO_WINNER} from '../constants';
import {START_GAME, DRAW, FINISH_DRAW} from './actions';

export const initialState = {
    game: {
        draws: {},
        started: false
    }
};

export const reducers = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case START_GAME: {
            return {
                ...state,
                game: {
                    ...state.game,
                    started: true,
                    type: payload.gameType
                }
            };
        }
        case DRAW: {
            const {playerId, draw} = payload;
            const draws = {
                ...state.game.draws,
                [playerId]: draw
            };
            return {
                ...state,
                game: {
                    ...state.game,
                    draws
                }
            }
        }
        case FINISH_DRAW: {
            const {winner} = payload;
            return {
                ...state,
                game: {
                    ...state.game,
                    finished: winner !== NO_WINNER,
                    winner,
                    draws: winner === NO_WINNER ? {} : state.game.draws
                }
            }
        }
        default:
            return state
    }
}

