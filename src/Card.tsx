import React from 'react';
import './card.css';

interface CardProps {
    id: number;
    image: string;
    isMatched: boolean;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ id, image, isMatched, onClick }) => {
    return (
        <div className={`card ${isMatched ? 'matched' : ''}`} onClick={onClick}>
            {isMatched ? <img src={image} alt={`Card ${id}`} /> : ' '} 
        </div>
    );
};

export default Card;
