import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SiteNav } from "@/components/site/site-nav";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Portfolio of Valuhk Januarta V, a full stack developer and UI/UX designer from Batam, Indonesia.";

export const metadata: Metadata = {
  title: {
    default: "Valuhk Januarta V — Full Stack Developer",
    template: "%s · Valuhk Januarta V",
  },
  description,
  openGraph: {
    title: "Valuhk Januarta V — Full Stack Developer",
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // next-themes sets the theme class on <html> before hydration.
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <SiteNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
