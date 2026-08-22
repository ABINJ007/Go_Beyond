import { useState, useId } from 'react';
import { Plus, Minus } from 'lucide-react';
import Section from './layout/Section';
import sectionStyles from '../styles/Section.module.css';
import cardStyles from '../styles/Card.module.css';
import styles from '../styles/FAQ.module.css';
import { FAQ_ITEMS } from '../lib/content';
import { useScrollReveal } from '../lib/useScrollReveal';

export default function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section id="faq" className={styles.section} centered ariaLabelledby="faq-heading">
      <span className={sectionStyles.label}>Questions & Answers</span>
      <h2 id="faq-heading" className={sectionStyles.heading}>
        Frequently Asked Questions
      </h2>
      <p className={sectionStyles.description}>
        Common questions about getting started, our guidance, and how to reach Go Beyond.
      </p>

      <div className={styles.accordion} ref={ref}>
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;

          return (
            <div
              key={item.question}
              className={`${cardStyles.card} ${styles.item} ${isOpen ? styles.itemOpen : ''} reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className={styles.questionHeading}>
                <button
                  id={buttonId}
                  type="button"
                  className={styles.questionButton}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Plus size={20} className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!isOpen}
                className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}
              >
                <div className={styles.answerInner}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
