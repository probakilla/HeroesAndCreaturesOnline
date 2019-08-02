import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import '../css/VictoryDisplay.css'

class VictoryDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: props.winner
        };
    }

    reloadGame = () => {
        window.location.reload();
    }

    render() {
        return (
            <Jumbotron className="victory-style">
                <p className="victory-header">Game over</p>
                <br />
                <p className="winner-text">{this.state.winner} won</p>
                <hr/>
                <Button variant="secondary" onClick={this.reloadGame}>Replay ?</Button>
            </Jumbotron>
        );
    }
}

export default VictoryDisplay;
