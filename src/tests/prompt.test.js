import React from 'react';
import ReactDOM from 'react-dom';
import Prompt from '../display/Prompt';

describe('Prompt tests', () => {
    it('Render withoud crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Prompt />, div);
    });
});
