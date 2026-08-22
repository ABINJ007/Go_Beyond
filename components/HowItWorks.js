import Section from './layout/Section';
import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/HowItWorks.module.css';
import { PROCESS_STEPS } from '../lib/content';
import { useScrollReveal } from '../lib/useScrollReveal';

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <Section id="process" className={styles.section} centered ariaLabelledby="process-heading">
      <span className={sectionStyles.label}>Your Journey</span>
      <h2 id="process-heading" className={sectionStyles.heading}>
        How It Works
      </h2>
      <p className={sectionStyles.description}>
        From your first enquiry to taking the next step — here is how Go Beyond supports you
        through the process.
      </p>

      <ol className={styles.timeline} ref={ref}>
        {PROCESS_STEPS.map((step, index) => (
          <li 
            key={step.title} 
            className={`${styles.step} reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className={styles.stepMarker} aria-hidden="true">
              <span className={styles.stepNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
