export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <h1 className="text-2xl font-bold">
          Hanzz<span className="text-blue-400">OTP</span>
        </h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 hover:bg-white/10 rounded-lg transition">
            Login
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition font-semibold">
            Daftar
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1 mb-6">
          <span className="text-blue-300 text-sm">🚀 Layanan OTP Tercepat #1</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Order OTP <span className="text-blue-400">Cepat & Aman</span>
        </h2>
        
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Dapatkan nomor virtual untuk verifikasi OTP dari berbagai layanan 
          dalam hitungan detik. Harga murah, proses instan, 24 jam online.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg shadow-blue-500/30">
            Mulai Sekarang
          </button>
          <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition">
            Lihat Harga
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '⚡', title: 'Proses Instan', desc: 'OTP masuk dalam hitungan detik' },
            { icon: '💰', title: 'Harga Murah', desc: 'Mulai dari Rp1.000 per OTP' },
            { icon: '🔒', title: 'Aman & Terpercaya', desc: 'Data kamu terjamin keamanannya' },
          ].map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-white/10 mt-20 py-8 text-center text-slate-400">
        <p>© 2026 HanzzOTP. All rights reserved.</p>
      </footer>
    </main>
  )
}
