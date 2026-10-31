import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ExternalLink, User } from 'lucide-react';
import { PRIMARY_PHONE, SECONDARY_PHONE, WHATSAPP_NUMBER } from '../utils/booking';

export const Contact: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=HRT+Complex+Swathi+Road+Bhavanipuram+Vijayawada+520012';

  return (
    <section id="contact" className="py-16 bg-[#0a0b2e] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            Contact & Office
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Contact Us
          </h2>
          <p className="font-telugu text-base font-semibold text-slate-300 mt-1">
            మమ్మల్ని సంప్రదించండి — రవాణా విచారణ
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Reach out directly to transport contractor <strong className="text-white font-semibold">N. Babu Reddy</strong>.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-slate-800">
          {/* Owner & Phone */}
          <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col justify-between border border-slate-100">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-200 flex items-center justify-center mb-4">
                <User className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                Transport Proprietor
              </span>
              <h3 className="text-lg font-bold text-[#0a0b2e]">
                N. Babu Reddy
              </h3>
              <p className="font-telugu text-xs font-semibold text-slate-500 mb-3">
                ఎన్. బాబు రెడ్డి (యజమాని)
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block">
                    Primary Phone / WhatsApp:
                  </span>
                  <a
                    href={`tel:${PRIMARY_PHONE}`}
                    className="text-base font-extrabold text-[#0a0b2e] hover:text-emerald-600 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>+91 {PRIMARY_PHONE}</span>
                  </a>
                </div>

                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block">
                    Alternate Contact:
                  </span>
                  <a
                    href={`tel:${SECONDARY_PHONE}`}
                    className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>+91 {SECONDARY_PHONE}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex gap-2">
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="flex-1 py-2.5 px-3 bg-[#0a0b2e] hover:bg-[#12154d] text-white text-xs font-bold rounded-xl text-center transition-colors shadow-sm"
              >
                Call Primary
              </a>
              <a
                href={`tel:${SECONDARY_PHONE}`}
                className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl text-center transition-colors"
              >
                Call Alternate
              </a>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col justify-between border border-slate-100">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                Fast WhatsApp Dispatch
              </span>
              <h3 className="text-lg font-bold text-[#0a0b2e]">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Send consignment details, route requirements & get direct lorry quotes.
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div>• Direct reply from N. Babu Reddy</div>
                <div>• Send loading address & lorry requirements</div>
                <div>• Instant freight rate quotation</div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-900/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp ({PRIMARY_PHONE})</span>
              </a>
            </div>
          </div>

          {/* Office Address - HRT Complex */}
          <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col justify-between border border-slate-100">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                Office Address
              </span>
              <h3 className="text-lg font-bold text-[#0a0b2e]">
                Vijayawada Office
              </h3>
              <p className="text-xs text-slate-500 mb-2">
                Andhra Pradesh, India
              </p>

              <address className="not-italic text-xs text-slate-700 leading-relaxed pt-2 border-t border-slate-100 space-y-0.5">
                <p className="font-bold text-[#0a0b2e]">HRT Complex, 1st Floor, Shop No. 7,</p>
                <p>Swathi Road,</p>
                <p>Bhavanipuram,</p>
                <p className="font-semibold text-slate-900">Vijayawada – 520012, Andhra Pradesh.</p>
              </address>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-[#0a0b2e] hover:bg-[#12154d] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>View Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Operating Hours Note */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center gap-3">
          <Clock className="w-5 h-5 text-amber-400 shrink-0" />
          <div className="text-xs text-slate-200">
            <strong className="text-white">24x7 Highway Lorry Dispatch Coordination:</strong> Enquiries and load bookings handled daily by N. Babu Reddy.
          </div>
        </div>
      </div>
    </section>
  );
};
