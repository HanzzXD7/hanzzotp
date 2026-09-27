export default function Home() {
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
    switch (icon) {
      case 'whatsapp':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        )
      case 'telegram':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        )
      case 'instagram':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        )
      case 'tiktok':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
        )
      case 'facebook':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        )
      case 'google':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        )
      case 'shopee':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M12 0C9.24 0 7 2.24 7 5v1H3.5C2.67 6 2 6.67 2 7.5l1 13c.05.85.76 1.5 1.6 1.5h14.8c.84 0 1.55-.65 1.6-1.5l1-13c.05-.83-.62-1.5-1.45-1.5H17V5c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v1H9V5c0-1.66 1.34-3 3-3zm0 8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
          </svg>
        )
      case 'gojek':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" fill="currentColor"/>
          </svg>
        )
      default:
        return null
    }
  }

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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            Mulai Sekarang Gratis
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-purple-500/20 text-white px-6 py-4 rounded-xl font-semibold text-base transition flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Cek Harga Termurah
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
