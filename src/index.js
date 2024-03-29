import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GameScript from './gameScript';
import * as serviceWorker from './serviceWorker';
import './css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
let game = new GameScript();
game.startGame();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
