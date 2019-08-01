import React from 'react';
import ReactDOM from 'react-dom';
import Board from '../display/Board';
import { render } from '@testing-library/react'

describe('Board tests', () => {
    it('Render withoud crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Board />, div);
    });

    it('Render two teams test', () => {
        const { getAllByTestId } = render(<Board />);
        const teams = getAllByTestId('team-display');
        expect(teams.length).toEqual(2);
    })
});
