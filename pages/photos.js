import { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../lib/supabaseClient';
import Loader from '../components/Loader';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import lightbox styles
import styles from '../styles/Photos.module.css';
import Link from 'next/link';
import Head from "next/head";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      const { data, error } = await supabase
        .from('photos')
        .select('id, link_1, alt_text') // Fetch only required fields
        .order('id', { ascending: true });

      if (error) {
        console.error('Error fetching photos:', error);
      } else {
        setPhotos(data);
        setIsLoading(false); // Stop loader once data is fetched
      }
    };

    fetchPhotos();
  }, []);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Head>
        <title>Photos | Mitch Park - Blah148</title>
        <meta name="description" content="Photos of Mitch Park (Blah148) from Alberta, Canada, primarily taken in the town of St. Paul, along Therenien Lake with a sunburst Gibson LG-1 guitar. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
			<main >
				<Loader isLoading={isLoading} />
				<div className={styles.masonryGrid}>
					{photos.map((photo, index) => (
						<div key={index} className={styles.masonryItem} onClick={() => openLightbox(index)}>
							<Image
								src={photo.link_1}
								alt={photo.alt_text || 'Photo'}
								layout="intrinsic"  // Respect the image's intrinsic size
								width={300}  // Adjust width as needed
								height={Math.floor(Math.random() * 200) + 300} // Adjust for varying heights, or use real image sizes if available
								quality={80} // Adjust image quality
								className={styles.image}
							/>
						</div>
					))}
				</div>

				{isOpen && (
					<Lightbox
						mainSrc={photos[photoIndex].link_1}
						nextSrc={photos[(photoIndex + 1) % photos.length].link_1}
						prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].link_1}
						onCloseRequest={() => setIsOpen(false)}
						onMovePrevRequest={() =>
							setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
						}
						onMoveNextRequest={() =>
							setPhotoIndex((photoIndex + 1) % photos.length)
						}
					/>
				)}
			</main>
			<Footer />
    </>
  );
}

