import { motion } from "framer-motion";
import React from "react";

const CTA = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;

    if (!email) return;

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      // show success or error
      const messageDiv = document.getElementById("message");
      if (res.ok) {
        messageDiv!.textContent = data.message;
        form.reset();
      } else {
        messageDiv!.textContent = data.error || "Something went wrong";
      }
    } catch (err) {
      console.error(err);
      const messageDiv = document.getElementById("message");
      messageDiv!.textContent = "Failed to send request";
    }
  };
  return (
    <div className="w-full h-[50vh] bg-transparent backdrop-blur-2xl flex items-center justify-center flex-col text-center gap-8">
      <motion.p
        className="zina w-full font-bold cursor-default text-6xl max-sm:text-5xl"
        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Join The Waitlist
      </motion.p>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col w-75 gap-4 clash max-sm:"
      >
        <div className="flex flex-col gap-2">
          <input
            type="email"
            name="email"
            id="1"
            placeholder="Email"
            className="rounded-3xl  outline-none px-4 py-2 placeholder:text-neutral-200 bg-white"
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
      </motion.form>
    </div>
  );
};

export default CTA;
