"use client";

import Image from "next/image";
import { Road_Rage } from "next/font/google";
import { useState } from "react";

const roadRage = Road_Rage({
  weight: "400",
  subsets: ["latin"],
});

/* ===============================
   UNDERLINE INPUT (SCROLLABLE)
================================ */
const UnderlineInput = ({ minWidth }) => {
  const [value, setValue] = useState("");

  return (
    <span
      className="relative inline-block align-baseline"
      style={{ width: minWidth }}
    >
      {/* INPUT */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`
          ${roadRage.className}
          w-full
          bg-transparent
          outline-none
          border-none
          text-gray-600
          text-[24px]
          absolute
          left-1
          pr-2
          -bottom-[5px]
          z-10
          whitespace-nowrap
          overflow-x-auto
        `}
      />

      {/* UNDERLINE */}
      <span className="block border-b-2 border-black w-full"></span>
    </span>
  );
};

const ContactForm = () => {
  return (
    <section className="contact-section relative w-full h-[440px] xl:h-[630px] 2xl:h-[680px] overflow-hidden">
      {/* BACKGROUND */}
      <Image
        src="/assets/contact/contact-bg.png"
        alt="Contact background"
        fill
        priority
        className="object-fit"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1100px] mx-auto xl:pt-[90px] 2xl:pt-[134px] text-center text-[#2b2b2b] space-y-3 contact-form">
        {/* LINE 1 */}
        <p className={`${roadRage.className} text-[30px] right-5`}>
          My name is <UnderlineInput minWidth={120} /> and you can reach me at{" "}
          <UnderlineInput minWidth={220} />. I’m writing from{" "}
          <UnderlineInput minWidth={140} />.
        </p>

        {/* LINE 2 */}
        <p className={`${roadRage.className} text-[30px]`}>
          and would love to explore working together. Our website is{" "}
          <UnderlineInput minWidth={220} /> or we’re starting fresh.
        </p>

        {/* LINE 3 */}
        <p className={`${roadRage.className} text-[30px]`}>
          We’re looking for help with <UnderlineInput minWidth={260} />. Here’s
          a quick note about what we have in mind
        </p>

        {/* LINE 4 */}
        <p className={`${roadRage.className} text-[30px]`}>
          <UnderlineInput minWidth={420} />
        </p>

        {/* BUTTON */}
        <div className="mt-12 flex justify-center">
          <button type="submit">
            <Image
              src="/assets/contact/contact-btn.png"
              alt="Send message"
              width={220}
              height={70}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </button>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 2000px) {
          .contact-section {
            height: 850px;
          }

          .contact-form {
          margin-top: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
