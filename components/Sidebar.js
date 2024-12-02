// components/Sidebar.js
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link href="/bio" passHref>
        <p style={{ cursor: 'pointer', color: 'blue' }}>SKIM, the bio</p>
      </Link>
      <Link href="/music" passHref>
        <p style={{ cursor: 'pointer', color: 'blue' }}>SAMPLE, the music</p>
      </Link>
      <Link href="/dates" passHref>
        <p style={{ cursor: 'pointer', color: 'blue' }}>SEE, performance dates</p>
      </Link>
      <Link href="/write" passHref>
        <p style={{ cursor: 'pointer', color: 'blue' }}>WRITE, a 'hello'</p>
      </Link>
    </div>
  );
}

