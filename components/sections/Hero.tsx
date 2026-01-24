"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import BlurRevealText from "../common/BlurRevealText";
import { motion } from "framer-motion";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (!email) return;

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid JSON response");
      }

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      setMessage(data.message);

      // safer reset
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden text-black">
      <div className="flex items-center w-full h-full max-sm:flex-col">
        <div className="w-full h-full max-sm:h-[150vw] relative">
          <Image
            src="/img3.jpg"
            alt="Hero"
            fill
            className="object-top object-cover w-full h-full"
          />
        </div>

        <div className="Special w-full h-full flex items-center justify-center p-10 bg-primary flex-col relative gap-2 max-sm:gap-12">
          <div className="text-xl clash text-center max-sm:text-xl relative">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              your presence{" "}
            </motion.span>

            <BlurRevealText>
              <span className="magnet block zina font-black text-9xl uppercase max-sm:text-7xl cursor-default">
                refined.
              </span>
            </BlurRevealText>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-[24vw] max-sm:w-full clash text-sm text-center cursor-default my-4 "
          >
            Essential forms for modern living. Thoughtfully designed to move
            with you, adapt to your rhythm. Built to live with you, not just on
            you.
          </motion.p>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col w-75 gap-8 clash"
          >
            <div className="flex flex-col gap-2 magnet">
              <input
                type="text"
                name="name"
                id="1"
                placeholder="Name"
                className="border-b rounded-3xl outline-none px-4 placeholder:text-neutral-500"
              />
            </div>
            <div className="flex flex-col gap-2 magnet">
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="border-b rounded-3xl  outline-none px-4 placeholder:text-neutral-500 bg-transparent "
              />
            </div>
            <div className="w-full flex items-center justify-center flex-col gap-2">
              <button
                type="submit"
                disabled={loading}
                className={` bg-secondary cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:bg-accent border-b border-secondary hover:text-black px-4 py-1 rounded-xl text-white  ${
                  loading ? "opacity-60 cursor-not-allowed" : "bg-black"
                } `}
              >
                {loading ? "Joining..." : "Join waitlist"}
              </button>
              {message && <p className="text-sm">{message}</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
