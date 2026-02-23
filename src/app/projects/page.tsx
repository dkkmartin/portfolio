'use client';

import * as motion from 'framer-motion/client';
import BigProjectCard from '@/components/bigProjectCard';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  return null
}
