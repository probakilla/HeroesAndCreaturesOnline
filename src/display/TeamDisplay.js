import React from 'react';
import { Row } from 'react-bootstrap';
import CharacterDisplay from './CharacterDisplay';

class TeamDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.team = props.team;
        this.characters = [];
    }

    refreshAllCharacters = () => {
        this.characters.forEach(character => {
            character.refreshStats();
        })
    }

    render() {
        return (
            <Row data-testid="team-display">
                <CharacterDisplay ref={child => (this.characters.push(child)) } character={this.team.team[0]} />
                <CharacterDisplay ref={child => (this.characters.push(child))} character={this.team.team[1]} />
                <CharacterDisplay ref={child => (this.characters.push(child))} character={this.team.team[2]} />
                <CharacterDisplay ref={child => (this.characters.push(child))} character={this.team.team[3]} />
            </Row>
        );
    }
}

export default TeamDisplay;
