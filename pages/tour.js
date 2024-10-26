import { supabase } from '../lib/supabaseClient';
import Head from 'next/head'
import { useState, useEffect } from 'react';

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
    <div>
      <Head>
        <title>Mitchell Park | Portfolio</title>
        <meta name="description" content="Portfolio of Mitchell Park" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <h1>Past Tours</h1>
      {tourData.length === 0 ? (
        <p>No past tours available.</p>
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
  );
}

