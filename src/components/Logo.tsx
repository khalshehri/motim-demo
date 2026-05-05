import React from 'react';

const Logo: React.FC = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo"
    >
      {/* خلفية دائرية */}
      <circle cx="30" cy="30" r="28" fill="url(#gradient)" stroke="#0066FF" strokeWidth="2" />

      {/* عنصر هندسي يمثل الأعمال */}
      <rect x="18" y="20" width="8" height="20" fill="#FFFFFF" rx="1" />
      <rect x="26" y="16" width="8" height="24" fill="#FFFFFF" rx="1" />
      <rect x="34" y="22" width="8" height="18" fill="#FFFFFF" rx="1" />

      {/* خط زخرفي */}
      <line x1="16" y1="43" x2="44" y2="43" stroke="#0066FF" strokeWidth="1.5" strokeLinecap="round" />

      {/* تدرج اللون */}
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="60" y2="60">
          <stop offset="0%" stopColor="#0052CC" />
          <stop offset="100%" stopColor="#003DA5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
