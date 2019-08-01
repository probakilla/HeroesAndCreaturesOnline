import React from 'react';
import './css/App.css';
import Board from './display/Board';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <p>Welcome to the Heroes And Creatures Online advanture ! </p>
                </header>
                <Board  />
            </div>
        );
    }
}

export default App;
