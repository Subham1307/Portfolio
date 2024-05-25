import React from 'react';
import { CODING } from '../constants';
import { SiCodechef, SiCodeforces, SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import { motion } from "framer-motion"
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})
function Coding() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Coding
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <a href="https://leetcode.com/u/__ShiniGami_/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className='text-7xl text-cyan-400' />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <a href="https://codeforces.com/profile/__ShiniGami_" target="_blank" rel="noopener noreferrer">
            <SiCodeforces className='text-7xl' />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <a href="https://www.codechef.com/users/null_character" target="_blank" rel="noopener noreferrer">
            <SiCodechef className='text-7xl text-blue-400' />
          </a>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <a href="https://www.geeksforgeeks.org/user/ken_kaneki777/" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks className='text-7xl text-green-500' />
          </a>
        </motion.div>
      </motion.div>
        </div>
  );
}

export default Coding;
