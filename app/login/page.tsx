'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center gap-2 justify-center mb-8">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">H</span>
          </div>
          <h1 className="text-2xl font-bold">
            Hanzz<span className="text-purple-400">OTP</span>
          </h1>
        </Link>

        <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-2">Masuk ke Akun</h2>
          <p className="text-slate-400 text-sm mb-6">
            Login buat mulai order OTP dan kelola saldo kamu.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@kamu.com"
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-400 transition text-white placeholder-slate-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password kamu"
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-400 transition text-white placeholder-slate-500"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-300 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-500 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-purple-500/30"
            >
              {loading ? 'Memproses...' : 'Login'}
            </button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-6">
            Belum punya akun?{' '}
            <Link href="/register" className="text-purple-400 hover:text-purple-300 font-semibold">
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
