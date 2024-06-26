import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {

	const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Function to detect if the device is mobile
    const detectMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Update state based on device type
    setIsMobile(detectMobile());
  }, []);

  useEffect(() => {
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.topLevel}>
        <Link href="/">
					<Image
						src="https://f005.backblazeb2.com/file/ploddings-threads/featured_img_200px/reverend-gary-davis.webp"
						alt="Reverend Gary Davis"
						width={60}
						height={60}
					/>
        </Link>
				<div className={styles.navigation}>
					<Link href="/about">About</Link>
					<Link href="/resume">Résumé</Link>
					<Link href="/contact">Contact</Link>
				</div>		
      </div>
      <a target="_blank" className={styles.socialIcon} href="https://www.linkedin.com/in/mitchell-park/">
        <svg version="1.1" id="icon" x="0px" y="0px"
          width="32px" height="32px" viewBox="0 0 32 32" style={{ enableBackground: 'new 0 0 32 32' }} xmlSpace="preserve">
          <style type="text/css">{`.st0{fill:none;}`}</style>
          <path d="M26.2,4H5.8C4.8,4,4,4.8,4,5.7v20.5c0,0.9,0.8,1.7,1.8,1.7h20.4c1,0,1.8-0.8,1.8-1.7V5.7C28,4.8,27.2,4,26.2,4z M11.1,24.4
          H7.6V13h3.5V24.4z M9.4,11.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S10.5,11.4,9.4,11.4z M24.5,24.3
          H21v-5.6c0-1.3,0-3.1-1.9-3.1c-1.9,0-2.1,1.5-2.1,2.9v5.7h-3.5V13h3.3v1.5h0.1c0.5-0.9,1.7-1.9,3.4-1.9c3.6,0,4.3,2.4,4.3,5.5V24.3z"/>
          <rect id="_x3C_Transparent_Rectangle_x3E_" y="0" className="st0" width="32" height="32"/>
        </svg>
      </a>
			<div style={{textAlign: "center"}}>Built with NextJS</div>
    </footer>
  );
};

export default Footer;

