import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEO } from '../shared/SEO';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Frontend Developer Portfolio',
  description = 'Портфолио фронтенд разработчика на React и TypeScript'
}) => {
  return (
    <>
      <SEO title={title} description={description} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
