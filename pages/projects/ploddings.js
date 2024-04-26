import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './projects.module.css';
import ResumeExperienceLinks from '../../components/ResumeExperienceLinks';

export default function Ploddings() {

  const totalImages = 2;
  const imagesLoadedRef = useRef(0);
  const [isLoading, setIsLoading] = useState(true);

  // Handler for when an image finishes loading
  const handleImageLoaded = () => {
    imagesLoadedRef.current += 1;
    if (imagesLoadedRef.current === totalImages) {
      setIsLoading(false);
    }
  };

  // Error handler for image loading errors
  const handleImageError = (error) => {
    console.error('Image failed to load', error);
  };


  return (
    <>
      <Head>
        <title>Ploddings | Mitchell Park - Portfolio</title>
      </Head>
      <Header />
			<Loader isLoading={isLoading} />
			<div className="titleRow">
				<div className="titleMain">Ploddings</div>
				<div className="titleSecondary">Cultivating self-sustenance within the pre-war blues guitar community using digital tools</div>
			</div>
			<div className="imageRow">
				<Image 
					src="https://f005.backblazeb2.com/file/unique-files/portfolio-ploddings-featured-img.png" 
					alt="Profile Image" 
					width={995} 
					height={500}
					onLoad={handleImageLoaded}
					priority
				 />
				<Image
					src="https://f005.backblazeb2.com/file/unique-files/portfolio-ploddings-tile-background.png"
					alt="Background Image"
					width={2052} // Set the width of the image
					height={500} // Set the height of the image
					onLoad={handleImageLoaded}
					priority
				/>	
			</div>
			<div className={styles.mainContent}>
				<div className={styles.infoBox}>
					<div className={styles.infoBoxColumnOne}>
						<div className={styles.infoBoxColumnOneSection}>
							<h3>Deliverables</h3>
							<div>Stakeholder management. Website design.</div>
						</div>
						<div className={styles.infoBoxColumnOneSection}>
							<h3>Client</h3>
							<div>Mt. Zion Memorial Fund</div>
						</div>
						<div className={styles.infoBoxColumnOneSection}>
							<h3>Year</h3>
							<div>2024</div>
						</div>
					</div>
					<div className={styles.infoBoxColumnTwo}>
						<div className={styles.infoBoxColumnTwoHeader}>
						  <h2>Project Overview</h2>
						  <ResumeExperienceLinks column={false} companyWebsite="https://ploddings.com" referenceName="T. DeWayne Moore" referencePosition="Assistant Professor of History, Texas A&M University" referencePhone="1-615-663-7858" />
            </div>
						<p>Between two gulfs, atop one, a preservationist entity beliegered by financial straits, and atop the other, droves of individuals curious about American stringed-instrument playing, Ploddings is a structure that promotes the mutual support of these complementary entities, envisioning a self-sustaining coexistence in which they are united. </p>
						<p>Ploddings exists as a non-profit project, in which users pay for digital learning tools, such as stringed-instrument MIDI tablature of & slow-downer / pitch-shifter software</p>
					</div>
				</div>
<div className={styles.contentBody}>
<p>While the musical knowledge of how to play Purple Haze by Jimi Hendrix can be pin-pointed within every 2nd crevice of the internet, information that instils know-how to play My Buddy Papa Blind Lemon by King Solomon Hill, a recording whose mystery seems only outdone by its very author, is point-blank non-existent across the entirety of the internet.</p>
<p>Well.. that is when one doesn't consider Ploddings.</p>
<p>And that same pattern emerges for a dizzying number of other stringed-instrument songs; one feels a compulsion to de-mystify an obscure 100 year-old American folk recording, with a peculiar string-plucking pattern or unrecognizable instrument tuning, and not a hint of information can be found, save for Ploddings where it exists in full, and then some.</p>
<p>Of course, most people we cross paths at the supermarket or subway station have no need, nor any desire, to perform a niche fingerstyle & bottleneck slide artform that prevailed from the 1900s to largely the 1940s (hence the term of "pre-war" blues), however those who wish to learn it, much like a keen fly fisherman wishes to tie a complex lure, are often relentless in their curiosity, and Ploddings awaits their discovery.</p>
<p>To incentivize vagrant visitors to return, MIDI-tablature transcriptions (denoting the exact finger placements on stringed-instruments, as played on the various recordings) are displayed & playable as follow-along mp3-files at zero cost. To incentivize returning visitors to contribute a recurring fee of $5, virtual tokens are alotted to the user upon successful payment, usable towards the "unlocking" of the song library, where the unlocking of a song grants additional permissions such as: (i) MIDI-tablature downloadability, and (ii) a slow-downer / pitch-shifter tool. Therefore, one side of the aforementioned chasm is met; those curious of this yet more curious music use Ploddings as a tool to satiate their want to understand more. But what about the other side; how can Ploddings reach the architects of this scarred artform, helping to repay what is over-due?</p>
<p>To recirculate with greater efficiency the zeal of the Ploddings user, exchanged as USD, with the soil from whence the music originated, the wisest move, keystone of the project, was to appoint the Mt. Zion Memorial Fund For Blues & Justice, currently led by Dr. T. DeWayne Moore, as the direct recipient & controller of all Ploddings revenue. Since 1989, their work includes: (i) the erection of tombstones for musicians such as Belton Sutherland, Bo Carter, Sonny Boy Williamson II, Mississippi Fred McDowell, Memphis Minnie, Sam Chatmon, Elmore James, Charley Patton, Robert Johnson, and Frank Stokes; (ii) the preservation of historical sites; and (iii) the creation of memorials such as the Mississippi John Hurt museum.</p>

<p>As the custodian of Ploddings, I diminished my role to submitting on a monthly basis receipts of server, database, and data storage costs to operate Ploddings for reimbursement, with all net proceeds entrusted with the Mt. Zion Memorial Fund. </p>
<p>By exercising the option to relegate Ploddings as a non-profit entity, it unveils the following key benefits as if sprinkled with magical pixie dust. All I had to do was sacrifice my own localized, personal enrichment; this decision came with its mortal struggles, yet, having arrived at its present state my only regret is not having done this sooner.</p>
<ul>
  <li>Users gain trust, knowing their dollars are directly controlled by Mt. Zion Memorial Fund, repurposed for causes that they have indicated value towards by purchasing on Ploddings to begin with</li>
  <li>As the Ploddings webmaster, since I receive no monetary gain, my incentives are less inclined to conflict with either stakeholder: (i) the users or (ii) Mt. Zion Memorial Fund</li>
  <li>Mt. Zion Memorial Fund has greater reason to champion Ploddings, helping the project prevail amongst the community, as their incentives are strongly aligned with its success</li>
</ul>
<p>Given that the Mt. Zion Memorial Fund symbolizes the replenishing of the origins of American pre-war blues music, almost "to a tee", the mechanism that enables Ploddings to achieve its vision is actually complete; that is, a structure that efficiently facilitates an economic exchange between: (i) donor parties who wish to understand more about pre-war blues music and (ii) recipient parties who invented and originated the music. </p>
<p>Henceforth, my role is a straight-forward one; for users, upkeep the site and produce more transcriptions; for Mt. Zion, drum-up more awareness of Ploddings.</p>
<p>PS: My secret in this whole operation is that I consider myself the luckiest stakeholder of all. Not only do I get to interact with both the users & Mt. Zion Memorial Fund, which is a blast, but I get the priceless pleasure of, at the end of the day, being responsible to learn new songs on the guitar, for others.</p>
</div>
				</div>
      <Footer />
    </>
  );
}

