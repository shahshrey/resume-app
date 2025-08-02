'use client';
import React, { useState, FC } from 'react';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import Glass from '../ui/Glass';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';

const ContactItem: FC<{
  icon: JSX.Element;
  label: string;
  value: string;
  href?: string;
}> = ({ icon, label, value, href }) => (
  <Glass variant="minimal" className="p-4 group hover:shadow-glass">
    <motion.div 
      className="flex items-center space-x-3"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="glass-primary p-2 rounded-lg text-primary-main">{icon}</div>
      <div>
        <p className="text-sm text-text-secondary">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-text-primary transition-colors hover:text-primary-main group-hover:text-primary-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : (
          <p className="text-text-secondary group-hover:text-text-primary">{value}</p>
        )}
      </div>
    </motion.div>
  </Glass>
);

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        throw new Error('Failed to send message');
      }

      toast.success('Thank you for your message. I will get back to you soon.');

      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatedSection className="py-16" delay={0.6} id="contact">
      <SectionHeader 
        title="Contact" 
        subtitle="Let's connect and discuss opportunities"
      />
      
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactItem
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            label="Email"
            value="sshreyv@gmail.com"
            href="mailto:sshreyv@gmail.com"
          />
          <ContactItem
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            }
            label="Phone"
            value="(647)-675-0790"
            href="tel:+16476750790"
          />
          <ContactItem
            icon={
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
            label="Location"
            value="Halifax, NS"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Glass variant="elevated" className="p-6">
            <h3 className="mb-6 text-xl font-semibold text-text-primary">Let&apos;s Connect</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="glass-minimal w-full px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-primary-main focus:outline-none focus:ring-2 focus:ring-primary-main/20 transition-all duration-300"
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="glass-minimal w-full px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-primary-main focus:outline-none focus:ring-2 focus:ring-primary-main/20 transition-all duration-300"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="glass-minimal w-full px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-primary-main focus:outline-none focus:ring-2 focus:ring-primary-main/20 transition-all duration-300 resize-none"
                  required
                  placeholder="Your message here..."
                />
              </div>
              <Glass 
                variant="primary" 
                glow 
                shimmer
                className="glass-button w-full px-4 py-3 text-white font-medium disabled:opacity-50"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </Glass>
              {submitStatus === 'success' && (
                <Glass variant="minimal" className="p-3">
                  <p className="text-sm text-green-400">Message sent successfully!</p>
                </Glass>
              )}
              {submitStatus === 'error' && (
                <Glass variant="minimal" className="p-3">
                  <p className="text-sm text-red-400">Failed to send message. Please try again.</p>
                </Glass>
              )}
            </form>
          </Glass>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
