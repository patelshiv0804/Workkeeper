import React from 'react';
import { Info, AlertTriangle, CheckCircle2 } from 'lucide-react';
import '../../../css/components/applyleave/InfoCards.css';

const InfoCards = () => {
    return (
        <div className="info-cards-container">

            {/* Policy Tip */}
            <div className="card info-card card-blue">
                <div className="info-icon icon-blue">
                    <Info size={18} />
                </div>
                <div className="info-content-group">
                    <h4 className="info-title text-blue">POLICY TIP</h4>
                    <p className="info-message text-blue-muted">
                        Privilege leave requires 7 days advance notice.
                    </p>
                </div>
            </div>

            {/* Approval */}
            <div className="card info-card card-yellow">
                <div className="info-icon icon-yellow">
                    <AlertTriangle size={18} />
                </div>
                <div className="info-content-group">
                    <h4 className="info-title text-yellow">APPROVAL</h4>
                    <p className="info-message text-yellow-muted">
                        Manager usually responds within 48 hours.
                    </p>
                </div>
            </div>

            {/* Balance */}
            <div className="card info-card card-green">
                <div className="info-icon icon-green">
                    <CheckCircle2 size={18} />
                </div>
                <div className="info-content-group">
                    <h4 className="info-title text-green">BALANCE</h4>
                    <p className="info-message text-green-muted">
                        Credits will be deducted only after approval.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default InfoCards;
