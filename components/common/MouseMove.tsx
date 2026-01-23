"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap/all";

const MouseMove = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const follower = followerRef.current;
    if (!follower) return;

    const magnets = Array.from(
      document.querySelectorAll<HTMLElement>(".Special"),
    );

    const enlarge = () => gsap.to(follower, { scale: 2, duration: 0.2 });

    const contract = () => gsap.to(follower, { scale: 1, duration: 0.2 });

    const moveFollower = (e: MouseEvent) => {
      gsap.to(follower, {
        x: e.clientX - follower.offsetWidth / 2,
        y: e.clientY - follower.offsetHeight / 2,
        duration: 0.05,
        ease: "power2.out",
      });

      let isNearMagnet = false;

      magnets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const triggerRadius = Math.max(rect.width, rect.height);

        if (distance < triggerRadius) {
          isNearMagnet = true;
        }
      });

      isNearMagnet ? enlarge() : contract();
    };

    window.addEventListener("mousemove", moveFollower);

    return () => {
      window.removeEventListener("mousemove", moveFollower);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="fixed w-6 h-6 top-0 left-0 pointer-events-none z-50 border border-primary bg-primary rounded-full hidden lg:flex items-center justify-center mix-blend-exclusion"
    >
      <div className="w-1 h-1 animate-spin bg-black" />
    </div>
  );
};

export default MouseMove;
