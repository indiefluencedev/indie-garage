"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import IntroPanel from "@/components/scroll/IntroPanel";
import BannerPanel from "@/components/scroll/BannerPanel";
import TeamPanel from "@/components/scroll/TeamPanel";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExperience() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        x: () => -(window.innerWidth * (panels.length - 1)),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => "+=" + window.innerWidth * panels.length,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative h-screen w-screen overflow-hidden"
    >

      {/* HORIZONTAL TRACK */}
      <div
        ref={trackRef}
        className="flex h-full"
        style={{ width: "300vw" }} // 3 panels
      >
        <IntroPanel />
        <BannerPanel />
        <TeamPanel />
      </div>
    </section>
  );
}
