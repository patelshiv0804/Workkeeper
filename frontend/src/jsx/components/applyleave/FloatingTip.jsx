import React from 'react';
import { Lightbulb, X } from 'lucide-react';
import '../../../css/components/applyleave/FloatingTip.css';

const FloatingTip = () => {
    return (
        <div className="floating-tip-card card border-orange-left">
            <div className="tip-icon-wrapper">
                <Lightbulb size={20} className="tip-icon" />
            </div>

            <div className="tip-content">
                <h4 className="tip-title">Planning ahead?</h4>
                <p className="tip-message">
                    Apply for your holiday leave early to ensure smooth team handover.
                </p>
            </div>

            <button className="btn-close-tip">
                <X size={16} />
            </button>
        </div>
    );
};

export default FloatingTip;
