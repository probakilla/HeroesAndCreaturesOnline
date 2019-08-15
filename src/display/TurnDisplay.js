import React from 'react';
import '../css/TurnDisplay.css';

const PlayerTurnText = 'Player turn, please click on an enemy.';
const ConmputerTurnText = 'Computer turn, please wait.';

class TurnDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'Player turn'
        };
    }

    playerTurn = () => {
        this.playerTurnColor();
        this.setState({
            display: PlayerTurnText
        });
    };

    computerTurn = () => {
        this.computerTurnColor();
        this.setState({
            display: ConmputerTurnText
        });
    };

    getParagraph = () => {
        return document.getElementById('turn-display');
    }

    playerTurnColor = () => {
        let paragraph = this.getParagraph();
        if (paragraph) {
            paragraph.style.color = 'green';
        }
    }

    computerTurnColor = () => {
        let paragraph = this.getParagraph();
        if (paragraph) {
            paragraph.style.color = 'red';
        }
    }

    render() {
        return (
            <div>
                <p id="turn-display" className="turn-display">
                    {this.state.display}
                </p>
            </div>
        );
    }
}

export default TurnDisplay;
