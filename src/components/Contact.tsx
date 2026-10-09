'use client';

import { motion } from 'framer-motion';
import { Github, Globe, ExternalLink } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Hellenic Web3 Studio',
      icon: <Globe className="w-6 h-6" />,
      href: 'https://www.hellenicweb3.com',
      description: 'The studio that built this demo'
    },
    {
      name: 'Source on GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/ktsourdi/photographer-portfolio-demo',
      description: 'View the code behind this demo'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interested in collaborating or learning more about this project?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                About This Demo
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                This portfolio demonstrates modern web development practices through 
                a beautiful astrophotography theme.
              </p>
              <p className="text-gray-300 leading-relaxed">
                It is a demo project by Hellenic Web3 Studio. The photos and their
                captions are sample content.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Links
            </h3>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 glass-effect p-4 rounded-lg hover-glow transition-all duration-300 group"
                >
                  <div className="text-cosmic-purple group-hover:text-cosmic-cyan transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{link.name}</h4>
                    <p className="text-gray-400 text-sm">{link.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors ml-auto" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 