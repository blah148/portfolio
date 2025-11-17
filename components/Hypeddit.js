"use client";

import React from "react";
import styles from "../styles/Hypeddit.module.css";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";

/* ------------------------------
   HARD-CODED PLATFORM LINKS
------------------------------ */
const SPOTIFY_LINK =
  "https://open.spotify.com/album/7d8NpGwxV9OS0evVmLU2VE";

const APPLE_LINK =
  "https://music.apple.com/us/album/the-bell-it-shines-like-gold/1848658554";

const YOUTUBE_LINK =
  "https://www.youtube.com/playlist?list=PL-JSdGJVjJUg_Lof9qHJq86yZrXFWyrFm";

/* Displayed info */
const HERO_IMAGE =
  "https://f005.backblazeb2.com/file/blah148/albums/the-bell-it-shines-like-gold_pt-1.jpg";

const SONG_TITLE = "The Bell It Shines Like Gold";

export default function Hypeddit() {
  const rows = [
    {
      key: "spotify",
      label: "Listen on Spotify",
      href: SPOTIFY_LINK,
      Icon: FaSpotify,
      iconClass: styles.spotify,
    },
    {
      key: "apple",
      label: "Listen on Apple Music",
      href: APPLE_LINK,
      Icon: FaApple,
      iconClass: styles.apple,
    },
    {
      key: "youtube",
      label: "Listen on YouTube",
      href: YOUTUBE_LINK,
      Icon: FaYoutube,
      iconClass: styles.youtube,
    },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* 50/50 split */}
        <div className={styles.splitRow}>

          {/* LEFT COLUMN — ALBUM ART */}
          <div className={styles.leftCol}>
            <img
              src={HERO_IMAGE}
              alt={`${SONG_TITLE} cover art`}
              className={styles.heroImage}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* RIGHT COLUMN — STREAMING ROWS */}
          <div className={styles.rightCol}>
            <section className={styles.platformSection}>
              <table className={styles.platformTable}>
                <tbody>
                  {rows.map(({ key, label, href, Icon, iconClass }) => (
                    <tr
                      key={key}
                      className={`${styles.platformRow} ${styles.clickableRow}`}
                    >
                      <td className={styles.logoCell}>

                        {/* Fully GTM-safe clickable link */}
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`gtm-${key} ${styles.fullRowLink}`}
                        >

                          <span
                            className={`gtm-${key} ${styles.logoWrap} ${iconClass}`}
                            aria-hidden="true"
                          >
                            <Icon className={`gtm-${key} ${styles.logoIcon}`} />
                          </span>

                          <span className={`gtm-${key} ${styles.platformLabel}`}>
                            {label}
                          </span>

                        </a>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>

        </div>
      </div>
    </main>
  );
}

