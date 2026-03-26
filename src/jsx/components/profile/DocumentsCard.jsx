import React from 'react';
import { FileDown, FileText } from 'lucide-react';
import '../../../css/components/profile/ProfileComponents.css';

const documentsData = [
  { id: 1, name: 'Identity_Proof.pdf', date: 'Oct 24, 2023', type: 'pdf', icon: <FileDown size={20} /> },
  { id: 2, name: 'Offer_Letter.docx', date: 'Jan 12, 2022', type: 'doc', icon: <FileText size={20} /> }
];

const DocumentsCard = () => {
  return (
    <div className="profile-card side-card">
      <div className="card-header">
        <h3>Documents</h3>
      </div>
      
      <div className="document-list">
        {documentsData.map((doc) => (
          <div key={doc.id} className="document-item">
            <div className={`document-icon ${doc.type}`}>
              {doc.icon}
            </div>
            <div className="document-info">
              <p className="document-name">{doc.name}</p>
              <p className="document-date">{doc.date}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="text-btn full-width uppercase">View All Documents</button>
    </div>
  );
};

export default DocumentsCard;
