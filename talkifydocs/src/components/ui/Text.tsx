
import React from 'react';
import { motion } from 'framer-motion';

const Text = ({ data }) => {
  const text = data.split(' ');

  return (
    <p className="text-xs md:text-sm lg:text-sm max-w-xl mx-auto mt-4">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{' '}
        </motion.span>
      ))}
    </p>
  );
};

export default Text;
