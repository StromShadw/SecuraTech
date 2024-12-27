import image from '@/assets/images/resources/counter-1-1.jpg'
import shape from '@/assets/images/shapes/counter-border-1.png'
import shapeRtl from '@/assets/images/shapes/counter-border-1-rtl.png'

const funFactOneData = {
    image,
    shape,
    shapeRtl,
    items: [
        {
            id: 1,
            text: 'Projects Completed',
            count: "100",
            identity: ""

        },
        {
            id: 2,
            text: 'Satisfied Clients',
            count: "50",
            identity: "funfact-one__item--two"

        },
        {
            id: 3,
            text: 'Years of Experience',
            count: "10",
            identity: "funfact-one__item--three"

        }
    ]
    ,
    accordionData: [
        {
            id: 1,
            header: 'Streamlined Project Management',
            content: "Our platform offers a seamless project management experience, enabling teams to collaborate effectively and deliver projects on time."
        },
        {
            id: 2,
            header: 'Customer-Centric Approach',
            content: "We prioritize customer satisfaction by tailoring our solutions to meet unique client needs, ensuring long-lasting partnerships."
        },
        {
            id: 3,
            header: 'Innovative Technology',
            content: "We leverage the latest technologies to provide cutting-edge solutions that drive efficiency and foster innovation."
        },
        {
            id: 4,
            header: 'Join Our Dynamic Team',
            content: "Be part of a team that values creativity, collaboration, and continuous growth. Together, we achieve remarkable results."
        },
        {
            id: 5,
            header: 'Commitment to Excellence',
            content: "We are dedicated to delivering excellence in every aspect of our work, setting benchmarks for quality and reliability."
        },
    ]

}

export default funFactOneData;