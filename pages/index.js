import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {

  const totalImages = 5;
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
        <title>Mitchell Park | Portfolio</title>
        <meta name="description" content="A display of the work produced by Mitchell Park, also known by the pseudonym of Blah148; a body of work touching upon the musical & non-musical, primarily based in Canada" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
			<Header />
      <main >
				<Loader isLoading={isLoading} />
				<div className="titleRow">
					<div className="titleMain">I make online experiences better with custom-built tools.</div>
					<div className="titleSecondary">From modern JavaScript websites, to zero-cookie tracking systems, to automated email flows.</div>
				</div>
				<div className="imageRow">
					<Image 
						src="https://media.licdn.com/dms/image/D5603AQHJAatJxfi9vg/profile-displayphoto-shrink_800_800/0/1713058885794?e=1718841600&v=beta&t=y50f1jaxZbnybIuJXDGMMKCyvigAkoHkeptZNhKT65M" alt="Profile Image" 
						width={500} 
						height={500} 
						onLoadingComplete={handleImageLoaded} />
			    <Image
            src="https://f005.backblazeb2.com/file/unique-files/cover-background_blues.webp"
            alt="Background Image"
            width={1697}
            height={500}
						onLoadingComplete={handleImageLoaded} 
          />	
				</div>
				<div className="projectsRow">
					<div className="specialTitle">My favorite projects</div>
					<div className="gridObject">
						<div className="textInfo">
							<div className="gridTitle">Ploddings</div>
							<div className="gridDescription">I built a blues guitar learning platform that fundraises via membership revenue for the Mt. Zion Memorial Fund, with a user-base of more than 250 active members.</div>
							<div className="button"><Link href="/projects/ploddings">View Project</Link></div>
						</div>
						<div className="imagePreview">
							<Link href="/projects/ploddings">
								<Image
									src="https://f005.backblazeb2.com/file/unique-files/portfolio-ploddings-featured-img-500h.webp"
									alt="ploddings - featured image"
									width={995}
									height={384}
									onLoadingComplete={handleImageLoaded} 
								/>
							</Link>
						</div>
					</div>
					<div className="gridObject">
						<div className="textInfo">
							<div className="gridTitle">Spot Dog Walkers</div>
							<div className="gridDescription">From 100s to over 10,000 hits-per-month, I undertook a new blog strategy & built an automated email flow for organic leads.</div>
							<div className="button"><Link href="/projects/spotdogwalkers">View Project</Link></div>
						</div>
						<div className="imagePreview center">
							<Link href="/projects/spotdogwalkers">
							<Image
								src="https://f005.backblazeb2.com/file/unique-files/portfolio-spotdogwalkers-featured-img-500h.webp"
								alt="spot dog walkers - featured image"
								width={995}
								height={384}
								onLoadingComplete={handleImageLoaded} 
							/>
							</Link>
						</div>
					</div>
					<div className="gridObject">
						<div className="textInfo">
							<div className="gridTitle">AlgaeCal</div>
							<div className="gridDescription">We were spending between $12,000 to $18,000 per day on Meta Ads, and I worked as the primary Meta Ads Specialist.</div>
							<div className="button"><Link href="/projects/algaecal">View Project</Link></div>
						</div>
						<div className="imagePreview center">
							<Link href="/projects/algaecal">
								<Image
									src="https://f005.backblazeb2.com/file/unique-files/portfolio-algaecal-featured-img-500h.webp"
									alt="algaecal - featured image"
									width={995}
									height={384}
									onLoadingComplete={handleImageLoaded} 
								/>
							</Link>
						</div>
					</div>
				</div>
      </main>
			<Footer />
    </>
  );
}
