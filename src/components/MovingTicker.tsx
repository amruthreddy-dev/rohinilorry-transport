import React from 'react';

export const MovingTicker: React.FC = () => {
  const strip1Services = [
    'ALL INDIA TRANSPORT',
    'LORRY BOOKING',
    'LOAD RECEIVING',
    'GOODS TRANSPORT',
    '12 TYRE LORRIES',
    'SAFE DELIVERY',
    'TRANSPORT CONTRACTOR',
  ];

  const strip2Vehicles = [
    'AP16TH9349',
    'AP39U7576',
    'AP16TJ3367',
    'AP39TC2111',
    'AP39TC2689',
    'AP39UF5789',
    'AP39WR6577',
    'AP39TG5175',
    'AP39X3132',
  ];

  const strip3States = [
    'ANDHRA PRADESH',
    'TELANGANA',
    'TAMIL NADU',
    'KARNATAKA',
    'KERALA',
    'MAHARASHTRA',
    'GUJARAT',
    'RAJASTHAN',
    'DELHI',
    'PUNJAB',
    'HARYANA',
    'UTTAR PRADESH',
    'BIHAR',
    'WEST BENGAL',
    'ODISHA',
    'ASSAM',
    'ALL OTHER INDIAN STATES AND UNION TERRITORIES',
  ];

  return (
    <div
      className="ticker-container bg-[#06071e] border-y border-white/10 text-white overflow-hidden py-3 select-none relative"
      aria-label="Moving Logistics Information Ticker"
    >
      {/* Side gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#06071e] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#06071e] to-transparent z-20 pointer-events-none" />

      {/* Decorative top moving road line */}
      <div className="relative h-1 mb-2 bg-[#0a0b2e] overflow-hidden">
        <div className="road-line-moving h-full w-full opacity-60" />
      </div>

      <div className="space-y-2">
        {/* Strip 1: Services */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-ticker-1 flex items-center py-0.5">
            {[...strip1Services, ...strip1Services].map((item, idx) => (
              <span key={`s1-${idx}`} className="inline-flex items-center text-xs sm:text-sm font-bold tracking-wider text-slate-100">
                <span className="px-3">{item}</span>
                <span className="text-amber-400 font-extrabold mx-1 text-sm">★</span>
                <span className="text-emerald-400 font-extrabold mx-1 text-xs">●</span>
              </span>
            ))}
          </div>
        </div>

        {/* Strip 2: Vehicle Numbers */}
        <div className="flex overflow-hidden whitespace-nowrap py-0.5 bg-[#090b2b]">
          <div className="animate-ticker-2 flex items-center">
            {[...strip2Vehicles, ...strip2Vehicles].map((num, idx) => (
              <span key={`s2-${idx}`} className="inline-flex items-center text-xs sm:text-sm font-mono font-bold tracking-widest text-amber-300">
                <span className="px-3 bg-white/10 border border-white/15 rounded px-2.5 py-0.5 my-0.5 text-white">
                  {num}
                </span>
                <span className="text-emerald-400 font-bold mx-2">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* Strip 3: States */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-ticker-3 flex items-center py-0.5">
            {[...strip3States, ...strip3States].map((state, idx) => (
              <span key={`s3-${idx}`} className="inline-flex items-center text-[11px] sm:text-xs font-semibold tracking-wider text-slate-300">
                <span className="px-2">{state}</span>
                <span className="text-amber-400 font-bold mx-1.5">•</span>
                <span className="text-emerald-400 font-bold mx-1.5">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom moving road line */}
      <div className="relative h-1 mt-2 bg-[#0a0b2e] overflow-hidden">
        <div className="road-line-moving h-full w-full opacity-60" />
      </div>

      <div className="text-[10px] text-slate-400 text-center mt-1 tracking-wider uppercase">
        Continuous Live Information Line • Hover or tap to pause
      </div>
    </div>
  );
};
