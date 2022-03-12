import React, {useCallback} from 'react';
import '../styles/Footer.scss';
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

function Footer() {
  const pressedMe = useCallback(() => {
    confetti({
      particleCount: 300,
      spread: 100
    });
  }, []);

  return (
    <section className="section-footer">
        <button onClick={pressedMe}>🎉 Press me</button>
    </section>
  );
}

export default Footer;
