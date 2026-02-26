import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Placeholder animation
    gsap.from("h1", { opacity: 0, y: 50, duration: 1.5, ease: "power3.out" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <h1 className="text-6xl font-bold">Landing Template Ready</h1>
      <div className="noise" />
    </div>
  );
}

export default App;