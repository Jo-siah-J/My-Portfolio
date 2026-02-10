import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';
 
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '../context/AuthContext';
import ToasterContext from '../context/ToastContext';
 
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={plusJakarta.className}>
      <body className="relalative min-h-screen bg-[#070614]">
        {/* FULL PAGE GRID BACKGROUND */}
        <div className='pointer-events-none fixed inset-0 -z-10'>
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0830] via-[#070614] to-black" />
         
          {/* Grid */}
          <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            backgroundPosition: "center",
          }}
          />
 
          {/* Glow + fade */}
          <div className="absolute inset-0 bg-[radial-gradient(ellispse_at_top,rgba(124,58,237,0.25), transparent_50%)]" />
          <div className="absolute inset-0 bg-black/40 [mask-image:linear-gradient(to_bottom, black, transparent_70%)]"/>
        </div>
         
          {/* APP CONTENT */}
          <div className="relative isolate">
          <NextTopLoader
            color='#8646F4'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />
 
          <AuthProvider>
            <Header />
            {children}
           
            <Footer />
 
            <ToasterContext />
          </AuthProvider>        
        </div>
          {/* Utilities */}
        <ScrollToTop />
      </body>
    </html>
  );
}
 
 