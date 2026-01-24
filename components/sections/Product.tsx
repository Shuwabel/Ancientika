import { useState } from "react";
import Image from "next/image";
import { PiMinus, PiPlus } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";

const hotspots = [
  {
    id: 0,
    top: "top-20",
    left: "left-30",
    topsm: "max-sm:top-20",
    leftsm: "max-sm:left-10",
    img: "/img9.jpg",
    title: "Main 30 Sweater",
    desc: "A soft knit essential designed for warmth, balance, and quiet confidence.",
  },
  {
    id: 1,
    top: "top-70",
    left: "left-150",
    topsm: "max-sm:top-20",
    leftsm: "max-sm:left-70",
    img: "/img7.jpg",
    title: "Winter Layer",
    desc: "Structured yet relaxed. Built to move effortlessly through cold seasons.",
  },
  {
    id: 2,
    top: "top-125",
    left: "left-30",
    topsm: "max-sm:top-160",
    leftsm: "max-sm:left-40",
    img: "/img8.jpg",
    title: "Editorial Essential",
    desc: "Minimal form, maximum intent. A timeless winter staple.",
  },
];

const Product = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-fit p-8 flex max-sm:flex-col max-sm:gap-4 bg-white">
      {/* LEFT TEXT */}
      <div className="w-full h-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-sm clash uppercase font-bold text-[#CD7F32]"
        >
          Interactive Exposure
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-9xl zina max-sm:text-5xl"
        >
          The Winter Editorial
        </motion.h1>
      </div>

      {/* IMAGE SECTION */}
      <div className="w-full h-[90vh] relative overflow-hidden">
        <Image
          src="/img16.jpg"
          alt="Editorial"
          fill
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />

        {/* HOTSPOTS */}
        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className={`w-10 h-10 rounded-full shadow-xl border border-black/15 absolute 
            ${spot.top} ${spot.left} ${spot.leftsm} ${spot.topsm} backdrop-blur-2xl flex items-center justify-center cursor-pointer z-50`}
            onClick={() =>
              setActiveIndex(activeIndex === spot.id ? null : spot.id)
            }
          >
            <AnimatePresence mode="wait">
              {activeIndex === spot.id ? (
                <motion.div
                  key="minus"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <PiMinus className="w-full h-full p-2 text-black z-40" />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <PiPlus className="w-full h-full p-2 text-black z-40" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* OVERLAY CARD */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              className="absolute inset-0  flex items-center justify-center bg-black/25 backdrop-blur-sm pointer-events-none z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-80 bg-white rounded-lg overflow-hidden shadow-2xl max-sm:scale-[0.8]"
              >
                {/* IMAGE */}
                <div className="relative h-60 w-full">
                  <Image
                    src={hotspots[activeIndex].img}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXT */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-medium">
                    {hotspots[activeIndex].title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {hotspots[activeIndex].desc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Product;
