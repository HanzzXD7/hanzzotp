export default function Home() {
  const stats = [
    { num: '12K+', label: 'Pengguna Aktif' },
    { num: '97.6%', label: 'Success Rate' },
    { num: '< 30s', label: 'OTP Masuk' },
  ]

  const prices = [
    { name: 'WhatsApp', price: 'Rp2.500' },
    { name: 'Telegram', price: 'Rp2.000' },
    { name: 'Instagram', price: 'Rp1.500' },
    { name: 'TikTok', price: 'Rp1.500' },
    { name: 'Facebook', price: 'Rp2.000' },
    { name: 'Google', price: 'Rp3.000' },
    { name: 'Shopee', price: 'Rp200' },
    { name: 'Gojek', price: 'Rp500' },
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-purple-500/20 sticky top-0 bg-[#1a0b2e]/80 backdrop-blur-lg z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <h1 className="text-xl font-bold">
            Hanzz<span className="text-purple-400">OTP</span>
          </h1>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-slate-200 hover:bg-white/10 rounded-lg transition font-medium text-sm">
            Masuk
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition font-semibold text-sm">
            Daftar
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <div className="inline-block bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-1 mb-6">
          <span className="text-purple-300 text-xs font-semibold">● PLATFORM TERPERCAYA · SISTEM AKTIF 24/7</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          OTP Murah <span className="text-purple-400">#1</span><br />
          Sewa Nomor di Indonesia
        </h2>

        <p className="text-base text-slate-200 mb-4 leading-relaxed">
          Verifikasi <b>WhatsApp</b>, <b>Telegram</b>, <b>Tinder</b>, <b>Gojek</b>, <b>Shopee</b> dan ratusan aplikasi lainnya — <b className="text-purple-300">mulai Rp150</b> saja.
        </p>

        <p className="text-slate-400 italic mb-6">"Cepat, Aman, Terpercaya."</p>

        <p className="text-slate-400 mb-8 leading-relaxed text-sm">
          HanzzOTP adalah penyedia <b className="text-slate-200">sewa nomor virtual</b> & layanan <b className="text-slate-200">SMS OTP murah Indonesia</b> — solusi praktis buat verifikasi akun aplikasi tanpa harus pakai nomor pribadi atau beli kartu SIM baru. Tersedia <b className="text-slate-200">100+ layanan</b> dari <b className="text-slate-200">30+ negara</b> dengan harga paling kompetitif, refund otomatis bila OTP gagal masuk.
        </p>

        <div className="flex flex-col gap-3 mb-10">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-base transition shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2">
            🚀 Mulai Sekarang Gratis
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-purple-500/20 text-white px-6 py-4 rounded-xl font-semibold text-base transition flex items-center justify-center gap-2">
            💰 Cek Harga Termurah
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/5 border border-purple-500/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">{s.num}</div>
              <div className="text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
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
            <p className="text-slate-400">Mulai dari Rp150 per OTP</p>
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

      {/* Harga */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Daftar <span className="text-purple-400">Harga</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            Harga transparan, tanpa biaya tersembunyi. Bayar sesuai yang kamu pakai.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {prices.map((p, i) => (
            <div key={i} className="bg-white/5 border border-purple-500/20 rounded-xl p-4 hover:bg-white/10 hover:border-purple-400/40 transition text-center">
              <h3 className="text-sm font-semibold mb-1 text-slate-200">{p.name}</h3>
              <p className="text-lg font-bold text-purple-400">{p.price}</p>
              <p className="text-slate-500 text-xs mt-1">per OTP</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cara Order */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cara <span className="text-purple-400">Order</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            Cuma 4 langkah mudah, kamu udah bisa terima OTP.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="bg-white/5 border border-purple-500/20 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-lg font-bold mb-3">
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
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan <span className="text-purple-400">Umum</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Belum nemu jawabannya? Hubungi kami via WhatsApp atau Telegram.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group bg-white/5 border border-purple-500/20 rounded-xl p-5 hover:bg-white/10 transition">
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

      {/* CTA */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-gradient-to-r from-purple-600/30 to-purple-800/30 border border-purple-500/30 rounded-3xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Mulai Order OTP?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Daftar sekarang dan nikmati kemudahan verifikasi OTP tanpa ribet.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg shadow-purple-500/30">
            Daftar Gratis Sekarang
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 mt-20 pt-12 pb-8">
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
    </main>
  )
}
