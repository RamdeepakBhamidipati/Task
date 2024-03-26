import React from 'react';

interface ResultProps {
    tries?: number;
    bananasCollected?: number;
}

const Result: React.FC<ResultProps> = ({ tries, bananasCollected }) => {
    return (
        <div className="result">
            <h2>Game Over!</h2>
            <p>Tries: {tries}</p>
            <p>Bananas Collected: {bananasCollected}</p>
        
        </div>
    );
};

export default Result;
