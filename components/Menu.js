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
          <Link href="#" passHref>
            <p style={{ cursor: 'pointer', color: 'blue' }}>SKIM, the bio</p>
          </Link>
          <Link href="#" passHref>
            <p style={{ cursor: 'pointer', color: 'blue' }}>SAMPLE, the music</p>
          </Link>
          <Link href="#" passHref>
            <p style={{ cursor: 'pointer', color: 'blue' }}>SEE, performance dates</p>
          </Link>
          <Link href="/write" passHref>
            <p style={{ cursor: 'pointer', color: 'blue' }}>WRITE, a 'hello'</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;

