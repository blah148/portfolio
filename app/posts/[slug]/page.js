import { supabase } from '../../../lib/supabaseClient';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const { data, error } = await supabase
    .from('content')
    .select('slug');

  if (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }

  return (data || [])
    .filter((row) => row.slug)
    .map((row) => ({ slug: row.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { data } = await supabase
    .from('content')
    .select('title, description')
    .eq('slug', slug)
    .single();

  return {
    title: data?.title || 'Post',
    description: data?.description || 'Post on blah148',
  };
}

export default async function PostPage({ params }) {
  const { slug } = params;

  const { data, error } = await supabase
    .from('content')
    .select(`
      id, title, body_text, date,
      featured_img, featured_img_alt_text,
      youtube_embed,
      tags(name, hyperlink)
    `)
    .eq('slug', slug)
    .single();

  if (error || !data) {
    console.error('Error fetching post:', error);
    return <p>Post not found.</p>;
  }

  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];
  const [year, month, day] = data.date.split('-');
  const formattedDate = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;

  return (
    <article style={{ maxWidth: '700px', margin: 'auto' }}>
      <p><em>{formattedDate}</em></p>
      <h1>{data.title}</h1>

      {/* Featured image or YouTube embed */}
      {data.featured_img ? (
        <div style={{ marginBottom: '1rem' }}>
          <Image
            src={data.featured_img}
            alt={data.featured_img_alt_text || 'Featured image'}
            width={700}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      ) : data.youtube_embed ? (
        <div style={{ marginBottom: '1rem' }}>
          <iframe
            width="560"
            height="315"
            src={data.youtube_embed}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ) : null}

      {/* Post body */}
      <div>
        <p>{data.body_text}</p>
      </div>

      {/* Category / tags */}
      {data.tags?.name && data.tags?.hyperlink && (
        <div style={{ marginTop: '1rem' }}>
          <span style={{ fontWeight: 'bold' }}>Category: </span>
          <Link href={data.tags.hyperlink}>{data.tags.name}</Link>
        </div>
      )}
    </article>
  );
}

