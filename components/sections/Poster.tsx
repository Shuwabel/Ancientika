/* eslint-disable react-hooks/purity */
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Poster = () => {
  const wrapperRef = useRef(null);

  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
    "/img11.jpg",
    "/img12.jpg",
    "/img13.jpg",
    "/img14.jpg",
    "/img15.jpg",
  ];

  useGSAP(() => {
    const images = gsap.utils.toArray<HTMLDivElement>(".fly-image");

    gsap.set(images, {
      yPercent: 150,
      opacity: 0,
    });

    gsap.to(images, {
      yPercent: gsap.utils.random(-250, -600),
      xPercent: gsap.utils.random(-50, 150),
      scale: gsap.utils.random(0.8, 1.1),
      opacity: 1,
      ease: "none",
      stagger: {
        each: 0.05,
        from: "random",
      },
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=1000",
        scrub: 0.6,
        pin: true,
      },
    });
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        ref={wrapperRef}
        className="wrapper h-screen w-full flex flex-col items-center bg-secondary font-sans text-white gap-8 text-center py-12 justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.h1
            className="zina text-3xl cursor-default"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            ancientika
          </motion.h1>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {images.map((src, i) => (
            <div
              key={i}
              className="fly-image absolute w-64 h-96"
              style={{
                left: `${Math.random() * 100 + 10}%`,
                top: "100%",
              }}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Poster;
