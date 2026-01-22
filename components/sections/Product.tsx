import { useState } from "react";
import Image from "next/image";
import { PiPlus } from "react-icons/pi";
import { motion } from "framer-motion";

const Product = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <div className="w-full h-fit p-8 flex max-sm:flex-col max-sm:gap-4">
      <div className="w-full h-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-sm fontozean font-bold text-amber-700"
        >
          Interactive Exposure
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-9xl zina max-sm:text-5xl"
        >
          The Winter Editorial
        </motion.h1>
      </div>
      <div className="w-full h-[90vh] relative overflow-hidden">
        <Image
          src={"/img4.jpg"}
          alt="Image"
          className="object-cover w-full h-full hover:scale-105 transition-all duration-300"
          fill
        />

        <div className="w-10 h-10 rounded-full shadow-xl border border-black/15 absolute top-50 left-60 backdrop-blur-2xl flex items-center justify-center max-sm:left-10 max-sm:top-80 gro">
          <PiPlus
            className={`w-full h-full text-black p-2 ${show1 ? "rotate-180" : "rotate-0"} transition-all duration-300`}
            onClick={() => setShow1(!show1)}
          />
          <div className="absolute right-10 flex flex-row-reverse items-center justify-center gap-2 max-sm:left-24 max-sm:flex-row max-sm:items-center">
            <div
              className={`w-0 border border-black h-0  group-hover:border-black transition-all duration-300 ${show1 ? "w-20 border border-black " : "w-0 border border-black"}`}
            />
            <div
              className={`clash text-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ${show1 ? "opacity-100" : "opacity-0"}`}
            >
              White Vest
            </div>
          </div>
        </div>

        <div className="w-10 h-10 rounded-full shadow-xl border border-black/15 absolute top-50 left-120 backdrop-blur-2xl flex items-center justify-center max-sm:left-60 max-sm:top-60 gro">
          <PiPlus
            className={`w-full h-full text-black p-2 ${show2 ? "rotate-180" : "rotate-0"} transition-all duration-300`}
            onClick={() => setShow2(!show2)}
          />
          <div className="absolute right-10 flex flex-row-reverse items-center justify-center gap-2">
            <div
              className={`w-0 border border-black h-0 group-hover:w-20 group-hover:border-black transition-all duration-300 ${show2 ? "w-20 border-black " : "w-0"}`}
            />
            <div
              className={`clash text-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ${show2 ? "opacity-100" : "opacity-0"}`}
            >
              White Shirt
            </div>
          </div>
        </div>

        <div className="w-10 h-10 rounded-full shadow-xl border border-black/15 absolute top-125 left-100 backdrop-blur-2xl flex items-center justify-center max-sm:top-160 max-sm:left-60 gro">
          <PiPlus
            className={`w-full h-full text-black p-2 ${show3 ? "rotate-180" : "rotate-0"} transition-all duration-300`}
            onClick={() => setShow3(!show3)}
          />
          <div className="absolute right-10 flex flex-row-reverse items-center justify-center gap-2">
            <div
              className={`w-0 border border-black h-0 group-hover:w-20 group-hover:border-black transition-all duration-300 ${show3 ? "w-20 border-black " : "w-0"}`}
            />
            <div
              className={`clash text-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ${show3 ? "opacity-100" : "opacity-0"}`}
            >
              Trousers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
