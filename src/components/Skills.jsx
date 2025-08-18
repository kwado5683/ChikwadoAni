import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Server, 
  Terminal,
  Globe
} from 'lucide-react';
import { Card, CardContent } from '@/components/Card';
import { Badge } from '@/components/Badge';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript",description: "ES6+, Modern JS features" },
        { name: "React", description: "Hooks, Context, State Management" },
        { name: "Next.js",description: "SSR, SSG, API Routes" },
        { name: "HTML/CSS", description: "Semantic markup, Responsive design" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", description: "Express, APIs, Middleware" },
        { name: "RESTful APIs", description: "Design, Implementation, Testing" },
        { name: "Authentication", description: "JWT, OAuth, Security" },
        { name: "Server Architecture", description: "Scalable, Maintainable Systems" }
      ]
    },
    database: {
      title: "Database Management",
      icon: Database,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "PostgreSQL", description: "Complex queries, Optimization" },
        { name: "MongoDB", description: "NoSQL, Aggregation, Indexing" },
        { name: "Database Design",description: "Normalization, ERD, Performance" },
        { name: "Data Modeling", description: "Relational & Document models" }
      ]
    },
    tools: {
      title: "Tools & DevOps",
      icon: Terminal,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", description: "Version control, Branching, Collaboration" },
        { name: "Linux", description: "Command line, System administration" },
        { name: "Docker", description: "Containerization, Deployment" },
        { name: "CI/CD", description: "Automated testing, Deployment pipelines" }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A comprehensive stack built through hands-on experience and continuous learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const categoryData = skillCategories[category];
              const IconComponent = categoryData.icon;
              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                    activeCategory === category
                      ? 'bg-blue-600 shadow-lg text-white'
                      : 'bg-white/50 text-slate-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {categoryData.title}
                </motion.button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm p-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color} flex items-center justify-center`}>
                  {React.createElement(skillCategories[activeCategory].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>

              <div className="grid gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center  mb-2">
                      <div>
                        <h4 className="font-semibold text-slate-900">{skill.name}</h4>
                        <p className="text-sm text-slate-600">{skill.description}</p>
                      </div>
                      {/* <Badge variant="outline" className="text-sm font-medium">
                        
                      </Badge> */}
                    </div>
                    {/* <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full`}
                      />
                    </div> */}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}