import { useState } from 'react';
import Head from 'next/head';
import Image from "next/image";
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './ContactForm.module.css'; // Import CSS module
import { useLoading } from '../context/LoadingContext';

export default function Contact() {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    subject: '',
    message: '',
  });

  const { fname, email, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    startLoading();

    try {
      const response = await fetch('/api/sendContactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          fname: '',
          email: '',
          subject: '',
          message: '',
        });
        alert('Form submitted successfully!');
        stopLoading();
      } else {
        stopLoading();
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <>
      <Head>
        <title>blah148 - Contact</title>
        <meta
          name="description"
          content="An online contact form to send messages to blah148"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <div className="mainBody">
        <Sidebar />
        <div className="otherBody">
          <Header logoTitle="Contact"/>
          <div className={styles['contact-form']}>
            <Loader isLoading={isLoading} />
            <div className={styles.formBox}>
              <form onSubmit={handleSubmit}>
                <label htmlFor="fname">
                  Name <span className={styles['required']}>*</span> :
                </label>
                <input
                  className={styles['formRow']}
                  type="text"
                  id="fname"
                  name="fname"
                  value={fname}
                  onChange={handleChange}
                />
                <label htmlFor="email">
                  Email <span className={styles['required']}>*</span> :
                </label>
                <input
                  className={styles['formRow']}
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  required
                  onChange={handleChange}
                />
                <label htmlFor="subject">
                  Subject <span className={styles['required']}>*</span> :
                </label>
                <input
                  className={styles['formRow']}
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  required
                  onChange={handleChange}
                />
                <label htmlFor="message">
                  Message <span className={styles['required']}>*</span> :
                </label>
                <textarea
                  className={styles['formRow']}
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={handleChange}
                ></textarea>
                <button type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

