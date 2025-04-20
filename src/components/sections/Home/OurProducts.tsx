"use client"; 
import ItemCard from "./components/ItemCard";
import { allProducts } from "@/store/SotorageOfProducts";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

const OurProducts = () => {
  const router = useRouter(); // Initialize the router

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

  // Function to handle button click and navigate to the Shop page
  const handleLearnMoreClick = () => {
    router.push("/shop"); // Navigate to the /shop route
  };

  return (
    <motion.div
      className="w-full flex flex-col justify-start items-center mt-[40px] px-[10px] lg:px-[65px]"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: false }} 
    >
      <motion.h1
        variants={itemVariants}
        className="text-[40px] font-[700] text-[#3A3A3A] mb-[32px]"
      >
        Products for You
      </motion.h1>
      <motion.div
        variants={itemVariants}
        className="flex flex-col w-full items-center l2:flex-row l2:justify-between"
      >
        <div className="flex flex-col justify-between sml2:flex-row sml2:w-[590px] sm:w-[640px] l2:hidden">
          <motion.div variants={itemVariants}>
            <ItemCard
              count={1}
              id={allProducts[0].id}
              price={allProducts[0].price}
              description={allProducts[0].description}
              name={allProducts[0].name}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ItemCard
              count={1}
              id={allProducts[1].id}
              price={allProducts[1].price}
              description={allProducts[1].description}
              name={allProducts[1].name}
            />
          </motion.div>
        </div>
        <div className="flex flex-col justify-between sml2:flex-row sml2:w-[590px] sm:w-[640px] l2:hidden">
          <motion.div variants={itemVariants}>
            <ItemCard
              count={1}
              id={allProducts[2].id}
              price={allProducts[2].price}
              description={allProducts[2].description}
              name={allProducts[2].name}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ItemCard
              count={1}
              id={allProducts[3].id}
              price={allProducts[3].price}
              description={allProducts[3].description}
              name={allProducts[3].name}
            />
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="hidden l2:flex">
          <ItemCard
            count={1}
            id={allProducts[0].id}
            price={allProducts[0].price}
            description={allProducts[0].description}
            name={allProducts[0].name}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="hidden l2:flex">
          <ItemCard
            count={1}
            id={allProducts[1].id}
            price={allProducts[1].price}
            description={allProducts[1].description}
            name={allProducts[1].name}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="hidden l2:flex">
          <ItemCard
            count={1}
            id={allProducts[2].id}
            price={allProducts[2].price}
            description={allProducts[2].description}
            name={allProducts[2].name}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="hidden l2:flex">
          <ItemCard
            count={1}
            id={allProducts[3].id}
            price={allProducts[3].price}
            description={allProducts[3].description}
            name={allProducts[3].name}
          />
        </motion.div>
      </motion.div>
      <motion.button
        variants={itemVariants}
        className="mt-[32px] w-[245px] h-[48px] border border-[#B88E2F] bg-white hover:bg-[#B88E2F] duration-300"
        onClick={handleLearnMoreClick} // Add onClick handler
      >
        <p className="text-[16px] text-[#B88E2F] font-[600] hover:text-white duration-300">
          Learn More
        </p>
      </motion.button>
    </motion.div>
  );
};

export default OurProducts;