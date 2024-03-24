import React from 'react';
import Game from './Game';
import Card from './Card';
import './App.css';


const App: React.FC = () => {

    return (
        <div className="App">
            <h1>Matching Game</h1>
            <Game />
        </div>
    );
};

export default App;
