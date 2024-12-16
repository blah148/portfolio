// components/Sidebar.js
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
			<div className={styles.sticky}>
				<Link href="/" passHref>
					<p style={{ cursor: 'pointer', color: 'blue', marginBottom: '30px' }}>Home</p>
				</Link>
				<Link href="/words" passHref>
					<p style={{ cursor: 'pointer', color: 'blue' }}>Words</p>
				</Link>
				<Link href="/music" passHref>
					<p style={{ cursor: 'pointer', color: 'blue' }}>music</p>
				</Link>
				<Link href="/streams" passHref>
					<p style={{ cursor: 'pointer', color: 'blue' }}>streams</p>
				</Link>
				<Link href="/dates" passHref>
					<p style={{ cursor: 'pointer', color: 'blue' }}>Dates</p>
				</Link>
				<Link href="/gallery" passHref>
					<p style={{ cursor: 'pointer', color: 'blue' }}>gallery</p>
				</Link>
				<Link href="/write" passHref>
					<p style={{ cursor: 'pointer', color: 'blue' }}>Contact</p>
				</Link>
			</div>
    </div>
  );
}

