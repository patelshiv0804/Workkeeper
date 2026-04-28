import React from 'react';
import { useSelector } from 'react-redux';
import { Calendar, Sparkles, Smile, User, History } from 'lucide-react';
import LeaveBalanceCard from './LeaveBalanceCard';
import '../../../css/components/leavebalance/LeaveBalanceGrid.css';

const LeaveBalanceGrid = () => {
    const { balances } = useSelector((state) => state.leave);

    const getIcon = (type) => {
        switch (type) {
            case 'Annual Leave':
            case 'Privilege Leave': return <Calendar size={20} className="lbc-icon green-icon" />;
            case 'Optional Leave': return <Sparkles size={20} className="lbc-icon green-icon" />;
            case 'Sick Leave': return <Smile size={20} className="lbc-icon green-icon" />;
            case 'Paternity Leave': return <Smile size={20} className="lbc-icon green-icon" />;
            case 'Maternity Leave': return <User size={20} className="lbc-icon green-icon" />;
            case 'Casual Leave': return <History size={20} className="lbc-icon orange-icon" />;
            default: return <History size={20} className="lbc-icon orange-icon" />;
        }
    };

    const cardsData = balances.map((balance, index) => ({
        id: index + 1,
        title: balance.type,
        tag: balance.type === 'Casual Leave' ? 'ACCRUED' : 'STANDARD',
        total: balance.total.toString().padStart(2, '0'),
        used: balance.used.toString().padStart(2, '0'),
        remaining: balance.available.toString().padStart(2, '0'),
        utilization: (balance.used / balance.total) * 100,
        progressColor: balance.used / balance.total > 0.7 ? 'orange' : 'green',
        icon: getIcon(balance.type)
    }));

    return (
        <div className="leave-balance-grid">
            {cardsData.map((card) => (
                <LeaveBalanceCard key={card.id} data={card} />
            ))}
        </div>
    );
};

export default LeaveBalanceGrid;
