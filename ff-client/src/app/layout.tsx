import './globals.css'

export const metadata = {
  title: 'POC Feature Flag',
  description: 'prove to concept',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-screen'>
        <header className="p-8 bg-slate-800 text-white">
          <h1 className="text-2xl">POC Feature Flag</h1>
        </header>
        {children}
      </body>
    </html>
  )
}
