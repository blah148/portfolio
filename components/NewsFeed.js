import Image from 'next/image';
import styles from './NewsFeed.module.css';

export default function NewsFeed({ posts }) {
  const activePosts = posts.filter((post) => post.active === true);

  return (
    <div className={styles.newsFeedContainer}>
      {activePosts.map((post) => {
        const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        
        return (
          <div key={post.id} className={styles.postContainer}>
            <p className={styles.postDate}>{formattedDate}</p>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postBody}>{post.body_text}</p>
            {post.featured_img && (
              <div className={styles.imageWrapper}>
                <Image
                  src={post.featured_img}
                  alt={post.featured_img_alt_text ?? 'Featured Image'}
                  width={600}
                  height={400}
                  className={styles.postImage}
                />
              </div>
            )}
            {post.youtube_embed && (
              <div className={styles.videoWrapper}>
                <iframe
                  width="560"
                  height="315"
                  src={post.youtube_embed}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

