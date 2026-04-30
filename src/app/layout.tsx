import type { Metadata } from 'next';
import '../index.css';
import { Footer, Header } from '@/components/Layout';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'SMG Plombier | Plombier à Douala et Yassa',
  description:
    'SMG Plombier intervient à Douala et Yassa pour le dépannage, l’installation et l’entretien plomberie 24h/24 et 7j/7.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
