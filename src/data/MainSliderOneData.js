import shape from '@/assets/images/shapes/slider-1-shape-1.png'
import bg1 from '@/assets/images/backgrounds/slider-1-1.jpeg'
import bg2 from '@/assets/images/backgrounds/slider-1-2.jpg'
import bg3 from '@/assets/images/backgrounds/slider-1-3.jpg'
import { faFacebookF, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
const mainSliderOneData = [
    {
        id: 1,
        shape,
        bg: bg1,
        subTitle: "Wellcome To It-Solution !",
        title: "WEB DEVELOPMENT",
        text: "PHP, WordPress, Laravel, CodeIgniter, NodeJs, ReactJS, Shopify, Python.",
        social: [
            { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
            { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
            { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
            { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
        ],
        floatingText: "Tolak"

    },
    {
        id: 2,
        shape,
        bg: bg2,
        subTitle: "Wellcome To It-Solution !",
        title: "MOBILE APP DEVELOPMENT",
        text: "Android, iPhone/iOS, React Native, Flutter, Cross-Platform App.",
        social: [
            { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
            { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
            { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
            { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
        ],
        floatingText: "Tolak"

    },
    {
        id: 3,
        shape,
        bg: bg3,
        subTitle: "Wellcome To It-Solution !",
        title: "UNITY DEVELOPMENT",
        text: "Augmented Reality, Virtual Reality, Game Development, 3D Design & Animation.",
        social: [
            { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
            { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
            { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
            { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
        ],
        floatingText: "Tolak"




    }

]
export default mainSliderOneData