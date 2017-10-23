/* eslint-disable */
import React from 'react'; // eslint-disable-line
import { connect } from 'react-redux';

import {draw} from '../redux/actions';
import {DRAW_TYPE, PLAYER_TYPE} from '../constants';
import {getRandomDraw} from '../helpers';

const mapStateToProps = (state) => {
  return {
      draws: state.game.draws
  }
};

export const Player = ({playerId, draw, draws, type}) => {
    if (type === PLAYER_TYPE.COMPUTER && draws[playerId] === undefined) {
        setTimeout(() => draw({playerId, draw: getRandomDraw()}), 1000);
    }
    return (
        <div className="player">
            <h1>{playerId}</h1>
            {draws[playerId] === undefined && type === PLAYER_TYPE.HUMAN && <div className="player_human">
                <button onClick={() => draw({playerId, draw: DRAW_TYPE.ROCK})}>Rock</button>
                <button onClick={() => draw({playerId, draw: DRAW_TYPE.PAPER})}>Paper</button>
                <button onClick={() => draw({playerId, draw: DRAW_TYPE.SCISSORS})}>Scissors</button>
                </div>}
            {draws[playerId] !== undefined && Object.keys(draws).length === 2 && <div className="player__draw">{draws[playerId]}</div>}
            {draws[playerId] !== undefined && Object.keys(draws).length !== 2 && <div className="player__draw-waiting">Not showing until other player draws</div>}
        </div>
    );
}

export default connect(
    mapStateToProps,
    {draw}
)(Player);
/* eslint-enable */
