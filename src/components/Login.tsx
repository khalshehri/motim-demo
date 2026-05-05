import React, { useState } from 'react';
import '../styles/Login.css';
import Logo from './Logo';
import HeroImage from './HeroImage';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};

    if (!formData.email) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'صيغة البريد الإلكتروني غير صحيحة';
    }

    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 6) {
      newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      // محاكاة طلب API
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('تم تسجيل الدخول:', formData);
      // الانتقال لصفحة الخدمات
      onLogin();
    } catch (error) {
      console.error('خطأ:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* القسم الأيسر - الصورة */}
      <div className="login-image-section">
        <div className="image-overlay">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </div>
          <HeroImage />
          <h1 className="image-title">أهلاً بك</h1>
          <p className="image-subtitle">منصة الأعمال الاحترافية</p>
        </div>
      </div>

      {/* القسم الأيمن - نموذج التسجيل */}
      <div className="login-form-section">
        <div className="form-wrapper">
          <div className="logo-container">
            <Logo />
            <h2 className="company-name">Elite Business</h2>
          </div>

          <div className="form-header">
            <h3>مرحباً بك</h3>
            <p>سجل دخولك للوصول إلى حسابك</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="أدخل بريدك الإلكتروني"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="أدخل كلمة المرور"
                className={`form-input ${errors.password ? 'input-error' : ''}`}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-footer">
              <label className="remember-me">
                <input type="checkbox" />
                <span>تذكرني</span>
              </label>
              <a href="#forgot" className="forgot-password">
                هل نسيت كلمة المرور؟
              </a>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'جاري التحميل...' : 'تسجيل الدخول'}
            </button>
          </form>

          <div className="signup-link">
            <p>
              ليس لديك حساب؟{' '}
              <a href="#signup" className="signup-text">
                إنشاء حساب جديد
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
