import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import '../../../css/components/profile/ProfileComponents.css';

const initialEducation = [
  { id: 1, degree: 'M.S. in Software Engineering', institution: 'Stanford University', year: '2020' },
  { id: 2, degree: 'B.Tech in Computer Science', institution: 'MIT', year: '2018' },
];

const EducationSection = () => {
  const [education, setEducation] = useState(initialEducation);

  const handleAddEducation = () => {
    const newRecord = {
      id: Date.now(),
      degree: 'Ph.D in Artificial Intelligence (New)',
      institution: 'University of Dummy',
      year: '2025'
    };
    setEducation([newRecord, ...education]);
  };

  const handleDelete = (id) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  return (
    <div className="profile-card">
      <div className="card-header">
        <h3>Education</h3>
        <button className="text-btn primary" onClick={handleAddEducation}>+ Add New</button>
      </div>
      
      <div className="table-container">
        <table className="profile-table">
          <thead>
            <tr>
              <th>DEGREE</th>
              <th>INSTITUTION</th>
              <th>PASSING YEAR</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu) => (
              <tr key={edu.id}>
                <td className="strong">{edu.degree}</td>
                <td className="light">{edu.institution}</td>
                <td className="light">{edu.year}</td>
                <td>
                  <button className="icon-btn-small delete" onClick={() => handleDelete(edu.id)}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EducationSection;
