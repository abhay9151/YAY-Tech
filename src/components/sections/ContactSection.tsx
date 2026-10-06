import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: initialService || '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update projectType if initialService changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, projectType: initialService }));
    }
  }, [initialService]);

  const serviceOptions = [
    'Web Development',
    'Mobile App Development',
    'Digital Marketing',
    'Graphic Design',
    'E-commerce Solutions',
    'Consulting Services',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      errs.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      errs.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.projectType) {
      errs.projectType = 'Please select a service / project type';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your project';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please enter at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate fast frontend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      projectType: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" data-nav-section className="relative overflow-hidden border-t border-border py-20 sm:py-28 lg:py-36">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gray-700/10 blur-[170px] pointer-events-none rounded-full" />

      <Container size="wide">
        <SectionHeading
          badge="Get In Touch"
          badgeVariant="default"
          title={
            <span>
              Let's Discuss Your Project &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                Lock In Your Delivery Date
              </span>
            </span>
          }
          subtitle="Ready to discuss your project? We are here to answer your questions, assess your scope, and deliver on time."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-6 rounded-3xl border border-foreground/10 bg-surface p-6 shadow-card sm:p-8">
              <h3 className="font-display text-2xl font-medium text-foreground">
                Contact Information
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-foreground/10 bg-background text-foreground">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-medium text-gray-600">
                      Direct Phone
                    </div>
                    <a
                      href={`tel:${siteContent.company.contact.phone.replace(/\s+/g, '')}`}
                      className="font-mono text-base font-semibold text-foreground hover:text-foreground transition-colors"
                    >
                      {siteContent.company.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-foreground/10 bg-background text-gray-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-medium text-gray-600">
                      Inquiries Email
                    </div>
                    <a
                      href={`mailto:${siteContent.company.contact.email}`}
                      className="font-mono text-base font-semibold text-foreground hover:text-gray-700 transition-colors"
                    >
                      {siteContent.company.contact.email}
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-foreground/10 bg-background text-foreground">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-medium text-gray-600">
                      Engineering Hub
                    </div>
                    <div className="text-sm text-gray-600 leading-snug">
                      Indirapuram, Ghaziabad<br />
                      Uttar Pradesh, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="space-y-3 border-t border-foreground/10 pt-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span>Business Working Hours</span>
                </div>
                <div className="space-y-1.5 text-xs text-gray-600 font-normal">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-gray-600 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-gray-600 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-gray-600/90 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form or Success State */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface p-6 shadow-card sm:p-10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="mb-2 font-display text-2xl font-medium text-foreground">
                        Send Us A Message
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 font-normal">
                        Fill in your project details and our team will get back to you within 2 business hours.
                      </p>
                    </div>

                    {/* Name Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5"
                        >
                          First Name <span className="text-gray-600">*</span>
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => {
                            setFormData({ ...formData, firstName: e.target.value });
                            if (errors.firstName) setErrors({ ...errors, firstName: '' });
                          }}
                          placeholder="John"
                          className={`min-h-12 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground placeholder-gray-500 focus:outline-none focus:border-foreground transition-colors ${
                            errors.firstName
                              ? 'border-foreground border-2 focus:border-foreground'
                              : 'border-foreground/15 focus:border-foreground'
                          }`}
                        />
                        {errors.firstName && (
                          <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.firstName}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5"
                        >
                          Last Name <span className="text-gray-600">*</span>
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => {
                            setFormData({ ...formData, lastName: e.target.value });
                            if (errors.lastName) setErrors({ ...errors, lastName: '' });
                          }}
                          placeholder="Doe"
                          className={`min-h-12 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground placeholder-gray-500 focus:outline-none focus:border-foreground transition-colors ${
                            errors.lastName
                              ? 'border-foreground border-2 focus:border-foreground'
                              : 'border-foreground/15 focus:border-foreground'
                          }`}
                        />
                        {errors.lastName && (
                          <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.lastName}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5"
                      >
                        Business Email <span className="text-gray-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="john@example.com"
                        className={`min-h-12 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground placeholder-gray-500 focus:outline-none focus:border-foreground transition-colors ${
                          errors.email
                            ? 'border-foreground border-2 focus:border-foreground'
                            : 'border-foreground/15 focus:border-foreground'
                        }`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Project Type Select */}
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5"
                      >
                        Project Type / Service <span className="text-gray-600">*</span>
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => {
                          setFormData({ ...formData, projectType: e.target.value });
                          if (errors.projectType) setErrors({ ...errors, projectType: '' });
                        }}
                        className={`min-h-12 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors ${
                          errors.projectType
                            ? 'border-foreground border-2 focus:border-foreground'
                            : 'border-foreground/15 focus:border-foreground'
                        }`}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-surface text-foreground">
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.projectType}</span>
                        </div>
                      )}
                    </div>

                    {/* Project Details Textarea */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5"
                      >
                        Project Details & Timeline Requirements <span className="text-gray-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        placeholder="Tell us about your project requirements, target milestones, and timeline..."
                        className={`w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground placeholder-gray-500 focus:outline-none focus:border-foreground transition-colors ${
                          errors.message
                            ? 'border-foreground border-2 focus:border-foreground'
                            : 'border-foreground/15 focus:border-foreground'
                        }`}
                      />
                      {errors.message && (
                        <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center"
                      icon={
                        isSubmitting ? (
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-inverse-foreground border-t-transparent" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )
                      }
                    >
                      {isSubmitting ? 'Sending Request...' : 'Send Message'}
                    </Button>
                  </motion.form>
                ) : (
                  /* Celebratory Success State */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 px-4 text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-3xl bg-muted border-2 border-foreground flex items-center justify-center mx-auto text-foreground">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
                        Inquiry Received!
                      </h3>
                      <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-semibold text-foreground">{formData.firstName}</span>. Your project proposal for{' '}
                        <span className="font-semibold text-foreground underline">{formData.projectType}</span> has been logged. Our lead architect will review your requirements and reach out within 2 hours.
                      </p>
                    </div>

                    <div className="mx-auto max-w-sm space-y-1 rounded-2xl border border-foreground/10 bg-background p-4 text-xs text-muted-foreground">
                      <div>Confirmation sent to: <span className="font-mono text-foreground">{formData.email}</span></div>
                      <div>Expected timeline: <span className="text-gray-600 font-semibold">Immediate Review</span></div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetForm}
                      className="mx-auto"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
