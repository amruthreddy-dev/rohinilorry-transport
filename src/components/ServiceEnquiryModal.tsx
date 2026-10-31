import React, { useState, useEffect } from 'react';
import { X, MessageCircle, AlertCircle, Phone } from 'lucide-react';
import {
  ServiceEnquiryData,
  validateServiceEnquiry,
  buildWhatsAppUrl,
  PRIMARY_PHONE,
} from '../utils/booking';

interface ServiceEnquiryModalProps {
  isOpen: boolean;
  serviceTitle: string;
  onClose: () => void;
}

export const ServiceEnquiryModal: React.FC<ServiceEnquiryModalProps> = ({
  isOpen,
  serviceTitle,
  onClose,
}) => {
  const [formData, setFormData] = useState<ServiceEnquiryData>({
    service: serviceTitle,
    name: '',
    phone: '',
    route: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ServiceEnquiryData, string>>>({});

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: serviceTitle,
    }));
    setErrors({});
  }, [serviceTitle, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
    >
      <div className="bg-[#0b0d36] text-white border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
          aria-label="Close Enquiry Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            Service Enquiry
          </span>
          <h3 id="service-modal-title" className="text-xl sm:text-2xl font-black text-white">
            {serviceTitle || 'Lorry Transport Enquiry'}
          </h3>
          <p className="font-telugu text-xs text-slate-300 font-semibold mt-1">
            రోహిణి లారీ ట్రాన్స్పోర్ట్ — విజయవాడ
          </p>
        </div>

        {/* Form: Name, Phone Number, Where to Where */}
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* 1. Name */}
          <div>
            <label
              htmlFor="modal-name"
              className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1"
            >
              Name <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              id="modal-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              aria-required="true"
              className="w-full px-4 py-3 bg-[#060720] border border-white/15 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* 2. Phone Number */}
          <div>
            <label
              htmlFor="modal-phone"
              className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1"
            >
              Phone Number <span className="text-amber-400">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-semibold">
                +91
              </span>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9492609349"
                maxLength={14}
                aria-required="true"
                className="w-full pl-14 pr-4 py-3 bg-[#060720] border border-white/15 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* 3. Where to Where */}
          <div>
            <label
              htmlFor="modal-route"
              className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1"
            >
              Where to Where <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              id="modal-route"
              name="route"
              value={formData.route}
              onChange={handleChange}
              placeholder="e.g. Vijayawada to Hyderabad / Chennai / Mumbai"
              aria-required="true"
              className="w-full px-4 py-3 bg-[#060720] border border-white/15 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
            />
            {errors.route && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.route}</span>
              </p>
            )}
          </div>

          {/* Submit directly to WhatsApp */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Send to WhatsApp (+91 {PRIMARY_PHONE})</span>
            </button>
          </div>

          <div className="pt-2 border-t border-white/10 text-center">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="text-xs text-slate-300 hover:text-white inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Or call directly: {PRIMARY_PHONE}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
