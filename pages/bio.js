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
              The blues guitar player, Mitch Park, or Blah148, is Alberta born & raised,
              currently residing in rural Alberta. His main achievements include:
              (i) ongoing research of American blues & folk forms, now in partnership
              with the Mt. Zion Memorial Fund; (ii) graduation from a Canadian
              undergraduate bachelor of mechanical engineering program; and
              (iii) releasing two volumes of musical recordings, under the project title
              of “the Bell It Shines Like Gold”.
            </p>

            <h2>Background</h2>
            <p>
              The Korean roots were replanted in the 1970s and 1980s, when Park’s
              mother & father’s sides immigrated to Massachusetts, USA and Alberta,
              Canada, leaving behind the civil war wearied Koreas for brighter futures
              in the Americas. This transition was followed by Park’s upbringing in the
              1990s & 2000s, amidst the upheaval of an analog world to a digital world.
            </p>

            <h2>Upbringing</h2>
            <p>
              The digital world was & remains aiding for Park to communicate with
              musicians across great distances. An example includes two years of study
              with the jazz guitarist Dan Wilson, from 2020 to 2021. It has helped to
              overcome regional, cultural, and epochal barriers to access African-American
              blues music as a millennial Canadian. Digital audio tools also helped in
              Park’s upbringing to parse & analyse folk music patterns and forms. It was
              in 2005 that Park started to play the guitar.
            </p>
            <p>
              This digitization is lamented, though, by Park for the withering of the
              musician’s way of life; the ability to duplicate an audio track ad infinitum,
              the accessibility of past music, and the ease to publish new music has
              resulted in a practically infinite supply that he believes has reduced the
              value of recorded music to pennies. The cheapness in digital chips versus
              the premium of analog parts has led to a lesser quality in sound-making tools.
              Then, more widely, in these current years, the masters of the music have
              passed on relentlessly.
            </p>

            <h2>Schooling</h2>
            <p>
              The Korean culture values practical schooling, and in these footsteps Park
              followed with a degree in mechanical engineering, from 2013 to 2017.
              Topics that Park carried with him include: (i) the design process of building,
              testing for failure, and rebuilding; (ii) the strangeness of the real world,
              such as the discrete changes into turbulent flow of water; and (iii) concepts
              of superposition, namely multiple variables mixing together to produce a
              single response.
            </p>

            <h2>Blues music</h2>
            <p>
              In & around those school-time years, Park began analysing American blues
              music in 2011, which remains in progress today. The medium & distribution
              platform began with: (i) videos on Youtube, from 2011 to 2019;
              (ii) videos on the Ploddings website from 2020 to 2023; and (iii) now
              MuseScore transcriptions on the Ploddings site since 2024.
            </p>
            <p>
              Park notes the following takeaways of African-American blues music, as
              well as jazz music. Firstly, the pains of life in this world, exacerbated by
              slavery, have given rise to a magical artform, resulting in sounds that seem
              to penetrate the perceived limitations of reality. Secondly, the music
              contains improvisations along several ‘axes’, such as tempo, pitch, rhythm,
              anger vs gladness, evil vs goodness, riding the advantages of the
              subconscious, allowing for unexpected outcomes; a neverness of playing
              the same thing twice. Thirdly, that it is an artform of infinite layers, yet
              presents in a subtle simplicity; which carries with it a richness that
              outweighs the vastest stockpiles of gold, yet is immaterial; which grants
              the rolling down of tears, yet reveals a cleaned face & a calmed spirit.
            </p>

            <h2>Livelihood</h2>
            <p>
              Park is a clerical worker within Alberta’s provincial court system. The job’s
              union-enforced boundaries allow for a balancing of work & personal life,
              permitting the pursuit of activities such as music study & recording. The
              role offers stability, helping to tread along a long-term path of exploring
              music. The perspective it offers in peering into many walks of life can
              provide energy to produce music.
            </p>
            <p>
              In a life with a day-job, there are limitations, such as travel for the purposes
              of music performance. The remoteness of the rural location can offer less
              opportunities compared to an urban location. Next, the parsing through &
              learning of the court’s ad hoc mechanisms can divert a musician’s attention.
            </p>

            <h2>The future</h2>
            <p>
              A musical objective of Mitch Park includes the ongoing release of recordings;
              the Bell It Shines Like Gold, Volume One & Two (2024) have been published,
              and Volume Three will follow. The fine-tuning of guitar teaching methods is
              another objective that he tries to hone as a local guitar instructor at a town
              music studio. As well, fundraising for the Mt. Zion Memorial Fund is a
              continued objective, distributing transcriptions of old-time American blues
              recordings on Ploddings.
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

