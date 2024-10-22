import { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../lib/supabaseClient';
import Loader from '../components/Loader';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import lightbox styles
import styles from '../styles/Photos.module.css';

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
      <Loader isLoading={isLoading} />
      <div className={styles.masonryGrid}>
        {photos.length === 0 ? (
          <p>Loading photos...</p>
        ) : (
          photos.map((photo, index) => (
            <div key={index} className={styles.masonryItem} onClick={() => openLightbox(index)}>
              <Image
                src={photo.link_1}
                alt={photo.alt_text || 'Photo'}
                layout="intrinsic"  // Respect the image's intrinsic size
                width={300}  // Adjust width as needed
                height={Math.floor(Math.random() * 200) + 300} // Adjust for varying heights, or use real image sizes if available
                quality={95}
                className={styles.image}
              />
            </div>
          ))
        )}
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
    </>
  );
}

