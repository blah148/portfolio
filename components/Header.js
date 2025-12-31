// components/Header.js
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css'; 
import Menu from './Menu.js';
import LeftChevron from './LeftChevron';
import ArtistStreamingLinks from './ArtistStreamingLinks'; // ✅ new import

export default function Header({ logoTitle = "Park, Mitch", page_level = null }) {
  return (
    <header className={styles.header}>
      {/* Left-chevron navigation */}
      {page_level === 2 && <LeftChevron />}

      {/* Logo / Title */}
      <h1 className={styles.logo} title={logoTitle}>
        {logoTitle}
      </h1>

      {/* Menu stays in middle */}
      <Menu />

      {/* ✅ Streaming links now appear at the right */}
      <ArtistStreamingLinks />
    </header>
  );
}

