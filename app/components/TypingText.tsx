'use client';

import { easeIn, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TypingTextProps {
	content: string;
	speed: number;
	className?: string
}

export default function TypingText(
	{
	content,
	speed,
	className }: TypingTextProps) {
  	const words = content.split(' ');

	const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * (1 / speed),
        duration: 0.3,
		ease: "easeOut"
      	}
    })
  	};	

  	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
    return (
    <div  ref={ref} className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block"
        >
          {word} 
		  {index < (words.length - 1) && <span className="inline-block">{'\u00A0'}</span>}
        </motion.span>
      ))}
    </div>
  );
}
