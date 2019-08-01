import React from 'react';
import { Row } from 'react-bootstrap';
import CharacterDisplay from './CharacterDisplay';
import { randomTeamGenerator } from '../game/generators/Generator';

class TeamDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.team = randomTeamGenerator();
    }

    render() {
        return (
            <Row data-testid="team-display">
                <CharacterDisplay character={this.team.team[0]}/>
                <CharacterDisplay character={this.team.team[1]}/>
                <CharacterDisplay character={this.team.team[2]}/>
                <CharacterDisplay character={this.team.team[3]}/>
            </Row>
        );
    }
}

export default TeamDisplay;
