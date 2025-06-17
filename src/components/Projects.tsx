import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Twitter Clone",
      description: "A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.",
      image: "/twitter.jpeg",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      github: "https://github.com/whos-muturi/Twitter-Clone",
      live: "https://lovely-rabanadas-0ce4bd.netlify.app/",
      color: "#B026FF"
    },
    {
      id: 2,
      title: "3D Website",
      description: "An immersive 3D portfolio showcasing interactive WebGL experiences, built with Three.js and React Three Fiber.",
      image: "/3d.jpeg",
      tech: ["React", "Three.js", "WebGL", "Framer Motion", "TypeScript"],
      github: "https://github.com/whos-muturi/3Dweb",
      live: "#",
      color: "#00D4FF"
    },
    {
      id: 3,
      title: "AI-Powered Chat App",
      description: "Real-time chat application with AI integration, featuring smart responses, file sharing, and collaborative workspaces.",
      image: "/chat.jpeg",
      tech: ["React", "Node.js", "Socket.io", "OpenAI", "MongoDB"],
      github: "https://github.com/whos-muturi/AI-Chat",
      live: "https://vocal-churros-f13fa5.netlify.app/",
      color: "#00FF88"
    },
    {
      id: 4,
      title: "VR Data Visualization",
      description: "Immersive VR experience for visualizing complex datasets in 3D space, built with WebXR and custom shaders.",
      image: "/vr.jpeg",
      tech: ["WebXR", "Three.js", "D3.js", "GLSL", "React"],
      github: "#",
      live: "#",
      color: "#FF0080"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover my latest work combining cutting-edge technology with creative design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project List */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(index)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedProject === index
                    ? 'border-cyber-blue bg-cyber-blue/5'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyber-dark border border-cyber-blue/30 rounded-full text-xs text-cyber-blue"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 text-xs text-gray-500">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-cyber-green hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-cyber-blue hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-96 bg-cyber-dark/30 rounded-xl border border-cyber-blue/20 overflow-hidden relative"
          >
            <ErrorBoundary>
              <motion.img
                key={selectedProject}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
            </ErrorBoundary>
            
            {/* Project Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-cyber-darker/90 backdrop-blur-sm rounded-lg p-4">
              <h4 className="text-lg font-semibold text-cyber-blue mb-1">
                {projects[selectedProject].title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {projects[selectedProject].tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://app.netlify.com/teams/whos-muturi/projects"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(176, 38, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-semibold rounded-full hover:shadow-cyber-purple/50 transition-all duration-300"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;