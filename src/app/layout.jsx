import '@/styles/globals.css'
import Providers from './providers'
import Header from '@/components/Header/Header'
import { getSiteSettings } from '@/lib/cosmic'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const siteSettings = await getSiteSettings()
const siteUrl = (siteSettings?.metadata?.site_url) ?? "";

export const metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon/icon.ico',
    shortcut: '/favicon/shortcut-icon.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-QWQY4WLS09" />
      </head>

      <body>
        <Providers>
          <Header />
          <main className="flex flex-col min-h-screen container flex-grow  px-20 m-auto mt-16 md:px-20 lg:px-20">
            {children}
          </main>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}
