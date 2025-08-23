// app/archive/[year]/page.js
import { supabase } from '../../../lib/supabaseClient';
import ContentFeed from '../../../components/Content';

export async function generateMetadata({ params }) {
  const { year } = params;
  return {
    title: `Posts from ${year}`,
    description: `Archive of posts from ${year}`,
  };
}

export default async function ArchiveYearPage({ params }) {
  const { year } = params;

  const startDate = `${year}-01-01`;
  const endDate = `${year}-12-31`;

  const { data, error } = await supabase
    .from('content')
    .select('*, tags(name, hyperlink)')
    .gte('date', startDate)
    .lte('date', endDate)
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching year archive:', error);
    return <p>Error loading archive.</p>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <h1>Archive for {year}</h1>
      <ContentFeed contentItems={data || []} />
    </div>
  );
}

