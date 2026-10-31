import React, { useState, useRef } from 'react';
import { Phone, MessageCircle, Menu, X, Truck, ShieldCheck, MapPin, Camera } from 'lucide-react';
import { PRIMARY_PHONE, SECONDARY_PHONE, WHATSAPP_NUMBER } from '../utils/booking';
import { IMAGES } from '../config/images';

interface HeaderProps {
  onBookClick: (serviceTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoImage, setLogoImage] = useState<string>(IMAGES.logo);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'All India Transport', href: '#network' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setLogoImage(previewUrl);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0b2e]/95 backdrop-blur-md text-white shadow-lg border-b border-white/10">
      {/* Top micro bar for quick address & phone numbers */}
      <div className="bg-[#06071e] text-xs text-slate-300 py-1.5 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold uppercase text-[11px] tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              All India Permit • 10+ Years Experience
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300 text-[11px]">
              <MapPin className="w-3 h-3 text-amber-400" />
              HRT Complex, Swathi Road, Bhavanipuram, Vijayawada
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="text-slate-200 hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold"
              aria-label={`Call primary phone ${PRIMARY_PHONE}`}
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{PRIMARY_PHONE}</span>
            </a>
            <span className="text-white/20">/</span>
            <a
              href={`tel:${SECONDARY_PHONE}`}
              className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold"
              aria-label={`Call alternate phone ${SECONDARY_PHONE}`}
            >
              <span>{SECONDARY_PHONE}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand Identity with Click-to-Upload Logo */}
          <div className="flex items-center gap-3">
            {/* Logo container with hidden file input & hover upload indicator */}
            <div className="relative group/logo">
              <input
                type="file"
                ref={logoInputRef}
                onChange={handleLogoUpload}
                accept="image/*"
                className="hidden"
                aria-label="Upload company logo"
              />
              <button
                type="button"
                onClick={() => logoInputRef.current?.click()}
                className="w-13 h-13 rounded-full bg-white p-1 flex items-center justify-center shadow-md shrink-0 border-2 border-amber-400 overflow-hidden relative cursor-pointer group-hover/logo:border-emerald-400 transition-colors"
                title="Click to upload your logo from laptop, or replace public/images/rohini-logo.png via VS Code"
              >
                <img
                  src={logoImage}
                  alt="Rohini Lorry Transport"
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity flex items-center justify-center text-amber-300">
                  <Camera className="w-5 h-5" />
                </div>
              </button>
            </div>

            <a
              href="#home"
              className="flex flex-col focus:outline-none"
              aria-label="Rohini Lorry Transport Home"
            >
              <div className="flex items-center gap-2">
                <span className="font-telugu font-bold text-lg sm:text-xl text-white tracking-tight leading-tight">
                  రోహిణి లారీ ట్రాన్స్పోర్ట్
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-400/40 rounded text-[10px] font-extrabold uppercase tracking-wider">
                  ALL INDIA
                </span>
              </div>
              <span className="text-xs sm:text-sm font-black tracking-wider text-amber-400 uppercase">
                ROHINI LORRY TRANSPORT
              </span>
              <span className="text-[10px] text-slate-300 hidden sm:block tracking-wide">
                Transport Contractor • Vijayawada, AP
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-semibold text-slate-200 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => onBookClick('Book a Lorry')}
              className="px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl transition-all shadow-md shadow-emerald-950 flex items-center gap-1.5 border border-emerald-400/30"
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Book a Lorry</span>
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onBookClick('Book a Lorry')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg shadow-sm"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070822] border-t border-white/10 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick('Book a Lorry');
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <Truck className="w-4 h-4" />
              Book a Lorry
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2.5 text-xs font-bold text-white bg-white/10 border border-white/20 rounded-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp N. Babu Reddy ({PRIMARY_PHONE})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
