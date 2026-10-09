'use client';

import { motion } from 'framer-motion';
import { Telescope, Camera, Code, Star } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Telescope className="w-8 h-8" />,
      title: 'Astrophotography',
      description: 'A gallery shaped around deep-sky, planetary, lunar and Milky Way work'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photo Details',
      description: 'Each photo opens in a viewer with its description and, where known, capture details'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Modern web technologies including React, Next.js, and TypeScript'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Image Optimization',
      description: 'Responsive, lazy-loaded images served through Next.js Image'
    }
  ];

  const technologies = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
    'Lucide Icons', 'Next.js Image', 'Vercel', 'Vercel Analytics'
  ];

  return (
    <section id="about" className="py-20 px-4 bg-cosmic-dark/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">This Project</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A demonstration of modern web development skills through the lens of astrophotography
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Showcasing Technical Excellence
              </h3>
              <p className="text-gray-300 leading-relaxed">
                This portfolio demonstrates proficiency in modern web development technologies 
                while celebrating the beauty of astrophotography. Built with performance, 
                accessibility, and user experience in mind.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The project features responsive design, smooth animations, optimized images 
                and a filterable gallery. It is a static Next.js site with no database or 
                backend: the sample photos load from Unsplash.
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 glass-effect rounded-full text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-lg hover-glow"
              >
                <div className="text-cosmic-purple mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 glass-effect rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Key Features Demonstrated
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">01</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Responsive Design</h4>
              <p className="text-gray-300 text-sm">Mobile-first approach with seamless adaptation across all devices</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cosmic-blue to-cosmic-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">02</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Performance Optimized</h4>
              <p className="text-gray-300 text-sm">Fast loading times with optimized images and efficient code</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cosmic-cyan to-cosmic-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">03</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Modern UX</h4>
              <p className="text-gray-300 text-sm">Smooth animations and intuitive user interactions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 