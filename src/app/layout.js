import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tranxity",
  description: "Enter a whole Bike hailing Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#a8a8aa] antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
