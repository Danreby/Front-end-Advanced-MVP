import React from 'react';

export const Card = ({ children, className = '', hover = true }) => {
  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
  return (
    <div className={`bg-white/60 p-4 rounded-lg shadow-md border border-white/5 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export const CardImage = ({ src, alt, height = 'h-40' }) => {
  return src ? (
    <img src={src} alt={alt} className={`${height} w-full object-cover rounded mb-4`} />
  ) : (
    <div className={`${height} bg-gradient-to-br from-green-200/5 to-pink-200/5 rounded mb-4 flex items-center justify-center text-gray-500`}>
      Imagem
    </div>
  );
};

export const CardHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-1 text-black text-lg">{title}</h3>
      {subtitle && <p className="text-sm text-black/60">{subtitle}</p>}
    </div>
  );
};

export const CardBody = ({ children }) => {
  return <div className="text-black/80 text-sm leading-relaxed">{children}</div>;
};

export const CardFooter = ({ children }) => {
  return <div className="mt-4 flex items-center justify-between">{children}</div>;
};

export default Card;
