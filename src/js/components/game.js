/* eslint-disable */
import React from 'react'; // eslint-disable-line
import Player from './player';
import {GAME_TYPE, PLAYER_TYPE} from '../constants';

const Game  = ({gameType}) => {
    return (
        <div className="game">
            {gameType === GAME_TYPE.PLAY_AGAINST_COMPUTER
            ? [
                <Player
                    className="player"
                    playerId="humanPlayer"
                    key="humanPlayer"
                    type={PLAYER_TYPE.HUMAN}
                />,
                <Player
                    className="player"
                    playerId="computerPlayer"
                    key="computerPlayer"
                    type={PLAYER_TYPE.COMPUTER}
                />
            ]
            : [
                <Player
                    className="player"
                    playerId="computerPlayer1"
                    key="computerPlayer1"
                    type={PLAYER_TYPE.COMPUTER}
                />,
                <Player
                    className="player"
                    playerId="computerPlayer2"
                    key="computerPlayer2"
                    type={PLAYER_TYPE.COMPUTER}
                />
            ]}
        </div>
    );
}

export default Game;
/* eslint-enable */


