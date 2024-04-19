import "@/styles/globals.css";
import { LoadingProvider } from '../context/LoadingContext'; // Make sure the path is correct

export default function App({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  );
}

