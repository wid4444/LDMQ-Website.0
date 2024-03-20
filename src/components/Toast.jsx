import { useEffect } from 'react';


function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 4000); // Auto close after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) {
    return null;
  }

  

  return (
    <div className={`fixed bottom-0 m-4 py-4 px-8 bg-purple-500 text-white text-2xl border-purple-950 border-2 rounded-2xl transition-all duration-500 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      {message}
    </div>
  );
}

export default Toast;