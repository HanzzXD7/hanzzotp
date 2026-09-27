'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [showQR, setShowQR] = useState(false)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push('/login')
      } else {
        setUser(data.user)
      }
      setLoading(false)
    })
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-400"></div>
      </main>
    )
  }

  const username = user?.user_metadata?.username || user?.email?.split('@')[0] || 'User'

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] text-white">
      <nav className="flex justify-between items-center px-6 py-4 border-b border-purple-500/20 sticky top-0 bg-[#1a0b2e]/80 backdrop-blur-lg z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-purple-500/40">
            <img src="/logo.jpg" alt="HanzzOTP" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-xl font-bold">
            Hanzz<span className="text-purple-400">OTP</span>
          </h1>
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-300 px-4 py-2 rounded-lg transition font-medium text-sm"
        >
          Logout
        </button>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
        <p className="text-slate-400 mb-8">Selamat datang kembali!</p>

        <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <span className="text-white font-bold text-2xl">
                {username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-slate-400 text-xs mb-1">Login sebagai:</p>
              <p className="text-xl font-bold text-purple-300">@{username}</p>
              <p className="text-slate-400 text-sm">{user?.email}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6">
            <p className="text-slate-400 text-sm mb-1">Saldo</p>
            <p className="text-2xl font-bold text-purple-400">Rp0</p>
          </div>
          <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6">
            <p className="text-slate-400 text-sm mb-1">Total Order</p>
            <p className="text-2xl font-bold text-purple-400">0</p>
          </div>
        </div>

        <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 text-center mb-6">
          <p className="text-slate-400 mb-2">Fitur order OTP</p>
          <p className="text-slate-500 text-sm">Segera hadir 🚧</p>
        </div>

        <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="flex items-start gap-4 mb-4 relative">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">
                Dukung <span className="text-purple-400">Developer</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Traktir gue kopi ☕ biar HanzzOTP terus dikembangin dan tetap gratis!
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowQR(!showQR)}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2 relative"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
            {showQR ? 'Tutup QRIS' : 'Tampilkan QRIS'}
          </button>

          {showQR && (
            <div className="mt-4 bg-white rounded-2xl p-4 text-center relative">
              <img
                src="/qris.jpeg"
                alt="QRIS Donasi"
                className="w-full max-w-sm mx-auto rounded-lg"
              />
              <p className="text-gray-700 font-semibold mt-3 text-sm">
                Scan pakai e-wallet apapun 📱
              </p>
              <p className="text-gray-500 text-xs mt-1">
                DANA · OVO · GoPay · ShopeePay · Mobile Banking
              </p>
              <p className="text-purple-600 text-xs mt-2 font-medium">
                Setiap donasi sangat berarti 🙏
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
