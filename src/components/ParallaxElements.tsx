import { useEffect, useState } from 'react';

export default function ParallaxElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        style={{
          top: `${20 + mousePosition.y * 0.1}%`,
          left: `${10 + mousePosition.x * 0.08}%`,
          transition: 'all 0.3s ease-out'
        }}
      />
      
      <div
        className="absolute w-72 h-72 rounded-full bg-secondary/5 blur-3xl"
        style={{
          top: `${60 + mousePosition.y * 0.05}%`,
          left: `${70 + mousePosition.x * 0.06}%`,
          transition: 'all 0.5s ease-out'
        }}
      />

      <div
        className="absolute w-64 h-64 rounded-full bg-accent/5 blur-2xl"
        style={{
          top: `${30 + mousePosition.y * 0.07}%`,
          left: `${80 + mousePosition.x * 0.04}%`,
          transition: 'all 0.4s ease-out'
        }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div
        className="absolute w-2 h-2 rounded-full bg-primary/40"
        style={{
          top: `${40 + mousePosition.y * 0.15}%`,
          left: `${20 + mousePosition.x * 0.12}%`,
          transition: 'all 0.2s ease-out'
        }}
      />
      
      <div
        className="absolute w-3 h-3 rounded-full bg-secondary/40"
        style={{
          top: `${70 + mousePosition.y * 0.18}%`,
          left: `${50 + mousePosition.x * 0.15}%`,
          transition: 'all 0.25s ease-out'
        }}
      />

      <div
        className="absolute w-1.5 h-1.5 rounded-full bg-accent/40"
        style={{
          top: `${15 + mousePosition.y * 0.1}%`,
          left: `${85 + mousePosition.x * 0.08}%`,
          transition: 'all 0.3s ease-out'
        }}
      />
    </div>
  );
}
