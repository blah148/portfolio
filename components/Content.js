import Image from 'next/image';
import Link from 'next/link';
import styles from './Content.module.css';

export default function ContentFeed({ contentItems, filterTagId = null }) {
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

  return (
    <div className={styles.newsFeedContainer}>
      {filteredItems.map((item) => {
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
    </div>
  );
}

