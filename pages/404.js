import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Go Beyond</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Navbar />
      <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Oops! The page you&apos;re looking for doesn&apos;t exist.</h2>
        <Link href="/" className="btn btnPrimary">
          Return Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
