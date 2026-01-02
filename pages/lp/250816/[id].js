// pages/lp/[id].js
import Head from 'next/head';
import { supabase } from '../../../lib/supabaseClient';
import styles from '../../../styles/LandingPage.module.css';
import GTM from '../../../components/GTM';
import Hypeddit from '../../../components/Hypeddit.js';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';

export default function LandingPage({ lp }) {
  const title = lp.seo_title || lp.page_title || 'Landing';
  const desc = lp.seo_description || '';
  const canonical = lp.slug ? `/lp/${lp.slug}` : `/lp/${lp.id}`;

  // Build platform rows (Spotify → Apple Music → YouTube)
  const rows = [
    lp.spotify_url && {
      key: 'spotify',
      label: 'Spotify',
      href: lp.spotify_url,
      Icon: FaSpotify,
      btnClass: styles.btnSpotify,
      iconClass: styles.spotify,
    },
    lp.apple_music_url && {
      key: 'apple',
      label: 'Apple Music',
      href: lp.apple_music_url,
      Icon: FaApple,
      btnClass: styles.btnApple,
      iconClass: styles.apple,
    },
    lp.youtube_url && {
      key: 'youtube',
      label: 'YouTube',
      href: lp.youtube_url,
      Icon: FaYoutube,
      btnClass: styles.btnYoutube,
      iconClass: styles.youtube,
    },
  ].filter(Boolean);

  return (
    <>
      <Head>
        <title>{title}</title>
        {desc && <meta name="description" content={desc} />}
        <meta name="robots" content="noindex,nofollow" />
        <meta property="og:title" content={title} />
        {desc && <meta property="og:description" content={desc} />}
        <link rel="canonical" href={canonical} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#0b0f14" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* GTM loads only on pages that render this component */}
      <GTM />

      {/* Mobile-only layout */}
      <main className={styles.page}>
        <div className={styles.container}>
          {/* Hero square image */}
          {lp.hero_image ? (
            <img
              src={lp.hero_image}
              alt={lp.song_title ? `${lp.song_title} cover art` : 'Cover art'}
              className={styles.heroImage}
              loading="eager"
              decoding="async"
            />
          ) : (
            <div className={styles.heroPlaceholder} aria-hidden="true" />
          )}

          {/* Title / Artist (centered, vertical) */}
          <section className={styles.metaBlock}>
            <h1 className={styles.songTitle}>
              {lp.song_title || lp.page_title || 'Untitled'}
            </h1>

            <section className={styles.artistRow}>
              <div className={styles.artistImageWrapper}>
                <img
                  src="https://f005.backblazeb2.com/file/blah148/profile-images/profile-image_blah148_200x200.jpeg"
                  alt="blah148 artist image"
                  className={styles.artistImage}
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.artistTextWrapper}>
                <div className={styles.artistName}>blah148</div>
              </div>
            </section>
          </section>

          {/* Platform table */}
          {rows.length > 0 && (
            <section
              className={styles.platformSection}
              aria-label="Streaming platforms"
            >
              <table className={styles.platformTable}>
                <tbody>
                  {rows.map(
                    ({ key, label, href, Icon, btnClass, iconClass }) => (
                      <tr key={key} className={styles.platformRow}>
                        <td className={styles.logoCell}>
                          <span
                            className={`${styles.logoWrap} ${iconClass}`}
                            aria-hidden="true"
                          >
                            <Icon className={styles.logoIcon} />
                          </span>
                          <span className={styles.platformLabel}>
                            {label}
                          </span>
                        </td>
                        <td className={styles.actionCell}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.playBtn} ${btnClass}`}
                            aria-label={`Play on ${label}`}
                          >
                            Play
                          </a>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </section>
          )}

          {/* Footer */}
          <footer className={styles.footer}>
            <a href="/privacy-policy" className={styles.footerLink}>
              Privacy Policy
            </a>
          </footer>
        </div>
      </main>
    </>
  );
}

/* --- getServerSideProps --- */
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
      hero_image,
      song_title,
      is_active,
      created_at
    `);

  query = isNumericId
    ? query.eq('id', Number(id))
    : query.eq('slug', id);

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

