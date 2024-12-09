// components/Sidebar.js
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link href="/" passHref>
        <p style={{ cursor: 'pointer', color: 'blue', marginBottom: '30px' }}>Home</p>
      </Link>
      <Link href="/bio" passHref>
        <p style={{ cursor: 'pointer', color: 'blue' }}>Words</p>
      </Link>
      <Link href="/music" passHref>
        <p style={{ cursor: 'pointer', color: 'blue' }}>music</p>
      </Link>
      <Link href="/dates" passHref>
        <p style={{ cursor: 'pointer', color: 'blue' }}>Dates</p>
      </Link>
      <Link href="/write" passHref>
        <p style={{ cursor: 'pointer', color: 'blue' }}>Contact</p>
      </Link>
    </div>
  );
}

