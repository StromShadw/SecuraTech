import fullstackdevelopment from '@/assets/images/resources/service-d-1.jpg';
// import fullstackdevelopment from '@/assets/images/resources/service-d-7.jpg';
import content from '@/assets/images/resources/service-d-content.jpg';
import webDevelopment from '@/assets/images/resources/service-d-2.jpg';
import webDesigning from '@/assets/images/resources/service-d-3.jpg';

import mobileAppDevelopment from '@/assets/images/resources/service-d-4.jpg';

import crmSystems from '@/assets/images/resources/service-d-5.jpg';

import erpSystems from '@/assets/images/resources/service-d-6.jpg';
const serviceDetailsData =
    [
        {
            id: "/full-stack-development",
            thumbnailImage: fullstackdevelopment,
            sidebar: {
                title: "All Services:",
                navItems: [
                    { id: 1, name: "Full Stack Development", href: "/full-stack-development" },
                    { id: 2, name: "Web Development", href: "/web-development" },
                    { id: 3, name: "Web Designing", href: "/web-designing" },
                    { id: 4, name: "Mobile Application Development", href: "/mobile-application-development" },
                    { id: 5, name: "CRM Systems", href: "/crm-systems" },
                    { id: 6, name: "ERP Systems", href: "/erp-systems" },

                ],
            },
            content: [
                "Transform your digital presence and elevate your business. From end-to-end development to seamless integrations, our team ensures robust and scalable solutions. Leveraging modern technologies and best practices, we create applications that are both functional and user-centric.",
                "Empowering your business with top-tier full-stack development expertise."
            ],
            skills: [
                {
                    "id": 1,
                    "title": "Frontend Development",
                    "text": "Expert in crafting responsive and dynamic user interfaces.",
                    "percentage": 85
                },
                {
                    "id": 2,
                    "title": "Backend Development",
                    "text": "Proficient in building secure, efficient, and scalable backend systems.",
                    "percentage": 90
                },
                {
                    "id": 3,
                    "title": "Database Management",
                    "text": "Experienced in designing and managing robust database architectures.",
                    "percentage": 80
                },
                {
                    "id": 4,
                    "title": "API Development",
                    "text": "Skilled in creating RESTful and GraphQL APIs for seamless communication.",
                    "percentage": 75
                }
            ],
            lists: [
                {
                    "id": 1,
                    "items": [
                        "We provide cutting-edge frontend development using React, Angular, and Vue.js.",
                        "Backend solutions powered by Node.js, Django, and Spring Boot."
                    ]
                },
                {
                    "id": 2,
                    "items": [
                        "Custom API development to integrate services effectively.",
                        "Database solutions using MySQL, PostgreSQL, MongoDB, and more."
                    ]
                }
            ],
            solutionText:
                "Our tailored full-stack development services focus on creating end-to-end solutions. From prototyping to deployment, we ensure your application is built for performance, scalability, and user engagement.",
            contentImage: content,
            lastText:
                "Transform your digital presence with our professional full-stack development services. From user-friendly interfaces to powerful backend systems, we ensure your business achieves its technological goals. Combining modern frameworks and tools, our solutions are reliable, secure, and tailored to your needs."
        },
        {
            id: "/web-development",
            thumbnailImage: webDevelopment,
            sidebar: {
                title: "All Services:",
                navItems: [
                    { id: 1, name: "Full Stack Development", href: "/full-stack-development" },
                    { id: 2, name: "Web Development", href: "/web-development" },
                    { id: 3, name: "Web Designing", href: "/web-designing" },
                    { id: 4, name: "Mobile Application Development", href: "/mobile-application-development" },
                    { id: 5, name: "CRM Systems", href: "/crm-systems" },
                    { id: 6, name: "ERP Systems", href: "/erp-systems" },
                ],
            },
            content: [
                "We specialize in reenergizing your business with cutting-edge web solutions. From full-stack development to innovative designs, our services are tailored to meet your needs.",
                "Our professional team ensures that each project is delivered with precision, combining industry expertise and innovative strategies to achieve excellence.",
            ],
            skills: [
                {
                    id: 1,
                    title: "Solution Business",
                    text: "Providing innovative IT solutions tailored to your business needs.",
                    percentage: 45,
                },
                {
                    id: 2,
                    title: "Marketing Team",
                    text: "Delivering high-impact marketing strategies that drive growth.",
                    percentage: 36,
                },
            ],
            lists: [
                {
                    id: 1,
                    items: [
                        "We provide revolutionary IT solutions for your business.",
                        "Expert strategies to elevate your digital presence.",
                    ],
                },
                {
                    id: 2,
                    items: [
                        "Customized solutions for seamless operations.",
                        "Dedicated support to achieve your goals.",
                    ],
                },
            ],
            solutionText:
                "Our business-tailored IT design, management, and support services are designed to optimize your business operations effectively.",
            contentImage: content, // Ensure `content` is imported properly
            lastText:
                "Transform your business with our professional IT solutions. Our experienced team leverages advanced technologies to provide exceptional results tailored to your specific needs.",
        },
        {
            id: "/web-designing",
            thumbnailImage: webDesigning,
            sidebar: {
                title: "All Services:",
                navItems: [
                    { id: 1, name: "Full Stack Development", href: "/full-stack-development" },
                    { id: 2, name: "Web Development", href: "/web-development" },
                    { id: 3, name: "Web Designing", href: "/web-designing" },
                    { id: 4, name: "Mobile Application Development", href: "/mobile-application-development" },
                    { id: 5, name: "CRM Systems", href: "/crm-systems" },
                    { id: 6, name: "ERP Systems", href: "/erp-systems" },
                ],
            },
            content: [
                "Enhance your online presence with our creative web design solutions. From user-friendly interfaces to visually captivating layouts, we cater to your specific needs.",
                "Our experienced designers use the latest technologies and trends to craft unique websites that align perfectly with your brand and business goals.",
            ],
            skills: [
                {
                    id: 1,
                    title: "Creative Design",
                    text: "Delivering innovative and visually stunning web designs to captivate your audience.",
                    percentage: 50,
                },
                {
                    id: 2,
                    title: "User Experience",
                    text: "Ensuring intuitive and seamless user experiences for your website visitors.",
                    percentage: 40,
                },
            ],
            lists: [
                {
                    id: 1,
                    items: [
                        "Crafting responsive and engaging web designs for diverse industries.",
                        "Blending creativity and functionality for impactful user experiences.",
                    ],
                },
                {
                    id: 2,
                    items: [
                        "Focus on aligning designs with brand identity.",
                        "Utilizing modern tools to deliver cutting-edge designs.",
                    ],
                },
            ],
            solutionText:
                "Our bespoke web design services combine creativity and strategy to deliver solutions that elevate your brand identity and customer engagement.",
            contentImage: content, // Ensure `content` is imported properly
            lastText:
                "Empower your business with professional web designing services. Our expert team creates designs that not only look stunning but also drive results tailored to your business goals.",
        },
        {
            id: "/mobile-application-development",
            thumbnailImage: mobileAppDevelopment,
            sidebar: {
                title: "All Services:",
                navItems: [
                    { id: 1, name: "Full Stack Development", href: "/full-stack-development" },
                    { id: 2, name: "Web Development", href: "/web-development" },
                    { id: 3, name: "Web Designing", href: "/web-designing" },
                    { id: 4, name: "Mobile Application Development", href: "/mobile-application-development" },
                    { id: 5, name: "CRM Systems", href: "/crm-systems" },
                    { id: 6, name: "ERP Systems", href: "/erp-systems" },
                ],
            },
            content: [
                "Take your business to the next level with our mobile application development services. We create feature-rich and user-friendly apps that cater to your unique requirements.",
                "Our team of skilled developers leverages the latest technologies to build mobile apps that are scalable, secure, and engaging for users across all platforms.",
            ],
            skills: [
                {
                    id: 1,
                    title: "App Development",
                    text: "Creating high-performance mobile applications tailored to your needs.",
                    percentage: 60,
                },
                {
                    id: 2,
                    title: "User-Centric Design",
                    text: "Designing intuitive interfaces to enhance user engagement and satisfaction.",
                    percentage: 50,
                },
            ],
            lists: [
                {
                    id: 1,
                    items: [
                        "Developing cross-platform and native mobile applications.",
                        "Implementing advanced features to meet modern user demands.",
                    ],
                },
                {
                    id: 2,
                    items: [
                        "Focus on security and scalability.",
                        "Ensuring seamless integration with existing systems.",
                    ],
                },
            ],
            solutionText:
                "Our mobile application development services are designed to help businesses enhance their digital presence, improve customer engagement, and achieve their goals effectively.",
            contentImage: content,
            lastText:
                "Boost your business potential with our expert mobile application development services. Our dedicated team ensures that your app is designed to deliver outstanding performance and user satisfaction.",
        },
        {
            id: "/crm-systems",
            thumbnailImage: crmSystems,
            sidebar: {
                title: "All Services:",
                navItems: [
                    { id: 1, name: "Full Stack Development", href: "/full-stack-development" },
                    { id: 2, name: "Web Development", href: "/web-development" },
                    { id: 3, name: "Web Designing", href: "/web-designing" },
                    { id: 4, name: "Mobile Application Development", href: "/mobile-application-development" },
                    { id: 5, name: "CRM Systems", href: "/crm-systems" },
                    { id: 6, name: "ERP Systems", href: "/erp-systems" },
                ],
            },
            content: [
                "Streamline your business operations with our customized CRM systems. We develop solutions that enhance customer relationships and improve operational efficiency.",
                "Our team ensures seamless integration of CRM systems into your business, offering tools that help manage customer interactions, sales, and support effectively.",
            ],
            skills: [
                {
                    id: 1,
                    title: "Customer Management",
                    text: "Providing tailored CRM solutions to effectively manage customer data and interactions.",
                    percentage: 65,
                },
                {
                    id: 2,
                    title: "Operational Efficiency",
                    text: "Optimizing workflows to enhance business productivity and collaboration.",
                    percentage: 55,
                },
            ],
            lists: [
                {
                    id: 1,
                    items: [
                        "Custom-built CRM systems to fit your business needs.",
                        "Advanced analytics and reporting for better decision-making.",
                    ],
                },
                {
                    id: 2,
                    items: [
                        "Seamless integration with existing tools and platforms.",
                        "Ongoing support and maintenance for smooth operations.",
                    ],
                },
            ],
            solutionText:
                "Our CRM system solutions are designed to help businesses build stronger customer relationships, drive sales, and improve service delivery with efficient and user-friendly tools.",
            contentImage: content,
            lastText:
                "Transform the way you manage customer relationships with our cutting-edge CRM systems. Let us help you boost customer satisfaction and streamline your business processes.",
        },
        {
            id: "/erp-systems",
            thumbnailImage: erpSystems,
            sidebar: {
                title: "All Services:",
                navItems: [
                    { id: 1, name: "Full Stack Development", href: "/full-stack-development" },
                    { id: 2, name: "Web Development", href: "/web-development" },
                    { id: 3, name: "Web Designing", href: "/web-designing" },
                    { id: 4, name: "Mobile Application Development", href: "/mobile-application-development" },
                    { id: 5, name: "CRM Systems", href: "/crm-systems" },
                    { id: 6, name: "ERP Systems", href: "/erp-systems" },
                ],
            },
            content: [
                "Optimize your business operations with our robust ERP systems. We deliver solutions designed to integrate and streamline your processes across all departments.",
                "Our team specializes in developing scalable ERP systems that enhance efficiency, provide actionable insights, and support your business growth.",
            ],
            skills: [
                {
                    id: 1,
                    title: "Process Integration",
                    text: "Ensuring seamless integration of all business processes into a unified system.",
                    percentage: 70,
                },
                {
                    id: 2,
                    title: "Data Management",
                    text: "Providing centralized data solutions for better decision-making and reporting.",
                    percentage: 60,
                },
            ],
            lists: [
                {
                    id: 1,
                    items: [
                        "Customizable ERP solutions tailored to your business needs.",
                        "Advanced analytics for real-time performance monitoring.",
                    ],
                },
                {
                    id: 2,
                    items: [
                        "Improved collaboration and communication across departments.",
                        "Scalable systems to grow with your business demands.",
                    ],
                },
            ],
            solutionText:
                "Our ERP systems are designed to enhance operational efficiency, improve resource management, and drive business success through a cohesive and scalable solution.",
            contentImage: content,
            lastText:
                "Revolutionize your business operations with our expert ERP system solutions. Let us help you achieve seamless processes and unparalleled productivity.",
        }

    ]


export default serviceDetailsData;
