import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const slideInFromLeft: Variants = {
  initial: { x: -50, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export const slideInFromRight: Variants = {
  initial: { x: 50, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export const buttonHover: Variants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};
