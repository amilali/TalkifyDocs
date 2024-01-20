'use client'
import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import Marquee from 'react-fast-marquee';

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="fixed top-0 left-0 right-0 rounded-full mx-8 mt-2 border-l-4 backdrop-blur-sm border-blue-900 bg-gray-900 p-4">
      <div className="flex items-center justify-between space-x-4">
        <div>
        </div>
        <div className="flex-grow"> {/* Adjusted to take full width */}
          <Marquee gradient={false}
            gradientColor="#111827" speed={70} gradientWidth={300} /* Adjusted gradientWidth for mobile */
          >
            <p className="text-sm font-medium text-white-600 underline underline-offset-4 decoration-3 decoration-solid decoration-sky-500">
              This application is currently in the testing phase and has been crafted by Amil Ali. 🧪✨ Feel free to explore its features and functionalities! 🚀
              <img className='inline h-7 w-7 ml-10' src="https://res.cloudinary.com/djcmgdn0x/image/upload/v1704878652/Untitled_design_5_1_rg3r1y.png" alt="" />
            </p>
          </Marquee>
        </div>
        <div>
          <X className="h-5 w-5 cursor-pointer text-white" onClick={handleDismiss} />
        </div>
      </div>
    </div>
  ) : null;
}
