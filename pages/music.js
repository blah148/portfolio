import { useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabaseClient';
import Loader from '../components/Loader';
import MusicFeed from '../components/MusicFeed';
import styles from '../styles/Music.module.css';

export default function Music() {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMusic = async () => {
      const { data, error } = await supabase
        .from('music')
        .select('*')
        .order('date', { ascending: false }); // Sort by date descending

      if (error) {
        console.error('Error fetching music data:', error);
        setIsLoading(false);
      } else {
        setTracks(data || []);
        setIsLoading(false);
      }
    };

    fetchMusic();
  }, []);

  return (
    <>
      <Head>
        <title>blah148 - Music</title>
        <meta
          name="description"
          content="Selected recordings of blah148"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="mainBody">
        <Sidebar />
        <div className="otherBody">
          <Header logoTitle="music" page_level={2} />
          <Loader isLoading={isLoading} />
          {!isLoading && <MusicFeed tracks={tracks} />}
          <Footer />
        </div>
      </div>
    </>
  );
}

