import React, { useEffect } from 'react';

const ScrollBlocker = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Verifica se o usuário está tentando rolar para baixo
      if (window.scrollY < window.innerHeight) {
        // Impede a rolagem para baixo
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollBlocker;