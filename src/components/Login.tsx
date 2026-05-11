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

          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-text">أو</span>
            <span className="divider-line"></span>
          </div>

          <button className="nafath-button" onClick={onLogin}>
            <svg width="28" height="28" viewBox="0 0 765 83" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 28, height: 28 }}>
              <path d="M725.73 24.3925C724.2 25.0794 723.197 26.5505 723.105 28.2276L722.807 34.0032L726.234 34.4726L726.55 28.4108C726.578 27.8556 726.974 27.6152 727.146 27.5408C727.318 27.4663 727.759 27.3232 728.195 27.6724L739.165 36.3844C739.715 36.8194 739.555 37.3632 739.463 37.575C739.371 37.7868 739.085 38.2733 738.391 38.176L726.131 36.4473L722.704 35.9665L709.091 34.049C707.503 33.8257 705.967 34.4382 704.976 35.686L704.959 35.7089C703.967 36.974 703.726 38.6168 704.322 40.1107L715.906 69.1831C716.703 71.175 718.657 72.2855 720.778 71.9363C721.93 71.7474 722.893 71.1693 723.558 70.3336C724.119 69.6295 724.458 68.748 724.509 67.7692L725.822 42.4862L722.394 42.0054L721.065 67.5918C721.024 68.3245 720.457 68.5019 720.216 68.5363C719.976 68.5763 719.379 68.5935 719.11 67.9123L707.526 38.84C707.332 38.3534 707.561 37.9757 707.67 37.8383C707.784 37.6952 708.088 37.3861 708.604 37.4605L722.52 39.4181L730.029 40.4771L737.904 41.5875C739.922 41.8737 741.819 40.8091 742.627 38.9316C743.435 37.0598 742.902 34.9476 741.303 33.6826L730.333 24.9707C729.02 23.9289 727.249 23.7057 725.719 24.3983L725.73 24.3925Z" fill="white"/>
            </svg>
            <span>تسجيل الدخول بنفاذ</span>
          </button>

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
