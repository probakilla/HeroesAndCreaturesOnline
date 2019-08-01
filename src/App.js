import React from 'react';
import Board from './display/Board';
import './css/App.css';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <p>Welcome to the Heroes And Creatures Online advanture !</p>
                </header>
                <Board />
            </div>
        );
    }
}

export default App;
