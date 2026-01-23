"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import useLenis from "@/components/utils/hooks/useLenis";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/sections/Hero";
import Poster from "@/components/sections/Poster";
import Philosophy from "@/components/sections/Philosophy";
import Orgin from "@/components/sections/Orgin";
import Product from "@/components/sections/Product";
import Intro from "@/components/common/Intro";
import IntroSm from "@/components/common/IntroSm";
import CTA from "@/components/sections/CTA";

export default function Home() {
  useLenis();

  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <>
          <div className="max-sm:hidden">
            <Intro onComplete={() => setShowIntro(false)} />
          </div>
          <div className="lg:hidden">
            <IntroSm onComplete={() => setShowIntro(false)} />
          </div>
        </>
      )}

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full overflow-hidden relative"
        >
          <Header />

          <main className="relative g-white">
            <Hero />
            <Poster />
            <Philosophy />
            <Orgin />
            <Product />
            <CTA />
          </main>

          <div className="h-screen w-full bg-transparent" />
          <Footer />
        </motion.div>
      )}
    </>
  );
}
