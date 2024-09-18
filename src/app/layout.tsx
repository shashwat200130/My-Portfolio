import type { Metadata } from "next";
import urbanist from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PreLoader from "@/components/PreLoader";
import Footer from "@/components/Footer";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";

const geistSans = urbanist({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = urbanist({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetaData(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.meta_title,
    description: settings.data.meta_description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100 scrollbar-hide">
      <body className={ `${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen` }>
        <PreLoader />
        <Header />
        {children}
        <Footer />
        <div className="absolute inset-0 -z-50 max-h-screen background-gradient"></div>
        <div className="absolute pointer-events-none inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
