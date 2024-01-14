import '@/styles/globals.css'
import Providers from './providers'
import Header from '@/components/Header'
import AlertPreview from '@/components/AlertPreview'
import { draftMode } from 'next/headers'
import { getSiteSettings } from '@/lib/cosmic'
import getMetadata from 'helpers/getMetadata'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const siteSettings = await getSiteSettings()
const siteUrl = getMetadata(siteSettings?.metadata?.site_url)

export const metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon/icon.ico',
    shortcut: '/favicon/shortcut-icon.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
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
  const { isEnabled } = draftMode()

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <GoogleAnalytics gaId="G-QWQY4WLS09" />
      </head>

      <body>
        <Providers>
          <Header />
          {isEnabled && <AlertPreview enabled={isEnabled} />}
          <main className="flex flex-col min-h-screen container flex-grow  px-5 m-auto mt-16 md:px-12 lg:px-20">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
