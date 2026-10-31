/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MovingTicker } from './components/MovingTicker';
import { Statistics } from './components/Statistics';
import { Services } from './components/Services';
import { AllIndiaTransport } from './components/AllIndiaTransport';
import { AboutOwner } from './components/AboutOwner';
import { WhatsAppBooking } from './components/WhatsAppBooking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceEnquiryModal } from './components/ServiceEnquiryModal';
import { Phone, MessageCircle } from 'lucide-react';
import { PRIMARY_PHONE } from './utils/booking';

export default function App() {
  const [activeModalService, setActiveModalService] = useState<string | null>(null);

  const handleOpenServiceModal = (serviceTitle: string) => {
    setActiveModalService(serviceTitle);
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0b2e] text-slate-800 flex flex-col selection:bg-amber-400 selection:text-slate-950 pb-16 sm:pb-0">
      {/* Sticky Header */}
      <Header
        onBookClick={(service) => handleOpenServiceModal(service || 'Book a Lorry')}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onViewServices={scrollToServices}
          onBookLorry={() => handleOpenServiceModal('Book a Lorry')}
        />

        {/* Signature Moving Information Ticker */}
        <MovingTicker />

        {/* Business Statistics */}
        <Statistics />

        {/* Core Transport Services with Direct 3-Field WhatsApp Modal */}
        <Services onSelectService={handleOpenServiceModal} />

        {/* All India Transport Network */}
        <AllIndiaTransport
          onPlanRoute={() => handleOpenServiceModal('All India Route Enquiry')}
        />

        {/* About Owner - N. Babu Reddy */}
        <AboutOwner />

        {/* Direct WhatsApp Booking Form */}
        <WhatsAppBooking />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Service Enquiry Modal: Name, Phone Number, Where to Where -> WhatsApp */}
      <ServiceEnquiryModal
        isOpen={!!activeModalService}
        serviceTitle={activeModalService || ''}
        onClose={() => setActiveModalService(null)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070822] border-t border-white/10 p-2.5 flex items-center justify-between gap-2.5 shadow-2xl">
        <a
          href={`tel:${PRIMARY_PHONE}`}
          className="flex-1 py-3 px-3 bg-white/10 border border-white/15 active:bg-white/20 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call {PRIMARY_PHONE}</span>
        </a>
        <button
          type="button"
          onClick={() => handleOpenServiceModal('Book a Lorry')}
          className="flex-1 py-3 px-3 bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950"
          aria-label="Book a Lorry"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Book on WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
