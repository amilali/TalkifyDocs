import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/global.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TalkifyDocs | Chat with your customers',
  description: 'TalkifyDocs is a chat widget that helps you talk to your customers',
  keywords: ['talkifydocs', 'chat', 'widget', 'customer', 'support'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
</ClerkProvider>

  )
}
