import React from 'react';
import ReactDOM from 'react-dom';
import Board from '../display/Board';

describe('Board tests', () => {
    it('Render withoud crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Board />, div);
    });
});
