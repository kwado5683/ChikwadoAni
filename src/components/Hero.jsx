// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import kwado from "@/../public/kwado.jpeg";
// import { 
//   Github, 
//   Linkedin, 
//   Mail, 
//   Download,
//   ChevronDown,
//   Shield,
//   Code2
// } from 'lucide-react';
// import { Button } from '@/components/Button';

// export default function HeroSection() {
//   const scrollToAbout = () => {
//     document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grey-600 bg-contain bg-center h-64 w-full" >
//      <div className="absolute inset-0 bg-dark/10 z-0" />

//     {/* bg-gradient-to-br from-slate-100 via-purple to-blue-100"> */}
//       <div className="absolute inset-0 bg-grid-slate-100 opacity-20 -z-10" />
      
//       <div className="container mx-auto px-6 py-20 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="mb-8"
//           >
//             <div className="mx-auto flex items-center justify-center w-48 h-48 rounded-full overflow-hidden shadow-2xl">
//                 <motion.div
//                     animate={{
//                     scale: [1, 1.05, 1],
//                     }}
//                     transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: 'easeInOut',
//                     }}
//             >
//                 <Image 
//                     src={kwado} 
//                     alt="Kwado" 
//                     width={192} 
//                     height={192} 
//                     className="object-cover w-full h-full" 
//                 />
//             </motion.div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="mb-6"
//           >
//             <h1 className="text-5xl md:text-7xl font-extrabold text-orange-600 drop-shadow-lg leading-tight">
//               Chikwado
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600">
//                 Valentine Ani
//               </span>
//             </h1>
//           </motion.div>

//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="mb-8"
//           >
//             <div className="flex items-center justify-center gap-4 mb-4">
//               <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
//                 <Shield className="w-4 h-4 text-blue-600" />
//                 <span className="text-sm font-medium text-blue-800">Safety Expert</span>
//               </div>
//               <div className="w-2 h-2 bg-slate-400 rounded-full" />
//               <div className="flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full">
//                 <Code2 className="w-4 h-4 text-indigo-600" />
//                 <span className="text-sm font-medium text-indigo-800">Software Developer</span>
//               </div>
//             </div>
//             <p className="text-xl md:text-2xl text-black-300 max-w-3xl mx-auto leading-relaxed">
//               Transitioning from <span className="font-semibold text-blue-600">Occupational Health & Safety</span> 
//               {" "}to cutting-edge <span className="font-semibold text-blue-600">Software Development</span>
//               {" "}bringing precision and innovation to every line of code.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
//           >
//             <a href="/Chikwado-Valentine-Ani.pdf" download >
//                 <Button 
//               size="lg" 
//               className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 >
//               <Download className="w-5 h-5 mr-2" />
//               Download Resume
//                 </Button>
//             </a>
//             <Button 
//               size="lg" 
//               variant="outline" 
//               onClick={scrollToAbout}
//               className="border-2 border-slate-300 text-slate-700 hover:bg-green-600 px-8 py-3 text-lg transition-all duration-300 cursor-pointer"
//             >
//               Learn More
//             </Button>
//           </motion.div>

//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="flex justify-center gap-6"
//           >
//             <a 
//               href="https://github.com/kwado5683" 
//               className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
//             >
//               <Github className="w-5 h-5" />
//             </a>
//             <a 
//               href="https://www.linkedin.com/in/chikwado-ani-2b6042114/" 
//               className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a 
//               href="mailto:chikwadovalentine2@gmail.com" 
//               className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
//             >
//               <Mail className="w-5 h-5" />
//             </a>
//           </motion.div>
//         </div>
//       </div>

     
//     </section>
//   );
// }



// app/components/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import kwado from "@/../public/kwado.jpeg";
import { Github, Linkedin, Mail, Download, Shield, Code2,ChevronDown } from 'lucide-react';
import { Button } from '@/components/Button';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
          <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden 
        bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]"
      >
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: 'url(/kwado.jpeg)' }} />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-20 -z-10" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Profile image */}
          {/* <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
                          <div className="mx-auto flex items-center justify-center w-48 h-48 rounded-full overflow-hidden 
               neumorphic p-2">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image 
                  src={kwado} 
                  alt="Kwado" 
                  width={192} 
                  height={192} 
                  className="object-cover w-full h-full" 
                />
              </motion.div>
            </div>
          </motion.div> */}

          {/* Name */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
                         className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg"
          >
            Chikwado{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Valentine Ani
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 mb-10"
          >
                         <div className="flex items-center justify-center gap-4 mb-6">
               <div className="flex items-center gap-2 px-4 py-2 neumorphic rounded-full hover:neumorphic-hover hover:bg-orange-600/20 cursor-pointer transition-all duration-300 group">
                 <Shield className="w-4 h-4 text-primary group-hover:text-orange-400 transition-colors duration-300" />
                 <span className="text-sm font-medium text-white group-hover:text-orange-200 transition-colors duration-300">Safety Expert</span>
               </div>
               <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
               <div className="flex items-center gap-2 px-4 py-2 neumorphic rounded-full hover:neumorphic-hover hover:bg-orange-600/20 cursor-pointer transition-all duration-300 group">
                 <Code2 className="w-4 h-4 text-secondary group-hover:text-orange-400 transition-colors duration-300" />
                 <span className="text-sm font-medium text-white group-hover:text-orange-200 transition-colors duration-300">Software Developer</span>
               </div>
             </div>
                         <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
               Transitioning from <span className="font-semibold text-primary">Occupational Health & Safety </span> 
               to <span className="font-semibold text-secondary">Software Development</span>, 
               blending precision and innovation in every project.
             </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a href="/Chikwado-Valentine-Ani.pdf" download className="flex-1 sm:flex-none">
                              <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-orange-600 hover:to-orange-700 
                   text-white px-8 py-3 text-lg neumorphic hover:neumorphic-hover cursor-pointer glow-primary"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
            </a>
                        <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToAbout}
              className="w-full sm:w-auto neumorphic text-white cursor-pointer hover:neumorphic-hover hover:bg-orange-600
               px-8 py-3 text-lg border-0"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-6"
          >
                         {[
               { href: "https://github.com/kwado5683", icon: <Github className="w-5 h-5" />, label: "GitHub" },
               { href: "https://www.linkedin.com/in/chikwado-ani-2b6042114/", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
               { href: "mailto:chikwadovalentine2@gmail.com", icon: <Mail className="w-5 h-5" />, label: "Email" }
             ].map(({ href, icon, label }, i) => (
               <motion.a 
                 key={i}
                 href={href}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.1, y: -5 }}
                 whileTap={{ scale: 0.95 }}
                 className="w-14 h-14 glassmorphic rounded-full flex items-center justify-center 
                  text-white hover:glassmorphic-hover hover:bg-orange-600/20 cursor-pointer group"
                 title={label}
               >
                 <div className="group-hover:scale-110 transition-transform duration-300">
                   {icon}
                 </div>
               </motion.a>
             ))}
          </motion.div>
          {/* Floating scroll-down indicator */}
                         <motion.div
                 onClick={scrollToAbout}
                 initial={{ y: 0 }}
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 1.5, repeat: Infinity }}
                 className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
             >
                 <div className="w-12 h-12 neumorphic rounded-full flex items-center justify-center hover:neumorphic-hover hover:bg-orange-600/20 transition-all duration-300">
                   <ChevronDown className="w-6 h-6 text-primary group-hover:text-orange-400 transition-colors duration-300" />
                 </div>
             </motion.div>
        </div>
      </div>
    </section>
  );
}
