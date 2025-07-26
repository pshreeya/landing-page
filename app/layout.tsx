//root layout and required in every Next.js app
//any ui that is added will be shared across all pages in the app
import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className = {`$(inter.className) antialiased`}>{children}</body>
    </html>
  );
}
