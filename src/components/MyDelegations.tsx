import React, { useState } from 'react';
import '../styles/MyDelegations.css';

interface Delegation {
  id: number;
  establishment: string;
  commercialReg: string;
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
    establishment: 'شركة الأعمال المتقدمة',
    commercialReg: '1010123456',
    startDate: '2024-01-01',
    endDate: '2025-01-01',
    permissions: ['إدارة العقود', 'إصدار الشهادات', 'التوقيع الإلكتروني'],
    status: 'active',
  },
  {
    id: 2,
    establishment: 'مؤسسة النور التجارية',
    commercialReg: '4030789123',
    startDate: '2023-06-15',
    endDate: '2024-06-15',
    permissions: ['إدارة الفواتير', 'استلام المدفوعات'],
    status: 'expired',
  },
  {
    id: 3,
    establishment: 'شركة الخليج للاستشارات',
    commercialReg: '2050456789',
    startDate: '2024-03-01',
    endDate: '2025-03-01',
    permissions: ['تمثيل الشركة', 'إدارة الموظفين', 'الموافقة على العروض'],
    status: 'active',
  },
  {
    id: 4,
    establishment: 'مجموعة الرياض التجارية',
    commercialReg: '1030654321',
    startDate: '2024-05-01',
    endDate: '2025-05-01',
    permissions: ['إبرام العقود', 'التفاوض مع الموردين'],
    status: 'active',
  },
  {
    id: 5,
    establishment: 'شركة البناء والتطوير',
    commercialReg: '3010987654',
    startDate: '2023-01-10',
    endDate: '2024-01-10',
    permissions: ['استلام المشاريع', 'الإشراف الميداني', 'التوقيع على المحاضر'],
    status: 'expired',
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
                      {d.establishment.charAt(0)}
                    </div>
                    <div className="issuer-info">
                      <span className="issuer-label">المنشأة</span>
                      <span className="issuer-name">{d.establishment}</span>
                      <span className="issuer-reg">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 12h6M9 16h6M7 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2M9 4a2 2 0 002 2h2a2 2 0 002-2M9 4a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        سجل تجاري: {d.commercialReg}
                      </span>
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
