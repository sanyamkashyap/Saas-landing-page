"use client";

import star from "@/assets/star.png"
import sprintImage from "@/assets/spring.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] pt-25 pb-25 overflow-x-clip">
      <div className="container ">
        <div className="section-heading relative">
          <h3 className="section-title">Sign up for free today </h3>
          <p className="section-description2 mt-5">
            Celebrate the joy of accomplishment with app designed to track your progress and motivate your efforts
          </p>

          <motion.img
            className="absolute -left-[350px] -top-[137px]"
            src={star.src}
            width={362}
            height={362}
            alt="star"
            style={{
              translateY
            }}
          />

          <motion.img
            className="absolute -right-[331px] -top-[19px]"
            src={sprintImage.src}
            width={362}
            height={362}
            alt="spring image"
            style={{
              translateY
            }}
          />
        </div>

        <div className="flex justify-center mt-10 gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">Learn more</button>
        </div>

      </div>
    </section>
  );
};