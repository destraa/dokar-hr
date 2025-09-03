
import React from 'react';
import { ADDONS } from '../constants';

const CheckCircleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
);


const Addons: React.FC = () => {
  return (
    <section id="addons" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Modul Tambahan (Add-On)</h2>
          <p className="mt-4 text-lg text-slate-600">
            Perluas fungsionalitas Dokar HR dengan modul tambahan yang dirancang untuk kebutuhan spesifik perusahaan Anda.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ADDONS.map((addon) => (
            <div key={addon.name} className="bg-slate-50/70 border border-slate-200 rounded-xl p-8 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-bold text-slate-900">{addon.name}</h3>
              <p className="mt-2 text-sm font-semibold text-indigo-600">{addon.price}</p>
              <p className="mt-4 text-slate-600 flex-grow">{addon.description}</p>
              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="font-semibold text-slate-800">Fitur Utama:</p>
                <ul className="mt-4 space-y-3 text-slate-600">
                  {addon.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
         <p className="mt-6 text-center text-sm text-slate-500">
            Harga modul tambahan bersifat tetap (fixed), tidak dihitung per karyawan.
          </p>
      </div>
    </section>
  );
};

export default Addons;
