import React, { useState } from 'react';
import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import 'antd/dist/reset.css';
import '../styles/Authorization.css';

interface AuthorizationProps {
  onBack: () => void;
}

interface AuthFormData {
  nationalId: string;
  birthDate: Dayjs | null;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  permissions: {
    issueResidence: boolean;
    defineResidence: boolean;
    transferSponsorship: boolean;
    cancelResidence: boolean;
  };
}

const Authorization: React.FC<AuthorizationProps> = ({ onBack }) => {
  const [formData, setFormData] = useState<AuthFormData>({
    nationalId: '',
    birthDate: null,
    startDate: null,
    endDate: null,
    permissions: {
      issueResidence: false,
      defineResidence: true,
      transferSponsorship: false,
      cancelResidence: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePermissionChange = (permissionKey: keyof AuthFormData['permissions']) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permissionKey]: !prev.permissions[permissionKey],
      },
    }));
  };

  const handleDateChange = (fieldName: string, date: Dayjs | null) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: date,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('بيانات التفويض:', formData);
      setShowSuccess(true);
    } catch (error) {
      console.error('خطأ:', error);
    } finally {
      setIsLoading(false);
    }
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
          <nav className="header-nav">
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
          <button onClick={onBack} className="back-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5m7-7l-7 7 7 7" strokeWidth="2" strokeLinecap="round" />
            </svg>
            الخدمات
          </button>
        </div>
      </div>
    </header>
  );

  if (showMessage) {
    return (
      <div className="authorization-page">
        {headerComponent}

        <main className="auth-main" style={{ padding: '1.5rem' }}>
          <div className="iphone-message-container">
            <div className="message-header">
              <button onClick={() => setShowMessage(false)} className="message-back">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5m7-7l-7 7 7 7" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <h3 className="message-title">منصة مقيم</h3>
              <div style={{ width: '20px' }}></div>
            </div>

            <div className="message-thread">
              <div className="message-item received">
                <div className="message-bubble">
                  <p>مرحبا،<br/>
                  لاستكمال إجراءات التفويض الخاص بكم في منصة متم، يرجى الدخول على الرابط التالي:<br/>
                  https://khalshehri.github.io/motim-demo?page=nafathv2<br/>
                  تنتهي صلاحية الرابط خلال 30 دقيقة.<br/>
                  منصة متم</p>
                  <span className="message-time">14:32</span>
                </div>
              </div>

              <div className="message-item received">
                <div className="message-bubble">
                  <p>تم استقبال طلب التفويض الخاص بك بنجاح ✓</p>
                  <span className="message-time">14:33</span>
                </div>
              </div>

              <div className="message-item received">
                <div className="message-bubble">
                  <p>رقم المرجع: MOQ-2024-001234</p>
                  <span className="message-time">14:33</span>
                </div>
              </div>

              <div className="message-item received">
                <div className="message-bubble">
                  <p>سيتم التحقق من الطلب خلال 24 ساعة عمل</p>
                  <span className="message-time">14:34</span>
                </div>
              </div>

              <div className="message-item received">
                <div className="message-bubble">
                  <p>شكراً لاستخدامك منصة مقيم 🙏</p>
                  <span className="message-time">14:34</span>
                </div>
              </div>
            </div>

            <div className="message-footer">
              <button onClick={onBack} className="message-done-btn">
                تم
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="authorization-page">
        {headerComponent}

        <main className="auth-main">
          <div className="success-container">
            <div className="success-card">
              <div className="success-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h2 className="success-title">شكراً لاستخدامكم منصة الاعمال</h2>
              <p className="success-subtitle">
                ستصل رسالة لك من منصة <b>متم</b> لتأكيد إضافة التفويض وإتمام عملية الدفع
              </p>
              <div className="success-buttons">
                <button
                  onClick={() => {
                    const newWindow = window.open('', 'messages', 'width=450,height=900');
                    if (newWindow) {
                      newWindow.location.href = window.location.href + '?page=message';
                    }
                  }}
                  className="success-btn"
                >
                  عرض الرسالة
                </button>
                <button onClick={onBack} className="success-btn secondary">
                  الصفحة الرئيسية
                </button>
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

      {/* المحتوى الرئيسي */}
      <main className="auth-main">
        <div className="auth-container">
          <div className="form-card">
            <h2 className="form-title">تفاصيل التفويض</h2>

            <form onSubmit={handleSubmit} className="auth-form">
              {/* الصف الأول - البيانات الأساسية */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nationalId" className="form-label">
                    رقم الهوية الوطنية للمفوض له
                  </label>
                  <input
                    type="text"
                    id="nationalId"
                    name="nationalId"
                    value={formData.nationalId}
                    onChange={handleInputChange}
                    placeholder="1012345678"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="birthDate" className="form-label">
                    تاريخ الميلاد للمفوض له
                  </label>
                  <DatePicker
                    value={formData.birthDate}
                    onChange={(date: Dayjs | null) => handleDateChange('birthDate', date)}
                    placeholder="اختر التاريخ"
                    format="YYYY/MM/DD"
                    className="ant-date-picker-custom"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              {/* الصف الثاني - التواريخ */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="startDate" className="form-label">
                    تاريخ بداية التفويض
                  </label>
                  <DatePicker
                    value={formData.startDate}
                    onChange={(date: Dayjs | null) => handleDateChange('startDate', date)}
                    placeholder="اختر التاريخ"
                    format="YYYY/MM/DD"
                    className="ant-date-picker-custom"
                    style={{ width: '100%' }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="endDate" className="form-label">
                    تاريخ نهاية التفويض
                  </label>
                  <DatePicker
                    value={formData.endDate}
                    onChange={(date: Dayjs | null) => handleDateChange('endDate', date)}
                    placeholder="اختر التاريخ"
                    format="YYYY/MM/DD"
                    className="ant-date-picker-custom"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              {/* الصلاحيات */}
              <div className="permissions-section">
                <label className="permissions-title">الصلاحيات (اختر ما يناسب)</label>

                <div className="permissions-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.permissions.issueResidence}
                      onChange={() => handlePermissionChange('issueResidence')}
                      className="checkbox-input"
                    />
                    <span className="checkbox-text">اصدار إقامة</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.permissions.defineResidence}
                      onChange={() => handlePermissionChange('defineResidence')}
                      className="checkbox-input"
                    />
                    <span className="checkbox-text">تجديد إقامة</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.permissions.transferSponsorship}
                      onChange={() => handlePermissionChange('transferSponsorship')}
                      className="checkbox-input"
                    />
                    <span className="checkbox-text">نقل الكفالة</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.permissions.cancelResidence}
                      onChange={() => handlePermissionChange('cancelResidence')}
                      className="checkbox-input"
                    />
                    <span className="checkbox-text">إلغاء إقامة</span>
                  </label>
                </div>
              </div>

              {/* الزر */}
              <button
                type="submit"
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? 'جاري الإصدار...' : 'إصدار التفويض'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Authorization;
