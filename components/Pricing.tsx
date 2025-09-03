
import React from 'react';
import { PLANS, FEATURE_CATEGORIES } from '../constants';
import { CheckIcon, MinusIcon } from './icons';
import type { Plan } from '../types';

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const isFeatured = plan.isFeatured || false;
  const cardClasses = `relative flex flex-col rounded-2xl border p-8 shadow-sm ${isFeatured ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border-slate-200'}`;
  
  return (
    <div className={cardClasses}>
      {isFeatured && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full uppercase">{plan.tagline}</span>
        </div>
      )}
      <h3 className={`text-lg font-semibold uppercase tracking-wider ${isFeatured ? 'text-white' : 'text-indigo-600'}`}>{plan.name}</h3>
      <div className="mt-4 flex items-baseline gap-x-2">
        {plan.price !== "Hubungi Kami" ? (
          <>
            <span className={`text-4xl font-bold tracking-tight ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
              Rp {plan.price}
            </span>
            <span className={`text-sm ${isFeatured ? 'text-indigo-200' : 'text-slate-500'}`}>{plan.priceDetails}</span>
          </>
        ) : (
          <span className={`text-3xl font-bold tracking-tight ${isFeatured ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
        )}
      </div>
      <p className={`mt-4 text-base leading-7 ${isFeatured ? 'text-indigo-200' : 'text-slate-600'}`}>{plan.description}</p>
      <a
        href={plan.ctaAction}
        className={`mt-8 block w-full rounded-lg px-3 py-2.5 text-center text-sm font-semibold transition-colors duration-300 ${
          isFeatured
            ? 'bg-white text-indigo-600 hover:bg-indigo-50'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        {plan.cta}
      </a>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Harga yang Sesuai untuk Setiap Skala Bisnis</h2>
          <p className="mt-4 text-lg text-slate-600">
            Pilih paket yang paling sesuai dengan kebutuhan Anda. Semua paket dirancang untuk tumbuh bersama bisnis Anda.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="mt-16 grid max-w-lg grid-cols-1 gap-y-12 gap-x-8 sm:mx-auto lg:max-w-none lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-8 text-center text-slate-600 max-w-2xl mx-auto space-y-2 text-sm">
            <p><strong>Hemat biaya:</strong> dapatkan diskon 2 bulan untuk pembayaran tahunan.</p>
            <p>Minimum 10 karyawan untuk semua paket berbayar.</p>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 text-center">Perbandingan Detail Fitur</h3>
          <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="py-4 px-6 text-left font-semibold text-slate-900 w-2/5">Fitur</th>
                  {PLANS.map((plan) => (
                    <th key={plan.name} scope="col" className="py-4 px-6 text-center font-semibold text-slate-900 w-1/5">{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {FEATURE_CATEGORIES.map((category) => (
                  <React.Fragment key={category.title}>
                    {category.isMainHeader ? (
                       <tr>
                        <td colSpan={4} className="bg-slate-200 py-3 px-6 text-sm font-bold uppercase tracking-wider text-slate-700">
                            {category.title}
                        </td>
                       </tr>
                    ) : (
                       <tr>
                        <td colSpan={4} className="bg-slate-100 py-3 px-6 text-sm font-semibold text-slate-800">
                            {category.title}
                        </td>
                       </tr>
                    )}
                    {category.features.map((feature) => (
                      <tr key={feature.name}>
                        <td className="py-4 px-6 text-slate-600">{feature.name}</td>
                        <td className="py-4 px-6 text-center"><div className="flex justify-center">{feature.starter ? <CheckIcon /> : <MinusIcon />}</div></td>
                        <td className="py-4 px-6 text-center"><div className="flex justify-center">{feature.professional ? <CheckIcon /> : <MinusIcon />}</div></td>
                        <td className="py-4 px-6 text-center"><div className="flex justify-center">{feature.enterprise ? <CheckIcon /> : <MinusIcon />}</div></td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Harga di atas belum termasuk PPN 11%. Syarat dan ketentuan berlaku.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
