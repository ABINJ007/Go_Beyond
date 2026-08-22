import Link from 'next/link';
import Section from './layout/Section';
import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Section id="about" className={styles.section} ariaLabelledby="about-heading">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <span className={sectionStyles.label}>About Go Beyond</span>
          <h2 id="about-heading" className={styles.heading}>
            Unlocking Endless Possibilities
          </h2>
          <div className={styles.bodyText}>
            <p>
              At <strong>Go Beyond</strong>, we believe that education is the key to unlocking endless possibilities. 
              Whether you&apos;re dreaming of studying at a top university, exploring international education, or choosing the right career path, we make it happen.
            </p>
            <p>
              We are dedicated to providing clear, trustworthy, and personalized guidance that helps students and parents navigate complex educational landscapes with confidence.
            </p>
          </div>
          
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <div className={styles.featureMarker} aria-hidden="true" />
              <span>Personalized Guidance</span>
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureMarker} aria-hidden="true" />
              <span>Student-focused Support</span>
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureMarker} aria-hidden="true" />
              <span>Education & Career Planning</span>
            </li>
          </ul>

          <div className={styles.actions}>
            <Link href="#why-us" className={`btn btnSecondary ${styles.ctaButton}`}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
