import styles from '../styles/QuoteBanner.module.css';

export default function QuoteBanner() {
  return (
    <section className={styles.quote}>
      <p>
        <span className={styles.quoteMark}>“</span>
        Go Beyond – Your Trusted Education Partner!
        <span className={styles.quoteMark}>”</span>
      </p>
    </section>
  );
}
