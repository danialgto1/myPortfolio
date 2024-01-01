import './globals.css'
import NavBar from './components/NavBar'

export const metadata = {
  title: 'Ehsan Malmiri | Portfolio',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  >
        <NavBar/>
        <main className=' bg-slate-300/20 h-full '>
        {children}
        </main>
        </body>
    </html>
  )
}
