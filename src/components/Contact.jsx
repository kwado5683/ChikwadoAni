'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Card, CardContent } from '@/components/Card';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      if (res.ok) {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chikwadovalentine2@gmail.com",
      href: null
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      href: null
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+447501119439",
      href: "tel:+447501119439"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kwado5683",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chikwado-ani-2b6042114/",
      color: "hover:text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#16213e] via-[#1a1a2e] to-[#0f0f23]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="gradient-text-primary">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
          Ready to bring fresh ideas and impactful solutions to your next project
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                Whether you are looking for a developer who can quickly adapt and add value,
                 or just someone to exchange ideas about tech, I am always open to connecting.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 neumorphic rounded-xl flex items-center justify-center hover:bg-orange-600/20 transition-all duration-300 group">
                      <info.icon className="w-5 h-5 text-primary group-hover:text-orange-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-white font-medium hover:text-orange-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <p className="text-sm font-medium text-gray-400 mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 glassmorphic rounded-lg flex items-center justify-center text-white hover:bg-orange-600/20 transition-all duration-300 hover:glassmorphic-hover hover:scale-105`}
                    >
                      <social.icon className="w-5 h-5 group-hover:text-orange-400 transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="neumorphic border-0">
                <CardContent className="">
                  <h3 className="text-xl font-bold text-white mb-6 p-5">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Name
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="neumorphic border-0 text-white placeholder-gray-400 focus:neumorphic-hover"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="neumorphic border-0 text-white placeholder-gray-400 focus:neumorphic-hover"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        rows={4}
                        className="neumorphic border-0 text-white placeholder-gray-400 focus:neumorphic-hover"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full text-white py-3 cursor-pointer transition-all duration-300 rounded-lg"
                      style={{
                        background: 'linear-gradient(to right, var(--primary), var(--secondary))',
                        boxShadow: 'inset 2px 2px 5px rgba(255, 255, 255, 0.05), inset -2px -2px 5px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.4)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(to right, #ea580c, #c2410c)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'linear-gradient(to right, var(--primary), var(--secondary))';
                      }}
                    >
                      {/* <Send className="w-4 h-4 mr-2 " /> */}
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
