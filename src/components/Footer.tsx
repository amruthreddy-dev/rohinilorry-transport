import React from 'react';
import { Phone, MessageCircle, MapPin, Shield, ArrowUp } from 'lucide-react';
import { PRIMARY_PHONE, SECONDARY_PHONE, WHATSAPP_NUMBER } from '../utils/booking';
import { IMAGES } from '../config/images';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050618] text-slate-300 border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Brand info (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center shrink-0 border border-amber-400 overflow-hidden shadow-sm">
                <img
                  src={IMAGES.logo}
                  alt="Rohini Lorry Transport"
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-telugu font-bold text-lg text-white block leading-tight">
                  రోహిణి లారీ ట్రాన్స్పోర్ట్
                </span>
                <span className="text-xs font-black text-amber-400 uppercase tracking-wider block">
                  ROHINI LORRY TRANSPORT
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              All India Transport Contractor operating from Vijayawada, Andhra Pradesh. Dedicated commercial lorry transport for industrial, manufacturing, and agricultural goods movement nationwide.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/15 rounded-full text-xs text-amber-300">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>All India National Permit Authorized</span>
            </div>
          </div>

          {/* Quick Navigation (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home (హోమ్)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Transport Services
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-amber-400 transition-colors">
                  All India Transport Routes
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Owner (N. Babu Reddy)
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-amber-400 transition-colors">
                  WhatsApp Lorry Booking
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact Office
                </a>
              </li>
            </ul>
          </div>

          {/* Registered Office & Contact (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Registered Office & Contacts
            </h4>
            <div className="text-xs space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <address className="not-italic">
                  <span className="text-white font-medium">HRT Complex, 1st Floor, Shop No. 7,</span><br />
                  Swathi Road, Bhavanipuram,<br />
                  Vijayawada – 520012, Andhra Pradesh.
                </address>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Calls: <a href={`tel:${PRIMARY_PHONE}`} className="text-white hover:text-amber-400">{PRIMARY_PHONE}</a> / <a href={`tel:${SECONDARY_PHONE}`} className="text-white hover:text-amber-400">{SECONDARY_PHONE}</a>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  WhatsApp: <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">+91 {PRIMARY_PHONE}</a>
                </span>
              </div>

              <div className="text-[11px] text-slate-500 pt-1">
                Owner & Contractor: <strong className="text-slate-300">N. Babu Reddy</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ROHINI LORRY TRANSPORT (రోహిణి లారీ ట్రాన్స్పోర్ట్). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>HRT Complex, Bhavanipuram, Vijayawada</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
