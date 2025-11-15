// app/layout.js
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'blah148 - Home',
  description:
    'Website attempting to summarize musical projects of blah148, touching also on commentary.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
            {children}
      </body>
    </html>
  );
}


