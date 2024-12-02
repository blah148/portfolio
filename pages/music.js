import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Music.module.css';

export default function Music() {
  return (
    <>
      <Head>
        <title>Music | Mitchell Park - Portfolio</title>
        <meta
          name="description"
          content="Explore the music collection of Mitchell Park, including albums and recordings."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="mainBody">
        <Sidebar />
        <div className="otherBody">
          <Header logoTitle="SAMPLE, the music" />
          <div className={styles.musicContainer}>
            <iframe
              style={{ border: 0, width: '700px', height: '480px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=3627996754/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://blah148.bandcamp.com/album/the-bell-it-shines-like-gold-vol-1">
                the Bell It Shines Like Gold, Vol. 1 by Mitch Park / Blah148
              </a>
            </iframe>
						<div className={styles.spacer}></div>
            <iframe
              style={{ border: 0, width: '700px', height: '480px' }}
              src="https://bandcamp.com/EmbeddedPlayer/album=552292104/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://blah148.bandcamp.com/album/the-bell-it-shines-like-gold-vol-2">
                the Bell It Shines Like Gold, Vol. 2 by Mitch Park / Blah148
              </a>
            </iframe>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

