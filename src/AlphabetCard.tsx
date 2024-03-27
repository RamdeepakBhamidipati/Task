import React, { useState, useEffect } from 'react';
import './alphabetCard.css';

interface AlphabetCardProps {
    id: number;
    alphabet: string;
    isMatched: boolean;
    onClick: () => void;
}

const AlphabetCard: React.FC<AlphabetCardProps> = ({ id, alphabet, isMatched, onClick }) => {
    const [flipped, setFlipped] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleClick = () => {
        if (!isMatched) {
            setFlipped(true);
            onClick();
        }
    };

    return (
        <div className={`alphabet-card ${isMatched ? 'matched' : ''} ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="alphabet">{flipped || isMatched ? alphabet : ''}</div>
            {/* {popupMessage && <div className={`popup ${isMatched ? 'matched' : 'not-matched'}`}>{popupMessage}</div>} */}
        </div>
    );
};

export default AlphabetCard;
