import React from 'react';
import { Code2, Database, Cloud } from 'lucide-react';
import '../../../css/components/profile/ProfileComponents.css';

const skillsData = [
  { 
    id: 1, 
    name: 'React & Next.js', 
    current: 'Expert', 
    target: 'Advanced', 
    progress: 85,
    icon: <Code2 size={16} />,
    color: '#4f46e5',
    bg: '#eef2ff'
  },
  { 
    id: 2, 
    name: 'PostgreSQL', 
    current: 'Intermediate', 
    target: 'Advanced', 
    progress: 60,
    icon: <Database size={16} />,
    color: '#22c55e',
    bg: '#dcfce7'
  },
  { 
    id: 3, 
    name: 'AWS Infrastructure', 
    current: 'Beginner', 
    target: 'Intermediate', 
    progress: 35,
    icon: <Cloud size={16} />,
    color: '#f59e0b',
    bg: '#fef3c7'
  }
];

const SkillsSection = () => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <h3>Skills & Competencies</h3>
      </div>
      
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-header">
              <div className="skill-icon" style={{ backgroundColor: skill.bg, color: skill.color }}>
                {skill.icon}
              </div>
              <span className="skill-badge" style={{ color: skill.color, backgroundColor: skill.bg }}>
                {skill.current === 'Expert' ? 'Expert' : skill.current === 'Intermediate' ? 'Adv.' : 'Inter.'}
              </span>
            </div>
            
            <h4 className="skill-name">{skill.name}</h4>
            
            <div className="skill-levels">
              <div className="level-text">
                <span className="level-label">Current:</span> {skill.current}
              </div>
              <div className="level-text">
                <span className="level-label">Target:</span> {skill.target}
              </div>
            </div>
            
            <div className="skill-progress-bar">
              <div 
                className="skill-progress-fill" 
                style={{ width: `${skill.progress}%`, backgroundColor: skill.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
