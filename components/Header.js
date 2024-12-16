// Header.js
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import { supabase } from '../lib/supabaseClient'; // Uncomment if using Supabase for social links
import styles from './header.module.css'; // Import the CSS module
import Menu from './Menu.js';
import LeftChevron from './LeftChevron';

export default function Header({ logoTitle = "Park, Mitch", page_level = null }) {
  // const [socialLinks, setSocialLinks] = useState([]);

  // If using Supabase to fetch social links, uncomment and implement as needed:
  // useEffect(() => {
  //   const fetchSocialLinks = async () => {
  //     const { data, error } = await supabase
  //       .from('social_links')
  //       .select('name, icon_link, icon_alt_text, destination_url');
  //     if (error) {
  //       console.error("Error fetching social links:", error);
  //     } else {
  //       setSocialLinks(data);
  //     }
  //   };
  //   fetchSocialLinks();
  // }, []);

  return (
    <header className={styles.header}>
      {/* If page_level is 2, show the LeftChevron */}
      {page_level === 2 && <LeftChevron />}

      {/* Logo Section with title prop */}
      <h1 className={styles.logo} title={logoTitle}>
        {logoTitle}
      </h1>
      <Menu /> 

      {/* Social Links (uncomment and style as needed)
      <div className={styles.socialLinks}>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.destination_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={link.icon_link}
              alt={link.icon_alt_text}
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
      */}
    </header>
  );
}

