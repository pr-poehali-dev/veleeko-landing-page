import { useEffect, useState } from 'react';

export default function ParallaxElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100 - 50,
        y: (e.clientY / window.innerHeight) * 100 - 50
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute w-[600px] h-[600px] opacity-40 animate-float"
        style={{
          top: `${10 + mousePosition.y * 0.03}%`,
          right: `${-10 + mousePosition.x * 0.025}%`,
          transform: `translateY(${scrollY * 0.1}px) rotateZ(${mousePosition.x * 0.2}deg)`,
          transition: 'all 0.8s ease-out'
        }}
      >
        <img 
          src="https://cdn.poehali.dev/projects/18839ea2-ee88-4d2c-8e6c-a2c959e2f05c/files/5199d954-e964-4a29-aab6-5336d9561b0a.jpg" 
          alt="" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      <div
        className="absolute w-[500px] h-[500px] opacity-30 animate-float"
        style={{
          top: `${50 + mousePosition.y * 0.04}%`,
          left: `${-5 + mousePosition.x * 0.03}%`,
          transform: `translateY(${scrollY * 0.15}px) rotateZ(${-mousePosition.x * 0.15}deg)`,
          transition: 'all 1s ease-out',
          animationDelay: '1s'
        }}
      >
        <img 
          src="https://cdn.poehali.dev/projects/18839ea2-ee88-4d2c-8e6c-a2c959e2f05c/files/93e6edc6-b2e4-4954-bc57-d1795516ed4f.jpg" 
          alt="" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      <div
        className="absolute w-[700px] h-[700px] opacity-25 animate-float"
        style={{
          bottom: `${10 + mousePosition.y * 0.02}%`,
          right: `${5 + mousePosition.x * 0.02}%`,
          transform: `translateY(${scrollY * 0.08}px) rotateZ(${mousePosition.y * 0.1}deg)`,
          transition: 'all 1.2s ease-out',
          animationDelay: '2s'
        }}
      >
        <img 
          src="https://cdn.poehali.dev/projects/18839ea2-ee88-4d2c-8e6c-a2c959e2f05c/files/f28145c3-eb1d-41b2-97a1-cb140005d620.jpg" 
          alt="" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      <div
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        style={{
          top: `${20 + mousePosition.y * 0.08}%`,
          left: `${10 + mousePosition.x * 0.06}%`,
          transition: 'all 0.5s ease-out'
        }}
      />
      
      <div
        className="absolute w-72 h-72 rounded-full bg-secondary/5 blur-3xl"
        style={{
          top: `${60 + mousePosition.y * 0.04}%`,
          left: `${70 + mousePosition.x * 0.05}%`,
          transition: 'all 0.7s ease-out'
        }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
