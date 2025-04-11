import { Phone, Mail, Instagram } from 'lucide-react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Let&apos;s Connect</h2>

      <div className={`${styles.infoItem} ${styles.fadeIn}`} style={{ animationDelay: '0.1s' }}>
        <Phone className={styles.icon} />
        <a href="tel:6282624039" className={styles.link}>+91 6282624039</a>
      </div>

      <div className={`${styles.infoItem} ${styles.fadeIn}`} style={{ animationDelay: '0.3s' }}>
        <Phone className={styles.icon} />
        <a href="tel:8111878445" className={styles.link}>+91 8111878445</a>
      </div>

      <div className={`${styles.infoItem} ${styles.fadeIn}`} style={{ animationDelay: '0.5s' }}>
        <Mail className={styles.icon} />
        <a href="mailto:gobeyond.in25@gmail.com" className={styles.link}>gobeyond.in25@gmail.com</a>
      </div>

      <div className={`${styles.infoItem} ${styles.fadeIn}`} style={{ animationDelay: '0.7s' }}>
        <Instagram className={styles.icon} />
        <a href="https://instagram.com/gobeyond.in" target="_blank" rel="noopener noreferrer" className={styles.link}>@GOBEYOND</a>
      </div>
    </section>
  );
}
