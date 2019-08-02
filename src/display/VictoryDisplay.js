import React from 'react';
import '../css/VictoryDisplay.css'

class VictoryDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: props.winner
        };
    }

    render() {
        return (
            <div className="victory-style">
                <p className="victory-header">Game over</p>
                <br />
                <p className="winner-text">{this.state.winner} won</p>
            </div>
        );
    }
}

export default VictoryDisplay;
