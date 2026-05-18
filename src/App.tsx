import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Services from './components/Services';
import Authorization from './components/Authorization';
import MessagePage from './components/MessagePage';
import NafathPage from './components/NafathPage';
import NafathPageV2 from './components/NafathPageV2';
import NafathDelegationReview from './components/NafathDelegationReview';
import MyDelegations from './components/MyDelegations';
import RequestDelegation from './components/RequestDelegation';

type AppPage = 'login' | 'services' | 'authorization' | 'message' | 'nafath' | 'nafathv2' | 'nafath-delegation-review' | 'my-delegations' | 'request-delegation';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = urlParams.get('page');
  const initialPage: AppPage = pageParam === 'message' ? 'message' : pageParam === 'nafath' ? 'nafath' : pageParam === 'nafathv2' ? 'nafathv2' : pageParam === 'nafath-delegation-review' ? 'nafath-delegation-review' : 'login';

  const [currentPage, setCurrentPage] = useState<AppPage>(initialPage);
  const [loginMethod, setLoginMethod] = useState<'default' | 'nafath'>('default');

  const handleLogin = () => {
    setLoginMethod('default');
    setCurrentPage('services');
  };

  const handleNafathSuccess = () => {
    setLoginMethod('nafath');
    setCurrentPage('services');
  };

  const handleLogout = () => {
    setLoginMethod('default');
    setCurrentPage('login');
  };

  const handleServiceClick = (serviceId: number) => {
    if (serviceId === 2) {
      setCurrentPage('authorization');
    } else if (serviceId === 7) {
      setCurrentPage('my-delegations');
    } else if (serviceId === 8) {
      setCurrentPage('request-delegation');
    }
  };

  const handleBackToServices = () => {
    setCurrentPage('services');
  };

  return (
    <div className="App">
      {currentPage === 'message' && <MessagePage onBack={() => window.close()} />}
      {currentPage === 'services' && (
        <Services onLogout={handleLogout} onServiceClick={handleServiceClick} loginMethod={loginMethod} />
      )}
      {currentPage === 'login' && <Login onLogin={handleLogin} onNafathSuccess={handleNafathSuccess} />}
      {currentPage === 'authorization' && <Authorization onBack={handleBackToServices} />}
      {currentPage === 'nafath' && <NafathPage onBack={handleBackToServices} />}
      {currentPage === 'nafathv2' && <NafathPageV2 onBack={handleBackToServices} />}
      {currentPage === 'nafath-delegation-review' && <NafathDelegationReview onBack={handleBackToServices} />}
      {currentPage === 'my-delegations' && <MyDelegations onBack={handleBackToServices} />}
      {currentPage === 'request-delegation' && <RequestDelegation onBack={handleBackToServices} />}
    </div>
  );
}

export default App;
