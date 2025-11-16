// components/ArtistWidget.js
import React from 'react';
import styles from './ArtistWidget.module.css';
import YoutubeSubscribe from './YoutubeSubscribe';
import { FaSpotify, FaApple, FaYoutube, FaBandcamp } from 'react-icons/fa';

export default function ArtistWidget() {
  const bioText = (
    <>
The writer of this post is <strong>blah148</strong>; a Canadian-Korean musician, who released a debut album, 'the Bell It Shines Like Gold' in October of 2025. The album title is derived from a verse sung by Charley Patton, in the 1929 recording of 'Moon Going Down'. On the platforms listed below, this album, recorded in the vein of a traditional field recording style, can be streamed.
    </>
  );

  const streamingLinks = [
    {
      key: 'youtube',
      href: 'https://www.youtube.com/blah148',
      Icon: FaYoutube,
      className: styles.youtube,
      label: 'YouTube'
    },
    {
      key: 'spotify',
      href: 'https://open.spotify.com/artist/5CfmXejuAGqUn3pK18xqV1',
      Icon: FaSpotify,
      className: styles.spotify,
      label: 'Spotify'
    },
    {
      key: 'apple',
      href: 'https://music.apple.com/artist/1738712630',
      Icon: FaApple,
      className: styles.apple,
      label: 'Apple Music'
    },
    {
      key: 'bandcamp',
      href: 'https://blah148.bandcamp.com',
      Icon: FaBandcamp,
      className: styles.bandcamp,
      label: 'Bandcamp'
    }
  ];

  return (
    <div className={styles.widgetContainer}>

      {/* YouTube Subscribe block */}
      <div className={styles.contentRow}>
        <div className={styles.leftColumn}>
          <YoutubeSubscribe />
        </div>
      </div>

      {/* Header */}
      <h2 className={styles.header}>
        <strong>About the author</strong>
      </h2>

      {/* Bio */}
      <div className={styles.contentRow}>
        <div className={styles.rightColumn}>
          <p className={styles.bio}>{bioText}</p>
        </div>
      </div>

      {/* Streaming icons row */}
      <div className={styles.streamingIcons}>
        {streamingLinks.map(({ key, href, Icon, className, label }) => (
          <a
            key={key}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${className}`}
          >
            <Icon />
          </a>
        ))}
      </div>

    </div>
  );
}

