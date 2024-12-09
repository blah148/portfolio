import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Bio.module.css'; // Importing styles

export default function Bio() {
  return (
    <>
      <Head>
        <title>Bio | Mitchell Park - Portfolio</title>
        <meta
          name="description"
          content="Learn more about Mitchell Park's journey, background, and musical achievements."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="mainBody">
        <Sidebar />
        <div className="otherBody">
          <Header logoTitle="SKIM, the bio" />
          <div className={styles['bio-content']}>
            <h2>Introduction</h2>
            <p>
              Blah was born in the economic boom years of the 1990s in Alberta, Canada. 
              As a second-generation Korean-Canadian, Blah was steeped in the cultures of Asia & North America. 
              At 11 years old, in 2005, the guitar was taken up. The last hurrah of the guitar magazine industry made its mark on him; 
              the Steve Vai cover shots; the Joe Perry interviews; the Stratocaster advertisements; and the Jimi Hendrix tribute articles. 
              It was also the time of Ozzy Osbourne’s Family Jewels and Gene Simmons’ School of Rock show. 
              Bands such as Pearl Jam, still touring; luminaries such as Les Paul & B.B. King & Chuck Berry were present at that time.
            </p>
            <p>
              The days of Limewire, iPods, iTunes, and PirateBay made the exploration— 
              noticing a name like Kurt Cobain, tracing his influence back to Jimi Hendrix, 
              and tracing his influence back to B.B. King or Buddy Guy, and so on—an easier task; 
              there was no need to leave the computer chair. It also made the geographical and cultural barriers more permeable, 
              to access a largely African & African American rooted music.
            </p>
            <p>
              Shelves were scoured, from Walmart or Blockbuster or London Drugs, getting concert DVDs of: 
              Led Zeppelin, the Song Remains the Same; Jimi Hendrix (1971); Stevie Ray Vaughan, Live in Montreux; 
              B.B. King, Live with Jeff Beck; the Rolling Stones, Rock & Roll Circus, and others. 
              Later with the guidance of local guitar teachers in Calgary, names such as Herb Ellis, Charlie Christian, 
              Barney Kessel, Wes Montgomery, and Charlie Parker were added to the listening lists.
            </p>
            {/* Additional paragraphs from your provided text */}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

