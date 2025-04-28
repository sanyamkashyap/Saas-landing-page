import logo from "@/assets/logosaas.png"
import Image from "next/image";
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialInsta from "@/assets/social-insta.svg"

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Image src={logo} width={40} height={40} alt="logo"></Image>
        <nav>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Carrers</a>
        </nav>
      </div>
    </footer>
  );
};
