import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import logo from '../public/logo.jpg'; // Ensure this image exists in /public

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.leftBar} /> {/* Creative left bar */}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="Go Beyond Logo" className={styles.logo} priority />
          </div>
          <h1 className={styles.title}>Go Beyond</h1>
        </div>
      </div>
    </section>
  );
}
