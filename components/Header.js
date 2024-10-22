import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient'; // Assuming you're using Supabase for social links
import styles from './header.module.css'; // Import the CSS module

export default function Header() {
  const [socialLinks, setSocialLinks] = useState([]);

  // Fetch social links from the Supabase table
  useEffect(() => {
    const fetchSocialLinks = async () => {
      const { data, error } = await supabase
        .from('social_links')
        .select('name, icon_link, icon_alt_text, destination_url');
      if (error) console.error(error);
      else setSocialLinks(data);
    };

    fetchSocialLinks();
  }, []);

  return (
    <header className={styles.header}>
      {/* Logo Section */}
      <div className={styles.logo}>Mitch Park - blah148</div>

      {/* Navigation Links */}
      <nav className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/music">Music</Link>
        <Link href="/tour">Tour</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Social Links */}
      <div className={styles.socialLinks}>
        {socialLinks.map((link) => (
          <a key={link.name} href={link.destination_url} target="_blank" rel="noopener noreferrer">
            <Image src={link.icon_link} alt={link.icon_alt_text} width={24} height={24} />
          </a>
        ))}
      </div>
    </header>
  );
}

