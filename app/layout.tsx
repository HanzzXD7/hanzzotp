import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import ContactButtons from '@/components/ContactButtons'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'HanzzOTP - Order OTP Cepat & Aman',
  description: 'Layanan sewa nomor virtual untuk verifikasi OTP dari berbagai platform. Cepat, murah, dan terpercaya.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ContactButtons />
      </body>
    </html>
  )
}
