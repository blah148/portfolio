// pages/lp/[id].js
import Head from 'next/head';
import { useState, useMemo } from 'react';
import { supabase } from '../../lib/supabaseClient';
import styles from './LandingPage.module.css';
import { FaSpotify, FaApple, FaYoutube, FaBandcamp, FaPlay } from 'react-icons/fa';

export default function LandingPage({ lp }) {
  const [showVideo, setShowVideo] = useState(false);

  const title = lp.seo_title || lp.page_title || 'Landing';
  const desc = lp.seo_description || '';
  const canonical = lp.slug ? `/lp/${lp.slug}` : `/lp/${lp.id}`;

  // Default CTA to YouTube, then fall back.
  const ctaHref = useMemo(() => {
    if (lp.youtube_url) return lp.youtube_url;
    if (lp.spotify_url) return lp.spotify_url;
    if (lp.apple_music_url) return lp.apple_music_url;
    if (lp.bandcamp_url) return lp.bandcamp_url;
    return null;
  }, [lp.youtube_url, lp.spotify_url, lp.apple_music_url, lp.bandcamp_url]);

  return (
    <>
      <Head>
        <title>{title}</title>
        {desc && <meta name="description" content={desc} />}
        <meta property="og:title" content={title} />
        {desc && <meta property="og:description" content={desc} />}
        <link rel="canonical" href={canonical} />
        {/* Optional: tint mobile browser UI for this page only */}
        <meta name="theme-color" content="#0b0f14" />
      </Head>

      {/* Dark mode is scoped to this wrapper only */}
      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>{lp.headline}</h1>
            {lp.subheadline && <p className={styles.subheadline}>{lp.subheadline}</p>}
          </header>

          {/* Click-to-play video (no autoplay/preload) */}
          {lp.video_url && (
            <section className={styles.media}>
              {!showVideo ? (
                <button
                  className={styles.playButton}
                  onClick={() => setShowVideo(true)}
                  aria-label="Play video"
                >
                  <span className={styles.playBadge}>
                    <FaPlay className={styles.playIcon} />
                  </span>
                  <span className={styles.playLabel}>Play video</span>
                </button>
              ) : (
                <video
                  id="hero-video"
                  className={styles.video}
                  src={lp.video_url}
                  controls
                  playsInline
                  preload="none"
                />
              )}
            </section>
          )}

{lp.body_text && (
  <blockquote className={styles.bodyQuote}>
    {lp.body_text}
  </blockquote>
)}


          {/* Primary CTA (defaults to YouTube) */}
          {lp.call_to_action && (
            <p className={styles.ctaRow}>
              {ctaHref ? (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.ctaButton} ${styles.ctaYoutube}`}
                >
                  <FaYoutube className={styles.ctaIcon} />
                  <span>{lp.call_to_action}</span>
                </a>
              ) : (
                <button className={styles.ctaButton} disabled>
                  {lp.call_to_action}
                </button>
              )}
            </p>
          )}

          {/* Secondary converting copy leading into platform links */}
          {(lp.youtube_url || lp.spotify_url || lp.apple_music_url || lp.bandcamp_url) && (
            <section className={styles.altPlatforms}>
              <p className={styles.altLead}>
                Not on Youtube? Catch it instantly on these platforms:
              </p>
              <ul className={styles.platforms}>
                {lp.spotify_url && (
                  <li>
                    <a
                      href={lp.spotify_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.iconLink} ${styles.spotify}`}
                      aria-label="Play on Spotify"
                    >
                      <FaSpotify className={styles.icon} />
                      <span>Spotify</span>
                    </a>
                  </li>
                )}
                {lp.apple_music_url && (
                  <li>
                    <a
                      href={lp.apple_music_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.iconLink} ${styles.apple}`}
                      aria-label="Play on Apple Music"
                    >
                      <FaApple className={styles.icon} />
                      <span>Apple Music</span>
                    </a>
                  </li>
                )}
                {lp.bandcamp_url && (
                  <li>
                    <a
                      href={lp.bandcamp_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.iconLink} ${styles.bandcamp}`}
                      aria-label="Play on Bandcamp"
                    >
                      <FaBandcamp className={styles.icon} />
                      <span>Bandcamp</span>
                    </a>
                  </li>
                )}
              </ul>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

/* --- getServerSideProps at the bottom --- */
export async function getServerSideProps({ params }) {
  const { id } = params;
  const isNumericId = /^\d+$/.test(id);

  let query = supabase
    .from('landing_page_variations')
    .select(`
      id,
      page_title,
      slug,
      seo_title,
      seo_description,
      headline,
      subheadline,
      video_url,
      body_text,
      call_to_action,
      spotify_url,
      apple_music_url,
      youtube_url,
      bandcamp_url,
      is_active,
      created_at
    `);

  query = isNumericId ? query.eq('id', Number(id)) : query.eq('slug', id);

  const { data, error } = await query.maybeSingle();

  if (error) {
    console.error('LP fetch error:', error);
    return { notFound: true };
  }
  if (!data || data.is_active === false) {
    return { notFound: true };
  }

  return { props: { lp: data } };
}

