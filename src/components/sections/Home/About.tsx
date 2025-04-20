'use client';
import background from './assets/img1.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();

  const goToCatalog = () => {
    router.push('/shop');
  };

  return (
    <div className="h-[812px] w-full relative">
      <div className="flex flex-col absolute justify-between items-start w-[350px] h-[300px] pr-[10px] bg-[#FFF3E3] right-2 med:right-[5%] top-[190px] med:top-[250px] pl-[10px] pt-[20px] pb-[20px] med:w-[643px] med:h-[443px] med:pl-[41px] med:pt-[62px] med:pb-[37px]">
        <p className="text-[12px] font-[600] poppins text-[#333] tracking-[3px] med:text-[16px] mont">
          New arrivals
        </p>
        <h1 className="font-[700] text-[28px] med:text-[52px] text-[#B88E2F] shrink-0 h-[90px] med:h-[127px] leading-[40px] med:leading-[65px] mont">
          We present you the New Collection
        </h1>
        <p className="text-[11px] med:text-[18px] font-[500] text-[#333] leading-[15px] med:leading-[24px] mont">
          Our new collection is aimed at creating coziness and a unique feeling of warmth in your home.
        </p>
        <button
          onClick={goToCatalog}
          className="py-[12px] med:py-[25px] px-[42px] med:px-[72px] gap-[10px] bg-[#B88E2F] hover:bg-[#cea138] duration-300"
          suppressHydrationWarning 
        >
          <p className="text-[13px] med:text-[16px] mont font-[600] text-white">Buy</p>
        </button>
      </div>
      <Image
        className="h-[812px] w-full object-cover"
        src={background}
        alt="Background image for About section"
        priority 
      />
    </div>
  );
};

export default About;