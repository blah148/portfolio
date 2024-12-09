import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Music.module.css';

export default function Music() {
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
          <Header logoTitle="music" />
<iframe width="560" height="315" src="https://www.youtube.com/embed/OkHjpWFCMpY?si=aUoPS2PpsnGaLL5r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<div style={{ marginBottom: '20px' }}></div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4jHJZXOAer8?si=tJ6lvk-ZpiwFbtOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <Footer />
        </div>
      </div>
    </>
  );
}

