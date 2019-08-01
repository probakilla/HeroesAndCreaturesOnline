import React from 'react';
import ReactDOM from 'react-dom';
import CharacterDisplay from '../display/CharacterDisplay';
import Character from '../game/character/Character';

describe('CharacterDisplay tests', () => {
    it('Render without crashing', () => {
        const div = document.createElement('div');
        const character = new Character(10, 10);
        ReactDOM.render(<CharacterDisplay character={character} />, div);
    });
});
