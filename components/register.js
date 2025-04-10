
import styles from '../styles/Register.module.css';

export default function Register() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Register at Go Beyond</h1>
      <form className={styles.form}>
        <label>
          Full Name:
          <input type="text" placeholder="Your Name" required />
        </label>
        <label>
          Email Address:
          <input type="email" placeholder="example@mail.com" required />
        </label>
        <label>
          Phone Number:
          <input type="tel" placeholder="123-456-7890" required />
        </label>
        <label>
          Interested Course:
          <input type="text" placeholder="Course or Program" />
        </label>
        <label>
          Message:
          <textarea placeholder="Tell us more..." rows="4"></textarea>
        </label>
        <button type="submit">Register Now</button>
      </form>
    </div>
  );
}
