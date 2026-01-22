import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface IntroSmProps {
  onComplete: () => void;
}

const IntroSm = ({ onComplete }: IntroSmProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ onComplete });

      tl.fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 1 })
        .to(".logo", { scale: 0.5, duration: 0.5, filter: "invert(0%)" })
        .fromTo(
          ".circle",
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.5 },
          "-=0.3",
        )
        .to(".box", {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 2,
        })
        .to(
          ".box2",
          {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 2,
          },
          "<",
        );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full h-screen grid grid-rows-2 relative"
    >
      <div className="bg-secondary box" />
      <div className="bg-secondary box2" />

      <div className="circle w-16 h-16 bg-background rounded-full opacity-0 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="logo w-16 h-16 fixed invert filter opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src="/Logo.png" alt="Logo" fill className="object-contain" />
      </div>
    </div>
  );
};

export default IntroSm;
