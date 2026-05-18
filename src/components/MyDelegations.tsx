import React, { useState } from 'react';
import '../styles/MyDelegations.css';
import { delegations } from '../data/delegations';

interface MyDelegationsProps {
  onBack: () => void;
}

/* ── Logo components ─────────────────────────────── */

const MotimLogo: React.FC = () => (
  <div className="org-logo org-logo--motim">
    <img src="/motim-demo/logos/MotimLogo.png" alt="متم" />
  </div>
);

const ChamberLogo: React.FC = () => (
  <div className="org-logo org-logo--chamber">
    <img src="/motim-demo/logos/SaudiChambersLogo.png" alt="اتحاد الغرف التجارية السعودية" />
  </div>
);


const CardLogoSection: React.FC = () => (
  <div className="card-logo-section">
    <MotimLogo />
    <ChamberLogo />
  </div>
);

/* ── Page component ──────────────────────────────── */

const MyDelegations: React.FC<MyDelegationsProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const commercialReg = '1010123456';

  const totalCount  = delegations.length;
  const activeCount = delegations.filter(d => d.status === 'active').length;
  const expiredCount = delegations.filter(d => d.status === 'expired').length;

  const handleCopy = () => {
    navigator.clipboard.writeText(commercialReg);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="delegations-page">

      {/* ── Header ── */}
      <header className="delegations-header">
        <div className="delegations-header-content">
          <button className="delegations-back-btn" onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            العودة
          </button>

          <div className="delegations-header-title">
            <h1>صلاحياتي</h1>
            <p>جميع الصلاحيات الممنوحة للسجل التجاري</p>
          </div>

          <div className="commercial-reg-block">
            <span className="commercial-reg-label">رقم السجل التجاري</span>
            <div className="commercial-reg-row">
              <button className="copy-btn" onClick={handleCopy} title="نسخ">
                {copied
                  ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>
                }
              </button>
              <span className="commercial-reg-value">{commercialReg}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="delegations-main">
        <div className="delegations-container">

          {/* ── Summary Cards ── */}
          <div className="delegations-summary">
            <div className="summary-card expired-card">
              <span className="summary-number expired-num">{expiredCount}</span>
              <span className="summary-label">منتهية</span>
            </div>
            <div className="summary-card active-card">
              <span className="summary-number active-num">{activeCount}</span>
              <span className="summary-label">نشطة</span>
            </div>
            <div className="summary-card total-card">
              <span className="summary-number total-num">{totalCount}</span>
              <span className="summary-label">إجمالي التفويضات</span>
            </div>
          </div>

          {/* ── Delegation Cards ── */}
          <div className="delegations-list">
            {delegations.map((d) => (
              <div key={d.id} className={`delegation-card ${d.status}`}>

                {/* ── Right: logos stacked ── */}
                <CardLogoSection />

                {/* ── Vertical divider ── */}
                <div className="card-section-divider" />

                {/* ── Left: details ── */}
                <div className="card-details-section">

                  {/* Authority name + status */}
                  <div className="details-top-row">
                    <div className="details-authority">
                      <span className="granting-label">الجهة المانحة</span>
                      <span className="authority-name">{d.grantingAuthority}</span>
                    </div>
                    <div className="card-status-col">
                      <span className={`status-badge ${d.status}`}>
                        {d.status === 'active' ? 'نشط' : 'منتهي'}
                      </span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="chevron-icon">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div className="card-divider" />

                  {/* Date */}
                  <div className="card-date-row">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <span>تاريخ الإصدار: <strong>{d.issueDate}</strong></span>
                  </div>

                  {/* Permissions */}
                  <div className="card-permissions">
                    <span className="permissions-title">الصلاحيات الممنوحة:</span>
                    <div className="permissions-tags">
                      {d.permissions.map((perm, i) => (
                        <span key={i} className="permission-tag">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="card-footer">
                    <button className="details-link">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      عرض التفاصيل
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* ── Info note ── */}
          <div className="info-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="info-icon">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
            </svg>
            <span>يمكنك الاطلاع على تفاصيل كل تفويض لمعرفة تاريخ الإصدار وتاريخ الانتهاء من خلال عرض التفاصيل.</span>
          </div>

        </div>
      </main>
    </div>
  );
};

export default MyDelegations;
