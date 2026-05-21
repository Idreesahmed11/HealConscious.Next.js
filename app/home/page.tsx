'use client';
import { useState, useEffect } from 'react';
import ExpertSection from '@/app/components/ExpertSection/ExpertSection';
import HeroSection from '@/app/components/HeroSection/HeroSection';
import InfoSection from '@/app/components/InfoSection/InfoSection';
import CareoxSection from '@/app/components/CareoxSection/CareoxSection';
import ServicesSection from '@/app/components/ServicesSection/ServiceSection';
import WhyCareox from '@/app/components/WhyCareox/WhyCareox';
import HealConsciousSection from '@/app/components/HealConsciousSection';
import ConnectPage from '@/app/pages/Connect';

const Home = () => {
  const [showConnect, setShowConnect] = useState(false);

  useEffect(() => {
    const shouldShow = sessionStorage.getItem('show_connect') === 'true';
    sessionStorage.removeItem('show_connect');
    setShowConnect(shouldShow);
  }, []);

  if (showConnect) {
    return <ConnectPage />;
  }

  return <HomeSections />;
};

function HomeSections() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <CareoxSection />
      <WhyCareox />
      <ServicesSection />
      <ExpertSection />
      <HealConsciousSection />
    </>
  );
}

export default Home;