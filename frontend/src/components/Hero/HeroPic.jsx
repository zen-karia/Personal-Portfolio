import React from 'react';
import { motion } from 'framer-motion';

export default function HeroPic() {
  return (
    <div className="h-full flex items-center justify-center mr-5">
      <motion.img
        src="/images/ZenilKaria.jpg" // Use absolute path for the image
        alt="Zenil Karia"
        className="max-h-[350px] w-auto mt-5 rounded-full"
        initial={{ scaleX: 0, opacity: 0 }} // Start collapsed horizontally and hidden
        animate={{ scaleX: 1, opacity: 1 }} // Expand horizontally and fade in
        transition={{
          duration: 1.2, // Duration of the animation
          ease: [0.25, 0.25, 0.25, 0.75], // Smooth easing
        }}
        style={{ transformOrigin: 'center' }} // Ensure the flip happens from the center
      />
    </div>
  );
}
