import React, { useState, useEffect } from 'react';

function Popup({ description }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

//   useEffect(() => {
//     if (!isOpen) {
//       document.body.classList.add('popup-open');
//     } else {
//       document.body.classList.remove('popup-open');
//     }
//   }, [isOpen]);

  return (
    <div>
      <button className='popup-btn-show  ease-in-out hover:-translate-y-1 hover:scale-125' onClick={togglePopup}>Show Description</button>
      {isOpen && (
        <div className="popup bg-gray-300 dark:bg-sky-950">
          
          <p>{description}</p>

          <button className='popup-btn-close' onClick={togglePopup}>Close</button>

        </div>
      )}
    </div>
  );
}

export default Popup;