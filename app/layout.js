// app/layout.js
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'blahnok - Home',
  description:
    'Website attempting to summarize musical projects of blahnok (blah148), touching also on commentary.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="mainBody">
          <Sidebar />
          <div className="otherBody">
            <Header logoTitle="blahnok" />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

