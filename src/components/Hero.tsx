import React, { useState, useRef } from 'react';
import { Phone, ArrowRight, Truck, ShieldCheck, MapPin, Upload } from 'lucide-react';
import { PRIMARY_PHONE, SECONDARY_PHONE } from '../utils/booking';
import { IMAGES } from '../config/images';

interface HeroProps {
  onViewServices: () => void;
  onBookLorry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewServices, onBookLorry }) => {
  const [truckImage, setTruckImage] = useState<string>(IMAGES.heroTruck);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setTruckImage(previewUrl);
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#090a30] via-[#0e1248] to-[#071b38] text-white overflow-hidden pt-10 pb-16 lg:py-20 border-b border-white/10"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-amber-300 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>ALL INDIA PERMIT • 10+ YEARS EXPERIENCE</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-telugu text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                రోహిణి లారీ ట్రాన్స్పోర్ట్
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Reliable Transport.{' '}
                <span className="text-amber-400">Across All India.</span>
              </p>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
                Transparent • Reliable • Direct Transport Contractor
              </p>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Based at <strong className="text-white font-semibold">HRT Complex, Bhavanipuram, Vijayawada</strong>, ROHINI LORRY TRANSPORT delivers heavy commercial freight safely across every state in India under the personal management of <strong className="text-white font-semibold">N. Babu Reddy</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-200">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Govt. Permitted All India</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-lg border border-white/10">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Vijayawada Strategic Hub</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-lg border border-white/10">
                <Truck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>12-Tyre Heavy Lorries</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={onBookLorry}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm rounded-xl transition-all shadow-lg shadow-emerald-950 flex items-center gap-2 border border-emerald-400/40"
              >
                <Truck className="w-4 h-4" />
                <span>Book a Lorry</span>
              </button>
              <button
                type="button"
                onClick={onViewServices}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-bold text-sm rounded-xl transition-all border border-white/20 flex items-center gap-2 group"
              >
                <span>View Transport Services</span>
                <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="text-slate-300 font-semibold uppercase tracking-wider text-xs">
                Direct Dispatch:
              </span>
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-bold text-base transition-colors"
                aria-label={`Call primary phone ${PRIMARY_PHONE}`}
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{PRIMARY_PHONE}</span>
              </a>
              <span className="text-white/30">/</span>
              <a
                href={`tel:${SECONDARY_PHONE}`}
                className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-semibold transition-colors"
                aria-label={`Call alternate phone ${SECONDARY_PHONE}`}
              >
                <span>{SECONDARY_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Truck Framed Card with VS Code / Upload Support */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/15 bg-white/5 backdrop-blur-md p-2 group">
              <div className="relative rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={truckImage}
                  alt="Rohini Lorry Transport - Heavy Commercial Indian Cargo Lorry"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to placeholder if file is being replaced
                    console.log('Image loading, ensure public/images/hero-truck.jpg exists');
                  }}
                />

                {/* Overlaid Location Badge */}
                <div className="absolute bottom-4 left-4 bg-[#0a0b2e]/95 backdrop-blur-md border border-amber-400/50 text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Vijayawada Hub • Pan-India Route</span>
                </div>

                <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 px-2.5 py-1 rounded text-xs font-black uppercase tracking-wider shadow-md">
                  All India Carrier
                </div>

                {/* Upload / Replace Photo Button for fast browser testing or VS Code */}
                <div className="absolute top-4 left-4">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                    aria-label="Upload lorry photo"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-2.5 py-1 bg-black/60 hover:bg-black/80 text-white text-[11px] font-semibold rounded-md border border-white/30 backdrop-blur-sm flex items-center gap-1 transition-colors"
                    title="Upload or test your actual lorry image directly, or place in public/images/hero-truck.jpg via VS Code"
                  >
                    <Upload className="w-3 h-3 text-amber-400" />
                    <span>Upload Photo</span>
                  </button>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 text-center mt-2">
              Replace in VS Code at <code className="text-amber-300 font-mono">public/images/hero-truck.jpg</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
