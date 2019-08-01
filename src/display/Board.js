import React from 'react';
import { Container } from 'react-bootstrap';
import TeamDisplay from './TeamDisplay';
import VictoryDisplay from './VictoryDisplay';
import Prompt from './Prompt';
import { randomTeamGenerator } from '../game/generators/Generator';
import '../css/Board.css';

const LimitInitiative = 1000;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.cpuTeam = randomTeamGenerator();
        this.userTeam = randomTeamGenerator();
        this.state = {
            cpuRender: <TeamDisplay id='cpu-team' team={this.cpuTeam} />,
            userRender: <TeamDisplay id='user-team' team={this.userTeam} />
        };
        const content = <div />;
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

    increaseAllInitiative = async () => {
        while (!this.atLeastOneCanPlay()) {
            this.cpuTeam.increaseAllInitiative();
            this.userTeam.increaseAllInitiative();
        }
        this.setState({
            cpuRender: <TeamDisplay id='cpu-team' team={this.cpuTeam} />,
            userRender: <TeamDisplay id='user-team' team={this.userTeam} />
        });
    };

    atLeastOneCanPlay = () => {
        const cpu = this.cpuTeam.getNextToAttack().getInitiative();
        const player = this.userTeam.getNextToAttack().getInitiative();
        return cpu >= LimitInitiative || player >= LimitInitiative;
    };

    testGet = () => {
        return this.cpuTeam.getNextToAttack().getInitiative();
    };

    render() {
        return (
            <div id='board' onClick={this.checkVictory}>
                <Container className='board-style'>
                    {this.state.cpuRender}
                    <br />
                    {this.state.userRender}
                </Container>
                <Prompt />
            </div>
        );
    }
}

export default Board;
