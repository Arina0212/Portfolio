import { RefObject, useEffect, useState } from 'react';

interface UseIntersectionObserverProps {
  ref: RefObject<Element>;
  options?: IntersectionObserverInit;
  once?: boolean;
}

export const useIntersectionObserver = ({
  ref,
  options = { threshold: 0.1 },
  once = true
}: UseIntersectionObserverProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      const isElementIntersecting = entry.isIntersecting;
      
      if (once && hasBeenVisible) return;
      
      if (isElementIntersecting) {
        setIsIntersecting(true);
        setHasBeenVisible(true);
      } else {
        setIsIntersecting(false);
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options, once, hasBeenVisible]);

  return { isIntersecting, hasBeenVisible };
};
