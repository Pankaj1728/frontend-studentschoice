import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { SiteEffects } from '@/components/layout/SiteEffects';
import { LeadModalProvider } from '@/components/lead/LeadModal';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Student's Choice | Abroad Education Consultancy",
  description: "Your All-in One Platform for Studying Abroad - Plan and Apply with confidence.",
  icons: {
    icon: [
      { url: "/assets/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/assets/images/favicon/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/assets/images/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="font-sans antialiased">
        <MantineProvider
          defaultColorScheme="light"
          theme={{
            fontFamily: 'var(--font-outfit), system-ui, sans-serif',
            headings: { fontFamily: 'var(--font-outfit), system-ui, sans-serif' },
          }}
        >
          <LeadModalProvider>
            <SiteEffects />
            {children}
          </LeadModalProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
