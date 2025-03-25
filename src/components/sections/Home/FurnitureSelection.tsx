"use client"; 
import Image from "next/image";
import img1 from "./assets/mix1.png";
import img2 from "./assets/mix2.png";
import img3 from "./assets/mix3.png";
import img4 from "./assets/mix4.png";
import img5 from "./assets/mix5.png";
import img6 from "./assets/mix6.png";
import img7 from "./assets/mix7.png";
import img8 from "./assets/mix8.png";
import img9 from "./assets/mix9.png";
import { motion } from "framer-motion";

const FurnitureSelection = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, 
  };

  return (
    <motion.div
      className="flex flex-col items-center w-full mt-[70px]"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: false }} 
    >
      <motion.p variants={itemVariants} className="text-[20px] text-[#616161] font-[600] mb-[8px]">
        Share your photos
      </motion.p>
      <motion.h1 variants={itemVariants} className="text-[40px] font-[700] text-[#3A3A3A]">
        #Furnitura
      </motion.h1>
      <motion.div
        variants={itemVariants}
        className="w-full flex flex-col l:flex-row items-center justify-center mt-[100px] xsml:mt-[20px] sml:px-[5%] med:px-[10%] l:px-[0]"
      >
        <div className="w-full xxl:w-[741px] h-[600px] mr-[16px] flex flex-col xsml:h-[700px]">
          <div className="w-full h-1/2 relative mb-[16px]">
            <Image src={img1} alt="item" className="absolute bottom-0 left-0" />
            <Image src={img3} alt="item" className="absolute bottom-0 right-0 w-[270px] xsml:w-[revert-layer]" />
          </div>
          <div className="w-full h-1/2 relative">
            <Image src={img2} alt="item" className="absolute top-0 left-0 w-[120px] xsml:w-[revert-layer]" />
            <Image src={img4} alt="item" className="absolute top-0 right-0 w-[230px] xsml:w-[revert-layer]" />
          </div>
        </div>
        <div className="hidden xl:flex w-[295px] h-[full] relative mr-[16px]">
          <Image src={img5} alt="item" className="absolute bottom-[-100px]" />
        </div>
        <div className="w-full xxl:w-[731px] h-[550px] xsml:h-[691px]">
          <div className="w-full h-1/2 relative mb-[16px]">
            <Image src={img6} alt="item" className="absolute bottom-0 left-0 w-[160px] xsml:w-[revert-layer]" />
            <Image src={img7} alt="item" className="absolute bottom-0 right-0 w-[200px] xsml:w-[revert-layer]" />
          </div>
          <div className="w-full h-1/2 relative">
            <Image src={img8} alt="item" className="absolute top-0 left-0 w-[140px] xsml:w-[revert-layer]" />
            <Image src={img9} alt="item" className="absolute top-0 right-0 l2:right-[20%] w-[220px] xsml:w-[revert-layer]" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FurnitureSelection;