import React from 'react';
import ReactDOM from 'react-dom';
import CharacterDisplay from '../display/CharacterDisplay';
import Character from '../game/character/Character';
import { render, fireEvent, cleanup } from '@testing-library/react';

describe('CharacterDisplay tests', () => {
    afterEach(cleanup);

    it('Render without crashing', () => {
        const div = document.createElement('div');
        const character = new Character(10, 10);
        ReactDOM.render(<CharacterDisplay character={character} />, div);
    });

    it('Render test', () => {
        const character = new Character(10, 10);
        const { getByText } = render(<CharacterDisplay character={character} />);
        expect(getByText('Health: 10 Weapon: 1 Init: 0')).toBeInTheDocument();
    });

    it('Click function test', () => {
        const character = new Character(20, 20);
        const { getByText } = render(<CharacterDisplay character={character} />);
        fireEvent.click(getByText('Health: 20 Weapon: 1 Init: 0'));
        expect(getByText('Health: 10 Weapon: 1 Init: 0')).toBeInTheDocument();
    });

    it('Click function untill dead test', () => {
        const character = new Character(10, 10);
        const { getByText } = render(<CharacterDisplay character={character} />);
        fireEvent.click(getByText('Health: 10 Weapon: 1 Init: 0'));
        expect(getByText('Health: 0 Weapon: 1 Init: 0')).toBeInTheDocument();
    });

    it('Images display test', () => {
        const character = new Character(10, 10);
        const { getByAltText } = render(<CharacterDisplay character={character} />);
        const aliveImage = getByAltText("alive-character")
        expect(aliveImage).toBeInTheDocument();
    });

    it('Dead image test', () => {
        const character = new Character(10, 10);
        const { getByTestId, getByAltText } = render(<CharacterDisplay character={character} />)
        fireEvent.click(getByTestId("char-stats"));
        const deadImage = getByAltText("dead-character");
        expect(deadImage).toBeInTheDocument();
    })
});