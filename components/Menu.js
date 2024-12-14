import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  // Add or remove a class to the body element dynamically
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menuOpen'); // Add class when menu is open
    } else {
      document.body.classList.remove('menuOpen'); // Remove class when menu is closed
    }
  }, [isMenuOpen]);

  return (
    <div>
      {/* Menu Icon */}
      <div className={styles.menuIcon} onClick={handleMenuToggle}>
        ☰
      </div>

      {/* Overlay */}
      <div
        className={styles.overlay}
        style={{
          display: isMenuOpen ? 'block' : 'none',
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
        onClick={handleOverlayClick}
      ></div>

      {/* Sliding Menu */}
      <div
        className={`${styles.menu} ${
          isMenuOpen ? styles.slideIn : styles.slideOut
        }`}
      >
        <div className={styles.content}>
					<Link href="/" passHref>
						<p style={{ cursor: 'pointer', color: 'blue', marginBottom: '20px' }}>Home</p>
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
					<Link href="/gallery" passHref>
						<p style={{ cursor: 'pointer', color: 'blue' }}>gallery</p>
					</Link>
          <Link href="/write" passHref>
            <p style={{ cursor: 'pointer', color: 'blue' }}>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;

