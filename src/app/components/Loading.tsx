'use client'
import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  const circleVariants = {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        yoyo: Infinity
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
      <motion.div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'blue'
        }}
        initial="initial"
        animate="animate"
        variants={circleVariants}
      >
        <div className='bg-primary animate-spin w-4 h-4'></div>
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;
