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
        github: "https://github.com/kwado5683/Safety",
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
                    <div className="relative overflow-hidden p-4">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg"
                        whileHover={{ scale: 1.08, rotateY: 3 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        initial={{ scale: 1, rotateY: 0 }}
                        animate={{ scale: 1, rotateY: 0 }}
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
                            __html: project.description.replace(
                              /Zayn/g, 
                              '<span style="font-weight: bold; color: #2563eb;">Zayn</span>'
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
                        {project.links.github ? (
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
                          <div className="w-full h-10"></div> // Placeholder for consistent spacing
                        )}
                        
                        {project.links.live ? (
                          <motion.a
                            href={project.links.live}
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
                              asChild
                              size="sm"
                              className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-orange-600 hover:to-orange-700 text-white transition-all duration-1000 hover:shadow-xl focus:from-orange-600 focus:to-orange-700 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 shadow-lg"
                            >
                              <span className="flex items-center justify-center w-full h-full">
                                <ExternalLink className="w-4 h-4 mr-2 transition-transform duration-1000 group-hover/btn:scale-110" />
                                Live Demo
                              </span>
                            </Button>
                          </motion.a>
                        ) : (
                          <div className="w-full h-10"></div> // Placeholder for consistent spacing
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
