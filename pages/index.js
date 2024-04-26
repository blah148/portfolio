import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {

  const totalImages = 4;
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
					<div className="titleMain">Digital experiences that stick.</div>
					<div className="titleSecondary">Mitchell Park - Porfolio</div>
				</div>
				<div className="projectsRow">
					<div className="specialTitle">Favorite projects</div>
					<div className="gridObject">
						<div className="textInfo">
							<div className="gridTitle">pLODDINGS</div>
							<div className="gridDescription">Building connections between impulses to understand historical music & the need to replenish its origins.</div>
							<div className="button"><Link href="/projects/ploddings">View Project</Link></div>
						</div>
						<div className="imagePreview">
							<Link href="/projects/ploddings">
								<Image
									src="https://f005.backblazeb2.com/file/unique-files/portfolio-ploddings-featured-img-500h.webp"
									alt="ploddings - featured image"
									width={995}
									height={384}
									onLoad={handleImageLoaded} 
									priority
								/>
							</Link>
						</div>
					</div>
					<div className="gridObject">
						<div className="textInfo">
							<div className="gridTitle">aLGAECAL</div>
							<div className="gridDescription">An 'up-to-scale' business for a physical product, relying upon digital lead generation channels</div>
							<div className="button"><Link href="/projects/algaecal">View Project</Link></div>
						</div>
						<div className="imagePreview center">
							<Link href="/projects/algaecal">
								<Image
									src="https://f005.backblazeb2.com/file/unique-files/portfolio-algaecal-featured-img-500h.webp"
									alt="algaecal - featured image"
									width={995}
									height={384}
									onLoad={handleImageLoaded} 
									priority
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
