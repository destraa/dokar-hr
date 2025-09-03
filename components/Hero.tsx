
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Solusi HR Terintegrasi untuk Bisnis Modern Anda
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
          Modernisasi manajemen absensi, izin, rekrutmen, dan administrasi karyawan dengan satu platform yang mudah digunakan.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#pricing"
            className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Lihat Paket Harga
          </a>
          <a
            href="#cta"
            className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow-lg border border-slate-200 hover:bg-slate-100 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Minta Demo Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
