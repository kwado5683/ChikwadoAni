'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Card, CardContent } from '@/components/Card'; // fixed the import path

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
      color: "hover:text-slate-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chikwado-ani-2b6042114/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Connect</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
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
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
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
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-slate-900 font-medium hover:text-green-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <p className="text-sm font-medium text-slate-500 mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-slate-600 ${social.color} transition-all duration-300 hover:shadow-lg hover:scale-105`}
                    >
                      <social.icon className="w-5 h-5" />
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
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 p-5">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Name
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="border-slate-300 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="border-slate-300 focus:border-blue-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        rows={4}
                        className="border-slate-300 focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-green-700 hover:to-green-700 text-white py-3 cursor-pointer"
                    >
                      <Send className="w-4 h-4 mr-2 " />
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
