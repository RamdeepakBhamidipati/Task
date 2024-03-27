import React, { useState, useEffect } from 'react';
import './imageCard.css';

interface ImageCardProps {
    id: number;
    word: string;
    isMatched: boolean;
    onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ id, word, isMatched, onClick }) => {
    const [flipped, setFlipped] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleClick = () => {
        if (!isMatched) {
            setFlipped(true);
            onClick();
        }
    };

    return (
        <div className={`image-card ${isMatched ? 'matched' : ''} ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="word">{flipped || isMatched ? word : ''}</div>
            {/* {popupMessage && <div className={`popup ${isMatched ? 'matched' : 'not-matched'}`}>{popupMessage}</div>} */}
        </div>
    );
};

export default ImageCard;

