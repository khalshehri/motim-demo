import React, { useState } from 'react';
import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import 'antd/dist/reset.css';
import '../styles/Authorization.css';
import '../styles/RequestDelegation.css';

interface RequestDelegationProps {
  onBack: () => void;
}

interface ReqFormData {
  crNumber: string;
  nationalId: string;
  birthDate: Dayjs | null;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  permissions: {
    issueResidence: boolean;
    renewResidence: boolean;
    transferSponsorship: boolean;
    cancelResidence: boolean;
  };
}

const FAILED_CR = '2050123456';

const RequestDelegation: React.FC<RequestDelegationProps> = ({ onBack }) => {
  const [formData, setFormData] = useState<ReqFormData>({
    crNumber: '',
    nationalId: '',
    birthDate: null,
    startDate: null,
    endDate: null,
    permissions: {
      issueResidence: false,
      renewResidence: true,
      transferSponsorship: false,
      cancelResidence: false,
    },
  });

  const [crStatus, setCrStatus] = useState<'idle' | 'checking' | 'failed' | 'success'>('idle');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'crNumber') setCrStatus('idle');
  };

  const handlePermissionChange = (key: keyof ReqFormData['permissions']) => {
    setFormData(prev => ({
      ...prev,
      permissions: { ...prev.permissions, [key]: !prev.permissions[key] },
    }));
  };

  const handleDateChange = (field: string, date: Dayjs | null) => {
    setFormData(prev => ({ ...prev, [field]: date }));
  };

  const handleVerifyCR = async () => {
    if (!formData.crNumber.trim()) return;
    setCrStatus('checking');
    await new Promise(r => setTimeout(r, 1200));
    setCrStatus(formData.crNumber === FAILED_CR ? 'failed' : 'success');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (crStatus !== 'success') return;
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsLoading(false);
    setShowSuccess(true);
  };

  const headerComponent = (
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
          <button onClick={onBack} className="back-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5m7-7l-7 7 7 7" strokeLinecap="round" />
            </svg>
            الخدمات
          </button>
        </div>
      </div>
    </header>
  );

  if (showSuccess) {
    return (
      <div className="authorization-page">
        {headerComponent}
        <main className="auth-main">
          <div className="success-container">
            <div className="success-card">
              <div className="success-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="success-title">تم إرسال طلب التفويض</h2>
              <p className="success-subtitle">
                سيتم مراجعة الطلب والتواصل معك عبر منصة <b>متم</b> لتأكيد الطلب
              </p>
              <div className="success-buttons">
                <button onClick={onBack} className="success-btn secondary">الصفحة الرئيسية</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="authorization-page">
      {headerComponent}

      <main className="auth-main">
        <div className="auth-container">
          <div className="form-card">
            <h2 className="form-title">طلب تفويض</h2>

            <form onSubmit={handleSubmit} className="auth-form">

              {/* CR Number field with verify */}
              <div className="form-group rd-cr-group">
                <label className="form-label">رقم السجل التجاري للجهة المفوِّضة</label>
                <div className="rd-cr-row">
                  <input
                    type="text"
                    name="crNumber"
                    value={formData.crNumber}
                    onChange={handleInputChange}
                    placeholder="أدخل رقم السجل التجاري"
                    className={`form-input rd-cr-input ${crStatus === 'failed' ? 'input-error' : crStatus === 'success' ? 'input-success' : ''}`}
                    maxLength={10}
                    required
                  />
                  <button
                    type="button"
                    className="rd-verify-btn"
                    onClick={handleVerifyCR}
                    disabled={crStatus === 'checking' || !formData.crNumber.trim()}
                  >
                    {crStatus === 'checking' ? 'جاري التحقق...' : 'تحقق'}
                  </button>
                </div>

                {/* Failed CR banner */}
                {crStatus === 'failed' && (
                  <div className="rd-cr-status failed">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M15 9l-6 6M9 9l6 6" strokeLinecap="round" />
                    </svg>
                    <span>
                      رقم السجل التجاري <strong>{formData.crNumber}</strong> غير مؤهل للتفويض — السجل موقوف أو غير نشط
                    </span>
                  </div>
                )}

                {/* Success CR banner */}
                {crStatus === 'success' && (
                  <div className="rd-cr-status success">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>تم التحقق من السجل التجاري بنجاح</span>
                  </div>
                )}
              </div>

              {/* National ID + Birth date */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">رقم الهوية الوطنية للمفوض له</label>
                  <input
                    type="text"
                    name="nationalId"
                    value={formData.nationalId}
                    onChange={handleInputChange}
                    placeholder="1012345678"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">تاريخ الميلاد للمفوض له</label>
                  <DatePicker
                    value={formData.birthDate}
                    onChange={(d) => handleDateChange('birthDate', d)}
                    placeholder="اختر التاريخ"
                    format="YYYY/MM/DD"
                    className="ant-date-picker-custom"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              {/* Start / End dates */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">تاريخ بداية التفويض</label>
                  <DatePicker
                    value={formData.startDate}
                    onChange={(d) => handleDateChange('startDate', d)}
                    placeholder="اختر التاريخ"
                    format="YYYY/MM/DD"
                    className="ant-date-picker-custom"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">تاريخ نهاية التفويض</label>
                  <DatePicker
                    value={formData.endDate}
                    onChange={(d) => handleDateChange('endDate', d)}
                    placeholder="اختر التاريخ"
                    format="YYYY/MM/DD"
                    className="ant-date-picker-custom"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              {/* Permissions */}
              <div className="permissions-section">
                <label className="permissions-title">الصلاحيات المطلوبة</label>
                <div className="permissions-group">
                  {[
                    { key: 'issueResidence',    label: 'اصدار إقامة' },
                    { key: 'renewResidence',    label: 'تجديد إقامة' },
                    { key: 'transferSponsorship', label: 'نقل الكفالة' },
                    { key: 'cancelResidence',   label: 'إلغاء إقامة' },
                  ].map(({ key, label }) => (
                    <label key={key} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.permissions[key as keyof ReqFormData['permissions']]}
                        onChange={() => handlePermissionChange(key as keyof ReqFormData['permissions'])}
                        className="checkbox-input"
                      />
                      <span className="checkbox-text">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isLoading || crStatus !== 'success'}
              >
                {isLoading ? 'جاري الإرسال...' : 'إرسال الطلب'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestDelegation;
