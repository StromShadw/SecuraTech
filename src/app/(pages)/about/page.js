
import AboutThree from '@/components/AboutThree/AboutThree';
import CtaOne from '@/components/CtaOne/CtaOne';
import FaqOne from '@/components/FaqOne/FaqOne';
import Footer from '@/components/Footer/Footer';
import FunFactTwo from '@/components/FunFactTwo/FunFactTwo';
import HeaderCloned from "@/components/Header/HeaderCloned";
import Header from "@/components/Header/Header";
import Layout from '@/components/Layout/Layout';
import MailTwo from '@/components/MailTwo/MailTwo';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceTwo from '@/components/ServiceTwo/ServiceTwo';
import TeamOne from '@/components/TeamOne/TeamOne';
import TestimonialsTwo from '@/components/TestimonialsTwo/TestimonialsTwo';
import React from 'react';

export const metadata = {
    title: "About",
};

const page = () => {
    return (
        <Layout>
            <Header />
            <HeaderCloned />
            <PageHeader title="About Page" subTitle="About" />
            <AboutThree />
            <FunFactTwo />
            <CtaOne page={true} />
            <ServiceTwo page={true} titleTwo="two" />
            <TestimonialsTwo page={true} />
            <FaqOne />
            <TeamOne />
            <MailTwo />
            <Footer/>
        </Layout>
    );
};

export default page;