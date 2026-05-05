import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <svg
      viewBox="0 0 600 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-image"
    >
      <defs>
        {/* تدرجات اللون */}
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052CC" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0F0FF" />
          <stop offset="100%" stopColor="#F5FAFF" />
        </linearGradient>

        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052CC" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>
      </defs>

      {/* خلفية */}
      <rect width="600" height="700" fill="url(#bgGradient)" />

      {/* دوائر زخرفية في الخلفية */}
      <circle cx="100" cy="150" r="80" fill="#0066FF" opacity="0.05" />
      <circle cx="500" cy="100" r="120" fill="#0052CC" opacity="0.08" />
      <circle cx="50" cy="600" r="60" fill="#0066FF" opacity="0.06" />
      <circle cx="550" cy="550" r="100" fill="#0052CC" opacity="0.07" />

      {/* البطاقة الرئيسية (الكمبيوتر/الهاتف) */}
      <g className="main-card">
        {/* الظل */}
        <rect
          x="120"
          y="100"
          width="360"
          height="250"
          rx="20"
          fill="rgba(0, 52, 204, 0.15)"
          filter="blur(20px)"
        />

        {/* البطاقة */}
        <rect
          x="120"
          y="80"
          width="360"
          height="250"
          rx="20"
          fill="url(#cardGradient)"
          stroke="#0066FF"
          strokeWidth="2"
        />

        {/* شريط العنوان */}
        <rect x="120" y="80" width="360" height="50" rx="20" fill="url(#accentGradient)" />
        <circle cx="150" cy="105" r="6" fill="#FFFFFF" opacity="0.7" />
        <circle cx="170" cy="105" r="6" fill="#FFFFFF" opacity="0.5" />
        <circle cx="190" cy="105" r="6" fill="#FFFFFF" opacity="0.3" />

        {/* خطوط محتوى في البطاقة */}
        <rect x="145" y="160" width="120" height="8" rx="4" fill="#0052CC" opacity="0.3" />
        <rect x="145" y="180" width="290" height="6" rx="3" fill="#0066FF" opacity="0.2" />
        <rect x="145" y="200" width="290" height="6" rx="3" fill="#0066FF" opacity="0.2" />
        <rect x="145" y="220" width="200" height="6" rx="3" fill="#0066FF" opacity="0.15" />
      </g>

      {/* أيقونة الرسم البياني (أعمدة) */}
      <g className="chart" opacity="0.9">
        {/* الأساس */}
        <line x1="80" y1="420" x2="520" y2="420" stroke="#0066FF" strokeWidth="2" />

        {/* الأعمدة */}
        <rect
          x="100"
          y="350"
          width="35"
          height="70"
          rx="5"
          fill="url(#accentGradient)"
          opacity="0.8"
        />
        <rect
          x="160"
          y="310"
          width="35"
          height="110"
          rx="5"
          fill="url(#accentGradient)"
          opacity="0.7"
        />
        <rect
          x="220"
          y="280"
          width="35"
          height="140"
          rx="5"
          fill="#0066FF"
          opacity="0.6"
        />
        <rect
          x="280"
          y="320"
          width="35"
          height="100"
          rx="5"
          fill="url(#accentGradient)"
          opacity="0.7"
        />
        <rect
          x="340"
          y="370"
          width="35"
          height="50"
          rx="5"
          fill="url(#accentGradient)"
          opacity="0.8"
        />
        <rect
          x="400"
          y="340"
          width="35"
          height="80"
          rx="5"
          fill="#0066FF"
          opacity="0.7"
        />
        <rect
          x="460"
          y="360"
          width="35"
          height="60"
          rx="5"
          fill="url(#accentGradient)"
          opacity="0.8"
        />
      </g>

      {/* أيقونة البحث */}
      <g className="search-icon" transform="translate(480, 500)">
        {/* دائرة البحث */}
        <circle cx="0" cy="0" r="25" fill="none" stroke="#0066FF" strokeWidth="3" />
        {/* العصا */}
        <line
          x1="18"
          y1="18"
          x2="35"
          y2="35"
          stroke="#0066FF"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* أيقونة التحليلات */}
      <g className="analytics-icon" transform="translate(100, 520)">
        {/* الخط البياني */}
        <polyline
          points="0,40 15,25 30,35 45,10 60,20"
          fill="none"
          stroke="#0052CC"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* نقاط */}
        <circle cx="0" cy="40" r="4" fill="#0052CC" />
        <circle cx="15" cy="25" r="4" fill="#0066FF" />
        <circle cx="30" cy="35" r="4" fill="#0052CC" />
        <circle cx="45" cy="10" r="4" fill="#0066FF" />
        <circle cx="60" cy="20" r="4" fill="#0052CC" />
      </g>

      {/* الأيقونات الصغيرة الزخرفية */}
      {/* نجمة */}
      <g className="star-icon" transform="translate(430, 300)" opacity="0.7">
        <path
          d="M 0,-12 L 3,-3 L 12,-3 L 6,3 L 9,12 L 0,6 L -9,12 L -6,3 L -12,-3 L -3,-3 Z"
          fill="#0066FF"
        />
      </g>

      {/* قلب */}
      <g className="heart-icon" transform="translate(150, 600)" opacity="0.6">
        <path
          d="M 0,8 C -8,-2 -12,-2 -12,-6 C -12,-10 -8,-12 -4,-12 C 0,-12 0,-8 0,-8 C 0,-8 0,-12 4,-12 C 8,-12 12,-10 12,-6 C 12,-2 8,-2 0,8 Z"
          fill="#0066FF"
        />
      </g>

      {/* دائرة أخرى */}
      <g className="circle-icon" transform="translate(520, 250)">
        <circle cx="0" cy="0" r="20" fill="none" stroke="#0052CC" strokeWidth="2.5" />
        <circle cx="0" cy="0" r="12" fill="none" stroke="#0066FF" strokeWidth="1.5" />
      </g>

      {/* نقاط زخرفية */}
      <circle cx="200" cy="650" r="3" fill="#0066FF" opacity="0.4" />
      <circle cx="240" cy="660" r="2.5" fill="#0052CC" opacity="0.5" />
      <circle cx="280" cy="655" r="3" fill="#0066FF" opacity="0.3" />

      {/* رسوم متحركة */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .hero-image {
          animation: slideInLeft 0.8s ease-out;
        }
        .main-card {
          animation: float 3s ease-in-out infinite;
        }
        .chart {
          animation: float 3.5s ease-in-out infinite 0.2s backwards;
        }
        .search-icon {
          animation: float 4s ease-in-out infinite 0.4s backwards;
        }
        .analytics-icon {
          animation: float 3.8s ease-in-out infinite 0.1s backwards;
        }
        .star-icon {
          animation: pulse 2s ease-in-out infinite;
        }
        .heart-icon {
          animation: pulse 2.5s ease-in-out infinite 0.3s backwards;
        }
        .circle-icon {
          animation: pulse 2s ease-in-out infinite 0.6s backwards;
        }
      `}</style>
    </svg>
  );
};

export default HeroImage;
