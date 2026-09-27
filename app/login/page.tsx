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
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-12">
      {/* Background Anime */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/anime-bg.jpg')" }}
      ></div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e]/95 via-[#2d1b4e]/90 to-[#1a0b2e]/95"></div>

      {/* Blob */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-blob pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <div className="w-full max-w-md relative z-10">
        <Link href="/" className="flex items-center gap-2 justify-center mb-8 group">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/40 group-hover:scale-110 transition animate-glow">
            <span className="text-white font-bold">H</span>
          </div>
          <h1 className="text-2xl font-bold text-white">
            Hanzz<span className="text-purple-400">OTP</span>
          </h1>
        </Link>

        <div className="bg-white/[0.03] backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-white">
              Selamat <span className="text-purple-400">Datang</span>
            </h2>
            <p className="text-slate-400 text-sm">
              Login buat mulai order OTP dan kelola saldo kamu.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-200">Email</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@kamu.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white/10 transition text-white placeholder-slate-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-200">Password</label>
                <a href="#" className="text-xs text-purple-400 hover:text-purple-300 transition">
                  Lupa password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password kamu"
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white/10 transition text-white placeholder-slate-500"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-300 text-sm flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Memproses...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-purple-500/20 text-center">
            <p className="text-slate-400 text-sm">
              Belum punya akun?{' '}
              <Link href="/register" className="text-purple-400 hover:text-purple-300 font-semibold transition">
                Daftar Gratis
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
