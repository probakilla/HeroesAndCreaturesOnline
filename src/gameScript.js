import React from 'react';
import ReactDOM from 'react-dom';
import Board from './display/Board';

class GameScript {
    startGame = () => {
        window.gameScript = this;
        this.renderElements();
        this.playTurn();
    };

    playTurn = async () => {
        if (! await this.board.isGameOver()) {
            this.board.blockPlayers();
            this.board.increaseAllInitiative();
            if (this.board.isPlayerTurn()) {
                this.userTurn();
            } else {
                this.computerTurn();
            }
        }
    };

    userTurn = () => {
        this.board.allowUserPlay();
    };

    computerTurn = () => {
        this.board.changePrompt('Computer turn');
        this.board.allowCpuPlay();
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
