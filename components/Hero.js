import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.jpg';

export default function Hero() {
  return (
    <section id="home" className={`${styles.hero} page-section`}>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="Go Beyond Logo" className={styles.logo} priority />
          </div>
          <span className={styles.label}>Your Trusted Education Partner</span>
          <h1 className={styles.title}>
            Guidance That Goes <br className={styles.break} /> Beyond Expectations
          </h1>
          <p className={styles.description}>
            We help students make informed education and career decisions with personalized guidance throughout their journey.
          </p>
          <div className={styles.actions}>
            <Link href="#contact" className={`btn btnPrimary ${styles.primaryButton}`}>
              Book a Consultation
            </Link>
            <Link href="#services" className={`btn btnSecondary ${styles.secondaryButton}`}>
              Explore Our Services
            </Link>
          </div>
          <div className={styles.trustPoints}>
            <span className={styles.trustPoint}>✓ Personalized Guidance</span>
            <span className={styles.trustPoint}>✓ Career Support</span>
            <span className={styles.trustPoint}>✓ Application Assistance</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
           <div className={styles.imageWrapper}>
             <Image 
               src="/hello10.jpg" 
               alt="Students studying together" 
               fill
               priority
               sizes="(max-width: 768px) 100vw, 50vw"
               className={styles.heroImage} 
             />
           </div>
        </div>
      </div>
    </section>
  );
}
