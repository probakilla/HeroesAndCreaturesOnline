import React from 'react';
import ReactDOM from 'react-dom';
import TeamDisplay from '../display/TeamDisplay';
import { render } from '@testing-library/react';
import { randomTeamGenerator } from '../game/generators/Generator'

describe('TeamDisplay tests', () => {
    it('Render withoud crashing', () => {
        const div = document.createElement('div');
        const team = randomTeamGenerator();
        ReactDOM.render(<TeamDisplay team={team} />, div);
    });

    it('Render team test', () => {
        const team = randomTeamGenerator();
        const { getAllByTestId } = render(<TeamDisplay team={team}/>);
        const characters = getAllByTestId('character-display');
        expect(characters.length).toEqual(4);
    });
});
