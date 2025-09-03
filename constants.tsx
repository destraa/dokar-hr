import React from 'react';
import type { Plan, FeatureCategory, Addon } from './types';

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 text-indigo-500 ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.06-1.06l-3.103 3.104-1.533-1.533a.75.75 0 00-1.06 1.06l2.064 2.063a.75.75 0 001.06 0l3.64-3.64z"
      clipRule="evenodd"
    />
  </svg>
);

export const MinusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`w-5 h-5 text-slate-400 ${className}`}
  >
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
);


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