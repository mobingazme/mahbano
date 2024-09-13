'use client';
import Lottie from 'lottie-react';
import Link from 'next/link';
import animationData from 'public/animateLottie/Animation404.json'; // مسیر فایل JSON

const Lottie404Page: React.FC = () => {
  return (
    <div className="bg-white w-full h-full flex justify-center items-center">
      <div className="w-fit md:w-2/5 h-full mt-40 mb-10 flex flex-col">
        <Lottie animationData={animationData} />
        <h2 className="text-B font-bold text-center">صفحه مورد نظر پیدا نشد</h2>
        <div className="mx-auto">
          <Link href={'/'}>
            <button className="hover:bg-B border-B text-B my-4 mx-auto duration-300 border hover:text-white ease-in rounded-lg p-1 transition-all">
              صفحه اصلی
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lottie404Page;
