import React from 'react';
import { HelpCircle } from 'lucide-react';
import '../../../css/components/notifications/NotificationsComponents.css';

const FloatingHelpButton = () => {
  return (
    <button className="floating-help-btn" aria-label="Help">
      <HelpCircle size={24} />
    </button>
  );
};

export default FloatingHelpButton;
