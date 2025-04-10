import { useEffect } from "react";
import styles from "../styles/About.module.css";

export default function About() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const card = document.getElementById("aboutCard");
      const { clientX: x, clientY: y } = event;
      const moveX = (x / window.innerWidth - 0.5) * 30;
      const moveY = (y / window.innerHeight - 0.5) * 30;

      card.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${moveY}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.particleLayer}></div> {/* Floating Particles */}
      <div className={styles.fireflies}></div> {/* Fireflies Effect */}
      <div className={styles.card} id="aboutCard">
        <h2 className={styles.heading}>
          About <span className={styles.glow}></span>
        </h2>
        <p className={styles.description}>
          At <span className={styles.highlight}>Go Beyond</span>, we believe that education is the key to unlocking endless possibilities. 
          Whether you're dreaming of studying at a top university, exploring international education, or choosing the right career path, we make it happen!
        </p>
      </div>
    </section>
  );
}
