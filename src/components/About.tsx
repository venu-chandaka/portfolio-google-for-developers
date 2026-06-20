'use client';

import React from 'react';
import { BookOpen, Award, GraduationCap, Calendar } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '7.67', label: 'B.Tech CGPA', icon: <GraduationCap size={20} /> },
    { number: 'Top 40', label: 'AI Project (Shell/AICTE)', icon: <Award size={20} /> },
    { number: '3+', label: 'Industry Projects', icon: <BookOpen size={20} /> },
    { number: '1st Place', label: 'Sudoku & Project Expo Wins', icon: <Award size={20} /> },
  ];

  const coursework = [
    "Data Structures",
    "Algorithms",
    "Software Engineering",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Machine Learning Basics",
  ];

  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        {/* Profile Narrative & Stat Cards */}
        <div className="about-info">
          <h3 className="about-title">Software Engineer Student &amp; Tech Enthusiast</h3>
          <p className="about-summary">
            Currently pursuing my Bachelor of Technology in Computer Science (graduating 2027), I am a passionate developer with practical experience in creating web applications and exploring the potential of Artificial Intelligence.
          </p>
          <p className="about-summary">
            Through internships at organizations like InsightQuest Tech and Shell-Edunet, I have honed my skills in MERN-stack web development and applying machine learning solutions to practical problems. I thrive in collaborative hackathons and project expos, where my solutions have earned top recognition.
          </p>

          <div className="about-stats">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card about-stat-card">
                <div style={{ color: 'var(--primary-orange)', display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  {stat.icon}
                </div>
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Details */}
        <div className="education-container">
          <div className="glass-card edu-card">
            <div className="edu-header">
              <div>
                <span className="badge" style={{ marginBottom: '0.5rem' }}>Higher Education</span>
                <h3 className="edu-title">Bachelor of Technology (B.Tech)</h3>
                <p className="edu-school">Avanthi&apos;s St. Theresa Institute of Engineering &amp; Technology</p>
              </div>
              <div className="edu-cgpa">
                CGPA: 7.67
              </div>
            </div>

            <div className="edu-meta">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <BookOpen size={16} style={{ color: 'var(--primary-orange)' }} /> Computer Science and Engineering
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={16} style={{ color: 'var(--primary-orange)' }} /> Expected Graduation: 2027
              </span>
            </div>

            <div className="edu-courses">
              <span className="edu-courses-title">Relevant Coursework:</span>
              <div className="course-badges">
                {coursework.map((course, idx) => (
                  <span key={idx} className="badge" style={{ background: 'rgba(255,255,255,0.03)', color: 'var(--text-main)', border: '1px solid var(--card-border)' }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
