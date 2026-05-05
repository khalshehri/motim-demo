import React, { useState } from 'react';
import '../styles/ModernLogin.css';

interface FormData {
  username: string;
  password: string;
}

const ModernLogin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('تم تسجيل الدخول:', formData);
      alert('تم تسجيل الدخول بنجاح!');
    } catch (error) {
      console.error('خطأ:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modern-login-container">
      {/* القسم الأيسر - نموذج التسجيل */}
      <div className="modern-login-form">
        <div className="form-content">
          {/* الشعار والعنوان */}
          <div className="logo-section">
            <div className="logo-box">
              <svg
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="company-logo"
              >
                <circle cx="30" cy="30" r="28" fill="#0070B9" stroke="#0070B9" strokeWidth="2" />
                <text
                  x="30"
                  y="38"
                  textAnchor="middle"
                  fill="white"
                  fontSize="24"
                  fontWeight="bold"
                  fontFamily="Droid Kufi"
                >
                  EB
                </text>
              </svg>
            </div>
            <h1 className="company-title">بوابة الأعمال</h1>
          </div>

          {/* نموذج التسجيل */}
          <form onSubmit={handleSubmit} className="modern-form">
            <h2 className="form-title">تسجيل الدخول</h2>

            {/* حقل اسم المستخدم */}
            <div className="form-group">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder=" "
                required
                className="modern-input"
              />
              <label htmlFor="username" className="modern-label">
                اسم المستخدم
              </label>
            </div>

            {/* حقل كلمة المرور */}
            <div className="form-group password-group">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder=" "
                required
                className="modern-input"
              />
              <label htmlFor="password" className="modern-label">
                كلمة المرور
              </label>
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>

            {/* زر الدخول */}
            <button
              type="submit"
              className="btn-submit"
              disabled={isLoading}
            >
              {isLoading ? 'جاري الدخول...' : 'دخول'}
            </button>

            {/* الروابط السفلية */}
            <div className="form-links">
              <a href="#register" className="link-register">
                التسجيل
              </a>
              <a href="#forgot" className="link-forgot">
                نسيت كلمة المرور؟
              </a>
            </div>

            {/* القائمة الإضافية */}
            <ul className="additional-links">
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#forgot-username">نسيت اسم المستخدم</a></li>
              <li><a href="#update-info">تحديث بيانات المستخدم</a></li>
              <li><a href="#update-email">تحديث البريد الإلكتروني</a></li>
            </ul>

            {/* تطبيقات الهاتف */}
            <div className="app-links">
              <a href="#" className="app-badge google-play" title="Google Play">
                <svg viewBox="0 0 135 40" fill="none">
                  <text x="15" y="25" fontSize="12" fill="#000">Google Play</text>
                </svg>
              </a>
              <a href="#" className="app-badge app-store" title="App Store">
                <svg viewBox="0 0 135 40" fill="none">
                  <text x="20" y="25" fontSize="12" fill="#000">App Store</text>
                </svg>
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* القسم الأيمن - الصورة الخلفية */}
      <div className="modern-login-image">
        <div className="image-content">
          {/* شعار الجوازات */}
          <div className="logo-section-right">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="passport-logo"
            >
              <circle cx="40" cy="40" r="38" stroke="white" strokeWidth="2" opacity="0.3" />
              <path
                d="M40 15 L50 35 L70 35 L55 48 L60 68 L40 55 L20 68 L25 48 L10 35 L30 35 Z"
                fill="white"
                opacity="0.2"
              />
            </svg>
            <p className="logo-text">بوابة الأعمال</p>
          </div>

          {/* عناصر زخرفية */}
          <div className="decorative-circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
          </div>

          {/* شعار السلطة */}
          <div className="authority-logo">
            <p className="authority-text">البوابة الرسمية</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernLogin;
