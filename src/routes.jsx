import React from 'react';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import About from './pages/About/About';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import FAQ from './pages/FAQ/FAQ';
import Contact from './pages/Contact/Contact';

export const routes = [
  {
    path: '/',
    element: <Home />,
    title: 'Home',
  },
  {
    path: '/features',
    element: <Features />,
    title: 'Features',
  },
  {
    path: '/about',
    element: <About />,
    title: 'About',
  },
  {
    path: '/how-it-works',
    element: <HowItWorks />,
    title: 'How It Works',
  },
  {
    path: '/faq',
    element: <FAQ />,
    title: 'FAQ',
  },
  {
    path: '/contact',
    element: <Contact />,
    title: 'Contact',
  },
];
