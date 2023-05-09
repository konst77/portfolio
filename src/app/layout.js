import './globals.css'
import Script from 'next/script'
import localFont from 'next/font/local';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './../../public/font/css/cabinet-grotesk.css'
import './../../public/font/css/satoshi.css'

const cabinet = localFont({
  src: [
    {
      path: './../../public/font/fonts/CabinetGrotesk-Variable.woff',
      weight: '100 200 300 400 500 600 700 800 900',
      style: 'normal',
    },
  ],
  variable: '--font-cabinet',
});

const satoshi = localFont({
  src: [
    {
      path: './../../public/font/fonts/Satoshi-Variable.woff',
      weight: '100 200 300 400 500 600 700 800 900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
});

export const metadata = {
  title: 'Ray Moon',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LRGRM1QC1D" />
      <Script
        dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y0********', {
            page_path: window.location.pathname,
            });`,
        }}
      />
    <html lang="en">
      <body className={`${cabinet.variable} ${satoshi.variable}`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
    </>
  )
}
