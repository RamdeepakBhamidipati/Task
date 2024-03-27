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

    // useEffect(() => {
    //     if (isMatched) {
    //         setPopupMessage('Matched');
    //         setTimeout(() => {
    //             setPopupMessage('');
    //         }, 3000);
    //     } else {
    //         setPopupMessage('Not Matched');
    //         setTimeout(() => {
    //             setPopupMessage('');
    //         }, 3000);
    //     }
    // }, [isMatched]);

    return (
        <div className={`image-card ${isMatched ? 'matched' : ''} ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="word">{flipped || isMatched ? word : ''}</div>
            {/* {popupMessage && <div className={`popup ${isMatched ? 'matched' : 'not-matched'}`}>{popupMessage}</div>} */}
        </div>
    );
};

export default ImageCard;


// import React, { useState, useEffect } from 'react';
// import './imageCard.css';

// interface ImageCardProps {
//     id: number;
//     word: string;
//     isMatched: boolean;
//     onClick: () => void;
// }

// const ImageCard: React.FC<ImageCardProps> = ({ id, word, isMatched, onClick }) => {
//     const [flipped, setFlipped] = useState(false); 
//     const [popupMessage,setPopupMessage]=useState('');
//     const [showPopup,setShowPopup]=useState(false);
    
//     const handleClick = () => {
//         if (!isMatched) { 
//             setFlipped(true);
//             onClick(); 
//         }
//     };

//     useEffect(() => {
//         if (isMatched) {
//             setTimeout(() => {
//             }, 3000);
//             setShowPopup(true);
//         } else {
//             setTimeout(() => {
//             }, 3000);
//             setShowPopup(true);
//         }
//     }, [isMatched]);

//     return (
//         <div className={`image-card ${isMatched ? 'matched' : ''} ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
//             <div className="word">{flipped || isMatched ? word : ''}</div>
//             {showPopup && <div className={`popup ${isMatched ? 'matched' : 'not-matched'}`}>
//                 {popupMessage}
//             </div>}
//         </div>
//     );
// };

// export default ImageCard;