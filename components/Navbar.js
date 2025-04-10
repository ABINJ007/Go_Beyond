import styles from '../styles/Navbar.module.css';
import { FaBars, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; // Colorful email icon

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <FaBars className={styles.menuIcon} />
        <h1 className={styles.logo}>
          <span className={styles.goText}>Go</span>
          <span className={styles.beyond}>Beyond</span>
        </h1>
      </div>

      <div className={styles.right}>
        <FaFacebookF className={`${styles.icon} ${styles.facebook}`} />
        <FaInstagram className={`${styles.icon} ${styles.instagram}`} />
        <MdEmail className={`${styles.icon} ${styles.email}`} />
        <button className={styles.loginButton}>Login</button>
      </div>
    </nav>
  );
}
