import Head from 'next/head';
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './ContactForm.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Mitchell Park - Portfolio</title>
        <meta
          name="description"
          content="Get in touch with Mitchell Park through mail for inquiries or project discussions. Details for sending physical mail included."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <div className="mainBody">
        <Sidebar />
        <div className="otherBody">
          <Header logoTitle="WRITE, a 'hello'"/>
          <div className={styles['contact-content']}>
            <Loader isLoading={false} /> {/* Removed conditional loading */}
            <div className={styles.formBox}>
              <p>
							  For inquiries or general correspondence, the mailing address below is an active inbox.  	
              </p>
              <div className={styles.contactDetails}>
                <p>Mitchell Park</p>
                <p>PO BOX 99900 SG 593 103</p>
                <p>St Paul, AB T0A 0E5</p>
                <p>Canada</p>
              </div>
              <p>
								 Note: if other methods of a response are not specified, the 'from' address of the received mail may be used to express a reply.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

