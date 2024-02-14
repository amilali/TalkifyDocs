import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/global.css'
import { ClerkProvider } from '@clerk/nextjs'
import Providers from '@/components/Providers'
import { Toaster } from 'react-hot-toast';
import { dark , neobrutalism  } from '@clerk/themes';
import { Providers2 } from './providers2';
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider appearance={{
          signIn: { baseTheme: neobrutalism },
        }}>
          <Providers>
              <Providers2>
            {children}
              </ Providers2>
          </Providers>
        </ClerkProvider>
        <Toaster />
      </body>
    </html>
  )
}
