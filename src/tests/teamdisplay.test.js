import React from 'react';
import ReactDOM from 'react-dom';
import TeamDisplay from '../display/TeamDisplay';

describe('TeamDisplay tests', () => {
    it('Render withoud crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TeamDisplay />, div);
    });
});
