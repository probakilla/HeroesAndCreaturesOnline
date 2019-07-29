import React from 'react';
import './App.css';
import Character from './game/character/Character'

class App extends React.Component {
  render() {
    let character = new Character(10, 10);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the Heroes And Creatures Online advanture !
          </p>
        </header>
        <p className="App-text">{character.toString()}</p>
        <footer className="App-footer">
        © 2019 Pella Studios™ production
        </footer>
      </div>
    );
  }
}

export default App;
