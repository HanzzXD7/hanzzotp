'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const stats = [
    { num: '12K+', label: 'Pengguna Aktif' },
    { num: '97.6%', label: 'Success Rate' },
    { num: '< 30s', label: 'OTP Masuk' },
  ]

  const prices = [
    { name: 'WhatsApp', price: 'Rp2.500', color: 'bg-[#25D366]', icon: 'whatsapp' },
    { name: 'Telegram', price: 'Rp2.000', color: 'bg-[#0088cc]', icon: 'telegram' },
    { name: 'Instagram', price: 'Rp1.500', color: 'bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]', icon: 'instagram' },
    { name: 'TikTok', price: 'Rp1.500', color: 'bg-black', icon: 'tiktok' },
    { name: 'Facebook', price: 'Rp2.000', color: 'bg-[#1877F2]', icon: 'facebook' },
    { name: 'Google', price: 'Rp3.000', color: 'bg-white', icon: 'google' },
    { name: 'Shopee', price: 'Rp200', color: 'bg-[#EE4D2D]', icon: 'shopee' },
    { name: 'Gojek', price: 'Rp500', color: 'bg-[#00AA13]', icon: 'gojek' },
  ]

  const steps = [
    { num: '1', title: 'Daftar Akun', desc: 'Buat akun gratis dalam 30 detik' },
    { num: '2', title: 'Deposit Saldo', desc: 'Isi saldo via QRIS atau e-wallet' },
    { num: '3', title: 'Pilih Layanan', desc: 'Pilih platform yang mau diverifikasi' },
    { num: '4', title: 'Terima OTP', desc: 'Kode OTP muncul otomatis di dashboard' },
  ]

  const faqs = [
    { q: 'Apa itu HanzzOTP?', a: 'HanzzOTP adalah layanan sewa nomor virtual untuk menerima SMS OTP dari berbagai platform seperti WhatsApp, Telegram, Instagram, Shopee, dan ratusan aplikasi lainnya.' },
    { q: 'Berapa lama OTP masuk?', a: 'Rata-rata OTP masuk dalam 30 detik. Kalau lebih dari 20 menit tidak masuk, saldo otomatis dikembalikan 100%.' },
    { q: 'Apakah aman?', a: 'Ya, kami menggunakan penyedia API resmi dan terenkripsi. Data kamu tidak akan dibagikan ke pihak lain.' },
    { q: 'Bagaimana cara deposit?', a: 'Deposit bisa melalui QRIS, transfer bank, atau e-wallet. Saldo masuk otomatis setelah pembayaran dikonfirmasi.' },
    { q: 'Apakah ada refund?', a: 'Jika OTP tidak masuk dalam 20 menit, saldo otomatis dikembalikan 100% tanpa potongan.' },
  ]

  const renderIcon = (icon: string) => {
    if (icon === 'google') {
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      )
    }
    return (
      <img
        src={`https://cdn.simpleicons.org/${icon}/white`}
        alt={icon}
        className="w-7 h-7"
      />
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] text-white relative overflow-x-hidden">
      {/* Floating background blobs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob pointer-events-none -z-0"></div>
      <div className="fixed top-1/3 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob pointer-events-none -z-0" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-0 left-1/3 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl animate-blob pointer-events-none -z-0" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 border-b border-purple-500/20 sticky top-0 bg-[#1a0b2e]/80 backdrop-blur-lg z-50 animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/40 animate-glow">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <h1 className="text-xl font-bold">
              Hanzz<span className="text-purple-400">OTP</span>
            </h1>
          </div>
          <div className="flex gap-2">
            <Link href="/login" className="px-4 py-2 text-slate-200 hover:bg-white/10 rounded-lg transition font-medium text-sm">
              Masuk
            </Link>
            <Link href="/register" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition font-semibold text-sm hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/30">
              Daftar
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="container mx-auto px-6 py-12 max-w-2xl">
          <div className="inline-block bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-1 mb-6 animate-fade-in-up delay-100">
            <span className="text-purple-300 text-xs font-semibold">● PLATFORM TERPERCAYA · SISTEM AKTIF 24/7</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in-up delay-200">
            OTP Murah <span className="text-purple-400">#1</span><br />
            Sewa Nomor di Indonesia
          </h2>

          <p className="text-base text-slate-200 mb-4 leading-relaxed animate-fade-in-up delay-300">
            Verifikasi <b>WhatsApp</b>, <b>Telegram</b>, <b>Tinder</b>, <b>Gojek</b>, <b>Shopee</b> dan ratusan aplikasi lainnya — <b className="text-purple-300">mulai Rp150</b> saja.
          </p>

          <p className="text-slate-400 italic mb-6 animate-fade-in-up delay-400">"Cepat, Aman, Terpercaya."</p>

          <p className="text-slate-400 mb-8 leading-relaxed text-sm animate-fade-in-up delay-400">
            HanzzOTP adalah penyedia <b className="text-slate-200">sewa nomor virtual</b> & layanan <b className="text-slate-200">SMS OTP murah Indonesia</b> — solusi praktis buat verifikasi akun aplikasi tanpa harus pakai nomor pribadi atau beli kartu SIM baru. Tersedia <b className="text-slate-200">100+ layanan</b> dari <b className="text-slate-200">30+ negara</b> dengan harga paling kompetitif, refund otomatis bila OTP gagal masuk.
          </p>

          <div className="flex flex-col gap-3 mb-10 animate-fade-in-up delay-500">
            <Link href="/register" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-base transition shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] animate-glow">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
              Mulai Sekarang Gratis
            </Link>
            <a href="#harga" className="bg-white/10 hover:bg-white/20 border border-purple-500/20 text-white px-6 py-4 rounded-xl font-semibold text-base transition flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Cek Harga Termurah
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 animate-fade-in-up delay-600">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/5 border border-purple-500/20 rounded-xl p-4 text-center hover-lift">
                <div className="text-2xl font-bold text-purple-400 mb-1">{s.num}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="reveal reveal-delay-1 bg-white/5 border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Proses Instan</h3>
              <p className="text-slate-400">OTP masuk dalam hitungan detik</p>
            </div>

            <div className="reveal reveal-delay-2 bg-white/5 border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Harga Murah</h3>
              <p className="text-slate-400">Mulai dari Rp150 per OTP</p>
            </div>

            <div className="reveal reveal-delay-3 bg-white/5 border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Aman & Terpercaya</h3>
              <p className="text-slate-400">Data kamu terjamin keamanannya</p>
            </div>
          </div>
        </div>

        {/* Harga */}
        <div id="harga" className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Daftar <span className="text-purple-400">Harga</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">
              Harga transparan, tanpa biaya tersembunyi. Bayar sesuai yang kamu pakai.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {prices.map((p, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 4) + 1} bg-white/5 border border-purple-500/20 rounded-xl p-4 hover:bg-white/10 hover:border-purple-400/40 transition text-center hover-lift`}>
                <div className={`w-12 h-12 ${p.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  {renderIcon(p.icon)}
                </div>
                <h3 className="text-sm font-semibold mb-1 text-slate-200">{p.name}</h3>
                <p className="text-lg font-bold text-purple-400">{p.price}</p>
                <p className="text-slate-500 text-xs mt-1">per OTP</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cara Order */}
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cara <span className="text-purple-400">Order</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">
              Cuma 4 langkah mudah, kamu udah bisa terima OTP.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} bg-white/5 border border-purple-500/20 rounded-2xl p-5 hover-lift`}>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-lg font-bold mb-3 shadow-lg shadow-purple-500/40">
                  {s.num}
                </div>
                <h3 className="text-base font-bold mb-1">{s.title}</h3>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pertanyaan <span className="text-purple-400">Umum</span>
            </h2>
            <p className="text-slate-400 text-sm">
              Belum nemu jawabannya? Hubungi kami via WhatsApp atau Telegram.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className={`reveal reveal-delay-${(i % 5) + 1} group bg-white/5 border border-purple-500/20 rounded-xl p-5 hover:bg-white/10 transition`}>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold pr-4">{f.q}</span>
                  <svg className="w-5 h-5 text-purple-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-slate-400 mt-3 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-purple-500/20 mt-20 pt-12 pb-8 reveal">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid md:grid-cols-4 gap-8 mb-10">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-3">
                  Hanzz<span className="text-purple-400">OTP</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                  Layanan nomor virtual untuk verifikasi OTP dari berbagai platform.
                  Cepat, murah, dan terpercaya sejak 2026.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-3">Layanan</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-purple-400 transition">Order OTP</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Deposit Saldo</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">API Reseller</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Cek Harga</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">Bantuan</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-purple-400 transition">FAQ</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Hubungi Kami</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Syarat & Ketentuan</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition">Kebijakan Privasi</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-purple-500/20 pt-6 text-center text-slate-400 text-sm">
              <p>© 2026 HanzzOTP. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
      }
