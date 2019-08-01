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
        this.refreshTeams();
    };

    computerAttack = (target, power) => {
        alert(this.userTeam.team[target].getHealth());
        this.userTeam.team[target].block(power);
        this.refreshTeams();
    };

    refreshTeams = () => {
        this.cpuTeamRender.refreshAllCharacters();
        this.userTeamRender.refreshAllCharacters();
    };

    atLeastOneCanPlay = () => {
        const cpu = this.cpuTeam.getNextToAttack().getInitiative();
        const player = this.userTeam.getNextToAttack().getInitiative();
        return cpu >= LimitInitiative || player >= LimitInitiative;
    };

    getNextToATtack = () => {
        const cpu = this.cpuTeam.getNextToAttack().getInitiative();
        const player = this.userTeam.getNextToAttack().getInitiative();
        if (player > cpu) {
            return this.userTeam.getNextToAttack();
        }
        return this.cpuTeam.getNextToAttack();
    };

    isPlayerTurn = () => {
        const cpu = this.cpuTeam.getNextToAttack().getInitiative();
        const player = this.userTeam.getNextToAttack().getInitiative();
        return cpu < player;
    };

    render() {
        return (
            <div id='board' onClick={this.checkVictory}>
                <Container className='board-style'>
                    <TeamDisplay ref={child => (this.cpuTeamRender = child)} team={this.cpuTeam} />
                    <br />
                    <TeamDisplay ref={child => (this.userTeamRender = child)} team={this.userTeam} />
                </Container>
                <Prompt />
            </div>
        );
    }
}

export default Board;
