// app/dates/page.js
import { supabase } from '../../lib/supabaseClient';
import styles from '../../styles/Dates.module.css';

export const metadata = {
  title: 'blah148 - Dates',
  description: 'A list of dates, past & future, when blah148 is playing music.',
};

export default async function DatesPage() {
  // optional artificial delay to test loader
  // await new Promise((r) => setTimeout(r, 3000));

  const { data, error } = await supabase
    .from('tour')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching tour data:', error);
    return <p>Error loading tour dates.</p>;
  }

  const tourData = data ?? [];

  return (
    <div className={styles['tour-content']}>
      {tourData.length === 0 ? (
        <p>No past performance dates</p>
      ) : (
        <ul>
          {tourData.map((tour) => (
            <li key={tour.id}>
              <strong>{tour.date}</strong>: {tour.city}, {tour.state_province},{' '}
              {tour.country} at {tour.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

