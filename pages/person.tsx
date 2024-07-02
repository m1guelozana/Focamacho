/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';

const Person = () => {
  const [isShot, setIsShot] = useState(false);
  const [backgroundMusic, setBackgroundMusic] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const music = new Audio('/path-to-background-music.mp3');
    music.loop = true;
    music.play();
    setBackgroundMusic(music);
  
    // Verifica se o áudio foi inicializado corretamente ao reiniciar a página
    if (music.paused) {
      music.play();
    }
  
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
  };

  return (
    <div 
      className="w-full h-screen flex flex-col items-center justify-center bg-black text-white"
      style={{ backgroundImage: 'url(/path-to-galaxy-background.gif)', fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}
    >
      {isShot ? (
        <>
          <div className="text-4xl">NÃO!!! POR QUE VOCÊ FEZ ISSO?!</div>
          <img src="/path-to-dead-goose.png" alt="Dead Goose" />
          <div className="mt-4 text-3xl">
            Ao menos da uma olhada no meu{' '}
            <a href="https://www.instagram.com/chrysrzx/" className="text-purple-500">
              Instagram
            </a>.
          </div>
        </>
      ) : (
        <>
          <div className="text-4xl">Conheça Juninho, o ganso!</div>
          <img
            src="/path-to-dancing-goose.gif"
            alt="Dancing Goose"
            className="cursor-crosshair"
            onClick={handleShot}
          />
          <div className="mt-4 text-3xl">
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

export default Person;
