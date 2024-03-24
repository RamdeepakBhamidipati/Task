import React, { useState, useEffect } from 'react';
import Board from './Board';
import './board.css';
import './popup.css';


const wordsAndAlphabets = [
    { id: 1, word: 'Apple', alphabet: 'A' },
    { id: 2, word: 'Banana', alphabet: 'B' },
    { id: 3, word: 'Cat', alphabet: 'C' },
    { id: 4, word: 'Dog', alphabet: 'D' },
    { id: 5, word: 'Apple', alphabet: 'A' }, 
    { id: 6, word: 'Banana', alphabet: 'B' }, 
    { id: 7, word: 'Cat', alphabet: 'C' }, 
    { id: 8, word: 'Dog', alphabet: 'D' }, 
];

const Game: React.FC = () => {
   
    const [imageCards, setImageCards] = useState<{ id: number; word: string; isMatched: boolean;popupMessage:boolean }[]>([]);
    const [alphabetCards, setAlphabetCards] = useState<{ id: number; alphabet: string; isMatched: boolean;popupMessage:boolean }[]>([]);
    const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
    const [popupMessage, setPopupMessage] = useState('');

  
    const initializeGame = () => {
       
        const shuffledData = shuffleArray(wordsAndAlphabets);

     
        const newImageCards = shuffledData.map((item, index) => ({
            id: index + 1,
            word: item.word,
            isMatched: null,
        }));

        console.log("newImageCards",newImageCards);

       
        const newAlphabetCards = shuffledData.map((item, index) => ({
            id: index + 1,
            alphabet: item.alphabet,
            isMatched: null,
        }));

        console.log("newAlphabetCards",newAlphabetCards);


       
        const shuffledImageCards = shuffleArray(newImageCards);
        const shuffledAlphabetCards = shuffleArray(newAlphabetCards);

        setImageCards(shuffledImageCards);
        setAlphabetCards(shuffledAlphabetCards);

        console.log("shuffledImageCards",shuffledImageCards);
        console.log("shuffledAlphabetCards",shuffledAlphabetCards);

    };

   
    const shuffleArray = (array: any[]) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

   
    useEffect(() => {
        initializeGame();
    }, []);

    return (
        <div className="game">
            <Board
                imageCards={imageCards}
                alphabetCards={alphabetCards}
                onCardClick={(id, type) => {}}
            />
            
        </div>
    );
};

export default Game;
