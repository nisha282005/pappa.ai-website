import React, { useState } from 'react';
import SectionWrapper from '../../../components/layout/SectionWrapper';
import SectionHeading from '../../../components/common/SectionHeading';
import Button from '../../../components/common/Button';

const INSTITUTION_TYPES = [
  'K-12 School',
  'Higher Education / College',
  'Preschool / Early Learning',
  'Multi-Campus Network / District',
  'Educational Organization',
  'Other',
];

export default function RequestAccessForm() {
  const [formData, setFormData] = useState({
    name: '',
    institutionName: '',
    institutionType: '',
    email: '',
    notes: '',
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Your name is required';
        return '';
      case 'institutionName':
        if (!value.trim()) return 'Institution name is required';
        return '';
      case 'institutionType':
        if (!value) return 'Please select an institution type';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address (e.g. name@school.edu)';
        }
        return '';
      default:
        return '';
    }
  };

  const validateAll = () => {
    const newErrors = {};
    const fields = ['name', 'institutionName', 'institutionType', 'email'];
    fields.forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateAll();
    setTouched({
      name: true,
      institutionName: true,
      institutionType: true,
      email: true,
    });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus first error field
      const firstField = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstField);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    // Frontend-ready simulation with realistic processing feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 450);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      institutionName: '',
      institutionType: '',
      email: '',
      notes: '',
    });
    setErrors({});
    setTouched({});
  };

  return (
    <SectionWrapper id="request-access-form" background="subtle">
      <SectionHeading
        eyebrow="Request Access"
        title="Get in Touch with Pappa.ai"
        description="Share a few details about your institution, and our team will prepare a tailored platform walkthrough."
      />

      <div className="max-w-2xl mx-auto bg-white dark:bg-[#111827] border border-[#E5E7EB] dark:border-slate-800 rounded-[16px] p-5 sm:p-8 md:p-10 shadow-sm w-full transition-colors duration-200">
        {submittedData ? (
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ECFDF5] dark:bg-emerald-950/60 text-[#047857] dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl sm:text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-[17px] sm:text-[18.5px] font-bold text-[#0F172A] dark:text-white [text-wrap:balance]">
              Access Request Prepared
            </h3>
            <div className="bg-[#F8FAFC] dark:bg-slate-900/80 border border-[#E5E7EB] dark:border-slate-800 rounded-[12px] p-4 text-left max-w-lg mx-auto text-[13px] sm:text-[13.5px] space-y-1.5 text-[#334155] dark:text-slate-300">
              <div><strong className="text-[#0F172A] dark:text-white">Name:</strong> {submittedData.name}</div>
              <div><strong className="text-[#0F172A] dark:text-white">Institution:</strong> {submittedData.institutionName}</div>
              <div><strong className="text-[#0F172A] dark:text-white">Type:</strong> {submittedData.institutionType}</div>
              <div><strong className="text-[#0F172A] dark:text-white">Email:</strong> {submittedData.email}</div>
              {submittedData.notes && (
                <div><strong className="text-[#0F172A] dark:text-white">Notes:</strong> {submittedData.notes}</div>
              )}
            </div>
            <p className="text-[11.5px] sm:text-[12px] text-[#475569] dark:text-slate-400 max-w-md mx-auto [text-wrap:pretty]">
              <em>Note:</em> Frontend simulation mode active. In production, this inquiry connects to the Pappa.ai admissions API to schedule your guided walkthrough.
            </p>
            <div className="pt-2">
              <Button variant="secondary" onClick={handleReset} className="w-full sm:w-auto">
                Submit Another Request
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Your name */}
              <div>
                <label htmlFor="name" className="block text-[13px] sm:text-[14px] font-semibold text-[#0F172A] dark:text-slate-200 mb-1.5">
                  Your name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Jane Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-[12px] border text-[#0F172A] dark:text-white bg-white dark:bg-slate-900/80 placeholder-[#9CA3AF] dark:placeholder-slate-500 pappa-body min-h-[44px] transition-colors focus:outline-none focus:ring-2 ${errors.name
                    ? 'border-[#EF4444] focus:ring-[#EF4444] bg-[#FEF2F2]/30 dark:bg-red-950/20'
                    : 'border-[#E5E7EB] dark:border-slate-700 focus:ring-[#6366F1] dark:focus:ring-indigo-500 focus:border-transparent'
                    }`}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 pappa-caption text-[#DC2626] dark:text-red-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[13px] sm:text-[14px] font-semibold text-[#0F172A] dark:text-slate-200 mb-1.5">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. j.doe@school.edu"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-[12px] border text-[#0F172A] dark:text-white bg-white dark:bg-slate-900/80 placeholder-[#9CA3AF] dark:placeholder-slate-500 pappa-body min-h-[44px] transition-colors focus:outline-none focus:ring-2 ${errors.email
                    ? 'border-[#EF4444] focus:ring-[#EF4444] bg-[#FEF2F2]/30 dark:bg-red-950/20'
                    : 'border-[#E5E7EB] dark:border-slate-700 focus:ring-[#6366F1] dark:focus:ring-indigo-500 focus:border-transparent'
                    }`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 pappa-caption text-[#DC2626] dark:text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Institution name */}
              <div>
                <label htmlFor="institutionName" className="block text-[13px] sm:text-[14px] font-semibold text-[#0F172A] dark:text-slate-200 mb-1.5">
                  Institution name *
                </label>
                <input
                  id="institutionName"
                  name="institutionName"
                  type="text"
                  required
                  value={formData.institutionName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Horizon Academy"
                  aria-invalid={!!errors.institutionName}
                  aria-describedby={errors.institutionName ? 'institutionName-error' : undefined}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-[12px] border text-[#0F172A] dark:text-white bg-white dark:bg-slate-900/80 placeholder-[#9CA3AF] dark:placeholder-slate-500 pappa-body min-h-[44px] transition-colors focus:outline-none focus:ring-2 ${errors.institutionName
                    ? 'border-[#EF4444] focus:ring-[#EF4444] bg-[#FEF2F2]/30 dark:bg-red-950/20'
                    : 'border-[#E5E7EB] dark:border-slate-700 focus:ring-[#6366F1] dark:focus:ring-indigo-500 focus:border-transparent'
                    }`}
                />
                {errors.institutionName && (
                  <p id="institutionName-error" className="mt-1 pappa-caption text-[#DC2626] dark:text-red-400" role="alert">
                    {errors.institutionName}
                  </p>
                )}
              </div>

              {/* Institution type */}
              <div>
                <label htmlFor="institutionType" className="block text-[13px] sm:text-[14px] font-semibold text-[#0F172A] dark:text-slate-200 mb-1.5">
                  Institution type *
                </label>
                <select
                  id="institutionType"
                  name="institutionType"
                  required
                  value={formData.institutionType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.institutionType}
                  aria-describedby={errors.institutionType ? 'institutionType-error' : undefined}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-[12px] border text-[#0F172A] dark:text-white pappa-body min-h-[44px] bg-white dark:bg-slate-900 transition-colors focus:outline-none focus:ring-2 ${errors.institutionType
                    ? 'border-[#EF4444] focus:ring-[#EF4444] bg-[#FEF2F2]/30 dark:bg-red-950/20'
                    : 'border-[#E5E7EB] dark:border-slate-700 focus:ring-[#6366F1] dark:focus:ring-indigo-500 focus:border-transparent'
                    }`}
                >
                  <option value="" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">Select institution type...</option>
                  {INSTITUTION_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
                      {type}
                    </option>
                  ))}
                </select>
                {errors.institutionType && (
                  <p id="institutionType-error" className="mt-1 pappa-caption text-[#DC2626] dark:text-red-400" role="alert">
                    {errors.institutionType}
                  </p>
                )}
              </div>
            </div>

            {/* Anything we should know? */}
            <div>
              <label htmlFor="notes" className="block text-[13px] sm:text-[14px] font-semibold text-[#0F172A] dark:text-slate-200 mb-1.5">
                Anything we should know?
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Student count, current school software, target timeline, or specific operational requirements..."
                className="w-full px-3.5 sm:px-4 py-2.5 rounded-[12px] border border-[#E5E7EB] dark:border-slate-700 text-[#0F172A] dark:text-white bg-white dark:bg-slate-900/80 placeholder-[#9CA3AF] dark:placeholder-slate-500 pappa-body resize-y min-h-[96px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366F1] dark:focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full min-h-[46px]"
            >
              {isSubmitting ? 'Processing Request...' : 'Get a Demo'}
            </Button>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}
