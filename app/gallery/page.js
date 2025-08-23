// app/gallery/page.js
import Image from 'next/image';
import { supabase } from '../../lib/supabaseClient';
import styles from '../../styles/Photos.module.css';

export const metadata = {
  title: 'blah148 - Gallery',
  description:
    'Photos of Mitch Park (Blah148) from Alberta, Canada, primarily taken in the town of St. Paul, along Therenien Lake with a sunburst Gibson LG-1 guitar.',
};

export default async function GalleryPage() {
  // Fetch photos server-side
  const { data, error } = await supabase
    .from('photos')
    .select('id, link_1, alt_text')
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching photos:', error);
    return <p>Error loading photos.</p>;
  }

  const photos = data ?? [];

  if (photos.length === 0) {
    return <p>No photos available.</p>;
  }

  return (
    <div className={styles.masonryGrid}>
      {photos.map((photo, index) => (
        <div key={photo.id ?? index} className={styles.masonryItem}>
          <Image
            src={photo.link_1}
            alt={photo.alt_text || 'Photo'}
            width={300}
            height={Math.floor(Math.random() * 200) + 300}
            quality={80}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}

