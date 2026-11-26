import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageContainer from './components/layout/PageContainer';
import { ThemeProvider } from './context/ThemeContext';
import { routes } from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <PageContainer>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </PageContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}
