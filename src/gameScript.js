import React from 'react';
import ReactDOM from 'react-dom';
import Board from './display/Board';

class GameScript {
    startGame = () => {
        this.renderElements();
        while (!this.board.isGameOver()) {
            this.board.increaseAllInitiative();
            if (this.board.isPlayerTurn()) {
                this.userTurn();
                break;
            } else {
                this.computerTurn();
                break;
            }
        }
    };

    userTurn = () => {
        this.board.changePrompt('User turn: Please click on an enemy character');
    };

    computerTurn = () => {
        this.board.changePrompt('Computer turn');
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
