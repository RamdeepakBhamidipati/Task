import React, { useState } from 'react';
import ImageCard from './ImageCard';
import AlphabetCard from './AlphabetCard';
import './board.css';

interface BoardProps {
    imageCards: { id: number; word: string; isMatched: boolean }[];
    alphabetCards: { id: number; alphabet: string; isMatched: boolean }[];
    onCardClick: (id: number, type: string, cardId: number) => void; 
}

const Board: React.FC<BoardProps> = ({ imageCards, alphabetCards, onCardClick }) => {
    const [firstCardId, setFirstCardId] = useState<number | null>(null); 

  
    const handleCardClick = (id: number, type: string) => {
        if (firstCardId !== null) {
            
            const matchedCard = type === 'image'
                ? alphabetCards.find(card => card.id === id)
                : imageCards.find(card => card.id === id);

            if (matchedCard && matchedCard.id === firstCardId) {
                alert('Matched');
            } else {
               
                alert('Not Matched');
            }


          
            setFirstCardId(null);
        } else {
            
            setFirstCardId(id);
        }
    };

    return (
        <div className="board">
            <div className="word-cards">
                {imageCards.map((card) => (
                    <ImageCard
                        key={card.id}
                        id={card.id}
                        word={card.word}
                        isMatched={card.isMatched}
                        onClick={() => handleCardClick(card.id, 'image')}
                    />
                ))}
            </div>
            <div className="alphabet-cards">
                {alphabetCards.map((card) => (
                    <AlphabetCard
                        key={card.id}
                        id={card.id}
                        alphabet={card.alphabet}
                        isMatched={card.isMatched}
                        onClick={() => handleCardClick(card.id, 'alphabet')}
                    />
                ))}
            </div>
        </div>
    );
};

export default Board;
