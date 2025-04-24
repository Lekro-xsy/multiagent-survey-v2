// app/layout.tsx
import '../styles/globals.css'    // or wherever your global CSS lives

export const metadata = {
  title: 'ABCD Quiz',
  description: 'Primary, Secondary & Senior High quizzes with feedback',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
