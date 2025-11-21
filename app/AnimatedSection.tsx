'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface AnimatedSectionProps {
	id: string,
  	children: ReactNode;
  	className?: string;
  	delay?: number;
}

export default function AnimatedSection({
  id,
  children,
  className = '',
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: 'easeOut' }}
      className={className}
	  id={id}
    >
      {children}
    </motion.div>
  );
}