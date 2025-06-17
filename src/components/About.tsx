import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Award } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';

const About = () => {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "15+ Projects Completed",
      description: "Successfully delivered projects ranging from simple websites to complex 3D applications"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "3+ Years Experience",
      description: "Continuous learning and development in web technologies and 3D graphics"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Global Collaboration",
      description: "Worked with clients and teams across different continents and time zones"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer bridging the gap between design and technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                Hello! I'm Johnson, a passionate full-stack developer and 3D artist. 
                My journey into programming started with a fascination for creating interactive experiences 
                that blend cutting-edge technology with stunning visual design.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 3 years of experience in web development, I specialize in creating fullstack apps and immersive 
                digital experiences using modern frameworks like React, Next.js, Flask, Express.js and Three.js. My unique 
                background in both development and 3D art allows me to approach projects from multiple 
                perspectives, resulting in truly innovative solutions.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                When I'm not coding, you'll find me exploring new 3D modeling techniques in Blender, 
                experimenting with WebGL shaders, or contributing to open-source projects. I believe 
                that the future of web development lies in creating more immersive and interactive 
                experiences.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid md:grid-cols-1 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex items-start space-x-4 p-4 bg-cyber-darker/50 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-colors duration-300"
                >
                  <div className="text-cyber-blue mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 136, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyber-green to-cyber-blue text-white font-semibold rounded-full hover:shadow-cyber-green/50 transition-all duration-300"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-80 w-80 mx-auto rounded-xl overflow-hidden"
          >
            <ErrorBoundary>
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src="/mer.png"
                alt="Profile"
                className="w-full h-full object-contain"
              />
            </ErrorBoundary>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-cyber-purple">
            Beyond Development
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "3D Art & Animation",
                description: "Creating stunning 3D models and animations using Blender and Cinema 4D"
              },
              {
                title: "Open Source",
                description: "Contributing to open-source projects and sharing knowledge with the community"
              },
              {
                title: "Teaching & Mentoring",
                description: "Helping aspiring developers learn modern web development techniques"
              }
            ].map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="p-6 bg-gradient-to-br from-cyber-dark/50 to-cyber-darker/50 rounded-lg border border-gray-600 hover:border-cyber-purple/50 transition-colors duration-300"
              >
                <h4 className="text-lg font-semibold text-cyber-purple mb-3">
                  {interest.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;