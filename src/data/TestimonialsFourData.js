
import quote from "@/assets/images/shapes/testimonial-bg-quote-three.png";

import cardImage1 from "@/assets/images/resources/testi-4-1.jpg";
import cardImage2 from "@/assets/images/resources/testi-4-2.jpg";
import cardImage3 from "@/assets/images/resources/testi-4-3.jpg";

const testimonialsFourData = {

    quote,
    tagLine: "What our clients are saying",
    title: "“Customer feedback: Our roadmap to perfection.”",
    carouselData: [
        {
            id: 1,
            image: cardImage1,
            content: "Impressive cybersecurity GRC tool designed by team Secura. Continuous support & availability added substantial value to the entire software development project. Overall excellent services.With its dynamic admin panel.",
            name: "Muzammil Mohammed Riyaz",
            // designation: "Founder",
            rating: ["icofont-star", "icofont-star", "icofont-star", "icofont-star"]
        },
        {
            id: 2,
            image: cardImage2,
            content: "The website designed & developed by team Secura is really impressive, that helped me get better at what I do. With its dynamic admin panel and customised configuration this is the best IT website you can get.",
            name: "Samuel Donkor",
            // designation: "Manager",
            rating: ["icofont-star", "icofont-star", "icofont-star", "icofont-star", "icofont-star"]
        },
        {
            id: 3,
            image: cardImage3,
            content: "Impressive website with much attention to every small detail. Secura's developers has great technical skillset which makes them the best in the industry. Also, great support and awesome staff",
            name: "Samuel Udoh",
            // designation: "Founder",
            rating: ["icofont-star", "icofont-star", "icofont-star", "icofont-star"]
        },
    ],
};

export default testimonialsFourData;
