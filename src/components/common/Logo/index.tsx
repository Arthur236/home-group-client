import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
  initial: {
    x: -200
  },
  animate: {
    x: 0,
    transition: {
      duration: 1
    }
  }
};

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }
};

const Logo = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='45'
      height='45'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#fefefe'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className='home-logo'
      variants={svgVariants}
      initial='initial'
      animate='animate'
    >
      <motion.path d='M12 2 2 7 12 12 22 7 12 2z' variants={pathVariants} />
      <motion.path d='M2 17 12 22 22 17' variants={pathVariants} />
      <motion.path d='M2 12 12 17 22 12' variants={pathVariants} />
    </motion.svg>
  );
}

export default Logo;
