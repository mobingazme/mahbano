'use client';
import Lottie from 'lottie-react';
import animationData from '/public/animateLottie/Animation - LoadingPage.json'; // مسیر فایل JSON

const LottieLoadingPage: React.FC = () => {
  return (
    <div className="bg-white w-full h-full flex justify-center items-center">
      <div className="w-1/3 h-fit my-14">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default LottieLoadingPage;
