'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaCalendar } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
];

const CalendlyButton: FC = () => (
  <motion.a
    href="https://calendly.com/shreyshah_/30-mins-with-shrey"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-main px-6 py-3 text-background-main transition-colors duration-300 hover:bg-primary-light"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Schedule a meeting"
  >
    <FaCalendar className="h-5 w-5" />
    <span className="font-medium">Schedule a Meeting</span>
  </motion.a>
);

const Hero: FC = () => {
  return (
    <section className="relative flex min-h-screen items-center" id="home">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="from-background-light/10 to-background-dark/20 absolute inset-0 bg-gradient-to-br via-background-main" />
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-primary-main"
              animate={{
                x: [Math.random() * 100, Math.random() * 100],
                y: [Math.random() * 100, Math.random() * 100],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="bg-gradient-to-r from-primary-main to-primary-light bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Shrey Shah
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-semibold text-text-secondary md:text-3xl"
            >
              <TypeAnimation
                sequence={['AI Software Engineer', 2000, 'Full Stack Developer', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary-main"
              />
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Contact Info with Hover Effects */}
              <div className="space-y-3">
                {[
                  {
                    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                    text: 'sshreyv@gmail.com',
                  },
                  {
                    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                    text: '(647)-675-0790',
                  },
                  {
                    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
                    text: 'Halifax, NS',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-center space-x-3 text-text-secondary transition-colors duration-300 hover:text-primary-main"
                    whileHover={{ x: 5 }}
                  >
                    <svg
                      className="h-5 w-5 transition-transform group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={item.icon}
                      />
                    </svg>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="prose prose-lg">
                <p className="leading-relaxed text-text-secondary">
                  AI Software Engineer with over 8 years of experience in software development and
                  1.5+ years of experience developing AI-driven tools and solutions. Expertise in
                  LangChain, LangGraph, and litellm with hands-on development of multi-agent
                  applications, RAG and knowledge graphs systems at scale.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-col space-y-4 pt-4">
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary transition-colors duration-300 hover:text-primary-main"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
                <CalendlyButton />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-48 w-48 flex-shrink-0 md:h-64 md:w-64"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-full w-full rounded-full">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-light to-primary-dark"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <div className="absolute inset-2 overflow-hidden rounded-full bg-background-main">
                <Image
                  src="/images/profile.jpeg"
                  alt="Profile photo"
                  fill
                  priority
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-text-secondary">
          <div className="mt-2 h-3 w-1 rounded-full bg-primary-main" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
