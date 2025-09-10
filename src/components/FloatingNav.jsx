// import Link from "next/link"

// export default function HeroSection () {
//     return (
//         <>
//             <div className="flex items-center gap-2 p-30">
//                 <Link href={"/About"}>About</Link>
//                 <Link href={"/Skills"}>Skills</Link>
//                 <Link href={"/Projects"}>Projects</Link>
//                 <Link href={"/Contact"}>Contact</Link>
//             </div>
//         </>
//     )
// }

"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code2, Briefcase, Mail } from 'lucide-react';

export default function FloatingNav({ activeSection }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code2, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="glassmorphic rounded-full px-6 py-3">
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
                                className={`relative p-3 rounded-full transition-all duration-500 group ${
                    activeSection === item.id
                      ? 'neumorphic text-white glow-primary'
                      : 'text-gray-300 hover:text-orange-600 hover:neumorphic'
                  }`}
            >
              <item.icon className="w-5 h-5" />
              
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 glassmorphic text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-400 whitespace-nowrap">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}