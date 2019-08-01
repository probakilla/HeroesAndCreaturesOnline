import React from 'react';
import ReactDOM from 'react-dom';
import Board from './display/Board';

class GameScript {
    startGame = async () => {
        this.renderElements();
        await this.board.increaseAllInitiative();
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
