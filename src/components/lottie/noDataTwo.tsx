'use clinet'
import Lottie from 'lottie-react';
import animationData from '/public/animateLottie/Animation - NoDataB.json'; // مسیر فایل JSON

const LottieNoDataTwo:React.FC = () => {
  return (
    <div className=' p-1 w-80 h-80 ' >
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LottieNoDataTwo