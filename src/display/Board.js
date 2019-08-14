import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import TeamDisplay from './TeamDisplay';
import VictoryDisplay from './VictoryDisplay';
import Prompt from './Prompt';
import { randomTeamGenerator, getRandomInteger } from '../game/generators/Generator';
import sleep from './Sleep';
import '../css/Board.css';

const LimitInitiative = 1000;
const WaitingTime = 3000;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.cpuTeam = randomTeamGenerator();
        this.userTeam = randomTeamGenerator();
        this.currentCharacter = null;
    }

    checkVictory = () => {
        let cpuCount = this.cpuTeam.getNbAlive();
        let userCount = this.userTeam.getNbAlive();
        if (cpuCount === 0 || userCount === 0) {
            const div = document.getElementById('board');
            div.innerHTML = '';
            if (this.playerWon()) {
                ReactDOM.render(<VictoryDisplay winner='user' />, div);
            } else {
                ReactDOM.render(<VictoryDisplay winner='cpu' />, div);
            }
        }
    };

    isGameOver = () => {
        let cpuCount = this.cpuTeam.getNbAlive();
        let userCount = this.userTeam.getNbAlive();
        return cpuCount === 0 || userCount === 0;
    };

    playerWon = () => {
        let cpuCount = this.cpuTeam.getNbAlive();
        return cpuCount === 0;
    };

    increaseAllInitiative = () => {
        while (!this.atLeastOneCanPlay()) {
            this.cpuTeam.increaseAllInitiative();
            this.userTeam.increaseAllInitiative();
        }
        this.currentCharacter = this.getNextToATtack();
        this.refreshTeams();
    };

    computerAttack = (target, power) => {
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
            this.userTeamRender.readyToAttack();
            return this.userTeam.getNextToAttack();
        }
        this.cpuTeamRender.readyToAttack();
        return this.cpuTeam.getNextToAttack();
    };

    isPlayerTurn = () => {
        const cpu = this.cpuTeam.getNextToAttack().getInitiative();
        const player = this.userTeam.getNextToAttack().getInitiative();
        return cpu < player;
    };

    changePrompt = message => {
        this.prompt.updateText(message);
    };

    allowUserPlay = () => {
        let power = this.currentCharacter.getPower();
        this.currentCharacter.resetInitiative();
        this.changePrompt('User turn: Power -> ' + power);
        this.cpuTeamRender.enableClick(power);
    };

    allowCpuPlay = () => {
        let power = this.currentCharacter.getPower();
        this.currentCharacter.resetInitiative();
        this.changePrompt('Cpu turn: Power -> ' + power);
        this.userTeamRender.enableClick(power);
        this.cpuMakeChoice();
    };

    getAliveTarget = () => {
        let targets = [];
        for (let i = 0; i < this.userTeam.team.length; ++i) {
            if (!this.userTeam.team[i].isDead()) {
                targets.push(i);
            }
        }
        return targets;
    };

    cpuMakeChoice = async () => {
        const targets = this.getAliveTarget();
        const choice = getRandomInteger(0, targets.length);
        const target = targets[choice];
        const element = document.getElementById('char-' + (target + 4));
        this.changePrompt('Cpu attacked: ' + target + ' with a power of ' + this.currentCharacter.getPower());
        await sleep(WaitingTime);
        element.click();
    };

    blockPlayers = () => {
        this.userTeamRender.disableClick();
        this.cpuTeamRender.disableClick();
    };

    render() {
        return (
            <div id='board' onClick={this.checkVictory}>
                <Container className='board-style'>
                    <TeamDisplay ref={child => (this.cpuTeamRender = child)} team={this.cpuTeam} isPlayer={false} />
                    <br />
                    <TeamDisplay ref={child => (this.userTeamRender = child)} team={this.userTeam} isPlayer={true} />
                </Container>
                <Prompt ref={child => (this.prompt = child)} />
            </div>
        );
    }
}

export default Board;
