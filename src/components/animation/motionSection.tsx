import * as motion from 'framer-motion/client';
import { ReactNode } from 'react';

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
}

const MotionSection = ({ children, className }: MotionSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
