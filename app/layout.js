import './globals.css'
import { Jost } from 'next/font/google'
import Navbar from './(shared)/Navbar'
import Footer from './(shared)/Footer'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Designo',
  description: 'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
