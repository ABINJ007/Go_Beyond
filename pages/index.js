import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuoteBanner from '../components/QuoteBanner';
import About from '../components/About';
import Announcement from '../components/Announcement';
import WhyGoBeyond from '../components/WhyGoBeyond';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Link from 'next/link';

import styles from '../styles/Home.module.css'; // Optional: for homepage-specific styles

export default function Home() {
  return (
    <>
      <Head>
        <title>Go Beyond – Your Trusted Education Partner</title>
      </Head>
      <Navbar />
      <Hero />
      <QuoteBanner />
      <About />
      <Announcement />
    
      <WhyGoBeyond />
      
      {/* 🎯 Register Section */}
      <section className={styles.registerSection}>
        <div className={styles.registerContent}>
          <h2>Ready to Begin Your Journey?</h2>
          <p>Join Go Beyond and take the first step towards a brighter academic future.</p>
          <Link href="/register">
            <button className={styles.registerButton}>Register Now</button>
          </Link>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
