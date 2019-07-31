import React from 'react';
import { Row } from 'react-bootstrap';
import CharacterDisplay from './Character';

class Team extends React.Component {
    render() {
        return (
            <Row >
                <CharacterDisplay />
                <CharacterDisplay />
                <CharacterDisplay />
                <CharacterDisplay />
            </Row>
        );
    }
}

export default Team;