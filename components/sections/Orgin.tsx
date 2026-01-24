"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Orgin = () => {
  const timeline = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(".timeline-item");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timeline.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.6,
      },
    });

    // Grow center line
    tl.to(".timeline-line", {
      height: "100%",
      ease: "power1.inOut",
    });

    // Animate dots + content
    items.forEach((item) => {
      const dot = item.querySelector<HTMLElement>(".dot");
      const content = item.querySelector<HTMLElement>(".content");

      if (!dot || !content) return;

      tl.to(dot, {
        scale: 1,
        duration: 0.2,
      }).to(content, {
        opacity: 1,
        y: 0,
        duration: 0.3,
      });
    });
  }, []);

  return (
    <div className="relative w-full h-[280vh] bg-secondary flex items-center flex-col justify-start gap-16 text-white p-8 max-sm:h-[200vh] max-[400px]:h-[300vh] cursor-default">
      <div className="w-150 min-h-80 relative max-sm:w-90 max-sm:h-50">
        <Image
          src={"/img4.jpg"}
          alt="Image"
          className="object-cover w-full h-full object-top filter grayscale-100"
          fill
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-2 max-sm:items-start">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="uppercase text-xs clash font-bold text-[#CD7F32] tracking-widest"
        >
          The Craft
        </motion.p>
        <motion.h1
          className="text-5xl zina "
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          The Origin Scroll
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="clash text-sm mt-2 text-center text-neutral-200 max-sm:text-left"
        >
          A garment is a story of hands and history.{" "}
          <span className="block">
            Witness the evolution of an Ancientica piece.
          </span>
        </motion.p>
        {/* Scroll */}
      </div>

      <section className="relative mx-auto max-w-5xl px-6 py-32" ref={timeline}>
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#fff9f74c] rounded-2xl origin-top max-sm:left-0" />
        <div className="timeline-line absolute left-1/2 top-0 h-0 w-1 -translate-x-1/2 bg-white rounded-2xl origin-top max-sm:left-0" />

        {/* Item 1 - Left */}
        <div className="timeline-item relative mb-30 grid grid-cols-2 max-sm:grid-cols-2 max-sm:place-items-center max-sm:items-center  items-start ">
          <div className="content opacity-0 translate-y-6 pr-12 max-sm:pl-30 text-right max-sm:text-left">
            <p className="clash text-[#CD7F32] font-bold">Phase 1</p>
            <h3 className="text-2xl font-bold fontmelo ">The Sourcing</h3>
            <p className="text-sm text-gray-300 clash w-50">
              Finest wool sourced from artisanal farms in the Italian Piedmont.
            </p>
          </div>

          <div className="relative max-sm:hidden">
            <span className="dot absolute left-0 top-12 max-sm:top-0 max-sm:-left-55 h-4 w-4 -translate-x-1/2 scale-0 rounded-full bg-white " />
          </div>
        </div>

        {/* Item 2 - Right */}
        <div className="timeline-item relative mb-30 grid grid-cols-2 max-sm:grid-cols-1 max-sm:place-items-center max-sm:items-start  items-start ">
          <div className="relative max-sm:hidden">
            <span className="dot absolute left-62 top-12 h-4 w-4 -translate-x-1/2 scale-0 rounded-full bg-white " />
          </div>

          <div className="content opacity-0 translate-y-6 pl-12 max-sm:pl-0 max-sm:pr-12">
            <p className="clash text-[#CD7F32] font-bold">Phase 2</p>
            <h3 className="text-xl font-bold fontmelo">The Pattern</h3>
            <p className="text-sm text-gray-300 clash w-50">
              Hand-drafted silhouettes that honor skeletal forms and movement.
            </p>
          </div>
        </div>

        {/* Item 3 - Left */}
        <div className="timeline-item relative mb-30 grid grid-cols-2 max-sm:grid-cols-1 max-sm:place-items-center max-sm:items-center  items-start ">
          <div className="content opacity-0 translate-y-6 pr-12 text-right max-sm:text-left">
            <p className="clash text-[#CD7F32] font-bold">Phase 3</p>
            <h3 className="text-xl font-bold fontmelo">The Construction</h3>
            <p className="text-sm text-gray-300 clash w-50">
              Single-needle tailoring with 12 stitches per inch for extreme
              durability.
            </p>
          </div>

          <div className="relative max-sm:hidden">
            <span className="dot absolute left-0 top-12 h-4 w-4 -translate-x-1/2 scale-0 rounded-full bg-white " />
          </div>
        </div>

        {/* Item 4 - Right */}
        <div className="timeline-item relative mb-30 grid grid-cols-2 max-sm:grid-cols-1 max-sm:place-items-center max-sm:items-center  items-start ">
          <div className="relative max-sm:hidden">
            <span className="dot absolute left-62 top-12 h-4 w-4 -translate-x-1/2 scale-0 rounded-full bg-white " />
          </div>

          <div className="content opacity-0 translate-y-6 pl-12 max-sm:pl-0 max-sm:pr-12">
            <p className="clash text-[#CD7F32] font-bold">Phase 4</p>
            <h3 className="text-xl font-bold fontmelo">The Finishing</h3>
            <p className="text-sm text-gray-300 clash w-50">
              Every piece is hand-dyed using organic pigments for a unique soul.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orgin;
