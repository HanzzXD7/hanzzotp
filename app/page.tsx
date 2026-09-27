export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] text-white">
      <nav className="flex justify-between items-center px-6 py-4 border-b border-purple-500/20">
        <h1 className="text-2xl font-bold">
          Hanzz<span className="text-purple-400">OTP</span>
        </h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 hover:bg-white/10 rounded-lg transition">
            Login
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition font-semibold">
            Daftar
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-1 mb-6">
          <span className="text-purple-300 text-sm">Layanan OTP Tercepat #1</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Order OTP <span className="text-purple-400">Cepat & Aman</span>
        </h2>
        
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Dapatkan nomor virtual untuk verifikasi OTP dari berbagai layanan 
          dalam hitungan detik. Harga murah, proses instan, 24 jam online.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg shadow-purple-500/30">
            Mulai Sekarang
          </button>
          <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition">
            Lihat Harga
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Proses Instan</h3>
            <p className="text-slate-400">OTP masuk dalam hitungan detik</p>
          </div>

          <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 transition">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Harga Murah</h3>
            <p className="text-slate-400">Mulai dari Rp1.000 per OTP</p>
          </div>

          <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 transition">
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

      <footer className="border-t border-purple-500/20 mt-20 py-8 text-center text-slate-400">
        <p>© 2026 HanzzOTP. All rights reserved.</p>
      </footer>
    </main>
  )
}
