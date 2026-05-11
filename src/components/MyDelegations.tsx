import React, { useState } from 'react';
import '../styles/MyDelegations.css';

interface Delegation {
  id: number;
  issuedBy: string;
  startDate: string;
  endDate: string;
  permissions: string[];
  status: 'active' | 'expired';
}

interface MyDelegationsProps {
  onBack: () => void;
}

const delegations: Delegation[] = [
  {
    id: 1,
    issuedBy: 'شركة الأعمال المتقدمة',
    startDate: '2024-01-01',
    endDate: '2025-01-01',
    permissions: ['إدارة العقود', 'إصدار الشهادات', 'التوقيع الإلكتروني'],
    status: 'active',
  },
  {
    id: 2,
    issuedBy: 'مؤسسة النور التجارية',
    startDate: '2023-06-15',
    endDate: '2024-06-15',
    permissions: ['إدارة الفواتير', 'استلام المدفوعات'],
    status: 'expired',
  },
  {
    id: 3,
    issuedBy: 'شركة الخليج للاستشارات',
    startDate: '2024-03-01',
    endDate: '2025-03-01',
    permissions: ['تمثيل الشركة', 'إدارة الموظفين', 'الموافقة على العروض'],
    status: 'active',
  },
];

const MyDelegations: React.FC<MyDelegationsProps> = ({ onBack }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="delegations-page">
      <header className="delegations-header">
        <div className="delegations-header-content">
          <button className="delegations-back-btn" onClick={onBack}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            العودة
          </button>
          <div className="delegations-header-title">
            <h1>تفويضاتي</h1>
            <p>جميع التفويضات الممنوحة لك</p>
          </div>
        </div>
      </header>

      <main className="delegations-main">
        <div className="delegations-container">
          <div className="delegations-summary">
            <div className="summary-card">
              <span className="summary-number">{delegations.length}</span>
              <span className="summary-label">إجمالي التفويضات</span>
            </div>
            <div className="summary-card active">
              <span className="summary-number">{delegations.filter(d => d.status === 'active').length}</span>
              <span className="summary-label">نشطة</span>
            </div>
            <div className="summary-card expired">
              <span className="summary-number">{delegations.filter(d => d.status === 'expired').length}</span>
              <span className="summary-label">منتهية</span>
            </div>
          </div>

          <div className="delegations-list">
            {delegations.map((d) => (
              <div
                key={d.id}
                className={`delegation-card ${d.status} ${expandedId === d.id ? 'expanded' : ''}`}
                onClick={() => setExpandedId(expandedId === d.id ? null : d.id)}
              >
                <div className="delegation-card-header">
                  <div className="delegation-issuer">
                    <div className="issuer-avatar">
                      {d.issuedBy.charAt(0)}
                    </div>
                    <div className="issuer-info">
                      <span className="issuer-label">صادر من</span>
                      <span className="issuer-name">{d.issuedBy}</span>
                    </div>
                  </div>
                  <div className="delegation-status-badge">
                    <span className={`status-badge ${d.status}`}>
                      {d.status === 'active' ? 'نشط' : 'منتهي'}
                    </span>
                    <svg
                      width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className={`chevron ${expandedId === d.id ? 'open' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="delegation-dates">
                  <div className="date-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <span>البداية: <strong>{d.startDate}</strong></span>
                  </div>
                  <div className="date-separator">←</div>
                  <div className="date-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <span>النهاية: <strong>{d.endDate}</strong></span>
                  </div>
                </div>

                {expandedId === d.id && (
                  <div className="delegation-permissions">
                    <p className="permissions-label">الصلاحيات الممنوحة:</p>
                    <div className="permissions-list">
                      {d.permissions.map((perm, i) => (
                        <span key={i} className="permission-tag">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyDelegations;
