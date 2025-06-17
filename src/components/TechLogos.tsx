import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import ErrorBoundary from './ErrorBoundary';

function FloatingLogo({ 
  position, 
  text, 
  color, 
  speed = 1 
}: { 
  position: [number, number, number];
  text: string;
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        <Text
          fontSize={0.3}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
        <mesh position={[0, 0, -0.1]}>
          <ringGeometry args={[0.8, 1, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

function TechScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      
      <FloatingLogo position={[-3, 1, 0]} text="React" color="#61DAFB" speed={0.8} />
      <FloatingLogo position={[0, 0, 0]} text="Three.js" color="#00D4FF" speed={1.2} />
      <FloatingLogo position={[3, -0.5, 0]} text="TypeScript" color="#3178C6" speed={0.6} />
      <FloatingLogo position={[-2, -1.5, 0]} text="Node.js" color="#00FF88" speed={1.0} />
      <FloatingLogo position={[2, 1.5, 0]} text="Next.js" color="#ffffff" speed={0.9} />
    </>
  );
}

const TechLogos = () => {
  const technologies = [
    'React', 'TypeScript', 'Three.js', 'Node.js', 'Next.js', 
    'Python', 'WebGL', 'Blender', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <div className="space-y-8">
      {/* 3D Tech Logos */}
      <div className="h-64 w-full">
        <ErrorBoundary fallback={
          <div className="h-64 w-full flex items-center justify-center bg-cyber-dark/20 rounded-xl border border-cyber-blue/20">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="text-cyber-blue font-bold">React</div>
              <div className="text-cyber-purple font-bold">Three.js</div>
              <div className="text-cyber-green font-bold">Node.js</div>
            </div>
          </div>
        }>
          <Canvas 
            camera={{ position: [0, 0, 6], fov: 50 }}
            dpr={window.devicePixelRatio}
            gl={{ 
              antialias: false, 
              powerPreference: "low-power",
              failIfMajorPerformanceCaveat: false
            }}
          >
            <TechScene />
          </Canvas>
        </ErrorBoundary>
      </div>

      {/* Tech Stack Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
      >
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="px-4 py-2 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border border-cyber-blue/30 rounded-full text-sm font-medium text-cyber-blue hover:border-cyber-purple/50 transition-all duration-300 cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechLogos;