import React from 'react';
import ReactDOM from 'react-dom';
import Board from './display/Board';

class GameScript {
    startGame = () => {
        this.renderElements();
        this.board.increaseAllInitiative();
        this.board.computerAttack(0, 100);
    };

    renderElements = () => {
        ReactDOM.render(
            <Board
                ref={element => {
                    window.gameBoard = element;
                }}
            />,
            document.getElementById('board-div')
        );
        this.board = window.gameBoard;
    };
}

export default GameScript;
