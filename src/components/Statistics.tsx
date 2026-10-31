import React, { useState, useEffect, useRef } from 'react';
import { Award, PackageCheck, Users, ShieldCheck } from 'lucide-react';

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  teluguLabel: string;
  icon: React.ElementType;
  bgGradient: string;
  iconColor: string;
}

export const Statistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      target: 10,
      suffix: '+',
      label: 'Years Experience',
      sublabel: 'Dedicated freight contractor since 2014',
      teluguLabel: '10+ సంవత్సరాల అనుభవం',
      icon: Award,
      bgGradient: 'bg-amber-500/10 text-amber-600 border-amber-200',
      iconColor: 'text-amber-600',
    },
    {
      target: 5000,
      suffix: '+',
      label: 'Loads Completed',
      sublabel: 'Safe goods delivery across national corridors',
      teluguLabel: '5,000+ లోడ్లు పూర్తి',
      icon: PackageCheck,
      bgGradient: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      iconColor: 'text-emerald-600',
    },
    {
      target: 500,
      suffix: '+',
      label: 'Clients Served',
      sublabel: 'Traders, manufacturing plants & mills',
      teluguLabel: '500+ సంతృప్తి చెందిన క్లయింట్లు',
      icon: Users,
      bgGradient: 'bg-blue-500/10 text-blue-600 border-blue-200',
      iconColor: 'text-blue-600',
    },
    {
      target: 1,
      suffix: '',
      label: 'All India Permit',
      sublabel: 'Govt. authorized interstate carrier permit',
      teluguLabel: 'ఆల్ ఇండియా పర్మిట్ సర్వీస్',
      icon: ShieldCheck,
      bgGradient: 'bg-teal-500/10 text-teal-600 border-teal-200',
      iconColor: 'text-teal-600',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1400;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts([
        Math.floor(ease * 10),
        Math.floor(ease * 5000),
        Math.floor(ease * 500),
        1,
      ]);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts([10, 5000, 500, 1]);
      }
    };

    const animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-12 bg-[#090b2e] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating White Card Container like reference */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a0b2e]">
              Built on Reliability & Safe Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const isAllIndia = idx === 3;
              const displayValue = isAllIndia
                ? 'All India'
                : `${counts[idx].toLocaleString('en-IN')}${stat.suffix}`;

              return (
                <div
                  key={stat.label}
                  className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border shadow-sm bg-white">
                      <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                    </div>

                    <div className="text-3xl sm:text-4xl font-black text-[#0a0b2e] tracking-tight">
                      {displayValue}
                    </div>

                    <div className="text-sm font-bold text-slate-800 mt-1">
                      {stat.label}
                    </div>

                    <div className="font-telugu text-xs font-semibold text-slate-500 mt-0.5">
                      {stat.teluguLabel}
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200/80">
                    {stat.sublabel}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
