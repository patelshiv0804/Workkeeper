import React from 'react';
import { Mail, Smartphone, Users, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../../../css/components/admin/notifications/NotificationsTable.css';

// Sample Data
const staticNotifications = [
  {
    id: 1,
    title: "Quarterly Performance Review",
    subtitle: "System automatic reminder for Q3",
    recipientName: "John Doe",
    recipientId: "(EMP-042)",
    initials: "JD",
    avatar: null,
    channel: "Email",
    status: "Delivered",
    date: "Oct 24, 2023",
    time: "10:30 AM"
  },
  {
    id: 2,
    title: "New Policy: Remote Work Guidelines",
    subtitle: "Update to Section 4.2 of handbook",
    recipientName: "Sarah Miller",
    recipientId: "(EMP-115)",
    initials: "SM",
    avatar: null,
    channel: "App",
    status: "Pending",
    date: "Oct 24, 2023",
    time: "11:15 AM"
  },
  {
    id: 3,
    title: "Urgent: Server Maintenance",
    subtitle: "Planned downtime tonight 12AM-2AM",
    recipientName: "Global",
    recipientId: "(All Depts)",
    initials: "GA",
    avatar: null,
    channel: "MS Teams",
    status: "Failed",
    date: "Oct 23, 2023",
    time: "09:00 PM"
  },
  {
    id: 4,
    title: "Birthday Celebration: David",
    subtitle: "Event in the pantry at 4PM",
    recipientName: "Sales Team",
    recipientId: "",
    initials: "SL",
    avatar: null,
    channel: "Email",
    status: "Delivered",
    date: "Oct 23, 2023",
    time: "02:30 PM"
  }
];

const getStatusBadgeClass = (status) => {
  switch (status.toLowerCase()) {
    case 'delivered': return 'noti-badge-delivered';
    case 'pending': return 'noti-badge-pending';
    case 'failed': return 'noti-badge-failed';
    default: return '';
  }
};

const getChannelIcon = (channel) => {
  switch (channel.toLowerCase()) {
    case 'email': return <Mail size={16} />;
    case 'app': return <Smartphone size={16} />;
    case 'ms teams': return <Users size={16} />;
    default: return <Mail size={16} />;
  }
};

const NotificationsTable = () => {
  return (
    <div className="notifications-table-card">
      <div className="notifications-table-container">
        <table className="notifications-table">
          <thead>
            <tr>
              <th>Message</th>
              <th>Recipient</th>
              <th>Channel</th>
              <th>Delivery Status</th>
              <th>Sent Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staticNotifications.map((noti) => (
              <tr key={noti.id}>
                <td>
                  <div className="noti-msg-cell">
                    <span className="noti-msg-title">{noti.title}</span>
                    <span className="noti-msg-sub" title={noti.subtitle}>{noti.subtitle}</span>
                  </div>
                </td>
                <td>
                  <div className="noti-recipient-cell">
                    <div className="noti-avatar">
                      {noti.avatar ? (
                        <img src={noti.avatar} alt={noti.initials} className="noti-avatar-img" />
                      ) : (
                        noti.initials
                      )}
                    </div>
                    <div className="noti-recipient-info">
                      <span className="noti-recipient-name">{noti.recipientName}</span>
                      {noti.recipientId && <span className="noti-recipient-id">{noti.recipientId}</span>}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="noti-channel-cell">
                    {getChannelIcon(noti.channel)}
                    <span>{noti.channel}</span>
                  </div>
                </td>
                <td>
                  <span className={`noti-badge ${getStatusBadgeClass(noti.status)}`}>
                    {noti.status}
                  </span>
                </td>
                <td>
                  <div className="noti-date-cell">
                    <div>{noti.date},</div>
                    <div>{noti.time}</div>
                  </div>
                </td>
                <td>
                  <button className="noti-action-btn">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer & Pagination */}
      <div className="noti-table-footer">
        <div className="noti-footer-text">
          Showing 1 to 4 of 42 notifications
        </div>
        <div className="noti-pagination-btns">
          <button className="noti-nav-btn">
            <ChevronLeft size={16} />
          </button>
          <button className="noti-page-btn active-page">1</button>
          <button className="noti-page-btn">2</button>
          <button className="noti-page-btn">3</button>
          <button className="noti-nav-btn">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsTable;
