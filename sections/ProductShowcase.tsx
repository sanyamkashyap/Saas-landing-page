"use client"

import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import ecoIcon from "@/assets/ecoIcons.png";
import goalIcon from "@/assets/goalVector.png";
import secIcon from "@/assets/scureVector.png";
import notifyIcon from "@/assets/notifyIcon.png";
import ArrowIcon from "@/assets/arrow-right.svg"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])


  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your poductivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress</h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just with this template</p>
        </div>
        <div className="relative">
          <motion.img
            src={productImage.src}
            alt="product image"
            className="mt-10"
          />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tube image"
            height={248}
            width={248}
            className="hidden md:block absolute -left-36 bottom-24"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 px-7 pt-3">
          <div className="space-y-2">
            <Image src={ecoIcon} alt="eco icon" width={20} />
            <h5 className="text-[18px] font-bold">Integration ecosystem</h5>
            <p>Track your progress and motivate your efforts everyday</p>
            <button className="flex btn2 btn-text gap-1">
              Learn more <ArrowIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-2">
            <Image src={goalIcon} alt="goal icon" width={20} />
            <h5 className="text-[18px] font-bold">Goal setting and tracking</h5>
            <p>Set and track goals with manageable task breakdowns</p>
            <button className="flex btn2 btn-text gap-1">
              Learn more <ArrowIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-2">
            <Image src={secIcon} alt="lock icon" width={20} />
            <h5 className="text-[18px] font-bold">Secure data encryption</h5>
            <p>Ensure your data safety with top-tier encryption</p>
            <button className="flex btn2 btn-text gap-1">
              Learn more <ArrowIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-2">
            <Image src={notifyIcon} alt="notify icon" width={20} />
            <h5 className="text-[18px] font-bold">Customizable notifications</h5>
            <p>Get alerts on tasks and deadlines that matter most</p>
            <button className="flex btn2 btn-text gap-1">
              Learn more <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

