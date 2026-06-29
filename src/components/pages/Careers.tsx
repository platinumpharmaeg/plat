'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import {
  Send,
  Upload,
  X,
  FileText,
  ShieldCheck,
  Microscope,
  Briefcase,
  ArrowDown,
} from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import { getApiUrl } from '@/lib/api-base';

const MAX_CV_SIZE_MB = 5;
const CV_ACCEPTED_TYPES = '.pdf,.doc,.docx';

const DEPARTMENTS = [
  'Medical Sales Representative',
  'Sales Supervisor',
  'Key Account',
  'Marketing / Business Development',
  'Regulatory Affairs',
  'Pharmacovigilance',
  'Quality',
  'Supply Chain / Logistics',
  'Finance / Administration',
  'Internship',
  'Other',
] as const;

const FIELD_FORCE_DEPARTMENTS = [
  'Medical Sales Representative',
  'Sales Supervisor',
  'Key Account',
];

const GOVERNORATES = [
  'Cairo',
  'Giza',
  'Alexandria',
  'Qalyubia',
  'Sharqia',
  'Dakahlia',
  'Gharbia',
  'Monufia',
  'Beheira',
  'Ismailia',
  'Port Said',
  'Suez',
  'Damietta',
  'Kafr El Sheikh',
  'Fayoum',
  'Beni Suef',
  'Minya',
  'Assiut',
  'Sohag',
  'Qena',
  'Luxor',
  'Aswan',
  'Red Sea',
  'New Valley',
  'Matrouh',
  'North Sinai',
  'South Sinai',
  'Other',
];

const DEGREES = [
  'Pharmacy (BPharm / PharmD)',
  'Medicine',
  'Dentistry',
  'Veterinary Medicine',
  'Science',
  'Business',
  'Engineering',
  'Other',
];

const EXPERIENCE_OPTIONS = [
  'Fresh Graduate / No Experience',
  'Less than 1 year',
  '1–3 years',
  '3–5 years',
  '5–10 years',
  'More than 10 years',
];

const WHY_JOIN = [
  {
    icon: Microscope,
    title: 'Scientific Excellence',
    description:
      'Work in a professional healthcare environment built on medical knowledge, product understanding, and responsible communication.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity & Compliance',
    description:
      'Be part of a company that values ethical conduct, regulatory responsibility, and long-term trust with healthcare professionals and partners.',
  },
  {
    icon: Briefcase,
    title: 'Growth & Opportunity',
    description:
      'Build your career with a growing organization that invests in talent development and meaningful roles across the Egyptian healthcare market.',
  },
];

const inputClass =
  'w-full px-5 py-4 rounded-2xl border border-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white/60 shadow-sm font-medium';
const labelClass = 'block text-sm font-bold text-slate-700 mb-2';

function YesNoField({
  name,
  label,
  value,
  onChange,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className={labelClass}>{label}</p>
      <div className="flex gap-4">
        {['Yes', 'No'].map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-700"
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              className="accent-primary"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

function CheckboxGroup({
  legend,
  options,
  selected,
  onChange,
}: {
  legend: string;
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const toggle = (option: string) => {
    onChange(
      selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option]
    );
  };

  return (
    <fieldset>
      <legend className={labelClass}>{legend}</legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-700 bg-white/60 px-4 py-3 rounded-xl border border-white"
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggle(option)}
              className="accent-primary"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function Careers() {
  const router = useRouter();
  const cvInputRef = useRef<HTMLInputElement>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState('');
  const [department, setDepartment] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');
  const [hasCar, setHasCar] = useState('');
  const [pharmaExperience, setPharmaExperience] = useState('');
  const [accountTypes, setAccountTypes] = useState<string[]>([]);
  const [therapeuticAreas, setTherapeuticAreas] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const showFieldForceFields = FIELD_FORCE_DEPARTMENTS.includes(department);

  const handleCvChange = (file: File | null) => {
    setCvError('');
    if (!file) {
      setCvFile(null);
      return;
    }
    if (file.size > MAX_CV_SIZE_MB * 1024 * 1024) {
      setCvError(`CV file size must be ${MAX_CV_SIZE_MB}MB or less.`);
      setCvFile(null);
      if (cvInputRef.current) cvInputRef.current.value = '';
      return;
    }
    setCvFile(file);
  };

  const clearCv = () => {
    setCvFile(null);
    setCvError('');
    if (cvInputRef.current) cvInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    if (!cvFile) {
      setCvError('Please upload your CV.');
      return;
    }
    if (!consent) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('cv', cvFile);

    if (drivingLicense) formData.set('drivingLicense', drivingLicense);
    if (hasCar) formData.set('hasCar', hasCar);
    if (pharmaExperience) formData.set('pharmaExperience', pharmaExperience);
    if (accountTypes.length) formData.set('accountTypes', accountTypes.join('||'));
    if (therapeuticAreas.length) formData.set('therapeuticAreas', therapeuticAreas.join('||'));

    const email = formData.get('email')?.toString() || '';
    setIsSubmitting(true);

    try {
      const response = await fetch(getApiUrl('/api/careers'), {
        method: 'POST',
        body: formData,
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your application right now.');
      }

      router.push(`/thank-you?form=careers&email=${encodeURIComponent(email)}`);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Unable to send your application right now.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-24">

      {/* Hero */}
      <section className="pt-10 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-primary-dark text-sm font-bold tracking-wide shadow-sm">
              Join Our Team
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[1.65rem] sm:text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 md:mb-6"
          >
            Careers at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-dark animate-gradient bg-[length:200%_auto]">
              Platinum Pharma
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="page-lead max-w-3xl mx-auto"
          >
            Join a healthcare company built on integrity, scientific excellence, and trusted partnerships
            across the Egyptian healthcare market.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#open-vacancies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 backdrop-blur-md text-slate-800 text-sm font-semibold hover:bg-white transition-all shadow-sm border border-white/80"
            >
              Open Vacancies
            </a>
            <a
              href="#submit-cv"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary-dark text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(89,167,167,0.4)] transition-all"
            >
              Submit Your CV
              <ArrowDown size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/60 backdrop-blur-2xl rounded-[3rem] shadow-xl border border-white/80 p-8 md:p-12">
            <h2 className="section-heading mb-6">Intro</h2>
            <p className="content-text mb-6">
              At Platinum Pharma, we believe that our people are the foundation of our growth. We look for
              talented, ethical, and ambitious professionals who want to contribute to a stronger healthcare
              ecosystem in Egypt.
            </p>
            <p className="content-text">
              Whether you are an experienced healthcare professional, a field-force talent, or a fresh graduate
              looking to start your career, Platinum Pharma welcomes people who share our values of integrity,
              scientific excellence, and partnership mindset.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Why Join Platinum Pharma?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_JOIN.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/60 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/80 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="content-heading font-bold mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Vacancies */}
      <section id="open-vacancies" className="scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Open Vacancies" />
          <div className="bg-white/60 backdrop-blur-2xl rounded-[3rem] shadow-xl border border-white/80 p-8 md:p-12 text-center">
            <p className="content-text max-w-3xl mx-auto mb-6">
              We are continuously building our team across medical, commercial, regulatory, and support functions.
              Even when a specific role is not listed, we review every CV against current and upcoming opportunities.
            </p>
            <p className="text-sm md:text-base text-slate-500 font-medium mb-8">
              Submit your application below and our recruitment team will contact you if your profile matches a
              suitable position.
            </p>
            <a
              href="#submit-cv"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary-dark text-white font-bold hover:shadow-[0_0_20px_rgba(89,167,167,0.4)] transition-all"
            >
              Submit Your CV
              <ArrowDown size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Submit CV Form */}
      <section id="submit-cv" className="scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Submit Your CV" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" id="fullName" name="fullName" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input type="email" id="email" name="email" required className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="mobile" className={labelClass}>
                    Mobile Number / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input type="tel" id="mobile" name="mobile" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="city" className={labelClass}>
                    City / Governorate <span className="text-red-500">*</span>
                  </label>
                  <select id="city" name="city" required className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select governorate
                    </option>
                    {GOVERNORATES.map((gov) => (
                      <option key={gov} value={gov}>
                        {gov}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="degree" className={labelClass}>
                    Degree <span className="text-red-500">*</span>
                  </label>
                  <select id="degree" name="degree" required className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select degree
                    </option>
                    {DEGREES.map((degree) => (
                      <option key={degree} value={degree}>
                        {degree}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="university" className={labelClass}>
                    University / Faculty <span className="text-red-500">*</span>
                  </label>
                  <input type="text" id="university" name="university" required className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="experience" className={labelClass}>
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <select id="experience" name="experience" required className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select experience
                    </option>
                    {EXPERIENCE_OPTIONS.map((exp) => (
                      <option key={exp} value={exp}>
                        {exp}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="jobTitle" className={labelClass}>
                    Current / Most Recent Job Title <span className="text-red-500">*</span>
                  </label>
                  <input type="text" id="jobTitle" name="jobTitle" required className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="department" className={labelClass}>
                  Department of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  id="department"
                  name="department"
                  required
                  className={inputClass}
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="" disabled>
                    Select department
                  </option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              {showFieldForceFields && (
                <div className="space-y-6 p-6 md:p-8 rounded-[2rem] bg-slate-50/80 border border-slate-100">
                  <h3 className="content-heading font-bold">
                    Extra optional fields for field-force / medical sales applicants
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <YesNoField
                      name="drivingLicense"
                      label="Do you have a valid driving license?"
                      value={drivingLicense}
                      onChange={setDrivingLicense}
                    />
                    <YesNoField
                      name="hasCar"
                      label="Do you have a car?"
                      value={hasCar}
                      onChange={setHasCar}
                    />
                    <YesNoField
                      name="pharmaExperience"
                      label="Pharma field experience"
                      value={pharmaExperience}
                      onChange={setPharmaExperience}
                    />
                  </div>
                  <div>
                    <label htmlFor="governoratesCovered" className={labelClass}>
                      Governorates previously covered
                    </label>
                    <input
                      type="text"
                      id="governoratesCovered"
                      name="governoratesCovered"
                      className={inputClass}
                      placeholder="e.g. Cairo, Giza, Alexandria"
                    />
                  </div>
                  <CheckboxGroup
                    legend="Account type experience"
                    options={['Clinics', 'Hospitals', 'Tenders', 'Pharmacies']}
                    selected={accountTypes}
                    onChange={setAccountTypes}
                  />
                  <CheckboxGroup
                    legend="Therapeutic areas covered before"
                    options={[
                      'Orthopedics',
                      'OA',
                      'Injectables',
                      'Medical devices',
                      'Vitamins',
                      'Other',
                    ]}
                    selected={therapeuticAreas}
                    onChange={setTherapeuticAreas}
                  />
                </div>
              )}

              {/* CV Upload */}
              <div>
                <label htmlFor="cv" className={labelClass}>
                  Upload CV <span className="text-red-500">*</span>
                </label>
                <input
                  ref={cvInputRef}
                  type="file"
                  id="cv"
                  name="cv"
                  accept={CV_ACCEPTED_TYPES}
                  className="sr-only"
                  onChange={(e) => handleCvChange(e.target.files?.[0] ?? null)}
                />
                {!cvFile ? (
                  <button
                    type="button"
                    onClick={() => cvInputRef.current?.click()}
                    className="w-full flex flex-col items-center justify-center gap-3 px-5 py-8 rounded-2xl border-2 border-dashed border-slate-200 bg-white/60 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Upload className="text-primary" size={22} />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold text-slate-700">Click to upload your CV</p>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        PDF, DOC, or DOCX — max {MAX_CV_SIZE_MB}MB
                      </p>
                    </div>
                  </button>
                ) : (
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 px-5 py-4 rounded-2xl border border-primary/20 bg-primary/5">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <FileText className="text-primary" size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-slate-800 truncate">{cvFile.name}</p>
                        <p className="text-xs text-slate-500 font-medium">
                          {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={clearCv}
                      className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-1 p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors text-sm font-medium"
                    >
                      <X size={16} />
                      Remove
                    </button>
                  </div>
                )}
                {cvError && <p className="mt-2 text-sm font-medium text-red-500">{cvError}</p>}
              </div>

              <div>
                <label htmlFor="linkedin" className={labelClass}>
                  LinkedIn Profile <span className="text-slate-400 font-medium">(Optional)</span>
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  className={inputClass}
                  placeholder="https://linkedin.com/in/your-profile"
                />
              </div>

              {/* Consent */}
              <div className="p-6 rounded-[2rem] bg-slate-50/80 border border-slate-100">
                <h3 className="content-heading font-bold mb-4">Consent, Privacy & Compliance</h3>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 accent-primary shrink-0"
                  />
                  <span className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                    I confirm that the information provided is accurate. I consent to Platinum Pharma
                    collecting and processing my personal data for recruitment purposes in accordance with
                    the{' '}
                    <Link href="/candidate-privacy-notice" className="text-primary font-bold hover:underline">
                      Candidate Privacy Notice
                    </Link>
                    .
                  </span>
                </label>
              </div>

              {submitError && (
                <p className="text-sm font-medium text-red-500">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary-dark text-white font-extrabold text-base md:text-lg hover:shadow-[0_0_25px_rgba(89,167,167,0.5)] transition-all duration-300 hover:-translate-y-1 border border-white/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending Application...' : 'Submit Application'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
