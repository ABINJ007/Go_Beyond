import { useEffect, useState } from "react";
import styles from "../styles/Announcement.module.css";

export default function Announcement() {
  const messages = [
    "Your future starts here. Take the first step today",
    "Explore top universities and career opportunities",
    "Unlock your potential with expert guidance",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out animation
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setFade(true); // Start fade-in animation
      }, 500); // Matches the fade-out duration
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.announcement}>
      <h2 className={styles.heading}>🎓 Admissions Open</h2>
      <p className={`${styles.animatedText} ${fade ? styles.fadeIn : styles.fadeOut}`}>
        {messages[index]}
      </p>
    </section>
  );
}
