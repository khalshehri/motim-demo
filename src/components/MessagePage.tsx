import React from 'react';
import '../styles/MessagePage.css';

interface MessagePageProps {
  onBack: () => void;
}

const MessagePage: React.FC<MessagePageProps> = ({ onBack }) => {
  const handleClose = () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('page') === 'message') {
      // If opened in new tab, close the window
      window.close();
    } else {
      // Otherwise use normal back navigation
      onBack();
    }
  };

  return (
    <div className="message-page">
      <main className="message-page-main" style={{ position: 'relative' }}>
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: 'white',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '8px',
            color: '#0052CC',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '14px',
            fontFamily: 'Almarai, sans-serif',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5m7-7l-7 7 7 7" strokeWidth="2" strokeLinecap="round" />
          </svg>
          الخدمات
        </button>
        <div className="sms-container">
          {/* iOS Status Bar */}
          <div className="ios-status-bar">
            <div className="status-left">
              <span className="signal">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <path d="M2 8v1m2-3v3m2-5v5m2-4v4" />
                </svg>
              </span>
              <span className="carrier">Vodafone</span>
            </div>
            <div className="status-time">9:41</div>
            <div className="status-right">
              <span className="wifi">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="currentColor">
                  <path d="M5 0c2.5 0 4.8 1 6 2.5m-2 2c-1 1-2.5 1.5-4 1.5S3 5.5 2 4.5m-1.5-1.5c-1-1.2-1.5-2-1.5-2" />
                </svg>
              </span>
              <span className="battery">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <rect x="0" y="0.5" width="12" height="7" rx="1" />
                  <rect x="12.5" y="2.5" width="1" height="3" />
                  <rect x="1" y="1.5" width="9" height="5" fill="currentColor" />
                </svg>
              </span>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="ios-nav-bar">
            <button onClick={onBack} className="nav-back-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-title">
              <h3>منصة متم</h3>
              <p>نشط الآن</p>
            </div>
            <div className="nav-icons">
              <button className="nav-icon-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </button>
              <button className="nav-icon-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>
          </div>

          <div className="sms-thread">
            <div className="message-date">اليوم</div>

            <div className="sms-message received">
              <div className="sms-bubble">
                <p>
                مرحبا،
                لاستكمال إجراءات التفويض الخاص بكم في منصة متم، يرجى الدخول على الرابط التالي:    
                  <a
                    href="https://khalshehri.github.io/motim-demo?page=nafathv2&token=ZtgbLLwEN1ViNqeu"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#007AFF',
                      textDecoration: 'underline',
                      fontWeight: '500'
                    }}
                  >
                    https://khalshehri.github.io/motim-demo?page=nafathv2,token=ZtgbLLwEN1ViNqeu
                  </a>
                  {' '}تنتهي صلاحية الرابط خلال 30 دقيقة
                </p>
                <p style={{ marginTop: '8px', fontSize: '14px', fontWeight: '600' }}>
                  منصة متم
                </p>
                <span className="sms-time">14:35</span>
              </div>
            </div>
          </div>

          <div className="sms-input-area">
            <input type="text" placeholder="أكتب رسالة..." className="sms-input" />
            <button className="sms-send">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 16l-4-4m0 0L4 8m8 4l4-4m0 0l4 4" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MessagePage;
