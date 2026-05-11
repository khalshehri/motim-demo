import React, { useState } from 'react';
import '../styles/Services.css';

interface Service {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface ServicesProps {
  onLogout: () => void;
  onServiceClick?: (serviceId: number) => void;
  loginMethod?: 'default' | 'nafath';
}

const ServiceIcon = ({ type }: { type: number }) => {
  const icons = {
    1: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12h6m-6 4h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    2: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 10l-2 1m0 0l-2-1m2 1v2.5M9 9h6a2 2 0 012 2v7a2 2 0 01-2 2H9a2 2 0 01-2-2v-7a2 2 0 012-2z" />
      </svg>
    ),
    3: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.34-8 4v6h16v-6c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    4: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4M7 20H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    5: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v8m-4-4h8M3 6h18V4a2 2 0 00-2-2H5a2 2 0 00-2 2v2zm0 0v10a2 2 0 002 2h14a2 2 0 002-2V6" />
      </svg>
    ),
    6: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 3a3 3 0 11-6 0 3 3 0 016 0zM15 7H9a6 6 0 00-6 6v7h18v-7a6 6 0 00-6-6z" />
      </svg>
    ),
  };
  return icons[type as keyof typeof icons] || icons[1];
};

const Services: React.FC<ServicesProps> = ({ onLogout, onServiceClick, loginMethod = 'default' }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const allServices: Service[] = [
    {
      id: 7,
      name: 'تفويضاتي',
      icon: <ServiceIcon type={2} />,
      description: 'عرض وإدارة جميع التفويضات الممنوحة لك',
    },
    {
      id: 1,
      name: 'إدارة العقود',
      icon: <ServiceIcon type={1} />,
      description: 'إدارة ومتابعة جميع العقود والاتفاقيات بكل سهولة',
    },
    {
      id: 2,
      name: 'إضافة تفويض',
      icon: <ServiceIcon type={2} />,
      description: 'منح وإدارة التفويضات والصلاحيات للموظفين',
    },
    {
      id: 3,
      name: 'إدارة الأفراد',
      icon: <ServiceIcon type={3} />,
      description: 'تحديث ومراقبة بيانات الموظفين والعاملين',
    },
    {
      id: 4,
      name: 'الشهادات',
      icon: <ServiceIcon type={4} />,
      description: 'إصدار الشهادات الرسمية والوثائق المطلوبة',
    },
    {
      id: 5,
      name: 'الحسابات',
      icon: <ServiceIcon type={5} />,
      description: 'إدارة الفواتير والمدفوعات والتسويات المالية',
    },
    {
      id: 6,
      name: 'الموارد البشرية',
      icon: <ServiceIcon type={6} />,
      description: 'خدمات شاملة لإدارة الموارد البشرية والتطوير',
    },
  ];

  const services = loginMethod === 'nafath'
    ? allServices.filter(s => s.id === 7)
    : allServices.filter(s => s.id !== 7);

  return (
    <div className="services-page">
      {/* الرأس */}
      <header className="services-header">
        <div className="header-content">
          <div className="header-left">
            <div className="header-logo">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M10 5h30a5 5 0 015 5v30a5 5 0 01-5 5H10a5 5 0 01-5-5V10a5 5 0 015-5z" fill="#0052CC" opacity="0.1" stroke="#0052CC" strokeWidth="1.5"/>
                <text x="25" y="32" textAnchor="middle" fill="#0052CC" fontSize="18" fontWeight="700" fontFamily="Arial">EB</text>
              </svg>
            </div>
            <div className="header-title">
              <h1>Elite</h1>
              <p>منصة الأعمال الحديثة</p>
            </div>
          </div>

          <div className="header-right">
            <nav className="header-nav">
              <button
                onClick={() => {
                  const newWindow = window.open('https://khalshehri.github.io/motim-demo?page=message', 'messages', 'width=450,height=900');
                  if (newWindow) {
                    newWindow.focus();
                  }
                }}
                className="nav-link"
                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
              >
                <span>الرسائل</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </button>
              <a href="#help" className="nav-link">
                <span>المساعدة</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4m0-4h.01" />
                </svg>
              </a>
              <a href="#profile" className="nav-link">
                <span>الملف الشخصي</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              </a>
            </nav>
            <button onClick={onLogout} className="logout-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 0h4a2 2 0 012 2v14a2 2 0 01-2 2h-4m0-11l7-7m0 0l-7 7" />
              </svg>
              خروج
            </button>
          </div>
        </div>
      </header>

      {/* محتوى الصفحة */}
      <main className="services-main">
        <div className="services-container">
          {/* العنوان الرئيسي */}
          <div className="services-header-section">
            <div className="header-top">
              <span className="badge">الخدمات المتاحة</span>
            </div>
            <h2 className="services-title">اختر ما يناسبك</h2>
            <p className="services-subtitle">مجموعة شاملة من الخدمات المتقدمة لتسهيل إدارة أعمالك</p>
          </div>

          {/* شبكة الخدمات */}
          <div className={`services-grid ${loginMethod === 'nafath' ? 'single-card-grid' : ''}`}>
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card ${hoveredId === service.id ? 'active' : ''}`}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onServiceClick?.(service.id)}
              >
                <div className="card-background"></div>

                <div className="card-icon-wrapper">
                  <div className="card-icon">
                    {service.icon}
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="card-name">{service.name}</h3>
                  <p className="card-description">{service.description}</p>
                </div>

                <div className="card-footer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* تذييل */}
      <footer className="services-footer">
        <div className="footer-content">
          <div className="footer-section">
            <p className="footer-text">منصة Elite Business</p>
          </div>
          <div className="footer-section footer-links">
            <a href="#privacy">الخصوصية</a>
            <a href="#terms">الشروط</a>
            <a href="#contact">تواصل</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
