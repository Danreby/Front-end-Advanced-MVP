import React, { useState, useEffect } from 'react';
import { useToast } from '../../context/ToastContext';

const Toast = ({ id, message, type }) => {
  const { removeToast } = useToast();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => removeToast(id), 300);
    }, 2700);

    return () => clearTimeout(timer);
  }, [id, removeToast]);

  const typeConfig = {
    success: {
      bg: 'bg-green-500',
      icon: '✓',
      text: 'text-white',
    },
    error: {
      bg: 'bg-red-500',
      icon: '✕',
      text: 'text-white',
    },
    warning: {
      bg: 'bg-yellow-500',
      icon: '⚠',
      text: 'text-white',
    },
    info: {
      bg: 'bg-blue-500',
      icon: 'ℹ',
      text: 'text-white',
    },
  };

  const config = typeConfig[type] || typeConfig.info;

  return (
    <div
      className={`${config.bg} ${config.text} px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 transform transition-all duration-300 ${
        isExiting ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
      }`}
    >
      <span className="text-lg font-bold">{config.icon}</span>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

export const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50 pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast {...toast} />
        </div>
      ))}
    </div>
  );
};

export default Toast;
