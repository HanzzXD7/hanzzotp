'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Login() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

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
    <main className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] text-white relative overflow-hidden">
      {/* Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: "url('/anime-bg.jpg')",
            transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#1a0b2e]/50 to-[#1a0b2e]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-fuchsia-900/30"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 animate-fade-in-up">
          <div className="inline-block bg-purple-500/20 backdrop-blur-md border border-purple-400/40 rounded-full px-4 py-1 mb-3">
            <span className="text-purple-200 text-xs font-semibold tracking-wide">
              ✨ WELCOME BACK
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl mb-1">
            Selamat Datang
          </h1>
          <p className="text-purple-100/90 text-sm md:text-base drop-shadow-lg">
            Login dan lanjut order OTP kamu
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a0b2e] to-transparent"></div>
      </div>

      {/* Form */}
      <div className="relative z-10 -mt-16 flex items-center justify-center px-6 pb-16">
        <div className="w-full max-w-md animate-fade-in-up">
          <Link href="/" className="flex items-center gap-2 justify-center mb-6 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-purple-500/40 group-hover:scale-110 transition animate-glow">
              <img src="/logo.jpg" alt="HanzzOTP" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl font-bold text-white">
              Hanzz<span className="text-purple-400">OTP</span>
            </h1>
          </Link>

          <div className="bg-white/[0.03] backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-white">
                Masuk ke <span className="text-purple-400">Akun</span>
              </h2>
              <p className="text-slate-400 text-sm">
                Login buat mulai order OTP dan kelola saldo kamu.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-200">Email</label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition ${isEmailValid ? 'text-green-400' : 'text-purple-400'}`}>
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
                    className={`w-full pl-12 pr-12 py-3.5 bg-white/5 border rounded-xl focus:outline-none focus:bg-white/10 transition text-white placeholder-slate-500 ${
                      email && isEmailValid
                        ? 'border-green-500/40 focus:border-green-400'
                        : 'border-purple-500/30 focus:border-purple-400'
                    }`}
                  />
                  {isEmailValid && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 animate-fade-in">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* PASSWORD */}
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
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password kamu"
                    className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white/10 transition text-white placeholder-slate-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-purple-400 transition"
                    aria-label="Toggle password"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-300 text-sm flex items-start gap-2 animate-fade-in">
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
      </div>
    </main>
  )
      }
