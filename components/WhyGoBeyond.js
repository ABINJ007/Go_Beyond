import Image from 'next/image';
import Section from './layout/Section';
import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/WhyGoBeyond.module.css';
import { REASONS } from '../lib/content';
import { useScrollReveal } from '../lib/useScrollReveal';

export default function WhyGoBeyond() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <Section id="why-us" className={styles.section} ariaLabelledby="why-us-heading">
      <div className={styles.header}>
        <span className={sectionStyles.label}>Why Choose Us</span>
        <h2 id="why-us-heading" className={styles.heading}>
          Guidance That Goes Beyond
        </h2>
        <p className={sectionStyles.description}>
          We don&apos;t just help you choose a university — we partner with you to shape your entire academic future.
        </p>
      </div>

      <div className={styles.features} ref={ref}>
        {REASONS.map((reason, index) => {
          const isEven = index % 2 === 0;
          return (
            <article 
              key={reason.title} 
              className={`${styles.feature} ${isEven ? styles.featureEven : styles.featureOdd} reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={styles.textContent}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.featureTitle}>{reason.title}</h3>
                <p className={styles.featureDescription}>{reason.description}</p>
              </div>
              
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.featureImage}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.footer}>
        <p className={styles.tagline}>Go Beyond Your Limits, Go Beyond Your Dreams!</p>
      </div>
    </Section>
  );
}
