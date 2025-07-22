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
      color: "text-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Discovery",
      description: "Discovered passion for technology and problem-solving through automation and digital safety solutions.",
      color: "text-indigo-600"
    },
    {
      icon: Code2,
      title: "Transformation",
      description: "Made the bold transition to software development, applying safety-first principles to clean, reliable code.",
      color: "text-purple-600"
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            A Unique <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Journey</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            My path from Occupational Health & Safety to Software Development isn't traditional, 
            but it's given me a distinctive perspective that combines safety-first thinking 
            with innovative problem-solving.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {journey.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
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
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What I Bring to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Every Project</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}