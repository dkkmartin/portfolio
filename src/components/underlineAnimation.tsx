'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function UnderLineAnimation() {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <h2 onMouseLeave={() => setHovering(false)} onMouseEnter={() => setHovering(true)}>
        Front-end developer
      </h2>
      <div style={{ minHeight: '2px' }}>
        <AnimatePresence>
          {hovering ? (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 150, transition: { duration: 0.2 } }}
              exit={{ width: 0, transition: { duration: 0.2 } }}
            >
              <div className="border-b dark:border-white border-black"></div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}
