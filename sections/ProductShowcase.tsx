import productImage from "@/assets/product-image.png"
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
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
          <Image
            src={productImage}
            alt="product image"
            className="mt-10"
          />
          <Image
            src={pyramidImage}
            alt="pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImage}
            alt="tube image"
            height={248}
            width={248}
            className="hidden md:block absolute -left-36 bottom24"
          />
        </div>
        <div className="flex gap-4">
          <div>
            <h5 className="text-[18px] font-bold">Integration ecosystem</h5>
            <p>Track your progress and motivate your efforts everyday</p>
            <button className="btn btn-text">Learn more</button>
          </div>
          <div>
            <h5 className="text-[18px] font-bold">Goal setting and tracking</h5>
            <p>Set and track goals with manageable task breakdowns</p>
            <button className="btn btn-text">Learn more</button>
          </div>
          <div>
            <h5 className="text-[18px] font-bold">Secure data encryption</h5>
            <p>Ensure your data safety with top-tier encryption</p>
            <button className="btn btn-text">Learn more</button>
          </div>
          <div>
            <h5 className="text-[18px] font-bold">Integration ecosystem</h5>
            <p>Track your progress and motivate your efforts everyday</p>
            <button className="btn btn-text">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

