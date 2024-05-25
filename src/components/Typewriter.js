// Use for Single String

// import { useState, useEffect } from 'react';

// const Typewriter = ({ text, delay, infinite }) => {
//   const [currentText, setCurrentText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showCursor, setShowCursor] = useState(true);

// useEffect(() => {
//   let timeout;

//   if (currentIndex <= text.length) {
//     timeout = setTimeout(() => {
//       setCurrentText(prevText => prevText + text[currentIndex]);
//       setCurrentIndex(prevIndex => prevIndex + 1);
//     }, delay);
//   } else if (infinite) { 
//       setCurrentIndex(0);
//       setCurrentText('');
//   }

//   return () => clearTimeout(timeout);
// }, [currentIndex, delay, infinite, text]);

//   // Toggle cursor every 500 milliseconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowCursor(prevShowCursor => !prevShowCursor);
//     }, 500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <span>
//       {currentText}
//       {showCursor && '|'}
//     </span>
//   );
// };

// export default Typewriter;


// Use for array of strings.

import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, infinite }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentTextLength = text[currentTextIndex]?.length;

    let timeout;

    if (currentIndex < currentTextLength) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentTextIndex][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else {
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentTextIndex(prevIndex => (prevIndex + 1) % text.length);
        setCurrentText('');
      }, delay * 2); // Wait for twice the delay before switching to the next text
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, currentTextIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prevShowCursor => !prevShowCursor);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {currentText}
      {showCursor && '|'}
    </span>
  );
};

export default Typewriter;
