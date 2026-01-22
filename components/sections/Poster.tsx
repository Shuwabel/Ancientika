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
  const imgRef = useRef(null);
  const img2Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
      },
      defaults: {
        ease: "power4.out",
      },
    });

    tl.fromTo(
      imgRef.current,
      {
        opacity: 0,
        yPercent: 120,
      },
      {
        opacity: 1,
        yPercent: -200,
      },
      0,
    );

    tl.fromTo(
      img2Ref.current,
      {
        yPercent: 120,
      },
      {
        yPercent: -160,
        delay: 0.1,
      },
      0,
    );
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div
        ref={wrapperRef}
        className="wrapper h-screen w-full flex flex-col items-center bg-secondary font-sans text-white gap-8 text-center py-12 justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.h1
            className="clash uppercase text-5xl cursor-default"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            The Edit
          </motion.h1>
          <motion.p
            className="clash w-85 cursor-default"
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Join our newsletter for early access to new drops, exclusive
            editorial content, and private collections.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col w-75 gap-8 clash"
          >
            <div className="flex flex-col gap-2">
              <input
                type="email"
                name=""
                id="1"
                placeholder="Email"
                className="border-b rounded-3xl  outline-none px-4 placeholder:text-neutral-200 bg-transparent"
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                className=" bg-primary cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:bg-secondary border-b border-primary hover:text-white px-4 py-1 rounded-xl text-black"
              >
                Submit
              </button>
            </div>
          </motion.div>
        </div>

        <div
          className="w-96 h-120 max-sm:scale-[0.8] scale-[1] absolute left-32 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-secondary bg-center bg-cover bg-no-repeat"
          ref={imgRef}
        >
          <Image
            src={"/img2.jpg"}
            alt="/"
            fill
            className="object-cover w-full h-full "
          />
        </div>
        <div
          className="w-96 h-120 max-sm:scale-[0.8]  scale-[1] absolute right-0 max-sm:-right-90 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-secondary bg-center bg-cover bg-no-repeat"
          ref={img2Ref}
        >
          <Image
            src={"/img5.jpg"}
            alt="/"
            fill
            className="object-cover w-full h-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Poster;
