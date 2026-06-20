'use client';

import React from 'react';
import { Calendar, Award } from 'lucide-react';

interface Position {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  accolade?: string;
}

export default function Experience() {
  const experiences: Position[] = [
    {
      role: 'Web Development Intern',
      company: 'InsightQuest Tech',
      period: 'Oct 2025 – Nov 2025',
      bullets: [
        'Led end-to-end development of a full-stack online learning platform using the MERN stack (MongoDB, Express, React, Node.js).',
        'Implemented secure JWT-based user authentication and role-based access control (RBAC) for instructors and learners.',
        'Developed course management features including content upload, enrollment workflows, and quiz creation modules.',
        'Built interactive progress tracking dashboards and responsive UI components, improving user engagement by 30%.'
      ]
    },
    {
      role: 'AI Intern',
      company: 'Shell-Edunet Skills4Future (AICTE)',
      period: 'Feb 2025 – March 2025',
      bullets: [
        'Completed a 4-week intensive AI internship focused on applying machine learning techniques for environmental sustainability.',
        'Designed and developed an AI-powered solution addressing sustainability challenges, recognized in the Top 40 projects nationally out of thousands of submissions.',
        'Collaborated in cross-functional teams to research, prototype, and present AI-driven sustainability applications.'
      ],
      accolade: 'Top 40 project recognition nationwide'
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-title">Internship Experience</h2>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="timeline-node"></div>
            
            <div className="glass-card timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                </div>
                <div className="timeline-date" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={15} style={{ color: 'var(--primary-orange)' }} />
                  {exp.period}
                </div>
              </div>

              {exp.accolade && (
                <div className="badge" style={{ marginBottom: '1.2rem', display: 'inline-flex', gap: '0.4rem', alignItems: 'center' }}>
                  <Award size={14} /> {exp.accolade}
                </div>
              )}

              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
