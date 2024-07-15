import { primaryFont } from '@settings/fonts'
import '@styles/global.scss'
import Footer from '@components/sections/Footer'
import Header from '@components/sections/Header'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`h-full scroll-smooth`} lang="en">
      <body className={`${primaryFont.className} h-full`}>
        <div className="wrapper bg-primary-black flex min-h-full flex-col overflow-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
