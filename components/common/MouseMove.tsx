"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap/all";

const MouseMove = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const enlarge = () => {
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          scale: 2,
          duration: 0.2,
        });
      }
    };

    const contract = () => {
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          scale: 1,
          duration: 0.2,
        });
      }
    };

    const moveFollower = (e: MouseEvent) => {
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          x: e.clientX - followerRef.current.offsetWidth / 2,
          y: e.clientY - followerRef.current.offsetHeight / 2,
          duration: 0.02,
          ease: "power2.inOut",
        });
      }
    };

    const interactEl = document.querySelectorAll(".magnet");

    interactEl.forEach((el) => {
      el.addEventListener("mouseenter", enlarge);
      el.addEventListener("mouseleave", contract);
      return () => {
        interactEl.forEach((el) => {
          el.removeEventListener("mouseenter", enlarge);
          el.removeEventListener("mouseleave", contract);
        });
      };
    });

    window.addEventListener("mousemove", moveFollower);

    return () => {
      window.removeEventListener("mousemove", moveFollower);
    };
  }, []);
  return (
    <div
      ref={followerRef}
      className="fixed w-4 h-4 top-0 left-0 pointer-events-none z-50 border border-black bg-black rounded-full lg:flex items-center justify-center transition-all duration-[0.05s] hidden filter blur-[4px]"
    ></div>
  );
};

export default MouseMove;
