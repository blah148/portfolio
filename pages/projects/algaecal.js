import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './projects.module.css';
import ResumeExperienceLinks from '../../components/ResumeExperienceLinks';

export default function AlgaeCal() {

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
				<title>AlgaeCal | Mitchell Park - Portfolio</title>
			</Head>
			<Header />
			<Loader isLoading={isLoading} />
			<div className="titleRow">
				<div className="titleMain">Fully-scaled supplement business</div>
				<div className="titleSecondary">I inherited the reins of their largest paid advertising channel: Meta Ads, also leading split-tests for that traffic stream.</div>
			</div>
			<div className="imageRow">
				<Image 
					src="https://f005.backblazeb2.com/file/unique-files/portfolio-algaecal-featured-img-500h.png" 
					alt="Profile Image" 
					width={995} 
					height={500} 
					onLoad={handleImageLoaded}
					priority
				/>
				<Image
					src="https://f005.backblazeb2.com/file/unique-files/portfolio-algaecal-tile-background.png"
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
							<div>Paid advertising. Tracking & analytics. A/B testing.</div>
						</div>
						<div className={styles.infoBoxColumnOneSection}>
							<h3>Client</h3>
							<div>AlgaeCal</div>
						</div>
						<div className={styles.infoBoxColumnOneSection}>
							<h3>Year</h3>
							<div>2019</div>
						</div>
					</div>
					<div className={styles.infoBoxColumnTwo}>
						<div className={styles.infoBoxColumnTwoHeader}>
							<h2>Project Overview</h2>
							<ResumeExperienceLinks companyWebsite="https://www.algaecal.com/" referenceName="Philip Jordan Wong" referencePosition="Director of Acquisition" referencePhone="1-403-819-3912" column={false} />
						</div>
						<p>Like hopping onto a fast-moving freight train, AlgaeCal was my first professional foray into the digital advertising sphere. One month into the job, having relocated to balmy Vancouver, the Meta Ads account became my sole responsibility; it was already spending, on average, $10k to $12k of ad-spend per-day! Talk about hitting the ground sprinting.</p>
						<p>In the midst of a growth-spurt, AlgaeCal, a Vancouver-based supplement company, couldn't seem to hire fast enough, finding a profitable groove in ; in October of 2018, I joined as a newcomer. Their niche was in </p>

						<p>Trying to manage a growth-spurt, AlgaeCal couldn't seem to hire fast enough to satisfy demand for its vitamin supplements </p>

						<p>Trying to manage a revenue growth-spurt, equalled only by the growth in bone density its supplements offered, AlgaeCal could not seem to hire fast enough in late-2018. The sudden influx came largely from its Meta advertising, which started from virtually $0 in 2017, and reached $10,000 of daily ad-spend by late-2018. Like rising tide, the lead generation & brand awareness which this sizeable Meta Ads spend introduced led to flywheel-like growth for AlgaeCal's Google & Amazon product placements, as well as its burgeoning call centre.</p>
						<p>Rewarded for his tenacity in spearheading the Meta Ads effort, Philip Wong was being promoted as the head of AlgaeCal's marketing division, leaving big shoes for somebody to fill. That somebody turned out to be me!</p>
						<p>Fresh as a mechanical engineering graduate, I greenly steeped myself in the lingo of a digital marketer, diving headlong into books, podcasts, video tutorials, gaining an understanding of acronyms like CPC, CPL, CPA, ROAS, as well as terms such as funnel, landing page, and A/B testing. I had no choice but to rely on my pre-existing technical education, fusing it with this newfound field. I made sense of terms such as CPL with dimensional analysis, as taught in high school chemistry, and envisaged a profitable marketing funnel as a gasoline engine with variable inputs, outputs, and efficiencies to optimize.</p>
						<p>My given North Star was as simple in definition as it seemed challenging in execution; namely, to scale the Meta Ads account from its then steady-state of $10,000 of ad-spend per-day, to over $15,000 per-day, yet maintain the same return-on-ad-spend (ROAS) on a monthly-basis. As anyone can imagine, it's not terribly difficult to open the spending valve, but typically there's a proportional, if not more severe, loss in ROAS efficiency. Not to mention, in late-2018, the Meta Ads platform, and digital attention overall, was quickly becoming more competitive. If that wasn't enough, Meta was already on its heels for privacy concerns at that time, and was rolling back the ability for marketers to target users based on health terms, which was crucial for AlgaeCal. I wondered if this $0 to $10,000 success was a flash-in-the-pan, and I was accepting the reins at a negative inflection point. My job was on the line, and while I couldn't control Meta or users' willingness to buy, I knew I could control my preparation & effort. So I created a plan to optimize: (i) ad campaign setup and (ii) the landing page, knowing I would be getting lots of support from the creative team to build awesome ads.</p>
						<p>The ad campaign setup carried lots of "to-do" cargo, like immersing oneself into the ideal customer avatar, consulting with AlgaeCal's Meta Ads representative for strategy, collaborating with Phil, my manager, and most of all lots of rapid-fire testing. At 3pm in the afternoon in the marketing room, where we all sat shoulder-to-shoulder, I could be found building out new audiences, researching potential peripheral interests of the customer demographic, amalgamating ads (the creative, the copy, the targeting) to be launched that evening, diagnosing why certain campaigns ceased to spend, or trying to quickly improve campaigns that needed more attention. The large-scale ad-spend was a positive in that experimentation was met with fast results; the feedback loop was tight & I tried to use that to my advantage to ride-out the good & weed out the bad.</p>
						<p>Just as vital to the health of the Meta Ads account was the landing page performance. It was apt that the AlgaeCal CEO had everyone read the John Doerr book, Measure What Matters, instilling the idea that "without measurement, it won't grow". Part of my daily responsibilities included carefully testing the landing page tracking, whether it was button clicks, page views, bounce rates, and so on, allowing the conditions to improve its performance. Plus, that set-up the ability for split-test experiments that I managed via Google Optimize, ensuring statistical significance with each landing page modification. A teacher of mine once said, "it's amazing how data can lead to counter-intuitive results," and that was true at AlgaeCal. One experiment that sticks with me is adding a sticky "buy now" button that followed-along with user-scrolling along the bottom of the sales page. For new visitors, the button <i>decreased</i> conversion rates by about 15%, but for retargeted visitors, the button <i>increased</i> conversion rates by approximately 20%. With optimization after optimization, the conditions to reach the target of $15,000 of ad-spend per day, profitably, was soon reached.</p>
						<p>Another key aspect to reaching the $15,000 per-day target was receiving quality ad-creative. I reported on the Meta Ads account in a weekly touch-point meeting with the marketing team, outlining what worked, what didn't work, with lots of data visualizations displaying key performance metrics. That helped the creative team iterate their designs, as it showed them their results, while maintaining their creative freedoms to do what they do best. I will not forget one particular ad they produced in February of 2019, for Valentine's Day, that was a stark hit, vaulting the ROAS for multiple weeks to an exhorbitant 2.0 & above, for cold traffic. It was an education for me in understanding how crucial ad-creative is for digital campaigns.</p>
						<p>Bye & bye, the glorious time came when the Meta Ads account was indeed spending greater than $15,000 per-day with its target ROAS in tact. Furthermore, it exceed this target, spending approximately $16,000 to $19,000 per-day, 7-days-per-week. I felt proud to have been at the driver's seat through this Meta Ads account's 'second-wind', and credit my colleagues for their tireless support & guidance throughout the way, from the creative team's excellent ads to my manager's advice when we had tumultuous weeks. It's an experience I am grateful for, educating me in the uncertain yet equally exciting terrain of at-scale digital advertising-driven corporations.</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);


}


