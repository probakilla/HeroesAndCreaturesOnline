import React from 'react';
import './css/App.css';

class App extends React.Component {
    render() {
        return (
            <div id="app" className='App'>
                <header className='App-header'>
                    <p id="title-text">Heroes And Creatures Online</p>
                </header>
                <div id="board-div"></div>
            </div>
        );
    }
}

export default App;
