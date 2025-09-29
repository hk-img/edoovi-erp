import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/comman/Header";
import Footer from "@/components/comman/Footer";
import { GoogleTagManager } from '@next/third-parties/google'

const lufga = localFont({
  src: [
    { path: "/fonts/Lufga-Thin.woff2", weight: "100", style: "normal" },
    { path: "/fonts/Lufga-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "/fonts/Lufga-ExtraLight.woff2", weight: "200", style: "normal" },
    {
      path: "/fonts/Lufga-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    { path: "/fonts/Lufga-Light.woff2", weight: "300", style: "normal" },
    { path: "/fonts/Lufga-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "/fonts/Lufga-Regular.woff2", weight: "400", style: "normal" },
    { path: "/fonts/Lufga-Italic.woff2", weight: "400", style: "italic" },
    { path: "/fonts/Lufga-Medium.woff2", weight: "500", style: "normal" },
    { path: "/fonts/Lufga-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "/fonts/Lufga-SemiBold.woff2", weight: "600", style: "normal" },
    {
      path: "/fonts/Lufga-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    { path: "/fonts/Lufga-Bold.woff2", weight: "700", style: "normal" },
    { path: "/fonts/Lufga-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "/fonts/Lufga-ExtraBold.woff2", weight: "800", style: "normal" },
    {
      path: "/fonts/Lufga-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    { path: "/fonts/Lufga-Black.woff2", weight: "900", style: "normal" },
    { path: "/fonts/Lufga-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
});
export const metadata = {
  title: "Edoovi",
  description: "Edoovi",

  icons: {
    icon: [
      { url: "/fav/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },

  robots: {
    index: false,
    follow: false,
  },
  verification: {
    google: "LhpPxxKzaT3dMTScjUxrlo7FaKktw1txDeRABKsTm2s",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'light',
  themeColor: 'black',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="md:text-[1vw]">
      <body className={`${lufga.className} antialiased`}>
        <GoogleTagManager gtmId="G-PLKRCEDZ6S" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
