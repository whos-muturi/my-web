import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import ErrorBoundary from './ErrorBoundary';

function SkillImage({ position, image }: { position: [number, number, number]; image: string }) {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial
        map={new THREE.TextureLoader().load(image)}
        transparent
        opacity={0.9}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Three.js/WebGL", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 88 }
      ],
      color: "#00D4FF"
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 75 }
      ],
      color: "#00FF88"
    },
    {
      title: "3D & Creative",
      skills: [
        { name: "Blender", level: 90 },
        { name: "GLSL Shaders", level: 75 },
        { name: "WebXR/VR", level: 70 },
        { name: "After Effects", level: 78 },
        { name: "Figma/Design", level: 85 }
      ],
      color: "#B026FF"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills List */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                className="bg-cyber-dark/30 rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold mb-6" style={{ color: category.color }}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                        duration: 0.6 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className="h-full rounded-full"
                          style={{ 
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3D Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-96 bg-cyber-dark/30 rounded-xl border border-cyber-blue/20 overflow-hidden"
          >
            <ErrorBoundary>
              <Canvas 
                camera={{ position: [0, 0, 8], fov: 50 }}
                dpr={window.devicePixelRatio}
                gl={{ 
                  antialias: false, 
                  powerPreference: "low-power",
                  failIfMajorPerformanceCaveat: false
                }}
              >
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} color="#00D4FF" />
                <pointLight position={[-10, -10, -10]} color="#B026FF" />
                <pointLight position={[0, 10, -10]} color="#00FF88" />
                
                <SkillImage position={[-2, 1, 0]} image="/mongo.png" />
                <SkillImage position={[2, 0, 0]} image="/react.png" />
                <SkillImage position={[0, -1.5, 0]} image="/bl.png" />
                <SkillImage position={[0, 2, 0]} image="/python.png" />
              </Canvas>
            </ErrorBoundary>
          </motion.div>
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-cyber-blue">
            Additional Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Docker', 'AWS', 'Git', 'Jest', 'Webpack', 'Vite',
              'Prisma', 'Redis', 'Stripe', 'Socket.io', 'WebRTC', 'Electron'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-gradient-to-br from-cyber-dark to-cyber-darker border border-gray-600 rounded-lg p-4 text-center hover:border-cyber-blue/50 transition-all duration-300"
              >
                <span className="text-white font-medium text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;