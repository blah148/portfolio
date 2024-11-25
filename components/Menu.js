import { useState } from 'react';
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
          display: isMenuOpen ? "block" : "none",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
        onClick={handleOverlayClick}
      ></div>

      {/* Sliding Menu */}
      <div
        className={`${styles.menu} ${
          isMenuOpen ? styles.slideIn : styles.slideOut
        }`}
      >
        <button className={styles.closeButton} onClick={handleMenuToggle}>
          ✖
        </button>
    <div className={styles.sidebar}>
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
