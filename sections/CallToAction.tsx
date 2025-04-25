import Image from "next/image";

import star from "@/assets/star.png"
import sprintImage from "@/assets/spring.png"

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] pt-25 pb-25 overflow-x-clip">
      <div className="container ">
        <div className="section-heading relative">
          <h3 className="section-title">Sign up for free today </h3>
          <p className="section-description2 mt-5">
            Celebrate the joy of accomplishment with app designed to track your progress and motivate your efforts
          </p>

          <Image
            className="absolute -left-[350px] -top-[137px]"
            src={star}
            width={362}
            height={362}
            alt="star" />

          <Image
            className="absolute -right-[331px] -top-[19px]"
            src={sprintImage}
            width={362}
            height={362}
            alt="spring image" />
        </div>

        <div className="flex justify-center mt-10 gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">Learn more</button>
        </div>

      </div>
    </section>
  );
};