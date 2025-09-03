
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="bg-indigo-700">
      <div className="container mx-auto px-6 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Siap untuk Memulai?
          </h2>
          <p className="mt-4 text-lg text-indigo-200">
            Hubungi tim kami untuk mendapatkan DEMO GRATIS atau konsultasi paket yang paling cocok untuk bisnis Anda.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold">Kontak Sales</h3>
                <p className="mt-2 text-indigo-200">+62 21 1234 5678</p>
            </div>
             <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold">Email</h3>
                <p className="mt-2 text-indigo-200">sales@dokarhr.com</p>
            </div>
             <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-semibold">Website</h3>
                <p className="mt-2 text-indigo-200">www.dokarhr.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
