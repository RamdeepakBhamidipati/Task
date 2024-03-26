


import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import AlphabetCard from './AlphabetCard';
import './board.css';

interface Card {
    id: number;
    word?: string;
    alphabet?: string;
    isMatched: boolean;
}

interface BoardProps {
    imageCards: Card[];
    alphabetCards: Card[];
    onCardClick: (id: number, type: string) => void;
}

const Board: React.FC<BoardProps> = ({ imageCards, alphabetCards, onCardClick }) => {
    const [firstCardId, setFirstCardId] = useState<number | null>(null);
    const [popupMessage, setPopupMessage] = useState<string>('');

    const handleCardClick = (id: number, type: string) => {
        if (firstCardId !== null) {
            const matchedCard = type === 'image'
                ? imageCards.find((card: Card) => card.id === id)
                : alphabetCards.find((card: Card) => card.id === id);
    
            if (matchedCard && matchedCard.id === firstCardId) {
                setPopupMessage('Matched');
            } else {
                setPopupMessage('Not Matched');
            }
    
            setTimeout(() => {
                setPopupMessage('');
            }, 2000);
    
            setFirstCardId(null);
        } else {
            setFirstCardId(id);
        }
    };
    return (
        <div className="board">
            <div className="word-cards">
                {imageCards.map((card: Card) => (
                    <ImageCard
                        key={card.id}
                        id={card.id}
                        word={card.word || ''}
                        isMatched={card.isMatched}
                        onClick={() => handleCardClick(card.id, 'image')}
                    />
                ))}
            </div>
            <div className="alphabet-cards">
                {alphabetCards.map((card: Card) => (
                    <AlphabetCard
                        key={card.id}
                        id={card.id}
                        alphabet={card.alphabet || ''}
                        isMatched={card.isMatched}
                        onClick={() => handleCardClick(card.id, 'alphabet')}
                    />
                ))}
            </div>
            {popupMessage && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                    zIndex: 9999,
                    width: '250px',
                    height: '150px',
                    borderColor: 'aqua',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: popupMessage === 'Matched' ? 'green' : 'red',
                    color: 'white'
                }}>
                    {popupMessage}
                </div>
            )}
        </div>
    );
};

export default Board;
// import React, { useState, useEffect } from 'react';
// import ImageCard from './ImageCard';
// import AlphabetCard from './AlphabetCard';
// import Result from './Result';
// import './board.css';

// interface Card {
//     id: number;
//     word?: string;
//     alphabet?: string;
//     isMatched: boolean;
// }

// interface BoardProps {
//     imageCards: Card[];
//     alphabetCards: Card[];
//     onCardClick: (id: number, type: string) => void;
// }

// const Board: React.FC<BoardProps> = ({ imageCards, alphabetCards, onCardClick }) => {
//     const [firstCardId, setFirstCardId] = useState<number | null>(null);
//     const [popupMessage, setPopupMessage] = useState<string>('');
//     const [tries, setTries] = useState<number>(0);
//     const [bananasCollected, setBananasCollected] = useState<number>(0);
//     const [allCardsMatched, setAllCardsMatched] = useState<boolean>(false);

//     useEffect(() => {
//         const matchedCards = [...imageCards, ...alphabetCards].filter((card) => card.isMatched);
//         if (matchedCards.length === imageCards.length + alphabetCards.length) {
//             setAllCardsMatched(true);
//         }
//     }, [imageCards, alphabetCards]);

//     const handleCardClick = (id: number, type: string) => {
//         // Increment tries for each card click
//         setTries((prevTries) => prevTries + 1);

//         if (firstCardId !== null) {
//             const matchedCard = type === 'image'
//                 ? alphabetCards.find((card: Card) => card.id === id)
//                 : imageCards.find((card: Card) => card.id === id);

//             if (matchedCard && matchedCard.id === firstCardId) {
//                 setPopupMessage('Matched');
//                 // Increment bananas collected if cards are matched
//                 setBananasCollected((prevBananas) => prevBananas + 1);
//             } else {
//                 setPopupMessage('Not Matched');
//             }

//             setTimeout(() => {
//                 setPopupMessage('');
//             }, 2000);

//             setFirstCardId(null);
//         } else {
//             setFirstCardId(id);
//         }
//     };

//     return (
//         <div className="board">
//             <div className="word-cards">
//                 {imageCards.map((card: Card) => (
//                     <ImageCard
//                         key={card.id}
//                         id={card.id}
//                         word={card.word || ''}
//                         isMatched={card.isMatched}
//                         onClick={() => handleCardClick(card.id, 'image')}
//                     />
//                 ))}
//             </div>
//             <div className="alphabet-cards">
//                 {alphabetCards.map((card: Card) => (
//                     <AlphabetCard
//                         key={card.id}
//                         id={card.id}
//                         alphabet={card.alphabet || ''}
//                         isMatched={card.isMatched}
//                         onClick={() => handleCardClick(card.id, 'alphabet')}
//                     />
//                 ))}
//             </div>
//             {popupMessage && (
//                 <div style={{
//                     position: 'fixed',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)',
//                     borderRadius: '16px',
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                     fontSize: '30px',
//                     fontWeight: 'bold',
//                     fontFamily: 'Arial, sans-serif',
//                     textAlign: 'center',
//                     zIndex: 9999,
//                     width: '250px',
//                     height: '150px',
//                     borderColor: 'aqua',
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     backgroundColor: popupMessage === 'Matched' ? 'green' : 'red',
//                     color: 'white'
//                 }}>
//                     {popupMessage}
//                 </div>
//             )}
//             {allCardsMatched && (
//                 <Result tries={tries} bananasCollected={bananasCollected} />
//             )}
//         </div>
//     );
// };

// export default Board;
