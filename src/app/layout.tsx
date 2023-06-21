"use client"
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
// import NavBar from './Components/Navbar';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Offsiders',
  description: 'All about football',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
          <header className='text-lg sm:text-xl'>
          <NavBar/>
          </header>
          <section className='text-lg mt-12 pt-2'>
        {children}
          </section>
          <footer className='text-lg'>
            <Footer/>
          </footer>
        </body>
    </html>
  )
}
