/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { initializeCursor, showCustomCursor, hideCustomCursor } from '../utils/cursorManager'; 

const GooseComponent: React.FC = () => {
  const [isShot, setIsShot] = useState(false);
  const [backgroundMusic, setBackgroundMusic] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    initializeCursor();

    const getRandomAudioUrl = () => {
      const audioUrls = [
        '/path-to-background-music1.mp3',
        '/path-to-background-music2.mp3',
        '/path-to-background-music3.mp3',
        '/path-to-background-music4.mp3',
        '/path-to-background-music5.mp3',
      ];

      const randomIndex = Math.floor(Math.random() * audioUrls.length);
      return audioUrls[randomIndex];
    };

    // Inicializa o áudio de fundo
    const music = new Audio(getRandomAudioUrl());
    music.loop = true;
    music.play();
    setBackgroundMusic(music);

    // Limpa o áudio ao desmontar o componente
    return () => {
      music.pause();
      music.currentTime = 0;
    };
  }, []);

  const handleShot = () => {
    setIsShot(true);
    const audio = new Audio('/path-to-gunshot-sound.mp3');
    audio.play();

    if (backgroundMusic) {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
    }

    hideCustomCursor(); 
  };

  const handleMouseEnter = () => {
    showCustomCursor(); 
  };

  const handleMouseLeave = () => {
    hideCustomCursor(); 
  };

  return (
    <div 
      className="w-full h-screen flex flex-col items-center justify-center bg-black text-white relative"
      style={{ 
        backgroundImage: 'url(/path-to-galaxy-background.gif)',
        fontFamily: 'Comic Sans MS, Comic Sans, cursive' 
      }}
    >
      {isShot ? (
        <>
          <div className="text-4xl">NÃO!!! POR QUE VOCÊ FEZ ISSO?!</div>
          <img id="ganso" src="/path-to-dead-goose.png" alt="Dead Goose" />
          <div className="mt-4 text-xl">
            Ao menos dê uma olhada no meu {' '}
            <a href="https://www.instagram.com/chrysrzx/" className="text-purple-500">
              Instagram
            </a>.
          </div>
        </>
      ) : (
        <>
          <div className="text-4xl">Conheça Juninho, o ganso!</div>
          <div 
            id="ganso"
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/path-to-dancing-goose.gif" // Ajuste o caminho conforme necessário
              alt="Dancing Goose"
              onClick={handleShot}
            />
          </div>
          <div className="mt-4 text-xl">
            Curtiu os movimentos? Dá uma olhada no meu {' '}
            <a href="https://www.instagram.com/chrysrzx/" className="text-purple-500">
              Instagram
            </a>.
          </div>
        </>
      )}
    </div>
  );
};

export default GooseComponent;
