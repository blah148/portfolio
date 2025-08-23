// app/page.js
import { supabase } from '../lib/supabaseClient';
import Content from '../components/Content';

export default async function HomePage() {

  const { data, error } = await supabase
    .from('content')
    .select('*, tags(name, hyperlink)')
    .order('date', { ascending: false });

  if (error) console.error(error);

  return <Content contentItems={data || []} />;
}

