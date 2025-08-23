// app/loading.js
import Loader from '../components/Loader';

export default function Loading() {
  // Always show loader while server is waiting
  return <Loader isLoading={true} />;
}

