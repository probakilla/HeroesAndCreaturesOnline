import React from 'react';
import { Row } from 'react-bootstrap';
import CharacterDisplay from './CharacterDisplay';

const TeamMaxLength = 4

class TeamDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.team = props.team;
        this.characters = [];
        this.isPlayer = props.isPlayer;
    }

    refreshAllCharacters = () => {
        this.characters.forEach(character => {
            character.refreshStats();
        });
    };

    characterId = place => {
        let baseStr = 'char-';
        baseStr += place + this.isPlayer * TeamMaxLength;
        return baseStr;
    };

    render() {
        return (
            <Row data-testid='team-display'>
                <CharacterDisplay
                    id={this.characterId(0)}
                    ref={child => this.characters.push(child)}
                    character={this.team.team[0]}
                />
                <CharacterDisplay
                    id={this.characterId(1)}
                    ref={child => this.characters.push(child)}
                    character={this.team.team[1]}
                />
                <CharacterDisplay
                    id={this.characterId(2)}
                    ref={child => this.characters.push(child)}
                    character={this.team.team[2]}
                />
                <CharacterDisplay
                    id={this.characterId(3)}
                    ref={child => this.characters.push(child)}
                    character={this.team.team[3]}
                />
            </Row>
        );
    }
}

export default TeamDisplay;
