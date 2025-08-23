import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"
import SocialPin from "@/assets/social-pin.svg"

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
        <div className="py-8">
          <div className="flex justify-between gap-4">
            <div>
              <div>
                <Image src={logo} width={40} height={40} alt="logo" className="mb-4"></Image>
                <p className="text-sm text-gray-400 mb-4 w-60">Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just with this template</p>
              </div>
              <div className="flex gap-2">
                <SocialInsta />
                <SocialX />
                <SocialLinkedIn />
                <SocialPin />
                <SocialYoutube />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h4>{section.title}</h4>
                  <ul>
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-400 hover:text-white">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
              }
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};
