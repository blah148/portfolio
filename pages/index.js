import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Function to detect if the device is mobile
    const detectMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Update state based on device type
    setIsMobile(detectMobile());
  }, []);
  
  const totalImages = isMobile ? 1 : 1;
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
        <title>blah148 - Home</title>
        <meta
          name="description"
          content="Website attempting to summarize musical projects of blah148, touching also on commentary"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <div className="mainBody">
				<Sidebar />
				<div className="otherBody">
					<Header logoTitle="blah148" />
					<Footer />
				</div>

      </div>
    </>
  );
}

