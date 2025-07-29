import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import kwado from "@/../public/kwado.jpeg";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  ChevronDown,
  Shield,
  Code2
} from 'lucide-react';
import { Button } from '@/components/Button';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[url('/kwado.jpeg')] bg-contain bg-center h-64 w-full" > 
     <div className="absolute inset-0 bg-black/60 z-0" />

    {/* bg-gradient-to-br from-slate-100 via-purple to-blue-100"> */}
      <div className="absolute inset-0 bg-grid-slate-100 opacity-20 -z-10" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="mx-auto flex items-center justify-center w-48 h-48 rounded-full overflow-hidden shadow-2xl">
                {/* <motion.div
                    animate={{
                    scale: [1, 1.05, 1],
                    }}
                    transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    }}
            >
                <Image 
                    src={kwado} 
                    alt="Kwado" 
                    width={192} 
                    height={192} 
                    className="object-cover w-full h-full" 
                />
            </motion.div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-300 drop-shadow-lg leading-tight">
              Chikwado
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-indigo-600">
                Valentine Ani
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Safety Expert</span>
              </div>
              <div className="w-2 h-2 bg-slate-400 rounded-full" />
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full">
                <Code2 className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-800">Software Developer</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transforming from <span className="font-semibold text-blue-600">Occupational Health & Safety</span> 
              {" "}to cutting-edge <span className="font-semibold text-blue-600">Software Development</span>
              {" "}— bringing precision and innovation to every line of code.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a href="/Chikwado-Valentine-Ani.pdf" download >
                <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
                </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToAbout}
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            <a 
              href="https://github.com" 
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:chikwado@example.com" 
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-slate-400 hover:text-slate-600 transition-colors"
        >
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}