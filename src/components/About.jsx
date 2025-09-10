'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code2, Users, Lightbulb, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/Card';

export default function AboutSection() {
  const journey = [
    {
      icon: Shield,
      title: "Safety Expert",
      description: "Built expertise in Occupational Health & Safety Management, developing critical thinking and risk assessment skills.",
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      title: "Discovery",
      description: "Discovered passion for technology and problem-solving through automation and digital safety solutions.",
      color: "text-secondary"
    },
    {
      icon: Code2,
      title: "Transformation",
      description: "Made the bold transition to software development, bringing precision and structure to building clean, dependable code.",
      color: "text-accent"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Safety background brings meticulous attention to detail and systematic problem-solving."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Experience in safety management translates to effective team communication and leadership."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Driven by creating solutions that make a meaningful difference in people's lives."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Unique <span className="gradient-text-primary">Journey</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
                Coming from a 
                <span className="font-semibold text-primary"> decade-long career in safety management </span>
                and transitioning into 
                <span className="font-semibold text-secondary"> full-stack development </span>
                has been both 
                <span className="text-white"> challenging </span> 
                and 
                <span className="text-white"> deeply rewarding</span>. 
                It's a journey fueled by 
                <span className="font-medium text-secondary"> determination</span>, 
                <span className="font-medium text-secondary"> teamwork</span>, 
                and a 
                <span className="font-medium text-secondary"> passion for solving real-world problems through technology.</span> 
                
                <br /><br />
                Along the way, I've built and deployed 
                <span className="font-semibold text-primary"> practical, user-centered applications </span> 
                using 
                <span className="text-secondary"> modern tools and frameworks</span>. 
                I take pride in being 
                <span className="font-semibold text-secondary"> innovative</span>, 
                <span className="font-semibold text-secondary"> adaptable</span>, 
                and 
                <span className="font-semibold text-secondary"> always eager to learn something new</span>.
                <br /><br />
                If the goal is 
                <span className="font-semibold text-primary"> building impactful, meaningful products </span> 
                that solve real problems, then I am excited to contribute and grow alongside a team that shares the same drive.
                <br /><br />
                Beyond tech, I am a 
                <span className="text-white font-semibold"> husband</span>, 
                <span className="text-white font-semibold"> a father</span> and 
                <span className="text-white font-semibold"> a friend</span>.
            </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-20 ">
          <div className="grid md:grid-cols-3 gap-8">
            {journey.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full neumorphic hover:neumorphic-hover hover:bg-orange-600/10 transition-all duration-500 group p-8 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full neumorphic flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:bg-orange-600/20">
                      <step.icon className={`w-8 h-8 ${step.color} group-hover:text-orange-400 transition-colors duration-500`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-200 transition-colors duration-500">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-orange-100 transition-colors duration-500">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What I Bring to <span className="gradient-text-primary">Every Project</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg neumorphic flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:bg-orange-600/20">
                  <value.icon className="w-6 h-6 text-primary group-hover:text-orange-500 transition-colors duration-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-200 transition-colors duration-500">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-orange-100 transition-colors duration-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}