import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], options?: IntersectionObserverInit) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observerOptions = {
      rootMargin: options?.rootMargin || '-50% 0px -50% 0px',
      threshold: options?.threshold || 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeId;
};