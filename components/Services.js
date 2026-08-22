import { ArrowRight } from 'lucide-react';
import Section from './layout/Section';
import sectionStyles from '../styles/Section.module.css';
import cardStyles from '../styles/Card.module.css';
import styles from '../styles/Services.module.css';
import { SERVICES } from '../lib/content';
import { useScrollReveal } from '../lib/useScrollReveal';

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Section id="services" className={styles.section} centered ariaLabelledby="services-heading">
      <span className={sectionStyles.label}>What We Offer</span>
      <h2 id="services-heading" className={sectionStyles.heading}>
        Guidance for Every Step of Your Journey
      </h2>
      <p className={sectionStyles.description}>
        Go Beyond helps students and parents navigate education decisions with clarity — from
        admissions and applications to career guidance and personalized support.
      </p>

      <div className={styles.grid} ref={ref}>
        {SERVICES.map(({ title, description, icon: Icon }, index) => (
          <article 
            key={title} 
            className={`${cardStyles.card} ${styles.serviceCard} reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 75}ms` }}
          >
            <div className={styles.iconWrap} aria-hidden="true">
              <Icon size={24} strokeWidth={2} />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
            <a href="#contact" className={styles.cardLink}>
              Learn more
              <ArrowRight size={16} className={styles.cardArrow} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaText}>Not sure which option is right for you?</p>
        <a href="#contact" className={`btn btnPrimary ${styles.ctaButton}`}>
          Talk to Go Beyond
        </a>
      </div>
    </Section>
  );
}
