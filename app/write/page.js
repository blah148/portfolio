'use client';

import { useState } from 'react';
import styles from '../../styles/ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const { fname, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/sendContactForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ fname: '', email: '', message: '' });
        alert('Form submitted successfully!');
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while submitting the form.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles['contact-form']}>
      {isLoading && <p>Submitting…</p>}
      <div className={styles.formBox}>
        <p>An online contact form to send messages,</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname" className={styles.labelTag}>
            Name <span className={styles.required}>*</span> :
          </label>
          <input
            className={styles.formRow}
            type="text"
            id="fname"
            name="fname"
            value={fname}
            onChange={handleChange}
          />

          <label htmlFor="email" className={styles.labelTag}>
            Email <span className={styles.required}>*</span> :
          </label>
          <input
            className={styles.formRow}
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />

          <label htmlFor="message" className={styles.labelTag}>
            Message <span className={styles.required}>*</span> :
          </label>
          <textarea
            className={`${styles.formRow} ${styles.messageBox}`}
            id="message"
            name="message"
            required
            value={message}
            onChange={handleChange}
          ></textarea>

          <button className={styles.formButton} type="submit" disabled={isLoading}>
            {isLoading ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

