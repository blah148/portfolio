import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Bio.module.css'; // Importing styles

export default function Bio() {
  return (
    <>
      <Head>
        <title>blah148 - Words</title>
        <meta
          name="description"
          content="A summary of upbringing as well as music listened-to"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="mainBody">
        <Sidebar />
        <div className="otherBody">
          <Header logoTitle="Words" page_level={2} />
          <div className={styles['bio-content']}>
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
Shelves were scoured, from Walmart or Blockbuster or London Drugs, getting concert DVDs of: Led Zeppelin, the Song Remains the Same; Jimi Hendrix (1971); Stevie Ray Vaughan, Live in Montreux; B.B. King, Live with Jeff Beck; the Rolling Stones, Rock & Roll Circus, and others. Later with the guidance of local guitar teachers in Calgary, names such as Herb Ellis, Charlie Christian, Barney Kessel, Wes Montgomery, and Charlie Parker were added to the listening lists. East of the Sun, Charlie Parker; Four on Six, Wes Montgomery; Solo Flight, Stardust, Swing to Bop, Charlie Christian. Then, songs such as Billie Holiday’s Commodore Recording of Embraceable You; Indiana or Sweet Lorraine by Art Tatum. In the high school years, 2009 to 2012, there were names such as Lead Belly, Bessie Smith, Miles Davis, Blind Lemon Jefferson, Robert Johnson, on playback to and from school. Also, there was John Fahey; Impressions of Susan, How Green Was My Valley, Poor Boy, Transcendental Waterfall. There was wishing that Fahey was still alive.
            </p>
            <p>
							In 2011, there was the encounter of the string-snapping sound of Sam Chatmon; the video of Chatmon that was produced by Alan Lomax. That sound felt intoxicating. In a good way. In the best way possible. For Blah. There rose a need to find out where That Sound may stem from. Around that time, there was a torrent downloaded of Charley Patton songs, which came with it a lucky barnacle; a video of Bob Brozman in Hawaiian shorts & an aloha shirt, with a palm-treed National tricone guitar, playing a lick of the same category. There were song names such as Love My Stuff, Highwater Everywhere, Moon Going Down mentioned. Around that time, Blah was also trying to build a front socially, in Calgary, and would seek some refuge in the jam sessions of Calgary. The Wine-Ohs, and used to be Beat Niq. In the last years of the Beat Niq, seeing Don Thompson. Then Hal Galper. There was being in those parking lots in circles & having some youthful admiration for Miles. There was anger, moments of ecstasy, feeling at times lost, envying others. In parallel with the Tony Williams & Wilbur Ware, it was Willie Brown, M & O Blues; Skip James, Hard Time Killing Floor or .38 Special; Blind Willie McTell, Savannah Mama. But it was also Billie Holiday, I Cover the Waterfront; versions just before she died. And through this time, plenty of anger and envy, as it can be said again. Though, the respite was there at the Wednesday-night jam sessions at Wine-Ohs, driving downtown. Also the Friday afternoon jam sessions at Mount Royal University. There were the older musicians; some who seemed knowledgeable, others who seemed to vie for something that was not the music. And some musicians who were phenomenal. Dale J. 
						</p>
						<p>
		There was a lack of confidence to think if my opinions and tastes were valid. Dale was mostly talked ill of. Blah has seen that side of D. but in Blah’s opinion the music, that improvisation, those sounds, the visciousness, the ecstasy, the madness. Play anger, D. would say. Play madness, D. would say. Then he would tap on the table. Then he would talk about F7#11. Then a b13. Then progressions. He would show substitutions on 1-6-2-5s. And always he would remind of Miles, Trane, Jimi, Elvin, Chick Corea. And a reverence of Wayne. Also, then audio of Jay Dee would play from the computer speakers, and a noting of the teacher of the drums; the delays in between; the groove. Then, Blah would sheepishly bring up the blues & D. would respond quickly in noting “the 13-bar blues”, alongside stories of playing bass for certain players in the 1990s, with tones of squalor, that seemed that a curiosity of it may kill a cat. Leading to ever more curiosity. There was around this time, Fahey, Blind Joe Death, the earlier set of recordings; late 50s. In blah’s mind, Fahey should not have re-recorded this album in 1967. Though that 1967 version of Poor Boy Long Ways From Home is a fine recording. As is the song, “I’m Going to Do All I Can For My Lord”. The song “In Christ There Is No East or West” is good from the 1967 album also, in Blah’s view. At this time, also Blind Willie Johnson. And yet also Louis Armstrong, the early 1930s recordings. And that black L-00, 1932. It had that sound. Always felt awed by the sound it would produce. It was magical. Those notes - it would hold them forever it seemed. For context, during these years there was not much love to be found in a partner. And less intercourse. 

						</p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

