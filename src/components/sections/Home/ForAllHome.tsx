"use client";
import dinig from "./assets/dinning.png";
import living from "./assets/living.png";
import bedroom from "./assets/bedroom.png";
import Image from "next/image";
import { motion } from "framer-motion";

const ForAllHome = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full flex flex-col justify-start items-center mt-[40px] lg:px-[65px]"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: false }} // التعديل هنا: يجعل التأثير يتكرر عند كل ظهور
    >
      <motion.h1 variants={itemVariants} className="text-[32px] font-[700] text-[#333]">
        For the whole house
      </motion.h1>
      <div className="w-full flex flex-col mt-[60px] l:flex-row l:items-center l:justify-between">
        <motion.div variants={itemVariants} className="flex flex-col items-center l:flex-col-reverse">
          <h2 className="text-[24px] font-[600] text-[#333] py-[16px]">Kitchen</h2>
          <Image alt="bg" src={dinig} className="w-[375px] h-[480px]" />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col items-center l:flex-col-reverse">
          <h2 className="text-[24px] font-[600] text-[#333] py-[16px]">Living room</h2>
          <Image alt="bg" src={living} className="w-[375px] h-[480px]" />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col items-center l:flex-col-reverse">
          <h2 className="text-[24px] font-[600] text-[#333] py-[16px]">Bedroom</h2>
          <Image alt="bg" src={bedroom} className="w-[375px] h-[480px]" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ForAllHome;