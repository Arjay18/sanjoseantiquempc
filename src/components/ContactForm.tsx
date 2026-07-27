'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Tag, HelpCircle, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
  branch: string;
}

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'membership', label: 'Membership Information' },
  { value: 'loans', label: 'Loan Services' },
  { value: 'savings', label: 'Savings & Deposits' },
  { value: 'insurance', label: 'Insurance Products' },
  { value: 'complaint', label: 'Complaint/Feedback' },
  { value: 'other', label: 'Other' }
];

const branchesList = [
  'San Jose Main Office',
  'Miagao Branch',
  'Oton Branch',
  'Guimaras Branch'
];

interface ContactFormProps {
  selectedBranch?: string;
  onBranchChange?: (branchName: string) => void;
}

export default function ContactForm({ selectedBranch, onBranchChange }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: '',
    branch: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Sync selected branch from parent explorer
  useEffect(() => {
    if (selectedBranch) {
      setFormData(prev => ({ ...prev, branch: selectedBranch }));
    }
  }, [selectedBranch]);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData.branch) {
      newErrors.branch = 'Please select a target branch';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be under 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: '',
        branch: selectedBranch || ''
      });
      setSubmitStatus('success');

      // Auto clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 6000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'branch' && onBranchChange) {
      onBranchChange(value);
    }

    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-6 sm:p-10 relative overflow-hidden transition-all duration-300">
      {/* Decorative gradient light */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#006B3F]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#004D2D] mb-2 flex items-center gap-2">
        <FileText className="w-6 h-6 text-[#006B3F]" />
        Send us a Message
      </h3>
      <p className="text-sm text-gray-600 mb-8 leading-relaxed">
        Fill out this form and our local branch team will respond to you within 24 business hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <User className="w-4 h-4 text-[#006B3F]" />
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#006B3F] focus:bg-white focus:border-transparent transition-all outline-none text-gray-900 ${
              errors.name ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'
            }`}
            placeholder="Juan Dela Cruz"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs font-semibold text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email & Phone Row */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#006B3F]" />
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#006B3F] focus:bg-white focus:border-transparent transition-all outline-none text-gray-900 ${
                errors.email ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'
              }`}
              placeholder="juan.delacruz@example.com"
            />
            {errors.email && (
              <p className="mt-1.5 text-xs font-semibold text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#006B3F]" />
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#006B3F] focus:bg-white focus:border-transparent transition-all outline-none text-gray-900 ${
                errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'
              }`}
              placeholder="+63 917 123 4567"
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs font-semibold text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Inquiry Type & Branch Row */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="inquiryType" className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#006B3F]" />
              Inquiry Type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="inquiryType"
                id="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#006B3F] focus:bg-white focus:border-transparent transition-all outline-none text-gray-900 appearance-none cursor-pointer ${
                  errors.inquiryType ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'
                }`}
              >
                <option value="">Select inquiry type</option>
                {inquiryTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            {errors.inquiryType && (
              <p className="mt-1.5 text-xs font-semibold text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.inquiryType}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="branch" className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-[#006B3F]" />
              Target Branch <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="branch"
                id="branch"
                value={formData.branch}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#006B3F] focus:bg-white focus:border-transparent transition-all outline-none text-gray-900 appearance-none cursor-pointer ${
                  errors.branch ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'
                }`}
              >
                <option value="">Select branch</option>
                {branchesList.map((branchName) => (
                  <option key={branchName} value={branchName}>
                    {branchName}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            {errors.branch && (
              <p className="mt-1.5 text-xs font-semibold text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.branch}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <Tag className="w-4 h-4 text-[#006B3F]" />
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#006B3F] focus:bg-white focus:border-transparent transition-all outline-none text-gray-900 ${
              errors.subject ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'
            }`}
            placeholder="Interest in home loans, savings account opening, etc."
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs font-semibold text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Textarea */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#006B3F]" />
              Your Message <span className="text-red-500">*</span>
            </label>
            <span className={`text-xs font-medium ${formData.message.length > 900 ? 'text-red-500 font-bold' : 'text-gray-500'}`}>
              {formData.message.length} / 1000
            </span>
          </div>
          <textarea
            name="message"
            id="message"
            rows={5}
            maxLength={1000}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#006B3F] focus:bg-white focus:border-transparent transition-all outline-none resize-none text-gray-900 ${
              errors.message ? 'border-red-400 focus:ring-red-400' : 'border-gray-200'
            }`}
            placeholder="Please detail your inquiry or questions here..."
          />
          {errors.message && (
            <p className="mt-1.5 text-xs font-semibold text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button & Status */}
        <div className="pt-2">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#006B3F] hover:bg-[#004D2D] text-white font-extrabold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Inquiry</span>
              </>
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-3 mt-4"
            >
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-green-900">Message Sent Successfully!</p>
                <p className="text-xs text-green-700 mt-0.5">
                  Thank you! We have received your inquiry. A representative from the chosen branch will get back to you shortly.
                </p>
              </div>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 mt-4"
            >
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-red-900">Failed to Send Message</p>
                <p className="text-xs text-red-700 mt-0.5">
                  Something went wrong. Please check your connection and try again, or call the branch directly.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
