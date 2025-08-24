// app/loading.js
import styles from '../styles/Loader.module.css';

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

