'use client';
import Lottie from 'lottie-react';
import animationData from '/public/animateLottie/Animation - NoDataSearch.json'; // مسیر فایل JSON

const LottieNoDataSearch: React.FC = () => {
  return (
    <div className="p-1 w-80 h-80">
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LottieNoDataSearch;
