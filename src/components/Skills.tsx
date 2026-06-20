'use client';

import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Cpu, 
  Database, 
  Server, 
  Wrench, 
  Coffee, 
  BarChart,
  BrainCircuit
} from 'lucide-react';

interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'ml' | 'databases';
  level: number; // percentage
  levelText: string;
  icon: React.ReactNode;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'frameworks' | 'ml' | 'databases'>('all');

  const skills: Skill[] = [
    // Languages
    { name: 'Python', category: 'languages', level: 90, levelText: 'Advanced', icon: <Terminal size={18} /> },
    { name: 'Java', category: 'languages', level: 85, levelText: 'Advanced', icon: <Coffee size={18} /> },
    { name: 'JavaScript', category: 'languages', level: 80, levelText: 'Intermediate', icon: <Code size={18} /> },
    { name: 'C & C++', category: 'languages', level: 75, levelText: 'Intermediate', icon: <Code size={18} /> },
    
    // Frameworks & Libraries
    { name: 'React', category: 'frameworks', level: 85, levelText: 'Advanced', icon: <Cpu size={18} /> },
    { name: 'Next.js', category: 'frameworks', level: 80, levelText: 'Intermediate', icon: <Cpu size={18} /> },
    { name: 'Node.js', category: 'frameworks', level: 80, levelText: 'Intermediate', icon: <Server size={18} /> },
    { name: 'Express', category: 'frameworks', level: 80, levelText: 'Intermediate', icon: <Server size={18} /> },
    { name: 'FastAPI', category: 'frameworks', level: 75, levelText: 'Intermediate', icon: <Server size={18} /> },
    { name: 'Streamlit', category: 'frameworks', level: 80, levelText: 'Advanced', icon: <BarChart size={18} /> },
    
    // AI & Machine Learning
    { name: 'TensorFlow', category: 'ml', level: 80, levelText: 'Intermediate', icon: <BrainCircuit size={18} /> },
    { name: 'Keras', category: 'ml', level: 80, levelText: 'Intermediate', icon: <BrainCircuit size={18} /> },
    { name: 'Scikit-learn', category: 'ml', level: 85, levelText: 'Advanced', icon: <BrainCircuit size={18} /> },
    { name: 'OpenCV', category: 'ml', level: 75, levelText: 'Intermediate', icon: <Cpu size={18} /> },
    { name: 'MediaPipe', category: 'ml', level: 70, levelText: 'Intermediate', icon: <Cpu size={18} /> },
    { name: 'Pandas & NumPy', category: 'ml', level: 85, levelText: 'Advanced', icon: <BarChart size={18} /> },

    // Databases & Tools
    { name: 'MongoDB', category: 'databases', level: 80, levelText: 'Intermediate', icon: <Database size={18} /> },
    { name: 'MySQL', category: 'databases', level: 85, levelText: 'Advanced', icon: <Database size={18} /> },
    { name: 'SQL Server', category: 'databases', level: 70, levelText: 'Intermediate', icon: <Database size={18} /> },
    { name: 'Git & GitHub', category: 'databases', level: 85, levelText: 'Advanced', icon: <Wrench size={18} /> },
    { name: 'VS Code', category: 'databases', level: 90, levelText: 'Advanced', icon: <Wrench size={18} /> }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Web & Frameworks' },
    { id: 'ml', label: 'AI & ML' },
    { id: 'databases', label: 'Databases & Tools' },
  ] as const;

  return (
    <section id="skills" className="container">
      <h2 className="section-title">My Skills</h2>

      {/* Tabs navigation */}
      <div className="skills-nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`skills-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, idx) => (
          <div key={idx} className="glass-card skill-card fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
            <div className="skill-icon-box">
              {skill.icon}
            </div>
            <div className="skill-info">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level-text">{skill.levelText}</span>
              </div>
              <div className="skill-bar-container">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
