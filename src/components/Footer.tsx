'use client';

import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cosmic-dark/80 border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <Camera className="h-6 w-6 text-cosmic-purple" />
            <span className="text-lg font-bold text-gradient">AstroGallery Demo</span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>© 2025 Demo built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>
              by{' '}
              <a
                href="https://www.hellenicweb3.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                Hellenic Web3 Studio
              </a>
            </span>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-xs text-gray-500"
          >
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Framer Motion</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 