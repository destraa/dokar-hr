
import React from 'react';
import type { Plan, FeatureCategory, Addon } from './types';

export const PLANS: Plan[] = [
  {
    name: "STARTER",
    tagline: "Mulai Digitalisasi",
    price: "9.900",
    priceDetails: "per Karyawan/Bulan",
    description: "Solusi absensi digital yang akurat untuk UKM & startup.",
    cta: "Pilih Paket",
    ctaAction: "#pricing",
  },
  {
    name: "PROFESSIONAL",
    tagline: "Paling Populer",
    price: "17.500",
    priceDetails: "per Karyawan/Bulan",
    description: "Otomatisasi proses HR dan manajemen lembur untuk bisnis yang berkembang.",
    cta: "Pilih Paket",
    ctaAction: "#pricing",
    isFeatured: true,
  },
  {
    name: "ENTERPRISE",
    tagline: "Solusi Komprehensif",
    price: "28.000",
    priceDetails: "per Karyawan/Bulan",
    description: "Solusi HR strategis dengan fitur finansial & benefit karyawan.",
    cta: "Hubungi Sales",
    ctaAction: "#cta",
  },
];

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    title: "MODUL INTI: Manajemen Kehadiran & Administrasi (Tersedia di Semua Paket)",
    features: [
      { name: "Aplikasi Mobile Karyawan (Self-Service)", starter: true, professional: true, enterprise: true },
      { name: "Absensi Mobile dengan Validasi GPS & Foto", starter: true, professional: true, enterprise: true },
      { name: "Absensi di Dalam & Luar Radius Kantor", starter: true, professional: true, enterprise: true },
      { name: "Lihat Riwayat Absensi & Status Kehadiran", starter: true, professional: true, enterprise: true },
      { name: "Pengajuan Izin, Cuti, & Sakit dengan Bukti Foto", starter: true, professional: true, enterprise: true },
      { name: "Terima Notifikasi Real-time (Persetujuan, dll)", starter: true, professional: true, enterprise: true },
      { name: "Panel Admin HR", starter: true, professional: true, enterprise: true },
      { name: "Dasbor Monitoring Kehadiran Karyawan", starter: true, professional: true, enterprise: true },
      { name: "Konfigurasi Database Perusahaan & Karyawan", starter: true, professional: true, enterprise: true },
      { name: "Manajemen Data Departemen", starter: true, professional: true, enterprise: true },
      { name: "Proses Persetujuan (Approval) Izin, Cuti, Sakit", starter: true, professional: true, enterprise: true },
      { name: "Laporan & Ekspor Data Absensi & Izin", starter: true, professional: true, enterprise: true },
    ],
  },
  {
    title: "MODUL LANJUTAN",
    isMainHeader: true,
    features: [],
  },
  {
    title: "Manajemen Lembur (Surat Perintah Lembur)",
    features: [
      { name: "Pengajuan & Approval SPL oleh Admin", starter: false, professional: true, enterprise: true },
      { name: "Fitur Search & Filter Data SPL", starter: false, professional: true, enterprise: true },
      { name: "Laporan & Ekspor Data Lembur Harian/Bulanan", starter: false, professional: true, enterprise: true },
    ],
  },
  {
    title: "Manajemen Finansial & Benefit Karyawan",
    features: [
      { name: "Pengajuan & Approval Kasbon", starter: false, professional: false, enterprise: true },
      { name: "Fitur Tabungan Karyawan Otomatis", starter: false, professional: false, enterprise: true },
      { name: "Dasbor, Grafik & Laporan Kasbon & Tabungan", starter: false, professional: false, enterprise: true },
      { name: "Integrasi Informasi JHT BPJS Ketenagakerjaan", starter: false, professional: false, enterprise: true },
    ],
  },
];

export const ADDONS: Addon[] = [
    {
        name: "Manajemen Katering Terintegrasi",
        price: "Tersedia sebagai Add-on",
        description: "Digitalisasi sistem katering Anda. Sistem secara otomatis memberikan kupon digital kepada karyawan berdasarkan shift kerja dan data lembur yang telah disetujui.",
        features: [
            "Klaim Kupon via Scan QR",
            "Alokasi Kupon Otomatis",
            "Konfigurasi Lokasi & Radius Kantin",
            "Dasbor & Chart Monitoring",
            "Ekspor Laporan Katering",
        ]
    },
    {
        name: "Integrasi Mesin Absensi Fingerprint",
        price: "Tersedia sebagai Add-on",
        description: "Hubungkan mesin absensi fingerprint yang sudah ada di kantor Anda langsung ke ekosistem aplikasi HR kami untuk sistem kehadiran hibrida yang sempurna.",
        features: [
            "Sinkronisasi Data Real-time",
            "Dukungan untuk Satu atau Multi-Mesin",
            "Dasbor Terpadu",
            "Bantuan Teknis untuk Koneksi Awal",
        ]
    },
    {
        name: "Modul Rekrutmen / Human Supply Talenta",
        price: "Tersedia sebagai Add-on",
        description: "Kelola seluruh siklus rekrutmen—mulai dari publikasi lowongan hingga penerimaan kandidat—dalam satu platform.",
        features: [
            "Panel Admin untuk publikasi & screening",
            "Portal Kandidat untuk registrasi & lihat status",
            "Proses Pembayaran Registrasi Online",
            "Tracking status pelamar",
        ]
    }
];

export const FAQS = [
  {
    question: 'Apakah ada biaya tambahan selain biaya langganan bulanan?',
    answer:
      'Tidak ada biaya tersembunyi. Harga yang tertera adalah harga final per karyawan per bulan, belum termasuk PPN 11%. Untuk modul tambahan (add-on), biayanya bersifat tetap (fixed) dan tidak dihitung per karyawan.',
  },
  {
    question: 'Bagaimana proses implementasi dan onboarding?',
    answer:
      'Tim kami akan membantu Anda selama proses implementasi, mulai dari setup awal, impor data karyawan, hingga pelatihan untuk admin HR dan karyawan. Kami memastikan transisi ke Dokar HR berjalan mulus.',
  },
  {
    question: 'Apakah Dokar HR bisa diintegrasikan dengan sistem payroll yang sudah kami gunakan?',
    answer:
      'Saat ini, kami menyediakan fitur ekspor data absensi, lembur, dan kasbon yang kompatibel dengan sebagian besar software payroll. Untuk integrasi API langsung, silakan hubungi tim sales kami untuk mendiskusikan kemungkinan dan ketersediaannya.',
  },
  {
    question: 'Apakah data perusahaan dan karyawan kami aman?',
    answer:
      'Keamanan data adalah prioritas utama kami. Kami menggunakan infrastruktur cloud terpercaya dengan standar keamanan tinggi, enkripsi data, dan praktik terbaik lainnya untuk melindungi semua data Anda.',
  },
  {
    question: 'Apakah ada minimum jumlah karyawan untuk berlangganan?',
    answer:
      'Ya, kami menerapkan minimum 10 karyawan untuk semua paket berbayar (Starter, Professional, dan Enterprise) untuk memastikan Anda mendapatkan manfaat maksimal dari platform kami.',
  },
   {
    question: 'Bisakah saya mencoba Dokar HR sebelum memutuskan untuk berlangganan?',
    answer:
      'Tentu saja! Kami menyediakan sesi demo gratis di mana tim kami akan menunjukkan semua fitur Dokar HR dan menjawab pertanyaan spesifik Anda. Silakan hubungi kami untuk menjadwalkan sesi demo.',
  },
];
