import type { Metadata } from "next";
import { Bebas_Neue, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import brandData from "@/data/brandData.json";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "800",
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: brandData.seo.title,
  description: brandData.seo.description,
  openGraph: {
    title: brandData.seo.title,
    description: brandData.seo.description,
    url: brandData.seo.url,
    siteName: brandData.brandName,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${montserrat.variable} ${poppins.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-texture text-[var(--color-foreground)] bg-[var(--color-background)] selection:bg-[var(--color-accent-red)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
