import React from 'react';
import { FaSpotify, FaApple, FaYoutube, FaBandcamp } from 'react-icons/fa';
import styles from './ArtistStreamingLinks.module.css';

export default function ArtistStreamingLinks() {
  const links = [
    {
      href: 'https://open.spotify.com/artist/5CfmXejuAGqUn3pK18xqV1',
      Icon: FaSpotify,
      label: 'Spotify',
      brand: 'spotify',
    },
    {
      href: 'https://music.apple.com/artist/1738712630',
      Icon: FaApple,
      label: 'Apple Music',
      brand: 'apple',
    },
    {
      href: 'https://www.youtube.com/blah148',
      Icon: FaYoutube,
      label: 'YouTube',
      brand: 'youtube',
    },
    {
      href: 'https://blah148.bandcamp.com',
      Icon: FaBandcamp,
      label: 'Bandcamp',
      brand: 'bandcamp',
    },
  ];

  return (
    <div className={styles.container}>
      {links.map(({ href, Icon, label, brand }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          className={`${styles.link} ${styles[brand]}`}
        >
          <Icon size={23} />
        </a>
      ))}
    </div>
  );
}

