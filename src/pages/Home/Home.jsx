import React from 'react';
import Hero from './sections/Hero';
import WhoItIsFor from './sections/WhoItIsFor';
import WhatsInside from './sections/WhatsInside';
import WhyChoosePappa from './sections/WhyChoosePappa';
import OnEveryScreen from './sections/OnEveryScreen';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <WhoItIsFor />
      <WhatsInside />
      <WhyChoosePappa />
      <OnEveryScreen />
    </div>
  );
}
