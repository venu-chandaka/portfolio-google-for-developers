'use client';

import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  Sprout, 
  GraduationCap, 
  X, 
  ArrowRight 
} from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';

interface Project {
  id: string;
  title: string;
  category: 'ai-ml' | 'web-dev';
  categoryLabel: string;
  period: string;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  icon: React.ReactNode;
  accolade?: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-ml' | 'web-dev'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'proprep',
      title: 'ProPrep – AI-Based Interview System',
      category: 'ai-ml',
      categoryLabel: 'AI & Computer Vision',
      period: 'March 2026',
      shortDesc: 'AI-powered mock interview practice platform generating confidence scores and actionable posture/speech feedback using computer vision.',
      longDesc: 'ProPrep is an award-winning system designed to help students ace their interviews. By integrating OpenCV and MediaPipe, the platform captures user video feed in real-time, analyzing facial landmarks and posture. The backend uses FastAPI to process frames and compute confidence ratings, while the frontend delivers a responsive dashboard with visual performance graphs.',
      tech: ['FastAPI', 'React', 'OpenCV', 'MediaPipe', 'Python', 'TailwindCSS'],
      features: [
        'Real-time posture and facial expression analysis using computer vision models.',
        'Immediate confidence scoring and constructive feedback reports after interviews.',
        'High-performance backend API serving model predictions with minimal latency.',
        'Awarded 1st Prize at Pragyan 2026 Tech Fest.'
      ],
      githubUrl: 'https://github.com/venu-chandaka/',
      icon: <Sparkles size={24} />,
      accolade: '1st Place – Sudoku & Project Expo (Pragyan 2026)'
    },
    {
      id: 'plant-disease',
      title: 'Plant Disease Detection System',
      category: 'ai-ml',
      categoryLabel: 'Machine Learning / Deep Learning',
      period: 'March 2025',
      shortDesc: 'A deep learning image classification system utilizing transfer learning to accurately diagnose crop illnesses from leaf photos.',
      longDesc: 'Developed for farmers to diagnose crop diseases on the fly. Built with TensorFlow and Keras, the system implements a convolutional neural network (CNN) trained with dataset augmentation. The application is wrapped in a Streamlit interface, allowing seamless drag-and-drop photo uploads and rendering rapid disease classifications.',
      tech: ['TensorFlow', 'Keras', 'Streamlit', 'Python', 'Pandas', 'NumPy'],
      features: [
        'Robust crop disease classification using Convolutional Neural Networks.',
        'Interactive Streamlit UI supporting direct camera snapshots and image uploads.',
        'Data augmentation and transfer learning techniques to ensure accuracy with small training sets.',
        'Includes disease details and organic treatment recommendation overlays.'
      ],
      githubUrl: 'https://github.com/venu-chandaka/',
      icon: <Sprout size={24} />
    },
    {
      id: 'learning-platform',
      title: 'Online Learning Platform (MERN)',
      category: 'web-dev',
      categoryLabel: 'Full-Stack Web Dev',
      period: 'October 2025',
      shortDesc: 'Comprehensive course management system featuring secure JWT authorization, role-based workflows, and progress tracking dashboards.',
      longDesc: 'A complete custom-built LMS designed for teachers and students. Instructors can curate courses, publish text/video content, and construct multiple-choice quizzes. Learners benefit from interactive dashboards mapping enrollment courses, complete progress bars, and quiz scores. The entire stack communicates via REST APIs with MongoDB.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'CSS Modules'],
      features: [
        'Role-Based Access Control (RBAC) separating student and instructor workspaces.',
        'Dynamic course creation workflows including media uploads and interactive quizzes.',
        'Learner analytics dashboard tracking progress, test grades, and completion rates.',
        'Secure token-based authentication (JWT) with HTTP-only cookies.'
      ],
      githubUrl: 'https://github.com/venu-chandaka/',
      icon: <GraduationCap size={24} />
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="container">
      <h2 className="section-title">My Projects</h2>

      {/* Filter Tabs */}
      <div className="projects-filter-bar">
        <button 
          className={`skills-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`skills-tab-btn ${activeFilter === 'ai-ml' ? 'active' : ''}`}
          onClick={() => setActiveFilter('ai-ml')}
        >
          AI &amp; ML
        </button>
        <button 
          className={`skills-tab-btn ${activeFilter === 'web-dev' ? 'active' : ''}`}
          onClick={() => setActiveFilter('web-dev')}
        >
          Web Development
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <div key={project.id} className="glass-card fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
            <div className="project-card-inner">
              <div className="project-top-line">
                <div className="project-icon">{project.icon}</div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="GitHub Source">
                    <GithubIcon size={18} />
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="Live Demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-details">
                <span className="badge" style={{ width: 'fit-content' }}>{project.categoryLabel}</span>
                <h3 className="project-title" onClick={() => setSelectedProject(project)}>
                  {project.title}
                </h3>
                <p className="project-desc">{project.shortDesc}</p>
                <div className="project-tags">
                  {project.tech.slice(0, 3).map((t, tIdx) => (
                    <span key={tIdx} className="badge" style={{ background: 'rgba(255,255,255,0.03)', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="badge" style={{ background: 'rgba(255,255,255,0.03)', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="project-view-more" onClick={() => setSelectedProject(project)}>
                Explore details <ArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Glass Modal overlay */}
      <div className={`modal-overlay ${selectedProject ? 'open' : ''}`} onClick={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="glass-panel modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              <X size={18} />
            </button>

            <div className="modal-header">
              <span className="badge" style={{ width: 'fit-content' }}>{selectedProject.categoryLabel}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
              <div className="modal-meta">
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Developed: {selectedProject.period}</span>
                {selectedProject.accolade && (
                  <span className="badge">{selectedProject.accolade}</span>
                )}
              </div>
            </div>

            <div className="modal-body">
              <div>
                <h4 className="modal-subheading">Project Overview</h4>
                <p>{selectedProject.longDesc}</p>
              </div>

              <div>
                <h4 className="modal-subheading">Key Features</h4>
                <ul className="modal-features">
                  {selectedProject.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="modal-subheading">Technologies Used</h4>
                <div className="project-tags" style={{ marginTop: '0.3rem' }}>
                  {selectedProject.tech.map((t, tIdx) => (
                    <span key={tIdx} className="badge" style={{ background: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <GithubIcon size={18} /> View Source Code
                </a>
                {selectedProject.demoUrl && (
                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <ExternalLink size={18} /> Visit Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
