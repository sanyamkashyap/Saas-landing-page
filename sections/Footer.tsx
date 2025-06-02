import logo from "@/assets/logosaas.png"
import Image from "next/image";
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialInsta from "@/assets/social-insta.svg"

const footerLinks = [
  {
    title: 'Product',
    links: ['Features', 'Integrations', 'Updates', 'FAQ', 'Pricing'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Manifesto', 'Press', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Examples', 'Community', 'Guides', 'Docs'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security'],
  },
];


export const Footer = () => {

  return (
    <footer className="bg-black text-white px-6">
      <div className="container">
        <div>
          <div>
            <div>
            <Image src={logo} width={40} height={40} alt="logo" className="mb-4"></Image>
            <p className="text-sm text-gray-400 mb-4">Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just with this template</p>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
