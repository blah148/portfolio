// components/Content.js

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Content.module.css';

export default function ContentFeed({ contentItems, filterTagId = null, setIsLoadingMore }) {
  // Filter active items first
  let filteredItems = contentItems.filter((item) => item.active === true);

  // If filterTagId is not null, filter by matching tag_id
  if (filterTagId !== null) {
    filteredItems = filteredItems.filter((item) => item.tag_id === filterTagId);
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // State to manage the number of visible posts
  const [visibleCount, setVisibleCount] = useState(3);
  // Reference for the sentinel element (used with Intersection Observer)
  const sentinelRef = useRef(null);

  const loadMore = () => {
    if (visibleCount >= filteredItems.length) return; // No more posts to load
    if (setIsLoadingMore) setIsLoadingMore(true); // Indicate loading start

    // Simulate a network request delay
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 3, filteredItems.length));
      if (setIsLoadingMore) setIsLoadingMore(false); // Indicate loading end
    }, 1000); // 1-second delay; adjust as needed
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [filteredItems.length, visibleCount]);

  // Reset visibleCount if filteredItems changes (e.g., due to filterTagId)
  useEffect(() => {
    setVisibleCount(3);
  }, [filterTagId, contentItems]);

  return (
    <div className={styles.newsFeedContainer}>
      {filteredItems.slice(0, visibleCount).map((item) => {
        const [year, month, day] = item.date.split('-');
        const formattedDate = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;

        return (
          <div key={item.id} className={styles.postWrapper}>
            <p className={styles.postDate}>{formattedDate}</p>
            <div className={styles.postContainer}>
              <h2 className={styles.postTitle}>{item.title}</h2>
              <p className={styles.postBody}>{item.body_text}</p>
              {item.featured_img && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.featured_img}
                    alt={item.featured_img_alt_text ?? 'Featured Image'}
                    width={600}
                    height={400}
                    className={styles.postImage}
                  />
                </div>
              )}
              {item.youtube_embed && (
                <div className={styles.videoWrapper}>
                  <iframe
                    width="560"
                    height="315"
                    src={item.youtube_embed}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {filterTagId === null && item.tags?.name && item.tags?.hyperlink && (
                <div className={styles.categoryContainer}>
                  <span className={styles.categoryLabel}>Category: </span>
                  <p className={styles.postTagName}>
                    <Link href={item.tags.hyperlink}>
                      {item.tags.name}
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Sentinel Element for Intersection Observer */}
      <div ref={sentinelRef}></div>

    </div>
  );
}

