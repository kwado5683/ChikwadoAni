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
        title: "My first Portfolio Site",
        description: "A full-stack testimonial and reference board, built with Next.js (App Router) and PostgreSQL, it features dynamic data fetching, visitors can leave feedback directly, with submissions stored and displayed in real-time. If you manage to visit, please leave me a comment.",
        image: "/sms.jpg",
        technologies: ["React", "Node.js", "PostgreSQL", "Next.js"],
        category: "Full Stack",
        links: {
          github: "https://github.com/kwado5683/week8-portfolioWebSite",
          live: "https://week8-portfolio-web-site.vercel.app/"
        }
      },
    {
      title: "Safety Management System",
      description: "A comprehensive web application for managing workplace safety compliance, incident tracking, and risk assessment workflows.",
      image: "/sms.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Next.js"],
      category: "Full Stack",
      links: {
        github: "https://github.com/kwado5683/Safety-Management-System",
        live: "https://safety-management-system-2h1s.vercel.app"
      }
    },
    // {
    //   title: "Task Management API",
    //   description: "RESTful API with user authentication, task CRUD operations, and real-time notifications built with modern best practices.",
    //   image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    //   technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    //   category: "Backend",
    //   links: {
    //     github: "https://github.com"
    //   }
    // },
    {
      title: "Zayn AI-agent",
      description: "Zayn is an AI chatbot project built with Next.js, @ai-sdk/react, and Tailwind CSS, featuring real-time conversations powered by modern AI tools. ",
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Real-world applications showcasing my technical skills and problem-solving approach
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <CategoryIcon className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-slate-700">{project.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary"
                            className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        {project.links.github && (
                         <a 
                         href={project.links.github}
                         target="_blank"
                         rel="noopener noreferrer"
                         >
                         <Button 
                            variant="outline" 
                            size="sm"
                            className="flex-1 border-slate-300 cursor-pointer hover:bg-slate-50 "
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                          </a>
                        )}
                        {project.links.live && (
                          
                          <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full h-full"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        
                          
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
