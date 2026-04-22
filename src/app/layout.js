import './globals.css';

export const metadata = {
  title: 'WA Post Viewer',
  description: 'Menampilkan konten dari Channel WhatsApp Anda.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}