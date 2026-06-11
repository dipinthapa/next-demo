// app/layout.tsx
import { Metadata } from 'next';

// Built-in SEO metadata API
export const metadata: Metadata = {
  title: 'My Next.js Application',
  description: 'Built with the App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', background: '#eee' }}>
          <nav>Global Navigation Header</nav>
        </header>
        
        {/* Pages or nested layouts are injected here */}
        <main>{children}</main>
        
        <footer style={{ padding: '1rem', background: '#eee' }}>
          <p>© 2026 My App</p>
        </footer>
      </body>
    </html>
  );
}
