import React from 'react';
import { Container } from 'react-bootstrap';
import TeamDisplay from './TeamDisplay';
import VictoryDisplay from './VictoryDisplay';
import Prompt from './Prompt';
import { randomTeamGenerator } from '../game/generators/Generator';
import '../css/Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.cpuTeam = randomTeamGenerator();
        this.userTeam = randomTeamGenerator();
        const content = (
            <div>
                <Container className='board-style'>
                    <TeamDisplay team={this.cpuTeam} />
                    <br />
                    <TeamDisplay team={this.userTeam} />
                </Container>
                <Prompt />
            </div>
        );
        this.state = {
            boardContent: content
        };
    }

    checkVictory = () => {
        let cpuCount = this.cpuTeam.getNbAlive();
        let userCount = this.userTeam.getNbAlive();
        if (cpuCount === 0 || userCount === 0) {
            this.displayVictory();
        }
    };

    displayVictory = () => {
        this.setState({
            boardContent: <VictoryDisplay winner='user' />
        });
    };

    render() {
        return (
            <div id='board' onClick={this.checkVictory}>
                {this.state.boardContent}
            </div>
        );
    }
}

export default Board;
