// pages/music.js

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabaseClient';
import Loader from '../components/Loader';
import Content from '../components/Content';

export default function Music() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initial loading state
  const [isLoadingMore, setIsLoadingMore] = useState(false); // Loading more posts state

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('content')
        .select('*, tags(name, hyperlink)') // Assuming you want tags here as well
        .order('date', { ascending: false }); // Sort by date descending

      if (error) {
        console.error('Error fetching content:', error);
        setIsLoading(false);
      } else {
        setItems(data || []);
        setIsLoading(false);
      }
    };

    fetchContent();
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

          {/* Loader: Show during initial load or when loading more posts */}
          {(isLoading || isLoadingMore) && <Loader isLoading={true} />}

          {/* Render ContentFeed when not initial loading */}
          {!isLoading && (
            <Content 
              contentItems={items} 
              filterTagId={2} 
              setIsLoadingMore={setIsLoadingMore} 
            />
          )}

          <Footer />
        </div>
      </div>
    </>
  );
}

