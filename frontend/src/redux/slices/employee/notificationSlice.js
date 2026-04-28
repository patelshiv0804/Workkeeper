import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      type: 'danger',
      title: 'You have not marked OUT for today',
      badgeText: 'MISSING ATTENDANCE ALERT',
      description: 'Our records show you clocked in at 09:00 AM but haven\'t marked your exit yet. Please ensure you clock out to avoid attendance discrepancies.',
      timestamp: '2 hours ago',
      read: false,
      actions: [
        { id: 'btn-clock', type: 'primary', label: 'Clock Out Now' },
        { id: 'btn-dismiss', type: 'secondary', label: 'Dismiss' }
      ]
    },
    {
      id: 2,
      type: 'warning-active',
      title: 'Admin has updated holiday calendar',
      badgeText: 'ADMIN MESSAGE',
      description: 'The regional holiday list for Q4 has been updated. Please review the new dates added for the upcoming festive season.',
      timestamp: '4 hours ago',
      read: false,
      linkAction: { label: 'View Holiday Calendar', icon: true }
    },
    {
      id: 3,
      type: 'success',
      title: 'Your leave request has been approved',
      badgeText: 'LEAVE APPROVAL NOTIFICATION',
      description: 'Your annual leave application for next Friday (Oct 27) has been approved by your manager, Sarah Chen. Enjoy your time off!',
      timestamp: '5 hours ago',
      read: true
    }
  ],
  unreadCount: 2,
  loading: false,
  error: null,
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markAsRead: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && !item.read) {
        item.read = true;
        state.unreadCount -= 1;
      }
    },
    markAllAsRead: (state) => {
      state.items.forEach(item => { item.read = true; });
      state.unreadCount = 0;
    },
    removeNotification: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      // Recalculate unreadCount if needed
      state.unreadCount = state.items.filter(i => !i.read).length;
    },
    addNotification: (state, action) => {
      state.items.unshift({ ...action.payload, id: Date.now(), read: false });
      state.unreadCount += 1;
    }
  },
});

export const { markAsRead, markAllAsRead, removeNotification, addNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
