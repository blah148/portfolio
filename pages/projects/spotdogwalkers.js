import Image from "next/image";
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import Loader from '../../components/Loader';
import { useLoading } from '../../context/LoadingContext';
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
				<div className="titleMain">Local dog walking app</div>
				<div className="titleSecondary">I revamped their SEO, deployed a new email automation flow, and operated their paid advertising.</div>
			</div>
			<div className="imageRow">
				<Image 
					src="https://f005.backblazeb2.com/file/unique-files/portfolio-spotdogwalkers-featured-img-500h.png" 
					alt="Profile Image" 
					width={995} 
					height={500} 
					onLoadingComplete={handleImageLoaded}
				/>
				<Image
					src="https://f005.backblazeb2.com/file/unique-files/portfolio-spotdogwalkers-tile-background.png"
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
							<div>SEO. Email Marketing. Paid advertising. Web design. Content planning.</div>
						</div>
						<div className={styles.infoBoxColumnOneSection}>
							<h3>Client</h3>
							<div>Spot Dog Walkers</div>
						</div>
						<div className={styles.infoBoxColumnOneSection}>
							<h3>Year</h3>
							<div>2022</div>
						</div>
					</div>
					<div className={styles.infoBoxColumnTwo}>
						<div className={styles.infoBoxColumnTwoHeader}>
						  <h2>Project Overview</h2>
              <ResumeExperienceLinks companyWebsite="https://www.spotdogwalkers.com/" referenceName="John Minchin" referencePosition="Co-Founder, Owner" referencePhone="1-403-889-5139" column={false} />
						</div>
            <p>Growing at the pace of dog-years, the Calgary-startup Spot Dog Walkers needed online marketing to put its venture-funding to good use. As part of a tight-knit team, I grew its SEO-presence, launched an automated email sequence for new leads, operated its paid advertising campaigns, and wrote SemRush-researched blog content during spare-hours.</p>
            <p>Within a short span of time, the organic website shot up, the paid advertising reached its target of a 1.7 return-on-ad-spend, and the phone's were ringing to help out Canadian dog owners who were back at the office & wanted something different than apps like Rover.</p>
					</div>
				</div>
<div className={styles.contentBody}>
<p>The client at Spot Dog Walkers had simple request; that was to grow the brand in 3 Canadian target cities: Calgary, Vancouver, and Toronto. With a pocketful of venture money, the idea was to: (i) prove the "Uber for dog walking" business model in those 3 big cities, (ii) develop a process for launching in other cities, and (iii) work at another round of fundraising to continue expanding, with the dream goal of dislodging Rover as the top dog.</p>
<p>As an all-around digital marketer at a company of 3-4 people, myself included, there was tremendous freedom for me to undertake a strategy of my own design - this possibility felt freeing, but also like bungee jumping! Knowing that creating my own structure in this amorphous position would help me succeed, I started dusting the broom in 4 categories: (i) the organic content strategy, (ii) the email marketing, (iii) the paid marketing, and (iv) the blog writing. If the objective was to break-into competitive, local markets, I wanted to make sure Spot Dog Walkers was what dog owners thought of when they were heading out for a lunch-date, wondering what to do with their anxious pup.</p>
<p>Having a finite runway of cash, it felt sensible to prioritize the organic marketing strategy of Spot Dog Walkers; a low up-front cost channel through which dog owners could recognize the brand. I got to work, modifying facets of Spot's organic approach that included the site architecture and the site speed. In one fell swoop, the site architecture & speed were solved with a switch of CMS from Wix to Webflow. By switching to a more modern page builder like Webflow, it became remarkably easy to reorganize the page folders (ie. /how-to-walk-my-dog-blog to /blog/how-to-walk-my-dog) into a more scalable, user-recognizable, and Google recognizable system. Not only that, but this CMS offered easy solutions for building components that helped to ensure proper on-page SEO, such as objects with H1s, meta descriptions, page titles, menus for interlinking, mobile-optimization for various screen-sizes alongside other benefits. Last but not least, since Webflow actually uses a Node.js back-end architecture & built with pure WYSIWYG HTML, it meant that the fetching of data & rendering of pages became much faster; whereas before the Google Page Speed would hover between 12-20, it shot up to a more favorable 50-60, helping the all-important page-speed metric for SEO.</p>
<p>To grow from chihuahua to great Dane, a sound paid advertising strategy was essential. To be honest, while running Meta Ads campaigns was nothing new, cultivating excitement in tiny, local city-markets was a nut I hadn't tried cracking before, and the process of breaking through was a fun one. One memorable campaign was during the Fall 2021 mayoral elections of Calgary, Alberta. Amidst the tense electricity of politics, ads were launched, pretending that a pug named Debbie, who happened to be the company owner's dog, was running for mayor. This was flanked with organic social posts, canvassing for local radio station interviews, and an email marketing campaign, discussing Debbie's passion for "walking the walk" when it came to municipal change. In this manner of recurring out-of-the-ordinary campaigns, where I would budget targeted bursts of ad-spend, the account was successful with an overall 1.7 return-on-ad-spend (ROAS), which helped tell those local markets about what Spot was all about.</p>
<p>Like a safety net to bolster the paid advertising, the email marketing seemed worthwhile to work at. Initially, it was something like an 8-part, HTML-only email automation flow. I knew it needed some cleaning up if Spot wanted to become the next Rover. Instead of 8, why not 16? To ease the push for leads to convert, more emails were stuck-into the flow, providing a healthier ratio of "content vs. pitch". Then, instead of the 2002-style of pure-HTML design, I stirred up some templates using a drag-and-drop email builder called DesignMoto. Lastly, instead of using MailChimp, which was bleeding the company balance sheet of 100s of dollars each month, especially as the list of leads was growing, I migrated the email service provider to SendGrid. With that simple change-up, Spot went from spending more than $400 per-month for emails, to about $20 per month, freeing funds up for additional paid ads and other cool tools.</p>
<p>Getting my own hands dirty in the actual blog writing & content creation, I felt I could place my ear right to the ground & hear the pulse of success or failure for the site's SEO. For example, I canvassed for quality backlinks, writing the most in-depth guest posts I could possibly muster. One guest post was <a href="https://djangobrand.com/blogs/news/how-to-hire-dog-walkers-near-you" target="_blank">this one</a> for Django Blog, discussing how to select the finest dog walker, pushing for at least 3,000 words, with a digestible structure & friendly tone of voice to represent Spot Dog Walkers. Also, I diagnosed the blog health with SemRush & Google Analytics, monitoring its viewership of about 200 hits-per-month. One of the top performers in search ranking was a pre-existing "dog friendly patios for Calgary" page, ranking at around 4 in Calgary, Alberta. I opted to <a href="https://blog.spotdogwalkers.com/dog-friendly-patios/calgary" target="_blank">rewrite that blog</a>, while scaling it horizontally, making similar pages for the target cities of Vancouver and Toronto. Today, they're in the #1 spots for each city. In addition to that, I scaled it in the dimension of topics, adding pages for "dog groomers", "dog bakeries", and even "dog walkers". That helped to vault Spot Dog Walkers' website to the "first page" results for the "dog walker" keyword in each city, which was a crucial SEO objective from the get-go. All in all, those changes helped vault the overall organic viewership to well over 10,000 hits-per-month, helping to expose the Spot Dog Walkers name to many local dog owners.</p>
<p>It was a thrilling experience to apply what I had learned up until my time at Spot, being a self-entrepreneur within that company, devising new strategies to realize the vision of continent-wide expansion of reliable dog walking. Planning the new website, running its paid ads campaigns, deploying the updated email automation, and growing its organic reach, I still dream for Spot to race past Rover as <i>the</i> dog walking app in Canada & the United States. </p>
</div>
				</div>
      <Footer />
    </>
  );
}


