import styles from '../styles/WhyGoBeyond.module.css';

export default function WhyGoBeyond() {
  return (
    <section className={styles.why}>
      <h2>Why Go Beyond?</h2>
      <div className={styles.cardsContainer}>

        <div className={styles.card}>
          <img
            src="markus-winkler-igoytGVfdxw-unsplash.jpg"
            alt="Expert Guidance"
            className={styles.cardImage}
          />
          <h3>Expert Guidance</h3>
          <p>
            Our team of experienced educational consultants ensures you make the best academic decisions tailored to your future.
          </p>
        </div>

        <div className={styles.card}>
          <img
            src="dom-fou-YRMWVcdyhmI-unsplash.jpg"
            alt="Top University Admissions"
            className={styles.cardImage}
          />
          <h3>Top University Admissions</h3>
          <p>
            We help you secure admission to the best institutions around the globe through personalized strategies and mentorship.
          </p>
        </div>

        <div className={styles.card}>
          <img
            src="rodeo-project-management-software--f0SlS5MYnI-unsplash.jpg"
            alt="Personalized Support"
            className={styles.cardImage}
          />
          <h3>Personalized Support</h3>
          <p>
            Every student is unique and so is our approach! We tailor our support to meet your specific academic and career goals.
          </p>
        </div>

        <div className={styles.card}>
          <img
            src="thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg"
            alt="Application Process"
            className={styles.cardImage}
          />
          <h3>Application Process</h3>
          <p>
            From documentation to interviews, we simplify the entire process for you with hands on assistance every step of the way.
          </p>
        </div>

        <div className={styles.card}>
          <img
            src="austin-distel-wD1LRb9OeEo-unsplash.jpg"
            alt="Career Counseling"
            className={styles.cardImage}
          />
          <h3>Career Counseling</h3>
          <p>
            We're not just about admissions we help you shape a successful future with expert career guidance and support.
          </p>
        </div>

      </div>
      <p className={styles.tagline}>Go Beyond Your Limits, Go Beyond Your Dreams!</p>
    </section>
  );
}
