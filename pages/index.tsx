/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Layout from '../components/Layout';
import GooseComponent from '../components/GooseComponent';

const Index = () => {
  const [showGoose, setShowGoose] = useState(false);
  const [showFocamacho, setShowFocamacho] = useState(true);

  const handleToggle = () => {
    setShowGoose(!showGoose);
    setShowFocamacho(false);
  };

  return (
    <Layout>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white"
      style={{ backgroundImage: 'url(/path-to-galaxy-background.gif)', fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
        {showFocamacho && (
          <>
            <img
              src="/path-to-person-photo.png"
              alt="Person"
              className="rounded-full w-40 h-40 cursor-pointer"
              onClick={handleToggle}
            />
            <div
              className="text-white mt-4 text-xl cursor-pointer"
              onClick={handleToggle}
            >
              Focamacho
            </div>
          </>
        )}
        {showGoose && <GooseComponent />}
      </div>
    </Layout>
  );
};

export default Index;
