import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AdmissionsTrust from '../components/AdmissionsTrust';
import About from '../components/About';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import WhyGoBeyond from '../components/WhyGoBeyond';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { FAQ_ITEMS } from '../lib/content';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Go Beyond",
    "url": "https://gobeyond-kohl.vercel.app/",
    "logo": "https://gobeyond-kohl.vercel.app/logo.jpg",
    "description": "Go Beyond helps students and parents navigate education decisions with clarity — from admissions and applications to career guidance and personalized support."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Go Beyond | Educational Consultancy & Career Guidance</title>
        <meta
          name="description"
          content="Go Beyond is your trusted education partner for university admissions, career counselling, and personalized academic guidance."
        />
        <link rel="canonical" href="https://gobeyond-kohl.vercel.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gobeyond-kohl.vercel.app/" />
        <meta property="og:title" content="Go Beyond | Educational Consultancy & Career Guidance" />
        <meta property="og:description" content="Go Beyond is your trusted education partner for university admissions, career counselling, and personalized academic guidance." />
        <meta property="og:image" content="https://gobeyond-kohl.vercel.app/hello10.jpg" />
        <meta property="og:site_name" content="Go Beyond" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gobeyond-kohl.vercel.app/" />
        <meta property="twitter:title" content="Go Beyond | Educational Consultancy & Career Guidance" />
        <meta property="twitter:description" content="Go Beyond is your trusted education partner for university admissions, career counselling, and personalized academic guidance." />
        <meta property="twitter:image" content="https://gobeyond-kohl.vercel.app/hello10.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <AdmissionsTrust />
        <About />
        <Services />
        <HowItWorks />
        <WhyGoBeyond />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
