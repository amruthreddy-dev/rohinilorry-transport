import React, { useState, useRef } from 'react';
import { MapPin, ShieldCheck, MessageCircle, Compass, Upload } from 'lucide-react';
import { IMAGES } from '../config/images';

interface AllIndiaTransportProps {
  onPlanRoute: () => void;
}

export const AllIndiaTransport: React.FC<AllIndiaTransportProps> = ({ onPlanRoute }) => {
  const [mapImage, setMapImage] = useState<string>(IMAGES.indiaRoutes);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setMapImage(previewUrl);
    }
  };

  return (
    <section id="network" className="py-16 bg-[#080927] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            Pan-India Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            All India Transport Network
          </h2>
          <p className="font-telugu text-base font-semibold text-slate-300 mt-1">
            విజయవాడ కేంద్రంగా దేశవ్యాప్త రవాణా
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Based at HRT Complex, Bhavanipuram, Vijayawada, we hold official All India National Permits for commercial goods transit across all Indian states and Union Territories.
          </p>
        </div>

        {/* Map Visual Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-100 text-slate-800">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-950">
            <img
              src={mapImage}
              alt="Rohini Lorry Transport - All India Freight Routes centered at Vijayawada"
              className="w-full h-[320px] sm:h-[460px] object-cover object-center"
              loading="lazy"
            />

            {/* Overlaid Location Badge */}
            <div className="absolute top-4 left-4 bg-[#0a0b2e]/95 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5 border border-amber-400/40">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Base Hub: Vijayawada, Andhra Pradesh</span>
            </div>

            <div className="absolute bottom-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md">
              All India Permit Carrier
            </div>

            {/* Quick Upload / Replace Button */}
            <div className="absolute top-4 right-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
                aria-label="Upload route map"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-2.5 py-1 bg-black/60 hover:bg-black/80 text-white text-[11px] font-semibold rounded-md border border-white/30 backdrop-blur-sm flex items-center gap-1 transition-colors"
                title="Upload or test your route map, or place in public/images/india-routes.png via VS Code"
              >
                <Upload className="w-3 h-3 text-amber-400" />
                <span>Upload Map</span>
              </button>
            </div>
          </div>

          {/* Map Footer & Route Enquiry Action */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">Goods carriage permits valid across all states and Union Territories.</span>
            </div>

            <button
              type="button"
              onClick={onPlanRoute}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-900/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire Route on WhatsApp</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-400 text-center mt-3 pt-2 border-t border-slate-100">
            Replace map in VS Code at <code className="text-amber-600 font-mono">public/images/india-routes.png</code>
          </p>
        </div>
      </div>
    </section>
  );
};
