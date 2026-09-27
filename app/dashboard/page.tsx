'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
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
        <p className="text-slate-400">Loading...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] text-white">
      <nav className="flex justify-between items-center px-6 py-4 border-b border-purple-500/20">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
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
          <p className="text-slate-400 text-sm mb-2">Login sebagai:</p>
          <p className="text-lg font-semibold">{user?.email}</p>
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

        <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8 text-center">
          <p className="text-slate-400 mb-2">Fitur order OTP</p>
          <p className="text-slate-500 text-sm">Segera hadir 🚧</p>
        </div>
      </div>
    </main>
  )
}
