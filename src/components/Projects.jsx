"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Database, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Safety Management System",
      description: `Safety and Compliance Report (SCAR) is a bespoke web app for managing workplace safety and compliance. It streamlines incident tracking, risk assessments, and corrective actions, all in one place. SCAR also integrates with Zayn, our AI chatbot assistant, to provide real-time guidance and automated safety insights.`,
      image: "/sms.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Next.js"],
      category: "Full Stack",
      links: {
        github: " ",
        live: "https://safety-mgt.vercel.app/"
      }
    },
    {
        title: "Testimonial and Reference Board",
        description: "A full-stack testimonial and reference board, built with Next.js (App Router) and PostgreSQL, it features dynamic data fetching, visitors can leave feedback directly, with submissions stored and displayed in real-time. If you manage to visit, please leave me a comment.",
        image: "/kwado.jpeg",
        technologies: ["React", "Node.js", "PostgreSQL", "Next.js"],
        category: "Full Stack",
        links: {
          github: "https://github.com/kwado5683/week8-portfolioWebSite",
          live: "https://week8-portfolio-web-site.vercel.app/"
        }
      },
    
    {
      title: "Zayn AI-Chatbot",
      description: "Zayn is an AI chatbot assistant built for organizations that need instant, tailored support. It provides real-time guidance, generates templates and corrective measures, and adapts to each organization’s data and policies. Zayn can also integrate with SCAR to deliver intelligent, in-app safety insights and recommendations.",
      image: "/zayn.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS", "@ai-sdk/react"],
      category: "Frontend",
      links: {
        github: "https://github.com/kwado5683/Zayn-Ai-Agent",
        live: "https://zayn-ai-agent.vercel.app/"
      }
    },
    {
      title: "Scar Landing Page",
      description: "A responsive landing page introducing SCAR, a bespoke safety management platform. It highlights SCAR’s core features and visuals while capturing early-access requests through an integrated contact form.",
      image: "/scar-landing-page.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Next.js"],
      category: "Full Stack",
      links: {
        github: "https://github.com/kwado5683/scar-landing-page",
        live: "https://scar-landing-page.vercel.app/"
      }
    },
    {
      title: "Shift Management System",
      description: "A full-stack shift management web application built for bank/support worker scheduling. The app streamlines the shift assignment process by replacing chaotic email threads with a clean, mobile-first interface where admins can post shifts and workers can request ones they're eligible for based on role and gender requirements.",
      image: "/shift-management.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Next.js", "Tailwind CSS","Resend"],
      category: "Full Stack",
      links: {
        github: "https://github.com/kwado5683/Newton-Shift-Manager",
        live: "https://newton-shift-manager.vercel.app/"
      }
    },
    {
      title: "Safe Start",
      description: "An online training platform built to help individuals and organisations meet mandatory health and safety requirements across the UK.",
      image: "/safestart.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Next.js"],
      category: "Full Stack",
      links: {
        github: "https://github.com/kwado5683/scar-landing-page",
        live: "https://safe-start.vercel.app/"
      }
    }
  ];

  const categoryIcons = {
    "Full Stack": Code2,
    "Backend": Database,
    "Frontend": Globe
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Real-world applications showcasing my technical skills and problem-solving approach
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
            {projects.map((project, index) => {
              const CategoryIcon = categoryIcons[project.category];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="h-full neumorphic hover:neumorphic-hover transition-all duration-1000 ease-out group overflow-hidden border-0 flex flex-col hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative overflow-hidden p-4 perspective-1000">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-1000 ease-out"
                        whileHover={{ 
                          scale: 1.05, 
                          rotateY: 5, 
                          rotateX: 2,
                          z: 20
                        }}
                        whileTap={{ 
                          scale: 0.98, 
                          rotateY: 2, 
                          rotateX: 1 
                        }}
                        transition={{ 
                          duration: 0.8, 
                          ease: "easeInOut",
                          type: "spring",
                          stiffness: 100,
                          damping: 15
                        }}
                        initial={{ 
                          scale: 1, 
                          rotateY: 0, 
                          rotateX: 0,
                          z: 0 
                        }}
                        animate={{ 
                          scale: 1, 
                          rotateY: 0, 
                          rotateX: 0,
                          z: 0 
                        }}
                        style={{
                          transformStyle: "preserve-3d",
                          backfaceVisibility: "hidden"
                        }}
                      />
                                              <motion.div 
                          className="absolute top-6 left-6"
                          whileHover={{ scale: 1.05, rotate: 2 }}
                          transition={{ duration: 0.7, ease: "easeInOut" }}
                          initial={{ scale: 1, rotate: 0 }}
                          animate={{ scale: 1, rotate: 0 }}
                        >
                          <div className="flex items-center gap-2 glassmorphic px-3 py-1 rounded-full hover:glassmorphic-hover hover:bg-orange-600/20 transition-all duration-1000 focus:bg-orange-600/20 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
                            <CategoryIcon className="w-4 h-4 text-primary group-hover:scale-110 group-hover:text-orange-400 transition-all duration-1000" />
                            <span className="text-sm font-medium text-white group-hover:text-orange-200 transition-colors duration-1000">{project.category}</span>
                          </div>
                        </motion.div>
                    </div>
                    
                    <CardContent className="p-8 flex flex-col flex-1">
                      <div className="flex-1">
                        <motion.h3 
                          className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-1000"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.7, ease: "easeInOut" }}
                          initial={{ x: 0 }}
                          animate={{ x: 0 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-300 mb-6 leading-relaxed px-2 group-hover:text-gray-200 transition-colors duration-1000"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.7, ease: "easeInOut" }}
                          initial={{ x: 0 }}
                          animate={{ x: 0 }}
                          dangerouslySetInnerHTML={{
                            __html: project.description
                              .replace(
                                /Zayn/g, 
                                '<span style="font-weight: bold; color: #2563eb;">Zayn</span>'
                              )
                              .replace(
                                /SCAR/g, 
                                '<span style="font-weight: bold; color: #2563eb;">SCAR</span>'
                              )
                          }}
                        />
                        
                        <div className="flex flex-wrap gap-3 mb-8 px-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              whileHover={{ scale: 1.08, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.6, ease: "easeInOut" }}
                              initial={{ scale: 1, y: 0 }}
                              animate={{ scale: 1, y: 0 }}
                            >
                              <Badge 
                                variant="outline"
                                className="text-white bg-gray-800 border-gray-600 hover:bg-orange-600 hover:text-white hover:border-orange-500 transition-all duration-1000 focus:bg-orange-600 focus:text-white focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 cursor-pointer shadow-md hover:shadow-lg"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 px-2 mt-auto">
                        {/* {project.links.github ? (
                          <motion.a 
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full group/btn"
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            initial={{ scale: 1, y: 0 }}
                            animate={{ scale: 1, y: 0 }}
                          >
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="w-full bg-gray-800 text-white cursor-pointer border-0 transition-all duration-1000 hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
                            >
                              <Github className="w-4 h-4 mr-2 transition-transform duration-1000 group-hover/btn:scale-110" />
                              Code
                            </Button>
                          </motion.a>
                        ) : (
                          <div className="w-full h-10"></div>
                        )} */}
                        
                        {project.title === "Safe Start" && (
                          <motion.p
                            className="col-span-2 text-sm text-orange-400 mb-2 font-medium text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          >
                            Currently working on this project
                          </motion.p>
                        )}
                        
                        {project.links.live ? (
                          <motion.a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full col-span-2 group/btn"
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            initial={{ scale: 1, y: 0 }}
                            animate={{ scale: 1, y: 0 }}
                          >
                            <Button
                              size="sm"
                              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-green-600 hover:to-green-700 text-white transition-all duration-1000 hover:shadow-xl focus:from-orange-600 focus:to-orange-700 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 shadow-lg flex items-center justify-center"
                            >
                              <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-1000 group-hover/btn:scale-110" />
                              Live Demo
                            </Button>
                          </motion.a>
                        ) : (
                          <div className="w-full h-10"></div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
