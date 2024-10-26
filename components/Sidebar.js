// components/Sidebar.js
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <p>SKIM, the bio</p>
      <p>SAMPLE, the music</p>
      <p>SEE, performance dates</p>
      <p>SAY, 'hello'</p>
    </div>
  );
}

