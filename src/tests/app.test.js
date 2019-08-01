import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from '../App';

describe('App tests', () => {
    it('Render withoud crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('Render welcome message', () => {
        const { getByText } = render(<App />);
        expect(getByText('Welcome to the Heroes And Creatures Online advanture !')).toBeInTheDocument();
    })
});
