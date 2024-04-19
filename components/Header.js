// Header.js

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from './Menu';
import styles from './header.module.css';

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Set initial screen width
    setIsSmallScreen(window.innerWidth < 768);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="https://f005.backblazeb2.com/file/ploddings-threads/featured_img_200px/lead-belly.webp" alt="Logo" width={75} height={75} />
        </Link>
      </div>
      {isSmallScreen ? (
        <Menu />
      ) : (
        <div className={styles.navLinks}>
          <div className={styles.normalLink}><Link href="/about">About</Link></div>
					<div className={styles.normalLink}><Link href="/resume">Résumé</Link></div>
					<div className={styles.button}>
            <Link href="/contact">Contact</Link>
					</div>
        </div>
      )}
    </header>
  );
};

export default Header;

