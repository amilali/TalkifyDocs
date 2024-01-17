import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/global.css'
import { ClerkProvider } from '@clerk/nextjs'
import Providers from '@/components/Providers'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TalkifyDocs | Chat with your customers',
  description: 'TalkifyDocs is a chat widget that helps you talk to your customers',
  keywords: ['talkifydocs', 'chat', 'widget', 'customer', 'support'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Providers>
            {children}
          </Providers>
        </ClerkProvider>
        <Toaster />
      </body>
    </html>
  )
}
