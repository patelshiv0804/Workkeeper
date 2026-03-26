import React, { useState } from 'react';
import '../../../../css/components/admin/team/OrganizationTree.css';
import { Folder, FolderOpen, ChevronRight, ChevronDown } from 'lucide-react';

const OrganizationTree = () => {
  const [expanded, setExpanded] = useState({ eng: true });
  
  const toggleExp = (key) => {
      setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="org-tree-panel">
      
      <div className="org-tree-header">
        <span className="org-title-label">ORGANIZATION</span>
        <button className="expand-collapse-btn">
            <ChevronDown size={14} />
        </button>
      </div>

      <div className="org-tree-content">
        
        {/* Engineering Group */}
        <div className="org-group">
            <div className="org-group-header" onClick={() => toggleExp('eng')}>
                <div className="org-group-title">
                    {expanded.eng ? <FolderOpen size={16} className="folder-icon" /> : <Folder size={16} className="folder-icon" />}
                    <span>Engineering</span>
                </div>
                <span className="org-count">42</span>
            </div>
            
            {expanded.eng && (
                <div className="org-group-children">
                    <div className="org-item active">
                        <div className="org-branch-line"></div>
                        <span>Frontend Team</span>
                    </div>
                    <div className="org-item">
                        <div className="org-branch-line"></div>
                        <span>Backend Team</span>
                    </div>
                    <div className="org-item">
                        <div className="org-branch-line"></div>
                        <span>DevOps</span>
                    </div>
                </div>
            )}
        </div>

        {/* Product & Design */}
        <div className="org-group">
            <div className="org-group-header">
                <div className="org-group-title">
                    <Folder size={16} className="folder-icon" />
                    <span>Product & Design</span>
                </div>
                <span className="org-count">18</span>
            </div>
        </div>

        {/* Marketing */}
        <div className="org-group">
            <div className="org-group-header">
                <div className="org-group-title">
                    <Folder size={16} className="folder-icon" />
                    <span>Marketing</span>
                </div>
                <span className="org-count">12</span>
            </div>
        </div>

        {/* HR */}
        <div className="org-group">
            <div className="org-group-header">
                <div className="org-group-title">
                    <Folder size={16} className="folder-icon" />
                    <span>Human Resources</span>
                </div>
                <span className="org-count">6</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default OrganizationTree;
