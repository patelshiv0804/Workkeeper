import React from 'react';
import { Send } from 'lucide-react';
import '../../../css/components/exitprocess/ExitProcessComponents.css';

const ExitActionButtons = () => {
  return (
    <div className="exit-action-buttons">
      <button className="btn-secondary">Save Draft</button>
      <button className="btn-primary">
        <Send size={16} className="btn-icon" />
        Initiate Exit Process
      </button>
    </div>
  );
};

export default ExitActionButtons;
