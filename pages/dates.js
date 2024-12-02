import { supabase } from '../lib/supabaseClient';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Dates.module.css'; // Create this file for specific styles

export default function Tour() {
  const [tourData, setTourData] = useState([]);

  useEffect(() => {
    // Fetch tour data from Supabase
    const fetchTourData = async () => {
      const { data, error } = await supabase
        .from('tour')
        .select('*')
        .order('date', { ascending: false }); // Fetch tours in descending date order

      if (error) {
        console.error('Error fetching tour data:', error);
      } else {
        setTourData(data);
      }
    };

    fetchTourData();
  }, []);

  return (
    <>
      <Head>
        <title>Mitchell Park | Tours</title>
        <meta
          name="description"
          content="Explore past tours and performances of Mitchell Park."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <div className="mainBody">
        <Sidebar />
        <div className="otherBody">
          <Header logoTitle="SEE, performance dates" />
          <div className={styles['tour-content']}>
            {tourData.length === 0 ? (
              <p>No past performance dates</p>
            ) : (
              <ul>
                {tourData.map((tour) => (
                  <li key={tour.id}>
                    <strong>{tour.date}</strong>: {tour.city}, {tour.state_province}, {tour.country} at {tour.time}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

