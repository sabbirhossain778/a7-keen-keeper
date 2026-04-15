import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/navbar";
import Footer from "@/components/Shared/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactProvider } from '@/context/ContactContext';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Keen Keeper",
  description: "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme='light'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ContactProvider>
          <Navbar></Navbar>
          <main className="flex-1 container mx-auto">
            {children}
            <ToastContainer position="top-right" autoClose={1500} />
          </main>
          <Footer></Footer>
        </ContactProvider>
      </body>
    </html>
  );
}
