"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

type BlurRevealTextProps = {
  children: React.ReactNode;
};

export default function BlurRevealText({ children }: BlurRevealTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, { type: "chars" });
    const char = split.chars;

    gsap.fromTo(
      char,
      {
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <div ref={textRef} className="overflow-hidden">
      {children}
    </div>
  );
}
