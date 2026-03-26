import React from 'react';
import { Calendar, Sparkles, Smile, User, History } from 'lucide-react';
import LeaveBalanceCard from './LeaveBalanceCard';
import '../../../css/components/leavebalance/LeaveBalanceGrid.css';

const LeaveBalanceGrid = () => {
    const cardsData = [
        {
            id: 1,
            title: 'Privilege Leave',
            tag: 'STANDARD',
            total: '24',
            used: '04',
            remaining: '20',
            utilization: 16.7,
            progressColor: 'green',
            icon: <Calendar size={20} className="lbc-icon green-icon" />
        },
        {
            id: 2,
            title: 'Optional Leave',
            tag: 'STANDARD',
            total: '02',
            used: '01',
            remaining: '01',
            utilization: 50,
            progressColor: 'green',
            icon: <Sparkles size={20} className="lbc-icon green-icon" />
        },
        {
            id: 3,
            title: 'Paternity Leave',
            tag: 'STANDARD',
            total: '15',
            used: '00',
            remaining: '15',
            utilization: 0,
            progressColor: 'green',
            icon: <Smile size={20} className="lbc-icon green-icon" />
        },
        {
            id: 4,
            title: 'Maternity Leave',
            tag: 'STANDARD',
            total: '90',
            used: '00',
            remaining: '90',
            utilization: 0,
            progressColor: 'green',
            icon: <User size={20} className="lbc-icon green-icon" />
        },
        {
            id: 5,
            title: 'Compensation Leave',
            tag: 'ACCRUED',
            total: '05',
            used: '02',
            remaining: '03',
            utilization: 40,
            progressColor: 'orange',
            icon: <History size={20} className="lbc-icon orange-icon" />
        }
    ];

    return (
        <div className="leave-balance-grid">
            {cardsData.map((card) => (
                <LeaveBalanceCard key={card.id} data={card} />
            ))}
        </div>
    );
};

export default LeaveBalanceGrid;
