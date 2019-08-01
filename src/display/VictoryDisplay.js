import React from 'react';

class VictoryDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: props.winner
        };
    }

    render() {
        return (
            <div>
                <p>Game over</p>
                <br />
                <p>{this.state.winner} won</p>
            </div>
        );
    }
}

export default VictoryDisplay;
