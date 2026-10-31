import React, { useState, useRef } from 'react';
import { Phone, MessageCircle, ShieldCheck, CheckCircle2, Upload } from 'lucide-react';
import { PRIMARY_PHONE, SECONDARY_PHONE, WHATSAPP_NUMBER } from '../utils/booking';
import { IMAGES } from '../config/images';

export const AboutOwner: React.FC = () => {
  const [ownerImage, setOwnerImage] = useState<string>(IMAGES.ownerPhoto);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setOwnerImage(previewUrl);
    }
  };

  return (
    <section id="about" className="py-16 bg-[#0a0b2e] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-2xl text-slate-800 border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Owner Photo Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-950 group">
                  <img
                    src={ownerImage}
                    alt="N. Babu Reddy - Owner, Rohini Lorry Transport"
                    className="w-full h-[380px] sm:h-[440px] object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Upload button for instant browser preview */}
                  <div className="absolute top-4 left-4 z-20">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                      aria-label="Upload owner photograph"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2.5 py-1 bg-black/60 hover:bg-black/80 text-white text-[11px] font-semibold rounded-md border border-white/30 backdrop-blur-sm flex items-center gap-1 transition-colors"
                      title="Upload photo directly, or place in public/images/owner-photo.png via VS Code"
                    >
                      <Upload className="w-3 h-3 text-amber-400" />
                      <span>Upload Photo</span>
                    </button>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500 text-slate-950 rounded text-[11px] font-black uppercase tracking-wider mb-1.5 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Transport Proprietor
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                      N. Babu Reddy
                    </h3>
                    <p className="font-telugu text-sm text-amber-300 font-bold">
                      ఎన్. బాబు రెడ్డి — యజమాని
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Rohini Lorry Transport • Vijayawada
                    </p>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-3 -right-3 bg-[#0a0b2e] text-white p-3.5 rounded-2xl shadow-lg border-2 border-amber-400 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-amber-400 leading-none">
                    10+
                  </span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    Years In Business
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 text-center mt-2">
                  Replace in VS Code at <code className="text-amber-600 font-mono">public/images/owner-photo.png</code>
                </p>
              </div>
            </div>

            {/* Description Column */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                  Proprietor's Profile
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a0b2e] tracking-tight">
                  About N. Babu Reddy
                </h2>
                <p className="font-telugu text-base font-bold text-amber-600 mt-0.5">
                  రోహిణి లారీ ట్రాన్స్పోర్ట్ — విశ్వసనీయ రవాణా సేవలు
                </p>
              </div>

              <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  For over a decade, <strong className="text-slate-900 font-semibold">N. Babu Reddy</strong> has been providing trusted All-India commercial lorry transportation for traders, industrial mills, and agricultural suppliers.
                </p>
                <p>
                  Based at <strong className="text-slate-900 font-semibold">HRT Complex, Bhavanipuram, Vijayawada</strong>, Mr. Babu Reddy personally oversees dispatch planning, route scheduling, and continuous driver communication to ensure your consignment reaches safely and on time.
                </p>
                <p>
                  With zero middleman brokerage and direct contractor accountability, clients benefit from transparent pricing, dedicated vehicle allocation, and prompt service.
                </p>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Direct Owner Access:</strong> Talk directly with Mr. Babu Reddy for all enquiries.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Brokerage:</strong> Fair, direct fleet contractor pricing.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>10+ Years Trust:</strong> 5,000+ completed loads across Indian corridors.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>All India Permit:</strong> Safe interstate transit across all states.</span>
                </div>
              </div>

              {/* Direct Connect Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="px-5 py-3 bg-[#0a0b2e] hover:bg-[#12154d] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call N. Babu Reddy: {PRIMARY_PHONE}</span>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>WhatsApp N. Babu Reddy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
