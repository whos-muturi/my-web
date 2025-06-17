import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import { Send, Mail, MessageSquare, User, Github, Linkedin, Twitter } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('ViYAawJ3tmX_sqoQ_');

function ContactSphere() {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1.5, 1]}>
      <MeshDistortMaterial
        color="#FF0080"
        transparent
        opacity={0.8}
        distort={0.4}
        speed={3}
        emissive="#FF0080"
        emissiveIntensity={0.3}
      />
    </Icosahedron>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_rurns6n',
        'template_is6sjbv',
        formRef.current!,
        'ViYAawJ3tmX_sqoQ_'
      );
      
      // Reset form
      setFormData({ user_name: '', user_email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/whos-muturi',
      color: '#00D4FF'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/johnson-muturi/',
      color: '#00FF88'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-pink to-cyber-purple bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-cyber-dark/30 rounded-xl p-8 border border-cyber-pink/20"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-cyber-darker border border-gray-600 rounded-lg focus:border-cyber-pink focus:outline-none focus:ring-2 focus:ring-cyber-pink/20 text-white placeholder-gray-400 transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-cyber-darker border border-gray-600 rounded-lg focus:border-cyber-pink focus:outline-none focus:ring-2 focus:ring-cyber-pink/20 text-white placeholder-gray-400 transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-cyber-darker border border-gray-600 rounded-lg focus:border-cyber-pink focus:outline-none focus:ring-2 focus:ring-cyber-pink/20 text-white placeholder-gray-400 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255, 0, 128, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-cyber-pink to-cyber-purple text-white font-semibold rounded-lg hover:shadow-cyber-pink/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-600">
              <h4 className="text-lg font-semibold text-cyber-pink mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="p-3 bg-cyber-darker border border-gray-600 rounded-full hover:border-opacity-50 transition-all duration-300"
                    style={{ 
                      borderColor: social.color + '40',
                      color: social.color 
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3D Visual & Contact Info */}
          <div className="space-y-8">
            {/* 3D Contact Sphere */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-64 bg-cyber-dark/30 rounded-xl border border-cyber-pink/20 overflow-hidden"
            >
              <ErrorBoundary>
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 0.5,
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  src="/phone.png"
                  alt="Contact"
                  className="w-full h-full object-contain"
                />
              </ErrorBoundary>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-cyber-dark/30 rounded-xl p-8 border border-cyber-blue/20"
            >
              <h3 className="text-2xl font-semibold text-cyber-blue mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-cyber-pink" size={20} />
                  <span className="text-gray-300">johnsonmuturi3@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="text-cyber-blue" size={20} />
                  <span className="text-gray-300">github.com/whos-muturi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="text-cyber-green" size={20} />
                  <span className="text-gray-300">linkedin.com/in/johnson-muturi/</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-cyber-darker/50 rounded-lg border border-cyber-purple/20">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-cyber-purple">Response Time:</strong> I typically respond to messages within 24 hours. 
                  For urgent projects, feel free to mention it in your message and I'll prioritize accordingly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-600 text-center"
        >
          <p className="text-gray-400">
            © 2024 Alex Chen. Built with React, Three.js, and lots of ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;