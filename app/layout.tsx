import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from 'next/script'
import { ThemeProvider } from "@/lib/ThemeContext";
import { LanguageProvider } from "@/lib/LanguageContext";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mrvivot.com"),
  title: "Manuel Rojo Vivot — Product & UX Designer",
  description:
    "Diseño experiencias digitales que conectan usuarios con negocios reales.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Manuel Rojo Vivot",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/images/about-photo.jpg", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="font-sans bg-background text-text-primary min-h-full flex flex-col pt-14 md:pt-0 pb-16 md:pb-0">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function () {
    try {
      var saved = localStorage.getItem('theme');
      var isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) document.documentElement.classList.add('dark');
    } catch (e) {}
  })();`}
        </Script>
        <ThemeProvider>
          <LanguageProvider>
            <Nav />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "xfnpppw2mh");`}
        </Script>
      </body>
    </html>
  );
}
