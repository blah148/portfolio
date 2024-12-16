import { useEffect, useState } from 'react';
import Head from 'next/head';
import { supabase } from '../lib/supabaseClient';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

export default function HomePage() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('content')
        .select('*')
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
        <title>blah148 - Home</title>
        <meta name="description" content="Website attempting to summarize musical projects of blah148, touching also on commentary." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="mainBody">
        <Sidebar />
        <div className="otherBody">
          <Header logoTitle="Home" />
          <Loader isLoading={isLoading} />
          {!isLoading && <Content contentItems={items} />}
          <Footer />
        </div>
      </div>
    </>
  );
}

