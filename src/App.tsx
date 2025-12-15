import React, { Suspense, lazy } from 'react';
import { Layout } from './components/layout/Layout';
import { LoadingSpinner } from './components/shared/LoadingSpinner';
import { ParticleCursor } from './components/shared/ParticleCursor';
import { SpeedInsights } from "@vercel/speed-insights/next"
// Ленивая загрузка секций для оптимизации
const Hero = lazy(() => import('./components/sections/Hero').then(module => ({ default: module.Hero })));
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })));
const Skills = lazy(() => import('./components/sections/Skills').then(module => ({ default: module.Skills })));
const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));

function App() {
  return (
    <>
    <ParticleCursor />
    <SpeedInsights/>
    <Layout>
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </Suspense>
    </Layout>
    </>
  );
}

export default App;
