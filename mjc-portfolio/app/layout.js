import localFont from "next/font/local";
import "./globals.css";
import BottomNav from './components/bottom-nav';
import SideNav from './components/side-nav';
import MaxWidthWrapper from './components/max-width-wrapper';

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

// Keep metadata export here
export const metadata = {
  title: "Malcolm Connor Portfolio",
  description: "Showcasing my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <MaxWidthWrapper>
          <div className="flex">
            <SideNav />
            <main className="flex-1">{children}</main>
          </div>
        </MaxWidthWrapper>
        <BottomNav />
      </body>
    </html>
  );
}
