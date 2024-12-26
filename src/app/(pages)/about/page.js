import Footer from '@/components/Footer/Footer';
import FunFactTwo from '@/components/FunFactTwo/FunFactTwo';
import HeaderCloned from "@/components/Header/HeaderCloned";
import Header from "@/components/Header/Header";
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import TeamOne from '@/components/TeamOne/TeamOne';
// import TestimonialsTwo from '@/components/TestimonialsTwo/TestimonialsTwo';
import React from 'react';
import AboutOne from '@/components/AboutOne/AboutOne';
import FunFactOne from '@/components/FunFactOne/FunFactOne';
import TestimonialsFour from '@/components/TestimonialsFour/TestimonialsFour';

export const metadata = {
    title: "About",
};

const page = () => {
    return (
        <Layout>
            <Header />
            <HeaderCloned />
            <PageHeader title="About Page" subTitle="About" />
            <AboutOne />
            <FunFactTwo />
            {/* <CtaOne page={true} /> */}
            {/* <ServiceTwo page={true} titleTwo="two" /> */}
            <TestimonialsFour page={true} />
            <FunFactOne />
            <TeamOne />
            <MailTwo />
            <Footer/>
        </Layout>
    );
};

export default page;