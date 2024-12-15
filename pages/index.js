import { useEffect, useState } from 'react';
import Head from 'next/head';
import { supabase } from '../lib/supabaseClient';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import NewsFeed from '../components/NewsFeed';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('news_feed')
        .select('*')
        .order('date', { ascending: false }); // Sort by date descending

      if (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      } else {
        setPosts(data || []);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>blah148 - Home</title>
        <meta name="description" content="A portfolio site for blah148, showing music & other updates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="mainBody">
        <Sidebar />
        <div className="otherBody">
          <Header logoTitle="Home" />
          <Loader isLoading={isLoading} />
          {!isLoading && <NewsFeed posts={posts} />}
          <Footer />
        </div>
      </div>
    </>
  );
}

