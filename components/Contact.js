import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Instagram, Send } from 'lucide-react';
import Section from './layout/Section';
import sectionStyles from '../styles/Section.module.css';
import cardStyles from '../styles/Card.module.css';
import styles from '../styles/Contact.module.css';
import { CONTACT_INFO } from '../lib/navigation';
import { ENQUIRY_SUBJECTS } from '../lib/content';

const INITIAL_FORM = {
  fullName: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.';
    } else if (!/^[\d\s+\-()]{7,20}$/.test(formData.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter your message.';
    }

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(
      formData.subject
        ? `Go Beyond Enquiry: ${formData.subject}`
        : 'Go Beyond Enquiry'
    );
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'General Enquiry'}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${CONTACT_INFO.email.display}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Section
      id="contact"
      className={styles.section}
      containerClassName={styles.container}
      ariaLabelledby="contact-heading"
    >
      <div className={styles.layout}>
        <div className={styles.infoColumn}>
          <span className={sectionStyles.label}>Contact</span>
          <h2 id="contact-heading" className={sectionStyles.heading}>
            Get in Touch
          </h2>
          <p className={styles.infoDescription}>
            Have questions about admissions, career guidance, or getting started? Reach out to Go
            Beyond — we&apos;re here to help.
          </p>

          <div className={styles.contactGroups}>
            <div className={styles.contactGroup}>
              <h3 className={styles.groupTitle}>Call Us</h3>
              <ul className={styles.contactList}>
                {CONTACT_INFO.phones.map(({ display, href }) => (
                  <li key={href}>
                    <a href={href} className={styles.contactLink}>
                      <Phone size={18} aria-hidden="true" />
                      <span>{display}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.contactGroup}>
              <h3 className={styles.groupTitle}>Email Us</h3>
              <a href={CONTACT_INFO.email.href} className={styles.contactLink}>
                <Mail size={18} aria-hidden="true" />
                <span>{CONTACT_INFO.email.display}</span>
              </a>
            </div>

            <div className={styles.contactGroup}>
              <h3 className={styles.groupTitle}>Follow Us</h3>
              <a
                href={CONTACT_INFO.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Instagram size={18} aria-hidden="true" />
                <span>{CONTACT_INFO.instagram.display}</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`${cardStyles.card} ${styles.formCard}`}>
          <h3 className={styles.formTitle}>Send an Enquiry</h3>
          <p className={styles.formSubtitle}>
            Fill in your details and we&apos;ll open your email app to send your message. For a
            detailed consultation, you can also{' '}
            <Link href="/register" className={styles.inlineLink}>
              register here
            </Link>
            .
          </p>

          {submitted ? (
            <div className={styles.successMessage} role="status">
              Your email app should open with your enquiry. If it doesn&apos;t, please email us
              directly at{' '}
              <a href={CONTACT_INFO.email.href} className={styles.inlineLink}>
                {CONTACT_INFO.email.display}
              </a>
              .
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.formGroup}>
                <label htmlFor="contact-fullName">Full Name</label>
                <input
                  type="text"
                  id="contact-fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'contact-fullName-error' : undefined}
                  autoComplete="name"
                />
                {errors.fullName && (
                  <span id="contact-fullName-error" className={styles.error} role="alert">
                    {errors.fullName}
                  </span>
                )}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <span id="contact-phone-error" className={styles.error} role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span id="contact-email-error" className={styles.error} role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-subject">Subject / Interest</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select a topic</option>
                  {ENQUIRY_SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                />
                {errors.message && (
                  <span id="contact-message-error" className={styles.error} role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className={`btn btnPrimary ${styles.submitButton}`}>
                <Send size={18} aria-hidden="true" />
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
