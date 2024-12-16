import Link from 'next/link';
import styles from './LeftChevron.module.css'; // Create this CSS module

export default function LeftChevron() {
  return (
		<div className={styles.addMargin}>
			<Link href="/" passHref>
				<div className={styles.iconWrapper} aria-label="Back to Homepage">
					<svg
						role="img"
						aria-hidden="true"
						viewBox="0 0 16 16"
						className={styles.svgIcon}
					>
						<path 
							fill="currentColor" 
							d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0     1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"
						></path>
					</svg>
				</div>
			</Link>
		</div>
  );
}

