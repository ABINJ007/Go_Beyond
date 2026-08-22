import { useScrollReveal } from '../lib/useScrollReveal';
import styles from '../styles/AdmissionsTrust.module.css';

export default function AdmissionsTrust() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className={styles.section} aria-label="Admissions and Trust" ref={ref}>
      <div className={styles.backgroundPattern} aria-hidden="true" />
      <div className={styles.decorativeCircle1} aria-hidden="true" />
      <div className={styles.decorativeCircle2} aria-hidden="true" />
      
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardTopAccent} aria-hidden="true" />
          
          <div 
            className={`${styles.badge} reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '100ms' }}
          >
            Go Beyond – Your Trusted Education Partner!
          </div>
          
          <h2 
            className={`${styles.heading} reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            Shape Your Future,<br />
            <span className={styles.highlight}>Go Beyond</span>
          </h2>
          
          <p 
            className={`${styles.description} reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '300ms' }}
          >
            Unlock your potential with expert guidance. We help you choose the right path and shape your academic future.
          </p>
          
          <div 
            className={`${styles.visualAccent} reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '400ms' }}
            aria-hidden="true"
          >
            <div className={styles.visualLine} />
            <div className={styles.visualDot} />
            <div className={styles.visualLine} />
          </div>
        </div>
      </div>
    </section>
  );
}
