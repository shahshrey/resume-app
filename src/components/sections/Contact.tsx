'use client';
import React, { FC } from 'react';

const ContactItem: FC<{
  icon: JSX.Element;
  label: string;
  value: string;
  href?: string;
}> = ({ icon, label, value, href }) => (
  <div className="flex items-center space-x-3">
    <div className="text-primary-main">{icon}</div>
    <div>
      <p className="text-sm text-text-secondary">{label}</p>
      {href ? (
        <a
          href={href}
          className="text-text-primary transition-colors hover:text-primary-main"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      ) : (
        <p className="text-text-secondary">{value}</p>
      )}
    </div>
  </div>
);

const Contact: FC = () => {
  return (
    <section className="py-16" id="contact">
      <h2 className="mb-8 text-3xl font-bold text-text-primary">Contact</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
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
        </div>
        <div className="rounded-lg bg-background-paper p-6">
          <h3 className="mb-4 text-xl font-semibold text-text-primary">Let&apos;s Connect</h3>
          <p className="text-text-secondary">
            I&apos;m always interested in new opportunities and collaborations. Feel free to reach
            out if you&apos;d like to discuss AI development, automation solutions, or any other
            tech projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
