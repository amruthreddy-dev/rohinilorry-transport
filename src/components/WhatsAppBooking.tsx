import React, { useState } from 'react';
import { MessageCircle, AlertCircle, Phone } from 'lucide-react';
import {
  ServiceEnquiryData,
  validateServiceEnquiry,
  buildWhatsAppUrl,
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  WHATSAPP_NUMBER,
} from '../utils/booking';

interface WhatsAppBookingProps {
  initialService?: string;
}

export const WhatsAppBooking: React.FC<WhatsAppBookingProps> = ({
  initialService = 'Book a Lorry',
}) => {
  const [formData, setFormData] = useState<ServiceEnquiryData>({
    service: initialService,
    name: '',
    phone: '',
    route: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ServiceEnquiryData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ServiceEnquiryData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateServiceEnquiry(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    const whatsappUrl = buildWhatsAppUrl(formData);
    window.location.href = whatsappUrl;
  };

  return (
    <section id="booking" className="py-16 bg-[#080927] text-white border-b border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            Direct Booking
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Book a Lorry on WhatsApp
          </h2>
          <p className="font-telugu text-base font-semibold text-amber-300 mt-1">
            వాట్సాప్ ద్వారా నేరుగా సంప్రదించండి
          </p>
          <p className="text-slate-300 text-sm mt-2">
            Send your route and consignment requirement directly to N. Babu Reddy.
          </p>
        </div>

        {/* Clean Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-800 border border-slate-100">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Service */}
            <div>
              <label
                htmlFor="booking-service"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Service
              </label>
              <select
                id="booking-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
              >
                <option value="Book a Lorry">Book a Lorry</option>
                <option value="Find Available Loads">Find Available Loads</option>
                <option value="Load Receiving">Load Receiving</option>
                <option value="All India Goods Transport">All India Goods Transport</option>
                <option value="Heavy Vehicle Transport">Heavy Vehicle Transport</option>
                <option value="Transport Contract Services">Transport Contract Services</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="booking-name"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="booking-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                aria-required="true"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="booking-phone"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-bold">
                  +91
                </span>
                <input
                  type="tel"
                  id="booking-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9492609349"
                  maxLength={14}
                  aria-required="true"
                  className="w-full pl-14 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Where to Where */}
            <div>
              <label
                htmlFor="booking-route"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Where to Where (Route Needed) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="booking-route"
                name="route"
                value={formData.route}
                onChange={handleChange}
                placeholder="e.g. Vijayawada to Hyderabad / Chennai / Mumbai"
                aria-required="true"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-colors"
              />
              {errors.route && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.route}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-base rounded-2xl transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Send to WhatsApp (+91 {PRIMARY_PHONE})</span>
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 text-center">
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="text-xs text-slate-600 hover:text-emerald-700 inline-flex items-center gap-1.5 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Or call directly: +91 {PRIMARY_PHONE} / {SECONDARY_PHONE}</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
