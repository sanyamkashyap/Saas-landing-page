import productImage from "@/assets/product-image.png"
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
      <div className="container">
        <div>Boost your poductivity</div>
        <h2>A more effective way to track progress</h2>
        <p>Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just with this template</p>
        <Image src={productImage} alt="product image" className=""></Image>
      </div>
    </section>
  );
};

