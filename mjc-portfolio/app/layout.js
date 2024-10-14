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

// Keep metadata export here
export const metadata = {
  title: "Malcolm Connor Portfolio",
  description: "Showcasing my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-gray-200 p-5 text-center">
          
        </header>
        <main>{children}</main>
        <footer className="bg-gray-200 p-3 text-center">
          <p>&copy; {new Date().getFullYear()} Malcolm Connor Portfolio</p>
        </footer>
      </body>
    </html>
  );
}
