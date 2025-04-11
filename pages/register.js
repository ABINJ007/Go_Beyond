import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from '../styles/Register.module.css';
import Image from 'next/image';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    destination: '',
    course: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Insert data into Supabase
      const { data, error } = await supabase.from('registrations').insert([
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          mobile: formData.mobile,
          destination: formData.destination,
          course: formData.course,
          consent: formData.consent,
        }
      ]);
  
      if (error) {
        console.error('Error inserting data:', error.message);
        alert(`Error: ${error.message}`);
      } else {
        alert('Form submitted successfully!');
        console.log('Inserted Data:', data);
  
        // Reset the form after submission
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          mobile: '',
          destination: '',
          course: '',
          consent: false
        });
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('An unexpected error occurred. Please try again.');
    }
  };
  

  return (
    <div className={styles.registerContainer}>
      <div className={styles.formBox}>
        <div className={styles.imageContainer}>
          <Image 
            className={styles.insideImage} 
            src="/hello2.jpg" 
            alt="Graduation" 
            width={500} 
            height={300} 
            layout="responsive"
          />
        </div>

        <div className={styles.formContent}>
          <h2 className={styles.formTitle}>Let <strong>Our Team</strong> Reach Out To You</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstname" value={formData.firstname} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastname" value={formData.lastname} onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email ID</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="mobile">Mobile Number</label>
                <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="destination">Your Preferred Study Destination</label>
                <select id="destination" name="destination" value={formData.destination} onChange={handleChange}>
                  <option>Select Destination</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Mysore</option>
                  <option>Mangalore</option>
                  <option>Coimbatore</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="course">Course</label>
                <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} required />
              <label htmlFor="consent">I consent to receiving Calls, WhatsApp, Email, and Google RCS from Go Beyond.</label>
            </div>

            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
