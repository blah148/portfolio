import styles from './MusicFeed.module.css';

export default function MusicFeed({ tracks }) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className={styles.newsFeedContainer}>
      {tracks.map((track) => {
        const [year, month, day] = track.date.split('-');
        const formattedDate = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;

        return (
          <div key={track.id} className={styles.postWrapper}>
            <p className={styles.postDate}>{formattedDate}</p>
            <div className={styles.postContainer}>
              <h2 className={styles.postTitle}>{track.name}</h2>
              <div className={styles.videoWrapper}>
                <iframe
                  width="560"
                  height="315"
                  src={track.youtube_url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

