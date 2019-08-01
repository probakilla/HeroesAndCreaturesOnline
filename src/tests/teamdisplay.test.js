import React from 'react';
import ReactDOM from 'react-dom';
import TeamDisplay from '../display/TeamDisplay';
import { render } from '@testing-library/react';

describe('TeamDisplay tests', () => {
    it('Render withoud crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TeamDisplay />, div);
    });

    it('Render team test', () => {
        const { getAllByTestId } = render(<TeamDisplay />);
        const characters = getAllByTestId('character-display');
        expect(characters.length).toEqual(4);
    });
});
