import Link from 'next/link';
import Section from './layout/Section';
import styles from '../styles/FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <Section id="cta" className={styles.section} containerClassName={styles.container} ariaLabelledby="cta-heading">
      <div className={styles.content}>
        <h2 id="cta-heading" className={styles.heading}>Ready to Take the Next Step?</h2>
        <p className={styles.description}>
          Start your journey with Go Beyond — register your interest or get in touch with our team.
        </p>
        <div className={styles.actions}>
          <Link href="/register" className={`btn btnPrimary ${styles.primaryButton}`}>
            Register
          </Link>
          <a href="#contact" className={`btn btnSecondary ${styles.secondaryButton}`}>
            Contact Us
          </a>
        </div>
      </div>
    </Section>
  );
}
