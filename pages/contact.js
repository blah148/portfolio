import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from "next/image";
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useLoading } from '../context/LoadingContext';
import styles from './ContactForm.module.css'; // Import CSS module

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
      <title>Contact Page | Mitchell Park - Portfolio</title>
    </Head>
    <Header />
    <div className={styles['contact-form']}>
      <Loader isLoading={isLoading} />
      <div className={styles.formBox}>
        <h1>Let's talk about your project</h1>
				<div style={{fontSize: "20px"}}>You will find my reply message in your inbox within 12 hours (or better).</div>
        <div className={styles.contactContent}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name <span className={styles['required']}>*</span> :
            </label>
            <input
              className={styles['formRow']}
              type="text"
              id="fname"
              name="fname"
              required
              value={formData.fname}
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
            <button type="submit" value="Submit">
              Send Message
            </button>
          </form>
					<div className={styles.contactInfo}>
						<a title="I'm free from 10am to 4pm MST" href="tel:+14036699921" className={styles.contactInfoRow}>
							<svg id="icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
									<title>phone--filled</title>
									<path
											d="M20.33,21.48l2.24-2.24a2.19,2.19,0,0,1,2.34-.48l2.73,1.09a2.18,2.18,0,0,1,1.36,2v5A2.17,2.17,0,0,1,26.72,29C7.59,27.81,3.73,11.61,3,5.41A2.17,2.17,0,0,1,5.17,3H10a2.16,2.16,0,0,1,2,1.36l1.09,2.73a2.16,2.16,0,0,1-.47,2.34l-2.24,2.24S11.67,20.4,20.33,21.48Z"
									/>
							</svg>
							<label>+1 (403) 669-9921</label>
						</a>
						<a href="mailto:mpark148@gmail.com" className={styles.contactInfoRow}>
							<svg 
								id="icon" 
								xmlns="http://www.w3.org/2000/svg" 
								viewBox="0 0 32 32">
									<title>send--alt--filled</title>
									<path
										d="M27.71,4.29a1,1,0,0,0-1.05-.23l-22,8a1,1,0,0,0,0,1.87l8.59,3.43L19.59,11,21,12.41l-6.37,6.37,3.44,8.59A1,1,0,0,0,19,28h0a1,1,0,0,0,.92-.66l8-22A1,1,0,0,0,27.71,4.29Z"
									/>
							</svg>
							<label>mpark148@gmail.com</label>
						</a>
						<a title="Centre Street Bridge in Calgary, Alberta after its opening in 1916" href="https://www.google.com/maps?q=Calgary,Alberta,Canada" target="_blank" className={styles.contactInfoRow}>
							<svg 
								id="icon" 
								xmlns="http://www.w3.org/2000/svg" 
								width="32" 
								height="32" 
								viewBox="0 0 32 32">
									<path
										d="M16,2A11.0134,11.0134,0,0,0,5,13a10.8885,10.8885,0,0,0,2.2163,6.6s.3.3945.3482.4517L16,30l8.439-9.9526c.0444-.0533.3447-.4478.3447-.4478l.0015-.0024A10.8846,10.8846,0,0,0,27,13,11.0134,11.0134,0,0,0,16,2Zm0,15a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,17Z"
										style={{ fill: "currentcolor" }} // You can replace "currentcolor" with any specific color
									/>
									<circle
										id="_Inner-Path_"
										data-name="&lt;Inner-Path&gt;"
										cx="16"
										cy="13"
										r="4"
										style={{ fill: "none" }} // As specified by .cls-1, but now inline
									/>
							</svg>
							<label>Calgary, Alberta, Canada</label>
						</a>
					</div>
        </div>
      </div>
    </div>
		<Footer />
  </>
);


}

