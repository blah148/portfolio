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
					onLoadingComplete={handleImageLoaded}
				/>
				<Image
					src="https://f005.backblazeb2.com/file/unique-files/portfolio-algaecal-tile-background.png"
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
            <p>The boss told me, "get that account over $15,000 per day with a 1.4 return-on-ad-spend." I'll be honest, there were times when that roller-coaster got me nauseous, but lo and behold, with the help of: (i) landing page split-testing, (ii) ad-creative planning, (iii) reworking of the ad campaign technicalities, and (iv) tracking the important metrics, the account surpassed the objective, surpassing half-a-million per-month of ad-spend with the target ROAS in tact. </p>
					</div>
				</div>
<div className={styles.contentBody}>
<p>Stepping into the Meta Ads Specialist role, the account was up against a peculiar glass ceiling, where it simply couldn't get past about $12,000 of ad-spend per day; either the return-on-ad-spend (ROAS) would falter, or the assigned budgets simply wouldn't maximize.</p>
<p>We flanked the issue from 4 fronts; the ad campaign setup, the creative, the analytics, and the landing page A/B testing. To reach the goal of scaling by at least 25% (from $12k to $15k), the improvements couldn't come from just 1 area, while maintaining the status quo elsewhere. Otherwise I knew & the team knew that the familiar failure-point of an equivalent drop in ROAS was all too possible. Instead, by boosting these multiple fronts, at least we could sleep soundly, knowing that everything was "left on the court".</p>
<p>My core duty involved the actual Meta Ads account; that was front #1 to tackle. To nullify the possibility that the limitation in ad-spend was due to a lack of audience-size, I spent time profiling the avatar of our ideal customer. Selling vitamins to maximize bone-health, that meant women primarily aged over 40-50 years of age in our primary market of the USA. Then, keeping in mind the health-related targeting parameters of Meta's advertising policies, I built audiences that ranged from bullseye keywords, such as "osteopath", but also peripheral interests such as "Oprah" or "grandparenting", layering various interests upon each other for different combinations. Moreover, using the extensive audience lists of the 1000s of past customers, I created various look-alike segments, from "past buyers" to "site visitors in the last 10 days", creating a myriad of different permutations & lookback windows, in reference to the seed audiences. And that was only 1 facet of the ad account; the prospecting audience. The account was organized into 3 broad categories of: (i) prospecting, (ii) retargeting, (iii) past buyers, each with their own characteristics & processes . Moreover, I was always trying to test different conversion objectives, campaign types, and bidding strategies, which was actually possible due to the sheer size of the account & the data that the Facebook pixel collected over time.</p>
<p>The ad-creative was another crucial aspect to the account's success. There were 2 excellent individuals on the ad-creative team, whose job was primarily to create videos & still images for the Meta Ads account. Furthermore, an experienced direct-response copywriter was on-call to stir-up witty copy, while obeying Meta's various ad policies. To scale an account to half-a-million per-month, it takes a closely-knit team, and I learned that especially in February of 2019. Our videographer filmed a Valentine's day ad, featuring a doctor who endorsed the product, as well as his wife whose an activist & author for women's health. The night before Valentine's day, I published the ads, closing my laptop & leaving the office with the ads still processing under Meta's review system. It was quite literally like night & day; the next day, the ROAS of the ad account spiked by almost 200%; it was unusual to see a 2.1 ROAS across all the cold traffic campaigns, yet that is what happened. The only variable that had changed was that single video ad. While its performance decayed as any ad decays over time, we used it with success for months afterwards. In this arena of change, my role was in communicating to the creative team, giving them constant feedback of results, good or bad, so they could thrive in their creativity to provide results like they did that February.</p>
<p>There was a week when company owner gave every employee a copy of "Measure What Matters" by John Doerr, instilling the core concept that 'unless it's measurable, it won't grow'. Since growth was the primary objective with the Meta Ads account, I did everything I could to ensure the analytics were tuned just right. In fact, every Wednesday there was a touchpoint meeting that I led, informing the marketing team about the diagnostics of our largest-spending paid advertising channel. The meeting evolved, and after receiving feedback from others, it reached a steady-state of presenting a Google Data Studio dashboard, displaying: (i) overall account metrics, (ii) prospecting metrics, (iii) retargeting metrics, and (iv) past buyers metrics. Within those categories, key performance indicators such as the ROAS, drop-off rates at various stages of the customer journey, and performance for the different creative elements were shown. It was so important to have a keen sense of why the account performed good or bad; was it due to a certain targeting strategy, was it solely coming from past buyers, did it come from a particular video ad? Given that excellent tracking is a hallmark of digital vs. traditional advertising, it was crucial to the success of the team to get clean and reliable data, day-in and day-out.</p>
<p>Last but definitely not least, modifications to the Meta Ads landing pages were absolutely crucial to the success of the campaigns. Being closest to the operations of the Meta Ads account, I was tasked with brainstorming split-test ideas to improve results, then tracking the statistical significance of those A/B tests within Google Optimize. There is 1 experiment I'll never forget. You know those online sales page, where there's a sticky "buy now" button at the bottom of the screen? Well, this experiment involved that simple page element. Would conversions increase if we added that to our long-form sales page (it was multiple scrolls long). So the experiment was setup. Day-after-day, week-after-week, the experiment ran, and the results were fascinating. Ultimately, for our cold/prospecting audiences, it <i>hurt</i> conversions by roughly 15%. However, for our warm/retargeting audiences, it <i>helped</i> conversions by about 20%. And all those results were statistically significant with a 95% confidence level. It was an awesome example of how real digital marketing data can reveal details of consumer behavior that nobody can easily guess before seeing the results.</p>
<p>I will always cherish the fast-paced months of marketing education that I received at AlgaeCal, working shoulder-to-shoulder in the marketing team's room everyday. With those 4-pronged improvements, by April & May of 2019, the account was averaging over $15,000 per day, & by July it reached well over half-a-million in ad-spend that month. It was a cherry on top that our Facebook account advisor invited the Meta Ads team to the Meta office in Austin, Texas as thanks for the company's business. I will remember it for those nuggets of learning such as the serendipitous ad in February of 2019 & the sticky button split-test that taught me how online marketing can be full of surprises.</p>
</div>
				</div>
      <Footer />
    </>
  );
}


