import React from 'react';

export const EmptyState = ({ icon = '🌸', title, description, action }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-black/60 text-center max-w-md mb-6">{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
};

export const ErrorState = ({ title = 'Erro ao carregar', description = 'Tente novamente mais tarde', action }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-red-50 rounded-lg border border-red-200">
      <div className="text-5xl mb-4">⚠️</div>
      <h3 className="text-xl font-semibold text-red-800 mb-2">{title}</h3>
      <p className="text-red-700 text-center max-w-md mb-6">{description}</p>
      {action && <div>{action}</div>}
    </div>
  );
};

export default EmptyState;
