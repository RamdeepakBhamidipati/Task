import React from 'react';
import Game from './Game';
import Card from './Card';
import './App.css';

const App: React.FC = () => {
    const handleReset = () => {
        window.location.reload(); 
    };

    return (
        <div className="App">
            <div className="header">
                <h1 className="game-title">Matching Game</h1>
                <button className="reset-button" onClick={handleReset}>Reset</button>
            </div>
            <Game />
        </div>
    );
};

export default App;
