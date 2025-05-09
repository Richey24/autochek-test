import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for user activity/registration stats
const data = [
  { month: 'Jan', users: 30 },
  { month: 'Feb', users: 45 },
  { month: 'Mar', users: 60 },
  { month: 'Apr', users: 50 },
  { month: 'May', users: 80 },
  { month: 'Jun', users: 65 },
  { month: 'Jul', users: 90 },
  { month: 'Aug', users: 100 },
  { month: 'Sep', users: 85 },
  { month: 'Oct', users: 110 },
  { month: 'Nov', users: 120 },
  { month: 'Dec', users: 130 },
];

const UserChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 h-64 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3FBD9C" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3FBD9C" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tick={{ fontSize: 14, fill: '#8A8A8A', fontFamily: 'Poppins' }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={v => `$${v / 1000}k`} tick={{ fontSize: 14, fill: '#8A8A8A', fontFamily: 'Poppins' }} axisLine={false} tickLine={false} />
          <Tooltip formatter={v => `$${v.toLocaleString()}`} labelStyle={{ fontFamily: 'Poppins' }} />
          <Area type="monotone" dataKey="users" stroke="#3FBD9C" fill="url(#colorSales)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserChart; 