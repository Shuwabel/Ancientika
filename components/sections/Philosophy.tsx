import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center py-8">
      <div className="flex flex-col items-center justify-center gap-4 mx-8">
        <div className="relative w-15 h-15">
          <Image
            src={"/Logo.png"}
            className="object-cover w-full h-full"
            fill
            alt="Logo"
          />
        </div>
        <div className="text-center w-200 flex flex-col items-center justify-center gap-2">
          <motion.h1
            className="fontmelo font-black text-4xl "
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            The Philosophy
          </motion.h1>
          <motion.p
            className="clash text-lg w-150 max-sm:w-100"
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            We believe in the luxury of less. A study in texture, warmth, and
            time. Our garments are crafted with precision and care, meant to
            last beyond seasons.
          </motion.p>
        </div>
      </div>

      <div className="flex flex-wrap flex-col gap-6 mt-8 justify-center ">
        <div className="flex items-end max-sm:flex-col gap-4">
          <div className="relative w-100 h-80 max-sm:w-100 max-sm:h-50">
            <Image
              src={"/img1.jpg"}
              className="object-cover w-full h-full"
              fill
              alt="Logo"
            />
            <div className="w-full h-full inset-0 bg-black/30 absolute group opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out clash ">
              {" "}
              <div className="bg-white w-24 h-10 absolute bottom-2 right-2 flex items-center justify-center text-nowrap text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer hover:bg-black hover:text-white hover:scale-95">
                Quick View
              </div>
              <div className="text-[16px] absolute bottom-2 left-2 text-white">
                Winter Lookbook
              </div>
            </div>
          </div>
          <div className="relative w-130 h-70 max-sm:w-100 max-sm:h-50">
            <Image
              src={"/img3.jpg"}
              className="object-cover  w-full h-full"
              fill
              alt="Logo"
            />
            <div className="w-full h-full inset-0 bg-black/30 absolute group opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out clash">
              {" "}
              <div className="bg-white w-24 h-10 absolute bottom-2 right-2 flex items-center justify-center  text-nowrap text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer hover:bg-black hover:text-white hover:scale-95">
                Quick View
              </div>
              <div className="text-[16px] absolute bottom-2 left-2 text-white">
                Winter Lookbook
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 max-sm:flex-col">
          <div className="relative w-130 h-70 max-sm:w-100 max-sm:h-50">
            <Image
              src={"/img2.jpg"}
              className="object-cover w-full h-full"
              fill
              alt="Logo"
            />
            <div className="w-full h-full inset-0 bg-black/30 absolute group opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out clash">
              {" "}
              <div className="bg-white w-24 h-10 absolute bottom-2 right-2 flex items-center justify-center  text-nowrap text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer hover:bg-black hover:text-white hover:scale-95">
                Quick View
              </div>
              <div className="text-[16px] absolute bottom-2 left-2 text-white">
                Winter Lookbook
              </div>
            </div>
          </div>
          <div className="relative w-100 h-80 max-sm:w-100 max-sm:h-50">
            <Image
              src={"/img3.jpg"}
              className="object-cover object-top w-full h-full"
              fill
              alt="Logo"
            />
            <div className="w-full h-full inset-0 bg-black/30 absolute group opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out clash">
              {" "}
              <div className="bg-white w-24 h-10 absolute bottom-2 right-2 flex items-center justify-center  text-nowrap text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer hover:bg-black hover:text-white hover:scale-95">
                Quick View
              </div>
              <div className="text-[16px] absolute bottom-2 left-2 text-white">
                Winter Lookbook
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
