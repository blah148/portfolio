// app/archive/[year]/[month]/page.js
import { supabase } from '../../../../lib/supabaseClient';
import ContentFeed from '../../../../components/Content';
import ArchiveDropdown from '../../../../components/ArchiveDropdown';

// full month name → number mapping
const monthMap = {
  january: '01',
  february: '02',
  march: '03',
  april: '04',
  may: '05',
  june: '06',
  july: '07',
  august: '08',
  september: '09',
  october: '10',
  november: '11',
  december: '12',
};

export async function generateMetadata({ params }) {
  const { year, month } = params;
  return {
    title: `Posts from ${month} ${year}`,
    description: `Archive of posts from ${month} ${year}`,
  };
}

export default async function ArchiveMonthPage({ params }) {
  const { year, month } = params;

  const normalized = month.toLowerCase();
  const paddedMonth = monthMap[normalized];

  if (!paddedMonth) {
    return <p>Invalid month: {month}</p>;
  }

  const startDate = `${year}-${paddedMonth}-01`;

  // get the last day of the month (safe with Date object)
  const lastDay = new Date(year, parseInt(paddedMonth), 0).getDate();
  const endDateStr = `${year}-${paddedMonth}-${lastDay}`;

  const { data, error } = await supabase
    .from('content')
    .select('*, tags(name, hyperlink)')
    .gte('date', startDate)
    .lte('date', endDateStr)
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching month archive:', error);
    return <p>Error loading archive.</p>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <h1>Archive for {month} {year}</h1>
			<ArchiveDropdown />
      <ContentFeed contentItems={data || []} />
    </div>
  );
}

