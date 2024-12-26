import bg from "@/assets/images/shapes/contact-2-shape-1.png";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const contactTwoData = {
  infoIcon: "icon-customer-service",
  infoText:
    "Business tailored it design, management & support business agency elit, sed do eiusmod tempor.",
  infoTitle: "Contact Information ",

  bg,
  infoBoxs: [
    {
      id: 1,
      icon: "icon-phone-call",
      title: "Call This Now-INDIA",
      text: "+916356554610",
      href: "+916356554610",
      subHref: "tel",
    },
    {
      id: 1,
      icon: "icon-phone-call",
      title: "Call This Now-USA",
      text: "+14389283109",
      href: "+14389283109",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-open-mail",
      title: "Email Us",
      text: "info@securacybertech.com",
      href: "info@securacybertech.com",
      subHref: "mailto",
    },

    {
      id: 3,
      icon: "icon-pin",
      title: "Location",
      text: "INDIA/USA",
    },
  ],
  socials: [
    {
      id: 1,
      icon: faFacebookF,
      link: "https://facebook.com",
      name: "Facebook",
    },
    {
      id: 2,
      icon: faPinterestP,
      link: "https://pinterest.com",
      name: "Pinterest",
    },
    { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
    {
      id: 4,
      icon: faInstagram,
      link: "https://instagram.com",
      name: "Instagram",
    },
  ],

  tagLine: "Our Contact Us",
  title: "Get free Business touch Customers me.",
  text: "Business tailored it design, management & support services \n business agency elit, sed do eiusmod tempor.",
};

export default contactTwoData;
