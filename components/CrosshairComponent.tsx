/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

const CrosshairCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 pointer-events-none ${isHovering ? 'block' : 'hidden'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src="/public/path-to-custom-cursor.png" 
        alt="Crosshair" 
        className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      />
    </div>
  );
};

export default CrosshairCursor;
