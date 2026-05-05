import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Services from './components/Services';
import Authorization from './components/Authorization';
import MessagePage from './components/MessagePage';
import NafathPage from './components/NafathPage';
import NafathPageV2 from './components/NafathPageV2';
import NafathDelegationReview from './components/NafathDelegationReview';

type AppPage = 'login' | 'services' | 'authorization' | 'message' | 'nafath' | 'nafathv2' | 'nafath-delegation-review';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get('page');
  const initialPage: AppPage = pageParam === 'message' ? 'message' : pageParam === 'nafath' ? 'nafath' : pageParam === 'nafathv2' ? 'nafathv2' : pageParam === 'nafath-delegation-review' ? 'nafath-delegation-review' : 'login';

  const [currentPage, setCurrentPage] = useState<AppPage>(initialPage);

  const handleLogin = () => {
    setCurrentPage('services');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  const handleServiceClick = (serviceId: number) => {
    if (serviceId === 2) {
      // خدمة "إضافة تفويض"
      setCurrentPage('authorization');
    }
  };

  const handleBackToServices = () => {
    setCurrentPage('services');
  };

  return (
    <div className="App">
      {currentPage === 'message' && <MessagePage onBack={() => window.close()} />}
      {currentPage === 'services' && (
        <Services onLogout={handleLogout} onServiceClick={handleServiceClick} />
      )}
      {currentPage === 'login' && <Login onLogin={handleLogin} />}
      {currentPage === 'authorization' && <Authorization onBack={handleBackToServices} />}
      {currentPage === 'nafath' && <NafathPage onBack={handleBackToServices} />}
      {currentPage === 'nafathv2' && <NafathPageV2 onBack={handleBackToServices} />}
      {currentPage === 'nafath-delegation-review' && <NafathDelegationReview onBack={handleBackToServices} />}
    </div>
  );
}

export default App;
