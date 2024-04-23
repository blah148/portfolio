import Image from "next/image";
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
      <Header />
			<Loader isLoading={isLoading} />
			<div className="titleRow">
				<div className="titleMain">Membership website</div>
				<div className="titleSecondary">I coded a membership website teaching pre-1940s blues guitar, with all proceeds controlled by a charitable organization.</div>
			</div>
			<div className="imageRow">
				<Image 
					src="https://f005.backblazeb2.com/file/unique-files/portfolio-ploddings-featured-img.png" 
					alt="Profile Image" 
					width={995} 
					height={500}
					onLoadingComplete={handleImageLoaded}
				 />
				<Image
					src="https://f005.backblazeb2.com/file/unique-files/portfolio-ploddings-tile-background.png"
					alt="Background Image"
					width={2052} // Set the width of the image
					height={500} // Set the height of the image
					onLoadingComplete={handleImageLoaded}
				/>	
			</div>
			<div className={styles.mainContent}>
				<div className={styles.infoBox}>
					<div className={styles.infoBoxColumnOne}>
						<div className={styles.infoBoxColumnOneSection}>
							<h3>Deliverables</h3>
							<div>Fundraising. Full-stack development. Content creation. SEO.</div>
						</div>
						<div className={styles.infoBoxColumnOneSection}>
							<h3>Client</h3>
							<div>Ploddings</div>
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
            <p>On one cliff-side, the Mt. Zion Memorial Fund, a historical site preservation effort in the American South, was in need of funding; on another cliff-side, an eager audience of pre-1940s style blues musicians sought niche learning content. I built a bridge facilitating the connection of those two entities.</p>
            <p>The project involved the creation of a CMS-free website using NextJS & PostgreSQL, capturing membership revenue incentivized by custom-build content, funneling that revenue directly into the sole control of the Mt. Zion Memorial Fund. The project involves many applicable modern web design features, such as: (i) passwordless login using the SendGrid API to email login codes, (ii) an Audible-esque token system that dispenses monthly credits, able to be spent on site products, (iii) usage of Google on-page SEO standards & schema, and (iv) a custom-built tracking system that renders no need for 3rd-party cookies such as Google Analytics.</p>
					</div>
				</div>
<div className={styles.contentBody}>
<p>Ever since feeling spellbound by the sounds of Nirvana, then Led Zeppelin, then Jimi Hendrix, then Chuck Berry, and then the likes of Robert Johnson, the rabbithole of guitar history, intertwined with the hypnotizing rhythms played by these rambling musicians really resonated for me. After a brief experience posting long-form tutorials of note-for-note pre-1940s style blues guitar on Youtube during my university years (discussed in greater length on the About page), I knew I wanted to give back to this music that had given me so much joy.</p>
<p>I started Ploddings off & on in December 2018, beginning with a hunt for one of the last unused one-word domains that kind of was at least a commonly used word; at the time, there less than about 1,000 unused one-word domains in circulation. Ploddings was available & seemed fitting; I recall a friend of mine, as we were scaling a Rocky Mountain peak, noticing I was out of breath having a tough time; he told me it's easier if you just "plod along". It helped, and I like how it characterizes the mountain-peak-like conquest of an instrument also, which is what Ploddings is about.</p>
<p>The economic function that Ploddings offers is: (a) in redistributing wealth from various Americana-enthused stringed-instrument players to, (b) the historic preservation sites & families from whence it all came. My job is in: (i) upkeeping the site operations, (ii) organizing the stakeholders, and (iii) generating content that incentivizes membership payments which is controlled by a rotation of charitable foundations, currenly the Mt. Zion Memorial Fund.</p>
<p>Built with NextJS & PostgreSQL, I have deployed the site using Render.com for CMS-free hosting, and Supabase for data storage. This low-level, developer approach means that: (a) the costs of operating the site are nearly free, compared to using 3rd-party tools such as Wordpress or Webflow; (b) there are no CMS-limitations in the web design.. any components that come to mind, from a token-system to unlock content, to passwordless login, to retrieval of data from Supabase based on intricate data values are possible; (c) the JavaScript allows for client-side or server-side rendering, making for the modernized feel where one doesn't see those prolonged blank-white pages as a new-page loads.</p>
<p>As a website that posts note-for-note transcriptions (ie. sheet music notating the exact notes a musician plays on a recording) of seminal pre-1940s era recordings, it seemed sensible to adopt an Audible-esque monetization scheme, where successful monthly membership fees trigger a dispensing of unlock-tokens that can be spent on any songs. This undertaking implied various functionalities, including: (i) a notifications dropdown to mass communicate with users about their tokens & account settings, (ii) general UI updates that display their tokens, (iii) hooking-up to the Stripe API to trigger automatic token generation upon successful payments, (iv) the actual unlocking of the content if tokens are spent, and (v) the storage of user data in case they spend their tokens. Of course, most of that happens behind the scenes. Instead, I wanted the platform to feel like a magical carnival where users feel a dopamine-hit when they see their spendable tokens and have a sense of ownership when they use those tokens towards unlockable content.</p>
<p>Another feature in the web design that I love is the passwordless login. I knew that users could create a password, and that the password could be hashed in Supabase for safe storage, but it seemed too old-school this way. In the more modern style, where users are emailed a login code, it nails lots of birds with a single stone: (i) it verifies their email address, since they would have to use a real email address to login; (ii) not even I, as the site admin, could login as another user, since I can't access their email inbox; and (iii) it also makes their accounts safe from other malicious users. It was another facet in the design that would not have been possible using Wordpress or Webflow.. if it is possible, it probably would have meant a costly $100 plugin or SaaS fees. By using NextJS, it's free as long as you code it yourself! The construction was pretty straight-forward using the SendGrid API to hook-up to Supabase, with NextJS facilitating how they talk to each other.</p>
<p>You know how so many sites nowadays are legally bound to ask visitors to accept cookies? Most of those cookies are due to 3rd-party tracking software, such as Google Analytics, the Meta Ads pixel, or different types of click/scroll trackers. Those external companies need the data packaged up into a cookie to save in their far-away databases. But with a 1st-party tracking system, no cookies are even needed. That's how it is with Ploddings. For each page-load, I trigger the creation of a database entry in a table entitled "visit_history" that stores the ip address of the user, a timestamp, and the URL they visited. Since my primary key performance indicator is page views, this database table getting filled up is all I need to get that bird's-eye view, in addition to geography data from the IP address. It's also made available to users, since they can see their last 4 content page-views, to help with their navigation of the site. On top of this, NextJS has built-in libraries for tools akin to HotJar that track the clicks/scrolls of user journeys, but it hasn't been something that I have employed yet.</p>
<p>Well, that touches on the web design & development sides of Ploddings, but what about the actual reason why people visit the site? This is the fun part for me; the content planning & creation. One superpower I have is in the patience to transcribe a stringed-instrument part of a recording. That means slowing it down to 25%-50% speed, and notating every beat of every note, even the mistakes (usually)! Those are packaged into a playable MIDI-file, using MuseScore, of sheet music called tablature, which musicians can use to figure out how to play songs. While there are plenty of big-name websites that have MIDI-tablature for popular songs such as Come Together or Stairway to Heaven or Purple Haze, there are zero sites (apart from Ploddings of course) that have such detailed resources for songs such as Crossroad Blues by Robert Johnson or Cincinatti Flow Rag by Reverend Gary Davis.</p>
<p>Then, the question might be, "why would users feel incentivized to unlock songs?" That's where the member-only functionalities play-in. If a member spends a token, unlocking a song, they can: (a) download the PDF sheet music, and (b) use the on-page slower-downer & pitch-shifter tool for the original recording that really helps to ingrain the tune. That being said, visitors can still view the embedded tablature at no charge, which helps to proliferate the website during this stage of growth. Plus, the ultimate goal of Ploddings is to make this music more prevalent, and slashing its exposure through content-blocking poses a conflict-of-interest that I must carefully weigh as the site administrator.</p>
<p>Possibly the most important aspect of Ploddings is its relationship with, currently, the Mt. Zion Memorial Fund. It's an organization with charitable status, certified by the IRS, that has helped in beautiful ways, from erecting tombstones for musicians such as Robert Johnson & Charley Patton, and also creating venues such as the Mississippi John Hurt historical site. Eliminating any middle-man conflict as the site administrator, every cent of site revenue is controlled by the Mt. Zion Memorial Fund. From there, I submit receipts of the miniscule operational costs, such as database fees, cloud storage fees, and domain fees, which are reimbursed on a monthly basis. This setup has so many benefits such as: (i) ensuring my incentives are towards the betterment of the website & overall community, instead of focused on profit maximization; (ii) it contributes to a cycle of sustainability for the blues artform itself; (iii) it encourages members to become evangelists for Ploddings, since it's towards a sound cause; (iv) it selfishly enriches my life because I get talk on the phone & meet with many pillars of the blues community across the globe.. plus it's a cool project to add to the resume; and (v) it accomplishes a goal of mine to intertwine music into the responsibilities of my daily life, allowing me to improve & learn with each transcribed song.</p>
<p>I never would have realized how much the Ploddings project would have truly meant its name, actually plodding along amidst the uncertain future. It's a project like the rings of a true, where I can recall early iterations on Squarespace, then Wordpress, then Webflow, and now custom-coded with JavaScript & HTML/CSS. There has been the tumult of managing users, their feedback here & there, their account issues on different browsers, and the rest of what comes with running a project such as this. In fact, oftentimes the actual music transcription for content generation has been the "vacation time" of it all. And yet through it all I've loved every moment of it and have learned so much that I can't wait to apply to new projects in the future. </p>
</div>
				</div>
      <Footer />
    </>
  );
}

