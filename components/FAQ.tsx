
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDownIcon } from './icons';

interface FaqItemProps {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onClick }) => {
  const questionId = `faq-question-${faq.question.replace(/\s+/g, '-')}`;
  const answerId = `faq-answer-${faq.question.replace(/\s+/g, '-')}`;
  return (
    <div className="border-b border-slate-200 py-6">
      <dt>
        <button 
          onClick={onClick} 
          className="w-full flex justify-between items-start text-left text-slate-800" 
          id={questionId}
          aria-controls={answerId} 
          aria-expanded={isOpen}
        >
          <span className="text-base font-semibold leading-7">{faq.question}</span>
          <span className="ml-6 flex h-7 items-center">
            <ChevronDownIcon
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-2 pr-12" id={answerId} role="region" aria-labelledby={questionId}>
          <p className="text-base leading-7 text-slate-600">{faq.answer}</p>
        </dd>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
           <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Pertanyaan yang Sering Diajukan</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Tidak menemukan jawaban yang Anda cari? Hubungi tim kami.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="space-y-2">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
