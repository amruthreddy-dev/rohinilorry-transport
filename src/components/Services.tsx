import React from 'react';
import { Search, Truck, ArrowDownToLine, Globe, Shield, FileCheck, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

interface ServiceCard {
  title: string;
  telugu: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const serviceList: ServiceCard[] = [
    {
      title: 'Find Available Loads',
      telugu: 'అందుబాటులో ఉన్న లోడ్లు',
      description: 'Lorry and freight load coordination for outbound and return transit across primary national highways.',
      icon: Search,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Book a Lorry',
      telugu: 'లారీ బుకింగ్',
      description: 'Full lorry booking for commercial goods, agricultural cargo, raw materials, and industrial consignments.',
      icon: Truck,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Load Receiving',
      telugu: 'లోడ్ రిసీవింగ్ & డెలివరీ',
      description: 'Receiving, inspection, and safe delivery coordination at Vijayawada for goods arriving from any state.',
      icon: ArrowDownToLine,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
      iconColor: 'text-amber-600',
    },
    {
      title: 'All India Goods Transport',
      telugu: 'ఆల్ ఇండియా గూడ్స్ ట్రాన్స్పోర్ట్',
      description: 'Long-haul interstate freight movement with All India National Permit coverage to all 28 states and UTs.',
      icon: Globe,
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      iconColor: 'text-indigo-600',
    },
    {
      title: 'Heavy Vehicle Transport',
      telugu: 'భారీ వాహనాల రవాణా',
      description: 'Heavy 12-wheel lorry transport for heavy machinery, steel, cement, pipes, and bulk construction materials.',
      icon: Shield,
      iconBg: 'bg-teal-50 text-teal-600 border-teal-200',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Transport Contract Services',
      telugu: 'రవాణా కాంట్రాక్ట్ సర్వీసెస్',
      description: 'Regular freight contracting agreements for factories, mills, traders, and manufacturing enterprises.',
      icon: FileCheck,
      iconBg: 'bg-rose-50 text-rose-600 border-rose-200',
      iconColor: 'text-rose-600',
    },
  ];

  return (
    <section id="services" className="py-16 bg-[#0a0b2e] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            Logistics & Transport
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Core Transport Services
          </h2>
          <p className="font-telugu text-base font-semibold text-slate-300 mt-1">
            విశ్వసనీయమైన లారీ రవాణా సేవలు
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Click any service to send your requirement directly to N. Babu Reddy on WhatsApp.
          </p>
        </div>

        {/* 6 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                onClick={() => onSelectService(service.title)}
                className="bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between group border border-slate-100"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${service.iconBg} shadow-sm group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0a0b2e] group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-telugu text-xs font-bold text-amber-600 mb-2">
                    {service.telugu}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0a0b2e] group-hover:text-emerald-600">
                  <span>Enquire on WhatsApp</span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
