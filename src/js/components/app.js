/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';

import {startGame, finishDraw} from '../redux/actions';
import {GAME_TYPE, NO_WINNER} from '../constants';

const mapStateToProps = (state) => {
    const {game} = state;
    return {
        game,
        allPlayersHaveDrawn: Object.keys(game.draws).length === 2
    }
}
import Intro from './intro';
import Game from './game';
import Result from './result';


export const App = ({game, startGame, finishDraw, allPlayersHaveDrawn}) => {
    if (allPlayersHaveDrawn && !game.finished && game.winner !== NO_WINNER) {
       setTimeout(() => finishDraw(game.draws), 1000);
    }
    return (
      <div className="app">
        {!game.started && <Intro
            playAgainstComputer={() => startGame({gameType: GAME_TYPE.PLAY_AGAINST_COMPUTER})}
            computerVsComputer={() => startGame({gameType: GAME_TYPE.COMPUTER_VS_COMPUTER})}/>}
        {game.started && !game.finished && <Game
            gameType={game.type}/>}
        {game.finished && <Result winner={game.winner} />}
      </div>
    );
}
export default connect(
    mapStateToProps,
    {startGame, finishDraw}
)(App);
/* eslint-enable */


